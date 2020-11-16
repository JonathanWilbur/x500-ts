/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PerAuthorityScope,
    _decode_PerAuthorityScope,
    _encode_PerAuthorityScope,
} from "../CertificateExtensions/PerAuthorityScope.ta";
export {
    PerAuthorityScope,
    _decode_PerAuthorityScope,
    _encode_PerAuthorityScope,
} from "../CertificateExtensions/PerAuthorityScope.ta";

/* START_OF_SYMBOL_DEFINITION CRLScopeSyntax */
/**
 * @summary CRLScopeSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLScopeSyntax  ::=  SEQUENCE SIZE (1..MAX) OF PerAuthorityScope
 * ```
 */
export type CRLScopeSyntax = PerAuthorityScope[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION CRLScopeSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CRLScopeSyntax */
let _cached_decoder_for_CRLScopeSyntax: $.ASN1Decoder<
    CRLScopeSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CRLScopeSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_CRLScopeSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) CRLScopeSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CRLScopeSyntax} The decoded data structure.
 */
export function _decode_CRLScopeSyntax(el: _Element) {
    if (!_cached_decoder_for_CRLScopeSyntax) {
        _cached_decoder_for_CRLScopeSyntax = $._decodeSequenceOf<
            PerAuthorityScope
        >(() => _decode_PerAuthorityScope);
    }
    return _cached_decoder_for_CRLScopeSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CRLScopeSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CRLScopeSyntax */
let _cached_encoder_for_CRLScopeSyntax: $.ASN1Encoder<
    CRLScopeSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CRLScopeSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_CRLScopeSyntax */
/**
 * @summary Encodes a(n) CRLScopeSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLScopeSyntax, encoded as an ASN.1 Element.
 */
export function _encode_CRLScopeSyntax(
    value: CRLScopeSyntax,
    elGetter: $.ASN1Encoder<CRLScopeSyntax>
) {
    if (!_cached_encoder_for_CRLScopeSyntax) {
        _cached_encoder_for_CRLScopeSyntax = $._encodeSequenceOf<
            PerAuthorityScope
        >(() => _encode_PerAuthorityScope, $.BER);
    }
    return _cached_encoder_for_CRLScopeSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CRLScopeSyntax */

/* eslint-enable */
