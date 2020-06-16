/*
    BEGIN_MODULE DirectoryAbstractService
    OID: joint-iso-itu-t.ds.module.directoryAbstractService.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    AttributeCertificationPath,
    _decode_AttributeCertificationPath,
    _encode_AttributeCertificationPath,
} from "./AttributeCertificateDefinitions";
import {
    AlgorithmIdentifier,
    CertificationPath,
    ENCRYPTED,
    HASH,
    SIGNED,
    _decode_AlgorithmIdentifier,
    _decode_CertificationPath,
    _encode_AlgorithmIdentifier,
    _encode_CertificationPath,
    _get_decoder_for_ENCRYPTED,
    _get_decoder_for_HASH,
    _get_decoder_for_SIGNED,
    _get_encoder_for_ENCRYPTED,
    _get_encoder_for_HASH,
    _get_encoder_for_SIGNED,
} from "./AuthenticationFramework";
import {
    Code,
    InvokeId,
    _decode_Code,
    _decode_InvokeId,
    _encode_Code,
    _encode_InvokeId,
} from "./CommonProtocolSpecification";
import {
    AgreementID,
    _decode_AgreementID,
    _encode_AgreementID,
} from "./DirectoryShadowAbstractService";
import * as DistributedOperations from "./DistributedOperations";
import {
    AccessPoint,
    ContinuationReference,
    Exclusions,
    OperationProgress,
    ReferenceType,
    _decode_AccessPoint,
    _decode_ContinuationReference,
    _decode_Exclusions,
    _decode_OperationProgress,
    _decode_ReferenceType,
    _encode_AccessPoint,
    _encode_ContinuationReference,
    _encode_Exclusions,
    _encode_OperationProgress,
    _encode_ReferenceType,
} from "./DistributedOperations";
import {
    OPTIONALLY_PROTECTED,
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "./EnhancedSecurity";
import {
    Attribute,
    AttributeType,
    AttributeTypeAndValue,
    AttributeTypeAssertion,
    AttributeValue,
    AttributeValueAssertion,
    ContextAssertion,
    DistinguishedName,
    Name,
    RelativeDistinguishedName,
    _decode_Attribute,
    _decode_AttributeType,
    _decode_AttributeTypeAndValue,
    _decode_AttributeTypeAssertion,
    _decode_AttributeValue,
    _decode_AttributeValueAssertion,
    _decode_ContextAssertion,
    _decode_DistinguishedName,
    _decode_Name,
    _decode_RelativeDistinguishedName,
    _encode_Attribute,
    _encode_AttributeType,
    _encode_AttributeTypeAndValue,
    _encode_AttributeTypeAssertion,
    _encode_AttributeValue,
    _encode_AttributeValueAssertion,
    _encode_ContextAssertion,
    _encode_DistinguishedName,
    _encode_Name,
    _encode_RelativeDistinguishedName,
} from "./InformationFramework";
import {
    LDAPMessage,
    _decode_LDAPMessage,
    _encode_LDAPMessage,
} from "./Lightweight-Directory-Access-Protocol-V3";
import { UserPwd, _decode_UserPwd, _encode_UserPwd } from "./PasswordPolicy";
import {
    DirectoryString,
    UnboundedDirectoryString,
    _decode_DirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_DirectoryString,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
import {
    RelaxationPolicy,
    _decode_RelaxationPolicy,
    _encode_RelaxationPolicy,
} from "./ServiceAdministration";
import {
    SPKM_ERROR,
    SPKM_REP_TI,
    SPKM_REQ,
    _decode_SPKM_ERROR,
    _decode_SPKM_REP_TI,
    _decode_SPKM_REQ,
    _encode_SPKM_ERROR,
    _encode_SPKM_REP_TI,
    _encode_SPKM_REQ,
} from "./SpkmGssTokens";
import { id_at } from "./UsefulDefinitions";
import * as __utils from "./__utils";
export {
    AttributeCertificationPath,
    _decode_AttributeCertificationPath,
    _encode_AttributeCertificationPath,
} from "./AttributeCertificateDefinitions";
export {
    AlgorithmIdentifier,
    CertificationPath,
    ENCRYPTED,
    HASH,
    SIGNED,
    _decode_AlgorithmIdentifier,
    _decode_CertificationPath,
    _encode_AlgorithmIdentifier,
    _encode_CertificationPath,
    _get_decoder_for_ENCRYPTED,
    _get_decoder_for_HASH,
    _get_decoder_for_SIGNED,
    _get_encoder_for_ENCRYPTED,
    _get_encoder_for_HASH,
    _get_encoder_for_SIGNED,
} from "./AuthenticationFramework";
export {
    Code,
    id_errcode_abandoned,
    id_errcode_abandonFailed,
    id_errcode_attributeError,
    id_errcode_nameError,
    id_errcode_referral,
    id_errcode_securityError,
    id_errcode_serviceError,
    id_errcode_updateError,
    id_opcode_abandon,
    id_opcode_addEntry,
    id_opcode_administerPassword,
    id_opcode_changePassword,
    id_opcode_compare,
    id_opcode_ldapTransport,
    id_opcode_linkedLDAP,
    id_opcode_list,
    id_opcode_modifyDN,
    id_opcode_modifyEntry,
    id_opcode_read,
    id_opcode_removeEntry,
    id_opcode_search,
    InvokeId,
    _decode_Code,
    _decode_InvokeId,
    _encode_Code,
    _encode_InvokeId,
} from "./CommonProtocolSpecification";
export {
    AgreementID,
    _decode_AgreementID,
    _encode_AgreementID,
} from "./DirectoryShadowAbstractService";
export {
    AccessPoint,
    ContinuationReference,
    Exclusions,
    OperationProgress,
    ReferenceType,
    ReferenceType_cross as cross /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_ditBridge as ditBridge /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_immediateSuperior as immediateSuperior /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_master as master /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_nonSpecificSubordinate as nonSpecificSubordinate /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_self as self /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_subordinate as subordinate /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_superior as superior /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_supplier as supplier /* IMPORTED_ENUMERATION_ITEM */,
    _decode_AccessPoint,
    _decode_ContinuationReference,
    _decode_Exclusions,
    _decode_OperationProgress,
    _decode_ReferenceType,
    _encode_AccessPoint,
    _encode_ContinuationReference,
    _encode_Exclusions,
    _encode_OperationProgress,
    _encode_ReferenceType,
} from "./DistributedOperations";
export {
    OPTIONALLY_PROTECTED,
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "./EnhancedSecurity";
export {
    Attribute,
    AttributeType,
    AttributeTypeAndValue,
    AttributeTypeAssertion,
    AttributeValue,
    AttributeValueAssertion,
    ContextAssertion,
    DistinguishedName,
    Name,
    RelativeDistinguishedName,
    _decode_Attribute,
    _decode_AttributeType,
    _decode_AttributeTypeAndValue,
    _decode_AttributeTypeAssertion,
    _decode_AttributeValue,
    _decode_AttributeValueAssertion,
    _decode_ContextAssertion,
    _decode_DistinguishedName,
    _decode_Name,
    _decode_RelativeDistinguishedName,
    _encode_Attribute,
    _encode_AttributeType,
    _encode_AttributeTypeAndValue,
    _encode_AttributeTypeAssertion,
    _encode_AttributeValue,
    _encode_AttributeValueAssertion,
    _encode_ContextAssertion,
    _encode_DistinguishedName,
    _encode_Name,
    _encode_RelativeDistinguishedName,
} from "./InformationFramework";
export {
    LDAPMessage,
    _decode_LDAPMessage,
    _encode_LDAPMessage,
} from "./Lightweight-Directory-Access-Protocol-V3";
export { UserPwd, _decode_UserPwd, _encode_UserPwd } from "./PasswordPolicy";
export {
    DirectoryString,
    UnboundedDirectoryString,
    _decode_DirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_DirectoryString,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
export {
    RelaxationPolicy,
    _decode_RelaxationPolicy,
    _encode_RelaxationPolicy,
} from "./ServiceAdministration";
export {
    SPKM_ERROR,
    SPKM_REP_TI,
    SPKM_REQ,
    _decode_SPKM_ERROR,
    _decode_SPKM_REP_TI,
    _decode_SPKM_REQ,
    _encode_SPKM_ERROR,
    _encode_SPKM_REP_TI,
    _encode_SPKM_REQ,
} from "./SpkmGssTokens";
export {
    attributeCertificateDefinitions,
    authenticationFramework,
    basicAccessControl,
    commonProtocolSpecification,
    directoryShadowAbstractService,
    distributedOperations,
    enhancedSecurity,
    id_at,
    informationFramework,
    passwordPolicy,
    selectedAttributeTypes,
    serviceAdministration,
} from "./UsefulDefinitions";

// TODO: ObjectAssignment: family-information

// TODO: ObjectAssignment: directoryBind

export type SimpleCredentials_validity_time1 =
    | { utc: asn1.UTCTime } /* CHOICE_ALT_ROOT */
    | { gt: asn1.GeneralizedTime } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_SimpleCredentials_validity_time1: __utils.ASN1Decoder<
    SimpleCredentials_validity_time1
> | null = null;
let _cached_encoder_for_SimpleCredentials_validity_time1: __utils.ASN1Encoder<
    SimpleCredentials_validity_time1
> | null = null;
export function _decode_SimpleCredentials_validity_time1(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SimpleCredentials_validity_time1) {
        _cached_decoder_for_SimpleCredentials_validity_time1 = __utils._decode_inextensible_choice<
            SimpleCredentials_validity_time1
        >({
            "UNIVERSAL 23": ["utc", __utils._decodeUTCTime],
            "UNIVERSAL 24": ["gt", __utils._decodeGeneralizedTime],
        });
    }
    return _cached_decoder_for_SimpleCredentials_validity_time1(el);
}
export function _encode_SimpleCredentials_validity_time1(
    value: SimpleCredentials_validity_time1,
    elGetter: __utils.ASN1Encoder<SimpleCredentials_validity_time1>
) {
    if (!_cached_encoder_for_SimpleCredentials_validity_time1) {
        _cached_encoder_for_SimpleCredentials_validity_time1 = __utils._encode_choice<
            SimpleCredentials_validity_time1
        >(
            {
                utc: __utils._encodeUTCTime,
                gt: __utils._encodeGeneralizedTime,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_SimpleCredentials_validity_time1(
        value,
        elGetter
    );
}

export type SimpleCredentials_validity_time2 =
    | { utc: asn1.UTCTime } /* CHOICE_ALT_ROOT */
    | { gt: asn1.GeneralizedTime } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_SimpleCredentials_validity_time2: __utils.ASN1Decoder<
    SimpleCredentials_validity_time2
> | null = null;
let _cached_encoder_for_SimpleCredentials_validity_time2: __utils.ASN1Encoder<
    SimpleCredentials_validity_time2
> | null = null;
export function _decode_SimpleCredentials_validity_time2(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SimpleCredentials_validity_time2) {
        _cached_decoder_for_SimpleCredentials_validity_time2 = __utils._decode_inextensible_choice<
            SimpleCredentials_validity_time2
        >({
            "UNIVERSAL 23": ["utc", __utils._decodeUTCTime],
            "UNIVERSAL 24": ["gt", __utils._decodeGeneralizedTime],
        });
    }
    return _cached_decoder_for_SimpleCredentials_validity_time2(el);
}
export function _encode_SimpleCredentials_validity_time2(
    value: SimpleCredentials_validity_time2,
    elGetter: __utils.ASN1Encoder<SimpleCredentials_validity_time2>
) {
    if (!_cached_encoder_for_SimpleCredentials_validity_time2) {
        _cached_encoder_for_SimpleCredentials_validity_time2 = __utils._encode_choice<
            SimpleCredentials_validity_time2
        >(
            {
                utc: __utils._encodeUTCTime,
                gt: __utils._encodeGeneralizedTime,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_SimpleCredentials_validity_time2(
        value,
        elGetter
    );
}

export class SimpleCredentials_validity {
    constructor(
        readonly time1: SimpleCredentials_validity_time1 | undefined,
        readonly time2: SimpleCredentials_validity_time2 | undefined,
        readonly random1: asn1.BIT_STRING | undefined,
        readonly random2: asn1.BIT_STRING | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_SimpleCredentials_validity: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "time1",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "time2",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "random1",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "random2",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SimpleCredentials_validity: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SimpleCredentials_validity: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SimpleCredentials_validity: __utils.ASN1Decoder<
    SimpleCredentials_validity
> | null = null;
let _cached_encoder_for_SimpleCredentials_validity: __utils.ASN1Encoder<
    SimpleCredentials_validity
> | null = null;
export function _decode_SimpleCredentials_validity(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SimpleCredentials_validity) {
        _cached_decoder_for_SimpleCredentials_validity = function (
            el: asn1.ASN1Element
        ): SimpleCredentials_validity {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let time1: asn1.OPTIONAL<SimpleCredentials_validity_time1>;
            let time2: asn1.OPTIONAL<SimpleCredentials_validity_time2>;
            let random1: asn1.OPTIONAL<asn1.BIT_STRING>;
            let random2: asn1.OPTIONAL<asn1.BIT_STRING>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                time1: (_el: asn1.ASN1Element): void => {
                    time1 = __utils._decode_explicit<
                        SimpleCredentials_validity_time1
                    >(() => _decode_SimpleCredentials_validity_time1)(_el);
                },
                time2: (_el: asn1.ASN1Element): void => {
                    time2 = __utils._decode_explicit<
                        SimpleCredentials_validity_time2
                    >(() => _decode_SimpleCredentials_validity_time2)(_el);
                },
                random1: (_el: asn1.ASN1Element): void => {
                    random1 = __utils._decode_explicit<asn1.BIT_STRING>(
                        () => __utils._decodeBitString
                    )(_el);
                },
                random2: (_el: asn1.ASN1Element): void => {
                    random2 = __utils._decode_explicit<asn1.BIT_STRING>(
                        () => __utils._decodeBitString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SimpleCredentials_validity,
                _extension_additions_list_spec_for_SimpleCredentials_validity,
                _root_component_type_list_2_spec_for_SimpleCredentials_validity,
                undefined
            );
            return new SimpleCredentials_validity(
                /* SET_CONSTRUCTOR_CALL */ time1,
                time2,
                random1,
                random2
            );
        };
    }
    return _cached_decoder_for_SimpleCredentials_validity(el);
}
export function _encode_SimpleCredentials_validity(
    value: SimpleCredentials_validity,
    elGetter: __utils.ASN1Encoder<SimpleCredentials_validity>
) {
    if (!_cached_encoder_for_SimpleCredentials_validity) {
        _cached_encoder_for_SimpleCredentials_validity = function (
            value: SimpleCredentials_validity,
            elGetter: __utils.ASN1Encoder<SimpleCredentials_validity>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.time1 === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () =>
                                      _encode_SimpleCredentials_validity_time1,
                                  __utils.BER
                              )(value.time1, __utils.BER),
                        /* IF_ABSENT  */ value.time2 === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () =>
                                      _encode_SimpleCredentials_validity_time2,
                                  __utils.BER
                              )(value.time2, __utils.BER),
                        /* IF_ABSENT  */ value.random1 === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => __utils._encodeBitString,
                                  __utils.BER
                              )(value.random1, __utils.BER),
                        /* IF_ABSENT  */ value.random2 === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () => __utils._encodeBitString,
                                  __utils.BER
                              )(value.random2, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SimpleCredentials_validity(value, elGetter);
}

export type SimpleCredentials_password =
    | { unprotected: asn1.OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { protected_: HASH<asn1.OCTET_STRING> } /* CHOICE_ALT_ROOT */
    | { userPwd: UserPwd } /* CHOICE_ALT_EXT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_SimpleCredentials_password: __utils.ASN1Decoder<
    SimpleCredentials_password
> | null = null;
let _cached_encoder_for_SimpleCredentials_password: __utils.ASN1Encoder<
    SimpleCredentials_password
> | null = null;
export function _decode_SimpleCredentials_password(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SimpleCredentials_password) {
        _cached_decoder_for_SimpleCredentials_password = __utils._decode_extensible_choice<
            SimpleCredentials_password
        >({
            "UNIVERSAL 4": ["unprotected", __utils._decodeOctetString],
            "UNIVERSAL 16": [
                "protected_",
                _get_decoder_for_HASH<asn1.OCTET_STRING>(
                    __utils._decodeOctetString
                ),
            ],
            "CONTEXT 0": [
                "userPwd",
                __utils._decode_explicit<UserPwd>(() => _decode_UserPwd),
            ],
        });
    }
    return _cached_decoder_for_SimpleCredentials_password(el);
}
export function _encode_SimpleCredentials_password(
    value: SimpleCredentials_password,
    elGetter: __utils.ASN1Encoder<SimpleCredentials_password>
) {
    if (!_cached_encoder_for_SimpleCredentials_password) {
        _cached_encoder_for_SimpleCredentials_password = __utils._encode_choice<
            SimpleCredentials_password
        >(
            {
                unprotected: __utils._encodeOctetString,
                protected_: _get_encoder_for_HASH<asn1.OCTET_STRING>(
                    __utils._encodeOctetString
                ),
                userPwd: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_UserPwd,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_SimpleCredentials_password(value, elGetter);
}

export class SimpleCredentials {
    constructor(
        readonly name: DistinguishedName,
        readonly validity: SimpleCredentials_validity | undefined,
        readonly password: SimpleCredentials_password | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_SimpleCredentials: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "name",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "validity",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "password",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SimpleCredentials: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SimpleCredentials: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SimpleCredentials: __utils.ASN1Decoder<
    SimpleCredentials
> | null = null;
let _cached_encoder_for_SimpleCredentials: __utils.ASN1Encoder<
    SimpleCredentials
> | null = null;
export function _decode_SimpleCredentials(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SimpleCredentials) {
        _cached_decoder_for_SimpleCredentials = function (
            el: asn1.ASN1Element
        ): SimpleCredentials {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let name!: DistinguishedName;
            let validity: asn1.OPTIONAL<SimpleCredentials_validity>;
            let password: asn1.OPTIONAL<SimpleCredentials_password>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                name: (_el: asn1.ASN1Element): void => {
                    name = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                validity: (_el: asn1.ASN1Element): void => {
                    validity = __utils._decode_explicit<
                        SimpleCredentials_validity
                    >(() => _decode_SimpleCredentials_validity)(_el);
                },
                password: (_el: asn1.ASN1Element): void => {
                    password = __utils._decode_explicit<
                        SimpleCredentials_password
                    >(() => _decode_SimpleCredentials_password)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SimpleCredentials,
                _extension_additions_list_spec_for_SimpleCredentials,
                _root_component_type_list_2_spec_for_SimpleCredentials,
                undefined
            );
            return new SimpleCredentials(
                /* SEQUENCE_CONSTRUCTOR_CALL */ name,
                validity,
                password
            );
        };
    }
    return _cached_decoder_for_SimpleCredentials(el);
}
export function _encode_SimpleCredentials(
    value: SimpleCredentials,
    elGetter: __utils.ASN1Encoder<SimpleCredentials>
) {
    if (!_cached_encoder_for_SimpleCredentials) {
        _cached_encoder_for_SimpleCredentials = function (
            value: SimpleCredentials,
            elGetter: __utils.ASN1Encoder<SimpleCredentials>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_DistinguishedName,
                            __utils.BER
                        )(value.name, __utils.BER),
                        /* IF_ABSENT  */ value.validity === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_SimpleCredentials_validity,
                                  __utils.BER
                              )(value.validity, __utils.BER),
                        /* IF_ABSENT  */ value.password === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => _encode_SimpleCredentials_password,
                                  __utils.BER
                              )(value.password, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SimpleCredentials(value, elGetter);
}

export type Time =
    | { utcTime: asn1.UTCTime } /* CHOICE_ALT_ROOT */
    | { generalizedTime: asn1.GeneralizedTime } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Time: __utils.ASN1Decoder<Time> | null = null;
let _cached_encoder_for_Time: __utils.ASN1Encoder<Time> | null = null;
export function _decode_Time(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Time) {
        _cached_decoder_for_Time = __utils._decode_extensible_choice<Time>({
            "UNIVERSAL 23": ["utcTime", __utils._decodeUTCTime],
            "UNIVERSAL 24": ["generalizedTime", __utils._decodeGeneralizedTime],
        });
    }
    return _cached_decoder_for_Time(el);
}
export function _encode_Time(value: Time, elGetter: __utils.ASN1Encoder<Time>) {
    if (!_cached_encoder_for_Time) {
        _cached_encoder_for_Time = __utils._encode_choice<Time>(
            {
                utcTime: __utils._encodeUTCTime,
                generalizedTime: __utils._encodeGeneralizedTime,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_Time(value, elGetter);
}

export class TokenContent {
    constructor(
        readonly algorithm: AlgorithmIdentifier,
        readonly name: DistinguishedName,
        readonly time: Time,
        readonly random: asn1.BIT_STRING,
        readonly response: asn1.BIT_STRING | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_TokenContent: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "name",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "time",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "random",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "response",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TokenContent: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TokenContent: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TokenContent: __utils.ASN1Decoder<
    TokenContent
> | null = null;
let _cached_encoder_for_TokenContent: __utils.ASN1Encoder<
    TokenContent
> | null = null;
export function _decode_TokenContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TokenContent) {
        _cached_decoder_for_TokenContent = function (
            el: asn1.ASN1Element
        ): TokenContent {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let algorithm!: AlgorithmIdentifier;
            let name!: DistinguishedName;
            let time!: Time;
            let random!: asn1.BIT_STRING;
            let response: asn1.OPTIONAL<asn1.BIT_STRING>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                algorithm: (_el: asn1.ASN1Element): void => {
                    algorithm = __utils._decode_explicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                name: (_el: asn1.ASN1Element): void => {
                    name = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                time: (_el: asn1.ASN1Element): void => {
                    time = __utils._decode_explicit<Time>(() => _decode_Time)(
                        _el
                    );
                },
                random: (_el: asn1.ASN1Element): void => {
                    random = __utils._decode_explicit<asn1.BIT_STRING>(
                        () => __utils._decodeBitString
                    )(_el);
                },
                response: (_el: asn1.ASN1Element): void => {
                    response = __utils._decode_explicit<asn1.BIT_STRING>(
                        () => __utils._decodeBitString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TokenContent,
                _extension_additions_list_spec_for_TokenContent,
                _root_component_type_list_2_spec_for_TokenContent,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TokenContent(
                /* SEQUENCE_CONSTRUCTOR_CALL */ algorithm,
                name,
                time,
                random,
                response,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TokenContent(el);
}
export function _encode_TokenContent(
    value: TokenContent,
    elGetter: __utils.ASN1Encoder<TokenContent>
) {
    if (!_cached_encoder_for_TokenContent) {
        _cached_encoder_for_TokenContent = function (
            value: TokenContent,
            elGetter: __utils.ASN1Encoder<TokenContent>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_AlgorithmIdentifier,
                                __utils.BER
                            )(value.algorithm, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () => _encode_DistinguishedName,
                                __utils.BER
                            )(value.name, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                2,
                                () => _encode_Time,
                                __utils.BER
                            )(value.time, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                3,
                                () => __utils._encodeBitString,
                                __utils.BER
                            )(value.random, __utils.BER),
                            /* IF_ABSENT  */ value.response === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      4,
                                      () => __utils._encodeBitString,
                                      __utils.BER
                                  )(value.response, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_TokenContent(value, elGetter);
}

export type Token = SIGNED<TokenContent>; // DefinedType
let _cached_decoder_for_Token: __utils.ASN1Decoder<Token> | null = null;
let _cached_encoder_for_Token: __utils.ASN1Encoder<Token> | null = null;
export function _decode_Token(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Token) {
        _cached_decoder_for_Token = _get_decoder_for_SIGNED<TokenContent>(
            _decode_TokenContent
        );
    }
    return _cached_decoder_for_Token(el);
}
export function _encode_Token(
    value: Token,
    elGetter: __utils.ASN1Encoder<Token>
) {
    if (!_cached_encoder_for_Token) {
        _cached_encoder_for_Token = _get_encoder_for_SIGNED<TokenContent>(
            _encode_TokenContent
        );
    }
    return _cached_encoder_for_Token(value, elGetter);
}

export class StrongCredentials {
    constructor(
        readonly certification_path: CertificationPath | undefined,
        readonly bind_token: Token,
        readonly name: DistinguishedName | undefined,
        readonly attributeCertificationPath:
            | AttributeCertificationPath
            | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_StrongCredentials: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "certification-path",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "bind-token",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributeCertificationPath",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_StrongCredentials: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_StrongCredentials: __utils.ComponentSpec[] = [];
let _cached_decoder_for_StrongCredentials: __utils.ASN1Decoder<
    StrongCredentials
> | null = null;
let _cached_encoder_for_StrongCredentials: __utils.ASN1Encoder<
    StrongCredentials
> | null = null;
export function _decode_StrongCredentials(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_StrongCredentials) {
        _cached_decoder_for_StrongCredentials = function (
            el: asn1.ASN1Element
        ): StrongCredentials {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let certification_path: asn1.OPTIONAL<CertificationPath>;
            let bind_token!: Token;
            let name: asn1.OPTIONAL<DistinguishedName>;
            let attributeCertificationPath: asn1.OPTIONAL<AttributeCertificationPath>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "certification-path": (_el: asn1.ASN1Element): void => {
                    certification_path = __utils._decode_explicit<
                        CertificationPath
                    >(() => _decode_CertificationPath)(_el);
                },
                "bind-token": (_el: asn1.ASN1Element): void => {
                    bind_token = __utils._decode_explicit<Token>(
                        () => _decode_Token
                    )(_el);
                },
                name: (_el: asn1.ASN1Element): void => {
                    name = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                attributeCertificationPath: (_el: asn1.ASN1Element): void => {
                    attributeCertificationPath = __utils._decode_explicit<
                        AttributeCertificationPath
                    >(() => _decode_AttributeCertificationPath)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_StrongCredentials,
                _extension_additions_list_spec_for_StrongCredentials,
                _root_component_type_list_2_spec_for_StrongCredentials,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new StrongCredentials(
                /* SET_CONSTRUCTOR_CALL */ certification_path,
                bind_token,
                name,
                attributeCertificationPath,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_StrongCredentials(el);
}
export function _encode_StrongCredentials(
    value: StrongCredentials,
    elGetter: __utils.ASN1Encoder<StrongCredentials>
) {
    if (!_cached_encoder_for_StrongCredentials) {
        _cached_encoder_for_StrongCredentials = function (
            value: StrongCredentials,
            elGetter: __utils.ASN1Encoder<StrongCredentials>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.certification_path ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_CertificationPath,
                                      __utils.BER
                                  )(value.certification_path, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () => _encode_Token,
                                __utils.BER
                            )(value.bind_token, __utils.BER),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.name, __utils.BER),
                            /* IF_ABSENT  */ value.attributeCertificationPath ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () => _encode_AttributeCertificationPath,
                                      __utils.BER
                                  )(
                                      value.attributeCertificationPath,
                                      __utils.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_StrongCredentials(value, elGetter);
}

export type SpkmCredentials =
    | { req: SPKM_REQ } /* CHOICE_ALT_ROOT */
    | { rep: SPKM_REP_TI } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_SpkmCredentials: __utils.ASN1Decoder<
    SpkmCredentials
> | null = null;
let _cached_encoder_for_SpkmCredentials: __utils.ASN1Encoder<
    SpkmCredentials
> | null = null;
export function _decode_SpkmCredentials(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SpkmCredentials) {
        _cached_decoder_for_SpkmCredentials = __utils._decode_extensible_choice<
            SpkmCredentials
        >({
            "CONTEXT 0": [
                "req",
                __utils._decode_explicit<SPKM_REQ>(() => _decode_SPKM_REQ),
            ],
            "CONTEXT 1": [
                "rep",
                __utils._decode_explicit<SPKM_REP_TI>(
                    () => _decode_SPKM_REP_TI
                ),
            ],
        });
    }
    return _cached_decoder_for_SpkmCredentials(el);
}
export function _encode_SpkmCredentials(
    value: SpkmCredentials,
    elGetter: __utils.ASN1Encoder<SpkmCredentials>
) {
    if (!_cached_encoder_for_SpkmCredentials) {
        _cached_encoder_for_SpkmCredentials = __utils._encode_choice<
            SpkmCredentials
        >(
            {
                req: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_SPKM_REQ,
                    __utils.BER
                ),
                rep: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_SPKM_REP_TI,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_SpkmCredentials(value, elGetter);
}

export const ub_saslMechanism: asn1.INTEGER = 20;

export class SaslCredentials {
    constructor(
        readonly mechanism: DirectoryString,
        readonly credentials: asn1.OCTET_STRING | undefined,
        readonly saslAbort: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_saslAbort() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_SaslCredentials: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "mechanism",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "credentials",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "saslAbort",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SaslCredentials: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SaslCredentials: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SaslCredentials: __utils.ASN1Decoder<
    SaslCredentials
> | null = null;
let _cached_encoder_for_SaslCredentials: __utils.ASN1Encoder<
    SaslCredentials
> | null = null;
export function _decode_SaslCredentials(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SaslCredentials) {
        _cached_decoder_for_SaslCredentials = function (
            el: asn1.ASN1Element
        ): SaslCredentials {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let mechanism!: DirectoryString;
            let credentials: asn1.OPTIONAL<asn1.OCTET_STRING>;
            let saslAbort: asn1.OPTIONAL<asn1.BOOLEAN> =
                SaslCredentials._default_value_for_saslAbort;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                mechanism: (_el: asn1.ASN1Element): void => {
                    mechanism = __utils._decode_explicit<DirectoryString>(
                        () => _decode_DirectoryString
                    )(_el);
                },
                credentials: (_el: asn1.ASN1Element): void => {
                    credentials = __utils._decode_explicit<asn1.OCTET_STRING>(
                        () => __utils._decodeOctetString
                    )(_el);
                },
                saslAbort: (_el: asn1.ASN1Element): void => {
                    saslAbort = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SaslCredentials,
                _extension_additions_list_spec_for_SaslCredentials,
                _root_component_type_list_2_spec_for_SaslCredentials,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SaslCredentials(
                /* SEQUENCE_CONSTRUCTOR_CALL */ mechanism,
                credentials,
                saslAbort,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SaslCredentials(el);
}
export function _encode_SaslCredentials(
    value: SaslCredentials,
    elGetter: __utils.ASN1Encoder<SaslCredentials>
) {
    if (!_cached_encoder_for_SaslCredentials) {
        _cached_encoder_for_SaslCredentials = function (
            value: SaslCredentials,
            elGetter: __utils.ASN1Encoder<SaslCredentials>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_DirectoryString,
                                __utils.BER
                            )(value.mechanism, __utils.BER),
                            /* IF_ABSENT  */ value.credentials === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => __utils._encodeOctetString,
                                      __utils.BER
                                  )(value.credentials, __utils.BER),
                            /* IF_DEFAULT */ value.saslAbort === undefined ||
                            __utils.deepEq(
                                value.saslAbort,
                                SaslCredentials._default_value_for_saslAbort
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.saslAbort, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SaslCredentials(value, elGetter);
}

export type Credentials =
    | { simple: SimpleCredentials } /* CHOICE_ALT_ROOT */
    | { strong: StrongCredentials } /* CHOICE_ALT_ROOT */
    | { externalProcedure: asn1.EXTERNAL } /* CHOICE_ALT_ROOT */
    | { spkm: SpkmCredentials } /* CHOICE_ALT_ROOT */
    | { sasl: SaslCredentials } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Credentials: __utils.ASN1Decoder<
    Credentials
> | null = null;
let _cached_encoder_for_Credentials: __utils.ASN1Encoder<
    Credentials
> | null = null;
export function _decode_Credentials(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Credentials) {
        _cached_decoder_for_Credentials = __utils._decode_extensible_choice<
            Credentials
        >({
            "CONTEXT 0": [
                "simple",
                __utils._decode_explicit<SimpleCredentials>(
                    () => _decode_SimpleCredentials
                ),
            ],
            "CONTEXT 1": [
                "strong",
                __utils._decode_explicit<StrongCredentials>(
                    () => _decode_StrongCredentials
                ),
            ],
            "CONTEXT 2": [
                "externalProcedure",
                __utils._decode_explicit<asn1.EXTERNAL>(
                    () => __utils._decodeExternal
                ),
            ],
            "CONTEXT 3": [
                "spkm",
                __utils._decode_explicit<SpkmCredentials>(
                    () => _decode_SpkmCredentials
                ),
            ],
            "CONTEXT 4": [
                "sasl",
                __utils._decode_explicit<SaslCredentials>(
                    () => _decode_SaslCredentials
                ),
            ],
        });
    }
    return _cached_decoder_for_Credentials(el);
}
export function _encode_Credentials(
    value: Credentials,
    elGetter: __utils.ASN1Encoder<Credentials>
) {
    if (!_cached_encoder_for_Credentials) {
        _cached_encoder_for_Credentials = __utils._encode_choice<Credentials>(
            {
                simple: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_SimpleCredentials,
                    __utils.BER
                ),
                strong: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_StrongCredentials,
                    __utils.BER
                ),
                externalProcedure: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () => __utils._encodeExternal,
                    __utils.BER
                ),
                spkm: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    3,
                    () => _encode_SpkmCredentials,
                    __utils.BER
                ),
                sasl: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    4,
                    () => _encode_SaslCredentials,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_Credentials(value, elGetter);
}

export type Versions = asn1.BIT_STRING;
export const Versions_v1: number = 0; /* LONG_NAMED_BIT */
export const v1: number = Versions_v1; /* SHORT_NAMED_BIT */
export const Versions_v2: number = 1; /* LONG_NAMED_BIT */
export const v2: number = Versions_v2; /* SHORT_NAMED_BIT */
let _cached_decoder_for_Versions: __utils.ASN1Decoder<Versions> | null = null;
let _cached_encoder_for_Versions: __utils.ASN1Encoder<Versions> | null = null;
export function _decode_Versions(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Versions) {
        _cached_decoder_for_Versions = __utils._decodeBitString;
    }
    return _cached_decoder_for_Versions(el);
}
export function _encode_Versions(
    value: Versions,
    elGetter: __utils.ASN1Encoder<Versions>
) {
    if (!_cached_encoder_for_Versions) {
        _cached_encoder_for_Versions = __utils._encodeBitString;
    }
    return _cached_encoder_for_Versions(value, elGetter);
}

export class DirectoryBindArgument {
    constructor(
        readonly credentials: Credentials | undefined,
        readonly versions: Versions | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_versions() {
        return new Uint8ClampedArray([asn1.TRUE_BIT]);
    }
}
export const _root_component_type_list_1_spec_for_DirectoryBindArgument: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "credentials",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "versions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DirectoryBindArgument: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DirectoryBindArgument: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DirectoryBindArgument: __utils.ASN1Decoder<
    DirectoryBindArgument
> | null = null;
let _cached_encoder_for_DirectoryBindArgument: __utils.ASN1Encoder<
    DirectoryBindArgument
> | null = null;
export function _decode_DirectoryBindArgument(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DirectoryBindArgument) {
        _cached_decoder_for_DirectoryBindArgument = function (
            el: asn1.ASN1Element
        ): DirectoryBindArgument {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let credentials: asn1.OPTIONAL<Credentials>;
            let versions: asn1.OPTIONAL<Versions> =
                DirectoryBindArgument._default_value_for_versions;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                credentials: (_el: asn1.ASN1Element): void => {
                    credentials = __utils._decode_explicit<Credentials>(
                        () => _decode_Credentials
                    )(_el);
                },
                versions: (_el: asn1.ASN1Element): void => {
                    versions = __utils._decode_explicit<Versions>(
                        () => _decode_Versions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DirectoryBindArgument,
                _extension_additions_list_spec_for_DirectoryBindArgument,
                _root_component_type_list_2_spec_for_DirectoryBindArgument,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DirectoryBindArgument(
                /* SET_CONSTRUCTOR_CALL */ credentials,
                versions,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DirectoryBindArgument(el);
}
export function _encode_DirectoryBindArgument(
    value: DirectoryBindArgument,
    elGetter: __utils.ASN1Encoder<DirectoryBindArgument>
) {
    if (!_cached_encoder_for_DirectoryBindArgument) {
        _cached_encoder_for_DirectoryBindArgument = function (
            value: DirectoryBindArgument,
            elGetter: __utils.ASN1Encoder<DirectoryBindArgument>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.credentials === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_Credentials,
                                      __utils.BER
                                  )(value.credentials, __utils.BER),
                            /* IF_DEFAULT */ value.versions === undefined ||
                            __utils.deepEq(
                                value.versions,
                                DirectoryBindArgument._default_value_for_versions
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_Versions,
                                      __utils.BER
                                  )(value.versions, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_DirectoryBindArgument(value, elGetter);
}

export type PwdResponseValue_warning =
    | { timeLeft: asn1.INTEGER } /* CHOICE_ALT_ROOT */
    | { graceRemaining: asn1.INTEGER } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_PwdResponseValue_warning: __utils.ASN1Decoder<
    PwdResponseValue_warning
> | null = null;
let _cached_encoder_for_PwdResponseValue_warning: __utils.ASN1Encoder<
    PwdResponseValue_warning
> | null = null;
export function _decode_PwdResponseValue_warning(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PwdResponseValue_warning) {
        _cached_decoder_for_PwdResponseValue_warning = __utils._decode_extensible_choice<
            PwdResponseValue_warning
        >({
            "CONTEXT 0": [
                "timeLeft",
                __utils._decode_explicit<asn1.INTEGER>(
                    () => __utils._decodeInteger
                ),
            ],
            "CONTEXT 1": [
                "graceRemaining",
                __utils._decode_explicit<asn1.INTEGER>(
                    () => __utils._decodeInteger
                ),
            ],
        });
    }
    return _cached_decoder_for_PwdResponseValue_warning(el);
}
export function _encode_PwdResponseValue_warning(
    value: PwdResponseValue_warning,
    elGetter: __utils.ASN1Encoder<PwdResponseValue_warning>
) {
    if (!_cached_encoder_for_PwdResponseValue_warning) {
        _cached_encoder_for_PwdResponseValue_warning = __utils._encode_choice<
            PwdResponseValue_warning
        >(
            {
                timeLeft: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeInteger,
                    __utils.BER
                ),
                graceRemaining: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => __utils._encodeInteger,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_PwdResponseValue_warning(value, elGetter);
}

export type PwdResponseValue_error = asn1.ENUMERATED;
export const PwdResponseValue_error_passwordExpired: PwdResponseValue_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const PwdResponseValue_error_changeAfterReset: PwdResponseValue_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_PwdResponseValue_error: __utils.ASN1Decoder<
    PwdResponseValue_error
> | null = null;
let _cached_encoder_for_PwdResponseValue_error: __utils.ASN1Encoder<
    PwdResponseValue_error
> | null = null;
export function _decode_PwdResponseValue_error(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PwdResponseValue_error) {
        _cached_decoder_for_PwdResponseValue_error = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_PwdResponseValue_error(el);
}
export function _encode_PwdResponseValue_error(
    value: PwdResponseValue_error,
    elGetter: __utils.ASN1Encoder<PwdResponseValue_error>
) {
    if (!_cached_encoder_for_PwdResponseValue_error) {
        _cached_encoder_for_PwdResponseValue_error = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_PwdResponseValue_error(value, elGetter);
}

export class PwdResponseValue {
    constructor(
        readonly warning: PwdResponseValue_warning | undefined,
        readonly error: PwdResponseValue_error | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_PwdResponseValue: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "warning",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "error",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PwdResponseValue: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PwdResponseValue: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PwdResponseValue: __utils.ASN1Decoder<
    PwdResponseValue
> | null = null;
let _cached_encoder_for_PwdResponseValue: __utils.ASN1Encoder<
    PwdResponseValue
> | null = null;
export function _decode_PwdResponseValue(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PwdResponseValue) {
        _cached_decoder_for_PwdResponseValue = function (
            el: asn1.ASN1Element
        ): PwdResponseValue {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let warning: asn1.OPTIONAL<PwdResponseValue_warning>;
            let error: asn1.OPTIONAL<PwdResponseValue_error>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                warning: (_el: asn1.ASN1Element): void => {
                    warning = _decode_PwdResponseValue_warning(_el);
                },
                error: (_el: asn1.ASN1Element): void => {
                    error = _decode_PwdResponseValue_error(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PwdResponseValue,
                _extension_additions_list_spec_for_PwdResponseValue,
                _root_component_type_list_2_spec_for_PwdResponseValue,
                undefined
            );
            return new PwdResponseValue(
                /* SEQUENCE_CONSTRUCTOR_CALL */ warning,
                error
            );
        };
    }
    return _cached_decoder_for_PwdResponseValue(el);
}
export function _encode_PwdResponseValue(
    value: PwdResponseValue,
    elGetter: __utils.ASN1Encoder<PwdResponseValue>
) {
    if (!_cached_encoder_for_PwdResponseValue) {
        _cached_encoder_for_PwdResponseValue = function (
            value: PwdResponseValue,
            elGetter: __utils.ASN1Encoder<PwdResponseValue>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.warning === undefined
                            ? undefined
                            : _encode_PwdResponseValue_warning(
                                  value.warning,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.error === undefined
                            ? undefined
                            : _encode_PwdResponseValue_error(
                                  value.error,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_PwdResponseValue(value, elGetter);
}

export class DirectoryBindResult {
    constructor(
        readonly credentials: Credentials | undefined,
        readonly versions: Versions | undefined,
        readonly pwdResponseValue: PwdResponseValue | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_versions() {
        return new Uint8ClampedArray([asn1.TRUE_BIT]);
    }
}
export const _root_component_type_list_1_spec_for_DirectoryBindResult: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "credentials",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "versions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DirectoryBindResult: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DirectoryBindResult: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "pwdResponseValue",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
let _cached_decoder_for_DirectoryBindResult: __utils.ASN1Decoder<
    DirectoryBindResult
> | null = null;
let _cached_encoder_for_DirectoryBindResult: __utils.ASN1Encoder<
    DirectoryBindResult
> | null = null;
export function _decode_DirectoryBindResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DirectoryBindResult) {
        _cached_decoder_for_DirectoryBindResult = function (
            el: asn1.ASN1Element
        ): DirectoryBindResult {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let credentials: asn1.OPTIONAL<Credentials>;
            let versions: asn1.OPTIONAL<Versions> =
                DirectoryBindResult._default_value_for_versions;
            let pwdResponseValue: asn1.OPTIONAL<PwdResponseValue>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                credentials: (_el: asn1.ASN1Element): void => {
                    credentials = __utils._decode_explicit<Credentials>(
                        () => _decode_Credentials
                    )(_el);
                },
                versions: (_el: asn1.ASN1Element): void => {
                    versions = __utils._decode_explicit<Versions>(
                        () => _decode_Versions
                    )(_el);
                },
                pwdResponseValue: (_el: asn1.ASN1Element): void => {
                    pwdResponseValue = __utils._decode_explicit<
                        PwdResponseValue
                    >(() => _decode_PwdResponseValue)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DirectoryBindResult,
                _extension_additions_list_spec_for_DirectoryBindResult,
                _root_component_type_list_2_spec_for_DirectoryBindResult,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DirectoryBindResult(
                /* SET_CONSTRUCTOR_CALL */ credentials,
                versions,
                pwdResponseValue,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DirectoryBindResult(el);
}
export function _encode_DirectoryBindResult(
    value: DirectoryBindResult,
    elGetter: __utils.ASN1Encoder<DirectoryBindResult>
) {
    if (!_cached_encoder_for_DirectoryBindResult) {
        _cached_encoder_for_DirectoryBindResult = function (
            value: DirectoryBindResult,
            elGetter: __utils.ASN1Encoder<DirectoryBindResult>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.credentials === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_Credentials,
                                      __utils.BER
                                  )(value.credentials, __utils.BER),
                            /* IF_DEFAULT */ value.versions === undefined ||
                            __utils.deepEq(
                                value.versions,
                                DirectoryBindResult._default_value_for_versions
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_Versions,
                                      __utils.BER
                                  )(value.versions, __utils.BER),
                        ],
                        [
                            /* IF_ABSENT  */ value.pwdResponseValue ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_PwdResponseValue,
                                      __utils.BER
                                  )(value.pwdResponseValue, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_DirectoryBindResult(value, elGetter);
}

// TODO: ObjectAssignment: directoryBindError

export type BindKeyInfo = ENCRYPTED<asn1.BIT_STRING>; // DefinedType
let _cached_decoder_for_BindKeyInfo: __utils.ASN1Decoder<
    BindKeyInfo
> | null = null;
let _cached_encoder_for_BindKeyInfo: __utils.ASN1Encoder<
    BindKeyInfo
> | null = null;
export function _decode_BindKeyInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_BindKeyInfo) {
        _cached_decoder_for_BindKeyInfo = _get_decoder_for_ENCRYPTED<
            asn1.BIT_STRING
        >(__utils._decodeBitString);
    }
    return _cached_decoder_for_BindKeyInfo(el);
}
export function _encode_BindKeyInfo(
    value: BindKeyInfo,
    elGetter: __utils.ASN1Encoder<BindKeyInfo>
) {
    if (!_cached_encoder_for_BindKeyInfo) {
        _cached_encoder_for_BindKeyInfo = _get_encoder_for_ENCRYPTED<
            asn1.BIT_STRING
        >(__utils._encodeBitString);
    }
    return _cached_encoder_for_BindKeyInfo(value, elGetter);
}

// TODO: ObjectAssignment: read

export type EntryInformationSelection_attributes =
    | { allUserAttributes: asn1.NULL } /* CHOICE_ALT_ROOT */
    | { select: AttributeType[] } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_EntryInformationSelection_attributes: __utils.ASN1Decoder<
    EntryInformationSelection_attributes
> | null = null;
let _cached_encoder_for_EntryInformationSelection_attributes: __utils.ASN1Encoder<
    EntryInformationSelection_attributes
> | null = null;
export function _decode_EntryInformationSelection_attributes(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_EntryInformationSelection_attributes) {
        _cached_decoder_for_EntryInformationSelection_attributes = __utils._decode_inextensible_choice<
            EntryInformationSelection_attributes
        >({
            "CONTEXT 0": [
                "allUserAttributes",
                __utils._decode_explicit<asn1.NULL>(() => __utils._decodeNull),
            ],
            "CONTEXT 1": [
                "select",
                __utils._decode_explicit<AttributeType[]>(() =>
                    __utils._decodeSetOf<AttributeType>(
                        () => _decode_AttributeType
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_EntryInformationSelection_attributes(el);
}
export function _encode_EntryInformationSelection_attributes(
    value: EntryInformationSelection_attributes,
    elGetter: __utils.ASN1Encoder<EntryInformationSelection_attributes>
) {
    if (!_cached_encoder_for_EntryInformationSelection_attributes) {
        _cached_encoder_for_EntryInformationSelection_attributes = __utils._encode_choice<
            EntryInformationSelection_attributes
        >(
            {
                allUserAttributes: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeNull,
                    __utils.BER
                ),
                select: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () =>
                        __utils._encodeSetOf<AttributeType>(
                            () => _encode_AttributeType,
                            __utils.BER
                        ),
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_EntryInformationSelection_attributes(
        value,
        elGetter
    );
}

export type EntryInformationSelection_infoTypes = asn1.INTEGER;
export const EntryInformationSelection_infoTypes_attributeTypesOnly: EntryInformationSelection_infoTypes = 0; /* LONG_NAMED_INTEGER_VALUE */
export const attributeTypesOnly: EntryInformationSelection_infoTypes = EntryInformationSelection_infoTypes_attributeTypesOnly; /* SHORT_NAMED_INTEGER_VALUE */
export const EntryInformationSelection_infoTypes_attributeTypesAndValues: EntryInformationSelection_infoTypes = 1; /* LONG_NAMED_INTEGER_VALUE */
export const attributeTypesAndValues: EntryInformationSelection_infoTypes = EntryInformationSelection_infoTypes_attributeTypesAndValues; /* SHORT_NAMED_INTEGER_VALUE */
let _cached_decoder_for_EntryInformationSelection_infoTypes: __utils.ASN1Decoder<
    EntryInformationSelection_infoTypes
> | null = null;
let _cached_encoder_for_EntryInformationSelection_infoTypes: __utils.ASN1Encoder<
    EntryInformationSelection_infoTypes
> | null = null;
export function _decode_EntryInformationSelection_infoTypes(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_EntryInformationSelection_infoTypes) {
        _cached_decoder_for_EntryInformationSelection_infoTypes =
            __utils._decodeInteger;
    }
    return _cached_decoder_for_EntryInformationSelection_infoTypes(el);
}
export function _encode_EntryInformationSelection_infoTypes(
    value: EntryInformationSelection_infoTypes,
    elGetter: __utils.ASN1Encoder<EntryInformationSelection_infoTypes>
) {
    if (!_cached_encoder_for_EntryInformationSelection_infoTypes) {
        _cached_encoder_for_EntryInformationSelection_infoTypes =
            __utils._encodeInteger;
    }
    return _cached_encoder_for_EntryInformationSelection_infoTypes(
        value,
        elGetter
    );
}

export type EntryInformationSelection_extraAttributes =
    | { allOperationalAttributes: asn1.NULL } /* CHOICE_ALT_ROOT */
    | { select: AttributeType[] } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_EntryInformationSelection_extraAttributes: __utils.ASN1Decoder<
    EntryInformationSelection_extraAttributes
> | null = null;
let _cached_encoder_for_EntryInformationSelection_extraAttributes: __utils.ASN1Encoder<
    EntryInformationSelection_extraAttributes
> | null = null;
export function _decode_EntryInformationSelection_extraAttributes(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_EntryInformationSelection_extraAttributes) {
        _cached_decoder_for_EntryInformationSelection_extraAttributes = __utils._decode_inextensible_choice<
            EntryInformationSelection_extraAttributes
        >({
            "CONTEXT 3": [
                "allOperationalAttributes",
                __utils._decode_explicit<asn1.NULL>(() => __utils._decodeNull),
            ],
            "CONTEXT 4": [
                "select",
                __utils._decode_explicit<AttributeType[]>(() =>
                    __utils._decodeSetOf<AttributeType>(
                        () => _decode_AttributeType
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_EntryInformationSelection_extraAttributes(el);
}
export function _encode_EntryInformationSelection_extraAttributes(
    value: EntryInformationSelection_extraAttributes,
    elGetter: __utils.ASN1Encoder<EntryInformationSelection_extraAttributes>
) {
    if (!_cached_encoder_for_EntryInformationSelection_extraAttributes) {
        _cached_encoder_for_EntryInformationSelection_extraAttributes = __utils._encode_choice<
            EntryInformationSelection_extraAttributes
        >(
            {
                allOperationalAttributes: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    3,
                    () => __utils._encodeNull,
                    __utils.BER
                ),
                select: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    4,
                    () =>
                        __utils._encodeSetOf<AttributeType>(
                            () => _encode_AttributeType,
                            __utils.BER
                        ),
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_EntryInformationSelection_extraAttributes(
        value,
        elGetter
    );
}

export type TypeAndContextAssertion_contextAssertions =
    | { preference: ContextAssertion[] } /* CHOICE_ALT_ROOT */
    | { all: ContextAssertion[] } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_TypeAndContextAssertion_contextAssertions: __utils.ASN1Decoder<
    TypeAndContextAssertion_contextAssertions
> | null = null;
let _cached_encoder_for_TypeAndContextAssertion_contextAssertions: __utils.ASN1Encoder<
    TypeAndContextAssertion_contextAssertions
> | null = null;
export function _decode_TypeAndContextAssertion_contextAssertions(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_TypeAndContextAssertion_contextAssertions) {
        _cached_decoder_for_TypeAndContextAssertion_contextAssertions = __utils._decode_extensible_choice<
            TypeAndContextAssertion_contextAssertions
        >({
            "UNIVERSAL 16": [
                "preference",
                __utils._decodeSequenceOf<ContextAssertion>(
                    () => _decode_ContextAssertion
                ),
            ],
            "UNIVERSAL 17": [
                "all",
                __utils._decodeSetOf<ContextAssertion>(
                    () => _decode_ContextAssertion
                ),
            ],
        });
    }
    return _cached_decoder_for_TypeAndContextAssertion_contextAssertions(el);
}
export function _encode_TypeAndContextAssertion_contextAssertions(
    value: TypeAndContextAssertion_contextAssertions,
    elGetter: __utils.ASN1Encoder<TypeAndContextAssertion_contextAssertions>
) {
    if (!_cached_encoder_for_TypeAndContextAssertion_contextAssertions) {
        _cached_encoder_for_TypeAndContextAssertion_contextAssertions = __utils._encode_choice<
            TypeAndContextAssertion_contextAssertions
        >(
            {
                preference: __utils._encodeSequenceOf<ContextAssertion>(
                    () => _encode_ContextAssertion,
                    __utils.BER
                ),
                all: __utils._encodeSetOf<ContextAssertion>(
                    () => _encode_ContextAssertion,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_TypeAndContextAssertion_contextAssertions(
        value,
        elGetter
    );
}

export class TypeAndContextAssertion {
    constructor(
        readonly type_: AttributeType,
        readonly contextAssertions: TypeAndContextAssertion_contextAssertions,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_TypeAndContextAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contextAssertions",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TypeAndContextAssertion: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TypeAndContextAssertion: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TypeAndContextAssertion: __utils.ASN1Decoder<
    TypeAndContextAssertion
> | null = null;
let _cached_encoder_for_TypeAndContextAssertion: __utils.ASN1Encoder<
    TypeAndContextAssertion
> | null = null;
export function _decode_TypeAndContextAssertion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TypeAndContextAssertion) {
        _cached_decoder_for_TypeAndContextAssertion = function (
            el: asn1.ASN1Element
        ): TypeAndContextAssertion {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "TypeAndContextAssertion contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "type";
            sequence[1].name = "contextAssertions";
            let type_!: AttributeType;
            let contextAssertions!: TypeAndContextAssertion_contextAssertions;
            type_ = _decode_AttributeType(sequence[0]);
            contextAssertions = _decode_TypeAndContextAssertion_contextAssertions(
                sequence[1]
            );
            // TODO: Validate values.
            return new TypeAndContextAssertion(
                type_,
                contextAssertions,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_TypeAndContextAssertion(el);
}
export function _encode_TypeAndContextAssertion(
    value: TypeAndContextAssertion,
    elGetter: __utils.ASN1Encoder<TypeAndContextAssertion>
) {
    if (!_cached_encoder_for_TypeAndContextAssertion) {
        _cached_encoder_for_TypeAndContextAssertion = function (
            value: TypeAndContextAssertion,
            elGetter: __utils.ASN1Encoder<TypeAndContextAssertion>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeType(
                                value.type_,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_TypeAndContextAssertion_contextAssertions(
                                value.contextAssertions,
                                __utils.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_TypeAndContextAssertion(value, elGetter);
}

export type ContextSelection =
    | { allContexts: asn1.NULL } /* CHOICE_ALT_ROOT */
    | { selectedContexts: TypeAndContextAssertion[] } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ContextSelection: __utils.ASN1Decoder<
    ContextSelection
> | null = null;
let _cached_encoder_for_ContextSelection: __utils.ASN1Encoder<
    ContextSelection
> | null = null;
export function _decode_ContextSelection(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ContextSelection) {
        _cached_decoder_for_ContextSelection = __utils._decode_extensible_choice<
            ContextSelection
        >({
            "UNIVERSAL 5": ["allContexts", __utils._decodeNull],
            "UNIVERSAL 17": [
                "selectedContexts",
                __utils._decodeSetOf<TypeAndContextAssertion>(
                    () => _decode_TypeAndContextAssertion
                ),
            ],
        });
    }
    return _cached_decoder_for_ContextSelection(el);
}
export function _encode_ContextSelection(
    value: ContextSelection,
    elGetter: __utils.ASN1Encoder<ContextSelection>
) {
    if (!_cached_encoder_for_ContextSelection) {
        _cached_encoder_for_ContextSelection = __utils._encode_choice<
            ContextSelection
        >(
            {
                allContexts: __utils._encodeNull,
                selectedContexts: __utils._encodeSetOf<TypeAndContextAssertion>(
                    () => _encode_TypeAndContextAssertion,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ContextSelection(value, elGetter);
}

export type FamilyReturn_memberSelect = asn1.ENUMERATED;
export const FamilyReturn_memberSelect_contributingEntriesOnly: FamilyReturn_memberSelect = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const FamilyReturn_memberSelect_participatingEntriesOnly: FamilyReturn_memberSelect = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const FamilyReturn_memberSelect_compoundEntry: FamilyReturn_memberSelect = 3; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_FamilyReturn_memberSelect: __utils.ASN1Decoder<
    FamilyReturn_memberSelect
> | null = null;
let _cached_encoder_for_FamilyReturn_memberSelect: __utils.ASN1Encoder<
    FamilyReturn_memberSelect
> | null = null;
export function _decode_FamilyReturn_memberSelect(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_FamilyReturn_memberSelect) {
        _cached_decoder_for_FamilyReturn_memberSelect =
            __utils._decodeEnumerated;
    }
    return _cached_decoder_for_FamilyReturn_memberSelect(el);
}
export function _encode_FamilyReturn_memberSelect(
    value: FamilyReturn_memberSelect,
    elGetter: __utils.ASN1Encoder<FamilyReturn_memberSelect>
) {
    if (!_cached_encoder_for_FamilyReturn_memberSelect) {
        _cached_encoder_for_FamilyReturn_memberSelect =
            __utils._encodeEnumerated;
    }
    return _cached_encoder_for_FamilyReturn_memberSelect(value, elGetter);
}

export class FamilyReturn {
    constructor(
        readonly memberSelect: FamilyReturn_memberSelect,
        readonly familySelect: asn1.OBJECT_IDENTIFIER[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_FamilyReturn: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "memberSelect",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "familySelect",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_FamilyReturn: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_FamilyReturn: __utils.ComponentSpec[] = [];
let _cached_decoder_for_FamilyReturn: __utils.ASN1Decoder<
    FamilyReturn
> | null = null;
let _cached_encoder_for_FamilyReturn: __utils.ASN1Encoder<
    FamilyReturn
> | null = null;
export function _decode_FamilyReturn(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_FamilyReturn) {
        _cached_decoder_for_FamilyReturn = function (
            el: asn1.ASN1Element
        ): FamilyReturn {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let memberSelect!: FamilyReturn_memberSelect;
            let familySelect: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                memberSelect: (_el: asn1.ASN1Element): void => {
                    memberSelect = _decode_FamilyReturn_memberSelect(_el);
                },
                familySelect: (_el: asn1.ASN1Element): void => {
                    familySelect = __utils._decodeSequenceOf<
                        asn1.OBJECT_IDENTIFIER
                    >(() => __utils._decodeObjectIdentifier)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FamilyReturn,
                _extension_additions_list_spec_for_FamilyReturn,
                _root_component_type_list_2_spec_for_FamilyReturn,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new FamilyReturn(
                /* SEQUENCE_CONSTRUCTOR_CALL */ memberSelect,
                familySelect,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_FamilyReturn(el);
}
export function _encode_FamilyReturn(
    value: FamilyReturn,
    elGetter: __utils.ASN1Encoder<FamilyReturn>
) {
    if (!_cached_encoder_for_FamilyReturn) {
        _cached_encoder_for_FamilyReturn = function (
            value: FamilyReturn,
            elGetter: __utils.ASN1Encoder<FamilyReturn>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_FamilyReturn_memberSelect(
                                value.memberSelect,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.familySelect === undefined
                                ? undefined
                                : __utils._encodeSequenceOf<
                                      asn1.OBJECT_IDENTIFIER
                                  >(
                                      () => __utils._encodeObjectIdentifier,
                                      __utils.BER
                                  )(value.familySelect, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_FamilyReturn(value, elGetter);
}

export class EntryInformationSelection {
    constructor(
        readonly attributes: EntryInformationSelection_attributes | undefined,
        readonly infoTypes: EntryInformationSelection_infoTypes | undefined,
        readonly extraAttributes:
            | EntryInformationSelection_extraAttributes
            | undefined,
        readonly contextSelection: ContextSelection | undefined,
        readonly returnContexts: asn1.BOOLEAN | undefined,
        readonly familyReturn: FamilyReturn | undefined
    ) {}
    public static get _default_value_for_attributes() {
        return { allUserAttributes: null };
    }
    public static get _default_value_for_infoTypes() {
        return attributeTypesAndValues;
    }
    public static get _default_value_for_returnContexts() {
        return false;
    }
    public static get _default_value_for_familyReturn() {
        return new FamilyReturn(
            FamilyReturn_memberSelect_contributingEntriesOnly,
            undefined
        );
    }
}
export const _root_component_type_list_1_spec_for_EntryInformationSelection: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "attributes",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "infoTypes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "extraAttributes",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contextSelection",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "returnContexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "familyReturn",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EntryInformationSelection: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EntryInformationSelection: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EntryInformationSelection: __utils.ASN1Decoder<
    EntryInformationSelection
> | null = null;
let _cached_encoder_for_EntryInformationSelection: __utils.ASN1Encoder<
    EntryInformationSelection
> | null = null;
export function _decode_EntryInformationSelection(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EntryInformationSelection) {
        _cached_decoder_for_EntryInformationSelection = function (
            el: asn1.ASN1Element
        ): EntryInformationSelection {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let attributes: asn1.OPTIONAL<EntryInformationSelection_attributes> =
                EntryInformationSelection._default_value_for_attributes;
            let infoTypes: asn1.OPTIONAL<EntryInformationSelection_infoTypes> =
                EntryInformationSelection._default_value_for_infoTypes;
            let extraAttributes: asn1.OPTIONAL<EntryInformationSelection_extraAttributes>;
            let contextSelection: asn1.OPTIONAL<ContextSelection>;
            let returnContexts: asn1.OPTIONAL<asn1.BOOLEAN> =
                EntryInformationSelection._default_value_for_returnContexts;
            let familyReturn: asn1.OPTIONAL<FamilyReturn> =
                EntryInformationSelection._default_value_for_familyReturn;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                attributes: (_el: asn1.ASN1Element): void => {
                    attributes = _decode_EntryInformationSelection_attributes(
                        _el
                    );
                },
                infoTypes: (_el: asn1.ASN1Element): void => {
                    infoTypes = __utils._decode_explicit<
                        EntryInformationSelection_infoTypes
                    >(() => _decode_EntryInformationSelection_infoTypes)(_el);
                },
                extraAttributes: (_el: asn1.ASN1Element): void => {
                    extraAttributes = _decode_EntryInformationSelection_extraAttributes(
                        _el
                    );
                },
                contextSelection: (_el: asn1.ASN1Element): void => {
                    contextSelection = _decode_ContextSelection(_el);
                },
                returnContexts: (_el: asn1.ASN1Element): void => {
                    returnContexts = __utils._decodeBoolean(_el);
                },
                familyReturn: (_el: asn1.ASN1Element): void => {
                    familyReturn = _decode_FamilyReturn(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EntryInformationSelection,
                _extension_additions_list_spec_for_EntryInformationSelection,
                _root_component_type_list_2_spec_for_EntryInformationSelection,
                undefined
            );
            return new EntryInformationSelection(
                /* SET_CONSTRUCTOR_CALL */ attributes,
                infoTypes,
                extraAttributes,
                contextSelection,
                returnContexts,
                familyReturn
            );
        };
    }
    return _cached_decoder_for_EntryInformationSelection(el);
}
export function _encode_EntryInformationSelection(
    value: EntryInformationSelection,
    elGetter: __utils.ASN1Encoder<EntryInformationSelection>
) {
    if (!_cached_encoder_for_EntryInformationSelection) {
        _cached_encoder_for_EntryInformationSelection = function (
            value: EntryInformationSelection,
            elGetter: __utils.ASN1Encoder<EntryInformationSelection>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.attributes === undefined ||
                        __utils.deepEq(
                            value.attributes,
                            EntryInformationSelection._default_value_for_attributes
                        )
                            ? undefined
                            : _encode_EntryInformationSelection_attributes(
                                  value.attributes,
                                  __utils.BER
                              ),
                        /* IF_DEFAULT */ value.infoTypes === undefined ||
                        __utils.deepEq(
                            value.infoTypes,
                            EntryInformationSelection._default_value_for_infoTypes
                        )
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () =>
                                      _encode_EntryInformationSelection_infoTypes,
                                  __utils.BER
                              )(value.infoTypes, __utils.BER),
                        /* IF_ABSENT  */ value.extraAttributes === undefined
                            ? undefined
                            : _encode_EntryInformationSelection_extraAttributes(
                                  value.extraAttributes,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.contextSelection === undefined
                            ? undefined
                            : _encode_ContextSelection(
                                  value.contextSelection,
                                  __utils.BER
                              ),
                        /* IF_DEFAULT */ value.returnContexts === undefined ||
                        __utils.deepEq(
                            value.returnContexts,
                            EntryInformationSelection._default_value_for_returnContexts
                        )
                            ? undefined
                            : __utils._encodeBoolean(
                                  value.returnContexts,
                                  __utils.BER
                              ),
                        /* IF_DEFAULT */ value.familyReturn === undefined ||
                        __utils.deepEq(
                            value.familyReturn,
                            EntryInformationSelection._default_value_for_familyReturn
                        )
                            ? undefined
                            : _encode_FamilyReturn(
                                  value.familyReturn,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_EntryInformationSelection(value, elGetter);
}

export type ServiceControlOptions = asn1.BIT_STRING;
export const ServiceControlOptions_preferChaining: number = 0; /* LONG_NAMED_BIT */
export const preferChaining: number = ServiceControlOptions_preferChaining; /* SHORT_NAMED_BIT */
export const ServiceControlOptions_chainingProhibited: number = 1; /* LONG_NAMED_BIT */
export const chainingProhibited: number = ServiceControlOptions_chainingProhibited; /* SHORT_NAMED_BIT */
export const ServiceControlOptions_localScope: number = 2; /* LONG_NAMED_BIT */
export const localScope: number = ServiceControlOptions_localScope; /* SHORT_NAMED_BIT */
export const ServiceControlOptions_dontUseCopy: number = 3; /* LONG_NAMED_BIT */
export const dontUseCopy: number = ServiceControlOptions_dontUseCopy; /* SHORT_NAMED_BIT */
export const ServiceControlOptions_dontDereferenceAliases: number = 4; /* LONG_NAMED_BIT */
export const dontDereferenceAliases: number = ServiceControlOptions_dontDereferenceAliases; /* SHORT_NAMED_BIT */
export const ServiceControlOptions_subentries: number = 5; /* LONG_NAMED_BIT */
export const subentries: number = ServiceControlOptions_subentries; /* SHORT_NAMED_BIT */
export const ServiceControlOptions_copyShallDo: number = 6; /* LONG_NAMED_BIT */
export const copyShallDo: number = ServiceControlOptions_copyShallDo; /* SHORT_NAMED_BIT */
export const ServiceControlOptions_partialNameResolution: number = 7; /* LONG_NAMED_BIT */
export const partialNameResolution: number = ServiceControlOptions_partialNameResolution; /* SHORT_NAMED_BIT */
export const ServiceControlOptions_manageDSAIT: number = 8; /* LONG_NAMED_BIT */
export const manageDSAIT: number = ServiceControlOptions_manageDSAIT; /* SHORT_NAMED_BIT */
export const ServiceControlOptions_noSubtypeMatch: number = 9; /* LONG_NAMED_BIT */
export const noSubtypeMatch: number = ServiceControlOptions_noSubtypeMatch; /* SHORT_NAMED_BIT */
export const ServiceControlOptions_noSubtypeSelection: number = 10; /* LONG_NAMED_BIT */
export const noSubtypeSelection: number = ServiceControlOptions_noSubtypeSelection; /* SHORT_NAMED_BIT */
export const ServiceControlOptions_countFamily: number = 11; /* LONG_NAMED_BIT */
export const countFamily: number = ServiceControlOptions_countFamily; /* SHORT_NAMED_BIT */
export const ServiceControlOptions_dontSelectFriends: number = 12; /* LONG_NAMED_BIT */
export const dontSelectFriends: number = ServiceControlOptions_dontSelectFriends; /* SHORT_NAMED_BIT */
export const ServiceControlOptions_dontMatchFriends: number = 13; /* LONG_NAMED_BIT */
export const dontMatchFriends: number = ServiceControlOptions_dontMatchFriends; /* SHORT_NAMED_BIT */
export const ServiceControlOptions_allowWriteableCopy: number = 14; /* LONG_NAMED_BIT */
export const allowWriteableCopy: number = ServiceControlOptions_allowWriteableCopy; /* SHORT_NAMED_BIT */
let _cached_decoder_for_ServiceControlOptions: __utils.ASN1Decoder<
    ServiceControlOptions
> | null = null;
let _cached_encoder_for_ServiceControlOptions: __utils.ASN1Encoder<
    ServiceControlOptions
> | null = null;
export function _decode_ServiceControlOptions(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ServiceControlOptions) {
        _cached_decoder_for_ServiceControlOptions = __utils._decodeBitString;
    }
    return _cached_decoder_for_ServiceControlOptions(el);
}
export function _encode_ServiceControlOptions(
    value: ServiceControlOptions,
    elGetter: __utils.ASN1Encoder<ServiceControlOptions>
) {
    if (!_cached_encoder_for_ServiceControlOptions) {
        _cached_encoder_for_ServiceControlOptions = __utils._encodeBitString;
    }
    return _cached_encoder_for_ServiceControlOptions(value, elGetter);
}

export type ServiceControls_priority = asn1.INTEGER;
export const ServiceControls_priority_low: ServiceControls_priority = 0; /* LONG_NAMED_INTEGER_VALUE */
export const low: ServiceControls_priority = ServiceControls_priority_low; /* SHORT_NAMED_INTEGER_VALUE */
export const ServiceControls_priority_medium: ServiceControls_priority = 1; /* LONG_NAMED_INTEGER_VALUE */
export const medium: ServiceControls_priority = ServiceControls_priority_medium; /* SHORT_NAMED_INTEGER_VALUE */
export const ServiceControls_priority_high: ServiceControls_priority = 2; /* LONG_NAMED_INTEGER_VALUE */
export const high: ServiceControls_priority = ServiceControls_priority_high; /* SHORT_NAMED_INTEGER_VALUE */
let _cached_decoder_for_ServiceControls_priority: __utils.ASN1Decoder<
    ServiceControls_priority
> | null = null;
let _cached_encoder_for_ServiceControls_priority: __utils.ASN1Encoder<
    ServiceControls_priority
> | null = null;
export function _decode_ServiceControls_priority(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ServiceControls_priority) {
        _cached_decoder_for_ServiceControls_priority = __utils._decodeInteger;
    }
    return _cached_decoder_for_ServiceControls_priority(el);
}
export function _encode_ServiceControls_priority(
    value: ServiceControls_priority,
    elGetter: __utils.ASN1Encoder<ServiceControls_priority>
) {
    if (!_cached_encoder_for_ServiceControls_priority) {
        _cached_encoder_for_ServiceControls_priority = __utils._encodeInteger;
    }
    return _cached_encoder_for_ServiceControls_priority(value, elGetter);
}

export type ServiceControls_scopeOfReferral = asn1.INTEGER;
export const ServiceControls_scopeOfReferral_dmd: ServiceControls_scopeOfReferral = 0; /* LONG_NAMED_INTEGER_VALUE */
export const dmd: ServiceControls_scopeOfReferral = ServiceControls_scopeOfReferral_dmd; /* SHORT_NAMED_INTEGER_VALUE */
export const ServiceControls_scopeOfReferral_country: ServiceControls_scopeOfReferral = 1; /* LONG_NAMED_INTEGER_VALUE */
export const country: ServiceControls_scopeOfReferral = ServiceControls_scopeOfReferral_country; /* SHORT_NAMED_INTEGER_VALUE */
let _cached_decoder_for_ServiceControls_scopeOfReferral: __utils.ASN1Decoder<
    ServiceControls_scopeOfReferral
> | null = null;
let _cached_encoder_for_ServiceControls_scopeOfReferral: __utils.ASN1Encoder<
    ServiceControls_scopeOfReferral
> | null = null;
export function _decode_ServiceControls_scopeOfReferral(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ServiceControls_scopeOfReferral) {
        _cached_decoder_for_ServiceControls_scopeOfReferral =
            __utils._decodeInteger;
    }
    return _cached_decoder_for_ServiceControls_scopeOfReferral(el);
}
export function _encode_ServiceControls_scopeOfReferral(
    value: ServiceControls_scopeOfReferral,
    elGetter: __utils.ASN1Encoder<ServiceControls_scopeOfReferral>
) {
    if (!_cached_encoder_for_ServiceControls_scopeOfReferral) {
        _cached_encoder_for_ServiceControls_scopeOfReferral =
            __utils._encodeInteger;
    }
    return _cached_encoder_for_ServiceControls_scopeOfReferral(value, elGetter);
}

export class ServiceControls_manageDSAITPlaneRef {
    constructor(
        readonly dsaName: Name,
        readonly agreementID: AgreementID,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ServiceControls_manageDSAITPlaneRef: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "dsaName",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "agreementID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ServiceControls_manageDSAITPlaneRef: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ServiceControls_manageDSAITPlaneRef: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ServiceControls_manageDSAITPlaneRef: __utils.ASN1Decoder<
    ServiceControls_manageDSAITPlaneRef
> | null = null;
let _cached_encoder_for_ServiceControls_manageDSAITPlaneRef: __utils.ASN1Encoder<
    ServiceControls_manageDSAITPlaneRef
> | null = null;
export function _decode_ServiceControls_manageDSAITPlaneRef(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_ServiceControls_manageDSAITPlaneRef) {
        _cached_decoder_for_ServiceControls_manageDSAITPlaneRef = function (
            el: asn1.ASN1Element
        ): ServiceControls_manageDSAITPlaneRef {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "ServiceControls-manageDSAITPlaneRef contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "dsaName";
            sequence[1].name = "agreementID";
            let dsaName!: Name;
            let agreementID!: AgreementID;
            dsaName = _decode_Name(sequence[0]);
            agreementID = _decode_AgreementID(sequence[1]);
            // TODO: Validate values.
            return new ServiceControls_manageDSAITPlaneRef(
                dsaName,
                agreementID,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_ServiceControls_manageDSAITPlaneRef(el);
}
export function _encode_ServiceControls_manageDSAITPlaneRef(
    value: ServiceControls_manageDSAITPlaneRef,
    elGetter: __utils.ASN1Encoder<ServiceControls_manageDSAITPlaneRef>
) {
    if (!_cached_encoder_for_ServiceControls_manageDSAITPlaneRef) {
        _cached_encoder_for_ServiceControls_manageDSAITPlaneRef = function (
            value: ServiceControls_manageDSAITPlaneRef,
            elGetter: __utils.ASN1Encoder<ServiceControls_manageDSAITPlaneRef>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(
                                value.dsaName,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_AgreementID(
                                value.agreementID,
                                __utils.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ServiceControls_manageDSAITPlaneRef(
        value,
        elGetter
    );
}

export class ServiceControls {
    constructor(
        readonly options: ServiceControlOptions | undefined,
        readonly priority: ServiceControls_priority | undefined,
        readonly timeLimit: asn1.INTEGER | undefined,
        readonly sizeLimit: asn1.INTEGER | undefined,
        readonly scopeOfReferral: ServiceControls_scopeOfReferral | undefined,
        readonly attributeSizeLimit: asn1.INTEGER | undefined,
        readonly manageDSAITPlaneRef:
            | ServiceControls_manageDSAITPlaneRef
            | undefined,
        readonly serviceType: asn1.OBJECT_IDENTIFIER | undefined,
        readonly userClass: asn1.INTEGER | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_options() {
        return new Uint8ClampedArray(0);
    }
    public static get _default_value_for_priority() {
        return medium;
    }
}
export const _root_component_type_list_1_spec_for_ServiceControls: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "options",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "priority",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "timeLimit",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sizeLimit",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "scopeOfReferral",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributeSizeLimit",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "manageDSAITPlaneRef",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serviceType",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "userClass",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 8),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ServiceControls: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ServiceControls: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ServiceControls: __utils.ASN1Decoder<
    ServiceControls
> | null = null;
let _cached_encoder_for_ServiceControls: __utils.ASN1Encoder<
    ServiceControls
> | null = null;
export function _decode_ServiceControls(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ServiceControls) {
        _cached_decoder_for_ServiceControls = function (
            el: asn1.ASN1Element
        ): ServiceControls {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let options: asn1.OPTIONAL<ServiceControlOptions> =
                ServiceControls._default_value_for_options;
            let priority: asn1.OPTIONAL<ServiceControls_priority> =
                ServiceControls._default_value_for_priority;
            let timeLimit: asn1.OPTIONAL<asn1.INTEGER>;
            let sizeLimit: asn1.OPTIONAL<asn1.INTEGER>;
            let scopeOfReferral: asn1.OPTIONAL<ServiceControls_scopeOfReferral>;
            let attributeSizeLimit: asn1.OPTIONAL<asn1.INTEGER>;
            let manageDSAITPlaneRef: asn1.OPTIONAL<ServiceControls_manageDSAITPlaneRef>;
            let serviceType: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
            let userClass: asn1.OPTIONAL<asn1.INTEGER>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                options: (_el: asn1.ASN1Element): void => {
                    options = __utils._decode_explicit<ServiceControlOptions>(
                        () => _decode_ServiceControlOptions
                    )(_el);
                },
                priority: (_el: asn1.ASN1Element): void => {
                    priority = __utils._decode_explicit<
                        ServiceControls_priority
                    >(() => _decode_ServiceControls_priority)(_el);
                },
                timeLimit: (_el: asn1.ASN1Element): void => {
                    timeLimit = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                sizeLimit: (_el: asn1.ASN1Element): void => {
                    sizeLimit = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                scopeOfReferral: (_el: asn1.ASN1Element): void => {
                    scopeOfReferral = __utils._decode_explicit<
                        ServiceControls_scopeOfReferral
                    >(() => _decode_ServiceControls_scopeOfReferral)(_el);
                },
                attributeSizeLimit: (_el: asn1.ASN1Element): void => {
                    attributeSizeLimit = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                manageDSAITPlaneRef: (_el: asn1.ASN1Element): void => {
                    manageDSAITPlaneRef = __utils._decode_explicit<
                        ServiceControls_manageDSAITPlaneRef
                    >(() => _decode_ServiceControls_manageDSAITPlaneRef)(_el);
                },
                serviceType: (_el: asn1.ASN1Element): void => {
                    serviceType = __utils._decode_explicit<
                        asn1.OBJECT_IDENTIFIER
                    >(() => __utils._decodeObjectIdentifier)(_el);
                },
                userClass: (_el: asn1.ASN1Element): void => {
                    userClass = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ServiceControls,
                _extension_additions_list_spec_for_ServiceControls,
                _root_component_type_list_2_spec_for_ServiceControls,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ServiceControls(
                /* SET_CONSTRUCTOR_CALL */ options,
                priority,
                timeLimit,
                sizeLimit,
                scopeOfReferral,
                attributeSizeLimit,
                manageDSAITPlaneRef,
                serviceType,
                userClass,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ServiceControls(el);
}
export function _encode_ServiceControls(
    value: ServiceControls,
    elGetter: __utils.ASN1Encoder<ServiceControls>
) {
    if (!_cached_encoder_for_ServiceControls) {
        _cached_encoder_for_ServiceControls = function (
            value: ServiceControls,
            elGetter: __utils.ASN1Encoder<ServiceControls>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.options === undefined ||
                            __utils.deepEq(
                                value.options,
                                ServiceControls._default_value_for_options
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_ServiceControlOptions,
                                      __utils.BER
                                  )(value.options, __utils.BER),
                            /* IF_DEFAULT */ value.priority === undefined ||
                            __utils.deepEq(
                                value.priority,
                                ServiceControls._default_value_for_priority
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_ServiceControls_priority,
                                      __utils.BER
                                  )(value.priority, __utils.BER),
                            /* IF_ABSENT  */ value.timeLimit === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.timeLimit, __utils.BER),
                            /* IF_ABSENT  */ value.sizeLimit === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.sizeLimit, __utils.BER),
                            /* IF_ABSENT  */ value.scopeOfReferral === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      4,
                                      () =>
                                          _encode_ServiceControls_scopeOfReferral,
                                      __utils.BER
                                  )(value.scopeOfReferral, __utils.BER),
                            /* IF_ABSENT  */ value.attributeSizeLimit ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      5,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.attributeSizeLimit, __utils.BER),
                            /* IF_ABSENT  */ value.manageDSAITPlaneRef ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      6,
                                      () =>
                                          _encode_ServiceControls_manageDSAITPlaneRef,
                                      __utils.BER
                                  )(value.manageDSAITPlaneRef, __utils.BER),
                            /* IF_ABSENT  */ value.serviceType === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      7,
                                      () => __utils._encodeObjectIdentifier,
                                      __utils.BER
                                  )(value.serviceType, __utils.BER),
                            /* IF_ABSENT  */ value.userClass === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      8,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.userClass, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ServiceControls(value, elGetter);
}

export type ProtectionRequest = asn1.INTEGER;
export const ProtectionRequest_none: ProtectionRequest = 0; /* LONG_NAMED_INTEGER_VALUE */
export const none: ProtectionRequest = ProtectionRequest_none; /* SHORT_NAMED_INTEGER_VALUE */
export const ProtectionRequest_signed: ProtectionRequest = 1; /* LONG_NAMED_INTEGER_VALUE */
export const signed: ProtectionRequest = ProtectionRequest_signed; /* SHORT_NAMED_INTEGER_VALUE */
let _cached_decoder_for_ProtectionRequest: __utils.ASN1Decoder<
    ProtectionRequest
> | null = null;
let _cached_encoder_for_ProtectionRequest: __utils.ASN1Encoder<
    ProtectionRequest
> | null = null;
export function _decode_ProtectionRequest(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ProtectionRequest) {
        _cached_decoder_for_ProtectionRequest = __utils._decodeInteger;
    }
    return _cached_decoder_for_ProtectionRequest(el);
}
export function _encode_ProtectionRequest(
    value: ProtectionRequest,
    elGetter: __utils.ASN1Encoder<ProtectionRequest>
) {
    if (!_cached_encoder_for_ProtectionRequest) {
        _cached_encoder_for_ProtectionRequest = __utils._encodeInteger;
    }
    return _cached_encoder_for_ProtectionRequest(value, elGetter);
}

export type ErrorProtectionRequest = asn1.INTEGER;
export const ErrorProtectionRequest_none: ErrorProtectionRequest = 0; /* LONG_NAMED_INTEGER_VALUE */
export const ErrorProtectionRequest_signed: ErrorProtectionRequest = 1; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_ErrorProtectionRequest: __utils.ASN1Decoder<
    ErrorProtectionRequest
> | null = null;
let _cached_encoder_for_ErrorProtectionRequest: __utils.ASN1Encoder<
    ErrorProtectionRequest
> | null = null;
export function _decode_ErrorProtectionRequest(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ErrorProtectionRequest) {
        _cached_decoder_for_ErrorProtectionRequest = __utils._decodeInteger;
    }
    return _cached_decoder_for_ErrorProtectionRequest(el);
}
export function _encode_ErrorProtectionRequest(
    value: ErrorProtectionRequest,
    elGetter: __utils.ASN1Encoder<ErrorProtectionRequest>
) {
    if (!_cached_encoder_for_ErrorProtectionRequest) {
        _cached_encoder_for_ErrorProtectionRequest = __utils._encodeInteger;
    }
    return _cached_encoder_for_ErrorProtectionRequest(value, elGetter);
}

export class SecurityParameters {
    constructor(
        readonly certification_path: CertificationPath | undefined,
        readonly name: DistinguishedName | undefined,
        readonly time: Time | undefined,
        readonly random: asn1.BIT_STRING | undefined,
        readonly target: ProtectionRequest | undefined,
        readonly operationCode: Code | undefined,
        readonly errorProtection: ErrorProtectionRequest | undefined,
        readonly errorCode: Code | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_SecurityParameters: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "certification-path",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "time",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "random",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "target",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationCode",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "errorProtection",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 8),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "errorCode",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 9),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SecurityParameters: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SecurityParameters: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SecurityParameters: __utils.ASN1Decoder<
    SecurityParameters
> | null = null;
let _cached_encoder_for_SecurityParameters: __utils.ASN1Encoder<
    SecurityParameters
> | null = null;
export function _decode_SecurityParameters(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityParameters) {
        _cached_decoder_for_SecurityParameters = function (
            el: asn1.ASN1Element
        ): SecurityParameters {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let certification_path: asn1.OPTIONAL<CertificationPath>;
            let name: asn1.OPTIONAL<DistinguishedName>;
            let time: asn1.OPTIONAL<Time>;
            let random: asn1.OPTIONAL<asn1.BIT_STRING>;
            let target: asn1.OPTIONAL<ProtectionRequest>;
            let operationCode: asn1.OPTIONAL<Code>;
            let errorProtection: asn1.OPTIONAL<ErrorProtectionRequest>;
            let errorCode: asn1.OPTIONAL<Code>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "certification-path": (_el: asn1.ASN1Element): void => {
                    certification_path = __utils._decode_explicit<
                        CertificationPath
                    >(() => _decode_CertificationPath)(_el);
                },
                name: (_el: asn1.ASN1Element): void => {
                    name = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                time: (_el: asn1.ASN1Element): void => {
                    time = __utils._decode_explicit<Time>(() => _decode_Time)(
                        _el
                    );
                },
                random: (_el: asn1.ASN1Element): void => {
                    random = __utils._decode_explicit<asn1.BIT_STRING>(
                        () => __utils._decodeBitString
                    )(_el);
                },
                target: (_el: asn1.ASN1Element): void => {
                    target = __utils._decode_explicit<ProtectionRequest>(
                        () => _decode_ProtectionRequest
                    )(_el);
                },
                operationCode: (_el: asn1.ASN1Element): void => {
                    operationCode = __utils._decode_explicit<Code>(
                        () => _decode_Code
                    )(_el);
                },
                errorProtection: (_el: asn1.ASN1Element): void => {
                    errorProtection = __utils._decode_explicit<
                        ErrorProtectionRequest
                    >(() => _decode_ErrorProtectionRequest)(_el);
                },
                errorCode: (_el: asn1.ASN1Element): void => {
                    errorCode = __utils._decode_explicit<Code>(
                        () => _decode_Code
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SecurityParameters,
                _extension_additions_list_spec_for_SecurityParameters,
                _root_component_type_list_2_spec_for_SecurityParameters,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SecurityParameters(
                /* SET_CONSTRUCTOR_CALL */ certification_path,
                name,
                time,
                random,
                target,
                operationCode,
                errorProtection,
                errorCode,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SecurityParameters(el);
}
export function _encode_SecurityParameters(
    value: SecurityParameters,
    elGetter: __utils.ASN1Encoder<SecurityParameters>
) {
    if (!_cached_encoder_for_SecurityParameters) {
        _cached_encoder_for_SecurityParameters = function (
            value: SecurityParameters,
            elGetter: __utils.ASN1Encoder<SecurityParameters>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.certification_path ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_CertificationPath,
                                      __utils.BER
                                  )(value.certification_path, __utils.BER),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.name, __utils.BER),
                            /* IF_ABSENT  */ value.time === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_Time,
                                      __utils.BER
                                  )(value.time, __utils.BER),
                            /* IF_ABSENT  */ value.random === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () => __utils._encodeBitString,
                                      __utils.BER
                                  )(value.random, __utils.BER),
                            /* IF_ABSENT  */ value.target === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      4,
                                      () => _encode_ProtectionRequest,
                                      __utils.BER
                                  )(value.target, __utils.BER),
                            /* IF_ABSENT  */ value.operationCode === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      6,
                                      () => _encode_Code,
                                      __utils.BER
                                  )(value.operationCode, __utils.BER),
                            /* IF_ABSENT  */ value.errorProtection === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      8,
                                      () => _encode_ErrorProtectionRequest,
                                      __utils.BER
                                  )(value.errorProtection, __utils.BER),
                            /* IF_ABSENT  */ value.errorCode === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      9,
                                      () => _encode_Code,
                                      __utils.BER
                                  )(value.errorCode, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SecurityParameters(value, elGetter);
}

export type FamilyGrouping = asn1.ENUMERATED;
export const FamilyGrouping_entryOnly: FamilyGrouping = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const FamilyGrouping_compoundEntry: FamilyGrouping = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const FamilyGrouping_strands: FamilyGrouping = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const FamilyGrouping_multiStrand: FamilyGrouping = 4; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_FamilyGrouping: __utils.ASN1Decoder<
    FamilyGrouping
> | null = null;
let _cached_encoder_for_FamilyGrouping: __utils.ASN1Encoder<
    FamilyGrouping
> | null = null;
export function _decode_FamilyGrouping(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_FamilyGrouping) {
        _cached_decoder_for_FamilyGrouping = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_FamilyGrouping(el);
}
export function _encode_FamilyGrouping(
    value: FamilyGrouping,
    elGetter: __utils.ASN1Encoder<FamilyGrouping>
) {
    if (!_cached_encoder_for_FamilyGrouping) {
        _cached_encoder_for_FamilyGrouping = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_FamilyGrouping(value, elGetter);
}

export class CommonArguments {
    constructor(
        readonly serviceControls: ServiceControls | undefined,
        readonly securityParameters: SecurityParameters | undefined,
        readonly requestor: DistinguishedName | undefined,
        readonly operationProgress: OperationProgress | undefined,
        readonly aliasedRDNs: asn1.INTEGER | undefined,
        readonly criticalExtensions: asn1.BIT_STRING | undefined,
        readonly referenceType: ReferenceType | undefined,
        readonly entryOnly: asn1.BOOLEAN | undefined,
        readonly exclusions: Exclusions | undefined,
        readonly nameResolveOnMaster: asn1.BOOLEAN | undefined,
        readonly operationContexts: ContextSelection | undefined,
        readonly familyGrouping: FamilyGrouping | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_serviceControls() {
        return new ServiceControls(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        );
    }
    public static get _default_value_for_operationProgress() {
        return new OperationProgress(
            DistributedOperations.OperationProgress_nameResolutionPhase_notStarted,
            undefined
        );
    }
    public static get _default_value_for_entryOnly() {
        return true;
    }
    public static get _default_value_for_nameResolveOnMaster() {
        return false;
    }
    public static get _default_value_for_familyGrouping() {
        return FamilyGrouping_entryOnly;
    }
}
export const _root_component_type_list_1_spec_for_CommonArguments: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "serviceControls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "requestor",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationProgress",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasedRDNs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 26),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "criticalExtensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 25),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "referenceType",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entryOnly",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 23),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "exclusions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 22),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nameResolveOnMaster",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 21),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationContexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 20),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "familyGrouping",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 19),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CommonArguments: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CommonArguments: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CommonArguments: __utils.ASN1Decoder<
    CommonArguments
> | null = null;
let _cached_encoder_for_CommonArguments: __utils.ASN1Encoder<
    CommonArguments
> | null = null;
export function _decode_CommonArguments(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CommonArguments) {
        _cached_decoder_for_CommonArguments = function (
            el: asn1.ASN1Element
        ): CommonArguments {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let serviceControls: asn1.OPTIONAL<ServiceControls> =
                CommonArguments._default_value_for_serviceControls;
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let requestor: asn1.OPTIONAL<DistinguishedName>;
            let operationProgress: asn1.OPTIONAL<OperationProgress> =
                CommonArguments._default_value_for_operationProgress;
            let aliasedRDNs: asn1.OPTIONAL<asn1.INTEGER>;
            let criticalExtensions: asn1.OPTIONAL<asn1.BIT_STRING>;
            let referenceType: asn1.OPTIONAL<ReferenceType>;
            let entryOnly: asn1.OPTIONAL<asn1.BOOLEAN> =
                CommonArguments._default_value_for_entryOnly;
            let exclusions: asn1.OPTIONAL<Exclusions>;
            let nameResolveOnMaster: asn1.OPTIONAL<asn1.BOOLEAN> =
                CommonArguments._default_value_for_nameResolveOnMaster;
            let operationContexts: asn1.OPTIONAL<ContextSelection>;
            let familyGrouping: asn1.OPTIONAL<FamilyGrouping> =
                CommonArguments._default_value_for_familyGrouping;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                serviceControls: (_el: asn1.ASN1Element): void => {
                    serviceControls = __utils._decode_explicit<ServiceControls>(
                        () => _decode_ServiceControls
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                requestor: (_el: asn1.ASN1Element): void => {
                    requestor = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                operationProgress: (_el: asn1.ASN1Element): void => {
                    operationProgress = __utils._decode_explicit<
                        OperationProgress
                    >(() => _decode_OperationProgress)(_el);
                },
                aliasedRDNs: (_el: asn1.ASN1Element): void => {
                    aliasedRDNs = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                criticalExtensions: (_el: asn1.ASN1Element): void => {
                    criticalExtensions = __utils._decode_explicit<
                        asn1.BIT_STRING
                    >(() => __utils._decodeBitString)(_el);
                },
                referenceType: (_el: asn1.ASN1Element): void => {
                    referenceType = __utils._decode_explicit<ReferenceType>(
                        () => _decode_ReferenceType
                    )(_el);
                },
                entryOnly: (_el: asn1.ASN1Element): void => {
                    entryOnly = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                exclusions: (_el: asn1.ASN1Element): void => {
                    exclusions = __utils._decode_explicit<Exclusions>(
                        () => _decode_Exclusions
                    )(_el);
                },
                nameResolveOnMaster: (_el: asn1.ASN1Element): void => {
                    nameResolveOnMaster = __utils._decode_explicit<
                        asn1.BOOLEAN
                    >(() => __utils._decodeBoolean)(_el);
                },
                operationContexts: (_el: asn1.ASN1Element): void => {
                    operationContexts = __utils._decode_explicit<
                        ContextSelection
                    >(() => _decode_ContextSelection)(_el);
                },
                familyGrouping: (_el: asn1.ASN1Element): void => {
                    familyGrouping = __utils._decode_explicit<FamilyGrouping>(
                        () => _decode_FamilyGrouping
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CommonArguments,
                _extension_additions_list_spec_for_CommonArguments,
                _root_component_type_list_2_spec_for_CommonArguments,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CommonArguments(
                /* SET_CONSTRUCTOR_CALL */ serviceControls,
                securityParameters,
                requestor,
                operationProgress,
                aliasedRDNs,
                criticalExtensions,
                referenceType,
                entryOnly,
                exclusions,
                nameResolveOnMaster,
                operationContexts,
                familyGrouping,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CommonArguments(el);
}
export function _encode_CommonArguments(
    value: CommonArguments,
    elGetter: __utils.ASN1Encoder<CommonArguments>
) {
    if (!_cached_encoder_for_CommonArguments) {
        _cached_encoder_for_CommonArguments = function (
            value: CommonArguments,
            elGetter: __utils.ASN1Encoder<CommonArguments>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            __utils.deepEq(
                                value.serviceControls,
                                CommonArguments._default_value_for_serviceControls
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_ServiceControls,
                                      __utils.BER
                                  )(value.serviceControls, __utils.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.requestor === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.requestor, __utils.BER),
                            /* IF_DEFAULT */ value.operationProgress ===
                                undefined ||
                            __utils.deepEq(
                                value.operationProgress,
                                CommonArguments._default_value_for_operationProgress
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () => _encode_OperationProgress,
                                      __utils.BER
                                  )(value.operationProgress, __utils.BER),
                            /* IF_ABSENT  */ value.aliasedRDNs === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      26,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.aliasedRDNs, __utils.BER),
                            /* IF_ABSENT  */ value.criticalExtensions ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      25,
                                      () => __utils._encodeBitString,
                                      __utils.BER
                                  )(value.criticalExtensions, __utils.BER),
                            /* IF_ABSENT  */ value.referenceType === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      24,
                                      () => _encode_ReferenceType,
                                      __utils.BER
                                  )(value.referenceType, __utils.BER),
                            /* IF_DEFAULT */ value.entryOnly === undefined ||
                            __utils.deepEq(
                                value.entryOnly,
                                CommonArguments._default_value_for_entryOnly
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      23,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.entryOnly, __utils.BER),
                            /* IF_ABSENT  */ value.exclusions === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      22,
                                      () => _encode_Exclusions,
                                      __utils.BER
                                  )(value.exclusions, __utils.BER),
                            /* IF_DEFAULT */ value.nameResolveOnMaster ===
                                undefined ||
                            __utils.deepEq(
                                value.nameResolveOnMaster,
                                CommonArguments._default_value_for_nameResolveOnMaster
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      21,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.nameResolveOnMaster, __utils.BER),
                            /* IF_ABSENT  */ value.operationContexts ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      20,
                                      () => _encode_ContextSelection,
                                      __utils.BER
                                  )(value.operationContexts, __utils.BER),
                            /* IF_DEFAULT */ value.familyGrouping ===
                                undefined ||
                            __utils.deepEq(
                                value.familyGrouping,
                                CommonArguments._default_value_for_familyGrouping
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      19,
                                      () => _encode_FamilyGrouping,
                                      __utils.BER
                                  )(value.familyGrouping, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_CommonArguments(value, elGetter);
}

export class ReadArgumentData {
    constructor(
        readonly object: Name,
        readonly selection: EntryInformationSelection | undefined,
        readonly modifyRightsRequest: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly serviceControls:
            | ServiceControls
            | undefined /* REPLICATED_COMPONENT */,
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly requestor:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationProgress:
            | OperationProgress
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasedRDNs:
            | asn1.INTEGER
            | undefined /* REPLICATED_COMPONENT */,
        readonly criticalExtensions:
            | asn1.BIT_STRING
            | undefined /* REPLICATED_COMPONENT */,
        readonly referenceType:
            | ReferenceType
            | undefined /* REPLICATED_COMPONENT */,
        readonly entryOnly: asn1.BOOLEAN | undefined /* REPLICATED_COMPONENT */,
        readonly exclusions: Exclusions | undefined /* REPLICATED_COMPONENT */,
        readonly nameResolveOnMaster:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationContexts:
            | ContextSelection
            | undefined /* REPLICATED_COMPONENT */,
        readonly familyGrouping:
            | FamilyGrouping
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_selection() {
        return new EntryInformationSelection(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        );
    }
    public static get _default_value_for_modifyRightsRequest() {
        return false;
    }
    public static get _default_value_for_serviceControls() {
        return new ServiceControls(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        );
    }
    public static get _default_value_for_operationProgress() {
        return new OperationProgress(
            DistributedOperations.OperationProgress_nameResolutionPhase_notStarted,
            undefined
        );
    }
    public static get _default_value_for_entryOnly() {
        return true;
    }
    public static get _default_value_for_nameResolveOnMaster() {
        return false;
    }
    public static get _default_value_for_familyGrouping() {
        return FamilyGrouping_entryOnly;
    }
}
export const _root_component_type_list_1_spec_for_ReadArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "object",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "selection",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "modifyRightsRequest",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ReadArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "serviceControls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "requestor",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationProgress",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasedRDNs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 26),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "criticalExtensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 25),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "referenceType",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entryOnly",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 23),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "exclusions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 22),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nameResolveOnMaster",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 21),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationContexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 20),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "familyGrouping",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 19),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_ReadArgumentData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ReadArgumentData: __utils.ASN1Decoder<
    ReadArgumentData
> | null = null;
let _cached_encoder_for_ReadArgumentData: __utils.ASN1Encoder<
    ReadArgumentData
> | null = null;
export function _decode_ReadArgumentData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReadArgumentData) {
        _cached_decoder_for_ReadArgumentData = function (
            el: asn1.ASN1Element
        ): ReadArgumentData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let object!: Name;
            let selection: asn1.OPTIONAL<EntryInformationSelection> =
                ReadArgumentData._default_value_for_selection;
            let modifyRightsRequest: asn1.OPTIONAL<asn1.BOOLEAN> =
                ReadArgumentData._default_value_for_modifyRightsRequest;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let serviceControls: asn1.OPTIONAL<ServiceControls> =
                ReadArgumentData._default_value_for_serviceControls;
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let requestor: asn1.OPTIONAL<DistinguishedName>;
            let operationProgress: asn1.OPTIONAL<OperationProgress> =
                ReadArgumentData._default_value_for_operationProgress;
            let aliasedRDNs: asn1.OPTIONAL<asn1.INTEGER>;
            let criticalExtensions: asn1.OPTIONAL<asn1.BIT_STRING>;
            let referenceType: asn1.OPTIONAL<ReferenceType>;
            let entryOnly: asn1.OPTIONAL<asn1.BOOLEAN> =
                ReadArgumentData._default_value_for_entryOnly;
            let exclusions: asn1.OPTIONAL<Exclusions>;
            let nameResolveOnMaster: asn1.OPTIONAL<asn1.BOOLEAN> =
                ReadArgumentData._default_value_for_nameResolveOnMaster;
            let operationContexts: asn1.OPTIONAL<ContextSelection>;
            let familyGrouping: asn1.OPTIONAL<FamilyGrouping> =
                ReadArgumentData._default_value_for_familyGrouping;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                object: (_el: asn1.ASN1Element): void => {
                    object = __utils._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                selection: (_el: asn1.ASN1Element): void => {
                    selection = __utils._decode_explicit<
                        EntryInformationSelection
                    >(() => _decode_EntryInformationSelection)(_el);
                },
                modifyRightsRequest: (_el: asn1.ASN1Element): void => {
                    modifyRightsRequest = __utils._decode_explicit<
                        asn1.BOOLEAN
                    >(() => __utils._decodeBoolean)(_el);
                },
                serviceControls: (_el: asn1.ASN1Element): void => {
                    serviceControls = __utils._decode_explicit<ServiceControls>(
                        () => _decode_ServiceControls
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                requestor: (_el: asn1.ASN1Element): void => {
                    requestor = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                operationProgress: (_el: asn1.ASN1Element): void => {
                    operationProgress = __utils._decode_explicit<
                        OperationProgress
                    >(() => _decode_OperationProgress)(_el);
                },
                aliasedRDNs: (_el: asn1.ASN1Element): void => {
                    aliasedRDNs = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                criticalExtensions: (_el: asn1.ASN1Element): void => {
                    criticalExtensions = __utils._decode_explicit<
                        asn1.BIT_STRING
                    >(() => __utils._decodeBitString)(_el);
                },
                referenceType: (_el: asn1.ASN1Element): void => {
                    referenceType = __utils._decode_explicit<ReferenceType>(
                        () => _decode_ReferenceType
                    )(_el);
                },
                entryOnly: (_el: asn1.ASN1Element): void => {
                    entryOnly = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                exclusions: (_el: asn1.ASN1Element): void => {
                    exclusions = __utils._decode_explicit<Exclusions>(
                        () => _decode_Exclusions
                    )(_el);
                },
                nameResolveOnMaster: (_el: asn1.ASN1Element): void => {
                    nameResolveOnMaster = __utils._decode_explicit<
                        asn1.BOOLEAN
                    >(() => __utils._decodeBoolean)(_el);
                },
                operationContexts: (_el: asn1.ASN1Element): void => {
                    operationContexts = __utils._decode_explicit<
                        ContextSelection
                    >(() => _decode_ContextSelection)(_el);
                },
                familyGrouping: (_el: asn1.ASN1Element): void => {
                    familyGrouping = __utils._decode_explicit<FamilyGrouping>(
                        () => _decode_FamilyGrouping
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReadArgumentData,
                _extension_additions_list_spec_for_ReadArgumentData,
                _root_component_type_list_2_spec_for_ReadArgumentData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ReadArgumentData(
                /* SET_CONSTRUCTOR_CALL */ object,
                selection,
                modifyRightsRequest,
                _unrecognizedExtensionsList,
                serviceControls,
                securityParameters,
                requestor,
                operationProgress,
                aliasedRDNs,
                criticalExtensions,
                referenceType,
                entryOnly,
                exclusions,
                nameResolveOnMaster,
                operationContexts,
                familyGrouping
            );
        };
    }
    return _cached_decoder_for_ReadArgumentData(el);
}
export function _encode_ReadArgumentData(
    value: ReadArgumentData,
    elGetter: __utils.ASN1Encoder<ReadArgumentData>
) {
    if (!_cached_encoder_for_ReadArgumentData) {
        _cached_encoder_for_ReadArgumentData = function (
            value: ReadArgumentData,
            elGetter: __utils.ASN1Encoder<ReadArgumentData>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_Name,
                                __utils.BER
                            )(value.object, __utils.BER),
                            /* IF_DEFAULT */ value.selection === undefined ||
                            __utils.deepEq(
                                value.selection,
                                ReadArgumentData._default_value_for_selection
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_EntryInformationSelection,
                                      __utils.BER
                                  )(value.selection, __utils.BER),
                            /* IF_DEFAULT */ value.modifyRightsRequest ===
                                undefined ||
                            __utils.deepEq(
                                value.modifyRightsRequest,
                                ReadArgumentData._default_value_for_modifyRightsRequest
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.modifyRightsRequest, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            __utils.deepEq(
                                value.serviceControls,
                                ReadArgumentData._default_value_for_serviceControls
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_ServiceControls,
                                      __utils.BER
                                  )(value.serviceControls, __utils.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.requestor === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.requestor, __utils.BER),
                            /* IF_DEFAULT */ value.operationProgress ===
                                undefined ||
                            __utils.deepEq(
                                value.operationProgress,
                                ReadArgumentData._default_value_for_operationProgress
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () => _encode_OperationProgress,
                                      __utils.BER
                                  )(value.operationProgress, __utils.BER),
                            /* IF_ABSENT  */ value.aliasedRDNs === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      26,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.aliasedRDNs, __utils.BER),
                            /* IF_ABSENT  */ value.criticalExtensions ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      25,
                                      () => __utils._encodeBitString,
                                      __utils.BER
                                  )(value.criticalExtensions, __utils.BER),
                            /* IF_ABSENT  */ value.referenceType === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      24,
                                      () => _encode_ReferenceType,
                                      __utils.BER
                                  )(value.referenceType, __utils.BER),
                            /* IF_DEFAULT */ value.entryOnly === undefined ||
                            __utils.deepEq(
                                value.entryOnly,
                                ReadArgumentData._default_value_for_entryOnly
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      23,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.entryOnly, __utils.BER),
                            /* IF_ABSENT  */ value.exclusions === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      22,
                                      () => _encode_Exclusions,
                                      __utils.BER
                                  )(value.exclusions, __utils.BER),
                            /* IF_DEFAULT */ value.nameResolveOnMaster ===
                                undefined ||
                            __utils.deepEq(
                                value.nameResolveOnMaster,
                                ReadArgumentData._default_value_for_nameResolveOnMaster
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      21,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.nameResolveOnMaster, __utils.BER),
                            /* IF_ABSENT  */ value.operationContexts ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      20,
                                      () => _encode_ContextSelection,
                                      __utils.BER
                                  )(value.operationContexts, __utils.BER),
                            /* IF_DEFAULT */ value.familyGrouping ===
                                undefined ||
                            __utils.deepEq(
                                value.familyGrouping,
                                ReadArgumentData._default_value_for_familyGrouping
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      19,
                                      () => _encode_FamilyGrouping,
                                      __utils.BER
                                  )(value.familyGrouping, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ReadArgumentData(value, elGetter);
}

export type ReadArgument = OPTIONALLY_PROTECTED<ReadArgumentData>; // DefinedType
let _cached_decoder_for_ReadArgument: __utils.ASN1Decoder<
    ReadArgument
> | null = null;
let _cached_encoder_for_ReadArgument: __utils.ASN1Encoder<
    ReadArgument
> | null = null;
export function _decode_ReadArgument(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReadArgument) {
        _cached_decoder_for_ReadArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            ReadArgumentData
        >(_decode_ReadArgumentData);
    }
    return _cached_decoder_for_ReadArgument(el);
}
export function _encode_ReadArgument(
    value: ReadArgument,
    elGetter: __utils.ASN1Encoder<ReadArgument>
) {
    if (!_cached_encoder_for_ReadArgument) {
        _cached_encoder_for_ReadArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            ReadArgumentData
        >(_encode_ReadArgumentData);
    }
    return _cached_encoder_for_ReadArgument(value, elGetter);
}

export type EntryInformation_information_Item =
    | { attributeType: AttributeType } /* CHOICE_ALT_ROOT */
    | { attribute: Attribute } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_EntryInformation_information_Item: __utils.ASN1Decoder<
    EntryInformation_information_Item
> | null = null;
let _cached_encoder_for_EntryInformation_information_Item: __utils.ASN1Encoder<
    EntryInformation_information_Item
> | null = null;
export function _decode_EntryInformation_information_Item(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_EntryInformation_information_Item) {
        _cached_decoder_for_EntryInformation_information_Item = __utils._decode_extensible_choice<
            EntryInformation_information_Item
        >({
            "UNIVERSAL 6": ["attributeType", _decode_AttributeType],
            "UNIVERSAL 16": ["attribute", _decode_Attribute],
        });
    }
    return _cached_decoder_for_EntryInformation_information_Item(el);
}
export function _encode_EntryInformation_information_Item(
    value: EntryInformation_information_Item,
    elGetter: __utils.ASN1Encoder<EntryInformation_information_Item>
) {
    if (!_cached_encoder_for_EntryInformation_information_Item) {
        _cached_encoder_for_EntryInformation_information_Item = __utils._encode_choice<
            EntryInformation_information_Item
        >(
            {
                attributeType: _encode_AttributeType,
                attribute: _encode_Attribute,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_EntryInformation_information_Item(
        value,
        elGetter
    );
}

export class EntryInformation {
    constructor(
        readonly name: Name,
        readonly fromEntry: asn1.BOOLEAN | undefined,
        readonly information: EntryInformation_information_Item[] | undefined,
        readonly incompleteEntry: asn1.BOOLEAN | undefined,
        readonly partialName: asn1.BOOLEAN | undefined,
        readonly derivedEntry: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_fromEntry() {
        return true;
    }
    public static get _default_value_for_incompleteEntry() {
        return false;
    }
    public static get _default_value_for_partialName() {
        return false;
    }
    public static get _default_value_for_derivedEntry() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_EntryInformation: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "name",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "fromEntry",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "information",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "incompleteEntry",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "partialName",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "derivedEntry",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EntryInformation: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EntryInformation: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EntryInformation: __utils.ASN1Decoder<
    EntryInformation
> | null = null;
let _cached_encoder_for_EntryInformation: __utils.ASN1Encoder<
    EntryInformation
> | null = null;
export function _decode_EntryInformation(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EntryInformation) {
        _cached_decoder_for_EntryInformation = function (
            el: asn1.ASN1Element
        ): EntryInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let name!: Name;
            let fromEntry: asn1.OPTIONAL<asn1.BOOLEAN> =
                EntryInformation._default_value_for_fromEntry;
            let information: asn1.OPTIONAL<EntryInformation_information_Item[]>;
            let incompleteEntry: asn1.OPTIONAL<asn1.BOOLEAN> =
                EntryInformation._default_value_for_incompleteEntry;
            let partialName: asn1.OPTIONAL<asn1.BOOLEAN> =
                EntryInformation._default_value_for_partialName;
            let derivedEntry: asn1.OPTIONAL<asn1.BOOLEAN> =
                EntryInformation._default_value_for_derivedEntry;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                name: (_el: asn1.ASN1Element): void => {
                    name = _decode_Name(_el);
                },
                fromEntry: (_el: asn1.ASN1Element): void => {
                    fromEntry = __utils._decodeBoolean(_el);
                },
                information: (_el: asn1.ASN1Element): void => {
                    information = __utils._decodeSetOf<
                        EntryInformation_information_Item
                    >(() => _decode_EntryInformation_information_Item)(_el);
                },
                incompleteEntry: (_el: asn1.ASN1Element): void => {
                    incompleteEntry = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                partialName: (_el: asn1.ASN1Element): void => {
                    partialName = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                derivedEntry: (_el: asn1.ASN1Element): void => {
                    derivedEntry = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EntryInformation,
                _extension_additions_list_spec_for_EntryInformation,
                _root_component_type_list_2_spec_for_EntryInformation,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EntryInformation(
                /* SEQUENCE_CONSTRUCTOR_CALL */ name,
                fromEntry,
                information,
                incompleteEntry,
                partialName,
                derivedEntry,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_EntryInformation(el);
}
export function _encode_EntryInformation(
    value: EntryInformation,
    elGetter: __utils.ASN1Encoder<EntryInformation>
) {
    if (!_cached_encoder_for_EntryInformation) {
        _cached_encoder_for_EntryInformation = function (
            value: EntryInformation,
            elGetter: __utils.ASN1Encoder<EntryInformation>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(
                                value.name,
                                __utils.BER
                            ),
                            /* IF_DEFAULT */ value.fromEntry === undefined ||
                            __utils.deepEq(
                                value.fromEntry,
                                EntryInformation._default_value_for_fromEntry
                            )
                                ? undefined
                                : __utils._encodeBoolean(
                                      value.fromEntry,
                                      __utils.BER
                                  ),
                            /* IF_ABSENT  */ value.information === undefined
                                ? undefined
                                : __utils._encodeSetOf<
                                      EntryInformation_information_Item
                                  >(
                                      () =>
                                          _encode_EntryInformation_information_Item,
                                      __utils.BER
                                  )(value.information, __utils.BER),
                            /* IF_DEFAULT */ value.incompleteEntry ===
                                undefined ||
                            __utils.deepEq(
                                value.incompleteEntry,
                                EntryInformation._default_value_for_incompleteEntry
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.incompleteEntry, __utils.BER),
                            /* IF_DEFAULT */ value.partialName === undefined ||
                            __utils.deepEq(
                                value.partialName,
                                EntryInformation._default_value_for_partialName
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      4,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.partialName, __utils.BER),
                            /* IF_DEFAULT */ value.derivedEntry === undefined ||
                            __utils.deepEq(
                                value.derivedEntry,
                                EntryInformation._default_value_for_derivedEntry
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      5,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.derivedEntry, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_EntryInformation(value, elGetter);
}

export type ModifyRights_Item_item =
    | { entry: asn1.NULL } /* CHOICE_ALT_ROOT */
    | { attribute: AttributeType } /* CHOICE_ALT_ROOT */
    | { value: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ModifyRights_Item_item: __utils.ASN1Decoder<
    ModifyRights_Item_item
> | null = null;
let _cached_encoder_for_ModifyRights_Item_item: __utils.ASN1Encoder<
    ModifyRights_Item_item
> | null = null;
export function _decode_ModifyRights_Item_item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ModifyRights_Item_item) {
        _cached_decoder_for_ModifyRights_Item_item = __utils._decode_extensible_choice<
            ModifyRights_Item_item
        >({
            "CONTEXT 0": [
                "entry",
                __utils._decode_explicit<asn1.NULL>(() => __utils._decodeNull),
            ],
            "CONTEXT 1": [
                "attribute",
                __utils._decode_explicit<AttributeType>(
                    () => _decode_AttributeType
                ),
            ],
            "CONTEXT 2": [
                "value",
                __utils._decode_explicit<AttributeValueAssertion>(
                    () => _decode_AttributeValueAssertion
                ),
            ],
        });
    }
    return _cached_decoder_for_ModifyRights_Item_item(el);
}
export function _encode_ModifyRights_Item_item(
    value: ModifyRights_Item_item,
    elGetter: __utils.ASN1Encoder<ModifyRights_Item_item>
) {
    if (!_cached_encoder_for_ModifyRights_Item_item) {
        _cached_encoder_for_ModifyRights_Item_item = __utils._encode_choice<
            ModifyRights_Item_item
        >(
            {
                entry: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeNull,
                    __utils.BER
                ),
                attribute: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_AttributeType,
                    __utils.BER
                ),
                value: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () => _encode_AttributeValueAssertion,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ModifyRights_Item_item(value, elGetter);
}

export type ModifyRights_Item_permission = asn1.BIT_STRING;
export const ModifyRights_Item_permission_add: number = 0; /* LONG_NAMED_BIT */
export const add: number = ModifyRights_Item_permission_add; /* SHORT_NAMED_BIT */
export const ModifyRights_Item_permission_remove: number = 1; /* LONG_NAMED_BIT */
export const remove: number = ModifyRights_Item_permission_remove; /* SHORT_NAMED_BIT */
export const ModifyRights_Item_permission_rename: number = 2; /* LONG_NAMED_BIT */
export const rename: number = ModifyRights_Item_permission_rename; /* SHORT_NAMED_BIT */
export const ModifyRights_Item_permission_move: number = 3; /* LONG_NAMED_BIT */
export const move: number = ModifyRights_Item_permission_move; /* SHORT_NAMED_BIT */
let _cached_decoder_for_ModifyRights_Item_permission: __utils.ASN1Decoder<
    ModifyRights_Item_permission
> | null = null;
let _cached_encoder_for_ModifyRights_Item_permission: __utils.ASN1Encoder<
    ModifyRights_Item_permission
> | null = null;
export function _decode_ModifyRights_Item_permission(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ModifyRights_Item_permission) {
        _cached_decoder_for_ModifyRights_Item_permission =
            __utils._decodeBitString;
    }
    return _cached_decoder_for_ModifyRights_Item_permission(el);
}
export function _encode_ModifyRights_Item_permission(
    value: ModifyRights_Item_permission,
    elGetter: __utils.ASN1Encoder<ModifyRights_Item_permission>
) {
    if (!_cached_encoder_for_ModifyRights_Item_permission) {
        _cached_encoder_for_ModifyRights_Item_permission =
            __utils._encodeBitString;
    }
    return _cached_encoder_for_ModifyRights_Item_permission(value, elGetter);
}

export class ModifyRights_Item {
    constructor(
        readonly item: ModifyRights_Item_item,
        readonly permission: ModifyRights_Item_permission,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ModifyRights_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "item",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "permission",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ModifyRights_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ModifyRights_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ModifyRights_Item: __utils.ASN1Decoder<
    ModifyRights_Item
> | null = null;
let _cached_encoder_for_ModifyRights_Item: __utils.ASN1Encoder<
    ModifyRights_Item
> | null = null;
export function _decode_ModifyRights_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ModifyRights_Item) {
        _cached_decoder_for_ModifyRights_Item = function (
            el: asn1.ASN1Element
        ): ModifyRights_Item {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "ModifyRights-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "item";
            sequence[1].name = "permission";
            let item!: ModifyRights_Item_item;
            let permission!: ModifyRights_Item_permission;
            item = _decode_ModifyRights_Item_item(sequence[0]);
            permission = __utils._decode_explicit<ModifyRights_Item_permission>(
                () => _decode_ModifyRights_Item_permission
            )(sequence[1]);
            // TODO: Validate values.
            return new ModifyRights_Item(item, permission, sequence.slice(2));
        };
    }
    return _cached_decoder_for_ModifyRights_Item(el);
}
export function _encode_ModifyRights_Item(
    value: ModifyRights_Item,
    elGetter: __utils.ASN1Encoder<ModifyRights_Item>
) {
    if (!_cached_encoder_for_ModifyRights_Item) {
        _cached_encoder_for_ModifyRights_Item = function (
            value: ModifyRights_Item,
            elGetter: __utils.ASN1Encoder<ModifyRights_Item>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_ModifyRights_Item_item(
                                value.item,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                3,
                                () => _encode_ModifyRights_Item_permission,
                                __utils.BER
                            )(value.permission, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ModifyRights_Item(value, elGetter);
}

export type ModifyRights = ModifyRights_Item[]; // SetOfType
let _cached_decoder_for_ModifyRights: __utils.ASN1Decoder<
    ModifyRights
> | null = null;
let _cached_encoder_for_ModifyRights: __utils.ASN1Encoder<
    ModifyRights
> | null = null;
export function _decode_ModifyRights(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ModifyRights) {
        _cached_decoder_for_ModifyRights = __utils._decodeSetOf<
            ModifyRights_Item
        >(() => _decode_ModifyRights_Item);
    }
    return _cached_decoder_for_ModifyRights(el);
}
export function _encode_ModifyRights(
    value: ModifyRights,
    elGetter: __utils.ASN1Encoder<ModifyRights>
) {
    if (!_cached_encoder_for_ModifyRights) {
        _cached_encoder_for_ModifyRights = __utils._encodeSetOf<
            ModifyRights_Item
        >(() => _encode_ModifyRights_Item, __utils.BER);
    }
    return _cached_encoder_for_ModifyRights(value, elGetter);
}

export class CommonResults {
    constructor(
        readonly securityParameters: SecurityParameters | undefined,
        readonly performer: DistinguishedName | undefined,
        readonly aliasDereferenced: asn1.BOOLEAN | undefined,
        readonly notification: Attribute[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_CommonResults: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CommonResults: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CommonResults: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CommonResults: __utils.ASN1Decoder<
    CommonResults
> | null = null;
let _cached_encoder_for_CommonResults: __utils.ASN1Encoder<
    CommonResults
> | null = null;
export function _decode_CommonResults(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CommonResults) {
        _cached_decoder_for_CommonResults = function (
            el: asn1.ASN1Element
        ): CommonResults {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                CommonResults._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CommonResults,
                _extension_additions_list_spec_for_CommonResults,
                _root_component_type_list_2_spec_for_CommonResults,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CommonResults(
                /* SET_CONSTRUCTOR_CALL */ securityParameters,
                performer,
                aliasDereferenced,
                notification,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CommonResults(el);
}
export function _encode_CommonResults(
    value: CommonResults,
    elGetter: __utils.ASN1Encoder<CommonResults>
) {
    if (!_cached_encoder_for_CommonResults) {
        _cached_encoder_for_CommonResults = function (
            value: CommonResults,
            elGetter: __utils.ASN1Encoder<CommonResults>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                CommonResults._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_CommonResults(value, elGetter);
}

export class ReadResultData {
    constructor(
        readonly entry: EntryInformation,
        readonly modifyRights: ModifyRights | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_ReadResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "entry",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "modifyRights",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ReadResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_ReadResultData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ReadResultData: __utils.ASN1Decoder<
    ReadResultData
> | null = null;
let _cached_encoder_for_ReadResultData: __utils.ASN1Encoder<
    ReadResultData
> | null = null;
export function _decode_ReadResultData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReadResultData) {
        _cached_decoder_for_ReadResultData = function (
            el: asn1.ASN1Element
        ): ReadResultData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let entry!: EntryInformation;
            let modifyRights: asn1.OPTIONAL<ModifyRights>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                ReadResultData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                entry: (_el: asn1.ASN1Element): void => {
                    entry = __utils._decode_explicit<EntryInformation>(
                        () => _decode_EntryInformation
                    )(_el);
                },
                modifyRights: (_el: asn1.ASN1Element): void => {
                    modifyRights = __utils._decode_explicit<ModifyRights>(
                        () => _decode_ModifyRights
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReadResultData,
                _extension_additions_list_spec_for_ReadResultData,
                _root_component_type_list_2_spec_for_ReadResultData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ReadResultData(
                /* SET_CONSTRUCTOR_CALL */ entry,
                modifyRights,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_ReadResultData(el);
}
export function _encode_ReadResultData(
    value: ReadResultData,
    elGetter: __utils.ASN1Encoder<ReadResultData>
) {
    if (!_cached_encoder_for_ReadResultData) {
        _cached_encoder_for_ReadResultData = function (
            value: ReadResultData,
            elGetter: __utils.ASN1Encoder<ReadResultData>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_EntryInformation,
                                __utils.BER
                            )(value.entry, __utils.BER),
                            /* IF_ABSENT  */ value.modifyRights === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_ModifyRights,
                                      __utils.BER
                                  )(value.modifyRights, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                ReadResultData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ReadResultData(value, elGetter);
}

export type ReadResult = OPTIONALLY_PROTECTED<ReadResultData>; // DefinedType
let _cached_decoder_for_ReadResult: __utils.ASN1Decoder<
    ReadResult
> | null = null;
let _cached_encoder_for_ReadResult: __utils.ASN1Encoder<
    ReadResult
> | null = null;
export function _decode_ReadResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReadResult) {
        _cached_decoder_for_ReadResult = _get_decoder_for_OPTIONALLY_PROTECTED<
            ReadResultData
        >(_decode_ReadResultData);
    }
    return _cached_decoder_for_ReadResult(el);
}
export function _encode_ReadResult(
    value: ReadResult,
    elGetter: __utils.ASN1Encoder<ReadResult>
) {
    if (!_cached_encoder_for_ReadResult) {
        _cached_encoder_for_ReadResult = _get_encoder_for_OPTIONALLY_PROTECTED<
            ReadResultData
        >(_encode_ReadResultData);
    }
    return _cached_encoder_for_ReadResult(value, elGetter);
}

// TODO: ObjectAssignment: compare

export class CompareArgumentData {
    constructor(
        readonly object: Name,
        readonly purported: AttributeValueAssertion,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly serviceControls:
            | ServiceControls
            | undefined /* REPLICATED_COMPONENT */,
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly requestor:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationProgress:
            | OperationProgress
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasedRDNs:
            | asn1.INTEGER
            | undefined /* REPLICATED_COMPONENT */,
        readonly criticalExtensions:
            | asn1.BIT_STRING
            | undefined /* REPLICATED_COMPONENT */,
        readonly referenceType:
            | ReferenceType
            | undefined /* REPLICATED_COMPONENT */,
        readonly entryOnly: asn1.BOOLEAN | undefined /* REPLICATED_COMPONENT */,
        readonly exclusions: Exclusions | undefined /* REPLICATED_COMPONENT */,
        readonly nameResolveOnMaster:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationContexts:
            | ContextSelection
            | undefined /* REPLICATED_COMPONENT */,
        readonly familyGrouping:
            | FamilyGrouping
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_serviceControls() {
        return new ServiceControls(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        );
    }
    public static get _default_value_for_operationProgress() {
        return new OperationProgress(
            DistributedOperations.OperationProgress_nameResolutionPhase_notStarted,
            undefined
        );
    }
    public static get _default_value_for_entryOnly() {
        return true;
    }
    public static get _default_value_for_nameResolveOnMaster() {
        return false;
    }
    public static get _default_value_for_familyGrouping() {
        return FamilyGrouping_entryOnly;
    }
}
export const _root_component_type_list_1_spec_for_CompareArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "object",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "purported",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CompareArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "serviceControls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "requestor",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationProgress",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasedRDNs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 26),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "criticalExtensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 25),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "referenceType",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entryOnly",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 23),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "exclusions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 22),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nameResolveOnMaster",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 21),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationContexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 20),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "familyGrouping",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 19),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_CompareArgumentData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CompareArgumentData: __utils.ASN1Decoder<
    CompareArgumentData
> | null = null;
let _cached_encoder_for_CompareArgumentData: __utils.ASN1Encoder<
    CompareArgumentData
> | null = null;
export function _decode_CompareArgumentData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CompareArgumentData) {
        _cached_decoder_for_CompareArgumentData = function (
            el: asn1.ASN1Element
        ): CompareArgumentData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let object!: Name;
            let purported!: AttributeValueAssertion;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let serviceControls: asn1.OPTIONAL<ServiceControls> =
                CompareArgumentData._default_value_for_serviceControls;
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let requestor: asn1.OPTIONAL<DistinguishedName>;
            let operationProgress: asn1.OPTIONAL<OperationProgress> =
                CompareArgumentData._default_value_for_operationProgress;
            let aliasedRDNs: asn1.OPTIONAL<asn1.INTEGER>;
            let criticalExtensions: asn1.OPTIONAL<asn1.BIT_STRING>;
            let referenceType: asn1.OPTIONAL<ReferenceType>;
            let entryOnly: asn1.OPTIONAL<asn1.BOOLEAN> =
                CompareArgumentData._default_value_for_entryOnly;
            let exclusions: asn1.OPTIONAL<Exclusions>;
            let nameResolveOnMaster: asn1.OPTIONAL<asn1.BOOLEAN> =
                CompareArgumentData._default_value_for_nameResolveOnMaster;
            let operationContexts: asn1.OPTIONAL<ContextSelection>;
            let familyGrouping: asn1.OPTIONAL<FamilyGrouping> =
                CompareArgumentData._default_value_for_familyGrouping;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                object: (_el: asn1.ASN1Element): void => {
                    object = __utils._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                purported: (_el: asn1.ASN1Element): void => {
                    purported = __utils._decode_explicit<
                        AttributeValueAssertion
                    >(() => _decode_AttributeValueAssertion)(_el);
                },
                serviceControls: (_el: asn1.ASN1Element): void => {
                    serviceControls = __utils._decode_explicit<ServiceControls>(
                        () => _decode_ServiceControls
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                requestor: (_el: asn1.ASN1Element): void => {
                    requestor = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                operationProgress: (_el: asn1.ASN1Element): void => {
                    operationProgress = __utils._decode_explicit<
                        OperationProgress
                    >(() => _decode_OperationProgress)(_el);
                },
                aliasedRDNs: (_el: asn1.ASN1Element): void => {
                    aliasedRDNs = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                criticalExtensions: (_el: asn1.ASN1Element): void => {
                    criticalExtensions = __utils._decode_explicit<
                        asn1.BIT_STRING
                    >(() => __utils._decodeBitString)(_el);
                },
                referenceType: (_el: asn1.ASN1Element): void => {
                    referenceType = __utils._decode_explicit<ReferenceType>(
                        () => _decode_ReferenceType
                    )(_el);
                },
                entryOnly: (_el: asn1.ASN1Element): void => {
                    entryOnly = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                exclusions: (_el: asn1.ASN1Element): void => {
                    exclusions = __utils._decode_explicit<Exclusions>(
                        () => _decode_Exclusions
                    )(_el);
                },
                nameResolveOnMaster: (_el: asn1.ASN1Element): void => {
                    nameResolveOnMaster = __utils._decode_explicit<
                        asn1.BOOLEAN
                    >(() => __utils._decodeBoolean)(_el);
                },
                operationContexts: (_el: asn1.ASN1Element): void => {
                    operationContexts = __utils._decode_explicit<
                        ContextSelection
                    >(() => _decode_ContextSelection)(_el);
                },
                familyGrouping: (_el: asn1.ASN1Element): void => {
                    familyGrouping = __utils._decode_explicit<FamilyGrouping>(
                        () => _decode_FamilyGrouping
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CompareArgumentData,
                _extension_additions_list_spec_for_CompareArgumentData,
                _root_component_type_list_2_spec_for_CompareArgumentData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CompareArgumentData(
                /* SET_CONSTRUCTOR_CALL */ object,
                purported,
                _unrecognizedExtensionsList,
                serviceControls,
                securityParameters,
                requestor,
                operationProgress,
                aliasedRDNs,
                criticalExtensions,
                referenceType,
                entryOnly,
                exclusions,
                nameResolveOnMaster,
                operationContexts,
                familyGrouping
            );
        };
    }
    return _cached_decoder_for_CompareArgumentData(el);
}
export function _encode_CompareArgumentData(
    value: CompareArgumentData,
    elGetter: __utils.ASN1Encoder<CompareArgumentData>
) {
    if (!_cached_encoder_for_CompareArgumentData) {
        _cached_encoder_for_CompareArgumentData = function (
            value: CompareArgumentData,
            elGetter: __utils.ASN1Encoder<CompareArgumentData>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_Name,
                                __utils.BER
                            )(value.object, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () => _encode_AttributeValueAssertion,
                                __utils.BER
                            )(value.purported, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            __utils.deepEq(
                                value.serviceControls,
                                CompareArgumentData._default_value_for_serviceControls
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_ServiceControls,
                                      __utils.BER
                                  )(value.serviceControls, __utils.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.requestor === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.requestor, __utils.BER),
                            /* IF_DEFAULT */ value.operationProgress ===
                                undefined ||
                            __utils.deepEq(
                                value.operationProgress,
                                CompareArgumentData._default_value_for_operationProgress
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () => _encode_OperationProgress,
                                      __utils.BER
                                  )(value.operationProgress, __utils.BER),
                            /* IF_ABSENT  */ value.aliasedRDNs === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      26,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.aliasedRDNs, __utils.BER),
                            /* IF_ABSENT  */ value.criticalExtensions ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      25,
                                      () => __utils._encodeBitString,
                                      __utils.BER
                                  )(value.criticalExtensions, __utils.BER),
                            /* IF_ABSENT  */ value.referenceType === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      24,
                                      () => _encode_ReferenceType,
                                      __utils.BER
                                  )(value.referenceType, __utils.BER),
                            /* IF_DEFAULT */ value.entryOnly === undefined ||
                            __utils.deepEq(
                                value.entryOnly,
                                CompareArgumentData._default_value_for_entryOnly
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      23,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.entryOnly, __utils.BER),
                            /* IF_ABSENT  */ value.exclusions === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      22,
                                      () => _encode_Exclusions,
                                      __utils.BER
                                  )(value.exclusions, __utils.BER),
                            /* IF_DEFAULT */ value.nameResolveOnMaster ===
                                undefined ||
                            __utils.deepEq(
                                value.nameResolveOnMaster,
                                CompareArgumentData._default_value_for_nameResolveOnMaster
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      21,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.nameResolveOnMaster, __utils.BER),
                            /* IF_ABSENT  */ value.operationContexts ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      20,
                                      () => _encode_ContextSelection,
                                      __utils.BER
                                  )(value.operationContexts, __utils.BER),
                            /* IF_DEFAULT */ value.familyGrouping ===
                                undefined ||
                            __utils.deepEq(
                                value.familyGrouping,
                                CompareArgumentData._default_value_for_familyGrouping
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      19,
                                      () => _encode_FamilyGrouping,
                                      __utils.BER
                                  )(value.familyGrouping, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_CompareArgumentData(value, elGetter);
}

export type CompareArgument = OPTIONALLY_PROTECTED<CompareArgumentData>; // DefinedType
let _cached_decoder_for_CompareArgument: __utils.ASN1Decoder<
    CompareArgument
> | null = null;
let _cached_encoder_for_CompareArgument: __utils.ASN1Encoder<
    CompareArgument
> | null = null;
export function _decode_CompareArgument(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CompareArgument) {
        _cached_decoder_for_CompareArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            CompareArgumentData
        >(_decode_CompareArgumentData);
    }
    return _cached_decoder_for_CompareArgument(el);
}
export function _encode_CompareArgument(
    value: CompareArgument,
    elGetter: __utils.ASN1Encoder<CompareArgument>
) {
    if (!_cached_encoder_for_CompareArgument) {
        _cached_encoder_for_CompareArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            CompareArgumentData
        >(_encode_CompareArgumentData);
    }
    return _cached_encoder_for_CompareArgument(value, elGetter);
}

export class CompareResultData {
    constructor(
        readonly name: Name | undefined,
        readonly matched: asn1.BOOLEAN,
        readonly fromEntry: asn1.BOOLEAN | undefined,
        readonly matchedSubtype: AttributeType | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_fromEntry() {
        return true;
    }
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_CompareResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "name",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "matched",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "fromEntry",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "matchedSubtype",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CompareResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_CompareResultData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CompareResultData: __utils.ASN1Decoder<
    CompareResultData
> | null = null;
let _cached_encoder_for_CompareResultData: __utils.ASN1Encoder<
    CompareResultData
> | null = null;
export function _decode_CompareResultData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CompareResultData) {
        _cached_decoder_for_CompareResultData = function (
            el: asn1.ASN1Element
        ): CompareResultData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let name: asn1.OPTIONAL<Name>;
            let matched!: asn1.BOOLEAN;
            let fromEntry: asn1.OPTIONAL<asn1.BOOLEAN> =
                CompareResultData._default_value_for_fromEntry;
            let matchedSubtype: asn1.OPTIONAL<AttributeType>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                CompareResultData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                name: (_el: asn1.ASN1Element): void => {
                    name = _decode_Name(_el);
                },
                matched: (_el: asn1.ASN1Element): void => {
                    matched = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                fromEntry: (_el: asn1.ASN1Element): void => {
                    fromEntry = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                matchedSubtype: (_el: asn1.ASN1Element): void => {
                    matchedSubtype = __utils._decode_explicit<AttributeType>(
                        () => _decode_AttributeType
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CompareResultData,
                _extension_additions_list_spec_for_CompareResultData,
                _root_component_type_list_2_spec_for_CompareResultData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CompareResultData(
                /* SET_CONSTRUCTOR_CALL */ name,
                matched,
                fromEntry,
                matchedSubtype,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_CompareResultData(el);
}
export function _encode_CompareResultData(
    value: CompareResultData,
    elGetter: __utils.ASN1Encoder<CompareResultData>
) {
    if (!_cached_encoder_for_CompareResultData) {
        _cached_encoder_for_CompareResultData = function (
            value: CompareResultData,
            elGetter: __utils.ASN1Encoder<CompareResultData>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : _encode_Name(value.name, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => __utils._encodeBoolean,
                                __utils.BER
                            )(value.matched, __utils.BER),
                            /* IF_DEFAULT */ value.fromEntry === undefined ||
                            __utils.deepEq(
                                value.fromEntry,
                                CompareResultData._default_value_for_fromEntry
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.fromEntry, __utils.BER),
                            /* IF_ABSENT  */ value.matchedSubtype === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_AttributeType,
                                      __utils.BER
                                  )(value.matchedSubtype, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                CompareResultData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_CompareResultData(value, elGetter);
}

export type CompareResult = OPTIONALLY_PROTECTED<CompareResultData>; // DefinedType
let _cached_decoder_for_CompareResult: __utils.ASN1Decoder<
    CompareResult
> | null = null;
let _cached_encoder_for_CompareResult: __utils.ASN1Encoder<
    CompareResult
> | null = null;
export function _decode_CompareResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CompareResult) {
        _cached_decoder_for_CompareResult = _get_decoder_for_OPTIONALLY_PROTECTED<
            CompareResultData
        >(_decode_CompareResultData);
    }
    return _cached_decoder_for_CompareResult(el);
}
export function _encode_CompareResult(
    value: CompareResult,
    elGetter: __utils.ASN1Encoder<CompareResult>
) {
    if (!_cached_encoder_for_CompareResult) {
        _cached_encoder_for_CompareResult = _get_encoder_for_OPTIONALLY_PROTECTED<
            CompareResultData
        >(_encode_CompareResultData);
    }
    return _cached_encoder_for_CompareResult(value, elGetter);
}

// TODO: ObjectAssignment: abandon

export class AbandonArgumentData {
    constructor(
        readonly invokeID: InvokeId,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AbandonArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "invokeID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AbandonArgumentData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AbandonArgumentData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AbandonArgumentData: __utils.ASN1Decoder<
    AbandonArgumentData
> | null = null;
let _cached_encoder_for_AbandonArgumentData: __utils.ASN1Encoder<
    AbandonArgumentData
> | null = null;
export function _decode_AbandonArgumentData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AbandonArgumentData) {
        _cached_decoder_for_AbandonArgumentData = function (
            el: asn1.ASN1Element
        ): AbandonArgumentData {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError(
                    "AbandonArgumentData contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "invokeID";
            let invokeID!: InvokeId;
            invokeID = __utils._decode_explicit<InvokeId>(
                () => _decode_InvokeId
            )(sequence[0]);
            // TODO: Validate values.
            return new AbandonArgumentData(invokeID, sequence.slice(1));
        };
    }
    return _cached_decoder_for_AbandonArgumentData(el);
}
export function _encode_AbandonArgumentData(
    value: AbandonArgumentData,
    elGetter: __utils.ASN1Encoder<AbandonArgumentData>
) {
    if (!_cached_encoder_for_AbandonArgumentData) {
        _cached_encoder_for_AbandonArgumentData = function (
            value: AbandonArgumentData,
            elGetter: __utils.ASN1Encoder<AbandonArgumentData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_InvokeId,
                                __utils.BER
                            )(value.invokeID, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AbandonArgumentData(value, elGetter);
}

export type AbandonArgument = OPTIONALLY_PROTECTED_SEQ<AbandonArgumentData>; // DefinedType
let _cached_decoder_for_AbandonArgument: __utils.ASN1Decoder<
    AbandonArgument
> | null = null;
let _cached_encoder_for_AbandonArgument: __utils.ASN1Encoder<
    AbandonArgument
> | null = null;
export function _decode_AbandonArgument(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AbandonArgument) {
        _cached_decoder_for_AbandonArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
            AbandonArgumentData
        >(_decode_AbandonArgumentData);
    }
    return _cached_decoder_for_AbandonArgument(el);
}
export function _encode_AbandonArgument(
    value: AbandonArgument,
    elGetter: __utils.ASN1Encoder<AbandonArgument>
) {
    if (!_cached_encoder_for_AbandonArgument) {
        _cached_encoder_for_AbandonArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
            AbandonArgumentData
        >(_encode_AbandonArgumentData);
    }
    return _cached_encoder_for_AbandonArgument(value, elGetter);
}

export class CommonResultsSeq {
    constructor(
        readonly securityParameters: SecurityParameters | undefined,
        readonly performer: DistinguishedName | undefined,
        readonly aliasDereferenced: asn1.BOOLEAN | undefined,
        readonly notification: Attribute[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_CommonResultsSeq: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CommonResultsSeq: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CommonResultsSeq: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CommonResultsSeq: __utils.ASN1Decoder<
    CommonResultsSeq
> | null = null;
let _cached_encoder_for_CommonResultsSeq: __utils.ASN1Encoder<
    CommonResultsSeq
> | null = null;
export function _decode_CommonResultsSeq(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CommonResultsSeq) {
        _cached_decoder_for_CommonResultsSeq = function (
            el: asn1.ASN1Element
        ): CommonResultsSeq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                CommonResultsSeq._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CommonResultsSeq,
                _extension_additions_list_spec_for_CommonResultsSeq,
                _root_component_type_list_2_spec_for_CommonResultsSeq,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CommonResultsSeq(
                /* SEQUENCE_CONSTRUCTOR_CALL */ securityParameters,
                performer,
                aliasDereferenced,
                notification,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CommonResultsSeq(el);
}
export function _encode_CommonResultsSeq(
    value: CommonResultsSeq,
    elGetter: __utils.ASN1Encoder<CommonResultsSeq>
) {
    if (!_cached_encoder_for_CommonResultsSeq) {
        _cached_encoder_for_CommonResultsSeq = function (
            value: CommonResultsSeq,
            elGetter: __utils.ASN1Encoder<CommonResultsSeq>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                CommonResultsSeq._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_CommonResultsSeq(value, elGetter);
}

export class AbandonResultData {
    constructor(
        readonly invokeID: InvokeId,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_AbandonResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "invokeID",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AbandonResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_AbandonResultData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AbandonResultData: __utils.ASN1Decoder<
    AbandonResultData
> | null = null;
let _cached_encoder_for_AbandonResultData: __utils.ASN1Encoder<
    AbandonResultData
> | null = null;
export function _decode_AbandonResultData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AbandonResultData) {
        _cached_decoder_for_AbandonResultData = function (
            el: asn1.ASN1Element
        ): AbandonResultData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let invokeID!: InvokeId;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                AbandonResultData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                invokeID: (_el: asn1.ASN1Element): void => {
                    invokeID = _decode_InvokeId(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AbandonResultData,
                _extension_additions_list_spec_for_AbandonResultData,
                _root_component_type_list_2_spec_for_AbandonResultData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AbandonResultData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ invokeID,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_AbandonResultData(el);
}
export function _encode_AbandonResultData(
    value: AbandonResultData,
    elGetter: __utils.ASN1Encoder<AbandonResultData>
) {
    if (!_cached_encoder_for_AbandonResultData) {
        _cached_encoder_for_AbandonResultData = function (
            value: AbandonResultData,
            elGetter: __utils.ASN1Encoder<AbandonResultData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeId(
                                value.invokeID,
                                __utils.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                AbandonResultData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AbandonResultData(value, elGetter);
}

export type AbandonResult =
    | { null_: asn1.NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED_SEQ<AbandonResultData>;
      } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_AbandonResult: __utils.ASN1Decoder<
    AbandonResult
> | null = null;
let _cached_encoder_for_AbandonResult: __utils.ASN1Encoder<
    AbandonResult
> | null = null;
export function _decode_AbandonResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AbandonResult) {
        _cached_decoder_for_AbandonResult = __utils._decode_extensible_choice<
            AbandonResult
        >({
            "UNIVERSAL 5": ["null_", __utils._decodeNull],
            "UNIVERSAL 16": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<AbandonResultData>(
                    _decode_AbandonResultData
                ),
            ],
            "CONTEXT 0": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<AbandonResultData>(
                    _decode_AbandonResultData
                ),
            ],
        });
    }
    return _cached_decoder_for_AbandonResult(el);
}
export function _encode_AbandonResult(
    value: AbandonResult,
    elGetter: __utils.ASN1Encoder<AbandonResult>
) {
    if (!_cached_encoder_for_AbandonResult) {
        _cached_encoder_for_AbandonResult = __utils._encode_choice<
            AbandonResult
        >(
            {
                null_: __utils._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
                    AbandonResultData
                >(_encode_AbandonResultData),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_AbandonResult(value, elGetter);
}

// TODO: ObjectAssignment: list

export class SortKey {
    constructor(
        readonly type_: AttributeType,
        readonly orderingRule: asn1.OBJECT_IDENTIFIER | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_SortKey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "orderingRule",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SortKey: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SortKey: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SortKey: __utils.ASN1Decoder<SortKey> | null = null;
let _cached_encoder_for_SortKey: __utils.ASN1Encoder<SortKey> | null = null;
export function _decode_SortKey(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SortKey) {
        _cached_decoder_for_SortKey = function (el: asn1.ASN1Element): SortKey {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let type_!: AttributeType;
            let orderingRule: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                type: (_el: asn1.ASN1Element): void => {
                    type_ = _decode_AttributeType(_el);
                },
                orderingRule: (_el: asn1.ASN1Element): void => {
                    orderingRule = __utils._decodeObjectIdentifier(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SortKey,
                _extension_additions_list_spec_for_SortKey,
                _root_component_type_list_2_spec_for_SortKey,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SortKey(
                /* SEQUENCE_CONSTRUCTOR_CALL */ type_,
                orderingRule,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SortKey(el);
}
export function _encode_SortKey(
    value: SortKey,
    elGetter: __utils.ASN1Encoder<SortKey>
) {
    if (!_cached_encoder_for_SortKey) {
        _cached_encoder_for_SortKey = function (
            value: SortKey,
            elGetter: __utils.ASN1Encoder<SortKey>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeType(
                                value.type_,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.orderingRule === undefined
                                ? undefined
                                : __utils._encodeObjectIdentifier(
                                      value.orderingRule,
                                      __utils.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SortKey(value, elGetter);
}

export class PagedResultsRequest_newRequest {
    constructor(
        readonly pageSize: asn1.INTEGER,
        readonly sortKeys: SortKey[] | undefined,
        readonly reverse: asn1.BOOLEAN | undefined,
        readonly unmerged: asn1.BOOLEAN | undefined,
        readonly pageNumber: asn1.INTEGER | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_reverse() {
        return false;
    }
    public static get _default_value_for_unmerged() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_PagedResultsRequest_newRequest: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "pageSize",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sortKeys",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "reverse",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "unmerged",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pageNumber",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PagedResultsRequest_newRequest: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PagedResultsRequest_newRequest: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PagedResultsRequest_newRequest: __utils.ASN1Decoder<
    PagedResultsRequest_newRequest
> | null = null;
let _cached_encoder_for_PagedResultsRequest_newRequest: __utils.ASN1Encoder<
    PagedResultsRequest_newRequest
> | null = null;
export function _decode_PagedResultsRequest_newRequest(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PagedResultsRequest_newRequest) {
        _cached_decoder_for_PagedResultsRequest_newRequest = function (
            el: asn1.ASN1Element
        ): PagedResultsRequest_newRequest {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let pageSize!: asn1.INTEGER;
            let sortKeys: asn1.OPTIONAL<SortKey[]>;
            let reverse: asn1.OPTIONAL<asn1.BOOLEAN> =
                PagedResultsRequest_newRequest._default_value_for_reverse;
            let unmerged: asn1.OPTIONAL<asn1.BOOLEAN> =
                PagedResultsRequest_newRequest._default_value_for_unmerged;
            let pageNumber: asn1.OPTIONAL<asn1.INTEGER>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                pageSize: (_el: asn1.ASN1Element): void => {
                    pageSize = __utils._decodeInteger(_el);
                },
                sortKeys: (_el: asn1.ASN1Element): void => {
                    sortKeys = __utils._decodeSequenceOf<SortKey>(
                        () => _decode_SortKey
                    )(_el);
                },
                reverse: (_el: asn1.ASN1Element): void => {
                    reverse = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                unmerged: (_el: asn1.ASN1Element): void => {
                    unmerged = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                pageNumber: (_el: asn1.ASN1Element): void => {
                    pageNumber = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PagedResultsRequest_newRequest,
                _extension_additions_list_spec_for_PagedResultsRequest_newRequest,
                _root_component_type_list_2_spec_for_PagedResultsRequest_newRequest,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PagedResultsRequest_newRequest(
                /* SEQUENCE_CONSTRUCTOR_CALL */ pageSize,
                sortKeys,
                reverse,
                unmerged,
                pageNumber,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PagedResultsRequest_newRequest(el);
}
export function _encode_PagedResultsRequest_newRequest(
    value: PagedResultsRequest_newRequest,
    elGetter: __utils.ASN1Encoder<PagedResultsRequest_newRequest>
) {
    if (!_cached_encoder_for_PagedResultsRequest_newRequest) {
        _cached_encoder_for_PagedResultsRequest_newRequest = function (
            value: PagedResultsRequest_newRequest,
            elGetter: __utils.ASN1Encoder<PagedResultsRequest_newRequest>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeInteger(
                                value.pageSize,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.sortKeys === undefined
                                ? undefined
                                : __utils._encodeSequenceOf<SortKey>(
                                      () => _encode_SortKey,
                                      __utils.BER
                                  )(value.sortKeys, __utils.BER),
                            /* IF_DEFAULT */ value.reverse === undefined ||
                            __utils.deepEq(
                                value.reverse,
                                PagedResultsRequest_newRequest._default_value_for_reverse
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.reverse, __utils.BER),
                            /* IF_DEFAULT */ value.unmerged === undefined ||
                            __utils.deepEq(
                                value.unmerged,
                                PagedResultsRequest_newRequest._default_value_for_unmerged
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.unmerged, __utils.BER),
                            /* IF_ABSENT  */ value.pageNumber === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.pageNumber, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_PagedResultsRequest_newRequest(value, elGetter);
}

export type PagedResultsRequest =
    | { newRequest: PagedResultsRequest_newRequest } /* CHOICE_ALT_ROOT */
    | { queryReference: asn1.OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { abandonQuery: asn1.OCTET_STRING } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_PagedResultsRequest: __utils.ASN1Decoder<
    PagedResultsRequest
> | null = null;
let _cached_encoder_for_PagedResultsRequest: __utils.ASN1Encoder<
    PagedResultsRequest
> | null = null;
export function _decode_PagedResultsRequest(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PagedResultsRequest) {
        _cached_decoder_for_PagedResultsRequest = __utils._decode_extensible_choice<
            PagedResultsRequest
        >({
            "UNIVERSAL 16": [
                "newRequest",
                _decode_PagedResultsRequest_newRequest,
            ],
            "UNIVERSAL 4": ["queryReference", __utils._decodeOctetString],
            "CONTEXT 0": [
                "abandonQuery",
                __utils._decode_explicit<asn1.OCTET_STRING>(
                    () => __utils._decodeOctetString
                ),
            ],
        });
    }
    return _cached_decoder_for_PagedResultsRequest(el);
}
export function _encode_PagedResultsRequest(
    value: PagedResultsRequest,
    elGetter: __utils.ASN1Encoder<PagedResultsRequest>
) {
    if (!_cached_encoder_for_PagedResultsRequest) {
        _cached_encoder_for_PagedResultsRequest = __utils._encode_choice<
            PagedResultsRequest
        >(
            {
                newRequest: _encode_PagedResultsRequest_newRequest,
                queryReference: __utils._encodeOctetString,
                abandonQuery: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeOctetString,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_PagedResultsRequest(value, elGetter);
}

export class ListArgumentData {
    constructor(
        readonly object: Name,
        readonly pagedResults: PagedResultsRequest | undefined,
        readonly listFamily: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly serviceControls:
            | ServiceControls
            | undefined /* REPLICATED_COMPONENT */,
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly requestor:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationProgress:
            | OperationProgress
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasedRDNs:
            | asn1.INTEGER
            | undefined /* REPLICATED_COMPONENT */,
        readonly criticalExtensions:
            | asn1.BIT_STRING
            | undefined /* REPLICATED_COMPONENT */,
        readonly referenceType:
            | ReferenceType
            | undefined /* REPLICATED_COMPONENT */,
        readonly entryOnly: asn1.BOOLEAN | undefined /* REPLICATED_COMPONENT */,
        readonly exclusions: Exclusions | undefined /* REPLICATED_COMPONENT */,
        readonly nameResolveOnMaster:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationContexts:
            | ContextSelection
            | undefined /* REPLICATED_COMPONENT */,
        readonly familyGrouping:
            | FamilyGrouping
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_listFamily() {
        return false;
    }
    public static get _default_value_for_serviceControls() {
        return new ServiceControls(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        );
    }
    public static get _default_value_for_operationProgress() {
        return new OperationProgress(
            DistributedOperations.OperationProgress_nameResolutionPhase_notStarted,
            undefined
        );
    }
    public static get _default_value_for_entryOnly() {
        return true;
    }
    public static get _default_value_for_nameResolveOnMaster() {
        return false;
    }
    public static get _default_value_for_familyGrouping() {
        return FamilyGrouping_entryOnly;
    }
}
export const _root_component_type_list_1_spec_for_ListArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "object",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pagedResults",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "listFamily",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ListArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "serviceControls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "requestor",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationProgress",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasedRDNs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 26),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "criticalExtensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 25),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "referenceType",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entryOnly",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 23),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "exclusions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 22),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nameResolveOnMaster",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 21),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationContexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 20),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "familyGrouping",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 19),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_ListArgumentData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ListArgumentData: __utils.ASN1Decoder<
    ListArgumentData
> | null = null;
let _cached_encoder_for_ListArgumentData: __utils.ASN1Encoder<
    ListArgumentData
> | null = null;
export function _decode_ListArgumentData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ListArgumentData) {
        _cached_decoder_for_ListArgumentData = function (
            el: asn1.ASN1Element
        ): ListArgumentData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let object!: Name;
            let pagedResults: asn1.OPTIONAL<PagedResultsRequest>;
            let listFamily: asn1.OPTIONAL<asn1.BOOLEAN> =
                ListArgumentData._default_value_for_listFamily;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let serviceControls: asn1.OPTIONAL<ServiceControls> =
                ListArgumentData._default_value_for_serviceControls;
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let requestor: asn1.OPTIONAL<DistinguishedName>;
            let operationProgress: asn1.OPTIONAL<OperationProgress> =
                ListArgumentData._default_value_for_operationProgress;
            let aliasedRDNs: asn1.OPTIONAL<asn1.INTEGER>;
            let criticalExtensions: asn1.OPTIONAL<asn1.BIT_STRING>;
            let referenceType: asn1.OPTIONAL<ReferenceType>;
            let entryOnly: asn1.OPTIONAL<asn1.BOOLEAN> =
                ListArgumentData._default_value_for_entryOnly;
            let exclusions: asn1.OPTIONAL<Exclusions>;
            let nameResolveOnMaster: asn1.OPTIONAL<asn1.BOOLEAN> =
                ListArgumentData._default_value_for_nameResolveOnMaster;
            let operationContexts: asn1.OPTIONAL<ContextSelection>;
            let familyGrouping: asn1.OPTIONAL<FamilyGrouping> =
                ListArgumentData._default_value_for_familyGrouping;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                object: (_el: asn1.ASN1Element): void => {
                    object = __utils._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                pagedResults: (_el: asn1.ASN1Element): void => {
                    pagedResults = __utils._decode_explicit<
                        PagedResultsRequest
                    >(() => _decode_PagedResultsRequest)(_el);
                },
                listFamily: (_el: asn1.ASN1Element): void => {
                    listFamily = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                serviceControls: (_el: asn1.ASN1Element): void => {
                    serviceControls = __utils._decode_explicit<ServiceControls>(
                        () => _decode_ServiceControls
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                requestor: (_el: asn1.ASN1Element): void => {
                    requestor = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                operationProgress: (_el: asn1.ASN1Element): void => {
                    operationProgress = __utils._decode_explicit<
                        OperationProgress
                    >(() => _decode_OperationProgress)(_el);
                },
                aliasedRDNs: (_el: asn1.ASN1Element): void => {
                    aliasedRDNs = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                criticalExtensions: (_el: asn1.ASN1Element): void => {
                    criticalExtensions = __utils._decode_explicit<
                        asn1.BIT_STRING
                    >(() => __utils._decodeBitString)(_el);
                },
                referenceType: (_el: asn1.ASN1Element): void => {
                    referenceType = __utils._decode_explicit<ReferenceType>(
                        () => _decode_ReferenceType
                    )(_el);
                },
                entryOnly: (_el: asn1.ASN1Element): void => {
                    entryOnly = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                exclusions: (_el: asn1.ASN1Element): void => {
                    exclusions = __utils._decode_explicit<Exclusions>(
                        () => _decode_Exclusions
                    )(_el);
                },
                nameResolveOnMaster: (_el: asn1.ASN1Element): void => {
                    nameResolveOnMaster = __utils._decode_explicit<
                        asn1.BOOLEAN
                    >(() => __utils._decodeBoolean)(_el);
                },
                operationContexts: (_el: asn1.ASN1Element): void => {
                    operationContexts = __utils._decode_explicit<
                        ContextSelection
                    >(() => _decode_ContextSelection)(_el);
                },
                familyGrouping: (_el: asn1.ASN1Element): void => {
                    familyGrouping = __utils._decode_explicit<FamilyGrouping>(
                        () => _decode_FamilyGrouping
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ListArgumentData,
                _extension_additions_list_spec_for_ListArgumentData,
                _root_component_type_list_2_spec_for_ListArgumentData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ListArgumentData(
                /* SET_CONSTRUCTOR_CALL */ object,
                pagedResults,
                listFamily,
                _unrecognizedExtensionsList,
                serviceControls,
                securityParameters,
                requestor,
                operationProgress,
                aliasedRDNs,
                criticalExtensions,
                referenceType,
                entryOnly,
                exclusions,
                nameResolveOnMaster,
                operationContexts,
                familyGrouping
            );
        };
    }
    return _cached_decoder_for_ListArgumentData(el);
}
export function _encode_ListArgumentData(
    value: ListArgumentData,
    elGetter: __utils.ASN1Encoder<ListArgumentData>
) {
    if (!_cached_encoder_for_ListArgumentData) {
        _cached_encoder_for_ListArgumentData = function (
            value: ListArgumentData,
            elGetter: __utils.ASN1Encoder<ListArgumentData>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_Name,
                                __utils.BER
                            )(value.object, __utils.BER),
                            /* IF_ABSENT  */ value.pagedResults === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_PagedResultsRequest,
                                      __utils.BER
                                  )(value.pagedResults, __utils.BER),
                            /* IF_DEFAULT */ value.listFamily === undefined ||
                            __utils.deepEq(
                                value.listFamily,
                                ListArgumentData._default_value_for_listFamily
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.listFamily, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            __utils.deepEq(
                                value.serviceControls,
                                ListArgumentData._default_value_for_serviceControls
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_ServiceControls,
                                      __utils.BER
                                  )(value.serviceControls, __utils.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.requestor === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.requestor, __utils.BER),
                            /* IF_DEFAULT */ value.operationProgress ===
                                undefined ||
                            __utils.deepEq(
                                value.operationProgress,
                                ListArgumentData._default_value_for_operationProgress
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () => _encode_OperationProgress,
                                      __utils.BER
                                  )(value.operationProgress, __utils.BER),
                            /* IF_ABSENT  */ value.aliasedRDNs === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      26,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.aliasedRDNs, __utils.BER),
                            /* IF_ABSENT  */ value.criticalExtensions ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      25,
                                      () => __utils._encodeBitString,
                                      __utils.BER
                                  )(value.criticalExtensions, __utils.BER),
                            /* IF_ABSENT  */ value.referenceType === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      24,
                                      () => _encode_ReferenceType,
                                      __utils.BER
                                  )(value.referenceType, __utils.BER),
                            /* IF_DEFAULT */ value.entryOnly === undefined ||
                            __utils.deepEq(
                                value.entryOnly,
                                ListArgumentData._default_value_for_entryOnly
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      23,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.entryOnly, __utils.BER),
                            /* IF_ABSENT  */ value.exclusions === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      22,
                                      () => _encode_Exclusions,
                                      __utils.BER
                                  )(value.exclusions, __utils.BER),
                            /* IF_DEFAULT */ value.nameResolveOnMaster ===
                                undefined ||
                            __utils.deepEq(
                                value.nameResolveOnMaster,
                                ListArgumentData._default_value_for_nameResolveOnMaster
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      21,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.nameResolveOnMaster, __utils.BER),
                            /* IF_ABSENT  */ value.operationContexts ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      20,
                                      () => _encode_ContextSelection,
                                      __utils.BER
                                  )(value.operationContexts, __utils.BER),
                            /* IF_DEFAULT */ value.familyGrouping ===
                                undefined ||
                            __utils.deepEq(
                                value.familyGrouping,
                                ListArgumentData._default_value_for_familyGrouping
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      19,
                                      () => _encode_FamilyGrouping,
                                      __utils.BER
                                  )(value.familyGrouping, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ListArgumentData(value, elGetter);
}

export type ListArgument = OPTIONALLY_PROTECTED<ListArgumentData>; // DefinedType
let _cached_decoder_for_ListArgument: __utils.ASN1Decoder<
    ListArgument
> | null = null;
let _cached_encoder_for_ListArgument: __utils.ASN1Encoder<
    ListArgument
> | null = null;
export function _decode_ListArgument(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ListArgument) {
        _cached_decoder_for_ListArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            ListArgumentData
        >(_decode_ListArgumentData);
    }
    return _cached_decoder_for_ListArgument(el);
}
export function _encode_ListArgument(
    value: ListArgument,
    elGetter: __utils.ASN1Encoder<ListArgument>
) {
    if (!_cached_encoder_for_ListArgument) {
        _cached_encoder_for_ListArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            ListArgumentData
        >(_encode_ListArgumentData);
    }
    return _cached_encoder_for_ListArgument(value, elGetter);
}

// TODO: ObjectAssignment: search

export type SearchArgumentData_subset = asn1.INTEGER;
export const SearchArgumentData_subset_baseObject: SearchArgumentData_subset = 0; /* LONG_NAMED_INTEGER_VALUE */
export const SearchArgumentData_subset_oneLevel: SearchArgumentData_subset = 1; /* LONG_NAMED_INTEGER_VALUE */
export const SearchArgumentData_subset_wholeSubtree: SearchArgumentData_subset = 2; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_SearchArgumentData_subset: __utils.ASN1Decoder<
    SearchArgumentData_subset
> | null = null;
let _cached_encoder_for_SearchArgumentData_subset: __utils.ASN1Encoder<
    SearchArgumentData_subset
> | null = null;
export function _decode_SearchArgumentData_subset(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SearchArgumentData_subset) {
        _cached_decoder_for_SearchArgumentData_subset = __utils._decodeInteger;
    }
    return _cached_decoder_for_SearchArgumentData_subset(el);
}
export function _encode_SearchArgumentData_subset(
    value: SearchArgumentData_subset,
    elGetter: __utils.ASN1Encoder<SearchArgumentData_subset>
) {
    if (!_cached_encoder_for_SearchArgumentData_subset) {
        _cached_encoder_for_SearchArgumentData_subset = __utils._encodeInteger;
    }
    return _cached_encoder_for_SearchArgumentData_subset(value, elGetter);
}

export type FilterItem_substrings_strings_Item =
    | { initial: asn1.ASN1Element } /* CHOICE_ALT_ROOT */
    | { any_: asn1.ASN1Element } /* CHOICE_ALT_ROOT */
    | { final: asn1.ASN1Element } /* CHOICE_ALT_ROOT */
    | { control: Attribute } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_FilterItem_substrings_strings_Item: __utils.ASN1Decoder<
    FilterItem_substrings_strings_Item
> | null = null;
let _cached_encoder_for_FilterItem_substrings_strings_Item: __utils.ASN1Encoder<
    FilterItem_substrings_strings_Item
> | null = null;
export function _decode_FilterItem_substrings_strings_Item(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_FilterItem_substrings_strings_Item) {
        _cached_decoder_for_FilterItem_substrings_strings_Item = __utils._decode_extensible_choice<
            FilterItem_substrings_strings_Item
        >({
            "CONTEXT 0": [
                "initial",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
            "CONTEXT 1": [
                "any_",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
            "CONTEXT 2": [
                "final",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
            "UNIVERSAL 16": ["control", _decode_Attribute],
        });
    }
    return _cached_decoder_for_FilterItem_substrings_strings_Item(el);
}
export function _encode_FilterItem_substrings_strings_Item(
    value: FilterItem_substrings_strings_Item,
    elGetter: __utils.ASN1Encoder<FilterItem_substrings_strings_Item>
) {
    if (!_cached_encoder_for_FilterItem_substrings_strings_Item) {
        _cached_encoder_for_FilterItem_substrings_strings_Item = __utils._encode_choice<
            FilterItem_substrings_strings_Item
        >(
            {
                initial: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
                any_: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
                final: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
                control: _encode_Attribute,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_FilterItem_substrings_strings_Item(
        value,
        elGetter
    );
}

export class FilterItem_substrings {
    constructor(
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly strings: FilterItem_substrings_strings_Item[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_FilterItem_substrings: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "strings",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_FilterItem_substrings: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_FilterItem_substrings: __utils.ComponentSpec[] = [];
let _cached_decoder_for_FilterItem_substrings: __utils.ASN1Decoder<
    FilterItem_substrings
> | null = null;
let _cached_encoder_for_FilterItem_substrings: __utils.ASN1Encoder<
    FilterItem_substrings
> | null = null;
export function _decode_FilterItem_substrings(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_FilterItem_substrings) {
        _cached_decoder_for_FilterItem_substrings = function (
            el: asn1.ASN1Element
        ): FilterItem_substrings {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "FilterItem-substrings contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "type";
            sequence[1].name = "strings";
            let type_!: asn1.OBJECT_IDENTIFIER;
            let strings!: FilterItem_substrings_strings_Item[];
            type_ = __utils._decodeObjectIdentifier(sequence[0]);
            strings = __utils._decodeSequenceOf<
                FilterItem_substrings_strings_Item
            >(() => _decode_FilterItem_substrings_strings_Item)(sequence[1]);
            // TODO: Validate values.
            return new FilterItem_substrings(type_, strings, sequence.slice(2));
        };
    }
    return _cached_decoder_for_FilterItem_substrings(el);
}
export function _encode_FilterItem_substrings(
    value: FilterItem_substrings,
    elGetter: __utils.ASN1Encoder<FilterItem_substrings>
) {
    if (!_cached_encoder_for_FilterItem_substrings) {
        _cached_encoder_for_FilterItem_substrings = function (
            value: FilterItem_substrings,
            elGetter: __utils.ASN1Encoder<FilterItem_substrings>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.type_,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeSequenceOf<
                                FilterItem_substrings_strings_Item
                            >(
                                () =>
                                    _encode_FilterItem_substrings_strings_Item,
                                __utils.BER
                            )(value.strings, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_FilterItem_substrings(value, elGetter);
}

export class MatchingRuleAssertion {
    constructor(
        readonly matchingRule: asn1.OBJECT_IDENTIFIER[],
        readonly type_: AttributeType | undefined,
        readonly matchValue: asn1.ASN1Element,
        readonly dnAttributes: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_dnAttributes() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_MatchingRuleAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "matchingRule",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "type",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "matchValue",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "dnAttributes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_MatchingRuleAssertion: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_MatchingRuleAssertion: __utils.ComponentSpec[] = [];
let _cached_decoder_for_MatchingRuleAssertion: __utils.ASN1Decoder<
    MatchingRuleAssertion
> | null = null;
let _cached_encoder_for_MatchingRuleAssertion: __utils.ASN1Encoder<
    MatchingRuleAssertion
> | null = null;
export function _decode_MatchingRuleAssertion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MatchingRuleAssertion) {
        _cached_decoder_for_MatchingRuleAssertion = function (
            el: asn1.ASN1Element
        ): MatchingRuleAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let matchingRule!: asn1.OBJECT_IDENTIFIER[];
            let type_: asn1.OPTIONAL<AttributeType>;
            let matchValue!: asn1.ASN1Element;
            let dnAttributes: asn1.OPTIONAL<asn1.BOOLEAN> =
                MatchingRuleAssertion._default_value_for_dnAttributes;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                matchingRule: (_el: asn1.ASN1Element): void => {
                    matchingRule = __utils._decode_explicit<
                        asn1.OBJECT_IDENTIFIER[]
                    >(() =>
                        __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(
                            () => __utils._decodeObjectIdentifier
                        )
                    )(_el);
                },
                type: (_el: asn1.ASN1Element): void => {
                    type_ = __utils._decode_explicit<AttributeType>(
                        () => _decode_AttributeType
                    )(_el);
                },
                matchValue: (_el: asn1.ASN1Element): void => {
                    matchValue = __utils._decode_explicit<asn1.ASN1Element>(
                        () => __utils._decodeAny
                    )(_el);
                },
                dnAttributes: (_el: asn1.ASN1Element): void => {
                    dnAttributes = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MatchingRuleAssertion,
                _extension_additions_list_spec_for_MatchingRuleAssertion,
                _root_component_type_list_2_spec_for_MatchingRuleAssertion,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new MatchingRuleAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ matchingRule,
                type_,
                matchValue,
                dnAttributes,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_MatchingRuleAssertion(el);
}
export function _encode_MatchingRuleAssertion(
    value: MatchingRuleAssertion,
    elGetter: __utils.ASN1Encoder<MatchingRuleAssertion>
) {
    if (!_cached_encoder_for_MatchingRuleAssertion) {
        _cached_encoder_for_MatchingRuleAssertion = function (
            value: MatchingRuleAssertion,
            elGetter: __utils.ASN1Encoder<MatchingRuleAssertion>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () =>
                                    __utils._encodeSetOf<
                                        asn1.OBJECT_IDENTIFIER
                                    >(
                                        () => __utils._encodeObjectIdentifier,
                                        __utils.BER
                                    ),
                                __utils.BER
                            )(value.matchingRule, __utils.BER),
                            /* IF_ABSENT  */ value.type_ === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_AttributeType,
                                      __utils.BER
                                  )(value.type_, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                3,
                                () => __utils._encodeAny,
                                __utils.BER
                            )(value.matchValue, __utils.BER),
                            /* IF_DEFAULT */ value.dnAttributes === undefined ||
                            __utils.deepEq(
                                value.dnAttributes,
                                MatchingRuleAssertion._default_value_for_dnAttributes
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      4,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.dnAttributes, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_MatchingRuleAssertion(value, elGetter);
}

export type FilterItem =
    | { equality: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
    | { substrings: FilterItem_substrings } /* CHOICE_ALT_ROOT */
    | { greaterOrEqual: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
    | { lessOrEqual: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
    | { present: AttributeType } /* CHOICE_ALT_ROOT */
    | { approximateMatch: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
    | { extensibleMatch: MatchingRuleAssertion } /* CHOICE_ALT_ROOT */
    | { contextPresent: AttributeTypeAssertion } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_FilterItem: __utils.ASN1Decoder<
    FilterItem
> | null = null;
let _cached_encoder_for_FilterItem: __utils.ASN1Encoder<
    FilterItem
> | null = null;
export function _decode_FilterItem(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_FilterItem) {
        _cached_decoder_for_FilterItem = __utils._decode_extensible_choice<
            FilterItem
        >({
            "CONTEXT 0": [
                "equality",
                __utils._decode_explicit<AttributeValueAssertion>(
                    () => _decode_AttributeValueAssertion
                ),
            ],
            "CONTEXT 1": [
                "substrings",
                __utils._decode_explicit<FilterItem_substrings>(
                    () => _decode_FilterItem_substrings
                ),
            ],
            "CONTEXT 2": [
                "greaterOrEqual",
                __utils._decode_explicit<AttributeValueAssertion>(
                    () => _decode_AttributeValueAssertion
                ),
            ],
            "CONTEXT 3": [
                "lessOrEqual",
                __utils._decode_explicit<AttributeValueAssertion>(
                    () => _decode_AttributeValueAssertion
                ),
            ],
            "CONTEXT 4": [
                "present",
                __utils._decode_explicit<AttributeType>(
                    () => _decode_AttributeType
                ),
            ],
            "CONTEXT 5": [
                "approximateMatch",
                __utils._decode_explicit<AttributeValueAssertion>(
                    () => _decode_AttributeValueAssertion
                ),
            ],
            "CONTEXT 6": [
                "extensibleMatch",
                __utils._decode_explicit<MatchingRuleAssertion>(
                    () => _decode_MatchingRuleAssertion
                ),
            ],
            "CONTEXT 7": [
                "contextPresent",
                __utils._decode_explicit<AttributeTypeAssertion>(
                    () => _decode_AttributeTypeAssertion
                ),
            ],
        });
    }
    return _cached_decoder_for_FilterItem(el);
}
export function _encode_FilterItem(
    value: FilterItem,
    elGetter: __utils.ASN1Encoder<FilterItem>
) {
    if (!_cached_encoder_for_FilterItem) {
        _cached_encoder_for_FilterItem = __utils._encode_choice<FilterItem>(
            {
                equality: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_AttributeValueAssertion,
                    __utils.BER
                ),
                substrings: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_FilterItem_substrings,
                    __utils.BER
                ),
                greaterOrEqual: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () => _encode_AttributeValueAssertion,
                    __utils.BER
                ),
                lessOrEqual: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    3,
                    () => _encode_AttributeValueAssertion,
                    __utils.BER
                ),
                present: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    4,
                    () => _encode_AttributeType,
                    __utils.BER
                ),
                approximateMatch: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    5,
                    () => _encode_AttributeValueAssertion,
                    __utils.BER
                ),
                extensibleMatch: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    6,
                    () => _encode_MatchingRuleAssertion,
                    __utils.BER
                ),
                contextPresent: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    7,
                    () => _encode_AttributeTypeAssertion,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_FilterItem(value, elGetter);
}

/* TODO: CHECK_RECURSIVE_DEFINITION */
export type Filter =
    | { item: FilterItem } /* CHOICE_ALT_ROOT */
    | { and: Filter[] } /* CHOICE_ALT_ROOT */
    | { or: Filter[] } /* CHOICE_ALT_ROOT */
    | { not: Filter } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Filter: __utils.ASN1Decoder<Filter> | null = null;
let _cached_encoder_for_Filter: __utils.ASN1Encoder<Filter> | null = null;
export function _decode_Filter(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Filter) {
        _cached_decoder_for_Filter = __utils._decode_extensible_choice<Filter>({
            "CONTEXT 0": [
                "item",
                __utils._decode_explicit<FilterItem>(() => _decode_FilterItem),
            ],
            "CONTEXT 1": [
                "and",
                __utils._decode_explicit<Filter[]>(() =>
                    __utils._decodeSetOf<Filter>(() => _decode_Filter)
                ),
            ],
            "CONTEXT 2": [
                "or",
                __utils._decode_explicit<Filter[]>(() =>
                    __utils._decodeSetOf<Filter>(() => _decode_Filter)
                ),
            ],
            "CONTEXT 3": [
                "not",
                __utils._decode_explicit<Filter>(() => _decode_Filter),
            ],
        });
    }
    return _cached_decoder_for_Filter(el);
}
export function _encode_Filter(
    value: Filter,
    elGetter: __utils.ASN1Encoder<Filter>
) {
    if (!_cached_encoder_for_Filter) {
        _cached_encoder_for_Filter = __utils._encode_choice<Filter>(
            {
                item: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_FilterItem,
                    __utils.BER
                ),
                and: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () =>
                        __utils._encodeSetOf<Filter>(
                            () => _encode_Filter,
                            __utils.BER
                        ),
                    __utils.BER
                ),
                or: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () =>
                        __utils._encodeSetOf<Filter>(
                            () => _encode_Filter,
                            __utils.BER
                        ),
                    __utils.BER
                ),
                not: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    3,
                    () => _encode_Filter,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_Filter(value, elGetter);
}

export type HierarchySelections = asn1.BIT_STRING;
export const HierarchySelections_self: number = 0; /* LONG_NAMED_BIT */
export const HierarchySelections_children: number = 1; /* LONG_NAMED_BIT */
export const HierarchySelections_parent: number = 2; /* LONG_NAMED_BIT */
export const HierarchySelections_hierarchy: number = 3; /* LONG_NAMED_BIT */
export const HierarchySelections_top: number = 4; /* LONG_NAMED_BIT */
export const HierarchySelections_subtree: number = 5; /* LONG_NAMED_BIT */
export const HierarchySelections_siblings: number = 6; /* LONG_NAMED_BIT */
export const HierarchySelections_siblingChildren: number = 7; /* LONG_NAMED_BIT */
export const HierarchySelections_siblingSubtree: number = 8; /* LONG_NAMED_BIT */
export const HierarchySelections_all: number = 9; /* LONG_NAMED_BIT */
let _cached_decoder_for_HierarchySelections: __utils.ASN1Decoder<
    HierarchySelections
> | null = null;
let _cached_encoder_for_HierarchySelections: __utils.ASN1Encoder<
    HierarchySelections
> | null = null;
export function _decode_HierarchySelections(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_HierarchySelections) {
        _cached_decoder_for_HierarchySelections = __utils._decodeBitString;
    }
    return _cached_decoder_for_HierarchySelections(el);
}
export function _encode_HierarchySelections(
    value: HierarchySelections,
    elGetter: __utils.ASN1Encoder<HierarchySelections>
) {
    if (!_cached_encoder_for_HierarchySelections) {
        _cached_encoder_for_HierarchySelections = __utils._encodeBitString;
    }
    return _cached_encoder_for_HierarchySelections(value, elGetter);
}

export type SearchControlOptions = asn1.BIT_STRING;
export const SearchControlOptions_searchAliases: number = 0; /* LONG_NAMED_BIT */
export const searchAliases: number = SearchControlOptions_searchAliases; /* SHORT_NAMED_BIT */
export const SearchControlOptions_matchedValuesOnly: number = 1; /* LONG_NAMED_BIT */
export const matchedValuesOnly: number = SearchControlOptions_matchedValuesOnly; /* SHORT_NAMED_BIT */
export const SearchControlOptions_checkOverspecified: number = 2; /* LONG_NAMED_BIT */
export const checkOverspecified: number = SearchControlOptions_checkOverspecified; /* SHORT_NAMED_BIT */
export const SearchControlOptions_performExactly: number = 3; /* LONG_NAMED_BIT */
export const performExactly: number = SearchControlOptions_performExactly; /* SHORT_NAMED_BIT */
export const SearchControlOptions_includeAllAreas: number = 4; /* LONG_NAMED_BIT */
export const includeAllAreas: number = SearchControlOptions_includeAllAreas; /* SHORT_NAMED_BIT */
export const SearchControlOptions_noSystemRelaxation: number = 5; /* LONG_NAMED_BIT */
export const noSystemRelaxation: number = SearchControlOptions_noSystemRelaxation; /* SHORT_NAMED_BIT */
export const SearchControlOptions_dnAttribute: number = 6; /* LONG_NAMED_BIT */
export const dnAttribute: number = SearchControlOptions_dnAttribute; /* SHORT_NAMED_BIT */
export const SearchControlOptions_matchOnResidualName: number = 7; /* LONG_NAMED_BIT */
export const matchOnResidualName: number = SearchControlOptions_matchOnResidualName; /* SHORT_NAMED_BIT */
export const SearchControlOptions_entryCount: number = 8; /* LONG_NAMED_BIT */
export const entryCount: number = SearchControlOptions_entryCount; /* SHORT_NAMED_BIT */
export const SearchControlOptions_useSubset: number = 9; /* LONG_NAMED_BIT */
export const useSubset: number = SearchControlOptions_useSubset; /* SHORT_NAMED_BIT */
export const SearchControlOptions_separateFamilyMembers: number = 10; /* LONG_NAMED_BIT */
export const separateFamilyMembers: number = SearchControlOptions_separateFamilyMembers; /* SHORT_NAMED_BIT */
export const SearchControlOptions_searchFamily: number = 11; /* LONG_NAMED_BIT */
export const searchFamily: number = SearchControlOptions_searchFamily; /* SHORT_NAMED_BIT */
let _cached_decoder_for_SearchControlOptions: __utils.ASN1Decoder<
    SearchControlOptions
> | null = null;
let _cached_encoder_for_SearchControlOptions: __utils.ASN1Encoder<
    SearchControlOptions
> | null = null;
export function _decode_SearchControlOptions(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SearchControlOptions) {
        _cached_decoder_for_SearchControlOptions = __utils._decodeBitString;
    }
    return _cached_decoder_for_SearchControlOptions(el);
}
export function _encode_SearchControlOptions(
    value: SearchControlOptions,
    elGetter: __utils.ASN1Encoder<SearchControlOptions>
) {
    if (!_cached_encoder_for_SearchControlOptions) {
        _cached_encoder_for_SearchControlOptions = __utils._encodeBitString;
    }
    return _cached_encoder_for_SearchControlOptions(value, elGetter);
}

export type DomainLocalID = UnboundedDirectoryString; // DefinedType
let _cached_decoder_for_DomainLocalID: __utils.ASN1Decoder<
    DomainLocalID
> | null = null;
let _cached_encoder_for_DomainLocalID: __utils.ASN1Encoder<
    DomainLocalID
> | null = null;
export function _decode_DomainLocalID(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DomainLocalID) {
        _cached_decoder_for_DomainLocalID = _decode_UnboundedDirectoryString;
    }
    return _cached_decoder_for_DomainLocalID(el);
}
export function _encode_DomainLocalID(
    value: DomainLocalID,
    elGetter: __utils.ASN1Encoder<DomainLocalID>
) {
    if (!_cached_encoder_for_DomainLocalID) {
        _cached_encoder_for_DomainLocalID = _encode_UnboundedDirectoryString;
    }
    return _cached_encoder_for_DomainLocalID(value, elGetter);
}

export type JoinArgument_joinSubset = asn1.ENUMERATED;
export const JoinArgument_joinSubset_baseObject: JoinArgument_joinSubset = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const JoinArgument_joinSubset_oneLevel: JoinArgument_joinSubset = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const JoinArgument_joinSubset_wholeSubtree: JoinArgument_joinSubset = 2; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_JoinArgument_joinSubset: __utils.ASN1Decoder<
    JoinArgument_joinSubset
> | null = null;
let _cached_encoder_for_JoinArgument_joinSubset: __utils.ASN1Encoder<
    JoinArgument_joinSubset
> | null = null;
export function _decode_JoinArgument_joinSubset(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_JoinArgument_joinSubset) {
        _cached_decoder_for_JoinArgument_joinSubset = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_JoinArgument_joinSubset(el);
}
export function _encode_JoinArgument_joinSubset(
    value: JoinArgument_joinSubset,
    elGetter: __utils.ASN1Encoder<JoinArgument_joinSubset>
) {
    if (!_cached_encoder_for_JoinArgument_joinSubset) {
        _cached_encoder_for_JoinArgument_joinSubset = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_JoinArgument_joinSubset(value, elGetter);
}

export type JoinContextType = asn1.OBJECT_IDENTIFIER; // ObjectClassFieldType
let _cached_decoder_for_JoinContextType: __utils.ASN1Decoder<
    JoinContextType
> | null = null;
let _cached_encoder_for_JoinContextType: __utils.ASN1Encoder<
    JoinContextType
> | null = null;
export function _decode_JoinContextType(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_JoinContextType) {
        _cached_decoder_for_JoinContextType = __utils._decodeObjectIdentifier;
    }
    return _cached_decoder_for_JoinContextType(el);
}
export function _encode_JoinContextType(
    value: JoinContextType,
    elGetter: __utils.ASN1Encoder<JoinContextType>
) {
    if (!_cached_encoder_for_JoinContextType) {
        _cached_encoder_for_JoinContextType = __utils._encodeObjectIdentifier;
    }
    return _cached_encoder_for_JoinContextType(value, elGetter);
}

export class JoinAttPair {
    constructor(
        readonly baseAtt: AttributeType,
        readonly joinAtt: AttributeType,
        readonly joinContext: JoinContextType[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_JoinAttPair: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "baseAtt",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "joinAtt",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "joinContext",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_JoinAttPair: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_JoinAttPair: __utils.ComponentSpec[] = [];
let _cached_decoder_for_JoinAttPair: __utils.ASN1Decoder<
    JoinAttPair
> | null = null;
let _cached_encoder_for_JoinAttPair: __utils.ASN1Encoder<
    JoinAttPair
> | null = null;
export function _decode_JoinAttPair(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_JoinAttPair) {
        _cached_decoder_for_JoinAttPair = function (
            el: asn1.ASN1Element
        ): JoinAttPair {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let baseAtt!: AttributeType;
            let joinAtt!: AttributeType;
            let joinContext: asn1.OPTIONAL<JoinContextType[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                baseAtt: (_el: asn1.ASN1Element): void => {
                    baseAtt = _decode_AttributeType(_el);
                },
                joinAtt: (_el: asn1.ASN1Element): void => {
                    joinAtt = _decode_AttributeType(_el);
                },
                joinContext: (_el: asn1.ASN1Element): void => {
                    joinContext = __utils._decodeSequenceOf<JoinContextType>(
                        () => _decode_JoinContextType
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_JoinAttPair,
                _extension_additions_list_spec_for_JoinAttPair,
                _root_component_type_list_2_spec_for_JoinAttPair,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new JoinAttPair(
                /* SEQUENCE_CONSTRUCTOR_CALL */ baseAtt,
                joinAtt,
                joinContext,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_JoinAttPair(el);
}
export function _encode_JoinAttPair(
    value: JoinAttPair,
    elGetter: __utils.ASN1Encoder<JoinAttPair>
) {
    if (!_cached_encoder_for_JoinAttPair) {
        _cached_encoder_for_JoinAttPair = function (
            value: JoinAttPair,
            elGetter: __utils.ASN1Encoder<JoinAttPair>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeType(
                                value.baseAtt,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_AttributeType(
                                value.joinAtt,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.joinContext === undefined
                                ? undefined
                                : __utils._encodeSequenceOf<JoinContextType>(
                                      () => _encode_JoinContextType,
                                      __utils.BER
                                  )(value.joinContext, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_JoinAttPair(value, elGetter);
}

export class JoinArgument {
    constructor(
        readonly joinBaseObject: Name,
        readonly domainLocalID: DomainLocalID | undefined,
        readonly joinSubset: JoinArgument_joinSubset | undefined,
        readonly joinFilter: Filter | undefined,
        readonly joinAttributes: JoinAttPair[] | undefined,
        readonly joinSelection: EntryInformationSelection,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_joinSubset() {
        return JoinArgument_joinSubset_baseObject;
    }
}
export const _root_component_type_list_1_spec_for_JoinArgument: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "joinBaseObject",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "domainLocalID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "joinSubset",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "joinFilter",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "joinAttributes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "joinSelection",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_JoinArgument: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_JoinArgument: __utils.ComponentSpec[] = [];
let _cached_decoder_for_JoinArgument: __utils.ASN1Decoder<
    JoinArgument
> | null = null;
let _cached_encoder_for_JoinArgument: __utils.ASN1Encoder<
    JoinArgument
> | null = null;
export function _decode_JoinArgument(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_JoinArgument) {
        _cached_decoder_for_JoinArgument = function (
            el: asn1.ASN1Element
        ): JoinArgument {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let joinBaseObject!: Name;
            let domainLocalID: asn1.OPTIONAL<DomainLocalID>;
            let joinSubset: asn1.OPTIONAL<JoinArgument_joinSubset> =
                JoinArgument._default_value_for_joinSubset;
            let joinFilter: asn1.OPTIONAL<Filter>;
            let joinAttributes: asn1.OPTIONAL<JoinAttPair[]>;
            let joinSelection!: EntryInformationSelection;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                joinBaseObject: (_el: asn1.ASN1Element): void => {
                    joinBaseObject = __utils._decode_explicit<Name>(
                        () => _decode_Name
                    )(_el);
                },
                domainLocalID: (_el: asn1.ASN1Element): void => {
                    domainLocalID = __utils._decode_explicit<DomainLocalID>(
                        () => _decode_DomainLocalID
                    )(_el);
                },
                joinSubset: (_el: asn1.ASN1Element): void => {
                    joinSubset = __utils._decode_explicit<
                        JoinArgument_joinSubset
                    >(() => _decode_JoinArgument_joinSubset)(_el);
                },
                joinFilter: (_el: asn1.ASN1Element): void => {
                    joinFilter = __utils._decode_explicit<Filter>(
                        () => _decode_Filter
                    )(_el);
                },
                joinAttributes: (_el: asn1.ASN1Element): void => {
                    joinAttributes = __utils._decode_explicit<JoinAttPair[]>(
                        () =>
                            __utils._decodeSequenceOf<JoinAttPair>(
                                () => _decode_JoinAttPair
                            )
                    )(_el);
                },
                joinSelection: (_el: asn1.ASN1Element): void => {
                    joinSelection = __utils._decode_explicit<
                        EntryInformationSelection
                    >(() => _decode_EntryInformationSelection)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_JoinArgument,
                _extension_additions_list_spec_for_JoinArgument,
                _root_component_type_list_2_spec_for_JoinArgument,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new JoinArgument(
                /* SEQUENCE_CONSTRUCTOR_CALL */ joinBaseObject,
                domainLocalID,
                joinSubset,
                joinFilter,
                joinAttributes,
                joinSelection,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_JoinArgument(el);
}
export function _encode_JoinArgument(
    value: JoinArgument,
    elGetter: __utils.ASN1Encoder<JoinArgument>
) {
    if (!_cached_encoder_for_JoinArgument) {
        _cached_encoder_for_JoinArgument = function (
            value: JoinArgument,
            elGetter: __utils.ASN1Encoder<JoinArgument>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_Name,
                                __utils.BER
                            )(value.joinBaseObject, __utils.BER),
                            /* IF_ABSENT  */ value.domainLocalID === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_DomainLocalID,
                                      __utils.BER
                                  )(value.domainLocalID, __utils.BER),
                            /* IF_DEFAULT */ value.joinSubset === undefined ||
                            __utils.deepEq(
                                value.joinSubset,
                                JoinArgument._default_value_for_joinSubset
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_JoinArgument_joinSubset,
                                      __utils.BER
                                  )(value.joinSubset, __utils.BER),
                            /* IF_ABSENT  */ value.joinFilter === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () => _encode_Filter,
                                      __utils.BER
                                  )(value.joinFilter, __utils.BER),
                            /* IF_ABSENT  */ value.joinAttributes === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      4,
                                      () =>
                                          __utils._encodeSequenceOf<
                                              JoinAttPair
                                          >(
                                              () => _encode_JoinAttPair,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.joinAttributes, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                5,
                                () => _encode_EntryInformationSelection,
                                __utils.BER
                            )(value.joinSelection, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_JoinArgument(value, elGetter);
}

export enum SearchArgumentData_joinType {
    innerJoin = 0,
    leftOuterJoin = 1,
    fullOuterJoin = 2,
}
export const SearchArgumentData_joinType_innerJoin: SearchArgumentData_joinType =
    SearchArgumentData_joinType.innerJoin; /* LONG_NAMED_ENUMERATED_VALUE */
export const innerJoin: SearchArgumentData_joinType =
    SearchArgumentData_joinType.innerJoin; /* SHORT_NAMED_ENUMERATED_VALUE */
export const SearchArgumentData_joinType_leftOuterJoin: SearchArgumentData_joinType =
    SearchArgumentData_joinType.leftOuterJoin; /* LONG_NAMED_ENUMERATED_VALUE */
export const leftOuterJoin: SearchArgumentData_joinType =
    SearchArgumentData_joinType.leftOuterJoin; /* SHORT_NAMED_ENUMERATED_VALUE */
export const SearchArgumentData_joinType_fullOuterJoin: SearchArgumentData_joinType =
    SearchArgumentData_joinType.fullOuterJoin; /* LONG_NAMED_ENUMERATED_VALUE */
export const fullOuterJoin: SearchArgumentData_joinType =
    SearchArgumentData_joinType.fullOuterJoin; /* SHORT_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_SearchArgumentData_joinType: __utils.ASN1Decoder<
    SearchArgumentData_joinType
> | null = null;
let _cached_encoder_for_SearchArgumentData_joinType: __utils.ASN1Encoder<
    SearchArgumentData_joinType
> | null = null;
export function _decode_SearchArgumentData_joinType(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SearchArgumentData_joinType) {
        _cached_decoder_for_SearchArgumentData_joinType =
            __utils._decodeEnumerated;
    }
    return _cached_decoder_for_SearchArgumentData_joinType(el);
}
export function _encode_SearchArgumentData_joinType(
    value: SearchArgumentData_joinType,
    elGetter: __utils.ASN1Encoder<SearchArgumentData_joinType>
) {
    if (!_cached_encoder_for_SearchArgumentData_joinType) {
        _cached_encoder_for_SearchArgumentData_joinType =
            __utils._encodeEnumerated;
    }
    return _cached_encoder_for_SearchArgumentData_joinType(value, elGetter);
}

export class SearchArgumentData {
    constructor(
        readonly baseObject: Name,
        readonly subset: SearchArgumentData_subset | undefined,
        readonly filter: Filter | undefined,
        readonly searchAliases: asn1.BOOLEAN | undefined,
        readonly selection: EntryInformationSelection | undefined,
        readonly pagedResults: PagedResultsRequest | undefined,
        readonly matchedValuesOnly: asn1.BOOLEAN | undefined,
        readonly extendedFilter: Filter | undefined,
        readonly checkOverspecified: asn1.BOOLEAN | undefined,
        readonly relaxation: RelaxationPolicy | undefined,
        readonly extendedArea: asn1.INTEGER | undefined,
        readonly hierarchySelections: HierarchySelections | undefined,
        readonly searchControlOptions: SearchControlOptions | undefined,
        readonly joinArguments: JoinArgument[] | undefined,
        readonly joinType: SearchArgumentData_joinType | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly serviceControls:
            | ServiceControls
            | undefined /* REPLICATED_COMPONENT */,
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly requestor:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationProgress:
            | OperationProgress
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasedRDNs:
            | asn1.INTEGER
            | undefined /* REPLICATED_COMPONENT */,
        readonly criticalExtensions:
            | asn1.BIT_STRING
            | undefined /* REPLICATED_COMPONENT */,
        readonly referenceType:
            | ReferenceType
            | undefined /* REPLICATED_COMPONENT */,
        readonly entryOnly: asn1.BOOLEAN | undefined /* REPLICATED_COMPONENT */,
        readonly exclusions: Exclusions | undefined /* REPLICATED_COMPONENT */,
        readonly nameResolveOnMaster:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationContexts:
            | ContextSelection
            | undefined /* REPLICATED_COMPONENT */,
        readonly familyGrouping:
            | FamilyGrouping
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_subset() {
        return SearchArgumentData_subset_baseObject;
    }
    public static get _default_value_for_filter() {
        return { and: [] };
    }
    public static get _default_value_for_searchAliases() {
        return true;
    }
    public static get _default_value_for_selection() {
        return new EntryInformationSelection(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        );
    }
    public static get _default_value_for_matchedValuesOnly() {
        return false;
    }
    public static get _default_value_for_checkOverspecified() {
        return false;
    }
    public static get _default_value_for_hierarchySelections() {
        return new Uint8ClampedArray([asn1.TRUE_BIT]);
    }
    public static get _default_value_for_searchControlOptions() {
        return new Uint8ClampedArray([asn1.TRUE_BIT]);
    }
    public static get _default_value_for_joinType() {
        return leftOuterJoin;
    }
    public static get _default_value_for_serviceControls() {
        return new ServiceControls(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        );
    }
    public static get _default_value_for_operationProgress() {
        return new OperationProgress(
            DistributedOperations.OperationProgress_nameResolutionPhase_notStarted,
            undefined
        );
    }
    public static get _default_value_for_entryOnly() {
        return true;
    }
    public static get _default_value_for_nameResolveOnMaster() {
        return false;
    }
    public static get _default_value_for_familyGrouping() {
        return FamilyGrouping_entryOnly;
    }
}
export const _root_component_type_list_1_spec_for_SearchArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "baseObject",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subset",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "filter",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "searchAliases",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "selection",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pagedResults",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "matchedValuesOnly",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "extendedFilter",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "checkOverspecified",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 8),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "relaxation",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 9),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "extendedArea",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "hierarchySelections",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 11),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "searchControlOptions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 12),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "joinArguments",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 13),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "joinType",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 14),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SearchArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "serviceControls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "requestor",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationProgress",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasedRDNs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 26),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "criticalExtensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 25),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "referenceType",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entryOnly",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 23),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "exclusions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 22),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nameResolveOnMaster",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 21),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationContexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 20),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "familyGrouping",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 19),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_SearchArgumentData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SearchArgumentData: __utils.ASN1Decoder<
    SearchArgumentData
> | null = null;
let _cached_encoder_for_SearchArgumentData: __utils.ASN1Encoder<
    SearchArgumentData
> | null = null;
export function _decode_SearchArgumentData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SearchArgumentData) {
        _cached_decoder_for_SearchArgumentData = function (
            el: asn1.ASN1Element
        ): SearchArgumentData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let baseObject!: Name;
            let subset: asn1.OPTIONAL<SearchArgumentData_subset> =
                SearchArgumentData._default_value_for_subset;
            let filter: asn1.OPTIONAL<Filter> =
                SearchArgumentData._default_value_for_filter;
            let searchAliases: asn1.OPTIONAL<asn1.BOOLEAN> =
                SearchArgumentData._default_value_for_searchAliases;
            let selection: asn1.OPTIONAL<EntryInformationSelection> =
                SearchArgumentData._default_value_for_selection;
            let pagedResults: asn1.OPTIONAL<PagedResultsRequest>;
            let matchedValuesOnly: asn1.OPTIONAL<asn1.BOOLEAN> =
                SearchArgumentData._default_value_for_matchedValuesOnly;
            let extendedFilter: asn1.OPTIONAL<Filter>;
            let checkOverspecified: asn1.OPTIONAL<asn1.BOOLEAN> =
                SearchArgumentData._default_value_for_checkOverspecified;
            let relaxation: asn1.OPTIONAL<RelaxationPolicy>;
            let extendedArea: asn1.OPTIONAL<asn1.INTEGER>;
            let hierarchySelections: asn1.OPTIONAL<HierarchySelections> =
                SearchArgumentData._default_value_for_hierarchySelections;
            let searchControlOptions: asn1.OPTIONAL<SearchControlOptions> =
                SearchArgumentData._default_value_for_searchControlOptions;
            let joinArguments: asn1.OPTIONAL<JoinArgument[]>;
            let joinType: asn1.OPTIONAL<SearchArgumentData_joinType> =
                SearchArgumentData._default_value_for_joinType;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let serviceControls: asn1.OPTIONAL<ServiceControls> =
                SearchArgumentData._default_value_for_serviceControls;
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let requestor: asn1.OPTIONAL<DistinguishedName>;
            let operationProgress: asn1.OPTIONAL<OperationProgress> =
                SearchArgumentData._default_value_for_operationProgress;
            let aliasedRDNs: asn1.OPTIONAL<asn1.INTEGER>;
            let criticalExtensions: asn1.OPTIONAL<asn1.BIT_STRING>;
            let referenceType: asn1.OPTIONAL<ReferenceType>;
            let entryOnly: asn1.OPTIONAL<asn1.BOOLEAN> =
                SearchArgumentData._default_value_for_entryOnly;
            let exclusions: asn1.OPTIONAL<Exclusions>;
            let nameResolveOnMaster: asn1.OPTIONAL<asn1.BOOLEAN> =
                SearchArgumentData._default_value_for_nameResolveOnMaster;
            let operationContexts: asn1.OPTIONAL<ContextSelection>;
            let familyGrouping: asn1.OPTIONAL<FamilyGrouping> =
                SearchArgumentData._default_value_for_familyGrouping;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                baseObject: (_el: asn1.ASN1Element): void => {
                    baseObject = __utils._decode_explicit<Name>(
                        () => _decode_Name
                    )(_el);
                },
                subset: (_el: asn1.ASN1Element): void => {
                    subset = __utils._decode_explicit<
                        SearchArgumentData_subset
                    >(() => _decode_SearchArgumentData_subset)(_el);
                },
                filter: (_el: asn1.ASN1Element): void => {
                    filter = __utils._decode_explicit<Filter>(
                        () => _decode_Filter
                    )(_el);
                },
                searchAliases: (_el: asn1.ASN1Element): void => {
                    searchAliases = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                selection: (_el: asn1.ASN1Element): void => {
                    selection = __utils._decode_explicit<
                        EntryInformationSelection
                    >(() => _decode_EntryInformationSelection)(_el);
                },
                pagedResults: (_el: asn1.ASN1Element): void => {
                    pagedResults = __utils._decode_explicit<
                        PagedResultsRequest
                    >(() => _decode_PagedResultsRequest)(_el);
                },
                matchedValuesOnly: (_el: asn1.ASN1Element): void => {
                    matchedValuesOnly = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                extendedFilter: (_el: asn1.ASN1Element): void => {
                    extendedFilter = __utils._decode_explicit<Filter>(
                        () => _decode_Filter
                    )(_el);
                },
                checkOverspecified: (_el: asn1.ASN1Element): void => {
                    checkOverspecified = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                relaxation: (_el: asn1.ASN1Element): void => {
                    relaxation = __utils._decode_explicit<RelaxationPolicy>(
                        () => _decode_RelaxationPolicy
                    )(_el);
                },
                extendedArea: (_el: asn1.ASN1Element): void => {
                    extendedArea = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                hierarchySelections: (_el: asn1.ASN1Element): void => {
                    hierarchySelections = __utils._decode_explicit<
                        HierarchySelections
                    >(() => _decode_HierarchySelections)(_el);
                },
                searchControlOptions: (_el: asn1.ASN1Element): void => {
                    searchControlOptions = __utils._decode_explicit<
                        SearchControlOptions
                    >(() => _decode_SearchControlOptions)(_el);
                },
                joinArguments: (_el: asn1.ASN1Element): void => {
                    joinArguments = __utils._decode_explicit<JoinArgument[]>(
                        () =>
                            __utils._decodeSequenceOf<JoinArgument>(
                                () => _decode_JoinArgument
                            )
                    )(_el);
                },
                joinType: (_el: asn1.ASN1Element): void => {
                    joinType = __utils._decode_explicit<
                        SearchArgumentData_joinType
                    >(() => _decode_SearchArgumentData_joinType)(_el);
                },
                serviceControls: (_el: asn1.ASN1Element): void => {
                    serviceControls = __utils._decode_explicit<ServiceControls>(
                        () => _decode_ServiceControls
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                requestor: (_el: asn1.ASN1Element): void => {
                    requestor = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                operationProgress: (_el: asn1.ASN1Element): void => {
                    operationProgress = __utils._decode_explicit<
                        OperationProgress
                    >(() => _decode_OperationProgress)(_el);
                },
                aliasedRDNs: (_el: asn1.ASN1Element): void => {
                    aliasedRDNs = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                criticalExtensions: (_el: asn1.ASN1Element): void => {
                    criticalExtensions = __utils._decode_explicit<
                        asn1.BIT_STRING
                    >(() => __utils._decodeBitString)(_el);
                },
                referenceType: (_el: asn1.ASN1Element): void => {
                    referenceType = __utils._decode_explicit<ReferenceType>(
                        () => _decode_ReferenceType
                    )(_el);
                },
                entryOnly: (_el: asn1.ASN1Element): void => {
                    entryOnly = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                exclusions: (_el: asn1.ASN1Element): void => {
                    exclusions = __utils._decode_explicit<Exclusions>(
                        () => _decode_Exclusions
                    )(_el);
                },
                nameResolveOnMaster: (_el: asn1.ASN1Element): void => {
                    nameResolveOnMaster = __utils._decode_explicit<
                        asn1.BOOLEAN
                    >(() => __utils._decodeBoolean)(_el);
                },
                operationContexts: (_el: asn1.ASN1Element): void => {
                    operationContexts = __utils._decode_explicit<
                        ContextSelection
                    >(() => _decode_ContextSelection)(_el);
                },
                familyGrouping: (_el: asn1.ASN1Element): void => {
                    familyGrouping = __utils._decode_explicit<FamilyGrouping>(
                        () => _decode_FamilyGrouping
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SearchArgumentData,
                _extension_additions_list_spec_for_SearchArgumentData,
                _root_component_type_list_2_spec_for_SearchArgumentData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SearchArgumentData(
                /* SET_CONSTRUCTOR_CALL */ baseObject,
                subset,
                filter,
                searchAliases,
                selection,
                pagedResults,
                matchedValuesOnly,
                extendedFilter,
                checkOverspecified,
                relaxation,
                extendedArea,
                hierarchySelections,
                searchControlOptions,
                joinArguments,
                joinType,
                _unrecognizedExtensionsList,
                serviceControls,
                securityParameters,
                requestor,
                operationProgress,
                aliasedRDNs,
                criticalExtensions,
                referenceType,
                entryOnly,
                exclusions,
                nameResolveOnMaster,
                operationContexts,
                familyGrouping
            );
        };
    }
    return _cached_decoder_for_SearchArgumentData(el);
}
export function _encode_SearchArgumentData(
    value: SearchArgumentData,
    elGetter: __utils.ASN1Encoder<SearchArgumentData>
) {
    if (!_cached_encoder_for_SearchArgumentData) {
        _cached_encoder_for_SearchArgumentData = function (
            value: SearchArgumentData,
            elGetter: __utils.ASN1Encoder<SearchArgumentData>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_Name,
                                __utils.BER
                            )(value.baseObject, __utils.BER),
                            /* IF_DEFAULT */ value.subset === undefined ||
                            __utils.deepEq(
                                value.subset,
                                SearchArgumentData._default_value_for_subset
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_SearchArgumentData_subset,
                                      __utils.BER
                                  )(value.subset, __utils.BER),
                            /* IF_DEFAULT */ value.filter === undefined ||
                            __utils.deepEq(
                                value.filter,
                                SearchArgumentData._default_value_for_filter
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_Filter,
                                      __utils.BER
                                  )(value.filter, __utils.BER),
                            /* IF_DEFAULT */ value.searchAliases ===
                                undefined ||
                            __utils.deepEq(
                                value.searchAliases,
                                SearchArgumentData._default_value_for_searchAliases
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.searchAliases, __utils.BER),
                            /* IF_DEFAULT */ value.selection === undefined ||
                            __utils.deepEq(
                                value.selection,
                                SearchArgumentData._default_value_for_selection
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      4,
                                      () => _encode_EntryInformationSelection,
                                      __utils.BER
                                  )(value.selection, __utils.BER),
                            /* IF_ABSENT  */ value.pagedResults === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      5,
                                      () => _encode_PagedResultsRequest,
                                      __utils.BER
                                  )(value.pagedResults, __utils.BER),
                            /* IF_DEFAULT */ value.matchedValuesOnly ===
                                undefined ||
                            __utils.deepEq(
                                value.matchedValuesOnly,
                                SearchArgumentData._default_value_for_matchedValuesOnly
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      6,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.matchedValuesOnly, __utils.BER),
                            /* IF_ABSENT  */ value.extendedFilter === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      7,
                                      () => _encode_Filter,
                                      __utils.BER
                                  )(value.extendedFilter, __utils.BER),
                            /* IF_DEFAULT */ value.checkOverspecified ===
                                undefined ||
                            __utils.deepEq(
                                value.checkOverspecified,
                                SearchArgumentData._default_value_for_checkOverspecified
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      8,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.checkOverspecified, __utils.BER),
                            /* IF_ABSENT  */ value.relaxation === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      9,
                                      () => _encode_RelaxationPolicy,
                                      __utils.BER
                                  )(value.relaxation, __utils.BER),
                            /* IF_ABSENT  */ value.extendedArea === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      10,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.extendedArea, __utils.BER),
                            /* IF_DEFAULT */ value.hierarchySelections ===
                                undefined ||
                            __utils.deepEq(
                                value.hierarchySelections,
                                SearchArgumentData._default_value_for_hierarchySelections
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      11,
                                      () => _encode_HierarchySelections,
                                      __utils.BER
                                  )(value.hierarchySelections, __utils.BER),
                            /* IF_DEFAULT */ value.searchControlOptions ===
                                undefined ||
                            __utils.deepEq(
                                value.searchControlOptions,
                                SearchArgumentData._default_value_for_searchControlOptions
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      12,
                                      () => _encode_SearchControlOptions,
                                      __utils.BER
                                  )(value.searchControlOptions, __utils.BER),
                            /* IF_ABSENT  */ value.joinArguments === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      13,
                                      () =>
                                          __utils._encodeSequenceOf<
                                              JoinArgument
                                          >(
                                              () => _encode_JoinArgument,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.joinArguments, __utils.BER),
                            /* IF_DEFAULT */ value.joinType === undefined ||
                            __utils.deepEq(
                                value.joinType,
                                SearchArgumentData._default_value_for_joinType
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      14,
                                      () => _encode_SearchArgumentData_joinType,
                                      __utils.BER
                                  )(value.joinType, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            __utils.deepEq(
                                value.serviceControls,
                                SearchArgumentData._default_value_for_serviceControls
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_ServiceControls,
                                      __utils.BER
                                  )(value.serviceControls, __utils.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.requestor === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.requestor, __utils.BER),
                            /* IF_DEFAULT */ value.operationProgress ===
                                undefined ||
                            __utils.deepEq(
                                value.operationProgress,
                                SearchArgumentData._default_value_for_operationProgress
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () => _encode_OperationProgress,
                                      __utils.BER
                                  )(value.operationProgress, __utils.BER),
                            /* IF_ABSENT  */ value.aliasedRDNs === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      26,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.aliasedRDNs, __utils.BER),
                            /* IF_ABSENT  */ value.criticalExtensions ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      25,
                                      () => __utils._encodeBitString,
                                      __utils.BER
                                  )(value.criticalExtensions, __utils.BER),
                            /* IF_ABSENT  */ value.referenceType === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      24,
                                      () => _encode_ReferenceType,
                                      __utils.BER
                                  )(value.referenceType, __utils.BER),
                            /* IF_DEFAULT */ value.entryOnly === undefined ||
                            __utils.deepEq(
                                value.entryOnly,
                                SearchArgumentData._default_value_for_entryOnly
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      23,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.entryOnly, __utils.BER),
                            /* IF_ABSENT  */ value.exclusions === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      22,
                                      () => _encode_Exclusions,
                                      __utils.BER
                                  )(value.exclusions, __utils.BER),
                            /* IF_DEFAULT */ value.nameResolveOnMaster ===
                                undefined ||
                            __utils.deepEq(
                                value.nameResolveOnMaster,
                                SearchArgumentData._default_value_for_nameResolveOnMaster
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      21,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.nameResolveOnMaster, __utils.BER),
                            /* IF_ABSENT  */ value.operationContexts ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      20,
                                      () => _encode_ContextSelection,
                                      __utils.BER
                                  )(value.operationContexts, __utils.BER),
                            /* IF_DEFAULT */ value.familyGrouping ===
                                undefined ||
                            __utils.deepEq(
                                value.familyGrouping,
                                SearchArgumentData._default_value_for_familyGrouping
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      19,
                                      () => _encode_FamilyGrouping,
                                      __utils.BER
                                  )(value.familyGrouping, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SearchArgumentData(value, elGetter);
}

export type SearchArgument = OPTIONALLY_PROTECTED<SearchArgumentData>; // DefinedType
let _cached_decoder_for_SearchArgument: __utils.ASN1Decoder<
    SearchArgument
> | null = null;
let _cached_encoder_for_SearchArgument: __utils.ASN1Encoder<
    SearchArgument
> | null = null;
export function _decode_SearchArgument(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SearchArgument) {
        _cached_decoder_for_SearchArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            SearchArgumentData
        >(_decode_SearchArgumentData);
    }
    return _cached_decoder_for_SearchArgument(el);
}
export function _encode_SearchArgument(
    value: SearchArgument,
    elGetter: __utils.ASN1Encoder<SearchArgument>
) {
    if (!_cached_encoder_for_SearchArgument) {
        _cached_encoder_for_SearchArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            SearchArgumentData
        >(_encode_SearchArgumentData);
    }
    return _cached_encoder_for_SearchArgument(value, elGetter);
}

// TODO: ObjectAssignment: addEntry

export class AddEntryArgumentData {
    constructor(
        readonly object: Name,
        readonly entry: Attribute[],
        readonly targetSystem: AccessPoint | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly serviceControls:
            | ServiceControls
            | undefined /* REPLICATED_COMPONENT */,
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly requestor:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationProgress:
            | OperationProgress
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasedRDNs:
            | asn1.INTEGER
            | undefined /* REPLICATED_COMPONENT */,
        readonly criticalExtensions:
            | asn1.BIT_STRING
            | undefined /* REPLICATED_COMPONENT */,
        readonly referenceType:
            | ReferenceType
            | undefined /* REPLICATED_COMPONENT */,
        readonly entryOnly: asn1.BOOLEAN | undefined /* REPLICATED_COMPONENT */,
        readonly exclusions: Exclusions | undefined /* REPLICATED_COMPONENT */,
        readonly nameResolveOnMaster:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationContexts:
            | ContextSelection
            | undefined /* REPLICATED_COMPONENT */,
        readonly familyGrouping:
            | FamilyGrouping
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_serviceControls() {
        return new ServiceControls(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        );
    }
    public static get _default_value_for_operationProgress() {
        return new OperationProgress(
            DistributedOperations.OperationProgress_nameResolutionPhase_notStarted,
            undefined
        );
    }
    public static get _default_value_for_entryOnly() {
        return true;
    }
    public static get _default_value_for_nameResolveOnMaster() {
        return false;
    }
    public static get _default_value_for_familyGrouping() {
        return FamilyGrouping_entryOnly;
    }
}
export const _root_component_type_list_1_spec_for_AddEntryArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "object",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entry",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "targetSystem",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AddEntryArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "serviceControls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "requestor",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationProgress",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasedRDNs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 26),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "criticalExtensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 25),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "referenceType",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entryOnly",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 23),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "exclusions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 22),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nameResolveOnMaster",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 21),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationContexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 20),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "familyGrouping",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 19),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_AddEntryArgumentData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AddEntryArgumentData: __utils.ASN1Decoder<
    AddEntryArgumentData
> | null = null;
let _cached_encoder_for_AddEntryArgumentData: __utils.ASN1Encoder<
    AddEntryArgumentData
> | null = null;
export function _decode_AddEntryArgumentData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AddEntryArgumentData) {
        _cached_decoder_for_AddEntryArgumentData = function (
            el: asn1.ASN1Element
        ): AddEntryArgumentData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let object!: Name;
            let entry!: Attribute[];
            let targetSystem: asn1.OPTIONAL<AccessPoint>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let serviceControls: asn1.OPTIONAL<ServiceControls> =
                AddEntryArgumentData._default_value_for_serviceControls;
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let requestor: asn1.OPTIONAL<DistinguishedName>;
            let operationProgress: asn1.OPTIONAL<OperationProgress> =
                AddEntryArgumentData._default_value_for_operationProgress;
            let aliasedRDNs: asn1.OPTIONAL<asn1.INTEGER>;
            let criticalExtensions: asn1.OPTIONAL<asn1.BIT_STRING>;
            let referenceType: asn1.OPTIONAL<ReferenceType>;
            let entryOnly: asn1.OPTIONAL<asn1.BOOLEAN> =
                AddEntryArgumentData._default_value_for_entryOnly;
            let exclusions: asn1.OPTIONAL<Exclusions>;
            let nameResolveOnMaster: asn1.OPTIONAL<asn1.BOOLEAN> =
                AddEntryArgumentData._default_value_for_nameResolveOnMaster;
            let operationContexts: asn1.OPTIONAL<ContextSelection>;
            let familyGrouping: asn1.OPTIONAL<FamilyGrouping> =
                AddEntryArgumentData._default_value_for_familyGrouping;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                object: (_el: asn1.ASN1Element): void => {
                    object = __utils._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                entry: (_el: asn1.ASN1Element): void => {
                    entry = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSetOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
                targetSystem: (_el: asn1.ASN1Element): void => {
                    targetSystem = __utils._decode_explicit<AccessPoint>(
                        () => _decode_AccessPoint
                    )(_el);
                },
                serviceControls: (_el: asn1.ASN1Element): void => {
                    serviceControls = __utils._decode_explicit<ServiceControls>(
                        () => _decode_ServiceControls
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                requestor: (_el: asn1.ASN1Element): void => {
                    requestor = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                operationProgress: (_el: asn1.ASN1Element): void => {
                    operationProgress = __utils._decode_explicit<
                        OperationProgress
                    >(() => _decode_OperationProgress)(_el);
                },
                aliasedRDNs: (_el: asn1.ASN1Element): void => {
                    aliasedRDNs = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                criticalExtensions: (_el: asn1.ASN1Element): void => {
                    criticalExtensions = __utils._decode_explicit<
                        asn1.BIT_STRING
                    >(() => __utils._decodeBitString)(_el);
                },
                referenceType: (_el: asn1.ASN1Element): void => {
                    referenceType = __utils._decode_explicit<ReferenceType>(
                        () => _decode_ReferenceType
                    )(_el);
                },
                entryOnly: (_el: asn1.ASN1Element): void => {
                    entryOnly = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                exclusions: (_el: asn1.ASN1Element): void => {
                    exclusions = __utils._decode_explicit<Exclusions>(
                        () => _decode_Exclusions
                    )(_el);
                },
                nameResolveOnMaster: (_el: asn1.ASN1Element): void => {
                    nameResolveOnMaster = __utils._decode_explicit<
                        asn1.BOOLEAN
                    >(() => __utils._decodeBoolean)(_el);
                },
                operationContexts: (_el: asn1.ASN1Element): void => {
                    operationContexts = __utils._decode_explicit<
                        ContextSelection
                    >(() => _decode_ContextSelection)(_el);
                },
                familyGrouping: (_el: asn1.ASN1Element): void => {
                    familyGrouping = __utils._decode_explicit<FamilyGrouping>(
                        () => _decode_FamilyGrouping
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AddEntryArgumentData,
                _extension_additions_list_spec_for_AddEntryArgumentData,
                _root_component_type_list_2_spec_for_AddEntryArgumentData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AddEntryArgumentData(
                /* SET_CONSTRUCTOR_CALL */ object,
                entry,
                targetSystem,
                _unrecognizedExtensionsList,
                serviceControls,
                securityParameters,
                requestor,
                operationProgress,
                aliasedRDNs,
                criticalExtensions,
                referenceType,
                entryOnly,
                exclusions,
                nameResolveOnMaster,
                operationContexts,
                familyGrouping
            );
        };
    }
    return _cached_decoder_for_AddEntryArgumentData(el);
}
export function _encode_AddEntryArgumentData(
    value: AddEntryArgumentData,
    elGetter: __utils.ASN1Encoder<AddEntryArgumentData>
) {
    if (!_cached_encoder_for_AddEntryArgumentData) {
        _cached_encoder_for_AddEntryArgumentData = function (
            value: AddEntryArgumentData,
            elGetter: __utils.ASN1Encoder<AddEntryArgumentData>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_Name,
                                __utils.BER
                            )(value.object, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () =>
                                    __utils._encodeSetOf<Attribute>(
                                        () => _encode_Attribute,
                                        __utils.BER
                                    ),
                                __utils.BER
                            )(value.entry, __utils.BER),
                            /* IF_ABSENT  */ value.targetSystem === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_AccessPoint,
                                      __utils.BER
                                  )(value.targetSystem, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            __utils.deepEq(
                                value.serviceControls,
                                AddEntryArgumentData._default_value_for_serviceControls
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_ServiceControls,
                                      __utils.BER
                                  )(value.serviceControls, __utils.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.requestor === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.requestor, __utils.BER),
                            /* IF_DEFAULT */ value.operationProgress ===
                                undefined ||
                            __utils.deepEq(
                                value.operationProgress,
                                AddEntryArgumentData._default_value_for_operationProgress
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () => _encode_OperationProgress,
                                      __utils.BER
                                  )(value.operationProgress, __utils.BER),
                            /* IF_ABSENT  */ value.aliasedRDNs === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      26,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.aliasedRDNs, __utils.BER),
                            /* IF_ABSENT  */ value.criticalExtensions ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      25,
                                      () => __utils._encodeBitString,
                                      __utils.BER
                                  )(value.criticalExtensions, __utils.BER),
                            /* IF_ABSENT  */ value.referenceType === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      24,
                                      () => _encode_ReferenceType,
                                      __utils.BER
                                  )(value.referenceType, __utils.BER),
                            /* IF_DEFAULT */ value.entryOnly === undefined ||
                            __utils.deepEq(
                                value.entryOnly,
                                AddEntryArgumentData._default_value_for_entryOnly
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      23,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.entryOnly, __utils.BER),
                            /* IF_ABSENT  */ value.exclusions === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      22,
                                      () => _encode_Exclusions,
                                      __utils.BER
                                  )(value.exclusions, __utils.BER),
                            /* IF_DEFAULT */ value.nameResolveOnMaster ===
                                undefined ||
                            __utils.deepEq(
                                value.nameResolveOnMaster,
                                AddEntryArgumentData._default_value_for_nameResolveOnMaster
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      21,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.nameResolveOnMaster, __utils.BER),
                            /* IF_ABSENT  */ value.operationContexts ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      20,
                                      () => _encode_ContextSelection,
                                      __utils.BER
                                  )(value.operationContexts, __utils.BER),
                            /* IF_DEFAULT */ value.familyGrouping ===
                                undefined ||
                            __utils.deepEq(
                                value.familyGrouping,
                                AddEntryArgumentData._default_value_for_familyGrouping
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      19,
                                      () => _encode_FamilyGrouping,
                                      __utils.BER
                                  )(value.familyGrouping, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AddEntryArgumentData(value, elGetter);
}

export type AddEntryArgument = OPTIONALLY_PROTECTED<AddEntryArgumentData>; // DefinedType
let _cached_decoder_for_AddEntryArgument: __utils.ASN1Decoder<
    AddEntryArgument
> | null = null;
let _cached_encoder_for_AddEntryArgument: __utils.ASN1Encoder<
    AddEntryArgument
> | null = null;
export function _decode_AddEntryArgument(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AddEntryArgument) {
        _cached_decoder_for_AddEntryArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            AddEntryArgumentData
        >(_decode_AddEntryArgumentData);
    }
    return _cached_decoder_for_AddEntryArgument(el);
}
export function _encode_AddEntryArgument(
    value: AddEntryArgument,
    elGetter: __utils.ASN1Encoder<AddEntryArgument>
) {
    if (!_cached_encoder_for_AddEntryArgument) {
        _cached_encoder_for_AddEntryArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            AddEntryArgumentData
        >(_encode_AddEntryArgumentData);
    }
    return _cached_encoder_for_AddEntryArgument(value, elGetter);
}

export class AddEntryResultData {
    constructor(
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_AddEntryResultData: __utils.ComponentSpec[] = [];
export const _root_component_type_list_2_spec_for_AddEntryResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_AddEntryResultData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AddEntryResultData: __utils.ASN1Decoder<
    AddEntryResultData
> | null = null;
let _cached_encoder_for_AddEntryResultData: __utils.ASN1Encoder<
    AddEntryResultData
> | null = null;
export function _decode_AddEntryResultData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AddEntryResultData) {
        _cached_decoder_for_AddEntryResultData = function (
            el: asn1.ASN1Element
        ): AddEntryResultData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                AddEntryResultData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AddEntryResultData,
                _extension_additions_list_spec_for_AddEntryResultData,
                _root_component_type_list_2_spec_for_AddEntryResultData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AddEntryResultData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_AddEntryResultData(el);
}
export function _encode_AddEntryResultData(
    value: AddEntryResultData,
    elGetter: __utils.ASN1Encoder<AddEntryResultData>
) {
    if (!_cached_encoder_for_AddEntryResultData) {
        _cached_encoder_for_AddEntryResultData = function (
            value: AddEntryResultData,
            elGetter: __utils.ASN1Encoder<AddEntryResultData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                AddEntryResultData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AddEntryResultData(value, elGetter);
}

export type AddEntryResult =
    | { null_: asn1.NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED_SEQ<AddEntryResultData>;
      } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_AddEntryResult: __utils.ASN1Decoder<
    AddEntryResult
> | null = null;
let _cached_encoder_for_AddEntryResult: __utils.ASN1Encoder<
    AddEntryResult
> | null = null;
export function _decode_AddEntryResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AddEntryResult) {
        _cached_decoder_for_AddEntryResult = __utils._decode_extensible_choice<
            AddEntryResult
        >({
            "UNIVERSAL 5": ["null_", __utils._decodeNull],
            "UNIVERSAL 16": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<AddEntryResultData>(
                    _decode_AddEntryResultData
                ),
            ],
            "CONTEXT 0": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<AddEntryResultData>(
                    _decode_AddEntryResultData
                ),
            ],
        });
    }
    return _cached_decoder_for_AddEntryResult(el);
}
export function _encode_AddEntryResult(
    value: AddEntryResult,
    elGetter: __utils.ASN1Encoder<AddEntryResult>
) {
    if (!_cached_encoder_for_AddEntryResult) {
        _cached_encoder_for_AddEntryResult = __utils._encode_choice<
            AddEntryResult
        >(
            {
                null_: __utils._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
                    AddEntryResultData
                >(_encode_AddEntryResultData),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_AddEntryResult(value, elGetter);
}

// TODO: ObjectAssignment: removeEntry

export class RemoveEntryArgumentData {
    constructor(
        readonly object: Name,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly serviceControls:
            | ServiceControls
            | undefined /* REPLICATED_COMPONENT */,
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly requestor:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationProgress:
            | OperationProgress
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasedRDNs:
            | asn1.INTEGER
            | undefined /* REPLICATED_COMPONENT */,
        readonly criticalExtensions:
            | asn1.BIT_STRING
            | undefined /* REPLICATED_COMPONENT */,
        readonly referenceType:
            | ReferenceType
            | undefined /* REPLICATED_COMPONENT */,
        readonly entryOnly: asn1.BOOLEAN | undefined /* REPLICATED_COMPONENT */,
        readonly exclusions: Exclusions | undefined /* REPLICATED_COMPONENT */,
        readonly nameResolveOnMaster:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationContexts:
            | ContextSelection
            | undefined /* REPLICATED_COMPONENT */,
        readonly familyGrouping:
            | FamilyGrouping
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_serviceControls() {
        return new ServiceControls(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        );
    }
    public static get _default_value_for_operationProgress() {
        return new OperationProgress(
            DistributedOperations.OperationProgress_nameResolutionPhase_notStarted,
            undefined
        );
    }
    public static get _default_value_for_entryOnly() {
        return true;
    }
    public static get _default_value_for_nameResolveOnMaster() {
        return false;
    }
    public static get _default_value_for_familyGrouping() {
        return FamilyGrouping_entryOnly;
    }
}
export const _root_component_type_list_1_spec_for_RemoveEntryArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "object",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RemoveEntryArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "serviceControls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "requestor",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationProgress",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasedRDNs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 26),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "criticalExtensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 25),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "referenceType",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entryOnly",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 23),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "exclusions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 22),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nameResolveOnMaster",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 21),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationContexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 20),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "familyGrouping",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 19),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_RemoveEntryArgumentData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RemoveEntryArgumentData: __utils.ASN1Decoder<
    RemoveEntryArgumentData
> | null = null;
let _cached_encoder_for_RemoveEntryArgumentData: __utils.ASN1Encoder<
    RemoveEntryArgumentData
> | null = null;
export function _decode_RemoveEntryArgumentData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RemoveEntryArgumentData) {
        _cached_decoder_for_RemoveEntryArgumentData = function (
            el: asn1.ASN1Element
        ): RemoveEntryArgumentData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let object!: Name;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let serviceControls: asn1.OPTIONAL<ServiceControls> =
                RemoveEntryArgumentData._default_value_for_serviceControls;
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let requestor: asn1.OPTIONAL<DistinguishedName>;
            let operationProgress: asn1.OPTIONAL<OperationProgress> =
                RemoveEntryArgumentData._default_value_for_operationProgress;
            let aliasedRDNs: asn1.OPTIONAL<asn1.INTEGER>;
            let criticalExtensions: asn1.OPTIONAL<asn1.BIT_STRING>;
            let referenceType: asn1.OPTIONAL<ReferenceType>;
            let entryOnly: asn1.OPTIONAL<asn1.BOOLEAN> =
                RemoveEntryArgumentData._default_value_for_entryOnly;
            let exclusions: asn1.OPTIONAL<Exclusions>;
            let nameResolveOnMaster: asn1.OPTIONAL<asn1.BOOLEAN> =
                RemoveEntryArgumentData._default_value_for_nameResolveOnMaster;
            let operationContexts: asn1.OPTIONAL<ContextSelection>;
            let familyGrouping: asn1.OPTIONAL<FamilyGrouping> =
                RemoveEntryArgumentData._default_value_for_familyGrouping;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                object: (_el: asn1.ASN1Element): void => {
                    object = __utils._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                serviceControls: (_el: asn1.ASN1Element): void => {
                    serviceControls = __utils._decode_explicit<ServiceControls>(
                        () => _decode_ServiceControls
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                requestor: (_el: asn1.ASN1Element): void => {
                    requestor = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                operationProgress: (_el: asn1.ASN1Element): void => {
                    operationProgress = __utils._decode_explicit<
                        OperationProgress
                    >(() => _decode_OperationProgress)(_el);
                },
                aliasedRDNs: (_el: asn1.ASN1Element): void => {
                    aliasedRDNs = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                criticalExtensions: (_el: asn1.ASN1Element): void => {
                    criticalExtensions = __utils._decode_explicit<
                        asn1.BIT_STRING
                    >(() => __utils._decodeBitString)(_el);
                },
                referenceType: (_el: asn1.ASN1Element): void => {
                    referenceType = __utils._decode_explicit<ReferenceType>(
                        () => _decode_ReferenceType
                    )(_el);
                },
                entryOnly: (_el: asn1.ASN1Element): void => {
                    entryOnly = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                exclusions: (_el: asn1.ASN1Element): void => {
                    exclusions = __utils._decode_explicit<Exclusions>(
                        () => _decode_Exclusions
                    )(_el);
                },
                nameResolveOnMaster: (_el: asn1.ASN1Element): void => {
                    nameResolveOnMaster = __utils._decode_explicit<
                        asn1.BOOLEAN
                    >(() => __utils._decodeBoolean)(_el);
                },
                operationContexts: (_el: asn1.ASN1Element): void => {
                    operationContexts = __utils._decode_explicit<
                        ContextSelection
                    >(() => _decode_ContextSelection)(_el);
                },
                familyGrouping: (_el: asn1.ASN1Element): void => {
                    familyGrouping = __utils._decode_explicit<FamilyGrouping>(
                        () => _decode_FamilyGrouping
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RemoveEntryArgumentData,
                _extension_additions_list_spec_for_RemoveEntryArgumentData,
                _root_component_type_list_2_spec_for_RemoveEntryArgumentData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RemoveEntryArgumentData(
                /* SET_CONSTRUCTOR_CALL */ object,
                _unrecognizedExtensionsList,
                serviceControls,
                securityParameters,
                requestor,
                operationProgress,
                aliasedRDNs,
                criticalExtensions,
                referenceType,
                entryOnly,
                exclusions,
                nameResolveOnMaster,
                operationContexts,
                familyGrouping
            );
        };
    }
    return _cached_decoder_for_RemoveEntryArgumentData(el);
}
export function _encode_RemoveEntryArgumentData(
    value: RemoveEntryArgumentData,
    elGetter: __utils.ASN1Encoder<RemoveEntryArgumentData>
) {
    if (!_cached_encoder_for_RemoveEntryArgumentData) {
        _cached_encoder_for_RemoveEntryArgumentData = function (
            value: RemoveEntryArgumentData,
            elGetter: __utils.ASN1Encoder<RemoveEntryArgumentData>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_Name,
                                __utils.BER
                            )(value.object, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            __utils.deepEq(
                                value.serviceControls,
                                RemoveEntryArgumentData._default_value_for_serviceControls
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_ServiceControls,
                                      __utils.BER
                                  )(value.serviceControls, __utils.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.requestor === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.requestor, __utils.BER),
                            /* IF_DEFAULT */ value.operationProgress ===
                                undefined ||
                            __utils.deepEq(
                                value.operationProgress,
                                RemoveEntryArgumentData._default_value_for_operationProgress
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () => _encode_OperationProgress,
                                      __utils.BER
                                  )(value.operationProgress, __utils.BER),
                            /* IF_ABSENT  */ value.aliasedRDNs === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      26,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.aliasedRDNs, __utils.BER),
                            /* IF_ABSENT  */ value.criticalExtensions ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      25,
                                      () => __utils._encodeBitString,
                                      __utils.BER
                                  )(value.criticalExtensions, __utils.BER),
                            /* IF_ABSENT  */ value.referenceType === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      24,
                                      () => _encode_ReferenceType,
                                      __utils.BER
                                  )(value.referenceType, __utils.BER),
                            /* IF_DEFAULT */ value.entryOnly === undefined ||
                            __utils.deepEq(
                                value.entryOnly,
                                RemoveEntryArgumentData._default_value_for_entryOnly
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      23,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.entryOnly, __utils.BER),
                            /* IF_ABSENT  */ value.exclusions === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      22,
                                      () => _encode_Exclusions,
                                      __utils.BER
                                  )(value.exclusions, __utils.BER),
                            /* IF_DEFAULT */ value.nameResolveOnMaster ===
                                undefined ||
                            __utils.deepEq(
                                value.nameResolveOnMaster,
                                RemoveEntryArgumentData._default_value_for_nameResolveOnMaster
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      21,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.nameResolveOnMaster, __utils.BER),
                            /* IF_ABSENT  */ value.operationContexts ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      20,
                                      () => _encode_ContextSelection,
                                      __utils.BER
                                  )(value.operationContexts, __utils.BER),
                            /* IF_DEFAULT */ value.familyGrouping ===
                                undefined ||
                            __utils.deepEq(
                                value.familyGrouping,
                                RemoveEntryArgumentData._default_value_for_familyGrouping
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      19,
                                      () => _encode_FamilyGrouping,
                                      __utils.BER
                                  )(value.familyGrouping, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_RemoveEntryArgumentData(value, elGetter);
}

export type RemoveEntryArgument = OPTIONALLY_PROTECTED<RemoveEntryArgumentData>; // DefinedType
let _cached_decoder_for_RemoveEntryArgument: __utils.ASN1Decoder<
    RemoveEntryArgument
> | null = null;
let _cached_encoder_for_RemoveEntryArgument: __utils.ASN1Encoder<
    RemoveEntryArgument
> | null = null;
export function _decode_RemoveEntryArgument(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RemoveEntryArgument) {
        _cached_decoder_for_RemoveEntryArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            RemoveEntryArgumentData
        >(_decode_RemoveEntryArgumentData);
    }
    return _cached_decoder_for_RemoveEntryArgument(el);
}
export function _encode_RemoveEntryArgument(
    value: RemoveEntryArgument,
    elGetter: __utils.ASN1Encoder<RemoveEntryArgument>
) {
    if (!_cached_encoder_for_RemoveEntryArgument) {
        _cached_encoder_for_RemoveEntryArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            RemoveEntryArgumentData
        >(_encode_RemoveEntryArgumentData);
    }
    return _cached_encoder_for_RemoveEntryArgument(value, elGetter);
}

export class RemoveEntryResultData {
    constructor(
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_RemoveEntryResultData: __utils.ComponentSpec[] = [];
export const _root_component_type_list_2_spec_for_RemoveEntryResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_RemoveEntryResultData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RemoveEntryResultData: __utils.ASN1Decoder<
    RemoveEntryResultData
> | null = null;
let _cached_encoder_for_RemoveEntryResultData: __utils.ASN1Encoder<
    RemoveEntryResultData
> | null = null;
export function _decode_RemoveEntryResultData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RemoveEntryResultData) {
        _cached_decoder_for_RemoveEntryResultData = function (
            el: asn1.ASN1Element
        ): RemoveEntryResultData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                RemoveEntryResultData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RemoveEntryResultData,
                _extension_additions_list_spec_for_RemoveEntryResultData,
                _root_component_type_list_2_spec_for_RemoveEntryResultData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RemoveEntryResultData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_RemoveEntryResultData(el);
}
export function _encode_RemoveEntryResultData(
    value: RemoveEntryResultData,
    elGetter: __utils.ASN1Encoder<RemoveEntryResultData>
) {
    if (!_cached_encoder_for_RemoveEntryResultData) {
        _cached_encoder_for_RemoveEntryResultData = function (
            value: RemoveEntryResultData,
            elGetter: __utils.ASN1Encoder<RemoveEntryResultData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                RemoveEntryResultData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_RemoveEntryResultData(value, elGetter);
}

export type RemoveEntryResult =
    | { null_: asn1.NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED_SEQ<RemoveEntryResultData>;
      } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_RemoveEntryResult: __utils.ASN1Decoder<
    RemoveEntryResult
> | null = null;
let _cached_encoder_for_RemoveEntryResult: __utils.ASN1Encoder<
    RemoveEntryResult
> | null = null;
export function _decode_RemoveEntryResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RemoveEntryResult) {
        _cached_decoder_for_RemoveEntryResult = __utils._decode_extensible_choice<
            RemoveEntryResult
        >({
            "UNIVERSAL 5": ["null_", __utils._decodeNull],
            "UNIVERSAL 16": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
                    RemoveEntryResultData
                >(_decode_RemoveEntryResultData),
            ],
            "CONTEXT 0": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
                    RemoveEntryResultData
                >(_decode_RemoveEntryResultData),
            ],
        });
    }
    return _cached_decoder_for_RemoveEntryResult(el);
}
export function _encode_RemoveEntryResult(
    value: RemoveEntryResult,
    elGetter: __utils.ASN1Encoder<RemoveEntryResult>
) {
    if (!_cached_encoder_for_RemoveEntryResult) {
        _cached_encoder_for_RemoveEntryResult = __utils._encode_choice<
            RemoveEntryResult
        >(
            {
                null_: __utils._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
                    RemoveEntryResultData
                >(_encode_RemoveEntryResultData),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_RemoveEntryResult(value, elGetter);
}

// TODO: ObjectAssignment: modifyEntry

export type EntryModification =
    | { addAttribute: Attribute } /* CHOICE_ALT_ROOT */
    | { removeAttribute: AttributeType } /* CHOICE_ALT_ROOT */
    | { addValues: Attribute } /* CHOICE_ALT_ROOT */
    | { removeValues: Attribute } /* CHOICE_ALT_ROOT */
    | { alterValues: AttributeTypeAndValue } /* CHOICE_ALT_ROOT */
    | { resetValue: AttributeType } /* CHOICE_ALT_ROOT */
    | { replaceValues: Attribute } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_EntryModification: __utils.ASN1Decoder<
    EntryModification
> | null = null;
let _cached_encoder_for_EntryModification: __utils.ASN1Encoder<
    EntryModification
> | null = null;
export function _decode_EntryModification(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EntryModification) {
        _cached_decoder_for_EntryModification = __utils._decode_extensible_choice<
            EntryModification
        >({
            "CONTEXT 0": [
                "addAttribute",
                __utils._decode_explicit<Attribute>(() => _decode_Attribute),
            ],
            "CONTEXT 1": [
                "removeAttribute",
                __utils._decode_explicit<AttributeType>(
                    () => _decode_AttributeType
                ),
            ],
            "CONTEXT 2": [
                "addValues",
                __utils._decode_explicit<Attribute>(() => _decode_Attribute),
            ],
            "CONTEXT 3": [
                "removeValues",
                __utils._decode_explicit<Attribute>(() => _decode_Attribute),
            ],
            "CONTEXT 4": [
                "alterValues",
                __utils._decode_explicit<AttributeTypeAndValue>(
                    () => _decode_AttributeTypeAndValue
                ),
            ],
            "CONTEXT 5": [
                "resetValue",
                __utils._decode_explicit<AttributeType>(
                    () => _decode_AttributeType
                ),
            ],
            "CONTEXT 6": [
                "replaceValues",
                __utils._decode_explicit<Attribute>(() => _decode_Attribute),
            ],
        });
    }
    return _cached_decoder_for_EntryModification(el);
}
export function _encode_EntryModification(
    value: EntryModification,
    elGetter: __utils.ASN1Encoder<EntryModification>
) {
    if (!_cached_encoder_for_EntryModification) {
        _cached_encoder_for_EntryModification = __utils._encode_choice<
            EntryModification
        >(
            {
                addAttribute: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_Attribute,
                    __utils.BER
                ),
                removeAttribute: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_AttributeType,
                    __utils.BER
                ),
                addValues: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () => _encode_Attribute,
                    __utils.BER
                ),
                removeValues: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    3,
                    () => _encode_Attribute,
                    __utils.BER
                ),
                alterValues: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    4,
                    () => _encode_AttributeTypeAndValue,
                    __utils.BER
                ),
                resetValue: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    5,
                    () => _encode_AttributeType,
                    __utils.BER
                ),
                replaceValues: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    6,
                    () => _encode_Attribute,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_EntryModification(value, elGetter);
}

export class ModifyEntryArgumentData {
    constructor(
        readonly object: Name,
        readonly changes: EntryModification[],
        readonly selection: EntryInformationSelection | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly serviceControls:
            | ServiceControls
            | undefined /* REPLICATED_COMPONENT */,
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly requestor:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationProgress:
            | OperationProgress
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasedRDNs:
            | asn1.INTEGER
            | undefined /* REPLICATED_COMPONENT */,
        readonly criticalExtensions:
            | asn1.BIT_STRING
            | undefined /* REPLICATED_COMPONENT */,
        readonly referenceType:
            | ReferenceType
            | undefined /* REPLICATED_COMPONENT */,
        readonly entryOnly: asn1.BOOLEAN | undefined /* REPLICATED_COMPONENT */,
        readonly exclusions: Exclusions | undefined /* REPLICATED_COMPONENT */,
        readonly nameResolveOnMaster:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationContexts:
            | ContextSelection
            | undefined /* REPLICATED_COMPONENT */,
        readonly familyGrouping:
            | FamilyGrouping
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_serviceControls() {
        return new ServiceControls(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        );
    }
    public static get _default_value_for_operationProgress() {
        return new OperationProgress(
            DistributedOperations.OperationProgress_nameResolutionPhase_notStarted,
            undefined
        );
    }
    public static get _default_value_for_entryOnly() {
        return true;
    }
    public static get _default_value_for_nameResolveOnMaster() {
        return false;
    }
    public static get _default_value_for_familyGrouping() {
        return FamilyGrouping_entryOnly;
    }
}
export const _root_component_type_list_1_spec_for_ModifyEntryArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "object",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "changes",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "selection",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ModifyEntryArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "serviceControls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "requestor",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationProgress",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasedRDNs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 26),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "criticalExtensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 25),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "referenceType",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entryOnly",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 23),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "exclusions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 22),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nameResolveOnMaster",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 21),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationContexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 20),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "familyGrouping",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 19),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_ModifyEntryArgumentData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ModifyEntryArgumentData: __utils.ASN1Decoder<
    ModifyEntryArgumentData
> | null = null;
let _cached_encoder_for_ModifyEntryArgumentData: __utils.ASN1Encoder<
    ModifyEntryArgumentData
> | null = null;
export function _decode_ModifyEntryArgumentData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ModifyEntryArgumentData) {
        _cached_decoder_for_ModifyEntryArgumentData = function (
            el: asn1.ASN1Element
        ): ModifyEntryArgumentData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let object!: Name;
            let changes!: EntryModification[];
            let selection: asn1.OPTIONAL<EntryInformationSelection>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let serviceControls: asn1.OPTIONAL<ServiceControls> =
                ModifyEntryArgumentData._default_value_for_serviceControls;
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let requestor: asn1.OPTIONAL<DistinguishedName>;
            let operationProgress: asn1.OPTIONAL<OperationProgress> =
                ModifyEntryArgumentData._default_value_for_operationProgress;
            let aliasedRDNs: asn1.OPTIONAL<asn1.INTEGER>;
            let criticalExtensions: asn1.OPTIONAL<asn1.BIT_STRING>;
            let referenceType: asn1.OPTIONAL<ReferenceType>;
            let entryOnly: asn1.OPTIONAL<asn1.BOOLEAN> =
                ModifyEntryArgumentData._default_value_for_entryOnly;
            let exclusions: asn1.OPTIONAL<Exclusions>;
            let nameResolveOnMaster: asn1.OPTIONAL<asn1.BOOLEAN> =
                ModifyEntryArgumentData._default_value_for_nameResolveOnMaster;
            let operationContexts: asn1.OPTIONAL<ContextSelection>;
            let familyGrouping: asn1.OPTIONAL<FamilyGrouping> =
                ModifyEntryArgumentData._default_value_for_familyGrouping;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                object: (_el: asn1.ASN1Element): void => {
                    object = __utils._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                changes: (_el: asn1.ASN1Element): void => {
                    changes = __utils._decode_explicit<EntryModification[]>(
                        () =>
                            __utils._decodeSequenceOf<EntryModification>(
                                () => _decode_EntryModification
                            )
                    )(_el);
                },
                selection: (_el: asn1.ASN1Element): void => {
                    selection = __utils._decode_explicit<
                        EntryInformationSelection
                    >(() => _decode_EntryInformationSelection)(_el);
                },
                serviceControls: (_el: asn1.ASN1Element): void => {
                    serviceControls = __utils._decode_explicit<ServiceControls>(
                        () => _decode_ServiceControls
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                requestor: (_el: asn1.ASN1Element): void => {
                    requestor = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                operationProgress: (_el: asn1.ASN1Element): void => {
                    operationProgress = __utils._decode_explicit<
                        OperationProgress
                    >(() => _decode_OperationProgress)(_el);
                },
                aliasedRDNs: (_el: asn1.ASN1Element): void => {
                    aliasedRDNs = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                criticalExtensions: (_el: asn1.ASN1Element): void => {
                    criticalExtensions = __utils._decode_explicit<
                        asn1.BIT_STRING
                    >(() => __utils._decodeBitString)(_el);
                },
                referenceType: (_el: asn1.ASN1Element): void => {
                    referenceType = __utils._decode_explicit<ReferenceType>(
                        () => _decode_ReferenceType
                    )(_el);
                },
                entryOnly: (_el: asn1.ASN1Element): void => {
                    entryOnly = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                exclusions: (_el: asn1.ASN1Element): void => {
                    exclusions = __utils._decode_explicit<Exclusions>(
                        () => _decode_Exclusions
                    )(_el);
                },
                nameResolveOnMaster: (_el: asn1.ASN1Element): void => {
                    nameResolveOnMaster = __utils._decode_explicit<
                        asn1.BOOLEAN
                    >(() => __utils._decodeBoolean)(_el);
                },
                operationContexts: (_el: asn1.ASN1Element): void => {
                    operationContexts = __utils._decode_explicit<
                        ContextSelection
                    >(() => _decode_ContextSelection)(_el);
                },
                familyGrouping: (_el: asn1.ASN1Element): void => {
                    familyGrouping = __utils._decode_explicit<FamilyGrouping>(
                        () => _decode_FamilyGrouping
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ModifyEntryArgumentData,
                _extension_additions_list_spec_for_ModifyEntryArgumentData,
                _root_component_type_list_2_spec_for_ModifyEntryArgumentData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ModifyEntryArgumentData(
                /* SET_CONSTRUCTOR_CALL */ object,
                changes,
                selection,
                _unrecognizedExtensionsList,
                serviceControls,
                securityParameters,
                requestor,
                operationProgress,
                aliasedRDNs,
                criticalExtensions,
                referenceType,
                entryOnly,
                exclusions,
                nameResolveOnMaster,
                operationContexts,
                familyGrouping
            );
        };
    }
    return _cached_decoder_for_ModifyEntryArgumentData(el);
}
export function _encode_ModifyEntryArgumentData(
    value: ModifyEntryArgumentData,
    elGetter: __utils.ASN1Encoder<ModifyEntryArgumentData>
) {
    if (!_cached_encoder_for_ModifyEntryArgumentData) {
        _cached_encoder_for_ModifyEntryArgumentData = function (
            value: ModifyEntryArgumentData,
            elGetter: __utils.ASN1Encoder<ModifyEntryArgumentData>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_Name,
                                __utils.BER
                            )(value.object, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () =>
                                    __utils._encodeSequenceOf<
                                        EntryModification
                                    >(
                                        () => _encode_EntryModification,
                                        __utils.BER
                                    ),
                                __utils.BER
                            )(value.changes, __utils.BER),
                            /* IF_ABSENT  */ value.selection === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_EntryInformationSelection,
                                      __utils.BER
                                  )(value.selection, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            __utils.deepEq(
                                value.serviceControls,
                                ModifyEntryArgumentData._default_value_for_serviceControls
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_ServiceControls,
                                      __utils.BER
                                  )(value.serviceControls, __utils.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.requestor === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.requestor, __utils.BER),
                            /* IF_DEFAULT */ value.operationProgress ===
                                undefined ||
                            __utils.deepEq(
                                value.operationProgress,
                                ModifyEntryArgumentData._default_value_for_operationProgress
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () => _encode_OperationProgress,
                                      __utils.BER
                                  )(value.operationProgress, __utils.BER),
                            /* IF_ABSENT  */ value.aliasedRDNs === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      26,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.aliasedRDNs, __utils.BER),
                            /* IF_ABSENT  */ value.criticalExtensions ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      25,
                                      () => __utils._encodeBitString,
                                      __utils.BER
                                  )(value.criticalExtensions, __utils.BER),
                            /* IF_ABSENT  */ value.referenceType === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      24,
                                      () => _encode_ReferenceType,
                                      __utils.BER
                                  )(value.referenceType, __utils.BER),
                            /* IF_DEFAULT */ value.entryOnly === undefined ||
                            __utils.deepEq(
                                value.entryOnly,
                                ModifyEntryArgumentData._default_value_for_entryOnly
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      23,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.entryOnly, __utils.BER),
                            /* IF_ABSENT  */ value.exclusions === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      22,
                                      () => _encode_Exclusions,
                                      __utils.BER
                                  )(value.exclusions, __utils.BER),
                            /* IF_DEFAULT */ value.nameResolveOnMaster ===
                                undefined ||
                            __utils.deepEq(
                                value.nameResolveOnMaster,
                                ModifyEntryArgumentData._default_value_for_nameResolveOnMaster
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      21,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.nameResolveOnMaster, __utils.BER),
                            /* IF_ABSENT  */ value.operationContexts ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      20,
                                      () => _encode_ContextSelection,
                                      __utils.BER
                                  )(value.operationContexts, __utils.BER),
                            /* IF_DEFAULT */ value.familyGrouping ===
                                undefined ||
                            __utils.deepEq(
                                value.familyGrouping,
                                ModifyEntryArgumentData._default_value_for_familyGrouping
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      19,
                                      () => _encode_FamilyGrouping,
                                      __utils.BER
                                  )(value.familyGrouping, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ModifyEntryArgumentData(value, elGetter);
}

export type ModifyEntryArgument = OPTIONALLY_PROTECTED<ModifyEntryArgumentData>; // DefinedType
let _cached_decoder_for_ModifyEntryArgument: __utils.ASN1Decoder<
    ModifyEntryArgument
> | null = null;
let _cached_encoder_for_ModifyEntryArgument: __utils.ASN1Encoder<
    ModifyEntryArgument
> | null = null;
export function _decode_ModifyEntryArgument(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ModifyEntryArgument) {
        _cached_decoder_for_ModifyEntryArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            ModifyEntryArgumentData
        >(_decode_ModifyEntryArgumentData);
    }
    return _cached_decoder_for_ModifyEntryArgument(el);
}
export function _encode_ModifyEntryArgument(
    value: ModifyEntryArgument,
    elGetter: __utils.ASN1Encoder<ModifyEntryArgument>
) {
    if (!_cached_encoder_for_ModifyEntryArgument) {
        _cached_encoder_for_ModifyEntryArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            ModifyEntryArgumentData
        >(_encode_ModifyEntryArgumentData);
    }
    return _cached_encoder_for_ModifyEntryArgument(value, elGetter);
}

export class ModifyEntryResultData {
    constructor(
        readonly entry: EntryInformation | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_ModifyEntryResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "entry",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ModifyEntryResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_ModifyEntryResultData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ModifyEntryResultData: __utils.ASN1Decoder<
    ModifyEntryResultData
> | null = null;
let _cached_encoder_for_ModifyEntryResultData: __utils.ASN1Encoder<
    ModifyEntryResultData
> | null = null;
export function _decode_ModifyEntryResultData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ModifyEntryResultData) {
        _cached_decoder_for_ModifyEntryResultData = function (
            el: asn1.ASN1Element
        ): ModifyEntryResultData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let entry: asn1.OPTIONAL<EntryInformation>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                ModifyEntryResultData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                entry: (_el: asn1.ASN1Element): void => {
                    entry = __utils._decode_explicit<EntryInformation>(
                        () => _decode_EntryInformation
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ModifyEntryResultData,
                _extension_additions_list_spec_for_ModifyEntryResultData,
                _root_component_type_list_2_spec_for_ModifyEntryResultData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ModifyEntryResultData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ entry,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_ModifyEntryResultData(el);
}
export function _encode_ModifyEntryResultData(
    value: ModifyEntryResultData,
    elGetter: __utils.ASN1Encoder<ModifyEntryResultData>
) {
    if (!_cached_encoder_for_ModifyEntryResultData) {
        _cached_encoder_for_ModifyEntryResultData = function (
            value: ModifyEntryResultData,
            elGetter: __utils.ASN1Encoder<ModifyEntryResultData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.entry === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_EntryInformation,
                                      __utils.BER
                                  )(value.entry, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                ModifyEntryResultData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ModifyEntryResultData(value, elGetter);
}

export type ModifyEntryResult =
    | { null_: asn1.NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED_SEQ<ModifyEntryResultData>;
      } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ModifyEntryResult: __utils.ASN1Decoder<
    ModifyEntryResult
> | null = null;
let _cached_encoder_for_ModifyEntryResult: __utils.ASN1Encoder<
    ModifyEntryResult
> | null = null;
export function _decode_ModifyEntryResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ModifyEntryResult) {
        _cached_decoder_for_ModifyEntryResult = __utils._decode_extensible_choice<
            ModifyEntryResult
        >({
            "UNIVERSAL 5": ["null_", __utils._decodeNull],
            "UNIVERSAL 16": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
                    ModifyEntryResultData
                >(_decode_ModifyEntryResultData),
            ],
            "CONTEXT 0": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
                    ModifyEntryResultData
                >(_decode_ModifyEntryResultData),
            ],
        });
    }
    return _cached_decoder_for_ModifyEntryResult(el);
}
export function _encode_ModifyEntryResult(
    value: ModifyEntryResult,
    elGetter: __utils.ASN1Encoder<ModifyEntryResult>
) {
    if (!_cached_encoder_for_ModifyEntryResult) {
        _cached_encoder_for_ModifyEntryResult = __utils._encode_choice<
            ModifyEntryResult
        >(
            {
                null_: __utils._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
                    ModifyEntryResultData
                >(_encode_ModifyEntryResultData),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ModifyEntryResult(value, elGetter);
}

// TODO: ObjectAssignment: modifyDN

export class ModifyDNArgumentData {
    constructor(
        readonly object: DistinguishedName,
        readonly newRDN: RelativeDistinguishedName,
        readonly deleteOldRDN: asn1.BOOLEAN | undefined,
        readonly newSuperior: DistinguishedName | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly serviceControls:
            | ServiceControls
            | undefined /* REPLICATED_COMPONENT */,
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly requestor:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationProgress:
            | OperationProgress
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasedRDNs:
            | asn1.INTEGER
            | undefined /* REPLICATED_COMPONENT */,
        readonly criticalExtensions:
            | asn1.BIT_STRING
            | undefined /* REPLICATED_COMPONENT */,
        readonly referenceType:
            | ReferenceType
            | undefined /* REPLICATED_COMPONENT */,
        readonly entryOnly: asn1.BOOLEAN | undefined /* REPLICATED_COMPONENT */,
        readonly exclusions: Exclusions | undefined /* REPLICATED_COMPONENT */,
        readonly nameResolveOnMaster:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationContexts:
            | ContextSelection
            | undefined /* REPLICATED_COMPONENT */,
        readonly familyGrouping:
            | FamilyGrouping
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_deleteOldRDN() {
        return false;
    }
    public static get _default_value_for_serviceControls() {
        return new ServiceControls(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        );
    }
    public static get _default_value_for_operationProgress() {
        return new OperationProgress(
            DistributedOperations.OperationProgress_nameResolutionPhase_notStarted,
            undefined
        );
    }
    public static get _default_value_for_entryOnly() {
        return true;
    }
    public static get _default_value_for_nameResolveOnMaster() {
        return false;
    }
    public static get _default_value_for_familyGrouping() {
        return FamilyGrouping_entryOnly;
    }
}
export const _root_component_type_list_1_spec_for_ModifyDNArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "object",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "newRDN",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "deleteOldRDN",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "newSuperior",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ModifyDNArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "serviceControls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "requestor",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationProgress",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasedRDNs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 26),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "criticalExtensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 25),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "referenceType",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entryOnly",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 23),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "exclusions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 22),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nameResolveOnMaster",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 21),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationContexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 20),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "familyGrouping",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 19),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_ModifyDNArgumentData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ModifyDNArgumentData: __utils.ASN1Decoder<
    ModifyDNArgumentData
> | null = null;
let _cached_encoder_for_ModifyDNArgumentData: __utils.ASN1Encoder<
    ModifyDNArgumentData
> | null = null;
export function _decode_ModifyDNArgumentData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ModifyDNArgumentData) {
        _cached_decoder_for_ModifyDNArgumentData = function (
            el: asn1.ASN1Element
        ): ModifyDNArgumentData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let object!: DistinguishedName;
            let newRDN!: RelativeDistinguishedName;
            let deleteOldRDN: asn1.OPTIONAL<asn1.BOOLEAN> =
                ModifyDNArgumentData._default_value_for_deleteOldRDN;
            let newSuperior: asn1.OPTIONAL<DistinguishedName>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let serviceControls: asn1.OPTIONAL<ServiceControls> =
                ModifyDNArgumentData._default_value_for_serviceControls;
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let requestor: asn1.OPTIONAL<DistinguishedName>;
            let operationProgress: asn1.OPTIONAL<OperationProgress> =
                ModifyDNArgumentData._default_value_for_operationProgress;
            let aliasedRDNs: asn1.OPTIONAL<asn1.INTEGER>;
            let criticalExtensions: asn1.OPTIONAL<asn1.BIT_STRING>;
            let referenceType: asn1.OPTIONAL<ReferenceType>;
            let entryOnly: asn1.OPTIONAL<asn1.BOOLEAN> =
                ModifyDNArgumentData._default_value_for_entryOnly;
            let exclusions: asn1.OPTIONAL<Exclusions>;
            let nameResolveOnMaster: asn1.OPTIONAL<asn1.BOOLEAN> =
                ModifyDNArgumentData._default_value_for_nameResolveOnMaster;
            let operationContexts: asn1.OPTIONAL<ContextSelection>;
            let familyGrouping: asn1.OPTIONAL<FamilyGrouping> =
                ModifyDNArgumentData._default_value_for_familyGrouping;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                object: (_el: asn1.ASN1Element): void => {
                    object = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                newRDN: (_el: asn1.ASN1Element): void => {
                    newRDN = __utils._decode_explicit<
                        RelativeDistinguishedName
                    >(() => _decode_RelativeDistinguishedName)(_el);
                },
                deleteOldRDN: (_el: asn1.ASN1Element): void => {
                    deleteOldRDN = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                newSuperior: (_el: asn1.ASN1Element): void => {
                    newSuperior = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                serviceControls: (_el: asn1.ASN1Element): void => {
                    serviceControls = __utils._decode_explicit<ServiceControls>(
                        () => _decode_ServiceControls
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                requestor: (_el: asn1.ASN1Element): void => {
                    requestor = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                operationProgress: (_el: asn1.ASN1Element): void => {
                    operationProgress = __utils._decode_explicit<
                        OperationProgress
                    >(() => _decode_OperationProgress)(_el);
                },
                aliasedRDNs: (_el: asn1.ASN1Element): void => {
                    aliasedRDNs = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                criticalExtensions: (_el: asn1.ASN1Element): void => {
                    criticalExtensions = __utils._decode_explicit<
                        asn1.BIT_STRING
                    >(() => __utils._decodeBitString)(_el);
                },
                referenceType: (_el: asn1.ASN1Element): void => {
                    referenceType = __utils._decode_explicit<ReferenceType>(
                        () => _decode_ReferenceType
                    )(_el);
                },
                entryOnly: (_el: asn1.ASN1Element): void => {
                    entryOnly = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                exclusions: (_el: asn1.ASN1Element): void => {
                    exclusions = __utils._decode_explicit<Exclusions>(
                        () => _decode_Exclusions
                    )(_el);
                },
                nameResolveOnMaster: (_el: asn1.ASN1Element): void => {
                    nameResolveOnMaster = __utils._decode_explicit<
                        asn1.BOOLEAN
                    >(() => __utils._decodeBoolean)(_el);
                },
                operationContexts: (_el: asn1.ASN1Element): void => {
                    operationContexts = __utils._decode_explicit<
                        ContextSelection
                    >(() => _decode_ContextSelection)(_el);
                },
                familyGrouping: (_el: asn1.ASN1Element): void => {
                    familyGrouping = __utils._decode_explicit<FamilyGrouping>(
                        () => _decode_FamilyGrouping
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ModifyDNArgumentData,
                _extension_additions_list_spec_for_ModifyDNArgumentData,
                _root_component_type_list_2_spec_for_ModifyDNArgumentData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ModifyDNArgumentData(
                /* SET_CONSTRUCTOR_CALL */ object,
                newRDN,
                deleteOldRDN,
                newSuperior,
                _unrecognizedExtensionsList,
                serviceControls,
                securityParameters,
                requestor,
                operationProgress,
                aliasedRDNs,
                criticalExtensions,
                referenceType,
                entryOnly,
                exclusions,
                nameResolveOnMaster,
                operationContexts,
                familyGrouping
            );
        };
    }
    return _cached_decoder_for_ModifyDNArgumentData(el);
}
export function _encode_ModifyDNArgumentData(
    value: ModifyDNArgumentData,
    elGetter: __utils.ASN1Encoder<ModifyDNArgumentData>
) {
    if (!_cached_encoder_for_ModifyDNArgumentData) {
        _cached_encoder_for_ModifyDNArgumentData = function (
            value: ModifyDNArgumentData,
            elGetter: __utils.ASN1Encoder<ModifyDNArgumentData>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_DistinguishedName,
                                __utils.BER
                            )(value.object, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () => _encode_RelativeDistinguishedName,
                                __utils.BER
                            )(value.newRDN, __utils.BER),
                            /* IF_DEFAULT */ value.deleteOldRDN === undefined ||
                            __utils.deepEq(
                                value.deleteOldRDN,
                                ModifyDNArgumentData._default_value_for_deleteOldRDN
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.deleteOldRDN, __utils.BER),
                            /* IF_ABSENT  */ value.newSuperior === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.newSuperior, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            __utils.deepEq(
                                value.serviceControls,
                                ModifyDNArgumentData._default_value_for_serviceControls
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_ServiceControls,
                                      __utils.BER
                                  )(value.serviceControls, __utils.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.requestor === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.requestor, __utils.BER),
                            /* IF_DEFAULT */ value.operationProgress ===
                                undefined ||
                            __utils.deepEq(
                                value.operationProgress,
                                ModifyDNArgumentData._default_value_for_operationProgress
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () => _encode_OperationProgress,
                                      __utils.BER
                                  )(value.operationProgress, __utils.BER),
                            /* IF_ABSENT  */ value.aliasedRDNs === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      26,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.aliasedRDNs, __utils.BER),
                            /* IF_ABSENT  */ value.criticalExtensions ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      25,
                                      () => __utils._encodeBitString,
                                      __utils.BER
                                  )(value.criticalExtensions, __utils.BER),
                            /* IF_ABSENT  */ value.referenceType === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      24,
                                      () => _encode_ReferenceType,
                                      __utils.BER
                                  )(value.referenceType, __utils.BER),
                            /* IF_DEFAULT */ value.entryOnly === undefined ||
                            __utils.deepEq(
                                value.entryOnly,
                                ModifyDNArgumentData._default_value_for_entryOnly
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      23,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.entryOnly, __utils.BER),
                            /* IF_ABSENT  */ value.exclusions === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      22,
                                      () => _encode_Exclusions,
                                      __utils.BER
                                  )(value.exclusions, __utils.BER),
                            /* IF_DEFAULT */ value.nameResolveOnMaster ===
                                undefined ||
                            __utils.deepEq(
                                value.nameResolveOnMaster,
                                ModifyDNArgumentData._default_value_for_nameResolveOnMaster
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      21,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.nameResolveOnMaster, __utils.BER),
                            /* IF_ABSENT  */ value.operationContexts ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      20,
                                      () => _encode_ContextSelection,
                                      __utils.BER
                                  )(value.operationContexts, __utils.BER),
                            /* IF_DEFAULT */ value.familyGrouping ===
                                undefined ||
                            __utils.deepEq(
                                value.familyGrouping,
                                ModifyDNArgumentData._default_value_for_familyGrouping
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      19,
                                      () => _encode_FamilyGrouping,
                                      __utils.BER
                                  )(value.familyGrouping, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ModifyDNArgumentData(value, elGetter);
}

export type ModifyDNArgument = OPTIONALLY_PROTECTED<ModifyDNArgumentData>; // DefinedType
let _cached_decoder_for_ModifyDNArgument: __utils.ASN1Decoder<
    ModifyDNArgument
> | null = null;
let _cached_encoder_for_ModifyDNArgument: __utils.ASN1Encoder<
    ModifyDNArgument
> | null = null;
export function _decode_ModifyDNArgument(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ModifyDNArgument) {
        _cached_decoder_for_ModifyDNArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            ModifyDNArgumentData
        >(_decode_ModifyDNArgumentData);
    }
    return _cached_decoder_for_ModifyDNArgument(el);
}
export function _encode_ModifyDNArgument(
    value: ModifyDNArgument,
    elGetter: __utils.ASN1Encoder<ModifyDNArgument>
) {
    if (!_cached_encoder_for_ModifyDNArgument) {
        _cached_encoder_for_ModifyDNArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            ModifyDNArgumentData
        >(_encode_ModifyDNArgumentData);
    }
    return _cached_encoder_for_ModifyDNArgument(value, elGetter);
}

export class ModifyDNResultData {
    constructor(
        readonly newRDN: RelativeDistinguishedName,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_ModifyDNResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "newRDN",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ModifyDNResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_ModifyDNResultData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ModifyDNResultData: __utils.ASN1Decoder<
    ModifyDNResultData
> | null = null;
let _cached_encoder_for_ModifyDNResultData: __utils.ASN1Encoder<
    ModifyDNResultData
> | null = null;
export function _decode_ModifyDNResultData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ModifyDNResultData) {
        _cached_decoder_for_ModifyDNResultData = function (
            el: asn1.ASN1Element
        ): ModifyDNResultData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let newRDN!: RelativeDistinguishedName;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                ModifyDNResultData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                newRDN: (_el: asn1.ASN1Element): void => {
                    newRDN = _decode_RelativeDistinguishedName(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ModifyDNResultData,
                _extension_additions_list_spec_for_ModifyDNResultData,
                _root_component_type_list_2_spec_for_ModifyDNResultData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ModifyDNResultData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ newRDN,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_ModifyDNResultData(el);
}
export function _encode_ModifyDNResultData(
    value: ModifyDNResultData,
    elGetter: __utils.ASN1Encoder<ModifyDNResultData>
) {
    if (!_cached_encoder_for_ModifyDNResultData) {
        _cached_encoder_for_ModifyDNResultData = function (
            value: ModifyDNResultData,
            elGetter: __utils.ASN1Encoder<ModifyDNResultData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_RelativeDistinguishedName(
                                value.newRDN,
                                __utils.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                ModifyDNResultData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ModifyDNResultData(value, elGetter);
}

export type ModifyDNResult =
    | { null_: asn1.NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED_SEQ<ModifyDNResultData>;
      } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ModifyDNResult: __utils.ASN1Decoder<
    ModifyDNResult
> | null = null;
let _cached_encoder_for_ModifyDNResult: __utils.ASN1Encoder<
    ModifyDNResult
> | null = null;
export function _decode_ModifyDNResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ModifyDNResult) {
        _cached_decoder_for_ModifyDNResult = __utils._decode_extensible_choice<
            ModifyDNResult
        >({
            "UNIVERSAL 5": ["null_", __utils._decodeNull],
            "UNIVERSAL 16": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<ModifyDNResultData>(
                    _decode_ModifyDNResultData
                ),
            ],
            "CONTEXT 0": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<ModifyDNResultData>(
                    _decode_ModifyDNResultData
                ),
            ],
        });
    }
    return _cached_decoder_for_ModifyDNResult(el);
}
export function _encode_ModifyDNResult(
    value: ModifyDNResult,
    elGetter: __utils.ASN1Encoder<ModifyDNResult>
) {
    if (!_cached_encoder_for_ModifyDNResult) {
        _cached_encoder_for_ModifyDNResult = __utils._encode_choice<
            ModifyDNResult
        >(
            {
                null_: __utils._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
                    ModifyDNResultData
                >(_encode_ModifyDNResultData),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ModifyDNResult(value, elGetter);
}

// TODO: ObjectAssignment: changePassword

export class ChangePasswordArgumentData {
    constructor(
        readonly object: DistinguishedName,
        readonly oldPwd: UserPwd,
        readonly newPwd: UserPwd,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ChangePasswordArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "object",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "oldPwd",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "newPwd",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ChangePasswordArgumentData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ChangePasswordArgumentData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ChangePasswordArgumentData: __utils.ASN1Decoder<
    ChangePasswordArgumentData
> | null = null;
let _cached_encoder_for_ChangePasswordArgumentData: __utils.ASN1Encoder<
    ChangePasswordArgumentData
> | null = null;
export function _decode_ChangePasswordArgumentData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ChangePasswordArgumentData) {
        _cached_decoder_for_ChangePasswordArgumentData = function (
            el: asn1.ASN1Element
        ): ChangePasswordArgumentData {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "ChangePasswordArgumentData contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "object";
            sequence[1].name = "oldPwd";
            sequence[2].name = "newPwd";
            let object!: DistinguishedName;
            let oldPwd!: UserPwd;
            let newPwd!: UserPwd;
            object = __utils._decode_explicit<DistinguishedName>(
                () => _decode_DistinguishedName
            )(sequence[0]);
            oldPwd = __utils._decode_explicit<UserPwd>(() => _decode_UserPwd)(
                sequence[1]
            );
            newPwd = __utils._decode_explicit<UserPwd>(() => _decode_UserPwd)(
                sequence[2]
            );
            // TODO: Validate values.
            return new ChangePasswordArgumentData(
                object,
                oldPwd,
                newPwd,
                sequence.slice(3)
            );
        };
    }
    return _cached_decoder_for_ChangePasswordArgumentData(el);
}
export function _encode_ChangePasswordArgumentData(
    value: ChangePasswordArgumentData,
    elGetter: __utils.ASN1Encoder<ChangePasswordArgumentData>
) {
    if (!_cached_encoder_for_ChangePasswordArgumentData) {
        _cached_encoder_for_ChangePasswordArgumentData = function (
            value: ChangePasswordArgumentData,
            elGetter: __utils.ASN1Encoder<ChangePasswordArgumentData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_DistinguishedName,
                                __utils.BER
                            )(value.object, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () => _encode_UserPwd,
                                __utils.BER
                            )(value.oldPwd, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                2,
                                () => _encode_UserPwd,
                                __utils.BER
                            )(value.newPwd, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ChangePasswordArgumentData(value, elGetter);
}

export type ChangePasswordArgument = OPTIONALLY_PROTECTED_SEQ<
    ChangePasswordArgumentData
>; // DefinedType
let _cached_decoder_for_ChangePasswordArgument: __utils.ASN1Decoder<
    ChangePasswordArgument
> | null = null;
let _cached_encoder_for_ChangePasswordArgument: __utils.ASN1Encoder<
    ChangePasswordArgument
> | null = null;
export function _decode_ChangePasswordArgument(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ChangePasswordArgument) {
        _cached_decoder_for_ChangePasswordArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
            ChangePasswordArgumentData
        >(_decode_ChangePasswordArgumentData);
    }
    return _cached_decoder_for_ChangePasswordArgument(el);
}
export function _encode_ChangePasswordArgument(
    value: ChangePasswordArgument,
    elGetter: __utils.ASN1Encoder<ChangePasswordArgument>
) {
    if (!_cached_encoder_for_ChangePasswordArgument) {
        _cached_encoder_for_ChangePasswordArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
            ChangePasswordArgumentData
        >(_encode_ChangePasswordArgumentData);
    }
    return _cached_encoder_for_ChangePasswordArgument(value, elGetter);
}

export class ChangePasswordResultData {
    constructor(
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_ChangePasswordResultData: __utils.ComponentSpec[] = [];
export const _root_component_type_list_2_spec_for_ChangePasswordResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_ChangePasswordResultData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ChangePasswordResultData: __utils.ASN1Decoder<
    ChangePasswordResultData
> | null = null;
let _cached_encoder_for_ChangePasswordResultData: __utils.ASN1Encoder<
    ChangePasswordResultData
> | null = null;
export function _decode_ChangePasswordResultData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ChangePasswordResultData) {
        _cached_decoder_for_ChangePasswordResultData = function (
            el: asn1.ASN1Element
        ): ChangePasswordResultData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                ChangePasswordResultData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ChangePasswordResultData,
                _extension_additions_list_spec_for_ChangePasswordResultData,
                _root_component_type_list_2_spec_for_ChangePasswordResultData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ChangePasswordResultData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_ChangePasswordResultData(el);
}
export function _encode_ChangePasswordResultData(
    value: ChangePasswordResultData,
    elGetter: __utils.ASN1Encoder<ChangePasswordResultData>
) {
    if (!_cached_encoder_for_ChangePasswordResultData) {
        _cached_encoder_for_ChangePasswordResultData = function (
            value: ChangePasswordResultData,
            elGetter: __utils.ASN1Encoder<ChangePasswordResultData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                ChangePasswordResultData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ChangePasswordResultData(value, elGetter);
}

export type ChangePasswordResult =
    | { null_: asn1.NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED_SEQ<ChangePasswordResultData>;
      } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ChangePasswordResult: __utils.ASN1Decoder<
    ChangePasswordResult
> | null = null;
let _cached_encoder_for_ChangePasswordResult: __utils.ASN1Encoder<
    ChangePasswordResult
> | null = null;
export function _decode_ChangePasswordResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ChangePasswordResult) {
        _cached_decoder_for_ChangePasswordResult = __utils._decode_extensible_choice<
            ChangePasswordResult
        >({
            "UNIVERSAL 5": ["null_", __utils._decodeNull],
            "UNIVERSAL 16": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
                    ChangePasswordResultData
                >(_decode_ChangePasswordResultData),
            ],
            "CONTEXT 0": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
                    ChangePasswordResultData
                >(_decode_ChangePasswordResultData),
            ],
        });
    }
    return _cached_decoder_for_ChangePasswordResult(el);
}
export function _encode_ChangePasswordResult(
    value: ChangePasswordResult,
    elGetter: __utils.ASN1Encoder<ChangePasswordResult>
) {
    if (!_cached_encoder_for_ChangePasswordResult) {
        _cached_encoder_for_ChangePasswordResult = __utils._encode_choice<
            ChangePasswordResult
        >(
            {
                null_: __utils._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
                    ChangePasswordResultData
                >(_encode_ChangePasswordResultData),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ChangePasswordResult(value, elGetter);
}

// TODO: ObjectAssignment: administerPassword

export class AdministerPasswordArgumentData {
    constructor(
        readonly object: DistinguishedName,
        readonly newPwd: UserPwd,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AdministerPasswordArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "object",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "newPwd",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AdministerPasswordArgumentData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AdministerPasswordArgumentData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AdministerPasswordArgumentData: __utils.ASN1Decoder<
    AdministerPasswordArgumentData
> | null = null;
let _cached_encoder_for_AdministerPasswordArgumentData: __utils.ASN1Encoder<
    AdministerPasswordArgumentData
> | null = null;
export function _decode_AdministerPasswordArgumentData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AdministerPasswordArgumentData) {
        _cached_decoder_for_AdministerPasswordArgumentData = function (
            el: asn1.ASN1Element
        ): AdministerPasswordArgumentData {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "AdministerPasswordArgumentData contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "object";
            sequence[1].name = "newPwd";
            let object!: DistinguishedName;
            let newPwd!: UserPwd;
            object = __utils._decode_explicit<DistinguishedName>(
                () => _decode_DistinguishedName
            )(sequence[0]);
            newPwd = __utils._decode_explicit<UserPwd>(() => _decode_UserPwd)(
                sequence[1]
            );
            // TODO: Validate values.
            return new AdministerPasswordArgumentData(
                object,
                newPwd,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_AdministerPasswordArgumentData(el);
}
export function _encode_AdministerPasswordArgumentData(
    value: AdministerPasswordArgumentData,
    elGetter: __utils.ASN1Encoder<AdministerPasswordArgumentData>
) {
    if (!_cached_encoder_for_AdministerPasswordArgumentData) {
        _cached_encoder_for_AdministerPasswordArgumentData = function (
            value: AdministerPasswordArgumentData,
            elGetter: __utils.ASN1Encoder<AdministerPasswordArgumentData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_DistinguishedName,
                                __utils.BER
                            )(value.object, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () => _encode_UserPwd,
                                __utils.BER
                            )(value.newPwd, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AdministerPasswordArgumentData(value, elGetter);
}

export type AdministerPasswordArgument = OPTIONALLY_PROTECTED_SEQ<
    AdministerPasswordArgumentData
>; // DefinedType
let _cached_decoder_for_AdministerPasswordArgument: __utils.ASN1Decoder<
    AdministerPasswordArgument
> | null = null;
let _cached_encoder_for_AdministerPasswordArgument: __utils.ASN1Encoder<
    AdministerPasswordArgument
> | null = null;
export function _decode_AdministerPasswordArgument(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AdministerPasswordArgument) {
        _cached_decoder_for_AdministerPasswordArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
            AdministerPasswordArgumentData
        >(_decode_AdministerPasswordArgumentData);
    }
    return _cached_decoder_for_AdministerPasswordArgument(el);
}
export function _encode_AdministerPasswordArgument(
    value: AdministerPasswordArgument,
    elGetter: __utils.ASN1Encoder<AdministerPasswordArgument>
) {
    if (!_cached_encoder_for_AdministerPasswordArgument) {
        _cached_encoder_for_AdministerPasswordArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
            AdministerPasswordArgumentData
        >(_encode_AdministerPasswordArgumentData);
    }
    return _cached_encoder_for_AdministerPasswordArgument(value, elGetter);
}

export class AdministerPasswordResultData {
    constructor(
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_AdministerPasswordResultData: __utils.ComponentSpec[] = [];
export const _root_component_type_list_2_spec_for_AdministerPasswordResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_AdministerPasswordResultData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AdministerPasswordResultData: __utils.ASN1Decoder<
    AdministerPasswordResultData
> | null = null;
let _cached_encoder_for_AdministerPasswordResultData: __utils.ASN1Encoder<
    AdministerPasswordResultData
> | null = null;
export function _decode_AdministerPasswordResultData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AdministerPasswordResultData) {
        _cached_decoder_for_AdministerPasswordResultData = function (
            el: asn1.ASN1Element
        ): AdministerPasswordResultData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                AdministerPasswordResultData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AdministerPasswordResultData,
                _extension_additions_list_spec_for_AdministerPasswordResultData,
                _root_component_type_list_2_spec_for_AdministerPasswordResultData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AdministerPasswordResultData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_AdministerPasswordResultData(el);
}
export function _encode_AdministerPasswordResultData(
    value: AdministerPasswordResultData,
    elGetter: __utils.ASN1Encoder<AdministerPasswordResultData>
) {
    if (!_cached_encoder_for_AdministerPasswordResultData) {
        _cached_encoder_for_AdministerPasswordResultData = function (
            value: AdministerPasswordResultData,
            elGetter: __utils.ASN1Encoder<AdministerPasswordResultData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                AdministerPasswordResultData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AdministerPasswordResultData(value, elGetter);
}

export type AdministerPasswordResult =
    | { null_: asn1.NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED_SEQ<AdministerPasswordResultData>;
      } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_AdministerPasswordResult: __utils.ASN1Decoder<
    AdministerPasswordResult
> | null = null;
let _cached_encoder_for_AdministerPasswordResult: __utils.ASN1Encoder<
    AdministerPasswordResult
> | null = null;
export function _decode_AdministerPasswordResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AdministerPasswordResult) {
        _cached_decoder_for_AdministerPasswordResult = __utils._decode_extensible_choice<
            AdministerPasswordResult
        >({
            "UNIVERSAL 5": ["null_", __utils._decodeNull],
            "UNIVERSAL 16": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
                    AdministerPasswordResultData
                >(_decode_AdministerPasswordResultData),
            ],
            "CONTEXT 0": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
                    AdministerPasswordResultData
                >(_decode_AdministerPasswordResultData),
            ],
        });
    }
    return _cached_decoder_for_AdministerPasswordResult(el);
}
export function _encode_AdministerPasswordResult(
    value: AdministerPasswordResult,
    elGetter: __utils.ASN1Encoder<AdministerPasswordResult>
) {
    if (!_cached_encoder_for_AdministerPasswordResult) {
        _cached_encoder_for_AdministerPasswordResult = __utils._encode_choice<
            AdministerPasswordResult
        >(
            {
                null_: __utils._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
                    AdministerPasswordResultData
                >(_encode_AdministerPasswordResultData),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_AdministerPasswordResult(value, elGetter);
}

// TODO: ObjectAssignment: ldapTransport

export type LinkId = asn1.INTEGER;
let _cached_decoder_for_LinkId: __utils.ASN1Decoder<LinkId> | null = null;
let _cached_encoder_for_LinkId: __utils.ASN1Encoder<LinkId> | null = null;
export function _decode_LinkId(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_LinkId) {
        _cached_decoder_for_LinkId = __utils._decodeInteger;
    }
    return _cached_decoder_for_LinkId(el);
}
export function _encode_LinkId(
    value: LinkId,
    elGetter: __utils.ASN1Encoder<LinkId>
) {
    if (!_cached_encoder_for_LinkId) {
        _cached_encoder_for_LinkId = __utils._encodeInteger;
    }
    return _cached_encoder_for_LinkId(value, elGetter);
}

export class CommonArgumentsSeq {
    constructor(
        readonly serviceControls: ServiceControls | undefined,
        readonly securityParameters: SecurityParameters | undefined,
        readonly requestor: DistinguishedName | undefined,
        readonly operationProgress: OperationProgress | undefined,
        readonly aliasedRDNs: asn1.INTEGER | undefined,
        readonly criticalExtensions: asn1.BIT_STRING | undefined,
        readonly referenceType: ReferenceType | undefined,
        readonly entryOnly: asn1.BOOLEAN | undefined,
        readonly exclusions: Exclusions | undefined,
        readonly nameResolveOnMaster: asn1.BOOLEAN | undefined,
        readonly operationContexts: ContextSelection | undefined,
        readonly familyGrouping: FamilyGrouping | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_serviceControls() {
        return new ServiceControls(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        );
    }
    public static get _default_value_for_operationProgress() {
        return new OperationProgress(
            DistributedOperations.OperationProgress_nameResolutionPhase_notStarted,
            undefined
        );
    }
    public static get _default_value_for_entryOnly() {
        return true;
    }
    public static get _default_value_for_nameResolveOnMaster() {
        return false;
    }
    public static get _default_value_for_familyGrouping() {
        return FamilyGrouping_entryOnly;
    }
}
export const _root_component_type_list_1_spec_for_CommonArgumentsSeq: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "serviceControls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "requestor",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationProgress",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasedRDNs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 26),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "criticalExtensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 25),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "referenceType",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entryOnly",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 23),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "exclusions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 22),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nameResolveOnMaster",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 21),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationContexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 20),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "familyGrouping",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 19),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CommonArgumentsSeq: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CommonArgumentsSeq: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CommonArgumentsSeq: __utils.ASN1Decoder<
    CommonArgumentsSeq
> | null = null;
let _cached_encoder_for_CommonArgumentsSeq: __utils.ASN1Encoder<
    CommonArgumentsSeq
> | null = null;
export function _decode_CommonArgumentsSeq(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CommonArgumentsSeq) {
        _cached_decoder_for_CommonArgumentsSeq = function (
            el: asn1.ASN1Element
        ): CommonArgumentsSeq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let serviceControls: asn1.OPTIONAL<ServiceControls> =
                CommonArgumentsSeq._default_value_for_serviceControls;
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let requestor: asn1.OPTIONAL<DistinguishedName>;
            let operationProgress: asn1.OPTIONAL<OperationProgress> =
                CommonArgumentsSeq._default_value_for_operationProgress;
            let aliasedRDNs: asn1.OPTIONAL<asn1.INTEGER>;
            let criticalExtensions: asn1.OPTIONAL<asn1.BIT_STRING>;
            let referenceType: asn1.OPTIONAL<ReferenceType>;
            let entryOnly: asn1.OPTIONAL<asn1.BOOLEAN> =
                CommonArgumentsSeq._default_value_for_entryOnly;
            let exclusions: asn1.OPTIONAL<Exclusions>;
            let nameResolveOnMaster: asn1.OPTIONAL<asn1.BOOLEAN> =
                CommonArgumentsSeq._default_value_for_nameResolveOnMaster;
            let operationContexts: asn1.OPTIONAL<ContextSelection>;
            let familyGrouping: asn1.OPTIONAL<FamilyGrouping> =
                CommonArgumentsSeq._default_value_for_familyGrouping;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                serviceControls: (_el: asn1.ASN1Element): void => {
                    serviceControls = __utils._decode_explicit<ServiceControls>(
                        () => _decode_ServiceControls
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                requestor: (_el: asn1.ASN1Element): void => {
                    requestor = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                operationProgress: (_el: asn1.ASN1Element): void => {
                    operationProgress = __utils._decode_explicit<
                        OperationProgress
                    >(() => _decode_OperationProgress)(_el);
                },
                aliasedRDNs: (_el: asn1.ASN1Element): void => {
                    aliasedRDNs = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                criticalExtensions: (_el: asn1.ASN1Element): void => {
                    criticalExtensions = __utils._decode_explicit<
                        asn1.BIT_STRING
                    >(() => __utils._decodeBitString)(_el);
                },
                referenceType: (_el: asn1.ASN1Element): void => {
                    referenceType = __utils._decode_explicit<ReferenceType>(
                        () => _decode_ReferenceType
                    )(_el);
                },
                entryOnly: (_el: asn1.ASN1Element): void => {
                    entryOnly = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                exclusions: (_el: asn1.ASN1Element): void => {
                    exclusions = __utils._decode_explicit<Exclusions>(
                        () => _decode_Exclusions
                    )(_el);
                },
                nameResolveOnMaster: (_el: asn1.ASN1Element): void => {
                    nameResolveOnMaster = __utils._decode_explicit<
                        asn1.BOOLEAN
                    >(() => __utils._decodeBoolean)(_el);
                },
                operationContexts: (_el: asn1.ASN1Element): void => {
                    operationContexts = __utils._decode_explicit<
                        ContextSelection
                    >(() => _decode_ContextSelection)(_el);
                },
                familyGrouping: (_el: asn1.ASN1Element): void => {
                    familyGrouping = __utils._decode_explicit<FamilyGrouping>(
                        () => _decode_FamilyGrouping
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CommonArgumentsSeq,
                _extension_additions_list_spec_for_CommonArgumentsSeq,
                _root_component_type_list_2_spec_for_CommonArgumentsSeq,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CommonArgumentsSeq(
                /* SEQUENCE_CONSTRUCTOR_CALL */ serviceControls,
                securityParameters,
                requestor,
                operationProgress,
                aliasedRDNs,
                criticalExtensions,
                referenceType,
                entryOnly,
                exclusions,
                nameResolveOnMaster,
                operationContexts,
                familyGrouping,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CommonArgumentsSeq(el);
}
export function _encode_CommonArgumentsSeq(
    value: CommonArgumentsSeq,
    elGetter: __utils.ASN1Encoder<CommonArgumentsSeq>
) {
    if (!_cached_encoder_for_CommonArgumentsSeq) {
        _cached_encoder_for_CommonArgumentsSeq = function (
            value: CommonArgumentsSeq,
            elGetter: __utils.ASN1Encoder<CommonArgumentsSeq>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            __utils.deepEq(
                                value.serviceControls,
                                CommonArgumentsSeq._default_value_for_serviceControls
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_ServiceControls,
                                      __utils.BER
                                  )(value.serviceControls, __utils.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.requestor === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.requestor, __utils.BER),
                            /* IF_DEFAULT */ value.operationProgress ===
                                undefined ||
                            __utils.deepEq(
                                value.operationProgress,
                                CommonArgumentsSeq._default_value_for_operationProgress
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () => _encode_OperationProgress,
                                      __utils.BER
                                  )(value.operationProgress, __utils.BER),
                            /* IF_ABSENT  */ value.aliasedRDNs === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      26,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.aliasedRDNs, __utils.BER),
                            /* IF_ABSENT  */ value.criticalExtensions ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      25,
                                      () => __utils._encodeBitString,
                                      __utils.BER
                                  )(value.criticalExtensions, __utils.BER),
                            /* IF_ABSENT  */ value.referenceType === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      24,
                                      () => _encode_ReferenceType,
                                      __utils.BER
                                  )(value.referenceType, __utils.BER),
                            /* IF_DEFAULT */ value.entryOnly === undefined ||
                            __utils.deepEq(
                                value.entryOnly,
                                CommonArgumentsSeq._default_value_for_entryOnly
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      23,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.entryOnly, __utils.BER),
                            /* IF_ABSENT  */ value.exclusions === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      22,
                                      () => _encode_Exclusions,
                                      __utils.BER
                                  )(value.exclusions, __utils.BER),
                            /* IF_DEFAULT */ value.nameResolveOnMaster ===
                                undefined ||
                            __utils.deepEq(
                                value.nameResolveOnMaster,
                                CommonArgumentsSeq._default_value_for_nameResolveOnMaster
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      21,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.nameResolveOnMaster, __utils.BER),
                            /* IF_ABSENT  */ value.operationContexts ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      20,
                                      () => _encode_ContextSelection,
                                      __utils.BER
                                  )(value.operationContexts, __utils.BER),
                            /* IF_DEFAULT */ value.familyGrouping ===
                                undefined ||
                            __utils.deepEq(
                                value.familyGrouping,
                                CommonArgumentsSeq._default_value_for_familyGrouping
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      19,
                                      () => _encode_FamilyGrouping,
                                      __utils.BER
                                  )(value.familyGrouping, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_CommonArgumentsSeq(value, elGetter);
}

export class LdapArgumentData {
    constructor(
        readonly object: DistinguishedName,
        readonly ldapMessage: LDAPMessage,
        readonly linkId: LinkId | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly serviceControls:
            | ServiceControls
            | undefined /* REPLICATED_COMPONENT */,
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly requestor:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationProgress:
            | OperationProgress
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasedRDNs:
            | asn1.INTEGER
            | undefined /* REPLICATED_COMPONENT */,
        readonly criticalExtensions:
            | asn1.BIT_STRING
            | undefined /* REPLICATED_COMPONENT */,
        readonly referenceType:
            | ReferenceType
            | undefined /* REPLICATED_COMPONENT */,
        readonly entryOnly: asn1.BOOLEAN | undefined /* REPLICATED_COMPONENT */,
        readonly exclusions: Exclusions | undefined /* REPLICATED_COMPONENT */,
        readonly nameResolveOnMaster:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationContexts:
            | ContextSelection
            | undefined /* REPLICATED_COMPONENT */,
        readonly familyGrouping:
            | FamilyGrouping
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_serviceControls() {
        return new ServiceControls(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        );
    }
    public static get _default_value_for_operationProgress() {
        return new OperationProgress(
            DistributedOperations.OperationProgress_nameResolutionPhase_notStarted,
            undefined
        );
    }
    public static get _default_value_for_entryOnly() {
        return true;
    }
    public static get _default_value_for_nameResolveOnMaster() {
        return false;
    }
    public static get _default_value_for_familyGrouping() {
        return FamilyGrouping_entryOnly;
    }
}
export const _root_component_type_list_1_spec_for_LdapArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "object",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "ldapMessage",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "linkId",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_LdapArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "serviceControls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "requestor",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationProgress",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasedRDNs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 26),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "criticalExtensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 25),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "referenceType",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entryOnly",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 23),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "exclusions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 22),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nameResolveOnMaster",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 21),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationContexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 20),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "familyGrouping",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 19),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_LdapArgumentData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_LdapArgumentData: __utils.ASN1Decoder<
    LdapArgumentData
> | null = null;
let _cached_encoder_for_LdapArgumentData: __utils.ASN1Encoder<
    LdapArgumentData
> | null = null;
export function _decode_LdapArgumentData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_LdapArgumentData) {
        _cached_decoder_for_LdapArgumentData = function (
            el: asn1.ASN1Element
        ): LdapArgumentData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let object!: DistinguishedName;
            let ldapMessage!: LDAPMessage;
            let linkId: asn1.OPTIONAL<LinkId>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let serviceControls: asn1.OPTIONAL<ServiceControls> =
                LdapArgumentData._default_value_for_serviceControls;
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let requestor: asn1.OPTIONAL<DistinguishedName>;
            let operationProgress: asn1.OPTIONAL<OperationProgress> =
                LdapArgumentData._default_value_for_operationProgress;
            let aliasedRDNs: asn1.OPTIONAL<asn1.INTEGER>;
            let criticalExtensions: asn1.OPTIONAL<asn1.BIT_STRING>;
            let referenceType: asn1.OPTIONAL<ReferenceType>;
            let entryOnly: asn1.OPTIONAL<asn1.BOOLEAN> =
                LdapArgumentData._default_value_for_entryOnly;
            let exclusions: asn1.OPTIONAL<Exclusions>;
            let nameResolveOnMaster: asn1.OPTIONAL<asn1.BOOLEAN> =
                LdapArgumentData._default_value_for_nameResolveOnMaster;
            let operationContexts: asn1.OPTIONAL<ContextSelection>;
            let familyGrouping: asn1.OPTIONAL<FamilyGrouping> =
                LdapArgumentData._default_value_for_familyGrouping;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                object: (_el: asn1.ASN1Element): void => {
                    object = _decode_DistinguishedName(_el);
                },
                ldapMessage: (_el: asn1.ASN1Element): void => {
                    ldapMessage = _decode_LDAPMessage(_el);
                },
                linkId: (_el: asn1.ASN1Element): void => {
                    linkId = _decode_LinkId(_el);
                },
                serviceControls: (_el: asn1.ASN1Element): void => {
                    serviceControls = __utils._decode_explicit<ServiceControls>(
                        () => _decode_ServiceControls
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                requestor: (_el: asn1.ASN1Element): void => {
                    requestor = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                operationProgress: (_el: asn1.ASN1Element): void => {
                    operationProgress = __utils._decode_explicit<
                        OperationProgress
                    >(() => _decode_OperationProgress)(_el);
                },
                aliasedRDNs: (_el: asn1.ASN1Element): void => {
                    aliasedRDNs = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                criticalExtensions: (_el: asn1.ASN1Element): void => {
                    criticalExtensions = __utils._decode_explicit<
                        asn1.BIT_STRING
                    >(() => __utils._decodeBitString)(_el);
                },
                referenceType: (_el: asn1.ASN1Element): void => {
                    referenceType = __utils._decode_explicit<ReferenceType>(
                        () => _decode_ReferenceType
                    )(_el);
                },
                entryOnly: (_el: asn1.ASN1Element): void => {
                    entryOnly = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                exclusions: (_el: asn1.ASN1Element): void => {
                    exclusions = __utils._decode_explicit<Exclusions>(
                        () => _decode_Exclusions
                    )(_el);
                },
                nameResolveOnMaster: (_el: asn1.ASN1Element): void => {
                    nameResolveOnMaster = __utils._decode_explicit<
                        asn1.BOOLEAN
                    >(() => __utils._decodeBoolean)(_el);
                },
                operationContexts: (_el: asn1.ASN1Element): void => {
                    operationContexts = __utils._decode_explicit<
                        ContextSelection
                    >(() => _decode_ContextSelection)(_el);
                },
                familyGrouping: (_el: asn1.ASN1Element): void => {
                    familyGrouping = __utils._decode_explicit<FamilyGrouping>(
                        () => _decode_FamilyGrouping
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_LdapArgumentData,
                _extension_additions_list_spec_for_LdapArgumentData,
                _root_component_type_list_2_spec_for_LdapArgumentData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new LdapArgumentData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ object,
                ldapMessage,
                linkId,
                _unrecognizedExtensionsList,
                serviceControls,
                securityParameters,
                requestor,
                operationProgress,
                aliasedRDNs,
                criticalExtensions,
                referenceType,
                entryOnly,
                exclusions,
                nameResolveOnMaster,
                operationContexts,
                familyGrouping
            );
        };
    }
    return _cached_decoder_for_LdapArgumentData(el);
}
export function _encode_LdapArgumentData(
    value: LdapArgumentData,
    elGetter: __utils.ASN1Encoder<LdapArgumentData>
) {
    if (!_cached_encoder_for_LdapArgumentData) {
        _cached_encoder_for_LdapArgumentData = function (
            value: LdapArgumentData,
            elGetter: __utils.ASN1Encoder<LdapArgumentData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_DistinguishedName(
                                value.object,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_LDAPMessage(
                                value.ldapMessage,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.linkId === undefined
                                ? undefined
                                : _encode_LinkId(value.linkId, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            __utils.deepEq(
                                value.serviceControls,
                                LdapArgumentData._default_value_for_serviceControls
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_ServiceControls,
                                      __utils.BER
                                  )(value.serviceControls, __utils.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.requestor === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.requestor, __utils.BER),
                            /* IF_DEFAULT */ value.operationProgress ===
                                undefined ||
                            __utils.deepEq(
                                value.operationProgress,
                                LdapArgumentData._default_value_for_operationProgress
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () => _encode_OperationProgress,
                                      __utils.BER
                                  )(value.operationProgress, __utils.BER),
                            /* IF_ABSENT  */ value.aliasedRDNs === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      26,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.aliasedRDNs, __utils.BER),
                            /* IF_ABSENT  */ value.criticalExtensions ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      25,
                                      () => __utils._encodeBitString,
                                      __utils.BER
                                  )(value.criticalExtensions, __utils.BER),
                            /* IF_ABSENT  */ value.referenceType === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      24,
                                      () => _encode_ReferenceType,
                                      __utils.BER
                                  )(value.referenceType, __utils.BER),
                            /* IF_DEFAULT */ value.entryOnly === undefined ||
                            __utils.deepEq(
                                value.entryOnly,
                                LdapArgumentData._default_value_for_entryOnly
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      23,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.entryOnly, __utils.BER),
                            /* IF_ABSENT  */ value.exclusions === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      22,
                                      () => _encode_Exclusions,
                                      __utils.BER
                                  )(value.exclusions, __utils.BER),
                            /* IF_DEFAULT */ value.nameResolveOnMaster ===
                                undefined ||
                            __utils.deepEq(
                                value.nameResolveOnMaster,
                                LdapArgumentData._default_value_for_nameResolveOnMaster
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      21,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.nameResolveOnMaster, __utils.BER),
                            /* IF_ABSENT  */ value.operationContexts ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      20,
                                      () => _encode_ContextSelection,
                                      __utils.BER
                                  )(value.operationContexts, __utils.BER),
                            /* IF_DEFAULT */ value.familyGrouping ===
                                undefined ||
                            __utils.deepEq(
                                value.familyGrouping,
                                LdapArgumentData._default_value_for_familyGrouping
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      19,
                                      () => _encode_FamilyGrouping,
                                      __utils.BER
                                  )(value.familyGrouping, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_LdapArgumentData(value, elGetter);
}

export type LdapArgument = OPTIONALLY_PROTECTED_SEQ<LdapArgumentData>; // DefinedType
let _cached_decoder_for_LdapArgument: __utils.ASN1Decoder<
    LdapArgument
> | null = null;
let _cached_encoder_for_LdapArgument: __utils.ASN1Encoder<
    LdapArgument
> | null = null;
export function _decode_LdapArgument(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_LdapArgument) {
        _cached_decoder_for_LdapArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
            LdapArgumentData
        >(_decode_LdapArgumentData);
    }
    return _cached_decoder_for_LdapArgument(el);
}
export function _encode_LdapArgument(
    value: LdapArgument,
    elGetter: __utils.ASN1Encoder<LdapArgument>
) {
    if (!_cached_encoder_for_LdapArgument) {
        _cached_encoder_for_LdapArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
            LdapArgumentData
        >(_encode_LdapArgumentData);
    }
    return _cached_encoder_for_LdapArgument(value, elGetter);
}

export class LdapResultData {
    constructor(
        readonly ldapMessages: LDAPMessage[] | undefined,
        readonly returnToClient: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_returnToClient() {
        return false;
    }
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_LdapResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "ldapMessages",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "returnToClient",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_LdapResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_LdapResultData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_LdapResultData: __utils.ASN1Decoder<
    LdapResultData
> | null = null;
let _cached_encoder_for_LdapResultData: __utils.ASN1Encoder<
    LdapResultData
> | null = null;
export function _decode_LdapResultData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_LdapResultData) {
        _cached_decoder_for_LdapResultData = function (
            el: asn1.ASN1Element
        ): LdapResultData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let ldapMessages: asn1.OPTIONAL<LDAPMessage[]>;
            let returnToClient: asn1.OPTIONAL<asn1.BOOLEAN> =
                LdapResultData._default_value_for_returnToClient;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                LdapResultData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                ldapMessages: (_el: asn1.ASN1Element): void => {
                    ldapMessages = __utils._decodeSequenceOf<LDAPMessage>(
                        () => _decode_LDAPMessage
                    )(_el);
                },
                returnToClient: (_el: asn1.ASN1Element): void => {
                    returnToClient = __utils._decodeBoolean(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_LdapResultData,
                _extension_additions_list_spec_for_LdapResultData,
                _root_component_type_list_2_spec_for_LdapResultData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new LdapResultData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ ldapMessages,
                returnToClient,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_LdapResultData(el);
}
export function _encode_LdapResultData(
    value: LdapResultData,
    elGetter: __utils.ASN1Encoder<LdapResultData>
) {
    if (!_cached_encoder_for_LdapResultData) {
        _cached_encoder_for_LdapResultData = function (
            value: LdapResultData,
            elGetter: __utils.ASN1Encoder<LdapResultData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.ldapMessages === undefined
                                ? undefined
                                : __utils._encodeSequenceOf<LDAPMessage>(
                                      () => _encode_LDAPMessage,
                                      __utils.BER
                                  )(value.ldapMessages, __utils.BER),
                            /* IF_DEFAULT */ value.returnToClient ===
                                undefined ||
                            __utils.deepEq(
                                value.returnToClient,
                                LdapResultData._default_value_for_returnToClient
                            )
                                ? undefined
                                : __utils._encodeBoolean(
                                      value.returnToClient,
                                      __utils.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                LdapResultData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_LdapResultData(value, elGetter);
}

export type LdapResult = OPTIONALLY_PROTECTED_SEQ<LdapResultData>; // DefinedType
let _cached_decoder_for_LdapResult: __utils.ASN1Decoder<
    LdapResult
> | null = null;
let _cached_encoder_for_LdapResult: __utils.ASN1Encoder<
    LdapResult
> | null = null;
export function _decode_LdapResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_LdapResult) {
        _cached_decoder_for_LdapResult = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
            LdapResultData
        >(_decode_LdapResultData);
    }
    return _cached_decoder_for_LdapResult(el);
}
export function _encode_LdapResult(
    value: LdapResult,
    elGetter: __utils.ASN1Encoder<LdapResult>
) {
    if (!_cached_encoder_for_LdapResult) {
        _cached_encoder_for_LdapResult = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
            LdapResultData
        >(_encode_LdapResultData);
    }
    return _cached_encoder_for_LdapResult(value, elGetter);
}

// TODO: ObjectAssignment: linkedLDAP

export class LinkedArgumentData {
    constructor(
        readonly object: DistinguishedName,
        readonly ldapMessage: LDAPMessage,
        readonly linkId: LinkId,
        readonly returnToClient: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly serviceControls:
            | ServiceControls
            | undefined /* REPLICATED_COMPONENT */,
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly requestor:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationProgress:
            | OperationProgress
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasedRDNs:
            | asn1.INTEGER
            | undefined /* REPLICATED_COMPONENT */,
        readonly criticalExtensions:
            | asn1.BIT_STRING
            | undefined /* REPLICATED_COMPONENT */,
        readonly referenceType:
            | ReferenceType
            | undefined /* REPLICATED_COMPONENT */,
        readonly entryOnly: asn1.BOOLEAN | undefined /* REPLICATED_COMPONENT */,
        readonly exclusions: Exclusions | undefined /* REPLICATED_COMPONENT */,
        readonly nameResolveOnMaster:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly operationContexts:
            | ContextSelection
            | undefined /* REPLICATED_COMPONENT */,
        readonly familyGrouping:
            | FamilyGrouping
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_returnToClient() {
        return false;
    }
    public static get _default_value_for_serviceControls() {
        return new ServiceControls(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        );
    }
    public static get _default_value_for_operationProgress() {
        return new OperationProgress(
            DistributedOperations.OperationProgress_nameResolutionPhase_notStarted,
            undefined
        );
    }
    public static get _default_value_for_entryOnly() {
        return true;
    }
    public static get _default_value_for_nameResolveOnMaster() {
        return false;
    }
    public static get _default_value_for_familyGrouping() {
        return FamilyGrouping_entryOnly;
    }
}
export const _root_component_type_list_1_spec_for_LinkedArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "object",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "ldapMessage",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "linkId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "returnToClient",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_LinkedArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "serviceControls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "requestor",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationProgress",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasedRDNs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 26),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "criticalExtensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 25),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "referenceType",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entryOnly",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 23),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "exclusions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 22),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nameResolveOnMaster",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 21),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operationContexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 20),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "familyGrouping",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 19),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_LinkedArgumentData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_LinkedArgumentData: __utils.ASN1Decoder<
    LinkedArgumentData
> | null = null;
let _cached_encoder_for_LinkedArgumentData: __utils.ASN1Encoder<
    LinkedArgumentData
> | null = null;
export function _decode_LinkedArgumentData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_LinkedArgumentData) {
        _cached_decoder_for_LinkedArgumentData = function (
            el: asn1.ASN1Element
        ): LinkedArgumentData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let object!: DistinguishedName;
            let ldapMessage!: LDAPMessage;
            let linkId!: LinkId;
            let returnToClient: asn1.OPTIONAL<asn1.BOOLEAN> =
                LinkedArgumentData._default_value_for_returnToClient;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let serviceControls: asn1.OPTIONAL<ServiceControls> =
                LinkedArgumentData._default_value_for_serviceControls;
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let requestor: asn1.OPTIONAL<DistinguishedName>;
            let operationProgress: asn1.OPTIONAL<OperationProgress> =
                LinkedArgumentData._default_value_for_operationProgress;
            let aliasedRDNs: asn1.OPTIONAL<asn1.INTEGER>;
            let criticalExtensions: asn1.OPTIONAL<asn1.BIT_STRING>;
            let referenceType: asn1.OPTIONAL<ReferenceType>;
            let entryOnly: asn1.OPTIONAL<asn1.BOOLEAN> =
                LinkedArgumentData._default_value_for_entryOnly;
            let exclusions: asn1.OPTIONAL<Exclusions>;
            let nameResolveOnMaster: asn1.OPTIONAL<asn1.BOOLEAN> =
                LinkedArgumentData._default_value_for_nameResolveOnMaster;
            let operationContexts: asn1.OPTIONAL<ContextSelection>;
            let familyGrouping: asn1.OPTIONAL<FamilyGrouping> =
                LinkedArgumentData._default_value_for_familyGrouping;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                object: (_el: asn1.ASN1Element): void => {
                    object = _decode_DistinguishedName(_el);
                },
                ldapMessage: (_el: asn1.ASN1Element): void => {
                    ldapMessage = _decode_LDAPMessage(_el);
                },
                linkId: (_el: asn1.ASN1Element): void => {
                    linkId = _decode_LinkId(_el);
                },
                returnToClient: (_el: asn1.ASN1Element): void => {
                    returnToClient = __utils._decodeBoolean(_el);
                },
                serviceControls: (_el: asn1.ASN1Element): void => {
                    serviceControls = __utils._decode_explicit<ServiceControls>(
                        () => _decode_ServiceControls
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                requestor: (_el: asn1.ASN1Element): void => {
                    requestor = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                operationProgress: (_el: asn1.ASN1Element): void => {
                    operationProgress = __utils._decode_explicit<
                        OperationProgress
                    >(() => _decode_OperationProgress)(_el);
                },
                aliasedRDNs: (_el: asn1.ASN1Element): void => {
                    aliasedRDNs = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                criticalExtensions: (_el: asn1.ASN1Element): void => {
                    criticalExtensions = __utils._decode_explicit<
                        asn1.BIT_STRING
                    >(() => __utils._decodeBitString)(_el);
                },
                referenceType: (_el: asn1.ASN1Element): void => {
                    referenceType = __utils._decode_explicit<ReferenceType>(
                        () => _decode_ReferenceType
                    )(_el);
                },
                entryOnly: (_el: asn1.ASN1Element): void => {
                    entryOnly = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                exclusions: (_el: asn1.ASN1Element): void => {
                    exclusions = __utils._decode_explicit<Exclusions>(
                        () => _decode_Exclusions
                    )(_el);
                },
                nameResolveOnMaster: (_el: asn1.ASN1Element): void => {
                    nameResolveOnMaster = __utils._decode_explicit<
                        asn1.BOOLEAN
                    >(() => __utils._decodeBoolean)(_el);
                },
                operationContexts: (_el: asn1.ASN1Element): void => {
                    operationContexts = __utils._decode_explicit<
                        ContextSelection
                    >(() => _decode_ContextSelection)(_el);
                },
                familyGrouping: (_el: asn1.ASN1Element): void => {
                    familyGrouping = __utils._decode_explicit<FamilyGrouping>(
                        () => _decode_FamilyGrouping
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_LinkedArgumentData,
                _extension_additions_list_spec_for_LinkedArgumentData,
                _root_component_type_list_2_spec_for_LinkedArgumentData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new LinkedArgumentData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ object,
                ldapMessage,
                linkId,
                returnToClient,
                _unrecognizedExtensionsList,
                serviceControls,
                securityParameters,
                requestor,
                operationProgress,
                aliasedRDNs,
                criticalExtensions,
                referenceType,
                entryOnly,
                exclusions,
                nameResolveOnMaster,
                operationContexts,
                familyGrouping
            );
        };
    }
    return _cached_decoder_for_LinkedArgumentData(el);
}
export function _encode_LinkedArgumentData(
    value: LinkedArgumentData,
    elGetter: __utils.ASN1Encoder<LinkedArgumentData>
) {
    if (!_cached_encoder_for_LinkedArgumentData) {
        _cached_encoder_for_LinkedArgumentData = function (
            value: LinkedArgumentData,
            elGetter: __utils.ASN1Encoder<LinkedArgumentData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_DistinguishedName(
                                value.object,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_LDAPMessage(
                                value.ldapMessage,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_LinkId(
                                value.linkId,
                                __utils.BER
                            ),
                            /* IF_DEFAULT */ value.returnToClient ===
                                undefined ||
                            __utils.deepEq(
                                value.returnToClient,
                                LinkedArgumentData._default_value_for_returnToClient
                            )
                                ? undefined
                                : __utils._encodeBoolean(
                                      value.returnToClient,
                                      __utils.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            __utils.deepEq(
                                value.serviceControls,
                                LinkedArgumentData._default_value_for_serviceControls
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_ServiceControls,
                                      __utils.BER
                                  )(value.serviceControls, __utils.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.requestor === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.requestor, __utils.BER),
                            /* IF_DEFAULT */ value.operationProgress ===
                                undefined ||
                            __utils.deepEq(
                                value.operationProgress,
                                LinkedArgumentData._default_value_for_operationProgress
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () => _encode_OperationProgress,
                                      __utils.BER
                                  )(value.operationProgress, __utils.BER),
                            /* IF_ABSENT  */ value.aliasedRDNs === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      26,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.aliasedRDNs, __utils.BER),
                            /* IF_ABSENT  */ value.criticalExtensions ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      25,
                                      () => __utils._encodeBitString,
                                      __utils.BER
                                  )(value.criticalExtensions, __utils.BER),
                            /* IF_ABSENT  */ value.referenceType === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      24,
                                      () => _encode_ReferenceType,
                                      __utils.BER
                                  )(value.referenceType, __utils.BER),
                            /* IF_DEFAULT */ value.entryOnly === undefined ||
                            __utils.deepEq(
                                value.entryOnly,
                                LinkedArgumentData._default_value_for_entryOnly
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      23,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.entryOnly, __utils.BER),
                            /* IF_ABSENT  */ value.exclusions === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      22,
                                      () => _encode_Exclusions,
                                      __utils.BER
                                  )(value.exclusions, __utils.BER),
                            /* IF_DEFAULT */ value.nameResolveOnMaster ===
                                undefined ||
                            __utils.deepEq(
                                value.nameResolveOnMaster,
                                LinkedArgumentData._default_value_for_nameResolveOnMaster
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      21,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.nameResolveOnMaster, __utils.BER),
                            /* IF_ABSENT  */ value.operationContexts ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      20,
                                      () => _encode_ContextSelection,
                                      __utils.BER
                                  )(value.operationContexts, __utils.BER),
                            /* IF_DEFAULT */ value.familyGrouping ===
                                undefined ||
                            __utils.deepEq(
                                value.familyGrouping,
                                LinkedArgumentData._default_value_for_familyGrouping
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      19,
                                      () => _encode_FamilyGrouping,
                                      __utils.BER
                                  )(value.familyGrouping, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_LinkedArgumentData(value, elGetter);
}

export type LinkedArgument = OPTIONALLY_PROTECTED_SEQ<LinkedArgumentData>; // DefinedType
let _cached_decoder_for_LinkedArgument: __utils.ASN1Decoder<
    LinkedArgument
> | null = null;
let _cached_encoder_for_LinkedArgument: __utils.ASN1Encoder<
    LinkedArgument
> | null = null;
export function _decode_LinkedArgument(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_LinkedArgument) {
        _cached_decoder_for_LinkedArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
            LinkedArgumentData
        >(_decode_LinkedArgumentData);
    }
    return _cached_decoder_for_LinkedArgument(el);
}
export function _encode_LinkedArgument(
    value: LinkedArgument,
    elGetter: __utils.ASN1Encoder<LinkedArgument>
) {
    if (!_cached_encoder_for_LinkedArgument) {
        _cached_encoder_for_LinkedArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
            LinkedArgumentData
        >(_encode_LinkedArgumentData);
    }
    return _cached_encoder_for_LinkedArgument(value, elGetter);
}

export type LinkedResult = asn1.NULL; // NullType
let _cached_decoder_for_LinkedResult: __utils.ASN1Decoder<
    LinkedResult
> | null = null;
let _cached_encoder_for_LinkedResult: __utils.ASN1Encoder<
    LinkedResult
> | null = null;
export function _decode_LinkedResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_LinkedResult) {
        _cached_decoder_for_LinkedResult = __utils._decodeNull;
    }
    return _cached_decoder_for_LinkedResult(el);
}
export function _encode_LinkedResult(
    value: LinkedResult,
    elGetter: __utils.ASN1Encoder<LinkedResult>
) {
    if (!_cached_encoder_for_LinkedResult) {
        _cached_encoder_for_LinkedResult = __utils._encodeNull;
    }
    return _cached_encoder_for_LinkedResult(value, elGetter);
}

// TODO: ObjectAssignment: abandoned

export enum AbandonedProblem {
    pagingAbandoned = 0,
}
export const AbandonedProblem_pagingAbandoned: AbandonedProblem =
    AbandonedProblem.pagingAbandoned; /* LONG_NAMED_ENUMERATED_VALUE */
export const pagingAbandoned: AbandonedProblem =
    AbandonedProblem.pagingAbandoned; /* SHORT_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_AbandonedProblem: __utils.ASN1Decoder<
    AbandonedProblem
> | null = null;
let _cached_encoder_for_AbandonedProblem: __utils.ASN1Encoder<
    AbandonedProblem
> | null = null;
export function _decode_AbandonedProblem(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AbandonedProblem) {
        _cached_decoder_for_AbandonedProblem = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_AbandonedProblem(el);
}
export function _encode_AbandonedProblem(
    value: AbandonedProblem,
    elGetter: __utils.ASN1Encoder<AbandonedProblem>
) {
    if (!_cached_encoder_for_AbandonedProblem) {
        _cached_encoder_for_AbandonedProblem = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_AbandonedProblem(value, elGetter);
}

export class AbandonedData {
    constructor(
        readonly problem: AbandonedProblem | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_AbandonedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "problem",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AbandonedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_AbandonedData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AbandonedData: __utils.ASN1Decoder<
    AbandonedData
> | null = null;
let _cached_encoder_for_AbandonedData: __utils.ASN1Encoder<
    AbandonedData
> | null = null;
export function _decode_AbandonedData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AbandonedData) {
        _cached_decoder_for_AbandonedData = function (
            el: asn1.ASN1Element
        ): AbandonedData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem: asn1.OPTIONAL<AbandonedProblem>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                AbandonedData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                problem: (_el: asn1.ASN1Element): void => {
                    problem = _decode_AbandonedProblem(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AbandonedData,
                _extension_additions_list_spec_for_AbandonedData,
                _root_component_type_list_2_spec_for_AbandonedData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AbandonedData(
                /* SET_CONSTRUCTOR_CALL */ problem,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_AbandonedData(el);
}
export function _encode_AbandonedData(
    value: AbandonedData,
    elGetter: __utils.ASN1Encoder<AbandonedData>
) {
    if (!_cached_encoder_for_AbandonedData) {
        _cached_encoder_for_AbandonedData = function (
            value: AbandonedData,
            elGetter: __utils.ASN1Encoder<AbandonedData>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.problem === undefined
                                ? undefined
                                : _encode_AbandonedProblem(
                                      value.problem,
                                      __utils.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                AbandonedData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AbandonedData(value, elGetter);
}

// TODO: ObjectAssignment: abandonFailed

export type AbandonProblem = asn1.INTEGER;
export const AbandonProblem_noSuchOperation: AbandonProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
export const noSuchOperation: AbandonProblem = AbandonProblem_noSuchOperation; /* SHORT_NAMED_INTEGER_VALUE */
export const AbandonProblem_tooLate: AbandonProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
export const tooLate: AbandonProblem = AbandonProblem_tooLate; /* SHORT_NAMED_INTEGER_VALUE */
export const AbandonProblem_cannotAbandon: AbandonProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
export const cannotAbandon: AbandonProblem = AbandonProblem_cannotAbandon; /* SHORT_NAMED_INTEGER_VALUE */
let _cached_decoder_for_AbandonProblem: __utils.ASN1Decoder<
    AbandonProblem
> | null = null;
let _cached_encoder_for_AbandonProblem: __utils.ASN1Encoder<
    AbandonProblem
> | null = null;
export function _decode_AbandonProblem(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AbandonProblem) {
        _cached_decoder_for_AbandonProblem = __utils._decodeInteger;
    }
    return _cached_decoder_for_AbandonProblem(el);
}
export function _encode_AbandonProblem(
    value: AbandonProblem,
    elGetter: __utils.ASN1Encoder<AbandonProblem>
) {
    if (!_cached_encoder_for_AbandonProblem) {
        _cached_encoder_for_AbandonProblem = __utils._encodeInteger;
    }
    return _cached_encoder_for_AbandonProblem(value, elGetter);
}

export class AbandonFailedData {
    constructor(
        readonly problem: AbandonProblem,
        readonly operation: InvokeId,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_AbandonFailedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "problem",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "operation",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AbandonFailedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_AbandonFailedData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AbandonFailedData: __utils.ASN1Decoder<
    AbandonFailedData
> | null = null;
let _cached_encoder_for_AbandonFailedData: __utils.ASN1Encoder<
    AbandonFailedData
> | null = null;
export function _decode_AbandonFailedData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AbandonFailedData) {
        _cached_decoder_for_AbandonFailedData = function (
            el: asn1.ASN1Element
        ): AbandonFailedData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: AbandonProblem;
            let operation!: InvokeId;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                AbandonFailedData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                problem: (_el: asn1.ASN1Element): void => {
                    problem = __utils._decode_explicit<AbandonProblem>(
                        () => _decode_AbandonProblem
                    )(_el);
                },
                operation: (_el: asn1.ASN1Element): void => {
                    operation = __utils._decode_explicit<InvokeId>(
                        () => _decode_InvokeId
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AbandonFailedData,
                _extension_additions_list_spec_for_AbandonFailedData,
                _root_component_type_list_2_spec_for_AbandonFailedData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AbandonFailedData(
                /* SET_CONSTRUCTOR_CALL */ problem,
                operation,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_AbandonFailedData(el);
}
export function _encode_AbandonFailedData(
    value: AbandonFailedData,
    elGetter: __utils.ASN1Encoder<AbandonFailedData>
) {
    if (!_cached_encoder_for_AbandonFailedData) {
        _cached_encoder_for_AbandonFailedData = function (
            value: AbandonFailedData,
            elGetter: __utils.ASN1Encoder<AbandonFailedData>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_AbandonProblem,
                                __utils.BER
                            )(value.problem, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () => _encode_InvokeId,
                                __utils.BER
                            )(value.operation, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                AbandonFailedData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AbandonFailedData(value, elGetter);
}

// TODO: ObjectAssignment: attributeError

export type AttributeProblem = asn1.INTEGER;
export const AttributeProblem_noSuchAttributeOrValue: AttributeProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
export const AttributeProblem_invalidAttributeSyntax: AttributeProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
export const AttributeProblem_undefinedAttributeType: AttributeProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
export const AttributeProblem_inappropriateMatching: AttributeProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
export const AttributeProblem_constraintViolation: AttributeProblem = 5; /* LONG_NAMED_INTEGER_VALUE */
export const AttributeProblem_attributeOrValueAlreadyExists: AttributeProblem = 6; /* LONG_NAMED_INTEGER_VALUE */
export const AttributeProblem_contextViolation: AttributeProblem = 7; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_AttributeProblem: __utils.ASN1Decoder<
    AttributeProblem
> | null = null;
let _cached_encoder_for_AttributeProblem: __utils.ASN1Encoder<
    AttributeProblem
> | null = null;
export function _decode_AttributeProblem(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeProblem) {
        _cached_decoder_for_AttributeProblem = __utils._decodeInteger;
    }
    return _cached_decoder_for_AttributeProblem(el);
}
export function _encode_AttributeProblem(
    value: AttributeProblem,
    elGetter: __utils.ASN1Encoder<AttributeProblem>
) {
    if (!_cached_encoder_for_AttributeProblem) {
        _cached_encoder_for_AttributeProblem = __utils._encodeInteger;
    }
    return _cached_encoder_for_AttributeProblem(value, elGetter);
}

export class AttributeErrorData_problems_Item {
    constructor(
        readonly problem: AttributeProblem,
        readonly type_: AttributeType,
        readonly value: AttributeValue | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeErrorData_problems_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "problem",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "value",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AttributeErrorData_problems_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AttributeErrorData_problems_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AttributeErrorData_problems_Item: __utils.ASN1Decoder<
    AttributeErrorData_problems_Item
> | null = null;
let _cached_encoder_for_AttributeErrorData_problems_Item: __utils.ASN1Encoder<
    AttributeErrorData_problems_Item
> | null = null;
export function _decode_AttributeErrorData_problems_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeErrorData_problems_Item) {
        _cached_decoder_for_AttributeErrorData_problems_Item = function (
            el: asn1.ASN1Element
        ): AttributeErrorData_problems_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let problem!: AttributeProblem;
            let type_!: AttributeType;
            let value: asn1.OPTIONAL<AttributeValue>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                problem: (_el: asn1.ASN1Element): void => {
                    problem = __utils._decode_explicit<AttributeProblem>(
                        () => _decode_AttributeProblem
                    )(_el);
                },
                type: (_el: asn1.ASN1Element): void => {
                    type_ = __utils._decode_explicit<AttributeType>(
                        () => _decode_AttributeType
                    )(_el);
                },
                value: (_el: asn1.ASN1Element): void => {
                    value = __utils._decode_explicit<AttributeValue>(
                        () => _decode_AttributeValue
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeErrorData_problems_Item,
                _extension_additions_list_spec_for_AttributeErrorData_problems_Item,
                _root_component_type_list_2_spec_for_AttributeErrorData_problems_Item,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeErrorData_problems_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ problem,
                type_,
                value,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeErrorData_problems_Item(el);
}
export function _encode_AttributeErrorData_problems_Item(
    value: AttributeErrorData_problems_Item,
    elGetter: __utils.ASN1Encoder<AttributeErrorData_problems_Item>
) {
    if (!_cached_encoder_for_AttributeErrorData_problems_Item) {
        _cached_encoder_for_AttributeErrorData_problems_Item = function (
            value: AttributeErrorData_problems_Item,
            elGetter: __utils.ASN1Encoder<AttributeErrorData_problems_Item>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_AttributeProblem,
                                __utils.BER
                            )(value.problem, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () => _encode_AttributeType,
                                __utils.BER
                            )(value.type_, __utils.BER),
                            /* IF_ABSENT  */ value.value === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_AttributeValue,
                                      __utils.BER
                                  )(value.value, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AttributeErrorData_problems_Item(
        value,
        elGetter
    );
}

export class AttributeErrorData {
    constructor(
        readonly object: Name,
        readonly problems: AttributeErrorData_problems_Item[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_AttributeErrorData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "object",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "problems",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AttributeErrorData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_AttributeErrorData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AttributeErrorData: __utils.ASN1Decoder<
    AttributeErrorData
> | null = null;
let _cached_encoder_for_AttributeErrorData: __utils.ASN1Encoder<
    AttributeErrorData
> | null = null;
export function _decode_AttributeErrorData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeErrorData) {
        _cached_decoder_for_AttributeErrorData = function (
            el: asn1.ASN1Element
        ): AttributeErrorData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let object!: Name;
            let problems!: AttributeErrorData_problems_Item[];
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                AttributeErrorData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                object: (_el: asn1.ASN1Element): void => {
                    object = __utils._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                problems: (_el: asn1.ASN1Element): void => {
                    problems = __utils._decode_explicit<
                        AttributeErrorData_problems_Item[]
                    >(() =>
                        __utils._decodeSetOf<AttributeErrorData_problems_Item>(
                            () => _decode_AttributeErrorData_problems_Item
                        )
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeErrorData,
                _extension_additions_list_spec_for_AttributeErrorData,
                _root_component_type_list_2_spec_for_AttributeErrorData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeErrorData(
                /* SET_CONSTRUCTOR_CALL */ object,
                problems,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_AttributeErrorData(el);
}
export function _encode_AttributeErrorData(
    value: AttributeErrorData,
    elGetter: __utils.ASN1Encoder<AttributeErrorData>
) {
    if (!_cached_encoder_for_AttributeErrorData) {
        _cached_encoder_for_AttributeErrorData = function (
            value: AttributeErrorData,
            elGetter: __utils.ASN1Encoder<AttributeErrorData>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_Name,
                                __utils.BER
                            )(value.object, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () =>
                                    __utils._encodeSetOf<
                                        AttributeErrorData_problems_Item
                                    >(
                                        () =>
                                            _encode_AttributeErrorData_problems_Item,
                                        __utils.BER
                                    ),
                                __utils.BER
                            )(value.problems, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                AttributeErrorData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AttributeErrorData(value, elGetter);
}

// TODO: ObjectAssignment: nameError

export type NameProblem = asn1.INTEGER;
export const NameProblem_noSuchObject: NameProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
export const NameProblem_aliasProblem: NameProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
export const NameProblem_invalidAttributeSyntax: NameProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
export const NameProblem_aliasDereferencingProblem: NameProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_NameProblem: __utils.ASN1Decoder<
    NameProblem
> | null = null;
let _cached_encoder_for_NameProblem: __utils.ASN1Encoder<
    NameProblem
> | null = null;
export function _decode_NameProblem(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NameProblem) {
        _cached_decoder_for_NameProblem = __utils._decodeInteger;
    }
    return _cached_decoder_for_NameProblem(el);
}
export function _encode_NameProblem(
    value: NameProblem,
    elGetter: __utils.ASN1Encoder<NameProblem>
) {
    if (!_cached_encoder_for_NameProblem) {
        _cached_encoder_for_NameProblem = __utils._encodeInteger;
    }
    return _cached_encoder_for_NameProblem(value, elGetter);
}

export class NameErrorData {
    constructor(
        readonly problem: NameProblem,
        readonly matched: Name,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_NameErrorData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "problem",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "matched",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_NameErrorData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_NameErrorData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_NameErrorData: __utils.ASN1Decoder<
    NameErrorData
> | null = null;
let _cached_encoder_for_NameErrorData: __utils.ASN1Encoder<
    NameErrorData
> | null = null;
export function _decode_NameErrorData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NameErrorData) {
        _cached_decoder_for_NameErrorData = function (
            el: asn1.ASN1Element
        ): NameErrorData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: NameProblem;
            let matched!: Name;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                NameErrorData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                problem: (_el: asn1.ASN1Element): void => {
                    problem = __utils._decode_explicit<NameProblem>(
                        () => _decode_NameProblem
                    )(_el);
                },
                matched: (_el: asn1.ASN1Element): void => {
                    matched = __utils._decode_explicit<Name>(
                        () => _decode_Name
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NameErrorData,
                _extension_additions_list_spec_for_NameErrorData,
                _root_component_type_list_2_spec_for_NameErrorData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new NameErrorData(
                /* SET_CONSTRUCTOR_CALL */ problem,
                matched,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_NameErrorData(el);
}
export function _encode_NameErrorData(
    value: NameErrorData,
    elGetter: __utils.ASN1Encoder<NameErrorData>
) {
    if (!_cached_encoder_for_NameErrorData) {
        _cached_encoder_for_NameErrorData = function (
            value: NameErrorData,
            elGetter: __utils.ASN1Encoder<NameErrorData>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_NameProblem,
                                __utils.BER
                            )(value.problem, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () => _encode_Name,
                                __utils.BER
                            )(value.matched, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                NameErrorData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_NameErrorData(value, elGetter);
}

// TODO: ObjectAssignment: referral

export class ReferralData {
    constructor(
        readonly candidate: ContinuationReference,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_ReferralData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "candidate",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ReferralData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_ReferralData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ReferralData: __utils.ASN1Decoder<
    ReferralData
> | null = null;
let _cached_encoder_for_ReferralData: __utils.ASN1Encoder<
    ReferralData
> | null = null;
export function _decode_ReferralData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReferralData) {
        _cached_decoder_for_ReferralData = function (
            el: asn1.ASN1Element
        ): ReferralData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let candidate!: ContinuationReference;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                ReferralData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                candidate: (_el: asn1.ASN1Element): void => {
                    candidate = __utils._decode_explicit<ContinuationReference>(
                        () => _decode_ContinuationReference
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReferralData,
                _extension_additions_list_spec_for_ReferralData,
                _root_component_type_list_2_spec_for_ReferralData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ReferralData(
                /* SET_CONSTRUCTOR_CALL */ candidate,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_ReferralData(el);
}
export function _encode_ReferralData(
    value: ReferralData,
    elGetter: __utils.ASN1Encoder<ReferralData>
) {
    if (!_cached_encoder_for_ReferralData) {
        _cached_encoder_for_ReferralData = function (
            value: ReferralData,
            elGetter: __utils.ASN1Encoder<ReferralData>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_ContinuationReference,
                                __utils.BER
                            )(value.candidate, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                ReferralData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ReferralData(value, elGetter);
}

// TODO: ObjectAssignment: securityError

export type SecurityProblem = asn1.INTEGER;
export const SecurityProblem_inappropriateAuthentication: SecurityProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityProblem_invalidCredentials: SecurityProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityProblem_insufficientAccessRights: SecurityProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityProblem_invalidSignature: SecurityProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityProblem_protectionRequired: SecurityProblem = 5; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityProblem_noInformation: SecurityProblem = 6; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityProblem_blockedCredentials: SecurityProblem = 7; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityProblem_spkmError: SecurityProblem = 9; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityProblem_unsupportedAuthenticationMethod: SecurityProblem = 10; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityProblem_passwordExpired: SecurityProblem = 11; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityProblem_inappropriateAlgorithms: SecurityProblem = 12; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_SecurityProblem: __utils.ASN1Decoder<
    SecurityProblem
> | null = null;
let _cached_encoder_for_SecurityProblem: __utils.ASN1Encoder<
    SecurityProblem
> | null = null;
export function _decode_SecurityProblem(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityProblem) {
        _cached_decoder_for_SecurityProblem = __utils._decodeInteger;
    }
    return _cached_decoder_for_SecurityProblem(el);
}
export function _encode_SecurityProblem(
    value: SecurityProblem,
    elGetter: __utils.ASN1Encoder<SecurityProblem>
) {
    if (!_cached_encoder_for_SecurityProblem) {
        _cached_encoder_for_SecurityProblem = __utils._encodeInteger;
    }
    return _cached_encoder_for_SecurityProblem(value, elGetter);
}

export class EncPwdInfo {
    constructor(
        readonly algorithms: AlgorithmIdentifier[] | undefined,
        readonly pwdQualityRule: AttributeTypeAndValue[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_EncPwdInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithms",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pwdQualityRule",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EncPwdInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EncPwdInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EncPwdInfo: __utils.ASN1Decoder<
    EncPwdInfo
> | null = null;
let _cached_encoder_for_EncPwdInfo: __utils.ASN1Encoder<
    EncPwdInfo
> | null = null;
export function _decode_EncPwdInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncPwdInfo) {
        _cached_decoder_for_EncPwdInfo = function (
            el: asn1.ASN1Element
        ): EncPwdInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let algorithms: asn1.OPTIONAL<AlgorithmIdentifier[]>;
            let pwdQualityRule: asn1.OPTIONAL<AttributeTypeAndValue[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                algorithms: (_el: asn1.ASN1Element): void => {
                    algorithms = __utils._decode_explicit<
                        AlgorithmIdentifier[]
                    >(() =>
                        __utils._decodeSequenceOf<AlgorithmIdentifier>(
                            () => _decode_AlgorithmIdentifier
                        )
                    )(_el);
                },
                pwdQualityRule: (_el: asn1.ASN1Element): void => {
                    pwdQualityRule = __utils._decode_explicit<
                        AttributeTypeAndValue[]
                    >(() =>
                        __utils._decodeSequenceOf<AttributeTypeAndValue>(
                            () => _decode_AttributeTypeAndValue
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncPwdInfo,
                _extension_additions_list_spec_for_EncPwdInfo,
                _root_component_type_list_2_spec_for_EncPwdInfo,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EncPwdInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ algorithms,
                pwdQualityRule,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_EncPwdInfo(el);
}
export function _encode_EncPwdInfo(
    value: EncPwdInfo,
    elGetter: __utils.ASN1Encoder<EncPwdInfo>
) {
    if (!_cached_encoder_for_EncPwdInfo) {
        _cached_encoder_for_EncPwdInfo = function (
            value: EncPwdInfo,
            elGetter: __utils.ASN1Encoder<EncPwdInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.algorithms === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () =>
                                          __utils._encodeSequenceOf<
                                              AlgorithmIdentifier
                                          >(
                                              () => _encode_AlgorithmIdentifier,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.algorithms, __utils.BER),
                            /* IF_ABSENT  */ value.pwdQualityRule === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () =>
                                          __utils._encodeSequenceOf<
                                              AttributeTypeAndValue
                                          >(
                                              () =>
                                                  _encode_AttributeTypeAndValue,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.pwdQualityRule, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_EncPwdInfo(value, elGetter);
}

export class SecurityErrorData {
    constructor(
        readonly problem: SecurityProblem,
        readonly spkmInfo: SPKM_ERROR | undefined,
        readonly encPwdInfo: EncPwdInfo | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_SecurityErrorData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "problem",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "spkmInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encPwdInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SecurityErrorData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_SecurityErrorData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SecurityErrorData: __utils.ASN1Decoder<
    SecurityErrorData
> | null = null;
let _cached_encoder_for_SecurityErrorData: __utils.ASN1Encoder<
    SecurityErrorData
> | null = null;
export function _decode_SecurityErrorData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityErrorData) {
        _cached_decoder_for_SecurityErrorData = function (
            el: asn1.ASN1Element
        ): SecurityErrorData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: SecurityProblem;
            let spkmInfo: asn1.OPTIONAL<SPKM_ERROR>;
            let encPwdInfo: asn1.OPTIONAL<EncPwdInfo>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                SecurityErrorData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                problem: (_el: asn1.ASN1Element): void => {
                    problem = __utils._decode_explicit<SecurityProblem>(
                        () => _decode_SecurityProblem
                    )(_el);
                },
                spkmInfo: (_el: asn1.ASN1Element): void => {
                    spkmInfo = __utils._decode_explicit<SPKM_ERROR>(
                        () => _decode_SPKM_ERROR
                    )(_el);
                },
                encPwdInfo: (_el: asn1.ASN1Element): void => {
                    encPwdInfo = __utils._decode_explicit<EncPwdInfo>(
                        () => _decode_EncPwdInfo
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SecurityErrorData,
                _extension_additions_list_spec_for_SecurityErrorData,
                _root_component_type_list_2_spec_for_SecurityErrorData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SecurityErrorData(
                /* SET_CONSTRUCTOR_CALL */ problem,
                spkmInfo,
                encPwdInfo,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_SecurityErrorData(el);
}
export function _encode_SecurityErrorData(
    value: SecurityErrorData,
    elGetter: __utils.ASN1Encoder<SecurityErrorData>
) {
    if (!_cached_encoder_for_SecurityErrorData) {
        _cached_encoder_for_SecurityErrorData = function (
            value: SecurityErrorData,
            elGetter: __utils.ASN1Encoder<SecurityErrorData>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_SecurityProblem,
                                __utils.BER
                            )(value.problem, __utils.BER),
                            /* IF_ABSENT  */ value.spkmInfo === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_SPKM_ERROR,
                                      __utils.BER
                                  )(value.spkmInfo, __utils.BER),
                            /* IF_ABSENT  */ value.encPwdInfo === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_EncPwdInfo,
                                      __utils.BER
                                  )(value.encPwdInfo, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                SecurityErrorData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SecurityErrorData(value, elGetter);
}

// TODO: ObjectAssignment: serviceError

export type ServiceProblem = asn1.INTEGER;
export const ServiceProblem_busy: ServiceProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
export const ServiceProblem_unavailable: ServiceProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
export const ServiceProblem_unwillingToPerform: ServiceProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
export const ServiceProblem_chainingRequired: ServiceProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
export const ServiceProblem_unableToProceed: ServiceProblem = 5; /* LONG_NAMED_INTEGER_VALUE */
export const ServiceProblem_invalidReference: ServiceProblem = 6; /* LONG_NAMED_INTEGER_VALUE */
export const ServiceProblem_timeLimitExceeded: ServiceProblem = 7; /* LONG_NAMED_INTEGER_VALUE */
export const ServiceProblem_administrativeLimitExceeded: ServiceProblem = 8; /* LONG_NAMED_INTEGER_VALUE */
export const ServiceProblem_loopDetected: ServiceProblem = 9; /* LONG_NAMED_INTEGER_VALUE */
export const ServiceProblem_unavailableCriticalExtension: ServiceProblem = 10; /* LONG_NAMED_INTEGER_VALUE */
export const ServiceProblem_outOfScope: ServiceProblem = 11; /* LONG_NAMED_INTEGER_VALUE */
export const ServiceProblem_ditError: ServiceProblem = 12; /* LONG_NAMED_INTEGER_VALUE */
export const ServiceProblem_invalidQueryReference: ServiceProblem = 13; /* LONG_NAMED_INTEGER_VALUE */
export const ServiceProblem_requestedServiceNotAvailable: ServiceProblem = 14; /* LONG_NAMED_INTEGER_VALUE */
export const ServiceProblem_unsupportedMatchingUse: ServiceProblem = 15; /* LONG_NAMED_INTEGER_VALUE */
export const ServiceProblem_ambiguousKeyAttributes: ServiceProblem = 16; /* LONG_NAMED_INTEGER_VALUE */
export const ServiceProblem_saslBindInProgress: ServiceProblem = 17; /* LONG_NAMED_INTEGER_VALUE */
export const ServiceProblem_notSupportedByLDAP: ServiceProblem = 18; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_ServiceProblem: __utils.ASN1Decoder<
    ServiceProblem
> | null = null;
let _cached_encoder_for_ServiceProblem: __utils.ASN1Encoder<
    ServiceProblem
> | null = null;
export function _decode_ServiceProblem(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ServiceProblem) {
        _cached_decoder_for_ServiceProblem = __utils._decodeInteger;
    }
    return _cached_decoder_for_ServiceProblem(el);
}
export function _encode_ServiceProblem(
    value: ServiceProblem,
    elGetter: __utils.ASN1Encoder<ServiceProblem>
) {
    if (!_cached_encoder_for_ServiceProblem) {
        _cached_encoder_for_ServiceProblem = __utils._encodeInteger;
    }
    return _cached_encoder_for_ServiceProblem(value, elGetter);
}

export class ServiceErrorData {
    constructor(
        readonly problem: ServiceProblem,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_ServiceErrorData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "problem",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ServiceErrorData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_ServiceErrorData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ServiceErrorData: __utils.ASN1Decoder<
    ServiceErrorData
> | null = null;
let _cached_encoder_for_ServiceErrorData: __utils.ASN1Encoder<
    ServiceErrorData
> | null = null;
export function _decode_ServiceErrorData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ServiceErrorData) {
        _cached_decoder_for_ServiceErrorData = function (
            el: asn1.ASN1Element
        ): ServiceErrorData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: ServiceProblem;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                ServiceErrorData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                problem: (_el: asn1.ASN1Element): void => {
                    problem = __utils._decode_explicit<ServiceProblem>(
                        () => _decode_ServiceProblem
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ServiceErrorData,
                _extension_additions_list_spec_for_ServiceErrorData,
                _root_component_type_list_2_spec_for_ServiceErrorData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ServiceErrorData(
                /* SET_CONSTRUCTOR_CALL */ problem,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_ServiceErrorData(el);
}
export function _encode_ServiceErrorData(
    value: ServiceErrorData,
    elGetter: __utils.ASN1Encoder<ServiceErrorData>
) {
    if (!_cached_encoder_for_ServiceErrorData) {
        _cached_encoder_for_ServiceErrorData = function (
            value: ServiceErrorData,
            elGetter: __utils.ASN1Encoder<ServiceErrorData>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_ServiceProblem,
                                __utils.BER
                            )(value.problem, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                ServiceErrorData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ServiceErrorData(value, elGetter);
}

// TODO: ObjectAssignment: updateError

export type UpdateProblem = asn1.INTEGER;
export const UpdateProblem_namingViolation: UpdateProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
export const namingViolation: UpdateProblem = UpdateProblem_namingViolation; /* SHORT_NAMED_INTEGER_VALUE */
export const UpdateProblem_objectClassViolation: UpdateProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
export const objectClassViolation: UpdateProblem = UpdateProblem_objectClassViolation; /* SHORT_NAMED_INTEGER_VALUE */
export const UpdateProblem_notAllowedOnNonLeaf: UpdateProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
export const notAllowedOnNonLeaf: UpdateProblem = UpdateProblem_notAllowedOnNonLeaf; /* SHORT_NAMED_INTEGER_VALUE */
export const UpdateProblem_notAllowedOnRDN: UpdateProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
export const notAllowedOnRDN: UpdateProblem = UpdateProblem_notAllowedOnRDN; /* SHORT_NAMED_INTEGER_VALUE */
export const UpdateProblem_entryAlreadyExists: UpdateProblem = 5; /* LONG_NAMED_INTEGER_VALUE */
export const entryAlreadyExists: UpdateProblem = UpdateProblem_entryAlreadyExists; /* SHORT_NAMED_INTEGER_VALUE */
export const UpdateProblem_affectsMultipleDSAs: UpdateProblem = 6; /* LONG_NAMED_INTEGER_VALUE */
export const affectsMultipleDSAs: UpdateProblem = UpdateProblem_affectsMultipleDSAs; /* SHORT_NAMED_INTEGER_VALUE */
export const UpdateProblem_objectClassModificationProhibited: UpdateProblem = 7; /* LONG_NAMED_INTEGER_VALUE */
export const objectClassModificationProhibited: UpdateProblem = UpdateProblem_objectClassModificationProhibited; /* SHORT_NAMED_INTEGER_VALUE */
export const UpdateProblem_noSuchSuperior: UpdateProblem = 8; /* LONG_NAMED_INTEGER_VALUE */
export const noSuchSuperior: UpdateProblem = UpdateProblem_noSuchSuperior; /* SHORT_NAMED_INTEGER_VALUE */
export const UpdateProblem_notAncestor: UpdateProblem = 9; /* LONG_NAMED_INTEGER_VALUE */
export const notAncestor: UpdateProblem = UpdateProblem_notAncestor; /* SHORT_NAMED_INTEGER_VALUE */
export const UpdateProblem_parentNotAncestor: UpdateProblem = 10; /* LONG_NAMED_INTEGER_VALUE */
export const parentNotAncestor: UpdateProblem = UpdateProblem_parentNotAncestor; /* SHORT_NAMED_INTEGER_VALUE */
export const UpdateProblem_hierarchyRuleViolation: UpdateProblem = 11; /* LONG_NAMED_INTEGER_VALUE */
export const hierarchyRuleViolation: UpdateProblem = UpdateProblem_hierarchyRuleViolation; /* SHORT_NAMED_INTEGER_VALUE */
export const UpdateProblem_familyRuleViolation: UpdateProblem = 12; /* LONG_NAMED_INTEGER_VALUE */
export const familyRuleViolation: UpdateProblem = UpdateProblem_familyRuleViolation; /* SHORT_NAMED_INTEGER_VALUE */
export const UpdateProblem_insufficientPasswordQuality: UpdateProblem = 13; /* LONG_NAMED_INTEGER_VALUE */
export const insufficientPasswordQuality: UpdateProblem = UpdateProblem_insufficientPasswordQuality; /* SHORT_NAMED_INTEGER_VALUE */
export const UpdateProblem_passwordInHistory: UpdateProblem = 14; /* LONG_NAMED_INTEGER_VALUE */
export const passwordInHistory: UpdateProblem = UpdateProblem_passwordInHistory; /* SHORT_NAMED_INTEGER_VALUE */
export const UpdateProblem_noPasswordSlot: UpdateProblem = 15; /* LONG_NAMED_INTEGER_VALUE */
export const noPasswordSlot: UpdateProblem = UpdateProblem_noPasswordSlot; /* SHORT_NAMED_INTEGER_VALUE */
let _cached_decoder_for_UpdateProblem: __utils.ASN1Decoder<
    UpdateProblem
> | null = null;
let _cached_encoder_for_UpdateProblem: __utils.ASN1Encoder<
    UpdateProblem
> | null = null;
export function _decode_UpdateProblem(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UpdateProblem) {
        _cached_decoder_for_UpdateProblem = __utils._decodeInteger;
    }
    return _cached_decoder_for_UpdateProblem(el);
}
export function _encode_UpdateProblem(
    value: UpdateProblem,
    elGetter: __utils.ASN1Encoder<UpdateProblem>
) {
    if (!_cached_encoder_for_UpdateProblem) {
        _cached_encoder_for_UpdateProblem = __utils._encodeInteger;
    }
    return _cached_encoder_for_UpdateProblem(value, elGetter);
}

export type UpdateErrorData_attributeInfo_Item =
    | { attributeType: AttributeType } /* CHOICE_ALT_ROOT */
    | { attribute: Attribute } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_UpdateErrorData_attributeInfo_Item: __utils.ASN1Decoder<
    UpdateErrorData_attributeInfo_Item
> | null = null;
let _cached_encoder_for_UpdateErrorData_attributeInfo_Item: __utils.ASN1Encoder<
    UpdateErrorData_attributeInfo_Item
> | null = null;
export function _decode_UpdateErrorData_attributeInfo_Item(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_UpdateErrorData_attributeInfo_Item) {
        _cached_decoder_for_UpdateErrorData_attributeInfo_Item = __utils._decode_extensible_choice<
            UpdateErrorData_attributeInfo_Item
        >({
            "UNIVERSAL 6": ["attributeType", _decode_AttributeType],
            "UNIVERSAL 16": ["attribute", _decode_Attribute],
        });
    }
    return _cached_decoder_for_UpdateErrorData_attributeInfo_Item(el);
}
export function _encode_UpdateErrorData_attributeInfo_Item(
    value: UpdateErrorData_attributeInfo_Item,
    elGetter: __utils.ASN1Encoder<UpdateErrorData_attributeInfo_Item>
) {
    if (!_cached_encoder_for_UpdateErrorData_attributeInfo_Item) {
        _cached_encoder_for_UpdateErrorData_attributeInfo_Item = __utils._encode_choice<
            UpdateErrorData_attributeInfo_Item
        >(
            {
                attributeType: _encode_AttributeType,
                attribute: _encode_Attribute,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_UpdateErrorData_attributeInfo_Item(
        value,
        elGetter
    );
}

export class UpdateErrorData {
    constructor(
        readonly problem: UpdateProblem,
        readonly attributeInfo:
            | UpdateErrorData_attributeInfo_Item[]
            | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_UpdateErrorData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "problem",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributeInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_UpdateErrorData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_UpdateErrorData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_UpdateErrorData: __utils.ASN1Decoder<
    UpdateErrorData
> | null = null;
let _cached_encoder_for_UpdateErrorData: __utils.ASN1Encoder<
    UpdateErrorData
> | null = null;
export function _decode_UpdateErrorData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UpdateErrorData) {
        _cached_decoder_for_UpdateErrorData = function (
            el: asn1.ASN1Element
        ): UpdateErrorData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: UpdateProblem;
            let attributeInfo: asn1.OPTIONAL<
                UpdateErrorData_attributeInfo_Item[]
            >;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                UpdateErrorData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                problem: (_el: asn1.ASN1Element): void => {
                    problem = __utils._decode_explicit<UpdateProblem>(
                        () => _decode_UpdateProblem
                    )(_el);
                },
                attributeInfo: (_el: asn1.ASN1Element): void => {
                    attributeInfo = __utils._decode_explicit<
                        UpdateErrorData_attributeInfo_Item[]
                    >(() =>
                        __utils._decodeSetOf<
                            UpdateErrorData_attributeInfo_Item
                        >(() => _decode_UpdateErrorData_attributeInfo_Item)
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UpdateErrorData,
                _extension_additions_list_spec_for_UpdateErrorData,
                _root_component_type_list_2_spec_for_UpdateErrorData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new UpdateErrorData(
                /* SET_CONSTRUCTOR_CALL */ problem,
                attributeInfo,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_UpdateErrorData(el);
}
export function _encode_UpdateErrorData(
    value: UpdateErrorData,
    elGetter: __utils.ASN1Encoder<UpdateErrorData>
) {
    if (!_cached_encoder_for_UpdateErrorData) {
        _cached_encoder_for_UpdateErrorData = function (
            value: UpdateErrorData,
            elGetter: __utils.ASN1Encoder<UpdateErrorData>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_UpdateProblem,
                                __utils.BER
                            )(value.problem, __utils.BER),
                            /* IF_ABSENT  */ value.attributeInfo === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () =>
                                          __utils._encodeSetOf<
                                              UpdateErrorData_attributeInfo_Item
                                          >(
                                              () =>
                                                  _encode_UpdateErrorData_attributeInfo_Item,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.attributeInfo, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                UpdateErrorData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_UpdateErrorData(value, elGetter);
}

export const id_at_family_information: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [64],
    id_at
);

export type FamilyEntry_information_Item =
    | { attributeType: AttributeType } /* CHOICE_ALT_ROOT */
    | { attribute: Attribute } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_FamilyEntry_information_Item: __utils.ASN1Decoder<
    FamilyEntry_information_Item
> | null = null;
let _cached_encoder_for_FamilyEntry_information_Item: __utils.ASN1Encoder<
    FamilyEntry_information_Item
> | null = null;
export function _decode_FamilyEntry_information_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_FamilyEntry_information_Item) {
        _cached_decoder_for_FamilyEntry_information_Item = __utils._decode_extensible_choice<
            FamilyEntry_information_Item
        >({
            "UNIVERSAL 6": ["attributeType", _decode_AttributeType],
            "UNIVERSAL 16": ["attribute", _decode_Attribute],
        });
    }
    return _cached_decoder_for_FamilyEntry_information_Item(el);
}
export function _encode_FamilyEntry_information_Item(
    value: FamilyEntry_information_Item,
    elGetter: __utils.ASN1Encoder<FamilyEntry_information_Item>
) {
    if (!_cached_encoder_for_FamilyEntry_information_Item) {
        _cached_encoder_for_FamilyEntry_information_Item = __utils._encode_choice<
            FamilyEntry_information_Item
        >(
            {
                attributeType: _encode_AttributeType,
                attribute: _encode_Attribute,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_FamilyEntry_information_Item(value, elGetter);
}

export class FamilyEntry {
    constructor(
        readonly rdn: RelativeDistinguishedName,
        readonly information: FamilyEntry_information_Item[],
        readonly family_info: FamilyEntries[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_FamilyEntry: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "rdn",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "information",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "family-info",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_FamilyEntry: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_FamilyEntry: __utils.ComponentSpec[] = [];
let _cached_decoder_for_FamilyEntry: __utils.ASN1Decoder<
    FamilyEntry
> | null = null;
let _cached_encoder_for_FamilyEntry: __utils.ASN1Encoder<
    FamilyEntry
> | null = null;
export function _decode_FamilyEntry(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_FamilyEntry) {
        _cached_decoder_for_FamilyEntry = function (
            el: asn1.ASN1Element
        ): FamilyEntry {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let rdn!: RelativeDistinguishedName;
            let information!: FamilyEntry_information_Item[];
            let family_info: asn1.OPTIONAL<FamilyEntries[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                rdn: (_el: asn1.ASN1Element): void => {
                    rdn = _decode_RelativeDistinguishedName(_el);
                },
                information: (_el: asn1.ASN1Element): void => {
                    information = __utils._decodeSequenceOf<
                        FamilyEntry_information_Item
                    >(() => _decode_FamilyEntry_information_Item)(_el);
                },
                "family-info": (_el: asn1.ASN1Element): void => {
                    family_info = __utils._decodeSequenceOf<FamilyEntries>(
                        () => _decode_FamilyEntries
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FamilyEntry,
                _extension_additions_list_spec_for_FamilyEntry,
                _root_component_type_list_2_spec_for_FamilyEntry,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new FamilyEntry(
                /* SEQUENCE_CONSTRUCTOR_CALL */ rdn,
                information,
                family_info,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_FamilyEntry(el);
}
export function _encode_FamilyEntry(
    value: FamilyEntry,
    elGetter: __utils.ASN1Encoder<FamilyEntry>
) {
    if (!_cached_encoder_for_FamilyEntry) {
        _cached_encoder_for_FamilyEntry = function (
            value: FamilyEntry,
            elGetter: __utils.ASN1Encoder<FamilyEntry>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_RelativeDistinguishedName(
                                value.rdn,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeSequenceOf<
                                FamilyEntry_information_Item
                            >(
                                () => _encode_FamilyEntry_information_Item,
                                __utils.BER
                            )(value.information, __utils.BER),
                            /* IF_ABSENT  */ value.family_info === undefined
                                ? undefined
                                : __utils._encodeSequenceOf<FamilyEntries>(
                                      () => _encode_FamilyEntries,
                                      __utils.BER
                                  )(value.family_info, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_FamilyEntry(value, elGetter);
}

export class FamilyEntries {
    constructor(
        readonly family_class: asn1.OBJECT_IDENTIFIER,
        readonly familyEntries: FamilyEntry[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_FamilyEntries: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "family-class",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "familyEntries",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_FamilyEntries: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_FamilyEntries: __utils.ComponentSpec[] = [];
let _cached_decoder_for_FamilyEntries: __utils.ASN1Decoder<
    FamilyEntries
> | null = null;
let _cached_encoder_for_FamilyEntries: __utils.ASN1Encoder<
    FamilyEntries
> | null = null;
export function _decode_FamilyEntries(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_FamilyEntries) {
        _cached_decoder_for_FamilyEntries = function (
            el: asn1.ASN1Element
        ): FamilyEntries {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "FamilyEntries contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "family-class";
            sequence[1].name = "familyEntries";
            let family_class!: asn1.OBJECT_IDENTIFIER;
            let familyEntries!: FamilyEntry[];
            family_class = __utils._decodeObjectIdentifier(sequence[0]);
            familyEntries = __utils._decodeSequenceOf<FamilyEntry>(
                () => _decode_FamilyEntry
            )(sequence[1]);
            // TODO: Validate values.
            return new FamilyEntries(
                family_class,
                familyEntries,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_FamilyEntries(el);
}
export function _encode_FamilyEntries(
    value: FamilyEntries,
    elGetter: __utils.ASN1Encoder<FamilyEntries>
) {
    if (!_cached_encoder_for_FamilyEntries) {
        _cached_encoder_for_FamilyEntries = function (
            value: FamilyEntries,
            elGetter: __utils.ASN1Encoder<FamilyEntries>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.family_class,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeSequenceOf<
                                FamilyEntry
                            >(() => _encode_FamilyEntry, __utils.BER)(
                                value.familyEntries,
                                __utils.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_FamilyEntries(value, elGetter);
}

export class ListResultData_listInfo_subordinates_Item {
    constructor(
        readonly rdn: RelativeDistinguishedName,
        readonly aliasEntry: asn1.BOOLEAN | undefined,
        readonly fromEntry: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_aliasEntry() {
        return false;
    }
    public static get _default_value_for_fromEntry() {
        return true;
    }
}
export const _root_component_type_list_1_spec_for_ListResultData_listInfo_subordinates_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "rdn",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasEntry",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "fromEntry",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ListResultData_listInfo_subordinates_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ListResultData_listInfo_subordinates_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ListResultData_listInfo_subordinates_Item: __utils.ASN1Decoder<
    ListResultData_listInfo_subordinates_Item
> | null = null;
let _cached_encoder_for_ListResultData_listInfo_subordinates_Item: __utils.ASN1Encoder<
    ListResultData_listInfo_subordinates_Item
> | null = null;
export function _decode_ListResultData_listInfo_subordinates_Item(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_ListResultData_listInfo_subordinates_Item) {
        _cached_decoder_for_ListResultData_listInfo_subordinates_Item = function (
            el: asn1.ASN1Element
        ): ListResultData_listInfo_subordinates_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let rdn!: RelativeDistinguishedName;
            let aliasEntry: asn1.OPTIONAL<asn1.BOOLEAN> =
                ListResultData_listInfo_subordinates_Item._default_value_for_aliasEntry;
            let fromEntry: asn1.OPTIONAL<asn1.BOOLEAN> =
                ListResultData_listInfo_subordinates_Item._default_value_for_fromEntry;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                rdn: (_el: asn1.ASN1Element): void => {
                    rdn = _decode_RelativeDistinguishedName(_el);
                },
                aliasEntry: (_el: asn1.ASN1Element): void => {
                    aliasEntry = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                fromEntry: (_el: asn1.ASN1Element): void => {
                    fromEntry = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ListResultData_listInfo_subordinates_Item,
                _extension_additions_list_spec_for_ListResultData_listInfo_subordinates_Item,
                _root_component_type_list_2_spec_for_ListResultData_listInfo_subordinates_Item,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ListResultData_listInfo_subordinates_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ rdn,
                aliasEntry,
                fromEntry,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ListResultData_listInfo_subordinates_Item(el);
}
export function _encode_ListResultData_listInfo_subordinates_Item(
    value: ListResultData_listInfo_subordinates_Item,
    elGetter: __utils.ASN1Encoder<ListResultData_listInfo_subordinates_Item>
) {
    if (!_cached_encoder_for_ListResultData_listInfo_subordinates_Item) {
        _cached_encoder_for_ListResultData_listInfo_subordinates_Item = function (
            value: ListResultData_listInfo_subordinates_Item,
            elGetter: __utils.ASN1Encoder<
                ListResultData_listInfo_subordinates_Item
            >
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_RelativeDistinguishedName(
                                value.rdn,
                                __utils.BER
                            ),
                            /* IF_DEFAULT */ value.aliasEntry === undefined ||
                            __utils.deepEq(
                                value.aliasEntry,
                                ListResultData_listInfo_subordinates_Item._default_value_for_aliasEntry
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasEntry, __utils.BER),
                            /* IF_DEFAULT */ value.fromEntry === undefined ||
                            __utils.deepEq(
                                value.fromEntry,
                                ListResultData_listInfo_subordinates_Item._default_value_for_fromEntry
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.fromEntry, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ListResultData_listInfo_subordinates_Item(
        value,
        elGetter
    );
}

export type LimitProblem = asn1.INTEGER;
export const LimitProblem_timeLimitExceeded: LimitProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
export const LimitProblem_sizeLimitExceeded: LimitProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
export const LimitProblem_administrativeLimitExceeded: LimitProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_LimitProblem: __utils.ASN1Decoder<
    LimitProblem
> | null = null;
let _cached_encoder_for_LimitProblem: __utils.ASN1Encoder<
    LimitProblem
> | null = null;
export function _decode_LimitProblem(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_LimitProblem) {
        _cached_decoder_for_LimitProblem = __utils._decodeInteger;
    }
    return _cached_decoder_for_LimitProblem(el);
}
export function _encode_LimitProblem(
    value: LimitProblem,
    elGetter: __utils.ASN1Encoder<LimitProblem>
) {
    if (!_cached_encoder_for_LimitProblem) {
        _cached_encoder_for_LimitProblem = __utils._encodeInteger;
    }
    return _cached_encoder_for_LimitProblem(value, elGetter);
}

export type PartialOutcomeQualifier_entryCount =
    | { bestEstimate: asn1.INTEGER } /* CHOICE_ALT_ROOT */
    | { lowEstimate: asn1.INTEGER } /* CHOICE_ALT_ROOT */
    | { exact: asn1.INTEGER } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_PartialOutcomeQualifier_entryCount: __utils.ASN1Decoder<
    PartialOutcomeQualifier_entryCount
> | null = null;
let _cached_encoder_for_PartialOutcomeQualifier_entryCount: __utils.ASN1Encoder<
    PartialOutcomeQualifier_entryCount
> | null = null;
export function _decode_PartialOutcomeQualifier_entryCount(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_PartialOutcomeQualifier_entryCount) {
        _cached_decoder_for_PartialOutcomeQualifier_entryCount = __utils._decode_extensible_choice<
            PartialOutcomeQualifier_entryCount
        >({
            "CONTEXT 7": [
                "bestEstimate",
                __utils._decode_explicit<asn1.INTEGER>(
                    () => __utils._decodeInteger
                ),
            ],
            "CONTEXT 8": [
                "lowEstimate",
                __utils._decode_explicit<asn1.INTEGER>(
                    () => __utils._decodeInteger
                ),
            ],
            "CONTEXT 9": [
                "exact",
                __utils._decode_explicit<asn1.INTEGER>(
                    () => __utils._decodeInteger
                ),
            ],
        });
    }
    return _cached_decoder_for_PartialOutcomeQualifier_entryCount(el);
}
export function _encode_PartialOutcomeQualifier_entryCount(
    value: PartialOutcomeQualifier_entryCount,
    elGetter: __utils.ASN1Encoder<PartialOutcomeQualifier_entryCount>
) {
    if (!_cached_encoder_for_PartialOutcomeQualifier_entryCount) {
        _cached_encoder_for_PartialOutcomeQualifier_entryCount = __utils._encode_choice<
            PartialOutcomeQualifier_entryCount
        >(
            {
                bestEstimate: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    7,
                    () => __utils._encodeInteger,
                    __utils.BER
                ),
                lowEstimate: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    8,
                    () => __utils._encodeInteger,
                    __utils.BER
                ),
                exact: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    9,
                    () => __utils._encodeInteger,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_PartialOutcomeQualifier_entryCount(
        value,
        elGetter
    );
}

export class PartialOutcomeQualifier {
    constructor(
        readonly limitProblem: LimitProblem | undefined,
        readonly unexplored: ContinuationReference[] | undefined,
        readonly unavailableCriticalExtensions: asn1.BOOLEAN | undefined,
        readonly unknownErrors: asn1.ASN1Element[] | undefined,
        readonly queryReference: asn1.OCTET_STRING | undefined,
        readonly overspecFilter: Filter | undefined,
        readonly notification: Attribute[] | undefined,
        readonly entryCount: PartialOutcomeQualifier_entryCount | undefined
    ) {}
    public static get _default_value_for_unavailableCriticalExtensions() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_PartialOutcomeQualifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "limitProblem",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "unexplored",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "unavailableCriticalExtensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "unknownErrors",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "queryReference",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "overspecFilter",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entryCount",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PartialOutcomeQualifier: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PartialOutcomeQualifier: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PartialOutcomeQualifier: __utils.ASN1Decoder<
    PartialOutcomeQualifier
> | null = null;
let _cached_encoder_for_PartialOutcomeQualifier: __utils.ASN1Encoder<
    PartialOutcomeQualifier
> | null = null;
export function _decode_PartialOutcomeQualifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PartialOutcomeQualifier) {
        _cached_decoder_for_PartialOutcomeQualifier = function (
            el: asn1.ASN1Element
        ): PartialOutcomeQualifier {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let limitProblem: asn1.OPTIONAL<LimitProblem>;
            let unexplored: asn1.OPTIONAL<ContinuationReference[]>;
            let unavailableCriticalExtensions: asn1.OPTIONAL<asn1.BOOLEAN> =
                PartialOutcomeQualifier._default_value_for_unavailableCriticalExtensions;
            let unknownErrors: asn1.OPTIONAL<asn1.ASN1Element[]>;
            let queryReference: asn1.OPTIONAL<asn1.OCTET_STRING>;
            let overspecFilter: asn1.OPTIONAL<Filter>;
            let notification: asn1.OPTIONAL<Attribute[]>;
            let entryCount: asn1.OPTIONAL<PartialOutcomeQualifier_entryCount>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                limitProblem: (_el: asn1.ASN1Element): void => {
                    limitProblem = __utils._decode_explicit<LimitProblem>(
                        () => _decode_LimitProblem
                    )(_el);
                },
                unexplored: (_el: asn1.ASN1Element): void => {
                    unexplored = __utils._decode_explicit<
                        ContinuationReference[]
                    >(() =>
                        __utils._decodeSetOf<ContinuationReference>(
                            () => _decode_ContinuationReference
                        )
                    )(_el);
                },
                unavailableCriticalExtensions: (
                    _el: asn1.ASN1Element
                ): void => {
                    unavailableCriticalExtensions = __utils._decode_explicit<
                        asn1.BOOLEAN
                    >(() => __utils._decodeBoolean)(_el);
                },
                unknownErrors: (_el: asn1.ASN1Element): void => {
                    unknownErrors = __utils._decode_explicit<
                        asn1.ASN1Element[]
                    >(() =>
                        __utils._decodeSetOf<asn1.ASN1Element>(
                            () => __utils._decodeAny
                        )
                    )(_el);
                },
                queryReference: (_el: asn1.ASN1Element): void => {
                    queryReference = __utils._decode_explicit<
                        asn1.OCTET_STRING
                    >(() => __utils._decodeOctetString)(_el);
                },
                overspecFilter: (_el: asn1.ASN1Element): void => {
                    overspecFilter = __utils._decode_explicit<Filter>(
                        () => _decode_Filter
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
                entryCount: (_el: asn1.ASN1Element): void => {
                    entryCount = _decode_PartialOutcomeQualifier_entryCount(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PartialOutcomeQualifier,
                _extension_additions_list_spec_for_PartialOutcomeQualifier,
                _root_component_type_list_2_spec_for_PartialOutcomeQualifier,
                undefined
            );
            return new PartialOutcomeQualifier(
                /* SET_CONSTRUCTOR_CALL */ limitProblem,
                unexplored,
                unavailableCriticalExtensions,
                unknownErrors,
                queryReference,
                overspecFilter,
                notification,
                entryCount
            );
        };
    }
    return _cached_decoder_for_PartialOutcomeQualifier(el);
}
export function _encode_PartialOutcomeQualifier(
    value: PartialOutcomeQualifier,
    elGetter: __utils.ASN1Encoder<PartialOutcomeQualifier>
) {
    if (!_cached_encoder_for_PartialOutcomeQualifier) {
        _cached_encoder_for_PartialOutcomeQualifier = function (
            value: PartialOutcomeQualifier,
            elGetter: __utils.ASN1Encoder<PartialOutcomeQualifier>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.limitProblem === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_LimitProblem,
                                  __utils.BER
                              )(value.limitProblem, __utils.BER),
                        /* IF_ABSENT  */ value.unexplored === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () =>
                                      __utils._encodeSetOf<
                                          ContinuationReference
                                      >(
                                          () => _encode_ContinuationReference,
                                          __utils.BER
                                      ),
                                  __utils.BER
                              )(value.unexplored, __utils.BER),
                        /* IF_DEFAULT */ value.unavailableCriticalExtensions ===
                            undefined ||
                        __utils.deepEq(
                            value.unavailableCriticalExtensions,
                            PartialOutcomeQualifier._default_value_for_unavailableCriticalExtensions
                        )
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => __utils._encodeBoolean,
                                  __utils.BER
                              )(
                                  value.unavailableCriticalExtensions,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.unknownErrors === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () =>
                                      __utils._encodeSetOf<asn1.ASN1Element>(
                                          () => __utils._encodeAny,
                                          __utils.BER
                                      ),
                                  __utils.BER
                              )(value.unknownErrors, __utils.BER),
                        /* IF_ABSENT  */ value.queryReference === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  4,
                                  () => __utils._encodeOctetString,
                                  __utils.BER
                              )(value.queryReference, __utils.BER),
                        /* IF_ABSENT  */ value.overspecFilter === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  5,
                                  () => _encode_Filter,
                                  __utils.BER
                              )(value.overspecFilter, __utils.BER),
                        /* IF_ABSENT  */ value.notification === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  6,
                                  () =>
                                      __utils._encodeSequenceOf<Attribute>(
                                          () => _encode_Attribute,
                                          __utils.BER
                                      ),
                                  __utils.BER
                              )(value.notification, __utils.BER),
                        /* IF_ABSENT  */ value.entryCount === undefined
                            ? undefined
                            : _encode_PartialOutcomeQualifier_entryCount(
                                  value.entryCount,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_PartialOutcomeQualifier(value, elGetter);
}

export class ListResultData_listInfo {
    constructor(
        readonly name: Name | undefined,
        readonly subordinates: ListResultData_listInfo_subordinates_Item[],
        readonly partialOutcomeQualifier: PartialOutcomeQualifier | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_ListResultData_listInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "name",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subordinates",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "partialOutcomeQualifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ListResultData_listInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_ListResultData_listInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ListResultData_listInfo: __utils.ASN1Decoder<
    ListResultData_listInfo
> | null = null;
let _cached_encoder_for_ListResultData_listInfo: __utils.ASN1Encoder<
    ListResultData_listInfo
> | null = null;
export function _decode_ListResultData_listInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ListResultData_listInfo) {
        _cached_decoder_for_ListResultData_listInfo = function (
            el: asn1.ASN1Element
        ): ListResultData_listInfo {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let name: asn1.OPTIONAL<Name>;
            let subordinates!: ListResultData_listInfo_subordinates_Item[];
            let partialOutcomeQualifier: asn1.OPTIONAL<PartialOutcomeQualifier>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                ListResultData_listInfo._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                name: (_el: asn1.ASN1Element): void => {
                    name = _decode_Name(_el);
                },
                subordinates: (_el: asn1.ASN1Element): void => {
                    subordinates = __utils._decode_explicit<
                        ListResultData_listInfo_subordinates_Item[]
                    >(() =>
                        __utils._decodeSetOf<
                            ListResultData_listInfo_subordinates_Item
                        >(
                            () =>
                                _decode_ListResultData_listInfo_subordinates_Item
                        )
                    )(_el);
                },
                partialOutcomeQualifier: (_el: asn1.ASN1Element): void => {
                    partialOutcomeQualifier = __utils._decode_explicit<
                        PartialOutcomeQualifier
                    >(() => _decode_PartialOutcomeQualifier)(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ListResultData_listInfo,
                _extension_additions_list_spec_for_ListResultData_listInfo,
                _root_component_type_list_2_spec_for_ListResultData_listInfo,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ListResultData_listInfo(
                /* SET_CONSTRUCTOR_CALL */ name,
                subordinates,
                partialOutcomeQualifier,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_ListResultData_listInfo(el);
}
export function _encode_ListResultData_listInfo(
    value: ListResultData_listInfo,
    elGetter: __utils.ASN1Encoder<ListResultData_listInfo>
) {
    if (!_cached_encoder_for_ListResultData_listInfo) {
        _cached_encoder_for_ListResultData_listInfo = function (
            value: ListResultData_listInfo,
            elGetter: __utils.ASN1Encoder<ListResultData_listInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : _encode_Name(value.name, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () =>
                                    __utils._encodeSetOf<
                                        ListResultData_listInfo_subordinates_Item
                                    >(
                                        () =>
                                            _encode_ListResultData_listInfo_subordinates_Item,
                                        __utils.BER
                                    ),
                                __utils.BER
                            )(value.subordinates, __utils.BER),
                            /* IF_ABSENT  */ value.partialOutcomeQualifier ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_PartialOutcomeQualifier,
                                      __utils.BER
                                  )(value.partialOutcomeQualifier, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                ListResultData_listInfo._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ListResultData_listInfo(value, elGetter);
}

export type ListResultData =
    | { listInfo: ListResultData_listInfo } /* CHOICE_ALT_ROOT */
    | { uncorrelatedListInfo: ListResult[] } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ListResultData: __utils.ASN1Decoder<
    ListResultData
> | null = null;
let _cached_encoder_for_ListResultData: __utils.ASN1Encoder<
    ListResultData
> | null = null;
export function _decode_ListResultData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ListResultData) {
        _cached_decoder_for_ListResultData = __utils._decode_extensible_choice<
            ListResultData
        >({
            "UNIVERSAL 17": ["listInfo", _decode_ListResultData_listInfo],
            "CONTEXT 0": [
                "uncorrelatedListInfo",
                __utils._decode_explicit<ListResult[]>(() =>
                    __utils._decodeSetOf<ListResult>(() => _decode_ListResult)
                ),
            ],
        });
    }
    return _cached_decoder_for_ListResultData(el);
}
export function _encode_ListResultData(
    value: ListResultData,
    elGetter: __utils.ASN1Encoder<ListResultData>
) {
    if (!_cached_encoder_for_ListResultData) {
        _cached_encoder_for_ListResultData = __utils._encode_choice<
            ListResultData
        >(
            {
                listInfo: _encode_ListResultData_listInfo,
                uncorrelatedListInfo: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () =>
                        __utils._encodeSetOf<ListResult>(
                            () => _encode_ListResult,
                            __utils.BER
                        ),
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ListResultData(value, elGetter);
}

export type ListResult = OPTIONALLY_PROTECTED<ListResultData>; // DefinedType
let _cached_decoder_for_ListResult: __utils.ASN1Decoder<
    ListResult
> | null = null;
let _cached_encoder_for_ListResult: __utils.ASN1Encoder<
    ListResult
> | null = null;
export function _decode_ListResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ListResult) {
        _cached_decoder_for_ListResult = _get_decoder_for_OPTIONALLY_PROTECTED<
            ListResultData
        >(_decode_ListResultData);
    }
    return _cached_decoder_for_ListResult(el);
}
export function _encode_ListResult(
    value: ListResult,
    elGetter: __utils.ASN1Encoder<ListResult>
) {
    if (!_cached_encoder_for_ListResult) {
        _cached_encoder_for_ListResult = _get_encoder_for_OPTIONALLY_PROTECTED<
            ListResultData
        >(_encode_ListResultData);
    }
    return _cached_encoder_for_ListResult(value, elGetter);
}

export class SearchResultData_searchInfo {
    constructor(
        readonly name: Name | undefined,
        readonly entries: EntryInformation[],
        readonly partialOutcomeQualifier: PartialOutcomeQualifier | undefined,
        readonly altMatching: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_altMatching() {
        return false;
    }
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_SearchResultData_searchInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "name",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entries",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "partialOutcomeQualifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "altMatching",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SearchResultData_searchInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_SearchResultData_searchInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SearchResultData_searchInfo: __utils.ASN1Decoder<
    SearchResultData_searchInfo
> | null = null;
let _cached_encoder_for_SearchResultData_searchInfo: __utils.ASN1Encoder<
    SearchResultData_searchInfo
> | null = null;
export function _decode_SearchResultData_searchInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SearchResultData_searchInfo) {
        _cached_decoder_for_SearchResultData_searchInfo = function (
            el: asn1.ASN1Element
        ): SearchResultData_searchInfo {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let name: asn1.OPTIONAL<Name>;
            let entries!: EntryInformation[];
            let partialOutcomeQualifier: asn1.OPTIONAL<PartialOutcomeQualifier>;
            let altMatching: asn1.OPTIONAL<asn1.BOOLEAN> =
                SearchResultData_searchInfo._default_value_for_altMatching;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                SearchResultData_searchInfo._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                name: (_el: asn1.ASN1Element): void => {
                    name = _decode_Name(_el);
                },
                entries: (_el: asn1.ASN1Element): void => {
                    entries = __utils._decode_explicit<EntryInformation[]>(() =>
                        __utils._decodeSetOf<EntryInformation>(
                            () => _decode_EntryInformation
                        )
                    )(_el);
                },
                partialOutcomeQualifier: (_el: asn1.ASN1Element): void => {
                    partialOutcomeQualifier = __utils._decode_explicit<
                        PartialOutcomeQualifier
                    >(() => _decode_PartialOutcomeQualifier)(_el);
                },
                altMatching: (_el: asn1.ASN1Element): void => {
                    altMatching = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SearchResultData_searchInfo,
                _extension_additions_list_spec_for_SearchResultData_searchInfo,
                _root_component_type_list_2_spec_for_SearchResultData_searchInfo,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SearchResultData_searchInfo(
                /* SET_CONSTRUCTOR_CALL */ name,
                entries,
                partialOutcomeQualifier,
                altMatching,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_SearchResultData_searchInfo(el);
}
export function _encode_SearchResultData_searchInfo(
    value: SearchResultData_searchInfo,
    elGetter: __utils.ASN1Encoder<SearchResultData_searchInfo>
) {
    if (!_cached_encoder_for_SearchResultData_searchInfo) {
        _cached_encoder_for_SearchResultData_searchInfo = function (
            value: SearchResultData_searchInfo,
            elGetter: __utils.ASN1Encoder<SearchResultData_searchInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : _encode_Name(value.name, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () =>
                                    __utils._encodeSetOf<EntryInformation>(
                                        () => _encode_EntryInformation,
                                        __utils.BER
                                    ),
                                __utils.BER
                            )(value.entries, __utils.BER),
                            /* IF_ABSENT  */ value.partialOutcomeQualifier ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_PartialOutcomeQualifier,
                                      __utils.BER
                                  )(value.partialOutcomeQualifier, __utils.BER),
                            /* IF_DEFAULT */ value.altMatching === undefined ||
                            __utils.deepEq(
                                value.altMatching,
                                SearchResultData_searchInfo._default_value_for_altMatching
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.altMatching, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                SearchResultData_searchInfo._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SearchResultData_searchInfo(value, elGetter);
}

export type SearchResultData =
    | { searchInfo: SearchResultData_searchInfo } /* CHOICE_ALT_ROOT */
    | { uncorrelatedSearchInfo: SearchResult[] } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_SearchResultData: __utils.ASN1Decoder<
    SearchResultData
> | null = null;
let _cached_encoder_for_SearchResultData: __utils.ASN1Encoder<
    SearchResultData
> | null = null;
export function _decode_SearchResultData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SearchResultData) {
        _cached_decoder_for_SearchResultData = __utils._decode_extensible_choice<
            SearchResultData
        >({
            "UNIVERSAL 17": ["searchInfo", _decode_SearchResultData_searchInfo],
            "CONTEXT 0": [
                "uncorrelatedSearchInfo",
                __utils._decode_explicit<SearchResult[]>(() =>
                    __utils._decodeSetOf<SearchResult>(
                        () => _decode_SearchResult
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_SearchResultData(el);
}
export function _encode_SearchResultData(
    value: SearchResultData,
    elGetter: __utils.ASN1Encoder<SearchResultData>
) {
    if (!_cached_encoder_for_SearchResultData) {
        _cached_encoder_for_SearchResultData = __utils._encode_choice<
            SearchResultData
        >(
            {
                searchInfo: _encode_SearchResultData_searchInfo,
                uncorrelatedSearchInfo: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () =>
                        __utils._encodeSetOf<SearchResult>(
                            () => _encode_SearchResult,
                            __utils.BER
                        ),
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_SearchResultData(value, elGetter);
}

export type SearchResult = OPTIONALLY_PROTECTED<SearchResultData>; // DefinedType
let _cached_decoder_for_SearchResult: __utils.ASN1Decoder<
    SearchResult
> | null = null;
let _cached_encoder_for_SearchResult: __utils.ASN1Encoder<
    SearchResult
> | null = null;
export function _decode_SearchResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SearchResult) {
        _cached_decoder_for_SearchResult = _get_decoder_for_OPTIONALLY_PROTECTED<
            SearchResultData
        >(_decode_SearchResultData);
    }
    return _cached_decoder_for_SearchResult(el);
}
export function _encode_SearchResult(
    value: SearchResult,
    elGetter: __utils.ASN1Encoder<SearchResult>
) {
    if (!_cached_encoder_for_SearchResult) {
        _cached_encoder_for_SearchResult = _get_encoder_for_OPTIONALLY_PROTECTED<
            SearchResultData
        >(_encode_SearchResultData);
    }
    return _cached_encoder_for_SearchResult(value, elGetter);
}

/* END_MODULE DirectoryAbstractService */
