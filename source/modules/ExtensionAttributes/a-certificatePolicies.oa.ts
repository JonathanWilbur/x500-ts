/* eslint-disable */
import { certificatePolicies } from "../CertificateExtensions/certificatePolicies.oa";
import { id_asx_certificatePolicies } from "../ExtensionAttributes/id-asx-certificatePolicies.va";
import { id_ce_a_certificatePolicies } from "../ExtensionAttributes/id-ce-a-certificatePolicies.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { certificatePolicies } from "../CertificateExtensions/certificatePolicies.oa";
export { id_asx_certificatePolicies } from "../ExtensionAttributes/id-asx-certificatePolicies.va";
export { id_ce_a_certificatePolicies } from "../ExtensionAttributes/id-ce-a-certificatePolicies.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_certificatePolicies */
/**
 * @summary a_certificatePolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-certificatePolicies ATTRIBUTE ::= {
 *   WITH SYNTAX       certificatePolicies.&ExtnType
 *   LDAP-SYNTAX       id-asx-certificatePolicies
 *   LDAP-NAME         {"Certificate Policies"}
 *   ID                id-ce-a-certificatePolicies }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_certificatePolicies: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": certificatePolicies.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": certificatePolicies.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_certificatePolicies /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_certificatePolicies /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_certificatePolicies */

/* eslint-enable */
