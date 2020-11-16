/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { id_mr_octetStringOrderingMatch } from "../SelectedAttributeTypes/id-mr-octetStringOrderingMatch.va";
import { octetString } from "../SelectedAttributeTypes/octetString.oa";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { id_mr_octetStringOrderingMatch } from "../SelectedAttributeTypes/id-mr-octetStringOrderingMatch.va";
export { octetString } from "../SelectedAttributeTypes/octetString.oa";

/* START_OF_SYMBOL_DEFINITION octetStringOrderingMatch */
/**
 * @summary octetStringOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * octetStringOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX       OCTET STRING
 *   LDAP-SYNTAX  octetString.&id
 *   LDAP-NAME    {"octetStringOrderingMatch"}
 *   ID           id-mr-octetStringOrderingMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const octetStringOrderingMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeOctetString,
    },
    encoderFor: {
        "&AssertionType": $._encodeOctetString,
    },
    "&ldapSyntax": octetString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_octetStringOrderingMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION octetStringOrderingMatch */

/* eslint-enable */
