/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OSI_PDU,
    _decode_OSI_PDU,
    _encode_OSI_PDU,
} from "../OSIProtocolSpecification/OSI-PDU.ta";
export { directoryAccessAC } from "../DirectoryOSIProtocols/directoryAccessAC.va";
export {
    OSI_PDU,
    _decode_OSI_PDU,
    _encode_OSI_PDU,
} from "../OSIProtocolSpecification/OSI-PDU.ta";

/* START_OF_SYMBOL_DEFINITION DAP_OSI_PDUs */
/**
 * @summary DAP_OSI_PDUs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DAP-OSI-PDUs  ::=  OSI-PDU{directoryAccessAC}
 * ```
 */
export type DAP_OSI_PDUs = OSI_PDU; // DefinedType
/* END_OF_SYMBOL_DEFINITION DAP_OSI_PDUs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DAP_OSI_PDUs */
let _cached_decoder_for_DAP_OSI_PDUs: $.ASN1Decoder<DAP_OSI_PDUs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DAP_OSI_PDUs */

/* START_OF_SYMBOL_DEFINITION _decode_DAP_OSI_PDUs */
/**
 * @summary Decodes an ASN.1 element into a(n) DAP_OSI_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DAP_OSI_PDUs} The decoded data structure.
 */
export function _decode_DAP_OSI_PDUs(el: _Element) {
    if (!_cached_decoder_for_DAP_OSI_PDUs) {
        _cached_decoder_for_DAP_OSI_PDUs = _decode_OSI_PDU;
    }
    return _cached_decoder_for_DAP_OSI_PDUs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DAP_OSI_PDUs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DAP_OSI_PDUs */
let _cached_encoder_for_DAP_OSI_PDUs: $.ASN1Encoder<DAP_OSI_PDUs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DAP_OSI_PDUs */

/* START_OF_SYMBOL_DEFINITION _encode_DAP_OSI_PDUs */
/**
 * @summary Encodes a(n) DAP_OSI_PDUs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DAP_OSI_PDUs, encoded as an ASN.1 Element.
 */
export function _encode_DAP_OSI_PDUs(
    value: DAP_OSI_PDUs,
    elGetter: $.ASN1Encoder<DAP_OSI_PDUs>
) {
    if (!_cached_encoder_for_DAP_OSI_PDUs) {
        _cached_encoder_for_DAP_OSI_PDUs = _encode_OSI_PDU;
    }
    return _cached_encoder_for_DAP_OSI_PDUs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DAP_OSI_PDUs */

/* eslint-enable */
