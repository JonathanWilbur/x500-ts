/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
import { id_nf_oidC1NameForm } from "../SelectedObjectClasses/id-nf-oidC1NameForm.va";
import { oidCobj } from "../SelectedObjectClasses/oidCobj.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_nf_oidC1NameForm } from "../SelectedObjectClasses/id-nf-oidC1NameForm.va";
export { oidCobj } from "../SelectedObjectClasses/oidCobj.oa";

/* START_OF_SYMBOL_DEFINITION oidC1NameForm */
/**
 * @summary oidC1NameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidC1NameForm NAME-FORM ::= {
 *   NAMES            oidCobj
 *   WITH ATTRIBUTES  {oidC}
 *   ID               id-nf-oidC1NameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const oidC1NameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": oidCobj /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_oidC1NameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION oidC1NameForm */

/* eslint-enable */
