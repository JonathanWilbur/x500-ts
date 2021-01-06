/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "../InformationFramework/RelativeDistinguishedName.ta";
export {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "../InformationFramework/RelativeDistinguishedName.ta";

/* START_OF_SYMBOL_DEFINITION RDNSequence */
/**
 * @summary RDNSequence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RDNSequence  ::=  SEQUENCE OF RelativeDistinguishedName
 * ```
 */
export type RDNSequence = RelativeDistinguishedName[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION RDNSequence */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RDNSequence */
let _cached_decoder_for_RDNSequence: $.ASN1Decoder<RDNSequence> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RDNSequence */

/* START_OF_SYMBOL_DEFINITION _decode_RDNSequence */
/**
 * @summary Decodes an ASN.1 element into a(n) RDNSequence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RDNSequence} The decoded data structure.
 */
export function _decode_RDNSequence(el: _Element) {
    if (!_cached_decoder_for_RDNSequence) {
        _cached_decoder_for_RDNSequence = $._decodeSequenceOf<RelativeDistinguishedName>(
            () => _decode_RelativeDistinguishedName
        );
    }
    return _cached_decoder_for_RDNSequence(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RDNSequence */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RDNSequence */
let _cached_encoder_for_RDNSequence: $.ASN1Encoder<RDNSequence> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RDNSequence */

/* START_OF_SYMBOL_DEFINITION _encode_RDNSequence */
/**
 * @summary Encodes a(n) RDNSequence into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RDNSequence, encoded as an ASN.1 Element.
 */
export function _encode_RDNSequence(
    value: RDNSequence,
    elGetter: $.ASN1Encoder<RDNSequence>
) {
    if (!_cached_encoder_for_RDNSequence) {
        _cached_encoder_for_RDNSequence = $._encodeSequenceOf<RelativeDistinguishedName>(
            () => _encode_RelativeDistinguishedName,
            $.BER
        );
    }
    return _cached_encoder_for_RDNSequence(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RDNSequence */

/* eslint-enable */
