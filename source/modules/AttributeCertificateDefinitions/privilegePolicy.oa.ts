/* eslint-disable */
import { id_oc_privilegePolicy } from "../AttributeCertificateDefinitions/id-oc-privilegePolicy.va";
import { privPolicy } from "../AttributeCertificateDefinitions/privPolicy.oa";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta";
import { top } from "../InformationFramework/top.oa";
export { id_oc_privilegePolicy } from "../AttributeCertificateDefinitions/id-oc-privilegePolicy.va";
export { privPolicy } from "../AttributeCertificateDefinitions/privPolicy.oa";
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

/* START_OF_SYMBOL_DEFINITION privilegePolicy */
/**
 * @summary privilegePolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * privilegePolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {privPolicy}
 *   ID           id-oc-privilegePolicy }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const privilegePolicy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [privPolicy] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_privilegePolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION privilegePolicy */

/* eslint-enable */
