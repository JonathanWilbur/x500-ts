/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ARU_PPDU_normal_mode_parameters,
    _decode_ARU_PPDU_normal_mode_parameters,
    _encode_ARU_PPDU_normal_mode_parameters,
} from "../OSIProtocolSpecification/ARU-PPDU-normal-mode-parameters.ta";
export {
    ARU_PPDU_normal_mode_parameters,
    _decode_ARU_PPDU_normal_mode_parameters,
    _encode_ARU_PPDU_normal_mode_parameters,
} from "../OSIProtocolSpecification/ARU-PPDU-normal-mode-parameters.ta";

/* START_OF_SYMBOL_DEFINITION ARU_PPDU */
/**
 * @summary ARU_PPDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ARU-PPDU  ::=  CHOICE {
 *   normal-mode-parameters     [0] IMPLICIT SEQUENCE {
 *     presentation-context-identifier-list
 *                                     [0] IMPLICIT Presentation-context-identifier-list,
 *     user-data                           CHOICE {
 *       fully-encoded-data [APPLICATION 1]  IMPLICIT SEQUENCE SIZE(1..MAX) OF SEQUENCE {
 *         presentation-context-identifier     Presentation-context-identifier,
 *         presentation-data-values            CHOICE {
 *           single-ASN1-type               [0]  ABSTRACT-SYNTAX.&Type(ABRT-apdu)}}}}}
 * ```
 */
export type ARU_PPDU = {
    normal_mode_parameters: ARU_PPDU_normal_mode_parameters;
} /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ARU_PPDU */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ARU_PPDU */
let _cached_decoder_for_ARU_PPDU: $.ASN1Decoder<ARU_PPDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ARU_PPDU */

/* START_OF_SYMBOL_DEFINITION _decode_ARU_PPDU */
/**
 * @summary Decodes an ASN.1 element into a(n) ARU_PPDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ARU_PPDU} The decoded data structure.
 */
export function _decode_ARU_PPDU(el: _Element) {
    if (!_cached_decoder_for_ARU_PPDU) {
        _cached_decoder_for_ARU_PPDU = $._decode_inextensible_choice<ARU_PPDU>({
            "CONTEXT 0": [
                "normal_mode_parameters",
                $._decode_explicit<ARU_PPDU_normal_mode_parameters>(
                    () => _decode_ARU_PPDU_normal_mode_parameters
                ),
            ],
        });
    }
    return _cached_decoder_for_ARU_PPDU(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ARU_PPDU */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ARU_PPDU */
let _cached_encoder_for_ARU_PPDU: $.ASN1Encoder<ARU_PPDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ARU_PPDU */

/* START_OF_SYMBOL_DEFINITION _encode_ARU_PPDU */
/**
 * @summary Encodes a(n) ARU_PPDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ARU_PPDU, encoded as an ASN.1 Element.
 */
export function _encode_ARU_PPDU(
    value: ARU_PPDU,
    elGetter: $.ASN1Encoder<ARU_PPDU>
) {
    if (!_cached_encoder_for_ARU_PPDU) {
        _cached_encoder_for_ARU_PPDU = $._encode_choice<ARU_PPDU>(
            {
                normal_mode_parameters: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ARU_PPDU_normal_mode_parameters,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ARU_PPDU(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ARU_PPDU */

/* eslint-enable */
