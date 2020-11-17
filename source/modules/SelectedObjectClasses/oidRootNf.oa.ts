/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
import { oidC } from "../SelectedAttributeTypes/oidC.oa";
import { oidC1 } from "../SelectedAttributeTypes/oidC1.oa";
import { oidC2 } from "../SelectedAttributeTypes/oidC2.oa";
import { id_oidRootNf } from "../SelectedObjectClasses/id-oidRootNf.va";
import { oidRoot } from "../SelectedObjectClasses/oidRoot.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { oidC } from "../SelectedAttributeTypes/oidC.oa";
export { oidC1 } from "../SelectedAttributeTypes/oidC1.oa";
export { oidC2 } from "../SelectedAttributeTypes/oidC2.oa";
export { id_oidRootNf } from "../SelectedObjectClasses/id-oidRootNf.va";
export { oidRoot } from "../SelectedObjectClasses/oidRoot.oa";

/* START_OF_SYMBOL_DEFINITION oidRootNf */
/**
 * @summary oidRootNf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidRootNf NAME-FORM ::= {
 *   NAMES            oidRoot
 *   WITH ATTRIBUTES  {oidC1 | oidC2 | oidC}
 *   ID               id-oidRootNf }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const oidRootNf: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": oidRoot /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [oidC1, oidC2, oidC] /* OBJECT_FIELD_SETTING */,
    "&id": id_oidRootNf /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION oidRootNf */

/* eslint-enable */
