/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CommunicationsService */
/**
 * @summary CommunicationsService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommunicationsService  ::=  OBJECT IDENTIFIER
 * ```
 */
export type CommunicationsService = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION CommunicationsService */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommunicationsService */
let _cached_decoder_for_CommunicationsService: $.ASN1Decoder<CommunicationsService> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommunicationsService */

/* START_OF_SYMBOL_DEFINITION _decode_CommunicationsService */
/**
 * @summary Decodes an ASN.1 element into a(n) CommunicationsService
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommunicationsService} The decoded data structure.
 */
export function _decode_CommunicationsService(el: _Element) {
    if (!_cached_decoder_for_CommunicationsService) {
        _cached_decoder_for_CommunicationsService = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_CommunicationsService(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommunicationsService */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommunicationsService */
let _cached_encoder_for_CommunicationsService: $.ASN1Encoder<CommunicationsService> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommunicationsService */

/* START_OF_SYMBOL_DEFINITION _encode_CommunicationsService */
/**
 * @summary Encodes a(n) CommunicationsService into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommunicationsService, encoded as an ASN.1 Element.
 */
export function _encode_CommunicationsService(
    value: CommunicationsService,
    elGetter: $.ASN1Encoder<CommunicationsService>
) {
    if (!_cached_encoder_for_CommunicationsService) {
        _cached_encoder_for_CommunicationsService = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_CommunicationsService(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommunicationsService */

/* eslint-enable */
