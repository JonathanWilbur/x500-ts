/* eslint-disable */
import {
    _decode_FilterItem,
    _encode_FilterItem,
} from "../DirectoryAbstractService/FilterItem.ta";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_not_filterItem } from "../SelectedAttributeTypes/id-not-filterItem.va";
export {
    FilterItem,
    _decode_FilterItem,
    _encode_FilterItem,
} from "../DirectoryAbstractService/FilterItem.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_not_filterItem } from "../SelectedAttributeTypes/id-not-filterItem.va";

/* START_OF_SYMBOL_DEFINITION filterItem */
/**
 * @summary filterItem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * filterItem ATTRIBUTE ::= {
 *   WITH SYNTAX              FilterItem
 *   ID                       id-not-filterItem }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const filterItem: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_FilterItem,
    },
    encoderFor: {
        "&Type": _encode_FilterItem,
    },
    "&id": id_not_filterItem /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION filterItem */

/* eslint-enable */
