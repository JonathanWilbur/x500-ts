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

/* START_OF_SYMBOL_DEFINITION Exclusions */
/**
 * @summary Exclusions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Exclusions  ::=  SET SIZE (1..MAX) OF RDNSequence
 * ```
 */
export type Exclusions = RDNSequence[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION Exclusions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Exclusions */
let _cached_decoder_for_Exclusions: $.ASN1Decoder<Exclusions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Exclusions */

/* START_OF_SYMBOL_DEFINITION _decode_Exclusions */
/**
 * @summary Decodes an ASN.1 element into a(n) Exclusions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Exclusions} The decoded data structure.
 */
export function _decode_Exclusions(el: _Element) {
    if (!_cached_decoder_for_Exclusions) {
        _cached_decoder_for_Exclusions = $._decodeSetOf<RDNSequence>(
            () => _decode_RDNSequence
        );
    }
    return _cached_decoder_for_Exclusions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Exclusions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Exclusions */
let _cached_encoder_for_Exclusions: $.ASN1Encoder<Exclusions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Exclusions */

/* START_OF_SYMBOL_DEFINITION _encode_Exclusions */
/**
 * @summary Encodes a(n) Exclusions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Exclusions, encoded as an ASN.1 Element.
 */
export function _encode_Exclusions(
    value: Exclusions,
    elGetter: $.ASN1Encoder<Exclusions>
) {
    if (!_cached_encoder_for_Exclusions) {
        _cached_encoder_for_Exclusions = $._encodeSetOf<RDNSequence>(
            () => _encode_RDNSequence,
            $.BER
        );
    }
    return _cached_encoder_for_Exclusions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Exclusions */

/* eslint-enable */
