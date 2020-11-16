/* eslint-disable */
import { userNotice } from "../AttributeCertificateDefinitions/userNotice.oa";
import { id_asx_userNotice } from "../ExtensionAttributes/id-asx-userNotice.va";
import { id_ce_a_userNotice } from "../ExtensionAttributes/id-ce-a-userNotice.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { userNotice } from "../AttributeCertificateDefinitions/userNotice.oa";
export { id_asx_userNotice } from "../ExtensionAttributes/id-asx-userNotice.va";
export { id_ce_a_userNotice } from "../ExtensionAttributes/id-ce-a-userNotice.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_userNotice */
/**
 * @summary a_userNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-userNotice ATTRIBUTE ::= {
 *   WITH SYNTAX       userNotice.&ExtnType
 *   LDAP-SYNTAX       id-asx-userNotice
 *   LDAP-NAME         {"User notice"}
 *   ID                id-ce-a-userNotice}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_userNotice: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": userNotice.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": userNotice.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_userNotice /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_userNotice /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_userNotice */

/* eslint-enable */
