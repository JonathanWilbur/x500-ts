/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_at_tagLocation } from "../SelectedAttributeTypes/id-at-tagLocation.va";
import { utmCoordinates } from "../SelectedAttributeTypes/utmCoordinates.oa";
import { utmCoords } from "../SelectedAttributeTypes/utmCoords.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_tagLocation } from "../SelectedAttributeTypes/id-at-tagLocation.va";
export { utmCoordinates } from "../SelectedAttributeTypes/utmCoordinates.oa";
export { utmCoords } from "../SelectedAttributeTypes/utmCoords.oa";

/* START_OF_SYMBOL_DEFINITION tagLocation */
/**
 * @summary tagLocation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tagLocation ATTRIBUTE ::= {
 *   SUBTYPE OF               utmCoordinates
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              utmCoords.&id
 *   LDAP-NAME                {"tagLocation"}
 *   ID                       id-at-tagLocation }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const tagLocation: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": utmCoordinates /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": utmCoords["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_tagLocation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION tagLocation */

/* eslint-enable */
