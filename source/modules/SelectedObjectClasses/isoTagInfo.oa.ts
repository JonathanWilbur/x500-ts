/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { contentUrl } from "../SelectedAttributeTypes/contentUrl.oa";
import { tagAfi } from "../SelectedAttributeTypes/tagAfi.oa";
import { tagLocation } from "../SelectedAttributeTypes/tagLocation.oa";
import { tagOid } from "../SelectedAttributeTypes/tagOid.oa";
import { uii } from "../SelectedAttributeTypes/uii.oa";
import { uiiInUrn } from "../SelectedAttributeTypes/uiiInUrn.oa";
import { id_oc_isoTagInfo } from "../SelectedObjectClasses/id-oc-isoTagInfo.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { contentUrl } from "../SelectedAttributeTypes/contentUrl.oa";
export { tagAfi } from "../SelectedAttributeTypes/tagAfi.oa";
export { tagLocation } from "../SelectedAttributeTypes/tagLocation.oa";
export { tagOid } from "../SelectedAttributeTypes/tagOid.oa";
export { uii } from "../SelectedAttributeTypes/uii.oa";
export { uiiInUrn } from "../SelectedAttributeTypes/uiiInUrn.oa";
export { id_oc_isoTagInfo } from "../SelectedObjectClasses/id-oc-isoTagInfo.va";

/* START_OF_SYMBOL_DEFINITION isoTagInfo */
/**
 * @summary isoTagInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * isoTagInfo OBJECT-CLASS ::= {
 *   SUBCLASS OF  { top }
 *   KIND         auxiliary
 *   MAY CONTAIN  { tagOid |
 *                  tagAfi |
 *                  uii |
 *                  uiiInUrn |
 *                  contentUrl |
 *                  tagLocation }
 *   LDAP-NAME    {"isoTagInfo"}
 *   ID           id-oc-isoTagInfo }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const isoTagInfo: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        tagOid,
        tagAfi,
        uii,
        uiiInUrn,
        contentUrl,
        tagLocation,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_isoTagInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION isoTagInfo */

/* eslint-enable */
