/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PeerEntityAuthenticationPolicy */
/**
 * @summary PeerEntityAuthenticationPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PeerEntityAuthenticationPolicy  ::=  BIT STRING {
 *   none(0), nameOnly(1), simpleUnprotected(2), simpleProtected(3), strong(4),
 *   external(5)}
 * ```
 */
export type PeerEntityAuthenticationPolicy = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION PeerEntityAuthenticationPolicy */

/* START_OF_SYMBOL_DEFINITION PeerEntityAuthenticationPolicy_none */
/**
 * @summary PeerEntityAuthenticationPolicy_none
 * @constant
 */
export const PeerEntityAuthenticationPolicy_none: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PeerEntityAuthenticationPolicy_none */

/* START_OF_SYMBOL_DEFINITION none */
/**
 * @summary none
 * @constant
 */
export const none: number = PeerEntityAuthenticationPolicy_none; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION none */

/* START_OF_SYMBOL_DEFINITION PeerEntityAuthenticationPolicy_nameOnly */
/**
 * @summary PeerEntityAuthenticationPolicy_nameOnly
 * @constant
 */
export const PeerEntityAuthenticationPolicy_nameOnly: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PeerEntityAuthenticationPolicy_nameOnly */

/* START_OF_SYMBOL_DEFINITION nameOnly */
/**
 * @summary nameOnly
 * @constant
 */
export const nameOnly: number = PeerEntityAuthenticationPolicy_nameOnly; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION nameOnly */

/* START_OF_SYMBOL_DEFINITION PeerEntityAuthenticationPolicy_simpleUnprotected */
/**
 * @summary PeerEntityAuthenticationPolicy_simpleUnprotected
 * @constant
 */
export const PeerEntityAuthenticationPolicy_simpleUnprotected: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PeerEntityAuthenticationPolicy_simpleUnprotected */

/* START_OF_SYMBOL_DEFINITION simpleUnprotected */
/**
 * @summary simpleUnprotected
 * @constant
 */
export const simpleUnprotected: number = PeerEntityAuthenticationPolicy_simpleUnprotected; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION simpleUnprotected */

/* START_OF_SYMBOL_DEFINITION PeerEntityAuthenticationPolicy_simpleProtected */
/**
 * @summary PeerEntityAuthenticationPolicy_simpleProtected
 * @constant
 */
export const PeerEntityAuthenticationPolicy_simpleProtected: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PeerEntityAuthenticationPolicy_simpleProtected */

/* START_OF_SYMBOL_DEFINITION simpleProtected */
/**
 * @summary simpleProtected
 * @constant
 */
export const simpleProtected: number = PeerEntityAuthenticationPolicy_simpleProtected; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION simpleProtected */

/* START_OF_SYMBOL_DEFINITION PeerEntityAuthenticationPolicy_strong */
/**
 * @summary PeerEntityAuthenticationPolicy_strong
 * @constant
 */
export const PeerEntityAuthenticationPolicy_strong: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PeerEntityAuthenticationPolicy_strong */

/* START_OF_SYMBOL_DEFINITION strong */
/**
 * @summary strong
 * @constant
 */
export const strong: number = PeerEntityAuthenticationPolicy_strong; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION strong */

/* START_OF_SYMBOL_DEFINITION PeerEntityAuthenticationPolicy_external */
/**
 * @summary PeerEntityAuthenticationPolicy_external
 * @constant
 */
export const PeerEntityAuthenticationPolicy_external: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PeerEntityAuthenticationPolicy_external */

/* START_OF_SYMBOL_DEFINITION external */
/**
 * @summary external
 * @constant
 */
export const external: number = PeerEntityAuthenticationPolicy_external; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION external */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PeerEntityAuthenticationPolicy */
let _cached_decoder_for_PeerEntityAuthenticationPolicy: $.ASN1Decoder<
    PeerEntityAuthenticationPolicy
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PeerEntityAuthenticationPolicy */

/* START_OF_SYMBOL_DEFINITION _decode_PeerEntityAuthenticationPolicy */
/**
 * @summary Decodes an ASN.1 element into a(n) PeerEntityAuthenticationPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PeerEntityAuthenticationPolicy} The decoded data structure.
 */
export function _decode_PeerEntityAuthenticationPolicy(el: _Element) {
    if (!_cached_decoder_for_PeerEntityAuthenticationPolicy) {
        _cached_decoder_for_PeerEntityAuthenticationPolicy = $._decodeBitString;
    }
    return _cached_decoder_for_PeerEntityAuthenticationPolicy(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PeerEntityAuthenticationPolicy */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PeerEntityAuthenticationPolicy */
let _cached_encoder_for_PeerEntityAuthenticationPolicy: $.ASN1Encoder<
    PeerEntityAuthenticationPolicy
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PeerEntityAuthenticationPolicy */

/* START_OF_SYMBOL_DEFINITION _encode_PeerEntityAuthenticationPolicy */
/**
 * @summary Encodes a(n) PeerEntityAuthenticationPolicy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeerEntityAuthenticationPolicy, encoded as an ASN.1 Element.
 */
export function _encode_PeerEntityAuthenticationPolicy(
    value: PeerEntityAuthenticationPolicy,
    elGetter: $.ASN1Encoder<PeerEntityAuthenticationPolicy>
) {
    if (!_cached_encoder_for_PeerEntityAuthenticationPolicy) {
        _cached_encoder_for_PeerEntityAuthenticationPolicy = $._encodeBitString;
    }
    return _cached_encoder_for_PeerEntityAuthenticationPolicy(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PeerEntityAuthenticationPolicy */

/* eslint-enable */
