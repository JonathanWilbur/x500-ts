/* eslint-disable */
import {
    _decode_CertificateListExactAssertion,
    _encode_CertificateListExactAssertion,
} from "../CertificateExtensions/CertificateListExactAssertion.ta";
import { certListExactAssertion } from "../CertificateExtensions/certListExactAssertion.oa";
import { id_mr_certificateListExactMatch } from "../CertificateExtensions/id-mr-certificateListExactMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export {
    CertificateListExactAssertion,
    _decode_CertificateListExactAssertion,
    _encode_CertificateListExactAssertion,
} from "../CertificateExtensions/CertificateListExactAssertion.ta";
export { certListExactAssertion } from "../CertificateExtensions/certListExactAssertion.oa";
export { id_mr_certificateListExactMatch } from "../CertificateExtensions/id-mr-certificateListExactMatch.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION certificateListExactMatch */
/**
 * @summary certificateListExactMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateListExactMatch MATCHING-RULE ::= {
 *   SYNTAX       CertificateListExactAssertion
 *   LDAP-SYNTAX  certListExactAssertion.&id
 *   LDAP-NAME    {"certificateListExactMatch"}
 *   LDAP-DESC    "X.509 Certificate List Exact Match"
 *   ID           id-mr-certificateListExactMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const certificateListExactMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CertificateListExactAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_CertificateListExactAssertion,
    },
    "&ldapSyntax": certListExactAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc":
        "X.509 Certificate List Exact Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_certificateListExactMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certificateListExactMatch */

/* eslint-enable */
