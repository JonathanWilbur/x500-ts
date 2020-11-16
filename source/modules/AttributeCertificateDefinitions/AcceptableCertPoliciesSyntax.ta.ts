/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertPolicyId,
    _decode_CertPolicyId,
    _encode_CertPolicyId,
} from "../AttributeCertificateDefinitions/CertPolicyId.ta";
export {
    CertPolicyId,
    _decode_CertPolicyId,
    _encode_CertPolicyId,
} from "../AttributeCertificateDefinitions/CertPolicyId.ta";

/* START_OF_SYMBOL_DEFINITION AcceptableCertPoliciesSyntax */
/**
 * @summary AcceptableCertPoliciesSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AcceptableCertPoliciesSyntax  ::=  SEQUENCE SIZE (1..MAX) OF CertPolicyId
 * ```
 */
export type AcceptableCertPoliciesSyntax = CertPolicyId[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AcceptableCertPoliciesSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AcceptableCertPoliciesSyntax */
let _cached_decoder_for_AcceptableCertPoliciesSyntax: $.ASN1Decoder<
    AcceptableCertPoliciesSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AcceptableCertPoliciesSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_AcceptableCertPoliciesSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) AcceptableCertPoliciesSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AcceptableCertPoliciesSyntax} The decoded data structure.
 */
export function _decode_AcceptableCertPoliciesSyntax(el: _Element) {
    if (!_cached_decoder_for_AcceptableCertPoliciesSyntax) {
        _cached_decoder_for_AcceptableCertPoliciesSyntax = $._decodeSequenceOf<
            CertPolicyId
        >(() => _decode_CertPolicyId);
    }
    return _cached_decoder_for_AcceptableCertPoliciesSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AcceptableCertPoliciesSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AcceptableCertPoliciesSyntax */
let _cached_encoder_for_AcceptableCertPoliciesSyntax: $.ASN1Encoder<
    AcceptableCertPoliciesSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AcceptableCertPoliciesSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_AcceptableCertPoliciesSyntax */
/**
 * @summary Encodes a(n) AcceptableCertPoliciesSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcceptableCertPoliciesSyntax, encoded as an ASN.1 Element.
 */
export function _encode_AcceptableCertPoliciesSyntax(
    value: AcceptableCertPoliciesSyntax,
    elGetter: $.ASN1Encoder<AcceptableCertPoliciesSyntax>
) {
    if (!_cached_encoder_for_AcceptableCertPoliciesSyntax) {
        _cached_encoder_for_AcceptableCertPoliciesSyntax = $._encodeSequenceOf<
            CertPolicyId
        >(() => _encode_CertPolicyId, $.BER);
    }
    return _cached_encoder_for_AcceptableCertPoliciesSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AcceptableCertPoliciesSyntax */

/* eslint-enable */
