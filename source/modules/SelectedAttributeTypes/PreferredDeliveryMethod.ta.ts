/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PreferredDeliveryMethod_Item,
    _decode_PreferredDeliveryMethod_Item,
    _encode_PreferredDeliveryMethod_Item,
} from "../SelectedAttributeTypes/PreferredDeliveryMethod-Item.ta";
export {
    any_delivery_method /* IMPORTED_SHORT_NAMED_INTEGER */,
    g3_facsimile_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    g4_facsimile_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    ia5_terminal_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    mhs_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    physical_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    PreferredDeliveryMethod_Item,
    PreferredDeliveryMethod_Item_any_delivery_method /* IMPORTED_LONG_NAMED_INTEGER */,
    PreferredDeliveryMethod_Item_g3_facsimile_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    PreferredDeliveryMethod_Item_g4_facsimile_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    PreferredDeliveryMethod_Item_ia5_terminal_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    PreferredDeliveryMethod_Item_mhs_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    PreferredDeliveryMethod_Item_physical_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    PreferredDeliveryMethod_Item_telephone_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    PreferredDeliveryMethod_Item_teletex_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    PreferredDeliveryMethod_Item_telex_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    PreferredDeliveryMethod_Item_videotex_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    telephone_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    teletex_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    telex_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    videotex_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_PreferredDeliveryMethod_Item,
    _encode_PreferredDeliveryMethod_Item,
} from "../SelectedAttributeTypes/PreferredDeliveryMethod-Item.ta";

/* START_OF_SYMBOL_DEFINITION PreferredDeliveryMethod */
/**
 * @summary PreferredDeliveryMethod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PreferredDeliveryMethod  ::=  SEQUENCE OF INTEGER {
 *   any-delivery-method   (0),
 *   mhs-delivery          (1),
 *   physical-delivery     (2),
 *   telex-delivery        (3),
 *   teletex-delivery      (4),
 *   g3-facsimile-delivery (5),
 *   g4-facsimile-delivery (6),
 *   ia5-terminal-delivery (7),
 *   videotex-delivery     (8),
 *   telephone-delivery    (9) }
 * ```
 */
export type PreferredDeliveryMethod = PreferredDeliveryMethod_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION PreferredDeliveryMethod */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PreferredDeliveryMethod */
let _cached_decoder_for_PreferredDeliveryMethod: $.ASN1Decoder<PreferredDeliveryMethod> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PreferredDeliveryMethod */

/* START_OF_SYMBOL_DEFINITION _decode_PreferredDeliveryMethod */
/**
 * @summary Decodes an ASN.1 element into a(n) PreferredDeliveryMethod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PreferredDeliveryMethod} The decoded data structure.
 */
export function _decode_PreferredDeliveryMethod(el: _Element) {
    if (!_cached_decoder_for_PreferredDeliveryMethod) {
        _cached_decoder_for_PreferredDeliveryMethod = $._decodeSequenceOf<PreferredDeliveryMethod_Item>(
            () => _decode_PreferredDeliveryMethod_Item
        );
    }
    return _cached_decoder_for_PreferredDeliveryMethod(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PreferredDeliveryMethod */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PreferredDeliveryMethod */
let _cached_encoder_for_PreferredDeliveryMethod: $.ASN1Encoder<PreferredDeliveryMethod> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PreferredDeliveryMethod */

/* START_OF_SYMBOL_DEFINITION _encode_PreferredDeliveryMethod */
/**
 * @summary Encodes a(n) PreferredDeliveryMethod into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PreferredDeliveryMethod, encoded as an ASN.1 Element.
 */
export function _encode_PreferredDeliveryMethod(
    value: PreferredDeliveryMethod,
    elGetter: $.ASN1Encoder<PreferredDeliveryMethod>
) {
    if (!_cached_encoder_for_PreferredDeliveryMethod) {
        _cached_encoder_for_PreferredDeliveryMethod = $._encodeSequenceOf<PreferredDeliveryMethod_Item>(
            () => _encode_PreferredDeliveryMethod_Item,
            $.BER
        );
    }
    return _cached_encoder_for_PreferredDeliveryMethod(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PreferredDeliveryMethod */

/* eslint-enable */
