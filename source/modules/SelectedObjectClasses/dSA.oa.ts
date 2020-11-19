/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta";
import { knowledgeInformation } from "../SelectedAttributeTypes/knowledgeInformation.oa";
import { applicationEntity } from "../SelectedObjectClasses/applicationEntity.oa";
import { id_oc_dSA } from "../SelectedObjectClasses/id-oc-dSA.va";
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
export { knowledgeInformation } from "../SelectedAttributeTypes/knowledgeInformation.oa";
export { applicationEntity } from "../SelectedObjectClasses/applicationEntity.oa";
export { id_oc_dSA } from "../SelectedObjectClasses/id-oc-dSA.va";

/* START_OF_SYMBOL_DEFINITION dSA */
/**
 * @summary dSA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dSA OBJECT-CLASS ::= {
 *   SUBCLASS OF   {applicationEntity}
 *   MAY CONTAIN   {knowledgeInformation}
 *   LDAP-NAME     {"dSA"} -- RFC 2256
 *   ID            id-oc-dSA }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const dSA: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [applicationEntity] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [knowledgeInformation] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_dSA /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dSA */

/* eslint-enable */
