/**
 * @module PKI_Stub
 * @summary The ASN.1 module `PKI-Stub`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.pki-stub.9
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
    ENUMERATED,
    GeneralizedTime,
    IA5String,
    INSTANCE_OF,
    INTEGER,
    joint_iso_itu_t,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    TYPE_IDENTIFIER,
    UTCTime,
    UTF8String,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/**
 * @summary ds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ds                   OBJECT IDENTIFIER ::= {joint-iso-itu-t ds(5)}
 * ```
 *
 * @constant
 */
export const ds: OBJECT_IDENTIFIER = new _OID([/* ds */ 5], joint_iso_itu_t);

/**
 * @summary wrapperProtocolType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * wrapperProtocolType  OBJECT IDENTIFIER ::= {ds 43}
 * ```
 *
 * @constant
 */
export const wrapperProtocolType: OBJECT_IDENTIFIER = new _OID([43], ds);

/**
 * @summary id_wrprot
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-wrprot            OBJECT IDENTIFIER ::= wrapperProtocolType
 * ```
 *
 * @constant
 */
export const id_wrprot: OBJECT_IDENTIFIER = wrapperProtocolType;

/**
 * @summary algorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * algorithms           OBJECT IDENTIFIER ::= {ds 44}
 * ```
 *
 * @constant
 */
export const algorithms: OBJECT_IDENTIFIER = new _OID([44], ds);

/**
 * @summary id_algo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo              OBJECT IDENTIFIER ::= algorithms
 * ```
 *
 * @constant
 */
export const id_algo: OBJECT_IDENTIFIER = algorithms;

/**
 * @summary ALGORITHM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ALGORITHM ::= CLASS {
 *   &Type          OPTIONAL,
 *   &DynParms      OPTIONAL,
 *   &id            OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   [PARMS         &Type]
 *   [DYN-PARMS     &DynParms ]
 *   IDENTIFIED BY  &id }
 * ```
 *
 * @interface
 */
export interface ALGORITHM<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    DynParms = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
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
            [_K in keyof ALGORITHM<Type, DynParms>]: $.ASN1Decoder<
                ALGORITHM<Type, DynParms>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ALGORITHM<Type, DynParms>]: $.ASN1Encoder<
                ALGORITHM<Type, DynParms>[_K]
            >;
        }
    >;
    /**
     * @summary &Type
     */
    "&Type": Type;
    /**
     * @summary &DynParms
     */
    "&DynParms": DynParms;
    /**
     * @summary &id
     */
    "&id"?: OBJECT_IDENTIFIER;
}

