/**
 * @module Wrapper
 * @summary The ASN.1 module `Wrapper`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.wrapper.9
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
    INTEGER,
    joint_iso_itu_t,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    TRUE_BIT,
    TYPE_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AUTHEN_ENCRYPT,
    ENCIPHERED,
    ICV_Invoke,
    Signed,
    _get_decoder_for_AUTHEN_ENCRYPT,
    _get_decoder_for_ENCIPHERED,
    _get_decoder_for_ICV_Invoke,
    _get_decoder_for_Signed,
    _get_encoder_for_AUTHEN_ENCRYPT,
    _get_encoder_for_ENCIPHERED,
    _get_encoder_for_ICV_Invoke,
    _get_encoder_for_Signed,
} from "./CryptoTools";
import {
    AlgoInvoke,
    ALGORITHM,
    AlgorithmIdentifier,
    AlgorithmWithInvoke,
    _decode_AlgoInvoke,
    _decode_AlgorithmIdentifier,
    _decode_AlgorithmWithInvoke,
    _encode_AlgoInvoke,
    _encode_AlgorithmIdentifier,
    _encode_AlgorithmWithInvoke,
} from "./PKI-Stub";
export {
    AUTHEN_ENCRYPT,
    ENCIPHERED,
    ICV_Invoke,
    Signed,
    _get_decoder_for_AUTHEN_ENCRYPT,
    _get_decoder_for_ENCIPHERED,
    _get_decoder_for_ICV_Invoke,
    _get_decoder_for_Signed,
    _get_encoder_for_AUTHEN_ENCRYPT,
    _get_encoder_for_ENCIPHERED,
    _get_encoder_for_ICV_Invoke,
    _get_encoder_for_Signed,
} from "./CryptoTools";
export {
    AlgoInvoke,
    ALGORITHM,
    AlgorithmIdentifier,
    AlgorithmWithInvoke,
    AttributeCertificate,
    id_wrprot,
    PkiPath,
    _decode_AlgoInvoke,
    _decode_AlgorithmIdentifier,
    _decode_AlgorithmWithInvoke,
    _decode_AttributeCertificate,
    _decode_PkiPath,
    _encode_AlgoInvoke,
    _encode_AlgorithmIdentifier,
    _encode_AlgorithmWithInvoke,
    _encode_AttributeCertificate,
    _encode_PkiPath,
} from "./PKI-Stub";
export { SupportedProtSet } from "./ProtProtocols";

/**
 * @summary Version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Version  ::=  BIT STRING {
 *   v1 (0)  -- version 1
 *   }
 * ```
 */
export type Version = BIT_STRING;
/**
 * @summary Version_v1
 * @constant
 */
export const Version_v1: number = 0; /* LONG_NAMED_BIT */
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
        _cached_decoder_for_Version = $._decodeBitString;
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
        _cached_encoder_for_Version = $._encodeBitString;
    }
    return _cached_encoder_for_Version(value, elGetter);
}

/**
 * @summary WRAPPED_PROT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WRAPPED-PROT ::= TYPE-IDENTIFIER
 * ```
 *
 * @interface
 */
export type WRAPPED_PROT = TYPE_IDENTIFIER;

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

export type DER_PkiPath<> = OCTET_STRING; // OctetStringType
let _cached_decoder_for_DER_PkiPath: $.ASN1Decoder<DER_PkiPath> | null = null;
let _cached_encoder_for_DER_PkiPath: $.ASN1Encoder<DER_PkiPath> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DER_PkiPath
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DER_PkiPath} The decoded data structure.
 */
export function _decode_DER_PkiPath(el: _Element) {
    if (!_cached_decoder_for_DER_PkiPath) {
        _cached_decoder_for_DER_PkiPath = $._decodeOctetString;
    }
    return _cached_decoder_for_DER_PkiPath(el);
}
/**
 * @summary Encodes a(n) DER_PkiPath into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DER_PkiPath, encoded as an ASN.1 Element.
 */
export function _encode_DER_PkiPath(
    value: DER_PkiPath,
    elGetter: $.ASN1Encoder<DER_PkiPath>
) {
    if (!_cached_encoder_for_DER_PkiPath) {
        _cached_encoder_for_DER_PkiPath = $._encodeOctetString;
    }
    return _cached_encoder_for_DER_PkiPath(value, elGetter);
}

/**
 * @summary AssoID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssoID  ::=  INTEGER (0..32767)
 * ```
 */
export type AssoID = INTEGER;
let _cached_decoder_for_AssoID: $.ASN1Decoder<AssoID> | null = null;
let _cached_encoder_for_AssoID: $.ASN1Encoder<AssoID> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AssoID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssoID} The decoded data structure.
 */
export function _decode_AssoID(el: _Element) {
    if (!_cached_decoder_for_AssoID) {
        _cached_decoder_for_AssoID = $._decodeInteger;
    }
    return _cached_decoder_for_AssoID(el);
}
/**
 * @summary Encodes a(n) AssoID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssoID, encoded as an ASN.1 Element.
 */
export function _encode_AssoID(value: AssoID, elGetter: $.ASN1Encoder<AssoID>) {
    if (!_cached_encoder_for_AssoID) {
        _cached_encoder_for_AssoID = $._encodeInteger;
    }
    return _cached_encoder_for_AssoID(value, elGetter);
}

export type TimeStamp<> = GeneralizedTime; // GeneralizedTime
let _cached_decoder_for_TimeStamp: $.ASN1Decoder<TimeStamp> | null = null;
let _cached_encoder_for_TimeStamp: $.ASN1Encoder<TimeStamp> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TimeStamp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeStamp} The decoded data structure.
 */
export function _decode_TimeStamp(el: _Element) {
    if (!_cached_decoder_for_TimeStamp) {
        _cached_decoder_for_TimeStamp = $._decodeGeneralizedTime;
    }
    return _cached_decoder_for_TimeStamp(el);
}
/**
 * @summary Encodes a(n) TimeStamp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeStamp, encoded as an ASN.1 Element.
 */
export function _encode_TimeStamp(
    value: TimeStamp,
    elGetter: $.ASN1Encoder<TimeStamp>
) {
    if (!_cached_encoder_for_TimeStamp) {
        _cached_encoder_for_TimeStamp = $._encodeGeneralizedTime;
    }
    return _cached_encoder_for_TimeStamp(value, elGetter);
}

/**
 * @summary TbsHandshakeReq_encr_mode_non_aead
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeReq-encr-mode-non-aead ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class TbsHandshakeReq_encr_mode_non_aead {
    constructor(
        /**
         * @summary `encr`.
         * @public
         * @readonly
         */
        readonly encr: OPTIONAL<AlgorithmIdentifier[]>,
        /**
         * @summary `icvAlgID`.
         * @public
         * @readonly
         */
        readonly icvAlgID: AlgorithmIdentifier[]
    ) {}

    /**
     * @summary Restructures an object into a TbsHandshakeReq_encr_mode_non_aead
     * @description
     *
     * This takes an `object` and converts it to a `TbsHandshakeReq_encr_mode_non_aead`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbsHandshakeReq_encr_mode_non_aead`.
     * @returns {TbsHandshakeReq_encr_mode_non_aead}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof TbsHandshakeReq_encr_mode_non_aead]: TbsHandshakeReq_encr_mode_non_aead[_K];
            }
        >
    ): TbsHandshakeReq_encr_mode_non_aead {
        return new TbsHandshakeReq_encr_mode_non_aead(_o.encr, _o.icvAlgID);
    }
}
/**
 * @summary The Leading Root Component Types of TbsHandshakeReq_encr_mode_non_aead
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbsHandshakeReq_encr_mode_non_aead: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "encr",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "icvAlgID",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TbsHandshakeReq_encr_mode_non_aead
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsHandshakeReq_encr_mode_non_aead: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TbsHandshakeReq_encr_mode_non_aead
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsHandshakeReq_encr_mode_non_aead: $.ComponentSpec[] = [];
let _cached_decoder_for_TbsHandshakeReq_encr_mode_non_aead: $.ASN1Decoder<
    TbsHandshakeReq_encr_mode_non_aead
> | null = null;
let _cached_encoder_for_TbsHandshakeReq_encr_mode_non_aead: $.ASN1Encoder<
    TbsHandshakeReq_encr_mode_non_aead
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeReq_encr_mode_non_aead
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeReq_encr_mode_non_aead} The decoded data structure.
 */
export function _decode_TbsHandshakeReq_encr_mode_non_aead(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeReq_encr_mode_non_aead) {
        _cached_decoder_for_TbsHandshakeReq_encr_mode_non_aead = function (
            el: _Element
        ): TbsHandshakeReq_encr_mode_non_aead {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let encr: OPTIONAL<AlgorithmIdentifier[]>;
            let icvAlgID!: AlgorithmIdentifier[];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                encr: (_el: _Element): void => {
                    encr = $._decode_implicit<AlgorithmIdentifier[]>(() =>
                        $._decodeSequenceOf<AlgorithmIdentifier>(
                            () => _decode_AlgorithmIdentifier
                        )
                    )(_el);
                },
                icvAlgID: (_el: _Element): void => {
                    icvAlgID = $._decode_implicit<AlgorithmIdentifier[]>(() =>
                        $._decodeSequenceOf<AlgorithmIdentifier>(
                            () => _decode_AlgorithmIdentifier
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TbsHandshakeReq_encr_mode_non_aead,
                _extension_additions_list_spec_for_TbsHandshakeReq_encr_mode_non_aead,
                _root_component_type_list_2_spec_for_TbsHandshakeReq_encr_mode_non_aead,
                undefined
            );
            return new TbsHandshakeReq_encr_mode_non_aead(
                /* SEQUENCE_CONSTRUCTOR_CALL */ encr,
                icvAlgID
            );
        };
    }
    return _cached_decoder_for_TbsHandshakeReq_encr_mode_non_aead(el);
}
/**
 * @summary Encodes a(n) TbsHandshakeReq_encr_mode_non_aead into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeReq_encr_mode_non_aead, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeReq_encr_mode_non_aead(
    value: TbsHandshakeReq_encr_mode_non_aead,
    elGetter: $.ASN1Encoder<TbsHandshakeReq_encr_mode_non_aead>
) {
    if (!_cached_encoder_for_TbsHandshakeReq_encr_mode_non_aead) {
        _cached_encoder_for_TbsHandshakeReq_encr_mode_non_aead = function (
            value: TbsHandshakeReq_encr_mode_non_aead,
            elGetter: $.ASN1Encoder<TbsHandshakeReq_encr_mode_non_aead>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.encr === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      $._encodeSequenceOf<AlgorithmIdentifier>(
                                          () => _encode_AlgorithmIdentifier,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.encr, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () =>
                                $._encodeSequenceOf<AlgorithmIdentifier>(
                                    () => _encode_AlgorithmIdentifier,
                                    $.BER
                                ),
                            $.BER
                        )(value.icvAlgID, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TbsHandshakeReq_encr_mode_non_aead(
        value,
        elGetter
    );
}

/**
 * @summary TbsHandshakeReq_encr_mode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeReq-encr-mode ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TbsHandshakeReq_encr_mode =
    | { aead: AlgorithmIdentifier[] } /* CHOICE_ALT_ROOT */
    | { non_aead: TbsHandshakeReq_encr_mode_non_aead } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_TbsHandshakeReq_encr_mode: $.ASN1Decoder<
    TbsHandshakeReq_encr_mode
> | null = null;
let _cached_encoder_for_TbsHandshakeReq_encr_mode: $.ASN1Encoder<
    TbsHandshakeReq_encr_mode
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeReq_encr_mode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeReq_encr_mode} The decoded data structure.
 */
export function _decode_TbsHandshakeReq_encr_mode(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeReq_encr_mode) {
        _cached_decoder_for_TbsHandshakeReq_encr_mode = $._decode_extensible_choice<
            TbsHandshakeReq_encr_mode
        >({
            "CONTEXT 2": [
                "aead",
                $._decode_implicit<AlgorithmIdentifier[]>(() =>
                    $._decodeSequenceOf<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )
                ),
            ],
            "CONTEXT 3": [
                "non_aead",
                $._decode_implicit<TbsHandshakeReq_encr_mode_non_aead>(
                    () => _decode_TbsHandshakeReq_encr_mode_non_aead
                ),
            ],
        });
    }
    return _cached_decoder_for_TbsHandshakeReq_encr_mode(el);
}
/**
 * @summary Encodes a(n) TbsHandshakeReq_encr_mode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeReq_encr_mode, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeReq_encr_mode(
    value: TbsHandshakeReq_encr_mode,
    elGetter: $.ASN1Encoder<TbsHandshakeReq_encr_mode>
) {
    if (!_cached_encoder_for_TbsHandshakeReq_encr_mode) {
        _cached_encoder_for_TbsHandshakeReq_encr_mode = $._encode_choice<
            TbsHandshakeReq_encr_mode
        >(
            {
                aead: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSequenceOf<AlgorithmIdentifier>(
                            () => _encode_AlgorithmIdentifier,
                            $.BER
                        ),
                    $.BER
                ),
                non_aead: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_TbsHandshakeReq_encr_mode_non_aead,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TbsHandshakeReq_encr_mode(value, elGetter);
}

export type DER_AttributeCertificate<> = OCTET_STRING; // OctetStringType
let _cached_decoder_for_DER_AttributeCertificate: $.ASN1Decoder<
    DER_AttributeCertificate
> | null = null;
let _cached_encoder_for_DER_AttributeCertificate: $.ASN1Encoder<
    DER_AttributeCertificate
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DER_AttributeCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DER_AttributeCertificate} The decoded data structure.
 */
export function _decode_DER_AttributeCertificate(el: _Element) {
    if (!_cached_decoder_for_DER_AttributeCertificate) {
        _cached_decoder_for_DER_AttributeCertificate = $._decodeOctetString;
    }
    return _cached_decoder_for_DER_AttributeCertificate(el);
}
/**
 * @summary Encodes a(n) DER_AttributeCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DER_AttributeCertificate, encoded as an ASN.1 Element.
 */
export function _encode_DER_AttributeCertificate(
    value: DER_AttributeCertificate,
    elGetter: $.ASN1Encoder<DER_AttributeCertificate>
) {
    if (!_cached_encoder_for_DER_AttributeCertificate) {
        _cached_encoder_for_DER_AttributeCertificate = $._encodeOctetString;
    }
    return _cached_encoder_for_DER_AttributeCertificate(value, elGetter);
}

/**
 * @summary WrappedProt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WrappedProt {WRAPPED-PROT:SupportedProtSet} ::= SEQUENCE {
 *   id    WRAPPED-PROT.&id({SupportedProtSet}),
 *   prot  WRAPPED-PROT.&Type({SupportedProtSet}{@id}),
 *   ... }
 * ```
 *
 * @class
 */
