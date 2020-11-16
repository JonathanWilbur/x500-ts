/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_LocalPostalAttributes,
    _encode_LocalPostalAttributes,
} from "../PkiPmiExternalDataTypes/LocalPostalAttributes.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    LocalPostalAttributes,
    _decode_LocalPostalAttributes,
    _encode_LocalPostalAttributes,
} from "../PkiPmiExternalDataTypes/LocalPostalAttributes.ta";

/* START_OF_SYMBOL_DEFINITION local_postal_attributes */
/**
 * @summary local_postal_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * local-postal-attributes EXTENSION-ATTRIBUTE ::= {
 *                  LocalPostalAttributes
 *   IDENTIFIED BY  21 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const local_postal_attributes: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_LocalPostalAttributes,
    },
    encoderFor: {
        "&Type": _encode_LocalPostalAttributes,
    },
    "&id": 21 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION local_postal_attributes */

/* eslint-enable */
