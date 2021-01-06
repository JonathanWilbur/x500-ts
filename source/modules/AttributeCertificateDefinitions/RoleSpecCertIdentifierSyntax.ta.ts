/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    RoleSpecCertIdentifier,
    _decode_RoleSpecCertIdentifier,
    _encode_RoleSpecCertIdentifier,
} from "../AttributeCertificateDefinitions/RoleSpecCertIdentifier.ta";
export {
    RoleSpecCertIdentifier,
    _decode_RoleSpecCertIdentifier,
    _encode_RoleSpecCertIdentifier,
} from "../AttributeCertificateDefinitions/RoleSpecCertIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION RoleSpecCertIdentifierSyntax */
/**
 * @summary RoleSpecCertIdentifierSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoleSpecCertIdentifierSyntax  ::=
 *   SEQUENCE SIZE (1..MAX) OF RoleSpecCertIdentifier
 * ```
 */
export type RoleSpecCertIdentifierSyntax = RoleSpecCertIdentifier[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION RoleSpecCertIdentifierSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RoleSpecCertIdentifierSyntax */
let _cached_decoder_for_RoleSpecCertIdentifierSyntax: $.ASN1Decoder<RoleSpecCertIdentifierSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RoleSpecCertIdentifierSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_RoleSpecCertIdentifierSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) RoleSpecCertIdentifierSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RoleSpecCertIdentifierSyntax} The decoded data structure.
 */
export function _decode_RoleSpecCertIdentifierSyntax(el: _Element) {
    if (!_cached_decoder_for_RoleSpecCertIdentifierSyntax) {
        _cached_decoder_for_RoleSpecCertIdentifierSyntax = $._decodeSequenceOf<RoleSpecCertIdentifier>(
            () => _decode_RoleSpecCertIdentifier
        );
    }
    return _cached_decoder_for_RoleSpecCertIdentifierSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RoleSpecCertIdentifierSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RoleSpecCertIdentifierSyntax */
let _cached_encoder_for_RoleSpecCertIdentifierSyntax: $.ASN1Encoder<RoleSpecCertIdentifierSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RoleSpecCertIdentifierSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_RoleSpecCertIdentifierSyntax */
/**
 * @summary Encodes a(n) RoleSpecCertIdentifierSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoleSpecCertIdentifierSyntax, encoded as an ASN.1 Element.
 */
export function _encode_RoleSpecCertIdentifierSyntax(
    value: RoleSpecCertIdentifierSyntax,
    elGetter: $.ASN1Encoder<RoleSpecCertIdentifierSyntax>
) {
    if (!_cached_encoder_for_RoleSpecCertIdentifierSyntax) {
        _cached_encoder_for_RoleSpecCertIdentifierSyntax = $._encodeSequenceOf<RoleSpecCertIdentifier>(
            () => _encode_RoleSpecCertIdentifier,
            $.BER
        );
    }
    return _cached_encoder_for_RoleSpecCertIdentifierSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RoleSpecCertIdentifierSyntax */

/* eslint-enable */
