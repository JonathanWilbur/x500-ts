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
export const _decode_AVMPversion = __utils._decodeEnumerated;
export const _encode_AVMPversion = __utils._encodeEnumerated;

export type AVMPsequence = asn1.INTEGER;
export const _decode_AVMPsequence = __utils._decodeInteger;
export const _encode_AVMPsequence = __utils._encodeInteger;

export class AVMPcommonComponents {
    constructor(
        readonly version: AVMPversion | undefined,
        readonly timeStamp: asn1.GeneralizedTime,
        readonly sequence: AVMPsequence,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_AVMPcommonComponents__version = AVMPversion_v1;
export const _decode_AVMPcommonComponents = function (
    el: asn1.ASN1Element
): AVMPcommonComponents {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<AVMPversion> = _default_value_for_AVMPcommonComponents__version;
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
export const _encode_AVMPcommonComponents = function (
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
                        _default_value_for_AVMPcommonComponents__version
                    )
                        ? undefined
                        : _encode_AVMPversion(value.version, __utils.BER),
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

export class CertReq {
    constructor(
        readonly version: AVMPversion | undefined /* REPLICATED_COMPONENT */,
        readonly timeStamp: asn1.GeneralizedTime /* REPLICATED_COMPONENT */,
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_CertReq__version = AVMPversion_v1;
export const _decode_CertReq = function (el: asn1.ASN1Element): CertReq {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<AVMPversion> = _default_value_for_CertReq__version;
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
export const _encode_CertReq = function (
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
                        _default_value_for_CertReq__version
                    )
                        ? undefined
                        : _encode_AVMPversion(value.version, __utils.BER),
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

export const _decode_CertOK = function (el: asn1.ASN1Element): CertOK {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new asn1.ASN1ConstructionError(
            "CertOK contained only " + sequence.length.toString() + " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "dhCert";
    let dhCert!: Certificate;
    dhCert = _decode_Certificate(sequence[0]);
    // TODO: Validate values.
    return new CertOK(dhCert, sequence.slice(1));
};
export const _encode_CertOK = function (
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
export const _decode_AVMP_error = __utils._decodeEnumerated;
export const _encode_AVMP_error = __utils._encodeEnumerated;

export type CertErr_notOK =
    | { wrErr: PkiWaError }
    | { avmpErr: AVMP_error }
    | asn1.ASN1Element;
export const _decode_CertErr_notOK = __utils._decode_extensible_choice<
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
export const _encode_CertErr_notOK = __utils._encode_choice<CertErr_notOK>(
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

export type Notifications = Attribute[]; // SequenceOfType
export const _decode_Notifications = __utils._decodeSequenceOf<Attribute>(
    () => _decode_Attribute
);
export const _encode_Notifications = __utils._encodeSequenceOf<Attribute>(
    () => _encode_Attribute,
    __utils.BER
);

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

export const _decode_CertErr = function (el: asn1.ASN1Element): CertErr {
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
export const _encode_CertErr = function (
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
                        : _encode_Notifications(value.note, __utils.BER),
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

export type CertRsp_result =
    | { success: CertOK }
    | { failure: CertErr }
    | asn1.ASN1Element;
export const _decode_CertRsp_result = __utils._decode_extensible_choice<
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
export const _encode_CertRsp_result = __utils._encode_choice<CertRsp_result>(
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

export class CertRsp {
    constructor(
        readonly version: AVMPversion | undefined /* REPLICATED_COMPONENT */,
        readonly timeStamp: asn1.GeneralizedTime /* REPLICATED_COMPONENT */,
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        readonly result: CertRsp_result,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_CertRsp__version = AVMPversion_v1;
export const _decode_CertRsp = function (el: asn1.ASN1Element): CertRsp {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<AVMPversion> = _default_value_for_CertRsp__version;
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
export const _encode_CertRsp = function (
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
                        _default_value_for_CertRsp__version
                    )
                        ? undefined
                        : _encode_AVMPversion(value.version, __utils.BER),
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

// TODO: ObjectAssignment: addAvlReq

export class AddAvlReq {
    constructor(
        readonly version: AVMPversion | undefined /* REPLICATED_COMPONENT */,
        readonly timeStamp: asn1.GeneralizedTime /* REPLICATED_COMPONENT */,
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        readonly certlist: CertAVL,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_AddAvlReq__version = AVMPversion_v1;
export const _decode_AddAvlReq = function (el: asn1.ASN1Element): AddAvlReq {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<AVMPversion> = _default_value_for_AddAvlReq__version;
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
export const _encode_AddAvlReq = function (
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
                        _default_value_for_AddAvlReq__version
                    )
                        ? undefined
                        : _encode_AVMPversion(value.version, __utils.BER),
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

export const _decode_AddAvlOK = function (el: asn1.ASN1Element): AddAvlOK {
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
export const _encode_AddAvlOK = function (
    value: AddAvlOK,
    elGetter: __utils.ASN1Encoder<AddAvlOK>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [/* REQUIRED   */ __utils._encodeNull(value.ok, __utils.BER)],
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

export const _decode_AddAvlErr = function (el: asn1.ASN1Element): AddAvlErr {
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
export const _encode_AddAvlErr = function (
    value: AddAvlErr,
    elGetter: __utils.ASN1Encoder<AddAvlErr>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [/* REQUIRED   */ _encode_AVMP_error(value.notOK, __utils.BER)],
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

export type AddAvlRsp_result =
    | { success: AddAvlOK }
    | { failure: AddAvlErr }
    | asn1.ASN1Element;
export const _decode_AddAvlRsp_result = __utils._decode_extensible_choice<
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
export const _encode_AddAvlRsp_result = __utils._encode_choice<
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

export class AddAvlRsp {
    constructor(
        readonly version: AVMPversion | undefined /* REPLICATED_COMPONENT */,
        readonly timeStamp: asn1.GeneralizedTime /* REPLICATED_COMPONENT */,
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        readonly result: AddAvlRsp_result,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_AddAvlRsp__version = AVMPversion_v1;
export const _decode_AddAvlRsp = function (el: asn1.ASN1Element): AddAvlRsp {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<AVMPversion> = _default_value_for_AddAvlRsp__version;
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
export const _encode_AddAvlRsp = function (
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
                        _default_value_for_AddAvlRsp__version
                    )
                        ? undefined
                        : _encode_AVMPversion(value.version, __utils.BER),
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
export const _default_value_for_ReplaceAvlReq__version = AVMPversion_v1;
export const _decode_ReplaceAvlReq = function (
    el: asn1.ASN1Element
): ReplaceAvlReq {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<AVMPversion> = _default_value_for_ReplaceAvlReq__version;
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
export const _encode_ReplaceAvlReq = function (
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
                        _default_value_for_ReplaceAvlReq__version
                    )
                        ? undefined
                        : _encode_AVMPversion(value.version, __utils.BER),
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
                        : _encode_AvlSerialNumber(value.old, __utils.BER),
                    /* REQUIRED   */ _encode_CertAVL(value.new_, __utils.BER),
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

export const _decode_RepAvlOK = function (el: asn1.ASN1Element): RepAvlOK {
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
export const _encode_RepAvlOK = function (
    value: RepAvlOK,
    elGetter: __utils.ASN1Encoder<RepAvlOK>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [/* REQUIRED   */ __utils._encodeNull(value.ok, __utils.BER)],
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

export const _decode_RepAvlErr = function (el: asn1.ASN1Element): RepAvlErr {
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
export const _encode_RepAvlErr = function (
    value: RepAvlErr,
    elGetter: __utils.ASN1Encoder<RepAvlErr>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [/* REQUIRED   */ _encode_AVMP_error(value.notOK, __utils.BER)],
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

export type ReplaceAvlRsp_result =
    | { success: RepAvlOK }
    | { failure: RepAvlErr }
    | asn1.ASN1Element;
export const _decode_ReplaceAvlRsp_result = __utils._decode_extensible_choice<
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
export const _encode_ReplaceAvlRsp_result = __utils._encode_choice<
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

export class ReplaceAvlRsp {
    constructor(
        readonly version: AVMPversion | undefined /* REPLICATED_COMPONENT */,
        readonly timeStamp: asn1.GeneralizedTime /* REPLICATED_COMPONENT */,
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        readonly result: ReplaceAvlRsp_result,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_ReplaceAvlRsp__version = AVMPversion_v1;
export const _decode_ReplaceAvlRsp = function (
    el: asn1.ASN1Element
): ReplaceAvlRsp {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<AVMPversion> = _default_value_for_ReplaceAvlRsp__version;
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
export const _encode_ReplaceAvlRsp = function (
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
                        _default_value_for_ReplaceAvlRsp__version
                    )
                        ? undefined
                        : _encode_AVMPversion(value.version, __utils.BER),
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

// TODO: ObjectAssignment: deleteAvlReq

export class DeleteAvlReq {
    constructor(
        readonly version: AVMPversion | undefined /* REPLICATED_COMPONENT */,
        readonly timeStamp: asn1.GeneralizedTime /* REPLICATED_COMPONENT */,
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        readonly avl_Id: AvlSerialNumber | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_DeleteAvlReq__version = AVMPversion_v1;
export const _decode_DeleteAvlReq = function (
    el: asn1.ASN1Element
): DeleteAvlReq {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<AVMPversion> = _default_value_for_DeleteAvlReq__version;
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
export const _encode_DeleteAvlReq = function (
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
                        _default_value_for_DeleteAvlReq__version
                    )
                        ? undefined
                        : _encode_AVMPversion(value.version, __utils.BER),
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
                        : _encode_AvlSerialNumber(value.avl_Id, __utils.BER),
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

export const _decode_DelAvlOK = function (el: asn1.ASN1Element): DelAvlOK {
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
export const _encode_DelAvlOK = function (
    value: DelAvlOK,
    elGetter: __utils.ASN1Encoder<DelAvlOK>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [/* REQUIRED   */ __utils._encodeNull(value.ok, __utils.BER)],
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

export const _decode_DelAvlErr = function (el: asn1.ASN1Element): DelAvlErr {
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
export const _encode_DelAvlErr = function (
    value: DelAvlErr,
    elGetter: __utils.ASN1Encoder<DelAvlErr>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [/* REQUIRED   */ _encode_AVMP_error(value.notOK, __utils.BER)],
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

export type DeleteAvlRsp_result =
    | { success: DelAvlOK }
    | { failure: DelAvlErr }
    | asn1.ASN1Element;
export const _decode_DeleteAvlRsp_result = __utils._decode_extensible_choice<
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
export const _encode_DeleteAvlRsp_result = __utils._encode_choice<
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

export class DeleteAvlRsp {
    constructor(
        readonly version: AVMPversion | undefined /* REPLICATED_COMPONENT */,
        readonly timeStamp: asn1.GeneralizedTime /* REPLICATED_COMPONENT */,
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        readonly result: DeleteAvlRsp_result,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_DeleteAvlRsp__version = AVMPversion_v1;
export const _decode_DeleteAvlRsp = function (
    el: asn1.ASN1Element
): DeleteAvlRsp {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<AVMPversion> = _default_value_for_DeleteAvlRsp__version;
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
export const _encode_DeleteAvlRsp = function (
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
                        _default_value_for_DeleteAvlRsp__version
                    )
                        ? undefined
                        : _encode_AVMPversion(value.version, __utils.BER),
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

// TODO: ObjectAssignment: rejectAVL

export class RejectAVL {
    constructor(
        readonly version: AVMPversion | undefined /* REPLICATED_COMPONENT */,
        readonly timeStamp: asn1.GeneralizedTime /* REPLICATED_COMPONENT */,
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        readonly reason: AVMP_error,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_RejectAVL__version = AVMPversion_v1;
export const _decode_RejectAVL = function (el: asn1.ASN1Element): RejectAVL {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<AVMPversion> = _default_value_for_RejectAVL__version;
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
export const _encode_RejectAVL = function (
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
                        _default_value_for_RejectAVL__version
                    )
                        ? undefined
                        : _encode_AVMPversion(value.version, __utils.BER),
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

// TODO: ObjectAssignment: certSubscribeReq

export type CASPversion = asn1.ENUMERATED;
export const CASPversion_v1: CASPversion = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const CASPversion_v2: CASPversion = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const CASPversion_v3: CASPversion = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const _decode_CASPversion = __utils._decodeEnumerated;
export const _encode_CASPversion = __utils._encodeEnumerated;

export type CASPsequence = asn1.INTEGER;
export const _decode_CASPsequence = __utils._decodeInteger;
export const _encode_CASPsequence = __utils._encodeInteger;

export class CASPcommonComponents {
    constructor(
        readonly version: CASPversion | undefined,
        readonly sequence: CASPsequence,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_CASPcommonComponents__version = CASPversion_v1;
export const _decode_CASPcommonComponents = function (
    el: asn1.ASN1Element
): CASPcommonComponents {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<CASPversion> = _default_value_for_CASPcommonComponents__version;
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
export const _encode_CASPcommonComponents = function (
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
                        _default_value_for_CASPcommonComponents__version
                    )
                        ? undefined
                        : _encode_CASPversion(value.version, __utils.BER),
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

export const _decode_CertSubscribeReq_certs_Item = function (
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
export const _encode_CertSubscribeReq_certs_Item = function (
    value: CertSubscribeReq_certs_Item,
    elGetter: __utils.ASN1Encoder<CertSubscribeReq_certs_Item>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ _encode_Name(value.subject, __utils.BER),
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

export class CertSubscribeReq {
    constructor(
        readonly version: CASPversion | undefined /* REPLICATED_COMPONENT */,
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        readonly certs: CertSubscribeReq_certs_Item[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_CertSubscribeReq__version = CASPversion_v1;
export const _decode_CertSubscribeReq = function (
    el: asn1.ASN1Element
): CertSubscribeReq {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<CASPversion> = _default_value_for_CertSubscribeReq__version;
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
            certs = __utils._decodeSequenceOf<CertSubscribeReq_certs_Item>(
                () => _decode_CertSubscribeReq_certs_Item
            )(_el);
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
export const _encode_CertSubscribeReq = function (
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
                        _default_value_for_CertSubscribeReq__version
                    )
                        ? undefined
                        : _encode_CASPversion(value.version, __utils.BER),
                    /* REQUIRED   */ _encode_CASPsequence(
                        value.sequence,
                        __utils.BER
                    ),
                    /* REQUIRED   */ __utils._encodeSequenceOf<
                        CertSubscribeReq_certs_Item
                    >(() => _encode_CertSubscribeReq_certs_Item, __utils.BER)(
                        value.certs,
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

// TODO: ObjectAssignment: certSubscribeRsp

export type CertStatus = asn1.ENUMERATED;
export const CertStatus_good: CertStatus = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const CertStatus_revoked: CertStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const CertStatus_on_hold: CertStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const CertStatus_expired: CertStatus = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const _decode_CertStatus = __utils._decodeEnumerated;
export const _encode_CertStatus = __utils._encodeEnumerated;

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

export const _decode_CertSubscribeOK_Item_ok = function (
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
export const _encode_CertSubscribeOK_Item_ok = function (
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
                        : _encode_CRLReason(value.revokeReason, __utils.BER),
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

export type CASP_CertStatusCode = asn1.ENUMERATED;
export const CASP_CertStatusCode_noReason: CASP_CertStatusCode = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const CASP_CertStatusCode_unknownCert: CASP_CertStatusCode = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const _decode_CASP_CertStatusCode = __utils._decodeEnumerated;
export const _encode_CASP_CertStatusCode = __utils._encodeEnumerated;

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

export const _decode_CertSubscribeOK_Item_not_ok = function (
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
export const _encode_CertSubscribeOK_Item_not_ok = function (
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

export type CertSubscribeOK_Item =
    | { ok: CertSubscribeOK_Item_ok }
    | { not_ok: CertSubscribeOK_Item_not_ok }
    | asn1.ASN1Element;
export const _decode_CertSubscribeOK_Item = __utils._decode_extensible_choice<
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
export const _encode_CertSubscribeOK_Item = __utils._encode_choice<
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

export type CertSubscribeOK = CertSubscribeOK_Item[]; // SequenceOfType
export const _decode_CertSubscribeOK = __utils._decodeSequenceOf<
    CertSubscribeOK_Item
>(() => _decode_CertSubscribeOK_Item);
export const _encode_CertSubscribeOK = __utils._encodeSequenceOf<
    CertSubscribeOK_Item
>(() => _encode_CertSubscribeOK_Item, __utils.BER);

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
export const _decode_CASP_error = __utils._decodeEnumerated;
export const _encode_CASP_error = __utils._encodeEnumerated;

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

export const _decode_CertSubscribeErr = function (
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
export const _encode_CertSubscribeErr = function (
    value: CertSubscribeErr,
    elGetter: __utils.ASN1Encoder<CertSubscribeErr>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [/* REQUIRED   */ _encode_CASP_error(value.code, __utils.BER)],
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

export type CertSubscribeRsp_result =
    | { success: CertSubscribeOK }
    | { failure: CertSubscribeErr }
    | asn1.ASN1Element;
export const _decode_CertSubscribeRsp_result = __utils._decode_extensible_choice<
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
export const _encode_CertSubscribeRsp_result = __utils._encode_choice<
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

export class CertSubscribeRsp {
    constructor(
        readonly version: CASPversion | undefined /* REPLICATED_COMPONENT */,
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        readonly result: CertSubscribeRsp_result,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_CertSubscribeRsp__version = CASPversion_v1;
export const _decode_CertSubscribeRsp = function (
    el: asn1.ASN1Element
): CertSubscribeRsp {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<CASPversion> = _default_value_for_CertSubscribeRsp__version;
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
export const _encode_CertSubscribeRsp = function (
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
                        _default_value_for_CertSubscribeRsp__version
                    )
                        ? undefined
                        : _encode_CASPversion(value.version, __utils.BER),
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

export const _decode_CertUnsubscribeReq_certs_Item = function (
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
export const _encode_CertUnsubscribeReq_certs_Item = function (
    value: CertUnsubscribeReq_certs_Item,
    elGetter: __utils.ASN1Encoder<CertUnsubscribeReq_certs_Item>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ _encode_Name(value.subject, __utils.BER),
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

export class CertUnsubscribeReq {
    constructor(
        readonly version: CASPversion | undefined /* REPLICATED_COMPONENT */,
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        readonly certs: CertUnsubscribeReq_certs_Item[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_CertUnsubscribeReq__version = CASPversion_v1;
export const _decode_CertUnsubscribeReq = function (
    el: asn1.ASN1Element
): CertUnsubscribeReq {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<CASPversion> = _default_value_for_CertUnsubscribeReq__version;
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
            certs = __utils._decodeSequenceOf<CertUnsubscribeReq_certs_Item>(
                () => _decode_CertUnsubscribeReq_certs_Item
            )(_el);
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
export const _encode_CertUnsubscribeReq = function (
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
                        _default_value_for_CertUnsubscribeReq__version
                    )
                        ? undefined
                        : _encode_CASPversion(value.version, __utils.BER),
                    /* REQUIRED   */ _encode_CASPsequence(
                        value.sequence,
                        __utils.BER
                    ),
                    /* REQUIRED   */ __utils._encodeSequenceOf<
                        CertUnsubscribeReq_certs_Item
                    >(() => _encode_CertUnsubscribeReq_certs_Item, __utils.BER)(
                        value.certs,
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

export const _decode_CertUnsubscribeOK_Item_ok = function (
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
export const _encode_CertUnsubscribeOK_Item_ok = function (
    value: CertUnsubscribeOK_Item_ok,
    elGetter: __utils.ASN1Encoder<CertUnsubscribeOK_Item_ok>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ _encode_Name(value.subject, __utils.BER),
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

export const _decode_CertUnsubscribeOK_Item_not_ok = function (
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
export const _encode_CertUnsubscribeOK_Item_not_ok = function (
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

export type CertUnsubscribeOK_Item =
    | { ok: CertUnsubscribeOK_Item_ok }
    | { not_ok: CertUnsubscribeOK_Item_not_ok }
    | asn1.ASN1Element;
export const _decode_CertUnsubscribeOK_Item = __utils._decode_extensible_choice<
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
export const _encode_CertUnsubscribeOK_Item = __utils._encode_choice<
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

export type CertUnsubscribeOK = CertUnsubscribeOK_Item[]; // SequenceOfType
export const _decode_CertUnsubscribeOK = __utils._decodeSequenceOf<
    CertUnsubscribeOK_Item
>(() => _decode_CertUnsubscribeOK_Item);
export const _encode_CertUnsubscribeOK = __utils._encodeSequenceOf<
    CertUnsubscribeOK_Item
>(() => _encode_CertUnsubscribeOK_Item, __utils.BER);

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

export const _decode_CertUnsubscribeErr = function (
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
export const _encode_CertUnsubscribeErr = function (
    value: CertUnsubscribeErr,
    elGetter: __utils.ASN1Encoder<CertUnsubscribeErr>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [/* REQUIRED   */ _encode_CASP_error(value.code, __utils.BER)],
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

export type CertUnsubscribeRsp_result =
    | { success: CertUnsubscribeOK }
    | { failure: CertUnsubscribeErr }
    | asn1.ASN1Element;
export const _decode_CertUnsubscribeRsp_result = __utils._decode_extensible_choice<
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
export const _encode_CertUnsubscribeRsp_result = __utils._encode_choice<
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

export class CertUnsubscribeRsp {
    constructor(
        readonly version: CASPversion | undefined /* REPLICATED_COMPONENT */,
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        readonly result: CertUnsubscribeRsp_result,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_CertUnsubscribeRsp__version = CASPversion_v1;
export const _decode_CertUnsubscribeRsp = function (
    el: asn1.ASN1Element
): CertUnsubscribeRsp {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<CASPversion> = _default_value_for_CertUnsubscribeRsp__version;
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
export const _encode_CertUnsubscribeRsp = function (
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
                        _default_value_for_CertUnsubscribeRsp__version
                    )
                        ? undefined
                        : _encode_CASPversion(value.version, __utils.BER),
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

export const _decode_CertReplaceReq_certs_Item = function (
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
export const _encode_CertReplaceReq_certs_Item = function (
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

export class CertReplaceReq {
    constructor(
        readonly version: CASPversion | undefined /* REPLICATED_COMPONENT */,
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        readonly certs: CertReplaceReq_certs_Item[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_CertReplaceReq__version = CASPversion_v1;
export const _decode_CertReplaceReq = function (
    el: asn1.ASN1Element
): CertReplaceReq {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<CASPversion> = _default_value_for_CertReplaceReq__version;
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
            certs = __utils._decodeSequenceOf<CertReplaceReq_certs_Item>(
                () => _decode_CertReplaceReq_certs_Item
            )(_el);
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
export const _encode_CertReplaceReq = function (
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
                        _default_value_for_CertReplaceReq__version
                    )
                        ? undefined
                        : _encode_CASPversion(value.version, __utils.BER),
                    /* REQUIRED   */ _encode_CASPsequence(
                        value.sequence,
                        __utils.BER
                    ),
                    /* REQUIRED   */ __utils._encodeSequenceOf<
                        CertReplaceReq_certs_Item
                    >(() => _encode_CertReplaceReq_certs_Item, __utils.BER)(
                        value.certs,
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

export const _decode_CertReplaceOK_Item_ok = function (
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
    return new CertReplaceOK_Item_ok(issuer, serialNumber, sequence.slice(2));
};
export const _encode_CertReplaceOK_Item_ok = function (
    value: CertReplaceOK_Item_ok,
    elGetter: __utils.ASN1Encoder<CertReplaceOK_Item_ok>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ _encode_Name(value.issuer, __utils.BER),
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

export const _decode_CertReplaceOK_Item_not_ok = function (
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
export const _encode_CertReplaceOK_Item_not_ok = function (
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

export type CertReplaceOK_Item =
    | { ok: CertReplaceOK_Item_ok }
    | { not_ok: CertReplaceOK_Item_not_ok }
    | asn1.ASN1Element;
export const _decode_CertReplaceOK_Item = __utils._decode_extensible_choice<
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
export const _encode_CertReplaceOK_Item = __utils._encode_choice<
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

export type CertReplaceOK = CertReplaceOK_Item[]; // SequenceOfType
export const _decode_CertReplaceOK = __utils._decodeSequenceOf<
    CertReplaceOK_Item
>(() => _decode_CertReplaceOK_Item);
export const _encode_CertReplaceOK = __utils._encodeSequenceOf<
    CertReplaceOK_Item
>(() => _encode_CertReplaceOK_Item, __utils.BER);

export type SignedData_error = asn1.ENUMERATED;
export const SignedData_error_noReason: SignedData_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const SignedData_error_signedDataContectTypeExpected: SignedData_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const SignedData_error_wrongSignedDataVersion: SignedData_error = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const SignedData_error_missingContent: SignedData_error = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const SignedData_error_missingContentComponent: SignedData_error = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const SignedData_error_invalidContentComponent: SignedData_error = 5; /* LONG_NAMED_ENUMERATED_VALUE */
export const SignedData_error_unsupportedHashAlgorithm: SignedData_error = 6; /* LONG_NAMED_ENUMERATED_VALUE */
export const _decode_SignedData_error = __utils._decodeEnumerated;
export const _encode_SignedData_error = __utils._encodeEnumerated;

export type EnvelopedData_error = asn1.ENUMERATED;
export const EnvelopedData_error_noReason: EnvelopedData_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const _decode_EnvelopedData_error = __utils._decodeEnumerated;
export const _encode_EnvelopedData_error = __utils._encodeEnumerated;

export type CertReplaceErr_code =
    | { signedData: SignedData_error }
    | { envelopedData: EnvelopedData_error }
    | { casp: CASP_error }
    | asn1.ASN1Element;
export const _decode_CertReplaceErr_code = __utils._decode_extensible_choice<
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
export const _encode_CertReplaceErr_code = __utils._encode_choice<
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

export const _decode_CertReplaceErr = function (
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
export const _encode_CertReplaceErr = function (
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

export type CertReplaceRsp_result =
    | { success: CertReplaceOK }
    | { failure: CertReplaceErr }
    | asn1.ASN1Element;
export const _decode_CertReplaceRsp_result = __utils._decode_extensible_choice<
    CertReplaceRsp_result
>({
    "CONTEXT 0": [
        "success",
        __utils._decode_explicit<CertReplaceOK>(() => _decode_CertReplaceOK),
    ],
    "CONTEXT 1": [
        "failure",
        __utils._decode_explicit<CertReplaceErr>(() => _decode_CertReplaceErr),
    ],
});
export const _encode_CertReplaceRsp_result = __utils._encode_choice<
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

export class CertReplaceRsp {
    constructor(
        readonly version: CASPversion | undefined /* REPLICATED_COMPONENT */,
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        readonly result: CertReplaceRsp_result,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_CertReplaceRsp__version = CASPversion_v1;
export const _decode_CertReplaceRsp = function (
    el: asn1.ASN1Element
): CertReplaceRsp {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<CASPversion> = _default_value_for_CertReplaceRsp__version;
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
export const _encode_CertReplaceRsp = function (
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
                        _default_value_for_CertReplaceRsp__version
                    )
                        ? undefined
                        : _encode_CASPversion(value.version, __utils.BER),
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

export const _decode_CertUpdateReq_certs_Item = function (
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
export const _encode_CertUpdateReq_certs_Item = function (
    value: CertUpdateReq_certs_Item,
    elGetter: __utils.ASN1Encoder<CertUpdateReq_certs_Item>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ _encode_Name(value.subject, __utils.BER),
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

export class CertUpdateReq {
    constructor(
        readonly version: CASPversion | undefined /* REPLICATED_COMPONENT */,
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        readonly certs: CertUpdateReq_certs_Item[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_CertUpdateReq__version = CASPversion_v1;
export const _decode_CertUpdateReq = function (
    el: asn1.ASN1Element
): CertUpdateReq {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<CASPversion> = _default_value_for_CertUpdateReq__version;
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
export const _encode_CertUpdateReq = function (
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
                        _default_value_for_CertUpdateReq__version
                    )
                        ? undefined
                        : _encode_CASPversion(value.version, __utils.BER),
                    /* REQUIRED   */ _encode_CASPsequence(
                        value.sequence,
                        __utils.BER
                    ),
                    /* REQUIRED   */ __utils._encodeSequenceOf<
                        CertUpdateReq_certs_Item
                    >(() => _encode_CertUpdateReq_certs_Item, __utils.BER)(
                        value.certs,
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

export const _decode_CertUpdateOK_Item_ok = function (
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
    return new CertUpdateOK_Item_ok(subject, serialNumber, sequence.slice(2));
};
export const _encode_CertUpdateOK_Item_ok = function (
    value: CertUpdateOK_Item_ok,
    elGetter: __utils.ASN1Encoder<CertUpdateOK_Item_ok>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ _encode_Name(value.subject, __utils.BER),
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

export const _decode_CertUpdateOK_Item_not_ok = function (
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
export const _encode_CertUpdateOK_Item_not_ok = function (
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

export type CertUpdateOK_Item =
    | { ok: CertUpdateOK_Item_ok }
    | { not_ok: CertUpdateOK_Item_not_ok }
    | asn1.ASN1Element;
export const _decode_CertUpdateOK_Item = __utils._decode_extensible_choice<
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
export const _encode_CertUpdateOK_Item = __utils._encode_choice<
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

export type CertUpdateOK = CertUpdateOK_Item[]; // SequenceOfType
export const _decode_CertUpdateOK = __utils._decodeSequenceOf<
    CertUpdateOK_Item
>(() => _decode_CertUpdateOK_Item);
export const _encode_CertUpdateOK = __utils._encodeSequenceOf<
    CertUpdateOK_Item
>(() => _encode_CertUpdateOK_Item, __utils.BER);

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

export const _decode_CertUpdateErr = function (
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
export const _encode_CertUpdateErr = function (
    value: CertUpdateErr,
    elGetter: __utils.ASN1Encoder<CertUpdateErr>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [/* REQUIRED   */ _encode_CASP_error(value.code, __utils.BER)],
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

export type CertUpdateRsp_result =
    | { success: CertUpdateOK }
    | { failure: CertUpdateErr }
    | asn1.ASN1Element;
export const _decode_CertUpdateRsp_result = __utils._decode_extensible_choice<
    CertUpdateRsp_result
>({
    "CONTEXT 0": [
        "success",
        __utils._decode_explicit<CertUpdateOK>(() => _decode_CertUpdateOK),
    ],
    "CONTEXT 1": [
        "failure",
        __utils._decode_explicit<CertUpdateErr>(() => _decode_CertUpdateErr),
    ],
});
export const _encode_CertUpdateRsp_result = __utils._encode_choice<
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

export class CertUpdateRsp {
    constructor(
        readonly version: CASPversion | undefined /* REPLICATED_COMPONENT */,
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        readonly result: CertUpdateRsp_result,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_CertUpdateRsp__version = CASPversion_v1;
export const _decode_CertUpdateRsp = function (
    el: asn1.ASN1Element
): CertUpdateRsp {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<CASPversion> = _default_value_for_CertUpdateRsp__version;
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
export const _encode_CertUpdateRsp = function (
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
                        _default_value_for_CertUpdateRsp__version
                    )
                        ? undefined
                        : _encode_CASPversion(value.version, __utils.BER),
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

// TODO: ObjectAssignment: rejectCAsubscribe

export class RejectCAsubscribe {
    constructor(
        readonly version: CASPversion | undefined /* REPLICATED_COMPONENT */,
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        readonly reason: CASP_error,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_RejectCAsubscribe__version = CASPversion_v1;
export const _decode_RejectCAsubscribe = function (
    el: asn1.ASN1Element
): RejectCAsubscribe {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<CASPversion> = _default_value_for_RejectCAsubscribe__version;
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
export const _encode_RejectCAsubscribe = function (
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
                        _default_value_for_RejectCAsubscribe__version
                    )
                        ? undefined
                        : _encode_CASPversion(value.version, __utils.BER),
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
    | { caCert: PKCertIdentifier }
    | { subjectCert: PKCertIdentifier }
    | asn1.ASN1Element;
export const _decode_TBrequest = __utils._decode_extensible_choice<TBrequest>({
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
export const _encode_TBrequest = __utils._encode_choice<TBrequest>(
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

export const _decode_TBOK = function (el: asn1.ASN1Element): TBOK {
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
export const _encode_TBOK = function (
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
                        : __utils._encodeUTF8String(value.info, __utils.BER),
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

export type TBerror_code = asn1.ENUMERATED;
export const TBerror_code_caCertInvalid: TBerror_code = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const TBerror_code_unknownCert: TBerror_code = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const TBerror_code_unknownCertStatus: TBerror_code = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const TBerror_code_subjectCertRevoked: TBerror_code = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const TBerror_code_incorrectCert: TBerror_code = 5; /* LONG_NAMED_ENUMERATED_VALUE */
export const TBerror_code_contractExpired: TBerror_code = 6; /* LONG_NAMED_ENUMERATED_VALUE */
export const TBerror_code_pathValidationFailed: TBerror_code = 7; /* LONG_NAMED_ENUMERATED_VALUE */
export const TBerror_code_timeOut: TBerror_code = 8; /* LONG_NAMED_ENUMERATED_VALUE */
export const TBerror_code_other: TBerror_code = 99; /* LONG_NAMED_ENUMERATED_VALUE */
export const _decode_TBerror_code = __utils._decodeEnumerated;
export const _encode_TBerror_code = __utils._encodeEnumerated;

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

export const _decode_TBerror = function (el: asn1.ASN1Element): TBerror {
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
export const _encode_TBerror = function (
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

export type TBresponse =
    | { success: TBOK }
    | { failure: TBerror }
    | asn1.ASN1Element;
export const _decode_TBresponse = __utils._decode_extensible_choice<TBresponse>(
    {
        "CONTEXT 0": [
            "success",
            __utils._decode_explicit<TBOK>(() => _decode_TBOK),
        ],
        "CONTEXT 1": [
            "failure",
            __utils._decode_explicit<TBerror>(() => _decode_TBerror),
        ],
    }
);
export const _encode_TBresponse = __utils._encode_choice<TBresponse>(
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

/* END_MODULE PkiPMIProtocolSpecifications */
