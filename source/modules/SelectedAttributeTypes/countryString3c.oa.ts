/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import {
    CountryCode3c,
    _decode_CountryCode3c,
    _encode_CountryCode3c,
} from "../SelectedAttributeTypes/CountryCode3c.ta";
import { id_asx_countryString3c } from "../SelectedAttributeTypes/id-asx-countryString3c.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export {
    CountryCode3c,
    _decode_CountryCode3c,
    _encode_CountryCode3c,
} from "../SelectedAttributeTypes/CountryCode3c.ta";
export { id_asx_countryString3c } from "../SelectedAttributeTypes/id-asx-countryString3c.va";

/* START_OF_SYMBOL_DEFINITION countryString3c */
/**
 * @summary countryString3c
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryString3c SYNTAX-NAME ::= {
 *   LDAP-DESC         "Country String 3 characters"
 *   DIRECTORY SYNTAX  CountryCode3c
 *   ID                id-asx-countryString3c }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<CountryCode3c>}
 * @implements {SYNTAX_NAME<CountryCode3c>}
 */
export const countryString3c: SYNTAX_NAME<CountryCode3c> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CountryCode3c,
    },
    encoderFor: {
        "&Type": _encode_CountryCode3c,
    },
    "&ldapDesc": "Country String 3 characters" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_countryString3c /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION countryString3c */

/* eslint-enable */
