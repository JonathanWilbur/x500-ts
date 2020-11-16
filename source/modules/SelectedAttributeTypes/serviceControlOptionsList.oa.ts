/* eslint-disable */
import {
    _decode_ServiceControlOptions,
    _encode_ServiceControlOptions,
} from "../DirectoryAbstractService/ServiceControlOptions.ta";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_not_serviceControlOptionsList } from "../SelectedAttributeTypes/id-not-serviceControlOptionsList.va";
export {
    ServiceControlOptions,
    ServiceControlOptions_allowWriteableCopy /* IMPORTED_BIT */,
    ServiceControlOptions_chainingProhibited /* IMPORTED_BIT */,
    ServiceControlOptions_copyShallDo /* IMPORTED_BIT */,
    ServiceControlOptions_countFamily /* IMPORTED_BIT */,
    ServiceControlOptions_dontDereferenceAliases /* IMPORTED_BIT */,
    ServiceControlOptions_dontMatchFriends /* IMPORTED_BIT */,
    ServiceControlOptions_dontSelectFriends /* IMPORTED_BIT */,
    ServiceControlOptions_dontUseCopy /* IMPORTED_BIT */,
    ServiceControlOptions_localScope /* IMPORTED_BIT */,
    ServiceControlOptions_manageDSAIT /* IMPORTED_BIT */,
    ServiceControlOptions_noSubtypeMatch /* IMPORTED_BIT */,
    ServiceControlOptions_noSubtypeSelection /* IMPORTED_BIT */,
    ServiceControlOptions_partialNameResolution /* IMPORTED_BIT */,
    ServiceControlOptions_preferChaining /* IMPORTED_BIT */,
    ServiceControlOptions_subentries /* IMPORTED_BIT */,
    _decode_ServiceControlOptions,
    _encode_ServiceControlOptions,
} from "../DirectoryAbstractService/ServiceControlOptions.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
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
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION serviceControlOptionsList */

/* eslint-enable */
