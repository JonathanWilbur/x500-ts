/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../PkiPmiExternalDataTypes/PDSParameter.ta";
export {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../PkiPmiExternalDataTypes/PDSParameter.ta";

/* START_OF_SYMBOL_DEFINITION PhysicalDeliveryOfficeName */
/**
 * @summary PhysicalDeliveryOfficeName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalDeliveryOfficeName  ::=  PDSParameter
 * ```
 */
export type PhysicalDeliveryOfficeName = PDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION PhysicalDeliveryOfficeName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalDeliveryOfficeName */
let _cached_decoder_for_PhysicalDeliveryOfficeName: $.ASN1Decoder<
    PhysicalDeliveryOfficeName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalDeliveryOfficeName */

/* START_OF_SYMBOL_DEFINITION _decode_PhysicalDeliveryOfficeName */
/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryOfficeName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryOfficeName} The decoded data structure.
 */
export function _decode_PhysicalDeliveryOfficeName(el: _Element) {
    if (!_cached_decoder_for_PhysicalDeliveryOfficeName) {
        _cached_decoder_for_PhysicalDeliveryOfficeName = _decode_PDSParameter;
    }
    return _cached_decoder_for_PhysicalDeliveryOfficeName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PhysicalDeliveryOfficeName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalDeliveryOfficeName */
let _cached_encoder_for_PhysicalDeliveryOfficeName: $.ASN1Encoder<
    PhysicalDeliveryOfficeName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalDeliveryOfficeName */

/* START_OF_SYMBOL_DEFINITION _encode_PhysicalDeliveryOfficeName */
/**
 * @summary Encodes a(n) PhysicalDeliveryOfficeName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryOfficeName, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalDeliveryOfficeName(
    value: PhysicalDeliveryOfficeName,
    elGetter: $.ASN1Encoder<PhysicalDeliveryOfficeName>
) {
    if (!_cached_encoder_for_PhysicalDeliveryOfficeName) {
        _cached_encoder_for_PhysicalDeliveryOfficeName = _encode_PDSParameter;
    }
    return _cached_encoder_for_PhysicalDeliveryOfficeName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PhysicalDeliveryOfficeName */

/* eslint-enable */
