/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { sha512WithRSAEncryption } from "../AlgorithmObjectIdentifiers/sha512WithRSAEncryption.va";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { sha512WithRSAEncryption } from "../AlgorithmObjectIdentifiers/sha512WithRSAEncryption.va";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION sha512WithRSAEncryptionAlgorithm */
/**
 * @summary sha512WithRSAEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha512WithRSAEncryptionAlgorithm ALGORITHM ::= { -- IETF RFC 7427
 *   PARMS         NULL
 *   IDENTIFIED BY sha512WithRSAEncryption }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha512WithRSAEncryptionAlgorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": sha512WithRSAEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sha512WithRSAEncryptionAlgorithm */

/* eslint-enable */
