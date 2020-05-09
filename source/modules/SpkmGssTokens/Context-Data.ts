import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import ChannelId from "./ChannelId";
import Options from "./Options";
import Conf_Algs from "./Conf-Algs";
import Intg_Algs from "./Intg-Algs";
import OWF_Algs from "./OWF-Algs";
import AlgorithmIdentifier from "../AuthenticationFramework/AlgorithmIdentifier";

/**
 * `Context-Data ::= SEQUENCE {
 *   channelId   ChannelId OPTIONAL,
 *   seq-number  INTEGER OPTIONAL,
 *   options     Options,
 *   conf-alg    Conf-Algs,
 *   intg-alg    Intg-Algs,
 *   owf-alg     OWF-Algs
 * }`
 */
export default
class Context_Data {
    constructor (
        readonly channelId: ChannelId | undefined,
        readonly seq_number: number | undefined,
        readonly options: Options,
        readonly conf_alg: Conf_Algs,
        readonly intg_alg: Intg_Algs,
        readonly owf_alg: OWF_Algs,
    ) {}

    public static fromElement (value: DERElement): Context_Data {
        let channelId: ChannelId | undefined = undefined;
        let seq_number: number | undefined = undefined;
        let options!: Options;
        let conf_alg!: Conf_Algs;
        let intg_alg!: Intg_Algs;
        let owf_alg!: OWF_Algs;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "channelId",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.octetString,
                callback: (el: ASN1Element): void => {
                    channelId = el.octetString;
                },
            },
            {
                name: "seq-number",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    seq_number = el.integer;
                },
            },
            {
                name: "options",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.bitString,
                callback: (el: ASN1Element): void => {
                    options = Options.fromElement(el as DERElement);
                },
            },
            {
                name: "conf-alg",
                optional: false,
                tagClass: ASN1TagClass.context,
                callback: (el: ASN1Element): void => {
                    if (el.tagNumber === 0) {
                        conf_alg = el.sequence.map((alg) => AlgorithmIdentifier.fromElement(alg));
                    } else { // FIXME: This is technically incorrect.
                        conf_alg = null;
                    }
                },
            },
            {
                name: "intg-alg",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    intg_alg = el.sequence.map((alg) => AlgorithmIdentifier.fromElement(alg));
                },
            },
            {
                name: "owf-alg",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    owf_alg = el.sequence.map((alg) => AlgorithmIdentifier.fromElement(alg));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new Context_Data(
            channelId,
            seq_number,
            options,
            conf_alg,
            intg_alg,
            owf_alg,
        );
    }

    public toElement (): DERElement {
        let confAlgElement: DERElement = ((): DERElement => {
            if (this.conf_alg) {
                confAlgElement = DERElement.fromSequence(
                    this.conf_alg.map((alg) => alg.toElement()),
                );
                confAlgElement.tagClass = ASN1TagClass.context;
                confAlgElement.tagNumber = 0;
                return confAlgElement;
            } else {
                return new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    1,
                );
            }
        })();

        return DERElement.fromSequence([
            this.channelId
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.octetString,
                    this.channelId,
                )
                : undefined,
            this.seq_number
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.seq_number,
                )
                : undefined,
            this.options.toElement(),
            confAlgElement,
            DERElement.fromSequence(
                this.intg_alg.map((alg) => alg.toElement()),
            ),
            DERElement.fromSequence(
                this.owf_alg.map((alg) => alg.toElement()),
            ),
        ]);
    }
}
