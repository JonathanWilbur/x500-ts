/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { ABSTRACT_SYNTAX } from "../DistributedOperations/ABSTRACT-SYNTAX.oca";

/* START_OF_SYMBOL_DEFINITION DomainInfo */
/**
 * @summary DomainInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DomainInfo  ::=  ABSTRACT-SYNTAX.&Type
 * ```
 */
export type DomainInfo = _Element; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION DomainInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DomainInfo */
let _cached_decoder_for_DomainInfo: $.ASN1Decoder<DomainInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DomainInfo */

/* START_OF_SYMBOL_DEFINITION _decode_DomainInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) DomainInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DomainInfo} The decoded data structure.
 */
export function _decode_DomainInfo(el: _Element) {
    if (!_cached_decoder_for_DomainInfo) {
        _cached_decoder_for_DomainInfo = $._decodeAny;
    }
    return _cached_decoder_for_DomainInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DomainInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DomainInfo */
let _cached_encoder_for_DomainInfo: $.ASN1Encoder<DomainInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DomainInfo */

/* START_OF_SYMBOL_DEFINITION _encode_DomainInfo */
/**
 * @summary Encodes a(n) DomainInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainInfo, encoded as an ASN.1 Element.
 */
export function _encode_DomainInfo(
    value: DomainInfo,
    elGetter: $.ASN1Encoder<DomainInfo>
) {
    if (!_cached_encoder_for_DomainInfo) {
        _cached_encoder_for_DomainInfo = $._encodeAny;
    }
    return _cached_encoder_for_DomainInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DomainInfo */

/* eslint-enable */
