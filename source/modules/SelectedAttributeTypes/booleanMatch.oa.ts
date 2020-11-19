/* eslint-disable */
import { BOOLEAN } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { bitString } from "../SelectedAttributeTypes/bitString.oa";
import { id_mr_booleanMatch } from "../SelectedAttributeTypes/id-mr-booleanMatch.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { bitString } from "../SelectedAttributeTypes/bitString.oa";
export { id_mr_booleanMatch } from "../SelectedAttributeTypes/id-mr-booleanMatch.va";

/* START_OF_SYMBOL_DEFINITION booleanMatch */
/**
 * @summary booleanMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * booleanMatch MATCHING-RULE ::= {
 *   SYNTAX       BOOLEAN
 *   LDAP-SYNTAX  bitString.&id
 *   LDAP-NAME    {"booleanMatch"}
 *   ID           id-mr-booleanMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<BOOLEAN>}
 * @implements {MATCHING_RULE<BOOLEAN>}
 */
export const booleanMatch: MATCHING_RULE<BOOLEAN> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeBoolean,
    },
    encoderFor: {
        "&AssertionType": $._encodeBoolean,
    },
    "&ldapSyntax": bitString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_booleanMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION booleanMatch */

/* eslint-enable */
