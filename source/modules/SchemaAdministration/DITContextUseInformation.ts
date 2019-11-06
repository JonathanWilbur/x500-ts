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

/**
 * `DITContextUseInformation ::= SEQUENCE {
 *   mandatoryContexts  [1]  SET SIZE (1..MAX) OF CONTEXT.&id OPTIONAL,
 *   optionalContexts   [2]  SET SIZE (1..MAX) OF CONTEXT.&id OPTIONAL,
 *   ... }`
 */
export default
class DITContextUseInformation {
    constructor (
        readonly mandatoryContexts: ObjectIdentifier[] | undefined,
        readonly optionalContexts: ObjectIdentifier[] | undefined,
    ) {}

    public static fromElement (value: DERElement): DITContextUseInformation {
        let mandatoryContexts: ObjectIdentifier[] | undefined = undefined;
        let optionalContexts: ObjectIdentifier[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "mandatoryContexts",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    mandatoryContexts = el.sizeConstrainedSetOf(1)
                        .map((mc) => mc.objectIdentifier);
                },
            },
            {
                name: "optionalContexts",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    optionalContexts = el.sizeConstrainedSetOf(1)
                        .map((oc) => oc.objectIdentifier);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new DITContextUseInformation(mandatoryContexts, optionalContexts);
    }

    public toElement (): DERElement {
        let mandatoryContextsElement: DERElement | undefined = undefined;
        if (this.mandatoryContexts) {
            mandatoryContextsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
            );
            mandatoryContextsElement.set = this.mandatoryContexts.map((mc) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                mc,
            ));
        }
        let optionalContextsElement: DERElement | undefined = undefined;
        if (this.optionalContexts) {
            optionalContextsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
            );
            optionalContextsElement.set = this.optionalContexts.map((oc) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                oc,
            ));
        }
        return DERElement.fromSequence([
            mandatoryContextsElement,
            optionalContextsElement,
        ]);
    }
}
