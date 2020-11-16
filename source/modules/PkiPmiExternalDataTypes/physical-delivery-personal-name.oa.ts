/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_PhysicalDeliveryPersonalName,
    _encode_PhysicalDeliveryPersonalName,
} from "../PkiPmiExternalDataTypes/PhysicalDeliveryPersonalName.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    PhysicalDeliveryPersonalName,
    _decode_PhysicalDeliveryPersonalName,
    _encode_PhysicalDeliveryPersonalName,
} from "../PkiPmiExternalDataTypes/PhysicalDeliveryPersonalName.ta";

/* START_OF_SYMBOL_DEFINITION physical_delivery_personal_name */
/**
 * @summary physical_delivery_personal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-delivery-personal-name EXTENSION-ATTRIBUTE ::= {
 *                  PhysicalDeliveryPersonalName
 *   IDENTIFIED BY  13 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const physical_delivery_personal_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PhysicalDeliveryPersonalName,
    },
    encoderFor: {
        "&Type": _encode_PhysicalDeliveryPersonalName,
    },
    "&id": 13 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION physical_delivery_personal_name */

/* eslint-enable */
