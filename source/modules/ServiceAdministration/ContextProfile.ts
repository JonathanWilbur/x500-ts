import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ObjectIdentifier,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";

/**
 * `ContextProfile ::= SEQUENCE {
 *   contextType   CONTEXT.&id({SupportedContexts}),
 *   contextValue  SEQUENCE SIZE (1..MAX) OF CONTEXT.&Assertion
 *                  ({SupportedContexts}{@contextType}) OPTIONAL,
 *   ... }`
 */
export default
class ContextProfile {
    constructor (
        readonly contextType: ObjectIdentifier,
        readonly contextValue: DERElement | undefined,
    ) {}

    public static fromElement (value: DERElement): ContextProfile {
        let contextType!: ObjectIdentifier;
        let contextValue: DERElement | undefined = undefined;
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
                name: "contextValue",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    contextValue = el as DERElement;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ContextProfile(
            contextType,
            contextValue,
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
            this.contextValue
                ? this.contextValue
                : undefined,
        ]);
    }

    public static fromBytes (value: Uint8Array): ContextProfile {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return ContextProfile.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