export class WrappedProt {
    constructor(
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        readonly id: OBJECT_IDENTIFIER,
        /**
         * @summary `prot`.
         * @public
         * @readonly
         */
        readonly prot: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a WrappedProt
     * @description
     *
     * This takes an `object` and converts it to a `WrappedProt`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WrappedProt`.
     * @returns {WrappedProt}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof WrappedProt]: WrappedProt[_K] }>
    ): WrappedProt {
        return new WrappedProt(_o.id, _o.prot, _o._unrecognizedExtensionsList);
    }
}
/**
 * @summary The Leading Root Component Types of WrappedProt
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_WrappedProt: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "id",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("prot", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of WrappedProt
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_WrappedProt: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of WrappedProt
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_WrappedProt: $.ComponentSpec[] = [];
let _cached_decoder_for_WrappedProt: $.ASN1Decoder<WrappedProt> | null = null;
let _cached_encoder_for_WrappedProt: $.ASN1Encoder<WrappedProt> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) WrappedProt
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WrappedProt} The decoded data structure.
 */
export function _decode_WrappedProt(el: _Element) {
    if (!_cached_decoder_for_WrappedProt) {
        _cached_decoder_for_WrappedProt = function (el: _Element): WrappedProt {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "WrappedProt contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "id";
            sequence[1].name = "prot";
            let id!: OBJECT_IDENTIFIER;
            let prot!: _Element;
            id = $._decodeObjectIdentifier(sequence[0]);
            prot = $._decodeAny(sequence[1]);
            return new WrappedProt(id, prot, sequence.slice(2));
        };
    }
    return _cached_decoder_for_WrappedProt(el);
}
/**
 * @summary Encodes a(n) WrappedProt into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WrappedProt, encoded as an ASN.1 Element.
 */
export function _encode_WrappedProt(
    value: WrappedProt,
    elGetter: $.ASN1Encoder<WrappedProt>
) {
    if (!_cached_encoder_for_WrappedProt) {
        _cached_encoder_for_WrappedProt = function (
            value: WrappedProt,
            elGetter: $.ASN1Encoder<WrappedProt>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.id,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeAny(value.prot, $.BER),
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
    return _cached_encoder_for_WrappedProt(value, elGetter);
}

/**
 * @summary TbsHandshakeReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeReq ::= SEQUENCE {
 *   version        Version DEFAULT {v1},
 *   prProt         WRAPPED-PROT.&id ({SupportedProtSet}),
 *   sigAlg         AlgorithmIdentifier {{SupportedSignatureAlgorithms}},
 *   altSigAlg  [0] AlgorithmIdentifier {{SupportedAltSignatureAlgorithms}} OPTIONAL,
 *   pkiPath        DER-PkiPath,
 *   assoID         AssoID,
 *   time           TimeStamp,
 *   keyEst         AlgorithmWithInvoke{{SupportedKeyEstablishmentAlgos}},
 *   altKeyEst  [1] AlgorithmWithInvoke{{SupportedAltKeyEstablishmentAlgos}} OPTIONAL,
 *   encr-mode      CHOICE {
 *     aead       [2] SEQUENCE SIZE (1..MAX) OF
 *       algo           AlgorithmIdentifier{{SupportedAeadAlgorithms}},
 *     non-aead   [3] SEQUENCE {
 *       encr       [0] SEQUENCE SIZE (1..MAX) OF
 *         algo           AlgorithmIdentifier{{SupportedSymmetricKeyAlgorithms}}
 *                          OPTIONAL,
 *       icvAlgID   [1] SEQUENCE SIZE (1..MAX) OF
 *         algo           AlgorithmIdentifier{{SupportedIcvAlgorithms}} },
 *     ... },
 *   attCert        DER-AttributeCertificate OPTIONAL,
 *   applData   [4] WrappedProt{{SupportedProtSet}} OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class TbsHandshakeReq {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `prProt`.
         * @public
         * @readonly
         */
        readonly prProt: OBJECT_IDENTIFIER,
        /**
         * @summary `sigAlg`.
         * @public
         * @readonly
         */
        readonly sigAlg: AlgorithmIdentifier,
        /**
         * @summary `altSigAlg`.
         * @public
         * @readonly
         */
        readonly altSigAlg: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `pkiPath`.
         * @public
         * @readonly
         */
        readonly pkiPath: DER_PkiPath,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp,
        /**
         * @summary `keyEst`.
         * @public
         * @readonly
         */
        readonly keyEst: AlgorithmWithInvoke,
        /**
         * @summary `altKeyEst`.
         * @public
         * @readonly
         */
        readonly altKeyEst: OPTIONAL<AlgorithmWithInvoke>,
        /**
         * @summary `encr_mode`.
         * @public
         * @readonly
         */
        readonly encr_mode: TbsHandshakeReq_encr_mode,
        /**
         * @summary `attCert`.
         * @public
         * @readonly
         */
        readonly attCert: OPTIONAL<DER_AttributeCertificate>,
        /**
         * @summary `applData`.
         * @public
         * @readonly
         */
        readonly applData: OPTIONAL<WrappedProt>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TbsHandshakeReq
     * @description
     *
     * This takes an `object` and converts it to a `TbsHandshakeReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbsHandshakeReq`.
     * @returns {TbsHandshakeReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TbsHandshakeReq]: TbsHandshakeReq[_K] }>
    ): TbsHandshakeReq {
        return new TbsHandshakeReq(
            _o.version,
            _o.prProt,
            _o.sigAlg,
            _o.altSigAlg,
            _o.pkiPath,
            _o.assoID,
            _o.time,
            _o.keyEst,
            _o.altKeyEst,
            _o.encr_mode,
            _o.attCert,
            _o.applData,
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
        return (() => {
            const _ret = new Uint8ClampedArray(Math.max(0));
            _ret[Version_v1] = TRUE_BIT;
            return _ret;
        })();
    }
}
/**
 * @summary The Leading Root Component Types of TbsHandshakeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbsHandshakeReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "prProt",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sigAlg",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "altSigAlg",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pkiPath",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "keyEst",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "altKeyEst",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec("encr-mode", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "attCert",
        true,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "applData",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TbsHandshakeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsHandshakeReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TbsHandshakeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsHandshakeReq: $.ComponentSpec[] = [];
let _cached_decoder_for_TbsHandshakeReq: $.ASN1Decoder<
    TbsHandshakeReq
> | null = null;
let _cached_encoder_for_TbsHandshakeReq: $.ASN1Encoder<
    TbsHandshakeReq
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeReq} The decoded data structure.
 */
export function _decode_TbsHandshakeReq(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeReq) {
        _cached_decoder_for_TbsHandshakeReq = function (
            el: _Element
        ): TbsHandshakeReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<Version> =
                TbsHandshakeReq._default_value_for_version;
            let prProt!: OBJECT_IDENTIFIER;
            let sigAlg!: AlgorithmIdentifier;
            let altSigAlg: OPTIONAL<AlgorithmIdentifier>;
            let pkiPath!: DER_PkiPath;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let keyEst!: AlgorithmWithInvoke;
            let altKeyEst: OPTIONAL<AlgorithmWithInvoke>;
            let encr_mode!: TbsHandshakeReq_encr_mode;
            let attCert: OPTIONAL<DER_AttributeCertificate>;
            let applData: OPTIONAL<WrappedProt>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                prProt: (_el: _Element): void => {
                    prProt = $._decodeObjectIdentifier(_el);
                },
                sigAlg: (_el: _Element): void => {
                    sigAlg = _decode_AlgorithmIdentifier(_el);
                },
                altSigAlg: (_el: _Element): void => {
                    altSigAlg = $._decode_implicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                pkiPath: (_el: _Element): void => {
                    pkiPath = _decode_DER_PkiPath(_el);
                },
                assoID: (_el: _Element): void => {
                    assoID = _decode_AssoID(_el);
                },
                time: (_el: _Element): void => {
                    time = _decode_TimeStamp(_el);
                },
                keyEst: (_el: _Element): void => {
                    keyEst = _decode_AlgorithmWithInvoke(_el);
                },
                altKeyEst: (_el: _Element): void => {
                    altKeyEst = $._decode_implicit<AlgorithmWithInvoke>(
                        () => _decode_AlgorithmWithInvoke
                    )(_el);
                },
                "encr-mode": (_el: _Element): void => {
                    encr_mode = _decode_TbsHandshakeReq_encr_mode(_el);
                },
                attCert: (_el: _Element): void => {
                    attCert = _decode_DER_AttributeCertificate(_el);
                },
                applData: (_el: _Element): void => {
                    applData = $._decode_implicit<WrappedProt>(
                        () => _decode_WrappedProt
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TbsHandshakeReq,
                _extension_additions_list_spec_for_TbsHandshakeReq,
                _root_component_type_list_2_spec_for_TbsHandshakeReq,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TbsHandshakeReq(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                prProt,
                sigAlg,
                altSigAlg,
                pkiPath,
                assoID,
                time,
                keyEst,
                altKeyEst,
                encr_mode,
                attCert,
                applData,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TbsHandshakeReq(el);
}
/**
 * @summary Encodes a(n) TbsHandshakeReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeReq, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeReq(
    value: TbsHandshakeReq,
    elGetter: $.ASN1Encoder<TbsHandshakeReq>
) {
    if (!_cached_encoder_for_TbsHandshakeReq) {
        _cached_encoder_for_TbsHandshakeReq = function (
            value: TbsHandshakeReq,
            elGetter: $.ASN1Encoder<TbsHandshakeReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                TbsHandshakeReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_Version(value.version, $.BER),
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.prProt,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.sigAlg,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.altSigAlg === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_AlgorithmIdentifier,
                                      $.BER
                                  )(value.altSigAlg, $.BER),
                            /* REQUIRED   */ _encode_DER_PkiPath(
                                value.pkiPath,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AssoID(
                                value.assoID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_TimeStamp(
                                value.time,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AlgorithmWithInvoke(
                                value.keyEst,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.altKeyEst === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_AlgorithmWithInvoke,
                                      $.BER
                                  )(value.altKeyEst, $.BER),
                            /* REQUIRED   */ _encode_TbsHandshakeReq_encr_mode(
                                value.encr_mode,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.attCert === undefined
                                ? undefined
                                : _encode_DER_AttributeCertificate(
                                      value.attCert,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.applData === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_WrappedProt,
                                      $.BER
                                  )(value.applData, $.BER),
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
    return _cached_encoder_for_TbsHandshakeReq(value, elGetter);
}

export type HandshakeReq<> = Signed<TbsHandshakeReq>; // DefinedType
let _cached_decoder_for_HandshakeReq: $.ASN1Decoder<HandshakeReq> | null = null;
let _cached_encoder_for_HandshakeReq: $.ASN1Encoder<HandshakeReq> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) HandshakeReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HandshakeReq} The decoded data structure.
 */
export function _decode_HandshakeReq(el: _Element) {
    if (!_cached_decoder_for_HandshakeReq) {
        _cached_decoder_for_HandshakeReq = _get_decoder_for_Signed<
            TbsHandshakeReq
        >(_decode_TbsHandshakeReq);
    }
    return _cached_decoder_for_HandshakeReq(el);
}
/**
 * @summary Encodes a(n) HandshakeReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandshakeReq, encoded as an ASN.1 Element.
 */
export function _encode_HandshakeReq(
    value: HandshakeReq,
    elGetter: $.ASN1Encoder<HandshakeReq>
) {
    if (!_cached_encoder_for_HandshakeReq) {
        _cached_encoder_for_HandshakeReq = _get_encoder_for_Signed<
            TbsHandshakeReq
        >(_encode_TbsHandshakeReq);
    }
    return _cached_encoder_for_HandshakeReq(value, elGetter);
}

/**
 * @summary TbsHandshakeAcc_sigSel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeAcc-sigSel ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TbsHandshakeAcc_sigSel =
    | { sigAlg: AlgorithmIdentifier } /* CHOICE_ALT_ROOT */
    | { altSigAlg: AlgorithmIdentifier } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_TbsHandshakeAcc_sigSel: $.ASN1Decoder<
    TbsHandshakeAcc_sigSel
> | null = null;
let _cached_encoder_for_TbsHandshakeAcc_sigSel: $.ASN1Encoder<
    TbsHandshakeAcc_sigSel
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeAcc_sigSel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeAcc_sigSel} The decoded data structure.
 */
export function _decode_TbsHandshakeAcc_sigSel(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeAcc_sigSel) {
        _cached_decoder_for_TbsHandshakeAcc_sigSel = $._decode_inextensible_choice<
            TbsHandshakeAcc_sigSel
        >({
            "UNIVERSAL 16": ["sigAlg", _decode_AlgorithmIdentifier],
            "CONTEXT 0": [
                "altSigAlg",
                $._decode_implicit<AlgorithmIdentifier>(
                    () => _decode_AlgorithmIdentifier
                ),
            ],
        });
    }
    return _cached_decoder_for_TbsHandshakeAcc_sigSel(el);
}
/**
 * @summary Encodes a(n) TbsHandshakeAcc_sigSel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeAcc_sigSel, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeAcc_sigSel(
    value: TbsHandshakeAcc_sigSel,
    elGetter: $.ASN1Encoder<TbsHandshakeAcc_sigSel>
) {
    if (!_cached_encoder_for_TbsHandshakeAcc_sigSel) {
        _cached_encoder_for_TbsHandshakeAcc_sigSel = $._encode_choice<
            TbsHandshakeAcc_sigSel
        >(
            {
                sigAlg: _encode_AlgorithmIdentifier,
                altSigAlg: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AlgorithmIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TbsHandshakeAcc_sigSel(value, elGetter);
}

/**
 * @summary TbsHandshakeAcc_keyEstSel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeAcc-keyEstSel ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TbsHandshakeAcc_keyEstSel =
    | { keyEst: AlgorithmWithInvoke } /* CHOICE_ALT_ROOT */
    | { altKeyEst: AlgorithmWithInvoke } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_TbsHandshakeAcc_keyEstSel: $.ASN1Decoder<
    TbsHandshakeAcc_keyEstSel
> | null = null;
let _cached_encoder_for_TbsHandshakeAcc_keyEstSel: $.ASN1Encoder<
    TbsHandshakeAcc_keyEstSel
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeAcc_keyEstSel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeAcc_keyEstSel} The decoded data structure.
 */
export function _decode_TbsHandshakeAcc_keyEstSel(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeAcc_keyEstSel) {
        _cached_decoder_for_TbsHandshakeAcc_keyEstSel = $._decode_inextensible_choice<
            TbsHandshakeAcc_keyEstSel
        >({
            "UNIVERSAL 16": ["keyEst", _decode_AlgorithmWithInvoke],
            "CONTEXT 1": [
                "altKeyEst",
                $._decode_implicit<AlgorithmWithInvoke>(
                    () => _decode_AlgorithmWithInvoke
                ),
            ],
        });
    }
    return _cached_decoder_for_TbsHandshakeAcc_keyEstSel(el);
}
/**
 * @summary Encodes a(n) TbsHandshakeAcc_keyEstSel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeAcc_keyEstSel, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeAcc_keyEstSel(
    value: TbsHandshakeAcc_keyEstSel,
    elGetter: $.ASN1Encoder<TbsHandshakeAcc_keyEstSel>
) {
    if (!_cached_encoder_for_TbsHandshakeAcc_keyEstSel) {
        _cached_encoder_for_TbsHandshakeAcc_keyEstSel = $._encode_choice<
            TbsHandshakeAcc_keyEstSel
        >(
            {
                keyEst: _encode_AlgorithmWithInvoke,
                altKeyEst: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AlgorithmWithInvoke,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TbsHandshakeAcc_keyEstSel(value, elGetter);
}

/**
 * @summary TbsHandshakeAcc_encr_mode_non_aead
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeAcc-encr-mode-non-aead ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class TbsHandshakeAcc_encr_mode_non_aead {
    constructor(
        /**
         * @summary `encr`.
         * @public
         * @readonly
         */
        readonly encr: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `icvAlgID`.
         * @public
         * @readonly
         */
        readonly icvAlgID: AlgorithmIdentifier
    ) {}

    /**
     * @summary Restructures an object into a TbsHandshakeAcc_encr_mode_non_aead
     * @description
     *
     * This takes an `object` and converts it to a `TbsHandshakeAcc_encr_mode_non_aead`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbsHandshakeAcc_encr_mode_non_aead`.
     * @returns {TbsHandshakeAcc_encr_mode_non_aead}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof TbsHandshakeAcc_encr_mode_non_aead]: TbsHandshakeAcc_encr_mode_non_aead[_K];
            }
        >
    ): TbsHandshakeAcc_encr_mode_non_aead {
        return new TbsHandshakeAcc_encr_mode_non_aead(_o.encr, _o.icvAlgID);
    }
}
/**
 * @summary The Leading Root Component Types of TbsHandshakeAcc_encr_mode_non_aead
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbsHandshakeAcc_encr_mode_non_aead: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "encr",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "icvAlgID",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TbsHandshakeAcc_encr_mode_non_aead
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsHandshakeAcc_encr_mode_non_aead: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TbsHandshakeAcc_encr_mode_non_aead
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsHandshakeAcc_encr_mode_non_aead: $.ComponentSpec[] = [];
let _cached_decoder_for_TbsHandshakeAcc_encr_mode_non_aead: $.ASN1Decoder<
    TbsHandshakeAcc_encr_mode_non_aead
> | null = null;
let _cached_encoder_for_TbsHandshakeAcc_encr_mode_non_aead: $.ASN1Encoder<
    TbsHandshakeAcc_encr_mode_non_aead
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeAcc_encr_mode_non_aead
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeAcc_encr_mode_non_aead} The decoded data structure.
 */
export function _decode_TbsHandshakeAcc_encr_mode_non_aead(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeAcc_encr_mode_non_aead) {
        _cached_decoder_for_TbsHandshakeAcc_encr_mode_non_aead = function (
            el: _Element
        ): TbsHandshakeAcc_encr_mode_non_aead {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let encr: OPTIONAL<AlgorithmIdentifier>;
            let icvAlgID!: AlgorithmIdentifier;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                encr: (_el: _Element): void => {
                    encr = $._decode_implicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                icvAlgID: (_el: _Element): void => {
                    icvAlgID = $._decode_implicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TbsHandshakeAcc_encr_mode_non_aead,
                _extension_additions_list_spec_for_TbsHandshakeAcc_encr_mode_non_aead,
                _root_component_type_list_2_spec_for_TbsHandshakeAcc_encr_mode_non_aead,
                undefined
            );
            return new TbsHandshakeAcc_encr_mode_non_aead(
                /* SEQUENCE_CONSTRUCTOR_CALL */ encr,
                icvAlgID
            );
        };
    }
    return _cached_decoder_for_TbsHandshakeAcc_encr_mode_non_aead(el);
}
/**
 * @summary Encodes a(n) TbsHandshakeAcc_encr_mode_non_aead into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeAcc_encr_mode_non_aead, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeAcc_encr_mode_non_aead(
    value: TbsHandshakeAcc_encr_mode_non_aead,
    elGetter: $.ASN1Encoder<TbsHandshakeAcc_encr_mode_non_aead>
) {
    if (!_cached_encoder_for_TbsHandshakeAcc_encr_mode_non_aead) {
        _cached_encoder_for_TbsHandshakeAcc_encr_mode_non_aead = function (
            value: TbsHandshakeAcc_encr_mode_non_aead,
            elGetter: $.ASN1Encoder<TbsHandshakeAcc_encr_mode_non_aead>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.encr === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AlgorithmIdentifier,
                                  $.BER
                              )(value.encr, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_AlgorithmIdentifier,
                            $.BER
                        )(value.icvAlgID, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TbsHandshakeAcc_encr_mode_non_aead(
        value,
        elGetter
    );
}

/**
 * @summary TbsHandshakeAcc_encr_mode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeAcc-encr-mode ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TbsHandshakeAcc_encr_mode =
    | { aead: AlgorithmIdentifier } /* CHOICE_ALT_ROOT */
    | { non_aead: TbsHandshakeAcc_encr_mode_non_aead } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_TbsHandshakeAcc_encr_mode: $.ASN1Decoder<
    TbsHandshakeAcc_encr_mode
> | null = null;
let _cached_encoder_for_TbsHandshakeAcc_encr_mode: $.ASN1Encoder<
    TbsHandshakeAcc_encr_mode
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeAcc_encr_mode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeAcc_encr_mode} The decoded data structure.
 */
