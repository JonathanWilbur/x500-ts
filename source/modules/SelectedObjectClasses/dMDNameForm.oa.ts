/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
import { dMD } from "../SelectedObjectClasses/dMD.oa";
import { id_nf_dMDNameForm } from "../SelectedObjectClasses/id-nf-dMDNameForm.va";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export { dMD } from "../SelectedObjectClasses/dMD.oa";
export { id_nf_dMDNameForm } from "../SelectedObjectClasses/id-nf-dMDNameForm.va";

/* START_OF_SYMBOL_DEFINITION dMDNameForm */
/**
 * @summary dMDNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dMDNameForm NAME-FORM ::= {
 *   NAMES            dMD
 *   WITH ATTRIBUTES  {dmdName}
 *   ID               id-nf-dMDNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const dMDNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": dMD /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_dMDNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dMDNameForm */

/* eslint-enable */
