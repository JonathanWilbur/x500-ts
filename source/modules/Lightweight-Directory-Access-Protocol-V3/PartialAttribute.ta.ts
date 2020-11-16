/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeDescription,
    _decode_AttributeDescription,
    _encode_AttributeDescription,
} from "../Lightweight_Directory_Access_Protocol_V3/AttributeDescription.ta";
import {
    AttributeValue,
    _decode_AttributeValue,
    _encode_AttributeValue,
} from "../Lightweight_Directory_Access_Protocol_V3/AttributeValue.ta";
export {
    AttributeDescription,
    _decode_AttributeDescription,
    _encode_AttributeDescription,
} from "../Lightweight_Directory_Access_Protocol_V3/AttributeDescription.ta";
export {
    AttributeValue,
    _decode_AttributeValue,
    _encode_AttributeValue,
} from "../Lightweight_Directory_Access_Protocol_V3/AttributeValue.ta";

/* START_OF_SYMBOL_DEFINITION PartialAttribute */
/**
 * @summary PartialAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PartialAttribute ::= SEQUENCE {
 *   type  AttributeDescription,
 *   vals  SET OF value AttributeValue
 * }
 * ```
 *
 * @class
 */
export class PartialAttribute {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AttributeDescription,
        /**
         * @summary `vals`.
         * @public
         * @readonly
         */
        readonly vals: AttributeValue[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PartialAttribute
     * @description
     *
     * This takes an `object` and converts it to a `PartialAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PartialAttribute`.
     * @returns {PartialAttribute}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof PartialAttribute]: PartialAttribute[_K] }>
    ): PartialAttribute {
        return new PartialAttribute(
            _o.type_,
            _o.vals,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PartialAttribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PartialAttribute */
/**
 * @summary The Leading Root Component Types of PartialAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PartialAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "vals",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PartialAttribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PartialAttribute */
/**
 * @summary The Trailing Root Component Types of PartialAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PartialAttribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PartialAttribute */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PartialAttribute */
/**
 * @summary The Extension Addition Component Types of PartialAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PartialAttribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PartialAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PartialAttribute */
let _cached_decoder_for_PartialAttribute: $.ASN1Decoder<
    PartialAttribute
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PartialAttribute */

/* START_OF_SYMBOL_DEFINITION _decode_PartialAttribute */
/**
 * @summary Decodes an ASN.1 element into a(n) PartialAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PartialAttribute} The decoded data structure.
 */
export function _decode_PartialAttribute(el: _Element) {
    if (!_cached_decoder_for_PartialAttribute) {
        _cached_decoder_for_PartialAttribute = function (
            el: _Element
        ): PartialAttribute {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PartialAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "vals";
            let type_!: AttributeDescription;
            let vals!: AttributeValue[];
            type_ = _decode_AttributeDescription(sequence[0]);
            vals = $._decodeSetOf<AttributeValue>(() => _decode_AttributeValue)(
                sequence[1]
            );
            return new PartialAttribute(type_, vals, sequence.slice(2));
        };
    }
    return _cached_decoder_for_PartialAttribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PartialAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PartialAttribute */
let _cached_encoder_for_PartialAttribute: $.ASN1Encoder<
    PartialAttribute
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PartialAttribute */

/* START_OF_SYMBOL_DEFINITION _encode_PartialAttribute */
/**
 * @summary Encodes a(n) PartialAttribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartialAttribute, encoded as an ASN.1 Element.
 */
export function _encode_PartialAttribute(
    value: PartialAttribute,
    elGetter: $.ASN1Encoder<PartialAttribute>
) {
    if (!_cached_encoder_for_PartialAttribute) {
        _cached_encoder_for_PartialAttribute = function (
            value: PartialAttribute,
            elGetter: $.ASN1Encoder<PartialAttribute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeDescription(
                                value.type_,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSetOf<AttributeValue>(
                                () => _encode_AttributeValue,
                                $.BER
                            )(value.vals, $.BER),
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
    return _cached_encoder_for_PartialAttribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PartialAttribute */

/* eslint-enable */
