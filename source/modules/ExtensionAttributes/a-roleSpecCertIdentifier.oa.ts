/* eslint-disable */
import { roleSpecCertIdentifier } from "../AttributeCertificateDefinitions/roleSpecCertIdentifier.oa";
import { id_asx_roleSpecCertIdentifier } from "../ExtensionAttributes/id-asx-roleSpecCertIdentifier.va";
import { id_ce_a_roleSpecCertIdentifier } from "../ExtensionAttributes/id-ce-a-roleSpecCertIdentifier.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { roleSpecCertIdentifier } from "../AttributeCertificateDefinitions/roleSpecCertIdentifier.oa";
export { id_asx_roleSpecCertIdentifier } from "../ExtensionAttributes/id-asx-roleSpecCertIdentifier.va";
export { id_ce_a_roleSpecCertIdentifier } from "../ExtensionAttributes/id-ce-a-roleSpecCertIdentifier.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_roleSpecCertIdentifier */
/**
 * @summary a_roleSpecCertIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-roleSpecCertIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX       roleSpecCertIdentifier.&ExtnType
 *   LDAP-SYNTAX       id-asx-roleSpecCertIdentifier
 *   LDAP-NAME         {"Role specification certificate identifier"}
 *   ID                id-ce-a-roleSpecCertIdentifier}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_roleSpecCertIdentifier: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": roleSpecCertIdentifier.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": roleSpecCertIdentifier.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_roleSpecCertIdentifier /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_roleSpecCertIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_roleSpecCertIdentifier */

/* eslint-enable */
