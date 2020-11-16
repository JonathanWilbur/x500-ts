/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_UniversalPhysicalDeliveryPersonalName,
    _encode_UniversalPhysicalDeliveryPersonalName,
} from "../MTSAbstractService/UniversalPhysicalDeliveryPersonalName.ta";
export { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
export {
    UniversalPhysicalDeliveryPersonalName,
    _decode_UniversalPhysicalDeliveryPersonalName,
    _encode_UniversalPhysicalDeliveryPersonalName,
} from "../MTSAbstractService/UniversalPhysicalDeliveryPersonalName.ta";

/* START_OF_SYMBOL_DEFINITION universal_physical_delivery_personal_name */
/**
 * @summary universal_physical_delivery_personal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-physical-delivery-personal-name EXTENSION-ATTRIBUTE ::= {
 *   UniversalPhysicalDeliveryPersonalName
 *   IDENTIFIED BY  32
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_physical_delivery_personal_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalPhysicalDeliveryPersonalName,
    },
    encoderFor: {
        "&Type": _encode_UniversalPhysicalDeliveryPersonalName,
    },
    "&id": 32 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_physical_delivery_personal_name */

/* eslint-enable */
