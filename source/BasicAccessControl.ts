/**
 * @module BasicAccessControl
 * @summary The ASN.1 module `BasicAccessControl`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.basicAccessControl.9
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
    BOOLEAN,
    ENUMERATED,
    EXTERNAL,
    INTEGER,
    NULL,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Filter,
    _decode_Filter,
    _encode_Filter,
} from "./DirectoryAbstractService";
import * as InformationFramework from "./InformationFramework";
import {
    ATTRIBUTE,
    AttributeType,
    AttributeTypeAndValue,
    ContextAssertion,
    objectIdentifierMatch,
    Refinement,
    SubtreeSpecification,
    _decode_AttributeType,
    _decode_AttributeTypeAndValue,
    _decode_ContextAssertion,
    _decode_Refinement,
    _decode_SubtreeSpecification,
    _encode_AttributeType,
    _encode_AttributeTypeAndValue,
    _encode_ContextAssertion,
    _encode_Refinement,
    _encode_SubtreeSpecification,
} from "./InformationFramework";
import {
    directoryStringFirstComponentMatch,
    NameAndOptionalUID,
    UnboundedDirectoryString,
    _decode_NameAndOptionalUID,
    _decode_UnboundedDirectoryString,
    _encode_NameAndOptionalUID,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
import { id_aca, id_acScheme } from "./UsefulDefinitions";
export {
    Filter,
    _decode_Filter,
    _encode_Filter,
} from "./DirectoryAbstractService";
export {
    ATTRIBUTE,
    AttributeType,
    AttributeTypeAndValue,
    ContextAssertion,
    DistinguishedName,
    MATCHING_RULE,
    objectIdentifierMatch,
    Refinement,
    SubtreeSpecification,
    SupportedAttributes,
    _decode_AttributeType,
    _decode_AttributeTypeAndValue,
    _decode_ContextAssertion,
    _decode_DistinguishedName,
    _decode_Refinement,
    _decode_SubtreeSpecification,
    _encode_AttributeType,
    _encode_AttributeTypeAndValue,
    _encode_ContextAssertion,
    _encode_DistinguishedName,
    _encode_Refinement,
    _encode_SubtreeSpecification,
} from "./InformationFramework";
export {
    directoryStringFirstComponentMatch,
    NameAndOptionalUID,
    UnboundedDirectoryString,
    UniqueIdentifier,
    _decode_NameAndOptionalUID,
    _decode_UnboundedDirectoryString,
    _decode_UniqueIdentifier,
    _encode_NameAndOptionalUID,
    _encode_UnboundedDirectoryString,
    _encode_UniqueIdentifier,
} from "./SelectedAttributeTypes";
export { id_aca, id_acScheme } from "./UsefulDefinitions";

/**
 * @summary id_aca_accessControlScheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aca-accessControlScheme     OBJECT IDENTIFIER ::= {id-aca 1}
 * ```
 *
 * @constant
 */
export const id_aca_accessControlScheme: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_aca
);

/**
 * @summary accessControlScheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessControlScheme ATTRIBUTE ::= {
 *   WITH SYNTAX             OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE  objectIdentifierMatch
 *   SINGLE VALUE            TRUE
 *   USAGE                   directoryOperation
 *   ID                      id-aca-accessControlScheme }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const accessControlScheme: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_aca_accessControlScheme /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary Precedence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Precedence  ::=  INTEGER(0..255,...)
 * ```
 */
export type Precedence = INTEGER;
let _cached_decoder_for_Precedence: $.ASN1Decoder<Precedence> | null = null;
let _cached_encoder_for_Precedence: $.ASN1Encoder<Precedence> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Precedence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Precedence} The decoded data structure.
 */
export function _decode_Precedence(el: _Element) {
    if (!_cached_decoder_for_Precedence) {
        _cached_decoder_for_Precedence = $._decodeInteger;
    }
    return _cached_decoder_for_Precedence(el);
}
/**
 * @summary Encodes a(n) Precedence into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Precedence, encoded as an ASN.1 Element.
 */
export function _encode_Precedence(
    value: Precedence,
    elGetter: $.ASN1Encoder<Precedence>
) {
    if (!_cached_encoder_for_Precedence) {
        _cached_encoder_for_Precedence = $._encodeInteger;
    }
    return _cached_encoder_for_Precedence(value, elGetter);
}

/**
 * @summary AuthenticationLevel_basicLevels_level
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationLevel-basicLevels-level ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_AuthenticationLevel_basicLevels_level {
    none = 0,
    simple = 1,
    strong = 2,
}
/**
 * @summary AuthenticationLevel_basicLevels_level
 */
export type AuthenticationLevel_basicLevels_level =
    | _enum_for_AuthenticationLevel_basicLevels_level
    | ENUMERATED;
/**
 * @summary AuthenticationLevel_basicLevels_level_none
 * @constant
 * @type {number}
 */
export const AuthenticationLevel_basicLevels_level_none: AuthenticationLevel_basicLevels_level = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AuthenticationLevel_basicLevels_level_simple
 * @constant
 * @type {number}
 */
export const AuthenticationLevel_basicLevels_level_simple: AuthenticationLevel_basicLevels_level = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AuthenticationLevel_basicLevels_level_strong
 * @constant
 * @type {number}
 */
export const AuthenticationLevel_basicLevels_level_strong: AuthenticationLevel_basicLevels_level = 2; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_AuthenticationLevel_basicLevels_level: $.ASN1Decoder<
    AuthenticationLevel_basicLevels_level
> | null = null;
let _cached_encoder_for_AuthenticationLevel_basicLevels_level: $.ASN1Encoder<
    AuthenticationLevel_basicLevels_level
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationLevel_basicLevels_level
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticationLevel_basicLevels_level} The decoded data structure.
 */
