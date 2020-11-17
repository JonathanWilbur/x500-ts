/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "../AttributeCertificateDefinitions/AttributeCertificate.ta";
export {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "../AttributeCertificateDefinitions/AttributeCertificate.ta";

/* START_OF_SYMBOL_DEFINITION AttributeCertificateV2 */
/**
 * @summary AttributeCertificateV2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCertificateV2  ::=  AttributeCertificate
 * ```
 */
export type AttributeCertificateV2 = AttributeCertificate; // DefinedType
/* END_OF_SYMBOL_DEFINITION AttributeCertificateV2 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeCertificateV2 */
let _cached_decoder_for_AttributeCertificateV2: $.ASN1Decoder<
    AttributeCertificateV2
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeCertificateV2 */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeCertificateV2 */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificateV2
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificateV2} The decoded data structure.
 */
export function _decode_AttributeCertificateV2(el: _Element) {
    if (!_cached_decoder_for_AttributeCertificateV2) {
        _cached_decoder_for_AttributeCertificateV2 = _decode_AttributeCertificate;
    }
    return _cached_decoder_for_AttributeCertificateV2(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeCertificateV2 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeCertificateV2 */
let _cached_encoder_for_AttributeCertificateV2: $.ASN1Encoder<
    AttributeCertificateV2
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeCertificateV2 */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeCertificateV2 */
/**
 * @summary Encodes a(n) AttributeCertificateV2 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificateV2, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCertificateV2(
    value: AttributeCertificateV2,
    elGetter: $.ASN1Encoder<AttributeCertificateV2>
) {
    if (!_cached_encoder_for_AttributeCertificateV2) {
        _cached_encoder_for_AttributeCertificateV2 = _encode_AttributeCertificate;
    }
    return _cached_encoder_for_AttributeCertificateV2(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeCertificateV2 */

/* eslint-enable */
