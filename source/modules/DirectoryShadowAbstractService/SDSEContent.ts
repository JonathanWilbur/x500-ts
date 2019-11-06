import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import SDSEType from "./SDSEType";
import Attribute from "../InformationFramework/Attribute";
import AttributeType from "../InformationFramework/AttributeType";
import DSEType from "../DSAOperationalAttributeTypes/DSEType";

/**
 * `SDSEContent ::= SEQUENCE {
 *   sDSEType          SDSEType,
 *   subComplete       [0]  BOOLEAN DEFAULT FALSE,
 *   attComplete       [1]  BOOLEAN OPTIONAL,
 *   attributes        SET OF Attribute{{SupportedAttributes}},
 *   attValIncomplete  SET OF AttributeType DEFAULT {},
 *   ...}`
 */
export default
class SDSEContent {
    constructor (
        readonly sDSEType: SDSEType,
        readonly subComplete: boolean,
        readonly attComplete: boolean | undefined,
        readonly attributes: Attribute[],
        readonly attValIncomplete: AttributeType[],
    ) {}

    public static fromElement (value: DERElement): SDSEContent {
        let sDSEType!: SDSEType;
        let subComplete: boolean = false;
        let attComplete: boolean | undefined = undefined;
        let attributes!: Attribute[];
        let attValIncomplete: AttributeType[] = [];
        const specification: ConstructedElementSpecification[] = [
            {
                name: "sDSEType",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.bitString,
                callback: (el: ASN1Element): void => {
                    sDSEType = DSEType.fromElement(el as DERElement);
                },
            },
            {
                name: "subComplete",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    subComplete = el.boolean
                },
            },
            {
                name: "attComplete",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    attComplete = el.boolean;
                },
            },
            {
                name: "attributes",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    attributes = el.set.map((attr) => Attribute.fromElement(attr as DERElement));
                },
            },
            {
                name: "attValIncomplete",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    // TODO: Validate tags of each.
                    attValIncomplete = el.set.map((at) => at.objectIdentifier);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new SDSEContent(
            sDSEType,
            subComplete,
            attComplete,
            attributes,
            attValIncomplete,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.sDSEType.toElement(),
            this.subComplete
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    0,
                    this.subComplete,
                )
                : undefined,
            this.attComplete
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    1,
                    this.attComplete,
                )
                : undefined,
            DERElement.fromSet(this.attributes.map((attr) => attr.toElement())),
            DERElement.fromSet(this.attValIncomplete.map((avi) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                avi,
            ))),
        ]);
    }
}
