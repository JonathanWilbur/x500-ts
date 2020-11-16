/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Random_Integer,
    _decode_Random_Integer,
    _encode_Random_Integer,
} from "../SpkmGssTokens/Random-Integer.ta";
export {
    Random_Integer,
    _decode_Random_Integer,
    _encode_Random_Integer,
} from "../SpkmGssTokens/Random-Integer.ta";

/* START_OF_SYMBOL_DEFINITION ERROR_TOKEN */
/**
 * @summary ERROR_TOKEN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ERROR-TOKEN ::= SEQUENCE {
 *   tok-id      INTEGER(1024), -- shall contain 0400 (hex)
 *   context-id  Random-Integer
 * }
 * ```
 *
 * @class
 */
export class ERROR_TOKEN {
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
        readonly context_id: Random_Integer
    ) {}

    /**
     * @summary Restructures an object into a ERROR_TOKEN
     * @description
     *
     * This takes an `object` and converts it to a `ERROR_TOKEN`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ERROR_TOKEN`.
     * @returns {ERROR_TOKEN}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ERROR_TOKEN]: ERROR_TOKEN[_K] }>
    ): ERROR_TOKEN {
        return new ERROR_TOKEN(_o.tok_id, _o.context_id);
    }
}
/* END_OF_SYMBOL_DEFINITION ERROR_TOKEN */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ERROR_TOKEN */
/**
 * @summary The Leading Root Component Types of ERROR_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ERROR_TOKEN: $.ComponentSpec[] = [
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
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ERROR_TOKEN */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ERROR_TOKEN */
/**
 * @summary The Trailing Root Component Types of ERROR_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ERROR_TOKEN: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ERROR_TOKEN */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ERROR_TOKEN */
/**
 * @summary The Extension Addition Component Types of ERROR_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ERROR_TOKEN: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ERROR_TOKEN */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ERROR_TOKEN */
let _cached_decoder_for_ERROR_TOKEN: $.ASN1Decoder<ERROR_TOKEN> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ERROR_TOKEN */

/* START_OF_SYMBOL_DEFINITION _decode_ERROR_TOKEN */
/**
 * @summary Decodes an ASN.1 element into a(n) ERROR_TOKEN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ERROR_TOKEN} The decoded data structure.
 */
export function _decode_ERROR_TOKEN(el: _Element) {
    if (!_cached_decoder_for_ERROR_TOKEN) {
        _cached_decoder_for_ERROR_TOKEN = function (el: _Element): ERROR_TOKEN {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ERROR-TOKEN contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "tok-id";
            sequence[1].name = "context-id";
            let tok_id!: INTEGER;
            let context_id!: Random_Integer;
            tok_id = $._decodeInteger(sequence[0]);
            context_id = _decode_Random_Integer(sequence[1]);
            return new ERROR_TOKEN(tok_id, context_id);
        };
    }
    return _cached_decoder_for_ERROR_TOKEN(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ERROR_TOKEN */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ERROR_TOKEN */
let _cached_encoder_for_ERROR_TOKEN: $.ASN1Encoder<ERROR_TOKEN> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ERROR_TOKEN */

/* START_OF_SYMBOL_DEFINITION _encode_ERROR_TOKEN */
/**
 * @summary Encodes a(n) ERROR_TOKEN into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ERROR_TOKEN, encoded as an ASN.1 Element.
 */
export function _encode_ERROR_TOKEN(
    value: ERROR_TOKEN,
    elGetter: $.ASN1Encoder<ERROR_TOKEN>
) {
    if (!_cached_encoder_for_ERROR_TOKEN) {
        _cached_encoder_for_ERROR_TOKEN = function (
            value: ERROR_TOKEN,
            elGetter: $.ASN1Encoder<ERROR_TOKEN>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.tok_id, $.BER),
                        /* REQUIRED   */ _encode_Random_Integer(
                            value.context_id,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ERROR_TOKEN(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ERROR_TOKEN */

/* eslint-enable */
