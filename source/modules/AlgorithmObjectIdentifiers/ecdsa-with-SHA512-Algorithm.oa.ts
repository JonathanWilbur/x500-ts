/* eslint-disable */
import { ecdsa_with_SHA512 } from "../AlgorithmObjectIdentifiers/ecdsa-with-SHA512.va";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { ecdsa_with_SHA512 } from "../AlgorithmObjectIdentifiers/ecdsa-with-SHA512.va";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION ecdsa_with_SHA512_Algorithm */
/**
 * @summary ecdsa_with_SHA512_Algorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-SHA512-Algorithm ALGORITHM ::= { -- IETF RFC 5758
 *   IDENTIFIED BY ecdsa-with-SHA512 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const ecdsa_with_SHA512_Algorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": ecdsa_with_SHA512 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ecdsa_with_SHA512_Algorithm */

/* eslint-enable */
