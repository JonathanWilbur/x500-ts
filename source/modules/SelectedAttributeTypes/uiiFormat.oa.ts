/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_at_uiiFormat } from "../SelectedAttributeTypes/id-at-uiiFormat.va";
import { uiiForm } from "../SelectedAttributeTypes/uiiForm.oa";
import {
    _decode_UiiFormat,
    _encode_UiiFormat,
} from "../SelectedAttributeTypes/UiiFormat.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_uiiFormat } from "../SelectedAttributeTypes/id-at-uiiFormat.va";
export { uiiForm } from "../SelectedAttributeTypes/uiiForm.oa";
export {
    UiiFormat,
    _decode_UiiFormat,
    _encode_UiiFormat,
} from "../SelectedAttributeTypes/UiiFormat.ta";

/* START_OF_SYMBOL_DEFINITION uiiFormat */
/**
 * @summary uiiFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uiiFormat ATTRIBUTE ::= {
 *   WITH SYNTAX              UiiFormat
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              uiiForm.&id
 *   LDAP-NAME                {"uiiFormat"}
 *   ID                       id-at-uiiFormat }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const uiiFormat: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UiiFormat,
    },
    encoderFor: {
        "&Type": _encode_UiiFormat,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": uiiForm["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_uiiFormat /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uiiFormat */

/* eslint-enable */
