/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
import { device } from "../SelectedObjectClasses/device.oa";
import { id_nf_deviceNameForm } from "../SelectedObjectClasses/id-nf-deviceNameForm.va";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export { device } from "../SelectedObjectClasses/device.oa";
export { id_nf_deviceNameForm } from "../SelectedObjectClasses/id-nf-deviceNameForm.va";

/* START_OF_SYMBOL_DEFINITION deviceNameForm */
/**
 * @summary deviceNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deviceNameForm NAME-FORM ::= {
 *   NAMES            device
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-deviceNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const deviceNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": device /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_deviceNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION deviceNameForm */

/* eslint-enable */
