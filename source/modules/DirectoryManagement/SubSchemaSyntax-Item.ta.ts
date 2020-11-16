/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SubSchemaSyntax_Item_subSchema,
    _decode_SubSchemaSyntax_Item_subSchema,
    _encode_SubSchemaSyntax_Item_subSchema,
} from "../DirectoryManagement/SubSchemaSyntax-Item-subSchema.ta";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
export {
    SubSchemaSyntax_Item_subSchema,
    _decode_SubSchemaSyntax_Item_subSchema,
    _encode_SubSchemaSyntax_Item_subSchema,
} from "../DirectoryManagement/SubSchemaSyntax-Item-subSchema.ta";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";

/* START_OF_SYMBOL_DEFINITION SubSchemaSyntax_Item */
/**
 * @summary SubSchemaSyntax_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubSchemaSyntax-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class SubSchemaSyntax_Item {
    constructor(
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: Name,
        /**
         * @summary `subSchema`.
         * @public
         * @readonly
         */
        readonly subSchema: SubSchemaSyntax_Item_subSchema
    ) {}

    /**
     * @summary Restructures an object into a SubSchemaSyntax_Item
     * @description
     *
     * This takes an `object` and converts it to a `SubSchemaSyntax_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubSchemaSyntax_Item`.
     * @returns {SubSchemaSyntax_Item}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SubSchemaSyntax_Item]: SubSchemaSyntax_Item[_K] }
        >
    ): SubSchemaSyntax_Item {
        return new SubSchemaSyntax_Item(_o.name, _o.subSchema);
    }
}
/* END_OF_SYMBOL_DEFINITION SubSchemaSyntax_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SubSchemaSyntax_Item */
/**
 * @summary The Leading Root Component Types of SubSchemaSyntax_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubSchemaSyntax_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "name",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subSchema",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SubSchemaSyntax_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SubSchemaSyntax_Item */
/**
 * @summary The Trailing Root Component Types of SubSchemaSyntax_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubSchemaSyntax_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SubSchemaSyntax_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SubSchemaSyntax_Item */
/**
 * @summary The Extension Addition Component Types of SubSchemaSyntax_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubSchemaSyntax_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SubSchemaSyntax_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubSchemaSyntax_Item */
let _cached_decoder_for_SubSchemaSyntax_Item: $.ASN1Decoder<
    SubSchemaSyntax_Item
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubSchemaSyntax_Item */

/* START_OF_SYMBOL_DEFINITION _decode_SubSchemaSyntax_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) SubSchemaSyntax_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubSchemaSyntax_Item} The decoded data structure.
 */
export function _decode_SubSchemaSyntax_Item(el: _Element) {
    if (!_cached_decoder_for_SubSchemaSyntax_Item) {
        _cached_decoder_for_SubSchemaSyntax_Item = function (
            el: _Element
        ): SubSchemaSyntax_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SubSchemaSyntax-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "name";
            sequence[1].name = "subSchema";
            let name!: Name;
            let subSchema!: SubSchemaSyntax_Item_subSchema;
            name = $._decode_explicit<Name>(() => _decode_Name)(sequence[0]);
            subSchema = $._decode_explicit<SubSchemaSyntax_Item_subSchema>(
                () => _decode_SubSchemaSyntax_Item_subSchema
            )(sequence[1]);
            return new SubSchemaSyntax_Item(name, subSchema);
        };
    }
    return _cached_decoder_for_SubSchemaSyntax_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubSchemaSyntax_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubSchemaSyntax_Item */
let _cached_encoder_for_SubSchemaSyntax_Item: $.ASN1Encoder<
    SubSchemaSyntax_Item
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubSchemaSyntax_Item */

/* START_OF_SYMBOL_DEFINITION _encode_SubSchemaSyntax_Item */
/**
 * @summary Encodes a(n) SubSchemaSyntax_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubSchemaSyntax_Item, encoded as an ASN.1 Element.
 */
export function _encode_SubSchemaSyntax_Item(
    value: SubSchemaSyntax_Item,
    elGetter: $.ASN1Encoder<SubSchemaSyntax_Item>
) {
    if (!_cached_encoder_for_SubSchemaSyntax_Item) {
        _cached_encoder_for_SubSchemaSyntax_Item = function (
            value: SubSchemaSyntax_Item,
            elGetter: $.ASN1Encoder<SubSchemaSyntax_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_Name,
                            $.BER
                        )(value.name, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () => _encode_SubSchemaSyntax_Item_subSchema,
                            $.BER
                        )(value.subSchema, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SubSchemaSyntax_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubSchemaSyntax_Item */

/* eslint-enable */
