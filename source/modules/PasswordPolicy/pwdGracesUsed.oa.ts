/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_oa_pwdGracesUsed } from "../PasswordPolicy/id-oa-pwdGracesUsed.va";
import { integer } from "../SelectedAttributeTypes/integer.oa";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa";
import { integerOrderingMatch } from "../SelectedAttributeTypes/integerOrderingMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_oa_pwdGracesUsed } from "../PasswordPolicy/id-oa-pwdGracesUsed.va";
export { integer } from "../SelectedAttributeTypes/integer.oa";
export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa";
export { integerOrderingMatch } from "../SelectedAttributeTypes/integerOrderingMatch.oa";

/* START_OF_SYMBOL_DEFINITION pwdGracesUsed */
/**
 * @summary pwdGracesUsed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdGracesUsed ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER (0..MAX)
 *   EQUALITY MATCHING RULE   integerMatch
 *   ORDERING MATCHING RULE   integerOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"pwdGracesUsed"}
 *   ID                       id-oa-pwdGracesUsed }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdGracesUsed: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdGracesUsed /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdGracesUsed */

/* eslint-enable */