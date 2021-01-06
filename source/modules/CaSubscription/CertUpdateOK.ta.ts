/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertUpdateOK_Item,
    _decode_CertUpdateOK_Item,
    _encode_CertUpdateOK_Item,
} from "../CaSubscription/CertUpdateOK-Item.ta";
export {
    CertUpdateOK_Item,
    _decode_CertUpdateOK_Item,
    _encode_CertUpdateOK_Item,
} from "../CaSubscription/CertUpdateOK-Item.ta";

/* START_OF_SYMBOL_DEFINITION CertUpdateOK */
/**
 * @summary CertUpdateOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateOK  ::=  SEQUENCE (SIZE (1..MAX)) OF CHOICE {
 *   ok        [0] SEQUENCE {
 *     subject       Name,
 *     serialNumber  CertificateSerialNumber,
 *     ... },
 *   not-ok    [1] SEQUENCE {
 *     status        CASP-CertStatusCode,
 *     ... },
 *   ... }
 * ```
 */
export type CertUpdateOK = CertUpdateOK_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION CertUpdateOK */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertUpdateOK */
let _cached_decoder_for_CertUpdateOK: $.ASN1Decoder<CertUpdateOK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertUpdateOK */

/* START_OF_SYMBOL_DEFINITION _decode_CertUpdateOK */
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateOK} The decoded data structure.
 */
export function _decode_CertUpdateOK(el: _Element) {
    if (!_cached_decoder_for_CertUpdateOK) {
        _cached_decoder_for_CertUpdateOK = $._decodeSequenceOf<CertUpdateOK_Item>(
            () => _decode_CertUpdateOK_Item
        );
    }
    return _cached_decoder_for_CertUpdateOK(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertUpdateOK */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertUpdateOK */
let _cached_encoder_for_CertUpdateOK: $.ASN1Encoder<CertUpdateOK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertUpdateOK */

/* START_OF_SYMBOL_DEFINITION _encode_CertUpdateOK */
/**
 * @summary Encodes a(n) CertUpdateOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateOK, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateOK(
    value: CertUpdateOK,
    elGetter: $.ASN1Encoder<CertUpdateOK>
) {
    if (!_cached_encoder_for_CertUpdateOK) {
        _cached_encoder_for_CertUpdateOK = $._encodeSequenceOf<CertUpdateOK_Item>(
            () => _encode_CertUpdateOK_Item,
            $.BER
        );
    }
    return _cached_encoder_for_CertUpdateOK(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertUpdateOK */

/* eslint-enable */
