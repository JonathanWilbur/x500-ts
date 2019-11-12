import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import CertificateSerialNumber from "./CertificateSerialNumber";
import Name from "../InformationFramework/Name";
import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    validateConstruction,
} from "asn1-ts";

/**
 * `IssuerSerialNumber ::= SEQUENCE {
 *   issuer        Name,
 *   serialNumber  CertificateSerialNumber,
 *   ... }`
 */
export default
class IssuerSerialNumber {
    constructor (
        readonly issuer: Name,
        readonly serialNumber: CertificateSerialNumber,
    ) {}

    public static fromElement (value: ASN1Element): IssuerSerialNumber {
        let issuer!: Name;
        let serialNumber!: CertificateSerialNumber;
        const specification = [
            {
                name: "issuer",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    issuer = el.sequence
                        .map((rdn: ASN1Element) => rdn.sequence
                            .map((atav: ASN1Element) => AttributeTypeAndValue.fromElement(atav as DERElement)))
                },
            },
            {
                name: "serialNumber",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    serialNumber = el.octetString;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new IssuerSerialNumber(
            issuer,
            serialNumber,
        );
    }

    public toElement (): DERElement {
        const serialNumberElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            ASN1UniversalType.integer,
        );
        serialNumberElement.octetString = this.serialNumber;
        return DERElement.fromSequence([
            DERElement.fromSequence(
                this.issuer
                    .map((atav) => DERElement.fromSequence(atav
                        .map((rdn) => rdn.toElement())))
            ),
            serialNumberElement,
        ]);
    }

    public fromBytes (value: Uint8Array): IssuerSerialNumber {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return IssuerSerialNumber.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
