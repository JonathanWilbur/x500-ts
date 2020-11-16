/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    TRUE_BIT,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI_Stub/AlgorithmIdentifier.ta";
import {
    AlgorithmWithInvoke,
    _decode_AlgorithmWithInvoke,
    _encode_AlgorithmWithInvoke,
} from "../PKI_Stub/AlgorithmWithInvoke.ta";
import { AssoID, _decode_AssoID, _encode_AssoID } from "../Wrapper/AssoID.ta";
import {
    DER_AttributeCertificate,
    _decode_DER_AttributeCertificate,
    _encode_DER_AttributeCertificate,
} from "../Wrapper/DER-AttributeCertificate.ta";
import {
    DER_PkiPath,
    _decode_DER_PkiPath,
    _encode_DER_PkiPath,
} from "../Wrapper/DER-PkiPath.ta";
import {
    TbsHandshakeReq_encr_mode,
    _decode_TbsHandshakeReq_encr_mode,
    _encode_TbsHandshakeReq_encr_mode,
} from "../Wrapper/TbsHandshakeReq-encr-mode.ta";
import {
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from "../Wrapper/TimeStamp.ta";
import {
    Version,
    Version_v1 /* IMPORTED_BIT */,
    _decode_Version,
    _encode_Version,
} from "../Wrapper/Version.ta";
import {
    WrappedProt,
    _decode_WrappedProt,
    _encode_WrappedProt,
} from "../Wrapper/WrappedProt.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI_Stub/AlgorithmIdentifier.ta";
export {
    AlgorithmWithInvoke,
    _decode_AlgorithmWithInvoke,
    _encode_AlgorithmWithInvoke,
} from "../PKI_Stub/AlgorithmWithInvoke.ta";
export { SupportedProtSet } from "../ProtProtocols/SupportedProtSet.osa";
export { AssoID, _decode_AssoID, _encode_AssoID } from "../Wrapper/AssoID.ta";
export {
    DER_AttributeCertificate,
    _decode_DER_AttributeCertificate,
    _encode_DER_AttributeCertificate,
} from "../Wrapper/DER-AttributeCertificate.ta";
export {
    DER_PkiPath,
    _decode_DER_PkiPath,
    _encode_DER_PkiPath,
} from "../Wrapper/DER-PkiPath.ta";
export {
    TbsHandshakeReq_encr_mode,
    _decode_TbsHandshakeReq_encr_mode,
    _encode_TbsHandshakeReq_encr_mode,
} from "../Wrapper/TbsHandshakeReq-encr-mode.ta";
export {
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from "../Wrapper/TimeStamp.ta";
export {
    Version,
    Version_v1 /* IMPORTED_BIT */,
    _decode_Version,
    _encode_Version,
} from "../Wrapper/Version.ta";
export { WRAPPED_PROT } from "../Wrapper/WRAPPED-PROT.oca";
export {
    WrappedProt,
    _decode_WrappedProt,
    _encode_WrappedProt,
} from "../Wrapper/WrappedProt.ta";

/* START_OF_SYMBOL_DEFINITION TbsHandshakeReq */
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
/* END_OF_SYMBOL_DEFINITION TbsHandshakeReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsHandshakeReq */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsHandshakeReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsHandshakeReq */
/**
 * @summary The Trailing Root Component Types of TbsHandshakeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsHandshakeReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsHandshakeReq */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsHandshakeReq */
/**
 * @summary The Extension Addition Component Types of TbsHandshakeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsHandshakeReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsHandshakeReq */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeReq */
let _cached_decoder_for_TbsHandshakeReq: $.ASN1Decoder<
    TbsHandshakeReq
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeReq */

/* START_OF_SYMBOL_DEFINITION _decode_TbsHandshakeReq */
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
            return new TbsHandshakeReq /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
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
/* END_OF_SYMBOL_DEFINITION _decode_TbsHandshakeReq */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeReq */
let _cached_encoder_for_TbsHandshakeReq: $.ASN1Encoder<
    TbsHandshakeReq
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeReq */

/* START_OF_SYMBOL_DEFINITION _encode_TbsHandshakeReq */
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

/* END_OF_SYMBOL_DEFINITION _encode_TbsHandshakeReq */

/* eslint-enable */
