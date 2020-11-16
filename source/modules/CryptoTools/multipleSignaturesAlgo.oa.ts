/* eslint-disable */
import { id_algo_multipleSignaturesAlgo } from "../CryptoTools/id-algo-multipleSignaturesAlgo.va";
import {
    _decode_MultipleSignaturesAlgo,
    _encode_MultipleSignaturesAlgo,
} from "../CryptoTools/MultipleSignaturesAlgo.ta";
import { ALGORITHM } from "../PKI_Stub/ALGORITHM.oca";
export { id_algo_multipleSignaturesAlgo } from "../CryptoTools/id-algo-multipleSignaturesAlgo.va";
export {
    MultipleSignaturesAlgo,
    _decode_MultipleSignaturesAlgo,
    _encode_MultipleSignaturesAlgo,
} from "../CryptoTools/MultipleSignaturesAlgo.ta";
export { ALGORITHM } from "../PKI_Stub/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION multipleSignaturesAlgo */
/**
 * @summary multipleSignaturesAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * multipleSignaturesAlgo ALGORITHM ::= {
 *   PARMS         MultipleSignaturesAlgo
 *   IDENTIFIED BY id-algo-multipleSignaturesAlgo }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const multipleSignaturesAlgo: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_MultipleSignaturesAlgo,
        "&DynParms": undefined,
    },
    encoderFor: {
        "&Type": _encode_MultipleSignaturesAlgo,
        "&DynParms": undefined,
    },
    "&id": id_algo_multipleSignaturesAlgo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION multipleSignaturesAlgo */

/* eslint-enable */
