/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../AuthenticationFramework/SIGNED.ta";
import {
    TBSPDU_wrapper,
    _decode_TBSPDU_wrapper,
    _encode_TBSPDU_wrapper,
} from "../PkiPmiWrapper/TBSPDU-wrapper.ta";
export {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../AuthenticationFramework/SIGNED.ta";
export {
    TBSPDU_wrapper,
    _decode_TBSPDU_wrapper,
    _encode_TBSPDU_wrapper,
} from "../PkiPmiWrapper/TBSPDU-wrapper.ta";

/* START_OF_SYMBOL_DEFINITION PDU_wrapper */
/**
 * @summary PDU_wrapper
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDU-wrapper  ::=  SIGNED{TBSPDU-wrapper}
 * ```
 */
export type PDU_wrapper = SIGNED<TBSPDU_wrapper>; // DefinedType
/* END_OF_SYMBOL_DEFINITION PDU_wrapper */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PDU_wrapper */
let _cached_decoder_for_PDU_wrapper: $.ASN1Decoder<PDU_wrapper> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PDU_wrapper */

/* START_OF_SYMBOL_DEFINITION _decode_PDU_wrapper */
/**
 * @summary Decodes an ASN.1 element into a(n) PDU_wrapper
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDU_wrapper} The decoded data structure.
 */
export function _decode_PDU_wrapper(el: _Element) {
    if (!_cached_decoder_for_PDU_wrapper) {
        _cached_decoder_for_PDU_wrapper = _get_decoder_for_SIGNED<
            TBSPDU_wrapper
        >(_decode_TBSPDU_wrapper);
    }
    return _cached_decoder_for_PDU_wrapper(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PDU_wrapper */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PDU_wrapper */
let _cached_encoder_for_PDU_wrapper: $.ASN1Encoder<PDU_wrapper> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PDU_wrapper */

/* START_OF_SYMBOL_DEFINITION _encode_PDU_wrapper */
/**
 * @summary Encodes a(n) PDU_wrapper into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDU_wrapper, encoded as an ASN.1 Element.
 */
export function _encode_PDU_wrapper(
    value: PDU_wrapper,
    elGetter: $.ASN1Encoder<PDU_wrapper>
) {
    if (!_cached_encoder_for_PDU_wrapper) {
        _cached_encoder_for_PDU_wrapper = _get_encoder_for_SIGNED<
            TBSPDU_wrapper
        >(_encode_TBSPDU_wrapper);
    }
    return _cached_encoder_for_PDU_wrapper(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PDU_wrapper */

/* eslint-enable */
