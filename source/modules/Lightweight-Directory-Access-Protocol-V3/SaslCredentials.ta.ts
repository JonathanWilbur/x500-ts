/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    LDAPString,
    _decode_LDAPString,
    _encode_LDAPString,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPString.ta";
export {
    LDAPString,
    _decode_LDAPString,
    _encode_LDAPString,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPString.ta";

/* START_OF_SYMBOL_DEFINITION SaslCredentials */
/**
 * @summary SaslCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SaslCredentials ::= SEQUENCE {
 *   mechanism    LDAPString,
 *   credentials  OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SaslCredentials {
    constructor(
        /**
         * @summary `mechanism`.
         * @public
         * @readonly
         */
        readonly mechanism: LDAPString,
        /**
         * @summary `credentials`.
         * @public
         * @readonly
         */
        readonly credentials: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SaslCredentials
     * @description
     *
     * This takes an `object` and converts it to a `SaslCredentials`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SaslCredentials`.
     * @returns {SaslCredentials}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SaslCredentials]: SaslCredentials[_K] }>
    ): SaslCredentials {
        return new SaslCredentials(
            _o.mechanism,
            _o.credentials,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SaslCredentials */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SaslCredentials */
/**
 * @summary The Leading Root Component Types of SaslCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SaslCredentials: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mechanism",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "credentials",
        true,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SaslCredentials */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SaslCredentials */
/**
 * @summary The Trailing Root Component Types of SaslCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SaslCredentials: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SaslCredentials */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SaslCredentials */
/**
 * @summary The Extension Addition Component Types of SaslCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SaslCredentials: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SaslCredentials */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SaslCredentials */
let _cached_decoder_for_SaslCredentials: $.ASN1Decoder<
    SaslCredentials
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SaslCredentials */

/* START_OF_SYMBOL_DEFINITION _decode_SaslCredentials */
/**
 * @summary Decodes an ASN.1 element into a(n) SaslCredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SaslCredentials} The decoded data structure.
 */
export function _decode_SaslCredentials(el: _Element) {
    if (!_cached_decoder_for_SaslCredentials) {
        _cached_decoder_for_SaslCredentials = function (
            el: _Element
        ): SaslCredentials {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let mechanism!: LDAPString;
            let credentials: OPTIONAL<OCTET_STRING>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                mechanism: (_el: _Element): void => {
                    mechanism = _decode_LDAPString(_el);
                },
                credentials: (_el: _Element): void => {
                    credentials = $._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SaslCredentials,
                _extension_additions_list_spec_for_SaslCredentials,
                _root_component_type_list_2_spec_for_SaslCredentials,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SaslCredentials /* SEQUENCE_CONSTRUCTOR_CALL */(
                mechanism,
                credentials,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SaslCredentials(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SaslCredentials */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SaslCredentials */
let _cached_encoder_for_SaslCredentials: $.ASN1Encoder<
    SaslCredentials
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SaslCredentials */

/* START_OF_SYMBOL_DEFINITION _encode_SaslCredentials */
/**
 * @summary Encodes a(n) SaslCredentials into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SaslCredentials, encoded as an ASN.1 Element.
 */
export function _encode_SaslCredentials(
    value: SaslCredentials,
    elGetter: $.ASN1Encoder<SaslCredentials>
) {
    if (!_cached_encoder_for_SaslCredentials) {
        _cached_encoder_for_SaslCredentials = function (
            value: SaslCredentials,
            elGetter: $.ASN1Encoder<SaslCredentials>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_LDAPString(
                                value.mechanism,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.credentials === undefined
                                ? undefined
                                : $._encodeOctetString(
                                      value.credentials,
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
    return _cached_encoder_for_SaslCredentials(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SaslCredentials */

/* eslint-enable */
