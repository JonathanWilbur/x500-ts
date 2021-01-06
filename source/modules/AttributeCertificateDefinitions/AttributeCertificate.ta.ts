/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    TBSAttributeCertificate,
    _decode_TBSAttributeCertificate,
    _encode_TBSAttributeCertificate,
} from "../AttributeCertificateDefinitions/TBSAttributeCertificate.ta";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../AuthenticationFramework/SIGNED.ta";
export {
    TBSAttributeCertificate,
    _decode_TBSAttributeCertificate,
    _encode_TBSAttributeCertificate,
} from "../AttributeCertificateDefinitions/TBSAttributeCertificate.ta";
export {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../AuthenticationFramework/SIGNED.ta";

/* START_OF_SYMBOL_DEFINITION AttributeCertificate */
/**
 * @summary AttributeCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCertificate  ::=  SIGNED{TBSAttributeCertificate}
 * ```
 */
export type AttributeCertificate = SIGNED<TBSAttributeCertificate>; // DefinedType
/* END_OF_SYMBOL_DEFINITION AttributeCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeCertificate */
let _cached_decoder_for_AttributeCertificate: $.ASN1Decoder<AttributeCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeCertificate */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeCertificate */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificate} The decoded data structure.
 */
export function _decode_AttributeCertificate(el: _Element) {
    if (!_cached_decoder_for_AttributeCertificate) {
        _cached_decoder_for_AttributeCertificate = _get_decoder_for_SIGNED<TBSAttributeCertificate>(
            _decode_TBSAttributeCertificate
        );
    }
    return _cached_decoder_for_AttributeCertificate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeCertificate */
let _cached_encoder_for_AttributeCertificate: $.ASN1Encoder<AttributeCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeCertificate */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeCertificate */
/**
 * @summary Encodes a(n) AttributeCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificate, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCertificate(
    value: AttributeCertificate,
    elGetter: $.ASN1Encoder<AttributeCertificate>
) {
    if (!_cached_encoder_for_AttributeCertificate) {
        _cached_encoder_for_AttributeCertificate = _get_encoder_for_SIGNED<TBSAttributeCertificate>(
            _encode_TBSAttributeCertificate
        );
    }
    return _cached_encoder_for_AttributeCertificate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeCertificate */

/* eslint-enable */
