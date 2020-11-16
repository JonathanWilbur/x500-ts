/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_UnformattedPostalAddress,
    _encode_UnformattedPostalAddress,
} from "../PkiPmiExternalDataTypes/UnformattedPostalAddress.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    UnformattedPostalAddress,
    _decode_UnformattedPostalAddress,
    _encode_UnformattedPostalAddress,
} from "../PkiPmiExternalDataTypes/UnformattedPostalAddress.ta";

/* START_OF_SYMBOL_DEFINITION unformatted_postal_address */
/**
 * @summary unformatted_postal_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * unformatted-postal-address EXTENSION-ATTRIBUTE ::= {
 *                  UnformattedPostalAddress
 *   IDENTIFIED BY  16 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const unformatted_postal_address: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnformattedPostalAddress,
    },
    encoderFor: {
        "&Type": _encode_UnformattedPostalAddress,
    },
    "&id": 16 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION unformatted_postal_address */

/* eslint-enable */
