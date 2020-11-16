/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    TRUE_BIT,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    HierarchySelections,
    _decode_HierarchySelections,
    _encode_HierarchySelections,
} from "../DirectoryAbstractService/HierarchySelections.ta";
import {
    SearchControlOptions,
    SearchControlOptions_searchAliases /* IMPORTED_BIT */,
    _decode_SearchControlOptions,
    _encode_SearchControlOptions,
} from "../DirectoryAbstractService/SearchControlOptions.ta";
import {
    ServiceControlOptions,
    _decode_ServiceControlOptions,
    _encode_ServiceControlOptions,
} from "../DirectoryAbstractService/ServiceControlOptions.ta";
export {
    HierarchySelections,
    HierarchySelections_all /* IMPORTED_BIT */,
    HierarchySelections_children /* IMPORTED_BIT */,
    HierarchySelections_hierarchy /* IMPORTED_BIT */,
    HierarchySelections_parent /* IMPORTED_BIT */,
    HierarchySelections_self /* IMPORTED_BIT */,
    HierarchySelections_siblingChildren /* IMPORTED_BIT */,
    HierarchySelections_siblings /* IMPORTED_BIT */,
    HierarchySelections_siblingSubtree /* IMPORTED_BIT */,
    HierarchySelections_subtree /* IMPORTED_BIT */,
    HierarchySelections_top /* IMPORTED_BIT */,
    _decode_HierarchySelections,
    _encode_HierarchySelections,
} from "../DirectoryAbstractService/HierarchySelections.ta";
export {
    SearchControlOptions,
    SearchControlOptions_checkOverspecified /* IMPORTED_BIT */,
    SearchControlOptions_dnAttribute /* IMPORTED_BIT */,
    SearchControlOptions_entryCount /* IMPORTED_BIT */,
    SearchControlOptions_includeAllAreas /* IMPORTED_BIT */,
    SearchControlOptions_matchedValuesOnly /* IMPORTED_BIT */,
    SearchControlOptions_matchOnResidualName /* IMPORTED_BIT */,
    SearchControlOptions_noSystemRelaxation /* IMPORTED_BIT */,
    SearchControlOptions_performExactly /* IMPORTED_BIT */,
    SearchControlOptions_searchAliases /* IMPORTED_BIT */,
    SearchControlOptions_searchFamily /* IMPORTED_BIT */,
    SearchControlOptions_separateFamilyMembers /* IMPORTED_BIT */,
    SearchControlOptions_useSubset /* IMPORTED_BIT */,
    _decode_SearchControlOptions,
    _encode_SearchControlOptions,
} from "../DirectoryAbstractService/SearchControlOptions.ta";
export {
    ServiceControlOptions,
    ServiceControlOptions_allowWriteableCopy /* IMPORTED_BIT */,
    ServiceControlOptions_chainingProhibited /* IMPORTED_BIT */,
    ServiceControlOptions_copyShallDo /* IMPORTED_BIT */,
    ServiceControlOptions_countFamily /* IMPORTED_BIT */,
    ServiceControlOptions_dontDereferenceAliases /* IMPORTED_BIT */,
    ServiceControlOptions_dontMatchFriends /* IMPORTED_BIT */,
    ServiceControlOptions_dontSelectFriends /* IMPORTED_BIT */,
    ServiceControlOptions_dontUseCopy /* IMPORTED_BIT */,
    ServiceControlOptions_localScope /* IMPORTED_BIT */,
    ServiceControlOptions_manageDSAIT /* IMPORTED_BIT */,
    ServiceControlOptions_noSubtypeMatch /* IMPORTED_BIT */,
    ServiceControlOptions_noSubtypeSelection /* IMPORTED_BIT */,
    ServiceControlOptions_partialNameResolution /* IMPORTED_BIT */,
    ServiceControlOptions_preferChaining /* IMPORTED_BIT */,
    ServiceControlOptions_subentries /* IMPORTED_BIT */,
    _decode_ServiceControlOptions,
    _encode_ServiceControlOptions,
} from "../DirectoryAbstractService/ServiceControlOptions.ta";

