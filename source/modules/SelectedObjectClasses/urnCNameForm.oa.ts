/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
import { id_nf_urnCNameForm } from "../SelectedObjectClasses/id-nf-urnCNameForm.va";
import { urnCobj } from "../SelectedObjectClasses/urnCobj.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_nf_urnCNameForm } from "../SelectedObjectClasses/id-nf-urnCNameForm.va";
export { urnCobj } from "../SelectedObjectClasses/urnCobj.oa";

/* START_OF_SYMBOL_DEFINITION urnCNameForm */
/**
 * @summary urnCNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * urnCNameForm NAME-FORM ::= {
 *   NAMES            urnCobj
 *   WITH ATTRIBUTES  {urnC}
 *   ID               id-nf-urnCNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const urnCNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": urnCobj /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_urnCNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION urnCNameForm */

/* eslint-enable */
