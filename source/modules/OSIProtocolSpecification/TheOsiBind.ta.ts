/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca";

/* START_OF_SYMBOL_DEFINITION TheOsiBind */
/**
 * @summary TheOsiBind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TheOsiBind{APPLICATION-CONTEXT:Protocols}  ::=
 *   [16]  APPLICATION-CONTEXT.&bind-operation.&ArgumentType({Protocols})
 * ```
 */
export type TheOsiBind = _Element; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION TheOsiBind */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TheOsiBind */
let _cached_decoder_for_TheOsiBind: $.ASN1Decoder<TheOsiBind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TheOsiBind */

/* START_OF_SYMBOL_DEFINITION _decode_TheOsiBind */
/**
 * @summary Decodes an ASN.1 element into a(n) TheOsiBind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TheOsiBind} The decoded data structure.
 */
export function _decode_TheOsiBind(el: _Element) {
    if (!_cached_decoder_for_TheOsiBind) {
        _cached_decoder_for_TheOsiBind = $._decode_explicit<TheOsiBind>(
            () => $._decodeAny
        );
    }
    return _cached_decoder_for_TheOsiBind(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TheOsiBind */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TheOsiBind */
let _cached_encoder_for_TheOsiBind: $.ASN1Encoder<TheOsiBind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TheOsiBind */

/* START_OF_SYMBOL_DEFINITION _encode_TheOsiBind */
/**
 * @summary Encodes a(n) TheOsiBind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TheOsiBind, encoded as an ASN.1 Element.
 */
export function _encode_TheOsiBind(
    value: TheOsiBind,
    elGetter: $.ASN1Encoder<TheOsiBind>
) {
    if (!_cached_encoder_for_TheOsiBind) {
        _cached_encoder_for_TheOsiBind = $._encode_explicit(
            _TagClass.context,
            16,
            () => $._encodeAny,
            $.BER
        );
    }
    return _cached_encoder_for_TheOsiBind(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TheOsiBind */

/* eslint-enable */
