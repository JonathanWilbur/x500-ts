/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_oa_pwdStartTime } from "../PasswordPolicy/id-oa-pwdStartTime.va";
import { generalizedTime } from "../SelectedAttributeTypes/generalizedTime.oa";
import { generalizedTimeMatch } from "../SelectedAttributeTypes/generalizedTimeMatch.oa";
import { generalizedTimeOrderingMatch } from "../SelectedAttributeTypes/generalizedTimeOrderingMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_oa_pwdStartTime } from "../PasswordPolicy/id-oa-pwdStartTime.va";
export { generalizedTime } from "../SelectedAttributeTypes/generalizedTime.oa";
export { generalizedTimeMatch } from "../SelectedAttributeTypes/generalizedTimeMatch.oa";
export { generalizedTimeOrderingMatch } from "../SelectedAttributeTypes/generalizedTimeOrderingMatch.oa";

/* START_OF_SYMBOL_DEFINITION pwdStartTime */
/**
 * @summary pwdStartTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdStartTime ATTRIBUTE ::= {
 *   WITH SYNTAX              GeneralizedTime
 *   EQUALITY MATCHING RULE   generalizedTimeMatch
 *   ORDERING MATCHING RULE   generalizedTimeOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              generalizedTime.&id
 *   LDAP-NAME                {"pwdStartTime"}
 *   ID                       id-oa-pwdStartTime }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdStartTime: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&Type": $._encodeGeneralizedTime,
    },
    "&equality-match": generalizedTimeMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": generalizedTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": generalizedTime["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdStartTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdStartTime */

/* eslint-enable */
