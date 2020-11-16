/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    TRUE_BIT,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI_Stub/AlgorithmIdentifier.ta";
import { AssoID, _decode_AssoID, _encode_AssoID } from "../Wrapper/AssoID.ta";
import {
    DER_PkiPath,
    _decode_DER_PkiPath,
    _encode_DER_PkiPath,
} from "../Wrapper/DER-PkiPath.ta";
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
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI_Stub/AlgorithmIdentifier.ta";
export { AssoID, _decode_AssoID, _encode_AssoID } from "../Wrapper/AssoID.ta";
export {
    DER_PkiPath,
    _decode_DER_PkiPath,
    _encode_DER_PkiPath,
} from "../Wrapper/DER-PkiPath.ta";
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

/* START_OF_SYMBOL_DEFINITION TbsReleaseReq */
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
/* END_OF_SYMBOL_DEFINITION TbsReleaseReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsReleaseReq */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsReleaseReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsReleaseReq */
/**
 * @summary The Trailing Root Component Types of TbsReleaseReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsReleaseReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsReleaseReq */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsReleaseReq */
/**
 * @summary The Extension Addition Component Types of TbsReleaseReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsReleaseReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsReleaseReq */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsReleaseReq */
let _cached_decoder_for_TbsReleaseReq: $.ASN1Decoder<
    TbsReleaseReq
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsReleaseReq */

/* START_OF_SYMBOL_DEFINITION _decode_TbsReleaseReq */
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
            return new TbsReleaseReq /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
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
/* END_OF_SYMBOL_DEFINITION _decode_TbsReleaseReq */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsReleaseReq */
let _cached_encoder_for_TbsReleaseReq: $.ASN1Encoder<
    TbsReleaseReq
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsReleaseReq */

/* START_OF_SYMBOL_DEFINITION _encode_TbsReleaseReq */
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

/* END_OF_SYMBOL_DEFINITION _encode_TbsReleaseReq */

/* eslint-enable */
