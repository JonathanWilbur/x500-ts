/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { id_mr_uniqueMemberMatch } from "../SelectedAttributeTypes/id-mr-uniqueMemberMatch.va";
import { nameAndOptionalUID } from "../SelectedAttributeTypes/nameAndOptionalUID.oa";
import {
    _decode_NameAndOptionalUID,
    _encode_NameAndOptionalUID,
} from "../SelectedAttributeTypes/NameAndOptionalUID.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_mr_uniqueMemberMatch } from "../SelectedAttributeTypes/id-mr-uniqueMemberMatch.va";
export { nameAndOptionalUID } from "../SelectedAttributeTypes/nameAndOptionalUID.oa";
export {
    NameAndOptionalUID,
    _decode_NameAndOptionalUID,
    _encode_NameAndOptionalUID,
} from "../SelectedAttributeTypes/NameAndOptionalUID.ta";

/* START_OF_SYMBOL_DEFINITION uniqueMemberMatch */
/**
 * @summary uniqueMemberMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uniqueMemberMatch MATCHING-RULE ::= {
 *   SYNTAX       NameAndOptionalUID
 *   LDAP-SYNTAX  nameAndOptionalUID.&id
 *   LDAP-NAME    {"uniqueMemberMatch"}
 *   ID           id-mr-uniqueMemberMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const uniqueMemberMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_NameAndOptionalUID,
    },
    encoderFor: {
        "&AssertionType": _encode_NameAndOptionalUID,
    },
    "&ldapSyntax": nameAndOptionalUID["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_uniqueMemberMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uniqueMemberMatch */

/* eslint-enable */
