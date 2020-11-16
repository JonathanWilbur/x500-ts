/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import {
    _decode_CountryName,
    _encode_CountryName,
} from "../SelectedAttributeTypes/CountryName.ta";
import { id_lsx_countryString } from "../SelectedAttributeTypes/id-lsx-countryString.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export {
    CountryName,
    _decode_CountryName,
    _encode_CountryName,
} from "../SelectedAttributeTypes/CountryName.ta";
export { id_lsx_countryString } from "../SelectedAttributeTypes/id-lsx-countryString.va";

/* START_OF_SYMBOL_DEFINITION countryString */
/**
 * @summary countryString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Country String"
 *   DIRECTORY SYNTAX  CountryName
 *   ID                id-lsx-countryString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const countryString: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CountryName,
    },
    encoderFor: {
        "&Type": _encode_CountryName,
    },
    "&ldapDesc": "Country String" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_countryString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION countryString */

/* eslint-enable */
