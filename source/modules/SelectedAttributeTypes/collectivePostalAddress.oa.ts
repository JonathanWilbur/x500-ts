/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_at_collectivePostalAddress } from "../SelectedAttributeTypes/id-at-collectivePostalAddress.va";
import { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa";
import { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_collectivePostalAddress } from "../SelectedAttributeTypes/id-at-collectivePostalAddress.va";
export { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa";
export { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa";

/* START_OF_SYMBOL_DEFINITION collectivePostalAddress */
/**
 * @summary collectivePostalAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectivePostalAddress ATTRIBUTE ::= {
 *   SUBTYPE OF               postalAddress
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              postalAddr.&id
 *   LDAP-NAME                {"c-PostalAddress"}
 *   ID                       id-at-collectivePostalAddress }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectivePostalAddress: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": postalAddress /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": postalAddr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectivePostalAddress /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION collectivePostalAddress */

/* eslint-enable */
