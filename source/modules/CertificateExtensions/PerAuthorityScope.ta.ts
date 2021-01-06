/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    BaseRevocationInfo,
    _decode_BaseRevocationInfo,
    _encode_BaseRevocationInfo,
} from "../CertificateExtensions/BaseRevocationInfo.ta";
import {
    DistributionPointName,
    _decode_DistributionPointName,
    _encode_DistributionPointName,
} from "../CertificateExtensions/DistributionPointName.ta";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta";
import {
    NumberRange,
    _decode_NumberRange,
    _encode_NumberRange,
} from "../CertificateExtensions/NumberRange.ta";
import {
    OnlyCertificateTypes,
    _decode_OnlyCertificateTypes,
    _encode_OnlyCertificateTypes,
} from "../CertificateExtensions/OnlyCertificateTypes.ta";
import {
    ReasonFlags,
    _decode_ReasonFlags,
    _encode_ReasonFlags,
} from "../CertificateExtensions/ReasonFlags.ta";
export {
    BaseRevocationInfo,
    _decode_BaseRevocationInfo,
    _encode_BaseRevocationInfo,
} from "../CertificateExtensions/BaseRevocationInfo.ta";
export {
    DistributionPointName,
    _decode_DistributionPointName,
    _encode_DistributionPointName,
} from "../CertificateExtensions/DistributionPointName.ta";
export {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";
export {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta";
export {
    NumberRange,
    _decode_NumberRange,
    _encode_NumberRange,
} from "../CertificateExtensions/NumberRange.ta";
export {
    attribute /* IMPORTED_SHORT_NAMED_BIT */,
    authority /* IMPORTED_SHORT_NAMED_BIT */,
    OnlyCertificateTypes,
    OnlyCertificateTypes_attribute /* IMPORTED_LONG_NAMED_BIT */,
    OnlyCertificateTypes_authority /* IMPORTED_LONG_NAMED_BIT */,
    OnlyCertificateTypes_user /* IMPORTED_LONG_NAMED_BIT */,
    user /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_OnlyCertificateTypes,
    _encode_OnlyCertificateTypes,
} from "../CertificateExtensions/OnlyCertificateTypes.ta";
export {
    aACompromise /* IMPORTED_SHORT_NAMED_BIT */,
    affiliationChanged /* IMPORTED_SHORT_NAMED_BIT */,
    cACompromise /* IMPORTED_SHORT_NAMED_BIT */,
    certificateHold /* IMPORTED_SHORT_NAMED_BIT */,
    cessationOfOperation /* IMPORTED_SHORT_NAMED_BIT */,
    keyCompromise /* IMPORTED_SHORT_NAMED_BIT */,
    privilegeWithdrawn /* IMPORTED_SHORT_NAMED_BIT */,
    ReasonFlags,
    ReasonFlags_aACompromise /* IMPORTED_LONG_NAMED_BIT */,
    ReasonFlags_affiliationChanged /* IMPORTED_LONG_NAMED_BIT */,
    ReasonFlags_cACompromise /* IMPORTED_LONG_NAMED_BIT */,
    ReasonFlags_certificateHold /* IMPORTED_LONG_NAMED_BIT */,
    ReasonFlags_cessationOfOperation /* IMPORTED_LONG_NAMED_BIT */,
    ReasonFlags_keyCompromise /* IMPORTED_LONG_NAMED_BIT */,
    ReasonFlags_privilegeWithdrawn /* IMPORTED_LONG_NAMED_BIT */,
    ReasonFlags_superseded /* IMPORTED_LONG_NAMED_BIT */,
    ReasonFlags_unused /* IMPORTED_LONG_NAMED_BIT */,
    ReasonFlags_weakAlgorithmOrKey /* IMPORTED_LONG_NAMED_BIT */,
    superseded /* IMPORTED_SHORT_NAMED_BIT */,
    unused /* IMPORTED_SHORT_NAMED_BIT */,
    weakAlgorithmOrKey /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_ReasonFlags,
    _encode_ReasonFlags,
} from "../CertificateExtensions/ReasonFlags.ta";

/* START_OF_SYMBOL_DEFINITION PerAuthorityScope */
/**
 * @summary PerAuthorityScope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerAuthorityScope ::= SEQUENCE {
 *   authorityName       [0]  GeneralName OPTIONAL,
 *   distributionPoint   [1]  DistributionPointName OPTIONAL,
 *   onlyContains        [2]  OnlyCertificateTypes OPTIONAL,
 *   onlySomeReasons     [4]  ReasonFlags OPTIONAL,
 *   serialNumberRange   [5]  NumberRange OPTIONAL,
 *   subjectKeyIdRange   [6]  NumberRange OPTIONAL,
 *   nameSubtrees        [7]  GeneralNames OPTIONAL,
 *   baseRevocationInfo  [9]  BaseRevocationInfo OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class PerAuthorityScope {
    constructor(
        /**
         * @summary `authorityName`.
         * @public
         * @readonly
         */
        readonly authorityName: OPTIONAL<GeneralName>,
        /**
         * @summary `distributionPoint`.
         * @public
         * @readonly
         */
        readonly distributionPoint: OPTIONAL<DistributionPointName>,
        /**
         * @summary `onlyContains`.
         * @public
         * @readonly
         */
        readonly onlyContains: OPTIONAL<OnlyCertificateTypes>,
        /**
         * @summary `onlySomeReasons`.
         * @public
         * @readonly
         */
        readonly onlySomeReasons: OPTIONAL<ReasonFlags>,
        /**
         * @summary `serialNumberRange`.
         * @public
         * @readonly
         */
        readonly serialNumberRange: OPTIONAL<NumberRange>,
        /**
         * @summary `subjectKeyIdRange`.
         * @public
         * @readonly
         */
        readonly subjectKeyIdRange: OPTIONAL<NumberRange>,
        /**
         * @summary `nameSubtrees`.
         * @public
         * @readonly
         */
        readonly nameSubtrees: OPTIONAL<GeneralNames>,
        /**
         * @summary `baseRevocationInfo`.
         * @public
         * @readonly
         */
        readonly baseRevocationInfo: OPTIONAL<BaseRevocationInfo>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PerAuthorityScope
     * @description
     *
     * This takes an `object` and converts it to a `PerAuthorityScope`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerAuthorityScope`.
     * @returns {PerAuthorityScope}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof PerAuthorityScope]: PerAuthorityScope[_K] }>
    ): PerAuthorityScope {
        return new PerAuthorityScope(
            _o.authorityName,
            _o.distributionPoint,
            _o.onlyContains,
            _o.onlySomeReasons,
            _o.serialNumberRange,
            _o.subjectKeyIdRange,
            _o.nameSubtrees,
            _o.baseRevocationInfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PerAuthorityScope */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PerAuthorityScope */
/**
 * @summary The Leading Root Component Types of PerAuthorityScope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PerAuthorityScope: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "authorityName",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "distributionPoint",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "onlyContains",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "onlySomeReasons",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "serialNumberRange",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subjectKeyIdRange",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nameSubtrees",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "baseRevocationInfo",
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PerAuthorityScope */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PerAuthorityScope */
/**
 * @summary The Trailing Root Component Types of PerAuthorityScope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerAuthorityScope: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PerAuthorityScope */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PerAuthorityScope */
/**
 * @summary The Extension Addition Component Types of PerAuthorityScope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerAuthorityScope: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PerAuthorityScope */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PerAuthorityScope */
let _cached_decoder_for_PerAuthorityScope: $.ASN1Decoder<PerAuthorityScope> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PerAuthorityScope */

/* START_OF_SYMBOL_DEFINITION _decode_PerAuthorityScope */
/**
 * @summary Decodes an ASN.1 element into a(n) PerAuthorityScope
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerAuthorityScope} The decoded data structure.
 */
export function _decode_PerAuthorityScope(el: _Element) {
    if (!_cached_decoder_for_PerAuthorityScope) {
        _cached_decoder_for_PerAuthorityScope = function (
            el: _Element
        ): PerAuthorityScope {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let authorityName: OPTIONAL<GeneralName>;
            let distributionPoint: OPTIONAL<DistributionPointName>;
            let onlyContains: OPTIONAL<OnlyCertificateTypes>;
            let onlySomeReasons: OPTIONAL<ReasonFlags>;
            let serialNumberRange: OPTIONAL<NumberRange>;
            let subjectKeyIdRange: OPTIONAL<NumberRange>;
            let nameSubtrees: OPTIONAL<GeneralNames>;
            let baseRevocationInfo: OPTIONAL<BaseRevocationInfo>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                authorityName: (_el: _Element): void => {
                    authorityName = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                distributionPoint: (_el: _Element): void => {
                    distributionPoint = $._decode_explicit<DistributionPointName>(
                        () => _decode_DistributionPointName
                    )(_el);
                },
                onlyContains: (_el: _Element): void => {
                    onlyContains = $._decode_implicit<OnlyCertificateTypes>(
                        () => _decode_OnlyCertificateTypes
                    )(_el);
                },
                onlySomeReasons: (_el: _Element): void => {
                    onlySomeReasons = $._decode_implicit<ReasonFlags>(
                        () => _decode_ReasonFlags
                    )(_el);
                },
                serialNumberRange: (_el: _Element): void => {
                    serialNumberRange = $._decode_implicit<NumberRange>(
                        () => _decode_NumberRange
                    )(_el);
                },
                subjectKeyIdRange: (_el: _Element): void => {
                    subjectKeyIdRange = $._decode_implicit<NumberRange>(
                        () => _decode_NumberRange
                    )(_el);
                },
                nameSubtrees: (_el: _Element): void => {
                    nameSubtrees = $._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    )(_el);
                },
                baseRevocationInfo: (_el: _Element): void => {
                    baseRevocationInfo = $._decode_implicit<BaseRevocationInfo>(
                        () => _decode_BaseRevocationInfo
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PerAuthorityScope,
                _extension_additions_list_spec_for_PerAuthorityScope,
                _root_component_type_list_2_spec_for_PerAuthorityScope,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PerAuthorityScope(
                /* SEQUENCE_CONSTRUCTOR_CALL */ authorityName,
                distributionPoint,
                onlyContains,
                onlySomeReasons,
                serialNumberRange,
                subjectKeyIdRange,
                nameSubtrees,
                baseRevocationInfo,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PerAuthorityScope(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PerAuthorityScope */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PerAuthorityScope */
let _cached_encoder_for_PerAuthorityScope: $.ASN1Encoder<PerAuthorityScope> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PerAuthorityScope */

/* START_OF_SYMBOL_DEFINITION _encode_PerAuthorityScope */
/**
 * @summary Encodes a(n) PerAuthorityScope into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerAuthorityScope, encoded as an ASN.1 Element.
 */
export function _encode_PerAuthorityScope(
    value: PerAuthorityScope,
    elGetter: $.ASN1Encoder<PerAuthorityScope>
) {
    if (!_cached_encoder_for_PerAuthorityScope) {
        _cached_encoder_for_PerAuthorityScope = function (
            value: PerAuthorityScope,
            elGetter: $.ASN1Encoder<PerAuthorityScope>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.authorityName === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      $.BER
                                  )(value.authorityName, $.BER),
                            /* IF_ABSENT  */ value.distributionPoint ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_DistributionPointName,
                                      $.BER
                                  )(value.distributionPoint, $.BER),
                            /* IF_ABSENT  */ value.onlyContains === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_OnlyCertificateTypes,
                                      $.BER
                                  )(value.onlyContains, $.BER),
                            /* IF_ABSENT  */ value.onlySomeReasons === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_ReasonFlags,
                                      $.BER
                                  )(value.onlySomeReasons, $.BER),
                            /* IF_ABSENT  */ value.serialNumberRange ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      5,
                                      () => _encode_NumberRange,
                                      $.BER
                                  )(value.serialNumberRange, $.BER),
                            /* IF_ABSENT  */ value.subjectKeyIdRange ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      6,
                                      () => _encode_NumberRange,
                                      $.BER
                                  )(value.subjectKeyIdRange, $.BER),
                            /* IF_ABSENT  */ value.nameSubtrees === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_GeneralNames,
                                      $.BER
                                  )(value.nameSubtrees, $.BER),
                            /* IF_ABSENT  */ value.baseRevocationInfo ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      9,
                                      () => _encode_BaseRevocationInfo,
                                      $.BER
                                  )(value.baseRevocationInfo, $.BER),
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
    return _cached_encoder_for_PerAuthorityScope(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PerAuthorityScope */

/* eslint-enable */
