/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { id_at_userPassword } from "../AuthenticationFramework/id-at-userPassword.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { octetString } from "../SelectedAttributeTypes/octetString.oa";
import { octetStringMatch } from "../SelectedAttributeTypes/octetStringMatch.oa";
export { id_at_userPassword } from "../AuthenticationFramework/id-at-userPassword.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { octetString } from "../SelectedAttributeTypes/octetString.oa";
export { octetStringMatch } from "../SelectedAttributeTypes/octetStringMatch.oa";

/* START_OF_SYMBOL_DEFINITION userPassword */
/**
 * @summary userPassword
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPassword ATTRIBUTE ::= {
 *   WITH SYNTAX              OCTET STRING(SIZE (0..MAX))
 *   EQUALITY MATCHING RULE   octetStringMatch
 *   LDAP-SYNTAX              octetString.&id
 *   LDAP-NAME                {"userPassword"}
 *   ID                       id-at-userPassword }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const userPassword: ATTRIBUTE = {
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
    "&id": id_at_userPassword /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION userPassword */

/* eslint-enable */