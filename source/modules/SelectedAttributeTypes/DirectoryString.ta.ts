/* eslint-disable */
import {
    ASN1Element as _Element,
    BMPString,
    PrintableString,
    TeletexString,
    UniversalString,
    UTF8String,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION DirectoryString */
/**
 * @summary DirectoryString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DirectoryString{INTEGER:maxSize}  ::=  CHOICE {
 *   teletexString    TeletexString(SIZE (1..maxSize,...)),
 *   printableString  PrintableString(SIZE (1..maxSize,...)),
 *   bmpString        BMPString(SIZE (1..maxSize,...)),
 *   universalString  UniversalString(SIZE (1..maxSize,...)),
 *   uTF8String       UTF8String(SIZE (1..maxSize,...)) }
 * ```
 */
export type DirectoryString =
    | { teletexString: TeletexString } /* CHOICE_ALT_ROOT */
    | { printableString: PrintableString } /* CHOICE_ALT_ROOT */
    | { bmpString: BMPString } /* CHOICE_ALT_ROOT */
    | { universalString: UniversalString } /* CHOICE_ALT_ROOT */
    | { uTF8String: UTF8String } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION DirectoryString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DirectoryString */
let _cached_decoder_for_DirectoryString: $.ASN1Decoder<DirectoryString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DirectoryString */

/* START_OF_SYMBOL_DEFINITION _decode_DirectoryString */
/**
 * @summary Decodes an ASN.1 element into a(n) DirectoryString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DirectoryString} The decoded data structure.
 */
export function _decode_DirectoryString(el: _Element) {
    if (!_cached_decoder_for_DirectoryString) {
        _cached_decoder_for_DirectoryString = $._decode_inextensible_choice<DirectoryString>(
            {
                "UNIVERSAL 20": ["teletexString", $._decodeTeletexString],
                "UNIVERSAL 19": ["printableString", $._decodePrintableString],
                "UNIVERSAL 30": ["bmpString", $._decodeBMPString],
                "UNIVERSAL 28": ["universalString", $._decodeUniversalString],
                "UNIVERSAL 12": ["uTF8String", $._decodeUTF8String],
            }
        );
    }
    return _cached_decoder_for_DirectoryString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DirectoryString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DirectoryString */
let _cached_encoder_for_DirectoryString: $.ASN1Encoder<DirectoryString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DirectoryString */

/* START_OF_SYMBOL_DEFINITION _encode_DirectoryString */
/**
 * @summary Encodes a(n) DirectoryString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectoryString, encoded as an ASN.1 Element.
 */
export function _encode_DirectoryString(
    value: DirectoryString,
    elGetter: $.ASN1Encoder<DirectoryString>
) {
    if (!_cached_encoder_for_DirectoryString) {
        _cached_encoder_for_DirectoryString = $._encode_choice<DirectoryString>(
            {
                teletexString: $._encodeTeletexString,
                printableString: $._encodePrintableString,
                bmpString: $._encodeBMPString,
                universalString: $._encodeUniversalString,
                uTF8String: $._encodeUTF8String,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DirectoryString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DirectoryString */

/* eslint-enable */
