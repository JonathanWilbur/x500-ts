/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_lsx_deliveryMethod } from "../SelectedAttributeTypes/id-lsx-deliveryMethod.va";
import {
    _decode_PreferredDeliveryMethod,
    _encode_PreferredDeliveryMethod,
} from "../SelectedAttributeTypes/PreferredDeliveryMethod.ta";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_lsx_deliveryMethod } from "../SelectedAttributeTypes/id-lsx-deliveryMethod.va";
export {
    PreferredDeliveryMethod,
    _decode_PreferredDeliveryMethod,
    _encode_PreferredDeliveryMethod,
} from "../SelectedAttributeTypes/PreferredDeliveryMethod.ta";

/* START_OF_SYMBOL_DEFINITION deliveryMethod */
/**
 * @summary deliveryMethod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deliveryMethod SYNTAX-NAME ::= {
 *   LDAP-DESC         "Delevery Method"
 *   DIRECTORY SYNTAX  PreferredDeliveryMethod
 *   ID                id-lsx-deliveryMethod }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const deliveryMethod: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_PreferredDeliveryMethod,
    },
    encoderFor: {
        "&Type": _encode_PreferredDeliveryMethod,
    },
    "&ldapDesc": "Delevery Method" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_deliveryMethod /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION deliveryMethod */

/* eslint-enable */
