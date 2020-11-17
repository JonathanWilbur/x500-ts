/* eslint-disable */
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
import { id_ecPublicKey } from "../AuthenticationFramework/id-ecPublicKey.va";
import {
    _decode_SupportedCurves,
    _encode_SupportedCurves,
} from "../AuthenticationFramework/SupportedCurves.vsa";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { id_ecPublicKey } from "../AuthenticationFramework/id-ecPublicKey.va";
export {
    SupportedCurves,
    _decode_SupportedCurves,
    _encode_SupportedCurves,
} from "../AuthenticationFramework/SupportedCurves.vsa";

/* START_OF_SYMBOL_DEFINITION ecPublicKey */
/**
 * @summary ecPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecPublicKey ALGORITHM ::= {  -- copied IETF RFC 5480
 *   PARMS       SupportedCurves
 *   IDENTIFIED  BY id-ecPublicKey }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const ecPublicKey: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_SupportedCurves,
    },
    encoderFor: {
        "&Type": _encode_SupportedCurves,
    },
    "&id": id_ecPublicKey /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ecPublicKey */

/* eslint-enable */
