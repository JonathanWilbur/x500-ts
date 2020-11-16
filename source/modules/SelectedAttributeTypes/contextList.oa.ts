/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    _decode_ContextAssertion,
    _encode_ContextAssertion,
} from "../InformationFramework/ContextAssertion.ta";
import { id_not_contextList } from "../SelectedAttributeTypes/id-not-contextList.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    ContextAssertion,
    _decode_ContextAssertion,
    _encode_ContextAssertion,
} from "../InformationFramework/ContextAssertion.ta";
export { id_not_contextList } from "../SelectedAttributeTypes/id-not-contextList.va";

/* START_OF_SYMBOL_DEFINITION contextList */
/**
 * @summary contextList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contextList ATTRIBUTE ::= {
 *   WITH SYNTAX              ContextAssertion
 *   ID                       id-not-contextList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const contextList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ContextAssertion,
    },
    encoderFor: {
        "&Type": _encode_ContextAssertion,
    },
    "&id": id_not_contextList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION contextList */

/* eslint-enable */
