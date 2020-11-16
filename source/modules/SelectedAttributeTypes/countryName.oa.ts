/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    _decode_CountryName,
    _encode_CountryName,
} from "../SelectedAttributeTypes/CountryName.ta";
import { countryString } from "../SelectedAttributeTypes/countryString.oa";
import { id_at_countryName } from "../SelectedAttributeTypes/id-at-countryName.va";
import { name } from "../SelectedAttributeTypes/name.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    CountryName,
    _decode_CountryName,
    _encode_CountryName,
} from "../SelectedAttributeTypes/CountryName.ta";
export { countryString } from "../SelectedAttributeTypes/countryString.oa";
export { id_at_countryName } from "../SelectedAttributeTypes/id-at-countryName.va";
export { name } from "../SelectedAttributeTypes/name.oa";

/* START_OF_SYMBOL_DEFINITION countryName */
/**
 * @summary countryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryName ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              CountryName
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              countryString.&id
 *   LDAP-NAME                {"c"}
 *   ID                       id-at-countryName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const countryName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CountryName,
    },
    encoderFor: {
        "&Type": _encode_CountryName,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": countryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_countryName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION countryName */

/* eslint-enable */
