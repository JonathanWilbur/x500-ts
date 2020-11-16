/* eslint-disable */
import { ASN1Element as _Element, EXTERNAL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Association_informationBindRes */
/**
 * @summary Association_informationBindRes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Association-informationBindRes{APPLICATION-CONTEXT:Protocols}  ::=
 *   SEQUENCE SIZE (1) OF
 *     EXTERNAL (
 *       WITH COMPONENTS {
 *         identification         (WITH COMPONENTS {..., syntax ABSENT}),
 *         data-value-descriptor  ABSENT,
 *         data-value             (CONTAINING TheOsiBindRes{{Protocols}})})
 * ```
 */
export type Association_informationBindRes = EXTERNAL[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Association_informationBindRes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Association_informationBindRes */
let _cached_decoder_for_Association_informationBindRes: $.ASN1Decoder<
    Association_informationBindRes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Association_informationBindRes */

/* START_OF_SYMBOL_DEFINITION _decode_Association_informationBindRes */
/**
 * @summary Decodes an ASN.1 element into a(n) Association_informationBindRes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Association_informationBindRes} The decoded data structure.
 */
export function _decode_Association_informationBindRes(el: _Element) {
    if (!_cached_decoder_for_Association_informationBindRes) {
        _cached_decoder_for_Association_informationBindRes = $._decodeSequenceOf<
            EXTERNAL
        >(() => $._decodeExternal);
    }
    return _cached_decoder_for_Association_informationBindRes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Association_informationBindRes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Association_informationBindRes */
let _cached_encoder_for_Association_informationBindRes: $.ASN1Encoder<
    Association_informationBindRes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Association_informationBindRes */

/* START_OF_SYMBOL_DEFINITION _encode_Association_informationBindRes */
/**
 * @summary Encodes a(n) Association_informationBindRes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Association_informationBindRes, encoded as an ASN.1 Element.
 */
export function _encode_Association_informationBindRes(
    value: Association_informationBindRes,
    elGetter: $.ASN1Encoder<Association_informationBindRes>
) {
    if (!_cached_encoder_for_Association_informationBindRes) {
        _cached_encoder_for_Association_informationBindRes = $._encodeSequenceOf<
            EXTERNAL
        >(() => $._encodeExternal, $.BER);
    }
    return _cached_encoder_for_Association_informationBindRes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Association_informationBindRes */

/* eslint-enable */
