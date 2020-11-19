/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import {
    DITContentRuleDescription,
    _decode_DITContentRuleDescription,
    _encode_DITContentRuleDescription,
} from "../SchemaAdministration/DITContentRuleDescription.ta";
import { id_lsx_dITContentRuleDescription } from "../SelectedAttributeTypes/id-lsx-dITContentRuleDescription.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export {
    DITContentRuleDescription,
    _decode_DITContentRuleDescription,
    _encode_DITContentRuleDescription,
} from "../SchemaAdministration/DITContentRuleDescription.ta";
export { id_lsx_dITContentRuleDescription } from "../SelectedAttributeTypes/id-lsx-dITContentRuleDescription.va";

/* START_OF_SYMBOL_DEFINITION dITContentRuleDescription */
/**
 * @summary dITContentRuleDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dITContentRuleDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "DIT Content Rule Description"
 *   DIRECTORY SYNTAX  DITContentRuleDescription
 *   ID                id-lsx-dITContentRuleDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<DITContentRuleDescription>}
 * @implements {SYNTAX_NAME<DITContentRuleDescription>}
 */
export const dITContentRuleDescription: SYNTAX_NAME<DITContentRuleDescription> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_DITContentRuleDescription,
    },
    encoderFor: {
        "&Type": _encode_DITContentRuleDescription,
    },
    "&ldapDesc": "DIT Content Rule Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_dITContentRuleDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dITContentRuleDescription */

/* eslint-enable */
