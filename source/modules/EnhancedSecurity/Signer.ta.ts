/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SpecificallyIdentified,
    _decode_SpecificallyIdentified,
    _encode_SpecificallyIdentified,
} from "../EnhancedSecurity/SpecificallyIdentified.ta";
import {
    ThisEntry,
    _decode_ThisEntry,
    _encode_ThisEntry,
} from "../EnhancedSecurity/ThisEntry.ta";
export {
    SpecificallyIdentified,
    _decode_SpecificallyIdentified,
    _encode_SpecificallyIdentified,
} from "../EnhancedSecurity/SpecificallyIdentified.ta";
export {
    ThisEntry,
    _decode_ThisEntry,
    _encode_ThisEntry,
} from "../EnhancedSecurity/ThisEntry.ta";

/* START_OF_SYMBOL_DEFINITION Signer */
/**
 * @summary Signer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Signer  ::=  CHOICE {
 *   thisEntry   [0]  EXPLICIT ThisEntry,
 *   thirdParty  [1]  SpecificallyIdentified,
 *   ... }
 * ```
 */
export type Signer =
    | { thisEntry: ThisEntry } /* CHOICE_ALT_ROOT */
    | { thirdParty: SpecificallyIdentified } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION Signer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Signer */
let _cached_decoder_for_Signer: $.ASN1Decoder<Signer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Signer */

/* START_OF_SYMBOL_DEFINITION _decode_Signer */
/**
 * @summary Decodes an ASN.1 element into a(n) Signer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Signer} The decoded data structure.
 */
export function _decode_Signer(el: _Element) {
    if (!_cached_decoder_for_Signer) {
        _cached_decoder_for_Signer = $._decode_extensible_choice<Signer>({
            "CONTEXT 0": [
                "thisEntry",
                $._decode_explicit<ThisEntry>(() => _decode_ThisEntry),
            ],
            "CONTEXT 1": [
                "thirdParty",
                $._decode_implicit<SpecificallyIdentified>(
                    () => _decode_SpecificallyIdentified
                ),
            ],
        });
    }
    return _cached_decoder_for_Signer(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Signer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Signer */
let _cached_encoder_for_Signer: $.ASN1Encoder<Signer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Signer */

/* START_OF_SYMBOL_DEFINITION _encode_Signer */
/**
 * @summary Encodes a(n) Signer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Signer, encoded as an ASN.1 Element.
 */
export function _encode_Signer(value: Signer, elGetter: $.ASN1Encoder<Signer>) {
    if (!_cached_encoder_for_Signer) {
        _cached_encoder_for_Signer = $._encode_choice<Signer>(
            {
                thisEntry: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ThisEntry,
                    $.BER
                ),
                thirdParty: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_SpecificallyIdentified,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Signer(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Signer */

/* eslint-enable */
