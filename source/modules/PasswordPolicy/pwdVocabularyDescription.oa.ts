/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_asx_pwdVocabularyDescription } from "../PasswordPolicy/id-asx-pwdVocabularyDescription.va";
import {
    _decode_PwdVocabulary,
    _encode_PwdVocabulary,
} from "../PasswordPolicy/PwdVocabulary.ta";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_asx_pwdVocabularyDescription } from "../PasswordPolicy/id-asx-pwdVocabularyDescription.va";
export {
    PwdVocabulary,
    PwdVocabulary_noDictionaryWords /* IMPORTED_BIT */,
    PwdVocabulary_noGeographicalNames /* IMPORTED_BIT */,
    PwdVocabulary_noPersonNames /* IMPORTED_BIT */,
    _decode_PwdVocabulary,
    _encode_PwdVocabulary,
} from "../PasswordPolicy/PwdVocabulary.ta";

/* START_OF_SYMBOL_DEFINITION pwdVocabularyDescription */
/**
 * @summary pwdVocabularyDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdVocabularyDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "Password Vocabulary Description"
 *   DIRECTORY SYNTAX  PwdVocabulary
 *   ID                id-asx-pwdVocabularyDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const pwdVocabularyDescription: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_PwdVocabulary,
    },
    encoderFor: {
        "&Type": _encode_PwdVocabulary,
    },
    "&ldapDesc": "Password Vocabulary Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_pwdVocabularyDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdVocabularyDescription */

/* eslint-enable */
