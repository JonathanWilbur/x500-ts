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

/* START_OF_SYMBOL_DEFINITION AAIssuingDistPointSyntax */
/**
 * @summary AAIssuingDistPointSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AAIssuingDistPointSyntax ::= SEQUENCE {
 *   distributionPoint           [0]  DistributionPointName OPTIONAL,
 *   onlySomeReasons             [1]  ReasonFlags OPTIONAL,
 *   indirectCRL                 [2]  BOOLEAN DEFAULT FALSE,
 *   containsUserAttributeCerts  [3]  BOOLEAN DEFAULT TRUE,
 *   containsAACerts             [4]  BOOLEAN DEFAULT TRUE,
 *   containsSOAPublicKeyCerts   [5]  BOOLEAN DEFAULT TRUE,
 *   ... }
 * ```
 *
 * @class
 */
export class AAIssuingDistPointSyntax {
    constructor(
        /**
         * @summary `distributionPoint`.
         * @public
         * @readonly
         */
        readonly distributionPoint: OPTIONAL<DistributionPointName>,
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
         * @summary `containsUserAttributeCerts`.
         * @public
         * @readonly
         */
        readonly containsUserAttributeCerts: OPTIONAL<BOOLEAN>,
        /**
         * @summary `containsAACerts`.
         * @public
         * @readonly
         */
        readonly containsAACerts: OPTIONAL<BOOLEAN>,
        /**
         * @summary `containsSOAPublicKeyCerts`.
         * @public
         * @readonly
         */
        readonly containsSOAPublicKeyCerts: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AAIssuingDistPointSyntax
     * @description
     *
     * This takes an `object` and converts it to a `AAIssuingDistPointSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AAIssuingDistPointSyntax`.
     * @returns {AAIssuingDistPointSyntax}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AAIssuingDistPointSyntax]: AAIssuingDistPointSyntax[_K];
            }
        >
    ): AAIssuingDistPointSyntax {
        return new AAIssuingDistPointSyntax(
            _o.distributionPoint,
            _o.onlySomeReasons,
            _o.indirectCRL,
            _o.containsUserAttributeCerts,
            _o.containsAACerts,
            _o.containsSOAPublicKeyCerts,
            _o._unrecognizedExtensionsList
        );
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
    /**
     * @summary Getter that returns the default value for `containsUserAttributeCerts`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_containsUserAttributeCerts() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `containsAACerts`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_containsAACerts() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `containsSOAPublicKeyCerts`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_containsSOAPublicKeyCerts() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION AAIssuingDistPointSyntax */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AAIssuingDistPointSyntax */
/**
 * @summary The Leading Root Component Types of AAIssuingDistPointSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AAIssuingDistPointSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "distributionPoint",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "onlySomeReasons",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "indirectCRL",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "containsUserAttributeCerts",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "containsAACerts",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "containsSOAPublicKeyCerts",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AAIssuingDistPointSyntax */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AAIssuingDistPointSyntax */
/**
 * @summary The Trailing Root Component Types of AAIssuingDistPointSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AAIssuingDistPointSyntax: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AAIssuingDistPointSyntax */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AAIssuingDistPointSyntax */
/**
 * @summary The Extension Addition Component Types of AAIssuingDistPointSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AAIssuingDistPointSyntax: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AAIssuingDistPointSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AAIssuingDistPointSyntax */
let _cached_decoder_for_AAIssuingDistPointSyntax: $.ASN1Decoder<AAIssuingDistPointSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AAIssuingDistPointSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_AAIssuingDistPointSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) AAIssuingDistPointSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AAIssuingDistPointSyntax} The decoded data structure.
 */
