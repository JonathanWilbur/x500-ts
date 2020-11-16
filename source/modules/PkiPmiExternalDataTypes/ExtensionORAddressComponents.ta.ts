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

/* START_OF_SYMBOL_DEFINITION ExtensionORAddressComponents */
/**
 * @summary ExtensionORAddressComponents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionORAddressComponents  ::=  PDSParameter
 * ```
 */
export type ExtensionORAddressComponents = PDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION ExtensionORAddressComponents */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionORAddressComponents */
let _cached_decoder_for_ExtensionORAddressComponents: $.ASN1Decoder<
    ExtensionORAddressComponents
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionORAddressComponents */

/* START_OF_SYMBOL_DEFINITION _decode_ExtensionORAddressComponents */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionORAddressComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionORAddressComponents} The decoded data structure.
 */
export function _decode_ExtensionORAddressComponents(el: _Element) {
    if (!_cached_decoder_for_ExtensionORAddressComponents) {
        _cached_decoder_for_ExtensionORAddressComponents = _decode_PDSParameter;
    }
    return _cached_decoder_for_ExtensionORAddressComponents(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtensionORAddressComponents */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionORAddressComponents */
let _cached_encoder_for_ExtensionORAddressComponents: $.ASN1Encoder<
    ExtensionORAddressComponents
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionORAddressComponents */

/* START_OF_SYMBOL_DEFINITION _encode_ExtensionORAddressComponents */
/**
 * @summary Encodes a(n) ExtensionORAddressComponents into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionORAddressComponents, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionORAddressComponents(
    value: ExtensionORAddressComponents,
    elGetter: $.ASN1Encoder<ExtensionORAddressComponents>
) {
    if (!_cached_encoder_for_ExtensionORAddressComponents) {
        _cached_encoder_for_ExtensionORAddressComponents = _encode_PDSParameter;
    }
    return _cached_encoder_for_ExtensionORAddressComponents(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtensionORAddressComponents */

/* eslint-enable */
