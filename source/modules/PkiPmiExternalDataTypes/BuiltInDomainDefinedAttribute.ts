import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";

/**
 * `BuiltInDomainDefinedAttribute ::= SEQUENCE {
 *   type   PrintableString(SIZE (1..ub-domain-defined-attribute-type-length)),
 *   value  PrintableString(SIZE (1..ub-domain-defined-attribute-value-length)) }`
 */
export default
class BuiltInDomainDefinedAttribute {
    constructor (
        readonly type: string,
        readonly value: string,
    ) {}

    public static fromElement (value: DERElement): BuiltInDomainDefinedAttribute {
        let type!: string;
        let value_!: string;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "type",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.teletexString,
                callback: (el: ASN1Element): void => {
                    type = el.printableString;
                },
            },
            {
                name: "value",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.teletexString,
                callback: (el: ASN1Element): void => {
                    value_ = el.printableString;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new BuiltInDomainDefinedAttribute(type, value_);
    }

    public toElement (): DERElement {
        const typeElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.printableString,
        );
        typeElement.printableString = this.type;
        const valueElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.printableString,
        );
        valueElement.printableString = this.value;
        return DERElement.fromSequence([
            typeElement,
            valueElement,
        ]);
    }
}