export function _decode_AuthenticationLevel_basicLevels_level(el: _Element) {
    if (!_cached_decoder_for_AuthenticationLevel_basicLevels_level) {
        _cached_decoder_for_AuthenticationLevel_basicLevels_level =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_AuthenticationLevel_basicLevels_level(el);
}
/**
 * @summary Encodes a(n) AuthenticationLevel_basicLevels_level into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationLevel_basicLevels_level, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticationLevel_basicLevels_level(
    value: AuthenticationLevel_basicLevels_level,
    elGetter: $.ASN1Encoder<AuthenticationLevel_basicLevels_level>
) {
    if (!_cached_encoder_for_AuthenticationLevel_basicLevels_level) {
        _cached_encoder_for_AuthenticationLevel_basicLevels_level =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_AuthenticationLevel_basicLevels_level(
        value,
        elGetter
    );
}

/**
 * @summary AuthenticationLevel_basicLevels
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationLevel-basicLevels ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class AuthenticationLevel_basicLevels {
    constructor(
        /**
         * @summary `level`.
         * @public
         * @readonly
         */
        readonly level: AuthenticationLevel_basicLevels_level,
        /**
         * @summary `localQualifier`.
         * @public
         * @readonly
         */
        readonly localQualifier: OPTIONAL<INTEGER>,
        /**
         * @summary `signed`.
         * @public
         * @readonly
         */
        readonly signed: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AuthenticationLevel_basicLevels
     * @description
     *
     * This takes an `object` and converts it to a `AuthenticationLevel_basicLevels`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthenticationLevel_basicLevels`.
     * @returns {AuthenticationLevel_basicLevels}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AuthenticationLevel_basicLevels]: AuthenticationLevel_basicLevels[_K];
            }
        >
    ): AuthenticationLevel_basicLevels {
        return new AuthenticationLevel_basicLevels(
            _o.level,
            _o.localQualifier,
            _o.signed,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `signed`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_signed() {
        return false;
    }
    /**
     * @summary The enum used as the type of the component `level`
     * @public
     * @static
     */

    public static _enum_for_level = _enum_for_AuthenticationLevel_basicLevels_level;
}
/**
 * @summary The Leading Root Component Types of AuthenticationLevel_basicLevels
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AuthenticationLevel_basicLevels: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "level",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "localQualifier",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signed",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AuthenticationLevel_basicLevels
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AuthenticationLevel_basicLevels: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AuthenticationLevel_basicLevels
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AuthenticationLevel_basicLevels: $.ComponentSpec[] = [];
let _cached_decoder_for_AuthenticationLevel_basicLevels: $.ASN1Decoder<
    AuthenticationLevel_basicLevels
> | null = null;
let _cached_encoder_for_AuthenticationLevel_basicLevels: $.ASN1Encoder<
    AuthenticationLevel_basicLevels
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationLevel_basicLevels
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticationLevel_basicLevels} The decoded data structure.
 */
export function _decode_AuthenticationLevel_basicLevels(el: _Element) {
    if (!_cached_decoder_for_AuthenticationLevel_basicLevels) {
        _cached_decoder_for_AuthenticationLevel_basicLevels = function (
            el: _Element
        ): AuthenticationLevel_basicLevels {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let level!: AuthenticationLevel_basicLevels_level;
            let localQualifier: OPTIONAL<INTEGER>;
            let signed: OPTIONAL<BOOLEAN> =
                AuthenticationLevel_basicLevels._default_value_for_signed;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                level: (_el: _Element): void => {
                    level = _decode_AuthenticationLevel_basicLevels_level(_el);
                },
                localQualifier: (_el: _Element): void => {
                    localQualifier = $._decodeInteger(_el);
                },
                signed: (_el: _Element): void => {
                    signed = $._decodeBoolean(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AuthenticationLevel_basicLevels,
                _extension_additions_list_spec_for_AuthenticationLevel_basicLevels,
                _root_component_type_list_2_spec_for_AuthenticationLevel_basicLevels,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AuthenticationLevel_basicLevels(
                /* SEQUENCE_CONSTRUCTOR_CALL */ level,
                localQualifier,
                signed,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AuthenticationLevel_basicLevels(el);
}
/**
 * @summary Encodes a(n) AuthenticationLevel_basicLevels into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationLevel_basicLevels, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticationLevel_basicLevels(
    value: AuthenticationLevel_basicLevels,
    elGetter: $.ASN1Encoder<AuthenticationLevel_basicLevels>
) {
    if (!_cached_encoder_for_AuthenticationLevel_basicLevels) {
        _cached_encoder_for_AuthenticationLevel_basicLevels = function (
            value: AuthenticationLevel_basicLevels,
            elGetter: $.ASN1Encoder<AuthenticationLevel_basicLevels>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AuthenticationLevel_basicLevels_level(
                                value.level,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.localQualifier === undefined
                                ? undefined
                                : $._encodeInteger(value.localQualifier, $.BER),
                            /* IF_DEFAULT */ value.signed === undefined ||
                            $.deepEq(
                                value.signed,
                                AuthenticationLevel_basicLevels._default_value_for_signed
                            )
                                ? undefined
                                : $._encodeBoolean(value.signed, $.BER),
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
    return _cached_encoder_for_AuthenticationLevel_basicLevels(value, elGetter);
}

/**
 * @summary AuthenticationLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationLevel  ::=  CHOICE {
 *   basicLevels     SEQUENCE {
 *     level           ENUMERATED {none(0), simple(1), strong(2),...},
 *     localQualifier  INTEGER OPTIONAL,
 *     signed          BOOLEAN DEFAULT FALSE,
 *     ...},
 *   other           EXTERNAL,
 *   ... }
 * ```
 */
export type AuthenticationLevel =
    | { basicLevels: AuthenticationLevel_basicLevels } /* CHOICE_ALT_ROOT */
    | { other: EXTERNAL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_AuthenticationLevel: $.ASN1Decoder<
    AuthenticationLevel
> | null = null;
let _cached_encoder_for_AuthenticationLevel: $.ASN1Encoder<
    AuthenticationLevel
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationLevel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticationLevel} The decoded data structure.
 */
export function _decode_AuthenticationLevel(el: _Element) {
    if (!_cached_decoder_for_AuthenticationLevel) {
        _cached_decoder_for_AuthenticationLevel = $._decode_extensible_choice<
            AuthenticationLevel
        >({
            "UNIVERSAL 16": [
                "basicLevels",
                _decode_AuthenticationLevel_basicLevels,
            ],
            "UNIVERSAL 8": ["other", $._decodeExternal],
        });
    }
    return _cached_decoder_for_AuthenticationLevel(el);
}
/**
 * @summary Encodes a(n) AuthenticationLevel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationLevel, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticationLevel(
    value: AuthenticationLevel,
    elGetter: $.ASN1Encoder<AuthenticationLevel>
) {
    if (!_cached_encoder_for_AuthenticationLevel) {
        _cached_encoder_for_AuthenticationLevel = $._encode_choice<
            AuthenticationLevel
        >(
            {
                basicLevels: _encode_AuthenticationLevel_basicLevels,
                other: $._encodeExternal,
            },
            $.BER
        );
    }
    return _cached_encoder_for_AuthenticationLevel(value, elGetter);
}

/**
 * @summary MaxValueCount
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaxValueCount ::= SEQUENCE {
 *   type      AttributeType,
 *   maxCount  INTEGER,
 *   ... }
 * ```
 *
 * @class
 */
export class MaxValueCount {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AttributeType,
        /**
         * @summary `maxCount`.
         * @public
         * @readonly
         */
        readonly maxCount: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MaxValueCount
     * @description
     *
     * This takes an `object` and converts it to a `MaxValueCount`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MaxValueCount`.
     * @returns {MaxValueCount}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof MaxValueCount]: MaxValueCount[_K] }>
    ): MaxValueCount {
        return new MaxValueCount(
            _o.type_,
            _o.maxCount,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of MaxValueCount
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MaxValueCount: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "maxCount",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of MaxValueCount
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MaxValueCount: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of MaxValueCount
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MaxValueCount: $.ComponentSpec[] = [];
let _cached_decoder_for_MaxValueCount: $.ASN1Decoder<
    MaxValueCount
> | null = null;
let _cached_encoder_for_MaxValueCount: $.ASN1Encoder<
    MaxValueCount
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MaxValueCount
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaxValueCount} The decoded data structure.
 */
export function _decode_MaxValueCount(el: _Element) {
    if (!_cached_decoder_for_MaxValueCount) {
        _cached_decoder_for_MaxValueCount = function (
            el: _Element
        ): MaxValueCount {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "MaxValueCount contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "maxCount";
            let type_!: AttributeType;
            let maxCount!: INTEGER;
            type_ = _decode_AttributeType(sequence[0]);
            maxCount = $._decodeInteger(sequence[1]);
            return new MaxValueCount(type_, maxCount, sequence.slice(2));
        };
    }
    return _cached_decoder_for_MaxValueCount(el);
}
/**
 * @summary Encodes a(n) MaxValueCount into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaxValueCount, encoded as an ASN.1 Element.
 */
export function _encode_MaxValueCount(
    value: MaxValueCount,
    elGetter: $.ASN1Encoder<MaxValueCount>
) {
    if (!_cached_encoder_for_MaxValueCount) {
        _cached_encoder_for_MaxValueCount = function (
            value: MaxValueCount,
            elGetter: $.ASN1Encoder<MaxValueCount>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeType(
                                value.type_,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeInteger(
                                value.maxCount,
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
    return _cached_encoder_for_MaxValueCount(value, elGetter);
}

/**
 * @summary RestrictedValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RestrictedValue ::= SEQUENCE {
 *   type      AttributeType,
 *   valuesIn  AttributeType,
 *   ... }
 * ```
 *
 * @class
 */
export class RestrictedValue {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AttributeType,
        /**
         * @summary `valuesIn`.
         * @public
         * @readonly
         */
        readonly valuesIn: AttributeType,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RestrictedValue
     * @description
     *
     * This takes an `object` and converts it to a `RestrictedValue`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RestrictedValue`.
     * @returns {RestrictedValue}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof RestrictedValue]: RestrictedValue[_K] }>
    ): RestrictedValue {
        return new RestrictedValue(
            _o.type_,
            _o.valuesIn,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of RestrictedValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RestrictedValue: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "valuesIn",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of RestrictedValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RestrictedValue: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of RestrictedValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RestrictedValue: $.ComponentSpec[] = [];
let _cached_decoder_for_RestrictedValue: $.ASN1Decoder<
    RestrictedValue
> | null = null;
let _cached_encoder_for_RestrictedValue: $.ASN1Encoder<
    RestrictedValue
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RestrictedValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RestrictedValue} The decoded data structure.
 */
export function _decode_RestrictedValue(el: _Element) {
    if (!_cached_decoder_for_RestrictedValue) {
        _cached_decoder_for_RestrictedValue = function (
            el: _Element
        ): RestrictedValue {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "RestrictedValue contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "valuesIn";
            let type_!: AttributeType;
            let valuesIn!: AttributeType;
            type_ = _decode_AttributeType(sequence[0]);
            valuesIn = _decode_AttributeType(sequence[1]);
            return new RestrictedValue(type_, valuesIn, sequence.slice(2));
        };
    }
    return _cached_decoder_for_RestrictedValue(el);
}
/**
 * @summary Encodes a(n) RestrictedValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RestrictedValue, encoded as an ASN.1 Element.
 */
export function _encode_RestrictedValue(
    value: RestrictedValue,
    elGetter: $.ASN1Encoder<RestrictedValue>
) {
    if (!_cached_encoder_for_RestrictedValue) {
        _cached_encoder_for_RestrictedValue = function (
            value: RestrictedValue,
            elGetter: $.ASN1Encoder<RestrictedValue>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeType(
                                value.type_,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AttributeType(
                                value.valuesIn,
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
    return _cached_encoder_for_RestrictedValue(value, elGetter);
}

/**
 * @summary ProtectedItems
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectedItems ::= SEQUENCE {
 *   entry                          [0]  NULL OPTIONAL,
 *   allUserAttributeTypes          [1]  NULL OPTIONAL,
 *   attributeType                  [2]  SET SIZE (1..MAX) OF AttributeType
 *                                         OPTIONAL,
 *   allAttributeValues             [3]  SET SIZE (1..MAX) OF AttributeType
 *                                         OPTIONAL,
 *   allUserAttributeTypesAndValues [4]  NULL OPTIONAL,
 *   attributeValue                 [5]  SET SIZE (1..MAX) OF AttributeTypeAndValue
 *                                         OPTIONAL,
 *   selfValue                      [6]  SET SIZE (1..MAX) OF AttributeType
 *                                         OPTIONAL,
 *   rangeOfValues                  [7]  Filter OPTIONAL,
 *   maxValueCount                  [8]  SET SIZE (1..MAX) OF MaxValueCount
 *                                         OPTIONAL,
 *   maxImmSub                      [9]  INTEGER OPTIONAL,
 *   restrictedBy                   [10] SET SIZE (1..MAX) OF RestrictedValue
 *                                         OPTIONAL,
 *   contexts                       [11] SET SIZE (1..MAX) OF ContextAssertion
 *                                         OPTIONAL,
 *   classes                        [12] Refinement OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ProtectedItems {
    constructor(
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry: OPTIONAL<NULL>,
        /**
         * @summary `allUserAttributeTypes`.
         * @public
         * @readonly
         */
        readonly allUserAttributeTypes: OPTIONAL<NULL>,
        /**
         * @summary `attributeType`.
         * @public
         * @readonly
         */
        readonly attributeType: OPTIONAL<AttributeType[]>,
        /**
         * @summary `allAttributeValues`.
         * @public
         * @readonly
         */
        readonly allAttributeValues: OPTIONAL<AttributeType[]>,
        /**
         * @summary `allUserAttributeTypesAndValues`.
         * @public
         * @readonly
         */
        readonly allUserAttributeTypesAndValues: OPTIONAL<NULL>,
        /**
         * @summary `attributeValue`.
         * @public
         * @readonly
         */
        readonly attributeValue: OPTIONAL<AttributeTypeAndValue[]>,
        /**
         * @summary `selfValue`.
         * @public
         * @readonly
         */
        readonly selfValue: OPTIONAL<AttributeType[]>,
        /**
         * @summary `rangeOfValues`.
         * @public
         * @readonly
         */
        readonly rangeOfValues: OPTIONAL<Filter>,
        /**
         * @summary `maxValueCount`.
         * @public
         * @readonly
         */
        readonly maxValueCount: OPTIONAL<MaxValueCount[]>,
        /**
         * @summary `maxImmSub`.
         * @public
         * @readonly
         */
        readonly maxImmSub: OPTIONAL<INTEGER>,
        /**
         * @summary `restrictedBy`.
         * @public
         * @readonly
         */
        readonly restrictedBy: OPTIONAL<RestrictedValue[]>,
        /**
         * @summary `contexts`.
         * @public
         * @readonly
         */
        readonly contexts: OPTIONAL<ContextAssertion[]>,
        /**
         * @summary `classes`.
         * @public
         * @readonly
         */
        readonly classes: OPTIONAL<Refinement>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ProtectedItems
     * @description
     *
     * This takes an `object` and converts it to a `ProtectedItems`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtectedItems`.
     * @returns {ProtectedItems}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ProtectedItems]: ProtectedItems[_K] }>
    ): ProtectedItems {
        return new ProtectedItems(
            _o.entry,
            _o.allUserAttributeTypes,
            _o.attributeType,
            _o.allAttributeValues,
            _o.allUserAttributeTypesAndValues,
            _o.attributeValue,
            _o.selfValue,
            _o.rangeOfValues,
            _o.maxValueCount,
            _o.maxImmSub,
            _o.restrictedBy,
            _o.contexts,
            _o.classes,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ProtectedItems
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtectedItems: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "entry",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "allUserAttributeTypes",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributeType",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "allAttributeValues",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "allUserAttributeTypesAndValues",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributeValue",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "selfValue",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "rangeOfValues",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "maxValueCount",
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "maxImmSub",
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "restrictedBy",
        true,
        $.hasTag(_TagClass.context, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contexts",
        true,
        $.hasTag(_TagClass.context, 11),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "classes",
        true,
        $.hasTag(_TagClass.context, 12),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ProtectedItems
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtectedItems: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ProtectedItems
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtectedItems: $.ComponentSpec[] = [];
let _cached_decoder_for_ProtectedItems: $.ASN1Decoder<
    ProtectedItems
> | null = null;
let _cached_encoder_for_ProtectedItems: $.ASN1Encoder<
    ProtectedItems
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectedItems
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectedItems} The decoded data structure.
 */
export function _decode_ProtectedItems(el: _Element) {
    if (!_cached_decoder_for_ProtectedItems) {
        _cached_decoder_for_ProtectedItems = function (
            el: _Element
        ): ProtectedItems {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let entry: OPTIONAL<NULL>;
            let allUserAttributeTypes: OPTIONAL<NULL>;
            let attributeType: OPTIONAL<AttributeType[]>;
            let allAttributeValues: OPTIONAL<AttributeType[]>;
            let allUserAttributeTypesAndValues: OPTIONAL<NULL>;
            let attributeValue: OPTIONAL<AttributeTypeAndValue[]>;
            let selfValue: OPTIONAL<AttributeType[]>;
            let rangeOfValues: OPTIONAL<Filter>;
            let maxValueCount: OPTIONAL<MaxValueCount[]>;
            let maxImmSub: OPTIONAL<INTEGER>;
            let restrictedBy: OPTIONAL<RestrictedValue[]>;
            let contexts: OPTIONAL<ContextAssertion[]>;
            let classes: OPTIONAL<Refinement>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                entry: (_el: _Element): void => {
                    entry = $._decode_explicit<NULL>(() => $._decodeNull)(_el);
                },
                allUserAttributeTypes: (_el: _Element): void => {
                    allUserAttributeTypes = $._decode_explicit<NULL>(
                        () => $._decodeNull
                    )(_el);
                },
                attributeType: (_el: _Element): void => {
                    attributeType = $._decode_explicit<AttributeType[]>(() =>
                        $._decodeSetOf<AttributeType>(
                            () => _decode_AttributeType
                        )
                    )(_el);
                },
                allAttributeValues: (_el: _Element): void => {
                    allAttributeValues = $._decode_explicit<AttributeType[]>(
                        () =>
                            $._decodeSetOf<AttributeType>(
                                () => _decode_AttributeType
                            )
                    )(_el);
                },
                allUserAttributeTypesAndValues: (_el: _Element): void => {
                    allUserAttributeTypesAndValues = $._decode_explicit<NULL>(
                        () => $._decodeNull
                    )(_el);
                },
                attributeValue: (_el: _Element): void => {
                    attributeValue = $._decode_explicit<
                        AttributeTypeAndValue[]
                    >(() =>
                        $._decodeSetOf<AttributeTypeAndValue>(
                            () => _decode_AttributeTypeAndValue
                        )
                    )(_el);
                },
                selfValue: (_el: _Element): void => {
                    selfValue = $._decode_explicit<AttributeType[]>(() =>
                        $._decodeSetOf<AttributeType>(
                            () => _decode_AttributeType
                        )
                    )(_el);
                },
                rangeOfValues: (_el: _Element): void => {
                    rangeOfValues = $._decode_explicit<Filter>(
                        () => _decode_Filter
                    )(_el);
                },
                maxValueCount: (_el: _Element): void => {
                    maxValueCount = $._decode_explicit<MaxValueCount[]>(() =>
                        $._decodeSetOf<MaxValueCount>(
                            () => _decode_MaxValueCount
                        )
                    )(_el);
                },
                maxImmSub: (_el: _Element): void => {
                    maxImmSub = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                restrictedBy: (_el: _Element): void => {
                    restrictedBy = $._decode_explicit<RestrictedValue[]>(() =>
                        $._decodeSetOf<RestrictedValue>(
                            () => _decode_RestrictedValue
                        )
                    )(_el);
                },
                contexts: (_el: _Element): void => {
                    contexts = $._decode_explicit<ContextAssertion[]>(() =>
                        $._decodeSetOf<ContextAssertion>(
                            () => _decode_ContextAssertion
                        )
                    )(_el);
                },
                classes: (_el: _Element): void => {
                    classes = $._decode_explicit<Refinement>(
                        () => _decode_Refinement
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ProtectedItems,
                _extension_additions_list_spec_for_ProtectedItems,
                _root_component_type_list_2_spec_for_ProtectedItems,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ProtectedItems(
                /* SEQUENCE_CONSTRUCTOR_CALL */ entry,
                allUserAttributeTypes,
                attributeType,
                allAttributeValues,
                allUserAttributeTypesAndValues,
                attributeValue,
                selfValue,
                rangeOfValues,
                maxValueCount,
                maxImmSub,
                restrictedBy,
                contexts,
                classes,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ProtectedItems(el);
}
/**
 * @summary Encodes a(n) ProtectedItems into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectedItems, encoded as an ASN.1 Element.
 */
export function _encode_ProtectedItems(
    value: ProtectedItems,
    elGetter: $.ASN1Encoder<ProtectedItems>
) {
    if (!_cached_encoder_for_ProtectedItems) {
        _cached_encoder_for_ProtectedItems = function (
            value: ProtectedItems,
            elGetter: $.ASN1Encoder<ProtectedItems>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.entry === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeNull,
                                      $.BER
                                  )(value.entry, $.BER),
                            /* IF_ABSENT  */ value.allUserAttributeTypes ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeNull,
                                      $.BER
                                  )(value.allUserAttributeTypes, $.BER),
                            /* IF_ABSENT  */ value.attributeType === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<AttributeType>(
                                              () => _encode_AttributeType,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.attributeType, $.BER),
                            /* IF_ABSENT  */ value.allAttributeValues ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSetOf<AttributeType>(
                                              () => _encode_AttributeType,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.allAttributeValues, $.BER),
                            /* IF_ABSENT  */ value.allUserAttributeTypesAndValues ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeNull,
                                      $.BER
                                  )(
                                      value.allUserAttributeTypesAndValues,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.attributeValue === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () =>
                                          $._encodeSetOf<AttributeTypeAndValue>(
                                              () =>
                                                  _encode_AttributeTypeAndValue,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.attributeValue, $.BER),
                            /* IF_ABSENT  */ value.selfValue === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      6,
                                      () =>
                                          $._encodeSetOf<AttributeType>(
                                              () => _encode_AttributeType,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.selfValue, $.BER),
                            /* IF_ABSENT  */ value.rangeOfValues === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_Filter,
                                      $.BER
                                  )(value.rangeOfValues, $.BER),
                            /* IF_ABSENT  */ value.maxValueCount === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () =>
                                          $._encodeSetOf<MaxValueCount>(
                                              () => _encode_MaxValueCount,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.maxValueCount, $.BER),
                            /* IF_ABSENT  */ value.maxImmSub === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      9,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.maxImmSub, $.BER),
                            /* IF_ABSENT  */ value.restrictedBy === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      10,
                                      () =>
                                          $._encodeSetOf<RestrictedValue>(
                                              () => _encode_RestrictedValue,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.restrictedBy, $.BER),
                            /* IF_ABSENT  */ value.contexts === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      11,
                                      () =>
                                          $._encodeSetOf<ContextAssertion>(
                                              () => _encode_ContextAssertion,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.contexts, $.BER),
                            /* IF_ABSENT  */ value.classes === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      12,
                                      () => _encode_Refinement,
                                      $.BER
                                  )(value.classes, $.BER),
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
    return _cached_encoder_for_ProtectedItems(value, elGetter);
}

/**
 * @summary UserClasses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserClasses ::= SEQUENCE {
 *   allUsers   [0]  NULL                                      OPTIONAL,
 *   thisEntry  [1]  NULL                                      OPTIONAL,
 *   name       [2]  SET SIZE (1..MAX) OF NameAndOptionalUID   OPTIONAL,
 *   userGroup  [3]  SET SIZE (1..MAX) OF NameAndOptionalUID   OPTIONAL,
 *                   -- dn component shall be the name of an
 *                   -- entry of GroupOfUniqueNames
 *   subtree    [4]  SET SIZE (1..MAX) OF SubtreeSpecification OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class UserClasses {
    constructor(
        /**
         * @summary `allUsers`.
         * @public
         * @readonly
         */
        readonly allUsers: OPTIONAL<NULL>,
        /**
         * @summary `thisEntry`.
         * @public
         * @readonly
         */
        readonly thisEntry: OPTIONAL<NULL>,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<NameAndOptionalUID[]>,
        /**
         * @summary `userGroup`.
         * @public
         * @readonly
         */
        readonly userGroup: OPTIONAL<NameAndOptionalUID[]>,
        /**
         * @summary `subtree`.
         * @public
         * @readonly
         */
        readonly subtree: OPTIONAL<SubtreeSpecification[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UserClasses
     * @description
     *
     * This takes an `object` and converts it to a `UserClasses`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserClasses`.
     * @returns {UserClasses}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof UserClasses]: UserClasses[_K] }>
    ): UserClasses {
        return new UserClasses(
            _o.allUsers,
            _o.thisEntry,
            _o.name,
            _o.userGroup,
            _o.subtree,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of UserClasses
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UserClasses: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "allUsers",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "thisEntry",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "userGroup",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subtree",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of UserClasses
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UserClasses: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of UserClasses
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UserClasses: $.ComponentSpec[] = [];
let _cached_decoder_for_UserClasses: $.ASN1Decoder<UserClasses> | null = null;
let _cached_encoder_for_UserClasses: $.ASN1Encoder<UserClasses> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UserClasses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserClasses} The decoded data structure.
 */
export function _decode_UserClasses(el: _Element) {
    if (!_cached_decoder_for_UserClasses) {
        _cached_decoder_for_UserClasses = function (el: _Element): UserClasses {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let allUsers: OPTIONAL<NULL>;
            let thisEntry: OPTIONAL<NULL>;
            let name: OPTIONAL<NameAndOptionalUID[]>;
            let userGroup: OPTIONAL<NameAndOptionalUID[]>;
            let subtree: OPTIONAL<SubtreeSpecification[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                allUsers: (_el: _Element): void => {
                    allUsers = $._decode_explicit<NULL>(() => $._decodeNull)(
                        _el
                    );
                },
                thisEntry: (_el: _Element): void => {
                    thisEntry = $._decode_explicit<NULL>(() => $._decodeNull)(
                        _el
                    );
                },
                name: (_el: _Element): void => {
                    name = $._decode_explicit<NameAndOptionalUID[]>(() =>
                        $._decodeSetOf<NameAndOptionalUID>(
                            () => _decode_NameAndOptionalUID
                        )
                    )(_el);
                },
                userGroup: (_el: _Element): void => {
                    userGroup = $._decode_explicit<NameAndOptionalUID[]>(() =>
                        $._decodeSetOf<NameAndOptionalUID>(
                            () => _decode_NameAndOptionalUID
                        )
                    )(_el);
                },
                subtree: (_el: _Element): void => {
                    subtree = $._decode_explicit<SubtreeSpecification[]>(() =>
                        $._decodeSetOf<SubtreeSpecification>(
                            () => _decode_SubtreeSpecification
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UserClasses,
                _extension_additions_list_spec_for_UserClasses,
                _root_component_type_list_2_spec_for_UserClasses,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new UserClasses(
                /* SEQUENCE_CONSTRUCTOR_CALL */ allUsers,
                thisEntry,
                name,
                userGroup,
                subtree,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_UserClasses(el);
}
/**
 * @summary Encodes a(n) UserClasses into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserClasses, encoded as an ASN.1 Element.
 */
export function _encode_UserClasses(
    value: UserClasses,
    elGetter: $.ASN1Encoder<UserClasses>
) {
    if (!_cached_encoder_for_UserClasses) {
        _cached_encoder_for_UserClasses = function (
            value: UserClasses,
            elGetter: $.ASN1Encoder<UserClasses>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.allUsers === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeNull,
                                      $.BER
                                  )(value.allUsers, $.BER),
                            /* IF_ABSENT  */ value.thisEntry === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeNull,
                                      $.BER
                                  )(value.thisEntry, $.BER),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<NameAndOptionalUID>(
                                              () => _encode_NameAndOptionalUID,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.name, $.BER),
                            /* IF_ABSENT  */ value.userGroup === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSetOf<NameAndOptionalUID>(
                                              () => _encode_NameAndOptionalUID,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.userGroup, $.BER),
                            /* IF_ABSENT  */ value.subtree === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () =>
                                          $._encodeSetOf<SubtreeSpecification>(
                                              () =>
                                                  _encode_SubtreeSpecification,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.subtree, $.BER),
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
    return _cached_encoder_for_UserClasses(value, elGetter);
}

/**
 * @summary GrantsAndDenials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GrantsAndDenials  ::=  BIT STRING {
 *   -- permissions that may be used in conjunction
 *   -- with any component of ProtectedItems
 *   grantAdd             (0),
 *   denyAdd              (1),
 *   grantDiscloseOnError (2),
 *   denyDiscloseOnError  (3),
 *   grantRead            (4),
 *   denyRead             (5),
 *   grantRemove          (6),
 *   denyRemove           (7),
 *   -- permissions that may be used only in conjunction
 *   -- with the entry component
 *   grantBrowse          (8),
 *   denyBrowse           (9),
 *   grantExport          (10),
 *   denyExport           (11),
 *   grantImport          (12),
 *   denyImport           (13),
 *   grantModify          (14),
 *   denyModify           (15),
 *   grantRename          (16),
 *   denyRename           (17),
 *   grantReturnDN        (18),
 *   denyReturnDN         (19),
 *   -- permissions that may be used in conjunction
 *   -- with any component, except entry, of ProtectedItems
 *   grantCompare         (20),
 *   denyCompare          (21),
 *   grantFilterMatch     (22),
 *   denyFilterMatch      (23),
 *   grantInvoke          (24),
 *   denyInvoke           (25) }
 * ```
 */
export type GrantsAndDenials = BIT_STRING;
/**
 * @summary GrantsAndDenials_grantAdd
 * @constant
 */
export const GrantsAndDenials_grantAdd: number = 0; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_denyAdd
 * @constant
 */
export const GrantsAndDenials_denyAdd: number = 1; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_grantDiscloseOnError
 * @constant
 */
export const GrantsAndDenials_grantDiscloseOnError: number = 2; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_denyDiscloseOnError
 * @constant
 */
export const GrantsAndDenials_denyDiscloseOnError: number = 3; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_grantRead
 * @constant
 */
export const GrantsAndDenials_grantRead: number = 4; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_denyRead
 * @constant
 */
export const GrantsAndDenials_denyRead: number = 5; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_grantRemove
 * @constant
 */
export const GrantsAndDenials_grantRemove: number = 6; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_denyRemove
 * @constant
 */
export const GrantsAndDenials_denyRemove: number = 7; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_grantBrowse
 * @constant
 */
export const GrantsAndDenials_grantBrowse: number = 8; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_denyBrowse
 * @constant
 */
export const GrantsAndDenials_denyBrowse: number = 9; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_grantExport
 * @constant
 */
export const GrantsAndDenials_grantExport: number = 10; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_denyExport
 * @constant
 */
export const GrantsAndDenials_denyExport: number = 11; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_grantImport
 * @constant
 */
export const GrantsAndDenials_grantImport: number = 12; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_denyImport
 * @constant
 */
export const GrantsAndDenials_denyImport: number = 13; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_grantModify
 * @constant
 */
export const GrantsAndDenials_grantModify: number = 14; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_denyModify
 * @constant
 */
export const GrantsAndDenials_denyModify: number = 15; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_grantRename
 * @constant
 */
export const GrantsAndDenials_grantRename: number = 16; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_denyRename
 * @constant
 */
export const GrantsAndDenials_denyRename: number = 17; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_grantReturnDN
 * @constant
 */
export const GrantsAndDenials_grantReturnDN: number = 18; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_denyReturnDN
 * @constant
 */
export const GrantsAndDenials_denyReturnDN: number = 19; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_grantCompare
 * @constant
 */
export const GrantsAndDenials_grantCompare: number = 20; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_denyCompare
 * @constant
 */
export const GrantsAndDenials_denyCompare: number = 21; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_grantFilterMatch
 * @constant
 */
export const GrantsAndDenials_grantFilterMatch: number = 22; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_denyFilterMatch
 * @constant
 */
export const GrantsAndDenials_denyFilterMatch: number = 23; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_grantInvoke
 * @constant
 */
export const GrantsAndDenials_grantInvoke: number = 24; /* LONG_NAMED_BIT */
/**
 * @summary GrantsAndDenials_denyInvoke
 * @constant
 */
export const GrantsAndDenials_denyInvoke: number = 25; /* LONG_NAMED_BIT */
let _cached_decoder_for_GrantsAndDenials: $.ASN1Decoder<
    GrantsAndDenials
> | null = null;
let _cached_encoder_for_GrantsAndDenials: $.ASN1Encoder<
    GrantsAndDenials
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) GrantsAndDenials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GrantsAndDenials} The decoded data structure.
 */
export function _decode_GrantsAndDenials(el: _Element) {
    if (!_cached_decoder_for_GrantsAndDenials) {
        _cached_decoder_for_GrantsAndDenials = $._decodeBitString;
    }
    return _cached_decoder_for_GrantsAndDenials(el);
}
/**
 * @summary Encodes a(n) GrantsAndDenials into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GrantsAndDenials, encoded as an ASN.1 Element.
 */
export function _encode_GrantsAndDenials(
    value: GrantsAndDenials,
    elGetter: $.ASN1Encoder<GrantsAndDenials>
) {
    if (!_cached_encoder_for_GrantsAndDenials) {
        _cached_encoder_for_GrantsAndDenials = $._encodeBitString;
    }
    return _cached_encoder_for_GrantsAndDenials(value, elGetter);
}

/**
 * @summary ItemPermission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ItemPermission ::= SEQUENCE {
 *   precedence        Precedence OPTIONAL,
 *              -- defaults to precedence in ACIItem
 *   userClasses       UserClasses,
 *   grantsAndDenials  GrantsAndDenials,
 *   ... }
 * ```
 *
 * @class
 */
export class ItemPermission {
    constructor(
        /**
         * @summary `precedence`.
         * @public
         * @readonly
         */
        readonly precedence: OPTIONAL<Precedence>,
        /**
         * @summary `userClasses`.
         * @public
         * @readonly
         */
        readonly userClasses: UserClasses,
        /**
         * @summary `grantsAndDenials`.
         * @public
         * @readonly
         */
        readonly grantsAndDenials: GrantsAndDenials,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ItemPermission
     * @description
     *
     * This takes an `object` and converts it to a `ItemPermission`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ItemPermission`.
     * @returns {ItemPermission}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ItemPermission]: ItemPermission[_K] }>
    ): ItemPermission {
        return new ItemPermission(
            _o.precedence,
            _o.userClasses,
            _o.grantsAndDenials,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ItemPermission
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ItemPermission: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "precedence",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "userClasses",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "grantsAndDenials",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ItemPermission
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ItemPermission: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ItemPermission
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ItemPermission: $.ComponentSpec[] = [];
let _cached_decoder_for_ItemPermission: $.ASN1Decoder<
    ItemPermission
> | null = null;
let _cached_encoder_for_ItemPermission: $.ASN1Encoder<
    ItemPermission
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ItemPermission
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ItemPermission} The decoded data structure.
 */
export function _decode_ItemPermission(el: _Element) {
    if (!_cached_decoder_for_ItemPermission) {
        _cached_decoder_for_ItemPermission = function (
            el: _Element
        ): ItemPermission {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let precedence: OPTIONAL<Precedence>;
            let userClasses!: UserClasses;
            let grantsAndDenials!: GrantsAndDenials;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                precedence: (_el: _Element): void => {
                    precedence = _decode_Precedence(_el);
                },
                userClasses: (_el: _Element): void => {
                    userClasses = _decode_UserClasses(_el);
                },
                grantsAndDenials: (_el: _Element): void => {
                    grantsAndDenials = _decode_GrantsAndDenials(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ItemPermission,
                _extension_additions_list_spec_for_ItemPermission,
                _root_component_type_list_2_spec_for_ItemPermission,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ItemPermission(
                /* SEQUENCE_CONSTRUCTOR_CALL */ precedence,
                userClasses,
                grantsAndDenials,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ItemPermission(el);
}
/**
 * @summary Encodes a(n) ItemPermission into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ItemPermission, encoded as an ASN.1 Element.
 */
export function _encode_ItemPermission(
    value: ItemPermission,
    elGetter: $.ASN1Encoder<ItemPermission>
) {
    if (!_cached_encoder_for_ItemPermission) {
        _cached_encoder_for_ItemPermission = function (
            value: ItemPermission,
            elGetter: $.ASN1Encoder<ItemPermission>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.precedence === undefined
                                ? undefined
                                : _encode_Precedence(value.precedence, $.BER),
                            /* REQUIRED   */ _encode_UserClasses(
                                value.userClasses,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_GrantsAndDenials(
                                value.grantsAndDenials,
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
    return _cached_encoder_for_ItemPermission(value, elGetter);
}

/**
 * @summary ACIItem_itemOrUserFirst_itemFirst
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACIItem-itemOrUserFirst-itemFirst ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ACIItem_itemOrUserFirst_itemFirst {
    constructor(
        /**
         * @summary `protectedItems`.
         * @public
         * @readonly
         */
        readonly protectedItems: ProtectedItems,
        /**
         * @summary `itemPermissions`.
         * @public
         * @readonly
         */
        readonly itemPermissions: ItemPermission[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ACIItem_itemOrUserFirst_itemFirst
     * @description
     *
     * This takes an `object` and converts it to a `ACIItem_itemOrUserFirst_itemFirst`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ACIItem_itemOrUserFirst_itemFirst`.
     * @returns {ACIItem_itemOrUserFirst_itemFirst}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ACIItem_itemOrUserFirst_itemFirst]: ACIItem_itemOrUserFirst_itemFirst[_K];
            }
        >
    ): ACIItem_itemOrUserFirst_itemFirst {
        return new ACIItem_itemOrUserFirst_itemFirst(
            _o.protectedItems,
            _o.itemPermissions,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ACIItem_itemOrUserFirst_itemFirst
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ACIItem_itemOrUserFirst_itemFirst: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "protectedItems",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "itemPermissions",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ACIItem_itemOrUserFirst_itemFirst
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ACIItem_itemOrUserFirst_itemFirst: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ACIItem_itemOrUserFirst_itemFirst
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ACIItem_itemOrUserFirst_itemFirst: $.ComponentSpec[] = [];
let _cached_decoder_for_ACIItem_itemOrUserFirst_itemFirst: $.ASN1Decoder<
    ACIItem_itemOrUserFirst_itemFirst
> | null = null;
let _cached_encoder_for_ACIItem_itemOrUserFirst_itemFirst: $.ASN1Encoder<
    ACIItem_itemOrUserFirst_itemFirst
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ACIItem_itemOrUserFirst_itemFirst
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ACIItem_itemOrUserFirst_itemFirst} The decoded data structure.
 */
export function _decode_ACIItem_itemOrUserFirst_itemFirst(el: _Element) {
    if (!_cached_decoder_for_ACIItem_itemOrUserFirst_itemFirst) {
        _cached_decoder_for_ACIItem_itemOrUserFirst_itemFirst = function (
            el: _Element
        ): ACIItem_itemOrUserFirst_itemFirst {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ACIItem-itemOrUserFirst-itemFirst contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "protectedItems";
            sequence[1].name = "itemPermissions";
            let protectedItems!: ProtectedItems;
            let itemPermissions!: ItemPermission[];
            protectedItems = _decode_ProtectedItems(sequence[0]);
            itemPermissions = $._decodeSetOf<ItemPermission>(
                () => _decode_ItemPermission
            )(sequence[1]);
            return new ACIItem_itemOrUserFirst_itemFirst(
                protectedItems,
                itemPermissions,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_ACIItem_itemOrUserFirst_itemFirst(el);
}
/**
 * @summary Encodes a(n) ACIItem_itemOrUserFirst_itemFirst into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACIItem_itemOrUserFirst_itemFirst, encoded as an ASN.1 Element.
 */
export function _encode_ACIItem_itemOrUserFirst_itemFirst(
    value: ACIItem_itemOrUserFirst_itemFirst,
    elGetter: $.ASN1Encoder<ACIItem_itemOrUserFirst_itemFirst>
) {
    if (!_cached_encoder_for_ACIItem_itemOrUserFirst_itemFirst) {
        _cached_encoder_for_ACIItem_itemOrUserFirst_itemFirst = function (
            value: ACIItem_itemOrUserFirst_itemFirst,
            elGetter: $.ASN1Encoder<ACIItem_itemOrUserFirst_itemFirst>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_ProtectedItems(
                                value.protectedItems,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSetOf<ItemPermission>(
                                () => _encode_ItemPermission,
                                $.BER
                            )(value.itemPermissions, $.BER),
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
    return _cached_encoder_for_ACIItem_itemOrUserFirst_itemFirst(
        value,
        elGetter
    );
}

/**
 * @summary UserPermission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserPermission ::= SEQUENCE {
 *   precedence        Precedence OPTIONAL,
 *              -- defaults to precedence in ACIItem
 *   protectedItems    ProtectedItems,
 *   grantsAndDenials  GrantsAndDenials,
 *   ... }
 * ```
 *
 * @class
 */
export class UserPermission {
    constructor(
        /**
         * @summary `precedence`.
         * @public
         * @readonly
         */
        readonly precedence: OPTIONAL<Precedence>,
        /**
         * @summary `protectedItems`.
         * @public
         * @readonly
         */
        readonly protectedItems: ProtectedItems,
        /**
         * @summary `grantsAndDenials`.
         * @public
         * @readonly
         */
        readonly grantsAndDenials: GrantsAndDenials,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UserPermission
     * @description
     *
     * This takes an `object` and converts it to a `UserPermission`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserPermission`.
     * @returns {UserPermission}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof UserPermission]: UserPermission[_K] }>
    ): UserPermission {
        return new UserPermission(
            _o.precedence,
            _o.protectedItems,
            _o.grantsAndDenials,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of UserPermission
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UserPermission: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "precedence",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "protectedItems",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "grantsAndDenials",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of UserPermission
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UserPermission: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of UserPermission
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UserPermission: $.ComponentSpec[] = [];
let _cached_decoder_for_UserPermission: $.ASN1Decoder<
    UserPermission
> | null = null;
let _cached_encoder_for_UserPermission: $.ASN1Encoder<
    UserPermission
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UserPermission
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserPermission} The decoded data structure.
 */
export function _decode_UserPermission(el: _Element) {
    if (!_cached_decoder_for_UserPermission) {
        _cached_decoder_for_UserPermission = function (
            el: _Element
        ): UserPermission {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let precedence: OPTIONAL<Precedence>;
            let protectedItems!: ProtectedItems;
            let grantsAndDenials!: GrantsAndDenials;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                precedence: (_el: _Element): void => {
                    precedence = _decode_Precedence(_el);
                },
                protectedItems: (_el: _Element): void => {
                    protectedItems = _decode_ProtectedItems(_el);
                },
                grantsAndDenials: (_el: _Element): void => {
                    grantsAndDenials = _decode_GrantsAndDenials(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UserPermission,
                _extension_additions_list_spec_for_UserPermission,
                _root_component_type_list_2_spec_for_UserPermission,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new UserPermission(
                /* SEQUENCE_CONSTRUCTOR_CALL */ precedence,
                protectedItems,
                grantsAndDenials,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_UserPermission(el);
}
/**
 * @summary Encodes a(n) UserPermission into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserPermission, encoded as an ASN.1 Element.
 */
export function _encode_UserPermission(
    value: UserPermission,
    elGetter: $.ASN1Encoder<UserPermission>
) {
    if (!_cached_encoder_for_UserPermission) {
        _cached_encoder_for_UserPermission = function (
            value: UserPermission,
            elGetter: $.ASN1Encoder<UserPermission>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.precedence === undefined
                                ? undefined
                                : _encode_Precedence(value.precedence, $.BER),
                            /* REQUIRED   */ _encode_ProtectedItems(
                                value.protectedItems,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_GrantsAndDenials(
                                value.grantsAndDenials,
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
    return _cached_encoder_for_UserPermission(value, elGetter);
}

/**
 * @summary ACIItem_itemOrUserFirst_userFirst
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACIItem-itemOrUserFirst-userFirst ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ACIItem_itemOrUserFirst_userFirst {
    constructor(
        /**
         * @summary `userClasses`.
         * @public
         * @readonly
         */
        readonly userClasses: UserClasses,
        /**
         * @summary `userPermissions`.
         * @public
         * @readonly
         */
        readonly userPermissions: UserPermission[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ACIItem_itemOrUserFirst_userFirst
     * @description
     *
     * This takes an `object` and converts it to a `ACIItem_itemOrUserFirst_userFirst`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ACIItem_itemOrUserFirst_userFirst`.
     * @returns {ACIItem_itemOrUserFirst_userFirst}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ACIItem_itemOrUserFirst_userFirst]: ACIItem_itemOrUserFirst_userFirst[_K];
            }
        >
    ): ACIItem_itemOrUserFirst_userFirst {
        return new ACIItem_itemOrUserFirst_userFirst(
            _o.userClasses,
            _o.userPermissions,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ACIItem_itemOrUserFirst_userFirst
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ACIItem_itemOrUserFirst_userFirst: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "userClasses",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "userPermissions",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ACIItem_itemOrUserFirst_userFirst
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ACIItem_itemOrUserFirst_userFirst: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ACIItem_itemOrUserFirst_userFirst
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ACIItem_itemOrUserFirst_userFirst: $.ComponentSpec[] = [];
let _cached_decoder_for_ACIItem_itemOrUserFirst_userFirst: $.ASN1Decoder<
    ACIItem_itemOrUserFirst_userFirst
> | null = null;
let _cached_encoder_for_ACIItem_itemOrUserFirst_userFirst: $.ASN1Encoder<
    ACIItem_itemOrUserFirst_userFirst
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ACIItem_itemOrUserFirst_userFirst
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ACIItem_itemOrUserFirst_userFirst} The decoded data structure.
 */
export function _decode_ACIItem_itemOrUserFirst_userFirst(el: _Element) {
    if (!_cached_decoder_for_ACIItem_itemOrUserFirst_userFirst) {
        _cached_decoder_for_ACIItem_itemOrUserFirst_userFirst = function (
            el: _Element
        ): ACIItem_itemOrUserFirst_userFirst {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ACIItem-itemOrUserFirst-userFirst contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "userClasses";
            sequence[1].name = "userPermissions";
            let userClasses!: UserClasses;
            let userPermissions!: UserPermission[];
            userClasses = _decode_UserClasses(sequence[0]);
            userPermissions = $._decodeSetOf<UserPermission>(
                () => _decode_UserPermission
            )(sequence[1]);
            return new ACIItem_itemOrUserFirst_userFirst(
                userClasses,
                userPermissions,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_ACIItem_itemOrUserFirst_userFirst(el);
}
/**
 * @summary Encodes a(n) ACIItem_itemOrUserFirst_userFirst into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACIItem_itemOrUserFirst_userFirst, encoded as an ASN.1 Element.
 */
export function _encode_ACIItem_itemOrUserFirst_userFirst(
    value: ACIItem_itemOrUserFirst_userFirst,
    elGetter: $.ASN1Encoder<ACIItem_itemOrUserFirst_userFirst>
) {
    if (!_cached_encoder_for_ACIItem_itemOrUserFirst_userFirst) {
        _cached_encoder_for_ACIItem_itemOrUserFirst_userFirst = function (
            value: ACIItem_itemOrUserFirst_userFirst,
            elGetter: $.ASN1Encoder<ACIItem_itemOrUserFirst_userFirst>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_UserClasses(
                                value.userClasses,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSetOf<UserPermission>(
                                () => _encode_UserPermission,
                                $.BER
                            )(value.userPermissions, $.BER),
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
    return _cached_encoder_for_ACIItem_itemOrUserFirst_userFirst(
        value,
        elGetter
    );
}

/**
 * @summary ACIItem_itemOrUserFirst
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACIItem-itemOrUserFirst ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ACIItem_itemOrUserFirst =
    | { itemFirst: ACIItem_itemOrUserFirst_itemFirst } /* CHOICE_ALT_ROOT */
    | { userFirst: ACIItem_itemOrUserFirst_userFirst } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ACIItem_itemOrUserFirst: $.ASN1Decoder<
    ACIItem_itemOrUserFirst
> | null = null;
let _cached_encoder_for_ACIItem_itemOrUserFirst: $.ASN1Encoder<
    ACIItem_itemOrUserFirst
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ACIItem_itemOrUserFirst
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ACIItem_itemOrUserFirst} The decoded data structure.
 */
export function _decode_ACIItem_itemOrUserFirst(el: _Element) {
    if (!_cached_decoder_for_ACIItem_itemOrUserFirst) {
        _cached_decoder_for_ACIItem_itemOrUserFirst = $._decode_extensible_choice<
            ACIItem_itemOrUserFirst
        >({
            "CONTEXT 0": [
                "itemFirst",
                $._decode_explicit<ACIItem_itemOrUserFirst_itemFirst>(
                    () => _decode_ACIItem_itemOrUserFirst_itemFirst
                ),
            ],
            "CONTEXT 1": [
                "userFirst",
                $._decode_explicit<ACIItem_itemOrUserFirst_userFirst>(
                    () => _decode_ACIItem_itemOrUserFirst_userFirst
                ),
            ],
        });
    }
    return _cached_decoder_for_ACIItem_itemOrUserFirst(el);
}
/**
 * @summary Encodes a(n) ACIItem_itemOrUserFirst into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACIItem_itemOrUserFirst, encoded as an ASN.1 Element.
 */
export function _encode_ACIItem_itemOrUserFirst(
    value: ACIItem_itemOrUserFirst,
    elGetter: $.ASN1Encoder<ACIItem_itemOrUserFirst>
) {
    if (!_cached_encoder_for_ACIItem_itemOrUserFirst) {
        _cached_encoder_for_ACIItem_itemOrUserFirst = $._encode_choice<
            ACIItem_itemOrUserFirst
        >(
            {
                itemFirst: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ACIItem_itemOrUserFirst_itemFirst,
                    $.BER
                ),
                userFirst: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ACIItem_itemOrUserFirst_userFirst,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ACIItem_itemOrUserFirst(value, elGetter);
}

/**
 * @summary ACIItem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACIItem ::= SEQUENCE {
 *   identificationTag    UnboundedDirectoryString,
 *   precedence           Precedence,
 *   authenticationLevel  AuthenticationLevel,
 *   itemOrUserFirst      CHOICE {
 *     itemFirst       [0]  SEQUENCE {
 *       protectedItems       ProtectedItems,
 *       itemPermissions      SET OF ItemPermission,
 *       ...},
 *     userFirst       [1]  SEQUENCE {
 *       userClasses          UserClasses,
 *       userPermissions      SET OF UserPermission,
 *       ...},
 *     ...},
 *   ... }
 * ```
 *
 * @class
 */
export class ACIItem {
    constructor(
        /**
         * @summary `identificationTag`.
         * @public
         * @readonly
         */
        readonly identificationTag: UnboundedDirectoryString,
        /**
         * @summary `precedence`.
         * @public
         * @readonly
         */
        readonly precedence: Precedence,
        /**
         * @summary `authenticationLevel`.
         * @public
         * @readonly
         */
        readonly authenticationLevel: AuthenticationLevel,
        /**
         * @summary `itemOrUserFirst`.
         * @public
         * @readonly
         */
        readonly itemOrUserFirst: ACIItem_itemOrUserFirst,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ACIItem
     * @description
     *
     * This takes an `object` and converts it to a `ACIItem`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ACIItem`.
     * @returns {ACIItem}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ACIItem]: ACIItem[_K] }>
    ): ACIItem {
        return new ACIItem(
            _o.identificationTag,
            _o.precedence,
            _o.authenticationLevel,
            _o.itemOrUserFirst,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ACIItem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ACIItem: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "identificationTag",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "precedence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "authenticationLevel",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "itemOrUserFirst",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ACIItem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ACIItem: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ACIItem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ACIItem: $.ComponentSpec[] = [];
let _cached_decoder_for_ACIItem: $.ASN1Decoder<ACIItem> | null = null;
let _cached_encoder_for_ACIItem: $.ASN1Encoder<ACIItem> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ACIItem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ACIItem} The decoded data structure.
 */
export function _decode_ACIItem(el: _Element) {
    if (!_cached_decoder_for_ACIItem) {
        _cached_decoder_for_ACIItem = function (el: _Element): ACIItem {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new _ConstructionError(
                    "ACIItem contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "identificationTag";
            sequence[1].name = "precedence";
            sequence[2].name = "authenticationLevel";
            sequence[3].name = "itemOrUserFirst";
            let identificationTag!: UnboundedDirectoryString;
            let precedence!: Precedence;
            let authenticationLevel!: AuthenticationLevel;
            let itemOrUserFirst!: ACIItem_itemOrUserFirst;
            identificationTag = _decode_UnboundedDirectoryString(sequence[0]);
            precedence = _decode_Precedence(sequence[1]);
            authenticationLevel = _decode_AuthenticationLevel(sequence[2]);
            itemOrUserFirst = _decode_ACIItem_itemOrUserFirst(sequence[3]);
            return new ACIItem(
                identificationTag,
                precedence,
                authenticationLevel,
                itemOrUserFirst,
                sequence.slice(4)
            );
        };
    }
    return _cached_decoder_for_ACIItem(el);
}
/**
 * @summary Encodes a(n) ACIItem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACIItem, encoded as an ASN.1 Element.
 */
export function _encode_ACIItem(
    value: ACIItem,
    elGetter: $.ASN1Encoder<ACIItem>
) {
    if (!_cached_encoder_for_ACIItem) {
        _cached_encoder_for_ACIItem = function (
            value: ACIItem,
            elGetter: $.ASN1Encoder<ACIItem>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_UnboundedDirectoryString(
                                value.identificationTag,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Precedence(
                                value.precedence,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AuthenticationLevel(
                                value.authenticationLevel,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_ACIItem_itemOrUserFirst(
                                value.itemOrUserFirst,
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
    return _cached_encoder_for_ACIItem(value, elGetter);
}

/**
 * @summary id_aca_prescriptiveACI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aca-prescriptiveACI         OBJECT IDENTIFIER ::= {id-aca 4}
 * ```
 *
 * @constant
 */
export const id_aca_prescriptiveACI: OBJECT_IDENTIFIER = new _OID([4], id_aca);

/**
 * @summary prescriptiveACI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * prescriptiveACI ATTRIBUTE ::= {
 *   WITH SYNTAX             ACIItem
 *   EQUALITY MATCHING RULE  directoryStringFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-aca-prescriptiveACI }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const prescriptiveACI: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ACIItem,
    },
    encoderFor: {
        "&Type": _encode_ACIItem,
    },
    "&equality-match": directoryStringFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_aca_prescriptiveACI /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_aca_entryACI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aca-entryACI                OBJECT IDENTIFIER ::= {id-aca 5}
 * ```
 *
 * @constant
 */
export const id_aca_entryACI: OBJECT_IDENTIFIER = new _OID([5], id_aca);

/**
 * @summary entryACI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * entryACI ATTRIBUTE ::= {
 *   WITH SYNTAX             ACIItem
 *   EQUALITY MATCHING RULE  directoryStringFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-aca-entryACI }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const entryACI: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ACIItem,
    },
    encoderFor: {
        "&Type": _encode_ACIItem,
    },
    "&equality-match": directoryStringFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_aca_entryACI /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_aca_subentryACI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aca-subentryACI             OBJECT IDENTIFIER ::= {id-aca 6}
 * ```
 *
 * @constant
 */
export const id_aca_subentryACI: OBJECT_IDENTIFIER = new _OID([6], id_aca);

/**
 * @summary subentryACI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subentryACI ATTRIBUTE ::= {
 *   WITH SYNTAX             ACIItem
 *   EQUALITY MATCHING RULE  directoryStringFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-aca-subentryACI }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const subentryACI: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ACIItem,
    },
    encoderFor: {
        "&Type": _encode_ACIItem,
    },
    "&equality-match": directoryStringFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_aca_subentryACI /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary basicAccessControlScheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * basicAccessControlScheme       OBJECT IDENTIFIER ::= {id-acScheme 1}
 * ```
 *
 * @constant
 */
export const basicAccessControlScheme: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_acScheme
);

/**
 * @summary simplifiedAccessControlScheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * simplifiedAccessControlScheme  OBJECT IDENTIFIER ::= {id-acScheme 2}
 * ```
 *
 * @constant
 */
export const simplifiedAccessControlScheme: OBJECT_IDENTIFIER = new _OID(
    [2],
    id_acScheme
);

/**
 * @summary rule_based_access_control
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rule-based-access-control      OBJECT IDENTIFIER ::= {id-acScheme 3}
 * ```
 *
 * @constant
 */
export const rule_based_access_control: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_acScheme
);

/**
 * @summary rule_and_basic_access_control
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rule-and-basic-access-control  OBJECT IDENTIFIER ::= {id-acScheme 4}
 * ```
 *
 * @constant
 */
export const rule_and_basic_access_control: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_acScheme
);

/**
 * @summary rule_and_simple_access_control
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rule-and-simple-access-control OBJECT IDENTIFIER ::= {id-acScheme 5}
 * ```
 *
 * @constant
 */
export const rule_and_simple_access_control: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_acScheme
);

/* END_MODULE BasicAccessControl */
/* eslint-enable */
