/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AltNameType_builtinNameForm,
    _decode_AltNameType_builtinNameForm,
    _encode_AltNameType_builtinNameForm,
} from "../CertificateExtensions/AltNameType-builtinNameForm.ta";
export {
    AltNameType_builtinNameForm,
    AltNameType_builtinNameForm_directoryName /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AltNameType_builtinNameForm_dNSName /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AltNameType_builtinNameForm_ediPartyName /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AltNameType_builtinNameForm_iPAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AltNameType_builtinNameForm_registeredId /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AltNameType_builtinNameForm_rfc822Name /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AltNameType_builtinNameForm_uniformResourceIdentifier /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AltNameType_builtinNameForm_x400Address /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dNSName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ediPartyName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    iPAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    registeredId /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    rfc822Name /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    uniformResourceIdentifier /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    x400Address /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AltNameType_builtinNameForm,
    _encode_AltNameType_builtinNameForm,
    _enum_for_AltNameType_builtinNameForm,
} from "../CertificateExtensions/AltNameType-builtinNameForm.ta";

/* START_OF_SYMBOL_DEFINITION AltNameType */
/**
 * @summary AltNameType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AltNameType  ::=  CHOICE {
 *   builtinNameForm  ENUMERATED {
 *     rfc822Name                (1),
 *     dNSName                   (2),
 *     x400Address               (3),
 *     directoryName             (4),
 *     ediPartyName              (5),
 *     uniformResourceIdentifier (6),
 *     iPAddress                 (7),
 *     registeredId              (8),
 *     ...},
 *   otherNameForm    OBJECT IDENTIFIER,
 *   ... }
 * ```
 */
export type AltNameType =
    | { builtinNameForm: AltNameType_builtinNameForm } /* CHOICE_ALT_ROOT */
    | { otherNameForm: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION AltNameType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AltNameType */
let _cached_decoder_for_AltNameType: $.ASN1Decoder<AltNameType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AltNameType */

/* START_OF_SYMBOL_DEFINITION _decode_AltNameType */
/**
 * @summary Decodes an ASN.1 element into a(n) AltNameType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AltNameType} The decoded data structure.
 */
export function _decode_AltNameType(el: _Element) {
    if (!_cached_decoder_for_AltNameType) {
        _cached_decoder_for_AltNameType = $._decode_extensible_choice<AltNameType>(
            {
                "UNIVERSAL 10": [
                    "builtinNameForm",
                    _decode_AltNameType_builtinNameForm,
                ],
                "UNIVERSAL 6": ["otherNameForm", $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_AltNameType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AltNameType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AltNameType */
let _cached_encoder_for_AltNameType: $.ASN1Encoder<AltNameType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AltNameType */

/* START_OF_SYMBOL_DEFINITION _encode_AltNameType */
/**
 * @summary Encodes a(n) AltNameType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AltNameType, encoded as an ASN.1 Element.
 */
export function _encode_AltNameType(
    value: AltNameType,
    elGetter: $.ASN1Encoder<AltNameType>
) {
    if (!_cached_encoder_for_AltNameType) {
        _cached_encoder_for_AltNameType = $._encode_choice<AltNameType>(
            {
                builtinNameForm: _encode_AltNameType_builtinNameForm,
                otherNameForm: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_AltNameType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AltNameType */

/* eslint-enable */
