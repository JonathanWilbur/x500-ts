/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SupplierAndConsumers,
    _decode_SupplierAndConsumers,
    _encode_SupplierAndConsumers,
} from "../DSAOperationalAttributeTypes/SupplierAndConsumers.ta";
export {
    SupplierAndConsumers,
    _decode_SupplierAndConsumers,
    _encode_SupplierAndConsumers,
} from "../DSAOperationalAttributeTypes/SupplierAndConsumers.ta";

/* START_OF_SYMBOL_DEFINITION ModificationParameter */
/**
 * @summary ModificationParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModificationParameter ::= SEQUENCE {
 *   secondaryShadows  SET OF SupplierAndConsumers,
 *   ... }
 * ```
 *
 * @class
 */
export class ModificationParameter {
    constructor(
        /**
         * @summary `secondaryShadows`.
         * @public
         * @readonly
         */
        readonly secondaryShadows: SupplierAndConsumers[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModificationParameter
     * @description
     *
     * This takes an `object` and converts it to a `ModificationParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModificationParameter`.
     * @returns {ModificationParameter}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof ModificationParameter]: ModificationParameter[_K] }
        >
    ): ModificationParameter {
        return new ModificationParameter(
            _o.secondaryShadows,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ModificationParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModificationParameter */
/**
 * @summary The Leading Root Component Types of ModificationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModificationParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "secondaryShadows",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModificationParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModificationParameter */
/**
 * @summary The Trailing Root Component Types of ModificationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModificationParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModificationParameter */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModificationParameter */
/**
 * @summary The Extension Addition Component Types of ModificationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModificationParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModificationParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModificationParameter */
let _cached_decoder_for_ModificationParameter: $.ASN1Decoder<
    ModificationParameter
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModificationParameter */

/* START_OF_SYMBOL_DEFINITION _decode_ModificationParameter */
/**
 * @summary Decodes an ASN.1 element into a(n) ModificationParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModificationParameter} The decoded data structure.
 */
export function _decode_ModificationParameter(el: _Element) {
    if (!_cached_decoder_for_ModificationParameter) {
        _cached_decoder_for_ModificationParameter = function (
            el: _Element
        ): ModificationParameter {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "ModificationParameter contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "secondaryShadows";
            let secondaryShadows!: SupplierAndConsumers[];
            secondaryShadows = $._decodeSetOf<SupplierAndConsumers>(
                () => _decode_SupplierAndConsumers
            )(sequence[0]);
            return new ModificationParameter(
                secondaryShadows,
                sequence.slice(1)
            );
        };
    }
    return _cached_decoder_for_ModificationParameter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModificationParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModificationParameter */
let _cached_encoder_for_ModificationParameter: $.ASN1Encoder<
    ModificationParameter
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModificationParameter */

/* START_OF_SYMBOL_DEFINITION _encode_ModificationParameter */
/**
 * @summary Encodes a(n) ModificationParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModificationParameter, encoded as an ASN.1 Element.
 */
export function _encode_ModificationParameter(
    value: ModificationParameter,
    elGetter: $.ASN1Encoder<ModificationParameter>
) {
    if (!_cached_encoder_for_ModificationParameter) {
        _cached_encoder_for_ModificationParameter = function (
            value: ModificationParameter,
            elGetter: $.ASN1Encoder<ModificationParameter>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeSetOf<
                                SupplierAndConsumers
                            >(() => _encode_SupplierAndConsumers, $.BER)(
                                value.secondaryShadows,
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
    return _cached_encoder_for_ModificationParameter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModificationParameter */

/* eslint-enable */
