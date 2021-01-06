/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    InitializationAbort_diag,
    _decode_InitializationAbort_diag,
    _encode_InitializationAbort_diag,
    _enum_for_InitializationAbort_diag,
} from "../CaSubscription/InitializationAbort-diag.ta";
export {
    InitializationAbort_diag,
    InitializationAbort_diag_onlySingleVersionAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    InitializationAbort_diag_unsupportedVersion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    onlySingleVersionAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unsupportedVersion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_InitializationAbort_diag,
    _encode_InitializationAbort_diag,
    _enum_for_InitializationAbort_diag,
} from "../CaSubscription/InitializationAbort-diag.ta";

/* START_OF_SYMBOL_DEFINITION InitializationAbort */
/**
 * @summary InitializationAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializationAbort ::= SEQUENCE {
 *   diag        ENUMERATED {
 *     unsupportedVersion       (0),
 *     onlySingleVersionAllowed (1),
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class InitializationAbort {
    constructor(
        /**
         * @summary `diag`.
         * @public
         * @readonly
         */
        readonly diag: InitializationAbort_diag,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InitializationAbort
     * @description
     *
     * This takes an `object` and converts it to a `InitializationAbort`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitializationAbort`.
     * @returns {InitializationAbort}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof InitializationAbort]: InitializationAbort[_K] }
        >
    ): InitializationAbort {
        return new InitializationAbort(_o.diag, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `diag`
     * @public
     * @static
     */

    public static _enum_for_diag = _enum_for_InitializationAbort_diag;
}
/* END_OF_SYMBOL_DEFINITION InitializationAbort */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InitializationAbort */
/**
 * @summary The Leading Root Component Types of InitializationAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InitializationAbort: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "diag",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InitializationAbort */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InitializationAbort */
/**
 * @summary The Trailing Root Component Types of InitializationAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InitializationAbort: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InitializationAbort */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InitializationAbort */
/**
 * @summary The Extension Addition Component Types of InitializationAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InitializationAbort: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InitializationAbort */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InitializationAbort */
let _cached_decoder_for_InitializationAbort: $.ASN1Decoder<InitializationAbort> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InitializationAbort */

/* START_OF_SYMBOL_DEFINITION _decode_InitializationAbort */
/**
 * @summary Decodes an ASN.1 element into a(n) InitializationAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitializationAbort} The decoded data structure.
 */
export function _decode_InitializationAbort(el: _Element) {
    if (!_cached_decoder_for_InitializationAbort) {
        _cached_decoder_for_InitializationAbort = function (
            el: _Element
        ): InitializationAbort {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "InitializationAbort contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "diag";
            let diag!: InitializationAbort_diag;
            diag = _decode_InitializationAbort_diag(sequence[0]);
            return new InitializationAbort(diag, sequence.slice(1));
        };
    }
    return _cached_decoder_for_InitializationAbort(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InitializationAbort */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InitializationAbort */
let _cached_encoder_for_InitializationAbort: $.ASN1Encoder<InitializationAbort> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InitializationAbort */

/* START_OF_SYMBOL_DEFINITION _encode_InitializationAbort */
/**
 * @summary Encodes a(n) InitializationAbort into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitializationAbort, encoded as an ASN.1 Element.
 */
export function _encode_InitializationAbort(
    value: InitializationAbort,
    elGetter: $.ASN1Encoder<InitializationAbort>
) {
    if (!_cached_encoder_for_InitializationAbort) {
        _cached_encoder_for_InitializationAbort = function (
            value: InitializationAbort,
            elGetter: $.ASN1Encoder<InitializationAbort>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InitializationAbort_diag(
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
    return _cached_encoder_for_InitializationAbort(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InitializationAbort */

/* eslint-enable */
