/**
 * @module Lightweight_Directory_Access_Protocol_V3
 * @summary The ASN.1 module `Lightweight-Directory-Access-Protocol-V3`.
 * @description
 *
 * OID: 1.3.6.1.1.18
 * IRI: undefined
 * EXTENSIBLE: true
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
    INTEGER,
    NULL,
    OCTET_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/**
 * @summary MessageID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageID  ::=  INTEGER(0..maxInt)
 * ```
 */
export type MessageID = INTEGER;
let _cached_decoder_for_MessageID: $.ASN1Decoder<MessageID> | null = null;
let _cached_encoder_for_MessageID: $.ASN1Encoder<MessageID> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MessageID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageID} The decoded data structure.
 */
export function _decode_MessageID(el: _Element) {
    if (!_cached_decoder_for_MessageID) {
        _cached_decoder_for_MessageID = $._decodeInteger;
    }
    return _cached_decoder_for_MessageID(el);
}
/**
 * @summary Encodes a(n) MessageID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageID, encoded as an ASN.1 Element.
 */
export function _encode_MessageID(
    value: MessageID,
    elGetter: $.ASN1Encoder<MessageID>
) {
    if (!_cached_encoder_for_MessageID) {
        _cached_encoder_for_MessageID = $._encodeInteger;
    }
    return _cached_encoder_for_MessageID(value, elGetter);
}

export type LDAPString<> = OCTET_STRING; // OctetStringType
let _cached_decoder_for_LDAPString: $.ASN1Decoder<LDAPString> | null = null;
let _cached_encoder_for_LDAPString: $.ASN1Encoder<LDAPString> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) LDAPString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPString} The decoded data structure.
 */
export function _decode_LDAPString(el: _Element) {
    if (!_cached_decoder_for_LDAPString) {
        _cached_decoder_for_LDAPString = $._decodeOctetString;
    }
    return _cached_decoder_for_LDAPString(el);
}
/**
 * @summary Encodes a(n) LDAPString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPString, encoded as an ASN.1 Element.
 */
export function _encode_LDAPString(
    value: LDAPString,
    elGetter: $.ASN1Encoder<LDAPString>
) {
    if (!_cached_encoder_for_LDAPString) {
        _cached_encoder_for_LDAPString = $._encodeOctetString;
    }
    return _cached_encoder_for_LDAPString(value, elGetter);
}

export type LDAPDN<> = LDAPString; // DefinedType
let _cached_decoder_for_LDAPDN: $.ASN1Decoder<LDAPDN> | null = null;
let _cached_encoder_for_LDAPDN: $.ASN1Encoder<LDAPDN> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) LDAPDN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPDN} The decoded data structure.
 */
export function _decode_LDAPDN(el: _Element) {
    if (!_cached_decoder_for_LDAPDN) {
        _cached_decoder_for_LDAPDN = _decode_LDAPString;
    }
    return _cached_decoder_for_LDAPDN(el);
}
/**
 * @summary Encodes a(n) LDAPDN into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPDN, encoded as an ASN.1 Element.
 */
export function _encode_LDAPDN(value: LDAPDN, elGetter: $.ASN1Encoder<LDAPDN>) {
    if (!_cached_encoder_for_LDAPDN) {
        _cached_encoder_for_LDAPDN = _encode_LDAPString;
    }
    return _cached_encoder_for_LDAPDN(value, elGetter);
}

/**
 * @summary SaslCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SaslCredentials ::= SEQUENCE {
 *   mechanism    LDAPString,
 *   credentials  OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SaslCredentials {
    constructor(
        /**
         * @summary `mechanism`.
         * @public
         * @readonly
         */
        readonly mechanism: LDAPString,
        /**
         * @summary `credentials`.
         * @public
         * @readonly
         */
        readonly credentials: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SaslCredentials
     * @description
     *
     * This takes an `object` and converts it to a `SaslCredentials`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SaslCredentials`.
     * @returns {SaslCredentials}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SaslCredentials]: SaslCredentials[_K] }>
    ): SaslCredentials {
        return new SaslCredentials(
            _o.mechanism,
            _o.credentials,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of SaslCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SaslCredentials: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mechanism",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "credentials",
        true,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SaslCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SaslCredentials: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SaslCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SaslCredentials: $.ComponentSpec[] = [];
let _cached_decoder_for_SaslCredentials: $.ASN1Decoder<
    SaslCredentials
> | null = null;
let _cached_encoder_for_SaslCredentials: $.ASN1Encoder<
    SaslCredentials
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SaslCredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SaslCredentials} The decoded data structure.
 */
export function _decode_SaslCredentials(el: _Element) {
    if (!_cached_decoder_for_SaslCredentials) {
        _cached_decoder_for_SaslCredentials = function (
            el: _Element
        ): SaslCredentials {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let mechanism!: LDAPString;
            let credentials: OPTIONAL<OCTET_STRING>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                mechanism: (_el: _Element): void => {
                    mechanism = _decode_LDAPString(_el);
                },
                credentials: (_el: _Element): void => {
                    credentials = $._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SaslCredentials,
                _extension_additions_list_spec_for_SaslCredentials,
                _root_component_type_list_2_spec_for_SaslCredentials,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SaslCredentials(
                /* SEQUENCE_CONSTRUCTOR_CALL */ mechanism,
                credentials,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SaslCredentials(el);
}
/**
 * @summary Encodes a(n) SaslCredentials into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SaslCredentials, encoded as an ASN.1 Element.
 */
export function _encode_SaslCredentials(
    value: SaslCredentials,
    elGetter: $.ASN1Encoder<SaslCredentials>
) {
    if (!_cached_encoder_for_SaslCredentials) {
        _cached_encoder_for_SaslCredentials = function (
            value: SaslCredentials,
            elGetter: $.ASN1Encoder<SaslCredentials>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_LDAPString(
                                value.mechanism,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.credentials === undefined
                                ? undefined
                                : $._encodeOctetString(
                                      value.credentials,
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
    return _cached_encoder_for_SaslCredentials(value, elGetter);
}

/**
 * @summary AuthenticationChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationChoice  ::=  CHOICE {
 *   simple  [0]  OCTET STRING,
 *   -- 1 and 2 reserved
 *   sasl    [3]  SaslCredentials,
 *   ...
 * }
 * ```
 */
export type AuthenticationChoice =
    | { simple: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { sasl: SaslCredentials } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_AuthenticationChoice: $.ASN1Decoder<
    AuthenticationChoice
> | null = null;
let _cached_encoder_for_AuthenticationChoice: $.ASN1Encoder<
    AuthenticationChoice
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticationChoice} The decoded data structure.
 */
export function _decode_AuthenticationChoice(el: _Element) {
    if (!_cached_decoder_for_AuthenticationChoice) {
        _cached_decoder_for_AuthenticationChoice = $._decode_extensible_choice<
            AuthenticationChoice
        >({
            "CONTEXT 0": [
                "simple",
                $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString),
            ],
            "CONTEXT 3": [
                "sasl",
                $._decode_implicit<SaslCredentials>(
                    () => _decode_SaslCredentials
                ),
            ],
        });
    }
    return _cached_decoder_for_AuthenticationChoice(el);
}
/**
 * @summary Encodes a(n) AuthenticationChoice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationChoice, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticationChoice(
    value: AuthenticationChoice,
    elGetter: $.ASN1Encoder<AuthenticationChoice>
) {
    if (!_cached_encoder_for_AuthenticationChoice) {
        _cached_encoder_for_AuthenticationChoice = $._encode_choice<
            AuthenticationChoice
        >(
            {
                simple: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeOctetString,
                    $.BER
                ),
                sasl: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_SaslCredentials,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AuthenticationChoice(value, elGetter);
}

/**
 * @summary BindRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindRequest ::= [APPLICATION 0]  SEQUENCE {
 *   version         INTEGER(1..127),
 *   name            LDAPDN,
 *   authentication  AuthenticationChoice
 * }
 * ```
 *
 * @class
 */
export class BindRequest {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: INTEGER,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: LDAPDN,
        /**
         * @summary `authentication`.
         * @public
         * @readonly
         */
        readonly authentication: AuthenticationChoice,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a BindRequest
     * @description
     *
     * This takes an `object` and converts it to a `BindRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BindRequest`.
     * @returns {BindRequest}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof BindRequest]: BindRequest[_K] }>
    ): BindRequest {
        return new BindRequest(
            _o.version,
            _o.name,
            _o.authentication,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of BindRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BindRequest: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "authentication",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of BindRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BindRequest: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of BindRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BindRequest: $.ComponentSpec[] = [];
let _cached_decoder_for_BindRequest: $.ASN1Decoder<BindRequest> | null = null;
let _cached_encoder_for_BindRequest: $.ASN1Encoder<BindRequest> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) BindRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BindRequest} The decoded data structure.
 */
