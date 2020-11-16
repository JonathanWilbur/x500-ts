/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { id_oc_dSA } from "../SelectedObjectClasses/id-oc-dSA.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
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
    "&Superclasses": undefined,
    "&OptionalAttributes": undefined,
    "&ldapName": undefined,
    "&id": id_oc_dSA /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dSA */

/* eslint-enable */
