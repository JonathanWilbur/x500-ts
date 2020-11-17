/* eslint-disable */
import {
    _decode_AttributeCertificateExactAssertion,
    _encode_AttributeCertificateExactAssertion,
} from "../AttributeCertificateDefinitions/AttributeCertificateExactAssertion.ta";
import { id_mr_attributeCertificateExactMatch } from "../AttributeCertificateDefinitions/id-mr-attributeCertificateExactMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export {
    AttributeCertificateExactAssertion,
    _decode_AttributeCertificateExactAssertion,
    _encode_AttributeCertificateExactAssertion,
} from "../AttributeCertificateDefinitions/AttributeCertificateExactAssertion.ta";
export { id_mr_attributeCertificateExactMatch } from "../AttributeCertificateDefinitions/id-mr-attributeCertificateExactMatch.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION attributeCertificateExactMatch */
/**
 * @summary attributeCertificateExactMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeCertificateExactMatch MATCHING-RULE ::= {
 *   SYNTAX  AttributeCertificateExactAssertion
 *   ID      id-mr-attributeCertificateExactMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const attributeCertificateExactMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_AttributeCertificateExactAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_AttributeCertificateExactAssertion,
    },
    "&id": id_mr_attributeCertificateExactMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION attributeCertificateExactMatch */

/* eslint-enable */
