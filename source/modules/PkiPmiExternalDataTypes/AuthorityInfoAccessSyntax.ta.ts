/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AccessDescription,
    _decode_AccessDescription,
    _encode_AccessDescription,
} from "../PkiPmiExternalDataTypes/AccessDescription.ta";
export {
    AccessDescription,
    _decode_AccessDescription,
    _encode_AccessDescription,
} from "../PkiPmiExternalDataTypes/AccessDescription.ta";

/* START_OF_SYMBOL_DEFINITION AuthorityInfoAccessSyntax */
/**
 * @summary AuthorityInfoAccessSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorityInfoAccessSyntax  ::=  SEQUENCE SIZE (1..MAX) OF AccessDescription
 * ```
 */
export type AuthorityInfoAccessSyntax = AccessDescription[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AuthorityInfoAccessSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorityInfoAccessSyntax */
let _cached_decoder_for_AuthorityInfoAccessSyntax: $.ASN1Decoder<AuthorityInfoAccessSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorityInfoAccessSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_AuthorityInfoAccessSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthorityInfoAccessSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorityInfoAccessSyntax} The decoded data structure.
 */
export function _decode_AuthorityInfoAccessSyntax(el: _Element) {
    if (!_cached_decoder_for_AuthorityInfoAccessSyntax) {
        _cached_decoder_for_AuthorityInfoAccessSyntax = $._decodeSequenceOf<AccessDescription>(
            () => _decode_AccessDescription
        );
    }
    return _cached_decoder_for_AuthorityInfoAccessSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthorityInfoAccessSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorityInfoAccessSyntax */
let _cached_encoder_for_AuthorityInfoAccessSyntax: $.ASN1Encoder<AuthorityInfoAccessSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorityInfoAccessSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_AuthorityInfoAccessSyntax */
/**
 * @summary Encodes a(n) AuthorityInfoAccessSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorityInfoAccessSyntax, encoded as an ASN.1 Element.
 */
export function _encode_AuthorityInfoAccessSyntax(
    value: AuthorityInfoAccessSyntax,
    elGetter: $.ASN1Encoder<AuthorityInfoAccessSyntax>
) {
    if (!_cached_encoder_for_AuthorityInfoAccessSyntax) {
        _cached_encoder_for_AuthorityInfoAccessSyntax = $._encodeSequenceOf<AccessDescription>(
            () => _encode_AccessDescription,
            $.BER
        );
    }
    return _cached_encoder_for_AuthorityInfoAccessSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthorityInfoAccessSyntax */

/* eslint-enable */
