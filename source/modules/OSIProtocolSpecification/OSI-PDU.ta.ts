/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION OSI_PDU */
/**
 * @summary OSI_PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OSI-PDU{APPLICATION-CONTEXT:protocol}  ::=  TYPE-IDENTIFIER.&Type (
 *   OsiBind{{protocol}} |
 *   OsiBindResult{{protocol}} |
 *   OsiBindError{{protocol}} |
 *   OsiOperation{{protocol.&Operations}} |
 *   OsiUnbind |
 *   PresentationAbort )
 * ```
 */
export type OSI_PDU = _Element; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION OSI_PDU */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OSI_PDU */
let _cached_decoder_for_OSI_PDU: $.ASN1Decoder<OSI_PDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OSI_PDU */

/* START_OF_SYMBOL_DEFINITION _decode_OSI_PDU */
/**
 * @summary Decodes an ASN.1 element into a(n) OSI_PDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OSI_PDU} The decoded data structure.
 */
export function _decode_OSI_PDU(el: _Element) {
    if (!_cached_decoder_for_OSI_PDU) {
        _cached_decoder_for_OSI_PDU = $._decodeAny;
    }
    return _cached_decoder_for_OSI_PDU(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OSI_PDU */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OSI_PDU */
let _cached_encoder_for_OSI_PDU: $.ASN1Encoder<OSI_PDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OSI_PDU */

/* START_OF_SYMBOL_DEFINITION _encode_OSI_PDU */
/**
 * @summary Encodes a(n) OSI_PDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OSI_PDU, encoded as an ASN.1 Element.
 */
export function _encode_OSI_PDU(
    value: OSI_PDU,
    elGetter: $.ASN1Encoder<OSI_PDU>
) {
    if (!_cached_encoder_for_OSI_PDU) {
        _cached_encoder_for_OSI_PDU = $._encodeAny;
    }
    return _cached_encoder_for_OSI_PDU(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OSI_PDU */

/* eslint-enable */
