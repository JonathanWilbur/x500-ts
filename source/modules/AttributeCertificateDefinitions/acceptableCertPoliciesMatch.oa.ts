/* eslint-disable */
import {
    _decode_AcceptableCertPoliciesSyntax,
    _encode_AcceptableCertPoliciesSyntax,
} from "../AttributeCertificateDefinitions/AcceptableCertPoliciesSyntax.ta";
import { id_mr_acceptableCertPoliciesMatch } from "../AttributeCertificateDefinitions/id-mr-acceptableCertPoliciesMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export {
    AcceptableCertPoliciesSyntax,
    _decode_AcceptableCertPoliciesSyntax,
    _encode_AcceptableCertPoliciesSyntax,
} from "../AttributeCertificateDefinitions/AcceptableCertPoliciesSyntax.ta";
export { id_mr_acceptableCertPoliciesMatch } from "../AttributeCertificateDefinitions/id-mr-acceptableCertPoliciesMatch.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION acceptableCertPoliciesMatch */
/**
 * @summary acceptableCertPoliciesMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acceptableCertPoliciesMatch MATCHING-RULE ::= {
 *   SYNTAX  AcceptableCertPoliciesSyntax
 *   ID      id-mr-acceptableCertPoliciesMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const acceptableCertPoliciesMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_AcceptableCertPoliciesSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_AcceptableCertPoliciesSyntax,
    },
    "&id": id_mr_acceptableCertPoliciesMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION acceptableCertPoliciesMatch */

/* eslint-enable */
