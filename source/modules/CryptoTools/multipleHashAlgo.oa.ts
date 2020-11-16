/* eslint-disable */
import { id_algo_multipleHashAlgo } from "../CryptoTools/id-algo-multipleHashAlgo.va";
import {
    _decode_MultipleHashAlgo,
    _encode_MultipleHashAlgo,
} from "../CryptoTools/MultipleHashAlgo.ta";
import { ALGORITHM } from "../PKI_Stub/ALGORITHM.oca";
export { id_algo_multipleHashAlgo } from "../CryptoTools/id-algo-multipleHashAlgo.va";
export {
    MultipleHashAlgo,
    _decode_MultipleHashAlgo,
    _encode_MultipleHashAlgo,
} from "../CryptoTools/MultipleHashAlgo.ta";
export { ALGORITHM } from "../PKI_Stub/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION multipleHashAlgo */
/**
 * @summary multipleHashAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * multipleHashAlgo ALGORITHM ::= {
 *   PARMS         MultipleHashAlgo
 *   IDENTIFIED BY id-algo-multipleHashAlgo }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const multipleHashAlgo: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_MultipleHashAlgo,
        "&DynParms": undefined,
    },
    encoderFor: {
        "&Type": _encode_MultipleHashAlgo,
        "&DynParms": undefined,
    },
    "&id": id_algo_multipleHashAlgo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION multipleHashAlgo */

/* eslint-enable */
