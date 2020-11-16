/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_at_collectiveInternationalISDNNumber } from "../SelectedAttributeTypes/id-at-collectiveInternationalISDNNumber.va";
import { internationalISDNNumber } from "../SelectedAttributeTypes/internationalISDNNumber.oa";
import { numericString } from "../SelectedAttributeTypes/numericString.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_collectiveInternationalISDNNumber } from "../SelectedAttributeTypes/id-at-collectiveInternationalISDNNumber.va";
export { internationalISDNNumber } from "../SelectedAttributeTypes/internationalISDNNumber.oa";
export { numericString } from "../SelectedAttributeTypes/numericString.oa";

/* START_OF_SYMBOL_DEFINITION collectiveInternationalISDNNumber */
/**
 * @summary collectiveInternationalISDNNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveInternationalISDNNumber ATTRIBUTE ::= {
 *   SUBTYPE OF               internationalISDNNumber
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              numericString.&id
 *   LDAP-NAME                {"c-InternationalISDNNumber"}
 *   ID                       id-at-collectiveInternationalISDNNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectiveInternationalISDNNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": internationalISDNNumber /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectiveInternationalISDNNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION collectiveInternationalISDNNumber */

/* eslint-enable */
