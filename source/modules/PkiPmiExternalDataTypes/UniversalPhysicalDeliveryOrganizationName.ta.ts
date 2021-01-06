/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../PkiPmiExternalDataTypes/UniversalPDSParameter.ta";
export {
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../PkiPmiExternalDataTypes/UniversalPDSParameter.ta";

/* START_OF_SYMBOL_DEFINITION UniversalPhysicalDeliveryOrganizationName */
/**
 * @summary UniversalPhysicalDeliveryOrganizationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPhysicalDeliveryOrganizationName  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalPhysicalDeliveryOrganizationName = UniversalPDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalPhysicalDeliveryOrganizationName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPhysicalDeliveryOrganizationName */
let _cached_decoder_for_UniversalPhysicalDeliveryOrganizationName: $.ASN1Decoder<UniversalPhysicalDeliveryOrganizationName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPhysicalDeliveryOrganizationName */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalPhysicalDeliveryOrganizationName */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPhysicalDeliveryOrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPhysicalDeliveryOrganizationName} The decoded data structure.
 */
export function _decode_UniversalPhysicalDeliveryOrganizationName(
    el: _Element
) {
    if (!_cached_decoder_for_UniversalPhysicalDeliveryOrganizationName) {
        _cached_decoder_for_UniversalPhysicalDeliveryOrganizationName = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPhysicalDeliveryOrganizationName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalPhysicalDeliveryOrganizationName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPhysicalDeliveryOrganizationName */
let _cached_encoder_for_UniversalPhysicalDeliveryOrganizationName: $.ASN1Encoder<UniversalPhysicalDeliveryOrganizationName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPhysicalDeliveryOrganizationName */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalPhysicalDeliveryOrganizationName */
/**
 * @summary Encodes a(n) UniversalPhysicalDeliveryOrganizationName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPhysicalDeliveryOrganizationName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPhysicalDeliveryOrganizationName(
    value: UniversalPhysicalDeliveryOrganizationName,
    elGetter: $.ASN1Encoder<UniversalPhysicalDeliveryOrganizationName>
) {
    if (!_cached_encoder_for_UniversalPhysicalDeliveryOrganizationName) {
        _cached_encoder_for_UniversalPhysicalDeliveryOrganizationName = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPhysicalDeliveryOrganizationName(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalPhysicalDeliveryOrganizationName */

/* eslint-enable */
