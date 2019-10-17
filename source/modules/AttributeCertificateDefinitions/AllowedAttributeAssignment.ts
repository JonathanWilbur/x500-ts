import GeneralName from "../CertificateExtensions/GeneralName";
import AttributeType from "../InformationFramework/AttributeType";
import Attribute from "../InformationFramework/Attribute";
import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ObjectIdentifier,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";

/**
 * This element does not actually have any definition in the ASN.1 module.
 * Instead `AllowedAttributeAssignments` (notice the plural) is defined as
 * a `SET OF` the sequence that follows:
 *
 * `AllowedAttributeAssignment ::= SEQUENCE {
 *   attributes              [0]  SET OF CHOICE {
 *     attributeType           [0]  AttributeType,
 *     attributeTypeandValues  [1]  Attribute{{SupportedAttributes}},
 *     ... },
 *   holderDomain            [1]  GeneralName,
 *   ... }`
 */
export default
class AllowedAttributeAssignment {
    constructor (
        readonly attributes: (AttributeType | Attribute)[],
        readonly holderDomain: GeneralName,
    ) {}

    public static fromElement (value: DERElement): AllowedAttributeAssignment {
        const attributes: (AttributeType | Attribute)[] = [];
        let holderDomain!: GeneralName;

        const attributesSpecification: ConstructedElementSpecification[] = [
            {
                name: "AllowedAttributeAssignment.attributes",
                optional: true,
                choice: [
                    {
                        name: "attributeType",
                        tagClass: ASN1TagClass.context,
                        construction: ASN1Construction.primitive,
                        tagNumber: 0,
                        callback: (el: ASN1Element): void => {
                            attributes.push(el.objectIdentifier as AttributeType);
                        },
                    },
                    {
                        name: "attributeTypeandValues",
                        tagClass: ASN1TagClass.context,
                        construction: ASN1Construction.constructed,
                        tagNumber: 1,
                        callback: (el: ASN1Element): void => {
                            attributes.push(Attribute.fromElement(el as DERElement));
                        },
                    },
                ],
            },
        ];

        const specification = [
            {
                name: "attributes",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    el.set.forEach((attr) => {
                        validateConstruction([ attr ], attributesSpecification);
                    });
                },
            },
            {
                name: "holderDomain",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    holderDomain = (el as DERElement).inner;
                },
            },
        ];

        const aaaElements: DERElement[] = value.sequence;
        validateConstruction(aaaElements, specification);
        return new AllowedAttributeAssignment(
            attributes,
            holderDomain,
        );
    }

    public toElement (): DERElement {
        const attributesElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            0,
        );
        attributesElement.sequence = this.attributes.map((attr: (AttributeType | Attribute)): DERElement => {
            if (attr instanceof ObjectIdentifier) {
                return new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    0,
                    attr,
                );
            } else {
                const ret: DERElement = attr.toElement();
                ret.tagClass = ASN1TagClass.context;
                ret.tagNumber = 1;
                return ret;
            }
        });
        return DERElement.fromSequence([
            attributesElement,
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
                this.holderDomain,
            ),
        ]);
    }

    public static fromBytes (value: Uint8Array): AllowedAttributeAssignment {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return AllowedAttributeAssignment.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
