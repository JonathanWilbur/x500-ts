/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
import { distinguishedNameMatch } from "../InformationFramework/distinguishedNameMatch.oa";
import { id_at_aliasedEntryName } from "../InformationFramework/id-at-aliasedEntryName.va";
import { dn } from "../SelectedAttributeTypes/dn.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export { distinguishedNameMatch } from "../InformationFramework/distinguishedNameMatch.oa";
export { id_at_aliasedEntryName } from "../InformationFramework/id-at-aliasedEntryName.va";
export { dn } from "../SelectedAttributeTypes/dn.oa";

/* START_OF_SYMBOL_DEFINITION aliasedEntryName */
/**
 * @summary aliasedEntryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aliasedEntryName ATTRIBUTE ::= {
 *   WITH SYNTAX             DistinguishedName
 *   EQUALITY MATCHING RULE  distinguishedNameMatch
 *   SINGLE VALUE            TRUE
 *   LDAP-SYNTAX             dn.&id
 *   LDAP-NAME               {"aliasedObjectName"}
 *   ID                      id-at-aliasedEntryName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const aliasedEntryName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_aliasedEntryName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION aliasedEntryName */

/* eslint-enable */
