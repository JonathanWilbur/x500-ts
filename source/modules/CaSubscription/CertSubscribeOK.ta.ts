/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertSubscribeOK_Item,
    _decode_CertSubscribeOK_Item,
    _encode_CertSubscribeOK_Item,
} from "../CaSubscription/CertSubscribeOK-Item.ta";
export {
    CertSubscribeOK_Item,
    _decode_CertSubscribeOK_Item,
    _encode_CertSubscribeOK_Item,
} from "../CaSubscription/CertSubscribeOK-Item.ta";

/* START_OF_SYMBOL_DEFINITION CertSubscribeOK */
/**
 * @summary CertSubscribeOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeOK  ::=  SEQUENCE (SIZE (1..MAX)) OF CHOICE {
 *   ok       [0] SEQUENCE {
 *     cert         Certificate,
 *     status       CertStatus,
 *     revokeReason CRLReason OPTIONAL,
 *     ... },
 *   not-ok   [1] SEQUENCE {
 *     status       CASP-CertStatusCode,
 *     ... },
 *   ... }
 * ```
 */
export type CertSubscribeOK = CertSubscribeOK_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION CertSubscribeOK */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertSubscribeOK */
let _cached_decoder_for_CertSubscribeOK: $.ASN1Decoder<
    CertSubscribeOK
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertSubscribeOK */

/* START_OF_SYMBOL_DEFINITION _decode_CertSubscribeOK */
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeOK} The decoded data structure.
 */
export function _decode_CertSubscribeOK(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeOK) {
        _cached_decoder_for_CertSubscribeOK = $._decodeSequenceOf<
            CertSubscribeOK_Item
        >(() => _decode_CertSubscribeOK_Item);
    }
    return _cached_decoder_for_CertSubscribeOK(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertSubscribeOK */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertSubscribeOK */
let _cached_encoder_for_CertSubscribeOK: $.ASN1Encoder<
    CertSubscribeOK
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertSubscribeOK */

/* START_OF_SYMBOL_DEFINITION _encode_CertSubscribeOK */
/**
 * @summary Encodes a(n) CertSubscribeOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeOK, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeOK(
    value: CertSubscribeOK,
    elGetter: $.ASN1Encoder<CertSubscribeOK>
) {
    if (!_cached_encoder_for_CertSubscribeOK) {
        _cached_encoder_for_CertSubscribeOK = $._encodeSequenceOf<
            CertSubscribeOK_Item
        >(() => _encode_CertSubscribeOK_Item, $.BER);
    }
    return _cached_encoder_for_CertSubscribeOK(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertSubscribeOK */

/* eslint-enable */
