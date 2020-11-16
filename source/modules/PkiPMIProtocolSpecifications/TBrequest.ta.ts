/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PKCertIdentifier,
    _decode_PKCertIdentifier,
    _encode_PKCertIdentifier,
} from "../AuthenticationFramework/PKCertIdentifier.ta";
export {
    PKCertIdentifier,
    _decode_PKCertIdentifier,
    _encode_PKCertIdentifier,
} from "../AuthenticationFramework/PKCertIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION TBrequest */
/**
 * @summary TBrequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBrequest  ::=  CHOICE {
 *   caCert      [0] PKCertIdentifier,
 *   subjectCert [1] PKCertIdentifier,
 *   ... }
 * ```
 */
export type TBrequest =
    | { caCert: PKCertIdentifier } /* CHOICE_ALT_ROOT */
    | { subjectCert: PKCertIdentifier } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION TBrequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TBrequest */
let _cached_decoder_for_TBrequest: $.ASN1Decoder<TBrequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TBrequest */

/* START_OF_SYMBOL_DEFINITION _decode_TBrequest */
/**
 * @summary Decodes an ASN.1 element into a(n) TBrequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBrequest} The decoded data structure.
 */
export function _decode_TBrequest(el: _Element) {
    if (!_cached_decoder_for_TBrequest) {
        _cached_decoder_for_TBrequest = $._decode_extensible_choice<TBrequest>({
            "CONTEXT 0": [
                "caCert",
                $._decode_explicit<PKCertIdentifier>(
                    () => _decode_PKCertIdentifier
                ),
            ],
            "CONTEXT 1": [
                "subjectCert",
                $._decode_explicit<PKCertIdentifier>(
                    () => _decode_PKCertIdentifier
                ),
            ],
        });
    }
    return _cached_decoder_for_TBrequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TBrequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TBrequest */
let _cached_encoder_for_TBrequest: $.ASN1Encoder<TBrequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TBrequest */

/* START_OF_SYMBOL_DEFINITION _encode_TBrequest */
/**
 * @summary Encodes a(n) TBrequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBrequest, encoded as an ASN.1 Element.
 */
export function _encode_TBrequest(
    value: TBrequest,
    elGetter: $.ASN1Encoder<TBrequest>
) {
    if (!_cached_encoder_for_TBrequest) {
        _cached_encoder_for_TBrequest = $._encode_choice<TBrequest>(
            {
                caCert: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_PKCertIdentifier,
                    $.BER
                ),
                subjectCert: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_PKCertIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TBrequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TBrequest */

/* eslint-enable */
