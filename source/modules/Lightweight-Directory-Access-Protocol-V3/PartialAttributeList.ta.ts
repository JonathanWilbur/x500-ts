/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PartialAttribute,
    _decode_PartialAttribute,
    _encode_PartialAttribute,
} from "../Lightweight_Directory_Access_Protocol_V3/PartialAttribute.ta";
export {
    PartialAttribute,
    _decode_PartialAttribute,
    _encode_PartialAttribute,
} from "../Lightweight_Directory_Access_Protocol_V3/PartialAttribute.ta";

/* START_OF_SYMBOL_DEFINITION PartialAttributeList */
/**
 * @summary PartialAttributeList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PartialAttributeList  ::=  SEQUENCE OF partialAttribute PartialAttribute
 * ```
 */
export type PartialAttributeList = PartialAttribute[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION PartialAttributeList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PartialAttributeList */
let _cached_decoder_for_PartialAttributeList: $.ASN1Decoder<
    PartialAttributeList
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PartialAttributeList */

/* START_OF_SYMBOL_DEFINITION _decode_PartialAttributeList */
/**
 * @summary Decodes an ASN.1 element into a(n) PartialAttributeList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PartialAttributeList} The decoded data structure.
 */
export function _decode_PartialAttributeList(el: _Element) {
    if (!_cached_decoder_for_PartialAttributeList) {
        _cached_decoder_for_PartialAttributeList = $._decodeSequenceOf<
            PartialAttribute
        >(() => _decode_PartialAttribute);
    }
    return _cached_decoder_for_PartialAttributeList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PartialAttributeList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PartialAttributeList */
let _cached_encoder_for_PartialAttributeList: $.ASN1Encoder<
    PartialAttributeList
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PartialAttributeList */

/* START_OF_SYMBOL_DEFINITION _encode_PartialAttributeList */
/**
 * @summary Encodes a(n) PartialAttributeList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartialAttributeList, encoded as an ASN.1 Element.
 */
export function _encode_PartialAttributeList(
    value: PartialAttributeList,
    elGetter: $.ASN1Encoder<PartialAttributeList>
) {
    if (!_cached_encoder_for_PartialAttributeList) {
        _cached_encoder_for_PartialAttributeList = $._encodeSequenceOf<
            PartialAttribute
        >(() => _encode_PartialAttribute, $.BER);
    }
    return _cached_encoder_for_PartialAttributeList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PartialAttributeList */

/* eslint-enable */
