/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_asx_intEmailString } from "../SelectedAttributeTypes/id-asx-intEmailString.va";
import {
    _decode_IntEmail,
    _encode_IntEmail,
} from "../SelectedAttributeTypes/IntEmail.ta";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_asx_intEmailString } from "../SelectedAttributeTypes/id-asx-intEmailString.va";
export {
    IntEmail,
    _decode_IntEmail,
    _encode_IntEmail,
} from "../SelectedAttributeTypes/IntEmail.ta";

/* START_OF_SYMBOL_DEFINITION intEmailString */
/**
 * @summary intEmailString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * intEmailString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Internationalized Email"
 *   DIRECTORY SYNTAX  IntEmail
 *   ID                id-asx-intEmailString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const intEmailString: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_IntEmail,
    },
    encoderFor: {
        "&Type": _encode_IntEmail,
    },
    "&ldapDesc": "Internationalized Email" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_intEmailString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION intEmailString */

/* eslint-enable */
