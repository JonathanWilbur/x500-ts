/* eslint-disable */
import { certExactAssertion } from "../CertificateExtensions/certExactAssertion.oa";
import {
    CertificateExactAssertion,
    _decode_CertificateExactAssertion,
    _encode_CertificateExactAssertion,
} from "../CertificateExtensions/CertificateExactAssertion.ta";
import { id_mr_certificateExactMatch } from "../CertificateExtensions/id-mr-certificateExactMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { certExactAssertion } from "../CertificateExtensions/certExactAssertion.oa";
export {
    CertificateExactAssertion,
    _decode_CertificateExactAssertion,
    _encode_CertificateExactAssertion,
} from "../CertificateExtensions/CertificateExactAssertion.ta";
export { id_mr_certificateExactMatch } from "../CertificateExtensions/id-mr-certificateExactMatch.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION certificateExactMatch */
/**
 * @summary certificateExactMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateExactMatch MATCHING-RULE ::= {
 *   SYNTAX       CertificateExactAssertion
 *   LDAP-SYNTAX  certExactAssertion.&id
 *   LDAP-NAME    {"certificateExactMatch"}
 *   LDAP-DESC    "X.509 Certificate Exact Match"
 *   ID           id-mr-certificateExactMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<CertificateExactAssertion>}
 * @implements {MATCHING_RULE<CertificateExactAssertion>}
 */
export const certificateExactMatch: MATCHING_RULE<CertificateExactAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CertificateExactAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_CertificateExactAssertion,
    },
    "&ldapSyntax": certExactAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 Certificate Exact Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_certificateExactMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certificateExactMatch */

/* eslint-enable */
