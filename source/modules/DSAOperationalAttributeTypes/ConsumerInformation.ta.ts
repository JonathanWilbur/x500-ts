/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SupplierOrConsumer,
    _decode_SupplierOrConsumer,
    _encode_SupplierOrConsumer,
} from "../DSAOperationalAttributeTypes/SupplierOrConsumer.ta";
export {
    SupplierOrConsumer,
    _decode_SupplierOrConsumer,
    _encode_SupplierOrConsumer,
} from "../DSAOperationalAttributeTypes/SupplierOrConsumer.ta";

/* START_OF_SYMBOL_DEFINITION ConsumerInformation */
/**
 * @summary ConsumerInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConsumerInformation  ::=  SupplierOrConsumer
 * ```
 */
export type ConsumerInformation = SupplierOrConsumer; // DefinedType
/* END_OF_SYMBOL_DEFINITION ConsumerInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConsumerInformation */
let _cached_decoder_for_ConsumerInformation: $.ASN1Decoder<
    ConsumerInformation
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConsumerInformation */

/* START_OF_SYMBOL_DEFINITION _decode_ConsumerInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) ConsumerInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConsumerInformation} The decoded data structure.
 */
export function _decode_ConsumerInformation(el: _Element) {
    if (!_cached_decoder_for_ConsumerInformation) {
        _cached_decoder_for_ConsumerInformation = _decode_SupplierOrConsumer;
    }
    return _cached_decoder_for_ConsumerInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConsumerInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConsumerInformation */
let _cached_encoder_for_ConsumerInformation: $.ASN1Encoder<
    ConsumerInformation
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConsumerInformation */

/* START_OF_SYMBOL_DEFINITION _encode_ConsumerInformation */
/**
 * @summary Encodes a(n) ConsumerInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConsumerInformation, encoded as an ASN.1 Element.
 */
export function _encode_ConsumerInformation(
    value: ConsumerInformation,
    elGetter: $.ASN1Encoder<ConsumerInformation>
) {
    if (!_cached_encoder_for_ConsumerInformation) {
        _cached_encoder_for_ConsumerInformation = _encode_SupplierOrConsumer;
    }
    return _cached_encoder_for_ConsumerInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConsumerInformation */

/* eslint-enable */
