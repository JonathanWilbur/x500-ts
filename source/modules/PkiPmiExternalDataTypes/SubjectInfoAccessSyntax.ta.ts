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

/* START_OF_SYMBOL_DEFINITION SubjectInfoAccessSyntax */
/**
 * @summary SubjectInfoAccessSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectInfoAccessSyntax  ::=  SEQUENCE SIZE (1..MAX) OF AccessDescription
 * ```
 */
export type SubjectInfoAccessSyntax = AccessDescription[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SubjectInfoAccessSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubjectInfoAccessSyntax */
let _cached_decoder_for_SubjectInfoAccessSyntax: $.ASN1Decoder<
    SubjectInfoAccessSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubjectInfoAccessSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_SubjectInfoAccessSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) SubjectInfoAccessSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectInfoAccessSyntax} The decoded data structure.
 */
export function _decode_SubjectInfoAccessSyntax(el: _Element) {
    if (!_cached_decoder_for_SubjectInfoAccessSyntax) {
        _cached_decoder_for_SubjectInfoAccessSyntax = $._decodeSequenceOf<
            AccessDescription
        >(() => _decode_AccessDescription);
    }
    return _cached_decoder_for_SubjectInfoAccessSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubjectInfoAccessSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubjectInfoAccessSyntax */
let _cached_encoder_for_SubjectInfoAccessSyntax: $.ASN1Encoder<
    SubjectInfoAccessSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubjectInfoAccessSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_SubjectInfoAccessSyntax */
/**
 * @summary Encodes a(n) SubjectInfoAccessSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectInfoAccessSyntax, encoded as an ASN.1 Element.
 */
export function _encode_SubjectInfoAccessSyntax(
    value: SubjectInfoAccessSyntax,
    elGetter: $.ASN1Encoder<SubjectInfoAccessSyntax>
) {
    if (!_cached_encoder_for_SubjectInfoAccessSyntax) {
        _cached_encoder_for_SubjectInfoAccessSyntax = $._encodeSequenceOf<
            AccessDescription
        >(() => _encode_AccessDescription, $.BER);
    }
    return _cached_encoder_for_SubjectInfoAccessSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubjectInfoAccessSyntax */

/* eslint-enable */
