/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
import {
    UniversalPostOfficeBoxAddress,
    _decode_UniversalPostOfficeBoxAddress,
    _encode_UniversalPostOfficeBoxAddress,
} from "../PkiPmiExternalDataTypes/UniversalPostOfficeBoxAddress.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    UniversalPostOfficeBoxAddress,
    _decode_UniversalPostOfficeBoxAddress,
    _encode_UniversalPostOfficeBoxAddress,
} from "../PkiPmiExternalDataTypes/UniversalPostOfficeBoxAddress.ta";

/* START_OF_SYMBOL_DEFINITION universal_post_office_box_address */
/**
 * @summary universal_post_office_box_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-post-office-box-address EXTENSION-ATTRIBUTE ::= {
 *                  UniversalPostOfficeBoxAddress
 *   IDENTIFIED BY  37 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalPostOfficeBoxAddress>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalPostOfficeBoxAddress>}
 */
export const universal_post_office_box_address: EXTENSION_ATTRIBUTE<UniversalPostOfficeBoxAddress> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalPostOfficeBoxAddress,
    },
    encoderFor: {
        "&Type": _encode_UniversalPostOfficeBoxAddress,
    },
    "&id": 37 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_post_office_box_address */

/* eslint-enable */
