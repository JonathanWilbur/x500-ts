/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
import { applicationEntity } from "../SelectedObjectClasses/applicationEntity.oa";
import { id_nf_applEntityNameForm } from "../SelectedObjectClasses/id-nf-applEntityNameForm.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { applicationEntity } from "../SelectedObjectClasses/applicationEntity.oa";
export { id_nf_applEntityNameForm } from "../SelectedObjectClasses/id-nf-applEntityNameForm.va";

/* START_OF_SYMBOL_DEFINITION applEntityNameForm */
/**
 * @summary applEntityNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * applEntityNameForm NAME-FORM ::= {
 *   NAMES            applicationEntity
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-applEntityNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const applEntityNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": applicationEntity /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_applEntityNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION applEntityNameForm */

/* eslint-enable */
