/**
 * @module AuthenticationFramework
 * @summary The ASN.1 module `AuthenticationFramework`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.authenticationFramework.9
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
    joint_iso_itu_t,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    TYPE_IDENTIFIER,
    UTCTime,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    algorithmIdentifierMatch,
    certificateExactMatch,
    certificateListExactMatch,
    certificatePairExactMatch,
    CertificatePoliciesSyntax,
    CertPolicyId,
    GeneralNames,
    KeyUsage,
    pkiPathMatch,
    policyMatch,
    _decode_CertificatePoliciesSyntax,
    _decode_CertPolicyId,
    _decode_GeneralNames,
    _decode_KeyUsage,
    _encode_CertificatePoliciesSyntax,
    _encode_CertPolicyId,
    _encode_GeneralNames,
    _encode_KeyUsage,
} from "./CertificateExtensions";
import * as InformationFramework from "./InformationFramework";
import {
    ATTRIBUTE,
    Attribute,
    DistinguishedName,
    Name,
    NAME_FORM,
    OBJECT_CLASS,
    SYNTAX_NAME,
    _decode_Attribute,
    _decode_DistinguishedName,
    _decode_Name,
    _encode_Attribute,
    _encode_DistinguishedName,
    _encode_Name,
} from "./InformationFramework";
import {
    octetString,
    octetStringMatch,
    UnboundedDirectoryString,
    UniqueIdentifier,
    _decode_UnboundedDirectoryString,
    _decode_UniqueIdentifier,
    _encode_UnboundedDirectoryString,
    _encode_UniqueIdentifier,
} from "./SelectedAttributeTypes";
import { id_asx, id_at, id_lsx, id_nf, id_oc } from "./UsefulDefinitions";
export {
    algorithmIdentifierMatch,
    CertificateAssertion,
    CertificateExactAssertion,
    certificateExactMatch,
    CertificateListAssertion,
    CertificateListExactAssertion,
    certificateListExactMatch,
    CertificatePairAssertion,
    CertificatePairExactAssertion,
    certificatePairExactMatch,
    CertificatePoliciesSyntax,
    CertPolicyId,
    GeneralNames,
    KeyUsage,
    KeyUsage_contentCommitment /* IMPORTED_BIT */,
    KeyUsage_cRLSign /* IMPORTED_BIT */,
    KeyUsage_dataEncipherment /* IMPORTED_BIT */,
    KeyUsage_decipherOnly /* IMPORTED_BIT */,
    KeyUsage_digitalSignature /* IMPORTED_BIT */,
    KeyUsage_encipherOnly /* IMPORTED_BIT */,
    KeyUsage_keyAgreement /* IMPORTED_BIT */,
    KeyUsage_keyCertSign /* IMPORTED_BIT */,
    KeyUsage_keyEncipherment /* IMPORTED_BIT */,
    pkiPathMatch,
    policyMatch,
    _decode_CertificateAssertion,
    _decode_CertificateExactAssertion,
    _decode_CertificateListAssertion,
    _decode_CertificateListExactAssertion,
    _decode_CertificatePairAssertion,
    _decode_CertificatePairExactAssertion,
    _decode_CertificatePoliciesSyntax,
    _decode_CertPolicyId,
    _decode_GeneralNames,
    _decode_KeyUsage,
    _encode_CertificateAssertion,
    _encode_CertificateExactAssertion,
    _encode_CertificateListAssertion,
    _encode_CertificateListExactAssertion,
    _encode_CertificatePairAssertion,
    _encode_CertificatePairExactAssertion,
    _encode_CertificatePoliciesSyntax,
    _encode_CertPolicyId,
    _encode_GeneralNames,
    _encode_KeyUsage,
} from "./CertificateExtensions";
export {
    ATTRIBUTE,
    Attribute,
    DistinguishedName,
    distinguishedNameMatch,
    MATCHING_RULE,
    Name,
    NAME_FORM,
    objectIdentifierMatch,
    OBJECT_CLASS,
    RelativeDistinguishedName,
    SYNTAX_NAME,
    top,
    _decode_Attribute,
    _decode_DistinguishedName,
    _decode_Name,
    _decode_RelativeDistinguishedName,
    _encode_Attribute,
    _encode_DistinguishedName,
    _encode_Name,
    _encode_RelativeDistinguishedName,
} from "./InformationFramework";
export {
    bitStringMatch,
    booleanMatch,
    boolean_,
    caseExactMatch,
    commonName,
    directoryString,
    generalizedTime,
    generalizedTimeMatch,
    generalizedTimeOrderingMatch,
    integer,
    integerMatch,
    integerOrderingMatch,
    octetString,
    octetStringMatch,
    UnboundedDirectoryString,
    UniqueIdentifier,
    uri,
    _decode_UnboundedDirectoryString,
    _decode_UniqueIdentifier,
    _encode_UnboundedDirectoryString,
    _encode_UniqueIdentifier,
} from "./SelectedAttributeTypes";
export {
    id_asx,
    id_at,
    id_ldx,
    id_lsx,
    id_mr,
    id_nf,
    id_oa,
    id_oc,
    id_sc,
} from "./UsefulDefinitions";

/**
 * @summary ALGORITHM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ALGORITHM ::= CLASS {
 *   &Type          OPTIONAL,
 *   &id            OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   [PARMS         &Type]
 *   IDENTIFIED BY  &id }
 * ```
 *
 * @interface
 */
export interface ALGORITHM<Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "ALGORITHM";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof ALGORITHM<Type>]: $.ASN1Decoder<ALGORITHM<Type>[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ALGORITHM<Type>]: $.ASN1Encoder<ALGORITHM<Type>[_K]>;
        }
    >;
    /**
     * @summary &Type
     */
    "&Type": Type;
    /**
     * @summary &id
     */
    "&id"?: OBJECT_IDENTIFIER;
}

/**
 * @summary AlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgorithmIdentifier{ALGORITHM:SupportedAlgorithms} ::= SEQUENCE {
 *   algorithm       ALGORITHM.&id({SupportedAlgorithms}),
 *   parameters      ALGORITHM.&Type({SupportedAlgorithms}{@algorithm}) OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class AlgorithmIdentifier {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: OBJECT_IDENTIFIER,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<_Element>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AlgorithmIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `AlgorithmIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlgorithmIdentifier`.
     * @returns {AlgorithmIdentifier}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof AlgorithmIdentifier]: AlgorithmIdentifier[_K] }
        >
    ): AlgorithmIdentifier {
        return new AlgorithmIdentifier(
            _o.algorithm,
            _o.parameters,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AlgorithmIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AlgorithmIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("parameters", true, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of AlgorithmIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AlgorithmIdentifier: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AlgorithmIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AlgorithmIdentifier: $.ComponentSpec[] = [];
let _cached_decoder_for_AlgorithmIdentifier: $.ASN1Decoder<
    AlgorithmIdentifier
> | null = null;
let _cached_encoder_for_AlgorithmIdentifier: $.ASN1Encoder<
    AlgorithmIdentifier
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlgorithmIdentifier} The decoded data structure.
 */
