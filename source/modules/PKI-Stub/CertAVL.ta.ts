/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../PKI-Stub/SIGNED.ta";
import {
    TBSCertAVL,
    _decode_TBSCertAVL,
    _encode_TBSCertAVL,
} from "../PKI-Stub/TBSCertAVL.ta";
export {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../PKI-Stub/SIGNED.ta";
export {
    TBSCertAVL,
    _decode_TBSCertAVL,
    _encode_TBSCertAVL,
} from "../PKI-Stub/TBSCertAVL.ta";

/* START_OF_SYMBOL_DEFINITION CertAVL */
/**
 * @summary CertAVL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertAVL  ::=  SIGNED {TBSCertAVL}
 * ```
 */
export type CertAVL = SIGNED<TBSCertAVL>; // DefinedType
/* END_OF_SYMBOL_DEFINITION CertAVL */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertAVL */
let _cached_decoder_for_CertAVL: $.ASN1Decoder<CertAVL> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertAVL */

/* START_OF_SYMBOL_DEFINITION _decode_CertAVL */
/**
 * @summary Decodes an ASN.1 element into a(n) CertAVL
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertAVL} The decoded data structure.
 */
export function _decode_CertAVL(el: _Element) {
    if (!_cached_decoder_for_CertAVL) {
        _cached_decoder_for_CertAVL = _get_decoder_for_SIGNED<TBSCertAVL>(
            _decode_TBSCertAVL
        );
    }
    return _cached_decoder_for_CertAVL(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertAVL */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertAVL */
let _cached_encoder_for_CertAVL: $.ASN1Encoder<CertAVL> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertAVL */

/* START_OF_SYMBOL_DEFINITION _encode_CertAVL */
/**
 * @summary Encodes a(n) CertAVL into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertAVL, encoded as an ASN.1 Element.
 */
export function _encode_CertAVL(
    value: CertAVL,
    elGetter: $.ASN1Encoder<CertAVL>
) {
    if (!_cached_encoder_for_CertAVL) {
        _cached_encoder_for_CertAVL = _get_encoder_for_SIGNED<TBSCertAVL>(
            _encode_TBSCertAVL
        );
    }
    return _cached_encoder_for_CertAVL(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertAVL */

/* eslint-enable */
