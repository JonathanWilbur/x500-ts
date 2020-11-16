/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AuthorizationData_Item,
    _decode_AuthorizationData_Item,
    _encode_AuthorizationData_Item,
} from "../SpkmGssTokens/AuthorizationData-Item.ta";
export {
    AuthorizationData_Item,
    _decode_AuthorizationData_Item,
    _encode_AuthorizationData_Item,
} from "../SpkmGssTokens/AuthorizationData-Item.ta";

/* START_OF_SYMBOL_DEFINITION AuthorizationData */
/**
 * @summary AuthorizationData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorizationData  ::=
 *   SEQUENCE OF SEQUENCE {ad-type  INTEGER,
 *                         ad-data  OCTET STRING}
 * ```
 */
export type AuthorizationData = AuthorizationData_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AuthorizationData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorizationData */
let _cached_decoder_for_AuthorizationData: $.ASN1Decoder<
    AuthorizationData
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorizationData */

/* START_OF_SYMBOL_DEFINITION _decode_AuthorizationData */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizationData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorizationData} The decoded data structure.
 */
export function _decode_AuthorizationData(el: _Element) {
    if (!_cached_decoder_for_AuthorizationData) {
        _cached_decoder_for_AuthorizationData = $._decodeSequenceOf<
            AuthorizationData_Item
        >(() => _decode_AuthorizationData_Item);
    }
    return _cached_decoder_for_AuthorizationData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthorizationData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorizationData */
let _cached_encoder_for_AuthorizationData: $.ASN1Encoder<
    AuthorizationData
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorizationData */

/* START_OF_SYMBOL_DEFINITION _encode_AuthorizationData */
/**
 * @summary Encodes a(n) AuthorizationData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizationData, encoded as an ASN.1 Element.
 */
export function _encode_AuthorizationData(
    value: AuthorizationData,
    elGetter: $.ASN1Encoder<AuthorizationData>
) {
    if (!_cached_encoder_for_AuthorizationData) {
        _cached_encoder_for_AuthorizationData = $._encodeSequenceOf<
            AuthorizationData_Item
        >(() => _encode_AuthorizationData_Item, $.BER);
    }
    return _cached_encoder_for_AuthorizationData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthorizationData */

/* eslint-enable */
