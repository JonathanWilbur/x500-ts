/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ToBeRevokedGroup,
    _decode_ToBeRevokedGroup,
    _encode_ToBeRevokedGroup,
} from "../CertificateExtensions/ToBeRevokedGroup.ta";
export {
    ToBeRevokedGroup,
    _decode_ToBeRevokedGroup,
    _encode_ToBeRevokedGroup,
} from "../CertificateExtensions/ToBeRevokedGroup.ta";

/* START_OF_SYMBOL_DEFINITION ToBeRevokedSyntax */
/**
 * @summary ToBeRevokedSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ToBeRevokedSyntax  ::=  SEQUENCE SIZE (1..MAX) OF ToBeRevokedGroup
 * ```
 */
export type ToBeRevokedSyntax = ToBeRevokedGroup[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ToBeRevokedSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ToBeRevokedSyntax */
let _cached_decoder_for_ToBeRevokedSyntax: $.ASN1Decoder<
    ToBeRevokedSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ToBeRevokedSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_ToBeRevokedSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) ToBeRevokedSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ToBeRevokedSyntax} The decoded data structure.
 */
export function _decode_ToBeRevokedSyntax(el: _Element) {
    if (!_cached_decoder_for_ToBeRevokedSyntax) {
        _cached_decoder_for_ToBeRevokedSyntax = $._decodeSequenceOf<
            ToBeRevokedGroup
        >(() => _decode_ToBeRevokedGroup);
    }
    return _cached_decoder_for_ToBeRevokedSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ToBeRevokedSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ToBeRevokedSyntax */
let _cached_encoder_for_ToBeRevokedSyntax: $.ASN1Encoder<
    ToBeRevokedSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ToBeRevokedSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_ToBeRevokedSyntax */
/**
 * @summary Encodes a(n) ToBeRevokedSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ToBeRevokedSyntax, encoded as an ASN.1 Element.
 */
export function _encode_ToBeRevokedSyntax(
    value: ToBeRevokedSyntax,
    elGetter: $.ASN1Encoder<ToBeRevokedSyntax>
) {
    if (!_cached_encoder_for_ToBeRevokedSyntax) {
        _cached_encoder_for_ToBeRevokedSyntax = $._encodeSequenceOf<
            ToBeRevokedGroup
        >(() => _encode_ToBeRevokedGroup, $.BER);
    }
    return _cached_encoder_for_ToBeRevokedSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ToBeRevokedSyntax */

/* eslint-enable */
