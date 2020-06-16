/*
    BEGIN_MODULE PkiPMIProtocolSpecifications
    OID: joint-iso-itu-t.ds.module.pkiPMIProtocolSpecifications.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    AvlSerialNumber,
    CertAVL,
    Certificate,
    CertificateSerialNumber,
    PKCertIdentifier,
    Version_v1 as v1 /* IMPORTED_NAMED_INTEGER */,
    _decode_AvlSerialNumber,
    _decode_CertAVL,
    _decode_Certificate,
    _decode_CertificateSerialNumber,
    _decode_PKCertIdentifier,
    _encode_AvlSerialNumber,
    _encode_CertAVL,
    _encode_Certificate,
    _encode_CertificateSerialNumber,
    _encode_PKCertIdentifier,
} from "./AuthenticationFramework";
import {
    CRLReason,
    _decode_CRLReason,
    _encode_CRLReason,
} from "./CertificateExtensions";
import {
    Attribute,
    Name,
    _decode_Attribute,
    _decode_Name,
    _encode_Attribute,
    _encode_Name,
} from "./InformationFramework";
import {
    PkiWaError,
    _decode_PkiWaError,
    _encode_PkiWaError,
} from "./PkiPmiWrapper";
import { id_cmsct } from "./UsefulDefinitions";
import * as __utils from "./__utils";
export {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "./AttributeCertificateDefinitions";
export {
    AlgorithmIdentifier,
    AvlSerialNumber,
    CertAVL,
    Certificate,
    CertificateList,
    CertificateSerialNumber,
    ENCRYPTED_HASH,
    PKCertIdentifier,
    PkiPath,
    SIGNATURE,
    TBSCertAVL,
    Version,
    _decode_AlgorithmIdentifier,
    _decode_AvlSerialNumber,
    _decode_CertAVL,
    _decode_Certificate,
    _decode_CertificateList,
    _decode_CertificateSerialNumber,
    _decode_PKCertIdentifier,
    _decode_PkiPath,
    _decode_SIGNATURE,
    _decode_TBSCertAVL,
    _decode_Version,
    _encode_AlgorithmIdentifier,
    _encode_AvlSerialNumber,
    _encode_CertAVL,
    _encode_Certificate,
    _encode_CertificateList,
    _encode_CertificateSerialNumber,
    _encode_PKCertIdentifier,
    _encode_PkiPath,
    _encode_SIGNATURE,
    _encode_TBSCertAVL,
    _encode_Version,
    _get_decoder_for_ENCRYPTED_HASH,
    _get_encoder_for_ENCRYPTED_HASH,
} from "./AuthenticationFramework";
export {
    CRLReason,
    CRLReason_aACompromise as aACompromise /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_affiliationChanged as affiliationChanged /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_cACompromise as cACompromise /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_certificateHold as certificateHold /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_cessationOfOperation as cessationOfOperation /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_keyCompromise as keyCompromise /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_privilegeWithdrawn as privilegeWithdrawn /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_removeFromCRL as removeFromCRL /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_superseded as superseded /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_unspecified as unspecified /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_weakAlgorithmOrKey as weakAlgorithmOrKey /* IMPORTED_ENUMERATION_ITEM */,
    SubjectKeyIdentifier,
    _decode_CRLReason,
    _decode_SubjectKeyIdentifier,
    _encode_CRLReason,
    _encode_SubjectKeyIdentifier,
} from "./CertificateExtensions";
export {
    Attribute,
    Name,
    _decode_Attribute,
    _decode_Name,
    _encode_Attribute,
    _encode_Name,
} from "./InformationFramework";
export {
    PkiWaError,
    PkiWaError_certificationPathFailure as certificationPathFailure /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_decryptionFailed as decryptionFailed /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_dhAlgorithmMismatch as dhAlgorithmMismatch /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_incompleteCertPath as incompleteCertPath /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_invalideDhPublickey as invalideDhPublickey /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_invalidKeyingMaterial as invalidKeyingMaterial /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_invalidParmsForSymEncryptAlgorithms as invalidParmsForSymEncryptAlgorithms /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_invalidPduSyntax as invalidPduSyntax /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_invalidSignature as invalidSignature /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_keyEncAlgorithmParametersMissing as keyEncAlgorithmParametersMissing /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_keyEncAlgorithmParametersNotAllowed as keyEncAlgorithmParametersNotAllowed /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_missingMandatoryAttributes as missingMandatoryAttributes /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unexpectedPduType as unexpectedPduType /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unknownDHpkCetificate as unknownDHpkCetificate /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unsupportedKeyWrappingAlgorithm as unsupportedKeyWrappingAlgorithm /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unsupportedPduType as unsupportedPduType /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unsupportedSignatureAlgorithm as unsupportedSignatureAlgorithm /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unsupportedWrapperVersion as unsupportedWrapperVersion /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unwantedAttribute as unwantedAttribute /* IMPORTED_ENUMERATION_ITEM */,
    _decode_PkiWaError,
    _encode_PkiWaError,
} from "./PkiPmiWrapper";
export {
    attributeCertificateDefinitions,
    authenticationFramework,
    certificateExtensions,
    id_cmsct,
    informationFramework,
    pkiPmiWrapper,
    selectedAttributeTypes,
} from "./UsefulDefinitions";

// TODO: ObjectSetAssignment: AvlPduSet

// TODO: ObjectAssignment: certReq

export type AVMPversion = asn1.ENUMERATED;
export const AVMPversion_v1: AVMPversion = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMPversion_v2: AVMPversion = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMPversion_v3: AVMPversion = 3; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_AVMPversion: __utils.ASN1Decoder<
    AVMPversion
> | null = null;
let _cached_encoder_for_AVMPversion: __utils.ASN1Encoder<
    AVMPversion
> | null = null;
export function _decode_AVMPversion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AVMPversion) {
        _cached_decoder_for_AVMPversion = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_AVMPversion(el);
}
export function _encode_AVMPversion(
    value: AVMPversion,
    elGetter: __utils.ASN1Encoder<AVMPversion>
) {
    if (!_cached_encoder_for_AVMPversion) {
        _cached_encoder_for_AVMPversion = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_AVMPversion(value, elGetter);
}

export type AVMPsequence = asn1.INTEGER;
let _cached_decoder_for_AVMPsequence: __utils.ASN1Decoder<
    AVMPsequence
> | null = null;
let _cached_encoder_for_AVMPsequence: __utils.ASN1Encoder<
    AVMPsequence
> | null = null;
export function _decode_AVMPsequence(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AVMPsequence) {
        _cached_decoder_for_AVMPsequence = __utils._decodeInteger;
    }
    return _cached_decoder_for_AVMPsequence(el);
}
export function _encode_AVMPsequence(
    value: AVMPsequence,
    elGetter: __utils.ASN1Encoder<AVMPsequence>
) {
    if (!_cached_encoder_for_AVMPsequence) {
        _cached_encoder_for_AVMPsequence = __utils._encodeInteger;
    }
    return _cached_encoder_for_AVMPsequence(value, elGetter);
}

