/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";
import {
    NumberRange,
    _decode_NumberRange,
    _encode_NumberRange,
} from "../CertificateExtensions/NumberRange.ta";
export {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";
export {
    NumberRange,
    _decode_NumberRange,
    _encode_NumberRange,
} from "../CertificateExtensions/NumberRange.ta";

/* START_OF_SYMBOL_DEFINITION RevokedCertificateGroup */
/**
 * @summary RevokedCertificateGroup
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevokedCertificateGroup  ::=  CHOICE {
 *   serialNumberRange  NumberRange,
 *   nameSubtree        GeneralName }
 * ```
 */
export type RevokedCertificateGroup =
    | { serialNumberRange: NumberRange } /* CHOICE_ALT_ROOT */
    | { nameSubtree: GeneralName } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION RevokedCertificateGroup */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RevokedCertificateGroup */
let _cached_decoder_for_RevokedCertificateGroup: $.ASN1Decoder<RevokedCertificateGroup> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RevokedCertificateGroup */

/* START_OF_SYMBOL_DEFINITION _decode_RevokedCertificateGroup */
/**
 * @summary Decodes an ASN.1 element into a(n) RevokedCertificateGroup
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevokedCertificateGroup} The decoded data structure.
 */
export function _decode_RevokedCertificateGroup(el: _Element) {
    if (!_cached_decoder_for_RevokedCertificateGroup) {
        _cached_decoder_for_RevokedCertificateGroup = $._decode_inextensible_choice<RevokedCertificateGroup>(
            {
                "UNIVERSAL 16": ["serialNumberRange", _decode_NumberRange],
                "CONTEXT 0": ["nameSubtree", _decode_GeneralName],
                "CONTEXT 1": ["nameSubtree", _decode_GeneralName],
                "CONTEXT 2": ["nameSubtree", _decode_GeneralName],
                "CONTEXT 3": ["nameSubtree", _decode_GeneralName],
                "CONTEXT 4": ["nameSubtree", _decode_GeneralName],
                "CONTEXT 5": ["nameSubtree", _decode_GeneralName],
                "CONTEXT 6": ["nameSubtree", _decode_GeneralName],
                "CONTEXT 7": ["nameSubtree", _decode_GeneralName],
                "CONTEXT 8": ["nameSubtree", _decode_GeneralName],
            }
        );
    }
    return _cached_decoder_for_RevokedCertificateGroup(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RevokedCertificateGroup */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RevokedCertificateGroup */
let _cached_encoder_for_RevokedCertificateGroup: $.ASN1Encoder<RevokedCertificateGroup> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RevokedCertificateGroup */

/* START_OF_SYMBOL_DEFINITION _encode_RevokedCertificateGroup */
/**
 * @summary Encodes a(n) RevokedCertificateGroup into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevokedCertificateGroup, encoded as an ASN.1 Element.
 */
export function _encode_RevokedCertificateGroup(
    value: RevokedCertificateGroup,
    elGetter: $.ASN1Encoder<RevokedCertificateGroup>
) {
    if (!_cached_encoder_for_RevokedCertificateGroup) {
        _cached_encoder_for_RevokedCertificateGroup = $._encode_choice<RevokedCertificateGroup>(
            {
                serialNumberRange: _encode_NumberRange,
                nameSubtree: _encode_GeneralName,
            },
            $.BER
        );
    }
    return _cached_encoder_for_RevokedCertificateGroup(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RevokedCertificateGroup */

/* eslint-enable */
