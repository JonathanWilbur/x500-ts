/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OrganizationalUnitName,
    _decode_OrganizationalUnitName,
    _encode_OrganizationalUnitName,
} from "../PkiPmiExternalDataTypes/OrganizationalUnitName.ta";
export {
    OrganizationalUnitName,
    _decode_OrganizationalUnitName,
    _encode_OrganizationalUnitName,
} from "../PkiPmiExternalDataTypes/OrganizationalUnitName.ta";

/* START_OF_SYMBOL_DEFINITION OrganizationalUnitNames */
/**
 * @summary OrganizationalUnitNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrganizationalUnitNames  ::=
 *   SEQUENCE SIZE (1..ub-organizational-units) OF OrganizationalUnitName
 * ```
 */
export type OrganizationalUnitNames = OrganizationalUnitName[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION OrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OrganizationalUnitNames */
let _cached_decoder_for_OrganizationalUnitNames: $.ASN1Decoder<
    OrganizationalUnitNames
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _decode_OrganizationalUnitNames */
/**
 * @summary Decodes an ASN.1 element into a(n) OrganizationalUnitNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OrganizationalUnitNames} The decoded data structure.
 */
export function _decode_OrganizationalUnitNames(el: _Element) {
    if (!_cached_decoder_for_OrganizationalUnitNames) {
        _cached_decoder_for_OrganizationalUnitNames = $._decodeSequenceOf<
            OrganizationalUnitName
        >(() => _decode_OrganizationalUnitName);
    }
    return _cached_decoder_for_OrganizationalUnitNames(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OrganizationalUnitNames */
let _cached_encoder_for_OrganizationalUnitNames: $.ASN1Encoder<
    OrganizationalUnitNames
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _encode_OrganizationalUnitNames */
/**
 * @summary Encodes a(n) OrganizationalUnitNames into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrganizationalUnitNames, encoded as an ASN.1 Element.
 */
export function _encode_OrganizationalUnitNames(
    value: OrganizationalUnitNames,
    elGetter: $.ASN1Encoder<OrganizationalUnitNames>
) {
    if (!_cached_encoder_for_OrganizationalUnitNames) {
        _cached_encoder_for_OrganizationalUnitNames = $._encodeSequenceOf<
            OrganizationalUnitName
        >(() => _encode_OrganizationalUnitName, $.BER);
    }
    return _cached_encoder_for_OrganizationalUnitNames(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OrganizationalUnitNames */

/* eslint-enable */
