/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
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

/* START_OF_SYMBOL_DEFINITION OPTIONALLY_PROTECTED_SEQ */
/**
 * @summary OPTIONALLY_PROTECTED_SEQ
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OPTIONALLY-PROTECTED-SEQ{Type}  ::=  CHOICE {
 *   unsigned       Type,
 *   signed    [0]  SIGNED{Type} }
 * ```
 */
export type OPTIONALLY_PROTECTED_SEQ<Type> =
    | { unsigned: Type } /* CHOICE_ALT_ROOT */
    | { signed: SIGNED<Type> } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION OPTIONALLY_PROTECTED_SEQ */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OPTIONALLY_PROTECTED_SEQ */
let _cached_decoder_for_OPTIONALLY_PROTECTED_SEQ: $.ASN1Decoder<
    OPTIONALLY_PROTECTED_SEQ<Type>
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OPTIONALLY_PROTECTED_SEQ */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_OPTIONALLY_PROTECTED_SEQ */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) OPTIONALLY_PROTECTED_SEQ
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<Type>(
    _decode_Type: $.ASN1Decoder<Type>
) {
    return $._decode_inextensible_choice<OPTIONALLY_PROTECTED_SEQ<Type>>({
        "*": ["unsigned", _decode_Type],
        "CONTEXT 0": [
            "signed",
            $._decode_implicit<SIGNED<Type>>(() =>
                _get_decoder_for_SIGNED<Type>(_decode_Type)
            ),
        ],
    });
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_OPTIONALLY_PROTECTED_SEQ */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OPTIONALLY_PROTECTED_SEQ */
let _cached_encoder_for_OPTIONALLY_PROTECTED_SEQ: $.ASN1Encoder<
    OPTIONALLY_PROTECTED_SEQ<Type>
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OPTIONALLY_PROTECTED_SEQ */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_OPTIONALLY_PROTECTED_SEQ */
/**
 * @summary Returns a function that will encode a(n) OPTIONALLY_PROTECTED_SEQ into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) OPTIONALLY_PROTECTED_SEQ as an ASN.1 element.
 */
export function _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<Type>(
    _encode_Type: $.ASN1Encoder<Type>
) {
    return $._encode_choice<OPTIONALLY_PROTECTED_SEQ<Type>>(
        {
            unsigned: _encode_Type,
            signed: $._encode_implicit(
                _TagClass.context,
                0,
                () => _get_encoder_for_SIGNED<Type>(_encode_Type),
                $.BER
            ),
        },
        $.BER
    );
}
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_OPTIONALLY_PROTECTED_SEQ */

/* eslint-enable */
