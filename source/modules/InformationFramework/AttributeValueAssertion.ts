import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ObjectIdentifier,
    ASN1UniversalType,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import ContextAssertion from "./ContextAssertion";

/**
 * `AttributeValueAssertion ::= SEQUENCE {
 *   type              ATTRIBUTE.&id({SupportedAttributes}),
 *   assertion         ATTRIBUTE.&equality-match.&AssertionType
 *                       ({SupportedAttributes}{@type}),
 *   assertedContexts  CHOICE {
 *     allContexts       [0]  NULL,
 *     selectedContexts  [1]  SET SIZE (1..MAX) OF ContextAssertion } OPTIONAL,
 *   ... }`
 */
export default
class AttributeValueAssertion {
    constructor (
        readonly type: ObjectIdentifier,
        readonly assertion: DERElement,
        readonly assertedContexts: null | ContextAssertion[] | undefined,
    ) {}

    public static fromElement (value: DERElement): AttributeValueAssertion {
        let type!: ObjectIdentifier;
        let assertion!: DERElement;
        let assertedContexts: null | ContextAssertion[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "type",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    type = (el as DERElement).objectIdentifier;
                },
            },
            {
                name: "assertion",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    assertion = el as DERElement;
                },
            },
            {
                name: "assertedContexts",
                optional: true,
                choice: [
                    {
                        name: "allContexts",
                        optional: true,
                        tagClass: ASN1TagClass.context,
                        construction: ASN1Construction.primitive,
                        tagNumber: 0,
                        callback: (): void => {
                            assertedContexts = null;
                        },
                    },
                    {
                        name: "allContexts",
                        optional: true,
                        tagClass: ASN1TagClass.context,
                        construction: ASN1Construction.primitive,
                        tagNumber: 1,
                        callback: (el: ASN1Element): void => {
                            assertedContexts = el.sizeConstrainedSetOf(1)
                                .map((context) => ContextAssertion.fromElement(context as DERElement));
                        },
                    },
                ],
            },

        ];
        validateConstruction(value.sequence, specification);
        return new AttributeValueAssertion(
            type,
            assertion,
            assertedContexts,
        );
    }

    public toElement (): DERElement {
        let assertedContextsElement: DERElement | undefined = undefined;
        if (typeof this.assertedContexts !== "undefined") {
            if (this.assertedContexts === null) {
                assertedContextsElement = new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    0,
                );
            } else {
                assertedContextsElement = DERElement.fromSet(
                    this.assertedContexts.map((ac) => ac.toElement()),
                );
                assertedContextsElement.tagClass = ASN1TagClass.context;
                assertedContextsElement.tagNumber = 1;
            }
        }

        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.type,
            ),
            this.assertion,
            assertedContextsElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): AttributeValueAssertion {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return AttributeValueAssertion.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
