import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import KnowledgeType from "./KnowledgeType";

/**
 * `Knowledge ::= SEQUENCE {
 *   knowledgeType      ENUMERATED {
 *     master (0),
 *     shadow (1),
 *     both   (2)},
 *   extendedKnowledge  BOOLEAN DEFAULT FALSE,
 *   ... }`
 */
export default
class Knowledge {
    constructor (
        readonly knowledgeType: KnowledgeType,
        readonly extendedKnowledge: boolean,
    ) {}

    public static fromElement (value: ASN1Element): Knowledge {
        let knowledgeType!: KnowledgeType;
        let extendedKnowledge: boolean = false;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "knowledgeType",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.enumerated,
                callback: (el: ASN1Element): void => {
                    knowledgeType = el.enumerated;
                },
            },
            {
                name: "extendedKnowledge",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.boolean,
                callback: (el: ASN1Element): void => {
                    extendedKnowledge = el.boolean;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new Knowledge(knowledgeType, extendedKnowledge);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.enumerated,
                this.knowledgeType,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.boolean,
                this.extendedKnowledge,
            ),
        ]);
    }
}
