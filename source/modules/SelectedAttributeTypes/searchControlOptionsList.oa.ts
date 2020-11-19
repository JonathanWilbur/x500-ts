/* eslint-disable */
import {
    SearchControlOptions,
    _decode_SearchControlOptions,
    _encode_SearchControlOptions,
} from "../DirectoryAbstractService/SearchControlOptions.ta";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
import { id_not_searchControlOptionsList } from "../SelectedAttributeTypes/id-not-searchControlOptionsList.va";
export {
    checkOverspecified /* IMPORTED_SHORT_NAMED_BIT */,
    dnAttribute /* IMPORTED_SHORT_NAMED_BIT */,
    entryCount /* IMPORTED_SHORT_NAMED_BIT */,
    includeAllAreas /* IMPORTED_SHORT_NAMED_BIT */,
    matchedValuesOnly /* IMPORTED_SHORT_NAMED_BIT */,
    matchOnResidualName /* IMPORTED_SHORT_NAMED_BIT */,
    noSystemRelaxation /* IMPORTED_SHORT_NAMED_BIT */,
    performExactly /* IMPORTED_SHORT_NAMED_BIT */,
    searchAliases /* IMPORTED_SHORT_NAMED_BIT */,
    SearchControlOptions,
    SearchControlOptions_checkOverspecified /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_dnAttribute /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_entryCount /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_includeAllAreas /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_matchedValuesOnly /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_matchOnResidualName /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_noSystemRelaxation /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_performExactly /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_searchAliases /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_searchFamily /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_separateFamilyMembers /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_useSubset /* IMPORTED_LONG_NAMED_BIT */,
    searchFamily /* IMPORTED_SHORT_NAMED_BIT */,
    separateFamilyMembers /* IMPORTED_SHORT_NAMED_BIT */,
    useSubset /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_SearchControlOptions,
    _encode_SearchControlOptions,
} from "../DirectoryAbstractService/SearchControlOptions.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_not_searchControlOptionsList } from "../SelectedAttributeTypes/id-not-searchControlOptionsList.va";

/* START_OF_SYMBOL_DEFINITION searchControlOptionsList */
/**
 * @summary searchControlOptionsList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * searchControlOptionsList ATTRIBUTE ::= {
 *   WITH SYNTAX              SearchControlOptions
 *   SINGLE VALUE             TRUE
 *   ID                       id-not-searchControlOptionsList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SearchControlOptions>}
 * @implements {ATTRIBUTE<SearchControlOptions>}
 */
export const searchControlOptionsList: ATTRIBUTE<SearchControlOptions> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SearchControlOptions,
    },
    encoderFor: {
        "&Type": _encode_SearchControlOptions,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_not_searchControlOptionsList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION searchControlOptionsList */

/* eslint-enable */
