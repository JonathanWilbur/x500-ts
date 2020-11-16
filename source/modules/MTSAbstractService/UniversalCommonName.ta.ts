/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../MTSAbstractService/UniversalOrBMPString.ta";
export { ub_common_name_length } from "../MTSAbstractService/ub-common-name-length.va";
export {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../MTSAbstractService/UniversalOrBMPString.ta";

/* START_OF_SYMBOL_DEFINITION UniversalCommonName */
/**
 * @summary UniversalCommonName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalCommonName  ::=  UniversalOrBMPString{ub-common-name-length}
 * ```
 */
export type UniversalCommonName = UniversalOrBMPString; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalCommonName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalCommonName */
let _cached_decoder_for_UniversalCommonName: $.ASN1Decoder<
    UniversalCommonName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalCommonName */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalCommonName */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalCommonName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalCommonName} The decoded data structure.
 */
export function _decode_UniversalCommonName(el: _Element) {
    if (!_cached_decoder_for_UniversalCommonName) {
        _cached_decoder_for_UniversalCommonName = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalCommonName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalCommonName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalCommonName */
let _cached_encoder_for_UniversalCommonName: $.ASN1Encoder<
    UniversalCommonName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalCommonName */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalCommonName */
/**
 * @summary Encodes a(n) UniversalCommonName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalCommonName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalCommonName(
    value: UniversalCommonName,
    elGetter: $.ASN1Encoder<UniversalCommonName>
) {
    if (!_cached_encoder_for_UniversalCommonName) {
        _cached_encoder_for_UniversalCommonName = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalCommonName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalCommonName */

/* eslint-enable */
