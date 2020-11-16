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
} from "../PKI_Stub/AlgorithmIdentifier.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI_Stub/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION TbsHandshakeReq_encr_mode_non_aead */
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
/* END_OF_SYMBOL_DEFINITION TbsHandshakeReq_encr_mode_non_aead */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsHandshakeReq_encr_mode_non_aead */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsHandshakeReq_encr_mode_non_aead */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsHandshakeReq_encr_mode_non_aead */
/**
 * @summary The Trailing Root Component Types of TbsHandshakeReq_encr_mode_non_aead
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsHandshakeReq_encr_mode_non_aead: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsHandshakeReq_encr_mode_non_aead */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsHandshakeReq_encr_mode_non_aead */
/**
 * @summary The Extension Addition Component Types of TbsHandshakeReq_encr_mode_non_aead
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsHandshakeReq_encr_mode_non_aead: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsHandshakeReq_encr_mode_non_aead */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeReq_encr_mode_non_aead */
let _cached_decoder_for_TbsHandshakeReq_encr_mode_non_aead: $.ASN1Decoder<
    TbsHandshakeReq_encr_mode_non_aead
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeReq_encr_mode_non_aead */

/* START_OF_SYMBOL_DEFINITION _decode_TbsHandshakeReq_encr_mode_non_aead */
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
            return new TbsHandshakeReq_encr_mode_non_aead /* SEQUENCE_CONSTRUCTOR_CALL */(
                encr,
                icvAlgID
            );
        };
    }
    return _cached_decoder_for_TbsHandshakeReq_encr_mode_non_aead(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TbsHandshakeReq_encr_mode_non_aead */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeReq_encr_mode_non_aead */
let _cached_encoder_for_TbsHandshakeReq_encr_mode_non_aead: $.ASN1Encoder<
    TbsHandshakeReq_encr_mode_non_aead
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeReq_encr_mode_non_aead */

/* START_OF_SYMBOL_DEFINITION _encode_TbsHandshakeReq_encr_mode_non_aead */
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

/* END_OF_SYMBOL_DEFINITION _encode_TbsHandshakeReq_encr_mode_non_aead */

/* eslint-enable */
