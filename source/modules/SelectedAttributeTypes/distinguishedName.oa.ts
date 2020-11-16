/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
import { distinguishedNameMatch } from "../InformationFramework/distinguishedNameMatch.oa";
import { dn } from "../SelectedAttributeTypes/dn.oa";
import { id_at_distinguishedName } from "../SelectedAttributeTypes/id-at-distinguishedName.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export { distinguishedNameMatch } from "../InformationFramework/distinguishedNameMatch.oa";
export { dn } from "../SelectedAttributeTypes/dn.oa";
export { id_at_distinguishedName } from "../SelectedAttributeTypes/id-at-distinguishedName.va";

/* START_OF_SYMBOL_DEFINITION distinguishedName */
/**
 * @summary distinguishedName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * distinguishedName ATTRIBUTE ::= {
 *   WITH SYNTAX              DistinguishedName
 *   EQUALITY MATCHING RULE   distinguishedNameMatch
 *   LDAP-SYNTAX              dn.&id
 *   LDAP-NAME                {"distinguishedName"}
 *   ID                       id-at-distinguishedName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const distinguishedName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_distinguishedName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION distinguishedName */

/* eslint-enable */
