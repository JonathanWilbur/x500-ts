/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
import { applicationProcess } from "../SelectedObjectClasses/applicationProcess.oa";
import { id_nf_applProcessNameForm } from "../SelectedObjectClasses/id-nf-applProcessNameForm.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { applicationProcess } from "../SelectedObjectClasses/applicationProcess.oa";
export { id_nf_applProcessNameForm } from "../SelectedObjectClasses/id-nf-applProcessNameForm.va";

/* START_OF_SYMBOL_DEFINITION applProcessNameForm */
/**
 * @summary applProcessNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * applProcessNameForm NAME-FORM ::= {
 *   NAMES            applicationProcess
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-applProcessNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const applProcessNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": applicationProcess /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_applProcessNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION applProcessNameForm */

/* eslint-enable */
