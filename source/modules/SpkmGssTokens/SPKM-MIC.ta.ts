/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Mic_Header,
    _decode_Mic_Header,
    _encode_Mic_Header,
} from "../SpkmGssTokens/Mic-Header.ta";
export {
    Mic_Header,
    _decode_Mic_Header,
    _encode_Mic_Header,
} from "../SpkmGssTokens/Mic-Header.ta";

/* START_OF_SYMBOL_DEFINITION SPKM_MIC */
/**
 * @summary SPKM_MIC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPKM-MIC ::= SEQUENCE {mic-header  Mic-Header,
 *                        int-cksum   BIT STRING
 * }
 * ```
 *
 * @class
 */
export class SPKM_MIC {
    constructor(
        /**
         * @summary `mic_header`.
         * @public
         * @readonly
         */
        readonly mic_header: Mic_Header,
        /**
         * @summary `int_cksum`.
         * @public
         * @readonly
         */
        readonly int_cksum: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a SPKM_MIC
     * @description
     *
     * This takes an `object` and converts it to a `SPKM_MIC`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPKM_MIC`.
     * @returns {SPKM_MIC}
     */
    public static _from_object(
        _o: { [_K in keyof SPKM_MIC]: SPKM_MIC[_K] }
    ): SPKM_MIC {
        return new SPKM_MIC(_o.mic_header, _o.int_cksum);
    }
}
/* END_OF_SYMBOL_DEFINITION SPKM_MIC */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SPKM_MIC */
/**
 * @summary The Leading Root Component Types of SPKM_MIC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SPKM_MIC: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mic-header",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "int-cksum",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SPKM_MIC */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SPKM_MIC */
/**
 * @summary The Trailing Root Component Types of SPKM_MIC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SPKM_MIC: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SPKM_MIC */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SPKM_MIC */
/**
 * @summary The Extension Addition Component Types of SPKM_MIC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SPKM_MIC: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SPKM_MIC */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SPKM_MIC */
let _cached_decoder_for_SPKM_MIC: $.ASN1Decoder<SPKM_MIC> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SPKM_MIC */

/* START_OF_SYMBOL_DEFINITION _decode_SPKM_MIC */
/**
 * @summary Decodes an ASN.1 element into a(n) SPKM_MIC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPKM_MIC} The decoded data structure.
 */
export function _decode_SPKM_MIC(el: _Element) {
    if (!_cached_decoder_for_SPKM_MIC) {
        _cached_decoder_for_SPKM_MIC = function (el: _Element): SPKM_MIC {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SPKM-MIC contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "mic-header";
            sequence[1].name = "int-cksum";
            let mic_header!: Mic_Header;
            let int_cksum!: BIT_STRING;
            mic_header = _decode_Mic_Header(sequence[0]);
            int_cksum = $._decodeBitString(sequence[1]);
            return new SPKM_MIC(mic_header, int_cksum);
        };
    }
    return _cached_decoder_for_SPKM_MIC(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SPKM_MIC */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SPKM_MIC */
let _cached_encoder_for_SPKM_MIC: $.ASN1Encoder<SPKM_MIC> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SPKM_MIC */

/* START_OF_SYMBOL_DEFINITION _encode_SPKM_MIC */
/**
 * @summary Encodes a(n) SPKM_MIC into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPKM_MIC, encoded as an ASN.1 Element.
 */
export function _encode_SPKM_MIC(
    value: SPKM_MIC,
    elGetter: $.ASN1Encoder<SPKM_MIC>
) {
    if (!_cached_encoder_for_SPKM_MIC) {
        _cached_encoder_for_SPKM_MIC = function (
            value: SPKM_MIC,
            elGetter: $.ASN1Encoder<SPKM_MIC>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Mic_Header(
                            value.mic_header,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.int_cksum,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SPKM_MIC(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SPKM_MIC */

/* eslint-enable */
