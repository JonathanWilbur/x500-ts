/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../MTSAbstractService/UniversalOrBMPString.ta";
export { ub_organization_name_length } from "../MTSAbstractService/ub-organization-name-length.va";
export {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../MTSAbstractService/UniversalOrBMPString.ta";

/* START_OF_SYMBOL_DEFINITION UniversalOrganizationName */
/**
 * @summary UniversalOrganizationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalOrganizationName  ::=  UniversalOrBMPString{ub-organization-name-length}
 * ```
 */
export type UniversalOrganizationName = UniversalOrBMPString; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalOrganizationName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalOrganizationName */
let _cached_decoder_for_UniversalOrganizationName: $.ASN1Decoder<
    UniversalOrganizationName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalOrganizationName */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalOrganizationName */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalOrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalOrganizationName} The decoded data structure.
 */
export function _decode_UniversalOrganizationName(el: _Element) {
    if (!_cached_decoder_for_UniversalOrganizationName) {
        _cached_decoder_for_UniversalOrganizationName = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalOrganizationName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalOrganizationName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalOrganizationName */
let _cached_encoder_for_UniversalOrganizationName: $.ASN1Encoder<
    UniversalOrganizationName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalOrganizationName */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalOrganizationName */
/**
 * @summary Encodes a(n) UniversalOrganizationName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalOrganizationName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalOrganizationName(
    value: UniversalOrganizationName,
    elGetter: $.ASN1Encoder<UniversalOrganizationName>
) {
    if (!_cached_encoder_for_UniversalOrganizationName) {
        _cached_encoder_for_UniversalOrganizationName = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalOrganizationName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalOrganizationName */

/* eslint-enable */
