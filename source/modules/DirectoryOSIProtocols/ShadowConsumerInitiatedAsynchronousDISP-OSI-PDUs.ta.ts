/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OSI_PDU,
    _decode_OSI_PDU,
    _encode_OSI_PDU,
} from "../OSIProtocolSpecification/OSI-PDU.ta";
export { shadowConsumerInitiatedAsynchronousAC } from "../DirectoryOSIProtocols/shadowConsumerInitiatedAsynchronousAC.oa";
export {
    OSI_PDU,
    _decode_OSI_PDU,
    _encode_OSI_PDU,
} from "../OSIProtocolSpecification/OSI-PDU.ta";

/* START_OF_SYMBOL_DEFINITION ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs */
/**
 * @summary ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ShadowConsumerInitiatedAsynchronousDISP-OSI-PDUs  ::=
 *   OSI-PDU{shadowConsumerInitiatedAsynchronousAC}
 * ```
 */
export type ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs = OSI_PDU; // DefinedType
/* END_OF_SYMBOL_DEFINITION ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs */
let _cached_decoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs: $.ASN1Decoder<
    ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs */

/* START_OF_SYMBOL_DEFINITION _decode_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs */
/**
 * @summary Decodes an ASN.1 element into a(n) ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs} The decoded data structure.
 */
export function _decode_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs(
    el: _Element
) {
    if (!_cached_decoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs) {
        _cached_decoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs = _decode_OSI_PDU;
    }
    return _cached_decoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs */
let _cached_encoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs: $.ASN1Encoder<
    ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs */

/* START_OF_SYMBOL_DEFINITION _encode_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs */
/**
 * @summary Encodes a(n) ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs, encoded as an ASN.1 Element.
 */
export function _encode_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs(
    value: ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs,
    elGetter: $.ASN1Encoder<ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs>
) {
    if (!_cached_encoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs) {
        _cached_encoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs = _encode_OSI_PDU;
    }
    return _cached_encoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs */

/* eslint-enable */
