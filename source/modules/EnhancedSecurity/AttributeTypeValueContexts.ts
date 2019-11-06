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
import Context from "../InformationFramework/Context";

/**
 * `AttributeTypeValueContexts ::= SEQUENCE {
 *   type         ATTRIBUTE.&id({SupportedAttributes}),
 *   value        ATTRIBUTE.&Type({SupportedAttributes}{@type}),
 *   contextList  SET SIZE (1..MAX) OF Context OPTIONAL,
 *   ... }`
 */
export default
class AttributeTypeValueContexts {
    constructor (
        readonly type: ObjectIdentifier,
        readonly value: ASN1Element,
        readonly contextList: Context[] | undefined,
    ) {}

    public static fromElement (value: DERElement): AttributeTypeValueContexts {
        let type!: ObjectIdentifier;
        let value_!: ASN1Element;
        let contextList: Context[] | undefined = undefined;
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
                name: "value",
                optional: false,
                callback: (el: ASN1Element): void => {
                    value_ = el;
                },
            },
            {
                name: "contextList",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.boolean,
                callback: (el: ASN1Element): void => {
                    contextList = el.sizeConstrainedSetOf(1)
                        .map((c) => Context.fromElement(c as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new AttributeTypeValueContexts(type, value_, contextList);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.type,
            ),
            this.value as DERElement | undefined,
            this.contextList
                ? DERElement.fromSet(this.contextList.map((c) => c.toElement()))
                : undefined,
        ]);
    }
}
