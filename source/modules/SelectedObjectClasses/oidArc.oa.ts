/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { id_oidArc } from "../SelectedObjectClasses/id-oidArc.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oidArc } from "../SelectedObjectClasses/id-oidArc.va";

/* START_OF_SYMBOL_DEFINITION oidArc */
/**
 * @summary oidArc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidArc OBJECT-CLASS ::= {
 *   SUBCLASS OF   {alias}
 *   MUST CONTAIN  {oidC}
 *   LDAP-NAME     {"oidArc"}
 *   ID            id-oidArc }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const oidArc: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&ldapName": undefined,
    "&id": id_oidArc /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION oidArc */

/* eslint-enable */
