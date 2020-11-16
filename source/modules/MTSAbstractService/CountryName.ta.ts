/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NumericString,
    PrintableString,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CountryName */
/**
 * @summary CountryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CountryName  ::=  [APPLICATION 1]  CHOICE {
 *   x121-dcc-code         NumericString(SIZE (ub-country-name-numeric-length)),
 *   iso-3166-alpha2-code  PrintableString(SIZE (ub-country-name-alpha-length))
 * }
 * ```
 */
export type CountryName =
    | { x121_dcc_code: NumericString } /* CHOICE_ALT_ROOT */
    | { iso_3166_alpha2_code: PrintableString } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION CountryName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CountryName */
let _cached_decoder_for_CountryName: $.ASN1Decoder<CountryName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CountryName */

/* START_OF_SYMBOL_DEFINITION _decode_CountryName */
/**
 * @summary Decodes an ASN.1 element into a(n) CountryName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CountryName} The decoded data structure.
 */
export function _decode_CountryName(el: _Element) {
    if (!_cached_decoder_for_CountryName) {
        _cached_decoder_for_CountryName = $._decode_implicit<CountryName>(() =>
            $._decode_inextensible_choice<CountryName>({
                "UNIVERSAL 18": ["x121_dcc_code", $._decodeNumericString],
                "UNIVERSAL 19": [
                    "iso_3166_alpha2_code",
                    $._decodePrintableString,
                ],
            })
        );
    }
    return _cached_decoder_for_CountryName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CountryName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CountryName */
let _cached_encoder_for_CountryName: $.ASN1Encoder<CountryName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CountryName */

/* START_OF_SYMBOL_DEFINITION _encode_CountryName */
/**
 * @summary Encodes a(n) CountryName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CountryName, encoded as an ASN.1 Element.
 */
export function _encode_CountryName(
    value: CountryName,
    elGetter: $.ASN1Encoder<CountryName>
) {
    if (!_cached_encoder_for_CountryName) {
        _cached_encoder_for_CountryName = $._encode_implicit(
            _TagClass.application,
            1,
            () =>
                $._encode_choice<CountryName>(
                    {
                        x121_dcc_code: $._encodeNumericString,
                        iso_3166_alpha2_code: $._encodePrintableString,
                    },
                    $.BER
                ),
            $.BER
        );
    }
    return _cached_encoder_for_CountryName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CountryName */

/* eslint-enable */
