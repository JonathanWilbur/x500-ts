/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_UniversalPhysicalDeliveryOfficeName,
    _encode_UniversalPhysicalDeliveryOfficeName,
} from "../PkiPmiExternalDataTypes/UniversalPhysicalDeliveryOfficeName.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    UniversalPhysicalDeliveryOfficeName,
    _decode_UniversalPhysicalDeliveryOfficeName,
    _encode_UniversalPhysicalDeliveryOfficeName,
} from "../PkiPmiExternalDataTypes/UniversalPhysicalDeliveryOfficeName.ta";

/* START_OF_SYMBOL_DEFINITION universal_physical_delivery_office_name */
/**
 * @summary universal_physical_delivery_office_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-physical-delivery-office-name EXTENSION-ATTRIBUTE ::= {
 *                  UniversalPhysicalDeliveryOfficeName
 *   IDENTIFIED BY  29 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_physical_delivery_office_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalPhysicalDeliveryOfficeName,
    },
    encoderFor: {
        "&Type": _encode_UniversalPhysicalDeliveryOfficeName,
    },
    "&id": 29 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_physical_delivery_office_name */

/* eslint-enable */
