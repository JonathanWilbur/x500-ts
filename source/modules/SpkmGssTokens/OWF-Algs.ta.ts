/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION OWF_Algs */
/**
 * @summary OWF_Algs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OWF-Algs  ::=  SEQUENCE OF AlgorithmIdentifier{{SupportedAlgorithms}}
 * ```
 */
export type OWF_Algs = AlgorithmIdentifier[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION OWF_Algs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OWF_Algs */
let _cached_decoder_for_OWF_Algs: $.ASN1Decoder<OWF_Algs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OWF_Algs */

/* START_OF_SYMBOL_DEFINITION _decode_OWF_Algs */
/**
 * @summary Decodes an ASN.1 element into a(n) OWF_Algs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OWF_Algs} The decoded data structure.
 */
export function _decode_OWF_Algs(el: _Element) {
    if (!_cached_decoder_for_OWF_Algs) {
        _cached_decoder_for_OWF_Algs = $._decodeSequenceOf<AlgorithmIdentifier>(
            () => _decode_AlgorithmIdentifier
        );
    }
    return _cached_decoder_for_OWF_Algs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OWF_Algs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OWF_Algs */
let _cached_encoder_for_OWF_Algs: $.ASN1Encoder<OWF_Algs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OWF_Algs */

/* START_OF_SYMBOL_DEFINITION _encode_OWF_Algs */
/**
 * @summary Encodes a(n) OWF_Algs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OWF_Algs, encoded as an ASN.1 Element.
 */
export function _encode_OWF_Algs(
    value: OWF_Algs,
    elGetter: $.ASN1Encoder<OWF_Algs>
) {
    if (!_cached_encoder_for_OWF_Algs) {
        _cached_encoder_for_OWF_Algs = $._encodeSequenceOf<AlgorithmIdentifier>(
            () => _encode_AlgorithmIdentifier,
            $.BER
        );
    }
    return _cached_encoder_for_OWF_Algs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OWF_Algs */

/* eslint-enable */
