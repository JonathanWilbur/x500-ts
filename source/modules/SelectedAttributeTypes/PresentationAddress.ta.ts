/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PresentationAddress */
/**
 * @summary PresentationAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PresentationAddress ::= SEQUENCE {
 *   pSelector   [0]  OCTET STRING OPTIONAL,
 *   sSelector   [1]  OCTET STRING OPTIONAL,
 *   tSelector   [2]  OCTET STRING OPTIONAL,
 *   nAddresses  [3]  SET SIZE (1..MAX) OF OCTET STRING,
 *   ... }
 * ```
 *
 * @class
 */
export class PresentationAddress {
    constructor(
        /**
         * @summary `pSelector`.
         * @public
         * @readonly
         */
        readonly pSelector: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `sSelector`.
         * @public
         * @readonly
         */
        readonly sSelector: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `tSelector`.
         * @public
         * @readonly
         */
        readonly tSelector: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `nAddresses`.
         * @public
         * @readonly
         */
        readonly nAddresses: OCTET_STRING[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PresentationAddress
     * @description
     *
     * This takes an `object` and converts it to a `PresentationAddress`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PresentationAddress`.
     * @returns {PresentationAddress}
     */
    public static _from_object(
        _o: { [_K in keyof PresentationAddress]: PresentationAddress[_K] }
    ): PresentationAddress {
        return new PresentationAddress(
            _o.pSelector,
            _o.sSelector,
            _o.tSelector,
            _o.nAddresses,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PresentationAddress */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PresentationAddress */
/**
 * @summary The Leading Root Component Types of PresentationAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PresentationAddress: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "pSelector",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sSelector",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "tSelector",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nAddresses",
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PresentationAddress */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PresentationAddress */
/**
 * @summary The Trailing Root Component Types of PresentationAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PresentationAddress: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PresentationAddress */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PresentationAddress */
/**
 * @summary The Extension Addition Component Types of PresentationAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PresentationAddress: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PresentationAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PresentationAddress */
let _cached_decoder_for_PresentationAddress: $.ASN1Decoder<PresentationAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PresentationAddress */

/* START_OF_SYMBOL_DEFINITION _decode_PresentationAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) PresentationAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PresentationAddress} The decoded data structure.
 */
export function _decode_PresentationAddress(el: _Element) {
    if (!_cached_decoder_for_PresentationAddress) {
        _cached_decoder_for_PresentationAddress = function (
            el: _Element
        ): PresentationAddress {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let pSelector: OPTIONAL<OCTET_STRING>;
            let sSelector: OPTIONAL<OCTET_STRING>;
            let tSelector: OPTIONAL<OCTET_STRING>;
            let nAddresses!: OCTET_STRING[];
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                pSelector: (_el: _Element): void => {
                    pSelector = $._decode_explicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                sSelector: (_el: _Element): void => {
                    sSelector = $._decode_explicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                tSelector: (_el: _Element): void => {
                    tSelector = $._decode_explicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                nAddresses: (_el: _Element): void => {
                    nAddresses = $._decode_explicit<OCTET_STRING[]>(() =>
                        $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PresentationAddress,
                _extension_additions_list_spec_for_PresentationAddress,
                _root_component_type_list_2_spec_for_PresentationAddress,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PresentationAddress(
                /* SEQUENCE_CONSTRUCTOR_CALL */ pSelector,
                sSelector,
                tSelector,
                nAddresses,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PresentationAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PresentationAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PresentationAddress */
let _cached_encoder_for_PresentationAddress: $.ASN1Encoder<PresentationAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PresentationAddress */

/* START_OF_SYMBOL_DEFINITION _encode_PresentationAddress */
/**
 * @summary Encodes a(n) PresentationAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresentationAddress, encoded as an ASN.1 Element.
 */
export function _encode_PresentationAddress(
    value: PresentationAddress,
    elGetter: $.ASN1Encoder<PresentationAddress>
) {
    if (!_cached_encoder_for_PresentationAddress) {
        _cached_encoder_for_PresentationAddress = function (
            value: PresentationAddress,
            elGetter: $.ASN1Encoder<PresentationAddress>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.pSelector === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeOctetString,
                                      $.BER
                                  )(value.pSelector, $.BER),
                            /* IF_ABSENT  */ value.sSelector === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeOctetString,
                                      $.BER
                                  )(value.sSelector, $.BER),
                            /* IF_ABSENT  */ value.tSelector === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeOctetString,
                                      $.BER
                                  )(value.tSelector, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                3,
                                () =>
                                    $._encodeSetOf<OCTET_STRING>(
                                        () => $._encodeOctetString,
                                        $.BER
                                    ),
                                $.BER
                            )(value.nAddresses, $.BER),
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
    return _cached_encoder_for_PresentationAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PresentationAddress */

/* eslint-enable */
