/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import {
    _decode_CaseIgnoreList,
    _encode_CaseIgnoreList,
} from "../SelectedAttributeTypes/CaseIgnoreList.ta";
import { id_mr_caseIgnoreListMatch } from "../SelectedAttributeTypes/id-mr-caseIgnoreListMatch.va";
import { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export {
    CaseIgnoreList,
    _decode_CaseIgnoreList,
    _encode_CaseIgnoreList,
} from "../SelectedAttributeTypes/CaseIgnoreList.ta";
export { id_mr_caseIgnoreListMatch } from "../SelectedAttributeTypes/id-mr-caseIgnoreListMatch.va";
export { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa";

/* START_OF_SYMBOL_DEFINITION caseIgnoreListMatch */
/**
 * @summary caseIgnoreListMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseIgnoreListMatch MATCHING-RULE ::= {
 *   SYNTAX       CaseIgnoreList
 *   LDAP-SYNTAX  postalAddr.&id
 *   LDAP-NAME    {"caseIgnoreListMatch"}
 *   ID           id-mr-caseIgnoreListMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const caseIgnoreListMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CaseIgnoreList,
    },
    encoderFor: {
        "&AssertionType": _encode_CaseIgnoreList,
    },
    "&ldapSyntax": postalAddr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_caseIgnoreListMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION caseIgnoreListMatch */

/* eslint-enable */
