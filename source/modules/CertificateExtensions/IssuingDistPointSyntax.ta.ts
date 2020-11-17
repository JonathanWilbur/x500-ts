/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DistributionPointName,
    _decode_DistributionPointName,
    _encode_DistributionPointName,
} from "../CertificateExtensions/DistributionPointName.ta";
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

/* START_OF_SYMBOL_DEFINITION IssuingDistPointSyntax */
/**
 * @summary IssuingDistPointSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IssuingDistPointSyntax ::= SEQUENCE {
 *   -- If onlyContainsUserPublicKeyCerts and onlyContainsCACerts are both FALSE,
 *   -- the CRL covers both public-key certificate types
 *   distributionPoint               [0]  DistributionPointName OPTIONAL,
 *   onlyContainsUserPublicKeyCerts  [1]  BOOLEAN DEFAULT FALSE,
 *   onlyContainsCACerts             [2]  BOOLEAN DEFAULT FALSE,
 *   onlySomeReasons                 [3]  ReasonFlags OPTIONAL,
 *   indirectCRL                     [4]  BOOLEAN DEFAULT FALSE,
 *   onlyContainsAttributeCerts      [5]  BOOLEAN OPTIONAL, -- Use is strongly deprecated
 *   ... }
 * ```
 *
 * @class
 */
export class IssuingDistPointSyntax {
    constructor(
        /**
         * @summary `distributionPoint`.
         * @public
         * @readonly
         */
        readonly distributionPoint: OPTIONAL<DistributionPointName>,
        /**
         * @summary `onlyContainsUserPublicKeyCerts`.
         * @public
         * @readonly
         */
        readonly onlyContainsUserPublicKeyCerts: OPTIONAL<BOOLEAN>,
        /**
         * @summary `onlyContainsCACerts`.
         * @public
         * @readonly
         */
        readonly onlyContainsCACerts: OPTIONAL<BOOLEAN>,
        /**
         * @summary `onlySomeReasons`.
         * @public
         * @readonly
         */
        readonly onlySomeReasons: OPTIONAL<ReasonFlags>,
        /**
         * @summary `indirectCRL`.
         * @public
         * @readonly
         */
        readonly indirectCRL: OPTIONAL<BOOLEAN>,
        /**
         * @summary `onlyContainsAttributeCerts`.
         * @public
         * @readonly
         */
        readonly onlyContainsAttributeCerts: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IssuingDistPointSyntax
     * @description
     *
     * This takes an `object` and converts it to a `IssuingDistPointSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IssuingDistPointSyntax`.
     * @returns {IssuingDistPointSyntax}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof IssuingDistPointSyntax]: IssuingDistPointSyntax[_K] }
        >
    ): IssuingDistPointSyntax {
        return new IssuingDistPointSyntax(
            _o.distributionPoint,
            _o.onlyContainsUserPublicKeyCerts,
            _o.onlyContainsCACerts,
            _o.onlySomeReasons,
            _o.indirectCRL,
            _o.onlyContainsAttributeCerts,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `onlyContainsUserPublicKeyCerts`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_onlyContainsUserPublicKeyCerts() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `onlyContainsCACerts`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_onlyContainsCACerts() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `indirectCRL`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_indirectCRL() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION IssuingDistPointSyntax */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IssuingDistPointSyntax */
/**
 * @summary The Leading Root Component Types of IssuingDistPointSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IssuingDistPointSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "distributionPoint",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "onlyContainsUserPublicKeyCerts",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "onlyContainsCACerts",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "onlySomeReasons",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "indirectCRL",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "onlyContainsAttributeCerts",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IssuingDistPointSyntax */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IssuingDistPointSyntax */
/**
 * @summary The Trailing Root Component Types of IssuingDistPointSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IssuingDistPointSyntax: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IssuingDistPointSyntax */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IssuingDistPointSyntax */
/**
 * @summary The Extension Addition Component Types of IssuingDistPointSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IssuingDistPointSyntax: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IssuingDistPointSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IssuingDistPointSyntax */
let _cached_decoder_for_IssuingDistPointSyntax: $.ASN1Decoder<
    IssuingDistPointSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IssuingDistPointSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_IssuingDistPointSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) IssuingDistPointSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IssuingDistPointSyntax} The decoded data structure.
 */
