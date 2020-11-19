/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa";
import { id_nf_orgNameForm } from "../SelectedObjectClasses/id-nf-orgNameForm.va";
import { organization } from "../SelectedObjectClasses/organization.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { organizationName } from "../SelectedAttributeTypes/organizationName.oa";
export { id_nf_orgNameForm } from "../SelectedObjectClasses/id-nf-orgNameForm.va";
export { organization } from "../SelectedObjectClasses/organization.oa";

/* START_OF_SYMBOL_DEFINITION orgNameForm */
/**
 * @summary orgNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * orgNameForm NAME-FORM ::= {
 *   NAMES            organization
 *   WITH ATTRIBUTES  {organizationName}
 *   ID               id-nf-orgNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const orgNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": organization /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [organizationName] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_orgNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION orgNameForm */

/* eslint-enable */
