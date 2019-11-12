import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ASN1UniversalType,
    ObjectIdentifier,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import ContextProfile from "./ContextProfile";

/**
 * `ResultAttribute ::= SEQUENCE {
 *   attributeType      ATTRIBUTE.&id({SupportedAttributes}),
 *   outputValues       CHOICE {
 *     selectedValues     SEQUENCE OF ATTRIBUTE.&Type
 *                        ({SupportedAttributes}{@attributeType}),
 *     matchedValuesOnly  NULL } OPTIONAL,
 *   contexts      [0]  SEQUENCE SIZE (1..MAX) OF ContextProfile OPTIONAL,
 *   ... }`
 */
export default
class ResultAttribute {
    constructor (
        readonly attributeType: ObjectIdentifier,
        readonly outputValues: DERElement[] | null | undefined,
        readonly contexts: ContextProfile[] | undefined,
    ) {}

    public static fromElement (value: ASN1Element): ResultAttribute {
        let attributeType!: ObjectIdentifier;
        let outputValues: DERElement[] | null | undefined = undefined;
        let contexts: ContextProfile[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "attributeType",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    attributeType = el.objectIdentifier;
                },
            },
            {
                name: "outputValues",
                optional: true,
                choice: [
                    {
                        name: "outputValues.selectedValues",
                        optional: true,
                        tagClass: ASN1TagClass.universal,
                        construction: ASN1Construction.constructed,
                        tagNumber: ASN1UniversalType.sequence,
                        callback: (el: ASN1Element): void => {
                            outputValues = el.sequence as DERElement[];
                        },
                    },
                    {
                        name: "outputValues.matchedValuesOnly",
                        optional: true,
                        tagClass: ASN1TagClass.universal,
                        construction: ASN1Construction.primitive,
                        tagNumber: ASN1UniversalType.nill,
                        callback: (): void => {
                            outputValues = null;
                        },
                    },
                ],
            },
            {
                name: "contexts",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    contexts = el.sizeConstrainedSequenceOf(1)
                        .map((c) => ContextProfile.fromElement(c as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ResultAttribute(
            attributeType,
            outputValues,
            contexts,
        );
    }

    public toElement (): DERElement {
        let outputValuesElement: DERElement | undefined = undefined;
        if (this.outputValues) {
            if (this.outputValues === null) {
                outputValuesElement = new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.nill,
                );
            } else {
                outputValuesElement = DERElement.fromSequence(this.outputValues);
            }
        }
        let contextsElement: DERElement | undefined = undefined;
        if (this.contexts) {
            contextsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
            );
            contextsElement.sequence = this.contexts.map((c) => c.toElement());
        }
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.attributeType,
            ),
            outputValuesElement,
            contextsElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): ResultAttribute {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return ResultAttribute.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
