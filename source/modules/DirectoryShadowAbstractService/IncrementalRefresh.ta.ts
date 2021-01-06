/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    IncrementalStepRefresh,
    _decode_IncrementalStepRefresh,
    _encode_IncrementalStepRefresh,
} from "../DirectoryShadowAbstractService/IncrementalStepRefresh.ta";
export {
    IncrementalStepRefresh,
    _decode_IncrementalStepRefresh,
    _encode_IncrementalStepRefresh,
} from "../DirectoryShadowAbstractService/IncrementalStepRefresh.ta";

/* START_OF_SYMBOL_DEFINITION IncrementalRefresh */
/**
 * @summary IncrementalRefresh
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IncrementalRefresh  ::=  SEQUENCE OF IncrementalStepRefresh
 * ```
 */
export type IncrementalRefresh = IncrementalStepRefresh[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION IncrementalRefresh */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IncrementalRefresh */
let _cached_decoder_for_IncrementalRefresh: $.ASN1Decoder<IncrementalRefresh> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IncrementalRefresh */

/* START_OF_SYMBOL_DEFINITION _decode_IncrementalRefresh */
/**
 * @summary Decodes an ASN.1 element into a(n) IncrementalRefresh
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IncrementalRefresh} The decoded data structure.
 */
export function _decode_IncrementalRefresh(el: _Element) {
    if (!_cached_decoder_for_IncrementalRefresh) {
        _cached_decoder_for_IncrementalRefresh = $._decodeSequenceOf<IncrementalStepRefresh>(
            () => _decode_IncrementalStepRefresh
        );
    }
    return _cached_decoder_for_IncrementalRefresh(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IncrementalRefresh */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IncrementalRefresh */
let _cached_encoder_for_IncrementalRefresh: $.ASN1Encoder<IncrementalRefresh> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IncrementalRefresh */

/* START_OF_SYMBOL_DEFINITION _encode_IncrementalRefresh */
/**
 * @summary Encodes a(n) IncrementalRefresh into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IncrementalRefresh, encoded as an ASN.1 Element.
 */
export function _encode_IncrementalRefresh(
    value: IncrementalRefresh,
    elGetter: $.ASN1Encoder<IncrementalRefresh>
) {
    if (!_cached_encoder_for_IncrementalRefresh) {
        _cached_encoder_for_IncrementalRefresh = $._encodeSequenceOf<IncrementalStepRefresh>(
            () => _encode_IncrementalStepRefresh,
            $.BER
        );
    }
    return _cached_encoder_for_IncrementalRefresh(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IncrementalRefresh */

/* eslint-enable */
