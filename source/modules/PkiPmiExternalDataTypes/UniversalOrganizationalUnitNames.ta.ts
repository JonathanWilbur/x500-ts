/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UniversalOrganizationalUnitName,
    _decode_UniversalOrganizationalUnitName,
    _encode_UniversalOrganizationalUnitName,
} from "../PkiPmiExternalDataTypes/UniversalOrganizationalUnitName.ta";
export {
    UniversalOrganizationalUnitName,
    _decode_UniversalOrganizationalUnitName,
    _encode_UniversalOrganizationalUnitName,
} from "../PkiPmiExternalDataTypes/UniversalOrganizationalUnitName.ta";

/* START_OF_SYMBOL_DEFINITION UniversalOrganizationalUnitNames */
/**
 * @summary UniversalOrganizationalUnitNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalOrganizationalUnitNames  ::=
 *   SEQUENCE SIZE (1..ub-organizational-units) OF UniversalOrganizationalUnitName
 * ```
 */
export type UniversalOrganizationalUnitNames = UniversalOrganizationalUnitName[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION UniversalOrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalOrganizationalUnitNames */
let _cached_decoder_for_UniversalOrganizationalUnitNames: $.ASN1Decoder<
    UniversalOrganizationalUnitNames
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalOrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalOrganizationalUnitNames */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalOrganizationalUnitNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalOrganizationalUnitNames} The decoded data structure.
 */
export function _decode_UniversalOrganizationalUnitNames(el: _Element) {
    if (!_cached_decoder_for_UniversalOrganizationalUnitNames) {
        _cached_decoder_for_UniversalOrganizationalUnitNames = $._decodeSequenceOf<
            UniversalOrganizationalUnitName
        >(() => _decode_UniversalOrganizationalUnitName);
    }
    return _cached_decoder_for_UniversalOrganizationalUnitNames(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalOrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalOrganizationalUnitNames */
let _cached_encoder_for_UniversalOrganizationalUnitNames: $.ASN1Encoder<
    UniversalOrganizationalUnitNames
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalOrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalOrganizationalUnitNames */
/**
 * @summary Encodes a(n) UniversalOrganizationalUnitNames into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalOrganizationalUnitNames, encoded as an ASN.1 Element.
 */
export function _encode_UniversalOrganizationalUnitNames(
    value: UniversalOrganizationalUnitNames,
    elGetter: $.ASN1Encoder<UniversalOrganizationalUnitNames>
) {
    if (!_cached_encoder_for_UniversalOrganizationalUnitNames) {
        _cached_encoder_for_UniversalOrganizationalUnitNames = $._encodeSequenceOf<
            UniversalOrganizationalUnitName
        >(() => _encode_UniversalOrganizationalUnitName, $.BER);
    }
    return _cached_encoder_for_UniversalOrganizationalUnitNames(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalOrganizationalUnitNames */

/* eslint-enable */
