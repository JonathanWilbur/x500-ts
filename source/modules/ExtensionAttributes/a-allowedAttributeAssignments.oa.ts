/* eslint-disable */
import { allowedAttributeAssignments } from "../AttributeCertificateDefinitions/allowedAttributeAssignments.oa";
import { id_asx_allowedAttributeAssignments } from "../ExtensionAttributes/id-asx-allowedAttributeAssignments.va";
import { id_ce_a_allowedAttributeAssignments } from "../ExtensionAttributes/id-ce-a-allowedAttributeAssignments.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { allowedAttributeAssignments } from "../AttributeCertificateDefinitions/allowedAttributeAssignments.oa";
export { id_asx_allowedAttributeAssignments } from "../ExtensionAttributes/id-asx-allowedAttributeAssignments.va";
export { id_ce_a_allowedAttributeAssignments } from "../ExtensionAttributes/id-ce-a-allowedAttributeAssignments.va";
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

/* START_OF_SYMBOL_DEFINITION a_allowedAttributeAssignments */
/**
 * @summary a_allowedAttributeAssignments
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-allowedAttributeAssignments ATTRIBUTE ::= {
 *   WITH SYNTAX       allowedAttributeAssignments.&ExtnType
 *   LDAP-SYNTAX       id-asx-allowedAttributeAssignments
 *   LDAP-NAME         {"Allowed attribute assignments"}
 *   ID                id-ce-a-allowedAttributeAssignments}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof allowedAttributeAssignments["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof allowedAttributeAssignments["&ExtnType"]>}
 */
export const a_allowedAttributeAssignments: ATTRIBUTE<
    typeof allowedAttributeAssignments["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": allowedAttributeAssignments.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": allowedAttributeAssignments.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_allowedAttributeAssignments /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_allowedAttributeAssignments /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_allowedAttributeAssignments */

/* eslint-enable */
