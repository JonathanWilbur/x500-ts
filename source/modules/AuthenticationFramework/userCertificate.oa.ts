/* eslint-disable */
import { id_at_userCertificate } from "../AuthenticationFramework/id-at-userCertificate.va";
import { x509Certificate } from "../AuthenticationFramework/x509Certificate.oa";
import { certificateExactMatch } from "../CertificateExtensions/certificateExactMatch.oa";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    Certificate,
    _get_decoder_for_Certificate,
    _get_encoder_for_Certificate,
} from "../AuthenticationFramework/Certificate.ta";
export { id_at_userCertificate } from "../AuthenticationFramework/id-at-userCertificate.va";
export { x509Certificate } from "../AuthenticationFramework/x509Certificate.oa";
export { certificateExactMatch } from "../CertificateExtensions/certificateExactMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION userCertificate */
/**
 * @summary userCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userCertificate ATTRIBUTE ::= {
 *   WITH SYNTAX              Certificate
 *   EQUALITY MATCHING RULE   certificateExactMatch
 *   LDAP-SYNTAX              x509Certificate.&id
 *   LDAP-NAME                {"userCertificate"}
 *   LDAP-DESC                "X.509 user certificate"
 *   ID                       id-at-userCertificate }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const userCertificate: ATTRIBUTE = {
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
    "&ldapDesc": "X.509 user certificate" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_userCertificate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION userCertificate */

/* eslint-enable */
