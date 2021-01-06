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

/* START_OF_SYMBOL_DEFINITION MultipleIcvAlgo */
/**
 * @summary MultipleIcvAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MultipleIcvAlgo  ::=  SEQUENCE SIZE (1..MAX) OF
 *   algo  AlgorithmIdentifier{{SupportedIcvAlgorithms}}
 * ```
 */
export type MultipleIcvAlgo = AlgorithmIdentifier[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION MultipleIcvAlgo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MultipleIcvAlgo */
let _cached_decoder_for_MultipleIcvAlgo: $.ASN1Decoder<MultipleIcvAlgo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MultipleIcvAlgo */

/* START_OF_SYMBOL_DEFINITION _decode_MultipleIcvAlgo */
/**
 * @summary Decodes an ASN.1 element into a(n) MultipleIcvAlgo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleIcvAlgo} The decoded data structure.
 */
export function _decode_MultipleIcvAlgo(el: _Element) {
    if (!_cached_decoder_for_MultipleIcvAlgo) {
        _cached_decoder_for_MultipleIcvAlgo = $._decodeSequenceOf<AlgorithmIdentifier>(
            () => _decode_AlgorithmIdentifier
        );
    }
    return _cached_decoder_for_MultipleIcvAlgo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MultipleIcvAlgo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MultipleIcvAlgo */
let _cached_encoder_for_MultipleIcvAlgo: $.ASN1Encoder<MultipleIcvAlgo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MultipleIcvAlgo */

/* START_OF_SYMBOL_DEFINITION _encode_MultipleIcvAlgo */
/**
 * @summary Encodes a(n) MultipleIcvAlgo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleIcvAlgo, encoded as an ASN.1 Element.
 */
export function _encode_MultipleIcvAlgo(
    value: MultipleIcvAlgo,
    elGetter: $.ASN1Encoder<MultipleIcvAlgo>
) {
    if (!_cached_encoder_for_MultipleIcvAlgo) {
        _cached_encoder_for_MultipleIcvAlgo = $._encodeSequenceOf<AlgorithmIdentifier>(
            () => _encode_AlgorithmIdentifier,
            $.BER
        );
    }
    return _cached_encoder_for_MultipleIcvAlgo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MultipleIcvAlgo */

/* eslint-enable */
