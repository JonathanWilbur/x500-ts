/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    IssuerSerial,
    _decode_IssuerSerial,
    _encode_IssuerSerial,
} from "../AttributeCertificateDefinitions/IssuerSerial.ta";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta";
export {
    IssuerSerial,
    _decode_IssuerSerial,
    _encode_IssuerSerial,
} from "../AttributeCertificateDefinitions/IssuerSerial.ta";
export {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta";

/* START_OF_SYMBOL_DEFINITION AttributeCertificateAssertion_holder */
/**
 * @summary AttributeCertificateAssertion_holder
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCertificateAssertion-holder ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AttributeCertificateAssertion_holder =
    | { baseCertificateID: IssuerSerial } /* CHOICE_ALT_ROOT */
    | { holderName: GeneralNames } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION AttributeCertificateAssertion_holder */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeCertificateAssertion_holder */
let _cached_decoder_for_AttributeCertificateAssertion_holder: $.ASN1Decoder<AttributeCertificateAssertion_holder> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeCertificateAssertion_holder */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeCertificateAssertion_holder */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificateAssertion_holder
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificateAssertion_holder} The decoded data structure.
 */
export function _decode_AttributeCertificateAssertion_holder(el: _Element) {
    if (!_cached_decoder_for_AttributeCertificateAssertion_holder) {
        _cached_decoder_for_AttributeCertificateAssertion_holder = $._decode_extensible_choice<AttributeCertificateAssertion_holder>(
            {
                "CONTEXT 0": [
                    "baseCertificateID",
                    $._decode_implicit<IssuerSerial>(
                        () => _decode_IssuerSerial
                    ),
                ],
                "CONTEXT 1": [
                    "holderName",
                    $._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_AttributeCertificateAssertion_holder(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeCertificateAssertion_holder */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeCertificateAssertion_holder */
let _cached_encoder_for_AttributeCertificateAssertion_holder: $.ASN1Encoder<AttributeCertificateAssertion_holder> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeCertificateAssertion_holder */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeCertificateAssertion_holder */
/**
 * @summary Encodes a(n) AttributeCertificateAssertion_holder into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificateAssertion_holder, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCertificateAssertion_holder(
    value: AttributeCertificateAssertion_holder,
    elGetter: $.ASN1Encoder<AttributeCertificateAssertion_holder>
) {
    if (!_cached_encoder_for_AttributeCertificateAssertion_holder) {
        _cached_encoder_for_AttributeCertificateAssertion_holder = $._encode_choice<AttributeCertificateAssertion_holder>(
            {
                baseCertificateID: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_IssuerSerial,
                    $.BER
                ),
                holderName: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_GeneralNames,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AttributeCertificateAssertion_holder(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeCertificateAssertion_holder */

/* eslint-enable */
