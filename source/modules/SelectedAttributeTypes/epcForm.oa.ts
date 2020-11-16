/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import {
    _decode_EpcFormat,
    _encode_EpcFormat,
} from "../SelectedAttributeTypes/EpcFormat.ta";
import { id_asx_epcForm } from "../SelectedAttributeTypes/id-asx-epcForm.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export {
    EpcFormat,
    _decode_EpcFormat,
    _encode_EpcFormat,
} from "../SelectedAttributeTypes/EpcFormat.ta";
export { id_asx_epcForm } from "../SelectedAttributeTypes/id-asx-epcForm.va";

/* START_OF_SYMBOL_DEFINITION epcForm */
/**
 * @summary epcForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * epcForm SYNTAX-NAME ::= {
 *   LDAP-DESC         "EPC Format"
 *   DIRECTORY SYNTAX  EpcFormat
 *   ID                id-asx-epcForm }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const epcForm: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_EpcFormat,
    },
    encoderFor: {
        "&Type": _encode_EpcFormat,
    },
    "&ldapDesc": "EPC Format" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_epcForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION epcForm */

/* eslint-enable */
