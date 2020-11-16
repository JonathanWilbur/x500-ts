/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    RDNSequence,
    _decode_RDNSequence,
    _encode_RDNSequence,
} from "../InformationFramework/RDNSequence.ta";
export {
    RDNSequence,
    _decode_RDNSequence,
    _encode_RDNSequence,
} from "../InformationFramework/RDNSequence.ta";

/* START_OF_SYMBOL_DEFINITION LocalName */
/**
 * @summary LocalName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocalName  ::=  RDNSequence
 * ```
 */
export type LocalName = RDNSequence; // DefinedType
/* END_OF_SYMBOL_DEFINITION LocalName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalName */
let _cached_decoder_for_LocalName: $.ASN1Decoder<LocalName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalName */

/* START_OF_SYMBOL_DEFINITION _decode_LocalName */
/**
 * @summary Decodes an ASN.1 element into a(n) LocalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocalName} The decoded data structure.
 */
export function _decode_LocalName(el: _Element) {
    if (!_cached_decoder_for_LocalName) {
        _cached_decoder_for_LocalName = _decode_RDNSequence;
    }
    return _cached_decoder_for_LocalName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LocalName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalName */
let _cached_encoder_for_LocalName: $.ASN1Encoder<LocalName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalName */

/* START_OF_SYMBOL_DEFINITION _encode_LocalName */
/**
 * @summary Encodes a(n) LocalName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalName, encoded as an ASN.1 Element.
 */
export function _encode_LocalName(
    value: LocalName,
    elGetter: $.ASN1Encoder<LocalName>
) {
    if (!_cached_encoder_for_LocalName) {
        _cached_encoder_for_LocalName = _encode_RDNSequence;
    }
    return _cached_encoder_for_LocalName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LocalName */

/* eslint-enable */