/**
 * @summary AlgorithmWithInvoke
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgorithmWithInvoke{ALGORITHM:SupportedAlgorithms} ::= SEQUENCE {
 *   algorithm       ALGORITHM.&id({SupportedAlgorithms}),
 *   parameters  [0] ALGORITHM.&Type({SupportedAlgorithms}{@algorithm}) OPTIONAL,
 *   dynamParms  [1] ALGORITHM.&DynParms({SupportedAlgorithms}{@algorithm}) OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class AlgorithmWithInvoke {
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
         * @summary `dynamParms`.
         * @public
         * @readonly
         */
        readonly dynamParms: OPTIONAL<_Element>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AlgorithmWithInvoke
     * @description
     *
     * This takes an `object` and converts it to a `AlgorithmWithInvoke`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlgorithmWithInvoke`.
     * @returns {AlgorithmWithInvoke}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof AlgorithmWithInvoke]: AlgorithmWithInvoke[_K] }
        >
    ): AlgorithmWithInvoke {
        return new AlgorithmWithInvoke(
            _o.algorithm,
            _o.parameters,
            _o.dynamParms,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AlgorithmWithInvoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AlgorithmWithInvoke: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "parameters",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "dynamParms",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AlgorithmWithInvoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AlgorithmWithInvoke: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AlgorithmWithInvoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AlgorithmWithInvoke: $.ComponentSpec[] = [];
let _cached_decoder_for_AlgorithmWithInvoke: $.ASN1Decoder<
    AlgorithmWithInvoke
> | null = null;
let _cached_encoder_for_AlgorithmWithInvoke: $.ASN1Encoder<
    AlgorithmWithInvoke
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AlgorithmWithInvoke
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlgorithmWithInvoke} The decoded data structure.
 */
export function _decode_AlgorithmWithInvoke(el: _Element) {
    if (!_cached_decoder_for_AlgorithmWithInvoke) {
        _cached_decoder_for_AlgorithmWithInvoke = function (
            el: _Element
        ): AlgorithmWithInvoke {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let algorithm!: OBJECT_IDENTIFIER;
            let parameters: OPTIONAL<_Element>;
            let dynamParms: OPTIONAL<_Element>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                algorithm: (_el: _Element): void => {
                    algorithm = $._decodeObjectIdentifier(_el);
                },
                parameters: (_el: _Element): void => {
                    parameters = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
                dynamParms: (_el: _Element): void => {
                    dynamParms = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AlgorithmWithInvoke,
                _extension_additions_list_spec_for_AlgorithmWithInvoke,
                _root_component_type_list_2_spec_for_AlgorithmWithInvoke,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AlgorithmWithInvoke(
                /* SEQUENCE_CONSTRUCTOR_CALL */ algorithm,
                parameters,
                dynamParms,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AlgorithmWithInvoke(el);
}
/**
 * @summary Encodes a(n) AlgorithmWithInvoke into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlgorithmWithInvoke, encoded as an ASN.1 Element.
 */
export function _encode_AlgorithmWithInvoke(
    value: AlgorithmWithInvoke,
    elGetter: $.ASN1Encoder<AlgorithmWithInvoke>
) {
    if (!_cached_encoder_for_AlgorithmWithInvoke) {
        _cached_encoder_for_AlgorithmWithInvoke = function (
            value: AlgorithmWithInvoke,
            elGetter: $.ASN1Encoder<AlgorithmWithInvoke>
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
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeAny,
                                      $.BER
                                  )(value.parameters, $.BER),
                            /* IF_ABSENT  */ value.dynamParms === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeAny,
                                      $.BER
                                  )(value.dynamParms, $.BER),
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
    return _cached_encoder_for_AlgorithmWithInvoke(value, elGetter);
}

export type AlgoInvoke<> = _Element; // ObjectClassFieldType
let _cached_decoder_for_AlgoInvoke: $.ASN1Decoder<AlgoInvoke> | null = null;
let _cached_encoder_for_AlgoInvoke: $.ASN1Encoder<AlgoInvoke> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AlgoInvoke
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlgoInvoke} The decoded data structure.
 */
export function _decode_AlgoInvoke(el: _Element) {
    if (!_cached_decoder_for_AlgoInvoke) {
        _cached_decoder_for_AlgoInvoke = $._decodeAny;
    }
    return _cached_decoder_for_AlgoInvoke(el);
}
/**
 * @summary Encodes a(n) AlgoInvoke into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlgoInvoke, encoded as an ASN.1 Element.
 */
export function _encode_AlgoInvoke(
    value: AlgoInvoke,
    elGetter: $.ASN1Encoder<AlgoInvoke>
) {
    if (!_cached_encoder_for_AlgoInvoke) {
        _cached_encoder_for_AlgoInvoke = $._encodeAny;
    }
    return _cached_encoder_for_AlgoInvoke(value, elGetter);
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
 * @summary HASH
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HASH{ToBeHashed} ::= SEQUENCE {
 *   algorithmIdentifier  AlgorithmIdentifier{{SupportedAlgorithms}},
 *   hashValue            BIT STRING,
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
 * @summary sha224WithRSAEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha224WithRSAEncryptionAlgorithm ALGORITHM ::= { -- IETF RFC 5754
 *   PARMS         NULL
 *   IDENTIFIED BY {1 2 840 113549 1 11} }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha224WithRSAEncryptionAlgorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
        "&DynParms": undefined,
    },
    encoderFor: {
        "&Type": $._encodeNull,
        "&DynParms": undefined,
    },
    "&id": new _OID([
        1,
        2,
        840,
        113549,
        1,
        11,
    ]) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

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
 *   altAlgorithmIdentifier  AlgorithmIdentifier{{SupportedAlgorithms}} OPTIONAL,
 *   altSignature            BIT STRING OPTIONAL
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
         * @summary `altAlgorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly altAlgorithmIdentifier: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `altSignature`.
         * @public
         * @readonly
         */
        readonly altSignature: OPTIONAL<BIT_STRING>,
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
            _o.altAlgorithmIdentifier,
            _o.altSignature,
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
export const _extension_additions_list_spec_for_SIGNED: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "altAlgorithmIdentifier",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "altSignature",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
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
        let altAlgorithmIdentifier: OPTIONAL<AlgorithmIdentifier>;
        let altSignature: OPTIONAL<BIT_STRING>;
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
            altAlgorithmIdentifier: (_el: _Element): void => {
                altAlgorithmIdentifier = _decode_AlgorithmIdentifier(_el);
            },
            altSignature: (_el: _Element): void => {
                altSignature = $._decodeBitString(_el);
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
            altAlgorithmIdentifier,
            altSignature,
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
                    [
                        /* IF_ABSENT  */ value.altAlgorithmIdentifier ===
                        undefined
                            ? undefined
                            : _encode_AlgorithmIdentifier(
                                  value.altAlgorithmIdentifier,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.altSignature === undefined
                            ? undefined
                            : $._encodeBitString(value.altSignature, $.BER),
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
 * @summary ATTRIBUTE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ATTRIBUTE ::= CLASS {
 *   &type                     UTF8String,
 *   &id                       OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   WITH SYNTAX               &type
 *   ID                        &id }
 * ```
 *
 * @interface
 */
export interface ATTRIBUTE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "ATTRIBUTE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof ATTRIBUTE]: $.ASN1Decoder<ATTRIBUTE[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ATTRIBUTE]: $.ASN1Encoder<ATTRIBUTE[_K]>;
        }
    >;
    /**
     * @summary &type
     */
    "&type"?: UTF8String;
    /**
     * @summary &id
     */
    "&id"?: OBJECT_IDENTIFIER;
}

/**
 * @summary AttributeTypeAndValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeTypeAndValue ::= SEQUENCE {
 *   type                  ATTRIBUTE.&id, --({SupportedAttributes}),
 *   value                 ATTRIBUTE.&type, --({SupportedAttributes}{@type}),
 *   ... }
 * ```
 *
 * @class
 */
export class AttributeTypeAndValue {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: UTF8String,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeTypeAndValue
     * @description
     *
     * This takes an `object` and converts it to a `AttributeTypeAndValue`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeTypeAndValue`.
     * @returns {AttributeTypeAndValue}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof AttributeTypeAndValue]: AttributeTypeAndValue[_K] }
        >
    ): AttributeTypeAndValue {
        return new AttributeTypeAndValue(
            _o.type_,
            _o.value,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AttributeTypeAndValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeTypeAndValue: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "value",
        false,
        $.hasTag(_TagClass.universal, 12),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AttributeTypeAndValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeTypeAndValue: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AttributeTypeAndValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeTypeAndValue: $.ComponentSpec[] = [];
let _cached_decoder_for_AttributeTypeAndValue: $.ASN1Decoder<
    AttributeTypeAndValue
> | null = null;
let _cached_encoder_for_AttributeTypeAndValue: $.ASN1Encoder<
    AttributeTypeAndValue
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypeAndValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeTypeAndValue} The decoded data structure.
 */
export function _decode_AttributeTypeAndValue(el: _Element) {
    if (!_cached_decoder_for_AttributeTypeAndValue) {
        _cached_decoder_for_AttributeTypeAndValue = function (
            el: _Element
        ): AttributeTypeAndValue {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AttributeTypeAndValue contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: OBJECT_IDENTIFIER;
            let value!: UTF8String;
            type_ = $._decodeObjectIdentifier(sequence[0]);
            value = $._decodeUTF8String(sequence[1]);
            return new AttributeTypeAndValue(type_, value, sequence.slice(2));
        };
    }
    return _cached_decoder_for_AttributeTypeAndValue(el);
}
/**
 * @summary Encodes a(n) AttributeTypeAndValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypeAndValue, encoded as an ASN.1 Element.
 */
export function _encode_AttributeTypeAndValue(
    value: AttributeTypeAndValue,
    elGetter: $.ASN1Encoder<AttributeTypeAndValue>
) {
    if (!_cached_encoder_for_AttributeTypeAndValue) {
        _cached_encoder_for_AttributeTypeAndValue = function (
            value: AttributeTypeAndValue,
            elGetter: $.ASN1Encoder<AttributeTypeAndValue>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.type_,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeUTF8String(
                                value.value,
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
    return _cached_encoder_for_AttributeTypeAndValue(value, elGetter);
}

export type RelativeDistinguishedName<> = AttributeTypeAndValue[]; // SetOfType
let _cached_decoder_for_RelativeDistinguishedName: $.ASN1Decoder<
    RelativeDistinguishedName
> | null = null;
let _cached_encoder_for_RelativeDistinguishedName: $.ASN1Encoder<
    RelativeDistinguishedName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RelativeDistinguishedName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelativeDistinguishedName} The decoded data structure.
 */
export function _decode_RelativeDistinguishedName(el: _Element) {
    if (!_cached_decoder_for_RelativeDistinguishedName) {
        _cached_decoder_for_RelativeDistinguishedName = $._decodeSetOf<
            AttributeTypeAndValue
        >(() => _decode_AttributeTypeAndValue);
    }
    return _cached_decoder_for_RelativeDistinguishedName(el);
}
/**
 * @summary Encodes a(n) RelativeDistinguishedName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelativeDistinguishedName, encoded as an ASN.1 Element.
 */
export function _encode_RelativeDistinguishedName(
    value: RelativeDistinguishedName,
    elGetter: $.ASN1Encoder<RelativeDistinguishedName>
) {
    if (!_cached_encoder_for_RelativeDistinguishedName) {
        _cached_encoder_for_RelativeDistinguishedName = $._encodeSetOf<
            AttributeTypeAndValue
        >(() => _encode_AttributeTypeAndValue, $.BER);
    }
    return _cached_encoder_for_RelativeDistinguishedName(value, elGetter);
}

export type RDNSequence<> = RelativeDistinguishedName[]; // SequenceOfType
let _cached_decoder_for_RDNSequence: $.ASN1Decoder<RDNSequence> | null = null;
let _cached_encoder_for_RDNSequence: $.ASN1Encoder<RDNSequence> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RDNSequence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RDNSequence} The decoded data structure.
 */
export function _decode_RDNSequence(el: _Element) {
    if (!_cached_decoder_for_RDNSequence) {
        _cached_decoder_for_RDNSequence = $._decodeSequenceOf<
            RelativeDistinguishedName
        >(() => _decode_RelativeDistinguishedName);
    }
    return _cached_decoder_for_RDNSequence(el);
}
/**
 * @summary Encodes a(n) RDNSequence into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RDNSequence, encoded as an ASN.1 Element.
 */
export function _encode_RDNSequence(
    value: RDNSequence,
    elGetter: $.ASN1Encoder<RDNSequence>
) {
    if (!_cached_encoder_for_RDNSequence) {
        _cached_encoder_for_RDNSequence = $._encodeSequenceOf<
            RelativeDistinguishedName
        >(() => _encode_RelativeDistinguishedName, $.BER);
    }
    return _cached_encoder_for_RDNSequence(value, elGetter);
}

/**
 * @summary Name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Name  ::=  CHOICE { -- only one possibility for now -- rdnSequence  RDNSequence }
 * ```
 */
export type Name = { rdnSequence: RDNSequence } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_Name: $.ASN1Decoder<Name> | null = null;
let _cached_encoder_for_Name: $.ASN1Encoder<Name> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Name} The decoded data structure.
 */
export function _decode_Name(el: _Element) {
    if (!_cached_decoder_for_Name) {
        _cached_decoder_for_Name = $._decode_inextensible_choice<Name>({
            "UNIVERSAL 16": ["rdnSequence", _decode_RDNSequence],
        });
    }
    return _cached_decoder_for_Name(el);
}
/**
 * @summary Encodes a(n) Name into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Name, encoded as an ASN.1 Element.
 */
export function _encode_Name(value: Name, elGetter: $.ASN1Encoder<Name>) {
    if (!_cached_encoder_for_Name) {
        _cached_encoder_for_Name = $._encode_choice<Name>(
            {
                rdnSequence: _encode_RDNSequence,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Name(value, elGetter);
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
 * @summary UniqueIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniqueIdentifier  ::=  BIT STRING
 * ```
 */
export type UniqueIdentifier = BIT_STRING;
let _cached_decoder_for_UniqueIdentifier: $.ASN1Decoder<
    UniqueIdentifier
> | null = null;
let _cached_encoder_for_UniqueIdentifier: $.ASN1Encoder<
    UniqueIdentifier
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniqueIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniqueIdentifier} The decoded data structure.
 */
export function _decode_UniqueIdentifier(el: _Element) {
    if (!_cached_decoder_for_UniqueIdentifier) {
        _cached_decoder_for_UniqueIdentifier = $._decodeBitString;
    }
    return _cached_decoder_for_UniqueIdentifier(el);
}
/**
 * @summary Encodes a(n) UniqueIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniqueIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_UniqueIdentifier(
    value: UniqueIdentifier,
    elGetter: $.ASN1Encoder<UniqueIdentifier>
) {
    if (!_cached_encoder_for_UniqueIdentifier) {
        _cached_encoder_for_UniqueIdentifier = $._encodeBitString;
    }
    return _cached_encoder_for_UniqueIdentifier(value, elGetter);
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
 *   --[[2:  if present, version shall be v2 or v3
 *   subjectUniqueIdentifier  [2] IMPLICIT UniqueIdentifier OPTIONAL--]]--,
 *   --[[3:  if present, version shall be v2 or v3
 *   extensions               [3]  Extensions OPTIONAL --]]
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
         * @summary `subjectUniqueIdentifier`.
         * @public
         * @readonly
         */
        readonly subjectUniqueIdentifier: OPTIONAL<UniqueIdentifier>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
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
            _o.subjectUniqueIdentifier,
            _o.extensions,
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
export const _extension_additions_list_spec_for_TBSCertificate: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "subjectUniqueIdentifier",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "extensions",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
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
            let subjectUniqueIdentifier: OPTIONAL<UniqueIdentifier>;
            let extensions: OPTIONAL<Extensions>;
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
                subjectUniqueIdentifier: (_el: _Element): void => {
                    subjectUniqueIdentifier = $._decode_explicit<
                        UniqueIdentifier
                    >(() => _decode_UniqueIdentifier)(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_explicit<Extensions>(
                        () => _decode_Extensions
                    )(_el);
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
                subjectUniqueIdentifier,
                extensions,
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
                        [
                            /* IF_ABSENT  */ value.subjectUniqueIdentifier ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_UniqueIdentifier,
                                      $.BER
                                  )(value.subjectUniqueIdentifier, $.BER),
                            /* IF_ABSENT  */ value.extensions === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_Extensions,
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
 * @summary SupportedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedAttributes ATTRIBUTE ::= {...}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const SupportedAttributes: ATTRIBUTE[] = [];

/**
 * @summary AttCertVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttCertVersion  ::=  INTEGER {v2(1)}
 * ```
 */
export type AttCertVersion = INTEGER;
/**
 * @summary AttCertVersion_v2
 * @constant
 * @type {number}
 */
export const AttCertVersion_v2: AttCertVersion = 1; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_AttCertVersion: $.ASN1Decoder<
    AttCertVersion
> | null = null;
let _cached_encoder_for_AttCertVersion: $.ASN1Encoder<
    AttCertVersion
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttCertVersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttCertVersion} The decoded data structure.
 */
export function _decode_AttCertVersion(el: _Element) {
    if (!_cached_decoder_for_AttCertVersion) {
        _cached_decoder_for_AttCertVersion = $._decodeInteger;
    }
    return _cached_decoder_for_AttCertVersion(el);
}
/**
 * @summary Encodes a(n) AttCertVersion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttCertVersion, encoded as an ASN.1 Element.
 */
export function _encode_AttCertVersion(
    value: AttCertVersion,
    elGetter: $.ASN1Encoder<AttCertVersion>
) {
    if (!_cached_encoder_for_AttCertVersion) {
        _cached_encoder_for_AttCertVersion = $._encodeInteger;
    }
    return _cached_encoder_for_AttCertVersion(value, elGetter);
}

/**
 * @summary OTHER_NAME
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OTHER-NAME ::= TYPE-IDENTIFIER
 * ```
 *
 * @interface
 */
export type OTHER_NAME = TYPE_IDENTIFIER;

/**
 * @summary GeneralName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralName  ::=  CHOICE {
 *   otherName                  [0]  INSTANCE OF OTHER-NAME,
 *   rfc822Name                 [1]  IA5String,
 *   dNSName                    [2]  IA5String,
 * --x400Address                [3]  ORAddress,
 *   directoryName              [4]  Name,
 * --ediPartyName               [5]  EDIPartyName,
 *   uniformResourceIdentifier  [6]  IA5String,
 *   iPAddress                  [7]  OCTET STRING,
 *   registeredID               [8]  OBJECT IDENTIFIER,
 *   ... }
 * ```
 */
export type GeneralName =
    | { otherName: INSTANCE_OF } /* CHOICE_ALT_ROOT */
    | { rfc822Name: IA5String } /* CHOICE_ALT_ROOT */
    | { dNSName: IA5String } /* CHOICE_ALT_ROOT */
    | { directoryName: Name } /* CHOICE_ALT_ROOT */
    | { uniformResourceIdentifier: IA5String } /* CHOICE_ALT_ROOT */
    | { iPAddress: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { registeredID: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_GeneralName: $.ASN1Decoder<GeneralName> | null = null;
let _cached_encoder_for_GeneralName: $.ASN1Encoder<GeneralName> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralName} The decoded data structure.
 */
export function _decode_GeneralName(el: _Element) {
    if (!_cached_decoder_for_GeneralName) {
        _cached_decoder_for_GeneralName = $._decode_extensible_choice<
            GeneralName
        >({
            "CONTEXT 0": [
                "otherName",
                $._decode_explicit<INSTANCE_OF>(() => $._decodeInstanceOf),
            ],
            "CONTEXT 1": [
                "rfc822Name",
                $._decode_explicit<IA5String>(() => $._decodeIA5String),
            ],
            "CONTEXT 2": [
                "dNSName",
                $._decode_explicit<IA5String>(() => $._decodeIA5String),
            ],
            "CONTEXT 4": [
                "directoryName",
                $._decode_explicit<Name>(() => _decode_Name),
            ],
            "CONTEXT 6": [
                "uniformResourceIdentifier",
                $._decode_explicit<IA5String>(() => $._decodeIA5String),
            ],
            "CONTEXT 7": [
                "iPAddress",
                $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString),
            ],
            "CONTEXT 8": [
                "registeredID",
                $._decode_explicit<OBJECT_IDENTIFIER>(
                    () => $._decodeObjectIdentifier
                ),
            ],
        });
    }
    return _cached_decoder_for_GeneralName(el);
}
/**
 * @summary Encodes a(n) GeneralName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralName, encoded as an ASN.1 Element.
 */
export function _encode_GeneralName(
    value: GeneralName,
    elGetter: $.ASN1Encoder<GeneralName>
) {
    if (!_cached_encoder_for_GeneralName) {
        _cached_encoder_for_GeneralName = $._encode_choice<GeneralName>(
            {
                otherName: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInstanceOf,
                    $.BER
                ),
                rfc822Name: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => $._encodeIA5String,
                    $.BER
                ),
                dNSName: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => $._encodeIA5String,
                    $.BER
                ),
                directoryName: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => _encode_Name,
                    $.BER
                ),
                uniformResourceIdentifier: $._encode_explicit(
                    _TagClass.context,
                    6,
                    () => $._encodeIA5String,
                    $.BER
                ),
                iPAddress: $._encode_explicit(
                    _TagClass.context,
                    7,
                    () => $._encodeOctetString,
                    $.BER
                ),
                registeredID: $._encode_explicit(
                    _TagClass.context,
                    8,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_GeneralName(value, elGetter);
}

export type GeneralNames<> = GeneralName[]; // SequenceOfType
let _cached_decoder_for_GeneralNames: $.ASN1Decoder<GeneralNames> | null = null;
let _cached_encoder_for_GeneralNames: $.ASN1Encoder<GeneralNames> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralNames} The decoded data structure.
 */
export function _decode_GeneralNames(el: _Element) {
    if (!_cached_decoder_for_GeneralNames) {
        _cached_decoder_for_GeneralNames = $._decodeSequenceOf<GeneralName>(
            () => _decode_GeneralName
        );
    }
    return _cached_decoder_for_GeneralNames(el);
}
/**
 * @summary Encodes a(n) GeneralNames into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralNames, encoded as an ASN.1 Element.
 */
export function _encode_GeneralNames(
    value: GeneralNames,
    elGetter: $.ASN1Encoder<GeneralNames>
) {
    if (!_cached_encoder_for_GeneralNames) {
        _cached_encoder_for_GeneralNames = $._encodeSequenceOf<GeneralName>(
            () => _encode_GeneralName,
            $.BER
        );
    }
    return _cached_encoder_for_GeneralNames(value, elGetter);
}

/**
 * @summary IssuerSerial
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IssuerSerial ::= SEQUENCE {
 *   issuer     GeneralNames,
 *   serial     CertificateSerialNumber,
 *   issuerUID  UniqueIdentifier OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class IssuerSerial {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: GeneralNames,
        /**
         * @summary `serial`.
         * @public
         * @readonly
         */
        readonly serial: CertificateSerialNumber,
        /**
         * @summary `issuerUID`.
         * @public
         * @readonly
         */
        readonly issuerUID: OPTIONAL<UniqueIdentifier>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IssuerSerial
     * @description
     *
     * This takes an `object` and converts it to a `IssuerSerial`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IssuerSerial`.
     * @returns {IssuerSerial}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof IssuerSerial]: IssuerSerial[_K] }>
    ): IssuerSerial {
        return new IssuerSerial(
            _o.issuer,
            _o.serial,
            _o.issuerUID,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of IssuerSerial
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IssuerSerial: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "issuer",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "serial",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "issuerUID",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of IssuerSerial
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IssuerSerial: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of IssuerSerial
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IssuerSerial: $.ComponentSpec[] = [];
let _cached_decoder_for_IssuerSerial: $.ASN1Decoder<IssuerSerial> | null = null;
let _cached_encoder_for_IssuerSerial: $.ASN1Encoder<IssuerSerial> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) IssuerSerial
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IssuerSerial} The decoded data structure.
 */
export function _decode_IssuerSerial(el: _Element) {
    if (!_cached_decoder_for_IssuerSerial) {
        _cached_decoder_for_IssuerSerial = function (
            el: _Element
        ): IssuerSerial {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuer!: GeneralNames;
            let serial!: CertificateSerialNumber;
            let issuerUID: OPTIONAL<UniqueIdentifier>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                issuer: (_el: _Element): void => {
                    issuer = _decode_GeneralNames(_el);
                },
                serial: (_el: _Element): void => {
                    serial = _decode_CertificateSerialNumber(_el);
                },
                issuerUID: (_el: _Element): void => {
                    issuerUID = _decode_UniqueIdentifier(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IssuerSerial,
                _extension_additions_list_spec_for_IssuerSerial,
                _root_component_type_list_2_spec_for_IssuerSerial,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new IssuerSerial(
                /* SEQUENCE_CONSTRUCTOR_CALL */ issuer,
                serial,
                issuerUID,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_IssuerSerial(el);
}
/**
 * @summary Encodes a(n) IssuerSerial into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IssuerSerial, encoded as an ASN.1 Element.
 */
export function _encode_IssuerSerial(
    value: IssuerSerial,
    elGetter: $.ASN1Encoder<IssuerSerial>
) {
    if (!_cached_encoder_for_IssuerSerial) {
        _cached_encoder_for_IssuerSerial = function (
            value: IssuerSerial,
            elGetter: $.ASN1Encoder<IssuerSerial>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_GeneralNames(
                                value.issuer,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serial,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.issuerUID === undefined
                                ? undefined
                                : _encode_UniqueIdentifier(
                                      value.issuerUID,
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
    return _cached_encoder_for_IssuerSerial(value, elGetter);
}

/**
 * @summary ObjectDigestInfo_digestedObjectType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectDigestInfo-digestedObjectType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ObjectDigestInfo_digestedObjectType {
    publicKey = 0,
    publicKeyCert = 1,
    otherObjectTypes = 2,
}
/**
 * @summary ObjectDigestInfo_digestedObjectType
 */
export type ObjectDigestInfo_digestedObjectType = _enum_for_ObjectDigestInfo_digestedObjectType;
/**
 * @summary ObjectDigestInfo_digestedObjectType
 * @constant
 */
export const ObjectDigestInfo_digestedObjectType = _enum_for_ObjectDigestInfo_digestedObjectType;
/**
 * @summary ObjectDigestInfo_digestedObjectType_publicKey
 * @constant
 * @type {number}
 */
export const ObjectDigestInfo_digestedObjectType_publicKey: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.publicKey; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ObjectDigestInfo_digestedObjectType_publicKeyCert
 * @constant
 * @type {number}
 */
export const ObjectDigestInfo_digestedObjectType_publicKeyCert: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.publicKeyCert; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ObjectDigestInfo_digestedObjectType_otherObjectTypes
 * @constant
 * @type {number}
 */
export const ObjectDigestInfo_digestedObjectType_otherObjectTypes: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.otherObjectTypes; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_ObjectDigestInfo_digestedObjectType: $.ASN1Decoder<
    ObjectDigestInfo_digestedObjectType
> | null = null;
let _cached_encoder_for_ObjectDigestInfo_digestedObjectType: $.ASN1Encoder<
    ObjectDigestInfo_digestedObjectType
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ObjectDigestInfo_digestedObjectType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectDigestInfo_digestedObjectType} The decoded data structure.
 */
export function _decode_ObjectDigestInfo_digestedObjectType(el: _Element) {
    if (!_cached_decoder_for_ObjectDigestInfo_digestedObjectType) {
        _cached_decoder_for_ObjectDigestInfo_digestedObjectType =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_ObjectDigestInfo_digestedObjectType(el);
}
/**
 * @summary Encodes a(n) ObjectDigestInfo_digestedObjectType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectDigestInfo_digestedObjectType, encoded as an ASN.1 Element.
 */
export function _encode_ObjectDigestInfo_digestedObjectType(
    value: ObjectDigestInfo_digestedObjectType,
    elGetter: $.ASN1Encoder<ObjectDigestInfo_digestedObjectType>
) {
    if (!_cached_encoder_for_ObjectDigestInfo_digestedObjectType) {
        _cached_encoder_for_ObjectDigestInfo_digestedObjectType =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_ObjectDigestInfo_digestedObjectType(
        value,
        elGetter
    );
}

/**
 * @summary ObjectDigestInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectDigestInfo ::= SEQUENCE {
 *   digestedObjectType   ENUMERATED {
 *     publicKey        (0),
 *     publicKeyCert    (1),
 *     otherObjectTypes (2)},
 *   otherObjectTypeID   OBJECT IDENTIFIER OPTIONAL,
 *   digestAlgorithm     AlgorithmIdentifier{{SupportedAlgorithms}},
 *   objectDigest        BIT STRING,
 *   ... }
 * ```
 *
 * @class
 */
export class ObjectDigestInfo {
    constructor(
        /**
         * @summary `digestedObjectType`.
         * @public
         * @readonly
         */
        readonly digestedObjectType: ObjectDigestInfo_digestedObjectType,
        /**
         * @summary `otherObjectTypeID`.
         * @public
         * @readonly
         */
        readonly otherObjectTypeID: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `digestAlgorithm`.
         * @public
         * @readonly
         */
        readonly digestAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `objectDigest`.
         * @public
         * @readonly
         */
        readonly objectDigest: BIT_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ObjectDigestInfo
     * @description
     *
     * This takes an `object` and converts it to a `ObjectDigestInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObjectDigestInfo`.
     * @returns {ObjectDigestInfo}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ObjectDigestInfo]: ObjectDigestInfo[_K] }>
    ): ObjectDigestInfo {
        return new ObjectDigestInfo(
            _o.digestedObjectType,
            _o.otherObjectTypeID,
            _o.digestAlgorithm,
            _o.objectDigest,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `digestedObjectType`
     * @public
     * @static
     */

    public static _enum_for_digestedObjectType = _enum_for_ObjectDigestInfo_digestedObjectType;
}
/**
 * @summary The Leading Root Component Types of ObjectDigestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ObjectDigestInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "digestedObjectType",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "otherObjectTypeID",
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "digestAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "objectDigest",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ObjectDigestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ObjectDigestInfo: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ObjectDigestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ObjectDigestInfo: $.ComponentSpec[] = [];
let _cached_decoder_for_ObjectDigestInfo: $.ASN1Decoder<
    ObjectDigestInfo
> | null = null;
let _cached_encoder_for_ObjectDigestInfo: $.ASN1Encoder<
    ObjectDigestInfo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ObjectDigestInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectDigestInfo} The decoded data structure.
 */
export function _decode_ObjectDigestInfo(el: _Element) {
    if (!_cached_decoder_for_ObjectDigestInfo) {
        _cached_decoder_for_ObjectDigestInfo = function (
            el: _Element
        ): ObjectDigestInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let digestedObjectType!: ObjectDigestInfo_digestedObjectType;
            let otherObjectTypeID: OPTIONAL<OBJECT_IDENTIFIER>;
            let digestAlgorithm!: AlgorithmIdentifier;
            let objectDigest!: BIT_STRING;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                digestedObjectType: (_el: _Element): void => {
                    digestedObjectType = _decode_ObjectDigestInfo_digestedObjectType(
                        _el
                    );
                },
                otherObjectTypeID: (_el: _Element): void => {
                    otherObjectTypeID = $._decodeObjectIdentifier(_el);
                },
                digestAlgorithm: (_el: _Element): void => {
                    digestAlgorithm = _decode_AlgorithmIdentifier(_el);
                },
                objectDigest: (_el: _Element): void => {
                    objectDigest = $._decodeBitString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ObjectDigestInfo,
                _extension_additions_list_spec_for_ObjectDigestInfo,
                _root_component_type_list_2_spec_for_ObjectDigestInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ObjectDigestInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ digestedObjectType,
                otherObjectTypeID,
                digestAlgorithm,
                objectDigest,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ObjectDigestInfo(el);
}
/**
 * @summary Encodes a(n) ObjectDigestInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectDigestInfo, encoded as an ASN.1 Element.
 */
export function _encode_ObjectDigestInfo(
    value: ObjectDigestInfo,
    elGetter: $.ASN1Encoder<ObjectDigestInfo>
) {
    if (!_cached_encoder_for_ObjectDigestInfo) {
        _cached_encoder_for_ObjectDigestInfo = function (
            value: ObjectDigestInfo,
            elGetter: $.ASN1Encoder<ObjectDigestInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_ObjectDigestInfo_digestedObjectType(
                                value.digestedObjectType,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.otherObjectTypeID ===
                            undefined
                                ? undefined
                                : $._encodeObjectIdentifier(
                                      value.otherObjectTypeID,
                                      $.BER
                                  ),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.digestAlgorithm,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeBitString(
                                value.objectDigest,
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
    return _cached_encoder_for_ObjectDigestInfo(value, elGetter);
}

/**
 * @summary Holder
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Holder ::= SEQUENCE {
 *   baseCertificateID  [0]  IssuerSerial OPTIONAL,
 *   entityName         [1]  GeneralNames OPTIONAL,
 *   objectDigestInfo   [2]  ObjectDigestInfo OPTIONAL }
 *   (WITH COMPONENTS {..., baseCertificateID  PRESENT } |
 *    WITH COMPONENTS {..., entityName  PRESENT } |
 *    WITH COMPONENTS {..., objectDigestInfo  PRESENT } )
 * ```
 *
 * @class
 */
export class Holder {
    constructor(
        /**
         * @summary `baseCertificateID`.
         * @public
         * @readonly
         */
        readonly baseCertificateID: OPTIONAL<IssuerSerial>,
        /**
         * @summary `entityName`.
         * @public
         * @readonly
         */
        readonly entityName: OPTIONAL<GeneralNames>,
        /**
         * @summary `objectDigestInfo`.
         * @public
         * @readonly
         */
        readonly objectDigestInfo: OPTIONAL<ObjectDigestInfo>
    ) {}

    /**
     * @summary Restructures an object into a Holder
     * @description
     *
     * This takes an `object` and converts it to a `Holder`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Holder`.
     * @returns {Holder}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Holder]: Holder[_K] }>
    ): Holder {
        return new Holder(
            _o.baseCertificateID,
            _o.entityName,
            _o.objectDigestInfo
        );
    }
}
/**
 * @summary The Leading Root Component Types of Holder
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Holder: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "baseCertificateID",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "entityName",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "objectDigestInfo",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Holder
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Holder: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Holder
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Holder: $.ComponentSpec[] = [];
let _cached_decoder_for_Holder: $.ASN1Decoder<Holder> | null = null;
let _cached_encoder_for_Holder: $.ASN1Encoder<Holder> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Holder
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Holder} The decoded data structure.
 */
export function _decode_Holder(el: _Element) {
    if (!_cached_decoder_for_Holder) {
        _cached_decoder_for_Holder = function (el: _Element): Holder {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let baseCertificateID: OPTIONAL<IssuerSerial>;
            let entityName: OPTIONAL<GeneralNames>;
            let objectDigestInfo: OPTIONAL<ObjectDigestInfo>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                baseCertificateID: (_el: _Element): void => {
                    baseCertificateID = $._decode_explicit<IssuerSerial>(
                        () => _decode_IssuerSerial
                    )(_el);
                },
                entityName: (_el: _Element): void => {
                    entityName = $._decode_explicit<GeneralNames>(
                        () => _decode_GeneralNames
                    )(_el);
                },
                objectDigestInfo: (_el: _Element): void => {
                    objectDigestInfo = $._decode_explicit<ObjectDigestInfo>(
                        () => _decode_ObjectDigestInfo
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Holder,
                _extension_additions_list_spec_for_Holder,
                _root_component_type_list_2_spec_for_Holder,
                undefined
            );
            return new Holder(
                /* SEQUENCE_CONSTRUCTOR_CALL */ baseCertificateID,
                entityName,
                objectDigestInfo
            );
        };
    }
    return _cached_decoder_for_Holder(el);
}
/**
 * @summary Encodes a(n) Holder into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Holder, encoded as an ASN.1 Element.
 */
export function _encode_Holder(value: Holder, elGetter: $.ASN1Encoder<Holder>) {
    if (!_cached_encoder_for_Holder) {
        _cached_encoder_for_Holder = function (
            value: Holder,
            elGetter: $.ASN1Encoder<Holder>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.baseCertificateID === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_IssuerSerial,
                                  $.BER
                              )(value.baseCertificateID, $.BER),
                        /* IF_ABSENT  */ value.entityName === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_GeneralNames,
                                  $.BER
                              )(value.entityName, $.BER),
                        /* IF_ABSENT  */ value.objectDigestInfo === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ObjectDigestInfo,
                                  $.BER
                              )(value.objectDigestInfo, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Holder(value, elGetter);
}

/**
 * @summary AttCertIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttCertIssuer ::= [0]  SEQUENCE {
 *   issuerName              GeneralNames OPTIONAL,
 *   baseCertificateID  [0]  IssuerSerial OPTIONAL,
 *   objectDigestInfo   [1]  ObjectDigestInfo OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS {..., issuerName  PRESENT } |
 *    WITH COMPONENTS {..., baseCertificateID  PRESENT } |
 *    WITH COMPONENTS {..., objectDigestInfo  PRESENT } )
 * ```
 *
 * @class
 */
export class AttCertIssuer {
    constructor(
        /**
         * @summary `issuerName`.
         * @public
         * @readonly
         */
        readonly issuerName: OPTIONAL<GeneralNames>,
        /**
         * @summary `baseCertificateID`.
         * @public
         * @readonly
         */
        readonly baseCertificateID: OPTIONAL<IssuerSerial>,
        /**
         * @summary `objectDigestInfo`.
         * @public
         * @readonly
         */
        readonly objectDigestInfo: OPTIONAL<ObjectDigestInfo>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttCertIssuer
     * @description
     *
     * This takes an `object` and converts it to a `AttCertIssuer`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttCertIssuer`.
     * @returns {AttCertIssuer}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AttCertIssuer]: AttCertIssuer[_K] }>
    ): AttCertIssuer {
        return new AttCertIssuer(
            _o.issuerName,
            _o.baseCertificateID,
            _o.objectDigestInfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AttCertIssuer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttCertIssuer: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "issuerName",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "baseCertificateID",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "objectDigestInfo",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AttCertIssuer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttCertIssuer: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AttCertIssuer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttCertIssuer: $.ComponentSpec[] = [];
let _cached_decoder_for_AttCertIssuer: $.ASN1Decoder<
    AttCertIssuer
> | null = null;
let _cached_encoder_for_AttCertIssuer: $.ASN1Encoder<
    AttCertIssuer
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttCertIssuer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttCertIssuer} The decoded data structure.
 */
export function _decode_AttCertIssuer(el: _Element) {
    if (!_cached_decoder_for_AttCertIssuer) {
        _cached_decoder_for_AttCertIssuer = $._decode_explicit<AttCertIssuer>(
            () =>
                function (el: _Element): AttCertIssuer {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let issuerName: OPTIONAL<GeneralNames>;
                    let baseCertificateID: OPTIONAL<IssuerSerial>;
                    let objectDigestInfo: OPTIONAL<ObjectDigestInfo>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        issuerName: (_el: _Element): void => {
                            issuerName = _decode_GeneralNames(_el);
                        },
                        baseCertificateID: (_el: _Element): void => {
                            baseCertificateID = $._decode_explicit<
                                IssuerSerial
                            >(() => _decode_IssuerSerial)(_el);
                        },
                        objectDigestInfo: (_el: _Element): void => {
                            objectDigestInfo = $._decode_explicit<
                                ObjectDigestInfo
                            >(() => _decode_ObjectDigestInfo)(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_AttCertIssuer,
                        _extension_additions_list_spec_for_AttCertIssuer,
                        _root_component_type_list_2_spec_for_AttCertIssuer,
                        (ext: _Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new AttCertIssuer(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ issuerName,
                        baseCertificateID,
                        objectDigestInfo,
                        _unrecognizedExtensionsList
                    );
                }
        );
    }
    return _cached_decoder_for_AttCertIssuer(el);
}
/**
 * @summary Encodes a(n) AttCertIssuer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttCertIssuer, encoded as an ASN.1 Element.
 */
export function _encode_AttCertIssuer(
    value: AttCertIssuer,
    elGetter: $.ASN1Encoder<AttCertIssuer>
) {
    if (!_cached_encoder_for_AttCertIssuer) {
        _cached_encoder_for_AttCertIssuer = $._encode_explicit(
            _TagClass.context,
            0,
            () =>
                function (
                    value: AttCertIssuer,
                    elGetter: $.ASN1Encoder<AttCertIssuer>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* IF_ABSENT  */ value.issuerName ===
                                    undefined
                                        ? undefined
                                        : _encode_GeneralNames(
                                              value.issuerName,
                                              $.BER
                                          ),
                                    /* IF_ABSENT  */ value.baseCertificateID ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              0,
                                              () => _encode_IssuerSerial,
                                              $.BER
                                          )(value.baseCertificateID, $.BER),
                                    /* IF_ABSENT  */ value.objectDigestInfo ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              1,
                                              () => _encode_ObjectDigestInfo,
                                              $.BER
                                          )(value.objectDigestInfo, $.BER),
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
    return _cached_encoder_for_AttCertIssuer(value, elGetter);
}

/**
 * @summary AttCertValidityPeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttCertValidityPeriod ::= SEQUENCE {
 *   notBeforeTime  GeneralizedTime,
 *   notAfterTime   GeneralizedTime,
 *   ... }
 * ```
 *
 * @class
 */
export class AttCertValidityPeriod {
    constructor(
        /**
         * @summary `notBeforeTime`.
         * @public
         * @readonly
         */
        readonly notBeforeTime: GeneralizedTime,
        /**
         * @summary `notAfterTime`.
         * @public
         * @readonly
         */
        readonly notAfterTime: GeneralizedTime,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttCertValidityPeriod
     * @description
     *
     * This takes an `object` and converts it to a `AttCertValidityPeriod`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttCertValidityPeriod`.
     * @returns {AttCertValidityPeriod}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof AttCertValidityPeriod]: AttCertValidityPeriod[_K] }
        >
    ): AttCertValidityPeriod {
        return new AttCertValidityPeriod(
            _o.notBeforeTime,
            _o.notAfterTime,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AttCertValidityPeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttCertValidityPeriod: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "notBeforeTime",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "notAfterTime",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AttCertValidityPeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttCertValidityPeriod: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AttCertValidityPeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttCertValidityPeriod: $.ComponentSpec[] = [];
let _cached_decoder_for_AttCertValidityPeriod: $.ASN1Decoder<
    AttCertValidityPeriod
> | null = null;
let _cached_encoder_for_AttCertValidityPeriod: $.ASN1Encoder<
    AttCertValidityPeriod
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttCertValidityPeriod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttCertValidityPeriod} The decoded data structure.
 */
export function _decode_AttCertValidityPeriod(el: _Element) {
    if (!_cached_decoder_for_AttCertValidityPeriod) {
        _cached_decoder_for_AttCertValidityPeriod = function (
            el: _Element
        ): AttCertValidityPeriod {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AttCertValidityPeriod contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "notBeforeTime";
            sequence[1].name = "notAfterTime";
            let notBeforeTime!: GeneralizedTime;
            let notAfterTime!: GeneralizedTime;
            notBeforeTime = $._decodeGeneralizedTime(sequence[0]);
            notAfterTime = $._decodeGeneralizedTime(sequence[1]);
            return new AttCertValidityPeriod(
                notBeforeTime,
                notAfterTime,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_AttCertValidityPeriod(el);
}
/**
 * @summary Encodes a(n) AttCertValidityPeriod into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttCertValidityPeriod, encoded as an ASN.1 Element.
 */
export function _encode_AttCertValidityPeriod(
    value: AttCertValidityPeriod,
    elGetter: $.ASN1Encoder<AttCertValidityPeriod>
) {
    if (!_cached_encoder_for_AttCertValidityPeriod) {
        _cached_encoder_for_AttCertValidityPeriod = function (
            value: AttCertValidityPeriod,
            elGetter: $.ASN1Encoder<AttCertValidityPeriod>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.notBeforeTime,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.notAfterTime,
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
    return _cached_encoder_for_AttCertValidityPeriod(value, elGetter);
}

/**
 * @summary Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute {ATTRIBUTE:SupportedAttributes} ::= SEQUENCE {
 *   type                ATTRIBUTE.&id({SupportedAttributes}),
 *   values              SET SIZE (0..MAX) OF ATTRIBUTE.&type({SupportedAttributes}{@type}),
 *   ... }
 * ```
 *
 * @class
 */
export class Attribute {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `values`.
         * @public
         * @readonly
         */
        readonly values: UTF8String[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Attribute
     * @description
     *
     * This takes an `object` and converts it to a `Attribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Attribute`.
     * @returns {Attribute}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Attribute]: Attribute[_K] }>
    ): Attribute {
        return new Attribute(
            _o.type_,
            _o.values,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Attribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "values",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Attribute: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Attribute: $.ComponentSpec[] = [];
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
        _cached_decoder_for_Attribute = function (el: _Element): Attribute {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "Attribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "values";
            let type_!: OBJECT_IDENTIFIER;
            let values!: UTF8String[];
            type_ = $._decodeObjectIdentifier(sequence[0]);
            values = $._decodeSetOf<UTF8String>(() => $._decodeUTF8String)(
                sequence[1]
            );
            return new Attribute(type_, values, sequence.slice(2));
        };
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
        _cached_encoder_for_Attribute = function (
            value: Attribute,
            elGetter: $.ASN1Encoder<Attribute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.type_,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSetOf<UTF8String>(
                                () => $._encodeUTF8String,
                                $.BER
                            )(value.values, $.BER),
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
    return _cached_encoder_for_Attribute(value, elGetter);
}

/**
 * @summary TBSAttributeCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSAttributeCertificate ::= SEQUENCE {
 *   version                 AttCertVersion, -- version is v2
 *   holder                  Holder,
 *   issuer                  AttCertIssuer,
 *   signature               AlgorithmIdentifier{{SupportedAlgorithms}},
 *   serialNumber            CertificateSerialNumber,
 *   attrCertValidityPeriod  AttCertValidityPeriod,
 *   attributes              SEQUENCE OF Attribute{{SupportedAttributes}},
 *   issuerUniqueID          UniqueIdentifier OPTIONAL,
 *   ...,
 *   ...,
 *   extensions              Extensions OPTIONAL
 *  }  (CONSTRAINED BY { -- shall be DER encoded -- } )
 * ```
 *
 * @class
 */
export class TBSAttributeCertificate {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: AttCertVersion,
        /**
         * @summary `holder`.
         * @public
         * @readonly
         */
        readonly holder: Holder,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: AttCertIssuer,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: AlgorithmIdentifier,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary `attrCertValidityPeriod`.
         * @public
         * @readonly
         */
        readonly attrCertValidityPeriod: AttCertValidityPeriod,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: Attribute[],
        /**
         * @summary `issuerUniqueID`.
         * @public
         * @readonly
         */
        readonly issuerUniqueID: OPTIONAL<UniqueIdentifier>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a TBSAttributeCertificate
     * @description
     *
     * This takes an `object` and converts it to a `TBSAttributeCertificate`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSAttributeCertificate`.
     * @returns {TBSAttributeCertificate}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof TBSAttributeCertificate]: TBSAttributeCertificate[_K];
            }
        >
    ): TBSAttributeCertificate {
        return new TBSAttributeCertificate(
            _o.version,
            _o.holder,
            _o.issuer,
            _o.signature,
            _o.serialNumber,
            _o.attrCertValidityPeriod,
            _o.attributes,
            _o.issuerUniqueID,
            _o._unrecognizedExtensionsList,
            _o.extensions
        );
    }
}
/**
 * @summary The Leading Root Component Types of TBSAttributeCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBSAttributeCertificate: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "holder",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "issuer",
        false,
        $.hasTag(_TagClass.context, 0),
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
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attrCertValidityPeriod",
        false,
        $.hasTag(_TagClass.universal, 16),
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
    new $.ComponentSpec(
        "issuerUniqueID",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TBSAttributeCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBSAttributeCertificate: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "extensions",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Extension Addition Component Types of TBSAttributeCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBSAttributeCertificate: $.ComponentSpec[] = [];
let _cached_decoder_for_TBSAttributeCertificate: $.ASN1Decoder<
    TBSAttributeCertificate
> | null = null;
let _cached_encoder_for_TBSAttributeCertificate: $.ASN1Encoder<
    TBSAttributeCertificate
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TBSAttributeCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSAttributeCertificate} The decoded data structure.
 */
export function _decode_TBSAttributeCertificate(el: _Element) {
    if (!_cached_decoder_for_TBSAttributeCertificate) {
        _cached_decoder_for_TBSAttributeCertificate = function (
            el: _Element
        ): TBSAttributeCertificate {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: AttCertVersion;
            let holder!: Holder;
            let issuer!: AttCertIssuer;
            let signature!: AlgorithmIdentifier;
            let serialNumber!: CertificateSerialNumber;
            let attrCertValidityPeriod!: AttCertValidityPeriod;
            let attributes!: Attribute[];
            let issuerUniqueID: OPTIONAL<UniqueIdentifier>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let extensions: OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_AttCertVersion(_el);
                },
                holder: (_el: _Element): void => {
                    holder = _decode_Holder(_el);
                },
                issuer: (_el: _Element): void => {
                    issuer = _decode_AttCertIssuer(_el);
                },
                signature: (_el: _Element): void => {
                    signature = _decode_AlgorithmIdentifier(_el);
                },
                serialNumber: (_el: _Element): void => {
                    serialNumber = _decode_CertificateSerialNumber(_el);
                },
                attrCertValidityPeriod: (_el: _Element): void => {
                    attrCertValidityPeriod = _decode_AttCertValidityPeriod(_el);
                },
                attributes: (_el: _Element): void => {
                    attributes = $._decodeSequenceOf<Attribute>(
                        () => _decode_Attribute
                    )(_el);
                },
                issuerUniqueID: (_el: _Element): void => {
                    issuerUniqueID = _decode_UniqueIdentifier(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = _decode_Extensions(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBSAttributeCertificate,
                _extension_additions_list_spec_for_TBSAttributeCertificate,
                _root_component_type_list_2_spec_for_TBSAttributeCertificate,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TBSAttributeCertificate(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                holder,
                issuer,
                signature,
                serialNumber,
                attrCertValidityPeriod,
                attributes,
                issuerUniqueID,
                _unrecognizedExtensionsList,
                extensions
            );
        };
    }
    return _cached_decoder_for_TBSAttributeCertificate(el);
}
/**
 * @summary Encodes a(n) TBSAttributeCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSAttributeCertificate, encoded as an ASN.1 Element.
 */
export function _encode_TBSAttributeCertificate(
    value: TBSAttributeCertificate,
    elGetter: $.ASN1Encoder<TBSAttributeCertificate>
) {
    if (!_cached_encoder_for_TBSAttributeCertificate) {
        _cached_encoder_for_TBSAttributeCertificate = function (
            value: TBSAttributeCertificate,
            elGetter: $.ASN1Encoder<TBSAttributeCertificate>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttCertVersion(
                                value.version,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Holder(
                                value.holder,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AttCertIssuer(
                                value.issuer,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.signature,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AttCertValidityPeriod(
                                value.attrCertValidityPeriod,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSequenceOf<Attribute>(
                                () => _encode_Attribute,
                                $.BER
                            )(value.attributes, $.BER),
                            /* IF_ABSENT  */ value.issuerUniqueID === undefined
                                ? undefined
                                : _encode_UniqueIdentifier(
                                      value.issuerUniqueID,
                                      $.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.extensions === undefined
                                ? undefined
                                : _encode_Extensions(value.extensions, $.BER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TBSAttributeCertificate(value, elGetter);
}

export type AttributeCertificate<> = SIGNED<TBSAttributeCertificate>; // DefinedType
let _cached_decoder_for_AttributeCertificate: $.ASN1Decoder<
    AttributeCertificate
> | null = null;
let _cached_encoder_for_AttributeCertificate: $.ASN1Encoder<
    AttributeCertificate
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificate} The decoded data structure.
 */
export function _decode_AttributeCertificate(el: _Element) {
    if (!_cached_decoder_for_AttributeCertificate) {
        _cached_decoder_for_AttributeCertificate = _get_decoder_for_SIGNED<
            TBSAttributeCertificate
        >(_decode_TBSAttributeCertificate);
    }
    return _cached_decoder_for_AttributeCertificate(el);
}
/**
 * @summary Encodes a(n) AttributeCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificate, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCertificate(
    value: AttributeCertificate,
    elGetter: $.ASN1Encoder<AttributeCertificate>
) {
    if (!_cached_encoder_for_AttributeCertificate) {
        _cached_encoder_for_AttributeCertificate = _get_encoder_for_SIGNED<
            TBSAttributeCertificate
        >(_encode_TBSAttributeCertificate);
    }
    return _cached_encoder_for_AttributeCertificate(value, elGetter);
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

export type DistinguishedName<> = RDNSequence; // DefinedType
let _cached_decoder_for_DistinguishedName: $.ASN1Decoder<
    DistinguishedName
> | null = null;
let _cached_encoder_for_DistinguishedName: $.ASN1Encoder<
    DistinguishedName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DistinguishedName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DistinguishedName} The decoded data structure.
 */
export function _decode_DistinguishedName(el: _Element) {
    if (!_cached_decoder_for_DistinguishedName) {
        _cached_decoder_for_DistinguishedName = _decode_RDNSequence;
    }
    return _cached_decoder_for_DistinguishedName(el);
}
/**
 * @summary Encodes a(n) DistinguishedName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistinguishedName, encoded as an ASN.1 Element.
 */
export function _encode_DistinguishedName(
    value: DistinguishedName,
    elGetter: $.ASN1Encoder<DistinguishedName>
) {
    if (!_cached_encoder_for_DistinguishedName) {
        _cached_encoder_for_DistinguishedName = _encode_RDNSequence;
    }
    return _cached_encoder_for_DistinguishedName(value, elGetter);
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
 * @summary CRLReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLReason ::= ENUMERATED {
 *   unspecified          (0),
 *   keyCompromise        (1),
 *   cACompromise         (2),
 *   affiliationChanged   (3),
 *   superseded           (4),
 *   cessationOfOperation (5),
 *   certificateHold      (6),
 *   removeFromCRL        (8),
 *   privilegeWithdrawn   (9),
 *   aACompromise         (10),
 *   ...,
 *   weakAlgorithmOrKey   (11) }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_CRLReason {
    unspecified = 0,
    keyCompromise = 1,
    cACompromise = 2,
    affiliationChanged = 3,
    superseded = 4,
    cessationOfOperation = 5,
    certificateHold = 6,
    removeFromCRL = 8,
    privilegeWithdrawn = 9,
    aACompromise = 10,
    weakAlgorithmOrKey = 11,
}
/**
 * @summary CRLReason
 */
export type CRLReason = _enum_for_CRLReason | ENUMERATED;
/**
 * @summary CRLReason_unspecified
 * @constant
 * @type {number}
 */
export const CRLReason_unspecified: CRLReason = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_keyCompromise
 * @constant
 * @type {number}
 */
export const CRLReason_keyCompromise: CRLReason = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_cACompromise
 * @constant
 * @type {number}
 */
export const CRLReason_cACompromise: CRLReason = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_affiliationChanged
 * @constant
 * @type {number}
 */
export const CRLReason_affiliationChanged: CRLReason = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_superseded
 * @constant
 * @type {number}
 */
export const CRLReason_superseded: CRLReason = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_cessationOfOperation
 * @constant
 * @type {number}
 */
export const CRLReason_cessationOfOperation: CRLReason = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_certificateHold
 * @constant
 * @type {number}
 */
export const CRLReason_certificateHold: CRLReason = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_removeFromCRL
 * @constant
 * @type {number}
 */
export const CRLReason_removeFromCRL: CRLReason = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_privilegeWithdrawn
 * @constant
 * @type {number}
 */
export const CRLReason_privilegeWithdrawn: CRLReason = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_aACompromise
 * @constant
 * @type {number}
 */
export const CRLReason_aACompromise: CRLReason = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_weakAlgorithmOrKey
 * @constant
 * @type {number}
 */
export const CRLReason_weakAlgorithmOrKey: CRLReason = 11; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_CRLReason: $.ASN1Decoder<CRLReason> | null = null;
let _cached_encoder_for_CRLReason: $.ASN1Encoder<CRLReason> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CRLReason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CRLReason} The decoded data structure.
 */
export function _decode_CRLReason(el: _Element) {
    if (!_cached_decoder_for_CRLReason) {
        _cached_decoder_for_CRLReason = $._decodeEnumerated;
    }
    return _cached_decoder_for_CRLReason(el);
}
/**
 * @summary Encodes a(n) CRLReason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLReason, encoded as an ASN.1 Element.
 */
export function _encode_CRLReason(
    value: CRLReason,
    elGetter: $.ASN1Encoder<CRLReason>
) {
    if (!_cached_encoder_for_CRLReason) {
        _cached_encoder_for_CRLReason = $._encodeEnumerated;
    }
    return _cached_encoder_for_CRLReason(value, elGetter);
}

/* END_MODULE PKI-Stub */
/* eslint-enable */
