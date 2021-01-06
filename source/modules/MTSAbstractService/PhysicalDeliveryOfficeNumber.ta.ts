/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../MTSAbstractService/PDSParameter.ta";
export {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../MTSAbstractService/PDSParameter.ta";

/* START_OF_SYMBOL_DEFINITION PhysicalDeliveryOfficeNumber */
/**
 * @summary PhysicalDeliveryOfficeNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalDeliveryOfficeNumber  ::=  PDSParameter
 * ```
 */
export type PhysicalDeliveryOfficeNumber = PDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION PhysicalDeliveryOfficeNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalDeliveryOfficeNumber */
let _cached_decoder_for_PhysicalDeliveryOfficeNumber: $.ASN1Decoder<PhysicalDeliveryOfficeNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalDeliveryOfficeNumber */

/* START_OF_SYMBOL_DEFINITION _decode_PhysicalDeliveryOfficeNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryOfficeNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryOfficeNumber} The decoded data structure.
 */
export function _decode_PhysicalDeliveryOfficeNumber(el: _Element) {
    if (!_cached_decoder_for_PhysicalDeliveryOfficeNumber) {
        _cached_decoder_for_PhysicalDeliveryOfficeNumber = _decode_PDSParameter;
    }
    return _cached_decoder_for_PhysicalDeliveryOfficeNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PhysicalDeliveryOfficeNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalDeliveryOfficeNumber */
let _cached_encoder_for_PhysicalDeliveryOfficeNumber: $.ASN1Encoder<PhysicalDeliveryOfficeNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalDeliveryOfficeNumber */

/* START_OF_SYMBOL_DEFINITION _encode_PhysicalDeliveryOfficeNumber */
/**
 * @summary Encodes a(n) PhysicalDeliveryOfficeNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryOfficeNumber, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalDeliveryOfficeNumber(
    value: PhysicalDeliveryOfficeNumber,
    elGetter: $.ASN1Encoder<PhysicalDeliveryOfficeNumber>
) {
    if (!_cached_encoder_for_PhysicalDeliveryOfficeNumber) {
        _cached_encoder_for_PhysicalDeliveryOfficeNumber = _encode_PDSParameter;
    }
    return _cached_encoder_for_PhysicalDeliveryOfficeNumber(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PhysicalDeliveryOfficeNumber */

/* eslint-enable */
