import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import Random_Integer from "./Random-Integer";
import AlgorithmIdentifier from "../AuthenticationFramework/AlgorithmIdentifier";
import Conf_Alg from "./Conf-Alg";
import SeqNum from "./SeqNum";
import * as errors from "../../errors";

/**
 * `Wrap-Header ::= SEQUENCE {
 *   tok-id      INTEGER(513), -- shall contain 0201 (hex)
 *   context-id  Random-Integer,
 *   int-alg     [0]  AlgorithmIdentifier{{SupportedAlgorithms}} OPTIONAL,
 *   conf-alg    [1]  Conf-Alg OPTIONAL,
 *   snd-seq     [2]  SeqNum OPTIONAL
 * }`
 */
export default
class Wrap_Header {
    constructor (
        readonly tok_id: 513,
        readonly context_id: Random_Integer,
        readonly int_alg: AlgorithmIdentifier | undefined,
        readonly conf_alg: Conf_Alg | undefined,
        readonly snd_seq: SeqNum | undefined,
    ) {}

    public static fromElement (value: DERElement): Wrap_Header {
        let tok_id!: 513;
        let context_id!: Random_Integer;
        let int_alg: AlgorithmIdentifier | undefined;
        let conf_alg: Conf_Alg | undefined;
        let snd_seq: SeqNum | undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "tok-id",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    const num = el.integer;
                    if (num !== 513) {
                        throw new errors.X500Error(`Invalid Wrap-Header.tok-id number: ${num}.`);
                    }
                    tok_id = num;
                },
            },
            {
                name: "context-id",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.bitString,
                callback: (el: ASN1Element): void => {
                    context_id = el.bitString;
                },
            },
            {
                name: "int-alg",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    int_alg = AlgorithmIdentifier.fromElement(el);
                },
            },
            {
                name: "conf-alg",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    conf_alg = el.inner;
                },
            },
            {
                name: "snd-seq",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    snd_seq = SeqNum.fromElement(el.inner as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new Wrap_Header(
            tok_id,
            context_id,
            int_alg,
            conf_alg,
            snd_seq,
        );
    }

    public toElement (): DERElement {
        const context_idElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString,
        );
        context_idElement.bitString = this.context_id;

        let int_algElement: DERElement | undefined = undefined;
        if (this.int_alg) {
            int_algElement = this.int_alg.toElement();
            int_algElement.tagClass = ASN1TagClass.context;
            int_algElement.tagNumber = 0;
        }

        let conf_algElement: DERElement | undefined = undefined;
        if (this.conf_alg) {
            conf_algElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
                this.conf_alg,
            );
        }

        let snd_seqElement: DERElement | undefined = undefined;
        if (this.snd_seq) {
            snd_seqElement = this.snd_seq.toElement();
            snd_seqElement.tagClass = ASN1TagClass.context;
            snd_seqElement.tagNumber = 2;
        }

        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                513,
            ),
            context_idElement,
            int_algElement,
            conf_algElement,
            snd_seqElement,
        ]);
    }
}
