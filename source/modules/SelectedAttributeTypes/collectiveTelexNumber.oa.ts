/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_at_collectiveTelexNumber } from "../SelectedAttributeTypes/id-at-collectiveTelexNumber.va";
import { telexNr } from "../SelectedAttributeTypes/telexNr.oa";
import { telexNumber } from "../SelectedAttributeTypes/telexNumber.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_collectiveTelexNumber } from "../SelectedAttributeTypes/id-at-collectiveTelexNumber.va";
export { telexNr } from "../SelectedAttributeTypes/telexNr.oa";
export { telexNumber } from "../SelectedAttributeTypes/telexNumber.oa";

/* START_OF_SYMBOL_DEFINITION collectiveTelexNumber */
/**
 * @summary collectiveTelexNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveTelexNumber ATTRIBUTE ::= {
 *   SUBTYPE OF               telexNumber
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              telexNr.&id
 *   LDAP-NAME                {"c-TelexNumber"}
 *   ID                       id-at-collectiveTelexNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectiveTelexNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": telexNumber /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": telexNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectiveTelexNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION collectiveTelexNumber */

/* eslint-enable */
