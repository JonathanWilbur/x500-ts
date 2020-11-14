/**
 * @module DirectoryManagement
 * @summary The ASN.1 module `DirectoryManagement`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.directoryManagement.6
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
    GeneralizedTime,
    INTEGER,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    PrintableString,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "./DistributedOperations";
import {
    SupplierAndConsumers,
    _decode_SupplierAndConsumers,
    _encode_SupplierAndConsumers,
} from "./DSAOperationalAttributeTypes";
import {
    AttributeType,
    AttributeValue,
    Name,
    _decode_AttributeType,
    _decode_AttributeValue,
    _decode_Name,
    _encode_AttributeType,
    _encode_AttributeValue,
    _encode_Name,
} from "./InformationFramework";
import {
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
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
import { id_mgt } from "./UsefulDefinitions";
export {
    ACIItem,
    _decode_ACIItem,
    _encode_ACIItem,
} from "./BasicAccessControl";
export {
    AttributeProblem,
    AttributeProblem_attributeOrValueAlreadyExists /* IMPORTED_NAMED_INTEGER */,
    AttributeProblem_constraintViolation /* IMPORTED_NAMED_INTEGER */,
    AttributeProblem_contextViolation /* IMPORTED_NAMED_INTEGER */,
    AttributeProblem_inappropriateMatching /* IMPORTED_NAMED_INTEGER */,
    AttributeProblem_invalidAttributeSyntax /* IMPORTED_NAMED_INTEGER */,
    AttributeProblem_noSuchAttributeOrValue /* IMPORTED_NAMED_INTEGER */,
    AttributeProblem_undefinedAttributeType /* IMPORTED_NAMED_INTEGER */,
    Credentials,
    NameProblem,
    NameProblem_aliasDereferencingProblem /* IMPORTED_NAMED_INTEGER */,
    NameProblem_aliasProblem /* IMPORTED_NAMED_INTEGER */,
    NameProblem_invalidAttributeSyntax /* IMPORTED_NAMED_INTEGER */,
    NameProblem_noSuchObject /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem,
    SecurityProblem_blockedCredentials /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_inappropriateAlgorithms /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_inappropriateAuthentication /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_insufficientAccessRights /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_invalidCredentials /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_invalidSignature /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_noInformation /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_passwordExpired /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_protectionRequired /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_spkmError /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_unsupportedAuthenticationMethod /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem,
    ServiceProblem_administrativeLimitExceeded /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_ambiguousKeyAttributes /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_busy /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_chainingRequired /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_ditError /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_invalidQueryReference /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_invalidReference /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_loopDetected /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_notSupportedByLDAP /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_outOfScope /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_requestedServiceNotAvailable /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_saslBindInProgress /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_timeLimitExceeded /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_unableToProceed /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_unavailable /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_unavailableCriticalExtension /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_unsupportedMatchingUse /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_unwillingToPerform /* IMPORTED_NAMED_INTEGER */,
    UpdateProblem,
    UpdateProblem_affectsMultipleDSAs /* IMPORTED_NAMED_INTEGER */,
    UpdateProblem_entryAlreadyExists /* IMPORTED_NAMED_INTEGER */,
    UpdateProblem_familyRuleViolation /* IMPORTED_NAMED_INTEGER */,
    UpdateProblem_hierarchyRuleViolation /* IMPORTED_NAMED_INTEGER */,
    UpdateProblem_insufficientPasswordQuality /* IMPORTED_NAMED_INTEGER */,
    UpdateProblem_namingViolation /* IMPORTED_NAMED_INTEGER */,
    UpdateProblem_noPasswordSlot /* IMPORTED_NAMED_INTEGER */,
    UpdateProblem_noSuchSuperior /* IMPORTED_NAMED_INTEGER */,
    UpdateProblem_notAllowedOnNonLeaf /* IMPORTED_NAMED_INTEGER */,
    UpdateProblem_notAllowedOnRDN /* IMPORTED_NAMED_INTEGER */,
    UpdateProblem_notAncestor /* IMPORTED_NAMED_INTEGER */,
    UpdateProblem_objectClassModificationProhibited /* IMPORTED_NAMED_INTEGER */,
    UpdateProblem_objectClassViolation /* IMPORTED_NAMED_INTEGER */,
    UpdateProblem_parentNotAncestor /* IMPORTED_NAMED_INTEGER */,
    UpdateProblem_passwordInHistory /* IMPORTED_NAMED_INTEGER */,
    _decode_AttributeProblem,
    _decode_Credentials,
    _decode_NameProblem,
    _decode_SecurityProblem,
    _decode_ServiceProblem,
    _decode_UpdateProblem,
    _encode_AttributeProblem,
    _encode_Credentials,
    _encode_NameProblem,
    _encode_SecurityProblem,
    _encode_ServiceProblem,
    _encode_UpdateProblem,
} from "./DirectoryAbstractService";
export {
    AgreementID,
    SchedulingParameters,
    ShadowProblem,
    ShadowProblem_fullUpdateRequired /* IMPORTED_NAMED_INTEGER */,
    ShadowProblem_inactiveAgreement /* IMPORTED_NAMED_INTEGER */,
    ShadowProblem_insufficientResources /* IMPORTED_NAMED_INTEGER */,
    ShadowProblem_invalidAgreementID /* IMPORTED_NAMED_INTEGER */,
    ShadowProblem_invalidInformationReceived /* IMPORTED_NAMED_INTEGER */,
    ShadowProblem_invalidSequencing /* IMPORTED_NAMED_INTEGER */,
    ShadowProblem_missedPrevious /* IMPORTED_NAMED_INTEGER */,
    ShadowProblem_unsuitableTiming /* IMPORTED_NAMED_INTEGER */,
    ShadowProblem_unsupportedStrategy /* IMPORTED_NAMED_INTEGER */,
    ShadowProblem_unwillingToPerform /* IMPORTED_NAMED_INTEGER */,
    ShadowProblem_updateAlreadyReceived /* IMPORTED_NAMED_INTEGER */,
    Time,
    UnitOfReplication,
    UpdateMode,
    _decode_AgreementID,
    _decode_SchedulingParameters,
    _decode_ShadowProblem,
    _decode_Time,
    _decode_UnitOfReplication,
    _decode_UpdateMode,
    _encode_AgreementID,
    _encode_SchedulingParameters,
    _encode_ShadowProblem,
    _encode_Time,
    _encode_UnitOfReplication,
    _encode_UpdateMode,
} from "./DirectoryShadowAbstractService";
export {
    AccessPoint,
    MasterAndShadowAccessPoints,
    OperationProgress,
    ReferenceType,
    ReferenceType_cross /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_ditBridge /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_immediateSuperior /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_master /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_nonSpecificSubordinate /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_self /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_subordinate /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_superior /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_supplier /* IMPORTED_ENUMERATION_ITEM */,
    TraceInformation,
    _decode_AccessPoint,
    _decode_MasterAndShadowAccessPoints,
    _decode_OperationProgress,
    _decode_ReferenceType,
    _decode_TraceInformation,
    _encode_AccessPoint,
    _encode_MasterAndShadowAccessPoints,
    _encode_OperationProgress,
    _encode_ReferenceType,
    _encode_TraceInformation,
    _enum_for_ReferenceType,
} from "./DistributedOperations";
export {
    ConsumerInformation,
    DSEType,
    DSEType_admPoint /* IMPORTED_BIT */,
    DSEType_alias /* IMPORTED_BIT */,
    DSEType_cp /* IMPORTED_BIT */,
    DSEType_ditBridge /* IMPORTED_BIT */,
    DSEType_dsSubentry /* IMPORTED_BIT */,
    DSEType_entry /* IMPORTED_BIT */,
    DSEType_familyMember /* IMPORTED_BIT */,
    DSEType_glue /* IMPORTED_BIT */,
    DSEType_immSupr /* IMPORTED_BIT */,
    DSEType_nssr /* IMPORTED_BIT */,
    DSEType_rhob /* IMPORTED_BIT */,
    DSEType_root /* IMPORTED_BIT */,
    DSEType_sa /* IMPORTED_BIT */,
    DSEType_shadow /* IMPORTED_BIT */,
    DSEType_subentry /* IMPORTED_BIT */,
    DSEType_subr /* IMPORTED_BIT */,
    DSEType_supr /* IMPORTED_BIT */,
    DSEType_xr /* IMPORTED_BIT */,
    SupplierAndConsumers,
    SupplierInformation,
    _decode_ConsumerInformation,
    _decode_DSEType,
    _decode_SupplierAndConsumers,
    _decode_SupplierInformation,
    _encode_ConsumerInformation,
    _encode_DSEType,
    _encode_SupplierAndConsumers,
    _encode_SupplierInformation,
} from "./DSAOperationalAttributeTypes";
export {
    ATTRIBUTE,
    AttributeType,
    AttributeValue,
    DistinguishedName,
    Name,
    OBJECT_CLASS,
    RDNSequence,
    SubtreeSpecification,
    _decode_AttributeType,
    _decode_AttributeValue,
    _decode_DistinguishedName,
    _decode_Name,
    _decode_RDNSequence,
    _decode_SubtreeSpecification,
    _encode_AttributeType,
    _encode_AttributeValue,
    _encode_DistinguishedName,
    _encode_Name,
    _encode_RDNSequence,
    _encode_SubtreeSpecification,
} from "./InformationFramework";
export {
    OpBindingErrorParam,
    OperationalBindingID,
    _decode_OpBindingErrorParam,
    _decode_OperationalBindingID,
    _encode_OpBindingErrorParam,
    _encode_OperationalBindingID,
} from "./OperationalBindingManagement";
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
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
export {
    basicAccessControl,
    directoryAbstractService,
    directoryShadowAbstractService,
    distributedOperations,
    dsaOperationalAttributeTypes,
    enhancedSecurity,
    id_mgt,
    informationFramework,
    opBindingManagement,
    schemaAdministration,
    selectedAttributeTypes,
} from "./UsefulDefinitions";

export type Accessors<> = Name[]; // SetOfType
let _cached_decoder_for_Accessors: $.ASN1Decoder<Accessors> | null = null;
let _cached_encoder_for_Accessors: $.ASN1Encoder<Accessors> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Accessors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Accessors} The decoded data structure.
 */
export function _decode_Accessors(el: _Element) {
    if (!_cached_decoder_for_Accessors) {
        _cached_decoder_for_Accessors = $._decodeSetOf<Name>(
            () => _decode_Name
        );
    }
    return _cached_decoder_for_Accessors(el);
}
/**
 * @summary Encodes a(n) Accessors into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Accessors, encoded as an ASN.1 Element.
 */
export function _encode_Accessors(
    value: Accessors,
    elGetter: $.ASN1Encoder<Accessors>
) {
    if (!_cached_encoder_for_Accessors) {
        _cached_encoder_for_Accessors = $._encodeSetOf<Name>(
            () => _encode_Name,
            $.BER
        );
    }
    return _cached_encoder_for_Accessors(value, elGetter);
}

export type AdministrativeRole<> = OBJECT_IDENTIFIER; // ObjectClassFieldType
let _cached_decoder_for_AdministrativeRole: $.ASN1Decoder<
    AdministrativeRole
> | null = null;
let _cached_encoder_for_AdministrativeRole: $.ASN1Encoder<
    AdministrativeRole
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AdministrativeRole
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdministrativeRole} The decoded data structure.
 */
export function _decode_AdministrativeRole(el: _Element) {
    if (!_cached_decoder_for_AdministrativeRole) {
        _cached_decoder_for_AdministrativeRole = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_AdministrativeRole(el);
}
/**
 * @summary Encodes a(n) AdministrativeRole into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdministrativeRole, encoded as an ASN.1 Element.
 */
export function _encode_AdministrativeRole(
    value: AdministrativeRole,
    elGetter: $.ASN1Encoder<AdministrativeRole>
) {
    if (!_cached_encoder_for_AdministrativeRole) {
        _cached_encoder_for_AdministrativeRole = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_AdministrativeRole(value, elGetter);
}

export type ApplicationContext<> = OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_ApplicationContext: $.ASN1Decoder<
    ApplicationContext
> | null = null;
let _cached_encoder_for_ApplicationContext: $.ASN1Encoder<
    ApplicationContext
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationContext
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplicationContext} The decoded data structure.
 */
export function _decode_ApplicationContext(el: _Element) {
    if (!_cached_decoder_for_ApplicationContext) {
        _cached_decoder_for_ApplicationContext = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_ApplicationContext(el);
}
/**
 * @summary Encodes a(n) ApplicationContext into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationContext, encoded as an ASN.1 Element.
 */
export function _encode_ApplicationContext(
    value: ApplicationContext,
    elGetter: $.ASN1Encoder<ApplicationContext>
) {
    if (!_cached_encoder_for_ApplicationContext) {
        _cached_encoder_for_ApplicationContext = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_ApplicationContext(value, elGetter);
}

/**
 * @summary AssociationEstablishment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssociationEstablishment  ::=  BIT STRING {inward(0), outward(1)}
 * ```
 */
export type AssociationEstablishment = BIT_STRING;
/**
 * @summary AssociationEstablishment_inward
 * @constant
 */
export const AssociationEstablishment_inward: number = 0; /* LONG_NAMED_BIT */
/**
 * @summary AssociationEstablishment_outward
 * @constant
 */
export const AssociationEstablishment_outward: number = 1; /* LONG_NAMED_BIT */
let _cached_decoder_for_AssociationEstablishment: $.ASN1Decoder<
    AssociationEstablishment
> | null = null;
let _cached_encoder_for_AssociationEstablishment: $.ASN1Encoder<
    AssociationEstablishment
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AssociationEstablishment
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssociationEstablishment} The decoded data structure.
 */
export function _decode_AssociationEstablishment(el: _Element) {
    if (!_cached_decoder_for_AssociationEstablishment) {
        _cached_decoder_for_AssociationEstablishment = $._decodeBitString;
    }
    return _cached_decoder_for_AssociationEstablishment(el);
}
/**
 * @summary Encodes a(n) AssociationEstablishment into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociationEstablishment, encoded as an ASN.1 Element.
 */
export function _encode_AssociationEstablishment(
    value: AssociationEstablishment,
    elGetter: $.ASN1Encoder<AssociationEstablishment>
) {
    if (!_cached_encoder_for_AssociationEstablishment) {
        _cached_encoder_for_AssociationEstablishment = $._encodeBitString;
    }
    return _cached_encoder_for_AssociationEstablishment(value, elGetter);
}

/**
 * @summary AssociationId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssociationId  ::=  INTEGER
 * ```
 */
export type AssociationId = INTEGER;
let _cached_decoder_for_AssociationId: $.ASN1Decoder<
    AssociationId
> | null = null;
let _cached_encoder_for_AssociationId: $.ASN1Encoder<
    AssociationId
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AssociationId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssociationId} The decoded data structure.
 */
export function _decode_AssociationId(el: _Element) {
    if (!_cached_decoder_for_AssociationId) {
        _cached_decoder_for_AssociationId = $._decodeInteger;
    }
    return _cached_decoder_for_AssociationId(el);
}
/**
 * @summary Encodes a(n) AssociationId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociationId, encoded as an ASN.1 Element.
 */
export function _encode_AssociationId(
    value: AssociationId,
    elGetter: $.ASN1Encoder<AssociationId>
) {
    if (!_cached_encoder_for_AssociationId) {
        _cached_encoder_for_AssociationId = $._encodeInteger;
    }
    return _cached_encoder_for_AssociationId(value, elGetter);
}

/**
 * @summary AuthenReasonSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenReasonSyntax  ::=  INTEGER {
 *   unknownUser(0), incorrectPassword(1), inaccessiblePassword(2),
 *   passwordVerificationLoop(3), unrecognizedUser(4)}
 * ```
 */
export type AuthenReasonSyntax = INTEGER;
/**
 * @summary AuthenReasonSyntax_unknownUser
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_unknownUser: AuthenReasonSyntax = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary AuthenReasonSyntax_incorrectPassword
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_incorrectPassword: AuthenReasonSyntax = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary AuthenReasonSyntax_inaccessiblePassword
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_inaccessiblePassword: AuthenReasonSyntax = 2; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary AuthenReasonSyntax_passwordVerificationLoop
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_passwordVerificationLoop: AuthenReasonSyntax = 3; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary AuthenReasonSyntax_unrecognizedUser
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_unrecognizedUser: AuthenReasonSyntax = 4; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_AuthenReasonSyntax: $.ASN1Decoder<
    AuthenReasonSyntax
> | null = null;
let _cached_encoder_for_AuthenReasonSyntax: $.ASN1Encoder<
    AuthenReasonSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AuthenReasonSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenReasonSyntax} The decoded data structure.
 */
export function _decode_AuthenReasonSyntax(el: _Element) {
    if (!_cached_decoder_for_AuthenReasonSyntax) {
        _cached_decoder_for_AuthenReasonSyntax = $._decodeInteger;
    }
    return _cached_decoder_for_AuthenReasonSyntax(el);
}
/**
 * @summary Encodes a(n) AuthenReasonSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenReasonSyntax, encoded as an ASN.1 Element.
 */
export function _encode_AuthenReasonSyntax(
    value: AuthenReasonSyntax,
    elGetter: $.ASN1Encoder<AuthenReasonSyntax>
) {
    if (!_cached_encoder_for_AuthenReasonSyntax) {
        _cached_encoder_for_AuthenReasonSyntax = $._encodeInteger;
    }
    return _cached_encoder_for_AuthenReasonSyntax(value, elGetter);
}

/**
 * @summary DirectoryInformationServiceElement_operationType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DirectoryInformationServiceElement-operationType ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DirectoryInformationServiceElement_operationType = BIT_STRING;
/**
 * @summary DirectoryInformationServiceElement_operationType_read
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_read: number = 0; /* LONG_NAMED_BIT */
/**
 * @summary DirectoryInformationServiceElement_operationType_compare
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_compare: number = 1; /* LONG_NAMED_BIT */
/**
 * @summary DirectoryInformationServiceElement_operationType_abandon
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_abandon: number = 2; /* LONG_NAMED_BIT */
/**
 * @summary DirectoryInformationServiceElement_operationType_list
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_list: number = 3; /* LONG_NAMED_BIT */
/**
 * @summary DirectoryInformationServiceElement_operationType_search
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_search: number = 4; /* LONG_NAMED_BIT */
/**
 * @summary DirectoryInformationServiceElement_operationType_addEntry
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_addEntry: number = 5; /* LONG_NAMED_BIT */
/**
 * @summary DirectoryInformationServiceElement_operationType_removeEntry
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_removeEntry: number = 6; /* LONG_NAMED_BIT */
/**
 * @summary DirectoryInformationServiceElement_operationType_modifyEntry
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_modifyEntry: number = 7; /* LONG_NAMED_BIT */
/**
 * @summary DirectoryInformationServiceElement_operationType_modifyDN
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_modifyDN: number = 8; /* LONG_NAMED_BIT */
let _cached_decoder_for_DirectoryInformationServiceElement_operationType: $.ASN1Decoder<
    DirectoryInformationServiceElement_operationType
> | null = null;
let _cached_encoder_for_DirectoryInformationServiceElement_operationType: $.ASN1Encoder<
    DirectoryInformationServiceElement_operationType
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DirectoryInformationServiceElement_operationType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DirectoryInformationServiceElement_operationType} The decoded data structure.
 */
