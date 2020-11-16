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
} from "../PKI_Stub/AlgorithmIdentifier.ta";
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
    WrappedProt,
    _decode_WrappedProt,
    _encode_WrappedProt,
} from "../Wrapper/WrappedProt.ta";
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
    WrappedProt,
    _decode_WrappedProt,
    _encode_WrappedProt,
} from "../Wrapper/WrappedProt.ta";

/* START_OF_SYMBOL_DEFINITION TbsApplAbort */
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
/* END_OF_SYMBOL_DEFINITION TbsApplAbort */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsApplAbort */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsApplAbort */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsApplAbort */
/**
 * @summary The Trailing Root Component Types of TbsApplAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsApplAbort: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsApplAbort */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsApplAbort */
/**
 * @summary The Extension Addition Component Types of TbsApplAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsApplAbort: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsApplAbort */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsApplAbort */
let _cached_decoder_for_TbsApplAbort: $.ASN1Decoder<TbsApplAbort> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsApplAbort */

/* START_OF_SYMBOL_DEFINITION _decode_TbsApplAbort */
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
/* END_OF_SYMBOL_DEFINITION _decode_TbsApplAbort */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsApplAbort */
let _cached_encoder_for_TbsApplAbort: $.ASN1Encoder<TbsApplAbort> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsApplAbort */

/* START_OF_SYMBOL_DEFINITION _encode_TbsApplAbort */
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

/* END_OF_SYMBOL_DEFINITION _encode_TbsApplAbort */

/* eslint-enable */
