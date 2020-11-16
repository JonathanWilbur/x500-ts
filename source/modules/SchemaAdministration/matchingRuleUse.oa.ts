/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_soa_matchingRuleUse } from "../SchemaAdministration/id-soa-matchingRuleUse.va";
import {
    _decode_MatchingRuleUseDescription,
    _encode_MatchingRuleUseDescription,
} from "../SchemaAdministration/MatchingRuleUseDescription.ta";
import { matchingRuleUseDescription } from "../SelectedAttributeTypes/matchingRuleUseDescription.oa";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_soa_matchingRuleUse } from "../SchemaAdministration/id-soa-matchingRuleUse.va";
export {
    MatchingRuleUseDescription,
    _decode_MatchingRuleUseDescription,
    _encode_MatchingRuleUseDescription,
} from "../SchemaAdministration/MatchingRuleUseDescription.ta";
export { matchingRuleUseDescription } from "../SelectedAttributeTypes/matchingRuleUseDescription.oa";
export { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";

/* START_OF_SYMBOL_DEFINITION matchingRuleUse */
/**
 * @summary matchingRuleUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * matchingRuleUse ATTRIBUTE ::= {
 *   WITH SYNTAX              MatchingRuleUseDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              matchingRuleUseDescription.&id
 *   LDAP-NAME                {"matchingRuleUse"}
 *   ID                       id-soa-matchingRuleUse }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const matchingRuleUse: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MatchingRuleUseDescription,
    },
    encoderFor: {
        "&Type": _encode_MatchingRuleUseDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": matchingRuleUseDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soa_matchingRuleUse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION matchingRuleUse */

/* eslint-enable */
