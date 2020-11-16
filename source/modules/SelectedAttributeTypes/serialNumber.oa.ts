/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa";
import { id_at_serialNumber } from "../SelectedAttributeTypes/id-at-serialNumber.va";
import { printableString } from "../SelectedAttributeTypes/printableString.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa";
export { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa";
export { id_at_serialNumber } from "../SelectedAttributeTypes/id-at-serialNumber.va";
export { printableString } from "../SelectedAttributeTypes/printableString.oa";

/* START_OF_SYMBOL_DEFINITION serialNumber */
/**
 * @summary serialNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serialNumber ATTRIBUTE ::= {
 *   WITH SYNTAX              PrintableString(SIZE (1..MAX))
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX              printableString.&id
 *   LDAP-NAME                {"serialNumber"}
 *   ID                       id-at-serialNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const serialNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodePrintableString,
    },
    encoderFor: {
        "&Type": $._encodePrintableString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_serialNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION serialNumber */

/* eslint-enable */