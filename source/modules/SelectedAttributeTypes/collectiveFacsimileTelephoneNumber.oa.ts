/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { facsimileTelephoneNr } from "../SelectedAttributeTypes/facsimileTelephoneNr.oa";
import { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa";
import { id_at_collectiveFacsimileTelephoneNumber } from "../SelectedAttributeTypes/id-at-collectiveFacsimileTelephoneNumber.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { facsimileTelephoneNr } from "../SelectedAttributeTypes/facsimileTelephoneNr.oa";
export { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa";
export { id_at_collectiveFacsimileTelephoneNumber } from "../SelectedAttributeTypes/id-at-collectiveFacsimileTelephoneNumber.va";

/* START_OF_SYMBOL_DEFINITION collectiveFacsimileTelephoneNumber */
/**
 * @summary collectiveFacsimileTelephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveFacsimileTelephoneNumber ATTRIBUTE ::= {
 *   SUBTYPE OF               facsimileTelephoneNumber
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              facsimileTelephoneNr.&id
 *   LDAP-NAME                {"c-FacsimileTelephoneNumber"}
 *   ID                       id-at-collectiveFacsimileTelephoneNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectiveFacsimileTelephoneNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": facsimileTelephoneNumber /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": facsimileTelephoneNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectiveFacsimileTelephoneNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION collectiveFacsimileTelephoneNumber */

/* eslint-enable */
