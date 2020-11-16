/* eslint-disable */
import { policyMappings } from "../CertificateExtensions/policyMappings.oa";
import { id_asx_policyMappings } from "../ExtensionAttributes/id-asx-policyMappings.va";
import { id_ce_a_policyMappings } from "../ExtensionAttributes/id-ce-a-policyMappings.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { policyMappings } from "../CertificateExtensions/policyMappings.oa";
export { id_asx_policyMappings } from "../ExtensionAttributes/id-asx-policyMappings.va";
export { id_ce_a_policyMappings } from "../ExtensionAttributes/id-ce-a-policyMappings.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_policyMappings */
/**
 * @summary a_policyMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-policyMappings ATTRIBUTE ::= {
 *   WITH SYNTAX       policyMappings.&ExtnType
 *   LDAP-SYNTAX       id-asx-policyMappings
 *   LDAP-NAME         {"Policy Mappings"}
 *   ID                id-ce-a-policyMappings }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_policyMappings: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": policyMappings.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": policyMappings.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_policyMappings /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_policyMappings /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_policyMappings */

/* eslint-enable */
