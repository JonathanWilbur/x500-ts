/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION UiiItem */
/**
 * @summary UiiItem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiItem ::= SEQUENCE {
 *   type   ATTRIBUTE.&id,
 *   length INTEGER OPTIONAL }
 * ```
 *
 * @class
 */
export class UiiItem {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `length`.
         * @public
         * @readonly
         */
        readonly length: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a UiiItem
     * @description
     *
     * This takes an `object` and converts it to a `UiiItem`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UiiItem`.
     * @returns {UiiItem}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof UiiItem]: UiiItem[_K] }>
    ): UiiItem {
        return new UiiItem(_o.type_, _o.length);
    }
}
/* END_OF_SYMBOL_DEFINITION UiiItem */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UiiItem */
/**
 * @summary The Leading Root Component Types of UiiItem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UiiItem: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "length",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UiiItem */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UiiItem */
/**
 * @summary The Trailing Root Component Types of UiiItem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UiiItem: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UiiItem */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UiiItem */
/**
 * @summary The Extension Addition Component Types of UiiItem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UiiItem: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UiiItem */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UiiItem */
let _cached_decoder_for_UiiItem: $.ASN1Decoder<UiiItem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UiiItem */

/* START_OF_SYMBOL_DEFINITION _decode_UiiItem */
/**
 * @summary Decodes an ASN.1 element into a(n) UiiItem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UiiItem} The decoded data structure.
 */
export function _decode_UiiItem(el: _Element) {
    if (!_cached_decoder_for_UiiItem) {
        _cached_decoder_for_UiiItem = function (el: _Element): UiiItem {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let type_!: OBJECT_IDENTIFIER;
            let length: OPTIONAL<INTEGER>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                type: (_el: _Element): void => {
                    type_ = $._decodeObjectIdentifier(_el);
                },
                length: (_el: _Element): void => {
                    length = $._decodeInteger(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UiiItem,
                _extension_additions_list_spec_for_UiiItem,
                _root_component_type_list_2_spec_for_UiiItem,
                undefined
            );
            return new UiiItem(/* SEQUENCE_CONSTRUCTOR_CALL */ type_, length);
        };
    }
    return _cached_decoder_for_UiiItem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UiiItem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UiiItem */
let _cached_encoder_for_UiiItem: $.ASN1Encoder<UiiItem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UiiItem */

/* START_OF_SYMBOL_DEFINITION _encode_UiiItem */
/**
 * @summary Encodes a(n) UiiItem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UiiItem, encoded as an ASN.1 Element.
 */
export function _encode_UiiItem(
    value: UiiItem,
    elGetter: $.ASN1Encoder<UiiItem>
) {
    if (!_cached_encoder_for_UiiItem) {
        _cached_encoder_for_UiiItem = function (
            value: UiiItem,
            elGetter: $.ASN1Encoder<UiiItem>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.type_,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.length === undefined
                            ? undefined
                            : $._encodeInteger(value.length, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UiiItem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UiiItem */

/* eslint-enable */
