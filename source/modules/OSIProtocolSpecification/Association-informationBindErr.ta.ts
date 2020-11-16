/* eslint-disable */
import { ASN1Element as _Element, EXTERNAL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Association_informationBindErr */
/**
 * @summary Association_informationBindErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Association-informationBindErr{APPLICATION-CONTEXT:Protocols}  ::=
 *   SEQUENCE SIZE (1) OF
 *     EXTERNAL (
 *       WITH COMPONENTS {
 *         identification         (WITH COMPONENTS {..., syntax ABSENT}),
 *         data-value-descriptor  ABSENT,
 *         data-value             (CONTAINING TheOsiBindErr{{Protocols}})})
 * ```
 */
export type Association_informationBindErr = EXTERNAL[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Association_informationBindErr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Association_informationBindErr */
let _cached_decoder_for_Association_informationBindErr: $.ASN1Decoder<
    Association_informationBindErr
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Association_informationBindErr */

/* START_OF_SYMBOL_DEFINITION _decode_Association_informationBindErr */
/**
 * @summary Decodes an ASN.1 element into a(n) Association_informationBindErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Association_informationBindErr} The decoded data structure.
 */
export function _decode_Association_informationBindErr(el: _Element) {
    if (!_cached_decoder_for_Association_informationBindErr) {
        _cached_decoder_for_Association_informationBindErr = $._decodeSequenceOf<
            EXTERNAL
        >(() => $._decodeExternal);
    }
    return _cached_decoder_for_Association_informationBindErr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Association_informationBindErr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Association_informationBindErr */
let _cached_encoder_for_Association_informationBindErr: $.ASN1Encoder<
    Association_informationBindErr
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Association_informationBindErr */

/* START_OF_SYMBOL_DEFINITION _encode_Association_informationBindErr */
/**
 * @summary Encodes a(n) Association_informationBindErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Association_informationBindErr, encoded as an ASN.1 Element.
 */
export function _encode_Association_informationBindErr(
    value: Association_informationBindErr,
    elGetter: $.ASN1Encoder<Association_informationBindErr>
) {
    if (!_cached_encoder_for_Association_informationBindErr) {
        _cached_encoder_for_Association_informationBindErr = $._encodeSequenceOf<
            EXTERNAL
        >(() => $._encodeExternal, $.BER);
    }
    return _cached_encoder_for_Association_informationBindErr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Association_informationBindErr */

/* eslint-enable */
