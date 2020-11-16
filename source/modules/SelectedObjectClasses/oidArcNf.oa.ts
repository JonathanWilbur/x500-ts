/* eslint-disable */
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
import { id_oidArcNf } from "../SelectedObjectClasses/id-oidArcNf.va";
import { oidArc } from "../SelectedObjectClasses/oidArc.oa";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export { id_oidArcNf } from "../SelectedObjectClasses/id-oidArcNf.va";
export { oidArc } from "../SelectedObjectClasses/oidArc.oa";

/* START_OF_SYMBOL_DEFINITION oidArcNf */
/**
 * @summary oidArcNf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidArcNf NAME-FORM ::= {
 *   NAMES            oidArc
 *   WITH ATTRIBUTES  {oidC}
 *   ID               id-oidArcNf }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const oidArcNf: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": oidArc /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_oidArcNf /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION oidArcNf */

/* eslint-enable */
