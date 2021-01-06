/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UniversalDomainDefinedAttribute,
    _decode_UniversalDomainDefinedAttribute,
    _encode_UniversalDomainDefinedAttribute,
} from "../MTSAbstractService/UniversalDomainDefinedAttribute.ta";
export {
    UniversalDomainDefinedAttribute,
    _decode_UniversalDomainDefinedAttribute,
    _encode_UniversalDomainDefinedAttribute,
} from "../MTSAbstractService/UniversalDomainDefinedAttribute.ta";

/* START_OF_SYMBOL_DEFINITION UniversalDomainDefinedAttributes */
/**
 * @summary UniversalDomainDefinedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalDomainDefinedAttributes  ::=
 *   SEQUENCE SIZE (1..ub-domain-defined-attributes) OF
 *     UniversalDomainDefinedAttribute
 * ```
 */
export type UniversalDomainDefinedAttributes = UniversalDomainDefinedAttribute[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION UniversalDomainDefinedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalDomainDefinedAttributes */
let _cached_decoder_for_UniversalDomainDefinedAttributes: $.ASN1Decoder<UniversalDomainDefinedAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalDomainDefinedAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalDomainDefinedAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalDomainDefinedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalDomainDefinedAttributes} The decoded data structure.
 */
export function _decode_UniversalDomainDefinedAttributes(el: _Element) {
    if (!_cached_decoder_for_UniversalDomainDefinedAttributes) {
        _cached_decoder_for_UniversalDomainDefinedAttributes = $._decodeSequenceOf<UniversalDomainDefinedAttribute>(
            () => _decode_UniversalDomainDefinedAttribute
        );
    }
    return _cached_decoder_for_UniversalDomainDefinedAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalDomainDefinedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalDomainDefinedAttributes */
let _cached_encoder_for_UniversalDomainDefinedAttributes: $.ASN1Encoder<UniversalDomainDefinedAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalDomainDefinedAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalDomainDefinedAttributes */
/**
 * @summary Encodes a(n) UniversalDomainDefinedAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalDomainDefinedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_UniversalDomainDefinedAttributes(
    value: UniversalDomainDefinedAttributes,
    elGetter: $.ASN1Encoder<UniversalDomainDefinedAttributes>
) {
    if (!_cached_encoder_for_UniversalDomainDefinedAttributes) {
        _cached_encoder_for_UniversalDomainDefinedAttributes = $._encodeSequenceOf<UniversalDomainDefinedAttribute>(
            () => _encode_UniversalDomainDefinedAttribute,
            $.BER
        );
    }
    return _cached_encoder_for_UniversalDomainDefinedAttributes(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalDomainDefinedAttributes */

/* eslint-enable */
