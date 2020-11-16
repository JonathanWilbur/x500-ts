/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { caseIgnoreListMatch } from "../SelectedAttributeTypes/caseIgnoreListMatch.oa";
import { caseIgnoreListSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreListSubstringsMatch.oa";
import { id_at_postalAddress } from "../SelectedAttributeTypes/id-at-postalAddress.va";
import { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa";
import {
    _decode_PostalAddress,
    _encode_PostalAddress,
} from "../SelectedAttributeTypes/PostalAddress.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { caseIgnoreListMatch } from "../SelectedAttributeTypes/caseIgnoreListMatch.oa";
export { caseIgnoreListSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreListSubstringsMatch.oa";
export { id_at_postalAddress } from "../SelectedAttributeTypes/id-at-postalAddress.va";
export { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa";
export {
    PostalAddress,
    _decode_PostalAddress,
    _encode_PostalAddress,
} from "../SelectedAttributeTypes/PostalAddress.ta";

/* START_OF_SYMBOL_DEFINITION postalAddress */
/**
 * @summary postalAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * postalAddress ATTRIBUTE ::= {
 *   WITH SYNTAX              PostalAddress
 *   EQUALITY MATCHING RULE   caseIgnoreListMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreListSubstringsMatch
 *   LDAP-SYNTAX              postalAddr.&id
 *   LDAP-NAME                {"postalAddress"}
 *   ID                       id-at-postalAddress }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const postalAddress: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PostalAddress,
    },
    encoderFor: {
        "&Type": _encode_PostalAddress,
    },
    "&equality-match": caseIgnoreListMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreListSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": postalAddr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_postalAddress /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION postalAddress */

/* eslint-enable */
