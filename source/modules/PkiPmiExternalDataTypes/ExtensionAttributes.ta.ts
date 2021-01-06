/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ExtensionAttribute,
    _decode_ExtensionAttribute,
    _encode_ExtensionAttribute,
} from "../PkiPmiExternalDataTypes/ExtensionAttribute.ta";
export {
    ExtensionAttribute,
    _decode_ExtensionAttribute,
    _encode_ExtensionAttribute,
} from "../PkiPmiExternalDataTypes/ExtensionAttribute.ta";

/* START_OF_SYMBOL_DEFINITION ExtensionAttributes */
/**
 * @summary ExtensionAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionAttributes  ::=
 *   SET SIZE (1..ub-extension-attributes) OF ExtensionAttribute
 * ```
 */
export type ExtensionAttributes = ExtensionAttribute[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ExtensionAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionAttributes */
let _cached_decoder_for_ExtensionAttributes: $.ASN1Decoder<ExtensionAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_ExtensionAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionAttributes} The decoded data structure.
 */
export function _decode_ExtensionAttributes(el: _Element) {
    if (!_cached_decoder_for_ExtensionAttributes) {
        _cached_decoder_for_ExtensionAttributes = $._decodeSetOf<ExtensionAttribute>(
            () => _decode_ExtensionAttribute
        );
    }
    return _cached_decoder_for_ExtensionAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtensionAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionAttributes */
let _cached_encoder_for_ExtensionAttributes: $.ASN1Encoder<ExtensionAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_ExtensionAttributes */
/**
 * @summary Encodes a(n) ExtensionAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionAttributes, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionAttributes(
    value: ExtensionAttributes,
    elGetter: $.ASN1Encoder<ExtensionAttributes>
) {
    if (!_cached_encoder_for_ExtensionAttributes) {
        _cached_encoder_for_ExtensionAttributes = $._encodeSetOf<ExtensionAttribute>(
            () => _encode_ExtensionAttribute,
            $.BER
        );
    }
    return _cached_encoder_for_ExtensionAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtensionAttributes */

/* eslint-enable */
