/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    TBerror,
    _decode_TBerror,
    _encode_TBerror,
} from "../TrustBroker/TBerror.ta";
import { TBOK, _decode_TBOK, _encode_TBOK } from "../TrustBroker/TBOK.ta";
export {
    TBerror,
    _decode_TBerror,
    _encode_TBerror,
} from "../TrustBroker/TBerror.ta";
export { TBOK, _decode_TBOK, _encode_TBOK } from "../TrustBroker/TBOK.ta";

/* START_OF_SYMBOL_DEFINITION TBresponse */
/**
 * @summary TBresponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBresponse  ::=  CHOICE {
 *   success [0]  TBOK,
 *   failure [1]  TBerror,
 *   ... }
 * ```
 */
export type TBresponse =
    | { success: TBOK } /* CHOICE_ALT_ROOT */
    | { failure: TBerror } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION TBresponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TBresponse */
let _cached_decoder_for_TBresponse: $.ASN1Decoder<TBresponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TBresponse */

/* START_OF_SYMBOL_DEFINITION _decode_TBresponse */
/**
 * @summary Decodes an ASN.1 element into a(n) TBresponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBresponse} The decoded data structure.
 */
export function _decode_TBresponse(el: _Element) {
    if (!_cached_decoder_for_TBresponse) {
        _cached_decoder_for_TBresponse = $._decode_extensible_choice<
            TBresponse
        >({
            "CONTEXT 0": [
                "success",
                $._decode_implicit<TBOK>(() => _decode_TBOK),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_implicit<TBerror>(() => _decode_TBerror),
            ],
        });
    }
    return _cached_decoder_for_TBresponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TBresponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TBresponse */
let _cached_encoder_for_TBresponse: $.ASN1Encoder<TBresponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TBresponse */

/* START_OF_SYMBOL_DEFINITION _encode_TBresponse */
/**
 * @summary Encodes a(n) TBresponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBresponse, encoded as an ASN.1 Element.
 */
export function _encode_TBresponse(
    value: TBresponse,
    elGetter: $.ASN1Encoder<TBresponse>
) {
    if (!_cached_encoder_for_TBresponse) {
        _cached_encoder_for_TBresponse = $._encode_choice<TBresponse>(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_TBOK,
                    $.BER
                ),
                failure: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_TBerror,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TBresponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TBresponse */

/* eslint-enable */
