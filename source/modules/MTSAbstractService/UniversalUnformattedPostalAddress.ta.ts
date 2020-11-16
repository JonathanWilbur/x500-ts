/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../MTSAbstractService/UniversalOrBMPString.ta";
export { ub_unformatted_address_length } from "../MTSAbstractService/ub-unformatted-address-length.va";
export {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../MTSAbstractService/UniversalOrBMPString.ta";

/* START_OF_SYMBOL_DEFINITION UniversalUnformattedPostalAddress */
/**
 * @summary UniversalUnformattedPostalAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalUnformattedPostalAddress  ::=
 *   UniversalOrBMPString{ub-unformatted-address-length}
 * ```
 */
export type UniversalUnformattedPostalAddress = UniversalOrBMPString; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalUnformattedPostalAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalUnformattedPostalAddress */
let _cached_decoder_for_UniversalUnformattedPostalAddress: $.ASN1Decoder<
    UniversalUnformattedPostalAddress
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalUnformattedPostalAddress */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalUnformattedPostalAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalUnformattedPostalAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalUnformattedPostalAddress} The decoded data structure.
 */
export function _decode_UniversalUnformattedPostalAddress(el: _Element) {
    if (!_cached_decoder_for_UniversalUnformattedPostalAddress) {
        _cached_decoder_for_UniversalUnformattedPostalAddress = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalUnformattedPostalAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalUnformattedPostalAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalUnformattedPostalAddress */
let _cached_encoder_for_UniversalUnformattedPostalAddress: $.ASN1Encoder<
    UniversalUnformattedPostalAddress
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalUnformattedPostalAddress */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalUnformattedPostalAddress */
/**
 * @summary Encodes a(n) UniversalUnformattedPostalAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalUnformattedPostalAddress, encoded as an ASN.1 Element.
 */
export function _encode_UniversalUnformattedPostalAddress(
    value: UniversalUnformattedPostalAddress,
    elGetter: $.ASN1Encoder<UniversalUnformattedPostalAddress>
) {
    if (!_cached_encoder_for_UniversalUnformattedPostalAddress) {
        _cached_encoder_for_UniversalUnformattedPostalAddress = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalUnformattedPostalAddress(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalUnformattedPostalAddress */

/* eslint-enable */
