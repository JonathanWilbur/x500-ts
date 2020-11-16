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
    DER_PkiPath,
    _decode_DER_PkiPath,
    _encode_DER_PkiPath,
} from "../Wrapper/DER-PkiPath.ta";
import {
    TbsHandshakeWrpRej_sigSel,
    _decode_TbsHandshakeWrpRej_sigSel,
    _encode_TbsHandshakeWrpRej_sigSel,
} from "../Wrapper/TbsHandshakeWrpRej-sigSel.ta";
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
    WrpError,
    _decode_WrpError,
    _encode_WrpError,
    _enum_for_WrpError,
} from "../Wrapper/WrpError.ta";
export { AssoID, _decode_AssoID, _encode_AssoID } from "../Wrapper/AssoID.ta";
export {
    DER_PkiPath,
    _decode_DER_PkiPath,
    _encode_DER_PkiPath,
} from "../Wrapper/DER-PkiPath.ta";
export {
    TbsHandshakeWrpRej_sigSel,
    _decode_TbsHandshakeWrpRej_sigSel,
    _encode_TbsHandshakeWrpRej_sigSel,
} from "../Wrapper/TbsHandshakeWrpRej-sigSel.ta";
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
    WrpError,
    WrpError_aead_algorithms_not_supported /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_aead_is_required /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_aead_not_allowed /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_alt_signature_not_allowed /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_changedKey_out_of_sequence /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_duplicate_assoID /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_dynamic_aead_algo_parms_not_required /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_dynamic_aead_algo_parms_required /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_dynamic_icv_algo_parms_not_required /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_dynamic_icv_algo_parms_required /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_dynamic_symKey_algo_parms_not_required /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_dynamic_symKey_algo_parms_required /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_encryption_not_supported /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_encryption_required /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_encr_mode_aead_not_supported /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_icv_algorithms_not_supported /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_invalid_aead_algorithm /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_invalid_alt_key_estab_algorithm /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_invalid_attribute_certificate /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_invalid_dynamic_aead_algo_parms /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_invalid_dynamic_icv_algo_parms /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_invalid_dynamic_keyEst_algo_parms /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_invalid_dynamic_symKey_algo_parms /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_invalid_icv_algorithm /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_invalid_key_estab_algorithm /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_invalid_signatureAlgorithm /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_invalid_symmetricKey_algorithm /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_invalid_time_value /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_key_estab_algorithm_not_supported /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_only_one_version /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_protected_protocol_not_supported /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_protocol_error /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_rekey_out_of_sequence /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_symmetricKey_algorithms_not_supported /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_unexpected_invokeID_received /* IMPORTED_ENUMERATION_ITEM */,
    WrpError_unexpected_version /* IMPORTED_ENUMERATION_ITEM */,
    _decode_WrpError,
    _encode_WrpError,
    _enum_for_WrpError,
} from "../Wrapper/WrpError.ta";

/* START_OF_SYMBOL_DEFINITION TbsHandshakeWrpRej */
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
/* END_OF_SYMBOL_DEFINITION TbsHandshakeWrpRej */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsHandshakeWrpRej */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsHandshakeWrpRej */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsHandshakeWrpRej */
/**
 * @summary The Trailing Root Component Types of TbsHandshakeWrpRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsHandshakeWrpRej: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsHandshakeWrpRej */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsHandshakeWrpRej */
/**
 * @summary The Extension Addition Component Types of TbsHandshakeWrpRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsHandshakeWrpRej: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsHandshakeWrpRej */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeWrpRej */
let _cached_decoder_for_TbsHandshakeWrpRej: $.ASN1Decoder<
    TbsHandshakeWrpRej
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeWrpRej */

/* START_OF_SYMBOL_DEFINITION _decode_TbsHandshakeWrpRej */
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
            return new TbsHandshakeWrpRej /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
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
/* END_OF_SYMBOL_DEFINITION _decode_TbsHandshakeWrpRej */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeWrpRej */
let _cached_encoder_for_TbsHandshakeWrpRej: $.ASN1Encoder<
    TbsHandshakeWrpRej
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeWrpRej */

/* START_OF_SYMBOL_DEFINITION _encode_TbsHandshakeWrpRej */
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

/* END_OF_SYMBOL_DEFINITION _encode_TbsHandshakeWrpRej */

/* eslint-enable */
