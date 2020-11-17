/* eslint-disable */
import {
    _decode_DelMatchSyntax,
    _encode_DelMatchSyntax,
} from "../AttributeCertificateDefinitions/DelMatchSyntax.ta";
import { id_mr_delegationPathMatch } from "../AttributeCertificateDefinitions/id-mr-delegationPathMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export {
    DelMatchSyntax,
    _decode_DelMatchSyntax,
    _encode_DelMatchSyntax,
} from "../AttributeCertificateDefinitions/DelMatchSyntax.ta";
export { id_mr_delegationPathMatch } from "../AttributeCertificateDefinitions/id-mr-delegationPathMatch.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION delegationPathMatch */
/**
 * @summary delegationPathMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delegationPathMatch MATCHING-RULE ::= {
 *   SYNTAX  DelMatchSyntax
 *   ID      id-mr-delegationPathMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const delegationPathMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_DelMatchSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_DelMatchSyntax,
    },
    "&id": id_mr_delegationPathMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION delegationPathMatch */

/* eslint-enable */
