/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
import {
    PhysicalDeliveryOfficeNumber,
    _decode_PhysicalDeliveryOfficeNumber,
    _encode_PhysicalDeliveryOfficeNumber,
} from "../PkiPmiExternalDataTypes/PhysicalDeliveryOfficeNumber.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    PhysicalDeliveryOfficeNumber,
    _decode_PhysicalDeliveryOfficeNumber,
    _encode_PhysicalDeliveryOfficeNumber,
} from "../PkiPmiExternalDataTypes/PhysicalDeliveryOfficeNumber.ta";

/* START_OF_SYMBOL_DEFINITION physical_delivery_office_number */
/**
 * @summary physical_delivery_office_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-delivery-office-number EXTENSION-ATTRIBUTE ::= {
 *                  PhysicalDeliveryOfficeNumber
 *   IDENTIFIED BY  11 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<PhysicalDeliveryOfficeNumber>}
 * @implements {EXTENSION_ATTRIBUTE<PhysicalDeliveryOfficeNumber>}
 */
export const physical_delivery_office_number: EXTENSION_ATTRIBUTE<PhysicalDeliveryOfficeNumber> = {
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
