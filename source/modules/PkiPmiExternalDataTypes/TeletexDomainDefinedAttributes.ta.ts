/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    TeletexDomainDefinedAttribute,
    _decode_TeletexDomainDefinedAttribute,
    _encode_TeletexDomainDefinedAttribute,
} from "../PkiPmiExternalDataTypes/TeletexDomainDefinedAttribute.ta";
export {
    TeletexDomainDefinedAttribute,
    _decode_TeletexDomainDefinedAttribute,
    _encode_TeletexDomainDefinedAttribute,
} from "../PkiPmiExternalDataTypes/TeletexDomainDefinedAttribute.ta";

/* START_OF_SYMBOL_DEFINITION TeletexDomainDefinedAttributes */
/**
 * @summary TeletexDomainDefinedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexDomainDefinedAttributes  ::=
 *   SEQUENCE SIZE (1..ub-domain-defined-attributes) OF
 *     TeletexDomainDefinedAttribute
 * ```
 */
export type TeletexDomainDefinedAttributes = TeletexDomainDefinedAttribute[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION TeletexDomainDefinedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TeletexDomainDefinedAttributes */
let _cached_decoder_for_TeletexDomainDefinedAttributes: $.ASN1Decoder<TeletexDomainDefinedAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TeletexDomainDefinedAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_TeletexDomainDefinedAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) TeletexDomainDefinedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexDomainDefinedAttributes} The decoded data structure.
 */
export function _decode_TeletexDomainDefinedAttributes(el: _Element) {
    if (!_cached_decoder_for_TeletexDomainDefinedAttributes) {
        _cached_decoder_for_TeletexDomainDefinedAttributes = $._decodeSequenceOf<TeletexDomainDefinedAttribute>(
            () => _decode_TeletexDomainDefinedAttribute
        );
    }
    return _cached_decoder_for_TeletexDomainDefinedAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TeletexDomainDefinedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TeletexDomainDefinedAttributes */
let _cached_encoder_for_TeletexDomainDefinedAttributes: $.ASN1Encoder<TeletexDomainDefinedAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TeletexDomainDefinedAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_TeletexDomainDefinedAttributes */
/**
 * @summary Encodes a(n) TeletexDomainDefinedAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexDomainDefinedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_TeletexDomainDefinedAttributes(
    value: TeletexDomainDefinedAttributes,
    elGetter: $.ASN1Encoder<TeletexDomainDefinedAttributes>
) {
    if (!_cached_encoder_for_TeletexDomainDefinedAttributes) {
        _cached_encoder_for_TeletexDomainDefinedAttributes = $._encodeSequenceOf<TeletexDomainDefinedAttribute>(
            () => _encode_TeletexDomainDefinedAttribute,
            $.BER
        );
    }
    return _cached_encoder_for_TeletexDomainDefinedAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TeletexDomainDefinedAttributes */

/* eslint-enable */
