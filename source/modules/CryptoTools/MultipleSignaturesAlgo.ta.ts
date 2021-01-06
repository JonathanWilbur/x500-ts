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

/* START_OF_SYMBOL_DEFINITION MultipleSignaturesAlgo */
/**
 * @summary MultipleSignaturesAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MultipleSignaturesAlgo  ::=  SEQUENCE SIZE (1..MAX) OF
 *   algo  AlgorithmIdentifier{{SupportedSignatureAlgorithms}}
 * ```
 */
export type MultipleSignaturesAlgo = AlgorithmIdentifier[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION MultipleSignaturesAlgo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MultipleSignaturesAlgo */
let _cached_decoder_for_MultipleSignaturesAlgo: $.ASN1Decoder<MultipleSignaturesAlgo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MultipleSignaturesAlgo */

/* START_OF_SYMBOL_DEFINITION _decode_MultipleSignaturesAlgo */
/**
 * @summary Decodes an ASN.1 element into a(n) MultipleSignaturesAlgo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleSignaturesAlgo} The decoded data structure.
 */
export function _decode_MultipleSignaturesAlgo(el: _Element) {
    if (!_cached_decoder_for_MultipleSignaturesAlgo) {
        _cached_decoder_for_MultipleSignaturesAlgo = $._decodeSequenceOf<AlgorithmIdentifier>(
            () => _decode_AlgorithmIdentifier
        );
    }
    return _cached_decoder_for_MultipleSignaturesAlgo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MultipleSignaturesAlgo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MultipleSignaturesAlgo */
let _cached_encoder_for_MultipleSignaturesAlgo: $.ASN1Encoder<MultipleSignaturesAlgo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MultipleSignaturesAlgo */

/* START_OF_SYMBOL_DEFINITION _encode_MultipleSignaturesAlgo */
/**
 * @summary Encodes a(n) MultipleSignaturesAlgo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleSignaturesAlgo, encoded as an ASN.1 Element.
 */
export function _encode_MultipleSignaturesAlgo(
    value: MultipleSignaturesAlgo,
    elGetter: $.ASN1Encoder<MultipleSignaturesAlgo>
) {
    if (!_cached_encoder_for_MultipleSignaturesAlgo) {
        _cached_encoder_for_MultipleSignaturesAlgo = $._encodeSequenceOf<AlgorithmIdentifier>(
            () => _encode_AlgorithmIdentifier,
            $.BER
        );
    }
    return _cached_encoder_for_MultipleSignaturesAlgo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MultipleSignaturesAlgo */

/* eslint-enable */
