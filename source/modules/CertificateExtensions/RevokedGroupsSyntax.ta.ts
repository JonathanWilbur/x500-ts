/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    RevokedGroup,
    _decode_RevokedGroup,
    _encode_RevokedGroup,
} from "../CertificateExtensions/RevokedGroup.ta";
export {
    RevokedGroup,
    _decode_RevokedGroup,
    _encode_RevokedGroup,
} from "../CertificateExtensions/RevokedGroup.ta";

/* START_OF_SYMBOL_DEFINITION RevokedGroupsSyntax */
/**
 * @summary RevokedGroupsSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevokedGroupsSyntax  ::=  SEQUENCE SIZE (1..MAX) OF RevokedGroup
 * ```
 */
export type RevokedGroupsSyntax = RevokedGroup[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION RevokedGroupsSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RevokedGroupsSyntax */
let _cached_decoder_for_RevokedGroupsSyntax: $.ASN1Decoder<
    RevokedGroupsSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RevokedGroupsSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_RevokedGroupsSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) RevokedGroupsSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevokedGroupsSyntax} The decoded data structure.
 */
export function _decode_RevokedGroupsSyntax(el: _Element) {
    if (!_cached_decoder_for_RevokedGroupsSyntax) {
        _cached_decoder_for_RevokedGroupsSyntax = $._decodeSequenceOf<
            RevokedGroup
        >(() => _decode_RevokedGroup);
    }
    return _cached_decoder_for_RevokedGroupsSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RevokedGroupsSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RevokedGroupsSyntax */
let _cached_encoder_for_RevokedGroupsSyntax: $.ASN1Encoder<
    RevokedGroupsSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RevokedGroupsSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_RevokedGroupsSyntax */
/**
 * @summary Encodes a(n) RevokedGroupsSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevokedGroupsSyntax, encoded as an ASN.1 Element.
 */
export function _encode_RevokedGroupsSyntax(
    value: RevokedGroupsSyntax,
    elGetter: $.ASN1Encoder<RevokedGroupsSyntax>
) {
    if (!_cached_encoder_for_RevokedGroupsSyntax) {
        _cached_encoder_for_RevokedGroupsSyntax = $._encodeSequenceOf<
            RevokedGroup
        >(() => _encode_RevokedGroup, $.BER);
    }
    return _cached_encoder_for_RevokedGroupsSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RevokedGroupsSyntax */

/* eslint-enable */
