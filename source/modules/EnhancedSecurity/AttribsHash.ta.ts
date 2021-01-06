/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    HASH,
    _get_decoder_for_HASH,
    _get_encoder_for_HASH,
} from "../AuthenticationFramework/HASH.ta";
import {
    HashedAttributes,
    _decode_HashedAttributes,
    _encode_HashedAttributes,
} from "../EnhancedSecurity/HashedAttributes.ta";
export {
    HASH,
    _get_decoder_for_HASH,
    _get_encoder_for_HASH,
} from "../AuthenticationFramework/HASH.ta";
export {
    HashedAttributes,
    _decode_HashedAttributes,
    _encode_HashedAttributes,
} from "../EnhancedSecurity/HashedAttributes.ta";

/* START_OF_SYMBOL_DEFINITION AttribsHash */
/**
 * @summary AttribsHash
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttribsHash  ::=  HASH{HashedAttributes}
 * ```
 */
export type AttribsHash = HASH<HashedAttributes>; // DefinedType
/* END_OF_SYMBOL_DEFINITION AttribsHash */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttribsHash */
let _cached_decoder_for_AttribsHash: $.ASN1Decoder<AttribsHash> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttribsHash */

/* START_OF_SYMBOL_DEFINITION _decode_AttribsHash */
/**
 * @summary Decodes an ASN.1 element into a(n) AttribsHash
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttribsHash} The decoded data structure.
 */
export function _decode_AttribsHash(el: _Element) {
    if (!_cached_decoder_for_AttribsHash) {
        _cached_decoder_for_AttribsHash = _get_decoder_for_HASH<HashedAttributes>(
            _decode_HashedAttributes
        );
    }
    return _cached_decoder_for_AttribsHash(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttribsHash */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttribsHash */
let _cached_encoder_for_AttribsHash: $.ASN1Encoder<AttribsHash> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttribsHash */

/* START_OF_SYMBOL_DEFINITION _encode_AttribsHash */
/**
 * @summary Encodes a(n) AttribsHash into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttribsHash, encoded as an ASN.1 Element.
 */
export function _encode_AttribsHash(
    value: AttribsHash,
    elGetter: $.ASN1Encoder<AttribsHash>
) {
    if (!_cached_encoder_for_AttribsHash) {
        _cached_encoder_for_AttribsHash = _get_encoder_for_HASH<HashedAttributes>(
            _encode_HashedAttributes
        );
    }
    return _cached_encoder_for_AttribsHash(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttribsHash */

/* eslint-enable */
