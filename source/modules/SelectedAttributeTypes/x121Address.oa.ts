/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_at_x121Address } from "../SelectedAttributeTypes/id-at-x121Address.va";
import { numericString } from "../SelectedAttributeTypes/numericString.oa";
import { numericStringMatch } from "../SelectedAttributeTypes/numericStringMatch.oa";
import { numericStringSubstringsMatch } from "../SelectedAttributeTypes/numericStringSubstringsMatch.oa";
import {
    _decode_X121Address,
    _encode_X121Address,
} from "../SelectedAttributeTypes/X121Address.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_x121Address } from "../SelectedAttributeTypes/id-at-x121Address.va";
export { numericString } from "../SelectedAttributeTypes/numericString.oa";
export { numericStringMatch } from "../SelectedAttributeTypes/numericStringMatch.oa";
export { numericStringSubstringsMatch } from "../SelectedAttributeTypes/numericStringSubstringsMatch.oa";
export {
    X121Address,
    _decode_X121Address,
    _encode_X121Address,
} from "../SelectedAttributeTypes/X121Address.ta";

/* START_OF_SYMBOL_DEFINITION x121Address */
/**
 * @summary x121Address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * x121Address ATTRIBUTE ::= {
 *   WITH SYNTAX              X121Address
 *   EQUALITY MATCHING RULE   numericStringMatch
 *   SUBSTRINGS MATCHING RULE numericStringSubstringsMatch
 *   LDAP-SYNTAX              numericString.&id
 *   LDAP-NAME                {"x121Address"}
 *   ID                       id-at-x121Address }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const x121Address: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_X121Address,
    },
    encoderFor: {
        "&Type": _encode_X121Address,
    },
    "&equality-match": numericStringMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": numericStringSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_x121Address /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION x121Address */

/* eslint-enable */
