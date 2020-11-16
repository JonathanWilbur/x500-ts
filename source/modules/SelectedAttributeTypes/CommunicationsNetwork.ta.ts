/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CommunicationsNetwork */
/**
 * @summary CommunicationsNetwork
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommunicationsNetwork  ::=  OBJECT IDENTIFIER
 * ```
 */
export type CommunicationsNetwork = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION CommunicationsNetwork */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommunicationsNetwork */
let _cached_decoder_for_CommunicationsNetwork: $.ASN1Decoder<
    CommunicationsNetwork
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommunicationsNetwork */

/* START_OF_SYMBOL_DEFINITION _decode_CommunicationsNetwork */
/**
 * @summary Decodes an ASN.1 element into a(n) CommunicationsNetwork
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommunicationsNetwork} The decoded data structure.
 */
export function _decode_CommunicationsNetwork(el: _Element) {
    if (!_cached_decoder_for_CommunicationsNetwork) {
        _cached_decoder_for_CommunicationsNetwork = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_CommunicationsNetwork(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommunicationsNetwork */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommunicationsNetwork */
let _cached_encoder_for_CommunicationsNetwork: $.ASN1Encoder<
    CommunicationsNetwork
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommunicationsNetwork */

/* START_OF_SYMBOL_DEFINITION _encode_CommunicationsNetwork */
/**
 * @summary Encodes a(n) CommunicationsNetwork into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommunicationsNetwork, encoded as an ASN.1 Element.
 */
export function _encode_CommunicationsNetwork(
    value: CommunicationsNetwork,
    elGetter: $.ASN1Encoder<CommunicationsNetwork>
) {
    if (!_cached_encoder_for_CommunicationsNetwork) {
        _cached_encoder_for_CommunicationsNetwork = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_CommunicationsNetwork(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommunicationsNetwork */

/* eslint-enable */
