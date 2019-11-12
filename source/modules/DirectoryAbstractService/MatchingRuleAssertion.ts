import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
    ASN1UniversalType,
    ObjectIdentifier,
} from "asn1-ts";
import AttributeType from "../InformationFramework/AttributeType";

/**
 * `MatchingRuleAssertion ::= SEQUENCE {
 *   matchingRule  [1]  SET SIZE (1..MAX) OF MATCHING-RULE.&id,
 *   type          [2]  AttributeType OPTIONAL,
 *   matchValue    [3]  MATCHING-RULE.&AssertionType (CONSTRAINED BY {
 *     -- matchValue shall be a value of  type specified by the &AssertionType field of
 *     -- one of the MATCHING-RULE information objects identified by matchingRule -- }),
 *   dnAttributes  [4]  BOOLEAN DEFAULT FALSE,
 *   ... }`
 */
export default
class MatchingRuleAssertion {
    constructor (
        readonly matchingRule: ObjectIdentifier[],
        readonly type: AttributeType | undefined,
        readonly matchValue: ASN1Element,
        readonly dnAttributes: boolean,
    ) {}

    public static fromElement (value: ASN1Element): MatchingRuleAssertion {
        let matchingRule!: ObjectIdentifier[];
        let type: AttributeType | undefined = undefined;
        let matchValue!: ASN1Element;
        let dnAttributes: boolean = false;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "matchingRule",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    matchingRule = el.sizeConstrainedSetOf(1).map((mr) => mr.objectIdentifier);
                },
            },
            {
                name: "type",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    type = el.objectIdentifier;
                },
            },
            {
                name: "matchValue",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    matchValue = el;
                },
            },
            {
                name: "dnAttributes",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 4,
                callback: (el: ASN1Element): void => {
                    dnAttributes = el.boolean;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new MatchingRuleAssertion(
            matchingRule,
            type,
            matchValue,
            dnAttributes,
        );
    }

    public toElement (): DERElement {
        const matchingRuleElement: DERElement = DERElement.fromSet(this.matchingRule.map((mr) => new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.objectIdentifier,
            mr,
        )));
        matchingRuleElement.tagClass = ASN1TagClass.context;
        matchingRuleElement.tagNumber = 1;

        return DERElement.fromSequence([
            matchingRuleElement,
            this.type
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    2,
                    this.type,
                )
                : undefined,
            this.matchValue as DERElement,
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                4,
                this.dnAttributes,
            ),
        ]);
    }
}
