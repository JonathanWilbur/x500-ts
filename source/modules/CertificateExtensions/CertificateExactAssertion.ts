import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import CertificateSerialNumber from "../AuthenticationFramework/CertificateSerialNumber";
import { AttributeTypeAndValue, Name, RelativeDistinguishedName } from "../InformationFramework";
import validateTag from "../../validateTag";

/**
 * `CertificateExactAssertion ::= SEQUENCE {
 *   serialNumber  CertificateSerialNumber,
 *   issuer        Name,
 *   ... }`
 */
export default
class CertificateExactAssertion {
    constructor (
        readonly serialNumber: CertificateSerialNumber,
        readonly issuer: Name,
    ) {}

    public static fromElement (value: DERElement): CertificateExactAssertion {
        let serialNumber!: CertificateSerialNumber;
        let issuer!: Name;
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
                    issuer = el.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `issuer[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `issuer[${rdnIndex}][${atavIndex}]`,
                                        [ ASN1TagClass.universal ],
                                        [ ASN1Construction.constructed ],
                                        [ ASN1UniversalType.sequence ],
                                    );
                                    return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                                });
                        });
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new CertificateExactAssertion(serialNumber, issuer);
    }

    public toElement (): DERElement {
        const serialNumberElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.integer,
        );
        serialNumberElement.octetString = this.serialNumber;

        const issuerElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.sequence,
        );
        issuerElement.sequence = this.issuer
            .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));

        return DERElement.fromSequence([
            serialNumberElement,
            issuerElement,
        ]);
    }
}
