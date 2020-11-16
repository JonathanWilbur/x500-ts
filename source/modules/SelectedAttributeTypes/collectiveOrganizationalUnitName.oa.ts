/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
import { id_at_collectiveOrganizationalUnitName } from "../SelectedAttributeTypes/id-at-collectiveOrganizationalUnitName.va";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
export { id_at_collectiveOrganizationalUnitName } from "../SelectedAttributeTypes/id-at-collectiveOrganizationalUnitName.va";
export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa";

/* START_OF_SYMBOL_DEFINITION collectiveOrganizationalUnitName */
/**
 * @summary collectiveOrganizationalUnitName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveOrganizationalUnitName ATTRIBUTE ::= {
 *   SUBTYPE OF               organizationalUnitName
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"c-ou"}
 *   ID                       id-at-collectiveOrganizationalUnitName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectiveOrganizationalUnitName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": organizationalUnitName /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectiveOrganizationalUnitName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION collectiveOrganizationalUnitName */

/* eslint-enable */