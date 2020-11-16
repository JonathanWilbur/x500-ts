/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_UniversalStreetAddress,
    _encode_UniversalStreetAddress,
} from "../MTSAbstractService/UniversalStreetAddress.ta";
export { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
export {
    UniversalStreetAddress,
    _decode_UniversalStreetAddress,
    _encode_UniversalStreetAddress,
} from "../MTSAbstractService/UniversalStreetAddress.ta";

/* START_OF_SYMBOL_DEFINITION universal_street_address */
/**
 * @summary universal_street_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-street-address EXTENSION-ATTRIBUTE ::= {
 *   UniversalStreetAddress
 *   IDENTIFIED BY  36
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_street_address: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalStreetAddress,
    },
    encoderFor: {
        "&Type": _encode_UniversalStreetAddress,
    },
    "&id": 36 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_street_address */

/* eslint-enable */
