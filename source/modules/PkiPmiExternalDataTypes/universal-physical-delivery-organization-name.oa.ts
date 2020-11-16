/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_UniversalPhysicalDeliveryOrganizationName,
    _encode_UniversalPhysicalDeliveryOrganizationName,
} from "../PkiPmiExternalDataTypes/UniversalPhysicalDeliveryOrganizationName.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    UniversalPhysicalDeliveryOrganizationName,
    _decode_UniversalPhysicalDeliveryOrganizationName,
    _encode_UniversalPhysicalDeliveryOrganizationName,
} from "../PkiPmiExternalDataTypes/UniversalPhysicalDeliveryOrganizationName.ta";

/* START_OF_SYMBOL_DEFINITION universal_physical_delivery_organization_name */
/**
 * @summary universal_physical_delivery_organization_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-physical-delivery-organization-name EXTENSION-ATTRIBUTE ::= {
 *                  UniversalPhysicalDeliveryOrganizationName
 *   IDENTIFIED BY  33 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_physical_delivery_organization_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalPhysicalDeliveryOrganizationName,
    },
    encoderFor: {
        "&Type": _encode_UniversalPhysicalDeliveryOrganizationName,
    },
    "&id": 33 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_physical_delivery_organization_name */

/* eslint-enable */
