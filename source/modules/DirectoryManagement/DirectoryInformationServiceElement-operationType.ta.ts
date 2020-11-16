/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType */
/**
 * @summary DirectoryInformationServiceElement_operationType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DirectoryInformationServiceElement-operationType ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DirectoryInformationServiceElement_operationType = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType */

/* START_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType_read */
/**
 * @summary DirectoryInformationServiceElement_operationType_read
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_read: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType_read */

/* START_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType_compare */
/**
 * @summary DirectoryInformationServiceElement_operationType_compare
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_compare: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType_compare */

/* START_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType_abandon */
/**
 * @summary DirectoryInformationServiceElement_operationType_abandon
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_abandon: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType_abandon */

/* START_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType_list */
/**
 * @summary DirectoryInformationServiceElement_operationType_list
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_list: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType_list */

/* START_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType_search */
/**
 * @summary DirectoryInformationServiceElement_operationType_search
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_search: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType_search */

/* START_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType_addEntry */
/**
 * @summary DirectoryInformationServiceElement_operationType_addEntry
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_addEntry: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType_addEntry */

/* START_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType_removeEntry */
/**
 * @summary DirectoryInformationServiceElement_operationType_removeEntry
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_removeEntry: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType_removeEntry */

/* START_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType_modifyEntry */
/**
 * @summary DirectoryInformationServiceElement_operationType_modifyEntry
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_modifyEntry: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType_modifyEntry */

/* START_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType_modifyDN */
/**
 * @summary DirectoryInformationServiceElement_operationType_modifyDN
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_modifyDN: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement_operationType_modifyDN */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DirectoryInformationServiceElement_operationType */
let _cached_decoder_for_DirectoryInformationServiceElement_operationType: $.ASN1Decoder<
    DirectoryInformationServiceElement_operationType
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DirectoryInformationServiceElement_operationType */

/* START_OF_SYMBOL_DEFINITION _decode_DirectoryInformationServiceElement_operationType */
/**
 * @summary Decodes an ASN.1 element into a(n) DirectoryInformationServiceElement_operationType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DirectoryInformationServiceElement_operationType} The decoded data structure.
 */
export function _decode_DirectoryInformationServiceElement_operationType(
    el: _Element
) {
    if (!_cached_decoder_for_DirectoryInformationServiceElement_operationType) {
        _cached_decoder_for_DirectoryInformationServiceElement_operationType =
            $._decodeBitString;
    }
    return _cached_decoder_for_DirectoryInformationServiceElement_operationType(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_DirectoryInformationServiceElement_operationType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DirectoryInformationServiceElement_operationType */
let _cached_encoder_for_DirectoryInformationServiceElement_operationType: $.ASN1Encoder<
    DirectoryInformationServiceElement_operationType
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DirectoryInformationServiceElement_operationType */

/* START_OF_SYMBOL_DEFINITION _encode_DirectoryInformationServiceElement_operationType */
/**
 * @summary Encodes a(n) DirectoryInformationServiceElement_operationType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectoryInformationServiceElement_operationType, encoded as an ASN.1 Element.
 */
export function _encode_DirectoryInformationServiceElement_operationType(
    value: DirectoryInformationServiceElement_operationType,
    elGetter: $.ASN1Encoder<DirectoryInformationServiceElement_operationType>
) {
    if (!_cached_encoder_for_DirectoryInformationServiceElement_operationType) {
        _cached_encoder_for_DirectoryInformationServiceElement_operationType =
            $._encodeBitString;
    }
    return _cached_encoder_for_DirectoryInformationServiceElement_operationType(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_DirectoryInformationServiceElement_operationType */

/* eslint-enable */
