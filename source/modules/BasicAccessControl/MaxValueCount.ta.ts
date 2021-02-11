/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";

/* START_OF_SYMBOL_DEFINITION MaxValueCount */
/**
 * @summary MaxValueCount
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaxValueCount ::= SEQUENCE {
 *   type      AttributeType,
 *   maxCount  INTEGER,
 *   ... }
 * ```
 *
 * @class
 */
export class MaxValueCount {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AttributeType,
        /**
         * @summary `maxCount`.
         * @public
         * @readonly
         */
        readonly maxCount: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MaxValueCount
     * @description
     *
     * This takes an `object` and converts it to a `MaxValueCount`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MaxValueCount`.
     * @returns {MaxValueCount}
     */
    public static _from_object(
        _o: { [_K in keyof MaxValueCount]: MaxValueCount[_K] }
    ): MaxValueCount {
        return new MaxValueCount(
            _o.type_,
            _o.maxCount,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION MaxValueCount */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MaxValueCount */
/**
 * @summary The Leading Root Component Types of MaxValueCount
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MaxValueCount: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "maxCount",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MaxValueCount */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MaxValueCount */
/**
 * @summary The Trailing Root Component Types of MaxValueCount
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MaxValueCount: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MaxValueCount */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MaxValueCount */
/**
 * @summary The Extension Addition Component Types of MaxValueCount
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MaxValueCount: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MaxValueCount */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MaxValueCount */
let _cached_decoder_for_MaxValueCount: $.ASN1Decoder<MaxValueCount> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MaxValueCount */

/* START_OF_SYMBOL_DEFINITION _decode_MaxValueCount */
/**
 * @summary Decodes an ASN.1 element into a(n) MaxValueCount
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaxValueCount} The decoded data structure.
 */
export function _decode_MaxValueCount(el: _Element) {
    if (!_cached_decoder_for_MaxValueCount) {
        _cached_decoder_for_MaxValueCount = function (
            el: _Element
        ): MaxValueCount {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "MaxValueCount contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "maxCount";
            let type_!: AttributeType;
            let maxCount!: INTEGER;
            type_ = _decode_AttributeType(sequence[0]);
            maxCount = $._decodeInteger(sequence[1]);
            return new MaxValueCount(type_, maxCount, sequence.slice(2));
        };
    }
    return _cached_decoder_for_MaxValueCount(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MaxValueCount */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MaxValueCount */
let _cached_encoder_for_MaxValueCount: $.ASN1Encoder<MaxValueCount> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MaxValueCount */

/* START_OF_SYMBOL_DEFINITION _encode_MaxValueCount */
/**
 * @summary Encodes a(n) MaxValueCount into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaxValueCount, encoded as an ASN.1 Element.
 */
export function _encode_MaxValueCount(
    value: MaxValueCount,
    elGetter: $.ASN1Encoder<MaxValueCount>
) {
    if (!_cached_encoder_for_MaxValueCount) {
        _cached_encoder_for_MaxValueCount = function (
            value: MaxValueCount,
            elGetter: $.ASN1Encoder<MaxValueCount>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeType(
                                value.type_,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeInteger(
                                value.maxCount,
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
    return _cached_encoder_for_MaxValueCount(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MaxValueCount */

/* eslint-enable */
