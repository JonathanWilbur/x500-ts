/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import {
    _decode_CountryCode3n,
    _encode_CountryCode3n,
} from "../SelectedAttributeTypes/CountryCode3n.ta";
import { id_asx_countryString3n } from "../SelectedAttributeTypes/id-asx-countryString3n.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export {
    CountryCode3n,
    _decode_CountryCode3n,
    _encode_CountryCode3n,
} from "../SelectedAttributeTypes/CountryCode3n.ta";
export { id_asx_countryString3n } from "../SelectedAttributeTypes/id-asx-countryString3n.va";

/* START_OF_SYMBOL_DEFINITION countryString3n */
/**
 * @summary countryString3n
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryString3n SYNTAX-NAME ::= {
 *   LDAP-DESC         "Country String 3 numeric characters"
 *   DIRECTORY SYNTAX  CountryCode3n
 *   ID                id-asx-countryString3n }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const countryString3n: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CountryCode3n,
    },
    encoderFor: {
        "&Type": _encode_CountryCode3n,
    },
    "&ldapDesc":
        "Country String 3 numeric characters" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_countryString3n /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION countryString3n */

/* eslint-enable */
