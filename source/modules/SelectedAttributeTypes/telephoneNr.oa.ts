/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_lsx_telephoneNr } from "../SelectedAttributeTypes/id-lsx-telephoneNr.va";
import {
    TelephoneNumber,
    _decode_TelephoneNumber,
    _encode_TelephoneNumber,
} from "../SelectedAttributeTypes/TelephoneNumber.ta";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_lsx_telephoneNr } from "../SelectedAttributeTypes/id-lsx-telephoneNr.va";
export {
    TelephoneNumber,
    _decode_TelephoneNumber,
    _encode_TelephoneNumber,
} from "../SelectedAttributeTypes/TelephoneNumber.ta";

/* START_OF_SYMBOL_DEFINITION telephoneNr */
/**
 * @summary telephoneNr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * telephoneNr SYNTAX-NAME ::= {
 *   LDAP-DESC         "Telephone Number"
 *   DIRECTORY SYNTAX  TelephoneNumber
 *   ID                id-lsx-telephoneNr }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<TelephoneNumber>}
 * @implements {SYNTAX_NAME<TelephoneNumber>}
 */
export const telephoneNr: SYNTAX_NAME<TelephoneNumber> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_TelephoneNumber,
    },
    encoderFor: {
        "&Type": _encode_TelephoneNumber,
    },
    "&ldapDesc": "Telephone Number" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_telephoneNr /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION telephoneNr */

/* eslint-enable */
