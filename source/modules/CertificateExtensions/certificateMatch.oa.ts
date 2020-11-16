/* eslint-disable */
import { certAssertion } from "../CertificateExtensions/certAssertion.oa";
import {
    _decode_CertificateAssertion,
    _encode_CertificateAssertion,
} from "../CertificateExtensions/CertificateAssertion.ta";
import { id_mr_certificateMatch } from "../CertificateExtensions/id-mr-certificateMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { certAssertion } from "../CertificateExtensions/certAssertion.oa";
export {
    CertificateAssertion,
    _decode_CertificateAssertion,
    _encode_CertificateAssertion,
} from "../CertificateExtensions/CertificateAssertion.ta";
export { id_mr_certificateMatch } from "../CertificateExtensions/id-mr-certificateMatch.va";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";

/* START_OF_SYMBOL_DEFINITION certificateMatch */
/**
 * @summary certificateMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateMatch MATCHING-RULE ::= {
 *   SYNTAX       CertificateAssertion
 *   LDAP-SYNTAX  certAssertion.&id
 *   LDAP-NAME    {"certificateMatch"}
 *   LDAP-DESC    "X.509 Certificate Match"
 *   ID           id-mr-certificateMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const certificateMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CertificateAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_CertificateAssertion,
    },
    "&ldapSyntax": certAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 Certificate Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_certificateMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certificateMatch */

/* eslint-enable */
