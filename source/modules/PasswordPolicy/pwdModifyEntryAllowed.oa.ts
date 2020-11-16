/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_oa_pwdModifyEntryAllowed } from "../PasswordPolicy/id-oa-pwdModifyEntryAllowed.va";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa";
import { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_oa_pwdModifyEntryAllowed } from "../PasswordPolicy/id-oa-pwdModifyEntryAllowed.va";
export { boolean_ } from "../SelectedAttributeTypes/boolean.oa";
export { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa";

/* START_OF_SYMBOL_DEFINITION pwdModifyEntryAllowed */
/**
 * @summary pwdModifyEntryAllowed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdModifyEntryAllowed ATTRIBUTE ::= {
 *   WITH SYNTAX              BOOLEAN
 *   EQUALITY MATCHING RULE   booleanMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              boolean.&id
 *   LDAP-NAME                {"pwdModifyEntryAllowed"}
 *   ID                       id-oa-pwdModifyEntryAllowed }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdModifyEntryAllowed: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBoolean,
    },
    encoderFor: {
        "&Type": $._encodeBoolean,
    },
    "&equality-match": booleanMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": boolean_["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdModifyEntryAllowed /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdModifyEntryAllowed */

/* eslint-enable */
