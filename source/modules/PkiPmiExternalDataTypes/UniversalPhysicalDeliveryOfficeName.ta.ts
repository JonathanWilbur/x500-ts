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

/* START_OF_SYMBOL_DEFINITION UniversalPhysicalDeliveryOfficeName */
/**
 * @summary UniversalPhysicalDeliveryOfficeName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPhysicalDeliveryOfficeName  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalPhysicalDeliveryOfficeName = UniversalPDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalPhysicalDeliveryOfficeName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPhysicalDeliveryOfficeName */
let _cached_decoder_for_UniversalPhysicalDeliveryOfficeName: $.ASN1Decoder<UniversalPhysicalDeliveryOfficeName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPhysicalDeliveryOfficeName */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalPhysicalDeliveryOfficeName */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPhysicalDeliveryOfficeName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPhysicalDeliveryOfficeName} The decoded data structure.
 */
export function _decode_UniversalPhysicalDeliveryOfficeName(el: _Element) {
    if (!_cached_decoder_for_UniversalPhysicalDeliveryOfficeName) {
        _cached_decoder_for_UniversalPhysicalDeliveryOfficeName = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPhysicalDeliveryOfficeName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalPhysicalDeliveryOfficeName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPhysicalDeliveryOfficeName */
let _cached_encoder_for_UniversalPhysicalDeliveryOfficeName: $.ASN1Encoder<UniversalPhysicalDeliveryOfficeName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPhysicalDeliveryOfficeName */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalPhysicalDeliveryOfficeName */
/**
 * @summary Encodes a(n) UniversalPhysicalDeliveryOfficeName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPhysicalDeliveryOfficeName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPhysicalDeliveryOfficeName(
    value: UniversalPhysicalDeliveryOfficeName,
    elGetter: $.ASN1Encoder<UniversalPhysicalDeliveryOfficeName>
) {
    if (!_cached_encoder_for_UniversalPhysicalDeliveryOfficeName) {
        _cached_encoder_for_UniversalPhysicalDeliveryOfficeName = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPhysicalDeliveryOfficeName(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalPhysicalDeliveryOfficeName */

/* eslint-enable */
