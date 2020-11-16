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

/* START_OF_SYMBOL_DEFINITION UnboundedDirectoryString */
/**
 * @summary UnboundedDirectoryString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnboundedDirectoryString  ::=  CHOICE {
 *   teletexString    TeletexString(SIZE (1..MAX)),
 *   printableString  PrintableString(SIZE (1..MAX)),
 *   bmpString        BMPString(SIZE (1..MAX)),
 *   universalString  UniversalString(SIZE (1..MAX)),
 *   uTF8String       UTF8String(SIZE (1..MAX)) }
 * ```
 */
export type UnboundedDirectoryString =
    | { teletexString: TeletexString } /* CHOICE_ALT_ROOT */
    | { printableString: PrintableString } /* CHOICE_ALT_ROOT */
    | { bmpString: BMPString } /* CHOICE_ALT_ROOT */
    | { universalString: UniversalString } /* CHOICE_ALT_ROOT */
    | { uTF8String: UTF8String } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION UnboundedDirectoryString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnboundedDirectoryString */
let _cached_decoder_for_UnboundedDirectoryString: $.ASN1Decoder<
    UnboundedDirectoryString
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnboundedDirectoryString */

/* START_OF_SYMBOL_DEFINITION _decode_UnboundedDirectoryString */
/**
 * @summary Decodes an ASN.1 element into a(n) UnboundedDirectoryString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnboundedDirectoryString} The decoded data structure.
 */
export function _decode_UnboundedDirectoryString(el: _Element) {
    if (!_cached_decoder_for_UnboundedDirectoryString) {
        _cached_decoder_for_UnboundedDirectoryString = $._decode_inextensible_choice<
            UnboundedDirectoryString
        >({
            "UNIVERSAL 20": ["teletexString", $._decodeTeletexString],
            "UNIVERSAL 19": ["printableString", $._decodePrintableString],
            "UNIVERSAL 30": ["bmpString", $._decodeBMPString],
            "UNIVERSAL 28": ["universalString", $._decodeUniversalString],
            "UNIVERSAL 12": ["uTF8String", $._decodeUTF8String],
        });
    }
    return _cached_decoder_for_UnboundedDirectoryString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnboundedDirectoryString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnboundedDirectoryString */
let _cached_encoder_for_UnboundedDirectoryString: $.ASN1Encoder<
    UnboundedDirectoryString
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnboundedDirectoryString */

/* START_OF_SYMBOL_DEFINITION _encode_UnboundedDirectoryString */
/**
 * @summary Encodes a(n) UnboundedDirectoryString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnboundedDirectoryString, encoded as an ASN.1 Element.
 */
export function _encode_UnboundedDirectoryString(
    value: UnboundedDirectoryString,
    elGetter: $.ASN1Encoder<UnboundedDirectoryString>
) {
    if (!_cached_encoder_for_UnboundedDirectoryString) {
        _cached_encoder_for_UnboundedDirectoryString = $._encode_choice<
            UnboundedDirectoryString
        >(
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
    return _cached_encoder_for_UnboundedDirectoryString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnboundedDirectoryString */

/* eslint-enable */
