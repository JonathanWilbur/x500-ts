/* eslint-disable */
import { id_at_cAcertificate } from "../AuthenticationFramework/id-at-cAcertificate.va";
import { x509Certificate } from "../AuthenticationFramework/x509Certificate.oa";
import { certificateExactMatch } from "../CertificateExtensions/certificateExactMatch.oa";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    Certificate,
    _get_decoder_for_Certificate,
    _get_encoder_for_Certificate,
} from "../AuthenticationFramework/Certificate.ta";
export { id_at_cAcertificate } from "../AuthenticationFramework/id-at-cAcertificate.va";
export { x509Certificate } from "../AuthenticationFramework/x509Certificate.oa";
export { certificateExactMatch } from "../CertificateExtensions/certificateExactMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION cACertificate */
/**
 * @summary cACertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cACertificate ATTRIBUTE ::= {
 *   WITH SYNTAX              Certificate
 *   EQUALITY MATCHING RULE   certificateExactMatch
 *   LDAP-SYNTAX              x509Certificate.&id
 *   LDAP-NAME                {"cACertificate"}
 *   LDAP-DESC                "X.509 CA certificate"
 *   ID                       id-at-cAcertificate }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const cACertificate: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Certificate,
    },
    encoderFor: {
        "&Type": _encode_Certificate,
    },
    "&equality-match": certificateExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509Certificate["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 CA certificate" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_cAcertificate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION cACertificate */

/* eslint-enable */
