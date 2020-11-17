/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "../PKI-Stub/AttributeCertificate.ta";
export { der } from "../Wrapper/der.va";

/* START_OF_SYMBOL_DEFINITION DER_AttributeCertificate */
/**
 * @summary DER_AttributeCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DER-AttributeCertificate  ::=  OCTET STRING
 *   (CONTAINING AttributeCertificate ENCODED BY der)
 * ```
 */
export type DER_AttributeCertificate = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION DER_AttributeCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DER_AttributeCertificate */
let _cached_decoder_for_DER_AttributeCertificate: $.ASN1Decoder<
    DER_AttributeCertificate
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DER_AttributeCertificate */

/* START_OF_SYMBOL_DEFINITION _decode_DER_AttributeCertificate */
/**
 * @summary Decodes an ASN.1 element into a(n) DER_AttributeCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DER_AttributeCertificate} The decoded data structure.
 */
export function _decode_DER_AttributeCertificate(el: _Element) {
    if (!_cached_decoder_for_DER_AttributeCertificate) {
        _cached_decoder_for_DER_AttributeCertificate = $._decodeOctetString;
    }
    return _cached_decoder_for_DER_AttributeCertificate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DER_AttributeCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DER_AttributeCertificate */
let _cached_encoder_for_DER_AttributeCertificate: $.ASN1Encoder<
    DER_AttributeCertificate
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DER_AttributeCertificate */

/* START_OF_SYMBOL_DEFINITION _encode_DER_AttributeCertificate */
/**
 * @summary Encodes a(n) DER_AttributeCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DER_AttributeCertificate, encoded as an ASN.1 Element.
 */
export function _encode_DER_AttributeCertificate(
    value: DER_AttributeCertificate,
    elGetter: $.ASN1Encoder<DER_AttributeCertificate>
) {
    if (!_cached_encoder_for_DER_AttributeCertificate) {
        _cached_encoder_for_DER_AttributeCertificate = $._encodeOctetString;
    }
    return _cached_encoder_for_DER_AttributeCertificate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DER_AttributeCertificate */

/* eslint-enable */
