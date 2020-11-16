/* eslint-disable */
import { basicConstraints } from "../CertificateExtensions/basicConstraints.oa";
import { id_asx_basicConstraints } from "../ExtensionAttributes/id-asx-basicConstraints.va";
import { id_ce_a_basicConstraints } from "../ExtensionAttributes/id-ce-a-basicConstraints.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { basicConstraints } from "../CertificateExtensions/basicConstraints.oa";
export { id_asx_basicConstraints } from "../ExtensionAttributes/id-asx-basicConstraints.va";
export { id_ce_a_basicConstraints } from "../ExtensionAttributes/id-ce-a-basicConstraints.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_basicConstraints */
/**
 * @summary a_basicConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-basicConstraints ATTRIBUTE ::= {
 *   WITH SYNTAX       basicConstraints.&ExtnType
 *   LDAP-SYNTAX       id-asx-basicConstraints
 *   LDAP-NAME         {"Basic Constraints"}
 *   ID                id-ce-a-basicConstraints }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_basicConstraints: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": basicConstraints.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": basicConstraints.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_basicConstraints /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_basicConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_basicConstraints */

/* eslint-enable */
