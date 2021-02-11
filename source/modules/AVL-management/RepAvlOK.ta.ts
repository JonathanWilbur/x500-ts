/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION RepAvlOK */
/**
 * @summary RepAvlOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RepAvlOK ::= SEQUENCE {
 *   ok     NULL,
 *   ... }
 * ```
 *
 * @class
 */
export class RepAvlOK {
    constructor(
        /**
         * @summary `ok`.
         * @public
         * @readonly
         */
        readonly ok: NULL,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RepAvlOK
     * @description
     *
     * This takes an `object` and converts it to a `RepAvlOK`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RepAvlOK`.
     * @returns {RepAvlOK}
     */
    public static _from_object(
        _o: { [_K in keyof RepAvlOK]: RepAvlOK[_K] }
    ): RepAvlOK {
        return new RepAvlOK(_o.ok, _o._unrecognizedExtensionsList);
    }
}
/* END_OF_SYMBOL_DEFINITION RepAvlOK */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RepAvlOK */
/**
 * @summary The Leading Root Component Types of RepAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RepAvlOK: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ok",
        false,
        $.hasTag(_TagClass.universal, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RepAvlOK */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RepAvlOK */
/**
 * @summary The Trailing Root Component Types of RepAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RepAvlOK: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RepAvlOK */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RepAvlOK */
/**
 * @summary The Extension Addition Component Types of RepAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RepAvlOK: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RepAvlOK */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RepAvlOK */
let _cached_decoder_for_RepAvlOK: $.ASN1Decoder<RepAvlOK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RepAvlOK */

/* START_OF_SYMBOL_DEFINITION _decode_RepAvlOK */
/**
 * @summary Decodes an ASN.1 element into a(n) RepAvlOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RepAvlOK} The decoded data structure.
 */
export function _decode_RepAvlOK(el: _Element) {
    if (!_cached_decoder_for_RepAvlOK) {
        _cached_decoder_for_RepAvlOK = function (el: _Element): RepAvlOK {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "RepAvlOK contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "ok";
            let ok!: NULL;
            ok = $._decodeNull(sequence[0]);
            return new RepAvlOK(ok, sequence.slice(1));
        };
    }
    return _cached_decoder_for_RepAvlOK(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RepAvlOK */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RepAvlOK */
let _cached_encoder_for_RepAvlOK: $.ASN1Encoder<RepAvlOK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RepAvlOK */

/* START_OF_SYMBOL_DEFINITION _encode_RepAvlOK */
/**
 * @summary Encodes a(n) RepAvlOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepAvlOK, encoded as an ASN.1 Element.
 */
export function _encode_RepAvlOK(
    value: RepAvlOK,
    elGetter: $.ASN1Encoder<RepAvlOK>
) {
    if (!_cached_encoder_for_RepAvlOK) {
        _cached_encoder_for_RepAvlOK = function (
            value: RepAvlOK,
            elGetter: $.ASN1Encoder<RepAvlOK>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [/* REQUIRED   */ $._encodeNull(value.ok, $.BER)],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RepAvlOK(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RepAvlOK */

/* eslint-enable */
