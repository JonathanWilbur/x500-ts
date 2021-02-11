/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
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
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from "../Wrapper/TimeStamp.ta";
import {
    WrappedProt,
    _decode_WrappedProt,
    _encode_WrappedProt,
} from "../Wrapper/WrappedProt.ta";
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
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from "../Wrapper/TimeStamp.ta";
export {
    WrappedProt,
    _decode_WrappedProt,
    _encode_WrappedProt,
} from "../Wrapper/WrappedProt.ta";

/* START_OF_SYMBOL_DEFINITION TbsHandshakeProAbort */
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
        _o: { [_K in keyof TbsHandshakeProAbort]: TbsHandshakeProAbort[_K] }
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
/* END_OF_SYMBOL_DEFINITION TbsHandshakeProAbort */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsHandshakeProAbort */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsHandshakeProAbort */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsHandshakeProAbort */
/**
 * @summary The Trailing Root Component Types of TbsHandshakeProAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsHandshakeProAbort: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsHandshakeProAbort */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsHandshakeProAbort */
/**
 * @summary The Extension Addition Component Types of TbsHandshakeProAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsHandshakeProAbort: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsHandshakeProAbort */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeProAbort */
let _cached_decoder_for_TbsHandshakeProAbort: $.ASN1Decoder<TbsHandshakeProAbort> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeProAbort */

/* START_OF_SYMBOL_DEFINITION _decode_TbsHandshakeProAbort */
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
/* END_OF_SYMBOL_DEFINITION _decode_TbsHandshakeProAbort */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeProAbort */
let _cached_encoder_for_TbsHandshakeProAbort: $.ASN1Encoder<TbsHandshakeProAbort> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeProAbort */

/* START_OF_SYMBOL_DEFINITION _encode_TbsHandshakeProAbort */
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

/* END_OF_SYMBOL_DEFINITION _encode_TbsHandshakeProAbort */

/* eslint-enable */