export function _decode_DirectoryInformationServiceElement_operationType(
    el: _Element
) {
    if (!_cached_decoder_for_DirectoryInformationServiceElement_operationType) {
        _cached_decoder_for_DirectoryInformationServiceElement_operationType =
            $._decodeBitString;
    }
    return _cached_decoder_for_DirectoryInformationServiceElement_operationType(
        el
    );
}
/**
 * @summary Encodes a(n) DirectoryInformationServiceElement_operationType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectoryInformationServiceElement_operationType, encoded as an ASN.1 Element.
 */
export function _encode_DirectoryInformationServiceElement_operationType(
    value: DirectoryInformationServiceElement_operationType,
    elGetter: $.ASN1Encoder<DirectoryInformationServiceElement_operationType>
) {
    if (!_cached_encoder_for_DirectoryInformationServiceElement_operationType) {
        _cached_encoder_for_DirectoryInformationServiceElement_operationType =
            $._encodeBitString;
    }
    return _cached_encoder_for_DirectoryInformationServiceElement_operationType(
        value,
        elGetter
    );
}

/**
 * @summary DirectoryInformationServiceElement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DirectoryInformationServiceElement ::= SEQUENCE {
 *   operationType
 *     BIT STRING {read(0), compare(1), abandon(2), list(3), search(4),
 *                 addEntry(5), removeEntry(6), modifyEntry(7), modifyDN(8)}
 *       OPTIONAL,
 *   attributeType   AttributeType OPTIONAL,
 *   attributeValue  [0]  AttributeValue OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class DirectoryInformationServiceElement {
    constructor(
        /**
         * @summary `operationType`.
         * @public
         * @readonly
         */
        readonly operationType: OPTIONAL<
            DirectoryInformationServiceElement_operationType
        >,
        /**
         * @summary `attributeType`.
         * @public
         * @readonly
         */
        readonly attributeType: OPTIONAL<AttributeType>,
        /**
         * @summary `attributeValue`.
         * @public
         * @readonly
         */
        readonly attributeValue: OPTIONAL<AttributeValue>
    ) {}

    /**
     * @summary Restructures an object into a DirectoryInformationServiceElement
     * @description
     *
     * This takes an `object` and converts it to a `DirectoryInformationServiceElement`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DirectoryInformationServiceElement`.
     * @returns {DirectoryInformationServiceElement}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof DirectoryInformationServiceElement]: DirectoryInformationServiceElement[_K];
            }
        >
    ): DirectoryInformationServiceElement {
        return new DirectoryInformationServiceElement(
            _o.operationType,
            _o.attributeType,
            _o.attributeValue
        );
    }
}
/**
 * @summary The Leading Root Component Types of DirectoryInformationServiceElement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DirectoryInformationServiceElement: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "operationType",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributeType",
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributeValue",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DirectoryInformationServiceElement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DirectoryInformationServiceElement: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DirectoryInformationServiceElement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DirectoryInformationServiceElement: $.ComponentSpec[] = [];
let _cached_decoder_for_DirectoryInformationServiceElement: $.ASN1Decoder<
    DirectoryInformationServiceElement
> | null = null;
let _cached_encoder_for_DirectoryInformationServiceElement: $.ASN1Encoder<
    DirectoryInformationServiceElement
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DirectoryInformationServiceElement
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DirectoryInformationServiceElement} The decoded data structure.
 */
export function _decode_DirectoryInformationServiceElement(el: _Element) {
    if (!_cached_decoder_for_DirectoryInformationServiceElement) {
        _cached_decoder_for_DirectoryInformationServiceElement = function (
            el: _Element
        ): DirectoryInformationServiceElement {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let operationType: OPTIONAL<DirectoryInformationServiceElement_operationType>;
            let attributeType: OPTIONAL<AttributeType>;
            let attributeValue: OPTIONAL<AttributeValue>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                operationType: (_el: _Element): void => {
                    operationType = _decode_DirectoryInformationServiceElement_operationType(
                        _el
                    );
                },
                attributeType: (_el: _Element): void => {
                    attributeType = _decode_AttributeType(_el);
                },
                attributeValue: (_el: _Element): void => {
                    attributeValue = $._decode_explicit<AttributeValue>(
                        () => _decode_AttributeValue
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DirectoryInformationServiceElement,
                _extension_additions_list_spec_for_DirectoryInformationServiceElement,
                _root_component_type_list_2_spec_for_DirectoryInformationServiceElement,
                undefined
            );
            return new DirectoryInformationServiceElement(
                /* SEQUENCE_CONSTRUCTOR_CALL */ operationType,
                attributeType,
                attributeValue
            );
        };
    }
    return _cached_decoder_for_DirectoryInformationServiceElement(el);
}
/**
 * @summary Encodes a(n) DirectoryInformationServiceElement into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectoryInformationServiceElement, encoded as an ASN.1 Element.
 */
export function _encode_DirectoryInformationServiceElement(
    value: DirectoryInformationServiceElement,
    elGetter: $.ASN1Encoder<DirectoryInformationServiceElement>
) {
    if (!_cached_encoder_for_DirectoryInformationServiceElement) {
        _cached_encoder_for_DirectoryInformationServiceElement = function (
            value: DirectoryInformationServiceElement,
            elGetter: $.ASN1Encoder<DirectoryInformationServiceElement>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.operationType === undefined
                            ? undefined
                            : _encode_DirectoryInformationServiceElement_operationType(
                                  value.operationType,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.attributeType === undefined
                            ? undefined
                            : _encode_AttributeType(value.attributeType, $.BER),
                        /* IF_ABSENT  */ value.attributeValue === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AttributeValue,
                                  $.BER
                              )(value.attributeValue, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DirectoryInformationServiceElement(
        value,
        elGetter
    );
}

/**
 * @summary DSAScopeOfChainingValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSAScopeOfChainingValue  ::=  INTEGER {dmd(0), country(1), global(2)}
 * ```
 */
export type DSAScopeOfChainingValue = INTEGER;
/**
 * @summary DSAScopeOfChainingValue_dmd
 * @constant
 * @type {number}
 */
export const DSAScopeOfChainingValue_dmd: DSAScopeOfChainingValue = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary DSAScopeOfChainingValue_country
 * @constant
 * @type {number}
 */
export const DSAScopeOfChainingValue_country: DSAScopeOfChainingValue = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary DSAScopeOfChainingValue_global
 * @constant
 * @type {number}
 */
export const DSAScopeOfChainingValue_global: DSAScopeOfChainingValue = 2; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_DSAScopeOfChainingValue: $.ASN1Decoder<
    DSAScopeOfChainingValue
> | null = null;
let _cached_encoder_for_DSAScopeOfChainingValue: $.ASN1Encoder<
    DSAScopeOfChainingValue
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DSAScopeOfChainingValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSAScopeOfChainingValue} The decoded data structure.
 */
export function _decode_DSAScopeOfChainingValue(el: _Element) {
    if (!_cached_decoder_for_DSAScopeOfChainingValue) {
        _cached_decoder_for_DSAScopeOfChainingValue = $._decodeInteger;
    }
    return _cached_decoder_for_DSAScopeOfChainingValue(el);
}
/**
 * @summary Encodes a(n) DSAScopeOfChainingValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSAScopeOfChainingValue, encoded as an ASN.1 Element.
 */
export function _encode_DSAScopeOfChainingValue(
    value: DSAScopeOfChainingValue,
    elGetter: $.ASN1Encoder<DSAScopeOfChainingValue>
) {
    if (!_cached_encoder_for_DSAScopeOfChainingValue) {
        _cached_encoder_for_DSAScopeOfChainingValue = $._encodeInteger;
    }
    return _cached_encoder_for_DSAScopeOfChainingValue(value, elGetter);
}

/**
 * @summary DSAScopeOfReferralValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSAScopeOfReferralValue  ::=  INTEGER {dmd(0), country(1), global(2)}
 * ```
 */
export type DSAScopeOfReferralValue = INTEGER;
/**
 * @summary DSAScopeOfReferralValue_dmd
 * @constant
 * @type {number}
 */
export const DSAScopeOfReferralValue_dmd: DSAScopeOfReferralValue = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary DSAScopeOfReferralValue_country
 * @constant
 * @type {number}
 */
export const DSAScopeOfReferralValue_country: DSAScopeOfReferralValue = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary DSAScopeOfReferralValue_global
 * @constant
 * @type {number}
 */
export const DSAScopeOfReferralValue_global: DSAScopeOfReferralValue = 2; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_DSAScopeOfReferralValue: $.ASN1Decoder<
    DSAScopeOfReferralValue
> | null = null;
let _cached_encoder_for_DSAScopeOfReferralValue: $.ASN1Encoder<
    DSAScopeOfReferralValue
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DSAScopeOfReferralValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSAScopeOfReferralValue} The decoded data structure.
 */
export function _decode_DSAScopeOfReferralValue(el: _Element) {
    if (!_cached_decoder_for_DSAScopeOfReferralValue) {
        _cached_decoder_for_DSAScopeOfReferralValue = $._decodeInteger;
    }
    return _cached_decoder_for_DSAScopeOfReferralValue(el);
}
/**
 * @summary Encodes a(n) DSAScopeOfReferralValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSAScopeOfReferralValue, encoded as an ASN.1 Element.
 */
export function _encode_DSAScopeOfReferralValue(
    value: DSAScopeOfReferralValue,
    elGetter: $.ASN1Encoder<DSAScopeOfReferralValue>
) {
    if (!_cached_encoder_for_DSAScopeOfReferralValue) {
        _cached_encoder_for_DSAScopeOfReferralValue = $._encodeInteger;
    }
    return _cached_encoder_for_DSAScopeOfReferralValue(value, elGetter);
}

/**
 * @summary HOBRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HOBRole  ::=  INTEGER {superior(0), subordinate(1)}
 * ```
 */
export type HOBRole = INTEGER;
/**
 * @summary HOBRole_superior
 * @constant
 * @type {number}
 */
export const HOBRole_superior: HOBRole = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary HOBRole_subordinate
 * @constant
 * @type {number}
 */
export const HOBRole_subordinate: HOBRole = 1; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_HOBRole: $.ASN1Decoder<HOBRole> | null = null;
let _cached_encoder_for_HOBRole: $.ASN1Encoder<HOBRole> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) HOBRole
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HOBRole} The decoded data structure.
 */
export function _decode_HOBRole(el: _Element) {
    if (!_cached_decoder_for_HOBRole) {
        _cached_decoder_for_HOBRole = $._decodeInteger;
    }
    return _cached_decoder_for_HOBRole(el);
}
/**
 * @summary Encodes a(n) HOBRole into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HOBRole, encoded as an ASN.1 Element.
 */
export function _encode_HOBRole(
    value: HOBRole,
    elGetter: $.ASN1Encoder<HOBRole>
) {
    if (!_cached_encoder_for_HOBRole) {
        _cached_encoder_for_HOBRole = $._encodeInteger;
    }
    return _cached_encoder_for_HOBRole(value, elGetter);
}

/**
 * @summary MgtBitString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtBitString  ::=  BIT STRING
 * ```
 */
export type MgtBitString = BIT_STRING;
let _cached_decoder_for_MgtBitString: $.ASN1Decoder<MgtBitString> | null = null;
let _cached_encoder_for_MgtBitString: $.ASN1Encoder<MgtBitString> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MgtBitString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtBitString} The decoded data structure.
 */
export function _decode_MgtBitString(el: _Element) {
    if (!_cached_decoder_for_MgtBitString) {
        _cached_decoder_for_MgtBitString = $._decodeBitString;
    }
    return _cached_decoder_for_MgtBitString(el);
}
/**
 * @summary Encodes a(n) MgtBitString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtBitString, encoded as an ASN.1 Element.
 */
export function _encode_MgtBitString(
    value: MgtBitString,
    elGetter: $.ASN1Encoder<MgtBitString>
) {
    if (!_cached_encoder_for_MgtBitString) {
        _cached_encoder_for_MgtBitString = $._encodeBitString;
    }
    return _cached_encoder_for_MgtBitString(value, elGetter);
}

export type MgtBoolean<> = BOOLEAN; // BooleanType
let _cached_decoder_for_MgtBoolean: $.ASN1Decoder<MgtBoolean> | null = null;
let _cached_encoder_for_MgtBoolean: $.ASN1Encoder<MgtBoolean> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MgtBoolean
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtBoolean} The decoded data structure.
 */
export function _decode_MgtBoolean(el: _Element) {
    if (!_cached_decoder_for_MgtBoolean) {
        _cached_decoder_for_MgtBoolean = $._decodeBoolean;
    }
    return _cached_decoder_for_MgtBoolean(el);
}
/**
 * @summary Encodes a(n) MgtBoolean into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtBoolean, encoded as an ASN.1 Element.
 */
export function _encode_MgtBoolean(
    value: MgtBoolean,
    elGetter: $.ASN1Encoder<MgtBoolean>
) {
    if (!_cached_encoder_for_MgtBoolean) {
        _cached_encoder_for_MgtBoolean = $._encodeBoolean;
    }
    return _cached_encoder_for_MgtBoolean(value, elGetter);
}

export type MgtCommonName<> = UnboundedDirectoryString; // DefinedType
let _cached_decoder_for_MgtCommonName: $.ASN1Decoder<
    MgtCommonName
> | null = null;
let _cached_encoder_for_MgtCommonName: $.ASN1Encoder<
    MgtCommonName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MgtCommonName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtCommonName} The decoded data structure.
 */
export function _decode_MgtCommonName(el: _Element) {
    if (!_cached_decoder_for_MgtCommonName) {
        _cached_decoder_for_MgtCommonName = _decode_UnboundedDirectoryString;
    }
    return _cached_decoder_for_MgtCommonName(el);
}
/**
 * @summary Encodes a(n) MgtCommonName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtCommonName, encoded as an ASN.1 Element.
 */
export function _encode_MgtCommonName(
    value: MgtCommonName,
    elGetter: $.ASN1Encoder<MgtCommonName>
) {
    if (!_cached_encoder_for_MgtCommonName) {
        _cached_encoder_for_MgtCommonName = _encode_UnboundedDirectoryString;
    }
    return _cached_encoder_for_MgtCommonName(value, elGetter);
}

export type MgtGeneralizedTime<> = GeneralizedTime; // GeneralizedTime
let _cached_decoder_for_MgtGeneralizedTime: $.ASN1Decoder<
    MgtGeneralizedTime
> | null = null;
let _cached_encoder_for_MgtGeneralizedTime: $.ASN1Encoder<
    MgtGeneralizedTime
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MgtGeneralizedTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtGeneralizedTime} The decoded data structure.
 */
