/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AuthenReasonSyntax */
/**
 * @summary AuthenReasonSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenReasonSyntax  ::=  INTEGER {
 *   unknownUser(0), incorrectPassword(1), inaccessiblePassword(2),
 *   passwordVerificationLoop(3), unrecognizedUser(4)}
 * ```
 */
export type AuthenReasonSyntax = INTEGER;
/* END_OF_SYMBOL_DEFINITION AuthenReasonSyntax */

/* START_OF_SYMBOL_DEFINITION AuthenReasonSyntax_unknownUser */
/**
 * @summary AuthenReasonSyntax_unknownUser
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_unknownUser: AuthenReasonSyntax = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenReasonSyntax_unknownUser */

/* START_OF_SYMBOL_DEFINITION unknownUser */
/**
 * @summary AuthenReasonSyntax_unknownUser
 * @constant
 * @type {number}
 */
export const unknownUser: AuthenReasonSyntax = AuthenReasonSyntax_unknownUser; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unknownUser */

/* START_OF_SYMBOL_DEFINITION AuthenReasonSyntax_incorrectPassword */
/**
 * @summary AuthenReasonSyntax_incorrectPassword
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_incorrectPassword: AuthenReasonSyntax = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenReasonSyntax_incorrectPassword */

/* START_OF_SYMBOL_DEFINITION incorrectPassword */
/**
 * @summary AuthenReasonSyntax_incorrectPassword
 * @constant
 * @type {number}
 */
export const incorrectPassword: AuthenReasonSyntax = AuthenReasonSyntax_incorrectPassword; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION incorrectPassword */

/* START_OF_SYMBOL_DEFINITION AuthenReasonSyntax_inaccessiblePassword */
/**
 * @summary AuthenReasonSyntax_inaccessiblePassword
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_inaccessiblePassword: AuthenReasonSyntax = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenReasonSyntax_inaccessiblePassword */

/* START_OF_SYMBOL_DEFINITION inaccessiblePassword */
/**
 * @summary AuthenReasonSyntax_inaccessiblePassword
 * @constant
 * @type {number}
 */
export const inaccessiblePassword: AuthenReasonSyntax = AuthenReasonSyntax_inaccessiblePassword; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION inaccessiblePassword */

/* START_OF_SYMBOL_DEFINITION AuthenReasonSyntax_passwordVerificationLoop */
/**
 * @summary AuthenReasonSyntax_passwordVerificationLoop
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_passwordVerificationLoop: AuthenReasonSyntax = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenReasonSyntax_passwordVerificationLoop */

/* START_OF_SYMBOL_DEFINITION passwordVerificationLoop */
/**
 * @summary AuthenReasonSyntax_passwordVerificationLoop
 * @constant
 * @type {number}
 */
export const passwordVerificationLoop: AuthenReasonSyntax = AuthenReasonSyntax_passwordVerificationLoop; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION passwordVerificationLoop */

/* START_OF_SYMBOL_DEFINITION AuthenReasonSyntax_unrecognizedUser */
/**
 * @summary AuthenReasonSyntax_unrecognizedUser
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_unrecognizedUser: AuthenReasonSyntax = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenReasonSyntax_unrecognizedUser */

/* START_OF_SYMBOL_DEFINITION unrecognizedUser */
/**
 * @summary AuthenReasonSyntax_unrecognizedUser
 * @constant
 * @type {number}
 */
export const unrecognizedUser: AuthenReasonSyntax = AuthenReasonSyntax_unrecognizedUser; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognizedUser */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenReasonSyntax */
let _cached_decoder_for_AuthenReasonSyntax: $.ASN1Decoder<
    AuthenReasonSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenReasonSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_AuthenReasonSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthenReasonSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenReasonSyntax} The decoded data structure.
 */
export function _decode_AuthenReasonSyntax(el: _Element) {
    if (!_cached_decoder_for_AuthenReasonSyntax) {
        _cached_decoder_for_AuthenReasonSyntax = $._decodeInteger;
    }
    return _cached_decoder_for_AuthenReasonSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthenReasonSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenReasonSyntax */
let _cached_encoder_for_AuthenReasonSyntax: $.ASN1Encoder<
    AuthenReasonSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenReasonSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_AuthenReasonSyntax */
/**
 * @summary Encodes a(n) AuthenReasonSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenReasonSyntax, encoded as an ASN.1 Element.
 */
export function _encode_AuthenReasonSyntax(
    value: AuthenReasonSyntax,
    elGetter: $.ASN1Encoder<AuthenReasonSyntax>
) {
    if (!_cached_encoder_for_AuthenReasonSyntax) {
        _cached_encoder_for_AuthenReasonSyntax = $._encodeInteger;
    }
    return _cached_encoder_for_AuthenReasonSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthenReasonSyntax */

/* eslint-enable */
