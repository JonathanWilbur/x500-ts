/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
import { id_nf_locNameForm } from "../SelectedObjectClasses/id-nf-locNameForm.va";
import { locality } from "../SelectedObjectClasses/locality.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_nf_locNameForm } from "../SelectedObjectClasses/id-nf-locNameForm.va";
export { locality } from "../SelectedObjectClasses/locality.oa";

/* START_OF_SYMBOL_DEFINITION locNameForm */
/**
 * @summary locNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * locNameForm NAME-FORM ::= {
 *   NAMES            locality
 *   WITH ATTRIBUTES  {localityName}
 *   ID               id-nf-locNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const locNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": locality /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_locNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION locNameForm */

/* eslint-enable */
