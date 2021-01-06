/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DITcontext,
    _decode_DITcontext,
    _encode_DITcontext,
} from "../HierarchicalOperationalBindings/DITcontext.ta";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
export {
    DITcontext,
    _decode_DITcontext,
    _encode_DITcontext,
} from "../HierarchicalOperationalBindings/DITcontext.ta";
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";

/* START_OF_SYMBOL_DEFINITION SuperiorToSubordinate */
/**
 * @summary SuperiorToSubordinate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SuperiorToSubordinate ::= SEQUENCE {
 *   contextPrefixInfo     [0]  DITcontext,
 *   entryInfo             [1]  SET SIZE (1..MAX) OF
 *                                Attribute{{SupportedAttributes}} OPTIONAL,
 *   immediateSuperiorInfo [2]  SET SIZE (1..MAX) OF
 *                                Attribute{{SupportedAttributes}} OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class SuperiorToSubordinate {
    constructor(
        /**
         * @summary `contextPrefixInfo`.
         * @public
         * @readonly
         */
        readonly contextPrefixInfo: DITcontext,
        /**
         * @summary `entryInfo`.
         * @public
         * @readonly
         */
        readonly entryInfo: OPTIONAL<Attribute[]>,
        /**
         * @summary `immediateSuperiorInfo`.
         * @public
         * @readonly
         */
        readonly immediateSuperiorInfo: OPTIONAL<Attribute[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SuperiorToSubordinate
     * @description
     *
     * This takes an `object` and converts it to a `SuperiorToSubordinate`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SuperiorToSubordinate`.
     * @returns {SuperiorToSubordinate}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SuperiorToSubordinate]: SuperiorToSubordinate[_K] }
        >
    ): SuperiorToSubordinate {
        return new SuperiorToSubordinate(
            _o.contextPrefixInfo,
            _o.entryInfo,
            _o.immediateSuperiorInfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SuperiorToSubordinate */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SuperiorToSubordinate */
/**
 * @summary The Leading Root Component Types of SuperiorToSubordinate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SuperiorToSubordinate: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "contextPrefixInfo",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "entryInfo",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "immediateSuperiorInfo",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SuperiorToSubordinate */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SuperiorToSubordinate */
/**
 * @summary The Trailing Root Component Types of SuperiorToSubordinate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SuperiorToSubordinate: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SuperiorToSubordinate */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SuperiorToSubordinate */
/**
 * @summary The Extension Addition Component Types of SuperiorToSubordinate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SuperiorToSubordinate: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SuperiorToSubordinate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SuperiorToSubordinate */
let _cached_decoder_for_SuperiorToSubordinate: $.ASN1Decoder<SuperiorToSubordinate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SuperiorToSubordinate */

/* START_OF_SYMBOL_DEFINITION _decode_SuperiorToSubordinate */
/**
 * @summary Decodes an ASN.1 element into a(n) SuperiorToSubordinate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SuperiorToSubordinate} The decoded data structure.
 */
export function _decode_SuperiorToSubordinate(el: _Element) {
    if (!_cached_decoder_for_SuperiorToSubordinate) {
        _cached_decoder_for_SuperiorToSubordinate = function (
            el: _Element
        ): SuperiorToSubordinate {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let contextPrefixInfo!: DITcontext;
            let entryInfo: OPTIONAL<Attribute[]>;
            let immediateSuperiorInfo: OPTIONAL<Attribute[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                contextPrefixInfo: (_el: _Element): void => {
                    contextPrefixInfo = $._decode_explicit<DITcontext>(
                        () => _decode_DITcontext
                    )(_el);
                },
                entryInfo: (_el: _Element): void => {
                    entryInfo = $._decode_explicit<Attribute[]>(() =>
                        $._decodeSetOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
                immediateSuperiorInfo: (_el: _Element): void => {
                    immediateSuperiorInfo = $._decode_explicit<Attribute[]>(
                        () => $._decodeSetOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SuperiorToSubordinate,
                _extension_additions_list_spec_for_SuperiorToSubordinate,
                _root_component_type_list_2_spec_for_SuperiorToSubordinate,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SuperiorToSubordinate(
                /* SEQUENCE_CONSTRUCTOR_CALL */ contextPrefixInfo,
                entryInfo,
                immediateSuperiorInfo,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SuperiorToSubordinate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SuperiorToSubordinate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SuperiorToSubordinate */
let _cached_encoder_for_SuperiorToSubordinate: $.ASN1Encoder<SuperiorToSubordinate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SuperiorToSubordinate */

/* START_OF_SYMBOL_DEFINITION _encode_SuperiorToSubordinate */
/**
 * @summary Encodes a(n) SuperiorToSubordinate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuperiorToSubordinate, encoded as an ASN.1 Element.
 */
export function _encode_SuperiorToSubordinate(
    value: SuperiorToSubordinate,
    elGetter: $.ASN1Encoder<SuperiorToSubordinate>
) {
    if (!_cached_encoder_for_SuperiorToSubordinate) {
        _cached_encoder_for_SuperiorToSubordinate = function (
            value: SuperiorToSubordinate,
            elGetter: $.ASN1Encoder<SuperiorToSubordinate>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_DITcontext,
                                $.BER
                            )(value.contextPrefixInfo, $.BER),
                            /* IF_ABSENT  */ value.entryInfo === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSetOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.entryInfo, $.BER),
                            /* IF_ABSENT  */ value.immediateSuperiorInfo ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.immediateSuperiorInfo, $.BER),
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
    return _cached_encoder_for_SuperiorToSubordinate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SuperiorToSubordinate */

/* eslint-enable */
