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
 * `TeletexDomainDefinedAttribute ::= SEQUENCE {
 *   type   TeletexString(SIZE (1..ub-domain-defined-attribute-type-length)),
 *   value  TeletexString(SIZE (1..ub-domain-defined-attribute-value-length)) }`
 */
export default
class TeletexDomainDefinedAttribute {
    constructor (
        readonly type: Uint8Array,
        readonly value: Uint8Array,
    ) {}

    public static fromElement (value: DERElement): TeletexDomainDefinedAttribute {
        let type!: Uint8Array;
        let value_!: Uint8Array;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "type",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.teletexString,
                callback: (el: ASN1Element): void => {
                    type = el.teletexString;
                },
            },
            {
                name: "value",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.teletexString,
                callback: (el: ASN1Element): void => {
                    value_ = el.teletexString;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new TeletexDomainDefinedAttribute(type, value_);
    }

    public toElement (): DERElement {
        const typeElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.teletexString,
        );
        typeElement.teletexString = this.type;
        const valueElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.teletexString,
        );
        valueElement.teletexString = this.value;
        return DERElement.fromSequence([
            typeElement,
            valueElement,
        ]);
    }
}
