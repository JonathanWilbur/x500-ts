/* eslint-disable */
import { id_ecDH } from "../AlgorithmObjectIdentifiers/id-ecDH.va";
import {
    _decode_X509Curves,
    _encode_X509Curves,
} from "../AlgorithmObjectIdentifiers/X509Curves.ta";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { id_ecDH } from "../AlgorithmObjectIdentifiers/id-ecDH.va";
export {
    X509Curves,
    _decode_X509Curves,
    _encode_X509Curves,
} from "../AlgorithmObjectIdentifiers/X509Curves.ta";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION ecDH */
/**
 * @summary ecDH
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecDH ALGORITHM ::= { -- IETF RFC 5480
 *   PARMS         X509Curves
 *   IDENTIFIED BY id-ecDH }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const ecDH: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_X509Curves,
    },
    encoderFor: {
        "&Type": _encode_X509Curves,
    },
    "&id": id_ecDH /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ecDH */

/* eslint-enable */
