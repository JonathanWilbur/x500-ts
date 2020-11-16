/* eslint-disable */
import { id_sc_accessControlSubentry } from "../InformationFramework/id-sc-accessControlSubentry.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_sc_accessControlSubentry } from "../InformationFramework/id-sc-accessControlSubentry.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION accessControlSubentry */
/**
 * @summary accessControlSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessControlSubentry OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   ID            id-sc-accessControlSubentry }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const accessControlSubentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&id": id_sc_accessControlSubentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION accessControlSubentry */

/* eslint-enable */
