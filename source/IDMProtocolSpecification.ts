
// IDMProtocolSpecification
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import * as UsefulDefinitions from "./UsefulDefinitions";
import {
    certificateExtensions,
    commonProtocolSpecification,
    directoryAbstractService,
    directoryIDMProtocols,
    enhancedSecurity
} from "./UsefulDefinitions";

import * as CertificateExtensions from "./CertificateExtensions";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName
} from "./CertificateExtensions";

import * as DirectoryAbstractService from "./DirectoryAbstractService";
import {
    SecurityProblem,
    ServiceProblem,
    Versions,
    _decode_SecurityProblem,
    _encode_SecurityProblem,
    _decode_ServiceProblem,
    _encode_ServiceProblem,
    _decode_Versions,
    _encode_Versions
} from "./DirectoryAbstractService";

import * as CommonProtocolSpecification from "./CommonProtocolSpecification";
import {
    OPERATION
} from "./CommonProtocolSpecification";


const itu_t: number = 0;
const itu_r: number = 0;
const ccitt: number = 0;
const iso: number = 1;
const joint_iso_itu_t: number = 2;
const joint_iso_ccitt: number = 2;

// TODO: ObjectClassAssignment: IDM-PROTOCOL

export class IdmBind {
    constructor (
        readonly protocolID: asn1.OBJECT_IDENTIFIER,
        readonly callingAETitle: GeneralName | undefined,
        readonly calledAETitle: GeneralName | undefined,
        readonly argument: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_IdmBind: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("protocolID", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("callingAETitle", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("calledAETitle", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("argument", false, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined)
];
const _root_component_type_list_2_spec_for_IdmBind: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_IdmBind: __utils.ComponentSpec[] = [
    
];
export const _decode_IdmBind = function (el: asn1.ASN1Element): IdmBind {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let protocolID!: asn1.OBJECT_IDENTIFIER;
    let callingAETitle: asn1.OPTIONAL<GeneralName>;
    let calledAETitle: asn1.OPTIONAL<GeneralName>;
    let argument!: asn1.ASN1Element;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "protocolID": (_el: asn1.ASN1Element): void => { protocolID = __utils._decodeObjectIdentifier(_el); },
        "callingAETitle": (_el: asn1.ASN1Element): void => { callingAETitle = __utils._decode_explicit<GeneralName>(() => _decode_GeneralName)(_el); },
        "calledAETitle": (_el: asn1.ASN1Element): void => { calledAETitle = __utils._decode_explicit<GeneralName>(() => _decode_GeneralName)(_el); },
        "argument": (_el: asn1.ASN1Element): void => { argument = __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IdmBind,
        _extension_additions_list_spec_for_IdmBind,
        _root_component_type_list_2_spec_for_IdmBind,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IdmBind( /* SEQUENCE_CONSTRUCTOR_CALL */
        protocolID,
        callingAETitle,
        calledAETitle,
        argument,
        _unrecognizedExtensionsList
    );
};
export const _encode_IdmBind = function (value: IdmBind, elGetter: __utils.ASN1Encoder<IdmBind>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeObjectIdentifier(value.protocolID, __utils.BER),
            (value.callingAETitle ? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_GeneralName, __utils.BER)(value.callingAETitle, __utils.BER) : undefined),
            (value.calledAETitle ? __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_GeneralName, __utils.BER)(value.calledAETitle, __utils.BER) : undefined),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeAny, __utils.BER)(value.argument, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class IdmBindResult {
    constructor (
        readonly protocolID: asn1.OBJECT_IDENTIFIER,
        readonly respondingAETitle: GeneralName | undefined,
        readonly result: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_IdmBindResult: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("protocolID", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("respondingAETitle", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("result", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_IdmBindResult: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_IdmBindResult: __utils.ComponentSpec[] = [
    
];
export const _decode_IdmBindResult = function (el: asn1.ASN1Element): IdmBindResult {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let protocolID!: asn1.OBJECT_IDENTIFIER;
    let respondingAETitle: asn1.OPTIONAL<GeneralName>;
    let result!: asn1.ASN1Element;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "protocolID": (_el: asn1.ASN1Element): void => { protocolID = __utils._decodeObjectIdentifier(_el); },
        "respondingAETitle": (_el: asn1.ASN1Element): void => { respondingAETitle = __utils._decode_explicit<GeneralName>(() => _decode_GeneralName)(_el); },
        "result": (_el: asn1.ASN1Element): void => { result = __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IdmBindResult,
        _extension_additions_list_spec_for_IdmBindResult,
        _root_component_type_list_2_spec_for_IdmBindResult,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IdmBindResult( /* SEQUENCE_CONSTRUCTOR_CALL */
        protocolID,
        respondingAETitle,
        result,
        _unrecognizedExtensionsList
    );
};
export const _encode_IdmBindResult = function (value: IdmBindResult, elGetter: __utils.ASN1Encoder<IdmBindResult>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeObjectIdentifier(value.protocolID, __utils.BER),
            (value.respondingAETitle ? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_GeneralName, __utils.BER)(value.respondingAETitle, __utils.BER) : undefined),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeAny, __utils.BER)(value.result, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type IdmBindError_aETitleError = asn1.ENUMERATED
export const IdmBindError_aETitleError_callingAETitleNotAccepted: IdmBindError_aETitleError = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const callingAETitleNotAccepted: IdmBindError_aETitleError = IdmBindError_aETitleError_callingAETitleNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */
export const IdmBindError_aETitleError_calledAETitleNotRecognized: IdmBindError_aETitleError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const calledAETitleNotRecognized: IdmBindError_aETitleError = IdmBindError_aETitleError_calledAETitleNotRecognized; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IdmBindError_aETitleError = __utils._decodeEnumerated;
export const _encode_IdmBindError_aETitleError = __utils._encodeEnumerated;


export class IdmBindError {
    constructor (
        readonly protocolID: asn1.OBJECT_IDENTIFIER,
        readonly respondingAETitle: GeneralName | undefined,
        readonly aETitleError: IdmBindError_aETitleError | undefined,
        readonly error: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_IdmBindError: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("protocolID", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("respondingAETitle", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("aETitleError", true, __utils.hasTag(asn1.ASN1TagClass.universal, 10), undefined, undefined),
    new __utils.ComponentSpec("error", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_IdmBindError: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_IdmBindError: __utils.ComponentSpec[] = [
    
];
export const _decode_IdmBindError = function (el: asn1.ASN1Element): IdmBindError {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let protocolID!: asn1.OBJECT_IDENTIFIER;
    let respondingAETitle: asn1.OPTIONAL<GeneralName>;
    let aETitleError: asn1.OPTIONAL<IdmBindError_aETitleError>;
    let error!: asn1.ASN1Element;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "protocolID": (_el: asn1.ASN1Element): void => { protocolID = __utils._decodeObjectIdentifier(_el); },
        "respondingAETitle": (_el: asn1.ASN1Element): void => { respondingAETitle = __utils._decode_explicit<GeneralName>(() => _decode_GeneralName)(_el); },
        "aETitleError": (_el: asn1.ASN1Element): void => { aETitleError = _decode_IdmBindError_aETitleError(_el); },
        "error": (_el: asn1.ASN1Element): void => { error = __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IdmBindError,
        _extension_additions_list_spec_for_IdmBindError,
        _root_component_type_list_2_spec_for_IdmBindError,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IdmBindError( /* SEQUENCE_CONSTRUCTOR_CALL */
        protocolID,
        respondingAETitle,
        aETitleError,
        error,
        _unrecognizedExtensionsList
    );
};
export const _encode_IdmBindError = function (value: IdmBindError, elGetter: __utils.ASN1Encoder<IdmBindError>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeObjectIdentifier(value.protocolID, __utils.BER),
            (value.respondingAETitle ? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_GeneralName, __utils.BER)(value.respondingAETitle, __utils.BER) : undefined),
            (value.aETitleError ? _encode_IdmBindError_aETitleError(value.aETitleError, __utils.BER) : undefined),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeAny, __utils.BER)(value.error, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class Request {
    constructor (
        readonly invokeID: asn1.INTEGER,
        readonly opcode: Code,
        readonly argument: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_Request: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("invokeID", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("opcode", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("argument", false, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_Request: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_Request: __utils.ComponentSpec[] = [
    
];
export const _decode_Request = function (el: asn1.ASN1Element): Request {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError("Request contained only " + sequence.length.toString() + " elements.");
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
    return new Request(
        invokeID,
        opcode,
        argument,
        sequence.slice(3),
    );
};
export const _encode_Request = function (value: Request, elGetter: __utils.ASN1Encoder<Request>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeInteger(value.invokeID, __utils.BER),
            _encode_Code(value.opcode, __utils.BER),
            __utils._encodeAny(value.argument, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class IdmResult {
    constructor (
        readonly invokeID: asn1.INTEGER,
        readonly opcode: Code,
        readonly result: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_IdmResult: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("invokeID", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("opcode", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("result", false, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_IdmResult: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_IdmResult: __utils.ComponentSpec[] = [
    
];
export const _decode_IdmResult = function (el: asn1.ASN1Element): IdmResult {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError("IdmResult contained only " + sequence.length.toString() + " elements.");
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
    return new IdmResult(
        invokeID,
        opcode,
        result,
        sequence.slice(3),
    );
};
export const _encode_IdmResult = function (value: IdmResult, elGetter: __utils.ASN1Encoder<IdmResult>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeInteger(value.invokeID, __utils.BER),
            _encode_Code(value.opcode, __utils.BER),
            __utils._encodeAny(value.result, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class Error {
    constructor (
        readonly invokeID: asn1.INTEGER,
        readonly errcode: asn1.ASN1Element,
        readonly error: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_Error: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("invokeID", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("errcode", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("error", false, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_Error: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_Error: __utils.ComponentSpec[] = [
    
];
export const _decode_Error = function (el: asn1.ASN1Element): Error {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError("Error contained only " + sequence.length.toString() + " elements.");
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
    return new Error(
        invokeID,
        errcode,
        error,
        sequence.slice(3),
    );
};
export const _encode_Error = function (value: Error, elGetter: __utils.ASN1Encoder<Error>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeInteger(value.invokeID, __utils.BER),
            __utils._encodeAny(value.errcode, __utils.BER),
            __utils._encodeAny(value.error, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type IdmReject_reason = asn1.ENUMERATED
export const IdmReject_reason_mistypedPDU: IdmReject_reason = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const mistypedPDU: IdmReject_reason = IdmReject_reason_mistypedPDU; /* SHORT_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_duplicateInvokeIDRequest: IdmReject_reason = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const duplicateInvokeIDRequest: IdmReject_reason = IdmReject_reason_duplicateInvokeIDRequest; /* SHORT_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_unsupportedOperationRequest: IdmReject_reason = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const unsupportedOperationRequest: IdmReject_reason = IdmReject_reason_unsupportedOperationRequest; /* SHORT_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_unknownOperationRequest: IdmReject_reason = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const unknownOperationRequest: IdmReject_reason = IdmReject_reason_unknownOperationRequest; /* SHORT_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_mistypedArgumentRequest: IdmReject_reason = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const mistypedArgumentRequest: IdmReject_reason = IdmReject_reason_mistypedArgumentRequest; /* SHORT_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_resourceLimitationRequest: IdmReject_reason = 5; /* LONG_NAMED_ENUMERATED_VALUE */
export const resourceLimitationRequest: IdmReject_reason = IdmReject_reason_resourceLimitationRequest; /* SHORT_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_unknownInvokeIDResult: IdmReject_reason = 6; /* LONG_NAMED_ENUMERATED_VALUE */
export const unknownInvokeIDResult: IdmReject_reason = IdmReject_reason_unknownInvokeIDResult; /* SHORT_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_mistypedResultRequest: IdmReject_reason = 7; /* LONG_NAMED_ENUMERATED_VALUE */
export const mistypedResultRequest: IdmReject_reason = IdmReject_reason_mistypedResultRequest; /* SHORT_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_unknownInvokeIDError: IdmReject_reason = 8; /* LONG_NAMED_ENUMERATED_VALUE */
export const unknownInvokeIDError: IdmReject_reason = IdmReject_reason_unknownInvokeIDError; /* SHORT_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_unknownError: IdmReject_reason = 9; /* LONG_NAMED_ENUMERATED_VALUE */
export const unknownError: IdmReject_reason = IdmReject_reason_unknownError; /* SHORT_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_mistypedParameterError: IdmReject_reason = 10; /* LONG_NAMED_ENUMERATED_VALUE */
export const mistypedParameterError: IdmReject_reason = IdmReject_reason_mistypedParameterError; /* SHORT_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_unsupportedIdmVersion: IdmReject_reason = 11; /* LONG_NAMED_ENUMERATED_VALUE */
export const unsupportedIdmVersion: IdmReject_reason = IdmReject_reason_unsupportedIdmVersion; /* SHORT_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_unsuitableIdmVersion: IdmReject_reason = 12; /* LONG_NAMED_ENUMERATED_VALUE */
export const unsuitableIdmVersion: IdmReject_reason = IdmReject_reason_unsuitableIdmVersion; /* SHORT_NAMED_ENUMERATED_VALUE */
export const IdmReject_reason_invalidIdmVersion: IdmReject_reason = 13; /* LONG_NAMED_ENUMERATED_VALUE */
export const invalidIdmVersion: IdmReject_reason = IdmReject_reason_invalidIdmVersion; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IdmReject_reason = __utils._decodeEnumerated;
export const _encode_IdmReject_reason = __utils._encodeEnumerated;


export class IdmReject {
    constructor (
        readonly invokeID: asn1.INTEGER,
        readonly reason: IdmReject_reason,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_IdmReject: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("invokeID", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("reason", false, __utils.hasTag(asn1.ASN1TagClass.universal, 10), undefined, undefined)
];
const _root_component_type_list_2_spec_for_IdmReject: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_IdmReject: __utils.ComponentSpec[] = [
    
];
export const _decode_IdmReject = function (el: asn1.ASN1Element): IdmReject {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("IdmReject contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "invokeID";
    sequence[1].name = "reason";
    let invokeID!: asn1.INTEGER;
    let reason!: IdmReject_reason;
    invokeID = __utils._decodeInteger(sequence[0]);
    reason = _decode_IdmReject_reason(sequence[1]);
    // TODO: Validate values.
    return new IdmReject(
        invokeID,
        reason,
        sequence.slice(2),
    );
};
export const _encode_IdmReject = function (value: IdmReject, elGetter: __utils.ASN1Encoder<IdmReject>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeInteger(value.invokeID, __utils.BER),
            _encode_IdmReject_reason(value.reason, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type Unbind = asn1.NULL; // NullType
export const _decode_Unbind = __utils._decodeNull;
export const _encode_Unbind = __utils._encodeNull;


export type Abort = asn1.ENUMERATED
export const Abort_mistypedPDU: Abort = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const mistypedPDU: Abort = Abort_mistypedPDU; /* SHORT_NAMED_ENUMERATED_VALUE */
export const Abort_unboundRequest: Abort = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const unboundRequest: Abort = Abort_unboundRequest; /* SHORT_NAMED_ENUMERATED_VALUE */
export const Abort_invalidPDU: Abort = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const invalidPDU: Abort = Abort_invalidPDU; /* SHORT_NAMED_ENUMERATED_VALUE */
export const Abort_resourceLimitation: Abort = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const resourceLimitation: Abort = Abort_resourceLimitation; /* SHORT_NAMED_ENUMERATED_VALUE */
export const Abort_connectionFailed: Abort = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const connectionFailed: Abort = Abort_connectionFailed; /* SHORT_NAMED_ENUMERATED_VALUE */
export const Abort_invalidProtocol: Abort = 5; /* LONG_NAMED_ENUMERATED_VALUE */
export const invalidProtocol: Abort = Abort_invalidProtocol; /* SHORT_NAMED_ENUMERATED_VALUE */
export const Abort_reasonNotSpecified: Abort = 6; /* LONG_NAMED_ENUMERATED_VALUE */
export const reasonNotSpecified: Abort = Abort_reasonNotSpecified; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Abort = __utils._decodeEnumerated;
export const _encode_Abort = __utils._encodeEnumerated;


export type StartTLS = asn1.NULL; // NullType
export const _decode_StartTLS = __utils._decodeNull;
export const _encode_StartTLS = __utils._encodeNull;


export type TLSResponse = asn1.ENUMERATED
export const TLSResponse_success: TLSResponse = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const success: TLSResponse = TLSResponse_success; /* SHORT_NAMED_ENUMERATED_VALUE */
export const TLSResponse_operationsError: TLSResponse = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const operationsError: TLSResponse = TLSResponse_operationsError; /* SHORT_NAMED_ENUMERATED_VALUE */
export const TLSResponse_protocolError: TLSResponse = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const protocolError: TLSResponse = TLSResponse_protocolError; /* SHORT_NAMED_ENUMERATED_VALUE */
export const TLSResponse_unavailable: TLSResponse = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const unavailable: TLSResponse = TLSResponse_unavailable; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TLSResponse = __utils._decodeEnumerated;
export const _encode_TLSResponse = __utils._encodeEnumerated;


export type IDM_PDU =
    { bind: IdmBind }
    | { bindResult: IdmBindResult }
    | { bindError: IdmBindError }
    | { request: Request }
    | { result: IdmResult }
    | { error: Error }
    | { reject: IdmReject }
    | { unbind: Unbind }
    | { abort: Abort }
    | { startTLS: StartTLS }
    | { tLSResponse: TLSResponse }
    | asn1.ASN1Element;
export const _decode_IDM_PDU = __utils._decode_extensible_choice<IDM_PDU>({
    "CONTEXT 0": [ "bind", __utils._decode_explicit<IdmBind>(() => _decode_IdmBind) ],
    "CONTEXT 1": [ "bindResult", __utils._decode_explicit<IdmBindResult>(() => _decode_IdmBindResult) ],
    "CONTEXT 2": [ "bindError", __utils._decode_explicit<IdmBindError>(() => _decode_IdmBindError) ],
    "CONTEXT 3": [ "request", __utils._decode_explicit<Request>(() => _decode_Request) ],
    "CONTEXT 4": [ "result", __utils._decode_explicit<IdmResult>(() => _decode_IdmResult) ],
    "CONTEXT 5": [ "error", __utils._decode_explicit<Error>(() => _decode_Error) ],
    "CONTEXT 6": [ "reject", __utils._decode_explicit<IdmReject>(() => _decode_IdmReject) ],
    "CONTEXT 7": [ "unbind", __utils._decode_explicit<Unbind>(() => _decode_Unbind) ],
    "CONTEXT 8": [ "abort", __utils._decode_explicit<Abort>(() => _decode_Abort) ],
    "CONTEXT 9": [ "startTLS", __utils._decode_explicit<StartTLS>(() => _decode_StartTLS) ],
    "CONTEXT 10": [ "tLSResponse", __utils._decode_explicit<TLSResponse>(() => _decode_TLSResponse) ]
});
export const _encode_IDM_PDU = __utils._encode_choice<IDM_PDU>({
    "bind": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_IdmBind, __utils.BER),
    "bindResult": __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_IdmBindResult, __utils.BER),
    "bindError": __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_IdmBindError, __utils.BER),
    "request": __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_Request, __utils.BER),
    "result": __utils._encode_explicit(asn1.ASN1TagClass.context, 4, () => _encode_IdmResult, __utils.BER),
    "error": __utils._encode_explicit(asn1.ASN1TagClass.context, 5, () => _encode_Error, __utils.BER),
    "reject": __utils._encode_explicit(asn1.ASN1TagClass.context, 6, () => _encode_IdmReject, __utils.BER),
    "unbind": __utils._encode_explicit(asn1.ASN1TagClass.context, 7, () => _encode_Unbind, __utils.BER),
    "abort": __utils._encode_explicit(asn1.ASN1TagClass.context, 8, () => _encode_Abort, __utils.BER),
    "startTLS": __utils._encode_explicit(asn1.ASN1TagClass.context, 9, () => _encode_StartTLS, __utils.BER),
    "tLSResponse": __utils._encode_explicit(asn1.ASN1TagClass.context, 10, () => _encode_TLSResponse, __utils.BER),
}, __utils.BER);


