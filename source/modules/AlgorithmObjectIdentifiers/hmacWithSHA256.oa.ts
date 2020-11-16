/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { id_hmacWithSHA256 } from "../AlgorithmObjectIdentifiers/id-hmacWithSHA256.va";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { id_hmacWithSHA256 } from "../AlgorithmObjectIdentifiers/id-hmacWithSHA256.va";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION hmacWithSHA256 */
/**
 * @summary hmacWithSHA256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hmacWithSHA256 ALGORITHM ::= {  -- IETF RFC 4231
 *   PARMS         NULL
 *   IDENTIFIED BY id-hmacWithSHA256 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const hmacWithSHA256: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_hmacWithSHA256 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION hmacWithSHA256 */

/* eslint-enable */
