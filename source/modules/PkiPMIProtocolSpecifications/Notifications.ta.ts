/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";

/* START_OF_SYMBOL_DEFINITION Notifications */
/**
 * @summary Notifications
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Notifications  ::=  SEQUENCE SIZE (1..MAX) OF Attribute {{SupportedAttributes}}
 * ```
 */
export type Notifications = Attribute[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Notifications */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Notifications */
let _cached_decoder_for_Notifications: $.ASN1Decoder<Notifications> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Notifications */

/* START_OF_SYMBOL_DEFINITION _decode_Notifications */
/**
 * @summary Decodes an ASN.1 element into a(n) Notifications
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Notifications} The decoded data structure.
 */
export function _decode_Notifications(el: _Element) {
    if (!_cached_decoder_for_Notifications) {
        _cached_decoder_for_Notifications = $._decodeSequenceOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_Notifications(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Notifications */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Notifications */
let _cached_encoder_for_Notifications: $.ASN1Encoder<Notifications> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Notifications */

/* START_OF_SYMBOL_DEFINITION _encode_Notifications */
/**
 * @summary Encodes a(n) Notifications into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Notifications, encoded as an ASN.1 Element.
 */
export function _encode_Notifications(
    value: Notifications,
    elGetter: $.ASN1Encoder<Notifications>
) {
    if (!_cached_encoder_for_Notifications) {
        _cached_encoder_for_Notifications = $._encodeSequenceOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_Notifications(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Notifications */

/* eslint-enable */
