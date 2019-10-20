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
import AttributeType from "../InformationFramework/AttributeType";

/**
 * `ContextAssertion ::= SEQUENCE {
 *   contextType    CONTEXT.&id({SupportedContexts}),
 *   contextValues  SET SIZE (1..MAX) OF
 *       CONTEXT.&Assertion({SupportedContexts}{@contextType}),
 *   ... }`
 */
export default
class ContextAssertion {
    constructor (
        readonly contextType: ObjectIdentifier,
        readonly contextValues: DERElement[],
    ) {}

    public static fromElement (value: DERElement): ContextAssertion {
        let contextType!: AttributeType;
        let contextValues!: DERElement[];
        const specification: ConstructedElementSpecification[] = [
            {
                name: "contextType",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    contextType = (el as DERElement).objectIdentifier;
                },
            },
            {
                name: "contextValues",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    contextValues = (el.sizeConstrainedSetOf(1) as DERElement[]);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ContextAssertion(
            contextType,
            contextValues,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.contextType,
            ),
            DERElement.fromSet(this.contextValues),
        ]);
    }

    public static fromBytes (value: Uint8Array): ContextAssertion {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return ContextAssertion.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
