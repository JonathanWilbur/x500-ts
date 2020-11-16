/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AddEntryArgumentData,
    _decode_AddEntryArgumentData,
    _encode_AddEntryArgumentData,
} from "../DirectoryAbstractService/AddEntryArgumentData.ta";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";
export {
    AddEntryArgumentData,
    _decode_AddEntryArgumentData,
    _encode_AddEntryArgumentData,
} from "../DirectoryAbstractService/AddEntryArgumentData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION AddEntryArgument */
/**
 * @summary AddEntryArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddEntryArgument  ::=  OPTIONALLY-PROTECTED { AddEntryArgumentData }
 * ```
 */
export type AddEntryArgument = OPTIONALLY_PROTECTED<AddEntryArgumentData>; // DefinedType
/* END_OF_SYMBOL_DEFINITION AddEntryArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddEntryArgument */
let _cached_decoder_for_AddEntryArgument: $.ASN1Decoder<
    AddEntryArgument
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddEntryArgument */

/* START_OF_SYMBOL_DEFINITION _decode_AddEntryArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) AddEntryArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddEntryArgument} The decoded data structure.
 */
export function _decode_AddEntryArgument(el: _Element) {
    if (!_cached_decoder_for_AddEntryArgument) {
        _cached_decoder_for_AddEntryArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            AddEntryArgumentData
        >(_decode_AddEntryArgumentData);
    }
    return _cached_decoder_for_AddEntryArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddEntryArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddEntryArgument */
let _cached_encoder_for_AddEntryArgument: $.ASN1Encoder<
    AddEntryArgument
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddEntryArgument */

/* START_OF_SYMBOL_DEFINITION _encode_AddEntryArgument */
/**
 * @summary Encodes a(n) AddEntryArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddEntryArgument, encoded as an ASN.1 Element.
 */
export function _encode_AddEntryArgument(
    value: AddEntryArgument,
    elGetter: $.ASN1Encoder<AddEntryArgument>
) {
    if (!_cached_encoder_for_AddEntryArgument) {
        _cached_encoder_for_AddEntryArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            AddEntryArgumentData
        >(_encode_AddEntryArgumentData);
    }
    return _cached_encoder_for_AddEntryArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddEntryArgument */

/* eslint-enable */
