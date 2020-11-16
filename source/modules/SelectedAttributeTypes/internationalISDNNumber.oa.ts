/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_at_internationalISDNNumber } from "../SelectedAttributeTypes/id-at-internationalISDNNumber.va";
import {
    _decode_InternationalISDNNumber,
    _encode_InternationalISDNNumber,
} from "../SelectedAttributeTypes/InternationalISDNNumber.ta";
import { numericString } from "../SelectedAttributeTypes/numericString.oa";
import { numericStringMatch } from "../SelectedAttributeTypes/numericStringMatch.oa";
import { numericStringSubstringsMatch } from "../SelectedAttributeTypes/numericStringSubstringsMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_internationalISDNNumber } from "../SelectedAttributeTypes/id-at-internationalISDNNumber.va";
export {
    InternationalISDNNumber,
    _decode_InternationalISDNNumber,
    _encode_InternationalISDNNumber,
} from "../SelectedAttributeTypes/InternationalISDNNumber.ta";
export { numericString } from "../SelectedAttributeTypes/numericString.oa";
export { numericStringMatch } from "../SelectedAttributeTypes/numericStringMatch.oa";
export { numericStringSubstringsMatch } from "../SelectedAttributeTypes/numericStringSubstringsMatch.oa";

/* START_OF_SYMBOL_DEFINITION internationalISDNNumber */
/**
 * @summary internationalISDNNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * internationalISDNNumber ATTRIBUTE ::= {
 *   WITH SYNTAX              InternationalISDNNumber
 *   EQUALITY MATCHING RULE   numericStringMatch
 *   SUBSTRINGS MATCHING RULE numericStringSubstringsMatch
 *   LDAP-SYNTAX              numericString.&id
 *   LDAP-NAME                {"internationalISDNNumber"}
 *   ID                       id-at-internationalISDNNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const internationalISDNNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_InternationalISDNNumber,
    },
    encoderFor: {
        "&Type": _encode_InternationalISDNNumber,
    },
    "&equality-match": numericStringMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": numericStringSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_internationalISDNNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION internationalISDNNumber */

/* eslint-enable */