export function _decode_MgtGeneralizedTime(el: _Element) {
    if (!_cached_decoder_for_MgtGeneralizedTime) {
        _cached_decoder_for_MgtGeneralizedTime = $._decodeGeneralizedTime;
    }
    return _cached_decoder_for_MgtGeneralizedTime(el);
}
/**
 * @summary Encodes a(n) MgtGeneralizedTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtGeneralizedTime, encoded as an ASN.1 Element.
 */
export function _encode_MgtGeneralizedTime(
    value: MgtGeneralizedTime,
    elGetter: $.ASN1Encoder<MgtGeneralizedTime>
) {
    if (!_cached_encoder_for_MgtGeneralizedTime) {
        _cached_encoder_for_MgtGeneralizedTime = $._encodeGeneralizedTime;
    }
    return _cached_encoder_for_MgtGeneralizedTime(value, elGetter);
}

/**
 * @summary MgtInteger
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtInteger  ::=  INTEGER
 * ```
 */
export type MgtInteger = INTEGER;
let _cached_decoder_for_MgtInteger: $.ASN1Decoder<MgtInteger> | null = null;
let _cached_encoder_for_MgtInteger: $.ASN1Encoder<MgtInteger> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MgtInteger
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtInteger} The decoded data structure.
 */
export function _decode_MgtInteger(el: _Element) {
    if (!_cached_decoder_for_MgtInteger) {
        _cached_decoder_for_MgtInteger = $._decodeInteger;
    }
    return _cached_decoder_for_MgtInteger(el);
}
/**
 * @summary Encodes a(n) MgtInteger into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtInteger, encoded as an ASN.1 Element.
 */
export function _encode_MgtInteger(
    value: MgtInteger,
    elGetter: $.ASN1Encoder<MgtInteger>
) {
    if (!_cached_encoder_for_MgtInteger) {
        _cached_encoder_for_MgtInteger = $._encodeInteger;
    }
    return _cached_encoder_for_MgtInteger(value, elGetter);
}

export type MgtName<> = Name; // DefinedType
let _cached_decoder_for_MgtName: $.ASN1Decoder<MgtName> | null = null;
let _cached_encoder_for_MgtName: $.ASN1Encoder<MgtName> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MgtName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtName} The decoded data structure.
 */
export function _decode_MgtName(el: _Element) {
    if (!_cached_decoder_for_MgtName) {
        _cached_decoder_for_MgtName = _decode_Name;
    }
    return _cached_decoder_for_MgtName(el);
}
/**
 * @summary Encodes a(n) MgtName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtName, encoded as an ASN.1 Element.
 */
export function _encode_MgtName(
    value: MgtName,
    elGetter: $.ASN1Encoder<MgtName>
) {
    if (!_cached_encoder_for_MgtName) {
        _cached_encoder_for_MgtName = _encode_Name;
    }
    return _cached_encoder_for_MgtName(value, elGetter);
}

export type MgtOctetString<> = OCTET_STRING; // OctetStringType
let _cached_decoder_for_MgtOctetString: $.ASN1Decoder<
    MgtOctetString
> | null = null;
let _cached_encoder_for_MgtOctetString: $.ASN1Encoder<
    MgtOctetString
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MgtOctetString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtOctetString} The decoded data structure.
 */
export function _decode_MgtOctetString(el: _Element) {
    if (!_cached_decoder_for_MgtOctetString) {
        _cached_decoder_for_MgtOctetString = $._decodeOctetString;
    }
    return _cached_decoder_for_MgtOctetString(el);
}
/**
 * @summary Encodes a(n) MgtOctetString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtOctetString, encoded as an ASN.1 Element.
 */
export function _encode_MgtOctetString(
    value: MgtOctetString,
    elGetter: $.ASN1Encoder<MgtOctetString>
) {
    if (!_cached_encoder_for_MgtOctetString) {
        _cached_encoder_for_MgtOctetString = $._encodeOctetString;
    }
    return _cached_encoder_for_MgtOctetString(value, elGetter);
}

export type MgtOID<> = OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_MgtOID: $.ASN1Decoder<MgtOID> | null = null;
let _cached_encoder_for_MgtOID: $.ASN1Encoder<MgtOID> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MgtOID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtOID} The decoded data structure.
 */
export function _decode_MgtOID(el: _Element) {
    if (!_cached_decoder_for_MgtOID) {
        _cached_decoder_for_MgtOID = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_MgtOID(el);
}
/**
 * @summary Encodes a(n) MgtOID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtOID, encoded as an ASN.1 Element.
 */
export function _encode_MgtOID(value: MgtOID, elGetter: $.ASN1Encoder<MgtOID>) {
    if (!_cached_encoder_for_MgtOID) {
        _cached_encoder_for_MgtOID = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_MgtOID(value, elGetter);
}

export type MgtPrintableString<> = PrintableString; // PrintableString
let _cached_decoder_for_MgtPrintableString: $.ASN1Decoder<
    MgtPrintableString
> | null = null;
let _cached_encoder_for_MgtPrintableString: $.ASN1Encoder<
    MgtPrintableString
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MgtPrintableString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtPrintableString} The decoded data structure.
 */
export function _decode_MgtPrintableString(el: _Element) {
    if (!_cached_decoder_for_MgtPrintableString) {
        _cached_decoder_for_MgtPrintableString = $._decodePrintableString;
    }
    return _cached_decoder_for_MgtPrintableString(el);
}
/**
 * @summary Encodes a(n) MgtPrintableString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtPrintableString, encoded as an ASN.1 Element.
 */
export function _encode_MgtPrintableString(
    value: MgtPrintableString,
    elGetter: $.ASN1Encoder<MgtPrintableString>
) {
    if (!_cached_encoder_for_MgtPrintableString) {
        _cached_encoder_for_MgtPrintableString = $._encodePrintableString;
    }
    return _cached_encoder_for_MgtPrintableString(value, elGetter);
}

/**
 * @summary PeerEntityAuthenticationPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PeerEntityAuthenticationPolicy  ::=  BIT STRING {
 *   none(0), nameOnly(1), simpleUnprotected(2), simpleProtected(3), strong(4),
 *   external(5)}
 * ```
 */
export type PeerEntityAuthenticationPolicy = BIT_STRING;
/**
 * @summary PeerEntityAuthenticationPolicy_none
 * @constant
 */
export const PeerEntityAuthenticationPolicy_none: number = 0; /* LONG_NAMED_BIT */
/**
 * @summary PeerEntityAuthenticationPolicy_nameOnly
 * @constant
 */
export const PeerEntityAuthenticationPolicy_nameOnly: number = 1; /* LONG_NAMED_BIT */
/**
 * @summary PeerEntityAuthenticationPolicy_simpleUnprotected
 * @constant
 */
export const PeerEntityAuthenticationPolicy_simpleUnprotected: number = 2; /* LONG_NAMED_BIT */
/**
 * @summary PeerEntityAuthenticationPolicy_simpleProtected
 * @constant
 */
export const PeerEntityAuthenticationPolicy_simpleProtected: number = 3; /* LONG_NAMED_BIT */
/**
 * @summary PeerEntityAuthenticationPolicy_strong
 * @constant
 */
export const PeerEntityAuthenticationPolicy_strong: number = 4; /* LONG_NAMED_BIT */
/**
 * @summary PeerEntityAuthenticationPolicy_external
 * @constant
 */
export const PeerEntityAuthenticationPolicy_external: number = 5; /* LONG_NAMED_BIT */
let _cached_decoder_for_PeerEntityAuthenticationPolicy: $.ASN1Decoder<
    PeerEntityAuthenticationPolicy
> | null = null;
let _cached_encoder_for_PeerEntityAuthenticationPolicy: $.ASN1Encoder<
    PeerEntityAuthenticationPolicy
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PeerEntityAuthenticationPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PeerEntityAuthenticationPolicy} The decoded data structure.
 */
export function _decode_PeerEntityAuthenticationPolicy(el: _Element) {
    if (!_cached_decoder_for_PeerEntityAuthenticationPolicy) {
        _cached_decoder_for_PeerEntityAuthenticationPolicy = $._decodeBitString;
    }
    return _cached_decoder_for_PeerEntityAuthenticationPolicy(el);
}
/**
 * @summary Encodes a(n) PeerEntityAuthenticationPolicy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeerEntityAuthenticationPolicy, encoded as an ASN.1 Element.
 */
export function _encode_PeerEntityAuthenticationPolicy(
    value: PeerEntityAuthenticationPolicy,
    elGetter: $.ASN1Encoder<PeerEntityAuthenticationPolicy>
) {
    if (!_cached_encoder_for_PeerEntityAuthenticationPolicy) {
        _cached_encoder_for_PeerEntityAuthenticationPolicy = $._encodeBitString;
    }
    return _cached_encoder_for_PeerEntityAuthenticationPolicy(value, elGetter);
}

export type RemoteDSAList<> = AccessPoint[]; // SetOfType
let _cached_decoder_for_RemoteDSAList: $.ASN1Decoder<
    RemoteDSAList
> | null = null;
let _cached_encoder_for_RemoteDSAList: $.ASN1Encoder<
    RemoteDSAList
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RemoteDSAList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoteDSAList} The decoded data structure.
 */
export function _decode_RemoteDSAList(el: _Element) {
    if (!_cached_decoder_for_RemoteDSAList) {
        _cached_decoder_for_RemoteDSAList = $._decodeSetOf<AccessPoint>(
            () => _decode_AccessPoint
        );
    }
    return _cached_decoder_for_RemoteDSAList(el);
}
/**
 * @summary Encodes a(n) RemoteDSAList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteDSAList, encoded as an ASN.1 Element.
 */
export function _encode_RemoteDSAList(
    value: RemoteDSAList,
    elGetter: $.ASN1Encoder<RemoteDSAList>
) {
    if (!_cached_encoder_for_RemoteDSAList) {
        _cached_encoder_for_RemoteDSAList = $._encodeSetOf<AccessPoint>(
            () => _encode_AccessPoint,
            $.BER
        );
    }
    return _cached_encoder_for_RemoteDSAList(value, elGetter);
}

/**
 * @summary ResourceSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResourceSyntax  ::=  INTEGER {
 *   insufficientMemory(0), insufficientAssociations(1), insufficientDiskSpace(2),
 *   miscellaneousResourceExhausted(4)}
 * ```
 */
export type ResourceSyntax = INTEGER;
/**
 * @summary ResourceSyntax_insufficientMemory
 * @constant
 * @type {number}
 */
export const ResourceSyntax_insufficientMemory: ResourceSyntax = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ResourceSyntax_insufficientAssociations
 * @constant
 * @type {number}
 */
export const ResourceSyntax_insufficientAssociations: ResourceSyntax = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ResourceSyntax_insufficientDiskSpace
 * @constant
 * @type {number}
 */
export const ResourceSyntax_insufficientDiskSpace: ResourceSyntax = 2; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ResourceSyntax_miscellaneousResourceExhausted
 * @constant
 * @type {number}
 */
export const ResourceSyntax_miscellaneousResourceExhausted: ResourceSyntax = 4; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_ResourceSyntax: $.ASN1Decoder<
    ResourceSyntax
> | null = null;
let _cached_encoder_for_ResourceSyntax: $.ASN1Encoder<
    ResourceSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ResourceSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResourceSyntax} The decoded data structure.
 */
export function _decode_ResourceSyntax(el: _Element) {
    if (!_cached_decoder_for_ResourceSyntax) {
        _cached_decoder_for_ResourceSyntax = $._decodeInteger;
    }
    return _cached_decoder_for_ResourceSyntax(el);
}
/**
 * @summary Encodes a(n) ResourceSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceSyntax, encoded as an ASN.1 Element.
 */
export function _encode_ResourceSyntax(
    value: ResourceSyntax,
    elGetter: $.ASN1Encoder<ResourceSyntax>
) {
    if (!_cached_encoder_for_ResourceSyntax) {
        _cached_encoder_for_ResourceSyntax = $._encodeInteger;
    }
    return _cached_encoder_for_ResourceSyntax(value, elGetter);
}

/**
 * @summary RequestAuthenticationPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestAuthenticationPolicy  ::=  BIT STRING {none(0), simpleName(1), strong(2)}
 * ```
 */
export type RequestAuthenticationPolicy = BIT_STRING;
/**
 * @summary RequestAuthenticationPolicy_none
 * @constant
 */
export const RequestAuthenticationPolicy_none: number = 0; /* LONG_NAMED_BIT */
/**
 * @summary RequestAuthenticationPolicy_simpleName
 * @constant
 */
export const RequestAuthenticationPolicy_simpleName: number = 1; /* LONG_NAMED_BIT */
/**
 * @summary RequestAuthenticationPolicy_strong
 * @constant
 */
export const RequestAuthenticationPolicy_strong: number = 2; /* LONG_NAMED_BIT */
let _cached_decoder_for_RequestAuthenticationPolicy: $.ASN1Decoder<
    RequestAuthenticationPolicy
> | null = null;
let _cached_encoder_for_RequestAuthenticationPolicy: $.ASN1Encoder<
    RequestAuthenticationPolicy
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RequestAuthenticationPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestAuthenticationPolicy} The decoded data structure.
 */
export function _decode_RequestAuthenticationPolicy(el: _Element) {
    if (!_cached_decoder_for_RequestAuthenticationPolicy) {
        _cached_decoder_for_RequestAuthenticationPolicy = $._decodeBitString;
    }
    return _cached_decoder_for_RequestAuthenticationPolicy(el);
}
/**
 * @summary Encodes a(n) RequestAuthenticationPolicy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestAuthenticationPolicy, encoded as an ASN.1 Element.
 */
export function _encode_RequestAuthenticationPolicy(
    value: RequestAuthenticationPolicy,
    elGetter: $.ASN1Encoder<RequestAuthenticationPolicy>
) {
    if (!_cached_encoder_for_RequestAuthenticationPolicy) {
        _cached_encoder_for_RequestAuthenticationPolicy = $._encodeBitString;
    }
    return _cached_encoder_for_RequestAuthenticationPolicy(value, elGetter);
}

export type ResultAuthenticationPolicy<> = RequestAuthenticationPolicy; // DefinedType
let _cached_decoder_for_ResultAuthenticationPolicy: $.ASN1Decoder<
    ResultAuthenticationPolicy
> | null = null;
let _cached_encoder_for_ResultAuthenticationPolicy: $.ASN1Encoder<
    ResultAuthenticationPolicy
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ResultAuthenticationPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResultAuthenticationPolicy} The decoded data structure.
 */
export function _decode_ResultAuthenticationPolicy(el: _Element) {
    if (!_cached_decoder_for_ResultAuthenticationPolicy) {
        _cached_decoder_for_ResultAuthenticationPolicy = _decode_RequestAuthenticationPolicy;
    }
    return _cached_decoder_for_ResultAuthenticationPolicy(el);
}
/**
 * @summary Encodes a(n) ResultAuthenticationPolicy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultAuthenticationPolicy, encoded as an ASN.1 Element.
 */
export function _encode_ResultAuthenticationPolicy(
    value: ResultAuthenticationPolicy,
    elGetter: $.ASN1Encoder<ResultAuthenticationPolicy>
) {
    if (!_cached_encoder_for_ResultAuthenticationPolicy) {
        _cached_encoder_for_ResultAuthenticationPolicy = _encode_RequestAuthenticationPolicy;
    }
    return _cached_encoder_for_ResultAuthenticationPolicy(value, elGetter);
}

export type SecondaryShadows<> = SupplierAndConsumers[]; // SetOfType
let _cached_decoder_for_SecondaryShadows: $.ASN1Decoder<
    SecondaryShadows
> | null = null;
let _cached_encoder_for_SecondaryShadows: $.ASN1Encoder<
    SecondaryShadows
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SecondaryShadows
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecondaryShadows} The decoded data structure.
 */
export function _decode_SecondaryShadows(el: _Element) {
    if (!_cached_decoder_for_SecondaryShadows) {
        _cached_decoder_for_SecondaryShadows = $._decodeSetOf<
            SupplierAndConsumers
        >(() => _decode_SupplierAndConsumers);
    }
    return _cached_decoder_for_SecondaryShadows(el);
}
/**
 * @summary Encodes a(n) SecondaryShadows into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecondaryShadows, encoded as an ASN.1 Element.
 */
export function _encode_SecondaryShadows(
    value: SecondaryShadows,
    elGetter: $.ASN1Encoder<SecondaryShadows>
) {
    if (!_cached_encoder_for_SecondaryShadows) {
        _cached_encoder_for_SecondaryShadows = $._encodeSetOf<
            SupplierAndConsumers
        >(() => _encode_SupplierAndConsumers, $.BER);
    }
    return _cached_encoder_for_SecondaryShadows(value, elGetter);
}

/**
 * @summary ShadowingRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ShadowingRole  ::=  INTEGER {supplier(0), consumer(1)}
 * ```
 */
export type ShadowingRole = INTEGER;
/**
 * @summary ShadowingRole_supplier
 * @constant
 * @type {number}
 */
export const ShadowingRole_supplier: ShadowingRole = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ShadowingRole_consumer
 * @constant
 * @type {number}
 */
export const ShadowingRole_consumer: ShadowingRole = 1; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_ShadowingRole: $.ASN1Decoder<
    ShadowingRole
