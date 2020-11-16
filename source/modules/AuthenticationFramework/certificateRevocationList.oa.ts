/* eslint-disable */
import { id_at_certificateRevocationList } from "../AuthenticationFramework/id-at-certificateRevocationList.va";
import { x509CertificateList } from "../AuthenticationFramework/x509CertificateList.oa";
import { certificateListExactMatch } from "../CertificateExtensions/certificateListExactMatch.oa";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    CertificateList,
    _get_decoder_for_CertificateList,
    _get_encoder_for_CertificateList,
} from "../AuthenticationFramework/CertificateList.ta";
export { id_at_certificateRevocationList } from "../AuthenticationFramework/id-at-certificateRevocationList.va";
export { x509CertificateList } from "../AuthenticationFramework/x509CertificateList.oa";
export { certificateListExactMatch } from "../CertificateExtensions/certificateListExactMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION certificateRevocationList */
/**
 * @summary certificateRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateRevocationList ATTRIBUTE ::= {
 *   WITH SYNTAX              CertificateList
 *   EQUALITY MATCHING RULE   certificateListExactMatch
 *   LDAP-SYNTAX              x509CertificateList.&id
 *   LDAP-NAME                {"certificateRevocationList"}
 *   LDAP-DESC                "X.509 certificate revocation list"
 *   ID                       id-at-certificateRevocationList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const certificateRevocationList: ATTRIBUTE = {
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
    "&ldapDesc": "X.509 certificate revocation list" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_certificateRevocationList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certificateRevocationList */

/* eslint-enable */
