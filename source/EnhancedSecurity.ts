/**
 * @module EnhancedSecurity
 * @summary The ASN.1 module `EnhancedSecurity`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.modules.enhancedSecurity.9
 * IRI: undefined
 * EXTENSIBLE: false
 * ENCODINGREF: undefined
 * FILE: undefined
 *
 * This file was compiled by Wildboar Software's ASN.1 Compiler.
 *
 * @see {@link https://wildboarsoftware.com|Wildboar Software's Website}
 * /


/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    INTEGER,
    NULL,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    PrintableString,
    TRUE_BIT,
    TYPE_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertificateSerialNumber,
    HASH,
    SIGNED,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _get_decoder_for_HASH,
    _get_decoder_for_SIGNED,
    _get_encoder_for_HASH,
    _get_encoder_for_SIGNED,
} from "./AuthenticationFramework";
import {
    GeneralName,
    KeyIdentifier,
    _decode_GeneralName,
    _decode_KeyIdentifier,
    _encode_GeneralName,
    _encode_KeyIdentifier,
} from "./CertificateExtensions";
import * as InformationFramework from "./InformationFramework";
import {
    Attribute,
    ATTRIBUTE,
    AttributeType,
    AttributeTypeAndValue,
    Context,
    CONTEXT,
    Name,
    OBJECT_CLASS,
    _decode_Attribute,
    _decode_AttributeType,
    _decode_AttributeTypeAndValue,
    _decode_Context,
    _decode_Name,
    _encode_Attribute,
    _encode_AttributeType,
    _encode_AttributeTypeAndValue,
    _encode_Context,
    _encode_Name,
} from "./InformationFramework";
import { id_at, id_avc, id_oc } from "./UsefulDefinitions";
export {
    CertificateSerialNumber,
    HASH,
    SIGNED,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _get_decoder_for_HASH,
    _get_decoder_for_SIGNED,
    _get_encoder_for_HASH,
    _get_encoder_for_SIGNED,
} from "./AuthenticationFramework";
export {
    GeneralName,
    KeyIdentifier,
    _decode_GeneralName,
    _decode_KeyIdentifier,
    _encode_GeneralName,
    _encode_KeyIdentifier,
} from "./CertificateExtensions";
export {
    Attribute,
    ATTRIBUTE,
    AttributeType,
    AttributeTypeAndValue,
    Context,
    CONTEXT,
    Name,
    objectIdentifierMatch,
    OBJECT_CLASS,
    SupportedAttributes,
    top,
    _decode_Attribute,
    _decode_AttributeType,
    _decode_AttributeTypeAndValue,
    _decode_Context,
    _decode_Name,
    _encode_Attribute,
    _encode_AttributeType,
    _encode_AttributeTypeAndValue,
    _encode_Context,
    _encode_Name,
} from "./InformationFramework";
export { id_at, id_avc, id_mr, id_oc } from "./UsefulDefinitions";

/**
 * @summary OPTIONALLY_PROTECTED
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OPTIONALLY-PROTECTED{Type}  ::=  CHOICE {
 *   unsigned       Type,
 *   signed         SIGNED{Type} }
 * ```
 */
export type OPTIONALLY_PROTECTED<Type> =
    | { unsigned: Type } /* CHOICE_ALT_ROOT */
    | { signed: SIGNED<Type> } /* CHOICE_ALT_ROOT */;
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) OPTIONALLY_PROTECTED
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_OPTIONALLY_PROTECTED<Type>(
    _decode_Type: $.ASN1Decoder<Type>
) {
    return $._decode_inextensible_choice<OPTIONALLY_PROTECTED<Type>>({
        "*": ["unsigned", _decode_Type],
        "UNIVERSAL 16": ["signed", _get_decoder_for_SIGNED<Type>(_decode_Type)],
    });
}
/**
 * @summary Returns a function that will encode a(n) OPTIONALLY_PROTECTED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) OPTIONALLY_PROTECTED as an ASN.1 element.
 */
export function _get_encoder_for_OPTIONALLY_PROTECTED<Type>(
    _encode_Type: $.ASN1Encoder<Type>
) {
    return $._encode_choice<OPTIONALLY_PROTECTED<Type>>(
        {
            unsigned: _encode_Type,
            signed: _get_encoder_for_SIGNED<Type>(_encode_Type),
        },
        $.BER
    );
}

/**
 * @summary OPTIONALLY_PROTECTED_SEQ
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OPTIONALLY-PROTECTED-SEQ{Type}  ::=  CHOICE {
 *   unsigned       Type,
 *   signed    [0]  SIGNED{Type} }
 * ```
 */
export type OPTIONALLY_PROTECTED_SEQ<Type> =
    | { unsigned: Type } /* CHOICE_ALT_ROOT */
    | { signed: SIGNED<Type> } /* CHOICE_ALT_ROOT */;
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) OPTIONALLY_PROTECTED_SEQ
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<Type>(
    _decode_Type: $.ASN1Decoder<Type>
) {
    return $._decode_inextensible_choice<OPTIONALLY_PROTECTED_SEQ<Type>>({
        "*": ["unsigned", _decode_Type],
        "CONTEXT 0": [
            "signed",
            $._decode_implicit<SIGNED<Type>>(() =>
                _get_decoder_for_SIGNED<Type>(_decode_Type)
            ),
        ],
    });
}
/**
 * @summary Returns a function that will encode a(n) OPTIONALLY_PROTECTED_SEQ into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) OPTIONALLY_PROTECTED_SEQ as an ASN.1 element.
 */
export function _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<Type>(
    _encode_Type: $.ASN1Encoder<Type>
) {
    return $._encode_choice<OPTIONALLY_PROTECTED_SEQ<Type>>(
        {
            unsigned: _encode_Type,
            signed: $._encode_implicit(
                _TagClass.context,
                0,
                () => _get_encoder_for_SIGNED<Type>(_encode_Type),
                $.BER
            ),
        },
        $.BER
    );
}

export type SecurityPolicyIdentifier<> = OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_SecurityPolicyIdentifier: $.ASN1Decoder<
    SecurityPolicyIdentifier
> | null = null;
let _cached_encoder_for_SecurityPolicyIdentifier: $.ASN1Encoder<
    SecurityPolicyIdentifier
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityPolicyIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityPolicyIdentifier} The decoded data structure.
 */
export function _decode_SecurityPolicyIdentifier(el: _Element) {
    if (!_cached_decoder_for_SecurityPolicyIdentifier) {
        _cached_decoder_for_SecurityPolicyIdentifier =
            $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_SecurityPolicyIdentifier(el);
}
/**
 * @summary Encodes a(n) SecurityPolicyIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityPolicyIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_SecurityPolicyIdentifier(
    value: SecurityPolicyIdentifier,
    elGetter: $.ASN1Encoder<SecurityPolicyIdentifier>
) {
    if (!_cached_encoder_for_SecurityPolicyIdentifier) {
        _cached_encoder_for_SecurityPolicyIdentifier =
            $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_SecurityPolicyIdentifier(value, elGetter);
}

/**
 * @summary SecurityClassification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityClassification  ::=  INTEGER {
 *   unmarked      (0),
 *   unclassified  (1),
 *   restricted    (2),
 *   confidential  (3),
 *   secret        (4),
 *   top-secret    (5)}
 * ```
 */
export type SecurityClassification = INTEGER;
/**
 * @summary SecurityClassification_unmarked
 * @constant
 * @type {number}
 */
export const SecurityClassification_unmarked: SecurityClassification = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary SecurityClassification_unclassified
 * @constant
 * @type {number}
 */
export const SecurityClassification_unclassified: SecurityClassification = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary SecurityClassification_restricted
 * @constant
 * @type {number}
 */
export const SecurityClassification_restricted: SecurityClassification = 2; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary SecurityClassification_confidential
 * @constant
 * @type {number}
 */
export const SecurityClassification_confidential: SecurityClassification = 3; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary SecurityClassification_secret
 * @constant
 * @type {number}
 */
export const SecurityClassification_secret: SecurityClassification = 4; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary SecurityClassification_top_secret
 * @constant
 * @type {number}
 */
export const SecurityClassification_top_secret: SecurityClassification = 5; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_SecurityClassification: $.ASN1Decoder<
    SecurityClassification
> | null = null;
let _cached_encoder_for_SecurityClassification: $.ASN1Encoder<
    SecurityClassification
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityClassification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityClassification} The decoded data structure.
 */
