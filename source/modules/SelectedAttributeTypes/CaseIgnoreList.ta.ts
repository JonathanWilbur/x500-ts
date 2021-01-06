/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION CaseIgnoreList */
/**
 * @summary CaseIgnoreList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CaseIgnoreList  ::=  SEQUENCE OF UnboundedDirectoryString
 * ```
 */
export type CaseIgnoreList = UnboundedDirectoryString[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION CaseIgnoreList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CaseIgnoreList */
let _cached_decoder_for_CaseIgnoreList: $.ASN1Decoder<CaseIgnoreList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CaseIgnoreList */

/* START_OF_SYMBOL_DEFINITION _decode_CaseIgnoreList */
/**
 * @summary Decodes an ASN.1 element into a(n) CaseIgnoreList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CaseIgnoreList} The decoded data structure.
 */
export function _decode_CaseIgnoreList(el: _Element) {
    if (!_cached_decoder_for_CaseIgnoreList) {
        _cached_decoder_for_CaseIgnoreList = $._decodeSequenceOf<UnboundedDirectoryString>(
            () => _decode_UnboundedDirectoryString
        );
    }
    return _cached_decoder_for_CaseIgnoreList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CaseIgnoreList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CaseIgnoreList */
let _cached_encoder_for_CaseIgnoreList: $.ASN1Encoder<CaseIgnoreList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CaseIgnoreList */

/* START_OF_SYMBOL_DEFINITION _encode_CaseIgnoreList */
/**
 * @summary Encodes a(n) CaseIgnoreList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CaseIgnoreList, encoded as an ASN.1 Element.
 */
export function _encode_CaseIgnoreList(
    value: CaseIgnoreList,
    elGetter: $.ASN1Encoder<CaseIgnoreList>
) {
    if (!_cached_encoder_for_CaseIgnoreList) {
        _cached_encoder_for_CaseIgnoreList = $._encodeSequenceOf<UnboundedDirectoryString>(
            () => _encode_UnboundedDirectoryString,
            $.BER
        );
    }
    return _cached_encoder_for_CaseIgnoreList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CaseIgnoreList */

/* eslint-enable */
