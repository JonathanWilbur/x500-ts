/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_soa_matchingRules } from "../SchemaAdministration/id-soa-matchingRules.va";
import {
    _decode_MatchingRuleDescription,
    _encode_MatchingRuleDescription,
} from "../SchemaAdministration/MatchingRuleDescription.ta";
import { matchingRuleDescription } from "../SelectedAttributeTypes/matchingRuleDescription.oa";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_soa_matchingRules } from "../SchemaAdministration/id-soa-matchingRules.va";
export {
    MatchingRuleDescription,
    _decode_MatchingRuleDescription,
    _encode_MatchingRuleDescription,
} from "../SchemaAdministration/MatchingRuleDescription.ta";
export { matchingRuleDescription } from "../SelectedAttributeTypes/matchingRuleDescription.oa";
export { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";

/* START_OF_SYMBOL_DEFINITION matchingRules */
/**
 * @summary matchingRules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * matchingRules ATTRIBUTE ::= {
 *   WITH SYNTAX              MatchingRuleDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              matchingRuleDescription.&id
 *   LDAP-NAME                {"matchingRules"}
 *   ID                       id-soa-matchingRules }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const matchingRules: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MatchingRuleDescription,
    },
    encoderFor: {
        "&Type": _encode_MatchingRuleDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": matchingRuleDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soa_matchingRules /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION matchingRules */

/* eslint-enable */
