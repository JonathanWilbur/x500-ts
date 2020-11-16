/* eslint-disable */
import { holdInstructionCode } from "../CertificateExtensions/holdInstructionCode.oa";
import { id_asx_holdInstructionCode } from "../ExtensionAttributes/id-asx-holdInstructionCode.va";
import { id_ce_a_holdInstructionCode } from "../ExtensionAttributes/id-ce-a-holdInstructionCode.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { holdInstructionCode } from "../CertificateExtensions/holdInstructionCode.oa";
export { id_asx_holdInstructionCode } from "../ExtensionAttributes/id-asx-holdInstructionCode.va";
export { id_ce_a_holdInstructionCode } from "../ExtensionAttributes/id-ce-a-holdInstructionCode.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_holdInstructionCode */
/**
 * @summary a_holdInstructionCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-holdInstructionCode ATTRIBUTE ::= {
 *   WITH SYNTAX       holdInstructionCode.&ExtnType
 *   LDAP-SYNTAX       id-asx-holdInstructionCode
 *   LDAP-NAME         {"Hold instruction code"}
 *   ID                id-ce-a-holdInstructionCode}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_holdInstructionCode: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": holdInstructionCode.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": holdInstructionCode.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_holdInstructionCode /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_holdInstructionCode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_holdInstructionCode */

/* eslint-enable */
