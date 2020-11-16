/* eslint-disable */
import { acceptableCertPolicies } from "../AttributeCertificateDefinitions/acceptableCertPolicies.oa";
import { id_asx_acceptableCertPolicies } from "../ExtensionAttributes/id-asx-acceptableCertPolicies.va";
import { id_ce_a_acceptableCertPolicies } from "../ExtensionAttributes/id-ce-a-acceptableCertPolicies.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { acceptableCertPolicies } from "../AttributeCertificateDefinitions/acceptableCertPolicies.oa";
export { id_asx_acceptableCertPolicies } from "../ExtensionAttributes/id-asx-acceptableCertPolicies.va";
export { id_ce_a_acceptableCertPolicies } from "../ExtensionAttributes/id-ce-a-acceptableCertPolicies.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_acceptableCertPolicies */
/**
 * @summary a_acceptableCertPolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-acceptableCertPolicies ATTRIBUTE ::= {
 *   WITH SYNTAX       acceptableCertPolicies.&ExtnType
 *   LDAP-SYNTAX       id-asx-acceptableCertPolicies
 *   LDAP-NAME         {"Acceptable certificate policiesGroup attribute certificate"}
 *   ID                id-ce-a-acceptableCertPolicies}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_acceptableCertPolicies: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": acceptableCertPolicies.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": acceptableCertPolicies.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_acceptableCertPolicies /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_acceptableCertPolicies /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_acceptableCertPolicies */

/* eslint-enable */
