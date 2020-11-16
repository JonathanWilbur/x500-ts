/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca";

/* START_OF_SYMBOL_DEFINITION TheOsiBindRes */
/**
 * @summary TheOsiBindRes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TheOsiBindRes{APPLICATION-CONTEXT:Protocols}  ::=
 *   [17]  APPLICATION-CONTEXT.&bind-operation.&ResultType({Protocols})
 * ```
 */
export type TheOsiBindRes = _Element; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION TheOsiBindRes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TheOsiBindRes */
let _cached_decoder_for_TheOsiBindRes: $.ASN1Decoder<
    TheOsiBindRes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TheOsiBindRes */

/* START_OF_SYMBOL_DEFINITION _decode_TheOsiBindRes */
/**
 * @summary Decodes an ASN.1 element into a(n) TheOsiBindRes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TheOsiBindRes} The decoded data structure.
 */
export function _decode_TheOsiBindRes(el: _Element) {
    if (!_cached_decoder_for_TheOsiBindRes) {
        _cached_decoder_for_TheOsiBindRes = $._decode_explicit<TheOsiBindRes>(
            () => $._decodeAny
        );
    }
    return _cached_decoder_for_TheOsiBindRes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TheOsiBindRes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TheOsiBindRes */
let _cached_encoder_for_TheOsiBindRes: $.ASN1Encoder<
    TheOsiBindRes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TheOsiBindRes */

/* START_OF_SYMBOL_DEFINITION _encode_TheOsiBindRes */
/**
 * @summary Encodes a(n) TheOsiBindRes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TheOsiBindRes, encoded as an ASN.1 Element.
 */
export function _encode_TheOsiBindRes(
    value: TheOsiBindRes,
    elGetter: $.ASN1Encoder<TheOsiBindRes>
) {
    if (!_cached_encoder_for_TheOsiBindRes) {
        _cached_encoder_for_TheOsiBindRes = $._encode_explicit(
            _TagClass.context,
            17,
            () => $._encodeAny,
            $.BER
        );
    }
    return _cached_encoder_for_TheOsiBindRes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TheOsiBindRes */

/* eslint-enable */
