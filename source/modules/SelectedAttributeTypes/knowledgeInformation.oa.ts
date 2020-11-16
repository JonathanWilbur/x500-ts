/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa";
import { id_at_knowledgeInformation } from "../SelectedAttributeTypes/id-at-knowledgeInformation.va";
import {
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa";
export { id_at_knowledgeInformation } from "../SelectedAttributeTypes/id-at-knowledgeInformation.va";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION knowledgeInformation */
/**
 * @summary knowledgeInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * knowledgeInformation ATTRIBUTE ::= {
 *   WITH SYNTAX              UnboundedDirectoryString
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   OBSOLETE                 TRUE
 *   ID                       id-at-knowledgeInformation }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const knowledgeInformation: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING */,
    "&id": id_at_knowledgeInformation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION knowledgeInformation */

/* eslint-enable */