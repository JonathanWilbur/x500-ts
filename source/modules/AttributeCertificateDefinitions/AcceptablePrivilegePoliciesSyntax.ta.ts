/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PrivilegePolicy,
    _decode_PrivilegePolicy,
    _encode_PrivilegePolicy,
} from "../AttributeCertificateDefinitions/PrivilegePolicy.ta";
export {
    PrivilegePolicy,
    _decode_PrivilegePolicy,
    _encode_PrivilegePolicy,
} from "../AttributeCertificateDefinitions/PrivilegePolicy.ta";

/* START_OF_SYMBOL_DEFINITION AcceptablePrivilegePoliciesSyntax */
/**
 * @summary AcceptablePrivilegePoliciesSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AcceptablePrivilegePoliciesSyntax  ::=  SEQUENCE SIZE (1..MAX) OF PrivilegePolicy
 * ```
 */
export type AcceptablePrivilegePoliciesSyntax = PrivilegePolicy[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AcceptablePrivilegePoliciesSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AcceptablePrivilegePoliciesSyntax */
let _cached_decoder_for_AcceptablePrivilegePoliciesSyntax: $.ASN1Decoder<
    AcceptablePrivilegePoliciesSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AcceptablePrivilegePoliciesSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_AcceptablePrivilegePoliciesSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) AcceptablePrivilegePoliciesSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AcceptablePrivilegePoliciesSyntax} The decoded data structure.
 */
export function _decode_AcceptablePrivilegePoliciesSyntax(el: _Element) {
    if (!_cached_decoder_for_AcceptablePrivilegePoliciesSyntax) {
        _cached_decoder_for_AcceptablePrivilegePoliciesSyntax = $._decodeSequenceOf<
            PrivilegePolicy
        >(() => _decode_PrivilegePolicy);
    }
    return _cached_decoder_for_AcceptablePrivilegePoliciesSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AcceptablePrivilegePoliciesSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AcceptablePrivilegePoliciesSyntax */
let _cached_encoder_for_AcceptablePrivilegePoliciesSyntax: $.ASN1Encoder<
    AcceptablePrivilegePoliciesSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AcceptablePrivilegePoliciesSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_AcceptablePrivilegePoliciesSyntax */
/**
 * @summary Encodes a(n) AcceptablePrivilegePoliciesSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcceptablePrivilegePoliciesSyntax, encoded as an ASN.1 Element.
 */
export function _encode_AcceptablePrivilegePoliciesSyntax(
    value: AcceptablePrivilegePoliciesSyntax,
    elGetter: $.ASN1Encoder<AcceptablePrivilegePoliciesSyntax>
) {
    if (!_cached_encoder_for_AcceptablePrivilegePoliciesSyntax) {
        _cached_encoder_for_AcceptablePrivilegePoliciesSyntax = $._encodeSequenceOf<
            PrivilegePolicy
        >(() => _encode_PrivilegePolicy, $.BER);
    }
    return _cached_encoder_for_AcceptablePrivilegePoliciesSyntax(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_AcceptablePrivilegePoliciesSyntax */

/* eslint-enable */
