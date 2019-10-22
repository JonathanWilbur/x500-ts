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

/**
 * `DITContextUse ::= SEQUENCE {
 *   attributeType           ATTRIBUTE.&id,
 *   mandatoryContexts  [1]  SET SIZE (1..MAX) OF CONTEXT.&id OPTIONAL,
 *   optionalContexts   [2]  SET SIZE (1..MAX) OF CONTEXT.&id OPTIONAL,
 *   ... }`
 */
export default
class DITContextUse {
    constructor (
        readonly attributeType: ObjectIdentifier,
        readonly mandatoryContexts: ObjectIdentifier[] | undefined,
        readonly optionalContexts: ObjectIdentifier[] | undefined,
    ) {}

    public static fromElement (value: DERElement): DITContextUse {
        let attributeType!: ObjectIdentifier;
        let mandatoryContexts: ObjectIdentifier[] | undefined = undefined;
        let optionalContexts: ObjectIdentifier[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "attributeType",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    attributeType = (el as DERElement).objectIdentifier;
                },
            },
            {
                name: "mandatoryContexts",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    mandatoryContexts = el.sizeConstrainedSetOf(1).map((x) => x.objectIdentifier);
                },
            },
            {
                name: "optionalContexts",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    optionalContexts = el.sizeConstrainedSetOf(1).map((x) => x.objectIdentifier);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new DITContextUse(
            attributeType,
            mandatoryContexts,
            optionalContexts,
        );
    }

    public toElement (): DERElement {
        let mandatoryContextsElement: DERElement | undefined = undefined;
        if (this.mandatoryContexts) {
            mandatoryContextsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
            );
            mandatoryContextsElement.set = this.mandatoryContexts.map((x) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                x,
            ));
        }
        let optionalContextsElement: DERElement | undefined = undefined;
        if (this.optionalContexts) {
            optionalContextsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
            );
            optionalContextsElement.set = this.optionalContexts.map((x) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                x,
            ));
        }

        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.attributeType,
            ),
            mandatoryContextsElement,
            optionalContextsElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): DITContextUse {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return DITContextUse.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
