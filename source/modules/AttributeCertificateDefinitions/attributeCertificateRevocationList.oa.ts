/* eslint-disable */
import { id_at_attributeCertificateRevocationList } from "../AttributeCertificateDefinitions/id-at-attributeCertificateRevocationList.va";
import { x509CertificateList } from "../AuthenticationFramework/x509CertificateList.oa";
import { certificateListExactMatch } from "../CertificateExtensions/certificateListExactMatch.oa";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_attributeCertificateRevocationList } from "../AttributeCertificateDefinitions/id-at-attributeCertificateRevocationList.va";
export {
    CertificateList,
    _get_decoder_for_CertificateList,
    _get_encoder_for_CertificateList,
} from "../AuthenticationFramework/CertificateList.ta";
export { x509CertificateList } from "../AuthenticationFramework/x509CertificateList.oa";
export { certificateListExactMatch } from "../CertificateExtensions/certificateListExactMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION attributeCertificateRevocationList */
/**
 * @summary attributeCertificateRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeCertificateRevocationList ATTRIBUTE ::= {
 *   WITH SYNTAX             CertificateList
 *   EQUALITY MATCHING RULE  certificateListExactMatch
 *   LDAP-SYNTAX             x509CertificateList.&id
 *   LDAP-NAME               {"AttrCertificateRevocationList"}
 *   LDAP-DESC               "X.509 Attr certificate revocation list"
 *   ID                      id-at-attributeCertificateRevocationList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const attributeCertificateRevocationList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CertificateList,
    },
    encoderFor: {
        "&Type": _encode_CertificateList,
    },
    "&equality-match": certificateListExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509CertificateList["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc":
        "X.509 Attr certificate revocation list" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_attributeCertificateRevocationList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION attributeCertificateRevocationList */

/* eslint-enable */
