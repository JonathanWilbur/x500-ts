/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DSEType,
    _decode_DSEType,
    _encode_DSEType,
} from "../DSAOperationalAttributeTypes/DSEType.ta";
export {
    admPoint /* IMPORTED_SHORT_NAMED_BIT */,
    alias /* IMPORTED_SHORT_NAMED_BIT */,
    cp /* IMPORTED_SHORT_NAMED_BIT */,
    ditBridge /* IMPORTED_SHORT_NAMED_BIT */,
    DSEType,
    DSEType_admPoint /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_alias /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_cp /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_ditBridge /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_dsSubentry /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_entry /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_familyMember /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_glue /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_immSupr /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_nssr /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_rhob /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_root /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_sa /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_shadow /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_subentry /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_subr /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_supr /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_xr /* IMPORTED_LONG_NAMED_BIT */,
    dsSubentry /* IMPORTED_SHORT_NAMED_BIT */,
    entry /* IMPORTED_SHORT_NAMED_BIT */,
    familyMember /* IMPORTED_SHORT_NAMED_BIT */,
    glue /* IMPORTED_SHORT_NAMED_BIT */,
    immSupr /* IMPORTED_SHORT_NAMED_BIT */,
    nssr /* IMPORTED_SHORT_NAMED_BIT */,
    rhob /* IMPORTED_SHORT_NAMED_BIT */,
    root /* IMPORTED_SHORT_NAMED_BIT */,
    sa /* IMPORTED_SHORT_NAMED_BIT */,
    shadow /* IMPORTED_SHORT_NAMED_BIT */,
    subentry /* IMPORTED_SHORT_NAMED_BIT */,
    subr /* IMPORTED_SHORT_NAMED_BIT */,
    supr /* IMPORTED_SHORT_NAMED_BIT */,
    xr /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_DSEType,
    _encode_DSEType,
} from "../DSAOperationalAttributeTypes/DSEType.ta";

/* START_OF_SYMBOL_DEFINITION SDSEType */
/**
 * @summary SDSEType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SDSEType  ::=  DSEType
 * ```
 */
export type SDSEType = DSEType; // DefinedType
/* END_OF_SYMBOL_DEFINITION SDSEType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SDSEType */
let _cached_decoder_for_SDSEType: $.ASN1Decoder<SDSEType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SDSEType */

/* START_OF_SYMBOL_DEFINITION _decode_SDSEType */
/**
 * @summary Decodes an ASN.1 element into a(n) SDSEType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SDSEType} The decoded data structure.
 */
export function _decode_SDSEType(el: _Element) {
    if (!_cached_decoder_for_SDSEType) {
        _cached_decoder_for_SDSEType = _decode_DSEType;
    }
    return _cached_decoder_for_SDSEType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SDSEType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SDSEType */
let _cached_encoder_for_SDSEType: $.ASN1Encoder<SDSEType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SDSEType */

/* START_OF_SYMBOL_DEFINITION _encode_SDSEType */
/**
 * @summary Encodes a(n) SDSEType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SDSEType, encoded as an ASN.1 Element.
 */
export function _encode_SDSEType(
    value: SDSEType,
    elGetter: $.ASN1Encoder<SDSEType>
) {
    if (!_cached_encoder_for_SDSEType) {
        _cached_encoder_for_SDSEType = _encode_DSEType;
    }
    return _cached_encoder_for_SDSEType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SDSEType */

/* eslint-enable */
