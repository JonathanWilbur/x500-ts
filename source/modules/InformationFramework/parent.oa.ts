/* eslint-disable */
import { id_oc_parent } from "../InformationFramework/id-oc-parent.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import {
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_oc_parent } from "../InformationFramework/id-oc-parent.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export {
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind,
    ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
    _enum_for_ObjectClassKind,
} from "../InformationFramework/ObjectClassKind.ta";

/* START_OF_SYMBOL_DEFINITION parent */
/**
 * @summary parent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * parent OBJECT-CLASS ::= {
 *   KIND          abstract
 *   ID            id-oc-parent }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const parent: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": abstract /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_parent /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION parent */

/* eslint-enable */
