/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    _decode_CountryCode3n,
    _encode_CountryCode3n,
} from "../SelectedAttributeTypes/CountryCode3n.ta";
import { countryString3n } from "../SelectedAttributeTypes/countryString3n.oa";
import { id_at_countryCode3n } from "../SelectedAttributeTypes/id-at-countryCode3n.va";
import { name } from "../SelectedAttributeTypes/name.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    CountryCode3n,
    _decode_CountryCode3n,
    _encode_CountryCode3n,
} from "../SelectedAttributeTypes/CountryCode3n.ta";
export { countryString3n } from "../SelectedAttributeTypes/countryString3n.oa";
export { id_at_countryCode3n } from "../SelectedAttributeTypes/id-at-countryCode3n.va";
export { name } from "../SelectedAttributeTypes/name.oa";

/* START_OF_SYMBOL_DEFINITION countryCode3n */
/**
 * @summary countryCode3n
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryCode3n ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              CountryCode3n
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              countryString3n.&id
 *   LDAP-NAME                {"n3"}
 *   ID                       id-at-countryCode3n }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const countryCode3n: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CountryCode3n,
    },
    encoderFor: {
        "&Type": _encode_CountryCode3n,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": countryString3n["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_countryCode3n /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION countryCode3n */

/* eslint-enable */
