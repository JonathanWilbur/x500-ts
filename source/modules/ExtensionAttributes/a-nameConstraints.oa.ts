/* eslint-disable */
import { policyConstraints } from "../CertificateExtensions/policyConstraints.oa";
import { id_asx_nameConstraints } from "../ExtensionAttributes/id-asx-nameConstraints.va";
import { id_ce_a_nameConstraints } from "../ExtensionAttributes/id-ce-a-nameConstraints.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { policyConstraints } from "../CertificateExtensions/policyConstraints.oa";
export { id_asx_nameConstraints } from "../ExtensionAttributes/id-asx-nameConstraints.va";
export { id_ce_a_nameConstraints } from "../ExtensionAttributes/id-ce-a-nameConstraints.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_nameConstraints */
/**
 * @summary a_nameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-nameConstraints ATTRIBUTE ::= {
 *   WITH SYNTAX       policyConstraints.&ExtnType
 *   LDAP-SYNTAX       id-asx-nameConstraints
 *   LDAP-NAME         {"Name Constraints"}
 *   ID                id-ce-a-nameConstraints }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_nameConstraints: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": policyConstraints.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": policyConstraints.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_nameConstraints /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_nameConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_nameConstraints */

/* eslint-enable */
