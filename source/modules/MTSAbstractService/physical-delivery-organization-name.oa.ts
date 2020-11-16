/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_PhysicalDeliveryOrganizationName,
    _encode_PhysicalDeliveryOrganizationName,
} from "../MTSAbstractService/PhysicalDeliveryOrganizationName.ta";
export { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
export {
    PhysicalDeliveryOrganizationName,
    _decode_PhysicalDeliveryOrganizationName,
    _encode_PhysicalDeliveryOrganizationName,
} from "../MTSAbstractService/PhysicalDeliveryOrganizationName.ta";

/* START_OF_SYMBOL_DEFINITION physical_delivery_organization_name */
/**
 * @summary physical_delivery_organization_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-delivery-organization-name EXTENSION-ATTRIBUTE ::= {
 *   PhysicalDeliveryOrganizationName
 *   IDENTIFIED BY  14
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const physical_delivery_organization_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PhysicalDeliveryOrganizationName,
    },
    encoderFor: {
        "&Type": _encode_PhysicalDeliveryOrganizationName,
    },
    "&id": 14 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION physical_delivery_organization_name */

/* eslint-enable */
