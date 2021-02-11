/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION DualStringSyntax */
/**
 * @summary DualStringSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DualStringSyntax ::= SEQUENCE {
 *   operation  [0]  UnboundedDirectoryString,
 *   object     [1]  UnboundedDirectoryString,
 *   ... }
 * ```
 *
 * @class
 */
export class DualStringSyntax {
    constructor(
        /**
         * @summary `operation`.
         * @public
         * @readonly
         */
        readonly operation: UnboundedDirectoryString,
        /**
         * @summary `object`.
         * @public
         * @readonly
         */
        readonly object: UnboundedDirectoryString,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DualStringSyntax
     * @description
     *
     * This takes an `object` and converts it to a `DualStringSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DualStringSyntax`.
     * @returns {DualStringSyntax}
     */
    public static _from_object(
        _o: { [_K in keyof DualStringSyntax]: DualStringSyntax[_K] }
    ): DualStringSyntax {
        return new DualStringSyntax(
            _o.operation,
            _o.object,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION DualStringSyntax */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DualStringSyntax */
/**
 * @summary The Leading Root Component Types of DualStringSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DualStringSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "operation",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "object",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DualStringSyntax */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DualStringSyntax */
/**
 * @summary The Trailing Root Component Types of DualStringSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DualStringSyntax: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DualStringSyntax */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DualStringSyntax */
/**
 * @summary The Extension Addition Component Types of DualStringSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DualStringSyntax: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DualStringSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DualStringSyntax */
let _cached_decoder_for_DualStringSyntax: $.ASN1Decoder<DualStringSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DualStringSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_DualStringSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) DualStringSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DualStringSyntax} The decoded data structure.
 */
export function _decode_DualStringSyntax(el: _Element) {
    if (!_cached_decoder_for_DualStringSyntax) {
        _cached_decoder_for_DualStringSyntax = function (
            el: _Element
        ): DualStringSyntax {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "DualStringSyntax contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "operation";
            sequence[1].name = "object";
            let operation!: UnboundedDirectoryString;
            let object!: UnboundedDirectoryString;
            operation = $._decode_explicit<UnboundedDirectoryString>(
                () => _decode_UnboundedDirectoryString
            )(sequence[0]);
            object = $._decode_explicit<UnboundedDirectoryString>(
                () => _decode_UnboundedDirectoryString
            )(sequence[1]);
            return new DualStringSyntax(operation, object, sequence.slice(2));
        };
    }
    return _cached_decoder_for_DualStringSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DualStringSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DualStringSyntax */
let _cached_encoder_for_DualStringSyntax: $.ASN1Encoder<DualStringSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DualStringSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_DualStringSyntax */
/**
 * @summary Encodes a(n) DualStringSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DualStringSyntax, encoded as an ASN.1 Element.
 */
export function _encode_DualStringSyntax(
    value: DualStringSyntax,
    elGetter: $.ASN1Encoder<DualStringSyntax>
) {
    if (!_cached_encoder_for_DualStringSyntax) {
        _cached_encoder_for_DualStringSyntax = function (
            value: DualStringSyntax,
            elGetter: $.ASN1Encoder<DualStringSyntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_UnboundedDirectoryString,
                                $.BER
                            )(value.operation, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_UnboundedDirectoryString,
                                $.BER
                            )(value.object, $.BER),
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
    return _cached_encoder_for_DualStringSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DualStringSyntax */

/* eslint-enable */
