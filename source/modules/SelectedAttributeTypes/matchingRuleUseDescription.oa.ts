/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import {
    _decode_MatchingRuleUseDescription,
    _encode_MatchingRuleUseDescription,
} from "../SchemaAdministration/MatchingRuleUseDescription.ta";
import { id_lsx_matchingRuleUseDescription } from "../SelectedAttributeTypes/id-lsx-matchingRuleUseDescription.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export {
    MatchingRuleUseDescription,
    _decode_MatchingRuleUseDescription,
    _encode_MatchingRuleUseDescription,
} from "../SchemaAdministration/MatchingRuleUseDescription.ta";
export { id_lsx_matchingRuleUseDescription } from "../SelectedAttributeTypes/id-lsx-matchingRuleUseDescription.va";

/* START_OF_SYMBOL_DEFINITION matchingRuleUseDescription */
/**
 * @summary matchingRuleUseDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * matchingRuleUseDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "Matching Rule Use Description"
 *   DIRECTORY SYNTAX  MatchingRuleUseDescription
 *   ID                id-lsx-matchingRuleUseDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const matchingRuleUseDescription: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_MatchingRuleUseDescription,
    },
    encoderFor: {
        "&Type": _encode_MatchingRuleUseDescription,
    },
    "&ldapDesc": "Matching Rule Use Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_matchingRuleUseDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION matchingRuleUseDescription */

/* eslint-enable */
