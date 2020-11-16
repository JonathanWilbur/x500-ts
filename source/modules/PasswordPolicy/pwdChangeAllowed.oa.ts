/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_oa_pwdChangeAllowed } from "../PasswordPolicy/id-oa-pwdChangeAllowed.va";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa";
import { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_oa_pwdChangeAllowed } from "../PasswordPolicy/id-oa-pwdChangeAllowed.va";
export { boolean_ } from "../SelectedAttributeTypes/boolean.oa";
export { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa";

/* START_OF_SYMBOL_DEFINITION pwdChangeAllowed */
/**
 * @summary pwdChangeAllowed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdChangeAllowed ATTRIBUTE ::= {
 *   WITH SYNTAX              BOOLEAN
 *   EQUALITY MATCHING RULE   booleanMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              boolean.&id
 *   LDAP-NAME                {"pwdChangeAllowed"}
 *   ID                       id-oa-pwdChangeAllowed }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdChangeAllowed: ATTRIBUTE = {
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
    "&id": id_oa_pwdChangeAllowed /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdChangeAllowed */

/* eslint-enable */
