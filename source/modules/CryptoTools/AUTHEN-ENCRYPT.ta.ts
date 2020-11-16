/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AUTHEN_ENCRYPT */
/**
 * @summary AUTHEN_ENCRYPT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AUTHEN-ENCRYPT{ToBeAuth, ToBeEnciphered} ::= SEQUENCE {
 *   aad  [0] ToBeAuth OPTIONAL,
 *   encr [1] ToBeEnciphered,
 *   ... }
 * ```
 *
 * @class
 */
export class AUTHEN_ENCRYPT<ToBeAuth, ToBeEnciphered> {
    constructor(
        /**
         * @summary `aad`.
         * @public
         * @readonly
         */
        readonly aad: OPTIONAL<ToBeAuth>,
        /**
         * @summary `encr`.
         * @public
         * @readonly
         */
        readonly encr: ToBeEnciphered,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AUTHEN_ENCRYPT
     * @description
     *
     * This takes an `object` and converts it to a `AUTHEN_ENCRYPT`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AUTHEN_ENCRYPT`.
     * @returns {AUTHEN_ENCRYPT}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AUTHEN_ENCRYPT<any, any>]: AUTHEN_ENCRYPT<
                    any,
                    any
                >[_K];
            }
        >
    ): AUTHEN_ENCRYPT<any, any> {
        return new AUTHEN_ENCRYPT(
            _o.aad,
            _o.encr,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AUTHEN_ENCRYPT */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AUTHEN_ENCRYPT */
/**
 * @summary The Leading Root Component Types of AUTHEN_ENCRYPT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AUTHEN_ENCRYPT: $.ComponentSpec[] = [
    ,/* FIXME: aad COULD_NOT_RESOLVE_TYPE_DEF */
/* FIXME: encr COULD_NOT_RESOLVE_TYPE_DEF */
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AUTHEN_ENCRYPT */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AUTHEN_ENCRYPT */
/**
 * @summary The Trailing Root Component Types of AUTHEN_ENCRYPT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AUTHEN_ENCRYPT: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AUTHEN_ENCRYPT */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AUTHEN_ENCRYPT */
/**
 * @summary The Extension Addition Component Types of AUTHEN_ENCRYPT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AUTHEN_ENCRYPT: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AUTHEN_ENCRYPT */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AUTHEN_ENCRYPT */
let _cached_decoder_for_AUTHEN_ENCRYPT: $.ASN1Decoder<
    AUTHEN_ENCRYPT<ToBeAuth, ToBeEnciphered>
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AUTHEN_ENCRYPT */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_AUTHEN_ENCRYPT */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) AUTHEN_ENCRYPT
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_AUTHEN_ENCRYPT<ToBeAuth, ToBeEnciphered>(
    _decode_ToBeAuth: $.ASN1Decoder<ToBeAuth>,
    _decode_ToBeEnciphered: $.ASN1Decoder<ToBeEnciphered>
) {
    return function (el: _Element): AUTHEN_ENCRYPT<ToBeAuth, ToBeEnciphered> {
        /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        let aad: OPTIONAL<ToBeAuth>;
        let encr!: ToBeEnciphered;
        let _unrecognizedExtensionsList: _Element[] = [];
        /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        /* START_OF_CALLBACKS_MAP */
        const callbacks: $.DecodingMap = {
            aad: (_el: _Element): void => {
                aad = $._decode_implicit<ToBeAuth>(() => _decode_ToBeAuth)(_el);
            },
            encr: (_el: _Element): void => {
                encr = $._decode_implicit<ToBeEnciphered>(
                    () => _decode_ToBeEnciphered
                )(_el);
            },
        };
        /* END_OF_CALLBACKS_MAP */
        $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_AUTHEN_ENCRYPT,
            _extension_additions_list_spec_for_AUTHEN_ENCRYPT,
            _root_component_type_list_2_spec_for_AUTHEN_ENCRYPT,
            (ext: _Element): void => {
                _unrecognizedExtensionsList.push(ext);
            }
        );
        return new AUTHEN_ENCRYPT /* SEQUENCE_CONSTRUCTOR_CALL */(
            aad,
            encr,
            _unrecognizedExtensionsList
        );
    };
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_AUTHEN_ENCRYPT */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AUTHEN_ENCRYPT */
let _cached_encoder_for_AUTHEN_ENCRYPT: $.ASN1Encoder<
    AUTHEN_ENCRYPT<ToBeAuth, ToBeEnciphered>
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AUTHEN_ENCRYPT */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_AUTHEN_ENCRYPT */
/**
 * @summary Returns a function that will encode a(n) AUTHEN_ENCRYPT into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) AUTHEN_ENCRYPT as an ASN.1 element.
 */
export function _get_encoder_for_AUTHEN_ENCRYPT<ToBeAuth, ToBeEnciphered>(
    _encode_ToBeAuth: $.ASN1Encoder<ToBeAuth>,
    _encode_ToBeEnciphered: $.ASN1Encoder<ToBeEnciphered>
) {
    return function (
        value: AUTHEN_ENCRYPT<ToBeAuth, ToBeEnciphered>,
        elGetter: $.ASN1Encoder<AUTHEN_ENCRYPT<ToBeAuth, ToBeEnciphered>>
    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        /* IF_ABSENT  */ value.aad === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_ToBeAuth,
                                  $.BER
                              )(value.aad, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_ToBeEnciphered,
                            $.BER
                        )(value.encr, $.BER),
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
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_AUTHEN_ENCRYPT */

/* eslint-enable */
