/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import {
    _decode_MatchingRuleDescription,
    _encode_MatchingRuleDescription,
} from "../SchemaAdministration/MatchingRuleDescription.ta";
import { id_lsx_matchingRuleDescription } from "../SelectedAttributeTypes/id-lsx-matchingRuleDescription.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export {
    MatchingRuleDescription,
    _decode_MatchingRuleDescription,
    _encode_MatchingRuleDescription,
} from "../SchemaAdministration/MatchingRuleDescription.ta";
export { id_lsx_matchingRuleDescription } from "../SelectedAttributeTypes/id-lsx-matchingRuleDescription.va";

/* START_OF_SYMBOL_DEFINITION matchingRuleDescription */
/**
 * @summary matchingRuleDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * matchingRuleDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "Matching Rule Description"
 *   DIRECTORY SYNTAX  MatchingRuleDescription
 *   ID                id-lsx-matchingRuleDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const matchingRuleDescription: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_MatchingRuleDescription,
    },
    encoderFor: {
        "&Type": _encode_MatchingRuleDescription,
    },
    "&ldapDesc": "Matching Rule Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_matchingRuleDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION matchingRuleDescription */

/* eslint-enable */