export function _decode_IssuingDistPointSyntax(el: _Element) {
    if (!_cached_decoder_for_IssuingDistPointSyntax) {
        _cached_decoder_for_IssuingDistPointSyntax = function (
            el: _Element
        ): IssuingDistPointSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let distributionPoint: OPTIONAL<DistributionPointName>;
            let onlyContainsUserPublicKeyCerts: OPTIONAL<BOOLEAN> =
                IssuingDistPointSyntax._default_value_for_onlyContainsUserPublicKeyCerts;
            let onlyContainsCACerts: OPTIONAL<BOOLEAN> =
                IssuingDistPointSyntax._default_value_for_onlyContainsCACerts;
            let onlySomeReasons: OPTIONAL<ReasonFlags>;
            let indirectCRL: OPTIONAL<BOOLEAN> =
                IssuingDistPointSyntax._default_value_for_indirectCRL;
            let onlyContainsAttributeCerts: OPTIONAL<BOOLEAN>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                distributionPoint: (_el: _Element): void => {
                    distributionPoint = $._decode_implicit<
                        DistributionPointName
                    >(() => _decode_DistributionPointName)(_el);
                },
                onlyContainsUserPublicKeyCerts: (_el: _Element): void => {
                    onlyContainsUserPublicKeyCerts = $._decode_implicit<
                        BOOLEAN
                    >(() => $._decodeBoolean)(_el);
                },
                onlyContainsCACerts: (_el: _Element): void => {
                    onlyContainsCACerts = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                onlySomeReasons: (_el: _Element): void => {
                    onlySomeReasons = $._decode_implicit<ReasonFlags>(
                        () => _decode_ReasonFlags
                    )(_el);
                },
                indirectCRL: (_el: _Element): void => {
                    indirectCRL = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                onlyContainsAttributeCerts: (_el: _Element): void => {
                    onlyContainsAttributeCerts = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IssuingDistPointSyntax,
                _extension_additions_list_spec_for_IssuingDistPointSyntax,
                _root_component_type_list_2_spec_for_IssuingDistPointSyntax,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new IssuingDistPointSyntax /* SEQUENCE_CONSTRUCTOR_CALL */(
                distributionPoint,
                onlyContainsUserPublicKeyCerts,
                onlyContainsCACerts,
                onlySomeReasons,
                indirectCRL,
                onlyContainsAttributeCerts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_IssuingDistPointSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IssuingDistPointSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IssuingDistPointSyntax */
let _cached_encoder_for_IssuingDistPointSyntax: $.ASN1Encoder<
    IssuingDistPointSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IssuingDistPointSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_IssuingDistPointSyntax */
/**
 * @summary Encodes a(n) IssuingDistPointSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IssuingDistPointSyntax, encoded as an ASN.1 Element.
 */
export function _encode_IssuingDistPointSyntax(
    value: IssuingDistPointSyntax,
    elGetter: $.ASN1Encoder<IssuingDistPointSyntax>
) {
    if (!_cached_encoder_for_IssuingDistPointSyntax) {
        _cached_encoder_for_IssuingDistPointSyntax = function (
            value: IssuingDistPointSyntax,
            elGetter: $.ASN1Encoder<IssuingDistPointSyntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.distributionPoint ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_DistributionPointName,
                                      $.BER
                                  )(value.distributionPoint, $.BER),
                            /* IF_DEFAULT */ value.onlyContainsUserPublicKeyCerts ===
                                undefined ||
                            $.deepEq(
                                value.onlyContainsUserPublicKeyCerts,
                                IssuingDistPointSyntax._default_value_for_onlyContainsUserPublicKeyCerts
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(
                                      value.onlyContainsUserPublicKeyCerts,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.onlyContainsCACerts ===
                                undefined ||
                            $.deepEq(
                                value.onlyContainsCACerts,
                                IssuingDistPointSyntax._default_value_for_onlyContainsCACerts
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.onlyContainsCACerts, $.BER),
                            /* IF_ABSENT  */ value.onlySomeReasons === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_ReasonFlags,
                                      $.BER
                                  )(value.onlySomeReasons, $.BER),
                            /* IF_DEFAULT */ value.indirectCRL === undefined ||
                            $.deepEq(
                                value.indirectCRL,
                                IssuingDistPointSyntax._default_value_for_indirectCRL
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.indirectCRL, $.BER),
                            /* IF_ABSENT  */ value.onlyContainsAttributeCerts ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      5,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.onlyContainsAttributeCerts, $.BER),
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
    return _cached_encoder_for_IssuingDistPointSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IssuingDistPointSyntax */

/* eslint-enable */
