/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
import { groupOfNames } from "../SelectedObjectClasses/groupOfNames.oa";
import { id_nf_gONNameForm } from "../SelectedObjectClasses/id-nf-gONNameForm.va";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export { groupOfNames } from "../SelectedObjectClasses/groupOfNames.oa";
export { id_nf_gONNameForm } from "../SelectedObjectClasses/id-nf-gONNameForm.va";

/* START_OF_SYMBOL_DEFINITION gONNameForm */
/**
 * @summary gONNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gONNameForm NAME-FORM ::= {
 *   NAMES            groupOfNames
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-gONNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const gONNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": groupOfNames /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_gONNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION gONNameForm */

/* eslint-enable */
