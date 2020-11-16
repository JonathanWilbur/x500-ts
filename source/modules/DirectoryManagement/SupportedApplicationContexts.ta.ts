/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION SupportedApplicationContexts */
/**
 * @summary SupportedApplicationContexts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedApplicationContexts  ::=  SET OF OBJECT IDENTIFIER
 * ```
 */
export type SupportedApplicationContexts = OBJECT_IDENTIFIER[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SupportedApplicationContexts */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedApplicationContexts */
let _cached_decoder_for_SupportedApplicationContexts: $.ASN1Decoder<
    SupportedApplicationContexts
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedApplicationContexts */

/* START_OF_SYMBOL_DEFINITION _decode_SupportedApplicationContexts */
/**
 * @summary Decodes an ASN.1 element into a(n) SupportedApplicationContexts
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedApplicationContexts} The decoded data structure.
 */
export function _decode_SupportedApplicationContexts(el: _Element) {
    if (!_cached_decoder_for_SupportedApplicationContexts) {
        _cached_decoder_for_SupportedApplicationContexts = $._decodeSetOf<
            OBJECT_IDENTIFIER
        >(() => $._decodeObjectIdentifier);
    }
    return _cached_decoder_for_SupportedApplicationContexts(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SupportedApplicationContexts */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedApplicationContexts */
let _cached_encoder_for_SupportedApplicationContexts: $.ASN1Encoder<
    SupportedApplicationContexts
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedApplicationContexts */

/* START_OF_SYMBOL_DEFINITION _encode_SupportedApplicationContexts */
/**
 * @summary Encodes a(n) SupportedApplicationContexts into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedApplicationContexts, encoded as an ASN.1 Element.
 */
export function _encode_SupportedApplicationContexts(
    value: SupportedApplicationContexts,
    elGetter: $.ASN1Encoder<SupportedApplicationContexts>
) {
    if (!_cached_encoder_for_SupportedApplicationContexts) {
        _cached_encoder_for_SupportedApplicationContexts = $._encodeSetOf<
            OBJECT_IDENTIFIER
        >(() => $._encodeObjectIdentifier, $.BER);
    }
    return _cached_encoder_for_SupportedApplicationContexts(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SupportedApplicationContexts */

/* eslint-enable */
