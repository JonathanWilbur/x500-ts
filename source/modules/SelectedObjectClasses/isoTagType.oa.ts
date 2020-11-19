/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta";
import { top } from "../InformationFramework/top.oa";
import { tagAfi } from "../SelectedAttributeTypes/tagAfi.oa";
import { tagOid } from "../SelectedAttributeTypes/tagOid.oa";
import { uiiFormat } from "../SelectedAttributeTypes/uiiFormat.oa";
import { id_oc_isoTagType } from "../SelectedObjectClasses/id-oc-isoTagType.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export {
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind,
    ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
    _enum_for_ObjectClassKind,
} from "../InformationFramework/ObjectClassKind.ta";
export { top } from "../InformationFramework/top.oa";
export { tagAfi } from "../SelectedAttributeTypes/tagAfi.oa";
export { tagOid } from "../SelectedAttributeTypes/tagOid.oa";
export { uiiFormat } from "../SelectedAttributeTypes/uiiFormat.oa";
export { id_oc_isoTagType } from "../SelectedObjectClasses/id-oc-isoTagType.va";

/* START_OF_SYMBOL_DEFINITION isoTagType */
/**
 * @summary isoTagType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * isoTagType  OBJECT-CLASS ::= {
 *   SUBCLASS OF  { top }
 *   KIND         auxiliary
 *   MAY CONTAIN  { tagOid |
 *                  tagAfi |
 *                  uiiFormat }
 *   LDAP-NAME    {"isoTagType"}
 *   ID           id-oc-isoTagType }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const isoTagType: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        tagOid,
        tagAfi,
        uiiFormat,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_isoTagType /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION isoTagType */

/* eslint-enable */
