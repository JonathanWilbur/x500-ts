/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    EXTERNAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SimpleCredentials,
    _decode_SimpleCredentials,
    _encode_SimpleCredentials,
} from "../DirectoryAbstractService/SimpleCredentials.ta";
import {
    SpkmCredentials,
    _decode_SpkmCredentials,
    _encode_SpkmCredentials,
} from "../DirectoryAbstractService/SpkmCredentials.ta";
import {
    StrongCredentials,
    _decode_StrongCredentials,
    _encode_StrongCredentials,
} from "../DirectoryAbstractService/StrongCredentials.ta";
export {
    SimpleCredentials,
    _decode_SimpleCredentials,
    _encode_SimpleCredentials,
} from "../DirectoryAbstractService/SimpleCredentials.ta";
export {
    SpkmCredentials,
    _decode_SpkmCredentials,
    _encode_SpkmCredentials,
} from "../DirectoryAbstractService/SpkmCredentials.ta";
export {
    StrongCredentials,
    _decode_StrongCredentials,
    _encode_StrongCredentials,
} from "../DirectoryAbstractService/StrongCredentials.ta";

/* START_OF_SYMBOL_DEFINITION DSACredentials */
/**
 * @summary DSACredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSACredentials   ::=   CHOICE  {
 *   simple             [0]  SimpleCredentials,
 *   strong             [1]  StrongCredentials,
 *   externalProcedure  [2]  EXTERNAL,
 *   spkm               [3]  SpkmCredentials,
 *   ... }
 * ```
 */
export type DSACredentials =
    | { simple: SimpleCredentials } /* CHOICE_ALT_ROOT */
    | { strong: StrongCredentials } /* CHOICE_ALT_ROOT */
    | { externalProcedure: EXTERNAL } /* CHOICE_ALT_ROOT */
    | { spkm: SpkmCredentials } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION DSACredentials */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DSACredentials */
let _cached_decoder_for_DSACredentials: $.ASN1Decoder<DSACredentials> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DSACredentials */

/* START_OF_SYMBOL_DEFINITION _decode_DSACredentials */
/**
 * @summary Decodes an ASN.1 element into a(n) DSACredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSACredentials} The decoded data structure.
 */
export function _decode_DSACredentials(el: _Element) {
    if (!_cached_decoder_for_DSACredentials) {
        _cached_decoder_for_DSACredentials = $._decode_extensible_choice<DSACredentials>(
            {
                "CONTEXT 0": [
                    "simple",
                    $._decode_explicit<SimpleCredentials>(
                        () => _decode_SimpleCredentials
                    ),
                ],
                "CONTEXT 1": [
                    "strong",
                    $._decode_explicit<StrongCredentials>(
                        () => _decode_StrongCredentials
                    ),
                ],
                "CONTEXT 2": [
                    "externalProcedure",
                    $._decode_explicit<EXTERNAL>(() => $._decodeExternal),
                ],
                "CONTEXT 3": [
                    "spkm",
                    $._decode_explicit<SpkmCredentials>(
                        () => _decode_SpkmCredentials
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_DSACredentials(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DSACredentials */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DSACredentials */
let _cached_encoder_for_DSACredentials: $.ASN1Encoder<DSACredentials> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DSACredentials */

/* START_OF_SYMBOL_DEFINITION _encode_DSACredentials */
/**
 * @summary Encodes a(n) DSACredentials into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSACredentials, encoded as an ASN.1 Element.
 */
export function _encode_DSACredentials(
    value: DSACredentials,
    elGetter: $.ASN1Encoder<DSACredentials>
) {
    if (!_cached_encoder_for_DSACredentials) {
        _cached_encoder_for_DSACredentials = $._encode_choice<DSACredentials>(
            {
                simple: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_SimpleCredentials,
                    $.BER
                ),
                strong: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_StrongCredentials,
                    $.BER
                ),
                externalProcedure: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => $._encodeExternal,
                    $.BER
                ),
                spkm: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_SpkmCredentials,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DSACredentials(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DSACredentials */

/* eslint-enable */
