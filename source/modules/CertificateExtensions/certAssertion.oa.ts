/* eslint-disable */
import {
    _decode_CertificateAssertion,
    _encode_CertificateAssertion,
} from "../CertificateExtensions/CertificateAssertion.ta";
import { id_ldx_certAssertion } from "../CertificateExtensions/id-ldx-certAssertion.va";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export {
    CertificateAssertion,
    _decode_CertificateAssertion,
    _encode_CertificateAssertion,
} from "../CertificateExtensions/CertificateAssertion.ta";
export { id_ldx_certAssertion } from "../CertificateExtensions/id-ldx-certAssertion.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION certAssertion */
/**
 * @summary certAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certAssertion SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate Assertion"
 *   DIRECTORY SYNTAX  CertificateAssertion
 *   ID                id-ldx-certAssertion }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const certAssertion: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificateAssertion,
    },
    encoderFor: {
        "&Type": _encode_CertificateAssertion,
    },
    "&ldapDesc": "X.509 Certificate Assertion" /* OBJECT_FIELD_SETTING */,
    "&id": id_ldx_certAssertion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certAssertion */

/* eslint-enable */