/* START_OF_SYMBOL_DEFINITION ControlOptions */
/**
 * @summary ControlOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlOptions ::= SEQUENCE {
 *   serviceControls   [0]  ServiceControlOptions DEFAULT {},
 *   searchOptions     [1]  SearchControlOptions  DEFAULT {searchAliases},
 *   hierarchyOptions  [2]  HierarchySelections   OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ControlOptions {
    constructor(
        /**
         * @summary `serviceControls`.
         * @public
         * @readonly
         */
        readonly serviceControls: OPTIONAL<ServiceControlOptions>,
        /**
         * @summary `searchOptions`.
         * @public
         * @readonly
         */
        readonly searchOptions: OPTIONAL<SearchControlOptions>,
        /**
         * @summary `hierarchyOptions`.
         * @public
         * @readonly
         */
        readonly hierarchyOptions: OPTIONAL<HierarchySelections>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ControlOptions
     * @description
     *
     * This takes an `object` and converts it to a `ControlOptions`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ControlOptions`.
     * @returns {ControlOptions}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ControlOptions]: ControlOptions[_K] }>
    ): ControlOptions {
        return new ControlOptions(
            _o.serviceControls,
            _o.searchOptions,
            _o.hierarchyOptions,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `serviceControls`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_serviceControls() {
        return new Uint8ClampedArray([]);
    }
    /**
     * @summary Getter that returns the default value for `searchOptions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_searchOptions() {
        return (() => {
            const _ret = new Uint8ClampedArray(
                Math.max(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)
            );
            _ret[SearchControlOptions_searchAliases] = TRUE_BIT;
            return _ret;
        })();
    }
}
/* END_OF_SYMBOL_DEFINITION ControlOptions */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ControlOptions */
/**
 * @summary The Leading Root Component Types of ControlOptions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ControlOptions: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "serviceControls",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "searchOptions",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "hierarchyOptions",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ControlOptions */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ControlOptions */
/**
 * @summary The Trailing Root Component Types of ControlOptions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ControlOptions: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ControlOptions */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ControlOptions */
/**
 * @summary The Extension Addition Component Types of ControlOptions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ControlOptions: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ControlOptions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlOptions */
let _cached_decoder_for_ControlOptions: $.ASN1Decoder<
    ControlOptions
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlOptions */

/* START_OF_SYMBOL_DEFINITION _decode_ControlOptions */
/**
 * @summary Decodes an ASN.1 element into a(n) ControlOptions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ControlOptions} The decoded data structure.
 */
export function _decode_ControlOptions(el: _Element) {
    if (!_cached_decoder_for_ControlOptions) {
        _cached_decoder_for_ControlOptions = function (
            el: _Element
        ): ControlOptions {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let serviceControls: OPTIONAL<ServiceControlOptions> =
                ControlOptions._default_value_for_serviceControls;
            let searchOptions: OPTIONAL<SearchControlOptions> =
                ControlOptions._default_value_for_searchOptions;
            let hierarchyOptions: OPTIONAL<HierarchySelections>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                serviceControls: (_el: _Element): void => {
                    serviceControls = $._decode_explicit<ServiceControlOptions>(
                        () => _decode_ServiceControlOptions
                    )(_el);
                },
                searchOptions: (_el: _Element): void => {
                    searchOptions = $._decode_explicit<SearchControlOptions>(
                        () => _decode_SearchControlOptions
                    )(_el);
                },
                hierarchyOptions: (_el: _Element): void => {
                    hierarchyOptions = $._decode_explicit<HierarchySelections>(
                        () => _decode_HierarchySelections
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ControlOptions,
                _extension_additions_list_spec_for_ControlOptions,
                _root_component_type_list_2_spec_for_ControlOptions,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ControlOptions /* SEQUENCE_CONSTRUCTOR_CALL */(
                serviceControls,
                searchOptions,
                hierarchyOptions,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ControlOptions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ControlOptions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlOptions */
let _cached_encoder_for_ControlOptions: $.ASN1Encoder<
    ControlOptions
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlOptions */

/* START_OF_SYMBOL_DEFINITION _encode_ControlOptions */
/**
 * @summary Encodes a(n) ControlOptions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlOptions, encoded as an ASN.1 Element.
 */
export function _encode_ControlOptions(
    value: ControlOptions,
    elGetter: $.ASN1Encoder<ControlOptions>
) {
    if (!_cached_encoder_for_ControlOptions) {
        _cached_encoder_for_ControlOptions = function (
            value: ControlOptions,
            elGetter: $.ASN1Encoder<ControlOptions>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            $.deepEq(
                                value.serviceControls,
                                ControlOptions._default_value_for_serviceControls
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_ServiceControlOptions,
                                      $.BER
                                  )(value.serviceControls, $.BER),
                            /* IF_DEFAULT */ value.searchOptions ===
                                undefined ||
                            $.deepEq(
                                value.searchOptions,
                                ControlOptions._default_value_for_searchOptions
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_SearchControlOptions,
                                      $.BER
                                  )(value.searchOptions, $.BER),
                            /* IF_ABSENT  */ value.hierarchyOptions ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_HierarchySelections,
                                      $.BER
                                  )(value.hierarchyOptions, $.BER),
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
    return _cached_encoder_for_ControlOptions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ControlOptions */

/* eslint-enable */
