/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_lsx_telexNr } from "../SelectedAttributeTypes/id-lsx-telexNr.va";
import {
    TelexNumber,
    _decode_TelexNumber,
    _encode_TelexNumber,
} from "../SelectedAttributeTypes/TelexNumber.ta";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_lsx_telexNr } from "../SelectedAttributeTypes/id-lsx-telexNr.va";
export {
    TelexNumber,
    _decode_TelexNumber,
    _encode_TelexNumber,
} from "../SelectedAttributeTypes/TelexNumber.ta";

/* START_OF_SYMBOL_DEFINITION telexNr */
/**
 * @summary telexNr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * telexNr SYNTAX-NAME ::= {
 *   LDAP-DESC         "Telex Number"
 *   DIRECTORY SYNTAX  TelexNumber
 *   ID                id-lsx-telexNr }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<TelexNumber>}
 * @implements {SYNTAX_NAME<TelexNumber>}
 */
export const telexNr: SYNTAX_NAME<TelexNumber> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_TelexNumber,
    },
    encoderFor: {
        "&Type": _encode_TelexNumber,
    },
    "&ldapDesc": "Telex Number" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_telexNr /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION telexNr */

/* eslint-enable */
