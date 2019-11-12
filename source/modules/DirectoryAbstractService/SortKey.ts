import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
    ObjectIdentifier,
    ASN1UniversalType,
} from "asn1-ts";
import AttributeType from "../InformationFramework/AttributeType";

/**
 * `SortKey ::= SEQUENCE {
 *   type          AttributeType,
 *   orderingRule  MATCHING-RULE.&id OPTIONAL,
 *   ... }`
 */
export default
class SortKey {
    constructor (
        readonly type: AttributeType,
        readonly orderingRule: ObjectIdentifier | undefined,
    ) {}

    public static fromElement (value: ASN1Element): SortKey {
        let type!: AttributeType;
        let orderingRule: ObjectIdentifier | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "type",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    type = el.objectIdentifier;
                },
            },
            {
                name: "orderingRule",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    orderingRule = el.objectIdentifier;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new SortKey(type, orderingRule);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.type,
            ),
            this.orderingRule
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.objectIdentifier,
                    this.orderingRule,
                )
                : undefined,
        ]);
    }
}
