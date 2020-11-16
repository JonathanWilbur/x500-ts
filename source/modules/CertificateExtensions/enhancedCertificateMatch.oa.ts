/* eslint-disable */
import {
    _decode_EnhancedCertificateAssertion,
    _encode_EnhancedCertificateAssertion,
} from "../CertificateExtensions/EnhancedCertificateAssertion.ta";
import { id_mr_enhancedCertificateMatch } from "../CertificateExtensions/id-mr-enhancedCertificateMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export {
    EnhancedCertificateAssertion,
    _decode_EnhancedCertificateAssertion,
    _encode_EnhancedCertificateAssertion,
} from "../CertificateExtensions/EnhancedCertificateAssertion.ta";
export { id_mr_enhancedCertificateMatch } from "../CertificateExtensions/id-mr-enhancedCertificateMatch.va";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";

/* START_OF_SYMBOL_DEFINITION enhancedCertificateMatch */
/**
 * @summary enhancedCertificateMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * enhancedCertificateMatch MATCHING-RULE ::= {
 *   SYNTAX  EnhancedCertificateAssertion
 *   ID      id-mr-enhancedCertificateMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const enhancedCertificateMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_EnhancedCertificateAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_EnhancedCertificateAssertion,
    },
    "&id": id_mr_enhancedCertificateMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION enhancedCertificateMatch */

/* eslint-enable */
