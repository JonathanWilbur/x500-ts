/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI-Stub/AlgorithmIdentifier.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI-Stub/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION MultipleHashAlgo */
/**
 * @summary MultipleHashAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MultipleHashAlgo  ::=  SEQUENCE SIZE (1..MAX) OF
 *   algo  AlgorithmIdentifier{{SupportedHashAlgorithms}}
 * ```
 */
export type MultipleHashAlgo = AlgorithmIdentifier[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION MultipleHashAlgo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MultipleHashAlgo */
let _cached_decoder_for_MultipleHashAlgo: $.ASN1Decoder<
    MultipleHashAlgo
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MultipleHashAlgo */

/* START_OF_SYMBOL_DEFINITION _decode_MultipleHashAlgo */
/**
 * @summary Decodes an ASN.1 element into a(n) MultipleHashAlgo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleHashAlgo} The decoded data structure.
 */
export function _decode_MultipleHashAlgo(el: _Element) {
    if (!_cached_decoder_for_MultipleHashAlgo) {
        _cached_decoder_for_MultipleHashAlgo = $._decodeSequenceOf<
            AlgorithmIdentifier
        >(() => _decode_AlgorithmIdentifier);
    }
    return _cached_decoder_for_MultipleHashAlgo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MultipleHashAlgo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MultipleHashAlgo */
let _cached_encoder_for_MultipleHashAlgo: $.ASN1Encoder<
    MultipleHashAlgo
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MultipleHashAlgo */

/* START_OF_SYMBOL_DEFINITION _encode_MultipleHashAlgo */
/**
 * @summary Encodes a(n) MultipleHashAlgo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleHashAlgo, encoded as an ASN.1 Element.
 */
export function _encode_MultipleHashAlgo(
    value: MultipleHashAlgo,
    elGetter: $.ASN1Encoder<MultipleHashAlgo>
) {
    if (!_cached_encoder_for_MultipleHashAlgo) {
        _cached_encoder_for_MultipleHashAlgo = $._encodeSequenceOf<
            AlgorithmIdentifier
        >(() => _encode_AlgorithmIdentifier, $.BER);
    }
    return _cached_encoder_for_MultipleHashAlgo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MultipleHashAlgo */

/* eslint-enable */
