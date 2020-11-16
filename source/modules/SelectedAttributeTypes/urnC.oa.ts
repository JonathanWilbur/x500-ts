/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa";
import { id_at_urnC } from "../SelectedAttributeTypes/id-at-urnC.va";
import { printableString } from "../SelectedAttributeTypes/printableString.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa";
export { id_at_urnC } from "../SelectedAttributeTypes/id-at-urnC.va";
export { printableString } from "../SelectedAttributeTypes/printableString.oa";

/* START_OF_SYMBOL_DEFINITION urnC */
/**
 * @summary urnC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * urnC ATTRIBUTE ::= {
 *   WITH SYNTAX              PrintableString
 *   EQUALITY MATCHING RULE   caseExactMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              printableString.&id
 *   LDAP-NAME                {"urnC"}
 *   ID                       id-at-urnC }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const urnC: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodePrintableString,
    },
    encoderFor: {
        "&Type": $._encodePrintableString,
    },
    "&equality-match": caseExactMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_urnC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION urnC */

/* eslint-enable */
