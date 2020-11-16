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

/* START_OF_SYMBOL_DEFINITION UniversalExtensionORAddressComponents */
/**
 * @summary UniversalExtensionORAddressComponents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalExtensionORAddressComponents  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalExtensionORAddressComponents = UniversalPDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalExtensionORAddressComponents */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalExtensionORAddressComponents */
let _cached_decoder_for_UniversalExtensionORAddressComponents: $.ASN1Decoder<
    UniversalExtensionORAddressComponents
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalExtensionORAddressComponents */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalExtensionORAddressComponents */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalExtensionORAddressComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalExtensionORAddressComponents} The decoded data structure.
 */
export function _decode_UniversalExtensionORAddressComponents(el: _Element) {
    if (!_cached_decoder_for_UniversalExtensionORAddressComponents) {
        _cached_decoder_for_UniversalExtensionORAddressComponents = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalExtensionORAddressComponents(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalExtensionORAddressComponents */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalExtensionORAddressComponents */
let _cached_encoder_for_UniversalExtensionORAddressComponents: $.ASN1Encoder<
    UniversalExtensionORAddressComponents
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalExtensionORAddressComponents */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalExtensionORAddressComponents */
/**
 * @summary Encodes a(n) UniversalExtensionORAddressComponents into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalExtensionORAddressComponents, encoded as an ASN.1 Element.
 */
export function _encode_UniversalExtensionORAddressComponents(
    value: UniversalExtensionORAddressComponents,
    elGetter: $.ASN1Encoder<UniversalExtensionORAddressComponents>
) {
    if (!_cached_encoder_for_UniversalExtensionORAddressComponents) {
        _cached_encoder_for_UniversalExtensionORAddressComponents = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalExtensionORAddressComponents(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalExtensionORAddressComponents */

/* eslint-enable */
