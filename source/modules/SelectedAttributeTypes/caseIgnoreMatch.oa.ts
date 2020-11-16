/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
import { id_mr_caseIgnoreMatch } from "../SelectedAttributeTypes/id-mr-caseIgnoreMatch.va";
import {
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
export { id_mr_caseIgnoreMatch } from "../SelectedAttributeTypes/id-mr-caseIgnoreMatch.va";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION caseIgnoreMatch */
/**
 * @summary caseIgnoreMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseIgnoreMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"caseIgnoreMatch"}
 *   ID           id-mr-caseIgnoreMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const caseIgnoreMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&AssertionType": _encode_UnboundedDirectoryString,
    },
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_caseIgnoreMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION caseIgnoreMatch */

/* eslint-enable */
