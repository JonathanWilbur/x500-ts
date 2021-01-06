/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    TeletexOrganizationalUnitName,
    _decode_TeletexOrganizationalUnitName,
    _encode_TeletexOrganizationalUnitName,
} from "../PkiPmiExternalDataTypes/TeletexOrganizationalUnitName.ta";
export {
    TeletexOrganizationalUnitName,
    _decode_TeletexOrganizationalUnitName,
    _encode_TeletexOrganizationalUnitName,
} from "../PkiPmiExternalDataTypes/TeletexOrganizationalUnitName.ta";

/* START_OF_SYMBOL_DEFINITION TeletexOrganizationalUnitNames */
/**
 * @summary TeletexOrganizationalUnitNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexOrganizationalUnitNames  ::=
 *   SEQUENCE SIZE (1..ub-organizational-units) OF TeletexOrganizationalUnitName
 * ```
 */
export type TeletexOrganizationalUnitNames = TeletexOrganizationalUnitName[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION TeletexOrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TeletexOrganizationalUnitNames */
let _cached_decoder_for_TeletexOrganizationalUnitNames: $.ASN1Decoder<TeletexOrganizationalUnitNames> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TeletexOrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _decode_TeletexOrganizationalUnitNames */
/**
 * @summary Decodes an ASN.1 element into a(n) TeletexOrganizationalUnitNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexOrganizationalUnitNames} The decoded data structure.
 */
export function _decode_TeletexOrganizationalUnitNames(el: _Element) {
    if (!_cached_decoder_for_TeletexOrganizationalUnitNames) {
        _cached_decoder_for_TeletexOrganizationalUnitNames = $._decodeSequenceOf<TeletexOrganizationalUnitName>(
            () => _decode_TeletexOrganizationalUnitName
        );
    }
    return _cached_decoder_for_TeletexOrganizationalUnitNames(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TeletexOrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TeletexOrganizationalUnitNames */
let _cached_encoder_for_TeletexOrganizationalUnitNames: $.ASN1Encoder<TeletexOrganizationalUnitNames> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TeletexOrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _encode_TeletexOrganizationalUnitNames */
/**
 * @summary Encodes a(n) TeletexOrganizationalUnitNames into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexOrganizationalUnitNames, encoded as an ASN.1 Element.
 */
export function _encode_TeletexOrganizationalUnitNames(
    value: TeletexOrganizationalUnitNames,
    elGetter: $.ASN1Encoder<TeletexOrganizationalUnitNames>
) {
    if (!_cached_encoder_for_TeletexOrganizationalUnitNames) {
        _cached_encoder_for_TeletexOrganizationalUnitNames = $._encodeSequenceOf<TeletexOrganizationalUnitName>(
            () => _encode_TeletexOrganizationalUnitName,
            $.BER
        );
    }
    return _cached_encoder_for_TeletexOrganizationalUnitNames(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TeletexOrganizationalUnitNames */

/* eslint-enable */
