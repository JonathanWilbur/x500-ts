/* eslint-disable */
import { ASN1Element as _Element, EXTERNAL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    RequestShadowUpdateArgumentData_requestedStrategy_standard,
    _decode_RequestShadowUpdateArgumentData_requestedStrategy_standard,
    _encode_RequestShadowUpdateArgumentData_requestedStrategy_standard,
} from "../DirectoryShadowAbstractService/RequestShadowUpdateArgumentData-requestedStrategy-standard.ta";
export {
    incremental /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RequestShadowUpdateArgumentData_requestedStrategy_standard,
    RequestShadowUpdateArgumentData_requestedStrategy_standard_incremental /* IMPORTED_LONG_ENUMERATION_ITEM */,
    RequestShadowUpdateArgumentData_requestedStrategy_standard_total /* IMPORTED_LONG_ENUMERATION_ITEM */,
    total /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RequestShadowUpdateArgumentData_requestedStrategy_standard,
    _encode_RequestShadowUpdateArgumentData_requestedStrategy_standard,
    _enum_for_RequestShadowUpdateArgumentData_requestedStrategy_standard,
} from "../DirectoryShadowAbstractService/RequestShadowUpdateArgumentData-requestedStrategy-standard.ta";

/* START_OF_SYMBOL_DEFINITION RequestShadowUpdateArgumentData_requestedStrategy */
/**
 * @summary RequestShadowUpdateArgumentData_requestedStrategy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestShadowUpdateArgumentData-requestedStrategy ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RequestShadowUpdateArgumentData_requestedStrategy =
    | {
          standard: RequestShadowUpdateArgumentData_requestedStrategy_standard;
      } /* CHOICE_ALT_ROOT */
    | { other: EXTERNAL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION RequestShadowUpdateArgumentData_requestedStrategy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy */
let _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy: $.ASN1Decoder<
    RequestShadowUpdateArgumentData_requestedStrategy
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy */

/* START_OF_SYMBOL_DEFINITION _decode_RequestShadowUpdateArgumentData_requestedStrategy */
/**
 * @summary Decodes an ASN.1 element into a(n) RequestShadowUpdateArgumentData_requestedStrategy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestShadowUpdateArgumentData_requestedStrategy} The decoded data structure.
 */
export function _decode_RequestShadowUpdateArgumentData_requestedStrategy(
    el: _Element
) {
    if (
        !_cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy
    ) {
        _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy = $._decode_extensible_choice<
            RequestShadowUpdateArgumentData_requestedStrategy
        >({
            "UNIVERSAL 10": [
                "standard",
                _decode_RequestShadowUpdateArgumentData_requestedStrategy_standard,
            ],
            "UNIVERSAL 8": ["other", $._decodeExternal],
        });
    }
    return _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_RequestShadowUpdateArgumentData_requestedStrategy */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy */
let _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy: $.ASN1Encoder<
    RequestShadowUpdateArgumentData_requestedStrategy
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy */

/* START_OF_SYMBOL_DEFINITION _encode_RequestShadowUpdateArgumentData_requestedStrategy */
/**
 * @summary Encodes a(n) RequestShadowUpdateArgumentData_requestedStrategy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestShadowUpdateArgumentData_requestedStrategy, encoded as an ASN.1 Element.
 */
export function _encode_RequestShadowUpdateArgumentData_requestedStrategy(
    value: RequestShadowUpdateArgumentData_requestedStrategy,
    elGetter: $.ASN1Encoder<RequestShadowUpdateArgumentData_requestedStrategy>
) {
    if (
        !_cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy
    ) {
        _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy = $._encode_choice<
            RequestShadowUpdateArgumentData_requestedStrategy
        >(
            {
                standard: _encode_RequestShadowUpdateArgumentData_requestedStrategy_standard,
                other: $._encodeExternal,
            },
            $.BER
        );
    }
    return _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_RequestShadowUpdateArgumentData_requestedStrategy */

/* eslint-enable */
