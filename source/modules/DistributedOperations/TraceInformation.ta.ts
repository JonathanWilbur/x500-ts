/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    TraceItem,
    _decode_TraceItem,
    _encode_TraceItem,
} from "../DistributedOperations/TraceItem.ta";
export {
    TraceItem,
    _decode_TraceItem,
    _encode_TraceItem,
} from "../DistributedOperations/TraceItem.ta";

/* START_OF_SYMBOL_DEFINITION TraceInformation */
/**
 * @summary TraceInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TraceInformation  ::=  SEQUENCE OF TraceItem
 * ```
 */
export type TraceInformation = TraceItem[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION TraceInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TraceInformation */
let _cached_decoder_for_TraceInformation: $.ASN1Decoder<TraceInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TraceInformation */

/* START_OF_SYMBOL_DEFINITION _decode_TraceInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) TraceInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TraceInformation} The decoded data structure.
 */
export function _decode_TraceInformation(el: _Element) {
    if (!_cached_decoder_for_TraceInformation) {
        _cached_decoder_for_TraceInformation = $._decodeSequenceOf<TraceItem>(
            () => _decode_TraceItem
        );
    }
    return _cached_decoder_for_TraceInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TraceInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TraceInformation */
let _cached_encoder_for_TraceInformation: $.ASN1Encoder<TraceInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TraceInformation */

/* START_OF_SYMBOL_DEFINITION _encode_TraceInformation */
/**
 * @summary Encodes a(n) TraceInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceInformation, encoded as an ASN.1 Element.
 */
export function _encode_TraceInformation(
    value: TraceInformation,
    elGetter: $.ASN1Encoder<TraceInformation>
) {
    if (!_cached_encoder_for_TraceInformation) {
        _cached_encoder_for_TraceInformation = $._encodeSequenceOf<TraceItem>(
            () => _encode_TraceItem,
            $.BER
        );
    }
    return _cached_encoder_for_TraceInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TraceInformation */

/* eslint-enable */
