/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ListArgumentData,
    _decode_ListArgumentData,
    _encode_ListArgumentData,
} from "../DirectoryAbstractService/ListArgumentData.ta";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";
export {
    ListArgumentData,
    _decode_ListArgumentData,
    _encode_ListArgumentData,
} from "../DirectoryAbstractService/ListArgumentData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION ListArgument */
/**
 * @summary ListArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ListArgument  ::=  OPTIONALLY-PROTECTED { ListArgumentData }
 * ```
 */
export type ListArgument = OPTIONALLY_PROTECTED<ListArgumentData>; // DefinedType
/* END_OF_SYMBOL_DEFINITION ListArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ListArgument */
let _cached_decoder_for_ListArgument: $.ASN1Decoder<ListArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ListArgument */

/* START_OF_SYMBOL_DEFINITION _decode_ListArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) ListArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ListArgument} The decoded data structure.
 */
export function _decode_ListArgument(el: _Element) {
    if (!_cached_decoder_for_ListArgument) {
        _cached_decoder_for_ListArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            ListArgumentData
        >(_decode_ListArgumentData);
    }
    return _cached_decoder_for_ListArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ListArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ListArgument */
let _cached_encoder_for_ListArgument: $.ASN1Encoder<ListArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ListArgument */

/* START_OF_SYMBOL_DEFINITION _encode_ListArgument */
/**
 * @summary Encodes a(n) ListArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListArgument, encoded as an ASN.1 Element.
 */
export function _encode_ListArgument(
    value: ListArgument,
    elGetter: $.ASN1Encoder<ListArgument>
) {
    if (!_cached_encoder_for_ListArgument) {
        _cached_encoder_for_ListArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            ListArgumentData
        >(_encode_ListArgumentData);
    }
    return _cached_encoder_for_ListArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ListArgument */

/* eslint-enable */
