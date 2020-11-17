/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION EntryInformationSelection_infoTypes */
/**
 * @summary EntryInformationSelection_infoTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryInformationSelection-infoTypes ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EntryInformationSelection_infoTypes = INTEGER;
/* END_OF_SYMBOL_DEFINITION EntryInformationSelection_infoTypes */

/* START_OF_SYMBOL_DEFINITION EntryInformationSelection_infoTypes_attributeTypesOnly */
/**
 * @summary EntryInformationSelection_infoTypes_attributeTypesOnly
 * @constant
 * @type {number}
 */
export const EntryInformationSelection_infoTypes_attributeTypesOnly: EntryInformationSelection_infoTypes = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EntryInformationSelection_infoTypes_attributeTypesOnly */

/* START_OF_SYMBOL_DEFINITION attributeTypesOnly */
/**
 * @summary EntryInformationSelection_infoTypes_attributeTypesOnly
 * @constant
 * @type {number}
 */
export const attributeTypesOnly: EntryInformationSelection_infoTypes = EntryInformationSelection_infoTypes_attributeTypesOnly; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION attributeTypesOnly */

/* START_OF_SYMBOL_DEFINITION EntryInformationSelection_infoTypes_attributeTypesAndValues */
/**
 * @summary EntryInformationSelection_infoTypes_attributeTypesAndValues
 * @constant
 * @type {number}
 */
export const EntryInformationSelection_infoTypes_attributeTypesAndValues: EntryInformationSelection_infoTypes = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EntryInformationSelection_infoTypes_attributeTypesAndValues */

/* START_OF_SYMBOL_DEFINITION attributeTypesAndValues */
/**
 * @summary EntryInformationSelection_infoTypes_attributeTypesAndValues
 * @constant
 * @type {number}
 */
export const attributeTypesAndValues: EntryInformationSelection_infoTypes = EntryInformationSelection_infoTypes_attributeTypesAndValues; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION attributeTypesAndValues */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryInformationSelection_infoTypes */
let _cached_decoder_for_EntryInformationSelection_infoTypes: $.ASN1Decoder<
    EntryInformationSelection_infoTypes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryInformationSelection_infoTypes */

/* START_OF_SYMBOL_DEFINITION _decode_EntryInformationSelection_infoTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) EntryInformationSelection_infoTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryInformationSelection_infoTypes} The decoded data structure.
 */
export function _decode_EntryInformationSelection_infoTypes(el: _Element) {
    if (!_cached_decoder_for_EntryInformationSelection_infoTypes) {
        _cached_decoder_for_EntryInformationSelection_infoTypes =
            $._decodeInteger;
    }
    return _cached_decoder_for_EntryInformationSelection_infoTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EntryInformationSelection_infoTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryInformationSelection_infoTypes */
let _cached_encoder_for_EntryInformationSelection_infoTypes: $.ASN1Encoder<
    EntryInformationSelection_infoTypes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryInformationSelection_infoTypes */

/* START_OF_SYMBOL_DEFINITION _encode_EntryInformationSelection_infoTypes */
/**
 * @summary Encodes a(n) EntryInformationSelection_infoTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryInformationSelection_infoTypes, encoded as an ASN.1 Element.
 */
export function _encode_EntryInformationSelection_infoTypes(
    value: EntryInformationSelection_infoTypes,
    elGetter: $.ASN1Encoder<EntryInformationSelection_infoTypes>
) {
    if (!_cached_encoder_for_EntryInformationSelection_infoTypes) {
        _cached_encoder_for_EntryInformationSelection_infoTypes =
            $._encodeInteger;
    }
    return _cached_encoder_for_EntryInformationSelection_infoTypes(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_EntryInformationSelection_infoTypes */

/* eslint-enable */
