/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";

/* START_OF_SYMBOL_DEFINITION ZonalSelect */
/**
 * @summary ZonalSelect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ZonalSelect  ::=  SEQUENCE OF AttributeType
 * ```
 */
export type ZonalSelect = AttributeType[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ZonalSelect */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ZonalSelect */
let _cached_decoder_for_ZonalSelect: $.ASN1Decoder<ZonalSelect> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ZonalSelect */

/* START_OF_SYMBOL_DEFINITION _decode_ZonalSelect */
/**
 * @summary Decodes an ASN.1 element into a(n) ZonalSelect
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ZonalSelect} The decoded data structure.
 */
export function _decode_ZonalSelect(el: _Element) {
    if (!_cached_decoder_for_ZonalSelect) {
        _cached_decoder_for_ZonalSelect = $._decodeSequenceOf<AttributeType>(
            () => _decode_AttributeType
        );
    }
    return _cached_decoder_for_ZonalSelect(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ZonalSelect */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ZonalSelect */
let _cached_encoder_for_ZonalSelect: $.ASN1Encoder<ZonalSelect> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ZonalSelect */

/* START_OF_SYMBOL_DEFINITION _encode_ZonalSelect */
/**
 * @summary Encodes a(n) ZonalSelect into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ZonalSelect, encoded as an ASN.1 Element.
 */
export function _encode_ZonalSelect(
    value: ZonalSelect,
    elGetter: $.ASN1Encoder<ZonalSelect>
) {
    if (!_cached_encoder_for_ZonalSelect) {
        _cached_encoder_for_ZonalSelect = $._encodeSequenceOf<AttributeType>(
            () => _encode_AttributeType,
            $.BER
        );
    }
    return _cached_encoder_for_ZonalSelect(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ZonalSelect */

/* eslint-enable */
