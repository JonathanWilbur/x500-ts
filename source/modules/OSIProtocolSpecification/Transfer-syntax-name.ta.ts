/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Transfer_syntax_name */
/**
 * @summary Transfer_syntax_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Transfer-syntax-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Transfer_syntax_name = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION Transfer_syntax_name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Transfer_syntax_name */
let _cached_decoder_for_Transfer_syntax_name: $.ASN1Decoder<Transfer_syntax_name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Transfer_syntax_name */

/* START_OF_SYMBOL_DEFINITION _decode_Transfer_syntax_name */
/**
 * @summary Decodes an ASN.1 element into a(n) Transfer_syntax_name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Transfer_syntax_name} The decoded data structure.
 */
export function _decode_Transfer_syntax_name(el: _Element) {
    if (!_cached_decoder_for_Transfer_syntax_name) {
        _cached_decoder_for_Transfer_syntax_name = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_Transfer_syntax_name(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Transfer_syntax_name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Transfer_syntax_name */
let _cached_encoder_for_Transfer_syntax_name: $.ASN1Encoder<Transfer_syntax_name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Transfer_syntax_name */

/* START_OF_SYMBOL_DEFINITION _encode_Transfer_syntax_name */
/**
 * @summary Encodes a(n) Transfer_syntax_name into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Transfer_syntax_name, encoded as an ASN.1 Element.
 */
export function _encode_Transfer_syntax_name(
    value: Transfer_syntax_name,
    elGetter: $.ASN1Encoder<Transfer_syntax_name>
) {
    if (!_cached_encoder_for_Transfer_syntax_name) {
        _cached_encoder_for_Transfer_syntax_name = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_Transfer_syntax_name(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Transfer_syntax_name */

/* eslint-enable */
