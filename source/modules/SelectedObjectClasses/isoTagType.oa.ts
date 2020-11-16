/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { tagAfi } from "../SelectedAttributeTypes/tagAfi.oa";
import { tagOid } from "../SelectedAttributeTypes/tagOid.oa";
import { uiiFormat } from "../SelectedAttributeTypes/uiiFormat.oa";
import { id_oc_isoTagType } from "../SelectedObjectClasses/id-oc-isoTagType.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
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
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
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