> | null = null;
let _cached_encoder_for_ShadowingRole: $.ASN1Encoder<
    ShadowingRole
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ShadowingRole
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ShadowingRole} The decoded data structure.
 */
export function _decode_ShadowingRole(el: _Element) {
    if (!_cached_decoder_for_ShadowingRole) {
        _cached_decoder_for_ShadowingRole = $._decodeInteger;
    }
    return _cached_decoder_for_ShadowingRole(el);
}
/**
 * @summary Encodes a(n) ShadowingRole into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShadowingRole, encoded as an ASN.1 Element.
 */
export function _encode_ShadowingRole(
    value: ShadowingRole,
    elGetter: $.ASN1Encoder<ShadowingRole>
) {
    if (!_cached_encoder_for_ShadowingRole) {
        _cached_encoder_for_ShadowingRole = $._encodeInteger;
    }
    return _cached_encoder_for_ShadowingRole(value, elGetter);
}

/**
 * @summary SubSchemaSyntax_Item_subSchema
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubSchemaSyntax-Item-subSchema ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class SubSchemaSyntax_Item_subSchema {
    constructor(
        /**
         * @summary `structureRules`.
         * @public
         * @readonly
         */
        readonly structureRules: OPTIONAL<DITStructureRuleDescription[]>,
        /**
         * @summary `contentRules`.
         * @public
         * @readonly
         */
        readonly contentRules: OPTIONAL<DITContentRuleDescription[]>,
        /**
         * @summary `matchingRules`.
         * @public
         * @readonly
         */
        readonly matchingRules: OPTIONAL<MatchingRuleDescription[]>,
        /**
         * @summary `attributeTypes`.
         * @public
         * @readonly
         */
        readonly attributeTypes: OPTIONAL<AttributeTypeDescription[]>,
        /**
         * @summary `objectClasses`.
         * @public
         * @readonly
         */
        readonly objectClasses: OPTIONAL<ObjectClassDescription[]>,
        /**
         * @summary `nameForms`.
         * @public
         * @readonly
         */
        readonly nameForms: OPTIONAL<NameFormDescription[]>,
        /**
         * @summary `matchRuleUses`.
         * @public
         * @readonly
         */
        readonly matchRuleUses: OPTIONAL<MatchingRuleUseDescription[]>
    ) {}

    /**
     * @summary Restructures an object into a SubSchemaSyntax_Item_subSchema
     * @description
     *
     * This takes an `object` and converts it to a `SubSchemaSyntax_Item_subSchema`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubSchemaSyntax_Item_subSchema`.
     * @returns {SubSchemaSyntax_Item_subSchema}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof SubSchemaSyntax_Item_subSchema]: SubSchemaSyntax_Item_subSchema[_K];
            }
        >
    ): SubSchemaSyntax_Item_subSchema {
        return new SubSchemaSyntax_Item_subSchema(
            _o.structureRules,
            _o.contentRules,
            _o.matchingRules,
            _o.attributeTypes,
            _o.objectClasses,
            _o.nameForms,
            _o.matchRuleUses
        );
    }
}
/**
 * @summary The Leading Root Component Types of SubSchemaSyntax_Item_subSchema
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubSchemaSyntax_Item_subSchema: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "structureRules",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contentRules",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "matchingRules",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributeTypes",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "objectClasses",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nameForms",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "matchRuleUses",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SubSchemaSyntax_Item_subSchema
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubSchemaSyntax_Item_subSchema: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SubSchemaSyntax_Item_subSchema
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubSchemaSyntax_Item_subSchema: $.ComponentSpec[] = [];
let _cached_decoder_for_SubSchemaSyntax_Item_subSchema: $.ASN1Decoder<
    SubSchemaSyntax_Item_subSchema
> | null = null;
let _cached_encoder_for_SubSchemaSyntax_Item_subSchema: $.ASN1Encoder<
    SubSchemaSyntax_Item_subSchema
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SubSchemaSyntax_Item_subSchema
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubSchemaSyntax_Item_subSchema} The decoded data structure.
 */
