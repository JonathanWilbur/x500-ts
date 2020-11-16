/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { SECURITY_CATEGORY } from "../EnhancedSecurity/SECURITY-CATEGORY.oca";
export { SecurityCategoriesTable } from "../EnhancedSecurity/SecurityCategoriesTable.osa";

/* START_OF_SYMBOL_DEFINITION SecurityCategory */
/**
 * @summary SecurityCategory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityCategory ::= SEQUENCE {
 *   type   [0]  SECURITY-CATEGORY.&id({SecurityCategoriesTable}),
 *   value  [1]  EXPLICIT SECURITY-CATEGORY.&Type({SecurityCategoriesTable}{@type}),
 *   ... }
 * ```
 *
 * @class
 */
export class SecurityCategory {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SecurityCategory
     * @description
     *
     * This takes an `object` and converts it to a `SecurityCategory`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityCategory`.
     * @returns {SecurityCategory}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SecurityCategory]: SecurityCategory[_K] }>
    ): SecurityCategory {
        return new SecurityCategory(
            _o.type_,
            _o.value,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SecurityCategory */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SecurityCategory */
/**
 * @summary The Leading Root Component Types of SecurityCategory
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SecurityCategory: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "value",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SecurityCategory */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SecurityCategory */
/**
 * @summary The Trailing Root Component Types of SecurityCategory
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SecurityCategory: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SecurityCategory */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SecurityCategory */
/**
 * @summary The Extension Addition Component Types of SecurityCategory
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SecurityCategory: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SecurityCategory */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityCategory */
let _cached_decoder_for_SecurityCategory: $.ASN1Decoder<
    SecurityCategory
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityCategory */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityCategory */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityCategory
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityCategory} The decoded data structure.
 */
export function _decode_SecurityCategory(el: _Element) {
    if (!_cached_decoder_for_SecurityCategory) {
        _cached_decoder_for_SecurityCategory = function (
            el: _Element
        ): SecurityCategory {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SecurityCategory contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: OBJECT_IDENTIFIER;
            let value!: _Element;
            type_ = $._decode_implicit<OBJECT_IDENTIFIER>(
                () => $._decodeObjectIdentifier
            )(sequence[0]);
            value = $._decode_explicit<_Element>(() => $._decodeAny)(
                sequence[1]
            );
            return new SecurityCategory(type_, value, sequence.slice(2));
        };
    }
    return _cached_decoder_for_SecurityCategory(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityCategory */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityCategory */
let _cached_encoder_for_SecurityCategory: $.ASN1Encoder<
    SecurityCategory
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityCategory */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityCategory */
/**
 * @summary Encodes a(n) SecurityCategory into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityCategory, encoded as an ASN.1 Element.
 */
export function _encode_SecurityCategory(
    value: SecurityCategory,
    elGetter: $.ASN1Encoder<SecurityCategory>
) {
    if (!_cached_encoder_for_SecurityCategory) {
        _cached_encoder_for_SecurityCategory = function (
            value: SecurityCategory,
            elGetter: $.ASN1Encoder<SecurityCategory>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => $._encodeObjectIdentifier,
                                $.BER
                            )(value.type_, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => $._encodeAny,
                                $.BER
                            )(value.value, $.BER),
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
    return _cached_encoder_for_SecurityCategory(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityCategory */

/* eslint-enable */
