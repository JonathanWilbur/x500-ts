/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    RemoveEntryArgumentData,
    _decode_RemoveEntryArgumentData,
    _encode_RemoveEntryArgumentData,
} from "../DirectoryAbstractService/RemoveEntryArgumentData.ta";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";
export {
    RemoveEntryArgumentData,
    _decode_RemoveEntryArgumentData,
    _encode_RemoveEntryArgumentData,
} from "../DirectoryAbstractService/RemoveEntryArgumentData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION RemoveEntryArgument */
/**
 * @summary RemoveEntryArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveEntryArgument  ::=  OPTIONALLY-PROTECTED { RemoveEntryArgumentData }
 * ```
 */
export type RemoveEntryArgument = OPTIONALLY_PROTECTED<RemoveEntryArgumentData>; // DefinedType
/* END_OF_SYMBOL_DEFINITION RemoveEntryArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveEntryArgument */
let _cached_decoder_for_RemoveEntryArgument: $.ASN1Decoder<RemoveEntryArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveEntryArgument */

/* START_OF_SYMBOL_DEFINITION _decode_RemoveEntryArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) RemoveEntryArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveEntryArgument} The decoded data structure.
 */
export function _decode_RemoveEntryArgument(el: _Element) {
    if (!_cached_decoder_for_RemoveEntryArgument) {
        _cached_decoder_for_RemoveEntryArgument = _get_decoder_for_OPTIONALLY_PROTECTED<RemoveEntryArgumentData>(
            _decode_RemoveEntryArgumentData
        );
    }
    return _cached_decoder_for_RemoveEntryArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RemoveEntryArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveEntryArgument */
let _cached_encoder_for_RemoveEntryArgument: $.ASN1Encoder<RemoveEntryArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveEntryArgument */

/* START_OF_SYMBOL_DEFINITION _encode_RemoveEntryArgument */
/**
 * @summary Encodes a(n) RemoveEntryArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveEntryArgument, encoded as an ASN.1 Element.
 */
export function _encode_RemoveEntryArgument(
    value: RemoveEntryArgument,
    elGetter: $.ASN1Encoder<RemoveEntryArgument>
) {
    if (!_cached_encoder_for_RemoveEntryArgument) {
        _cached_encoder_for_RemoveEntryArgument = _get_encoder_for_OPTIONALLY_PROTECTED<RemoveEntryArgumentData>(
            _encode_RemoveEntryArgumentData
        );
    }
    return _cached_encoder_for_RemoveEntryArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RemoveEntryArgument */

/* eslint-enable */
