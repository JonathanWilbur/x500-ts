/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { oidC } from "../SelectedAttributeTypes/oidC.oa";
import { oidC1 } from "../SelectedAttributeTypes/oidC1.oa";
import { oidC2 } from "../SelectedAttributeTypes/oidC2.oa";
import { id_oidRoot } from "../SelectedObjectClasses/id-oidRoot.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { oidC } from "../SelectedAttributeTypes/oidC.oa";
export { oidC1 } from "../SelectedAttributeTypes/oidC1.oa";
export { oidC2 } from "../SelectedAttributeTypes/oidC2.oa";
export { id_oidRoot } from "../SelectedObjectClasses/id-oidRoot.va";

/* START_OF_SYMBOL_DEFINITION oidRoot */
/**
 * @summary oidRoot
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidRoot OBJECT-CLASS ::= {
 *   SUBCLASS OF   {alias}
 *   MUST CONTAIN  { oidC1 | oidC2 | oidC}
 *   LDAP-NAME     {"oidRoot"}
 *   ID            id-oidRoot }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const oidRoot: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": [oidC1, oidC2, oidC] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oidRoot /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION oidRoot */

/* eslint-enable */
