/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    MasterOrShadowAccessPoint,
    _decode_MasterOrShadowAccessPoint,
    _encode_MasterOrShadowAccessPoint,
} from "../DistributedOperations/MasterOrShadowAccessPoint.ta";
export {
    MasterOrShadowAccessPoint,
    _decode_MasterOrShadowAccessPoint,
    _encode_MasterOrShadowAccessPoint,
} from "../DistributedOperations/MasterOrShadowAccessPoint.ta";

/* START_OF_SYMBOL_DEFINITION MasterAndShadowAccessPoints */
/**
 * @summary MasterAndShadowAccessPoints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MasterAndShadowAccessPoints  ::=  SET SIZE (1..MAX) OF MasterOrShadowAccessPoint
 * ```
 */
export type MasterAndShadowAccessPoints = MasterOrShadowAccessPoint[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION MasterAndShadowAccessPoints */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MasterAndShadowAccessPoints */
let _cached_decoder_for_MasterAndShadowAccessPoints: $.ASN1Decoder<
    MasterAndShadowAccessPoints
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MasterAndShadowAccessPoints */

/* START_OF_SYMBOL_DEFINITION _decode_MasterAndShadowAccessPoints */
/**
 * @summary Decodes an ASN.1 element into a(n) MasterAndShadowAccessPoints
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MasterAndShadowAccessPoints} The decoded data structure.
 */
export function _decode_MasterAndShadowAccessPoints(el: _Element) {
    if (!_cached_decoder_for_MasterAndShadowAccessPoints) {
        _cached_decoder_for_MasterAndShadowAccessPoints = $._decodeSetOf<
            MasterOrShadowAccessPoint
        >(() => _decode_MasterOrShadowAccessPoint);
    }
    return _cached_decoder_for_MasterAndShadowAccessPoints(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MasterAndShadowAccessPoints */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MasterAndShadowAccessPoints */
let _cached_encoder_for_MasterAndShadowAccessPoints: $.ASN1Encoder<
    MasterAndShadowAccessPoints
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MasterAndShadowAccessPoints */

/* START_OF_SYMBOL_DEFINITION _encode_MasterAndShadowAccessPoints */
/**
 * @summary Encodes a(n) MasterAndShadowAccessPoints into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MasterAndShadowAccessPoints, encoded as an ASN.1 Element.
 */
export function _encode_MasterAndShadowAccessPoints(
    value: MasterAndShadowAccessPoints,
    elGetter: $.ASN1Encoder<MasterAndShadowAccessPoints>
) {
    if (!_cached_encoder_for_MasterAndShadowAccessPoints) {
        _cached_encoder_for_MasterAndShadowAccessPoints = $._encodeSetOf<
            MasterOrShadowAccessPoint
        >(() => _encode_MasterOrShadowAccessPoint, $.BER);
    }
    return _cached_encoder_for_MasterAndShadowAccessPoints(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MasterAndShadowAccessPoints */

/* eslint-enable */
