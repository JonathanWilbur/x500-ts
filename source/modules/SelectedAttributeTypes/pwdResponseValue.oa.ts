/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_not_pwdResponse } from "../SelectedAttributeTypes/id-not-pwdResponse.va";
import {
    _decode_PwdResponse,
    _encode_PwdResponse,
} from "../SelectedAttributeTypes/PwdResponse.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_not_pwdResponse } from "../SelectedAttributeTypes/id-not-pwdResponse.va";
export {
    PwdResponse,
    _decode_PwdResponse,
    _encode_PwdResponse,
} from "../SelectedAttributeTypes/PwdResponse.ta";

/* START_OF_SYMBOL_DEFINITION pwdResponseValue */
/**
 * @summary pwdResponseValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdResponseValue ATTRIBUTE ::= {
 *   WITH SYNTAX              PwdResponse
 *   ID                       id-not-pwdResponse }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdResponseValue: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PwdResponse,
    },
    encoderFor: {
        "&Type": _encode_PwdResponse,
    },
    "&id": id_not_pwdResponse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdResponseValue */

/* eslint-enable */
