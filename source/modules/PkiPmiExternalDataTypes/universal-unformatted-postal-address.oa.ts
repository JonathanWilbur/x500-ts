/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_UniversalUnformattedPostalAddress,
    _encode_UniversalUnformattedPostalAddress,
} from "../PkiPmiExternalDataTypes/UniversalUnformattedPostalAddress.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    UniversalUnformattedPostalAddress,
    _decode_UniversalUnformattedPostalAddress,
    _encode_UniversalUnformattedPostalAddress,
} from "../PkiPmiExternalDataTypes/UniversalUnformattedPostalAddress.ta";

/* START_OF_SYMBOL_DEFINITION universal_unformatted_postal_address */
/**
 * @summary universal_unformatted_postal_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-unformatted-postal-address EXTENSION-ATTRIBUTE ::= {
 *                  UniversalUnformattedPostalAddress
 *   IDENTIFIED BY  35 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_unformatted_postal_address: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalUnformattedPostalAddress,
    },
    encoderFor: {
        "&Type": _encode_UniversalUnformattedPostalAddress,
    },
    "&id": 35 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_unformatted_postal_address */

/* eslint-enable */
