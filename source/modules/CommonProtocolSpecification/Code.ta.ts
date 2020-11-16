/* eslint-disable */
import { ASN1Element as _Element, INTEGER, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Code */
/**
 * @summary Code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Code  ::=  CHOICE {
 *   local   INTEGER,
 *   global  OBJECT IDENTIFIER,
 *   ... }
 * ```
 */
export type Code =
    | { local: INTEGER } /* CHOICE_ALT_ROOT */
    | { global: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION Code */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Code */
let _cached_decoder_for_Code: $.ASN1Decoder<Code> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Code */

/* START_OF_SYMBOL_DEFINITION _decode_Code */
/**
 * @summary Decodes an ASN.1 element into a(n) Code
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Code} The decoded data structure.
 */
export function _decode_Code(el: _Element) {
    if (!_cached_decoder_for_Code) {
        _cached_decoder_for_Code = $._decode_extensible_choice<Code>({
            "UNIVERSAL 2": ["local", $._decodeInteger],
            "UNIVERSAL 6": ["global", $._decodeObjectIdentifier],
        });
    }
    return _cached_decoder_for_Code(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Code */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Code */
let _cached_encoder_for_Code: $.ASN1Encoder<Code> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Code */

/* START_OF_SYMBOL_DEFINITION _encode_Code */
/**
 * @summary Encodes a(n) Code into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Code, encoded as an ASN.1 Element.
 */
export function _encode_Code(value: Code, elGetter: $.ASN1Encoder<Code>) {
    if (!_cached_encoder_for_Code) {
        _cached_encoder_for_Code = $._encode_choice<Code>(
            {
                local: $._encodeInteger,
                global: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Code(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Code */

/* eslint-enable */