export function _decode_TbsHandshakeAcc_encr_mode(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeAcc_encr_mode) {
        _cached_decoder_for_TbsHandshakeAcc_encr_mode = $._decode_extensible_choice<
            TbsHandshakeAcc_encr_mode
        >({
            "CONTEXT 2": [
                "aead",
                $._decode_implicit<AlgorithmIdentifier>(
                    () => _decode_AlgorithmIdentifier
                ),
            ],
            "CONTEXT 3": [
                "non_aead",
                $._decode_implicit<TbsHandshakeAcc_encr_mode_non_aead>(
                    () => _decode_TbsHandshakeAcc_encr_mode_non_aead
                ),
            ],
        });
    }
    return _cached_decoder_for_TbsHandshakeAcc_encr_mode(el);
}
/**
 * @summary Encodes a(n) TbsHandshakeAcc_encr_mode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeAcc_encr_mode, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeAcc_encr_mode(
    value: TbsHandshakeAcc_encr_mode,
    elGetter: $.ASN1Encoder<TbsHandshakeAcc_encr_mode>
) {
    if (!_cached_encoder_for_TbsHandshakeAcc_encr_mode) {
        _cached_encoder_for_TbsHandshakeAcc_encr_mode = $._encode_choice<
            TbsHandshakeAcc_encr_mode
        >(
            {
                aead: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_AlgorithmIdentifier,
                    $.BER
                ),
                non_aead: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_TbsHandshakeAcc_encr_mode_non_aead,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TbsHandshakeAcc_encr_mode(value, elGetter);
}

/**
 * @summary TbsHandshakeAcc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeAcc ::= SEQUENCE {
 *   version        Version DEFAULT {v1},
 *   sigSel         CHOICE {
 *     sigAlg         AlgorithmIdentifier{{SupportedSignatureAlgorithms}},
 *     altSigAlg  [0] AlgorithmIdentifier{{SupportedAltSignatureAlgorithms}} },
 *   pkiPath        DER-PkiPath,
 *   assoID         AssoID,
 *   time           TimeStamp,
 *   keyEstSel      CHOICE {
 *     keyEst         AlgorithmWithInvoke{{SupportedKeyEstablishmentAlgos}},
 *     altKeyEst  [1] AlgorithmWithInvoke{{SupportedAltKeyEstablishmentAlgos}} },
 *   encr-mode      CHOICE {
 *     aead       [2] AlgorithmIdentifier{{SupportedAeadAlgorithms}},
 *     non-aead   [3] SEQUENCE {
 *       encr       [0] AlgorithmIdentifier{{SupportedSymmetricKeyAlgorithms}} OPTIONAL,
 *       icvAlgID   [1] AlgorithmIdentifier{{SupportedIcvAlgorithms}} },
 *     ... },
 *   attCert        DER-AttributeCertificate OPTIONAL,
 *   applData   [4] WrappedProt{{SupportedProtSet}} OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class TbsHandshakeAcc {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `sigSel`.
         * @public
         * @readonly
         */
        readonly sigSel: TbsHandshakeAcc_sigSel,
        /**
         * @summary `pkiPath`.
         * @public
         * @readonly
         */
        readonly pkiPath: DER_PkiPath,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp,
        /**
         * @summary `keyEstSel`.
         * @public
         * @readonly
         */
        readonly keyEstSel: TbsHandshakeAcc_keyEstSel,
        /**
         * @summary `encr_mode`.
         * @public
         * @readonly
         */
        readonly encr_mode: TbsHandshakeAcc_encr_mode,
        /**
         * @summary `attCert`.
         * @public
         * @readonly
         */
        readonly attCert: OPTIONAL<DER_AttributeCertificate>,
        /**
         * @summary `applData`.
         * @public
         * @readonly
         */
        readonly applData: OPTIONAL<WrappedProt>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TbsHandshakeAcc
     * @description
     *
     * This takes an `object` and converts it to a `TbsHandshakeAcc`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbsHandshakeAcc`.
     * @returns {TbsHandshakeAcc}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TbsHandshakeAcc]: TbsHandshakeAcc[_K] }>
    ): TbsHandshakeAcc {
        return new TbsHandshakeAcc(
            _o.version,
            _o.sigSel,
            _o.pkiPath,
            _o.assoID,
            _o.time,
            _o.keyEstSel,
            _o.encr_mode,
            _o.attCert,
            _o.applData,
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
        return (() => {
            const _ret = new Uint8ClampedArray(Math.max(0));
            _ret[Version_v1] = TRUE_BIT;
            return _ret;
        })();
    }
}
/**
 * @summary The Leading Root Component Types of TbsHandshakeAcc
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbsHandshakeAcc: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec("sigSel", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "pkiPath",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec("keyEstSel", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("encr-mode", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "attCert",
        true,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "applData",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TbsHandshakeAcc
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsHandshakeAcc: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TbsHandshakeAcc
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsHandshakeAcc: $.ComponentSpec[] = [];
let _cached_decoder_for_TbsHandshakeAcc: $.ASN1Decoder<
    TbsHandshakeAcc
> | null = null;
let _cached_encoder_for_TbsHandshakeAcc: $.ASN1Encoder<
    TbsHandshakeAcc
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeAcc
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeAcc} The decoded data structure.
 */
export function _decode_TbsHandshakeAcc(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeAcc) {
        _cached_decoder_for_TbsHandshakeAcc = function (
            el: _Element
        ): TbsHandshakeAcc {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<Version> =
                TbsHandshakeAcc._default_value_for_version;
            let sigSel!: TbsHandshakeAcc_sigSel;
            let pkiPath!: DER_PkiPath;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let keyEstSel!: TbsHandshakeAcc_keyEstSel;
            let encr_mode!: TbsHandshakeAcc_encr_mode;
            let attCert: OPTIONAL<DER_AttributeCertificate>;
            let applData: OPTIONAL<WrappedProt>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                sigSel: (_el: _Element): void => {
                    sigSel = _decode_TbsHandshakeAcc_sigSel(_el);
                },
                pkiPath: (_el: _Element): void => {
                    pkiPath = _decode_DER_PkiPath(_el);
                },
                assoID: (_el: _Element): void => {
                    assoID = _decode_AssoID(_el);
                },
                time: (_el: _Element): void => {
                    time = _decode_TimeStamp(_el);
                },
                keyEstSel: (_el: _Element): void => {
                    keyEstSel = _decode_TbsHandshakeAcc_keyEstSel(_el);
                },
                "encr-mode": (_el: _Element): void => {
                    encr_mode = _decode_TbsHandshakeAcc_encr_mode(_el);
                },
                attCert: (_el: _Element): void => {
                    attCert = _decode_DER_AttributeCertificate(_el);
                },
                applData: (_el: _Element): void => {
                    applData = $._decode_implicit<WrappedProt>(
                        () => _decode_WrappedProt
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TbsHandshakeAcc,
                _extension_additions_list_spec_for_TbsHandshakeAcc,
                _root_component_type_list_2_spec_for_TbsHandshakeAcc,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TbsHandshakeAcc(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                sigSel,
                pkiPath,
                assoID,
                time,
                keyEstSel,
                encr_mode,
                attCert,
                applData,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TbsHandshakeAcc(el);
}
/**
 * @summary Encodes a(n) TbsHandshakeAcc into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeAcc, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeAcc(
    value: TbsHandshakeAcc,
    elGetter: $.ASN1Encoder<TbsHandshakeAcc>
) {
    if (!_cached_encoder_for_TbsHandshakeAcc) {
        _cached_encoder_for_TbsHandshakeAcc = function (
            value: TbsHandshakeAcc,
            elGetter: $.ASN1Encoder<TbsHandshakeAcc>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                TbsHandshakeAcc._default_value_for_version
                            )
                                ? undefined
                                : _encode_Version(value.version, $.BER),
                            /* REQUIRED   */ _encode_TbsHandshakeAcc_sigSel(
                                value.sigSel,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_DER_PkiPath(
                                value.pkiPath,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AssoID(
                                value.assoID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_TimeStamp(
                                value.time,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_TbsHandshakeAcc_keyEstSel(
                                value.keyEstSel,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_TbsHandshakeAcc_encr_mode(
                                value.encr_mode,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.attCert === undefined
                                ? undefined
                                : _encode_DER_AttributeCertificate(
                                      value.attCert,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.applData === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_WrappedProt,
                                      $.BER
                                  )(value.applData, $.BER),
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
    return _cached_encoder_for_TbsHandshakeAcc(value, elGetter);
}

export type HandshakeAcc<> = Signed<TbsHandshakeAcc>; // DefinedType
let _cached_decoder_for_HandshakeAcc: $.ASN1Decoder<HandshakeAcc> | null = null;
let _cached_encoder_for_HandshakeAcc: $.ASN1Encoder<HandshakeAcc> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) HandshakeAcc
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HandshakeAcc} The decoded data structure.
 */
export function _decode_HandshakeAcc(el: _Element) {
    if (!_cached_decoder_for_HandshakeAcc) {
        _cached_decoder_for_HandshakeAcc = _get_decoder_for_Signed<
            TbsHandshakeAcc
        >(_decode_TbsHandshakeAcc);
    }
    return _cached_decoder_for_HandshakeAcc(el);
}
/**
 * @summary Encodes a(n) HandshakeAcc into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandshakeAcc, encoded as an ASN.1 Element.
 */
export function _encode_HandshakeAcc(
    value: HandshakeAcc,
    elGetter: $.ASN1Encoder<HandshakeAcc>
) {
    if (!_cached_encoder_for_HandshakeAcc) {
        _cached_encoder_for_HandshakeAcc = _get_encoder_for_Signed<
            TbsHandshakeAcc
        >(_encode_TbsHandshakeAcc);
    }
    return _cached_encoder_for_HandshakeAcc(value, elGetter);
}

/**
 * @summary TbsHandshakeWrpRej_sigSel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeWrpRej-sigSel ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TbsHandshakeWrpRej_sigSel =
    | { sigAlg: AlgorithmIdentifier } /* CHOICE_ALT_ROOT */
    | { altSigAlg: AlgorithmIdentifier } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_TbsHandshakeWrpRej_sigSel: $.ASN1Decoder<
    TbsHandshakeWrpRej_sigSel
> | null = null;
let _cached_encoder_for_TbsHandshakeWrpRej_sigSel: $.ASN1Encoder<
    TbsHandshakeWrpRej_sigSel
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeWrpRej_sigSel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeWrpRej_sigSel} The decoded data structure.
 */
export function _decode_TbsHandshakeWrpRej_sigSel(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeWrpRej_sigSel) {
        _cached_decoder_for_TbsHandshakeWrpRej_sigSel = $._decode_inextensible_choice<
            TbsHandshakeWrpRej_sigSel
        >({
            "UNIVERSAL 16": ["sigAlg", _decode_AlgorithmIdentifier],
            "CONTEXT 0": [
                "altSigAlg",
                $._decode_implicit<AlgorithmIdentifier>(
                    () => _decode_AlgorithmIdentifier
                ),
            ],
        });
    }
    return _cached_decoder_for_TbsHandshakeWrpRej_sigSel(el);
}
/**
 * @summary Encodes a(n) TbsHandshakeWrpRej_sigSel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeWrpRej_sigSel, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeWrpRej_sigSel(
    value: TbsHandshakeWrpRej_sigSel,
    elGetter: $.ASN1Encoder<TbsHandshakeWrpRej_sigSel>
) {
    if (!_cached_encoder_for_TbsHandshakeWrpRej_sigSel) {
        _cached_encoder_for_TbsHandshakeWrpRej_sigSel = $._encode_choice<
            TbsHandshakeWrpRej_sigSel
        >(
            {
                sigAlg: _encode_AlgorithmIdentifier,
                altSigAlg: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AlgorithmIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TbsHandshakeWrpRej_sigSel(value, elGetter);
}

/**
 * @summary WrpError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WrpError ::= ENUMERATED {
 *   protocol-error                         (0),
 *   invalid-signatureAlgorithm             (1),
 *   unexpected-version                     (2),
 *   protected-protocol-not-supported       (3),
 *   duplicate-assoID                       (4),
 *   invalid-time-value                     (5),
 *   key-estab-algorithm-not-supported      (6),
 *   encr-mode-aead-not-supported           (7),
 *   encryption-not-supported               (8),
 *   encryption-required                    (9),
 *   aead-algorithms-not-supported          (10),
 *   aead-is-required                       (11),
 *   symmetricKey-algorithms-not-supported  (12),
 *   icv-algorithms-not-supported           (13),
 *   invalid-attribute-certificate          (14),
 *   alt-signature-not-allowed              (15),
 *   only-one-version                       (16),
 *   invalid-key-estab-algorithm            (17),
 *   invalid-alt-key-estab-algorithm        (18),
 *   invalid-aead-algorithm                 (19),
 *   aead-not-allowed                       (20),
 *   invalid-symmetricKey-algorithm         (21),
 *   invalid-icv-algorithm                  (22),
 *   dynamic-aead-algo-parms-required       (23),
 *   invalid-dynamic-aead-algo-parms        (24),
 *   dynamic-aead-algo-parms-not-required   (25),
 *   dynamic-symKey-algo-parms-required     (26),
 *   invalid-dynamic-symKey-algo-parms      (27),
 *   dynamic-symKey-algo-parms-not-required (28),
 *   dynamic-icv-algo-parms-required        (29),
 *   invalid-dynamic-icv-algo-parms         (30),
 *   dynamic-icv-algo-parms-not-required    (31),
 *   unexpected-invokeID-received           (32),
 *   rekey-out-of-sequence                  (33),
 *   invalid-dynamic-keyEst-algo-parms      (34),
 *   changedKey-out-of-sequence             (35),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_WrpError {
    protocol_error = 0,
    invalid_signatureAlgorithm = 1,
    unexpected_version = 2,
    protected_protocol_not_supported = 3,
    duplicate_assoID = 4,
    invalid_time_value = 5,
    key_estab_algorithm_not_supported = 6,
    encr_mode_aead_not_supported = 7,
    encryption_not_supported = 8,
    encryption_required = 9,
    aead_algorithms_not_supported = 10,
    aead_is_required = 11,
    symmetricKey_algorithms_not_supported = 12,
    icv_algorithms_not_supported = 13,
    invalid_attribute_certificate = 14,
    alt_signature_not_allowed = 15,
    only_one_version = 16,
    invalid_key_estab_algorithm = 17,
    invalid_alt_key_estab_algorithm = 18,
    invalid_aead_algorithm = 19,
    aead_not_allowed = 20,
    invalid_symmetricKey_algorithm = 21,
    invalid_icv_algorithm = 22,
    dynamic_aead_algo_parms_required = 23,
    invalid_dynamic_aead_algo_parms = 24,
    dynamic_aead_algo_parms_not_required = 25,
    dynamic_symKey_algo_parms_required = 26,
    invalid_dynamic_symKey_algo_parms = 27,
    dynamic_symKey_algo_parms_not_required = 28,
    dynamic_icv_algo_parms_required = 29,
    invalid_dynamic_icv_algo_parms = 30,
    dynamic_icv_algo_parms_not_required = 31,
    unexpected_invokeID_received = 32,
    rekey_out_of_sequence = 33,
    invalid_dynamic_keyEst_algo_parms = 34,
    changedKey_out_of_sequence = 35,
}
/**
 * @summary WrpError
 */
export type WrpError = _enum_for_WrpError | ENUMERATED;
/**
 * @summary WrpError_protocol_error
 * @constant
 * @type {number}
 */
export const WrpError_protocol_error: WrpError = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_invalid_signatureAlgorithm
 * @constant
 * @type {number}
 */
export const WrpError_invalid_signatureAlgorithm: WrpError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_unexpected_version
 * @constant
 * @type {number}
 */
export const WrpError_unexpected_version: WrpError = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_protected_protocol_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_protected_protocol_not_supported: WrpError = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_duplicate_assoID
 * @constant
 * @type {number}
 */
export const WrpError_duplicate_assoID: WrpError = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_invalid_time_value
 * @constant
 * @type {number}
 */
export const WrpError_invalid_time_value: WrpError = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_key_estab_algorithm_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_key_estab_algorithm_not_supported: WrpError = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_encr_mode_aead_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_encr_mode_aead_not_supported: WrpError = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_encryption_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_encryption_not_supported: WrpError = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_encryption_required
 * @constant
 * @type {number}
 */
export const WrpError_encryption_required: WrpError = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_aead_algorithms_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_aead_algorithms_not_supported: WrpError = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_aead_is_required
 * @constant
 * @type {number}
 */
export const WrpError_aead_is_required: WrpError = 11; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_symmetricKey_algorithms_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_symmetricKey_algorithms_not_supported: WrpError = 12; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_icv_algorithms_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_icv_algorithms_not_supported: WrpError = 13; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_invalid_attribute_certificate
 * @constant
 * @type {number}
 */
export const WrpError_invalid_attribute_certificate: WrpError = 14; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_alt_signature_not_allowed
 * @constant
 * @type {number}
 */
export const WrpError_alt_signature_not_allowed: WrpError = 15; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_only_one_version
 * @constant
 * @type {number}
 */
export const WrpError_only_one_version: WrpError = 16; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_invalid_key_estab_algorithm
 * @constant
 * @type {number}
 */
export const WrpError_invalid_key_estab_algorithm: WrpError = 17; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_invalid_alt_key_estab_algorithm
 * @constant
 * @type {number}
 */
export const WrpError_invalid_alt_key_estab_algorithm: WrpError = 18; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_invalid_aead_algorithm
 * @constant
 * @type {number}
 */
export const WrpError_invalid_aead_algorithm: WrpError = 19; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_aead_not_allowed
 * @constant
 * @type {number}
 */
export const WrpError_aead_not_allowed: WrpError = 20; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_invalid_symmetricKey_algorithm
 * @constant
 * @type {number}
 */
export const WrpError_invalid_symmetricKey_algorithm: WrpError = 21; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_invalid_icv_algorithm
 * @constant
 * @type {number}
 */
export const WrpError_invalid_icv_algorithm: WrpError = 22; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_dynamic_aead_algo_parms_required
 * @constant
 * @type {number}
 */
export const WrpError_dynamic_aead_algo_parms_required: WrpError = 23; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_invalid_dynamic_aead_algo_parms
 * @constant
 * @type {number}
 */
export const WrpError_invalid_dynamic_aead_algo_parms: WrpError = 24; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_dynamic_aead_algo_parms_not_required
 * @constant
 * @type {number}
 */
export const WrpError_dynamic_aead_algo_parms_not_required: WrpError = 25; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_dynamic_symKey_algo_parms_required
 * @constant
 * @type {number}
 */
export const WrpError_dynamic_symKey_algo_parms_required: WrpError = 26; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_invalid_dynamic_symKey_algo_parms
 * @constant
 * @type {number}
 */
export const WrpError_invalid_dynamic_symKey_algo_parms: WrpError = 27; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_dynamic_symKey_algo_parms_not_required
 * @constant
 * @type {number}
 */
export const WrpError_dynamic_symKey_algo_parms_not_required: WrpError = 28; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_dynamic_icv_algo_parms_required
 * @constant
 * @type {number}
 */
export const WrpError_dynamic_icv_algo_parms_required: WrpError = 29; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_invalid_dynamic_icv_algo_parms
 * @constant
 * @type {number}
 */
export const WrpError_invalid_dynamic_icv_algo_parms: WrpError = 30; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_dynamic_icv_algo_parms_not_required
 * @constant
 * @type {number}
 */
export const WrpError_dynamic_icv_algo_parms_not_required: WrpError = 31; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_unexpected_invokeID_received
 * @constant
 * @type {number}
 */
export const WrpError_unexpected_invokeID_received: WrpError = 32; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_rekey_out_of_sequence
 * @constant
 * @type {number}
 */
export const WrpError_rekey_out_of_sequence: WrpError = 33; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_invalid_dynamic_keyEst_algo_parms
 * @constant
 * @type {number}
 */
export const WrpError_invalid_dynamic_keyEst_algo_parms: WrpError = 34; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary WrpError_changedKey_out_of_sequence
 * @constant
 * @type {number}
 */
export const WrpError_changedKey_out_of_sequence: WrpError = 35; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_WrpError: $.ASN1Decoder<WrpError> | null = null;
let _cached_encoder_for_WrpError: $.ASN1Encoder<WrpError> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) WrpError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WrpError} The decoded data structure.
 */
export function _decode_WrpError(el: _Element) {
    if (!_cached_decoder_for_WrpError) {
        _cached_decoder_for_WrpError = $._decodeEnumerated;
    }
    return _cached_decoder_for_WrpError(el);
}
/**
 * @summary Encodes a(n) WrpError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WrpError, encoded as an ASN.1 Element.
 */
export function _encode_WrpError(
    value: WrpError,
    elGetter: $.ASN1Encoder<WrpError>
) {
    if (!_cached_encoder_for_WrpError) {
        _cached_encoder_for_WrpError = $._encodeEnumerated;
    }
    return _cached_encoder_for_WrpError(value, elGetter);
}

/**
 * @summary TbsHandshakeWrpRej
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeWrpRej ::= SEQUENCE {
 *   version        Version DEFAULT {v1},
 *   sigSel         CHOICE {
 *     sigAlg         AlgorithmIdentifier{{SupportedSignatureAlgorithms}},
 *     altSigAlg  [0] AlgorithmIdentifier{{SupportedAltSignatureAlgorithms}} },
 *   assoID         AssoID,
 *   time           TimeStamp,
 *   pkiPath        DER-PkiPath,
 *   diag           WrpError OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class TbsHandshakeWrpRej {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `sigSel`.
         * @public
         * @readonly
         */
        readonly sigSel: TbsHandshakeWrpRej_sigSel,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp,
        /**
         * @summary `pkiPath`.
         * @public
         * @readonly
         */
        readonly pkiPath: DER_PkiPath,
        /**
         * @summary `diag`.
         * @public
         * @readonly
         */
        readonly diag: OPTIONAL<WrpError>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TbsHandshakeWrpRej
     * @description
     *
     * This takes an `object` and converts it to a `TbsHandshakeWrpRej`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbsHandshakeWrpRej`.
     * @returns {TbsHandshakeWrpRej}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof TbsHandshakeWrpRej]: TbsHandshakeWrpRej[_K] }
        >
    ): TbsHandshakeWrpRej {
        return new TbsHandshakeWrpRej(
            _o.version,
            _o.sigSel,
            _o.assoID,
            _o.time,
            _o.pkiPath,
            _o.diag,
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
        return (() => {
            const _ret = new Uint8ClampedArray(Math.max(0));
            _ret[Version_v1] = TRUE_BIT;
            return _ret;
        })();
    }
    /**
     * @summary The enum used as the type of the component `diag`
     * @public
     * @static
     */

    public static _enum_for_diag = _enum_for_WrpError;
}
/**
 * @summary The Leading Root Component Types of TbsHandshakeWrpRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbsHandshakeWrpRej: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec("sigSel", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pkiPath",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "diag",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TbsHandshakeWrpRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsHandshakeWrpRej: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TbsHandshakeWrpRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsHandshakeWrpRej: $.ComponentSpec[] = [];
let _cached_decoder_for_TbsHandshakeWrpRej: $.ASN1Decoder<
    TbsHandshakeWrpRej
> | null = null;
let _cached_encoder_for_TbsHandshakeWrpRej: $.ASN1Encoder<
    TbsHandshakeWrpRej
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeWrpRej
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeWrpRej} The decoded data structure.
 */
