/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { rsaEncryption } from "../AlgorithmObjectIdentifiers/rsaEncryption.va";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { rsaEncryption } from "../AlgorithmObjectIdentifiers/rsaEncryption.va";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION rsaEncryptionAlgorithm */
/**
 * @summary rsaEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rsaEncryptionAlgorithm ALGORITHM ::= { -- IETF RFC 4055
 *   PARMS         NULL
 *   IDENTIFIED BY rsaEncryption }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const rsaEncryptionAlgorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": rsaEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION rsaEncryptionAlgorithm */

/* eslint-enable */
