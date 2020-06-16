/*
    BEGIN_MODULE IDMProtocolSpecification
    OID: joint-iso-itu-t.ds.module.iDMProtocolSpecification.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "./CertificateExtensions";
import {
    Code,
    _decode_Code,
    _encode_Code,
} from "./CommonProtocolSpecification";
import * as __utils from "./__utils";
export {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "./CertificateExtensions";
export {
    SecurityProblem,
    SecurityProblem_blockedCredentials,
    SecurityProblem_inappropriateAlgorithms,
    SecurityProblem_inappropriateAuthentication,
    SecurityProblem_insufficientAccessRights,
    SecurityProblem_invalidCredentials,
    SecurityProblem_invalidSignature,
    SecurityProblem_noInformation,
    SecurityProblem_passwordExpired,
    SecurityProblem_protectionRequired,
    SecurityProblem_spkmError,
    SecurityProblem_unsupportedAuthenticationMethod,
    ServiceProblem,
    ServiceProblem_administrativeLimitExceeded,
    ServiceProblem_ambiguousKeyAttributes,
    ServiceProblem_busy,
    ServiceProblem_chainingRequired,
    ServiceProblem_ditError,
    ServiceProblem_invalidQueryReference,
    ServiceProblem_invalidReference,
    ServiceProblem_loopDetected,
    ServiceProblem_notSupportedByLDAP,
    ServiceProblem_outOfScope,
    ServiceProblem_requestedServiceNotAvailable,
    ServiceProblem_saslBindInProgress,
    ServiceProblem_timeLimitExceeded,
    ServiceProblem_unableToProceed,
    ServiceProblem_unavailable,
    ServiceProblem_unavailableCriticalExtension,
    ServiceProblem_unsupportedMatchingUse,
    ServiceProblem_unwillingToPerform,
    Versions,
    Versions_v1 as v1 /* IMPORTED_BIT */,
    Versions_v2 as v2 /* IMPORTED_BIT */,
    _decode_SecurityProblem,
    _decode_ServiceProblem,
    _decode_Versions,
    _encode_SecurityProblem,
    _encode_ServiceProblem,
    _encode_Versions,
} from "./DirectoryAbstractService";
export {
    certificateExtensions,
    commonProtocolSpecification,
    directoryAbstractService,
    directoryIDMProtocols,
    enhancedSecurity,
} from "./UsefulDefinitions";

// TODO: ObjectClassAssignment: IDM-PROTOCOL