export function _decode_SecurityClassification(el: _Element) {
    if (!_cached_decoder_for_SecurityClassification) {
        _cached_decoder_for_SecurityClassification = $._decodeInteger;
    }
    return _cached_decoder_for_SecurityClassification(el);
}
/**
 * @summary Encodes a(n) SecurityClassification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityClassification, encoded as an ASN.1 Element.
 */
export function _encode_SecurityClassification(
    value: SecurityClassification,
    elGetter: $.ASN1Encoder<SecurityClassification>
) {
    if (!_cached_encoder_for_SecurityClassification) {
        _cached_encoder_for_SecurityClassification = $._encodeInteger;
    }
    return _cached_encoder_for_SecurityClassification(value, elGetter);
}

export type PrivacyMark<> = PrintableString; // PrintableString
let _cached_decoder_for_PrivacyMark: $.ASN1Decoder<PrivacyMark> | null = null;
let _cached_encoder_for_PrivacyMark: $.ASN1Encoder<PrivacyMark> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PrivacyMark
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivacyMark} The decoded data structure.
 */
export function _decode_PrivacyMark(el: _Element) {
    if (!_cached_decoder_for_PrivacyMark) {
        _cached_decoder_for_PrivacyMark = $._decodePrintableString;
    }
    return _cached_decoder_for_PrivacyMark(el);
}
/**
 * @summary Encodes a(n) PrivacyMark into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivacyMark, encoded as an ASN.1 Element.
 */
export function _encode_PrivacyMark(
    value: PrivacyMark,
    elGetter: $.ASN1Encoder<PrivacyMark>
) {
    if (!_cached_encoder_for_PrivacyMark) {
        _cached_encoder_for_PrivacyMark = $._encodePrintableString;
    }
    return _cached_encoder_for_PrivacyMark(value, elGetter);
}

/**
 * @summary SECURITY_CATEGORY
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SECURITY-CATEGORY ::= TYPE-IDENTIFIER
 * ```
 *
 * @interface
 */
export type SECURITY_CATEGORY = TYPE_IDENTIFIER;

/**
 * @summary SecurityCategoriesTable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityCategoriesTable SECURITY-CATEGORY ::= {...}
 * ```
 *
 * @constant
 * @type {SECURITY_CATEGORY[]}
 *
 */
export const SecurityCategoriesTable: SECURITY_CATEGORY[] = [];

/**
 * @summary SecurityCategory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityCategory ::= SEQUENCE {
 *   type   [0]  SECURITY-CATEGORY.&id({SecurityCategoriesTable}),
 *   value  [1]  EXPLICIT SECURITY-CATEGORY.&Type({SecurityCategoriesTable}{@type}),
 *   ... }
 * ```
 *
 * @class
 */
