import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import validateTag from "../../validateTag";
import IncrementalStepRefresh from "./IncrementalStepRefresh";

/**
 * `SubordinateChanges ::= SEQUENCE {
 *   subordinate  RelativeDistinguishedName,
 *   changes      IncrementalStepRefresh,
 *   ... }`
 */
export default
class SubordinateChanges {
    constructor (
        readonly subordinate: RelativeDistinguishedName,
        readonly changes: IncrementalStepRefresh,
    ) {}

    public static fromElement (value: DERElement): SubordinateChanges {
        let subordinate!: RelativeDistinguishedName;
        let changes!: IncrementalStepRefresh;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "subordinate",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    subordinate = el.sizeConstrainedSetOf(1)
                        .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                            validateTag(atavElement as DERElement, `subordinate[${atavIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.sequence ],
                            );
                            return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                        });
                },
            },
            {
                name: "changes",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    changes = IncrementalStepRefresh.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new SubordinateChanges(subordinate, changes);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            DERElement.fromSet(this.subordinate.map((atav) => atav.toElement())),
            this.changes.toElement(),
        ]);
    }
}
