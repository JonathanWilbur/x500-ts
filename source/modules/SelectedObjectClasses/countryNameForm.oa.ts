/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
import { country } from "../SelectedObjectClasses/country.oa";
import { id_nf_countryNameForm } from "../SelectedObjectClasses/id-nf-countryNameForm.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { country } from "../SelectedObjectClasses/country.oa";
export { id_nf_countryNameForm } from "../SelectedObjectClasses/id-nf-countryNameForm.va";

/* START_OF_SYMBOL_DEFINITION countryNameForm */
/**
 * @summary countryNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryNameForm NAME-FORM ::= {
 *   NAMES            country
 *   WITH ATTRIBUTES  {countryName}
 *   ID               id-nf-countryNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const countryNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": country /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_countryNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION countryNameForm */

/* eslint-enable */
