/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_Abort */
export enum _enum_for_Abort {
    mistypedPDU = 0,
    unboundRequest = 1,
    invalidPDU = 2,
    resourceLimitation = 3,
    connectionFailed = 4,
    invalidProtocol = 5,
    reasonNotSpecified = 6,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Abort */

/* START_OF_SYMBOL_DEFINITION Abort */
/**
 * @summary Abort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Abort  ::=  ENUMERATED {
 *   mistypedPDU         (0),
 *   unboundRequest      (1),
 *   invalidPDU          (2),
 *   resourceLimitation  (3),
 *   connectionFailed    (4),
 *   invalidProtocol     (5),
 *   reasonNotSpecified  (6),
 *   ...}
 * ```@enum {number}
 */
export type Abort = _enum_for_Abort | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION Abort */

/* START_OF_SYMBOL_DEFINITION Abort_mistypedPDU */
/**
 * @summary Abort_mistypedPDU
 * @constant
 * @type {number}
 */
export const Abort_mistypedPDU: Abort = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_mistypedPDU */

/* START_OF_SYMBOL_DEFINITION Abort_unboundRequest */
/**
 * @summary Abort_unboundRequest
 * @constant
 * @type {number}
 */
export const Abort_unboundRequest: Abort = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_unboundRequest */

/* START_OF_SYMBOL_DEFINITION Abort_invalidPDU */
/**
 * @summary Abort_invalidPDU
 * @constant
 * @type {number}
 */
export const Abort_invalidPDU: Abort = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_invalidPDU */

/* START_OF_SYMBOL_DEFINITION Abort_resourceLimitation */
/**
 * @summary Abort_resourceLimitation
 * @constant
 * @type {number}
 */
export const Abort_resourceLimitation: Abort = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_resourceLimitation */

/* START_OF_SYMBOL_DEFINITION Abort_connectionFailed */
/**
 * @summary Abort_connectionFailed
 * @constant
 * @type {number}
 */
export const Abort_connectionFailed: Abort = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_connectionFailed */

/* START_OF_SYMBOL_DEFINITION Abort_invalidProtocol */
/**
 * @summary Abort_invalidProtocol
 * @constant
 * @type {number}
 */
export const Abort_invalidProtocol: Abort = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_invalidProtocol */

/* START_OF_SYMBOL_DEFINITION Abort_reasonNotSpecified */
/**
 * @summary Abort_reasonNotSpecified
 * @constant
 * @type {number}
 */
export const Abort_reasonNotSpecified: Abort = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_reasonNotSpecified */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Abort */
let _cached_decoder_for_Abort: $.ASN1Decoder<Abort> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Abort */

/* START_OF_SYMBOL_DEFINITION _decode_Abort */
/**
 * @summary Decodes an ASN.1 element into a(n) Abort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Abort} The decoded data structure.
 */
export function _decode_Abort(el: _Element) {
    if (!_cached_decoder_for_Abort) {
        _cached_decoder_for_Abort = $._decodeEnumerated;
    }
    return _cached_decoder_for_Abort(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Abort */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Abort */
let _cached_encoder_for_Abort: $.ASN1Encoder<Abort> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Abort */

/* START_OF_SYMBOL_DEFINITION _encode_Abort */
/**
 * @summary Encodes a(n) Abort into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Abort, encoded as an ASN.1 Element.
 */
export function _encode_Abort(value: Abort, elGetter: $.ASN1Encoder<Abort>) {
    if (!_cached_encoder_for_Abort) {
        _cached_encoder_for_Abort = $._encodeEnumerated;
    }
    return _cached_encoder_for_Abort(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Abort */

/* eslint-enable */
