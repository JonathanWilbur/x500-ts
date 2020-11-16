/* eslint-disable */
import { id_sc_collectiveAttributeSubentry } from "../InformationFramework/id-sc-collectiveAttributeSubentry.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_sc_collectiveAttributeSubentry } from "../InformationFramework/id-sc-collectiveAttributeSubentry.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION collectiveAttributeSubentry */
/**
 * @summary collectiveAttributeSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveAttributeSubentry OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   ID            id-sc-collectiveAttributeSubentry }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const collectiveAttributeSubentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&id": id_sc_collectiveAttributeSubentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION collectiveAttributeSubentry */

/* eslint-enable */
