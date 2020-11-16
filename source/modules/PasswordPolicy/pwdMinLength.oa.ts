/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_oa_pwdMinLength } from "../PasswordPolicy/id-oa-pwdMinLength.va";
import { integer } from "../SelectedAttributeTypes/integer.oa";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_oa_pwdMinLength } from "../PasswordPolicy/id-oa-pwdMinLength.va";
export { integer } from "../SelectedAttributeTypes/integer.oa";
export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa";

/* START_OF_SYMBOL_DEFINITION pwdMinLength */
/**
 * @summary pwdMinLength
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdMinLength ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER (0..MAX)
 *   EQUALITY MATCHING RULE   integerMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"pwdMinLength"}
 *   ID                       id-oa-pwdMinLength }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdMinLength: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdMinLength /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdMinLength */

/* eslint-enable */
