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

/* START_OF_SYMBOL_DEFINITION UniversalPhysicalDeliveryPersonalName */
/**
 * @summary UniversalPhysicalDeliveryPersonalName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPhysicalDeliveryPersonalName  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalPhysicalDeliveryPersonalName = UniversalPDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalPhysicalDeliveryPersonalName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPhysicalDeliveryPersonalName */
let _cached_decoder_for_UniversalPhysicalDeliveryPersonalName: $.ASN1Decoder<UniversalPhysicalDeliveryPersonalName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPhysicalDeliveryPersonalName */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalPhysicalDeliveryPersonalName */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPhysicalDeliveryPersonalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPhysicalDeliveryPersonalName} The decoded data structure.
 */
export function _decode_UniversalPhysicalDeliveryPersonalName(el: _Element) {
    if (!_cached_decoder_for_UniversalPhysicalDeliveryPersonalName) {
        _cached_decoder_for_UniversalPhysicalDeliveryPersonalName = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPhysicalDeliveryPersonalName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalPhysicalDeliveryPersonalName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPhysicalDeliveryPersonalName */
let _cached_encoder_for_UniversalPhysicalDeliveryPersonalName: $.ASN1Encoder<UniversalPhysicalDeliveryPersonalName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPhysicalDeliveryPersonalName */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalPhysicalDeliveryPersonalName */
/**
 * @summary Encodes a(n) UniversalPhysicalDeliveryPersonalName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPhysicalDeliveryPersonalName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPhysicalDeliveryPersonalName(
    value: UniversalPhysicalDeliveryPersonalName,
    elGetter: $.ASN1Encoder<UniversalPhysicalDeliveryPersonalName>
) {
    if (!_cached_encoder_for_UniversalPhysicalDeliveryPersonalName) {
        _cached_encoder_for_UniversalPhysicalDeliveryPersonalName = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPhysicalDeliveryPersonalName(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalPhysicalDeliveryPersonalName */

/* eslint-enable */
