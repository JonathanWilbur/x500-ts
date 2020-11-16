/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI_Stub/AlgorithmIdentifier.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI_Stub/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION MultiplePublicKeyAlgo */
/**
 * @summary MultiplePublicKeyAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MultiplePublicKeyAlgo  ::=  SEQUENCE SIZE (1..MAX) OF
 *   algo  AlgorithmIdentifier{{SupportedPublicKeyAlgorithms}}
 * ```
 */
export type MultiplePublicKeyAlgo = AlgorithmIdentifier[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION MultiplePublicKeyAlgo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MultiplePublicKeyAlgo */
let _cached_decoder_for_MultiplePublicKeyAlgo: $.ASN1Decoder<
    MultiplePublicKeyAlgo
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MultiplePublicKeyAlgo */

/* START_OF_SYMBOL_DEFINITION _decode_MultiplePublicKeyAlgo */
/**
 * @summary Decodes an ASN.1 element into a(n) MultiplePublicKeyAlgo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultiplePublicKeyAlgo} The decoded data structure.
 */
export function _decode_MultiplePublicKeyAlgo(el: _Element) {
    if (!_cached_decoder_for_MultiplePublicKeyAlgo) {
        _cached_decoder_for_MultiplePublicKeyAlgo = $._decodeSequenceOf<
            AlgorithmIdentifier
        >(() => _decode_AlgorithmIdentifier);
    }
    return _cached_decoder_for_MultiplePublicKeyAlgo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MultiplePublicKeyAlgo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MultiplePublicKeyAlgo */
let _cached_encoder_for_MultiplePublicKeyAlgo: $.ASN1Encoder<
    MultiplePublicKeyAlgo
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MultiplePublicKeyAlgo */

/* START_OF_SYMBOL_DEFINITION _encode_MultiplePublicKeyAlgo */
/**
 * @summary Encodes a(n) MultiplePublicKeyAlgo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultiplePublicKeyAlgo, encoded as an ASN.1 Element.
 */
export function _encode_MultiplePublicKeyAlgo(
    value: MultiplePublicKeyAlgo,
    elGetter: $.ASN1Encoder<MultiplePublicKeyAlgo>
) {
    if (!_cached_encoder_for_MultiplePublicKeyAlgo) {
        _cached_encoder_for_MultiplePublicKeyAlgo = $._encodeSequenceOf<
            AlgorithmIdentifier
        >(() => _encode_AlgorithmIdentifier, $.BER);
    }
    return _cached_encoder_for_MultiplePublicKeyAlgo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MultiplePublicKeyAlgo */

/* eslint-enable */
