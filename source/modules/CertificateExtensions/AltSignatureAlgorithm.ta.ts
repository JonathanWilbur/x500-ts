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

/* START_OF_SYMBOL_DEFINITION AltSignatureAlgorithm */
/**
 * @summary AltSignatureAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AltSignatureAlgorithm  ::=  AlgorithmIdentifier{{SupportedAlgorithms}}
 * ```
 */
export type AltSignatureAlgorithm = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION AltSignatureAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AltSignatureAlgorithm */
let _cached_decoder_for_AltSignatureAlgorithm: $.ASN1Decoder<
    AltSignatureAlgorithm
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AltSignatureAlgorithm */

/* START_OF_SYMBOL_DEFINITION _decode_AltSignatureAlgorithm */
/**
 * @summary Decodes an ASN.1 element into a(n) AltSignatureAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AltSignatureAlgorithm} The decoded data structure.
 */
export function _decode_AltSignatureAlgorithm(el: _Element) {
    if (!_cached_decoder_for_AltSignatureAlgorithm) {
        _cached_decoder_for_AltSignatureAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_AltSignatureAlgorithm(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AltSignatureAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AltSignatureAlgorithm */
let _cached_encoder_for_AltSignatureAlgorithm: $.ASN1Encoder<
    AltSignatureAlgorithm
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AltSignatureAlgorithm */

/* START_OF_SYMBOL_DEFINITION _encode_AltSignatureAlgorithm */
/**
 * @summary Encodes a(n) AltSignatureAlgorithm into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AltSignatureAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_AltSignatureAlgorithm(
    value: AltSignatureAlgorithm,
    elGetter: $.ASN1Encoder<AltSignatureAlgorithm>
) {
    if (!_cached_encoder_for_AltSignatureAlgorithm) {
        _cached_encoder_for_AltSignatureAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_AltSignatureAlgorithm(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AltSignatureAlgorithm */

/* eslint-enable */
