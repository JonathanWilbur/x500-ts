/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
import { commonName } from "../SelectedAttributeTypes/commonName.oa";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa";
import { id_nf_orgPersonNameForm } from "../SelectedObjectClasses/id-nf-orgPersonNameForm.va";
import { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { commonName } from "../SelectedAttributeTypes/commonName.oa";
export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa";
export { id_nf_orgPersonNameForm } from "../SelectedObjectClasses/id-nf-orgPersonNameForm.va";
export { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa";

/* START_OF_SYMBOL_DEFINITION orgPersonNameForm */
/**
 * @summary orgPersonNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * orgPersonNameForm NAME-FORM ::= {
 *   NAMES            organizationalPerson
 *   WITH ATTRIBUTES  {commonName}
 *   AND OPTIONALLY   {organizationalUnitName}
 *   ID               id-nf-orgPersonNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const orgPersonNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": organizationalPerson /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [organizationalUnitName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_orgPersonNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION orgPersonNameForm */

/* eslint-enable */
