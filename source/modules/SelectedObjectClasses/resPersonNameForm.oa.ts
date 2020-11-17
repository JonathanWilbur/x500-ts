/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
import { id_nf_resPersonNameForm } from "../SelectedObjectClasses/id-nf-resPersonNameForm.va";
import { residentialPerson } from "../SelectedObjectClasses/residentialPerson.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_nf_resPersonNameForm } from "../SelectedObjectClasses/id-nf-resPersonNameForm.va";
export { residentialPerson } from "../SelectedObjectClasses/residentialPerson.oa";

/* START_OF_SYMBOL_DEFINITION resPersonNameForm */
/**
 * @summary resPersonNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * resPersonNameForm NAME-FORM ::= {
 *   NAMES            residentialPerson
 *   WITH ATTRIBUTES  {commonName}
 *   AND OPTIONALLY   {streetAddress}
 *   ID               id-nf-resPersonNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const resPersonNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": residentialPerson /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": undefined,
    "&id": id_nf_resPersonNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION resPersonNameForm */

/* eslint-enable */
