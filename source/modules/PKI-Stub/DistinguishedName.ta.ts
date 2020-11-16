/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    RDNSequence,
    _decode_RDNSequence,
    _encode_RDNSequence,
} from "../PKI_Stub/RDNSequence.ta";
export {
    RDNSequence,
    _decode_RDNSequence,
    _encode_RDNSequence,
} from "../PKI_Stub/RDNSequence.ta";

/* START_OF_SYMBOL_DEFINITION DistinguishedName */
/**
 * @summary DistinguishedName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DistinguishedName  ::=  RDNSequence
 * ```
 */
export type DistinguishedName = RDNSequence; // DefinedType
/* END_OF_SYMBOL_DEFINITION DistinguishedName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DistinguishedName */
let _cached_decoder_for_DistinguishedName: $.ASN1Decoder<
    DistinguishedName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DistinguishedName */

/* START_OF_SYMBOL_DEFINITION _decode_DistinguishedName */
/**
 * @summary Decodes an ASN.1 element into a(n) DistinguishedName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DistinguishedName} The decoded data structure.
 */
export function _decode_DistinguishedName(el: _Element) {
    if (!_cached_decoder_for_DistinguishedName) {
        _cached_decoder_for_DistinguishedName = _decode_RDNSequence;
    }
    return _cached_decoder_for_DistinguishedName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DistinguishedName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DistinguishedName */
let _cached_encoder_for_DistinguishedName: $.ASN1Encoder<
    DistinguishedName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DistinguishedName */

/* START_OF_SYMBOL_DEFINITION _encode_DistinguishedName */
/**
 * @summary Encodes a(n) DistinguishedName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistinguishedName, encoded as an ASN.1 Element.
 */
export function _encode_DistinguishedName(
    value: DistinguishedName,
    elGetter: $.ASN1Encoder<DistinguishedName>
) {
    if (!_cached_encoder_for_DistinguishedName) {
        _cached_encoder_for_DistinguishedName = _encode_RDNSequence;
    }
    return _cached_encoder_for_DistinguishedName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DistinguishedName */

/* eslint-enable */
