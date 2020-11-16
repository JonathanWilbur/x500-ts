/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../MTSAbstractService/UniversalOrBMPString.ta";
export { ub_organizational_unit_name_length } from "../MTSAbstractService/ub-organizational-unit-name-length.va";
export {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../MTSAbstractService/UniversalOrBMPString.ta";

/* START_OF_SYMBOL_DEFINITION UniversalOrganizationalUnitName */
/**
 * @summary UniversalOrganizationalUnitName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalOrganizationalUnitName  ::=
 *   UniversalOrBMPString{ub-organizational-unit-name-length}
 * ```
 */
export type UniversalOrganizationalUnitName = UniversalOrBMPString; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalOrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalOrganizationalUnitName */
let _cached_decoder_for_UniversalOrganizationalUnitName: $.ASN1Decoder<
    UniversalOrganizationalUnitName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalOrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalOrganizationalUnitName */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalOrganizationalUnitName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalOrganizationalUnitName} The decoded data structure.
 */
export function _decode_UniversalOrganizationalUnitName(el: _Element) {
    if (!_cached_decoder_for_UniversalOrganizationalUnitName) {
        _cached_decoder_for_UniversalOrganizationalUnitName = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalOrganizationalUnitName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalOrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalOrganizationalUnitName */
let _cached_encoder_for_UniversalOrganizationalUnitName: $.ASN1Encoder<
    UniversalOrganizationalUnitName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalOrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalOrganizationalUnitName */
/**
 * @summary Encodes a(n) UniversalOrganizationalUnitName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalOrganizationalUnitName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalOrganizationalUnitName(
    value: UniversalOrganizationalUnitName,
    elGetter: $.ASN1Encoder<UniversalOrganizationalUnitName>
) {
    if (!_cached_encoder_for_UniversalOrganizationalUnitName) {
        _cached_encoder_for_UniversalOrganizationalUnitName = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalOrganizationalUnitName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalOrganizationalUnitName */

/* eslint-enable */
