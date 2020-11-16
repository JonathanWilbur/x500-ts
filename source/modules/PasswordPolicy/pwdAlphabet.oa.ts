/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_oa_pwdAlphabet } from "../PasswordPolicy/id-oa-pwdAlphabet.va";
import {
    _decode_PwdAlphabet,
    _encode_PwdAlphabet,
} from "../PasswordPolicy/PwdAlphabet.ta";
import { pwdAlphabetDescription } from "../PasswordPolicy/pwdAlphabetDescription.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_oa_pwdAlphabet } from "../PasswordPolicy/id-oa-pwdAlphabet.va";
export {
    PwdAlphabet,
    _decode_PwdAlphabet,
    _encode_PwdAlphabet,
} from "../PasswordPolicy/PwdAlphabet.ta";
export { pwdAlphabetDescription } from "../PasswordPolicy/pwdAlphabetDescription.oa";

/* START_OF_SYMBOL_DEFINITION pwdAlphabet */
/**
 * @summary pwdAlphabet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdAlphabet ATTRIBUTE ::= {
 *   WITH SYNTAX              PwdAlphabet
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              pwdAlphabetDescription.&id
 *   LDAP-NAME                {"pwdAlphabet"}
 *   ID                       id-oa-pwdAlphabet }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdAlphabet: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PwdAlphabet,
    },
    encoderFor: {
        "&Type": _encode_PwdAlphabet,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": pwdAlphabetDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdAlphabet /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdAlphabet */

/* eslint-enable */
