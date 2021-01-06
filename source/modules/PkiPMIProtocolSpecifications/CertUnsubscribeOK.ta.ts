/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertUnsubscribeOK_Item,
    _decode_CertUnsubscribeOK_Item,
    _encode_CertUnsubscribeOK_Item,
} from "../PkiPMIProtocolSpecifications/CertUnsubscribeOK-Item.ta";
export {
    CertUnsubscribeOK_Item,
    _decode_CertUnsubscribeOK_Item,
    _encode_CertUnsubscribeOK_Item,
} from "../PkiPMIProtocolSpecifications/CertUnsubscribeOK-Item.ta";

/* START_OF_SYMBOL_DEFINITION CertUnsubscribeOK */
/**
 * @summary CertUnsubscribeOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeOK  ::=  SEQUENCE (SIZE (1..MAX)) OF CHOICE {
 *   ok       [0] SEQUENCE {
 *     subject      Name,
 *     serialNumber CertificateSerialNumber,
 *     ... },
 *   not-ok   [1] SEQUENCE {
 *     status       CASP-CertStatusCode,
 *     ... },
 *   ... }
 * ```
 */
export type CertUnsubscribeOK = CertUnsubscribeOK_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION CertUnsubscribeOK */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertUnsubscribeOK */
let _cached_decoder_for_CertUnsubscribeOK: $.ASN1Decoder<CertUnsubscribeOK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertUnsubscribeOK */

/* START_OF_SYMBOL_DEFINITION _decode_CertUnsubscribeOK */
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeOK} The decoded data structure.
 */
export function _decode_CertUnsubscribeOK(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeOK) {
        _cached_decoder_for_CertUnsubscribeOK = $._decodeSequenceOf<CertUnsubscribeOK_Item>(
            () => _decode_CertUnsubscribeOK_Item
        );
    }
    return _cached_decoder_for_CertUnsubscribeOK(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertUnsubscribeOK */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertUnsubscribeOK */
let _cached_encoder_for_CertUnsubscribeOK: $.ASN1Encoder<CertUnsubscribeOK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertUnsubscribeOK */

/* START_OF_SYMBOL_DEFINITION _encode_CertUnsubscribeOK */
/**
 * @summary Encodes a(n) CertUnsubscribeOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeOK, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeOK(
    value: CertUnsubscribeOK,
    elGetter: $.ASN1Encoder<CertUnsubscribeOK>
) {
    if (!_cached_encoder_for_CertUnsubscribeOK) {
        _cached_encoder_for_CertUnsubscribeOK = $._encodeSequenceOf<CertUnsubscribeOK_Item>(
            () => _encode_CertUnsubscribeOK_Item,
            $.BER
        );
    }
    return _cached_encoder_for_CertUnsubscribeOK(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertUnsubscribeOK */

/* eslint-enable */
