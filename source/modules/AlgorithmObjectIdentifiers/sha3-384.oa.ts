/* eslint-disable */
import { id_sha3_384 } from "../AlgorithmObjectIdentifiers/id-sha3-384.va";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { id_sha3_384 } from "../AlgorithmObjectIdentifiers/id-sha3-384.va";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION sha3_384 */
/**
 * @summary sha3_384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha3-384 ALGORITHM ::= {
 *   IDENTIFIED BY id-sha3-384 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha3_384: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_sha3_384 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sha3_384 */

/* eslint-enable */