export function _decode_AAIssuingDistPointSyntax(el: _Element) {
    if (!_cached_decoder_for_AAIssuingDistPointSyntax) {
        _cached_decoder_for_AAIssuingDistPointSyntax = function (
            el: _Element
        ): AAIssuingDistPointSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let distributionPoint: OPTIONAL<DistributionPointName>;
            let onlySomeReasons: OPTIONAL<ReasonFlags>;
            let indirectCRL: OPTIONAL<BOOLEAN> =
                AAIssuingDistPointSyntax._default_value_for_indirectCRL;
            let containsUserAttributeCerts: OPTIONAL<BOOLEAN> =
                AAIssuingDistPointSyntax._default_value_for_containsUserAttributeCerts;
            let containsAACerts: OPTIONAL<BOOLEAN> =
                AAIssuingDistPointSyntax._default_value_for_containsAACerts;
            let containsSOAPublicKeyCerts: OPTIONAL<BOOLEAN> =
                AAIssuingDistPointSyntax._default_value_for_containsSOAPublicKeyCerts;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                distributionPoint: (_el: _Element): void => {
                    distributionPoint = $._decode_explicit<DistributionPointName>(
                        () => _decode_DistributionPointName
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
                containsUserAttributeCerts: (_el: _Element): void => {
                    containsUserAttributeCerts = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                containsAACerts: (_el: _Element): void => {
                    containsAACerts = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                containsSOAPublicKeyCerts: (_el: _Element): void => {
                    containsSOAPublicKeyCerts = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AAIssuingDistPointSyntax,
                _extension_additions_list_spec_for_AAIssuingDistPointSyntax,
                _root_component_type_list_2_spec_for_AAIssuingDistPointSyntax,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AAIssuingDistPointSyntax(
                /* SEQUENCE_CONSTRUCTOR_CALL */ distributionPoint,
                onlySomeReasons,
                indirectCRL,
                containsUserAttributeCerts,
                containsAACerts,
                containsSOAPublicKeyCerts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AAIssuingDistPointSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AAIssuingDistPointSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AAIssuingDistPointSyntax */
let _cached_encoder_for_AAIssuingDistPointSyntax: $.ASN1Encoder<AAIssuingDistPointSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AAIssuingDistPointSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_AAIssuingDistPointSyntax */
/**
 * @summary Encodes a(n) AAIssuingDistPointSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AAIssuingDistPointSyntax, encoded as an ASN.1 Element.
 */
export function _encode_AAIssuingDistPointSyntax(
    value: AAIssuingDistPointSyntax,
    elGetter: $.ASN1Encoder<AAIssuingDistPointSyntax>
) {
    if (!_cached_encoder_for_AAIssuingDistPointSyntax) {
        _cached_encoder_for_AAIssuingDistPointSyntax = function (
            value: AAIssuingDistPointSyntax,
            elGetter: $.ASN1Encoder<AAIssuingDistPointSyntax>
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
                            /* IF_ABSENT  */ value.onlySomeReasons === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_ReasonFlags,
                                      $.BER
                                  )(value.onlySomeReasons, $.BER),
                            /* IF_DEFAULT */ value.indirectCRL === undefined ||
                            $.deepEq(
                                value.indirectCRL,
                                AAIssuingDistPointSyntax._default_value_for_indirectCRL
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.indirectCRL, $.BER),
                            /* IF_DEFAULT */ value.containsUserAttributeCerts ===
                                undefined ||
                            $.deepEq(
                                value.containsUserAttributeCerts,
                                AAIssuingDistPointSyntax._default_value_for_containsUserAttributeCerts
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.containsUserAttributeCerts, $.BER),
                            /* IF_DEFAULT */ value.containsAACerts ===
                                undefined ||
                            $.deepEq(
                                value.containsAACerts,
                                AAIssuingDistPointSyntax._default_value_for_containsAACerts
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.containsAACerts, $.BER),
                            /* IF_DEFAULT */ value.containsSOAPublicKeyCerts ===
                                undefined ||
                            $.deepEq(
                                value.containsSOAPublicKeyCerts,
                                AAIssuingDistPointSyntax._default_value_for_containsSOAPublicKeyCerts
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      5,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.containsSOAPublicKeyCerts, $.BER),
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
    return _cached_encoder_for_AAIssuingDistPointSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AAIssuingDistPointSyntax */

/* eslint-enable */
