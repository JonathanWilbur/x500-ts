/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ContextCombination,
    _decode_ContextCombination,
    _encode_ContextCombination,
} from "../ServiceAdministration/ContextCombination.ta";
import {
    ContextProfile,
    _decode_ContextProfile,
    _encode_ContextProfile,
} from "../ServiceAdministration/ContextProfile.ta";
import {
    MatchingUse,
    _decode_MatchingUse,
    _encode_MatchingUse,
} from "../ServiceAdministration/MatchingUse.ta";
import {
    RequestAttribute_defaultValues_Item,
    _decode_RequestAttribute_defaultValues_Item,
    _encode_RequestAttribute_defaultValues_Item,
} from "../ServiceAdministration/RequestAttribute-defaultValues-Item.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { SupportedAttributes } from "../InformationFramework/SupportedAttributes.osa";
export {
    ContextCombination,
    _decode_ContextCombination,
    _encode_ContextCombination,
} from "../ServiceAdministration/ContextCombination.ta";
export {
    ContextProfile,
    _decode_ContextProfile,
    _encode_ContextProfile,
} from "../ServiceAdministration/ContextProfile.ta";
export {
    MatchingUse,
    _decode_MatchingUse,
    _encode_MatchingUse,
} from "../ServiceAdministration/MatchingUse.ta";
export {
    RequestAttribute_defaultValues_Item,
    _decode_RequestAttribute_defaultValues_Item,
    _encode_RequestAttribute_defaultValues_Item,
} from "../ServiceAdministration/RequestAttribute-defaultValues-Item.ta";

