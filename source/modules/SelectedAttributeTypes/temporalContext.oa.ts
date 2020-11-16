/* eslint-disable */
import { CONTEXT } from "../InformationFramework/CONTEXT.oca";
import { id_avc_temporal } from "../SelectedAttributeTypes/id-avc-temporal.va";
import {
    _decode_TimeAssertion,
    _encode_TimeAssertion,
} from "../SelectedAttributeTypes/TimeAssertion.ta";
import {
    _decode_TimeSpecification,
    _encode_TimeSpecification,
} from "../SelectedAttributeTypes/TimeSpecification.ta";
export { CONTEXT } from "../InformationFramework/CONTEXT.oca";
export { id_avc_temporal } from "../SelectedAttributeTypes/id-avc-temporal.va";
export {
    TimeAssertion,
    _decode_TimeAssertion,
    _encode_TimeAssertion,
} from "../SelectedAttributeTypes/TimeAssertion.ta";
export {
    TimeSpecification,
    _decode_TimeSpecification,
    _encode_TimeSpecification,
} from "../SelectedAttributeTypes/TimeSpecification.ta";

/* START_OF_SYMBOL_DEFINITION temporalContext */
/**
 * @summary temporalContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * temporalContext CONTEXT ::= {
 *   WITH SYNTAX  TimeSpecification
 *   ASSERTED AS  TimeAssertion
 *   ID           id-avc-temporal }
 * ```
 *
 * @constant
 * @type {CONTEXT}
 * @implements {CONTEXT}
 */
export const temporalContext: CONTEXT = {
    class: "CONTEXT",
    decoderFor: {
        "&Type": _decode_TimeSpecification,
        "&Assertion": _decode_TimeAssertion,
    },
    encoderFor: {
        "&Type": _encode_TimeSpecification,
        "&Assertion": _encode_TimeAssertion,
    },
    "&id": id_avc_temporal /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Assertion": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&absentMatch": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION temporalContext */

/* eslint-enable */
