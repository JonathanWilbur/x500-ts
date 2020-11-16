/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { id_sha1 } from "../AlgorithmObjectIdentifiers/id-sha1.va";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { id_sha1 } from "../AlgorithmObjectIdentifiers/id-sha1.va";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION sha1Algorithm */
/**
 * @summary sha1Algorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha1Algorithm ALGORITHM ::= {
 *   PARMS          NULL
 *   IDENTIFIED BY id-sha1 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha1Algorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_sha1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sha1Algorithm */

/* eslint-enable */
