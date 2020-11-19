/* eslint-disable */
import {
    AES_InitializationVector,
    _decode_AES_InitializationVector,
    _encode_AES_InitializationVector,
} from "../AlgorithmObjectIdentifiers/AES-InitializationVector.ta";
import { id_aes128_CBC } from "../AlgorithmObjectIdentifiers/id-aes128-CBC.va";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export {
    AES_InitializationVector,
    _decode_AES_InitializationVector,
    _encode_AES_InitializationVector,
} from "../AlgorithmObjectIdentifiers/AES-InitializationVector.ta";
export { id_aes128_CBC } from "../AlgorithmObjectIdentifiers/id-aes128-CBC.va";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION aes128_CBC */
/**
 * @summary aes128_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aes128-CBC ALGORITHM ::= {  -- CSOR
 *   PARMS         AES-InitializationVector
 *   IDENTIFIED BY id-aes128-CBC }
 * ```
 *
 * @constant
 * @type {ALGORITHM<AES_InitializationVector>}
 * @implements {ALGORITHM<AES_InitializationVector>}
 */
export const aes128_CBC: ALGORITHM<AES_InitializationVector> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_AES_InitializationVector,
    },
    encoderFor: {
        "&Type": _encode_AES_InitializationVector,
    },
    "&id": id_aes128_CBC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION aes128_CBC */

/* eslint-enable */
