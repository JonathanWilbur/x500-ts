/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
import {
    PhysicalDeliveryCountryName,
    _decode_PhysicalDeliveryCountryName,
    _encode_PhysicalDeliveryCountryName,
} from "../PkiPmiExternalDataTypes/PhysicalDeliveryCountryName.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    PhysicalDeliveryCountryName,
    _decode_PhysicalDeliveryCountryName,
    _encode_PhysicalDeliveryCountryName,
} from "../PkiPmiExternalDataTypes/PhysicalDeliveryCountryName.ta";

/* START_OF_SYMBOL_DEFINITION physical_delivery_country_name */
/**
 * @summary physical_delivery_country_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-delivery-country-name EXTENSION-ATTRIBUTE ::= {
 *                  PhysicalDeliveryCountryName
 *   IDENTIFIED BY  8 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<PhysicalDeliveryCountryName>}
 * @implements {EXTENSION_ATTRIBUTE<PhysicalDeliveryCountryName>}
 */
export const physical_delivery_country_name: EXTENSION_ATTRIBUTE<PhysicalDeliveryCountryName> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PhysicalDeliveryCountryName,
    },
    encoderFor: {
        "&Type": _encode_PhysicalDeliveryCountryName,
    },
    "&id": 8 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION physical_delivery_country_name */

/* eslint-enable */
