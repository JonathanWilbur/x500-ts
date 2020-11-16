/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString,
    PrintableString,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PrivateDomainName */
/**
 * @summary PrivateDomainName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateDomainName  ::=  CHOICE {
 *   numeric    NumericString(SIZE (1..ub-domain-name-length)),
 *   printable  PrintableString(SIZE (1..ub-domain-name-length)) }
 * ```
 */
export type PrivateDomainName =
    | { numeric: NumericString } /* CHOICE_ALT_ROOT */
    | { printable: PrintableString } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION PrivateDomainName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateDomainName */
let _cached_decoder_for_PrivateDomainName: $.ASN1Decoder<
    PrivateDomainName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateDomainName */

/* START_OF_SYMBOL_DEFINITION _decode_PrivateDomainName */
/**
 * @summary Decodes an ASN.1 element into a(n) PrivateDomainName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateDomainName} The decoded data structure.
 */
export function _decode_PrivateDomainName(el: _Element) {
    if (!_cached_decoder_for_PrivateDomainName) {
        _cached_decoder_for_PrivateDomainName = $._decode_inextensible_choice<
            PrivateDomainName
        >({
            "UNIVERSAL 18": ["numeric", $._decodeNumericString],
            "UNIVERSAL 19": ["printable", $._decodePrintableString],
        });
    }
    return _cached_decoder_for_PrivateDomainName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrivateDomainName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateDomainName */
let _cached_encoder_for_PrivateDomainName: $.ASN1Encoder<
    PrivateDomainName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateDomainName */

/* START_OF_SYMBOL_DEFINITION _encode_PrivateDomainName */
/**
 * @summary Encodes a(n) PrivateDomainName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateDomainName, encoded as an ASN.1 Element.
 */
export function _encode_PrivateDomainName(
    value: PrivateDomainName,
    elGetter: $.ASN1Encoder<PrivateDomainName>
) {
    if (!_cached_encoder_for_PrivateDomainName) {
        _cached_encoder_for_PrivateDomainName = $._encode_choice<
            PrivateDomainName
        >(
            {
                numeric: $._encodeNumericString,
                printable: $._encodePrintableString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_PrivateDomainName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrivateDomainName */

/* eslint-enable */
