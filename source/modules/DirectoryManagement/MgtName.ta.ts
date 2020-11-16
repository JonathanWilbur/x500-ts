/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";

/* START_OF_SYMBOL_DEFINITION MgtName */
/**
 * @summary MgtName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtName  ::=  Name
 * ```
 */
export type MgtName = Name; // DefinedType
/* END_OF_SYMBOL_DEFINITION MgtName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtName */
let _cached_decoder_for_MgtName: $.ASN1Decoder<MgtName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtName */

/* START_OF_SYMBOL_DEFINITION _decode_MgtName */
/**
 * @summary Decodes an ASN.1 element into a(n) MgtName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtName} The decoded data structure.
 */
export function _decode_MgtName(el: _Element) {
    if (!_cached_decoder_for_MgtName) {
        _cached_decoder_for_MgtName = _decode_Name;
    }
    return _cached_decoder_for_MgtName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MgtName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtName */
let _cached_encoder_for_MgtName: $.ASN1Encoder<MgtName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtName */

/* START_OF_SYMBOL_DEFINITION _encode_MgtName */
/**
 * @summary Encodes a(n) MgtName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtName, encoded as an ASN.1 Element.
 */
export function _encode_MgtName(
    value: MgtName,
    elGetter: $.ASN1Encoder<MgtName>
) {
    if (!_cached_encoder_for_MgtName) {
        _cached_encoder_for_MgtName = _encode_Name;
    }
    return _cached_encoder_for_MgtName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MgtName */

/* eslint-enable */
