/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
import { oidC } from "../SelectedAttributeTypes/oidC.oa";
import { id_nf_oidCNameForm } from "../SelectedObjectClasses/id-nf-oidCNameForm.va";
import { oidCobj } from "../SelectedObjectClasses/oidCobj.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { oidC } from "../SelectedAttributeTypes/oidC.oa";
export { id_nf_oidCNameForm } from "../SelectedObjectClasses/id-nf-oidCNameForm.va";
export { oidCobj } from "../SelectedObjectClasses/oidCobj.oa";

/* START_OF_SYMBOL_DEFINITION oidCNameForm */
/**
 * @summary oidCNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidCNameForm NAME-FORM ::= {
 *   NAMES            oidCobj
 *   WITH ATTRIBUTES  {oidC}
 *   ID               id-nf-oidCNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const oidCNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": oidCobj /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [oidC] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_oidCNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION oidCNameForm */

/* eslint-enable */
