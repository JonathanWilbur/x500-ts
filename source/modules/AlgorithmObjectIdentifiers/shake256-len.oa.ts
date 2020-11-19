/* eslint-disable */
import { id_shake256_len } from "../AlgorithmObjectIdentifiers/id-shake256-len.va";
import {
    ShakeOutputLen,
    _decode_ShakeOutputLen,
    _encode_ShakeOutputLen,
} from "../AlgorithmObjectIdentifiers/ShakeOutputLen.ta";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { id_shake256_len } from "../AlgorithmObjectIdentifiers/id-shake256-len.va";
export {
    ShakeOutputLen,
    _decode_ShakeOutputLen,
    _encode_ShakeOutputLen,
} from "../AlgorithmObjectIdentifiers/ShakeOutputLen.ta";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION shake256_len */
/**
 * @summary shake256_len
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shake256-len ALGORITHM ::= {
 *   PARMS         ShakeOutputLen
 *   IDENTIFIED BY id-shake256-len }
 * ```
 *
 * @constant
 * @type {ALGORITHM<ShakeOutputLen>}
 * @implements {ALGORITHM<ShakeOutputLen>}
 */
export const shake256_len: ALGORITHM<ShakeOutputLen> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_ShakeOutputLen,
    },
    encoderFor: {
        "&Type": _encode_ShakeOutputLen,
    },
    "&id": id_shake256_len /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION shake256_len */

/* eslint-enable */
