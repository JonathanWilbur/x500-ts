/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    HASH,
    _get_decoder_for_HASH,
    _get_encoder_for_HASH,
} from "../AuthenticationFramework/HASH.ta";
import {
    AttributeTypeValueContexts,
    _decode_AttributeTypeValueContexts,
    _encode_AttributeTypeValueContexts,
} from "../EnhancedSecurity/AttributeTypeValueContexts.ta";
export {
    HASH,
    _get_decoder_for_HASH,
    _get_encoder_for_HASH,
} from "../AuthenticationFramework/HASH.ta";
export {
    AttributeTypeValueContexts,
    _decode_AttributeTypeValueContexts,
    _encode_AttributeTypeValueContexts,
} from "../EnhancedSecurity/AttributeTypeValueContexts.ta";

/* START_OF_SYMBOL_DEFINITION AVIHash */
/**
 * @summary AVIHash
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AVIHash  ::=  HASH{AttributeTypeValueContexts}
 * ```
 */
export type AVIHash = HASH<AttributeTypeValueContexts>; // DefinedType
/* END_OF_SYMBOL_DEFINITION AVIHash */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AVIHash */
let _cached_decoder_for_AVIHash: $.ASN1Decoder<AVIHash> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AVIHash */

/* START_OF_SYMBOL_DEFINITION _decode_AVIHash */
/**
 * @summary Decodes an ASN.1 element into a(n) AVIHash
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AVIHash} The decoded data structure.
 */
export function _decode_AVIHash(el: _Element) {
    if (!_cached_decoder_for_AVIHash) {
        _cached_decoder_for_AVIHash = _get_decoder_for_HASH<AttributeTypeValueContexts>(
            _decode_AttributeTypeValueContexts
        );
    }
    return _cached_decoder_for_AVIHash(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AVIHash */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AVIHash */
let _cached_encoder_for_AVIHash: $.ASN1Encoder<AVIHash> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AVIHash */

/* START_OF_SYMBOL_DEFINITION _encode_AVIHash */
/**
 * @summary Encodes a(n) AVIHash into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AVIHash, encoded as an ASN.1 Element.
 */
export function _encode_AVIHash(
    value: AVIHash,
    elGetter: $.ASN1Encoder<AVIHash>
) {
    if (!_cached_encoder_for_AVIHash) {
        _cached_encoder_for_AVIHash = _get_encoder_for_HASH<AttributeTypeValueContexts>(
            _encode_AttributeTypeValueContexts
        );
    }
    return _cached_encoder_for_AVIHash(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AVIHash */

/* eslint-enable */
