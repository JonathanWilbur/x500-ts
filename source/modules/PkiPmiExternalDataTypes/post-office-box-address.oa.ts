/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_PostOfficeBoxAddress,
    _encode_PostOfficeBoxAddress,
} from "../PkiPmiExternalDataTypes/PostOfficeBoxAddress.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    PostOfficeBoxAddress,
    _decode_PostOfficeBoxAddress,
    _encode_PostOfficeBoxAddress,
} from "../PkiPmiExternalDataTypes/PostOfficeBoxAddress.ta";

/* START_OF_SYMBOL_DEFINITION post_office_box_address */
/**
 * @summary post_office_box_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * post-office-box-address EXTENSION-ATTRIBUTE ::= {
 *                  PostOfficeBoxAddress
 *   IDENTIFIED BY  18 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const post_office_box_address: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PostOfficeBoxAddress,
    },
    encoderFor: {
        "&Type": _encode_PostOfficeBoxAddress,
    },
    "&id": 18 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION post_office_box_address */

/* eslint-enable */
