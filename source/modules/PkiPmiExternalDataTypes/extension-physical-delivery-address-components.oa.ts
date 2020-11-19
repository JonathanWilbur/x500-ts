/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
import {
    ExtensionPhysicalDeliveryAddressComponents,
    _decode_ExtensionPhysicalDeliveryAddressComponents,
    _encode_ExtensionPhysicalDeliveryAddressComponents,
} from "../PkiPmiExternalDataTypes/ExtensionPhysicalDeliveryAddressComponents.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    ExtensionPhysicalDeliveryAddressComponents,
    _decode_ExtensionPhysicalDeliveryAddressComponents,
    _encode_ExtensionPhysicalDeliveryAddressComponents,
} from "../PkiPmiExternalDataTypes/ExtensionPhysicalDeliveryAddressComponents.ta";

/* START_OF_SYMBOL_DEFINITION extension_physical_delivery_address_components */
/**
 * @summary extension_physical_delivery_address_components
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extension-physical-delivery-address-components EXTENSION-ATTRIBUTE ::= {
 *                  ExtensionPhysicalDeliveryAddressComponents
 *   IDENTIFIED BY  15 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<ExtensionPhysicalDeliveryAddressComponents>}
 * @implements {EXTENSION_ATTRIBUTE<ExtensionPhysicalDeliveryAddressComponents>}
 */
export const extension_physical_delivery_address_components: EXTENSION_ATTRIBUTE<ExtensionPhysicalDeliveryAddressComponents> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ExtensionPhysicalDeliveryAddressComponents,
    },
    encoderFor: {
        "&Type": _encode_ExtensionPhysicalDeliveryAddressComponents,
    },
    "&id": 15 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION extension_physical_delivery_address_components */

/* eslint-enable */
