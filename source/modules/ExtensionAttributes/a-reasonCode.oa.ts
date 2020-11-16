/* eslint-disable */
import { reasonCode } from "../CertificateExtensions/reasonCode.oa";
import { id_asx_reasonCode } from "../ExtensionAttributes/id-asx-reasonCode.va";
import { id_ce_a_reasonCode } from "../ExtensionAttributes/id-ce-a-reasonCode.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { reasonCode } from "../CertificateExtensions/reasonCode.oa";
export { id_asx_reasonCode } from "../ExtensionAttributes/id-asx-reasonCode.va";
export { id_ce_a_reasonCode } from "../ExtensionAttributes/id-ce-a-reasonCode.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_reasonCode */
/**
 * @summary a_reasonCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-reasonCode ATTRIBUTE ::= {
 *   WITH SYNTAX       reasonCode.&ExtnType
 *   LDAP-SYNTAX       id-asx-reasonCode
 *   LDAP-NAME         {"Reason code"}
 *   ID                id-ce-a-reasonCode}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_reasonCode: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": reasonCode.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": reasonCode.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_reasonCode /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_reasonCode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_reasonCode */

/* eslint-enable */
