/* eslint-disable */
import { ASN1Element as _Element, EXTERNAL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AuthenticationLevel_basicLevels,
    _decode_AuthenticationLevel_basicLevels,
    _encode_AuthenticationLevel_basicLevels,
} from "../BasicAccessControl/AuthenticationLevel-basicLevels.ta";
export {
    AuthenticationLevel_basicLevels,
    _decode_AuthenticationLevel_basicLevels,
    _encode_AuthenticationLevel_basicLevels,
} from "../BasicAccessControl/AuthenticationLevel-basicLevels.ta";

/* START_OF_SYMBOL_DEFINITION AuthenticationLevel */
/**
 * @summary AuthenticationLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationLevel  ::=  CHOICE {
 *   basicLevels     SEQUENCE {
 *     level           ENUMERATED {none(0), simple(1), strong(2),...},
 *     localQualifier  INTEGER OPTIONAL,
 *     signed          BOOLEAN DEFAULT FALSE,
 *     ...},
 *   other           EXTERNAL,
 *   ... }
 * ```
 */
export type AuthenticationLevel =
    | { basicLevels: AuthenticationLevel_basicLevels } /* CHOICE_ALT_ROOT */
    | { other: EXTERNAL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION AuthenticationLevel */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticationLevel */
let _cached_decoder_for_AuthenticationLevel: $.ASN1Decoder<
    AuthenticationLevel
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticationLevel */

/* START_OF_SYMBOL_DEFINITION _decode_AuthenticationLevel */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationLevel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticationLevel} The decoded data structure.
 */
export function _decode_AuthenticationLevel(el: _Element) {
    if (!_cached_decoder_for_AuthenticationLevel) {
        _cached_decoder_for_AuthenticationLevel = $._decode_extensible_choice<
            AuthenticationLevel
        >({
            "UNIVERSAL 16": [
                "basicLevels",
                _decode_AuthenticationLevel_basicLevels,
            ],
            "UNIVERSAL 8": ["other", $._decodeExternal],
        });
    }
    return _cached_decoder_for_AuthenticationLevel(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthenticationLevel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticationLevel */
let _cached_encoder_for_AuthenticationLevel: $.ASN1Encoder<
    AuthenticationLevel
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticationLevel */

/* START_OF_SYMBOL_DEFINITION _encode_AuthenticationLevel */
/**
 * @summary Encodes a(n) AuthenticationLevel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationLevel, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticationLevel(
    value: AuthenticationLevel,
    elGetter: $.ASN1Encoder<AuthenticationLevel>
) {
    if (!_cached_encoder_for_AuthenticationLevel) {
        _cached_encoder_for_AuthenticationLevel = $._encode_choice<
            AuthenticationLevel
        >(
            {
                basicLevels: _encode_AuthenticationLevel_basicLevels,
                other: $._encodeExternal,
            },
            $.BER
        );
    }
    return _cached_encoder_for_AuthenticationLevel(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthenticationLevel */

/* eslint-enable */
