/* eslint-disable */
import { deltaRevocationList } from "../AuthenticationFramework/deltaRevocationList.oa";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta";
import { certificationAuthority } from "../SelectedObjectClasses/certificationAuthority.oa";
import { id_oc_certificationAuthority_V2 } from "../SelectedObjectClasses/id-oc-certificationAuthority-V2.va";
export { deltaRevocationList } from "../AuthenticationFramework/deltaRevocationList.oa";
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
export { certificationAuthority } from "../SelectedObjectClasses/certificationAuthority.oa";
export { id_oc_certificationAuthority_V2 } from "../SelectedObjectClasses/id-oc-certificationAuthority-V2.va";

/* START_OF_SYMBOL_DEFINITION certificationAuthority_V2 */
/**
 * @summary certificationAuthority_V2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificationAuthority-V2 OBJECT-CLASS ::= {
 *   SUBCLASS OF   {certificationAuthority}
 *   KIND          auxiliary
 *   MAY CONTAIN   {deltaRevocationList}
 *   LDAP-NAME     {"certificationAuthority-V2"}
 *   LDAP-DESC     {"X.509 certificate authority, version 2"} -- RFC 4523
 *   ID            id-oc-certificationAuthority-V2 }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const certificationAuthority_V2: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [certificationAuthority] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [deltaRevocationList] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": undefined,
    "&id": id_oc_certificationAuthority_V2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certificationAuthority_V2 */

/* eslint-enable */
