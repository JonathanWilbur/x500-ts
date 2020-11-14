/**
 * @module IDMProtocolSpecification
 * @summary The ASN.1 module `IDMProtocolSpecification`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.iDMProtocolSpecification.9
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
    ENUMERATED,
    INTEGER,
    NULL,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "./CertificateExtensions";
import {
    Code,
    OPERATION,
    _decode_Code,
    _encode_Code,
} from "./CommonProtocolSpecification";
export {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "./CertificateExtensions";
export { OPERATION } from "./CommonProtocolSpecification";
export {
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
    Versions,
    Versions_v1 /* IMPORTED_BIT */,
    Versions_v2 /* IMPORTED_BIT */,
    _decode_SecurityProblem,
    _decode_ServiceProblem,
    _decode_Versions,
    _encode_SecurityProblem,
    _encode_ServiceProblem,
    _encode_Versions,
} from "./DirectoryAbstractService";

/**
 * @summary IDM_PROTOCOL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IDM-PROTOCOL ::= CLASS {
 *   &bind-operation  OPERATION,
 *   &Operations      OPERATION,
 *   &id              OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   BIND-OPERATION   &bind-operation
 *   OPERATIONS       &Operations
 *   ID               &id }
 * ```
 *
 * @interface
 */
export interface IDM_PROTOCOL {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "IDM-PROTOCOL";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof IDM_PROTOCOL]: $.ASN1Decoder<IDM_PROTOCOL[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof IDM_PROTOCOL]: $.ASN1Encoder<IDM_PROTOCOL[_K]>;
        }
    >;
    /**
     * @summary &bind-operation
     */
    "&bind-operation"?: OPERATION;
    /**
     * @summary &Operations
     */
    "&Operations"?: OPERATION[];
    /**
     * @summary &id
     */
    "&id"?: OBJECT_IDENTIFIER;
}

/**
 * @summary IdmBind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdmBind{IDM-PROTOCOL:Protocols} ::= SEQUENCE {
 *   protocolID           IDM-PROTOCOL.&id({Protocols}),
 *   callingAETitle  [0]  GeneralName OPTIONAL,
 *   calledAETitle   [1]  GeneralName OPTIONAL,
 *   argument        [2]  IDM-PROTOCOL.&bind-operation.&ArgumentType
 *                          ({Protocols}{@protocolID}),
 *   ... }
 * ```
 *
 * @class
 */
