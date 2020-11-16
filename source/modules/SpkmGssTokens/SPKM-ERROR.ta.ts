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
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";
import {
    ERROR_TOKEN,
    _decode_ERROR_TOKEN,
    _encode_ERROR_TOKEN,
} from "../SpkmGssTokens/ERROR-TOKEN.ta";
import {
    Integrity,
    _decode_Integrity,
    _encode_Integrity,
} from "../SpkmGssTokens/Integrity.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";
export {
    ERROR_TOKEN,
    _decode_ERROR_TOKEN,
    _encode_ERROR_TOKEN,
} from "../SpkmGssTokens/ERROR-TOKEN.ta";
export {
    Integrity,
    _decode_Integrity,
    _encode_Integrity,
} from "../SpkmGssTokens/Integrity.ta";

/* START_OF_SYMBOL_DEFINITION SPKM_ERROR */
/**
 * @summary SPKM_ERROR
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPKM-ERROR ::= SEQUENCE {
 *   errorToken  ERROR-TOKEN,
 *   algId       AlgorithmIdentifier{{SupportedAlgorithms}},
 *   integrity   Integrity -- "token" is ERROR-TOKEN
 * }
 * ```
 *
 * @class
 */
export class SPKM_ERROR {
    constructor(
        /**
         * @summary `errorToken`.
         * @public
         * @readonly
         */
        readonly errorToken: ERROR_TOKEN,
        /**
         * @summary `algId`.
         * @public
         * @readonly
         */
        readonly algId: AlgorithmIdentifier,
        /**
         * @summary `integrity`.
         * @public
         * @readonly
         */
        readonly integrity: Integrity
    ) {}

    /**
     * @summary Restructures an object into a SPKM_ERROR
     * @description
     *
     * This takes an `object` and converts it to a `SPKM_ERROR`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPKM_ERROR`.
     * @returns {SPKM_ERROR}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SPKM_ERROR]: SPKM_ERROR[_K] }>
    ): SPKM_ERROR {
        return new SPKM_ERROR(_o.errorToken, _o.algId, _o.integrity);
    }
}
/* END_OF_SYMBOL_DEFINITION SPKM_ERROR */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SPKM_ERROR */
/**
 * @summary The Leading Root Component Types of SPKM_ERROR
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SPKM_ERROR: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "errorToken",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "algId",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "integrity",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SPKM_ERROR */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SPKM_ERROR */
/**
 * @summary The Trailing Root Component Types of SPKM_ERROR
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SPKM_ERROR: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SPKM_ERROR */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SPKM_ERROR */
/**
 * @summary The Extension Addition Component Types of SPKM_ERROR
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SPKM_ERROR: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SPKM_ERROR */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SPKM_ERROR */
let _cached_decoder_for_SPKM_ERROR: $.ASN1Decoder<SPKM_ERROR> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SPKM_ERROR */

/* START_OF_SYMBOL_DEFINITION _decode_SPKM_ERROR */
/**
 * @summary Decodes an ASN.1 element into a(n) SPKM_ERROR
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPKM_ERROR} The decoded data structure.
 */
export function _decode_SPKM_ERROR(el: _Element) {
    if (!_cached_decoder_for_SPKM_ERROR) {
        _cached_decoder_for_SPKM_ERROR = function (el: _Element): SPKM_ERROR {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "SPKM-ERROR contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "errorToken";
            sequence[1].name = "algId";
            sequence[2].name = "integrity";
            let errorToken!: ERROR_TOKEN;
            let algId!: AlgorithmIdentifier;
            let integrity!: Integrity;
            errorToken = _decode_ERROR_TOKEN(sequence[0]);
            algId = _decode_AlgorithmIdentifier(sequence[1]);
            integrity = _decode_Integrity(sequence[2]);
            return new SPKM_ERROR(errorToken, algId, integrity);
        };
    }
    return _cached_decoder_for_SPKM_ERROR(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SPKM_ERROR */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SPKM_ERROR */
let _cached_encoder_for_SPKM_ERROR: $.ASN1Encoder<SPKM_ERROR> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SPKM_ERROR */

/* START_OF_SYMBOL_DEFINITION _encode_SPKM_ERROR */
/**
 * @summary Encodes a(n) SPKM_ERROR into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPKM_ERROR, encoded as an ASN.1 Element.
 */
export function _encode_SPKM_ERROR(
    value: SPKM_ERROR,
    elGetter: $.ASN1Encoder<SPKM_ERROR>
) {
    if (!_cached_encoder_for_SPKM_ERROR) {
        _cached_encoder_for_SPKM_ERROR = function (
            value: SPKM_ERROR,
            elGetter: $.ASN1Encoder<SPKM_ERROR>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ERROR_TOKEN(
                            value.errorToken,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algId,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Integrity(
                            value.integrity,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SPKM_ERROR(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SPKM_ERROR */

/* eslint-enable */
