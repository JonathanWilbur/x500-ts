/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ModifyEntryArgumentData,
    _decode_ModifyEntryArgumentData,
    _encode_ModifyEntryArgumentData,
} from "../DirectoryAbstractService/ModifyEntryArgumentData.ta";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";
export {
    ModifyEntryArgumentData,
    _decode_ModifyEntryArgumentData,
    _encode_ModifyEntryArgumentData,
} from "../DirectoryAbstractService/ModifyEntryArgumentData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION ModifyEntryArgument */
/**
 * @summary ModifyEntryArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyEntryArgument  ::=  OPTIONALLY-PROTECTED { ModifyEntryArgumentData }
 * ```
 */
export type ModifyEntryArgument = OPTIONALLY_PROTECTED<ModifyEntryArgumentData>; // DefinedType
/* END_OF_SYMBOL_DEFINITION ModifyEntryArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyEntryArgument */
let _cached_decoder_for_ModifyEntryArgument: $.ASN1Decoder<
    ModifyEntryArgument
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyEntryArgument */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyEntryArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyEntryArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyEntryArgument} The decoded data structure.
 */
export function _decode_ModifyEntryArgument(el: _Element) {
    if (!_cached_decoder_for_ModifyEntryArgument) {
        _cached_decoder_for_ModifyEntryArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            ModifyEntryArgumentData
        >(_decode_ModifyEntryArgumentData);
    }
    return _cached_decoder_for_ModifyEntryArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyEntryArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyEntryArgument */
let _cached_encoder_for_ModifyEntryArgument: $.ASN1Encoder<
    ModifyEntryArgument
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyEntryArgument */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyEntryArgument */
/**
 * @summary Encodes a(n) ModifyEntryArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyEntryArgument, encoded as an ASN.1 Element.
 */
export function _encode_ModifyEntryArgument(
    value: ModifyEntryArgument,
    elGetter: $.ASN1Encoder<ModifyEntryArgument>
) {
    if (!_cached_encoder_for_ModifyEntryArgument) {
        _cached_encoder_for_ModifyEntryArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            ModifyEntryArgumentData
        >(_encode_ModifyEntryArgumentData);
    }
    return _cached_encoder_for_ModifyEntryArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyEntryArgument */

/* eslint-enable */
