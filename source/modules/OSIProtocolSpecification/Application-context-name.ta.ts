/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Application_context_name */
/**
 * @summary Application_context_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Application-context-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Application_context_name = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION Application_context_name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Application_context_name */
let _cached_decoder_for_Application_context_name: $.ASN1Decoder<
    Application_context_name
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Application_context_name */

/* START_OF_SYMBOL_DEFINITION _decode_Application_context_name */
/**
 * @summary Decodes an ASN.1 element into a(n) Application_context_name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Application_context_name} The decoded data structure.
 */
export function _decode_Application_context_name(el: _Element) {
    if (!_cached_decoder_for_Application_context_name) {
        _cached_decoder_for_Application_context_name =
            $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_Application_context_name(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Application_context_name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Application_context_name */
let _cached_encoder_for_Application_context_name: $.ASN1Encoder<
    Application_context_name
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Application_context_name */

/* START_OF_SYMBOL_DEFINITION _encode_Application_context_name */
/**
 * @summary Encodes a(n) Application_context_name into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Application_context_name, encoded as an ASN.1 Element.
 */
export function _encode_Application_context_name(
    value: Application_context_name,
    elGetter: $.ASN1Encoder<Application_context_name>
) {
    if (!_cached_encoder_for_Application_context_name) {
        _cached_encoder_for_Application_context_name =
            $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_Application_context_name(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Application_context_name */

/* eslint-enable */
