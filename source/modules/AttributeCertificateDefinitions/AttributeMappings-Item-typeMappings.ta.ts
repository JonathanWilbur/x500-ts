/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
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

/* START_OF_SYMBOL_DEFINITION AttributeMappings_Item_typeMappings */
/**
 * @summary AttributeMappings_Item_typeMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeMappings-Item-typeMappings ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class AttributeMappings_Item_typeMappings {
    constructor(
        /**
         * @summary `local`.
         * @public
         * @readonly
         */
        readonly local: AttributeType,
        /**
         * @summary `remote`.
         * @public
         * @readonly
         */
        readonly remote: AttributeType,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeMappings_Item_typeMappings
     * @description
     *
     * This takes an `object` and converts it to a `AttributeMappings_Item_typeMappings`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeMappings_Item_typeMappings`.
     * @returns {AttributeMappings_Item_typeMappings}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeMappings_Item_typeMappings]: AttributeMappings_Item_typeMappings[_K];
            }
        >
    ): AttributeMappings_Item_typeMappings {
        return new AttributeMappings_Item_typeMappings(
            _o.local,
            _o.remote,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AttributeMappings_Item_typeMappings */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeMappings_Item_typeMappings */
/**
 * @summary The Leading Root Component Types of AttributeMappings_Item_typeMappings
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeMappings_Item_typeMappings: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "local",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "remote",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeMappings_Item_typeMappings */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeMappings_Item_typeMappings */
/**
 * @summary The Trailing Root Component Types of AttributeMappings_Item_typeMappings
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeMappings_Item_typeMappings: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeMappings_Item_typeMappings */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeMappings_Item_typeMappings */
/**
 * @summary The Extension Addition Component Types of AttributeMappings_Item_typeMappings
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeMappings_Item_typeMappings: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeMappings_Item_typeMappings */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeMappings_Item_typeMappings */
let _cached_decoder_for_AttributeMappings_Item_typeMappings: $.ASN1Decoder<AttributeMappings_Item_typeMappings> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeMappings_Item_typeMappings */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeMappings_Item_typeMappings */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeMappings_Item_typeMappings
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeMappings_Item_typeMappings} The decoded data structure.
 */
export function _decode_AttributeMappings_Item_typeMappings(el: _Element) {
    if (!_cached_decoder_for_AttributeMappings_Item_typeMappings) {
        _cached_decoder_for_AttributeMappings_Item_typeMappings = function (
            el: _Element
        ): AttributeMappings_Item_typeMappings {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AttributeMappings-Item-typeMappings contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "local";
            sequence[1].name = "remote";
            let local!: AttributeType;
            let remote!: AttributeType;
            local = $._decode_implicit<AttributeType>(
                () => _decode_AttributeType
            )(sequence[0]);
            remote = $._decode_implicit<AttributeType>(
                () => _decode_AttributeType
            )(sequence[1]);
            return new AttributeMappings_Item_typeMappings(
                local,
                remote,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_AttributeMappings_Item_typeMappings(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeMappings_Item_typeMappings */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeMappings_Item_typeMappings */
let _cached_encoder_for_AttributeMappings_Item_typeMappings: $.ASN1Encoder<AttributeMappings_Item_typeMappings> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeMappings_Item_typeMappings */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeMappings_Item_typeMappings */
/**
 * @summary Encodes a(n) AttributeMappings_Item_typeMappings into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeMappings_Item_typeMappings, encoded as an ASN.1 Element.
 */
export function _encode_AttributeMappings_Item_typeMappings(
    value: AttributeMappings_Item_typeMappings,
    elGetter: $.ASN1Encoder<AttributeMappings_Item_typeMappings>
) {
    if (!_cached_encoder_for_AttributeMappings_Item_typeMappings) {
        _cached_encoder_for_AttributeMappings_Item_typeMappings = function (
            value: AttributeMappings_Item_typeMappings,
            elGetter: $.ASN1Encoder<AttributeMappings_Item_typeMappings>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => _encode_AttributeType,
                                $.BER
                            )(value.local, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () => _encode_AttributeType,
                                $.BER
                            )(value.remote, $.BER),
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
    return _cached_encoder_for_AttributeMappings_Item_typeMappings(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeMappings_Item_typeMappings */

/* eslint-enable */
