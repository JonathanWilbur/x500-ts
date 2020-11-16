/* eslint-disable */
import { id_algo_multipleIcvAlgo } from "../CryptoTools/id-algo-multipleIcvAlgo.va";
import {
    _decode_MultipleIcvAlgo,
    _encode_MultipleIcvAlgo,
} from "../CryptoTools/MultipleIcvAlgo.ta";
import { ALGORITHM } from "../PKI_Stub/ALGORITHM.oca";
export { id_algo_multipleIcvAlgo } from "../CryptoTools/id-algo-multipleIcvAlgo.va";
export {
    MultipleIcvAlgo,
    _decode_MultipleIcvAlgo,
    _encode_MultipleIcvAlgo,
} from "../CryptoTools/MultipleIcvAlgo.ta";
export { ALGORITHM } from "../PKI_Stub/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION multipleIcvAlgo */
/**
 * @summary multipleIcvAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * multipleIcvAlgo ALGORITHM ::= {
 *   PARMS         MultipleIcvAlgo
 *   IDENTIFIED BY id-algo-multipleIcvAlgo }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const multipleIcvAlgo: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_MultipleIcvAlgo,
        "&DynParms": undefined,
    },
    encoderFor: {
        "&Type": _encode_MultipleIcvAlgo,
        "&DynParms": undefined,
    },
    "&id": id_algo_multipleIcvAlgo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION multipleIcvAlgo */

/* eslint-enable */
