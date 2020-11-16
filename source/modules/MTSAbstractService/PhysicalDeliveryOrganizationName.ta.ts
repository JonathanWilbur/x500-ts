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

/* START_OF_SYMBOL_DEFINITION PhysicalDeliveryOrganizationName */
/**
 * @summary PhysicalDeliveryOrganizationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalDeliveryOrganizationName  ::=  PDSParameter
 * ```
 */
export type PhysicalDeliveryOrganizationName = PDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION PhysicalDeliveryOrganizationName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalDeliveryOrganizationName */
let _cached_decoder_for_PhysicalDeliveryOrganizationName: $.ASN1Decoder<
    PhysicalDeliveryOrganizationName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalDeliveryOrganizationName */

/* START_OF_SYMBOL_DEFINITION _decode_PhysicalDeliveryOrganizationName */
/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryOrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryOrganizationName} The decoded data structure.
 */
export function _decode_PhysicalDeliveryOrganizationName(el: _Element) {
    if (!_cached_decoder_for_PhysicalDeliveryOrganizationName) {
        _cached_decoder_for_PhysicalDeliveryOrganizationName = _decode_PDSParameter;
    }
    return _cached_decoder_for_PhysicalDeliveryOrganizationName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PhysicalDeliveryOrganizationName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalDeliveryOrganizationName */
let _cached_encoder_for_PhysicalDeliveryOrganizationName: $.ASN1Encoder<
    PhysicalDeliveryOrganizationName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalDeliveryOrganizationName */

/* START_OF_SYMBOL_DEFINITION _encode_PhysicalDeliveryOrganizationName */
/**
 * @summary Encodes a(n) PhysicalDeliveryOrganizationName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryOrganizationName, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalDeliveryOrganizationName(
    value: PhysicalDeliveryOrganizationName,
    elGetter: $.ASN1Encoder<PhysicalDeliveryOrganizationName>
) {
    if (!_cached_encoder_for_PhysicalDeliveryOrganizationName) {
        _cached_encoder_for_PhysicalDeliveryOrganizationName = _encode_PDSParameter;
    }
    return _cached_encoder_for_PhysicalDeliveryOrganizationName(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_PhysicalDeliveryOrganizationName */

/* eslint-enable */
