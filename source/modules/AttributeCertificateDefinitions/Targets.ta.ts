/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Target,
    _decode_Target,
    _encode_Target,
} from "../AttributeCertificateDefinitions/Target.ta";
export {
    Target,
    _decode_Target,
    _encode_Target,
} from "../AttributeCertificateDefinitions/Target.ta";

/* START_OF_SYMBOL_DEFINITION Targets */
/**
 * @summary Targets
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Targets  ::=  SEQUENCE SIZE (1..MAX) OF Target
 * ```
 */
export type Targets = Target[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Targets */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Targets */
let _cached_decoder_for_Targets: $.ASN1Decoder<Targets> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Targets */

/* START_OF_SYMBOL_DEFINITION _decode_Targets */
/**
 * @summary Decodes an ASN.1 element into a(n) Targets
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Targets} The decoded data structure.
 */
export function _decode_Targets(el: _Element) {
    if (!_cached_decoder_for_Targets) {
        _cached_decoder_for_Targets = $._decodeSequenceOf<Target>(
            () => _decode_Target
        );
    }
    return _cached_decoder_for_Targets(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Targets */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Targets */
let _cached_encoder_for_Targets: $.ASN1Encoder<Targets> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Targets */

/* START_OF_SYMBOL_DEFINITION _encode_Targets */
/**
 * @summary Encodes a(n) Targets into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Targets, encoded as an ASN.1 Element.
 */
export function _encode_Targets(
    value: Targets,
    elGetter: $.ASN1Encoder<Targets>
) {
    if (!_cached_encoder_for_Targets) {
        _cached_encoder_for_Targets = $._encodeSequenceOf<Target>(
            () => _encode_Target,
            $.BER
        );
    }
    return _cached_encoder_for_Targets(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Targets */

/* eslint-enable */
