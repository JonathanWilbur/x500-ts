import CertificateSerialNumber from "../AuthenticationFramework/CertificateSerialNumber";
import AttCertIssuer from "./AttCertIssuer";
import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ASN1UniversalType,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";

/**
 * `AttributeCertificateExactAssertion ::= SEQUENCE {
 *   serialNumber  CertificateSerialNumber,
 *   issuer        AttCertIssuer,
 *   ... }`
 */
export default
class AttributeCertificateExactAssertion {
    constructor (
        readonly serialNumber: CertificateSerialNumber,
        readonly issuer: AttCertIssuer,
    ) {}

    public static fromElement (value: ASN1Element): AttributeCertificateExactAssertion {
        let serialNumber!: CertificateSerialNumber;
        let issuer!: AttCertIssuer;
        const specification: ConstructedElementSpecification[] = [
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
            {
                name: "issuer",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    issuer = AttCertIssuer.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new AttributeCertificateExactAssertion(
            serialNumber,
            issuer,
        );
    }

    public toElement (): DERElement {
        const serialNumberElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.integer,
        );
        serialNumberElement.octetString = this.serialNumber;
        const issuerElement: DERElement = this.issuer.toElement();
        return DERElement.fromSequence([
            serialNumberElement,
            issuerElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): AttributeCertificateExactAssertion {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return AttributeCertificateExactAssertion.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
