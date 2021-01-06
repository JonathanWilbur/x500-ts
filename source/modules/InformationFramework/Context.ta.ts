/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { CONTEXT } from "../InformationFramework/CONTEXT.oca";
export { SupportedContexts } from "../InformationFramework/SupportedContexts.osa";

/* START_OF_SYMBOL_DEFINITION Context */
/**
 * @summary Context
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Context ::= SEQUENCE {
 *   contextType    CONTEXT.&id({SupportedContexts}),
 *   contextValues
 *     SET SIZE (1..MAX) OF CONTEXT.&Type({SupportedContexts}{@contextType}),
 *   fallback       BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 * @class
 */
export class Context {
    constructor(
        /**
         * @summary `contextType`.
         * @public
         * @readonly
         */
        readonly contextType: OBJECT_IDENTIFIER,
        /**
         * @summary `contextValues`.
         * @public
         * @readonly
         */
        readonly contextValues: _Element[],
        /**
         * @summary `fallback`.
         * @public
         * @readonly
         */
        readonly fallback: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Context
     * @description
     *
     * This takes an `object` and converts it to a `Context`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Context`.
     * @returns {Context}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Context]: Context[_K] }>
    ): Context {
        return new Context(
            _o.contextType,
            _o.contextValues,
            _o.fallback,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `fallback`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_fallback() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION Context */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Context */
/**
 * @summary The Leading Root Component Types of Context
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Context: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "contextType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contextValues",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "fallback",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Context */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Context */
/**
 * @summary The Trailing Root Component Types of Context
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Context: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Context */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Context */
/**
 * @summary The Extension Addition Component Types of Context
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Context: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Context */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Context */
let _cached_decoder_for_Context: $.ASN1Decoder<Context> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Context */

/* START_OF_SYMBOL_DEFINITION _decode_Context */
/**
 * @summary Decodes an ASN.1 element into a(n) Context
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Context} The decoded data structure.
 */
export function _decode_Context(el: _Element) {
    if (!_cached_decoder_for_Context) {
        _cached_decoder_for_Context = function (el: _Element): Context {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let contextType!: OBJECT_IDENTIFIER;
            let contextValues!: _Element[];
            let fallback: OPTIONAL<BOOLEAN> =
                Context._default_value_for_fallback;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                contextType: (_el: _Element): void => {
                    contextType = $._decodeObjectIdentifier(_el);
                },
                contextValues: (_el: _Element): void => {
                    contextValues = $._decodeSetOf<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
                fallback: (_el: _Element): void => {
                    fallback = $._decodeBoolean(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Context,
                _extension_additions_list_spec_for_Context,
                _root_component_type_list_2_spec_for_Context,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Context(
                /* SEQUENCE_CONSTRUCTOR_CALL */ contextType,
                contextValues,
                fallback,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Context(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Context */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Context */
let _cached_encoder_for_Context: $.ASN1Encoder<Context> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Context */

/* START_OF_SYMBOL_DEFINITION _encode_Context */
/**
 * @summary Encodes a(n) Context into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Context, encoded as an ASN.1 Element.
 */
export function _encode_Context(
    value: Context,
    elGetter: $.ASN1Encoder<Context>
) {
    if (!_cached_encoder_for_Context) {
        _cached_encoder_for_Context = function (
            value: Context,
            elGetter: $.ASN1Encoder<Context>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.contextType,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSetOf<_Element>(
                                () => $._encodeAny,
                                $.BER
                            )(value.contextValues, $.BER),
                            /* IF_DEFAULT */ value.fallback === undefined ||
                            $.deepEq(
                                value.fallback,
                                Context._default_value_for_fallback
                            )
                                ? undefined
                                : $._encodeBoolean(value.fallback, $.BER),
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
    return _cached_encoder_for_Context(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Context */

/* eslint-enable */
