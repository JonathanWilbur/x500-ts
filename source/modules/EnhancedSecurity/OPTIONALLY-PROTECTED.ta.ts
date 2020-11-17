/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../AuthenticationFramework/SIGNED.ta";
export {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../AuthenticationFramework/SIGNED.ta";

/* START_OF_SYMBOL_DEFINITION OPTIONALLY_PROTECTED */
/**
 * @summary OPTIONALLY_PROTECTED
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OPTIONALLY-PROTECTED{Type}  ::=  CHOICE {
 *   unsigned       Type,
 *   signed         SIGNED{Type} }
 * ```
 */
export type OPTIONALLY_PROTECTED<Type> =
    | { unsigned: Type } /* CHOICE_ALT_ROOT */
    | { signed: SIGNED<Type> } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION OPTIONALLY_PROTECTED */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_OPTIONALLY_PROTECTED */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) OPTIONALLY_PROTECTED
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_OPTIONALLY_PROTECTED<Type>(
    _decode_Type: $.ASN1Decoder<Type>
) {
    return $._decode_inextensible_choice<OPTIONALLY_PROTECTED<Type>>({
        "*": ["unsigned", _decode_Type],
        "UNIVERSAL 16": ["signed", _get_decoder_for_SIGNED<Type>(_decode_Type)],
    });
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_OPTIONALLY_PROTECTED */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_OPTIONALLY_PROTECTED */
/**
 * @summary Returns a function that will encode a(n) OPTIONALLY_PROTECTED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) OPTIONALLY_PROTECTED as an ASN.1 element.
 */
export function _get_encoder_for_OPTIONALLY_PROTECTED<Type>(
    _encode_Type: $.ASN1Encoder<Type>
) {
    return $._encode_choice<OPTIONALLY_PROTECTED<Type>>(
        {
            unsigned: _encode_Type,
            signed: _get_encoder_for_SIGNED<Type>(_encode_Type),
        },
        $.BER
    );
}
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_OPTIONALLY_PROTECTED */

/* eslint-enable */
