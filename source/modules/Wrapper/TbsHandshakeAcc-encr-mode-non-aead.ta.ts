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

/* START_OF_SYMBOL_DEFINITION TbsHandshakeAcc_encr_mode_non_aead */
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
/* END_OF_SYMBOL_DEFINITION TbsHandshakeAcc_encr_mode_non_aead */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsHandshakeAcc_encr_mode_non_aead */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbsHandshakeAcc_encr_mode_non_aead */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsHandshakeAcc_encr_mode_non_aead */
/**
 * @summary The Trailing Root Component Types of TbsHandshakeAcc_encr_mode_non_aead
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsHandshakeAcc_encr_mode_non_aead: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbsHandshakeAcc_encr_mode_non_aead */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsHandshakeAcc_encr_mode_non_aead */
/**
 * @summary The Extension Addition Component Types of TbsHandshakeAcc_encr_mode_non_aead
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsHandshakeAcc_encr_mode_non_aead: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbsHandshakeAcc_encr_mode_non_aead */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeAcc_encr_mode_non_aead */
let _cached_decoder_for_TbsHandshakeAcc_encr_mode_non_aead: $.ASN1Decoder<
    TbsHandshakeAcc_encr_mode_non_aead
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeAcc_encr_mode_non_aead */

/* START_OF_SYMBOL_DEFINITION _decode_TbsHandshakeAcc_encr_mode_non_aead */
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
            return new TbsHandshakeAcc_encr_mode_non_aead /* SEQUENCE_CONSTRUCTOR_CALL */(
                encr,
                icvAlgID
            );
        };
    }
    return _cached_decoder_for_TbsHandshakeAcc_encr_mode_non_aead(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TbsHandshakeAcc_encr_mode_non_aead */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeAcc_encr_mode_non_aead */
let _cached_encoder_for_TbsHandshakeAcc_encr_mode_non_aead: $.ASN1Encoder<
    TbsHandshakeAcc_encr_mode_non_aead
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeAcc_encr_mode_non_aead */

/* START_OF_SYMBOL_DEFINITION _encode_TbsHandshakeAcc_encr_mode_non_aead */
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

/* END_OF_SYMBOL_DEFINITION _encode_TbsHandshakeAcc_encr_mode_non_aead */

/* eslint-enable */
