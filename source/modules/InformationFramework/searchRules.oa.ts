/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_oa_searchRules } from "../InformationFramework/id-oa-searchRules.va";
import {
    _decode_SearchRuleDescription,
    _encode_SearchRuleDescription,
} from "../InformationFramework/SearchRuleDescription.ta";
import { integerFirstComponentMatch } from "../SelectedAttributeTypes/integerFirstComponentMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_oa_searchRules } from "../InformationFramework/id-oa-searchRules.va";
export {
    SearchRuleDescription,
    _decode_SearchRuleDescription,
    _encode_SearchRuleDescription,
} from "../InformationFramework/SearchRuleDescription.ta";
export { integerFirstComponentMatch } from "../SelectedAttributeTypes/integerFirstComponentMatch.oa";

/* START_OF_SYMBOL_DEFINITION searchRules */
/**
 * @summary searchRules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * searchRules ATTRIBUTE ::= {
 *   WITH SYNTAX             SearchRuleDescription
 *   EQUALITY MATCHING RULE  integerFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-oa-searchRules }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const searchRules: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SearchRuleDescription,
    },
    encoderFor: {
        "&Type": _encode_SearchRuleDescription,
    },
    "&equality-match": integerFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_searchRules /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION searchRules */

/* eslint-enable */
