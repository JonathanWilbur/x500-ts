/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { deliveryMethod } from "../SelectedAttributeTypes/deliveryMethod.oa";
import { id_at_preferredDeliveryMethod } from "../SelectedAttributeTypes/id-at-preferredDeliveryMethod.va";
import {
    _decode_PreferredDeliveryMethod,
    _encode_PreferredDeliveryMethod,
} from "../SelectedAttributeTypes/PreferredDeliveryMethod.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { deliveryMethod } from "../SelectedAttributeTypes/deliveryMethod.oa";
export { id_at_preferredDeliveryMethod } from "../SelectedAttributeTypes/id-at-preferredDeliveryMethod.va";
export {
    PreferredDeliveryMethod,
    _decode_PreferredDeliveryMethod,
    _encode_PreferredDeliveryMethod,
} from "../SelectedAttributeTypes/PreferredDeliveryMethod.ta";

/* START_OF_SYMBOL_DEFINITION preferredDeliveryMethod */
/**
 * @summary preferredDeliveryMethod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * preferredDeliveryMethod ATTRIBUTE ::= {
 *   WITH SYNTAX              PreferredDeliveryMethod
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              deliveryMethod.&id
 *   LDAP-NAME                {"preferredDeliveryMethod"}
 *   ID                       id-at-preferredDeliveryMethod }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const preferredDeliveryMethod: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PreferredDeliveryMethod,
    },
    encoderFor: {
        "&Type": _encode_PreferredDeliveryMethod,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": deliveryMethod["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_preferredDeliveryMethod /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION preferredDeliveryMethod */

/* eslint-enable */