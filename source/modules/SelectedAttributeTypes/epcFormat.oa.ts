/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { epcForm } from "../SelectedAttributeTypes/epcForm.oa";
import {
    _decode_EpcFormat,
    _encode_EpcFormat,
} from "../SelectedAttributeTypes/EpcFormat.ta";
import { id_at_epcFormat } from "../SelectedAttributeTypes/id-at-epcFormat.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { epcForm } from "../SelectedAttributeTypes/epcForm.oa";
export {
    EpcFormat,
    _decode_EpcFormat,
    _encode_EpcFormat,
} from "../SelectedAttributeTypes/EpcFormat.ta";
export { id_at_epcFormat } from "../SelectedAttributeTypes/id-at-epcFormat.va";

/* START_OF_SYMBOL_DEFINITION epcFormat */
/**
 * @summary epcFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * epcFormat  ATTRIBUTE ::= {
 *   WITH SYNTAX              EpcFormat
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              epcForm.&id
 *   LDAP-NAME                {"epcFormat"}
 *   ID                       id-at-epcFormat }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const epcFormat: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_EpcFormat,
    },
    encoderFor: {
        "&Type": _encode_EpcFormat,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": epcForm["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_epcFormat /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION epcFormat */

/* eslint-enable */