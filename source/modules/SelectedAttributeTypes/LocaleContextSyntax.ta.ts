/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION LocaleContextSyntax */
/**
 * @summary LocaleContextSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocaleContextSyntax  ::=  CHOICE {
 *   localeID1  OBJECT IDENTIFIER,
 *   localeID2  UnboundedDirectoryString,
 *   ... }
 * ```
 */
export type LocaleContextSyntax =
    | { localeID1: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { localeID2: UnboundedDirectoryString } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION LocaleContextSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LocaleContextSyntax */
let _cached_decoder_for_LocaleContextSyntax: $.ASN1Decoder<
    LocaleContextSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LocaleContextSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_LocaleContextSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) LocaleContextSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocaleContextSyntax} The decoded data structure.
 */
export function _decode_LocaleContextSyntax(el: _Element) {
    if (!_cached_decoder_for_LocaleContextSyntax) {
        _cached_decoder_for_LocaleContextSyntax = $._decode_extensible_choice<
            LocaleContextSyntax
        >({
            "UNIVERSAL 6": ["localeID1", $._decodeObjectIdentifier],
            "UNIVERSAL 20": ["localeID2", _decode_UnboundedDirectoryString],
            "UNIVERSAL 19": ["localeID2", _decode_UnboundedDirectoryString],
            "UNIVERSAL 30": ["localeID2", _decode_UnboundedDirectoryString],
            "UNIVERSAL 28": ["localeID2", _decode_UnboundedDirectoryString],
            "UNIVERSAL 12": ["localeID2", _decode_UnboundedDirectoryString],
        });
    }
    return _cached_decoder_for_LocaleContextSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LocaleContextSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LocaleContextSyntax */
let _cached_encoder_for_LocaleContextSyntax: $.ASN1Encoder<
    LocaleContextSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LocaleContextSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_LocaleContextSyntax */
/**
 * @summary Encodes a(n) LocaleContextSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocaleContextSyntax, encoded as an ASN.1 Element.
 */
export function _encode_LocaleContextSyntax(
    value: LocaleContextSyntax,
    elGetter: $.ASN1Encoder<LocaleContextSyntax>
) {
    if (!_cached_encoder_for_LocaleContextSyntax) {
        _cached_encoder_for_LocaleContextSyntax = $._encode_choice<
            LocaleContextSyntax
        >(
            {
                localeID1: $._encodeObjectIdentifier,
                localeID2: _encode_UnboundedDirectoryString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_LocaleContextSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LocaleContextSyntax */

/* eslint-enable */
