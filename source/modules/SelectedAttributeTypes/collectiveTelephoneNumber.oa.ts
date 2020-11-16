/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_at_collectiveTelephoneNumber } from "../SelectedAttributeTypes/id-at-collectiveTelephoneNumber.va";
import { printableString } from "../SelectedAttributeTypes/printableString.oa";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_collectiveTelephoneNumber } from "../SelectedAttributeTypes/id-at-collectiveTelephoneNumber.va";
export { printableString } from "../SelectedAttributeTypes/printableString.oa";
export { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa";

/* START_OF_SYMBOL_DEFINITION collectiveTelephoneNumber */
/**
 * @summary collectiveTelephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveTelephoneNumber ATTRIBUTE ::= {
 *   SUBTYPE OF               telephoneNumber
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              printableString.&id
 *   LDAP-NAME                {"c-TelephoneNumber"}
 *   ID                       id-at-collectiveTelephoneNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectiveTelephoneNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": telephoneNumber /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectiveTelephoneNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION collectiveTelephoneNumber */

/* eslint-enable */
