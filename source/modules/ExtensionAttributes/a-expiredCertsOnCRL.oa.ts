/* eslint-disable */
import { expiredCertsOnCRL } from "../CertificateExtensions/expiredCertsOnCRL.oa";
import { id_asx_expiredCertsOnCRL } from "../ExtensionAttributes/id-asx-expiredCertsOnCRL.va";
import { id_ce_a_expiredCertsOnCRL } from "../ExtensionAttributes/id-ce-a-expiredCertsOnCRL.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { expiredCertsOnCRL } from "../CertificateExtensions/expiredCertsOnCRL.oa";
export { id_asx_expiredCertsOnCRL } from "../ExtensionAttributes/id-asx-expiredCertsOnCRL.va";
export { id_ce_a_expiredCertsOnCRL } from "../ExtensionAttributes/id-ce-a-expiredCertsOnCRL.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_expiredCertsOnCRL */
/**
 * @summary a_expiredCertsOnCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-expiredCertsOnCRL ATTRIBUTE ::= {
 *   WITH SYNTAX       expiredCertsOnCRL.&ExtnType
 *   LDAP-SYNTAX       id-asx-expiredCertsOnCRL
 *   LDAP-NAME         {"Expired certificates on CRL"}
 *   ID                id-ce-a-expiredCertsOnCRL}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_expiredCertsOnCRL: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": expiredCertsOnCRL.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": expiredCertsOnCRL.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_expiredCertsOnCRL /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_expiredCertsOnCRL /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_expiredCertsOnCRL */

/* eslint-enable */
