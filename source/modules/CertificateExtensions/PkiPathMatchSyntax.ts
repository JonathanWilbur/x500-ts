import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import { Name, RelativeDistinguishedName, AttributeTypeAndValue } from "../InformationFramework";
import validateTag from "../../validateTag";

/**
 * `PkiPathMatchSyntax ::= SEQUENCE {firstIssuer  Name,
 *                                   lastSubject  Name,
 *                                  ... }`
 */
export default
class PkiPathMatchSyntax {
    constructor (
        readonly firstIssuer: Name,
        readonly lastSubject: Name,
    ) {}

    public static fromElement (value: DERElement): PkiPathMatchSyntax {
        let firstIssuer!: Name;
        let lastSubject!: Name;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "firstIssuer",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    firstIssuer = el.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `firstIssuer[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `firstIssuer[${rdnIndex}][${atavIndex}]`,
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
                name: "lastSubject",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    lastSubject = el.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `lastSubject[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `lastSubject[${rdnIndex}][${atavIndex}]`,
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
        return new PkiPathMatchSyntax(firstIssuer, lastSubject);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            DERElement.fromSequence(
                this.firstIssuer.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())))
            ),
            DERElement.fromSequence(
                this.lastSubject.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())))
            ),
        ]);
    }
}
