/* eslint-disable */
import { authorityAttributeIdentifier } from "../AttributeCertificateDefinitions/authorityAttributeIdentifier.oa";
import { id_asx_authorityAttributeIdentifier } from "../ExtensionAttributes/id-asx-authorityAttributeIdentifier.va";
import { id_ce_a_authorityAttributeIdentifier } from "../ExtensionAttributes/id-ce-a-authorityAttributeIdentifier.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { authorityAttributeIdentifier } from "../AttributeCertificateDefinitions/authorityAttributeIdentifier.oa";
export { id_asx_authorityAttributeIdentifier } from "../ExtensionAttributes/id-asx-authorityAttributeIdentifier.va";
export { id_ce_a_authorityAttributeIdentifier } from "../ExtensionAttributes/id-ce-a-authorityAttributeIdentifier.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_authorityAttributeIdentifier */
/**
 * @summary a_authorityAttributeIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-authorityAttributeIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX       authorityAttributeIdentifier.&ExtnType
 *   LDAP-SYNTAX       id-asx-authorityAttributeIdentifier
 *   LDAP-NAME         {"Authority attribute identifier"}
 *   ID                id-ce-a-authorityAttributeIdentifier}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_authorityAttributeIdentifier: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": authorityAttributeIdentifier.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": authorityAttributeIdentifier.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_authorityAttributeIdentifier /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_authorityAttributeIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_authorityAttributeIdentifier */

/* eslint-enable */