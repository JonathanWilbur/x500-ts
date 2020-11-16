/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OsiBindError_normal_mode_parameters,
    _decode_OsiBindError_normal_mode_parameters,
    _encode_OsiBindError_normal_mode_parameters,
} from "../OSIProtocolSpecification/OsiBindError-normal-mode-parameters.ta";
export {
    OsiBindError_normal_mode_parameters,
    _decode_OsiBindError_normal_mode_parameters,
    _encode_OsiBindError_normal_mode_parameters,
} from "../OSIProtocolSpecification/OsiBindError-normal-mode-parameters.ta";

/* START_OF_SYMBOL_DEFINITION OsiBindError */
/**
 * @summary OsiBindError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindError{APPLICATION-CONTEXT:Protocols}  ::=  CHOICE {
 *   normal-mode-parameters  SEQUENCE {
 *     protocol-version               [0]  IMPLICIT BIT STRING {version-1(0)}
 *                                           DEFAULT {version-1},
 *     responding-presentation-selector
 *                                    [3]  IMPLICIT Presentation-selector OPTIONAL,
 *     presentation-context-definition-result-list
 *                                    [5]  IMPLICIT Result-list OPTIONAL,
 *     provider-reason                [10] IMPLICIT Provider-reason OPTIONAL,
 *     user-data                           CHOICE {
 *       fully-encoded-data  [APPLICATION 1] IMPLICIT SEQUENCE SIZE (1) OF SEQUENCE {
 *         transfer-syntax-name                Transfer-syntax-name   OPTIONAL,
 *         presentation-context-identifier     Presentation-context-identifier,
 *         presentation-data-values            CHOICE {
 *           single-ASN1-type               [0]
 *                      ABSTRACT-SYNTAX.&Type(AAREerr-apdu{{Protocols}})}}} OPTIONAL}}
 * ```
 */
export type OsiBindError = {
    normal_mode_parameters: OsiBindError_normal_mode_parameters;
} /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION OsiBindError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiBindError */
let _cached_decoder_for_OsiBindError: $.ASN1Decoder<OsiBindError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiBindError */

/* START_OF_SYMBOL_DEFINITION _decode_OsiBindError */
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindError} The decoded data structure.
 */
export function _decode_OsiBindError(el: _Element) {
    if (!_cached_decoder_for_OsiBindError) {
        _cached_decoder_for_OsiBindError = $._decode_inextensible_choice<
            OsiBindError
        >({
            "UNIVERSAL 16": [
                "normal_mode_parameters",
                _decode_OsiBindError_normal_mode_parameters,
            ],
        });
    }
    return _cached_decoder_for_OsiBindError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OsiBindError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiBindError */
let _cached_encoder_for_OsiBindError: $.ASN1Encoder<OsiBindError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiBindError */

/* START_OF_SYMBOL_DEFINITION _encode_OsiBindError */
/**
 * @summary Encodes a(n) OsiBindError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindError, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindError(
    value: OsiBindError,
    elGetter: $.ASN1Encoder<OsiBindError>
) {
    if (!_cached_encoder_for_OsiBindError) {
        _cached_encoder_for_OsiBindError = $._encode_choice<OsiBindError>(
            {
                normal_mode_parameters: _encode_OsiBindError_normal_mode_parameters,
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiBindError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OsiBindError */

/* eslint-enable */
