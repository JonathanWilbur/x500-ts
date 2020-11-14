/**
 * @module PkiPMIProtocolSpecifications
 * @summary The ASN.1 module `PkiPMIProtocolSpecifications`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.pkiPMIProtocolSpecifications.8
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
    GeneralizedTime,
    INTEGER,
    NULL,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    UTCTime,
    UTF8String,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
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
    _enum_for_CRLReason,
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
    WRAPPED_PDU,
    _decode_PkiWaError,
    _encode_PkiWaError,
} from "./PkiPmiWrapper";
import { id_cmsct } from "./UsefulDefinitions";
export {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "./AttributeCertificateDefinitions";
export {
    ALGORITHM,
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
    Version_v1 /* IMPORTED_NAMED_INTEGER */,
    Version_v2 /* IMPORTED_NAMED_INTEGER */,
    Version_v3 /* IMPORTED_NAMED_INTEGER */,
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
    CRLReason_aACompromise /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_affiliationChanged /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_cACompromise /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_certificateHold /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_cessationOfOperation /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_keyCompromise /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_privilegeWithdrawn /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_removeFromCRL /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_superseded /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_unspecified /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_weakAlgorithmOrKey /* IMPORTED_ENUMERATION_ITEM */,
    SubjectKeyIdentifier,
    _decode_CRLReason,
    _decode_SubjectKeyIdentifier,
    _encode_CRLReason,
    _encode_SubjectKeyIdentifier,
    _enum_for_CRLReason,
} from "./CertificateExtensions";
export {
    Attribute,
    ATTRIBUTE,
    Name,
    SupportedAttributes,
    _decode_Attribute,
    _decode_Name,
    _encode_Attribute,
    _encode_Name,
} from "./InformationFramework";
export {
    PkiWaError,
    PkiWaError_certificationPathFailure /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_decryptionFailed /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_dhAlgorithmMismatch /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_incompleteCertPath /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_invalideDhPublickey /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_invalidKeyingMaterial /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_invalidParmsForSymEncryptAlgorithms /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_invalidPduSyntax /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_invalidSignature /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_keyEncAlgorithmParametersMissing /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_keyEncAlgorithmParametersNotAllowed /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_missingMandatoryAttributes /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unexpectedPduType /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unknownDHpkCetificate /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unsupportedKeyWrappingAlgorithm /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unsupportedPduType /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unsupportedSignatureAlgorithm /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unsupportedWrapperVersion /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unwantedAttribute /* IMPORTED_ENUMERATION_ITEM */,
    WRAPPED_PDU,
    _decode_PkiWaError,
    _encode_PkiWaError,
    _enum_for_PkiWaError,
} from "./PkiPmiWrapper";
export {
    objectIdentifierMatch,
    octetStringMatch,
} from "./SelectedAttributeTypes";
export {
    attributeCertificateDefinitions,
    authenticationFramework,
    certificateExtensions,
    id_cmsct,
    informationFramework,
    pkiPmiWrapper,
    selectedAttributeTypes,
} from "./UsefulDefinitions";

/**
 * @summary AVMPversion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AVMPversion ::= ENUMERATED { v1(1), v2(2), v3(3), ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_AVMPversion {
    v1 = 1,
    v2 = 2,
    v3 = 3,
}
/**
 * @summary AVMPversion
 */
export type AVMPversion = _enum_for_AVMPversion | ENUMERATED;
/**
 * @summary AVMPversion_v1
 * @constant
 * @type {number}
 */
export const AVMPversion_v1: AVMPversion = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMPversion_v2
 * @constant
 * @type {number}
 */
export const AVMPversion_v2: AVMPversion = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMPversion_v3
 * @constant
 * @type {number}
 */
export const AVMPversion_v3: AVMPversion = 3; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_AVMPversion: $.ASN1Decoder<AVMPversion> | null = null;
let _cached_encoder_for_AVMPversion: $.ASN1Encoder<AVMPversion> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AVMPversion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AVMPversion} The decoded data structure.
 */
export function _decode_AVMPversion(el: _Element) {
    if (!_cached_decoder_for_AVMPversion) {
        _cached_decoder_for_AVMPversion = $._decodeEnumerated;
    }
    return _cached_decoder_for_AVMPversion(el);
}
/**
 * @summary Encodes a(n) AVMPversion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AVMPversion, encoded as an ASN.1 Element.
 */
export function _encode_AVMPversion(
    value: AVMPversion,
    elGetter: $.ASN1Encoder<AVMPversion>
) {
    if (!_cached_encoder_for_AVMPversion) {
        _cached_encoder_for_AVMPversion = $._encodeEnumerated;
    }
    return _cached_encoder_for_AVMPversion(value, elGetter);
}

/**
 * @summary AVMPsequence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AVMPsequence  ::=  INTEGER (1..MAX)
 * ```
 */
export type AVMPsequence = INTEGER;
let _cached_decoder_for_AVMPsequence: $.ASN1Decoder<AVMPsequence> | null = null;
let _cached_encoder_for_AVMPsequence: $.ASN1Encoder<AVMPsequence> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AVMPsequence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AVMPsequence} The decoded data structure.
 */
export function _decode_AVMPsequence(el: _Element) {
    if (!_cached_decoder_for_AVMPsequence) {
        _cached_decoder_for_AVMPsequence = $._decodeInteger;
    }
    return _cached_decoder_for_AVMPsequence(el);
}
/**
 * @summary Encodes a(n) AVMPsequence into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AVMPsequence, encoded as an ASN.1 Element.
 */
export function _encode_AVMPsequence(
    value: AVMPsequence,
    elGetter: $.ASN1Encoder<AVMPsequence>
) {
    if (!_cached_encoder_for_AVMPsequence) {
        _cached_encoder_for_AVMPsequence = $._encodeInteger;
    }
    return _cached_encoder_for_AVMPsequence(value, elGetter);
}

/**
 * @summary AVMPcommonComponents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AVMPcommonComponents ::= SEQUENCE {
 *   version    AVMPversion DEFAULT v1,
 *   timeStamp  GeneralizedTime,
 *   sequence   AVMPsequence,
 *   ... }
 * ```
 *
 * @class
 */
