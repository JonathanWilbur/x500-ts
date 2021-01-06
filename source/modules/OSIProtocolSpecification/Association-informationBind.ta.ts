/* eslint-disable */
import { ASN1Element as _Element, EXTERNAL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Association_informationBind */
/**
 * @summary Association_informationBind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Association-informationBind{APPLICATION-CONTEXT:Protocols}  ::=
 *   SEQUENCE SIZE (1..MAX) OF
 *     EXTERNAL
 *       (WITH COMPONENTS {
 *          identification         (WITH COMPONENTS {..., syntax ABSENT}),
 *          data-value-descriptor  ABSENT,
 *          data-value             (CONTAINING TheOsiBind{{Protocols}})})
 * ```
 */
export type Association_informationBind = EXTERNAL[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Association_informationBind */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Association_informationBind */
let _cached_decoder_for_Association_informationBind: $.ASN1Decoder<Association_informationBind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Association_informationBind */

/* START_OF_SYMBOL_DEFINITION _decode_Association_informationBind */
/**
 * @summary Decodes an ASN.1 element into a(n) Association_informationBind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Association_informationBind} The decoded data structure.
 */
export function _decode_Association_informationBind(el: _Element) {
    if (!_cached_decoder_for_Association_informationBind) {
        _cached_decoder_for_Association_informationBind = $._decodeSequenceOf<EXTERNAL>(
            () => $._decodeExternal
        );
    }
    return _cached_decoder_for_Association_informationBind(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Association_informationBind */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Association_informationBind */
let _cached_encoder_for_Association_informationBind: $.ASN1Encoder<Association_informationBind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Association_informationBind */

/* START_OF_SYMBOL_DEFINITION _encode_Association_informationBind */
/**
 * @summary Encodes a(n) Association_informationBind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Association_informationBind, encoded as an ASN.1 Element.
 */
export function _encode_Association_informationBind(
    value: Association_informationBind,
    elGetter: $.ASN1Encoder<Association_informationBind>
) {
    if (!_cached_encoder_for_Association_informationBind) {
        _cached_encoder_for_Association_informationBind = $._encodeSequenceOf<EXTERNAL>(
            () => $._encodeExternal,
            $.BER
        );
    }
    return _cached_encoder_for_Association_informationBind(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Association_informationBind */

/* eslint-enable */
