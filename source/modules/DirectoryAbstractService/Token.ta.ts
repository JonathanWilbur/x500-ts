/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../AuthenticationFramework/SIGNED.ta";
import {
    TokenContent,
    _decode_TokenContent,
    _encode_TokenContent,
} from "../DirectoryAbstractService/TokenContent.ta";
export {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../AuthenticationFramework/SIGNED.ta";
export {
    TokenContent,
    _decode_TokenContent,
    _encode_TokenContent,
} from "../DirectoryAbstractService/TokenContent.ta";

/* START_OF_SYMBOL_DEFINITION Token */
/**
 * @summary Token
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Token  ::=  SIGNED{TokenContent}
 * ```
 */
export type Token = SIGNED<TokenContent>; // DefinedType
/* END_OF_SYMBOL_DEFINITION Token */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Token */
let _cached_decoder_for_Token: $.ASN1Decoder<Token> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Token */

/* START_OF_SYMBOL_DEFINITION _decode_Token */
/**
 * @summary Decodes an ASN.1 element into a(n) Token
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Token} The decoded data structure.
 */
export function _decode_Token(el: _Element) {
    if (!_cached_decoder_for_Token) {
        _cached_decoder_for_Token = _get_decoder_for_SIGNED<TokenContent>(
            _decode_TokenContent
        );
    }
    return _cached_decoder_for_Token(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Token */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Token */
let _cached_encoder_for_Token: $.ASN1Encoder<Token> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Token */

/* START_OF_SYMBOL_DEFINITION _encode_Token */
/**
 * @summary Encodes a(n) Token into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Token, encoded as an ASN.1 Element.
 */
export function _encode_Token(value: Token, elGetter: $.ASN1Encoder<Token>) {
    if (!_cached_encoder_for_Token) {
        _cached_encoder_for_Token = _get_encoder_for_SIGNED<TokenContent>(
            _encode_TokenContent
        );
    }
    return _cached_encoder_for_Token(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Token */

/* eslint-enable */
