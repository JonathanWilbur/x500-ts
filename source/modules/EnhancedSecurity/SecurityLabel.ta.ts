/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PrivacyMark,
    _decode_PrivacyMark,
    _encode_PrivacyMark,
} from "../EnhancedSecurity/PrivacyMark.ta";
import {
    SecurityCategories,
    _decode_SecurityCategories,
    _encode_SecurityCategories,
} from "../EnhancedSecurity/SecurityCategories.ta";
import {
    SecurityClassification,
    _decode_SecurityClassification,
    _encode_SecurityClassification,
} from "../EnhancedSecurity/SecurityClassification.ta";
import {
    SecurityPolicyIdentifier,
    _decode_SecurityPolicyIdentifier,
    _encode_SecurityPolicyIdentifier,
} from "../EnhancedSecurity/SecurityPolicyIdentifier.ta";
export {
    PrivacyMark,
    _decode_PrivacyMark,
    _encode_PrivacyMark,
} from "../EnhancedSecurity/PrivacyMark.ta";
export {
    SecurityCategories,
    _decode_SecurityCategories,
    _encode_SecurityCategories,
} from "../EnhancedSecurity/SecurityCategories.ta";
export {
    confidential /* IMPORTED_SHORT_NAMED_INTEGER */,
    restricted /* IMPORTED_SHORT_NAMED_INTEGER */,
    secret /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityClassification,
    SecurityClassification_confidential /* IMPORTED_LONG_NAMED_INTEGER */,
    SecurityClassification_restricted /* IMPORTED_LONG_NAMED_INTEGER */,
    SecurityClassification_secret /* IMPORTED_LONG_NAMED_INTEGER */,
    SecurityClassification_top_secret /* IMPORTED_LONG_NAMED_INTEGER */,
    SecurityClassification_unclassified /* IMPORTED_LONG_NAMED_INTEGER */,
    SecurityClassification_unmarked /* IMPORTED_LONG_NAMED_INTEGER */,
    top_secret /* IMPORTED_SHORT_NAMED_INTEGER */,
    unclassified /* IMPORTED_SHORT_NAMED_INTEGER */,
    unmarked /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_SecurityClassification,
    _encode_SecurityClassification,
} from "../EnhancedSecurity/SecurityClassification.ta";
export {
    SecurityPolicyIdentifier,
    _decode_SecurityPolicyIdentifier,
    _encode_SecurityPolicyIdentifier,
} from "../EnhancedSecurity/SecurityPolicyIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION SecurityLabel */
/**
 * @summary SecurityLabel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityLabel ::= SET {
 *   security-policy-identifier  SecurityPolicyIdentifier OPTIONAL,
 *   security-classification     SecurityClassification OPTIONAL,
 *   privacy-mark                PrivacyMark OPTIONAL,
 *   security-categories         SecurityCategories OPTIONAL,
 *   ... }
 *    (ALL EXCEPT ({ -- none, at least one component shall be present --}))
 * ```
 *
 * @class
 */
export class SecurityLabel {
    constructor(
        /**
         * @summary `security_policy_identifier`.
         * @public
         * @readonly
         */
        readonly security_policy_identifier: OPTIONAL<SecurityPolicyIdentifier>,
        /**
         * @summary `security_classification`.
         * @public
         * @readonly
         */
        readonly security_classification: OPTIONAL<SecurityClassification>,
        /**
         * @summary `privacy_mark`.
         * @public
         * @readonly
         */
        readonly privacy_mark: OPTIONAL<PrivacyMark>,
        /**
         * @summary `security_categories`.
         * @public
         * @readonly
         */
        readonly security_categories: OPTIONAL<SecurityCategories>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SecurityLabel
     * @description
     *
     * This takes an `object` and converts it to a `SecurityLabel`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityLabel`.
     * @returns {SecurityLabel}
     */
    public static _from_object(
        _o: { [_K in keyof SecurityLabel]: SecurityLabel[_K] }
    ): SecurityLabel {
        return new SecurityLabel(
            _o.security_policy_identifier,
            _o.security_classification,
            _o.privacy_mark,
            _o.security_categories,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SecurityLabel */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SecurityLabel */
/**
 * @summary The Leading Root Component Types of SecurityLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SecurityLabel: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "security-policy-identifier",
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "security-classification",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "privacy-mark",
        true,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "security-categories",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SecurityLabel */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SecurityLabel */
/**
 * @summary The Trailing Root Component Types of SecurityLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SecurityLabel: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SecurityLabel */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SecurityLabel */
/**
 * @summary The Extension Addition Component Types of SecurityLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SecurityLabel: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SecurityLabel */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityLabel */
let _cached_decoder_for_SecurityLabel: $.ASN1Decoder<SecurityLabel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityLabel */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityLabel */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityLabel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityLabel} The decoded data structure.
 */
export function _decode_SecurityLabel(el: _Element) {
    if (!_cached_decoder_for_SecurityLabel) {
        _cached_decoder_for_SecurityLabel = function (
            el: _Element
        ): SecurityLabel {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let security_policy_identifier: OPTIONAL<SecurityPolicyIdentifier>;
            let security_classification: OPTIONAL<SecurityClassification>;
            let privacy_mark: OPTIONAL<PrivacyMark>;
            let security_categories: OPTIONAL<SecurityCategories>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "security-policy-identifier": (_el: _Element): void => {
                    security_policy_identifier = _decode_SecurityPolicyIdentifier(
                        _el
                    );
                },
                "security-classification": (_el: _Element): void => {
                    security_classification = _decode_SecurityClassification(
                        _el
                    );
                },
                "privacy-mark": (_el: _Element): void => {
                    privacy_mark = _decode_PrivacyMark(_el);
                },
                "security-categories": (_el: _Element): void => {
                    security_categories = _decode_SecurityCategories(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SecurityLabel,
                _extension_additions_list_spec_for_SecurityLabel,
                _root_component_type_list_2_spec_for_SecurityLabel,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SecurityLabel(
                /* SET_CONSTRUCTOR_CALL */ security_policy_identifier,
                security_classification,
                privacy_mark,
                security_categories,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SecurityLabel(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityLabel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityLabel */
let _cached_encoder_for_SecurityLabel: $.ASN1Encoder<SecurityLabel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityLabel */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityLabel */
/**
 * @summary Encodes a(n) SecurityLabel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityLabel, encoded as an ASN.1 Element.
 */
export function _encode_SecurityLabel(
    value: SecurityLabel,
    elGetter: $.ASN1Encoder<SecurityLabel>
) {
    if (!_cached_encoder_for_SecurityLabel) {
        _cached_encoder_for_SecurityLabel = function (
            value: SecurityLabel,
            elGetter: $.ASN1Encoder<SecurityLabel>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.security_policy_identifier ===
                            undefined
                                ? undefined
                                : _encode_SecurityPolicyIdentifier(
                                      value.security_policy_identifier,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.security_classification ===
                            undefined
                                ? undefined
                                : _encode_SecurityClassification(
                                      value.security_classification,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.privacy_mark === undefined
                                ? undefined
                                : _encode_PrivacyMark(
                                      value.privacy_mark,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.security_categories ===
                            undefined
                                ? undefined
                                : _encode_SecurityCategories(
                                      value.security_categories,
                                      $.BER
                                  ),
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
    return _cached_encoder_for_SecurityLabel(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityLabel */

/* eslint-enable */
