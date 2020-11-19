/* eslint-disable */
import { NULL, ObjectIdentifier as _OID } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ALGORITHM } from "../PKI-Stub/ALGORITHM.oca";
export { ALGORITHM } from "../PKI-Stub/ALGORITHM.oca";

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
 *   IDENTIFIED BY {1 2 840 113549 1 11} }
 * ```
 *
 * @constant
 * @type {ALGORITHM<NULL>}
 * @implements {ALGORITHM<NULL>}
 */
export const sha224WithRSAEncryptionAlgorithm: ALGORITHM<NULL> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
        "&DynParms": undefined,
    },
    encoderFor: {
        "&Type": $._encodeNull,
        "&DynParms": undefined,
    },
    "&id": new _OID([
        1,
        2,
        840,
        113549,
        1,
        11,
    ]) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sha224WithRSAEncryptionAlgorithm */

/* eslint-enable */
