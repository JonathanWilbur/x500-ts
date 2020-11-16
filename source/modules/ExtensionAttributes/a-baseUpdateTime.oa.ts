/* eslint-disable */
import { baseUpdateTime } from "../CertificateExtensions/baseUpdateTime.oa";
import { id_asx_baseUpdateTime } from "../ExtensionAttributes/id-asx-baseUpdateTime.va";
import { id_ce_a_baseUpdateTime } from "../ExtensionAttributes/id-ce-a-baseUpdateTime.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { baseUpdateTime } from "../CertificateExtensions/baseUpdateTime.oa";
export { id_asx_baseUpdateTime } from "../ExtensionAttributes/id-asx-baseUpdateTime.va";
export { id_ce_a_baseUpdateTime } from "../ExtensionAttributes/id-ce-a-baseUpdateTime.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_baseUpdateTime */
/**
 * @summary a_baseUpdateTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-baseUpdateTime ATTRIBUTE ::= {
 *   WITH SYNTAX       baseUpdateTime.&ExtnType
 *   LDAP-SYNTAX       id-asx-baseUpdateTime
 *   LDAP-NAME         {"Base update time"}
 *   ID                id-ce-a-baseUpdateTime}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_baseUpdateTime: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": baseUpdateTime.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": baseUpdateTime.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_baseUpdateTime /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_baseUpdateTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_baseUpdateTime */

/* eslint-enable */
