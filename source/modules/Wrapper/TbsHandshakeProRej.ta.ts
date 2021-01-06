/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { AssoID, _decode_AssoID, _encode_AssoID } from "../Wrapper/AssoID.ta";
import {
    DER_PkiPath,
    _decode_DER_PkiPath,
    _encode_DER_PkiPath,
} from "../Wrapper/DER-PkiPath.ta";
import {
    TbsHandshakeProRej_sigSel,
    _decode_TbsHandshakeProRej_sigSel,
    _encode_TbsHandshakeProRej_sigSel,
} from "../Wrapper/TbsHandshakeProRej-sigSel.ta";
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
export { AssoID, _decode_AssoID, _encode_AssoID } from "../Wrapper/AssoID.ta";
export {
    DER_PkiPath,
    _decode_DER_PkiPath,
    _encode_DER_PkiPath,
} from "../Wrapper/DER-PkiPath.ta";
export {
    TbsHandshakeProRej_sigSel,
    _decode_TbsHandshakeProRej_sigSel,
    _encode_TbsHandshakeProRej_sigSel,
} from "../Wrapper/TbsHandshakeProRej-sigSel.ta";
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

/* START_OF_SYMBOL_DEFINITION TbsHandshakeProRej */
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
/* END_OF_SYMBOL_DEFINITION TbsHandshakeProRej */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsHandshakeProRej */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsHandshakeProRej */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsHandshakeProRej */
/**
 * @summary The Trailing Root Component Types of TbsHandshakeProRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsHandshakeProRej: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsHandshakeProRej */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsHandshakeProRej */
/**
 * @summary The Extension Addition Component Types of TbsHandshakeProRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsHandshakeProRej: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsHandshakeProRej */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeProRej */
let _cached_decoder_for_TbsHandshakeProRej: $.ASN1Decoder<TbsHandshakeProRej> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeProRej */

/* START_OF_SYMBOL_DEFINITION _decode_TbsHandshakeProRej */
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
/* END_OF_SYMBOL_DEFINITION _decode_TbsHandshakeProRej */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeProRej */
let _cached_encoder_for_TbsHandshakeProRej: $.ASN1Encoder<TbsHandshakeProRej> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeProRej */

/* START_OF_SYMBOL_DEFINITION _encode_TbsHandshakeProRej */
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

/* END_OF_SYMBOL_DEFINITION _encode_TbsHandshakeProRej */

/* eslint-enable */
