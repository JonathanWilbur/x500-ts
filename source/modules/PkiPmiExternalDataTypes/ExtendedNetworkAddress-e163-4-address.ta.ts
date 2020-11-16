/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NumericString,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ExtendedNetworkAddress_e163_4_address */
/**
 * @summary ExtendedNetworkAddress_e163_4_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedNetworkAddress-e163-4-address ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ExtendedNetworkAddress_e163_4_address {
    constructor(
        /**
         * @summary `number_`.
         * @public
         * @readonly
         */
        readonly number_: NumericString,
        /**
         * @summary `sub_address`.
         * @public
         * @readonly
         */
        readonly sub_address: OPTIONAL<NumericString>
    ) {}

    /**
     * @summary Restructures an object into a ExtendedNetworkAddress_e163_4_address
     * @description
     *
     * This takes an `object` and converts it to a `ExtendedNetworkAddress_e163_4_address`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtendedNetworkAddress_e163_4_address`.
     * @returns {ExtendedNetworkAddress_e163_4_address}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ExtendedNetworkAddress_e163_4_address]: ExtendedNetworkAddress_e163_4_address[_K];
            }
        >
    ): ExtendedNetworkAddress_e163_4_address {
        return new ExtendedNetworkAddress_e163_4_address(
            _o.number_,
            _o.sub_address
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ExtendedNetworkAddress_e163_4_address */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExtendedNetworkAddress_e163_4_address */
/**
 * @summary The Leading Root Component Types of ExtendedNetworkAddress_e163_4_address
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExtendedNetworkAddress_e163_4_address: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "number",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sub-address",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExtendedNetworkAddress_e163_4_address */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExtendedNetworkAddress_e163_4_address */
/**
 * @summary The Trailing Root Component Types of ExtendedNetworkAddress_e163_4_address
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExtendedNetworkAddress_e163_4_address: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExtendedNetworkAddress_e163_4_address */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExtendedNetworkAddress_e163_4_address */
/**
 * @summary The Extension Addition Component Types of ExtendedNetworkAddress_e163_4_address
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExtendedNetworkAddress_e163_4_address: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExtendedNetworkAddress_e163_4_address */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedNetworkAddress_e163_4_address */
let _cached_decoder_for_ExtendedNetworkAddress_e163_4_address: $.ASN1Decoder<
    ExtendedNetworkAddress_e163_4_address
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedNetworkAddress_e163_4_address */

/* START_OF_SYMBOL_DEFINITION _decode_ExtendedNetworkAddress_e163_4_address */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedNetworkAddress_e163_4_address
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedNetworkAddress_e163_4_address} The decoded data structure.
 */
export function _decode_ExtendedNetworkAddress_e163_4_address(el: _Element) {
    if (!_cached_decoder_for_ExtendedNetworkAddress_e163_4_address) {
        _cached_decoder_for_ExtendedNetworkAddress_e163_4_address = function (
            el: _Element
        ): ExtendedNetworkAddress_e163_4_address {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let number_!: NumericString;
            let sub_address: OPTIONAL<NumericString>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                number: (_el: _Element): void => {
                    number_ = $._decode_explicit<NumericString>(
                        () => $._decodeNumericString
                    )(_el);
                },
                "sub-address": (_el: _Element): void => {
                    sub_address = $._decode_explicit<NumericString>(
                        () => $._decodeNumericString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ExtendedNetworkAddress_e163_4_address,
                _extension_additions_list_spec_for_ExtendedNetworkAddress_e163_4_address,
                _root_component_type_list_2_spec_for_ExtendedNetworkAddress_e163_4_address,
                undefined
            );
            return new ExtendedNetworkAddress_e163_4_address /* SEQUENCE_CONSTRUCTOR_CALL */(
                number_,
                sub_address
            );
        };
    }
    return _cached_decoder_for_ExtendedNetworkAddress_e163_4_address(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtendedNetworkAddress_e163_4_address */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedNetworkAddress_e163_4_address */
let _cached_encoder_for_ExtendedNetworkAddress_e163_4_address: $.ASN1Encoder<
    ExtendedNetworkAddress_e163_4_address
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedNetworkAddress_e163_4_address */

/* START_OF_SYMBOL_DEFINITION _encode_ExtendedNetworkAddress_e163_4_address */
/**
 * @summary Encodes a(n) ExtendedNetworkAddress_e163_4_address into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedNetworkAddress_e163_4_address, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedNetworkAddress_e163_4_address(
    value: ExtendedNetworkAddress_e163_4_address,
    elGetter: $.ASN1Encoder<ExtendedNetworkAddress_e163_4_address>
) {
    if (!_cached_encoder_for_ExtendedNetworkAddress_e163_4_address) {
        _cached_encoder_for_ExtendedNetworkAddress_e163_4_address = function (
            value: ExtendedNetworkAddress_e163_4_address,
            elGetter: $.ASN1Encoder<ExtendedNetworkAddress_e163_4_address>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeNumericString,
                            $.BER
                        )(value.number_, $.BER),
                        /* IF_ABSENT  */ value.sub_address === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeNumericString,
                                  $.BER
                              )(value.sub_address, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ExtendedNetworkAddress_e163_4_address(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtendedNetworkAddress_e163_4_address */

/* eslint-enable */
