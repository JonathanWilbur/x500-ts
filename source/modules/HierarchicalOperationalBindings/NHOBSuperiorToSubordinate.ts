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
 * `NHOBSuperiorToSubordinate ::= SuperiorToSubordinate (
 *   WITH COMPONENTS {..., entryInfo  ABSENT } )`
 */
export default
class NHOBSuperiorToSubordinate {
    constructor (
        readonly contextPrefixInfo: DITcontext,
        readonly immediateSuperiorInfo: Attribute[] | undefined,
    ) {}

    public static fromElement (value: DERElement): NHOBSuperiorToSubordinate {
        let contextPrefixInfo!: DITcontext;
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
        return new NHOBSuperiorToSubordinate(contextPrefixInfo, immediateSuperiorInfo);
    }

    public toElement (): DERElement {
        const contextPrefixInfoElement: DERElement = DERElement.fromSequence(
            this.contextPrefixInfo.map((cpi) => cpi.toElement()),
        );
        contextPrefixInfoElement.tagClass = ASN1TagClass.context;
        contextPrefixInfoElement.tagNumber = 0;

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
            immediateSuperiorInfoElement,
        ]);
    }
}
