/* eslint-disable */
import { id_oc_child } from "../InformationFramework/id-oc-child.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_child } from "../InformationFramework/id-oc-child.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION child */
/**
 * @summary child
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * child OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   ID            id-oc-child }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const child: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_child /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION child */

/* eslint-enable */
