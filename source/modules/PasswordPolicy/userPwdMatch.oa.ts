/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { id_mr_userPwdMatch } from "../PasswordPolicy/id-mr-userPwdMatch.va";
import { _decode_UserPwd, _encode_UserPwd } from "../PasswordPolicy/UserPwd.ta";
import { userPwdDescription } from "../PasswordPolicy/userPwdDescription.oa";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { id_mr_userPwdMatch } from "../PasswordPolicy/id-mr-userPwdMatch.va";
export {
    UserPwd,
    _decode_UserPwd,
    _encode_UserPwd,
} from "../PasswordPolicy/UserPwd.ta";
export { userPwdDescription } from "../PasswordPolicy/userPwdDescription.oa";

/* START_OF_SYMBOL_DEFINITION userPwdMatch */
/**
 * @summary userPwdMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwdMatch MATCHING-RULE ::= {
 *   SYNTAX       UserPwd
 *   LDAP-SYNTAX  userPwdDescription.&id
 *   LDAP-NAME    {"userPwdMatch"}
 *   ID           id-mr-userPwdMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const userPwdMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UserPwd,
    },
    encoderFor: {
        "&AssertionType": _encode_UserPwd,
    },
    "&ldapSyntax": userPwdDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_userPwdMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION userPwdMatch */

/* eslint-enable */
