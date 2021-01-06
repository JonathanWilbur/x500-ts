/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_ObjectDigestInfo_digestedObjectType */
/**
 * @summary ObjectDigestInfo_digestedObjectType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectDigestInfo-digestedObjectType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_ObjectDigestInfo_digestedObjectType {
    publicKey = 0,
    publicKeyCert = 1,
    otherObjectTypes = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ObjectDigestInfo_digestedObjectType */

/* START_OF_SYMBOL_DEFINITION ObjectDigestInfo_digestedObjectType */
/**
 * @summary ObjectDigestInfo_digestedObjectType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectDigestInfo-digestedObjectType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type ObjectDigestInfo_digestedObjectType = _enum_for_ObjectDigestInfo_digestedObjectType;
/* END_OF_SYMBOL_DEFINITION ObjectDigestInfo_digestedObjectType */

/* START_OF_SYMBOL_DEFINITION ObjectDigestInfo_digestedObjectType */
/**
 * @summary ObjectDigestInfo_digestedObjectType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectDigestInfo-digestedObjectType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const ObjectDigestInfo_digestedObjectType = _enum_for_ObjectDigestInfo_digestedObjectType;
/* END_OF_SYMBOL_DEFINITION ObjectDigestInfo_digestedObjectType */

/* START_OF_SYMBOL_DEFINITION ObjectDigestInfo_digestedObjectType_publicKey */
/**
 * @summary ObjectDigestInfo_digestedObjectType_publicKey
 * @constant
 * @type {number}
 */
export const ObjectDigestInfo_digestedObjectType_publicKey: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.publicKey; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ObjectDigestInfo_digestedObjectType_publicKey */

/* START_OF_SYMBOL_DEFINITION publicKey */
/**
 * @summary publicKey
 * @constant
 * @type {number}
 */
export const publicKey: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.publicKey; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION publicKey */

/* START_OF_SYMBOL_DEFINITION ObjectDigestInfo_digestedObjectType_publicKeyCert */
/**
 * @summary ObjectDigestInfo_digestedObjectType_publicKeyCert
 * @constant
 * @type {number}
 */
export const ObjectDigestInfo_digestedObjectType_publicKeyCert: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.publicKeyCert; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ObjectDigestInfo_digestedObjectType_publicKeyCert */

/* START_OF_SYMBOL_DEFINITION publicKeyCert */
/**
 * @summary publicKeyCert
 * @constant
 * @type {number}
 */
export const publicKeyCert: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.publicKeyCert; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION publicKeyCert */

/* START_OF_SYMBOL_DEFINITION ObjectDigestInfo_digestedObjectType_otherObjectTypes */
/**
 * @summary ObjectDigestInfo_digestedObjectType_otherObjectTypes
 * @constant
 * @type {number}
 */
export const ObjectDigestInfo_digestedObjectType_otherObjectTypes: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.otherObjectTypes; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ObjectDigestInfo_digestedObjectType_otherObjectTypes */

/* START_OF_SYMBOL_DEFINITION otherObjectTypes */
/**
 * @summary otherObjectTypes
 * @constant
 * @type {number}
 */
export const otherObjectTypes: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.otherObjectTypes; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION otherObjectTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectDigestInfo_digestedObjectType */
let _cached_decoder_for_ObjectDigestInfo_digestedObjectType: $.ASN1Decoder<ObjectDigestInfo_digestedObjectType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectDigestInfo_digestedObjectType */

/* START_OF_SYMBOL_DEFINITION _decode_ObjectDigestInfo_digestedObjectType */
/**
 * @summary Decodes an ASN.1 element into a(n) ObjectDigestInfo_digestedObjectType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectDigestInfo_digestedObjectType} The decoded data structure.
 */
export function _decode_ObjectDigestInfo_digestedObjectType(el: _Element) {
    if (!_cached_decoder_for_ObjectDigestInfo_digestedObjectType) {
        _cached_decoder_for_ObjectDigestInfo_digestedObjectType =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_ObjectDigestInfo_digestedObjectType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ObjectDigestInfo_digestedObjectType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectDigestInfo_digestedObjectType */
let _cached_encoder_for_ObjectDigestInfo_digestedObjectType: $.ASN1Encoder<ObjectDigestInfo_digestedObjectType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectDigestInfo_digestedObjectType */

/* START_OF_SYMBOL_DEFINITION _encode_ObjectDigestInfo_digestedObjectType */
/**
 * @summary Encodes a(n) ObjectDigestInfo_digestedObjectType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectDigestInfo_digestedObjectType, encoded as an ASN.1 Element.
 */
export function _encode_ObjectDigestInfo_digestedObjectType(
    value: ObjectDigestInfo_digestedObjectType,
    elGetter: $.ASN1Encoder<ObjectDigestInfo_digestedObjectType>
) {
    if (!_cached_encoder_for_ObjectDigestInfo_digestedObjectType) {
        _cached_encoder_for_ObjectDigestInfo_digestedObjectType =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_ObjectDigestInfo_digestedObjectType(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ObjectDigestInfo_digestedObjectType */

/* eslint-enable */