export class SecurityCategory {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SecurityCategory
     * @description
     *
     * This takes an `object` and converts it to a `SecurityCategory`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityCategory`.
     * @returns {SecurityCategory}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SecurityCategory]: SecurityCategory[_K] }>
    ): SecurityCategory {
        return new SecurityCategory(
            _o.type_,
            _o.value,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of SecurityCategory
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SecurityCategory: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "value",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SecurityCategory
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SecurityCategory: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SecurityCategory
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SecurityCategory: $.ComponentSpec[] = [];
let _cached_decoder_for_SecurityCategory: $.ASN1Decoder<
    SecurityCategory
> | null = null;
let _cached_encoder_for_SecurityCategory: $.ASN1Encoder<
    SecurityCategory
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityCategory
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityCategory} The decoded data structure.
 */
export function _decode_SecurityCategory(el: _Element) {
    if (!_cached_decoder_for_SecurityCategory) {
        _cached_decoder_for_SecurityCategory = function (
            el: _Element
        ): SecurityCategory {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SecurityCategory contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: OBJECT_IDENTIFIER;
            let value!: _Element;
            type_ = $._decode_implicit<OBJECT_IDENTIFIER>(
                () => $._decodeObjectIdentifier
            )(sequence[0]);
            value = $._decode_explicit<_Element>(() => $._decodeAny)(
                sequence[1]
            );
            return new SecurityCategory(type_, value, sequence.slice(2));
        };
    }
    return _cached_decoder_for_SecurityCategory(el);
}
/**
 * @summary Encodes a(n) SecurityCategory into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityCategory, encoded as an ASN.1 Element.
 */
export function _encode_SecurityCategory(
    value: SecurityCategory,
    elGetter: $.ASN1Encoder<SecurityCategory>
) {
    if (!_cached_encoder_for_SecurityCategory) {
        _cached_encoder_for_SecurityCategory = function (
            value: SecurityCategory,
            elGetter: $.ASN1Encoder<SecurityCategory>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => $._encodeObjectIdentifier,
                                $.BER
                            )(value.type_, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => $._encodeAny,
                                $.BER
                            )(value.value, $.BER),
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
    return _cached_encoder_for_SecurityCategory(value, elGetter);
}

export type SecurityCategories<> = SecurityCategory[]; // SetOfType
let _cached_decoder_for_SecurityCategories: $.ASN1Decoder<
    SecurityCategories
> | null = null;
let _cached_encoder_for_SecurityCategories: $.ASN1Encoder<
    SecurityCategories
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityCategories
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityCategories} The decoded data structure.
 */
export function _decode_SecurityCategories(el: _Element) {
    if (!_cached_decoder_for_SecurityCategories) {
        _cached_decoder_for_SecurityCategories = $._decodeSetOf<
            SecurityCategory
        >(() => _decode_SecurityCategory);
    }
    return _cached_decoder_for_SecurityCategories(el);
}
/**
 * @summary Encodes a(n) SecurityCategories into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityCategories, encoded as an ASN.1 Element.
 */
export function _encode_SecurityCategories(
    value: SecurityCategories,
    elGetter: $.ASN1Encoder<SecurityCategories>
) {
    if (!_cached_encoder_for_SecurityCategories) {
        _cached_encoder_for_SecurityCategories = $._encodeSetOf<
            SecurityCategory
        >(() => _encode_SecurityCategory, $.BER);
    }
    return _cached_encoder_for_SecurityCategories(value, elGetter);
}

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
        _o: Partial<{ [_K in keyof SecurityLabel]: SecurityLabel[_K] }>
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
/**
 * @summary The Trailing Root Component Types of SecurityLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SecurityLabel: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SecurityLabel
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SecurityLabel: $.ComponentSpec[] = [];
let _cached_decoder_for_SecurityLabel: $.ASN1Decoder<
    SecurityLabel
> | null = null;
let _cached_encoder_for_SecurityLabel: $.ASN1Encoder<
    SecurityLabel
> | null = null;
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

/**
 * @summary SignedSecurityLabelContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedSecurityLabelContent ::= SEQUENCE {
 *   attHash        HASH{AttributeTypeAndValue},
 *   issuer         Name OPTIONAL, -- name of labelling authority
 *   keyIdentifier  KeyIdentifier OPTIONAL,
 *   securityLabel  SecurityLabel,
 *   ... }
 * ```
 *
 * @class
 */
export class SignedSecurityLabelContent {
    constructor(
        /**
         * @summary `attHash`.
         * @public
         * @readonly
         */
        readonly attHash: HASH<AttributeTypeAndValue>,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: OPTIONAL<Name>,
        /**
         * @summary `keyIdentifier`.
         * @public
         * @readonly
         */
        readonly keyIdentifier: OPTIONAL<KeyIdentifier>,
        /**
         * @summary `securityLabel`.
         * @public
         * @readonly
         */
        readonly securityLabel: SecurityLabel,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SignedSecurityLabelContent
     * @description
     *
     * This takes an `object` and converts it to a `SignedSecurityLabelContent`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignedSecurityLabelContent`.
     * @returns {SignedSecurityLabelContent}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof SignedSecurityLabelContent]: SignedSecurityLabelContent[_K];
            }
        >
    ): SignedSecurityLabelContent {
        return new SignedSecurityLabelContent(
            _o.attHash,
            _o.issuer,
            _o.keyIdentifier,
            _o.securityLabel,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of SignedSecurityLabelContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SignedSecurityLabelContent: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "attHash",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec("issuer", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "keyIdentifier",
        true,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityLabel",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SignedSecurityLabelContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SignedSecurityLabelContent: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SignedSecurityLabelContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SignedSecurityLabelContent: $.ComponentSpec[] = [];
let _cached_decoder_for_SignedSecurityLabelContent: $.ASN1Decoder<
    SignedSecurityLabelContent
> | null = null;
let _cached_encoder_for_SignedSecurityLabelContent: $.ASN1Encoder<
    SignedSecurityLabelContent
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SignedSecurityLabelContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedSecurityLabelContent} The decoded data structure.
 */
export function _decode_SignedSecurityLabelContent(el: _Element) {
    if (!_cached_decoder_for_SignedSecurityLabelContent) {
        _cached_decoder_for_SignedSecurityLabelContent = function (
            el: _Element
        ): SignedSecurityLabelContent {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attHash!: HASH<AttributeTypeAndValue>;
            let issuer: OPTIONAL<Name>;
            let keyIdentifier: OPTIONAL<KeyIdentifier>;
            let securityLabel!: SecurityLabel;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                attHash: (_el: _Element): void => {
                    attHash = _get_decoder_for_HASH<AttributeTypeAndValue>(
                        _decode_AttributeTypeAndValue
                    )(_el);
                },
                issuer: (_el: _Element): void => {
                    issuer = _decode_Name(_el);
                },
                keyIdentifier: (_el: _Element): void => {
                    keyIdentifier = _decode_KeyIdentifier(_el);
                },
                securityLabel: (_el: _Element): void => {
                    securityLabel = _decode_SecurityLabel(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SignedSecurityLabelContent,
                _extension_additions_list_spec_for_SignedSecurityLabelContent,
                _root_component_type_list_2_spec_for_SignedSecurityLabelContent,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SignedSecurityLabelContent(
                /* SEQUENCE_CONSTRUCTOR_CALL */ attHash,
                issuer,
                keyIdentifier,
                securityLabel,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SignedSecurityLabelContent(el);
}
/**
 * @summary Encodes a(n) SignedSecurityLabelContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedSecurityLabelContent, encoded as an ASN.1 Element.
 */
export function _encode_SignedSecurityLabelContent(
    value: SignedSecurityLabelContent,
    elGetter: $.ASN1Encoder<SignedSecurityLabelContent>
) {
    if (!_cached_encoder_for_SignedSecurityLabelContent) {
        _cached_encoder_for_SignedSecurityLabelContent = function (
            value: SignedSecurityLabelContent,
            elGetter: $.ASN1Encoder<SignedSecurityLabelContent>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _get_encoder_for_HASH<
                                AttributeTypeAndValue
                            >(_encode_AttributeTypeAndValue)(
                                value.attHash,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.issuer === undefined
                                ? undefined
                                : _encode_Name(value.issuer, $.BER),
                            /* IF_ABSENT  */ value.keyIdentifier === undefined
                                ? undefined
                                : _encode_KeyIdentifier(
                                      value.keyIdentifier,
                                      $.BER
                                  ),
                            /* REQUIRED   */ _encode_SecurityLabel(
                                value.securityLabel,
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
    return _cached_encoder_for_SignedSecurityLabelContent(value, elGetter);
}

export type SignedSecurityLabel<> = SIGNED<SignedSecurityLabelContent>; // DefinedType
let _cached_decoder_for_SignedSecurityLabel: $.ASN1Decoder<
    SignedSecurityLabel
> | null = null;
let _cached_encoder_for_SignedSecurityLabel: $.ASN1Encoder<
    SignedSecurityLabel
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SignedSecurityLabel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedSecurityLabel} The decoded data structure.
 */
export function _decode_SignedSecurityLabel(el: _Element) {
    if (!_cached_decoder_for_SignedSecurityLabel) {
        _cached_decoder_for_SignedSecurityLabel = _get_decoder_for_SIGNED<
            SignedSecurityLabelContent
        >(_decode_SignedSecurityLabelContent);
    }
    return _cached_decoder_for_SignedSecurityLabel(el);
}
/**
 * @summary Encodes a(n) SignedSecurityLabel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedSecurityLabel, encoded as an ASN.1 Element.
 */
export function _encode_SignedSecurityLabel(
    value: SignedSecurityLabel,
    elGetter: $.ASN1Encoder<SignedSecurityLabel>
) {
    if (!_cached_encoder_for_SignedSecurityLabel) {
        _cached_encoder_for_SignedSecurityLabel = _get_encoder_for_SIGNED<
            SignedSecurityLabelContent
        >(_encode_SignedSecurityLabelContent);
    }
    return _cached_encoder_for_SignedSecurityLabel(value, elGetter);
}

/**
 * @summary id_avc_attributeValueSecurityLabelContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-avc-attributeValueSecurityLabelContext OBJECT IDENTIFIER ::= {id-avc 3}
 * ```
 *
 * @constant
 */
export const id_avc_attributeValueSecurityLabelContext: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_avc
);

/**
 * @summary attributeValueSecurityLabelContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeValueSecurityLabelContext CONTEXT ::= {
 *   WITH SYNTAX    SignedSecurityLabel -- At most one security label context can
 *                                      -- be assigned to an attribute value
 *   ID             id-avc-attributeValueSecurityLabelContext }
 * ```
 *
 * @constant
 * @type {CONTEXT}
 * @implements {CONTEXT}
 */
export const attributeValueSecurityLabelContext: CONTEXT = {
    class: "CONTEXT",
    decoderFor: {
        "&Type": _decode_SignedSecurityLabel,
        "&Assertion": undefined,
    },
    encoderFor: {
        "&Type": _encode_SignedSecurityLabel,
        "&Assertion": undefined,
    },
    "&id": id_avc_attributeValueSecurityLabelContext /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Assertion": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&absentMatch": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary ClassList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClassList  ::=  BIT STRING {
 *   unmarked      (0),
 *   unclassified  (1),
 *   restricted    (2),
 *   confidential  (3),
 *   secret        (4),
 *   topSecret     (5)}
 * ```
 */
export type ClassList = BIT_STRING;
/**
 * @summary ClassList_unmarked
 * @constant
 */
export const ClassList_unmarked: number = 0; /* LONG_NAMED_BIT */
/**
 * @summary ClassList_unclassified
 * @constant
 */
export const ClassList_unclassified: number = 1; /* LONG_NAMED_BIT */
/**
 * @summary ClassList_restricted
 * @constant
 */
export const ClassList_restricted: number = 2; /* LONG_NAMED_BIT */
/**
 * @summary ClassList_confidential
 * @constant
 */
export const ClassList_confidential: number = 3; /* LONG_NAMED_BIT */
/**
 * @summary ClassList_secret
 * @constant
 */
export const ClassList_secret: number = 4; /* LONG_NAMED_BIT */
/**
 * @summary ClassList_topSecret
 * @constant
 */
export const ClassList_topSecret: number = 5; /* LONG_NAMED_BIT */
let _cached_decoder_for_ClassList: $.ASN1Decoder<ClassList> | null = null;
let _cached_encoder_for_ClassList: $.ASN1Encoder<ClassList> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ClassList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClassList} The decoded data structure.
 */
export function _decode_ClassList(el: _Element) {
    if (!_cached_decoder_for_ClassList) {
        _cached_decoder_for_ClassList = $._decodeBitString;
    }
    return _cached_decoder_for_ClassList(el);
}
/**
 * @summary Encodes a(n) ClassList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClassList, encoded as an ASN.1 Element.
 */
export function _encode_ClassList(
    value: ClassList,
    elGetter: $.ASN1Encoder<ClassList>
) {
    if (!_cached_encoder_for_ClassList) {
        _cached_encoder_for_ClassList = $._encodeBitString;
    }
    return _cached_encoder_for_ClassList(value, elGetter);
}

/**
 * @summary Clearance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Clearance ::= SEQUENCE {
 *   policyId            OBJECT IDENTIFIER,
 *   classList           ClassList DEFAULT {unclassified},
 *   securityCategories  SET SIZE (1..MAX) OF SecurityCategory OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class Clearance {
    constructor(
        /**
         * @summary `policyId`.
         * @public
         * @readonly
         */
        readonly policyId: OBJECT_IDENTIFIER,
        /**
         * @summary `classList`.
         * @public
         * @readonly
         */
        readonly classList: OPTIONAL<ClassList>,
        /**
         * @summary `securityCategories`.
         * @public
         * @readonly
         */
        readonly securityCategories: OPTIONAL<SecurityCategory[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Clearance
     * @description
     *
     * This takes an `object` and converts it to a `Clearance`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Clearance`.
     * @returns {Clearance}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Clearance]: Clearance[_K] }>
    ): Clearance {
        return new Clearance(
            _o.policyId,
            _o.classList,
            _o.securityCategories,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `classList`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_classList() {
        return (() => {
            const _ret = new Uint8ClampedArray(Math.max(0, 1, 2, 3, 4, 5));
            _ret[ClassList_unclassified] = TRUE_BIT;
            return _ret;
        })();
    }
}
/**
 * @summary The Leading Root Component Types of Clearance
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Clearance: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "policyId",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "classList",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityCategories",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Clearance
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Clearance: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Clearance
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Clearance: $.ComponentSpec[] = [];
let _cached_decoder_for_Clearance: $.ASN1Decoder<Clearance> | null = null;
let _cached_encoder_for_Clearance: $.ASN1Encoder<Clearance> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Clearance
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Clearance} The decoded data structure.
 */
export function _decode_Clearance(el: _Element) {
    if (!_cached_decoder_for_Clearance) {
        _cached_decoder_for_Clearance = function (el: _Element): Clearance {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let policyId!: OBJECT_IDENTIFIER;
            let classList: OPTIONAL<ClassList> =
                Clearance._default_value_for_classList;
            let securityCategories: OPTIONAL<SecurityCategory[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                policyId: (_el: _Element): void => {
                    policyId = $._decodeObjectIdentifier(_el);
                },
                classList: (_el: _Element): void => {
                    classList = _decode_ClassList(_el);
                },
                securityCategories: (_el: _Element): void => {
                    securityCategories = $._decodeSetOf<SecurityCategory>(
                        () => _decode_SecurityCategory
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Clearance,
                _extension_additions_list_spec_for_Clearance,
                _root_component_type_list_2_spec_for_Clearance,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Clearance(
                /* SEQUENCE_CONSTRUCTOR_CALL */ policyId,
                classList,
                securityCategories,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Clearance(el);
}
/**
 * @summary Encodes a(n) Clearance into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Clearance, encoded as an ASN.1 Element.
 */
export function _encode_Clearance(
    value: Clearance,
    elGetter: $.ASN1Encoder<Clearance>
) {
    if (!_cached_encoder_for_Clearance) {
        _cached_encoder_for_Clearance = function (
            value: Clearance,
            elGetter: $.ASN1Encoder<Clearance>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.policyId,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.classList === undefined ||
                            $.deepEq(
                                value.classList,
                                Clearance._default_value_for_classList
                            )
                                ? undefined
                                : _encode_ClassList(value.classList, $.BER),
                            /* IF_ABSENT  */ value.securityCategories ===
                            undefined
                                ? undefined
                                : $._encodeSetOf<SecurityCategory>(
                                      () => _encode_SecurityCategory,
                                      $.BER
                                  )(value.securityCategories, $.BER),
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
    return _cached_encoder_for_Clearance(value, elGetter);
}

/**
 * @summary id_at_clearance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-clearance                           OBJECT IDENTIFIER ::= {id-at 55}
 * ```
 *
 * @constant
 */
export const id_at_clearance: OBJECT_IDENTIFIER = new _OID([55], id_at);

/**
 * @summary clearance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * clearance ATTRIBUTE ::= {
 *   WITH SYNTAX  Clearance
 *   ID           id-at-clearance }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const clearance: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Clearance,
    },
    encoderFor: {
        "&Type": _encode_Clearance,
    },
    "&id": id_at_clearance /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type SelectedTypes<> = AttributeType[]; // SequenceOfType
let _cached_decoder_for_SelectedTypes: $.ASN1Decoder<
    SelectedTypes
> | null = null;
let _cached_encoder_for_SelectedTypes: $.ASN1Encoder<
    SelectedTypes
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SelectedTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SelectedTypes} The decoded data structure.
 */
export function _decode_SelectedTypes(el: _Element) {
    if (!_cached_decoder_for_SelectedTypes) {
        _cached_decoder_for_SelectedTypes = $._decodeSequenceOf<AttributeType>(
            () => _decode_AttributeType
        );
    }
    return _cached_decoder_for_SelectedTypes(el);
}
/**
 * @summary Encodes a(n) SelectedTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SelectedTypes, encoded as an ASN.1 Element.
 */
export function _encode_SelectedTypes(
    value: SelectedTypes,
    elGetter: $.ASN1Encoder<SelectedTypes>
) {
    if (!_cached_encoder_for_SelectedTypes) {
        _cached_encoder_for_SelectedTypes = $._encodeSequenceOf<AttributeType>(
            () => _encode_AttributeType,
            $.BER
        );
    }
    return _cached_encoder_for_SelectedTypes(value, elGetter);
}

/**
 * @summary Scope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Scope  ::=  CHOICE {
 *   wholeEntry     [0]  NULL, -- Signature protects all attribute values in this entry
 *   selectedTypes  [1]  SelectedTypes,
 *       -- Signature protects all attribute values of the selected attribute types
 *   ... }
 * ```
 */
export type Scope =
    | { wholeEntry: NULL } /* CHOICE_ALT_ROOT */
    | { selectedTypes: SelectedTypes } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Scope: $.ASN1Decoder<Scope> | null = null;
let _cached_encoder_for_Scope: $.ASN1Encoder<Scope> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Scope
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Scope} The decoded data structure.
 */
export function _decode_Scope(el: _Element) {
    if (!_cached_decoder_for_Scope) {
        _cached_decoder_for_Scope = $._decode_extensible_choice<Scope>({
            "CONTEXT 0": [
                "wholeEntry",
                $._decode_implicit<NULL>(() => $._decodeNull),
            ],
            "CONTEXT 1": [
                "selectedTypes",
                $._decode_implicit<SelectedTypes>(() => _decode_SelectedTypes),
            ],
        });
    }
    return _cached_decoder_for_Scope(el);
}
/**
 * @summary Encodes a(n) Scope into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Scope, encoded as an ASN.1 Element.
 */
export function _encode_Scope(value: Scope, elGetter: $.ASN1Encoder<Scope>) {
    if (!_cached_encoder_for_Scope) {
        _cached_encoder_for_Scope = $._encode_choice<Scope>(
            {
                wholeEntry: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                selectedTypes: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_SelectedTypes,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Scope(value, elGetter);
}

/**
 * @summary IssuerAndSerialNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IssuerAndSerialNumber ::= SEQUENCE {
 *   issuer  Name,
 *   serial  CertificateSerialNumber,
 *   ... }
 * ```
 *
 * @class
 */
export class IssuerAndSerialNumber {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `serial`.
         * @public
         * @readonly
         */
        readonly serial: CertificateSerialNumber,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IssuerAndSerialNumber
     * @description
     *
     * This takes an `object` and converts it to a `IssuerAndSerialNumber`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IssuerAndSerialNumber`.
     * @returns {IssuerAndSerialNumber}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof IssuerAndSerialNumber]: IssuerAndSerialNumber[_K] }
        >
    ): IssuerAndSerialNumber {
        return new IssuerAndSerialNumber(
            _o.issuer,
            _o.serial,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of IssuerAndSerialNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IssuerAndSerialNumber: $.ComponentSpec[] = [
    new $.ComponentSpec("issuer", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "serial",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of IssuerAndSerialNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IssuerAndSerialNumber: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of IssuerAndSerialNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IssuerAndSerialNumber: $.ComponentSpec[] = [];
let _cached_decoder_for_IssuerAndSerialNumber: $.ASN1Decoder<
    IssuerAndSerialNumber
> | null = null;
let _cached_encoder_for_IssuerAndSerialNumber: $.ASN1Encoder<
    IssuerAndSerialNumber
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) IssuerAndSerialNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IssuerAndSerialNumber} The decoded data structure.
 */
export function _decode_IssuerAndSerialNumber(el: _Element) {
    if (!_cached_decoder_for_IssuerAndSerialNumber) {
        _cached_decoder_for_IssuerAndSerialNumber = function (
            el: _Element
        ): IssuerAndSerialNumber {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "IssuerAndSerialNumber contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "issuer";
            sequence[1].name = "serial";
            let issuer!: Name;
            let serial!: CertificateSerialNumber;
            issuer = _decode_Name(sequence[0]);
            serial = _decode_CertificateSerialNumber(sequence[1]);
            return new IssuerAndSerialNumber(issuer, serial, sequence.slice(2));
        };
    }
    return _cached_decoder_for_IssuerAndSerialNumber(el);
}
/**
 * @summary Encodes a(n) IssuerAndSerialNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IssuerAndSerialNumber, encoded as an ASN.1 Element.
 */
export function _encode_IssuerAndSerialNumber(
    value: IssuerAndSerialNumber,
    elGetter: $.ASN1Encoder<IssuerAndSerialNumber>
) {
    if (!_cached_encoder_for_IssuerAndSerialNumber) {
        _cached_encoder_for_IssuerAndSerialNumber = function (
            value: IssuerAndSerialNumber,
            elGetter: $.ASN1Encoder<IssuerAndSerialNumber>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.issuer, $.BER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serial,
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
    return _cached_encoder_for_IssuerAndSerialNumber(value, elGetter);
}

/**
 * @summary ThisEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ThisEntry  ::=  CHOICE {
 *   onlyOne   NULL,
 *   specific  IssuerAndSerialNumber,
 *   ... }
 * ```
 */
export type ThisEntry =
    | { onlyOne: NULL } /* CHOICE_ALT_ROOT */
    | { specific: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ThisEntry: $.ASN1Decoder<ThisEntry> | null = null;
let _cached_encoder_for_ThisEntry: $.ASN1Encoder<ThisEntry> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ThisEntry
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ThisEntry} The decoded data structure.
 */
export function _decode_ThisEntry(el: _Element) {
    if (!_cached_decoder_for_ThisEntry) {
        _cached_decoder_for_ThisEntry = $._decode_extensible_choice<ThisEntry>({
            "UNIVERSAL 5": ["onlyOne", $._decodeNull],
            "UNIVERSAL 16": ["specific", _decode_IssuerAndSerialNumber],
        });
    }
    return _cached_decoder_for_ThisEntry(el);
}
/**
 * @summary Encodes a(n) ThisEntry into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThisEntry, encoded as an ASN.1 Element.
 */
export function _encode_ThisEntry(
    value: ThisEntry,
    elGetter: $.ASN1Encoder<ThisEntry>
) {
    if (!_cached_encoder_for_ThisEntry) {
        _cached_encoder_for_ThisEntry = $._encode_choice<ThisEntry>(
            {
                onlyOne: $._encodeNull,
                specific: _encode_IssuerAndSerialNumber,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ThisEntry(value, elGetter);
}

/**
 * @summary SpecificallyIdentified
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SpecificallyIdentified ::= SEQUENCE {
 *   name    GeneralName,
 *   issuer  GeneralName OPTIONAL,
 *   serial  CertificateSerialNumber OPTIONAL }
 *   (WITH COMPONENTS { ..., issuer PRESENT, serial PRESENT } |
 *   (WITH COMPONENTS { ..., issuer ABSENT, serial ABSENT }))
 * ```
 *
 * @class
 */
export class SpecificallyIdentified {
    constructor(
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: GeneralName,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: OPTIONAL<GeneralName>,
        /**
         * @summary `serial`.
         * @public
         * @readonly
         */
        readonly serial: OPTIONAL<CertificateSerialNumber>
    ) {}

    /**
     * @summary Restructures an object into a SpecificallyIdentified
     * @description
     *
     * This takes an `object` and converts it to a `SpecificallyIdentified`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SpecificallyIdentified`.
     * @returns {SpecificallyIdentified}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SpecificallyIdentified]: SpecificallyIdentified[_K] }
        >
    ): SpecificallyIdentified {
        return new SpecificallyIdentified(_o.name, _o.issuer, _o.serial);
    }
}
/**
 * @summary The Leading Root Component Types of SpecificallyIdentified
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SpecificallyIdentified: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("issuer", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "serial",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SpecificallyIdentified
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SpecificallyIdentified: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SpecificallyIdentified
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SpecificallyIdentified: $.ComponentSpec[] = [];
let _cached_decoder_for_SpecificallyIdentified: $.ASN1Decoder<
    SpecificallyIdentified
> | null = null;
let _cached_encoder_for_SpecificallyIdentified: $.ASN1Encoder<
    SpecificallyIdentified
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SpecificallyIdentified
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SpecificallyIdentified} The decoded data structure.
 */
export function _decode_SpecificallyIdentified(el: _Element) {
    if (!_cached_decoder_for_SpecificallyIdentified) {
        _cached_decoder_for_SpecificallyIdentified = function (
            el: _Element
        ): SpecificallyIdentified {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let name!: GeneralName;
            let issuer: OPTIONAL<GeneralName>;
            let serial: OPTIONAL<CertificateSerialNumber>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                name: (_el: _Element): void => {
                    name = _decode_GeneralName(_el);
                },
                issuer: (_el: _Element): void => {
                    issuer = _decode_GeneralName(_el);
                },
                serial: (_el: _Element): void => {
                    serial = _decode_CertificateSerialNumber(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SpecificallyIdentified,
                _extension_additions_list_spec_for_SpecificallyIdentified,
                _root_component_type_list_2_spec_for_SpecificallyIdentified,
                undefined
            );
            return new SpecificallyIdentified(
                /* SEQUENCE_CONSTRUCTOR_CALL */ name,
                issuer,
                serial
            );
        };
    }
    return _cached_decoder_for_SpecificallyIdentified(el);
}
/**
 * @summary Encodes a(n) SpecificallyIdentified into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpecificallyIdentified, encoded as an ASN.1 Element.
 */
export function _encode_SpecificallyIdentified(
    value: SpecificallyIdentified,
    elGetter: $.ASN1Encoder<SpecificallyIdentified>
) {
    if (!_cached_encoder_for_SpecificallyIdentified) {
        _cached_encoder_for_SpecificallyIdentified = function (
            value: SpecificallyIdentified,
            elGetter: $.ASN1Encoder<SpecificallyIdentified>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_GeneralName(value.name, $.BER),
                        /* IF_ABSENT  */ value.issuer === undefined
                            ? undefined
                            : _encode_GeneralName(value.issuer, $.BER),
                        /* IF_ABSENT  */ value.serial === undefined
                            ? undefined
                            : _encode_CertificateSerialNumber(
                                  value.serial,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SpecificallyIdentified(value, elGetter);
}

/**
 * @summary Signer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Signer  ::=  CHOICE {
 *   thisEntry   [0]  EXPLICIT ThisEntry,
 *   thirdParty  [1]  SpecificallyIdentified,
 *   ... }
 * ```
 */
export type Signer =
    | { thisEntry: ThisEntry } /* CHOICE_ALT_ROOT */
    | { thirdParty: SpecificallyIdentified } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Signer: $.ASN1Decoder<Signer> | null = null;
let _cached_encoder_for_Signer: $.ASN1Encoder<Signer> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Signer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Signer} The decoded data structure.
 */
export function _decode_Signer(el: _Element) {
    if (!_cached_decoder_for_Signer) {
        _cached_decoder_for_Signer = $._decode_extensible_choice<Signer>({
            "CONTEXT 0": [
                "thisEntry",
                $._decode_explicit<ThisEntry>(() => _decode_ThisEntry),
            ],
            "CONTEXT 1": [
                "thirdParty",
                $._decode_implicit<SpecificallyIdentified>(
                    () => _decode_SpecificallyIdentified
                ),
            ],
        });
    }
    return _cached_decoder_for_Signer(el);
}
/**
 * @summary Encodes a(n) Signer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Signer, encoded as an ASN.1 Element.
 */
export function _encode_Signer(value: Signer, elGetter: $.ASN1Encoder<Signer>) {
    if (!_cached_encoder_for_Signer) {
        _cached_encoder_for_Signer = $._encode_choice<Signer>(
            {
                thisEntry: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ThisEntry,
                    $.BER
                ),
                thirdParty: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_SpecificallyIdentified,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Signer(value, elGetter);
}

export type HashedAttributes<> = Attribute[]; // SequenceOfType
let _cached_decoder_for_HashedAttributes: $.ASN1Decoder<
    HashedAttributes
> | null = null;
let _cached_encoder_for_HashedAttributes: $.ASN1Encoder<
    HashedAttributes
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) HashedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HashedAttributes} The decoded data structure.
 */
export function _decode_HashedAttributes(el: _Element) {
    if (!_cached_decoder_for_HashedAttributes) {
        _cached_decoder_for_HashedAttributes = $._decodeSequenceOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_HashedAttributes(el);
}
/**
 * @summary Encodes a(n) HashedAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_HashedAttributes(
    value: HashedAttributes,
    elGetter: $.ASN1Encoder<HashedAttributes>
) {
    if (!_cached_encoder_for_HashedAttributes) {
        _cached_encoder_for_HashedAttributes = $._encodeSequenceOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_HashedAttributes(value, elGetter);
}

export type AttribsHash<> = HASH<HashedAttributes>; // DefinedType
let _cached_decoder_for_AttribsHash: $.ASN1Decoder<AttribsHash> | null = null;
let _cached_encoder_for_AttribsHash: $.ASN1Encoder<AttribsHash> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttribsHash
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttribsHash} The decoded data structure.
 */
export function _decode_AttribsHash(el: _Element) {
    if (!_cached_decoder_for_AttribsHash) {
        _cached_decoder_for_AttribsHash = _get_decoder_for_HASH<
            HashedAttributes
        >(_decode_HashedAttributes);
    }
    return _cached_decoder_for_AttribsHash(el);
}
/**
 * @summary Encodes a(n) AttribsHash into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttribsHash, encoded as an ASN.1 Element.
 */
export function _encode_AttribsHash(
    value: AttribsHash,
    elGetter: $.ASN1Encoder<AttribsHash>
) {
    if (!_cached_encoder_for_AttribsHash) {
        _cached_encoder_for_AttribsHash = _get_encoder_for_HASH<
            HashedAttributes
        >(_encode_HashedAttributes);
    }
    return _cached_encoder_for_AttribsHash(value, elGetter);
}

/**
 * @summary AttributeIntegrityInfoContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeIntegrityInfoContent ::= SEQUENCE {
 *   scope        Scope,           -- Identifies the attributes protected
 *   signer       Signer OPTIONAL, -- Authority or data originators name
 *   attribsHash  AttribsHash,     -- Hash value of protected attributes
 *   ... }
 * ```
 *
 * @class
 */
export class AttributeIntegrityInfoContent {
    constructor(
        /**
         * @summary `scope`.
         * @public
         * @readonly
         */
        readonly scope: Scope,
        /**
         * @summary `signer`.
         * @public
         * @readonly
         */
        readonly signer: OPTIONAL<Signer>,
        /**
         * @summary `attribsHash`.
         * @public
         * @readonly
         */
        readonly attribsHash: AttribsHash,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeIntegrityInfoContent
     * @description
     *
     * This takes an `object` and converts it to a `AttributeIntegrityInfoContent`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeIntegrityInfoContent`.
     * @returns {AttributeIntegrityInfoContent}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeIntegrityInfoContent]: AttributeIntegrityInfoContent[_K];
            }
        >
    ): AttributeIntegrityInfoContent {
        return new AttributeIntegrityInfoContent(
            _o.scope,
            _o.signer,
            _o.attribsHash,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AttributeIntegrityInfoContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeIntegrityInfoContent: $.ComponentSpec[] = [
    new $.ComponentSpec("scope", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("signer", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "attribsHash",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AttributeIntegrityInfoContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeIntegrityInfoContent: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AttributeIntegrityInfoContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeIntegrityInfoContent: $.ComponentSpec[] = [];
let _cached_decoder_for_AttributeIntegrityInfoContent: $.ASN1Decoder<
    AttributeIntegrityInfoContent
> | null = null;
let _cached_encoder_for_AttributeIntegrityInfoContent: $.ASN1Encoder<
    AttributeIntegrityInfoContent
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeIntegrityInfoContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeIntegrityInfoContent} The decoded data structure.
 */
export function _decode_AttributeIntegrityInfoContent(el: _Element) {
    if (!_cached_decoder_for_AttributeIntegrityInfoContent) {
        _cached_decoder_for_AttributeIntegrityInfoContent = function (
            el: _Element
        ): AttributeIntegrityInfoContent {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let scope!: Scope;
            let signer: OPTIONAL<Signer>;
            let attribsHash!: AttribsHash;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                scope: (_el: _Element): void => {
                    scope = _decode_Scope(_el);
                },
                signer: (_el: _Element): void => {
                    signer = _decode_Signer(_el);
                },
                attribsHash: (_el: _Element): void => {
                    attribsHash = _decode_AttribsHash(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeIntegrityInfoContent,
                _extension_additions_list_spec_for_AttributeIntegrityInfoContent,
                _root_component_type_list_2_spec_for_AttributeIntegrityInfoContent,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeIntegrityInfoContent(
                /* SEQUENCE_CONSTRUCTOR_CALL */ scope,
                signer,
                attribsHash,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeIntegrityInfoContent(el);
}
/**
 * @summary Encodes a(n) AttributeIntegrityInfoContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeIntegrityInfoContent, encoded as an ASN.1 Element.
 */
export function _encode_AttributeIntegrityInfoContent(
    value: AttributeIntegrityInfoContent,
    elGetter: $.ASN1Encoder<AttributeIntegrityInfoContent>
) {
    if (!_cached_encoder_for_AttributeIntegrityInfoContent) {
        _cached_encoder_for_AttributeIntegrityInfoContent = function (
            value: AttributeIntegrityInfoContent,
            elGetter: $.ASN1Encoder<AttributeIntegrityInfoContent>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Scope(value.scope, $.BER),
                            /* IF_ABSENT  */ value.signer === undefined
                                ? undefined
                                : _encode_Signer(value.signer, $.BER),
                            /* REQUIRED   */ _encode_AttribsHash(
                                value.attribsHash,
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
    return _cached_encoder_for_AttributeIntegrityInfoContent(value, elGetter);
}

export type AttributeIntegrityInfo<> = SIGNED<AttributeIntegrityInfoContent>; // DefinedType
let _cached_decoder_for_AttributeIntegrityInfo: $.ASN1Decoder<
    AttributeIntegrityInfo
> | null = null;
let _cached_encoder_for_AttributeIntegrityInfo: $.ASN1Encoder<
    AttributeIntegrityInfo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeIntegrityInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeIntegrityInfo} The decoded data structure.
 */
export function _decode_AttributeIntegrityInfo(el: _Element) {
    if (!_cached_decoder_for_AttributeIntegrityInfo) {
        _cached_decoder_for_AttributeIntegrityInfo = _get_decoder_for_SIGNED<
            AttributeIntegrityInfoContent
        >(_decode_AttributeIntegrityInfoContent);
    }
    return _cached_decoder_for_AttributeIntegrityInfo(el);
}
/**
 * @summary Encodes a(n) AttributeIntegrityInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeIntegrityInfo, encoded as an ASN.1 Element.
 */
export function _encode_AttributeIntegrityInfo(
    value: AttributeIntegrityInfo,
    elGetter: $.ASN1Encoder<AttributeIntegrityInfo>
) {
    if (!_cached_encoder_for_AttributeIntegrityInfo) {
        _cached_encoder_for_AttributeIntegrityInfo = _get_encoder_for_SIGNED<
            AttributeIntegrityInfoContent
        >(_encode_AttributeIntegrityInfoContent);
    }
    return _cached_encoder_for_AttributeIntegrityInfo(value, elGetter);
}

/**
 * @summary id_at_attributeIntegrityInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-attributeIntegrityInfo              OBJECT IDENTIFIER ::= {id-at 57}
 * ```
 *
 * @constant
 */
export const id_at_attributeIntegrityInfo: OBJECT_IDENTIFIER = new _OID(
    [57],
    id_at
);

/**
 * @summary attributeIntegrityInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeIntegrityInfo ATTRIBUTE ::= {
 *   WITH SYNTAX   AttributeIntegrityInfo
 *   SINGLE VALUE  TRUE
 *   ID            id-at-attributeIntegrityInfo }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const attributeIntegrityInfo: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttributeIntegrityInfo,
    },
    encoderFor: {
        "&Type": _encode_AttributeIntegrityInfo,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_at_attributeIntegrityInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_integrityInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-integrityInfo OBJECT IDENTIFIER ::= {id-oc 40}
 * ```
 *
 * @constant
 */
export const id_oc_integrityInfo: OBJECT_IDENTIFIER = new _OID([40], id_oc);

/**
 * @summary integrityInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * integrityInfo OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   KIND          auxiliary
 *   MUST CONTAIN  {attributeIntegrityInfo}
 *   ID            id-oc-integrityInfo }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const integrityInfo: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_oc_integrityInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary AttributeTypeValueContexts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeTypeValueContexts ::= SEQUENCE {
 *   type         ATTRIBUTE.&id({SupportedAttributes}),
 *   value        ATTRIBUTE.&Type({SupportedAttributes}{@type}),
 *   contextList  SET SIZE (1..MAX) OF Context OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class AttributeTypeValueContexts {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: _Element,
        /**
         * @summary `contextList`.
         * @public
         * @readonly
         */
        readonly contextList: OPTIONAL<Context[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeTypeValueContexts
     * @description
     *
     * This takes an `object` and converts it to a `AttributeTypeValueContexts`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeTypeValueContexts`.
     * @returns {AttributeTypeValueContexts}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeTypeValueContexts]: AttributeTypeValueContexts[_K];
            }
        >
    ): AttributeTypeValueContexts {
        return new AttributeTypeValueContexts(
            _o.type_,
            _o.value,
            _o.contextList,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AttributeTypeValueContexts
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeTypeValueContexts: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("value", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "contextList",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AttributeTypeValueContexts
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeTypeValueContexts: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AttributeTypeValueContexts
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeTypeValueContexts: $.ComponentSpec[] = [];
let _cached_decoder_for_AttributeTypeValueContexts: $.ASN1Decoder<
    AttributeTypeValueContexts
> | null = null;
let _cached_encoder_for_AttributeTypeValueContexts: $.ASN1Encoder<
    AttributeTypeValueContexts
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypeValueContexts
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeTypeValueContexts} The decoded data structure.
 */
export function _decode_AttributeTypeValueContexts(el: _Element) {
    if (!_cached_decoder_for_AttributeTypeValueContexts) {
        _cached_decoder_for_AttributeTypeValueContexts = function (
            el: _Element
        ): AttributeTypeValueContexts {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let type_!: OBJECT_IDENTIFIER;
            let value!: _Element;
            let contextList: OPTIONAL<Context[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                type: (_el: _Element): void => {
                    type_ = $._decodeObjectIdentifier(_el);
                },
                value: (_el: _Element): void => {
                    value = $._decodeAny(_el);
                },
                contextList: (_el: _Element): void => {
                    contextList = $._decodeSetOf<Context>(
                        () => _decode_Context
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeTypeValueContexts,
                _extension_additions_list_spec_for_AttributeTypeValueContexts,
                _root_component_type_list_2_spec_for_AttributeTypeValueContexts,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeTypeValueContexts(
                /* SEQUENCE_CONSTRUCTOR_CALL */ type_,
                value,
                contextList,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeTypeValueContexts(el);
}
/**
 * @summary Encodes a(n) AttributeTypeValueContexts into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypeValueContexts, encoded as an ASN.1 Element.
 */
export function _encode_AttributeTypeValueContexts(
    value: AttributeTypeValueContexts,
    elGetter: $.ASN1Encoder<AttributeTypeValueContexts>
) {
    if (!_cached_encoder_for_AttributeTypeValueContexts) {
        _cached_encoder_for_AttributeTypeValueContexts = function (
            value: AttributeTypeValueContexts,
            elGetter: $.ASN1Encoder<AttributeTypeValueContexts>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.type_,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeAny(value.value, $.BER),
                            /* IF_ABSENT  */ value.contextList === undefined
                                ? undefined
                                : $._encodeSetOf<Context>(
                                      () => _encode_Context,
                                      $.BER
                                  )(value.contextList, $.BER),
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
    return _cached_encoder_for_AttributeTypeValueContexts(value, elGetter);
}

export type AVIHash<> = HASH<AttributeTypeValueContexts>; // DefinedType
let _cached_decoder_for_AVIHash: $.ASN1Decoder<AVIHash> | null = null;
let _cached_encoder_for_AVIHash: $.ASN1Encoder<AVIHash> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AVIHash
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AVIHash} The decoded data structure.
 */
export function _decode_AVIHash(el: _Element) {
    if (!_cached_decoder_for_AVIHash) {
        _cached_decoder_for_AVIHash = _get_decoder_for_HASH<
            AttributeTypeValueContexts
        >(_decode_AttributeTypeValueContexts);
    }
    return _cached_decoder_for_AVIHash(el);
}
/**
 * @summary Encodes a(n) AVIHash into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AVIHash, encoded as an ASN.1 Element.
 */
export function _encode_AVIHash(
    value: AVIHash,
    elGetter: $.ASN1Encoder<AVIHash>
) {
    if (!_cached_encoder_for_AVIHash) {
        _cached_encoder_for_AVIHash = _get_encoder_for_HASH<
            AttributeTypeValueContexts
        >(_encode_AttributeTypeValueContexts);
    }
    return _cached_encoder_for_AVIHash(value, elGetter);
}

/**
 * @summary AttributeValueIntegrityInfoContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeValueIntegrityInfoContent ::= SEQUENCE {
 *   signer   Signer OPTIONAL, -- Authority or data originators name
 *   aVIHash  AVIHash,         -- Hash value of protected attribute
 *   ... }
 * ```
 *
 * @class
 */
export class AttributeValueIntegrityInfoContent {
    constructor(
        /**
         * @summary `signer`.
         * @public
         * @readonly
         */
        readonly signer: OPTIONAL<Signer>,
        /**
         * @summary `aVIHash`.
         * @public
         * @readonly
         */
        readonly aVIHash: AVIHash,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeValueIntegrityInfoContent
     * @description
     *
     * This takes an `object` and converts it to a `AttributeValueIntegrityInfoContent`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeValueIntegrityInfoContent`.
     * @returns {AttributeValueIntegrityInfoContent}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeValueIntegrityInfoContent]: AttributeValueIntegrityInfoContent[_K];
            }
        >
    ): AttributeValueIntegrityInfoContent {
        return new AttributeValueIntegrityInfoContent(
            _o.signer,
            _o.aVIHash,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AttributeValueIntegrityInfoContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeValueIntegrityInfoContent: $.ComponentSpec[] = [
    new $.ComponentSpec("signer", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "aVIHash",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AttributeValueIntegrityInfoContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeValueIntegrityInfoContent: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AttributeValueIntegrityInfoContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeValueIntegrityInfoContent: $.ComponentSpec[] = [];
let _cached_decoder_for_AttributeValueIntegrityInfoContent: $.ASN1Decoder<
    AttributeValueIntegrityInfoContent
> | null = null;
let _cached_encoder_for_AttributeValueIntegrityInfoContent: $.ASN1Encoder<
    AttributeValueIntegrityInfoContent
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValueIntegrityInfoContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeValueIntegrityInfoContent} The decoded data structure.
 */
export function _decode_AttributeValueIntegrityInfoContent(el: _Element) {
    if (!_cached_decoder_for_AttributeValueIntegrityInfoContent) {
        _cached_decoder_for_AttributeValueIntegrityInfoContent = function (
            el: _Element
        ): AttributeValueIntegrityInfoContent {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let signer: OPTIONAL<Signer>;
            let aVIHash!: AVIHash;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                signer: (_el: _Element): void => {
                    signer = _decode_Signer(_el);
                },
                aVIHash: (_el: _Element): void => {
                    aVIHash = _decode_AVIHash(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeValueIntegrityInfoContent,
                _extension_additions_list_spec_for_AttributeValueIntegrityInfoContent,
                _root_component_type_list_2_spec_for_AttributeValueIntegrityInfoContent,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeValueIntegrityInfoContent(
                /* SEQUENCE_CONSTRUCTOR_CALL */ signer,
                aVIHash,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeValueIntegrityInfoContent(el);
}
/**
 * @summary Encodes a(n) AttributeValueIntegrityInfoContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValueIntegrityInfoContent, encoded as an ASN.1 Element.
 */
export function _encode_AttributeValueIntegrityInfoContent(
    value: AttributeValueIntegrityInfoContent,
    elGetter: $.ASN1Encoder<AttributeValueIntegrityInfoContent>
) {
    if (!_cached_encoder_for_AttributeValueIntegrityInfoContent) {
        _cached_encoder_for_AttributeValueIntegrityInfoContent = function (
            value: AttributeValueIntegrityInfoContent,
            elGetter: $.ASN1Encoder<AttributeValueIntegrityInfoContent>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.signer === undefined
                                ? undefined
                                : _encode_Signer(value.signer, $.BER),
                            /* REQUIRED   */ _encode_AVIHash(
                                value.aVIHash,
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
    return _cached_encoder_for_AttributeValueIntegrityInfoContent(
        value,
        elGetter
    );
}

export type AttributeValueIntegrityInfo<> = SIGNED<
    AttributeValueIntegrityInfoContent
>; // DefinedType
let _cached_decoder_for_AttributeValueIntegrityInfo: $.ASN1Decoder<
    AttributeValueIntegrityInfo
> | null = null;
let _cached_encoder_for_AttributeValueIntegrityInfo: $.ASN1Encoder<
    AttributeValueIntegrityInfo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValueIntegrityInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeValueIntegrityInfo} The decoded data structure.
 */
export function _decode_AttributeValueIntegrityInfo(el: _Element) {
    if (!_cached_decoder_for_AttributeValueIntegrityInfo) {
        _cached_decoder_for_AttributeValueIntegrityInfo = _get_decoder_for_SIGNED<
            AttributeValueIntegrityInfoContent
        >(_decode_AttributeValueIntegrityInfoContent);
    }
    return _cached_decoder_for_AttributeValueIntegrityInfo(el);
}
/**
 * @summary Encodes a(n) AttributeValueIntegrityInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValueIntegrityInfo, encoded as an ASN.1 Element.
 */
export function _encode_AttributeValueIntegrityInfo(
    value: AttributeValueIntegrityInfo,
    elGetter: $.ASN1Encoder<AttributeValueIntegrityInfo>
) {
    if (!_cached_encoder_for_AttributeValueIntegrityInfo) {
        _cached_encoder_for_AttributeValueIntegrityInfo = _get_encoder_for_SIGNED<
            AttributeValueIntegrityInfoContent
        >(_encode_AttributeValueIntegrityInfoContent);
    }
    return _cached_encoder_for_AttributeValueIntegrityInfo(value, elGetter);
}

/**
 * @summary id_avc_attributeValueIntegrityInfoContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-avc-attributeValueIntegrityInfoContext OBJECT IDENTIFIER ::= {id-avc 4}
 * ```
 *
 * @constant
 */
export const id_avc_attributeValueIntegrityInfoContext: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_avc
);

/**
 * @summary attributeValueIntegrityInfoContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeValueIntegrityInfoContext CONTEXT ::= {
 *   WITH SYNTAX  AttributeValueIntegrityInfo
 *   ID           id-avc-attributeValueIntegrityInfoContext }
 * ```
 *
 * @constant
 * @type {CONTEXT}
 * @implements {CONTEXT}
 */
export const attributeValueIntegrityInfoContext: CONTEXT = {
    class: "CONTEXT",
    decoderFor: {
        "&Type": _decode_AttributeValueIntegrityInfo,
        "&Assertion": undefined,
    },
    encoderFor: {
        "&Type": _encode_AttributeValueIntegrityInfo,
        "&Assertion": undefined,
    },
    "&id": id_avc_attributeValueIntegrityInfoContext /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Assertion": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&absentMatch": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* END_MODULE EnhancedSecurity */
/* eslint-enable */
