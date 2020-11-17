/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Associate_result */
/**
 * @summary Associate_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Associate-result  ::=  INTEGER {
 *   accepted           (0),
 *   rejected-permanent (1),
 *   rejected-transient (2)}(0..2, ...)
 * ```
 */
export type Associate_result = INTEGER;
/* END_OF_SYMBOL_DEFINITION Associate_result */

/* START_OF_SYMBOL_DEFINITION Associate_result_accepted */
/**
 * @summary Associate_result_accepted
 * @constant
 * @type {number}
 */
export const Associate_result_accepted: Associate_result = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_result_accepted */

/* START_OF_SYMBOL_DEFINITION accepted */
/**
 * @summary Associate_result_accepted
 * @constant
 * @type {number}
 */
export const accepted: Associate_result = Associate_result_accepted; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION accepted */

/* START_OF_SYMBOL_DEFINITION Associate_result_rejected_permanent */
/**
 * @summary Associate_result_rejected_permanent
 * @constant
 * @type {number}
 */
export const Associate_result_rejected_permanent: Associate_result = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_result_rejected_permanent */

/* START_OF_SYMBOL_DEFINITION rejected_permanent */
/**
 * @summary Associate_result_rejected_permanent
 * @constant
 * @type {number}
 */
export const rejected_permanent: Associate_result = Associate_result_rejected_permanent; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION rejected_permanent */

/* START_OF_SYMBOL_DEFINITION Associate_result_rejected_transient */
/**
 * @summary Associate_result_rejected_transient
 * @constant
 * @type {number}
 */
export const Associate_result_rejected_transient: Associate_result = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_result_rejected_transient */

/* START_OF_SYMBOL_DEFINITION rejected_transient */
/**
 * @summary Associate_result_rejected_transient
 * @constant
 * @type {number}
 */
export const rejected_transient: Associate_result = Associate_result_rejected_transient; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION rejected_transient */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Associate_result */
let _cached_decoder_for_Associate_result: $.ASN1Decoder<
    Associate_result
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Associate_result */

/* START_OF_SYMBOL_DEFINITION _decode_Associate_result */
/**
 * @summary Decodes an ASN.1 element into a(n) Associate_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Associate_result} The decoded data structure.
 */
export function _decode_Associate_result(el: _Element) {
    if (!_cached_decoder_for_Associate_result) {
        _cached_decoder_for_Associate_result = $._decodeInteger;
    }
    return _cached_decoder_for_Associate_result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Associate_result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Associate_result */
let _cached_encoder_for_Associate_result: $.ASN1Encoder<
    Associate_result
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Associate_result */

/* START_OF_SYMBOL_DEFINITION _encode_Associate_result */
/**
 * @summary Encodes a(n) Associate_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Associate_result, encoded as an ASN.1 Element.
 */
export function _encode_Associate_result(
    value: Associate_result,
    elGetter: $.ASN1Encoder<Associate_result>
) {
    if (!_cached_encoder_for_Associate_result) {
        _cached_encoder_for_Associate_result = $._encodeInteger;
    }
    return _cached_encoder_for_Associate_result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Associate_result */

/* eslint-enable */
