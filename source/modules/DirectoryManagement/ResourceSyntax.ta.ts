/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ResourceSyntax */
/**
 * @summary ResourceSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResourceSyntax  ::=  INTEGER {
 *   insufficientMemory(0), insufficientAssociations(1), insufficientDiskSpace(2),
 *   miscellaneousResourceExhausted(4)}
 * ```
 */
export type ResourceSyntax = INTEGER;
/* END_OF_SYMBOL_DEFINITION ResourceSyntax */

/* START_OF_SYMBOL_DEFINITION ResourceSyntax_insufficientMemory */
/**
 * @summary ResourceSyntax_insufficientMemory
 * @constant
 * @type {number}
 */
export const ResourceSyntax_insufficientMemory: ResourceSyntax = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ResourceSyntax_insufficientMemory */

/* START_OF_SYMBOL_DEFINITION insufficientMemory */
/**
 * @summary ResourceSyntax_insufficientMemory
 * @constant
 * @type {number}
 */
export const insufficientMemory: ResourceSyntax = ResourceSyntax_insufficientMemory; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION insufficientMemory */

/* START_OF_SYMBOL_DEFINITION ResourceSyntax_insufficientAssociations */
/**
 * @summary ResourceSyntax_insufficientAssociations
 * @constant
 * @type {number}
 */
export const ResourceSyntax_insufficientAssociations: ResourceSyntax = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ResourceSyntax_insufficientAssociations */

/* START_OF_SYMBOL_DEFINITION insufficientAssociations */
/**
 * @summary ResourceSyntax_insufficientAssociations
 * @constant
 * @type {number}
 */
export const insufficientAssociations: ResourceSyntax = ResourceSyntax_insufficientAssociations; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION insufficientAssociations */

/* START_OF_SYMBOL_DEFINITION ResourceSyntax_insufficientDiskSpace */
/**
 * @summary ResourceSyntax_insufficientDiskSpace
 * @constant
 * @type {number}
 */
export const ResourceSyntax_insufficientDiskSpace: ResourceSyntax = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ResourceSyntax_insufficientDiskSpace */

/* START_OF_SYMBOL_DEFINITION insufficientDiskSpace */
/**
 * @summary ResourceSyntax_insufficientDiskSpace
 * @constant
 * @type {number}
 */
export const insufficientDiskSpace: ResourceSyntax = ResourceSyntax_insufficientDiskSpace; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION insufficientDiskSpace */

/* START_OF_SYMBOL_DEFINITION ResourceSyntax_miscellaneousResourceExhausted */
/**
 * @summary ResourceSyntax_miscellaneousResourceExhausted
 * @constant
 * @type {number}
 */
export const ResourceSyntax_miscellaneousResourceExhausted: ResourceSyntax = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ResourceSyntax_miscellaneousResourceExhausted */

/* START_OF_SYMBOL_DEFINITION miscellaneousResourceExhausted */
/**
 * @summary ResourceSyntax_miscellaneousResourceExhausted
 * @constant
 * @type {number}
 */
export const miscellaneousResourceExhausted: ResourceSyntax = ResourceSyntax_miscellaneousResourceExhausted; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION miscellaneousResourceExhausted */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResourceSyntax */
let _cached_decoder_for_ResourceSyntax: $.ASN1Decoder<
    ResourceSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResourceSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_ResourceSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) ResourceSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResourceSyntax} The decoded data structure.
 */
export function _decode_ResourceSyntax(el: _Element) {
    if (!_cached_decoder_for_ResourceSyntax) {
        _cached_decoder_for_ResourceSyntax = $._decodeInteger;
    }
    return _cached_decoder_for_ResourceSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResourceSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResourceSyntax */
let _cached_encoder_for_ResourceSyntax: $.ASN1Encoder<
    ResourceSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResourceSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_ResourceSyntax */
/**
 * @summary Encodes a(n) ResourceSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceSyntax, encoded as an ASN.1 Element.
 */
export function _encode_ResourceSyntax(
    value: ResourceSyntax,
    elGetter: $.ASN1Encoder<ResourceSyntax>
) {
    if (!_cached_encoder_for_ResourceSyntax) {
        _cached_encoder_for_ResourceSyntax = $._encodeInteger;
    }
    return _cached_encoder_for_ResourceSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResourceSyntax */

/* eslint-enable */
