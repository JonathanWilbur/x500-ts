/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeTypes,
    _decode_AttributeTypes,
    _encode_AttributeTypes,
} from "../DirectoryShadowAbstractService/AttributeTypes.ta";
export {
    AttributeTypes,
    _decode_AttributeTypes,
    _encode_AttributeTypes,
} from "../DirectoryShadowAbstractService/AttributeTypes.ta";

/* START_OF_SYMBOL_DEFINITION ClassAttributes */
/**
 * @summary ClassAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClassAttributes  ::=  CHOICE {
 *   allAttributes  NULL,
 *   include        [0]  AttributeTypes,
 *   exclude        [1]  AttributeTypes,
 *   ... }
 * ```
 */
export type ClassAttributes =
    | { allAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { include: AttributeTypes } /* CHOICE_ALT_ROOT */
    | { exclude: AttributeTypes } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ClassAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ClassAttributes */
let _cached_decoder_for_ClassAttributes: $.ASN1Decoder<
    ClassAttributes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ClassAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_ClassAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) ClassAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClassAttributes} The decoded data structure.
 */
export function _decode_ClassAttributes(el: _Element) {
    if (!_cached_decoder_for_ClassAttributes) {
        _cached_decoder_for_ClassAttributes = $._decode_extensible_choice<
            ClassAttributes
        >({
            "UNIVERSAL 5": ["allAttributes", $._decodeNull],
            "CONTEXT 0": [
                "include",
                $._decode_implicit<AttributeTypes>(
                    () => _decode_AttributeTypes
                ),
            ],
            "CONTEXT 1": [
                "exclude",
                $._decode_implicit<AttributeTypes>(
                    () => _decode_AttributeTypes
                ),
            ],
        });
    }
    return _cached_decoder_for_ClassAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ClassAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ClassAttributes */
let _cached_encoder_for_ClassAttributes: $.ASN1Encoder<
    ClassAttributes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ClassAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_ClassAttributes */
/**
 * @summary Encodes a(n) ClassAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClassAttributes, encoded as an ASN.1 Element.
 */
export function _encode_ClassAttributes(
    value: ClassAttributes,
    elGetter: $.ASN1Encoder<ClassAttributes>
) {
    if (!_cached_encoder_for_ClassAttributes) {
        _cached_encoder_for_ClassAttributes = $._encode_choice<ClassAttributes>(
            {
                allAttributes: $._encodeNull,
                include: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AttributeTypes,
                    $.BER
                ),
                exclude: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AttributeTypes,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ClassAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ClassAttributes */

/* eslint-enable */
