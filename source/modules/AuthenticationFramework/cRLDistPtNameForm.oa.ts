/* eslint-disable */
import { cRLDistributionPoint } from "../AuthenticationFramework/cRLDistributionPoint.oa";
import { id_nf_cRLDistPtNameForm } from "../AuthenticationFramework/id-nf-cRLDistPtNameForm.va";
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export { cRLDistributionPoint } from "../AuthenticationFramework/cRLDistributionPoint.oa";
export { id_nf_cRLDistPtNameForm } from "../AuthenticationFramework/id-nf-cRLDistPtNameForm.va";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";

/* START_OF_SYMBOL_DEFINITION cRLDistPtNameForm */
/**
 * @summary cRLDistPtNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cRLDistPtNameForm NAME-FORM ::= {
 *   NAMES               cRLDistributionPoint
 *   WITH ATTRIBUTES     {commonName}
 *   ID                  id-nf-cRLDistPtNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const cRLDistPtNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": cRLDistributionPoint /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_cRLDistPtNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION cRLDistPtNameForm */

/* eslint-enable */
