/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_at_userPwd } from "../PasswordPolicy/id-at-userPwd.va";
import { _decode_UserPwd, _encode_UserPwd } from "../PasswordPolicy/UserPwd.ta";
import { userPwdDescription } from "../PasswordPolicy/userPwdDescription.oa";
import { userPwdMatch } from "../PasswordPolicy/userPwdMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_userPwd } from "../PasswordPolicy/id-at-userPwd.va";
export {
    UserPwd,
    _decode_UserPwd,
    _encode_UserPwd,
} from "../PasswordPolicy/UserPwd.ta";
export { userPwdDescription } from "../PasswordPolicy/userPwdDescription.oa";
export { userPwdMatch } from "../PasswordPolicy/userPwdMatch.oa";

/* START_OF_SYMBOL_DEFINITION userPwd */
/**
 * @summary userPwd
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwd    ATTRIBUTE ::= {
 *   WITH SYNTAX              UserPwd
 *   EQUALITY MATCHING RULE   userPwdMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              userPwdDescription.&id
 *   LDAP-NAME                {"userPwd"}
 *   ID                       id-at-userPwd }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const userPwd: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UserPwd,
    },
    encoderFor: {
        "&Type": _encode_UserPwd,
    },
    "&equality-match": userPwdMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": userPwdDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_userPwd /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION userPwd */

/* eslint-enable */
