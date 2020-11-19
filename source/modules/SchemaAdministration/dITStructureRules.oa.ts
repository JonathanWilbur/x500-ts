/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
import {
    DITStructureRuleDescription,
    _decode_DITStructureRuleDescription,
    _encode_DITStructureRuleDescription,
} from "../SchemaAdministration/DITStructureRuleDescription.ta";
import { id_soa_dITStructureRule } from "../SchemaAdministration/id-soa-dITStructureRule.va";
import { dITStructureRuleDescription } from "../SelectedAttributeTypes/dITStructureRuleDescription.oa";
import { integerFirstComponentMatch } from "../SelectedAttributeTypes/integerFirstComponentMatch.oa";
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
export {
    DITStructureRuleDescription,
    _decode_DITStructureRuleDescription,
    _encode_DITStructureRuleDescription,
} from "../SchemaAdministration/DITStructureRuleDescription.ta";
export { id_soa_dITStructureRule } from "../SchemaAdministration/id-soa-dITStructureRule.va";
export { dITStructureRuleDescription } from "../SelectedAttributeTypes/dITStructureRuleDescription.oa";
export { integerFirstComponentMatch } from "../SelectedAttributeTypes/integerFirstComponentMatch.oa";

/* START_OF_SYMBOL_DEFINITION dITStructureRules */
/**
 * @summary dITStructureRules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dITStructureRules ATTRIBUTE ::= {
 *   WITH SYNTAX              DITStructureRuleDescription
 *   EQUALITY MATCHING RULE   integerFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              dITStructureRuleDescription.&id
 *   LDAP-NAME                {"dITStructureRules"}
 *   ID                       id-soa-dITStructureRule }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<DITStructureRuleDescription>}
 * @implements {ATTRIBUTE<DITStructureRuleDescription>}
 */
export const dITStructureRules: ATTRIBUTE<DITStructureRuleDescription> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DITStructureRuleDescription,
    },
    encoderFor: {
        "&Type": _encode_DITStructureRuleDescription,
    },
    "&equality-match": integerFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax":
        dITStructureRuleDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soa_dITStructureRule /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dITStructureRules */

/* eslint-enable */
