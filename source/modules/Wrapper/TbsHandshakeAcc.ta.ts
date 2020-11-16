/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    TRUE_BIT,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
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
    TbsHandshakeAcc_encr_mode,
    _decode_TbsHandshakeAcc_encr_mode,
    _encode_TbsHandshakeAcc_encr_mode,
} from "../Wrapper/TbsHandshakeAcc-encr-mode.ta";
import {
    TbsHandshakeAcc_keyEstSel,
    _decode_TbsHandshakeAcc_keyEstSel,
    _encode_TbsHandshakeAcc_keyEstSel,
} from "../Wrapper/TbsHandshakeAcc-keyEstSel.ta";
import {
    TbsHandshakeAcc_sigSel,
    _decode_TbsHandshakeAcc_sigSel,
    _encode_TbsHandshakeAcc_sigSel,
} from "../Wrapper/TbsHandshakeAcc-sigSel.ta";
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
    TbsHandshakeAcc_encr_mode,
    _decode_TbsHandshakeAcc_encr_mode,
    _encode_TbsHandshakeAcc_encr_mode,
} from "../Wrapper/TbsHandshakeAcc-encr-mode.ta";
export {
    TbsHandshakeAcc_keyEstSel,
    _decode_TbsHandshakeAcc_keyEstSel,
    _encode_TbsHandshakeAcc_keyEstSel,
} from "../Wrapper/TbsHandshakeAcc-keyEstSel.ta";
export {
    TbsHandshakeAcc_sigSel,
    _decode_TbsHandshakeAcc_sigSel,
    _encode_TbsHandshakeAcc_sigSel,
} from "../Wrapper/TbsHandshakeAcc-sigSel.ta";
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
export {
    WrappedProt,
    _decode_WrappedProt,
    _encode_WrappedProt,
} from "../Wrapper/WrappedProt.ta";

/* START_OF_SYMBOL_DEFINITION TbsHandshakeAcc */
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
/* END_OF_SYMBOL_DEFINITION TbsHandshakeAcc */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsHandshakeAcc */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsHandshakeAcc */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsHandshakeAcc */
/**
 * @summary The Trailing Root Component Types of TbsHandshakeAcc
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsHandshakeAcc: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsHandshakeAcc */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsHandshakeAcc */
/**
 * @summary The Extension Addition Component Types of TbsHandshakeAcc
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsHandshakeAcc: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsHandshakeAcc */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeAcc */
let _cached_decoder_for_TbsHandshakeAcc: $.ASN1Decoder<
    TbsHandshakeAcc
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeAcc */

/* START_OF_SYMBOL_DEFINITION _decode_TbsHandshakeAcc */
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
            return new TbsHandshakeAcc /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
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
/* END_OF_SYMBOL_DEFINITION _decode_TbsHandshakeAcc */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeAcc */
let _cached_encoder_for_TbsHandshakeAcc: $.ASN1Encoder<
    TbsHandshakeAcc
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeAcc */

/* START_OF_SYMBOL_DEFINITION _encode_TbsHandshakeAcc */
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

/* END_OF_SYMBOL_DEFINITION _encode_TbsHandshakeAcc */

/* eslint-enable */
