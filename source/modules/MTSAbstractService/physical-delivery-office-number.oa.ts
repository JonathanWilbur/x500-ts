/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_PhysicalDeliveryOfficeNumber,
    _encode_PhysicalDeliveryOfficeNumber,
} from "../MTSAbstractService/PhysicalDeliveryOfficeNumber.ta";
export { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
export {
    PhysicalDeliveryOfficeNumber,
    _decode_PhysicalDeliveryOfficeNumber,
    _encode_PhysicalDeliveryOfficeNumber,
} from "../MTSAbstractService/PhysicalDeliveryOfficeNumber.ta";

/* START_OF_SYMBOL_DEFINITION physical_delivery_office_number */
/**
 * @summary physical_delivery_office_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-delivery-office-number EXTENSION-ATTRIBUTE ::= {
 *   PhysicalDeliveryOfficeNumber
 *   IDENTIFIED BY  11
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const physical_delivery_office_number: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PhysicalDeliveryOfficeNumber,
    },
    encoderFor: {
        "&Type": _encode_PhysicalDeliveryOfficeNumber,
    },
    "&id": 11 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION physical_delivery_office_number */

/* eslint-enable */