export function _decode_AlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_AlgorithmIdentifier) {
        _cached_decoder_for_AlgorithmIdentifier = function (
            el: _Element
        ): AlgorithmIdentifier {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let algorithm!: OBJECT_IDENTIFIER;
            let parameters: OPTIONAL<_Element>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                algorithm: (_el: _Element): void => {
                    algorithm = $._decodeObjectIdentifier(_el);
                },
                parameters: (_el: _Element): void => {
                    parameters = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AlgorithmIdentifier,
                _extension_additions_list_spec_for_AlgorithmIdentifier,
                _root_component_type_list_2_spec_for_AlgorithmIdentifier,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AlgorithmIdentifier(
                /* SEQUENCE_CONSTRUCTOR_CALL */ algorithm,
                parameters,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AlgorithmIdentifier(el);
}
/**
 * @summary Encodes a(n) AlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_AlgorithmIdentifier(
    value: AlgorithmIdentifier,
    elGetter: $.ASN1Encoder<AlgorithmIdentifier>
) {
    if (!_cached_encoder_for_AlgorithmIdentifier) {
        _cached_encoder_for_AlgorithmIdentifier = function (
            value: AlgorithmIdentifier,
            elGetter: $.ASN1Encoder<AlgorithmIdentifier>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.algorithm,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.parameters === undefined
                                ? undefined
                                : $._encodeAny(value.parameters, $.BER),
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
    return _cached_encoder_for_AlgorithmIdentifier(value, elGetter);
}

/**
 * @summary SIGNATURE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SIGNATURE ::= SEQUENCE {
 *   agorithmIdentifier  AlgorithmIdentifier{{SupportedAlgorithms}},
 *   signature            BIT STRING,
 *   ... }
 * ```
 *
 * @class
 */
export class SIGNATURE {
    constructor(
        /**
         * @summary `agorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly agorithmIdentifier: AlgorithmIdentifier,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: BIT_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SIGNATURE
     * @description
     *
     * This takes an `object` and converts it to a `SIGNATURE`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SIGNATURE`.
     * @returns {SIGNATURE}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SIGNATURE]: SIGNATURE[_K] }>
    ): SIGNATURE {
        return new SIGNATURE(
            _o.agorithmIdentifier,
            _o.signature,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of SIGNATURE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SIGNATURE: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "agorithmIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SIGNATURE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SIGNATURE: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SIGNATURE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SIGNATURE: $.ComponentSpec[] = [];
let _cached_decoder_for_SIGNATURE: $.ASN1Decoder<SIGNATURE> | null = null;
let _cached_encoder_for_SIGNATURE: $.ASN1Encoder<SIGNATURE> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SIGNATURE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SIGNATURE} The decoded data structure.
 */
export function _decode_SIGNATURE(el: _Element) {
    if (!_cached_decoder_for_SIGNATURE) {
        _cached_decoder_for_SIGNATURE = function (el: _Element): SIGNATURE {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SIGNATURE contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "agorithmIdentifier";
            sequence[1].name = "signature";
            let agorithmIdentifier!: AlgorithmIdentifier;
            let signature!: BIT_STRING;
            agorithmIdentifier = _decode_AlgorithmIdentifier(sequence[0]);
            signature = $._decodeBitString(sequence[1]);
            return new SIGNATURE(
                agorithmIdentifier,
                signature,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_SIGNATURE(el);
}
/**
 * @summary Encodes a(n) SIGNATURE into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIGNATURE, encoded as an ASN.1 Element.
 */
export function _encode_SIGNATURE(
    value: SIGNATURE,
    elGetter: $.ASN1Encoder<SIGNATURE>
) {
    if (!_cached_encoder_for_SIGNATURE) {
        _cached_encoder_for_SIGNATURE = function (
            value: SIGNATURE,
            elGetter: $.ASN1Encoder<SIGNATURE>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.agorithmIdentifier,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeBitString(
                                value.signature,
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
    return _cached_encoder_for_SIGNATURE(value, elGetter);
}

/**
 * @summary ENCRYPTED
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ENCRYPTED{ToBeEnciphered}  ::=  BIT STRING (CONSTRAINED BY {
 *    -- shall be the result of applying an encipherment procedure
 *    -- to the BER-encoded octets of a value of -- ToBeEnciphered } )
 * ```
 */
export type ENCRYPTED<ToBeEnciphered> = BIT_STRING;
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ENCRYPTED
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_ENCRYPTED<ToBeEnciphered>(
    _decode_ToBeEnciphered: $.ASN1Decoder<ToBeEnciphered>
) {
    return $._decodeBitString;
}
/**
 * @summary Returns a function that will encode a(n) ENCRYPTED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ENCRYPTED as an ASN.1 element.
 */
export function _get_encoder_for_ENCRYPTED<ToBeEnciphered>(
    _encode_ToBeEnciphered: $.ASN1Encoder<ToBeEnciphered>
) {
    return $._encodeBitString;
}

/**
 * @summary ENCRYPTED_HASH
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ENCRYPTED-HASH{ToBeSigned}  ::=  BIT STRING (CONSTRAINED BY {
 *   -- shall be the result of applying a hashing procedure to the DER-encoded (see 6.2)
 *   -- octets of a value of -- ToBeSigned -- and then applying an encipherment procedure
 *   -- to those octets -- } )
 * ```
 */
export type ENCRYPTED_HASH<ToBeSigned> = BIT_STRING;
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ENCRYPTED_HASH
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_ENCRYPTED_HASH<ToBeSigned>(
    _decode_ToBeSigned: $.ASN1Decoder<ToBeSigned>
) {
    return $._decodeBitString;
}
/**
 * @summary Returns a function that will encode a(n) ENCRYPTED_HASH into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ENCRYPTED_HASH as an ASN.1 element.
 */
export function _get_encoder_for_ENCRYPTED_HASH<ToBeSigned>(
    _encode_ToBeSigned: $.ASN1Encoder<ToBeSigned>
) {
    return $._encodeBitString;
}

/**
 * @summary SupportedAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedAlgorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedAlgorithms: ALGORITHM[] = [];

/**
 * @summary SupportedAltAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedAltAlgorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedAltAlgorithms: ALGORITHM[] = [];

/**
 * @summary SupportedCurves
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedCurves OBJECT IDENTIFIER ::= {dummyCurv, ...}
 * ```
 *
 * @type {OBJECT_IDENTIFIER}
 */
export type SupportedCurves = OBJECT_IDENTIFIER; // VALUE_SET_TYPE
let _cached_decoder_for_SupportedCurves: $.ASN1Decoder<
    SupportedCurves
> | null = null;
let _cached_encoder_for_SupportedCurves: $.ASN1Encoder<
    SupportedCurves
> | null = null;
export function _decode_SupportedCurves(el: _Element) {
    if (!_cached_decoder_for_SupportedCurves) {
        _cached_decoder_for_SupportedCurves = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_SupportedCurves(el);
}
export function _encode_SupportedCurves(
    value: SupportedCurves,
    elGetter: $.ASN1Encoder<SupportedCurves>
) {
    if (!_cached_encoder_for_SupportedCurves) {
        _cached_encoder_for_SupportedCurves = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_SupportedCurves(value, elGetter);
}

/**
 * @summary id_ecPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ecPublicKey OBJECT IDENTIFIER ::= {iso(1) member-body(2) us(840) ansi-X9-62(10045)
 *                                       keyType(2) 1 }
 * ```
 *
 * @constant
 */
export const id_ecPublicKey: OBJECT_IDENTIFIER = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* ansi-X9-62 */ 10045,
    /* keyType */ 2,
    1,
]);

/**
 * @summary ecPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecPublicKey ALGORITHM ::= {  -- copied IETF RFC 5480
 *   PARMS       SupportedCurves
 *   IDENTIFIED  BY id-ecPublicKey }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const ecPublicKey: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_SupportedCurves,
    },
    encoderFor: {
        "&Type": _encode_SupportedCurves,
    },
    "&id": id_ecPublicKey /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary dummyCurv
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dummyCurv OBJECT IDENTIFIER ::= {2 5 5}
 * ```
 *
 * @constant
 */
export const dummyCurv: OBJECT_IDENTIFIER = new _OID([2, 5, 5]);

/**
 * @summary SIGNED
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SIGNED{ToBeSigned} ::= SEQUENCE {
 *   toBeSigned              ToBeSigned,
 *   algorithmIdentifier     AlgorithmIdentifier{{SupportedAlgorithms}},
 *   signature               BIT STRING,
 *   ...,
 * [[4:
 *   altAlgorithmIdentifier  AlgorithmIdentifier{{SupportedAltAlgorithms}} OPTIONAL,
 *   altSignature            BIT STRING OPTIONAL]]
 *   } (WITH COMPONENTS {..., altAlgorithmIdentifier PRESENT, altSignature PRESENT } |
 *      WITH COMPONENTS {..., altAlgorithmIdentifier ABSENT,  altSignature ABSENT } )
 * ```
 *
 * @class
 */
export class SIGNED<ToBeSigned> {
    constructor(
        /**
         * @summary `toBeSigned`.
         * @public
         * @readonly
         */
        readonly toBeSigned: ToBeSigned,
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmIdentifier,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: BIT_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SIGNED
     * @description
     *
     * This takes an `object` and converts it to a `SIGNED`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SIGNED`.
     * @returns {SIGNED}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SIGNED<any>]: SIGNED<any>[_K] }>
    ): SIGNED<any> {
        return new SIGNED(
            _o.toBeSigned,
            _o.algorithmIdentifier,
            _o.signature,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of SIGNED
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SIGNED: $.ComponentSpec[] = [
    new $.ComponentSpec("toBeSigned", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "algorithmIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SIGNED
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SIGNED: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SIGNED
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SIGNED: $.ComponentSpec[] = [];
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) SIGNED
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_SIGNED<ToBeSigned>(
    _decode_ToBeSigned: $.ASN1Decoder<ToBeSigned>
) {
    return function (el: _Element): SIGNED<ToBeSigned> {
        /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        let toBeSigned!: ToBeSigned;
        let algorithmIdentifier!: AlgorithmIdentifier;
        let signature!: BIT_STRING;
        let _unrecognizedExtensionsList: _Element[] = [];
        /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        /* START_OF_CALLBACKS_MAP */
        const callbacks: $.DecodingMap = {
            toBeSigned: (_el: _Element): void => {
                toBeSigned = _decode_ToBeSigned(_el);
            },
            algorithmIdentifier: (_el: _Element): void => {
                algorithmIdentifier = _decode_AlgorithmIdentifier(_el);
            },
            signature: (_el: _Element): void => {
                signature = $._decodeBitString(_el);
            },
        };
        /* END_OF_CALLBACKS_MAP */
        $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_SIGNED,
            _extension_additions_list_spec_for_SIGNED,
            _root_component_type_list_2_spec_for_SIGNED,
            (ext: _Element): void => {
                _unrecognizedExtensionsList.push(ext);
            }
        );
        return new SIGNED(
            /* SEQUENCE_CONSTRUCTOR_CALL */ toBeSigned,
            algorithmIdentifier,
            signature,
            _unrecognizedExtensionsList
        );
    };
}
/**
 * @summary Returns a function that will encode a(n) SIGNED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) SIGNED as an ASN.1 element.
 */
export function _get_encoder_for_SIGNED<ToBeSigned>(
    _encode_ToBeSigned: $.ASN1Encoder<ToBeSigned>
) {
    return function (
        value: SIGNED<ToBeSigned>,
        elGetter: $.ASN1Encoder<SIGNED<ToBeSigned>>
    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        /* REQUIRED   */ _encode_ToBeSigned(
                            value.toBeSigned,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algorithmIdentifier,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.signature,
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

/**
 * @summary Version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Version  ::=  INTEGER {v1(0), v2(1), v3(2)}
 * ```
 */
export type Version = INTEGER;
/**
 * @summary Version_v1
 * @constant
 * @type {number}
 */
export const Version_v1: Version = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Version_v2
 * @constant
 * @type {number}
 */
export const Version_v2: Version = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Version_v3
 * @constant
 * @type {number}
 */
export const Version_v3: Version = 2; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Version: $.ASN1Decoder<Version> | null = null;
let _cached_encoder_for_Version: $.ASN1Encoder<Version> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Version} The decoded data structure.
 */
export function _decode_Version(el: _Element) {
    if (!_cached_decoder_for_Version) {
        _cached_decoder_for_Version = $._decodeInteger;
    }
    return _cached_decoder_for_Version(el);
}
/**
 * @summary Encodes a(n) Version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Version, encoded as an ASN.1 Element.
 */
export function _encode_Version(
    value: Version,
    elGetter: $.ASN1Encoder<Version>
) {
    if (!_cached_encoder_for_Version) {
        _cached_encoder_for_Version = $._encodeInteger;
    }
    return _cached_encoder_for_Version(value, elGetter);
}

/**
 * @summary CertificateSerialNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateSerialNumber  ::=  INTEGER
 * ```
 */
export type CertificateSerialNumber = INTEGER;
let _cached_decoder_for_CertificateSerialNumber: $.ASN1Decoder<
    CertificateSerialNumber
> | null = null;
let _cached_encoder_for_CertificateSerialNumber: $.ASN1Encoder<
    CertificateSerialNumber
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateSerialNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateSerialNumber} The decoded data structure.
 */
export function _decode_CertificateSerialNumber(el: _Element) {
    if (!_cached_decoder_for_CertificateSerialNumber) {
        _cached_decoder_for_CertificateSerialNumber = $._decodeInteger;
    }
    return _cached_decoder_for_CertificateSerialNumber(el);
}
/**
 * @summary Encodes a(n) CertificateSerialNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateSerialNumber, encoded as an ASN.1 Element.
 */
export function _encode_CertificateSerialNumber(
    value: CertificateSerialNumber,
    elGetter: $.ASN1Encoder<CertificateSerialNumber>
) {
    if (!_cached_encoder_for_CertificateSerialNumber) {
        _cached_encoder_for_CertificateSerialNumber = $._encodeInteger;
    }
    return _cached_encoder_for_CertificateSerialNumber(value, elGetter);
}

/**
 * @summary Time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Time  ::=  CHOICE {
 *   utcTime          UTCTime,
 *   generalizedTime  GeneralizedTime }
 * ```
 */
export type Time =
    | { utcTime: UTCTime } /* CHOICE_ALT_ROOT */
    | { generalizedTime: GeneralizedTime } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_Time: $.ASN1Decoder<Time> | null = null;
let _cached_encoder_for_Time: $.ASN1Encoder<Time> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Time
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Time} The decoded data structure.
 */
export function _decode_Time(el: _Element) {
    if (!_cached_decoder_for_Time) {
        _cached_decoder_for_Time = $._decode_inextensible_choice<Time>({
            "UNIVERSAL 23": ["utcTime", $._decodeUTCTime],
            "UNIVERSAL 24": ["generalizedTime", $._decodeGeneralizedTime],
        });
    }
    return _cached_decoder_for_Time(el);
}
/**
 * @summary Encodes a(n) Time into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Time, encoded as an ASN.1 Element.
 */
export function _encode_Time(value: Time, elGetter: $.ASN1Encoder<Time>) {
    if (!_cached_encoder_for_Time) {
        _cached_encoder_for_Time = $._encode_choice<Time>(
            {
                utcTime: $._encodeUTCTime,
                generalizedTime: $._encodeGeneralizedTime,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Time(value, elGetter);
}

/**
 * @summary Validity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Validity ::= SEQUENCE {
 *   notBefore  Time,
 *   notAfter   Time,
 *   ... }
 * ```
 *
 * @class
 */
export class Validity {
    constructor(
        /**
         * @summary `notBefore`.
         * @public
         * @readonly
         */
        readonly notBefore: Time,
        /**
         * @summary `notAfter`.
         * @public
         * @readonly
         */
        readonly notAfter: Time,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Validity
     * @description
     *
     * This takes an `object` and converts it to a `Validity`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Validity`.
     * @returns {Validity}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Validity]: Validity[_K] }>
    ): Validity {
        return new Validity(
            _o.notBefore,
            _o.notAfter,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of Validity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Validity: $.ComponentSpec[] = [
    new $.ComponentSpec("notBefore", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("notAfter", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of Validity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Validity: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Validity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Validity: $.ComponentSpec[] = [];
let _cached_decoder_for_Validity: $.ASN1Decoder<Validity> | null = null;
let _cached_encoder_for_Validity: $.ASN1Encoder<Validity> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Validity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Validity} The decoded data structure.
 */
export function _decode_Validity(el: _Element) {
    if (!_cached_decoder_for_Validity) {
        _cached_decoder_for_Validity = function (el: _Element): Validity {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "Validity contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "notBefore";
            sequence[1].name = "notAfter";
            let notBefore!: Time;
            let notAfter!: Time;
            notBefore = _decode_Time(sequence[0]);
            notAfter = _decode_Time(sequence[1]);
            return new Validity(notBefore, notAfter, sequence.slice(2));
        };
    }
    return _cached_decoder_for_Validity(el);
}
/**
 * @summary Encodes a(n) Validity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Validity, encoded as an ASN.1 Element.
 */
export function _encode_Validity(
    value: Validity,
    elGetter: $.ASN1Encoder<Validity>
) {
    if (!_cached_encoder_for_Validity) {
        _cached_encoder_for_Validity = function (
            value: Validity,
            elGetter: $.ASN1Encoder<Validity>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Time(
                                value.notBefore,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Time(
                                value.notAfter,
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
    return _cached_encoder_for_Validity(value, elGetter);
}

/**
 * @summary PublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicKey  ::=  BIT STRING
 * ```
 */
export type PublicKey = BIT_STRING;
let _cached_decoder_for_PublicKey: $.ASN1Decoder<PublicKey> | null = null;
let _cached_encoder_for_PublicKey: $.ASN1Encoder<PublicKey> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PublicKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PublicKey} The decoded data structure.
 */
export function _decode_PublicKey(el: _Element) {
    if (!_cached_decoder_for_PublicKey) {
        _cached_decoder_for_PublicKey = $._decodeBitString;
    }
    return _cached_decoder_for_PublicKey(el);
}
/**
 * @summary Encodes a(n) PublicKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicKey, encoded as an ASN.1 Element.
 */
export function _encode_PublicKey(
    value: PublicKey,
    elGetter: $.ASN1Encoder<PublicKey>
) {
    if (!_cached_encoder_for_PublicKey) {
        _cached_encoder_for_PublicKey = $._encodeBitString;
    }
    return _cached_encoder_for_PublicKey(value, elGetter);
}

/**
 * @summary SubjectPublicKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectPublicKeyInfo ::= SEQUENCE {
 *   algorithm         AlgorithmIdentifier{{SupportedAlgorithms}},
 *   subjectPublicKey  PublicKey,
 *   ... }
 * ```
 *
 * @class
 */
export class SubjectPublicKeyInfo {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: AlgorithmIdentifier,
        /**
         * @summary `subjectPublicKey`.
         * @public
         * @readonly
         */
        readonly subjectPublicKey: PublicKey,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SubjectPublicKeyInfo
     * @description
     *
     * This takes an `object` and converts it to a `SubjectPublicKeyInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubjectPublicKeyInfo`.
     * @returns {SubjectPublicKeyInfo}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SubjectPublicKeyInfo]: SubjectPublicKeyInfo[_K] }
        >
    ): SubjectPublicKeyInfo {
        return new SubjectPublicKeyInfo(
            _o.algorithm,
            _o.subjectPublicKey,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of SubjectPublicKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubjectPublicKeyInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subjectPublicKey",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SubjectPublicKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubjectPublicKeyInfo: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SubjectPublicKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubjectPublicKeyInfo: $.ComponentSpec[] = [];
let _cached_decoder_for_SubjectPublicKeyInfo: $.ASN1Decoder<
    SubjectPublicKeyInfo
> | null = null;
let _cached_encoder_for_SubjectPublicKeyInfo: $.ASN1Encoder<
    SubjectPublicKeyInfo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SubjectPublicKeyInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectPublicKeyInfo} The decoded data structure.
 */
export function _decode_SubjectPublicKeyInfo(el: _Element) {
    if (!_cached_decoder_for_SubjectPublicKeyInfo) {
        _cached_decoder_for_SubjectPublicKeyInfo = function (
            el: _Element
        ): SubjectPublicKeyInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SubjectPublicKeyInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "algorithm";
            sequence[1].name = "subjectPublicKey";
            let algorithm!: AlgorithmIdentifier;
            let subjectPublicKey!: PublicKey;
            algorithm = _decode_AlgorithmIdentifier(sequence[0]);
            subjectPublicKey = _decode_PublicKey(sequence[1]);
            return new SubjectPublicKeyInfo(
                algorithm,
                subjectPublicKey,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_SubjectPublicKeyInfo(el);
}
/**
 * @summary Encodes a(n) SubjectPublicKeyInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectPublicKeyInfo, encoded as an ASN.1 Element.
 */
export function _encode_SubjectPublicKeyInfo(
    value: SubjectPublicKeyInfo,
    elGetter: $.ASN1Encoder<SubjectPublicKeyInfo>
) {
    if (!_cached_encoder_for_SubjectPublicKeyInfo) {
        _cached_encoder_for_SubjectPublicKeyInfo = function (
            value: SubjectPublicKeyInfo,
            elGetter: $.ASN1Encoder<SubjectPublicKeyInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.algorithm,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_PublicKey(
                                value.subjectPublicKey,
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
    return _cached_encoder_for_SubjectPublicKeyInfo(value, elGetter);
}

/**
 * @summary TBSCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSCertificate ::= SEQUENCE {
 *   version                  [0]  Version DEFAULT v1,
 *   serialNumber                  CertificateSerialNumber,
 *   signature                     AlgorithmIdentifier{{SupportedAlgorithms}},
 *   issuer                        Name,
 *   validity                      Validity,
 *   subject                       Name,
 *   subjectPublicKeyInfo          SubjectPublicKeyInfo,
 *   issuerUniqueIdentifier   [1] IMPLICIT UniqueIdentifier OPTIONAL,
 *   ...,
 *   [[2:  -- if present, version shall be v2 or v3
 *   subjectUniqueIdentifier  [2] IMPLICIT UniqueIdentifier OPTIONAL]],
 *   [[3:  -- if present, version shall be v2 or v3
 *   extensions               [3]  Extensions OPTIONAL ]]
 *   -- If present, version shall be v3]]
 *  } (CONSTRAINED BY { -- shall be DER encoded -- } )
 * ```
 *
 * @class
 */
export class TBSCertificate {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: AlgorithmIdentifier,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `validity`.
         * @public
         * @readonly
         */
        readonly validity: Validity,
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: Name,
        /**
         * @summary `subjectPublicKeyInfo`.
         * @public
         * @readonly
         */
        readonly subjectPublicKeyInfo: SubjectPublicKeyInfo,
        /**
         * @summary `issuerUniqueIdentifier`.
         * @public
         * @readonly
         */
        readonly issuerUniqueIdentifier: OPTIONAL<UniqueIdentifier>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TBSCertificate
     * @description
     *
     * This takes an `object` and converts it to a `TBSCertificate`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSCertificate`.
     * @returns {TBSCertificate}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TBSCertificate]: TBSCertificate[_K] }>
    ): TBSCertificate {
        return new TBSCertificate(
            _o.version,
            _o.serialNumber,
            _o.signature,
            _o.issuer,
            _o.validity,
            _o.subject,
            _o.subjectPublicKeyInfo,
            _o.issuerUniqueIdentifier,
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
        return Version_v1;
    }
}
/**
 * @summary The Leading Root Component Types of TBSCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBSCertificate: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec("issuer", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "validity",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec("subject", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "subjectPublicKeyInfo",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "issuerUniqueIdentifier",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TBSCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBSCertificate: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TBSCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBSCertificate: $.ComponentSpec[] = [];
let _cached_decoder_for_TBSCertificate: $.ASN1Decoder<
    TBSCertificate
> | null = null;
let _cached_encoder_for_TBSCertificate: $.ASN1Encoder<
    TBSCertificate
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TBSCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSCertificate} The decoded data structure.
 */
export function _decode_TBSCertificate(el: _Element) {
    if (!_cached_decoder_for_TBSCertificate) {
        _cached_decoder_for_TBSCertificate = function (
            el: _Element
        ): TBSCertificate {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<Version> =
                TBSCertificate._default_value_for_version;
            let serialNumber!: CertificateSerialNumber;
            let signature!: AlgorithmIdentifier;
            let issuer!: Name;
            let validity!: Validity;
            let subject!: Name;
            let subjectPublicKeyInfo!: SubjectPublicKeyInfo;
            let issuerUniqueIdentifier: OPTIONAL<UniqueIdentifier>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = $._decode_explicit<Version>(
                        () => _decode_Version
                    )(_el);
                },
                serialNumber: (_el: _Element): void => {
                    serialNumber = _decode_CertificateSerialNumber(_el);
                },
                signature: (_el: _Element): void => {
                    signature = _decode_AlgorithmIdentifier(_el);
                },
                issuer: (_el: _Element): void => {
                    issuer = _decode_Name(_el);
                },
                validity: (_el: _Element): void => {
                    validity = _decode_Validity(_el);
                },
                subject: (_el: _Element): void => {
                    subject = _decode_Name(_el);
                },
                subjectPublicKeyInfo: (_el: _Element): void => {
                    subjectPublicKeyInfo = _decode_SubjectPublicKeyInfo(_el);
                },
                issuerUniqueIdentifier: (_el: _Element): void => {
                    issuerUniqueIdentifier = $._decode_explicit<
                        UniqueIdentifier
                    >(() => _decode_UniqueIdentifier)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBSCertificate,
                _extension_additions_list_spec_for_TBSCertificate,
                _root_component_type_list_2_spec_for_TBSCertificate,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TBSCertificate(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                serialNumber,
                signature,
                issuer,
                validity,
                subject,
                subjectPublicKeyInfo,
                issuerUniqueIdentifier,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TBSCertificate(el);
}
/**
 * @summary Encodes a(n) TBSCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSCertificate, encoded as an ASN.1 Element.
 */
export function _encode_TBSCertificate(
    value: TBSCertificate,
    elGetter: $.ASN1Encoder<TBSCertificate>
) {
    if (!_cached_encoder_for_TBSCertificate) {
        _cached_encoder_for_TBSCertificate = function (
            value: TBSCertificate,
            elGetter: $.ASN1Encoder<TBSCertificate>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                TBSCertificate._default_value_for_version
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Version,
                                      $.BER
                                  )(value.version, $.BER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.signature,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Name(value.issuer, $.BER),
                            /* REQUIRED   */ _encode_Validity(
                                value.validity,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Name(value.subject, $.BER),
                            /* REQUIRED   */ _encode_SubjectPublicKeyInfo(
                                value.subjectPublicKeyInfo,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.issuerUniqueIdentifier ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_UniqueIdentifier,
                                      $.BER
                                  )(value.issuerUniqueIdentifier, $.BER),
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
    return _cached_encoder_for_TBSCertificate(value, elGetter);
}

export type Certificate<> = SIGNED<TBSCertificate>; // DefinedType
let _cached_decoder_for_Certificate: $.ASN1Decoder<Certificate> | null = null;
let _cached_encoder_for_Certificate: $.ASN1Encoder<Certificate> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Certificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Certificate} The decoded data structure.
 */
export function _decode_Certificate(el: _Element) {
    if (!_cached_decoder_for_Certificate) {
        _cached_decoder_for_Certificate = _get_decoder_for_SIGNED<
            TBSCertificate
        >(_decode_TBSCertificate);
    }
    return _cached_decoder_for_Certificate(el);
}
/**
 * @summary Encodes a(n) Certificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Certificate, encoded as an ASN.1 Element.
 */
export function _encode_Certificate(
    value: Certificate,
    elGetter: $.ASN1Encoder<Certificate>
) {
    if (!_cached_encoder_for_Certificate) {
        _cached_encoder_for_Certificate = _get_encoder_for_SIGNED<
            TBSCertificate
        >(_encode_TBSCertificate);
    }
    return _cached_encoder_for_Certificate(value, elGetter);
}

export type CrossCertificates<> = Certificate[]; // SetOfType
let _cached_decoder_for_CrossCertificates: $.ASN1Decoder<
    CrossCertificates
> | null = null;
let _cached_encoder_for_CrossCertificates: $.ASN1Encoder<
    CrossCertificates
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CrossCertificates
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CrossCertificates} The decoded data structure.
 */
export function _decode_CrossCertificates(el: _Element) {
    if (!_cached_decoder_for_CrossCertificates) {
        _cached_decoder_for_CrossCertificates = $._decodeSetOf<Certificate>(
            () => _decode_Certificate
        );
    }
    return _cached_decoder_for_CrossCertificates(el);
}
/**
 * @summary Encodes a(n) CrossCertificates into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CrossCertificates, encoded as an ASN.1 Element.
 */
export function _encode_CrossCertificates(
    value: CrossCertificates,
    elGetter: $.ASN1Encoder<CrossCertificates>
) {
    if (!_cached_encoder_for_CrossCertificates) {
        _cached_encoder_for_CrossCertificates = $._encodeSetOf<Certificate>(
            () => _encode_Certificate,
            $.BER
        );
    }
    return _cached_encoder_for_CrossCertificates(value, elGetter);
}

export type ForwardCertificationPath<> = CrossCertificates[]; // SequenceOfType
let _cached_decoder_for_ForwardCertificationPath: $.ASN1Decoder<
    ForwardCertificationPath
> | null = null;
let _cached_encoder_for_ForwardCertificationPath: $.ASN1Encoder<
    ForwardCertificationPath
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ForwardCertificationPath
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ForwardCertificationPath} The decoded data structure.
 */
export function _decode_ForwardCertificationPath(el: _Element) {
    if (!_cached_decoder_for_ForwardCertificationPath) {
        _cached_decoder_for_ForwardCertificationPath = $._decodeSequenceOf<
            CrossCertificates
        >(() => _decode_CrossCertificates);
    }
    return _cached_decoder_for_ForwardCertificationPath(el);
}
/**
 * @summary Encodes a(n) ForwardCertificationPath into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardCertificationPath, encoded as an ASN.1 Element.
 */
export function _encode_ForwardCertificationPath(
    value: ForwardCertificationPath,
    elGetter: $.ASN1Encoder<ForwardCertificationPath>
) {
    if (!_cached_encoder_for_ForwardCertificationPath) {
        _cached_encoder_for_ForwardCertificationPath = $._encodeSequenceOf<
            CrossCertificates
        >(() => _encode_CrossCertificates, $.BER);
    }
    return _cached_encoder_for_ForwardCertificationPath(value, elGetter);
}

/**
 * @summary Certificates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Certificates ::= SEQUENCE {
 *   userCertificate    Certificate,
 *   certificationPath  ForwardCertificationPath OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class Certificates {
    constructor(
        /**
         * @summary `userCertificate`.
         * @public
         * @readonly
         */
        readonly userCertificate: Certificate,
        /**
         * @summary `certificationPath`.
         * @public
         * @readonly
         */
        readonly certificationPath: OPTIONAL<ForwardCertificationPath>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Certificates
     * @description
     *
     * This takes an `object` and converts it to a `Certificates`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Certificates`.
     * @returns {Certificates}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Certificates]: Certificates[_K] }>
    ): Certificates {
        return new Certificates(
            _o.userCertificate,
            _o.certificationPath,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of Certificates
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Certificates: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "userCertificate",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certificationPath",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Certificates
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Certificates: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Certificates
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Certificates: $.ComponentSpec[] = [];
let _cached_decoder_for_Certificates: $.ASN1Decoder<Certificates> | null = null;
let _cached_encoder_for_Certificates: $.ASN1Encoder<Certificates> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Certificates
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Certificates} The decoded data structure.
 */
export function _decode_Certificates(el: _Element) {
    if (!_cached_decoder_for_Certificates) {
        _cached_decoder_for_Certificates = function (
            el: _Element
        ): Certificates {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let userCertificate!: Certificate;
            let certificationPath: OPTIONAL<ForwardCertificationPath>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                userCertificate: (_el: _Element): void => {
                    userCertificate = _decode_Certificate(_el);
                },
                certificationPath: (_el: _Element): void => {
                    certificationPath = _decode_ForwardCertificationPath(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Certificates,
                _extension_additions_list_spec_for_Certificates,
                _root_component_type_list_2_spec_for_Certificates,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Certificates(
                /* SEQUENCE_CONSTRUCTOR_CALL */ userCertificate,
                certificationPath,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Certificates(el);
}
/**
 * @summary Encodes a(n) Certificates into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Certificates, encoded as an ASN.1 Element.
 */
export function _encode_Certificates(
    value: Certificates,
    elGetter: $.ASN1Encoder<Certificates>
) {
    if (!_cached_encoder_for_Certificates) {
        _cached_encoder_for_Certificates = function (
            value: Certificates,
            elGetter: $.ASN1Encoder<Certificates>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Certificate(
                                value.userCertificate,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.certificationPath ===
                            undefined
                                ? undefined
                                : _encode_ForwardCertificationPath(
                                      value.certificationPath,
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
    return _cached_encoder_for_Certificates(value, elGetter);
}

/**
 * @summary CertificatePair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificatePair ::= SEQUENCE {
 *   issuedToThisCA  [0]  Certificate OPTIONAL,
 *   issuedByThisCA  [1]  Certificate OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS { ..., issuedToThisCA PRESENT} |
 *    WITH COMPONENTS { ..., issuedByThisCA PRESENT})
 * ```
 *
 * @class
 */
export class CertificatePair {
    constructor(
        /**
         * @summary `issuedToThisCA`.
         * @public
         * @readonly
         */
        readonly issuedToThisCA: OPTIONAL<Certificate>,
        /**
         * @summary `issuedByThisCA`.
         * @public
         * @readonly
         */
        readonly issuedByThisCA: OPTIONAL<Certificate>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificatePair
     * @description
     *
     * This takes an `object` and converts it to a `CertificatePair`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificatePair`.
     * @returns {CertificatePair}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertificatePair]: CertificatePair[_K] }>
    ): CertificatePair {
        return new CertificatePair(
            _o.issuedToThisCA,
            _o.issuedByThisCA,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertificatePair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificatePair: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "issuedToThisCA",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "issuedByThisCA",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertificatePair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificatePair: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertificatePair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificatePair: $.ComponentSpec[] = [];
let _cached_decoder_for_CertificatePair: $.ASN1Decoder<
    CertificatePair
> | null = null;
let _cached_encoder_for_CertificatePair: $.ASN1Encoder<
    CertificatePair
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertificatePair
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificatePair} The decoded data structure.
 */
export function _decode_CertificatePair(el: _Element) {
    if (!_cached_decoder_for_CertificatePair) {
        _cached_decoder_for_CertificatePair = function (
            el: _Element
        ): CertificatePair {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuedToThisCA: OPTIONAL<Certificate>;
            let issuedByThisCA: OPTIONAL<Certificate>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                issuedToThisCA: (_el: _Element): void => {
                    issuedToThisCA = $._decode_explicit<Certificate>(
                        () => _decode_Certificate
                    )(_el);
                },
                issuedByThisCA: (_el: _Element): void => {
                    issuedByThisCA = $._decode_explicit<Certificate>(
                        () => _decode_Certificate
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificatePair,
                _extension_additions_list_spec_for_CertificatePair,
                _root_component_type_list_2_spec_for_CertificatePair,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificatePair(
                /* SEQUENCE_CONSTRUCTOR_CALL */ issuedToThisCA,
                issuedByThisCA,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertificatePair(el);
}
/**
 * @summary Encodes a(n) CertificatePair into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificatePair, encoded as an ASN.1 Element.
 */
export function _encode_CertificatePair(
    value: CertificatePair,
    elGetter: $.ASN1Encoder<CertificatePair>
) {
    if (!_cached_encoder_for_CertificatePair) {
        _cached_encoder_for_CertificatePair = function (
            value: CertificatePair,
            elGetter: $.ASN1Encoder<CertificatePair>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.issuedToThisCA === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Certificate,
                                      $.BER
                                  )(value.issuedToThisCA, $.BER),
                            /* IF_ABSENT  */ value.issuedByThisCA === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Certificate,
                                      $.BER
                                  )(value.issuedByThisCA, $.BER),
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
    return _cached_encoder_for_CertificatePair(value, elGetter);
}

/**
 * @summary CertificationPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificationPath ::= SEQUENCE {
 *   userCertificate    Certificate,
 *   theCACertificates  SEQUENCE SIZE (1..MAX) OF CertificatePair OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class CertificationPath {
    constructor(
        /**
         * @summary `userCertificate`.
         * @public
         * @readonly
         */
        readonly userCertificate: Certificate,
        /**
         * @summary `theCACertificates`.
         * @public
         * @readonly
         */
        readonly theCACertificates: OPTIONAL<CertificatePair[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificationPath
     * @description
     *
     * This takes an `object` and converts it to a `CertificationPath`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificationPath`.
     * @returns {CertificationPath}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertificationPath]: CertificationPath[_K] }>
    ): CertificationPath {
        return new CertificationPath(
            _o.userCertificate,
            _o.theCACertificates,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificationPath: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "userCertificate",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "theCACertificates",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificationPath: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificationPath: $.ComponentSpec[] = [];
let _cached_decoder_for_CertificationPath: $.ASN1Decoder<
    CertificationPath
> | null = null;
let _cached_encoder_for_CertificationPath: $.ASN1Encoder<
    CertificationPath
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertificationPath
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificationPath} The decoded data structure.
 */
export function _decode_CertificationPath(el: _Element) {
    if (!_cached_decoder_for_CertificationPath) {
        _cached_decoder_for_CertificationPath = function (
            el: _Element
        ): CertificationPath {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let userCertificate!: Certificate;
            let theCACertificates: OPTIONAL<CertificatePair[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                userCertificate: (_el: _Element): void => {
                    userCertificate = _decode_Certificate(_el);
                },
                theCACertificates: (_el: _Element): void => {
                    theCACertificates = $._decodeSequenceOf<CertificatePair>(
                        () => _decode_CertificatePair
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificationPath,
                _extension_additions_list_spec_for_CertificationPath,
                _root_component_type_list_2_spec_for_CertificationPath,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificationPath(
                /* SEQUENCE_CONSTRUCTOR_CALL */ userCertificate,
                theCACertificates,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertificationPath(el);
}
/**
 * @summary Encodes a(n) CertificationPath into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificationPath, encoded as an ASN.1 Element.
 */
export function _encode_CertificationPath(
    value: CertificationPath,
    elGetter: $.ASN1Encoder<CertificationPath>
) {
    if (!_cached_encoder_for_CertificationPath) {
        _cached_encoder_for_CertificationPath = function (
            value: CertificationPath,
            elGetter: $.ASN1Encoder<CertificationPath>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Certificate(
                                value.userCertificate,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.theCACertificates ===
                            undefined
                                ? undefined
                                : $._encodeSequenceOf<CertificatePair>(
                                      () => _encode_CertificatePair,
                                      $.BER
                                  )(value.theCACertificates, $.BER),
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
    return _cached_encoder_for_CertificationPath(value, elGetter);
}

/**
 * @summary AvlSerialNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AvlSerialNumber  ::=  INTEGER (0..MAX)
 * ```
 */
export type AvlSerialNumber = INTEGER;
let _cached_decoder_for_AvlSerialNumber: $.ASN1Decoder<
    AvlSerialNumber
> | null = null;
let _cached_encoder_for_AvlSerialNumber: $.ASN1Encoder<
    AvlSerialNumber
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AvlSerialNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AvlSerialNumber} The decoded data structure.
 */
export function _decode_AvlSerialNumber(el: _Element) {
    if (!_cached_decoder_for_AvlSerialNumber) {
        _cached_decoder_for_AvlSerialNumber = $._decodeInteger;
    }
    return _cached_decoder_for_AvlSerialNumber(el);
}
/**
 * @summary Encodes a(n) AvlSerialNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AvlSerialNumber, encoded as an ASN.1 Element.
 */
export function _encode_AvlSerialNumber(
    value: AvlSerialNumber,
    elGetter: $.ASN1Encoder<AvlSerialNumber>
) {
    if (!_cached_encoder_for_AvlSerialNumber) {
        _cached_encoder_for_AvlSerialNumber = $._encodeInteger;
    }
    return _cached_encoder_for_AvlSerialNumber(value, elGetter);
}

/**
 * @summary IssuerSerialNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IssuerSerialNumber ::= SEQUENCE {
 *   issuer        Name,
 *   serialNumber  CertificateSerialNumber,
 *   ... }
 * ```
 *
 * @class
 */
export class IssuerSerialNumber {
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
     * @summary Restructures an object into a IssuerSerialNumber
     * @description
     *
     * This takes an `object` and converts it to a `IssuerSerialNumber`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IssuerSerialNumber`.
     * @returns {IssuerSerialNumber}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof IssuerSerialNumber]: IssuerSerialNumber[_K] }
        >
    ): IssuerSerialNumber {
        return new IssuerSerialNumber(
            _o.issuer,
            _o.serialNumber,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of IssuerSerialNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IssuerSerialNumber: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of IssuerSerialNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IssuerSerialNumber: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of IssuerSerialNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IssuerSerialNumber: $.ComponentSpec[] = [];
let _cached_decoder_for_IssuerSerialNumber: $.ASN1Decoder<
    IssuerSerialNumber
> | null = null;
let _cached_encoder_for_IssuerSerialNumber: $.ASN1Encoder<
    IssuerSerialNumber
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) IssuerSerialNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IssuerSerialNumber} The decoded data structure.
 */
export function _decode_IssuerSerialNumber(el: _Element) {
    if (!_cached_decoder_for_IssuerSerialNumber) {
        _cached_decoder_for_IssuerSerialNumber = function (
            el: _Element
        ): IssuerSerialNumber {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "IssuerSerialNumber contained only " +
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
            return new IssuerSerialNumber(
                issuer,
                serialNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_IssuerSerialNumber(el);
}
/**
 * @summary Encodes a(n) IssuerSerialNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IssuerSerialNumber, encoded as an ASN.1 Element.
 */
export function _encode_IssuerSerialNumber(
    value: IssuerSerialNumber,
    elGetter: $.ASN1Encoder<IssuerSerialNumber>
) {
    if (!_cached_encoder_for_IssuerSerialNumber) {
        _cached_encoder_for_IssuerSerialNumber = function (
            value: IssuerSerialNumber,
            elGetter: $.ASN1Encoder<IssuerSerialNumber>
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
    return _cached_encoder_for_IssuerSerialNumber(value, elGetter);
}

/**
 * @summary FingerPrint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FingerPrint {ToBeFingerprinted} ::= SEQUENCE {
 *   algorithmIdentifier  AlgorithmIdentifier{{SupportedAlgorithms}},
 *   fingerprint          BIT STRING,
 *   ... }
 * ```
 *
 * @class
 */
export class FingerPrint<ToBeFingerprinted> {
    constructor(
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmIdentifier,
        /**
         * @summary `fingerprint`.
         * @public
         * @readonly
         */
        readonly fingerprint: BIT_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a FingerPrint
     * @description
     *
     * This takes an `object` and converts it to a `FingerPrint`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FingerPrint`.
     * @returns {FingerPrint}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof FingerPrint<any>]: FingerPrint<any>[_K] }>
    ): FingerPrint<any> {
        return new FingerPrint(
            _o.algorithmIdentifier,
            _o.fingerprint,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of FingerPrint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FingerPrint: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithmIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "fingerprint",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of FingerPrint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FingerPrint: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of FingerPrint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FingerPrint: $.ComponentSpec[] = [];
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) FingerPrint
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_FingerPrint<ToBeFingerprinted>(
    _decode_ToBeFingerprinted: $.ASN1Decoder<ToBeFingerprinted>
) {
    return function <ToBeFingerprinted>(
        el: _Element
    ): FingerPrint<ToBeFingerprinted> {
        const sequence: _Element[] = el.sequence;
        if (sequence.length < 2) {
            throw new _ConstructionError(
                "FingerPrint contained only " +
                    sequence.length.toString() +
                    " elements."
            );
        }
        sequence[0].name = "algorithmIdentifier";
        sequence[1].name = "fingerprint";
        let algorithmIdentifier!: AlgorithmIdentifier;
        let fingerprint!: BIT_STRING;
        algorithmIdentifier = _decode_AlgorithmIdentifier(sequence[0]);
        fingerprint = $._decodeBitString(sequence[1]);
        return new FingerPrint<ToBeFingerprinted>(
            algorithmIdentifier,
            fingerprint,
            sequence.slice(2)
        );
    };
}
/**
 * @summary Returns a function that will encode a(n) FingerPrint into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) FingerPrint as an ASN.1 element.
 */
export function _get_encoder_for_FingerPrint<ToBeFingerprinted>(
    _encode_ToBeFingerprinted: $.ASN1Encoder<ToBeFingerprinted>
) {
    return function (
        value: FingerPrint<ToBeFingerprinted>,
        elGetter: $.ASN1Encoder<FingerPrint<ToBeFingerprinted>>
    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algorithmIdentifier,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.fingerprint,
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

/**
 * @summary PKCertIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCertIdentifier  ::=  CHOICE {
 *   issuerSerialNumber         IssuerSerialNumber,
 *   fingerprintPKC        [0]  IMPLICIT FingerPrint {Certificate},
 *   fingerprintPK         [1]  IMPLICIT FingerPrint {PublicKey},
 *   ... }
 * ```
 */
export type PKCertIdentifier =
    | { issuerSerialNumber: IssuerSerialNumber } /* CHOICE_ALT_ROOT */
    | { fingerprintPKC: FingerPrint<Certificate> } /* CHOICE_ALT_ROOT */
    | { fingerprintPK: FingerPrint<PublicKey> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_PKCertIdentifier: $.ASN1Decoder<
    PKCertIdentifier
> | null = null;
let _cached_encoder_for_PKCertIdentifier: $.ASN1Encoder<
    PKCertIdentifier
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PKCertIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKCertIdentifier} The decoded data structure.
 */
export function _decode_PKCertIdentifier(el: _Element) {
    if (!_cached_decoder_for_PKCertIdentifier) {
        _cached_decoder_for_PKCertIdentifier = $._decode_extensible_choice<
            PKCertIdentifier
        >({
            "UNIVERSAL 16": ["issuerSerialNumber", _decode_IssuerSerialNumber],
            "CONTEXT 0": [
                "fingerprintPKC",
                $._decode_explicit<FingerPrint<Certificate>>(() =>
                    _get_decoder_for_FingerPrint<Certificate>(
                        _decode_Certificate
                    )
                ),
            ],
            "CONTEXT 1": [
                "fingerprintPK",
                $._decode_explicit<FingerPrint<PublicKey>>(() =>
                    _get_decoder_for_FingerPrint<PublicKey>(_decode_PublicKey)
                ),
            ],
        });
    }
    return _cached_decoder_for_PKCertIdentifier(el);
}
/**
 * @summary Encodes a(n) PKCertIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKCertIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_PKCertIdentifier(
    value: PKCertIdentifier,
    elGetter: $.ASN1Encoder<PKCertIdentifier>
) {
    if (!_cached_encoder_for_PKCertIdentifier) {
        _cached_encoder_for_PKCertIdentifier = $._encode_choice<
            PKCertIdentifier
        >(
            {
                issuerSerialNumber: _encode_IssuerSerialNumber,
                fingerprintPKC: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () =>
                        _get_encoder_for_FingerPrint<Certificate>(
                            _encode_Certificate
                        ),
                    $.BER
                ),
                fingerprintPK: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () =>
                        _get_encoder_for_FingerPrint<PublicKey>(
                            _encode_PublicKey
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_PKCertIdentifier(value, elGetter);
}

/**
 * @summary TBSCertAVL_entries_Item_idType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSCertAVL-entries-Item-idType ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TBSCertAVL_entries_Item_idType =
    | { certIdentifier: PKCertIdentifier } /* CHOICE_ALT_ROOT */
    | { entityGroup: DistinguishedName } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_TBSCertAVL_entries_Item_idType: $.ASN1Decoder<
    TBSCertAVL_entries_Item_idType
> | null = null;
let _cached_encoder_for_TBSCertAVL_entries_Item_idType: $.ASN1Encoder<
    TBSCertAVL_entries_Item_idType
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TBSCertAVL_entries_Item_idType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSCertAVL_entries_Item_idType} The decoded data structure.
 */
export function _decode_TBSCertAVL_entries_Item_idType(el: _Element) {
    if (!_cached_decoder_for_TBSCertAVL_entries_Item_idType) {
        _cached_decoder_for_TBSCertAVL_entries_Item_idType = $._decode_extensible_choice<
            TBSCertAVL_entries_Item_idType
        >({
            "CONTEXT 0": [
                "certIdentifier",
                $._decode_explicit<PKCertIdentifier>(
                    () => _decode_PKCertIdentifier
                ),
            ],
            "UNIVERSAL 16": ["entityGroup", _decode_DistinguishedName],
        });
    }
    return _cached_decoder_for_TBSCertAVL_entries_Item_idType(el);
}
/**
 * @summary Encodes a(n) TBSCertAVL_entries_Item_idType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSCertAVL_entries_Item_idType, encoded as an ASN.1 Element.
 */
export function _encode_TBSCertAVL_entries_Item_idType(
    value: TBSCertAVL_entries_Item_idType,
    elGetter: $.ASN1Encoder<TBSCertAVL_entries_Item_idType>
) {
    if (!_cached_encoder_for_TBSCertAVL_entries_Item_idType) {
        _cached_encoder_for_TBSCertAVL_entries_Item_idType = $._encode_choice<
            TBSCertAVL_entries_Item_idType
        >(
            {
                certIdentifier: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_PKCertIdentifier,
                    $.BER
                ),
                entityGroup: _encode_DistinguishedName,
            },
            $.BER
        );
    }
    return _cached_encoder_for_TBSCertAVL_entries_Item_idType(value, elGetter);
}

/**
 * @summary EXTENSION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EXTENSION ::= CLASS {
 *   &id           OBJECT IDENTIFIER UNIQUE,
 *   &ExtnType }
 * WITH SYNTAX {
 *   SYNTAX        &ExtnType
 *   IDENTIFIED BY &id }
 * ```
 *
 * @interface
 */
export interface EXTENSION<
    ExtnType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "EXTENSION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof EXTENSION<ExtnType>]: $.ASN1Decoder<
                EXTENSION<ExtnType>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof EXTENSION<ExtnType>]: $.ASN1Encoder<
                EXTENSION<ExtnType>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &ExtnType
     */
    "&ExtnType": ExtnType;
}

/**
 * @summary ExtensionSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionSet EXTENSION ::= {...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const ExtensionSet: EXTENSION[] = [];

/**
 * @summary der
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * der OBJECT IDENTIFIER ::= {joint-iso-itu-t asn1(1) ber-derived(2) distinguished-encoding(1)}
 * ```
 *
 * @constant
 */
export const der: OBJECT_IDENTIFIER = new _OID(
    [/* asn1 */ 1, /* ber-derived */ 2, /* distinguished-encoding */ 1],
    joint_iso_itu_t
);

/**
 * @summary Extension
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Extension ::= SEQUENCE {
 *   extnId     EXTENSION.&id({ExtensionSet}),
 *   critical   BOOLEAN DEFAULT FALSE,
 *   extnValue  OCTET STRING
 *     (CONTAINING EXTENSION.&ExtnType({ExtensionSet}{@extnId})
 *        ENCODED BY der),
 *   ... }
 * ```
 *
 * @class
 */
export class Extension {
    constructor(
        /**
         * @summary `extnId`.
         * @public
         * @readonly
         */
        readonly extnId: OBJECT_IDENTIFIER,
        /**
         * @summary `critical`.
         * @public
         * @readonly
         */
        readonly critical: OPTIONAL<BOOLEAN>,
        /**
         * @summary `extnValue`.
         * @public
         * @readonly
         */
        readonly extnValue: OCTET_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Extension
     * @description
     *
     * This takes an `object` and converts it to a `Extension`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Extension`.
     * @returns {Extension}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Extension]: Extension[_K] }>
    ): Extension {
        return new Extension(
            _o.extnId,
            _o.critical,
            _o.extnValue,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `critical`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_critical() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of Extension
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Extension: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "extnId",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "critical",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "extnValue",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Extension
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Extension: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Extension
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Extension: $.ComponentSpec[] = [];
let _cached_decoder_for_Extension: $.ASN1Decoder<Extension> | null = null;
let _cached_encoder_for_Extension: $.ASN1Encoder<Extension> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Extension
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Extension} The decoded data structure.
 */
export function _decode_Extension(el: _Element) {
    if (!_cached_decoder_for_Extension) {
        _cached_decoder_for_Extension = function (el: _Element): Extension {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let extnId!: OBJECT_IDENTIFIER;
            let critical: OPTIONAL<BOOLEAN> =
                Extension._default_value_for_critical;
            let extnValue!: OCTET_STRING;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                extnId: (_el: _Element): void => {
                    extnId = $._decodeObjectIdentifier(_el);
                },
                critical: (_el: _Element): void => {
                    critical = $._decodeBoolean(_el);
                },
                extnValue: (_el: _Element): void => {
                    extnValue = $._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Extension,
                _extension_additions_list_spec_for_Extension,
                _root_component_type_list_2_spec_for_Extension,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Extension(
                /* SEQUENCE_CONSTRUCTOR_CALL */ extnId,
                critical,
                extnValue,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Extension(el);
}
/**
 * @summary Encodes a(n) Extension into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Extension, encoded as an ASN.1 Element.
 */
export function _encode_Extension(
    value: Extension,
    elGetter: $.ASN1Encoder<Extension>
) {
    if (!_cached_encoder_for_Extension) {
        _cached_encoder_for_Extension = function (
            value: Extension,
            elGetter: $.ASN1Encoder<Extension>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.extnId,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.critical === undefined ||
                            $.deepEq(
                                value.critical,
                                Extension._default_value_for_critical
                            )
                                ? undefined
                                : $._encodeBoolean(value.critical, $.BER),
                            /* REQUIRED   */ $._encodeOctetString(
                                value.extnValue,
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
    return _cached_encoder_for_Extension(value, elGetter);
}

export type Extensions<> = Extension[]; // SequenceOfType
let _cached_decoder_for_Extensions: $.ASN1Decoder<Extensions> | null = null;
let _cached_encoder_for_Extensions: $.ASN1Encoder<Extensions> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Extensions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Extensions} The decoded data structure.
 */
export function _decode_Extensions(el: _Element) {
    if (!_cached_decoder_for_Extensions) {
        _cached_decoder_for_Extensions = $._decodeSequenceOf<Extension>(
            () => _decode_Extension
        );
    }
    return _cached_decoder_for_Extensions(el);
}
/**
 * @summary Encodes a(n) Extensions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Extensions, encoded as an ASN.1 Element.
 */
export function _encode_Extensions(
    value: Extensions,
    elGetter: $.ASN1Encoder<Extensions>
) {
    if (!_cached_encoder_for_Extensions) {
        _cached_encoder_for_Extensions = $._encodeSequenceOf<Extension>(
            () => _encode_Extension,
            $.BER
        );
    }
    return _cached_encoder_for_Extensions(value, elGetter);
}

/**
 * @summary TBSCertAVL_entries_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSCertAVL-entries-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class TBSCertAVL_entries_Item {
    constructor(
        /**
         * @summary `idType`.
         * @public
         * @readonly
         */
        readonly idType: TBSCertAVL_entries_Item_idType,
        /**
         * @summary `entryExtensions`.
         * @public
         * @readonly
         */
        readonly entryExtensions: OPTIONAL<Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TBSCertAVL_entries_Item
     * @description
     *
     * This takes an `object` and converts it to a `TBSCertAVL_entries_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSCertAVL_entries_Item`.
     * @returns {TBSCertAVL_entries_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof TBSCertAVL_entries_Item]: TBSCertAVL_entries_Item[_K];
            }
        >
    ): TBSCertAVL_entries_Item {
        return new TBSCertAVL_entries_Item(
            _o.idType,
            _o.entryExtensions,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of TBSCertAVL_entries_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBSCertAVL_entries_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("idType", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "entryExtensions",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TBSCertAVL_entries_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBSCertAVL_entries_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TBSCertAVL_entries_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBSCertAVL_entries_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_TBSCertAVL_entries_Item: $.ASN1Decoder<
    TBSCertAVL_entries_Item
> | null = null;
let _cached_encoder_for_TBSCertAVL_entries_Item: $.ASN1Encoder<
    TBSCertAVL_entries_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TBSCertAVL_entries_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSCertAVL_entries_Item} The decoded data structure.
 */
export function _decode_TBSCertAVL_entries_Item(el: _Element) {
    if (!_cached_decoder_for_TBSCertAVL_entries_Item) {
        _cached_decoder_for_TBSCertAVL_entries_Item = function (
            el: _Element
        ): TBSCertAVL_entries_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let idType!: TBSCertAVL_entries_Item_idType;
            let entryExtensions: OPTIONAL<Extensions>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                idType: (_el: _Element): void => {
                    idType = _decode_TBSCertAVL_entries_Item_idType(_el);
                },
                entryExtensions: (_el: _Element): void => {
                    entryExtensions = $._decode_explicit<Extensions>(
                        () => _decode_Extensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBSCertAVL_entries_Item,
                _extension_additions_list_spec_for_TBSCertAVL_entries_Item,
                _root_component_type_list_2_spec_for_TBSCertAVL_entries_Item,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TBSCertAVL_entries_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ idType,
                entryExtensions,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TBSCertAVL_entries_Item(el);
}
/**
 * @summary Encodes a(n) TBSCertAVL_entries_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSCertAVL_entries_Item, encoded as an ASN.1 Element.
 */
export function _encode_TBSCertAVL_entries_Item(
    value: TBSCertAVL_entries_Item,
    elGetter: $.ASN1Encoder<TBSCertAVL_entries_Item>
) {
    if (!_cached_encoder_for_TBSCertAVL_entries_Item) {
        _cached_encoder_for_TBSCertAVL_entries_Item = function (
            value: TBSCertAVL_entries_Item,
            elGetter: $.ASN1Encoder<TBSCertAVL_entries_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_TBSCertAVL_entries_Item_idType(
                                value.idType,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.entryExtensions === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Extensions,
                                      $.BER
                                  )(value.entryExtensions, $.BER),
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
    return _cached_encoder_for_TBSCertAVL_entries_Item(value, elGetter);
}

/**
 * @summary TBSCertAVL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSCertAVL ::= SEQUENCE {
 *   version               [0]  IMPLICIT Version DEFAULT v1,
 *   serialNumber               AvlSerialNumber OPTIONAL,
 *   signature                  AlgorithmIdentifier {{SupportedAlgorithms}},
 *   issuer                     Name,
 *   constrained                BOOLEAN,
 *   entries                    SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     idType                     CHOICE {
 *       certIdentifier        [0]  PKCertIdentifier,
 *       entityGroup                DistinguishedName, -- only for constrained = FALSE
 *       ... },
 *     entryExtensions       [1]  IMPLICIT Extensions OPTIONAL,
 *     ... },
 *   ...,
 *   ...,
 *   avlExtensions              Extensions OPTIONAL }
 * ```
 *
 * @class
 */
export class TBSCertAVL {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: OPTIONAL<AvlSerialNumber>,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: AlgorithmIdentifier,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `constrained`.
         * @public
         * @readonly
         */
        readonly constrained: BOOLEAN,
        /**
         * @summary `entries`.
         * @public
         * @readonly
         */
        readonly entries: TBSCertAVL_entries_Item[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `avlExtensions`.
         * @public
         * @readonly
         */
        readonly avlExtensions: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a TBSCertAVL
     * @description
     *
     * This takes an `object` and converts it to a `TBSCertAVL`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSCertAVL`.
     * @returns {TBSCertAVL}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TBSCertAVL]: TBSCertAVL[_K] }>
    ): TBSCertAVL {
        return new TBSCertAVL(
            _o.version,
            _o.serialNumber,
            _o.signature,
            _o.issuer,
            _o.constrained,
            _o.entries,
            _o._unrecognizedExtensionsList,
            _o.avlExtensions
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return Version_v1;
    }
}
/**
 * @summary The Leading Root Component Types of TBSCertAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBSCertAVL: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "serialNumber",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec("issuer", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "constrained",
        false,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "entries",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TBSCertAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBSCertAVL: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "avlExtensions",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Extension Addition Component Types of TBSCertAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBSCertAVL: $.ComponentSpec[] = [];
let _cached_decoder_for_TBSCertAVL: $.ASN1Decoder<TBSCertAVL> | null = null;
let _cached_encoder_for_TBSCertAVL: $.ASN1Encoder<TBSCertAVL> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TBSCertAVL
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSCertAVL} The decoded data structure.
 */
export function _decode_TBSCertAVL(el: _Element) {
    if (!_cached_decoder_for_TBSCertAVL) {
        _cached_decoder_for_TBSCertAVL = function (el: _Element): TBSCertAVL {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<Version> =
                TBSCertAVL._default_value_for_version;
            let serialNumber: OPTIONAL<AvlSerialNumber>;
            let signature!: AlgorithmIdentifier;
            let issuer!: Name;
            let constrained!: BOOLEAN;
            let entries!: TBSCertAVL_entries_Item[];
            let _unrecognizedExtensionsList: _Element[] = [];
            let avlExtensions: OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = $._decode_explicit<Version>(
                        () => _decode_Version
                    )(_el);
                },
                serialNumber: (_el: _Element): void => {
                    serialNumber = _decode_AvlSerialNumber(_el);
                },
                signature: (_el: _Element): void => {
                    signature = _decode_AlgorithmIdentifier(_el);
                },
                issuer: (_el: _Element): void => {
                    issuer = _decode_Name(_el);
                },
                constrained: (_el: _Element): void => {
                    constrained = $._decodeBoolean(_el);
                },
                entries: (_el: _Element): void => {
                    entries = $._decodeSequenceOf<TBSCertAVL_entries_Item>(
                        () => _decode_TBSCertAVL_entries_Item
                    )(_el);
                },
                avlExtensions: (_el: _Element): void => {
                    avlExtensions = _decode_Extensions(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBSCertAVL,
                _extension_additions_list_spec_for_TBSCertAVL,
                _root_component_type_list_2_spec_for_TBSCertAVL,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TBSCertAVL(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                serialNumber,
                signature,
                issuer,
                constrained,
                entries,
                _unrecognizedExtensionsList,
                avlExtensions
            );
        };
    }
    return _cached_decoder_for_TBSCertAVL(el);
}
/**
 * @summary Encodes a(n) TBSCertAVL into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSCertAVL, encoded as an ASN.1 Element.
 */
export function _encode_TBSCertAVL(
    value: TBSCertAVL,
    elGetter: $.ASN1Encoder<TBSCertAVL>
) {
    if (!_cached_encoder_for_TBSCertAVL) {
        _cached_encoder_for_TBSCertAVL = function (
            value: TBSCertAVL,
            elGetter: $.ASN1Encoder<TBSCertAVL>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                TBSCertAVL._default_value_for_version
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Version,
                                      $.BER
                                  )(value.version, $.BER),
                            /* IF_ABSENT  */ value.serialNumber === undefined
                                ? undefined
                                : _encode_AvlSerialNumber(
                                      value.serialNumber,
                                      $.BER
                                  ),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.signature,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Name(value.issuer, $.BER),
                            /* REQUIRED   */ $._encodeBoolean(
                                value.constrained,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSequenceOf<
                                TBSCertAVL_entries_Item
                            >(() => _encode_TBSCertAVL_entries_Item, $.BER)(
                                value.entries,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.avlExtensions === undefined
                                ? undefined
                                : _encode_Extensions(
                                      value.avlExtensions,
                                      $.BER
                                  ),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TBSCertAVL(value, elGetter);
}

export type CertAVL<> = SIGNED<TBSCertAVL>; // DefinedType
let _cached_decoder_for_CertAVL: $.ASN1Decoder<CertAVL> | null = null;
let _cached_encoder_for_CertAVL: $.ASN1Encoder<CertAVL> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertAVL
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertAVL} The decoded data structure.
 */
export function _decode_CertAVL(el: _Element) {
    if (!_cached_decoder_for_CertAVL) {
        _cached_decoder_for_CertAVL = _get_decoder_for_SIGNED<TBSCertAVL>(
            _decode_TBSCertAVL
        );
    }
    return _cached_decoder_for_CertAVL(el);
}
/**
 * @summary Encodes a(n) CertAVL into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertAVL, encoded as an ASN.1 Element.
 */
export function _encode_CertAVL(
    value: CertAVL,
    elGetter: $.ASN1Encoder<CertAVL>
) {
    if (!_cached_encoder_for_CertAVL) {
        _cached_encoder_for_CertAVL = _get_encoder_for_SIGNED<TBSCertAVL>(
            _encode_TBSCertAVL
        );
    }
    return _cached_encoder_for_CertAVL(value, elGetter);
}

/**
 * @summary id_oc_pkiUser
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-pkiUser                       OBJECT IDENTIFIER ::= {id-oc 21}
 * ```
 *
 * @constant
 */
export const id_oc_pkiUser: OBJECT_IDENTIFIER = new _OID([21], id_oc);

/**
 * @summary pkiUser
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkiUser OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                auxiliary
 *   MAY CONTAIN         {userCertificate}
 *   LDAP-NAME           {"pkiUser"}
 *   LDAP-DESC           "X.509 PKI User"
 *   ID                  id-oc-pkiUser }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pkiUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 PKI User" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pkiUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_lsx_x509Certificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-x509Certificate              OBJECT IDENTIFIER ::= {id-lsx 8}
 * ```
 *
 * @constant
 */
export const id_lsx_x509Certificate: OBJECT_IDENTIFIER = new _OID([8], id_lsx);

/**
 * @summary x509Certificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * x509Certificate SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate"
 *   DIRECTORY SYNTAX  Certificate
 *   ID                id-lsx-x509Certificate }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const x509Certificate: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_Certificate,
    },
    encoderFor: {
        "&Type": _encode_Certificate,
    },
    "&ldapDesc": "X.509 Certificate" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_x509Certificate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_cAcertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-cAcertificate                 OBJECT IDENTIFIER ::= {id-at 37}
 * ```
 *
 * @constant
 */
export const id_at_cAcertificate: OBJECT_IDENTIFIER = new _OID([37], id_at);

/**
 * @summary cACertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cACertificate ATTRIBUTE ::= {
 *   WITH SYNTAX              Certificate
 *   EQUALITY MATCHING RULE   certificateExactMatch
 *   LDAP-SYNTAX              x509Certificate.&id
 *   LDAP-NAME                {"cACertificate"}
 *   LDAP-DESC                "X.509 CA certificate"
 *   ID                       id-at-cAcertificate }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const cACertificate: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Certificate,
    },
    encoderFor: {
        "&Type": _encode_Certificate,
    },
    "&equality-match": certificateExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509Certificate["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 CA certificate" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_cAcertificate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary CertificateListContent_revokedCertificates_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateListContent-revokedCertificates-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertificateListContent_revokedCertificates_Item {
    constructor(
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary `revocationDate`.
         * @public
         * @readonly
         */
        readonly revocationDate: Time,
        /**
         * @summary `crlEntryExtensions`.
         * @public
         * @readonly
         */
        readonly crlEntryExtensions: OPTIONAL<Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificateListContent_revokedCertificates_Item
     * @description
     *
     * This takes an `object` and converts it to a `CertificateListContent_revokedCertificates_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateListContent_revokedCertificates_Item`.
     * @returns {CertificateListContent_revokedCertificates_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertificateListContent_revokedCertificates_Item]: CertificateListContent_revokedCertificates_Item[_K];
            }
        >
    ): CertificateListContent_revokedCertificates_Item {
        return new CertificateListContent_revokedCertificates_Item(
            _o.serialNumber,
            _o.revocationDate,
            _o.crlEntryExtensions,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertificateListContent_revokedCertificates_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateListContent_revokedCertificates_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "revocationDate",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "crlEntryExtensions",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertificateListContent_revokedCertificates_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateListContent_revokedCertificates_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertificateListContent_revokedCertificates_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateListContent_revokedCertificates_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_CertificateListContent_revokedCertificates_Item: $.ASN1Decoder<
    CertificateListContent_revokedCertificates_Item
> | null = null;
let _cached_encoder_for_CertificateListContent_revokedCertificates_Item: $.ASN1Encoder<
    CertificateListContent_revokedCertificates_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateListContent_revokedCertificates_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateListContent_revokedCertificates_Item} The decoded data structure.
 */
export function _decode_CertificateListContent_revokedCertificates_Item(
    el: _Element
) {
    if (!_cached_decoder_for_CertificateListContent_revokedCertificates_Item) {
        _cached_decoder_for_CertificateListContent_revokedCertificates_Item = function (
            el: _Element
        ): CertificateListContent_revokedCertificates_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let serialNumber!: CertificateSerialNumber;
            let revocationDate!: Time;
            let crlEntryExtensions: OPTIONAL<Extensions>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                serialNumber: (_el: _Element): void => {
                    serialNumber = _decode_CertificateSerialNumber(_el);
                },
                revocationDate: (_el: _Element): void => {
                    revocationDate = _decode_Time(_el);
                },
                crlEntryExtensions: (_el: _Element): void => {
                    crlEntryExtensions = _decode_Extensions(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificateListContent_revokedCertificates_Item,
                _extension_additions_list_spec_for_CertificateListContent_revokedCertificates_Item,
                _root_component_type_list_2_spec_for_CertificateListContent_revokedCertificates_Item,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificateListContent_revokedCertificates_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ serialNumber,
                revocationDate,
                crlEntryExtensions,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertificateListContent_revokedCertificates_Item(
        el
    );
}
/**
 * @summary Encodes a(n) CertificateListContent_revokedCertificates_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateListContent_revokedCertificates_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertificateListContent_revokedCertificates_Item(
    value: CertificateListContent_revokedCertificates_Item,
    elGetter: $.ASN1Encoder<CertificateListContent_revokedCertificates_Item>
) {
    if (!_cached_encoder_for_CertificateListContent_revokedCertificates_Item) {
        _cached_encoder_for_CertificateListContent_revokedCertificates_Item = function (
            value: CertificateListContent_revokedCertificates_Item,
            elGetter: $.ASN1Encoder<
                CertificateListContent_revokedCertificates_Item
            >
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Time(
                                value.revocationDate,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.crlEntryExtensions ===
                            undefined
                                ? undefined
                                : _encode_Extensions(
                                      value.crlEntryExtensions,
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
    return _cached_encoder_for_CertificateListContent_revokedCertificates_Item(
        value,
        elGetter
    );
}

/**
 * @summary CertificateListContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateListContent ::= SEQUENCE {
 *   version              Version OPTIONAL,
 *   -- if present, version shall be v2
 *   signature            AlgorithmIdentifier{{SupportedAlgorithms}},
 *   issuer               Name,
 *   thisUpdate           Time,
 *   nextUpdate           Time OPTIONAL,
 *   revokedCertificates  SEQUENCE OF SEQUENCE {
 *     serialNumber         CertificateSerialNumber,
 *     revocationDate       Time,
 *     crlEntryExtensions   Extensions OPTIONAL,
 *     ...} OPTIONAL,
 *   ...,
 *   ...,
 *   crlExtensions   [0]  Extensions OPTIONAL }
 * ```
 *
 * @class
 */
export class CertificateListContent {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: AlgorithmIdentifier,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `thisUpdate`.
         * @public
         * @readonly
         */
        readonly thisUpdate: Time,
        /**
         * @summary `nextUpdate`.
         * @public
         * @readonly
         */
        readonly nextUpdate: OPTIONAL<Time>,
        /**
         * @summary `revokedCertificates`.
         * @public
         * @readonly
         */
        readonly revokedCertificates: OPTIONAL<
            CertificateListContent_revokedCertificates_Item[]
        >,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `crlExtensions`.
         * @public
         * @readonly
         */
        readonly crlExtensions: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a CertificateListContent
     * @description
     *
     * This takes an `object` and converts it to a `CertificateListContent`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateListContent`.
     * @returns {CertificateListContent}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof CertificateListContent]: CertificateListContent[_K] }
        >
    ): CertificateListContent {
        return new CertificateListContent(
            _o.version,
            _o.signature,
            _o.issuer,
            _o.thisUpdate,
            _o.nextUpdate,
            _o.revokedCertificates,
            _o._unrecognizedExtensionsList,
            _o.crlExtensions
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertificateListContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateListContent: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec("issuer", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("thisUpdate", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("nextUpdate", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "revokedCertificates",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertificateListContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateListContent: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "crlExtensions",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Extension Addition Component Types of CertificateListContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateListContent: $.ComponentSpec[] = [];
let _cached_decoder_for_CertificateListContent: $.ASN1Decoder<
    CertificateListContent
> | null = null;
let _cached_encoder_for_CertificateListContent: $.ASN1Encoder<
    CertificateListContent
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateListContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateListContent} The decoded data structure.
 */
export function _decode_CertificateListContent(el: _Element) {
    if (!_cached_decoder_for_CertificateListContent) {
        _cached_decoder_for_CertificateListContent = function (
            el: _Element
        ): CertificateListContent {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<Version>;
            let signature!: AlgorithmIdentifier;
            let issuer!: Name;
            let thisUpdate!: Time;
            let nextUpdate: OPTIONAL<Time>;
            let revokedCertificates: OPTIONAL<
                CertificateListContent_revokedCertificates_Item[]
            >;
            let _unrecognizedExtensionsList: _Element[] = [];
            let crlExtensions: OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                signature: (_el: _Element): void => {
                    signature = _decode_AlgorithmIdentifier(_el);
                },
                issuer: (_el: _Element): void => {
                    issuer = _decode_Name(_el);
                },
                thisUpdate: (_el: _Element): void => {
                    thisUpdate = _decode_Time(_el);
                },
                nextUpdate: (_el: _Element): void => {
                    nextUpdate = _decode_Time(_el);
                },
                revokedCertificates: (_el: _Element): void => {
                    revokedCertificates = $._decodeSequenceOf<
                        CertificateListContent_revokedCertificates_Item
                    >(
                        () =>
                            _decode_CertificateListContent_revokedCertificates_Item
                    )(_el);
                },
                crlExtensions: (_el: _Element): void => {
                    crlExtensions = $._decode_explicit<Extensions>(
                        () => _decode_Extensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificateListContent,
                _extension_additions_list_spec_for_CertificateListContent,
                _root_component_type_list_2_spec_for_CertificateListContent,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificateListContent(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                signature,
                issuer,
                thisUpdate,
                nextUpdate,
                revokedCertificates,
                _unrecognizedExtensionsList,
                crlExtensions
            );
        };
    }
    return _cached_decoder_for_CertificateListContent(el);
}
/**
 * @summary Encodes a(n) CertificateListContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateListContent, encoded as an ASN.1 Element.
 */
export function _encode_CertificateListContent(
    value: CertificateListContent,
    elGetter: $.ASN1Encoder<CertificateListContent>
) {
    if (!_cached_encoder_for_CertificateListContent) {
        _cached_encoder_for_CertificateListContent = function (
            value: CertificateListContent,
            elGetter: $.ASN1Encoder<CertificateListContent>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.version === undefined
                                ? undefined
                                : _encode_Version(value.version, $.BER),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.signature,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Name(value.issuer, $.BER),
                            /* REQUIRED   */ _encode_Time(
                                value.thisUpdate,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.nextUpdate === undefined
                                ? undefined
                                : _encode_Time(value.nextUpdate, $.BER),
                            /* IF_ABSENT  */ value.revokedCertificates ===
                            undefined
                                ? undefined
                                : $._encodeSequenceOf<
                                      CertificateListContent_revokedCertificates_Item
                                  >(
                                      () =>
                                          _encode_CertificateListContent_revokedCertificates_Item,
                                      $.BER
                                  )(value.revokedCertificates, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.crlExtensions === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Extensions,
                                      $.BER
                                  )(value.crlExtensions, $.BER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CertificateListContent(value, elGetter);
}

export type CertificateList<> = SIGNED<CertificateListContent>; // DefinedType
let _cached_decoder_for_CertificateList: $.ASN1Decoder<
    CertificateList
> | null = null;
let _cached_encoder_for_CertificateList: $.ASN1Encoder<
    CertificateList
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateList} The decoded data structure.
 */
export function _decode_CertificateList(el: _Element) {
    if (!_cached_decoder_for_CertificateList) {
        _cached_decoder_for_CertificateList = _get_decoder_for_SIGNED<
            CertificateListContent
        >(_decode_CertificateListContent);
    }
    return _cached_decoder_for_CertificateList(el);
}
/**
 * @summary Encodes a(n) CertificateList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateList, encoded as an ASN.1 Element.
 */
export function _encode_CertificateList(
    value: CertificateList,
    elGetter: $.ASN1Encoder<CertificateList>
) {
    if (!_cached_encoder_for_CertificateList) {
        _cached_encoder_for_CertificateList = _get_encoder_for_SIGNED<
            CertificateListContent
        >(_encode_CertificateListContent);
    }
    return _cached_encoder_for_CertificateList(value, elGetter);
}

/**
 * @summary id_lsx_x509CertificateList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-x509CertificateList          OBJECT IDENTIFIER ::= {id-lsx 9}
 * ```
 *
 * @constant
 */
export const id_lsx_x509CertificateList: OBJECT_IDENTIFIER = new _OID(
    [9],
    id_lsx
);

/**
 * @summary x509CertificateList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * x509CertificateList SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate List"
 *   DIRECTORY SYNTAX  CertificateList
 *   ID                id-lsx-x509CertificateList }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const x509CertificateList: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificateList,
    },
    encoderFor: {
        "&Type": _encode_CertificateList,
    },
    "&ldapDesc": "X.509 Certificate List" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_x509CertificateList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_certificateRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-certificateRevocationList     OBJECT IDENTIFIER ::= {id-at 39}
 * ```
 *
 * @constant
 */
export const id_at_certificateRevocationList: OBJECT_IDENTIFIER = new _OID(
    [39],
    id_at
);

/**
 * @summary certificateRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateRevocationList ATTRIBUTE ::= {
 *   WITH SYNTAX              CertificateList
 *   EQUALITY MATCHING RULE   certificateListExactMatch
 *   LDAP-SYNTAX              x509CertificateList.&id
 *   LDAP-NAME                {"certificateRevocationList"}
 *   LDAP-DESC                "X.509 certificate revocation list"
 *   ID                       id-at-certificateRevocationList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const certificateRevocationList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CertificateList,
    },
    encoderFor: {
        "&Type": _encode_CertificateList,
    },
    "&equality-match": certificateListExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509CertificateList["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 certificate revocation list" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_certificateRevocationList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary id_at_eepkCertificateRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-eepkCertificateRevocationList OBJECT IDENTIFIER ::= {id-at 101}
 * ```
 *
 * @constant
 */
export const id_at_eepkCertificateRevocationList: OBJECT_IDENTIFIER = new _OID(
    [101],
    id_at
);

/**
 * @summary eepkCertificateRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * eepkCertificateRevocationList ATTRIBUTE ::= {
 *   WITH SYNTAX              CertificateList
 *   EQUALITY MATCHING RULE   certificateListExactMatch
 *   LDAP-SYNTAX              x509CertificateList.&id
 *   LDAP-NAME                {"eepkCertificateRevocationList"}
 *   LDAP-DESC                "X.509 EEPK certificate revocation list"
 *   ID                       id-at-eepkCertificateRevocationList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const eepkCertificateRevocationList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CertificateList,
    },
    encoderFor: {
        "&Type": _encode_CertificateList,
    },
    "&equality-match": certificateListExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509CertificateList["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc":
        "X.509 EEPK certificate revocation list" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_eepkCertificateRevocationList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary id_at_authorityRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-authorityRevocationList       OBJECT IDENTIFIER ::= {id-at 38}
 * ```
 *
 * @constant
 */
export const id_at_authorityRevocationList: OBJECT_IDENTIFIER = new _OID(
    [38],
    id_at
);

/**
 * @summary authorityRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authorityRevocationList ATTRIBUTE ::= {
 *   WITH SYNTAX              CertificateList
 *   EQUALITY MATCHING RULE   certificateListExactMatch
 *   LDAP-SYNTAX              x509CertificateList.&id
 *   LDAP-NAME                {"authorityRevocationList"}
 *   LDAP-DESC                "X.509 authority revocation list"
 *   ID                       id-at-authorityRevocationList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const authorityRevocationList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CertificateList,
    },
    encoderFor: {
        "&Type": _encode_CertificateList,
    },
    "&equality-match": certificateListExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509CertificateList["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 authority revocation list" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_authorityRevocationList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary id_lsx_x509CertificatePair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-x509CertificatePair          OBJECT IDENTIFIER ::= {id-lsx 10}
 * ```
 *
 * @constant
 */
export const id_lsx_x509CertificatePair: OBJECT_IDENTIFIER = new _OID(
    [10],
    id_lsx
);

/**
 * @summary x509CertificatePair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * x509CertificatePair SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate Pair"
 *   DIRECTORY SYNTAX  CertificatePair
 *   ID                id-lsx-x509CertificatePair }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const x509CertificatePair: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificatePair,
    },
    encoderFor: {
        "&Type": _encode_CertificatePair,
    },
    "&ldapDesc": "X.509 Certificate Pair" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_x509CertificatePair /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_crossCertificatePair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-crossCertificatePair          OBJECT IDENTIFIER ::= {id-at 40}
 * ```
 *
 * @constant
 */
export const id_at_crossCertificatePair: OBJECT_IDENTIFIER = new _OID(
    [40],
    id_at
);

/**
 * @summary crossCertificatePair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * crossCertificatePair ATTRIBUTE ::= {
 *   WITH SYNTAX              CertificatePair
 *   EQUALITY MATCHING RULE   certificatePairExactMatch
 *   LDAP-SYNTAX              x509CertificatePair.&id
 *   LDAP-NAME                {"crossCertificatePair"}
 *   LDAP-DESC                "X.509 cross certificate pair"
 *   ID                       id-at-crossCertificatePair }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const crossCertificatePair: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CertificatePair,
    },
    encoderFor: {
        "&Type": _encode_CertificatePair,
    },
    "&equality-match": certificatePairExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509CertificatePair["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 cross certificate pair" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_crossCertificatePair /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary id_oc_pkiCA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-pkiCA                         OBJECT IDENTIFIER ::= {id-oc 22}
 * ```
 *
 * @constant
 */
export const id_oc_pkiCA: OBJECT_IDENTIFIER = new _OID([22], id_oc);

/**
 * @summary pkiCA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkiCA OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                auxiliary
 *   MAY CONTAIN         {cACertificate |
 *                        certificateRevocationList |
 *                        eepkCertificateRevocationList |
 *                        authorityRevocationList |
 *                        crossCertificatePair}
 *   LDAP-NAME           {"pkiCA"}
 *   LDAP-DESC           "X.509 PKI Certificate Authority"
 *   ID                  id-oc-pkiCA }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pkiCA: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        cACertificate,
        certificateRevocationList,
        eepkCertificateRevocationList,
        authorityRevocationList,
        crossCertificatePair,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 PKI Certificate Authority" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pkiCA /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_deltaRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-deltaRevocationList           OBJECT IDENTIFIER ::= {id-at 53}
 * ```
 *
 * @constant
 */
export const id_at_deltaRevocationList: OBJECT_IDENTIFIER = new _OID(
    [53],
    id_at
);

/**
 * @summary deltaRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deltaRevocationList ATTRIBUTE ::= {
 *   WITH SYNTAX              CertificateList
 *   EQUALITY MATCHING RULE   certificateListExactMatch
 *   LDAP-SYNTAX              x509CertificateList.&id
 *   LDAP-NAME                {"deltaRevocationList"}
 *   LDAP-DESC                "X.509 delta revocation list"
 *   ID                       id-at-deltaRevocationList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const deltaRevocationList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CertificateList,
    },
    encoderFor: {
        "&Type": _encode_CertificateList,
    },
    "&equality-match": certificateListExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509CertificateList["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 delta revocation list" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_deltaRevocationList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary id_oc_cRLDistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-cRLDistributionPoint          OBJECT IDENTIFIER ::= {id-oc 19}
 * ```
 *
 * @constant
 */
export const id_oc_cRLDistributionPoint: OBJECT_IDENTIFIER = new _OID(
    [19],
    id_oc
);

/**
 * @summary cRLDistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cRLDistributionPoint OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                structural
 *   MUST CONTAIN        {commonName}
 *   MAY CONTAIN         {certificateRevocationList |
 *                        eepkCertificateRevocationList |
 *                        authorityRevocationList |
 *                        deltaRevocationList}
 *   LDAP-NAME           {"cRLDistributionPoint"}
 *   LDAP-DESC           "X.509 CRL distribution point"
 *   ID                  id-oc-cRLDistributionPoint }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const cRLDistributionPoint: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": [
        certificateRevocationList,
        eepkCertificateRevocationList,
        authorityRevocationList,
        deltaRevocationList,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 CRL distribution point" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_cRLDistributionPoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_cRLDistPtNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-cRLDistPtNameForm             OBJECT IDENTIFIER ::= {id-nf 14}
 * ```
 *
 * @constant
 */
export const id_nf_cRLDistPtNameForm: OBJECT_IDENTIFIER = new _OID([14], id_nf);

/**
 * @summary cRLDistPtNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cRLDistPtNameForm NAME-FORM ::= {
 *   NAMES               cRLDistributionPoint
 *   WITH ATTRIBUTES     {commonName}
 *   ID                  id-nf-cRLDistPtNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const cRLDistPtNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": cRLDistributionPoint /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_cRLDistPtNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_deltaCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-deltaCRL                      OBJECT IDENTIFIER ::= {id-oc 23}
 * ```
 *
 * @constant
 */
export const id_oc_deltaCRL: OBJECT_IDENTIFIER = new _OID([23], id_oc);

/**
 * @summary deltaCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deltaCRL OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                auxiliary
 *   MAY CONTAIN         {deltaRevocationList}
 *   LDAP-NAME           {"deltaCRL"}
 *   LDAP-DESC           "X.509 delta CRL"
 *   ID                  id-oc-deltaCRL }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const deltaCRL: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 delta CRL" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_deltaCRL /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

export type PolicyID<> = CertPolicyId; // DefinedType
let _cached_decoder_for_PolicyID: $.ASN1Decoder<PolicyID> | null = null;
let _cached_encoder_for_PolicyID: $.ASN1Encoder<PolicyID> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PolicyID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PolicyID} The decoded data structure.
 */
export function _decode_PolicyID(el: _Element) {
    if (!_cached_decoder_for_PolicyID) {
        _cached_decoder_for_PolicyID = _decode_CertPolicyId;
    }
    return _cached_decoder_for_PolicyID(el);
}
/**
 * @summary Encodes a(n) PolicyID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyID, encoded as an ASN.1 Element.
 */
export function _encode_PolicyID(
    value: PolicyID,
    elGetter: $.ASN1Encoder<PolicyID>
) {
    if (!_cached_encoder_for_PolicyID) {
        _cached_encoder_for_PolicyID = _encode_CertPolicyId;
    }
    return _cached_encoder_for_PolicyID(value, elGetter);
}

/**
 * @summary HASH
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HASH{ToBeHashed} ::= SEQUENCE {
 *   algorithmIdentifier  AlgorithmIdentifier{{SupportedAlgorithms}},
 *   hashValue            BIT STRING (CONSTRAINED BY {
 *    -- shall be the result of applying a hashing procedure to the DER-encoded
 *    -- octets of a value of -- ToBeHashed } ),
 *   ... }
 * ```
 *
 * @class
 */
export class HASH<ToBeHashed> {
    constructor(
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmIdentifier,
        /**
         * @summary `hashValue`.
         * @public
         * @readonly
         */
        readonly hashValue: BIT_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a HASH
     * @description
     *
     * This takes an `object` and converts it to a `HASH`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HASH`.
     * @returns {HASH}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof HASH<any>]: HASH<any>[_K] }>
    ): HASH<any> {
        return new HASH(
            _o.algorithmIdentifier,
            _o.hashValue,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of HASH
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_HASH: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithmIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "hashValue",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of HASH
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_HASH: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of HASH
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_HASH: $.ComponentSpec[] = [];
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) HASH
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_HASH<ToBeHashed>(
    _decode_ToBeHashed: $.ASN1Decoder<ToBeHashed>
) {
    return function <ToBeHashed>(el: _Element): HASH<ToBeHashed> {
        const sequence: _Element[] = el.sequence;
        if (sequence.length < 2) {
            throw new _ConstructionError(
                "HASH contained only " +
                    sequence.length.toString() +
                    " elements."
            );
        }
        sequence[0].name = "algorithmIdentifier";
        sequence[1].name = "hashValue";
        let algorithmIdentifier!: AlgorithmIdentifier;
        let hashValue!: BIT_STRING;
        algorithmIdentifier = _decode_AlgorithmIdentifier(sequence[0]);
        hashValue = $._decodeBitString(sequence[1]);
        return new HASH<ToBeHashed>(
            algorithmIdentifier,
            hashValue,
            sequence.slice(2)
        );
    };
}
/**
 * @summary Returns a function that will encode a(n) HASH into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) HASH as an ASN.1 element.
 */
export function _get_encoder_for_HASH<ToBeHashed>(
    _encode_ToBeHashed: $.ASN1Encoder<ToBeHashed>
) {
    return function (
        value: HASH<ToBeHashed>,
        elGetter: $.ASN1Encoder<HASH<ToBeHashed>>
    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algorithmIdentifier,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.hashValue,
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

/**
 * @summary POLICY
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * POLICY ::= TYPE-IDENTIFIER
 * ```
 *
 * @interface
 */
export type POLICY = TYPE_IDENTIFIER;

/**
 * @summary Policies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Policies POLICY ::= {...}
 * ```
 *
 * @constant
 * @type {POLICY[]}
 *
 */
export const Policies: POLICY[] = [];

export type HashedPolicyInfo<> = _Element; // ObjectClassFieldType
let _cached_decoder_for_HashedPolicyInfo: $.ASN1Decoder<
    HashedPolicyInfo
> | null = null;
let _cached_encoder_for_HashedPolicyInfo: $.ASN1Encoder<
    HashedPolicyInfo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) HashedPolicyInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HashedPolicyInfo} The decoded data structure.
 */
export function _decode_HashedPolicyInfo(el: _Element) {
    if (!_cached_decoder_for_HashedPolicyInfo) {
        _cached_decoder_for_HashedPolicyInfo = $._decodeAny;
    }
    return _cached_decoder_for_HashedPolicyInfo(el);
}
/**
 * @summary Encodes a(n) HashedPolicyInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashedPolicyInfo, encoded as an ASN.1 Element.
 */
export function _encode_HashedPolicyInfo(
    value: HashedPolicyInfo,
    elGetter: $.ASN1Encoder<HashedPolicyInfo>
) {
    if (!_cached_encoder_for_HashedPolicyInfo) {
        _cached_encoder_for_HashedPolicyInfo = $._encodeAny;
    }
    return _cached_encoder_for_HashedPolicyInfo(value, elGetter);
}

/**
 * @summary InfoSyntax_pointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InfoSyntax-pointer ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class InfoSyntax_pointer {
    constructor(
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: GeneralNames,
        /**
         * @summary `hash`.
         * @public
         * @readonly
         */
        readonly hash: OPTIONAL<HASH<HashedPolicyInfo>>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InfoSyntax_pointer
     * @description
     *
     * This takes an `object` and converts it to a `InfoSyntax_pointer`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InfoSyntax_pointer`.
     * @returns {InfoSyntax_pointer}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof InfoSyntax_pointer]: InfoSyntax_pointer[_K] }
        >
    ): InfoSyntax_pointer {
        return new InfoSyntax_pointer(
            _o.name,
            _o.hash,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of InfoSyntax_pointer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InfoSyntax_pointer: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "name",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "hash",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of InfoSyntax_pointer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InfoSyntax_pointer: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of InfoSyntax_pointer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InfoSyntax_pointer: $.ComponentSpec[] = [];
let _cached_decoder_for_InfoSyntax_pointer: $.ASN1Decoder<
    InfoSyntax_pointer
> | null = null;
let _cached_encoder_for_InfoSyntax_pointer: $.ASN1Encoder<
    InfoSyntax_pointer
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) InfoSyntax_pointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InfoSyntax_pointer} The decoded data structure.
 */
export function _decode_InfoSyntax_pointer(el: _Element) {
    if (!_cached_decoder_for_InfoSyntax_pointer) {
        _cached_decoder_for_InfoSyntax_pointer = function (
            el: _Element
        ): InfoSyntax_pointer {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let name!: GeneralNames;
            let hash: OPTIONAL<HASH<HashedPolicyInfo>>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                name: (_el: _Element): void => {
                    name = _decode_GeneralNames(_el);
                },
                hash: (_el: _Element): void => {
                    hash = _get_decoder_for_HASH<HashedPolicyInfo>(
                        _decode_HashedPolicyInfo
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_InfoSyntax_pointer,
                _extension_additions_list_spec_for_InfoSyntax_pointer,
                _root_component_type_list_2_spec_for_InfoSyntax_pointer,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new InfoSyntax_pointer(
                /* SEQUENCE_CONSTRUCTOR_CALL */ name,
                hash,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_InfoSyntax_pointer(el);
}
/**
 * @summary Encodes a(n) InfoSyntax_pointer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InfoSyntax_pointer, encoded as an ASN.1 Element.
 */
export function _encode_InfoSyntax_pointer(
    value: InfoSyntax_pointer,
    elGetter: $.ASN1Encoder<InfoSyntax_pointer>
) {
    if (!_cached_encoder_for_InfoSyntax_pointer) {
        _cached_encoder_for_InfoSyntax_pointer = function (
            value: InfoSyntax_pointer,
            elGetter: $.ASN1Encoder<InfoSyntax_pointer>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_GeneralNames(
                                value.name,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.hash === undefined
                                ? undefined
                                : _get_encoder_for_HASH<HashedPolicyInfo>(
                                      _encode_HashedPolicyInfo
                                  )(value.hash, $.BER),
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
    return _cached_encoder_for_InfoSyntax_pointer(value, elGetter);
}

/**
 * @summary InfoSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InfoSyntax  ::=  CHOICE {
 *   content  UnboundedDirectoryString,
 *   pointer  SEQUENCE {
 *     name     GeneralNames,
 *     hash     HASH{HashedPolicyInfo} OPTIONAL,
 *     ... },
 *   ... }
 * ```
 */
export type InfoSyntax =
    | { content: UnboundedDirectoryString } /* CHOICE_ALT_ROOT */
    | { pointer: InfoSyntax_pointer } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_InfoSyntax: $.ASN1Decoder<InfoSyntax> | null = null;
let _cached_encoder_for_InfoSyntax: $.ASN1Encoder<InfoSyntax> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) InfoSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InfoSyntax} The decoded data structure.
 */
export function _decode_InfoSyntax(el: _Element) {
    if (!_cached_decoder_for_InfoSyntax) {
        _cached_decoder_for_InfoSyntax = $._decode_extensible_choice<
            InfoSyntax
        >({
            "UNIVERSAL 20": ["content", _decode_UnboundedDirectoryString],
            "UNIVERSAL 19": ["content", _decode_UnboundedDirectoryString],
            "UNIVERSAL 30": ["content", _decode_UnboundedDirectoryString],
            "UNIVERSAL 28": ["content", _decode_UnboundedDirectoryString],
            "UNIVERSAL 12": ["content", _decode_UnboundedDirectoryString],
            "UNIVERSAL 16": ["pointer", _decode_InfoSyntax_pointer],
        });
    }
    return _cached_decoder_for_InfoSyntax(el);
}
/**
 * @summary Encodes a(n) InfoSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InfoSyntax, encoded as an ASN.1 Element.
 */
export function _encode_InfoSyntax(
    value: InfoSyntax,
    elGetter: $.ASN1Encoder<InfoSyntax>
) {
    if (!_cached_encoder_for_InfoSyntax) {
        _cached_encoder_for_InfoSyntax = $._encode_choice<InfoSyntax>(
            {
                content: _encode_UnboundedDirectoryString,
                pointer: _encode_InfoSyntax_pointer,
            },
            $.BER
        );
    }
    return _cached_encoder_for_InfoSyntax(value, elGetter);
}

/**
 * @summary PolicySyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PolicySyntax ::= SEQUENCE {
 *   policyIdentifier  PolicyID,
 *   policySyntax      InfoSyntax,
 *   ... }
 * ```
 *
 * @class
 */
export class PolicySyntax {
    constructor(
        /**
         * @summary `policyIdentifier`.
         * @public
         * @readonly
         */
        readonly policyIdentifier: PolicyID,
        /**
         * @summary `policySyntax`.
         * @public
         * @readonly
         */
        readonly policySyntax: InfoSyntax,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PolicySyntax
     * @description
     *
     * This takes an `object` and converts it to a `PolicySyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PolicySyntax`.
     * @returns {PolicySyntax}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof PolicySyntax]: PolicySyntax[_K] }>
    ): PolicySyntax {
        return new PolicySyntax(
            _o.policyIdentifier,
            _o.policySyntax,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of PolicySyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PolicySyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "policyIdentifier",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "policySyntax",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of PolicySyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PolicySyntax: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of PolicySyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PolicySyntax: $.ComponentSpec[] = [];
let _cached_decoder_for_PolicySyntax: $.ASN1Decoder<PolicySyntax> | null = null;
let _cached_encoder_for_PolicySyntax: $.ASN1Encoder<PolicySyntax> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PolicySyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PolicySyntax} The decoded data structure.
 */
export function _decode_PolicySyntax(el: _Element) {
    if (!_cached_decoder_for_PolicySyntax) {
        _cached_decoder_for_PolicySyntax = function (
            el: _Element
        ): PolicySyntax {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PolicySyntax contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "policyIdentifier";
            sequence[1].name = "policySyntax";
            let policyIdentifier!: PolicyID;
            let policySyntax!: InfoSyntax;
            policyIdentifier = _decode_PolicyID(sequence[0]);
            policySyntax = _decode_InfoSyntax(sequence[1]);
            return new PolicySyntax(
                policyIdentifier,
                policySyntax,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_PolicySyntax(el);
}
/**
 * @summary Encodes a(n) PolicySyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicySyntax, encoded as an ASN.1 Element.
 */
export function _encode_PolicySyntax(
    value: PolicySyntax,
    elGetter: $.ASN1Encoder<PolicySyntax>
) {
    if (!_cached_encoder_for_PolicySyntax) {
        _cached_encoder_for_PolicySyntax = function (
            value: PolicySyntax,
            elGetter: $.ASN1Encoder<PolicySyntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_PolicyID(
                                value.policyIdentifier,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_InfoSyntax(
                                value.policySyntax,
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
    return _cached_encoder_for_PolicySyntax(value, elGetter);
}

/**
 * @summary id_at_certificatePolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-certificatePolicy             OBJECT IDENTIFIER ::= {id-at 69}
 * ```
 *
 * @constant
 */
export const id_at_certificatePolicy: OBJECT_IDENTIFIER = new _OID([69], id_at);

/**
 * @summary certificatePolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificatePolicy ATTRIBUTE ::= {
 *   WITH SYNTAX             PolicySyntax
 *   EQUALITY MATCHING RULE  policyMatch
 *   ID                      id-at-certificatePolicy }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const certificatePolicy: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PolicySyntax,
    },
    encoderFor: {
        "&Type": _encode_PolicySyntax,
    },
    "&equality-match": policyMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_certificatePolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary id_at_certificationPracticeStmt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-certificationPracticeStmt     OBJECT IDENTIFIER ::= {id-at 68}
 * ```
 *
 * @constant
 */
export const id_at_certificationPracticeStmt: OBJECT_IDENTIFIER = new _OID(
    [68],
    id_at
);

/**
 * @summary certificationPracticeStmt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificationPracticeStmt ATTRIBUTE ::= {
 *   WITH SYNTAX  InfoSyntax
 *   ID           id-at-certificationPracticeStmt }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const certificationPracticeStmt: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_InfoSyntax,
    },
    encoderFor: {
        "&Type": _encode_InfoSyntax,
    },
    "&id": id_at_certificationPracticeStmt /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary id_oc_cpCps
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-cpCps                         OBJECT IDENTIFIER ::= {id-oc 30}
 * ```
 *
 * @constant
 */
export const id_oc_cpCps: OBJECT_IDENTIFIER = new _OID([30], id_oc);

/**
 * @summary cpCps
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cpCps OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                auxiliary
 *   MAY CONTAIN         {certificatePolicy |
 *                        certificationPracticeStmt}
 *   LDAP-NAME           {"cpCps"}
 *   LDAP-DESC           "Certificate Policy and Certification Practice Statement"
 *   ID                  id-oc-cpCps }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const cpCps: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        certificatePolicy,
        certificationPracticeStmt,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc":
        "Certificate Policy and Certification Practice Statement" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_cpCps /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_pkiCertPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-pkiCertPath                   OBJECT IDENTIFIER ::= {id-oc 31}
 * ```
 *
 * @constant
 */
export const id_oc_pkiCertPath: OBJECT_IDENTIFIER = new _OID([31], id_oc);

/**
 * @summary pkiCertPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkiCertPath OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                auxiliary
 *   MAY CONTAIN         {pkiPath}
 *   LDAP-NAME           {"pkiCertPath"}
 *   LDAP-DESC           "PKI Certification Path"
 *   ID                  id-oc-pkiCertPath }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pkiCertPath: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&ldapName": undefined,
    "&ldapDesc": "PKI Certification Path" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pkiCertPath /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_userCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-userCertificate               OBJECT IDENTIFIER ::= {id-at 36}
 * ```
 *
 * @constant
 */
export const id_at_userCertificate: OBJECT_IDENTIFIER = new _OID([36], id_at);

/**
 * @summary userCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userCertificate ATTRIBUTE ::= {
 *   WITH SYNTAX              Certificate
 *   EQUALITY MATCHING RULE   certificateExactMatch
 *   LDAP-SYNTAX              x509Certificate.&id
 *   LDAP-NAME                {"userCertificate"}
 *   LDAP-DESC                "X.509 user certificate"
 *   ID                       id-at-userCertificate }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const userCertificate: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Certificate,
    },
    encoderFor: {
        "&Type": _encode_Certificate,
    },
    "&equality-match": certificateExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509Certificate["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 user certificate" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_userCertificate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary SupportedAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedAlgorithm ::= SEQUENCE {
 *   algorithmIdentifier              AlgorithmIdentifier{{SupportedAlgorithms}},
 *   intendedUsage               [0]  KeyUsage OPTIONAL,
 *   intendedCertificatePolicies [1]  CertificatePoliciesSyntax OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class SupportedAlgorithm {
    constructor(
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmIdentifier,
        /**
         * @summary `intendedUsage`.
         * @public
         * @readonly
         */
        readonly intendedUsage: OPTIONAL<KeyUsage>,
        /**
         * @summary `intendedCertificatePolicies`.
         * @public
         * @readonly
         */
        readonly intendedCertificatePolicies: OPTIONAL<
            CertificatePoliciesSyntax
        >,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SupportedAlgorithm
     * @description
     *
     * This takes an `object` and converts it to a `SupportedAlgorithm`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SupportedAlgorithm`.
     * @returns {SupportedAlgorithm}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SupportedAlgorithm]: SupportedAlgorithm[_K] }
        >
    ): SupportedAlgorithm {
        return new SupportedAlgorithm(
            _o.algorithmIdentifier,
            _o.intendedUsage,
            _o.intendedCertificatePolicies,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of SupportedAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SupportedAlgorithm: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithmIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "intendedUsage",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "intendedCertificatePolicies",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SupportedAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SupportedAlgorithm: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SupportedAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SupportedAlgorithm: $.ComponentSpec[] = [];
let _cached_decoder_for_SupportedAlgorithm: $.ASN1Decoder<
    SupportedAlgorithm
> | null = null;
let _cached_encoder_for_SupportedAlgorithm: $.ASN1Encoder<
    SupportedAlgorithm
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SupportedAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedAlgorithm} The decoded data structure.
 */
export function _decode_SupportedAlgorithm(el: _Element) {
    if (!_cached_decoder_for_SupportedAlgorithm) {
        _cached_decoder_for_SupportedAlgorithm = function (
            el: _Element
        ): SupportedAlgorithm {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let algorithmIdentifier!: AlgorithmIdentifier;
            let intendedUsage: OPTIONAL<KeyUsage>;
            let intendedCertificatePolicies: OPTIONAL<CertificatePoliciesSyntax>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                algorithmIdentifier: (_el: _Element): void => {
                    algorithmIdentifier = _decode_AlgorithmIdentifier(_el);
                },
                intendedUsage: (_el: _Element): void => {
                    intendedUsage = $._decode_explicit<KeyUsage>(
                        () => _decode_KeyUsage
                    )(_el);
                },
                intendedCertificatePolicies: (_el: _Element): void => {
                    intendedCertificatePolicies = $._decode_explicit<
                        CertificatePoliciesSyntax
                    >(() => _decode_CertificatePoliciesSyntax)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SupportedAlgorithm,
                _extension_additions_list_spec_for_SupportedAlgorithm,
                _root_component_type_list_2_spec_for_SupportedAlgorithm,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SupportedAlgorithm(
                /* SEQUENCE_CONSTRUCTOR_CALL */ algorithmIdentifier,
                intendedUsage,
                intendedCertificatePolicies,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SupportedAlgorithm(el);
}
/**
 * @summary Encodes a(n) SupportedAlgorithm into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_SupportedAlgorithm(
    value: SupportedAlgorithm,
    elGetter: $.ASN1Encoder<SupportedAlgorithm>
) {
    if (!_cached_encoder_for_SupportedAlgorithm) {
        _cached_encoder_for_SupportedAlgorithm = function (
            value: SupportedAlgorithm,
            elGetter: $.ASN1Encoder<SupportedAlgorithm>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.algorithmIdentifier,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.intendedUsage === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_KeyUsage,
                                      $.BER
                                  )(value.intendedUsage, $.BER),
                            /* IF_ABSENT  */ value.intendedCertificatePolicies ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_CertificatePoliciesSyntax,
                                      $.BER
                                  )(value.intendedCertificatePolicies, $.BER),
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
    return _cached_encoder_for_SupportedAlgorithm(value, elGetter);
}

/**
 * @summary id_lsx_x509SupportedAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-x509SupportedAlgorithm       OBJECT IDENTIFIER ::= {id-lsx 49}
 * ```
 *
 * @constant
 */
export const id_lsx_x509SupportedAlgorithm: OBJECT_IDENTIFIER = new _OID(
    [49],
    id_lsx
);

/**
 * @summary x509SupportedAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * x509SupportedAlgorithm SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Supported Algorithm"
 *   DIRECTORY SYNTAX  SupportedAlgorithm
 *   ID                id-lsx-x509SupportedAlgorithm }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const x509SupportedAlgorithm: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_SupportedAlgorithm,
    },
    encoderFor: {
        "&Type": _encode_SupportedAlgorithm,
    },
    "&ldapDesc": "X.509 Supported Algorithm" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_x509SupportedAlgorithm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_supportedAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-supportedAlgorithms           OBJECT IDENTIFIER ::= {id-at 52}
 * ```
 *
 * @constant
 */
export const id_at_supportedAlgorithms: OBJECT_IDENTIFIER = new _OID(
    [52],
    id_at
);

/**
 * @summary supportedAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedAlgorithms ATTRIBUTE ::= {
 *   WITH SYNTAX              SupportedAlgorithm
 *   EQUALITY MATCHING RULE   algorithmIdentifierMatch
 *   LDAP-SYNTAX              x509SupportedAlgorithm.&id
 *   LDAP-NAME                {"supportedAlgorithms"}
 *   LDAP-DESC                "X.509 support algorithms"
 *   ID                       id-at-supportedAlgorithms }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const supportedAlgorithms: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SupportedAlgorithm,
    },
    encoderFor: {
        "&Type": _encode_SupportedAlgorithm,
    },
    "&equality-match": algorithmIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509SupportedAlgorithm["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 support algorithms" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_supportedAlgorithms /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type PkiPath<> = Certificate[]; // SequenceOfType
let _cached_decoder_for_PkiPath: $.ASN1Decoder<PkiPath> | null = null;
let _cached_encoder_for_PkiPath: $.ASN1Encoder<PkiPath> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PkiPath
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PkiPath} The decoded data structure.
 */
export function _decode_PkiPath(el: _Element) {
    if (!_cached_decoder_for_PkiPath) {
        _cached_decoder_for_PkiPath = $._decodeSequenceOf<Certificate>(
            () => _decode_Certificate
        );
    }
    return _cached_decoder_for_PkiPath(el);
}
/**
 * @summary Encodes a(n) PkiPath into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PkiPath, encoded as an ASN.1 Element.
 */
export function _encode_PkiPath(
    value: PkiPath,
    elGetter: $.ASN1Encoder<PkiPath>
) {
    if (!_cached_encoder_for_PkiPath) {
        _cached_encoder_for_PkiPath = $._encodeSequenceOf<Certificate>(
            () => _encode_Certificate,
            $.BER
        );
    }
    return _cached_encoder_for_PkiPath(value, elGetter);
}

/**
 * @summary id_at_pkiPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-pkiPath                       OBJECT IDENTIFIER ::= {id-at 70}
 * ```
 *
 * @constant
 */
export const id_at_pkiPath: OBJECT_IDENTIFIER = new _OID([70], id_at);

/**
 * @summary pkiPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkiPath ATTRIBUTE ::= {
 *   WITH SYNTAX              PkiPath
 *   EQUALITY MATCHING RULE   pkiPathMatch
 *   ID                       id-at-pkiPath }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pkiPath: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PkiPath,
    },
    encoderFor: {
        "&Type": _encode_PkiPath,
    },
    "&equality-match": pkiPathMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_pkiPath /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary ExtAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtAttributes ATTRIBUTE ::= {...}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const ExtAttributes: ATTRIBUTE[] = [];

/**
 * @summary OidOrAttr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OidOrAttr  ::=  CHOICE {
 *   oid       ATTRIBUTE.&id ({ ExtAttributes }),
 *   attribute Attribute {{ ExtAttributes }},
 *   ... }
 * ```
 */
export type OidOrAttr =
    | { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { attribute: Attribute } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_OidOrAttr: $.ASN1Decoder<OidOrAttr> | null = null;
let _cached_encoder_for_OidOrAttr: $.ASN1Encoder<OidOrAttr> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OidOrAttr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OidOrAttr} The decoded data structure.
 */
export function _decode_OidOrAttr(el: _Element) {
    if (!_cached_decoder_for_OidOrAttr) {
        _cached_decoder_for_OidOrAttr = $._decode_extensible_choice<OidOrAttr>({
            "UNIVERSAL 6": ["oid", $._decodeObjectIdentifier],
            "UNIVERSAL 16": ["attribute", _decode_Attribute],
        });
    }
    return _cached_decoder_for_OidOrAttr(el);
}
/**
 * @summary Encodes a(n) OidOrAttr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OidOrAttr, encoded as an ASN.1 Element.
 */
export function _encode_OidOrAttr(
    value: OidOrAttr,
    elGetter: $.ASN1Encoder<OidOrAttr>
) {
    if (!_cached_encoder_for_OidOrAttr) {
        _cached_encoder_for_OidOrAttr = $._encode_choice<OidOrAttr>(
            {
                oid: $._encodeObjectIdentifier,
                attribute: _encode_Attribute,
            },
            $.BER
        );
    }
    return _cached_encoder_for_OidOrAttr(value, elGetter);
}

/**
 * @summary SupportedPublicKeyAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedPublicKeyAlgorithms ::= SEQUENCE {
 *   algorithmIdentifier      AlgorithmIdentifier{{SupportedPublicKeyAlgos}},
 *   minKeySize               INTEGER,
 *   extensions          [0]  SEQUENCE SIZE (1..MAX) OF OidOrAttr OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class SupportedPublicKeyAlgorithms {
    constructor(
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmIdentifier,
        /**
         * @summary `minKeySize`.
         * @public
         * @readonly
         */
        readonly minKeySize: INTEGER,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<OidOrAttr[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SupportedPublicKeyAlgorithms
     * @description
     *
     * This takes an `object` and converts it to a `SupportedPublicKeyAlgorithms`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SupportedPublicKeyAlgorithms`.
     * @returns {SupportedPublicKeyAlgorithms}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof SupportedPublicKeyAlgorithms]: SupportedPublicKeyAlgorithms[_K];
            }
        >
    ): SupportedPublicKeyAlgorithms {
        return new SupportedPublicKeyAlgorithms(
            _o.algorithmIdentifier,
            _o.minKeySize,
            _o.extensions,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of SupportedPublicKeyAlgorithms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SupportedPublicKeyAlgorithms: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithmIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "minKeySize",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "extensions",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SupportedPublicKeyAlgorithms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SupportedPublicKeyAlgorithms: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SupportedPublicKeyAlgorithms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SupportedPublicKeyAlgorithms: $.ComponentSpec[] = [];
let _cached_decoder_for_SupportedPublicKeyAlgorithms: $.ASN1Decoder<
    SupportedPublicKeyAlgorithms
> | null = null;
let _cached_encoder_for_SupportedPublicKeyAlgorithms: $.ASN1Encoder<
    SupportedPublicKeyAlgorithms
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SupportedPublicKeyAlgorithms
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedPublicKeyAlgorithms} The decoded data structure.
 */
export function _decode_SupportedPublicKeyAlgorithms(el: _Element) {
    if (!_cached_decoder_for_SupportedPublicKeyAlgorithms) {
        _cached_decoder_for_SupportedPublicKeyAlgorithms = function (
            el: _Element
        ): SupportedPublicKeyAlgorithms {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let algorithmIdentifier!: AlgorithmIdentifier;
            let minKeySize!: INTEGER;
            let extensions: OPTIONAL<OidOrAttr[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                algorithmIdentifier: (_el: _Element): void => {
                    algorithmIdentifier = _decode_AlgorithmIdentifier(_el);
                },
                minKeySize: (_el: _Element): void => {
                    minKeySize = $._decodeInteger(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_explicit<OidOrAttr[]>(() =>
                        $._decodeSequenceOf<OidOrAttr>(() => _decode_OidOrAttr)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SupportedPublicKeyAlgorithms,
                _extension_additions_list_spec_for_SupportedPublicKeyAlgorithms,
                _root_component_type_list_2_spec_for_SupportedPublicKeyAlgorithms,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SupportedPublicKeyAlgorithms(
                /* SEQUENCE_CONSTRUCTOR_CALL */ algorithmIdentifier,
                minKeySize,
                extensions,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SupportedPublicKeyAlgorithms(el);
}
/**
 * @summary Encodes a(n) SupportedPublicKeyAlgorithms into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedPublicKeyAlgorithms, encoded as an ASN.1 Element.
 */
export function _encode_SupportedPublicKeyAlgorithms(
    value: SupportedPublicKeyAlgorithms,
    elGetter: $.ASN1Encoder<SupportedPublicKeyAlgorithms>
) {
    if (!_cached_encoder_for_SupportedPublicKeyAlgorithms) {
        _cached_encoder_for_SupportedPublicKeyAlgorithms = function (
            value: SupportedPublicKeyAlgorithms,
            elGetter: $.ASN1Encoder<SupportedPublicKeyAlgorithms>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.algorithmIdentifier,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeInteger(
                                value.minKeySize,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.extensions === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () =>
                                          $._encodeSequenceOf<OidOrAttr>(
                                              () => _encode_OidOrAttr,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.extensions, $.BER),
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
    return _cached_encoder_for_SupportedPublicKeyAlgorithms(value, elGetter);
}

/**
 * @summary id_asx_x509SupportedPublicKeyAlgos
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-x509SupportedPublicKeyAlgos  OBJECT IDENTIFIER ::= {id-asx 10}
 * ```
 *
 * @constant
 */
export const id_asx_x509SupportedPublicKeyAlgos: OBJECT_IDENTIFIER = new _OID(
    [10],
    id_asx
);

/**
 * @summary x509SupportedPublicKeyAlgos
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * x509SupportedPublicKeyAlgos SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 supported publiv key algorithms"
 *   DIRECTORY SYNTAX  SupportedPublicKeyAlgorithms
 *   ID                id-asx-x509SupportedPublicKeyAlgos }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const x509SupportedPublicKeyAlgos: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_SupportedPublicKeyAlgorithms,
    },
    encoderFor: {
        "&Type": _encode_SupportedPublicKeyAlgorithms,
    },
    "&ldapDesc":
        "X.509 supported publiv key algorithms" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_x509SupportedPublicKeyAlgos /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_supportedPublicKeyAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-supportedPublicKeyAlgorithms  OBJECT IDENTIFIER ::= {id-at 103}
 * ```
 *
 * @constant
 */
export const id_at_supportedPublicKeyAlgorithms: OBJECT_IDENTIFIER = new _OID(
    [103],
    id_at
);

/**
 * @summary supportedPublicKeyAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedPublicKeyAlgorithms ATTRIBUTE ::= {
 *   WITH SYNTAX            SupportedPublicKeyAlgorithms
 *   EQUALITY MATCHING RULE algorithmIdentifierMatch
 *   LDAP-SYNTAX            x509SupportedPublicKeyAlgos.&id
 *   LDAP-NAME              {"supportedPublicKeyAlgorithms"}
 *   LDAP-DESC              "X.509 supported publiv key algorithms"
 *   ID                     id-at-supportedPublicKeyAlgorithms }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const supportedPublicKeyAlgorithms: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SupportedPublicKeyAlgorithms,
    },
    encoderFor: {
        "&Type": _encode_SupportedPublicKeyAlgorithms,
    },
    "&equality-match": algorithmIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax":
        x509SupportedPublicKeyAlgos["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc":
        "X.509 supported publiv key algorithms" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_supportedPublicKeyAlgorithms /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary SupportedPublicKeyAlgos
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedPublicKeyAlgos ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedPublicKeyAlgos: ALGORITHM[] = [];

/**
 * @summary id_at_userPassword
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-userPassword                  OBJECT IDENTIFIER ::= {id-at 35}
 * ```
 *
 * @constant
 */
export const id_at_userPassword: OBJECT_IDENTIFIER = new _OID([35], id_at);

/**
 * @summary userPassword
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPassword ATTRIBUTE ::= {
 *   WITH SYNTAX              OCTET STRING(SIZE (0..MAX))
 *   EQUALITY MATCHING RULE   octetStringMatch
 *   LDAP-SYNTAX              octetString.&id
 *   LDAP-NAME                {"userPassword"}
 *   ID                       id-at-userPassword }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const userPassword: ATTRIBUTE = {
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
    "&id": id_at_userPassword /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* END_MODULE AuthenticationFramework */
/* eslint-enable */