export class IdmBind {
    constructor(
        readonly protocolID: asn1.OBJECT_IDENTIFIER,
        readonly callingAETitle: GeneralName | undefined,
        readonly calledAETitle: GeneralName | undefined,
        readonly argument: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_IdmBind: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "protocolID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "callingAETitle",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "calledAETitle",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "argument",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_IdmBind: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_IdmBind: __utils.ComponentSpec[] = [];
let _cached_decoder_for_IdmBind: __utils.ASN1Decoder<IdmBind> | null = null;
let _cached_encoder_for_IdmBind: __utils.ASN1Encoder<IdmBind> | null = null;
export function _decode_IdmBind(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IdmBind) {
        _cached_decoder_for_IdmBind = function (el: asn1.ASN1Element): IdmBind {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let protocolID!: asn1.OBJECT_IDENTIFIER;
            let callingAETitle: asn1.OPTIONAL<GeneralName>;
            let calledAETitle: asn1.OPTIONAL<GeneralName>;
            let argument!: asn1.ASN1Element;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                protocolID: (_el: asn1.ASN1Element): void => {
                    protocolID = __utils._decodeObjectIdentifier(_el);
                },
                callingAETitle: (_el: asn1.ASN1Element): void => {
                    callingAETitle = __utils._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                calledAETitle: (_el: asn1.ASN1Element): void => {
                    calledAETitle = __utils._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                argument: (_el: asn1.ASN1Element): void => {
                    argument = __utils._decode_explicit<asn1.ASN1Element>(
                        () => __utils._decodeAny
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IdmBind,
                _extension_additions_list_spec_for_IdmBind,
                _root_component_type_list_2_spec_for_IdmBind,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new IdmBind(
                /* SEQUENCE_CONSTRUCTOR_CALL */ protocolID,
                callingAETitle,
                calledAETitle,
                argument,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_IdmBind(el);
}
export function _encode_IdmBind(
    value: IdmBind,
    elGetter: __utils.ASN1Encoder<IdmBind>
) {
    if (!_cached_encoder_for_IdmBind) {
        _cached_encoder_for_IdmBind = function (
            value: IdmBind,
            elGetter: __utils.ASN1Encoder<IdmBind>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.protocolID,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.callingAETitle === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      __utils.BER
                                  )(value.callingAETitle, __utils.BER),
                            /* IF_ABSENT  */ value.calledAETitle === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_GeneralName,
                                      __utils.BER
                                  )(value.calledAETitle, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                2,
                                () => __utils._encodeAny,
                                __utils.BER
                            )(value.argument, __utils.BER),
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
    return _cached_encoder_for_IdmBind(value, elGetter);
}

export class IdmBindResult {
    constructor(
        readonly protocolID: asn1.OBJECT_IDENTIFIER,
        readonly respondingAETitle: GeneralName | undefined,
        readonly result: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_IdmBindResult: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "protocolID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "respondingAETitle",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "result",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_IdmBindResult: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_IdmBindResult: __utils.ComponentSpec[] = [];
let _cached_decoder_for_IdmBindResult: __utils.ASN1Decoder<
    IdmBindResult
> | null = null;
let _cached_encoder_for_IdmBindResult: __utils.ASN1Encoder<
    IdmBindResult
> | null = null;
export function _decode_IdmBindResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IdmBindResult) {
        _cached_decoder_for_IdmBindResult = function (
            el: asn1.ASN1Element
        ): IdmBindResult {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let protocolID!: asn1.OBJECT_IDENTIFIER;
            let respondingAETitle: asn1.OPTIONAL<GeneralName>;
            let result!: asn1.ASN1Element;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                protocolID: (_el: asn1.ASN1Element): void => {
                    protocolID = __utils._decodeObjectIdentifier(_el);
                },
                respondingAETitle: (_el: asn1.ASN1Element): void => {
                    respondingAETitle = __utils._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                result: (_el: asn1.ASN1Element): void => {
                    result = __utils._decode_explicit<asn1.ASN1Element>(
                        () => __utils._decodeAny
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IdmBindResult,
                _extension_additions_list_spec_for_IdmBindResult,
                _root_component_type_list_2_spec_for_IdmBindResult,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new IdmBindResult(
                /* SEQUENCE_CONSTRUCTOR_CALL */ protocolID,
                respondingAETitle,
                result,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_IdmBindResult(el);
}
export function _encode_IdmBindResult(
    value: IdmBindResult,
    elGetter: __utils.ASN1Encoder<IdmBindResult>
) {
    if (!_cached_encoder_for_IdmBindResult) {
        _cached_encoder_for_IdmBindResult = function (
            value: IdmBindResult,
            elGetter: __utils.ASN1Encoder<IdmBindResult>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.protocolID,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.respondingAETitle ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      __utils.BER
                                  )(value.respondingAETitle, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () => __utils._encodeAny,
                                __utils.BER
                            )(value.result, __utils.BER),
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
    return _cached_encoder_for_IdmBindResult(value, elGetter);
}

export type IdmBindError_aETitleError = asn1.ENUMERATED;
export const IdmBindError_aETitleError_callingAETitleNotAccepted: IdmBindError_aETitleError = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const callingAETitleNotAccepted: IdmBindError_aETitleError = IdmBindError_aETitleError_callingAETitleNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */
export const IdmBindError_aETitleError_calledAETitleNotRecognized: IdmBindError_aETitleError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const calledAETitleNotRecognized: IdmBindError_aETitleError = IdmBindError_aETitleError_calledAETitleNotRecognized; /* SHORT_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_IdmBindError_aETitleError: __utils.ASN1Decoder<
    IdmBindError_aETitleError
> | null = null;
let _cached_encoder_for_IdmBindError_aETitleError: __utils.ASN1Encoder<
    IdmBindError_aETitleError
> | null = null;
export function _decode_IdmBindError_aETitleError(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IdmBindError_aETitleError) {
        _cached_decoder_for_IdmBindError_aETitleError =
            __utils._decodeEnumerated;
    }
    return _cached_decoder_for_IdmBindError_aETitleError(el);
}
export function _encode_IdmBindError_aETitleError(
    value: IdmBindError_aETitleError,
    elGetter: __utils.ASN1Encoder<IdmBindError_aETitleError>
) {
    if (!_cached_encoder_for_IdmBindError_aETitleError) {
        _cached_encoder_for_IdmBindError_aETitleError =
            __utils._encodeEnumerated;
    }
    return _cached_encoder_for_IdmBindError_aETitleError(value, elGetter);
}

export class IdmBindError {
    constructor(
        readonly protocolID: asn1.OBJECT_IDENTIFIER,
        readonly respondingAETitle: GeneralName | undefined,
        readonly aETitleError: IdmBindError_aETitleError | undefined,
        readonly error: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_IdmBindError: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "protocolID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "respondingAETitle",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aETitleError",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "error",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_IdmBindError: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_IdmBindError: __utils.ComponentSpec[] = [];
let _cached_decoder_for_IdmBindError: __utils.ASN1Decoder<
    IdmBindError
> | null = null;
let _cached_encoder_for_IdmBindError: __utils.ASN1Encoder<
    IdmBindError
> | null = null;
export function _decode_IdmBindError(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IdmBindError) {
        _cached_decoder_for_IdmBindError = function (
            el: asn1.ASN1Element
        ): IdmBindError {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let protocolID!: asn1.OBJECT_IDENTIFIER;
            let respondingAETitle: asn1.OPTIONAL<GeneralName>;
            let aETitleError: asn1.OPTIONAL<IdmBindError_aETitleError>;
            let error!: asn1.ASN1Element;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                protocolID: (_el: asn1.ASN1Element): void => {
                    protocolID = __utils._decodeObjectIdentifier(_el);
                },
                respondingAETitle: (_el: asn1.ASN1Element): void => {
                    respondingAETitle = __utils._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                aETitleError: (_el: asn1.ASN1Element): void => {
                    aETitleError = _decode_IdmBindError_aETitleError(_el);
                },
                error: (_el: asn1.ASN1Element): void => {
                    error = __utils._decode_explicit<asn1.ASN1Element>(
                        () => __utils._decodeAny
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IdmBindError,
                _extension_additions_list_spec_for_IdmBindError,
                _root_component_type_list_2_spec_for_IdmBindError,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new IdmBindError(
                /* SEQUENCE_CONSTRUCTOR_CALL */ protocolID,
                respondingAETitle,
                aETitleError,
                error,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_IdmBindError(el);
}
export function _encode_IdmBindError(
    value: IdmBindError,
    elGetter: __utils.ASN1Encoder<IdmBindError>
) {
    if (!_cached_encoder_for_IdmBindError) {
        _cached_encoder_for_IdmBindError = function (
            value: IdmBindError,
            elGetter: __utils.ASN1Encoder<IdmBindError>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.protocolID,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.respondingAETitle ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      __utils.BER
                                  )(value.respondingAETitle, __utils.BER),
                            /* IF_ABSENT  */ value.aETitleError === undefined
                                ? undefined
                                : _encode_IdmBindError_aETitleError(
                                      value.aETitleError,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () => __utils._encodeAny,
                                __utils.BER
                            )(value.error, __utils.BER),
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
    return _cached_encoder_for_IdmBindError(value, elGetter);
}

export class Request {
    constructor(
        readonly invokeID: asn1.INTEGER,
        readonly opcode: Code,
        readonly argument: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_Request: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "invokeID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "opcode",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "argument",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Request: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Request: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Request: __utils.ASN1Decoder<Request> | null = null;
let _cached_encoder_for_Request: __utils.ASN1Encoder<Request> | null = null;
export function _decode_Request(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Request) {
        _cached_decoder_for_Request = function (el: asn1.ASN1Element): Request {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "Request contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "invokeID";
            sequence[1].name = "opcode";
            sequence[2].name = "argument";
            let invokeID!: asn1.INTEGER;
            let opcode!: Code;
            let argument!: asn1.ASN1Element;
            invokeID = __utils._decodeInteger(sequence[0]);
            opcode = _decode_Code(sequence[1]);
            argument = __utils._decodeAny(sequence[2]);
            // TODO: Validate values.
            return new Request(invokeID, opcode, argument, sequence.slice(3));
        };
    }
    return _cached_decoder_for_Request(el);
}
export function _encode_Request(
    value: Request,
    elGetter: __utils.ASN1Encoder<Request>
) {
    if (!_cached_encoder_for_Request) {
        _cached_encoder_for_Request = function (
            value: Request,
            elGetter: __utils.ASN1Encoder<Request>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeInteger(
                                value.invokeID,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_Code(
                                value.opcode,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeAny(
                                value.argument,
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
    return _cached_encoder_for_Request(value, elGetter);
}

export class IdmResult {
    constructor(
        readonly invokeID: asn1.INTEGER,
        readonly opcode: Code,
        readonly result: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_IdmResult: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "invokeID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "opcode",
        false,
        __utils.hasAnyTag,
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
export const _root_component_type_list_2_spec_for_IdmResult: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_IdmResult: __utils.ComponentSpec[] = [];
let _cached_decoder_for_IdmResult: __utils.ASN1Decoder<IdmResult> | null = null;
let _cached_encoder_for_IdmResult: __utils.ASN1Encoder<IdmResult> | null = null;
export function _decode_IdmResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IdmResult) {
        _cached_decoder_for_IdmResult = function (
            el: asn1.ASN1Element
        ): IdmResult {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "IdmResult contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "invokeID";
            sequence[1].name = "opcode";
            sequence[2].name = "result";
            let invokeID!: asn1.INTEGER;
            let opcode!: Code;
            let result!: asn1.ASN1Element;
            invokeID = __utils._decodeInteger(sequence[0]);
            opcode = _decode_Code(sequence[1]);
            result = __utils._decodeAny(sequence[2]);
            // TODO: Validate values.
            return new IdmResult(invokeID, opcode, result, sequence.slice(3));
        };
    }
    return _cached_decoder_for_IdmResult(el);
}
export function _encode_IdmResult(
    value: IdmResult,
    elGetter: __utils.ASN1Encoder<IdmResult>
) {
    if (!_cached_encoder_for_IdmResult) {
        _cached_encoder_for_IdmResult = function (
            value: IdmResult,
            elGetter: __utils.ASN1Encoder<IdmResult>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeInteger(
                                value.invokeID,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_Code(
                                value.opcode,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeAny(
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
    return _cached_encoder_for_IdmResult(value, elGetter);
}

export class Error {
    constructor(
        readonly invokeID: asn1.INTEGER,
        readonly errcode: asn1.ASN1Element,
        readonly error: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_Error: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "invokeID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "errcode",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "error",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Error: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Error: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Error: __utils.ASN1Decoder<Error> | null = null;
let _cached_encoder_for_Error: __utils.ASN1Encoder<Error> | null = null;
export function _decode_Error(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Error) {
        _cached_decoder_for_Error = function (el: asn1.ASN1Element): Error {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "Error contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "invokeID";
            sequence[1].name = "errcode";
            sequence[2].name = "error";
            let invokeID!: asn1.INTEGER;
            let errcode!: asn1.ASN1Element;
            let error!: asn1.ASN1Element;
            invokeID = __utils._decodeInteger(sequence[0]);
            errcode = __utils._decodeAny(sequence[1]);
            error = __utils._decodeAny(sequence[2]);
            // TODO: Validate values.
            return new Error(invokeID, errcode, error, sequence.slice(3));
        };
    }
    return _cached_decoder_for_Error(el);
}
export function _encode_Error(
    value: Error,
    elGetter: __utils.ASN1Encoder<Error>
) {
    if (!_cached_encoder_for_Error) {
        _cached_encoder_for_Error = function (
            value: Error,
            elGetter: __utils.ASN1Encoder<Error>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeInteger(
                                value.invokeID,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeAny(
                                value.errcode,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeAny(
                                value.error,
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
    return _cached_encoder_for_Error(value, elGetter);
}

export type IdmReject_reason = asn1.ENUMERATED;
export const IdmReject_reason_mistypedPDU: IdmReject_reason = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_duplicateInvokeIDRequest: IdmReject_reason = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_unsupportedOperationRequest: IdmReject_reason = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_unknownOperationRequest: IdmReject_reason = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_mistypedArgumentRequest: IdmReject_reason = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_resourceLimitationRequest: IdmReject_reason = 5; /* LONG_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_unknownInvokeIDResult: IdmReject_reason = 6; /* LONG_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_mistypedResultRequest: IdmReject_reason = 7; /* LONG_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_unknownInvokeIDError: IdmReject_reason = 8; /* LONG_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_unknownError: IdmReject_reason = 9; /* LONG_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_mistypedParameterError: IdmReject_reason = 10; /* LONG_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_unsupportedIdmVersion: IdmReject_reason = 11; /* LONG_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_unsuitableIdmVersion: IdmReject_reason = 12; /* LONG_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_invalidIdmVersion: IdmReject_reason = 13; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_IdmReject_reason: __utils.ASN1Decoder<
    IdmReject_reason
> | null = null;
let _cached_encoder_for_IdmReject_reason: __utils.ASN1Encoder<
    IdmReject_reason
> | null = null;
export function _decode_IdmReject_reason(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IdmReject_reason) {
        _cached_decoder_for_IdmReject_reason = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_IdmReject_reason(el);
}
export function _encode_IdmReject_reason(
    value: IdmReject_reason,
    elGetter: __utils.ASN1Encoder<IdmReject_reason>
) {
    if (!_cached_encoder_for_IdmReject_reason) {
        _cached_encoder_for_IdmReject_reason = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_IdmReject_reason(value, elGetter);
}

export class IdmReject {
    constructor(
        readonly invokeID: asn1.INTEGER,
        readonly reason: IdmReject_reason,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_IdmReject: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "invokeID",
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
export const _root_component_type_list_2_spec_for_IdmReject: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_IdmReject: __utils.ComponentSpec[] = [];
let _cached_decoder_for_IdmReject: __utils.ASN1Decoder<IdmReject> | null = null;
let _cached_encoder_for_IdmReject: __utils.ASN1Encoder<IdmReject> | null = null;
export function _decode_IdmReject(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IdmReject) {
        _cached_decoder_for_IdmReject = function (
            el: asn1.ASN1Element
        ): IdmReject {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "IdmReject contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "invokeID";
            sequence[1].name = "reason";
            let invokeID!: asn1.INTEGER;
            let reason!: IdmReject_reason;
            invokeID = __utils._decodeInteger(sequence[0]);
            reason = _decode_IdmReject_reason(sequence[1]);
            // TODO: Validate values.
            return new IdmReject(invokeID, reason, sequence.slice(2));
        };
    }
    return _cached_decoder_for_IdmReject(el);
}
export function _encode_IdmReject(
    value: IdmReject,
    elGetter: __utils.ASN1Encoder<IdmReject>
) {
    if (!_cached_encoder_for_IdmReject) {
        _cached_encoder_for_IdmReject = function (
            value: IdmReject,
            elGetter: __utils.ASN1Encoder<IdmReject>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeInteger(
                                value.invokeID,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_IdmReject_reason(
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
    return _cached_encoder_for_IdmReject(value, elGetter);
}

export type Unbind = asn1.NULL; // NullType
let _cached_decoder_for_Unbind: __utils.ASN1Decoder<Unbind> | null = null;
let _cached_encoder_for_Unbind: __utils.ASN1Encoder<Unbind> | null = null;
export function _decode_Unbind(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Unbind) {
        _cached_decoder_for_Unbind = __utils._decodeNull;
    }
    return _cached_decoder_for_Unbind(el);
}
export function _encode_Unbind(
    value: Unbind,
    elGetter: __utils.ASN1Encoder<Unbind>
) {
    if (!_cached_encoder_for_Unbind) {
        _cached_encoder_for_Unbind = __utils._encodeNull;
    }
    return _cached_encoder_for_Unbind(value, elGetter);
}

export type Abort = asn1.ENUMERATED;
export const Abort_mistypedPDU: Abort = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const Abort_unboundRequest: Abort = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const Abort_invalidPDU: Abort = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const Abort_resourceLimitation: Abort = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const Abort_connectionFailed: Abort = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const Abort_invalidProtocol: Abort = 5; /* LONG_NAMED_ENUMERATED_VALUE */
export const Abort_reasonNotSpecified: Abort = 6; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_Abort: __utils.ASN1Decoder<Abort> | null = null;
let _cached_encoder_for_Abort: __utils.ASN1Encoder<Abort> | null = null;
export function _decode_Abort(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Abort) {
        _cached_decoder_for_Abort = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_Abort(el);
}
export function _encode_Abort(
    value: Abort,
    elGetter: __utils.ASN1Encoder<Abort>
) {
    if (!_cached_encoder_for_Abort) {
        _cached_encoder_for_Abort = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_Abort(value, elGetter);
}

export type StartTLS = asn1.NULL; // NullType
let _cached_decoder_for_StartTLS: __utils.ASN1Decoder<StartTLS> | null = null;
let _cached_encoder_for_StartTLS: __utils.ASN1Encoder<StartTLS> | null = null;
export function _decode_StartTLS(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_StartTLS) {
        _cached_decoder_for_StartTLS = __utils._decodeNull;
    }
    return _cached_decoder_for_StartTLS(el);
}
export function _encode_StartTLS(
    value: StartTLS,
    elGetter: __utils.ASN1Encoder<StartTLS>
) {
    if (!_cached_encoder_for_StartTLS) {
        _cached_encoder_for_StartTLS = __utils._encodeNull;
    }
    return _cached_encoder_for_StartTLS(value, elGetter);
}

export type TLSResponse = asn1.ENUMERATED;
export const TLSResponse_success: TLSResponse = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const success: TLSResponse = TLSResponse_success; /* SHORT_NAMED_ENUMERATED_VALUE */
export const TLSResponse_operationsError: TLSResponse = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const operationsError: TLSResponse = TLSResponse_operationsError; /* SHORT_NAMED_ENUMERATED_VALUE */
export const TLSResponse_protocolError: TLSResponse = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const protocolError: TLSResponse = TLSResponse_protocolError; /* SHORT_NAMED_ENUMERATED_VALUE */
export const TLSResponse_unavailable: TLSResponse = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const unavailable: TLSResponse = TLSResponse_unavailable; /* SHORT_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_TLSResponse: __utils.ASN1Decoder<
    TLSResponse
> | null = null;
let _cached_encoder_for_TLSResponse: __utils.ASN1Encoder<
    TLSResponse
> | null = null;
export function _decode_TLSResponse(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TLSResponse) {
        _cached_decoder_for_TLSResponse = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_TLSResponse(el);
}
export function _encode_TLSResponse(
    value: TLSResponse,
    elGetter: __utils.ASN1Encoder<TLSResponse>
) {
    if (!_cached_encoder_for_TLSResponse) {
        _cached_encoder_for_TLSResponse = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_TLSResponse(value, elGetter);
}

export type IDM_PDU =
    | { bind: IdmBind } /* CHOICE_ALT_ROOT */
    | { bindResult: IdmBindResult } /* CHOICE_ALT_ROOT */
    | { bindError: IdmBindError } /* CHOICE_ALT_ROOT */
    | { request: Request } /* CHOICE_ALT_ROOT */
    | { result: IdmResult } /* CHOICE_ALT_ROOT */
    | { error: Error } /* CHOICE_ALT_ROOT */
    | { reject: IdmReject } /* CHOICE_ALT_ROOT */
    | { unbind: Unbind } /* CHOICE_ALT_ROOT */
    | { abort: Abort } /* CHOICE_ALT_ROOT */
    | { startTLS: StartTLS } /* CHOICE_ALT_ROOT */
    | { tLSResponse: TLSResponse } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_IDM_PDU: __utils.ASN1Decoder<IDM_PDU> | null = null;
let _cached_encoder_for_IDM_PDU: __utils.ASN1Encoder<IDM_PDU> | null = null;
export function _decode_IDM_PDU(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IDM_PDU) {
        _cached_decoder_for_IDM_PDU = __utils._decode_extensible_choice<
            IDM_PDU
        >({
            "CONTEXT 0": [
                "bind",
                __utils._decode_explicit<IdmBind>(() => _decode_IdmBind),
            ],
            "CONTEXT 1": [
                "bindResult",
                __utils._decode_explicit<IdmBindResult>(
                    () => _decode_IdmBindResult
                ),
            ],
            "CONTEXT 2": [
                "bindError",
                __utils._decode_explicit<IdmBindError>(
                    () => _decode_IdmBindError
                ),
            ],
            "CONTEXT 3": [
                "request",
                __utils._decode_explicit<Request>(() => _decode_Request),
            ],
            "CONTEXT 4": [
                "result",
                __utils._decode_explicit<IdmResult>(() => _decode_IdmResult),
            ],
            "CONTEXT 5": [
                "error",
                __utils._decode_explicit<Error>(() => _decode_Error),
            ],
            "CONTEXT 6": [
                "reject",
                __utils._decode_explicit<IdmReject>(() => _decode_IdmReject),
            ],
            "CONTEXT 7": [
                "unbind",
                __utils._decode_explicit<Unbind>(() => _decode_Unbind),
            ],
            "CONTEXT 8": [
                "abort",
                __utils._decode_explicit<Abort>(() => _decode_Abort),
            ],
            "CONTEXT 9": [
                "startTLS",
                __utils._decode_explicit<StartTLS>(() => _decode_StartTLS),
            ],
            "CONTEXT 10": [
                "tLSResponse",
                __utils._decode_explicit<TLSResponse>(
                    () => _decode_TLSResponse
                ),
            ],
        });
    }
    return _cached_decoder_for_IDM_PDU(el);
}
export function _encode_IDM_PDU(
    value: IDM_PDU,
    elGetter: __utils.ASN1Encoder<IDM_PDU>
) {
    if (!_cached_encoder_for_IDM_PDU) {
        _cached_encoder_for_IDM_PDU = __utils._encode_choice<IDM_PDU>(
            {
                bind: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_IdmBind,
                    __utils.BER
                ),
                bindResult: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_IdmBindResult,
                    __utils.BER
                ),
                bindError: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () => _encode_IdmBindError,
                    __utils.BER
                ),
                request: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    3,
                    () => _encode_Request,
                    __utils.BER
                ),
                result: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    4,
                    () => _encode_IdmResult,
                    __utils.BER
                ),
                error: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    5,
                    () => _encode_Error,
                    __utils.BER
                ),
                reject: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    6,
                    () => _encode_IdmReject,
                    __utils.BER
                ),
                unbind: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    7,
                    () => _encode_Unbind,
                    __utils.BER
                ),
                abort: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    8,
                    () => _encode_Abort,
                    __utils.BER
                ),
                startTLS: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    9,
                    () => _encode_StartTLS,
                    __utils.BER
                ),
                tLSResponse: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    10,
                    () => _encode_TLSResponse,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_IDM_PDU(value, elGetter);
}

/* END_MODULE IDMProtocolSpecification */
