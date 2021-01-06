/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";

/* START_OF_SYMBOL_DEFINITION ExtensionAttribute_value_Item */
/**
 * @summary ExtensionAttribute_value_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionAttribute-value-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ExtensionAttribute_value_Item {
    constructor(
        /**
         * @summary `mandatory`.
         * @public
         * @readonly
         */
        readonly mandatory: OPTIONAL<BOOLEAN>,
        /**
         * @summary `critical`.
         * @public
         * @readonly
         */
        readonly critical: OPTIONAL<BOOLEAN>,
        /**
         * @summary `ext`.
         * @public
         * @readonly
         */
        readonly ext: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ExtensionAttribute_value_Item
     * @description
     *
     * This takes an `object` and converts it to a `ExtensionAttribute_value_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtensionAttribute_value_Item`.
     * @returns {ExtensionAttribute_value_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ExtensionAttribute_value_Item]: ExtensionAttribute_value_Item[_K];
            }
        >
    ): ExtensionAttribute_value_Item {
        return new ExtensionAttribute_value_Item(
            _o.mandatory,
            _o.critical,
            _o.ext,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `mandatory`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_mandatory() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `critical`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_critical() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION ExtensionAttribute_value_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExtensionAttribute_value_Item */
/**
 * @summary The Leading Root Component Types of ExtensionAttribute_value_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExtensionAttribute_value_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mandatory",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "critical",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "ext",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExtensionAttribute_value_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExtensionAttribute_value_Item */
/**
 * @summary The Trailing Root Component Types of ExtensionAttribute_value_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExtensionAttribute_value_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExtensionAttribute_value_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExtensionAttribute_value_Item */
/**
 * @summary The Extension Addition Component Types of ExtensionAttribute_value_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExtensionAttribute_value_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExtensionAttribute_value_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionAttribute_value_Item */
let _cached_decoder_for_ExtensionAttribute_value_Item: $.ASN1Decoder<ExtensionAttribute_value_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionAttribute_value_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ExtensionAttribute_value_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionAttribute_value_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionAttribute_value_Item} The decoded data structure.
 */
export function _decode_ExtensionAttribute_value_Item(el: _Element) {
    if (!_cached_decoder_for_ExtensionAttribute_value_Item) {
        _cached_decoder_for_ExtensionAttribute_value_Item = function (
            el: _Element
        ): ExtensionAttribute_value_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let mandatory: OPTIONAL<BOOLEAN> =
                ExtensionAttribute_value_Item._default_value_for_mandatory;
            let critical: OPTIONAL<BOOLEAN> =
                ExtensionAttribute_value_Item._default_value_for_critical;
            let ext!: _Element;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                mandatory: (_el: _Element): void => {
                    mandatory = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                critical: (_el: _Element): void => {
                    critical = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                ext: (_el: _Element): void => {
                    ext = $._decode_explicit<_Element>(() => $._decodeAny)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ExtensionAttribute_value_Item,
                _extension_additions_list_spec_for_ExtensionAttribute_value_Item,
                _root_component_type_list_2_spec_for_ExtensionAttribute_value_Item,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ExtensionAttribute_value_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ mandatory,
                critical,
                ext,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ExtensionAttribute_value_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtensionAttribute_value_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionAttribute_value_Item */
let _cached_encoder_for_ExtensionAttribute_value_Item: $.ASN1Encoder<ExtensionAttribute_value_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionAttribute_value_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ExtensionAttribute_value_Item */
/**
 * @summary Encodes a(n) ExtensionAttribute_value_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionAttribute_value_Item, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionAttribute_value_Item(
    value: ExtensionAttribute_value_Item,
    elGetter: $.ASN1Encoder<ExtensionAttribute_value_Item>
) {
    if (!_cached_encoder_for_ExtensionAttribute_value_Item) {
        _cached_encoder_for_ExtensionAttribute_value_Item = function (
            value: ExtensionAttribute_value_Item,
            elGetter: $.ASN1Encoder<ExtensionAttribute_value_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.mandatory === undefined ||
                            $.deepEq(
                                value.mandatory,
                                ExtensionAttribute_value_Item._default_value_for_mandatory
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.mandatory, $.BER),
                            /* IF_DEFAULT */ value.critical === undefined ||
                            $.deepEq(
                                value.critical,
                                ExtensionAttribute_value_Item._default_value_for_critical
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.critical, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => $._encodeAny,
                                $.BER
                            )(value.ext, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ExtensionAttribute_value_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtensionAttribute_value_Item */

/* eslint-enable */
