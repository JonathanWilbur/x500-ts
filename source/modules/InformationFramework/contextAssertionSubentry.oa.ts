/* eslint-disable */
import { id_sc_contextAssertionSubentry } from "../InformationFramework/id-sc-contextAssertionSubentry.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_sc_contextAssertionSubentry } from "../InformationFramework/id-sc-contextAssertionSubentry.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION contextAssertionSubentry */
/**
 * @summary contextAssertionSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contextAssertionSubentry OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   MUST CONTAIN  {contextAssertionDefaults}
 *   ID            id-sc-contextAssertionSubentry }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const contextAssertionSubentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_sc_contextAssertionSubentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION contextAssertionSubentry */

/* eslint-enable */
