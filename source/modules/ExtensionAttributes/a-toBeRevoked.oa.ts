/* eslint-disable */
import { toBeRevoked } from "../CertificateExtensions/toBeRevoked.oa";
import { id_asx_toBeRevoked } from "../ExtensionAttributes/id-asx-toBeRevoked.va";
import { id_ce_a_toBeRevoked } from "../ExtensionAttributes/id-ce-a-toBeRevoked.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { toBeRevoked } from "../CertificateExtensions/toBeRevoked.oa";
export { id_asx_toBeRevoked } from "../ExtensionAttributes/id-asx-toBeRevoked.va";
export { id_ce_a_toBeRevoked } from "../ExtensionAttributes/id-ce-a-toBeRevoked.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_toBeRevoked */
/**
 * @summary a_toBeRevoked
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-toBeRevoked ATTRIBUTE ::= {
 *   WITH SYNTAX       toBeRevoked.&ExtnType
 *   LDAP-SYNTAX       id-asx-toBeRevoked
 *   LDAP-NAME         {"To be revoked"}
 *   ID                id-ce-a-toBeRevoked}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_toBeRevoked: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": toBeRevoked.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": toBeRevoked.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_toBeRevoked /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_toBeRevoked /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_toBeRevoked */

/* eslint-enable */
