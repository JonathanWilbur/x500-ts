/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_OrderedListSyntax */
export enum _enum_for_OrderedListSyntax {
    ascSerialNum = 0,
    ascRevDate = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_OrderedListSyntax */

/* START_OF_SYMBOL_DEFINITION OrderedListSyntax */
/**
 * @summary OrderedListSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrderedListSyntax  ::=  ENUMERATED {
 *   ascSerialNum (0),
 *   ascRevDate   (1),
 *   ...}
 * ```@enum {number}
 */
export type OrderedListSyntax = _enum_for_OrderedListSyntax | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION OrderedListSyntax */

/* START_OF_SYMBOL_DEFINITION OrderedListSyntax_ascSerialNum */
/**
 * @summary OrderedListSyntax_ascSerialNum
 * @constant
 * @type {number}
 */
export const OrderedListSyntax_ascSerialNum: OrderedListSyntax = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OrderedListSyntax_ascSerialNum */

/* START_OF_SYMBOL_DEFINITION OrderedListSyntax_ascRevDate */
/**
 * @summary OrderedListSyntax_ascRevDate
 * @constant
 * @type {number}
 */
export const OrderedListSyntax_ascRevDate: OrderedListSyntax = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OrderedListSyntax_ascRevDate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OrderedListSyntax */
let _cached_decoder_for_OrderedListSyntax: $.ASN1Decoder<
    OrderedListSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OrderedListSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_OrderedListSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) OrderedListSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OrderedListSyntax} The decoded data structure.
 */
export function _decode_OrderedListSyntax(el: _Element) {
    if (!_cached_decoder_for_OrderedListSyntax) {
        _cached_decoder_for_OrderedListSyntax = $._decodeEnumerated;
    }
    return _cached_decoder_for_OrderedListSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OrderedListSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OrderedListSyntax */
let _cached_encoder_for_OrderedListSyntax: $.ASN1Encoder<
    OrderedListSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OrderedListSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_OrderedListSyntax */
/**
 * @summary Encodes a(n) OrderedListSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrderedListSyntax, encoded as an ASN.1 Element.
 */
export function _encode_OrderedListSyntax(
    value: OrderedListSyntax,
    elGetter: $.ASN1Encoder<OrderedListSyntax>
) {
    if (!_cached_encoder_for_OrderedListSyntax) {
        _cached_encoder_for_OrderedListSyntax = $._encodeEnumerated;
    }
    return _cached_encoder_for_OrderedListSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OrderedListSyntax */

/* eslint-enable */
