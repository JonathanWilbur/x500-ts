/* eslint-disable */
import {
    CertificateExactAssertion,
    _decode_CertificateExactAssertion,
    _encode_CertificateExactAssertion,
} from "../CertificateExtensions/CertificateExactAssertion.ta";
import { id_ldx_certExactAssertion } from "../CertificateExtensions/id-ldx-certExactAssertion.va";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export {
    CertificateExactAssertion,
    _decode_CertificateExactAssertion,
    _encode_CertificateExactAssertion,
} from "../CertificateExtensions/CertificateExactAssertion.ta";
export { id_ldx_certExactAssertion } from "../CertificateExtensions/id-ldx-certExactAssertion.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION certExactAssertion */
/**
 * @summary certExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certExactAssertion SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate Exact Assertion"
 *   DIRECTORY SYNTAX  CertificateExactAssertion
 *   ID                id-ldx-certExactAssertion }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<CertificateExactAssertion>}
 * @implements {SYNTAX_NAME<CertificateExactAssertion>}
 */
export const certExactAssertion: SYNTAX_NAME<CertificateExactAssertion> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificateExactAssertion,
    },
    encoderFor: {
        "&Type": _encode_CertificateExactAssertion,
    },
    "&ldapDesc": "X.509 Certificate Exact Assertion" /* OBJECT_FIELD_SETTING */,
    "&id": id_ldx_certExactAssertion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certExactAssertion */

/* eslint-enable */
