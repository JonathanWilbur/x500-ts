/* eslint-disable */
import {
    _decode_SearchControlOptions,
    _encode_SearchControlOptions,
} from "../DirectoryAbstractService/SearchControlOptions.ta";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_not_searchControlOptionsList } from "../SelectedAttributeTypes/id-not-searchControlOptionsList.va";
export {
    SearchControlOptions,
    SearchControlOptions_checkOverspecified /* IMPORTED_BIT */,
    SearchControlOptions_dnAttribute /* IMPORTED_BIT */,
    SearchControlOptions_entryCount /* IMPORTED_BIT */,
    SearchControlOptions_includeAllAreas /* IMPORTED_BIT */,
    SearchControlOptions_matchedValuesOnly /* IMPORTED_BIT */,
    SearchControlOptions_matchOnResidualName /* IMPORTED_BIT */,
    SearchControlOptions_noSystemRelaxation /* IMPORTED_BIT */,
    SearchControlOptions_performExactly /* IMPORTED_BIT */,
    SearchControlOptions_searchAliases /* IMPORTED_BIT */,
    SearchControlOptions_searchFamily /* IMPORTED_BIT */,
    SearchControlOptions_separateFamilyMembers /* IMPORTED_BIT */,
    SearchControlOptions_useSubset /* IMPORTED_BIT */,
    _decode_SearchControlOptions,
    _encode_SearchControlOptions,
} from "../DirectoryAbstractService/SearchControlOptions.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
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
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const searchControlOptionsList: ATTRIBUTE = {
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
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION searchControlOptionsList */

/* eslint-enable */
