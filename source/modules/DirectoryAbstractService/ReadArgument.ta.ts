/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ReadArgumentData,
    _decode_ReadArgumentData,
    _encode_ReadArgumentData,
} from "../DirectoryAbstractService/ReadArgumentData.ta";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";
export {
    ReadArgumentData,
    _decode_ReadArgumentData,
    _encode_ReadArgumentData,
} from "../DirectoryAbstractService/ReadArgumentData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION ReadArgument */
/**
 * @summary ReadArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReadArgument  ::=  OPTIONALLY-PROTECTED { ReadArgumentData }
 * ```
 */
export type ReadArgument = OPTIONALLY_PROTECTED<ReadArgumentData>; // DefinedType
/* END_OF_SYMBOL_DEFINITION ReadArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReadArgument */
let _cached_decoder_for_ReadArgument: $.ASN1Decoder<ReadArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReadArgument */

/* START_OF_SYMBOL_DEFINITION _decode_ReadArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) ReadArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReadArgument} The decoded data structure.
 */
export function _decode_ReadArgument(el: _Element) {
    if (!_cached_decoder_for_ReadArgument) {
        _cached_decoder_for_ReadArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            ReadArgumentData
        >(_decode_ReadArgumentData);
    }
    return _cached_decoder_for_ReadArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReadArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReadArgument */
let _cached_encoder_for_ReadArgument: $.ASN1Encoder<ReadArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReadArgument */

/* START_OF_SYMBOL_DEFINITION _encode_ReadArgument */
/**
 * @summary Encodes a(n) ReadArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReadArgument, encoded as an ASN.1 Element.
 */
export function _encode_ReadArgument(
    value: ReadArgument,
    elGetter: $.ASN1Encoder<ReadArgument>
) {
    if (!_cached_encoder_for_ReadArgument) {
        _cached_encoder_for_ReadArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            ReadArgumentData
        >(_encode_ReadArgumentData);
    }
    return _cached_encoder_for_ReadArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReadArgument */

/* eslint-enable */
