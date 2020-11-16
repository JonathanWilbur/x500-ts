/* eslint-disable */
import { id_sha256 } from "../AlgorithmObjectIdentifiers/id-sha256.va";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { id_sha256 } from "../AlgorithmObjectIdentifiers/id-sha256.va";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION sha256 */
/**
 * @summary sha256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha256 ALGORITHM ::= { -- IETF RFC 5754
 *   IDENTIFIED BY id-sha256 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha256: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_sha256 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sha256 */

/* eslint-enable */
