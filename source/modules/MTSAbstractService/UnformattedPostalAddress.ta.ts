/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    PrintableString,
    TeletexString,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION UnformattedPostalAddress */
/**
 * @summary UnformattedPostalAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnformattedPostalAddress ::= SET {
 *   printable-address
 *     SEQUENCE SIZE (1..ub-pds-physical-address-lines) OF
 *       PrintableString(SIZE (1..ub-pds-parameter-length)) OPTIONAL,
 *   teletex-string
 *     TeletexString(SIZE (1..ub-unformatted-address-length)) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class UnformattedPostalAddress {
    constructor(
        /**
         * @summary `printable_address`.
         * @public
         * @readonly
         */
        readonly printable_address: OPTIONAL<PrintableString[]>,
        /**
         * @summary `teletex_string`.
         * @public
         * @readonly
         */
        readonly teletex_string: OPTIONAL<TeletexString>
    ) {}

    /**
     * @summary Restructures an object into a UnformattedPostalAddress
     * @description
     *
     * This takes an `object` and converts it to a `UnformattedPostalAddress`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UnformattedPostalAddress`.
     * @returns {UnformattedPostalAddress}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof UnformattedPostalAddress]: UnformattedPostalAddress[_K];
            }
        >
    ): UnformattedPostalAddress {
        return new UnformattedPostalAddress(
            _o.printable_address,
            _o.teletex_string
        );
    }
}
/* END_OF_SYMBOL_DEFINITION UnformattedPostalAddress */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UnformattedPostalAddress */
/**
 * @summary The Leading Root Component Types of UnformattedPostalAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UnformattedPostalAddress: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "printable-address",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "teletex-string",
        true,
        $.hasTag(_TagClass.universal, 20),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UnformattedPostalAddress */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UnformattedPostalAddress */
/**
 * @summary The Trailing Root Component Types of UnformattedPostalAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnformattedPostalAddress: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UnformattedPostalAddress */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UnformattedPostalAddress */
/**
 * @summary The Extension Addition Component Types of UnformattedPostalAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnformattedPostalAddress: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UnformattedPostalAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnformattedPostalAddress */
let _cached_decoder_for_UnformattedPostalAddress: $.ASN1Decoder<
    UnformattedPostalAddress
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnformattedPostalAddress */

/* START_OF_SYMBOL_DEFINITION _decode_UnformattedPostalAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) UnformattedPostalAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnformattedPostalAddress} The decoded data structure.
 */
export function _decode_UnformattedPostalAddress(el: _Element) {
    if (!_cached_decoder_for_UnformattedPostalAddress) {
        _cached_decoder_for_UnformattedPostalAddress = function (
            el: _Element
        ): UnformattedPostalAddress {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let printable_address: OPTIONAL<PrintableString[]>;
            let teletex_string: OPTIONAL<TeletexString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "printable-address": (_el: _Element): void => {
                    printable_address = $._decodeSequenceOf<PrintableString>(
                        () => $._decodePrintableString
                    )(_el);
                },
                "teletex-string": (_el: _Element): void => {
                    teletex_string = $._decodeTeletexString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UnformattedPostalAddress,
                _extension_additions_list_spec_for_UnformattedPostalAddress,
                _root_component_type_list_2_spec_for_UnformattedPostalAddress,
                undefined
            );
            return new UnformattedPostalAddress /* SET_CONSTRUCTOR_CALL */(
                printable_address,
                teletex_string
            );
        };
    }
    return _cached_decoder_for_UnformattedPostalAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnformattedPostalAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnformattedPostalAddress */
let _cached_encoder_for_UnformattedPostalAddress: $.ASN1Encoder<
    UnformattedPostalAddress
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnformattedPostalAddress */

/* START_OF_SYMBOL_DEFINITION _encode_UnformattedPostalAddress */
/**
 * @summary Encodes a(n) UnformattedPostalAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnformattedPostalAddress, encoded as an ASN.1 Element.
 */
export function _encode_UnformattedPostalAddress(
    value: UnformattedPostalAddress,
    elGetter: $.ASN1Encoder<UnformattedPostalAddress>
) {
    if (!_cached_encoder_for_UnformattedPostalAddress) {
        _cached_encoder_for_UnformattedPostalAddress = function (
            value: UnformattedPostalAddress,
            elGetter: $.ASN1Encoder<UnformattedPostalAddress>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.printable_address === undefined
                            ? undefined
                            : $._encodeSequenceOf<PrintableString>(
                                  () => $._encodePrintableString,
                                  $.BER
                              )(value.printable_address, $.BER),
                        /* IF_ABSENT  */ value.teletex_string === undefined
                            ? undefined
                            : $._encodeTeletexString(
                                  value.teletex_string,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UnformattedPostalAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnformattedPostalAddress */

/* eslint-enable */
