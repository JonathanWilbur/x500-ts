/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DistributionPointName,
    _decode_DistributionPointName,
    _encode_DistributionPointName,
} from "../CertificateExtensions/DistributionPointName.ta";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta";
import {
    ReasonFlags,
    _decode_ReasonFlags,
    _encode_ReasonFlags,
} from "../CertificateExtensions/ReasonFlags.ta";
export {
    DistributionPointName,
    _decode_DistributionPointName,
    _encode_DistributionPointName,
} from "../CertificateExtensions/DistributionPointName.ta";
export {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta";
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

/* START_OF_SYMBOL_DEFINITION DistributionPoint */
/**
 * @summary DistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DistributionPoint ::= SEQUENCE {
 *   distributionPoint  [0]  DistributionPointName OPTIONAL,
 *   reasons            [1]  ReasonFlags OPTIONAL,
 *   cRLIssuer          [2]  GeneralNames OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class DistributionPoint {
    constructor(
        /**
         * @summary `distributionPoint`.
         * @public
         * @readonly
         */
        readonly distributionPoint: OPTIONAL<DistributionPointName>,
        /**
         * @summary `reasons`.
         * @public
         * @readonly
         */
        readonly reasons: OPTIONAL<ReasonFlags>,
        /**
         * @summary `cRLIssuer`.
         * @public
         * @readonly
         */
        readonly cRLIssuer: OPTIONAL<GeneralNames>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DistributionPoint
     * @description
     *
     * This takes an `object` and converts it to a `DistributionPoint`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DistributionPoint`.
     * @returns {DistributionPoint}
     */
    public static _from_object(
        _o: { [_K in keyof DistributionPoint]: DistributionPoint[_K] }
    ): DistributionPoint {
        return new DistributionPoint(
            _o.distributionPoint,
            _o.reasons,
            _o.cRLIssuer,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION DistributionPoint */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DistributionPoint */
/**
 * @summary The Leading Root Component Types of DistributionPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DistributionPoint: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "distributionPoint",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "reasons",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "cRLIssuer",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DistributionPoint */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DistributionPoint */
/**
 * @summary The Trailing Root Component Types of DistributionPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DistributionPoint: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DistributionPoint */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DistributionPoint */
/**
 * @summary The Extension Addition Component Types of DistributionPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DistributionPoint: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DistributionPoint */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DistributionPoint */
let _cached_decoder_for_DistributionPoint: $.ASN1Decoder<DistributionPoint> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DistributionPoint */

/* START_OF_SYMBOL_DEFINITION _decode_DistributionPoint */
/**
 * @summary Decodes an ASN.1 element into a(n) DistributionPoint
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DistributionPoint} The decoded data structure.
 */
export function _decode_DistributionPoint(el: _Element) {
    if (!_cached_decoder_for_DistributionPoint) {
        _cached_decoder_for_DistributionPoint = function (
            el: _Element
        ): DistributionPoint {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let distributionPoint: OPTIONAL<DistributionPointName>;
            let reasons: OPTIONAL<ReasonFlags>;
            let cRLIssuer: OPTIONAL<GeneralNames>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                distributionPoint: (_el: _Element): void => {
                    distributionPoint = $._decode_explicit<DistributionPointName>(
                        () => _decode_DistributionPointName
                    )(_el);
                },
                reasons: (_el: _Element): void => {
                    reasons = $._decode_implicit<ReasonFlags>(
                        () => _decode_ReasonFlags
                    )(_el);
                },
                cRLIssuer: (_el: _Element): void => {
                    cRLIssuer = $._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DistributionPoint,
                _extension_additions_list_spec_for_DistributionPoint,
                _root_component_type_list_2_spec_for_DistributionPoint,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DistributionPoint(
                /* SEQUENCE_CONSTRUCTOR_CALL */ distributionPoint,
                reasons,
                cRLIssuer,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DistributionPoint(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DistributionPoint */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DistributionPoint */
let _cached_encoder_for_DistributionPoint: $.ASN1Encoder<DistributionPoint> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DistributionPoint */

/* START_OF_SYMBOL_DEFINITION _encode_DistributionPoint */
/**
 * @summary Encodes a(n) DistributionPoint into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistributionPoint, encoded as an ASN.1 Element.
 */
export function _encode_DistributionPoint(
    value: DistributionPoint,
    elGetter: $.ASN1Encoder<DistributionPoint>
) {
    if (!_cached_encoder_for_DistributionPoint) {
        _cached_encoder_for_DistributionPoint = function (
            value: DistributionPoint,
            elGetter: $.ASN1Encoder<DistributionPoint>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.distributionPoint ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_DistributionPointName,
                                      $.BER
                                  )(value.distributionPoint, $.BER),
                            /* IF_ABSENT  */ value.reasons === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_ReasonFlags,
                                      $.BER
                                  )(value.reasons, $.BER),
                            /* IF_ABSENT  */ value.cRLIssuer === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_GeneralNames,
                                      $.BER
                                  )(value.cRLIssuer, $.BER),
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
    return _cached_encoder_for_DistributionPoint(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DistributionPoint */

/* eslint-enable */
