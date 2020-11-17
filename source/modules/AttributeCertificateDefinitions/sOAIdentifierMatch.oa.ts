/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { id_mr_sOAIdentifierMatch } from "../AttributeCertificateDefinitions/id-mr-sOAIdentifierMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { id_mr_sOAIdentifierMatch } from "../AttributeCertificateDefinitions/id-mr-sOAIdentifierMatch.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION sOAIdentifierMatch */
/**
 * @summary sOAIdentifierMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sOAIdentifierMatch MATCHING-RULE ::= {
 *   SYNTAX  NULL
 *   ID      id-mr-sOAIdentifierMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const sOAIdentifierMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeNull,
    },
    encoderFor: {
        "&AssertionType": $._encodeNull,
    },
    "&id": id_mr_sOAIdentifierMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sOAIdentifierMatch */

/* eslint-enable */
