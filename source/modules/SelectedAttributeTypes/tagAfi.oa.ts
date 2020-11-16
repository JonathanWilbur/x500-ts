/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_at_tagAfi } from "../SelectedAttributeTypes/id-at-tagAfi.va";
import { octetString } from "../SelectedAttributeTypes/octetString.oa";
import { octetStringMatch } from "../SelectedAttributeTypes/octetStringMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_tagAfi } from "../SelectedAttributeTypes/id-at-tagAfi.va";
export { octetString } from "../SelectedAttributeTypes/octetString.oa";
export { octetStringMatch } from "../SelectedAttributeTypes/octetStringMatch.oa";

/* START_OF_SYMBOL_DEFINITION tagAfi */
/**
 * @summary tagAfi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tagAfi ATTRIBUTE ::= {
 *   WITH SYNTAX              OCTET STRING
 *   EQUALITY MATCHING RULE   octetStringMatch
 *   LDAP-SYNTAX              octetString.&id
 *   LDAP-NAME                {"tagAfi"}
 *   ID                       id-at-tagAfi }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const tagAfi: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&equality-match": octetStringMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": octetString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_tagAfi /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION tagAfi */

/* eslint-enable */
