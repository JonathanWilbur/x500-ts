/* eslint-disable */
import {
    Group14,
    _decode_Group14,
    _encode_Group14,
} from "../GenAlgo/Group14.ta";
import { id_algo_dhModpGr14Hkdf256Algo } from "../GenAlgo/id-algo-dhModpGr14Hkdf256Algo.va";
import {
    Payload14,
    _decode_Payload14,
    _encode_Payload14,
} from "../GenAlgo/Payload14.ta";
import { ALGORITHM } from "../PKI-Stub/ALGORITHM.oca";
export {
    Group14,
    _decode_Group14,
    _encode_Group14,
} from "../GenAlgo/Group14.ta";
export { id_algo_dhModpGr14Hkdf256Algo } from "../GenAlgo/id-algo-dhModpGr14Hkdf256Algo.va";
export {
    Payload14,
    _decode_Payload14,
    _encode_Payload14,
} from "../GenAlgo/Payload14.ta";
export { ALGORITHM } from "../PKI-Stub/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION dhModpGr14Hkdf256Algo */
/**
 * @summary dhModpGr14Hkdf256Algo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhModpGr14Hkdf256Algo ALGORITHM ::= {
 *   PARMS         Group14
 *   DYN-PARMS     Payload14
 *   IDENTIFIED BY id-algo-dhModpGr14Hkdf256Algo }
 * ```
 *
 * @constant
 * @type {ALGORITHM<Group14, Payload14>}
 * @implements {ALGORITHM<Group14, Payload14>}
 */
export const dhModpGr14Hkdf256Algo: ALGORITHM<Group14, Payload14> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_Group14,
        "&DynParms": _decode_Payload14,
    },
    encoderFor: {
        "&Type": _encode_Group14,
        "&DynParms": _encode_Payload14,
    },
    "&id": id_algo_dhModpGr14Hkdf256Algo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dhModpGr14Hkdf256Algo */

/* eslint-enable */
