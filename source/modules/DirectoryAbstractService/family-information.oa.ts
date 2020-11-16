/* eslint-disable */
import {
    _decode_FamilyEntries,
    _encode_FamilyEntries,
} from "../DirectoryAbstractService/FamilyEntries.ta";
import { id_at_family_information } from "../DirectoryAbstractService/id-at-family-information.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    FamilyEntries,
    _decode_FamilyEntries,
    _encode_FamilyEntries,
} from "../DirectoryAbstractService/FamilyEntries.ta";
export { id_at_family_information } from "../DirectoryAbstractService/id-at-family-information.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION family_information */
/**
 * @summary family_information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * family-information ATTRIBUTE ::= {
 *   WITH SYNTAX  FamilyEntries
 *   USAGE        directoryOperation
 *   ID           id-at-family-information }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const family_information: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_FamilyEntries,
    },
    encoderFor: {
        "&Type": _encode_FamilyEntries,
    },
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_at_family_information /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION family_information */

/* eslint-enable */