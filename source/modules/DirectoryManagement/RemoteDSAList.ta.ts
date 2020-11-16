/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "../DistributedOperations/AccessPoint.ta";
export {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "../DistributedOperations/AccessPoint.ta";

/* START_OF_SYMBOL_DEFINITION RemoteDSAList */
/**
 * @summary RemoteDSAList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoteDSAList  ::=  SET OF AccessPoint
 * ```
 */
export type RemoteDSAList = AccessPoint[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION RemoteDSAList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoteDSAList */
let _cached_decoder_for_RemoteDSAList: $.ASN1Decoder<
    RemoteDSAList
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoteDSAList */

/* START_OF_SYMBOL_DEFINITION _decode_RemoteDSAList */
/**
 * @summary Decodes an ASN.1 element into a(n) RemoteDSAList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoteDSAList} The decoded data structure.
 */
export function _decode_RemoteDSAList(el: _Element) {
    if (!_cached_decoder_for_RemoteDSAList) {
        _cached_decoder_for_RemoteDSAList = $._decodeSetOf<AccessPoint>(
            () => _decode_AccessPoint
        );
    }
    return _cached_decoder_for_RemoteDSAList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RemoteDSAList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoteDSAList */
let _cached_encoder_for_RemoteDSAList: $.ASN1Encoder<
    RemoteDSAList
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoteDSAList */

/* START_OF_SYMBOL_DEFINITION _encode_RemoteDSAList */
/**
 * @summary Encodes a(n) RemoteDSAList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteDSAList, encoded as an ASN.1 Element.
 */
export function _encode_RemoteDSAList(
    value: RemoteDSAList,
    elGetter: $.ASN1Encoder<RemoteDSAList>
) {
    if (!_cached_encoder_for_RemoteDSAList) {
        _cached_encoder_for_RemoteDSAList = $._encodeSetOf<AccessPoint>(
            () => _encode_AccessPoint,
            $.BER
        );
    }
    return _cached_encoder_for_RemoteDSAList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RemoteDSAList */

/* eslint-enable */
