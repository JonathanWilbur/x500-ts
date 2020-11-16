/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INSTANCE_OF,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CRLReferral,
    _decode_CRLReferral,
    _encode_CRLReferral,
} from "../CertificateExtensions/CRLReferral.ta";
export {
    CRLReferral,
    _decode_CRLReferral,
    _encode_CRLReferral,
} from "../CertificateExtensions/CRLReferral.ta";
export { OTHER_REFERRAL } from "../CertificateExtensions/OTHER-REFERRAL.oca";

/* START_OF_SYMBOL_DEFINITION StatusReferral */
/**
 * @summary StatusReferral
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StatusReferral  ::=  CHOICE {
 *   cRLReferral    [0]  CRLReferral,
 *   otherReferral  [1]  INSTANCE OF OTHER-REFERRAL,
 *   ... }
 * ```
 */
export type StatusReferral =
    | { cRLReferral: CRLReferral } /* CHOICE_ALT_ROOT */
    | { otherReferral: INSTANCE_OF } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION StatusReferral */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StatusReferral */
let _cached_decoder_for_StatusReferral: $.ASN1Decoder<
    StatusReferral
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StatusReferral */

/* START_OF_SYMBOL_DEFINITION _decode_StatusReferral */
/**
 * @summary Decodes an ASN.1 element into a(n) StatusReferral
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StatusReferral} The decoded data structure.
 */
export function _decode_StatusReferral(el: _Element) {
    if (!_cached_decoder_for_StatusReferral) {
        _cached_decoder_for_StatusReferral = $._decode_extensible_choice<
            StatusReferral
        >({
            "CONTEXT 0": [
                "cRLReferral",
                $._decode_implicit<CRLReferral>(() => _decode_CRLReferral),
            ],
            "CONTEXT 1": [
                "otherReferral",
                $._decode_implicit<INSTANCE_OF>(() => $._decodeInstanceOf),
            ],
        });
    }
    return _cached_decoder_for_StatusReferral(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_StatusReferral */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StatusReferral */
let _cached_encoder_for_StatusReferral: $.ASN1Encoder<
    StatusReferral
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StatusReferral */

/* START_OF_SYMBOL_DEFINITION _encode_StatusReferral */
/**
 * @summary Encodes a(n) StatusReferral into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatusReferral, encoded as an ASN.1 Element.
 */
export function _encode_StatusReferral(
    value: StatusReferral,
    elGetter: $.ASN1Encoder<StatusReferral>
) {
    if (!_cached_encoder_for_StatusReferral) {
        _cached_encoder_for_StatusReferral = $._encode_choice<StatusReferral>(
            {
                cRLReferral: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CRLReferral,
                    $.BER
                ),
                otherReferral: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeInstanceOf,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_StatusReferral(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_StatusReferral */

/* eslint-enable */
