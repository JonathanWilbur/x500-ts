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
 * `AttributeTypeAssertion ::= SEQUENCE {
 *   type              ATTRIBUTE.&id({SupportedAttributes}),
 *   assertedContexts  SEQUENCE SIZE (1..MAX) OF ContextAssertion OPTIONAL,
 *   ... }`
 */
export default
class AttributeTypeAssertion {
    constructor (
        readonly type: ObjectIdentifier,
        readonly assertedContexts: ContextAssertion[] | undefined,
    ) {}

    public static fromElement (value: ASN1Element): AttributeTypeAssertion {
        let type!: ObjectIdentifier;
        let assertedContexts: ContextAssertion[] | undefined = undefined;
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
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    assertedContexts = el.sizeConstrainedSetOf(1)
                        .map((context) => ContextAssertion.fromElement(context as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new AttributeTypeAssertion(
            type,
            assertedContexts,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.type,
            ),
            this.assertedContexts
                ? DERElement.fromSequence(this.assertedContexts.map((ac) => ac.toElement()))
                : undefined,
        ]);
    }

    public static fromBytes (value: Uint8Array): AttributeTypeAssertion {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return AttributeTypeAssertion.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
