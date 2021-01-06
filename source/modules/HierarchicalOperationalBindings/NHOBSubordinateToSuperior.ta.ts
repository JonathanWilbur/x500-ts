/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
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

/* START_OF_SYMBOL_DEFINITION NHOBSubordinateToSuperior */
/**
 * @summary NHOBSubordinateToSuperior
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NHOBSubordinateToSuperior ::= SEQUENCE {
 *   accessPoints  [0]  MasterAndShadowAccessPoints OPTIONAL,
 *   subentries    [3]  SET SIZE (1..MAX) OF SubentryInfo OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class NHOBSubordinateToSuperior {
    constructor(
        /**
         * @summary `accessPoints`.
         * @public
         * @readonly
         */
        readonly accessPoints: OPTIONAL<MasterAndShadowAccessPoints>,
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
     * @summary Restructures an object into a NHOBSubordinateToSuperior
     * @description
     *
     * This takes an `object` and converts it to a `NHOBSubordinateToSuperior`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NHOBSubordinateToSuperior`.
     * @returns {NHOBSubordinateToSuperior}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof NHOBSubordinateToSuperior]: NHOBSubordinateToSuperior[_K];
            }
        >
    ): NHOBSubordinateToSuperior {
        return new NHOBSubordinateToSuperior(
            _o.accessPoints,
            _o.subentries,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION NHOBSubordinateToSuperior */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NHOBSubordinateToSuperior */
/**
 * @summary The Leading Root Component Types of NHOBSubordinateToSuperior
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NHOBSubordinateToSuperior: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "accessPoints",
        true,
        $.hasTag(_TagClass.context, 0),
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NHOBSubordinateToSuperior */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NHOBSubordinateToSuperior */
/**
 * @summary The Trailing Root Component Types of NHOBSubordinateToSuperior
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NHOBSubordinateToSuperior: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NHOBSubordinateToSuperior */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NHOBSubordinateToSuperior */
/**
 * @summary The Extension Addition Component Types of NHOBSubordinateToSuperior
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NHOBSubordinateToSuperior: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NHOBSubordinateToSuperior */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NHOBSubordinateToSuperior */
let _cached_decoder_for_NHOBSubordinateToSuperior: $.ASN1Decoder<NHOBSubordinateToSuperior> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NHOBSubordinateToSuperior */

/* START_OF_SYMBOL_DEFINITION _decode_NHOBSubordinateToSuperior */
/**
 * @summary Decodes an ASN.1 element into a(n) NHOBSubordinateToSuperior
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NHOBSubordinateToSuperior} The decoded data structure.
 */
export function _decode_NHOBSubordinateToSuperior(el: _Element) {
    if (!_cached_decoder_for_NHOBSubordinateToSuperior) {
        _cached_decoder_for_NHOBSubordinateToSuperior = function (
            el: _Element
        ): NHOBSubordinateToSuperior {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let accessPoints: OPTIONAL<MasterAndShadowAccessPoints>;
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
                _root_component_type_list_1_spec_for_NHOBSubordinateToSuperior,
                _extension_additions_list_spec_for_NHOBSubordinateToSuperior,
                _root_component_type_list_2_spec_for_NHOBSubordinateToSuperior,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new NHOBSubordinateToSuperior(
                /* SEQUENCE_CONSTRUCTOR_CALL */ accessPoints,
                subentries,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_NHOBSubordinateToSuperior(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NHOBSubordinateToSuperior */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NHOBSubordinateToSuperior */
let _cached_encoder_for_NHOBSubordinateToSuperior: $.ASN1Encoder<NHOBSubordinateToSuperior> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NHOBSubordinateToSuperior */

/* START_OF_SYMBOL_DEFINITION _encode_NHOBSubordinateToSuperior */
/**
 * @summary Encodes a(n) NHOBSubordinateToSuperior into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NHOBSubordinateToSuperior, encoded as an ASN.1 Element.
 */
export function _encode_NHOBSubordinateToSuperior(
    value: NHOBSubordinateToSuperior,
    elGetter: $.ASN1Encoder<NHOBSubordinateToSuperior>
) {
    if (!_cached_encoder_for_NHOBSubordinateToSuperior) {
        _cached_encoder_for_NHOBSubordinateToSuperior = function (
            value: NHOBSubordinateToSuperior,
            elGetter: $.ASN1Encoder<NHOBSubordinateToSuperior>
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
    return _cached_encoder_for_NHOBSubordinateToSuperior(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NHOBSubordinateToSuperior */

/* eslint-enable */
