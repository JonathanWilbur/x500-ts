/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Extension,
    _decode_Extension,
    _encode_Extension,
} from "../PKI_Stub/Extension.ta";
export {
    Extension,
    _decode_Extension,
    _encode_Extension,
} from "../PKI_Stub/Extension.ta";

/* START_OF_SYMBOL_DEFINITION Extensions */
/**
 * @summary Extensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Extensions  ::=  SEQUENCE SIZE (1..MAX) OF Extension
 * ```
 */
export type Extensions = Extension[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Extensions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Extensions */
let _cached_decoder_for_Extensions: $.ASN1Decoder<Extensions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Extensions */

/* START_OF_SYMBOL_DEFINITION _decode_Extensions */
/**
 * @summary Decodes an ASN.1 element into a(n) Extensions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Extensions} The decoded data structure.
 */
export function _decode_Extensions(el: _Element) {
    if (!_cached_decoder_for_Extensions) {
        _cached_decoder_for_Extensions = $._decodeSequenceOf<Extension>(
            () => _decode_Extension
        );
    }
    return _cached_decoder_for_Extensions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Extensions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Extensions */
let _cached_encoder_for_Extensions: $.ASN1Encoder<Extensions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Extensions */

/* START_OF_SYMBOL_DEFINITION _encode_Extensions */
/**
 * @summary Encodes a(n) Extensions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Extensions, encoded as an ASN.1 Element.
 */
export function _encode_Extensions(
    value: Extensions,
    elGetter: $.ASN1Encoder<Extensions>
) {
    if (!_cached_encoder_for_Extensions) {
        _cached_encoder_for_Extensions = $._encodeSequenceOf<Extension>(
            () => _encode_Extension,
            $.BER
        );
    }
    return _cached_encoder_for_Extensions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Extensions */

/* eslint-enable */
