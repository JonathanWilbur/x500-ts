/**
 * @module SelectedAttributeTypes
 * @summary The ASN.1 module `SelectedAttributeTypes`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.selectedAttributeTypes.9
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
    BMPString,
    BOOLEAN,
    ENUMERATED,
    GeneralizedTime,
    INTEGER,
    NULL,
    NumericString,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    PrintableString,
    TeletexString,
    UniversalString,
    UTF8String,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    _decode_FilterItem,
    _decode_HierarchySelections,
    _decode_SearchControlOptions,
    _decode_ServiceControlOptions,
    _encode_FilterItem,
    _encode_HierarchySelections,
    _encode_SearchControlOptions,
    _encode_ServiceControlOptions,
} from "./DirectoryAbstractService";
import * as InformationFramework from "./InformationFramework";
import {
    Attribute,
    ATTRIBUTE,
    AttributeType,
    AttributeValueAssertion,
    CONTEXT,
    DistinguishedName,
    distinguishedNameMatch,
    MAPPING_BASED_MATCHING,
    MATCHING_RULE,
    objectIdentifierMatch,
    SYNTAX_NAME,
    _decode_Attribute,
    _decode_AttributeType,
    _decode_AttributeValueAssertion,
    _decode_ContextAssertion,
    _decode_DistinguishedName,
    _decode_SubtreeSpecification,
    _encode_Attribute,
    _encode_AttributeType,
    _encode_AttributeValueAssertion,
    _encode_ContextAssertion,
    _encode_DistinguishedName,
    _encode_SubtreeSpecification,
} from "./InformationFramework";
import {
    G3FacsimileNonBasicParameters,
    _decode_G3FacsimileNonBasicParameters,
    _encode_G3FacsimileNonBasicParameters,
} from "./PkiPmiExternalDataTypes";
import {
    _decode_AttributeTypeDescription,
    _decode_DITContentRuleDescription,
    _decode_DITStructureRuleDescription,
    _decode_MatchingRuleDescription,
    _decode_MatchingRuleUseDescription,
    _decode_NameFormDescription,
    _decode_ObjectClassDescription,
    _encode_AttributeTypeDescription,
    _encode_DITContentRuleDescription,
    _encode_DITStructureRuleDescription,
    _encode_MatchingRuleDescription,
    _encode_MatchingRuleUseDescription,
    _encode_NameFormDescription,
    _encode_ObjectClassDescription,
} from "./SchemaAdministration";
import {
    MRMapping,
    _decode_AttributeCombination,
    _decode_ContextCombination,
    _decode_MRMapping,
    _encode_AttributeCombination,
    _encode_ContextCombination,
    _encode_MRMapping,
} from "./ServiceAdministration";
import {
    id,
    id_asx,
    id_at,
    id_avc,
    id_cat,
    id_coat,
    id_lmr,
    id_lsx,
    id_mr,
    id_not,
    id_pr,
} from "./UsefulDefinitions";
export {
    AlgorithmIdentifier,
    Certificate,
    CertificateList,
    CertificatePair,
    SupportedAlgorithm,
    SupportedAlgorithms,
    _decode_AlgorithmIdentifier,
    _decode_Certificate,
    _decode_CertificateList,
    _decode_CertificatePair,
    _decode_SupportedAlgorithm,
    _encode_AlgorithmIdentifier,
    _encode_Certificate,
    _encode_CertificateList,
    _encode_CertificatePair,
    _encode_SupportedAlgorithm,
} from "./AuthenticationFramework";
export {
    FilterItem,
    HierarchySelections,
    HierarchySelections_all /* IMPORTED_BIT */,
    HierarchySelections_children /* IMPORTED_BIT */,
    HierarchySelections_hierarchy /* IMPORTED_BIT */,
    HierarchySelections_parent /* IMPORTED_BIT */,
    HierarchySelections_self /* IMPORTED_BIT */,
    HierarchySelections_siblingChildren /* IMPORTED_BIT */,
    HierarchySelections_siblings /* IMPORTED_BIT */,
    HierarchySelections_siblingSubtree /* IMPORTED_BIT */,
    HierarchySelections_subtree /* IMPORTED_BIT */,
    HierarchySelections_top /* IMPORTED_BIT */,
    SearchControlOptions,
    SearchControlOptions_checkOverspecified /* IMPORTED_BIT */,
    SearchControlOptions_dnAttribute /* IMPORTED_BIT */,
    SearchControlOptions_entryCount /* IMPORTED_BIT */,
    SearchControlOptions_includeAllAreas /* IMPORTED_BIT */,
    SearchControlOptions_matchedValuesOnly /* IMPORTED_BIT */,
    SearchControlOptions_matchOnResidualName /* IMPORTED_BIT */,
    SearchControlOptions_noSystemRelaxation /* IMPORTED_BIT */,
    SearchControlOptions_performExactly /* IMPORTED_BIT */,
    SearchControlOptions_searchAliases /* IMPORTED_BIT */,
    SearchControlOptions_searchFamily /* IMPORTED_BIT */,
    SearchControlOptions_separateFamilyMembers /* IMPORTED_BIT */,
    SearchControlOptions_useSubset /* IMPORTED_BIT */,
    ServiceControlOptions,
    ServiceControlOptions_allowWriteableCopy /* IMPORTED_BIT */,
    ServiceControlOptions_chainingProhibited /* IMPORTED_BIT */,
    ServiceControlOptions_copyShallDo /* IMPORTED_BIT */,
    ServiceControlOptions_countFamily /* IMPORTED_BIT */,
    ServiceControlOptions_dontDereferenceAliases /* IMPORTED_BIT */,
    ServiceControlOptions_dontMatchFriends /* IMPORTED_BIT */,
    ServiceControlOptions_dontSelectFriends /* IMPORTED_BIT */,
    ServiceControlOptions_dontUseCopy /* IMPORTED_BIT */,
    ServiceControlOptions_localScope /* IMPORTED_BIT */,
    ServiceControlOptions_manageDSAIT /* IMPORTED_BIT */,
    ServiceControlOptions_noSubtypeMatch /* IMPORTED_BIT */,
    ServiceControlOptions_noSubtypeSelection /* IMPORTED_BIT */,
    ServiceControlOptions_partialNameResolution /* IMPORTED_BIT */,
    ServiceControlOptions_preferChaining /* IMPORTED_BIT */,
    ServiceControlOptions_subentries /* IMPORTED_BIT */,
    _decode_FilterItem,
    _decode_HierarchySelections,
    _decode_SearchControlOptions,
    _decode_ServiceControlOptions,
    _encode_FilterItem,
    _encode_HierarchySelections,
    _encode_SearchControlOptions,
    _encode_ServiceControlOptions,
} from "./DirectoryAbstractService";
export {
    Attribute,
    ATTRIBUTE,
    AttributeType,
    AttributeValueAssertion,
    CONTEXT,
    ContextAssertion,
    DistinguishedName,
    distinguishedNameMatch,
    MAPPING_BASED_MATCHING,
    MATCHING_RULE,
    objectIdentifierMatch,
    OBJECT_CLASS,
    SubtreeSpecification,
    SupportedAttributes,
    SYNTAX_NAME,
    _decode_Attribute,
    _decode_AttributeType,
    _decode_AttributeValueAssertion,
    _decode_ContextAssertion,
    _decode_DistinguishedName,
    _decode_SubtreeSpecification,
    _encode_Attribute,
    _encode_AttributeType,
    _encode_AttributeValueAssertion,
    _encode_ContextAssertion,
    _encode_DistinguishedName,
    _encode_SubtreeSpecification,
} from "./InformationFramework";
export {
    PwdAlphabet,
    PwdVocabulary,
    PwdVocabulary_noDictionaryWords /* IMPORTED_BIT */,
    PwdVocabulary_noGeographicalNames /* IMPORTED_BIT */,
    PwdVocabulary_noPersonNames /* IMPORTED_BIT */,
    UserPwd,
    _decode_PwdAlphabet,
    _decode_PwdVocabulary,
    _decode_UserPwd,
    _encode_PwdAlphabet,
    _encode_PwdVocabulary,
    _encode_UserPwd,
} from "./PasswordPolicy";
export {
    G3FacsimileNonBasicParameters,
    G3FacsimileNonBasicParameters_a3_width /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_b4_length /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_b4_width /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_bft /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_character_mode /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_dtm /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_edi /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_fine_resolution /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_full_colour /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_jpeg /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_mixed_mode /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_preferred_huffmann /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_processable_mode_26 /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_resolution_300x300 /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_resolution_400x400 /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_resolution_8x15 /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_resolution_type /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_t6_coding /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_twelve_bits /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_two_dimensional /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_uncompressed /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_unlimited_length /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_width_middle_1216_of_1728 /* IMPORTED_BIT */,
    G3FacsimileNonBasicParameters_width_middle_864_of_1728 /* IMPORTED_BIT */,
    _decode_G3FacsimileNonBasicParameters,
    _encode_G3FacsimileNonBasicParameters,
} from "./PkiPmiExternalDataTypes";
export {
    AttributeTypeDescription,
    DITContentRuleDescription,
    DITStructureRuleDescription,
    MatchingRuleDescription,
    MatchingRuleUseDescription,
    NameFormDescription,
    ObjectClassDescription,
    _decode_AttributeTypeDescription,
    _decode_DITContentRuleDescription,
    _decode_DITStructureRuleDescription,
    _decode_MatchingRuleDescription,
    _decode_MatchingRuleUseDescription,
    _decode_NameFormDescription,
    _decode_ObjectClassDescription,
    _encode_AttributeTypeDescription,
    _encode_DITContentRuleDescription,
    _encode_DITStructureRuleDescription,
    _encode_MatchingRuleDescription,
    _encode_MatchingRuleUseDescription,
    _encode_NameFormDescription,
    _encode_ObjectClassDescription,
} from "./SchemaAdministration";
export {
    AttributeCombination,
    ContextCombination,
    MRMapping,
    _decode_AttributeCombination,
    _decode_ContextCombination,
    _decode_MRMapping,
    _encode_AttributeCombination,
    _encode_ContextCombination,
    _encode_MRMapping,
} from "./ServiceAdministration";
export {
    id,
    id_asx,
    id_at,
    id_avc,
    id_cat,
    id_coat,
    id_lmr,
    id_lsx,
    id_mr,
    id_not,
    id_pr,
} from "./UsefulDefinitions";

/**
 * @summary DirectoryString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DirectoryString{INTEGER:maxSize}  ::=  CHOICE {
 *   teletexString    TeletexString(SIZE (1..maxSize,...)),
 *   printableString  PrintableString(SIZE (1..maxSize,...)),
 *   bmpString        BMPString(SIZE (1..maxSize,...)),
 *   universalString  UniversalString(SIZE (1..maxSize,...)),
 *   uTF8String       UTF8String(SIZE (1..maxSize,...)) }
 * ```
 */
export type DirectoryString =
    | { teletexString: TeletexString } /* CHOICE_ALT_ROOT */
    | { printableString: PrintableString } /* CHOICE_ALT_ROOT */
    | { bmpString: BMPString } /* CHOICE_ALT_ROOT */
    | { universalString: UniversalString } /* CHOICE_ALT_ROOT */
    | { uTF8String: UTF8String } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_DirectoryString: $.ASN1Decoder<
    DirectoryString
> | null = null;
let _cached_encoder_for_DirectoryString: $.ASN1Encoder<
    DirectoryString
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DirectoryString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DirectoryString} The decoded data structure.
 */
export function _decode_DirectoryString(el: _Element) {
    if (!_cached_decoder_for_DirectoryString) {
        _cached_decoder_for_DirectoryString = $._decode_inextensible_choice<
            DirectoryString
        >({
            "UNIVERSAL 20": ["teletexString", $._decodeTeletexString],
            "UNIVERSAL 19": ["printableString", $._decodePrintableString],
            "UNIVERSAL 30": ["bmpString", $._decodeBMPString],
            "UNIVERSAL 28": ["universalString", $._decodeUniversalString],
            "UNIVERSAL 12": ["uTF8String", $._decodeUTF8String],
        });
    }
    return _cached_decoder_for_DirectoryString(el);
}
/**
 * @summary Encodes a(n) DirectoryString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectoryString, encoded as an ASN.1 Element.
 */
export function _encode_DirectoryString(
    value: DirectoryString,
    elGetter: $.ASN1Encoder<DirectoryString>
) {
    if (!_cached_encoder_for_DirectoryString) {
        _cached_encoder_for_DirectoryString = $._encode_choice<DirectoryString>(
            {
                teletexString: $._encodeTeletexString,
                printableString: $._encodePrintableString,
                bmpString: $._encodeBMPString,
                universalString: $._encodeUniversalString,
                uTF8String: $._encodeUTF8String,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DirectoryString(value, elGetter);
}

/**
 * @summary UnboundedDirectoryString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnboundedDirectoryString  ::=  CHOICE {
 *   teletexString    TeletexString(SIZE (1..MAX)),
 *   printableString  PrintableString(SIZE (1..MAX)),
 *   bmpString        BMPString(SIZE (1..MAX)),
 *   universalString  UniversalString(SIZE (1..MAX)),
 *   uTF8String       UTF8String(SIZE (1..MAX)) }
 * ```
 */
export type UnboundedDirectoryString =
    | { teletexString: TeletexString } /* CHOICE_ALT_ROOT */
    | { printableString: PrintableString } /* CHOICE_ALT_ROOT */
    | { bmpString: BMPString } /* CHOICE_ALT_ROOT */
    | { universalString: UniversalString } /* CHOICE_ALT_ROOT */
    | { uTF8String: UTF8String } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_UnboundedDirectoryString: $.ASN1Decoder<
    UnboundedDirectoryString
> | null = null;
let _cached_encoder_for_UnboundedDirectoryString: $.ASN1Encoder<
    UnboundedDirectoryString
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UnboundedDirectoryString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnboundedDirectoryString} The decoded data structure.
 */
export function _decode_UnboundedDirectoryString(el: _Element) {
    if (!_cached_decoder_for_UnboundedDirectoryString) {
        _cached_decoder_for_UnboundedDirectoryString = $._decode_inextensible_choice<
            UnboundedDirectoryString
        >({
            "UNIVERSAL 20": ["teletexString", $._decodeTeletexString],
            "UNIVERSAL 19": ["printableString", $._decodePrintableString],
            "UNIVERSAL 30": ["bmpString", $._decodeBMPString],
            "UNIVERSAL 28": ["universalString", $._decodeUniversalString],
            "UNIVERSAL 12": ["uTF8String", $._decodeUTF8String],
        });
    }
    return _cached_decoder_for_UnboundedDirectoryString(el);
}
/**
 * @summary Encodes a(n) UnboundedDirectoryString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnboundedDirectoryString, encoded as an ASN.1 Element.
 */
export function _encode_UnboundedDirectoryString(
    value: UnboundedDirectoryString,
    elGetter: $.ASN1Encoder<UnboundedDirectoryString>
) {
    if (!_cached_encoder_for_UnboundedDirectoryString) {
        _cached_encoder_for_UnboundedDirectoryString = $._encode_choice<
            UnboundedDirectoryString
        >(
            {
                teletexString: $._encodeTeletexString,
                printableString: $._encodePrintableString,
                bmpString: $._encodeBMPString,
                universalString: $._encodeUniversalString,
                uTF8String: $._encodeUTF8String,
            },
            $.BER
        );
    }
    return _cached_encoder_for_UnboundedDirectoryString(value, elGetter);
}

/**
 * @summary id_lsx_directoryString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-directoryString                    OBJECT IDENTIFIER ::= {id-lsx 15}
 * ```
 *
 * @constant
 */
export const id_lsx_directoryString: OBJECT_IDENTIFIER = new _OID([15], id_lsx);

/**
 * @summary directoryString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Directory String"
 *   DIRECTORY SYNTAX  UnboundedDirectoryString
 *   ID                id-lsx-directoryString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const directoryString: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&ldapDesc": "Directory String" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_directoryString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_caseIgnoreMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-caseIgnoreMatch                     OBJECT IDENTIFIER ::= {id-mr 2}
 * ```
 *
 * @constant
 */
export const id_mr_caseIgnoreMatch: OBJECT_IDENTIFIER = new _OID([2], id_mr);

/**
 * @summary caseIgnoreMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseIgnoreMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"caseIgnoreMatch"}
 *   ID           id-mr-caseIgnoreMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const caseIgnoreMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&AssertionType": _encode_UnboundedDirectoryString,
    },
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_caseIgnoreMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_knowledgeInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-knowledgeInformation                OBJECT IDENTIFIER ::= {id-at 2}
 * ```
 *
 * @constant
 */
export const id_at_knowledgeInformation: OBJECT_IDENTIFIER = new _OID(
    [2],
    id_at
);

/**
 * @summary knowledgeInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * knowledgeInformation ATTRIBUTE ::= {
 *   WITH SYNTAX              UnboundedDirectoryString
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   OBSOLETE                 TRUE
 *   ID                       id-at-knowledgeInformation }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const knowledgeInformation: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING */,
    "&id": id_at_knowledgeInformation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary SubstringAssertion_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringAssertion-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type SubstringAssertion_Item =
    | { initial: UnboundedDirectoryString } /* CHOICE_ALT_ROOT */
    | { any_: UnboundedDirectoryString } /* CHOICE_ALT_ROOT */
    | { final: UnboundedDirectoryString } /* CHOICE_ALT_ROOT */
    | { control: Attribute } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_SubstringAssertion_Item: $.ASN1Decoder<
    SubstringAssertion_Item
> | null = null;
let _cached_encoder_for_SubstringAssertion_Item: $.ASN1Encoder<
    SubstringAssertion_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SubstringAssertion_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubstringAssertion_Item} The decoded data structure.
 */
export function _decode_SubstringAssertion_Item(el: _Element) {
    if (!_cached_decoder_for_SubstringAssertion_Item) {
        _cached_decoder_for_SubstringAssertion_Item = $._decode_extensible_choice<
            SubstringAssertion_Item
        >({
            "CONTEXT 0": [
                "initial",
                $._decode_explicit<UnboundedDirectoryString>(
                    () => _decode_UnboundedDirectoryString
                ),
            ],
            "CONTEXT 1": [
                "any_",
                $._decode_explicit<UnboundedDirectoryString>(
                    () => _decode_UnboundedDirectoryString
                ),
            ],
            "CONTEXT 2": [
                "final",
                $._decode_explicit<UnboundedDirectoryString>(
                    () => _decode_UnboundedDirectoryString
                ),
            ],
            "UNIVERSAL 16": ["control", _decode_Attribute],
        });
    }
    return _cached_decoder_for_SubstringAssertion_Item(el);
}
/**
 * @summary Encodes a(n) SubstringAssertion_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubstringAssertion_Item, encoded as an ASN.1 Element.
 */
export function _encode_SubstringAssertion_Item(
    value: SubstringAssertion_Item,
    elGetter: $.ASN1Encoder<SubstringAssertion_Item>
) {
    if (!_cached_encoder_for_SubstringAssertion_Item) {
        _cached_encoder_for_SubstringAssertion_Item = $._encode_choice<
            SubstringAssertion_Item
        >(
            {
                initial: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_UnboundedDirectoryString,
                    $.BER
                ),
                any_: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_UnboundedDirectoryString,
                    $.BER
                ),
                final: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_UnboundedDirectoryString,
                    $.BER
                ),
                control: _encode_Attribute,
            },
            $.BER
        );
    }
    return _cached_encoder_for_SubstringAssertion_Item(value, elGetter);
}

export type SubstringAssertion<> = SubstringAssertion_Item[]; // SequenceOfType
let _cached_decoder_for_SubstringAssertion: $.ASN1Decoder<
    SubstringAssertion
> | null = null;
let _cached_encoder_for_SubstringAssertion: $.ASN1Encoder<
    SubstringAssertion
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SubstringAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubstringAssertion} The decoded data structure.
 */
export function _decode_SubstringAssertion(el: _Element) {
    if (!_cached_decoder_for_SubstringAssertion) {
        _cached_decoder_for_SubstringAssertion = $._decodeSequenceOf<
            SubstringAssertion_Item
        >(() => _decode_SubstringAssertion_Item);
    }
    return _cached_decoder_for_SubstringAssertion(el);
}
/**
 * @summary Encodes a(n) SubstringAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubstringAssertion, encoded as an ASN.1 Element.
 */
export function _encode_SubstringAssertion(
    value: SubstringAssertion,
    elGetter: $.ASN1Encoder<SubstringAssertion>
) {
    if (!_cached_encoder_for_SubstringAssertion) {
        _cached_encoder_for_SubstringAssertion = $._encodeSequenceOf<
            SubstringAssertion_Item
        >(() => _encode_SubstringAssertion_Item, $.BER);
    }
    return _cached_encoder_for_SubstringAssertion(value, elGetter);
}

/**
 * @summary id_lsx_substringAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-substringAssertion                 OBJECT IDENTIFIER ::= {id-lsx 58}
 * ```
 *
 * @constant
 */
export const id_lsx_substringAssertion: OBJECT_IDENTIFIER = new _OID(
    [58],
    id_lsx
);

/**
 * @summary substringAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * substringAssertion SYNTAX-NAME ::= {
 *   LDAP-DESC         "Substring Assertion"
 *   DIRECTORY SYNTAX  SubstringAssertion
 *   ID                id-lsx-substringAssertion }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const substringAssertion: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_SubstringAssertion,
    },
    encoderFor: {
        "&Type": _encode_SubstringAssertion,
    },
    "&ldapDesc": "Substring Assertion" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_substringAssertion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_caseIgnoreSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-caseIgnoreSubstringsMatch           OBJECT IDENTIFIER ::= {id-mr 4}
 * ```
 *
 * @constant
 */
export const id_mr_caseIgnoreSubstringsMatch: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_mr
);

/**
 * @summary caseIgnoreSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseIgnoreSubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion
 *   LDAP-SYNTAX  substringAssertion.&id
 *   LDAP-NAME    {"caseIgnoreSubstringsMatch"}
 *   ID           id-mr-caseIgnoreSubstringsMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const caseIgnoreSubstringsMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_SubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_SubstringAssertion,
    },
    "&ldapSyntax": substringAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-name                                OBJECT IDENTIFIER ::= {id-at 41}
 * ```
 *
 * @constant
 */
export const id_at_name: OBJECT_IDENTIFIER = new _OID([41], id_at);

/**
 * @summary name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * name ATTRIBUTE ::= {
 *   WITH SYNTAX              UnboundedDirectoryString
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"name"}
 *   ID                       id-at-name }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const name: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_name /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_commonName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-commonName                          OBJECT IDENTIFIER ::= {id-at 3}
 * ```
 *
 * @constant
 */
export const id_at_commonName: OBJECT_IDENTIFIER = new _OID([3], id_at);

/**
 * @summary commonName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * commonName ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              UnboundedDirectoryString
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"cn", "commonName"}
 *   ID                       id-at-commonName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const commonName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_commonName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_surname
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-surname                             OBJECT IDENTIFIER ::= {id-at 4}
 * ```
 *
 * @constant
 */
export const id_at_surname: OBJECT_IDENTIFIER = new _OID([4], id_at);

/**
 * @summary surname
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * surname ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              UnboundedDirectoryString
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"sn"}
 *   ID                       id-at-surname }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const surname: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_surname /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_givenName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-givenName                           OBJECT IDENTIFIER ::= {id-at 42}
 * ```
 *
 * @constant
 */
export const id_at_givenName: OBJECT_IDENTIFIER = new _OID([42], id_at);

/**
 * @summary givenName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * givenName ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              UnboundedDirectoryString
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"givenName"}
 *   ID                       id-at-givenName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const givenName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_givenName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_initials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-initials                            OBJECT IDENTIFIER ::= {id-at 43}
 * ```
 *
 * @constant
 */
export const id_at_initials: OBJECT_IDENTIFIER = new _OID([43], id_at);

/**
 * @summary initials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * initials ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              UnboundedDirectoryString
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"initials"}
 *   ID                       id-at-initials }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const initials: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_initials /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_generationQualifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-generationQualifier                 OBJECT IDENTIFIER ::= {id-at 44}
 * ```
 *
 * @constant
 */
export const id_at_generationQualifier: OBJECT_IDENTIFIER = new _OID(
    [44],
    id_at
);

/**
 * @summary generationQualifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * generationQualifier ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              UnboundedDirectoryString
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"generationQualifier"}
 *   ID                       id-at-generationQualifier }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const generationQualifier: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_generationQualifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary UniqueIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniqueIdentifier  ::=  BIT STRING
 * ```
 */
export type UniqueIdentifier = BIT_STRING;
let _cached_decoder_for_UniqueIdentifier: $.ASN1Decoder<
    UniqueIdentifier
> | null = null;
let _cached_encoder_for_UniqueIdentifier: $.ASN1Encoder<
    UniqueIdentifier
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniqueIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniqueIdentifier} The decoded data structure.
 */
export function _decode_UniqueIdentifier(el: _Element) {
    if (!_cached_decoder_for_UniqueIdentifier) {
        _cached_decoder_for_UniqueIdentifier = $._decodeBitString;
    }
    return _cached_decoder_for_UniqueIdentifier(el);
}
/**
 * @summary Encodes a(n) UniqueIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniqueIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_UniqueIdentifier(
    value: UniqueIdentifier,
    elGetter: $.ASN1Encoder<UniqueIdentifier>
) {
    if (!_cached_encoder_for_UniqueIdentifier) {
        _cached_encoder_for_UniqueIdentifier = $._encodeBitString;
    }
    return _cached_encoder_for_UniqueIdentifier(value, elGetter);
}

/**
 * @summary id_lsx_bitString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-bitString                          OBJECT IDENTIFIER ::= {id-lsx 6}
 * ```
 *
 * @constant
 */
export const id_lsx_bitString: OBJECT_IDENTIFIER = new _OID([6], id_lsx);

/**
 * @summary bitString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * bitString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Bit String"
 *   DIRECTORY SYNTAX  BIT STRING
 *   ID                id-lsx-bitString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const bitString: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeBitString,
    },
    encoderFor: {
        "&Type": $._encodeBitString,
    },
    "&ldapDesc": "Bit String" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_bitString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_bitStringMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-bitStringMatch                      OBJECT IDENTIFIER ::= {id-mr 16}
 * ```
 *
 * @constant
 */
export const id_mr_bitStringMatch: OBJECT_IDENTIFIER = new _OID([16], id_mr);

/**
 * @summary bitStringMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * bitStringMatch MATCHING-RULE ::= {
 *   SYNTAX       BIT STRING
 *   LDAP-SYNTAX  bitString.&id
 *   LDAP-NAME    {"bitStringMatch"}
 *   ID           id-mr-bitStringMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const bitStringMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeBitString,
    },
    encoderFor: {
        "&AssertionType": $._encodeBitString,
    },
    "&ldapSyntax": bitString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_bitStringMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_uniqueIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-uniqueIdentifier                    OBJECT IDENTIFIER ::= {id-at 45}
 * ```
 *
 * @constant
 */
export const id_at_uniqueIdentifier: OBJECT_IDENTIFIER = new _OID([45], id_at);

/**
 * @summary uniqueIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uniqueIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX              UniqueIdentifier
 *   EQUALITY MATCHING RULE   bitStringMatch
 *   LDAP-SYNTAX              bitString.&id
 *   LDAP-NAME                {"x500UniqueIdentifier"}
 *   ID                       id-at-uniqueIdentifier }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const uniqueIdentifier: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniqueIdentifier,
    },
    encoderFor: {
        "&Type": _encode_UniqueIdentifier,
    },
    "&equality-match": bitStringMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": bitString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_uniqueIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_mr_caseIgnoreOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-caseIgnoreOrderingMatch             OBJECT IDENTIFIER ::= {id-mr 3}
 * ```
 *
 * @constant
 */
export const id_mr_caseIgnoreOrderingMatch: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_mr
);

/**
 * @summary caseIgnoreOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseIgnoreOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"caseIgnoreOrderingMatch"}
 *   ID           id-mr-caseIgnoreOrderingMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const caseIgnoreOrderingMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&AssertionType": _encode_UnboundedDirectoryString,
    },
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_caseIgnoreOrderingMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lsx_printableString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-printableString                    OBJECT IDENTIFIER ::= {id-lsx 44}
 * ```
 *
 * @constant
 */
export const id_lsx_printableString: OBJECT_IDENTIFIER = new _OID([44], id_lsx);

/**
 * @summary printableString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * printableString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Printable String"
 *   DIRECTORY SYNTAX  PrintableString
 *   ID                id-lsx-printableString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const printableString: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodePrintableString,
    },
    encoderFor: {
        "&Type": $._encodePrintableString,
    },
    "&ldapDesc": "Printable String" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_printableString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_dnQualifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-dnQualifier                         OBJECT IDENTIFIER ::= {id-at 46}
 * ```
 *
 * @constant
 */
export const id_at_dnQualifier: OBJECT_IDENTIFIER = new _OID([46], id_at);

/**
 * @summary dnQualifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dnQualifier ATTRIBUTE ::= {
 *   WITH SYNTAX              PrintableString
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   ORDERING MATCHING RULE   caseIgnoreOrderingMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX              printableString.&id
 *   LDAP-NAME                {"dnQualifier"}
 *   ID                       id-at-dnQualifier }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const dnQualifier: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodePrintableString,
    },
    encoderFor: {
        "&Type": $._encodePrintableString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": caseIgnoreOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_dnQualifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_serialNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-serialNumber                        OBJECT IDENTIFIER ::= {id-at 5}
 * ```
 *
 * @constant
 */
export const id_at_serialNumber: OBJECT_IDENTIFIER = new _OID([5], id_at);

/**
 * @summary serialNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serialNumber ATTRIBUTE ::= {
 *   WITH SYNTAX              PrintableString(SIZE (1..MAX))
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX              printableString.&id
 *   LDAP-NAME                {"serialNumber"}
 *   ID                       id-at-serialNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const serialNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodePrintableString,
    },
    encoderFor: {
        "&Type": $._encodePrintableString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_serialNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_pseudonym
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-pseudonym                           OBJECT IDENTIFIER ::= {id-at 65}
 * ```
 *
 * @constant
 */
export const id_at_pseudonym: OBJECT_IDENTIFIER = new _OID([65], id_at);

/**
 * @summary pseudonym
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pseudonym ATTRIBUTE ::= {
 *   SUBTYPE OF              name
 *   WITH SYNTAX             UnboundedDirectoryString
 *   ID                      id-at-pseudonym }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pseudonym: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&id": id_at_pseudonym /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type UUID<> = OCTET_STRING; // OctetStringType
let _cached_decoder_for_UUID: $.ASN1Decoder<UUID> | null = null;
let _cached_encoder_for_UUID: $.ASN1Encoder<UUID> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UUID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UUID} The decoded data structure.
 */
export function _decode_UUID(el: _Element) {
    if (!_cached_decoder_for_UUID) {
        _cached_decoder_for_UUID = $._decodeOctetString;
    }
    return _cached_decoder_for_UUID(el);
}
/**
 * @summary Encodes a(n) UUID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UUID, encoded as an ASN.1 Element.
 */
export function _encode_UUID(value: UUID, elGetter: $.ASN1Encoder<UUID>) {
    if (!_cached_encoder_for_UUID) {
        _cached_encoder_for_UUID = $._encodeOctetString;
    }
    return _cached_encoder_for_UUID(value, elGetter);
}

/**
 * @summary UUIDPair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UUIDPair ::= SEQUENCE {
 *   issuerUUID   UUID,
 *   subjectUUID  UUID,
 *   ... }
 * ```
 *
 * @class
 */
export class UUIDPair {
    constructor(
        /**
         * @summary `issuerUUID`.
         * @public
         * @readonly
         */
        readonly issuerUUID: UUID,
        /**
         * @summary `subjectUUID`.
         * @public
         * @readonly
         */
        readonly subjectUUID: UUID,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UUIDPair
     * @description
     *
     * This takes an `object` and converts it to a `UUIDPair`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UUIDPair`.
     * @returns {UUIDPair}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof UUIDPair]: UUIDPair[_K] }>
    ): UUIDPair {
        return new UUIDPair(
            _o.issuerUUID,
            _o.subjectUUID,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of UUIDPair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UUIDPair: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "issuerUUID",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subjectUUID",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of UUIDPair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UUIDPair: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of UUIDPair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UUIDPair: $.ComponentSpec[] = [];
let _cached_decoder_for_UUIDPair: $.ASN1Decoder<UUIDPair> | null = null;
let _cached_encoder_for_UUIDPair: $.ASN1Encoder<UUIDPair> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UUIDPair
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UUIDPair} The decoded data structure.
 */
export function _decode_UUIDPair(el: _Element) {
    if (!_cached_decoder_for_UUIDPair) {
        _cached_decoder_for_UUIDPair = function (el: _Element): UUIDPair {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "UUIDPair contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "issuerUUID";
            sequence[1].name = "subjectUUID";
            let issuerUUID!: UUID;
            let subjectUUID!: UUID;
            issuerUUID = _decode_UUID(sequence[0]);
            subjectUUID = _decode_UUID(sequence[1]);
            return new UUIDPair(issuerUUID, subjectUUID, sequence.slice(2));
        };
    }
    return _cached_decoder_for_UUIDPair(el);
}
/**
 * @summary Encodes a(n) UUIDPair into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UUIDPair, encoded as an ASN.1 Element.
 */
export function _encode_UUIDPair(
    value: UUIDPair,
    elGetter: $.ASN1Encoder<UUIDPair>
) {
    if (!_cached_encoder_for_UUIDPair) {
        _cached_encoder_for_UUIDPair = function (
            value: UUIDPair,
            elGetter: $.ASN1Encoder<UUIDPair>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_UUID(
                                value.issuerUUID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_UUID(
                                value.subjectUUID,
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
    return _cached_encoder_for_UUIDPair(value, elGetter);
}

/**
 * @summary id_mr_uuidpairmatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-uuidpairmatch                       OBJECT IDENTIFIER ::= {id-mr 68}
 * ```
 *
 * @constant
 */
export const id_mr_uuidpairmatch: OBJECT_IDENTIFIER = new _OID([68], id_mr);

/**
 * @summary uUIDPairMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uUIDPairMatch MATCHING-RULE ::= {
 *   SYNTAX       UUIDPair
 *   ID           id-mr-uuidpairmatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const uUIDPairMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UUIDPair,
    },
    encoderFor: {
        "&AssertionType": _encode_UUIDPair,
    },
    "&id": id_mr_uuidpairmatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_uuidpair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-uuidpair                            OBJECT IDENTIFIER ::= {id-at 77}
 * ```
 *
 * @constant
 */
export const id_at_uuidpair: OBJECT_IDENTIFIER = new _OID([77], id_at);

/**
 * @summary uUIDPair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uUIDPair ATTRIBUTE ::= {
 *   WITH SYNTAX             UUIDPair
 *   EQUALITY MATCHING RULE  uUIDPairMatch
 *   ID                      id-at-uuidpair }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const uUIDPair: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UUIDPair,
    },
    encoderFor: {
        "&Type": _encode_UUIDPair,
    },
    "&equality-match": uUIDPairMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_uuidpair /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type DomainName<> = UTF8String; // UTF8String
let _cached_decoder_for_DomainName: $.ASN1Decoder<DomainName> | null = null;
let _cached_encoder_for_DomainName: $.ASN1Encoder<DomainName> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DomainName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DomainName} The decoded data structure.
 */
export function _decode_DomainName(el: _Element) {
    if (!_cached_decoder_for_DomainName) {
        _cached_decoder_for_DomainName = $._decodeUTF8String;
    }
    return _cached_decoder_for_DomainName(el);
}
/**
 * @summary Encodes a(n) DomainName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainName, encoded as an ASN.1 Element.
 */
export function _encode_DomainName(
    value: DomainName,
    elGetter: $.ASN1Encoder<DomainName>
) {
    if (!_cached_encoder_for_DomainName) {
        _cached_encoder_for_DomainName = $._encodeUTF8String;
    }
    return _cached_encoder_for_DomainName(value, elGetter);
}

/**
 * @summary id_asx_dnsString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-dnsString                          OBJECT IDENTIFIER ::= {id-asx 9}
 * ```
 *
 * @constant
 */
export const id_asx_dnsString: OBJECT_IDENTIFIER = new _OID([9], id_asx);

/**
 * @summary dnsString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dnsString SYNTAX-NAME ::= {
 *   LDAP-DESC         "DNS Name String"
 *   DIRECTORY SYNTAX  DomainName
 *   ID                id-asx-dnsString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const dnsString: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_DomainName,
    },
    encoderFor: {
        "&Type": _encode_DomainName,
    },
    "&ldapDesc": "DNS Name String" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_dnsString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_dnsNameMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-dnsNameMatch                        OBJECT IDENTIFIER ::= {id-mr 74}
 * ```
 *
 * @constant
 */
export const id_mr_dnsNameMatch: OBJECT_IDENTIFIER = new _OID([74], id_mr);

/**
 * @summary dnsNameMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dnsNameMatch MATCHING-RULE ::= {
 *   SYNTAX       DomainName
 *   LDAP-SYNTAX  dnsString.&id
 *   LDAP-NAME    {"dnsNameMatch"}
 *   ID           id-mr-dnsNameMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const dnsNameMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_DomainName,
    },
    encoderFor: {
        "&AssertionType": _encode_DomainName,
    },
    "&ldapSyntax": dnsString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_dnsNameMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_dnsName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-dnsName                             OBJECT IDENTIFIER ::= {id-at 100}
 * ```
 *
 * @constant
 */
export const id_at_dnsName: OBJECT_IDENTIFIER = new _OID([100], id_at);

/**
 * @summary dnsName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dnsName ATTRIBUTE ::= {
 *   WITH SYNTAX             DomainName
 *   EQUALITY MATCHING RULE  dnsNameMatch
 *   LDAP-SYNTAX             dnsString.&id
 *   LDAP-NAME               {"DNS name"}
 *   ID                      id-at-dnsName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const dnsName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DomainName,
    },
    encoderFor: {
        "&Type": _encode_DomainName,
    },
    "&equality-match": dnsNameMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dnsString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_dnsName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type IntEmail<> = UTF8String; // UTF8String
let _cached_decoder_for_IntEmail: $.ASN1Decoder<IntEmail> | null = null;
let _cached_encoder_for_IntEmail: $.ASN1Encoder<IntEmail> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) IntEmail
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IntEmail} The decoded data structure.
 */
export function _decode_IntEmail(el: _Element) {
    if (!_cached_decoder_for_IntEmail) {
        _cached_decoder_for_IntEmail = $._decodeUTF8String;
    }
    return _cached_decoder_for_IntEmail(el);
}
/**
 * @summary Encodes a(n) IntEmail into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntEmail, encoded as an ASN.1 Element.
 */
export function _encode_IntEmail(
    value: IntEmail,
    elGetter: $.ASN1Encoder<IntEmail>
) {
    if (!_cached_encoder_for_IntEmail) {
        _cached_encoder_for_IntEmail = $._encodeUTF8String;
    }
    return _cached_encoder_for_IntEmail(value, elGetter);
}

/**
 * @summary id_mr_intEmailMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-intEmailMatch                       OBJECT IDENTIFIER ::= {id-mr 75}
 * ```
 *
 * @constant
 */
export const id_mr_intEmailMatch: OBJECT_IDENTIFIER = new _OID([75], id_mr);

/**
 * @summary intEmailMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * intEmailMatch MATCHING-RULE ::= {
 *   SYNTAX       IntEmail
 *   LDAP-SYNTAX  dnsString.&id
 *   LDAP-NAME    {"intEmailMatch"}
 *   ID           id-mr-intEmailMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const intEmailMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_IntEmail,
    },
    encoderFor: {
        "&AssertionType": _encode_IntEmail,
    },
    "&ldapSyntax": dnsString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_intEmailMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_asx_intEmailString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-intEmailString                     OBJECT IDENTIFIER ::= {id-asx 11}
 * ```
 *
 * @constant
 */
export const id_asx_intEmailString: OBJECT_IDENTIFIER = new _OID([11], id_asx);

/**
 * @summary intEmailString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * intEmailString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Internationalized Email"
 *   DIRECTORY SYNTAX  IntEmail
 *   ID                id-asx-intEmailString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const intEmailString: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_IntEmail,
    },
    encoderFor: {
        "&Type": _encode_IntEmail,
    },
    "&ldapDesc": "Internationalized Email" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_intEmailString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_intEmail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-intEmail                            OBJECT IDENTIFIER ::= {id-at 104}
 * ```
 *
 * @constant
 */
export const id_at_intEmail: OBJECT_IDENTIFIER = new _OID([104], id_at);

/**
 * @summary intEmail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * intEmail ATTRIBUTE ::= {
 *   WITH SYNTAX             IntEmail
 *   EQUALITY MATCHING RULE  intEmailMatch
 *   SINGLE VALUE            TRUE
 *   LDAP-SYNTAX             intEmailString.&id
 *   LDAP-NAME               {"Internationalized Email"}
 *   ID                      id-at-intEmail }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const intEmail: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_IntEmail,
    },
    encoderFor: {
        "&Type": _encode_IntEmail,
    },
    "&equality-match": intEmailMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": intEmailString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_intEmail /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type Jid<> = UTF8String; // UTF8String
let _cached_decoder_for_Jid: $.ASN1Decoder<Jid> | null = null;
let _cached_encoder_for_Jid: $.ASN1Encoder<Jid> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Jid
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Jid} The decoded data structure.
 */
export function _decode_Jid(el: _Element) {
    if (!_cached_decoder_for_Jid) {
        _cached_decoder_for_Jid = $._decodeUTF8String;
    }
    return _cached_decoder_for_Jid(el);
}
/**
 * @summary Encodes a(n) Jid into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Jid, encoded as an ASN.1 Element.
 */
export function _encode_Jid(value: Jid, elGetter: $.ASN1Encoder<Jid>) {
    if (!_cached_encoder_for_Jid) {
        _cached_encoder_for_Jid = $._encodeUTF8String;
    }
    return _cached_encoder_for_Jid(value, elGetter);
}

/**
 * @summary id_mr_jidMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-jidMatch                            OBJECT IDENTIFIER ::= {id-mr 76}
 * ```
 *
 * @constant
 */
export const id_mr_jidMatch: OBJECT_IDENTIFIER = new _OID([76], id_mr);

/**
 * @summary jidMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * jidMatch MATCHING-RULE ::= {
 *   SYNTAX       Jid
 *   LDAP-SYNTAX  dnsString.&id
 *   LDAP-NAME    {"jidMatch"}
 *   ID           id-mr-jidMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const jidMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_Jid,
    },
    encoderFor: {
        "&AssertionType": _encode_Jid,
    },
    "&ldapSyntax": dnsString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_jidMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_asx_jidString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-jidString                          OBJECT IDENTIFIER ::= {id-asx 12}
 * ```
 *
 * @constant
 */
export const id_asx_jidString: OBJECT_IDENTIFIER = new _OID([12], id_asx);

/**
 * @summary jidString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * jidString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Jabber identifier"
 *   DIRECTORY SYNTAX  Jid
 *   ID                id-asx-jidString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const jidString: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_Jid,
    },
    encoderFor: {
        "&Type": _encode_Jid,
    },
    "&ldapDesc": "Jabber identifier" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_jidString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_jid
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-jid                                 OBJECT IDENTIFIER ::= {id-at 105}
 * ```
 *
 * @constant
 */
export const id_at_jid: OBJECT_IDENTIFIER = new _OID([105], id_at);

/**
 * @summary jid
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * jid ATTRIBUTE ::= {
 *   WITH SYNTAX             Jid
 *   EQUALITY MATCHING RULE  jidMatch
 *   SINGLE VALUE            TRUE
 *   LDAP-SYNTAX             jidString.&id
 *   LDAP-NAME               {"Jabber identifier"}
 *   ID                      id-at-jid }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const jid: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Jid,
    },
    encoderFor: {
        "&Type": _encode_Jid,
    },
    "&equality-match": jidMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": jidString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_jid /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_lsx_oid
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-oid                                OBJECT IDENTIFIER ::= {id-lsx 38}
 * ```
 *
 * @constant
 */
export const id_lsx_oid: OBJECT_IDENTIFIER = new _OID([38], id_lsx);

/**
 * @summary oid
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oid SYNTAX-NAME ::= {
 *   LDAP-DESC         "OID"
 *   DIRECTORY SYNTAX  OBJECT IDENTIFIER
 *   ID                id-lsx-oid }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const oid: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&ldapDesc": "OID" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_oid /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_objectIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-objectIdentifier                    OBJECT IDENTIFIER ::= {id-at 106}
 * ```
 *
 * @constant
 */
export const id_at_objectIdentifier: OBJECT_IDENTIFIER = new _OID([106], id_at);

/**
 * @summary objectIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * objectIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX             OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE  objectIdentifierMatch
 *   SINGLE VALUE            TRUE
 *   LDAP-SYNTAX             oid.&id
 *   LDAP-NAME               {"Object Identifier"}
 *   ID                      id-at-objectIdentifier }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const objectIdentifier: ATTRIBUTE = {
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
    "&id": id_at_objectIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type CountryName<> = PrintableString; // PrintableString
let _cached_decoder_for_CountryName: $.ASN1Decoder<CountryName> | null = null;
let _cached_encoder_for_CountryName: $.ASN1Encoder<CountryName> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CountryName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CountryName} The decoded data structure.
 */
export function _decode_CountryName(el: _Element) {
    if (!_cached_decoder_for_CountryName) {
        _cached_decoder_for_CountryName = $._decodePrintableString;
    }
    return _cached_decoder_for_CountryName(el);
}
/**
 * @summary Encodes a(n) CountryName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CountryName, encoded as an ASN.1 Element.
 */
export function _encode_CountryName(
    value: CountryName,
    elGetter: $.ASN1Encoder<CountryName>
) {
    if (!_cached_encoder_for_CountryName) {
        _cached_encoder_for_CountryName = $._encodePrintableString;
    }
    return _cached_encoder_for_CountryName(value, elGetter);
}

/**
 * @summary id_lsx_countryString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-countryString                      OBJECT IDENTIFIER ::= {id-lsx 11}
 * ```
 *
 * @constant
 */
export const id_lsx_countryString: OBJECT_IDENTIFIER = new _OID([11], id_lsx);

/**
 * @summary countryString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Country String"
 *   DIRECTORY SYNTAX  CountryName
 *   ID                id-lsx-countryString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const countryString: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CountryName,
    },
    encoderFor: {
        "&Type": _encode_CountryName,
    },
    "&ldapDesc": "Country String" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_countryString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_countryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-countryName                         OBJECT IDENTIFIER ::= {id-at 6}
 * ```
 *
 * @constant
 */
export const id_at_countryName: OBJECT_IDENTIFIER = new _OID([6], id_at);

/**
 * @summary countryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryName ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              CountryName
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              countryString.&id
 *   LDAP-NAME                {"c"}
 *   ID                       id-at-countryName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const countryName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CountryName,
    },
    encoderFor: {
        "&Type": _encode_CountryName,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": countryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_countryName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type CountryCode3c<> = PrintableString; // PrintableString
let _cached_decoder_for_CountryCode3c: $.ASN1Decoder<
    CountryCode3c
> | null = null;
let _cached_encoder_for_CountryCode3c: $.ASN1Encoder<
    CountryCode3c
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CountryCode3c
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CountryCode3c} The decoded data structure.
 */
export function _decode_CountryCode3c(el: _Element) {
    if (!_cached_decoder_for_CountryCode3c) {
        _cached_decoder_for_CountryCode3c = $._decodePrintableString;
    }
    return _cached_decoder_for_CountryCode3c(el);
}
/**
 * @summary Encodes a(n) CountryCode3c into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CountryCode3c, encoded as an ASN.1 Element.
 */
export function _encode_CountryCode3c(
    value: CountryCode3c,
    elGetter: $.ASN1Encoder<CountryCode3c>
) {
    if (!_cached_encoder_for_CountryCode3c) {
        _cached_encoder_for_CountryCode3c = $._encodePrintableString;
    }
    return _cached_encoder_for_CountryCode3c(value, elGetter);
}

/**
 * @summary id_asx_countryString3c
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-countryString3c                    OBJECT IDENTIFIER ::= {id-asx 7}
 * ```
 *
 * @constant
 */
export const id_asx_countryString3c: OBJECT_IDENTIFIER = new _OID([7], id_asx);

/**
 * @summary countryString3c
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryString3c SYNTAX-NAME ::= {
 *   LDAP-DESC         "Country String 3 characters"
 *   DIRECTORY SYNTAX  CountryCode3c
 *   ID                id-asx-countryString3c }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const countryString3c: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CountryCode3c,
    },
    encoderFor: {
        "&Type": _encode_CountryCode3c,
    },
    "&ldapDesc": "Country String 3 characters" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_countryString3c /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_countryCode3c
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-countryCode3c                       OBJECT IDENTIFIER ::= {id-at 98}
 * ```
 *
 * @constant
 */
export const id_at_countryCode3c: OBJECT_IDENTIFIER = new _OID([98], id_at);

/**
 * @summary countryCode3c
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryCode3c ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              CountryCode3c
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              countryString3c.&id
 *   LDAP-NAME                {"c3"}
 *   ID                       id-at-countryCode3c }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const countryCode3c: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CountryCode3c,
    },
    encoderFor: {
        "&Type": _encode_CountryCode3c,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": countryString3c["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_countryCode3c /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type CountryCode3n<> = NumericString; // NumericString
let _cached_decoder_for_CountryCode3n: $.ASN1Decoder<
    CountryCode3n
> | null = null;
let _cached_encoder_for_CountryCode3n: $.ASN1Encoder<
    CountryCode3n
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CountryCode3n
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CountryCode3n} The decoded data structure.
 */
export function _decode_CountryCode3n(el: _Element) {
    if (!_cached_decoder_for_CountryCode3n) {
        _cached_decoder_for_CountryCode3n = $._decodeNumericString;
    }
    return _cached_decoder_for_CountryCode3n(el);
}
/**
 * @summary Encodes a(n) CountryCode3n into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CountryCode3n, encoded as an ASN.1 Element.
 */
export function _encode_CountryCode3n(
    value: CountryCode3n,
    elGetter: $.ASN1Encoder<CountryCode3n>
) {
    if (!_cached_encoder_for_CountryCode3n) {
        _cached_encoder_for_CountryCode3n = $._encodeNumericString;
    }
    return _cached_encoder_for_CountryCode3n(value, elGetter);
}

/**
 * @summary id_asx_countryString3n
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-countryString3n                    OBJECT IDENTIFIER ::= {id-asx 8}
 * ```
 *
 * @constant
 */
export const id_asx_countryString3n: OBJECT_IDENTIFIER = new _OID([8], id_asx);

/**
 * @summary countryString3n
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryString3n SYNTAX-NAME ::= {
 *   LDAP-DESC         "Country String 3 numeric characters"
 *   DIRECTORY SYNTAX  CountryCode3n
 *   ID                id-asx-countryString3n }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const countryString3n: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CountryCode3n,
    },
    encoderFor: {
        "&Type": _encode_CountryCode3n,
    },
    "&ldapDesc":
        "Country String 3 numeric characters" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_countryString3n /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_countryCode3n
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-countryCode3n                       OBJECT IDENTIFIER ::= {id-at 99}
 * ```
 *
 * @constant
 */
export const id_at_countryCode3n: OBJECT_IDENTIFIER = new _OID([99], id_at);

/**
 * @summary countryCode3n
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryCode3n ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              CountryCode3n
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              countryString3n.&id
 *   LDAP-NAME                {"n3"}
 *   ID                       id-at-countryCode3n }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const countryCode3n: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CountryCode3n,
    },
    encoderFor: {
        "&Type": _encode_CountryCode3n,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": countryString3n["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_countryCode3n /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_localityName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-localityName                        OBJECT IDENTIFIER ::= {id-at 7}
 * ```
 *
 * @constant
 */
export const id_at_localityName: OBJECT_IDENTIFIER = new _OID([7], id_at);

/**
 * @summary localityName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * localityName ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              UnboundedDirectoryString
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"l"}
 *   ID                       id-at-localityName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const localityName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_localityName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_collectiveLocalityName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-collectiveLocalityName              OBJECT IDENTIFIER ::= {id-at 7 1}
 * ```
 *
 * @constant
 */
export const id_at_collectiveLocalityName: OBJECT_IDENTIFIER = new _OID(
    [7, 1],
    id_at
);

/**
 * @summary collectiveLocalityName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveLocalityName ATTRIBUTE ::= {
 *   SUBTYPE OF              localityName
 *   COLLECTIVE              TRUE
 *   LDAP-SYNTAX             directoryString.&id
 *   LDAP-NAME               {"c-l"}
 *   ID                      id-at-collectiveLocalityName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectiveLocalityName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": localityName /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectiveLocalityName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_stateOrProvinceName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-stateOrProvinceName                 OBJECT IDENTIFIER ::= {id-at 8}
 * ```
 *
 * @constant
 */
export const id_at_stateOrProvinceName: OBJECT_IDENTIFIER = new _OID(
    [8],
    id_at
);

/**
 * @summary stateOrProvinceName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * stateOrProvinceName ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              UnboundedDirectoryString
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"st"}
 *   ID                       id-at-stateOrProvinceName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const stateOrProvinceName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_stateOrProvinceName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_collectiveStateOrProvinceName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-collectiveStateOrProvinceName       OBJECT IDENTIFIER ::= {id-at 8 1}
 * ```
 *
 * @constant
 */
export const id_at_collectiveStateOrProvinceName: OBJECT_IDENTIFIER = new _OID(
    [8, 1],
    id_at
);

/**
 * @summary collectiveStateOrProvinceName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveStateOrProvinceName ATTRIBUTE ::= {
 *   SUBTYPE OF               stateOrProvinceName
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"c-st"}
 *   ID                       id-at-collectiveStateOrProvinceName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectiveStateOrProvinceName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": stateOrProvinceName /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectiveStateOrProvinceName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_streetAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-streetAddress                       OBJECT IDENTIFIER ::= {id-at 9}
 * ```
 *
 * @constant
 */
export const id_at_streetAddress: OBJECT_IDENTIFIER = new _OID([9], id_at);

/**
 * @summary streetAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * streetAddress ATTRIBUTE ::= {
 *   WITH SYNTAX              UnboundedDirectoryString
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"street"}
 *   ID                       id-at-streetAddress }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const streetAddress: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_streetAddress /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_collectiveStreetAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-collectiveStreetAddress             OBJECT IDENTIFIER ::= {id-at 9 1}
 * ```
 *
 * @constant
 */
export const id_at_collectiveStreetAddress: OBJECT_IDENTIFIER = new _OID(
    [9, 1],
    id_at
);

/**
 * @summary collectiveStreetAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveStreetAddress ATTRIBUTE ::= {
 *   SUBTYPE OF               streetAddress
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"c-street"}
 *   ID                       id-at-collectiveStreetAddress }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectiveStreetAddress: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": streetAddress /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectiveStreetAddress /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_houseIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-houseIdentifier                     OBJECT IDENTIFIER ::= {id-at 51}
 * ```
 *
 * @constant
 */
export const id_at_houseIdentifier: OBJECT_IDENTIFIER = new _OID([51], id_at);

/**
 * @summary houseIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * houseIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX              UnboundedDirectoryString
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"houseIdentifier"}
 *   ID                       id-at-houseIdentifier }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const houseIdentifier: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_houseIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_organizationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-organizationName                    OBJECT IDENTIFIER ::= {id-at 10}
 * ```
 *
 * @constant
 */
export const id_at_organizationName: OBJECT_IDENTIFIER = new _OID([10], id_at);

/**
 * @summary organizationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * organizationName ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              UnboundedDirectoryString
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"o"}
 *   ID                       id-at-organizationName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const organizationName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_organizationName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_collectiveOrganizationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-collectiveOrganizationName          OBJECT IDENTIFIER ::= {id-at 10 1}
 * ```
 *
 * @constant
 */
export const id_at_collectiveOrganizationName: OBJECT_IDENTIFIER = new _OID(
    [10, 1],
    id_at
);

/**
 * @summary collectiveOrganizationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveOrganizationName ATTRIBUTE ::= {
 *   SUBTYPE OF               organizationName
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"c-o"}
 *   ID                       id-at-collectiveOrganizationName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectiveOrganizationName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": organizationName /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectiveOrganizationName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_organizationalUnitName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-organizationalUnitName              OBJECT IDENTIFIER ::= {id-at 11}
 * ```
 *
 * @constant
 */
export const id_at_organizationalUnitName: OBJECT_IDENTIFIER = new _OID(
    [11],
    id_at
);

/**
 * @summary organizationalUnitName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * organizationalUnitName ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              UnboundedDirectoryString
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"ou"}
 *   ID                       id-at-organizationalUnitName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const organizationalUnitName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_organizationalUnitName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_collectiveOrganizationalUnitName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-collectiveOrganizationalUnitName    OBJECT IDENTIFIER ::= {id-at 11 1}
 * ```
 *
 * @constant
 */
export const id_at_collectiveOrganizationalUnitName: OBJECT_IDENTIFIER = new _OID(
    [11, 1],
    id_at
);

/**
 * @summary collectiveOrganizationalUnitName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveOrganizationalUnitName ATTRIBUTE ::= {
 *   SUBTYPE OF               organizationalUnitName
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"c-ou"}
 *   ID                       id-at-collectiveOrganizationalUnitName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectiveOrganizationalUnitName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": organizationalUnitName /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectiveOrganizationalUnitName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_title
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-title                               OBJECT IDENTIFIER ::= {id-at 12}
 * ```
 *
 * @constant
 */
export const id_at_title: OBJECT_IDENTIFIER = new _OID([12], id_at);

/**
 * @summary title
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * title ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              UnboundedDirectoryString
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"title"}
 *   ID                       id-at-title }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const title: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_title /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_organizationIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-organizationIdentifier              OBJECT IDENTIFIER ::= {id-at 97}
 * ```
 *
 * @constant
 */
export const id_at_organizationIdentifier: OBJECT_IDENTIFIER = new _OID(
    [97],
    id_at
);

/**
 * @summary organizationIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * organizationIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX              UnboundedDirectoryString
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreSubstringsMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"organizationIdentifier"}
 *   ID                       id-at-organizationIdentifier }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const organizationIdentifier: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_organizationIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_description
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-description                         OBJECT IDENTIFIER ::= {id-at 13}
 * ```
 *
 * @constant
 */
export const id_at_description: OBJECT_IDENTIFIER = new _OID([13], id_at);

/**
 * @summary description
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * description ATTRIBUTE ::= {
 *   WITH SYNTAX              UnboundedDirectoryString
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"description"}
 *   ID                       id-at-description }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const description: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_description /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary CriteriaItem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CriteriaItem  ::=  CHOICE {
 *   equality          [0]  AttributeType,
 *   substrings        [1]  AttributeType,
 *   greaterOrEqual    [2]  AttributeType,
 *   lessOrEqual       [3]  AttributeType,
 *   approximateMatch  [4]  AttributeType,
 *   ... }
 * ```
 */
export type CriteriaItem =
    | { equality: AttributeType } /* CHOICE_ALT_ROOT */
    | { substrings: AttributeType } /* CHOICE_ALT_ROOT */
    | { greaterOrEqual: AttributeType } /* CHOICE_ALT_ROOT */
    | { lessOrEqual: AttributeType } /* CHOICE_ALT_ROOT */
    | { approximateMatch: AttributeType } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CriteriaItem: $.ASN1Decoder<CriteriaItem> | null = null;
let _cached_encoder_for_CriteriaItem: $.ASN1Encoder<CriteriaItem> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CriteriaItem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CriteriaItem} The decoded data structure.
 */
export function _decode_CriteriaItem(el: _Element) {
    if (!_cached_decoder_for_CriteriaItem) {
        _cached_decoder_for_CriteriaItem = $._decode_extensible_choice<
            CriteriaItem
        >({
            "CONTEXT 0": [
                "equality",
                $._decode_explicit<AttributeType>(() => _decode_AttributeType),
            ],
            "CONTEXT 1": [
                "substrings",
                $._decode_explicit<AttributeType>(() => _decode_AttributeType),
            ],
            "CONTEXT 2": [
                "greaterOrEqual",
                $._decode_explicit<AttributeType>(() => _decode_AttributeType),
            ],
            "CONTEXT 3": [
                "lessOrEqual",
                $._decode_explicit<AttributeType>(() => _decode_AttributeType),
            ],
            "CONTEXT 4": [
                "approximateMatch",
                $._decode_explicit<AttributeType>(() => _decode_AttributeType),
            ],
        });
    }
    return _cached_decoder_for_CriteriaItem(el);
}
/**
 * @summary Encodes a(n) CriteriaItem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CriteriaItem, encoded as an ASN.1 Element.
 */
export function _encode_CriteriaItem(
    value: CriteriaItem,
    elGetter: $.ASN1Encoder<CriteriaItem>
) {
    if (!_cached_encoder_for_CriteriaItem) {
        _cached_encoder_for_CriteriaItem = $._encode_choice<CriteriaItem>(
            {
                equality: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_AttributeType,
                    $.BER
                ),
                substrings: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_AttributeType,
                    $.BER
                ),
                greaterOrEqual: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_AttributeType,
                    $.BER
                ),
                lessOrEqual: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_AttributeType,
                    $.BER
                ),
                approximateMatch: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => _encode_AttributeType,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CriteriaItem(value, elGetter);
}

/* TODO: CHECK_RECURSIVE_DEFINITION */
/**
 * @summary Criteria
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Criteria  ::=  CHOICE {
 *   type  [0]  CriteriaItem,
 *   and   [1]  SET OF Criteria,
 *   or    [2]  SET OF Criteria,
 *   not   [3]  Criteria,
 *   ... }
 * ```
 */
export type Criteria =
    | { type_: CriteriaItem } /* CHOICE_ALT_ROOT */
    | { and: Criteria[] } /* CHOICE_ALT_ROOT */
    | { or: Criteria[] } /* CHOICE_ALT_ROOT */
    | { not: Criteria } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Criteria: $.ASN1Decoder<Criteria> | null = null;
let _cached_encoder_for_Criteria: $.ASN1Encoder<Criteria> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Criteria
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Criteria} The decoded data structure.
 */
export function _decode_Criteria(el: _Element) {
    if (!_cached_decoder_for_Criteria) {
        _cached_decoder_for_Criteria = $._decode_extensible_choice<Criteria>({
            "CONTEXT 0": [
                "type_",
                $._decode_explicit<CriteriaItem>(() => _decode_CriteriaItem),
            ],
            "CONTEXT 1": [
                "and",
                $._decode_explicit<Criteria[]>(() =>
                    $._decodeSetOf<Criteria>(() => _decode_Criteria)
                ),
            ],
            "CONTEXT 2": [
                "or",
                $._decode_explicit<Criteria[]>(() =>
                    $._decodeSetOf<Criteria>(() => _decode_Criteria)
                ),
            ],
            "CONTEXT 3": [
                "not",
                $._decode_explicit<Criteria>(() => _decode_Criteria),
            ],
        });
    }
    return _cached_decoder_for_Criteria(el);
}
/**
 * @summary Encodes a(n) Criteria into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Criteria, encoded as an ASN.1 Element.
 */
export function _encode_Criteria(
    value: Criteria,
    elGetter: $.ASN1Encoder<Criteria>
) {
    if (!_cached_encoder_for_Criteria) {
        _cached_encoder_for_Criteria = $._encode_choice<Criteria>(
            {
                type_: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_CriteriaItem,
                    $.BER
                ),
                and: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSetOf<Criteria>(() => _encode_Criteria, $.BER),
                    $.BER
                ),
                or: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSetOf<Criteria>(() => _encode_Criteria, $.BER),
                    $.BER
                ),
                not: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_Criteria,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Criteria(value, elGetter);
}

/**
 * @summary Guide
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Guide ::= SET {
 *   objectClass  [0]  OBJECT-CLASS.&id OPTIONAL,
 *   criteria     [1]  Criteria,
 *   ... }
 * ```
 *
 * @class
 */
export class Guide {
    constructor(
        /**
         * @summary `objectClass`.
         * @public
         * @readonly
         */
        readonly objectClass: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `criteria`.
         * @public
         * @readonly
         */
        readonly criteria: Criteria,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Guide
     * @description
     *
     * This takes an `object` and converts it to a `Guide`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Guide`.
     * @returns {Guide}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Guide]: Guide[_K] }>
    ): Guide {
        return new Guide(
            _o.objectClass,
            _o.criteria,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of Guide
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Guide: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "objectClass",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "criteria",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Guide
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Guide: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Guide
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Guide: $.ComponentSpec[] = [];
let _cached_decoder_for_Guide: $.ASN1Decoder<Guide> | null = null;
let _cached_encoder_for_Guide: $.ASN1Encoder<Guide> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Guide
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Guide} The decoded data structure.
 */
export function _decode_Guide(el: _Element) {
    if (!_cached_decoder_for_Guide) {
        _cached_decoder_for_Guide = function (el: _Element): Guide {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let objectClass: OPTIONAL<OBJECT_IDENTIFIER>;
            let criteria!: Criteria;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                objectClass: (_el: _Element): void => {
                    objectClass = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                criteria: (_el: _Element): void => {
                    criteria = $._decode_explicit<Criteria>(
                        () => _decode_Criteria
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Guide,
                _extension_additions_list_spec_for_Guide,
                _root_component_type_list_2_spec_for_Guide,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Guide(
                /* SET_CONSTRUCTOR_CALL */ objectClass,
                criteria,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Guide(el);
}
/**
 * @summary Encodes a(n) Guide into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Guide, encoded as an ASN.1 Element.
 */
export function _encode_Guide(value: Guide, elGetter: $.ASN1Encoder<Guide>) {
    if (!_cached_encoder_for_Guide) {
        _cached_encoder_for_Guide = function (
            value: Guide,
            elGetter: $.ASN1Encoder<Guide>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.objectClass === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.objectClass, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_Criteria,
                                $.BER
                            )(value.criteria, $.BER),
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
    return _cached_encoder_for_Guide(value, elGetter);
}

/**
 * @summary id_lsx_guide
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-guide                              OBJECT IDENTIFIER ::= {id-lsx 25}
 * ```
 *
 * @constant
 */
export const id_lsx_guide: OBJECT_IDENTIFIER = new _OID([25], id_lsx);

/**
 * @summary guide
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * guide SYNTAX-NAME ::= {
 *   LDAP-DESC         "Guide"
 *   DIRECTORY SYNTAX  Guide
 *   ID                id-lsx-guide }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const guide: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_Guide,
    },
    encoderFor: {
        "&Type": _encode_Guide,
    },
    "&ldapDesc": "Guide" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_guide /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_searchGuide
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-searchGuide                         OBJECT IDENTIFIER ::= {id-at 14}
 * ```
 *
 * @constant
 */
export const id_at_searchGuide: OBJECT_IDENTIFIER = new _OID([14], id_at);

/**
 * @summary searchGuide
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * searchGuide ATTRIBUTE ::= {
 *   WITH SYNTAX              Guide
 *   LDAP-SYNTAX              guide.&id
 *   LDAP-NAME                {"searchGuide"}
 *   ID                       id-at-searchGuide }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const searchGuide: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Guide,
    },
    encoderFor: {
        "&Type": _encode_Guide,
    },
    "&ldapSyntax": guide["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_searchGuide /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary EnhancedGuide_subset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnhancedGuide-subset ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EnhancedGuide_subset = INTEGER;
/**
 * @summary EnhancedGuide_subset_baseObject
 * @constant
 * @type {number}
 */
export const EnhancedGuide_subset_baseObject: EnhancedGuide_subset = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary EnhancedGuide_subset_oneLevel
 * @constant
 * @type {number}
 */
export const EnhancedGuide_subset_oneLevel: EnhancedGuide_subset = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary EnhancedGuide_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export const EnhancedGuide_subset_wholeSubtree: EnhancedGuide_subset = 2; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_EnhancedGuide_subset: $.ASN1Decoder<
    EnhancedGuide_subset
> | null = null;
let _cached_encoder_for_EnhancedGuide_subset: $.ASN1Encoder<
    EnhancedGuide_subset
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EnhancedGuide_subset
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnhancedGuide_subset} The decoded data structure.
 */
export function _decode_EnhancedGuide_subset(el: _Element) {
    if (!_cached_decoder_for_EnhancedGuide_subset) {
        _cached_decoder_for_EnhancedGuide_subset = $._decodeInteger;
    }
    return _cached_decoder_for_EnhancedGuide_subset(el);
}
/**
 * @summary Encodes a(n) EnhancedGuide_subset into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnhancedGuide_subset, encoded as an ASN.1 Element.
 */
export function _encode_EnhancedGuide_subset(
    value: EnhancedGuide_subset,
    elGetter: $.ASN1Encoder<EnhancedGuide_subset>
) {
    if (!_cached_encoder_for_EnhancedGuide_subset) {
        _cached_encoder_for_EnhancedGuide_subset = $._encodeInteger;
    }
    return _cached_encoder_for_EnhancedGuide_subset(value, elGetter);
}

/**
 * @summary EnhancedGuide
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnhancedGuide ::= SEQUENCE {
 *   objectClass  [0]  OBJECT-CLASS.&id,
 *   criteria     [1]  Criteria,
 *   subset       [2]  INTEGER {
 *     baseObject   (0),
 *     oneLevel     (1),
 *     wholeSubtree (2)} DEFAULT oneLevel,
 *   ... }
 * ```
 *
 * @class
 */
export class EnhancedGuide {
    constructor(
        /**
         * @summary `objectClass`.
         * @public
         * @readonly
         */
        readonly objectClass: OBJECT_IDENTIFIER,
        /**
         * @summary `criteria`.
         * @public
         * @readonly
         */
        readonly criteria: Criteria,
        /**
         * @summary `subset`.
         * @public
         * @readonly
         */
        readonly subset: OPTIONAL<EnhancedGuide_subset>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EnhancedGuide
     * @description
     *
     * This takes an `object` and converts it to a `EnhancedGuide`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EnhancedGuide`.
     * @returns {EnhancedGuide}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof EnhancedGuide]: EnhancedGuide[_K] }>
    ): EnhancedGuide {
        return new EnhancedGuide(
            _o.objectClass,
            _o.criteria,
            _o.subset,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `subset`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_subset() {
        return EnhancedGuide_subset_oneLevel;
    }
}
/**
 * @summary The Leading Root Component Types of EnhancedGuide
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EnhancedGuide: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "objectClass",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "criteria",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subset",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of EnhancedGuide
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EnhancedGuide: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of EnhancedGuide
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EnhancedGuide: $.ComponentSpec[] = [];
let _cached_decoder_for_EnhancedGuide: $.ASN1Decoder<
    EnhancedGuide
> | null = null;
let _cached_encoder_for_EnhancedGuide: $.ASN1Encoder<
    EnhancedGuide
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EnhancedGuide
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnhancedGuide} The decoded data structure.
 */
export function _decode_EnhancedGuide(el: _Element) {
    if (!_cached_decoder_for_EnhancedGuide) {
        _cached_decoder_for_EnhancedGuide = function (
            el: _Element
        ): EnhancedGuide {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let objectClass!: OBJECT_IDENTIFIER;
            let criteria!: Criteria;
            let subset: OPTIONAL<EnhancedGuide_subset> =
                EnhancedGuide._default_value_for_subset;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                objectClass: (_el: _Element): void => {
                    objectClass = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                criteria: (_el: _Element): void => {
                    criteria = $._decode_explicit<Criteria>(
                        () => _decode_Criteria
                    )(_el);
                },
                subset: (_el: _Element): void => {
                    subset = $._decode_explicit<EnhancedGuide_subset>(
                        () => _decode_EnhancedGuide_subset
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EnhancedGuide,
                _extension_additions_list_spec_for_EnhancedGuide,
                _root_component_type_list_2_spec_for_EnhancedGuide,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EnhancedGuide(
                /* SEQUENCE_CONSTRUCTOR_CALL */ objectClass,
                criteria,
                subset,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_EnhancedGuide(el);
}
/**
 * @summary Encodes a(n) EnhancedGuide into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnhancedGuide, encoded as an ASN.1 Element.
 */
export function _encode_EnhancedGuide(
    value: EnhancedGuide,
    elGetter: $.ASN1Encoder<EnhancedGuide>
) {
    if (!_cached_encoder_for_EnhancedGuide) {
        _cached_encoder_for_EnhancedGuide = function (
            value: EnhancedGuide,
            elGetter: $.ASN1Encoder<EnhancedGuide>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => $._encodeObjectIdentifier,
                                $.BER
                            )(value.objectClass, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_Criteria,
                                $.BER
                            )(value.criteria, $.BER),
                            /* IF_DEFAULT */ value.subset === undefined ||
                            $.deepEq(
                                value.subset,
                                EnhancedGuide._default_value_for_subset
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_EnhancedGuide_subset,
                                      $.BER
                                  )(value.subset, $.BER),
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
    return _cached_encoder_for_EnhancedGuide(value, elGetter);
}

/**
 * @summary id_lsx_enhancedGuide
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-enhancedGuide                      OBJECT IDENTIFIER ::= {id-lsx 21}
 * ```
 *
 * @constant
 */
export const id_lsx_enhancedGuide: OBJECT_IDENTIFIER = new _OID([21], id_lsx);

/**
 * @summary enhancedGuide
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * enhancedGuide SYNTAX-NAME ::= {
 *   LDAP-DESC         "Enhanced Guide"
 *   DIRECTORY SYNTAX  EnhancedGuide
 *   ID                id-lsx-enhancedGuide }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const enhancedGuide: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_EnhancedGuide,
    },
    encoderFor: {
        "&Type": _encode_EnhancedGuide,
    },
    "&ldapDesc": "Enhanced Guide" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_enhancedGuide /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_enhancedSearchGuide
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-enhancedSearchGuide                 OBJECT IDENTIFIER ::= {id-at 47}
 * ```
 *
 * @constant
 */
export const id_at_enhancedSearchGuide: OBJECT_IDENTIFIER = new _OID(
    [47],
    id_at
);

/**
 * @summary enhancedSearchGuide
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * enhancedSearchGuide ATTRIBUTE ::= {
 *   WITH SYNTAX              EnhancedGuide
 *   LDAP-SYNTAX              enhancedGuide.&id
 *   LDAP-NAME                {"enhancedSearchGuide"}
 *   ID                       id-at-enhancedSearchGuide }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const enhancedSearchGuide: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_EnhancedGuide,
    },
    encoderFor: {
        "&Type": _encode_EnhancedGuide,
    },
    "&ldapSyntax": enhancedGuide["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_enhancedSearchGuide /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_businessCategory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-businessCategory                    OBJECT IDENTIFIER ::= {id-at 15}
 * ```
 *
 * @constant
 */
export const id_at_businessCategory: OBJECT_IDENTIFIER = new _OID([15], id_at);

/**
 * @summary businessCategory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * businessCategory ATTRIBUTE ::= {
 *   WITH SYNTAX              UnboundedDirectoryString
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"businessCategory"}
 *   ID                       id-at-businessCategory }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const businessCategory: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_businessCategory /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type PostalAddress<> = UnboundedDirectoryString[]; // SequenceOfType
let _cached_decoder_for_PostalAddress: $.ASN1Decoder<
    PostalAddress
> | null = null;
let _cached_encoder_for_PostalAddress: $.ASN1Encoder<
    PostalAddress
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PostalAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PostalAddress} The decoded data structure.
 */
export function _decode_PostalAddress(el: _Element) {
    if (!_cached_decoder_for_PostalAddress) {
        _cached_decoder_for_PostalAddress = $._decodeSequenceOf<
            UnboundedDirectoryString
        >(() => _decode_UnboundedDirectoryString);
    }
    return _cached_decoder_for_PostalAddress(el);
}
/**
 * @summary Encodes a(n) PostalAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PostalAddress, encoded as an ASN.1 Element.
 */
export function _encode_PostalAddress(
    value: PostalAddress,
    elGetter: $.ASN1Encoder<PostalAddress>
) {
    if (!_cached_encoder_for_PostalAddress) {
        _cached_encoder_for_PostalAddress = $._encodeSequenceOf<
            UnboundedDirectoryString
        >(() => _encode_UnboundedDirectoryString, $.BER);
    }
    return _cached_encoder_for_PostalAddress(value, elGetter);
}

export type CaseIgnoreList<> = UnboundedDirectoryString[]; // SequenceOfType
let _cached_decoder_for_CaseIgnoreList: $.ASN1Decoder<
    CaseIgnoreList
> | null = null;
let _cached_encoder_for_CaseIgnoreList: $.ASN1Encoder<
    CaseIgnoreList
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CaseIgnoreList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CaseIgnoreList} The decoded data structure.
 */
export function _decode_CaseIgnoreList(el: _Element) {
    if (!_cached_decoder_for_CaseIgnoreList) {
        _cached_decoder_for_CaseIgnoreList = $._decodeSequenceOf<
            UnboundedDirectoryString
        >(() => _decode_UnboundedDirectoryString);
    }
    return _cached_decoder_for_CaseIgnoreList(el);
}
/**
 * @summary Encodes a(n) CaseIgnoreList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CaseIgnoreList, encoded as an ASN.1 Element.
 */
export function _encode_CaseIgnoreList(
    value: CaseIgnoreList,
    elGetter: $.ASN1Encoder<CaseIgnoreList>
) {
    if (!_cached_encoder_for_CaseIgnoreList) {
        _cached_encoder_for_CaseIgnoreList = $._encodeSequenceOf<
            UnboundedDirectoryString
        >(() => _encode_UnboundedDirectoryString, $.BER);
    }
    return _cached_encoder_for_CaseIgnoreList(value, elGetter);
}

/**
 * @summary id_lsx_postalAddr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-postalAddr                         OBJECT IDENTIFIER ::= {id-lsx 41}
 * ```
 *
 * @constant
 */
export const id_lsx_postalAddr: OBJECT_IDENTIFIER = new _OID([41], id_lsx);

/**
 * @summary postalAddr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * postalAddr SYNTAX-NAME ::= {
 *   LDAP-DESC         "Postal Address"
 *   DIRECTORY SYNTAX  PostalAddress
 *   ID                id-lsx-postalAddr }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const postalAddr: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_PostalAddress,
    },
    encoderFor: {
        "&Type": _encode_PostalAddress,
    },
    "&ldapDesc": "Postal Address" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_postalAddr /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_caseIgnoreListMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-caseIgnoreListMatch                 OBJECT IDENTIFIER ::= {id-mr 11}
 * ```
 *
 * @constant
 */
export const id_mr_caseIgnoreListMatch: OBJECT_IDENTIFIER = new _OID(
    [11],
    id_mr
);

/**
 * @summary caseIgnoreListMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseIgnoreListMatch MATCHING-RULE ::= {
 *   SYNTAX       CaseIgnoreList
 *   LDAP-SYNTAX  postalAddr.&id
 *   LDAP-NAME    {"caseIgnoreListMatch"}
 *   ID           id-mr-caseIgnoreListMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const caseIgnoreListMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CaseIgnoreList,
    },
    encoderFor: {
        "&AssertionType": _encode_CaseIgnoreList,
    },
    "&ldapSyntax": postalAddr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_caseIgnoreListMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_caseIgnoreListSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-caseIgnoreListSubstringsMatch       OBJECT IDENTIFIER ::= {id-mr 12}
 * ```
 *
 * @constant
 */
export const id_mr_caseIgnoreListSubstringsMatch: OBJECT_IDENTIFIER = new _OID(
    [12],
    id_mr
);

/**
 * @summary caseIgnoreListSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseIgnoreListSubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion
 *   LDAP-SYNTAX  substringAssertion.&id
 *   LDAP-NAME    {"caseIgnoreListSubstringsMatch"}
 *   ID           id-mr-caseIgnoreListSubstringsMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const caseIgnoreListSubstringsMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_SubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_SubstringAssertion,
    },
    "&ldapSyntax": substringAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_caseIgnoreListSubstringsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_postalAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-postalAddress                       OBJECT IDENTIFIER ::= {id-at 16}
 * ```
 *
 * @constant
 */
export const id_at_postalAddress: OBJECT_IDENTIFIER = new _OID([16], id_at);

/**
 * @summary postalAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * postalAddress ATTRIBUTE ::= {
 *   WITH SYNTAX              PostalAddress
 *   EQUALITY MATCHING RULE   caseIgnoreListMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreListSubstringsMatch
 *   LDAP-SYNTAX              postalAddr.&id
 *   LDAP-NAME                {"postalAddress"}
 *   ID                       id-at-postalAddress }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const postalAddress: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PostalAddress,
    },
    encoderFor: {
        "&Type": _encode_PostalAddress,
    },
    "&equality-match": caseIgnoreListMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreListSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": postalAddr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_postalAddress /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_collectivePostalAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-collectivePostalAddress             OBJECT IDENTIFIER ::= {id-at 16 1}
 * ```
 *
 * @constant
 */
export const id_at_collectivePostalAddress: OBJECT_IDENTIFIER = new _OID(
    [16, 1],
    id_at
);

/**
 * @summary collectivePostalAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectivePostalAddress ATTRIBUTE ::= {
 *   SUBTYPE OF               postalAddress
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              postalAddr.&id
 *   LDAP-NAME                {"c-PostalAddress"}
 *   ID                       id-at-collectivePostalAddress }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectivePostalAddress: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": postalAddress /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": postalAddr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectivePostalAddress /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_postalCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-postalCode                          OBJECT IDENTIFIER ::= {id-at 17}
 * ```
 *
 * @constant
 */
export const id_at_postalCode: OBJECT_IDENTIFIER = new _OID([17], id_at);

/**
 * @summary postalCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * postalCode ATTRIBUTE ::= {
 *   WITH SYNTAX              UnboundedDirectoryString
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"postalCode"}
 *   ID                       id-at-postalCode }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const postalCode: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_postalCode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_collectivePostalCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-collectivePostalCode                OBJECT IDENTIFIER ::= {id-at 17 1}
 * ```
 *
 * @constant
 */
export const id_at_collectivePostalCode: OBJECT_IDENTIFIER = new _OID(
    [17, 1],
    id_at
);

/**
 * @summary collectivePostalCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectivePostalCode ATTRIBUTE ::= {
 *   SUBTYPE OF               postalCode
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"c-PostalCode"}
 *   ID                       id-at-collectivePostalCode }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectivePostalCode: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": postalCode /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectivePostalCode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_postOfficeBox
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-postOfficeBox                       OBJECT IDENTIFIER ::= {id-at 18}
 * ```
 *
 * @constant
 */
export const id_at_postOfficeBox: OBJECT_IDENTIFIER = new _OID([18], id_at);

/**
 * @summary postOfficeBox
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * postOfficeBox ATTRIBUTE ::= {
 *   WITH SYNTAX              UnboundedDirectoryString
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"postOfficeBox"}
 *   ID                       id-at-postOfficeBox }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const postOfficeBox: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_postOfficeBox /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_collectivePostOfficeBox
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-collectivePostOfficeBox             OBJECT IDENTIFIER ::= {id-at 18 1}
 * ```
 *
 * @constant
 */
export const id_at_collectivePostOfficeBox: OBJECT_IDENTIFIER = new _OID(
    [18, 1],
    id_at
);

/**
 * @summary collectivePostOfficeBox
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectivePostOfficeBox ATTRIBUTE ::= {
 *   SUBTYPE OF               postOfficeBox
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"c-PostOfficeBox"}
 *   ID                       id-at-collectivePostOfficeBox }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectivePostOfficeBox: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": postOfficeBox /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectivePostOfficeBox /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_physicalDeliveryOfficeName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-physicalDeliveryOfficeName          OBJECT IDENTIFIER ::= {id-at 19}
 * ```
 *
 * @constant
 */
export const id_at_physicalDeliveryOfficeName: OBJECT_IDENTIFIER = new _OID(
    [19],
    id_at
);

/**
 * @summary physicalDeliveryOfficeName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physicalDeliveryOfficeName ATTRIBUTE ::= {
 *   WITH SYNTAX              UnboundedDirectoryString
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"physicalDeliveryOfficeName"}
 *   ID                       id-at-physicalDeliveryOfficeName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const physicalDeliveryOfficeName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_physicalDeliveryOfficeName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_collectivePhysicalDeliveryOfficeName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-collectivePhysicalDeliveryOfficeName
 *                                           OBJECT IDENTIFIER ::= {id-at 19 1}
 * ```
 *
 * @constant
 */
export const id_at_collectivePhysicalDeliveryOfficeName: OBJECT_IDENTIFIER = new _OID(
    [19, 1],
    id_at
);

/**
 * @summary collectivePhysicalDeliveryOfficeName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectivePhysicalDeliveryOfficeName ATTRIBUTE ::= {
 *   SUBTYPE OF               physicalDeliveryOfficeName
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"c-PhysicalDeliveryOfficeName"}
 *   ID                       id-at-collectivePhysicalDeliveryOfficeName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectivePhysicalDeliveryOfficeName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": physicalDeliveryOfficeName /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectivePhysicalDeliveryOfficeName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary ub_telephone_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-telephone-number INTEGER ::= 32
 * ```
 *
 * @constant
 */
export const ub_telephone_number: INTEGER = 32;

export type TelephoneNumber<> = PrintableString; // PrintableString
let _cached_decoder_for_TelephoneNumber: $.ASN1Decoder<
    TelephoneNumber
> | null = null;
let _cached_encoder_for_TelephoneNumber: $.ASN1Encoder<
    TelephoneNumber
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TelephoneNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TelephoneNumber} The decoded data structure.
 */
export function _decode_TelephoneNumber(el: _Element) {
    if (!_cached_decoder_for_TelephoneNumber) {
        _cached_decoder_for_TelephoneNumber = $._decodePrintableString;
    }
    return _cached_decoder_for_TelephoneNumber(el);
}
/**
 * @summary Encodes a(n) TelephoneNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TelephoneNumber, encoded as an ASN.1 Element.
 */
export function _encode_TelephoneNumber(
    value: TelephoneNumber,
    elGetter: $.ASN1Encoder<TelephoneNumber>
) {
    if (!_cached_encoder_for_TelephoneNumber) {
        _cached_encoder_for_TelephoneNumber = $._encodePrintableString;
    }
    return _cached_encoder_for_TelephoneNumber(value, elGetter);
}

/**
 * @summary id_lsx_telephoneNr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-telephoneNr                        OBJECT IDENTIFIER ::= {id-lsx 50}
 * ```
 *
 * @constant
 */
export const id_lsx_telephoneNr: OBJECT_IDENTIFIER = new _OID([50], id_lsx);

/**
 * @summary telephoneNr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * telephoneNr SYNTAX-NAME ::= {
 *   LDAP-DESC         "Telephone Number"
 *   DIRECTORY SYNTAX  TelephoneNumber
 *   ID                id-lsx-telephoneNr }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const telephoneNr: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_TelephoneNumber,
    },
    encoderFor: {
        "&Type": _encode_TelephoneNumber,
    },
    "&ldapDesc": "Telephone Number" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_telephoneNr /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_telephoneNumberMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-telephoneNumberMatch                OBJECT IDENTIFIER ::= {id-mr 20}
 * ```
 *
 * @constant
 */
export const id_mr_telephoneNumberMatch: OBJECT_IDENTIFIER = new _OID(
    [20],
    id_mr
);

/**
 * @summary telephoneNumberMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * telephoneNumberMatch MATCHING-RULE ::= {
 *   SYNTAX       TelephoneNumber
 *   LDAP-SYNTAX  telephoneNr.&id
 *   LDAP-NAME    {"telephoneNumberMatch"}
 *   ID           id-mr-telephoneNumberMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const telephoneNumberMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_TelephoneNumber,
    },
    encoderFor: {
        "&AssertionType": _encode_TelephoneNumber,
    },
    "&ldapSyntax": telephoneNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_telephoneNumberMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_telephoneNumberSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-telephoneNumberSubstringsMatch      OBJECT IDENTIFIER ::= {id-mr 21}
 * ```
 *
 * @constant
 */
export const id_mr_telephoneNumberSubstringsMatch: OBJECT_IDENTIFIER = new _OID(
    [21],
    id_mr
);

/**
 * @summary telephoneNumberSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * telephoneNumberSubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion
 *   LDAP-SYNTAX  substringAssertion.&id
 *   LDAP-NAME    {"telephoneNumberSubstringsMatch"}
 *   ID           id-mr-telephoneNumberSubstringsMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const telephoneNumberSubstringsMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_SubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_SubstringAssertion,
    },
    "&ldapSyntax": substringAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_telephoneNumberSubstringsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_telephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-telephoneNumber                     OBJECT IDENTIFIER ::= {id-at 20}
 * ```
 *
 * @constant
 */
export const id_at_telephoneNumber: OBJECT_IDENTIFIER = new _OID([20], id_at);

/**
 * @summary telephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * telephoneNumber ATTRIBUTE ::= {
 *   WITH SYNTAX              TelephoneNumber
 *   EQUALITY MATCHING RULE   telephoneNumberMatch
 *   SUBSTRINGS MATCHING RULE telephoneNumberSubstringsMatch
 *   LDAP-SYNTAX              printableString.&id
 *   LDAP-NAME                {"telephoneNumber"}
 *   ID                       id-at-telephoneNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const telephoneNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TelephoneNumber,
    },
    encoderFor: {
        "&Type": _encode_TelephoneNumber,
    },
    "&equality-match": telephoneNumberMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": telephoneNumberSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_telephoneNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_collectiveTelephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-collectiveTelephoneNumber           OBJECT IDENTIFIER ::= {id-at 20 1}
 * ```
 *
 * @constant
 */
export const id_at_collectiveTelephoneNumber: OBJECT_IDENTIFIER = new _OID(
    [20, 1],
    id_at
);

/**
 * @summary collectiveTelephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveTelephoneNumber ATTRIBUTE ::= {
 *   SUBTYPE OF               telephoneNumber
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              printableString.&id
 *   LDAP-NAME                {"c-TelephoneNumber"}
 *   ID                       id-at-collectiveTelephoneNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectiveTelephoneNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": telephoneNumber /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectiveTelephoneNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary ub_telex_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-telex-number INTEGER ::= 14
 * ```
 *
 * @constant
 */
export const ub_telex_number: INTEGER = 14;

/**
 * @summary ub_country_code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-country-code INTEGER ::= 4
 * ```
 *
 * @constant
 */
export const ub_country_code: INTEGER = 4;

/**
 * @summary ub_answerback
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-answerback   INTEGER ::= 8
 * ```
 *
 * @constant
 */
export const ub_answerback: INTEGER = 8;

/**
 * @summary TelexNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TelexNumber ::= SEQUENCE {
 *   telexNumber  PrintableString(SIZE (1..ub-telex-number)),
 *   countryCode  PrintableString(SIZE (1..ub-country-code)),
 *   answerback   PrintableString(SIZE (1..ub-answerback)),
 *   ... }
 * ```
 *
 * @class
 */
export class TelexNumber {
    constructor(
        /**
         * @summary `telexNumber`.
         * @public
         * @readonly
         */
        readonly telexNumber: PrintableString,
        /**
         * @summary `countryCode`.
         * @public
         * @readonly
         */
        readonly countryCode: PrintableString,
        /**
         * @summary `answerback`.
         * @public
         * @readonly
         */
        readonly answerback: PrintableString,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TelexNumber
     * @description
     *
     * This takes an `object` and converts it to a `TelexNumber`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TelexNumber`.
     * @returns {TelexNumber}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TelexNumber]: TelexNumber[_K] }>
    ): TelexNumber {
        return new TelexNumber(
            _o.telexNumber,
            _o.countryCode,
            _o.answerback,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of TelexNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TelexNumber: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "telexNumber",
        false,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "countryCode",
        false,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "answerback",
        false,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TelexNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TelexNumber: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TelexNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TelexNumber: $.ComponentSpec[] = [];
let _cached_decoder_for_TelexNumber: $.ASN1Decoder<TelexNumber> | null = null;
let _cached_encoder_for_TelexNumber: $.ASN1Encoder<TelexNumber> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TelexNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TelexNumber} The decoded data structure.
 */
export function _decode_TelexNumber(el: _Element) {
    if (!_cached_decoder_for_TelexNumber) {
        _cached_decoder_for_TelexNumber = function (el: _Element): TelexNumber {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "TelexNumber contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "telexNumber";
            sequence[1].name = "countryCode";
            sequence[2].name = "answerback";
            let telexNumber!: PrintableString;
            let countryCode!: PrintableString;
            let answerback!: PrintableString;
            telexNumber = $._decodePrintableString(sequence[0]);
            countryCode = $._decodePrintableString(sequence[1]);
            answerback = $._decodePrintableString(sequence[2]);
            return new TelexNumber(
                telexNumber,
                countryCode,
                answerback,
                sequence.slice(3)
            );
        };
    }
    return _cached_decoder_for_TelexNumber(el);
}
/**
 * @summary Encodes a(n) TelexNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TelexNumber, encoded as an ASN.1 Element.
 */
export function _encode_TelexNumber(
    value: TelexNumber,
    elGetter: $.ASN1Encoder<TelexNumber>
) {
    if (!_cached_encoder_for_TelexNumber) {
        _cached_encoder_for_TelexNumber = function (
            value: TelexNumber,
            elGetter: $.ASN1Encoder<TelexNumber>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodePrintableString(
                                value.telexNumber,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodePrintableString(
                                value.countryCode,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodePrintableString(
                                value.answerback,
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
    return _cached_encoder_for_TelexNumber(value, elGetter);
}

/**
 * @summary id_lsx_telexNr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-telexNr                            OBJECT IDENTIFIER ::= {id-lsx 52}
 * ```
 *
 * @constant
 */
export const id_lsx_telexNr: OBJECT_IDENTIFIER = new _OID([52], id_lsx);

/**
 * @summary telexNr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * telexNr SYNTAX-NAME ::= {
 *   LDAP-DESC         "Telex Number"
 *   DIRECTORY SYNTAX  TelexNumber
 *   ID                id-lsx-telexNr }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const telexNr: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_TelexNumber,
    },
    encoderFor: {
        "&Type": _encode_TelexNumber,
    },
    "&ldapDesc": "Telex Number" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_telexNr /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_telexNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-telexNumber                         OBJECT IDENTIFIER ::= {id-at 21}
 * ```
 *
 * @constant
 */
export const id_at_telexNumber: OBJECT_IDENTIFIER = new _OID([21], id_at);

/**
 * @summary telexNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * telexNumber ATTRIBUTE ::= {
 *   WITH SYNTAX              TelexNumber
 *   LDAP-SYNTAX              telexNr.&id
 *   LDAP-NAME                {"telexNumber"}
 *   ID                       id-at-telexNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const telexNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TelexNumber,
    },
    encoderFor: {
        "&Type": _encode_TelexNumber,
    },
    "&ldapSyntax": telexNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_telexNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_collectiveTelexNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-collectiveTelexNumber               OBJECT IDENTIFIER ::= {id-at 21 1}
 * ```
 *
 * @constant
 */
export const id_at_collectiveTelexNumber: OBJECT_IDENTIFIER = new _OID(
    [21, 1],
    id_at
);

/**
 * @summary collectiveTelexNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveTelexNumber ATTRIBUTE ::= {
 *   SUBTYPE OF               telexNumber
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              telexNr.&id
 *   LDAP-NAME                {"c-TelexNumber"}
 *   ID                       id-at-collectiveTelexNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectiveTelexNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": telexNumber /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": telexNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectiveTelexNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary FacsimileTelephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FacsimileTelephoneNumber ::= SEQUENCE {
 *   telephoneNumber  TelephoneNumber,
 *   parameters       G3FacsimileNonBasicParameters OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class FacsimileTelephoneNumber {
    constructor(
        /**
         * @summary `telephoneNumber`.
         * @public
         * @readonly
         */
        readonly telephoneNumber: TelephoneNumber,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<G3FacsimileNonBasicParameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a FacsimileTelephoneNumber
     * @description
     *
     * This takes an `object` and converts it to a `FacsimileTelephoneNumber`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FacsimileTelephoneNumber`.
     * @returns {FacsimileTelephoneNumber}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof FacsimileTelephoneNumber]: FacsimileTelephoneNumber[_K];
            }
        >
    ): FacsimileTelephoneNumber {
        return new FacsimileTelephoneNumber(
            _o.telephoneNumber,
            _o.parameters,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of FacsimileTelephoneNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FacsimileTelephoneNumber: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "telephoneNumber",
        false,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "parameters",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of FacsimileTelephoneNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FacsimileTelephoneNumber: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of FacsimileTelephoneNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FacsimileTelephoneNumber: $.ComponentSpec[] = [];
let _cached_decoder_for_FacsimileTelephoneNumber: $.ASN1Decoder<
    FacsimileTelephoneNumber
> | null = null;
let _cached_encoder_for_FacsimileTelephoneNumber: $.ASN1Encoder<
    FacsimileTelephoneNumber
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) FacsimileTelephoneNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FacsimileTelephoneNumber} The decoded data structure.
 */
export function _decode_FacsimileTelephoneNumber(el: _Element) {
    if (!_cached_decoder_for_FacsimileTelephoneNumber) {
        _cached_decoder_for_FacsimileTelephoneNumber = function (
            el: _Element
        ): FacsimileTelephoneNumber {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let telephoneNumber!: TelephoneNumber;
            let parameters: OPTIONAL<G3FacsimileNonBasicParameters>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                telephoneNumber: (_el: _Element): void => {
                    telephoneNumber = _decode_TelephoneNumber(_el);
                },
                parameters: (_el: _Element): void => {
                    parameters = _decode_G3FacsimileNonBasicParameters(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FacsimileTelephoneNumber,
                _extension_additions_list_spec_for_FacsimileTelephoneNumber,
                _root_component_type_list_2_spec_for_FacsimileTelephoneNumber,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new FacsimileTelephoneNumber(
                /* SEQUENCE_CONSTRUCTOR_CALL */ telephoneNumber,
                parameters,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_FacsimileTelephoneNumber(el);
}
/**
 * @summary Encodes a(n) FacsimileTelephoneNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FacsimileTelephoneNumber, encoded as an ASN.1 Element.
 */
export function _encode_FacsimileTelephoneNumber(
    value: FacsimileTelephoneNumber,
    elGetter: $.ASN1Encoder<FacsimileTelephoneNumber>
) {
    if (!_cached_encoder_for_FacsimileTelephoneNumber) {
        _cached_encoder_for_FacsimileTelephoneNumber = function (
            value: FacsimileTelephoneNumber,
            elGetter: $.ASN1Encoder<FacsimileTelephoneNumber>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_TelephoneNumber(
                                value.telephoneNumber,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.parameters === undefined
                                ? undefined
                                : _encode_G3FacsimileNonBasicParameters(
                                      value.parameters,
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
    return _cached_encoder_for_FacsimileTelephoneNumber(value, elGetter);
}

/**
 * @summary id_mr_facsimileNumberMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-facsimileNumberMatch                OBJECT IDENTIFIER ::= {id-mr 63}
 * ```
 *
 * @constant
 */
export const id_mr_facsimileNumberMatch: OBJECT_IDENTIFIER = new _OID(
    [63],
    id_mr
);

/**
 * @summary facsimileNumberMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * facsimileNumberMatch MATCHING-RULE ::= {
 *   SYNTAX       TelephoneNumber
 *   ID           id-mr-facsimileNumberMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const facsimileNumberMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_TelephoneNumber,
    },
    encoderFor: {
        "&AssertionType": _encode_TelephoneNumber,
    },
    "&id": id_mr_facsimileNumberMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_facsimileNumberSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-facsimileNumberSubstringsMatch      OBJECT IDENTIFIER ::= {id-mr 64}
 * ```
 *
 * @constant
 */
export const id_mr_facsimileNumberSubstringsMatch: OBJECT_IDENTIFIER = new _OID(
    [64],
    id_mr
);

/**
 * @summary facsimileNumberSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * facsimileNumberSubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion
 *   ID           id-mr-facsimileNumberSubstringsMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const facsimileNumberSubstringsMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_SubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_SubstringAssertion,
    },
    "&id": id_mr_facsimileNumberSubstringsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lsx_facsimileTelephoneNr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-facsimileTelephoneNr               OBJECT IDENTIFIER ::= {id-lsx 22}
 * ```
 *
 * @constant
 */
export const id_lsx_facsimileTelephoneNr: OBJECT_IDENTIFIER = new _OID(
    [22],
    id_lsx
);

/**
 * @summary facsimileTelephoneNr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * facsimileTelephoneNr SYNTAX-NAME ::= {
 *   LDAP-DESC         "Facsimile Telephone Number"
 *   DIRECTORY SYNTAX  FacsimileTelephoneNumber
 *   ID                id-lsx-facsimileTelephoneNr }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const facsimileTelephoneNr: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_FacsimileTelephoneNumber,
    },
    encoderFor: {
        "&Type": _encode_FacsimileTelephoneNumber,
    },
    "&ldapDesc": "Facsimile Telephone Number" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_facsimileTelephoneNr /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_facsimileTelephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-facsimileTelephoneNumber            OBJECT IDENTIFIER ::= {id-at 23}
 * ```
 *
 * @constant
 */
export const id_at_facsimileTelephoneNumber: OBJECT_IDENTIFIER = new _OID(
    [23],
    id_at
);

/**
 * @summary facsimileTelephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * facsimileTelephoneNumber ATTRIBUTE ::= {
 *   WITH SYNTAX              FacsimileTelephoneNumber
 *   EQUALITY MATCHING RULE   facsimileNumberMatch
 *   SUBSTRINGS MATCHING RULE facsimileNumberSubstringsMatch
 *   LDAP-SYNTAX              facsimileTelephoneNr.&id
 *   LDAP-NAME                {"facsimileTelephoneNumber"}
 *   ID                       id-at-facsimileTelephoneNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const facsimileTelephoneNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_FacsimileTelephoneNumber,
    },
    encoderFor: {
        "&Type": _encode_FacsimileTelephoneNumber,
    },
    "&equality-match": facsimileNumberMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": facsimileNumberSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": facsimileTelephoneNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_facsimileTelephoneNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_collectiveFacsimileTelephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-collectiveFacsimileTelephoneNumber  OBJECT IDENTIFIER ::= {id-at 23 1}
 * ```
 *
 * @constant
 */
export const id_at_collectiveFacsimileTelephoneNumber: OBJECT_IDENTIFIER = new _OID(
    [23, 1],
    id_at
);

/**
 * @summary collectiveFacsimileTelephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveFacsimileTelephoneNumber ATTRIBUTE ::= {
 *   SUBTYPE OF               facsimileTelephoneNumber
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              facsimileTelephoneNr.&id
 *   LDAP-NAME                {"c-FacsimileTelephoneNumber"}
 *   ID                       id-at-collectiveFacsimileTelephoneNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectiveFacsimileTelephoneNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": facsimileTelephoneNumber /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": facsimileTelephoneNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectiveFacsimileTelephoneNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type X121Address<> = NumericString; // NumericString
let _cached_decoder_for_X121Address: $.ASN1Decoder<X121Address> | null = null;
let _cached_encoder_for_X121Address: $.ASN1Encoder<X121Address> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) X121Address
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X121Address} The decoded data structure.
 */
export function _decode_X121Address(el: _Element) {
    if (!_cached_decoder_for_X121Address) {
        _cached_decoder_for_X121Address = $._decodeNumericString;
    }
    return _cached_decoder_for_X121Address(el);
}
/**
 * @summary Encodes a(n) X121Address into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X121Address, encoded as an ASN.1 Element.
 */
export function _encode_X121Address(
    value: X121Address,
    elGetter: $.ASN1Encoder<X121Address>
) {
    if (!_cached_encoder_for_X121Address) {
        _cached_encoder_for_X121Address = $._encodeNumericString;
    }
    return _cached_encoder_for_X121Address(value, elGetter);
}

/**
 * @summary id_lsx_numericString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-numericString                      OBJECT IDENTIFIER ::= {id-lsx 36}
 * ```
 *
 * @constant
 */
export const id_lsx_numericString: OBJECT_IDENTIFIER = new _OID([36], id_lsx);

/**
 * @summary numericString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * numericString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Numeric String"
 *   DIRECTORY SYNTAX  NumericString
 *   ID                id-lsx-numericString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const numericString: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeNumericString,
    },
    encoderFor: {
        "&Type": $._encodeNumericString,
    },
    "&ldapDesc": "Numeric String" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_numericString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_numericStringMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-numericStringMatch                  OBJECT IDENTIFIER ::= {id-mr 8}
 * ```
 *
 * @constant
 */
export const id_mr_numericStringMatch: OBJECT_IDENTIFIER = new _OID([8], id_mr);

/**
 * @summary numericStringMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * numericStringMatch MATCHING-RULE ::= {
 *   SYNTAX       NumericString
 *   LDAP-SYNTAX  numericString.&id
 *   LDAP-NAME    {"numericStringMatch"}
 *   ID           id-mr-numericStringMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const numericStringMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeNumericString,
    },
    encoderFor: {
        "&AssertionType": $._encodeNumericString,
    },
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_numericStringMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_numericStringSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-numericStringSubstringsMatch        OBJECT IDENTIFIER ::= {id-mr 10}
 * ```
 *
 * @constant
 */
export const id_mr_numericStringSubstringsMatch: OBJECT_IDENTIFIER = new _OID(
    [10],
    id_mr
);

/**
 * @summary numericStringSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * numericStringSubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion
 *   LDAP-SYNTAX  substringAssertion.&id
 *   LDAP-NAME    {"numericStringSubstringsMatch"}
 *   ID           id-mr-numericStringSubstringsMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const numericStringSubstringsMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_SubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_SubstringAssertion,
    },
    "&ldapSyntax": substringAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_numericStringSubstringsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_x121Address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-x121Address                         OBJECT IDENTIFIER ::= {id-at 24}
 * ```
 *
 * @constant
 */
export const id_at_x121Address: OBJECT_IDENTIFIER = new _OID([24], id_at);

/**
 * @summary x121Address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * x121Address ATTRIBUTE ::= {
 *   WITH SYNTAX              X121Address
 *   EQUALITY MATCHING RULE   numericStringMatch
 *   SUBSTRINGS MATCHING RULE numericStringSubstringsMatch
 *   LDAP-SYNTAX              numericString.&id
 *   LDAP-NAME                {"x121Address"}
 *   ID                       id-at-x121Address }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const x121Address: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_X121Address,
    },
    encoderFor: {
        "&Type": _encode_X121Address,
    },
    "&equality-match": numericStringMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": numericStringSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_x121Address /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary ub_x121_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-x121-address INTEGER ::= 15
 * ```
 *
 * @constant
 */
export const ub_x121_address: INTEGER = 15;

/**
 * @summary ub_international_isdn_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-international-isdn-number INTEGER ::= 16
 * ```
 *
 * @constant
 */
export const ub_international_isdn_number: INTEGER = 16;

export type InternationalISDNNumber<> = NumericString; // NumericString
let _cached_decoder_for_InternationalISDNNumber: $.ASN1Decoder<
    InternationalISDNNumber
> | null = null;
let _cached_encoder_for_InternationalISDNNumber: $.ASN1Encoder<
    InternationalISDNNumber
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) InternationalISDNNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InternationalISDNNumber} The decoded data structure.
 */
export function _decode_InternationalISDNNumber(el: _Element) {
    if (!_cached_decoder_for_InternationalISDNNumber) {
        _cached_decoder_for_InternationalISDNNumber = $._decodeNumericString;
    }
    return _cached_decoder_for_InternationalISDNNumber(el);
}
/**
 * @summary Encodes a(n) InternationalISDNNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InternationalISDNNumber, encoded as an ASN.1 Element.
 */
export function _encode_InternationalISDNNumber(
    value: InternationalISDNNumber,
    elGetter: $.ASN1Encoder<InternationalISDNNumber>
) {
    if (!_cached_encoder_for_InternationalISDNNumber) {
        _cached_encoder_for_InternationalISDNNumber = $._encodeNumericString;
    }
    return _cached_encoder_for_InternationalISDNNumber(value, elGetter);
}

/**
 * @summary id_at_internationalISDNNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-internationalISDNNumber             OBJECT IDENTIFIER ::= {id-at 25}
 * ```
 *
 * @constant
 */
export const id_at_internationalISDNNumber: OBJECT_IDENTIFIER = new _OID(
    [25],
    id_at
);

/**
 * @summary internationalISDNNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * internationalISDNNumber ATTRIBUTE ::= {
 *   WITH SYNTAX              InternationalISDNNumber
 *   EQUALITY MATCHING RULE   numericStringMatch
 *   SUBSTRINGS MATCHING RULE numericStringSubstringsMatch
 *   LDAP-SYNTAX              numericString.&id
 *   LDAP-NAME                {"internationalISDNNumber"}
 *   ID                       id-at-internationalISDNNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const internationalISDNNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_InternationalISDNNumber,
    },
    encoderFor: {
        "&Type": _encode_InternationalISDNNumber,
    },
    "&equality-match": numericStringMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": numericStringSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_internationalISDNNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_collectiveInternationalISDNNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-collectiveInternationalISDNNumber   OBJECT IDENTIFIER ::= {id-at 25 1}
 * ```
 *
 * @constant
 */
export const id_at_collectiveInternationalISDNNumber: OBJECT_IDENTIFIER = new _OID(
    [25, 1],
    id_at
);

/**
 * @summary collectiveInternationalISDNNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveInternationalISDNNumber ATTRIBUTE ::= {
 *   SUBTYPE OF               internationalISDNNumber
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              numericString.&id
 *   LDAP-NAME                {"c-InternationalISDNNumber"}
 *   ID                       id-at-collectiveInternationalISDNNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectiveInternationalISDNNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": internationalISDNNumber /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectiveInternationalISDNNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_registeredAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-registeredAddress                   OBJECT IDENTIFIER ::= {id-at 26}
 * ```
 *
 * @constant
 */
export const id_at_registeredAddress: OBJECT_IDENTIFIER = new _OID([26], id_at);

/**
 * @summary registeredAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * registeredAddress ATTRIBUTE ::= {
 *   SUBTYPE OF               postalAddress
 *   WITH SYNTAX              PostalAddress
 *   LDAP-SYNTAX              postalAddr.&id
 *   LDAP-NAME                {"registeredAddress"}
 *   ID                       id-at-registeredAddress }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const registeredAddress: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PostalAddress,
    },
    encoderFor: {
        "&Type": _encode_PostalAddress,
    },
    "&derivation": postalAddress /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": postalAddr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_registeredAddress /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type DestinationIndicator<> = PrintableString; // PrintableString
let _cached_decoder_for_DestinationIndicator: $.ASN1Decoder<
    DestinationIndicator
> | null = null;
let _cached_encoder_for_DestinationIndicator: $.ASN1Encoder<
    DestinationIndicator
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DestinationIndicator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DestinationIndicator} The decoded data structure.
 */
export function _decode_DestinationIndicator(el: _Element) {
    if (!_cached_decoder_for_DestinationIndicator) {
        _cached_decoder_for_DestinationIndicator = $._decodePrintableString;
    }
    return _cached_decoder_for_DestinationIndicator(el);
}
/**
 * @summary Encodes a(n) DestinationIndicator into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestinationIndicator, encoded as an ASN.1 Element.
 */
export function _encode_DestinationIndicator(
    value: DestinationIndicator,
    elGetter: $.ASN1Encoder<DestinationIndicator>
) {
    if (!_cached_encoder_for_DestinationIndicator) {
        _cached_encoder_for_DestinationIndicator = $._encodePrintableString;
    }
    return _cached_encoder_for_DestinationIndicator(value, elGetter);
}

/**
 * @summary id_at_destinationIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-destinationIndicator                OBJECT IDENTIFIER ::= {id-at 27}
 * ```
 *
 * @constant
 */
export const id_at_destinationIndicator: OBJECT_IDENTIFIER = new _OID(
    [27],
    id_at
);

/**
 * @summary destinationIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * destinationIndicator ATTRIBUTE ::= {
 *   WITH SYNTAX              DestinationIndicator
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX              printableString.&id
 *   LDAP-NAME                {"destinationIndicator"}
 *   ID                       id-at-destinationIndicator }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const destinationIndicator: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DestinationIndicator,
    },
    encoderFor: {
        "&Type": _encode_DestinationIndicator,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_destinationIndicator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type CommunicationsService<> = OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_CommunicationsService: $.ASN1Decoder<
    CommunicationsService
> | null = null;
let _cached_encoder_for_CommunicationsService: $.ASN1Encoder<
    CommunicationsService
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CommunicationsService
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommunicationsService} The decoded data structure.
 */
export function _decode_CommunicationsService(el: _Element) {
    if (!_cached_decoder_for_CommunicationsService) {
        _cached_decoder_for_CommunicationsService = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_CommunicationsService(el);
}
/**
 * @summary Encodes a(n) CommunicationsService into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommunicationsService, encoded as an ASN.1 Element.
 */
export function _encode_CommunicationsService(
    value: CommunicationsService,
    elGetter: $.ASN1Encoder<CommunicationsService>
) {
    if (!_cached_encoder_for_CommunicationsService) {
        _cached_encoder_for_CommunicationsService = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_CommunicationsService(value, elGetter);
}

/**
 * @summary id_at_communicationsService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-communicationsService               OBJECT IDENTIFIER ::= {id-at 66}
 * ```
 *
 * @constant
 */
export const id_at_communicationsService: OBJECT_IDENTIFIER = new _OID(
    [66],
    id_at
);

/**
 * @summary communicationsService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * communicationsService ATTRIBUTE ::= {
 *   WITH SYNTAX              CommunicationsService
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   LDAP-SYNTAX              oid.&id
 *   LDAP-NAME                {"communicationsService"}
 *   ID                       id-at-communicationsService }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const communicationsService: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CommunicationsService,
    },
    encoderFor: {
        "&Type": _encode_CommunicationsService,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_communicationsService /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type CommunicationsNetwork<> = OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_CommunicationsNetwork: $.ASN1Decoder<
    CommunicationsNetwork
> | null = null;
let _cached_encoder_for_CommunicationsNetwork: $.ASN1Encoder<
    CommunicationsNetwork
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CommunicationsNetwork
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommunicationsNetwork} The decoded data structure.
 */
export function _decode_CommunicationsNetwork(el: _Element) {
    if (!_cached_decoder_for_CommunicationsNetwork) {
        _cached_decoder_for_CommunicationsNetwork = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_CommunicationsNetwork(el);
}
/**
 * @summary Encodes a(n) CommunicationsNetwork into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommunicationsNetwork, encoded as an ASN.1 Element.
 */
export function _encode_CommunicationsNetwork(
    value: CommunicationsNetwork,
    elGetter: $.ASN1Encoder<CommunicationsNetwork>
) {
    if (!_cached_encoder_for_CommunicationsNetwork) {
        _cached_encoder_for_CommunicationsNetwork = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_CommunicationsNetwork(value, elGetter);
}

/**
 * @summary id_at_communicationsNetwork
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-communicationsNetwork               OBJECT IDENTIFIER ::= {id-at 67}
 * ```
 *
 * @constant
 */
export const id_at_communicationsNetwork: OBJECT_IDENTIFIER = new _OID(
    [67],
    id_at
);

/**
 * @summary communicationsNetwork
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * communicationsNetwork ATTRIBUTE ::= {
 *   WITH SYNTAX              CommunicationsNetwork
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              oid.&id
 *   LDAP-NAME                {"communicationsNetwork"}
 *   ID                       id-at-communicationsNetwork }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const communicationsNetwork: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CommunicationsNetwork,
    },
    encoderFor: {
        "&Type": _encode_CommunicationsNetwork,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_communicationsNetwork /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary PreferredDeliveryMethod_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PreferredDeliveryMethod-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PreferredDeliveryMethod_Item = INTEGER;
/**
 * @summary PreferredDeliveryMethod_Item_any_delivery_method
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_any_delivery_method: PreferredDeliveryMethod_Item = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary PreferredDeliveryMethod_Item_mhs_delivery
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_mhs_delivery: PreferredDeliveryMethod_Item = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary PreferredDeliveryMethod_Item_physical_delivery
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_physical_delivery: PreferredDeliveryMethod_Item = 2; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary PreferredDeliveryMethod_Item_telex_delivery
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_telex_delivery: PreferredDeliveryMethod_Item = 3; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary PreferredDeliveryMethod_Item_teletex_delivery
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_teletex_delivery: PreferredDeliveryMethod_Item = 4; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary PreferredDeliveryMethod_Item_g3_facsimile_delivery
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_g3_facsimile_delivery: PreferredDeliveryMethod_Item = 5; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary PreferredDeliveryMethod_Item_g4_facsimile_delivery
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_g4_facsimile_delivery: PreferredDeliveryMethod_Item = 6; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary PreferredDeliveryMethod_Item_ia5_terminal_delivery
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_ia5_terminal_delivery: PreferredDeliveryMethod_Item = 7; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary PreferredDeliveryMethod_Item_videotex_delivery
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_videotex_delivery: PreferredDeliveryMethod_Item = 8; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary PreferredDeliveryMethod_Item_telephone_delivery
 * @constant
 * @type {number}
 */
export const PreferredDeliveryMethod_Item_telephone_delivery: PreferredDeliveryMethod_Item = 9; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_PreferredDeliveryMethod_Item: $.ASN1Decoder<
    PreferredDeliveryMethod_Item
> | null = null;
let _cached_encoder_for_PreferredDeliveryMethod_Item: $.ASN1Encoder<
    PreferredDeliveryMethod_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PreferredDeliveryMethod_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PreferredDeliveryMethod_Item} The decoded data structure.
 */
export function _decode_PreferredDeliveryMethod_Item(el: _Element) {
    if (!_cached_decoder_for_PreferredDeliveryMethod_Item) {
        _cached_decoder_for_PreferredDeliveryMethod_Item = $._decodeInteger;
    }
    return _cached_decoder_for_PreferredDeliveryMethod_Item(el);
}
/**
 * @summary Encodes a(n) PreferredDeliveryMethod_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PreferredDeliveryMethod_Item, encoded as an ASN.1 Element.
 */
export function _encode_PreferredDeliveryMethod_Item(
    value: PreferredDeliveryMethod_Item,
    elGetter: $.ASN1Encoder<PreferredDeliveryMethod_Item>
) {
    if (!_cached_encoder_for_PreferredDeliveryMethod_Item) {
        _cached_encoder_for_PreferredDeliveryMethod_Item = $._encodeInteger;
    }
    return _cached_encoder_for_PreferredDeliveryMethod_Item(value, elGetter);
}

export type PreferredDeliveryMethod<> = PreferredDeliveryMethod_Item[]; // SequenceOfType
let _cached_decoder_for_PreferredDeliveryMethod: $.ASN1Decoder<
    PreferredDeliveryMethod
> | null = null;
let _cached_encoder_for_PreferredDeliveryMethod: $.ASN1Encoder<
    PreferredDeliveryMethod
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PreferredDeliveryMethod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PreferredDeliveryMethod} The decoded data structure.
 */
export function _decode_PreferredDeliveryMethod(el: _Element) {
    if (!_cached_decoder_for_PreferredDeliveryMethod) {
        _cached_decoder_for_PreferredDeliveryMethod = $._decodeSequenceOf<
            PreferredDeliveryMethod_Item
        >(() => _decode_PreferredDeliveryMethod_Item);
    }
    return _cached_decoder_for_PreferredDeliveryMethod(el);
}
/**
 * @summary Encodes a(n) PreferredDeliveryMethod into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PreferredDeliveryMethod, encoded as an ASN.1 Element.
 */
export function _encode_PreferredDeliveryMethod(
    value: PreferredDeliveryMethod,
    elGetter: $.ASN1Encoder<PreferredDeliveryMethod>
) {
    if (!_cached_encoder_for_PreferredDeliveryMethod) {
        _cached_encoder_for_PreferredDeliveryMethod = $._encodeSequenceOf<
            PreferredDeliveryMethod_Item
        >(() => _encode_PreferredDeliveryMethod_Item, $.BER);
    }
    return _cached_encoder_for_PreferredDeliveryMethod(value, elGetter);
}

/**
 * @summary id_lsx_deliveryMethod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-deliveryMethod                     OBJECT IDENTIFIER ::= {id-lsx 14}
 * ```
 *
 * @constant
 */
export const id_lsx_deliveryMethod: OBJECT_IDENTIFIER = new _OID([14], id_lsx);

/**
 * @summary deliveryMethod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deliveryMethod SYNTAX-NAME ::= {
 *   LDAP-DESC         "Delevery Method"
 *   DIRECTORY SYNTAX  PreferredDeliveryMethod
 *   ID                id-lsx-deliveryMethod }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const deliveryMethod: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_PreferredDeliveryMethod,
    },
    encoderFor: {
        "&Type": _encode_PreferredDeliveryMethod,
    },
    "&ldapDesc": "Delevery Method" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_deliveryMethod /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_preferredDeliveryMethod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-preferredDeliveryMethod             OBJECT IDENTIFIER ::= {id-at 28}
 * ```
 *
 * @constant
 */
export const id_at_preferredDeliveryMethod: OBJECT_IDENTIFIER = new _OID(
    [28],
    id_at
);

/**
 * @summary preferredDeliveryMethod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * preferredDeliveryMethod ATTRIBUTE ::= {
 *   WITH SYNTAX              PreferredDeliveryMethod
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              deliveryMethod.&id
 *   LDAP-NAME                {"preferredDeliveryMethod"}
 *   ID                       id-at-preferredDeliveryMethod }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const preferredDeliveryMethod: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PreferredDeliveryMethod,
    },
    encoderFor: {
        "&Type": _encode_PreferredDeliveryMethod,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": deliveryMethod["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_preferredDeliveryMethod /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary PresentationAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PresentationAddress ::= SEQUENCE {
 *   pSelector   [0]  OCTET STRING OPTIONAL,
 *   sSelector   [1]  OCTET STRING OPTIONAL,
 *   tSelector   [2]  OCTET STRING OPTIONAL,
 *   nAddresses  [3]  SET SIZE (1..MAX) OF OCTET STRING,
 *   ... }
 * ```
 *
 * @class
 */
export class PresentationAddress {
    constructor(
        /**
         * @summary `pSelector`.
         * @public
         * @readonly
         */
        readonly pSelector: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `sSelector`.
         * @public
         * @readonly
         */
        readonly sSelector: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `tSelector`.
         * @public
         * @readonly
         */
        readonly tSelector: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `nAddresses`.
         * @public
         * @readonly
         */
        readonly nAddresses: OCTET_STRING[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PresentationAddress
     * @description
     *
     * This takes an `object` and converts it to a `PresentationAddress`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PresentationAddress`.
     * @returns {PresentationAddress}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof PresentationAddress]: PresentationAddress[_K] }
        >
    ): PresentationAddress {
        return new PresentationAddress(
            _o.pSelector,
            _o.sSelector,
            _o.tSelector,
            _o.nAddresses,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of PresentationAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PresentationAddress: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "pSelector",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sSelector",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "tSelector",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nAddresses",
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of PresentationAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PresentationAddress: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of PresentationAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PresentationAddress: $.ComponentSpec[] = [];
let _cached_decoder_for_PresentationAddress: $.ASN1Decoder<
    PresentationAddress
> | null = null;
let _cached_encoder_for_PresentationAddress: $.ASN1Encoder<
    PresentationAddress
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PresentationAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PresentationAddress} The decoded data structure.
 */
export function _decode_PresentationAddress(el: _Element) {
    if (!_cached_decoder_for_PresentationAddress) {
        _cached_decoder_for_PresentationAddress = function (
            el: _Element
        ): PresentationAddress {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let pSelector: OPTIONAL<OCTET_STRING>;
            let sSelector: OPTIONAL<OCTET_STRING>;
            let tSelector: OPTIONAL<OCTET_STRING>;
            let nAddresses!: OCTET_STRING[];
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                pSelector: (_el: _Element): void => {
                    pSelector = $._decode_explicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                sSelector: (_el: _Element): void => {
                    sSelector = $._decode_explicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                tSelector: (_el: _Element): void => {
                    tSelector = $._decode_explicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                nAddresses: (_el: _Element): void => {
                    nAddresses = $._decode_explicit<OCTET_STRING[]>(() =>
                        $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PresentationAddress,
                _extension_additions_list_spec_for_PresentationAddress,
                _root_component_type_list_2_spec_for_PresentationAddress,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PresentationAddress(
                /* SEQUENCE_CONSTRUCTOR_CALL */ pSelector,
                sSelector,
                tSelector,
                nAddresses,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PresentationAddress(el);
}
/**
 * @summary Encodes a(n) PresentationAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresentationAddress, encoded as an ASN.1 Element.
 */
export function _encode_PresentationAddress(
    value: PresentationAddress,
    elGetter: $.ASN1Encoder<PresentationAddress>
) {
    if (!_cached_encoder_for_PresentationAddress) {
        _cached_encoder_for_PresentationAddress = function (
            value: PresentationAddress,
            elGetter: $.ASN1Encoder<PresentationAddress>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.pSelector === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeOctetString,
                                      $.BER
                                  )(value.pSelector, $.BER),
                            /* IF_ABSENT  */ value.sSelector === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeOctetString,
                                      $.BER
                                  )(value.sSelector, $.BER),
                            /* IF_ABSENT  */ value.tSelector === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeOctetString,
                                      $.BER
                                  )(value.tSelector, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                3,
                                () =>
                                    $._encodeSetOf<OCTET_STRING>(
                                        () => $._encodeOctetString,
                                        $.BER
                                    ),
                                $.BER
                            )(value.nAddresses, $.BER),
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
    return _cached_encoder_for_PresentationAddress(value, elGetter);
}

/**
 * @summary id_mr_presentationAddressMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-presentationAddressMatch            OBJECT IDENTIFIER ::= {id-mr 22}
 * ```
 *
 * @constant
 */
export const id_mr_presentationAddressMatch: OBJECT_IDENTIFIER = new _OID(
    [22],
    id_mr
);

/**
 * @summary presentationAddressMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * presentationAddressMatch MATCHING-RULE ::= {
 *   SYNTAX       PresentationAddress
 *   ID           id-mr-presentationAddressMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const presentationAddressMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_PresentationAddress,
    },
    encoderFor: {
        "&AssertionType": _encode_PresentationAddress,
    },
    "&id": id_mr_presentationAddressMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lsx_presentationAddr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-presentationAddr                   OBJECT IDENTIFIER ::= {id-lsx 43}
 * ```
 *
 * @constant
 */
export const id_lsx_presentationAddr: OBJECT_IDENTIFIER = new _OID(
    [43],
    id_lsx
);

/**
 * @summary presentationAddr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * presentationAddr SYNTAX-NAME ::= {
 *   LDAP-DESC         "Presentation Address"
 *   DIRECTORY SYNTAX  PresentationAddress
 *   ID                id-lsx-presentationAddr }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const presentationAddr: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_PresentationAddress,
    },
    encoderFor: {
        "&Type": _encode_PresentationAddress,
    },
    "&ldapDesc": "Presentation Address" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_presentationAddr /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_presentationAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-presentationAddress                 OBJECT IDENTIFIER ::= {id-at 29}
 * ```
 *
 * @constant
 */
export const id_at_presentationAddress: OBJECT_IDENTIFIER = new _OID(
    [29],
    id_at
);

/**
 * @summary presentationAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * presentationAddress ATTRIBUTE ::= {
 *   WITH SYNTAX              PresentationAddress
 *   EQUALITY MATCHING RULE   presentationAddressMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              presentationAddr.&id
 *   LDAP-NAME                {"presentationAddress"}
 *   ID                       id-at-presentationAddress }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const presentationAddress: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PresentationAddress,
    },
    encoderFor: {
        "&Type": _encode_PresentationAddress,
    },
    "&equality-match": presentationAddressMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": presentationAddr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_presentationAddress /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_supportedApplicationContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-supportedApplicationContext         OBJECT IDENTIFIER ::= {id-at 30}
 * ```
 *
 * @constant
 */
export const id_at_supportedApplicationContext: OBJECT_IDENTIFIER = new _OID(
    [30],
    id_at
);

/**
 * @summary supportedApplicationContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedApplicationContext ATTRIBUTE ::= {
 *   WITH SYNTAX              OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   LDAP-SYNTAX              oid.&id
 *   LDAP-NAME                {"supportedApplicationContext"}
 *   ID                       id-at-supportedApplicationContext }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const supportedApplicationContext: ATTRIBUTE = {
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
    "&id": id_at_supportedApplicationContext /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary ProtocolInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolInformation ::= SEQUENCE {
 *   nAddress  OCTET STRING,
 *   profiles  SET OF OBJECT IDENTIFIER }
 * ```
 *
 * @class
 */
export class ProtocolInformation {
    constructor(
        /**
         * @summary `nAddress`.
         * @public
         * @readonly
         */
        readonly nAddress: OCTET_STRING,
        /**
         * @summary `profiles`.
         * @public
         * @readonly
         */
        readonly profiles: OBJECT_IDENTIFIER[]
    ) {}

    /**
     * @summary Restructures an object into a ProtocolInformation
     * @description
     *
     * This takes an `object` and converts it to a `ProtocolInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtocolInformation`.
     * @returns {ProtocolInformation}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof ProtocolInformation]: ProtocolInformation[_K] }
        >
    ): ProtocolInformation {
        return new ProtocolInformation(_o.nAddress, _o.profiles);
    }
}
/**
 * @summary The Leading Root Component Types of ProtocolInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtocolInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "nAddress",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "profiles",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ProtocolInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtocolInformation: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ProtocolInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtocolInformation: $.ComponentSpec[] = [];
let _cached_decoder_for_ProtocolInformation: $.ASN1Decoder<
    ProtocolInformation
> | null = null;
let _cached_encoder_for_ProtocolInformation: $.ASN1Encoder<
    ProtocolInformation
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtocolInformation} The decoded data structure.
 */
export function _decode_ProtocolInformation(el: _Element) {
    if (!_cached_decoder_for_ProtocolInformation) {
        _cached_decoder_for_ProtocolInformation = function (
            el: _Element
        ): ProtocolInformation {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ProtocolInformation contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "nAddress";
            sequence[1].name = "profiles";
            let nAddress!: OCTET_STRING;
            let profiles!: OBJECT_IDENTIFIER[];
            nAddress = $._decodeOctetString(sequence[0]);
            profiles = $._decodeSetOf<OBJECT_IDENTIFIER>(
                () => $._decodeObjectIdentifier
            )(sequence[1]);
            return new ProtocolInformation(nAddress, profiles);
        };
    }
    return _cached_decoder_for_ProtocolInformation(el);
}
/**
 * @summary Encodes a(n) ProtocolInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolInformation, encoded as an ASN.1 Element.
 */
export function _encode_ProtocolInformation(
    value: ProtocolInformation,
    elGetter: $.ASN1Encoder<ProtocolInformation>
) {
    if (!_cached_encoder_for_ProtocolInformation) {
        _cached_encoder_for_ProtocolInformation = function (
            value: ProtocolInformation,
            elGetter: $.ASN1Encoder<ProtocolInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeOctetString(
                            value.nAddress,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._encodeObjectIdentifier,
                            $.BER
                        )(value.profiles, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ProtocolInformation(value, elGetter);
}

/**
 * @summary id_mr_protocolInformationMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-protocolInformationMatch            OBJECT IDENTIFIER ::= {id-mr 24}
 * ```
 *
 * @constant
 */
export const id_mr_protocolInformationMatch: OBJECT_IDENTIFIER = new _OID(
    [24],
    id_mr
);

/**
 * @summary protocolInformationMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protocolInformationMatch MATCHING-RULE ::= {
 *   SYNTAX       OCTET STRING
 *   ID           id-mr-protocolInformationMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const protocolInformationMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeOctetString,
    },
    encoderFor: {
        "&AssertionType": $._encodeOctetString,
    },
    "&id": id_mr_protocolInformationMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_protocolInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-protocolInformation                 OBJECT IDENTIFIER ::= {id-at 48}
 * ```
 *
 * @constant
 */
export const id_at_protocolInformation: OBJECT_IDENTIFIER = new _OID(
    [48],
    id_at
);

/**
 * @summary protocolInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protocolInformation ATTRIBUTE ::= {
 *   WITH SYNTAX              ProtocolInformation
 *   EQUALITY MATCHING RULE   protocolInformationMatch
 *   ID                       id-at-protocolInformation }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const protocolInformation: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ProtocolInformation,
    },
    encoderFor: {
        "&Type": _encode_ProtocolInformation,
    },
    "&equality-match": protocolInformationMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_protocolInformation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_lsx_dn
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-dn                                 OBJECT IDENTIFIER ::= {id-lsx 12}
 * ```
 *
 * @constant
 */
export const id_lsx_dn: OBJECT_IDENTIFIER = new _OID([12], id_lsx);

/**
 * @summary dn
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dn SYNTAX-NAME ::= {
 *   LDAP-DESC         "DN"
 *   DIRECTORY SYNTAX  DistinguishedName
 *   ID                id-lsx-dn }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const dn: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&ldapDesc": "DN" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_dn /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_distinguishedName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-distinguishedName                   OBJECT IDENTIFIER ::= {id-at 49}
 * ```
 *
 * @constant
 */
export const id_at_distinguishedName: OBJECT_IDENTIFIER = new _OID([49], id_at);

/**
 * @summary distinguishedName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * distinguishedName ATTRIBUTE ::= {
 *   WITH SYNTAX              DistinguishedName
 *   EQUALITY MATCHING RULE   distinguishedNameMatch
 *   LDAP-SYNTAX              dn.&id
 *   LDAP-NAME                {"distinguishedName"}
 *   ID                       id-at-distinguishedName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const distinguishedName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_distinguishedName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_member
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-member                              OBJECT IDENTIFIER ::= {id-at 31}
 * ```
 *
 * @constant
 */
export const id_at_member: OBJECT_IDENTIFIER = new _OID([31], id_at);

/**
 * @summary member
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * member ATTRIBUTE ::= {
 *   SUBTYPE OF               distinguishedName
 *   LDAP-SYNTAX              dn.&id
 *   LDAP-NAME                {"member"}
 *   ID                       id-at-member }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const member: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": distinguishedName /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_member /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary NameAndOptionalUID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameAndOptionalUID ::= SEQUENCE {
 *   dn   DistinguishedName,
 *   uid  UniqueIdentifier OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class NameAndOptionalUID {
    constructor(
        /**
         * @summary `dn`.
         * @public
         * @readonly
         */
        readonly dn: DistinguishedName,
        /**
         * @summary `uid`.
         * @public
         * @readonly
         */
        readonly uid: OPTIONAL<UniqueIdentifier>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NameAndOptionalUID
     * @description
     *
     * This takes an `object` and converts it to a `NameAndOptionalUID`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NameAndOptionalUID`.
     * @returns {NameAndOptionalUID}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof NameAndOptionalUID]: NameAndOptionalUID[_K] }
        >
    ): NameAndOptionalUID {
        return new NameAndOptionalUID(
            _o.dn,
            _o.uid,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of NameAndOptionalUID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NameAndOptionalUID: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "dn",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "uid",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of NameAndOptionalUID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NameAndOptionalUID: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of NameAndOptionalUID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NameAndOptionalUID: $.ComponentSpec[] = [];
let _cached_decoder_for_NameAndOptionalUID: $.ASN1Decoder<
    NameAndOptionalUID
> | null = null;
let _cached_encoder_for_NameAndOptionalUID: $.ASN1Encoder<
    NameAndOptionalUID
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) NameAndOptionalUID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameAndOptionalUID} The decoded data structure.
 */
export function _decode_NameAndOptionalUID(el: _Element) {
    if (!_cached_decoder_for_NameAndOptionalUID) {
        _cached_decoder_for_NameAndOptionalUID = function (
            el: _Element
        ): NameAndOptionalUID {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let dn!: DistinguishedName;
            let uid: OPTIONAL<UniqueIdentifier>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                dn: (_el: _Element): void => {
                    dn = _decode_DistinguishedName(_el);
                },
                uid: (_el: _Element): void => {
                    uid = _decode_UniqueIdentifier(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NameAndOptionalUID,
                _extension_additions_list_spec_for_NameAndOptionalUID,
                _root_component_type_list_2_spec_for_NameAndOptionalUID,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new NameAndOptionalUID(
                /* SEQUENCE_CONSTRUCTOR_CALL */ dn,
                uid,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_NameAndOptionalUID(el);
}
/**
 * @summary Encodes a(n) NameAndOptionalUID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameAndOptionalUID, encoded as an ASN.1 Element.
 */
export function _encode_NameAndOptionalUID(
    value: NameAndOptionalUID,
    elGetter: $.ASN1Encoder<NameAndOptionalUID>
) {
    if (!_cached_encoder_for_NameAndOptionalUID) {
        _cached_encoder_for_NameAndOptionalUID = function (
            value: NameAndOptionalUID,
            elGetter: $.ASN1Encoder<NameAndOptionalUID>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_DistinguishedName(
                                value.dn,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.uid === undefined
                                ? undefined
                                : _encode_UniqueIdentifier(value.uid, $.BER),
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
    return _cached_encoder_for_NameAndOptionalUID(value, elGetter);
}

/**
 * @summary id_lsx_nameAndOptionalUID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-nameAndOptionalUID                 OBJECT IDENTIFIER ::= {id-lsx 34}
 * ```
 *
 * @constant
 */
export const id_lsx_nameAndOptionalUID: OBJECT_IDENTIFIER = new _OID(
    [34],
    id_lsx
);

/**
 * @summary nameAndOptionalUID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nameAndOptionalUID SYNTAX-NAME ::= {
 *   LDAP-DESC         "Name And Optional UID"
 *   DIRECTORY SYNTAX  NameAndOptionalUID
 *   ID                id-lsx-nameAndOptionalUID }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const nameAndOptionalUID: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_NameAndOptionalUID,
    },
    encoderFor: {
        "&Type": _encode_NameAndOptionalUID,
    },
    "&ldapDesc": "Name And Optional UID" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_nameAndOptionalUID /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_uniqueMemberMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-uniqueMemberMatch                   OBJECT IDENTIFIER ::= {id-mr 23}
 * ```
 *
 * @constant
 */
export const id_mr_uniqueMemberMatch: OBJECT_IDENTIFIER = new _OID([23], id_mr);

/**
 * @summary uniqueMemberMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uniqueMemberMatch MATCHING-RULE ::= {
 *   SYNTAX       NameAndOptionalUID
 *   LDAP-SYNTAX  nameAndOptionalUID.&id
 *   LDAP-NAME    {"uniqueMemberMatch"}
 *   ID           id-mr-uniqueMemberMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const uniqueMemberMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_NameAndOptionalUID,
    },
    encoderFor: {
        "&AssertionType": _encode_NameAndOptionalUID,
    },
    "&ldapSyntax": nameAndOptionalUID["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_uniqueMemberMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_uniqueMember
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-uniqueMember                        OBJECT IDENTIFIER ::= {id-at 50}
 * ```
 *
 * @constant
 */
export const id_at_uniqueMember: OBJECT_IDENTIFIER = new _OID([50], id_at);

/**
 * @summary uniqueMember
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uniqueMember ATTRIBUTE ::= {
 *   WITH SYNTAX              NameAndOptionalUID
 *   EQUALITY MATCHING RULE   uniqueMemberMatch
 *   LDAP-SYNTAX              nameAndOptionalUID.&id
 *   LDAP-NAME                {"uniqueMember"}
 *   ID                       id-at-uniqueMember }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const uniqueMember: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_NameAndOptionalUID,
    },
    encoderFor: {
        "&Type": _encode_NameAndOptionalUID,
    },
    "&equality-match": uniqueMemberMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": nameAndOptionalUID["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_uniqueMember /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_owner
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-owner                               OBJECT IDENTIFIER ::= {id-at 32}
 * ```
 *
 * @constant
 */
export const id_at_owner: OBJECT_IDENTIFIER = new _OID([32], id_at);

/**
 * @summary owner
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * owner ATTRIBUTE ::= {
 *   SUBTYPE OF               distinguishedName
 *   LDAP-SYNTAX              dn.&id
 *   LDAP-NAME                {"owner"}
 *   ID                       id-at-owner }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const owner: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": distinguishedName /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_owner /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_roleOccupant
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-roleOccupant                        OBJECT IDENTIFIER ::= {id-at 33}
 * ```
 *
 * @constant
 */
export const id_at_roleOccupant: OBJECT_IDENTIFIER = new _OID([33], id_at);

/**
 * @summary roleOccupant
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * roleOccupant ATTRIBUTE ::= {
 *   SUBTYPE OF               distinguishedName
 *   LDAP-SYNTAX              dn.&id
 *   LDAP-NAME                {"roleOccupant"}
 *   ID                       id-at-roleOccupant }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const roleOccupant: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": distinguishedName /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_roleOccupant /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_seeAlso
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-seeAlso                             OBJECT IDENTIFIER ::= {id-at 34}
 * ```
 *
 * @constant
 */
export const id_at_seeAlso: OBJECT_IDENTIFIER = new _OID([34], id_at);

/**
 * @summary seeAlso
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * seeAlso ATTRIBUTE ::= {
 *   SUBTYPE OF               distinguishedName
 *   LDAP-SYNTAX              dn.&id
 *   LDAP-NAME                {"seeAlso"}
 *   ID                       id-at-seeAlso }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const seeAlso: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": distinguishedName /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_seeAlso /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_dmdName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-dmdName                             OBJECT IDENTIFIER ::= {id-at 54}
 * ```
 *
 * @constant
 */
export const id_at_dmdName: OBJECT_IDENTIFIER = new _OID([54], id_at);

/**
 * @summary dmdName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dmdName ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              UnboundedDirectoryString
 *   ID                       id-at-dmdName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const dmdName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&id": id_at_dmdName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_lsx_integer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-integer                            OBJECT IDENTIFIER ::= {id-lsx 27}
 * ```
 *
 * @constant
 */
export const id_lsx_integer: OBJECT_IDENTIFIER = new _OID([27], id_lsx);

/**
 * @summary integer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * integer SYNTAX-NAME ::= {
 *   LDAP-DESC         "INTEGER"
 *   DIRECTORY SYNTAX  INTEGER
 *   ID                id-lsx-integer }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const integer: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&ldapDesc": "INTEGER" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_integer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_integerMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-integerMatch                        OBJECT IDENTIFIER ::= {id-mr 14}
 * ```
 *
 * @constant
 */
export const id_mr_integerMatch: OBJECT_IDENTIFIER = new _OID([14], id_mr);

/**
 * @summary integerMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * integerMatch MATCHING-RULE ::= {
 *   SYNTAX       INTEGER
 *   LDAP-SYNTAX  integer.&id
 *   LDAP-NAME    {"integerMatch"}
 *   ID           id-mr-integerMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const integerMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeInteger,
    },
    encoderFor: {
        "&AssertionType": $._encodeInteger,
    },
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_integerMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_oidC1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oidC1                                  OBJECT IDENTIFIER ::= {id 0}
 * ```
 *
 * @constant
 */
export const id_oidC1: OBJECT_IDENTIFIER = new _OID([0], id);

/**
 * @summary oidC1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidC1 ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER
 *   EQUALITY MATCHING RULE   integerMatch
 *   SINGLE VALUE             TRUE
 *   ID                       id-oidC1 }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const oidC1: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_oidC1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oidC2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oidC2                                  OBJECT IDENTIFIER ::= {id 1}
 * ```
 *
 * @constant
 */
export const id_oidC2: OBJECT_IDENTIFIER = new _OID([1], id);

/**
 * @summary oidC2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidC2 ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER
 *   EQUALITY MATCHING RULE   integerMatch
 *   SINGLE VALUE             TRUE
 *   ID                       id-oidC2 }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const oidC2: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_oidC2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oidC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oidC                                   OBJECT IDENTIFIER ::= {id 2}
 * ```
 *
 * @constant
 */
export const id_oidC: OBJECT_IDENTIFIER = new _OID([2], id);

/**
 * @summary oidC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidC ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER
 *   EQUALITY MATCHING RULE   integerMatch
 *   SINGLE VALUE             TRUE
 *   ID                       id-oidC }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const oidC: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_oidC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_mr_caseExactMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-caseExactMatch                      OBJECT IDENTIFIER ::= {id-mr 5}
 * ```
 *
 * @constant
 */
export const id_mr_caseExactMatch: OBJECT_IDENTIFIER = new _OID([5], id_mr);

/**
 * @summary caseExactMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseExactMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"caseExactMatch"}
 *   ID           id-mr-caseExactMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const caseExactMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&AssertionType": _encode_UnboundedDirectoryString,
    },
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_caseExactMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_urnC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-urnC                                OBJECT IDENTIFIER ::= {id-at 89}
 * ```
 *
 * @constant
 */
export const id_at_urnC: OBJECT_IDENTIFIER = new _OID([89], id_at);

/**
 * @summary urnC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * urnC ATTRIBUTE ::= {
 *   WITH SYNTAX              PrintableString
 *   EQUALITY MATCHING RULE   caseExactMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              printableString.&id
 *   LDAP-NAME                {"urnC"}
 *   ID                       id-at-urnC }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const urnC: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodePrintableString,
    },
    encoderFor: {
        "&Type": $._encodePrintableString,
    },
    "&equality-match": caseExactMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_urnC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_tagOid
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-tagOid                              OBJECT IDENTIFIER ::= {id-at 78}
 * ```
 *
 * @constant
 */
export const id_at_tagOid: OBJECT_IDENTIFIER = new _OID([78], id_at);

/**
 * @summary tagOid
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tagOid ATTRIBUTE ::= {
 *   WITH SYNTAX              OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              oid.&id
 *   LDAP-NAME                {"tagOid"}
 *   ID                       id-at-tagOid }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const tagOid: ATTRIBUTE = {
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
    "&id": id_at_tagOid /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type URI<> = UTF8String; // UTF8String
let _cached_decoder_for_URI: $.ASN1Decoder<URI> | null = null;
let _cached_encoder_for_URI: $.ASN1Encoder<URI> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) URI
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {URI} The decoded data structure.
 */
export function _decode_URI(el: _Element) {
    if (!_cached_decoder_for_URI) {
        _cached_decoder_for_URI = $._decodeUTF8String;
    }
    return _cached_decoder_for_URI(el);
}
/**
 * @summary Encodes a(n) URI into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The URI, encoded as an ASN.1 Element.
 */
export function _encode_URI(value: URI, elGetter: $.ASN1Encoder<URI>) {
    if (!_cached_encoder_for_URI) {
        _cached_encoder_for_URI = $._encodeUTF8String;
    }
    return _cached_encoder_for_URI(value, elGetter);
}

/**
 * @summary UiiFormat_subset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiFormat-subset ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_UiiFormat_subset {
    baseObject = 0,
    oneLevel = 1,
    wholeSubtree = 2,
}
/**
 * @summary UiiFormat_subset
 */
export type UiiFormat_subset = _enum_for_UiiFormat_subset;
/**
 * @summary UiiFormat_subset
 * @constant
 */
export const UiiFormat_subset = _enum_for_UiiFormat_subset;
/**
 * @summary UiiFormat_subset_baseObject
 * @constant
 * @type {number}
 */
export const UiiFormat_subset_baseObject: UiiFormat_subset =
    UiiFormat_subset.baseObject; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary UiiFormat_subset_oneLevel
 * @constant
 * @type {number}
 */
export const UiiFormat_subset_oneLevel: UiiFormat_subset =
    UiiFormat_subset.oneLevel; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary UiiFormat_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export const UiiFormat_subset_wholeSubtree: UiiFormat_subset =
    UiiFormat_subset.wholeSubtree; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_UiiFormat_subset: $.ASN1Decoder<
    UiiFormat_subset
> | null = null;
let _cached_encoder_for_UiiFormat_subset: $.ASN1Encoder<
    UiiFormat_subset
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UiiFormat_subset
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UiiFormat_subset} The decoded data structure.
 */
export function _decode_UiiFormat_subset(el: _Element) {
    if (!_cached_decoder_for_UiiFormat_subset) {
        _cached_decoder_for_UiiFormat_subset = $._decodeEnumerated;
    }
    return _cached_decoder_for_UiiFormat_subset(el);
}
/**
 * @summary Encodes a(n) UiiFormat_subset into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UiiFormat_subset, encoded as an ASN.1 Element.
 */
export function _encode_UiiFormat_subset(
    value: UiiFormat_subset,
    elGetter: $.ASN1Encoder<UiiFormat_subset>
) {
    if (!_cached_encoder_for_UiiFormat_subset) {
        _cached_encoder_for_UiiFormat_subset = $._encodeEnumerated;
    }
    return _cached_encoder_for_UiiFormat_subset(value, elGetter);
}

/**
 * @summary UiiItem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiItem ::= SEQUENCE {
 *   type   ATTRIBUTE.&id,
 *   length INTEGER OPTIONAL }
 * ```
 *
 * @class
 */
export class UiiItem {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `length`.
         * @public
         * @readonly
         */
        readonly length: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a UiiItem
     * @description
     *
     * This takes an `object` and converts it to a `UiiItem`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UiiItem`.
     * @returns {UiiItem}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof UiiItem]: UiiItem[_K] }>
    ): UiiItem {
        return new UiiItem(_o.type_, _o.length);
    }
}
/**
 * @summary The Leading Root Component Types of UiiItem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UiiItem: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "length",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of UiiItem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UiiItem: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of UiiItem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UiiItem: $.ComponentSpec[] = [];
let _cached_decoder_for_UiiItem: $.ASN1Decoder<UiiItem> | null = null;
let _cached_encoder_for_UiiItem: $.ASN1Encoder<UiiItem> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UiiItem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UiiItem} The decoded data structure.
 */
export function _decode_UiiItem(el: _Element) {
    if (!_cached_decoder_for_UiiItem) {
        _cached_decoder_for_UiiItem = function (el: _Element): UiiItem {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let type_!: OBJECT_IDENTIFIER;
            let length: OPTIONAL<INTEGER>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                type: (_el: _Element): void => {
                    type_ = $._decodeObjectIdentifier(_el);
                },
                length: (_el: _Element): void => {
                    length = $._decodeInteger(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UiiItem,
                _extension_additions_list_spec_for_UiiItem,
                _root_component_type_list_2_spec_for_UiiItem,
                undefined
            );
            return new UiiItem(/* SEQUENCE_CONSTRUCTOR_CALL */ type_, length);
        };
    }
    return _cached_decoder_for_UiiItem(el);
}
/**
 * @summary Encodes a(n) UiiItem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UiiItem, encoded as an ASN.1 Element.
 */
export function _encode_UiiItem(
    value: UiiItem,
    elGetter: $.ASN1Encoder<UiiItem>
) {
    if (!_cached_encoder_for_UiiItem) {
        _cached_encoder_for_UiiItem = function (
            value: UiiItem,
            elGetter: $.ASN1Encoder<UiiItem>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.type_,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.length === undefined
                            ? undefined
                            : $._encodeInteger(value.length, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UiiItem(value, elGetter);
}

/* TODO: CHECK_RECURSIVE_DEFINITION */
/**
 * @summary UiiFilter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiFilter  ::=  CHOICE {
 *   item  [0]  UiiItem,
 *   and   [1]  SET OF UiiFilter,
 *   or    [2]  SET OF UiiFilter,
 *   not   [3]  UiiFilter }
 * ```
 */
export type UiiFilter =
    | { item: UiiItem } /* CHOICE_ALT_ROOT */
    | { and: UiiFilter[] } /* CHOICE_ALT_ROOT */
    | { or: UiiFilter[] } /* CHOICE_ALT_ROOT */
    | { not: UiiFilter } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_UiiFilter: $.ASN1Decoder<UiiFilter> | null = null;
let _cached_encoder_for_UiiFilter: $.ASN1Encoder<UiiFilter> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UiiFilter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UiiFilter} The decoded data structure.
 */
export function _decode_UiiFilter(el: _Element) {
    if (!_cached_decoder_for_UiiFilter) {
        _cached_decoder_for_UiiFilter = $._decode_inextensible_choice<
            UiiFilter
        >({
            "CONTEXT 0": [
                "item",
                $._decode_explicit<UiiItem>(() => _decode_UiiItem),
            ],
            "CONTEXT 1": [
                "and",
                $._decode_explicit<UiiFilter[]>(() =>
                    $._decodeSetOf<UiiFilter>(() => _decode_UiiFilter)
                ),
            ],
            "CONTEXT 2": [
                "or",
                $._decode_explicit<UiiFilter[]>(() =>
                    $._decodeSetOf<UiiFilter>(() => _decode_UiiFilter)
                ),
            ],
            "CONTEXT 3": [
                "not",
                $._decode_explicit<UiiFilter>(() => _decode_UiiFilter),
            ],
        });
    }
    return _cached_decoder_for_UiiFilter(el);
}
/**
 * @summary Encodes a(n) UiiFilter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UiiFilter, encoded as an ASN.1 Element.
 */
export function _encode_UiiFilter(
    value: UiiFilter,
    elGetter: $.ASN1Encoder<UiiFilter>
) {
    if (!_cached_encoder_for_UiiFilter) {
        _cached_encoder_for_UiiFilter = $._encode_choice<UiiFilter>(
            {
                item: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_UiiItem,
                    $.BER
                ),
                and: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSetOf<UiiFilter>(
                            () => _encode_UiiFilter,
                            $.BER
                        ),
                    $.BER
                ),
                or: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSetOf<UiiFilter>(
                            () => _encode_UiiFilter,
                            $.BER
                        ),
                    $.BER
                ),
                not: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_UiiFilter,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_UiiFilter(value, elGetter);
}

/**
 * @summary UiiFormat_next
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiFormat-next ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type UiiFormat_next =
    | { length: INTEGER } /* CHOICE_ALT_ROOT */
    | { filter: UiiFilter } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_UiiFormat_next: $.ASN1Decoder<
    UiiFormat_next
> | null = null;
let _cached_encoder_for_UiiFormat_next: $.ASN1Encoder<
    UiiFormat_next
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UiiFormat_next
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UiiFormat_next} The decoded data structure.
 */
export function _decode_UiiFormat_next(el: _Element) {
    if (!_cached_decoder_for_UiiFormat_next) {
        _cached_decoder_for_UiiFormat_next = $._decode_inextensible_choice<
            UiiFormat_next
        >({
            "UNIVERSAL 2": ["length", $._decodeInteger],
            "CONTEXT 0": ["filter", _decode_UiiFilter],
            "CONTEXT 1": ["filter", _decode_UiiFilter],
            "CONTEXT 2": ["filter", _decode_UiiFilter],
            "CONTEXT 3": ["filter", _decode_UiiFilter],
        });
    }
    return _cached_decoder_for_UiiFormat_next(el);
}
/**
 * @summary Encodes a(n) UiiFormat_next into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UiiFormat_next, encoded as an ASN.1 Element.
 */
export function _encode_UiiFormat_next(
    value: UiiFormat_next,
    elGetter: $.ASN1Encoder<UiiFormat_next>
) {
    if (!_cached_encoder_for_UiiFormat_next) {
        _cached_encoder_for_UiiFormat_next = $._encode_choice<UiiFormat_next>(
            {
                length: $._encodeInteger,
                filter: _encode_UiiFilter,
            },
            $.BER
        );
    }
    return _cached_encoder_for_UiiFormat_next(value, elGetter);
}

/**
 * @summary UiiFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiFormat ::= SEQUENCE {
 *   baseObject  URI  OPTIONAL,
 *   subset      ENUMERATED {
 *     baseObject   (0),
 *     oneLevel     (1),
 *     wholeSubtree (2) } DEFAULT baseObject,
 *   next        CHOICE {
 *     length      INTEGER,
 *     filter      UiiFilter } }
 * ```
 *
 * @class
 */
export class UiiFormat {
    constructor(
        /**
         * @summary `baseObject`.
         * @public
         * @readonly
         */
        readonly baseObject: OPTIONAL<URI>,
        /**
         * @summary `subset`.
         * @public
         * @readonly
         */
        readonly subset: OPTIONAL<UiiFormat_subset>,
        /**
         * @summary `next`.
         * @public
         * @readonly
         */
        readonly next: UiiFormat_next
    ) {}

    /**
     * @summary Restructures an object into a UiiFormat
     * @description
     *
     * This takes an `object` and converts it to a `UiiFormat`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UiiFormat`.
     * @returns {UiiFormat}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof UiiFormat]: UiiFormat[_K] }>
    ): UiiFormat {
        return new UiiFormat(_o.baseObject, _o.subset, _o.next);
    }

    /**
     * @summary Getter that returns the default value for `subset`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_subset() {
        return UiiFormat_subset_baseObject;
    }
    /**
     * @summary The enum used as the type of the component `subset`
     * @public
     * @static
     */

    public static _enum_for_subset = _enum_for_UiiFormat_subset;
}
/**
 * @summary The Leading Root Component Types of UiiFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UiiFormat: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "baseObject",
        true,
        $.hasTag(_TagClass.universal, 12),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subset",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec("next", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of UiiFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UiiFormat: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of UiiFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UiiFormat: $.ComponentSpec[] = [];
let _cached_decoder_for_UiiFormat: $.ASN1Decoder<UiiFormat> | null = null;
let _cached_encoder_for_UiiFormat: $.ASN1Encoder<UiiFormat> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UiiFormat
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UiiFormat} The decoded data structure.
 */
export function _decode_UiiFormat(el: _Element) {
    if (!_cached_decoder_for_UiiFormat) {
        _cached_decoder_for_UiiFormat = function (el: _Element): UiiFormat {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let baseObject: OPTIONAL<URI>;
            let subset: OPTIONAL<UiiFormat_subset> =
                UiiFormat._default_value_for_subset;
            let next!: UiiFormat_next;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                baseObject: (_el: _Element): void => {
                    baseObject = _decode_URI(_el);
                },
                subset: (_el: _Element): void => {
                    subset = _decode_UiiFormat_subset(_el);
                },
                next: (_el: _Element): void => {
                    next = _decode_UiiFormat_next(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UiiFormat,
                _extension_additions_list_spec_for_UiiFormat,
                _root_component_type_list_2_spec_for_UiiFormat,
                undefined
            );
            return new UiiFormat(
                /* SEQUENCE_CONSTRUCTOR_CALL */ baseObject,
                subset,
                next
            );
        };
    }
    return _cached_decoder_for_UiiFormat(el);
}
/**
 * @summary Encodes a(n) UiiFormat into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UiiFormat, encoded as an ASN.1 Element.
 */
export function _encode_UiiFormat(
    value: UiiFormat,
    elGetter: $.ASN1Encoder<UiiFormat>
) {
    if (!_cached_encoder_for_UiiFormat) {
        _cached_encoder_for_UiiFormat = function (
            value: UiiFormat,
            elGetter: $.ASN1Encoder<UiiFormat>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.baseObject === undefined
                            ? undefined
                            : _encode_URI(value.baseObject, $.BER),
                        /* IF_DEFAULT */ value.subset === undefined ||
                        $.deepEq(
                            value.subset,
                            UiiFormat._default_value_for_subset
                        )
                            ? undefined
                            : _encode_UiiFormat_subset(value.subset, $.BER),
                        /* REQUIRED   */ _encode_UiiFormat_next(
                            value.next,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UiiFormat(value, elGetter);
}

/**
 * @summary id_asx_uiiForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-uiiForm                            OBJECT IDENTIFIER ::= {id-asx 5}
 * ```
 *
 * @constant
 */
export const id_asx_uiiForm: OBJECT_IDENTIFIER = new _OID([5], id_asx);

/**
 * @summary uiiForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uiiForm SYNTAX-NAME ::= {
 *   LDAP-DESC         "UII Format"
 *   DIRECTORY SYNTAX  UiiFormat
 *   ID                id-asx-uiiForm }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const uiiForm: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_UiiFormat,
    },
    encoderFor: {
        "&Type": _encode_UiiFormat,
    },
    "&ldapDesc": "UII Format" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_uiiForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_uiiFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-uiiFormat                           OBJECT IDENTIFIER ::= {id-at 79}
 * ```
 *
 * @constant
 */
export const id_at_uiiFormat: OBJECT_IDENTIFIER = new _OID([79], id_at);

/**
 * @summary uiiFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uiiFormat ATTRIBUTE ::= {
 *   WITH SYNTAX              UiiFormat
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              uiiForm.&id
 *   LDAP-NAME                {"uiiFormat"}
 *   ID                       id-at-uiiFormat }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const uiiFormat: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UiiFormat,
    },
    encoderFor: {
        "&Type": _encode_UiiFormat,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": uiiForm["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_uiiFormat /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_uiiInUrn
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-uiiInUrn                            OBJECT IDENTIFIER ::= {id-at 80}
 * ```
 *
 * @constant
 */
export const id_at_uiiInUrn: OBJECT_IDENTIFIER = new _OID([80], id_at);

/**
 * @summary uiiInUrn
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uiiInUrn ATTRIBUTE ::= {
 *   WITH SYNTAX              UTF8String
 *   EQUALITY MATCHING RULE   caseExactMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"uiiInUrn"}
 *   ID                       id-at-uiiInUrn }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const uiiInUrn: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeUTF8String,
    },
    encoderFor: {
        "&Type": $._encodeUTF8String,
    },
    "&equality-match": caseExactMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_uiiInUrn /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_mr_uriMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-uriMatch                            OBJECT IDENTIFIER ::= {id-mr 70}
 * ```
 *
 * @constant
 */
export const id_mr_uriMatch: OBJECT_IDENTIFIER = new _OID([70], id_mr);

/**
 * @summary uriMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uriMatch MATCHING-RULE ::= {
 *   SYNTAX       UTF8String
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"uriMatch"}
 *   ID           id-mr-uriMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const uriMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeUTF8String,
    },
    encoderFor: {
        "&AssertionType": $._encodeUTF8String,
    },
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_uriMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_uri
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-uri                                 OBJECT IDENTIFIER ::= {id-at 83}
 * ```
 *
 * @constant
 */
export const id_at_uri: OBJECT_IDENTIFIER = new _OID([83], id_at);

/**
 * @summary uri
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uri ATTRIBUTE ::= {
 *   WITH SYNTAX              URI
 *   EQUALITY MATCHING RULE   uriMatch
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"uri"}
 *   ID                       id-at-uri }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const uri: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_URI,
    },
    encoderFor: {
        "&Type": _encode_URI,
    },
    "&equality-match": uriMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_uri /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_url
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-url                                 OBJECT IDENTIFIER ::= {id-at 87}
 * ```
 *
 * @constant
 */
export const id_at_url: OBJECT_IDENTIFIER = new _OID([87], id_at);

/**
 * @summary url
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * url ATTRIBUTE ::= {
 *   SUBTYPE OF               uri
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"url"}
 *   ID                       id-at-url }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const url: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": uri /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_url /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_contentUrl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-contentUrl                          OBJECT IDENTIFIER ::= {id-at 81}
 * ```
 *
 * @constant
 */
export const id_at_contentUrl: OBJECT_IDENTIFIER = new _OID([81], id_at);

/**
 * @summary contentUrl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contentUrl ATTRIBUTE ::= {
 *   SUBTYPE OF               url
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"contentUrl"}
 *   ID                       id-at-contentUrl }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const contentUrl: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": url /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_contentUrl /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_uii
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-uii                                 OBJECT IDENTIFIER ::= {id-at 90}
 * ```
 *
 * @constant
 */
export const id_at_uii: OBJECT_IDENTIFIER = new _OID([90], id_at);

/**
 * @summary uii
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uii ATTRIBUTE ::= {
 *   WITH SYNTAX              BIT STRING
 *   EQUALITY MATCHING RULE   bitStringMatch
 *   LDAP-SYNTAX              bitString.&id
 *   LDAP-NAME                {"uii"}
 *   ID                       id-at-uii }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const uii: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBitString,
    },
    encoderFor: {
        "&Type": $._encodeBitString,
    },
    "&equality-match": bitStringMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": bitString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_uii /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_epc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-epc                                 OBJECT IDENTIFIER ::= {id-at 91}
 * ```
 *
 * @constant
 */
export const id_at_epc: OBJECT_IDENTIFIER = new _OID([91], id_at);

/**
 * @summary epc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * epc ATTRIBUTE ::= {
 *   WITH SYNTAX              BIT STRING
 *   EQUALITY MATCHING RULE   bitStringMatch
 *   LDAP-SYNTAX              bitString.&id
 *   LDAP-NAME                {"epc"}
 *   ID                       id-at-epc }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const epc: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBitString,
    },
    encoderFor: {
        "&Type": $._encodeBitString,
    },
    "&equality-match": bitStringMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": bitString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_epc /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_lsx_octetString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-octetString                        OBJECT IDENTIFIER ::= {id-lsx 40}
 * ```
 *
 * @constant
 */
export const id_lsx_octetString: OBJECT_IDENTIFIER = new _OID([40], id_lsx);

/**
 * @summary octetString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * octetString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Octet String"
 *   DIRECTORY SYNTAX  OCTET STRING
 *   ID                id-lsx-octetString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const octetString: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&ldapDesc": "Octet String" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_octetString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_octetStringMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-octetStringMatch                    OBJECT IDENTIFIER ::= {id-mr 17}
 * ```
 *
 * @constant
 */
export const id_mr_octetStringMatch: OBJECT_IDENTIFIER = new _OID([17], id_mr);

/**
 * @summary octetStringMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * octetStringMatch MATCHING-RULE ::= {
 *   SYNTAX       OCTET STRING
 *   LDAP-SYNTAX  octetString.&id
 *   LDAP-NAME    {"octetStringMatch"}
 *   ID           id-mr-octetStringMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const octetStringMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeOctetString,
    },
    encoderFor: {
        "&AssertionType": $._encodeOctetString,
    },
    "&ldapSyntax": octetString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_octetStringMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_tagAfi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-tagAfi                              OBJECT IDENTIFIER ::= {id-at 92}
 * ```
 *
 * @constant
 */
export const id_at_tagAfi: OBJECT_IDENTIFIER = new _OID([92], id_at);

/**
 * @summary tagAfi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tagAfi ATTRIBUTE ::= {
 *   WITH SYNTAX              OCTET STRING
 *   EQUALITY MATCHING RULE   octetStringMatch
 *   LDAP-SYNTAX              octetString.&id
 *   LDAP-NAME                {"tagAfi"}
 *   ID                       id-at-tagAfi }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const tagAfi: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&equality-match": octetStringMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": octetString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_tagAfi /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary EpcFormat_fields_Item_charField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EpcFormat-fields-Item-charField ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EpcFormat_fields_Item_charField =
    | { characters: INTEGER } /* CHOICE_ALT_ROOT */
    | { maxValue: INTEGER } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_EpcFormat_fields_Item_charField: $.ASN1Decoder<
    EpcFormat_fields_Item_charField
> | null = null;
let _cached_encoder_for_EpcFormat_fields_Item_charField: $.ASN1Encoder<
    EpcFormat_fields_Item_charField
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EpcFormat_fields_Item_charField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EpcFormat_fields_Item_charField} The decoded data structure.
 */
export function _decode_EpcFormat_fields_Item_charField(el: _Element) {
    if (!_cached_decoder_for_EpcFormat_fields_Item_charField) {
        _cached_decoder_for_EpcFormat_fields_Item_charField = $._decode_inextensible_choice<
            EpcFormat_fields_Item_charField
        >({
            "CONTEXT 0": [
                "characters",
                $._decode_explicit<INTEGER>(() => $._decodeInteger),
            ],
            "CONTEXT 1": [
                "maxValue",
                $._decode_explicit<INTEGER>(() => $._decodeInteger),
            ],
        });
    }
    return _cached_decoder_for_EpcFormat_fields_Item_charField(el);
}
/**
 * @summary Encodes a(n) EpcFormat_fields_Item_charField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EpcFormat_fields_Item_charField, encoded as an ASN.1 Element.
 */
export function _encode_EpcFormat_fields_Item_charField(
    value: EpcFormat_fields_Item_charField,
    elGetter: $.ASN1Encoder<EpcFormat_fields_Item_charField>
) {
    if (!_cached_encoder_for_EpcFormat_fields_Item_charField) {
        _cached_encoder_for_EpcFormat_fields_Item_charField = $._encode_choice<
            EpcFormat_fields_Item_charField
        >(
            {
                characters: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInteger,
                    $.BER
                ),
                maxValue: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => $._encodeInteger,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EpcFormat_fields_Item_charField(value, elGetter);
}

/**
 * @summary EpcFormat_fields_Item_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EpcFormat-fields-Item-result ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_EpcFormat_fields_Item_result {
    numericPad = 0,
    numeric = 1,
    alpha7bits = 2,
}
/**
 * @summary EpcFormat_fields_Item_result
 */
export type EpcFormat_fields_Item_result = _enum_for_EpcFormat_fields_Item_result;
/**
 * @summary EpcFormat_fields_Item_result
 * @constant
 */
export const EpcFormat_fields_Item_result = _enum_for_EpcFormat_fields_Item_result;
/**
 * @summary EpcFormat_fields_Item_result_numericPad
 * @constant
 * @type {number}
 */
export const EpcFormat_fields_Item_result_numericPad: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.numericPad; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary EpcFormat_fields_Item_result_numeric
 * @constant
 * @type {number}
 */
export const EpcFormat_fields_Item_result_numeric: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.numeric; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary EpcFormat_fields_Item_result_alpha7bits
 * @constant
 * @type {number}
 */
export const EpcFormat_fields_Item_result_alpha7bits: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.alpha7bits; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_EpcFormat_fields_Item_result: $.ASN1Decoder<
    EpcFormat_fields_Item_result
> | null = null;
let _cached_encoder_for_EpcFormat_fields_Item_result: $.ASN1Encoder<
    EpcFormat_fields_Item_result
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EpcFormat_fields_Item_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EpcFormat_fields_Item_result} The decoded data structure.
 */
export function _decode_EpcFormat_fields_Item_result(el: _Element) {
    if (!_cached_decoder_for_EpcFormat_fields_Item_result) {
        _cached_decoder_for_EpcFormat_fields_Item_result = $._decodeEnumerated;
    }
    return _cached_decoder_for_EpcFormat_fields_Item_result(el);
}
/**
 * @summary Encodes a(n) EpcFormat_fields_Item_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EpcFormat_fields_Item_result, encoded as an ASN.1 Element.
 */
export function _encode_EpcFormat_fields_Item_result(
    value: EpcFormat_fields_Item_result,
    elGetter: $.ASN1Encoder<EpcFormat_fields_Item_result>
) {
    if (!_cached_encoder_for_EpcFormat_fields_Item_result) {
        _cached_encoder_for_EpcFormat_fields_Item_result = $._encodeEnumerated;
    }
    return _cached_encoder_for_EpcFormat_fields_Item_result(value, elGetter);
}

/**
 * @summary EpcFormat_fields_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EpcFormat-fields-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class EpcFormat_fields_Item {
    constructor(
        /**
         * @summary `bits`.
         * @public
         * @readonly
         */
        readonly bits: INTEGER,
        /**
         * @summary `charField`.
         * @public
         * @readonly
         */
        readonly charField: EpcFormat_fields_Item_charField,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: OPTIONAL<EpcFormat_fields_Item_result>
    ) {}

    /**
     * @summary Restructures an object into a EpcFormat_fields_Item
     * @description
     *
     * This takes an `object` and converts it to a `EpcFormat_fields_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EpcFormat_fields_Item`.
     * @returns {EpcFormat_fields_Item}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof EpcFormat_fields_Item]: EpcFormat_fields_Item[_K] }
        >
    ): EpcFormat_fields_Item {
        return new EpcFormat_fields_Item(_o.bits, _o.charField, _o.result);
    }

    /**
     * @summary Getter that returns the default value for `result`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_result() {
        return EpcFormat_fields_Item_result_numericPad;
    }
    /**
     * @summary The enum used as the type of the component `result`
     * @public
     * @static
     */

    public static _enum_for_result = _enum_for_EpcFormat_fields_Item_result;
}
/**
 * @summary The Leading Root Component Types of EpcFormat_fields_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EpcFormat_fields_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "bits",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("charField", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "result",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of EpcFormat_fields_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EpcFormat_fields_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of EpcFormat_fields_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EpcFormat_fields_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_EpcFormat_fields_Item: $.ASN1Decoder<
    EpcFormat_fields_Item
> | null = null;
let _cached_encoder_for_EpcFormat_fields_Item: $.ASN1Encoder<
    EpcFormat_fields_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EpcFormat_fields_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EpcFormat_fields_Item} The decoded data structure.
 */
export function _decode_EpcFormat_fields_Item(el: _Element) {
    if (!_cached_decoder_for_EpcFormat_fields_Item) {
        _cached_decoder_for_EpcFormat_fields_Item = function (
            el: _Element
        ): EpcFormat_fields_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let bits!: INTEGER;
            let charField!: EpcFormat_fields_Item_charField;
            let result: OPTIONAL<EpcFormat_fields_Item_result> =
                EpcFormat_fields_Item._default_value_for_result;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                bits: (_el: _Element): void => {
                    bits = $._decodeInteger(_el);
                },
                charField: (_el: _Element): void => {
                    charField = _decode_EpcFormat_fields_Item_charField(_el);
                },
                result: (_el: _Element): void => {
                    result = _decode_EpcFormat_fields_Item_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EpcFormat_fields_Item,
                _extension_additions_list_spec_for_EpcFormat_fields_Item,
                _root_component_type_list_2_spec_for_EpcFormat_fields_Item,
                undefined
            );
            return new EpcFormat_fields_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ bits,
                charField,
                result
            );
        };
    }
    return _cached_decoder_for_EpcFormat_fields_Item(el);
}
/**
 * @summary Encodes a(n) EpcFormat_fields_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EpcFormat_fields_Item, encoded as an ASN.1 Element.
 */
export function _encode_EpcFormat_fields_Item(
    value: EpcFormat_fields_Item,
    elGetter: $.ASN1Encoder<EpcFormat_fields_Item>
) {
    if (!_cached_encoder_for_EpcFormat_fields_Item) {
        _cached_encoder_for_EpcFormat_fields_Item = function (
            value: EpcFormat_fields_Item,
            elGetter: $.ASN1Encoder<EpcFormat_fields_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.bits, $.BER),
                        /* REQUIRED   */ _encode_EpcFormat_fields_Item_charField(
                            value.charField,
                            $.BER
                        ),
                        /* IF_DEFAULT */ value.result === undefined ||
                        $.deepEq(
                            value.result,
                            EpcFormat_fields_Item._default_value_for_result
                        )
                            ? undefined
                            : _encode_EpcFormat_fields_Item_result(
                                  value.result,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EpcFormat_fields_Item(value, elGetter);
}

/**
 * @summary EpcFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EpcFormat ::= SEQUENCE {
 *   fields          SEQUENCE SIZE (1..MAX) OF SEQUENCE {
 *     bits            INTEGER,
 *     charField       CHOICE {
 *       characters  [0] INTEGER,
 *       maxValue    [1] INTEGER },
 *     result          ENUMERATED {
 *       numericPad     (0),
 *       numeric        (1),
 *       alpha7bits     (2) } DEFAULT numericPad },
 *   digitShift  [0] INTEGER                        OPTIONAL,
 *   checkCalc   [1] INTEGER                        OPTIONAL,
 *   urnPrefix       UTF8String                     OPTIONAL }
 * ```
 *
 * @class
 */
export class EpcFormat {
    constructor(
        /**
         * @summary `fields`.
         * @public
         * @readonly
         */
        readonly fields: EpcFormat_fields_Item[],
        /**
         * @summary `digitShift`.
         * @public
         * @readonly
         */
        readonly digitShift: OPTIONAL<INTEGER>,
        /**
         * @summary `checkCalc`.
         * @public
         * @readonly
         */
        readonly checkCalc: OPTIONAL<INTEGER>,
        /**
         * @summary `urnPrefix`.
         * @public
         * @readonly
         */
        readonly urnPrefix: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a EpcFormat
     * @description
     *
     * This takes an `object` and converts it to a `EpcFormat`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EpcFormat`.
     * @returns {EpcFormat}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof EpcFormat]: EpcFormat[_K] }>
    ): EpcFormat {
        return new EpcFormat(
            _o.fields,
            _o.digitShift,
            _o.checkCalc,
            _o.urnPrefix
        );
    }
}
/**
 * @summary The Leading Root Component Types of EpcFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EpcFormat: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "fields",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "digitShift",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "checkCalc",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "urnPrefix",
        true,
        $.hasTag(_TagClass.universal, 12),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of EpcFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EpcFormat: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of EpcFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EpcFormat: $.ComponentSpec[] = [];
let _cached_decoder_for_EpcFormat: $.ASN1Decoder<EpcFormat> | null = null;
let _cached_encoder_for_EpcFormat: $.ASN1Encoder<EpcFormat> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EpcFormat
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EpcFormat} The decoded data structure.
 */
export function _decode_EpcFormat(el: _Element) {
    if (!_cached_decoder_for_EpcFormat) {
        _cached_decoder_for_EpcFormat = function (el: _Element): EpcFormat {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let fields!: EpcFormat_fields_Item[];
            let digitShift: OPTIONAL<INTEGER>;
            let checkCalc: OPTIONAL<INTEGER>;
            let urnPrefix: OPTIONAL<UTF8String>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                fields: (_el: _Element): void => {
                    fields = $._decodeSequenceOf<EpcFormat_fields_Item>(
                        () => _decode_EpcFormat_fields_Item
                    )(_el);
                },
                digitShift: (_el: _Element): void => {
                    digitShift = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                checkCalc: (_el: _Element): void => {
                    checkCalc = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                urnPrefix: (_el: _Element): void => {
                    urnPrefix = $._decodeUTF8String(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EpcFormat,
                _extension_additions_list_spec_for_EpcFormat,
                _root_component_type_list_2_spec_for_EpcFormat,
                undefined
            );
            return new EpcFormat(
                /* SEQUENCE_CONSTRUCTOR_CALL */ fields,
                digitShift,
                checkCalc,
                urnPrefix
            );
        };
    }
    return _cached_decoder_for_EpcFormat(el);
}
/**
 * @summary Encodes a(n) EpcFormat into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EpcFormat, encoded as an ASN.1 Element.
 */
export function _encode_EpcFormat(
    value: EpcFormat,
    elGetter: $.ASN1Encoder<EpcFormat>
) {
    if (!_cached_encoder_for_EpcFormat) {
        _cached_encoder_for_EpcFormat = function (
            value: EpcFormat,
            elGetter: $.ASN1Encoder<EpcFormat>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeSequenceOf<
                            EpcFormat_fields_Item
                        >(() => _encode_EpcFormat_fields_Item, $.BER)(
                            value.fields,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.digitShift === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.digitShift, $.BER),
                        /* IF_ABSENT  */ value.checkCalc === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.checkCalc, $.BER),
                        /* IF_ABSENT  */ value.urnPrefix === undefined
                            ? undefined
                            : $._encodeUTF8String(value.urnPrefix, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EpcFormat(value, elGetter);
}

/**
 * @summary id_asx_epcForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-epcForm                            OBJECT IDENTIFIER ::= {id-asx 6}
 * ```
 *
 * @constant
 */
export const id_asx_epcForm: OBJECT_IDENTIFIER = new _OID([6], id_asx);

/**
 * @summary epcForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * epcForm SYNTAX-NAME ::= {
 *   LDAP-DESC         "EPC Format"
 *   DIRECTORY SYNTAX  EpcFormat
 *   ID                id-asx-epcForm }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const epcForm: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_EpcFormat,
    },
    encoderFor: {
        "&Type": _encode_EpcFormat,
    },
    "&ldapDesc": "EPC Format" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_epcForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_epcFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-epcFormat                           OBJECT IDENTIFIER ::= {id-at 93}
 * ```
 *
 * @constant
 */
export const id_at_epcFormat: OBJECT_IDENTIFIER = new _OID([93], id_at);

/**
 * @summary epcFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * epcFormat  ATTRIBUTE ::= {
 *   WITH SYNTAX              EpcFormat
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              epcForm.&id
 *   LDAP-NAME                {"epcFormat"}
 *   ID                       id-at-epcFormat }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const epcFormat: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_EpcFormat,
    },
    encoderFor: {
        "&Type": _encode_EpcFormat,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": epcForm["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_epcFormat /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_urn
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-urn                                 OBJECT IDENTIFIER ::= {id-at 86}
 * ```
 *
 * @constant
 */
export const id_at_urn: OBJECT_IDENTIFIER = new _OID([86], id_at);

/**
 * @summary urn
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * urn ATTRIBUTE ::= {
 *   SUBTYPE OF               uri
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"urn"}
 *   ID                       id-at-urn }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const urn: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": uri /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_urn /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_epcInUrn
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-epcInUrn                            OBJECT IDENTIFIER ::= {id-at 94}
 * ```
 *
 * @constant
 */
export const id_at_epcInUrn: OBJECT_IDENTIFIER = new _OID([94], id_at);

/**
 * @summary epcInUrn
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * epcInUrn ATTRIBUTE ::= {
 *   SUBTYPE OF               urn
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"epcInUrn"}
 *   ID                       id-at-epcInUrn }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const epcInUrn: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": urn /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_epcInUrn /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_ldapUrl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-ldapUrl                             OBJECT IDENTIFIER ::= {id-at 95}
 * ```
 *
 * @constant
 */
export const id_at_ldapUrl: OBJECT_IDENTIFIER = new _OID([95], id_at);

/**
 * @summary ldapUrl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldapUrl ATTRIBUTE ::= {
 *   SUBTYPE OF               url
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"ldapUrl"}
 *   ID                       id-at-ldapUrl }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const ldapUrl: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": url /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_ldapUrl /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary UtmCoordinates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UtmCoordinates ::= SEQUENCE {
 *   zone      PrintableString,
 *   easting   NumericString,
 *   northing  NumericString }
 * ```
 *
 * @class
 */
export class UtmCoordinates {
    constructor(
        /**
         * @summary `zone`.
         * @public
         * @readonly
         */
        readonly zone: PrintableString,
        /**
         * @summary `easting`.
         * @public
         * @readonly
         */
        readonly easting: NumericString,
        /**
         * @summary `northing`.
         * @public
         * @readonly
         */
        readonly northing: NumericString
    ) {}

    /**
     * @summary Restructures an object into a UtmCoordinates
     * @description
     *
     * This takes an `object` and converts it to a `UtmCoordinates`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UtmCoordinates`.
     * @returns {UtmCoordinates}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof UtmCoordinates]: UtmCoordinates[_K] }>
    ): UtmCoordinates {
        return new UtmCoordinates(_o.zone, _o.easting, _o.northing);
    }
}
/**
 * @summary The Leading Root Component Types of UtmCoordinates
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UtmCoordinates: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "zone",
        false,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "easting",
        false,
        $.hasTag(_TagClass.universal, 18),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "northing",
        false,
        $.hasTag(_TagClass.universal, 18),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of UtmCoordinates
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UtmCoordinates: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of UtmCoordinates
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UtmCoordinates: $.ComponentSpec[] = [];
let _cached_decoder_for_UtmCoordinates: $.ASN1Decoder<
    UtmCoordinates
> | null = null;
let _cached_encoder_for_UtmCoordinates: $.ASN1Encoder<
    UtmCoordinates
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UtmCoordinates
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UtmCoordinates} The decoded data structure.
 */
export function _decode_UtmCoordinates(el: _Element) {
    if (!_cached_decoder_for_UtmCoordinates) {
        _cached_decoder_for_UtmCoordinates = function (
            el: _Element
        ): UtmCoordinates {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "UtmCoordinates contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "zone";
            sequence[1].name = "easting";
            sequence[2].name = "northing";
            let zone!: PrintableString;
            let easting!: NumericString;
            let northing!: NumericString;
            zone = $._decodePrintableString(sequence[0]);
            easting = $._decodeNumericString(sequence[1]);
            northing = $._decodeNumericString(sequence[2]);
            return new UtmCoordinates(zone, easting, northing);
        };
    }
    return _cached_decoder_for_UtmCoordinates(el);
}
/**
 * @summary Encodes a(n) UtmCoordinates into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UtmCoordinates, encoded as an ASN.1 Element.
 */
export function _encode_UtmCoordinates(
    value: UtmCoordinates,
    elGetter: $.ASN1Encoder<UtmCoordinates>
) {
    if (!_cached_encoder_for_UtmCoordinates) {
        _cached_encoder_for_UtmCoordinates = function (
            value: UtmCoordinates,
            elGetter: $.ASN1Encoder<UtmCoordinates>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodePrintableString(
                            value.zone,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeNumericString(
                            value.easting,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeNumericString(
                            value.northing,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UtmCoordinates(value, elGetter);
}

/**
 * @summary id_asx_utmCoords
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-utmCoords                          OBJECT IDENTIFIER ::= {id-asx 4}
 * ```
 *
 * @constant
 */
export const id_asx_utmCoords: OBJECT_IDENTIFIER = new _OID([4], id_asx);

/**
 * @summary utmCoords
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * utmCoords SYNTAX-NAME ::= {
 *   LDAP-DESC         "UTM Coordinates"
 *   DIRECTORY SYNTAX  UtmCoordinates
 *   ID                id-asx-utmCoords }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const utmCoords: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_UtmCoordinates,
    },
    encoderFor: {
        "&Type": _encode_UtmCoordinates,
    },
    "&ldapDesc": "UTM Coordinates" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_utmCoords /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_utmCoordinates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-utmCoordinates                      OBJECT IDENTIFIER ::= {id-at 88}
 * ```
 *
 * @constant
 */
export const id_at_utmCoordinates: OBJECT_IDENTIFIER = new _OID([88], id_at);

/**
 * @summary utmCoordinates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * utmCoordinates  ATTRIBUTE ::= {
 *   WITH SYNTAX              UtmCoordinates
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              utmCoords.&id
 *   LDAP-NAME                {"utmCoordinates"}
 *   ID                       id-at-utmCoordinates }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const utmCoordinates: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UtmCoordinates,
    },
    encoderFor: {
        "&Type": _encode_UtmCoordinates,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": utmCoords["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_utmCoordinates /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_tagLocation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-tagLocation                         OBJECT IDENTIFIER ::= {id-at 96}
 * ```
 *
 * @constant
 */
export const id_at_tagLocation: OBJECT_IDENTIFIER = new _OID([96], id_at);

/**
 * @summary tagLocation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tagLocation ATTRIBUTE ::= {
 *   SUBTYPE OF               utmCoordinates
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              utmCoords.&id
 *   LDAP-NAME                {"tagLocation"}
 *   ID                       id-at-tagLocation }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const tagLocation: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": utmCoordinates /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": utmCoords["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_tagLocation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_not_dSAProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not-dSAProblem                         OBJECT IDENTIFIER ::= {id-not 0}
 * ```
 *
 * @constant
 */
export const id_not_dSAProblem: OBJECT_IDENTIFIER = new _OID([0], id_not);

/**
 * @summary dSAProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dSAProblem ATTRIBUTE ::= {
 *   WITH SYNTAX              OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   ID                       id-not-dSAProblem }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const dSAProblem: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_not_dSAProblem /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_not_searchServiceProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not-searchServiceProblem               OBJECT IDENTIFIER ::= {id-not 1}
 * ```
 *
 * @constant
 */
export const id_not_searchServiceProblem: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_not
);

/**
 * @summary searchServiceProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * searchServiceProblem ATTRIBUTE ::= {
 *   WITH SYNTAX              OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   SINGLE VALUE             TRUE
 *   ID                       id-not-searchServiceProblem }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const searchServiceProblem: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_not_searchServiceProblem /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_not_serviceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not-serviceType                        OBJECT IDENTIFIER ::= {id-not 2}
 * ```
 *
 * @constant
 */
export const id_not_serviceType: OBJECT_IDENTIFIER = new _OID([2], id_not);

/**
 * @summary serviceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceType ATTRIBUTE ::= {
 *   WITH SYNTAX              OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   SINGLE VALUE             TRUE
 *   ID                       id-not-serviceType }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const serviceType: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_not_serviceType /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_not_attributeTypeList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not-attributeTypeList                  OBJECT IDENTIFIER ::= {id-not 3}
 * ```
 *
 * @constant
 */
export const id_not_attributeTypeList: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_not
);

/**
 * @summary attributeTypeList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeTypeList ATTRIBUTE ::= {
 *   WITH SYNTAX              OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   ID                       id-not-attributeTypeList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const attributeTypeList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_not_attributeTypeList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_not_matchingRuleList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not-matchingRuleList                   OBJECT IDENTIFIER ::= {id-not 4}
 * ```
 *
 * @constant
 */
export const id_not_matchingRuleList: OBJECT_IDENTIFIER = new _OID([4], id_not);

/**
 * @summary matchingRuleList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * matchingRuleList ATTRIBUTE ::= {
 *   WITH SYNTAX              OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   ID                       id-not-matchingRuleList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const matchingRuleList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_not_matchingRuleList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_not_filterItem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not-filterItem                         OBJECT IDENTIFIER ::= {id-not 5}
 * ```
 *
 * @constant
 */
export const id_not_filterItem: OBJECT_IDENTIFIER = new _OID([5], id_not);

/**
 * @summary filterItem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * filterItem ATTRIBUTE ::= {
 *   WITH SYNTAX              FilterItem
 *   ID                       id-not-filterItem }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const filterItem: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_FilterItem,
    },
    encoderFor: {
        "&Type": _encode_FilterItem,
    },
    "&id": id_not_filterItem /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_not_attributeCombinations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not-attributeCombinations              OBJECT IDENTIFIER ::= {id-not 6}
 * ```
 *
 * @constant
 */
export const id_not_attributeCombinations: OBJECT_IDENTIFIER = new _OID(
    [6],
    id_not
);

/**
 * @summary attributeCombinations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeCombinations ATTRIBUTE ::= {
 *   WITH SYNTAX              AttributeCombination
 *   ID                       id-not-attributeCombinations }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const attributeCombinations: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttributeCombination,
    },
    encoderFor: {
        "&Type": _encode_AttributeCombination,
    },
    "&id": id_not_attributeCombinations /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_not_contextTypeList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not-contextTypeList                    OBJECT IDENTIFIER ::= {id-not 7}
 * ```
 *
 * @constant
 */
export const id_not_contextTypeList: OBJECT_IDENTIFIER = new _OID([7], id_not);

/**
 * @summary contextTypeList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contextTypeList ATTRIBUTE ::= {
 *   WITH SYNTAX              OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   ID                       id-not-contextTypeList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const contextTypeList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_not_contextTypeList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_not_contextList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not-contextList                        OBJECT IDENTIFIER ::= {id-not 8}
 * ```
 *
 * @constant
 */
export const id_not_contextList: OBJECT_IDENTIFIER = new _OID([8], id_not);

/**
 * @summary contextList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contextList ATTRIBUTE ::= {
 *   WITH SYNTAX              ContextAssertion
 *   ID                       id-not-contextList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const contextList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ContextAssertion,
    },
    encoderFor: {
        "&Type": _encode_ContextAssertion,
    },
    "&id": id_not_contextList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_not_contextCombinations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not-contextCombinations                OBJECT IDENTIFIER ::= {id-not 9}
 * ```
 *
 * @constant
 */
export const id_not_contextCombinations: OBJECT_IDENTIFIER = new _OID(
    [9],
    id_not
);

/**
 * @summary contextCombinations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contextCombinations ATTRIBUTE ::= {
 *   WITH SYNTAX              ContextCombination
 *   ID                       id-not-contextCombinations }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const contextCombinations: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ContextCombination,
    },
    encoderFor: {
        "&Type": _encode_ContextCombination,
    },
    "&id": id_not_contextCombinations /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_not_hierarchySelectList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not-hierarchySelectList                OBJECT IDENTIFIER ::= {id-not 10}
 * ```
 *
 * @constant
 */
export const id_not_hierarchySelectList: OBJECT_IDENTIFIER = new _OID(
    [10],
    id_not
);

/**
 * @summary hierarchySelectList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchySelectList ATTRIBUTE ::= {
 *   WITH SYNTAX              HierarchySelections
 *   SINGLE VALUE             TRUE
 *   ID                       id-not-hierarchySelectList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const hierarchySelectList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_HierarchySelections,
    },
    encoderFor: {
        "&Type": _encode_HierarchySelections,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_not_hierarchySelectList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_not_searchControlOptionsList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not-searchControlOptionsList           OBJECT IDENTIFIER ::= {id-not 11}
 * ```
 *
 * @constant
 */
export const id_not_searchControlOptionsList: OBJECT_IDENTIFIER = new _OID(
    [11],
    id_not
);

/**
 * @summary searchControlOptionsList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * searchControlOptionsList ATTRIBUTE ::= {
 *   WITH SYNTAX              SearchControlOptions
 *   SINGLE VALUE             TRUE
 *   ID                       id-not-searchControlOptionsList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const searchControlOptionsList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SearchControlOptions,
    },
    encoderFor: {
        "&Type": _encode_SearchControlOptions,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_not_searchControlOptionsList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_not_serviceControlOptionsList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not-serviceControlOptionsList          OBJECT IDENTIFIER ::= {id-not 12}
 * ```
 *
 * @constant
 */
export const id_not_serviceControlOptionsList: OBJECT_IDENTIFIER = new _OID(
    [12],
    id_not
);

/**
 * @summary serviceControlOptionsList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceControlOptionsList ATTRIBUTE ::= {
 *   WITH SYNTAX              ServiceControlOptions
 *   SINGLE VALUE             TRUE
 *   ID                       id-not-serviceControlOptionsList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const serviceControlOptionsList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ServiceControlOptions,
    },
    encoderFor: {
        "&Type": _encode_ServiceControlOptions,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_not_serviceControlOptionsList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type MRMappings<> = MRMapping[]; // SequenceOfType
let _cached_decoder_for_MRMappings: $.ASN1Decoder<MRMappings> | null = null;
let _cached_encoder_for_MRMappings: $.ASN1Encoder<MRMappings> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MRMappings
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MRMappings} The decoded data structure.
 */
export function _decode_MRMappings(el: _Element) {
    if (!_cached_decoder_for_MRMappings) {
        _cached_decoder_for_MRMappings = $._decodeSequenceOf<MRMapping>(
            () => _decode_MRMapping
        );
    }
    return _cached_decoder_for_MRMappings(el);
}
/**
 * @summary Encodes a(n) MRMappings into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MRMappings, encoded as an ASN.1 Element.
 */
export function _encode_MRMappings(
    value: MRMappings,
    elGetter: $.ASN1Encoder<MRMappings>
) {
    if (!_cached_encoder_for_MRMappings) {
        _cached_encoder_for_MRMappings = $._encodeSequenceOf<MRMapping>(
            () => _encode_MRMapping,
            $.BER
        );
    }
    return _cached_encoder_for_MRMappings(value, elGetter);
}

/**
 * @summary id_not_proposedRelaxation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not-proposedRelaxation                 OBJECT IDENTIFIER ::= {id-not 14}
 * ```
 *
 * @constant
 */
export const id_not_proposedRelaxation: OBJECT_IDENTIFIER = new _OID(
    [14],
    id_not
);

/**
 * @summary proposedRelaxation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * proposedRelaxation ATTRIBUTE ::= {
 *   WITH SYNTAX              MRMappings
 *   ID                       id-not-proposedRelaxation }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const proposedRelaxation: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MRMappings,
    },
    encoderFor: {
        "&Type": _encode_MRMappings,
    },
    "&id": id_not_proposedRelaxation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_not_appliedRelaxation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not-appliedRelaxation                  OBJECT IDENTIFIER ::= {id-not 15}
 * ```
 *
 * @constant
 */
export const id_not_appliedRelaxation: OBJECT_IDENTIFIER = new _OID(
    [15],
    id_not
);

/**
 * @summary appliedRelaxation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * appliedRelaxation ATTRIBUTE ::= {
 *   WITH SYNTAX              OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   ID                       id-not-appliedRelaxation }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const appliedRelaxation: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_not_appliedRelaxation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary PwdResponse_warning
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdResponse-warning ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PwdResponse_warning =
    | { timeleft: INTEGER } /* CHOICE_ALT_ROOT */
    | { graceRemaining: INTEGER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_PwdResponse_warning: $.ASN1Decoder<
    PwdResponse_warning
> | null = null;
let _cached_encoder_for_PwdResponse_warning: $.ASN1Encoder<
    PwdResponse_warning
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PwdResponse_warning
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdResponse_warning} The decoded data structure.
 */
export function _decode_PwdResponse_warning(el: _Element) {
    if (!_cached_decoder_for_PwdResponse_warning) {
        _cached_decoder_for_PwdResponse_warning = $._decode_extensible_choice<
            PwdResponse_warning
        >({
            "CONTEXT 0": [
                "timeleft",
                $._decode_explicit<INTEGER>(() => $._decodeInteger),
            ],
            "CONTEXT 1": [
                "graceRemaining",
                $._decode_explicit<INTEGER>(() => $._decodeInteger),
            ],
        });
    }
    return _cached_decoder_for_PwdResponse_warning(el);
}
/**
 * @summary Encodes a(n) PwdResponse_warning into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdResponse_warning, encoded as an ASN.1 Element.
 */
export function _encode_PwdResponse_warning(
    value: PwdResponse_warning,
    elGetter: $.ASN1Encoder<PwdResponse_warning>
) {
    if (!_cached_encoder_for_PwdResponse_warning) {
        _cached_encoder_for_PwdResponse_warning = $._encode_choice<
            PwdResponse_warning
        >(
            {
                timeleft: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInteger,
                    $.BER
                ),
                graceRemaining: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => $._encodeInteger,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_PwdResponse_warning(value, elGetter);
}

/**
 * @summary PwdResponse_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdResponse-error ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_PwdResponse_error {
    passwordExpired = 0,
    changeAfterReset = 1,
}
/**
 * @summary PwdResponse_error
 */
export type PwdResponse_error = _enum_for_PwdResponse_error | ENUMERATED;
/**
 * @summary PwdResponse_error_passwordExpired
 * @constant
 * @type {number}
 */
export const PwdResponse_error_passwordExpired: PwdResponse_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary PwdResponse_error_changeAfterReset
 * @constant
 * @type {number}
 */
export const PwdResponse_error_changeAfterReset: PwdResponse_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_PwdResponse_error: $.ASN1Decoder<
    PwdResponse_error
> | null = null;
let _cached_encoder_for_PwdResponse_error: $.ASN1Encoder<
    PwdResponse_error
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PwdResponse_error
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdResponse_error} The decoded data structure.
 */
export function _decode_PwdResponse_error(el: _Element) {
    if (!_cached_decoder_for_PwdResponse_error) {
        _cached_decoder_for_PwdResponse_error = $._decodeEnumerated;
    }
    return _cached_decoder_for_PwdResponse_error(el);
}
/**
 * @summary Encodes a(n) PwdResponse_error into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdResponse_error, encoded as an ASN.1 Element.
 */
export function _encode_PwdResponse_error(
    value: PwdResponse_error,
    elGetter: $.ASN1Encoder<PwdResponse_error>
) {
    if (!_cached_encoder_for_PwdResponse_error) {
        _cached_encoder_for_PwdResponse_error = $._encodeEnumerated;
    }
    return _cached_encoder_for_PwdResponse_error(value, elGetter);
}

/**
 * @summary PwdResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdResponse ::= SEQUENCE {
 *   warning CHOICE {
 *     timeleft        [0] INTEGER(0..MAX),
 *     graceRemaining  [1] INTEGER(0..MAX),
 *     ... } OPTIONAL,
 *   error ENUMERATED {
 *     passwordExpired  (0),
 *     changeAfterReset (1),
 *     ... } OPTIONAL}
 * ```
 *
 * @class
 */
export class PwdResponse {
    constructor(
        /**
         * @summary `warning`.
         * @public
         * @readonly
         */
        readonly warning: OPTIONAL<PwdResponse_warning>,
        /**
         * @summary `error`.
         * @public
         * @readonly
         */
        readonly error: OPTIONAL<PwdResponse_error>
    ) {}

    /**
     * @summary Restructures an object into a PwdResponse
     * @description
     *
     * This takes an `object` and converts it to a `PwdResponse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PwdResponse`.
     * @returns {PwdResponse}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof PwdResponse]: PwdResponse[_K] }>
    ): PwdResponse {
        return new PwdResponse(_o.warning, _o.error);
    }

    /**
     * @summary The enum used as the type of the component `error`
     * @public
     * @static
     */

    public static _enum_for_error = _enum_for_PwdResponse_error;
}
/**
 * @summary The Leading Root Component Types of PwdResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PwdResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("warning", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "error",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of PwdResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PwdResponse: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of PwdResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PwdResponse: $.ComponentSpec[] = [];
let _cached_decoder_for_PwdResponse: $.ASN1Decoder<PwdResponse> | null = null;
let _cached_encoder_for_PwdResponse: $.ASN1Encoder<PwdResponse> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PwdResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdResponse} The decoded data structure.
 */
export function _decode_PwdResponse(el: _Element) {
    if (!_cached_decoder_for_PwdResponse) {
        _cached_decoder_for_PwdResponse = function (el: _Element): PwdResponse {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let warning: OPTIONAL<PwdResponse_warning>;
            let error: OPTIONAL<PwdResponse_error>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                warning: (_el: _Element): void => {
                    warning = _decode_PwdResponse_warning(_el);
                },
                error: (_el: _Element): void => {
                    error = _decode_PwdResponse_error(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PwdResponse,
                _extension_additions_list_spec_for_PwdResponse,
                _root_component_type_list_2_spec_for_PwdResponse,
                undefined
            );
            return new PwdResponse(
                /* SEQUENCE_CONSTRUCTOR_CALL */ warning,
                error
            );
        };
    }
    return _cached_decoder_for_PwdResponse(el);
}
/**
 * @summary Encodes a(n) PwdResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdResponse, encoded as an ASN.1 Element.
 */
export function _encode_PwdResponse(
    value: PwdResponse,
    elGetter: $.ASN1Encoder<PwdResponse>
) {
    if (!_cached_encoder_for_PwdResponse) {
        _cached_encoder_for_PwdResponse = function (
            value: PwdResponse,
            elGetter: $.ASN1Encoder<PwdResponse>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.warning === undefined
                            ? undefined
                            : _encode_PwdResponse_warning(value.warning, $.BER),
                        /* IF_ABSENT  */ value.error === undefined
                            ? undefined
                            : _encode_PwdResponse_error(value.error, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PwdResponse(value, elGetter);
}

/**
 * @summary id_not_pwdResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not-pwdResponse                        OBJECT IDENTIFIER ::= {id-not 16}
 * ```
 *
 * @constant
 */
export const id_not_pwdResponse: OBJECT_IDENTIFIER = new _OID([16], id_not);

/**
 * @summary pwdResponseValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdResponseValue ATTRIBUTE ::= {
 *   WITH SYNTAX              PwdResponse
 *   ID                       id-not-pwdResponse }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdResponseValue: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PwdResponse,
    },
    encoderFor: {
        "&Type": _encode_PwdResponse,
    },
    "&id": id_not_pwdResponse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_not_ldapDiagnosticMsg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not-ldapDiagnosticMsg                  OBJECT IDENTIFIER ::= {id-not 17}
 * ```
 *
 * @constant
 */
export const id_not_ldapDiagnosticMsg: OBJECT_IDENTIFIER = new _OID(
    [17],
    id_not
);

/**
 * @summary ldapDiagnosticMsg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldapDiagnosticMsg ATTRIBUTE ::= {
 *   WITH SYNTAX              UTF8String
 *   SINGLE VALUE             TRUE
 *   ID                       id-not-ldapDiagnosticMsg }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const ldapDiagnosticMsg: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeUTF8String,
    },
    encoderFor: {
        "&Type": $._encodeUTF8String,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_not_ldapDiagnosticMsg /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_coat_uid
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-coat-uid                               OBJECT IDENTIFIER ::= {id-coat 1}
 * ```
 *
 * @constant
 */
export const id_coat_uid: OBJECT_IDENTIFIER = new _OID([1], id_coat);

/**
 * @summary uid
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uid ATTRIBUTE ::= {
 *   WITH SYNTAX              UnboundedDirectoryString
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"uid"}
 *   ID                       id-coat-uid }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const uid: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_coat_uid /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_lsx_ia5String
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-ia5String                          OBJECT IDENTIFIER ::= {id-lsx 26}
 * ```
 *
 * @constant
 */
export const id_lsx_ia5String: OBJECT_IDENTIFIER = new _OID([26], id_lsx);

/**
 * @summary ia5String
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ia5String SYNTAX-NAME ::= {
 *   LDAP-DESC         "IA5 String"
 *   DIRECTORY SYNTAX  IA5String
 *   ID                id-lsx-ia5String }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const ia5String: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&ldapDesc": "IA5 String" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_ia5String /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_coat_dc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-coat-dc                                OBJECT IDENTIFIER ::= {id-coat 25}
 * ```
 *
 * @constant
 */
export const id_coat_dc: OBJECT_IDENTIFIER = new _OID([25], id_coat);

/**
 * @summary dc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dc ATTRIBUTE ::= {
 *   WITH SYNTAX              IA5String
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX              ia5String.&id
 *   LDAP-NAME                {"dc"}
 *   ID                       id-coat-dc }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const dc: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_coat_dc /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_mr_caseExactOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-caseExactOrderingMatch              OBJECT IDENTIFIER ::= {id-mr 6}
 * ```
 *
 * @constant
 */
export const id_mr_caseExactOrderingMatch: OBJECT_IDENTIFIER = new _OID(
    [6],
    id_mr
);

/**
 * @summary caseExactOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseExactOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"caseExactOrderingMatch"}
 *   ID           id-mr-caseExactOrderingMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const caseExactOrderingMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&AssertionType": _encode_UnboundedDirectoryString,
    },
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_caseExactOrderingMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_caseExactSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-caseExactSubstringsMatch            OBJECT IDENTIFIER ::= {id-mr 7}
 * ```
 *
 * @constant
 */
export const id_mr_caseExactSubstringsMatch: OBJECT_IDENTIFIER = new _OID(
    [7],
    id_mr
);

/**
 * @summary caseExactSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseExactSubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion -- only the PrintableString choice
 *   LDAP-SYNTAX  substringAssertion.&id
 *   LDAP-NAME    {"caseExactSubstringsMatch"}
 *   ID           id-mr-caseExactSubstringsMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const caseExactSubstringsMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_SubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_SubstringAssertion,
    },
    "&ldapSyntax": substringAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_caseExactSubstringsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_numericStringOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-numericStringOrderingMatch          OBJECT IDENTIFIER ::= {id-mr 9}
 * ```
 *
 * @constant
 */
export const id_mr_numericStringOrderingMatch: OBJECT_IDENTIFIER = new _OID(
    [9],
    id_mr
);

/**
 * @summary numericStringOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * numericStringOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX       NumericString
 *   LDAP-SYNTAX  numericString.&id
 *   LDAP-NAME    {"numericStringOrderingMatch"}
 *   ID           id-mr-numericStringOrderingMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const numericStringOrderingMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeNumericString,
    },
    encoderFor: {
        "&AssertionType": $._encodeNumericString,
    },
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_numericStringOrderingMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_storedPrefixMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-storedPrefixMatch                   OBJECT IDENTIFIER ::= {id-mr 41}
 * ```
 *
 * @constant
 */
export const id_mr_storedPrefixMatch: OBJECT_IDENTIFIER = new _OID([41], id_mr);

/**
 * @summary storedPrefixMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * storedPrefixMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   ID           id-mr-storedPrefixMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const storedPrefixMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&AssertionType": _encode_UnboundedDirectoryString,
    },
    "&id": id_mr_storedPrefixMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_booleanMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-booleanMatch                        OBJECT IDENTIFIER ::= {id-mr 13}
 * ```
 *
 * @constant
 */
export const id_mr_booleanMatch: OBJECT_IDENTIFIER = new _OID([13], id_mr);

/**
 * @summary booleanMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * booleanMatch MATCHING-RULE ::= {
 *   SYNTAX       BOOLEAN
 *   LDAP-SYNTAX  bitString.&id
 *   LDAP-NAME    {"booleanMatch"}
 *   ID           id-mr-booleanMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const booleanMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeBoolean,
    },
    encoderFor: {
        "&AssertionType": $._encodeBoolean,
    },
    "&ldapSyntax": bitString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_booleanMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_integerOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-integerOrderingMatch                OBJECT IDENTIFIER ::= {id-mr 15}
 * ```
 *
 * @constant
 */
export const id_mr_integerOrderingMatch: OBJECT_IDENTIFIER = new _OID(
    [15],
    id_mr
);

/**
 * @summary integerOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * integerOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX       INTEGER
 *   LDAP-SYNTAX  integer.&id
 *   LDAP-NAME    {"integerOrderingMatch"}
 *   ID           id-mr-integerOrderingMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const integerOrderingMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeInteger,
    },
    encoderFor: {
        "&AssertionType": $._encodeInteger,
    },
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_integerOrderingMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_octetStringOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-octetStringOrderingMatch            OBJECT IDENTIFIER ::= {id-mr 18}
 * ```
 *
 * @constant
 */
export const id_mr_octetStringOrderingMatch: OBJECT_IDENTIFIER = new _OID(
    [18],
    id_mr
);

/**
 * @summary octetStringOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * octetStringOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX       OCTET STRING
 *   LDAP-SYNTAX  octetString.&id
 *   LDAP-NAME    {"octetStringOrderingMatch"}
 *   ID           id-mr-octetStringOrderingMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const octetStringOrderingMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeOctetString,
    },
    encoderFor: {
        "&AssertionType": $._encodeOctetString,
    },
    "&ldapSyntax": octetString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_octetStringOrderingMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary OctetSubstringAssertion_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OctetSubstringAssertion-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OctetSubstringAssertion_Item =
    | { initial: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { any_: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { final: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_OctetSubstringAssertion_Item: $.ASN1Decoder<
    OctetSubstringAssertion_Item
> | null = null;
let _cached_encoder_for_OctetSubstringAssertion_Item: $.ASN1Encoder<
    OctetSubstringAssertion_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OctetSubstringAssertion_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OctetSubstringAssertion_Item} The decoded data structure.
 */
export function _decode_OctetSubstringAssertion_Item(el: _Element) {
    if (!_cached_decoder_for_OctetSubstringAssertion_Item) {
        _cached_decoder_for_OctetSubstringAssertion_Item = $._decode_extensible_choice<
            OctetSubstringAssertion_Item
        >({
            "CONTEXT 0": [
                "initial",
                $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString),
            ],
            "CONTEXT 1": [
                "any_",
                $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString),
            ],
            "CONTEXT 2": [
                "final",
                $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString),
            ],
        });
    }
    return _cached_decoder_for_OctetSubstringAssertion_Item(el);
}
/**
 * @summary Encodes a(n) OctetSubstringAssertion_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OctetSubstringAssertion_Item, encoded as an ASN.1 Element.
 */
export function _encode_OctetSubstringAssertion_Item(
    value: OctetSubstringAssertion_Item,
    elGetter: $.ASN1Encoder<OctetSubstringAssertion_Item>
) {
    if (!_cached_encoder_for_OctetSubstringAssertion_Item) {
        _cached_encoder_for_OctetSubstringAssertion_Item = $._encode_choice<
            OctetSubstringAssertion_Item
        >(
            {
                initial: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeOctetString,
                    $.BER
                ),
                any_: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => $._encodeOctetString,
                    $.BER
                ),
                final: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => $._encodeOctetString,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OctetSubstringAssertion_Item(value, elGetter);
}

export type OctetSubstringAssertion<> = OctetSubstringAssertion_Item[]; // SequenceOfType
let _cached_decoder_for_OctetSubstringAssertion: $.ASN1Decoder<
    OctetSubstringAssertion
> | null = null;
let _cached_encoder_for_OctetSubstringAssertion: $.ASN1Encoder<
    OctetSubstringAssertion
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OctetSubstringAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OctetSubstringAssertion} The decoded data structure.
 */
export function _decode_OctetSubstringAssertion(el: _Element) {
    if (!_cached_decoder_for_OctetSubstringAssertion) {
        _cached_decoder_for_OctetSubstringAssertion = $._decodeSequenceOf<
            OctetSubstringAssertion_Item
        >(() => _decode_OctetSubstringAssertion_Item);
    }
    return _cached_decoder_for_OctetSubstringAssertion(el);
}
/**
 * @summary Encodes a(n) OctetSubstringAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OctetSubstringAssertion, encoded as an ASN.1 Element.
 */
export function _encode_OctetSubstringAssertion(
    value: OctetSubstringAssertion,
    elGetter: $.ASN1Encoder<OctetSubstringAssertion>
) {
    if (!_cached_encoder_for_OctetSubstringAssertion) {
        _cached_encoder_for_OctetSubstringAssertion = $._encodeSequenceOf<
            OctetSubstringAssertion_Item
        >(() => _encode_OctetSubstringAssertion_Item, $.BER);
    }
    return _cached_encoder_for_OctetSubstringAssertion(value, elGetter);
}

/**
 * @summary id_mr_octetStringSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-octetStringSubstringsMatch          OBJECT IDENTIFIER ::= {id-mr 19}
 * ```
 *
 * @constant
 */
export const id_mr_octetStringSubstringsMatch: OBJECT_IDENTIFIER = new _OID(
    [19],
    id_mr
);

/**
 * @summary octetStringSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * octetStringSubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX  OctetSubstringAssertion
 *   ID      id-mr-octetStringSubstringsMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const octetStringSubstringsMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_OctetSubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_OctetSubstringAssertion,
    },
    "&id": id_mr_octetStringSubstringsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_uTCTimeMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-uTCTimeMatch                        OBJECT IDENTIFIER ::= {id-mr 25}
 * ```
 *
 * @constant
 */
export const id_mr_uTCTimeMatch: OBJECT_IDENTIFIER = new _OID([25], id_mr);

/**
 * @summary uTCTimeMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uTCTimeMatch MATCHING-RULE ::= {
 *   SYNTAX       UTCTime
 *   ID           id-mr-uTCTimeMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const uTCTimeMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeUTCTime,
    },
    encoderFor: {
        "&AssertionType": $._encodeUTCTime,
    },
    "&id": id_mr_uTCTimeMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_uTCTimeOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-uTCTimeOrderingMatch                OBJECT IDENTIFIER ::= {id-mr 26}
 * ```
 *
 * @constant
 */
export const id_mr_uTCTimeOrderingMatch: OBJECT_IDENTIFIER = new _OID(
    [26],
    id_mr
);

/**
 * @summary uTCTimeOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uTCTimeOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX       UTCTime
 *   ID           id-mr-uTCTimeOrderingMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const uTCTimeOrderingMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeUTCTime,
    },
    encoderFor: {
        "&AssertionType": $._encodeUTCTime,
    },
    "&id": id_mr_uTCTimeOrderingMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lsx_generalizedTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-generalizedTime                    OBJECT IDENTIFIER ::= {id-lsx 24}
 * ```
 *
 * @constant
 */
export const id_lsx_generalizedTime: OBJECT_IDENTIFIER = new _OID([24], id_lsx);

/**
 * @summary generalizedTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * generalizedTime SYNTAX-NAME ::= {
 *   LDAP-DESC         "Generalized Time"
 *   DIRECTORY SYNTAX  GeneralizedTime
 *   ID                id-lsx-generalizedTime }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const generalizedTime: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&Type": $._encodeGeneralizedTime,
    },
    "&ldapDesc": "Generalized Time" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_generalizedTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_generalizedTimeMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-generalizedTimeMatch                OBJECT IDENTIFIER ::= {id-mr 27}
 * ```
 *
 * @constant
 */
export const id_mr_generalizedTimeMatch: OBJECT_IDENTIFIER = new _OID(
    [27],
    id_mr
);

/**
 * @summary generalizedTimeMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * generalizedTimeMatch MATCHING-RULE ::= {
 *   SYNTAX       GeneralizedTime
 *   -- as per 46.3 b) or c) of Rec. ITU-T X.680 | ISO/IEC 8824-1
 *   LDAP-SYNTAX  generalizedTime.&id
 *   LDAP-NAME    {"generalizedTimeMatch"}
 *   ID           id-mr-generalizedTimeMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const generalizedTimeMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&AssertionType": $._encodeGeneralizedTime,
    },
    "&ldapSyntax": generalizedTime["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_generalizedTimeMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_generalizedTimeOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-generalizedTimeOrderingMatch        OBJECT IDENTIFIER ::= {id-mr 28}
 * ```
 *
 * @constant
 */
export const id_mr_generalizedTimeOrderingMatch: OBJECT_IDENTIFIER = new _OID(
    [28],
    id_mr
);

/**
 * @summary generalizedTimeOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * generalizedTimeOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX       GeneralizedTime
 *   -- as per 46.3 b) or c) of Rec. ITU-T X.680 | ISO/IEC 8824-1
 *   LDAP-SYNTAX  generalizedTime.&id
 *   LDAP-NAME    {"generalizedTimeOrderingMatch"}
 *   ID           id-mr-generalizedTimeOrderingMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const generalizedTimeOrderingMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&AssertionType": $._encodeGeneralizedTime,
    },
    "&ldapSyntax": generalizedTime["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_generalizedTimeOrderingMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_systemProposedMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-systemProposedMatch                 OBJECT IDENTIFIER ::= {id-mr 47}
 * ```
 *
 * @constant
 */
export const id_mr_systemProposedMatch: OBJECT_IDENTIFIER = new _OID(
    [47],
    id_mr
);

/**
 * @summary systemProposedMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * systemProposedMatch MATCHING-RULE ::= {
 *   ID  id-mr-systemProposedMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const systemProposedMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": undefined,
    },
    encoderFor: {
        "&AssertionType": undefined,
    },
    "&id": id_mr_systemProposedMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_integerFirstComponentMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-integerFirstComponentMatch          OBJECT IDENTIFIER ::= {id-mr 29}
 * ```
 *
 * @constant
 */
export const id_mr_integerFirstComponentMatch: OBJECT_IDENTIFIER = new _OID(
    [29],
    id_mr
);

/**
 * @summary integerFirstComponentMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * integerFirstComponentMatch MATCHING-RULE ::= {
 *   SYNTAX       INTEGER
 *   LDAP-SYNTAX  integer.&id
 *   LDAP-NAME    {"integerFirstComponentMatch"}
 *   ID           id-mr-integerFirstComponentMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const integerFirstComponentMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeInteger,
    },
    encoderFor: {
        "&AssertionType": $._encodeInteger,
    },
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_integerFirstComponentMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_objectIdentifierFirstComponentMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-objectIdentifierFirstComponentMatch OBJECT IDENTIFIER ::= {id-mr 30}
 * ```
 *
 * @constant
 */
export const id_mr_objectIdentifierFirstComponentMatch: OBJECT_IDENTIFIER = new _OID(
    [30],
    id_mr
);

/**
 * @summary objectIdentifierFirstComponentMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * objectIdentifierFirstComponentMatch MATCHING-RULE ::= {
 *   SYNTAX       OBJECT IDENTIFIER
 *   LDAP-SYNTAX  oid.&id
 *   LDAP-NAME    {"objectIdentifierFirstComponentMatch"}
 *   ID           id-mr-objectIdentifierFirstComponentMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const objectIdentifierFirstComponentMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&AssertionType": $._encodeObjectIdentifier,
    },
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_directoryStringFirstComponentMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-directoryStringFirstComponentMatch  OBJECT IDENTIFIER ::= {id-mr 31}
 * ```
 *
 * @constant
 */
export const id_mr_directoryStringFirstComponentMatch: OBJECT_IDENTIFIER = new _OID(
    [31],
    id_mr
);

/**
 * @summary directoryStringFirstComponentMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryStringFirstComponentMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"directoryStringFirstComponentMatch"}
 *   ID           id-mr-directoryStringFirstComponentMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const directoryStringFirstComponentMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&AssertionType": _encode_UnboundedDirectoryString,
    },
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_directoryStringFirstComponentMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_wordMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-wordMatch                           OBJECT IDENTIFIER ::= {id-mr 32}
 * ```
 *
 * @constant
 */
export const id_mr_wordMatch: OBJECT_IDENTIFIER = new _OID([32], id_mr);

/**
 * @summary wordMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * wordMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"wordMatch"}
 *   ID           id-mr-wordMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const wordMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&AssertionType": _encode_UnboundedDirectoryString,
    },
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_wordMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_keywordMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-keywordMatch                        OBJECT IDENTIFIER ::= {id-mr 33}
 * ```
 *
 * @constant
 */
export const id_mr_keywordMatch: OBJECT_IDENTIFIER = new _OID([33], id_mr);

/**
 * @summary keywordMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * keywordMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"keywordMatch"}
 *   ID           id-mr-keywordMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const keywordMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&AssertionType": _encode_UnboundedDirectoryString,
    },
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_keywordMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_generalWordMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-generalWordMatch                    OBJECT IDENTIFIER ::= {id-mr 48}
 * ```
 *
 * @constant
 */
export const id_mr_generalWordMatch: OBJECT_IDENTIFIER = new _OID([48], id_mr);

/**
 * @summary generalWordMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * generalWordMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion
 *   ID           id-mr-generalWordMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const generalWordMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_SubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_SubstringAssertion,
    },
    "&id": id_mr_generalWordMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary SequenceMatchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceMatchType ::= ENUMERATED {
 *   sequenceExact                  (0),
 *   sequenceDeletion               (1),
 *   sequenceRestrictedDeletion     (2),
 *   sequencePermutation            (3),
 *   sequencePermutationAndDeletion (4),
 *   sequenceProviderDefined        (5),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_SequenceMatchType {
    sequenceExact = 0,
    sequenceDeletion = 1,
    sequenceRestrictedDeletion = 2,
    sequencePermutation = 3,
    sequencePermutationAndDeletion = 4,
    sequenceProviderDefined = 5,
}
/**
 * @summary SequenceMatchType
 */
export type SequenceMatchType = _enum_for_SequenceMatchType | ENUMERATED;
/**
 * @summary SequenceMatchType_sequenceExact
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequenceExact: SequenceMatchType = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary SequenceMatchType_sequenceDeletion
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequenceDeletion: SequenceMatchType = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary SequenceMatchType_sequenceRestrictedDeletion
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequenceRestrictedDeletion: SequenceMatchType = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary SequenceMatchType_sequencePermutation
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequencePermutation: SequenceMatchType = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary SequenceMatchType_sequencePermutationAndDeletion
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequencePermutationAndDeletion: SequenceMatchType = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary SequenceMatchType_sequenceProviderDefined
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequenceProviderDefined: SequenceMatchType = 5; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_SequenceMatchType: $.ASN1Decoder<
    SequenceMatchType
> | null = null;
let _cached_encoder_for_SequenceMatchType: $.ASN1Encoder<
    SequenceMatchType
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SequenceMatchType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SequenceMatchType} The decoded data structure.
 */
export function _decode_SequenceMatchType(el: _Element) {
    if (!_cached_decoder_for_SequenceMatchType) {
        _cached_decoder_for_SequenceMatchType = $._decodeEnumerated;
    }
    return _cached_decoder_for_SequenceMatchType(el);
}
/**
 * @summary Encodes a(n) SequenceMatchType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceMatchType, encoded as an ASN.1 Element.
 */
export function _encode_SequenceMatchType(
    value: SequenceMatchType,
    elGetter: $.ASN1Encoder<SequenceMatchType>
) {
    if (!_cached_encoder_for_SequenceMatchType) {
        _cached_encoder_for_SequenceMatchType = $._encodeEnumerated;
    }
    return _cached_encoder_for_SequenceMatchType(value, elGetter);
}

/**
 * @summary id_cat_sequenceMatchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cat-sequenceMatchType                  OBJECT IDENTIFIER ::= {id-cat 1}
 * ```
 *
 * @constant
 */
export const id_cat_sequenceMatchType: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_cat
);

/**
 * @summary sequenceMatchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sequenceMatchType ATTRIBUTE ::= {
 *   WITH SYNTAX   SequenceMatchType
 *   SINGLE VALUE  TRUE
 *   ID            id-cat-sequenceMatchType }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const sequenceMatchType: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SequenceMatchType,
    },
    encoderFor: {
        "&Type": _encode_SequenceMatchType,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_cat_sequenceMatchType /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary WordMatchTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WordMatchTypes ::= ENUMERATED {
 *   wordExact           (0),
 *   wordTruncated       (1),
 *   wordPhonetic        (2),
 *   wordProviderDefined (3),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_WordMatchTypes {
    wordExact = 0,
    wordTruncated = 1,
    wordPhonetic = 2,
    wordProviderDefined = 3,
}
/**
 * @summary WordMatchTypes
 */
export type WordMatchTypes = _enum_for_WordMatchTypes | ENUMERATED;
/**
 * @summary WordMatchTypes_wordExact
 * @constant
 * @type {number}
 */
export const WordMatchTypes_wordExact: WordMatchTypes = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WordMatchTypes_wordTruncated
 * @constant
 * @type {number}
 */
export const WordMatchTypes_wordTruncated: WordMatchTypes = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WordMatchTypes_wordPhonetic
 * @constant
 * @type {number}
 */
export const WordMatchTypes_wordPhonetic: WordMatchTypes = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WordMatchTypes_wordProviderDefined
 * @constant
 * @type {number}
 */
export const WordMatchTypes_wordProviderDefined: WordMatchTypes = 3; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_WordMatchTypes: $.ASN1Decoder<
    WordMatchTypes
> | null = null;
let _cached_encoder_for_WordMatchTypes: $.ASN1Encoder<
    WordMatchTypes
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) WordMatchTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WordMatchTypes} The decoded data structure.
 */
export function _decode_WordMatchTypes(el: _Element) {
    if (!_cached_decoder_for_WordMatchTypes) {
        _cached_decoder_for_WordMatchTypes = $._decodeEnumerated;
    }
    return _cached_decoder_for_WordMatchTypes(el);
}
/**
 * @summary Encodes a(n) WordMatchTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WordMatchTypes, encoded as an ASN.1 Element.
 */
export function _encode_WordMatchTypes(
    value: WordMatchTypes,
    elGetter: $.ASN1Encoder<WordMatchTypes>
) {
    if (!_cached_encoder_for_WordMatchTypes) {
        _cached_encoder_for_WordMatchTypes = $._encodeEnumerated;
    }
    return _cached_encoder_for_WordMatchTypes(value, elGetter);
}

/**
 * @summary id_cat_wordMatchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cat-wordMatchType                      OBJECT IDENTIFIER ::= {id-cat 2}
 * ```
 *
 * @constant
 */
export const id_cat_wordMatchType: OBJECT_IDENTIFIER = new _OID([2], id_cat);

/**
 * @summary wordMatchTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * wordMatchTypes ATTRIBUTE ::= {
 *   WITH SYNTAX   WordMatchTypes
 *   SINGLE VALUE  TRUE
 *   ID            id-cat-wordMatchType }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const wordMatchTypes: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_WordMatchTypes,
    },
    encoderFor: {
        "&Type": _encode_WordMatchTypes,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_cat_wordMatchType /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary CharacterMatchTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CharacterMatchTypes ::= ENUMERATED {
 *   characterExact      (0),
 *   characterCaseIgnore (1),
 *   characterMapped     (2),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_CharacterMatchTypes {
    characterExact = 0,
    characterCaseIgnore = 1,
    characterMapped = 2,
}
/**
 * @summary CharacterMatchTypes
 */
export type CharacterMatchTypes = _enum_for_CharacterMatchTypes | ENUMERATED;
/**
 * @summary CharacterMatchTypes_characterExact
 * @constant
 * @type {number}
 */
export const CharacterMatchTypes_characterExact: CharacterMatchTypes = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CharacterMatchTypes_characterCaseIgnore
 * @constant
 * @type {number}
 */
export const CharacterMatchTypes_characterCaseIgnore: CharacterMatchTypes = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CharacterMatchTypes_characterMapped
 * @constant
 * @type {number}
 */
export const CharacterMatchTypes_characterMapped: CharacterMatchTypes = 2; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_CharacterMatchTypes: $.ASN1Decoder<
    CharacterMatchTypes
> | null = null;
let _cached_encoder_for_CharacterMatchTypes: $.ASN1Encoder<
    CharacterMatchTypes
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CharacterMatchTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CharacterMatchTypes} The decoded data structure.
 */
export function _decode_CharacterMatchTypes(el: _Element) {
    if (!_cached_decoder_for_CharacterMatchTypes) {
        _cached_decoder_for_CharacterMatchTypes = $._decodeEnumerated;
    }
    return _cached_decoder_for_CharacterMatchTypes(el);
}
/**
 * @summary Encodes a(n) CharacterMatchTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CharacterMatchTypes, encoded as an ASN.1 Element.
 */
export function _encode_CharacterMatchTypes(
    value: CharacterMatchTypes,
    elGetter: $.ASN1Encoder<CharacterMatchTypes>
) {
    if (!_cached_encoder_for_CharacterMatchTypes) {
        _cached_encoder_for_CharacterMatchTypes = $._encodeEnumerated;
    }
    return _cached_encoder_for_CharacterMatchTypes(value, elGetter);
}

/**
 * @summary id_cat_characterMatchTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cat-characterMatchTypes                OBJECT IDENTIFIER ::= {id-cat 3}
 * ```
 *
 * @constant
 */
export const id_cat_characterMatchTypes: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_cat
);

/**
 * @summary characterMatchTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * characterMatchTypes ATTRIBUTE ::= {
 *   WITH SYNTAX   CharacterMatchTypes
 *   SINGLE VALUE  TRUE
 *   ID            id-cat-characterMatchTypes }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const characterMatchTypes: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CharacterMatchTypes,
    },
    encoderFor: {
        "&Type": _encode_CharacterMatchTypes,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_cat_characterMatchTypes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_cat_selectedContexts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cat-selectedContexts                   OBJECT IDENTIFIER ::= {id-cat 4}
 * ```
 *
 * @constant
 */
export const id_cat_selectedContexts: OBJECT_IDENTIFIER = new _OID([4], id_cat);

/**
 * @summary selectedContexts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * selectedContexts ATTRIBUTE ::= {
 *   WITH SYNTAX  ContextAssertion
 *   ID           id-cat-selectedContexts }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const selectedContexts: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ContextAssertion,
    },
    encoderFor: {
        "&Type": _encode_ContextAssertion,
    },
    "&id": id_cat_selectedContexts /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_mr_approximateStringMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-approximateStringMatch              OBJECT IDENTIFIER ::= {id-mr 49}
 * ```
 *
 * @constant
 */
export const id_mr_approximateStringMatch: OBJECT_IDENTIFIER = new _OID(
    [49],
    id_mr
);

/**
 * @summary approximateStringMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * approximateStringMatch MATCHING-RULE ::= {
 *   ID      id-mr-approximateStringMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const approximateStringMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": undefined,
    },
    encoderFor: {
        "&AssertionType": undefined,
    },
    "&id": id_mr_approximateStringMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_ignoreIfAbsentMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-ignoreIfAbsentMatch                 OBJECT IDENTIFIER ::= {id-mr 50}
 * ```
 *
 * @constant
 */
export const id_mr_ignoreIfAbsentMatch: OBJECT_IDENTIFIER = new _OID(
    [50],
    id_mr
);

/**
 * @summary ignoreIfAbsentMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ignoreIfAbsentMatch MATCHING-RULE ::= {
 *   ID      id-mr-ignoreIfAbsentMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const ignoreIfAbsentMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": undefined,
    },
    encoderFor: {
        "&AssertionType": undefined,
    },
    "&id": id_mr_ignoreIfAbsentMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_nullMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-nullMatch                           OBJECT IDENTIFIER ::= {id-mr 51}
 * ```
 *
 * @constant
 */
export const id_mr_nullMatch: OBJECT_IDENTIFIER = new _OID([51], id_mr);

/**
 * @summary nullMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nullMatch MATCHING-RULE ::= {
 *   ID      id-mr-nullMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const nullMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": undefined,
    },
    encoderFor: {
        "&AssertionType": undefined,
    },
    "&id": id_mr_nullMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary ZONAL_MATCHING
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ZONAL-MATCHING ::= MAPPING-BASED-MATCHING{ZonalSelect, TRUE, ZonalResult, zonalMatch.&id}
 * ```
 *
 * @interface
 */
export type ZONAL_MATCHING = MAPPING_BASED_MATCHING<ZonalSelect, ZonalResult>;

export type ZonalSelect<> = AttributeType[]; // SequenceOfType
let _cached_decoder_for_ZonalSelect: $.ASN1Decoder<ZonalSelect> | null = null;
let _cached_encoder_for_ZonalSelect: $.ASN1Encoder<ZonalSelect> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ZonalSelect
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ZonalSelect} The decoded data structure.
 */
export function _decode_ZonalSelect(el: _Element) {
    if (!_cached_decoder_for_ZonalSelect) {
        _cached_decoder_for_ZonalSelect = $._decodeSequenceOf<AttributeType>(
            () => _decode_AttributeType
        );
    }
    return _cached_decoder_for_ZonalSelect(el);
}
/**
 * @summary Encodes a(n) ZonalSelect into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ZonalSelect, encoded as an ASN.1 Element.
 */
export function _encode_ZonalSelect(
    value: ZonalSelect,
    elGetter: $.ASN1Encoder<ZonalSelect>
) {
    if (!_cached_encoder_for_ZonalSelect) {
        _cached_encoder_for_ZonalSelect = $._encodeSequenceOf<AttributeType>(
            () => _encode_AttributeType,
            $.BER
        );
    }
    return _cached_encoder_for_ZonalSelect(value, elGetter);
}

/**
 * @summary ZonalResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ZonalResult ::= ENUMERATED {
 *   cannot-select-mapping (0),
 *   zero-mappings         (2),
 *   multiple-mappings     (3),
 *    ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ZonalResult {
    cannot_select_mapping = 0,
    zero_mappings = 2,
    multiple_mappings = 3,
}
/**
 * @summary ZonalResult
 */
export type ZonalResult = _enum_for_ZonalResult | ENUMERATED;
/**
 * @summary ZonalResult_cannot_select_mapping
 * @constant
 * @type {number}
 */
export const ZonalResult_cannot_select_mapping: ZonalResult = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ZonalResult_zero_mappings
 * @constant
 * @type {number}
 */
export const ZonalResult_zero_mappings: ZonalResult = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ZonalResult_multiple_mappings
 * @constant
 * @type {number}
 */
export const ZonalResult_multiple_mappings: ZonalResult = 3; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_ZonalResult: $.ASN1Decoder<ZonalResult> | null = null;
let _cached_encoder_for_ZonalResult: $.ASN1Encoder<ZonalResult> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ZonalResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ZonalResult} The decoded data structure.
 */
export function _decode_ZonalResult(el: _Element) {
    if (!_cached_decoder_for_ZonalResult) {
        _cached_decoder_for_ZonalResult = $._decodeEnumerated;
    }
    return _cached_decoder_for_ZonalResult(el);
}
/**
 * @summary Encodes a(n) ZonalResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ZonalResult, encoded as an ASN.1 Element.
 */
export function _encode_ZonalResult(
    value: ZonalResult,
    elGetter: $.ASN1Encoder<ZonalResult>
) {
    if (!_cached_encoder_for_ZonalResult) {
        _cached_encoder_for_ZonalResult = $._encodeEnumerated;
    }
    return _cached_encoder_for_ZonalResult(value, elGetter);
}

/**
 * @summary MultipleMatchingLocalities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MultipleMatchingLocalities ::= SEQUENCE {
 *   matchingRuleUsed  MATCHING-RULE.&id OPTIONAL,
 *   attributeList     SEQUENCE OF AttributeValueAssertion,
 *   ... }
 * ```
 *
 * @class
 */
export class MultipleMatchingLocalities {
    constructor(
        /**
         * @summary `matchingRuleUsed`.
         * @public
         * @readonly
         */
        readonly matchingRuleUsed: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `attributeList`.
         * @public
         * @readonly
         */
        readonly attributeList: AttributeValueAssertion[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MultipleMatchingLocalities
     * @description
     *
     * This takes an `object` and converts it to a `MultipleMatchingLocalities`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MultipleMatchingLocalities`.
     * @returns {MultipleMatchingLocalities}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof MultipleMatchingLocalities]: MultipleMatchingLocalities[_K];
            }
        >
    ): MultipleMatchingLocalities {
        return new MultipleMatchingLocalities(
            _o.matchingRuleUsed,
            _o.attributeList,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of MultipleMatchingLocalities
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MultipleMatchingLocalities: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "matchingRuleUsed",
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributeList",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of MultipleMatchingLocalities
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MultipleMatchingLocalities: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of MultipleMatchingLocalities
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MultipleMatchingLocalities: $.ComponentSpec[] = [];
let _cached_decoder_for_MultipleMatchingLocalities: $.ASN1Decoder<
    MultipleMatchingLocalities
> | null = null;
let _cached_encoder_for_MultipleMatchingLocalities: $.ASN1Encoder<
    MultipleMatchingLocalities
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MultipleMatchingLocalities
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleMatchingLocalities} The decoded data structure.
 */
export function _decode_MultipleMatchingLocalities(el: _Element) {
    if (!_cached_decoder_for_MultipleMatchingLocalities) {
        _cached_decoder_for_MultipleMatchingLocalities = function (
            el: _Element
        ): MultipleMatchingLocalities {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let matchingRuleUsed: OPTIONAL<OBJECT_IDENTIFIER>;
            let attributeList!: AttributeValueAssertion[];
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                matchingRuleUsed: (_el: _Element): void => {
                    matchingRuleUsed = $._decodeObjectIdentifier(_el);
                },
                attributeList: (_el: _Element): void => {
                    attributeList = $._decodeSequenceOf<
                        AttributeValueAssertion
                    >(() => _decode_AttributeValueAssertion)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MultipleMatchingLocalities,
                _extension_additions_list_spec_for_MultipleMatchingLocalities,
                _root_component_type_list_2_spec_for_MultipleMatchingLocalities,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new MultipleMatchingLocalities(
                /* SEQUENCE_CONSTRUCTOR_CALL */ matchingRuleUsed,
                attributeList,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_MultipleMatchingLocalities(el);
}
/**
 * @summary Encodes a(n) MultipleMatchingLocalities into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleMatchingLocalities, encoded as an ASN.1 Element.
 */
export function _encode_MultipleMatchingLocalities(
    value: MultipleMatchingLocalities,
    elGetter: $.ASN1Encoder<MultipleMatchingLocalities>
) {
    if (!_cached_encoder_for_MultipleMatchingLocalities) {
        _cached_encoder_for_MultipleMatchingLocalities = function (
            value: MultipleMatchingLocalities,
            elGetter: $.ASN1Encoder<MultipleMatchingLocalities>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.matchingRuleUsed ===
                            undefined
                                ? undefined
                                : $._encodeObjectIdentifier(
                                      value.matchingRuleUsed,
                                      $.BER
                                  ),
                            /* REQUIRED   */ $._encodeSequenceOf<
                                AttributeValueAssertion
                            >(() => _encode_AttributeValueAssertion, $.BER)(
                                value.attributeList,
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
    return _cached_encoder_for_MultipleMatchingLocalities(value, elGetter);
}

/**
 * @summary id_not_multipleMatchingLocalities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not-multipleMatchingLocalities         OBJECT IDENTIFIER ::= {id-not 13}
 * ```
 *
 * @constant
 */
export const id_not_multipleMatchingLocalities: OBJECT_IDENTIFIER = new _OID(
    [13],
    id_not
);

/**
 * @summary multipleMatchingLocalities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * multipleMatchingLocalities ATTRIBUTE ::= {
 *   WITH SYNTAX              MultipleMatchingLocalities
 *   ID                       id-not-multipleMatchingLocalities }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const multipleMatchingLocalities: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MultipleMatchingLocalities,
    },
    encoderFor: {
        "&Type": _encode_MultipleMatchingLocalities,
    },
    "&id": id_not_multipleMatchingLocalities /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_mr_zonalMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-zonalMatch                          OBJECT IDENTIFIER ::= {id-mr 52}
 * ```
 *
 * @constant
 */
export const id_mr_zonalMatch: OBJECT_IDENTIFIER = new _OID([52], id_mr);

/**
 * @summary zonalMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * zonalMatch MATCHING-RULE ::= {
 *   UNIQUE-MATCH-INDICATOR  multipleMatchingLocalities
 *   ID                      id-mr-zonalMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const zonalMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": undefined,
    },
    encoderFor: {
        "&AssertionType": undefined,
    },
    "&uniqueMatchIndicator": multipleMatchingLocalities /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_zonalMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lmr_caseExactIA5Match
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lmr-caseExactIA5Match                  OBJECT IDENTIFIER ::= {id-lmr 1}
 * ```
 *
 * @constant
 */
export const id_lmr_caseExactIA5Match: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_lmr
);

/**
 * @summary caseExactIA5Match
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseExactIA5Match MATCHING-RULE ::= {
 *   SYNTAX       IA5String
 *   LDAP-SYNTAX  ia5String.&id
 *   LDAP-NAME    {"caseExactIA5Match"}
 *   ID           id-lmr-caseExactIA5Match }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const caseExactIA5Match: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeIA5String,
    },
    encoderFor: {
        "&AssertionType": $._encodeIA5String,
    },
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_lmr_caseExactIA5Match /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lmr_caseIgnoreIA5Match
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lmr-caseIgnoreIA5Match                 OBJECT IDENTIFIER ::= {id-lmr 2}
 * ```
 *
 * @constant
 */
export const id_lmr_caseIgnoreIA5Match: OBJECT_IDENTIFIER = new _OID(
    [2],
    id_lmr
);

/**
 * @summary caseIgnoreIA5Match
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseIgnoreIA5Match MATCHING-RULE ::= {
 *   SYNTAX       IA5String
 *   LDAP-SYNTAX  ia5String.&id
 *   LDAP-NAME    {"caseIgnoreIA5Match"}
 *   ID           id-lmr-caseIgnoreIA5Match }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const caseIgnoreIA5Match: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeIA5String,
    },
    encoderFor: {
        "&AssertionType": $._encodeIA5String,
    },
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_lmr_caseIgnoreIA5Match /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary caseIgnoreIA5SubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseIgnoreIA5SubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion
 *   LDAP-SYNTAX  substringAssertion.&id
 *   LDAP-NAME    {"caseIgnoreIA5SubstringsMatch"}
 *   ID           id-lmr-caseIgnoreIA5Match }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const caseIgnoreIA5SubstringsMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_SubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_SubstringAssertion,
    },
    "&ldapSyntax": substringAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_lmr_caseIgnoreIA5Match /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lsx_attributeTypeDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-attributeTypeDescription           OBJECT IDENTIFIER ::= {id-lsx 3}
 * ```
 *
 * @constant
 */
export const id_lsx_attributeTypeDescription: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_lsx
);

/**
 * @summary attributeTypeDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeTypeDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "Attribute Type Description"
 *   DIRECTORY SYNTAX  AttributeTypeDescription
 *   ID                id-lsx-attributeTypeDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const attributeTypeDescription: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_AttributeTypeDescription,
    },
    encoderFor: {
        "&Type": _encode_AttributeTypeDescription,
    },
    "&ldapDesc": "Attribute Type Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_attributeTypeDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lsx_boolean
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-boolean                            OBJECT IDENTIFIER ::= {id-lsx 7}
 * ```
 *
 * @constant
 */
export const id_lsx_boolean: OBJECT_IDENTIFIER = new _OID([7], id_lsx);

/**
 * @summary boolean_
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * boolean SYNTAX-NAME ::= {
 *   LDAP-DESC         "Boolean"
 *   DIRECTORY SYNTAX  BOOLEAN
 *   ID                id-lsx-boolean }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const boolean_: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeBoolean,
    },
    encoderFor: {
        "&Type": $._encodeBoolean,
    },
    "&ldapDesc": "Boolean" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_boolean /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lsx_dITContentRuleDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-dITContentRuleDescription          OBJECT IDENTIFIER ::= {id-lsx 16}
 * ```
 *
 * @constant
 */
export const id_lsx_dITContentRuleDescription: OBJECT_IDENTIFIER = new _OID(
    [16],
    id_lsx
);

/**
 * @summary dITContentRuleDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dITContentRuleDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "DIT Content Rule Description"
 *   DIRECTORY SYNTAX  DITContentRuleDescription
 *   ID                id-lsx-dITContentRuleDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const dITContentRuleDescription: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_DITContentRuleDescription,
    },
    encoderFor: {
        "&Type": _encode_DITContentRuleDescription,
    },
    "&ldapDesc": "DIT Content Rule Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_dITContentRuleDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lsx_dITStructureRuleDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-dITStructureRuleDescription        OBJECT IDENTIFIER ::= {id-lsx 17}
 * ```
 *
 * @constant
 */
export const id_lsx_dITStructureRuleDescription: OBJECT_IDENTIFIER = new _OID(
    [17],
    id_lsx
);

/**
 * @summary dITStructureRuleDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dITStructureRuleDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "DIT StructureRule Description"
 *   DIRECTORY SYNTAX  DITStructureRuleDescription
 *   ID                id-lsx-dITStructureRuleDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const dITStructureRuleDescription: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_DITStructureRuleDescription,
    },
    encoderFor: {
        "&Type": _encode_DITStructureRuleDescription,
    },
    "&ldapDesc": "DIT StructureRule Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_dITStructureRuleDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lsx_fax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-fax                                OBJECT IDENTIFIER ::= {id-lsx 23}
 * ```
 *
 * @constant
 */
export const id_lsx_fax: OBJECT_IDENTIFIER = new _OID([23], id_lsx);

/**
 * @summary fax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * fax SYNTAX-NAME ::= {
 *   LDAP-DESC         "Fax"
 *   DIRECTORY SYNTAX  NULL
 *   ID                id-lsx-fax }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const fax: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&ldapDesc": "Fax" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_fax /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lsx_jpeg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-jpeg                               OBJECT IDENTIFIER ::= {id-lsx 28}
 * ```
 *
 * @constant
 */
export const id_lsx_jpeg: OBJECT_IDENTIFIER = new _OID([28], id_lsx);

/**
 * @summary jpeg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * jpeg SYNTAX-NAME ::= {
 *   LDAP-DESC         "JPEG"
 *   DIRECTORY SYNTAX  NULL
 *   ID                id-lsx-jpeg }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const jpeg: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&ldapDesc": "JPEG" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_jpeg /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lsx_matchingRuleDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-matchingRuleDescription            OBJECT IDENTIFIER ::= {id-lsx 30}
 * ```
 *
 * @constant
 */
export const id_lsx_matchingRuleDescription: OBJECT_IDENTIFIER = new _OID(
    [30],
    id_lsx
);

/**
 * @summary matchingRuleDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * matchingRuleDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "Matching Rule Description"
 *   DIRECTORY SYNTAX  MatchingRuleDescription
 *   ID                id-lsx-matchingRuleDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const matchingRuleDescription: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_MatchingRuleDescription,
    },
    encoderFor: {
        "&Type": _encode_MatchingRuleDescription,
    },
    "&ldapDesc": "Matching Rule Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_matchingRuleDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lsx_matchingRuleUseDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-matchingRuleUseDescription         OBJECT IDENTIFIER ::= {id-lsx 31}
 * ```
 *
 * @constant
 */
export const id_lsx_matchingRuleUseDescription: OBJECT_IDENTIFIER = new _OID(
    [31],
    id_lsx
);

/**
 * @summary matchingRuleUseDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * matchingRuleUseDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "Matching Rule Use Description"
 *   DIRECTORY SYNTAX  MatchingRuleUseDescription
 *   ID                id-lsx-matchingRuleUseDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const matchingRuleUseDescription: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_MatchingRuleUseDescription,
    },
    encoderFor: {
        "&Type": _encode_MatchingRuleUseDescription,
    },
    "&ldapDesc": "Matching Rule Use Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_matchingRuleUseDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lsx_nameFormDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-nameFormDescription                OBJECT IDENTIFIER ::= {id-lsx 35}
 * ```
 *
 * @constant
 */
export const id_lsx_nameFormDescription: OBJECT_IDENTIFIER = new _OID(
    [35],
    id_lsx
);

/**
 * @summary nameFormDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nameFormDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "Name Form Description"
 *   DIRECTORY SYNTAX  NameFormDescription
 *   ID                id-lsx-nameFormDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const nameFormDescription: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_NameFormDescription,
    },
    encoderFor: {
        "&Type": _encode_NameFormDescription,
    },
    "&ldapDesc": "Name Form Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_nameFormDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lsx_objectClassDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-objectClassDescription             OBJECT IDENTIFIER ::= {id-lsx 37}
 * ```
 *
 * @constant
 */
export const id_lsx_objectClassDescription: OBJECT_IDENTIFIER = new _OID(
    [37],
    id_lsx
);

/**
 * @summary objectClassDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * objectClassDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "Object Class Description"
 *   DIRECTORY SYNTAX  ObjectClassDescription
 *   ID                id-lsx-objectClassDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const objectClassDescription: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_ObjectClassDescription,
    },
    encoderFor: {
        "&Type": _encode_ObjectClassDescription,
    },
    "&ldapDesc": "Object Class Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_objectClassDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lsx_otherMailbox
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-otherMailbox                       OBJECT IDENTIFIER ::= {id-lsx 39}
 * ```
 *
 * @constant
 */
export const id_lsx_otherMailbox: OBJECT_IDENTIFIER = new _OID([39], id_lsx);

/**
 * @summary otherMailbox
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * otherMailbox SYNTAX-NAME ::= {
 *   LDAP-DESC        "Other Mailbox"
 *   DIRECTORY SYNTAX  NULL
 *   ID                id-lsx-otherMailbox }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const otherMailbox: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&ldapDesc": "Other Mailbox" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_otherMailbox /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lsx_subtreeSpec
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-subtreeSpec                        OBJECT IDENTIFIER ::= {id-lsx 45}
 * ```
 *
 * @constant
 */
export const id_lsx_subtreeSpec: OBJECT_IDENTIFIER = new _OID([45], id_lsx);

/**
 * @summary subtreeSpec
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subtreeSpec SYNTAX-NAME ::= {
 *   LDAP-DESC         "SubtreeSpecification"
 *   DIRECTORY SYNTAX  SubtreeSpecification
 *   ID                id-lsx-subtreeSpec }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const subtreeSpec: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_SubtreeSpecification,
    },
    encoderFor: {
        "&Type": _encode_SubtreeSpecification,
    },
    "&ldapDesc": "SubtreeSpecification" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_subtreeSpec /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lsx_utcTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-utcTime                            OBJECT IDENTIFIER ::= {id-lsx 53}
 * ```
 *
 * @constant
 */
export const id_lsx_utcTime: OBJECT_IDENTIFIER = new _OID([53], id_lsx);

/**
 * @summary utcTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * utcTime SYNTAX-NAME ::= {
 *   LDAP-DESC         "UTC Time"
 *   DIRECTORY SYNTAX  UTCTime
 *   ID                id-lsx-utcTime }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const utcTime: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeUTCTime,
    },
    encoderFor: {
        "&Type": $._encodeUTCTime,
    },
    "&ldapDesc": "UTC Time" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_utcTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_lsx_ldapSyntaxDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-ldapSyntaxDescription              OBJECT IDENTIFIER ::= {id-lsx 54}
 * ```
 *
 * @constant
 */
export const id_lsx_ldapSyntaxDescription: OBJECT_IDENTIFIER = new _OID(
    [54],
    id_lsx
);

/**
 * @summary ldapSyntaxDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldapSyntaxDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "LDAP Syntax Description"
 *   DIRECTORY SYNTAX  NULL
 *   ID                id-lsx-ldapSyntaxDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const ldapSyntaxDescription: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&ldapDesc": "LDAP Syntax Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_ldapSyntaxDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type LanguageContextSyntax<> = PrintableString; // PrintableString
let _cached_decoder_for_LanguageContextSyntax: $.ASN1Decoder<
    LanguageContextSyntax
> | null = null;
let _cached_encoder_for_LanguageContextSyntax: $.ASN1Encoder<
    LanguageContextSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) LanguageContextSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LanguageContextSyntax} The decoded data structure.
 */
export function _decode_LanguageContextSyntax(el: _Element) {
    if (!_cached_decoder_for_LanguageContextSyntax) {
        _cached_decoder_for_LanguageContextSyntax = $._decodePrintableString;
    }
    return _cached_decoder_for_LanguageContextSyntax(el);
}
/**
 * @summary Encodes a(n) LanguageContextSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LanguageContextSyntax, encoded as an ASN.1 Element.
 */
export function _encode_LanguageContextSyntax(
    value: LanguageContextSyntax,
    elGetter: $.ASN1Encoder<LanguageContextSyntax>
) {
    if (!_cached_encoder_for_LanguageContextSyntax) {
        _cached_encoder_for_LanguageContextSyntax = $._encodePrintableString;
    }
    return _cached_encoder_for_LanguageContextSyntax(value, elGetter);
}

/**
 * @summary id_avc_language
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-avc-language                           OBJECT IDENTIFIER ::= {id-avc 0}
 * ```
 *
 * @constant
 */
export const id_avc_language: OBJECT_IDENTIFIER = new _OID([0], id_avc);

/**
 * @summary languageContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * languageContext CONTEXT ::= {
 *   WITH SYNTAX  LanguageContextSyntax
 *   ID           id-avc-language }
 * ```
 *
 * @constant
 * @type {CONTEXT}
 * @implements {CONTEXT}
 */
export const languageContext: CONTEXT = {
    class: "CONTEXT",
    decoderFor: {
        "&Type": _decode_LanguageContextSyntax,
        "&Assertion": undefined,
    },
    encoderFor: {
        "&Type": _encode_LanguageContextSyntax,
        "&Assertion": undefined,
    },
    "&id": id_avc_language /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Assertion": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&absentMatch": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary TimeSpecification_time_absolute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeSpecification-time-absolute ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class TimeSpecification_time_absolute {
    constructor(
        /**
         * @summary `startTime`.
         * @public
         * @readonly
         */
        readonly startTime: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `endTime`.
         * @public
         * @readonly
         */
        readonly endTime: OPTIONAL<GeneralizedTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TimeSpecification_time_absolute
     * @description
     *
     * This takes an `object` and converts it to a `TimeSpecification_time_absolute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeSpecification_time_absolute`.
     * @returns {TimeSpecification_time_absolute}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof TimeSpecification_time_absolute]: TimeSpecification_time_absolute[_K];
            }
        >
    ): TimeSpecification_time_absolute {
        return new TimeSpecification_time_absolute(
            _o.startTime,
            _o.endTime,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of TimeSpecification_time_absolute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TimeSpecification_time_absolute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "startTime",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "endTime",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TimeSpecification_time_absolute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TimeSpecification_time_absolute: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TimeSpecification_time_absolute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TimeSpecification_time_absolute: $.ComponentSpec[] = [];
let _cached_decoder_for_TimeSpecification_time_absolute: $.ASN1Decoder<
    TimeSpecification_time_absolute
> | null = null;
let _cached_encoder_for_TimeSpecification_time_absolute: $.ASN1Encoder<
    TimeSpecification_time_absolute
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TimeSpecification_time_absolute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeSpecification_time_absolute} The decoded data structure.
 */
export function _decode_TimeSpecification_time_absolute(el: _Element) {
    if (!_cached_decoder_for_TimeSpecification_time_absolute) {
        _cached_decoder_for_TimeSpecification_time_absolute = function (
            el: _Element
        ): TimeSpecification_time_absolute {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let startTime: OPTIONAL<GeneralizedTime>;
            let endTime: OPTIONAL<GeneralizedTime>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                startTime: (_el: _Element): void => {
                    startTime = $._decode_explicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                endTime: (_el: _Element): void => {
                    endTime = $._decode_explicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TimeSpecification_time_absolute,
                _extension_additions_list_spec_for_TimeSpecification_time_absolute,
                _root_component_type_list_2_spec_for_TimeSpecification_time_absolute,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TimeSpecification_time_absolute(
                /* SEQUENCE_CONSTRUCTOR_CALL */ startTime,
                endTime,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TimeSpecification_time_absolute(el);
}
/**
 * @summary Encodes a(n) TimeSpecification_time_absolute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeSpecification_time_absolute, encoded as an ASN.1 Element.
 */
export function _encode_TimeSpecification_time_absolute(
    value: TimeSpecification_time_absolute,
    elGetter: $.ASN1Encoder<TimeSpecification_time_absolute>
) {
    if (!_cached_encoder_for_TimeSpecification_time_absolute) {
        _cached_encoder_for_TimeSpecification_time_absolute = function (
            value: TimeSpecification_time_absolute,
            elGetter: $.ASN1Encoder<TimeSpecification_time_absolute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.startTime === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeGeneralizedTime,
                                      $.BER
                                  )(value.startTime, $.BER),
                            /* IF_ABSENT  */ value.endTime === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeGeneralizedTime,
                                      $.BER
                                  )(value.endTime, $.BER),
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
    return _cached_encoder_for_TimeSpecification_time_absolute(value, elGetter);
}

/**
 * @summary DayTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DayTime ::= SEQUENCE {
 *   hour    [0]  INTEGER(0..23),
 *   minute  [1]  INTEGER(0..59) DEFAULT 0,
 *   second  [2]  INTEGER(0..59) DEFAULT 0,
 *   ... }
 * ```
 *
 * @class
 */
export class DayTime {
    constructor(
        /**
         * @summary `hour`.
         * @public
         * @readonly
         */
        readonly hour: INTEGER,
        /**
         * @summary `minute`.
         * @public
         * @readonly
         */
        readonly minute: OPTIONAL<INTEGER>,
        /**
         * @summary `second`.
         * @public
         * @readonly
         */
        readonly second: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DayTime
     * @description
     *
     * This takes an `object` and converts it to a `DayTime`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DayTime`.
     * @returns {DayTime}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DayTime]: DayTime[_K] }>
    ): DayTime {
        return new DayTime(
            _o.hour,
            _o.minute,
            _o.second,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `minute`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_minute() {
        return 0;
    }
    /**
     * @summary Getter that returns the default value for `second`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_second() {
        return 0;
    }
}
/**
 * @summary The Leading Root Component Types of DayTime
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DayTime: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "hour",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "minute",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "second",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DayTime
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DayTime: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DayTime
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DayTime: $.ComponentSpec[] = [];
let _cached_decoder_for_DayTime: $.ASN1Decoder<DayTime> | null = null;
let _cached_encoder_for_DayTime: $.ASN1Encoder<DayTime> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DayTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DayTime} The decoded data structure.
 */
export function _decode_DayTime(el: _Element) {
    if (!_cached_decoder_for_DayTime) {
        _cached_decoder_for_DayTime = function (el: _Element): DayTime {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let hour!: INTEGER;
            let minute: OPTIONAL<INTEGER> = DayTime._default_value_for_minute;
            let second: OPTIONAL<INTEGER> = DayTime._default_value_for_second;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                hour: (_el: _Element): void => {
                    hour = $._decode_explicit<INTEGER>(() => $._decodeInteger)(
                        _el
                    );
                },
                minute: (_el: _Element): void => {
                    minute = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                second: (_el: _Element): void => {
                    second = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DayTime,
                _extension_additions_list_spec_for_DayTime,
                _root_component_type_list_2_spec_for_DayTime,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DayTime(
                /* SEQUENCE_CONSTRUCTOR_CALL */ hour,
                minute,
                second,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DayTime(el);
}
/**
 * @summary Encodes a(n) DayTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DayTime, encoded as an ASN.1 Element.
 */
export function _encode_DayTime(
    value: DayTime,
    elGetter: $.ASN1Encoder<DayTime>
) {
    if (!_cached_encoder_for_DayTime) {
        _cached_encoder_for_DayTime = function (
            value: DayTime,
            elGetter: $.ASN1Encoder<DayTime>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => $._encodeInteger,
                                $.BER
                            )(value.hour, $.BER),
                            /* IF_DEFAULT */ value.minute === undefined ||
                            $.deepEq(
                                value.minute,
                                DayTime._default_value_for_minute
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.minute, $.BER),
                            /* IF_DEFAULT */ value.second === undefined ||
                            $.deepEq(
                                value.second,
                                DayTime._default_value_for_second
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.second, $.BER),
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
    return _cached_encoder_for_DayTime(value, elGetter);
}

/**
 * @summary DayTimeBand
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DayTimeBand ::= SEQUENCE {
 *   startDayTime  [0]  DayTime DEFAULT {hour 0},
 *   endDayTime    [1]  DayTime DEFAULT {hour 23, minute 59, second 59},
 *   ... }
 * ```
 *
 * @class
 */
export class DayTimeBand {
    constructor(
        /**
         * @summary `startDayTime`.
         * @public
         * @readonly
         */
        readonly startDayTime: OPTIONAL<DayTime>,
        /**
         * @summary `endDayTime`.
         * @public
         * @readonly
         */
        readonly endDayTime: OPTIONAL<DayTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DayTimeBand
     * @description
     *
     * This takes an `object` and converts it to a `DayTimeBand`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DayTimeBand`.
     * @returns {DayTimeBand}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DayTimeBand]: DayTimeBand[_K] }>
    ): DayTimeBand {
        return new DayTimeBand(
            _o.startDayTime,
            _o.endDayTime,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `startDayTime`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_startDayTime() {
        return DayTime._from_object({ hour: 0 });
    }
    /**
     * @summary Getter that returns the default value for `endDayTime`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_endDayTime() {
        return DayTime._from_object({ hour: 23, minute: 59, second: 59 });
    }
}
/**
 * @summary The Leading Root Component Types of DayTimeBand
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DayTimeBand: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "startDayTime",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "endDayTime",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DayTimeBand
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DayTimeBand: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DayTimeBand
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DayTimeBand: $.ComponentSpec[] = [];
let _cached_decoder_for_DayTimeBand: $.ASN1Decoder<DayTimeBand> | null = null;
let _cached_encoder_for_DayTimeBand: $.ASN1Encoder<DayTimeBand> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DayTimeBand
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DayTimeBand} The decoded data structure.
 */
export function _decode_DayTimeBand(el: _Element) {
    if (!_cached_decoder_for_DayTimeBand) {
        _cached_decoder_for_DayTimeBand = function (el: _Element): DayTimeBand {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let startDayTime: OPTIONAL<DayTime> =
                DayTimeBand._default_value_for_startDayTime;
            let endDayTime: OPTIONAL<DayTime> =
                DayTimeBand._default_value_for_endDayTime;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                startDayTime: (_el: _Element): void => {
                    startDayTime = $._decode_explicit<DayTime>(
                        () => _decode_DayTime
                    )(_el);
                },
                endDayTime: (_el: _Element): void => {
                    endDayTime = $._decode_explicit<DayTime>(
                        () => _decode_DayTime
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DayTimeBand,
                _extension_additions_list_spec_for_DayTimeBand,
                _root_component_type_list_2_spec_for_DayTimeBand,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DayTimeBand(
                /* SEQUENCE_CONSTRUCTOR_CALL */ startDayTime,
                endDayTime,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DayTimeBand(el);
}
/**
 * @summary Encodes a(n) DayTimeBand into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DayTimeBand, encoded as an ASN.1 Element.
 */
export function _encode_DayTimeBand(
    value: DayTimeBand,
    elGetter: $.ASN1Encoder<DayTimeBand>
) {
    if (!_cached_encoder_for_DayTimeBand) {
        _cached_encoder_for_DayTimeBand = function (
            value: DayTimeBand,
            elGetter: $.ASN1Encoder<DayTimeBand>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.startDayTime === undefined ||
                            $.deepEq(
                                value.startDayTime,
                                DayTimeBand._default_value_for_startDayTime
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_DayTime,
                                      $.BER
                                  )(value.startDayTime, $.BER),
                            /* IF_DEFAULT */ value.endDayTime === undefined ||
                            $.deepEq(
                                value.endDayTime,
                                DayTimeBand._default_value_for_endDayTime
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_DayTime,
                                      $.BER
                                  )(value.endDayTime, $.BER),
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
    return _cached_encoder_for_DayTimeBand(value, elGetter);
}

/**
 * @summary Period_days_bitDay
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Period-days-bitDay ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Period_days_bitDay = BIT_STRING;
/**
 * @summary Period_days_bitDay_sunday
 * @constant
 */
export const Period_days_bitDay_sunday: number = 0; /* LONG_NAMED_BIT */
/**
 * @summary Period_days_bitDay_monday
 * @constant
 */
export const Period_days_bitDay_monday: number = 1; /* LONG_NAMED_BIT */
/**
 * @summary Period_days_bitDay_tuesday
 * @constant
 */
export const Period_days_bitDay_tuesday: number = 2; /* LONG_NAMED_BIT */
/**
 * @summary Period_days_bitDay_wednesday
 * @constant
 */
export const Period_days_bitDay_wednesday: number = 3; /* LONG_NAMED_BIT */
/**
 * @summary Period_days_bitDay_thursday
 * @constant
 */
export const Period_days_bitDay_thursday: number = 4; /* LONG_NAMED_BIT */
/**
 * @summary Period_days_bitDay_friday
 * @constant
 */
export const Period_days_bitDay_friday: number = 5; /* LONG_NAMED_BIT */
/**
 * @summary Period_days_bitDay_saturday
 * @constant
 */
export const Period_days_bitDay_saturday: number = 6; /* LONG_NAMED_BIT */
let _cached_decoder_for_Period_days_bitDay: $.ASN1Decoder<
    Period_days_bitDay
> | null = null;
let _cached_encoder_for_Period_days_bitDay: $.ASN1Encoder<
    Period_days_bitDay
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Period_days_bitDay
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Period_days_bitDay} The decoded data structure.
 */
export function _decode_Period_days_bitDay(el: _Element) {
    if (!_cached_decoder_for_Period_days_bitDay) {
        _cached_decoder_for_Period_days_bitDay = $._decodeBitString;
    }
    return _cached_decoder_for_Period_days_bitDay(el);
}
/**
 * @summary Encodes a(n) Period_days_bitDay into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period_days_bitDay, encoded as an ASN.1 Element.
 */
export function _encode_Period_days_bitDay(
    value: Period_days_bitDay,
    elGetter: $.ASN1Encoder<Period_days_bitDay>
) {
    if (!_cached_encoder_for_Period_days_bitDay) {
        _cached_encoder_for_Period_days_bitDay = $._encodeBitString;
    }
    return _cached_encoder_for_Period_days_bitDay(value, elGetter);
}

/**
 * @summary NamedDay_intNamedDays
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamedDay-intNamedDays ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_NamedDay_intNamedDays {
    sunday = 1,
    monday = 2,
    tuesday = 3,
    wednesday = 4,
    thursday = 5,
    friday = 6,
    saturday = 7,
}
/**
 * @summary NamedDay_intNamedDays
 */
export type NamedDay_intNamedDays = _enum_for_NamedDay_intNamedDays;
/**
 * @summary NamedDay_intNamedDays
 * @constant
 */
export const NamedDay_intNamedDays = _enum_for_NamedDay_intNamedDays;
/**
 * @summary NamedDay_intNamedDays_sunday
 * @constant
 * @type {number}
 */
export const NamedDay_intNamedDays_sunday: NamedDay_intNamedDays =
    NamedDay_intNamedDays.sunday; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary NamedDay_intNamedDays_monday
 * @constant
 * @type {number}
 */
export const NamedDay_intNamedDays_monday: NamedDay_intNamedDays =
    NamedDay_intNamedDays.monday; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary NamedDay_intNamedDays_tuesday
 * @constant
 * @type {number}
 */
export const NamedDay_intNamedDays_tuesday: NamedDay_intNamedDays =
    NamedDay_intNamedDays.tuesday; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary NamedDay_intNamedDays_wednesday
 * @constant
 * @type {number}
 */
export const NamedDay_intNamedDays_wednesday: NamedDay_intNamedDays =
    NamedDay_intNamedDays.wednesday; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary NamedDay_intNamedDays_thursday
 * @constant
 * @type {number}
 */
export const NamedDay_intNamedDays_thursday: NamedDay_intNamedDays =
    NamedDay_intNamedDays.thursday; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary NamedDay_intNamedDays_friday
 * @constant
 * @type {number}
 */
export const NamedDay_intNamedDays_friday: NamedDay_intNamedDays =
    NamedDay_intNamedDays.friday; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary NamedDay_intNamedDays_saturday
 * @constant
 * @type {number}
 */
export const NamedDay_intNamedDays_saturday: NamedDay_intNamedDays =
    NamedDay_intNamedDays.saturday; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_NamedDay_intNamedDays: $.ASN1Decoder<
    NamedDay_intNamedDays
> | null = null;
let _cached_encoder_for_NamedDay_intNamedDays: $.ASN1Encoder<
    NamedDay_intNamedDays
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) NamedDay_intNamedDays
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NamedDay_intNamedDays} The decoded data structure.
 */
export function _decode_NamedDay_intNamedDays(el: _Element) {
    if (!_cached_decoder_for_NamedDay_intNamedDays) {
        _cached_decoder_for_NamedDay_intNamedDays = $._decodeEnumerated;
    }
    return _cached_decoder_for_NamedDay_intNamedDays(el);
}
/**
 * @summary Encodes a(n) NamedDay_intNamedDays into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamedDay_intNamedDays, encoded as an ASN.1 Element.
 */
export function _encode_NamedDay_intNamedDays(
    value: NamedDay_intNamedDays,
    elGetter: $.ASN1Encoder<NamedDay_intNamedDays>
) {
    if (!_cached_encoder_for_NamedDay_intNamedDays) {
        _cached_encoder_for_NamedDay_intNamedDays = $._encodeEnumerated;
    }
    return _cached_encoder_for_NamedDay_intNamedDays(value, elGetter);
}

/**
 * @summary NamedDay_bitNamedDays
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamedDay-bitNamedDays ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type NamedDay_bitNamedDays = BIT_STRING;
/**
 * @summary NamedDay_bitNamedDays_sunday
 * @constant
 */
export const NamedDay_bitNamedDays_sunday: number = 0; /* LONG_NAMED_BIT */
/**
 * @summary NamedDay_bitNamedDays_monday
 * @constant
 */
export const NamedDay_bitNamedDays_monday: number = 1; /* LONG_NAMED_BIT */
/**
 * @summary NamedDay_bitNamedDays_tuesday
 * @constant
 */
export const NamedDay_bitNamedDays_tuesday: number = 2; /* LONG_NAMED_BIT */
/**
 * @summary NamedDay_bitNamedDays_wednesday
 * @constant
 */
export const NamedDay_bitNamedDays_wednesday: number = 3; /* LONG_NAMED_BIT */
/**
 * @summary NamedDay_bitNamedDays_thursday
 * @constant
 */
export const NamedDay_bitNamedDays_thursday: number = 4; /* LONG_NAMED_BIT */
/**
 * @summary NamedDay_bitNamedDays_friday
 * @constant
 */
export const NamedDay_bitNamedDays_friday: number = 5; /* LONG_NAMED_BIT */
/**
 * @summary NamedDay_bitNamedDays_saturday
 * @constant
 */
export const NamedDay_bitNamedDays_saturday: number = 6; /* LONG_NAMED_BIT */
let _cached_decoder_for_NamedDay_bitNamedDays: $.ASN1Decoder<
    NamedDay_bitNamedDays
> | null = null;
let _cached_encoder_for_NamedDay_bitNamedDays: $.ASN1Encoder<
    NamedDay_bitNamedDays
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) NamedDay_bitNamedDays
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NamedDay_bitNamedDays} The decoded data structure.
 */
export function _decode_NamedDay_bitNamedDays(el: _Element) {
    if (!_cached_decoder_for_NamedDay_bitNamedDays) {
        _cached_decoder_for_NamedDay_bitNamedDays = $._decodeBitString;
    }
    return _cached_decoder_for_NamedDay_bitNamedDays(el);
}
/**
 * @summary Encodes a(n) NamedDay_bitNamedDays into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamedDay_bitNamedDays, encoded as an ASN.1 Element.
 */
export function _encode_NamedDay_bitNamedDays(
    value: NamedDay_bitNamedDays,
    elGetter: $.ASN1Encoder<NamedDay_bitNamedDays>
) {
    if (!_cached_encoder_for_NamedDay_bitNamedDays) {
        _cached_encoder_for_NamedDay_bitNamedDays = $._encodeBitString;
    }
    return _cached_encoder_for_NamedDay_bitNamedDays(value, elGetter);
}

/**
 * @summary NamedDay
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamedDay  ::=  CHOICE {
 *   intNamedDays ENUMERATED {
 *     sunday      (1),
 *     monday      (2),
 *     tuesday     (3),
 *     wednesday   (4),
 *     thursday    (5),
 *     friday      (6),
 *     saturday    (7)},
 *   bitNamedDays BIT STRING {
 *     sunday      (0),
 *     monday      (1),
 *     tuesday     (2),
 *     wednesday   (3),
 *     thursday    (4),
 *     friday      (5),
 *     saturday    (6)} }
 * ```
 */
export type NamedDay =
    | { intNamedDays: NamedDay_intNamedDays } /* CHOICE_ALT_ROOT */
    | { bitNamedDays: NamedDay_bitNamedDays } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_NamedDay: $.ASN1Decoder<NamedDay> | null = null;
let _cached_encoder_for_NamedDay: $.ASN1Encoder<NamedDay> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) NamedDay
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NamedDay} The decoded data structure.
 */
export function _decode_NamedDay(el: _Element) {
    if (!_cached_decoder_for_NamedDay) {
        _cached_decoder_for_NamedDay = $._decode_inextensible_choice<NamedDay>({
            "UNIVERSAL 10": ["intNamedDays", _decode_NamedDay_intNamedDays],
            "UNIVERSAL 3": ["bitNamedDays", _decode_NamedDay_bitNamedDays],
        });
    }
    return _cached_decoder_for_NamedDay(el);
}
/**
 * @summary Encodes a(n) NamedDay into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamedDay, encoded as an ASN.1 Element.
 */
export function _encode_NamedDay(
    value: NamedDay,
    elGetter: $.ASN1Encoder<NamedDay>
) {
    if (!_cached_encoder_for_NamedDay) {
        _cached_encoder_for_NamedDay = $._encode_choice<NamedDay>(
            {
                intNamedDays: _encode_NamedDay_intNamedDays,
                bitNamedDays: _encode_NamedDay_bitNamedDays,
            },
            $.BER
        );
    }
    return _cached_encoder_for_NamedDay(value, elGetter);
}

/**
 * @summary XDayOf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * XDayOf  ::=  CHOICE {
 *   first   [1]  NamedDay,
 *   second  [2]  NamedDay,
 *   third   [3]  NamedDay,
 *   fourth  [4]  NamedDay,
 *   fifth   [5]  NamedDay }
 * ```
 */
export type XDayOf =
    | { first: NamedDay } /* CHOICE_ALT_ROOT */
    | { second: NamedDay } /* CHOICE_ALT_ROOT */
    | { third: NamedDay } /* CHOICE_ALT_ROOT */
    | { fourth: NamedDay } /* CHOICE_ALT_ROOT */
    | { fifth: NamedDay } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_XDayOf: $.ASN1Decoder<XDayOf> | null = null;
let _cached_encoder_for_XDayOf: $.ASN1Encoder<XDayOf> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) XDayOf
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {XDayOf} The decoded data structure.
 */
export function _decode_XDayOf(el: _Element) {
    if (!_cached_decoder_for_XDayOf) {
        _cached_decoder_for_XDayOf = $._decode_inextensible_choice<XDayOf>({
            "CONTEXT 1": [
                "first",
                $._decode_explicit<NamedDay>(() => _decode_NamedDay),
            ],
            "CONTEXT 2": [
                "second",
                $._decode_explicit<NamedDay>(() => _decode_NamedDay),
            ],
            "CONTEXT 3": [
                "third",
                $._decode_explicit<NamedDay>(() => _decode_NamedDay),
            ],
            "CONTEXT 4": [
                "fourth",
                $._decode_explicit<NamedDay>(() => _decode_NamedDay),
            ],
            "CONTEXT 5": [
                "fifth",
                $._decode_explicit<NamedDay>(() => _decode_NamedDay),
            ],
        });
    }
    return _cached_decoder_for_XDayOf(el);
}
/**
 * @summary Encodes a(n) XDayOf into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The XDayOf, encoded as an ASN.1 Element.
 */
export function _encode_XDayOf(value: XDayOf, elGetter: $.ASN1Encoder<XDayOf>) {
    if (!_cached_encoder_for_XDayOf) {
        _cached_encoder_for_XDayOf = $._encode_choice<XDayOf>(
            {
                first: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_NamedDay,
                    $.BER
                ),
                second: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_NamedDay,
                    $.BER
                ),
                third: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_NamedDay,
                    $.BER
                ),
                fourth: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => _encode_NamedDay,
                    $.BER
                ),
                fifth: $._encode_explicit(
                    _TagClass.context,
                    5,
                    () => _encode_NamedDay,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_XDayOf(value, elGetter);
}

/**
 * @summary Period_days
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Period-days ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Period_days =
    | { intDay: INTEGER[] } /* CHOICE_ALT_ROOT */
    | { bitDay: Period_days_bitDay } /* CHOICE_ALT_ROOT */
    | { dayOf: XDayOf } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Period_days: $.ASN1Decoder<Period_days> | null = null;
let _cached_encoder_for_Period_days: $.ASN1Encoder<Period_days> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Period_days
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Period_days} The decoded data structure.
 */
export function _decode_Period_days(el: _Element) {
    if (!_cached_decoder_for_Period_days) {
        _cached_decoder_for_Period_days = $._decode_extensible_choice<
            Period_days
        >({
            "UNIVERSAL 17": [
                "intDay",
                $._decodeSetOf<INTEGER>(() => $._decodeInteger),
            ],
            "UNIVERSAL 3": ["bitDay", _decode_Period_days_bitDay],
            "CONTEXT 1": ["dayOf", _decode_XDayOf],
            "CONTEXT 2": ["dayOf", _decode_XDayOf],
            "CONTEXT 3": ["dayOf", _decode_XDayOf],
            "CONTEXT 4": ["dayOf", _decode_XDayOf],
            "CONTEXT 5": ["dayOf", _decode_XDayOf],
        });
    }
    return _cached_decoder_for_Period_days(el);
}
/**
 * @summary Encodes a(n) Period_days into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period_days, encoded as an ASN.1 Element.
 */
export function _encode_Period_days(
    value: Period_days,
    elGetter: $.ASN1Encoder<Period_days>
) {
    if (!_cached_encoder_for_Period_days) {
        _cached_encoder_for_Period_days = $._encode_choice<Period_days>(
            {
                intDay: $._encodeSetOf<INTEGER>(() => $._encodeInteger, $.BER),
                bitDay: _encode_Period_days_bitDay,
                dayOf: _encode_XDayOf,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Period_days(value, elGetter);
}

/**
 * @summary Period_weeks_bitWeek
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Period-weeks-bitWeek ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Period_weeks_bitWeek = BIT_STRING;
/**
 * @summary Period_weeks_bitWeek_week1
 * @constant
 */
export const Period_weeks_bitWeek_week1: number = 0; /* LONG_NAMED_BIT */
/**
 * @summary Period_weeks_bitWeek_week2
 * @constant
 */
export const Period_weeks_bitWeek_week2: number = 1; /* LONG_NAMED_BIT */
/**
 * @summary Period_weeks_bitWeek_week3
 * @constant
 */
export const Period_weeks_bitWeek_week3: number = 2; /* LONG_NAMED_BIT */
/**
 * @summary Period_weeks_bitWeek_week4
 * @constant
 */
export const Period_weeks_bitWeek_week4: number = 3; /* LONG_NAMED_BIT */
/**
 * @summary Period_weeks_bitWeek_week5
 * @constant
 */
export const Period_weeks_bitWeek_week5: number = 4; /* LONG_NAMED_BIT */
let _cached_decoder_for_Period_weeks_bitWeek: $.ASN1Decoder<
    Period_weeks_bitWeek
> | null = null;
let _cached_encoder_for_Period_weeks_bitWeek: $.ASN1Encoder<
    Period_weeks_bitWeek
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Period_weeks_bitWeek
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Period_weeks_bitWeek} The decoded data structure.
 */
export function _decode_Period_weeks_bitWeek(el: _Element) {
    if (!_cached_decoder_for_Period_weeks_bitWeek) {
        _cached_decoder_for_Period_weeks_bitWeek = $._decodeBitString;
    }
    return _cached_decoder_for_Period_weeks_bitWeek(el);
}
/**
 * @summary Encodes a(n) Period_weeks_bitWeek into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period_weeks_bitWeek, encoded as an ASN.1 Element.
 */
export function _encode_Period_weeks_bitWeek(
    value: Period_weeks_bitWeek,
    elGetter: $.ASN1Encoder<Period_weeks_bitWeek>
) {
    if (!_cached_encoder_for_Period_weeks_bitWeek) {
        _cached_encoder_for_Period_weeks_bitWeek = $._encodeBitString;
    }
    return _cached_encoder_for_Period_weeks_bitWeek(value, elGetter);
}

/**
 * @summary Period_weeks
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Period-weeks ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Period_weeks =
    | { allWeeks: NULL } /* CHOICE_ALT_ROOT */
    | { intWeek: INTEGER[] } /* CHOICE_ALT_ROOT */
    | { bitWeek: Period_weeks_bitWeek } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Period_weeks: $.ASN1Decoder<Period_weeks> | null = null;
let _cached_encoder_for_Period_weeks: $.ASN1Encoder<Period_weeks> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Period_weeks
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Period_weeks} The decoded data structure.
 */
export function _decode_Period_weeks(el: _Element) {
    if (!_cached_decoder_for_Period_weeks) {
        _cached_decoder_for_Period_weeks = $._decode_extensible_choice<
            Period_weeks
        >({
            "UNIVERSAL 5": ["allWeeks", $._decodeNull],
            "UNIVERSAL 17": [
                "intWeek",
                $._decodeSetOf<INTEGER>(() => $._decodeInteger),
            ],
            "UNIVERSAL 3": ["bitWeek", _decode_Period_weeks_bitWeek],
        });
    }
    return _cached_decoder_for_Period_weeks(el);
}
/**
 * @summary Encodes a(n) Period_weeks into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period_weeks, encoded as an ASN.1 Element.
 */
export function _encode_Period_weeks(
    value: Period_weeks,
    elGetter: $.ASN1Encoder<Period_weeks>
) {
    if (!_cached_encoder_for_Period_weeks) {
        _cached_encoder_for_Period_weeks = $._encode_choice<Period_weeks>(
            {
                allWeeks: $._encodeNull,
                intWeek: $._encodeSetOf<INTEGER>(() => $._encodeInteger, $.BER),
                bitWeek: _encode_Period_weeks_bitWeek,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Period_weeks(value, elGetter);
}

/**
 * @summary Period_months_bitMonth
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Period-months-bitMonth ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Period_months_bitMonth = BIT_STRING;
/**
 * @summary Period_months_bitMonth_january
 * @constant
 */
export const Period_months_bitMonth_january: number = 0; /* LONG_NAMED_BIT */
/**
 * @summary Period_months_bitMonth_february
 * @constant
 */
export const Period_months_bitMonth_february: number = 1; /* LONG_NAMED_BIT */
/**
 * @summary Period_months_bitMonth_march
 * @constant
 */
export const Period_months_bitMonth_march: number = 2; /* LONG_NAMED_BIT */
/**
 * @summary Period_months_bitMonth_april
 * @constant
 */
export const Period_months_bitMonth_april: number = 3; /* LONG_NAMED_BIT */
/**
 * @summary Period_months_bitMonth_may
 * @constant
 */
export const Period_months_bitMonth_may: number = 4; /* LONG_NAMED_BIT */
/**
 * @summary Period_months_bitMonth_june
 * @constant
 */
export const Period_months_bitMonth_june: number = 5; /* LONG_NAMED_BIT */
/**
 * @summary Period_months_bitMonth_july
 * @constant
 */
export const Period_months_bitMonth_july: number = 6; /* LONG_NAMED_BIT */
/**
 * @summary Period_months_bitMonth_august
 * @constant
 */
export const Period_months_bitMonth_august: number = 7; /* LONG_NAMED_BIT */
/**
 * @summary Period_months_bitMonth_september
 * @constant
 */
export const Period_months_bitMonth_september: number = 8; /* LONG_NAMED_BIT */
/**
 * @summary Period_months_bitMonth_october
 * @constant
 */
export const Period_months_bitMonth_october: number = 9; /* LONG_NAMED_BIT */
/**
 * @summary Period_months_bitMonth_november
 * @constant
 */
export const Period_months_bitMonth_november: number = 10; /* LONG_NAMED_BIT */
/**
 * @summary Period_months_bitMonth_december
 * @constant
 */
export const Period_months_bitMonth_december: number = 11; /* LONG_NAMED_BIT */
let _cached_decoder_for_Period_months_bitMonth: $.ASN1Decoder<
    Period_months_bitMonth
> | null = null;
let _cached_encoder_for_Period_months_bitMonth: $.ASN1Encoder<
    Period_months_bitMonth
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Period_months_bitMonth
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Period_months_bitMonth} The decoded data structure.
 */
export function _decode_Period_months_bitMonth(el: _Element) {
    if (!_cached_decoder_for_Period_months_bitMonth) {
        _cached_decoder_for_Period_months_bitMonth = $._decodeBitString;
    }
    return _cached_decoder_for_Period_months_bitMonth(el);
}
/**
 * @summary Encodes a(n) Period_months_bitMonth into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period_months_bitMonth, encoded as an ASN.1 Element.
 */
export function _encode_Period_months_bitMonth(
    value: Period_months_bitMonth,
    elGetter: $.ASN1Encoder<Period_months_bitMonth>
) {
    if (!_cached_encoder_for_Period_months_bitMonth) {
        _cached_encoder_for_Period_months_bitMonth = $._encodeBitString;
    }
    return _cached_encoder_for_Period_months_bitMonth(value, elGetter);
}

/**
 * @summary Period_months
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Period-months ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Period_months =
    | { allMonths: NULL } /* CHOICE_ALT_ROOT */
    | { intMonth: INTEGER[] } /* CHOICE_ALT_ROOT */
    | { bitMonth: Period_months_bitMonth } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Period_months: $.ASN1Decoder<
    Period_months
> | null = null;
let _cached_encoder_for_Period_months: $.ASN1Encoder<
    Period_months
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Period_months
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Period_months} The decoded data structure.
 */
export function _decode_Period_months(el: _Element) {
    if (!_cached_decoder_for_Period_months) {
        _cached_decoder_for_Period_months = $._decode_extensible_choice<
            Period_months
        >({
            "UNIVERSAL 5": ["allMonths", $._decodeNull],
            "UNIVERSAL 17": [
                "intMonth",
                $._decodeSetOf<INTEGER>(() => $._decodeInteger),
            ],
            "UNIVERSAL 3": ["bitMonth", _decode_Period_months_bitMonth],
        });
    }
    return _cached_decoder_for_Period_months(el);
}
/**
 * @summary Encodes a(n) Period_months into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period_months, encoded as an ASN.1 Element.
 */
export function _encode_Period_months(
    value: Period_months,
    elGetter: $.ASN1Encoder<Period_months>
) {
    if (!_cached_encoder_for_Period_months) {
        _cached_encoder_for_Period_months = $._encode_choice<Period_months>(
            {
                allMonths: $._encodeNull,
                intMonth: $._encodeSetOf<INTEGER>(
                    () => $._encodeInteger,
                    $.BER
                ),
                bitMonth: _encode_Period_months_bitMonth,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Period_months(value, elGetter);
}

/**
 * @summary Period
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Period ::= SEQUENCE {
 *   timesOfDay  [0]  SET SIZE (1..MAX) OF DayTimeBand OPTIONAL,
 *   days        [1]  CHOICE {
 *     intDay           SET OF INTEGER,
 *     bitDay           BIT STRING {
 *       sunday    (0),
 *       monday    (1),
 *       tuesday   (2),
 *       wednesday (3),
 *       thursday  (4),
 *       friday    (5),
 *       saturday  (6)},
 *     dayOf            XDayOf,
 *     ...} OPTIONAL,
 *   weeks       [2]  CHOICE {
 *     allWeeks         NULL,
 *     intWeek          SET OF INTEGER,
 *     bitWeek          BIT STRING {
 *       week1     (0),
 *       week2     (1),
 *       week3     (2),
 *       week4     (3),
 *       week5     (4)},
 *     ... } OPTIONAL,
 *   months      [3]  CHOICE {
 *     allMonths        NULL,
 *     intMonth         SET OF INTEGER,
 *     bitMonth         BIT STRING {
 *       january   (0),
 *       february  (1),
 *       march     (2),
 *       april     (3),
 *       may       (4),
 *       june      (5),
 *       july      (6),
 *       august    (7),
 *       september (8),
 *       october   (9),
 *       november  (10),
 *       december  (11)},
 *     ...} OPTIONAL,
 *   years       [4]  SET OF INTEGER(1000..MAX) OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class Period {
    constructor(
        /**
         * @summary `timesOfDay`.
         * @public
         * @readonly
         */
        readonly timesOfDay: OPTIONAL<DayTimeBand[]>,
        /**
         * @summary `days`.
         * @public
         * @readonly
         */
        readonly days: OPTIONAL<Period_days>,
        /**
         * @summary `weeks`.
         * @public
         * @readonly
         */
        readonly weeks: OPTIONAL<Period_weeks>,
        /**
         * @summary `months`.
         * @public
         * @readonly
         */
        readonly months: OPTIONAL<Period_months>,
        /**
         * @summary `years`.
         * @public
         * @readonly
         */
        readonly years: OPTIONAL<INTEGER[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Period
     * @description
     *
     * This takes an `object` and converts it to a `Period`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Period`.
     * @returns {Period}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Period]: Period[_K] }>
    ): Period {
        return new Period(
            _o.timesOfDay,
            _o.days,
            _o.weeks,
            _o.months,
            _o.years,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of Period
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Period: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "timesOfDay",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "days",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "weeks",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "months",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "years",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Period
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Period: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Period
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Period: $.ComponentSpec[] = [];
let _cached_decoder_for_Period: $.ASN1Decoder<Period> | null = null;
let _cached_encoder_for_Period: $.ASN1Encoder<Period> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Period
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Period} The decoded data structure.
 */
export function _decode_Period(el: _Element) {
    if (!_cached_decoder_for_Period) {
        _cached_decoder_for_Period = function (el: _Element): Period {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let timesOfDay: OPTIONAL<DayTimeBand[]>;
            let days: OPTIONAL<Period_days>;
            let weeks: OPTIONAL<Period_weeks>;
            let months: OPTIONAL<Period_months>;
            let years: OPTIONAL<INTEGER[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                timesOfDay: (_el: _Element): void => {
                    timesOfDay = $._decode_explicit<DayTimeBand[]>(() =>
                        $._decodeSetOf<DayTimeBand>(() => _decode_DayTimeBand)
                    )(_el);
                },
                days: (_el: _Element): void => {
                    days = $._decode_explicit<Period_days>(
                        () => _decode_Period_days
                    )(_el);
                },
                weeks: (_el: _Element): void => {
                    weeks = $._decode_explicit<Period_weeks>(
                        () => _decode_Period_weeks
                    )(_el);
                },
                months: (_el: _Element): void => {
                    months = $._decode_explicit<Period_months>(
                        () => _decode_Period_months
                    )(_el);
                },
                years: (_el: _Element): void => {
                    years = $._decode_explicit<INTEGER[]>(() =>
                        $._decodeSetOf<INTEGER>(() => $._decodeInteger)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Period,
                _extension_additions_list_spec_for_Period,
                _root_component_type_list_2_spec_for_Period,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Period(
                /* SEQUENCE_CONSTRUCTOR_CALL */ timesOfDay,
                days,
                weeks,
                months,
                years,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Period(el);
}
/**
 * @summary Encodes a(n) Period into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period, encoded as an ASN.1 Element.
 */
export function _encode_Period(value: Period, elGetter: $.ASN1Encoder<Period>) {
    if (!_cached_encoder_for_Period) {
        _cached_encoder_for_Period = function (
            value: Period,
            elGetter: $.ASN1Encoder<Period>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.timesOfDay === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () =>
                                          $._encodeSetOf<DayTimeBand>(
                                              () => _encode_DayTimeBand,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.timesOfDay, $.BER),
                            /* IF_ABSENT  */ value.days === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Period_days,
                                      $.BER
                                  )(value.days, $.BER),
                            /* IF_ABSENT  */ value.weeks === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_Period_weeks,
                                      $.BER
                                  )(value.weeks, $.BER),
                            /* IF_ABSENT  */ value.months === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_Period_months,
                                      $.BER
                                  )(value.months, $.BER),
                            /* IF_ABSENT  */ value.years === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () =>
                                          $._encodeSetOf<INTEGER>(
                                              () => $._encodeInteger,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.years, $.BER),
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
    return _cached_encoder_for_Period(value, elGetter);
}

/**
 * @summary TimeSpecification_time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeSpecification-time ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TimeSpecification_time =
    | { absolute: TimeSpecification_time_absolute } /* CHOICE_ALT_ROOT */
    | { periodic: Period[] } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_TimeSpecification_time: $.ASN1Decoder<
    TimeSpecification_time
> | null = null;
let _cached_encoder_for_TimeSpecification_time: $.ASN1Encoder<
    TimeSpecification_time
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TimeSpecification_time
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeSpecification_time} The decoded data structure.
 */
export function _decode_TimeSpecification_time(el: _Element) {
    if (!_cached_decoder_for_TimeSpecification_time) {
        _cached_decoder_for_TimeSpecification_time = $._decode_inextensible_choice<
            TimeSpecification_time
        >({
            "UNIVERSAL 16": [
                "absolute",
                _decode_TimeSpecification_time_absolute,
            ],
            "UNIVERSAL 17": [
                "periodic",
                $._decodeSetOf<Period>(() => _decode_Period),
            ],
        });
    }
    return _cached_decoder_for_TimeSpecification_time(el);
}
/**
 * @summary Encodes a(n) TimeSpecification_time into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeSpecification_time, encoded as an ASN.1 Element.
 */
export function _encode_TimeSpecification_time(
    value: TimeSpecification_time,
    elGetter: $.ASN1Encoder<TimeSpecification_time>
) {
    if (!_cached_encoder_for_TimeSpecification_time) {
        _cached_encoder_for_TimeSpecification_time = $._encode_choice<
            TimeSpecification_time
        >(
            {
                absolute: _encode_TimeSpecification_time_absolute,
                periodic: $._encodeSetOf<Period>(() => _encode_Period, $.BER),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TimeSpecification_time(value, elGetter);
}

/**
 * @summary TimeZone
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeZone  ::=  INTEGER(-12..12)
 * ```
 */
export type TimeZone = INTEGER;
let _cached_decoder_for_TimeZone: $.ASN1Decoder<TimeZone> | null = null;
let _cached_encoder_for_TimeZone: $.ASN1Encoder<TimeZone> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TimeZone
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeZone} The decoded data structure.
 */
export function _decode_TimeZone(el: _Element) {
    if (!_cached_decoder_for_TimeZone) {
        _cached_decoder_for_TimeZone = $._decodeInteger;
    }
    return _cached_decoder_for_TimeZone(el);
}
/**
 * @summary Encodes a(n) TimeZone into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeZone, encoded as an ASN.1 Element.
 */
export function _encode_TimeZone(
    value: TimeZone,
    elGetter: $.ASN1Encoder<TimeZone>
) {
    if (!_cached_encoder_for_TimeZone) {
        _cached_encoder_for_TimeZone = $._encodeInteger;
    }
    return _cached_encoder_for_TimeZone(value, elGetter);
}

/**
 * @summary TimeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeSpecification ::= SEQUENCE {
 *   time           CHOICE {
 *     absolute       SEQUENCE {
 *       startTime [0]  GeneralizedTime OPTIONAL,
 *       endTime   [1]  GeneralizedTime OPTIONAL,
 *       ... },
 *     periodic      SET SIZE (1..MAX) OF Period},
 *   notThisTime   BOOLEAN DEFAULT FALSE,
 *   timeZone      TimeZone OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class TimeSpecification {
    constructor(
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeSpecification_time,
        /**
         * @summary `notThisTime`.
         * @public
         * @readonly
         */
        readonly notThisTime: OPTIONAL<BOOLEAN>,
        /**
         * @summary `timeZone`.
         * @public
         * @readonly
         */
        readonly timeZone: OPTIONAL<TimeZone>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TimeSpecification
     * @description
     *
     * This takes an `object` and converts it to a `TimeSpecification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeSpecification`.
     * @returns {TimeSpecification}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TimeSpecification]: TimeSpecification[_K] }>
    ): TimeSpecification {
        return new TimeSpecification(
            _o.time,
            _o.notThisTime,
            _o.timeZone,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `notThisTime`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_notThisTime() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of TimeSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TimeSpecification: $.ComponentSpec[] = [
    new $.ComponentSpec("time", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "notThisTime",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "timeZone",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TimeSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TimeSpecification: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TimeSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TimeSpecification: $.ComponentSpec[] = [];
let _cached_decoder_for_TimeSpecification: $.ASN1Decoder<
    TimeSpecification
> | null = null;
let _cached_encoder_for_TimeSpecification: $.ASN1Encoder<
    TimeSpecification
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TimeSpecification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeSpecification} The decoded data structure.
 */
export function _decode_TimeSpecification(el: _Element) {
    if (!_cached_decoder_for_TimeSpecification) {
        _cached_decoder_for_TimeSpecification = function (
            el: _Element
        ): TimeSpecification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let time!: TimeSpecification_time;
            let notThisTime: OPTIONAL<BOOLEAN> =
                TimeSpecification._default_value_for_notThisTime;
            let timeZone: OPTIONAL<TimeZone>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                time: (_el: _Element): void => {
                    time = _decode_TimeSpecification_time(_el);
                },
                notThisTime: (_el: _Element): void => {
                    notThisTime = $._decodeBoolean(_el);
                },
                timeZone: (_el: _Element): void => {
                    timeZone = _decode_TimeZone(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TimeSpecification,
                _extension_additions_list_spec_for_TimeSpecification,
                _root_component_type_list_2_spec_for_TimeSpecification,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TimeSpecification(
                /* SEQUENCE_CONSTRUCTOR_CALL */ time,
                notThisTime,
                timeZone,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TimeSpecification(el);
}
/**
 * @summary Encodes a(n) TimeSpecification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeSpecification, encoded as an ASN.1 Element.
 */
export function _encode_TimeSpecification(
    value: TimeSpecification,
    elGetter: $.ASN1Encoder<TimeSpecification>
) {
    if (!_cached_encoder_for_TimeSpecification) {
        _cached_encoder_for_TimeSpecification = function (
            value: TimeSpecification,
            elGetter: $.ASN1Encoder<TimeSpecification>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_TimeSpecification_time(
                                value.time,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.notThisTime === undefined ||
                            $.deepEq(
                                value.notThisTime,
                                TimeSpecification._default_value_for_notThisTime
                            )
                                ? undefined
                                : $._encodeBoolean(value.notThisTime, $.BER),
                            /* IF_ABSENT  */ value.timeZone === undefined
                                ? undefined
                                : _encode_TimeZone(value.timeZone, $.BER),
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
    return _cached_encoder_for_TimeSpecification(value, elGetter);
}

/**
 * @summary TimeAssertion_between
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeAssertion-between ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class TimeAssertion_between {
    constructor(
        /**
         * @summary `startTime`.
         * @public
         * @readonly
         */
        readonly startTime: GeneralizedTime,
        /**
         * @summary `endTime`.
         * @public
         * @readonly
         */
        readonly endTime: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `entirely`.
         * @public
         * @readonly
         */
        readonly entirely: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TimeAssertion_between
     * @description
     *
     * This takes an `object` and converts it to a `TimeAssertion_between`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeAssertion_between`.
     * @returns {TimeAssertion_between}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof TimeAssertion_between]: TimeAssertion_between[_K] }
        >
    ): TimeAssertion_between {
        return new TimeAssertion_between(
            _o.startTime,
            _o.endTime,
            _o.entirely,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `entirely`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_entirely() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of TimeAssertion_between
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TimeAssertion_between: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "startTime",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "endTime",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "entirely",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TimeAssertion_between
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TimeAssertion_between: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TimeAssertion_between
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TimeAssertion_between: $.ComponentSpec[] = [];
let _cached_decoder_for_TimeAssertion_between: $.ASN1Decoder<
    TimeAssertion_between
> | null = null;
let _cached_encoder_for_TimeAssertion_between: $.ASN1Encoder<
    TimeAssertion_between
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TimeAssertion_between
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeAssertion_between} The decoded data structure.
 */
export function _decode_TimeAssertion_between(el: _Element) {
    if (!_cached_decoder_for_TimeAssertion_between) {
        _cached_decoder_for_TimeAssertion_between = function (
            el: _Element
        ): TimeAssertion_between {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let startTime!: GeneralizedTime;
            let endTime: OPTIONAL<GeneralizedTime>;
            let entirely: OPTIONAL<BOOLEAN> =
                TimeAssertion_between._default_value_for_entirely;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                startTime: (_el: _Element): void => {
                    startTime = $._decode_explicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                endTime: (_el: _Element): void => {
                    endTime = $._decode_explicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                entirely: (_el: _Element): void => {
                    entirely = $._decodeBoolean(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TimeAssertion_between,
                _extension_additions_list_spec_for_TimeAssertion_between,
                _root_component_type_list_2_spec_for_TimeAssertion_between,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TimeAssertion_between(
                /* SEQUENCE_CONSTRUCTOR_CALL */ startTime,
                endTime,
                entirely,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TimeAssertion_between(el);
}
/**
 * @summary Encodes a(n) TimeAssertion_between into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeAssertion_between, encoded as an ASN.1 Element.
 */
export function _encode_TimeAssertion_between(
    value: TimeAssertion_between,
    elGetter: $.ASN1Encoder<TimeAssertion_between>
) {
    if (!_cached_encoder_for_TimeAssertion_between) {
        _cached_encoder_for_TimeAssertion_between = function (
            value: TimeAssertion_between,
            elGetter: $.ASN1Encoder<TimeAssertion_between>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => $._encodeGeneralizedTime,
                                $.BER
                            )(value.startTime, $.BER),
                            /* IF_ABSENT  */ value.endTime === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeGeneralizedTime,
                                      $.BER
                                  )(value.endTime, $.BER),
                            /* IF_DEFAULT */ value.entirely === undefined ||
                            $.deepEq(
                                value.entirely,
                                TimeAssertion_between._default_value_for_entirely
                            )
                                ? undefined
                                : $._encodeBoolean(value.entirely, $.BER),
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
    return _cached_encoder_for_TimeAssertion_between(value, elGetter);
}

/**
 * @summary TimeAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeAssertion  ::=  CHOICE {
 *   now             NULL,
 *   at              GeneralizedTime,
 *   between         SEQUENCE {
 *     startTime  [0]  GeneralizedTime,
 *     endTime    [1]  GeneralizedTime OPTIONAL,
 *     entirely        BOOLEAN DEFAULT FALSE,
 *     ...},
 *   ... }
 * ```
 */
export type TimeAssertion =
    | { now: NULL } /* CHOICE_ALT_ROOT */
    | { at: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { between: TimeAssertion_between } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_TimeAssertion: $.ASN1Decoder<
    TimeAssertion
> | null = null;
let _cached_encoder_for_TimeAssertion: $.ASN1Encoder<
    TimeAssertion
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TimeAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeAssertion} The decoded data structure.
 */
export function _decode_TimeAssertion(el: _Element) {
    if (!_cached_decoder_for_TimeAssertion) {
        _cached_decoder_for_TimeAssertion = $._decode_extensible_choice<
            TimeAssertion
        >({
            "UNIVERSAL 5": ["now", $._decodeNull],
            "UNIVERSAL 24": ["at", $._decodeGeneralizedTime],
            "UNIVERSAL 16": ["between", _decode_TimeAssertion_between],
        });
    }
    return _cached_decoder_for_TimeAssertion(el);
}
/**
 * @summary Encodes a(n) TimeAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeAssertion, encoded as an ASN.1 Element.
 */
export function _encode_TimeAssertion(
    value: TimeAssertion,
    elGetter: $.ASN1Encoder<TimeAssertion>
) {
    if (!_cached_encoder_for_TimeAssertion) {
        _cached_encoder_for_TimeAssertion = $._encode_choice<TimeAssertion>(
            {
                now: $._encodeNull,
                at: $._encodeGeneralizedTime,
                between: _encode_TimeAssertion_between,
            },
            $.BER
        );
    }
    return _cached_encoder_for_TimeAssertion(value, elGetter);
}

/**
 * @summary id_avc_temporal
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-avc-temporal                           OBJECT IDENTIFIER ::= {id-avc 1}
 * ```
 *
 * @constant
 */
export const id_avc_temporal: OBJECT_IDENTIFIER = new _OID([1], id_avc);

/**
 * @summary temporalContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * temporalContext CONTEXT ::= {
 *   WITH SYNTAX  TimeSpecification
 *   ASSERTED AS  TimeAssertion
 *   ID           id-avc-temporal }
 * ```
 *
 * @constant
 * @type {CONTEXT}
 * @implements {CONTEXT}
 */
export const temporalContext: CONTEXT = {
    class: "CONTEXT",
    decoderFor: {
        "&Type": _decode_TimeSpecification,
        "&Assertion": _decode_TimeAssertion,
    },
    encoderFor: {
        "&Type": _encode_TimeSpecification,
        "&Assertion": _encode_TimeAssertion,
    },
    "&id": id_avc_temporal /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Assertion": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&absentMatch": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary LocaleContextSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocaleContextSyntax  ::=  CHOICE {
 *   localeID1  OBJECT IDENTIFIER,
 *   localeID2  UnboundedDirectoryString,
 *   ... }
 * ```
 */
export type LocaleContextSyntax =
    | { localeID1: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { localeID2: UnboundedDirectoryString } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_LocaleContextSyntax: $.ASN1Decoder<
    LocaleContextSyntax
> | null = null;
let _cached_encoder_for_LocaleContextSyntax: $.ASN1Encoder<
    LocaleContextSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) LocaleContextSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocaleContextSyntax} The decoded data structure.
 */
export function _decode_LocaleContextSyntax(el: _Element) {
    if (!_cached_decoder_for_LocaleContextSyntax) {
        _cached_decoder_for_LocaleContextSyntax = $._decode_extensible_choice<
            LocaleContextSyntax
        >({
            "UNIVERSAL 6": ["localeID1", $._decodeObjectIdentifier],
            "UNIVERSAL 20": ["localeID2", _decode_UnboundedDirectoryString],
            "UNIVERSAL 19": ["localeID2", _decode_UnboundedDirectoryString],
            "UNIVERSAL 30": ["localeID2", _decode_UnboundedDirectoryString],
            "UNIVERSAL 28": ["localeID2", _decode_UnboundedDirectoryString],
            "UNIVERSAL 12": ["localeID2", _decode_UnboundedDirectoryString],
        });
    }
    return _cached_decoder_for_LocaleContextSyntax(el);
}
/**
 * @summary Encodes a(n) LocaleContextSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocaleContextSyntax, encoded as an ASN.1 Element.
 */
export function _encode_LocaleContextSyntax(
    value: LocaleContextSyntax,
    elGetter: $.ASN1Encoder<LocaleContextSyntax>
) {
    if (!_cached_encoder_for_LocaleContextSyntax) {
        _cached_encoder_for_LocaleContextSyntax = $._encode_choice<
            LocaleContextSyntax
        >(
            {
                localeID1: $._encodeObjectIdentifier,
                localeID2: _encode_UnboundedDirectoryString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_LocaleContextSyntax(value, elGetter);
}

/**
 * @summary id_avc_locale
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-avc-locale                             OBJECT IDENTIFIER ::= {id-avc 2}
 * ```
 *
 * @constant
 */
export const id_avc_locale: OBJECT_IDENTIFIER = new _OID([2], id_avc);

/**
 * @summary localeContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * localeContext CONTEXT ::= {
 *   WITH SYNTAX  LocaleContextSyntax
 *   ID           id-avc-locale }
 * ```
 *
 * @constant
 * @type {CONTEXT}
 * @implements {CONTEXT}
 */
export const localeContext: CONTEXT = {
    class: "CONTEXT",
    decoderFor: {
        "&Type": _decode_LocaleContextSyntax,
        "&Assertion": undefined,
    },
    encoderFor: {
        "&Type": _encode_LocaleContextSyntax,
        "&Assertion": undefined,
    },
    "&id": id_avc_locale /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Assertion": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&absentMatch": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type AttributeOptionList<> = UTF8String[]; // SequenceOfType
let _cached_decoder_for_AttributeOptionList: $.ASN1Decoder<
    AttributeOptionList
> | null = null;
let _cached_encoder_for_AttributeOptionList: $.ASN1Encoder<
    AttributeOptionList
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeOptionList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeOptionList} The decoded data structure.
 */
export function _decode_AttributeOptionList(el: _Element) {
    if (!_cached_decoder_for_AttributeOptionList) {
        _cached_decoder_for_AttributeOptionList = $._decodeSequenceOf<
            UTF8String
        >(() => $._decodeUTF8String);
    }
    return _cached_decoder_for_AttributeOptionList(el);
}
/**
 * @summary Encodes a(n) AttributeOptionList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeOptionList, encoded as an ASN.1 Element.
 */
export function _encode_AttributeOptionList(
    value: AttributeOptionList,
    elGetter: $.ASN1Encoder<AttributeOptionList>
) {
    if (!_cached_encoder_for_AttributeOptionList) {
        _cached_encoder_for_AttributeOptionList = $._encodeSequenceOf<
            UTF8String
        >(() => $._encodeUTF8String, $.BER);
    }
    return _cached_encoder_for_AttributeOptionList(value, elGetter);
}

/**
 * @summary id_avc_ldapAttributeOption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-avc-ldapAttributeOption                OBJECT IDENTIFIER ::= {id-avc 5}
 * ```
 *
 * @constant
 */
export const id_avc_ldapAttributeOption: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_avc
);

/**
 * @summary ldapAttributeOptionContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldapAttributeOptionContext CONTEXT ::= {
 *   WITH SYNTAX  AttributeOptionList
 *   ASSERTED AS  AttributeOptionList
 *   ABSENT-MATCH FALSE
 *   ID           id-avc-ldapAttributeOption }
 * ```
 *
 * @constant
 * @type {CONTEXT}
 * @implements {CONTEXT}
 */
export const ldapAttributeOptionContext: CONTEXT = {
    class: "CONTEXT",
    decoderFor: {
        "&Type": _decode_AttributeOptionList,
        "&Assertion": _decode_AttributeOptionList,
    },
    encoderFor: {
        "&Type": _encode_AttributeOptionList,
        "&Assertion": _encode_AttributeOptionList,
    },
    "&absentMatch": false /* OBJECT_FIELD_SETTING */,
    "&id": id_avc_ldapAttributeOption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Assertion": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_pr_targetDsaUnavailable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-targetDsaUnavailable                OBJECT IDENTIFIER ::= {id-pr 1}
 * ```
 *
 * @constant
 */
export const id_pr_targetDsaUnavailable: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_pr
);

/**
 * @summary id_pr_dataSourceUnavailable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-dataSourceUnavailable               OBJECT IDENTIFIER ::= {id-pr 2}
 * ```
 *
 * @constant
 */
export const id_pr_dataSourceUnavailable: OBJECT_IDENTIFIER = new _OID(
    [2],
    id_pr
);

/**
 * @summary id_pr_unidentifiedOperation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-unidentifiedOperation               OBJECT IDENTIFIER ::= {id-pr 3}
 * ```
 *
 * @constant
 */
export const id_pr_unidentifiedOperation: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_pr
);

/**
 * @summary id_pr_unavailableOperation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-unavailableOperation                OBJECT IDENTIFIER ::= {id-pr 4}
 * ```
 *
 * @constant
 */
export const id_pr_unavailableOperation: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_pr
);

/**
 * @summary id_pr_searchAttributeViolation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-searchAttributeViolation            OBJECT IDENTIFIER ::= {id-pr 5}
 * ```
 *
 * @constant
 */
export const id_pr_searchAttributeViolation: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_pr
);

/**
 * @summary id_pr_searchAttributeCombinationViolation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-searchAttributeCombinationViolation OBJECT IDENTIFIER ::= {id-pr 6}
 * ```
 *
 * @constant
 */
export const id_pr_searchAttributeCombinationViolation: OBJECT_IDENTIFIER = new _OID(
    [6],
    id_pr
);

/**
 * @summary id_pr_searchValueNotAllowed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-searchValueNotAllowed               OBJECT IDENTIFIER ::= {id-pr 7}
 * ```
 *
 * @constant
 */
export const id_pr_searchValueNotAllowed: OBJECT_IDENTIFIER = new _OID(
    [7],
    id_pr
);

/**
 * @summary id_pr_missingSearchAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-missingSearchAttribute              OBJECT IDENTIFIER ::= {id-pr 8}
 * ```
 *
 * @constant
 */
export const id_pr_missingSearchAttribute: OBJECT_IDENTIFIER = new _OID(
    [8],
    id_pr
);

/**
 * @summary id_pr_searchValueViolation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-searchValueViolation                OBJECT IDENTIFIER ::= {id-pr 9}
 * ```
 *
 * @constant
 */
export const id_pr_searchValueViolation: OBJECT_IDENTIFIER = new _OID(
    [9],
    id_pr
);

/**
 * @summary id_pr_attributeNegationViolation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-attributeNegationViolation          OBJECT IDENTIFIER ::= {id-pr 10}
 * ```
 *
 * @constant
 */
export const id_pr_attributeNegationViolation: OBJECT_IDENTIFIER = new _OID(
    [10],
    id_pr
);

/**
 * @summary id_pr_searchValueRequired
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-searchValueRequired                 OBJECT IDENTIFIER ::= {id-pr 11}
 * ```
 *
 * @constant
 */
export const id_pr_searchValueRequired: OBJECT_IDENTIFIER = new _OID(
    [11],
    id_pr
);

/**
 * @summary id_pr_invalidSearchValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-invalidSearchValue                  OBJECT IDENTIFIER ::= {id-pr 12}
 * ```
 *
 * @constant
 */
export const id_pr_invalidSearchValue: OBJECT_IDENTIFIER = new _OID(
    [12],
    id_pr
);

/**
 * @summary id_pr_searchContextViolation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-searchContextViolation              OBJECT IDENTIFIER ::= {id-pr 13}
 * ```
 *
 * @constant
 */
export const id_pr_searchContextViolation: OBJECT_IDENTIFIER = new _OID(
    [13],
    id_pr
);

/**
 * @summary id_pr_searchContextCombinationViolation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-searchContextCombinationViolation   OBJECT IDENTIFIER ::= {id-pr 14}
 * ```
 *
 * @constant
 */
export const id_pr_searchContextCombinationViolation: OBJECT_IDENTIFIER = new _OID(
    [14],
    id_pr
);

/**
 * @summary id_pr_missingSearchContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-missingSearchContext                OBJECT IDENTIFIER ::= {id-pr 15}
 * ```
 *
 * @constant
 */
export const id_pr_missingSearchContext: OBJECT_IDENTIFIER = new _OID(
    [15],
    id_pr
);

/**
 * @summary id_pr_searchContextValueViolation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-searchContextValueViolation         OBJECT IDENTIFIER ::= {id-pr 16}
 * ```
 *
 * @constant
 */
export const id_pr_searchContextValueViolation: OBJECT_IDENTIFIER = new _OID(
    [16],
    id_pr
);

/**
 * @summary id_pr_searchContextValueRequired
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-searchContextValueRequired          OBJECT IDENTIFIER ::= {id-pr 17}
 * ```
 *
 * @constant
 */
export const id_pr_searchContextValueRequired: OBJECT_IDENTIFIER = new _OID(
    [17],
    id_pr
);

/**
 * @summary id_pr_invalidContextSearchValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-invalidContextSearchValue           OBJECT IDENTIFIER ::= {id-pr 18}
 * ```
 *
 * @constant
 */
export const id_pr_invalidContextSearchValue: OBJECT_IDENTIFIER = new _OID(
    [18],
    id_pr
);

/**
 * @summary id_pr_unsupportedMatchingRule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-unsupportedMatchingRule             OBJECT IDENTIFIER ::= {id-pr 19}
 * ```
 *
 * @constant
 */
export const id_pr_unsupportedMatchingRule: OBJECT_IDENTIFIER = new _OID(
    [19],
    id_pr
);

/**
 * @summary id_pr_attributeMatchingViolation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-attributeMatchingViolation          OBJECT IDENTIFIER ::= {id-pr 20}
 * ```
 *
 * @constant
 */
export const id_pr_attributeMatchingViolation: OBJECT_IDENTIFIER = new _OID(
    [20],
    id_pr
);

/**
 * @summary id_pr_unsupportedMatchingUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-unsupportedMatchingUse              OBJECT IDENTIFIER ::= {id-pr 21}
 * ```
 *
 * @constant
 */
export const id_pr_unsupportedMatchingUse: OBJECT_IDENTIFIER = new _OID(
    [21],
    id_pr
);

/**
 * @summary id_pr_matchingUseViolation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-matchingUseViolation                OBJECT IDENTIFIER ::= {id-pr 22}
 * ```
 *
 * @constant
 */
export const id_pr_matchingUseViolation: OBJECT_IDENTIFIER = new _OID(
    [22],
    id_pr
);

/**
 * @summary id_pr_hierarchySelectForbidden
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-hierarchySelectForbidden            OBJECT IDENTIFIER ::= {id-pr 23}
 * ```
 *
 * @constant
 */
export const id_pr_hierarchySelectForbidden: OBJECT_IDENTIFIER = new _OID(
    [23],
    id_pr
);

/**
 * @summary id_pr_invalidHierarchySelect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-invalidHierarchySelect              OBJECT IDENTIFIER ::= {id-pr 24}
 * ```
 *
 * @constant
 */
export const id_pr_invalidHierarchySelect: OBJECT_IDENTIFIER = new _OID(
    [24],
    id_pr
);

/**
 * @summary id_pr_unavailableHierarchySelect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-unavailableHierarchySelect          OBJECT IDENTIFIER ::= {id-pr 25}
 * ```
 *
 * @constant
 */
export const id_pr_unavailableHierarchySelect: OBJECT_IDENTIFIER = new _OID(
    [25],
    id_pr
);

/**
 * @summary id_pr_invalidSearchControlOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-invalidSearchControlOptions         OBJECT IDENTIFIER ::= {id-pr 26}
 * ```
 *
 * @constant
 */
export const id_pr_invalidSearchControlOptions: OBJECT_IDENTIFIER = new _OID(
    [26],
    id_pr
);

/**
 * @summary id_pr_invalidServiceControlOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-invalidServiceControlOptions        OBJECT IDENTIFIER ::= {id-pr 27}
 * ```
 *
 * @constant
 */
export const id_pr_invalidServiceControlOptions: OBJECT_IDENTIFIER = new _OID(
    [27],
    id_pr
);

/**
 * @summary id_pr_searchSubsetViolation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-searchSubsetViolation               OBJECT IDENTIFIER ::= {id-pr 28}
 * ```
 *
 * @constant
 */
export const id_pr_searchSubsetViolation: OBJECT_IDENTIFIER = new _OID(
    [28],
    id_pr
);

/**
 * @summary id_pr_unmatchedKeyAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-unmatchedKeyAttributes              OBJECT IDENTIFIER ::= {id-pr 29}
 * ```
 *
 * @constant
 */
export const id_pr_unmatchedKeyAttributes: OBJECT_IDENTIFIER = new _OID(
    [29],
    id_pr
);

/**
 * @summary id_pr_ambiguousKeyAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-ambiguousKeyAttributes              OBJECT IDENTIFIER ::= {id-pr 30}
 * ```
 *
 * @constant
 */
export const id_pr_ambiguousKeyAttributes: OBJECT_IDENTIFIER = new _OID(
    [30],
    id_pr
);

/**
 * @summary id_pr_unavailableRelaxationLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-unavailableRelaxationLevel          OBJECT IDENTIFIER ::= {id-pr 31}
 * ```
 *
 * @constant
 */
export const id_pr_unavailableRelaxationLevel: OBJECT_IDENTIFIER = new _OID(
    [31],
    id_pr
);

/**
 * @summary id_pr_emptyHierarchySelection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-emptyHierarchySelection             OBJECT IDENTIFIER ::= {id-pr 32}
 * ```
 *
 * @constant
 */
export const id_pr_emptyHierarchySelection: OBJECT_IDENTIFIER = new _OID(
    [32],
    id_pr
);

/**
 * @summary id_pr_administratorImposedLimit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-administratorImposedLimit           OBJECT IDENTIFIER ::= {id-pr 33}
 * ```
 *
 * @constant
 */
export const id_pr_administratorImposedLimit: OBJECT_IDENTIFIER = new _OID(
    [33],
    id_pr
);

/**
 * @summary id_pr_permanentRestriction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-permanentRestriction                OBJECT IDENTIFIER ::= {id-pr 34}
 * ```
 *
 * @constant
 */
export const id_pr_permanentRestriction: OBJECT_IDENTIFIER = new _OID(
    [34],
    id_pr
);

/**
 * @summary id_pr_temporaryRestriction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-temporaryRestriction                OBJECT IDENTIFIER ::= {id-pr 35}
 * ```
 *
 * @constant
 */
export const id_pr_temporaryRestriction: OBJECT_IDENTIFIER = new _OID(
    [35],
    id_pr
);

/**
 * @summary id_pr_relaxationNotSupported
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-relaxationNotSupported              OBJECT IDENTIFIER ::= {id-pr 36}
 * ```
 *
 * @constant
 */
export const id_pr_relaxationNotSupported: OBJECT_IDENTIFIER = new _OID(
    [36],
    id_pr
);

/**
 * @summary id_lmr_caseIgnoreIA5SubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lmr-caseIgnoreIA5SubstringsMatch       OBJECT IDENTIFIER ::= {id-lmr 3}
 * ```
 *
 * @constant
 */
export const id_lmr_caseIgnoreIA5SubstringsMatch: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_lmr
);

/* END_MODULE SelectedAttributeTypes */
/* eslint-enable */
