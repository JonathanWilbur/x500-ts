/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_at_telexNumber } from "../SelectedAttributeTypes/id-at-telexNumber.va";
import { telexNr } from "../SelectedAttributeTypes/telexNr.oa";
import {
    _decode_TelexNumber,
    _encode_TelexNumber,
} from "../SelectedAttributeTypes/TelexNumber.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_telexNumber } from "../SelectedAttributeTypes/id-at-telexNumber.va";
export { telexNr } from "../SelectedAttributeTypes/telexNr.oa";
export {
    TelexNumber,
    _decode_TelexNumber,
    _encode_TelexNumber,
} from "../SelectedAttributeTypes/TelexNumber.ta";

/* START_OF_SYMBOL_DEFINITION telexNumber */
/**
 * @summary telexNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * telexNumber ATTRIBUTE ::= {
 *   WITH SYNTAX              TelexNumber
 *   LDAP-SYNTAX              telexNr.&id
 *   LDAP-NAME                {"telexNumber"}
 *   ID                       id-at-telexNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const telexNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TelexNumber,
    },
    encoderFor: {
        "&Type": _encode_TelexNumber,
    },
    "&ldapSyntax": telexNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_telexNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION telexNumber */

/* eslint-enable */
