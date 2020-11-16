/* eslint-disable */
import { id_dsa_with_sha256 } from "../AlgorithmObjectIdentifiers/id-dsa-with-sha256.va";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { id_dsa_with_sha256 } from "../AlgorithmObjectIdentifiers/id-dsa-with-sha256.va";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION dsa_with_sha256 */
/**
 * @summary dsa_with_sha256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dsa-with-sha256 ALGORITHM ::= { -- IETF RFC 5754
 *   IDENTIFIED BY id-dsa-with-sha256 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const dsa_with_sha256: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_dsa_with_sha256 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dsa_with_sha256 */

/* eslint-enable */
