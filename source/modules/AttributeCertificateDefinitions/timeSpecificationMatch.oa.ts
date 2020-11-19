/* eslint-disable */
import { id_mr_timeSpecMatch } from "../AttributeCertificateDefinitions/id-mr-timeSpecMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import {
    TimeSpecification,
    _decode_TimeSpecification,
    _encode_TimeSpecification,
} from "../SelectedAttributeTypes/TimeSpecification.ta";
export { id_mr_timeSpecMatch } from "../AttributeCertificateDefinitions/id-mr-timeSpecMatch.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export {
    TimeSpecification,
    _decode_TimeSpecification,
    _encode_TimeSpecification,
} from "../SelectedAttributeTypes/TimeSpecification.ta";

/* START_OF_SYMBOL_DEFINITION timeSpecificationMatch */
/**
 * @summary timeSpecificationMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * timeSpecificationMatch MATCHING-RULE ::= {
 *   SYNTAX  TimeSpecification
 *   ID      id-mr-timeSpecMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<TimeSpecification>}
 * @implements {MATCHING_RULE<TimeSpecification>}
 */
export const timeSpecificationMatch: MATCHING_RULE<TimeSpecification> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_TimeSpecification,
    },
    encoderFor: {
        "&AssertionType": _encode_TimeSpecification,
    },
    "&id": id_mr_timeSpecMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION timeSpecificationMatch */

/* eslint-enable */
