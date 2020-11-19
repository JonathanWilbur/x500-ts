/* eslint-disable */
import { id_algo_multipleAuthenEncryptAlgo } from "../CryptoTools/id-algo-multipleAuthenEncryptAlgo.va";
import {
    MultipleAuthenEncryptAlgo,
    _decode_MultipleAuthenEncryptAlgo,
    _encode_MultipleAuthenEncryptAlgo,
} from "../CryptoTools/MultipleAuthenEncryptAlgo.ta";
import { ALGORITHM } from "../PKI-Stub/ALGORITHM.oca";
export { id_algo_multipleAuthenEncryptAlgo } from "../CryptoTools/id-algo-multipleAuthenEncryptAlgo.va";
export {
    MultipleAuthenEncryptAlgo,
    _decode_MultipleAuthenEncryptAlgo,
    _encode_MultipleAuthenEncryptAlgo,
} from "../CryptoTools/MultipleAuthenEncryptAlgo.ta";
export { ALGORITHM } from "../PKI-Stub/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION multipleAuthenEncryptAlgo */
/**
 * @summary multipleAuthenEncryptAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * multipleAuthenEncryptAlgo ALGORITHM ::= {
 *   PARMS         MultipleAuthenEncryptAlgo
 *   IDENTIFIED BY id-algo-multipleAuthenEncryptAlgo }
 * ```
 *
 * @constant
 * @type {ALGORITHM<MultipleAuthenEncryptAlgo>}
 * @implements {ALGORITHM<MultipleAuthenEncryptAlgo>}
 */
export const multipleAuthenEncryptAlgo: ALGORITHM<MultipleAuthenEncryptAlgo> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_MultipleAuthenEncryptAlgo,
        "&DynParms": undefined,
    },
    encoderFor: {
        "&Type": _encode_MultipleAuthenEncryptAlgo,
        "&DynParms": undefined,
    },
    "&id": id_algo_multipleAuthenEncryptAlgo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION multipleAuthenEncryptAlgo */

/* eslint-enable */
