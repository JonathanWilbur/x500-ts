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

/* START_OF_SYMBOL_DEFINITION Accessors */
/**
 * @summary Accessors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Accessors  ::=  SET OF Name
 * ```
 */
export type Accessors = Name[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION Accessors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Accessors */
let _cached_decoder_for_Accessors: $.ASN1Decoder<Accessors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Accessors */

/* START_OF_SYMBOL_DEFINITION _decode_Accessors */
/**
 * @summary Decodes an ASN.1 element into a(n) Accessors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Accessors} The decoded data structure.
 */
export function _decode_Accessors(el: _Element) {
    if (!_cached_decoder_for_Accessors) {
        _cached_decoder_for_Accessors = $._decodeSetOf<Name>(
            () => _decode_Name
        );
    }
    return _cached_decoder_for_Accessors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Accessors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Accessors */
let _cached_encoder_for_Accessors: $.ASN1Encoder<Accessors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Accessors */

/* START_OF_SYMBOL_DEFINITION _encode_Accessors */
/**
 * @summary Encodes a(n) Accessors into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Accessors, encoded as an ASN.1 Element.
 */
export function _encode_Accessors(
    value: Accessors,
    elGetter: $.ASN1Encoder<Accessors>
) {
    if (!_cached_encoder_for_Accessors) {
        _cached_encoder_for_Accessors = $._encodeSetOf<Name>(
            () => _encode_Name,
            $.BER
        );
    }
    return _cached_encoder_for_Accessors(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Accessors */

/* eslint-enable */
