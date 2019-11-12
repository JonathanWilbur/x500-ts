import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
    ObjectIdentifier,
} from "asn1-ts";
import AttributeValueAssertion from "../InformationFramework/AttributeValueAssertion";

/**
 * `MultipleMatchingLocalities ::= SEQUENCE {
 *   matchingRuleUsed  MATCHING-RULE.&id OPTIONAL,
 *   attributeList     SEQUENCE OF AttributeValueAssertion,
 *   ... }`
 */
export default
class MultipleMatchingLocalities {
    constructor (
        readonly matchingRuleUsed: ObjectIdentifier | undefined,
        readonly attributeList: AttributeValueAssertion[],
    ) {}

    public static fromElement (value: ASN1Element): MultipleMatchingLocalities {
        let matchingRuleUsed: ObjectIdentifier | undefined = undefined;
        let attributeList!: AttributeValueAssertion[];
        const specification: ConstructedElementSpecification[] = [
            {
                name: "matchingRuleUsed",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    matchingRuleUsed = el.objectIdentifier;
                },
            },
            {
                name: "attributeList",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    attributeList = el.sequence
                        .map((al) => AttributeValueAssertion.fromElement(al as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new MultipleMatchingLocalities(
            matchingRuleUsed,
            attributeList,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.matchingRuleUsed
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.objectIdentifier,
                    this.matchingRuleUsed,
                )
                : undefined,
            DERElement.fromSequence(this.attributeList.map((al) => al.toElement())),
        ]);
    }

    public static fromBytes (value: Uint8Array): MultipleMatchingLocalities {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return MultipleMatchingLocalities.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
