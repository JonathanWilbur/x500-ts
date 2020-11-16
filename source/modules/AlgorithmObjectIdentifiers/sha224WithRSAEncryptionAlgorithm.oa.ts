/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { sha224WithRSAEncryption } from "../AlgorithmObjectIdentifiers/sha224WithRSAEncryption.va";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { sha224WithRSAEncryption } from "../AlgorithmObjectIdentifiers/sha224WithRSAEncryption.va";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION sha224WithRSAEncryptionAlgorithm */
/**
 * @summary sha224WithRSAEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha224WithRSAEncryptionAlgorithm ALGORITHM ::= { -- IETF RFC 5754
 *   PARMS         NULL
 *   IDENTIFIED BY sha224WithRSAEncryption }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha224WithRSAEncryptionAlgorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": sha224WithRSAEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sha224WithRSAEncryptionAlgorithm */

/* eslint-enable */