export class AVMPcommonComponents {
    constructor(
        readonly version: AVMPversion | undefined,
        readonly timeStamp: asn1.GeneralizedTime,
        readonly sequence: AVMPsequence,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_AVMPcommonComponents: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "timeStamp",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AVMPcommonComponents: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AVMPcommonComponents: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AVMPcommonComponents: __utils.ASN1Decoder<
    AVMPcommonComponents
> | null = null;
let _cached_encoder_for_AVMPcommonComponents: __utils.ASN1Encoder<
    AVMPcommonComponents
> | null = null;
export function _decode_AVMPcommonComponents(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AVMPcommonComponents) {
        _cached_decoder_for_AVMPcommonComponents = function (
            el: asn1.ASN1Element
        ): AVMPcommonComponents {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<AVMPversion> =
                AVMPcommonComponents._default_value_for_version;
            let timeStamp!: asn1.GeneralizedTime;
            let sequence!: AVMPsequence;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: asn1.ASN1Element): void => {
                    timeStamp = __utils._decodeGeneralizedTime(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AVMPcommonComponents,
                _extension_additions_list_spec_for_AVMPcommonComponents,
                _root_component_type_list_2_spec_for_AVMPcommonComponents,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AVMPcommonComponents(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                timeStamp,
                sequence,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AVMPcommonComponents(el);
}
export function _encode_AVMPcommonComponents(
    value: AVMPcommonComponents,
    elGetter: __utils.ASN1Encoder<AVMPcommonComponents>
) {
    if (!_cached_encoder_for_AVMPcommonComponents) {
        _cached_encoder_for_AVMPcommonComponents = function (
            value: AVMPcommonComponents,
            elGetter: __utils.ASN1Encoder<AVMPcommonComponents>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                AVMPcommonComponents._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ __utils._encodeGeneralizedTime(
                                value.timeStamp,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
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
    return _cached_encoder_for_AVMPcommonComponents(value, elGetter);
}

export class CertReq {
    constructor(
        readonly version: AVMPversion | undefined /* REPLICATED_COMPONENT */,
        readonly timeStamp: asn1.GeneralizedTime /* REPLICATED_COMPONENT */,
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_CertReq: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "timeStamp",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertReq: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertReq: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertReq: __utils.ASN1Decoder<CertReq> | null = null;
let _cached_encoder_for_CertReq: __utils.ASN1Encoder<CertReq> | null = null;
export function _decode_CertReq(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertReq) {
        _cached_decoder_for_CertReq = function (el: asn1.ASN1Element): CertReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<AVMPversion> =
                CertReq._default_value_for_version;
            let timeStamp!: asn1.GeneralizedTime;
            let sequence!: AVMPsequence;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: asn1.ASN1Element): void => {
                    timeStamp = __utils._decodeGeneralizedTime(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertReq,
                _extension_additions_list_spec_for_CertReq,
                _root_component_type_list_2_spec_for_CertReq,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertReq(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                timeStamp,
                sequence,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertReq(el);
}
export function _encode_CertReq(
    value: CertReq,
    elGetter: __utils.ASN1Encoder<CertReq>
) {
    if (!_cached_encoder_for_CertReq) {
        _cached_encoder_for_CertReq = function (
            value: CertReq,
            elGetter: __utils.ASN1Encoder<CertReq>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                CertReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ __utils._encodeGeneralizedTime(
                                value.timeStamp,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
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
    return _cached_encoder_for_CertReq(value, elGetter);
}

// TODO: ObjectAssignment: certRsp

export class CertOK {
    constructor(
        readonly dhCert: Certificate,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertOK: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "dhCert",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertOK: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertOK: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertOK: __utils.ASN1Decoder<CertOK> | null = null;
let _cached_encoder_for_CertOK: __utils.ASN1Encoder<CertOK> | null = null;
export function _decode_CertOK(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertOK) {
        _cached_decoder_for_CertOK = function (el: asn1.ASN1Element): CertOK {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError(
                    "CertOK contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "dhCert";
            let dhCert!: Certificate;
            dhCert = _decode_Certificate(sequence[0]);
            // TODO: Validate values.
            return new CertOK(dhCert, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertOK(el);
}
export function _encode_CertOK(
    value: CertOK,
    elGetter: __utils.ASN1Encoder<CertOK>
) {
    if (!_cached_encoder_for_CertOK) {
        _cached_encoder_for_CertOK = function (
            value: CertOK,
            elGetter: __utils.ASN1Encoder<CertOK>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Certificate(
                                value.dhCert,
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
    return _cached_encoder_for_CertOK(value, elGetter);
}

export type AVMP_error = asn1.ENUMERATED;
export const AVMP_error_noReason: AVMP_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_unknownAvlEntity: AVMP_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_unknownContentType: AVMP_error = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_unsupportedAVMPversion: AVMP_error = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_missingContent: AVMP_error = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_missingContentComponent: AVMP_error = 5; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_invalidContentComponent: AVMP_error = 6; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_sequenceError: AVMP_error = 7; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_protocolError: AVMP_error = 8; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_invalidAvlSignature: AVMP_error = 9; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_duplicateAVL: AVMP_error = 10; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_missingAvlComponent: AVMP_error = 11; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_invalidAvlVersion: AVMP_error = 12; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_notAllowedForConstrainedAVLEntity: AVMP_error = 13; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_constrainedRequired: AVMP_error = 14; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_nonConstrainedRequired: AVMP_error = 15; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_unsupportedCriticalEntryExtension: AVMP_error = 16; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_unsupportedCriticalExtension: AVMP_error = 17; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_maxAVLsExceeded: AVMP_error = 18; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_unknownCert: AVMP_error = 19; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_unknownAVL: AVMP_error = 20; /* LONG_NAMED_ENUMERATED_VALUE */
export const AVMP_error_unsupportedScopeRestriction: AVMP_error = 21; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_AVMP_error: __utils.ASN1Decoder<
    AVMP_error
> | null = null;
let _cached_encoder_for_AVMP_error: __utils.ASN1Encoder<
    AVMP_error
> | null = null;
export function _decode_AVMP_error(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AVMP_error) {
        _cached_decoder_for_AVMP_error = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_AVMP_error(el);
}
export function _encode_AVMP_error(
    value: AVMP_error,
    elGetter: __utils.ASN1Encoder<AVMP_error>
) {
    if (!_cached_encoder_for_AVMP_error) {
        _cached_encoder_for_AVMP_error = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_AVMP_error(value, elGetter);
}

export type CertErr_notOK =
    | { wrErr: PkiWaError } /* CHOICE_ALT_ROOT */
    | { avmpErr: AVMP_error } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertErr_notOK: __utils.ASN1Decoder<
    CertErr_notOK
> | null = null;
let _cached_encoder_for_CertErr_notOK: __utils.ASN1Encoder<
    CertErr_notOK
> | null = null;
export function _decode_CertErr_notOK(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertErr_notOK) {
        _cached_decoder_for_CertErr_notOK = __utils._decode_extensible_choice<
            CertErr_notOK
        >({
            "CONTEXT 0": [
                "wrErr",
                __utils._decode_explicit<PkiWaError>(() => _decode_PkiWaError),
            ],
            "CONTEXT 1": [
                "avmpErr",
                __utils._decode_explicit<AVMP_error>(() => _decode_AVMP_error),
            ],
        });
    }
    return _cached_decoder_for_CertErr_notOK(el);
}
export function _encode_CertErr_notOK(
    value: CertErr_notOK,
    elGetter: __utils.ASN1Encoder<CertErr_notOK>
) {
    if (!_cached_encoder_for_CertErr_notOK) {
        _cached_encoder_for_CertErr_notOK = __utils._encode_choice<
            CertErr_notOK
        >(
            {
                wrErr: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_PkiWaError,
                    __utils.BER
                ),
                avmpErr: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_AVMP_error,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_CertErr_notOK(value, elGetter);
}

export type Notifications = Attribute[]; // SequenceOfType
let _cached_decoder_for_Notifications: __utils.ASN1Decoder<
    Notifications
> | null = null;
let _cached_encoder_for_Notifications: __utils.ASN1Encoder<
    Notifications
> | null = null;
export function _decode_Notifications(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Notifications) {
        _cached_decoder_for_Notifications = __utils._decodeSequenceOf<
            Attribute
        >(() => _decode_Attribute);
    }
    return _cached_decoder_for_Notifications(el);
}
export function _encode_Notifications(
    value: Notifications,
    elGetter: __utils.ASN1Encoder<Notifications>
) {
    if (!_cached_encoder_for_Notifications) {
        _cached_encoder_for_Notifications = __utils._encodeSequenceOf<
            Attribute
        >(() => _encode_Attribute, __utils.BER);
    }
    return _cached_encoder_for_Notifications(value, elGetter);
}

export class CertErr {
    constructor(
        readonly notOK: CertErr_notOK,
        readonly note: Notifications | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertErr: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "notOK",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "note",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertErr: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertErr: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertErr: __utils.ASN1Decoder<CertErr> | null = null;
let _cached_encoder_for_CertErr: __utils.ASN1Encoder<CertErr> | null = null;
export function _decode_CertErr(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertErr) {
        _cached_decoder_for_CertErr = function (el: asn1.ASN1Element): CertErr {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let notOK!: CertErr_notOK;
            let note: asn1.OPTIONAL<Notifications>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                notOK: (_el: asn1.ASN1Element): void => {
                    notOK = _decode_CertErr_notOK(_el);
                },
                note: (_el: asn1.ASN1Element): void => {
                    note = _decode_Notifications(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertErr,
                _extension_additions_list_spec_for_CertErr,
                _root_component_type_list_2_spec_for_CertErr,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertErr(
                /* SEQUENCE_CONSTRUCTOR_CALL */ notOK,
                note,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertErr(el);
}
export function _encode_CertErr(
    value: CertErr,
    elGetter: __utils.ASN1Encoder<CertErr>
) {
    if (!_cached_encoder_for_CertErr) {
        _cached_encoder_for_CertErr = function (
            value: CertErr,
            elGetter: __utils.ASN1Encoder<CertErr>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertErr_notOK(
                                value.notOK,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.note === undefined
                                ? undefined
                                : _encode_Notifications(
                                      value.note,
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
    return _cached_encoder_for_CertErr(value, elGetter);
}

export type CertRsp_result =
    | { success: CertOK } /* CHOICE_ALT_ROOT */
    | { failure: CertErr } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertRsp_result: __utils.ASN1Decoder<
    CertRsp_result
> | null = null;
let _cached_encoder_for_CertRsp_result: __utils.ASN1Encoder<
    CertRsp_result
> | null = null;
export function _decode_CertRsp_result(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertRsp_result) {
        _cached_decoder_for_CertRsp_result = __utils._decode_extensible_choice<
            CertRsp_result
        >({
            "CONTEXT 0": [
                "success",
                __utils._decode_explicit<CertOK>(() => _decode_CertOK),
            ],
            "CONTEXT 1": [
                "failure",
                __utils._decode_explicit<CertErr>(() => _decode_CertErr),
            ],
        });
    }
    return _cached_decoder_for_CertRsp_result(el);
}
export function _encode_CertRsp_result(
    value: CertRsp_result,
    elGetter: __utils.ASN1Encoder<CertRsp_result>
) {
    if (!_cached_encoder_for_CertRsp_result) {
        _cached_encoder_for_CertRsp_result = __utils._encode_choice<
            CertRsp_result
        >(
            {
                success: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_CertOK,
                    __utils.BER
                ),
                failure: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_CertErr,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_CertRsp_result(value, elGetter);
}

export class CertRsp {
    constructor(
        readonly version: AVMPversion | undefined /* REPLICATED_COMPONENT */,
        readonly timeStamp: asn1.GeneralizedTime /* REPLICATED_COMPONENT */,
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        readonly result: CertRsp_result,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_CertRsp: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "timeStamp",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "result",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertRsp: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertRsp: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertRsp: __utils.ASN1Decoder<CertRsp> | null = null;
let _cached_encoder_for_CertRsp: __utils.ASN1Encoder<CertRsp> | null = null;
export function _decode_CertRsp(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertRsp) {
        _cached_decoder_for_CertRsp = function (el: asn1.ASN1Element): CertRsp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<AVMPversion> =
                CertRsp._default_value_for_version;
            let timeStamp!: asn1.GeneralizedTime;
            let sequence!: AVMPsequence;
            let result!: CertRsp_result;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: asn1.ASN1Element): void => {
                    timeStamp = __utils._decodeGeneralizedTime(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                result: (_el: asn1.ASN1Element): void => {
                    result = _decode_CertRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertRsp,
                _extension_additions_list_spec_for_CertRsp,
                _root_component_type_list_2_spec_for_CertRsp,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertRsp(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                timeStamp,
                sequence,
                result,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertRsp(el);
}
export function _encode_CertRsp(
    value: CertRsp,
    elGetter: __utils.ASN1Encoder<CertRsp>
) {
    if (!_cached_encoder_for_CertRsp) {
        _cached_encoder_for_CertRsp = function (
            value: CertRsp,
            elGetter: __utils.ASN1Encoder<CertRsp>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                CertRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ __utils._encodeGeneralizedTime(
                                value.timeStamp,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_CertRsp_result(
                                value.result,
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
    return _cached_encoder_for_CertRsp(value, elGetter);
}

// TODO: ObjectAssignment: addAvlReq

export class AddAvlReq {
    constructor(
        readonly version: AVMPversion | undefined /* REPLICATED_COMPONENT */,
        readonly timeStamp: asn1.GeneralizedTime /* REPLICATED_COMPONENT */,
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        readonly certlist: CertAVL,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_AddAvlReq: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "timeStamp",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certlist",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AddAvlReq: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AddAvlReq: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AddAvlReq: __utils.ASN1Decoder<AddAvlReq> | null = null;
let _cached_encoder_for_AddAvlReq: __utils.ASN1Encoder<AddAvlReq> | null = null;
export function _decode_AddAvlReq(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AddAvlReq) {
        _cached_decoder_for_AddAvlReq = function (
            el: asn1.ASN1Element
        ): AddAvlReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<AVMPversion> =
                AddAvlReq._default_value_for_version;
            let timeStamp!: asn1.GeneralizedTime;
            let sequence!: AVMPsequence;
            let certlist!: CertAVL;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: asn1.ASN1Element): void => {
                    timeStamp = __utils._decodeGeneralizedTime(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                certlist: (_el: asn1.ASN1Element): void => {
                    certlist = _decode_CertAVL(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AddAvlReq,
                _extension_additions_list_spec_for_AddAvlReq,
                _root_component_type_list_2_spec_for_AddAvlReq,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AddAvlReq(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                timeStamp,
                sequence,
                certlist,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AddAvlReq(el);
}
export function _encode_AddAvlReq(
    value: AddAvlReq,
    elGetter: __utils.ASN1Encoder<AddAvlReq>
) {
    if (!_cached_encoder_for_AddAvlReq) {
        _cached_encoder_for_AddAvlReq = function (
            value: AddAvlReq,
            elGetter: __utils.ASN1Encoder<AddAvlReq>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                AddAvlReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ __utils._encodeGeneralizedTime(
                                value.timeStamp,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_CertAVL(
                                value.certlist,
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
    return _cached_encoder_for_AddAvlReq(value, elGetter);
}

// TODO: ObjectAssignment: addAvlRsp

export class AddAvlOK {
    constructor(
        readonly ok: asn1.NULL,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AddAvlOK: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "ok",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 5),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AddAvlOK: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AddAvlOK: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AddAvlOK: __utils.ASN1Decoder<AddAvlOK> | null = null;
let _cached_encoder_for_AddAvlOK: __utils.ASN1Encoder<AddAvlOK> | null = null;
export function _decode_AddAvlOK(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AddAvlOK) {
        _cached_decoder_for_AddAvlOK = function (
            el: asn1.ASN1Element
        ): AddAvlOK {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError(
                    "AddAvlOK contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "ok";
            let ok!: asn1.NULL;
            ok = __utils._decodeNull(sequence[0]);
            // TODO: Validate values.
            return new AddAvlOK(ok, sequence.slice(1));
        };
    }
    return _cached_decoder_for_AddAvlOK(el);
}
export function _encode_AddAvlOK(
    value: AddAvlOK,
    elGetter: __utils.ASN1Encoder<AddAvlOK>
) {
    if (!_cached_encoder_for_AddAvlOK) {
        _cached_encoder_for_AddAvlOK = function (
            value: AddAvlOK,
            elGetter: __utils.ASN1Encoder<AddAvlOK>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeNull(
                                value.ok,
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
    return _cached_encoder_for_AddAvlOK(value, elGetter);
}

export class AddAvlErr {
    constructor(
        readonly notOK: AVMP_error,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AddAvlErr: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "notOK",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AddAvlErr: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AddAvlErr: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AddAvlErr: __utils.ASN1Decoder<AddAvlErr> | null = null;
let _cached_encoder_for_AddAvlErr: __utils.ASN1Encoder<AddAvlErr> | null = null;
export function _decode_AddAvlErr(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AddAvlErr) {
        _cached_decoder_for_AddAvlErr = function (
            el: asn1.ASN1Element
        ): AddAvlErr {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError(
                    "AddAvlErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "notOK";
            let notOK!: AVMP_error;
            notOK = _decode_AVMP_error(sequence[0]);
            // TODO: Validate values.
            return new AddAvlErr(notOK, sequence.slice(1));
        };
    }
    return _cached_decoder_for_AddAvlErr(el);
}
export function _encode_AddAvlErr(
    value: AddAvlErr,
    elGetter: __utils.ASN1Encoder<AddAvlErr>
) {
    if (!_cached_encoder_for_AddAvlErr) {
        _cached_encoder_for_AddAvlErr = function (
            value: AddAvlErr,
            elGetter: __utils.ASN1Encoder<AddAvlErr>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AVMP_error(
                                value.notOK,
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
    return _cached_encoder_for_AddAvlErr(value, elGetter);
}

export type AddAvlRsp_result =
    | { success: AddAvlOK } /* CHOICE_ALT_ROOT */
    | { failure: AddAvlErr } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_AddAvlRsp_result: __utils.ASN1Decoder<
    AddAvlRsp_result
> | null = null;
let _cached_encoder_for_AddAvlRsp_result: __utils.ASN1Encoder<
    AddAvlRsp_result
> | null = null;
export function _decode_AddAvlRsp_result(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AddAvlRsp_result) {
        _cached_decoder_for_AddAvlRsp_result = __utils._decode_extensible_choice<
            AddAvlRsp_result
        >({
            "CONTEXT 0": [
                "success",
                __utils._decode_explicit<AddAvlOK>(() => _decode_AddAvlOK),
            ],
            "CONTEXT 1": [
                "failure",
                __utils._decode_explicit<AddAvlErr>(() => _decode_AddAvlErr),
            ],
        });
    }
    return _cached_decoder_for_AddAvlRsp_result(el);
}
export function _encode_AddAvlRsp_result(
    value: AddAvlRsp_result,
    elGetter: __utils.ASN1Encoder<AddAvlRsp_result>
) {
    if (!_cached_encoder_for_AddAvlRsp_result) {
        _cached_encoder_for_AddAvlRsp_result = __utils._encode_choice<
            AddAvlRsp_result
        >(
            {
                success: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_AddAvlOK,
                    __utils.BER
                ),
                failure: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_AddAvlErr,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_AddAvlRsp_result(value, elGetter);
}

export class AddAvlRsp {
    constructor(
        readonly version: AVMPversion | undefined /* REPLICATED_COMPONENT */,
        readonly timeStamp: asn1.GeneralizedTime /* REPLICATED_COMPONENT */,
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        readonly result: AddAvlRsp_result,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_AddAvlRsp: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "timeStamp",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "result",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AddAvlRsp: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AddAvlRsp: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AddAvlRsp: __utils.ASN1Decoder<AddAvlRsp> | null = null;
let _cached_encoder_for_AddAvlRsp: __utils.ASN1Encoder<AddAvlRsp> | null = null;
export function _decode_AddAvlRsp(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AddAvlRsp) {
        _cached_decoder_for_AddAvlRsp = function (
            el: asn1.ASN1Element
        ): AddAvlRsp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<AVMPversion> =
                AddAvlRsp._default_value_for_version;
            let timeStamp!: asn1.GeneralizedTime;
            let sequence!: AVMPsequence;
            let result!: AddAvlRsp_result;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: asn1.ASN1Element): void => {
                    timeStamp = __utils._decodeGeneralizedTime(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                result: (_el: asn1.ASN1Element): void => {
                    result = _decode_AddAvlRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AddAvlRsp,
                _extension_additions_list_spec_for_AddAvlRsp,
                _root_component_type_list_2_spec_for_AddAvlRsp,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AddAvlRsp(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                timeStamp,
                sequence,
                result,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AddAvlRsp(el);
}
export function _encode_AddAvlRsp(
    value: AddAvlRsp,
    elGetter: __utils.ASN1Encoder<AddAvlRsp>
) {
    if (!_cached_encoder_for_AddAvlRsp) {
        _cached_encoder_for_AddAvlRsp = function (
            value: AddAvlRsp,
            elGetter: __utils.ASN1Encoder<AddAvlRsp>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                AddAvlRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ __utils._encodeGeneralizedTime(
                                value.timeStamp,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_AddAvlRsp_result(
                                value.result,
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
    return _cached_encoder_for_AddAvlRsp(value, elGetter);
}

// TODO: ObjectAssignment: replaceAvlReq

export class ReplaceAvlReq {
    constructor(
        readonly version: AVMPversion | undefined /* REPLICATED_COMPONENT */,
        readonly timeStamp: asn1.GeneralizedTime /* REPLICATED_COMPONENT */,
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        readonly old: AvlSerialNumber | undefined,
        readonly new_: CertAVL,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_ReplaceAvlReq: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "timeStamp",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "old",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "new",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ReplaceAvlReq: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ReplaceAvlReq: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ReplaceAvlReq: __utils.ASN1Decoder<
    ReplaceAvlReq
> | null = null;
let _cached_encoder_for_ReplaceAvlReq: __utils.ASN1Encoder<
    ReplaceAvlReq
> | null = null;
export function _decode_ReplaceAvlReq(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReplaceAvlReq) {
        _cached_decoder_for_ReplaceAvlReq = function (
            el: asn1.ASN1Element
        ): ReplaceAvlReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<AVMPversion> =
                ReplaceAvlReq._default_value_for_version;
            let timeStamp!: asn1.GeneralizedTime;
            let sequence!: AVMPsequence;
            let old: asn1.OPTIONAL<AvlSerialNumber>;
            let new_!: CertAVL;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: asn1.ASN1Element): void => {
                    timeStamp = __utils._decodeGeneralizedTime(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                old: (_el: asn1.ASN1Element): void => {
                    old = _decode_AvlSerialNumber(_el);
                },
                new: (_el: asn1.ASN1Element): void => {
                    new_ = _decode_CertAVL(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReplaceAvlReq,
                _extension_additions_list_spec_for_ReplaceAvlReq,
                _root_component_type_list_2_spec_for_ReplaceAvlReq,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ReplaceAvlReq(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                timeStamp,
                sequence,
                old,
                new_,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ReplaceAvlReq(el);
}
export function _encode_ReplaceAvlReq(
    value: ReplaceAvlReq,
    elGetter: __utils.ASN1Encoder<ReplaceAvlReq>
) {
    if (!_cached_encoder_for_ReplaceAvlReq) {
        _cached_encoder_for_ReplaceAvlReq = function (
            value: ReplaceAvlReq,
            elGetter: __utils.ASN1Encoder<ReplaceAvlReq>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                ReplaceAvlReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ __utils._encodeGeneralizedTime(
                                value.timeStamp,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.old === undefined
                                ? undefined
                                : _encode_AvlSerialNumber(
                                      value.old,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ _encode_CertAVL(
                                value.new_,
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
    return _cached_encoder_for_ReplaceAvlReq(value, elGetter);
}

// TODO: ObjectAssignment: replaceAvlRsp

export class RepAvlOK {
    constructor(
        readonly ok: asn1.NULL,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_RepAvlOK: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "ok",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 5),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RepAvlOK: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RepAvlOK: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RepAvlOK: __utils.ASN1Decoder<RepAvlOK> | null = null;
let _cached_encoder_for_RepAvlOK: __utils.ASN1Encoder<RepAvlOK> | null = null;
export function _decode_RepAvlOK(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RepAvlOK) {
        _cached_decoder_for_RepAvlOK = function (
            el: asn1.ASN1Element
        ): RepAvlOK {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError(
                    "RepAvlOK contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "ok";
            let ok!: asn1.NULL;
            ok = __utils._decodeNull(sequence[0]);
            // TODO: Validate values.
            return new RepAvlOK(ok, sequence.slice(1));
        };
    }
    return _cached_decoder_for_RepAvlOK(el);
}
export function _encode_RepAvlOK(
    value: RepAvlOK,
    elGetter: __utils.ASN1Encoder<RepAvlOK>
) {
    if (!_cached_encoder_for_RepAvlOK) {
        _cached_encoder_for_RepAvlOK = function (
            value: RepAvlOK,
            elGetter: __utils.ASN1Encoder<RepAvlOK>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeNull(
                                value.ok,
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
    return _cached_encoder_for_RepAvlOK(value, elGetter);
}

export class RepAvlErr {
    constructor(
        readonly notOK: AVMP_error,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_RepAvlErr: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "notOK",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RepAvlErr: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RepAvlErr: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RepAvlErr: __utils.ASN1Decoder<RepAvlErr> | null = null;
let _cached_encoder_for_RepAvlErr: __utils.ASN1Encoder<RepAvlErr> | null = null;
export function _decode_RepAvlErr(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RepAvlErr) {
        _cached_decoder_for_RepAvlErr = function (
            el: asn1.ASN1Element
        ): RepAvlErr {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError(
                    "RepAvlErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "notOK";
            let notOK!: AVMP_error;
            notOK = _decode_AVMP_error(sequence[0]);
            // TODO: Validate values.
            return new RepAvlErr(notOK, sequence.slice(1));
        };
    }
    return _cached_decoder_for_RepAvlErr(el);
}
export function _encode_RepAvlErr(
    value: RepAvlErr,
    elGetter: __utils.ASN1Encoder<RepAvlErr>
) {
    if (!_cached_encoder_for_RepAvlErr) {
        _cached_encoder_for_RepAvlErr = function (
            value: RepAvlErr,
            elGetter: __utils.ASN1Encoder<RepAvlErr>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AVMP_error(
                                value.notOK,
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
    return _cached_encoder_for_RepAvlErr(value, elGetter);
}

export type ReplaceAvlRsp_result =
    | { success: RepAvlOK } /* CHOICE_ALT_ROOT */
    | { failure: RepAvlErr } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ReplaceAvlRsp_result: __utils.ASN1Decoder<
    ReplaceAvlRsp_result
> | null = null;
let _cached_encoder_for_ReplaceAvlRsp_result: __utils.ASN1Encoder<
    ReplaceAvlRsp_result
> | null = null;
export function _decode_ReplaceAvlRsp_result(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReplaceAvlRsp_result) {
        _cached_decoder_for_ReplaceAvlRsp_result = __utils._decode_extensible_choice<
            ReplaceAvlRsp_result
        >({
            "CONTEXT 0": [
                "success",
                __utils._decode_explicit<RepAvlOK>(() => _decode_RepAvlOK),
            ],
            "CONTEXT 1": [
                "failure",
                __utils._decode_explicit<RepAvlErr>(() => _decode_RepAvlErr),
            ],
        });
    }
    return _cached_decoder_for_ReplaceAvlRsp_result(el);
}
export function _encode_ReplaceAvlRsp_result(
    value: ReplaceAvlRsp_result,
    elGetter: __utils.ASN1Encoder<ReplaceAvlRsp_result>
) {
    if (!_cached_encoder_for_ReplaceAvlRsp_result) {
        _cached_encoder_for_ReplaceAvlRsp_result = __utils._encode_choice<
            ReplaceAvlRsp_result
        >(
            {
                success: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_RepAvlOK,
                    __utils.BER
                ),
                failure: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_RepAvlErr,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ReplaceAvlRsp_result(value, elGetter);
}

export class ReplaceAvlRsp {
    constructor(
        readonly version: AVMPversion | undefined /* REPLICATED_COMPONENT */,
        readonly timeStamp: asn1.GeneralizedTime /* REPLICATED_COMPONENT */,
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        readonly result: ReplaceAvlRsp_result,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_ReplaceAvlRsp: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "timeStamp",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "result",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ReplaceAvlRsp: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ReplaceAvlRsp: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ReplaceAvlRsp: __utils.ASN1Decoder<
    ReplaceAvlRsp
> | null = null;
let _cached_encoder_for_ReplaceAvlRsp: __utils.ASN1Encoder<
    ReplaceAvlRsp
> | null = null;
export function _decode_ReplaceAvlRsp(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReplaceAvlRsp) {
        _cached_decoder_for_ReplaceAvlRsp = function (
            el: asn1.ASN1Element
        ): ReplaceAvlRsp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<AVMPversion> =
                ReplaceAvlRsp._default_value_for_version;
            let timeStamp!: asn1.GeneralizedTime;
            let sequence!: AVMPsequence;
            let result!: ReplaceAvlRsp_result;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: asn1.ASN1Element): void => {
                    timeStamp = __utils._decodeGeneralizedTime(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                result: (_el: asn1.ASN1Element): void => {
                    result = _decode_ReplaceAvlRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReplaceAvlRsp,
                _extension_additions_list_spec_for_ReplaceAvlRsp,
                _root_component_type_list_2_spec_for_ReplaceAvlRsp,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ReplaceAvlRsp(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                timeStamp,
                sequence,
                result,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ReplaceAvlRsp(el);
}
export function _encode_ReplaceAvlRsp(
    value: ReplaceAvlRsp,
    elGetter: __utils.ASN1Encoder<ReplaceAvlRsp>
) {
    if (!_cached_encoder_for_ReplaceAvlRsp) {
        _cached_encoder_for_ReplaceAvlRsp = function (
            value: ReplaceAvlRsp,
            elGetter: __utils.ASN1Encoder<ReplaceAvlRsp>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                ReplaceAvlRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ __utils._encodeGeneralizedTime(
                                value.timeStamp,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_ReplaceAvlRsp_result(
                                value.result,
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
    return _cached_encoder_for_ReplaceAvlRsp(value, elGetter);
}

// TODO: ObjectAssignment: deleteAvlReq

export class DeleteAvlReq {
    constructor(
        readonly version: AVMPversion | undefined /* REPLICATED_COMPONENT */,
        readonly timeStamp: asn1.GeneralizedTime /* REPLICATED_COMPONENT */,
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        readonly avl_Id: AvlSerialNumber | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_DeleteAvlReq: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "timeStamp",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "avl-Id",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DeleteAvlReq: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DeleteAvlReq: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DeleteAvlReq: __utils.ASN1Decoder<
    DeleteAvlReq
> | null = null;
let _cached_encoder_for_DeleteAvlReq: __utils.ASN1Encoder<
    DeleteAvlReq
> | null = null;
export function _decode_DeleteAvlReq(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DeleteAvlReq) {
        _cached_decoder_for_DeleteAvlReq = function (
            el: asn1.ASN1Element
        ): DeleteAvlReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<AVMPversion> =
                DeleteAvlReq._default_value_for_version;
            let timeStamp!: asn1.GeneralizedTime;
            let sequence!: AVMPsequence;
            let avl_Id: asn1.OPTIONAL<AvlSerialNumber>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: asn1.ASN1Element): void => {
                    timeStamp = __utils._decodeGeneralizedTime(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                "avl-Id": (_el: asn1.ASN1Element): void => {
                    avl_Id = _decode_AvlSerialNumber(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeleteAvlReq,
                _extension_additions_list_spec_for_DeleteAvlReq,
                _root_component_type_list_2_spec_for_DeleteAvlReq,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DeleteAvlReq(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                timeStamp,
                sequence,
                avl_Id,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DeleteAvlReq(el);
}
export function _encode_DeleteAvlReq(
    value: DeleteAvlReq,
    elGetter: __utils.ASN1Encoder<DeleteAvlReq>
) {
    if (!_cached_encoder_for_DeleteAvlReq) {
        _cached_encoder_for_DeleteAvlReq = function (
            value: DeleteAvlReq,
            elGetter: __utils.ASN1Encoder<DeleteAvlReq>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                DeleteAvlReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ __utils._encodeGeneralizedTime(
                                value.timeStamp,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.avl_Id === undefined
                                ? undefined
                                : _encode_AvlSerialNumber(
                                      value.avl_Id,
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
    return _cached_encoder_for_DeleteAvlReq(value, elGetter);
}

// TODO: ObjectAssignment: deleteAvlRsp

export class DelAvlOK {
    constructor(
        readonly ok: asn1.NULL,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_DelAvlOK: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "ok",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 5),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DelAvlOK: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DelAvlOK: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DelAvlOK: __utils.ASN1Decoder<DelAvlOK> | null = null;
let _cached_encoder_for_DelAvlOK: __utils.ASN1Encoder<DelAvlOK> | null = null;
export function _decode_DelAvlOK(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DelAvlOK) {
        _cached_decoder_for_DelAvlOK = function (
            el: asn1.ASN1Element
        ): DelAvlOK {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError(
                    "DelAvlOK contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "ok";
            let ok!: asn1.NULL;
            ok = __utils._decodeNull(sequence[0]);
            // TODO: Validate values.
            return new DelAvlOK(ok, sequence.slice(1));
        };
    }
    return _cached_decoder_for_DelAvlOK(el);
}
export function _encode_DelAvlOK(
    value: DelAvlOK,
    elGetter: __utils.ASN1Encoder<DelAvlOK>
) {
    if (!_cached_encoder_for_DelAvlOK) {
        _cached_encoder_for_DelAvlOK = function (
            value: DelAvlOK,
            elGetter: __utils.ASN1Encoder<DelAvlOK>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeNull(
                                value.ok,
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
    return _cached_encoder_for_DelAvlOK(value, elGetter);
}

export class DelAvlErr {
    constructor(
        readonly notOK: AVMP_error,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_DelAvlErr: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "notOK",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DelAvlErr: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DelAvlErr: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DelAvlErr: __utils.ASN1Decoder<DelAvlErr> | null = null;
let _cached_encoder_for_DelAvlErr: __utils.ASN1Encoder<DelAvlErr> | null = null;
export function _decode_DelAvlErr(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DelAvlErr) {
        _cached_decoder_for_DelAvlErr = function (
            el: asn1.ASN1Element
        ): DelAvlErr {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError(
                    "DelAvlErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "notOK";
            let notOK!: AVMP_error;
            notOK = _decode_AVMP_error(sequence[0]);
            // TODO: Validate values.
            return new DelAvlErr(notOK, sequence.slice(1));
        };
    }
    return _cached_decoder_for_DelAvlErr(el);
}
export function _encode_DelAvlErr(
    value: DelAvlErr,
    elGetter: __utils.ASN1Encoder<DelAvlErr>
) {
    if (!_cached_encoder_for_DelAvlErr) {
        _cached_encoder_for_DelAvlErr = function (
            value: DelAvlErr,
            elGetter: __utils.ASN1Encoder<DelAvlErr>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AVMP_error(
                                value.notOK,
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
    return _cached_encoder_for_DelAvlErr(value, elGetter);
}

export type DeleteAvlRsp_result =
    | { success: DelAvlOK } /* CHOICE_ALT_ROOT */
    | { failure: DelAvlErr } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_DeleteAvlRsp_result: __utils.ASN1Decoder<
    DeleteAvlRsp_result
> | null = null;
let _cached_encoder_for_DeleteAvlRsp_result: __utils.ASN1Encoder<
    DeleteAvlRsp_result
> | null = null;
export function _decode_DeleteAvlRsp_result(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DeleteAvlRsp_result) {
        _cached_decoder_for_DeleteAvlRsp_result = __utils._decode_extensible_choice<
            DeleteAvlRsp_result
        >({
            "CONTEXT 0": [
                "success",
                __utils._decode_explicit<DelAvlOK>(() => _decode_DelAvlOK),
            ],
            "CONTEXT 1": [
                "failure",
                __utils._decode_explicit<DelAvlErr>(() => _decode_DelAvlErr),
            ],
        });
    }
    return _cached_decoder_for_DeleteAvlRsp_result(el);
}
export function _encode_DeleteAvlRsp_result(
    value: DeleteAvlRsp_result,
    elGetter: __utils.ASN1Encoder<DeleteAvlRsp_result>
) {
    if (!_cached_encoder_for_DeleteAvlRsp_result) {
        _cached_encoder_for_DeleteAvlRsp_result = __utils._encode_choice<
            DeleteAvlRsp_result
        >(
            {
                success: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_DelAvlOK,
                    __utils.BER
                ),
                failure: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_DelAvlErr,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_DeleteAvlRsp_result(value, elGetter);
}

export class DeleteAvlRsp {
    constructor(
        readonly version: AVMPversion | undefined /* REPLICATED_COMPONENT */,
        readonly timeStamp: asn1.GeneralizedTime /* REPLICATED_COMPONENT */,
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        readonly result: DeleteAvlRsp_result,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_DeleteAvlRsp: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "timeStamp",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "result",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DeleteAvlRsp: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DeleteAvlRsp: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DeleteAvlRsp: __utils.ASN1Decoder<
    DeleteAvlRsp
> | null = null;
let _cached_encoder_for_DeleteAvlRsp: __utils.ASN1Encoder<
    DeleteAvlRsp
> | null = null;
export function _decode_DeleteAvlRsp(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DeleteAvlRsp) {
        _cached_decoder_for_DeleteAvlRsp = function (
            el: asn1.ASN1Element
        ): DeleteAvlRsp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<AVMPversion> =
                DeleteAvlRsp._default_value_for_version;
            let timeStamp!: asn1.GeneralizedTime;
            let sequence!: AVMPsequence;
            let result!: DeleteAvlRsp_result;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: asn1.ASN1Element): void => {
                    timeStamp = __utils._decodeGeneralizedTime(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                result: (_el: asn1.ASN1Element): void => {
                    result = _decode_DeleteAvlRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeleteAvlRsp,
                _extension_additions_list_spec_for_DeleteAvlRsp,
                _root_component_type_list_2_spec_for_DeleteAvlRsp,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DeleteAvlRsp(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                timeStamp,
                sequence,
                result,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DeleteAvlRsp(el);
}
export function _encode_DeleteAvlRsp(
    value: DeleteAvlRsp,
    elGetter: __utils.ASN1Encoder<DeleteAvlRsp>
) {
    if (!_cached_encoder_for_DeleteAvlRsp) {
        _cached_encoder_for_DeleteAvlRsp = function (
            value: DeleteAvlRsp,
            elGetter: __utils.ASN1Encoder<DeleteAvlRsp>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                DeleteAvlRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ __utils._encodeGeneralizedTime(
                                value.timeStamp,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_DeleteAvlRsp_result(
                                value.result,
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
    return _cached_encoder_for_DeleteAvlRsp(value, elGetter);
}

// TODO: ObjectAssignment: rejectAVL

export class RejectAVL {
    constructor(
        readonly version: AVMPversion | undefined /* REPLICATED_COMPONENT */,
        readonly timeStamp: asn1.GeneralizedTime /* REPLICATED_COMPONENT */,
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        readonly reason: AVMP_error,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_RejectAVL: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "timeStamp",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "reason",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RejectAVL: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RejectAVL: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RejectAVL: __utils.ASN1Decoder<RejectAVL> | null = null;
let _cached_encoder_for_RejectAVL: __utils.ASN1Encoder<RejectAVL> | null = null;
export function _decode_RejectAVL(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RejectAVL) {
        _cached_decoder_for_RejectAVL = function (
            el: asn1.ASN1Element
        ): RejectAVL {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<AVMPversion> =
                RejectAVL._default_value_for_version;
            let timeStamp!: asn1.GeneralizedTime;
            let sequence!: AVMPsequence;
            let reason!: AVMP_error;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: asn1.ASN1Element): void => {
                    timeStamp = __utils._decodeGeneralizedTime(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                reason: (_el: asn1.ASN1Element): void => {
                    reason = _decode_AVMP_error(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RejectAVL,
                _extension_additions_list_spec_for_RejectAVL,
                _root_component_type_list_2_spec_for_RejectAVL,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RejectAVL(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                timeStamp,
                sequence,
                reason,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RejectAVL(el);
}
export function _encode_RejectAVL(
    value: RejectAVL,
    elGetter: __utils.ASN1Encoder<RejectAVL>
) {
    if (!_cached_encoder_for_RejectAVL) {
        _cached_encoder_for_RejectAVL = function (
            value: RejectAVL,
            elGetter: __utils.ASN1Encoder<RejectAVL>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                RejectAVL._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ __utils._encodeGeneralizedTime(
                                value.timeStamp,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_AVMP_error(
                                value.reason,
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
    return _cached_encoder_for_RejectAVL(value, elGetter);
}

// TODO: ObjectAssignment: certSubscribeReq

export type CASPversion = asn1.ENUMERATED;
export const CASPversion_v1: CASPversion = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const CASPversion_v2: CASPversion = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const CASPversion_v3: CASPversion = 3; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_CASPversion: __utils.ASN1Decoder<
    CASPversion
> | null = null;
let _cached_encoder_for_CASPversion: __utils.ASN1Encoder<
    CASPversion
> | null = null;
export function _decode_CASPversion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CASPversion) {
        _cached_decoder_for_CASPversion = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_CASPversion(el);
}
export function _encode_CASPversion(
    value: CASPversion,
    elGetter: __utils.ASN1Encoder<CASPversion>
) {
    if (!_cached_encoder_for_CASPversion) {
        _cached_encoder_for_CASPversion = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_CASPversion(value, elGetter);
}

export type CASPsequence = asn1.INTEGER;
let _cached_decoder_for_CASPsequence: __utils.ASN1Decoder<
    CASPsequence
> | null = null;
let _cached_encoder_for_CASPsequence: __utils.ASN1Encoder<
    CASPsequence
> | null = null;
export function _decode_CASPsequence(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CASPsequence) {
        _cached_decoder_for_CASPsequence = __utils._decodeInteger;
    }
    return _cached_decoder_for_CASPsequence(el);
}
export function _encode_CASPsequence(
    value: CASPsequence,
    elGetter: __utils.ASN1Encoder<CASPsequence>
) {
    if (!_cached_encoder_for_CASPsequence) {
        _cached_encoder_for_CASPsequence = __utils._encodeInteger;
    }
    return _cached_encoder_for_CASPsequence(value, elGetter);
}

export class CASPcommonComponents {
    constructor(
        readonly version: CASPversion | undefined,
        readonly sequence: CASPsequence,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_CASPcommonComponents: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CASPcommonComponents: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CASPcommonComponents: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CASPcommonComponents: __utils.ASN1Decoder<
    CASPcommonComponents
> | null = null;
let _cached_encoder_for_CASPcommonComponents: __utils.ASN1Encoder<
    CASPcommonComponents
> | null = null;
export function _decode_CASPcommonComponents(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CASPcommonComponents) {
        _cached_decoder_for_CASPcommonComponents = function (
            el: asn1.ASN1Element
        ): CASPcommonComponents {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<CASPversion> =
                CASPcommonComponents._default_value_for_version;
            let sequence!: CASPsequence;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CASPcommonComponents,
                _extension_additions_list_spec_for_CASPcommonComponents,
                _root_component_type_list_2_spec_for_CASPcommonComponents,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CASPcommonComponents(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                sequence,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CASPcommonComponents(el);
}
export function _encode_CASPcommonComponents(
    value: CASPcommonComponents,
    elGetter: __utils.ASN1Encoder<CASPcommonComponents>
) {
    if (!_cached_encoder_for_CASPcommonComponents) {
        _cached_encoder_for_CASPcommonComponents = function (
            value: CASPcommonComponents,
            elGetter: __utils.ASN1Encoder<CASPcommonComponents>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                CASPcommonComponents._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
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
    return _cached_encoder_for_CASPcommonComponents(value, elGetter);
}

export class CertSubscribeReq_certs_Item {
    constructor(
        readonly subject: Name,
        readonly serialNumber: CertificateSerialNumber,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertSubscribeReq_certs_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "subject",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serialNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertSubscribeReq_certs_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertSubscribeReq_certs_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertSubscribeReq_certs_Item: __utils.ASN1Decoder<
    CertSubscribeReq_certs_Item
> | null = null;
let _cached_encoder_for_CertSubscribeReq_certs_Item: __utils.ASN1Encoder<
    CertSubscribeReq_certs_Item
> | null = null;
export function _decode_CertSubscribeReq_certs_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertSubscribeReq_certs_Item) {
        _cached_decoder_for_CertSubscribeReq_certs_Item = function (
            el: asn1.ASN1Element
        ): CertSubscribeReq_certs_Item {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "CertSubscribeReq-certs-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "subject";
            sequence[1].name = "serialNumber";
            let subject!: Name;
            let serialNumber!: CertificateSerialNumber;
            subject = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            // TODO: Validate values.
            return new CertSubscribeReq_certs_Item(
                subject,
                serialNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertSubscribeReq_certs_Item(el);
}
export function _encode_CertSubscribeReq_certs_Item(
    value: CertSubscribeReq_certs_Item,
    elGetter: __utils.ASN1Encoder<CertSubscribeReq_certs_Item>
) {
    if (!_cached_encoder_for_CertSubscribeReq_certs_Item) {
        _cached_encoder_for_CertSubscribeReq_certs_Item = function (
            value: CertSubscribeReq_certs_Item,
            elGetter: __utils.ASN1Encoder<CertSubscribeReq_certs_Item>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(
                                value.subject,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
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
    return _cached_encoder_for_CertSubscribeReq_certs_Item(value, elGetter);
}

export class CertSubscribeReq {
    constructor(
        readonly version: CASPversion | undefined /* REPLICATED_COMPONENT */,
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        readonly certs: CertSubscribeReq_certs_Item[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_CertSubscribeReq: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certs",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertSubscribeReq: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertSubscribeReq: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertSubscribeReq: __utils.ASN1Decoder<
    CertSubscribeReq
> | null = null;
let _cached_encoder_for_CertSubscribeReq: __utils.ASN1Encoder<
    CertSubscribeReq
> | null = null;
export function _decode_CertSubscribeReq(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertSubscribeReq) {
        _cached_decoder_for_CertSubscribeReq = function (
            el: asn1.ASN1Element
        ): CertSubscribeReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<CASPversion> =
                CertSubscribeReq._default_value_for_version;
            let sequence!: CASPsequence;
            let certs!: CertSubscribeReq_certs_Item[];
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                certs: (_el: asn1.ASN1Element): void => {
                    certs = __utils._decodeSequenceOf<
                        CertSubscribeReq_certs_Item
                    >(() => _decode_CertSubscribeReq_certs_Item)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertSubscribeReq,
                _extension_additions_list_spec_for_CertSubscribeReq,
                _root_component_type_list_2_spec_for_CertSubscribeReq,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertSubscribeReq(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                sequence,
                certs,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertSubscribeReq(el);
}
export function _encode_CertSubscribeReq(
    value: CertSubscribeReq,
    elGetter: __utils.ASN1Encoder<CertSubscribeReq>
) {
    if (!_cached_encoder_for_CertSubscribeReq) {
        _cached_encoder_for_CertSubscribeReq = function (
            value: CertSubscribeReq,
            elGetter: __utils.ASN1Encoder<CertSubscribeReq>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                CertSubscribeReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeSequenceOf<
                                CertSubscribeReq_certs_Item
                            >(
                                () => _encode_CertSubscribeReq_certs_Item,
                                __utils.BER
                            )(value.certs, __utils.BER),
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
    return _cached_encoder_for_CertSubscribeReq(value, elGetter);
}

// TODO: ObjectAssignment: certSubscribeRsp

export type CertStatus = asn1.ENUMERATED;
export const CertStatus_good: CertStatus = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const good: CertStatus = CertStatus_good; /* SHORT_NAMED_ENUMERATED_VALUE */
export const CertStatus_revoked: CertStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const revoked: CertStatus = CertStatus_revoked; /* SHORT_NAMED_ENUMERATED_VALUE */
export const CertStatus_on_hold: CertStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const on_hold: CertStatus = CertStatus_on_hold; /* SHORT_NAMED_ENUMERATED_VALUE */
export const CertStatus_expired: CertStatus = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const expired: CertStatus = CertStatus_expired; /* SHORT_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_CertStatus: __utils.ASN1Decoder<
    CertStatus
> | null = null;
let _cached_encoder_for_CertStatus: __utils.ASN1Encoder<
    CertStatus
> | null = null;
export function _decode_CertStatus(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertStatus) {
        _cached_decoder_for_CertStatus = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_CertStatus(el);
}
export function _encode_CertStatus(
    value: CertStatus,
    elGetter: __utils.ASN1Encoder<CertStatus>
) {
    if (!_cached_encoder_for_CertStatus) {
        _cached_encoder_for_CertStatus = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_CertStatus(value, elGetter);
}

export class CertSubscribeOK_Item_ok {
    constructor(
        readonly cert: Certificate,
        readonly status: CertStatus,
        readonly revokeReason: CRLReason | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertSubscribeOK_Item_ok: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "cert",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "status",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "revokeReason",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertSubscribeOK_Item_ok: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertSubscribeOK_Item_ok: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertSubscribeOK_Item_ok: __utils.ASN1Decoder<
    CertSubscribeOK_Item_ok
> | null = null;
let _cached_encoder_for_CertSubscribeOK_Item_ok: __utils.ASN1Encoder<
    CertSubscribeOK_Item_ok
> | null = null;
export function _decode_CertSubscribeOK_Item_ok(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertSubscribeOK_Item_ok) {
        _cached_decoder_for_CertSubscribeOK_Item_ok = function (
            el: asn1.ASN1Element
        ): CertSubscribeOK_Item_ok {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let cert!: Certificate;
            let status!: CertStatus;
            let revokeReason: asn1.OPTIONAL<CRLReason>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                cert: (_el: asn1.ASN1Element): void => {
                    cert = _decode_Certificate(_el);
                },
                status: (_el: asn1.ASN1Element): void => {
                    status = _decode_CertStatus(_el);
                },
                revokeReason: (_el: asn1.ASN1Element): void => {
                    revokeReason = _decode_CRLReason(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertSubscribeOK_Item_ok,
                _extension_additions_list_spec_for_CertSubscribeOK_Item_ok,
                _root_component_type_list_2_spec_for_CertSubscribeOK_Item_ok,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertSubscribeOK_Item_ok(
                /* SEQUENCE_CONSTRUCTOR_CALL */ cert,
                status,
                revokeReason,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertSubscribeOK_Item_ok(el);
}
export function _encode_CertSubscribeOK_Item_ok(
    value: CertSubscribeOK_Item_ok,
    elGetter: __utils.ASN1Encoder<CertSubscribeOK_Item_ok>
) {
    if (!_cached_encoder_for_CertSubscribeOK_Item_ok) {
        _cached_encoder_for_CertSubscribeOK_Item_ok = function (
            value: CertSubscribeOK_Item_ok,
            elGetter: __utils.ASN1Encoder<CertSubscribeOK_Item_ok>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Certificate(
                                value.cert,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_CertStatus(
                                value.status,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.revokeReason === undefined
                                ? undefined
                                : _encode_CRLReason(
                                      value.revokeReason,
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
    return _cached_encoder_for_CertSubscribeOK_Item_ok(value, elGetter);
}

export type CASP_CertStatusCode = asn1.ENUMERATED;
export const CASP_CertStatusCode_noReason: CASP_CertStatusCode = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const CASP_CertStatusCode_unknownCert: CASP_CertStatusCode = 2; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_CASP_CertStatusCode: __utils.ASN1Decoder<
    CASP_CertStatusCode
> | null = null;
let _cached_encoder_for_CASP_CertStatusCode: __utils.ASN1Encoder<
    CASP_CertStatusCode
> | null = null;
export function _decode_CASP_CertStatusCode(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CASP_CertStatusCode) {
        _cached_decoder_for_CASP_CertStatusCode = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_CASP_CertStatusCode(el);
}
export function _encode_CASP_CertStatusCode(
    value: CASP_CertStatusCode,
    elGetter: __utils.ASN1Encoder<CASP_CertStatusCode>
) {
    if (!_cached_encoder_for_CASP_CertStatusCode) {
        _cached_encoder_for_CASP_CertStatusCode = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_CASP_CertStatusCode(value, elGetter);
}

export class CertSubscribeOK_Item_not_ok {
    constructor(
        readonly status: CASP_CertStatusCode,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertSubscribeOK_Item_not_ok: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "status",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertSubscribeOK_Item_not_ok: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertSubscribeOK_Item_not_ok: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertSubscribeOK_Item_not_ok: __utils.ASN1Decoder<
    CertSubscribeOK_Item_not_ok
> | null = null;
let _cached_encoder_for_CertSubscribeOK_Item_not_ok: __utils.ASN1Encoder<
    CertSubscribeOK_Item_not_ok
> | null = null;
export function _decode_CertSubscribeOK_Item_not_ok(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertSubscribeOK_Item_not_ok) {
        _cached_decoder_for_CertSubscribeOK_Item_not_ok = function (
            el: asn1.ASN1Element
        ): CertSubscribeOK_Item_not_ok {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError(
                    "CertSubscribeOK-Item-not-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "status";
            let status!: CASP_CertStatusCode;
            status = _decode_CASP_CertStatusCode(sequence[0]);
            // TODO: Validate values.
            return new CertSubscribeOK_Item_not_ok(status, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertSubscribeOK_Item_not_ok(el);
}
export function _encode_CertSubscribeOK_Item_not_ok(
    value: CertSubscribeOK_Item_not_ok,
    elGetter: __utils.ASN1Encoder<CertSubscribeOK_Item_not_ok>
) {
    if (!_cached_encoder_for_CertSubscribeOK_Item_not_ok) {
        _cached_encoder_for_CertSubscribeOK_Item_not_ok = function (
            value: CertSubscribeOK_Item_not_ok,
            elGetter: __utils.ASN1Encoder<CertSubscribeOK_Item_not_ok>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_CertStatusCode(
                                value.status,
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
    return _cached_encoder_for_CertSubscribeOK_Item_not_ok(value, elGetter);
}

export type CertSubscribeOK_Item =
    | { ok: CertSubscribeOK_Item_ok } /* CHOICE_ALT_ROOT */
    | { not_ok: CertSubscribeOK_Item_not_ok } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertSubscribeOK_Item: __utils.ASN1Decoder<
    CertSubscribeOK_Item
> | null = null;
let _cached_encoder_for_CertSubscribeOK_Item: __utils.ASN1Encoder<
    CertSubscribeOK_Item
> | null = null;
export function _decode_CertSubscribeOK_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertSubscribeOK_Item) {
        _cached_decoder_for_CertSubscribeOK_Item = __utils._decode_extensible_choice<
            CertSubscribeOK_Item
        >({
            "CONTEXT 0": [
                "ok",
                __utils._decode_explicit<CertSubscribeOK_Item_ok>(
                    () => _decode_CertSubscribeOK_Item_ok
                ),
            ],
            "CONTEXT 1": [
                "not_ok",
                __utils._decode_explicit<CertSubscribeOK_Item_not_ok>(
                    () => _decode_CertSubscribeOK_Item_not_ok
                ),
            ],
        });
    }
    return _cached_decoder_for_CertSubscribeOK_Item(el);
}
export function _encode_CertSubscribeOK_Item(
    value: CertSubscribeOK_Item,
    elGetter: __utils.ASN1Encoder<CertSubscribeOK_Item>
) {
    if (!_cached_encoder_for_CertSubscribeOK_Item) {
        _cached_encoder_for_CertSubscribeOK_Item = __utils._encode_choice<
            CertSubscribeOK_Item
        >(
            {
                ok: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_CertSubscribeOK_Item_ok,
                    __utils.BER
                ),
                not_ok: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_CertSubscribeOK_Item_not_ok,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_CertSubscribeOK_Item(value, elGetter);
}

export type CertSubscribeOK = CertSubscribeOK_Item[]; // SequenceOfType
let _cached_decoder_for_CertSubscribeOK: __utils.ASN1Decoder<
    CertSubscribeOK
> | null = null;
let _cached_encoder_for_CertSubscribeOK: __utils.ASN1Encoder<
    CertSubscribeOK
> | null = null;
export function _decode_CertSubscribeOK(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertSubscribeOK) {
        _cached_decoder_for_CertSubscribeOK = __utils._decodeSequenceOf<
            CertSubscribeOK_Item
        >(() => _decode_CertSubscribeOK_Item);
    }
    return _cached_decoder_for_CertSubscribeOK(el);
}
export function _encode_CertSubscribeOK(
    value: CertSubscribeOK,
    elGetter: __utils.ASN1Encoder<CertSubscribeOK>
) {
    if (!_cached_encoder_for_CertSubscribeOK) {
        _cached_encoder_for_CertSubscribeOK = __utils._encodeSequenceOf<
            CertSubscribeOK_Item
        >(() => _encode_CertSubscribeOK_Item, __utils.BER);
    }
    return _cached_encoder_for_CertSubscribeOK(value, elGetter);
}

export type CASP_error = asn1.ENUMERATED;
export const CASP_error_noReason: CASP_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const CASP_error_unknownContentType: CASP_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const CASP_error_unsupportedWLMPversion: CASP_error = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const CASP_error_missingContent: CASP_error = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const CASP_error_missingContentComponent: CASP_error = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const CASP_error_invalidContentComponent: CASP_error = 5; /* LONG_NAMED_ENUMERATED_VALUE */
export const CASP_error_sequenceError: CASP_error = 6; /* LONG_NAMED_ENUMERATED_VALUE */
export const CASP_error_unknownSubject: CASP_error = 7; /* LONG_NAMED_ENUMERATED_VALUE */
export const CASP_error_unknownCert: CASP_error = 8; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_CASP_error: __utils.ASN1Decoder<
    CASP_error
> | null = null;
let _cached_encoder_for_CASP_error: __utils.ASN1Encoder<
    CASP_error
> | null = null;
export function _decode_CASP_error(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CASP_error) {
        _cached_decoder_for_CASP_error = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_CASP_error(el);
}
export function _encode_CASP_error(
    value: CASP_error,
    elGetter: __utils.ASN1Encoder<CASP_error>
) {
    if (!_cached_encoder_for_CASP_error) {
        _cached_encoder_for_CASP_error = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_CASP_error(value, elGetter);
}

export class CertSubscribeErr {
    constructor(
        readonly code: CASP_error,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertSubscribeErr: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "code",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertSubscribeErr: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertSubscribeErr: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertSubscribeErr: __utils.ASN1Decoder<
    CertSubscribeErr
> | null = null;
let _cached_encoder_for_CertSubscribeErr: __utils.ASN1Encoder<
    CertSubscribeErr
> | null = null;
export function _decode_CertSubscribeErr(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertSubscribeErr) {
        _cached_decoder_for_CertSubscribeErr = function (
            el: asn1.ASN1Element
        ): CertSubscribeErr {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError(
                    "CertSubscribeErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "code";
            let code!: CASP_error;
            code = _decode_CASP_error(sequence[0]);
            // TODO: Validate values.
            return new CertSubscribeErr(code, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertSubscribeErr(el);
}
export function _encode_CertSubscribeErr(
    value: CertSubscribeErr,
    elGetter: __utils.ASN1Encoder<CertSubscribeErr>
) {
    if (!_cached_encoder_for_CertSubscribeErr) {
        _cached_encoder_for_CertSubscribeErr = function (
            value: CertSubscribeErr,
            elGetter: __utils.ASN1Encoder<CertSubscribeErr>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_error(
                                value.code,
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
    return _cached_encoder_for_CertSubscribeErr(value, elGetter);
}

export type CertSubscribeRsp_result =
    | { success: CertSubscribeOK } /* CHOICE_ALT_ROOT */
    | { failure: CertSubscribeErr } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertSubscribeRsp_result: __utils.ASN1Decoder<
    CertSubscribeRsp_result
> | null = null;
let _cached_encoder_for_CertSubscribeRsp_result: __utils.ASN1Encoder<
    CertSubscribeRsp_result
> | null = null;
export function _decode_CertSubscribeRsp_result(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertSubscribeRsp_result) {
        _cached_decoder_for_CertSubscribeRsp_result = __utils._decode_extensible_choice<
            CertSubscribeRsp_result
        >({
            "CONTEXT 0": [
                "success",
                __utils._decode_explicit<CertSubscribeOK>(
                    () => _decode_CertSubscribeOK
                ),
            ],
            "CONTEXT 1": [
                "failure",
                __utils._decode_explicit<CertSubscribeErr>(
                    () => _decode_CertSubscribeErr
                ),
            ],
        });
    }
    return _cached_decoder_for_CertSubscribeRsp_result(el);
}
export function _encode_CertSubscribeRsp_result(
    value: CertSubscribeRsp_result,
    elGetter: __utils.ASN1Encoder<CertSubscribeRsp_result>
) {
    if (!_cached_encoder_for_CertSubscribeRsp_result) {
        _cached_encoder_for_CertSubscribeRsp_result = __utils._encode_choice<
            CertSubscribeRsp_result
        >(
            {
                success: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_CertSubscribeOK,
                    __utils.BER
                ),
                failure: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_CertSubscribeErr,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_CertSubscribeRsp_result(value, elGetter);
}

export class CertSubscribeRsp {
    constructor(
        readonly version: CASPversion | undefined /* REPLICATED_COMPONENT */,
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        readonly result: CertSubscribeRsp_result,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_CertSubscribeRsp: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "result",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertSubscribeRsp: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertSubscribeRsp: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertSubscribeRsp: __utils.ASN1Decoder<
    CertSubscribeRsp
> | null = null;
let _cached_encoder_for_CertSubscribeRsp: __utils.ASN1Encoder<
    CertSubscribeRsp
> | null = null;
export function _decode_CertSubscribeRsp(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertSubscribeRsp) {
        _cached_decoder_for_CertSubscribeRsp = function (
            el: asn1.ASN1Element
        ): CertSubscribeRsp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<CASPversion> =
                CertSubscribeRsp._default_value_for_version;
            let sequence!: CASPsequence;
            let result!: CertSubscribeRsp_result;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                result: (_el: asn1.ASN1Element): void => {
                    result = _decode_CertSubscribeRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertSubscribeRsp,
                _extension_additions_list_spec_for_CertSubscribeRsp,
                _root_component_type_list_2_spec_for_CertSubscribeRsp,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertSubscribeRsp(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                sequence,
                result,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertSubscribeRsp(el);
}
export function _encode_CertSubscribeRsp(
    value: CertSubscribeRsp,
    elGetter: __utils.ASN1Encoder<CertSubscribeRsp>
) {
    if (!_cached_encoder_for_CertSubscribeRsp) {
        _cached_encoder_for_CertSubscribeRsp = function (
            value: CertSubscribeRsp,
            elGetter: __utils.ASN1Encoder<CertSubscribeRsp>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                CertSubscribeRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_CertSubscribeRsp_result(
                                value.result,
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
    return _cached_encoder_for_CertSubscribeRsp(value, elGetter);
}

// TODO: ObjectAssignment: certUnsubscribeReq

export class CertUnsubscribeReq_certs_Item {
    constructor(
        readonly subject: Name,
        readonly serialNumber: CertificateSerialNumber,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertUnsubscribeReq_certs_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "subject",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serialNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertUnsubscribeReq_certs_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertUnsubscribeReq_certs_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertUnsubscribeReq_certs_Item: __utils.ASN1Decoder<
    CertUnsubscribeReq_certs_Item
> | null = null;
let _cached_encoder_for_CertUnsubscribeReq_certs_Item: __utils.ASN1Encoder<
    CertUnsubscribeReq_certs_Item
> | null = null;
export function _decode_CertUnsubscribeReq_certs_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertUnsubscribeReq_certs_Item) {
        _cached_decoder_for_CertUnsubscribeReq_certs_Item = function (
            el: asn1.ASN1Element
        ): CertUnsubscribeReq_certs_Item {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "CertUnsubscribeReq-certs-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "subject";
            sequence[1].name = "serialNumber";
            let subject!: Name;
            let serialNumber!: CertificateSerialNumber;
            subject = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            // TODO: Validate values.
            return new CertUnsubscribeReq_certs_Item(
                subject,
                serialNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertUnsubscribeReq_certs_Item(el);
}
export function _encode_CertUnsubscribeReq_certs_Item(
    value: CertUnsubscribeReq_certs_Item,
    elGetter: __utils.ASN1Encoder<CertUnsubscribeReq_certs_Item>
) {
    if (!_cached_encoder_for_CertUnsubscribeReq_certs_Item) {
        _cached_encoder_for_CertUnsubscribeReq_certs_Item = function (
            value: CertUnsubscribeReq_certs_Item,
            elGetter: __utils.ASN1Encoder<CertUnsubscribeReq_certs_Item>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(
                                value.subject,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
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
    return _cached_encoder_for_CertUnsubscribeReq_certs_Item(value, elGetter);
}

export class CertUnsubscribeReq {
    constructor(
        readonly version: CASPversion | undefined /* REPLICATED_COMPONENT */,
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        readonly certs: CertUnsubscribeReq_certs_Item[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_CertUnsubscribeReq: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certs",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertUnsubscribeReq: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertUnsubscribeReq: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertUnsubscribeReq: __utils.ASN1Decoder<
    CertUnsubscribeReq
> | null = null;
let _cached_encoder_for_CertUnsubscribeReq: __utils.ASN1Encoder<
    CertUnsubscribeReq
> | null = null;
export function _decode_CertUnsubscribeReq(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertUnsubscribeReq) {
        _cached_decoder_for_CertUnsubscribeReq = function (
            el: asn1.ASN1Element
        ): CertUnsubscribeReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<CASPversion> =
                CertUnsubscribeReq._default_value_for_version;
            let sequence!: CASPsequence;
            let certs!: CertUnsubscribeReq_certs_Item[];
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                certs: (_el: asn1.ASN1Element): void => {
                    certs = __utils._decodeSequenceOf<
                        CertUnsubscribeReq_certs_Item
                    >(() => _decode_CertUnsubscribeReq_certs_Item)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertUnsubscribeReq,
                _extension_additions_list_spec_for_CertUnsubscribeReq,
                _root_component_type_list_2_spec_for_CertUnsubscribeReq,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertUnsubscribeReq(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                sequence,
                certs,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertUnsubscribeReq(el);
}
export function _encode_CertUnsubscribeReq(
    value: CertUnsubscribeReq,
    elGetter: __utils.ASN1Encoder<CertUnsubscribeReq>
) {
    if (!_cached_encoder_for_CertUnsubscribeReq) {
        _cached_encoder_for_CertUnsubscribeReq = function (
            value: CertUnsubscribeReq,
            elGetter: __utils.ASN1Encoder<CertUnsubscribeReq>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                CertUnsubscribeReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeSequenceOf<
                                CertUnsubscribeReq_certs_Item
                            >(
                                () => _encode_CertUnsubscribeReq_certs_Item,
                                __utils.BER
                            )(value.certs, __utils.BER),
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
    return _cached_encoder_for_CertUnsubscribeReq(value, elGetter);
}

// TODO: ObjectAssignment: certUnsubscribeRsp

export class CertUnsubscribeOK_Item_ok {
    constructor(
        readonly subject: Name,
        readonly serialNumber: CertificateSerialNumber,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertUnsubscribeOK_Item_ok: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "subject",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serialNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertUnsubscribeOK_Item_ok: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertUnsubscribeOK_Item_ok: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertUnsubscribeOK_Item_ok: __utils.ASN1Decoder<
    CertUnsubscribeOK_Item_ok
> | null = null;
let _cached_encoder_for_CertUnsubscribeOK_Item_ok: __utils.ASN1Encoder<
    CertUnsubscribeOK_Item_ok
> | null = null;
export function _decode_CertUnsubscribeOK_Item_ok(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertUnsubscribeOK_Item_ok) {
        _cached_decoder_for_CertUnsubscribeOK_Item_ok = function (
            el: asn1.ASN1Element
        ): CertUnsubscribeOK_Item_ok {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "CertUnsubscribeOK-Item-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "subject";
            sequence[1].name = "serialNumber";
            let subject!: Name;
            let serialNumber!: CertificateSerialNumber;
            subject = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            // TODO: Validate values.
            return new CertUnsubscribeOK_Item_ok(
                subject,
                serialNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertUnsubscribeOK_Item_ok(el);
}
export function _encode_CertUnsubscribeOK_Item_ok(
    value: CertUnsubscribeOK_Item_ok,
    elGetter: __utils.ASN1Encoder<CertUnsubscribeOK_Item_ok>
) {
    if (!_cached_encoder_for_CertUnsubscribeOK_Item_ok) {
        _cached_encoder_for_CertUnsubscribeOK_Item_ok = function (
            value: CertUnsubscribeOK_Item_ok,
            elGetter: __utils.ASN1Encoder<CertUnsubscribeOK_Item_ok>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(
                                value.subject,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
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
    return _cached_encoder_for_CertUnsubscribeOK_Item_ok(value, elGetter);
}

export class CertUnsubscribeOK_Item_not_ok {
    constructor(
        readonly status: CASP_CertStatusCode,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertUnsubscribeOK_Item_not_ok: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "status",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertUnsubscribeOK_Item_not_ok: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertUnsubscribeOK_Item_not_ok: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertUnsubscribeOK_Item_not_ok: __utils.ASN1Decoder<
    CertUnsubscribeOK_Item_not_ok
> | null = null;
let _cached_encoder_for_CertUnsubscribeOK_Item_not_ok: __utils.ASN1Encoder<
    CertUnsubscribeOK_Item_not_ok
> | null = null;
export function _decode_CertUnsubscribeOK_Item_not_ok(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertUnsubscribeOK_Item_not_ok) {
        _cached_decoder_for_CertUnsubscribeOK_Item_not_ok = function (
            el: asn1.ASN1Element
        ): CertUnsubscribeOK_Item_not_ok {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError(
                    "CertUnsubscribeOK-Item-not-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "status";
            let status!: CASP_CertStatusCode;
            status = _decode_CASP_CertStatusCode(sequence[0]);
            // TODO: Validate values.
            return new CertUnsubscribeOK_Item_not_ok(status, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertUnsubscribeOK_Item_not_ok(el);
}
export function _encode_CertUnsubscribeOK_Item_not_ok(
    value: CertUnsubscribeOK_Item_not_ok,
    elGetter: __utils.ASN1Encoder<CertUnsubscribeOK_Item_not_ok>
) {
    if (!_cached_encoder_for_CertUnsubscribeOK_Item_not_ok) {
        _cached_encoder_for_CertUnsubscribeOK_Item_not_ok = function (
            value: CertUnsubscribeOK_Item_not_ok,
            elGetter: __utils.ASN1Encoder<CertUnsubscribeOK_Item_not_ok>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_CertStatusCode(
                                value.status,
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
    return _cached_encoder_for_CertUnsubscribeOK_Item_not_ok(value, elGetter);
}

export type CertUnsubscribeOK_Item =
    | { ok: CertUnsubscribeOK_Item_ok } /* CHOICE_ALT_ROOT */
    | { not_ok: CertUnsubscribeOK_Item_not_ok } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertUnsubscribeOK_Item: __utils.ASN1Decoder<
    CertUnsubscribeOK_Item
> | null = null;
let _cached_encoder_for_CertUnsubscribeOK_Item: __utils.ASN1Encoder<
    CertUnsubscribeOK_Item
> | null = null;
export function _decode_CertUnsubscribeOK_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertUnsubscribeOK_Item) {
        _cached_decoder_for_CertUnsubscribeOK_Item = __utils._decode_extensible_choice<
            CertUnsubscribeOK_Item
        >({
            "CONTEXT 0": [
                "ok",
                __utils._decode_explicit<CertUnsubscribeOK_Item_ok>(
                    () => _decode_CertUnsubscribeOK_Item_ok
                ),
            ],
            "CONTEXT 1": [
                "not_ok",
                __utils._decode_explicit<CertUnsubscribeOK_Item_not_ok>(
                    () => _decode_CertUnsubscribeOK_Item_not_ok
                ),
            ],
        });
    }
    return _cached_decoder_for_CertUnsubscribeOK_Item(el);
}
export function _encode_CertUnsubscribeOK_Item(
    value: CertUnsubscribeOK_Item,
    elGetter: __utils.ASN1Encoder<CertUnsubscribeOK_Item>
) {
    if (!_cached_encoder_for_CertUnsubscribeOK_Item) {
        _cached_encoder_for_CertUnsubscribeOK_Item = __utils._encode_choice<
            CertUnsubscribeOK_Item
        >(
            {
                ok: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_CertUnsubscribeOK_Item_ok,
                    __utils.BER
                ),
                not_ok: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_CertUnsubscribeOK_Item_not_ok,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_CertUnsubscribeOK_Item(value, elGetter);
}

export type CertUnsubscribeOK = CertUnsubscribeOK_Item[]; // SequenceOfType
let _cached_decoder_for_CertUnsubscribeOK: __utils.ASN1Decoder<
    CertUnsubscribeOK
> | null = null;
let _cached_encoder_for_CertUnsubscribeOK: __utils.ASN1Encoder<
    CertUnsubscribeOK
> | null = null;
export function _decode_CertUnsubscribeOK(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertUnsubscribeOK) {
        _cached_decoder_for_CertUnsubscribeOK = __utils._decodeSequenceOf<
            CertUnsubscribeOK_Item
        >(() => _decode_CertUnsubscribeOK_Item);
    }
    return _cached_decoder_for_CertUnsubscribeOK(el);
}
export function _encode_CertUnsubscribeOK(
    value: CertUnsubscribeOK,
    elGetter: __utils.ASN1Encoder<CertUnsubscribeOK>
) {
    if (!_cached_encoder_for_CertUnsubscribeOK) {
        _cached_encoder_for_CertUnsubscribeOK = __utils._encodeSequenceOf<
            CertUnsubscribeOK_Item
        >(() => _encode_CertUnsubscribeOK_Item, __utils.BER);
    }
    return _cached_encoder_for_CertUnsubscribeOK(value, elGetter);
}

export class CertUnsubscribeErr {
    constructor(
        readonly code: CASP_error,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertUnsubscribeErr: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "code",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertUnsubscribeErr: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertUnsubscribeErr: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertUnsubscribeErr: __utils.ASN1Decoder<
    CertUnsubscribeErr
> | null = null;
let _cached_encoder_for_CertUnsubscribeErr: __utils.ASN1Encoder<
    CertUnsubscribeErr
> | null = null;
export function _decode_CertUnsubscribeErr(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertUnsubscribeErr) {
        _cached_decoder_for_CertUnsubscribeErr = function (
            el: asn1.ASN1Element
        ): CertUnsubscribeErr {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError(
                    "CertUnsubscribeErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "code";
            let code!: CASP_error;
            code = _decode_CASP_error(sequence[0]);
            // TODO: Validate values.
            return new CertUnsubscribeErr(code, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertUnsubscribeErr(el);
}
export function _encode_CertUnsubscribeErr(
    value: CertUnsubscribeErr,
    elGetter: __utils.ASN1Encoder<CertUnsubscribeErr>
) {
    if (!_cached_encoder_for_CertUnsubscribeErr) {
        _cached_encoder_for_CertUnsubscribeErr = function (
            value: CertUnsubscribeErr,
            elGetter: __utils.ASN1Encoder<CertUnsubscribeErr>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_error(
                                value.code,
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
    return _cached_encoder_for_CertUnsubscribeErr(value, elGetter);
}

export type CertUnsubscribeRsp_result =
    | { success: CertUnsubscribeOK } /* CHOICE_ALT_ROOT */
    | { failure: CertUnsubscribeErr } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertUnsubscribeRsp_result: __utils.ASN1Decoder<
    CertUnsubscribeRsp_result
> | null = null;
let _cached_encoder_for_CertUnsubscribeRsp_result: __utils.ASN1Encoder<
    CertUnsubscribeRsp_result
> | null = null;
export function _decode_CertUnsubscribeRsp_result(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertUnsubscribeRsp_result) {
        _cached_decoder_for_CertUnsubscribeRsp_result = __utils._decode_extensible_choice<
            CertUnsubscribeRsp_result
        >({
            "CONTEXT 0": [
                "success",
                __utils._decode_explicit<CertUnsubscribeOK>(
                    () => _decode_CertUnsubscribeOK
                ),
            ],
            "CONTEXT 1": [
                "failure",
                __utils._decode_explicit<CertUnsubscribeErr>(
                    () => _decode_CertUnsubscribeErr
                ),
            ],
        });
    }
    return _cached_decoder_for_CertUnsubscribeRsp_result(el);
}
export function _encode_CertUnsubscribeRsp_result(
    value: CertUnsubscribeRsp_result,
    elGetter: __utils.ASN1Encoder<CertUnsubscribeRsp_result>
) {
    if (!_cached_encoder_for_CertUnsubscribeRsp_result) {
        _cached_encoder_for_CertUnsubscribeRsp_result = __utils._encode_choice<
            CertUnsubscribeRsp_result
        >(
            {
                success: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_CertUnsubscribeOK,
                    __utils.BER
                ),
                failure: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_CertUnsubscribeErr,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_CertUnsubscribeRsp_result(value, elGetter);
}

export class CertUnsubscribeRsp {
    constructor(
        readonly version: CASPversion | undefined /* REPLICATED_COMPONENT */,
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        readonly result: CertUnsubscribeRsp_result,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_CertUnsubscribeRsp: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "result",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertUnsubscribeRsp: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertUnsubscribeRsp: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertUnsubscribeRsp: __utils.ASN1Decoder<
    CertUnsubscribeRsp
> | null = null;
let _cached_encoder_for_CertUnsubscribeRsp: __utils.ASN1Encoder<
    CertUnsubscribeRsp
> | null = null;
export function _decode_CertUnsubscribeRsp(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertUnsubscribeRsp) {
        _cached_decoder_for_CertUnsubscribeRsp = function (
            el: asn1.ASN1Element
        ): CertUnsubscribeRsp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<CASPversion> =
                CertUnsubscribeRsp._default_value_for_version;
            let sequence!: CASPsequence;
            let result!: CertUnsubscribeRsp_result;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                result: (_el: asn1.ASN1Element): void => {
                    result = _decode_CertUnsubscribeRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertUnsubscribeRsp,
                _extension_additions_list_spec_for_CertUnsubscribeRsp,
                _root_component_type_list_2_spec_for_CertUnsubscribeRsp,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertUnsubscribeRsp(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                sequence,
                result,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertUnsubscribeRsp(el);
}
export function _encode_CertUnsubscribeRsp(
    value: CertUnsubscribeRsp,
    elGetter: __utils.ASN1Encoder<CertUnsubscribeRsp>
) {
    if (!_cached_encoder_for_CertUnsubscribeRsp) {
        _cached_encoder_for_CertUnsubscribeRsp = function (
            value: CertUnsubscribeRsp,
            elGetter: __utils.ASN1Encoder<CertUnsubscribeRsp>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                CertUnsubscribeRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_CertUnsubscribeRsp_result(
                                value.result,
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
    return _cached_encoder_for_CertUnsubscribeRsp(value, elGetter);
}

// TODO: ObjectAssignment: certReplaceReq

export class CertReplaceReq_certs_Item {
    constructor(
        readonly old: CertificateSerialNumber,
        readonly new_: Certificate,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertReplaceReq_certs_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "old",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "new",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertReplaceReq_certs_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertReplaceReq_certs_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertReplaceReq_certs_Item: __utils.ASN1Decoder<
    CertReplaceReq_certs_Item
> | null = null;
let _cached_encoder_for_CertReplaceReq_certs_Item: __utils.ASN1Encoder<
    CertReplaceReq_certs_Item
> | null = null;
export function _decode_CertReplaceReq_certs_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertReplaceReq_certs_Item) {
        _cached_decoder_for_CertReplaceReq_certs_Item = function (
            el: asn1.ASN1Element
        ): CertReplaceReq_certs_Item {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "CertReplaceReq-certs-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "old";
            sequence[1].name = "new";
            let old!: CertificateSerialNumber;
            let new_!: Certificate;
            old = _decode_CertificateSerialNumber(sequence[0]);
            new_ = _decode_Certificate(sequence[1]);
            // TODO: Validate values.
            return new CertReplaceReq_certs_Item(old, new_, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertReplaceReq_certs_Item(el);
}
export function _encode_CertReplaceReq_certs_Item(
    value: CertReplaceReq_certs_Item,
    elGetter: __utils.ASN1Encoder<CertReplaceReq_certs_Item>
) {
    if (!_cached_encoder_for_CertReplaceReq_certs_Item) {
        _cached_encoder_for_CertReplaceReq_certs_Item = function (
            value: CertReplaceReq_certs_Item,
            elGetter: __utils.ASN1Encoder<CertReplaceReq_certs_Item>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.old,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_Certificate(
                                value.new_,
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
    return _cached_encoder_for_CertReplaceReq_certs_Item(value, elGetter);
}

export class CertReplaceReq {
    constructor(
        readonly version: CASPversion | undefined /* REPLICATED_COMPONENT */,
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        readonly certs: CertReplaceReq_certs_Item[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_CertReplaceReq: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certs",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertReplaceReq: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertReplaceReq: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertReplaceReq: __utils.ASN1Decoder<
    CertReplaceReq
> | null = null;
let _cached_encoder_for_CertReplaceReq: __utils.ASN1Encoder<
    CertReplaceReq
> | null = null;
export function _decode_CertReplaceReq(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertReplaceReq) {
        _cached_decoder_for_CertReplaceReq = function (
            el: asn1.ASN1Element
        ): CertReplaceReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<CASPversion> =
                CertReplaceReq._default_value_for_version;
            let sequence!: CASPsequence;
            let certs!: CertReplaceReq_certs_Item[];
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                certs: (_el: asn1.ASN1Element): void => {
                    certs = __utils._decodeSequenceOf<
                        CertReplaceReq_certs_Item
                    >(() => _decode_CertReplaceReq_certs_Item)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertReplaceReq,
                _extension_additions_list_spec_for_CertReplaceReq,
                _root_component_type_list_2_spec_for_CertReplaceReq,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertReplaceReq(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                sequence,
                certs,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertReplaceReq(el);
}
export function _encode_CertReplaceReq(
    value: CertReplaceReq,
    elGetter: __utils.ASN1Encoder<CertReplaceReq>
) {
    if (!_cached_encoder_for_CertReplaceReq) {
        _cached_encoder_for_CertReplaceReq = function (
            value: CertReplaceReq,
            elGetter: __utils.ASN1Encoder<CertReplaceReq>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                CertReplaceReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeSequenceOf<
                                CertReplaceReq_certs_Item
                            >(
                                () => _encode_CertReplaceReq_certs_Item,
                                __utils.BER
                            )(value.certs, __utils.BER),
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
    return _cached_encoder_for_CertReplaceReq(value, elGetter);
}

// TODO: ObjectAssignment: certReplaceRsp

export class CertReplaceOK_Item_ok {
    constructor(
        readonly issuer: Name,
        readonly serialNumber: CertificateSerialNumber,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertReplaceOK_Item_ok: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "issuer",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serialNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertReplaceOK_Item_ok: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertReplaceOK_Item_ok: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertReplaceOK_Item_ok: __utils.ASN1Decoder<
    CertReplaceOK_Item_ok
> | null = null;
let _cached_encoder_for_CertReplaceOK_Item_ok: __utils.ASN1Encoder<
    CertReplaceOK_Item_ok
> | null = null;
export function _decode_CertReplaceOK_Item_ok(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertReplaceOK_Item_ok) {
        _cached_decoder_for_CertReplaceOK_Item_ok = function (
            el: asn1.ASN1Element
        ): CertReplaceOK_Item_ok {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "CertReplaceOK-Item-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "issuer";
            sequence[1].name = "serialNumber";
            let issuer!: Name;
            let serialNumber!: CertificateSerialNumber;
            issuer = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            // TODO: Validate values.
            return new CertReplaceOK_Item_ok(
                issuer,
                serialNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertReplaceOK_Item_ok(el);
}
export function _encode_CertReplaceOK_Item_ok(
    value: CertReplaceOK_Item_ok,
    elGetter: __utils.ASN1Encoder<CertReplaceOK_Item_ok>
) {
    if (!_cached_encoder_for_CertReplaceOK_Item_ok) {
        _cached_encoder_for_CertReplaceOK_Item_ok = function (
            value: CertReplaceOK_Item_ok,
            elGetter: __utils.ASN1Encoder<CertReplaceOK_Item_ok>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(
                                value.issuer,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
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
    return _cached_encoder_for_CertReplaceOK_Item_ok(value, elGetter);
}

export class CertReplaceOK_Item_not_ok {
    constructor(
        readonly status: CASP_CertStatusCode,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertReplaceOK_Item_not_ok: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "status",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertReplaceOK_Item_not_ok: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertReplaceOK_Item_not_ok: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertReplaceOK_Item_not_ok: __utils.ASN1Decoder<
    CertReplaceOK_Item_not_ok
> | null = null;
let _cached_encoder_for_CertReplaceOK_Item_not_ok: __utils.ASN1Encoder<
    CertReplaceOK_Item_not_ok
> | null = null;
export function _decode_CertReplaceOK_Item_not_ok(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertReplaceOK_Item_not_ok) {
        _cached_decoder_for_CertReplaceOK_Item_not_ok = function (
            el: asn1.ASN1Element
        ): CertReplaceOK_Item_not_ok {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError(
                    "CertReplaceOK-Item-not-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "status";
            let status!: CASP_CertStatusCode;
            status = _decode_CASP_CertStatusCode(sequence[0]);
            // TODO: Validate values.
            return new CertReplaceOK_Item_not_ok(status, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertReplaceOK_Item_not_ok(el);
}
export function _encode_CertReplaceOK_Item_not_ok(
    value: CertReplaceOK_Item_not_ok,
    elGetter: __utils.ASN1Encoder<CertReplaceOK_Item_not_ok>
) {
    if (!_cached_encoder_for_CertReplaceOK_Item_not_ok) {
        _cached_encoder_for_CertReplaceOK_Item_not_ok = function (
            value: CertReplaceOK_Item_not_ok,
            elGetter: __utils.ASN1Encoder<CertReplaceOK_Item_not_ok>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_CertStatusCode(
                                value.status,
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
    return _cached_encoder_for_CertReplaceOK_Item_not_ok(value, elGetter);
}

export type CertReplaceOK_Item =
    | { ok: CertReplaceOK_Item_ok } /* CHOICE_ALT_ROOT */
    | { not_ok: CertReplaceOK_Item_not_ok } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertReplaceOK_Item: __utils.ASN1Decoder<
    CertReplaceOK_Item
> | null = null;
let _cached_encoder_for_CertReplaceOK_Item: __utils.ASN1Encoder<
    CertReplaceOK_Item
> | null = null;
export function _decode_CertReplaceOK_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertReplaceOK_Item) {
        _cached_decoder_for_CertReplaceOK_Item = __utils._decode_extensible_choice<
            CertReplaceOK_Item
        >({
            "CONTEXT 0": [
                "ok",
                __utils._decode_explicit<CertReplaceOK_Item_ok>(
                    () => _decode_CertReplaceOK_Item_ok
                ),
            ],
            "CONTEXT 1": [
                "not_ok",
                __utils._decode_explicit<CertReplaceOK_Item_not_ok>(
                    () => _decode_CertReplaceOK_Item_not_ok
                ),
            ],
        });
    }
    return _cached_decoder_for_CertReplaceOK_Item(el);
}
export function _encode_CertReplaceOK_Item(
    value: CertReplaceOK_Item,
    elGetter: __utils.ASN1Encoder<CertReplaceOK_Item>
) {
    if (!_cached_encoder_for_CertReplaceOK_Item) {
        _cached_encoder_for_CertReplaceOK_Item = __utils._encode_choice<
            CertReplaceOK_Item
        >(
            {
                ok: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_CertReplaceOK_Item_ok,
                    __utils.BER
                ),
                not_ok: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_CertReplaceOK_Item_not_ok,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_CertReplaceOK_Item(value, elGetter);
}

export type CertReplaceOK = CertReplaceOK_Item[]; // SequenceOfType
let _cached_decoder_for_CertReplaceOK: __utils.ASN1Decoder<
    CertReplaceOK
> | null = null;
let _cached_encoder_for_CertReplaceOK: __utils.ASN1Encoder<
    CertReplaceOK
> | null = null;
export function _decode_CertReplaceOK(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertReplaceOK) {
        _cached_decoder_for_CertReplaceOK = __utils._decodeSequenceOf<
            CertReplaceOK_Item
        >(() => _decode_CertReplaceOK_Item);
    }
    return _cached_decoder_for_CertReplaceOK(el);
}
export function _encode_CertReplaceOK(
    value: CertReplaceOK,
    elGetter: __utils.ASN1Encoder<CertReplaceOK>
) {
    if (!_cached_encoder_for_CertReplaceOK) {
        _cached_encoder_for_CertReplaceOK = __utils._encodeSequenceOf<
            CertReplaceOK_Item
        >(() => _encode_CertReplaceOK_Item, __utils.BER);
    }
    return _cached_encoder_for_CertReplaceOK(value, elGetter);
}

export type SignedData_error = asn1.ENUMERATED;
export const SignedData_error_noReason: SignedData_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const SignedData_error_signedDataContectTypeExpected: SignedData_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const SignedData_error_wrongSignedDataVersion: SignedData_error = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const SignedData_error_missingContent: SignedData_error = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const SignedData_error_missingContentComponent: SignedData_error = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const SignedData_error_invalidContentComponent: SignedData_error = 5; /* LONG_NAMED_ENUMERATED_VALUE */
export const SignedData_error_unsupportedHashAlgorithm: SignedData_error = 6; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_SignedData_error: __utils.ASN1Decoder<
    SignedData_error
> | null = null;
let _cached_encoder_for_SignedData_error: __utils.ASN1Encoder<
    SignedData_error
> | null = null;
export function _decode_SignedData_error(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SignedData_error) {
        _cached_decoder_for_SignedData_error = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_SignedData_error(el);
}
export function _encode_SignedData_error(
    value: SignedData_error,
    elGetter: __utils.ASN1Encoder<SignedData_error>
) {
    if (!_cached_encoder_for_SignedData_error) {
        _cached_encoder_for_SignedData_error = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_SignedData_error(value, elGetter);
}

export type EnvelopedData_error = asn1.ENUMERATED;
export const EnvelopedData_error_noReason: EnvelopedData_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_EnvelopedData_error: __utils.ASN1Decoder<
    EnvelopedData_error
> | null = null;
let _cached_encoder_for_EnvelopedData_error: __utils.ASN1Encoder<
    EnvelopedData_error
> | null = null;
export function _decode_EnvelopedData_error(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EnvelopedData_error) {
        _cached_decoder_for_EnvelopedData_error = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_EnvelopedData_error(el);
}
export function _encode_EnvelopedData_error(
    value: EnvelopedData_error,
    elGetter: __utils.ASN1Encoder<EnvelopedData_error>
) {
    if (!_cached_encoder_for_EnvelopedData_error) {
        _cached_encoder_for_EnvelopedData_error = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_EnvelopedData_error(value, elGetter);
}

export type CertReplaceErr_code =
    | { signedData: SignedData_error } /* CHOICE_ALT_ROOT */
    | { envelopedData: EnvelopedData_error } /* CHOICE_ALT_ROOT */
    | { casp: CASP_error } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertReplaceErr_code: __utils.ASN1Decoder<
    CertReplaceErr_code
> | null = null;
let _cached_encoder_for_CertReplaceErr_code: __utils.ASN1Encoder<
    CertReplaceErr_code
> | null = null;
export function _decode_CertReplaceErr_code(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertReplaceErr_code) {
        _cached_decoder_for_CertReplaceErr_code = __utils._decode_extensible_choice<
            CertReplaceErr_code
        >({
            "CONTEXT 0": [
                "signedData",
                __utils._decode_explicit<SignedData_error>(
                    () => _decode_SignedData_error
                ),
            ],
            "CONTEXT 1": [
                "envelopedData",
                __utils._decode_explicit<EnvelopedData_error>(
                    () => _decode_EnvelopedData_error
                ),
            ],
            "CONTEXT 2": [
                "casp",
                __utils._decode_explicit<CASP_error>(() => _decode_CASP_error),
            ],
        });
    }
    return _cached_decoder_for_CertReplaceErr_code(el);
}
export function _encode_CertReplaceErr_code(
    value: CertReplaceErr_code,
    elGetter: __utils.ASN1Encoder<CertReplaceErr_code>
) {
    if (!_cached_encoder_for_CertReplaceErr_code) {
        _cached_encoder_for_CertReplaceErr_code = __utils._encode_choice<
            CertReplaceErr_code
        >(
            {
                signedData: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_SignedData_error,
                    __utils.BER
                ),
                envelopedData: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_EnvelopedData_error,
                    __utils.BER
                ),
                casp: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () => _encode_CASP_error,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_CertReplaceErr_code(value, elGetter);
}

export class CertReplaceErr {
    constructor(
        readonly code: CertReplaceErr_code,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertReplaceErr: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "code",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertReplaceErr: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertReplaceErr: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertReplaceErr: __utils.ASN1Decoder<
    CertReplaceErr
> | null = null;
let _cached_encoder_for_CertReplaceErr: __utils.ASN1Encoder<
    CertReplaceErr
> | null = null;
export function _decode_CertReplaceErr(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertReplaceErr) {
        _cached_decoder_for_CertReplaceErr = function (
            el: asn1.ASN1Element
        ): CertReplaceErr {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError(
                    "CertReplaceErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "code";
            let code!: CertReplaceErr_code;
            code = _decode_CertReplaceErr_code(sequence[0]);
            // TODO: Validate values.
            return new CertReplaceErr(code, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertReplaceErr(el);
}
export function _encode_CertReplaceErr(
    value: CertReplaceErr,
    elGetter: __utils.ASN1Encoder<CertReplaceErr>
) {
    if (!_cached_encoder_for_CertReplaceErr) {
        _cached_encoder_for_CertReplaceErr = function (
            value: CertReplaceErr,
            elGetter: __utils.ASN1Encoder<CertReplaceErr>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertReplaceErr_code(
                                value.code,
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
    return _cached_encoder_for_CertReplaceErr(value, elGetter);
}

export type CertReplaceRsp_result =
    | { success: CertReplaceOK } /* CHOICE_ALT_ROOT */
    | { failure: CertReplaceErr } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertReplaceRsp_result: __utils.ASN1Decoder<
    CertReplaceRsp_result
> | null = null;
let _cached_encoder_for_CertReplaceRsp_result: __utils.ASN1Encoder<
    CertReplaceRsp_result
> | null = null;
export function _decode_CertReplaceRsp_result(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertReplaceRsp_result) {
        _cached_decoder_for_CertReplaceRsp_result = __utils._decode_extensible_choice<
            CertReplaceRsp_result
        >({
            "CONTEXT 0": [
                "success",
                __utils._decode_explicit<CertReplaceOK>(
                    () => _decode_CertReplaceOK
                ),
            ],
            "CONTEXT 1": [
                "failure",
                __utils._decode_explicit<CertReplaceErr>(
                    () => _decode_CertReplaceErr
                ),
            ],
        });
    }
    return _cached_decoder_for_CertReplaceRsp_result(el);
}
export function _encode_CertReplaceRsp_result(
    value: CertReplaceRsp_result,
    elGetter: __utils.ASN1Encoder<CertReplaceRsp_result>
) {
    if (!_cached_encoder_for_CertReplaceRsp_result) {
        _cached_encoder_for_CertReplaceRsp_result = __utils._encode_choice<
            CertReplaceRsp_result
        >(
            {
                success: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_CertReplaceOK,
                    __utils.BER
                ),
                failure: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_CertReplaceErr,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_CertReplaceRsp_result(value, elGetter);
}

export class CertReplaceRsp {
    constructor(
        readonly version: CASPversion | undefined /* REPLICATED_COMPONENT */,
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        readonly result: CertReplaceRsp_result,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_CertReplaceRsp: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "result",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertReplaceRsp: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertReplaceRsp: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertReplaceRsp: __utils.ASN1Decoder<
    CertReplaceRsp
> | null = null;
let _cached_encoder_for_CertReplaceRsp: __utils.ASN1Encoder<
    CertReplaceRsp
> | null = null;
export function _decode_CertReplaceRsp(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertReplaceRsp) {
        _cached_decoder_for_CertReplaceRsp = function (
            el: asn1.ASN1Element
        ): CertReplaceRsp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<CASPversion> =
                CertReplaceRsp._default_value_for_version;
            let sequence!: CASPsequence;
            let result!: CertReplaceRsp_result;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                result: (_el: asn1.ASN1Element): void => {
                    result = _decode_CertReplaceRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertReplaceRsp,
                _extension_additions_list_spec_for_CertReplaceRsp,
                _root_component_type_list_2_spec_for_CertReplaceRsp,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertReplaceRsp(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                sequence,
                result,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertReplaceRsp(el);
}
export function _encode_CertReplaceRsp(
    value: CertReplaceRsp,
    elGetter: __utils.ASN1Encoder<CertReplaceRsp>
) {
    if (!_cached_encoder_for_CertReplaceRsp) {
        _cached_encoder_for_CertReplaceRsp = function (
            value: CertReplaceRsp,
            elGetter: __utils.ASN1Encoder<CertReplaceRsp>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                CertReplaceRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_CertReplaceRsp_result(
                                value.result,
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
    return _cached_encoder_for_CertReplaceRsp(value, elGetter);
}

// TODO: ObjectAssignment: certUpdateReq

export class CertUpdateReq_certs_Item {
    constructor(
        readonly subject: Name,
        readonly serialNumber: CertificateSerialNumber,
        readonly certStatus: CertStatus,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertUpdateReq_certs_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "subject",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serialNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certStatus",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertUpdateReq_certs_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertUpdateReq_certs_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertUpdateReq_certs_Item: __utils.ASN1Decoder<
    CertUpdateReq_certs_Item
> | null = null;
let _cached_encoder_for_CertUpdateReq_certs_Item: __utils.ASN1Encoder<
    CertUpdateReq_certs_Item
> | null = null;
export function _decode_CertUpdateReq_certs_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertUpdateReq_certs_Item) {
        _cached_decoder_for_CertUpdateReq_certs_Item = function (
            el: asn1.ASN1Element
        ): CertUpdateReq_certs_Item {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "CertUpdateReq-certs-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "subject";
            sequence[1].name = "serialNumber";
            sequence[2].name = "certStatus";
            let subject!: Name;
            let serialNumber!: CertificateSerialNumber;
            let certStatus!: CertStatus;
            subject = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            certStatus = _decode_CertStatus(sequence[2]);
            // TODO: Validate values.
            return new CertUpdateReq_certs_Item(
                subject,
                serialNumber,
                certStatus,
                sequence.slice(3)
            );
        };
    }
    return _cached_decoder_for_CertUpdateReq_certs_Item(el);
}
export function _encode_CertUpdateReq_certs_Item(
    value: CertUpdateReq_certs_Item,
    elGetter: __utils.ASN1Encoder<CertUpdateReq_certs_Item>
) {
    if (!_cached_encoder_for_CertUpdateReq_certs_Item) {
        _cached_encoder_for_CertUpdateReq_certs_Item = function (
            value: CertUpdateReq_certs_Item,
            elGetter: __utils.ASN1Encoder<CertUpdateReq_certs_Item>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(
                                value.subject,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_CertStatus(
                                value.certStatus,
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
    return _cached_encoder_for_CertUpdateReq_certs_Item(value, elGetter);
}

export class CertUpdateReq {
    constructor(
        readonly version: CASPversion | undefined /* REPLICATED_COMPONENT */,
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        readonly certs: CertUpdateReq_certs_Item[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_CertUpdateReq: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certs",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertUpdateReq: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertUpdateReq: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertUpdateReq: __utils.ASN1Decoder<
    CertUpdateReq
> | null = null;
let _cached_encoder_for_CertUpdateReq: __utils.ASN1Encoder<
    CertUpdateReq
> | null = null;
export function _decode_CertUpdateReq(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertUpdateReq) {
        _cached_decoder_for_CertUpdateReq = function (
            el: asn1.ASN1Element
        ): CertUpdateReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<CASPversion> =
                CertUpdateReq._default_value_for_version;
            let sequence!: CASPsequence;
            let certs!: CertUpdateReq_certs_Item[];
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                certs: (_el: asn1.ASN1Element): void => {
                    certs = __utils._decodeSequenceOf<CertUpdateReq_certs_Item>(
                        () => _decode_CertUpdateReq_certs_Item
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertUpdateReq,
                _extension_additions_list_spec_for_CertUpdateReq,
                _root_component_type_list_2_spec_for_CertUpdateReq,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertUpdateReq(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                sequence,
                certs,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertUpdateReq(el);
}
export function _encode_CertUpdateReq(
    value: CertUpdateReq,
    elGetter: __utils.ASN1Encoder<CertUpdateReq>
) {
    if (!_cached_encoder_for_CertUpdateReq) {
        _cached_encoder_for_CertUpdateReq = function (
            value: CertUpdateReq,
            elGetter: __utils.ASN1Encoder<CertUpdateReq>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                CertUpdateReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeSequenceOf<
                                CertUpdateReq_certs_Item
                            >(
                                () => _encode_CertUpdateReq_certs_Item,
                                __utils.BER
                            )(value.certs, __utils.BER),
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
    return _cached_encoder_for_CertUpdateReq(value, elGetter);
}

// TODO: ObjectAssignment: certUpdateRsp

export class CertUpdateOK_Item_ok {
    constructor(
        readonly subject: Name,
        readonly serialNumber: CertificateSerialNumber,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertUpdateOK_Item_ok: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "subject",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serialNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertUpdateOK_Item_ok: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertUpdateOK_Item_ok: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertUpdateOK_Item_ok: __utils.ASN1Decoder<
    CertUpdateOK_Item_ok
> | null = null;
let _cached_encoder_for_CertUpdateOK_Item_ok: __utils.ASN1Encoder<
    CertUpdateOK_Item_ok
> | null = null;
export function _decode_CertUpdateOK_Item_ok(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertUpdateOK_Item_ok) {
        _cached_decoder_for_CertUpdateOK_Item_ok = function (
            el: asn1.ASN1Element
        ): CertUpdateOK_Item_ok {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "CertUpdateOK-Item-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "subject";
            sequence[1].name = "serialNumber";
            let subject!: Name;
            let serialNumber!: CertificateSerialNumber;
            subject = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            // TODO: Validate values.
            return new CertUpdateOK_Item_ok(
                subject,
                serialNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertUpdateOK_Item_ok(el);
}
export function _encode_CertUpdateOK_Item_ok(
    value: CertUpdateOK_Item_ok,
    elGetter: __utils.ASN1Encoder<CertUpdateOK_Item_ok>
) {
    if (!_cached_encoder_for_CertUpdateOK_Item_ok) {
        _cached_encoder_for_CertUpdateOK_Item_ok = function (
            value: CertUpdateOK_Item_ok,
            elGetter: __utils.ASN1Encoder<CertUpdateOK_Item_ok>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(
                                value.subject,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
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
    return _cached_encoder_for_CertUpdateOK_Item_ok(value, elGetter);
}

export class CertUpdateOK_Item_not_ok {
    constructor(
        readonly status: CASP_CertStatusCode,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertUpdateOK_Item_not_ok: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "status",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertUpdateOK_Item_not_ok: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertUpdateOK_Item_not_ok: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertUpdateOK_Item_not_ok: __utils.ASN1Decoder<
    CertUpdateOK_Item_not_ok
> | null = null;
let _cached_encoder_for_CertUpdateOK_Item_not_ok: __utils.ASN1Encoder<
    CertUpdateOK_Item_not_ok
> | null = null;
export function _decode_CertUpdateOK_Item_not_ok(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertUpdateOK_Item_not_ok) {
        _cached_decoder_for_CertUpdateOK_Item_not_ok = function (
            el: asn1.ASN1Element
        ): CertUpdateOK_Item_not_ok {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError(
                    "CertUpdateOK-Item-not-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "status";
            let status!: CASP_CertStatusCode;
            status = _decode_CASP_CertStatusCode(sequence[0]);
            // TODO: Validate values.
            return new CertUpdateOK_Item_not_ok(status, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertUpdateOK_Item_not_ok(el);
}
export function _encode_CertUpdateOK_Item_not_ok(
    value: CertUpdateOK_Item_not_ok,
    elGetter: __utils.ASN1Encoder<CertUpdateOK_Item_not_ok>
) {
    if (!_cached_encoder_for_CertUpdateOK_Item_not_ok) {
        _cached_encoder_for_CertUpdateOK_Item_not_ok = function (
            value: CertUpdateOK_Item_not_ok,
            elGetter: __utils.ASN1Encoder<CertUpdateOK_Item_not_ok>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_CertStatusCode(
                                value.status,
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
    return _cached_encoder_for_CertUpdateOK_Item_not_ok(value, elGetter);
}

export type CertUpdateOK_Item =
    | { ok: CertUpdateOK_Item_ok } /* CHOICE_ALT_ROOT */
    | { not_ok: CertUpdateOK_Item_not_ok } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertUpdateOK_Item: __utils.ASN1Decoder<
    CertUpdateOK_Item
> | null = null;
let _cached_encoder_for_CertUpdateOK_Item: __utils.ASN1Encoder<
    CertUpdateOK_Item
> | null = null;
export function _decode_CertUpdateOK_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertUpdateOK_Item) {
        _cached_decoder_for_CertUpdateOK_Item = __utils._decode_extensible_choice<
            CertUpdateOK_Item
        >({
            "CONTEXT 0": [
                "ok",
                __utils._decode_explicit<CertUpdateOK_Item_ok>(
                    () => _decode_CertUpdateOK_Item_ok
                ),
            ],
            "CONTEXT 1": [
                "not_ok",
                __utils._decode_explicit<CertUpdateOK_Item_not_ok>(
                    () => _decode_CertUpdateOK_Item_not_ok
                ),
            ],
        });
    }
    return _cached_decoder_for_CertUpdateOK_Item(el);
}
export function _encode_CertUpdateOK_Item(
    value: CertUpdateOK_Item,
    elGetter: __utils.ASN1Encoder<CertUpdateOK_Item>
) {
    if (!_cached_encoder_for_CertUpdateOK_Item) {
        _cached_encoder_for_CertUpdateOK_Item = __utils._encode_choice<
            CertUpdateOK_Item
        >(
            {
                ok: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_CertUpdateOK_Item_ok,
                    __utils.BER
                ),
                not_ok: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_CertUpdateOK_Item_not_ok,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_CertUpdateOK_Item(value, elGetter);
}

export type CertUpdateOK = CertUpdateOK_Item[]; // SequenceOfType
let _cached_decoder_for_CertUpdateOK: __utils.ASN1Decoder<
    CertUpdateOK
> | null = null;
let _cached_encoder_for_CertUpdateOK: __utils.ASN1Encoder<
    CertUpdateOK
> | null = null;
export function _decode_CertUpdateOK(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertUpdateOK) {
        _cached_decoder_for_CertUpdateOK = __utils._decodeSequenceOf<
            CertUpdateOK_Item
        >(() => _decode_CertUpdateOK_Item);
    }
    return _cached_decoder_for_CertUpdateOK(el);
}
export function _encode_CertUpdateOK(
    value: CertUpdateOK,
    elGetter: __utils.ASN1Encoder<CertUpdateOK>
) {
    if (!_cached_encoder_for_CertUpdateOK) {
        _cached_encoder_for_CertUpdateOK = __utils._encodeSequenceOf<
            CertUpdateOK_Item
        >(() => _encode_CertUpdateOK_Item, __utils.BER);
    }
    return _cached_encoder_for_CertUpdateOK(value, elGetter);
}

export class CertUpdateErr {
    constructor(
        readonly code: CASP_error,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertUpdateErr: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "code",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertUpdateErr: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertUpdateErr: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertUpdateErr: __utils.ASN1Decoder<
    CertUpdateErr
> | null = null;
let _cached_encoder_for_CertUpdateErr: __utils.ASN1Encoder<
    CertUpdateErr
> | null = null;
export function _decode_CertUpdateErr(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertUpdateErr) {
        _cached_decoder_for_CertUpdateErr = function (
            el: asn1.ASN1Element
        ): CertUpdateErr {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError(
                    "CertUpdateErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "code";
            let code!: CASP_error;
            code = _decode_CASP_error(sequence[0]);
            // TODO: Validate values.
            return new CertUpdateErr(code, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertUpdateErr(el);
}
export function _encode_CertUpdateErr(
    value: CertUpdateErr,
    elGetter: __utils.ASN1Encoder<CertUpdateErr>
) {
    if (!_cached_encoder_for_CertUpdateErr) {
        _cached_encoder_for_CertUpdateErr = function (
            value: CertUpdateErr,
            elGetter: __utils.ASN1Encoder<CertUpdateErr>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_error(
                                value.code,
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
    return _cached_encoder_for_CertUpdateErr(value, elGetter);
}

export type CertUpdateRsp_result =
    | { success: CertUpdateOK } /* CHOICE_ALT_ROOT */
    | { failure: CertUpdateErr } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertUpdateRsp_result: __utils.ASN1Decoder<
    CertUpdateRsp_result
> | null = null;
let _cached_encoder_for_CertUpdateRsp_result: __utils.ASN1Encoder<
    CertUpdateRsp_result
> | null = null;
export function _decode_CertUpdateRsp_result(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertUpdateRsp_result) {
        _cached_decoder_for_CertUpdateRsp_result = __utils._decode_extensible_choice<
            CertUpdateRsp_result
        >({
            "CONTEXT 0": [
                "success",
                __utils._decode_explicit<CertUpdateOK>(
                    () => _decode_CertUpdateOK
                ),
            ],
            "CONTEXT 1": [
                "failure",
                __utils._decode_explicit<CertUpdateErr>(
                    () => _decode_CertUpdateErr
                ),
            ],
        });
    }
    return _cached_decoder_for_CertUpdateRsp_result(el);
}
export function _encode_CertUpdateRsp_result(
    value: CertUpdateRsp_result,
    elGetter: __utils.ASN1Encoder<CertUpdateRsp_result>
) {
    if (!_cached_encoder_for_CertUpdateRsp_result) {
        _cached_encoder_for_CertUpdateRsp_result = __utils._encode_choice<
            CertUpdateRsp_result
        >(
            {
                success: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_CertUpdateOK,
                    __utils.BER
                ),
                failure: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_CertUpdateErr,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_CertUpdateRsp_result(value, elGetter);
}

export class CertUpdateRsp {
    constructor(
        readonly version: CASPversion | undefined /* REPLICATED_COMPONENT */,
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        readonly result: CertUpdateRsp_result,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_CertUpdateRsp: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "result",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertUpdateRsp: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertUpdateRsp: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertUpdateRsp: __utils.ASN1Decoder<
    CertUpdateRsp
> | null = null;
let _cached_encoder_for_CertUpdateRsp: __utils.ASN1Encoder<
    CertUpdateRsp
> | null = null;
export function _decode_CertUpdateRsp(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertUpdateRsp) {
        _cached_decoder_for_CertUpdateRsp = function (
            el: asn1.ASN1Element
        ): CertUpdateRsp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<CASPversion> =
                CertUpdateRsp._default_value_for_version;
            let sequence!: CASPsequence;
            let result!: CertUpdateRsp_result;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                result: (_el: asn1.ASN1Element): void => {
                    result = _decode_CertUpdateRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertUpdateRsp,
                _extension_additions_list_spec_for_CertUpdateRsp,
                _root_component_type_list_2_spec_for_CertUpdateRsp,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertUpdateRsp(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                sequence,
                result,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertUpdateRsp(el);
}
export function _encode_CertUpdateRsp(
    value: CertUpdateRsp,
    elGetter: __utils.ASN1Encoder<CertUpdateRsp>
) {
    if (!_cached_encoder_for_CertUpdateRsp) {
        _cached_encoder_for_CertUpdateRsp = function (
            value: CertUpdateRsp,
            elGetter: __utils.ASN1Encoder<CertUpdateRsp>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                CertUpdateRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_CertUpdateRsp_result(
                                value.result,
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
    return _cached_encoder_for_CertUpdateRsp(value, elGetter);
}

// TODO: ObjectAssignment: rejectCAsubscribe

export class RejectCAsubscribe {
    constructor(
        readonly version: CASPversion | undefined /* REPLICATED_COMPONENT */,
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        readonly reason: CASP_error,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return v1;
    }
}
export const _root_component_type_list_1_spec_for_RejectCAsubscribe: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sequence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "reason",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RejectCAsubscribe: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RejectCAsubscribe: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RejectCAsubscribe: __utils.ASN1Decoder<
    RejectCAsubscribe
> | null = null;
let _cached_encoder_for_RejectCAsubscribe: __utils.ASN1Encoder<
    RejectCAsubscribe
> | null = null;
export function _decode_RejectCAsubscribe(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RejectCAsubscribe) {
        _cached_decoder_for_RejectCAsubscribe = function (
            el: asn1.ASN1Element
        ): RejectCAsubscribe {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<CASPversion> =
                RejectCAsubscribe._default_value_for_version;
            let sequence!: CASPsequence;
            let reason!: CASP_error;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: asn1.ASN1Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                reason: (_el: asn1.ASN1Element): void => {
                    reason = _decode_CASP_error(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RejectCAsubscribe,
                _extension_additions_list_spec_for_RejectCAsubscribe,
                _root_component_type_list_2_spec_for_RejectCAsubscribe,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RejectCAsubscribe(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                sequence,
                reason,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RejectCAsubscribe(el);
}
export function _encode_RejectCAsubscribe(
    value: RejectCAsubscribe,
    elGetter: __utils.ASN1Encoder<RejectCAsubscribe>
) {
    if (!_cached_encoder_for_RejectCAsubscribe) {
        _cached_encoder_for_RejectCAsubscribe = function (
            value: RejectCAsubscribe,
            elGetter: __utils.ASN1Encoder<RejectCAsubscribe>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                RejectCAsubscribe._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(
                                      value.version,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_CASP_error(
                                value.reason,
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
    return _cached_encoder_for_RejectCAsubscribe(value, elGetter);
}

export const id_signedData: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
    2,
]);

export const id_envelopedData: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs7 */ 7,
        3,
    ]
);

export const id_certReq: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [0],
    id_cmsct
);

export const id_certRsp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_cmsct
);

export const id_addAvlReq: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_cmsct
);

export const id_addAvlRsp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_cmsct
);

export const id_replaceAvlReq: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_cmsct
);

export const id_replaceAvlRsp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    id_cmsct
);

export const id_updateAvlReq: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [6],
    id_cmsct
);

export const id_updateAvlRsp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    id_cmsct
);

export const id_deleteAvlReq: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [8],
    id_cmsct
);

export const id_deleteAvlRsp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    id_cmsct
);

export const id_rejectAVL: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [10],
    id_cmsct
);

export const id_certSubscribeReq: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [11],
    id_cmsct
);

export const id_certSubscribeRsp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [12],
    id_cmsct
);

export const id_certUnsubscribeReq: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [13],
    id_cmsct
);

export const id_certUnsubscribeRsp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [14],
    id_cmsct
);

export const id_certReplaceReq: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [15],
    id_cmsct
);

export const id_certReplaceRsp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [16],
    id_cmsct
);

export const id_certUpdateReq: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [17],
    id_cmsct
);

export const id_certUpdateRsp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [18],
    id_cmsct
);

export const id_rejectCAsubscribe: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [19],
    id_cmsct
);

export type TBrequest =
    | { caCert: PKCertIdentifier } /* CHOICE_ALT_ROOT */
    | { subjectCert: PKCertIdentifier } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_TBrequest: __utils.ASN1Decoder<TBrequest> | null = null;
let _cached_encoder_for_TBrequest: __utils.ASN1Encoder<TBrequest> | null = null;
export function _decode_TBrequest(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TBrequest) {
        _cached_decoder_for_TBrequest = __utils._decode_extensible_choice<
            TBrequest
        >({
            "CONTEXT 0": [
                "caCert",
                __utils._decode_explicit<PKCertIdentifier>(
                    () => _decode_PKCertIdentifier
                ),
            ],
            "CONTEXT 1": [
                "subjectCert",
                __utils._decode_explicit<PKCertIdentifier>(
                    () => _decode_PKCertIdentifier
                ),
            ],
        });
    }
    return _cached_decoder_for_TBrequest(el);
}
export function _encode_TBrequest(
    value: TBrequest,
    elGetter: __utils.ASN1Encoder<TBrequest>
) {
    if (!_cached_encoder_for_TBrequest) {
        _cached_encoder_for_TBrequest = __utils._encode_choice<TBrequest>(
            {
                caCert: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_PKCertIdentifier,
                    __utils.BER
                ),
                subjectCert: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_PKCertIdentifier,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_TBrequest(value, elGetter);
}

export class TBOK {
    constructor(
        readonly levelOfAssurance: asn1.INTEGER,
        readonly confidenceLevel: asn1.INTEGER,
        readonly validationTime: asn1.UTCTime,
        readonly info: asn1.UTF8String | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_TBOK: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "levelOfAssurance",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "confidenceLevel",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "validationTime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "info",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 12),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TBOK: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TBOK: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TBOK: __utils.ASN1Decoder<TBOK> | null = null;
let _cached_encoder_for_TBOK: __utils.ASN1Encoder<TBOK> | null = null;
export function _decode_TBOK(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TBOK) {
        _cached_decoder_for_TBOK = function (el: asn1.ASN1Element): TBOK {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let levelOfAssurance!: asn1.INTEGER;
            let confidenceLevel!: asn1.INTEGER;
            let validationTime!: asn1.UTCTime;
            let info: asn1.OPTIONAL<asn1.UTF8String>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                levelOfAssurance: (_el: asn1.ASN1Element): void => {
                    levelOfAssurance = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                confidenceLevel: (_el: asn1.ASN1Element): void => {
                    confidenceLevel = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                validationTime: (_el: asn1.ASN1Element): void => {
                    validationTime = __utils._decode_explicit<asn1.UTCTime>(
                        () => __utils._decodeUTCTime
                    )(_el);
                },
                info: (_el: asn1.ASN1Element): void => {
                    info = __utils._decodeUTF8String(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBOK,
                _extension_additions_list_spec_for_TBOK,
                _root_component_type_list_2_spec_for_TBOK,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TBOK(
                /* SEQUENCE_CONSTRUCTOR_CALL */ levelOfAssurance,
                confidenceLevel,
                validationTime,
                info,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TBOK(el);
}
export function _encode_TBOK(value: TBOK, elGetter: __utils.ASN1Encoder<TBOK>) {
    if (!_cached_encoder_for_TBOK) {
        _cached_encoder_for_TBOK = function (
            value: TBOK,
            elGetter: __utils.ASN1Encoder<TBOK>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => __utils._encodeInteger,
                                __utils.BER
                            )(value.levelOfAssurance, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () => __utils._encodeInteger,
                                __utils.BER
                            )(value.confidenceLevel, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                2,
                                () => __utils._encodeUTCTime,
                                __utils.BER
                            )(value.validationTime, __utils.BER),
                            /* IF_ABSENT  */ value.info === undefined
                                ? undefined
                                : __utils._encodeUTF8String(
                                      value.info,
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
    return _cached_encoder_for_TBOK(value, elGetter);
}

export type TBerror_code = asn1.ENUMERATED;
export const TBerror_code_caCertInvalid: TBerror_code = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const caCertInvalid: TBerror_code = TBerror_code_caCertInvalid; /* SHORT_NAMED_ENUMERATED_VALUE */
export const TBerror_code_unknownCert: TBerror_code = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const unknownCert: TBerror_code = TBerror_code_unknownCert; /* SHORT_NAMED_ENUMERATED_VALUE */
export const TBerror_code_unknownCertStatus: TBerror_code = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const unknownCertStatus: TBerror_code = TBerror_code_unknownCertStatus; /* SHORT_NAMED_ENUMERATED_VALUE */
export const TBerror_code_subjectCertRevoked: TBerror_code = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const subjectCertRevoked: TBerror_code = TBerror_code_subjectCertRevoked; /* SHORT_NAMED_ENUMERATED_VALUE */
export const TBerror_code_incorrectCert: TBerror_code = 5; /* LONG_NAMED_ENUMERATED_VALUE */
export const incorrectCert: TBerror_code = TBerror_code_incorrectCert; /* SHORT_NAMED_ENUMERATED_VALUE */
export const TBerror_code_contractExpired: TBerror_code = 6; /* LONG_NAMED_ENUMERATED_VALUE */
export const contractExpired: TBerror_code = TBerror_code_contractExpired; /* SHORT_NAMED_ENUMERATED_VALUE */
export const TBerror_code_pathValidationFailed: TBerror_code = 7; /* LONG_NAMED_ENUMERATED_VALUE */
export const pathValidationFailed: TBerror_code = TBerror_code_pathValidationFailed; /* SHORT_NAMED_ENUMERATED_VALUE */
export const TBerror_code_timeOut: TBerror_code = 8; /* LONG_NAMED_ENUMERATED_VALUE */
export const timeOut: TBerror_code = TBerror_code_timeOut; /* SHORT_NAMED_ENUMERATED_VALUE */
export const TBerror_code_other: TBerror_code = 99; /* LONG_NAMED_ENUMERATED_VALUE */
export const other: TBerror_code = TBerror_code_other; /* SHORT_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_TBerror_code: __utils.ASN1Decoder<
    TBerror_code
> | null = null;
let _cached_encoder_for_TBerror_code: __utils.ASN1Encoder<
    TBerror_code
> | null = null;
export function _decode_TBerror_code(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TBerror_code) {
        _cached_decoder_for_TBerror_code = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_TBerror_code(el);
}
export function _encode_TBerror_code(
    value: TBerror_code,
    elGetter: __utils.ASN1Encoder<TBerror_code>
) {
    if (!_cached_encoder_for_TBerror_code) {
        _cached_encoder_for_TBerror_code = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_TBerror_code(value, elGetter);
}

export class TBerror {
    constructor(
        readonly code: TBerror_code,
        readonly diagnostic: asn1.UTF8String | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_TBerror: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "code",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "diagnostic",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 12),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TBerror: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TBerror: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TBerror: __utils.ASN1Decoder<TBerror> | null = null;
let _cached_encoder_for_TBerror: __utils.ASN1Encoder<TBerror> | null = null;
export function _decode_TBerror(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TBerror) {
        _cached_decoder_for_TBerror = function (el: asn1.ASN1Element): TBerror {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let code!: TBerror_code;
            let diagnostic: asn1.OPTIONAL<asn1.UTF8String>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                code: (_el: asn1.ASN1Element): void => {
                    code = _decode_TBerror_code(_el);
                },
                diagnostic: (_el: asn1.ASN1Element): void => {
                    diagnostic = __utils._decodeUTF8String(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBerror,
                _extension_additions_list_spec_for_TBerror,
                _root_component_type_list_2_spec_for_TBerror,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TBerror(
                /* SEQUENCE_CONSTRUCTOR_CALL */ code,
                diagnostic,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TBerror(el);
}
export function _encode_TBerror(
    value: TBerror,
    elGetter: __utils.ASN1Encoder<TBerror>
) {
    if (!_cached_encoder_for_TBerror) {
        _cached_encoder_for_TBerror = function (
            value: TBerror,
            elGetter: __utils.ASN1Encoder<TBerror>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_TBerror_code(
                                value.code,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.diagnostic === undefined
                                ? undefined
                                : __utils._encodeUTF8String(
                                      value.diagnostic,
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
    return _cached_encoder_for_TBerror(value, elGetter);
}

export type TBresponse =
    | { success: TBOK } /* CHOICE_ALT_ROOT */
    | { failure: TBerror } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_TBresponse: __utils.ASN1Decoder<
    TBresponse
> | null = null;
let _cached_encoder_for_TBresponse: __utils.ASN1Encoder<
    TBresponse
> | null = null;
export function _decode_TBresponse(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TBresponse) {
        _cached_decoder_for_TBresponse = __utils._decode_extensible_choice<
            TBresponse
        >({
            "CONTEXT 0": [
                "success",
                __utils._decode_explicit<TBOK>(() => _decode_TBOK),
            ],
            "CONTEXT 1": [
                "failure",
                __utils._decode_explicit<TBerror>(() => _decode_TBerror),
            ],
        });
    }
    return _cached_decoder_for_TBresponse(el);
}
export function _encode_TBresponse(
    value: TBresponse,
    elGetter: __utils.ASN1Encoder<TBresponse>
) {
    if (!_cached_encoder_for_TBresponse) {
        _cached_encoder_for_TBresponse = __utils._encode_choice<TBresponse>(
            {
                success: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_TBOK,
                    __utils.BER
                ),
                failure: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_TBerror,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_TBresponse(value, elGetter);
}

/* END_MODULE PkiPMIProtocolSpecifications */
