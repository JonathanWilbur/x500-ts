/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    InitializationRej_diag,
    _decode_InitializationRej_diag,
    _encode_InitializationRej_diag,
    _enum_for_InitializationRej_diag,
} from "../AVL_management/InitializationRej-diag.ta";
export {
    InitializationRej_diag,
    InitializationRej_diag_unsupportedVersion /* IMPORTED_ENUMERATION_ITEM */,
    _decode_InitializationRej_diag,
    _encode_InitializationRej_diag,
    _enum_for_InitializationRej_diag,
} from "../AVL_management/InitializationRej-diag.ta";

/* START_OF_SYMBOL_DEFINITION InitializationRej */
/**
 * @summary InitializationRej
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializationRej ::= SEQUENCE {
 *   diag        ENUMERATED {
 *     unsupportedVersion     (0),
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class InitializationRej {
    constructor(
        /**
         * @summary `diag`.
         * @public
         * @readonly
         */
        readonly diag: InitializationRej_diag,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InitializationRej
     * @description
     *
     * This takes an `object` and converts it to a `InitializationRej`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitializationRej`.
     * @returns {InitializationRej}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof InitializationRej]: InitializationRej[_K] }>
    ): InitializationRej {
        return new InitializationRej(_o.diag, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `diag`
     * @public
     * @static
     */

    public static _enum_for_diag = _enum_for_InitializationRej_diag;
}
/* END_OF_SYMBOL_DEFINITION InitializationRej */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InitializationRej */
/**
 * @summary The Leading Root Component Types of InitializationRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InitializationRej: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "diag",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InitializationRej */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InitializationRej */
/**
 * @summary The Trailing Root Component Types of InitializationRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InitializationRej: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InitializationRej */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InitializationRej */
/**
 * @summary The Extension Addition Component Types of InitializationRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InitializationRej: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InitializationRej */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InitializationRej */
let _cached_decoder_for_InitializationRej: $.ASN1Decoder<
    InitializationRej
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InitializationRej */

/* START_OF_SYMBOL_DEFINITION _decode_InitializationRej */
/**
 * @summary Decodes an ASN.1 element into a(n) InitializationRej
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitializationRej} The decoded data structure.
 */
export function _decode_InitializationRej(el: _Element) {
    if (!_cached_decoder_for_InitializationRej) {
        _cached_decoder_for_InitializationRej = function (
            el: _Element
        ): InitializationRej {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "InitializationRej contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "diag";
            let diag!: InitializationRej_diag;
            diag = _decode_InitializationRej_diag(sequence[0]);
            return new InitializationRej(diag, sequence.slice(1));
        };
    }
    return _cached_decoder_for_InitializationRej(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InitializationRej */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InitializationRej */
let _cached_encoder_for_InitializationRej: $.ASN1Encoder<
    InitializationRej
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InitializationRej */

/* START_OF_SYMBOL_DEFINITION _encode_InitializationRej */
/**
 * @summary Encodes a(n) InitializationRej into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitializationRej, encoded as an ASN.1 Element.
 */
export function _encode_InitializationRej(
    value: InitializationRej,
    elGetter: $.ASN1Encoder<InitializationRej>
) {
    if (!_cached_encoder_for_InitializationRej) {
        _cached_encoder_for_InitializationRej = function (
            value: InitializationRej,
            elGetter: $.ASN1Encoder<InitializationRej>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InitializationRej_diag(
                                value.diag,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_InitializationRej(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InitializationRej */

/* eslint-enable */
