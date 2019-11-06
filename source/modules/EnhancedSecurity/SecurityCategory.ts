import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
    ObjectIdentifier,
} from "asn1-ts";

/**
 * `SecurityCategory ::= SEQUENCE {
 *   type   [0]  SECURITY-CATEGORY.&id({SecurityCategoriesTable}),
 *   value  [1]  EXPLICIT SECURITY-CATEGORY.&Type({SecurityCategoriesTable}{@type}),
 *   ... }`
 */
export default
class SecurityCategory {
    constructor (
        readonly type: ObjectIdentifier,
        readonly value: ASN1Element,
    ) {}

    public static fromElement (value: DERElement): SecurityCategory {
        let type!: ObjectIdentifier;
        let value_!: ASN1Element;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "type",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    type = el.objectIdentifier;
                },
            },
            {
                name: "value",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    value_ = (el as DERElement).inner;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new SecurityCategory(type, value_);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                0,
                this.type,
            ),
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
                this.value,
            ),
        ]);
    }
}
