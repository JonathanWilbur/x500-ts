/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    RequestShadowUpdateArgumentData,
    _decode_RequestShadowUpdateArgumentData,
    _encode_RequestShadowUpdateArgumentData,
} from "../DirectoryShadowAbstractService/RequestShadowUpdateArgumentData.ta";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";
export {
    RequestShadowUpdateArgumentData,
    _decode_RequestShadowUpdateArgumentData,
    _encode_RequestShadowUpdateArgumentData,
} from "../DirectoryShadowAbstractService/RequestShadowUpdateArgumentData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION RequestShadowUpdateArgument */
/**
 * @summary RequestShadowUpdateArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestShadowUpdateArgument  ::=  OPTIONALLY-PROTECTED { RequestShadowUpdateArgumentData }
 * ```
 */
export type RequestShadowUpdateArgument = OPTIONALLY_PROTECTED<
    RequestShadowUpdateArgumentData
>; // DefinedType
/* END_OF_SYMBOL_DEFINITION RequestShadowUpdateArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestShadowUpdateArgument */
let _cached_decoder_for_RequestShadowUpdateArgument: $.ASN1Decoder<
    RequestShadowUpdateArgument
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestShadowUpdateArgument */

/* START_OF_SYMBOL_DEFINITION _decode_RequestShadowUpdateArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) RequestShadowUpdateArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestShadowUpdateArgument} The decoded data structure.
 */
export function _decode_RequestShadowUpdateArgument(el: _Element) {
    if (!_cached_decoder_for_RequestShadowUpdateArgument) {
        _cached_decoder_for_RequestShadowUpdateArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            RequestShadowUpdateArgumentData
        >(_decode_RequestShadowUpdateArgumentData);
    }
    return _cached_decoder_for_RequestShadowUpdateArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RequestShadowUpdateArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestShadowUpdateArgument */
let _cached_encoder_for_RequestShadowUpdateArgument: $.ASN1Encoder<
    RequestShadowUpdateArgument
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestShadowUpdateArgument */

/* START_OF_SYMBOL_DEFINITION _encode_RequestShadowUpdateArgument */
/**
 * @summary Encodes a(n) RequestShadowUpdateArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestShadowUpdateArgument, encoded as an ASN.1 Element.
 */
export function _encode_RequestShadowUpdateArgument(
    value: RequestShadowUpdateArgument,
    elGetter: $.ASN1Encoder<RequestShadowUpdateArgument>
) {
    if (!_cached_encoder_for_RequestShadowUpdateArgument) {
        _cached_encoder_for_RequestShadowUpdateArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            RequestShadowUpdateArgumentData
        >(_encode_RequestShadowUpdateArgumentData);
    }
    return _cached_encoder_for_RequestShadowUpdateArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RequestShadowUpdateArgument */

/* eslint-enable */
