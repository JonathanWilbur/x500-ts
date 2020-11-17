/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { ALGORITHM } from "../PKI-Stub/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION AlgoInvoke */
/**
 * @summary AlgoInvoke
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgoInvoke{ALGORITHM:SupportedAlgorithms}  ::=
 *     ALGORITHM.&DynParms({SupportedAlgorithms})
 * ```
 */
export type AlgoInvoke = _Element; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION AlgoInvoke */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlgoInvoke */
let _cached_decoder_for_AlgoInvoke: $.ASN1Decoder<AlgoInvoke> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlgoInvoke */

/* START_OF_SYMBOL_DEFINITION _decode_AlgoInvoke */
/**
 * @summary Decodes an ASN.1 element into a(n) AlgoInvoke
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlgoInvoke} The decoded data structure.
 */
export function _decode_AlgoInvoke(el: _Element) {
    if (!_cached_decoder_for_AlgoInvoke) {
        _cached_decoder_for_AlgoInvoke = $._decodeAny;
    }
    return _cached_decoder_for_AlgoInvoke(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlgoInvoke */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlgoInvoke */
let _cached_encoder_for_AlgoInvoke: $.ASN1Encoder<AlgoInvoke> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlgoInvoke */

/* START_OF_SYMBOL_DEFINITION _encode_AlgoInvoke */
/**
 * @summary Encodes a(n) AlgoInvoke into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlgoInvoke, encoded as an ASN.1 Element.
 */
export function _encode_AlgoInvoke(
    value: AlgoInvoke,
    elGetter: $.ASN1Encoder<AlgoInvoke>
) {
    if (!_cached_encoder_for_AlgoInvoke) {
        _cached_encoder_for_AlgoInvoke = $._encodeAny;
    }
    return _cached_encoder_for_AlgoInvoke(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlgoInvoke */

/* eslint-enable */
