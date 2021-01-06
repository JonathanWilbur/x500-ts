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

/* START_OF_SYMBOL_DEFINITION MultipleAuthenEncryptAlgo */
/**
 * @summary MultipleAuthenEncryptAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MultipleAuthenEncryptAlgo  ::=  SEQUENCE SIZE (1..MAX) OF
 *   algo       AlgorithmIdentifier{{SupportedAuthenEncryptAlgorithms}}
 * ```
 */
export type MultipleAuthenEncryptAlgo = AlgorithmIdentifier[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION MultipleAuthenEncryptAlgo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MultipleAuthenEncryptAlgo */
let _cached_decoder_for_MultipleAuthenEncryptAlgo: $.ASN1Decoder<MultipleAuthenEncryptAlgo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MultipleAuthenEncryptAlgo */

/* START_OF_SYMBOL_DEFINITION _decode_MultipleAuthenEncryptAlgo */
/**
 * @summary Decodes an ASN.1 element into a(n) MultipleAuthenEncryptAlgo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleAuthenEncryptAlgo} The decoded data structure.
 */
export function _decode_MultipleAuthenEncryptAlgo(el: _Element) {
    if (!_cached_decoder_for_MultipleAuthenEncryptAlgo) {
        _cached_decoder_for_MultipleAuthenEncryptAlgo = $._decodeSequenceOf<AlgorithmIdentifier>(
            () => _decode_AlgorithmIdentifier
        );
    }
    return _cached_decoder_for_MultipleAuthenEncryptAlgo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MultipleAuthenEncryptAlgo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MultipleAuthenEncryptAlgo */
let _cached_encoder_for_MultipleAuthenEncryptAlgo: $.ASN1Encoder<MultipleAuthenEncryptAlgo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MultipleAuthenEncryptAlgo */

/* START_OF_SYMBOL_DEFINITION _encode_MultipleAuthenEncryptAlgo */
/**
 * @summary Encodes a(n) MultipleAuthenEncryptAlgo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleAuthenEncryptAlgo, encoded as an ASN.1 Element.
 */
export function _encode_MultipleAuthenEncryptAlgo(
    value: MultipleAuthenEncryptAlgo,
    elGetter: $.ASN1Encoder<MultipleAuthenEncryptAlgo>
) {
    if (!_cached_encoder_for_MultipleAuthenEncryptAlgo) {
        _cached_encoder_for_MultipleAuthenEncryptAlgo = $._encodeSequenceOf<AlgorithmIdentifier>(
            () => _encode_AlgorithmIdentifier,
            $.BER
        );
    }
    return _cached_encoder_for_MultipleAuthenEncryptAlgo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MultipleAuthenEncryptAlgo */

/* eslint-enable */
