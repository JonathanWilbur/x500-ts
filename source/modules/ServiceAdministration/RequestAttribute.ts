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
import ContextProfile from "./ContextProfile";
import ContextCombination from "./ContextCombination";
import MatchingUse from "./MatchingUse";

/**
 * `RequestAttribute ::= SEQUENCE {
 *   attributeType            ATTRIBUTE.&id({SupportedAttributes}),
 *   includeSubtypes     [0]  BOOLEAN DEFAULT FALSE,
 *   selectedValues      [1]  SEQUENCE SIZE (0..MAX) OF ATTRIBUTE.&Type
 *                            ({SupportedAttributes}{@attributeType}) OPTIONAL,
 *   defaultValues       [2]  SEQUENCE SIZE (0..MAX) OF SEQUENCE {
 *     entryType                OBJECT-CLASS.&id OPTIONAL,
 *     values                   SEQUENCE OF ATTRIBUTE.&Type
 *                              ({SupportedAttributes}{@attributeType}),
 *                              ...} OPTIONAL,
 *   contexts            [3]  SEQUENCE SIZE (0..MAX) OF ContextProfile OPTIONAL,
 *   contextCombination  [4]  ContextCombination DEFAULT and:{},
 *   matchingUse         [5]  SEQUENCE SIZE (1..MAX) OF MatchingUse OPTIONAL,
 *   ... }`
 */
export default
class RequestAttribute {
    constructor (
        readonly attributeType: ObjectIdentifier,
        readonly includeSubtypes: boolean,
        readonly selectedValues: DERElement[] | undefined,
        readonly defaultValues: { entryType: ObjectIdentifier | undefined; values: DERElement[] }[] | undefined,
        readonly contexts: ContextProfile[] | undefined,
        readonly contextCombination: ContextCombination,
        readonly matchingUse: MatchingUse[] | undefined,
    ) {}

    public static fromElement (value: DERElement): RequestAttribute {
        let attributeType!: ObjectIdentifier;
        let includeSubtypes: boolean = false;
        let selectedValues: DERElement[] | undefined = undefined;
        let defaultValues: { entryType: ObjectIdentifier | undefined; values: DERElement[] }[] | undefined = undefined;
        let contexts: ContextProfile[] | undefined = undefined;
        let contextCombination: ContextCombination = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            1,
        );
        let matchingUse: MatchingUse[] | undefined = undefined;

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
                name: "includeSubtypes",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    includeSubtypes = el.boolean;
                },
            },
            {
                name: "selectedValues",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    selectedValues = el.sequence as DERElement[];
                },
            },
            {
                name: "defaultValues",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    let entryType: ObjectIdentifier | undefined = undefined;
                    let values!: DERElement[];
                    defaultValues = el.sequence.map((dv) => {
                        const defaultValueSpecification: ConstructedElementSpecification[] = [
                            {
                                name: "entryType",
                                optional: true,
                                tagClass: ASN1TagClass.universal,
                                construction: ASN1Construction.primitive,
                                tagNumber: ASN1UniversalType.objectIdentifier,
                                callback: (el2: ASN1Element): void => {
                                    entryType = el2.objectIdentifier;
                                },
                            },
                            {
                                name: "values",
                                optional: false,
                                tagClass: ASN1TagClass.universal,
                                construction: ASN1Construction.constructed,
                                tagNumber: ASN1UniversalType.sequence,
                                callback: (el2: ASN1Element): void => {
                                    values = el2.sequence as DERElement[];
                                },
                            },
                        ];
                        validateConstruction(dv.sequence, defaultValueSpecification);
                        return {
                            entryType,
                            values,
                        };
                    });
                },
            },
            {
                name: "contexts",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    contexts = el.sequence.map((c) => ContextProfile.fromElement(c as DERElement));
                },
            },
            {
                name: "contextCombination",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 4,
                callback: (el: ASN1Element): void => {
                    contextCombination = (el as DERElement).inner;
                },
            },
            {
                name: "matchingUse",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 5,
                callback: (el: ASN1Element): void => {
                    matchingUse = el.sizeConstrainedSequenceOf(1)
                        .map((mu) => MatchingUse.fromElement(mu as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new RequestAttribute(
            attributeType,
            includeSubtypes,
            selectedValues,
            defaultValues,
            contexts,
            contextCombination,
            matchingUse,
        );
    }

    public toElement (): DERElement {
        const requestAttributeElements: DERElement[] = [
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.attributeType,
            ),
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                0,
                this.includeSubtypes
            ),
        ];

        if (this.selectedValues) {
            const selectedValuesElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            selectedValuesElement.sequence = this.selectedValues;
            requestAttributeElements.push(selectedValuesElement);
        }

        if (this.defaultValues) {
            const defaultValuesElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                2,
            );
            defaultValuesElement.sequence = this.defaultValues.map((dv) => DERElement.fromSequence([
                dv.entryType
                    ? new DERElement(
                        ASN1TagClass.universal,
                        ASN1Construction.primitive,
                        ASN1UniversalType.objectIdentifier,
                        dv.entryType,
                    )
                    : undefined,
                DERElement.fromSequence(dv.values),
            ]));
        }

        if (this.contexts) {
            const contextsElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
            );
            contextsElement.sequence = this.contexts.map((c) => c.toElement());
            requestAttributeElements.push(contextsElement);
        }

        if (this.contextCombination) {
            const contextCombinationElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                4,
            );
            contextCombinationElement.inner = this.contextCombination;
            requestAttributeElements.push(contextCombinationElement);
        }

        if (this.matchingUse) {
            const matchingUseElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                5,
            );
            matchingUseElement.sequence = this.matchingUse.map((mu) => mu.toElement());
            requestAttributeElements.push(matchingUseElement);
        }

        return DERElement.fromSequence(requestAttributeElements);
    }

    public static fromBytes (value: Uint8Array): RequestAttribute {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return RequestAttribute.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
