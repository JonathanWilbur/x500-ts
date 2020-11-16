/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_ReferenceType */
export enum _enum_for_ReferenceType {
    superior = 1,
    subordinate = 2,
    cross = 3,
    nonSpecificSubordinate = 4,
    supplier = 5,
    master = 6,
    immediateSuperior = 7,
    self = 8,
    ditBridge = 9,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ReferenceType */

/* START_OF_SYMBOL_DEFINITION ReferenceType */
/**
 * @summary ReferenceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReferenceType  ::=  ENUMERATED {
 *   superior               (1),
 *   subordinate            (2),
 *   cross                  (3),
 *   nonSpecificSubordinate (4),
 *   supplier               (5),
 *   master                 (6),
 *   immediateSuperior      (7),
 *   self                   (8),
 *   ditBridge              (9),
 *   ... }
 * ```@enum {number}
 */
export type ReferenceType = _enum_for_ReferenceType | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION ReferenceType */

/* START_OF_SYMBOL_DEFINITION ReferenceType_superior */
/**
 * @summary ReferenceType_superior
 * @constant
 * @type {number}
 */
export const ReferenceType_superior: ReferenceType = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceType_superior */

/* START_OF_SYMBOL_DEFINITION ReferenceType_subordinate */
/**
 * @summary ReferenceType_subordinate
 * @constant
 * @type {number}
 */
export const ReferenceType_subordinate: ReferenceType = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceType_subordinate */

/* START_OF_SYMBOL_DEFINITION ReferenceType_cross */
/**
 * @summary ReferenceType_cross
 * @constant
 * @type {number}
 */
export const ReferenceType_cross: ReferenceType = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceType_cross */

/* START_OF_SYMBOL_DEFINITION ReferenceType_nonSpecificSubordinate */
/**
 * @summary ReferenceType_nonSpecificSubordinate
 * @constant
 * @type {number}
 */
export const ReferenceType_nonSpecificSubordinate: ReferenceType = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceType_nonSpecificSubordinate */

/* START_OF_SYMBOL_DEFINITION ReferenceType_supplier */
/**
 * @summary ReferenceType_supplier
 * @constant
 * @type {number}
 */
export const ReferenceType_supplier: ReferenceType = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceType_supplier */

/* START_OF_SYMBOL_DEFINITION ReferenceType_master */
/**
 * @summary ReferenceType_master
 * @constant
 * @type {number}
 */
export const ReferenceType_master: ReferenceType = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceType_master */

/* START_OF_SYMBOL_DEFINITION ReferenceType_immediateSuperior */
/**
 * @summary ReferenceType_immediateSuperior
 * @constant
 * @type {number}
 */
export const ReferenceType_immediateSuperior: ReferenceType = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceType_immediateSuperior */

/* START_OF_SYMBOL_DEFINITION ReferenceType_self */
/**
 * @summary ReferenceType_self
 * @constant
 * @type {number}
 */
export const ReferenceType_self: ReferenceType = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceType_self */

/* START_OF_SYMBOL_DEFINITION ReferenceType_ditBridge */
/**
 * @summary ReferenceType_ditBridge
 * @constant
 * @type {number}
 */
export const ReferenceType_ditBridge: ReferenceType = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceType_ditBridge */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReferenceType */
let _cached_decoder_for_ReferenceType: $.ASN1Decoder<
    ReferenceType
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReferenceType */

/* START_OF_SYMBOL_DEFINITION _decode_ReferenceType */
/**
 * @summary Decodes an ASN.1 element into a(n) ReferenceType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReferenceType} The decoded data structure.
 */
export function _decode_ReferenceType(el: _Element) {
    if (!_cached_decoder_for_ReferenceType) {
        _cached_decoder_for_ReferenceType = $._decodeEnumerated;
    }
    return _cached_decoder_for_ReferenceType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReferenceType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReferenceType */
let _cached_encoder_for_ReferenceType: $.ASN1Encoder<
    ReferenceType
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReferenceType */

/* START_OF_SYMBOL_DEFINITION _encode_ReferenceType */
/**
 * @summary Encodes a(n) ReferenceType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReferenceType, encoded as an ASN.1 Element.
 */
export function _encode_ReferenceType(
    value: ReferenceType,
    elGetter: $.ASN1Encoder<ReferenceType>
) {
    if (!_cached_encoder_for_ReferenceType) {
        _cached_encoder_for_ReferenceType = $._encodeEnumerated;
    }
    return _cached_encoder_for_ReferenceType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReferenceType */

/* eslint-enable */
