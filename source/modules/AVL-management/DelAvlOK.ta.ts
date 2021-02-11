/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION DelAvlOK */
/**
 * @summary DelAvlOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DelAvlOK ::= SEQUENCE {
 *   ok     NULL,
 *   ... }
 * ```
 *
 * @class
 */
export class DelAvlOK {
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
     * @summary Restructures an object into a DelAvlOK
     * @description
     *
     * This takes an `object` and converts it to a `DelAvlOK`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DelAvlOK`.
     * @returns {DelAvlOK}
     */
    public static _from_object(
        _o: { [_K in keyof DelAvlOK]: DelAvlOK[_K] }
    ): DelAvlOK {
        return new DelAvlOK(_o.ok, _o._unrecognizedExtensionsList);
    }
}
/* END_OF_SYMBOL_DEFINITION DelAvlOK */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DelAvlOK */
/**
 * @summary The Leading Root Component Types of DelAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DelAvlOK: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ok",
        false,
        $.hasTag(_TagClass.universal, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DelAvlOK */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DelAvlOK */
/**
 * @summary The Trailing Root Component Types of DelAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DelAvlOK: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DelAvlOK */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DelAvlOK */
/**
 * @summary The Extension Addition Component Types of DelAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DelAvlOK: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DelAvlOK */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DelAvlOK */
let _cached_decoder_for_DelAvlOK: $.ASN1Decoder<DelAvlOK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DelAvlOK */

/* START_OF_SYMBOL_DEFINITION _decode_DelAvlOK */
/**
 * @summary Decodes an ASN.1 element into a(n) DelAvlOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DelAvlOK} The decoded data structure.
 */
export function _decode_DelAvlOK(el: _Element) {
    if (!_cached_decoder_for_DelAvlOK) {
        _cached_decoder_for_DelAvlOK = function (el: _Element): DelAvlOK {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "DelAvlOK contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "ok";
            let ok!: NULL;
            ok = $._decodeNull(sequence[0]);
            return new DelAvlOK(ok, sequence.slice(1));
        };
    }
    return _cached_decoder_for_DelAvlOK(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DelAvlOK */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DelAvlOK */
let _cached_encoder_for_DelAvlOK: $.ASN1Encoder<DelAvlOK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DelAvlOK */

/* START_OF_SYMBOL_DEFINITION _encode_DelAvlOK */
/**
 * @summary Encodes a(n) DelAvlOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DelAvlOK, encoded as an ASN.1 Element.
 */
export function _encode_DelAvlOK(
    value: DelAvlOK,
    elGetter: $.ASN1Encoder<DelAvlOK>
) {
    if (!_cached_encoder_for_DelAvlOK) {
        _cached_encoder_for_DelAvlOK = function (
            value: DelAvlOK,
            elGetter: $.ASN1Encoder<DelAvlOK>
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
    return _cached_encoder_for_DelAvlOK(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DelAvlOK */

/* eslint-enable */
