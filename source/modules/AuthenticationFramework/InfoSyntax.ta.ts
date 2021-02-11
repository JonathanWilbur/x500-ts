/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    InfoSyntax_pointer,
    _decode_InfoSyntax_pointer,
    _encode_InfoSyntax_pointer,
} from "../AuthenticationFramework/InfoSyntax-pointer.ta";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export {
    InfoSyntax_pointer,
    _decode_InfoSyntax_pointer,
    _encode_InfoSyntax_pointer,
} from "../AuthenticationFramework/InfoSyntax-pointer.ta";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION InfoSyntax */
/**
 * @summary InfoSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InfoSyntax  ::=  CHOICE {
 *   content  UnboundedDirectoryString,
 *   pointer  SEQUENCE {
 *     name     GeneralNames,
 *     hash     HASH{HashedPolicyInfo} OPTIONAL,
 *     ... },
 *   ... }
 * ```
 */
export type InfoSyntax =
    | { content: UnboundedDirectoryString } /* CHOICE_ALT_ROOT */
    | { pointer: InfoSyntax_pointer } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION InfoSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InfoSyntax */
let _cached_decoder_for_InfoSyntax: $.ASN1Decoder<InfoSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InfoSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_InfoSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) InfoSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InfoSyntax} The decoded data structure.
 */
export function _decode_InfoSyntax(el: _Element) {
    if (!_cached_decoder_for_InfoSyntax) {
        _cached_decoder_for_InfoSyntax = $._decode_extensible_choice<InfoSyntax>(
            {
                "UNIVERSAL 20": ["content", _decode_UnboundedDirectoryString],
                "UNIVERSAL 19": ["content", _decode_UnboundedDirectoryString],
                "UNIVERSAL 30": ["content", _decode_UnboundedDirectoryString],
                "UNIVERSAL 28": ["content", _decode_UnboundedDirectoryString],
                "UNIVERSAL 12": ["content", _decode_UnboundedDirectoryString],
                "UNIVERSAL 16": ["pointer", _decode_InfoSyntax_pointer],
            }
        );
    }
    return _cached_decoder_for_InfoSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InfoSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InfoSyntax */
let _cached_encoder_for_InfoSyntax: $.ASN1Encoder<InfoSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InfoSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_InfoSyntax */
/**
 * @summary Encodes a(n) InfoSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InfoSyntax, encoded as an ASN.1 Element.
 */
export function _encode_InfoSyntax(
    value: InfoSyntax,
    elGetter: $.ASN1Encoder<InfoSyntax>
) {
    if (!_cached_encoder_for_InfoSyntax) {
        _cached_encoder_for_InfoSyntax = $._encode_choice<InfoSyntax>(
            {
                content: _encode_UnboundedDirectoryString,
                pointer: _encode_InfoSyntax_pointer,
            },
            $.DER
        );
    }
    return _cached_encoder_for_InfoSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InfoSyntax */

/* eslint-enable */
