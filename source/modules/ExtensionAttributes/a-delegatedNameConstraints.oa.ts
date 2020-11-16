/* eslint-disable */
import { delegatedNameConstraints } from "../AttributeCertificateDefinitions/delegatedNameConstraints.oa";
import { id_asx_delegatedNameConstraints } from "../ExtensionAttributes/id-asx-delegatedNameConstraints.va";
import { id_ce_a_delegatedNameConstraints } from "../ExtensionAttributes/id-ce-a-delegatedNameConstraints.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { delegatedNameConstraints } from "../AttributeCertificateDefinitions/delegatedNameConstraints.oa";
export { id_asx_delegatedNameConstraints } from "../ExtensionAttributes/id-asx-delegatedNameConstraints.va";
export { id_ce_a_delegatedNameConstraints } from "../ExtensionAttributes/id-ce-a-delegatedNameConstraints.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_delegatedNameConstraints */
/**
 * @summary a_delegatedNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-delegatedNameConstraints ATTRIBUTE ::= {
 *   WITH SYNTAX       delegatedNameConstraints.&ExtnType
 *   LDAP-SYNTAX       id-asx-delegatedNameConstraints
 *   LDAP-NAME         {"Delegated name constraints"}
 *   ID                id-ce-a-delegatedNameConstraints}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_delegatedNameConstraints: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": delegatedNameConstraints.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": delegatedNameConstraints.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_delegatedNameConstraints /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_delegatedNameConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_delegatedNameConstraints */

/* eslint-enable */
