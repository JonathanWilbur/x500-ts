/* eslint-disable */
import {
    _decode_CertificateListAssertion,
    _encode_CertificateListAssertion,
} from "../CertificateExtensions/CertificateListAssertion.ta";
import { certListAssertion } from "../CertificateExtensions/certListAssertion.oa";
import { id_mr_certificateListMatch } from "../CertificateExtensions/id-mr-certificateListMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export {
    CertificateListAssertion,
    _decode_CertificateListAssertion,
    _encode_CertificateListAssertion,
} from "../CertificateExtensions/CertificateListAssertion.ta";
export { certListAssertion } from "../CertificateExtensions/certListAssertion.oa";
export { id_mr_certificateListMatch } from "../CertificateExtensions/id-mr-certificateListMatch.va";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";

/* START_OF_SYMBOL_DEFINITION certificateListMatch */
/**
 * @summary certificateListMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateListMatch MATCHING-RULE ::= {
 *   SYNTAX  CertificateListAssertion
 *   LDAP-SYNTAX  certListAssertion.&id
 *   LDAP-NAME    {"certificateListMatch"}
 *   LDAP-DESC    "X.509 Certificate List Match"
 *   ID      id-mr-certificateListMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const certificateListMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CertificateListAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_CertificateListAssertion,
    },
    "&ldapSyntax": certListAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 Certificate List Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_certificateListMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certificateListMatch */

/* eslint-enable */
