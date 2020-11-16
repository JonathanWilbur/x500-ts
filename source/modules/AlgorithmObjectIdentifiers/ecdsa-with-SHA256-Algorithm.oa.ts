/* eslint-disable */
import { ecdsa_with_SHA256 } from "../AlgorithmObjectIdentifiers/ecdsa-with-SHA256.va";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { ecdsa_with_SHA256 } from "../AlgorithmObjectIdentifiers/ecdsa-with-SHA256.va";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION ecdsa_with_SHA256_Algorithm */
/**
 * @summary ecdsa_with_SHA256_Algorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-SHA256-Algorithm ALGORITHM ::= { -- IETF RFC 5758
 *   IDENTIFIED BY ecdsa-with-SHA256 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const ecdsa_with_SHA256_Algorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": ecdsa_with_SHA256 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ecdsa_with_SHA256_Algorithm */

/* eslint-enable */
