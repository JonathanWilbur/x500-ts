/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { CONTEXT } from "../InformationFramework/CONTEXT.oca";
export { SupportedContexts } from "../InformationFramework/SupportedContexts.osa";

/* START_OF_SYMBOL_DEFINITION JoinContextType */
/**
 * @summary JoinContextType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * JoinContextType  ::=  CONTEXT.&id({SupportedContexts})
 * ```
 */
export type JoinContextType = OBJECT_IDENTIFIER; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION JoinContextType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_JoinContextType */
let _cached_decoder_for_JoinContextType: $.ASN1Decoder<JoinContextType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_JoinContextType */

/* START_OF_SYMBOL_DEFINITION _decode_JoinContextType */
/**
 * @summary Decodes an ASN.1 element into a(n) JoinContextType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {JoinContextType} The decoded data structure.
 */
export function _decode_JoinContextType(el: _Element) {
    if (!_cached_decoder_for_JoinContextType) {
        _cached_decoder_for_JoinContextType = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_JoinContextType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_JoinContextType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_JoinContextType */
let _cached_encoder_for_JoinContextType: $.ASN1Encoder<JoinContextType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_JoinContextType */

/* START_OF_SYMBOL_DEFINITION _encode_JoinContextType */
/**
 * @summary Encodes a(n) JoinContextType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The JoinContextType, encoded as an ASN.1 Element.
 */
export function _encode_JoinContextType(
    value: JoinContextType,
    elGetter: $.ASN1Encoder<JoinContextType>
) {
    if (!_cached_encoder_for_JoinContextType) {
        _cached_encoder_for_JoinContextType = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_JoinContextType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_JoinContextType */

/* eslint-enable */
