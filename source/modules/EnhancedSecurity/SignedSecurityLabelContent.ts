import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import HASH from "../AuthenticationFramework/HASH";
import Name from "../InformationFramework/Name";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import validateTag from "../../validateTag";
import KeyIdentifier from "../CertificateExtensions/KeyIdentifier";
import SecurityLabel from "./SecurityLabel";

/**
 * `SignedSecurityLabelContent ::= SEQUENCE {
 *   attHash        HASH{AttributeTypeAndValue},
 *   issuer         Name OPTIONAL, -- name of labelling authority
 *   keyIdentifier  KeyIdentifier OPTIONAL,
 *   securityLabel  SecurityLabel,
 *   ... }`
 */
export default
class SignedSecurityLabelContent {
    constructor (
        readonly attHash: HASH,
        readonly issuer: Name | undefined,
        readonly keyIdentifier: KeyIdentifier | undefined,
        readonly securityLabel: SecurityLabel,
    ) {}

    public static fromElement (value: DERElement): SignedSecurityLabelContent {
        let attHash!: HASH;
        let issuer: Name | undefined;
        let keyIdentifier: KeyIdentifier | undefined;
        let securityLabel!: SecurityLabel;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "attHash",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    attHash = HASH.fromElement(el as DERElement);
                },
            },
            {
                name: "issuer",
                optional: true,
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
                name: "keyIdentifier",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.octetString,
                callback: (el: ASN1Element): void => {
                    keyIdentifier = el.octetString;
                },
            },
            {
                name: "securityLabel",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    securityLabel = SecurityLabel.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new SignedSecurityLabelContent(
            attHash,
            issuer,
            keyIdentifier,
            securityLabel,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.attHash.toElement(),
            this.issuer
                ? DERElement.fromSequence(
                    this.issuer.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement()))),
                )
                : undefined,
            this.keyIdentifier
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.octetString,
                    this.keyIdentifier,
                )
                : undefined,
            this.securityLabel.toElement(),
        ]);
    }
}