export class AVMPcommonComponents {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<AVMPversion>,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: GeneralizedTime,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: AVMPsequence,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AVMPcommonComponents
     * @description
     *
     * This takes an `object` and converts it to a `AVMPcommonComponents`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AVMPcommonComponents`.
     * @returns {AVMPcommonComponents}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof AVMPcommonComponents]: AVMPcommonComponents[_K] }
        >
    ): AVMPcommonComponents {
        return new AVMPcommonComponents(
            _o.version,
            _o.timeStamp,
            _o.sequence,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return AVMPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_AVMPversion;
}
/**
 * @summary The Leading Root Component Types of AVMPcommonComponents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AVMPcommonComponents: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "timeStamp",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AVMPcommonComponents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AVMPcommonComponents: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AVMPcommonComponents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AVMPcommonComponents: $.ComponentSpec[] = [];
let _cached_decoder_for_AVMPcommonComponents: $.ASN1Decoder<
    AVMPcommonComponents
> | null = null;
let _cached_encoder_for_AVMPcommonComponents: $.ASN1Encoder<
    AVMPcommonComponents
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AVMPcommonComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AVMPcommonComponents} The decoded data structure.
 */
export function _decode_AVMPcommonComponents(el: _Element) {
    if (!_cached_decoder_for_AVMPcommonComponents) {
        _cached_decoder_for_AVMPcommonComponents = function (
            el: _Element
        ): AVMPcommonComponents {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<AVMPversion> =
                AVMPcommonComponents._default_value_for_version;
            let timeStamp!: GeneralizedTime;
            let sequence!: AVMPsequence;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: _Element): void => {
                    timeStamp = $._decodeGeneralizedTime(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AVMPcommonComponents,
                _extension_additions_list_spec_for_AVMPcommonComponents,
                _root_component_type_list_2_spec_for_AVMPcommonComponents,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) AVMPcommonComponents into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AVMPcommonComponents, encoded as an ASN.1 Element.
 */
export function _encode_AVMPcommonComponents(
    value: AVMPcommonComponents,
    elGetter: $.ASN1Encoder<AVMPcommonComponents>
) {
    if (!_cached_encoder_for_AVMPcommonComponents) {
        _cached_encoder_for_AVMPcommonComponents = function (
            value: AVMPcommonComponents,
            elGetter: $.ASN1Encoder<AVMPcommonComponents>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                AVMPcommonComponents._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(value.version, $.BER),
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.timeStamp,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
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
    return _cached_encoder_for_AVMPcommonComponents(value, elGetter);
}

/**
 * @summary CertReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReq ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   ... }
 * ```
 *
 * @class
 */
export class CertReq {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<AVMPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: GeneralizedTime /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReq
     * @description
     *
     * This takes an `object` and converts it to a `CertReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReq`.
     * @returns {CertReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertReq]: CertReq[_K] }>
    ): CertReq {
        return new CertReq(
            _o.version,
            _o.timeStamp,
            _o.sequence,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return AVMPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_AVMPversion;
}
/**
 * @summary The Leading Root Component Types of CertReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "timeStamp",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReq: $.ComponentSpec[] = [];
let _cached_decoder_for_CertReq: $.ASN1Decoder<CertReq> | null = null;
let _cached_encoder_for_CertReq: $.ASN1Encoder<CertReq> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReq} The decoded data structure.
 */
export function _decode_CertReq(el: _Element) {
    if (!_cached_decoder_for_CertReq) {
        _cached_decoder_for_CertReq = function (el: _Element): CertReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<AVMPversion> =
                CertReq._default_value_for_version;
            let timeStamp!: GeneralizedTime;
            let sequence!: AVMPsequence;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: _Element): void => {
                    timeStamp = $._decodeGeneralizedTime(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertReq,
                _extension_additions_list_spec_for_CertReq,
                _root_component_type_list_2_spec_for_CertReq,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) CertReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReq, encoded as an ASN.1 Element.
 */
export function _encode_CertReq(
    value: CertReq,
    elGetter: $.ASN1Encoder<CertReq>
) {
    if (!_cached_encoder_for_CertReq) {
        _cached_encoder_for_CertReq = function (
            value: CertReq,
            elGetter: $.ASN1Encoder<CertReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CertReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(value.version, $.BER),
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.timeStamp,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
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
    return _cached_encoder_for_CertReq(value, elGetter);
}

/**
 * @summary id_certReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-certReq              OBJECT IDENTIFIER ::= {id-cmsct 0}
 * ```
 *
 * @constant
 */
export const id_certReq: OBJECT_IDENTIFIER = new _OID([0], id_cmsct);

/**
 * @summary certReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certReq WRAPPED-PDU ::= {
 *                 CertReq
 *   IDENTIFIED BY id-certReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const certReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertReq,
    },
    encoderFor: {
        "&Type": _encode_CertReq,
    },
    "&id": id_certReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary CertOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertOK ::= SEQUENCE {
 *   dhCert  Certificate,
 *   ... }
 * ```
 *
 * @class
 */
export class CertOK {
    constructor(
        /**
         * @summary `dhCert`.
         * @public
         * @readonly
         */
        readonly dhCert: Certificate,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertOK
     * @description
     *
     * This takes an `object` and converts it to a `CertOK`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertOK`.
     * @returns {CertOK}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertOK]: CertOK[_K] }>
    ): CertOK {
        return new CertOK(_o.dhCert, _o._unrecognizedExtensionsList);
    }
}
/**
 * @summary The Leading Root Component Types of CertOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertOK: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "dhCert",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertOK: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertOK: $.ComponentSpec[] = [];
let _cached_decoder_for_CertOK: $.ASN1Decoder<CertOK> | null = null;
let _cached_encoder_for_CertOK: $.ASN1Encoder<CertOK> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertOK} The decoded data structure.
 */
export function _decode_CertOK(el: _Element) {
    if (!_cached_decoder_for_CertOK) {
        _cached_decoder_for_CertOK = function (el: _Element): CertOK {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertOK contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "dhCert";
            let dhCert!: Certificate;
            dhCert = _decode_Certificate(sequence[0]);
            return new CertOK(dhCert, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertOK(el);
}
/**
 * @summary Encodes a(n) CertOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertOK, encoded as an ASN.1 Element.
 */
export function _encode_CertOK(value: CertOK, elGetter: $.ASN1Encoder<CertOK>) {
    if (!_cached_encoder_for_CertOK) {
        _cached_encoder_for_CertOK = function (
            value: CertOK,
            elGetter: $.ASN1Encoder<CertOK>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Certificate(
                                value.dhCert,
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
    return _cached_encoder_for_CertOK(value, elGetter);
}

/**
 * @summary AVMP_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AVMP-error ::= ENUMERATED {
 *   noReason                           (0),
 *   unknownAvlEntity                   (1),
 *   unknownContentType                 (2),
 *   unsupportedAVMPversion             (3),
 *   missingContent                     (4),
 *   missingContentComponent            (5),
 *   invalidContentComponent            (6),
 *   sequenceError                      (7),
 *   protocolError                      (8),
 *   invalidAvlSignature                (9),
 *   duplicateAVL                       (10),
 *   missingAvlComponent                (11),
 *   invalidAvlVersion                  (12),
 *   notAllowedForConstrainedAVLEntity  (13),
 *   constrainedRequired                (14),
 *   nonConstrainedRequired             (15),
 *   unsupportedCriticalEntryExtension  (16),
 *   unsupportedCriticalExtension       (17),
 *   maxAVLsExceeded                    (18),
 *   unknownCert                        (19),
 *   unknownAVL                         (20),
 *   unsupportedScopeRestriction        (21),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_AVMP_error {
    noReason = 0,
    unknownAvlEntity = 1,
    unknownContentType = 2,
    unsupportedAVMPversion = 3,
    missingContent = 4,
    missingContentComponent = 5,
    invalidContentComponent = 6,
    sequenceError = 7,
    protocolError = 8,
    invalidAvlSignature = 9,
    duplicateAVL = 10,
    missingAvlComponent = 11,
    invalidAvlVersion = 12,
    notAllowedForConstrainedAVLEntity = 13,
    constrainedRequired = 14,
    nonConstrainedRequired = 15,
    unsupportedCriticalEntryExtension = 16,
    unsupportedCriticalExtension = 17,
    maxAVLsExceeded = 18,
    unknownCert = 19,
    unknownAVL = 20,
    unsupportedScopeRestriction = 21,
}
/**
 * @summary AVMP_error
 */
export type AVMP_error = _enum_for_AVMP_error | ENUMERATED;
/**
 * @summary AVMP_error_noReason
 * @constant
 * @type {number}
 */
export const AVMP_error_noReason: AVMP_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_unknownAvlEntity
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownAvlEntity: AVMP_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_unknownContentType
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownContentType: AVMP_error = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_unsupportedAVMPversion
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedAVMPversion: AVMP_error = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_missingContent
 * @constant
 * @type {number}
 */
export const AVMP_error_missingContent: AVMP_error = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_missingContentComponent
 * @constant
 * @type {number}
 */
export const AVMP_error_missingContentComponent: AVMP_error = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_invalidContentComponent
 * @constant
 * @type {number}
 */
export const AVMP_error_invalidContentComponent: AVMP_error = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_sequenceError
 * @constant
 * @type {number}
 */
export const AVMP_error_sequenceError: AVMP_error = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_protocolError
 * @constant
 * @type {number}
 */
export const AVMP_error_protocolError: AVMP_error = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_invalidAvlSignature
 * @constant
 * @type {number}
 */
export const AVMP_error_invalidAvlSignature: AVMP_error = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_duplicateAVL
 * @constant
 * @type {number}
 */
export const AVMP_error_duplicateAVL: AVMP_error = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_missingAvlComponent
 * @constant
 * @type {number}
 */
export const AVMP_error_missingAvlComponent: AVMP_error = 11; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_invalidAvlVersion
 * @constant
 * @type {number}
 */
export const AVMP_error_invalidAvlVersion: AVMP_error = 12; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_notAllowedForConstrainedAVLEntity
 * @constant
 * @type {number}
 */
export const AVMP_error_notAllowedForConstrainedAVLEntity: AVMP_error = 13; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_constrainedRequired
 * @constant
 * @type {number}
 */
export const AVMP_error_constrainedRequired: AVMP_error = 14; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_nonConstrainedRequired
 * @constant
 * @type {number}
 */
export const AVMP_error_nonConstrainedRequired: AVMP_error = 15; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_unsupportedCriticalEntryExtension
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedCriticalEntryExtension: AVMP_error = 16; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_unsupportedCriticalExtension
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedCriticalExtension: AVMP_error = 17; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_maxAVLsExceeded
 * @constant
 * @type {number}
 */
export const AVMP_error_maxAVLsExceeded: AVMP_error = 18; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_unknownCert
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownCert: AVMP_error = 19; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_unknownAVL
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownAVL: AVMP_error = 20; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_unsupportedScopeRestriction
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedScopeRestriction: AVMP_error = 21; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_AVMP_error: $.ASN1Decoder<AVMP_error> | null = null;
let _cached_encoder_for_AVMP_error: $.ASN1Encoder<AVMP_error> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AVMP_error
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AVMP_error} The decoded data structure.
 */
export function _decode_AVMP_error(el: _Element) {
    if (!_cached_decoder_for_AVMP_error) {
        _cached_decoder_for_AVMP_error = $._decodeEnumerated;
    }
    return _cached_decoder_for_AVMP_error(el);
}
/**
 * @summary Encodes a(n) AVMP_error into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AVMP_error, encoded as an ASN.1 Element.
 */
export function _encode_AVMP_error(
    value: AVMP_error,
    elGetter: $.ASN1Encoder<AVMP_error>
) {
    if (!_cached_encoder_for_AVMP_error) {
        _cached_encoder_for_AVMP_error = $._encodeEnumerated;
    }
    return _cached_encoder_for_AVMP_error(value, elGetter);
}

/**
 * @summary CertErr_notOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertErr-notOK ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertErr_notOK =
    | { wrErr: PkiWaError } /* CHOICE_ALT_ROOT */
    | { avmpErr: AVMP_error } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertErr_notOK: $.ASN1Decoder<
    CertErr_notOK
> | null = null;
let _cached_encoder_for_CertErr_notOK: $.ASN1Encoder<
    CertErr_notOK
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertErr_notOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertErr_notOK} The decoded data structure.
 */
export function _decode_CertErr_notOK(el: _Element) {
    if (!_cached_decoder_for_CertErr_notOK) {
        _cached_decoder_for_CertErr_notOK = $._decode_extensible_choice<
            CertErr_notOK
        >({
            "CONTEXT 0": [
                "wrErr",
                $._decode_explicit<PkiWaError>(() => _decode_PkiWaError),
            ],
            "CONTEXT 1": [
                "avmpErr",
                $._decode_explicit<AVMP_error>(() => _decode_AVMP_error),
            ],
        });
    }
    return _cached_decoder_for_CertErr_notOK(el);
}
/**
 * @summary Encodes a(n) CertErr_notOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertErr_notOK, encoded as an ASN.1 Element.
 */
export function _encode_CertErr_notOK(
    value: CertErr_notOK,
    elGetter: $.ASN1Encoder<CertErr_notOK>
) {
    if (!_cached_encoder_for_CertErr_notOK) {
        _cached_encoder_for_CertErr_notOK = $._encode_choice<CertErr_notOK>(
            {
                wrErr: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_PkiWaError,
                    $.BER
                ),
                avmpErr: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_AVMP_error,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertErr_notOK(value, elGetter);
}

export type Notifications<> = Attribute[]; // SequenceOfType
let _cached_decoder_for_Notifications: $.ASN1Decoder<
    Notifications
> | null = null;
let _cached_encoder_for_Notifications: $.ASN1Encoder<
    Notifications
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Notifications
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Notifications} The decoded data structure.
 */
export function _decode_Notifications(el: _Element) {
    if (!_cached_decoder_for_Notifications) {
        _cached_decoder_for_Notifications = $._decodeSequenceOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_Notifications(el);
}
/**
 * @summary Encodes a(n) Notifications into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Notifications, encoded as an ASN.1 Element.
 */
export function _encode_Notifications(
    value: Notifications,
    elGetter: $.ASN1Encoder<Notifications>
) {
    if (!_cached_encoder_for_Notifications) {
        _cached_encoder_for_Notifications = $._encodeSequenceOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_Notifications(value, elGetter);
}

/**
 * @summary CertErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertErr ::= SEQUENCE {
 *   notOK  CHOICE {
 *     wrErr   [0]  PkiWaError,
 *     avmpErr [1]  AVMP-error,
 *     ... },
 *   note   Notifications OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class CertErr {
    constructor(
        /**
         * @summary `notOK`.
         * @public
         * @readonly
         */
        readonly notOK: CertErr_notOK,
        /**
         * @summary `note`.
         * @public
         * @readonly
         */
        readonly note: OPTIONAL<Notifications>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertErr
     * @description
     *
     * This takes an `object` and converts it to a `CertErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertErr`.
     * @returns {CertErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertErr]: CertErr[_K] }>
    ): CertErr {
        return new CertErr(_o.notOK, _o.note, _o._unrecognizedExtensionsList);
    }
}
/**
 * @summary The Leading Root Component Types of CertErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertErr: $.ComponentSpec[] = [
    new $.ComponentSpec("notOK", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "note",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertErr: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertErr: $.ComponentSpec[] = [];
let _cached_decoder_for_CertErr: $.ASN1Decoder<CertErr> | null = null;
let _cached_encoder_for_CertErr: $.ASN1Encoder<CertErr> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertErr} The decoded data structure.
 */
export function _decode_CertErr(el: _Element) {
    if (!_cached_decoder_for_CertErr) {
        _cached_decoder_for_CertErr = function (el: _Element): CertErr {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let notOK!: CertErr_notOK;
            let note: OPTIONAL<Notifications>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                notOK: (_el: _Element): void => {
                    notOK = _decode_CertErr_notOK(_el);
                },
                note: (_el: _Element): void => {
                    note = _decode_Notifications(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertErr,
                _extension_additions_list_spec_for_CertErr,
                _root_component_type_list_2_spec_for_CertErr,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) CertErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertErr, encoded as an ASN.1 Element.
 */
export function _encode_CertErr(
    value: CertErr,
    elGetter: $.ASN1Encoder<CertErr>
) {
    if (!_cached_encoder_for_CertErr) {
        _cached_encoder_for_CertErr = function (
            value: CertErr,
            elGetter: $.ASN1Encoder<CertErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertErr_notOK(
                                value.notOK,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.note === undefined
                                ? undefined
                                : _encode_Notifications(value.note, $.BER),
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
    return _cached_encoder_for_CertErr(value, elGetter);
}

/**
 * @summary CertRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertRsp_result =
    | { success: CertOK } /* CHOICE_ALT_ROOT */
    | { failure: CertErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertRsp_result: $.ASN1Decoder<
    CertRsp_result
> | null = null;
let _cached_encoder_for_CertRsp_result: $.ASN1Encoder<
    CertRsp_result
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertRsp_result} The decoded data structure.
 */
export function _decode_CertRsp_result(el: _Element) {
    if (!_cached_decoder_for_CertRsp_result) {
        _cached_decoder_for_CertRsp_result = $._decode_extensible_choice<
            CertRsp_result
        >({
            "CONTEXT 0": [
                "success",
                $._decode_explicit<CertOK>(() => _decode_CertOK),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_explicit<CertErr>(() => _decode_CertErr),
            ],
        });
    }
    return _cached_decoder_for_CertRsp_result(el);
}
/**
 * @summary Encodes a(n) CertRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_CertRsp_result(
    value: CertRsp_result,
    elGetter: $.ASN1Encoder<CertRsp_result>
) {
    if (!_cached_encoder_for_CertRsp_result) {
        _cached_encoder_for_CertRsp_result = $._encode_choice<CertRsp_result>(
            {
                success: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertOK,
                    $.BER
                ),
                failure: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertRsp_result(value, elGetter);
}

/**
 * @summary CertRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertRsp ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   result        CHOICE {
 *     success       [0]  CertOK,
 *     failure       [1]  CertErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertRsp {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<AVMPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: GeneralizedTime /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: CertRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertRsp
     * @description
     *
     * This takes an `object` and converts it to a `CertRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertRsp`.
     * @returns {CertRsp}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertRsp]: CertRsp[_K] }>
    ): CertRsp {
        return new CertRsp(
            _o.version,
            _o.timeStamp,
            _o.sequence,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return AVMPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_AVMPversion;
}
/**
 * @summary The Leading Root Component Types of CertRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "timeStamp",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of CertRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertRsp: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertRsp: $.ComponentSpec[] = [];
let _cached_decoder_for_CertRsp: $.ASN1Decoder<CertRsp> | null = null;
let _cached_encoder_for_CertRsp: $.ASN1Encoder<CertRsp> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertRsp} The decoded data structure.
 */
export function _decode_CertRsp(el: _Element) {
    if (!_cached_decoder_for_CertRsp) {
        _cached_decoder_for_CertRsp = function (el: _Element): CertRsp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<AVMPversion> =
                CertRsp._default_value_for_version;
            let timeStamp!: GeneralizedTime;
            let sequence!: AVMPsequence;
            let result!: CertRsp_result;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: _Element): void => {
                    timeStamp = $._decodeGeneralizedTime(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                result: (_el: _Element): void => {
                    result = _decode_CertRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertRsp,
                _extension_additions_list_spec_for_CertRsp,
                _root_component_type_list_2_spec_for_CertRsp,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) CertRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertRsp, encoded as an ASN.1 Element.
 */
export function _encode_CertRsp(
    value: CertRsp,
    elGetter: $.ASN1Encoder<CertRsp>
) {
    if (!_cached_encoder_for_CertRsp) {
        _cached_encoder_for_CertRsp = function (
            value: CertRsp,
            elGetter: $.ASN1Encoder<CertRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CertRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(value.version, $.BER),
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.timeStamp,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertRsp_result(
                                value.result,
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
    return _cached_encoder_for_CertRsp(value, elGetter);
}

/**
 * @summary id_certRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-certRsp              OBJECT IDENTIFIER ::= {id-cmsct 1}
 * ```
 *
 * @constant
 */
export const id_certRsp: OBJECT_IDENTIFIER = new _OID([1], id_cmsct);

/**
 * @summary certRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certRsp WRAPPED-PDU ::= {
 *                 CertRsp
 *   IDENTIFIED BY id-certRsp }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const certRsp: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertRsp,
    },
    encoderFor: {
        "&Type": _encode_CertRsp,
    },
    "&id": id_certRsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary AddAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddAvlReq ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   certlist      CertAVL,
 *   ... }
 * ```
 *
 * @class
 */
export class AddAvlReq {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<AVMPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: GeneralizedTime /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `certlist`.
         * @public
         * @readonly
         */
        readonly certlist: CertAVL,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AddAvlReq
     * @description
     *
     * This takes an `object` and converts it to a `AddAvlReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddAvlReq`.
     * @returns {AddAvlReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AddAvlReq]: AddAvlReq[_K] }>
    ): AddAvlReq {
        return new AddAvlReq(
            _o.version,
            _o.timeStamp,
            _o.sequence,
            _o.certlist,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return AVMPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_AVMPversion;
}
/**
 * @summary The Leading Root Component Types of AddAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddAvlReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "timeStamp",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certlist",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AddAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddAvlReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AddAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddAvlReq: $.ComponentSpec[] = [];
let _cached_decoder_for_AddAvlReq: $.ASN1Decoder<AddAvlReq> | null = null;
let _cached_encoder_for_AddAvlReq: $.ASN1Encoder<AddAvlReq> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AddAvlReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddAvlReq} The decoded data structure.
 */
export function _decode_AddAvlReq(el: _Element) {
    if (!_cached_decoder_for_AddAvlReq) {
        _cached_decoder_for_AddAvlReq = function (el: _Element): AddAvlReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<AVMPversion> =
                AddAvlReq._default_value_for_version;
            let timeStamp!: GeneralizedTime;
            let sequence!: AVMPsequence;
            let certlist!: CertAVL;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: _Element): void => {
                    timeStamp = $._decodeGeneralizedTime(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                certlist: (_el: _Element): void => {
                    certlist = _decode_CertAVL(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AddAvlReq,
                _extension_additions_list_spec_for_AddAvlReq,
                _root_component_type_list_2_spec_for_AddAvlReq,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) AddAvlReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddAvlReq, encoded as an ASN.1 Element.
 */
export function _encode_AddAvlReq(
    value: AddAvlReq,
    elGetter: $.ASN1Encoder<AddAvlReq>
) {
    if (!_cached_encoder_for_AddAvlReq) {
        _cached_encoder_for_AddAvlReq = function (
            value: AddAvlReq,
            elGetter: $.ASN1Encoder<AddAvlReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                AddAvlReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(value.version, $.BER),
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.timeStamp,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertAVL(
                                value.certlist,
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
    return _cached_encoder_for_AddAvlReq(value, elGetter);
}

/**
 * @summary id_addAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-addAvlReq            OBJECT IDENTIFIER ::= {id-cmsct 2}
 * ```
 *
 * @constant
 */
export const id_addAvlReq: OBJECT_IDENTIFIER = new _OID([2], id_cmsct);

/**
 * @summary addAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * addAvlReq WRAPPED-PDU ::= {
 *                 AddAvlReq
 *   IDENTIFIED BY id-addAvlReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const addAvlReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_AddAvlReq,
    },
    encoderFor: {
        "&Type": _encode_AddAvlReq,
    },
    "&id": id_addAvlReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary AddAvlOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddAvlOK ::= SEQUENCE {
 *   ok     NULL,
 *   ... }
 * ```
 *
 * @class
 */
export class AddAvlOK {
    constructor(
        /**
         * @summary `ok`.
         * @public
         * @readonly
         */
        readonly ok: NULL,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AddAvlOK
     * @description
     *
     * This takes an `object` and converts it to a `AddAvlOK`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddAvlOK`.
     * @returns {AddAvlOK}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AddAvlOK]: AddAvlOK[_K] }>
    ): AddAvlOK {
        return new AddAvlOK(_o.ok, _o._unrecognizedExtensionsList);
    }
}
/**
 * @summary The Leading Root Component Types of AddAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddAvlOK: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ok",
        false,
        $.hasTag(_TagClass.universal, 5),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AddAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddAvlOK: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AddAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddAvlOK: $.ComponentSpec[] = [];
let _cached_decoder_for_AddAvlOK: $.ASN1Decoder<AddAvlOK> | null = null;
let _cached_encoder_for_AddAvlOK: $.ASN1Encoder<AddAvlOK> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AddAvlOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddAvlOK} The decoded data structure.
 */
export function _decode_AddAvlOK(el: _Element) {
    if (!_cached_decoder_for_AddAvlOK) {
        _cached_decoder_for_AddAvlOK = function (el: _Element): AddAvlOK {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "AddAvlOK contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "ok";
            let ok!: NULL;
            ok = $._decodeNull(sequence[0]);
            return new AddAvlOK(ok, sequence.slice(1));
        };
    }
    return _cached_decoder_for_AddAvlOK(el);
}
/**
 * @summary Encodes a(n) AddAvlOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddAvlOK, encoded as an ASN.1 Element.
 */
export function _encode_AddAvlOK(
    value: AddAvlOK,
    elGetter: $.ASN1Encoder<AddAvlOK>
) {
    if (!_cached_encoder_for_AddAvlOK) {
        _cached_encoder_for_AddAvlOK = function (
            value: AddAvlOK,
            elGetter: $.ASN1Encoder<AddAvlOK>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [/* REQUIRED   */ $._encodeNull(value.ok, $.BER)],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AddAvlOK(value, elGetter);
}

/**
 * @summary AddAvlErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddAvlErr ::= SEQUENCE {
 *   notOK  AVMP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class AddAvlErr {
    constructor(
        /**
         * @summary `notOK`.
         * @public
         * @readonly
         */
        readonly notOK: AVMP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AddAvlErr
     * @description
     *
     * This takes an `object` and converts it to a `AddAvlErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddAvlErr`.
     * @returns {AddAvlErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AddAvlErr]: AddAvlErr[_K] }>
    ): AddAvlErr {
        return new AddAvlErr(_o.notOK, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `notOK`
     * @public
     * @static
     */

    public static _enum_for_notOK = _enum_for_AVMP_error;
}
/**
 * @summary The Leading Root Component Types of AddAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddAvlErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "notOK",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AddAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddAvlErr: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AddAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddAvlErr: $.ComponentSpec[] = [];
let _cached_decoder_for_AddAvlErr: $.ASN1Decoder<AddAvlErr> | null = null;
let _cached_encoder_for_AddAvlErr: $.ASN1Encoder<AddAvlErr> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AddAvlErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddAvlErr} The decoded data structure.
 */
export function _decode_AddAvlErr(el: _Element) {
    if (!_cached_decoder_for_AddAvlErr) {
        _cached_decoder_for_AddAvlErr = function (el: _Element): AddAvlErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "AddAvlErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "notOK";
            let notOK!: AVMP_error;
            notOK = _decode_AVMP_error(sequence[0]);
            return new AddAvlErr(notOK, sequence.slice(1));
        };
    }
    return _cached_decoder_for_AddAvlErr(el);
}
/**
 * @summary Encodes a(n) AddAvlErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddAvlErr, encoded as an ASN.1 Element.
 */
export function _encode_AddAvlErr(
    value: AddAvlErr,
    elGetter: $.ASN1Encoder<AddAvlErr>
) {
    if (!_cached_encoder_for_AddAvlErr) {
        _cached_encoder_for_AddAvlErr = function (
            value: AddAvlErr,
            elGetter: $.ASN1Encoder<AddAvlErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AVMP_error(
                                value.notOK,
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
    return _cached_encoder_for_AddAvlErr(value, elGetter);
}

/**
 * @summary AddAvlRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddAvlRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AddAvlRsp_result =
    | { success: AddAvlOK } /* CHOICE_ALT_ROOT */
    | { failure: AddAvlErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_AddAvlRsp_result: $.ASN1Decoder<
    AddAvlRsp_result
> | null = null;
let _cached_encoder_for_AddAvlRsp_result: $.ASN1Encoder<
    AddAvlRsp_result
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AddAvlRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddAvlRsp_result} The decoded data structure.
 */
export function _decode_AddAvlRsp_result(el: _Element) {
    if (!_cached_decoder_for_AddAvlRsp_result) {
        _cached_decoder_for_AddAvlRsp_result = $._decode_extensible_choice<
            AddAvlRsp_result
        >({
            "CONTEXT 0": [
                "success",
                $._decode_explicit<AddAvlOK>(() => _decode_AddAvlOK),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_explicit<AddAvlErr>(() => _decode_AddAvlErr),
            ],
        });
    }
    return _cached_decoder_for_AddAvlRsp_result(el);
}
/**
 * @summary Encodes a(n) AddAvlRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddAvlRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_AddAvlRsp_result(
    value: AddAvlRsp_result,
    elGetter: $.ASN1Encoder<AddAvlRsp_result>
) {
    if (!_cached_encoder_for_AddAvlRsp_result) {
        _cached_encoder_for_AddAvlRsp_result = $._encode_choice<
            AddAvlRsp_result
        >(
            {
                success: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_AddAvlOK,
                    $.BER
                ),
                failure: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_AddAvlErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AddAvlRsp_result(value, elGetter);
}

/**
 * @summary AddAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddAvlRsp ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   result        CHOICE {
 *     success       [0]  AddAvlOK,
 *     failure       [1]  AddAvlErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class AddAvlRsp {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<AVMPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: GeneralizedTime /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: AddAvlRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AddAvlRsp
     * @description
     *
     * This takes an `object` and converts it to a `AddAvlRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddAvlRsp`.
     * @returns {AddAvlRsp}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AddAvlRsp]: AddAvlRsp[_K] }>
    ): AddAvlRsp {
        return new AddAvlRsp(
            _o.version,
            _o.timeStamp,
            _o.sequence,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return AVMPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_AVMPversion;
}
/**
 * @summary The Leading Root Component Types of AddAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddAvlRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "timeStamp",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of AddAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddAvlRsp: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AddAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddAvlRsp: $.ComponentSpec[] = [];
let _cached_decoder_for_AddAvlRsp: $.ASN1Decoder<AddAvlRsp> | null = null;
let _cached_encoder_for_AddAvlRsp: $.ASN1Encoder<AddAvlRsp> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AddAvlRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddAvlRsp} The decoded data structure.
 */
export function _decode_AddAvlRsp(el: _Element) {
    if (!_cached_decoder_for_AddAvlRsp) {
        _cached_decoder_for_AddAvlRsp = function (el: _Element): AddAvlRsp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<AVMPversion> =
                AddAvlRsp._default_value_for_version;
            let timeStamp!: GeneralizedTime;
            let sequence!: AVMPsequence;
            let result!: AddAvlRsp_result;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: _Element): void => {
                    timeStamp = $._decodeGeneralizedTime(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                result: (_el: _Element): void => {
                    result = _decode_AddAvlRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AddAvlRsp,
                _extension_additions_list_spec_for_AddAvlRsp,
                _root_component_type_list_2_spec_for_AddAvlRsp,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) AddAvlRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddAvlRsp, encoded as an ASN.1 Element.
 */
export function _encode_AddAvlRsp(
    value: AddAvlRsp,
    elGetter: $.ASN1Encoder<AddAvlRsp>
) {
    if (!_cached_encoder_for_AddAvlRsp) {
        _cached_encoder_for_AddAvlRsp = function (
            value: AddAvlRsp,
            elGetter: $.ASN1Encoder<AddAvlRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                AddAvlRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(value.version, $.BER),
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.timeStamp,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AddAvlRsp_result(
                                value.result,
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
    return _cached_encoder_for_AddAvlRsp(value, elGetter);
}

/**
 * @summary id_addAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-addAvlRsp            OBJECT IDENTIFIER ::= {id-cmsct 3}
 * ```
 *
 * @constant
 */
export const id_addAvlRsp: OBJECT_IDENTIFIER = new _OID([3], id_cmsct);

/**
 * @summary addAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * addAvlRsp WRAPPED-PDU ::= {
 *                  AddAvlRsp
 *   IDENTIFIED BY  id-addAvlRsp }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const addAvlRsp: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_AddAvlRsp,
    },
    encoderFor: {
        "&Type": _encode_AddAvlRsp,
    },
    "&id": id_addAvlRsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary ReplaceAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplaceAvlReq ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   old           AvlSerialNumber OPTIONAL,
 *   new           CertAVL,
 *   ... }
 * ```
 *
 * @class
 */
export class ReplaceAvlReq {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<AVMPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: GeneralizedTime /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `old`.
         * @public
         * @readonly
         */
        readonly old: OPTIONAL<AvlSerialNumber>,
        /**
         * @summary `new_`.
         * @public
         * @readonly
         */
        readonly new_: CertAVL,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ReplaceAvlReq
     * @description
     *
     * This takes an `object` and converts it to a `ReplaceAvlReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReplaceAvlReq`.
     * @returns {ReplaceAvlReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ReplaceAvlReq]: ReplaceAvlReq[_K] }>
    ): ReplaceAvlReq {
        return new ReplaceAvlReq(
            _o.version,
            _o.timeStamp,
            _o.sequence,
            _o.old,
            _o.new_,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return AVMPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_AVMPversion;
}
/**
 * @summary The Leading Root Component Types of ReplaceAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReplaceAvlReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "timeStamp",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "old",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "new",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ReplaceAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReplaceAvlReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ReplaceAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReplaceAvlReq: $.ComponentSpec[] = [];
let _cached_decoder_for_ReplaceAvlReq: $.ASN1Decoder<
    ReplaceAvlReq
> | null = null;
let _cached_encoder_for_ReplaceAvlReq: $.ASN1Encoder<
    ReplaceAvlReq
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ReplaceAvlReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplaceAvlReq} The decoded data structure.
 */
export function _decode_ReplaceAvlReq(el: _Element) {
    if (!_cached_decoder_for_ReplaceAvlReq) {
        _cached_decoder_for_ReplaceAvlReq = function (
            el: _Element
        ): ReplaceAvlReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<AVMPversion> =
                ReplaceAvlReq._default_value_for_version;
            let timeStamp!: GeneralizedTime;
            let sequence!: AVMPsequence;
            let old: OPTIONAL<AvlSerialNumber>;
            let new_!: CertAVL;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: _Element): void => {
                    timeStamp = $._decodeGeneralizedTime(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                old: (_el: _Element): void => {
                    old = _decode_AvlSerialNumber(_el);
                },
                new: (_el: _Element): void => {
                    new_ = _decode_CertAVL(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReplaceAvlReq,
                _extension_additions_list_spec_for_ReplaceAvlReq,
                _root_component_type_list_2_spec_for_ReplaceAvlReq,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) ReplaceAvlReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplaceAvlReq, encoded as an ASN.1 Element.
 */
export function _encode_ReplaceAvlReq(
    value: ReplaceAvlReq,
    elGetter: $.ASN1Encoder<ReplaceAvlReq>
) {
    if (!_cached_encoder_for_ReplaceAvlReq) {
        _cached_encoder_for_ReplaceAvlReq = function (
            value: ReplaceAvlReq,
            elGetter: $.ASN1Encoder<ReplaceAvlReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                ReplaceAvlReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(value.version, $.BER),
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.timeStamp,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.old === undefined
                                ? undefined
                                : _encode_AvlSerialNumber(value.old, $.BER),
                            /* REQUIRED   */ _encode_CertAVL(value.new_, $.BER),
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
    return _cached_encoder_for_ReplaceAvlReq(value, elGetter);
}

/**
 * @summary id_replaceAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-replaceAvlReq        OBJECT IDENTIFIER ::= {id-cmsct 4}
 * ```
 *
 * @constant
 */
export const id_replaceAvlReq: OBJECT_IDENTIFIER = new _OID([4], id_cmsct);

/**
 * @summary replaceAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * replaceAvlReq WRAPPED-PDU ::= {
 *                  ReplaceAvlReq
 *   IDENTIFIED BY  id-replaceAvlReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const replaceAvlReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_ReplaceAvlReq,
    },
    encoderFor: {
        "&Type": _encode_ReplaceAvlReq,
    },
    "&id": id_replaceAvlReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary RepAvlOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RepAvlOK ::= SEQUENCE {
 *   ok     NULL,
 *   ... }
 * ```
 *
 * @class
 */
export class RepAvlOK {
    constructor(
        /**
         * @summary `ok`.
         * @public
         * @readonly
         */
        readonly ok: NULL,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RepAvlOK
     * @description
     *
     * This takes an `object` and converts it to a `RepAvlOK`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RepAvlOK`.
     * @returns {RepAvlOK}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof RepAvlOK]: RepAvlOK[_K] }>
    ): RepAvlOK {
        return new RepAvlOK(_o.ok, _o._unrecognizedExtensionsList);
    }
}
/**
 * @summary The Leading Root Component Types of RepAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RepAvlOK: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ok",
        false,
        $.hasTag(_TagClass.universal, 5),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of RepAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RepAvlOK: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of RepAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RepAvlOK: $.ComponentSpec[] = [];
let _cached_decoder_for_RepAvlOK: $.ASN1Decoder<RepAvlOK> | null = null;
let _cached_encoder_for_RepAvlOK: $.ASN1Encoder<RepAvlOK> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RepAvlOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RepAvlOK} The decoded data structure.
 */
export function _decode_RepAvlOK(el: _Element) {
    if (!_cached_decoder_for_RepAvlOK) {
        _cached_decoder_for_RepAvlOK = function (el: _Element): RepAvlOK {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "RepAvlOK contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "ok";
            let ok!: NULL;
            ok = $._decodeNull(sequence[0]);
            return new RepAvlOK(ok, sequence.slice(1));
        };
    }
    return _cached_decoder_for_RepAvlOK(el);
}
/**
 * @summary Encodes a(n) RepAvlOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepAvlOK, encoded as an ASN.1 Element.
 */
export function _encode_RepAvlOK(
    value: RepAvlOK,
    elGetter: $.ASN1Encoder<RepAvlOK>
) {
    if (!_cached_encoder_for_RepAvlOK) {
        _cached_encoder_for_RepAvlOK = function (
            value: RepAvlOK,
            elGetter: $.ASN1Encoder<RepAvlOK>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [/* REQUIRED   */ $._encodeNull(value.ok, $.BER)],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RepAvlOK(value, elGetter);
}

/**
 * @summary RepAvlErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RepAvlErr ::= SEQUENCE {
 *   notOK  AVMP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class RepAvlErr {
    constructor(
        /**
         * @summary `notOK`.
         * @public
         * @readonly
         */
        readonly notOK: AVMP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RepAvlErr
     * @description
     *
     * This takes an `object` and converts it to a `RepAvlErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RepAvlErr`.
     * @returns {RepAvlErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof RepAvlErr]: RepAvlErr[_K] }>
    ): RepAvlErr {
        return new RepAvlErr(_o.notOK, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `notOK`
     * @public
     * @static
     */

    public static _enum_for_notOK = _enum_for_AVMP_error;
}
/**
 * @summary The Leading Root Component Types of RepAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RepAvlErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "notOK",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of RepAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RepAvlErr: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of RepAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RepAvlErr: $.ComponentSpec[] = [];
let _cached_decoder_for_RepAvlErr: $.ASN1Decoder<RepAvlErr> | null = null;
let _cached_encoder_for_RepAvlErr: $.ASN1Encoder<RepAvlErr> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RepAvlErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RepAvlErr} The decoded data structure.
 */
export function _decode_RepAvlErr(el: _Element) {
    if (!_cached_decoder_for_RepAvlErr) {
        _cached_decoder_for_RepAvlErr = function (el: _Element): RepAvlErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "RepAvlErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "notOK";
            let notOK!: AVMP_error;
            notOK = _decode_AVMP_error(sequence[0]);
            return new RepAvlErr(notOK, sequence.slice(1));
        };
    }
    return _cached_decoder_for_RepAvlErr(el);
}
/**
 * @summary Encodes a(n) RepAvlErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepAvlErr, encoded as an ASN.1 Element.
 */
export function _encode_RepAvlErr(
    value: RepAvlErr,
    elGetter: $.ASN1Encoder<RepAvlErr>
) {
    if (!_cached_encoder_for_RepAvlErr) {
        _cached_encoder_for_RepAvlErr = function (
            value: RepAvlErr,
            elGetter: $.ASN1Encoder<RepAvlErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AVMP_error(
                                value.notOK,
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
    return _cached_encoder_for_RepAvlErr(value, elGetter);
}

/**
 * @summary ReplaceAvlRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplaceAvlRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ReplaceAvlRsp_result =
    | { success: RepAvlOK } /* CHOICE_ALT_ROOT */
    | { failure: RepAvlErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ReplaceAvlRsp_result: $.ASN1Decoder<
    ReplaceAvlRsp_result
> | null = null;
let _cached_encoder_for_ReplaceAvlRsp_result: $.ASN1Encoder<
    ReplaceAvlRsp_result
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ReplaceAvlRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplaceAvlRsp_result} The decoded data structure.
 */
export function _decode_ReplaceAvlRsp_result(el: _Element) {
    if (!_cached_decoder_for_ReplaceAvlRsp_result) {
        _cached_decoder_for_ReplaceAvlRsp_result = $._decode_extensible_choice<
            ReplaceAvlRsp_result
        >({
            "CONTEXT 0": [
                "success",
                $._decode_explicit<RepAvlOK>(() => _decode_RepAvlOK),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_explicit<RepAvlErr>(() => _decode_RepAvlErr),
            ],
        });
    }
    return _cached_decoder_for_ReplaceAvlRsp_result(el);
}
/**
 * @summary Encodes a(n) ReplaceAvlRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplaceAvlRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_ReplaceAvlRsp_result(
    value: ReplaceAvlRsp_result,
    elGetter: $.ASN1Encoder<ReplaceAvlRsp_result>
) {
    if (!_cached_encoder_for_ReplaceAvlRsp_result) {
        _cached_encoder_for_ReplaceAvlRsp_result = $._encode_choice<
            ReplaceAvlRsp_result
        >(
            {
                success: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_RepAvlOK,
                    $.BER
                ),
                failure: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_RepAvlErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ReplaceAvlRsp_result(value, elGetter);
}

/**
 * @summary ReplaceAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplaceAvlRsp ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   result        CHOICE {
 *     success       [0]  RepAvlOK,
 *     failure       [1]  RepAvlErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class ReplaceAvlRsp {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<AVMPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: GeneralizedTime /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: ReplaceAvlRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ReplaceAvlRsp
     * @description
     *
     * This takes an `object` and converts it to a `ReplaceAvlRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReplaceAvlRsp`.
     * @returns {ReplaceAvlRsp}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ReplaceAvlRsp]: ReplaceAvlRsp[_K] }>
    ): ReplaceAvlRsp {
        return new ReplaceAvlRsp(
            _o.version,
            _o.timeStamp,
            _o.sequence,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return AVMPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_AVMPversion;
}
/**
 * @summary The Leading Root Component Types of ReplaceAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReplaceAvlRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "timeStamp",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of ReplaceAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReplaceAvlRsp: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ReplaceAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReplaceAvlRsp: $.ComponentSpec[] = [];
let _cached_decoder_for_ReplaceAvlRsp: $.ASN1Decoder<
    ReplaceAvlRsp
> | null = null;
let _cached_encoder_for_ReplaceAvlRsp: $.ASN1Encoder<
    ReplaceAvlRsp
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ReplaceAvlRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplaceAvlRsp} The decoded data structure.
 */
export function _decode_ReplaceAvlRsp(el: _Element) {
    if (!_cached_decoder_for_ReplaceAvlRsp) {
        _cached_decoder_for_ReplaceAvlRsp = function (
            el: _Element
        ): ReplaceAvlRsp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<AVMPversion> =
                ReplaceAvlRsp._default_value_for_version;
            let timeStamp!: GeneralizedTime;
            let sequence!: AVMPsequence;
            let result!: ReplaceAvlRsp_result;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: _Element): void => {
                    timeStamp = $._decodeGeneralizedTime(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                result: (_el: _Element): void => {
                    result = _decode_ReplaceAvlRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReplaceAvlRsp,
                _extension_additions_list_spec_for_ReplaceAvlRsp,
                _root_component_type_list_2_spec_for_ReplaceAvlRsp,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) ReplaceAvlRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplaceAvlRsp, encoded as an ASN.1 Element.
 */
export function _encode_ReplaceAvlRsp(
    value: ReplaceAvlRsp,
    elGetter: $.ASN1Encoder<ReplaceAvlRsp>
) {
    if (!_cached_encoder_for_ReplaceAvlRsp) {
        _cached_encoder_for_ReplaceAvlRsp = function (
            value: ReplaceAvlRsp,
            elGetter: $.ASN1Encoder<ReplaceAvlRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                ReplaceAvlRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(value.version, $.BER),
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.timeStamp,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_ReplaceAvlRsp_result(
                                value.result,
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
    return _cached_encoder_for_ReplaceAvlRsp(value, elGetter);
}

/**
 * @summary id_replaceAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-replaceAvlRsp        OBJECT IDENTIFIER ::= {id-cmsct 5}
 * ```
 *
 * @constant
 */
export const id_replaceAvlRsp: OBJECT_IDENTIFIER = new _OID([5], id_cmsct);

/**
 * @summary replaceAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * replaceAvlRsp WRAPPED-PDU ::= {
 *                  ReplaceAvlRsp
 *   IDENTIFIED BY  id-replaceAvlRsp }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const replaceAvlRsp: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_ReplaceAvlRsp,
    },
    encoderFor: {
        "&Type": _encode_ReplaceAvlRsp,
    },
    "&id": id_replaceAvlRsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary DeleteAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteAvlReq ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   avl-Id        AvlSerialNumber OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class DeleteAvlReq {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<AVMPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: GeneralizedTime /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `avl_Id`.
         * @public
         * @readonly
         */
        readonly avl_Id: OPTIONAL<AvlSerialNumber>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DeleteAvlReq
     * @description
     *
     * This takes an `object` and converts it to a `DeleteAvlReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteAvlReq`.
     * @returns {DeleteAvlReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DeleteAvlReq]: DeleteAvlReq[_K] }>
    ): DeleteAvlReq {
        return new DeleteAvlReq(
            _o.version,
            _o.timeStamp,
            _o.sequence,
            _o.avl_Id,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return AVMPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_AVMPversion;
}
/**
 * @summary The Leading Root Component Types of DeleteAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeleteAvlReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "timeStamp",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "avl-Id",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DeleteAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeleteAvlReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DeleteAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeleteAvlReq: $.ComponentSpec[] = [];
let _cached_decoder_for_DeleteAvlReq: $.ASN1Decoder<DeleteAvlReq> | null = null;
let _cached_encoder_for_DeleteAvlReq: $.ASN1Encoder<DeleteAvlReq> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteAvlReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteAvlReq} The decoded data structure.
 */
export function _decode_DeleteAvlReq(el: _Element) {
    if (!_cached_decoder_for_DeleteAvlReq) {
        _cached_decoder_for_DeleteAvlReq = function (
            el: _Element
        ): DeleteAvlReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<AVMPversion> =
                DeleteAvlReq._default_value_for_version;
            let timeStamp!: GeneralizedTime;
            let sequence!: AVMPsequence;
            let avl_Id: OPTIONAL<AvlSerialNumber>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: _Element): void => {
                    timeStamp = $._decodeGeneralizedTime(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                "avl-Id": (_el: _Element): void => {
                    avl_Id = _decode_AvlSerialNumber(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeleteAvlReq,
                _extension_additions_list_spec_for_DeleteAvlReq,
                _root_component_type_list_2_spec_for_DeleteAvlReq,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) DeleteAvlReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteAvlReq, encoded as an ASN.1 Element.
 */
export function _encode_DeleteAvlReq(
    value: DeleteAvlReq,
    elGetter: $.ASN1Encoder<DeleteAvlReq>
) {
    if (!_cached_encoder_for_DeleteAvlReq) {
        _cached_encoder_for_DeleteAvlReq = function (
            value: DeleteAvlReq,
            elGetter: $.ASN1Encoder<DeleteAvlReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                DeleteAvlReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(value.version, $.BER),
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.timeStamp,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.avl_Id === undefined
                                ? undefined
                                : _encode_AvlSerialNumber(value.avl_Id, $.BER),
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
    return _cached_encoder_for_DeleteAvlReq(value, elGetter);
}

/**
 * @summary id_deleteAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-deleteAvlReq         OBJECT IDENTIFIER ::= {id-cmsct 8}
 * ```
 *
 * @constant
 */
export const id_deleteAvlReq: OBJECT_IDENTIFIER = new _OID([8], id_cmsct);

/**
 * @summary deleteAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deleteAvlReq WRAPPED-PDU ::= {
 *                  DeleteAvlReq
 *   IDENTIFIED BY  id-deleteAvlReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const deleteAvlReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_DeleteAvlReq,
    },
    encoderFor: {
        "&Type": _encode_DeleteAvlReq,
    },
    "&id": id_deleteAvlReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary DelAvlOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DelAvlOK ::= SEQUENCE {
 *   ok     NULL,
 *   ... }
 * ```
 *
 * @class
 */
export class DelAvlOK {
    constructor(
        /**
         * @summary `ok`.
         * @public
         * @readonly
         */
        readonly ok: NULL,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DelAvlOK
     * @description
     *
     * This takes an `object` and converts it to a `DelAvlOK`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DelAvlOK`.
     * @returns {DelAvlOK}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DelAvlOK]: DelAvlOK[_K] }>
    ): DelAvlOK {
        return new DelAvlOK(_o.ok, _o._unrecognizedExtensionsList);
    }
}
/**
 * @summary The Leading Root Component Types of DelAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DelAvlOK: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ok",
        false,
        $.hasTag(_TagClass.universal, 5),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DelAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DelAvlOK: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DelAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DelAvlOK: $.ComponentSpec[] = [];
let _cached_decoder_for_DelAvlOK: $.ASN1Decoder<DelAvlOK> | null = null;
let _cached_encoder_for_DelAvlOK: $.ASN1Encoder<DelAvlOK> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DelAvlOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DelAvlOK} The decoded data structure.
 */
export function _decode_DelAvlOK(el: _Element) {
    if (!_cached_decoder_for_DelAvlOK) {
        _cached_decoder_for_DelAvlOK = function (el: _Element): DelAvlOK {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "DelAvlOK contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "ok";
            let ok!: NULL;
            ok = $._decodeNull(sequence[0]);
            return new DelAvlOK(ok, sequence.slice(1));
        };
    }
    return _cached_decoder_for_DelAvlOK(el);
}
/**
 * @summary Encodes a(n) DelAvlOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DelAvlOK, encoded as an ASN.1 Element.
 */
export function _encode_DelAvlOK(
    value: DelAvlOK,
    elGetter: $.ASN1Encoder<DelAvlOK>
) {
    if (!_cached_encoder_for_DelAvlOK) {
        _cached_encoder_for_DelAvlOK = function (
            value: DelAvlOK,
            elGetter: $.ASN1Encoder<DelAvlOK>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [/* REQUIRED   */ $._encodeNull(value.ok, $.BER)],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DelAvlOK(value, elGetter);
}

/**
 * @summary DelAvlErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DelAvlErr ::= SEQUENCE {
 *   notOK  AVMP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class DelAvlErr {
    constructor(
        /**
         * @summary `notOK`.
         * @public
         * @readonly
         */
        readonly notOK: AVMP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DelAvlErr
     * @description
     *
     * This takes an `object` and converts it to a `DelAvlErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DelAvlErr`.
     * @returns {DelAvlErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DelAvlErr]: DelAvlErr[_K] }>
    ): DelAvlErr {
        return new DelAvlErr(_o.notOK, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `notOK`
     * @public
     * @static
     */

    public static _enum_for_notOK = _enum_for_AVMP_error;
}
/**
 * @summary The Leading Root Component Types of DelAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DelAvlErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "notOK",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DelAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DelAvlErr: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DelAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DelAvlErr: $.ComponentSpec[] = [];
let _cached_decoder_for_DelAvlErr: $.ASN1Decoder<DelAvlErr> | null = null;
let _cached_encoder_for_DelAvlErr: $.ASN1Encoder<DelAvlErr> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DelAvlErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DelAvlErr} The decoded data structure.
 */
export function _decode_DelAvlErr(el: _Element) {
    if (!_cached_decoder_for_DelAvlErr) {
        _cached_decoder_for_DelAvlErr = function (el: _Element): DelAvlErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "DelAvlErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "notOK";
            let notOK!: AVMP_error;
            notOK = _decode_AVMP_error(sequence[0]);
            return new DelAvlErr(notOK, sequence.slice(1));
        };
    }
    return _cached_decoder_for_DelAvlErr(el);
}
/**
 * @summary Encodes a(n) DelAvlErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DelAvlErr, encoded as an ASN.1 Element.
 */
export function _encode_DelAvlErr(
    value: DelAvlErr,
    elGetter: $.ASN1Encoder<DelAvlErr>
) {
    if (!_cached_encoder_for_DelAvlErr) {
        _cached_encoder_for_DelAvlErr = function (
            value: DelAvlErr,
            elGetter: $.ASN1Encoder<DelAvlErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AVMP_error(
                                value.notOK,
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
    return _cached_encoder_for_DelAvlErr(value, elGetter);
}

/**
 * @summary DeleteAvlRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteAvlRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DeleteAvlRsp_result =
    | { success: DelAvlOK } /* CHOICE_ALT_ROOT */
    | { failure: DelAvlErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_DeleteAvlRsp_result: $.ASN1Decoder<
    DeleteAvlRsp_result
> | null = null;
let _cached_encoder_for_DeleteAvlRsp_result: $.ASN1Encoder<
    DeleteAvlRsp_result
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteAvlRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteAvlRsp_result} The decoded data structure.
 */
export function _decode_DeleteAvlRsp_result(el: _Element) {
    if (!_cached_decoder_for_DeleteAvlRsp_result) {
        _cached_decoder_for_DeleteAvlRsp_result = $._decode_extensible_choice<
            DeleteAvlRsp_result
        >({
            "CONTEXT 0": [
                "success",
                $._decode_explicit<DelAvlOK>(() => _decode_DelAvlOK),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_explicit<DelAvlErr>(() => _decode_DelAvlErr),
            ],
        });
    }
    return _cached_decoder_for_DeleteAvlRsp_result(el);
}
/**
 * @summary Encodes a(n) DeleteAvlRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteAvlRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_DeleteAvlRsp_result(
    value: DeleteAvlRsp_result,
    elGetter: $.ASN1Encoder<DeleteAvlRsp_result>
) {
    if (!_cached_encoder_for_DeleteAvlRsp_result) {
        _cached_encoder_for_DeleteAvlRsp_result = $._encode_choice<
            DeleteAvlRsp_result
        >(
            {
                success: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_DelAvlOK,
                    $.BER
                ),
                failure: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_DelAvlErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DeleteAvlRsp_result(value, elGetter);
}

/**
 * @summary DeleteAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteAvlRsp ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   result        CHOICE {
 *     success       [0]  DelAvlOK,
 *     failure       [1]  DelAvlErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class DeleteAvlRsp {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<AVMPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: GeneralizedTime /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: DeleteAvlRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DeleteAvlRsp
     * @description
     *
     * This takes an `object` and converts it to a `DeleteAvlRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteAvlRsp`.
     * @returns {DeleteAvlRsp}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DeleteAvlRsp]: DeleteAvlRsp[_K] }>
    ): DeleteAvlRsp {
        return new DeleteAvlRsp(
            _o.version,
            _o.timeStamp,
            _o.sequence,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return AVMPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_AVMPversion;
}
/**
 * @summary The Leading Root Component Types of DeleteAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeleteAvlRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "timeStamp",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of DeleteAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeleteAvlRsp: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DeleteAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeleteAvlRsp: $.ComponentSpec[] = [];
let _cached_decoder_for_DeleteAvlRsp: $.ASN1Decoder<DeleteAvlRsp> | null = null;
let _cached_encoder_for_DeleteAvlRsp: $.ASN1Encoder<DeleteAvlRsp> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteAvlRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteAvlRsp} The decoded data structure.
 */
export function _decode_DeleteAvlRsp(el: _Element) {
    if (!_cached_decoder_for_DeleteAvlRsp) {
        _cached_decoder_for_DeleteAvlRsp = function (
            el: _Element
        ): DeleteAvlRsp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<AVMPversion> =
                DeleteAvlRsp._default_value_for_version;
            let timeStamp!: GeneralizedTime;
            let sequence!: AVMPsequence;
            let result!: DeleteAvlRsp_result;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: _Element): void => {
                    timeStamp = $._decodeGeneralizedTime(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                result: (_el: _Element): void => {
                    result = _decode_DeleteAvlRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeleteAvlRsp,
                _extension_additions_list_spec_for_DeleteAvlRsp,
                _root_component_type_list_2_spec_for_DeleteAvlRsp,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) DeleteAvlRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteAvlRsp, encoded as an ASN.1 Element.
 */
export function _encode_DeleteAvlRsp(
    value: DeleteAvlRsp,
    elGetter: $.ASN1Encoder<DeleteAvlRsp>
) {
    if (!_cached_encoder_for_DeleteAvlRsp) {
        _cached_encoder_for_DeleteAvlRsp = function (
            value: DeleteAvlRsp,
            elGetter: $.ASN1Encoder<DeleteAvlRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                DeleteAvlRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(value.version, $.BER),
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.timeStamp,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_DeleteAvlRsp_result(
                                value.result,
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
    return _cached_encoder_for_DeleteAvlRsp(value, elGetter);
}

/**
 * @summary id_deleteAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-deleteAvlRsp         OBJECT IDENTIFIER ::= {id-cmsct 9}
 * ```
 *
 * @constant
 */
export const id_deleteAvlRsp: OBJECT_IDENTIFIER = new _OID([9], id_cmsct);

/**
 * @summary deleteAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deleteAvlRsp WRAPPED-PDU ::= {
 *                  DeleteAvlRsp
 *   IDENTIFIED BY  id-deleteAvlRsp }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const deleteAvlRsp: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_DeleteAvlRsp,
    },
    encoderFor: {
        "&Type": _encode_DeleteAvlRsp,
    },
    "&id": id_deleteAvlRsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary RejectAVL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RejectAVL ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   reason        AVMP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class RejectAVL {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<AVMPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: GeneralizedTime /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: AVMP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RejectAVL
     * @description
     *
     * This takes an `object` and converts it to a `RejectAVL`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RejectAVL`.
     * @returns {RejectAVL}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof RejectAVL]: RejectAVL[_K] }>
    ): RejectAVL {
        return new RejectAVL(
            _o.version,
            _o.timeStamp,
            _o.sequence,
            _o.reason,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return AVMPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_AVMPversion;
    /**
     * @summary The enum used as the type of the component `reason`
     * @public
     * @static
     */

    public static _enum_for_reason = _enum_for_AVMP_error;
}
/**
 * @summary The Leading Root Component Types of RejectAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RejectAVL: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "timeStamp",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
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
 * @summary The Trailing Root Component Types of RejectAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RejectAVL: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of RejectAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RejectAVL: $.ComponentSpec[] = [];
let _cached_decoder_for_RejectAVL: $.ASN1Decoder<RejectAVL> | null = null;
let _cached_encoder_for_RejectAVL: $.ASN1Encoder<RejectAVL> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RejectAVL
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RejectAVL} The decoded data structure.
 */
export function _decode_RejectAVL(el: _Element) {
    if (!_cached_decoder_for_RejectAVL) {
        _cached_decoder_for_RejectAVL = function (el: _Element): RejectAVL {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<AVMPversion> =
                RejectAVL._default_value_for_version;
            let timeStamp!: GeneralizedTime;
            let sequence!: AVMPsequence;
            let reason!: AVMP_error;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: _Element): void => {
                    timeStamp = $._decodeGeneralizedTime(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                reason: (_el: _Element): void => {
                    reason = _decode_AVMP_error(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RejectAVL,
                _extension_additions_list_spec_for_RejectAVL,
                _root_component_type_list_2_spec_for_RejectAVL,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) RejectAVL into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RejectAVL, encoded as an ASN.1 Element.
 */
export function _encode_RejectAVL(
    value: RejectAVL,
    elGetter: $.ASN1Encoder<RejectAVL>
) {
    if (!_cached_encoder_for_RejectAVL) {
        _cached_encoder_for_RejectAVL = function (
            value: RejectAVL,
            elGetter: $.ASN1Encoder<RejectAVL>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                RejectAVL._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(value.version, $.BER),
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.timeStamp,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AVMP_error(
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
    return _cached_encoder_for_RejectAVL(value, elGetter);
}

/**
 * @summary id_rejectAVL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-rejectAVL            OBJECT IDENTIFIER ::= {id-cmsct 10}
 * ```
 *
 * @constant
 */
export const id_rejectAVL: OBJECT_IDENTIFIER = new _OID([10], id_cmsct);

/**
 * @summary rejectAVL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rejectAVL  WRAPPED-PDU ::= {
 *                  RejectAVL
 *   IDENTIFIED BY  id-rejectAVL }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const rejectAVL: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_RejectAVL,
    },
    encoderFor: {
        "&Type": _encode_RejectAVL,
    },
    "&id": id_rejectAVL /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary CASPversion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CASPversion ::= ENUMERATED { v1(1), v2(2), v3(3), ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_CASPversion {
    v1 = 1,
    v2 = 2,
    v3 = 3,
}
/**
 * @summary CASPversion
 */
export type CASPversion = _enum_for_CASPversion | ENUMERATED;
/**
 * @summary CASPversion_v1
 * @constant
 * @type {number}
 */
export const CASPversion_v1: CASPversion = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASPversion_v2
 * @constant
 * @type {number}
 */
export const CASPversion_v2: CASPversion = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASPversion_v3
 * @constant
 * @type {number}
 */
export const CASPversion_v3: CASPversion = 3; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_CASPversion: $.ASN1Decoder<CASPversion> | null = null;
let _cached_encoder_for_CASPversion: $.ASN1Encoder<CASPversion> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CASPversion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CASPversion} The decoded data structure.
 */
export function _decode_CASPversion(el: _Element) {
    if (!_cached_decoder_for_CASPversion) {
        _cached_decoder_for_CASPversion = $._decodeEnumerated;
    }
    return _cached_decoder_for_CASPversion(el);
}
/**
 * @summary Encodes a(n) CASPversion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CASPversion, encoded as an ASN.1 Element.
 */
export function _encode_CASPversion(
    value: CASPversion,
    elGetter: $.ASN1Encoder<CASPversion>
) {
    if (!_cached_encoder_for_CASPversion) {
        _cached_encoder_for_CASPversion = $._encodeEnumerated;
    }
    return _cached_encoder_for_CASPversion(value, elGetter);
}

/**
 * @summary CASPsequence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CASPsequence  ::=  INTEGER (1..MAX)
 * ```
 */
export type CASPsequence = INTEGER;
let _cached_decoder_for_CASPsequence: $.ASN1Decoder<CASPsequence> | null = null;
let _cached_encoder_for_CASPsequence: $.ASN1Encoder<CASPsequence> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CASPsequence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CASPsequence} The decoded data structure.
 */
export function _decode_CASPsequence(el: _Element) {
    if (!_cached_decoder_for_CASPsequence) {
        _cached_decoder_for_CASPsequence = $._decodeInteger;
    }
    return _cached_decoder_for_CASPsequence(el);
}
/**
 * @summary Encodes a(n) CASPsequence into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CASPsequence, encoded as an ASN.1 Element.
 */
export function _encode_CASPsequence(
    value: CASPsequence,
    elGetter: $.ASN1Encoder<CASPsequence>
) {
    if (!_cached_encoder_for_CASPsequence) {
        _cached_encoder_for_CASPsequence = $._encodeInteger;
    }
    return _cached_encoder_for_CASPsequence(value, elGetter);
}

/**
 * @summary CASPcommonComponents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CASPcommonComponents ::= SEQUENCE {
 *   version    CASPversion DEFAULT v1,
 *   sequence   CASPsequence,
 *   ... }
 * ```
 *
 * @class
 */
export class CASPcommonComponents {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<CASPversion>,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: CASPsequence,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CASPcommonComponents
     * @description
     *
     * This takes an `object` and converts it to a `CASPcommonComponents`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CASPcommonComponents`.
     * @returns {CASPcommonComponents}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof CASPcommonComponents]: CASPcommonComponents[_K] }
        >
    ): CASPcommonComponents {
        return new CASPcommonComponents(
            _o.version,
            _o.sequence,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return CASPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_CASPversion;
}
/**
 * @summary The Leading Root Component Types of CASPcommonComponents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CASPcommonComponents: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CASPcommonComponents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CASPcommonComponents: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CASPcommonComponents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CASPcommonComponents: $.ComponentSpec[] = [];
let _cached_decoder_for_CASPcommonComponents: $.ASN1Decoder<
    CASPcommonComponents
> | null = null;
let _cached_encoder_for_CASPcommonComponents: $.ASN1Encoder<
    CASPcommonComponents
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CASPcommonComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CASPcommonComponents} The decoded data structure.
 */
export function _decode_CASPcommonComponents(el: _Element) {
    if (!_cached_decoder_for_CASPcommonComponents) {
        _cached_decoder_for_CASPcommonComponents = function (
            el: _Element
        ): CASPcommonComponents {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<CASPversion> =
                CASPcommonComponents._default_value_for_version;
            let sequence!: CASPsequence;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CASPcommonComponents,
                _extension_additions_list_spec_for_CASPcommonComponents,
                _root_component_type_list_2_spec_for_CASPcommonComponents,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) CASPcommonComponents into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CASPcommonComponents, encoded as an ASN.1 Element.
 */
export function _encode_CASPcommonComponents(
    value: CASPcommonComponents,
    elGetter: $.ASN1Encoder<CASPcommonComponents>
) {
    if (!_cached_encoder_for_CASPcommonComponents) {
        _cached_encoder_for_CASPcommonComponents = function (
            value: CASPcommonComponents,
            elGetter: $.ASN1Encoder<CASPcommonComponents>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CASPcommonComponents._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(value.version, $.BER),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
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
    return _cached_encoder_for_CASPcommonComponents(value, elGetter);
}

/**
 * @summary CertSubscribeReq_certs_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeReq-certs-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertSubscribeReq_certs_Item {
    constructor(
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertSubscribeReq_certs_Item
     * @description
     *
     * This takes an `object` and converts it to a `CertSubscribeReq_certs_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertSubscribeReq_certs_Item`.
     * @returns {CertSubscribeReq_certs_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertSubscribeReq_certs_Item]: CertSubscribeReq_certs_Item[_K];
            }
        >
    ): CertSubscribeReq_certs_Item {
        return new CertSubscribeReq_certs_Item(
            _o.subject,
            _o.serialNumber,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertSubscribeReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertSubscribeReq_certs_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("subject", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertSubscribeReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertSubscribeReq_certs_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertSubscribeReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertSubscribeReq_certs_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_CertSubscribeReq_certs_Item: $.ASN1Decoder<
    CertSubscribeReq_certs_Item
> | null = null;
let _cached_encoder_for_CertSubscribeReq_certs_Item: $.ASN1Encoder<
    CertSubscribeReq_certs_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeReq_certs_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeReq_certs_Item} The decoded data structure.
 */
export function _decode_CertSubscribeReq_certs_Item(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeReq_certs_Item) {
        _cached_decoder_for_CertSubscribeReq_certs_Item = function (
            el: _Element
        ): CertSubscribeReq_certs_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertSubscribeReq-certs-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "subject";
            sequence[1].name = "serialNumber";
            let subject!: Name;
            let serialNumber!: CertificateSerialNumber;
            subject = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            return new CertSubscribeReq_certs_Item(
                subject,
                serialNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertSubscribeReq_certs_Item(el);
}
/**
 * @summary Encodes a(n) CertSubscribeReq_certs_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeReq_certs_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeReq_certs_Item(
    value: CertSubscribeReq_certs_Item,
    elGetter: $.ASN1Encoder<CertSubscribeReq_certs_Item>
) {
    if (!_cached_encoder_for_CertSubscribeReq_certs_Item) {
        _cached_encoder_for_CertSubscribeReq_certs_Item = function (
            value: CertSubscribeReq_certs_Item,
            elGetter: $.ASN1Encoder<CertSubscribeReq_certs_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.subject, $.BER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
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
    return _cached_encoder_for_CertSubscribeReq_certs_Item(value, elGetter);
}

/**
 * @summary CertSubscribeReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeReq ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
 *   certs   SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     subject      Name,
 *     serialNumber CertificateSerialNumber,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertSubscribeReq {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<CASPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: CertSubscribeReq_certs_Item[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertSubscribeReq
     * @description
     *
     * This takes an `object` and converts it to a `CertSubscribeReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertSubscribeReq`.
     * @returns {CertSubscribeReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertSubscribeReq]: CertSubscribeReq[_K] }>
    ): CertSubscribeReq {
        return new CertSubscribeReq(
            _o.version,
            _o.sequence,
            _o.certs,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return CASPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_CASPversion;
}
/**
 * @summary The Leading Root Component Types of CertSubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertSubscribeReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certs",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertSubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertSubscribeReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertSubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertSubscribeReq: $.ComponentSpec[] = [];
let _cached_decoder_for_CertSubscribeReq: $.ASN1Decoder<
    CertSubscribeReq
> | null = null;
let _cached_encoder_for_CertSubscribeReq: $.ASN1Encoder<
    CertSubscribeReq
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeReq} The decoded data structure.
 */
export function _decode_CertSubscribeReq(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeReq) {
        _cached_decoder_for_CertSubscribeReq = function (
            el: _Element
        ): CertSubscribeReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<CASPversion> =
                CertSubscribeReq._default_value_for_version;
            let sequence!: CASPsequence;
            let certs!: CertSubscribeReq_certs_Item[];
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                certs: (_el: _Element): void => {
                    certs = $._decodeSequenceOf<CertSubscribeReq_certs_Item>(
                        () => _decode_CertSubscribeReq_certs_Item
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertSubscribeReq,
                _extension_additions_list_spec_for_CertSubscribeReq,
                _root_component_type_list_2_spec_for_CertSubscribeReq,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) CertSubscribeReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeReq, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeReq(
    value: CertSubscribeReq,
    elGetter: $.ASN1Encoder<CertSubscribeReq>
) {
    if (!_cached_encoder_for_CertSubscribeReq) {
        _cached_encoder_for_CertSubscribeReq = function (
            value: CertSubscribeReq,
            elGetter: $.ASN1Encoder<CertSubscribeReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CertSubscribeReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(value.version, $.BER),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSequenceOf<
                                CertSubscribeReq_certs_Item
                            >(() => _encode_CertSubscribeReq_certs_Item, $.BER)(
                                value.certs,
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
    return _cached_encoder_for_CertSubscribeReq(value, elGetter);
}

/**
 * @summary id_certSubscribeReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-certSubscribeReq     OBJECT IDENTIFIER ::= {id-cmsct 11}
 * ```
 *
 * @constant
 */
export const id_certSubscribeReq: OBJECT_IDENTIFIER = new _OID([11], id_cmsct);

/**
 * @summary certSubscribeReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certSubscribeReq WRAPPED-PDU ::= {
 *                  CertSubscribeReq
 *   IDENTIFIED BY  id-certSubscribeReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const certSubscribeReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertSubscribeReq,
    },
    encoderFor: {
        "&Type": _encode_CertSubscribeReq,
    },
    "&id": id_certSubscribeReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary CertStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertStatus ::= ENUMERATED {
 *   good    (0),
 *   revoked (1),
 *   on-hold (2),
 *   expired (3),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_CertStatus {
    good = 0,
    revoked = 1,
    on_hold = 2,
    expired = 3,
}
/**
 * @summary CertStatus
 */
export type CertStatus = _enum_for_CertStatus | ENUMERATED;
/**
 * @summary CertStatus_good
 * @constant
 * @type {number}
 */
export const CertStatus_good: CertStatus = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CertStatus_revoked
 * @constant
 * @type {number}
 */
export const CertStatus_revoked: CertStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CertStatus_on_hold
 * @constant
 * @type {number}
 */
export const CertStatus_on_hold: CertStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CertStatus_expired
 * @constant
 * @type {number}
 */
export const CertStatus_expired: CertStatus = 3; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_CertStatus: $.ASN1Decoder<CertStatus> | null = null;
let _cached_encoder_for_CertStatus: $.ASN1Encoder<CertStatus> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertStatus} The decoded data structure.
 */
export function _decode_CertStatus(el: _Element) {
    if (!_cached_decoder_for_CertStatus) {
        _cached_decoder_for_CertStatus = $._decodeEnumerated;
    }
    return _cached_decoder_for_CertStatus(el);
}
/**
 * @summary Encodes a(n) CertStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertStatus, encoded as an ASN.1 Element.
 */
export function _encode_CertStatus(
    value: CertStatus,
    elGetter: $.ASN1Encoder<CertStatus>
) {
    if (!_cached_encoder_for_CertStatus) {
        _cached_encoder_for_CertStatus = $._encodeEnumerated;
    }
    return _cached_encoder_for_CertStatus(value, elGetter);
}

/**
 * @summary CertSubscribeOK_Item_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeOK-Item-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertSubscribeOK_Item_ok {
    constructor(
        /**
         * @summary `cert`.
         * @public
         * @readonly
         */
        readonly cert: Certificate,
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: CertStatus,
        /**
         * @summary `revokeReason`.
         * @public
         * @readonly
         */
        readonly revokeReason: OPTIONAL<CRLReason>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertSubscribeOK_Item_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertSubscribeOK_Item_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertSubscribeOK_Item_ok`.
     * @returns {CertSubscribeOK_Item_ok}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertSubscribeOK_Item_ok]: CertSubscribeOK_Item_ok[_K];
            }
        >
    ): CertSubscribeOK_Item_ok {
        return new CertSubscribeOK_Item_ok(
            _o.cert,
            _o.status,
            _o.revokeReason,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `status`
     * @public
     * @static
     */

    public static _enum_for_status = _enum_for_CertStatus;
    /**
     * @summary The enum used as the type of the component `revokeReason`
     * @public
     * @static
     */

    public static _enum_for_revokeReason = _enum_for_CRLReason;
}
/**
 * @summary The Leading Root Component Types of CertSubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertSubscribeOK_Item_ok: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "cert",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "status",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "revokeReason",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertSubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertSubscribeOK_Item_ok: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertSubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertSubscribeOK_Item_ok: $.ComponentSpec[] = [];
let _cached_decoder_for_CertSubscribeOK_Item_ok: $.ASN1Decoder<
    CertSubscribeOK_Item_ok
> | null = null;
let _cached_encoder_for_CertSubscribeOK_Item_ok: $.ASN1Encoder<
    CertSubscribeOK_Item_ok
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeOK_Item_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeOK_Item_ok} The decoded data structure.
 */
export function _decode_CertSubscribeOK_Item_ok(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeOK_Item_ok) {
        _cached_decoder_for_CertSubscribeOK_Item_ok = function (
            el: _Element
        ): CertSubscribeOK_Item_ok {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let cert!: Certificate;
            let status!: CertStatus;
            let revokeReason: OPTIONAL<CRLReason>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                cert: (_el: _Element): void => {
                    cert = _decode_Certificate(_el);
                },
                status: (_el: _Element): void => {
                    status = _decode_CertStatus(_el);
                },
                revokeReason: (_el: _Element): void => {
                    revokeReason = _decode_CRLReason(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertSubscribeOK_Item_ok,
                _extension_additions_list_spec_for_CertSubscribeOK_Item_ok,
                _root_component_type_list_2_spec_for_CertSubscribeOK_Item_ok,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) CertSubscribeOK_Item_ok into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeOK_Item_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeOK_Item_ok(
    value: CertSubscribeOK_Item_ok,
    elGetter: $.ASN1Encoder<CertSubscribeOK_Item_ok>
) {
    if (!_cached_encoder_for_CertSubscribeOK_Item_ok) {
        _cached_encoder_for_CertSubscribeOK_Item_ok = function (
            value: CertSubscribeOK_Item_ok,
            elGetter: $.ASN1Encoder<CertSubscribeOK_Item_ok>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Certificate(
                                value.cert,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertStatus(
                                value.status,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.revokeReason === undefined
                                ? undefined
                                : _encode_CRLReason(value.revokeReason, $.BER),
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
    return _cached_encoder_for_CertSubscribeOK_Item_ok(value, elGetter);
}

/**
 * @summary CASP_CertStatusCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CASP-CertStatusCode ::= ENUMERATED {
 *   noReason       (1),
 *   unknownCert    (2),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_CASP_CertStatusCode {
    noReason = 1,
    unknownCert = 2,
}
/**
 * @summary CASP_CertStatusCode
 */
export type CASP_CertStatusCode = _enum_for_CASP_CertStatusCode | ENUMERATED;
/**
 * @summary CASP_CertStatusCode_noReason
 * @constant
 * @type {number}
 */
export const CASP_CertStatusCode_noReason: CASP_CertStatusCode = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASP_CertStatusCode_unknownCert
 * @constant
 * @type {number}
 */
export const CASP_CertStatusCode_unknownCert: CASP_CertStatusCode = 2; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_CASP_CertStatusCode: $.ASN1Decoder<
    CASP_CertStatusCode
> | null = null;
let _cached_encoder_for_CASP_CertStatusCode: $.ASN1Encoder<
    CASP_CertStatusCode
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CASP_CertStatusCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CASP_CertStatusCode} The decoded data structure.
 */
export function _decode_CASP_CertStatusCode(el: _Element) {
    if (!_cached_decoder_for_CASP_CertStatusCode) {
        _cached_decoder_for_CASP_CertStatusCode = $._decodeEnumerated;
    }
    return _cached_decoder_for_CASP_CertStatusCode(el);
}
/**
 * @summary Encodes a(n) CASP_CertStatusCode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CASP_CertStatusCode, encoded as an ASN.1 Element.
 */
export function _encode_CASP_CertStatusCode(
    value: CASP_CertStatusCode,
    elGetter: $.ASN1Encoder<CASP_CertStatusCode>
) {
    if (!_cached_encoder_for_CASP_CertStatusCode) {
        _cached_encoder_for_CASP_CertStatusCode = $._encodeEnumerated;
    }
    return _cached_encoder_for_CASP_CertStatusCode(value, elGetter);
}

/**
 * @summary CertSubscribeOK_Item_not_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeOK-Item-not-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertSubscribeOK_Item_not_ok {
    constructor(
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: CASP_CertStatusCode,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertSubscribeOK_Item_not_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertSubscribeOK_Item_not_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertSubscribeOK_Item_not_ok`.
     * @returns {CertSubscribeOK_Item_not_ok}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertSubscribeOK_Item_not_ok]: CertSubscribeOK_Item_not_ok[_K];
            }
        >
    ): CertSubscribeOK_Item_not_ok {
        return new CertSubscribeOK_Item_not_ok(
            _o.status,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `status`
     * @public
     * @static
     */

    public static _enum_for_status = _enum_for_CASP_CertStatusCode;
}
/**
 * @summary The Leading Root Component Types of CertSubscribeOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertSubscribeOK_Item_not_ok: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "status",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertSubscribeOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertSubscribeOK_Item_not_ok: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertSubscribeOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertSubscribeOK_Item_not_ok: $.ComponentSpec[] = [];
let _cached_decoder_for_CertSubscribeOK_Item_not_ok: $.ASN1Decoder<
    CertSubscribeOK_Item_not_ok
> | null = null;
let _cached_encoder_for_CertSubscribeOK_Item_not_ok: $.ASN1Encoder<
    CertSubscribeOK_Item_not_ok
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeOK_Item_not_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeOK_Item_not_ok} The decoded data structure.
 */
export function _decode_CertSubscribeOK_Item_not_ok(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeOK_Item_not_ok) {
        _cached_decoder_for_CertSubscribeOK_Item_not_ok = function (
            el: _Element
        ): CertSubscribeOK_Item_not_ok {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertSubscribeOK-Item-not-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "status";
            let status!: CASP_CertStatusCode;
            status = _decode_CASP_CertStatusCode(sequence[0]);
            return new CertSubscribeOK_Item_not_ok(status, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertSubscribeOK_Item_not_ok(el);
}
/**
 * @summary Encodes a(n) CertSubscribeOK_Item_not_ok into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeOK_Item_not_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeOK_Item_not_ok(
    value: CertSubscribeOK_Item_not_ok,
    elGetter: $.ASN1Encoder<CertSubscribeOK_Item_not_ok>
) {
    if (!_cached_encoder_for_CertSubscribeOK_Item_not_ok) {
        _cached_encoder_for_CertSubscribeOK_Item_not_ok = function (
            value: CertSubscribeOK_Item_not_ok,
            elGetter: $.ASN1Encoder<CertSubscribeOK_Item_not_ok>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_CertStatusCode(
                                value.status,
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
    return _cached_encoder_for_CertSubscribeOK_Item_not_ok(value, elGetter);
}

/**
 * @summary CertSubscribeOK_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeOK-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertSubscribeOK_Item =
    | { ok: CertSubscribeOK_Item_ok } /* CHOICE_ALT_ROOT */
    | { not_ok: CertSubscribeOK_Item_not_ok } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertSubscribeOK_Item: $.ASN1Decoder<
    CertSubscribeOK_Item
> | null = null;
let _cached_encoder_for_CertSubscribeOK_Item: $.ASN1Encoder<
    CertSubscribeOK_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeOK_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeOK_Item} The decoded data structure.
 */
export function _decode_CertSubscribeOK_Item(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeOK_Item) {
        _cached_decoder_for_CertSubscribeOK_Item = $._decode_extensible_choice<
            CertSubscribeOK_Item
        >({
            "CONTEXT 0": [
                "ok",
                $._decode_explicit<CertSubscribeOK_Item_ok>(
                    () => _decode_CertSubscribeOK_Item_ok
                ),
            ],
            "CONTEXT 1": [
                "not_ok",
                $._decode_explicit<CertSubscribeOK_Item_not_ok>(
                    () => _decode_CertSubscribeOK_Item_not_ok
                ),
            ],
        });
    }
    return _cached_decoder_for_CertSubscribeOK_Item(el);
}
/**
 * @summary Encodes a(n) CertSubscribeOK_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeOK_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeOK_Item(
    value: CertSubscribeOK_Item,
    elGetter: $.ASN1Encoder<CertSubscribeOK_Item>
) {
    if (!_cached_encoder_for_CertSubscribeOK_Item) {
        _cached_encoder_for_CertSubscribeOK_Item = $._encode_choice<
            CertSubscribeOK_Item
        >(
            {
                ok: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertSubscribeOK_Item_ok,
                    $.BER
                ),
                not_ok: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertSubscribeOK_Item_not_ok,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertSubscribeOK_Item(value, elGetter);
}

export type CertSubscribeOK<> = CertSubscribeOK_Item[]; // SequenceOfType
let _cached_decoder_for_CertSubscribeOK: $.ASN1Decoder<
    CertSubscribeOK
> | null = null;
let _cached_encoder_for_CertSubscribeOK: $.ASN1Encoder<
    CertSubscribeOK
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeOK} The decoded data structure.
 */
export function _decode_CertSubscribeOK(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeOK) {
        _cached_decoder_for_CertSubscribeOK = $._decodeSequenceOf<
            CertSubscribeOK_Item
        >(() => _decode_CertSubscribeOK_Item);
    }
    return _cached_decoder_for_CertSubscribeOK(el);
}
/**
 * @summary Encodes a(n) CertSubscribeOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeOK, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeOK(
    value: CertSubscribeOK,
    elGetter: $.ASN1Encoder<CertSubscribeOK>
) {
    if (!_cached_encoder_for_CertSubscribeOK) {
        _cached_encoder_for_CertSubscribeOK = $._encodeSequenceOf<
            CertSubscribeOK_Item
        >(() => _encode_CertSubscribeOK_Item, $.BER);
    }
    return _cached_encoder_for_CertSubscribeOK(value, elGetter);
}

/**
 * @summary CASP_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CASP-error ::= ENUMERATED {
 *   noReason                      (0),
 *   unknownContentType            (1),
 *   unsupportedWLMPversion        (2),
 *   missingContent                (3),
 *   missingContentComponent       (4),
 *   invalidContentComponent       (5),
 *   sequenceError                 (6),
 *   unknownSubject                (7),
 *   unknownCert                   (8),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_CASP_error {
    noReason = 0,
    unknownContentType = 1,
    unsupportedWLMPversion = 2,
    missingContent = 3,
    missingContentComponent = 4,
    invalidContentComponent = 5,
    sequenceError = 6,
    unknownSubject = 7,
    unknownCert = 8,
}
/**
 * @summary CASP_error
 */
export type CASP_error = _enum_for_CASP_error | ENUMERATED;
/**
 * @summary CASP_error_noReason
 * @constant
 * @type {number}
 */
export const CASP_error_noReason: CASP_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASP_error_unknownContentType
 * @constant
 * @type {number}
 */
export const CASP_error_unknownContentType: CASP_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASP_error_unsupportedWLMPversion
 * @constant
 * @type {number}
 */
export const CASP_error_unsupportedWLMPversion: CASP_error = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASP_error_missingContent
 * @constant
 * @type {number}
 */
export const CASP_error_missingContent: CASP_error = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASP_error_missingContentComponent
 * @constant
 * @type {number}
 */
export const CASP_error_missingContentComponent: CASP_error = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASP_error_invalidContentComponent
 * @constant
 * @type {number}
 */
export const CASP_error_invalidContentComponent: CASP_error = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASP_error_sequenceError
 * @constant
 * @type {number}
 */
export const CASP_error_sequenceError: CASP_error = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASP_error_unknownSubject
 * @constant
 * @type {number}
 */
export const CASP_error_unknownSubject: CASP_error = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASP_error_unknownCert
 * @constant
 * @type {number}
 */
export const CASP_error_unknownCert: CASP_error = 8; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_CASP_error: $.ASN1Decoder<CASP_error> | null = null;
let _cached_encoder_for_CASP_error: $.ASN1Encoder<CASP_error> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CASP_error
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CASP_error} The decoded data structure.
 */
export function _decode_CASP_error(el: _Element) {
    if (!_cached_decoder_for_CASP_error) {
        _cached_decoder_for_CASP_error = $._decodeEnumerated;
    }
    return _cached_decoder_for_CASP_error(el);
}
/**
 * @summary Encodes a(n) CASP_error into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CASP_error, encoded as an ASN.1 Element.
 */
export function _encode_CASP_error(
    value: CASP_error,
    elGetter: $.ASN1Encoder<CASP_error>
) {
    if (!_cached_encoder_for_CASP_error) {
        _cached_encoder_for_CASP_error = $._encodeEnumerated;
    }
    return _cached_encoder_for_CASP_error(value, elGetter);
}

/**
 * @summary CertSubscribeErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeErr ::= SEQUENCE {
 *   code       CASP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class CertSubscribeErr {
    constructor(
        /**
         * @summary `code`.
         * @public
         * @readonly
         */
        readonly code: CASP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertSubscribeErr
     * @description
     *
     * This takes an `object` and converts it to a `CertSubscribeErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertSubscribeErr`.
     * @returns {CertSubscribeErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertSubscribeErr]: CertSubscribeErr[_K] }>
    ): CertSubscribeErr {
        return new CertSubscribeErr(_o.code, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `code`
     * @public
     * @static
     */

    public static _enum_for_code = _enum_for_CASP_error;
}
/**
 * @summary The Leading Root Component Types of CertSubscribeErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertSubscribeErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "code",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertSubscribeErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertSubscribeErr: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertSubscribeErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertSubscribeErr: $.ComponentSpec[] = [];
let _cached_decoder_for_CertSubscribeErr: $.ASN1Decoder<
    CertSubscribeErr
> | null = null;
let _cached_encoder_for_CertSubscribeErr: $.ASN1Encoder<
    CertSubscribeErr
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeErr} The decoded data structure.
 */
export function _decode_CertSubscribeErr(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeErr) {
        _cached_decoder_for_CertSubscribeErr = function (
            el: _Element
        ): CertSubscribeErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertSubscribeErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "code";
            let code!: CASP_error;
            code = _decode_CASP_error(sequence[0]);
            return new CertSubscribeErr(code, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertSubscribeErr(el);
}
/**
 * @summary Encodes a(n) CertSubscribeErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeErr, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeErr(
    value: CertSubscribeErr,
    elGetter: $.ASN1Encoder<CertSubscribeErr>
) {
    if (!_cached_encoder_for_CertSubscribeErr) {
        _cached_encoder_for_CertSubscribeErr = function (
            value: CertSubscribeErr,
            elGetter: $.ASN1Encoder<CertSubscribeErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_error(
                                value.code,
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
    return _cached_encoder_for_CertSubscribeErr(value, elGetter);
}

/**
 * @summary CertSubscribeRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertSubscribeRsp_result =
    | { success: CertSubscribeOK } /* CHOICE_ALT_ROOT */
    | { failure: CertSubscribeErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertSubscribeRsp_result: $.ASN1Decoder<
    CertSubscribeRsp_result
> | null = null;
let _cached_encoder_for_CertSubscribeRsp_result: $.ASN1Encoder<
    CertSubscribeRsp_result
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeRsp_result} The decoded data structure.
 */
export function _decode_CertSubscribeRsp_result(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeRsp_result) {
        _cached_decoder_for_CertSubscribeRsp_result = $._decode_extensible_choice<
            CertSubscribeRsp_result
        >({
            "CONTEXT 0": [
                "success",
                $._decode_explicit<CertSubscribeOK>(
                    () => _decode_CertSubscribeOK
                ),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_explicit<CertSubscribeErr>(
                    () => _decode_CertSubscribeErr
                ),
            ],
        });
    }
    return _cached_decoder_for_CertSubscribeRsp_result(el);
}
/**
 * @summary Encodes a(n) CertSubscribeRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeRsp_result(
    value: CertSubscribeRsp_result,
    elGetter: $.ASN1Encoder<CertSubscribeRsp_result>
) {
    if (!_cached_encoder_for_CertSubscribeRsp_result) {
        _cached_encoder_for_CertSubscribeRsp_result = $._encode_choice<
            CertSubscribeRsp_result
        >(
            {
                success: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertSubscribeOK,
                    $.BER
                ),
                failure: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertSubscribeErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertSubscribeRsp_result(value, elGetter);
}

/**
 * @summary CertSubscribeRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeRsp ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
 *   result       CHOICE {
 *     success       [0]  CertSubscribeOK,
 *     failure       [1]  CertSubscribeErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertSubscribeRsp {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<CASPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: CertSubscribeRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertSubscribeRsp
     * @description
     *
     * This takes an `object` and converts it to a `CertSubscribeRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertSubscribeRsp`.
     * @returns {CertSubscribeRsp}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertSubscribeRsp]: CertSubscribeRsp[_K] }>
    ): CertSubscribeRsp {
        return new CertSubscribeRsp(
            _o.version,
            _o.sequence,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return CASPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_CASPversion;
}
/**
 * @summary The Leading Root Component Types of CertSubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertSubscribeRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of CertSubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertSubscribeRsp: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertSubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertSubscribeRsp: $.ComponentSpec[] = [];
let _cached_decoder_for_CertSubscribeRsp: $.ASN1Decoder<
    CertSubscribeRsp
> | null = null;
let _cached_encoder_for_CertSubscribeRsp: $.ASN1Encoder<
    CertSubscribeRsp
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeRsp} The decoded data structure.
 */
export function _decode_CertSubscribeRsp(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeRsp) {
        _cached_decoder_for_CertSubscribeRsp = function (
            el: _Element
        ): CertSubscribeRsp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<CASPversion> =
                CertSubscribeRsp._default_value_for_version;
            let sequence!: CASPsequence;
            let result!: CertSubscribeRsp_result;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                result: (_el: _Element): void => {
                    result = _decode_CertSubscribeRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertSubscribeRsp,
                _extension_additions_list_spec_for_CertSubscribeRsp,
                _root_component_type_list_2_spec_for_CertSubscribeRsp,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) CertSubscribeRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeRsp, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeRsp(
    value: CertSubscribeRsp,
    elGetter: $.ASN1Encoder<CertSubscribeRsp>
) {
    if (!_cached_encoder_for_CertSubscribeRsp) {
        _cached_encoder_for_CertSubscribeRsp = function (
            value: CertSubscribeRsp,
            elGetter: $.ASN1Encoder<CertSubscribeRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CertSubscribeRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(value.version, $.BER),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertSubscribeRsp_result(
                                value.result,
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
    return _cached_encoder_for_CertSubscribeRsp(value, elGetter);
}

/**
 * @summary id_certSubscribeRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-certSubscribeRsp     OBJECT IDENTIFIER ::= {id-cmsct 12}
 * ```
 *
 * @constant
 */
export const id_certSubscribeRsp: OBJECT_IDENTIFIER = new _OID([12], id_cmsct);

/**
 * @summary certSubscribeRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certSubscribeRsp WRAPPED-PDU ::= {
 *                  CertSubscribeRsp
 *   IDENTIFIED BY  id-certSubscribeRsp }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const certSubscribeRsp: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertSubscribeRsp,
    },
    encoderFor: {
        "&Type": _encode_CertSubscribeRsp,
    },
    "&id": id_certSubscribeRsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary CertUnsubscribeReq_certs_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeReq-certs-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertUnsubscribeReq_certs_Item {
    constructor(
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUnsubscribeReq_certs_Item
     * @description
     *
     * This takes an `object` and converts it to a `CertUnsubscribeReq_certs_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUnsubscribeReq_certs_Item`.
     * @returns {CertUnsubscribeReq_certs_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertUnsubscribeReq_certs_Item]: CertUnsubscribeReq_certs_Item[_K];
            }
        >
    ): CertUnsubscribeReq_certs_Item {
        return new CertUnsubscribeReq_certs_Item(
            _o.subject,
            _o.serialNumber,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertUnsubscribeReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUnsubscribeReq_certs_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("subject", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUnsubscribeReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUnsubscribeReq_certs_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUnsubscribeReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUnsubscribeReq_certs_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUnsubscribeReq_certs_Item: $.ASN1Decoder<
    CertUnsubscribeReq_certs_Item
> | null = null;
let _cached_encoder_for_CertUnsubscribeReq_certs_Item: $.ASN1Encoder<
    CertUnsubscribeReq_certs_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeReq_certs_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeReq_certs_Item} The decoded data structure.
 */
export function _decode_CertUnsubscribeReq_certs_Item(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeReq_certs_Item) {
        _cached_decoder_for_CertUnsubscribeReq_certs_Item = function (
            el: _Element
        ): CertUnsubscribeReq_certs_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertUnsubscribeReq-certs-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "subject";
            sequence[1].name = "serialNumber";
            let subject!: Name;
            let serialNumber!: CertificateSerialNumber;
            subject = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            return new CertUnsubscribeReq_certs_Item(
                subject,
                serialNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertUnsubscribeReq_certs_Item(el);
}
/**
 * @summary Encodes a(n) CertUnsubscribeReq_certs_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeReq_certs_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeReq_certs_Item(
    value: CertUnsubscribeReq_certs_Item,
    elGetter: $.ASN1Encoder<CertUnsubscribeReq_certs_Item>
) {
    if (!_cached_encoder_for_CertUnsubscribeReq_certs_Item) {
        _cached_encoder_for_CertUnsubscribeReq_certs_Item = function (
            value: CertUnsubscribeReq_certs_Item,
            elGetter: $.ASN1Encoder<CertUnsubscribeReq_certs_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.subject, $.BER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
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
    return _cached_encoder_for_CertUnsubscribeReq_certs_Item(value, elGetter);
}

/**
 * @summary CertUnsubscribeReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeReq ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
 *   certs  SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     subject      Name,
 *     serialNumber CertificateSerialNumber,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertUnsubscribeReq {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<CASPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: CertUnsubscribeReq_certs_Item[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUnsubscribeReq
     * @description
     *
     * This takes an `object` and converts it to a `CertUnsubscribeReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUnsubscribeReq`.
     * @returns {CertUnsubscribeReq}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof CertUnsubscribeReq]: CertUnsubscribeReq[_K] }
        >
    ): CertUnsubscribeReq {
        return new CertUnsubscribeReq(
            _o.version,
            _o.sequence,
            _o.certs,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return CASPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_CASPversion;
}
/**
 * @summary The Leading Root Component Types of CertUnsubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUnsubscribeReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certs",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUnsubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUnsubscribeReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUnsubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUnsubscribeReq: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUnsubscribeReq: $.ASN1Decoder<
    CertUnsubscribeReq
> | null = null;
let _cached_encoder_for_CertUnsubscribeReq: $.ASN1Encoder<
    CertUnsubscribeReq
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeReq} The decoded data structure.
 */
export function _decode_CertUnsubscribeReq(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeReq) {
        _cached_decoder_for_CertUnsubscribeReq = function (
            el: _Element
        ): CertUnsubscribeReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<CASPversion> =
                CertUnsubscribeReq._default_value_for_version;
            let sequence!: CASPsequence;
            let certs!: CertUnsubscribeReq_certs_Item[];
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                certs: (_el: _Element): void => {
                    certs = $._decodeSequenceOf<CertUnsubscribeReq_certs_Item>(
                        () => _decode_CertUnsubscribeReq_certs_Item
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertUnsubscribeReq,
                _extension_additions_list_spec_for_CertUnsubscribeReq,
                _root_component_type_list_2_spec_for_CertUnsubscribeReq,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) CertUnsubscribeReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeReq, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeReq(
    value: CertUnsubscribeReq,
    elGetter: $.ASN1Encoder<CertUnsubscribeReq>
) {
    if (!_cached_encoder_for_CertUnsubscribeReq) {
        _cached_encoder_for_CertUnsubscribeReq = function (
            value: CertUnsubscribeReq,
            elGetter: $.ASN1Encoder<CertUnsubscribeReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CertUnsubscribeReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(value.version, $.BER),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSequenceOf<
                                CertUnsubscribeReq_certs_Item
                            >(
                                () => _encode_CertUnsubscribeReq_certs_Item,
                                $.BER
                            )(value.certs, $.BER),
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
    return _cached_encoder_for_CertUnsubscribeReq(value, elGetter);
}

/**
 * @summary id_certUnsubscribeReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-certUnsubscribeReq   OBJECT IDENTIFIER ::= {id-cmsct 13}
 * ```
 *
 * @constant
 */
export const id_certUnsubscribeReq: OBJECT_IDENTIFIER = new _OID(
    [13],
    id_cmsct
);

/**
 * @summary certUnsubscribeReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certUnsubscribeReq WRAPPED-PDU ::= {
 *                  CertUnsubscribeReq
 *   IDENTIFIED BY  id-certUnsubscribeReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const certUnsubscribeReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertUnsubscribeReq,
    },
    encoderFor: {
        "&Type": _encode_CertUnsubscribeReq,
    },
    "&id": id_certUnsubscribeReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary CertUnsubscribeOK_Item_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeOK-Item-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertUnsubscribeOK_Item_ok {
    constructor(
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUnsubscribeOK_Item_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertUnsubscribeOK_Item_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUnsubscribeOK_Item_ok`.
     * @returns {CertUnsubscribeOK_Item_ok}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertUnsubscribeOK_Item_ok]: CertUnsubscribeOK_Item_ok[_K];
            }
        >
    ): CertUnsubscribeOK_Item_ok {
        return new CertUnsubscribeOK_Item_ok(
            _o.subject,
            _o.serialNumber,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertUnsubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUnsubscribeOK_Item_ok: $.ComponentSpec[] = [
    new $.ComponentSpec("subject", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUnsubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUnsubscribeOK_Item_ok: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUnsubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUnsubscribeOK_Item_ok: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUnsubscribeOK_Item_ok: $.ASN1Decoder<
    CertUnsubscribeOK_Item_ok
> | null = null;
let _cached_encoder_for_CertUnsubscribeOK_Item_ok: $.ASN1Encoder<
    CertUnsubscribeOK_Item_ok
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeOK_Item_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeOK_Item_ok} The decoded data structure.
 */
export function _decode_CertUnsubscribeOK_Item_ok(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeOK_Item_ok) {
        _cached_decoder_for_CertUnsubscribeOK_Item_ok = function (
            el: _Element
        ): CertUnsubscribeOK_Item_ok {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertUnsubscribeOK-Item-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "subject";
            sequence[1].name = "serialNumber";
            let subject!: Name;
            let serialNumber!: CertificateSerialNumber;
            subject = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            return new CertUnsubscribeOK_Item_ok(
                subject,
                serialNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertUnsubscribeOK_Item_ok(el);
}
/**
 * @summary Encodes a(n) CertUnsubscribeOK_Item_ok into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeOK_Item_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeOK_Item_ok(
    value: CertUnsubscribeOK_Item_ok,
    elGetter: $.ASN1Encoder<CertUnsubscribeOK_Item_ok>
) {
    if (!_cached_encoder_for_CertUnsubscribeOK_Item_ok) {
        _cached_encoder_for_CertUnsubscribeOK_Item_ok = function (
            value: CertUnsubscribeOK_Item_ok,
            elGetter: $.ASN1Encoder<CertUnsubscribeOK_Item_ok>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.subject, $.BER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
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
    return _cached_encoder_for_CertUnsubscribeOK_Item_ok(value, elGetter);
}

/**
 * @summary CertUnsubscribeOK_Item_not_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeOK-Item-not-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertUnsubscribeOK_Item_not_ok {
    constructor(
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: CASP_CertStatusCode,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUnsubscribeOK_Item_not_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertUnsubscribeOK_Item_not_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUnsubscribeOK_Item_not_ok`.
     * @returns {CertUnsubscribeOK_Item_not_ok}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertUnsubscribeOK_Item_not_ok]: CertUnsubscribeOK_Item_not_ok[_K];
            }
        >
    ): CertUnsubscribeOK_Item_not_ok {
        return new CertUnsubscribeOK_Item_not_ok(
            _o.status,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `status`
     * @public
     * @static
     */

    public static _enum_for_status = _enum_for_CASP_CertStatusCode;
}
/**
 * @summary The Leading Root Component Types of CertUnsubscribeOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUnsubscribeOK_Item_not_ok: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "status",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUnsubscribeOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUnsubscribeOK_Item_not_ok: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUnsubscribeOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUnsubscribeOK_Item_not_ok: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUnsubscribeOK_Item_not_ok: $.ASN1Decoder<
    CertUnsubscribeOK_Item_not_ok
> | null = null;
let _cached_encoder_for_CertUnsubscribeOK_Item_not_ok: $.ASN1Encoder<
    CertUnsubscribeOK_Item_not_ok
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeOK_Item_not_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeOK_Item_not_ok} The decoded data structure.
 */
export function _decode_CertUnsubscribeOK_Item_not_ok(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeOK_Item_not_ok) {
        _cached_decoder_for_CertUnsubscribeOK_Item_not_ok = function (
            el: _Element
        ): CertUnsubscribeOK_Item_not_ok {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertUnsubscribeOK-Item-not-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "status";
            let status!: CASP_CertStatusCode;
            status = _decode_CASP_CertStatusCode(sequence[0]);
            return new CertUnsubscribeOK_Item_not_ok(status, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertUnsubscribeOK_Item_not_ok(el);
}
/**
 * @summary Encodes a(n) CertUnsubscribeOK_Item_not_ok into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeOK_Item_not_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeOK_Item_not_ok(
    value: CertUnsubscribeOK_Item_not_ok,
    elGetter: $.ASN1Encoder<CertUnsubscribeOK_Item_not_ok>
) {
    if (!_cached_encoder_for_CertUnsubscribeOK_Item_not_ok) {
        _cached_encoder_for_CertUnsubscribeOK_Item_not_ok = function (
            value: CertUnsubscribeOK_Item_not_ok,
            elGetter: $.ASN1Encoder<CertUnsubscribeOK_Item_not_ok>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_CertStatusCode(
                                value.status,
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
    return _cached_encoder_for_CertUnsubscribeOK_Item_not_ok(value, elGetter);
}

/**
 * @summary CertUnsubscribeOK_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeOK-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertUnsubscribeOK_Item =
    | { ok: CertUnsubscribeOK_Item_ok } /* CHOICE_ALT_ROOT */
    | { not_ok: CertUnsubscribeOK_Item_not_ok } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertUnsubscribeOK_Item: $.ASN1Decoder<
    CertUnsubscribeOK_Item
> | null = null;
let _cached_encoder_for_CertUnsubscribeOK_Item: $.ASN1Encoder<
    CertUnsubscribeOK_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeOK_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeOK_Item} The decoded data structure.
 */
export function _decode_CertUnsubscribeOK_Item(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeOK_Item) {
        _cached_decoder_for_CertUnsubscribeOK_Item = $._decode_extensible_choice<
            CertUnsubscribeOK_Item
        >({
            "CONTEXT 0": [
                "ok",
                $._decode_explicit<CertUnsubscribeOK_Item_ok>(
                    () => _decode_CertUnsubscribeOK_Item_ok
                ),
            ],
            "CONTEXT 1": [
                "not_ok",
                $._decode_explicit<CertUnsubscribeOK_Item_not_ok>(
                    () => _decode_CertUnsubscribeOK_Item_not_ok
                ),
            ],
        });
    }
    return _cached_decoder_for_CertUnsubscribeOK_Item(el);
}
/**
 * @summary Encodes a(n) CertUnsubscribeOK_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeOK_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeOK_Item(
    value: CertUnsubscribeOK_Item,
    elGetter: $.ASN1Encoder<CertUnsubscribeOK_Item>
) {
    if (!_cached_encoder_for_CertUnsubscribeOK_Item) {
        _cached_encoder_for_CertUnsubscribeOK_Item = $._encode_choice<
            CertUnsubscribeOK_Item
        >(
            {
                ok: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertUnsubscribeOK_Item_ok,
                    $.BER
                ),
                not_ok: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertUnsubscribeOK_Item_not_ok,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertUnsubscribeOK_Item(value, elGetter);
}

export type CertUnsubscribeOK<> = CertUnsubscribeOK_Item[]; // SequenceOfType
let _cached_decoder_for_CertUnsubscribeOK: $.ASN1Decoder<
    CertUnsubscribeOK
> | null = null;
let _cached_encoder_for_CertUnsubscribeOK: $.ASN1Encoder<
    CertUnsubscribeOK
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeOK} The decoded data structure.
 */
export function _decode_CertUnsubscribeOK(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeOK) {
        _cached_decoder_for_CertUnsubscribeOK = $._decodeSequenceOf<
            CertUnsubscribeOK_Item
        >(() => _decode_CertUnsubscribeOK_Item);
    }
    return _cached_decoder_for_CertUnsubscribeOK(el);
}
/**
 * @summary Encodes a(n) CertUnsubscribeOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeOK, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeOK(
    value: CertUnsubscribeOK,
    elGetter: $.ASN1Encoder<CertUnsubscribeOK>
) {
    if (!_cached_encoder_for_CertUnsubscribeOK) {
        _cached_encoder_for_CertUnsubscribeOK = $._encodeSequenceOf<
            CertUnsubscribeOK_Item
        >(() => _encode_CertUnsubscribeOK_Item, $.BER);
    }
    return _cached_encoder_for_CertUnsubscribeOK(value, elGetter);
}

/**
 * @summary CertUnsubscribeErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeErr ::= SEQUENCE {
 *   code         CASP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class CertUnsubscribeErr {
    constructor(
        /**
         * @summary `code`.
         * @public
         * @readonly
         */
        readonly code: CASP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUnsubscribeErr
     * @description
     *
     * This takes an `object` and converts it to a `CertUnsubscribeErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUnsubscribeErr`.
     * @returns {CertUnsubscribeErr}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof CertUnsubscribeErr]: CertUnsubscribeErr[_K] }
        >
    ): CertUnsubscribeErr {
        return new CertUnsubscribeErr(_o.code, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `code`
     * @public
     * @static
     */

    public static _enum_for_code = _enum_for_CASP_error;
}
/**
 * @summary The Leading Root Component Types of CertUnsubscribeErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUnsubscribeErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "code",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUnsubscribeErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUnsubscribeErr: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUnsubscribeErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUnsubscribeErr: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUnsubscribeErr: $.ASN1Decoder<
    CertUnsubscribeErr
> | null = null;
let _cached_encoder_for_CertUnsubscribeErr: $.ASN1Encoder<
    CertUnsubscribeErr
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeErr} The decoded data structure.
 */
export function _decode_CertUnsubscribeErr(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeErr) {
        _cached_decoder_for_CertUnsubscribeErr = function (
            el: _Element
        ): CertUnsubscribeErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertUnsubscribeErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "code";
            let code!: CASP_error;
            code = _decode_CASP_error(sequence[0]);
            return new CertUnsubscribeErr(code, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertUnsubscribeErr(el);
}
/**
 * @summary Encodes a(n) CertUnsubscribeErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeErr, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeErr(
    value: CertUnsubscribeErr,
    elGetter: $.ASN1Encoder<CertUnsubscribeErr>
) {
    if (!_cached_encoder_for_CertUnsubscribeErr) {
        _cached_encoder_for_CertUnsubscribeErr = function (
            value: CertUnsubscribeErr,
            elGetter: $.ASN1Encoder<CertUnsubscribeErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_error(
                                value.code,
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
    return _cached_encoder_for_CertUnsubscribeErr(value, elGetter);
}

/**
 * @summary CertUnsubscribeRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertUnsubscribeRsp_result =
    | { success: CertUnsubscribeOK } /* CHOICE_ALT_ROOT */
    | { failure: CertUnsubscribeErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertUnsubscribeRsp_result: $.ASN1Decoder<
    CertUnsubscribeRsp_result
> | null = null;
let _cached_encoder_for_CertUnsubscribeRsp_result: $.ASN1Encoder<
    CertUnsubscribeRsp_result
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeRsp_result} The decoded data structure.
 */
export function _decode_CertUnsubscribeRsp_result(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeRsp_result) {
        _cached_decoder_for_CertUnsubscribeRsp_result = $._decode_extensible_choice<
            CertUnsubscribeRsp_result
        >({
            "CONTEXT 0": [
                "success",
                $._decode_explicit<CertUnsubscribeOK>(
                    () => _decode_CertUnsubscribeOK
                ),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_explicit<CertUnsubscribeErr>(
                    () => _decode_CertUnsubscribeErr
                ),
            ],
        });
    }
    return _cached_decoder_for_CertUnsubscribeRsp_result(el);
}
/**
 * @summary Encodes a(n) CertUnsubscribeRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeRsp_result(
    value: CertUnsubscribeRsp_result,
    elGetter: $.ASN1Encoder<CertUnsubscribeRsp_result>
) {
    if (!_cached_encoder_for_CertUnsubscribeRsp_result) {
        _cached_encoder_for_CertUnsubscribeRsp_result = $._encode_choice<
            CertUnsubscribeRsp_result
        >(
            {
                success: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertUnsubscribeOK,
                    $.BER
                ),
                failure: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertUnsubscribeErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertUnsubscribeRsp_result(value, elGetter);
}

/**
 * @summary CertUnsubscribeRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeRsp ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
 *   result       CHOICE {
 *     success       [0]  CertUnsubscribeOK,
 *     failure       [1]  CertUnsubscribeErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertUnsubscribeRsp {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<CASPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: CertUnsubscribeRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUnsubscribeRsp
     * @description
     *
     * This takes an `object` and converts it to a `CertUnsubscribeRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUnsubscribeRsp`.
     * @returns {CertUnsubscribeRsp}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof CertUnsubscribeRsp]: CertUnsubscribeRsp[_K] }
        >
    ): CertUnsubscribeRsp {
        return new CertUnsubscribeRsp(
            _o.version,
            _o.sequence,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return CASPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_CASPversion;
}
/**
 * @summary The Leading Root Component Types of CertUnsubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUnsubscribeRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of CertUnsubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUnsubscribeRsp: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUnsubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUnsubscribeRsp: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUnsubscribeRsp: $.ASN1Decoder<
    CertUnsubscribeRsp
> | null = null;
let _cached_encoder_for_CertUnsubscribeRsp: $.ASN1Encoder<
    CertUnsubscribeRsp
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeRsp} The decoded data structure.
 */
export function _decode_CertUnsubscribeRsp(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeRsp) {
        _cached_decoder_for_CertUnsubscribeRsp = function (
            el: _Element
        ): CertUnsubscribeRsp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<CASPversion> =
                CertUnsubscribeRsp._default_value_for_version;
            let sequence!: CASPsequence;
            let result!: CertUnsubscribeRsp_result;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                result: (_el: _Element): void => {
                    result = _decode_CertUnsubscribeRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertUnsubscribeRsp,
                _extension_additions_list_spec_for_CertUnsubscribeRsp,
                _root_component_type_list_2_spec_for_CertUnsubscribeRsp,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) CertUnsubscribeRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeRsp, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeRsp(
    value: CertUnsubscribeRsp,
    elGetter: $.ASN1Encoder<CertUnsubscribeRsp>
) {
    if (!_cached_encoder_for_CertUnsubscribeRsp) {
        _cached_encoder_for_CertUnsubscribeRsp = function (
            value: CertUnsubscribeRsp,
            elGetter: $.ASN1Encoder<CertUnsubscribeRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CertUnsubscribeRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(value.version, $.BER),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertUnsubscribeRsp_result(
                                value.result,
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
    return _cached_encoder_for_CertUnsubscribeRsp(value, elGetter);
}

/**
 * @summary id_certUnsubscribeRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-certUnsubscribeRsp   OBJECT IDENTIFIER ::= {id-cmsct 14}
 * ```
 *
 * @constant
 */
export const id_certUnsubscribeRsp: OBJECT_IDENTIFIER = new _OID(
    [14],
    id_cmsct
);

/**
 * @summary certUnsubscribeRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certUnsubscribeRsp WRAPPED-PDU ::= {
 *                  CertUnsubscribeRsp
 *   IDENTIFIED BY  id-certUnsubscribeRsp }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const certUnsubscribeRsp: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertUnsubscribeRsp,
    },
    encoderFor: {
        "&Type": _encode_CertUnsubscribeRsp,
    },
    "&id": id_certUnsubscribeRsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary CertReplaceReq_certs_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceReq-certs-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertReplaceReq_certs_Item {
    constructor(
        /**
         * @summary `old`.
         * @public
         * @readonly
         */
        readonly old: CertificateSerialNumber,
        /**
         * @summary `new_`.
         * @public
         * @readonly
         */
        readonly new_: Certificate,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReplaceReq_certs_Item
     * @description
     *
     * This takes an `object` and converts it to a `CertReplaceReq_certs_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReplaceReq_certs_Item`.
     * @returns {CertReplaceReq_certs_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertReplaceReq_certs_Item]: CertReplaceReq_certs_Item[_K];
            }
        >
    ): CertReplaceReq_certs_Item {
        return new CertReplaceReq_certs_Item(
            _o.old,
            _o.new_,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertReplaceReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReplaceReq_certs_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "old",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "new",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertReplaceReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReplaceReq_certs_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertReplaceReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReplaceReq_certs_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_CertReplaceReq_certs_Item: $.ASN1Decoder<
    CertReplaceReq_certs_Item
> | null = null;
let _cached_encoder_for_CertReplaceReq_certs_Item: $.ASN1Encoder<
    CertReplaceReq_certs_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceReq_certs_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceReq_certs_Item} The decoded data structure.
 */
export function _decode_CertReplaceReq_certs_Item(el: _Element) {
    if (!_cached_decoder_for_CertReplaceReq_certs_Item) {
        _cached_decoder_for_CertReplaceReq_certs_Item = function (
            el: _Element
        ): CertReplaceReq_certs_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertReplaceReq-certs-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "old";
            sequence[1].name = "new";
            let old!: CertificateSerialNumber;
            let new_!: Certificate;
            old = _decode_CertificateSerialNumber(sequence[0]);
            new_ = _decode_Certificate(sequence[1]);
            return new CertReplaceReq_certs_Item(old, new_, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertReplaceReq_certs_Item(el);
}
/**
 * @summary Encodes a(n) CertReplaceReq_certs_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceReq_certs_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceReq_certs_Item(
    value: CertReplaceReq_certs_Item,
    elGetter: $.ASN1Encoder<CertReplaceReq_certs_Item>
) {
    if (!_cached_encoder_for_CertReplaceReq_certs_Item) {
        _cached_encoder_for_CertReplaceReq_certs_Item = function (
            value: CertReplaceReq_certs_Item,
            elGetter: $.ASN1Encoder<CertReplaceReq_certs_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.old,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Certificate(
                                value.new_,
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
    return _cached_encoder_for_CertReplaceReq_certs_Item(value, elGetter);
}

/**
 * @summary CertReplaceReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceReq ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
 *   certs         SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     old           CertificateSerialNumber,
 *     new           Certificate,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertReplaceReq {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<CASPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: CertReplaceReq_certs_Item[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReplaceReq
     * @description
     *
     * This takes an `object` and converts it to a `CertReplaceReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReplaceReq`.
     * @returns {CertReplaceReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertReplaceReq]: CertReplaceReq[_K] }>
    ): CertReplaceReq {
        return new CertReplaceReq(
            _o.version,
            _o.sequence,
            _o.certs,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return CASPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_CASPversion;
}
/**
 * @summary The Leading Root Component Types of CertReplaceReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReplaceReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certs",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertReplaceReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReplaceReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertReplaceReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReplaceReq: $.ComponentSpec[] = [];
let _cached_decoder_for_CertReplaceReq: $.ASN1Decoder<
    CertReplaceReq
> | null = null;
let _cached_encoder_for_CertReplaceReq: $.ASN1Encoder<
    CertReplaceReq
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceReq} The decoded data structure.
 */
export function _decode_CertReplaceReq(el: _Element) {
    if (!_cached_decoder_for_CertReplaceReq) {
        _cached_decoder_for_CertReplaceReq = function (
            el: _Element
        ): CertReplaceReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<CASPversion> =
                CertReplaceReq._default_value_for_version;
            let sequence!: CASPsequence;
            let certs!: CertReplaceReq_certs_Item[];
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                certs: (_el: _Element): void => {
                    certs = $._decodeSequenceOf<CertReplaceReq_certs_Item>(
                        () => _decode_CertReplaceReq_certs_Item
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertReplaceReq,
                _extension_additions_list_spec_for_CertReplaceReq,
                _root_component_type_list_2_spec_for_CertReplaceReq,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) CertReplaceReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceReq, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceReq(
    value: CertReplaceReq,
    elGetter: $.ASN1Encoder<CertReplaceReq>
) {
    if (!_cached_encoder_for_CertReplaceReq) {
        _cached_encoder_for_CertReplaceReq = function (
            value: CertReplaceReq,
            elGetter: $.ASN1Encoder<CertReplaceReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CertReplaceReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(value.version, $.BER),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSequenceOf<
                                CertReplaceReq_certs_Item
                            >(() => _encode_CertReplaceReq_certs_Item, $.BER)(
                                value.certs,
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
    return _cached_encoder_for_CertReplaceReq(value, elGetter);
}

/**
 * @summary id_certReplaceReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-certReplaceReq       OBJECT IDENTIFIER ::= {id-cmsct 15}
 * ```
 *
 * @constant
 */
export const id_certReplaceReq: OBJECT_IDENTIFIER = new _OID([15], id_cmsct);

/**
 * @summary certReplaceReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certReplaceReq WRAPPED-PDU ::= {
 *                  CertReplaceReq
 *   IDENTIFIED BY  id-certReplaceReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const certReplaceReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertReplaceReq,
    },
    encoderFor: {
        "&Type": _encode_CertReplaceReq,
    },
    "&id": id_certReplaceReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary CertReplaceOK_Item_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceOK-Item-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertReplaceOK_Item_ok {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReplaceOK_Item_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertReplaceOK_Item_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReplaceOK_Item_ok`.
     * @returns {CertReplaceOK_Item_ok}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof CertReplaceOK_Item_ok]: CertReplaceOK_Item_ok[_K] }
        >
    ): CertReplaceOK_Item_ok {
        return new CertReplaceOK_Item_ok(
            _o.issuer,
            _o.serialNumber,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertReplaceOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReplaceOK_Item_ok: $.ComponentSpec[] = [
    new $.ComponentSpec("issuer", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertReplaceOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReplaceOK_Item_ok: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertReplaceOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReplaceOK_Item_ok: $.ComponentSpec[] = [];
let _cached_decoder_for_CertReplaceOK_Item_ok: $.ASN1Decoder<
    CertReplaceOK_Item_ok
> | null = null;
let _cached_encoder_for_CertReplaceOK_Item_ok: $.ASN1Encoder<
    CertReplaceOK_Item_ok
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceOK_Item_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceOK_Item_ok} The decoded data structure.
 */
export function _decode_CertReplaceOK_Item_ok(el: _Element) {
    if (!_cached_decoder_for_CertReplaceOK_Item_ok) {
        _cached_decoder_for_CertReplaceOK_Item_ok = function (
            el: _Element
        ): CertReplaceOK_Item_ok {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertReplaceOK-Item-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "issuer";
            sequence[1].name = "serialNumber";
            let issuer!: Name;
            let serialNumber!: CertificateSerialNumber;
            issuer = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            return new CertReplaceOK_Item_ok(
                issuer,
                serialNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertReplaceOK_Item_ok(el);
}
/**
 * @summary Encodes a(n) CertReplaceOK_Item_ok into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceOK_Item_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceOK_Item_ok(
    value: CertReplaceOK_Item_ok,
    elGetter: $.ASN1Encoder<CertReplaceOK_Item_ok>
) {
    if (!_cached_encoder_for_CertReplaceOK_Item_ok) {
        _cached_encoder_for_CertReplaceOK_Item_ok = function (
            value: CertReplaceOK_Item_ok,
            elGetter: $.ASN1Encoder<CertReplaceOK_Item_ok>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.issuer, $.BER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
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
    return _cached_encoder_for_CertReplaceOK_Item_ok(value, elGetter);
}

/**
 * @summary CertReplaceOK_Item_not_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceOK-Item-not-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertReplaceOK_Item_not_ok {
    constructor(
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: CASP_CertStatusCode,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReplaceOK_Item_not_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertReplaceOK_Item_not_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReplaceOK_Item_not_ok`.
     * @returns {CertReplaceOK_Item_not_ok}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertReplaceOK_Item_not_ok]: CertReplaceOK_Item_not_ok[_K];
            }
        >
    ): CertReplaceOK_Item_not_ok {
        return new CertReplaceOK_Item_not_ok(
            _o.status,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `status`
     * @public
     * @static
     */

    public static _enum_for_status = _enum_for_CASP_CertStatusCode;
}
/**
 * @summary The Leading Root Component Types of CertReplaceOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReplaceOK_Item_not_ok: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "status",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertReplaceOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReplaceOK_Item_not_ok: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertReplaceOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReplaceOK_Item_not_ok: $.ComponentSpec[] = [];
let _cached_decoder_for_CertReplaceOK_Item_not_ok: $.ASN1Decoder<
    CertReplaceOK_Item_not_ok
> | null = null;
let _cached_encoder_for_CertReplaceOK_Item_not_ok: $.ASN1Encoder<
    CertReplaceOK_Item_not_ok
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceOK_Item_not_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceOK_Item_not_ok} The decoded data structure.
 */
export function _decode_CertReplaceOK_Item_not_ok(el: _Element) {
    if (!_cached_decoder_for_CertReplaceOK_Item_not_ok) {
        _cached_decoder_for_CertReplaceOK_Item_not_ok = function (
            el: _Element
        ): CertReplaceOK_Item_not_ok {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertReplaceOK-Item-not-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "status";
            let status!: CASP_CertStatusCode;
            status = _decode_CASP_CertStatusCode(sequence[0]);
            return new CertReplaceOK_Item_not_ok(status, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertReplaceOK_Item_not_ok(el);
}
/**
 * @summary Encodes a(n) CertReplaceOK_Item_not_ok into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceOK_Item_not_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceOK_Item_not_ok(
    value: CertReplaceOK_Item_not_ok,
    elGetter: $.ASN1Encoder<CertReplaceOK_Item_not_ok>
) {
    if (!_cached_encoder_for_CertReplaceOK_Item_not_ok) {
        _cached_encoder_for_CertReplaceOK_Item_not_ok = function (
            value: CertReplaceOK_Item_not_ok,
            elGetter: $.ASN1Encoder<CertReplaceOK_Item_not_ok>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_CertStatusCode(
                                value.status,
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
    return _cached_encoder_for_CertReplaceOK_Item_not_ok(value, elGetter);
}

/**
 * @summary CertReplaceOK_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceOK-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertReplaceOK_Item =
    | { ok: CertReplaceOK_Item_ok } /* CHOICE_ALT_ROOT */
    | { not_ok: CertReplaceOK_Item_not_ok } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertReplaceOK_Item: $.ASN1Decoder<
    CertReplaceOK_Item
> | null = null;
let _cached_encoder_for_CertReplaceOK_Item: $.ASN1Encoder<
    CertReplaceOK_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceOK_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceOK_Item} The decoded data structure.
 */
export function _decode_CertReplaceOK_Item(el: _Element) {
    if (!_cached_decoder_for_CertReplaceOK_Item) {
        _cached_decoder_for_CertReplaceOK_Item = $._decode_extensible_choice<
            CertReplaceOK_Item
        >({
            "CONTEXT 0": [
                "ok",
                $._decode_explicit<CertReplaceOK_Item_ok>(
                    () => _decode_CertReplaceOK_Item_ok
                ),
            ],
            "CONTEXT 1": [
                "not_ok",
                $._decode_explicit<CertReplaceOK_Item_not_ok>(
                    () => _decode_CertReplaceOK_Item_not_ok
                ),
            ],
        });
    }
    return _cached_decoder_for_CertReplaceOK_Item(el);
}
/**
 * @summary Encodes a(n) CertReplaceOK_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceOK_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceOK_Item(
    value: CertReplaceOK_Item,
    elGetter: $.ASN1Encoder<CertReplaceOK_Item>
) {
    if (!_cached_encoder_for_CertReplaceOK_Item) {
        _cached_encoder_for_CertReplaceOK_Item = $._encode_choice<
            CertReplaceOK_Item
        >(
            {
                ok: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertReplaceOK_Item_ok,
                    $.BER
                ),
                not_ok: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertReplaceOK_Item_not_ok,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertReplaceOK_Item(value, elGetter);
}

export type CertReplaceOK<> = CertReplaceOK_Item[]; // SequenceOfType
let _cached_decoder_for_CertReplaceOK: $.ASN1Decoder<
    CertReplaceOK
> | null = null;
let _cached_encoder_for_CertReplaceOK: $.ASN1Encoder<
    CertReplaceOK
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceOK} The decoded data structure.
 */
export function _decode_CertReplaceOK(el: _Element) {
    if (!_cached_decoder_for_CertReplaceOK) {
        _cached_decoder_for_CertReplaceOK = $._decodeSequenceOf<
            CertReplaceOK_Item
        >(() => _decode_CertReplaceOK_Item);
    }
    return _cached_decoder_for_CertReplaceOK(el);
}
/**
 * @summary Encodes a(n) CertReplaceOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceOK, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceOK(
    value: CertReplaceOK,
    elGetter: $.ASN1Encoder<CertReplaceOK>
) {
    if (!_cached_encoder_for_CertReplaceOK) {
        _cached_encoder_for_CertReplaceOK = $._encodeSequenceOf<
            CertReplaceOK_Item
        >(() => _encode_CertReplaceOK_Item, $.BER);
    }
    return _cached_encoder_for_CertReplaceOK(value, elGetter);
}

/**
 * @summary SignedData_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedData-error ::= ENUMERATED {
 *   noReason                           (0),
 *   signedDataContectTypeExpected      (1),
 *   wrongSignedDataVersion             (2),
 *   missingContent                     (3),
 *   missingContentComponent            (4),
 *   invalidContentComponent            (5),
 *   unsupportedHashAlgorithm           (6),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_SignedData_error {
    noReason = 0,
    signedDataContectTypeExpected = 1,
    wrongSignedDataVersion = 2,
    missingContent = 3,
    missingContentComponent = 4,
    invalidContentComponent = 5,
    unsupportedHashAlgorithm = 6,
}
/**
 * @summary SignedData_error
 */
export type SignedData_error = _enum_for_SignedData_error | ENUMERATED;
/**
 * @summary SignedData_error_noReason
 * @constant
 * @type {number}
 */
export const SignedData_error_noReason: SignedData_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary SignedData_error_signedDataContectTypeExpected
 * @constant
 * @type {number}
 */
export const SignedData_error_signedDataContectTypeExpected: SignedData_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary SignedData_error_wrongSignedDataVersion
 * @constant
 * @type {number}
 */
export const SignedData_error_wrongSignedDataVersion: SignedData_error = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary SignedData_error_missingContent
 * @constant
 * @type {number}
 */
export const SignedData_error_missingContent: SignedData_error = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary SignedData_error_missingContentComponent
 * @constant
 * @type {number}
 */
export const SignedData_error_missingContentComponent: SignedData_error = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary SignedData_error_invalidContentComponent
 * @constant
 * @type {number}
 */
export const SignedData_error_invalidContentComponent: SignedData_error = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary SignedData_error_unsupportedHashAlgorithm
 * @constant
 * @type {number}
 */
export const SignedData_error_unsupportedHashAlgorithm: SignedData_error = 6; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_SignedData_error: $.ASN1Decoder<
    SignedData_error
> | null = null;
let _cached_encoder_for_SignedData_error: $.ASN1Encoder<
    SignedData_error
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SignedData_error
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedData_error} The decoded data structure.
 */
export function _decode_SignedData_error(el: _Element) {
    if (!_cached_decoder_for_SignedData_error) {
        _cached_decoder_for_SignedData_error = $._decodeEnumerated;
    }
    return _cached_decoder_for_SignedData_error(el);
}
/**
 * @summary Encodes a(n) SignedData_error into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedData_error, encoded as an ASN.1 Element.
 */
export function _encode_SignedData_error(
    value: SignedData_error,
    elGetter: $.ASN1Encoder<SignedData_error>
) {
    if (!_cached_encoder_for_SignedData_error) {
        _cached_encoder_for_SignedData_error = $._encodeEnumerated;
    }
    return _cached_encoder_for_SignedData_error(value, elGetter);
}

/**
 * @summary EnvelopedData_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnvelopedData-error ::= ENUMERATED {
 *   noReason                           (0),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_EnvelopedData_error {
    noReason = 0,
}
/**
 * @summary EnvelopedData_error
 */
export type EnvelopedData_error = _enum_for_EnvelopedData_error | ENUMERATED;
/**
 * @summary EnvelopedData_error_noReason
 * @constant
 * @type {number}
 */
export const EnvelopedData_error_noReason: EnvelopedData_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_EnvelopedData_error: $.ASN1Decoder<
    EnvelopedData_error
> | null = null;
let _cached_encoder_for_EnvelopedData_error: $.ASN1Encoder<
    EnvelopedData_error
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EnvelopedData_error
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnvelopedData_error} The decoded data structure.
 */
export function _decode_EnvelopedData_error(el: _Element) {
    if (!_cached_decoder_for_EnvelopedData_error) {
        _cached_decoder_for_EnvelopedData_error = $._decodeEnumerated;
    }
    return _cached_decoder_for_EnvelopedData_error(el);
}
/**
 * @summary Encodes a(n) EnvelopedData_error into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnvelopedData_error, encoded as an ASN.1 Element.
 */
export function _encode_EnvelopedData_error(
    value: EnvelopedData_error,
    elGetter: $.ASN1Encoder<EnvelopedData_error>
) {
    if (!_cached_encoder_for_EnvelopedData_error) {
        _cached_encoder_for_EnvelopedData_error = $._encodeEnumerated;
    }
    return _cached_encoder_for_EnvelopedData_error(value, elGetter);
}

/**
 * @summary CertReplaceErr_code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceErr-code ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertReplaceErr_code =
    | { signedData: SignedData_error } /* CHOICE_ALT_ROOT */
    | { envelopedData: EnvelopedData_error } /* CHOICE_ALT_ROOT */
    | { casp: CASP_error } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertReplaceErr_code: $.ASN1Decoder<
    CertReplaceErr_code
> | null = null;
let _cached_encoder_for_CertReplaceErr_code: $.ASN1Encoder<
    CertReplaceErr_code
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceErr_code
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceErr_code} The decoded data structure.
 */
export function _decode_CertReplaceErr_code(el: _Element) {
    if (!_cached_decoder_for_CertReplaceErr_code) {
        _cached_decoder_for_CertReplaceErr_code = $._decode_extensible_choice<
            CertReplaceErr_code
        >({
            "CONTEXT 0": [
                "signedData",
                $._decode_explicit<SignedData_error>(
                    () => _decode_SignedData_error
                ),
            ],
            "CONTEXT 1": [
                "envelopedData",
                $._decode_explicit<EnvelopedData_error>(
                    () => _decode_EnvelopedData_error
                ),
            ],
            "CONTEXT 2": [
                "casp",
                $._decode_explicit<CASP_error>(() => _decode_CASP_error),
            ],
        });
    }
    return _cached_decoder_for_CertReplaceErr_code(el);
}
/**
 * @summary Encodes a(n) CertReplaceErr_code into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceErr_code, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceErr_code(
    value: CertReplaceErr_code,
    elGetter: $.ASN1Encoder<CertReplaceErr_code>
) {
    if (!_cached_encoder_for_CertReplaceErr_code) {
        _cached_encoder_for_CertReplaceErr_code = $._encode_choice<
            CertReplaceErr_code
        >(
            {
                signedData: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_SignedData_error,
                    $.BER
                ),
                envelopedData: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_EnvelopedData_error,
                    $.BER
                ),
                casp: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_CASP_error,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertReplaceErr_code(value, elGetter);
}

/**
 * @summary CertReplaceErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceErr ::= SEQUENCE {
 *   code        CHOICE {
 *     signedData     [0]  SignedData-error,
 *     envelopedData  [1]  EnvelopedData-error,
 *     casp           [2]  CASP-error,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertReplaceErr {
    constructor(
        /**
         * @summary `code`.
         * @public
         * @readonly
         */
        readonly code: CertReplaceErr_code,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReplaceErr
     * @description
     *
     * This takes an `object` and converts it to a `CertReplaceErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReplaceErr`.
     * @returns {CertReplaceErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertReplaceErr]: CertReplaceErr[_K] }>
    ): CertReplaceErr {
        return new CertReplaceErr(_o.code, _o._unrecognizedExtensionsList);
    }
}
/**
 * @summary The Leading Root Component Types of CertReplaceErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReplaceErr: $.ComponentSpec[] = [
    new $.ComponentSpec("code", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of CertReplaceErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReplaceErr: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertReplaceErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReplaceErr: $.ComponentSpec[] = [];
let _cached_decoder_for_CertReplaceErr: $.ASN1Decoder<
    CertReplaceErr
> | null = null;
let _cached_encoder_for_CertReplaceErr: $.ASN1Encoder<
    CertReplaceErr
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceErr} The decoded data structure.
 */
export function _decode_CertReplaceErr(el: _Element) {
    if (!_cached_decoder_for_CertReplaceErr) {
        _cached_decoder_for_CertReplaceErr = function (
            el: _Element
        ): CertReplaceErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertReplaceErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "code";
            let code!: CertReplaceErr_code;
            code = _decode_CertReplaceErr_code(sequence[0]);
            return new CertReplaceErr(code, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertReplaceErr(el);
}
/**
 * @summary Encodes a(n) CertReplaceErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceErr, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceErr(
    value: CertReplaceErr,
    elGetter: $.ASN1Encoder<CertReplaceErr>
) {
    if (!_cached_encoder_for_CertReplaceErr) {
        _cached_encoder_for_CertReplaceErr = function (
            value: CertReplaceErr,
            elGetter: $.ASN1Encoder<CertReplaceErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertReplaceErr_code(
                                value.code,
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
    return _cached_encoder_for_CertReplaceErr(value, elGetter);
}

/**
 * @summary CertReplaceRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertReplaceRsp_result =
    | { success: CertReplaceOK } /* CHOICE_ALT_ROOT */
    | { failure: CertReplaceErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertReplaceRsp_result: $.ASN1Decoder<
    CertReplaceRsp_result
> | null = null;
let _cached_encoder_for_CertReplaceRsp_result: $.ASN1Encoder<
    CertReplaceRsp_result
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceRsp_result} The decoded data structure.
 */
export function _decode_CertReplaceRsp_result(el: _Element) {
    if (!_cached_decoder_for_CertReplaceRsp_result) {
        _cached_decoder_for_CertReplaceRsp_result = $._decode_extensible_choice<
            CertReplaceRsp_result
        >({
            "CONTEXT 0": [
                "success",
                $._decode_explicit<CertReplaceOK>(() => _decode_CertReplaceOK),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_explicit<CertReplaceErr>(
                    () => _decode_CertReplaceErr
                ),
            ],
        });
    }
    return _cached_decoder_for_CertReplaceRsp_result(el);
}
/**
 * @summary Encodes a(n) CertReplaceRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceRsp_result(
    value: CertReplaceRsp_result,
    elGetter: $.ASN1Encoder<CertReplaceRsp_result>
) {
    if (!_cached_encoder_for_CertReplaceRsp_result) {
        _cached_encoder_for_CertReplaceRsp_result = $._encode_choice<
            CertReplaceRsp_result
        >(
            {
                success: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertReplaceOK,
                    $.BER
                ),
                failure: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertReplaceErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertReplaceRsp_result(value, elGetter);
}

/**
 * @summary CertReplaceRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceRsp ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
 *   result        CHOICE {
 *     success       [0]  CertReplaceOK,
 *     failure       [1]  CertReplaceErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertReplaceRsp {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<CASPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: CertReplaceRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReplaceRsp
     * @description
     *
     * This takes an `object` and converts it to a `CertReplaceRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReplaceRsp`.
     * @returns {CertReplaceRsp}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertReplaceRsp]: CertReplaceRsp[_K] }>
    ): CertReplaceRsp {
        return new CertReplaceRsp(
            _o.version,
            _o.sequence,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return CASPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_CASPversion;
}
/**
 * @summary The Leading Root Component Types of CertReplaceRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReplaceRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of CertReplaceRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReplaceRsp: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertReplaceRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReplaceRsp: $.ComponentSpec[] = [];
let _cached_decoder_for_CertReplaceRsp: $.ASN1Decoder<
    CertReplaceRsp
> | null = null;
let _cached_encoder_for_CertReplaceRsp: $.ASN1Encoder<
    CertReplaceRsp
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceRsp} The decoded data structure.
 */
export function _decode_CertReplaceRsp(el: _Element) {
    if (!_cached_decoder_for_CertReplaceRsp) {
        _cached_decoder_for_CertReplaceRsp = function (
            el: _Element
        ): CertReplaceRsp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<CASPversion> =
                CertReplaceRsp._default_value_for_version;
            let sequence!: CASPsequence;
            let result!: CertReplaceRsp_result;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                result: (_el: _Element): void => {
                    result = _decode_CertReplaceRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertReplaceRsp,
                _extension_additions_list_spec_for_CertReplaceRsp,
                _root_component_type_list_2_spec_for_CertReplaceRsp,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) CertReplaceRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceRsp, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceRsp(
    value: CertReplaceRsp,
    elGetter: $.ASN1Encoder<CertReplaceRsp>
) {
    if (!_cached_encoder_for_CertReplaceRsp) {
        _cached_encoder_for_CertReplaceRsp = function (
            value: CertReplaceRsp,
            elGetter: $.ASN1Encoder<CertReplaceRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CertReplaceRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(value.version, $.BER),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertReplaceRsp_result(
                                value.result,
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
    return _cached_encoder_for_CertReplaceRsp(value, elGetter);
}

/**
 * @summary id_certReplaceRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-certReplaceRsp       OBJECT IDENTIFIER ::= {id-cmsct 16}
 * ```
 *
 * @constant
 */
export const id_certReplaceRsp: OBJECT_IDENTIFIER = new _OID([16], id_cmsct);

/**
 * @summary certReplaceRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certReplaceRsp WRAPPED-PDU ::= {
 *                  CertReplaceRsp
 *   IDENTIFIED BY  id-certReplaceRsp }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const certReplaceRsp: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertReplaceRsp,
    },
    encoderFor: {
        "&Type": _encode_CertReplaceRsp,
    },
    "&id": id_certReplaceRsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary RejectCAsubscribe
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RejectCAsubscribe ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
 *   reason        CASP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class RejectCAsubscribe {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<CASPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: CASP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RejectCAsubscribe
     * @description
     *
     * This takes an `object` and converts it to a `RejectCAsubscribe`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RejectCAsubscribe`.
     * @returns {RejectCAsubscribe}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof RejectCAsubscribe]: RejectCAsubscribe[_K] }>
    ): RejectCAsubscribe {
        return new RejectCAsubscribe(
            _o.version,
            _o.sequence,
            _o.reason,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return CASPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_CASPversion;
    /**
     * @summary The enum used as the type of the component `reason`
     * @public
     * @static
     */

    public static _enum_for_reason = _enum_for_CASP_error;
}
/**
 * @summary The Leading Root Component Types of RejectCAsubscribe
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RejectCAsubscribe: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
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
 * @summary The Trailing Root Component Types of RejectCAsubscribe
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RejectCAsubscribe: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of RejectCAsubscribe
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RejectCAsubscribe: $.ComponentSpec[] = [];
let _cached_decoder_for_RejectCAsubscribe: $.ASN1Decoder<
    RejectCAsubscribe
> | null = null;
let _cached_encoder_for_RejectCAsubscribe: $.ASN1Encoder<
    RejectCAsubscribe
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RejectCAsubscribe
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RejectCAsubscribe} The decoded data structure.
 */
export function _decode_RejectCAsubscribe(el: _Element) {
    if (!_cached_decoder_for_RejectCAsubscribe) {
        _cached_decoder_for_RejectCAsubscribe = function (
            el: _Element
        ): RejectCAsubscribe {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<CASPversion> =
                RejectCAsubscribe._default_value_for_version;
            let sequence!: CASPsequence;
            let reason!: CASP_error;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                reason: (_el: _Element): void => {
                    reason = _decode_CASP_error(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RejectCAsubscribe,
                _extension_additions_list_spec_for_RejectCAsubscribe,
                _root_component_type_list_2_spec_for_RejectCAsubscribe,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) RejectCAsubscribe into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RejectCAsubscribe, encoded as an ASN.1 Element.
 */
export function _encode_RejectCAsubscribe(
    value: RejectCAsubscribe,
    elGetter: $.ASN1Encoder<RejectCAsubscribe>
) {
    if (!_cached_encoder_for_RejectCAsubscribe) {
        _cached_encoder_for_RejectCAsubscribe = function (
            value: RejectCAsubscribe,
            elGetter: $.ASN1Encoder<RejectCAsubscribe>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                RejectCAsubscribe._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(value.version, $.BER),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CASP_error(
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
    return _cached_encoder_for_RejectCAsubscribe(value, elGetter);
}

/**
 * @summary id_rejectCAsubscribe
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-rejectCAsubscribe    OBJECT IDENTIFIER ::= {id-cmsct 19}
 * ```
 *
 * @constant
 */
export const id_rejectCAsubscribe: OBJECT_IDENTIFIER = new _OID([19], id_cmsct);

/**
 * @summary rejectCAsubscribe
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rejectCAsubscribe  WRAPPED-PDU ::= {
 *                  RejectCAsubscribe
 *   IDENTIFIED BY  id-rejectCAsubscribe }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const rejectCAsubscribe: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_RejectCAsubscribe,
    },
    encoderFor: {
        "&Type": _encode_RejectCAsubscribe,
    },
    "&id": id_rejectCAsubscribe /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary AvlPduSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AvlPduSet WRAPPED-PDU ::= {
 *   certReq |
 *   certRsp |
 *   addAvlReq |
 *   addAvlRsp |
 *   replaceAvlReq |
 *   replaceAvlRsp |
 *   deleteAvlReq |
 *   deleteAvlRsp |
 *   rejectAVL |
 *   certSubscribeReq |
 *   certSubscribeRsp |
 *   certUnsubscribeReq |
 *   certUnsubscribeRsp |
 *   certReplaceReq |
 *   certReplaceRsp |
 *   rejectCAsubscribe,
 *   ... }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU[]}
 *
 */
export const AvlPduSet: WRAPPED_PDU[] = [
    certReq,
    certRsp,
    addAvlReq,
    addAvlRsp,
    replaceAvlReq,
    replaceAvlRsp,
    deleteAvlReq,
    deleteAvlRsp,
    rejectAVL,
    certSubscribeReq,
    certSubscribeRsp,
    certUnsubscribeReq,
    certUnsubscribeRsp,
    certReplaceReq,
    certReplaceRsp,
    rejectCAsubscribe,
];

/**
 * @summary CertUpdateReq_certs_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateReq-certs-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertUpdateReq_certs_Item {
    constructor(
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary `certStatus`.
         * @public
         * @readonly
         */
        readonly certStatus: CertStatus,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUpdateReq_certs_Item
     * @description
     *
     * This takes an `object` and converts it to a `CertUpdateReq_certs_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUpdateReq_certs_Item`.
     * @returns {CertUpdateReq_certs_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertUpdateReq_certs_Item]: CertUpdateReq_certs_Item[_K];
            }
        >
    ): CertUpdateReq_certs_Item {
        return new CertUpdateReq_certs_Item(
            _o.subject,
            _o.serialNumber,
            _o.certStatus,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `certStatus`
     * @public
     * @static
     */

    public static _enum_for_certStatus = _enum_for_CertStatus;
}
/**
 * @summary The Leading Root Component Types of CertUpdateReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUpdateReq_certs_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("subject", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certStatus",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUpdateReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUpdateReq_certs_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUpdateReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUpdateReq_certs_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUpdateReq_certs_Item: $.ASN1Decoder<
    CertUpdateReq_certs_Item
> | null = null;
let _cached_encoder_for_CertUpdateReq_certs_Item: $.ASN1Encoder<
    CertUpdateReq_certs_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateReq_certs_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateReq_certs_Item} The decoded data structure.
 */
export function _decode_CertUpdateReq_certs_Item(el: _Element) {
    if (!_cached_decoder_for_CertUpdateReq_certs_Item) {
        _cached_decoder_for_CertUpdateReq_certs_Item = function (
            el: _Element
        ): CertUpdateReq_certs_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "CertUpdateReq-certs-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "subject";
            sequence[1].name = "serialNumber";
            sequence[2].name = "certStatus";
            let subject!: Name;
            let serialNumber!: CertificateSerialNumber;
            let certStatus!: CertStatus;
            subject = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            certStatus = _decode_CertStatus(sequence[2]);
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
/**
 * @summary Encodes a(n) CertUpdateReq_certs_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateReq_certs_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateReq_certs_Item(
    value: CertUpdateReq_certs_Item,
    elGetter: $.ASN1Encoder<CertUpdateReq_certs_Item>
) {
    if (!_cached_encoder_for_CertUpdateReq_certs_Item) {
        _cached_encoder_for_CertUpdateReq_certs_Item = function (
            value: CertUpdateReq_certs_Item,
            elGetter: $.ASN1Encoder<CertUpdateReq_certs_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.subject, $.BER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertStatus(
                                value.certStatus,
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
    return _cached_encoder_for_CertUpdateReq_certs_Item(value, elGetter);
}

/**
 * @summary CertUpdateReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateReq ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
 *   certs  SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     subject      Name,
 *     serialNumber CertificateSerialNumber,
 *     certStatus   CertStatus,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertUpdateReq {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<CASPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: CertUpdateReq_certs_Item[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUpdateReq
     * @description
     *
     * This takes an `object` and converts it to a `CertUpdateReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUpdateReq`.
     * @returns {CertUpdateReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertUpdateReq]: CertUpdateReq[_K] }>
    ): CertUpdateReq {
        return new CertUpdateReq(
            _o.version,
            _o.sequence,
            _o.certs,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return CASPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_CASPversion;
}
/**
 * @summary The Leading Root Component Types of CertUpdateReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUpdateReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certs",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUpdateReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUpdateReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUpdateReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUpdateReq: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUpdateReq: $.ASN1Decoder<
    CertUpdateReq
> | null = null;
let _cached_encoder_for_CertUpdateReq: $.ASN1Encoder<
    CertUpdateReq
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateReq} The decoded data structure.
 */
export function _decode_CertUpdateReq(el: _Element) {
    if (!_cached_decoder_for_CertUpdateReq) {
        _cached_decoder_for_CertUpdateReq = function (
            el: _Element
        ): CertUpdateReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<CASPversion> =
                CertUpdateReq._default_value_for_version;
            let sequence!: CASPsequence;
            let certs!: CertUpdateReq_certs_Item[];
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                certs: (_el: _Element): void => {
                    certs = $._decodeSequenceOf<CertUpdateReq_certs_Item>(
                        () => _decode_CertUpdateReq_certs_Item
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertUpdateReq,
                _extension_additions_list_spec_for_CertUpdateReq,
                _root_component_type_list_2_spec_for_CertUpdateReq,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) CertUpdateReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateReq, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateReq(
    value: CertUpdateReq,
    elGetter: $.ASN1Encoder<CertUpdateReq>
) {
    if (!_cached_encoder_for_CertUpdateReq) {
        _cached_encoder_for_CertUpdateReq = function (
            value: CertUpdateReq,
            elGetter: $.ASN1Encoder<CertUpdateReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CertUpdateReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(value.version, $.BER),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSequenceOf<
                                CertUpdateReq_certs_Item
                            >(() => _encode_CertUpdateReq_certs_Item, $.BER)(
                                value.certs,
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
    return _cached_encoder_for_CertUpdateReq(value, elGetter);
}

/**
 * @summary id_certUpdateReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-certUpdateReq        OBJECT IDENTIFIER ::= {id-cmsct 17}
 * ```
 *
 * @constant
 */
export const id_certUpdateReq: OBJECT_IDENTIFIER = new _OID([17], id_cmsct);

/**
 * @summary certUpdateReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certUpdateReq WRAPPED-PDU ::= {
 *                  CertUpdateReq
 *   IDENTIFIED BY  id-certUpdateReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const certUpdateReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertUpdateReq,
    },
    encoderFor: {
        "&Type": _encode_CertUpdateReq,
    },
    "&id": id_certUpdateReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary CertUpdateOK_Item_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateOK-Item-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertUpdateOK_Item_ok {
    constructor(
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUpdateOK_Item_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertUpdateOK_Item_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUpdateOK_Item_ok`.
     * @returns {CertUpdateOK_Item_ok}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof CertUpdateOK_Item_ok]: CertUpdateOK_Item_ok[_K] }
        >
    ): CertUpdateOK_Item_ok {
        return new CertUpdateOK_Item_ok(
            _o.subject,
            _o.serialNumber,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertUpdateOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUpdateOK_Item_ok: $.ComponentSpec[] = [
    new $.ComponentSpec("subject", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUpdateOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUpdateOK_Item_ok: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUpdateOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUpdateOK_Item_ok: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUpdateOK_Item_ok: $.ASN1Decoder<
    CertUpdateOK_Item_ok
> | null = null;
let _cached_encoder_for_CertUpdateOK_Item_ok: $.ASN1Encoder<
    CertUpdateOK_Item_ok
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateOK_Item_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateOK_Item_ok} The decoded data structure.
 */
export function _decode_CertUpdateOK_Item_ok(el: _Element) {
    if (!_cached_decoder_for_CertUpdateOK_Item_ok) {
        _cached_decoder_for_CertUpdateOK_Item_ok = function (
            el: _Element
        ): CertUpdateOK_Item_ok {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertUpdateOK-Item-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "subject";
            sequence[1].name = "serialNumber";
            let subject!: Name;
            let serialNumber!: CertificateSerialNumber;
            subject = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            return new CertUpdateOK_Item_ok(
                subject,
                serialNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertUpdateOK_Item_ok(el);
}
/**
 * @summary Encodes a(n) CertUpdateOK_Item_ok into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateOK_Item_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateOK_Item_ok(
    value: CertUpdateOK_Item_ok,
    elGetter: $.ASN1Encoder<CertUpdateOK_Item_ok>
) {
    if (!_cached_encoder_for_CertUpdateOK_Item_ok) {
        _cached_encoder_for_CertUpdateOK_Item_ok = function (
            value: CertUpdateOK_Item_ok,
            elGetter: $.ASN1Encoder<CertUpdateOK_Item_ok>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.subject, $.BER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
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
    return _cached_encoder_for_CertUpdateOK_Item_ok(value, elGetter);
}

/**
 * @summary CertUpdateOK_Item_not_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateOK-Item-not-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertUpdateOK_Item_not_ok {
    constructor(
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: CASP_CertStatusCode,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUpdateOK_Item_not_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertUpdateOK_Item_not_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUpdateOK_Item_not_ok`.
     * @returns {CertUpdateOK_Item_not_ok}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertUpdateOK_Item_not_ok]: CertUpdateOK_Item_not_ok[_K];
            }
        >
    ): CertUpdateOK_Item_not_ok {
        return new CertUpdateOK_Item_not_ok(
            _o.status,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `status`
     * @public
     * @static
     */

    public static _enum_for_status = _enum_for_CASP_CertStatusCode;
}
/**
 * @summary The Leading Root Component Types of CertUpdateOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUpdateOK_Item_not_ok: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "status",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUpdateOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUpdateOK_Item_not_ok: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUpdateOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUpdateOK_Item_not_ok: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUpdateOK_Item_not_ok: $.ASN1Decoder<
    CertUpdateOK_Item_not_ok
> | null = null;
let _cached_encoder_for_CertUpdateOK_Item_not_ok: $.ASN1Encoder<
    CertUpdateOK_Item_not_ok
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateOK_Item_not_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateOK_Item_not_ok} The decoded data structure.
 */
export function _decode_CertUpdateOK_Item_not_ok(el: _Element) {
    if (!_cached_decoder_for_CertUpdateOK_Item_not_ok) {
        _cached_decoder_for_CertUpdateOK_Item_not_ok = function (
            el: _Element
        ): CertUpdateOK_Item_not_ok {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertUpdateOK-Item-not-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "status";
            let status!: CASP_CertStatusCode;
            status = _decode_CASP_CertStatusCode(sequence[0]);
            return new CertUpdateOK_Item_not_ok(status, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertUpdateOK_Item_not_ok(el);
}
/**
 * @summary Encodes a(n) CertUpdateOK_Item_not_ok into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateOK_Item_not_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateOK_Item_not_ok(
    value: CertUpdateOK_Item_not_ok,
    elGetter: $.ASN1Encoder<CertUpdateOK_Item_not_ok>
) {
    if (!_cached_encoder_for_CertUpdateOK_Item_not_ok) {
        _cached_encoder_for_CertUpdateOK_Item_not_ok = function (
            value: CertUpdateOK_Item_not_ok,
            elGetter: $.ASN1Encoder<CertUpdateOK_Item_not_ok>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_CertStatusCode(
                                value.status,
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
    return _cached_encoder_for_CertUpdateOK_Item_not_ok(value, elGetter);
}

/**
 * @summary CertUpdateOK_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateOK-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertUpdateOK_Item =
    | { ok: CertUpdateOK_Item_ok } /* CHOICE_ALT_ROOT */
    | { not_ok: CertUpdateOK_Item_not_ok } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertUpdateOK_Item: $.ASN1Decoder<
    CertUpdateOK_Item
> | null = null;
let _cached_encoder_for_CertUpdateOK_Item: $.ASN1Encoder<
    CertUpdateOK_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateOK_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateOK_Item} The decoded data structure.
 */
export function _decode_CertUpdateOK_Item(el: _Element) {
    if (!_cached_decoder_for_CertUpdateOK_Item) {
        _cached_decoder_for_CertUpdateOK_Item = $._decode_extensible_choice<
            CertUpdateOK_Item
        >({
            "CONTEXT 0": [
                "ok",
                $._decode_explicit<CertUpdateOK_Item_ok>(
                    () => _decode_CertUpdateOK_Item_ok
                ),
            ],
            "CONTEXT 1": [
                "not_ok",
                $._decode_explicit<CertUpdateOK_Item_not_ok>(
                    () => _decode_CertUpdateOK_Item_not_ok
                ),
            ],
        });
    }
    return _cached_decoder_for_CertUpdateOK_Item(el);
}
/**
 * @summary Encodes a(n) CertUpdateOK_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateOK_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateOK_Item(
    value: CertUpdateOK_Item,
    elGetter: $.ASN1Encoder<CertUpdateOK_Item>
) {
    if (!_cached_encoder_for_CertUpdateOK_Item) {
        _cached_encoder_for_CertUpdateOK_Item = $._encode_choice<
            CertUpdateOK_Item
        >(
            {
                ok: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertUpdateOK_Item_ok,
                    $.BER
                ),
                not_ok: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertUpdateOK_Item_not_ok,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertUpdateOK_Item(value, elGetter);
}

export type CertUpdateOK<> = CertUpdateOK_Item[]; // SequenceOfType
let _cached_decoder_for_CertUpdateOK: $.ASN1Decoder<CertUpdateOK> | null = null;
let _cached_encoder_for_CertUpdateOK: $.ASN1Encoder<CertUpdateOK> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateOK} The decoded data structure.
 */
export function _decode_CertUpdateOK(el: _Element) {
    if (!_cached_decoder_for_CertUpdateOK) {
        _cached_decoder_for_CertUpdateOK = $._decodeSequenceOf<
            CertUpdateOK_Item
        >(() => _decode_CertUpdateOK_Item);
    }
    return _cached_decoder_for_CertUpdateOK(el);
}
/**
 * @summary Encodes a(n) CertUpdateOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateOK, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateOK(
    value: CertUpdateOK,
    elGetter: $.ASN1Encoder<CertUpdateOK>
) {
    if (!_cached_encoder_for_CertUpdateOK) {
        _cached_encoder_for_CertUpdateOK = $._encodeSequenceOf<
            CertUpdateOK_Item
        >(() => _encode_CertUpdateOK_Item, $.BER);
    }
    return _cached_encoder_for_CertUpdateOK(value, elGetter);
}

/**
 * @summary CertUpdateErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateErr ::= SEQUENCE {
 *   code          CASP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class CertUpdateErr {
    constructor(
        /**
         * @summary `code`.
         * @public
         * @readonly
         */
        readonly code: CASP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUpdateErr
     * @description
     *
     * This takes an `object` and converts it to a `CertUpdateErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUpdateErr`.
     * @returns {CertUpdateErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertUpdateErr]: CertUpdateErr[_K] }>
    ): CertUpdateErr {
        return new CertUpdateErr(_o.code, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `code`
     * @public
     * @static
     */

    public static _enum_for_code = _enum_for_CASP_error;
}
/**
 * @summary The Leading Root Component Types of CertUpdateErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUpdateErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "code",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUpdateErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUpdateErr: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUpdateErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUpdateErr: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUpdateErr: $.ASN1Decoder<
    CertUpdateErr
> | null = null;
let _cached_encoder_for_CertUpdateErr: $.ASN1Encoder<
    CertUpdateErr
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateErr} The decoded data structure.
 */
export function _decode_CertUpdateErr(el: _Element) {
    if (!_cached_decoder_for_CertUpdateErr) {
        _cached_decoder_for_CertUpdateErr = function (
            el: _Element
        ): CertUpdateErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertUpdateErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "code";
            let code!: CASP_error;
            code = _decode_CASP_error(sequence[0]);
            return new CertUpdateErr(code, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertUpdateErr(el);
}
/**
 * @summary Encodes a(n) CertUpdateErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateErr, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateErr(
    value: CertUpdateErr,
    elGetter: $.ASN1Encoder<CertUpdateErr>
) {
    if (!_cached_encoder_for_CertUpdateErr) {
        _cached_encoder_for_CertUpdateErr = function (
            value: CertUpdateErr,
            elGetter: $.ASN1Encoder<CertUpdateErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_error(
                                value.code,
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
    return _cached_encoder_for_CertUpdateErr(value, elGetter);
}

/**
 * @summary CertUpdateRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertUpdateRsp_result =
    | { success: CertUpdateOK } /* CHOICE_ALT_ROOT */
    | { failure: CertUpdateErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertUpdateRsp_result: $.ASN1Decoder<
    CertUpdateRsp_result
> | null = null;
let _cached_encoder_for_CertUpdateRsp_result: $.ASN1Encoder<
    CertUpdateRsp_result
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateRsp_result} The decoded data structure.
 */
export function _decode_CertUpdateRsp_result(el: _Element) {
    if (!_cached_decoder_for_CertUpdateRsp_result) {
        _cached_decoder_for_CertUpdateRsp_result = $._decode_extensible_choice<
            CertUpdateRsp_result
        >({
            "CONTEXT 0": [
                "success",
                $._decode_explicit<CertUpdateOK>(() => _decode_CertUpdateOK),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_explicit<CertUpdateErr>(() => _decode_CertUpdateErr),
            ],
        });
    }
    return _cached_decoder_for_CertUpdateRsp_result(el);
}
/**
 * @summary Encodes a(n) CertUpdateRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateRsp_result(
    value: CertUpdateRsp_result,
    elGetter: $.ASN1Encoder<CertUpdateRsp_result>
) {
    if (!_cached_encoder_for_CertUpdateRsp_result) {
        _cached_encoder_for_CertUpdateRsp_result = $._encode_choice<
            CertUpdateRsp_result
        >(
            {
                success: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertUpdateOK,
                    $.BER
                ),
                failure: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertUpdateErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertUpdateRsp_result(value, elGetter);
}

/**
 * @summary CertUpdateRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateRsp ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
 *   result        CHOICE {
 *     success       [0]  CertUpdateOK,
 *     failure       [1]  CertUpdateErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertUpdateRsp {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<CASPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: CertUpdateRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUpdateRsp
     * @description
     *
     * This takes an `object` and converts it to a `CertUpdateRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUpdateRsp`.
     * @returns {CertUpdateRsp}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertUpdateRsp]: CertUpdateRsp[_K] }>
    ): CertUpdateRsp {
        return new CertUpdateRsp(
            _o.version,
            _o.sequence,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return CASPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_CASPversion;
}
/**
 * @summary The Leading Root Component Types of CertUpdateRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUpdateRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of CertUpdateRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUpdateRsp: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUpdateRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUpdateRsp: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUpdateRsp: $.ASN1Decoder<
    CertUpdateRsp
> | null = null;
let _cached_encoder_for_CertUpdateRsp: $.ASN1Encoder<
    CertUpdateRsp
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateRsp} The decoded data structure.
 */
export function _decode_CertUpdateRsp(el: _Element) {
    if (!_cached_decoder_for_CertUpdateRsp) {
        _cached_decoder_for_CertUpdateRsp = function (
            el: _Element
        ): CertUpdateRsp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<CASPversion> =
                CertUpdateRsp._default_value_for_version;
            let sequence!: CASPsequence;
            let result!: CertUpdateRsp_result;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                result: (_el: _Element): void => {
                    result = _decode_CertUpdateRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertUpdateRsp,
                _extension_additions_list_spec_for_CertUpdateRsp,
                _root_component_type_list_2_spec_for_CertUpdateRsp,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) CertUpdateRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateRsp, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateRsp(
    value: CertUpdateRsp,
    elGetter: $.ASN1Encoder<CertUpdateRsp>
) {
    if (!_cached_encoder_for_CertUpdateRsp) {
        _cached_encoder_for_CertUpdateRsp = function (
            value: CertUpdateRsp,
            elGetter: $.ASN1Encoder<CertUpdateRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CertUpdateRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(value.version, $.BER),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertUpdateRsp_result(
                                value.result,
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
    return _cached_encoder_for_CertUpdateRsp(value, elGetter);
}

/**
 * @summary id_certUpdateRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-certUpdateRsp        OBJECT IDENTIFIER ::= {id-cmsct 18}
 * ```
 *
 * @constant
 */
export const id_certUpdateRsp: OBJECT_IDENTIFIER = new _OID([18], id_cmsct);

/**
 * @summary certUpdateRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certUpdateRsp WRAPPED-PDU ::= {
 *                  CertUpdateRsp
 *   IDENTIFIED BY  id-certUpdateRsp }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const certUpdateRsp: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertUpdateRsp,
    },
    encoderFor: {
        "&Type": _encode_CertUpdateRsp,
    },
    "&id": id_certUpdateRsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_signedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-signedData OBJECT IDENTIFIER ::= {iso(1) member-body(2)
 * us(840)rsadsi(113549) pkcs(1) pkcs7(7) 2}
 * ```
 *
 * @constant
 */
export const id_signedData: OBJECT_IDENTIFIER = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
    2,
]);

/**
 * @summary id_envelopedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-envelopedData OBJECT IDENTIFIER ::= {iso(1) member-body(2) us(840)
 * rsadsi(113549) pkcs(1) pkcs7(7) 3}
 * ```
 *
 * @constant
 */
export const id_envelopedData: OBJECT_IDENTIFIER = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
    3,
]);

/**
 * @summary id_updateAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-updateAvlReq         OBJECT IDENTIFIER ::= {id-cmsct 6}
 * ```
 *
 * @constant
 */
export const id_updateAvlReq: OBJECT_IDENTIFIER = new _OID([6], id_cmsct);

/**
 * @summary id_updateAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-updateAvlRsp         OBJECT IDENTIFIER ::= {id-cmsct 7}
 * ```
 *
 * @constant
 */
export const id_updateAvlRsp: OBJECT_IDENTIFIER = new _OID([7], id_cmsct);

/**
 * @summary TBrequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBrequest  ::=  CHOICE {
 *   caCert      [0] PKCertIdentifier,
 *   subjectCert [1] PKCertIdentifier,
 *   ... }
 * ```
 */
export type TBrequest =
    | { caCert: PKCertIdentifier } /* CHOICE_ALT_ROOT */
    | { subjectCert: PKCertIdentifier } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_TBrequest: $.ASN1Decoder<TBrequest> | null = null;
let _cached_encoder_for_TBrequest: $.ASN1Encoder<TBrequest> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TBrequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBrequest} The decoded data structure.
 */
export function _decode_TBrequest(el: _Element) {
    if (!_cached_decoder_for_TBrequest) {
        _cached_decoder_for_TBrequest = $._decode_extensible_choice<TBrequest>({
            "CONTEXT 0": [
                "caCert",
                $._decode_explicit<PKCertIdentifier>(
                    () => _decode_PKCertIdentifier
                ),
            ],
            "CONTEXT 1": [
                "subjectCert",
                $._decode_explicit<PKCertIdentifier>(
                    () => _decode_PKCertIdentifier
                ),
            ],
        });
    }
    return _cached_decoder_for_TBrequest(el);
}
/**
 * @summary Encodes a(n) TBrequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBrequest, encoded as an ASN.1 Element.
 */
export function _encode_TBrequest(
    value: TBrequest,
    elGetter: $.ASN1Encoder<TBrequest>
) {
    if (!_cached_encoder_for_TBrequest) {
        _cached_encoder_for_TBrequest = $._encode_choice<TBrequest>(
            {
                caCert: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_PKCertIdentifier,
                    $.BER
                ),
                subjectCert: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_PKCertIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TBrequest(value, elGetter);
}

/**
 * @summary TBOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBOK ::= SEQUENCE {
 *   levelOfAssurance  [0]  INTEGER (0..100),
 *   confidenceLevel   [1]  INTEGER (0..100),
 *   validationTime    [2]  UTCTime,
 *   info                   UTF8String  OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class TBOK {
    constructor(
        /**
         * @summary `levelOfAssurance`.
         * @public
         * @readonly
         */
        readonly levelOfAssurance: INTEGER,
        /**
         * @summary `confidenceLevel`.
         * @public
         * @readonly
         */
        readonly confidenceLevel: INTEGER,
        /**
         * @summary `validationTime`.
         * @public
         * @readonly
         */
        readonly validationTime: UTCTime,
        /**
         * @summary `info`.
         * @public
         * @readonly
         */
        readonly info: OPTIONAL<UTF8String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TBOK
     * @description
     *
     * This takes an `object` and converts it to a `TBOK`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBOK`.
     * @returns {TBOK}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TBOK]: TBOK[_K] }>
    ): TBOK {
        return new TBOK(
            _o.levelOfAssurance,
            _o.confidenceLevel,
            _o.validationTime,
            _o.info,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of TBOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBOK: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "levelOfAssurance",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "confidenceLevel",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "validationTime",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "info",
        true,
        $.hasTag(_TagClass.universal, 12),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TBOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBOK: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TBOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBOK: $.ComponentSpec[] = [];
let _cached_decoder_for_TBOK: $.ASN1Decoder<TBOK> | null = null;
let _cached_encoder_for_TBOK: $.ASN1Encoder<TBOK> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TBOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBOK} The decoded data structure.
 */
export function _decode_TBOK(el: _Element) {
    if (!_cached_decoder_for_TBOK) {
        _cached_decoder_for_TBOK = function (el: _Element): TBOK {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let levelOfAssurance!: INTEGER;
            let confidenceLevel!: INTEGER;
            let validationTime!: UTCTime;
            let info: OPTIONAL<UTF8String>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                levelOfAssurance: (_el: _Element): void => {
                    levelOfAssurance = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                confidenceLevel: (_el: _Element): void => {
                    confidenceLevel = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                validationTime: (_el: _Element): void => {
                    validationTime = $._decode_explicit<UTCTime>(
                        () => $._decodeUTCTime
                    )(_el);
                },
                info: (_el: _Element): void => {
                    info = $._decodeUTF8String(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBOK,
                _extension_additions_list_spec_for_TBOK,
                _root_component_type_list_2_spec_for_TBOK,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) TBOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBOK, encoded as an ASN.1 Element.
 */
export function _encode_TBOK(value: TBOK, elGetter: $.ASN1Encoder<TBOK>) {
    if (!_cached_encoder_for_TBOK) {
        _cached_encoder_for_TBOK = function (
            value: TBOK,
            elGetter: $.ASN1Encoder<TBOK>
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
                            )(value.levelOfAssurance, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => $._encodeInteger,
                                $.BER
                            )(value.confidenceLevel, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => $._encodeUTCTime,
                                $.BER
                            )(value.validationTime, $.BER),
                            /* IF_ABSENT  */ value.info === undefined
                                ? undefined
                                : $._encodeUTF8String(value.info, $.BER),
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
    return _cached_encoder_for_TBOK(value, elGetter);
}

/**
 * @summary TBerror_code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBerror-code ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_TBerror_code {
    caCertInvalid = 1,
    unknownCert = 2,
    unknownCertStatus = 3,
    subjectCertRevoked = 4,
    incorrectCert = 5,
    contractExpired = 6,
    pathValidationFailed = 7,
    timeOut = 8,
    other = 99,
}
/**
 * @summary TBerror_code
 */
export type TBerror_code = _enum_for_TBerror_code | ENUMERATED;
/**
 * @summary TBerror_code_caCertInvalid
 * @constant
 * @type {number}
 */
export const TBerror_code_caCertInvalid: TBerror_code = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary TBerror_code_unknownCert
 * @constant
 * @type {number}
 */
export const TBerror_code_unknownCert: TBerror_code = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary TBerror_code_unknownCertStatus
 * @constant
 * @type {number}
 */
export const TBerror_code_unknownCertStatus: TBerror_code = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary TBerror_code_subjectCertRevoked
 * @constant
 * @type {number}
 */
export const TBerror_code_subjectCertRevoked: TBerror_code = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary TBerror_code_incorrectCert
 * @constant
 * @type {number}
 */
export const TBerror_code_incorrectCert: TBerror_code = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary TBerror_code_contractExpired
 * @constant
 * @type {number}
 */
export const TBerror_code_contractExpired: TBerror_code = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary TBerror_code_pathValidationFailed
 * @constant
 * @type {number}
 */
export const TBerror_code_pathValidationFailed: TBerror_code = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary TBerror_code_timeOut
 * @constant
 * @type {number}
 */
export const TBerror_code_timeOut: TBerror_code = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary TBerror_code_other
 * @constant
 * @type {number}
 */
export const TBerror_code_other: TBerror_code = 99; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_TBerror_code: $.ASN1Decoder<TBerror_code> | null = null;
let _cached_encoder_for_TBerror_code: $.ASN1Encoder<TBerror_code> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TBerror_code
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBerror_code} The decoded data structure.
 */
export function _decode_TBerror_code(el: _Element) {
    if (!_cached_decoder_for_TBerror_code) {
        _cached_decoder_for_TBerror_code = $._decodeEnumerated;
    }
    return _cached_decoder_for_TBerror_code(el);
}
/**
 * @summary Encodes a(n) TBerror_code into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBerror_code, encoded as an ASN.1 Element.
 */
export function _encode_TBerror_code(
    value: TBerror_code,
    elGetter: $.ASN1Encoder<TBerror_code>
) {
    if (!_cached_encoder_for_TBerror_code) {
        _cached_encoder_for_TBerror_code = $._encodeEnumerated;
    }
    return _cached_encoder_for_TBerror_code(value, elGetter);
}

/**
 * @summary TBerror
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBerror ::= SEQUENCE {
 *   code        ENUMERATED {
 *     caCertInvalid        (1),
 *     unknownCert          (2),
 *     unknownCertStatus    (3),
 *     subjectCertRevoked   (4),
 *     incorrectCert        (5),
 *     contractExpired      (6),
 *     pathValidationFailed (7),
 *     timeOut              (8),
 *     other                (99),
 *     ... },
 *   diagnostic  UTF8String OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class TBerror {
    constructor(
        /**
         * @summary `code`.
         * @public
         * @readonly
         */
        readonly code: TBerror_code,
        /**
         * @summary `diagnostic`.
         * @public
         * @readonly
         */
        readonly diagnostic: OPTIONAL<UTF8String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TBerror
     * @description
     *
     * This takes an `object` and converts it to a `TBerror`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBerror`.
     * @returns {TBerror}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TBerror]: TBerror[_K] }>
    ): TBerror {
        return new TBerror(
            _o.code,
            _o.diagnostic,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `code`
     * @public
     * @static
     */

    public static _enum_for_code = _enum_for_TBerror_code;
}
/**
 * @summary The Leading Root Component Types of TBerror
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBerror: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "code",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "diagnostic",
        true,
        $.hasTag(_TagClass.universal, 12),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TBerror
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBerror: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TBerror
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBerror: $.ComponentSpec[] = [];
let _cached_decoder_for_TBerror: $.ASN1Decoder<TBerror> | null = null;
let _cached_encoder_for_TBerror: $.ASN1Encoder<TBerror> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TBerror
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBerror} The decoded data structure.
 */
export function _decode_TBerror(el: _Element) {
    if (!_cached_decoder_for_TBerror) {
        _cached_decoder_for_TBerror = function (el: _Element): TBerror {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let code!: TBerror_code;
            let diagnostic: OPTIONAL<UTF8String>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                code: (_el: _Element): void => {
                    code = _decode_TBerror_code(_el);
                },
                diagnostic: (_el: _Element): void => {
                    diagnostic = $._decodeUTF8String(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBerror,
                _extension_additions_list_spec_for_TBerror,
                _root_component_type_list_2_spec_for_TBerror,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) TBerror into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBerror, encoded as an ASN.1 Element.
 */
export function _encode_TBerror(
    value: TBerror,
    elGetter: $.ASN1Encoder<TBerror>
) {
    if (!_cached_encoder_for_TBerror) {
        _cached_encoder_for_TBerror = function (
            value: TBerror,
            elGetter: $.ASN1Encoder<TBerror>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_TBerror_code(
                                value.code,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.diagnostic === undefined
                                ? undefined
                                : $._encodeUTF8String(value.diagnostic, $.BER),
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
    return _cached_encoder_for_TBerror(value, elGetter);
}

/**
 * @summary TBresponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBresponse  ::=  CHOICE {
 *   success [0]  TBOK,
 *   failure [1]  TBerror,
 *   ... }
 * ```
 */
export type TBresponse =
    | { success: TBOK } /* CHOICE_ALT_ROOT */
    | { failure: TBerror } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_TBresponse: $.ASN1Decoder<TBresponse> | null = null;
let _cached_encoder_for_TBresponse: $.ASN1Encoder<TBresponse> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TBresponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBresponse} The decoded data structure.
 */
export function _decode_TBresponse(el: _Element) {
    if (!_cached_decoder_for_TBresponse) {
        _cached_decoder_for_TBresponse = $._decode_extensible_choice<
            TBresponse
        >({
            "CONTEXT 0": [
                "success",
                $._decode_explicit<TBOK>(() => _decode_TBOK),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_explicit<TBerror>(() => _decode_TBerror),
            ],
        });
    }
    return _cached_decoder_for_TBresponse(el);
}
/**
 * @summary Encodes a(n) TBresponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBresponse, encoded as an ASN.1 Element.
 */
export function _encode_TBresponse(
    value: TBresponse,
    elGetter: $.ASN1Encoder<TBresponse>
) {
    if (!_cached_encoder_for_TBresponse) {
        _cached_encoder_for_TBresponse = $._encode_choice<TBresponse>(
            {
                success: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_TBOK,
                    $.BER
                ),
                failure: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_TBerror,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TBresponse(value, elGetter);
}

/* END_MODULE PkiPMIProtocolSpecifications */
/* eslint-enable */
