/* eslint-disable */
import { id_mr_delegatedNameConstraintsMatch } from "../AttributeCertificateDefinitions/id-mr-delegatedNameConstraintsMatch.va";
import {
    _decode_NameConstraintsSyntax,
    _encode_NameConstraintsSyntax,
} from "../CertificateExtensions/NameConstraintsSyntax.ta";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { id_mr_delegatedNameConstraintsMatch } from "../AttributeCertificateDefinitions/id-mr-delegatedNameConstraintsMatch.va";
export {
    NameConstraintsSyntax,
    _decode_NameConstraintsSyntax,
    _encode_NameConstraintsSyntax,
} from "../CertificateExtensions/NameConstraintsSyntax.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION delegatedNameConstraintsMatch */
/**
 * @summary delegatedNameConstraintsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delegatedNameConstraintsMatch MATCHING-RULE ::= {
 *   SYNTAX  NameConstraintsSyntax
 *   ID      id-mr-delegatedNameConstraintsMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const delegatedNameConstraintsMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_NameConstraintsSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_NameConstraintsSyntax,
    },
    "&id": id_mr_delegatedNameConstraintsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION delegatedNameConstraintsMatch */

/* eslint-enable */
