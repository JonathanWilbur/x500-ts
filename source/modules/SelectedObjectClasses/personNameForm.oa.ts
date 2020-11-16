/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
import { id_nf_personNameForm } from "../SelectedObjectClasses/id-nf-personNameForm.va";
import { person } from "../SelectedObjectClasses/person.oa";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export { id_nf_personNameForm } from "../SelectedObjectClasses/id-nf-personNameForm.va";
export { person } from "../SelectedObjectClasses/person.oa";

/* START_OF_SYMBOL_DEFINITION personNameForm */
/**
 * @summary personNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * personNameForm NAME-FORM ::= {
 *   NAMES            person
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-personNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const personNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": person /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_personNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION personNameForm */

/* eslint-enable */
