/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    MRMapping,
    _decode_MRMapping,
    _encode_MRMapping,
} from "../ServiceAdministration/MRMapping.ta";
export {
    MRMapping,
    _decode_MRMapping,
    _encode_MRMapping,
} from "../ServiceAdministration/MRMapping.ta";

/* START_OF_SYMBOL_DEFINITION MRMappings */
/**
 * @summary MRMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MRMappings  ::=  SEQUENCE OF MRMapping
 * ```
 */
export type MRMappings = MRMapping[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION MRMappings */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MRMappings */
let _cached_decoder_for_MRMappings: $.ASN1Decoder<MRMappings> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MRMappings */

/* START_OF_SYMBOL_DEFINITION _decode_MRMappings */
/**
 * @summary Decodes an ASN.1 element into a(n) MRMappings
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MRMappings} The decoded data structure.
 */
export function _decode_MRMappings(el: _Element) {
    if (!_cached_decoder_for_MRMappings) {
        _cached_decoder_for_MRMappings = $._decodeSequenceOf<MRMapping>(
            () => _decode_MRMapping
        );
    }
    return _cached_decoder_for_MRMappings(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MRMappings */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MRMappings */
let _cached_encoder_for_MRMappings: $.ASN1Encoder<MRMappings> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MRMappings */

/* START_OF_SYMBOL_DEFINITION _encode_MRMappings */
/**
 * @summary Encodes a(n) MRMappings into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MRMappings, encoded as an ASN.1 Element.
 */
export function _encode_MRMappings(
    value: MRMappings,
    elGetter: $.ASN1Encoder<MRMappings>
) {
    if (!_cached_encoder_for_MRMappings) {
        _cached_encoder_for_MRMappings = $._encodeSequenceOf<MRMapping>(
            () => _encode_MRMapping,
            $.BER
        );
    }
    return _cached_encoder_for_MRMappings(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MRMappings */

/* eslint-enable */