export function _decode_SubSchemaSyntax_Item_subSchema(el: _Element) {
    if (!_cached_decoder_for_SubSchemaSyntax_Item_subSchema) {
        _cached_decoder_for_SubSchemaSyntax_Item_subSchema = function (
            el: _Element
        ): SubSchemaSyntax_Item_subSchema {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let structureRules: OPTIONAL<DITStructureRuleDescription[]>;
            let contentRules: OPTIONAL<DITContentRuleDescription[]>;
            let matchingRules: OPTIONAL<MatchingRuleDescription[]>;
            let attributeTypes: OPTIONAL<AttributeTypeDescription[]>;
            let objectClasses: OPTIONAL<ObjectClassDescription[]>;
            let nameForms: OPTIONAL<NameFormDescription[]>;
            let matchRuleUses: OPTIONAL<MatchingRuleUseDescription[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                structureRules: (_el: _Element): void => {
                    structureRules = $._decode_explicit<
                        DITStructureRuleDescription[]
                    >(() =>
                        $._decodeSequenceOf<DITStructureRuleDescription>(
                            () => _decode_DITStructureRuleDescription
                        )
                    )(_el);
                },
                contentRules: (_el: _Element): void => {
                    contentRules = $._decode_explicit<
                        DITContentRuleDescription[]
                    >(() =>
                        $._decodeSequenceOf<DITContentRuleDescription>(
                            () => _decode_DITContentRuleDescription
                        )
                    )(_el);
                },
                matchingRules: (_el: _Element): void => {
                    matchingRules = $._decode_explicit<
                        MatchingRuleDescription[]
                    >(() =>
                        $._decodeSequenceOf<MatchingRuleDescription>(
                            () => _decode_MatchingRuleDescription
                        )
                    )(_el);
                },
                attributeTypes: (_el: _Element): void => {
                    attributeTypes = $._decode_explicit<
                        AttributeTypeDescription[]
                    >(() =>
                        $._decodeSequenceOf<AttributeTypeDescription>(
                            () => _decode_AttributeTypeDescription
                        )
                    )(_el);
                },
                objectClasses: (_el: _Element): void => {
                    objectClasses = $._decode_explicit<
                        ObjectClassDescription[]
                    >(() =>
                        $._decodeSequenceOf<ObjectClassDescription>(
                            () => _decode_ObjectClassDescription
                        )
                    )(_el);
                },
                nameForms: (_el: _Element): void => {
                    nameForms = $._decode_explicit<NameFormDescription[]>(() =>
                        $._decodeSequenceOf<NameFormDescription>(
                            () => _decode_NameFormDescription
                        )
                    )(_el);
                },
                matchRuleUses: (_el: _Element): void => {
                    matchRuleUses = $._decode_explicit<
                        MatchingRuleUseDescription[]
                    >(() =>
                        $._decodeSequenceOf<MatchingRuleUseDescription>(
                            () => _decode_MatchingRuleUseDescription
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SubSchemaSyntax_Item_subSchema,
                _extension_additions_list_spec_for_SubSchemaSyntax_Item_subSchema,
                _root_component_type_list_2_spec_for_SubSchemaSyntax_Item_subSchema,
                undefined
            );
            return new SubSchemaSyntax_Item_subSchema(
                /* SEQUENCE_CONSTRUCTOR_CALL */ structureRules,
                contentRules,
                matchingRules,
                attributeTypes,
                objectClasses,
                nameForms,
                matchRuleUses
            );
        };
    }
    return _cached_decoder_for_SubSchemaSyntax_Item_subSchema(el);
}
/**
 * @summary Encodes a(n) SubSchemaSyntax_Item_subSchema into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubSchemaSyntax_Item_subSchema, encoded as an ASN.1 Element.
 */
export function _encode_SubSchemaSyntax_Item_subSchema(
    value: SubSchemaSyntax_Item_subSchema,
    elGetter: $.ASN1Encoder<SubSchemaSyntax_Item_subSchema>
) {
    if (!_cached_encoder_for_SubSchemaSyntax_Item_subSchema) {
        _cached_encoder_for_SubSchemaSyntax_Item_subSchema = function (
            value: SubSchemaSyntax_Item_subSchema,
            elGetter: $.ASN1Encoder<SubSchemaSyntax_Item_subSchema>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.structureRules === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSequenceOf<
                                          DITStructureRuleDescription
                                      >(
                                          () =>
                                              _encode_DITStructureRuleDescription,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.structureRules, $.BER),
                        /* IF_ABSENT  */ value.contentRules === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      $._encodeSequenceOf<
                                          DITContentRuleDescription
                                      >(
                                          () =>
                                              _encode_DITContentRuleDescription,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.contentRules, $.BER),
                        /* IF_ABSENT  */ value.matchingRules === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () =>
                                      $._encodeSequenceOf<
                                          MatchingRuleDescription
                                      >(
                                          () => _encode_MatchingRuleDescription,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.matchingRules, $.BER),
                        /* IF_ABSENT  */ value.attributeTypes === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () =>
                                      $._encodeSequenceOf<
                                          AttributeTypeDescription
                                      >(
                                          () =>
                                              _encode_AttributeTypeDescription,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.attributeTypes, $.BER),
                        /* IF_ABSENT  */ value.objectClasses === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  5,
                                  () =>
                                      $._encodeSequenceOf<
                                          ObjectClassDescription
                                      >(
                                          () => _encode_ObjectClassDescription,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.objectClasses, $.BER),
                        /* IF_ABSENT  */ value.nameForms === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  6,
                                  () =>
                                      $._encodeSequenceOf<NameFormDescription>(
                                          () => _encode_NameFormDescription,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.nameForms, $.BER),
                        /* IF_ABSENT  */ value.matchRuleUses === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  7,
                                  () =>
                                      $._encodeSequenceOf<
                                          MatchingRuleUseDescription
                                      >(
                                          () =>
                                              _encode_MatchingRuleUseDescription,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.matchRuleUses, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SubSchemaSyntax_Item_subSchema(value, elGetter);
}

/**
 * @summary SubSchemaSyntax_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubSchemaSyntax-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class SubSchemaSyntax_Item {
    constructor(
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: Name,
        /**
         * @summary `subSchema`.
         * @public
         * @readonly
         */
        readonly subSchema: SubSchemaSyntax_Item_subSchema
    ) {}

    /**
     * @summary Restructures an object into a SubSchemaSyntax_Item
     * @description
     *
     * This takes an `object` and converts it to a `SubSchemaSyntax_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubSchemaSyntax_Item`.
     * @returns {SubSchemaSyntax_Item}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SubSchemaSyntax_Item]: SubSchemaSyntax_Item[_K] }
        >
    ): SubSchemaSyntax_Item {
        return new SubSchemaSyntax_Item(_o.name, _o.subSchema);
    }
}
/**
 * @summary The Leading Root Component Types of SubSchemaSyntax_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubSchemaSyntax_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "name",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subSchema",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SubSchemaSyntax_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubSchemaSyntax_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SubSchemaSyntax_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubSchemaSyntax_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_SubSchemaSyntax_Item: $.ASN1Decoder<
    SubSchemaSyntax_Item
> | null = null;
let _cached_encoder_for_SubSchemaSyntax_Item: $.ASN1Encoder<
    SubSchemaSyntax_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SubSchemaSyntax_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubSchemaSyntax_Item} The decoded data structure.
 */
export function _decode_SubSchemaSyntax_Item(el: _Element) {
    if (!_cached_decoder_for_SubSchemaSyntax_Item) {
        _cached_decoder_for_SubSchemaSyntax_Item = function (
            el: _Element
        ): SubSchemaSyntax_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SubSchemaSyntax-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "name";
            sequence[1].name = "subSchema";
            let name!: Name;
            let subSchema!: SubSchemaSyntax_Item_subSchema;
            name = $._decode_explicit<Name>(() => _decode_Name)(sequence[0]);
            subSchema = $._decode_explicit<SubSchemaSyntax_Item_subSchema>(
                () => _decode_SubSchemaSyntax_Item_subSchema
            )(sequence[1]);
            return new SubSchemaSyntax_Item(name, subSchema);
        };
    }
    return _cached_decoder_for_SubSchemaSyntax_Item(el);
}
/**
 * @summary Encodes a(n) SubSchemaSyntax_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubSchemaSyntax_Item, encoded as an ASN.1 Element.
 */
export function _encode_SubSchemaSyntax_Item(
    value: SubSchemaSyntax_Item,
    elGetter: $.ASN1Encoder<SubSchemaSyntax_Item>
) {
    if (!_cached_encoder_for_SubSchemaSyntax_Item) {
        _cached_encoder_for_SubSchemaSyntax_Item = function (
            value: SubSchemaSyntax_Item,
            elGetter: $.ASN1Encoder<SubSchemaSyntax_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_Name,
                            $.BER
                        )(value.name, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () => _encode_SubSchemaSyntax_Item_subSchema,
                            $.BER
                        )(value.subSchema, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SubSchemaSyntax_Item(value, elGetter);
}

export type SubSchemaSyntax<> = SubSchemaSyntax_Item[]; // SequenceOfType
let _cached_decoder_for_SubSchemaSyntax: $.ASN1Decoder<
    SubSchemaSyntax
> | null = null;
let _cached_encoder_for_SubSchemaSyntax: $.ASN1Encoder<
    SubSchemaSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SubSchemaSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubSchemaSyntax} The decoded data structure.
 */
export function _decode_SubSchemaSyntax(el: _Element) {
    if (!_cached_decoder_for_SubSchemaSyntax) {
        _cached_decoder_for_SubSchemaSyntax = $._decodeSequenceOf<
            SubSchemaSyntax_Item
        >(() => _decode_SubSchemaSyntax_Item);
    }
    return _cached_decoder_for_SubSchemaSyntax(el);
}
/**
 * @summary Encodes a(n) SubSchemaSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubSchemaSyntax, encoded as an ASN.1 Element.
 */
export function _encode_SubSchemaSyntax(
    value: SubSchemaSyntax,
    elGetter: $.ASN1Encoder<SubSchemaSyntax>
) {
    if (!_cached_encoder_for_SubSchemaSyntax) {
        _cached_encoder_for_SubSchemaSyntax = $._encodeSequenceOf<
            SubSchemaSyntax_Item
        >(() => _encode_SubSchemaSyntax_Item, $.BER);
    }
    return _cached_encoder_for_SubSchemaSyntax(value, elGetter);
}

export type SupportedApplicationContexts<> = OBJECT_IDENTIFIER[]; // SetOfType
let _cached_decoder_for_SupportedApplicationContexts: $.ASN1Decoder<
    SupportedApplicationContexts
> | null = null;
let _cached_encoder_for_SupportedApplicationContexts: $.ASN1Encoder<
    SupportedApplicationContexts
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SupportedApplicationContexts
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedApplicationContexts} The decoded data structure.
 */
export function _decode_SupportedApplicationContexts(el: _Element) {
    if (!_cached_decoder_for_SupportedApplicationContexts) {
        _cached_decoder_for_SupportedApplicationContexts = $._decodeSetOf<
            OBJECT_IDENTIFIER
        >(() => $._decodeObjectIdentifier);
    }
    return _cached_decoder_for_SupportedApplicationContexts(el);
}
/**
 * @summary Encodes a(n) SupportedApplicationContexts into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedApplicationContexts, encoded as an ASN.1 Element.
 */
export function _encode_SupportedApplicationContexts(
    value: SupportedApplicationContexts,
    elGetter: $.ASN1Encoder<SupportedApplicationContexts>
) {
    if (!_cached_encoder_for_SupportedApplicationContexts) {
        _cached_encoder_for_SupportedApplicationContexts = $._encodeSetOf<
            OBJECT_IDENTIFIER
        >(() => $._encodeObjectIdentifier, $.BER);
    }
    return _cached_encoder_for_SupportedApplicationContexts(value, elGetter);
}

/**
 * @summary zero
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * zero INTEGER ::= 0
 * ```
 *
 * @constant
 */
export const zero: INTEGER = 0;

/**
 * @summary id_mac
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mac OBJECT IDENTIFIER ::= {id-mgt 0}
 * ```
 *
 * @constant
 */
export const id_mac: OBJECT_IDENTIFIER = new _OID([0], id_mgt);

/**
 * @summary id_mac_useRemoteDSA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mac-useRemoteDSA OBJECT IDENTIFIER ::= {id-mac 0}
 * ```
 *
 * @constant
 */
export const id_mac_useRemoteDSA: OBJECT_IDENTIFIER = new _OID([0], id_mac);

/**
 * @summary id_mac_useHomeDSA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mac-useHomeDSA OBJECT IDENTIFIER ::= {id-mac 1}
 * ```
 *
 * @constant
 */
export const id_mac_useHomeDSA: OBJECT_IDENTIFIER = new _OID([1], id_mac);

/**
 * @summary id_mac_update
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mac-update OBJECT IDENTIFIER ::= {id-mac 2}
 * ```
 *
 * @constant
 */
export const id_mac_update: OBJECT_IDENTIFIER = new _OID([2], id_mac);

/**
 * @summary id_mat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat OBJECT IDENTIFIER ::= {id-mgt 1}
 * ```
 *
 * @constant
 */
export const id_mat: OBJECT_IDENTIFIER = new _OID([1], id_mgt);

/**
 * @summary id_mat_accessPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-accessPoint OBJECT IDENTIFIER ::= {id-mat 0}
 * ```
 *
 * @constant
 */
export const id_mat_accessPoint: OBJECT_IDENTIFIER = new _OID([0], id_mat);

/**
 * @summary id_mat_masterEntries
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-masterEntries OBJECT IDENTIFIER ::= {id-mat 1}
 * ```
 *
 * @constant
 */
export const id_mat_masterEntries: OBJECT_IDENTIFIER = new _OID([1], id_mat);

/**
 * @summary id_mat_copyEntries
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-copyEntries OBJECT IDENTIFIER ::= {id-mat 2}
 * ```
 *
 * @constant
 */
export const id_mat_copyEntries: OBJECT_IDENTIFIER = new _OID([2], id_mat);

/**
 * @summary id_mat_loopsDetected
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-loopsDetected OBJECT IDENTIFIER ::= {id-mat 3}
 * ```
 *
 * @constant
 */
export const id_mat_loopsDetected: OBJECT_IDENTIFIER = new _OID([3], id_mat);

/**
 * @summary id_mat_securityErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-securityErrors OBJECT IDENTIFIER ::= {id-mat 4}
 * ```
 *
 * @constant
 */
export const id_mat_securityErrors: OBJECT_IDENTIFIER = new _OID([4], id_mat);

/**
 * @summary id_mat_nameErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-nameErrors OBJECT IDENTIFIER ::= {id-mat 5}
 * ```
 *
 * @constant
 */
export const id_mat_nameErrors: OBJECT_IDENTIFIER = new _OID([5], id_mat);

/**
 * @summary id_mat_foundLocalEntries
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-foundLocalEntries OBJECT IDENTIFIER ::= {id-mat 6}
 * ```
 *
 * @constant
 */
export const id_mat_foundLocalEntries: OBJECT_IDENTIFIER = new _OID(
    [6],
    id_mat
);

/**
 * @summary id_mat_referrals
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-referrals OBJECT IDENTIFIER ::= {id-mat 7}
 * ```
 *
 * @constant
 */
export const id_mat_referrals: OBJECT_IDENTIFIER = new _OID([7], id_mat);

/**
 * @summary id_mat_serviceErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-serviceErrors OBJECT IDENTIFIER ::= {id-mat 8}
 * ```
 *
 * @constant
 */
export const id_mat_serviceErrors: OBJECT_IDENTIFIER = new _OID([8], id_mat);

/**
 * @summary id_mat_aliasDereferences
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-aliasDereferences OBJECT IDENTIFIER ::= {id-mat 9}
 * ```
 *
 * @constant
 */
export const id_mat_aliasDereferences: OBJECT_IDENTIFIER = new _OID(
    [9],
    id_mat
);

/**
 * @summary id_mat_chainings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-chainings OBJECT IDENTIFIER ::= {id-mat 10}
 * ```
 *
 * @constant
 */
export const id_mat_chainings: OBJECT_IDENTIFIER = new _OID([10], id_mat);

/**
 * @summary id_mat_invalidReferences
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-invalidReferences OBJECT IDENTIFIER ::= {id-mat 11}
 * ```
 *
 * @constant
 */
export const id_mat_invalidReferences: OBJECT_IDENTIFIER = new _OID(
    [11],
    id_mat
);

/**
 * @summary id_mat_unableToProceed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-unableToProceed OBJECT IDENTIFIER ::= {id-mat 12}
 * ```
 *
 * @constant
 */
export const id_mat_unableToProceed: OBJECT_IDENTIFIER = new _OID([12], id_mat);

/**
 * @summary id_mat_outOfScope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-outOfScope OBJECT IDENTIFIER ::= {id-mat 13}
 * ```
 *
 * @constant
 */
export const id_mat_outOfScope: OBJECT_IDENTIFIER = new _OID([13], id_mat);

/**
 * @summary id_mat_noSuchObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-noSuchObject OBJECT IDENTIFIER ::= {id-mat 14}
 * ```
 *
 * @constant
 */
export const id_mat_noSuchObject: OBJECT_IDENTIFIER = new _OID([14], id_mat);

/**
 * @summary id_mat_aliasProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-aliasProblem OBJECT IDENTIFIER ::= {id-mat 15}
 * ```
 *
 * @constant
 */
export const id_mat_aliasProblem: OBJECT_IDENTIFIER = new _OID([15], id_mat);

/**
 * @summary id_mat_aliasDereferencingProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-aliasDereferencingProblem OBJECT IDENTIFIER ::= {id-mat 16}
 * ```
 *
 * @constant
 */
export const id_mat_aliasDereferencingProblem: OBJECT_IDENTIFIER = new _OID(
    [16],
    id_mat
);

/**
 * @summary id_mat_affectsMultipleDSAs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-affectsMultipleDSAs OBJECT IDENTIFIER ::= {id-mat 17}
 * ```
 *
 * @constant
 */
export const id_mat_affectsMultipleDSAs: OBJECT_IDENTIFIER = new _OID(
    [17],
    id_mat
);

/**
 * @summary id_mat_unavailableCriticalExtension
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-unavailableCriticalExtension OBJECT IDENTIFIER ::= {id-mat 18}
 * ```
 *
 * @constant
 */
export const id_mat_unavailableCriticalExtension: OBJECT_IDENTIFIER = new _OID(
    [18],
    id_mat
);

/**
 * @summary id_mat_timeLimitExceeded
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-timeLimitExceeded OBJECT IDENTIFIER ::= {id-mat 19}
 * ```
 *
 * @constant
 */
export const id_mat_timeLimitExceeded: OBJECT_IDENTIFIER = new _OID(
    [19],
    id_mat
);

/**
 * @summary id_mat_sizeLimitExceeded
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-sizeLimitExceeded OBJECT IDENTIFIER ::= {id-mat 20}
 * ```
 *
 * @constant
 */
export const id_mat_sizeLimitExceeded: OBJECT_IDENTIFIER = new _OID(
    [20],
    id_mat
);

/**
 * @summary id_mat_adminLimitExceeded
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-adminLimitExceeded OBJECT IDENTIFIER ::= {id-mat 21}
 * ```
 *
 * @constant
 */
export const id_mat_adminLimitExceeded: OBJECT_IDENTIFIER = new _OID(
    [21],
    id_mat
);

/**
 * @summary id_mat_prohibitChaining
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-prohibitChaining OBJECT IDENTIFIER ::= {id-mat 24}
 * ```
 *
 * @constant
 */
export const id_mat_prohibitChaining: OBJECT_IDENTIFIER = new _OID(
    [24],
    id_mat
);

/**
 * @summary id_mat_readOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-readOpsProc OBJECT IDENTIFIER ::= {id-mat 25}
 * ```
 *
 * @constant
 */
export const id_mat_readOpsProc: OBJECT_IDENTIFIER = new _OID([25], id_mat);

/**
 * @summary id_mat_compareOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-compareOpsProc OBJECT IDENTIFIER ::= {id-mat 26}
 * ```
 *
 * @constant
 */
export const id_mat_compareOpsProc: OBJECT_IDENTIFIER = new _OID([26], id_mat);

/**
 * @summary id_mat_abandonOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-abandonOpsProc OBJECT IDENTIFIER ::= {id-mat 27}
 * ```
 *
 * @constant
 */
export const id_mat_abandonOpsProc: OBJECT_IDENTIFIER = new _OID([27], id_mat);

/**
 * @summary id_mat_listOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-listOpsProc OBJECT IDENTIFIER ::= {id-mat 28}
 * ```
 *
 * @constant
 */
export const id_mat_listOpsProc: OBJECT_IDENTIFIER = new _OID([28], id_mat);

/**
 * @summary id_mat_searchBaseOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-searchBaseOpsProc OBJECT IDENTIFIER ::= {id-mat 29}
 * ```
 *
 * @constant
 */
export const id_mat_searchBaseOpsProc: OBJECT_IDENTIFIER = new _OID(
    [29],
    id_mat
);

/**
 * @summary id_mat_search1LevelOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-search1LevelOpsProc OBJECT IDENTIFIER ::= {id-mat 30}
 * ```
 *
 * @constant
 */
export const id_mat_search1LevelOpsProc: OBJECT_IDENTIFIER = new _OID(
    [30],
    id_mat
);

/**
 * @summary id_mat_searchSubtreeOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-searchSubtreeOpsProc OBJECT IDENTIFIER ::= {id-mat 31}
 * ```
 *
 * @constant
 */
export const id_mat_searchSubtreeOpsProc: OBJECT_IDENTIFIER = new _OID(
    [31],
    id_mat
);

/**
 * @summary id_mat_addEntryOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-addEntryOpsProc OBJECT IDENTIFIER ::= {id-mat 32}
 * ```
 *
 * @constant
 */
export const id_mat_addEntryOpsProc: OBJECT_IDENTIFIER = new _OID([32], id_mat);

/**
 * @summary id_mat_removeEntryOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-removeEntryOpsProc OBJECT IDENTIFIER ::= {id-mat 33}
 * ```
 *
 * @constant
 */
export const id_mat_removeEntryOpsProc: OBJECT_IDENTIFIER = new _OID(
    [33],
    id_mat
);

/**
 * @summary id_mat_modifyEntryOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-modifyEntryOpsProc OBJECT IDENTIFIER ::= {id-mat 34}
 * ```
 *
 * @constant
 */
export const id_mat_modifyEntryOpsProc: OBJECT_IDENTIFIER = new _OID(
    [34],
    id_mat
);

/**
 * @summary id_mat_modifyDNOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-modifyDNOpsProc OBJECT IDENTIFIER ::= {id-mat 35}
 * ```
 *
 * @constant
 */
export const id_mat_modifyDNOpsProc: OBJECT_IDENTIFIER = new _OID([35], id_mat);

/**
 * @summary id_mat_chReadOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-chReadOpsProc OBJECT IDENTIFIER ::= {id-mat 36}
 * ```
 *
 * @constant
 */
export const id_mat_chReadOpsProc: OBJECT_IDENTIFIER = new _OID([36], id_mat);

/**
 * @summary id_mat_chCompareOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-chCompareOpsProc OBJECT IDENTIFIER ::= {id-mat 37}
 * ```
 *
 * @constant
 */
export const id_mat_chCompareOpsProc: OBJECT_IDENTIFIER = new _OID(
    [37],
    id_mat
);

/**
 * @summary id_mat_chAbandonOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-chAbandonOpsProc OBJECT IDENTIFIER ::= {id-mat 38}
 * ```
 *
 * @constant
 */
export const id_mat_chAbandonOpsProc: OBJECT_IDENTIFIER = new _OID(
    [38],
    id_mat
);

/**
 * @summary id_mat_chListOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-chListOpsProc OBJECT IDENTIFIER ::= {id-mat 39}
 * ```
 *
 * @constant
 */
export const id_mat_chListOpsProc: OBJECT_IDENTIFIER = new _OID([39], id_mat);

/**
 * @summary id_mat_chSearchBaseOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-chSearchBaseOpsProc OBJECT IDENTIFIER ::= {id-mat 40}
 * ```
 *
 * @constant
 */
export const id_mat_chSearchBaseOpsProc: OBJECT_IDENTIFIER = new _OID(
    [40],
    id_mat
);

/**
 * @summary id_mat_chSearch1LevelOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-chSearch1LevelOpsProc OBJECT IDENTIFIER ::= {id-mat 41}
 * ```
 *
 * @constant
 */
export const id_mat_chSearch1LevelOpsProc: OBJECT_IDENTIFIER = new _OID(
    [41],
    id_mat
);

/**
 * @summary id_mat_chSearchSubtreeOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-chSearchSubtreeOpsProc OBJECT IDENTIFIER ::= {id-mat 42}
 * ```
 *
 * @constant
 */
export const id_mat_chSearchSubtreeOpsProc: OBJECT_IDENTIFIER = new _OID(
    [42],
    id_mat
);

/**
 * @summary id_mat_chAddEntryOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-chAddEntryOpsProc OBJECT IDENTIFIER ::= {id-mat 43}
 * ```
 *
 * @constant
 */
export const id_mat_chAddEntryOpsProc: OBJECT_IDENTIFIER = new _OID(
    [43],
    id_mat
);

/**
 * @summary id_mat_chRemoveEntryOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-chRemoveEntryOpsProc OBJECT IDENTIFIER ::= {id-mat 44}
 * ```
 *
 * @constant
 */
export const id_mat_chRemoveEntryOpsProc: OBJECT_IDENTIFIER = new _OID(
    [44],
    id_mat
);

/**
 * @summary id_mat_chModifyEntryOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-chModifyEntryOpsProc OBJECT IDENTIFIER ::= {id-mat 45}
 * ```
 *
 * @constant
 */
export const id_mat_chModifyEntryOpsProc: OBJECT_IDENTIFIER = new _OID(
    [45],
    id_mat
);

/**
 * @summary id_mat_chModifyDNOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-chModifyDNOpsProc OBJECT IDENTIFIER ::= {id-mat 46}
 * ```
 *
 * @constant
 */
export const id_mat_chModifyDNOpsProc: OBJECT_IDENTIFIER = new _OID(
    [46],
    id_mat
);

/**
 * @summary id_mat_dSAScopeOfReferral
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-dSAScopeOfReferral OBJECT IDENTIFIER ::= {id-mat 47}
 * ```
 *
 * @constant
 */
export const id_mat_dSAScopeOfReferral: OBJECT_IDENTIFIER = new _OID(
    [47],
    id_mat
);

/**
 * @summary id_mat_dSAScopeOfChaining
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-dSAScopeOfChaining OBJECT IDENTIFIER ::= {id-mat 48}
 * ```
 *
 * @constant
 */
export const id_mat_dSAScopeOfChaining: OBJECT_IDENTIFIER = new _OID(
    [48],
    id_mat
);

/**
 * @summary id_mat_peerEntityAuthenticationPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-peerEntityAuthenticationPolicy OBJECT IDENTIFIER ::= {id-mat 49}
 * ```
 *
 * @constant
 */
export const id_mat_peerEntityAuthenticationPolicy: OBJECT_IDENTIFIER = new _OID(
    [49],
    id_mat
);

/**
 * @summary id_mat_requestAuthenticationPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-requestAuthenticationPolicy OBJECT IDENTIFIER ::= {id-mat 50}
 * ```
 *
 * @constant
 */
export const id_mat_requestAuthenticationPolicy: OBJECT_IDENTIFIER = new _OID(
    [50],
    id_mat
);

/**
 * @summary id_mat_resultAuthenticationPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-resultAuthenticationPolicy OBJECT IDENTIFIER ::= {id-mat 51}
 * ```
 *
 * @constant
 */
export const id_mat_resultAuthenticationPolicy: OBJECT_IDENTIFIER = new _OID(
    [51],
    id_mat
);

/**
 * @summary id_mat_dSPAssociationEstablishment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-dSPAssociationEstablishment OBJECT IDENTIFIER ::= {id-mat 52}
 * ```
 *
 * @constant
 */
export const id_mat_dSPAssociationEstablishment: OBJECT_IDENTIFIER = new _OID(
    [52],
    id_mat
);

/**
 * @summary id_mat_dOPAssociationEstablishment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-dOPAssociationEstablishment OBJECT IDENTIFIER ::= {id-mat 53}
 * ```
 *
 * @constant
 */
export const id_mat_dOPAssociationEstablishment: OBJECT_IDENTIFIER = new _OID(
    [53],
    id_mat
);

/**
 * @summary id_mat_dISPAssociationEstablishment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-dISPAssociationEstablishment OBJECT IDENTIFIER ::= {id-mat 54}
 * ```
 *
 * @constant
 */
export const id_mat_dISPAssociationEstablishment: OBJECT_IDENTIFIER = new _OID(
    [54],
    id_mat
);

/**
 * @summary id_mat_maxDAPAssociations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-maxDAPAssociations OBJECT IDENTIFIER ::= {id-mat 55}
 * ```
 *
 * @constant
 */
export const id_mat_maxDAPAssociations: OBJECT_IDENTIFIER = new _OID(
    [55],
    id_mat
);

/**
 * @summary id_mat_maxDSPAssociations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-maxDSPAssociations OBJECT IDENTIFIER ::= {id-mat 56}
 * ```
 *
 * @constant
 */
export const id_mat_maxDSPAssociations: OBJECT_IDENTIFIER = new _OID(
    [56],
    id_mat
);

/**
 * @summary id_mat_maxDOPAssociations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-maxDOPAssociations OBJECT IDENTIFIER ::= {id-mat 57}
 * ```
 *
 * @constant
 */
export const id_mat_maxDOPAssociations: OBJECT_IDENTIFIER = new _OID(
    [57],
    id_mat
);

/**
 * @summary id_mat_maxDISPAssociations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-maxDISPAssociations OBJECT IDENTIFIER ::= {id-mat 58}
 * ```
 *
 * @constant
 */
export const id_mat_maxDISPAssociations: OBJECT_IDENTIFIER = new _OID(
    [58],
    id_mat
);

/**
 * @summary id_mat_dAPAssociationTimeout
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-dAPAssociationTimeout OBJECT IDENTIFIER ::= {id-mat 59}
 * ```
 *
 * @constant
 */
export const id_mat_dAPAssociationTimeout: OBJECT_IDENTIFIER = new _OID(
    [59],
    id_mat
);

/**
 * @summary id_mat_dSPAssociationTimeout
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-dSPAssociationTimeout OBJECT IDENTIFIER ::= {id-mat 60}
 * ```
 *
 * @constant
 */
export const id_mat_dSPAssociationTimeout: OBJECT_IDENTIFIER = new _OID(
    [60],
    id_mat
);

/**
 * @summary id_mat_dOPAssociationTimeout
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-dOPAssociationTimeout OBJECT IDENTIFIER ::= {id-mat 61}
 * ```
 *
 * @constant
 */
export const id_mat_dOPAssociationTimeout: OBJECT_IDENTIFIER = new _OID(
    [61],
    id_mat
);

/**
 * @summary id_mat_dISPAssociationTimeout
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-dISPAssociationTimeout OBJECT IDENTIFIER ::= {id-mat 62}
 * ```
 *
 * @constant
 */
export const id_mat_dISPAssociationTimeout: OBJECT_IDENTIFIER = new _OID(
    [62],
    id_mat
);

/**
 * @summary id_mat_dSAActiveAssociations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-dSAActiveAssociations OBJECT IDENTIFIER ::= {id-mat 63}
 * ```
 *
 * @constant
 */
export const id_mat_dSAActiveAssociations: OBJECT_IDENTIFIER = new _OID(
    [63],
    id_mat
);

/**
 * @summary id_mat_pagedResultsMaxIDs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-pagedResultsMaxIDs OBJECT IDENTIFIER ::= {id-mat 64}
 * ```
 *
 * @constant
 */
export const id_mat_pagedResultsMaxIDs: OBJECT_IDENTIFIER = new _OID(
    [64],
    id_mat
);

/**
 * @summary id_mat_pagedResultsTimer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-pagedResultsTimer OBJECT IDENTIFIER ::= {id-mat 65}
 * ```
 *
 * @constant
 */
export const id_mat_pagedResultsTimer: OBJECT_IDENTIFIER = new _OID(
    [65],
    id_mat
);

/**
 * @summary id_mat_homeDSA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-homeDSA OBJECT IDENTIFIER ::= {id-mat 66}
 * ```
 *
 * @constant
 */
export const id_mat_homeDSA: OBJECT_IDENTIFIER = new _OID([66], id_mat);

/**
 * @summary id_mat_dUATimeout
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-dUATimeout OBJECT IDENTIFIER ::= {id-mat 68}
 * ```
 *
 * @constant
 */
export const id_mat_dUATimeout: OBJECT_IDENTIFIER = new _OID([68], id_mat);

/**
 * @summary id_mat_supportedApplicationContexts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-supportedApplicationContexts OBJECT IDENTIFIER ::= {id-mat 69}
 * ```
 *
 * @constant
 */
export const id_mat_supportedApplicationContexts: OBJECT_IDENTIFIER = new _OID(
    [69],
    id_mat
);

/**
 * @summary id_mat_reverseCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-reverseCredentials OBJECT IDENTIFIER ::= {id-mat 70}
 * ```
 *
 * @constant
 */
export const id_mat_reverseCredentials: OBJECT_IDENTIFIER = new _OID(
    [70],
    id_mat
);

/**
 * @summary id_mat_remoteAccessPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-remoteAccessPoint OBJECT IDENTIFIER ::= {id-mat 71}
 * ```
 *
 * @constant
 */
export const id_mat_remoteAccessPoint: OBJECT_IDENTIFIER = new _OID(
    [71],
    id_mat
);

/**
 * @summary id_mat_maxInboundAssociations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-maxInboundAssociations OBJECT IDENTIFIER ::= {id-mat 72}
 * ```
 *
 * @constant
 */
export const id_mat_maxInboundAssociations: OBJECT_IDENTIFIER = new _OID(
    [72],
    id_mat
);

/**
 * @summary id_mat_maxOutboundAssociations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-maxOutboundAssociations OBJECT IDENTIFIER ::= {id-mat 73}
 * ```
 *
 * @constant
 */
export const id_mat_maxOutboundAssociations: OBJECT_IDENTIFIER = new _OID(
    [73],
    id_mat
);

/**
 * @summary id_mat_currentActiveAssocs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-currentActiveAssocs OBJECT IDENTIFIER ::= {id-mat 74}
 * ```
 *
 * @constant
 */
export const id_mat_currentActiveAssocs: OBJECT_IDENTIFIER = new _OID(
    [74],
    id_mat
);

/**
 * @summary id_mat_currentActiveInboundAssocs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-currentActiveInboundAssocs OBJECT IDENTIFIER ::= {id-mat 75}
 * ```
 *
 * @constant
 */
export const id_mat_currentActiveInboundAssocs: OBJECT_IDENTIFIER = new _OID(
    [75],
    id_mat
);

/**
 * @summary id_mat_currentActiveOutboundAssocs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-currentActiveOutboundAssocs OBJECT IDENTIFIER ::= {id-mat 76}
 * ```
 *
 * @constant
 */
export const id_mat_currentActiveOutboundAssocs: OBJECT_IDENTIFIER = new _OID(
    [76],
    id_mat
);

/**
 * @summary id_mat_accumAssocs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-accumAssocs OBJECT IDENTIFIER ::= {id-mat 77}
 * ```
 *
 * @constant
 */
export const id_mat_accumAssocs: OBJECT_IDENTIFIER = new _OID([77], id_mat);

/**
 * @summary id_mat_accumInboundAssocs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-accumInboundAssocs OBJECT IDENTIFIER ::= {id-mat 78}
 * ```
 *
 * @constant
 */
export const id_mat_accumInboundAssocs: OBJECT_IDENTIFIER = new _OID(
    [78],
    id_mat
);

/**
 * @summary id_mat_accumOutboundAssocs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-accumOutboundAssocs OBJECT IDENTIFIER ::= {id-mat 79}
 * ```
 *
 * @constant
 */
export const id_mat_accumOutboundAssocs: OBJECT_IDENTIFIER = new _OID(
    [79],
    id_mat
);

/**
 * @summary id_mat_accumFailedInboundAssocs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-accumFailedInboundAssocs OBJECT IDENTIFIER ::= {id-mat 80}
 * ```
 *
 * @constant
 */
export const id_mat_accumFailedInboundAssocs: OBJECT_IDENTIFIER = new _OID(
    [80],
    id_mat
);

/**
 * @summary id_mat_accumFailedOutboundAssocs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-accumFailedOutboundAssocs OBJECT IDENTIFIER ::= {id-mat 81}
 * ```
 *
 * @constant
 */
export const id_mat_accumFailedOutboundAssocs: OBJECT_IDENTIFIER = new _OID(
    [81],
    id_mat
);

/**
 * @summary id_mat_timeOfLastAttempt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-timeOfLastAttempt OBJECT IDENTIFIER ::= {id-mat 82}
 * ```
 *
 * @constant
 */
export const id_mat_timeOfLastAttempt: OBJECT_IDENTIFIER = new _OID(
    [82],
    id_mat
);

/**
 * @summary id_mat_timeOfLastSuccess
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-timeOfLastSuccess OBJECT IDENTIFIER ::= {id-mat 83}
 * ```
 *
 * @constant
 */
export const id_mat_timeOfLastSuccess: OBJECT_IDENTIFIER = new _OID(
    [83],
    id_mat
);

/**
 * @summary id_mat_requestCounter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-requestCounter OBJECT IDENTIFIER ::= {id-mat 84}
 * ```
 *
 * @constant
 */
export const id_mat_requestCounter: OBJECT_IDENTIFIER = new _OID([84], id_mat);

/**
 * @summary id_mat_replyCounter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-replyCounter OBJECT IDENTIFIER ::= {id-mat 85}
 * ```
 *
 * @constant
 */
export const id_mat_replyCounter: OBJECT_IDENTIFIER = new _OID([85], id_mat);

/**
 * @summary id_mat_requestsFailedCounter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-requestsFailedCounter OBJECT IDENTIFIER ::= {id-mat 86}
 * ```
 *
 * @constant
 */
export const id_mat_requestsFailedCounter: OBJECT_IDENTIFIER = new _OID(
    [86],
    id_mat
);

/**
 * @summary id_mat_timeOfLastAccess
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-timeOfLastAccess OBJECT IDENTIFIER ::= {id-mat 87}
 * ```
 *
 * @constant
 */
export const id_mat_timeOfLastAccess: OBJECT_IDENTIFIER = new _OID(
    [87],
    id_mat
);

/**
 * @summary id_mat_agreementID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-agreementID OBJECT IDENTIFIER ::= {id-mat 88}
 * ```
 *
 * @constant
 */
export const id_mat_agreementID: OBJECT_IDENTIFIER = new _OID([88], id_mat);

/**
 * @summary id_mat_agreementVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-agreementVersion OBJECT IDENTIFIER ::= {id-mat 89}
 * ```
 *
 * @constant
 */
export const id_mat_agreementVersion: OBJECT_IDENTIFIER = new _OID(
    [89],
    id_mat
);

/**
 * @summary id_mat_hOBRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-hOBRole OBJECT IDENTIFIER ::= {id-mat 90}
 * ```
 *
 * @constant
 */
export const id_mat_hOBRole: OBJECT_IDENTIFIER = new _OID([90], id_mat);

/**
 * @summary id_mat_shadowingSubject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-shadowingSubject OBJECT IDENTIFIER ::= {id-mat 91}
 * ```
 *
 * @constant
 */
export const id_mat_shadowingSubject: OBJECT_IDENTIFIER = new _OID(
    [91],
    id_mat
);

/**
 * @summary id_mat_updateMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-updateMode OBJECT IDENTIFIER ::= {id-mat 92}
 * ```
 *
 * @constant
 */
export const id_mat_updateMode: OBJECT_IDENTIFIER = new _OID([92], id_mat);

/**
 * @summary id_mat_masterAccessPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-masterAccessPoint OBJECT IDENTIFIER ::= {id-mat 93}
 * ```
 *
 * @constant
 */
export const id_mat_masterAccessPoint: OBJECT_IDENTIFIER = new _OID(
    [93],
    id_mat
);

/**
 * @summary id_mat_secondaryShadows
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-secondaryShadows OBJECT IDENTIFIER ::= {id-mat 94}
 * ```
 *
 * @constant
 */
export const id_mat_secondaryShadows: OBJECT_IDENTIFIER = new _OID(
    [94],
    id_mat
);

/**
 * @summary id_mat_shadowingRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-shadowingRole OBJECT IDENTIFIER ::= {id-mat 95}
 * ```
 *
 * @constant
 */
export const id_mat_shadowingRole: OBJECT_IDENTIFIER = new _OID([95], id_mat);

/**
 * @summary id_mat_lastUpdateTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-lastUpdateTime OBJECT IDENTIFIER ::= {id-mat 96}
 * ```
 *
 * @constant
 */
export const id_mat_lastUpdateTime: OBJECT_IDENTIFIER = new _OID([96], id_mat);

/**
 * @summary id_mat_shadowingSchedule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-shadowingSchedule OBJECT IDENTIFIER ::= {id-mat 97}
 * ```
 *
 * @constant
 */
export const id_mat_shadowingSchedule: OBJECT_IDENTIFIER = new _OID(
    [97],
    id_mat
);

/**
 * @summary id_mat_nextUpdateTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-nextUpdateTime OBJECT IDENTIFIER ::= {id-mat 98}
 * ```
 *
 * @constant
 */
export const id_mat_nextUpdateTime: OBJECT_IDENTIFIER = new _OID([98], id_mat);

/**
 * @summary id_mat_useDOP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-useDOP OBJECT IDENTIFIER ::= {id-mat 99}
 * ```
 *
 * @constant
 */
export const id_mat_useDOP: OBJECT_IDENTIFIER = new _OID([99], id_mat);

/**
 * @summary id_mat_accessor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-accessor OBJECT IDENTIFIER ::= {id-mat 100}
 * ```
 *
 * @constant
 */
export const id_mat_accessor: OBJECT_IDENTIFIER = new _OID([100], id_mat);

/**
 * @summary id_mat_allowedInfoService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-allowedInfoService OBJECT IDENTIFIER ::= {id-mat 101}
 * ```
 *
 * @constant
 */
export const id_mat_allowedInfoService: OBJECT_IDENTIFIER = new _OID(
    [101],
    id_mat
);

/**
 * @summary id_mat_applicationContextInUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-applicationContextInUse OBJECT IDENTIFIER ::= {id-mat 102}
 * ```
 *
 * @constant
 */
export const id_mat_applicationContextInUse: OBJECT_IDENTIFIER = new _OID(
    [102],
    id_mat
);

/**
 * @summary id_mat_associationId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-associationId OBJECT IDENTIFIER ::= {id-mat 103}
 * ```
 *
 * @constant
 */
export const id_mat_associationId: OBJECT_IDENTIFIER = new _OID([103], id_mat);

/**
 * @summary id_mat_callingAETitle
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-callingAETitle OBJECT IDENTIFIER ::= {id-mat 104}
 * ```
 *
 * @constant
 */
export const id_mat_callingAETitle: OBJECT_IDENTIFIER = new _OID([104], id_mat);

/**
 * @summary id_mat_disAllowedInfoService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-disAllowedInfoService OBJECT IDENTIFIER ::= {id-mat 105}
 * ```
 *
 * @constant
 */
export const id_mat_disAllowedInfoService: OBJECT_IDENTIFIER = new _OID(
    [105],
    id_mat
);

/**
 * @summary id_mat_maxEntriesReturned
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-maxEntriesReturned OBJECT IDENTIFIER ::= {id-mat 106}
 * ```
 *
 * @constant
 */
export const id_mat_maxEntriesReturned: OBJECT_IDENTIFIER = new _OID(
    [106],
    id_mat
);

/**
 * @summary id_mat_maxTimeForResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-maxTimeForResult OBJECT IDENTIFIER ::= {id-mat 107}
 * ```
 *
 * @constant
 */
export const id_mat_maxTimeForResult: OBJECT_IDENTIFIER = new _OID(
    [107],
    id_mat
);

/**
 * @summary id_mat_modifyDNRenameOnlyOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-modifyDNRenameOnlyOpsProc OBJECT IDENTIFIER ::= {id-mat 108}
 * ```
 *
 * @constant
 */
export const id_mat_modifyDNRenameOnlyOpsProc: OBJECT_IDENTIFIER = new _OID(
    [108],
    id_mat
);

/**
 * @summary id_mat_serviceDesc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-serviceDesc OBJECT IDENTIFIER ::= {id-mat 109}
 * ```
 *
 * @constant
 */
export const id_mat_serviceDesc: OBJECT_IDENTIFIER = new _OID([109], id_mat);

/**
 * @summary id_mat_serviceId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-serviceId OBJECT IDENTIFIER ::= {id-mat 110}
 * ```
 *
 * @constant
 */
export const id_mat_serviceId: OBJECT_IDENTIFIER = new _OID([110], id_mat);

/**
 * @summary id_mat_subSchema
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-subSchema OBJECT IDENTIFIER ::= {id-mat 111}
 * ```
 *
 * @constant
 */
export const id_mat_subSchema: OBJECT_IDENTIFIER = new _OID([111], id_mat);

/**
 * @summary id_mat_sizeLimit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-sizeLimit OBJECT IDENTIFIER ::= {id-mat 112}
 * ```
 *
 * @constant
 */
export const id_mat_sizeLimit: OBJECT_IDENTIFIER = new _OID([112], id_mat);

/**
 * @summary id_mat_timeLimit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-timeLimit OBJECT IDENTIFIER ::= {id-mat 113}
 * ```
 *
 * @constant
 */
export const id_mat_timeLimit: OBJECT_IDENTIFIER = new _OID([113], id_mat);

/**
 * @summary id_mat_dirCustName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-dirCustName OBJECT IDENTIFIER ::= {id-mat 114}
 * ```
 *
 * @constant
 */
export const id_mat_dirCustName: OBJECT_IDENTIFIER = new _OID([114], id_mat);

/**
 * @summary id_mat_dirUserName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-dirUserName OBJECT IDENTIFIER ::= {id-mat 115}
 * ```
 *
 * @constant
 */
export const id_mat_dirUserName: OBJECT_IDENTIFIER = new _OID([115], id_mat);

/**
 * @summary id_mat_dirCustAddr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-dirCustAddr OBJECT IDENTIFIER ::= {id-mat 116}
 * ```
 *
 * @constant
 */
export const id_mat_dirCustAddr: OBJECT_IDENTIFIER = new _OID([116], id_mat);

/**
 * @summary id_mat_dMDName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-dMDName OBJECT IDENTIFIER ::= {id-mat 117}
 * ```
 *
 * @constant
 */
export const id_mat_dMDName: OBJECT_IDENTIFIER = new _OID([117], id_mat);

/**
 * @summary id_mat_accessControlScheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-accessControlScheme OBJECT IDENTIFIER ::= {id-mat 119}
 * ```
 *
 * @constant
 */
export const id_mat_accessControlScheme: OBJECT_IDENTIFIER = new _OID(
    [119],
    id_mat
);

/**
 * @summary id_mat_administrativeRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-administrativeRole OBJECT IDENTIFIER ::= {id-mat 120}
 * ```
 *
 * @constant
 */
export const id_mat_administrativeRole: OBJECT_IDENTIFIER = new _OID(
    [120],
    id_mat
);

/**
 * @summary id_mat_aliasedEntryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-aliasedEntryName OBJECT IDENTIFIER ::= {id-mat 121}
 * ```
 *
 * @constant
 */
export const id_mat_aliasedEntryName: OBJECT_IDENTIFIER = new _OID(
    [121],
    id_mat
);

/**
 * @summary id_mat_attributeTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-attributeTypes OBJECT IDENTIFIER ::= {id-mat 122}
 * ```
 *
 * @constant
 */
export const id_mat_attributeTypes: OBJECT_IDENTIFIER = new _OID([122], id_mat);

/**
 * @summary id_mat_collectiveExclusions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-collectiveExclusions OBJECT IDENTIFIER ::= {id-mat 123}
 * ```
 *
 * @constant
 */
export const id_mat_collectiveExclusions: OBJECT_IDENTIFIER = new _OID(
    [123],
    id_mat
);

/**
 * @summary id_mat_consumerKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-consumerKnowledge OBJECT IDENTIFIER ::= {id-mat 124}
 * ```
 *
 * @constant
 */
export const id_mat_consumerKnowledge: OBJECT_IDENTIFIER = new _OID(
    [124],
    id_mat
);

/**
 * @summary id_mat_createTimestamp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-createTimestamp OBJECT IDENTIFIER ::= {id-mat 125}
 * ```
 *
 * @constant
 */
export const id_mat_createTimestamp: OBJECT_IDENTIFIER = new _OID(
    [125],
    id_mat
);

/**
 * @summary id_mat_creatorsName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-creatorsName OBJECT IDENTIFIER ::= {id-mat 126}
 * ```
 *
 * @constant
 */
export const id_mat_creatorsName: OBJECT_IDENTIFIER = new _OID([126], id_mat);

/**
 * @summary id_mat_credentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-credentials OBJECT IDENTIFIER ::= {id-mat 127}
 * ```
 *
 * @constant
 */
export const id_mat_credentials: OBJECT_IDENTIFIER = new _OID([127], id_mat);

/**
 * @summary id_mat_distName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-distName OBJECT IDENTIFIER ::= {id-mat 128}
 * ```
 *
 * @constant
 */
export const id_mat_distName: OBJECT_IDENTIFIER = new _OID([128], id_mat);

/**
 * @summary id_mat_dITContentRules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-dITContentRules OBJECT IDENTIFIER ::= {id-mat 129}
 * ```
 *
 * @constant
 */
export const id_mat_dITContentRules: OBJECT_IDENTIFIER = new _OID(
    [129],
    id_mat
);

/**
 * @summary id_mat_dITStructureRule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-dITStructureRule OBJECT IDENTIFIER ::= {id-mat 130}
 * ```
 *
 * @constant
 */
export const id_mat_dITStructureRule: OBJECT_IDENTIFIER = new _OID(
    [130],
    id_mat
);

/**
 * @summary id_mat_dseType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-dseType OBJECT IDENTIFIER ::= {id-mat 131}
 * ```
 *
 * @constant
 */
export const id_mat_dseType: OBJECT_IDENTIFIER = new _OID([131], id_mat);

/**
 * @summary id_mat_entryACI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-entryACI OBJECT IDENTIFIER ::= {id-mat 132}
 * ```
 *
 * @constant
 */
export const id_mat_entryACI: OBJECT_IDENTIFIER = new _OID([132], id_mat);

/**
 * @summary id_mat_governingSR
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-governingSR OBJECT IDENTIFIER ::= {id-mat 133}
 * ```
 *
 * @constant
 */
export const id_mat_governingSR: OBJECT_IDENTIFIER = new _OID([133], id_mat);

/**
 * @summary id_mat_matchingRules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-matchingRules OBJECT IDENTIFIER ::= {id-mat 134}
 * ```
 *
 * @constant
 */
export const id_mat_matchingRules: OBJECT_IDENTIFIER = new _OID([134], id_mat);

/**
 * @summary id_mat_matchingRuleUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-matchingRuleUse OBJECT IDENTIFIER ::= {id-mat 135}
 * ```
 *
 * @constant
 */
export const id_mat_matchingRuleUse: OBJECT_IDENTIFIER = new _OID(
    [135],
    id_mat
);

/**
 * @summary id_mat_modifiersName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-modifiersName OBJECT IDENTIFIER ::= {id-mat 136}
 * ```
 *
 * @constant
 */
export const id_mat_modifiersName: OBJECT_IDENTIFIER = new _OID([136], id_mat);

/**
 * @summary id_mat_modifyTimestamp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-modifyTimestamp OBJECT IDENTIFIER ::= {id-mat 137}
 * ```
 *
 * @constant
 */
export const id_mat_modifyTimestamp: OBJECT_IDENTIFIER = new _OID(
    [137],
    id_mat
);

/**
 * @summary id_mat_myAccessPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-myAccessPoint OBJECT IDENTIFIER ::= {id-mat 138}
 * ```
 *
 * @constant
 */
export const id_mat_myAccessPoint: OBJECT_IDENTIFIER = new _OID([138], id_mat);

/**
 * @summary id_mat_nonSpecificKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-nonSpecificKnowledge OBJECT IDENTIFIER ::= {id-mat 139}
 * ```
 *
 * @constant
 */
export const id_mat_nonSpecificKnowledge: OBJECT_IDENTIFIER = new _OID(
    [139],
    id_mat
);

/**
 * @summary id_mat_objectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-objectClass OBJECT IDENTIFIER ::= {id-mat 140}
 * ```
 *
 * @constant
 */
export const id_mat_objectClass: OBJECT_IDENTIFIER = new _OID([140], id_mat);

/**
 * @summary id_mat_objectClasses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-objectClasses OBJECT IDENTIFIER ::= {id-mat 141}
 * ```
 *
 * @constant
 */
export const id_mat_objectClasses: OBJECT_IDENTIFIER = new _OID([141], id_mat);

/**
 * @summary id_mat_prescriptiveACI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-prescriptiveACI OBJECT IDENTIFIER ::= {id-mat 142}
 * ```
 *
 * @constant
 */
export const id_mat_prescriptiveACI: OBJECT_IDENTIFIER = new _OID(
    [142],
    id_mat
);

/**
 * @summary id_mat_nameForms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-nameForms OBJECT IDENTIFIER ::= {id-mat 143}
 * ```
 *
 * @constant
 */
export const id_mat_nameForms: OBJECT_IDENTIFIER = new _OID([143], id_mat);

/**
 * @summary id_mat_specificKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-specificKnowledge OBJECT IDENTIFIER ::= {id-mat 144}
 * ```
 *
 * @constant
 */
export const id_mat_specificKnowledge: OBJECT_IDENTIFIER = new _OID(
    [144],
    id_mat
);

/**
 * @summary id_mat_structuralObjectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-structuralObjectClass OBJECT IDENTIFIER ::= {id-mat 145}
 * ```
 *
 * @constant
 */
export const id_mat_structuralObjectClass: OBJECT_IDENTIFIER = new _OID(
    [145],
    id_mat
);

/**
 * @summary id_mat_subentryACI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-subentryACI OBJECT IDENTIFIER ::= {id-mat 146}
 * ```
 *
 * @constant
 */
export const id_mat_subentryACI: OBJECT_IDENTIFIER = new _OID([146], id_mat);

/**
 * @summary id_mat_subtreeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-subtreeSpecification OBJECT IDENTIFIER ::= {id-mat 147}
 * ```
 *
 * @constant
 */
export const id_mat_subtreeSpecification: OBJECT_IDENTIFIER = new _OID(
    [147],
    id_mat
);

/**
 * @summary id_mat_superiorKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-superiorKnowledge OBJECT IDENTIFIER ::= {id-mat 148}
 * ```
 *
 * @constant
 */
export const id_mat_superiorKnowledge: OBJECT_IDENTIFIER = new _OID(
    [148],
    id_mat
);

/**
 * @summary id_mat_supplierKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-supplierKnowledge OBJECT IDENTIFIER ::= {id-mat 149}
 * ```
 *
 * @constant
 */
export const id_mat_supplierKnowledge: OBJECT_IDENTIFIER = new _OID(
    [149],
    id_mat
);

/**
 * @summary id_mat_dirCommonName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-dirCommonName OBJECT IDENTIFIER ::= {id-mat 150}
 * ```
 *
 * @constant
 */
export const id_mat_dirCommonName: OBJECT_IDENTIFIER = new _OID([150], id_mat);

/**
 * @summary id_moc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc OBJECT IDENTIFIER ::= {id-mgt 2}
 * ```
 *
 * @constant
 */
export const id_moc: OBJECT_IDENTIFIER = new _OID([2], id_mgt);

/**
 * @summary id_moc_dsa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-dsa OBJECT IDENTIFIER ::= {id-moc 0}
 * ```
 *
 * @constant
 */
export const id_moc_dsa: OBJECT_IDENTIFIER = new _OID([0], id_moc);

/**
 * @summary id_moc_dse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-dse OBJECT IDENTIFIER ::= {id-moc 1}
 * ```
 *
 * @constant
 */
export const id_moc_dse: OBJECT_IDENTIFIER = new _OID([1], id_moc);

/**
 * @summary id_moc_knownDSA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-knownDSA OBJECT IDENTIFIER ::= {id-moc 2}
 * ```
 *
 * @constant
 */
export const id_moc_knownDSA: OBJECT_IDENTIFIER = new _OID([2], id_moc);

/**
 * @summary id_moc_knownDUA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-knownDUA OBJECT IDENTIFIER ::= {id-moc 3}
 * ```
 *
 * @constant
 */
export const id_moc_knownDUA: OBJECT_IDENTIFIER = new _OID([3], id_moc);

/**
 * @summary id_moc_dUA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-dUA OBJECT IDENTIFIER ::= {id-moc 4}
 * ```
 *
 * @constant
 */
export const id_moc_dUA: OBJECT_IDENTIFIER = new _OID([4], id_moc);

/**
 * @summary id_moc_nHOBMO
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-nHOBMO OBJECT IDENTIFIER ::= {id-moc 5}
 * ```
 *
 * @constant
 */
export const id_moc_nHOBMO: OBJECT_IDENTIFIER = new _OID([5], id_moc);

/**
 * @summary id_moc_hOBMO
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-hOBMO OBJECT IDENTIFIER ::= {id-moc 6}
 * ```
 *
 * @constant
 */
export const id_moc_hOBMO: OBJECT_IDENTIFIER = new _OID([6], id_moc);

/**
 * @summary id_moc_shadowingAgreement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-shadowingAgreement OBJECT IDENTIFIER ::= {id-moc 7}
 * ```
 *
 * @constant
 */
export const id_moc_shadowingAgreement: OBJECT_IDENTIFIER = new _OID(
    [7],
    id_moc
);

/**
 * @summary id_moc_ULconnEnd
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-ULconnEnd OBJECT IDENTIFIER ::= {id-moc 8}
 * ```
 *
 * @constant
 */
export const id_moc_ULconnEnd: OBJECT_IDENTIFIER = new _OID([8], id_moc);

/**
 * @summary id_moc_disManagedObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-disManagedObject OBJECT IDENTIFIER ::= {id-moc 9}
 * ```
 *
 * @constant
 */
export const id_moc_disManagedObject: OBJECT_IDENTIFIER = new _OID([9], id_moc);

/**
 * @summary id_moc_dirCust
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-dirCust OBJECT IDENTIFIER ::= {id-moc 10}
 * ```
 *
 * @constant
 */
export const id_moc_dirCust: OBJECT_IDENTIFIER = new _OID([10], id_moc);

/**
 * @summary id_moc_dirUser
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-dirUser OBJECT IDENTIFIER ::= {id-moc 11}
 * ```
 *
 * @constant
 */
export const id_moc_dirUser: OBJECT_IDENTIFIER = new _OID([11], id_moc);

/**
 * @summary id_moc_dMD
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-dMD OBJECT IDENTIFIER ::= {id-moc 12}
 * ```
 *
 * @constant
 */
export const id_moc_dMD: OBJECT_IDENTIFIER = new _OID([12], id_moc);

/**
 * @summary id_mnb
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mnb OBJECT IDENTIFIER ::= {id-mgt 3}
 * ```
 *
 * @constant
 */
export const id_mnb: OBJECT_IDENTIFIER = new _OID([3], id_mgt);

/**
 * @summary id_mnb_dsa_name_binding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mnb-dsa-name-binding OBJECT IDENTIFIER ::= {id-mnb 0}
 * ```
 *
 * @constant
 */
export const id_mnb_dsa_name_binding: OBJECT_IDENTIFIER = new _OID([0], id_mnb);

/**
 * @summary id_mnb_dse_name_binding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mnb-dse-name-binding OBJECT IDENTIFIER ::= {id-mnb 1}
 * ```
 *
 * @constant
 */
export const id_mnb_dse_name_binding: OBJECT_IDENTIFIER = new _OID([1], id_mnb);

/**
 * @summary id_mnb_knownDSA_dSA_name_binding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mnb-knownDSA-dSA-name-binding OBJECT IDENTIFIER ::= {id-mnb 2}
 * ```
 *
 * @constant
 */
export const id_mnb_knownDSA_dSA_name_binding: OBJECT_IDENTIFIER = new _OID(
    [2],
    id_mnb
);

/**
 * @summary id_mnb_knownDUA_dSA_name_binding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mnb-knownDUA-dSA-name-binding OBJECT IDENTIFIER ::= {id-mnb 3}
 * ```
 *
 * @constant
 */
export const id_mnb_knownDUA_dSA_name_binding: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_mnb
);

/**
 * @summary id_mnb_acseInvoc_knownDSA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mnb-acseInvoc-knownDSA OBJECT IDENTIFIER ::= {id-mnb 4}
 * ```
 *
 * @constant
 */
export const id_mnb_acseInvoc_knownDSA: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_mnb
);

/**
 * @summary id_mnb_acseInvoc_knownDUA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mnb-acseInvoc-knownDUA OBJECT IDENTIFIER ::= {id-mnb 5}
 * ```
 *
 * @constant
 */
export const id_mnb_acseInvoc_knownDUA: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_mnb
);

/**
 * @summary id_mnb_nHOB_name_binding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mnb-nHOB-name-binding OBJECT IDENTIFIER ::= {id-mnb 6}
 * ```
 *
 * @constant
 */
export const id_mnb_nHOB_name_binding: OBJECT_IDENTIFIER = new _OID(
    [6],
    id_mnb
);

/**
 * @summary id_mnb_hOB_name_binding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mnb-hOB-name-binding OBJECT IDENTIFIER ::= {id-mnb 7}
 * ```
 *
 * @constant
 */
export const id_mnb_hOB_name_binding: OBJECT_IDENTIFIER = new _OID([7], id_mnb);

/**
 * @summary id_mnb_shadowingAgreement_nb
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mnb-shadowingAgreement-nb OBJECT IDENTIFIER ::= {id-mnb 8}
 * ```
 *
 * @constant
 */
export const id_mnb_shadowingAgreement_nb: OBJECT_IDENTIFIER = new _OID(
    [8],
    id_mnb
);

/**
 * @summary id_mnb_ULconnEnd_knownDSA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mnb-ULconnEnd-knownDSA OBJECT IDENTIFIER ::= {id-mnb 9}
 * ```
 *
 * @constant
 */
export const id_mnb_ULconnEnd_knownDSA: OBJECT_IDENTIFIER = new _OID(
    [9],
    id_mnb
);

/**
 * @summary id_mnb_ULconnEnd_knownDUA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mnb-ULconnEnd-knownDUA OBJECT IDENTIFIER ::= {id-mnb 10}
 * ```
 *
 * @constant
 */
export const id_mnb_ULconnEnd_knownDUA: OBJECT_IDENTIFIER = new _OID(
    [10],
    id_mnb
);

/**
 * @summary id_mnb_dis_Customer_name_binding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mnb-dis-Customer-name-binding OBJECT IDENTIFIER ::= {id-mnb 11}
 * ```
 *
 * @constant
 */
export const id_mnb_dis_Customer_name_binding: OBJECT_IDENTIFIER = new _OID(
    [11],
    id_mnb
);

/**
 * @summary id_mnb_knownDSA_dUA_name_binding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mnb-knownDSA-dUA-name-binding OBJECT IDENTIFIER ::= {id-mnb 12}
 * ```
 *
 * @constant
 */
export const id_mnb_knownDSA_dUA_name_binding: OBJECT_IDENTIFIER = new _OID(
    [12],
    id_mnb
);

/**
 * @summary id_mnb_DirCust_DMD
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mnb-DirCust-DMD OBJECT IDENTIFIER ::= {id-mnb 13}
 * ```
 *
 * @constant
 */
export const id_mnb_DirCust_DMD: OBJECT_IDENTIFIER = new _OID([13], id_mnb);

/**
 * @summary id_mnb_DirUser_DirCust
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mnb-DirUser-DirCust OBJECT IDENTIFIER ::= {id-mnb 14}
 * ```
 *
 * @constant
 */
export const id_mnb_DirUser_DirCust: OBJECT_IDENTIFIER = new _OID([14], id_mnb);

/**
 * @summary id_mp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp OBJECT IDENTIFIER ::= {id-mgt 4}
 * ```
 *
 * @constant
 */
export const id_mp: OBJECT_IDENTIFIER = new _OID([4], id_mgt);

/**
 * @summary id_mp_dsaPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-dsaPackage OBJECT IDENTIFIER ::= {id-mp 0}
 * ```
 *
 * @constant
 */
export const id_mp_dsaPackage: OBJECT_IDENTIFIER = new _OID([0], id_mp);

/**
 * @summary id_mp_readPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-readPackage OBJECT IDENTIFIER ::= {id-mp 1}
 * ```
 *
 * @constant
 */
export const id_mp_readPackage: OBJECT_IDENTIFIER = new _OID([1], id_mp);

/**
 * @summary id_mp_comparePackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-comparePackage OBJECT IDENTIFIER ::= {id-mp 2}
 * ```
 *
 * @constant
 */
export const id_mp_comparePackage: OBJECT_IDENTIFIER = new _OID([2], id_mp);

/**
 * @summary id_mp_abandonPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-abandonPackage OBJECT IDENTIFIER ::= {id-mp 3}
 * ```
 *
 * @constant
 */
export const id_mp_abandonPackage: OBJECT_IDENTIFIER = new _OID([3], id_mp);

/**
 * @summary id_mp_listPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-listPackage OBJECT IDENTIFIER ::= {id-mp 4}
 * ```
 *
 * @constant
 */
export const id_mp_listPackage: OBJECT_IDENTIFIER = new _OID([4], id_mp);

/**
 * @summary id_mp_searchPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-searchPackage OBJECT IDENTIFIER ::= {id-mp 5}
 * ```
 *
 * @constant
 */
export const id_mp_searchPackage: OBJECT_IDENTIFIER = new _OID([5], id_mp);

/**
 * @summary id_mp_addPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-addPackage OBJECT IDENTIFIER ::= {id-mp 6}
 * ```
 *
 * @constant
 */
export const id_mp_addPackage: OBJECT_IDENTIFIER = new _OID([6], id_mp);

/**
 * @summary id_mp_removePackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-removePackage OBJECT IDENTIFIER ::= {id-mp 7}
 * ```
 *
 * @constant
 */
export const id_mp_removePackage: OBJECT_IDENTIFIER = new _OID([7], id_mp);

/**
 * @summary id_mp_modifyPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-modifyPackage OBJECT IDENTIFIER ::= {id-mp 8}
 * ```
 *
 * @constant
 */
export const id_mp_modifyPackage: OBJECT_IDENTIFIER = new _OID([8], id_mp);

/**
 * @summary id_mp_modifyDNPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-modifyDNPackage OBJECT IDENTIFIER ::= {id-mp 9}
 * ```
 *
 * @constant
 */
export const id_mp_modifyDNPackage: OBJECT_IDENTIFIER = new _OID([9], id_mp);

/**
 * @summary id_mp_chainedReadPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-chainedReadPackage OBJECT IDENTIFIER ::= {id-mp 10}
 * ```
 *
 * @constant
 */
export const id_mp_chainedReadPackage: OBJECT_IDENTIFIER = new _OID(
    [10],
    id_mp
);

/**
 * @summary id_mp_chainedComparePackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-chainedComparePackage OBJECT IDENTIFIER ::= {id-mp 11}
 * ```
 *
 * @constant
 */
export const id_mp_chainedComparePackage: OBJECT_IDENTIFIER = new _OID(
    [11],
    id_mp
);

/**
 * @summary id_mp_chainedAbandonPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-chainedAbandonPackage OBJECT IDENTIFIER ::= {id-mp 12}
 * ```
 *
 * @constant
 */
export const id_mp_chainedAbandonPackage: OBJECT_IDENTIFIER = new _OID(
    [12],
    id_mp
);

/**
 * @summary id_mp_chainedListPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-chainedListPackage OBJECT IDENTIFIER ::= {id-mp 13}
 * ```
 *
 * @constant
 */
export const id_mp_chainedListPackage: OBJECT_IDENTIFIER = new _OID(
    [13],
    id_mp
);

/**
 * @summary id_mp_chainedSearchPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-chainedSearchPackage OBJECT IDENTIFIER ::= {id-mp 14}
 * ```
 *
 * @constant
 */
export const id_mp_chainedSearchPackage: OBJECT_IDENTIFIER = new _OID(
    [14],
    id_mp
);

/**
 * @summary id_mp_chainedAddPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-chainedAddPackage OBJECT IDENTIFIER ::= {id-mp 15}
 * ```
 *
 * @constant
 */
export const id_mp_chainedAddPackage: OBJECT_IDENTIFIER = new _OID([15], id_mp);

/**
 * @summary id_mp_chainedRemovePackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-chainedRemovePackage OBJECT IDENTIFIER ::= {id-mp 16}
 * ```
 *
 * @constant
 */
export const id_mp_chainedRemovePackage: OBJECT_IDENTIFIER = new _OID(
    [16],
    id_mp
);

/**
 * @summary id_mp_chainedModifyPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-chainedModifyPackage OBJECT IDENTIFIER ::= {id-mp 17}
 * ```
 *
 * @constant
 */
export const id_mp_chainedModifyPackage: OBJECT_IDENTIFIER = new _OID(
    [17],
    id_mp
);

/**
 * @summary id_mp_chainedModifyDNPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-chainedModifyDNPackage OBJECT IDENTIFIER ::= {id-mp 18}
 * ```
 *
 * @constant
 */
export const id_mp_chainedModifyDNPackage: OBJECT_IDENTIFIER = new _OID(
    [18],
    id_mp
);

/**
 * @summary id_mp_dsePackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-dsePackage OBJECT IDENTIFIER ::= {id-mp 19}
 * ```
 *
 * @constant
 */
export const id_mp_dsePackage: OBJECT_IDENTIFIER = new _OID([19], id_mp);

/**
 * @summary id_mp_knownDSAPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-knownDSAPackage OBJECT IDENTIFIER ::= {id-mp 20}
 * ```
 *
 * @constant
 */
export const id_mp_knownDSAPackage: OBJECT_IDENTIFIER = new _OID([20], id_mp);

/**
 * @summary id_mp_knownDUAPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-knownDUAPackage OBJECT IDENTIFIER ::= {id-mp 21}
 * ```
 *
 * @constant
 */
export const id_mp_knownDUAPackage: OBJECT_IDENTIFIER = new _OID([21], id_mp);

/**
 * @summary id_mp_dUAPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-dUAPackage OBJECT IDENTIFIER ::= {id-mp 22}
 * ```
 *
 * @constant
 */
export const id_mp_dUAPackage: OBJECT_IDENTIFIER = new _OID([22], id_mp);

/**
 * @summary id_mp_nHOBPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-nHOBPackage OBJECT IDENTIFIER ::= {id-mp 23}
 * ```
 *
 * @constant
 */
export const id_mp_nHOBPackage: OBJECT_IDENTIFIER = new _OID([23], id_mp);

/**
 * @summary id_mp_hOBPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-hOBPackage OBJECT IDENTIFIER ::= {id-mp 24}
 * ```
 *
 * @constant
 */
export const id_mp_hOBPackage: OBJECT_IDENTIFIER = new _OID([24], id_mp);

/**
 * @summary id_mp_shadowingAgreementPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-shadowingAgreementPackage OBJECT IDENTIFIER ::= {id-mp 25}
 * ```
 *
 * @constant
 */
export const id_mp_shadowingAgreementPackage: OBJECT_IDENTIFIER = new _OID(
    [25],
    id_mp
);

/**
 * @summary id_mp_ULconnEndPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-ULconnEndPackage OBJECT IDENTIFIER ::= {id-mp 26}
 * ```
 *
 * @constant
 */
export const id_mp_ULconnEndPackage: OBJECT_IDENTIFIER = new _OID([26], id_mp);

/**
 * @summary id_mp_disPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-disPackage OBJECT IDENTIFIER ::= {id-mp 27}
 * ```
 *
 * @constant
 */
export const id_mp_disPackage: OBJECT_IDENTIFIER = new _OID([27], id_mp);

/**
 * @summary id_mp_dcsPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-dcsPackage OBJECT IDENTIFIER ::= {id-mp 28}
 * ```
 *
 * @constant
 */
export const id_mp_dcsPackage: OBJECT_IDENTIFIER = new _OID([28], id_mp);

/**
 * @summary id_mp_dirCust
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-dirCust OBJECT IDENTIFIER ::= {id-mp 29}
 * ```
 *
 * @constant
 */
export const id_mp_dirCust: OBJECT_IDENTIFIER = new _OID([29], id_mp);

/**
 * @summary id_mp_dirUser
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-dirUser OBJECT IDENTIFIER ::= {id-mp 30}
 * ```
 *
 * @constant
 */
export const id_mp_dirUser: OBJECT_IDENTIFIER = new _OID([30], id_mp);

/**
 * @summary id_mp_dMD
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-dMD OBJECT IDENTIFIER ::= {id-mp 31}
 * ```
 *
 * @constant
 */
export const id_mp_dMD: OBJECT_IDENTIFIER = new _OID([31], id_mp);

/**
 * @summary id_mp_dsPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp-dsPackage OBJECT IDENTIFIER ::= {id-mp 32}
 * ```
 *
 * @constant
 */
export const id_mp_dsPackage: OBJECT_IDENTIFIER = new _OID([32], id_mp);

/**
 * @summary id_mpa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa OBJECT IDENTIFIER ::= {id-mgt 5}
 * ```
 *
 * @constant
 */
export const id_mpa: OBJECT_IDENTIFIER = new _OID([5], id_mgt);

/**
 * @summary id_mpa_nameProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-nameProblem OBJECT IDENTIFIER ::= {id-mpa 1}
 * ```
 *
 * @constant
 */
export const id_mpa_nameProblem: OBJECT_IDENTIFIER = new _OID([1], id_mpa);

/**
 * @summary id_mpa_traceInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-traceInformation OBJECT IDENTIFIER ::= {id-mpa 2}
 * ```
 *
 * @constant
 */
export const id_mpa_traceInformation: OBJECT_IDENTIFIER = new _OID([2], id_mpa);

/**
 * @summary id_mpa_serviceProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-serviceProblem OBJECT IDENTIFIER ::= {id-mpa 3}
 * ```
 *
 * @constant
 */
export const id_mpa_serviceProblem: OBJECT_IDENTIFIER = new _OID([3], id_mpa);

/**
 * @summary id_mpa_entryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-entryName OBJECT IDENTIFIER ::= {id-mpa 4}
 * ```
 *
 * @constant
 */
export const id_mpa_entryName: OBJECT_IDENTIFIER = new _OID([4], id_mpa);

/**
 * @summary id_mpa_operation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-operation OBJECT IDENTIFIER ::= {id-mpa 5}
 * ```
 *
 * @constant
 */
export const id_mpa_operation: OBJECT_IDENTIFIER = new _OID([5], id_mpa);

/**
 * @summary id_mpa_attributeProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-attributeProblem OBJECT IDENTIFIER ::= {id-mpa 6}
 * ```
 *
 * @constant
 */
export const id_mpa_attributeProblem: OBJECT_IDENTIFIER = new _OID([6], id_mpa);

/**
 * @summary id_mpa_attributeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-attributeType OBJECT IDENTIFIER ::= {id-mpa 7}
 * ```
 *
 * @constant
 */
export const id_mpa_attributeType: OBJECT_IDENTIFIER = new _OID([7], id_mpa);

/**
 * @summary id_mpa_shadowProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-shadowProblem OBJECT IDENTIFIER ::= {id-mpa 8}
 * ```
 *
 * @constant
 */
export const id_mpa_shadowProblem: OBJECT_IDENTIFIER = new _OID([8], id_mpa);

/**
 * @summary id_mpa_attributeValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-attributeValue OBJECT IDENTIFIER ::= {id-mpa 9}
 * ```
 *
 * @constant
 */
export const id_mpa_attributeValue: OBJECT_IDENTIFIER = new _OID([9], id_mpa);

/**
 * @summary id_mpa_resource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-resource OBJECT IDENTIFIER ::= {id-mpa 10}
 * ```
 *
 * @constant
 */
export const id_mpa_resource: OBJECT_IDENTIFIER = new _OID([10], id_mpa);

/**
 * @summary id_mpa_authenReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-authenReason OBJECT IDENTIFIER ::= {id-mpa 11}
 * ```
 *
 * @constant
 */
export const id_mpa_authenReason: OBJECT_IDENTIFIER = new _OID([11], id_mpa);

/**
 * @summary id_mpa_updateProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-updateProblem OBJECT IDENTIFIER ::= {id-mpa 12}
 * ```
 *
 * @constant
 */
export const id_mpa_updateProblem: OBJECT_IDENTIFIER = new _OID([12], id_mpa);

/**
 * @summary id_mpa_extensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-extensions OBJECT IDENTIFIER ::= {id-mpa 15}
 * ```
 *
 * @constant
 */
export const id_mpa_extensions: OBJECT_IDENTIFIER = new _OID([15], id_mpa);

/**
 * @summary id_mpa_aliasedRDNs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-aliasedRDNs OBJECT IDENTIFIER ::= {id-mpa 16}
 * ```
 *
 * @constant
 */
export const id_mpa_aliasedRDNs: OBJECT_IDENTIFIER = new _OID([16], id_mpa);

/**
 * @summary id_mpa_aliasDereferenced
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-aliasDereferenced OBJECT IDENTIFIER ::= {id-mpa 17}
 * ```
 *
 * @constant
 */
export const id_mpa_aliasDereferenced: OBJECT_IDENTIFIER = new _OID(
    [17],
    id_mpa
);

/**
 * @summary id_mpa_referenceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-referenceType OBJECT IDENTIFIER ::= {id-mpa 18}
 * ```
 *
 * @constant
 */
export const id_mpa_referenceType: OBJECT_IDENTIFIER = new _OID([18], id_mpa);

/**
 * @summary id_mpa_operationProgress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-operationProgress OBJECT IDENTIFIER ::= {id-mpa 19}
 * ```
 *
 * @constant
 */
export const id_mpa_operationProgress: OBJECT_IDENTIFIER = new _OID(
    [19],
    id_mpa
);

/**
 * @summary id_mpa_pDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-pDU OBJECT IDENTIFIER ::= {id-mpa 20}
 * ```
 *
 * @constant
 */
export const id_mpa_pDU: OBJECT_IDENTIFIER = new _OID([20], id_mpa);

/**
 * @summary id_mpa_opId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-opId OBJECT IDENTIFIER ::= {id-mpa 21}
 * ```
 *
 * @constant
 */
export const id_mpa_opId: OBJECT_IDENTIFIER = new _OID([21], id_mpa);

/**
 * @summary id_mpa_nhob_bind_id
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-nhob-bind-id OBJECT IDENTIFIER ::= {id-mpa 22}
 * ```
 *
 * @constant
 */
export const id_mpa_nhob_bind_id: OBJECT_IDENTIFIER = new _OID([22], id_mpa);

/**
 * @summary id_mpa_mhob_dop_prob
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-mhob-dop-prob OBJECT IDENTIFIER ::= {id-mpa 23}
 * ```
 *
 * @constant
 */
export const id_mpa_mhob_dop_prob: OBJECT_IDENTIFIER = new _OID([23], id_mpa);

/**
 * @summary id_mpa_hob_bind_id
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-hob-bind-id OBJECT IDENTIFIER ::= {id-mpa 24}
 * ```
 *
 * @constant
 */
export const id_mpa_hob_bind_id: OBJECT_IDENTIFIER = new _OID([24], id_mpa);

/**
 * @summary id_mpa_hob_dop_prob
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-hob-dop-prob OBJECT IDENTIFIER ::= {id-mpa 25}
 * ```
 *
 * @constant
 */
export const id_mpa_hob_dop_prob: OBJECT_IDENTIFIER = new _OID([25], id_mpa);

/**
 * @summary id_mpa_shadowing_dop_prob
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-shadowing-dop-prob OBJECT IDENTIFIER ::= {id-mpa 26}
 * ```
 *
 * @constant
 */
export const id_mpa_shadowing_dop_prob: OBJECT_IDENTIFIER = new _OID(
    [26],
    id_mpa
);

/**
 * @summary id_mpa_opIdDN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-opIdDN OBJECT IDENTIFIER ::= {id-mpa 27}
 * ```
 *
 * @constant
 */
export const id_mpa_opIdDN: OBJECT_IDENTIFIER = new _OID([27], id_mpa);

/* END_MODULE DirectoryManagement */
/* eslint-enable */
