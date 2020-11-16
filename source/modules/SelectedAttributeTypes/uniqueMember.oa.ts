/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_at_uniqueMember } from "../SelectedAttributeTypes/id-at-uniqueMember.va";
import { nameAndOptionalUID } from "../SelectedAttributeTypes/nameAndOptionalUID.oa";
import {
    _decode_NameAndOptionalUID,
    _encode_NameAndOptionalUID,
} from "../SelectedAttributeTypes/NameAndOptionalUID.ta";
import { uniqueMemberMatch } from "../SelectedAttributeTypes/uniqueMemberMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_uniqueMember } from "../SelectedAttributeTypes/id-at-uniqueMember.va";
export { nameAndOptionalUID } from "../SelectedAttributeTypes/nameAndOptionalUID.oa";
export {
    NameAndOptionalUID,
    _decode_NameAndOptionalUID,
    _encode_NameAndOptionalUID,
} from "../SelectedAttributeTypes/NameAndOptionalUID.ta";
export { uniqueMemberMatch } from "../SelectedAttributeTypes/uniqueMemberMatch.oa";

/* START_OF_SYMBOL_DEFINITION uniqueMember */
/**
 * @summary uniqueMember
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uniqueMember ATTRIBUTE ::= {
 *   WITH SYNTAX              NameAndOptionalUID
 *   EQUALITY MATCHING RULE   uniqueMemberMatch
 *   LDAP-SYNTAX              nameAndOptionalUID.&id
 *   LDAP-NAME                {"uniqueMember"}
 *   ID                       id-at-uniqueMember }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const uniqueMember: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_NameAndOptionalUID,
    },
    encoderFor: {
        "&Type": _encode_NameAndOptionalUID,
    },
    "&equality-match": uniqueMemberMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": nameAndOptionalUID["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_uniqueMember /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uniqueMember */

/* eslint-enable */
