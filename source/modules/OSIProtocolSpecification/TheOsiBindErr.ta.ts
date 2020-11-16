/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca";

/* START_OF_SYMBOL_DEFINITION TheOsiBindErr */
/**
 * @summary TheOsiBindErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TheOsiBindErr{APPLICATION-CONTEXT:Protocols}  ::=
 *   [18]  APPLICATION-CONTEXT.&bind-operation.&Errors.&ParameterType ({Protocols})
 * ```
 */
export type TheOsiBindErr = _Element; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION TheOsiBindErr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TheOsiBindErr */
let _cached_decoder_for_TheOsiBindErr: $.ASN1Decoder<
    TheOsiBindErr
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TheOsiBindErr */

/* START_OF_SYMBOL_DEFINITION _decode_TheOsiBindErr */
/**
 * @summary Decodes an ASN.1 element into a(n) TheOsiBindErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TheOsiBindErr} The decoded data structure.
 */
export function _decode_TheOsiBindErr(el: _Element) {
    if (!_cached_decoder_for_TheOsiBindErr) {
        _cached_decoder_for_TheOsiBindErr = $._decode_explicit<TheOsiBindErr>(
            () => $._decodeAny
        );
    }
    return _cached_decoder_for_TheOsiBindErr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TheOsiBindErr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TheOsiBindErr */
let _cached_encoder_for_TheOsiBindErr: $.ASN1Encoder<
    TheOsiBindErr
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TheOsiBindErr */

/* START_OF_SYMBOL_DEFINITION _encode_TheOsiBindErr */
/**
 * @summary Encodes a(n) TheOsiBindErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TheOsiBindErr, encoded as an ASN.1 Element.
 */
export function _encode_TheOsiBindErr(
    value: TheOsiBindErr,
    elGetter: $.ASN1Encoder<TheOsiBindErr>
) {
    if (!_cached_encoder_for_TheOsiBindErr) {
        _cached_encoder_for_TheOsiBindErr = $._encode_explicit(
            _TagClass.context,
            18,
            () => $._encodeAny,
            $.BER
        );
    }
    return _cached_encoder_for_TheOsiBindErr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TheOsiBindErr */

/* eslint-enable */
