/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { dnsString } from "../SelectedAttributeTypes/dnsString.oa";
import { id_mr_intEmailMatch } from "../SelectedAttributeTypes/id-mr-intEmailMatch.va";
import {
    _decode_IntEmail,
    _encode_IntEmail,
} from "../SelectedAttributeTypes/IntEmail.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { dnsString } from "../SelectedAttributeTypes/dnsString.oa";
export { id_mr_intEmailMatch } from "../SelectedAttributeTypes/id-mr-intEmailMatch.va";
export {
    IntEmail,
    _decode_IntEmail,
    _encode_IntEmail,
} from "../SelectedAttributeTypes/IntEmail.ta";

/* START_OF_SYMBOL_DEFINITION intEmailMatch */
/**
 * @summary intEmailMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * intEmailMatch MATCHING-RULE ::= {
 *   SYNTAX       IntEmail
 *   LDAP-SYNTAX  dnsString.&id
 *   LDAP-NAME    {"intEmailMatch"}
 *   ID           id-mr-intEmailMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const intEmailMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_IntEmail,
    },
    encoderFor: {
        "&AssertionType": _encode_IntEmail,
    },
    "&ldapSyntax": dnsString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_intEmailMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION intEmailMatch */

/* eslint-enable */
