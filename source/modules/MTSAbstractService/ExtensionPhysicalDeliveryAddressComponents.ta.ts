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

/* START_OF_SYMBOL_DEFINITION ExtensionPhysicalDeliveryAddressComponents */
/**
 * @summary ExtensionPhysicalDeliveryAddressComponents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionPhysicalDeliveryAddressComponents  ::=  PDSParameter
 * ```
 */
export type ExtensionPhysicalDeliveryAddressComponents = PDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION ExtensionPhysicalDeliveryAddressComponents */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionPhysicalDeliveryAddressComponents */
let _cached_decoder_for_ExtensionPhysicalDeliveryAddressComponents: $.ASN1Decoder<
    ExtensionPhysicalDeliveryAddressComponents
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionPhysicalDeliveryAddressComponents */

/* START_OF_SYMBOL_DEFINITION _decode_ExtensionPhysicalDeliveryAddressComponents */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionPhysicalDeliveryAddressComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionPhysicalDeliveryAddressComponents} The decoded data structure.
 */
export function _decode_ExtensionPhysicalDeliveryAddressComponents(
    el: _Element
) {
    if (!_cached_decoder_for_ExtensionPhysicalDeliveryAddressComponents) {
        _cached_decoder_for_ExtensionPhysicalDeliveryAddressComponents = _decode_PDSParameter;
    }
    return _cached_decoder_for_ExtensionPhysicalDeliveryAddressComponents(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtensionPhysicalDeliveryAddressComponents */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionPhysicalDeliveryAddressComponents */
let _cached_encoder_for_ExtensionPhysicalDeliveryAddressComponents: $.ASN1Encoder<
    ExtensionPhysicalDeliveryAddressComponents
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionPhysicalDeliveryAddressComponents */

/* START_OF_SYMBOL_DEFINITION _encode_ExtensionPhysicalDeliveryAddressComponents */
/**
 * @summary Encodes a(n) ExtensionPhysicalDeliveryAddressComponents into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionPhysicalDeliveryAddressComponents, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionPhysicalDeliveryAddressComponents(
    value: ExtensionPhysicalDeliveryAddressComponents,
    elGetter: $.ASN1Encoder<ExtensionPhysicalDeliveryAddressComponents>
) {
    if (!_cached_encoder_for_ExtensionPhysicalDeliveryAddressComponents) {
        _cached_encoder_for_ExtensionPhysicalDeliveryAddressComponents = _encode_PDSParameter;
    }
    return _cached_encoder_for_ExtensionPhysicalDeliveryAddressComponents(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtensionPhysicalDeliveryAddressComponents */

/* eslint-enable */
