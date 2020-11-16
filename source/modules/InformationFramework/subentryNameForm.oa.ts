/* eslint-disable */
import { id_nf_subentryNameForm } from "../InformationFramework/id-nf-subentryNameForm.va";
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
import { subentry } from "../InformationFramework/subentry.oa";
export { id_nf_subentryNameForm } from "../InformationFramework/id-nf-subentryNameForm.va";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export { subentry } from "../InformationFramework/subentry.oa";

/* START_OF_SYMBOL_DEFINITION subentryNameForm */
/**
 * @summary subentryNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subentryNameForm NAME-FORM ::= {
 *   NAMES            subentry
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-subentryNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const subentryNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": subentry /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_subentryNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION subentryNameForm */

/* eslint-enable */
