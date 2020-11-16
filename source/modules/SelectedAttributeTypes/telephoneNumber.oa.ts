/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_at_telephoneNumber } from "../SelectedAttributeTypes/id-at-telephoneNumber.va";
import { printableString } from "../SelectedAttributeTypes/printableString.oa";
import {
    _decode_TelephoneNumber,
    _encode_TelephoneNumber,
} from "../SelectedAttributeTypes/TelephoneNumber.ta";
import { telephoneNumberMatch } from "../SelectedAttributeTypes/telephoneNumberMatch.oa";
import { telephoneNumberSubstringsMatch } from "../SelectedAttributeTypes/telephoneNumberSubstringsMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_telephoneNumber } from "../SelectedAttributeTypes/id-at-telephoneNumber.va";
export { printableString } from "../SelectedAttributeTypes/printableString.oa";
export {
    TelephoneNumber,
    _decode_TelephoneNumber,
    _encode_TelephoneNumber,
} from "../SelectedAttributeTypes/TelephoneNumber.ta";
export { telephoneNumberMatch } from "../SelectedAttributeTypes/telephoneNumberMatch.oa";
export { telephoneNumberSubstringsMatch } from "../SelectedAttributeTypes/telephoneNumberSubstringsMatch.oa";

/* START_OF_SYMBOL_DEFINITION telephoneNumber */
/**
 * @summary telephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * telephoneNumber ATTRIBUTE ::= {
 *   WITH SYNTAX              TelephoneNumber
 *   EQUALITY MATCHING RULE   telephoneNumberMatch
 *   SUBSTRINGS MATCHING RULE telephoneNumberSubstringsMatch
 *   LDAP-SYNTAX              printableString.&id
 *   LDAP-NAME                {"telephoneNumber"}
 *   ID                       id-at-telephoneNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const telephoneNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TelephoneNumber,
    },
    encoderFor: {
        "&Type": _encode_TelephoneNumber,
    },
    "&equality-match": telephoneNumberMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": telephoneNumberSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_telephoneNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION telephoneNumber */

/* eslint-enable */
