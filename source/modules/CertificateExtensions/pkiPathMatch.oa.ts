/* eslint-disable */
import { id_mr_pkiPathMatch } from "../CertificateExtensions/id-mr-pkiPathMatch.va";
import {
    _decode_PkiPathMatchSyntax,
    _encode_PkiPathMatchSyntax,
} from "../CertificateExtensions/PkiPathMatchSyntax.ta";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { id_mr_pkiPathMatch } from "../CertificateExtensions/id-mr-pkiPathMatch.va";
export {
    PkiPathMatchSyntax,
    _decode_PkiPathMatchSyntax,
    _encode_PkiPathMatchSyntax,
} from "../CertificateExtensions/PkiPathMatchSyntax.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION pkiPathMatch */
/**
 * @summary pkiPathMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkiPathMatch MATCHING-RULE ::= {
 *   SYNTAX  PkiPathMatchSyntax
 *   ID      id-mr-pkiPathMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const pkiPathMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_PkiPathMatchSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_PkiPathMatchSyntax,
    },
    "&id": id_mr_pkiPathMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pkiPathMatch */

/* eslint-enable */
