/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
import {
    LocalPostalAttributes,
    _decode_LocalPostalAttributes,
    _encode_LocalPostalAttributes,
} from "../MTSAbstractService/LocalPostalAttributes.ta";
export { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
export {
    LocalPostalAttributes,
    _decode_LocalPostalAttributes,
    _encode_LocalPostalAttributes,
} from "../MTSAbstractService/LocalPostalAttributes.ta";

/* START_OF_SYMBOL_DEFINITION local_postal_attributes */
/**
 * @summary local_postal_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * local-postal-attributes EXTENSION-ATTRIBUTE ::= {
 *   LocalPostalAttributes
 *   IDENTIFIED BY  21
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<LocalPostalAttributes>}
 * @implements {EXTENSION_ATTRIBUTE<LocalPostalAttributes>}
 */
export const local_postal_attributes: EXTENSION_ATTRIBUTE<LocalPostalAttributes> = {
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
