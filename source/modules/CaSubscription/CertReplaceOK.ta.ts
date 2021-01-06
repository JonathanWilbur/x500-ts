/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertReplaceOK_Item,
    _decode_CertReplaceOK_Item,
    _encode_CertReplaceOK_Item,
} from "../CaSubscription/CertReplaceOK-Item.ta";
export {
    CertReplaceOK_Item,
    _decode_CertReplaceOK_Item,
    _encode_CertReplaceOK_Item,
} from "../CaSubscription/CertReplaceOK-Item.ta";

/* START_OF_SYMBOL_DEFINITION CertReplaceOK */
/**
 * @summary CertReplaceOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceOK  ::=  SEQUENCE (SIZE (1..MAX)) OF CHOICE {
 *   ok        [0] SEQUENCE {
 *     issuer        Name,
 *     serialNumber  CertificateSerialNumber,
 *     ... },
 *   not-ok    [1] SEQUENCE {
 *     status        CASP-CertStatusCode,
 *     ... },
 *   ... }
 * ```
 */
export type CertReplaceOK = CertReplaceOK_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION CertReplaceOK */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReplaceOK */
let _cached_decoder_for_CertReplaceOK: $.ASN1Decoder<CertReplaceOK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReplaceOK */

/* START_OF_SYMBOL_DEFINITION _decode_CertReplaceOK */
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceOK} The decoded data structure.
 */
export function _decode_CertReplaceOK(el: _Element) {
    if (!_cached_decoder_for_CertReplaceOK) {
        _cached_decoder_for_CertReplaceOK = $._decodeSequenceOf<CertReplaceOK_Item>(
            () => _decode_CertReplaceOK_Item
        );
    }
    return _cached_decoder_for_CertReplaceOK(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertReplaceOK */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReplaceOK */
let _cached_encoder_for_CertReplaceOK: $.ASN1Encoder<CertReplaceOK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReplaceOK */

/* START_OF_SYMBOL_DEFINITION _encode_CertReplaceOK */
/**
 * @summary Encodes a(n) CertReplaceOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceOK, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceOK(
    value: CertReplaceOK,
    elGetter: $.ASN1Encoder<CertReplaceOK>
) {
    if (!_cached_encoder_for_CertReplaceOK) {
        _cached_encoder_for_CertReplaceOK = $._encodeSequenceOf<CertReplaceOK_Item>(
            () => _encode_CertReplaceOK_Item,
            $.BER
        );
    }
    return _cached_encoder_for_CertReplaceOK(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertReplaceOK */

/* eslint-enable */
