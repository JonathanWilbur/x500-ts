/* eslint-disable */
import { id_sha384 } from "../AlgorithmObjectIdentifiers/id-sha384.va";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { id_sha384 } from "../AlgorithmObjectIdentifiers/id-sha384.va";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION sha384 */
/**
 * @summary sha384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha384 ALGORITHM ::= { -- IETF RFC 5754
 *   IDENTIFIED BY id-sha384 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha384: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_sha384 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sha384 */

/* eslint-enable */
