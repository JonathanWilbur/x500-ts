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
 * `ExtensionAttribute ::= SEQUENCE {
 *   extension-attribute-type  [0]  EXTENSION-ATTRIBUTE.&id({ExtensionAttributeTable}),
 *   extension-attribute-value [1]  EXTENSION-ATTRIBUTE.&Type({ExtensionAttributeTable}{@extension-attribute-type}) }`
 */
export default
class ExtensionAttribute {
    constructor (
        readonly extensionAttributeType: ObjectIdentifier,
        readonly extensionAttributeValue: ASN1Element,
    ) {}

    public static fromElement (value: DERElement): ExtensionAttribute {
        let extensionAttributeType!: ObjectIdentifier;
        let extensionAttributeValue!: ASN1Element;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "extension-attribute-type",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    extensionAttributeType = el.objectIdentifier;
                },
            },
            {
                name: "extension-attribute-type",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    extensionAttributeValue = el.inner;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ExtensionAttribute(extensionAttributeType, extensionAttributeValue);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
                this.extensionAttributeType,
            ),
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
                this.extensionAttributeValue,
            ),
        ]);
    }
}
