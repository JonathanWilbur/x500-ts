/* eslint-disable */
import { freshestCRL } from "../CertificateExtensions/freshestCRL.oa";
import { id_asx_freshestCRL } from "../ExtensionAttributes/id-asx-freshestCRL.va";
import { id_ce_a_freshestCRL } from "../ExtensionAttributes/id-ce-a-freshestCRL.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { freshestCRL } from "../CertificateExtensions/freshestCRL.oa";
export { id_asx_freshestCRL } from "../ExtensionAttributes/id-asx-freshestCRL.va";
export { id_ce_a_freshestCRL } from "../ExtensionAttributes/id-ce-a-freshestCRL.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_freshestCRL */
/**
 * @summary a_freshestCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-freshestCRL ATTRIBUTE ::= {
 *   WITH SYNTAX       freshestCRL.&ExtnType
 *   LDAP-SYNTAX       id-asx-freshestCRL
 *   LDAP-NAME         {"Freshest CRL"}
 *   ID                id-ce-a-freshestCRL}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_freshestCRL: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": freshestCRL.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": freshestCRL.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_freshestCRL /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_freshestCRL /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_freshestCRL */

/* eslint-enable */
