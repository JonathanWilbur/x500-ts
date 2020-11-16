/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    _decode_DITStructureRuleDescription,
    _encode_DITStructureRuleDescription,
} from "../SchemaAdministration/DITStructureRuleDescription.ta";
import { id_soa_dITStructureRule } from "../SchemaAdministration/id-soa-dITStructureRule.va";
import { dITStructureRuleDescription } from "../SelectedAttributeTypes/dITStructureRuleDescription.oa";
import { integerFirstComponentMatch } from "../SelectedAttributeTypes/integerFirstComponentMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
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
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const dITStructureRules: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DITStructureRuleDescription,
    },
    encoderFor: {
        "&Type": _encode_DITStructureRuleDescription,
    },
    "&equality-match": integerFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
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
