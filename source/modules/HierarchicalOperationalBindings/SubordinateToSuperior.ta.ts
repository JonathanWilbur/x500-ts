/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    MasterAndShadowAccessPoints,
    _decode_MasterAndShadowAccessPoints,
    _encode_MasterAndShadowAccessPoints,
} from "../DistributedOperations/MasterAndShadowAccessPoints.ta";
import {
    SubentryInfo,
    _decode_SubentryInfo,
    _encode_SubentryInfo,
} from "../HierarchicalOperationalBindings/SubentryInfo.ta";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
export {
    MasterAndShadowAccessPoints,
    _decode_MasterAndShadowAccessPoints,
    _encode_MasterAndShadowAccessPoints,
} from "../DistributedOperations/MasterAndShadowAccessPoints.ta";
export {
    SubentryInfo,
    _decode_SubentryInfo,
    _encode_SubentryInfo,
} from "../HierarchicalOperationalBindings/SubentryInfo.ta";
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";

/* START_OF_SYMBOL_DEFINITION SubordinateToSuperior */
/**
 * @summary SubordinateToSuperior
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubordinateToSuperior ::= SEQUENCE {
 *   accessPoints  [0]  MasterAndShadowAccessPoints OPTIONAL,
 *   alias         [1]  BOOLEAN DEFAULT FALSE,
 *   entryInfo     [2]  SET SIZE (1..MAX) OF Attribute{{SupportedAttributes}} OPTIONAL,
 *   subentries    [3]  SET SIZE (1..MAX) OF SubentryInfo OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class SubordinateToSuperior {
    constructor(
        /**
         * @summary `accessPoints`.
         * @public
         * @readonly
         */
        readonly accessPoints: OPTIONAL<MasterAndShadowAccessPoints>,
        /**
         * @summary `alias`.
         * @public
         * @readonly
         */
        readonly alias: OPTIONAL<BOOLEAN>,
        /**
         * @summary `entryInfo`.
         * @public
         * @readonly
         */
        readonly entryInfo: OPTIONAL<Attribute[]>,
        /**
         * @summary `subentries`.
         * @public
         * @readonly
         */
        readonly subentries: OPTIONAL<SubentryInfo[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SubordinateToSuperior
     * @description
     *
     * This takes an `object` and converts it to a `SubordinateToSuperior`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubordinateToSuperior`.
     * @returns {SubordinateToSuperior}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SubordinateToSuperior]: SubordinateToSuperior[_K] }
        >
    ): SubordinateToSuperior {
        return new SubordinateToSuperior(
            _o.accessPoints,
            _o.alias,
            _o.entryInfo,
            _o.subentries,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `alias`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_alias() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION SubordinateToSuperior */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SubordinateToSuperior */
/**
 * @summary The Leading Root Component Types of SubordinateToSuperior
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubordinateToSuperior: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "accessPoints",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "alias",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "entryInfo",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subentries",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SubordinateToSuperior */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SubordinateToSuperior */
/**
 * @summary The Trailing Root Component Types of SubordinateToSuperior
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubordinateToSuperior: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SubordinateToSuperior */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SubordinateToSuperior */
/**
 * @summary The Extension Addition Component Types of SubordinateToSuperior
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubordinateToSuperior: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SubordinateToSuperior */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubordinateToSuperior */
let _cached_decoder_for_SubordinateToSuperior: $.ASN1Decoder<SubordinateToSuperior> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubordinateToSuperior */

/* START_OF_SYMBOL_DEFINITION _decode_SubordinateToSuperior */
/**
 * @summary Decodes an ASN.1 element into a(n) SubordinateToSuperior
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubordinateToSuperior} The decoded data structure.
 */
export function _decode_SubordinateToSuperior(el: _Element) {
    if (!_cached_decoder_for_SubordinateToSuperior) {
        _cached_decoder_for_SubordinateToSuperior = function (
            el: _Element
        ): SubordinateToSuperior {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let accessPoints: OPTIONAL<MasterAndShadowAccessPoints>;
            let alias: OPTIONAL<BOOLEAN> =
                SubordinateToSuperior._default_value_for_alias;
            let entryInfo: OPTIONAL<Attribute[]>;
            let subentries: OPTIONAL<SubentryInfo[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                accessPoints: (_el: _Element): void => {
                    accessPoints = $._decode_explicit<MasterAndShadowAccessPoints>(
                        () => _decode_MasterAndShadowAccessPoints
                    )(_el);
                },
                alias: (_el: _Element): void => {
                    alias = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(
                        _el
                    );
                },
                entryInfo: (_el: _Element): void => {
                    entryInfo = $._decode_explicit<Attribute[]>(() =>
                        $._decodeSetOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
                subentries: (_el: _Element): void => {
                    subentries = $._decode_explicit<SubentryInfo[]>(() =>
                        $._decodeSetOf<SubentryInfo>(() => _decode_SubentryInfo)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SubordinateToSuperior,
                _extension_additions_list_spec_for_SubordinateToSuperior,
                _root_component_type_list_2_spec_for_SubordinateToSuperior,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SubordinateToSuperior(
                /* SEQUENCE_CONSTRUCTOR_CALL */ accessPoints,
                alias,
                entryInfo,
                subentries,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SubordinateToSuperior(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubordinateToSuperior */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubordinateToSuperior */
let _cached_encoder_for_SubordinateToSuperior: $.ASN1Encoder<SubordinateToSuperior> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubordinateToSuperior */

/* START_OF_SYMBOL_DEFINITION _encode_SubordinateToSuperior */
/**
 * @summary Encodes a(n) SubordinateToSuperior into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubordinateToSuperior, encoded as an ASN.1 Element.
 */
export function _encode_SubordinateToSuperior(
    value: SubordinateToSuperior,
    elGetter: $.ASN1Encoder<SubordinateToSuperior>
) {
    if (!_cached_encoder_for_SubordinateToSuperior) {
        _cached_encoder_for_SubordinateToSuperior = function (
            value: SubordinateToSuperior,
            elGetter: $.ASN1Encoder<SubordinateToSuperior>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.accessPoints === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_MasterAndShadowAccessPoints,
                                      $.BER
                                  )(value.accessPoints, $.BER),
                            /* IF_DEFAULT */ value.alias === undefined ||
                            $.deepEq(
                                value.alias,
                                SubordinateToSuperior._default_value_for_alias
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.alias, $.BER),
                            /* IF_ABSENT  */ value.entryInfo === undefined
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
                                  )(value.entryInfo, $.BER),
                            /* IF_ABSENT  */ value.subentries === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSetOf<SubentryInfo>(
                                              () => _encode_SubentryInfo,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.subentries, $.BER),
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
    return _cached_encoder_for_SubordinateToSuperior(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubordinateToSuperior */

/* eslint-enable */
