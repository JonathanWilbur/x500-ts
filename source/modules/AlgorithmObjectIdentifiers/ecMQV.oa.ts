/* eslint-disable */
import { id_ecMQV } from "../AlgorithmObjectIdentifiers/id-ecMQV.va";
import {
    X509Curves,
    _decode_X509Curves,
    _encode_X509Curves,
} from "../AlgorithmObjectIdentifiers/X509Curves.vsa";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { id_ecMQV } from "../AlgorithmObjectIdentifiers/id-ecMQV.va";
export {
    X509Curves,
    _decode_X509Curves,
    _encode_X509Curves,
} from "../AlgorithmObjectIdentifiers/X509Curves.vsa";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION ecMQV */
/**
 * @summary ecMQV
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecMQV ALGORITHM ::= { -- IETF RFC 5480
 *   PARMS         X509Curves
 *   IDENTIFIED BY id-ecMQV }
 * ```
 *
 * @constant
 * @type {ALGORITHM<X509Curves>}
 * @implements {ALGORITHM<X509Curves>}
 */
export const ecMQV: ALGORITHM<X509Curves> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_X509Curves,
    },
    encoderFor: {
        "&Type": _encode_X509Curves,
    },
    "&id": id_ecMQV /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ecMQV */

/* eslint-enable */
