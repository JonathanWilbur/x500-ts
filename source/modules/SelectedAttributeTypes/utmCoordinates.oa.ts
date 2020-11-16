/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_at_utmCoordinates } from "../SelectedAttributeTypes/id-at-utmCoordinates.va";
import {
    _decode_UtmCoordinates,
    _encode_UtmCoordinates,
} from "../SelectedAttributeTypes/UtmCoordinates.ta";
import { utmCoords } from "../SelectedAttributeTypes/utmCoords.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_utmCoordinates } from "../SelectedAttributeTypes/id-at-utmCoordinates.va";
export {
    UtmCoordinates,
    _decode_UtmCoordinates,
    _encode_UtmCoordinates,
} from "../SelectedAttributeTypes/UtmCoordinates.ta";
export { utmCoords } from "../SelectedAttributeTypes/utmCoords.oa";

/* START_OF_SYMBOL_DEFINITION utmCoordinates */
/**
 * @summary utmCoordinates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * utmCoordinates  ATTRIBUTE ::= {
 *   WITH SYNTAX              UtmCoordinates
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              utmCoords.&id
 *   LDAP-NAME                {"utmCoordinates"}
 *   ID                       id-at-utmCoordinates }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const utmCoordinates: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UtmCoordinates,
    },
    encoderFor: {
        "&Type": _encode_UtmCoordinates,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": utmCoords["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_utmCoordinates /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION utmCoordinates */

/* eslint-enable */
