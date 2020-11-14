/**
 * @module InformationFramework
 * @summary The ASN.1 module `InformationFramework`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.informationFramework.9
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
    BOOLEAN,
    ENUMERATED,
    GeneralizedTime,
    INTEGER,
    NULL,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    UTF8String,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    FamilyGrouping,
    FamilyReturn,
    _decode_FamilyGrouping,
    _decode_FamilyReturn,
    _decode_TypeAndContextAssertion,
    _encode_FamilyGrouping,
    _encode_FamilyReturn,
    _encode_TypeAndContextAssertion,
    _enum_for_FamilyGrouping,
} from "./DirectoryAbstractService";
import {
    booleanMatch,
    commonName,
    dn,
    generalizedTime,
    generalizedTimeMatch,
    generalizedTimeOrderingMatch,
    integerFirstComponentMatch,
    integerMatch,
    integerOrderingMatch,
    objectIdentifierFirstComponentMatch,
    oid,
    subtreeSpec,
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
import {
    AllowedSubset,
    AttributeCombination,
    ControlOptions,
    EntryLimit,
    ImposedSubset,
    RelaxationPolicy,
    RequestAttribute,
    ResultAttribute,
    _decode_AllowedSubset,
    _decode_AttributeCombination,
    _decode_ControlOptions,
    _decode_EntryLimit,
    _decode_ImposedSubset,
    _decode_RelaxationPolicy,
    _decode_RequestAttribute,
    _decode_ResultAttribute,
    _encode_AllowedSubset,
    _encode_AttributeCombination,
    _encode_ControlOptions,
    _encode_EntryLimit,
    _encode_ImposedSubset,
    _encode_RelaxationPolicy,
    _encode_RequestAttribute,
    _encode_ResultAttribute,
    _enum_for_ImposedSubset,
} from "./ServiceAdministration";
import {
    id_ar,
    id_at,
    id_mr,
    id_nf,
    id_oa,
    id_oc,
    id_sc,
} from "./UsefulDefinitions";
export {
    FamilyGrouping,
    FamilyGrouping_compoundEntry /* IMPORTED_ENUMERATION_ITEM */,
    FamilyGrouping_entryOnly /* IMPORTED_ENUMERATION_ITEM */,
    FamilyGrouping_multiStrand /* IMPORTED_ENUMERATION_ITEM */,
    FamilyGrouping_strands /* IMPORTED_ENUMERATION_ITEM */,
    FamilyReturn,
    TypeAndContextAssertion,
    _decode_FamilyGrouping,
    _decode_FamilyReturn,
    _decode_TypeAndContextAssertion,
    _encode_FamilyGrouping,
    _encode_FamilyReturn,
    _encode_TypeAndContextAssertion,
    _enum_for_FamilyGrouping,
} from "./DirectoryAbstractService";
export {
    booleanMatch,
    commonName,
    dn,
    generalizedTime,
    generalizedTimeMatch,
    generalizedTimeOrderingMatch,
    integerFirstComponentMatch,
    integerMatch,
    integerOrderingMatch,
    objectIdentifierFirstComponentMatch,
    oid,
    subtreeSpec,
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
export {
    AllowedSubset,
    AllowedSubset_baseObject /* IMPORTED_BIT */,
    AllowedSubset_oneLevel /* IMPORTED_BIT */,
    AllowedSubset_wholeSubtree /* IMPORTED_BIT */,
    AttributeCombination,
    ControlOptions,
    EntryLimit,
    ImposedSubset,
    ImposedSubset_baseObject /* IMPORTED_ENUMERATION_ITEM */,
    ImposedSubset_oneLevel /* IMPORTED_ENUMERATION_ITEM */,
    ImposedSubset_wholeSubtree /* IMPORTED_ENUMERATION_ITEM */,
    RelaxationPolicy,
    RequestAttribute,
    ResultAttribute,
    SearchRule,
    _decode_AllowedSubset,
    _decode_AttributeCombination,
    _decode_ControlOptions,
    _decode_EntryLimit,
    _decode_ImposedSubset,
    _decode_RelaxationPolicy,
    _decode_RequestAttribute,
    _decode_ResultAttribute,
    _decode_SearchRule,
    _encode_AllowedSubset,
    _encode_AttributeCombination,
    _encode_ControlOptions,
    _encode_EntryLimit,
    _encode_ImposedSubset,
    _encode_RelaxationPolicy,
    _encode_RequestAttribute,
    _encode_ResultAttribute,
    _encode_SearchRule,
    _enum_for_ImposedSubset,
} from "./ServiceAdministration";
export {
    id_ar,
    id_at,
    id_mr,
    id_nf,
    id_oa,
    id_oc,
    id_sc,
} from "./UsefulDefinitions";

/**
 * @summary SYNTAX_NAME
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SYNTAX-NAME ::= CLASS {
 *   &ldapDesc               UTF8String,
 *   &Type                   OPTIONAL,
 *   &id                     OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   LDAP-DESC               &ldapDesc
 *   [DIRECTORY SYNTAX       &Type]
 *   ID                      &id }
 * ```
 *
 * @interface
 */
export interface SYNTAX_NAME<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "SYNTAX-NAME";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof SYNTAX_NAME<Type>]: $.ASN1Decoder<
                SYNTAX_NAME<Type>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof SYNTAX_NAME<Type>]: $.ASN1Encoder<
                SYNTAX_NAME<Type>[_K]
            >;
        }
    >;
    /**
     * @summary &ldapDesc
     */
    "&ldapDesc"?: UTF8String;
    /**
     * @summary &Type
     */
    "&Type": Type;
    /**
     * @summary &id
     */
    "&id"?: OBJECT_IDENTIFIER;
}

/**
 * @summary MATCHING_RULE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MATCHING-RULE ::= CLASS {
 *   &ParentMatchingRules    MATCHING-RULE OPTIONAL,
 *   &AssertionType          OPTIONAL,
 *   &uniqueMatchIndicator   ATTRIBUTE OPTIONAL,
 *   &ldapSyntax             SYNTAX-NAME.&id OPTIONAL,
 *   &ldapName               SEQUENCE SIZE(1..MAX) OF UTF8String OPTIONAL,
 *   &ldapDesc               UTF8String OPTIONAL,
 *   &id                     OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   [PARENT                 &ParentMatchingRules]
 *   [SYNTAX                 &AssertionType]
 *   [UNIQUE-MATCH-INDICATOR &uniqueMatchIndicator]
 *   [LDAP-SYNTAX            &ldapSyntax]
 *   [LDAP-NAME              &ldapName]
 *   [LDAP-DESC              &ldapDesc]
 *   ID                      &id }
 * ```
 *
 * @interface
 */
export interface MATCHING_RULE<
    AssertionType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "MATCHING-RULE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof MATCHING_RULE<AssertionType>]: $.ASN1Decoder<
                MATCHING_RULE<AssertionType>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof MATCHING_RULE<AssertionType>]: $.ASN1Encoder<
                MATCHING_RULE<AssertionType>[_K]
            >;
        }
    >;
    /**
     * @summary &ParentMatchingRules
     */
    "&ParentMatchingRules"?: MATCHING_RULE[];
    /**
     * @summary &AssertionType
     */
    "&AssertionType": AssertionType;
    /**
     * @summary &uniqueMatchIndicator
     */
    "&uniqueMatchIndicator"?: ATTRIBUTE;
    /**
     * @summary &ldapSyntax
     */
    "&ldapSyntax"?: OBJECT_IDENTIFIER;
    /**
     * @summary &ldapName
     */
    "&ldapName"?: UTF8String[];
    /**
     * @summary &ldapDesc
     */
    "&ldapDesc"?: UTF8String;
    /**
     * @summary &id
     */
    "&id"?: OBJECT_IDENTIFIER;
}

/**
 * @summary AttributeUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeUsage ::= ENUMERATED {
 *   userApplications     (0),
 *   directoryOperation   (1),
 *   distributedOperation (2),
 *   dSAOperation         (3),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_AttributeUsage {
    userApplications = 0,
    directoryOperation = 1,
    distributedOperation = 2,
    dSAOperation = 3,
}
/**
 * @summary AttributeUsage
 */
export type AttributeUsage = _enum_for_AttributeUsage | ENUMERATED;
/**
 * @summary AttributeUsage_userApplications
 * @constant
 * @type {number}
 */
export const AttributeUsage_userApplications: AttributeUsage = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AttributeUsage_directoryOperation
 * @constant
 * @type {number}
 */
export const AttributeUsage_directoryOperation: AttributeUsage = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AttributeUsage_distributedOperation
 * @constant
 * @type {number}
 */
export const AttributeUsage_distributedOperation: AttributeUsage = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AttributeUsage_dSAOperation
 * @constant
 * @type {number}
 */
export const AttributeUsage_dSAOperation: AttributeUsage = 3; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_AttributeUsage: $.ASN1Decoder<
    AttributeUsage
> | null = null;
let _cached_encoder_for_AttributeUsage: $.ASN1Encoder<
    AttributeUsage
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeUsage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeUsage} The decoded data structure.
 */
export function _decode_AttributeUsage(el: _Element) {
    if (!_cached_decoder_for_AttributeUsage) {
        _cached_decoder_for_AttributeUsage = $._decodeEnumerated;
    }
    return _cached_decoder_for_AttributeUsage(el);
}
/**
 * @summary Encodes a(n) AttributeUsage into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeUsage, encoded as an ASN.1 Element.
 */
export function _encode_AttributeUsage(
    value: AttributeUsage,
    elGetter: $.ASN1Encoder<AttributeUsage>
) {
    if (!_cached_encoder_for_AttributeUsage) {
        _cached_encoder_for_AttributeUsage = $._encodeEnumerated;
    }
    return _cached_encoder_for_AttributeUsage(value, elGetter);
}

/**
 * @summary ATTRIBUTE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ATTRIBUTE ::= CLASS {
 *   &derivation               ATTRIBUTE OPTIONAL,
 *   &Type                     OPTIONAL, -- either &Type or &derivation required
 *   &equality-match           MATCHING-RULE OPTIONAL,
 *   &ordering-match           MATCHING-RULE OPTIONAL,
 *   &substrings-match         MATCHING-RULE OPTIONAL,
 *   &single-valued            BOOLEAN DEFAULT FALSE,
 *   &collective               BOOLEAN DEFAULT FALSE,
 *   &dummy                    BOOLEAN DEFAULT FALSE,
 *   -- operational extensions
 *   &no-user-modification     BOOLEAN DEFAULT FALSE,
 *   &usage                    AttributeUsage DEFAULT userApplications,
 *   &ldapSyntax               SYNTAX-NAME.&id OPTIONAL,
 *   &ldapName                 SEQUENCE SIZE(1..MAX) OF UTF8String OPTIONAL,
 *   &ldapDesc                 UTF8String OPTIONAL,
 *   &obsolete                 BOOLEAN DEFAULT FALSE,
 *   &id                       OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   [SUBTYPE OF               &derivation]
 *   [WITH SYNTAX              &Type]
 *   [EQUALITY MATCHING RULE   &equality-match]
 *   [ORDERING MATCHING RULE   &ordering-match]
 *   [SUBSTRINGS MATCHING RULE &substrings-match]
 *   [SINGLE VALUE             &single-valued]
 *   [COLLECTIVE               &collective]
 *   [DUMMY                    &dummy]
 *   [NO USER MODIFICATION     &no-user-modification]
 *   [USAGE                    &usage]
 *   [LDAP-SYNTAX              &ldapSyntax]
 *   [LDAP-NAME                &ldapName]
 *   [LDAP-DESC                &ldapDesc]
 *   [OBSOLETE                 &obsolete]
 *   ID                        &id }
 * ```
 *
 * @interface
 */
export interface ATTRIBUTE<Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "ATTRIBUTE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof ATTRIBUTE<Type>]: $.ASN1Decoder<ATTRIBUTE<Type>[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ATTRIBUTE<Type>]: $.ASN1Encoder<ATTRIBUTE<Type>[_K]>;
        }
    >;
    /**
     * @summary &derivation
     */
    "&derivation"?: ATTRIBUTE;
    /**
     * @summary &Type
     */
    "&Type": Type;
    /**
     * @summary &equality-match
     */
    "&equality-match"?: MATCHING_RULE;
    /**
     * @summary &ordering-match
     */
    "&ordering-match"?: MATCHING_RULE;
    /**
     * @summary &substrings-match
     */
    "&substrings-match"?: MATCHING_RULE;
    /**
     * @summary &single-valued
     */
    "&single-valued"?: BOOLEAN;
    /**
     * @summary &collective
     */
    "&collective"?: BOOLEAN;
    /**
     * @summary &dummy
     */
    "&dummy"?: BOOLEAN;
    /**
     * @summary &no-user-modification
     */
    "&no-user-modification"?: BOOLEAN;
    /**
     * @summary &usage
     */
    "&usage"?: AttributeUsage;
    /**
     * @summary &ldapSyntax
     */
    "&ldapSyntax"?: OBJECT_IDENTIFIER;
    /**
     * @summary &ldapName
     */
    "&ldapName"?: UTF8String[];
    /**
     * @summary &ldapDesc
     */
    "&ldapDesc"?: UTF8String;
    /**
     * @summary &obsolete
     */
    "&obsolete"?: BOOLEAN;
    /**
     * @summary &id
     */
    "&id"?: OBJECT_IDENTIFIER;
}

/**
 * @summary id_mr_objectIdentifierMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-objectIdentifierMatch            OBJECT IDENTIFIER ::= {id-mr 0}
 * ```
 *
 * @constant
 */
export const id_mr_objectIdentifierMatch: OBJECT_IDENTIFIER = new _OID(
    [0],
    id_mr
);

/**
 * @summary objectIdentifierMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * objectIdentifierMatch MATCHING-RULE ::= {
 *   SYNTAX       OBJECT IDENTIFIER
 *   LDAP-SYNTAX  oid.&id
 *   LDAP-NAME    {"objectIdentifierMatch"}
 *   ID           id-mr-objectIdentifierMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const objectIdentifierMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&AssertionType": $._encodeObjectIdentifier,
    },
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_objectIdentifierMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_objectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-objectClass                      OBJECT IDENTIFIER ::= {id-at 0}
 * ```
 *
 * @constant
 */
export const id_at_objectClass: OBJECT_IDENTIFIER = new _OID([0], id_at);

/**
 * @summary objectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * objectClass ATTRIBUTE ::= {
 *   WITH SYNTAX             OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE  objectIdentifierMatch
 *   LDAP-SYNTAX             oid.&id
 *   LDAP-NAME               {"objectClass"}
 *   ID                      id-at-objectClass }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const objectClass: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_objectClass /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary AttributeTypeAndValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeTypeAndValue ::= SEQUENCE {
 *   type                  ATTRIBUTE.&id({SupportedAttributes}),
 *   value                 ATTRIBUTE.&Type({SupportedAttributes}{@type}),
 *   ... }
 * ```
 *
 * @class
 */
