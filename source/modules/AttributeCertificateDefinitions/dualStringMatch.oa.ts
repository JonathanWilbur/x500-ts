/* eslint-disable */
import {
    _decode_DualStringSyntax,
    _encode_DualStringSyntax,
} from "../AttributeCertificateDefinitions/DualStringSyntax.ta";
import { id_mr_dualStringMatch } from "../AttributeCertificateDefinitions/id-mr-dualStringMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export {
    DualStringSyntax,
    _decode_DualStringSyntax,
    _encode_DualStringSyntax,
} from "../AttributeCertificateDefinitions/DualStringSyntax.ta";
export { id_mr_dualStringMatch } from "../AttributeCertificateDefinitions/id-mr-dualStringMatch.va";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";

/* START_OF_SYMBOL_DEFINITION dualStringMatch */
/**
 * @summary dualStringMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dualStringMatch MATCHING-RULE ::= {
 *   SYNTAX  DualStringSyntax
 *   ID      id-mr-dualStringMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const dualStringMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_DualStringSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_DualStringSyntax,
    },
    "&id": id_mr_dualStringMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dualStringMatch */

/* eslint-enable */