/* START_OF_SYMBOL_DEFINITION RequestAttribute */
/**
 * @summary RequestAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestAttribute ::= SEQUENCE {
 *   attributeType            ATTRIBUTE.&id({SupportedAttributes}),
 *   includeSubtypes     [0]  BOOLEAN DEFAULT FALSE,
 *   selectedValues      [1]  SEQUENCE SIZE (0..MAX) OF ATTRIBUTE.&Type
 *                            ({SupportedAttributes}{@attributeType}) OPTIONAL,
 *   defaultValues       [2]  SEQUENCE SIZE (0..MAX) OF SEQUENCE {
 *     entryType                OBJECT-CLASS.&id OPTIONAL,
 *     values                   SEQUENCE OF ATTRIBUTE.&Type
 *                              ({SupportedAttributes}{@attributeType}),
 *                              ...} OPTIONAL,
 *   contexts            [3]  SEQUENCE SIZE (0..MAX) OF ContextProfile OPTIONAL,
 *   contextCombination  [4]  ContextCombination DEFAULT and:{},
 *   matchingUse         [5]  SEQUENCE SIZE (1..MAX) OF MatchingUse OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class RequestAttribute {
    constructor(
        /**
         * @summary `attributeType`.
         * @public
         * @readonly
         */
        readonly attributeType: OBJECT_IDENTIFIER,
        /**
         * @summary `includeSubtypes`.
         * @public
         * @readonly
         */
        readonly includeSubtypes: OPTIONAL<BOOLEAN>,
        /**
         * @summary `selectedValues`.
         * @public
         * @readonly
         */
        readonly selectedValues: OPTIONAL<_Element[]>,
        /**
         * @summary `defaultValues`.
         * @public
         * @readonly
         */
        readonly defaultValues: OPTIONAL<RequestAttribute_defaultValues_Item[]>,
        /**
         * @summary `contexts`.
         * @public
         * @readonly
         */
        readonly contexts: OPTIONAL<ContextProfile[]>,
        /**
         * @summary `contextCombination`.
         * @public
         * @readonly
         */
        readonly contextCombination: OPTIONAL<ContextCombination>,
        /**
         * @summary `matchingUse`.
         * @public
         * @readonly
         */
        readonly matchingUse: OPTIONAL<MatchingUse[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RequestAttribute
     * @description
     *
     * This takes an `object` and converts it to a `RequestAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestAttribute`.
     * @returns {RequestAttribute}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof RequestAttribute]: RequestAttribute[_K] }>
    ): RequestAttribute {
        return new RequestAttribute(
            _o.attributeType,
            _o.includeSubtypes,
            _o.selectedValues,
            _o.defaultValues,
            _o.contexts,
            _o.contextCombination,
            _o.matchingUse,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `includeSubtypes`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_includeSubtypes() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `contextCombination`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_contextCombination() {
        return { and: [] };
    }
}
/* END_OF_SYMBOL_DEFINITION RequestAttribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RequestAttribute */
/**
 * @summary The Leading Root Component Types of RequestAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RequestAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "attributeType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "includeSubtypes",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "selectedValues",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "defaultValues",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contexts",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contextCombination",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "matchingUse",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RequestAttribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RequestAttribute */
/**
 * @summary The Trailing Root Component Types of RequestAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RequestAttribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RequestAttribute */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RequestAttribute */
/**
 * @summary The Extension Addition Component Types of RequestAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RequestAttribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RequestAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestAttribute */
let _cached_decoder_for_RequestAttribute: $.ASN1Decoder<RequestAttribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestAttribute */

/* START_OF_SYMBOL_DEFINITION _decode_RequestAttribute */
/**
 * @summary Decodes an ASN.1 element into a(n) RequestAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestAttribute} The decoded data structure.
 */
export function _decode_RequestAttribute(el: _Element) {
    if (!_cached_decoder_for_RequestAttribute) {
        _cached_decoder_for_RequestAttribute = function (
            el: _Element
        ): RequestAttribute {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attributeType!: OBJECT_IDENTIFIER;
            let includeSubtypes: OPTIONAL<BOOLEAN> =
                RequestAttribute._default_value_for_includeSubtypes;
            let selectedValues: OPTIONAL<_Element[]>;
            let defaultValues: OPTIONAL<RequestAttribute_defaultValues_Item[]>;
            let contexts: OPTIONAL<ContextProfile[]>;
            let contextCombination: OPTIONAL<ContextCombination> =
                RequestAttribute._default_value_for_contextCombination;
            let matchingUse: OPTIONAL<MatchingUse[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                attributeType: (_el: _Element): void => {
                    attributeType = $._decodeObjectIdentifier(_el);
                },
                includeSubtypes: (_el: _Element): void => {
                    includeSubtypes = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                selectedValues: (_el: _Element): void => {
                    selectedValues = $._decode_explicit<_Element[]>(() =>
                        $._decodeSequenceOf<_Element>(() => $._decodeAny)
                    )(_el);
                },
                defaultValues: (_el: _Element): void => {
                    defaultValues = $._decode_explicit<
                        RequestAttribute_defaultValues_Item[]
                    >(() =>
                        $._decodeSequenceOf<RequestAttribute_defaultValues_Item>(
                            () => _decode_RequestAttribute_defaultValues_Item
                        )
                    )(_el);
                },
                contexts: (_el: _Element): void => {
                    contexts = $._decode_explicit<ContextProfile[]>(() =>
                        $._decodeSequenceOf<ContextProfile>(
                            () => _decode_ContextProfile
                        )
                    )(_el);
                },
                contextCombination: (_el: _Element): void => {
                    contextCombination = $._decode_explicit<ContextCombination>(
                        () => _decode_ContextCombination
                    )(_el);
                },
                matchingUse: (_el: _Element): void => {
                    matchingUse = $._decode_explicit<MatchingUse[]>(() =>
                        $._decodeSequenceOf<MatchingUse>(
                            () => _decode_MatchingUse
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RequestAttribute,
                _extension_additions_list_spec_for_RequestAttribute,
                _root_component_type_list_2_spec_for_RequestAttribute,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RequestAttribute(
                /* SEQUENCE_CONSTRUCTOR_CALL */ attributeType,
                includeSubtypes,
                selectedValues,
                defaultValues,
                contexts,
                contextCombination,
                matchingUse,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RequestAttribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RequestAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestAttribute */
let _cached_encoder_for_RequestAttribute: $.ASN1Encoder<RequestAttribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestAttribute */

/* START_OF_SYMBOL_DEFINITION _encode_RequestAttribute */
/**
 * @summary Encodes a(n) RequestAttribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestAttribute, encoded as an ASN.1 Element.
 */
export function _encode_RequestAttribute(
    value: RequestAttribute,
    elGetter: $.ASN1Encoder<RequestAttribute>
) {
    if (!_cached_encoder_for_RequestAttribute) {
        _cached_encoder_for_RequestAttribute = function (
            value: RequestAttribute,
            elGetter: $.ASN1Encoder<RequestAttribute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.attributeType,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.includeSubtypes ===
                                undefined ||
                            $.deepEq(
                                value.includeSubtypes,
                                RequestAttribute._default_value_for_includeSubtypes
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.includeSubtypes, $.BER),
                            /* IF_ABSENT  */ value.selectedValues === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSequenceOf<_Element>(
                                              () => $._encodeAny,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.selectedValues, $.BER),
                            /* IF_ABSENT  */ value.defaultValues === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSequenceOf<RequestAttribute_defaultValues_Item>(
                                              () =>
                                                  _encode_RequestAttribute_defaultValues_Item,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.defaultValues, $.BER),
                            /* IF_ABSENT  */ value.contexts === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSequenceOf<ContextProfile>(
                                              () => _encode_ContextProfile,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.contexts, $.BER),
                            /* IF_DEFAULT */ value.contextCombination ===
                                undefined ||
                            $.deepEq(
                                value.contextCombination,
                                RequestAttribute._default_value_for_contextCombination
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_ContextCombination,
                                      $.BER
                                  )(value.contextCombination, $.BER),
                            /* IF_ABSENT  */ value.matchingUse === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () =>
                                          $._encodeSequenceOf<MatchingUse>(
                                              () => _encode_MatchingUse,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.matchingUse, $.BER),
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
    return _cached_encoder_for_RequestAttribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RequestAttribute */

/* eslint-enable */
