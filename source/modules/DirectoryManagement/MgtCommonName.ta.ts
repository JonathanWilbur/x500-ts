/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION MgtCommonName */
/**
 * @summary MgtCommonName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtCommonName  ::=  UnboundedDirectoryString
 * ```
 */
export type MgtCommonName = UnboundedDirectoryString; // DefinedType
/* END_OF_SYMBOL_DEFINITION MgtCommonName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtCommonName */
let _cached_decoder_for_MgtCommonName: $.ASN1Decoder<
    MgtCommonName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtCommonName */

/* START_OF_SYMBOL_DEFINITION _decode_MgtCommonName */
/**
 * @summary Decodes an ASN.1 element into a(n) MgtCommonName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtCommonName} The decoded data structure.
 */
export function _decode_MgtCommonName(el: _Element) {
    if (!_cached_decoder_for_MgtCommonName) {
        _cached_decoder_for_MgtCommonName = _decode_UnboundedDirectoryString;
    }
    return _cached_decoder_for_MgtCommonName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MgtCommonName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtCommonName */
let _cached_encoder_for_MgtCommonName: $.ASN1Encoder<
    MgtCommonName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtCommonName */

/* START_OF_SYMBOL_DEFINITION _encode_MgtCommonName */
/**
 * @summary Encodes a(n) MgtCommonName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtCommonName, encoded as an ASN.1 Element.
 */
export function _encode_MgtCommonName(
    value: MgtCommonName,
    elGetter: $.ASN1Encoder<MgtCommonName>
) {
    if (!_cached_encoder_for_MgtCommonName) {
        _cached_encoder_for_MgtCommonName = _encode_UnboundedDirectoryString;
    }
    return _cached_encoder_for_MgtCommonName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MgtCommonName */

/* eslint-enable */
