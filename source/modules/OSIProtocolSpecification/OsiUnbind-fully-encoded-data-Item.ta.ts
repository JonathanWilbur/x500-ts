/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OsiUnbind_fully_encoded_data_Item_presentation_data_values,
    _decode_OsiUnbind_fully_encoded_data_Item_presentation_data_values,
    _encode_OsiUnbind_fully_encoded_data_Item_presentation_data_values,
} from "../OSIProtocolSpecification/OsiUnbind-fully-encoded-data-Item-presentation-data-values.ta";
import {
    Presentation_context_identifier,
    _decode_Presentation_context_identifier,
    _encode_Presentation_context_identifier,
} from "../OSIProtocolSpecification/Presentation-context-identifier.ta";
export {
    OsiUnbind_fully_encoded_data_Item_presentation_data_values,
    _decode_OsiUnbind_fully_encoded_data_Item_presentation_data_values,
    _encode_OsiUnbind_fully_encoded_data_Item_presentation_data_values,
} from "../OSIProtocolSpecification/OsiUnbind-fully-encoded-data-Item-presentation-data-values.ta";
export {
    Presentation_context_identifier,
    _decode_Presentation_context_identifier,
    _encode_Presentation_context_identifier,
} from "../OSIProtocolSpecification/Presentation-context-identifier.ta";

/* START_OF_SYMBOL_DEFINITION OsiUnbind_fully_encoded_data_Item */
/**
 * @summary OsiUnbind_fully_encoded_data_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiUnbind-fully-encoded-data-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class OsiUnbind_fully_encoded_data_Item {
    constructor(
        /**
         * @summary `presentation_context_identifier`.
         * @public
         * @readonly
         */
        readonly presentation_context_identifier: Presentation_context_identifier,
        /**
         * @summary `presentation_data_values`.
         * @public
         * @readonly
         */
        readonly presentation_data_values: OsiUnbind_fully_encoded_data_Item_presentation_data_values
    ) {}

    /**
     * @summary Restructures an object into a OsiUnbind_fully_encoded_data_Item
     * @description
     *
     * This takes an `object` and converts it to a `OsiUnbind_fully_encoded_data_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiUnbind_fully_encoded_data_Item`.
     * @returns {OsiUnbind_fully_encoded_data_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof OsiUnbind_fully_encoded_data_Item]: OsiUnbind_fully_encoded_data_Item[_K];
        }
    ): OsiUnbind_fully_encoded_data_Item {
        return new OsiUnbind_fully_encoded_data_Item(
            _o.presentation_context_identifier,
            _o.presentation_data_values
        );
    }
}
/* END_OF_SYMBOL_DEFINITION OsiUnbind_fully_encoded_data_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OsiUnbind_fully_encoded_data_Item */
/**
 * @summary The Leading Root Component Types of OsiUnbind_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiUnbind_fully_encoded_data_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "presentation-context-identifier",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "presentation-data-values",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OsiUnbind_fully_encoded_data_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OsiUnbind_fully_encoded_data_Item */
/**
 * @summary The Trailing Root Component Types of OsiUnbind_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiUnbind_fully_encoded_data_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OsiUnbind_fully_encoded_data_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OsiUnbind_fully_encoded_data_Item */
/**
 * @summary The Extension Addition Component Types of OsiUnbind_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiUnbind_fully_encoded_data_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OsiUnbind_fully_encoded_data_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiUnbind_fully_encoded_data_Item */
let _cached_decoder_for_OsiUnbind_fully_encoded_data_Item: $.ASN1Decoder<OsiUnbind_fully_encoded_data_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiUnbind_fully_encoded_data_Item */

/* START_OF_SYMBOL_DEFINITION _decode_OsiUnbind_fully_encoded_data_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) OsiUnbind_fully_encoded_data_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiUnbind_fully_encoded_data_Item} The decoded data structure.
 */
export function _decode_OsiUnbind_fully_encoded_data_Item(el: _Element) {
    if (!_cached_decoder_for_OsiUnbind_fully_encoded_data_Item) {
        _cached_decoder_for_OsiUnbind_fully_encoded_data_Item = function (
            el: _Element
        ): OsiUnbind_fully_encoded_data_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OsiUnbind-fully-encoded-data-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "presentation-context-identifier";
            sequence[1].name = "presentation-data-values";
            let presentation_context_identifier!: Presentation_context_identifier;
            let presentation_data_values!: OsiUnbind_fully_encoded_data_Item_presentation_data_values;
            presentation_context_identifier = _decode_Presentation_context_identifier(
                sequence[0]
            );
            presentation_data_values = _decode_OsiUnbind_fully_encoded_data_Item_presentation_data_values(
                sequence[1]
            );
            return new OsiUnbind_fully_encoded_data_Item(
                presentation_context_identifier,
                presentation_data_values
            );
        };
    }
    return _cached_decoder_for_OsiUnbind_fully_encoded_data_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OsiUnbind_fully_encoded_data_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiUnbind_fully_encoded_data_Item */
let _cached_encoder_for_OsiUnbind_fully_encoded_data_Item: $.ASN1Encoder<OsiUnbind_fully_encoded_data_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiUnbind_fully_encoded_data_Item */

/* START_OF_SYMBOL_DEFINITION _encode_OsiUnbind_fully_encoded_data_Item */
/**
 * @summary Encodes a(n) OsiUnbind_fully_encoded_data_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiUnbind_fully_encoded_data_Item, encoded as an ASN.1 Element.
 */
export function _encode_OsiUnbind_fully_encoded_data_Item(
    value: OsiUnbind_fully_encoded_data_Item,
    elGetter: $.ASN1Encoder<OsiUnbind_fully_encoded_data_Item>
) {
    if (!_cached_encoder_for_OsiUnbind_fully_encoded_data_Item) {
        _cached_encoder_for_OsiUnbind_fully_encoded_data_Item = function (
            value: OsiUnbind_fully_encoded_data_Item,
            elGetter: $.ASN1Encoder<OsiUnbind_fully_encoded_data_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_OsiUnbind_fully_encoded_data_Item_presentation_data_values(
                            value.presentation_data_values,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiUnbind_fully_encoded_data_Item(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_OsiUnbind_fully_encoded_data_Item */

/* eslint-enable */
