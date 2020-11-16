/* eslint-disable */
import { issuerAltName } from "../CertificateExtensions/issuerAltName.oa";
import { id_asx_issuerAltName } from "../ExtensionAttributes/id-asx-issuerAltName.va";
import { id_ce_a_issuerAltName } from "../ExtensionAttributes/id-ce-a-issuerAltName.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { issuerAltName } from "../CertificateExtensions/issuerAltName.oa";
export { id_asx_issuerAltName } from "../ExtensionAttributes/id-asx-issuerAltName.va";
export { id_ce_a_issuerAltName } from "../ExtensionAttributes/id-ce-a-issuerAltName.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_issuerAltName */
/**
 * @summary a_issuerAltName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-issuerAltName ATTRIBUTE ::= {
 *   WITH SYNTAX       issuerAltName.&ExtnType
 *   LDAP-SYNTAX       id-asx-issuerAltName
 *   LDAP-NAME         {"Issuer Alternative Name"}
 *   ID                id-ce-a-issuerAltName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_issuerAltName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": issuerAltName.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": issuerAltName.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_issuerAltName /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_issuerAltName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_issuerAltName */

/* eslint-enable */
