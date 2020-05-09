import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";

/**
 * `Options ::= BIT STRING {
 *   delegation-state(0),
 *   mutual-state(1),
 *   replay-det-state(2),
 *   sequence-state(3),
 *   conf-avail(4),
 *   integ-avail(5),
 *   target-certif-data-required(6) }`
 */
export default
class Options {
    constructor (
        readonly delegation_state: boolean,
        readonly mutual_state: boolean,
        readonly replay_det_state: boolean,
        readonly sequence_state: boolean,
        readonly conf_avail: boolean,
        readonly integ_avail: boolean,
        readonly target_certif_data_required: boolean,
    ) {}

    public static fromElement (value: ASN1Element): Options {
        const bits: boolean[] = value.bitString;
        return new Options(
            (bits.length >  0 ? bits[ 0] : false),
            (bits.length >  1 ? bits[ 1] : false),
            (bits.length >  2 ? bits[ 2] : false),
            (bits.length >  3 ? bits[ 3] : false),
            (bits.length >  4 ? bits[ 4] : false),
            (bits.length >  5 ? bits[ 5] : false),
            (bits.length >  6 ? bits[ 6] : false),
        );
    }

    public toElement (): DERElement {
        const element: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString,
        );
        element.bitString = [
            this.delegation_state,
            this.mutual_state,
            this.replay_det_state,
            this.sequence_state,
            this.conf_avail,
            this.integ_avail,
            this.target_certif_data_required,
        ];
        return element;
    }
}
