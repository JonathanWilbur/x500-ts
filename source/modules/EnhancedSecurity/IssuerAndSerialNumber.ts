import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import Name from "../InformationFramework/Name";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import validateTag from "../../validateTag";
import CertificateSerialNumber from "../AuthenticationFramework/CertificateSerialNumber";

/**
 * `IssuerAndSerialNumber ::= SEQUENCE {
 *   issuer  Name,
 *   serial  CertificateSerialNumber,
 *   ... }`
 */
export default
class IssuerAndSerialNumber {
    constructor (
        readonly issuer: Name,
        readonly serial: CertificateSerialNumber,
    ) {}

    public static fromElement (value: DERElement): IssuerAndSerialNumber {
        let issuer!: Name;
        let serial!: CertificateSerialNumber;
        const specification: ConstructedElementSpecification[] = [
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
            {
                name: "serial",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    serial = el.octetString;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new IssuerAndSerialNumber(issuer, serial);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            DERElement.fromSequence(
                this.issuer.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement()))),
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.serial,
            ),
        ]);
    }
}
