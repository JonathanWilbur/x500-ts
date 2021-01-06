/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ApplicationContext */
/**
 * @summary ApplicationContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationContext  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ApplicationContext = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION ApplicationContext */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationContext */
let _cached_decoder_for_ApplicationContext: $.ASN1Decoder<ApplicationContext> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationContext */

/* START_OF_SYMBOL_DEFINITION _decode_ApplicationContext */
/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationContext
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplicationContext} The decoded data structure.
 */
export function _decode_ApplicationContext(el: _Element) {
    if (!_cached_decoder_for_ApplicationContext) {
        _cached_decoder_for_ApplicationContext = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_ApplicationContext(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ApplicationContext */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationContext */
let _cached_encoder_for_ApplicationContext: $.ASN1Encoder<ApplicationContext> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationContext */

/* START_OF_SYMBOL_DEFINITION _encode_ApplicationContext */
/**
 * @summary Encodes a(n) ApplicationContext into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationContext, encoded as an ASN.1 Element.
 */
export function _encode_ApplicationContext(
    value: ApplicationContext,
    elGetter: $.ASN1Encoder<ApplicationContext>
) {
    if (!_cached_encoder_for_ApplicationContext) {
        _cached_encoder_for_ApplicationContext = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_ApplicationContext(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ApplicationContext */

/* eslint-enable */
