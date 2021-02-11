/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AuthorizationData_Item */
/**
 * @summary AuthorizationData_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorizationData-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class AuthorizationData_Item {
    constructor(
        /**
         * @summary `ad_type`.
         * @public
         * @readonly
         */
        readonly ad_type: INTEGER,
        /**
         * @summary `ad_data`.
         * @public
         * @readonly
         */
        readonly ad_data: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a AuthorizationData_Item
     * @description
     *
     * This takes an `object` and converts it to a `AuthorizationData_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthorizationData_Item`.
     * @returns {AuthorizationData_Item}
     */
    public static _from_object(
        _o: { [_K in keyof AuthorizationData_Item]: AuthorizationData_Item[_K] }
    ): AuthorizationData_Item {
        return new AuthorizationData_Item(_o.ad_type, _o.ad_data);
    }
}
/* END_OF_SYMBOL_DEFINITION AuthorizationData_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AuthorizationData_Item */
/**
 * @summary The Leading Root Component Types of AuthorizationData_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AuthorizationData_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ad-type",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "ad-data",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AuthorizationData_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AuthorizationData_Item */
/**
 * @summary The Trailing Root Component Types of AuthorizationData_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AuthorizationData_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AuthorizationData_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AuthorizationData_Item */
/**
 * @summary The Extension Addition Component Types of AuthorizationData_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AuthorizationData_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AuthorizationData_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorizationData_Item */
let _cached_decoder_for_AuthorizationData_Item: $.ASN1Decoder<AuthorizationData_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorizationData_Item */

/* START_OF_SYMBOL_DEFINITION _decode_AuthorizationData_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizationData_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorizationData_Item} The decoded data structure.
 */
export function _decode_AuthorizationData_Item(el: _Element) {
    if (!_cached_decoder_for_AuthorizationData_Item) {
        _cached_decoder_for_AuthorizationData_Item = function (
            el: _Element
        ): AuthorizationData_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AuthorizationData-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "ad-type";
            sequence[1].name = "ad-data";
            let ad_type!: INTEGER;
            let ad_data!: OCTET_STRING;
            ad_type = $._decodeInteger(sequence[0]);
            ad_data = $._decodeOctetString(sequence[1]);
            return new AuthorizationData_Item(ad_type, ad_data);
        };
    }
    return _cached_decoder_for_AuthorizationData_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthorizationData_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorizationData_Item */
let _cached_encoder_for_AuthorizationData_Item: $.ASN1Encoder<AuthorizationData_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorizationData_Item */

/* START_OF_SYMBOL_DEFINITION _encode_AuthorizationData_Item */
/**
 * @summary Encodes a(n) AuthorizationData_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizationData_Item, encoded as an ASN.1 Element.
 */
export function _encode_AuthorizationData_Item(
    value: AuthorizationData_Item,
    elGetter: $.ASN1Encoder<AuthorizationData_Item>
) {
    if (!_cached_encoder_for_AuthorizationData_Item) {
        _cached_encoder_for_AuthorizationData_Item = function (
            value: AuthorizationData_Item,
            elGetter: $.ASN1Encoder<AuthorizationData_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.ad_type, $.BER),
                        /* REQUIRED   */ $._encodeOctetString(
                            value.ad_data,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AuthorizationData_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthorizationData_Item */

/* eslint-enable */
