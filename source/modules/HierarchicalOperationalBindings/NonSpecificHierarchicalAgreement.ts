import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import DistinguishedName from "../InformationFramework/DistinguishedName";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import validateTag from "../../validateTag";

/**
 * `NonSpecificHierarchicalAgreement ::= SEQUENCE {
 *   immediateSuperior  [1]  DistinguishedName,
 *   ... }`
 */
export default
class NonSpecificHierarchicalAgreement {
    constructor (
        readonly immediateSuperior: DistinguishedName,
    ) {}

    public static fromElement (value: DERElement): NonSpecificHierarchicalAgreement {
        let immediateSuperior!: DistinguishedName;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "immediateSuperior",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    immediateSuperior = el.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `immediateSuperior[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement,
                                        `immediateSuperior[${rdnIndex}][${atavIndex}]`,
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
        return new NonSpecificHierarchicalAgreement(immediateSuperior);
    }

    public toElement (): DERElement {
        const immediateSuperiorElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            1,
        );
        immediateSuperiorElement.sequence = this.immediateSuperior
            .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));
        return DERElement.fromSequence([
            immediateSuperiorElement,
        ]);
    }
}
