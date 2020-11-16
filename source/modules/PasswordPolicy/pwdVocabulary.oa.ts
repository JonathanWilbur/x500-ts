/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_oa_pwdVocabulary } from "../PasswordPolicy/id-oa-pwdVocabulary.va";
import {
    _decode_PwdVocabulary,
    _encode_PwdVocabulary,
} from "../PasswordPolicy/PwdVocabulary.ta";
import { pwdVocabularyDescription } from "../PasswordPolicy/pwdVocabularyDescription.oa";
import { bitStringMatch } from "../SelectedAttributeTypes/bitStringMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_oa_pwdVocabulary } from "../PasswordPolicy/id-oa-pwdVocabulary.va";
export {
    PwdVocabulary,
    PwdVocabulary_noDictionaryWords /* IMPORTED_BIT */,
    PwdVocabulary_noGeographicalNames /* IMPORTED_BIT */,
    PwdVocabulary_noPersonNames /* IMPORTED_BIT */,
    _decode_PwdVocabulary,
    _encode_PwdVocabulary,
} from "../PasswordPolicy/PwdVocabulary.ta";
export { pwdVocabularyDescription } from "../PasswordPolicy/pwdVocabularyDescription.oa";
export { bitStringMatch } from "../SelectedAttributeTypes/bitStringMatch.oa";

/* START_OF_SYMBOL_DEFINITION pwdVocabulary */
/**
 * @summary pwdVocabulary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdVocabulary ATTRIBUTE ::= {
 *   WITH SYNTAX              PwdVocabulary
 *   EQUALITY MATCHING RULE   bitStringMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              pwdVocabularyDescription.&id
 *   LDAP-NAME                {"pwdVocabulary"}
 *   ID                       id-oa-pwdVocabulary }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdVocabulary: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PwdVocabulary,
    },
    encoderFor: {
        "&Type": _encode_PwdVocabulary,
    },
    "&equality-match": bitStringMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": pwdVocabularyDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdVocabulary /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdVocabulary */

/* eslint-enable */
