/* eslint-disable */
import { id_oc_deltaCRL } from "../AuthenticationFramework/id-oc-deltaCRL.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_deltaCRL } from "../AuthenticationFramework/id-oc-deltaCRL.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

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
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 delta CRL" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_deltaCRL /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION deltaCRL */

/* eslint-enable */
