/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta";
export {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta";

/* START_OF_SYMBOL_DEFINITION CrossCertificates */
/**
 * @summary CrossCertificates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CrossCertificates  ::=  SET SIZE (1..MAX) OF Certificate
 * ```
 */
export type CrossCertificates = Certificate[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION CrossCertificates */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CrossCertificates */
let _cached_decoder_for_CrossCertificates: $.ASN1Decoder<
    CrossCertificates
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CrossCertificates */

/* START_OF_SYMBOL_DEFINITION _decode_CrossCertificates */
/**
 * @summary Decodes an ASN.1 element into a(n) CrossCertificates
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CrossCertificates} The decoded data structure.
 */
export function _decode_CrossCertificates(el: _Element) {
    if (!_cached_decoder_for_CrossCertificates) {
        _cached_decoder_for_CrossCertificates = $._decodeSetOf<Certificate>(
            () => _decode_Certificate
        );
    }
    return _cached_decoder_for_CrossCertificates(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CrossCertificates */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CrossCertificates */
let _cached_encoder_for_CrossCertificates: $.ASN1Encoder<
    CrossCertificates
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CrossCertificates */

/* START_OF_SYMBOL_DEFINITION _encode_CrossCertificates */
/**
 * @summary Encodes a(n) CrossCertificates into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CrossCertificates, encoded as an ASN.1 Element.
 */
export function _encode_CrossCertificates(
    value: CrossCertificates,
    elGetter: $.ASN1Encoder<CrossCertificates>
) {
    if (!_cached_encoder_for_CrossCertificates) {
        _cached_encoder_for_CrossCertificates = $._encodeSetOf<Certificate>(
            () => _encode_Certificate,
            $.BER
        );
    }
    return _cached_encoder_for_CrossCertificates(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CrossCertificates */

/* eslint-enable */