export class AttributeTypeAndValue {
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
     * @summary Restructures an object into a AttributeTypeAndValue
     * @description
     *
     * This takes an `object` and converts it to a `AttributeTypeAndValue`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeTypeAndValue`.
     * @returns {AttributeTypeAndValue}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof AttributeTypeAndValue]: AttributeTypeAndValue[_K] }
        >
    ): AttributeTypeAndValue {
        return new AttributeTypeAndValue(
            _o.type_,
            _o.value,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AttributeTypeAndValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeTypeAndValue: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("value", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of AttributeTypeAndValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeTypeAndValue: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AttributeTypeAndValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeTypeAndValue: $.ComponentSpec[] = [];
let _cached_decoder_for_AttributeTypeAndValue: $.ASN1Decoder<
    AttributeTypeAndValue
> | null = null;
let _cached_encoder_for_AttributeTypeAndValue: $.ASN1Encoder<
    AttributeTypeAndValue
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypeAndValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeTypeAndValue} The decoded data structure.
 */
export function _decode_AttributeTypeAndValue(el: _Element) {
    if (!_cached_decoder_for_AttributeTypeAndValue) {
        _cached_decoder_for_AttributeTypeAndValue = function (
            el: _Element
        ): AttributeTypeAndValue {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AttributeTypeAndValue contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: OBJECT_IDENTIFIER;
            let value!: _Element;
            type_ = $._decodeObjectIdentifier(sequence[0]);
            value = $._decodeAny(sequence[1]);
            return new AttributeTypeAndValue(type_, value, sequence.slice(2));
        };
    }
    return _cached_decoder_for_AttributeTypeAndValue(el);
}
/**
 * @summary Encodes a(n) AttributeTypeAndValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypeAndValue, encoded as an ASN.1 Element.
 */
export function _encode_AttributeTypeAndValue(
    value: AttributeTypeAndValue,
    elGetter: $.ASN1Encoder<AttributeTypeAndValue>
) {
    if (!_cached_encoder_for_AttributeTypeAndValue) {
        _cached_encoder_for_AttributeTypeAndValue = function (
            value: AttributeTypeAndValue,
            elGetter: $.ASN1Encoder<AttributeTypeAndValue>
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
    return _cached_encoder_for_AttributeTypeAndValue(value, elGetter);
}

export type RelativeDistinguishedName<> = AttributeTypeAndValue[]; // SetOfType
let _cached_decoder_for_RelativeDistinguishedName: $.ASN1Decoder<
    RelativeDistinguishedName
> | null = null;
let _cached_encoder_for_RelativeDistinguishedName: $.ASN1Encoder<
    RelativeDistinguishedName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RelativeDistinguishedName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelativeDistinguishedName} The decoded data structure.
 */
export function _decode_RelativeDistinguishedName(el: _Element) {
    if (!_cached_decoder_for_RelativeDistinguishedName) {
        _cached_decoder_for_RelativeDistinguishedName = $._decodeSetOf<
            AttributeTypeAndValue
        >(() => _decode_AttributeTypeAndValue);
    }
    return _cached_decoder_for_RelativeDistinguishedName(el);
}
/**
 * @summary Encodes a(n) RelativeDistinguishedName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelativeDistinguishedName, encoded as an ASN.1 Element.
 */
export function _encode_RelativeDistinguishedName(
    value: RelativeDistinguishedName,
    elGetter: $.ASN1Encoder<RelativeDistinguishedName>
) {
    if (!_cached_encoder_for_RelativeDistinguishedName) {
        _cached_encoder_for_RelativeDistinguishedName = $._encodeSetOf<
            AttributeTypeAndValue
        >(() => _encode_AttributeTypeAndValue, $.BER);
    }
    return _cached_encoder_for_RelativeDistinguishedName(value, elGetter);
}

export type RDNSequence<> = RelativeDistinguishedName[]; // SequenceOfType
let _cached_decoder_for_RDNSequence: $.ASN1Decoder<RDNSequence> | null = null;
let _cached_encoder_for_RDNSequence: $.ASN1Encoder<RDNSequence> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RDNSequence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RDNSequence} The decoded data structure.
 */
export function _decode_RDNSequence(el: _Element) {
    if (!_cached_decoder_for_RDNSequence) {
        _cached_decoder_for_RDNSequence = $._decodeSequenceOf<
            RelativeDistinguishedName
        >(() => _decode_RelativeDistinguishedName);
    }
    return _cached_decoder_for_RDNSequence(el);
}
/**
 * @summary Encodes a(n) RDNSequence into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RDNSequence, encoded as an ASN.1 Element.
 */
export function _encode_RDNSequence(
    value: RDNSequence,
    elGetter: $.ASN1Encoder<RDNSequence>
) {
    if (!_cached_encoder_for_RDNSequence) {
        _cached_encoder_for_RDNSequence = $._encodeSequenceOf<
            RelativeDistinguishedName
        >(() => _encode_RelativeDistinguishedName, $.BER);
    }
    return _cached_encoder_for_RDNSequence(value, elGetter);
}

export type DistinguishedName<> = RDNSequence; // DefinedType
let _cached_decoder_for_DistinguishedName: $.ASN1Decoder<
    DistinguishedName
> | null = null;
let _cached_encoder_for_DistinguishedName: $.ASN1Encoder<
    DistinguishedName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DistinguishedName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DistinguishedName} The decoded data structure.
 */
export function _decode_DistinguishedName(el: _Element) {
    if (!_cached_decoder_for_DistinguishedName) {
        _cached_decoder_for_DistinguishedName = _decode_RDNSequence;
    }
    return _cached_decoder_for_DistinguishedName(el);
}
/**
 * @summary Encodes a(n) DistinguishedName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistinguishedName, encoded as an ASN.1 Element.
 */
export function _encode_DistinguishedName(
    value: DistinguishedName,
    elGetter: $.ASN1Encoder<DistinguishedName>
) {
    if (!_cached_encoder_for_DistinguishedName) {
        _cached_encoder_for_DistinguishedName = _encode_RDNSequence;
    }
    return _cached_encoder_for_DistinguishedName(value, elGetter);
}

/**
 * @summary id_mr_distinguishedNameMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-distinguishedNameMatch           OBJECT IDENTIFIER ::= {id-mr 1}
 * ```
 *
 * @constant
 */
export const id_mr_distinguishedNameMatch: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_mr
);

/**
 * @summary distinguishedNameMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * distinguishedNameMatch MATCHING-RULE ::= {
 *   SYNTAX       DistinguishedName
 *   LDAP-SYNTAX  dn.&id
 *   LDAP-NAME    {"distinguishedNameMatch"}
 *   ID           id-mr-distinguishedNameMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const distinguishedNameMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_DistinguishedName,
    },
    encoderFor: {
        "&AssertionType": _encode_DistinguishedName,
    },
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_distinguishedNameMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_aliasedEntryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-aliasedEntryName                 OBJECT IDENTIFIER ::= {id-at 1}
 * ```
 *
 * @constant
 */
export const id_at_aliasedEntryName: OBJECT_IDENTIFIER = new _OID([1], id_at);

/**
 * @summary aliasedEntryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aliasedEntryName ATTRIBUTE ::= {
 *   WITH SYNTAX             DistinguishedName
 *   EQUALITY MATCHING RULE  distinguishedNameMatch
 *   SINGLE VALUE            TRUE
 *   LDAP-SYNTAX             dn.&id
 *   LDAP-NAME               {"aliasedObjectName"}
 *   ID                      id-at-aliasedEntryName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const aliasedEntryName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_aliasedEntryName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary SupportedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedAttributes ATTRIBUTE ::= {objectClass | aliasedEntryName, ...}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const SupportedAttributes: ATTRIBUTE[] = [objectClass, aliasedEntryName];

/**
 * @summary CONTEXT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CONTEXT ::= CLASS {
 *   &Type,
 *   &defaultValue   &Type OPTIONAL,
 *   &Assertion      OPTIONAL,
 *   &absentMatch    BOOLEAN DEFAULT TRUE,
 *   &id             OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   WITH SYNTAX     &Type
 *   [DEFAULT-VALUE  &defaultValue]
 *   [ASSERTED AS    &Assertion]
 *   [ABSENT-MATCH   &absentMatch]
 *   ID              &id }
 * ```
 *
 * @interface
 */
export interface CONTEXT<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Assertion = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "CONTEXT";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof CONTEXT<Type, Assertion>]: $.ASN1Decoder<
                CONTEXT<Type, Assertion>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof CONTEXT<Type, Assertion>]: $.ASN1Encoder<
                CONTEXT<Type, Assertion>[_K]
            >;
        }
    >;
    /**
     * @summary &Type
     */
    "&Type": Type;
    /**
     * @summary &defaultValue
     */
    "&defaultValue"?: CONTEXT["&Type"];
    /**
     * @summary &Assertion
     */
    "&Assertion": Assertion;
    /**
     * @summary &absentMatch
     */
    "&absentMatch"?: BOOLEAN;
    /**
     * @summary &id
     */
    "&id"?: OBJECT_IDENTIFIER;
}

/**
 * @summary SupportedContexts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedContexts CONTEXT ::= {...}
 * ```
 *
 * @constant
 * @type {CONTEXT[]}
 *
 */
export const SupportedContexts: CONTEXT[] = [];

/**
 * @summary Context
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Context ::= SEQUENCE {
 *   contextType    CONTEXT.&id({SupportedContexts}),
 *   contextValues
 *     SET SIZE (1..MAX) OF CONTEXT.&Type({SupportedContexts}{@contextType}),
 *   fallback       BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 * @class
 */
