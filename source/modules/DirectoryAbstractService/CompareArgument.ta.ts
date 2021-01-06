/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CompareArgumentData,
    _decode_CompareArgumentData,
    _encode_CompareArgumentData,
} from "../DirectoryAbstractService/CompareArgumentData.ta";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";
export {
    CompareArgumentData,
    _decode_CompareArgumentData,
    _encode_CompareArgumentData,
} from "../DirectoryAbstractService/CompareArgumentData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION CompareArgument */
/**
 * @summary CompareArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CompareArgument  ::=  OPTIONALLY-PROTECTED { CompareArgumentData }
 * ```
 */
export type CompareArgument = OPTIONALLY_PROTECTED<CompareArgumentData>; // DefinedType
/* END_OF_SYMBOL_DEFINITION CompareArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CompareArgument */
let _cached_decoder_for_CompareArgument: $.ASN1Decoder<CompareArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CompareArgument */

/* START_OF_SYMBOL_DEFINITION _decode_CompareArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) CompareArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CompareArgument} The decoded data structure.
 */
export function _decode_CompareArgument(el: _Element) {
    if (!_cached_decoder_for_CompareArgument) {
        _cached_decoder_for_CompareArgument = _get_decoder_for_OPTIONALLY_PROTECTED<CompareArgumentData>(
            _decode_CompareArgumentData
        );
    }
    return _cached_decoder_for_CompareArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CompareArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CompareArgument */
let _cached_encoder_for_CompareArgument: $.ASN1Encoder<CompareArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CompareArgument */

/* START_OF_SYMBOL_DEFINITION _encode_CompareArgument */
/**
 * @summary Encodes a(n) CompareArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompareArgument, encoded as an ASN.1 Element.
 */
export function _encode_CompareArgument(
    value: CompareArgument,
    elGetter: $.ASN1Encoder<CompareArgument>
) {
    if (!_cached_encoder_for_CompareArgument) {
        _cached_encoder_for_CompareArgument = _get_encoder_for_OPTIONALLY_PROTECTED<CompareArgumentData>(
            _encode_CompareArgumentData
        );
    }
    return _cached_encoder_for_CompareArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CompareArgument */

/* eslint-enable */
