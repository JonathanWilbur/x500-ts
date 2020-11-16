/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { id_oc_certificationAuthority_V2 } from "../SelectedObjectClasses/id-oc-certificationAuthority-V2.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
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
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&ldapName": undefined,
    "&ldapDesc": undefined,
    "&id": id_oc_certificationAuthority_V2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certificationAuthority_V2 */

/* eslint-enable */
