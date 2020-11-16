/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { distinguishedName } from "../SelectedAttributeTypes/distinguishedName.oa";
import { dn } from "../SelectedAttributeTypes/dn.oa";
import { id_at_roleOccupant } from "../SelectedAttributeTypes/id-at-roleOccupant.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { distinguishedName } from "../SelectedAttributeTypes/distinguishedName.oa";
export { dn } from "../SelectedAttributeTypes/dn.oa";
export { id_at_roleOccupant } from "../SelectedAttributeTypes/id-at-roleOccupant.va";

/* START_OF_SYMBOL_DEFINITION roleOccupant */
/**
 * @summary roleOccupant
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * roleOccupant ATTRIBUTE ::= {
 *   SUBTYPE OF               distinguishedName
 *   LDAP-SYNTAX              dn.&id
 *   LDAP-NAME                {"roleOccupant"}
 *   ID                       id-at-roleOccupant }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const roleOccupant: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": distinguishedName /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_roleOccupant /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION roleOccupant */

/* eslint-enable */
