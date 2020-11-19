/* eslint-disable */
import { deltaRevocationList } from "../AuthenticationFramework/deltaRevocationList.oa";
import { id_oc_deltaCRL } from "../AuthenticationFramework/id-oc-deltaCRL.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta";
import { top } from "../InformationFramework/top.oa";
export { deltaRevocationList } from "../AuthenticationFramework/deltaRevocationList.oa";
export { id_oc_deltaCRL } from "../AuthenticationFramework/id-oc-deltaCRL.va";
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

/* START_OF_SYMBOL_DEFINITION deltaCRL */
/**
 * @summary deltaCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deltaCRL OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                auxiliary
 *   MAY CONTAIN         {deltaRevocationList}
 *   LDAP-NAME           {"deltaCRL"}
 *   LDAP-DESC           "X.509 delta CRL"
 *   ID                  id-oc-deltaCRL }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const deltaCRL: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [deltaRevocationList] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 delta CRL" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_deltaCRL /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION deltaCRL */

/* eslint-enable */
