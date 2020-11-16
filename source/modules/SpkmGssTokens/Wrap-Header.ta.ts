/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";
import {
    Conf_Alg,
    _decode_Conf_Alg,
    _encode_Conf_Alg,
} from "../SpkmGssTokens/Conf-Alg.ta";
import {
    Random_Integer,
    _decode_Random_Integer,
    _encode_Random_Integer,
} from "../SpkmGssTokens/Random-Integer.ta";
import {
    SeqNum,
    _decode_SeqNum,
    _encode_SeqNum,
} from "../SpkmGssTokens/SeqNum.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";
export {
    Conf_Alg,
    _decode_Conf_Alg,
    _encode_Conf_Alg,
} from "../SpkmGssTokens/Conf-Alg.ta";
export {
    Random_Integer,
    _decode_Random_Integer,
    _encode_Random_Integer,
} from "../SpkmGssTokens/Random-Integer.ta";
export {
    SeqNum,
    _decode_SeqNum,
    _encode_SeqNum,
} from "../SpkmGssTokens/SeqNum.ta";

/* START_OF_SYMBOL_DEFINITION Wrap_Header */
/**
 * @summary Wrap_Header
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Wrap-Header ::= SEQUENCE {
 *   tok-id      INTEGER(513), -- shall contain 0201 (hex)
 *   context-id  Random-Integer,
 *   int-alg     [0]  AlgorithmIdentifier{{SupportedAlgorithms}} OPTIONAL,
 *   conf-alg    [1]  Conf-Alg OPTIONAL,
 *   snd-seq     [2]  SeqNum OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Wrap_Header {
    constructor(
        /**
         * @summary `tok_id`.
         * @public
         * @readonly
         */
        readonly tok_id: INTEGER,
        /**
         * @summary `context_id`.
         * @public
         * @readonly
         */
        readonly context_id: Random_Integer,
        /**
         * @summary `int_alg`.
         * @public
         * @readonly
         */
        readonly int_alg: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `conf_alg`.
         * @public
         * @readonly
         */
        readonly conf_alg: OPTIONAL<Conf_Alg>,
        /**
         * @summary `snd_seq`.
         * @public
         * @readonly
         */
        readonly snd_seq: OPTIONAL<SeqNum>
    ) {}

    /**
     * @summary Restructures an object into a Wrap_Header
     * @description
     *
     * This takes an `object` and converts it to a `Wrap_Header`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Wrap_Header`.
     * @returns {Wrap_Header}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Wrap_Header]: Wrap_Header[_K] }>
    ): Wrap_Header {
        return new Wrap_Header(
            _o.tok_id,
            _o.context_id,
            _o.int_alg,
            _o.conf_alg,
            _o.snd_seq
        );
    }
}
/* END_OF_SYMBOL_DEFINITION Wrap_Header */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Wrap_Header */
/**
 * @summary The Leading Root Component Types of Wrap_Header
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Wrap_Header: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "tok-id",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "context-id",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "int-alg",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "conf-alg",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "snd-seq",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Wrap_Header */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Wrap_Header */
/**
 * @summary The Trailing Root Component Types of Wrap_Header
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Wrap_Header: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Wrap_Header */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Wrap_Header */
/**
 * @summary The Extension Addition Component Types of Wrap_Header
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Wrap_Header: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Wrap_Header */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Wrap_Header */
let _cached_decoder_for_Wrap_Header: $.ASN1Decoder<Wrap_Header> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Wrap_Header */

/* START_OF_SYMBOL_DEFINITION _decode_Wrap_Header */
/**
 * @summary Decodes an ASN.1 element into a(n) Wrap_Header
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Wrap_Header} The decoded data structure.
 */
export function _decode_Wrap_Header(el: _Element) {
    if (!_cached_decoder_for_Wrap_Header) {
        _cached_decoder_for_Wrap_Header = function (el: _Element): Wrap_Header {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let tok_id!: INTEGER;
            let context_id!: Random_Integer;
            let int_alg: OPTIONAL<AlgorithmIdentifier>;
            let conf_alg: OPTIONAL<Conf_Alg>;
            let snd_seq: OPTIONAL<SeqNum>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "tok-id": (_el: _Element): void => {
                    tok_id = $._decodeInteger(_el);
                },
                "context-id": (_el: _Element): void => {
                    context_id = _decode_Random_Integer(_el);
                },
                "int-alg": (_el: _Element): void => {
                    int_alg = $._decode_implicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                "conf-alg": (_el: _Element): void => {
                    conf_alg = $._decode_implicit<Conf_Alg>(
                        () => _decode_Conf_Alg
                    )(_el);
                },
                "snd-seq": (_el: _Element): void => {
                    snd_seq = $._decode_implicit<SeqNum>(() => _decode_SeqNum)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Wrap_Header,
                _extension_additions_list_spec_for_Wrap_Header,
                _root_component_type_list_2_spec_for_Wrap_Header,
                undefined
            );
            return new Wrap_Header /* SEQUENCE_CONSTRUCTOR_CALL */(
                tok_id,
                context_id,
                int_alg,
                conf_alg,
                snd_seq
            );
        };
    }
    return _cached_decoder_for_Wrap_Header(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Wrap_Header */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Wrap_Header */
let _cached_encoder_for_Wrap_Header: $.ASN1Encoder<Wrap_Header> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Wrap_Header */

/* START_OF_SYMBOL_DEFINITION _encode_Wrap_Header */
/**
 * @summary Encodes a(n) Wrap_Header into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Wrap_Header, encoded as an ASN.1 Element.
 */
export function _encode_Wrap_Header(
    value: Wrap_Header,
    elGetter: $.ASN1Encoder<Wrap_Header>
) {
    if (!_cached_encoder_for_Wrap_Header) {
        _cached_encoder_for_Wrap_Header = function (
            value: Wrap_Header,
            elGetter: $.ASN1Encoder<Wrap_Header>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.tok_id, $.BER),
                        /* REQUIRED   */ _encode_Random_Integer(
                            value.context_id,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.int_alg === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AlgorithmIdentifier,
                                  $.BER
                              )(value.int_alg, $.BER),
                        /* IF_ABSENT  */ value.conf_alg === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Conf_Alg,
                                  $.BER
                              )(value.conf_alg, $.BER),
                        /* IF_ABSENT  */ value.snd_seq === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_SeqNum,
                                  $.BER
                              )(value.snd_seq, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Wrap_Header(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Wrap_Header */

/* eslint-enable */
