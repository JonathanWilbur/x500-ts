/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
import { id_at_ldapUrl } from "../SelectedAttributeTypes/id-at-ldapUrl.va";
import { url } from "../SelectedAttributeTypes/url.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
export { id_at_ldapUrl } from "../SelectedAttributeTypes/id-at-ldapUrl.va";
export { url } from "../SelectedAttributeTypes/url.oa";

/* START_OF_SYMBOL_DEFINITION ldapUrl */
/**
 * @summary ldapUrl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldapUrl ATTRIBUTE ::= {
 *   SUBTYPE OF               url
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"ldapUrl"}
 *   ID                       id-at-ldapUrl }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const ldapUrl: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": url /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_ldapUrl /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ldapUrl */

/* eslint-enable */