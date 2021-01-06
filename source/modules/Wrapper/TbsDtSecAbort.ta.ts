/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI-Stub/AlgorithmIdentifier.ta";
import { AssoID, _decode_AssoID, _encode_AssoID } from "../Wrapper/AssoID.ta";
import {
    DER_PkiPath,
    _decode_DER_PkiPath,
    _encode_DER_PkiPath,
} from "../Wrapper/DER-PkiPath.ta";
import {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from "../Wrapper/SequenceNumber.ta";
import {
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from "../Wrapper/TimeStamp.ta";
import {
    WrpError,
    _decode_WrpError,
    _encode_WrpError,
    _enum_for_WrpError,
} from "../Wrapper/WrpError.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI-Stub/AlgorithmIdentifier.ta";
export { AssoID, _decode_AssoID, _encode_AssoID } from "../Wrapper/AssoID.ta";
export {
    DER_PkiPath,
    _decode_DER_PkiPath,
    _encode_DER_PkiPath,
} from "../Wrapper/DER-PkiPath.ta";
export {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from "../Wrapper/SequenceNumber.ta";
export {
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from "../Wrapper/TimeStamp.ta";
export {
    aead_algorithms_not_supported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    aead_is_required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    aead_not_allowed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    alt_signature_not_allowed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    changedKey_out_of_sequence /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    duplicate_assoID /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dynamic_aead_algo_parms_not_required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dynamic_aead_algo_parms_required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dynamic_icv_algo_parms_not_required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dynamic_icv_algo_parms_required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dynamic_symKey_algo_parms_not_required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dynamic_symKey_algo_parms_required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    encryption_not_supported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    encryption_required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    encr_mode_aead_not_supported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    icv_algorithms_not_supported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalid_aead_algorithm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalid_alt_key_estab_algorithm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalid_attribute_certificate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalid_dynamic_aead_algo_parms /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalid_dynamic_icv_algo_parms /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalid_dynamic_keyEst_algo_parms /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalid_dynamic_symKey_algo_parms /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalid_icv_algorithm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalid_key_estab_algorithm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalid_signatureAlgorithm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalid_symmetricKey_algorithm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalid_time_value /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    key_estab_algorithm_not_supported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    only_one_version /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    protected_protocol_not_supported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    protocol_error /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    rekey_out_of_sequence /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    symmetricKey_algorithms_not_supported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unexpected_invokeID_received /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unexpected_version /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WrpError,
    WrpError_aead_algorithms_not_supported /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_aead_is_required /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_aead_not_allowed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_alt_signature_not_allowed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_changedKey_out_of_sequence /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_duplicate_assoID /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_dynamic_aead_algo_parms_not_required /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_dynamic_aead_algo_parms_required /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_dynamic_icv_algo_parms_not_required /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_dynamic_icv_algo_parms_required /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_dynamic_symKey_algo_parms_not_required /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_dynamic_symKey_algo_parms_required /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_encryption_not_supported /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_encryption_required /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_encr_mode_aead_not_supported /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_icv_algorithms_not_supported /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_invalid_aead_algorithm /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_invalid_alt_key_estab_algorithm /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_invalid_attribute_certificate /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_invalid_dynamic_aead_algo_parms /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_invalid_dynamic_icv_algo_parms /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_invalid_dynamic_keyEst_algo_parms /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_invalid_dynamic_symKey_algo_parms /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_invalid_icv_algorithm /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_invalid_key_estab_algorithm /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_invalid_signatureAlgorithm /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_invalid_symmetricKey_algorithm /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_invalid_time_value /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_key_estab_algorithm_not_supported /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_only_one_version /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_protected_protocol_not_supported /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_protocol_error /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_rekey_out_of_sequence /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_symmetricKey_algorithms_not_supported /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_unexpected_invokeID_received /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WrpError_unexpected_version /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_WrpError,
    _encode_WrpError,
    _enum_for_WrpError,
} from "../Wrapper/WrpError.ta";

/* START_OF_SYMBOL_DEFINITION TbsDtSecAbort */
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
/* END_OF_SYMBOL_DEFINITION TbsDtSecAbort */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsDtSecAbort */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsDtSecAbort */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsDtSecAbort */
/**
 * @summary The Trailing Root Component Types of TbsDtSecAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsDtSecAbort: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsDtSecAbort */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsDtSecAbort */
/**
 * @summary The Extension Addition Component Types of TbsDtSecAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsDtSecAbort: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsDtSecAbort */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsDtSecAbort */
let _cached_decoder_for_TbsDtSecAbort: $.ASN1Decoder<TbsDtSecAbort> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsDtSecAbort */

/* START_OF_SYMBOL_DEFINITION _decode_TbsDtSecAbort */
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
/* END_OF_SYMBOL_DEFINITION _decode_TbsDtSecAbort */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsDtSecAbort */
let _cached_encoder_for_TbsDtSecAbort: $.ASN1Encoder<TbsDtSecAbort> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsDtSecAbort */

/* START_OF_SYMBOL_DEFINITION _encode_TbsDtSecAbort */
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

/* END_OF_SYMBOL_DEFINITION _encode_TbsDtSecAbort */

/* eslint-enable */
