/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertificationData,
    _decode_CertificationData,
    _encode_CertificationData,
} from "../SpkmGssTokens/CertificationData.ta";
import {
    REP_TI_TOKEN,
    _decode_REP_TI_TOKEN,
    _encode_REP_TI_TOKEN,
} from "../SpkmGssTokens/REP-TI-TOKEN.ta";
export {
    CertificationData,
    _decode_CertificationData,
    _encode_CertificationData,
} from "../SpkmGssTokens/CertificationData.ta";
export {
    REP_TI_TOKEN,
    _decode_REP_TI_TOKEN,
    _encode_REP_TI_TOKEN,
} from "../SpkmGssTokens/REP-TI-TOKEN.ta";

/* START_OF_SYMBOL_DEFINITION SPKM_REP_TI */
/**
 * @summary SPKM_REP_TI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPKM-REP-TI ::= SEQUENCE {
 *   responseToken  REP-TI-TOKEN,
 *   certif-data    CertificationData OPTIONAL
 *   -- present if target-certif-data-required option was
 * }
 * ```
 *
 * @class
 */
export class SPKM_REP_TI {
    constructor(
        /**
         * @summary `responseToken`.
         * @public
         * @readonly
         */
        readonly responseToken: REP_TI_TOKEN,
        /**
         * @summary `certif_data`.
         * @public
         * @readonly
         */
        readonly certif_data: OPTIONAL<CertificationData>
    ) {}

    /**
     * @summary Restructures an object into a SPKM_REP_TI
     * @description
     *
     * This takes an `object` and converts it to a `SPKM_REP_TI`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPKM_REP_TI`.
     * @returns {SPKM_REP_TI}
     */
    public static _from_object(
        _o: { [_K in keyof SPKM_REP_TI]: SPKM_REP_TI[_K] }
    ): SPKM_REP_TI {
        return new SPKM_REP_TI(_o.responseToken, _o.certif_data);
    }
}
/* END_OF_SYMBOL_DEFINITION SPKM_REP_TI */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SPKM_REP_TI */
/**
 * @summary The Leading Root Component Types of SPKM_REP_TI
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SPKM_REP_TI: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "responseToken",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certif-data",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SPKM_REP_TI */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SPKM_REP_TI */
/**
 * @summary The Trailing Root Component Types of SPKM_REP_TI
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SPKM_REP_TI: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SPKM_REP_TI */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SPKM_REP_TI */
/**
 * @summary The Extension Addition Component Types of SPKM_REP_TI
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SPKM_REP_TI: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SPKM_REP_TI */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SPKM_REP_TI */
let _cached_decoder_for_SPKM_REP_TI: $.ASN1Decoder<SPKM_REP_TI> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SPKM_REP_TI */

/* START_OF_SYMBOL_DEFINITION _decode_SPKM_REP_TI */
/**
 * @summary Decodes an ASN.1 element into a(n) SPKM_REP_TI
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPKM_REP_TI} The decoded data structure.
 */
export function _decode_SPKM_REP_TI(el: _Element) {
    if (!_cached_decoder_for_SPKM_REP_TI) {
        _cached_decoder_for_SPKM_REP_TI = function (el: _Element): SPKM_REP_TI {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let responseToken!: REP_TI_TOKEN;
            let certif_data: OPTIONAL<CertificationData>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                responseToken: (_el: _Element): void => {
                    responseToken = _decode_REP_TI_TOKEN(_el);
                },
                "certif-data": (_el: _Element): void => {
                    certif_data = _decode_CertificationData(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SPKM_REP_TI,
                _extension_additions_list_spec_for_SPKM_REP_TI,
                _root_component_type_list_2_spec_for_SPKM_REP_TI,
                undefined
            );
            return new SPKM_REP_TI(
                /* SEQUENCE_CONSTRUCTOR_CALL */ responseToken,
                certif_data
            );
        };
    }
    return _cached_decoder_for_SPKM_REP_TI(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SPKM_REP_TI */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SPKM_REP_TI */
let _cached_encoder_for_SPKM_REP_TI: $.ASN1Encoder<SPKM_REP_TI> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SPKM_REP_TI */

/* START_OF_SYMBOL_DEFINITION _encode_SPKM_REP_TI */
/**
 * @summary Encodes a(n) SPKM_REP_TI into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPKM_REP_TI, encoded as an ASN.1 Element.
 */
export function _encode_SPKM_REP_TI(
    value: SPKM_REP_TI,
    elGetter: $.ASN1Encoder<SPKM_REP_TI>
) {
    if (!_cached_encoder_for_SPKM_REP_TI) {
        _cached_encoder_for_SPKM_REP_TI = function (
            value: SPKM_REP_TI,
            elGetter: $.ASN1Encoder<SPKM_REP_TI>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_REP_TI_TOKEN(
                            value.responseToken,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.certif_data === undefined
                            ? undefined
                            : _encode_CertificationData(
                                  value.certif_data,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SPKM_REP_TI(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SPKM_REP_TI */

/* eslint-enable */
