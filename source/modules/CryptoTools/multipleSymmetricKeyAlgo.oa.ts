/* eslint-disable */
import { id_algo_multipleSymmetricKeyAlgo } from "../CryptoTools/id-algo-multipleSymmetricKeyAlgo.va";
import {
    _decode_MultipleSymmetricKeyAlgo,
    _encode_MultipleSymmetricKeyAlgo,
} from "../CryptoTools/MultipleSymmetricKeyAlgo.ta";
import { ALGORITHM } from "../PKI_Stub/ALGORITHM.oca";
export { id_algo_multipleSymmetricKeyAlgo } from "../CryptoTools/id-algo-multipleSymmetricKeyAlgo.va";
export {
    MultipleSymmetricKeyAlgo,
    _decode_MultipleSymmetricKeyAlgo,
    _encode_MultipleSymmetricKeyAlgo,
} from "../CryptoTools/MultipleSymmetricKeyAlgo.ta";
export { ALGORITHM } from "../PKI_Stub/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION multipleSymmetricKeyAlgo */
/**
 * @summary multipleSymmetricKeyAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * multipleSymmetricKeyAlgo ALGORITHM ::= {
 *   PARMS         MultipleSymmetricKeyAlgo
 *   IDENTIFIED BY id-algo-multipleSymmetricKeyAlgo }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const multipleSymmetricKeyAlgo: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_MultipleSymmetricKeyAlgo,
        "&DynParms": undefined,
    },
    encoderFor: {
        "&Type": _encode_MultipleSymmetricKeyAlgo,
        "&DynParms": undefined,
    },
    "&id": id_algo_multipleSymmetricKeyAlgo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION multipleSymmetricKeyAlgo */

/* eslint-enable */
