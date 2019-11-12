import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ObjectIdentifier, ASN1Element } from "asn1-ts";
import * as errors from "../../errors";
import validateTag from "../../validateTag";
import Context from "./Context";

// Actual example of an Attribute.
// 449:d=3  hl=2 l=  32 cons: SEQUENCE
// 451:d=4  hl=2 l=   8 prim: OBJECT            :id-aca-group
// 461:d=4  hl=2 l=  20 cons: SET
// 463:d=5  hl=2 l=  18 cons: SEQUENCE
// 465:d=6  hl=2 l=  16 cons: SEQUENCE
// 467:d=7  hl=2 l=   6 prim: UTF8STRING        :group1
// 475:d=7  hl=2 l=   6 prim: UTF8STRING        :group2

// Attribute {ATTRIBUTE:SupportedAttributes} ::= SEQUENCE {
//     type                ATTRIBUTE.&id({SupportedAttributes}),
//     values              SET SIZE (0..MAX) OF ATTRIBUTE.&Type({SupportedAttributes}{@type}),
//     valuesWithContext   SET SIZE (1..MAX) OF SEQUENCE {
//       value               ATTRIBUTE.&Type({SupportedAttributes}{@type}),
//       contextList         SET SIZE (1..MAX) OF Context,
//       ...} OPTIONAL,
//     ... }

export default
class Attribute {
    constructor (
        readonly type: ObjectIdentifier,
        readonly values: ASN1Element[],
        readonly valuesWithContext: { value: ASN1Element; contextList: Context[] }[] | undefined,
    ) {}

    public static fromElement (value: ASN1Element): Attribute {
        if (value.construction !== ASN1Construction.constructed) {
            throw new errors.X500Error("Attribute was not of constructed construction.");
        }
        const attributeElements: ASN1Element[] = value.sequence;
        if (attributeElements.length < 2) {
            throw new errors.X500Error(`Invalid number of elements in Attribute: ${attributeElements.length}.`);
        }
        if (!ASN1Element.isInCanonicalOrder(attributeElements)) {
            throw new errors.X500Error("Elements of Attribute were not in canonical order.");
        }

        validateTag(attributeElements[0], "Attribute.type",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.objectIdentifier ],
        );

        validateTag(attributeElements[1], "Attribute.values",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.constructed ],
            [ ASN1UniversalType.set ],
        );

        const type: ObjectIdentifier = attributeElements[0].objectIdentifier;
        const values: ASN1Element[] = attributeElements[1].set;
        const valuesWithContext: { value: ASN1Element; contextList: Context[] }[] | undefined = (() => {
            if (
                attributeElements.length <= 2
                || attributeElements[2].tagClass !== ASN1TagClass.universal
                || attributeElements[2].construction !== ASN1Construction.constructed
                || attributeElements[2].tagNumber !== ASN1UniversalType.set
            ) {
                return undefined;
            }
            return attributeElements[2].set.map((vwc: ASN1Element) => {
                validateTag(vwc, "valuesWithContext element",
                    [ ASN1TagClass.universal ],
                    [ ASN1Construction.constructed ],
                    [ ASN1UniversalType.sequence ],
                );
                const vwcElements: ASN1Element[] = vwc.sequence;
                if (vwcElements.length < 2) {
                    throw new errors.X500Error("Too few elements in a valuesWithContext element.");
                }
                validateTag(vwcElements[1], "valuesWithContext.contextList",
                    [ ASN1TagClass.universal ],
                    [ ASN1Construction.constructed ],
                    [ ASN1UniversalType.set ],
                );
                const contexts: ASN1Element[] = vwcElements[1].set;
                if (contexts.length < 1) {
                    throw new errors.X500Error("valuesWithContext.contextList must have at least one Context.");
                }
                return {
                    value: vwcElements[0],
                    contextList: contexts.map(Context.fromElement),
                }
            });
        })();

        return new Attribute(type, values, valuesWithContext);
    }

    public toElement (): DERElement {
        const contextElements: DERElement[] = [];

        const typeElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.objectIdentifier,
        );
        typeElement.objectIdentifier = this.type;
        contextElements.push(typeElement);

        const valuesElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.set,
        );
        valuesElement.set = this.values;
        contextElements.push(valuesElement);

        const valuesWithContextElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.set,
        );
        if (this.valuesWithContext) {
            valuesWithContextElement.set = this.valuesWithContext.map((vwc) => {
                const vwcElement: DERElement = new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.constructed,
                    ASN1UniversalType.sequence,
                );

                const contextValueElement: ASN1Element = vwc.value;
                const contextListElement: DERElement = new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.constructed,
                    ASN1UniversalType.set,
                );
                contextListElement.set = vwc.contextList.map((c) => c.toElement());

                vwcElement.sequence = [
                    contextValueElement,
                    contextListElement,
                ];

                return vwcElement;
            });
            contextElements.push(valuesWithContextElement);
        }

        const contextElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.sequence,
        );
        contextElement.sequence = contextElements;
        return contextElement;
    }

    public static fromBytes (value: Uint8Array): Attribute {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return Attribute.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
