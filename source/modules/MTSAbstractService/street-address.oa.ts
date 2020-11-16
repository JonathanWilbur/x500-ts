/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_StreetAddress,
    _encode_StreetAddress,
} from "../MTSAbstractService/StreetAddress.ta";
export { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
export {
    StreetAddress,
    _decode_StreetAddress,
    _encode_StreetAddress,
} from "../MTSAbstractService/StreetAddress.ta";

/* START_OF_SYMBOL_DEFINITION street_address */
/**
 * @summary street_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * street-address EXTENSION-ATTRIBUTE ::= {StreetAddress
 *                                         IDENTIFIED BY  17
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const street_address: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_StreetAddress,
    },
    encoderFor: {
        "&Type": _encode_StreetAddress,
    },
    "&id": 17 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION street_address */

/* eslint-enable */
