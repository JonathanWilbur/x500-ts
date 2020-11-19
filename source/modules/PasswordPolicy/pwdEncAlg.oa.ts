/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
import { id_oa_pwdEncAlg } from "../PasswordPolicy/id-oa-pwdEncAlg.va";
import {
    PwdEncAlg,
    _decode_PwdEncAlg,
    _encode_PwdEncAlg,
} from "../PasswordPolicy/PwdEncAlg.ta";
import { pwdEncAlgDescription } from "../PasswordPolicy/pwdEncAlgDescription.oa";
import { pwdEncAlgMatch } from "../PasswordPolicy/pwdEncAlgMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_oa_pwdEncAlg } from "../PasswordPolicy/id-oa-pwdEncAlg.va";
export {
    PwdEncAlg,
    _decode_PwdEncAlg,
    _encode_PwdEncAlg,
} from "../PasswordPolicy/PwdEncAlg.ta";
export { pwdEncAlgDescription } from "../PasswordPolicy/pwdEncAlgDescription.oa";
export { pwdEncAlgMatch } from "../PasswordPolicy/pwdEncAlgMatch.oa";

/* START_OF_SYMBOL_DEFINITION pwdEncAlg */
/**
 * @summary pwdEncAlg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdEncAlg ATTRIBUTE ::= {
 *   WITH SYNTAX              PwdEncAlg
 *   EQUALITY MATCHING RULE   pwdEncAlgMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              pwdEncAlgDescription.&id
 *   LDAP-NAME                {"pwdEncAlg"}
 *   ID                       id-oa-pwdEncAlg }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PwdEncAlg>}
 * @implements {ATTRIBUTE<PwdEncAlg>}
 */
export const pwdEncAlg: ATTRIBUTE<PwdEncAlg> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PwdEncAlg,
    },
    encoderFor: {
        "&Type": _encode_PwdEncAlg,
    },
    "&equality-match": pwdEncAlgMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": pwdEncAlgDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdEncAlg /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdEncAlg */

/* eslint-enable */