export class IdmBind {
    constructor(
        /**
         * @summary `protocolID`.
         * @public
         * @readonly
         */
        readonly protocolID: OBJECT_IDENTIFIER,
        /**
         * @summary `callingAETitle`.
         * @public
         * @readonly
         */
        readonly callingAETitle: OPTIONAL<GeneralName>,
        /**
         * @summary `calledAETitle`.
         * @public
         * @readonly
         */
        readonly calledAETitle: OPTIONAL<GeneralName>,
        /**
         * @summary `argument`.
         * @public
         * @readonly
         */
        readonly argument: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IdmBind
     * @description
     *
     * This takes an `object` and converts it to a `IdmBind`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IdmBind`.
     * @returns {IdmBind}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof IdmBind]: IdmBind[_K] }>
    ): IdmBind {
        return new IdmBind(
            _o.protocolID,
            _o.callingAETitle,
            _o.calledAETitle,
            _o.argument,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of IdmBind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IdmBind: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "protocolID",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "callingAETitle",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "calledAETitle",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "argument",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of IdmBind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IdmBind: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of IdmBind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IdmBind: $.ComponentSpec[] = [];
let _cached_decoder_for_IdmBind: $.ASN1Decoder<IdmBind> | null = null;
let _cached_encoder_for_IdmBind: $.ASN1Encoder<IdmBind> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) IdmBind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdmBind} The decoded data structure.
 */
export function _decode_IdmBind(el: _Element) {
    if (!_cached_decoder_for_IdmBind) {
        _cached_decoder_for_IdmBind = function (el: _Element): IdmBind {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let protocolID!: OBJECT_IDENTIFIER;
            let callingAETitle: OPTIONAL<GeneralName>;
            let calledAETitle: OPTIONAL<GeneralName>;
            let argument!: _Element;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                protocolID: (_el: _Element): void => {
                    protocolID = $._decodeObjectIdentifier(_el);
                },
                callingAETitle: (_el: _Element): void => {
                    callingAETitle = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                calledAETitle: (_el: _Element): void => {
                    calledAETitle = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                argument: (_el: _Element): void => {
                    argument = $._decode_explicit<_Element>(() => $._decodeAny)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IdmBind,
                _extension_additions_list_spec_for_IdmBind,
                _root_component_type_list_2_spec_for_IdmBind,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) IdmBind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdmBind, encoded as an ASN.1 Element.
 */
export function _encode_IdmBind(
    value: IdmBind,
    elGetter: $.ASN1Encoder<IdmBind>
) {
    if (!_cached_encoder_for_IdmBind) {
        _cached_encoder_for_IdmBind = function (
            value: IdmBind,
            elGetter: $.ASN1Encoder<IdmBind>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.protocolID,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.callingAETitle === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      $.BER
                                  )(value.callingAETitle, $.BER),
                            /* IF_ABSENT  */ value.calledAETitle === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_GeneralName,
                                      $.BER
                                  )(value.calledAETitle, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => $._encodeAny,
                                $.BER
                            )(value.argument, $.BER),
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
    return _cached_encoder_for_IdmBind(value, elGetter);
}

/**
 * @summary IdmBindResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdmBindResult{IDM-PROTOCOL:Protocols} ::= SEQUENCE {
 *   protocolID              IDM-PROTOCOL.&id({Protocols}),
 *   respondingAETitle  [0]  GeneralName OPTIONAL,
 *   result             [1]  IDM-PROTOCOL.&bind-operation.&ResultType
 *                             ({Protocols}{@protocolID}),
 *   ... }
 * ```
 *
 * @class
 */
export class IdmBindResult {
    constructor(
        /**
         * @summary `protocolID`.
         * @public
         * @readonly
         */
        readonly protocolID: OBJECT_IDENTIFIER,
        /**
         * @summary `respondingAETitle`.
         * @public
         * @readonly
         */
        readonly respondingAETitle: OPTIONAL<GeneralName>,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IdmBindResult
     * @description
     *
     * This takes an `object` and converts it to a `IdmBindResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IdmBindResult`.
     * @returns {IdmBindResult}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof IdmBindResult]: IdmBindResult[_K] }>
    ): IdmBindResult {
        return new IdmBindResult(
            _o.protocolID,
            _o.respondingAETitle,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of IdmBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IdmBindResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "protocolID",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "respondingAETitle",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "result",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of IdmBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IdmBindResult: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of IdmBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IdmBindResult: $.ComponentSpec[] = [];
let _cached_decoder_for_IdmBindResult: $.ASN1Decoder<
    IdmBindResult
> | null = null;
let _cached_encoder_for_IdmBindResult: $.ASN1Encoder<
    IdmBindResult
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) IdmBindResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdmBindResult} The decoded data structure.
 */
export function _decode_IdmBindResult(el: _Element) {
    if (!_cached_decoder_for_IdmBindResult) {
        _cached_decoder_for_IdmBindResult = function (
            el: _Element
        ): IdmBindResult {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let protocolID!: OBJECT_IDENTIFIER;
            let respondingAETitle: OPTIONAL<GeneralName>;
            let result!: _Element;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                protocolID: (_el: _Element): void => {
                    protocolID = $._decodeObjectIdentifier(_el);
                },
                respondingAETitle: (_el: _Element): void => {
                    respondingAETitle = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                result: (_el: _Element): void => {
                    result = $._decode_explicit<_Element>(() => $._decodeAny)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IdmBindResult,
                _extension_additions_list_spec_for_IdmBindResult,
                _root_component_type_list_2_spec_for_IdmBindResult,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) IdmBindResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdmBindResult, encoded as an ASN.1 Element.
 */
export function _encode_IdmBindResult(
    value: IdmBindResult,
    elGetter: $.ASN1Encoder<IdmBindResult>
) {
    if (!_cached_encoder_for_IdmBindResult) {
        _cached_encoder_for_IdmBindResult = function (
            value: IdmBindResult,
            elGetter: $.ASN1Encoder<IdmBindResult>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.protocolID,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.respondingAETitle ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      $.BER
                                  )(value.respondingAETitle, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => $._encodeAny,
                                $.BER
                            )(value.result, $.BER),
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
    return _cached_encoder_for_IdmBindResult(value, elGetter);
}

/**
 * @summary IdmBindError_aETitleError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdmBindError-aETitleError ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_IdmBindError_aETitleError {
    callingAETitleNotAccepted = 0,
    calledAETitleNotRecognized = 1,
}
/**
 * @summary IdmBindError_aETitleError
 */
export type IdmBindError_aETitleError =
    | _enum_for_IdmBindError_aETitleError
    | ENUMERATED;
/**
 * @summary IdmBindError_aETitleError_callingAETitleNotAccepted
 * @constant
 * @type {number}
 */
export const IdmBindError_aETitleError_callingAETitleNotAccepted: IdmBindError_aETitleError = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary IdmBindError_aETitleError_calledAETitleNotRecognized
 * @constant
 * @type {number}
 */
export const IdmBindError_aETitleError_calledAETitleNotRecognized: IdmBindError_aETitleError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_IdmBindError_aETitleError: $.ASN1Decoder<
    IdmBindError_aETitleError
> | null = null;
let _cached_encoder_for_IdmBindError_aETitleError: $.ASN1Encoder<
    IdmBindError_aETitleError
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) IdmBindError_aETitleError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdmBindError_aETitleError} The decoded data structure.
 */
export function _decode_IdmBindError_aETitleError(el: _Element) {
    if (!_cached_decoder_for_IdmBindError_aETitleError) {
        _cached_decoder_for_IdmBindError_aETitleError = $._decodeEnumerated;
    }
    return _cached_decoder_for_IdmBindError_aETitleError(el);
}
/**
 * @summary Encodes a(n) IdmBindError_aETitleError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdmBindError_aETitleError, encoded as an ASN.1 Element.
 */
export function _encode_IdmBindError_aETitleError(
    value: IdmBindError_aETitleError,
    elGetter: $.ASN1Encoder<IdmBindError_aETitleError>
) {
    if (!_cached_encoder_for_IdmBindError_aETitleError) {
        _cached_encoder_for_IdmBindError_aETitleError = $._encodeEnumerated;
    }
    return _cached_encoder_for_IdmBindError_aETitleError(value, elGetter);
}

/**
 * @summary IdmBindError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdmBindError{IDM-PROTOCOL:Protocols} ::= SEQUENCE {
 *   protocolID              IDM-PROTOCOL.&id({Protocols}),
 * --errcode                 IDM-PROTOCOL.&bind-operation.&Errors.&errorCode OPTIONAL
 *   respondingAETitle  [0]  GeneralName OPTIONAL,
 *   aETitleError            ENUMERATED {
 *     callingAETitleNotAccepted  (0),
 *     calledAETitleNotRecognized (1),
 *     ...} OPTIONAL,
 *   error              [1]  IDM-PROTOCOL.&bind-operation.&Errors.&ParameterType
 *                             ({Protocols}{@protocolID}),
 *   ... }
 * ```
 *
 * @class
 */
export class IdmBindError {
    constructor(
        /**
         * @summary `protocolID`.
         * @public
         * @readonly
         */
        readonly protocolID: OBJECT_IDENTIFIER,
        /**
         * @summary `respondingAETitle`.
         * @public
         * @readonly
         */
        readonly respondingAETitle: OPTIONAL<GeneralName>,
        /**
         * @summary `aETitleError`.
         * @public
         * @readonly
         */
        readonly aETitleError: OPTIONAL<IdmBindError_aETitleError>,
        /**
         * @summary `error`.
         * @public
         * @readonly
         */
        readonly error: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IdmBindError
     * @description
     *
     * This takes an `object` and converts it to a `IdmBindError`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IdmBindError`.
     * @returns {IdmBindError}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof IdmBindError]: IdmBindError[_K] }>
    ): IdmBindError {
        return new IdmBindError(
            _o.protocolID,
            _o.respondingAETitle,
            _o.aETitleError,
            _o.error,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `aETitleError`
     * @public
     * @static
     */

    public static _enum_for_aETitleError = _enum_for_IdmBindError_aETitleError;
}
/**
 * @summary The Leading Root Component Types of IdmBindError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IdmBindError: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "protocolID",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "respondingAETitle",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aETitleError",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "error",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of IdmBindError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IdmBindError: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of IdmBindError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IdmBindError: $.ComponentSpec[] = [];
let _cached_decoder_for_IdmBindError: $.ASN1Decoder<IdmBindError> | null = null;
let _cached_encoder_for_IdmBindError: $.ASN1Encoder<IdmBindError> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) IdmBindError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdmBindError} The decoded data structure.
 */
export function _decode_IdmBindError(el: _Element) {
    if (!_cached_decoder_for_IdmBindError) {
        _cached_decoder_for_IdmBindError = function (
            el: _Element
        ): IdmBindError {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let protocolID!: OBJECT_IDENTIFIER;
            let respondingAETitle: OPTIONAL<GeneralName>;
            let aETitleError: OPTIONAL<IdmBindError_aETitleError>;
            let error!: _Element;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                protocolID: (_el: _Element): void => {
                    protocolID = $._decodeObjectIdentifier(_el);
                },
                respondingAETitle: (_el: _Element): void => {
                    respondingAETitle = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                aETitleError: (_el: _Element): void => {
                    aETitleError = _decode_IdmBindError_aETitleError(_el);
                },
                error: (_el: _Element): void => {
                    error = $._decode_explicit<_Element>(() => $._decodeAny)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IdmBindError,
                _extension_additions_list_spec_for_IdmBindError,
                _root_component_type_list_2_spec_for_IdmBindError,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) IdmBindError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdmBindError, encoded as an ASN.1 Element.
 */
export function _encode_IdmBindError(
    value: IdmBindError,
    elGetter: $.ASN1Encoder<IdmBindError>
) {
    if (!_cached_encoder_for_IdmBindError) {
        _cached_encoder_for_IdmBindError = function (
            value: IdmBindError,
            elGetter: $.ASN1Encoder<IdmBindError>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.protocolID,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.respondingAETitle ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      $.BER
                                  )(value.respondingAETitle, $.BER),
                            /* IF_ABSENT  */ value.aETitleError === undefined
                                ? undefined
                                : _encode_IdmBindError_aETitleError(
                                      value.aETitleError,
                                      $.BER
                                  ),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => $._encodeAny,
                                $.BER
                            )(value.error, $.BER),
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
    return _cached_encoder_for_IdmBindError(value, elGetter);
}

/**
 * @summary Request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Request{OPERATION:Operations} ::= SEQUENCE {
 *   invokeID  INTEGER,
 *   opcode    OPERATION.&operationCode({Operations}),
 *   argument  OPERATION.&ArgumentType({Operations}{@opcode}),
 *   ... }
 * ```
 *
 * @class
 */
export class Request {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: INTEGER,
        /**
         * @summary `opcode`.
         * @public
         * @readonly
         */
        readonly opcode: Code,
        /**
         * @summary `argument`.
         * @public
         * @readonly
         */
        readonly argument: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Request
     * @description
     *
     * This takes an `object` and converts it to a `Request`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Request`.
     * @returns {Request}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Request]: Request[_K] }>
    ): Request {
        return new Request(
            _o.invokeID,
            _o.opcode,
            _o.argument,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of Request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Request: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("opcode", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("argument", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of Request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Request: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Request: $.ComponentSpec[] = [];
let _cached_decoder_for_Request: $.ASN1Decoder<Request> | null = null;
let _cached_encoder_for_Request: $.ASN1Encoder<Request> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Request} The decoded data structure.
 */
export function _decode_Request(el: _Element) {
    if (!_cached_decoder_for_Request) {
        _cached_decoder_for_Request = function (el: _Element): Request {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "Request contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "opcode";
            sequence[2].name = "argument";
            let invokeID!: INTEGER;
            let opcode!: Code;
            let argument!: _Element;
            invokeID = $._decodeInteger(sequence[0]);
            opcode = _decode_Code(sequence[1]);
            argument = $._decodeAny(sequence[2]);
            return new Request(invokeID, opcode, argument, sequence.slice(3));
        };
    }
    return _cached_decoder_for_Request(el);
}
/**
 * @summary Encodes a(n) Request into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Request, encoded as an ASN.1 Element.
 */
export function _encode_Request(
    value: Request,
    elGetter: $.ASN1Encoder<Request>
) {
    if (!_cached_encoder_for_Request) {
        _cached_encoder_for_Request = function (
            value: Request,
            elGetter: $.ASN1Encoder<Request>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Code(value.opcode, $.BER),
                            /* REQUIRED   */ $._encodeAny(
                                value.argument,
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
    return _cached_encoder_for_Request(value, elGetter);
}

/**
 * @summary IdmResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdmResult{OPERATION:Operations} ::= SEQUENCE {
 *   invokeID  INTEGER,
 *   opcode    OPERATION.&operationCode({Operations}),
 *   result    OPERATION.&ResultType({Operations}{@opcode}),
 *   ... }
 * ```
 *
 * @class
 */
export class IdmResult {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: INTEGER,
        /**
         * @summary `opcode`.
         * @public
         * @readonly
         */
        readonly opcode: Code,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IdmResult
     * @description
     *
     * This takes an `object` and converts it to a `IdmResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IdmResult`.
     * @returns {IdmResult}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof IdmResult]: IdmResult[_K] }>
    ): IdmResult {
        return new IdmResult(
            _o.invokeID,
            _o.opcode,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of IdmResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IdmResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("opcode", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of IdmResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IdmResult: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of IdmResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IdmResult: $.ComponentSpec[] = [];
let _cached_decoder_for_IdmResult: $.ASN1Decoder<IdmResult> | null = null;
let _cached_encoder_for_IdmResult: $.ASN1Encoder<IdmResult> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) IdmResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdmResult} The decoded data structure.
 */
export function _decode_IdmResult(el: _Element) {
    if (!_cached_decoder_for_IdmResult) {
        _cached_decoder_for_IdmResult = function (el: _Element): IdmResult {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "IdmResult contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "opcode";
            sequence[2].name = "result";
            let invokeID!: INTEGER;
            let opcode!: Code;
            let result!: _Element;
            invokeID = $._decodeInteger(sequence[0]);
            opcode = _decode_Code(sequence[1]);
            result = $._decodeAny(sequence[2]);
            return new IdmResult(invokeID, opcode, result, sequence.slice(3));
        };
    }
    return _cached_decoder_for_IdmResult(el);
}
/**
 * @summary Encodes a(n) IdmResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdmResult, encoded as an ASN.1 Element.
 */
export function _encode_IdmResult(
    value: IdmResult,
    elGetter: $.ASN1Encoder<IdmResult>
) {
    if (!_cached_encoder_for_IdmResult) {
        _cached_encoder_for_IdmResult = function (
            value: IdmResult,
            elGetter: $.ASN1Encoder<IdmResult>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Code(value.opcode, $.BER),
                            /* REQUIRED   */ $._encodeAny(value.result, $.BER),
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
    return _cached_encoder_for_IdmResult(value, elGetter);
}

/**
 * @summary Error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Error{OPERATION:Operations} ::= SEQUENCE {
 *   invokeID  INTEGER,
 *   errcode   OPERATION.&Errors.&errorCode({Operations}),
 *   error     OPERATION.&Errors.&ParameterType({Operations}{@errcode}),
 *   ... }
 * ```
 *
 * @class
 */
export class Error {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: INTEGER,
        /**
         * @summary `errcode`.
         * @public
         * @readonly
         */
        readonly errcode: _Element,
        /**
         * @summary `error`.
         * @public
         * @readonly
         */
        readonly error: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Error
     * @description
     *
     * This takes an `object` and converts it to a `Error`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Error`.
     * @returns {Error}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Error]: Error[_K] }>
    ): Error {
        return new Error(
            _o.invokeID,
            _o.errcode,
            _o.error,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of Error
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Error: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("errcode", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("error", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of Error
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Error: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Error
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Error: $.ComponentSpec[] = [];
let _cached_decoder_for_Error: $.ASN1Decoder<Error> | null = null;
let _cached_encoder_for_Error: $.ASN1Encoder<Error> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Error
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Error} The decoded data structure.
 */
export function _decode_Error(el: _Element) {
    if (!_cached_decoder_for_Error) {
        _cached_decoder_for_Error = function (el: _Element): Error {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "Error contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "errcode";
            sequence[2].name = "error";
            let invokeID!: INTEGER;
            let errcode!: _Element;
            let error!: _Element;
            invokeID = $._decodeInteger(sequence[0]);
            errcode = $._decodeAny(sequence[1]);
            error = $._decodeAny(sequence[2]);
            return new Error(invokeID, errcode, error, sequence.slice(3));
        };
    }
    return _cached_decoder_for_Error(el);
}
/**
 * @summary Encodes a(n) Error into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Error, encoded as an ASN.1 Element.
 */
export function _encode_Error(value: Error, elGetter: $.ASN1Encoder<Error>) {
    if (!_cached_encoder_for_Error) {
        _cached_encoder_for_Error = function (
            value: Error,
            elGetter: $.ASN1Encoder<Error>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeAny(value.errcode, $.BER),
                            /* REQUIRED   */ $._encodeAny(value.error, $.BER),
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
    return _cached_encoder_for_Error(value, elGetter);
}

/**
 * @summary IdmReject_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdmReject-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_IdmReject_reason {
    mistypedPDU = 0,
    duplicateInvokeIDRequest = 1,
    unsupportedOperationRequest = 2,
    unknownOperationRequest = 3,
    mistypedArgumentRequest = 4,
    resourceLimitationRequest = 5,
    unknownInvokeIDResult = 6,
    mistypedResultRequest = 7,
    unknownInvokeIDError = 8,
    unknownError = 9,
    mistypedParameterError = 10,
    unsupportedIdmVersion = 11,
    unsuitableIdmVersion = 12,
    invalidIdmVersion = 13,
}
/**
 * @summary IdmReject_reason
 */
export type IdmReject_reason = _enum_for_IdmReject_reason | ENUMERATED;
/**
 * @summary IdmReject_reason_mistypedPDU
 * @constant
 * @type {number}
 */
export const IdmReject_reason_mistypedPDU: IdmReject_reason = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary IdmReject_reason_duplicateInvokeIDRequest
 * @constant
 * @type {number}
 */
export const IdmReject_reason_duplicateInvokeIDRequest: IdmReject_reason = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary IdmReject_reason_unsupportedOperationRequest
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unsupportedOperationRequest: IdmReject_reason = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary IdmReject_reason_unknownOperationRequest
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownOperationRequest: IdmReject_reason = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary IdmReject_reason_mistypedArgumentRequest
 * @constant
 * @type {number}
 */
export const IdmReject_reason_mistypedArgumentRequest: IdmReject_reason = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary IdmReject_reason_resourceLimitationRequest
 * @constant
 * @type {number}
 */
export const IdmReject_reason_resourceLimitationRequest: IdmReject_reason = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary IdmReject_reason_unknownInvokeIDResult
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownInvokeIDResult: IdmReject_reason = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary IdmReject_reason_mistypedResultRequest
 * @constant
 * @type {number}
 */
export const IdmReject_reason_mistypedResultRequest: IdmReject_reason = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary IdmReject_reason_unknownInvokeIDError
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownInvokeIDError: IdmReject_reason = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary IdmReject_reason_unknownError
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownError: IdmReject_reason = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary IdmReject_reason_mistypedParameterError
 * @constant
 * @type {number}
 */
export const IdmReject_reason_mistypedParameterError: IdmReject_reason = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary IdmReject_reason_unsupportedIdmVersion
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unsupportedIdmVersion: IdmReject_reason = 11; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary IdmReject_reason_unsuitableIdmVersion
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unsuitableIdmVersion: IdmReject_reason = 12; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary IdmReject_reason_invalidIdmVersion
 * @constant
 * @type {number}
 */
export const IdmReject_reason_invalidIdmVersion: IdmReject_reason = 13; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_IdmReject_reason: $.ASN1Decoder<
    IdmReject_reason
> | null = null;
let _cached_encoder_for_IdmReject_reason: $.ASN1Encoder<
    IdmReject_reason
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) IdmReject_reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdmReject_reason} The decoded data structure.
 */
export function _decode_IdmReject_reason(el: _Element) {
    if (!_cached_decoder_for_IdmReject_reason) {
        _cached_decoder_for_IdmReject_reason = $._decodeEnumerated;
    }
    return _cached_decoder_for_IdmReject_reason(el);
}
/**
 * @summary Encodes a(n) IdmReject_reason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdmReject_reason, encoded as an ASN.1 Element.
 */
export function _encode_IdmReject_reason(
    value: IdmReject_reason,
    elGetter: $.ASN1Encoder<IdmReject_reason>
) {
    if (!_cached_encoder_for_IdmReject_reason) {
        _cached_encoder_for_IdmReject_reason = $._encodeEnumerated;
    }
    return _cached_encoder_for_IdmReject_reason(value, elGetter);
}

/**
 * @summary IdmReject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdmReject ::= SEQUENCE {
 *   invokeID  INTEGER,
 *   reason    ENUMERATED {
 *     mistypedPDU                 (0),
 *     duplicateInvokeIDRequest    (1),
 *     unsupportedOperationRequest (2),
 *     unknownOperationRequest     (3),
 *     mistypedArgumentRequest     (4),
 *     resourceLimitationRequest   (5),
 *     unknownInvokeIDResult       (6),
 *     mistypedResultRequest       (7),
 *     unknownInvokeIDError        (8),
 *     unknownError                (9),
 *     mistypedParameterError      (10),
 *     unsupportedIdmVersion       (11),
 *     unsuitableIdmVersion        (12),
 *     invalidIdmVersion           (13),
 *     ...},
 *   ... }
 * ```
 *
 * @class
 */
export class IdmReject {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: INTEGER,
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: IdmReject_reason,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IdmReject
     * @description
     *
     * This takes an `object` and converts it to a `IdmReject`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IdmReject`.
     * @returns {IdmReject}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof IdmReject]: IdmReject[_K] }>
    ): IdmReject {
        return new IdmReject(
            _o.invokeID,
            _o.reason,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `reason`
     * @public
     * @static
     */

    public static _enum_for_reason = _enum_for_IdmReject_reason;
}
/**
 * @summary The Leading Root Component Types of IdmReject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IdmReject: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "reason",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of IdmReject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IdmReject: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of IdmReject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IdmReject: $.ComponentSpec[] = [];
let _cached_decoder_for_IdmReject: $.ASN1Decoder<IdmReject> | null = null;
let _cached_encoder_for_IdmReject: $.ASN1Encoder<IdmReject> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) IdmReject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdmReject} The decoded data structure.
 */
export function _decode_IdmReject(el: _Element) {
    if (!_cached_decoder_for_IdmReject) {
        _cached_decoder_for_IdmReject = function (el: _Element): IdmReject {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "IdmReject contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "reason";
            let invokeID!: INTEGER;
            let reason!: IdmReject_reason;
            invokeID = $._decodeInteger(sequence[0]);
            reason = _decode_IdmReject_reason(sequence[1]);
            return new IdmReject(invokeID, reason, sequence.slice(2));
        };
    }
    return _cached_decoder_for_IdmReject(el);
}
/**
 * @summary Encodes a(n) IdmReject into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdmReject, encoded as an ASN.1 Element.
 */
export function _encode_IdmReject(
    value: IdmReject,
    elGetter: $.ASN1Encoder<IdmReject>
) {
    if (!_cached_encoder_for_IdmReject) {
        _cached_encoder_for_IdmReject = function (
            value: IdmReject,
            elGetter: $.ASN1Encoder<IdmReject>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_IdmReject_reason(
                                value.reason,
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
    return _cached_encoder_for_IdmReject(value, elGetter);
}

export type Unbind<> = NULL; // NullType
let _cached_decoder_for_Unbind: $.ASN1Decoder<Unbind> | null = null;
let _cached_encoder_for_Unbind: $.ASN1Encoder<Unbind> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Unbind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Unbind} The decoded data structure.
 */
export function _decode_Unbind(el: _Element) {
    if (!_cached_decoder_for_Unbind) {
        _cached_decoder_for_Unbind = $._decodeNull;
    }
    return _cached_decoder_for_Unbind(el);
}
/**
 * @summary Encodes a(n) Unbind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Unbind, encoded as an ASN.1 Element.
 */
export function _encode_Unbind(value: Unbind, elGetter: $.ASN1Encoder<Unbind>) {
    if (!_cached_encoder_for_Unbind) {
        _cached_encoder_for_Unbind = $._encodeNull;
    }
    return _cached_encoder_for_Unbind(value, elGetter);
}

/**
 * @summary Abort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Abort ::= ENUMERATED {
 *   mistypedPDU         (0),
 *   unboundRequest      (1),
 *   invalidPDU          (2),
 *   resourceLimitation  (3),
 *   connectionFailed    (4),
 *   invalidProtocol     (5),
 *   reasonNotSpecified  (6),
 *   ...}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_Abort {
    mistypedPDU = 0,
    unboundRequest = 1,
    invalidPDU = 2,
    resourceLimitation = 3,
    connectionFailed = 4,
    invalidProtocol = 5,
    reasonNotSpecified = 6,
}
/**
 * @summary Abort
 */
export type Abort = _enum_for_Abort | ENUMERATED;
/**
 * @summary Abort_mistypedPDU
 * @constant
 * @type {number}
 */
export const Abort_mistypedPDU: Abort = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary Abort_unboundRequest
 * @constant
 * @type {number}
 */
export const Abort_unboundRequest: Abort = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary Abort_invalidPDU
 * @constant
 * @type {number}
 */
export const Abort_invalidPDU: Abort = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary Abort_resourceLimitation
 * @constant
 * @type {number}
 */
export const Abort_resourceLimitation: Abort = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary Abort_connectionFailed
 * @constant
 * @type {number}
 */
export const Abort_connectionFailed: Abort = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary Abort_invalidProtocol
 * @constant
 * @type {number}
 */
export const Abort_invalidProtocol: Abort = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary Abort_reasonNotSpecified
 * @constant
 * @type {number}
 */
export const Abort_reasonNotSpecified: Abort = 6; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_Abort: $.ASN1Decoder<Abort> | null = null;
let _cached_encoder_for_Abort: $.ASN1Encoder<Abort> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Abort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Abort} The decoded data structure.
 */
export function _decode_Abort(el: _Element) {
    if (!_cached_decoder_for_Abort) {
        _cached_decoder_for_Abort = $._decodeEnumerated;
    }
    return _cached_decoder_for_Abort(el);
}
/**
 * @summary Encodes a(n) Abort into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Abort, encoded as an ASN.1 Element.
 */
export function _encode_Abort(value: Abort, elGetter: $.ASN1Encoder<Abort>) {
    if (!_cached_encoder_for_Abort) {
        _cached_encoder_for_Abort = $._encodeEnumerated;
    }
    return _cached_encoder_for_Abort(value, elGetter);
}

export type StartTLS<> = NULL; // NullType
let _cached_decoder_for_StartTLS: $.ASN1Decoder<StartTLS> | null = null;
let _cached_encoder_for_StartTLS: $.ASN1Encoder<StartTLS> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) StartTLS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StartTLS} The decoded data structure.
 */
export function _decode_StartTLS(el: _Element) {
    if (!_cached_decoder_for_StartTLS) {
        _cached_decoder_for_StartTLS = $._decodeNull;
    }
    return _cached_decoder_for_StartTLS(el);
}
/**
 * @summary Encodes a(n) StartTLS into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartTLS, encoded as an ASN.1 Element.
 */
export function _encode_StartTLS(
    value: StartTLS,
    elGetter: $.ASN1Encoder<StartTLS>
) {
    if (!_cached_encoder_for_StartTLS) {
        _cached_encoder_for_StartTLS = $._encodeNull;
    }
    return _cached_encoder_for_StartTLS(value, elGetter);
}

/**
 * @summary TLSResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TLSResponse ::= ENUMERATED {
 *   success         (0),
 *   operationsError (1),
 *   protocolError   (2),
 *   unavailable     (3),
 *   ...}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_TLSResponse {
    success = 0,
    operationsError = 1,
    protocolError = 2,
    unavailable = 3,
}
/**
 * @summary TLSResponse
 */
export type TLSResponse = _enum_for_TLSResponse | ENUMERATED;
/**
 * @summary TLSResponse_success
 * @constant
 * @type {number}
 */
export const TLSResponse_success: TLSResponse = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary TLSResponse_operationsError
 * @constant
 * @type {number}
 */
export const TLSResponse_operationsError: TLSResponse = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary TLSResponse_protocolError
 * @constant
 * @type {number}
 */
export const TLSResponse_protocolError: TLSResponse = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary TLSResponse_unavailable
 * @constant
 * @type {number}
 */
export const TLSResponse_unavailable: TLSResponse = 3; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_TLSResponse: $.ASN1Decoder<TLSResponse> | null = null;
let _cached_encoder_for_TLSResponse: $.ASN1Encoder<TLSResponse> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TLSResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TLSResponse} The decoded data structure.
 */
export function _decode_TLSResponse(el: _Element) {
    if (!_cached_decoder_for_TLSResponse) {
        _cached_decoder_for_TLSResponse = $._decodeEnumerated;
    }
    return _cached_decoder_for_TLSResponse(el);
}
/**
 * @summary Encodes a(n) TLSResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLSResponse, encoded as an ASN.1 Element.
 */
export function _encode_TLSResponse(
    value: TLSResponse,
    elGetter: $.ASN1Encoder<TLSResponse>
) {
    if (!_cached_encoder_for_TLSResponse) {
        _cached_encoder_for_TLSResponse = $._encodeEnumerated;
    }
    return _cached_encoder_for_TLSResponse(value, elGetter);
}

/**
 * @summary IDM_PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IDM-PDU{IDM-PROTOCOL:protocol}  ::=  CHOICE {
 *   bind         [0]  IdmBind{{protocol}},
 *   bindResult   [1]  IdmBindResult{{protocol}},
 *   bindError    [2]  IdmBindError{{protocol}},
 *   request      [3]  Request{{protocol.&Operations}},
 *   result       [4]  IdmResult{{protocol.&Operations}},
 *   error        [5]  Error{{protocol.&Operations}},
 *   reject       [6]  IdmReject,
 *   unbind       [7]  Unbind,
 *   abort        [8]  Abort,
 *   startTLS     [9]  StartTLS,
 *   tLSResponse  [10] TLSResponse,
 *   ... }
 * ```
 */
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
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_IDM_PDU: $.ASN1Decoder<IDM_PDU> | null = null;
let _cached_encoder_for_IDM_PDU: $.ASN1Encoder<IDM_PDU> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) IDM_PDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IDM_PDU} The decoded data structure.
 */
export function _decode_IDM_PDU(el: _Element) {
    if (!_cached_decoder_for_IDM_PDU) {
        _cached_decoder_for_IDM_PDU = $._decode_extensible_choice<IDM_PDU>({
            "CONTEXT 0": [
                "bind",
                $._decode_explicit<IdmBind>(() => _decode_IdmBind),
            ],
            "CONTEXT 1": [
                "bindResult",
                $._decode_explicit<IdmBindResult>(() => _decode_IdmBindResult),
            ],
            "CONTEXT 2": [
                "bindError",
                $._decode_explicit<IdmBindError>(() => _decode_IdmBindError),
            ],
            "CONTEXT 3": [
                "request",
                $._decode_explicit<Request>(() => _decode_Request),
            ],
            "CONTEXT 4": [
                "result",
                $._decode_explicit<IdmResult>(() => _decode_IdmResult),
            ],
            "CONTEXT 5": [
                "error",
                $._decode_explicit<Error>(() => _decode_Error),
            ],
            "CONTEXT 6": [
                "reject",
                $._decode_explicit<IdmReject>(() => _decode_IdmReject),
            ],
            "CONTEXT 7": [
                "unbind",
                $._decode_explicit<Unbind>(() => _decode_Unbind),
            ],
            "CONTEXT 8": [
                "abort",
                $._decode_explicit<Abort>(() => _decode_Abort),
            ],
            "CONTEXT 9": [
                "startTLS",
                $._decode_explicit<StartTLS>(() => _decode_StartTLS),
            ],
            "CONTEXT 10": [
                "tLSResponse",
                $._decode_explicit<TLSResponse>(() => _decode_TLSResponse),
            ],
        });
    }
    return _cached_decoder_for_IDM_PDU(el);
}
/**
 * @summary Encodes a(n) IDM_PDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IDM_PDU, encoded as an ASN.1 Element.
 */
export function _encode_IDM_PDU(
    value: IDM_PDU,
    elGetter: $.ASN1Encoder<IDM_PDU>
) {
    if (!_cached_encoder_for_IDM_PDU) {
        _cached_encoder_for_IDM_PDU = $._encode_choice<IDM_PDU>(
            {
                bind: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_IdmBind,
                    $.BER
                ),
                bindResult: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_IdmBindResult,
                    $.BER
                ),
                bindError: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_IdmBindError,
                    $.BER
                ),
                request: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_Request,
                    $.BER
                ),
                result: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => _encode_IdmResult,
                    $.BER
                ),
                error: $._encode_explicit(
                    _TagClass.context,
                    5,
                    () => _encode_Error,
                    $.BER
                ),
                reject: $._encode_explicit(
                    _TagClass.context,
                    6,
                    () => _encode_IdmReject,
                    $.BER
                ),
                unbind: $._encode_explicit(
                    _TagClass.context,
                    7,
                    () => _encode_Unbind,
                    $.BER
                ),
                abort: $._encode_explicit(
                    _TagClass.context,
                    8,
                    () => _encode_Abort,
                    $.BER
                ),
                startTLS: $._encode_explicit(
                    _TagClass.context,
                    9,
                    () => _encode_StartTLS,
                    $.BER
                ),
                tLSResponse: $._encode_explicit(
                    _TagClass.context,
                    10,
                    () => _encode_TLSResponse,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_IDM_PDU(value, elGetter);
}

/* END_MODULE IDMProtocolSpecification */
/* eslint-enable */
