/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_MasterOrShadowAccessPoint_category */
export enum _enum_for_MasterOrShadowAccessPoint_category {
    master = 0,
    shadow = 1,
    writeableCopy = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_MasterOrShadowAccessPoint_category */

/* START_OF_SYMBOL_DEFINITION MasterOrShadowAccessPoint_category */
/**
 * @summary MasterOrShadowAccessPoint_category
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MasterOrShadowAccessPoint-category ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type MasterOrShadowAccessPoint_category =
    | _enum_for_MasterOrShadowAccessPoint_category
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION MasterOrShadowAccessPoint_category */

/* START_OF_SYMBOL_DEFINITION MasterOrShadowAccessPoint_category_master */
/**
 * @summary MasterOrShadowAccessPoint_category_master
 * @constant
 * @type {number}
 */
export const MasterOrShadowAccessPoint_category_master: MasterOrShadowAccessPoint_category = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MasterOrShadowAccessPoint_category_master */

/* START_OF_SYMBOL_DEFINITION MasterOrShadowAccessPoint_category_shadow */
/**
 * @summary MasterOrShadowAccessPoint_category_shadow
 * @constant
 * @type {number}
 */
export const MasterOrShadowAccessPoint_category_shadow: MasterOrShadowAccessPoint_category = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MasterOrShadowAccessPoint_category_shadow */

/* START_OF_SYMBOL_DEFINITION MasterOrShadowAccessPoint_category_writeableCopy */
/**
 * @summary MasterOrShadowAccessPoint_category_writeableCopy
 * @constant
 * @type {number}
 */
export const MasterOrShadowAccessPoint_category_writeableCopy: MasterOrShadowAccessPoint_category = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MasterOrShadowAccessPoint_category_writeableCopy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MasterOrShadowAccessPoint_category */
let _cached_decoder_for_MasterOrShadowAccessPoint_category: $.ASN1Decoder<
    MasterOrShadowAccessPoint_category
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MasterOrShadowAccessPoint_category */

/* START_OF_SYMBOL_DEFINITION _decode_MasterOrShadowAccessPoint_category */
/**
 * @summary Decodes an ASN.1 element into a(n) MasterOrShadowAccessPoint_category
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MasterOrShadowAccessPoint_category} The decoded data structure.
 */
export function _decode_MasterOrShadowAccessPoint_category(el: _Element) {
    if (!_cached_decoder_for_MasterOrShadowAccessPoint_category) {
        _cached_decoder_for_MasterOrShadowAccessPoint_category =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_MasterOrShadowAccessPoint_category(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MasterOrShadowAccessPoint_category */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MasterOrShadowAccessPoint_category */
let _cached_encoder_for_MasterOrShadowAccessPoint_category: $.ASN1Encoder<
    MasterOrShadowAccessPoint_category
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MasterOrShadowAccessPoint_category */

/* START_OF_SYMBOL_DEFINITION _encode_MasterOrShadowAccessPoint_category */
/**
 * @summary Encodes a(n) MasterOrShadowAccessPoint_category into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MasterOrShadowAccessPoint_category, encoded as an ASN.1 Element.
 */
export function _encode_MasterOrShadowAccessPoint_category(
    value: MasterOrShadowAccessPoint_category,
    elGetter: $.ASN1Encoder<MasterOrShadowAccessPoint_category>
) {
    if (!_cached_encoder_for_MasterOrShadowAccessPoint_category) {
        _cached_encoder_for_MasterOrShadowAccessPoint_category =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_MasterOrShadowAccessPoint_category(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_MasterOrShadowAccessPoint_category */

/* eslint-enable */
