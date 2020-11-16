/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION Conf_Alg */
/**
 * @summary Conf_Alg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Conf-Alg  ::=  CHOICE {
 *   algId  [0]  AlgorithmIdentifier{{SupportedAlgorithms}},
 *   null   [1]  NULL
 * }
 * ```
 */
export type Conf_Alg =
    | { algId: AlgorithmIdentifier } /* CHOICE_ALT_ROOT */
    | { null_: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Conf_Alg */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Conf_Alg */
let _cached_decoder_for_Conf_Alg: $.ASN1Decoder<Conf_Alg> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Conf_Alg */

/* START_OF_SYMBOL_DEFINITION _decode_Conf_Alg */
/**
 * @summary Decodes an ASN.1 element into a(n) Conf_Alg
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Conf_Alg} The decoded data structure.
 */
export function _decode_Conf_Alg(el: _Element) {
    if (!_cached_decoder_for_Conf_Alg) {
        _cached_decoder_for_Conf_Alg = $._decode_inextensible_choice<Conf_Alg>({
            "CONTEXT 0": [
                "algId",
                $._decode_implicit<AlgorithmIdentifier>(
                    () => _decode_AlgorithmIdentifier
                ),
            ],
            "CONTEXT 1": [
                "null_",
                $._decode_implicit<NULL>(() => $._decodeNull),
            ],
        });
    }
    return _cached_decoder_for_Conf_Alg(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Conf_Alg */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Conf_Alg */
let _cached_encoder_for_Conf_Alg: $.ASN1Encoder<Conf_Alg> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Conf_Alg */

/* START_OF_SYMBOL_DEFINITION _encode_Conf_Alg */
/**
 * @summary Encodes a(n) Conf_Alg into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Conf_Alg, encoded as an ASN.1 Element.
 */
export function _encode_Conf_Alg(
    value: Conf_Alg,
    elGetter: $.ASN1Encoder<Conf_Alg>
) {
    if (!_cached_encoder_for_Conf_Alg) {
        _cached_encoder_for_Conf_Alg = $._encode_choice<Conf_Alg>(
            {
                algId: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AlgorithmIdentifier,
                    $.BER
                ),
                null_: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeNull,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Conf_Alg(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Conf_Alg */

/* eslint-enable */
