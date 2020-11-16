/* eslint-disable */
import { authorizationValidation } from "../CertificateExtensions/authorizationValidation.oa";
import { id_asx_authorizationValidation } from "../ExtensionAttributes/id-asx-authorizationValidation.va";
import { id_ce_a_authorizationValidation } from "../ExtensionAttributes/id-ce-a-authorizationValidation.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { authorizationValidation } from "../CertificateExtensions/authorizationValidation.oa";
export { id_asx_authorizationValidation } from "../ExtensionAttributes/id-asx-authorizationValidation.va";
export { id_ce_a_authorizationValidation } from "../ExtensionAttributes/id-ce-a-authorizationValidation.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_authorizationValidation */
/**
 * @summary a_authorizationValidation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-authorizationValidation ATTRIBUTE ::= {
 *   WITH SYNTAX       authorizationValidation.&ExtnType
 *   LDAP-SYNTAX       id-asx-authorizationValidation
 *   LDAP-NAME         {"Authorization Validation"}
 *   ID                id-ce-a-authorizationValidation }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_authorizationValidation: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": authorizationValidation.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": authorizationValidation.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_authorizationValidation /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_authorizationValidation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_authorizationValidation */

/* eslint-enable */
