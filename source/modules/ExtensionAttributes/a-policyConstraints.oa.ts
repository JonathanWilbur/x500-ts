/* eslint-disable */
import { policyConstraints } from "../CertificateExtensions/policyConstraints.oa";
import { id_asx_policyConstraints } from "../ExtensionAttributes/id-asx-policyConstraints.va";
import { id_ce_a_policyConstraints } from "../ExtensionAttributes/id-ce-a-policyConstraints.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { policyConstraints } from "../CertificateExtensions/policyConstraints.oa";
export { id_asx_policyConstraints } from "../ExtensionAttributes/id-asx-policyConstraints.va";
export { id_ce_a_policyConstraints } from "../ExtensionAttributes/id-ce-a-policyConstraints.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_policyConstraints */
/**
 * @summary a_policyConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-policyConstraints ATTRIBUTE ::= {
 *   WITH SYNTAX       policyConstraints.&ExtnType
 *   LDAP-SYNTAX       id-asx-policyConstraints
 *   LDAP-NAME         {"Policy Constraints"}
 *   ID                id-ce-a-policyConstraints }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_policyConstraints: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": policyConstraints.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": policyConstraints.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_policyConstraints /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_policyConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_policyConstraints */

/* eslint-enable */
