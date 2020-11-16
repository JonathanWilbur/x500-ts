/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { contentUrl } from "../SelectedAttributeTypes/contentUrl.oa";
import { epc } from "../SelectedAttributeTypes/epc.oa";
import { epcInUrn } from "../SelectedAttributeTypes/epcInUrn.oa";
import { tagLocation } from "../SelectedAttributeTypes/tagLocation.oa";
import { id_oc_epcTagInfoObj } from "../SelectedObjectClasses/id-oc-epcTagInfoObj.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { contentUrl } from "../SelectedAttributeTypes/contentUrl.oa";
export { epc } from "../SelectedAttributeTypes/epc.oa";
export { epcInUrn } from "../SelectedAttributeTypes/epcInUrn.oa";
export { tagLocation } from "../SelectedAttributeTypes/tagLocation.oa";
export { id_oc_epcTagInfoObj } from "../SelectedObjectClasses/id-oc-epcTagInfoObj.va";

/* START_OF_SYMBOL_DEFINITION epcTagInfoObj */
/**
 * @summary epcTagInfoObj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * epcTagInfoObj OBJECT-CLASS ::= {
 *   SUBCLASS OF  { top }
 *   KIND         auxiliary
 *   MAY CONTAIN  { epc |
 *                  epcInUrn |
 *                  contentUrl |
 *                  tagLocation }
 *   LDAP-NAME    {"epcTagInfoObj"}
 *   ID           id-oc-epcTagInfoObj }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const epcTagInfoObj: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        epc,
        epcInUrn,
        contentUrl,
        tagLocation,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_epcTagInfoObj /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION epcTagInfoObj */

/* eslint-enable */