export class Context {
    constructor(
        /**
         * @summary `contextType`.
         * @public
         * @readonly
         */
        readonly contextType: OBJECT_IDENTIFIER,
        /**
         * @summary `contextValues`.
         * @public
         * @readonly
         */
        readonly contextValues: _Element[],
        /**
         * @summary `fallback`.
         * @public
         * @readonly
         */
        readonly fallback: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Context
     * @description
     *
     * This takes an `object` and converts it to a `Context`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Context`.
     * @returns {Context}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Context]: Context[_K] }>
    ): Context {
        return new Context(
            _o.contextType,
            _o.contextValues,
            _o.fallback,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `fallback`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_fallback() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of Context
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Context: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "contextType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contextValues",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "fallback",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Context
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Context: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Context
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Context: $.ComponentSpec[] = [];
let _cached_decoder_for_Context: $.ASN1Decoder<Context> | null = null;
let _cached_encoder_for_Context: $.ASN1Encoder<Context> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Context
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Context} The decoded data structure.
 */
export function _decode_Context(el: _Element) {
    if (!_cached_decoder_for_Context) {
        _cached_decoder_for_Context = function (el: _Element): Context {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let contextType!: OBJECT_IDENTIFIER;
            let contextValues!: _Element[];
            let fallback: OPTIONAL<BOOLEAN> =
                Context._default_value_for_fallback;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                contextType: (_el: _Element): void => {
                    contextType = $._decodeObjectIdentifier(_el);
                },
                contextValues: (_el: _Element): void => {
                    contextValues = $._decodeSetOf<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
                fallback: (_el: _Element): void => {
                    fallback = $._decodeBoolean(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Context,
                _extension_additions_list_spec_for_Context,
                _root_component_type_list_2_spec_for_Context,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Context(
                /* SEQUENCE_CONSTRUCTOR_CALL */ contextType,
                contextValues,
                fallback,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Context(el);
}
/**
 * @summary Encodes a(n) Context into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Context, encoded as an ASN.1 Element.
 */
export function _encode_Context(
    value: Context,
    elGetter: $.ASN1Encoder<Context>
) {
    if (!_cached_encoder_for_Context) {
        _cached_encoder_for_Context = function (
            value: Context,
            elGetter: $.ASN1Encoder<Context>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.contextType,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSetOf<_Element>(
                                () => $._encodeAny,
                                $.BER
                            )(value.contextValues, $.BER),
                            /* IF_DEFAULT */ value.fallback === undefined ||
                            $.deepEq(
                                value.fallback,
                                Context._default_value_for_fallback
                            )
                                ? undefined
                                : $._encodeBoolean(value.fallback, $.BER),
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
    return _cached_encoder_for_Context(value, elGetter);
}

/**
 * @summary Attribute_valuesWithContext_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute-valuesWithContext-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Attribute_valuesWithContext_Item {
    constructor(
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
        readonly contextList: Context[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Attribute_valuesWithContext_Item
     * @description
     *
     * This takes an `object` and converts it to a `Attribute_valuesWithContext_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Attribute_valuesWithContext_Item`.
     * @returns {Attribute_valuesWithContext_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof Attribute_valuesWithContext_Item]: Attribute_valuesWithContext_Item[_K];
            }
        >
    ): Attribute_valuesWithContext_Item {
        return new Attribute_valuesWithContext_Item(
            _o.value,
            _o.contextList,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of Attribute_valuesWithContext_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Attribute_valuesWithContext_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "contextList",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Attribute_valuesWithContext_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Attribute_valuesWithContext_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Attribute_valuesWithContext_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Attribute_valuesWithContext_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_Attribute_valuesWithContext_Item: $.ASN1Decoder<
    Attribute_valuesWithContext_Item
> | null = null;
let _cached_encoder_for_Attribute_valuesWithContext_Item: $.ASN1Encoder<
    Attribute_valuesWithContext_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Attribute_valuesWithContext_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute_valuesWithContext_Item} The decoded data structure.
 */
export function _decode_Attribute_valuesWithContext_Item(el: _Element) {
    if (!_cached_decoder_for_Attribute_valuesWithContext_Item) {
        _cached_decoder_for_Attribute_valuesWithContext_Item = function (
            el: _Element
        ): Attribute_valuesWithContext_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "Attribute-valuesWithContext-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "value";
            sequence[1].name = "contextList";
            let value!: _Element;
            let contextList!: Context[];
            value = $._decodeAny(sequence[0]);
            contextList = $._decodeSetOf<Context>(() => _decode_Context)(
                sequence[1]
            );
            return new Attribute_valuesWithContext_Item(
                value,
                contextList,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_Attribute_valuesWithContext_Item(el);
}
/**
 * @summary Encodes a(n) Attribute_valuesWithContext_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute_valuesWithContext_Item, encoded as an ASN.1 Element.
 */
export function _encode_Attribute_valuesWithContext_Item(
    value: Attribute_valuesWithContext_Item,
    elGetter: $.ASN1Encoder<Attribute_valuesWithContext_Item>
) {
    if (!_cached_encoder_for_Attribute_valuesWithContext_Item) {
        _cached_encoder_for_Attribute_valuesWithContext_Item = function (
            value: Attribute_valuesWithContext_Item,
            elGetter: $.ASN1Encoder<Attribute_valuesWithContext_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeAny(value.value, $.BER),
                            /* REQUIRED   */ $._encodeSetOf<Context>(
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
    return _cached_encoder_for_Attribute_valuesWithContext_Item(
        value,
        elGetter
    );
}

/**
 * @summary Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute {ATTRIBUTE:SupportedAttributes} ::= SEQUENCE {
 *   type                ATTRIBUTE.&id({SupportedAttributes}),
 *   values              SET SIZE (0..MAX) OF ATTRIBUTE.&Type({SupportedAttributes}{@type}),
 *   valuesWithContext   SET SIZE (1..MAX) OF SEQUENCE {
 *     value               ATTRIBUTE.&Type({SupportedAttributes}{@type}),
 *     contextList         SET SIZE (1..MAX) OF Context,
 *     ...} OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class Attribute {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `values`.
         * @public
         * @readonly
         */
        readonly values: _Element[],
        /**
         * @summary `valuesWithContext`.
         * @public
         * @readonly
         */
        readonly valuesWithContext: OPTIONAL<
            Attribute_valuesWithContext_Item[]
        >,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Attribute
     * @description
     *
     * This takes an `object` and converts it to a `Attribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Attribute`.
     * @returns {Attribute}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Attribute]: Attribute[_K] }>
    ): Attribute {
        return new Attribute(
            _o.type_,
            _o.values,
            _o.valuesWithContext,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Attribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "values",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "valuesWithContext",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Attribute: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Attribute: $.ComponentSpec[] = [];
let _cached_decoder_for_Attribute: $.ASN1Decoder<Attribute> | null = null;
let _cached_encoder_for_Attribute: $.ASN1Encoder<Attribute> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute} The decoded data structure.
 */
export function _decode_Attribute(el: _Element) {
    if (!_cached_decoder_for_Attribute) {
        _cached_decoder_for_Attribute = function (el: _Element): Attribute {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let type_!: OBJECT_IDENTIFIER;
            let values!: _Element[];
            let valuesWithContext: OPTIONAL<Attribute_valuesWithContext_Item[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                type: (_el: _Element): void => {
                    type_ = $._decodeObjectIdentifier(_el);
                },
                values: (_el: _Element): void => {
                    values = $._decodeSetOf<_Element>(() => $._decodeAny)(_el);
                },
                valuesWithContext: (_el: _Element): void => {
                    valuesWithContext = $._decodeSetOf<
                        Attribute_valuesWithContext_Item
                    >(() => _decode_Attribute_valuesWithContext_Item)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Attribute,
                _extension_additions_list_spec_for_Attribute,
                _root_component_type_list_2_spec_for_Attribute,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Attribute(
                /* SEQUENCE_CONSTRUCTOR_CALL */ type_,
                values,
                valuesWithContext,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Attribute(el);
}
/**
 * @summary Encodes a(n) Attribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Attribute(
    value: Attribute,
    elGetter: $.ASN1Encoder<Attribute>
) {
    if (!_cached_encoder_for_Attribute) {
        _cached_encoder_for_Attribute = function (
            value: Attribute,
            elGetter: $.ASN1Encoder<Attribute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.type_,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSetOf<_Element>(
                                () => $._encodeAny,
                                $.BER
                            )(value.values, $.BER),
                            /* IF_ABSENT  */ value.valuesWithContext ===
                            undefined
                                ? undefined
                                : $._encodeSetOf<
                                      Attribute_valuesWithContext_Item
                                  >(
                                      () =>
                                          _encode_Attribute_valuesWithContext_Item,
                                      $.BER
                                  )(value.valuesWithContext, $.BER),
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
    return _cached_encoder_for_Attribute(value, elGetter);
}

export type AttributeValue<> = _Element; // ObjectClassFieldType
let _cached_decoder_for_AttributeValue: $.ASN1Decoder<
    AttributeValue
> | null = null;
let _cached_encoder_for_AttributeValue: $.ASN1Encoder<
    AttributeValue
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeValue} The decoded data structure.
 */
export function _decode_AttributeValue(el: _Element) {
    if (!_cached_decoder_for_AttributeValue) {
        _cached_decoder_for_AttributeValue = $._decodeAny;
    }
    return _cached_decoder_for_AttributeValue(el);
}
/**
 * @summary Encodes a(n) AttributeValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValue, encoded as an ASN.1 Element.
 */
export function _encode_AttributeValue(
    value: AttributeValue,
    elGetter: $.ASN1Encoder<AttributeValue>
) {
    if (!_cached_encoder_for_AttributeValue) {
        _cached_encoder_for_AttributeValue = $._encodeAny;
    }
    return _cached_encoder_for_AttributeValue(value, elGetter);
}

/**
 * @summary ContextAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContextAssertion ::= SEQUENCE {
 *   contextType    CONTEXT.&id({SupportedContexts}),
 *   contextValues  SET SIZE (1..MAX) OF
 *       CONTEXT.&Assertion({SupportedContexts}{@contextType}),
 *   ... }
 * ```
 *
 * @class
 */
export class ContextAssertion {
    constructor(
        /**
         * @summary `contextType`.
         * @public
         * @readonly
         */
        readonly contextType: OBJECT_IDENTIFIER,
        /**
         * @summary `contextValues`.
         * @public
         * @readonly
         */
        readonly contextValues: _Element[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ContextAssertion
     * @description
     *
     * This takes an `object` and converts it to a `ContextAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContextAssertion`.
     * @returns {ContextAssertion}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ContextAssertion]: ContextAssertion[_K] }>
    ): ContextAssertion {
        return new ContextAssertion(
            _o.contextType,
            _o.contextValues,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ContextAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ContextAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "contextType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contextValues",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ContextAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ContextAssertion: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ContextAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ContextAssertion: $.ComponentSpec[] = [];
let _cached_decoder_for_ContextAssertion: $.ASN1Decoder<
    ContextAssertion
> | null = null;
let _cached_encoder_for_ContextAssertion: $.ASN1Encoder<
    ContextAssertion
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ContextAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContextAssertion} The decoded data structure.
 */
export function _decode_ContextAssertion(el: _Element) {
    if (!_cached_decoder_for_ContextAssertion) {
        _cached_decoder_for_ContextAssertion = function (
            el: _Element
        ): ContextAssertion {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ContextAssertion contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "contextType";
            sequence[1].name = "contextValues";
            let contextType!: OBJECT_IDENTIFIER;
            let contextValues!: _Element[];
            contextType = $._decodeObjectIdentifier(sequence[0]);
            contextValues = $._decodeSetOf<_Element>(() => $._decodeAny)(
                sequence[1]
            );
            return new ContextAssertion(
                contextType,
                contextValues,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_ContextAssertion(el);
}
/**
 * @summary Encodes a(n) ContextAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextAssertion, encoded as an ASN.1 Element.
 */
export function _encode_ContextAssertion(
    value: ContextAssertion,
    elGetter: $.ASN1Encoder<ContextAssertion>
) {
    if (!_cached_encoder_for_ContextAssertion) {
        _cached_encoder_for_ContextAssertion = function (
            value: ContextAssertion,
            elGetter: $.ASN1Encoder<ContextAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.contextType,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSetOf<_Element>(
                                () => $._encodeAny,
                                $.BER
                            )(value.contextValues, $.BER),
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
    return _cached_encoder_for_ContextAssertion(value, elGetter);
}

/**
 * @summary AttributeValueAssertion_assertedContexts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeValueAssertion-assertedContexts ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AttributeValueAssertion_assertedContexts =
    | { allContexts: NULL } /* CHOICE_ALT_ROOT */
    | { selectedContexts: ContextAssertion[] } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_AttributeValueAssertion_assertedContexts: $.ASN1Decoder<
    AttributeValueAssertion_assertedContexts
> | null = null;
let _cached_encoder_for_AttributeValueAssertion_assertedContexts: $.ASN1Encoder<
    AttributeValueAssertion_assertedContexts
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValueAssertion_assertedContexts
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeValueAssertion_assertedContexts} The decoded data structure.
 */
export function _decode_AttributeValueAssertion_assertedContexts(el: _Element) {
    if (!_cached_decoder_for_AttributeValueAssertion_assertedContexts) {
        _cached_decoder_for_AttributeValueAssertion_assertedContexts = $._decode_inextensible_choice<
            AttributeValueAssertion_assertedContexts
        >({
            "CONTEXT 0": [
                "allContexts",
                $._decode_explicit<NULL>(() => $._decodeNull),
            ],
            "CONTEXT 1": [
                "selectedContexts",
                $._decode_explicit<ContextAssertion[]>(() =>
                    $._decodeSetOf<ContextAssertion>(
                        () => _decode_ContextAssertion
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_AttributeValueAssertion_assertedContexts(el);
}
/**
 * @summary Encodes a(n) AttributeValueAssertion_assertedContexts into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValueAssertion_assertedContexts, encoded as an ASN.1 Element.
 */
export function _encode_AttributeValueAssertion_assertedContexts(
    value: AttributeValueAssertion_assertedContexts,
    elGetter: $.ASN1Encoder<AttributeValueAssertion_assertedContexts>
) {
    if (!_cached_encoder_for_AttributeValueAssertion_assertedContexts) {
        _cached_encoder_for_AttributeValueAssertion_assertedContexts = $._encode_choice<
            AttributeValueAssertion_assertedContexts
        >(
            {
                allContexts: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                selectedContexts: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSetOf<ContextAssertion>(
                            () => _encode_ContextAssertion,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AttributeValueAssertion_assertedContexts(
        value,
        elGetter
    );
}

/**
 * @summary AttributeValueAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeValueAssertion ::= SEQUENCE {
 *   type              ATTRIBUTE.&id({SupportedAttributes}),
 *   assertion         ATTRIBUTE.&equality-match.&AssertionType
 *                       ({SupportedAttributes}{@type}),
 *   assertedContexts  CHOICE {
 *     allContexts       [0]  NULL,
 *     selectedContexts  [1]  SET SIZE (1..MAX) OF ContextAssertion } OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class AttributeValueAssertion {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `assertion`.
         * @public
         * @readonly
         */
        readonly assertion: _Element,
        /**
         * @summary `assertedContexts`.
         * @public
         * @readonly
         */
        readonly assertedContexts: OPTIONAL<
            AttributeValueAssertion_assertedContexts
        >,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeValueAssertion
     * @description
     *
     * This takes an `object` and converts it to a `AttributeValueAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeValueAssertion`.
     * @returns {AttributeValueAssertion}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeValueAssertion]: AttributeValueAssertion[_K];
            }
        >
    ): AttributeValueAssertion {
        return new AttributeValueAssertion(
            _o.type_,
            _o.assertion,
            _o.assertedContexts,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AttributeValueAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("assertion", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "assertedContexts",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AttributeValueAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AttributeValueAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [];
let _cached_decoder_for_AttributeValueAssertion: $.ASN1Decoder<
    AttributeValueAssertion
> | null = null;
let _cached_encoder_for_AttributeValueAssertion: $.ASN1Encoder<
    AttributeValueAssertion
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValueAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeValueAssertion} The decoded data structure.
 */
export function _decode_AttributeValueAssertion(el: _Element) {
    if (!_cached_decoder_for_AttributeValueAssertion) {
        _cached_decoder_for_AttributeValueAssertion = function (
            el: _Element
        ): AttributeValueAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let type_!: OBJECT_IDENTIFIER;
            let assertion!: _Element;
            let assertedContexts: OPTIONAL<AttributeValueAssertion_assertedContexts>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                type: (_el: _Element): void => {
                    type_ = $._decodeObjectIdentifier(_el);
                },
                assertion: (_el: _Element): void => {
                    assertion = $._decodeAny(_el);
                },
                assertedContexts: (_el: _Element): void => {
                    assertedContexts = _decode_AttributeValueAssertion_assertedContexts(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeValueAssertion,
                _extension_additions_list_spec_for_AttributeValueAssertion,
                _root_component_type_list_2_spec_for_AttributeValueAssertion,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeValueAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ type_,
                assertion,
                assertedContexts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeValueAssertion(el);
}
/**
 * @summary Encodes a(n) AttributeValueAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValueAssertion, encoded as an ASN.1 Element.
 */
export function _encode_AttributeValueAssertion(
    value: AttributeValueAssertion,
    elGetter: $.ASN1Encoder<AttributeValueAssertion>
) {
    if (!_cached_encoder_for_AttributeValueAssertion) {
        _cached_encoder_for_AttributeValueAssertion = function (
            value: AttributeValueAssertion,
            elGetter: $.ASN1Encoder<AttributeValueAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.type_,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeAny(
                                value.assertion,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.assertedContexts ===
                            undefined
                                ? undefined
                                : _encode_AttributeValueAssertion_assertedContexts(
                                      value.assertedContexts,
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
    return _cached_encoder_for_AttributeValueAssertion(value, elGetter);
}

/**
 * @summary AttributeTypeAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeTypeAssertion ::= SEQUENCE {
 *   type              ATTRIBUTE.&id({SupportedAttributes}),
 *   assertedContexts  SEQUENCE SIZE (1..MAX) OF ContextAssertion OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class AttributeTypeAssertion {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `assertedContexts`.
         * @public
         * @readonly
         */
        readonly assertedContexts: OPTIONAL<ContextAssertion[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeTypeAssertion
     * @description
     *
     * This takes an `object` and converts it to a `AttributeTypeAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeTypeAssertion`.
     * @returns {AttributeTypeAssertion}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof AttributeTypeAssertion]: AttributeTypeAssertion[_K] }
        >
    ): AttributeTypeAssertion {
        return new AttributeTypeAssertion(
            _o.type_,
            _o.assertedContexts,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AttributeTypeAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeTypeAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "assertedContexts",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AttributeTypeAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeTypeAssertion: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AttributeTypeAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeTypeAssertion: $.ComponentSpec[] = [];
let _cached_decoder_for_AttributeTypeAssertion: $.ASN1Decoder<
    AttributeTypeAssertion
> | null = null;
let _cached_encoder_for_AttributeTypeAssertion: $.ASN1Encoder<
    AttributeTypeAssertion
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypeAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeTypeAssertion} The decoded data structure.
 */
export function _decode_AttributeTypeAssertion(el: _Element) {
    if (!_cached_decoder_for_AttributeTypeAssertion) {
        _cached_decoder_for_AttributeTypeAssertion = function (
            el: _Element
        ): AttributeTypeAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let type_!: OBJECT_IDENTIFIER;
            let assertedContexts: OPTIONAL<ContextAssertion[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                type: (_el: _Element): void => {
                    type_ = $._decodeObjectIdentifier(_el);
                },
                assertedContexts: (_el: _Element): void => {
                    assertedContexts = $._decodeSequenceOf<ContextAssertion>(
                        () => _decode_ContextAssertion
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeTypeAssertion,
                _extension_additions_list_spec_for_AttributeTypeAssertion,
                _root_component_type_list_2_spec_for_AttributeTypeAssertion,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeTypeAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ type_,
                assertedContexts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeTypeAssertion(el);
}
/**
 * @summary Encodes a(n) AttributeTypeAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypeAssertion, encoded as an ASN.1 Element.
 */
export function _encode_AttributeTypeAssertion(
    value: AttributeTypeAssertion,
    elGetter: $.ASN1Encoder<AttributeTypeAssertion>
) {
    if (!_cached_encoder_for_AttributeTypeAssertion) {
        _cached_encoder_for_AttributeTypeAssertion = function (
            value: AttributeTypeAssertion,
            elGetter: $.ASN1Encoder<AttributeTypeAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.type_,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.assertedContexts ===
                            undefined
                                ? undefined
                                : $._encodeSequenceOf<ContextAssertion>(
                                      () => _encode_ContextAssertion,
                                      $.BER
                                  )(value.assertedContexts, $.BER),
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
    return _cached_encoder_for_AttributeTypeAssertion(value, elGetter);
}

/**
 * @summary Name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Name  ::=  CHOICE { -- only one possibility for now -- rdnSequence  RDNSequence }
 * ```
 */
export type Name = { rdnSequence: RDNSequence } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_Name: $.ASN1Decoder<Name> | null = null;
let _cached_encoder_for_Name: $.ASN1Encoder<Name> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Name} The decoded data structure.
 */
export function _decode_Name(el: _Element) {
    if (!_cached_decoder_for_Name) {
        _cached_decoder_for_Name = $._decode_inextensible_choice<Name>({
            "UNIVERSAL 16": ["rdnSequence", _decode_RDNSequence],
        });
    }
    return _cached_decoder_for_Name(el);
}
/**
 * @summary Encodes a(n) Name into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Name, encoded as an ASN.1 Element.
 */
export function _encode_Name(value: Name, elGetter: $.ASN1Encoder<Name>) {
    if (!_cached_encoder_for_Name) {
        _cached_encoder_for_Name = $._encode_choice<Name>(
            {
                rdnSequence: _encode_RDNSequence,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Name(value, elGetter);
}

/**
 * @summary id_oc_top
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-top                              OBJECT IDENTIFIER ::= {id-oc 0}
 * ```
 *
 * @constant
 */
export const id_oc_top: OBJECT_IDENTIFIER = new _OID([0], id_oc);

/**
 * @summary ObjectClassKind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectClassKind ::= ENUMERATED {
 *   abstract   (0),
 *   structural (1),
 *   auxiliary  (2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ObjectClassKind {
    abstract = 0,
    structural = 1,
    auxiliary = 2,
}
/**
 * @summary ObjectClassKind
 */
export type ObjectClassKind = _enum_for_ObjectClassKind;
/**
 * @summary ObjectClassKind
 * @constant
 */
export const ObjectClassKind = _enum_for_ObjectClassKind;
/**
 * @summary ObjectClassKind_abstract
 * @constant
 * @type {number}
 */
export const ObjectClassKind_abstract: ObjectClassKind =
    ObjectClassKind.abstract; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ObjectClassKind_structural
 * @constant
 * @type {number}
 */
export const ObjectClassKind_structural: ObjectClassKind =
    ObjectClassKind.structural; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ObjectClassKind_auxiliary
 * @constant
 * @type {number}
 */
export const ObjectClassKind_auxiliary: ObjectClassKind =
    ObjectClassKind.auxiliary; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_ObjectClassKind: $.ASN1Decoder<
    ObjectClassKind
> | null = null;
let _cached_encoder_for_ObjectClassKind: $.ASN1Encoder<
    ObjectClassKind
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ObjectClassKind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectClassKind} The decoded data structure.
 */
export function _decode_ObjectClassKind(el: _Element) {
    if (!_cached_decoder_for_ObjectClassKind) {
        _cached_decoder_for_ObjectClassKind = $._decodeEnumerated;
    }
    return _cached_decoder_for_ObjectClassKind(el);
}
/**
 * @summary Encodes a(n) ObjectClassKind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectClassKind, encoded as an ASN.1 Element.
 */
export function _encode_ObjectClassKind(
    value: ObjectClassKind,
    elGetter: $.ASN1Encoder<ObjectClassKind>
) {
    if (!_cached_encoder_for_ObjectClassKind) {
        _cached_encoder_for_ObjectClassKind = $._encodeEnumerated;
    }
    return _cached_encoder_for_ObjectClassKind(value, elGetter);
}

/**
 * @summary OBJECT_CLASS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OBJECT-CLASS ::= CLASS {
 *   &Superclasses         OBJECT-CLASS OPTIONAL,
 *   &kind                 ObjectClassKind DEFAULT structural,
 *   &MandatoryAttributes  ATTRIBUTE OPTIONAL,
 *   &OptionalAttributes   ATTRIBUTE OPTIONAL,
 *   &ldapName             SEQUENCE SIZE(1..MAX) OF UTF8String OPTIONAL,
 *   &ldapDesc             UTF8String OPTIONAL,
 *   &id                   OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   [SUBCLASS OF          &Superclasses]
 *   [KIND                 &kind]
 *   [MUST CONTAIN         &MandatoryAttributes]
 *   [MAY CONTAIN          &OptionalAttributes]
 *   [LDAP-NAME            &ldapName]
 *   [LDAP-DESC            &ldapDesc]
 *   ID                    &id }
 * ```
 *
 * @interface
 */
export interface OBJECT_CLASS {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "OBJECT-CLASS";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof OBJECT_CLASS]: $.ASN1Decoder<OBJECT_CLASS[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof OBJECT_CLASS]: $.ASN1Encoder<OBJECT_CLASS[_K]>;
        }
    >;
    /**
     * @summary &Superclasses
     */
    "&Superclasses"?: OBJECT_CLASS[];
    /**
     * @summary &kind
     */
    "&kind"?: ObjectClassKind;
    /**
     * @summary &MandatoryAttributes
     */
    "&MandatoryAttributes"?: ATTRIBUTE[];
    /**
     * @summary &OptionalAttributes
     */
    "&OptionalAttributes"?: ATTRIBUTE[];
    /**
     * @summary &ldapName
     */
    "&ldapName"?: UTF8String[];
    /**
     * @summary &ldapDesc
     */
    "&ldapDesc"?: UTF8String;
    /**
     * @summary &id
     */
    "&id"?: OBJECT_IDENTIFIER;
}

/**
 * @summary top
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * top OBJECT-CLASS ::= {
 *   KIND          abstract
 *   MUST CONTAIN  {objectClass}
 *   LDAP-NAME     {"top"}
 *   ID            id-oc-top }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const top: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": ObjectClassKind_abstract /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&ldapName": undefined,
    "&id": id_oc_top /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_alias
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-alias                            OBJECT IDENTIFIER ::= {id-oc 1}
 * ```
 *
 * @constant
 */
export const id_oc_alias: OBJECT_IDENTIFIER = new _OID([1], id_oc);

/**
 * @summary alias
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * alias OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {aliasedEntryName}
 *   LDAP-NAME     {"alias"}
 *   ID            id-oc-alias }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const alias: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&ldapName": undefined,
    "&id": id_oc_alias /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_parent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-parent                           OBJECT IDENTIFIER ::= {id-oc 28}
 * ```
 *
 * @constant
 */
export const id_oc_parent: OBJECT_IDENTIFIER = new _OID([28], id_oc);

/**
 * @summary parent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * parent OBJECT-CLASS ::= {
 *   KIND          abstract
 *   ID            id-oc-parent }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const parent: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": ObjectClassKind_abstract /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_parent /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_child
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-child                            OBJECT IDENTIFIER ::= {id-oc 29}
 * ```
 *
 * @constant
 */
export const id_oc_child: OBJECT_IDENTIFIER = new _OID([29], id_oc);

/**
 * @summary child
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * child OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   ID            id-oc-child }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const child: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_child /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary MAPPING_BASED_MATCHING
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MAPPING-BASED-MATCHING
 *   {SelectedBy, BOOLEAN:combinable, MappingResult, OBJECT IDENTIFIER:matchingRule} ::= CLASS {
 *   &selectBy             SelectedBy OPTIONAL,
 *   &ApplicableTo         ATTRIBUTE,
 *   &subtypesIncluded     BOOLEAN DEFAULT TRUE,
 *   &combinable           BOOLEAN(combinable),
 *   &mappingResults       MappingResult OPTIONAL,
 *   &userControl          BOOLEAN DEFAULT FALSE,
 *   &exclusive            BOOLEAN DEFAULT TRUE,
 *   &matching-rule        MATCHING-RULE.&id(matchingRule),
 *   &id                   OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   [SELECT BY            &selectBy]
 *   APPLICABLE TO         &ApplicableTo
 *   [SUBTYPES INCLUDED    &subtypesIncluded]
 *   COMBINABLE            &combinable
 *   [MAPPING RESULTS      &mappingResults]
 *   [USER CONTROL         &userControl]
 *   [EXCLUSIVE            &exclusive]
 *   MATCHING RULE         &matching-rule
 *   ID                    &id }
 * ```
 *
 * @interface
 */
export interface MAPPING_BASED_MATCHING<
    SelectedBy /* OBJECT_CLASS_ASSIGNMENT_PARAMETER */,
    MappingResult /* OBJECT_CLASS_ASSIGNMENT_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "MAPPING-BASED-MATCHING";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof MAPPING_BASED_MATCHING<
                SelectedBy,
                MappingResult
            >]: $.ASN1Decoder<
                MAPPING_BASED_MATCHING<SelectedBy, MappingResult>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof MAPPING_BASED_MATCHING<
                SelectedBy,
                MappingResult
            >]: $.ASN1Encoder<
                MAPPING_BASED_MATCHING<SelectedBy, MappingResult>[_K]
            >;
        }
    >;
    /**
     * @summary &selectBy
     */
    "&selectBy"?: SelectedBy;
    /**
     * @summary &ApplicableTo
     */
    "&ApplicableTo"?: ATTRIBUTE[];
    /**
     * @summary &subtypesIncluded
     */
    "&subtypesIncluded"?: BOOLEAN;
    /**
     * @summary &combinable
     */
    "&combinable"?: BOOLEAN;
    /**
     * @summary &mappingResults
     */
    "&mappingResults"?: MappingResult;
    /**
     * @summary &userControl
     */
    "&userControl"?: BOOLEAN;
    /**
     * @summary &exclusive
     */
    "&exclusive"?: BOOLEAN;
    /**
     * @summary &matching-rule
     */
    "&matching-rule"?: OBJECT_IDENTIFIER;
    /**
     * @summary &id
     */
    "&id"?: OBJECT_IDENTIFIER;
}

/**
 * @summary RuleIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RuleIdentifier  ::=  INTEGER
 * ```
 */
export type RuleIdentifier = INTEGER;
let _cached_decoder_for_RuleIdentifier: $.ASN1Decoder<
    RuleIdentifier
> | null = null;
let _cached_encoder_for_RuleIdentifier: $.ASN1Encoder<
    RuleIdentifier
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RuleIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RuleIdentifier} The decoded data structure.
 */
export function _decode_RuleIdentifier(el: _Element) {
    if (!_cached_decoder_for_RuleIdentifier) {
        _cached_decoder_for_RuleIdentifier = $._decodeInteger;
    }
    return _cached_decoder_for_RuleIdentifier(el);
}
/**
 * @summary Encodes a(n) RuleIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RuleIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_RuleIdentifier(
    value: RuleIdentifier,
    elGetter: $.ASN1Encoder<RuleIdentifier>
) {
    if (!_cached_encoder_for_RuleIdentifier) {
        _cached_encoder_for_RuleIdentifier = $._encodeInteger;
    }
    return _cached_encoder_for_RuleIdentifier(value, elGetter);
}

/**
 * @summary NAME_FORM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NAME-FORM ::= CLASS {
 *   &namedObjectClass     OBJECT-CLASS,
 *   &MandatoryAttributes  ATTRIBUTE,
 *   &OptionalAttributes   ATTRIBUTE OPTIONAL,
 *   &ldapName             SEQUENCE SIZE(1..MAX) OF UTF8String OPTIONAL,
 *   &ldapDesc             UTF8String OPTIONAL,
 *   &id                   OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   NAMES                 &namedObjectClass
 *   WITH ATTRIBUTES       &MandatoryAttributes
 *   [AND OPTIONALLY       &OptionalAttributes]
 *   [LDAP-NAME            &ldapName]
 *   [LDAP-DESC            &ldapDesc]
 *   ID                    &id }
 * ```
 *
 * @interface
 */
export interface NAME_FORM {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "NAME-FORM";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof NAME_FORM]: $.ASN1Decoder<NAME_FORM[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof NAME_FORM]: $.ASN1Encoder<NAME_FORM[_K]>;
        }
    >;
    /**
     * @summary &namedObjectClass
     */
    "&namedObjectClass"?: OBJECT_CLASS;
    /**
     * @summary &MandatoryAttributes
     */
    "&MandatoryAttributes"?: ATTRIBUTE[];
    /**
     * @summary &OptionalAttributes
     */
    "&OptionalAttributes"?: ATTRIBUTE[];
    /**
     * @summary &ldapName
     */
    "&ldapName"?: UTF8String[];
    /**
     * @summary &ldapDesc
     */
    "&ldapDesc"?: UTF8String;
    /**
     * @summary &id
     */
    "&id"?: OBJECT_IDENTIFIER;
}

/**
 * @summary DITStructureRule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DITStructureRule ::= SEQUENCE {
 *   ruleIdentifier          RuleIdentifier,
 *                  -- shall be unique within the scope of the subschema
 *   nameForm                NAME-FORM.&id,
 *   superiorStructureRules  SET SIZE (1..MAX) OF RuleIdentifier OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class DITStructureRule {
    constructor(
        /**
         * @summary `ruleIdentifier`.
         * @public
         * @readonly
         */
        readonly ruleIdentifier: RuleIdentifier,
        /**
         * @summary `nameForm`.
         * @public
         * @readonly
         */
        readonly nameForm: OBJECT_IDENTIFIER,
        /**
         * @summary `superiorStructureRules`.
         * @public
         * @readonly
         */
        readonly superiorStructureRules: OPTIONAL<RuleIdentifier[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DITStructureRule
     * @description
     *
     * This takes an `object` and converts it to a `DITStructureRule`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DITStructureRule`.
     * @returns {DITStructureRule}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DITStructureRule]: DITStructureRule[_K] }>
    ): DITStructureRule {
        return new DITStructureRule(
            _o.ruleIdentifier,
            _o.nameForm,
            _o.superiorStructureRules,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of DITStructureRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DITStructureRule: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ruleIdentifier",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nameForm",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "superiorStructureRules",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DITStructureRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DITStructureRule: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DITStructureRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DITStructureRule: $.ComponentSpec[] = [];
let _cached_decoder_for_DITStructureRule: $.ASN1Decoder<
    DITStructureRule
> | null = null;
let _cached_encoder_for_DITStructureRule: $.ASN1Encoder<
    DITStructureRule
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DITStructureRule
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DITStructureRule} The decoded data structure.
 */
export function _decode_DITStructureRule(el: _Element) {
    if (!_cached_decoder_for_DITStructureRule) {
        _cached_decoder_for_DITStructureRule = function (
            el: _Element
        ): DITStructureRule {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let ruleIdentifier!: RuleIdentifier;
            let nameForm!: OBJECT_IDENTIFIER;
            let superiorStructureRules: OPTIONAL<RuleIdentifier[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                ruleIdentifier: (_el: _Element): void => {
                    ruleIdentifier = _decode_RuleIdentifier(_el);
                },
                nameForm: (_el: _Element): void => {
                    nameForm = $._decodeObjectIdentifier(_el);
                },
                superiorStructureRules: (_el: _Element): void => {
                    superiorStructureRules = $._decodeSetOf<RuleIdentifier>(
                        () => _decode_RuleIdentifier
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DITStructureRule,
                _extension_additions_list_spec_for_DITStructureRule,
                _root_component_type_list_2_spec_for_DITStructureRule,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DITStructureRule(
                /* SEQUENCE_CONSTRUCTOR_CALL */ ruleIdentifier,
                nameForm,
                superiorStructureRules,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DITStructureRule(el);
}
/**
 * @summary Encodes a(n) DITStructureRule into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITStructureRule, encoded as an ASN.1 Element.
 */
export function _encode_DITStructureRule(
    value: DITStructureRule,
    elGetter: $.ASN1Encoder<DITStructureRule>
) {
    if (!_cached_encoder_for_DITStructureRule) {
        _cached_encoder_for_DITStructureRule = function (
            value: DITStructureRule,
            elGetter: $.ASN1Encoder<DITStructureRule>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_RuleIdentifier(
                                value.ruleIdentifier,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.nameForm,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.superiorStructureRules ===
                            undefined
                                ? undefined
                                : $._encodeSetOf<RuleIdentifier>(
                                      () => _encode_RuleIdentifier,
                                      $.BER
                                  )(value.superiorStructureRules, $.BER),
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
    return _cached_encoder_for_DITStructureRule(value, elGetter);
}

/**
 * @summary DITContentRule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DITContentRule ::= SEQUENCE {
 *   structuralObjectClass       OBJECT-CLASS.&id,
 *   auxiliaries                 SET SIZE (1..MAX) OF OBJECT-CLASS.&id OPTIONAL,
 *   mandatory              [1]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
 *   optional               [2]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
 *   precluded              [3]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class DITContentRule {
    constructor(
        /**
         * @summary `structuralObjectClass`.
         * @public
         * @readonly
         */
        readonly structuralObjectClass: OBJECT_IDENTIFIER,
        /**
         * @summary `auxiliaries`.
         * @public
         * @readonly
         */
        readonly auxiliaries: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `mandatory`.
         * @public
         * @readonly
         */
        readonly mandatory: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `optional`.
         * @public
         * @readonly
         */
        readonly optional: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `precluded`.
         * @public
         * @readonly
         */
        readonly precluded: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DITContentRule
     * @description
     *
     * This takes an `object` and converts it to a `DITContentRule`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DITContentRule`.
     * @returns {DITContentRule}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DITContentRule]: DITContentRule[_K] }>
    ): DITContentRule {
        return new DITContentRule(
            _o.structuralObjectClass,
            _o.auxiliaries,
            _o.mandatory,
            _o.optional,
            _o.precluded,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of DITContentRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DITContentRule: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "structuralObjectClass",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "auxiliaries",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "mandatory",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "optional",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "precluded",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DITContentRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DITContentRule: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DITContentRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DITContentRule: $.ComponentSpec[] = [];
let _cached_decoder_for_DITContentRule: $.ASN1Decoder<
    DITContentRule
> | null = null;
let _cached_encoder_for_DITContentRule: $.ASN1Encoder<
    DITContentRule
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DITContentRule
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DITContentRule} The decoded data structure.
 */
export function _decode_DITContentRule(el: _Element) {
    if (!_cached_decoder_for_DITContentRule) {
        _cached_decoder_for_DITContentRule = function (
            el: _Element
        ): DITContentRule {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let structuralObjectClass!: OBJECT_IDENTIFIER;
            let auxiliaries: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let mandatory: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let optional: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let precluded: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                structuralObjectClass: (_el: _Element): void => {
                    structuralObjectClass = $._decodeObjectIdentifier(_el);
                },
                auxiliaries: (_el: _Element): void => {
                    auxiliaries = $._decodeSetOf<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                mandatory: (_el: _Element): void => {
                    mandatory = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
                optional: (_el: _Element): void => {
                    optional = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
                precluded: (_el: _Element): void => {
                    precluded = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DITContentRule,
                _extension_additions_list_spec_for_DITContentRule,
                _root_component_type_list_2_spec_for_DITContentRule,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DITContentRule(
                /* SEQUENCE_CONSTRUCTOR_CALL */ structuralObjectClass,
                auxiliaries,
                mandatory,
                optional,
                precluded,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DITContentRule(el);
}
/**
 * @summary Encodes a(n) DITContentRule into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITContentRule, encoded as an ASN.1 Element.
 */
export function _encode_DITContentRule(
    value: DITContentRule,
    elGetter: $.ASN1Encoder<DITContentRule>
) {
    if (!_cached_encoder_for_DITContentRule) {
        _cached_encoder_for_DITContentRule = function (
            value: DITContentRule,
            elGetter: $.ASN1Encoder<DITContentRule>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.structuralObjectClass,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.auxiliaries === undefined
                                ? undefined
                                : $._encodeSetOf<OBJECT_IDENTIFIER>(
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.auxiliaries, $.BER),
                            /* IF_ABSENT  */ value.mandatory === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.mandatory, $.BER),
                            /* IF_ABSENT  */ value.optional === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.optional, $.BER),
                            /* IF_ABSENT  */ value.precluded === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.precluded, $.BER),
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
    return _cached_encoder_for_DITContentRule(value, elGetter);
}

/**
 * @summary CONTENT_RULE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CONTENT-RULE ::= CLASS {
 *   &structuralClass          OBJECT-CLASS.&id UNIQUE,
 *   &Auxiliaries              OBJECT-CLASS OPTIONAL,
 *   &Mandatory                ATTRIBUTE OPTIONAL,
 *   &Optional                 ATTRIBUTE OPTIONAL,
 *   &Precluded                ATTRIBUTE OPTIONAL }
 * WITH SYNTAX {
 *   STRUCTURAL OBJECT-CLASS   &structuralClass
 *   [AUXILIARY OBJECT-CLASSES &Auxiliaries]
 *   [MUST CONTAIN             &Mandatory]
 *   [MAY CONTAIN              &Optional]
 *   [MUST-NOT CONTAIN         &Precluded] }
 * ```
 *
 * @interface
 */
export interface CONTENT_RULE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "CONTENT-RULE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof CONTENT_RULE]: $.ASN1Decoder<CONTENT_RULE[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof CONTENT_RULE]: $.ASN1Encoder<CONTENT_RULE[_K]>;
        }
    >;
    /**
     * @summary &structuralClass
     */
    "&structuralClass"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Auxiliaries
     */
    "&Auxiliaries"?: OBJECT_CLASS[];
    /**
     * @summary &Mandatory
     */
    "&Mandatory"?: ATTRIBUTE[];
    /**
     * @summary &Optional
     */
    "&Optional"?: ATTRIBUTE[];
    /**
     * @summary &Precluded
     */
    "&Precluded"?: ATTRIBUTE[];
}

/**
 * @summary DITContextUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DITContextUse ::= SEQUENCE {
 *   attributeType           ATTRIBUTE.&id,
 *   mandatoryContexts  [1]  SET SIZE (1..MAX) OF CONTEXT.&id OPTIONAL,
 *   optionalContexts   [2]  SET SIZE (1..MAX) OF CONTEXT.&id OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class DITContextUse {
    constructor(
        /**
         * @summary `attributeType`.
         * @public
         * @readonly
         */
        readonly attributeType: OBJECT_IDENTIFIER,
        /**
         * @summary `mandatoryContexts`.
         * @public
         * @readonly
         */
        readonly mandatoryContexts: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `optionalContexts`.
         * @public
         * @readonly
         */
        readonly optionalContexts: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DITContextUse
     * @description
     *
     * This takes an `object` and converts it to a `DITContextUse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DITContextUse`.
     * @returns {DITContextUse}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DITContextUse]: DITContextUse[_K] }>
    ): DITContextUse {
        return new DITContextUse(
            _o.attributeType,
            _o.mandatoryContexts,
            _o.optionalContexts,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of DITContextUse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DITContextUse: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "attributeType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "mandatoryContexts",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "optionalContexts",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DITContextUse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DITContextUse: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DITContextUse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DITContextUse: $.ComponentSpec[] = [];
let _cached_decoder_for_DITContextUse: $.ASN1Decoder<
    DITContextUse
> | null = null;
let _cached_encoder_for_DITContextUse: $.ASN1Encoder<
    DITContextUse
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DITContextUse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DITContextUse} The decoded data structure.
 */
export function _decode_DITContextUse(el: _Element) {
    if (!_cached_decoder_for_DITContextUse) {
        _cached_decoder_for_DITContextUse = function (
            el: _Element
        ): DITContextUse {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attributeType!: OBJECT_IDENTIFIER;
            let mandatoryContexts: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let optionalContexts: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                attributeType: (_el: _Element): void => {
                    attributeType = $._decodeObjectIdentifier(_el);
                },
                mandatoryContexts: (_el: _Element): void => {
                    mandatoryContexts = $._decode_explicit<OBJECT_IDENTIFIER[]>(
                        () =>
                            $._decodeSetOf<OBJECT_IDENTIFIER>(
                                () => $._decodeObjectIdentifier
                            )
                    )(_el);
                },
                optionalContexts: (_el: _Element): void => {
                    optionalContexts = $._decode_explicit<OBJECT_IDENTIFIER[]>(
                        () =>
                            $._decodeSetOf<OBJECT_IDENTIFIER>(
                                () => $._decodeObjectIdentifier
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DITContextUse,
                _extension_additions_list_spec_for_DITContextUse,
                _root_component_type_list_2_spec_for_DITContextUse,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DITContextUse(
                /* SEQUENCE_CONSTRUCTOR_CALL */ attributeType,
                mandatoryContexts,
                optionalContexts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DITContextUse(el);
}
/**
 * @summary Encodes a(n) DITContextUse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITContextUse, encoded as an ASN.1 Element.
 */
export function _encode_DITContextUse(
    value: DITContextUse,
    elGetter: $.ASN1Encoder<DITContextUse>
) {
    if (!_cached_encoder_for_DITContextUse) {
        _cached_encoder_for_DITContextUse = function (
            value: DITContextUse,
            elGetter: $.ASN1Encoder<DITContextUse>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.attributeType,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.mandatoryContexts ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.mandatoryContexts, $.BER),
                            /* IF_ABSENT  */ value.optionalContexts ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.optionalContexts, $.BER),
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
    return _cached_encoder_for_DITContextUse(value, elGetter);
}

/**
 * @summary DIT_CONTEXT_USE_RULE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DIT-CONTEXT-USE-RULE ::= CLASS {
 *   &attributeType      ATTRIBUTE.&id UNIQUE,
 *   &Mandatory          CONTEXT OPTIONAL,
 *   &Optional           CONTEXT OPTIONAL}
 * WITH SYNTAX {
 *   ATTRIBUTE TYPE      &attributeType
 *   [MANDATORY CONTEXTS &Mandatory]
 *   [OPTIONAL CONTEXTS  &Optional] }
 * ```
 *
 * @interface
 */
export interface DIT_CONTEXT_USE_RULE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "DIT-CONTEXT-USE-RULE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof DIT_CONTEXT_USE_RULE]: $.ASN1Decoder<
                DIT_CONTEXT_USE_RULE[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof DIT_CONTEXT_USE_RULE]: $.ASN1Encoder<
                DIT_CONTEXT_USE_RULE[_K]
            >;
        }
    >;
    /**
     * @summary &attributeType
     */
    "&attributeType"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Mandatory
     */
    "&Mandatory"?: CONTEXT[];
    /**
     * @summary &Optional
     */
    "&Optional"?: CONTEXT[];
}

/**
 * @summary FRIENDS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FRIENDS ::= CLASS {
 *   &anchor   ATTRIBUTE.&id UNIQUE,
 *   &Friends  ATTRIBUTE }
 * WITH SYNTAX {
 *   ANCHOR    &anchor
 *   FRIENDS   &Friends }
 * ```
 *
 * @interface
 */
export interface FRIENDS {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "FRIENDS";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof FRIENDS]: $.ASN1Decoder<FRIENDS[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof FRIENDS]: $.ASN1Encoder<FRIENDS[_K]>;
        }
    >;
    /**
     * @summary &anchor
     */
    "&anchor"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Friends
     */
    "&Friends"?: ATTRIBUTE[];
}

export type LocalName<> = RDNSequence; // DefinedType
let _cached_decoder_for_LocalName: $.ASN1Decoder<LocalName> | null = null;
let _cached_encoder_for_LocalName: $.ASN1Encoder<LocalName> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) LocalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocalName} The decoded data structure.
 */
export function _decode_LocalName(el: _Element) {
    if (!_cached_decoder_for_LocalName) {
        _cached_decoder_for_LocalName = _decode_RDNSequence;
    }
    return _cached_decoder_for_LocalName(el);
}
/**
 * @summary Encodes a(n) LocalName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalName, encoded as an ASN.1 Element.
 */
export function _encode_LocalName(
    value: LocalName,
    elGetter: $.ASN1Encoder<LocalName>
) {
    if (!_cached_encoder_for_LocalName) {
        _cached_encoder_for_LocalName = _encode_RDNSequence;
    }
    return _cached_encoder_for_LocalName(value, elGetter);
}

/**
 * @summary ChopSpecification_specificExclusions_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChopSpecification-specificExclusions-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ChopSpecification_specificExclusions_Item =
    | { chopBefore: LocalName } /* CHOICE_ALT_ROOT */
    | { chopAfter: LocalName } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ChopSpecification_specificExclusions_Item: $.ASN1Decoder<
    ChopSpecification_specificExclusions_Item
> | null = null;
let _cached_encoder_for_ChopSpecification_specificExclusions_Item: $.ASN1Encoder<
    ChopSpecification_specificExclusions_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ChopSpecification_specificExclusions_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChopSpecification_specificExclusions_Item} The decoded data structure.
 */
export function _decode_ChopSpecification_specificExclusions_Item(
    el: _Element
) {
    if (!_cached_decoder_for_ChopSpecification_specificExclusions_Item) {
        _cached_decoder_for_ChopSpecification_specificExclusions_Item = $._decode_extensible_choice<
            ChopSpecification_specificExclusions_Item
        >({
            "CONTEXT 0": [
                "chopBefore",
                $._decode_explicit<LocalName>(() => _decode_LocalName),
            ],
            "CONTEXT 1": [
                "chopAfter",
                $._decode_explicit<LocalName>(() => _decode_LocalName),
            ],
        });
    }
    return _cached_decoder_for_ChopSpecification_specificExclusions_Item(el);
}
/**
 * @summary Encodes a(n) ChopSpecification_specificExclusions_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChopSpecification_specificExclusions_Item, encoded as an ASN.1 Element.
 */
export function _encode_ChopSpecification_specificExclusions_Item(
    value: ChopSpecification_specificExclusions_Item,
    elGetter: $.ASN1Encoder<ChopSpecification_specificExclusions_Item>
) {
    if (!_cached_encoder_for_ChopSpecification_specificExclusions_Item) {
        _cached_encoder_for_ChopSpecification_specificExclusions_Item = $._encode_choice<
            ChopSpecification_specificExclusions_Item
        >(
            {
                chopBefore: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_LocalName,
                    $.BER
                ),
                chopAfter: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_LocalName,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ChopSpecification_specificExclusions_Item(
        value,
        elGetter
    );
}

/**
 * @summary BaseDistance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BaseDistance  ::=  INTEGER(0..MAX)
 * ```
 */
export type BaseDistance = INTEGER;
let _cached_decoder_for_BaseDistance: $.ASN1Decoder<BaseDistance> | null = null;
let _cached_encoder_for_BaseDistance: $.ASN1Encoder<BaseDistance> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) BaseDistance
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BaseDistance} The decoded data structure.
 */
export function _decode_BaseDistance(el: _Element) {
    if (!_cached_decoder_for_BaseDistance) {
        _cached_decoder_for_BaseDistance = $._decodeInteger;
    }
    return _cached_decoder_for_BaseDistance(el);
}
/**
 * @summary Encodes a(n) BaseDistance into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BaseDistance, encoded as an ASN.1 Element.
 */
export function _encode_BaseDistance(
    value: BaseDistance,
    elGetter: $.ASN1Encoder<BaseDistance>
) {
    if (!_cached_encoder_for_BaseDistance) {
        _cached_encoder_for_BaseDistance = $._encodeInteger;
    }
    return _cached_encoder_for_BaseDistance(value, elGetter);
}

/**
 * @summary ChopSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChopSpecification ::= SEQUENCE {
 *   specificExclusions    [1]  SET SIZE (1..MAX) OF CHOICE {
 *     chopBefore  [0]  LocalName,
 *     chopAfter   [1]  LocalName,
 *     ...} OPTIONAL,
 *   minimum       [2]  BaseDistance DEFAULT 0,
 *   maximum       [3]  BaseDistance OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ChopSpecification {
    constructor(
        /**
         * @summary `specificExclusions`.
         * @public
         * @readonly
         */
        readonly specificExclusions: OPTIONAL<
            ChopSpecification_specificExclusions_Item[]
        >,
        /**
         * @summary `minimum`.
         * @public
         * @readonly
         */
        readonly minimum: OPTIONAL<BaseDistance>,
        /**
         * @summary `maximum`.
         * @public
         * @readonly
         */
        readonly maximum: OPTIONAL<BaseDistance>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ChopSpecification
     * @description
     *
     * This takes an `object` and converts it to a `ChopSpecification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChopSpecification`.
     * @returns {ChopSpecification}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ChopSpecification]: ChopSpecification[_K] }>
    ): ChopSpecification {
        return new ChopSpecification(
            _o.specificExclusions,
            _o.minimum,
            _o.maximum,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `minimum`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_minimum() {
        return 0;
    }
}
/**
 * @summary The Leading Root Component Types of ChopSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ChopSpecification: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "specificExclusions",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "minimum",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "maximum",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ChopSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ChopSpecification: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ChopSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ChopSpecification: $.ComponentSpec[] = [];
let _cached_decoder_for_ChopSpecification: $.ASN1Decoder<
    ChopSpecification
> | null = null;
let _cached_encoder_for_ChopSpecification: $.ASN1Encoder<
    ChopSpecification
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ChopSpecification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChopSpecification} The decoded data structure.
 */
export function _decode_ChopSpecification(el: _Element) {
    if (!_cached_decoder_for_ChopSpecification) {
        _cached_decoder_for_ChopSpecification = function (
            el: _Element
        ): ChopSpecification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let specificExclusions: OPTIONAL<
                ChopSpecification_specificExclusions_Item[]
            >;
            let minimum: OPTIONAL<BaseDistance> =
                ChopSpecification._default_value_for_minimum;
            let maximum: OPTIONAL<BaseDistance>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                specificExclusions: (_el: _Element): void => {
                    specificExclusions = $._decode_explicit<
                        ChopSpecification_specificExclusions_Item[]
                    >(() =>
                        $._decodeSetOf<
                            ChopSpecification_specificExclusions_Item
                        >(
                            () =>
                                _decode_ChopSpecification_specificExclusions_Item
                        )
                    )(_el);
                },
                minimum: (_el: _Element): void => {
                    minimum = $._decode_explicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
                maximum: (_el: _Element): void => {
                    maximum = $._decode_explicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ChopSpecification,
                _extension_additions_list_spec_for_ChopSpecification,
                _root_component_type_list_2_spec_for_ChopSpecification,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ChopSpecification(
                /* SEQUENCE_CONSTRUCTOR_CALL */ specificExclusions,
                minimum,
                maximum,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ChopSpecification(el);
}
/**
 * @summary Encodes a(n) ChopSpecification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChopSpecification, encoded as an ASN.1 Element.
 */
export function _encode_ChopSpecification(
    value: ChopSpecification,
    elGetter: $.ASN1Encoder<ChopSpecification>
) {
    if (!_cached_encoder_for_ChopSpecification) {
        _cached_encoder_for_ChopSpecification = function (
            value: ChopSpecification,
            elGetter: $.ASN1Encoder<ChopSpecification>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.specificExclusions ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSetOf<
                                              ChopSpecification_specificExclusions_Item
                                          >(
                                              () =>
                                                  _encode_ChopSpecification_specificExclusions_Item,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.specificExclusions, $.BER),
                            /* IF_DEFAULT */ value.minimum === undefined ||
                            $.deepEq(
                                value.minimum,
                                ChopSpecification._default_value_for_minimum
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_BaseDistance,
                                      $.BER
                                  )(value.minimum, $.BER),
                            /* IF_ABSENT  */ value.maximum === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_BaseDistance,
                                      $.BER
                                  )(value.maximum, $.BER),
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
    return _cached_encoder_for_ChopSpecification(value, elGetter);
}

/**
 * @summary Refinement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Refinement  ::=  CHOICE {
 *   item  [0]  OBJECT-CLASS.&id,
 *   and   [1]  SET SIZE (1..MAX) OF Refinement,
 *   or    [2]  SET SIZE (1..MAX) OF Refinement,
 *   not   [3]  Refinement,
 *   ... }
 * ```
 */
export type Refinement =
    | { item: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { and: Refinement[] } /* CHOICE_ALT_ROOT */
    | { or: Refinement[] } /* CHOICE_ALT_ROOT */
    | { not: Refinement } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Refinement: $.ASN1Decoder<Refinement> | null = null;
let _cached_encoder_for_Refinement: $.ASN1Encoder<Refinement> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Refinement
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Refinement} The decoded data structure.
 */
export function _decode_Refinement(el: _Element) {
    if (!_cached_decoder_for_Refinement) {
        _cached_decoder_for_Refinement = $._decode_extensible_choice<
            Refinement
        >({
            "CONTEXT 0": [
                "item",
                $._decode_explicit<OBJECT_IDENTIFIER>(
                    () => $._decodeObjectIdentifier
                ),
            ],
            "CONTEXT 1": [
                "and",
                $._decode_explicit<Refinement[]>(() =>
                    $._decodeSetOf<Refinement>(() => _decode_Refinement)
                ),
            ],
            "CONTEXT 2": [
                "or",
                $._decode_explicit<Refinement[]>(() =>
                    $._decodeSetOf<Refinement>(() => _decode_Refinement)
                ),
            ],
            "CONTEXT 3": [
                "not",
                $._decode_explicit<Refinement>(() => _decode_Refinement),
            ],
        });
    }
    return _cached_decoder_for_Refinement(el);
}
/**
 * @summary Encodes a(n) Refinement into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Refinement, encoded as an ASN.1 Element.
 */
export function _encode_Refinement(
    value: Refinement,
    elGetter: $.ASN1Encoder<Refinement>
) {
    if (!_cached_encoder_for_Refinement) {
        _cached_encoder_for_Refinement = $._encode_choice<Refinement>(
            {
                item: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
                and: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSetOf<Refinement>(
                            () => _encode_Refinement,
                            $.BER
                        ),
                    $.BER
                ),
                or: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSetOf<Refinement>(
                            () => _encode_Refinement,
                            $.BER
                        ),
                    $.BER
                ),
                not: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_Refinement,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Refinement(value, elGetter);
}

/**
 * @summary SubtreeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubtreeSpecification ::= SEQUENCE {
 *   base                 [0]  LocalName DEFAULT {},
 *   COMPONENTS OF             ChopSpecification,
 *   specificationFilter  [4]  Refinement OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class SubtreeSpecification {
    constructor(
        /**
         * @summary `base`.
         * @public
         * @readonly
         */
        readonly base: OPTIONAL<LocalName>,
        /**
         * @summary `specificExclusions`.
         * @public
         * @readonly
         */
        readonly specificExclusions: OPTIONAL<
            ({ chopBefore: LocalName } | { chopAfter: LocalName } | _Element)[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `minimum`.
         * @public
         * @readonly
         */
        readonly minimum: OPTIONAL<BaseDistance> /* REPLICATED_COMPONENT */,
        /**
         * @summary `maximum`.
         * @public
         * @readonly
         */
        readonly maximum: OPTIONAL<BaseDistance> /* REPLICATED_COMPONENT */,
        /**
         * @summary `specificationFilter`.
         * @public
         * @readonly
         */
        readonly specificationFilter: OPTIONAL<Refinement>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SubtreeSpecification
     * @description
     *
     * This takes an `object` and converts it to a `SubtreeSpecification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubtreeSpecification`.
     * @returns {SubtreeSpecification}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SubtreeSpecification]: SubtreeSpecification[_K] }
        >
    ): SubtreeSpecification {
        return new SubtreeSpecification(
            _o.base,
            _o.specificExclusions,
            _o.minimum,
            _o.maximum,
            _o.specificationFilter,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `base`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_base() {
        return [];
    }
    /**
     * @summary Getter that returns the default value for `minimum`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_minimum() {
        return 0;
    }
}
/**
 * @summary The Leading Root Component Types of SubtreeSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubtreeSpecification: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "base",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "specificExclusions",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "minimum",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "maximum",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "specificationFilter",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SubtreeSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubtreeSpecification: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SubtreeSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubtreeSpecification: $.ComponentSpec[] = [];
let _cached_decoder_for_SubtreeSpecification: $.ASN1Decoder<
    SubtreeSpecification
> | null = null;
let _cached_encoder_for_SubtreeSpecification: $.ASN1Encoder<
    SubtreeSpecification
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SubtreeSpecification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubtreeSpecification} The decoded data structure.
 */
export function _decode_SubtreeSpecification(el: _Element) {
    if (!_cached_decoder_for_SubtreeSpecification) {
        _cached_decoder_for_SubtreeSpecification = function (
            el: _Element
        ): SubtreeSpecification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let base: OPTIONAL<LocalName> =
                SubtreeSpecification._default_value_for_base;
            let specificExclusions: OPTIONAL<
                (
                    | { chopBefore: LocalName }
                    | { chopAfter: LocalName }
                    | _Element
                )[]
            >;
            let minimum: OPTIONAL<BaseDistance> =
                SubtreeSpecification._default_value_for_minimum;
            let maximum: OPTIONAL<BaseDistance>;
            let specificationFilter: OPTIONAL<Refinement>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                base: (_el: _Element): void => {
                    base = $._decode_explicit<LocalName>(
                        () => _decode_LocalName
                    )(_el);
                },
                specificExclusions: (_el: _Element): void => {
                    specificExclusions = $._decode_explicit<
                        (
                            | { chopBefore: LocalName }
                            | { chopAfter: LocalName }
                            | _Element
                        )[]
                    >(() =>
                        $._decodeSetOf<
                            | { chopBefore: LocalName }
                            | { chopAfter: LocalName }
                            | _Element
                        >(() =>
                            $._decode_extensible_choice({
                                "CONTEXT 0": [
                                    "chopBefore",
                                    $._decode_explicit<LocalName>(
                                        () => _decode_LocalName
                                    ),
                                ],
                                "CONTEXT 1": [
                                    "chopAfter",
                                    $._decode_explicit<LocalName>(
                                        () => _decode_LocalName
                                    ),
                                ],
                            })
                        )
                    )(_el);
                },
                minimum: (_el: _Element): void => {
                    minimum = $._decode_explicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
                maximum: (_el: _Element): void => {
                    maximum = $._decode_explicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
                specificationFilter: (_el: _Element): void => {
                    specificationFilter = $._decode_explicit<Refinement>(
                        () => _decode_Refinement
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SubtreeSpecification,
                _extension_additions_list_spec_for_SubtreeSpecification,
                _root_component_type_list_2_spec_for_SubtreeSpecification,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SubtreeSpecification(
                /* SEQUENCE_CONSTRUCTOR_CALL */ base,
                specificExclusions,
                minimum,
                maximum,
                specificationFilter,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SubtreeSpecification(el);
}
/**
 * @summary Encodes a(n) SubtreeSpecification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubtreeSpecification, encoded as an ASN.1 Element.
 */
export function _encode_SubtreeSpecification(
    value: SubtreeSpecification,
    elGetter: $.ASN1Encoder<SubtreeSpecification>
) {
    if (!_cached_encoder_for_SubtreeSpecification) {
        _cached_encoder_for_SubtreeSpecification = function (
            value: SubtreeSpecification,
            elGetter: $.ASN1Encoder<SubtreeSpecification>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.base === undefined ||
                            $.deepEq(
                                value.base,
                                SubtreeSpecification._default_value_for_base
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_LocalName,
                                      $.BER
                                  )(value.base, $.BER),
                            ,
                            /* IF_ABSENT */ (value.specificExclusions === undefined)
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeSetOf<ChopSpecification_specificExclusions_Item>(
                                          () => _encode_ChopSpecification_specificExclusions_Item,
                                          $.BER,
                                        ),
                                      $.BER
                                  )(value.base, $.BER),
                            ,
                            /* IF_DEFAULT */ value.minimum ===
                                undefined ||
                            $.deepEq(
                                value.minimum,
                                SubtreeSpecification._default_value_for_minimum
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_BaseDistance,
                                      $.BER
                                  )(value.minimum, $.BER),
                            /* IF_ABSENT  */ value.maximum === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_BaseDistance,
                                      $.BER
                                  )(value.maximum, $.BER),
                            /* IF_ABSENT  */ value.specificationFilter ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_Refinement,
                                      $.BER
                                  )(value.specificationFilter, $.BER),
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
    return _cached_encoder_for_SubtreeSpecification(value, elGetter);
}

/**
 * @summary id_oa_subtreeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-subtreeSpecification             OBJECT IDENTIFIER ::= {id-oa 6}
 * ```
 *
 * @constant
 */
export const id_oa_subtreeSpecification: OBJECT_IDENTIFIER = new _OID(
    [6],
    id_oa
);

/**
 * @summary subtreeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subtreeSpecification ATTRIBUTE ::= {
 *   WITH SYNTAX             SubtreeSpecification
 *   USAGE                   directoryOperation
 *   LDAP-SYNTAX             subtreeSpec.&id
 *   LDAP-NAME               {"subtreeSpecification"}
 *   ID                      id-oa-subtreeSpecification }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const subtreeSpecification: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SubtreeSpecification,
    },
    encoderFor: {
        "&Type": _encode_SubtreeSpecification,
    },
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": subtreeSpec["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_subtreeSpecification /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_sc_subentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sc-subentry                         OBJECT IDENTIFIER ::= {id-sc 0}
 * ```
 *
 * @constant
 */
export const id_sc_subentry: OBJECT_IDENTIFIER = new _OID([0], id_sc);

/**
 * @summary subentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subentry OBJECT-CLASS ::= {
 *   SUBCLASS OF      {top}
 *   KIND             structural
 *   MUST CONTAIN     {commonName |
 *                     subtreeSpecification}
 *   LDAP-NAME        {"subentry"}
 *   ID               id-sc-subentry }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const subentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind": ObjectClassKind_structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [
        commonName,
        subtreeSpecification,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_sc_subentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_subentryNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-subentryNameForm                 OBJECT IDENTIFIER ::= {id-nf 16}
 * ```
 *
 * @constant
 */
export const id_nf_subentryNameForm: OBJECT_IDENTIFIER = new _OID([16], id_nf);

/**
 * @summary subentryNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subentryNameForm NAME-FORM ::= {
 *   NAMES            subentry
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-subentryNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const subentryNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": subentry /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_subentryNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_administrativeRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-administrativeRole               OBJECT IDENTIFIER ::= {id-oa 5}
 * ```
 *
 * @constant
 */
export const id_oa_administrativeRole: OBJECT_IDENTIFIER = new _OID([5], id_oa);

/**
 * @summary administrativeRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * administrativeRole ATTRIBUTE ::= {
 *   WITH SYNTAX             OBJECT-CLASS.&id
 *   EQUALITY MATCHING RULE  objectIdentifierMatch
 *   USAGE                   directoryOperation
 *   LDAP-SYNTAX             oid.&id
 *   LDAP-NAME               {"administrativeRole"}
 *   ID                      id-oa-administrativeRole }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const administrativeRole: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_administrativeRole /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_createTimestamp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-createTimestamp                  OBJECT IDENTIFIER ::= {id-oa 1}
 * ```
 *
 * @constant
 */
export const id_oa_createTimestamp: OBJECT_IDENTIFIER = new _OID([1], id_oa);

/**
 * @summary createTimestamp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * createTimestamp ATTRIBUTE ::= {
 *   WITH SYNTAX             GeneralizedTime
 *   -- as per 46.3 b) or c) of Rec. ITU-T X.680 | ISO/IEC 8824-1
 *   EQUALITY MATCHING RULE  generalizedTimeMatch
 *   ORDERING MATCHING RULE  generalizedTimeOrderingMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   LDAP-SYNTAX             generalizedTime.&id
 *   LDAP-NAME               {"createTimestamp"}
 *   ID                      id-oa-createTimestamp }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const createTimestamp: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&Type": $._encodeGeneralizedTime,
    },
    "&equality-match": generalizedTimeMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": generalizedTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": generalizedTime["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_createTimestamp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_modifyTimestamp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-modifyTimestamp                  OBJECT IDENTIFIER ::= {id-oa 2}
 * ```
 *
 * @constant
 */
export const id_oa_modifyTimestamp: OBJECT_IDENTIFIER = new _OID([2], id_oa);

/**
 * @summary modifyTimestamp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * modifyTimestamp ATTRIBUTE ::= {
 *   WITH SYNTAX             GeneralizedTime
 *   -- as per 46.3 b) or c) of Rec. ITU-T X.680 | ISO/IEC 8824-1
 *   EQUALITY MATCHING RULE  generalizedTimeMatch
 *   ORDERING MATCHING RULE  generalizedTimeOrderingMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   LDAP-SYNTAX             generalizedTime.&id
 *   LDAP-NAME               {"modifyTimestamp"}
 *   ID                      id-oa-modifyTimestamp }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const modifyTimestamp: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&Type": $._encodeGeneralizedTime,
    },
    "&equality-match": generalizedTimeMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": generalizedTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": generalizedTime["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_modifyTimestamp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_subschemaTimestamp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-subschemaTimestamp               OBJECT IDENTIFIER ::= {id-oa 8}
 * ```
 *
 * @constant
 */
export const id_oa_subschemaTimestamp: OBJECT_IDENTIFIER = new _OID([8], id_oa);

/**
 * @summary subschemaTimestamp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subschemaTimestamp ATTRIBUTE ::= {
 *   WITH SYNTAX             GeneralizedTime
 *   -- as per 46.3 b) or c) of Rec. ITU-T X.680 | ISO/IEC 8824-1
 *   EQUALITY MATCHING RULE  generalizedTimeMatch
 *   ORDERING MATCHING RULE  generalizedTimeOrderingMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   ID                      id-oa-subschemaTimestamp }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const subschemaTimestamp: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&Type": $._encodeGeneralizedTime,
    },
    "&equality-match": generalizedTimeMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": generalizedTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_subschemaTimestamp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_creatorsName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-creatorsName                     OBJECT IDENTIFIER ::= {id-oa 3}
 * ```
 *
 * @constant
 */
export const id_oa_creatorsName: OBJECT_IDENTIFIER = new _OID([3], id_oa);

/**
 * @summary creatorsName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * creatorsName ATTRIBUTE ::= {
 *   WITH SYNTAX             DistinguishedName
 *   EQUALITY MATCHING RULE  distinguishedNameMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   LDAP-SYNTAX             dn.&id
 *   LDAP-NAME               {"creatorsName"}
 *   ID                      id-oa-creatorsName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const creatorsName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_creatorsName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_modifiersName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-modifiersName                    OBJECT IDENTIFIER ::= {id-oa 4}
 * ```
 *
 * @constant
 */
export const id_oa_modifiersName: OBJECT_IDENTIFIER = new _OID([4], id_oa);

/**
 * @summary modifiersName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * modifiersName ATTRIBUTE ::= {
 *   WITH SYNTAX             DistinguishedName
 *   EQUALITY MATCHING RULE  distinguishedNameMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   LDAP-SYNTAX             dn.&id
 *   LDAP-NAME               {"modifiersName"}
 *   ID                      id-oa-modifiersName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const modifiersName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_modifiersName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_subschemaSubentryList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-subschemaSubentryList            OBJECT IDENTIFIER ::= {id-oa 10}
 * ```
 *
 * @constant
 */
export const id_oa_subschemaSubentryList: OBJECT_IDENTIFIER = new _OID(
    [10],
    id_oa
);

/**
 * @summary subschemaSubentryList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subschemaSubentryList ATTRIBUTE ::= {
 *   WITH SYNTAX             DistinguishedName
 *   EQUALITY MATCHING RULE  distinguishedNameMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   LDAP-SYNTAX             dn.&id
 *   LDAP-NAME               {"subschemaSubentry"}
 *   ID                      id-oa-subschemaSubentryList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const subschemaSubentryList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_subschemaSubentryList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_accessControlSubentryList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-accessControlSubentryList        OBJECT IDENTIFIER ::= {id-oa 11}
 * ```
 *
 * @constant
 */
export const id_oa_accessControlSubentryList: OBJECT_IDENTIFIER = new _OID(
    [11],
    id_oa
);

/**
 * @summary accessControlSubentryList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessControlSubentryList ATTRIBUTE ::= {
 *   WITH SYNTAX             DistinguishedName
 *   EQUALITY MATCHING RULE  distinguishedNameMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   ID                      id-oa-accessControlSubentryList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const accessControlSubentryList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_accessControlSubentryList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_collectiveAttributeSubentryList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-collectiveAttributeSubentryList  OBJECT IDENTIFIER ::= {id-oa 12}
 * ```
 *
 * @constant
 */
export const id_oa_collectiveAttributeSubentryList: OBJECT_IDENTIFIER = new _OID(
    [12],
    id_oa
);

/**
 * @summary collectiveAttributeSubentryList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveAttributeSubentryList ATTRIBUTE ::= {
 *   WITH SYNTAX             DistinguishedName
 *   EQUALITY MATCHING RULE  distinguishedNameMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   ID                      id-oa-collectiveAttributeSubentryList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectiveAttributeSubentryList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_collectiveAttributeSubentryList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_contextDefaultSubentryList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-contextDefaultSubentryList       OBJECT IDENTIFIER ::= {id-oa 13}
 * ```
 *
 * @constant
 */
export const id_oa_contextDefaultSubentryList: OBJECT_IDENTIFIER = new _OID(
    [13],
    id_oa
);

/**
 * @summary contextDefaultSubentryList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contextDefaultSubentryList ATTRIBUTE ::= {
 *   WITH SYNTAX             DistinguishedName
 *   EQUALITY MATCHING RULE  distinguishedNameMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   ID                      id-oa-contextDefaultSubentryList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const contextDefaultSubentryList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_contextDefaultSubentryList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_serviceAdminSubentryList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-serviceAdminSubentryList         OBJECT IDENTIFIER ::= {id-oa 15}
 * ```
 *
 * @constant
 */
export const id_oa_serviceAdminSubentryList: OBJECT_IDENTIFIER = new _OID(
    [15],
    id_oa
);

/**
 * @summary serviceAdminSubentryList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceAdminSubentryList ATTRIBUTE ::= {
 *   WITH SYNTAX             DistinguishedName
 *   EQUALITY MATCHING RULE  distinguishedNameMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   ID                      id-oa-serviceAdminSubentryList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const serviceAdminSubentryList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_serviceAdminSubentryList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdAdminSubentryList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdAdminSubentryList             OBJECT IDENTIFIER ::= {id-oa 21}
 * ```
 *
 * @constant
 */
export const id_oa_pwdAdminSubentryList: OBJECT_IDENTIFIER = new _OID(
    [21],
    id_oa
);

/**
 * @summary pwdAdminSubentryList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdAdminSubentryList  ATTRIBUTE ::= {
 *   WITH SYNTAX             DistinguishedName
 *   EQUALITY MATCHING RULE  distinguishedNameMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   LDAP-SYNTAX             dn.&id
 *   LDAP-NAME               {"pwdAdminSubentryList"}
 *   ID                      id-oa-pwdAdminSubentryList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdAdminSubentryList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdAdminSubentryList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_hasSubordinates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-hasSubordinates                  OBJECT IDENTIFIER ::= {id-oa 9}
 * ```
 *
 * @constant
 */
export const id_oa_hasSubordinates: OBJECT_IDENTIFIER = new _OID([9], id_oa);

/**
 * @summary hasSubordinates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hasSubordinates ATTRIBUTE ::= {
 *   WITH SYNTAX             BOOLEAN
 *   EQUALITY MATCHING RULE  booleanMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   ID                      id-oa-hasSubordinates }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const hasSubordinates: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBoolean,
    },
    encoderFor: {
        "&Type": $._encodeBoolean,
    },
    "&equality-match": booleanMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_hasSubordinates /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_sc_accessControlSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sc-accessControlSubentry            OBJECT IDENTIFIER ::= {id-sc 1}
 * ```
 *
 * @constant
 */
export const id_sc_accessControlSubentry: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_sc
);

/**
 * @summary accessControlSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessControlSubentry OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   ID            id-sc-accessControlSubentry }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const accessControlSubentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&id": id_sc_accessControlSubentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_sc_collectiveAttributeSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sc-collectiveAttributeSubentry      OBJECT IDENTIFIER ::= {id-sc 2}
 * ```
 *
 * @constant
 */
export const id_sc_collectiveAttributeSubentry: OBJECT_IDENTIFIER = new _OID(
    [2],
    id_sc
);

/**
 * @summary collectiveAttributeSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveAttributeSubentry OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   ID            id-sc-collectiveAttributeSubentry }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const collectiveAttributeSubentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&id": id_sc_collectiveAttributeSubentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_collectiveExclusions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-collectiveExclusions             OBJECT IDENTIFIER ::= {id-oa 7}
 * ```
 *
 * @constant
 */
export const id_oa_collectiveExclusions: OBJECT_IDENTIFIER = new _OID(
    [7],
    id_oa
);

/**
 * @summary collectiveExclusions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveExclusions ATTRIBUTE ::= {
 *   WITH SYNTAX             OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE  objectIdentifierMatch
 *   USAGE                   directoryOperation
 *   ID                      id-oa-collectiveExclusions }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectiveExclusions: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_collectiveExclusions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_sc_contextAssertionSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sc-contextAssertionSubentry         OBJECT IDENTIFIER ::= {id-sc 3}
 * ```
 *
 * @constant
 */
export const id_sc_contextAssertionSubentry: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_sc
);

/**
 * @summary contextAssertionSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contextAssertionSubentry OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   MUST CONTAIN  {contextAssertionDefaults}
 *   ID            id-sc-contextAssertionSubentry }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const contextAssertionSubentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_sc_contextAssertionSubentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_contextAssertionDefault
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-contextAssertionDefault          OBJECT IDENTIFIER ::= {id-oa 14}
 * ```
 *
 * @constant
 */
export const id_oa_contextAssertionDefault: OBJECT_IDENTIFIER = new _OID(
    [14],
    id_oa
);

/**
 * @summary contextAssertionDefaults
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contextAssertionDefaults ATTRIBUTE ::= {
 *   WITH SYNTAX             TypeAndContextAssertion
 *   EQUALITY MATCHING RULE  objectIdentifierFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-oa-contextAssertionDefault }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const contextAssertionDefaults: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TypeAndContextAssertion,
    },
    encoderFor: {
        "&Type": _encode_TypeAndContextAssertion,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_contextAssertionDefault /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_sc_serviceAdminSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sc-serviceAdminSubentry             OBJECT IDENTIFIER ::= {id-sc 4}
 * ```
 *
 * @constant
 */
export const id_sc_serviceAdminSubentry: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_sc
);

/**
 * @summary serviceAdminSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceAdminSubentry OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   MUST CONTAIN  {searchRules}
 *   ID            id-sc-serviceAdminSubentry }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const serviceAdminSubentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_sc_serviceAdminSubentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

export type AttributeType<> = OBJECT_IDENTIFIER; // ObjectClassFieldType
let _cached_decoder_for_AttributeType: $.ASN1Decoder<
    AttributeType
> | null = null;
let _cached_encoder_for_AttributeType: $.ASN1Encoder<
    AttributeType
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeType} The decoded data structure.
 */
export function _decode_AttributeType(el: _Element) {
    if (!_cached_decoder_for_AttributeType) {
        _cached_decoder_for_AttributeType = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_AttributeType(el);
}
/**
 * @summary Encodes a(n) AttributeType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeType, encoded as an ASN.1 Element.
 */
export function _encode_AttributeType(
    value: AttributeType,
    elGetter: $.ASN1Encoder<AttributeType>
) {
    if (!_cached_encoder_for_AttributeType) {
        _cached_encoder_for_AttributeType = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_AttributeType(value, elGetter);
}

/**
 * @summary SearchRuleDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRuleDescription ::= SEQUENCE {
 *   COMPONENTS OF      SearchRule,
 *   name         [28]  SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description  [29]  UnboundedDirectoryString OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class SearchRuleDescription {
    constructor(
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        readonly id: INTEGER /* REPLICATED_COMPONENT */,
        /**
         * @summary `dmdId`.
         * @public
         * @readonly
         */
        readonly dmdId: OBJECT_IDENTIFIER /* REPLICATED_COMPONENT */,
        /**
         * @summary `serviceType`.
         * @public
         * @readonly
         */
        readonly serviceType: OPTIONAL<
            OBJECT_IDENTIFIER
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `userClass`.
         * @public
         * @readonly
         */
        readonly userClass: OPTIONAL<INTEGER> /* REPLICATED_COMPONENT */,
        /**
         * @summary `inputAttributeTypes`.
         * @public
         * @readonly
         */
        readonly inputAttributeTypes: OPTIONAL<
            RequestAttribute[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `attributeCombination`.
         * @public
         * @readonly
         */
        readonly attributeCombination: OPTIONAL<
            AttributeCombination
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `outputAttributeTypes`.
         * @public
         * @readonly
         */
        readonly outputAttributeTypes: OPTIONAL<
            ResultAttribute[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `defaultControls`.
         * @public
         * @readonly
         */
        readonly defaultControls: OPTIONAL<
            ControlOptions
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `mandatoryControls`.
         * @public
         * @readonly
         */
        readonly mandatoryControls: OPTIONAL<
            ControlOptions
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `searchRuleControls`.
         * @public
         * @readonly
         */
        readonly searchRuleControls: OPTIONAL<
            ControlOptions
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `familyGrouping`.
         * @public
         * @readonly
         */
        readonly familyGrouping: OPTIONAL<
            FamilyGrouping
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `familyReturn`.
         * @public
         * @readonly
         */
        readonly familyReturn: OPTIONAL<
            FamilyReturn
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `relaxation`.
         * @public
         * @readonly
         */
        readonly relaxation: OPTIONAL<
            RelaxationPolicy
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `additionalControl`.
         * @public
         * @readonly
         */
        readonly additionalControl: OPTIONAL<
            AttributeType[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `allowedSubset`.
         * @public
         * @readonly
         */
        readonly allowedSubset: OPTIONAL<
            AllowedSubset
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `imposedSubset`.
         * @public
         * @readonly
         */
        readonly imposedSubset: OPTIONAL<
            ImposedSubset
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `entryLimit`.
         * @public
         * @readonly
         */
        readonly entryLimit: OPTIONAL<EntryLimit> /* REPLICATED_COMPONENT */,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<UnboundedDirectoryString[]>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SearchRuleDescription
     * @description
     *
     * This takes an `object` and converts it to a `SearchRuleDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SearchRuleDescription`.
     * @returns {SearchRuleDescription}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SearchRuleDescription]: SearchRuleDescription[_K] }
        >
    ): SearchRuleDescription {
        return new SearchRuleDescription(
            _o.id,
            _o.dmdId,
            _o.serviceType,
            _o.userClass,
            _o.inputAttributeTypes,
            _o.attributeCombination,
            _o.outputAttributeTypes,
            _o.defaultControls,
            _o.mandatoryControls,
            _o.searchRuleControls,
            _o.familyGrouping,
            _o.familyReturn,
            _o.relaxation,
            _o.additionalControl,
            _o.allowedSubset,
            _o.imposedSubset,
            _o.entryLimit,
            _o.name,
            _o.description,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `attributeCombination`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_attributeCombination() {
        return { and: [] };
    }
    /**
     * @summary Getter that returns the default value for `allowedSubset`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_allowedSubset() {
        return new Uint8ClampedArray([1, 1, 1]);
    }
    /**
     * @summary The enum used as the type of the component `familyGrouping`
     * @public
     * @static
     */

    public static _enum_for_familyGrouping = _enum_for_FamilyGrouping;
    /**
     * @summary The enum used as the type of the component `imposedSubset`
     * @public
     * @static
     */

    public static _enum_for_imposedSubset = _enum_for_ImposedSubset;
}
/**
 * @summary The Leading Root Component Types of SearchRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchRuleDescription: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "id",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "dmdId",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "serviceType",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "userClass",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "inputAttributeTypes",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributeCombination",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "outputAttributeTypes",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "defaultControls",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "mandatoryControls",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "searchRuleControls",
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "familyGrouping",
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "familyReturn",
        true,
        $.hasTag(_TagClass.context, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "relaxation",
        true,
        $.hasTag(_TagClass.context, 11),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "additionalControl",
        true,
        $.hasTag(_TagClass.context, 12),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "allowedSubset",
        true,
        $.hasTag(_TagClass.context, 13),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "imposedSubset",
        true,
        $.hasTag(_TagClass.context, 14),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "entryLimit",
        true,
        $.hasTag(_TagClass.context, 15),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.context, 28),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "description",
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SearchRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchRuleDescription: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SearchRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchRuleDescription: $.ComponentSpec[] = [];
let _cached_decoder_for_SearchRuleDescription: $.ASN1Decoder<
    SearchRuleDescription
> | null = null;
let _cached_encoder_for_SearchRuleDescription: $.ASN1Encoder<
    SearchRuleDescription
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SearchRuleDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchRuleDescription} The decoded data structure.
 */
export function _decode_SearchRuleDescription(el: _Element) {
    if (!_cached_decoder_for_SearchRuleDescription) {
        _cached_decoder_for_SearchRuleDescription = function (
            el: _Element
        ): SearchRuleDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let id!: INTEGER;
            let dmdId!: OBJECT_IDENTIFIER;
            let serviceType: OPTIONAL<OBJECT_IDENTIFIER>;
            let userClass: OPTIONAL<INTEGER>;
            let inputAttributeTypes: OPTIONAL<RequestAttribute[]>;
            let attributeCombination: OPTIONAL<AttributeCombination> =
                SearchRuleDescription._default_value_for_attributeCombination;
            let outputAttributeTypes: OPTIONAL<ResultAttribute[]>;
            let defaultControls: OPTIONAL<ControlOptions>;
            let mandatoryControls: OPTIONAL<ControlOptions>;
            let searchRuleControls: OPTIONAL<ControlOptions>;
            let familyGrouping: OPTIONAL<FamilyGrouping>;
            let familyReturn: OPTIONAL<FamilyReturn>;
            let relaxation: OPTIONAL<RelaxationPolicy>;
            let additionalControl: OPTIONAL<AttributeType[]>;
            let allowedSubset: OPTIONAL<AllowedSubset> =
                SearchRuleDescription._default_value_for_allowedSubset;
            let imposedSubset: OPTIONAL<ImposedSubset>;
            let entryLimit: OPTIONAL<EntryLimit>;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                id: (_el: _Element): void => {
                    id = $._decodeInteger(_el);
                },
                dmdId: (_el: _Element): void => {
                    dmdId = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                serviceType: (_el: _Element): void => {
                    serviceType = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                userClass: (_el: _Element): void => {
                    userClass = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                inputAttributeTypes: (_el: _Element): void => {
                    inputAttributeTypes = $._decode_explicit<
                        RequestAttribute[]
                    >(() =>
                        $._decodeSequenceOf<RequestAttribute>(
                            () => _decode_RequestAttribute
                        )
                    )(_el);
                },
                attributeCombination: (_el: _Element): void => {
                    attributeCombination = $._decode_explicit<
                        AttributeCombination
                    >(() => _decode_AttributeCombination)(_el);
                },
                outputAttributeTypes: (_el: _Element): void => {
                    outputAttributeTypes = $._decode_explicit<
                        ResultAttribute[]
                    >(() =>
                        $._decodeSequenceOf<ResultAttribute>(
                            () => _decode_ResultAttribute
                        )
                    )(_el);
                },
                defaultControls: (_el: _Element): void => {
                    defaultControls = $._decode_explicit<ControlOptions>(
                        () => _decode_ControlOptions
                    )(_el);
                },
                mandatoryControls: (_el: _Element): void => {
                    mandatoryControls = $._decode_explicit<ControlOptions>(
                        () => _decode_ControlOptions
                    )(_el);
                },
                searchRuleControls: (_el: _Element): void => {
                    searchRuleControls = $._decode_explicit<ControlOptions>(
                        () => _decode_ControlOptions
                    )(_el);
                },
                familyGrouping: (_el: _Element): void => {
                    familyGrouping = $._decode_explicit<FamilyGrouping>(
                        () => _decode_FamilyGrouping
                    )(_el);
                },
                familyReturn: (_el: _Element): void => {
                    familyReturn = $._decode_explicit<FamilyReturn>(
                        () => _decode_FamilyReturn
                    )(_el);
                },
                relaxation: (_el: _Element): void => {
                    relaxation = $._decode_explicit<RelaxationPolicy>(
                        () => _decode_RelaxationPolicy
                    )(_el);
                },
                additionalControl: (_el: _Element): void => {
                    additionalControl = $._decode_explicit<AttributeType[]>(
                        () =>
                            $._decodeSequenceOf<AttributeType>(
                                () => _decode_AttributeType
                            )
                    )(_el);
                },
                allowedSubset: (_el: _Element): void => {
                    allowedSubset = $._decode_explicit<AllowedSubset>(
                        () => _decode_AllowedSubset
                    )(_el);
                },
                imposedSubset: (_el: _Element): void => {
                    imposedSubset = $._decode_explicit<ImposedSubset>(
                        () => _decode_ImposedSubset
                    )(_el);
                },
                entryLimit: (_el: _Element): void => {
                    entryLimit = $._decode_explicit<EntryLimit>(
                        () => _decode_EntryLimit
                    )(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decode_explicit<UnboundedDirectoryString[]>(() =>
                        $._decodeSetOf<UnboundedDirectoryString>(
                            () => _decode_UnboundedDirectoryString
                        )
                    )(_el);
                },
                description: (_el: _Element): void => {
                    description = $._decode_explicit<UnboundedDirectoryString>(
                        () => _decode_UnboundedDirectoryString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SearchRuleDescription,
                _extension_additions_list_spec_for_SearchRuleDescription,
                _root_component_type_list_2_spec_for_SearchRuleDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SearchRuleDescription(
                /* SEQUENCE_CONSTRUCTOR_CALL */ id,
                dmdId,
                serviceType,
                userClass,
                inputAttributeTypes,
                attributeCombination,
                outputAttributeTypes,
                defaultControls,
                mandatoryControls,
                searchRuleControls,
                familyGrouping,
                familyReturn,
                relaxation,
                additionalControl,
                allowedSubset,
                imposedSubset,
                entryLimit,
                name,
                description,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SearchRuleDescription(el);
}
/**
 * @summary Encodes a(n) SearchRuleDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRuleDescription, encoded as an ASN.1 Element.
 */
export function _encode_SearchRuleDescription(
    value: SearchRuleDescription,
    elGetter: $.ASN1Encoder<SearchRuleDescription>
) {
    if (!_cached_encoder_for_SearchRuleDescription) {
        _cached_encoder_for_SearchRuleDescription = function (
            value: SearchRuleDescription,
            elGetter: $.ASN1Encoder<SearchRuleDescription>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(value.id, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => $._encodeObjectIdentifier,
                                $.BER
                            )(value.dmdId, $.BER),
                            /* IF_ABSENT  */ value.serviceType === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.serviceType, $.BER),
                            /* IF_ABSENT  */ value.userClass === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.userClass, $.BER),
                            /* IF_ABSENT  */ value.inputAttributeTypes ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSequenceOf<RequestAttribute>(
                                              () => _encode_RequestAttribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.inputAttributeTypes, $.BER),
                            /* IF_DEFAULT */ value.attributeCombination ===
                                undefined ||
                            $.deepEq(
                                value.attributeCombination,
                                SearchRuleDescription._default_value_for_attributeCombination
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_AttributeCombination,
                                      $.BER
                                  )(value.attributeCombination, $.BER),
                            /* IF_ABSENT  */ value.outputAttributeTypes ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () =>
                                          $._encodeSequenceOf<ResultAttribute>(
                                              () => _encode_ResultAttribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.outputAttributeTypes, $.BER),
                            /* IF_ABSENT  */ value.defaultControls === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      6,
                                      () => _encode_ControlOptions,
                                      $.BER
                                  )(value.defaultControls, $.BER),
                            /* IF_ABSENT  */ value.mandatoryControls ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_ControlOptions,
                                      $.BER
                                  )(value.mandatoryControls, $.BER),
                            /* IF_ABSENT  */ value.searchRuleControls ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () => _encode_ControlOptions,
                                      $.BER
                                  )(value.searchRuleControls, $.BER),
                            /* IF_ABSENT  */ value.familyGrouping === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      9,
                                      () => _encode_FamilyGrouping,
                                      $.BER
                                  )(value.familyGrouping, $.BER),
                            /* IF_ABSENT  */ value.familyReturn === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      10,
                                      () => _encode_FamilyReturn,
                                      $.BER
                                  )(value.familyReturn, $.BER),
                            /* IF_ABSENT  */ value.relaxation === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      11,
                                      () => _encode_RelaxationPolicy,
                                      $.BER
                                  )(value.relaxation, $.BER),
                            /* IF_ABSENT  */ value.additionalControl ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      12,
                                      () =>
                                          $._encodeSequenceOf<AttributeType>(
                                              () => _encode_AttributeType,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.additionalControl, $.BER),
                            /* IF_DEFAULT */ value.allowedSubset ===
                                undefined ||
                            $.deepEq(
                                value.allowedSubset,
                                SearchRuleDescription._default_value_for_allowedSubset
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      13,
                                      () => _encode_AllowedSubset,
                                      $.BER
                                  )(value.allowedSubset, $.BER),
                            /* IF_ABSENT  */ value.imposedSubset === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      14,
                                      () => _encode_ImposedSubset,
                                      $.BER
                                  )(value.imposedSubset, $.BER),
                            /* IF_ABSENT  */ value.entryLimit === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      15,
                                      () => _encode_EntryLimit,
                                      $.BER
                                  )(value.entryLimit, $.BER),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      28,
                                      () =>
                                          $._encodeSetOf<
                                              UnboundedDirectoryString
                                          >(
                                              () =>
                                                  _encode_UnboundedDirectoryString,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.name, $.BER),
                            /* IF_ABSENT  */ value.description === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      29,
                                      () => _encode_UnboundedDirectoryString,
                                      $.BER
                                  )(value.description, $.BER),
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
    return _cached_encoder_for_SearchRuleDescription(value, elGetter);
}

/**
 * @summary id_oa_searchRules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-searchRules                      OBJECT IDENTIFIER ::= {id-oa 16}
 * ```
 *
 * @constant
 */
export const id_oa_searchRules: OBJECT_IDENTIFIER = new _OID([16], id_oa);

/**
 * @summary searchRules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * searchRules ATTRIBUTE ::= {
 *   WITH SYNTAX             SearchRuleDescription
 *   EQUALITY MATCHING RULE  integerFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-oa-searchRules }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const searchRules: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SearchRuleDescription,
    },
    encoderFor: {
        "&Type": _encode_SearchRuleDescription,
    },
    "&equality-match": integerFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_searchRules /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_sc_pwdAdminSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sc-pwdAdminSubentry                 OBJECT IDENTIFIER ::= {id-sc 5}
 * ```
 *
 * @constant
 */
export const id_sc_pwdAdminSubentry: OBJECT_IDENTIFIER = new _OID([5], id_sc);

/**
 * @summary pwdAdminSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdAdminSubentry OBJECT-CLASS ::= {
 *   KIND           auxiliary
 *   MUST CONTAIN   { pwdAttribute }
 *   LDAP-NAME      {"pwdAdminSubentry"}
 *   ID             id-sc-pwdAdminSubentry }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pwdAdminSubentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&ldapName": undefined,
    "&id": id_sc_pwdAdminSubentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_pwdAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-pwdAttribute                     OBJECT IDENTIFIER ::= {id-at 84}
 * ```
 *
 * @constant
 */
export const id_at_pwdAttribute: OBJECT_IDENTIFIER = new _OID([84], id_at);

/**
 * @summary pwdAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdAttribute ATTRIBUTE ::= {
 *   WITH SYNTAX             ATTRIBUTE.&id
 *   EQUALITY MATCHING RULE  objectIdentifierMatch
 *   SINGLE VALUE            TRUE
 *   LDAP-SYNTAX             oid.&id
 *   LDAP-NAME               {"pwdAttribute"}
 *   ID                      id-at-pwdAttribute }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdAttribute: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_pwdAttribute /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary PwdHistory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdHistory{ATTRIBUTE:passwordAttribute} ::= SEQUENCE {
 *   time       GeneralizedTime,
 *   password   passwordAttribute.&Type,
 *   ...}
 * ```
 *
 * @class
 */
export class PwdHistory {
    constructor(
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: GeneralizedTime,
        /**
         * @summary `password`.
         * @public
         * @readonly
         */
        readonly password: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PwdHistory
     * @description
     *
     * This takes an `object` and converts it to a `PwdHistory`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PwdHistory`.
     * @returns {PwdHistory}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof PwdHistory]: PwdHistory[_K] }>
    ): PwdHistory {
        return new PwdHistory(
            _o.time,
            _o.password,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of PwdHistory
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PwdHistory: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec("password", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of PwdHistory
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PwdHistory: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of PwdHistory
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PwdHistory: $.ComponentSpec[] = [];
let _cached_decoder_for_PwdHistory: $.ASN1Decoder<PwdHistory> | null = null;
let _cached_encoder_for_PwdHistory: $.ASN1Encoder<PwdHistory> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PwdHistory
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdHistory} The decoded data structure.
 */
export function _decode_PwdHistory(el: _Element) {
    if (!_cached_decoder_for_PwdHistory) {
        _cached_decoder_for_PwdHistory = function (el: _Element): PwdHistory {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PwdHistory contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "time";
            sequence[1].name = "password";
            let time!: GeneralizedTime;
            let password!: _Element;
            time = $._decodeGeneralizedTime(sequence[0]);
            password = $._decodeAny(sequence[1]);
            return new PwdHistory(time, password, sequence.slice(2));
        };
    }
    return _cached_decoder_for_PwdHistory(el);
}
/**
 * @summary Encodes a(n) PwdHistory into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdHistory, encoded as an ASN.1 Element.
 */
export function _encode_PwdHistory(
    value: PwdHistory,
    elGetter: $.ASN1Encoder<PwdHistory>
) {
    if (!_cached_encoder_for_PwdHistory) {
        _cached_encoder_for_PwdHistory = function (
            value: PwdHistory,
            elGetter: $.ASN1Encoder<PwdHistory>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.time,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeAny(
                                value.password,
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
    return _cached_encoder_for_PwdHistory(value, elGetter);
}

/**
 * @summary pwdHistory
 * @description
 *
 * ```asn1
 * pwdHistory{ATTRIBUTE:passwordAttribute,MATCHING-RULE:historyMatch,OBJECT IDENTIFIER:id}
 *   ATTRIBUTE ::= {
 *     WITH SYNTAX             PwdHistory{passwordAttribute}
 *     EQUALITY MATCHING RULE  historyMatch
 *     USAGE                   directoryOperation
 *     ID                      id}
 * ```
 */
export function pwdHistory(
    passwordAttribute: ATTRIBUTE,
    historyMatch: MATCHING_RULE,
    id: OBJECT_IDENTIFIER
): ATTRIBUTE {
    return {
        class: "ATTRIBUTE",
        decoderFor: {
            "&Type": _decode_PwdHistory,
        },
        encoderFor: {
            "&Type": _encode_PwdHistory,
        },
        "&Type": PwdHistory,
        "&equality-match": historyMatch,
        "&usage": AttributeUsage_directoryOperation,
        "&id": id,
    };
}

export function pwdRecentlyExpired(
    passwordAttribute: ATTRIBUTE,
    id: OBJECT_IDENTIFIER
): ATTRIBUTE {
    return {
        class: "ATTRIBUTE",
        decoderFor: {
            "&Type": passwordAttribute.decoderFor["&Type"],
        },
        encoderFor: {
            "&Type": passwordAttribute.encoderFor["&Type"],
        },
        "&Type": passwordAttribute["&Type"],
        "&equality-match": passwordAttribute["&equality-match"],
        "&single-valued": true,
        "&usage": AttributeUsage_directoryOperation,
        "&id": id,
    };
}

export function pwdHistoryMatch(
    passwordAttribute: ATTRIBUTE,
    id: OBJECT_IDENTIFIER
): MATCHING_RULE {
    return {
        class: "MATCHING-RULE",
        decoderFor: {
            "&AssertionType": passwordAttribute.decoderFor["&Type"],
        },
        encoderFor: {
            "&AssertionType": passwordAttribute.encoderFor["&Type"],
        },
        "&AssertionType": passwordAttribute["&Type"],
        "&id": id,
    };
}

/**
 * @summary HierarchyLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HierarchyLevel  ::=  INTEGER
 * ```
 */
export type HierarchyLevel = INTEGER;
let _cached_decoder_for_HierarchyLevel: $.ASN1Decoder<
    HierarchyLevel
> | null = null;
let _cached_encoder_for_HierarchyLevel: $.ASN1Encoder<
    HierarchyLevel
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) HierarchyLevel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HierarchyLevel} The decoded data structure.
 */
export function _decode_HierarchyLevel(el: _Element) {
    if (!_cached_decoder_for_HierarchyLevel) {
        _cached_decoder_for_HierarchyLevel = $._decodeInteger;
    }
    return _cached_decoder_for_HierarchyLevel(el);
}
/**
 * @summary Encodes a(n) HierarchyLevel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HierarchyLevel, encoded as an ASN.1 Element.
 */
export function _encode_HierarchyLevel(
    value: HierarchyLevel,
    elGetter: $.ASN1Encoder<HierarchyLevel>
) {
    if (!_cached_encoder_for_HierarchyLevel) {
        _cached_encoder_for_HierarchyLevel = $._encodeInteger;
    }
    return _cached_encoder_for_HierarchyLevel(value, elGetter);
}

/**
 * @summary id_oa_hierarchyLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-hierarchyLevel                   OBJECT IDENTIFIER ::= {id-oa 17}
 * ```
 *
 * @constant
 */
export const id_oa_hierarchyLevel: OBJECT_IDENTIFIER = new _OID([17], id_oa);

/**
 * @summary hierarchyLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchyLevel ATTRIBUTE ::= {
 *   WITH SYNTAX             HierarchyLevel
 *   EQUALITY MATCHING RULE  integerMatch
 *   ORDERING MATCHING RULE  integerOrderingMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   ID                      id-oa-hierarchyLevel }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const hierarchyLevel: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_HierarchyLevel,
    },
    encoderFor: {
        "&Type": _encode_HierarchyLevel,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_hierarchyLevel /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type HierarchyBelow<> = BOOLEAN; // BooleanType
let _cached_decoder_for_HierarchyBelow: $.ASN1Decoder<
    HierarchyBelow
> | null = null;
let _cached_encoder_for_HierarchyBelow: $.ASN1Encoder<
    HierarchyBelow
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) HierarchyBelow
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HierarchyBelow} The decoded data structure.
 */
export function _decode_HierarchyBelow(el: _Element) {
    if (!_cached_decoder_for_HierarchyBelow) {
        _cached_decoder_for_HierarchyBelow = $._decodeBoolean;
    }
    return _cached_decoder_for_HierarchyBelow(el);
}
/**
 * @summary Encodes a(n) HierarchyBelow into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HierarchyBelow, encoded as an ASN.1 Element.
 */
export function _encode_HierarchyBelow(
    value: HierarchyBelow,
    elGetter: $.ASN1Encoder<HierarchyBelow>
) {
    if (!_cached_encoder_for_HierarchyBelow) {
        _cached_encoder_for_HierarchyBelow = $._encodeBoolean;
    }
    return _cached_encoder_for_HierarchyBelow(value, elGetter);
}

/**
 * @summary id_oa_hierarchyBelow
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-hierarchyBelow                   OBJECT IDENTIFIER ::= {id-oa 18}
 * ```
 *
 * @constant
 */
export const id_oa_hierarchyBelow: OBJECT_IDENTIFIER = new _OID([18], id_oa);

/**
 * @summary hierarchyBelow
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchyBelow ATTRIBUTE ::= {
 *   WITH SYNTAX             HierarchyBelow
 *   EQUALITY MATCHING RULE  booleanMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   ID                      id-oa-hierarchyBelow }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const hierarchyBelow: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_HierarchyBelow,
    },
    encoderFor: {
        "&Type": _encode_HierarchyBelow,
    },
    "&equality-match": booleanMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_hierarchyBelow /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_hierarchyParent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-hierarchyParent                  OBJECT IDENTIFIER ::= {id-oa 19}
 * ```
 *
 * @constant
 */
export const id_oa_hierarchyParent: OBJECT_IDENTIFIER = new _OID([19], id_oa);

/**
 * @summary hierarchyParent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchyParent ATTRIBUTE ::= {
 *   WITH SYNTAX             DistinguishedName
 *   EQUALITY MATCHING RULE  distinguishedNameMatch
 *   SINGLE VALUE            TRUE
 *   USAGE                   directoryOperation
 *   ID                      id-oa-hierarchyParent }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const hierarchyParent: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_hierarchyParent /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_hierarchyTop
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-hierarchyTop                     OBJECT IDENTIFIER ::= {id-oa 20}
 * ```
 *
 * @constant
 */
export const id_oa_hierarchyTop: OBJECT_IDENTIFIER = new _OID([20], id_oa);

/**
 * @summary hierarchyTop
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchyTop ATTRIBUTE ::= {
 *   WITH SYNTAX             DistinguishedName
 *   EQUALITY MATCHING RULE  distinguishedNameMatch
 *   SINGLE VALUE            TRUE
 *   USAGE                   directoryOperation
 *   ID                      id-oa-hierarchyTop }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const hierarchyTop: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_hierarchyTop /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_excludeAllCollectiveAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-excludeAllCollectiveAttributes   OBJECT IDENTIFIER ::= {id-oa 0}
 * ```
 *
 * @constant
 */
export const id_oa_excludeAllCollectiveAttributes: OBJECT_IDENTIFIER = new _OID(
    [0],
    id_oa
);

/**
 * @summary id_oa_allAttributeTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-allAttributeTypes                OBJECT IDENTIFIER ::= {id-oa 48}
 * ```
 *
 * @constant
 */
export const id_oa_allAttributeTypes: OBJECT_IDENTIFIER = new _OID([48], id_oa);

/**
 * @summary id_ar_autonomousArea
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ar-autonomousArea                   OBJECT IDENTIFIER ::= {id-ar 1}
 * ```
 *
 * @constant
 */
export const id_ar_autonomousArea: OBJECT_IDENTIFIER = new _OID([1], id_ar);

/**
 * @summary id_ar_accessControlSpecificArea
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ar-accessControlSpecificArea        OBJECT IDENTIFIER ::= {id-ar 2}
 * ```
 *
 * @constant
 */
export const id_ar_accessControlSpecificArea: OBJECT_IDENTIFIER = new _OID(
    [2],
    id_ar
);

/**
 * @summary id_ar_accessControlInnerArea
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ar-accessControlInnerArea           OBJECT IDENTIFIER ::= {id-ar 3}
 * ```
 *
 * @constant
 */
export const id_ar_accessControlInnerArea: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_ar
);

/**
 * @summary id_ar_subschemaAdminSpecificArea
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ar-subschemaAdminSpecificArea       OBJECT IDENTIFIER ::= {id-ar 4}
 * ```
 *
 * @constant
 */
export const id_ar_subschemaAdminSpecificArea: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_ar
);

/**
 * @summary id_ar_collectiveAttributeSpecificArea
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ar-collectiveAttributeSpecificArea  OBJECT IDENTIFIER ::= {id-ar 5}
 * ```
 *
 * @constant
 */
export const id_ar_collectiveAttributeSpecificArea: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_ar
);

/**
 * @summary id_ar_collectiveAttributeInnerArea
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ar-collectiveAttributeInnerArea     OBJECT IDENTIFIER ::= {id-ar 6}
 * ```
 *
 * @constant
 */
export const id_ar_collectiveAttributeInnerArea: OBJECT_IDENTIFIER = new _OID(
    [6],
    id_ar
);

/**
 * @summary id_ar_contextDefaultSpecificArea
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ar-contextDefaultSpecificArea       OBJECT IDENTIFIER ::= {id-ar 7}
 * ```
 *
 * @constant
 */
export const id_ar_contextDefaultSpecificArea: OBJECT_IDENTIFIER = new _OID(
    [7],
    id_ar
);

/**
 * @summary id_ar_serviceSpecificArea
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ar-serviceSpecificArea              OBJECT IDENTIFIER ::= {id-ar 8}
 * ```
 *
 * @constant
 */
export const id_ar_serviceSpecificArea: OBJECT_IDENTIFIER = new _OID(
    [8],
    id_ar
);

/**
 * @summary id_ar_pwdAdminSpecificArea
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ar-pwdAdminSpecificArea             OBJECT IDENTIFIER ::= {id-ar 9}
 * ```
 *
 * @constant
 */
export const id_ar_pwdAdminSpecificArea: OBJECT_IDENTIFIER = new _OID(
    [9],
    id_ar
);

/**
 * @summary STRUCTURE_RULE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * STRUCTURE-RULE ::= CLASS {
 *   &nameForm               NAME-FORM,
 *   &SuperiorStructureRules STRUCTURE-RULE.&id OPTIONAL,
 *   &id                     RuleIdentifier }
 * WITH SYNTAX {
 *   NAME FORM               &nameForm
 *   [SUPERIOR RULES         &SuperiorStructureRules]
 *   ID                      &id }
 * ```
 *
 * @interface
 */
export interface STRUCTURE_RULE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "STRUCTURE-RULE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof STRUCTURE_RULE]: $.ASN1Decoder<STRUCTURE_RULE[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof STRUCTURE_RULE]: $.ASN1Encoder<STRUCTURE_RULE[_K]>;
        }
    >;
    /**
     * @summary &nameForm
     */
    "&nameForm"?: NAME_FORM;
    /**
     * @summary &SuperiorStructureRules
     */
    "&SuperiorStructureRules"?: RuleIdentifier;
    /**
     * @summary &id
     */
    "&id"?: RuleIdentifier;
}

/* END_MODULE InformationFramework */
/* eslint-enable */
