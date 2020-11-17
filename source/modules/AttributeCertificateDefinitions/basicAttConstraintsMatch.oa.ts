/* eslint-disable */
import {
    _decode_BasicAttConstraintsSyntax,
    _encode_BasicAttConstraintsSyntax,
} from "../AttributeCertificateDefinitions/BasicAttConstraintsSyntax.ta";
import { id_mr_basicAttConstraintsMatch } from "../AttributeCertificateDefinitions/id-mr-basicAttConstraintsMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export {
    BasicAttConstraintsSyntax,
    _decode_BasicAttConstraintsSyntax,
    _encode_BasicAttConstraintsSyntax,
} from "../AttributeCertificateDefinitions/BasicAttConstraintsSyntax.ta";
export { id_mr_basicAttConstraintsMatch } from "../AttributeCertificateDefinitions/id-mr-basicAttConstraintsMatch.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION basicAttConstraintsMatch */
/**
 * @summary basicAttConstraintsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * basicAttConstraintsMatch MATCHING-RULE ::= {
 *   SYNTAX  BasicAttConstraintsSyntax
 *   ID      id-mr-basicAttConstraintsMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const basicAttConstraintsMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_BasicAttConstraintsSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_BasicAttConstraintsSyntax,
    },
    "&id": id_mr_basicAttConstraintsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION basicAttConstraintsMatch */

/* eslint-enable */
