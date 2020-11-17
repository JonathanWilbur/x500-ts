/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { id_mr_pwdEncAlgMatch } from "../PasswordPolicy/id-mr-pwdEncAlgMatch.va";
import {
    _decode_PwdEncAlg,
    _encode_PwdEncAlg,
} from "../PasswordPolicy/PwdEncAlg.ta";
import { pwdEncAlgDescription } from "../PasswordPolicy/pwdEncAlgDescription.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_mr_pwdEncAlgMatch } from "../PasswordPolicy/id-mr-pwdEncAlgMatch.va";
export {
    PwdEncAlg,
    _decode_PwdEncAlg,
    _encode_PwdEncAlg,
} from "../PasswordPolicy/PwdEncAlg.ta";
export { pwdEncAlgDescription } from "../PasswordPolicy/pwdEncAlgDescription.oa";

/* START_OF_SYMBOL_DEFINITION pwdEncAlgMatch */
/**
 * @summary pwdEncAlgMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdEncAlgMatch MATCHING-RULE ::= {
 *   SYNTAX       PwdEncAlg
 *   LDAP-SYNTAX  pwdEncAlgDescription.&id
 *   LDAP-NAME    {"pwdEncAlgMatch"}
 *   ID           id-mr-pwdEncAlgMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const pwdEncAlgMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_PwdEncAlg,
    },
    encoderFor: {
        "&AssertionType": _encode_PwdEncAlg,
    },
    "&ldapSyntax": pwdEncAlgDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_pwdEncAlgMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdEncAlgMatch */

/* eslint-enable */
