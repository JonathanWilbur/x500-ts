/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../MTSAbstractService/PDSParameter.ta";
export {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../MTSAbstractService/PDSParameter.ta";

/* START_OF_SYMBOL_DEFINITION LocalPostalAttributes */
/**
 * @summary LocalPostalAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocalPostalAttributes  ::=  PDSParameter
 * ```
 */
export type LocalPostalAttributes = PDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION LocalPostalAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalPostalAttributes */
let _cached_decoder_for_LocalPostalAttributes: $.ASN1Decoder<
    LocalPostalAttributes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalPostalAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_LocalPostalAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) LocalPostalAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocalPostalAttributes} The decoded data structure.
 */
export function _decode_LocalPostalAttributes(el: _Element) {
    if (!_cached_decoder_for_LocalPostalAttributes) {
        _cached_decoder_for_LocalPostalAttributes = _decode_PDSParameter;
    }
    return _cached_decoder_for_LocalPostalAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LocalPostalAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalPostalAttributes */
let _cached_encoder_for_LocalPostalAttributes: $.ASN1Encoder<
    LocalPostalAttributes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalPostalAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_LocalPostalAttributes */
/**
 * @summary Encodes a(n) LocalPostalAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalPostalAttributes, encoded as an ASN.1 Element.
 */
export function _encode_LocalPostalAttributes(
    value: LocalPostalAttributes,
    elGetter: $.ASN1Encoder<LocalPostalAttributes>
) {
    if (!_cached_encoder_for_LocalPostalAttributes) {
        _cached_encoder_for_LocalPostalAttributes = _encode_PDSParameter;
    }
    return _cached_encoder_for_LocalPostalAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LocalPostalAttributes */

/* eslint-enable */
