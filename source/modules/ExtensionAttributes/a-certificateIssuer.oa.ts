/* eslint-disable */
import { certificateIssuer } from "../CertificateExtensions/certificateIssuer.oa";
import { id_asx_certificateIssuer } from "../ExtensionAttributes/id-asx-certificateIssuer.va";
import { id_ce_a_certificateIssuer } from "../ExtensionAttributes/id-ce-a-certificateIssuer.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { certificateIssuer } from "../CertificateExtensions/certificateIssuer.oa";
export { id_asx_certificateIssuer } from "../ExtensionAttributes/id-asx-certificateIssuer.va";
export { id_ce_a_certificateIssuer } from "../ExtensionAttributes/id-ce-a-certificateIssuer.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_certificateIssuer */
/**
 * @summary a_certificateIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-certificateIssuer ATTRIBUTE ::= {
 *   WITH SYNTAX       certificateIssuer.&ExtnType
 *   LDAP-SYNTAX       id-asx-certificateIssuer
 *   LDAP-NAME         {"Certificate issuer"}
 *   ID                id-ce-a-certificateIssuer}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_certificateIssuer: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": certificateIssuer.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": certificateIssuer.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_certificateIssuer /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_certificateIssuer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_certificateIssuer */

/* eslint-enable */
