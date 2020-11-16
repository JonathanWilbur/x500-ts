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

/* START_OF_SYMBOL_DEFINITION UniversalPhysicalDeliveryOfficeNumber */
/**
 * @summary UniversalPhysicalDeliveryOfficeNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPhysicalDeliveryOfficeNumber  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalPhysicalDeliveryOfficeNumber = UniversalPDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalPhysicalDeliveryOfficeNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPhysicalDeliveryOfficeNumber */
let _cached_decoder_for_UniversalPhysicalDeliveryOfficeNumber: $.ASN1Decoder<
    UniversalPhysicalDeliveryOfficeNumber
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPhysicalDeliveryOfficeNumber */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalPhysicalDeliveryOfficeNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPhysicalDeliveryOfficeNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPhysicalDeliveryOfficeNumber} The decoded data structure.
 */
export function _decode_UniversalPhysicalDeliveryOfficeNumber(el: _Element) {
    if (!_cached_decoder_for_UniversalPhysicalDeliveryOfficeNumber) {
        _cached_decoder_for_UniversalPhysicalDeliveryOfficeNumber = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPhysicalDeliveryOfficeNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalPhysicalDeliveryOfficeNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPhysicalDeliveryOfficeNumber */
let _cached_encoder_for_UniversalPhysicalDeliveryOfficeNumber: $.ASN1Encoder<
    UniversalPhysicalDeliveryOfficeNumber
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPhysicalDeliveryOfficeNumber */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalPhysicalDeliveryOfficeNumber */
/**
 * @summary Encodes a(n) UniversalPhysicalDeliveryOfficeNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPhysicalDeliveryOfficeNumber, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPhysicalDeliveryOfficeNumber(
    value: UniversalPhysicalDeliveryOfficeNumber,
    elGetter: $.ASN1Encoder<UniversalPhysicalDeliveryOfficeNumber>
) {
    if (!_cached_encoder_for_UniversalPhysicalDeliveryOfficeNumber) {
        _cached_encoder_for_UniversalPhysicalDeliveryOfficeNumber = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPhysicalDeliveryOfficeNumber(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalPhysicalDeliveryOfficeNumber */

/* eslint-enable */
