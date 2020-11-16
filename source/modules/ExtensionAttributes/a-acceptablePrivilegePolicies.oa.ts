/* eslint-disable */
import { acceptablePrivilegePolicies } from "../AttributeCertificateDefinitions/acceptablePrivilegePolicies.oa";
import { id_asx_acceptablePrivilegePolicies } from "../ExtensionAttributes/id-asx-acceptablePrivilegePolicies.va";
import { id_ce_a_acceptablePrivilegePolicies } from "../ExtensionAttributes/id-ce-a-acceptablePrivilegePolicies.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { acceptablePrivilegePolicies } from "../AttributeCertificateDefinitions/acceptablePrivilegePolicies.oa";
export { id_asx_acceptablePrivilegePolicies } from "../ExtensionAttributes/id-asx-acceptablePrivilegePolicies.va";
export { id_ce_a_acceptablePrivilegePolicies } from "../ExtensionAttributes/id-ce-a-acceptablePrivilegePolicies.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_acceptablePrivilegePolicies */
/**
 * @summary a_acceptablePrivilegePolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-acceptablePrivilegePolicies ATTRIBUTE ::= {
 *   WITH SYNTAX       acceptablePrivilegePolicies.&ExtnType
 *   LDAP-SYNTAX       id-asx-acceptablePrivilegePolicies
 *   LDAP-NAME         {"Acceptable Privilege Policies"}
 *   ID                id-ce-a-acceptablePrivilegePolicies}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_acceptablePrivilegePolicies: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": acceptablePrivilegePolicies.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": acceptablePrivilegePolicies.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_acceptablePrivilegePolicies /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_acceptablePrivilegePolicies /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_acceptablePrivilegePolicies */

/* eslint-enable */
