/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION TerminalType */
/**
 * @summary TerminalType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminalType  ::=  INTEGER {
 *   telex(3), teletex(4), g3-facsimile(5), g4-facsimile(6), ia5-terminal(7),
 *   videotex(8)}(0..ub-integer-options)
 * ```
 */
export type TerminalType = INTEGER;
/* END_OF_SYMBOL_DEFINITION TerminalType */

/* START_OF_SYMBOL_DEFINITION TerminalType_telex */
/**
 * @summary TerminalType_telex
 * @constant
 * @type {number}
 */
export const TerminalType_telex: TerminalType = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminalType_telex */

/* START_OF_SYMBOL_DEFINITION TerminalType_teletex */
/**
 * @summary TerminalType_teletex
 * @constant
 * @type {number}
 */
export const TerminalType_teletex: TerminalType = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminalType_teletex */

/* START_OF_SYMBOL_DEFINITION TerminalType_g3_facsimile */
/**
 * @summary TerminalType_g3_facsimile
 * @constant
 * @type {number}
 */
export const TerminalType_g3_facsimile: TerminalType = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminalType_g3_facsimile */

/* START_OF_SYMBOL_DEFINITION TerminalType_g4_facsimile */
/**
 * @summary TerminalType_g4_facsimile
 * @constant
 * @type {number}
 */
export const TerminalType_g4_facsimile: TerminalType = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminalType_g4_facsimile */

/* START_OF_SYMBOL_DEFINITION TerminalType_ia5_terminal */
/**
 * @summary TerminalType_ia5_terminal
 * @constant
 * @type {number}
 */
export const TerminalType_ia5_terminal: TerminalType = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminalType_ia5_terminal */

/* START_OF_SYMBOL_DEFINITION TerminalType_videotex */
/**
 * @summary TerminalType_videotex
 * @constant
 * @type {number}
 */
export const TerminalType_videotex: TerminalType = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminalType_videotex */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminalType */
let _cached_decoder_for_TerminalType: $.ASN1Decoder<TerminalType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminalType */

/* START_OF_SYMBOL_DEFINITION _decode_TerminalType */
/**
 * @summary Decodes an ASN.1 element into a(n) TerminalType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminalType} The decoded data structure.
 */
export function _decode_TerminalType(el: _Element) {
    if (!_cached_decoder_for_TerminalType) {
        _cached_decoder_for_TerminalType = $._decodeInteger;
    }
    return _cached_decoder_for_TerminalType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TerminalType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminalType */
let _cached_encoder_for_TerminalType: $.ASN1Encoder<TerminalType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminalType */

/* START_OF_SYMBOL_DEFINITION _encode_TerminalType */
/**
 * @summary Encodes a(n) TerminalType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminalType, encoded as an ASN.1 Element.
 */
export function _encode_TerminalType(
    value: TerminalType,
    elGetter: $.ASN1Encoder<TerminalType>
) {
    if (!_cached_encoder_for_TerminalType) {
        _cached_encoder_for_TerminalType = $._encodeInteger;
    }
    return _cached_encoder_for_TerminalType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TerminalType */

/* eslint-enable */
