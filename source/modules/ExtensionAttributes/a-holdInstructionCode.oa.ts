/* eslint-disable */
import { holdInstructionCode } from "../CertificateExtensions/holdInstructionCode.oa";
import { id_asx_holdInstructionCode } from "../ExtensionAttributes/id-asx-holdInstructionCode.va";
import { id_ce_a_holdInstructionCode } from "../ExtensionAttributes/id-ce-a-holdInstructionCode.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { holdInstructionCode } from "../CertificateExtensions/holdInstructionCode.oa";
export { id_asx_holdInstructionCode } from "../ExtensionAttributes/id-asx-holdInstructionCode.va";
export { id_ce_a_holdInstructionCode } from "../ExtensionAttributes/id-ce-a-holdInstructionCode.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

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
 * @type {ATTRIBUTE<typeof holdInstructionCode["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof holdInstructionCode["&ExtnType"]>}
 */
export const a_holdInstructionCode: ATTRIBUTE<
    typeof holdInstructionCode["&ExtnType"]
> = {
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
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_holdInstructionCode */

/* eslint-enable */
