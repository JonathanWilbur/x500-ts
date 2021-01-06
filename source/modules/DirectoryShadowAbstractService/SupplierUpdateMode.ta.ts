/* eslint-disable */
import { ASN1Element as _Element, BOOLEAN } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SchedulingParameters,
    _decode_SchedulingParameters,
    _encode_SchedulingParameters,
} from "../DirectoryShadowAbstractService/SchedulingParameters.ta";
export {
    SchedulingParameters,
    _decode_SchedulingParameters,
    _encode_SchedulingParameters,
} from "../DirectoryShadowAbstractService/SchedulingParameters.ta";

/* START_OF_SYMBOL_DEFINITION SupplierUpdateMode */
/**
 * @summary SupplierUpdateMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupplierUpdateMode  ::=  CHOICE {
 *   onChange   BOOLEAN,
 *   scheduled  SchedulingParameters,
 *   ... }
 * ```
 */
export type SupplierUpdateMode =
    | { onChange: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { scheduled: SchedulingParameters } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION SupplierUpdateMode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SupplierUpdateMode */
let _cached_decoder_for_SupplierUpdateMode: $.ASN1Decoder<SupplierUpdateMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SupplierUpdateMode */

/* START_OF_SYMBOL_DEFINITION _decode_SupplierUpdateMode */
/**
 * @summary Decodes an ASN.1 element into a(n) SupplierUpdateMode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupplierUpdateMode} The decoded data structure.
 */
export function _decode_SupplierUpdateMode(el: _Element) {
    if (!_cached_decoder_for_SupplierUpdateMode) {
        _cached_decoder_for_SupplierUpdateMode = $._decode_extensible_choice<SupplierUpdateMode>(
            {
                "UNIVERSAL 1": ["onChange", $._decodeBoolean],
                "UNIVERSAL 16": ["scheduled", _decode_SchedulingParameters],
            }
        );
    }
    return _cached_decoder_for_SupplierUpdateMode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SupplierUpdateMode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SupplierUpdateMode */
let _cached_encoder_for_SupplierUpdateMode: $.ASN1Encoder<SupplierUpdateMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SupplierUpdateMode */

/* START_OF_SYMBOL_DEFINITION _encode_SupplierUpdateMode */
/**
 * @summary Encodes a(n) SupplierUpdateMode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupplierUpdateMode, encoded as an ASN.1 Element.
 */
export function _encode_SupplierUpdateMode(
    value: SupplierUpdateMode,
    elGetter: $.ASN1Encoder<SupplierUpdateMode>
) {
    if (!_cached_encoder_for_SupplierUpdateMode) {
        _cached_encoder_for_SupplierUpdateMode = $._encode_choice<SupplierUpdateMode>(
            {
                onChange: $._encodeBoolean,
                scheduled: _encode_SchedulingParameters,
            },
            $.BER
        );
    }
    return _cached_encoder_for_SupplierUpdateMode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SupplierUpdateMode */

/* eslint-enable */
