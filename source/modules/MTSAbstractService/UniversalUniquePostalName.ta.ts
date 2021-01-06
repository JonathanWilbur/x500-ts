/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../MTSAbstractService/UniversalPDSParameter.ta";
export {
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../MTSAbstractService/UniversalPDSParameter.ta";

/* START_OF_SYMBOL_DEFINITION UniversalUniquePostalName */
/**
 * @summary UniversalUniquePostalName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalUniquePostalName  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalUniquePostalName = UniversalPDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalUniquePostalName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalUniquePostalName */
let _cached_decoder_for_UniversalUniquePostalName: $.ASN1Decoder<UniversalUniquePostalName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalUniquePostalName */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalUniquePostalName */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalUniquePostalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalUniquePostalName} The decoded data structure.
 */
export function _decode_UniversalUniquePostalName(el: _Element) {
    if (!_cached_decoder_for_UniversalUniquePostalName) {
        _cached_decoder_for_UniversalUniquePostalName = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalUniquePostalName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalUniquePostalName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalUniquePostalName */
let _cached_encoder_for_UniversalUniquePostalName: $.ASN1Encoder<UniversalUniquePostalName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalUniquePostalName */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalUniquePostalName */
/**
 * @summary Encodes a(n) UniversalUniquePostalName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalUniquePostalName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalUniquePostalName(
    value: UniversalUniquePostalName,
    elGetter: $.ASN1Encoder<UniversalUniquePostalName>
) {
    if (!_cached_encoder_for_UniversalUniquePostalName) {
        _cached_encoder_for_UniversalUniquePostalName = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalUniquePostalName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalUniquePostalName */

/* eslint-enable */
