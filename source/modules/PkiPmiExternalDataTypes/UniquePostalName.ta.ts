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

/* START_OF_SYMBOL_DEFINITION UniquePostalName */
/**
 * @summary UniquePostalName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniquePostalName  ::=  PDSParameter
 * ```
 */
export type UniquePostalName = PDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniquePostalName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniquePostalName */
let _cached_decoder_for_UniquePostalName: $.ASN1Decoder<
    UniquePostalName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniquePostalName */

/* START_OF_SYMBOL_DEFINITION _decode_UniquePostalName */
/**
 * @summary Decodes an ASN.1 element into a(n) UniquePostalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniquePostalName} The decoded data structure.
 */
export function _decode_UniquePostalName(el: _Element) {
    if (!_cached_decoder_for_UniquePostalName) {
        _cached_decoder_for_UniquePostalName = _decode_PDSParameter;
    }
    return _cached_decoder_for_UniquePostalName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniquePostalName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniquePostalName */
let _cached_encoder_for_UniquePostalName: $.ASN1Encoder<
    UniquePostalName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniquePostalName */

/* START_OF_SYMBOL_DEFINITION _encode_UniquePostalName */
/**
 * @summary Encodes a(n) UniquePostalName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniquePostalName, encoded as an ASN.1 Element.
 */
export function _encode_UniquePostalName(
    value: UniquePostalName,
    elGetter: $.ASN1Encoder<UniquePostalName>
) {
    if (!_cached_encoder_for_UniquePostalName) {
        _cached_encoder_for_UniquePostalName = _encode_PDSParameter;
    }
    return _cached_encoder_for_UniquePostalName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniquePostalName */

/* eslint-enable */
