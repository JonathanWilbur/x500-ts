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

/* START_OF_SYMBOL_DEFINITION MultipleSymmetricKeyAlgo */
/**
 * @summary MultipleSymmetricKeyAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MultipleSymmetricKeyAlgo  ::=  SEQUENCE SIZE (1..MAX) OF
 *   algo  AlgorithmIdentifier{{SupportedSymmetricKeyAlgorithms}}
 * ```
 */
export type MultipleSymmetricKeyAlgo = AlgorithmIdentifier[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION MultipleSymmetricKeyAlgo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MultipleSymmetricKeyAlgo */
let _cached_decoder_for_MultipleSymmetricKeyAlgo: $.ASN1Decoder<MultipleSymmetricKeyAlgo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MultipleSymmetricKeyAlgo */

/* START_OF_SYMBOL_DEFINITION _decode_MultipleSymmetricKeyAlgo */
/**
 * @summary Decodes an ASN.1 element into a(n) MultipleSymmetricKeyAlgo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleSymmetricKeyAlgo} The decoded data structure.
 */
export function _decode_MultipleSymmetricKeyAlgo(el: _Element) {
    if (!_cached_decoder_for_MultipleSymmetricKeyAlgo) {
        _cached_decoder_for_MultipleSymmetricKeyAlgo = $._decodeSequenceOf<AlgorithmIdentifier>(
            () => _decode_AlgorithmIdentifier
        );
    }
    return _cached_decoder_for_MultipleSymmetricKeyAlgo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MultipleSymmetricKeyAlgo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MultipleSymmetricKeyAlgo */
let _cached_encoder_for_MultipleSymmetricKeyAlgo: $.ASN1Encoder<MultipleSymmetricKeyAlgo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MultipleSymmetricKeyAlgo */

/* START_OF_SYMBOL_DEFINITION _encode_MultipleSymmetricKeyAlgo */
/**
 * @summary Encodes a(n) MultipleSymmetricKeyAlgo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleSymmetricKeyAlgo, encoded as an ASN.1 Element.
 */
export function _encode_MultipleSymmetricKeyAlgo(
    value: MultipleSymmetricKeyAlgo,
    elGetter: $.ASN1Encoder<MultipleSymmetricKeyAlgo>
) {
    if (!_cached_encoder_for_MultipleSymmetricKeyAlgo) {
        _cached_encoder_for_MultipleSymmetricKeyAlgo = $._encodeSequenceOf<AlgorithmIdentifier>(
            () => _encode_AlgorithmIdentifier,
            $.BER
        );
    }
    return _cached_encoder_for_MultipleSymmetricKeyAlgo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MultipleSymmetricKeyAlgo */

/* eslint-enable */
