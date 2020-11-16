/* eslint-disable */
import { id_sc_serviceAdminSubentry } from "../InformationFramework/id-sc-serviceAdminSubentry.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_sc_serviceAdminSubentry } from "../InformationFramework/id-sc-serviceAdminSubentry.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION serviceAdminSubentry */
/**
 * @summary serviceAdminSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceAdminSubentry OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   MUST CONTAIN  {searchRules}
 *   ID            id-sc-serviceAdminSubentry }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const serviceAdminSubentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_sc_serviceAdminSubentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION serviceAdminSubentry */

/* eslint-enable */