export function _decode_BindRequest(el: _Element) {
    if (!_cached_decoder_for_BindRequest) {
        _cached_decoder_for_BindRequest = $._decode_implicit<BindRequest>(
            () =>
                function (el: _Element): BindRequest {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 3) {
                        throw new _ConstructionError(
                            "BindRequest contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "version";
                    sequence[1].name = "name";
                    sequence[2].name = "authentication";
                    let version!: INTEGER;
                    let name!: LDAPDN;
                    let authentication!: AuthenticationChoice;
                    version = $._decodeInteger(sequence[0]);
                    name = _decode_LDAPDN(sequence[1]);
                    authentication = _decode_AuthenticationChoice(sequence[2]);
                    return new BindRequest(
                        version,
                        name,
                        authentication,
                        sequence.slice(3)
                    );
                }
        );
    }
    return _cached_decoder_for_BindRequest(el);
}
/**
 * @summary Encodes a(n) BindRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BindRequest, encoded as an ASN.1 Element.
 */
export function _encode_BindRequest(
    value: BindRequest,
    elGetter: $.ASN1Encoder<BindRequest>
) {
    if (!_cached_encoder_for_BindRequest) {
        _cached_encoder_for_BindRequest = $._encode_implicit(
            _TagClass.application,
            0,
            () =>
                function (
                    value: BindRequest,
                    elGetter: $.ASN1Encoder<BindRequest>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ $._encodeInteger(
                                        value.version,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_LDAPDN(
                                        value.name,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_AuthenticationChoice(
                                        value.authentication,
                                        $.BER
                                    ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_BindRequest(value, elGetter);
}

/**
 * @summary LDAPResult_resultCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LDAPResult-resultCode ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_LDAPResult_resultCode {
    success = 0,
    operationsError = 1,
    protocolError = 2,
    timeLimitExceeded = 3,
    sizeLimitExceeded = 4,
    compareFalse = 5,
    compareTrue = 6,
    authMethodNotSupported = 7,
    strongerAuthRequired = 8,
    referral = 10,
    adminLimitExceeded = 11,
    unavailableCriticalExtension = 12,
    confidentialityRequired = 13,
    saslBindInProgress = 14,
    noSuchAttribute = 16,
    undefinedAttributeType = 17,
    inappropriateMatching = 18,
    constraintViolation = 19,
    attributeOrValueExists = 20,
    invalidAttributeSyntax = 21,
    noSuchObject = 32,
    aliasProblem = 33,
    invalidDNSyntax = 34,
    aliasDereferencingProblem = 36,
    inappropriateAuthentication = 48,
    invalidCredentials = 49,
    insufficientAccessRights = 50,
    busy = 51,
    unavailable = 52,
    unwillingToPerform = 53,
    loopDetect = 54,
    namingViolation = 64,
    objectClassViolation = 65,
    notAllowedOnNonLeaf = 66,
    notAllowedOnRDN = 67,
    entryAlreadyExists = 68,
    objectClassModsProhibited = 69,
    affectsMultipleDSAs = 71,
    other = 80,
}
/**
 * @summary LDAPResult_resultCode
 */
export type LDAPResult_resultCode =
    | _enum_for_LDAPResult_resultCode
    | ENUMERATED;
/**
 * @summary LDAPResult_resultCode_success
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_success: LDAPResult_resultCode = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_operationsError
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_operationsError: LDAPResult_resultCode = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_protocolError
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_protocolError: LDAPResult_resultCode = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_timeLimitExceeded
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_timeLimitExceeded: LDAPResult_resultCode = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_sizeLimitExceeded
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_sizeLimitExceeded: LDAPResult_resultCode = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_compareFalse
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_compareFalse: LDAPResult_resultCode = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_compareTrue
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_compareTrue: LDAPResult_resultCode = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_authMethodNotSupported
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_authMethodNotSupported: LDAPResult_resultCode = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_strongerAuthRequired
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_strongerAuthRequired: LDAPResult_resultCode = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_referral
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_referral: LDAPResult_resultCode = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_adminLimitExceeded
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_adminLimitExceeded: LDAPResult_resultCode = 11; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_unavailableCriticalExtension
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_unavailableCriticalExtension: LDAPResult_resultCode = 12; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_confidentialityRequired
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_confidentialityRequired: LDAPResult_resultCode = 13; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_saslBindInProgress
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_saslBindInProgress: LDAPResult_resultCode = 14; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_noSuchAttribute
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_noSuchAttribute: LDAPResult_resultCode = 16; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_undefinedAttributeType
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_undefinedAttributeType: LDAPResult_resultCode = 17; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_inappropriateMatching
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_inappropriateMatching: LDAPResult_resultCode = 18; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_constraintViolation
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_constraintViolation: LDAPResult_resultCode = 19; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_attributeOrValueExists
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_attributeOrValueExists: LDAPResult_resultCode = 20; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_invalidAttributeSyntax
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_invalidAttributeSyntax: LDAPResult_resultCode = 21; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_noSuchObject
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_noSuchObject: LDAPResult_resultCode = 32; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_aliasProblem
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_aliasProblem: LDAPResult_resultCode = 33; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_invalidDNSyntax
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_invalidDNSyntax: LDAPResult_resultCode = 34; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_aliasDereferencingProblem
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_aliasDereferencingProblem: LDAPResult_resultCode = 36; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_inappropriateAuthentication
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_inappropriateAuthentication: LDAPResult_resultCode = 48; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_invalidCredentials
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_invalidCredentials: LDAPResult_resultCode = 49; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_insufficientAccessRights
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_insufficientAccessRights: LDAPResult_resultCode = 50; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_busy
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_busy: LDAPResult_resultCode = 51; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_unavailable
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_unavailable: LDAPResult_resultCode = 52; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_unwillingToPerform
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_unwillingToPerform: LDAPResult_resultCode = 53; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_loopDetect
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_loopDetect: LDAPResult_resultCode = 54; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_namingViolation
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_namingViolation: LDAPResult_resultCode = 64; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_objectClassViolation
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_objectClassViolation: LDAPResult_resultCode = 65; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_notAllowedOnNonLeaf
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_notAllowedOnNonLeaf: LDAPResult_resultCode = 66; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_notAllowedOnRDN
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_notAllowedOnRDN: LDAPResult_resultCode = 67; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_entryAlreadyExists
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_entryAlreadyExists: LDAPResult_resultCode = 68; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_objectClassModsProhibited
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_objectClassModsProhibited: LDAPResult_resultCode = 69; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_affectsMultipleDSAs
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_affectsMultipleDSAs: LDAPResult_resultCode = 71; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary LDAPResult_resultCode_other
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_other: LDAPResult_resultCode = 80; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_LDAPResult_resultCode: $.ASN1Decoder<
    LDAPResult_resultCode
> | null = null;
let _cached_encoder_for_LDAPResult_resultCode: $.ASN1Encoder<
    LDAPResult_resultCode
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) LDAPResult_resultCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPResult_resultCode} The decoded data structure.
 */
export function _decode_LDAPResult_resultCode(el: _Element) {
    if (!_cached_decoder_for_LDAPResult_resultCode) {
        _cached_decoder_for_LDAPResult_resultCode = $._decodeEnumerated;
    }
    return _cached_decoder_for_LDAPResult_resultCode(el);
}
/**
 * @summary Encodes a(n) LDAPResult_resultCode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPResult_resultCode, encoded as an ASN.1 Element.
 */
export function _encode_LDAPResult_resultCode(
    value: LDAPResult_resultCode,
    elGetter: $.ASN1Encoder<LDAPResult_resultCode>
) {
    if (!_cached_encoder_for_LDAPResult_resultCode) {
        _cached_encoder_for_LDAPResult_resultCode = $._encodeEnumerated;
    }
    return _cached_encoder_for_LDAPResult_resultCode(value, elGetter);
}

export type URI<> = LDAPString; // DefinedType
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
        _cached_decoder_for_URI = _decode_LDAPString;
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
        _cached_encoder_for_URI = _encode_LDAPString;
    }
    return _cached_encoder_for_URI(value, elGetter);
}

export type Referral<> = URI[]; // SequenceOfType
let _cached_decoder_for_Referral: $.ASN1Decoder<Referral> | null = null;
let _cached_encoder_for_Referral: $.ASN1Encoder<Referral> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Referral
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Referral} The decoded data structure.
 */
export function _decode_Referral(el: _Element) {
    if (!_cached_decoder_for_Referral) {
        _cached_decoder_for_Referral = $._decodeSequenceOf<URI>(
            () => _decode_URI
        );
    }
    return _cached_decoder_for_Referral(el);
}
/**
 * @summary Encodes a(n) Referral into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Referral, encoded as an ASN.1 Element.
 */
export function _encode_Referral(
    value: Referral,
    elGetter: $.ASN1Encoder<Referral>
) {
    if (!_cached_encoder_for_Referral) {
        _cached_encoder_for_Referral = $._encodeSequenceOf<URI>(
            () => _encode_URI,
            $.BER
        );
    }
    return _cached_encoder_for_Referral(value, elGetter);
}

/**
 * @summary LDAPResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LDAPResult ::= SEQUENCE {
 *   resultCode
 *     ENUMERATED {success(0), operationsError(1), protocolError(2),
 *                 timeLimitExceeded(3), sizeLimitExceeded(4), compareFalse(5),
 *                 compareTrue(6), authMethodNotSupported(7),
 *                 strongerAuthRequired(8),
 *                 -- 9 reserved
 *                 referral(10), adminLimitExceeded(11),
 *                 unavailableCriticalExtension(12), confidentialityRequired(13),
 *                 saslBindInProgress(14), noSuchAttribute(16),
 *                 undefinedAttributeType(17), inappropriateMatching(18),
 *                 constraintViolation(19), attributeOrValueExists(20),
 *                 invalidAttributeSyntax(21),
 *                 -- 22-31 unused
 *                 noSuchObject(32), aliasProblem(33),
 *                 invalidDNSyntax(34),
 *                 -- 35 reserved for undefined isLeaf
 *                 aliasDereferencingProblem(36),
 *                 -- 37-47 unused
 *                 inappropriateAuthentication(48), invalidCredentials(49),
 *                 insufficientAccessRights(50), busy(51), unavailable(52),
 *                 unwillingToPerform(53),
 *                 loopDetect(54),
 *                 -- 55-63 unused
 *                 namingViolation(64), objectClassViolation(65),
 *                 notAllowedOnNonLeaf(66), notAllowedOnRDN(67),
 *                 entryAlreadyExists(68),
 *                 objectClassModsProhibited(69),
 *                 -- 70 reserved for CLDAP
 *                 affectsMultipleDSAs(71),
 *                 -- 72-79 unused
 *                 other(80), ...
 *                 },
 *   matchedDN          LDAPDN,
 *   diagnosticMessage  LDAPString,
 *   referral           [3]  Referral OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class LDAPResult {
    constructor(
        /**
         * @summary `resultCode`.
         * @public
         * @readonly
         */
        readonly resultCode: LDAPResult_resultCode,
        /**
         * @summary `matchedDN`.
         * @public
         * @readonly
         */
        readonly matchedDN: LDAPDN,
        /**
         * @summary `diagnosticMessage`.
         * @public
         * @readonly
         */
        readonly diagnosticMessage: LDAPString,
        /**
         * @summary `referral`.
         * @public
         * @readonly
         */
        readonly referral: OPTIONAL<Referral>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LDAPResult
     * @description
     *
     * This takes an `object` and converts it to a `LDAPResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LDAPResult`.
     * @returns {LDAPResult}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof LDAPResult]: LDAPResult[_K] }>
    ): LDAPResult {
        return new LDAPResult(
            _o.resultCode,
            _o.matchedDN,
            _o.diagnosticMessage,
            _o.referral,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `resultCode`
     * @public
     * @static
     */

    public static _enum_for_resultCode = _enum_for_LDAPResult_resultCode;
}
/**
 * @summary The Leading Root Component Types of LDAPResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LDAPResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "resultCode",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "matchedDN",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "diagnosticMessage",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "referral",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of LDAPResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LDAPResult: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of LDAPResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LDAPResult: $.ComponentSpec[] = [];
let _cached_decoder_for_LDAPResult: $.ASN1Decoder<LDAPResult> | null = null;
let _cached_encoder_for_LDAPResult: $.ASN1Encoder<LDAPResult> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) LDAPResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPResult} The decoded data structure.
 */
export function _decode_LDAPResult(el: _Element) {
    if (!_cached_decoder_for_LDAPResult) {
        _cached_decoder_for_LDAPResult = function (el: _Element): LDAPResult {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let resultCode!: LDAPResult_resultCode;
            let matchedDN!: LDAPDN;
            let diagnosticMessage!: LDAPString;
            let referral: OPTIONAL<Referral>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                resultCode: (_el: _Element): void => {
                    resultCode = _decode_LDAPResult_resultCode(_el);
                },
                matchedDN: (_el: _Element): void => {
                    matchedDN = _decode_LDAPDN(_el);
                },
                diagnosticMessage: (_el: _Element): void => {
                    diagnosticMessage = _decode_LDAPString(_el);
                },
                referral: (_el: _Element): void => {
                    referral = $._decode_implicit<Referral>(
                        () => _decode_Referral
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_LDAPResult,
                _extension_additions_list_spec_for_LDAPResult,
                _root_component_type_list_2_spec_for_LDAPResult,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new LDAPResult(
                /* SEQUENCE_CONSTRUCTOR_CALL */ resultCode,
                matchedDN,
                diagnosticMessage,
                referral,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_LDAPResult(el);
}
/**
 * @summary Encodes a(n) LDAPResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPResult, encoded as an ASN.1 Element.
 */
export function _encode_LDAPResult(
    value: LDAPResult,
    elGetter: $.ASN1Encoder<LDAPResult>
) {
    if (!_cached_encoder_for_LDAPResult) {
        _cached_encoder_for_LDAPResult = function (
            value: LDAPResult,
            elGetter: $.ASN1Encoder<LDAPResult>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_LDAPResult_resultCode(
                                value.resultCode,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_LDAPDN(
                                value.matchedDN,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_LDAPString(
                                value.diagnosticMessage,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.referral === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_Referral,
                                      $.BER
                                  )(value.referral, $.BER),
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
    return _cached_encoder_for_LDAPResult(value, elGetter);
}

/**
 * @summary BindResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindResponse ::= [APPLICATION 1]  SEQUENCE {
 *   COMPONENTS OF LDAPResult,
 *   serverSaslCreds  [7]  OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class BindResponse {
    constructor(
        /**
         * @summary `resultCode`.
         * @public
         * @readonly
         */
        readonly resultCode: LDAPResult_resultCode /* REPLICATED_COMPONENT */,
        /**
         * @summary `matchedDN`.
         * @public
         * @readonly
         */
        readonly matchedDN: LDAPDN /* REPLICATED_COMPONENT */,
        /**
         * @summary `diagnosticMessage`.
         * @public
         * @readonly
         */
        readonly diagnosticMessage: LDAPString /* REPLICATED_COMPONENT */,
        /**
         * @summary `referral`.
         * @public
         * @readonly
         */
        readonly referral: OPTIONAL<Referral> /* REPLICATED_COMPONENT */,
        /**
         * @summary `serverSaslCreds`.
         * @public
         * @readonly
         */
        readonly serverSaslCreds: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a BindResponse
     * @description
     *
     * This takes an `object` and converts it to a `BindResponse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BindResponse`.
     * @returns {BindResponse}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof BindResponse]: BindResponse[_K] }>
    ): BindResponse {
        return new BindResponse(
            _o.resultCode,
            _o.matchedDN,
            _o.diagnosticMessage,
            _o.referral,
            _o.serverSaslCreds,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `resultCode`
     * @public
     * @static
     */

    public static _enum_for_resultCode = _enum_for_LDAPResult_resultCode;
}
/**
 * @summary The Leading Root Component Types of BindResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BindResponse: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "resultCode",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "matchedDN",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "diagnosticMessage",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "referral",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "serverSaslCreds",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of BindResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BindResponse: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of BindResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BindResponse: $.ComponentSpec[] = [];
let _cached_decoder_for_BindResponse: $.ASN1Decoder<BindResponse> | null = null;
let _cached_encoder_for_BindResponse: $.ASN1Encoder<BindResponse> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) BindResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BindResponse} The decoded data structure.
 */
export function _decode_BindResponse(el: _Element) {
    if (!_cached_decoder_for_BindResponse) {
        _cached_decoder_for_BindResponse = $._decode_implicit<BindResponse>(
            () =>
                function (el: _Element): BindResponse {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let resultCode!: LDAPResult_resultCode;
                    let matchedDN!: LDAPDN;
                    let diagnosticMessage!: LDAPString;
                    let referral: OPTIONAL<Referral>;
                    let serverSaslCreds: OPTIONAL<OCTET_STRING>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        resultCode: (_el: _Element): void => {
                            resultCode = _decode_LDAPResult_resultCode(_el);
                        },
                        matchedDN: (_el: _Element): void => {
                            matchedDN = _decode_LDAPDN(_el);
                        },
                        diagnosticMessage: (_el: _Element): void => {
                            diagnosticMessage = _decode_LDAPString(_el);
                        },
                        referral: (_el: _Element): void => {
                            referral = $._decode_implicit<Referral>(
                                () => _decode_Referral
                            )(_el);
                        },
                        serverSaslCreds: (_el: _Element): void => {
                            serverSaslCreds = $._decode_implicit<OCTET_STRING>(
                                () => $._decodeOctetString
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_BindResponse,
                        _extension_additions_list_spec_for_BindResponse,
                        _root_component_type_list_2_spec_for_BindResponse,
                        (ext: _Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new BindResponse(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ resultCode,
                        matchedDN,
                        diagnosticMessage,
                        referral,
                        serverSaslCreds,
                        _unrecognizedExtensionsList
                    );
                }
        );
    }
    return _cached_decoder_for_BindResponse(el);
}
/**
 * @summary Encodes a(n) BindResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BindResponse, encoded as an ASN.1 Element.
 */
export function _encode_BindResponse(
    value: BindResponse,
    elGetter: $.ASN1Encoder<BindResponse>
) {
    if (!_cached_encoder_for_BindResponse) {
        _cached_encoder_for_BindResponse = $._encode_implicit(
            _TagClass.application,
            1,
            () =>
                function (
                    value: BindResponse,
                    elGetter: $.ASN1Encoder<BindResponse>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_LDAPResult_resultCode(
                                        value.resultCode,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_LDAPDN(
                                        value.matchedDN,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_LDAPString(
                                        value.diagnosticMessage,
                                        $.BER
                                    ),
                                    /* IF_ABSENT  */ value.referral ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              3,
                                              () => _encode_Referral,
                                              $.BER
                                          )(value.referral, $.BER),
                                    /* IF_ABSENT  */ value.serverSaslCreds ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              7,
                                              () => $._encodeOctetString,
                                              $.BER
                                          )(value.serverSaslCreds, $.BER),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_BindResponse(value, elGetter);
}

export type UnbindRequest<> = NULL; // NullType
let _cached_decoder_for_UnbindRequest: $.ASN1Decoder<
    UnbindRequest
> | null = null;
let _cached_encoder_for_UnbindRequest: $.ASN1Encoder<
    UnbindRequest
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UnbindRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnbindRequest} The decoded data structure.
 */
export function _decode_UnbindRequest(el: _Element) {
    if (!_cached_decoder_for_UnbindRequest) {
        _cached_decoder_for_UnbindRequest = $._decode_implicit<UnbindRequest>(
            () => $._decodeNull
        );
    }
    return _cached_decoder_for_UnbindRequest(el);
}
/**
 * @summary Encodes a(n) UnbindRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnbindRequest, encoded as an ASN.1 Element.
 */
export function _encode_UnbindRequest(
    value: UnbindRequest,
    elGetter: $.ASN1Encoder<UnbindRequest>
) {
    if (!_cached_encoder_for_UnbindRequest) {
        _cached_encoder_for_UnbindRequest = $._encode_implicit(
            _TagClass.application,
            2,
            () => $._encodeNull,
            $.BER
        );
    }
    return _cached_encoder_for_UnbindRequest(value, elGetter);
}

/**
 * @summary SearchRequest_scope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRequest-scope ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_SearchRequest_scope {
    baseObject = 0,
    singleLevel = 1,
    wholeSubtree = 2,
}
/**
 * @summary SearchRequest_scope
 */
export type SearchRequest_scope = _enum_for_SearchRequest_scope | ENUMERATED;
/**
 * @summary SearchRequest_scope_baseObject
 * @constant
 * @type {number}
 */
export const SearchRequest_scope_baseObject: SearchRequest_scope = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary SearchRequest_scope_singleLevel
 * @constant
 * @type {number}
 */
export const SearchRequest_scope_singleLevel: SearchRequest_scope = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary SearchRequest_scope_wholeSubtree
 * @constant
 * @type {number}
 */
export const SearchRequest_scope_wholeSubtree: SearchRequest_scope = 2; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_SearchRequest_scope: $.ASN1Decoder<
    SearchRequest_scope
> | null = null;
let _cached_encoder_for_SearchRequest_scope: $.ASN1Encoder<
    SearchRequest_scope
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SearchRequest_scope
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchRequest_scope} The decoded data structure.
 */
export function _decode_SearchRequest_scope(el: _Element) {
    if (!_cached_decoder_for_SearchRequest_scope) {
        _cached_decoder_for_SearchRequest_scope = $._decodeEnumerated;
    }
    return _cached_decoder_for_SearchRequest_scope(el);
}
/**
 * @summary Encodes a(n) SearchRequest_scope into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRequest_scope, encoded as an ASN.1 Element.
 */
export function _encode_SearchRequest_scope(
    value: SearchRequest_scope,
    elGetter: $.ASN1Encoder<SearchRequest_scope>
) {
    if (!_cached_encoder_for_SearchRequest_scope) {
        _cached_encoder_for_SearchRequest_scope = $._encodeEnumerated;
    }
    return _cached_encoder_for_SearchRequest_scope(value, elGetter);
}

/**
 * @summary SearchRequest_derefAliases
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRequest-derefAliases ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_SearchRequest_derefAliases {
    neverDerefAliases = 0,
    derefInSearching = 1,
    derefFindingBaseObj = 2,
    derefAlways = 3,
}
/**
 * @summary SearchRequest_derefAliases
 */
export type SearchRequest_derefAliases =
    | _enum_for_SearchRequest_derefAliases
    | ENUMERATED;
/**
 * @summary SearchRequest_derefAliases_neverDerefAliases
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_neverDerefAliases: SearchRequest_derefAliases = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary SearchRequest_derefAliases_derefInSearching
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_derefInSearching: SearchRequest_derefAliases = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary SearchRequest_derefAliases_derefFindingBaseObj
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_derefFindingBaseObj: SearchRequest_derefAliases = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary SearchRequest_derefAliases_derefAlways
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_derefAlways: SearchRequest_derefAliases = 3; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_SearchRequest_derefAliases: $.ASN1Decoder<
    SearchRequest_derefAliases
> | null = null;
let _cached_encoder_for_SearchRequest_derefAliases: $.ASN1Encoder<
    SearchRequest_derefAliases
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SearchRequest_derefAliases
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchRequest_derefAliases} The decoded data structure.
 */
export function _decode_SearchRequest_derefAliases(el: _Element) {
    if (!_cached_decoder_for_SearchRequest_derefAliases) {
        _cached_decoder_for_SearchRequest_derefAliases = $._decodeEnumerated;
    }
    return _cached_decoder_for_SearchRequest_derefAliases(el);
}
/**
 * @summary Encodes a(n) SearchRequest_derefAliases into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRequest_derefAliases, encoded as an ASN.1 Element.
 */
export function _encode_SearchRequest_derefAliases(
    value: SearchRequest_derefAliases,
    elGetter: $.ASN1Encoder<SearchRequest_derefAliases>
) {
    if (!_cached_encoder_for_SearchRequest_derefAliases) {
        _cached_encoder_for_SearchRequest_derefAliases = $._encodeEnumerated;
    }
    return _cached_encoder_for_SearchRequest_derefAliases(value, elGetter);
}

export type AttributeDescription<> = LDAPString; // DefinedType
let _cached_decoder_for_AttributeDescription: $.ASN1Decoder<
    AttributeDescription
> | null = null;
let _cached_encoder_for_AttributeDescription: $.ASN1Encoder<
    AttributeDescription
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeDescription} The decoded data structure.
 */
export function _decode_AttributeDescription(el: _Element) {
    if (!_cached_decoder_for_AttributeDescription) {
        _cached_decoder_for_AttributeDescription = _decode_LDAPString;
    }
    return _cached_decoder_for_AttributeDescription(el);
}
/**
 * @summary Encodes a(n) AttributeDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeDescription, encoded as an ASN.1 Element.
 */
export function _encode_AttributeDescription(
    value: AttributeDescription,
    elGetter: $.ASN1Encoder<AttributeDescription>
) {
    if (!_cached_encoder_for_AttributeDescription) {
        _cached_encoder_for_AttributeDescription = _encode_LDAPString;
    }
    return _cached_encoder_for_AttributeDescription(value, elGetter);
}

export type AssertionValue<> = OCTET_STRING; // OctetStringType
let _cached_decoder_for_AssertionValue: $.ASN1Decoder<
    AssertionValue
> | null = null;
let _cached_encoder_for_AssertionValue: $.ASN1Encoder<
    AssertionValue
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AssertionValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssertionValue} The decoded data structure.
 */
export function _decode_AssertionValue(el: _Element) {
    if (!_cached_decoder_for_AssertionValue) {
        _cached_decoder_for_AssertionValue = $._decodeOctetString;
    }
    return _cached_decoder_for_AssertionValue(el);
}
/**
 * @summary Encodes a(n) AssertionValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssertionValue, encoded as an ASN.1 Element.
 */
export function _encode_AssertionValue(
    value: AssertionValue,
    elGetter: $.ASN1Encoder<AssertionValue>
) {
    if (!_cached_encoder_for_AssertionValue) {
        _cached_encoder_for_AssertionValue = $._encodeOctetString;
    }
    return _cached_encoder_for_AssertionValue(value, elGetter);
}

/**
 * @summary AttributeValueAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeValueAssertion ::= SEQUENCE {
 *   attributeDesc   AttributeDescription,
 *   assertionValue  AssertionValue
 * }
 * ```
 *
 * @class
 */
export class AttributeValueAssertion {
    constructor(
        /**
         * @summary `attributeDesc`.
         * @public
         * @readonly
         */
        readonly attributeDesc: AttributeDescription,
        /**
         * @summary `assertionValue`.
         * @public
         * @readonly
         */
        readonly assertionValue: AssertionValue,
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
            _o.attributeDesc,
            _o.assertionValue,
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
        "attributeDesc",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "assertionValue",
        false,
        $.hasTag(_TagClass.universal, 4),
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
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AttributeValueAssertion contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "attributeDesc";
            sequence[1].name = "assertionValue";
            let attributeDesc!: AttributeDescription;
            let assertionValue!: AssertionValue;
            attributeDesc = _decode_AttributeDescription(sequence[0]);
            assertionValue = _decode_AssertionValue(sequence[1]);
            return new AttributeValueAssertion(
                attributeDesc,
                assertionValue,
                sequence.slice(2)
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
                            /* REQUIRED   */ _encode_AttributeDescription(
                                value.attributeDesc,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AssertionValue(
                                value.assertionValue,
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
 * @summary SubstringFilter_substrings_substring
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringFilter-substrings-substring ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type SubstringFilter_substrings_substring =
    | { initial: AssertionValue } /* CHOICE_ALT_ROOT */
    | { any_: AssertionValue } /* CHOICE_ALT_ROOT */
    | { final: AssertionValue } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_SubstringFilter_substrings_substring: $.ASN1Decoder<
    SubstringFilter_substrings_substring
> | null = null;
let _cached_encoder_for_SubstringFilter_substrings_substring: $.ASN1Encoder<
    SubstringFilter_substrings_substring
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SubstringFilter_substrings_substring
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubstringFilter_substrings_substring} The decoded data structure.
 */
export function _decode_SubstringFilter_substrings_substring(el: _Element) {
    if (!_cached_decoder_for_SubstringFilter_substrings_substring) {
        _cached_decoder_for_SubstringFilter_substrings_substring = $._decode_extensible_choice<
            SubstringFilter_substrings_substring
        >({
            "CONTEXT 0": [
                "initial",
                $._decode_implicit<AssertionValue>(
                    () => _decode_AssertionValue
                ),
            ],
            "CONTEXT 1": [
                "any_",
                $._decode_implicit<AssertionValue>(
                    () => _decode_AssertionValue
                ),
            ],
            "CONTEXT 2": [
                "final",
                $._decode_implicit<AssertionValue>(
                    () => _decode_AssertionValue
                ),
            ],
        });
    }
    return _cached_decoder_for_SubstringFilter_substrings_substring(el);
}
/**
 * @summary Encodes a(n) SubstringFilter_substrings_substring into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubstringFilter_substrings_substring, encoded as an ASN.1 Element.
 */
export function _encode_SubstringFilter_substrings_substring(
    value: SubstringFilter_substrings_substring,
    elGetter: $.ASN1Encoder<SubstringFilter_substrings_substring>
) {
    if (!_cached_encoder_for_SubstringFilter_substrings_substring) {
        _cached_encoder_for_SubstringFilter_substrings_substring = $._encode_choice<
            SubstringFilter_substrings_substring
        >(
            {
                initial: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AssertionValue,
                    $.BER
                ),
                any_: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AssertionValue,
                    $.BER
                ),
                final: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_AssertionValue,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SubstringFilter_substrings_substring(
        value,
        elGetter
    );
}

/**
 * @summary SubstringFilter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringFilter ::= SEQUENCE {
 *   type        AttributeDescription,
 *   substrings
 *     SEQUENCE SIZE (1..MAX) OF substring
 *       CHOICE {initial  [0]  AssertionValue, -- can occur at most once--
 *               any      [1]  AssertionValue,
 *               final    [2]  AssertionValue} -- can occur at most once
 * }
 * ```
 *
 * @class
 */
export class SubstringFilter {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AttributeDescription,
        /**
         * @summary `substrings`.
         * @public
         * @readonly
         */
        readonly substrings: SubstringFilter_substrings_substring[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SubstringFilter
     * @description
     *
     * This takes an `object` and converts it to a `SubstringFilter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubstringFilter`.
     * @returns {SubstringFilter}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SubstringFilter]: SubstringFilter[_K] }>
    ): SubstringFilter {
        return new SubstringFilter(
            _o.type_,
            _o.substrings,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of SubstringFilter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubstringFilter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "substrings",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SubstringFilter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubstringFilter: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SubstringFilter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubstringFilter: $.ComponentSpec[] = [];
let _cached_decoder_for_SubstringFilter: $.ASN1Decoder<
    SubstringFilter
> | null = null;
let _cached_encoder_for_SubstringFilter: $.ASN1Encoder<
    SubstringFilter
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SubstringFilter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubstringFilter} The decoded data structure.
 */
export function _decode_SubstringFilter(el: _Element) {
    if (!_cached_decoder_for_SubstringFilter) {
        _cached_decoder_for_SubstringFilter = function (
            el: _Element
        ): SubstringFilter {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SubstringFilter contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "substrings";
            let type_!: AttributeDescription;
            let substrings!: SubstringFilter_substrings_substring[];
            type_ = _decode_AttributeDescription(sequence[0]);
            substrings = $._decodeSequenceOf<
                SubstringFilter_substrings_substring
            >(() => _decode_SubstringFilter_substrings_substring)(sequence[1]);
            return new SubstringFilter(type_, substrings, sequence.slice(2));
        };
    }
    return _cached_decoder_for_SubstringFilter(el);
}
/**
 * @summary Encodes a(n) SubstringFilter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubstringFilter, encoded as an ASN.1 Element.
 */
export function _encode_SubstringFilter(
    value: SubstringFilter,
    elGetter: $.ASN1Encoder<SubstringFilter>
) {
    if (!_cached_encoder_for_SubstringFilter) {
        _cached_encoder_for_SubstringFilter = function (
            value: SubstringFilter,
            elGetter: $.ASN1Encoder<SubstringFilter>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeDescription(
                                value.type_,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSequenceOf<
                                SubstringFilter_substrings_substring
                            >(
                                () =>
                                    _encode_SubstringFilter_substrings_substring,
                                $.BER
                            )(value.substrings, $.BER),
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
    return _cached_encoder_for_SubstringFilter(value, elGetter);
}

export type MatchingRuleId<> = LDAPString; // DefinedType
let _cached_decoder_for_MatchingRuleId: $.ASN1Decoder<
    MatchingRuleId
> | null = null;
let _cached_encoder_for_MatchingRuleId: $.ASN1Encoder<
    MatchingRuleId
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MatchingRuleId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MatchingRuleId} The decoded data structure.
 */
export function _decode_MatchingRuleId(el: _Element) {
    if (!_cached_decoder_for_MatchingRuleId) {
        _cached_decoder_for_MatchingRuleId = _decode_LDAPString;
    }
    return _cached_decoder_for_MatchingRuleId(el);
}
/**
 * @summary Encodes a(n) MatchingRuleId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MatchingRuleId, encoded as an ASN.1 Element.
 */
export function _encode_MatchingRuleId(
    value: MatchingRuleId,
    elGetter: $.ASN1Encoder<MatchingRuleId>
) {
    if (!_cached_encoder_for_MatchingRuleId) {
        _cached_encoder_for_MatchingRuleId = _encode_LDAPString;
    }
    return _cached_encoder_for_MatchingRuleId(value, elGetter);
}

/**
 * @summary MatchingRuleAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MatchingRuleAssertion ::= SEQUENCE {
 *   matchingRule  [1]  MatchingRuleId OPTIONAL,
 *   type          [2]  AttributeDescription OPTIONAL,
 *   matchValue    [3]  AssertionValue,
 *   dnAttributes  [4]  BOOLEAN DEFAULT FALSE
 * }
 * ```
 *
 * @class
 */
export class MatchingRuleAssertion {
    constructor(
        /**
         * @summary `matchingRule`.
         * @public
         * @readonly
         */
        readonly matchingRule: OPTIONAL<MatchingRuleId>,
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OPTIONAL<AttributeDescription>,
        /**
         * @summary `matchValue`.
         * @public
         * @readonly
         */
        readonly matchValue: AssertionValue,
        /**
         * @summary `dnAttributes`.
         * @public
         * @readonly
         */
        readonly dnAttributes: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MatchingRuleAssertion
     * @description
     *
     * This takes an `object` and converts it to a `MatchingRuleAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MatchingRuleAssertion`.
     * @returns {MatchingRuleAssertion}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof MatchingRuleAssertion]: MatchingRuleAssertion[_K] }
        >
    ): MatchingRuleAssertion {
        return new MatchingRuleAssertion(
            _o.matchingRule,
            _o.type_,
            _o.matchValue,
            _o.dnAttributes,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `dnAttributes`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_dnAttributes() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of MatchingRuleAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MatchingRuleAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "matchingRule",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "type",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "matchValue",
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "dnAttributes",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of MatchingRuleAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MatchingRuleAssertion: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of MatchingRuleAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MatchingRuleAssertion: $.ComponentSpec[] = [];
let _cached_decoder_for_MatchingRuleAssertion: $.ASN1Decoder<
    MatchingRuleAssertion
> | null = null;
let _cached_encoder_for_MatchingRuleAssertion: $.ASN1Encoder<
    MatchingRuleAssertion
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MatchingRuleAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MatchingRuleAssertion} The decoded data structure.
 */
export function _decode_MatchingRuleAssertion(el: _Element) {
    if (!_cached_decoder_for_MatchingRuleAssertion) {
        _cached_decoder_for_MatchingRuleAssertion = function (
            el: _Element
        ): MatchingRuleAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let matchingRule: OPTIONAL<MatchingRuleId>;
            let type_: OPTIONAL<AttributeDescription>;
            let matchValue!: AssertionValue;
            let dnAttributes: OPTIONAL<BOOLEAN> =
                MatchingRuleAssertion._default_value_for_dnAttributes;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                matchingRule: (_el: _Element): void => {
                    matchingRule = $._decode_implicit<MatchingRuleId>(
                        () => _decode_MatchingRuleId
                    )(_el);
                },
                type: (_el: _Element): void => {
                    type_ = $._decode_implicit<AttributeDescription>(
                        () => _decode_AttributeDescription
                    )(_el);
                },
                matchValue: (_el: _Element): void => {
                    matchValue = $._decode_implicit<AssertionValue>(
                        () => _decode_AssertionValue
                    )(_el);
                },
                dnAttributes: (_el: _Element): void => {
                    dnAttributes = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MatchingRuleAssertion,
                _extension_additions_list_spec_for_MatchingRuleAssertion,
                _root_component_type_list_2_spec_for_MatchingRuleAssertion,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) MatchingRuleAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MatchingRuleAssertion, encoded as an ASN.1 Element.
 */
export function _encode_MatchingRuleAssertion(
    value: MatchingRuleAssertion,
    elGetter: $.ASN1Encoder<MatchingRuleAssertion>
) {
    if (!_cached_encoder_for_MatchingRuleAssertion) {
        _cached_encoder_for_MatchingRuleAssertion = function (
            value: MatchingRuleAssertion,
            elGetter: $.ASN1Encoder<MatchingRuleAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.matchingRule === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_MatchingRuleId,
                                      $.BER
                                  )(value.matchingRule, $.BER),
                            /* IF_ABSENT  */ value.type_ === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_AttributeDescription,
                                      $.BER
                                  )(value.type_, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                3,
                                () => _encode_AssertionValue,
                                $.BER
                            )(value.matchValue, $.BER),
                            /* IF_DEFAULT */ value.dnAttributes === undefined ||
                            $.deepEq(
                                value.dnAttributes,
                                MatchingRuleAssertion._default_value_for_dnAttributes
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.dnAttributes, $.BER),
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
    return _cached_encoder_for_MatchingRuleAssertion(value, elGetter);
}

/* TODO: CHECK_RECURSIVE_DEFINITION */
/**
 * @summary Filter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Filter  ::=  CHOICE {
 *   and              [0]  SET SIZE (1..MAX) OF filter Filter,
 *   or               [1]  SET SIZE (1..MAX) OF filter Filter,
 *   not              [2]  Filter,
 *   equalityMatch    [3]  AttributeValueAssertion,
 *   substrings       [4]  SubstringFilter,
 *   greaterOrEqual   [5]  AttributeValueAssertion,
 *   lessOrEqual      [6]  AttributeValueAssertion,
 *   present          [7]  AttributeDescription,
 *   approxMatch      [8]  AttributeValueAssertion,
 *   extensibleMatch  [9]  MatchingRuleAssertion,
 *   ...
 * }
 * ```
 */
export type Filter =
    | { and: Filter[] } /* CHOICE_ALT_ROOT */
    | { or: Filter[] } /* CHOICE_ALT_ROOT */
    | { not: Filter } /* CHOICE_ALT_ROOT */
    | { equalityMatch: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
    | { substrings: SubstringFilter } /* CHOICE_ALT_ROOT */
    | { greaterOrEqual: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
    | { lessOrEqual: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
    | { present: AttributeDescription } /* CHOICE_ALT_ROOT */
    | { approxMatch: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
    | { extensibleMatch: MatchingRuleAssertion } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Filter: $.ASN1Decoder<Filter> | null = null;
let _cached_encoder_for_Filter: $.ASN1Encoder<Filter> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Filter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Filter} The decoded data structure.
 */
export function _decode_Filter(el: _Element) {
    if (!_cached_decoder_for_Filter) {
        _cached_decoder_for_Filter = $._decode_extensible_choice<Filter>({
            "CONTEXT 0": [
                "and",
                $._decode_implicit<Filter[]>(() =>
                    $._decodeSetOf<Filter>(() => _decode_Filter)
                ),
            ],
            "CONTEXT 1": [
                "or",
                $._decode_implicit<Filter[]>(() =>
                    $._decodeSetOf<Filter>(() => _decode_Filter)
                ),
            ],
            "CONTEXT 2": [
                "not",
                $._decode_implicit<Filter>(() => _decode_Filter),
            ],
            "CONTEXT 3": [
                "equalityMatch",
                $._decode_implicit<AttributeValueAssertion>(
                    () => _decode_AttributeValueAssertion
                ),
            ],
            "CONTEXT 4": [
                "substrings",
                $._decode_implicit<SubstringFilter>(
                    () => _decode_SubstringFilter
                ),
            ],
            "CONTEXT 5": [
                "greaterOrEqual",
                $._decode_implicit<AttributeValueAssertion>(
                    () => _decode_AttributeValueAssertion
                ),
            ],
            "CONTEXT 6": [
                "lessOrEqual",
                $._decode_implicit<AttributeValueAssertion>(
                    () => _decode_AttributeValueAssertion
                ),
            ],
            "CONTEXT 7": [
                "present",
                $._decode_implicit<AttributeDescription>(
                    () => _decode_AttributeDescription
                ),
            ],
            "CONTEXT 8": [
                "approxMatch",
                $._decode_implicit<AttributeValueAssertion>(
                    () => _decode_AttributeValueAssertion
                ),
            ],
            "CONTEXT 9": [
                "extensibleMatch",
                $._decode_implicit<MatchingRuleAssertion>(
                    () => _decode_MatchingRuleAssertion
                ),
            ],
        });
    }
    return _cached_decoder_for_Filter(el);
}
/**
 * @summary Encodes a(n) Filter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Filter, encoded as an ASN.1 Element.
 */
export function _encode_Filter(value: Filter, elGetter: $.ASN1Encoder<Filter>) {
    if (!_cached_encoder_for_Filter) {
        _cached_encoder_for_Filter = $._encode_choice<Filter>(
            {
                and: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeSetOf<Filter>(() => _encode_Filter, $.BER),
                    $.BER
                ),
                or: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeSetOf<Filter>(() => _encode_Filter, $.BER),
                    $.BER
                ),
                not: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_Filter,
                    $.BER
                ),
                equalityMatch: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_AttributeValueAssertion,
                    $.BER
                ),
                substrings: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_SubstringFilter,
                    $.BER
                ),
                greaterOrEqual: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_AttributeValueAssertion,
                    $.BER
                ),
                lessOrEqual: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => _encode_AttributeValueAssertion,
                    $.BER
                ),
                present: $._encode_implicit(
                    _TagClass.context,
                    7,
                    () => _encode_AttributeDescription,
                    $.BER
                ),
                approxMatch: $._encode_implicit(
                    _TagClass.context,
                    8,
                    () => _encode_AttributeValueAssertion,
                    $.BER
                ),
                extensibleMatch: $._encode_implicit(
                    _TagClass.context,
                    9,
                    () => _encode_MatchingRuleAssertion,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Filter(value, elGetter);
}

export type AttributeSelection<> = LDAPString[]; // SequenceOfType
let _cached_decoder_for_AttributeSelection: $.ASN1Decoder<
    AttributeSelection
> | null = null;
let _cached_encoder_for_AttributeSelection: $.ASN1Encoder<
    AttributeSelection
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeSelection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeSelection} The decoded data structure.
 */
export function _decode_AttributeSelection(el: _Element) {
    if (!_cached_decoder_for_AttributeSelection) {
        _cached_decoder_for_AttributeSelection = $._decodeSequenceOf<
            LDAPString
        >(() => _decode_LDAPString);
    }
    return _cached_decoder_for_AttributeSelection(el);
}
/**
 * @summary Encodes a(n) AttributeSelection into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeSelection, encoded as an ASN.1 Element.
 */
export function _encode_AttributeSelection(
    value: AttributeSelection,
    elGetter: $.ASN1Encoder<AttributeSelection>
) {
    if (!_cached_encoder_for_AttributeSelection) {
        _cached_encoder_for_AttributeSelection = $._encodeSequenceOf<
            LDAPString
        >(() => _encode_LDAPString, $.BER);
    }
    return _cached_encoder_for_AttributeSelection(value, elGetter);
}

/**
 * @summary SearchRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRequest ::= [APPLICATION 3]  SEQUENCE {
 *   baseObject    LDAPDN,
 *   scope
 *     ENUMERATED {baseObject(0), singleLevel(1), wholeSubtree(2), ...
 *                 },
 *   derefAliases
 *     ENUMERATED {neverDerefAliases(0), derefInSearching(1),
 *                 derefFindingBaseObj(2), derefAlways(3)},
 *   sizeLimit     INTEGER(0..maxInt),
 *   timeLimit     INTEGER(0..maxInt),
 *   typesOnly     BOOLEAN,
 *   filter        Filter,
 *   attributes    AttributeSelection
 * }
 * ```
 *
 * @class
 */
export class SearchRequest {
    constructor(
        /**
         * @summary `baseObject`.
         * @public
         * @readonly
         */
        readonly baseObject: LDAPDN,
        /**
         * @summary `scope`.
         * @public
         * @readonly
         */
        readonly scope: SearchRequest_scope,
        /**
         * @summary `derefAliases`.
         * @public
         * @readonly
         */
        readonly derefAliases: SearchRequest_derefAliases,
        /**
         * @summary `sizeLimit`.
         * @public
         * @readonly
         */
        readonly sizeLimit: INTEGER,
        /**
         * @summary `timeLimit`.
         * @public
         * @readonly
         */
        readonly timeLimit: INTEGER,
        /**
         * @summary `typesOnly`.
         * @public
         * @readonly
         */
        readonly typesOnly: BOOLEAN,
        /**
         * @summary `filter`.
         * @public
         * @readonly
         */
        readonly filter: Filter,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: AttributeSelection,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SearchRequest
     * @description
     *
     * This takes an `object` and converts it to a `SearchRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SearchRequest`.
     * @returns {SearchRequest}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SearchRequest]: SearchRequest[_K] }>
    ): SearchRequest {
        return new SearchRequest(
            _o.baseObject,
            _o.scope,
            _o.derefAliases,
            _o.sizeLimit,
            _o.timeLimit,
            _o.typesOnly,
            _o.filter,
            _o.attributes,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `scope`
     * @public
     * @static
     */

    public static _enum_for_scope = _enum_for_SearchRequest_scope;
    /**
     * @summary The enum used as the type of the component `derefAliases`
     * @public
     * @static
     */

    public static _enum_for_derefAliases = _enum_for_SearchRequest_derefAliases;
}
/**
 * @summary The Leading Root Component Types of SearchRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchRequest: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "baseObject",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "scope",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "derefAliases",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sizeLimit",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "timeLimit",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "typesOnly",
        false,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec("filter", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "attributes",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SearchRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchRequest: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SearchRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchRequest: $.ComponentSpec[] = [];
let _cached_decoder_for_SearchRequest: $.ASN1Decoder<
    SearchRequest
> | null = null;
let _cached_encoder_for_SearchRequest: $.ASN1Encoder<
    SearchRequest
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SearchRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchRequest} The decoded data structure.
 */
export function _decode_SearchRequest(el: _Element) {
    if (!_cached_decoder_for_SearchRequest) {
        _cached_decoder_for_SearchRequest = $._decode_implicit<SearchRequest>(
            () =>
                function (el: _Element): SearchRequest {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 8) {
                        throw new _ConstructionError(
                            "SearchRequest contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "baseObject";
                    sequence[1].name = "scope";
                    sequence[2].name = "derefAliases";
                    sequence[3].name = "sizeLimit";
                    sequence[4].name = "timeLimit";
                    sequence[5].name = "typesOnly";
                    sequence[6].name = "filter";
                    sequence[7].name = "attributes";
                    let baseObject!: LDAPDN;
                    let scope!: SearchRequest_scope;
                    let derefAliases!: SearchRequest_derefAliases;
                    let sizeLimit!: INTEGER;
                    let timeLimit!: INTEGER;
                    let typesOnly!: BOOLEAN;
                    let filter!: Filter;
                    let attributes!: AttributeSelection;
                    baseObject = _decode_LDAPDN(sequence[0]);
                    scope = _decode_SearchRequest_scope(sequence[1]);
                    derefAliases = _decode_SearchRequest_derefAliases(
                        sequence[2]
                    );
                    sizeLimit = $._decodeInteger(sequence[3]);
                    timeLimit = $._decodeInteger(sequence[4]);
                    typesOnly = $._decodeBoolean(sequence[5]);
                    filter = _decode_Filter(sequence[6]);
                    attributes = _decode_AttributeSelection(sequence[7]);
                    return new SearchRequest(
                        baseObject,
                        scope,
                        derefAliases,
                        sizeLimit,
                        timeLimit,
                        typesOnly,
                        filter,
                        attributes,
                        sequence.slice(8)
                    );
                }
        );
    }
    return _cached_decoder_for_SearchRequest(el);
}
/**
 * @summary Encodes a(n) SearchRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRequest, encoded as an ASN.1 Element.
 */
export function _encode_SearchRequest(
    value: SearchRequest,
    elGetter: $.ASN1Encoder<SearchRequest>
) {
    if (!_cached_encoder_for_SearchRequest) {
        _cached_encoder_for_SearchRequest = $._encode_implicit(
            _TagClass.application,
            3,
            () =>
                function (
                    value: SearchRequest,
                    elGetter: $.ASN1Encoder<SearchRequest>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_LDAPDN(
                                        value.baseObject,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_SearchRequest_scope(
                                        value.scope,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_SearchRequest_derefAliases(
                                        value.derefAliases,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ $._encodeInteger(
                                        value.sizeLimit,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ $._encodeInteger(
                                        value.timeLimit,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ $._encodeBoolean(
                                        value.typesOnly,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_Filter(
                                        value.filter,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_AttributeSelection(
                                        value.attributes,
                                        $.BER
                                    ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_SearchRequest(value, elGetter);
}

export type AttributeValue<> = OCTET_STRING; // OctetStringType
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
        _cached_decoder_for_AttributeValue = $._decodeOctetString;
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
        _cached_encoder_for_AttributeValue = $._encodeOctetString;
    }
    return _cached_encoder_for_AttributeValue(value, elGetter);
}

/**
 * @summary PartialAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PartialAttribute ::= SEQUENCE {
 *   type  AttributeDescription,
 *   vals  SET OF value AttributeValue
 * }
 * ```
 *
 * @class
 */
export class PartialAttribute {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AttributeDescription,
        /**
         * @summary `vals`.
         * @public
         * @readonly
         */
        readonly vals: AttributeValue[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PartialAttribute
     * @description
     *
     * This takes an `object` and converts it to a `PartialAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PartialAttribute`.
     * @returns {PartialAttribute}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof PartialAttribute]: PartialAttribute[_K] }>
    ): PartialAttribute {
        return new PartialAttribute(
            _o.type_,
            _o.vals,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of PartialAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PartialAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "vals",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of PartialAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PartialAttribute: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of PartialAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PartialAttribute: $.ComponentSpec[] = [];
let _cached_decoder_for_PartialAttribute: $.ASN1Decoder<
    PartialAttribute
> | null = null;
let _cached_encoder_for_PartialAttribute: $.ASN1Encoder<
    PartialAttribute
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PartialAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PartialAttribute} The decoded data structure.
 */
export function _decode_PartialAttribute(el: _Element) {
    if (!_cached_decoder_for_PartialAttribute) {
        _cached_decoder_for_PartialAttribute = function (
            el: _Element
        ): PartialAttribute {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PartialAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "vals";
            let type_!: AttributeDescription;
            let vals!: AttributeValue[];
            type_ = _decode_AttributeDescription(sequence[0]);
            vals = $._decodeSetOf<AttributeValue>(() => _decode_AttributeValue)(
                sequence[1]
            );
            return new PartialAttribute(type_, vals, sequence.slice(2));
        };
    }
    return _cached_decoder_for_PartialAttribute(el);
}
/**
 * @summary Encodes a(n) PartialAttribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartialAttribute, encoded as an ASN.1 Element.
 */
export function _encode_PartialAttribute(
    value: PartialAttribute,
    elGetter: $.ASN1Encoder<PartialAttribute>
) {
    if (!_cached_encoder_for_PartialAttribute) {
        _cached_encoder_for_PartialAttribute = function (
            value: PartialAttribute,
            elGetter: $.ASN1Encoder<PartialAttribute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeDescription(
                                value.type_,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSetOf<AttributeValue>(
                                () => _encode_AttributeValue,
                                $.BER
                            )(value.vals, $.BER),
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
    return _cached_encoder_for_PartialAttribute(value, elGetter);
}

export type PartialAttributeList<> = PartialAttribute[]; // SequenceOfType
let _cached_decoder_for_PartialAttributeList: $.ASN1Decoder<
    PartialAttributeList
> | null = null;
let _cached_encoder_for_PartialAttributeList: $.ASN1Encoder<
    PartialAttributeList
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PartialAttributeList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PartialAttributeList} The decoded data structure.
 */
export function _decode_PartialAttributeList(el: _Element) {
    if (!_cached_decoder_for_PartialAttributeList) {
        _cached_decoder_for_PartialAttributeList = $._decodeSequenceOf<
            PartialAttribute
        >(() => _decode_PartialAttribute);
    }
    return _cached_decoder_for_PartialAttributeList(el);
}
/**
 * @summary Encodes a(n) PartialAttributeList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartialAttributeList, encoded as an ASN.1 Element.
 */
export function _encode_PartialAttributeList(
    value: PartialAttributeList,
    elGetter: $.ASN1Encoder<PartialAttributeList>
) {
    if (!_cached_encoder_for_PartialAttributeList) {
        _cached_encoder_for_PartialAttributeList = $._encodeSequenceOf<
            PartialAttribute
        >(() => _encode_PartialAttribute, $.BER);
    }
    return _cached_encoder_for_PartialAttributeList(value, elGetter);
}

/**
 * @summary SearchResultEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchResultEntry ::= [APPLICATION 4]  SEQUENCE {
 *   objectName  LDAPDN,
 *   attributes  PartialAttributeList
 * }
 * ```
 *
 * @class
 */
export class SearchResultEntry {
    constructor(
        /**
         * @summary `objectName`.
         * @public
         * @readonly
         */
        readonly objectName: LDAPDN,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: PartialAttributeList,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SearchResultEntry
     * @description
     *
     * This takes an `object` and converts it to a `SearchResultEntry`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SearchResultEntry`.
     * @returns {SearchResultEntry}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SearchResultEntry]: SearchResultEntry[_K] }>
    ): SearchResultEntry {
        return new SearchResultEntry(
            _o.objectName,
            _o.attributes,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of SearchResultEntry
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchResultEntry: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "objectName",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributes",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SearchResultEntry
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchResultEntry: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SearchResultEntry
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchResultEntry: $.ComponentSpec[] = [];
let _cached_decoder_for_SearchResultEntry: $.ASN1Decoder<
    SearchResultEntry
> | null = null;
let _cached_encoder_for_SearchResultEntry: $.ASN1Encoder<
    SearchResultEntry
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SearchResultEntry
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchResultEntry} The decoded data structure.
 */
export function _decode_SearchResultEntry(el: _Element) {
    if (!_cached_decoder_for_SearchResultEntry) {
        _cached_decoder_for_SearchResultEntry = $._decode_implicit<
            SearchResultEntry
        >(
            () =>
                function (el: _Element): SearchResultEntry {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 2) {
                        throw new _ConstructionError(
                            "SearchResultEntry contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "objectName";
                    sequence[1].name = "attributes";
                    let objectName!: LDAPDN;
                    let attributes!: PartialAttributeList;
                    objectName = _decode_LDAPDN(sequence[0]);
                    attributes = _decode_PartialAttributeList(sequence[1]);
                    return new SearchResultEntry(
                        objectName,
                        attributes,
                        sequence.slice(2)
                    );
                }
        );
    }
    return _cached_decoder_for_SearchResultEntry(el);
}
/**
 * @summary Encodes a(n) SearchResultEntry into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResultEntry, encoded as an ASN.1 Element.
 */
export function _encode_SearchResultEntry(
    value: SearchResultEntry,
    elGetter: $.ASN1Encoder<SearchResultEntry>
) {
    if (!_cached_encoder_for_SearchResultEntry) {
        _cached_encoder_for_SearchResultEntry = $._encode_implicit(
            _TagClass.application,
            4,
            () =>
                function (
                    value: SearchResultEntry,
                    elGetter: $.ASN1Encoder<SearchResultEntry>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_LDAPDN(
                                        value.objectName,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_PartialAttributeList(
                                        value.attributes,
                                        $.BER
                                    ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_SearchResultEntry(value, elGetter);
}

export type SearchResultDone<> = LDAPResult; // DefinedType
let _cached_decoder_for_SearchResultDone: $.ASN1Decoder<
    SearchResultDone
> | null = null;
let _cached_encoder_for_SearchResultDone: $.ASN1Encoder<
    SearchResultDone
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SearchResultDone
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchResultDone} The decoded data structure.
 */
export function _decode_SearchResultDone(el: _Element) {
    if (!_cached_decoder_for_SearchResultDone) {
        _cached_decoder_for_SearchResultDone = $._decode_implicit<
            SearchResultDone
        >(() => _decode_LDAPResult);
    }
    return _cached_decoder_for_SearchResultDone(el);
}
/**
 * @summary Encodes a(n) SearchResultDone into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResultDone, encoded as an ASN.1 Element.
 */
export function _encode_SearchResultDone(
    value: SearchResultDone,
    elGetter: $.ASN1Encoder<SearchResultDone>
) {
    if (!_cached_encoder_for_SearchResultDone) {
        _cached_encoder_for_SearchResultDone = $._encode_implicit(
            _TagClass.application,
            5,
            () => _encode_LDAPResult,
            $.BER
        );
    }
    return _cached_encoder_for_SearchResultDone(value, elGetter);
}

export type SearchResultReference<> = URI[]; // SequenceOfType
let _cached_decoder_for_SearchResultReference: $.ASN1Decoder<
    SearchResultReference
> | null = null;
let _cached_encoder_for_SearchResultReference: $.ASN1Encoder<
    SearchResultReference
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SearchResultReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchResultReference} The decoded data structure.
 */
export function _decode_SearchResultReference(el: _Element) {
    if (!_cached_decoder_for_SearchResultReference) {
        _cached_decoder_for_SearchResultReference = $._decode_implicit<
            SearchResultReference
        >(() => $._decodeSequenceOf<URI>(() => _decode_URI));
    }
    return _cached_decoder_for_SearchResultReference(el);
}
/**
 * @summary Encodes a(n) SearchResultReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResultReference, encoded as an ASN.1 Element.
 */
export function _encode_SearchResultReference(
    value: SearchResultReference,
    elGetter: $.ASN1Encoder<SearchResultReference>
) {
    if (!_cached_encoder_for_SearchResultReference) {
        _cached_encoder_for_SearchResultReference = $._encode_implicit(
            _TagClass.application,
            19,
            () => $._encodeSequenceOf<URI>(() => _encode_URI, $.BER),
            $.BER
        );
    }
    return _cached_encoder_for_SearchResultReference(value, elGetter);
}

/**
 * @summary ModifyRequest_changes_change_operation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyRequest-changes-change-operation ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ModifyRequest_changes_change_operation {
    add = 0,
    delete_ = 1,
    replace = 2,
}
/**
 * @summary ModifyRequest_changes_change_operation
 */
export type ModifyRequest_changes_change_operation =
    | _enum_for_ModifyRequest_changes_change_operation
    | ENUMERATED;
/**
 * @summary ModifyRequest_changes_change_operation_add
 * @constant
 * @type {number}
 */
export const ModifyRequest_changes_change_operation_add: ModifyRequest_changes_change_operation = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ModifyRequest_changes_change_operation_delete_
 * @constant
 * @type {number}
 */
export const ModifyRequest_changes_change_operation_delete_: ModifyRequest_changes_change_operation = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ModifyRequest_changes_change_operation_replace
 * @constant
 * @type {number}
 */
export const ModifyRequest_changes_change_operation_replace: ModifyRequest_changes_change_operation = 2; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_ModifyRequest_changes_change_operation: $.ASN1Decoder<
    ModifyRequest_changes_change_operation
> | null = null;
let _cached_encoder_for_ModifyRequest_changes_change_operation: $.ASN1Encoder<
    ModifyRequest_changes_change_operation
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyRequest_changes_change_operation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyRequest_changes_change_operation} The decoded data structure.
 */
export function _decode_ModifyRequest_changes_change_operation(el: _Element) {
    if (!_cached_decoder_for_ModifyRequest_changes_change_operation) {
        _cached_decoder_for_ModifyRequest_changes_change_operation =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_ModifyRequest_changes_change_operation(el);
}
/**
 * @summary Encodes a(n) ModifyRequest_changes_change_operation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyRequest_changes_change_operation, encoded as an ASN.1 Element.
 */
export function _encode_ModifyRequest_changes_change_operation(
    value: ModifyRequest_changes_change_operation,
    elGetter: $.ASN1Encoder<ModifyRequest_changes_change_operation>
) {
    if (!_cached_encoder_for_ModifyRequest_changes_change_operation) {
        _cached_encoder_for_ModifyRequest_changes_change_operation =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_ModifyRequest_changes_change_operation(
        value,
        elGetter
    );
}

/**
 * @summary ModifyRequest_changes_change
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyRequest-changes-change ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ModifyRequest_changes_change {
    constructor(
        /**
         * @summary `operation`.
         * @public
         * @readonly
         */
        readonly operation: ModifyRequest_changes_change_operation,
        /**
         * @summary `modification`.
         * @public
         * @readonly
         */
        readonly modification: PartialAttribute,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModifyRequest_changes_change
     * @description
     *
     * This takes an `object` and converts it to a `ModifyRequest_changes_change`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifyRequest_changes_change`.
     * @returns {ModifyRequest_changes_change}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ModifyRequest_changes_change]: ModifyRequest_changes_change[_K];
            }
        >
    ): ModifyRequest_changes_change {
        return new ModifyRequest_changes_change(
            _o.operation,
            _o.modification,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `operation`
     * @public
     * @static
     */

    public static _enum_for_operation = _enum_for_ModifyRequest_changes_change_operation;
}
/**
 * @summary The Leading Root Component Types of ModifyRequest_changes_change
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifyRequest_changes_change: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "operation",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "modification",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ModifyRequest_changes_change
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyRequest_changes_change: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ModifyRequest_changes_change
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyRequest_changes_change: $.ComponentSpec[] = [];
let _cached_decoder_for_ModifyRequest_changes_change: $.ASN1Decoder<
    ModifyRequest_changes_change
> | null = null;
let _cached_encoder_for_ModifyRequest_changes_change: $.ASN1Encoder<
    ModifyRequest_changes_change
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyRequest_changes_change
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyRequest_changes_change} The decoded data structure.
 */
export function _decode_ModifyRequest_changes_change(el: _Element) {
    if (!_cached_decoder_for_ModifyRequest_changes_change) {
        _cached_decoder_for_ModifyRequest_changes_change = function (
            el: _Element
        ): ModifyRequest_changes_change {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ModifyRequest-changes-change contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "operation";
            sequence[1].name = "modification";
            let operation!: ModifyRequest_changes_change_operation;
            let modification!: PartialAttribute;
            operation = _decode_ModifyRequest_changes_change_operation(
                sequence[0]
            );
            modification = _decode_PartialAttribute(sequence[1]);
            return new ModifyRequest_changes_change(
                operation,
                modification,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_ModifyRequest_changes_change(el);
}
/**
 * @summary Encodes a(n) ModifyRequest_changes_change into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyRequest_changes_change, encoded as an ASN.1 Element.
 */
export function _encode_ModifyRequest_changes_change(
    value: ModifyRequest_changes_change,
    elGetter: $.ASN1Encoder<ModifyRequest_changes_change>
) {
    if (!_cached_encoder_for_ModifyRequest_changes_change) {
        _cached_encoder_for_ModifyRequest_changes_change = function (
            value: ModifyRequest_changes_change,
            elGetter: $.ASN1Encoder<ModifyRequest_changes_change>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_ModifyRequest_changes_change_operation(
                                value.operation,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_PartialAttribute(
                                value.modification,
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
    return _cached_encoder_for_ModifyRequest_changes_change(value, elGetter);
}

/**
 * @summary ModifyRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyRequest ::= [APPLICATION 6]  SEQUENCE {
 *   object   LDAPDN,
 *   changes
 *     SEQUENCE OF change
 *       SEQUENCE {operation     ENUMERATED {add(0), delete(1), replace(2), ...
 *                                           },
 *                 modification  PartialAttribute}
 * }
 * ```
 *
 * @class
 */
export class ModifyRequest {
    constructor(
        /**
         * @summary `object`.
         * @public
         * @readonly
         */
        readonly object: LDAPDN,
        /**
         * @summary `changes`.
         * @public
         * @readonly
         */
        readonly changes: ModifyRequest_changes_change[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModifyRequest
     * @description
     *
     * This takes an `object` and converts it to a `ModifyRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifyRequest`.
     * @returns {ModifyRequest}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ModifyRequest]: ModifyRequest[_K] }>
    ): ModifyRequest {
        return new ModifyRequest(
            _o.object,
            _o.changes,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ModifyRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifyRequest: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "object",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "changes",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ModifyRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyRequest: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ModifyRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyRequest: $.ComponentSpec[] = [];
let _cached_decoder_for_ModifyRequest: $.ASN1Decoder<
    ModifyRequest
> | null = null;
let _cached_encoder_for_ModifyRequest: $.ASN1Encoder<
    ModifyRequest
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyRequest} The decoded data structure.
 */
export function _decode_ModifyRequest(el: _Element) {
    if (!_cached_decoder_for_ModifyRequest) {
        _cached_decoder_for_ModifyRequest = $._decode_implicit<ModifyRequest>(
            () =>
                function (el: _Element): ModifyRequest {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 2) {
                        throw new _ConstructionError(
                            "ModifyRequest contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "object";
                    sequence[1].name = "changes";
                    let object!: LDAPDN;
                    let changes!: ModifyRequest_changes_change[];
                    object = _decode_LDAPDN(sequence[0]);
                    changes = $._decodeSequenceOf<ModifyRequest_changes_change>(
                        () => _decode_ModifyRequest_changes_change
                    )(sequence[1]);
                    return new ModifyRequest(
                        object,
                        changes,
                        sequence.slice(2)
                    );
                }
        );
    }
    return _cached_decoder_for_ModifyRequest(el);
}
/**
 * @summary Encodes a(n) ModifyRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyRequest, encoded as an ASN.1 Element.
 */
export function _encode_ModifyRequest(
    value: ModifyRequest,
    elGetter: $.ASN1Encoder<ModifyRequest>
) {
    if (!_cached_encoder_for_ModifyRequest) {
        _cached_encoder_for_ModifyRequest = $._encode_implicit(
            _TagClass.application,
            6,
            () =>
                function (
                    value: ModifyRequest,
                    elGetter: $.ASN1Encoder<ModifyRequest>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_LDAPDN(
                                        value.object,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ $._encodeSequenceOf<
                                        ModifyRequest_changes_change
                                    >(
                                        () =>
                                            _encode_ModifyRequest_changes_change,
                                        $.BER
                                    )(value.changes, $.BER),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_ModifyRequest(value, elGetter);
}

export type ModifyResponse<> = LDAPResult; // DefinedType
let _cached_decoder_for_ModifyResponse: $.ASN1Decoder<
    ModifyResponse
> | null = null;
let _cached_encoder_for_ModifyResponse: $.ASN1Encoder<
    ModifyResponse
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyResponse} The decoded data structure.
 */
export function _decode_ModifyResponse(el: _Element) {
    if (!_cached_decoder_for_ModifyResponse) {
        _cached_decoder_for_ModifyResponse = $._decode_implicit<ModifyResponse>(
            () => _decode_LDAPResult
        );
    }
    return _cached_decoder_for_ModifyResponse(el);
}
/**
 * @summary Encodes a(n) ModifyResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyResponse, encoded as an ASN.1 Element.
 */
export function _encode_ModifyResponse(
    value: ModifyResponse,
    elGetter: $.ASN1Encoder<ModifyResponse>
) {
    if (!_cached_encoder_for_ModifyResponse) {
        _cached_encoder_for_ModifyResponse = $._encode_implicit(
            _TagClass.application,
            7,
            () => _encode_LDAPResult,
            $.BER
        );
    }
    return _cached_encoder_for_ModifyResponse(value, elGetter);
}

export type Attribute<> = PartialAttribute; // DefinedType
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
        _cached_decoder_for_Attribute = _decode_PartialAttribute;
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
        _cached_encoder_for_Attribute = _encode_PartialAttribute;
    }
    return _cached_encoder_for_Attribute(value, elGetter);
}

export type AttributeList<> = Attribute[]; // SequenceOfType
let _cached_decoder_for_AttributeList: $.ASN1Decoder<
    AttributeList
> | null = null;
let _cached_encoder_for_AttributeList: $.ASN1Encoder<
    AttributeList
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeList} The decoded data structure.
 */
export function _decode_AttributeList(el: _Element) {
    if (!_cached_decoder_for_AttributeList) {
        _cached_decoder_for_AttributeList = $._decodeSequenceOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_AttributeList(el);
}
/**
 * @summary Encodes a(n) AttributeList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeList, encoded as an ASN.1 Element.
 */
export function _encode_AttributeList(
    value: AttributeList,
    elGetter: $.ASN1Encoder<AttributeList>
) {
    if (!_cached_encoder_for_AttributeList) {
        _cached_encoder_for_AttributeList = $._encodeSequenceOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_AttributeList(value, elGetter);
}

/**
 * @summary AddRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddRequest ::= [APPLICATION 8]  SEQUENCE {
 *   entry       LDAPDN,
 *   attributes  AttributeList
 * }
 * ```
 *
 * @class
 */
export class AddRequest {
    constructor(
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry: LDAPDN,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: AttributeList,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AddRequest
     * @description
     *
     * This takes an `object` and converts it to a `AddRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddRequest`.
     * @returns {AddRequest}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AddRequest]: AddRequest[_K] }>
    ): AddRequest {
        return new AddRequest(
            _o.entry,
            _o.attributes,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AddRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddRequest: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "entry",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributes",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AddRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddRequest: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AddRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddRequest: $.ComponentSpec[] = [];
let _cached_decoder_for_AddRequest: $.ASN1Decoder<AddRequest> | null = null;
let _cached_encoder_for_AddRequest: $.ASN1Encoder<AddRequest> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AddRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddRequest} The decoded data structure.
 */
export function _decode_AddRequest(el: _Element) {
    if (!_cached_decoder_for_AddRequest) {
        _cached_decoder_for_AddRequest = $._decode_implicit<AddRequest>(
            () =>
                function (el: _Element): AddRequest {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 2) {
                        throw new _ConstructionError(
                            "AddRequest contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "entry";
                    sequence[1].name = "attributes";
                    let entry!: LDAPDN;
                    let attributes!: AttributeList;
                    entry = _decode_LDAPDN(sequence[0]);
                    attributes = _decode_AttributeList(sequence[1]);
                    return new AddRequest(entry, attributes, sequence.slice(2));
                }
        );
    }
    return _cached_decoder_for_AddRequest(el);
}
/**
 * @summary Encodes a(n) AddRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddRequest, encoded as an ASN.1 Element.
 */
export function _encode_AddRequest(
    value: AddRequest,
    elGetter: $.ASN1Encoder<AddRequest>
) {
    if (!_cached_encoder_for_AddRequest) {
        _cached_encoder_for_AddRequest = $._encode_implicit(
            _TagClass.application,
            8,
            () =>
                function (
                    value: AddRequest,
                    elGetter: $.ASN1Encoder<AddRequest>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_LDAPDN(
                                        value.entry,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_AttributeList(
                                        value.attributes,
                                        $.BER
                                    ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_AddRequest(value, elGetter);
}

export type AddResponse<> = LDAPResult; // DefinedType
let _cached_decoder_for_AddResponse: $.ASN1Decoder<AddResponse> | null = null;
let _cached_encoder_for_AddResponse: $.ASN1Encoder<AddResponse> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AddResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddResponse} The decoded data structure.
 */
export function _decode_AddResponse(el: _Element) {
    if (!_cached_decoder_for_AddResponse) {
        _cached_decoder_for_AddResponse = $._decode_implicit<AddResponse>(
            () => _decode_LDAPResult
        );
    }
    return _cached_decoder_for_AddResponse(el);
}
/**
 * @summary Encodes a(n) AddResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddResponse, encoded as an ASN.1 Element.
 */
export function _encode_AddResponse(
    value: AddResponse,
    elGetter: $.ASN1Encoder<AddResponse>
) {
    if (!_cached_encoder_for_AddResponse) {
        _cached_encoder_for_AddResponse = $._encode_implicit(
            _TagClass.application,
            9,
            () => _encode_LDAPResult,
            $.BER
        );
    }
    return _cached_encoder_for_AddResponse(value, elGetter);
}

export type DelRequest<> = LDAPDN; // DefinedType
let _cached_decoder_for_DelRequest: $.ASN1Decoder<DelRequest> | null = null;
let _cached_encoder_for_DelRequest: $.ASN1Encoder<DelRequest> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DelRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DelRequest} The decoded data structure.
 */
export function _decode_DelRequest(el: _Element) {
    if (!_cached_decoder_for_DelRequest) {
        _cached_decoder_for_DelRequest = $._decode_implicit<DelRequest>(
            () => _decode_LDAPDN
        );
    }
    return _cached_decoder_for_DelRequest(el);
}
/**
 * @summary Encodes a(n) DelRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DelRequest, encoded as an ASN.1 Element.
 */
export function _encode_DelRequest(
    value: DelRequest,
    elGetter: $.ASN1Encoder<DelRequest>
) {
    if (!_cached_encoder_for_DelRequest) {
        _cached_encoder_for_DelRequest = $._encode_implicit(
            _TagClass.application,
            10,
            () => _encode_LDAPDN,
            $.BER
        );
    }
    return _cached_encoder_for_DelRequest(value, elGetter);
}

export type DelResponse<> = LDAPResult; // DefinedType
let _cached_decoder_for_DelResponse: $.ASN1Decoder<DelResponse> | null = null;
let _cached_encoder_for_DelResponse: $.ASN1Encoder<DelResponse> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DelResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DelResponse} The decoded data structure.
 */
export function _decode_DelResponse(el: _Element) {
    if (!_cached_decoder_for_DelResponse) {
        _cached_decoder_for_DelResponse = $._decode_implicit<DelResponse>(
            () => _decode_LDAPResult
        );
    }
    return _cached_decoder_for_DelResponse(el);
}
/**
 * @summary Encodes a(n) DelResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DelResponse, encoded as an ASN.1 Element.
 */
export function _encode_DelResponse(
    value: DelResponse,
    elGetter: $.ASN1Encoder<DelResponse>
) {
    if (!_cached_encoder_for_DelResponse) {
        _cached_encoder_for_DelResponse = $._encode_implicit(
            _TagClass.application,
            11,
            () => _encode_LDAPResult,
            $.BER
        );
    }
    return _cached_encoder_for_DelResponse(value, elGetter);
}

export type RelativeLDAPDN<> = LDAPString; // DefinedType
let _cached_decoder_for_RelativeLDAPDN: $.ASN1Decoder<
    RelativeLDAPDN
> | null = null;
let _cached_encoder_for_RelativeLDAPDN: $.ASN1Encoder<
    RelativeLDAPDN
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RelativeLDAPDN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelativeLDAPDN} The decoded data structure.
 */
export function _decode_RelativeLDAPDN(el: _Element) {
    if (!_cached_decoder_for_RelativeLDAPDN) {
        _cached_decoder_for_RelativeLDAPDN = _decode_LDAPString;
    }
    return _cached_decoder_for_RelativeLDAPDN(el);
}
/**
 * @summary Encodes a(n) RelativeLDAPDN into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelativeLDAPDN, encoded as an ASN.1 Element.
 */
export function _encode_RelativeLDAPDN(
    value: RelativeLDAPDN,
    elGetter: $.ASN1Encoder<RelativeLDAPDN>
) {
    if (!_cached_encoder_for_RelativeLDAPDN) {
        _cached_encoder_for_RelativeLDAPDN = _encode_LDAPString;
    }
    return _cached_encoder_for_RelativeLDAPDN(value, elGetter);
}

/**
 * @summary ModifyDNRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyDNRequest ::= [APPLICATION 12]  SEQUENCE {
 *   entry         LDAPDN,
 *   newrdn        RelativeLDAPDN,
 *   deleteoldrdn  BOOLEAN,
 *   newSuperior   [0]  LDAPDN OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ModifyDNRequest {
    constructor(
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry: LDAPDN,
        /**
         * @summary `newrdn`.
         * @public
         * @readonly
         */
        readonly newrdn: RelativeLDAPDN,
        /**
         * @summary `deleteoldrdn`.
         * @public
         * @readonly
         */
        readonly deleteoldrdn: BOOLEAN,
        /**
         * @summary `newSuperior`.
         * @public
         * @readonly
         */
        readonly newSuperior: OPTIONAL<LDAPDN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModifyDNRequest
     * @description
     *
     * This takes an `object` and converts it to a `ModifyDNRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifyDNRequest`.
     * @returns {ModifyDNRequest}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ModifyDNRequest]: ModifyDNRequest[_K] }>
    ): ModifyDNRequest {
        return new ModifyDNRequest(
            _o.entry,
            _o.newrdn,
            _o.deleteoldrdn,
            _o.newSuperior,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ModifyDNRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifyDNRequest: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "entry",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "newrdn",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "deleteoldrdn",
        false,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "newSuperior",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ModifyDNRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyDNRequest: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ModifyDNRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyDNRequest: $.ComponentSpec[] = [];
let _cached_decoder_for_ModifyDNRequest: $.ASN1Decoder<
    ModifyDNRequest
> | null = null;
let _cached_encoder_for_ModifyDNRequest: $.ASN1Encoder<
    ModifyDNRequest
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyDNRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyDNRequest} The decoded data structure.
 */
export function _decode_ModifyDNRequest(el: _Element) {
    if (!_cached_decoder_for_ModifyDNRequest) {
        _cached_decoder_for_ModifyDNRequest = $._decode_implicit<
            ModifyDNRequest
        >(
            () =>
                function (el: _Element): ModifyDNRequest {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let entry!: LDAPDN;
                    let newrdn!: RelativeLDAPDN;
                    let deleteoldrdn!: BOOLEAN;
                    let newSuperior: OPTIONAL<LDAPDN>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        entry: (_el: _Element): void => {
                            entry = _decode_LDAPDN(_el);
                        },
                        newrdn: (_el: _Element): void => {
                            newrdn = _decode_RelativeLDAPDN(_el);
                        },
                        deleteoldrdn: (_el: _Element): void => {
                            deleteoldrdn = $._decodeBoolean(_el);
                        },
                        newSuperior: (_el: _Element): void => {
                            newSuperior = $._decode_implicit<LDAPDN>(
                                () => _decode_LDAPDN
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_ModifyDNRequest,
                        _extension_additions_list_spec_for_ModifyDNRequest,
                        _root_component_type_list_2_spec_for_ModifyDNRequest,
                        (ext: _Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new ModifyDNRequest(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ entry,
                        newrdn,
                        deleteoldrdn,
                        newSuperior,
                        _unrecognizedExtensionsList
                    );
                }
        );
    }
    return _cached_decoder_for_ModifyDNRequest(el);
}
/**
 * @summary Encodes a(n) ModifyDNRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyDNRequest, encoded as an ASN.1 Element.
 */
export function _encode_ModifyDNRequest(
    value: ModifyDNRequest,
    elGetter: $.ASN1Encoder<ModifyDNRequest>
) {
    if (!_cached_encoder_for_ModifyDNRequest) {
        _cached_encoder_for_ModifyDNRequest = $._encode_implicit(
            _TagClass.application,
            12,
            () =>
                function (
                    value: ModifyDNRequest,
                    elGetter: $.ASN1Encoder<ModifyDNRequest>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_LDAPDN(
                                        value.entry,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_RelativeLDAPDN(
                                        value.newrdn,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ $._encodeBoolean(
                                        value.deleteoldrdn,
                                        $.BER
                                    ),
                                    /* IF_ABSENT  */ value.newSuperior ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              0,
                                              () => _encode_LDAPDN,
                                              $.BER
                                          )(value.newSuperior, $.BER),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_ModifyDNRequest(value, elGetter);
}

export type ModifyDNResponse<> = LDAPResult; // DefinedType
let _cached_decoder_for_ModifyDNResponse: $.ASN1Decoder<
    ModifyDNResponse
> | null = null;
let _cached_encoder_for_ModifyDNResponse: $.ASN1Encoder<
    ModifyDNResponse
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyDNResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyDNResponse} The decoded data structure.
 */
export function _decode_ModifyDNResponse(el: _Element) {
    if (!_cached_decoder_for_ModifyDNResponse) {
        _cached_decoder_for_ModifyDNResponse = $._decode_implicit<
            ModifyDNResponse
        >(() => _decode_LDAPResult);
    }
    return _cached_decoder_for_ModifyDNResponse(el);
}
/**
 * @summary Encodes a(n) ModifyDNResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyDNResponse, encoded as an ASN.1 Element.
 */
export function _encode_ModifyDNResponse(
    value: ModifyDNResponse,
    elGetter: $.ASN1Encoder<ModifyDNResponse>
) {
    if (!_cached_encoder_for_ModifyDNResponse) {
        _cached_encoder_for_ModifyDNResponse = $._encode_implicit(
            _TagClass.application,
            13,
            () => _encode_LDAPResult,
            $.BER
        );
    }
    return _cached_encoder_for_ModifyDNResponse(value, elGetter);
}

/**
 * @summary CompareRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CompareRequest ::= [APPLICATION 14]  SEQUENCE {
 *   entry  LDAPDN,
 *   ava    AttributeValueAssertion
 * }
 * ```
 *
 * @class
 */
export class CompareRequest {
    constructor(
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry: LDAPDN,
        /**
         * @summary `ava`.
         * @public
         * @readonly
         */
        readonly ava: AttributeValueAssertion,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CompareRequest
     * @description
     *
     * This takes an `object` and converts it to a `CompareRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompareRequest`.
     * @returns {CompareRequest}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CompareRequest]: CompareRequest[_K] }>
    ): CompareRequest {
        return new CompareRequest(
            _o.entry,
            _o.ava,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CompareRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CompareRequest: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "entry",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "ava",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CompareRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CompareRequest: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CompareRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CompareRequest: $.ComponentSpec[] = [];
let _cached_decoder_for_CompareRequest: $.ASN1Decoder<
    CompareRequest
> | null = null;
let _cached_encoder_for_CompareRequest: $.ASN1Encoder<
    CompareRequest
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CompareRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CompareRequest} The decoded data structure.
 */
export function _decode_CompareRequest(el: _Element) {
    if (!_cached_decoder_for_CompareRequest) {
        _cached_decoder_for_CompareRequest = $._decode_implicit<CompareRequest>(
            () =>
                function (el: _Element): CompareRequest {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 2) {
                        throw new _ConstructionError(
                            "CompareRequest contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "entry";
                    sequence[1].name = "ava";
                    let entry!: LDAPDN;
                    let ava!: AttributeValueAssertion;
                    entry = _decode_LDAPDN(sequence[0]);
                    ava = _decode_AttributeValueAssertion(sequence[1]);
                    return new CompareRequest(entry, ava, sequence.slice(2));
                }
        );
    }
    return _cached_decoder_for_CompareRequest(el);
}
/**
 * @summary Encodes a(n) CompareRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompareRequest, encoded as an ASN.1 Element.
 */
export function _encode_CompareRequest(
    value: CompareRequest,
    elGetter: $.ASN1Encoder<CompareRequest>
) {
    if (!_cached_encoder_for_CompareRequest) {
        _cached_encoder_for_CompareRequest = $._encode_implicit(
            _TagClass.application,
            14,
            () =>
                function (
                    value: CompareRequest,
                    elGetter: $.ASN1Encoder<CompareRequest>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_LDAPDN(
                                        value.entry,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_AttributeValueAssertion(
                                        value.ava,
                                        $.BER
                                    ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_CompareRequest(value, elGetter);
}

export type CompareResponse<> = LDAPResult; // DefinedType
let _cached_decoder_for_CompareResponse: $.ASN1Decoder<
    CompareResponse
> | null = null;
let _cached_encoder_for_CompareResponse: $.ASN1Encoder<
    CompareResponse
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CompareResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CompareResponse} The decoded data structure.
 */
export function _decode_CompareResponse(el: _Element) {
    if (!_cached_decoder_for_CompareResponse) {
        _cached_decoder_for_CompareResponse = $._decode_implicit<
            CompareResponse
        >(() => _decode_LDAPResult);
    }
    return _cached_decoder_for_CompareResponse(el);
}
/**
 * @summary Encodes a(n) CompareResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompareResponse, encoded as an ASN.1 Element.
 */
export function _encode_CompareResponse(
    value: CompareResponse,
    elGetter: $.ASN1Encoder<CompareResponse>
) {
    if (!_cached_encoder_for_CompareResponse) {
        _cached_encoder_for_CompareResponse = $._encode_implicit(
            _TagClass.application,
            15,
            () => _encode_LDAPResult,
            $.BER
        );
    }
    return _cached_encoder_for_CompareResponse(value, elGetter);
}

export type AbandonRequest<> = MessageID; // DefinedType
let _cached_decoder_for_AbandonRequest: $.ASN1Decoder<
    AbandonRequest
> | null = null;
let _cached_encoder_for_AbandonRequest: $.ASN1Encoder<
    AbandonRequest
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AbandonRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AbandonRequest} The decoded data structure.
 */
export function _decode_AbandonRequest(el: _Element) {
    if (!_cached_decoder_for_AbandonRequest) {
        _cached_decoder_for_AbandonRequest = $._decode_implicit<AbandonRequest>(
            () => _decode_MessageID
        );
    }
    return _cached_decoder_for_AbandonRequest(el);
}
/**
 * @summary Encodes a(n) AbandonRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbandonRequest, encoded as an ASN.1 Element.
 */
export function _encode_AbandonRequest(
    value: AbandonRequest,
    elGetter: $.ASN1Encoder<AbandonRequest>
) {
    if (!_cached_encoder_for_AbandonRequest) {
        _cached_encoder_for_AbandonRequest = $._encode_implicit(
            _TagClass.application,
            16,
            () => _encode_MessageID,
            $.BER
        );
    }
    return _cached_encoder_for_AbandonRequest(value, elGetter);
}

export type LDAPOID<> = OCTET_STRING; // OctetStringType
let _cached_decoder_for_LDAPOID: $.ASN1Decoder<LDAPOID> | null = null;
let _cached_encoder_for_LDAPOID: $.ASN1Encoder<LDAPOID> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) LDAPOID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPOID} The decoded data structure.
 */
export function _decode_LDAPOID(el: _Element) {
    if (!_cached_decoder_for_LDAPOID) {
        _cached_decoder_for_LDAPOID = $._decodeOctetString;
    }
    return _cached_decoder_for_LDAPOID(el);
}
/**
 * @summary Encodes a(n) LDAPOID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPOID, encoded as an ASN.1 Element.
 */
export function _encode_LDAPOID(
    value: LDAPOID,
    elGetter: $.ASN1Encoder<LDAPOID>
) {
    if (!_cached_encoder_for_LDAPOID) {
        _cached_encoder_for_LDAPOID = $._encodeOctetString;
    }
    return _cached_encoder_for_LDAPOID(value, elGetter);
}

/**
 * @summary ExtendedRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedRequest ::= [APPLICATION 23]  SEQUENCE {
 *   requestName   [0]  LDAPOID,
 *   requestValue  [1]  OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ExtendedRequest {
    constructor(
        /**
         * @summary `requestName`.
         * @public
         * @readonly
         */
        readonly requestName: LDAPOID,
        /**
         * @summary `requestValue`.
         * @public
         * @readonly
         */
        readonly requestValue: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ExtendedRequest
     * @description
     *
     * This takes an `object` and converts it to a `ExtendedRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtendedRequest`.
     * @returns {ExtendedRequest}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ExtendedRequest]: ExtendedRequest[_K] }>
    ): ExtendedRequest {
        return new ExtendedRequest(
            _o.requestName,
            _o.requestValue,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ExtendedRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExtendedRequest: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "requestName",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "requestValue",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ExtendedRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExtendedRequest: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ExtendedRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExtendedRequest: $.ComponentSpec[] = [];
let _cached_decoder_for_ExtendedRequest: $.ASN1Decoder<
    ExtendedRequest
> | null = null;
let _cached_encoder_for_ExtendedRequest: $.ASN1Encoder<
    ExtendedRequest
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedRequest} The decoded data structure.
 */
export function _decode_ExtendedRequest(el: _Element) {
    if (!_cached_decoder_for_ExtendedRequest) {
        _cached_decoder_for_ExtendedRequest = $._decode_implicit<
            ExtendedRequest
        >(
            () =>
                function (el: _Element): ExtendedRequest {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let requestName!: LDAPOID;
                    let requestValue: OPTIONAL<OCTET_STRING>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        requestName: (_el: _Element): void => {
                            requestName = $._decode_implicit<LDAPOID>(
                                () => _decode_LDAPOID
                            )(_el);
                        },
                        requestValue: (_el: _Element): void => {
                            requestValue = $._decode_implicit<OCTET_STRING>(
                                () => $._decodeOctetString
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_ExtendedRequest,
                        _extension_additions_list_spec_for_ExtendedRequest,
                        _root_component_type_list_2_spec_for_ExtendedRequest,
                        (ext: _Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new ExtendedRequest(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ requestName,
                        requestValue,
                        _unrecognizedExtensionsList
                    );
                }
        );
    }
    return _cached_decoder_for_ExtendedRequest(el);
}
/**
 * @summary Encodes a(n) ExtendedRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedRequest, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedRequest(
    value: ExtendedRequest,
    elGetter: $.ASN1Encoder<ExtendedRequest>
) {
    if (!_cached_encoder_for_ExtendedRequest) {
        _cached_encoder_for_ExtendedRequest = $._encode_implicit(
            _TagClass.application,
            23,
            () =>
                function (
                    value: ExtendedRequest,
                    elGetter: $.ASN1Encoder<ExtendedRequest>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ $._encode_implicit(
                                        _TagClass.context,
                                        0,
                                        () => _encode_LDAPOID,
                                        $.BER
                                    )(value.requestName, $.BER),
                                    /* IF_ABSENT  */ value.requestValue ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              1,
                                              () => $._encodeOctetString,
                                              $.BER
                                          )(value.requestValue, $.BER),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_ExtendedRequest(value, elGetter);
}

/**
 * @summary ExtendedResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedResponse ::= [APPLICATION 24]  SEQUENCE {
 *   COMPONENTS OF LDAPResult,
 *   responseName   [10]  LDAPOID OPTIONAL,
 *   responseValue  [11]  OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ExtendedResponse {
    constructor(
        /**
         * @summary `resultCode`.
         * @public
         * @readonly
         */
        readonly resultCode: LDAPResult_resultCode /* REPLICATED_COMPONENT */,
        /**
         * @summary `matchedDN`.
         * @public
         * @readonly
         */
        readonly matchedDN: LDAPDN /* REPLICATED_COMPONENT */,
        /**
         * @summary `diagnosticMessage`.
         * @public
         * @readonly
         */
        readonly diagnosticMessage: LDAPString /* REPLICATED_COMPONENT */,
        /**
         * @summary `referral`.
         * @public
         * @readonly
         */
        readonly referral: OPTIONAL<Referral> /* REPLICATED_COMPONENT */,
        /**
         * @summary `responseName`.
         * @public
         * @readonly
         */
        readonly responseName: OPTIONAL<LDAPOID>,
        /**
         * @summary `responseValue`.
         * @public
         * @readonly
         */
        readonly responseValue: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ExtendedResponse
     * @description
     *
     * This takes an `object` and converts it to a `ExtendedResponse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtendedResponse`.
     * @returns {ExtendedResponse}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ExtendedResponse]: ExtendedResponse[_K] }>
    ): ExtendedResponse {
        return new ExtendedResponse(
            _o.resultCode,
            _o.matchedDN,
            _o.diagnosticMessage,
            _o.referral,
            _o.responseName,
            _o.responseValue,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `resultCode`
     * @public
     * @static
     */

    public static _enum_for_resultCode = _enum_for_LDAPResult_resultCode;
}
/**
 * @summary The Leading Root Component Types of ExtendedResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExtendedResponse: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "resultCode",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "matchedDN",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "diagnosticMessage",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "referral",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "responseName",
        true,
        $.hasTag(_TagClass.context, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "responseValue",
        true,
        $.hasTag(_TagClass.context, 11),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ExtendedResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExtendedResponse: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ExtendedResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExtendedResponse: $.ComponentSpec[] = [];
let _cached_decoder_for_ExtendedResponse: $.ASN1Decoder<
    ExtendedResponse
> | null = null;
let _cached_encoder_for_ExtendedResponse: $.ASN1Encoder<
    ExtendedResponse
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedResponse} The decoded data structure.
 */
export function _decode_ExtendedResponse(el: _Element) {
    if (!_cached_decoder_for_ExtendedResponse) {
        _cached_decoder_for_ExtendedResponse = $._decode_implicit<
            ExtendedResponse
        >(
            () =>
                function (el: _Element): ExtendedResponse {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let resultCode!: LDAPResult_resultCode;
                    let matchedDN!: LDAPDN;
                    let diagnosticMessage!: LDAPString;
                    let referral: OPTIONAL<Referral>;
                    let responseName: OPTIONAL<LDAPOID>;
                    let responseValue: OPTIONAL<OCTET_STRING>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        resultCode: (_el: _Element): void => {
                            resultCode = _decode_LDAPResult_resultCode(_el);
                        },
                        matchedDN: (_el: _Element): void => {
                            matchedDN = _decode_LDAPDN(_el);
                        },
                        diagnosticMessage: (_el: _Element): void => {
                            diagnosticMessage = _decode_LDAPString(_el);
                        },
                        referral: (_el: _Element): void => {
                            referral = $._decode_implicit<Referral>(
                                () => _decode_Referral
                            )(_el);
                        },
                        responseName: (_el: _Element): void => {
                            responseName = $._decode_implicit<LDAPOID>(
                                () => _decode_LDAPOID
                            )(_el);
                        },
                        responseValue: (_el: _Element): void => {
                            responseValue = $._decode_implicit<OCTET_STRING>(
                                () => $._decodeOctetString
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_ExtendedResponse,
                        _extension_additions_list_spec_for_ExtendedResponse,
                        _root_component_type_list_2_spec_for_ExtendedResponse,
                        (ext: _Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new ExtendedResponse(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ resultCode,
                        matchedDN,
                        diagnosticMessage,
                        referral,
                        responseName,
                        responseValue,
                        _unrecognizedExtensionsList
                    );
                }
        );
    }
    return _cached_decoder_for_ExtendedResponse(el);
}
/**
 * @summary Encodes a(n) ExtendedResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedResponse, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedResponse(
    value: ExtendedResponse,
    elGetter: $.ASN1Encoder<ExtendedResponse>
) {
    if (!_cached_encoder_for_ExtendedResponse) {
        _cached_encoder_for_ExtendedResponse = $._encode_implicit(
            _TagClass.application,
            24,
            () =>
                function (
                    value: ExtendedResponse,
                    elGetter: $.ASN1Encoder<ExtendedResponse>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_LDAPResult_resultCode(
                                        value.resultCode,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_LDAPDN(
                                        value.matchedDN,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_LDAPString(
                                        value.diagnosticMessage,
                                        $.BER
                                    ),
                                    /* IF_ABSENT  */ value.referral ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              3,
                                              () => _encode_Referral,
                                              $.BER
                                          )(value.referral, $.BER),
                                    /* IF_ABSENT  */ value.responseName ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              10,
                                              () => _encode_LDAPOID,
                                              $.BER
                                          )(value.responseName, $.BER),
                                    /* IF_ABSENT  */ value.responseValue ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              11,
                                              () => $._encodeOctetString,
                                              $.BER
                                          )(value.responseValue, $.BER),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_ExtendedResponse(value, elGetter);
}

/**
 * @summary IntermediateResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntermediateResponse ::= [APPLICATION 25]  SEQUENCE {
 *   responseName   [0]  LDAPOID OPTIONAL,
 *   responseValue  [1]  OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class IntermediateResponse {
    constructor(
        /**
         * @summary `responseName`.
         * @public
         * @readonly
         */
        readonly responseName: OPTIONAL<LDAPOID>,
        /**
         * @summary `responseValue`.
         * @public
         * @readonly
         */
        readonly responseValue: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IntermediateResponse
     * @description
     *
     * This takes an `object` and converts it to a `IntermediateResponse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IntermediateResponse`.
     * @returns {IntermediateResponse}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof IntermediateResponse]: IntermediateResponse[_K] }
        >
    ): IntermediateResponse {
        return new IntermediateResponse(
            _o.responseName,
            _o.responseValue,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of IntermediateResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IntermediateResponse: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "responseName",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "responseValue",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of IntermediateResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IntermediateResponse: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of IntermediateResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IntermediateResponse: $.ComponentSpec[] = [];
let _cached_decoder_for_IntermediateResponse: $.ASN1Decoder<
    IntermediateResponse
> | null = null;
let _cached_encoder_for_IntermediateResponse: $.ASN1Encoder<
    IntermediateResponse
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) IntermediateResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IntermediateResponse} The decoded data structure.
 */
export function _decode_IntermediateResponse(el: _Element) {
    if (!_cached_decoder_for_IntermediateResponse) {
        _cached_decoder_for_IntermediateResponse = $._decode_implicit<
            IntermediateResponse
        >(
            () =>
                function (el: _Element): IntermediateResponse {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let responseName: OPTIONAL<LDAPOID>;
                    let responseValue: OPTIONAL<OCTET_STRING>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        responseName: (_el: _Element): void => {
                            responseName = $._decode_implicit<LDAPOID>(
                                () => _decode_LDAPOID
                            )(_el);
                        },
                        responseValue: (_el: _Element): void => {
                            responseValue = $._decode_implicit<OCTET_STRING>(
                                () => $._decodeOctetString
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_IntermediateResponse,
                        _extension_additions_list_spec_for_IntermediateResponse,
                        _root_component_type_list_2_spec_for_IntermediateResponse,
                        (ext: _Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new IntermediateResponse(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ responseName,
                        responseValue,
                        _unrecognizedExtensionsList
                    );
                }
        );
    }
    return _cached_decoder_for_IntermediateResponse(el);
}
/**
 * @summary Encodes a(n) IntermediateResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntermediateResponse, encoded as an ASN.1 Element.
 */
export function _encode_IntermediateResponse(
    value: IntermediateResponse,
    elGetter: $.ASN1Encoder<IntermediateResponse>
) {
    if (!_cached_encoder_for_IntermediateResponse) {
        _cached_encoder_for_IntermediateResponse = $._encode_implicit(
            _TagClass.application,
            25,
            () =>
                function (
                    value: IntermediateResponse,
                    elGetter: $.ASN1Encoder<IntermediateResponse>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* IF_ABSENT  */ value.responseName ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              0,
                                              () => _encode_LDAPOID,
                                              $.BER
                                          )(value.responseName, $.BER),
                                    /* IF_ABSENT  */ value.responseValue ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              1,
                                              () => $._encodeOctetString,
                                              $.BER
                                          )(value.responseValue, $.BER),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_IntermediateResponse(value, elGetter);
}

/**
 * @summary LDAPMessage_protocolOp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LDAPMessage-protocolOp ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type LDAPMessage_protocolOp =
    | { bindRequest: BindRequest } /* CHOICE_ALT_ROOT */
    | { bindResponse: BindResponse } /* CHOICE_ALT_ROOT */
    | { unbindRequest: UnbindRequest } /* CHOICE_ALT_ROOT */
    | { searchRequest: SearchRequest } /* CHOICE_ALT_ROOT */
    | { searchResEntry: SearchResultEntry } /* CHOICE_ALT_ROOT */
    | { searchResDone: SearchResultDone } /* CHOICE_ALT_ROOT */
    | { searchResRef: SearchResultReference } /* CHOICE_ALT_ROOT */
    | { modifyRequest: ModifyRequest } /* CHOICE_ALT_ROOT */
    | { modifyResponse: ModifyResponse } /* CHOICE_ALT_ROOT */
    | { addRequest: AddRequest } /* CHOICE_ALT_ROOT */
    | { addResponse: AddResponse } /* CHOICE_ALT_ROOT */
    | { delRequest: DelRequest } /* CHOICE_ALT_ROOT */
    | { delResponse: DelResponse } /* CHOICE_ALT_ROOT */
    | { modDNRequest: ModifyDNRequest } /* CHOICE_ALT_ROOT */
    | { modDNResponse: ModifyDNResponse } /* CHOICE_ALT_ROOT */
    | { compareRequest: CompareRequest } /* CHOICE_ALT_ROOT */
    | { compareResponse: CompareResponse } /* CHOICE_ALT_ROOT */
    | { abandonRequest: AbandonRequest } /* CHOICE_ALT_ROOT */
    | { extendedReq: ExtendedRequest } /* CHOICE_ALT_ROOT */
    | { extendedResp: ExtendedResponse } /* CHOICE_ALT_ROOT */
    | { intermediateResponse: IntermediateResponse } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_LDAPMessage_protocolOp: $.ASN1Decoder<
    LDAPMessage_protocolOp
> | null = null;
let _cached_encoder_for_LDAPMessage_protocolOp: $.ASN1Encoder<
    LDAPMessage_protocolOp
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) LDAPMessage_protocolOp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPMessage_protocolOp} The decoded data structure.
 */
export function _decode_LDAPMessage_protocolOp(el: _Element) {
    if (!_cached_decoder_for_LDAPMessage_protocolOp) {
        _cached_decoder_for_LDAPMessage_protocolOp = $._decode_extensible_choice<
            LDAPMessage_protocolOp
        >({
            "APPLICATION 0": ["bindRequest", _decode_BindRequest],
            "APPLICATION 1": ["bindResponse", _decode_BindResponse],
            "APPLICATION 2": ["unbindRequest", _decode_UnbindRequest],
            "APPLICATION 3": ["searchRequest", _decode_SearchRequest],
            "APPLICATION 4": ["searchResEntry", _decode_SearchResultEntry],
            "APPLICATION 5": ["searchResDone", _decode_SearchResultDone],
            "APPLICATION 19": ["searchResRef", _decode_SearchResultReference],
            "APPLICATION 6": ["modifyRequest", _decode_ModifyRequest],
            "APPLICATION 7": ["modifyResponse", _decode_ModifyResponse],
            "APPLICATION 8": ["addRequest", _decode_AddRequest],
            "APPLICATION 9": ["addResponse", _decode_AddResponse],
            "APPLICATION 10": ["delRequest", _decode_DelRequest],
            "APPLICATION 11": ["delResponse", _decode_DelResponse],
            "APPLICATION 12": ["modDNRequest", _decode_ModifyDNRequest],
            "APPLICATION 13": ["modDNResponse", _decode_ModifyDNResponse],
            "APPLICATION 14": ["compareRequest", _decode_CompareRequest],
            "APPLICATION 15": ["compareResponse", _decode_CompareResponse],
            "APPLICATION 16": ["abandonRequest", _decode_AbandonRequest],
            "APPLICATION 23": ["extendedReq", _decode_ExtendedRequest],
            "APPLICATION 24": ["extendedResp", _decode_ExtendedResponse],
            "APPLICATION 25": [
                "intermediateResponse",
                _decode_IntermediateResponse,
            ],
        });
    }
    return _cached_decoder_for_LDAPMessage_protocolOp(el);
}
/**
 * @summary Encodes a(n) LDAPMessage_protocolOp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPMessage_protocolOp, encoded as an ASN.1 Element.
 */
export function _encode_LDAPMessage_protocolOp(
    value: LDAPMessage_protocolOp,
    elGetter: $.ASN1Encoder<LDAPMessage_protocolOp>
) {
    if (!_cached_encoder_for_LDAPMessage_protocolOp) {
        _cached_encoder_for_LDAPMessage_protocolOp = $._encode_choice<
            LDAPMessage_protocolOp
        >(
            {
                bindRequest: _encode_BindRequest,
                bindResponse: _encode_BindResponse,
                unbindRequest: _encode_UnbindRequest,
                searchRequest: _encode_SearchRequest,
                searchResEntry: _encode_SearchResultEntry,
                searchResDone: _encode_SearchResultDone,
                searchResRef: _encode_SearchResultReference,
                modifyRequest: _encode_ModifyRequest,
                modifyResponse: _encode_ModifyResponse,
                addRequest: _encode_AddRequest,
                addResponse: _encode_AddResponse,
                delRequest: _encode_DelRequest,
                delResponse: _encode_DelResponse,
                modDNRequest: _encode_ModifyDNRequest,
                modDNResponse: _encode_ModifyDNResponse,
                compareRequest: _encode_CompareRequest,
                compareResponse: _encode_CompareResponse,
                abandonRequest: _encode_AbandonRequest,
                extendedReq: _encode_ExtendedRequest,
                extendedResp: _encode_ExtendedResponse,
                intermediateResponse: _encode_IntermediateResponse,
            },
            $.BER
        );
    }
    return _cached_encoder_for_LDAPMessage_protocolOp(value, elGetter);
}

/**
 * @summary Control
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Control ::= SEQUENCE {
 *   controlType   LDAPOID,
 *   criticality   BOOLEAN DEFAULT FALSE,
 *   controlValue  OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Control {
    constructor(
        /**
         * @summary `controlType`.
         * @public
         * @readonly
         */
        readonly controlType: LDAPOID,
        /**
         * @summary `criticality`.
         * @public
         * @readonly
         */
        readonly criticality: OPTIONAL<BOOLEAN>,
        /**
         * @summary `controlValue`.
         * @public
         * @readonly
         */
        readonly controlValue: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Control
     * @description
     *
     * This takes an `object` and converts it to a `Control`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Control`.
     * @returns {Control}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Control]: Control[_K] }>
    ): Control {
        return new Control(
            _o.controlType,
            _o.criticality,
            _o.controlValue,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `criticality`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_criticality() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of Control
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Control: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "controlType",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "criticality",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "controlValue",
        true,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Control
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Control: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Control
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Control: $.ComponentSpec[] = [];
let _cached_decoder_for_Control: $.ASN1Decoder<Control> | null = null;
let _cached_encoder_for_Control: $.ASN1Encoder<Control> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Control
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Control} The decoded data structure.
 */
export function _decode_Control(el: _Element) {
    if (!_cached_decoder_for_Control) {
        _cached_decoder_for_Control = function (el: _Element): Control {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let controlType!: LDAPOID;
            let criticality: OPTIONAL<BOOLEAN> =
                Control._default_value_for_criticality;
            let controlValue: OPTIONAL<OCTET_STRING>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                controlType: (_el: _Element): void => {
                    controlType = _decode_LDAPOID(_el);
                },
                criticality: (_el: _Element): void => {
                    criticality = $._decodeBoolean(_el);
                },
                controlValue: (_el: _Element): void => {
                    controlValue = $._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Control,
                _extension_additions_list_spec_for_Control,
                _root_component_type_list_2_spec_for_Control,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Control(
                /* SEQUENCE_CONSTRUCTOR_CALL */ controlType,
                criticality,
                controlValue,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Control(el);
}
/**
 * @summary Encodes a(n) Control into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Control, encoded as an ASN.1 Element.
 */
export function _encode_Control(
    value: Control,
    elGetter: $.ASN1Encoder<Control>
) {
    if (!_cached_encoder_for_Control) {
        _cached_encoder_for_Control = function (
            value: Control,
            elGetter: $.ASN1Encoder<Control>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_LDAPOID(
                                value.controlType,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.criticality === undefined ||
                            $.deepEq(
                                value.criticality,
                                Control._default_value_for_criticality
                            )
                                ? undefined
                                : $._encodeBoolean(value.criticality, $.BER),
                            /* IF_ABSENT  */ value.controlValue === undefined
                                ? undefined
                                : $._encodeOctetString(
                                      value.controlValue,
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
    return _cached_encoder_for_Control(value, elGetter);
}

export type Controls<> = Control[]; // SequenceOfType
let _cached_decoder_for_Controls: $.ASN1Decoder<Controls> | null = null;
let _cached_encoder_for_Controls: $.ASN1Encoder<Controls> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Controls
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Controls} The decoded data structure.
 */
export function _decode_Controls(el: _Element) {
    if (!_cached_decoder_for_Controls) {
        _cached_decoder_for_Controls = $._decodeSequenceOf<Control>(
            () => _decode_Control
        );
    }
    return _cached_decoder_for_Controls(el);
}
/**
 * @summary Encodes a(n) Controls into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Controls, encoded as an ASN.1 Element.
 */
export function _encode_Controls(
    value: Controls,
    elGetter: $.ASN1Encoder<Controls>
) {
    if (!_cached_encoder_for_Controls) {
        _cached_encoder_for_Controls = $._encodeSequenceOf<Control>(
            () => _encode_Control,
            $.BER
        );
    }
    return _cached_encoder_for_Controls(value, elGetter);
}

/**
 * @summary LDAPMessage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LDAPMessage ::= SEQUENCE {
 *   messageID   MessageID,
 *   protocolOp
 *     CHOICE {bindRequest           BindRequest,
 *             bindResponse          BindResponse,
 *             unbindRequest         UnbindRequest,
 *             searchRequest         SearchRequest,
 *             searchResEntry        SearchResultEntry,
 *             searchResDone         SearchResultDone,
 *             searchResRef          SearchResultReference,
 *             modifyRequest         ModifyRequest,
 *             modifyResponse        ModifyResponse,
 *             addRequest            AddRequest,
 *             addResponse           AddResponse,
 *             delRequest            DelRequest,
 *             delResponse           DelResponse,
 *             modDNRequest          ModifyDNRequest,
 *             modDNResponse         ModifyDNResponse,
 *             compareRequest        CompareRequest,
 *             compareResponse       CompareResponse,
 *             abandonRequest        AbandonRequest,
 *             extendedReq           ExtendedRequest,
 *             extendedResp          ExtendedResponse,
 *             ...,
 *             intermediateResponse  IntermediateResponse},
 *   controls    [0]  Controls OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class LDAPMessage {
    constructor(
        /**
         * @summary `messageID`.
         * @public
         * @readonly
         */
        readonly messageID: MessageID,
        /**
         * @summary `protocolOp`.
         * @public
         * @readonly
         */
        readonly protocolOp: LDAPMessage_protocolOp,
        /**
         * @summary `controls`.
         * @public
         * @readonly
         */
        readonly controls: OPTIONAL<Controls>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LDAPMessage
     * @description
     *
     * This takes an `object` and converts it to a `LDAPMessage`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LDAPMessage`.
     * @returns {LDAPMessage}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof LDAPMessage]: LDAPMessage[_K] }>
    ): LDAPMessage {
        return new LDAPMessage(
            _o.messageID,
            _o.protocolOp,
            _o.controls,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of LDAPMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LDAPMessage: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "messageID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("protocolOp", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "controls",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of LDAPMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LDAPMessage: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of LDAPMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LDAPMessage: $.ComponentSpec[] = [];
let _cached_decoder_for_LDAPMessage: $.ASN1Decoder<LDAPMessage> | null = null;
let _cached_encoder_for_LDAPMessage: $.ASN1Encoder<LDAPMessage> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) LDAPMessage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPMessage} The decoded data structure.
 */
export function _decode_LDAPMessage(el: _Element) {
    if (!_cached_decoder_for_LDAPMessage) {
        _cached_decoder_for_LDAPMessage = function (el: _Element): LDAPMessage {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let messageID!: MessageID;
            let protocolOp!: LDAPMessage_protocolOp;
            let controls: OPTIONAL<Controls>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                messageID: (_el: _Element): void => {
                    messageID = _decode_MessageID(_el);
                },
                protocolOp: (_el: _Element): void => {
                    protocolOp = _decode_LDAPMessage_protocolOp(_el);
                },
                controls: (_el: _Element): void => {
                    controls = $._decode_implicit<Controls>(
                        () => _decode_Controls
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_LDAPMessage,
                _extension_additions_list_spec_for_LDAPMessage,
                _root_component_type_list_2_spec_for_LDAPMessage,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new LDAPMessage(
                /* SEQUENCE_CONSTRUCTOR_CALL */ messageID,
                protocolOp,
                controls,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_LDAPMessage(el);
}
/**
 * @summary Encodes a(n) LDAPMessage into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPMessage, encoded as an ASN.1 Element.
 */
export function _encode_LDAPMessage(
    value: LDAPMessage,
    elGetter: $.ASN1Encoder<LDAPMessage>
) {
    if (!_cached_encoder_for_LDAPMessage) {
        _cached_encoder_for_LDAPMessage = function (
            value: LDAPMessage,
            elGetter: $.ASN1Encoder<LDAPMessage>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_MessageID(
                                value.messageID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_LDAPMessage_protocolOp(
                                value.protocolOp,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.controls === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Controls,
                                      $.BER
                                  )(value.controls, $.BER),
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
    return _cached_encoder_for_LDAPMessage(value, elGetter);
}

/**
 * @summary maxInt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * maxInt INTEGER ::= 2147483647
 * ```
 *
 * @constant
 */
export const maxInt: INTEGER = 2147483647;

/* END_MODULE Lightweight-Directory-Access-Protocol-V3 */
/* eslint-enable */
