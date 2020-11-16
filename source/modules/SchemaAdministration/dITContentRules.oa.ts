/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    _decode_DITContentRuleDescription,
    _encode_DITContentRuleDescription,
} from "../SchemaAdministration/DITContentRuleDescription.ta";
import { id_soa_dITContentRules } from "../SchemaAdministration/id-soa-dITContentRules.va";
import { dITContentRuleDescription } from "../SelectedAttributeTypes/dITContentRuleDescription.oa";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    DITContentRuleDescription,
    _decode_DITContentRuleDescription,
    _encode_DITContentRuleDescription,
} from "../SchemaAdministration/DITContentRuleDescription.ta";
export { id_soa_dITContentRules } from "../SchemaAdministration/id-soa-dITContentRules.va";
export { dITContentRuleDescription } from "../SelectedAttributeTypes/dITContentRuleDescription.oa";
export { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";

/* START_OF_SYMBOL_DEFINITION dITContentRules */
/**
 * @summary dITContentRules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dITContentRules ATTRIBUTE ::= {
 *   WITH SYNTAX              DITContentRuleDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              dITContentRuleDescription.&id
 *   LDAP-NAME                {"dITContentRules"}
 *   ID                       id-soa-dITContentRules }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const dITContentRules: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DITContentRuleDescription,
    },
    encoderFor: {
        "&Type": _encode_DITContentRuleDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dITContentRuleDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soa_dITContentRules /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dITContentRules */

/* eslint-enable */
