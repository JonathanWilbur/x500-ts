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

/* START_OF_SYMBOL_DEFINITION PwdEncAlg */
/**
 * @summary PwdEncAlg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdEncAlg  ::=  AlgorithmIdentifier{{SupportedAlgorithms}}
 * ```
 */
export type PwdEncAlg = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION PwdEncAlg */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdEncAlg */
let _cached_decoder_for_PwdEncAlg: $.ASN1Decoder<PwdEncAlg> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdEncAlg */

/* START_OF_SYMBOL_DEFINITION _decode_PwdEncAlg */
/**
 * @summary Decodes an ASN.1 element into a(n) PwdEncAlg
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdEncAlg} The decoded data structure.
 */
export function _decode_PwdEncAlg(el: _Element) {
    if (!_cached_decoder_for_PwdEncAlg) {
        _cached_decoder_for_PwdEncAlg = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_PwdEncAlg(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PwdEncAlg */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdEncAlg */
let _cached_encoder_for_PwdEncAlg: $.ASN1Encoder<PwdEncAlg> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdEncAlg */

/* START_OF_SYMBOL_DEFINITION _encode_PwdEncAlg */
/**
 * @summary Encodes a(n) PwdEncAlg into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdEncAlg, encoded as an ASN.1 Element.
 */
export function _encode_PwdEncAlg(
    value: PwdEncAlg,
    elGetter: $.ASN1Encoder<PwdEncAlg>
) {
    if (!_cached_encoder_for_PwdEncAlg) {
        _cached_encoder_for_PwdEncAlg = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_PwdEncAlg(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PwdEncAlg */

/* eslint-enable */
