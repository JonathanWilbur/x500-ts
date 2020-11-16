/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
import { id_mr_directoryStringFirstComponentMatch } from "../SelectedAttributeTypes/id-mr-directoryStringFirstComponentMatch.va";
import {
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
export { id_mr_directoryStringFirstComponentMatch } from "../SelectedAttributeTypes/id-mr-directoryStringFirstComponentMatch.va";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION directoryStringFirstComponentMatch */
/**
 * @summary directoryStringFirstComponentMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryStringFirstComponentMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"directoryStringFirstComponentMatch"}
 *   ID           id-mr-directoryStringFirstComponentMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const directoryStringFirstComponentMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&AssertionType": _encode_UnboundedDirectoryString,
    },
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_directoryStringFirstComponentMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION directoryStringFirstComponentMatch */

/* eslint-enable */
