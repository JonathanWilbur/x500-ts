/* eslint-disable */
import { id_sha3_224 } from "../AlgorithmObjectIdentifiers/id-sha3-224.va";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { id_sha3_224 } from "../AlgorithmObjectIdentifiers/id-sha3-224.va";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION sha3_224 */
/**
 * @summary sha3_224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha3-224 ALGORITHM ::= {
 *   IDENTIFIED BY id-sha3-224 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha3_224: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_sha3_224 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sha3_224 */

/* eslint-enable */
