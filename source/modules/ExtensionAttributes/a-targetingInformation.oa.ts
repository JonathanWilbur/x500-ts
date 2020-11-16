/* eslint-disable */
import { targetingInformation } from "../AttributeCertificateDefinitions/targetingInformation.oa";
import { id_asx_targetingInformation } from "../ExtensionAttributes/id-asx-targetingInformation.va";
import { id_ce_a_targetingInformation } from "../ExtensionAttributes/id-ce-a-targetingInformation.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { targetingInformation } from "../AttributeCertificateDefinitions/targetingInformation.oa";
export { id_asx_targetingInformation } from "../ExtensionAttributes/id-asx-targetingInformation.va";
export { id_ce_a_targetingInformation } from "../ExtensionAttributes/id-ce-a-targetingInformation.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_targetingInformation */
/**
 * @summary a_targetingInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-targetingInformation ATTRIBUTE ::= {
 *   WITH SYNTAX       targetingInformation.&ExtnType
 *   LDAP-SYNTAX       id-asx-targetingInformation
 *   LDAP-NAME         {"Targeting information"}
 *   ID                id-ce-a-targetingInformation}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_targetingInformation: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": targetingInformation.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": targetingInformation.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_targetingInformation /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_targetingInformation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_targetingInformation */

/* eslint-enable */
