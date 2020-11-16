/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertificateGroupNumberRange,
    _decode_CertificateGroupNumberRange,
    _encode_CertificateGroupNumberRange,
} from "../CertificateExtensions/CertificateGroupNumberRange.ta";
import {
    CertificateSerialNumbers,
    _decode_CertificateSerialNumbers,
    _encode_CertificateSerialNumbers,
} from "../CertificateExtensions/CertificateSerialNumbers.ta";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";
export {
    CertificateGroupNumberRange,
    _decode_CertificateGroupNumberRange,
    _encode_CertificateGroupNumberRange,
} from "../CertificateExtensions/CertificateGroupNumberRange.ta";
export {
    CertificateSerialNumbers,
    _decode_CertificateSerialNumbers,
    _encode_CertificateSerialNumbers,
} from "../CertificateExtensions/CertificateSerialNumbers.ta";
export {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";

/* START_OF_SYMBOL_DEFINITION CertificateGroup */
/**
 * @summary CertificateGroup
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateGroup  ::=  CHOICE {
 *   serialNumbers      [0]  CertificateSerialNumbers,
 *   serialNumberRange  [1]  CertificateGroupNumberRange,
 *   nameSubtree        [2]  GeneralName,
 *   ... }
 * ```
 */
export type CertificateGroup =
    | { serialNumbers: CertificateSerialNumbers } /* CHOICE_ALT_ROOT */
    | { serialNumberRange: CertificateGroupNumberRange } /* CHOICE_ALT_ROOT */
    | { nameSubtree: GeneralName } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION CertificateGroup */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateGroup */
let _cached_decoder_for_CertificateGroup: $.ASN1Decoder<
    CertificateGroup
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateGroup */

/* START_OF_SYMBOL_DEFINITION _decode_CertificateGroup */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateGroup
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateGroup} The decoded data structure.
 */
export function _decode_CertificateGroup(el: _Element) {
    if (!_cached_decoder_for_CertificateGroup) {
        _cached_decoder_for_CertificateGroup = $._decode_extensible_choice<
            CertificateGroup
        >({
            "CONTEXT 0": [
                "serialNumbers",
                $._decode_implicit<CertificateSerialNumbers>(
                    () => _decode_CertificateSerialNumbers
                ),
            ],
            "CONTEXT 1": [
                "serialNumberRange",
                $._decode_implicit<CertificateGroupNumberRange>(
                    () => _decode_CertificateGroupNumberRange
                ),
            ],
            "CONTEXT 2": [
                "nameSubtree",
                $._decode_implicit<GeneralName>(() => _decode_GeneralName),
            ],
        });
    }
    return _cached_decoder_for_CertificateGroup(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificateGroup */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateGroup */
let _cached_encoder_for_CertificateGroup: $.ASN1Encoder<
    CertificateGroup
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateGroup */

/* START_OF_SYMBOL_DEFINITION _encode_CertificateGroup */
/**
 * @summary Encodes a(n) CertificateGroup into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateGroup, encoded as an ASN.1 Element.
 */
export function _encode_CertificateGroup(
    value: CertificateGroup,
    elGetter: $.ASN1Encoder<CertificateGroup>
) {
    if (!_cached_encoder_for_CertificateGroup) {
        _cached_encoder_for_CertificateGroup = $._encode_choice<
            CertificateGroup
        >(
            {
                serialNumbers: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertificateSerialNumbers,
                    $.BER
                ),
                serialNumberRange: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertificateGroupNumberRange,
                    $.BER
                ),
                nameSubtree: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_GeneralName,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertificateGroup(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificateGroup */

/* eslint-enable */
