/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION OsiBind_mode_selector */
/**
 * @summary OsiBind_mode_selector
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBind-mode-selector ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class OsiBind_mode_selector {
    constructor(
        /**
         * @summary `mode_value`.
         * @public
         * @readonly
         */
        readonly mode_value: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a OsiBind_mode_selector
     * @description
     *
     * This takes an `object` and converts it to a `OsiBind_mode_selector`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBind_mode_selector`.
     * @returns {OsiBind_mode_selector}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof OsiBind_mode_selector]: OsiBind_mode_selector[_K] }
        >
    ): OsiBind_mode_selector {
        return new OsiBind_mode_selector(_o.mode_value);
    }
}
/* END_OF_SYMBOL_DEFINITION OsiBind_mode_selector */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OsiBind_mode_selector */
/**
 * @summary The Leading Root Component Types of OsiBind_mode_selector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBind_mode_selector: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mode-value",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OsiBind_mode_selector */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OsiBind_mode_selector */
/**
 * @summary The Trailing Root Component Types of OsiBind_mode_selector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBind_mode_selector: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OsiBind_mode_selector */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OsiBind_mode_selector */
/**
 * @summary The Extension Addition Component Types of OsiBind_mode_selector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBind_mode_selector: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OsiBind_mode_selector */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiBind_mode_selector */
let _cached_decoder_for_OsiBind_mode_selector: $.ASN1Decoder<OsiBind_mode_selector> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiBind_mode_selector */

/* START_OF_SYMBOL_DEFINITION _decode_OsiBind_mode_selector */
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBind_mode_selector
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBind_mode_selector} The decoded data structure.
 */
export function _decode_OsiBind_mode_selector(el: _Element) {
    if (!_cached_decoder_for_OsiBind_mode_selector) {
        _cached_decoder_for_OsiBind_mode_selector = function (
            el: _Element
        ): OsiBind_mode_selector {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let mode_value!: INTEGER;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "mode-value": (_el: _Element): void => {
                    mode_value = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBind_mode_selector,
                _extension_additions_list_spec_for_OsiBind_mode_selector,
                _root_component_type_list_2_spec_for_OsiBind_mode_selector,
                undefined
            );
            return new OsiBind_mode_selector(
                /* SET_CONSTRUCTOR_CALL */ mode_value
            );
        };
    }
    return _cached_decoder_for_OsiBind_mode_selector(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OsiBind_mode_selector */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiBind_mode_selector */
let _cached_encoder_for_OsiBind_mode_selector: $.ASN1Encoder<OsiBind_mode_selector> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiBind_mode_selector */

/* START_OF_SYMBOL_DEFINITION _encode_OsiBind_mode_selector */
/**
 * @summary Encodes a(n) OsiBind_mode_selector into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBind_mode_selector, encoded as an ASN.1 Element.
 */
export function _encode_OsiBind_mode_selector(
    value: OsiBind_mode_selector,
    elGetter: $.ASN1Encoder<OsiBind_mode_selector>
) {
    if (!_cached_encoder_for_OsiBind_mode_selector) {
        _cached_encoder_for_OsiBind_mode_selector = function (
            value: OsiBind_mode_selector,
            elGetter: $.ASN1Encoder<OsiBind_mode_selector>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeInteger,
                            $.BER
                        )(value.mode_value, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiBind_mode_selector(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OsiBind_mode_selector */

/* eslint-enable */
