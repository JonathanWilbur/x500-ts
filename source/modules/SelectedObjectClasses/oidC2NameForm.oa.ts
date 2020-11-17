/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
import { id_nf_oidC2NameForm } from "../SelectedObjectClasses/id-nf-oidC2NameForm.va";
import { oidCobj } from "../SelectedObjectClasses/oidCobj.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_nf_oidC2NameForm } from "../SelectedObjectClasses/id-nf-oidC2NameForm.va";
export { oidCobj } from "../SelectedObjectClasses/oidCobj.oa";

/* START_OF_SYMBOL_DEFINITION oidC2NameForm */
/**
 * @summary oidC2NameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidC2NameForm NAME-FORM ::= {
 *   NAMES            oidCobj
 *   WITH ATTRIBUTES  {oidC}
 *   ID               id-nf-oidC2NameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const oidC2NameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": oidCobj /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_oidC2NameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION oidC2NameForm */

/* eslint-enable */
