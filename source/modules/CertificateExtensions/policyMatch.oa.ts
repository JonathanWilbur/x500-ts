/* eslint-disable */
import {
    _decode_PolicyID,
    _encode_PolicyID,
} from "../AuthenticationFramework/PolicyID.ta";
import { id_mr_policyMatch } from "../CertificateExtensions/id-mr-policyMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export {
    PolicyID,
    _decode_PolicyID,
    _encode_PolicyID,
} from "../AuthenticationFramework/PolicyID.ta";
export { id_mr_policyMatch } from "../CertificateExtensions/id-mr-policyMatch.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION policyMatch */
/**
 * @summary policyMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * policyMatch MATCHING-RULE ::= {
 *   SYNTAX  PolicyID
 *   ID      id-mr-policyMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const policyMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_PolicyID,
    },
    encoderFor: {
        "&AssertionType": _encode_PolicyID,
    },
    "&id": id_mr_policyMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION policyMatch */

/* eslint-enable */
