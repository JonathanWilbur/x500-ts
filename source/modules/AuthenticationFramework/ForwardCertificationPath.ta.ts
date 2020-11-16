/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CrossCertificates,
    _decode_CrossCertificates,
    _encode_CrossCertificates,
} from "../AuthenticationFramework/CrossCertificates.ta";
export {
    CrossCertificates,
    _decode_CrossCertificates,
    _encode_CrossCertificates,
} from "../AuthenticationFramework/CrossCertificates.ta";

/* START_OF_SYMBOL_DEFINITION ForwardCertificationPath */
/**
 * @summary ForwardCertificationPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ForwardCertificationPath  ::=  SEQUENCE SIZE (1..MAX) OF CrossCertificates
 * ```
 */
export type ForwardCertificationPath = CrossCertificates[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ForwardCertificationPath */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ForwardCertificationPath */
let _cached_decoder_for_ForwardCertificationPath: $.ASN1Decoder<
    ForwardCertificationPath
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ForwardCertificationPath */

/* START_OF_SYMBOL_DEFINITION _decode_ForwardCertificationPath */
/**
 * @summary Decodes an ASN.1 element into a(n) ForwardCertificationPath
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ForwardCertificationPath} The decoded data structure.
 */
export function _decode_ForwardCertificationPath(el: _Element) {
    if (!_cached_decoder_for_ForwardCertificationPath) {
        _cached_decoder_for_ForwardCertificationPath = $._decodeSequenceOf<
            CrossCertificates
        >(() => _decode_CrossCertificates);
    }
    return _cached_decoder_for_ForwardCertificationPath(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ForwardCertificationPath */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ForwardCertificationPath */
let _cached_encoder_for_ForwardCertificationPath: $.ASN1Encoder<
    ForwardCertificationPath
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ForwardCertificationPath */

/* START_OF_SYMBOL_DEFINITION _encode_ForwardCertificationPath */
/**
 * @summary Encodes a(n) ForwardCertificationPath into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardCertificationPath, encoded as an ASN.1 Element.
 */
export function _encode_ForwardCertificationPath(
    value: ForwardCertificationPath,
    elGetter: $.ASN1Encoder<ForwardCertificationPath>
) {
    if (!_cached_encoder_for_ForwardCertificationPath) {
        _cached_encoder_for_ForwardCertificationPath = $._encodeSequenceOf<
            CrossCertificates
        >(() => _encode_CrossCertificates, $.BER);
    }
    return _cached_encoder_for_ForwardCertificationPath(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ForwardCertificationPath */

/* eslint-enable */
