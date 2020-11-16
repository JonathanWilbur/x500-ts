/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    TargetCert,
    _decode_TargetCert,
    _encode_TargetCert,
} from "../AttributeCertificateDefinitions/TargetCert.ta";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";
export {
    TargetCert,
    _decode_TargetCert,
    _encode_TargetCert,
} from "../AttributeCertificateDefinitions/TargetCert.ta";
export {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";

/* START_OF_SYMBOL_DEFINITION Target */
/**
 * @summary Target
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Target  ::=  CHOICE {
 *   targetName   [0]  GeneralName,
 *   targetGroup  [1]  GeneralName,
 *   targetCert   [2]  TargetCert,
 *   ... }
 * ```
 */
export type Target =
    | { targetName: GeneralName } /* CHOICE_ALT_ROOT */
    | { targetGroup: GeneralName } /* CHOICE_ALT_ROOT */
    | { targetCert: TargetCert } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION Target */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Target */
let _cached_decoder_for_Target: $.ASN1Decoder<Target> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Target */

/* START_OF_SYMBOL_DEFINITION _decode_Target */
/**
 * @summary Decodes an ASN.1 element into a(n) Target
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Target} The decoded data structure.
 */
export function _decode_Target(el: _Element) {
    if (!_cached_decoder_for_Target) {
        _cached_decoder_for_Target = $._decode_extensible_choice<Target>({
            "CONTEXT 0": [
                "targetName",
                $._decode_implicit<GeneralName>(() => _decode_GeneralName),
            ],
            "CONTEXT 1": [
                "targetGroup",
                $._decode_implicit<GeneralName>(() => _decode_GeneralName),
            ],
            "CONTEXT 2": [
                "targetCert",
                $._decode_implicit<TargetCert>(() => _decode_TargetCert),
            ],
        });
    }
    return _cached_decoder_for_Target(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Target */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Target */
let _cached_encoder_for_Target: $.ASN1Encoder<Target> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Target */

/* START_OF_SYMBOL_DEFINITION _encode_Target */
/**
 * @summary Encodes a(n) Target into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Target, encoded as an ASN.1 Element.
 */
export function _encode_Target(value: Target, elGetter: $.ASN1Encoder<Target>) {
    if (!_cached_encoder_for_Target) {
        _cached_encoder_for_Target = $._encode_choice<Target>(
            {
                targetName: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_GeneralName,
                    $.BER
                ),
                targetGroup: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_GeneralName,
                    $.BER
                ),
                targetCert: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_TargetCert,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Target(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Target */

/* eslint-enable */
