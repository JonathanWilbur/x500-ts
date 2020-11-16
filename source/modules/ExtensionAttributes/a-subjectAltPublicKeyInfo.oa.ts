/* eslint-disable */
import { subjectAltPublicKeyInfo } from "../CertificateExtensions/subjectAltPublicKeyInfo.oa";
import { id_asx_subjectAltPublicKeyInfo } from "../ExtensionAttributes/id-asx-subjectAltPublicKeyInfo.va";
import { id_ce_a_subjectAltPublicKeyInfo } from "../ExtensionAttributes/id-ce-a-subjectAltPublicKeyInfo.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { subjectAltPublicKeyInfo } from "../CertificateExtensions/subjectAltPublicKeyInfo.oa";
export { id_asx_subjectAltPublicKeyInfo } from "../ExtensionAttributes/id-asx-subjectAltPublicKeyInfo.va";
export { id_ce_a_subjectAltPublicKeyInfo } from "../ExtensionAttributes/id-ce-a-subjectAltPublicKeyInfo.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_subjectAltPublicKeyInfo */
/**
 * @summary a_subjectAltPublicKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-subjectAltPublicKeyInfo ATTRIBUTE ::= {
 *   WITH SYNTAX       subjectAltPublicKeyInfo.&ExtnType
 *   LDAP-SYNTAX       id-asx-subjectAltPublicKeyInfo
 *   LDAP-NAME         {"Subject alternative public key info"}
 *   ID                id-ce-a-subjectAltPublicKeyInfo}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_subjectAltPublicKeyInfo: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": subjectAltPublicKeyInfo.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": subjectAltPublicKeyInfo.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_subjectAltPublicKeyInfo /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_subjectAltPublicKeyInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_subjectAltPublicKeyInfo */

/* eslint-enable */
