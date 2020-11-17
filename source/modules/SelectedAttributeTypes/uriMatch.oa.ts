/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
import { id_mr_uriMatch } from "../SelectedAttributeTypes/id-mr-uriMatch.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
export { id_mr_uriMatch } from "../SelectedAttributeTypes/id-mr-uriMatch.va";

/* START_OF_SYMBOL_DEFINITION uriMatch */
/**
 * @summary uriMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uriMatch MATCHING-RULE ::= {
 *   SYNTAX       UTF8String
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"uriMatch"}
 *   ID           id-mr-uriMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const uriMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeUTF8String,
    },
    encoderFor: {
        "&AssertionType": $._encodeUTF8String,
    },
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_uriMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uriMatch */

/* eslint-enable */
