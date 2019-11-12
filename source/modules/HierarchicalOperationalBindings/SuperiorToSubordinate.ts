import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import DITcontext from "./DITcontext";
import Attribute from "../InformationFramework/Attribute";
import Vertex from "./Vertex";

/**
 * `SuperiorToSubordinate ::= SEQUENCE {
 *   contextPrefixInfo     [0]  DITcontext,
 *   entryInfo             [1]  SET SIZE (1..MAX) OF
 *                                Attribute{{SupportedAttributes}} OPTIONAL,
 *   immediateSuperiorInfo [2]  SET SIZE (1..MAX) OF
 *                                Attribute{{SupportedAttributes}} OPTIONAL,
 *   ... }`
 */
export default
class SuperiorToSubordinate {
    constructor (
        readonly contextPrefixInfo: DITcontext,
        readonly entryInfo: Attribute[] | undefined,
        readonly immediateSuperiorInfo: Attribute[] | undefined,
    ) {}

    public static fromElement (value: ASN1Element): SuperiorToSubordinate {
        let contextPrefixInfo!: DITcontext;
        let entryInfo: Attribute[] | undefined = undefined;
        let immediateSuperiorInfo: Attribute[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "contextPrefixInfo",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    contextPrefixInfo = el.sequence.map((v) => Vertex.fromElement(v as DERElement));
                },
            },
            {
                name: "entryInfo",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    entryInfo = el.sizeConstrainedSetOf(1)
                        .map((attr) => Attribute.fromElement(attr as DERElement));
                },
            },
            {
                name: "immediateSuperiorInfo",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    immediateSuperiorInfo = el.sizeConstrainedSetOf(1)
                        .map((attr) => Attribute.fromElement(attr as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new SuperiorToSubordinate(contextPrefixInfo, entryInfo, immediateSuperiorInfo);
    }

    public toElement (): DERElement {
        const contextPrefixInfoElement: DERElement = DERElement.fromSequence(
            this.contextPrefixInfo.map((cpi) => cpi.toElement()),
        );
        contextPrefixInfoElement.tagClass = ASN1TagClass.context;
        contextPrefixInfoElement.tagNumber = 0;

        let entryInfoElement: DERElement | undefined = undefined;
        if (this.entryInfo !== undefined) {
            entryInfoElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            entryInfoElement.set = this.entryInfo.map((ei) => ei.toElement());
        }

        let immediateSuperiorInfoElement: DERElement | undefined = undefined;
        if (this.immediateSuperiorInfo !== undefined) {
            immediateSuperiorInfoElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                2,
            );
            immediateSuperiorInfoElement.set = this.immediateSuperiorInfo
                .map((isi) => isi.toElement());
        }

        return DERElement.fromSequence([
            contextPrefixInfoElement,
            entryInfoElement,
            immediateSuperiorInfoElement,
        ]);
    }
}
