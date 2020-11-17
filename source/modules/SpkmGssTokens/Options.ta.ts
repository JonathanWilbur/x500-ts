/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Options */
/**
 * @summary Options
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Options  ::=  BIT STRING {
 *   delegation-state(0), mutual-state(1), replay-det-state(2), sequence-state(3),
 *   conf-avail(4), integ-avail(5), target-certif-data-required(6)}
 * ```
 */
export type Options = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Options */

/* START_OF_SYMBOL_DEFINITION Options_delegation_state */
/**
 * @summary Options_delegation_state
 * @constant
 */
export const Options_delegation_state: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Options_delegation_state */

/* START_OF_SYMBOL_DEFINITION delegation_state */
/**
 * @summary delegation_state
 * @constant
 */
export const delegation_state: number = Options_delegation_state; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION delegation_state */

/* START_OF_SYMBOL_DEFINITION Options_mutual_state */
/**
 * @summary Options_mutual_state
 * @constant
 */
export const Options_mutual_state: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Options_mutual_state */

/* START_OF_SYMBOL_DEFINITION mutual_state */
/**
 * @summary mutual_state
 * @constant
 */
export const mutual_state: number = Options_mutual_state; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION mutual_state */

/* START_OF_SYMBOL_DEFINITION Options_replay_det_state */
/**
 * @summary Options_replay_det_state
 * @constant
 */
export const Options_replay_det_state: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Options_replay_det_state */

/* START_OF_SYMBOL_DEFINITION replay_det_state */
/**
 * @summary replay_det_state
 * @constant
 */
export const replay_det_state: number = Options_replay_det_state; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION replay_det_state */

/* START_OF_SYMBOL_DEFINITION Options_sequence_state */
/**
 * @summary Options_sequence_state
 * @constant
 */
export const Options_sequence_state: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Options_sequence_state */

/* START_OF_SYMBOL_DEFINITION sequence_state */
/**
 * @summary sequence_state
 * @constant
 */
export const sequence_state: number = Options_sequence_state; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION sequence_state */

/* START_OF_SYMBOL_DEFINITION Options_conf_avail */
/**
 * @summary Options_conf_avail
 * @constant
 */
export const Options_conf_avail: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Options_conf_avail */

/* START_OF_SYMBOL_DEFINITION conf_avail */
/**
 * @summary conf_avail
 * @constant
 */
export const conf_avail: number = Options_conf_avail; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION conf_avail */

/* START_OF_SYMBOL_DEFINITION Options_integ_avail */
/**
 * @summary Options_integ_avail
 * @constant
 */
export const Options_integ_avail: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Options_integ_avail */

/* START_OF_SYMBOL_DEFINITION integ_avail */
/**
 * @summary integ_avail
 * @constant
 */
export const integ_avail: number = Options_integ_avail; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION integ_avail */

/* START_OF_SYMBOL_DEFINITION Options_target_certif_data_required */
/**
 * @summary Options_target_certif_data_required
 * @constant
 */
export const Options_target_certif_data_required: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Options_target_certif_data_required */

/* START_OF_SYMBOL_DEFINITION target_certif_data_required */
/**
 * @summary target_certif_data_required
 * @constant
 */
export const target_certif_data_required: number = Options_target_certif_data_required; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION target_certif_data_required */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Options */
let _cached_decoder_for_Options: $.ASN1Decoder<Options> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Options */

/* START_OF_SYMBOL_DEFINITION _decode_Options */
/**
 * @summary Decodes an ASN.1 element into a(n) Options
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Options} The decoded data structure.
 */
export function _decode_Options(el: _Element) {
    if (!_cached_decoder_for_Options) {
        _cached_decoder_for_Options = $._decodeBitString;
    }
    return _cached_decoder_for_Options(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Options */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Options */
let _cached_encoder_for_Options: $.ASN1Encoder<Options> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Options */

/* START_OF_SYMBOL_DEFINITION _encode_Options */
/**
 * @summary Encodes a(n) Options into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Options, encoded as an ASN.1 Element.
 */
export function _encode_Options(
    value: Options,
    elGetter: $.ASN1Encoder<Options>
) {
    if (!_cached_encoder_for_Options) {
        _cached_encoder_for_Options = $._encodeBitString;
    }
    return _cached_encoder_for_Options(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Options */

/* eslint-enable */
