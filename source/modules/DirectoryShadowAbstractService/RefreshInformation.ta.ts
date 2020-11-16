/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    EXTERNAL,
    NULL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    IncrementalRefresh,
    _decode_IncrementalRefresh,
    _encode_IncrementalRefresh,
} from "../DirectoryShadowAbstractService/IncrementalRefresh.ta";
import {
    TotalRefresh,
    _decode_TotalRefresh,
    _encode_TotalRefresh,
} from "../DirectoryShadowAbstractService/TotalRefresh.ta";
export {
    IncrementalRefresh,
    _decode_IncrementalRefresh,
    _encode_IncrementalRefresh,
} from "../DirectoryShadowAbstractService/IncrementalRefresh.ta";
export {
    TotalRefresh,
    _decode_TotalRefresh,
    _encode_TotalRefresh,
} from "../DirectoryShadowAbstractService/TotalRefresh.ta";

/* START_OF_SYMBOL_DEFINITION RefreshInformation */
/**
 * @summary RefreshInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RefreshInformation  ::=  CHOICE {
 *   noRefresh      NULL,
 *   total          [0]  TotalRefresh,
 *   incremental    [1]  IncrementalRefresh,
 *   otherStrategy       EXTERNAL,
 *   ...}
 * ```
 */
export type RefreshInformation =
    | { noRefresh: NULL } /* CHOICE_ALT_ROOT */
    | { total: TotalRefresh } /* CHOICE_ALT_ROOT */
    | { incremental: IncrementalRefresh } /* CHOICE_ALT_ROOT */
    | { otherStrategy: EXTERNAL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION RefreshInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RefreshInformation */
let _cached_decoder_for_RefreshInformation: $.ASN1Decoder<
    RefreshInformation
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RefreshInformation */

/* START_OF_SYMBOL_DEFINITION _decode_RefreshInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) RefreshInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RefreshInformation} The decoded data structure.
 */
export function _decode_RefreshInformation(el: _Element) {
    if (!_cached_decoder_for_RefreshInformation) {
        _cached_decoder_for_RefreshInformation = $._decode_extensible_choice<
            RefreshInformation
        >({
            "UNIVERSAL 5": ["noRefresh", $._decodeNull],
            "CONTEXT 0": [
                "total",
                $._decode_implicit<TotalRefresh>(() => _decode_TotalRefresh),
            ],
            "CONTEXT 1": [
                "incremental",
                $._decode_implicit<IncrementalRefresh>(
                    () => _decode_IncrementalRefresh
                ),
            ],
            "UNIVERSAL 8": ["otherStrategy", $._decodeExternal],
        });
    }
    return _cached_decoder_for_RefreshInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RefreshInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RefreshInformation */
let _cached_encoder_for_RefreshInformation: $.ASN1Encoder<
    RefreshInformation
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RefreshInformation */

/* START_OF_SYMBOL_DEFINITION _encode_RefreshInformation */
/**
 * @summary Encodes a(n) RefreshInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RefreshInformation, encoded as an ASN.1 Element.
 */
export function _encode_RefreshInformation(
    value: RefreshInformation,
    elGetter: $.ASN1Encoder<RefreshInformation>
) {
    if (!_cached_encoder_for_RefreshInformation) {
        _cached_encoder_for_RefreshInformation = $._encode_choice<
            RefreshInformation
        >(
            {
                noRefresh: $._encodeNull,
                total: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_TotalRefresh,
                    $.BER
                ),
                incremental: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_IncrementalRefresh,
                    $.BER
                ),
                otherStrategy: $._encodeExternal,
            },
            $.BER
        );
    }
    return _cached_encoder_for_RefreshInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RefreshInformation */

/* eslint-enable */