export function _decode_TbsHandshakeWrpRej(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeWrpRej) {
        _cached_decoder_for_TbsHandshakeWrpRej = function (
            el: _Element
        ): TbsHandshakeWrpRej {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<Version> =
                TbsHandshakeWrpRej._default_value_for_version;
            let sigSel!: TbsHandshakeWrpRej_sigSel;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let pkiPath!: DER_PkiPath;
            let diag: OPTIONAL<WrpError>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                sigSel: (_el: _Element): void => {
                    sigSel = _decode_TbsHandshakeWrpRej_sigSel(_el);
                },
                assoID: (_el: _Element): void => {
                    assoID = _decode_AssoID(_el);
                },
                time: (_el: _Element): void => {
                    time = _decode_TimeStamp(_el);
                },
                pkiPath: (_el: _Element): void => {
                    pkiPath = _decode_DER_PkiPath(_el);
                },
                diag: (_el: _Element): void => {
                    diag = _decode_WrpError(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TbsHandshakeWrpRej,
                _extension_additions_list_spec_for_TbsHandshakeWrpRej,
                _root_component_type_list_2_spec_for_TbsHandshakeWrpRej,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TbsHandshakeWrpRej(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                sigSel,
                assoID,
                time,
                pkiPath,
                diag,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TbsHandshakeWrpRej(el);
}
/**
 * @summary Encodes a(n) TbsHandshakeWrpRej into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeWrpRej, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeWrpRej(
    value: TbsHandshakeWrpRej,
    elGetter: $.ASN1Encoder<TbsHandshakeWrpRej>
) {
    if (!_cached_encoder_for_TbsHandshakeWrpRej) {
        _cached_encoder_for_TbsHandshakeWrpRej = function (
            value: TbsHandshakeWrpRej,
            elGetter: $.ASN1Encoder<TbsHandshakeWrpRej>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                TbsHandshakeWrpRej._default_value_for_version
                            )
                                ? undefined
                                : _encode_Version(value.version, $.BER),
                            /* REQUIRED   */ _encode_TbsHandshakeWrpRej_sigSel(
                                value.sigSel,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AssoID(
                                value.assoID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_TimeStamp(
                                value.time,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_DER_PkiPath(
                                value.pkiPath,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.diag === undefined
                                ? undefined
                                : _encode_WrpError(value.diag, $.BER),
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
    return _cached_encoder_for_TbsHandshakeWrpRej(value, elGetter);
}

export type HandshakeWrpRej<> = Signed<TbsHandshakeWrpRej>; // DefinedType
let _cached_decoder_for_HandshakeWrpRej: $.ASN1Decoder<
    HandshakeWrpRej
> | null = null;
let _cached_encoder_for_HandshakeWrpRej: $.ASN1Encoder<
    HandshakeWrpRej
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) HandshakeWrpRej
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HandshakeWrpRej} The decoded data structure.
 */
export function _decode_HandshakeWrpRej(el: _Element) {
    if (!_cached_decoder_for_HandshakeWrpRej) {
        _cached_decoder_for_HandshakeWrpRej = _get_decoder_for_Signed<
            TbsHandshakeWrpRej
        >(_decode_TbsHandshakeWrpRej);
    }
    return _cached_decoder_for_HandshakeWrpRej(el);
}
/**
 * @summary Encodes a(n) HandshakeWrpRej into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandshakeWrpRej, encoded as an ASN.1 Element.
 */
export function _encode_HandshakeWrpRej(
    value: HandshakeWrpRej,
    elGetter: $.ASN1Encoder<HandshakeWrpRej>
) {
    if (!_cached_encoder_for_HandshakeWrpRej) {
        _cached_encoder_for_HandshakeWrpRej = _get_encoder_for_Signed<
            TbsHandshakeWrpRej
        >(_encode_TbsHandshakeWrpRej);
    }
    return _cached_encoder_for_HandshakeWrpRej(value, elGetter);
}

/**
 * @summary TbsHandshakeProRej_sigSel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeProRej-sigSel ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TbsHandshakeProRej_sigSel =
    | { sigAlg: AlgorithmIdentifier } /* CHOICE_ALT_ROOT */
    | { altSigAlg: AlgorithmIdentifier } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_TbsHandshakeProRej_sigSel: $.ASN1Decoder<
    TbsHandshakeProRej_sigSel
> | null = null;
let _cached_encoder_for_TbsHandshakeProRej_sigSel: $.ASN1Encoder<
    TbsHandshakeProRej_sigSel
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeProRej_sigSel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeProRej_sigSel} The decoded data structure.
 */
export function _decode_TbsHandshakeProRej_sigSel(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeProRej_sigSel) {
        _cached_decoder_for_TbsHandshakeProRej_sigSel = $._decode_inextensible_choice<
            TbsHandshakeProRej_sigSel
        >({
            "UNIVERSAL 16": ["sigAlg", _decode_AlgorithmIdentifier],
            "CONTEXT 0": [
                "altSigAlg",
                $._decode_implicit<AlgorithmIdentifier>(
                    () => _decode_AlgorithmIdentifier
                ),
            ],
        });
    }
    return _cached_decoder_for_TbsHandshakeProRej_sigSel(el);
}
/**
 * @summary Encodes a(n) TbsHandshakeProRej_sigSel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeProRej_sigSel, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeProRej_sigSel(
    value: TbsHandshakeProRej_sigSel,
    elGetter: $.ASN1Encoder<TbsHandshakeProRej_sigSel>
) {
    if (!_cached_encoder_for_TbsHandshakeProRej_sigSel) {
        _cached_encoder_for_TbsHandshakeProRej_sigSel = $._encode_choice<
            TbsHandshakeProRej_sigSel
        >(
            {
                sigAlg: _encode_AlgorithmIdentifier,
                altSigAlg: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AlgorithmIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TbsHandshakeProRej_sigSel(value, elGetter);
}

/**
 * @summary TbsHandshakeProRej
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeProRej ::= SEQUENCE {
 *   sigSel         CHOICE {
 *     sigAlg         AlgorithmIdentifier{{SupportedSignatureAlgorithms}},
 *     altSigAlg  [0] AlgorithmIdentifier{{SupportedAltSignatureAlgorithms}} },
 *   assoID         AssoID,
 *   time           TimeStamp,
 *   pkiPath        DER-PkiPath,
 *   applData       WrappedProt{{SupportedProtSet}},
 *   ... }
 * ```
 *
 * @class
 */
export class TbsHandshakeProRej {
    constructor(
        /**
         * @summary `sigSel`.
         * @public
         * @readonly
         */
        readonly sigSel: TbsHandshakeProRej_sigSel,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp,
        /**
         * @summary `pkiPath`.
         * @public
         * @readonly
         */
        readonly pkiPath: DER_PkiPath,
        /**
         * @summary `applData`.
         * @public
         * @readonly
         */
        readonly applData: WrappedProt,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TbsHandshakeProRej
     * @description
     *
     * This takes an `object` and converts it to a `TbsHandshakeProRej`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbsHandshakeProRej`.
     * @returns {TbsHandshakeProRej}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof TbsHandshakeProRej]: TbsHandshakeProRej[_K] }
        >
    ): TbsHandshakeProRej {
        return new TbsHandshakeProRej(
            _o.sigSel,
            _o.assoID,
            _o.time,
            _o.pkiPath,
            _o.applData,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of TbsHandshakeProRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbsHandshakeProRej: $.ComponentSpec[] = [
    new $.ComponentSpec("sigSel", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pkiPath",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "applData",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TbsHandshakeProRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsHandshakeProRej: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TbsHandshakeProRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsHandshakeProRej: $.ComponentSpec[] = [];
let _cached_decoder_for_TbsHandshakeProRej: $.ASN1Decoder<
    TbsHandshakeProRej
> | null = null;
let _cached_encoder_for_TbsHandshakeProRej: $.ASN1Encoder<
    TbsHandshakeProRej
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeProRej
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeProRej} The decoded data structure.
 */
export function _decode_TbsHandshakeProRej(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeProRej) {
        _cached_decoder_for_TbsHandshakeProRej = function (
            el: _Element
        ): TbsHandshakeProRej {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 5) {
                throw new _ConstructionError(
                    "TbsHandshakeProRej contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "sigSel";
            sequence[1].name = "assoID";
            sequence[2].name = "time";
            sequence[3].name = "pkiPath";
            sequence[4].name = "applData";
            let sigSel!: TbsHandshakeProRej_sigSel;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let pkiPath!: DER_PkiPath;
            let applData!: WrappedProt;
            sigSel = _decode_TbsHandshakeProRej_sigSel(sequence[0]);
            assoID = _decode_AssoID(sequence[1]);
            time = _decode_TimeStamp(sequence[2]);
            pkiPath = _decode_DER_PkiPath(sequence[3]);
            applData = _decode_WrappedProt(sequence[4]);
            return new TbsHandshakeProRej(
                sigSel,
                assoID,
                time,
                pkiPath,
                applData,
                sequence.slice(5)
            );
        };
    }
    return _cached_decoder_for_TbsHandshakeProRej(el);
}
/**
 * @summary Encodes a(n) TbsHandshakeProRej into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeProRej, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeProRej(
    value: TbsHandshakeProRej,
    elGetter: $.ASN1Encoder<TbsHandshakeProRej>
) {
    if (!_cached_encoder_for_TbsHandshakeProRej) {
        _cached_encoder_for_TbsHandshakeProRej = function (
            value: TbsHandshakeProRej,
            elGetter: $.ASN1Encoder<TbsHandshakeProRej>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_TbsHandshakeProRej_sigSel(
                                value.sigSel,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AssoID(
                                value.assoID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_TimeStamp(
                                value.time,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_DER_PkiPath(
                                value.pkiPath,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_WrappedProt(
                                value.applData,
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
    return _cached_encoder_for_TbsHandshakeProRej(value, elGetter);
}

export type HandshakeProRej<> = Signed<TbsHandshakeProRej>; // DefinedType
let _cached_decoder_for_HandshakeProRej: $.ASN1Decoder<
    HandshakeProRej
> | null = null;
let _cached_encoder_for_HandshakeProRej: $.ASN1Encoder<
    HandshakeProRej
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) HandshakeProRej
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HandshakeProRej} The decoded data structure.
 */
export function _decode_HandshakeProRej(el: _Element) {
    if (!_cached_decoder_for_HandshakeProRej) {
        _cached_decoder_for_HandshakeProRej = _get_decoder_for_Signed<
            TbsHandshakeProRej
        >(_decode_TbsHandshakeProRej);
    }
    return _cached_decoder_for_HandshakeProRej(el);
}
/**
 * @summary Encodes a(n) HandshakeProRej into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandshakeProRej, encoded as an ASN.1 Element.
 */
export function _encode_HandshakeProRej(
    value: HandshakeProRej,
    elGetter: $.ASN1Encoder<HandshakeProRej>
) {
    if (!_cached_encoder_for_HandshakeProRej) {
        _cached_encoder_for_HandshakeProRej = _get_encoder_for_Signed<
            TbsHandshakeProRej
        >(_encode_TbsHandshakeProRej);
    }
    return _cached_encoder_for_HandshakeProRej(value, elGetter);
}

/**
 * @summary TbsHandshakeSecAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeSecAbort ::= SEQUENCE {
 *   version      Version DEFAULT {v1},
 *   sigAlg       AlgorithmIdentifier{{SupportedSignatureAlgorithms}},
 *   assoID       AssoID,
 *   time         TimeStamp,
 *   pkiPath      DER-PkiPath,
 *   diag         WrpError OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class TbsHandshakeSecAbort {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `sigAlg`.
         * @public
         * @readonly
         */
        readonly sigAlg: AlgorithmIdentifier,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp,
        /**
         * @summary `pkiPath`.
         * @public
         * @readonly
         */
        readonly pkiPath: DER_PkiPath,
        /**
         * @summary `diag`.
         * @public
         * @readonly
         */
        readonly diag: OPTIONAL<WrpError>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TbsHandshakeSecAbort
     * @description
     *
     * This takes an `object` and converts it to a `TbsHandshakeSecAbort`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbsHandshakeSecAbort`.
     * @returns {TbsHandshakeSecAbort}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof TbsHandshakeSecAbort]: TbsHandshakeSecAbort[_K] }
        >
    ): TbsHandshakeSecAbort {
        return new TbsHandshakeSecAbort(
            _o.version,
            _o.sigAlg,
            _o.assoID,
            _o.time,
            _o.pkiPath,
            _o.diag,
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
        return (() => {
            const _ret = new Uint8ClampedArray(Math.max(0));
            _ret[Version_v1] = TRUE_BIT;
            return _ret;
        })();
    }
    /**
     * @summary The enum used as the type of the component `diag`
     * @public
     * @static
     */

    public static _enum_for_diag = _enum_for_WrpError;
}
/**
 * @summary The Leading Root Component Types of TbsHandshakeSecAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbsHandshakeSecAbort: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sigAlg",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pkiPath",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "diag",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TbsHandshakeSecAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsHandshakeSecAbort: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TbsHandshakeSecAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsHandshakeSecAbort: $.ComponentSpec[] = [];
let _cached_decoder_for_TbsHandshakeSecAbort: $.ASN1Decoder<
    TbsHandshakeSecAbort
> | null = null;
let _cached_encoder_for_TbsHandshakeSecAbort: $.ASN1Encoder<
    TbsHandshakeSecAbort
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeSecAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeSecAbort} The decoded data structure.
 */
export function _decode_TbsHandshakeSecAbort(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeSecAbort) {
        _cached_decoder_for_TbsHandshakeSecAbort = function (
            el: _Element
        ): TbsHandshakeSecAbort {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<Version> =
                TbsHandshakeSecAbort._default_value_for_version;
            let sigAlg!: AlgorithmIdentifier;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let pkiPath!: DER_PkiPath;
            let diag: OPTIONAL<WrpError>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                sigAlg: (_el: _Element): void => {
                    sigAlg = _decode_AlgorithmIdentifier(_el);
                },
                assoID: (_el: _Element): void => {
                    assoID = _decode_AssoID(_el);
                },
                time: (_el: _Element): void => {
                    time = _decode_TimeStamp(_el);
                },
                pkiPath: (_el: _Element): void => {
                    pkiPath = _decode_DER_PkiPath(_el);
                },
                diag: (_el: _Element): void => {
                    diag = _decode_WrpError(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TbsHandshakeSecAbort,
                _extension_additions_list_spec_for_TbsHandshakeSecAbort,
                _root_component_type_list_2_spec_for_TbsHandshakeSecAbort,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TbsHandshakeSecAbort(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                sigAlg,
                assoID,
                time,
                pkiPath,
                diag,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TbsHandshakeSecAbort(el);
}
/**
 * @summary Encodes a(n) TbsHandshakeSecAbort into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeSecAbort, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeSecAbort(
    value: TbsHandshakeSecAbort,
    elGetter: $.ASN1Encoder<TbsHandshakeSecAbort>
) {
    if (!_cached_encoder_for_TbsHandshakeSecAbort) {
        _cached_encoder_for_TbsHandshakeSecAbort = function (
            value: TbsHandshakeSecAbort,
            elGetter: $.ASN1Encoder<TbsHandshakeSecAbort>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                TbsHandshakeSecAbort._default_value_for_version
                            )
                                ? undefined
                                : _encode_Version(value.version, $.BER),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.sigAlg,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AssoID(
                                value.assoID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_TimeStamp(
                                value.time,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_DER_PkiPath(
                                value.pkiPath,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.diag === undefined
                                ? undefined
                                : _encode_WrpError(value.diag, $.BER),
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
    return _cached_encoder_for_TbsHandshakeSecAbort(value, elGetter);
}

export type HandshakeSecAbort<> = Signed<TbsHandshakeSecAbort>; // DefinedType
let _cached_decoder_for_HandshakeSecAbort: $.ASN1Decoder<
    HandshakeSecAbort
> | null = null;
let _cached_encoder_for_HandshakeSecAbort: $.ASN1Encoder<
    HandshakeSecAbort
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) HandshakeSecAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HandshakeSecAbort} The decoded data structure.
 */
export function _decode_HandshakeSecAbort(el: _Element) {
    if (!_cached_decoder_for_HandshakeSecAbort) {
        _cached_decoder_for_HandshakeSecAbort = _get_decoder_for_Signed<
            TbsHandshakeSecAbort
        >(_decode_TbsHandshakeSecAbort);
    }
    return _cached_decoder_for_HandshakeSecAbort(el);
}
/**
 * @summary Encodes a(n) HandshakeSecAbort into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandshakeSecAbort, encoded as an ASN.1 Element.
 */
export function _encode_HandshakeSecAbort(
    value: HandshakeSecAbort,
    elGetter: $.ASN1Encoder<HandshakeSecAbort>
) {
    if (!_cached_encoder_for_HandshakeSecAbort) {
        _cached_encoder_for_HandshakeSecAbort = _get_encoder_for_Signed<
            TbsHandshakeSecAbort
        >(_encode_TbsHandshakeSecAbort);
    }
    return _cached_encoder_for_HandshakeSecAbort(value, elGetter);
}

/**
 * @summary TbsHandshakeProAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeProAbort ::= SEQUENCE {
 *   sigAlg       AlgorithmIdentifier{{SupportedSignatureAlgorithms}},
 *   assoID       AssoID,
 *   time         TimeStamp,
 *   pkiPath      DER-PkiPath,
 *   applData     WrappedProt{{SupportedProtSet}},
 *   ... }
 * ```
 *
 * @class
 */
export class TbsHandshakeProAbort {
    constructor(
        /**
         * @summary `sigAlg`.
         * @public
         * @readonly
         */
        readonly sigAlg: AlgorithmIdentifier,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp,
        /**
         * @summary `pkiPath`.
         * @public
         * @readonly
         */
        readonly pkiPath: DER_PkiPath,
        /**
         * @summary `applData`.
         * @public
         * @readonly
         */
        readonly applData: WrappedProt,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TbsHandshakeProAbort
     * @description
     *
     * This takes an `object` and converts it to a `TbsHandshakeProAbort`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbsHandshakeProAbort`.
     * @returns {TbsHandshakeProAbort}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof TbsHandshakeProAbort]: TbsHandshakeProAbort[_K] }
        >
    ): TbsHandshakeProAbort {
        return new TbsHandshakeProAbort(
            _o.sigAlg,
            _o.assoID,
            _o.time,
            _o.pkiPath,
            _o.applData,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of TbsHandshakeProAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbsHandshakeProAbort: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "sigAlg",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pkiPath",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "applData",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TbsHandshakeProAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsHandshakeProAbort: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TbsHandshakeProAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsHandshakeProAbort: $.ComponentSpec[] = [];
let _cached_decoder_for_TbsHandshakeProAbort: $.ASN1Decoder<
    TbsHandshakeProAbort
> | null = null;
let _cached_encoder_for_TbsHandshakeProAbort: $.ASN1Encoder<
    TbsHandshakeProAbort
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeProAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeProAbort} The decoded data structure.
 */
export function _decode_TbsHandshakeProAbort(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeProAbort) {
        _cached_decoder_for_TbsHandshakeProAbort = function (
            el: _Element
        ): TbsHandshakeProAbort {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 5) {
                throw new _ConstructionError(
                    "TbsHandshakeProAbort contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "sigAlg";
            sequence[1].name = "assoID";
            sequence[2].name = "time";
            sequence[3].name = "pkiPath";
            sequence[4].name = "applData";
            let sigAlg!: AlgorithmIdentifier;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let pkiPath!: DER_PkiPath;
            let applData!: WrappedProt;
            sigAlg = _decode_AlgorithmIdentifier(sequence[0]);
            assoID = _decode_AssoID(sequence[1]);
            time = _decode_TimeStamp(sequence[2]);
            pkiPath = _decode_DER_PkiPath(sequence[3]);
            applData = _decode_WrappedProt(sequence[4]);
            return new TbsHandshakeProAbort(
                sigAlg,
                assoID,
                time,
                pkiPath,
                applData,
                sequence.slice(5)
            );
        };
    }
    return _cached_decoder_for_TbsHandshakeProAbort(el);
}
/**
 * @summary Encodes a(n) TbsHandshakeProAbort into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeProAbort, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeProAbort(
    value: TbsHandshakeProAbort,
    elGetter: $.ASN1Encoder<TbsHandshakeProAbort>
) {
    if (!_cached_encoder_for_TbsHandshakeProAbort) {
        _cached_encoder_for_TbsHandshakeProAbort = function (
            value: TbsHandshakeProAbort,
            elGetter: $.ASN1Encoder<TbsHandshakeProAbort>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.sigAlg,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AssoID(
                                value.assoID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_TimeStamp(
                                value.time,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_DER_PkiPath(
                                value.pkiPath,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_WrappedProt(
                                value.applData,
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
    return _cached_encoder_for_TbsHandshakeProAbort(value, elGetter);
}

export type HandshakeProAbort<> = Signed<TbsHandshakeProAbort>; // DefinedType
let _cached_decoder_for_HandshakeProAbort: $.ASN1Decoder<
    HandshakeProAbort
> | null = null;
let _cached_encoder_for_HandshakeProAbort: $.ASN1Encoder<
    HandshakeProAbort
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) HandshakeProAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HandshakeProAbort} The decoded data structure.
 */
export function _decode_HandshakeProAbort(el: _Element) {
    if (!_cached_decoder_for_HandshakeProAbort) {
        _cached_decoder_for_HandshakeProAbort = _get_decoder_for_Signed<
            TbsHandshakeProAbort
        >(_decode_TbsHandshakeProAbort);
    }
    return _cached_decoder_for_HandshakeProAbort(el);
}
/**
 * @summary Encodes a(n) HandshakeProAbort into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandshakeProAbort, encoded as an ASN.1 Element.
 */
export function _encode_HandshakeProAbort(
    value: HandshakeProAbort,
    elGetter: $.ASN1Encoder<HandshakeProAbort>
) {
    if (!_cached_encoder_for_HandshakeProAbort) {
        _cached_encoder_for_HandshakeProAbort = _get_encoder_for_Signed<
            TbsHandshakeProAbort
        >(_encode_TbsHandshakeProAbort);
    }
    return _cached_encoder_for_HandshakeProAbort(value, elGetter);
}

/**
 * @summary SequenceNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceNumber  ::=  INTEGER (0..2147483647)
 * ```
 */
export type SequenceNumber = INTEGER;
let _cached_decoder_for_SequenceNumber: $.ASN1Decoder<
    SequenceNumber
> | null = null;
let _cached_encoder_for_SequenceNumber: $.ASN1Encoder<
    SequenceNumber
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SequenceNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SequenceNumber} The decoded data structure.
 */
export function _decode_SequenceNumber(el: _Element) {
    if (!_cached_decoder_for_SequenceNumber) {
        _cached_decoder_for_SequenceNumber = $._decodeInteger;
    }
    return _cached_decoder_for_SequenceNumber(el);
}
/**
 * @summary Encodes a(n) SequenceNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceNumber, encoded as an ASN.1 Element.
 */
export function _encode_SequenceNumber(
    value: SequenceNumber,
    elGetter: $.ASN1Encoder<SequenceNumber>
) {
    if (!_cached_encoder_for_SequenceNumber) {
        _cached_encoder_for_SequenceNumber = $._encodeInteger;
    }
    return _cached_encoder_for_SequenceNumber(value, elGetter);
}

/**
 * @summary TbsDtSecAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsDtSecAbort ::= SEQUENCE {
 *   sigAlg       AlgorithmIdentifier{{SupportedSignatureAlgorithms}},
 *   assoID       AssoID,
 *   time         TimeStamp,
 *   pkiPath      DER-PkiPath,
 *   seq          SequenceNumber,
 *   diag         WrpError OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class TbsDtSecAbort {
    constructor(
        /**
         * @summary `sigAlg`.
         * @public
         * @readonly
         */
        readonly sigAlg: AlgorithmIdentifier,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp,
        /**
         * @summary `pkiPath`.
         * @public
         * @readonly
         */
        readonly pkiPath: DER_PkiPath,
        /**
         * @summary `seq`.
         * @public
         * @readonly
         */
        readonly seq: SequenceNumber,
        /**
         * @summary `diag`.
         * @public
         * @readonly
         */
        readonly diag: OPTIONAL<WrpError>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TbsDtSecAbort
     * @description
     *
     * This takes an `object` and converts it to a `TbsDtSecAbort`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbsDtSecAbort`.
     * @returns {TbsDtSecAbort}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TbsDtSecAbort]: TbsDtSecAbort[_K] }>
    ): TbsDtSecAbort {
        return new TbsDtSecAbort(
            _o.sigAlg,
            _o.assoID,
            _o.time,
            _o.pkiPath,
            _o.seq,
            _o.diag,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `diag`
     * @public
     * @static
     */

    public static _enum_for_diag = _enum_for_WrpError;
}
/**
 * @summary The Leading Root Component Types of TbsDtSecAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbsDtSecAbort: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "sigAlg",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pkiPath",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "seq",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "diag",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TbsDtSecAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsDtSecAbort: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TbsDtSecAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsDtSecAbort: $.ComponentSpec[] = [];
let _cached_decoder_for_TbsDtSecAbort: $.ASN1Decoder<
    TbsDtSecAbort
> | null = null;
let _cached_encoder_for_TbsDtSecAbort: $.ASN1Encoder<
    TbsDtSecAbort
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbsDtSecAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsDtSecAbort} The decoded data structure.
 */
export function _decode_TbsDtSecAbort(el: _Element) {
    if (!_cached_decoder_for_TbsDtSecAbort) {
        _cached_decoder_for_TbsDtSecAbort = function (
            el: _Element
        ): TbsDtSecAbort {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let sigAlg!: AlgorithmIdentifier;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let pkiPath!: DER_PkiPath;
            let seq!: SequenceNumber;
            let diag: OPTIONAL<WrpError>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                sigAlg: (_el: _Element): void => {
                    sigAlg = _decode_AlgorithmIdentifier(_el);
                },
                assoID: (_el: _Element): void => {
                    assoID = _decode_AssoID(_el);
                },
                time: (_el: _Element): void => {
                    time = _decode_TimeStamp(_el);
                },
                pkiPath: (_el: _Element): void => {
                    pkiPath = _decode_DER_PkiPath(_el);
                },
                seq: (_el: _Element): void => {
                    seq = _decode_SequenceNumber(_el);
                },
                diag: (_el: _Element): void => {
                    diag = _decode_WrpError(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TbsDtSecAbort,
                _extension_additions_list_spec_for_TbsDtSecAbort,
                _root_component_type_list_2_spec_for_TbsDtSecAbort,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TbsDtSecAbort(
                /* SEQUENCE_CONSTRUCTOR_CALL */ sigAlg,
                assoID,
                time,
                pkiPath,
                seq,
                diag,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TbsDtSecAbort(el);
}
/**
 * @summary Encodes a(n) TbsDtSecAbort into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsDtSecAbort, encoded as an ASN.1 Element.
 */
export function _encode_TbsDtSecAbort(
    value: TbsDtSecAbort,
    elGetter: $.ASN1Encoder<TbsDtSecAbort>
) {
    if (!_cached_encoder_for_TbsDtSecAbort) {
        _cached_encoder_for_TbsDtSecAbort = function (
            value: TbsDtSecAbort,
            elGetter: $.ASN1Encoder<TbsDtSecAbort>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.sigAlg,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AssoID(
                                value.assoID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_TimeStamp(
                                value.time,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_DER_PkiPath(
                                value.pkiPath,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_SequenceNumber(
                                value.seq,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.diag === undefined
                                ? undefined
                                : _encode_WrpError(value.diag, $.BER),
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
    return _cached_encoder_for_TbsDtSecAbort(value, elGetter);
}

export type DtSecAbort<> = Signed<TbsDtSecAbort>; // DefinedType
let _cached_decoder_for_DtSecAbort: $.ASN1Decoder<DtSecAbort> | null = null;
let _cached_encoder_for_DtSecAbort: $.ASN1Encoder<DtSecAbort> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DtSecAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DtSecAbort} The decoded data structure.
 */
export function _decode_DtSecAbort(el: _Element) {
    if (!_cached_decoder_for_DtSecAbort) {
        _cached_decoder_for_DtSecAbort = _get_decoder_for_Signed<TbsDtSecAbort>(
            _decode_TbsDtSecAbort
        );
    }
    return _cached_decoder_for_DtSecAbort(el);
}
/**
 * @summary Encodes a(n) DtSecAbort into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DtSecAbort, encoded as an ASN.1 Element.
 */
export function _encode_DtSecAbort(
    value: DtSecAbort,
    elGetter: $.ASN1Encoder<DtSecAbort>
) {
    if (!_cached_encoder_for_DtSecAbort) {
        _cached_encoder_for_DtSecAbort = _get_encoder_for_Signed<TbsDtSecAbort>(
            _encode_TbsDtSecAbort
        );
    }
    return _cached_encoder_for_DtSecAbort(value, elGetter);
}

/**
 * @summary TbsApplAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsApplAbort ::= SEQUENCE {
 *   sigAlg       AlgorithmIdentifier{{SupportedSignatureAlgorithms}},
 *   assoID       AssoID,
 *   time         TimeStamp,
 *   pkiPath      DER-PkiPath,
 *   seq          SequenceNumber,
 *   applData     WrappedProt{{SupportedProtSet}},
 *   ... }
 * ```
 *
 * @class
 */
export class TbsApplAbort {
    constructor(
        /**
         * @summary `sigAlg`.
         * @public
         * @readonly
         */
        readonly sigAlg: AlgorithmIdentifier,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp,
        /**
         * @summary `pkiPath`.
         * @public
         * @readonly
         */
        readonly pkiPath: DER_PkiPath,
        /**
         * @summary `seq`.
         * @public
         * @readonly
         */
        readonly seq: SequenceNumber,
        /**
         * @summary `applData`.
         * @public
         * @readonly
         */
        readonly applData: WrappedProt,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TbsApplAbort
     * @description
     *
     * This takes an `object` and converts it to a `TbsApplAbort`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbsApplAbort`.
     * @returns {TbsApplAbort}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TbsApplAbort]: TbsApplAbort[_K] }>
    ): TbsApplAbort {
        return new TbsApplAbort(
            _o.sigAlg,
            _o.assoID,
            _o.time,
            _o.pkiPath,
            _o.seq,
            _o.applData,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of TbsApplAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbsApplAbort: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "sigAlg",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pkiPath",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "seq",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "applData",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TbsApplAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsApplAbort: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TbsApplAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsApplAbort: $.ComponentSpec[] = [];
let _cached_decoder_for_TbsApplAbort: $.ASN1Decoder<TbsApplAbort> | null = null;
let _cached_encoder_for_TbsApplAbort: $.ASN1Encoder<TbsApplAbort> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbsApplAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsApplAbort} The decoded data structure.
 */
export function _decode_TbsApplAbort(el: _Element) {
    if (!_cached_decoder_for_TbsApplAbort) {
        _cached_decoder_for_TbsApplAbort = function (
            el: _Element
        ): TbsApplAbort {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 6) {
                throw new _ConstructionError(
                    "TbsApplAbort contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "sigAlg";
            sequence[1].name = "assoID";
            sequence[2].name = "time";
            sequence[3].name = "pkiPath";
            sequence[4].name = "seq";
            sequence[5].name = "applData";
            let sigAlg!: AlgorithmIdentifier;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let pkiPath!: DER_PkiPath;
            let seq!: SequenceNumber;
            let applData!: WrappedProt;
            sigAlg = _decode_AlgorithmIdentifier(sequence[0]);
            assoID = _decode_AssoID(sequence[1]);
            time = _decode_TimeStamp(sequence[2]);
            pkiPath = _decode_DER_PkiPath(sequence[3]);
            seq = _decode_SequenceNumber(sequence[4]);
            applData = _decode_WrappedProt(sequence[5]);
            return new TbsApplAbort(
                sigAlg,
                assoID,
                time,
                pkiPath,
                seq,
                applData,
                sequence.slice(6)
            );
        };
    }
    return _cached_decoder_for_TbsApplAbort(el);
}
/**
 * @summary Encodes a(n) TbsApplAbort into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsApplAbort, encoded as an ASN.1 Element.
 */
export function _encode_TbsApplAbort(
    value: TbsApplAbort,
    elGetter: $.ASN1Encoder<TbsApplAbort>
) {
    if (!_cached_encoder_for_TbsApplAbort) {
        _cached_encoder_for_TbsApplAbort = function (
            value: TbsApplAbort,
            elGetter: $.ASN1Encoder<TbsApplAbort>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.sigAlg,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AssoID(
                                value.assoID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_TimeStamp(
                                value.time,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_DER_PkiPath(
                                value.pkiPath,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_SequenceNumber(
                                value.seq,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_WrappedProt(
                                value.applData,
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
    return _cached_encoder_for_TbsApplAbort(value, elGetter);
}

export type ApplAbort<> = Signed<TbsApplAbort>; // DefinedType
let _cached_decoder_for_ApplAbort: $.ASN1Decoder<ApplAbort> | null = null;
let _cached_encoder_for_ApplAbort: $.ASN1Encoder<ApplAbort> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ApplAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplAbort} The decoded data structure.
 */
export function _decode_ApplAbort(el: _Element) {
    if (!_cached_decoder_for_ApplAbort) {
        _cached_decoder_for_ApplAbort = _get_decoder_for_Signed<TbsApplAbort>(
            _decode_TbsApplAbort
        );
    }
    return _cached_decoder_for_ApplAbort(el);
}
/**
 * @summary Encodes a(n) ApplAbort into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplAbort, encoded as an ASN.1 Element.
 */
export function _encode_ApplAbort(
    value: ApplAbort,
    elGetter: $.ASN1Encoder<ApplAbort>
) {
    if (!_cached_encoder_for_ApplAbort) {
        _cached_encoder_for_ApplAbort = _get_encoder_for_Signed<TbsApplAbort>(
            _encode_TbsApplAbort
        );
    }
    return _cached_encoder_for_ApplAbort(value, elGetter);
}

/**
 * @summary TbsReleaseReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsReleaseReq ::= SEQUENCE {
 *   version      Version DEFAULT {v1},
 *   sigAlg       AlgorithmIdentifier{{SupportedSignatureAlgorithms}},
 *   assoID       AssoID,
 *   time         TimeStamp,
 *   pkiPath      DER-PkiPath,
 *   ... }
 * ```
 *
 * @class
 */
export class TbsReleaseReq {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `sigAlg`.
         * @public
         * @readonly
         */
        readonly sigAlg: AlgorithmIdentifier,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp,
        /**
         * @summary `pkiPath`.
         * @public
         * @readonly
         */
        readonly pkiPath: DER_PkiPath,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TbsReleaseReq
     * @description
     *
     * This takes an `object` and converts it to a `TbsReleaseReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbsReleaseReq`.
     * @returns {TbsReleaseReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TbsReleaseReq]: TbsReleaseReq[_K] }>
    ): TbsReleaseReq {
        return new TbsReleaseReq(
            _o.version,
            _o.sigAlg,
            _o.assoID,
            _o.time,
            _o.pkiPath,
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
        return (() => {
            const _ret = new Uint8ClampedArray(Math.max(0));
            _ret[Version_v1] = TRUE_BIT;
            return _ret;
        })();
    }
}
/**
 * @summary The Leading Root Component Types of TbsReleaseReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbsReleaseReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sigAlg",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pkiPath",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TbsReleaseReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsReleaseReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TbsReleaseReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsReleaseReq: $.ComponentSpec[] = [];
let _cached_decoder_for_TbsReleaseReq: $.ASN1Decoder<
    TbsReleaseReq
> | null = null;
let _cached_encoder_for_TbsReleaseReq: $.ASN1Encoder<
    TbsReleaseReq
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbsReleaseReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsReleaseReq} The decoded data structure.
 */
export function _decode_TbsReleaseReq(el: _Element) {
    if (!_cached_decoder_for_TbsReleaseReq) {
        _cached_decoder_for_TbsReleaseReq = function (
            el: _Element
        ): TbsReleaseReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<Version> =
                TbsReleaseReq._default_value_for_version;
            let sigAlg!: AlgorithmIdentifier;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let pkiPath!: DER_PkiPath;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                sigAlg: (_el: _Element): void => {
                    sigAlg = _decode_AlgorithmIdentifier(_el);
                },
                assoID: (_el: _Element): void => {
                    assoID = _decode_AssoID(_el);
                },
                time: (_el: _Element): void => {
                    time = _decode_TimeStamp(_el);
                },
                pkiPath: (_el: _Element): void => {
                    pkiPath = _decode_DER_PkiPath(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TbsReleaseReq,
                _extension_additions_list_spec_for_TbsReleaseReq,
                _root_component_type_list_2_spec_for_TbsReleaseReq,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TbsReleaseReq(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                sigAlg,
                assoID,
                time,
                pkiPath,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TbsReleaseReq(el);
}
/**
 * @summary Encodes a(n) TbsReleaseReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsReleaseReq, encoded as an ASN.1 Element.
 */
export function _encode_TbsReleaseReq(
    value: TbsReleaseReq,
    elGetter: $.ASN1Encoder<TbsReleaseReq>
) {
    if (!_cached_encoder_for_TbsReleaseReq) {
        _cached_encoder_for_TbsReleaseReq = function (
            value: TbsReleaseReq,
            elGetter: $.ASN1Encoder<TbsReleaseReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                TbsReleaseReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_Version(value.version, $.BER),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.sigAlg,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AssoID(
                                value.assoID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_TimeStamp(
                                value.time,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_DER_PkiPath(
                                value.pkiPath,
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
    return _cached_encoder_for_TbsReleaseReq(value, elGetter);
}

export type ReleaseReq<> = Signed<TbsReleaseReq>; // DefinedType
let _cached_decoder_for_ReleaseReq: $.ASN1Decoder<ReleaseReq> | null = null;
let _cached_encoder_for_ReleaseReq: $.ASN1Encoder<ReleaseReq> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReleaseReq} The decoded data structure.
 */
export function _decode_ReleaseReq(el: _Element) {
    if (!_cached_decoder_for_ReleaseReq) {
        _cached_decoder_for_ReleaseReq = _get_decoder_for_Signed<TbsReleaseReq>(
            _decode_TbsReleaseReq
        );
    }
    return _cached_decoder_for_ReleaseReq(el);
}
/**
 * @summary Encodes a(n) ReleaseReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseReq, encoded as an ASN.1 Element.
 */
export function _encode_ReleaseReq(
    value: ReleaseReq,
    elGetter: $.ASN1Encoder<ReleaseReq>
) {
    if (!_cached_encoder_for_ReleaseReq) {
        _cached_encoder_for_ReleaseReq = _get_encoder_for_Signed<TbsReleaseReq>(
            _encode_TbsReleaseReq
        );
    }
    return _cached_encoder_for_ReleaseReq(value, elGetter);
}

/**
 * @summary TbsReleaseRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsReleaseRsp ::= SEQUENCE {
 *   version      Version DEFAULT {v1},
 *   sigAlg       AlgorithmIdentifier{{SupportedSignatureAlgorithms}},
 *   assoID       AssoID,
 *   time         TimeStamp,
 *   pkiPath      DER-PkiPath,
 *   ... }
 * ```
 *
 * @class
 */
export class TbsReleaseRsp {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `sigAlg`.
         * @public
         * @readonly
         */
        readonly sigAlg: AlgorithmIdentifier,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp,
        /**
         * @summary `pkiPath`.
         * @public
         * @readonly
         */
        readonly pkiPath: DER_PkiPath,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TbsReleaseRsp
     * @description
     *
     * This takes an `object` and converts it to a `TbsReleaseRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbsReleaseRsp`.
     * @returns {TbsReleaseRsp}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TbsReleaseRsp]: TbsReleaseRsp[_K] }>
    ): TbsReleaseRsp {
        return new TbsReleaseRsp(
            _o.version,
            _o.sigAlg,
            _o.assoID,
            _o.time,
            _o.pkiPath,
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
        return (() => {
            const _ret = new Uint8ClampedArray(Math.max(0));
            _ret[Version_v1] = TRUE_BIT;
            return _ret;
        })();
    }
}
/**
 * @summary The Leading Root Component Types of TbsReleaseRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbsReleaseRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sigAlg",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pkiPath",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TbsReleaseRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsReleaseRsp: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TbsReleaseRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsReleaseRsp: $.ComponentSpec[] = [];
let _cached_decoder_for_TbsReleaseRsp: $.ASN1Decoder<
    TbsReleaseRsp
> | null = null;
let _cached_encoder_for_TbsReleaseRsp: $.ASN1Encoder<
    TbsReleaseRsp
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbsReleaseRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsReleaseRsp} The decoded data structure.
 */
export function _decode_TbsReleaseRsp(el: _Element) {
    if (!_cached_decoder_for_TbsReleaseRsp) {
        _cached_decoder_for_TbsReleaseRsp = function (
            el: _Element
        ): TbsReleaseRsp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<Version> =
                TbsReleaseRsp._default_value_for_version;
            let sigAlg!: AlgorithmIdentifier;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let pkiPath!: DER_PkiPath;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                sigAlg: (_el: _Element): void => {
                    sigAlg = _decode_AlgorithmIdentifier(_el);
                },
                assoID: (_el: _Element): void => {
                    assoID = _decode_AssoID(_el);
                },
                time: (_el: _Element): void => {
                    time = _decode_TimeStamp(_el);
                },
                pkiPath: (_el: _Element): void => {
                    pkiPath = _decode_DER_PkiPath(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TbsReleaseRsp,
                _extension_additions_list_spec_for_TbsReleaseRsp,
                _root_component_type_list_2_spec_for_TbsReleaseRsp,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TbsReleaseRsp(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                sigAlg,
                assoID,
                time,
                pkiPath,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TbsReleaseRsp(el);
}
/**
 * @summary Encodes a(n) TbsReleaseRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsReleaseRsp, encoded as an ASN.1 Element.
 */
export function _encode_TbsReleaseRsp(
    value: TbsReleaseRsp,
    elGetter: $.ASN1Encoder<TbsReleaseRsp>
) {
    if (!_cached_encoder_for_TbsReleaseRsp) {
        _cached_encoder_for_TbsReleaseRsp = function (
            value: TbsReleaseRsp,
            elGetter: $.ASN1Encoder<TbsReleaseRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                TbsReleaseRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_Version(value.version, $.BER),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.sigAlg,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AssoID(
                                value.assoID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_TimeStamp(
                                value.time,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_DER_PkiPath(
                                value.pkiPath,
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
    return _cached_encoder_for_TbsReleaseRsp(value, elGetter);
}

export type ReleaseRsp<> = Signed<TbsReleaseRsp>; // DefinedType
let _cached_decoder_for_ReleaseRsp: $.ASN1Decoder<ReleaseRsp> | null = null;
let _cached_encoder_for_ReleaseRsp: $.ASN1Encoder<ReleaseRsp> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReleaseRsp} The decoded data structure.
 */
export function _decode_ReleaseRsp(el: _Element) {
    if (!_cached_decoder_for_ReleaseRsp) {
        _cached_decoder_for_ReleaseRsp = _get_decoder_for_Signed<TbsReleaseRsp>(
            _decode_TbsReleaseRsp
        );
    }
    return _cached_decoder_for_ReleaseRsp(el);
}
/**
 * @summary Encodes a(n) ReleaseRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseRsp, encoded as an ASN.1 Element.
 */
export function _encode_ReleaseRsp(
    value: ReleaseRsp,
    elGetter: $.ASN1Encoder<ReleaseRsp>
) {
    if (!_cached_encoder_for_ReleaseRsp) {
        _cached_encoder_for_ReleaseRsp = _get_encoder_for_Signed<TbsReleaseRsp>(
            _encode_TbsReleaseRsp
        );
    }
    return _cached_encoder_for_ReleaseRsp(value, elGetter);
}

export type InvokeID<> = OCTET_STRING; // OctetStringType
let _cached_decoder_for_InvokeID: $.ASN1Decoder<InvokeID> | null = null;
let _cached_encoder_for_InvokeID: $.ASN1Encoder<InvokeID> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) InvokeID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeID} The decoded data structure.
 */
export function _decode_InvokeID(el: _Element) {
    if (!_cached_decoder_for_InvokeID) {
        _cached_decoder_for_InvokeID = $._decodeOctetString;
    }
    return _cached_decoder_for_InvokeID(el);
}
/**
 * @summary Encodes a(n) InvokeID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeID, encoded as an ASN.1 Element.
 */
export function _encode_InvokeID(
    value: InvokeID,
    elGetter: $.ASN1Encoder<InvokeID>
) {
    if (!_cached_encoder_for_InvokeID) {
        _cached_encoder_for_InvokeID = $._encodeOctetString;
    }
    return _cached_encoder_for_InvokeID(value, elGetter);
}

/**
 * @summary AadClient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AadClient ::= SEQUENCE {
 *   invokeID [0] InvokeID OPTIONAL,
 *   assoID       AssoID,
 *   time         TimeStamp,
 *   seq          SequenceNumber,
 *   keyEst   [2] AlgoInvoke{{SupportedKeyEstablishmentAlgos}} OPTIONAL }
 * ```
 *
 * @class
 */
export class AadClient {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: OPTIONAL<InvokeID>,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp,
        /**
         * @summary `seq`.
         * @public
         * @readonly
         */
        readonly seq: SequenceNumber,
        /**
         * @summary `keyEst`.
         * @public
         * @readonly
         */
        readonly keyEst: OPTIONAL<AlgoInvoke>
    ) {}

    /**
     * @summary Restructures an object into a AadClient
     * @description
     *
     * This takes an `object` and converts it to a `AadClient`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AadClient`.
     * @returns {AadClient}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AadClient]: AadClient[_K] }>
    ): AadClient {
        return new AadClient(
            _o.invokeID,
            _o.assoID,
            _o.time,
            _o.seq,
            _o.keyEst
        );
    }
}
/**
 * @summary The Leading Root Component Types of AadClient
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AadClient: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "seq",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "keyEst",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AadClient
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AadClient: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AadClient
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AadClient: $.ComponentSpec[] = [];
let _cached_decoder_for_AadClient: $.ASN1Decoder<AadClient> | null = null;
let _cached_encoder_for_AadClient: $.ASN1Encoder<AadClient> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AadClient
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AadClient} The decoded data structure.
 */
export function _decode_AadClient(el: _Element) {
    if (!_cached_decoder_for_AadClient) {
        _cached_decoder_for_AadClient = function (el: _Element): AadClient {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let invokeID: OPTIONAL<InvokeID>;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let seq!: SequenceNumber;
            let keyEst: OPTIONAL<AlgoInvoke>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                invokeID: (_el: _Element): void => {
                    invokeID = $._decode_implicit<InvokeID>(
                        () => _decode_InvokeID
                    )(_el);
                },
                assoID: (_el: _Element): void => {
                    assoID = _decode_AssoID(_el);
                },
                time: (_el: _Element): void => {
                    time = _decode_TimeStamp(_el);
                },
                seq: (_el: _Element): void => {
                    seq = _decode_SequenceNumber(_el);
                },
                keyEst: (_el: _Element): void => {
                    keyEst = $._decode_implicit<AlgoInvoke>(
                        () => _decode_AlgoInvoke
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AadClient,
                _extension_additions_list_spec_for_AadClient,
                _root_component_type_list_2_spec_for_AadClient,
                undefined
            );
            return new AadClient(
                /* SEQUENCE_CONSTRUCTOR_CALL */ invokeID,
                assoID,
                time,
                seq,
                keyEst
            );
        };
    }
    return _cached_decoder_for_AadClient(el);
}
/**
 * @summary Encodes a(n) AadClient into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AadClient, encoded as an ASN.1 Element.
 */
export function _encode_AadClient(
    value: AadClient,
    elGetter: $.ASN1Encoder<AadClient>
) {
    if (!_cached_encoder_for_AadClient) {
        _cached_encoder_for_AadClient = function (
            value: AadClient,
            elGetter: $.ASN1Encoder<AadClient>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.invokeID === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_InvokeID,
                                  $.BER
                              )(value.invokeID, $.BER),
                        /* REQUIRED   */ _encode_AssoID(value.assoID, $.BER),
                        /* REQUIRED   */ _encode_TimeStamp(value.time, $.BER),
                        /* REQUIRED   */ _encode_SequenceNumber(
                            value.seq,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.keyEst === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_AlgoInvoke,
                                  $.BER
                              )(value.keyEst, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AadClient(value, elGetter);
}

/**
 * @summary AadClientAE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AadClientAE ::= SEQUENCE {
 *   COMPONENTS OF    AadClient,
 *   encInvoke    [3] AlgoInvoke{{SupportedAeadAlgorithms}} OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class AadClientAE {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: OPTIONAL<InvokeID> /* REPLICATED_COMPONENT */,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID /* REPLICATED_COMPONENT */,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp /* REPLICATED_COMPONENT */,
        /**
         * @summary `seq`.
         * @public
         * @readonly
         */
        readonly seq: SequenceNumber /* REPLICATED_COMPONENT */,
        /**
         * @summary `keyEst`.
         * @public
         * @readonly
         */
        readonly keyEst: OPTIONAL<AlgoInvoke> /* REPLICATED_COMPONENT */,
        /**
         * @summary `encInvoke`.
         * @public
         * @readonly
         */
        readonly encInvoke: OPTIONAL<AlgoInvoke>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AadClientAE
     * @description
     *
     * This takes an `object` and converts it to a `AadClientAE`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AadClientAE`.
     * @returns {AadClientAE}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AadClientAE]: AadClientAE[_K] }>
    ): AadClientAE {
        return new AadClientAE(
            _o.invokeID,
            _o.assoID,
            _o.time,
            _o.seq,
            _o.keyEst,
            _o.encInvoke,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AadClientAE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AadClientAE: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "seq",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "keyEst",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encInvoke",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AadClientAE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AadClientAE: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AadClientAE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AadClientAE: $.ComponentSpec[] = [];
let _cached_decoder_for_AadClientAE: $.ASN1Decoder<AadClientAE> | null = null;
let _cached_encoder_for_AadClientAE: $.ASN1Encoder<AadClientAE> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AadClientAE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AadClientAE} The decoded data structure.
 */
export function _decode_AadClientAE(el: _Element) {
    if (!_cached_decoder_for_AadClientAE) {
        _cached_decoder_for_AadClientAE = function (el: _Element): AadClientAE {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let invokeID: OPTIONAL<InvokeID>;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let seq!: SequenceNumber;
            let keyEst: OPTIONAL<AlgoInvoke>;
            let encInvoke: OPTIONAL<AlgoInvoke>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                invokeID: (_el: _Element): void => {
                    invokeID = $._decode_implicit<InvokeID>(
                        () => _decode_InvokeID
                    )(_el);
                },
                assoID: (_el: _Element): void => {
                    assoID = _decode_AssoID(_el);
                },
                time: (_el: _Element): void => {
                    time = _decode_TimeStamp(_el);
                },
                seq: (_el: _Element): void => {
                    seq = _decode_SequenceNumber(_el);
                },
                keyEst: (_el: _Element): void => {
                    keyEst = $._decode_implicit<AlgoInvoke>(
                        () => _decode_AlgoInvoke
                    )(_el);
                },
                encInvoke: (_el: _Element): void => {
                    encInvoke = $._decode_implicit<AlgoInvoke>(
                        () => _decode_AlgoInvoke
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AadClientAE,
                _extension_additions_list_spec_for_AadClientAE,
                _root_component_type_list_2_spec_for_AadClientAE,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AadClientAE(
                /* SEQUENCE_CONSTRUCTOR_CALL */ invokeID,
                assoID,
                time,
                seq,
                keyEst,
                encInvoke,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AadClientAE(el);
}
/**
 * @summary Encodes a(n) AadClientAE into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AadClientAE, encoded as an ASN.1 Element.
 */
export function _encode_AadClientAE(
    value: AadClientAE,
    elGetter: $.ASN1Encoder<AadClientAE>
) {
    if (!_cached_encoder_for_AadClientAE) {
        _cached_encoder_for_AadClientAE = function (
            value: AadClientAE,
            elGetter: $.ASN1Encoder<AadClientAE>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.invokeID === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_InvokeID,
                                      $.BER
                                  )(value.invokeID, $.BER),
                            /* REQUIRED   */ _encode_AssoID(
                                value.assoID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_TimeStamp(
                                value.time,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_SequenceNumber(
                                value.seq,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.keyEst === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_AlgoInvoke,
                                      $.BER
                                  )(value.keyEst, $.BER),
                            /* IF_ABSENT  */ value.encInvoke === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_AlgoInvoke,
                                      $.BER
                                  )(value.encInvoke, $.BER),
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
    return _cached_encoder_for_AadClientAE(value, elGetter);
}

export type DataTransferClientAE<> = AUTHEN_ENCRYPT<AadClientAE, _Element>; // DefinedType
let _cached_decoder_for_DataTransferClientAE: $.ASN1Decoder<
    DataTransferClientAE
> | null = null;
let _cached_encoder_for_DataTransferClientAE: $.ASN1Encoder<
    DataTransferClientAE
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DataTransferClientAE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataTransferClientAE} The decoded data structure.
 */
export function _decode_DataTransferClientAE(el: _Element) {
    if (!_cached_decoder_for_DataTransferClientAE) {
        _cached_decoder_for_DataTransferClientAE = _get_decoder_for_AUTHEN_ENCRYPT<
            AadClientAE,
            _Element
        >(_decode_AadClientAE, $._decodeAny);
    }
    return _cached_decoder_for_DataTransferClientAE(el);
}
/**
 * @summary Encodes a(n) DataTransferClientAE into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataTransferClientAE, encoded as an ASN.1 Element.
 */
export function _encode_DataTransferClientAE(
    value: DataTransferClientAE,
    elGetter: $.ASN1Encoder<DataTransferClientAE>
) {
    if (!_cached_encoder_for_DataTransferClientAE) {
        _cached_encoder_for_DataTransferClientAE = _get_encoder_for_AUTHEN_ENCRYPT<
            AadClientAE,
            _Element
        >(_encode_AadClientAE, $._encodeAny);
    }
    return _cached_encoder_for_DataTransferClientAE(value, elGetter);
}

/**
 * @summary TbpDataTransferClient_conf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbpDataTransferClient-conf ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TbpDataTransferClient_conf =
    | { clear: WrappedProt } /* CHOICE_ALT_ROOT */
    | { protected_: ENCIPHERED<_Element> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_TbpDataTransferClient_conf: $.ASN1Decoder<
    TbpDataTransferClient_conf
> | null = null;
let _cached_encoder_for_TbpDataTransferClient_conf: $.ASN1Encoder<
    TbpDataTransferClient_conf
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbpDataTransferClient_conf
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbpDataTransferClient_conf} The decoded data structure.
 */
export function _decode_TbpDataTransferClient_conf(el: _Element) {
    if (!_cached_decoder_for_TbpDataTransferClient_conf) {
        _cached_decoder_for_TbpDataTransferClient_conf = $._decode_extensible_choice<
            TbpDataTransferClient_conf
        >({
            "CONTEXT 4": [
                "clear",
                $._decode_implicit<WrappedProt>(() => _decode_WrappedProt),
            ],
            "CONTEXT 5": [
                "protected_",
                $._decode_implicit<ENCIPHERED<_Element>>(() =>
                    _get_decoder_for_ENCIPHERED<_Element>($._decodeAny)
                ),
            ],
        });
    }
    return _cached_decoder_for_TbpDataTransferClient_conf(el);
}
/**
 * @summary Encodes a(n) TbpDataTransferClient_conf into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbpDataTransferClient_conf, encoded as an ASN.1 Element.
 */
export function _encode_TbpDataTransferClient_conf(
    value: TbpDataTransferClient_conf,
    elGetter: $.ASN1Encoder<TbpDataTransferClient_conf>
) {
    if (!_cached_encoder_for_TbpDataTransferClient_conf) {
        _cached_encoder_for_TbpDataTransferClient_conf = $._encode_choice<
            TbpDataTransferClient_conf
        >(
            {
                clear: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_WrappedProt,
                    $.BER
                ),
                protected_: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _get_encoder_for_ENCIPHERED<_Element>($._encodeAny),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TbpDataTransferClient_conf(value, elGetter);
}

/**
 * @summary TbpDataTransferClient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbpDataTransferClient ::= SEQUENCE {
 *   COMPONENTS OF    AadClient,
 *   encEnvoke    [3] AlgoInvoke{{SupportedSymmetricKeyAlgorithms}} OPTIONAL,
 *   conf             CHOICE {
 *     clear        [4] WrappedProt{{SupportedProtSet}},
 *     protected    [5] ENCIPHERED{WRAPPED-PROT.&Type},
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class TbpDataTransferClient {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: OPTIONAL<InvokeID> /* REPLICATED_COMPONENT */,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID /* REPLICATED_COMPONENT */,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp /* REPLICATED_COMPONENT */,
        /**
         * @summary `seq`.
         * @public
         * @readonly
         */
        readonly seq: SequenceNumber /* REPLICATED_COMPONENT */,
        /**
         * @summary `keyEst`.
         * @public
         * @readonly
         */
        readonly keyEst: OPTIONAL<AlgoInvoke> /* REPLICATED_COMPONENT */,
        /**
         * @summary `encEnvoke`.
         * @public
         * @readonly
         */
        readonly encEnvoke: OPTIONAL<AlgoInvoke>,
        /**
         * @summary `conf`.
         * @public
         * @readonly
         */
        readonly conf: TbpDataTransferClient_conf,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TbpDataTransferClient
     * @description
     *
     * This takes an `object` and converts it to a `TbpDataTransferClient`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbpDataTransferClient`.
     * @returns {TbpDataTransferClient}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof TbpDataTransferClient]: TbpDataTransferClient[_K] }
        >
    ): TbpDataTransferClient {
        return new TbpDataTransferClient(
            _o.invokeID,
            _o.assoID,
            _o.time,
            _o.seq,
            _o.keyEst,
            _o.encEnvoke,
            _o.conf,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of TbpDataTransferClient
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbpDataTransferClient: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "seq",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "keyEst",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encEnvoke",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec("conf", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of TbpDataTransferClient
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbpDataTransferClient: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TbpDataTransferClient
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbpDataTransferClient: $.ComponentSpec[] = [];
let _cached_decoder_for_TbpDataTransferClient: $.ASN1Decoder<
    TbpDataTransferClient
> | null = null;
let _cached_encoder_for_TbpDataTransferClient: $.ASN1Encoder<
    TbpDataTransferClient
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbpDataTransferClient
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbpDataTransferClient} The decoded data structure.
 */
export function _decode_TbpDataTransferClient(el: _Element) {
    if (!_cached_decoder_for_TbpDataTransferClient) {
        _cached_decoder_for_TbpDataTransferClient = function (
            el: _Element
        ): TbpDataTransferClient {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let invokeID: OPTIONAL<InvokeID>;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let seq!: SequenceNumber;
            let keyEst: OPTIONAL<AlgoInvoke>;
            let encEnvoke: OPTIONAL<AlgoInvoke>;
            let conf!: TbpDataTransferClient_conf;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                invokeID: (_el: _Element): void => {
                    invokeID = $._decode_implicit<InvokeID>(
                        () => _decode_InvokeID
                    )(_el);
                },
                assoID: (_el: _Element): void => {
                    assoID = _decode_AssoID(_el);
                },
                time: (_el: _Element): void => {
                    time = _decode_TimeStamp(_el);
                },
                seq: (_el: _Element): void => {
                    seq = _decode_SequenceNumber(_el);
                },
                keyEst: (_el: _Element): void => {
                    keyEst = $._decode_implicit<AlgoInvoke>(
                        () => _decode_AlgoInvoke
                    )(_el);
                },
                encEnvoke: (_el: _Element): void => {
                    encEnvoke = $._decode_implicit<AlgoInvoke>(
                        () => _decode_AlgoInvoke
                    )(_el);
                },
                conf: (_el: _Element): void => {
                    conf = _decode_TbpDataTransferClient_conf(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TbpDataTransferClient,
                _extension_additions_list_spec_for_TbpDataTransferClient,
                _root_component_type_list_2_spec_for_TbpDataTransferClient,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TbpDataTransferClient(
                /* SEQUENCE_CONSTRUCTOR_CALL */ invokeID,
                assoID,
                time,
                seq,
                keyEst,
                encEnvoke,
                conf,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TbpDataTransferClient(el);
}
/**
 * @summary Encodes a(n) TbpDataTransferClient into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbpDataTransferClient, encoded as an ASN.1 Element.
 */
export function _encode_TbpDataTransferClient(
    value: TbpDataTransferClient,
    elGetter: $.ASN1Encoder<TbpDataTransferClient>
) {
    if (!_cached_encoder_for_TbpDataTransferClient) {
        _cached_encoder_for_TbpDataTransferClient = function (
            value: TbpDataTransferClient,
            elGetter: $.ASN1Encoder<TbpDataTransferClient>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.invokeID === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_InvokeID,
                                      $.BER
                                  )(value.invokeID, $.BER),
                            /* REQUIRED   */ _encode_AssoID(
                                value.assoID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_TimeStamp(
                                value.time,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_SequenceNumber(
                                value.seq,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.keyEst === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_AlgoInvoke,
                                      $.BER
                                  )(value.keyEst, $.BER),
                            /* IF_ABSENT  */ value.encEnvoke === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_AlgoInvoke,
                                      $.BER
                                  )(value.encEnvoke, $.BER),
                            /* REQUIRED   */ _encode_TbpDataTransferClient_conf(
                                value.conf,
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
    return _cached_encoder_for_TbpDataTransferClient(value, elGetter);
}

export type DataTransferClientNEA<> = ICV_Invoke<TbpDataTransferClient>; // DefinedType
let _cached_decoder_for_DataTransferClientNEA: $.ASN1Decoder<
    DataTransferClientNEA
> | null = null;
let _cached_encoder_for_DataTransferClientNEA: $.ASN1Encoder<
    DataTransferClientNEA
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DataTransferClientNEA
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataTransferClientNEA} The decoded data structure.
 */
export function _decode_DataTransferClientNEA(el: _Element) {
    if (!_cached_decoder_for_DataTransferClientNEA) {
        _cached_decoder_for_DataTransferClientNEA = _get_decoder_for_ICV_Invoke<
            TbpDataTransferClient
        >(_decode_TbpDataTransferClient);
    }
    return _cached_decoder_for_DataTransferClientNEA(el);
}
/**
 * @summary Encodes a(n) DataTransferClientNEA into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataTransferClientNEA, encoded as an ASN.1 Element.
 */
export function _encode_DataTransferClientNEA(
    value: DataTransferClientNEA,
    elGetter: $.ASN1Encoder<DataTransferClientNEA>
) {
    if (!_cached_encoder_for_DataTransferClientNEA) {
        _cached_encoder_for_DataTransferClientNEA = _get_encoder_for_ICV_Invoke<
            TbpDataTransferClient
        >(_encode_TbpDataTransferClient);
    }
    return _cached_encoder_for_DataTransferClientNEA(value, elGetter);
}

/**
 * @summary DataTransferClient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataTransferClient  ::=  CHOICE {
 *   aead     [0] DataTransferClientAE,
 *   non-aead [1] DataTransferClientNEA,
 *   ... }
 * ```
 */
export type DataTransferClient =
    | { aead: DataTransferClientAE } /* CHOICE_ALT_ROOT */
    | { non_aead: DataTransferClientNEA } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_DataTransferClient: $.ASN1Decoder<
    DataTransferClient
> | null = null;
let _cached_encoder_for_DataTransferClient: $.ASN1Encoder<
    DataTransferClient
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DataTransferClient
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataTransferClient} The decoded data structure.
 */
export function _decode_DataTransferClient(el: _Element) {
    if (!_cached_decoder_for_DataTransferClient) {
        _cached_decoder_for_DataTransferClient = $._decode_extensible_choice<
            DataTransferClient
        >({
            "CONTEXT 0": [
                "aead",
                $._decode_implicit<DataTransferClientAE>(
                    () => _decode_DataTransferClientAE
                ),
            ],
            "CONTEXT 1": [
                "non_aead",
                $._decode_implicit<DataTransferClientNEA>(
                    () => _decode_DataTransferClientNEA
                ),
            ],
        });
    }
    return _cached_decoder_for_DataTransferClient(el);
}
/**
 * @summary Encodes a(n) DataTransferClient into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataTransferClient, encoded as an ASN.1 Element.
 */
export function _encode_DataTransferClient(
    value: DataTransferClient,
    elGetter: $.ASN1Encoder<DataTransferClient>
) {
    if (!_cached_encoder_for_DataTransferClient) {
        _cached_encoder_for_DataTransferClient = $._encode_choice<
            DataTransferClient
        >(
            {
                aead: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_DataTransferClientAE,
                    $.BER
                ),
                non_aead: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_DataTransferClientNEA,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DataTransferClient(value, elGetter);
}

/**
 * @summary AadServer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AadServer ::= SEQUENCE {
 *   invokeID   [0] InvokeID OPTIONAL,
 *   assoID         AssoID,
 *   time           TimeStamp,
 *   seq            SequenceNumber,
 *   reqRekey   [1] BOOLEAN DEFAULT FALSE,
 *   changedKey [2] BOOLEAN DEFAULT FALSE }
 * ```
 *
 * @class
 */
export class AadServer {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: OPTIONAL<InvokeID>,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp,
        /**
         * @summary `seq`.
         * @public
         * @readonly
         */
        readonly seq: SequenceNumber,
        /**
         * @summary `reqRekey`.
         * @public
         * @readonly
         */
        readonly reqRekey: OPTIONAL<BOOLEAN>,
        /**
         * @summary `changedKey`.
         * @public
         * @readonly
         */
        readonly changedKey: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a AadServer
     * @description
     *
     * This takes an `object` and converts it to a `AadServer`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AadServer`.
     * @returns {AadServer}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AadServer]: AadServer[_K] }>
    ): AadServer {
        return new AadServer(
            _o.invokeID,
            _o.assoID,
            _o.time,
            _o.seq,
            _o.reqRekey,
            _o.changedKey
        );
    }

    /**
     * @summary Getter that returns the default value for `reqRekey`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_reqRekey() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `changedKey`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_changedKey() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of AadServer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AadServer: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "seq",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "reqRekey",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "changedKey",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AadServer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AadServer: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AadServer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AadServer: $.ComponentSpec[] = [];
let _cached_decoder_for_AadServer: $.ASN1Decoder<AadServer> | null = null;
let _cached_encoder_for_AadServer: $.ASN1Encoder<AadServer> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AadServer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AadServer} The decoded data structure.
 */
export function _decode_AadServer(el: _Element) {
    if (!_cached_decoder_for_AadServer) {
        _cached_decoder_for_AadServer = function (el: _Element): AadServer {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let invokeID: OPTIONAL<InvokeID>;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let seq!: SequenceNumber;
            let reqRekey: OPTIONAL<BOOLEAN> =
                AadServer._default_value_for_reqRekey;
            let changedKey: OPTIONAL<BOOLEAN> =
                AadServer._default_value_for_changedKey;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                invokeID: (_el: _Element): void => {
                    invokeID = $._decode_implicit<InvokeID>(
                        () => _decode_InvokeID
                    )(_el);
                },
                assoID: (_el: _Element): void => {
                    assoID = _decode_AssoID(_el);
                },
                time: (_el: _Element): void => {
                    time = _decode_TimeStamp(_el);
                },
                seq: (_el: _Element): void => {
                    seq = _decode_SequenceNumber(_el);
                },
                reqRekey: (_el: _Element): void => {
                    reqRekey = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                changedKey: (_el: _Element): void => {
                    changedKey = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AadServer,
                _extension_additions_list_spec_for_AadServer,
                _root_component_type_list_2_spec_for_AadServer,
                undefined
            );
            return new AadServer(
                /* SEQUENCE_CONSTRUCTOR_CALL */ invokeID,
                assoID,
                time,
                seq,
                reqRekey,
                changedKey
            );
        };
    }
    return _cached_decoder_for_AadServer(el);
}
/**
 * @summary Encodes a(n) AadServer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AadServer, encoded as an ASN.1 Element.
 */
export function _encode_AadServer(
    value: AadServer,
    elGetter: $.ASN1Encoder<AadServer>
) {
    if (!_cached_encoder_for_AadServer) {
        _cached_encoder_for_AadServer = function (
            value: AadServer,
            elGetter: $.ASN1Encoder<AadServer>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.invokeID === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_InvokeID,
                                  $.BER
                              )(value.invokeID, $.BER),
                        /* REQUIRED   */ _encode_AssoID(value.assoID, $.BER),
                        /* REQUIRED   */ _encode_TimeStamp(value.time, $.BER),
                        /* REQUIRED   */ _encode_SequenceNumber(
                            value.seq,
                            $.BER
                        ),
                        /* IF_DEFAULT */ value.reqRekey === undefined ||
                        $.deepEq(
                            value.reqRekey,
                            AadServer._default_value_for_reqRekey
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.reqRekey, $.BER),
                        /* IF_DEFAULT */ value.changedKey === undefined ||
                        $.deepEq(
                            value.changedKey,
                            AadServer._default_value_for_changedKey
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.changedKey, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AadServer(value, elGetter);
}

/**
 * @summary AadServerAE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AadServerAE ::= SEQUENCE {
 *   COMPONENTS OF AadServer,
 *   encInvoke [3] AlgoInvoke{{SupportedAeadAlgorithms}} OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class AadServerAE {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: OPTIONAL<InvokeID> /* REPLICATED_COMPONENT */,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID /* REPLICATED_COMPONENT */,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp /* REPLICATED_COMPONENT */,
        /**
         * @summary `seq`.
         * @public
         * @readonly
         */
        readonly seq: SequenceNumber /* REPLICATED_COMPONENT */,
        /**
         * @summary `reqRekey`.
         * @public
         * @readonly
         */
        readonly reqRekey: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `changedKey`.
         * @public
         * @readonly
         */
        readonly changedKey: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `encInvoke`.
         * @public
         * @readonly
         */
        readonly encInvoke: OPTIONAL<AlgoInvoke>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AadServerAE
     * @description
     *
     * This takes an `object` and converts it to a `AadServerAE`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AadServerAE`.
     * @returns {AadServerAE}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AadServerAE]: AadServerAE[_K] }>
    ): AadServerAE {
        return new AadServerAE(
            _o.invokeID,
            _o.assoID,
            _o.time,
            _o.seq,
            _o.reqRekey,
            _o.changedKey,
            _o.encInvoke,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `reqRekey`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_reqRekey() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `changedKey`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_changedKey() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of AadServerAE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AadServerAE: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "seq",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "reqRekey",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "changedKey",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encInvoke",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AadServerAE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AadServerAE: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AadServerAE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AadServerAE: $.ComponentSpec[] = [];
let _cached_decoder_for_AadServerAE: $.ASN1Decoder<AadServerAE> | null = null;
let _cached_encoder_for_AadServerAE: $.ASN1Encoder<AadServerAE> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AadServerAE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AadServerAE} The decoded data structure.
 */
export function _decode_AadServerAE(el: _Element) {
    if (!_cached_decoder_for_AadServerAE) {
        _cached_decoder_for_AadServerAE = function (el: _Element): AadServerAE {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let invokeID: OPTIONAL<InvokeID>;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let seq!: SequenceNumber;
            let reqRekey: OPTIONAL<BOOLEAN> =
                AadServerAE._default_value_for_reqRekey;
            let changedKey: OPTIONAL<BOOLEAN> =
                AadServerAE._default_value_for_changedKey;
            let encInvoke: OPTIONAL<AlgoInvoke>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                invokeID: (_el: _Element): void => {
                    invokeID = $._decode_implicit<InvokeID>(
                        () => _decode_InvokeID
                    )(_el);
                },
                assoID: (_el: _Element): void => {
                    assoID = _decode_AssoID(_el);
                },
                time: (_el: _Element): void => {
                    time = _decode_TimeStamp(_el);
                },
                seq: (_el: _Element): void => {
                    seq = _decode_SequenceNumber(_el);
                },
                reqRekey: (_el: _Element): void => {
                    reqRekey = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                changedKey: (_el: _Element): void => {
                    changedKey = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                encInvoke: (_el: _Element): void => {
                    encInvoke = $._decode_implicit<AlgoInvoke>(
                        () => _decode_AlgoInvoke
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AadServerAE,
                _extension_additions_list_spec_for_AadServerAE,
                _root_component_type_list_2_spec_for_AadServerAE,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AadServerAE(
                /* SEQUENCE_CONSTRUCTOR_CALL */ invokeID,
                assoID,
                time,
                seq,
                reqRekey,
                changedKey,
                encInvoke,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AadServerAE(el);
}
/**
 * @summary Encodes a(n) AadServerAE into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AadServerAE, encoded as an ASN.1 Element.
 */
export function _encode_AadServerAE(
    value: AadServerAE,
    elGetter: $.ASN1Encoder<AadServerAE>
) {
    if (!_cached_encoder_for_AadServerAE) {
        _cached_encoder_for_AadServerAE = function (
            value: AadServerAE,
            elGetter: $.ASN1Encoder<AadServerAE>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.invokeID === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_InvokeID,
                                      $.BER
                                  )(value.invokeID, $.BER),
                            /* REQUIRED   */ _encode_AssoID(
                                value.assoID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_TimeStamp(
                                value.time,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_SequenceNumber(
                                value.seq,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.reqRekey === undefined ||
                            $.deepEq(
                                value.reqRekey,
                                AadServerAE._default_value_for_reqRekey
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.reqRekey, $.BER),
                            /* IF_DEFAULT */ value.changedKey === undefined ||
                            $.deepEq(
                                value.changedKey,
                                AadServerAE._default_value_for_changedKey
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.changedKey, $.BER),
                            /* IF_ABSENT  */ value.encInvoke === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_AlgoInvoke,
                                      $.BER
                                  )(value.encInvoke, $.BER),
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
    return _cached_encoder_for_AadServerAE(value, elGetter);
}

export type DataTransferServerAE<> = AUTHEN_ENCRYPT<AadServerAE, _Element>; // DefinedType
let _cached_decoder_for_DataTransferServerAE: $.ASN1Decoder<
    DataTransferServerAE
> | null = null;
let _cached_encoder_for_DataTransferServerAE: $.ASN1Encoder<
    DataTransferServerAE
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DataTransferServerAE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataTransferServerAE} The decoded data structure.
 */
export function _decode_DataTransferServerAE(el: _Element) {
    if (!_cached_decoder_for_DataTransferServerAE) {
        _cached_decoder_for_DataTransferServerAE = _get_decoder_for_AUTHEN_ENCRYPT<
            AadServerAE,
            _Element
        >(_decode_AadServerAE, $._decodeAny);
    }
    return _cached_decoder_for_DataTransferServerAE(el);
}
/**
 * @summary Encodes a(n) DataTransferServerAE into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataTransferServerAE, encoded as an ASN.1 Element.
 */
export function _encode_DataTransferServerAE(
    value: DataTransferServerAE,
    elGetter: $.ASN1Encoder<DataTransferServerAE>
) {
    if (!_cached_encoder_for_DataTransferServerAE) {
        _cached_encoder_for_DataTransferServerAE = _get_encoder_for_AUTHEN_ENCRYPT<
            AadServerAE,
            _Element
        >(_encode_AadServerAE, $._encodeAny);
    }
    return _cached_encoder_for_DataTransferServerAE(value, elGetter);
}

/**
 * @summary TbpDataTransferServer_conf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbpDataTransferServer-conf ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TbpDataTransferServer_conf =
    | { clear: WrappedProt } /* CHOICE_ALT_ROOT */
    | { protected_: ENCIPHERED<_Element> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_TbpDataTransferServer_conf: $.ASN1Decoder<
    TbpDataTransferServer_conf
> | null = null;
let _cached_encoder_for_TbpDataTransferServer_conf: $.ASN1Encoder<
    TbpDataTransferServer_conf
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbpDataTransferServer_conf
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbpDataTransferServer_conf} The decoded data structure.
 */
export function _decode_TbpDataTransferServer_conf(el: _Element) {
    if (!_cached_decoder_for_TbpDataTransferServer_conf) {
        _cached_decoder_for_TbpDataTransferServer_conf = $._decode_extensible_choice<
            TbpDataTransferServer_conf
        >({
            "CONTEXT 4": [
                "clear",
                $._decode_implicit<WrappedProt>(() => _decode_WrappedProt),
            ],
            "CONTEXT 5": [
                "protected_",
                $._decode_implicit<ENCIPHERED<_Element>>(() =>
                    _get_decoder_for_ENCIPHERED<_Element>($._decodeAny)
                ),
            ],
        });
    }
    return _cached_decoder_for_TbpDataTransferServer_conf(el);
}
/**
 * @summary Encodes a(n) TbpDataTransferServer_conf into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbpDataTransferServer_conf, encoded as an ASN.1 Element.
 */
export function _encode_TbpDataTransferServer_conf(
    value: TbpDataTransferServer_conf,
    elGetter: $.ASN1Encoder<TbpDataTransferServer_conf>
) {
    if (!_cached_encoder_for_TbpDataTransferServer_conf) {
        _cached_encoder_for_TbpDataTransferServer_conf = $._encode_choice<
            TbpDataTransferServer_conf
        >(
            {
                clear: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_WrappedProt,
                    $.BER
                ),
                protected_: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _get_encoder_for_ENCIPHERED<_Element>($._encodeAny),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TbpDataTransferServer_conf(value, elGetter);
}

/**
 * @summary TbpDataTransferServer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbpDataTransferServer ::= SEQUENCE {
 *   COMPONENTS OF     AadServer,
 *   encInvoke     [3] AlgoInvoke{{SupportedSymmetricKeyAlgorithms}} OPTIONAL,
 *   conf              CHOICE {
 *     clear         [4] WrappedProt{{SupportedProtSet}},
 *     protected     [5] ENCIPHERED{WRAPPED-PROT.&Type},
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class TbpDataTransferServer {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: OPTIONAL<InvokeID> /* REPLICATED_COMPONENT */,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID /* REPLICATED_COMPONENT */,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp /* REPLICATED_COMPONENT */,
        /**
         * @summary `seq`.
         * @public
         * @readonly
         */
        readonly seq: SequenceNumber /* REPLICATED_COMPONENT */,
        /**
         * @summary `reqRekey`.
         * @public
         * @readonly
         */
        readonly reqRekey: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `changedKey`.
         * @public
         * @readonly
         */
        readonly changedKey: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `encInvoke`.
         * @public
         * @readonly
         */
        readonly encInvoke: OPTIONAL<AlgoInvoke>,
        /**
         * @summary `conf`.
         * @public
         * @readonly
         */
        readonly conf: TbpDataTransferServer_conf,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TbpDataTransferServer
     * @description
     *
     * This takes an `object` and converts it to a `TbpDataTransferServer`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbpDataTransferServer`.
     * @returns {TbpDataTransferServer}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof TbpDataTransferServer]: TbpDataTransferServer[_K] }
        >
    ): TbpDataTransferServer {
        return new TbpDataTransferServer(
            _o.invokeID,
            _o.assoID,
            _o.time,
            _o.seq,
            _o.reqRekey,
            _o.changedKey,
            _o.encInvoke,
            _o.conf,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `reqRekey`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_reqRekey() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `changedKey`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_changedKey() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of TbpDataTransferServer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbpDataTransferServer: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "seq",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "reqRekey",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "changedKey",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encInvoke",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec("conf", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of TbpDataTransferServer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbpDataTransferServer: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TbpDataTransferServer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbpDataTransferServer: $.ComponentSpec[] = [];
let _cached_decoder_for_TbpDataTransferServer: $.ASN1Decoder<
    TbpDataTransferServer
> | null = null;
let _cached_encoder_for_TbpDataTransferServer: $.ASN1Encoder<
    TbpDataTransferServer
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TbpDataTransferServer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbpDataTransferServer} The decoded data structure.
 */
export function _decode_TbpDataTransferServer(el: _Element) {
    if (!_cached_decoder_for_TbpDataTransferServer) {
        _cached_decoder_for_TbpDataTransferServer = function (
            el: _Element
        ): TbpDataTransferServer {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let invokeID: OPTIONAL<InvokeID>;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let seq!: SequenceNumber;
            let reqRekey: OPTIONAL<BOOLEAN> =
                TbpDataTransferServer._default_value_for_reqRekey;
            let changedKey: OPTIONAL<BOOLEAN> =
                TbpDataTransferServer._default_value_for_changedKey;
            let encInvoke: OPTIONAL<AlgoInvoke>;
            let conf!: TbpDataTransferServer_conf;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                invokeID: (_el: _Element): void => {
                    invokeID = $._decode_implicit<InvokeID>(
                        () => _decode_InvokeID
                    )(_el);
                },
                assoID: (_el: _Element): void => {
                    assoID = _decode_AssoID(_el);
                },
                time: (_el: _Element): void => {
                    time = _decode_TimeStamp(_el);
                },
                seq: (_el: _Element): void => {
                    seq = _decode_SequenceNumber(_el);
                },
                reqRekey: (_el: _Element): void => {
                    reqRekey = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                changedKey: (_el: _Element): void => {
                    changedKey = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                encInvoke: (_el: _Element): void => {
                    encInvoke = $._decode_implicit<AlgoInvoke>(
                        () => _decode_AlgoInvoke
                    )(_el);
                },
                conf: (_el: _Element): void => {
                    conf = _decode_TbpDataTransferServer_conf(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TbpDataTransferServer,
                _extension_additions_list_spec_for_TbpDataTransferServer,
                _root_component_type_list_2_spec_for_TbpDataTransferServer,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TbpDataTransferServer(
                /* SEQUENCE_CONSTRUCTOR_CALL */ invokeID,
                assoID,
                time,
                seq,
                reqRekey,
                changedKey,
                encInvoke,
                conf,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TbpDataTransferServer(el);
}
/**
 * @summary Encodes a(n) TbpDataTransferServer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbpDataTransferServer, encoded as an ASN.1 Element.
 */
export function _encode_TbpDataTransferServer(
    value: TbpDataTransferServer,
    elGetter: $.ASN1Encoder<TbpDataTransferServer>
) {
    if (!_cached_encoder_for_TbpDataTransferServer) {
        _cached_encoder_for_TbpDataTransferServer = function (
            value: TbpDataTransferServer,
            elGetter: $.ASN1Encoder<TbpDataTransferServer>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.invokeID === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_InvokeID,
                                      $.BER
                                  )(value.invokeID, $.BER),
                            /* REQUIRED   */ _encode_AssoID(
                                value.assoID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_TimeStamp(
                                value.time,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_SequenceNumber(
                                value.seq,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.reqRekey === undefined ||
                            $.deepEq(
                                value.reqRekey,
                                TbpDataTransferServer._default_value_for_reqRekey
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.reqRekey, $.BER),
                            /* IF_DEFAULT */ value.changedKey === undefined ||
                            $.deepEq(
                                value.changedKey,
                                TbpDataTransferServer._default_value_for_changedKey
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.changedKey, $.BER),
                            /* IF_ABSENT  */ value.encInvoke === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_AlgoInvoke,
                                      $.BER
                                  )(value.encInvoke, $.BER),
                            /* REQUIRED   */ _encode_TbpDataTransferServer_conf(
                                value.conf,
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
    return _cached_encoder_for_TbpDataTransferServer(value, elGetter);
}

export type DataTransferServerNEA<> = ICV_Invoke<TbpDataTransferServer>; // DefinedType
let _cached_decoder_for_DataTransferServerNEA: $.ASN1Decoder<
    DataTransferServerNEA
> | null = null;
let _cached_encoder_for_DataTransferServerNEA: $.ASN1Encoder<
    DataTransferServerNEA
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DataTransferServerNEA
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataTransferServerNEA} The decoded data structure.
 */
export function _decode_DataTransferServerNEA(el: _Element) {
    if (!_cached_decoder_for_DataTransferServerNEA) {
        _cached_decoder_for_DataTransferServerNEA = _get_decoder_for_ICV_Invoke<
            TbpDataTransferServer
        >(_decode_TbpDataTransferServer);
    }
    return _cached_decoder_for_DataTransferServerNEA(el);
}
/**
 * @summary Encodes a(n) DataTransferServerNEA into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataTransferServerNEA, encoded as an ASN.1 Element.
 */
export function _encode_DataTransferServerNEA(
    value: DataTransferServerNEA,
    elGetter: $.ASN1Encoder<DataTransferServerNEA>
) {
    if (!_cached_encoder_for_DataTransferServerNEA) {
        _cached_encoder_for_DataTransferServerNEA = _get_encoder_for_ICV_Invoke<
            TbpDataTransferServer
        >(_encode_TbpDataTransferServer);
    }
    return _cached_encoder_for_DataTransferServerNEA(value, elGetter);
}

/**
 * @summary DataTransferServer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataTransferServer  ::=  CHOICE {
 *   aead     [0] DataTransferServerAE,
 *   non-aead [1] DataTransferServerNEA,
 *   ... }
 * ```
 */
export type DataTransferServer =
    | { aead: DataTransferServerAE } /* CHOICE_ALT_ROOT */
    | { non_aead: DataTransferServerNEA } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_DataTransferServer: $.ASN1Decoder<
    DataTransferServer
> | null = null;
let _cached_encoder_for_DataTransferServer: $.ASN1Encoder<
    DataTransferServer
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DataTransferServer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataTransferServer} The decoded data structure.
 */
export function _decode_DataTransferServer(el: _Element) {
    if (!_cached_decoder_for_DataTransferServer) {
        _cached_decoder_for_DataTransferServer = $._decode_extensible_choice<
            DataTransferServer
        >({
            "CONTEXT 0": [
                "aead",
                $._decode_implicit<DataTransferServerAE>(
                    () => _decode_DataTransferServerAE
                ),
            ],
            "CONTEXT 1": [
                "non_aead",
                $._decode_implicit<DataTransferServerNEA>(
                    () => _decode_DataTransferServerNEA
                ),
            ],
        });
    }
    return _cached_decoder_for_DataTransferServer(el);
}
/**
 * @summary Encodes a(n) DataTransferServer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataTransferServer, encoded as an ASN.1 Element.
 */
export function _encode_DataTransferServer(
    value: DataTransferServer,
    elGetter: $.ASN1Encoder<DataTransferServer>
) {
    if (!_cached_encoder_for_DataTransferServer) {
        _cached_encoder_for_DataTransferServer = $._encode_choice<
            DataTransferServer
        >(
            {
                aead: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_DataTransferServerAE,
                    $.BER
                ),
                non_aead: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_DataTransferServerNEA,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DataTransferServer(value, elGetter);
}

/**
 * @summary WrapperPDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WrapperPDU  ::=  CHOICE {
 *   handshakeReq       [0]  HandshakeReq,
 *   handshakeAcc       [1]  HandshakeAcc,
 *   handshakeWrpRej    [2]  HandshakeWrpRej,
 *   handshakeProRej    [3]  HandshakeProRej,
 *   handshakeSecAbort  [4]  HandshakeSecAbort,
 *   handshakeProAbort  [5]  HandshakeProAbort,
 *   dtSecAbort         [6]  DtSecAbort,
 *   applAbort          [7]  ApplAbort,
 *   releaseReq         [8]  ReleaseReq,
 *   releaseRsp         [9]  ReleaseRsp,
 *   dataTransferClient [10] DataTransferClient,
 *   dataTransferServer [11] DataTransferServer,
 *   ... }
 * ```
 */
export type WrapperPDU =
    | { handshakeReq: HandshakeReq } /* CHOICE_ALT_ROOT */
    | { handshakeAcc: HandshakeAcc } /* CHOICE_ALT_ROOT */
    | { handshakeWrpRej: HandshakeWrpRej } /* CHOICE_ALT_ROOT */
    | { handshakeProRej: HandshakeProRej } /* CHOICE_ALT_ROOT */
    | { handshakeSecAbort: HandshakeSecAbort } /* CHOICE_ALT_ROOT */
    | { handshakeProAbort: HandshakeProAbort } /* CHOICE_ALT_ROOT */
    | { dtSecAbort: DtSecAbort } /* CHOICE_ALT_ROOT */
    | { applAbort: ApplAbort } /* CHOICE_ALT_ROOT */
    | { releaseReq: ReleaseReq } /* CHOICE_ALT_ROOT */
    | { releaseRsp: ReleaseRsp } /* CHOICE_ALT_ROOT */
    | { dataTransferClient: DataTransferClient } /* CHOICE_ALT_ROOT */
    | { dataTransferServer: DataTransferServer } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_WrapperPDU: $.ASN1Decoder<WrapperPDU> | null = null;
let _cached_encoder_for_WrapperPDU: $.ASN1Encoder<WrapperPDU> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) WrapperPDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WrapperPDU} The decoded data structure.
 */
export function _decode_WrapperPDU(el: _Element) {
    if (!_cached_decoder_for_WrapperPDU) {
        _cached_decoder_for_WrapperPDU = $._decode_extensible_choice<
            WrapperPDU
        >({
            "CONTEXT 0": [
                "handshakeReq",
                $._decode_implicit<HandshakeReq>(() => _decode_HandshakeReq),
            ],
            "CONTEXT 1": [
                "handshakeAcc",
                $._decode_implicit<HandshakeAcc>(() => _decode_HandshakeAcc),
            ],
            "CONTEXT 2": [
                "handshakeWrpRej",
                $._decode_implicit<HandshakeWrpRej>(
                    () => _decode_HandshakeWrpRej
                ),
            ],
            "CONTEXT 3": [
                "handshakeProRej",
                $._decode_implicit<HandshakeProRej>(
                    () => _decode_HandshakeProRej
                ),
            ],
            "CONTEXT 4": [
                "handshakeSecAbort",
                $._decode_implicit<HandshakeSecAbort>(
                    () => _decode_HandshakeSecAbort
                ),
            ],
            "CONTEXT 5": [
                "handshakeProAbort",
                $._decode_implicit<HandshakeProAbort>(
                    () => _decode_HandshakeProAbort
                ),
            ],
            "CONTEXT 6": [
                "dtSecAbort",
                $._decode_implicit<DtSecAbort>(() => _decode_DtSecAbort),
            ],
            "CONTEXT 7": [
                "applAbort",
                $._decode_implicit<ApplAbort>(() => _decode_ApplAbort),
            ],
            "CONTEXT 8": [
                "releaseReq",
                $._decode_implicit<ReleaseReq>(() => _decode_ReleaseReq),
            ],
            "CONTEXT 9": [
                "releaseRsp",
                $._decode_implicit<ReleaseRsp>(() => _decode_ReleaseRsp),
            ],
            "CONTEXT 10": [
                "dataTransferClient",
                $._decode_implicit<DataTransferClient>(
                    () => _decode_DataTransferClient
                ),
            ],
            "CONTEXT 11": [
                "dataTransferServer",
                $._decode_implicit<DataTransferServer>(
                    () => _decode_DataTransferServer
                ),
            ],
        });
    }
    return _cached_decoder_for_WrapperPDU(el);
}
/**
 * @summary Encodes a(n) WrapperPDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WrapperPDU, encoded as an ASN.1 Element.
 */
export function _encode_WrapperPDU(
    value: WrapperPDU,
    elGetter: $.ASN1Encoder<WrapperPDU>
) {
    if (!_cached_encoder_for_WrapperPDU) {
        _cached_encoder_for_WrapperPDU = $._encode_choice<WrapperPDU>(
            {
                handshakeReq: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_HandshakeReq,
                    $.BER
                ),
                handshakeAcc: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_HandshakeAcc,
                    $.BER
                ),
                handshakeWrpRej: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_HandshakeWrpRej,
                    $.BER
                ),
                handshakeProRej: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_HandshakeProRej,
                    $.BER
                ),
                handshakeSecAbort: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_HandshakeSecAbort,
                    $.BER
                ),
                handshakeProAbort: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_HandshakeProAbort,
                    $.BER
                ),
                dtSecAbort: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => _encode_DtSecAbort,
                    $.BER
                ),
                applAbort: $._encode_implicit(
                    _TagClass.context,
                    7,
                    () => _encode_ApplAbort,
                    $.BER
                ),
                releaseReq: $._encode_implicit(
                    _TagClass.context,
                    8,
                    () => _encode_ReleaseReq,
                    $.BER
                ),
                releaseRsp: $._encode_implicit(
                    _TagClass.context,
                    9,
                    () => _encode_ReleaseRsp,
                    $.BER
                ),
                dataTransferClient: $._encode_implicit(
                    _TagClass.context,
                    10,
                    () => _encode_DataTransferClient,
                    $.BER
                ),
                dataTransferServer: $._encode_implicit(
                    _TagClass.context,
                    11,
                    () => _encode_DataTransferServer,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_WrapperPDU(value, elGetter);
}

/**
 * @summary SupportedSignatureAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedSignatureAlgorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedSignatureAlgorithms: ALGORITHM[] = [];

/**
 * @summary SupportedAltSignatureAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedAltSignatureAlgorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedAltSignatureAlgorithms: ALGORITHM[] = [];

/**
 * @summary SupportedKeyEstablishmentAlgos
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedKeyEstablishmentAlgos ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedKeyEstablishmentAlgos: ALGORITHM[] = [];

/**
 * @summary SupportedAltKeyEstablishmentAlgos
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedAltKeyEstablishmentAlgos ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedAltKeyEstablishmentAlgos: ALGORITHM[] = [];

/**
 * @summary SupportedAeadAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedAeadAlgorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedAeadAlgorithms: ALGORITHM[] = [];

/**
 * @summary SupportedSymmetricKeyAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedSymmetricKeyAlgorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedSymmetricKeyAlgorithms: ALGORITHM[] = [];

/**
 * @summary SupportedIcvAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedIcvAlgorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedIcvAlgorithms: ALGORITHM[] = [];

/* END_MODULE Wrapper */
/* eslint-enable */
