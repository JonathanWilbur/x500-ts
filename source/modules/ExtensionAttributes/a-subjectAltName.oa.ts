/* eslint-disable */
import { subjectAltName } from "../CertificateExtensions/subjectAltName.oa";
import { id_asx_subjectAltName } from "../ExtensionAttributes/id-asx-subjectAltName.va";
import { id_ce_a_subjectAltName } from "../ExtensionAttributes/id-ce-a-subjectAltName.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { subjectAltName } from "../CertificateExtensions/subjectAltName.oa";
export { id_asx_subjectAltName } from "../ExtensionAttributes/id-asx-subjectAltName.va";
export { id_ce_a_subjectAltName } from "../ExtensionAttributes/id-ce-a-subjectAltName.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_subjectAltName */
/**
 * @summary a_subjectAltName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-subjectAltName ATTRIBUTE ::= {
 *   WITH SYNTAX       subjectAltName.&ExtnType
 *   LDAP-SYNTAX       id-asx-subjectAltName
 *   LDAP-NAME         {"Subject Alternative Name"}
 *   ID                id-ce-a-subjectAltName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_subjectAltName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": subjectAltName.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": subjectAltName.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_subjectAltName /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_subjectAltName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_subjectAltName */

/* eslint-enable */
