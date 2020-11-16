/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UserPwd_encrypted,
    _decode_UserPwd_encrypted,
    _encode_UserPwd_encrypted,
} from "../PasswordPolicy/UserPwd-encrypted.ta";
export {
    UserPwd_encrypted,
    _decode_UserPwd_encrypted,
    _encode_UserPwd_encrypted,
} from "../PasswordPolicy/UserPwd-encrypted.ta";

/* START_OF_SYMBOL_DEFINITION UserPwd */
/**
 * @summary UserPwd
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserPwd  ::=  CHOICE {
 *   clear                 UTF8String,
 *   encrypted             SEQUENCE {
 *     algorithmIdentifier   AlgorithmIdentifier{{SupportedAlgorithms}},
 *     encryptedString       OCTET STRING,
 *     ...},
 *   ...}
 * ```
 */
export type UserPwd =
    | { clear: UTF8String } /* CHOICE_ALT_ROOT */
    | { encrypted: UserPwd_encrypted } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION UserPwd */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UserPwd */
let _cached_decoder_for_UserPwd: $.ASN1Decoder<UserPwd> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UserPwd */

/* START_OF_SYMBOL_DEFINITION _decode_UserPwd */
/**
 * @summary Decodes an ASN.1 element into a(n) UserPwd
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserPwd} The decoded data structure.
 */
export function _decode_UserPwd(el: _Element) {
    if (!_cached_decoder_for_UserPwd) {
        _cached_decoder_for_UserPwd = $._decode_extensible_choice<UserPwd>({
            "UNIVERSAL 12": ["clear", $._decodeUTF8String],
            "UNIVERSAL 16": ["encrypted", _decode_UserPwd_encrypted],
        });
    }
    return _cached_decoder_for_UserPwd(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UserPwd */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UserPwd */
let _cached_encoder_for_UserPwd: $.ASN1Encoder<UserPwd> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UserPwd */

/* START_OF_SYMBOL_DEFINITION _encode_UserPwd */
/**
 * @summary Encodes a(n) UserPwd into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserPwd, encoded as an ASN.1 Element.
 */
export function _encode_UserPwd(
    value: UserPwd,
    elGetter: $.ASN1Encoder<UserPwd>
) {
    if (!_cached_encoder_for_UserPwd) {
        _cached_encoder_for_UserPwd = $._encode_choice<UserPwd>(
            {
                clear: $._encodeUTF8String,
                encrypted: _encode_UserPwd_encrypted,
            },
            $.BER
        );
    }
    return _cached_encoder_for_UserPwd(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UserPwd */

/* eslint-enable */
