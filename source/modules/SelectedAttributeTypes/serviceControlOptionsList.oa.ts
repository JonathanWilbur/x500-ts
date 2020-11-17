/* eslint-disable */
import {
    _decode_ServiceControlOptions,
    _encode_ServiceControlOptions,
} from "../DirectoryAbstractService/ServiceControlOptions.ta";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
import { id_not_serviceControlOptionsList } from "../SelectedAttributeTypes/id-not-serviceControlOptionsList.va";
export {
    allowWriteableCopy /* IMPORTED_SHORT_NAMED_BIT */,
    chainingProhibited /* IMPORTED_SHORT_NAMED_BIT */,
    copyShallDo /* IMPORTED_SHORT_NAMED_BIT */,
    countFamily /* IMPORTED_SHORT_NAMED_BIT */,
    dontDereferenceAliases /* IMPORTED_SHORT_NAMED_BIT */,
    dontMatchFriends /* IMPORTED_SHORT_NAMED_BIT */,
    dontSelectFriends /* IMPORTED_SHORT_NAMED_BIT */,
    dontUseCopy /* IMPORTED_SHORT_NAMED_BIT */,
    localScope /* IMPORTED_SHORT_NAMED_BIT */,
    manageDSAIT /* IMPORTED_SHORT_NAMED_BIT */,
    noSubtypeMatch /* IMPORTED_SHORT_NAMED_BIT */,
    noSubtypeSelection /* IMPORTED_SHORT_NAMED_BIT */,
    partialNameResolution /* IMPORTED_SHORT_NAMED_BIT */,
    preferChaining /* IMPORTED_SHORT_NAMED_BIT */,
    ServiceControlOptions,
    ServiceControlOptions_allowWriteableCopy /* IMPORTED_LONG_NAMED_BIT */,
    ServiceControlOptions_chainingProhibited /* IMPORTED_LONG_NAMED_BIT */,
    ServiceControlOptions_copyShallDo /* IMPORTED_LONG_NAMED_BIT */,
    ServiceControlOptions_countFamily /* IMPORTED_LONG_NAMED_BIT */,
    ServiceControlOptions_dontDereferenceAliases /* IMPORTED_LONG_NAMED_BIT */,
    ServiceControlOptions_dontMatchFriends /* IMPORTED_LONG_NAMED_BIT */,
    ServiceControlOptions_dontSelectFriends /* IMPORTED_LONG_NAMED_BIT */,
    ServiceControlOptions_dontUseCopy /* IMPORTED_LONG_NAMED_BIT */,
    ServiceControlOptions_localScope /* IMPORTED_LONG_NAMED_BIT */,
    ServiceControlOptions_manageDSAIT /* IMPORTED_LONG_NAMED_BIT */,
    ServiceControlOptions_noSubtypeMatch /* IMPORTED_LONG_NAMED_BIT */,
    ServiceControlOptions_noSubtypeSelection /* IMPORTED_LONG_NAMED_BIT */,
    ServiceControlOptions_partialNameResolution /* IMPORTED_LONG_NAMED_BIT */,
    ServiceControlOptions_preferChaining /* IMPORTED_LONG_NAMED_BIT */,
    ServiceControlOptions_subentries /* IMPORTED_LONG_NAMED_BIT */,
    subentries /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_ServiceControlOptions,
    _encode_ServiceControlOptions,
} from "../DirectoryAbstractService/ServiceControlOptions.ta";
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
export { id_not_serviceControlOptionsList } from "../SelectedAttributeTypes/id-not-serviceControlOptionsList.va";

/* START_OF_SYMBOL_DEFINITION serviceControlOptionsList */
/**
 * @summary serviceControlOptionsList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceControlOptionsList ATTRIBUTE ::= {
 *   WITH SYNTAX              ServiceControlOptions
 *   SINGLE VALUE             TRUE
 *   ID                       id-not-serviceControlOptionsList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const serviceControlOptionsList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ServiceControlOptions,
    },
    encoderFor: {
        "&Type": _encode_ServiceControlOptions,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_not_serviceControlOptionsList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION serviceControlOptionsList */

/* eslint-enable */
