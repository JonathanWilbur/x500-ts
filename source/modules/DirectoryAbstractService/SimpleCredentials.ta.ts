/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SimpleCredentials_password,
    _decode_SimpleCredentials_password,
    _encode_SimpleCredentials_password,
} from "../DirectoryAbstractService/SimpleCredentials-password.ta";
import {
    SimpleCredentials_validity,
    _decode_SimpleCredentials_validity,
    _encode_SimpleCredentials_validity,
} from "../DirectoryAbstractService/SimpleCredentials-validity.ta";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export {
    SimpleCredentials_password,
    _decode_SimpleCredentials_password,
    _encode_SimpleCredentials_password,
} from "../DirectoryAbstractService/SimpleCredentials-password.ta";
export {
    SimpleCredentials_validity,
    _decode_SimpleCredentials_validity,
    _encode_SimpleCredentials_validity,
} from "../DirectoryAbstractService/SimpleCredentials-validity.ta";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";

/* START_OF_SYMBOL_DEFINITION SimpleCredentials */
/**
 * @summary SimpleCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SimpleCredentials ::= SEQUENCE {
 *   name      [0]  DistinguishedName,
 *   validity  [1]  SET {
 *     time1     [0]  CHOICE {
 *       utc            UTCTime,
 *       gt             GeneralizedTime} OPTIONAL,
 *     time2     [1]  CHOICE {
 *       utc            UTCTime,
 *       gt             GeneralizedTime} OPTIONAL,
 *     random1   [2]  BIT STRING OPTIONAL,
 *     random2   [3]  BIT STRING OPTIONAL} OPTIONAL,
 *   password  [2]  CHOICE {
 *     unprotected    OCTET STRING,
 *     protected      HASH{OCTET STRING},
 *     ...,
 *     userPwd   [0]  UserPwd } OPTIONAL }
 * ```
 *
 * @class
 */
export class SimpleCredentials {
    constructor(
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: DistinguishedName,
        /**
         * @summary `validity`.
         * @public
         * @readonly
         */
        readonly validity: OPTIONAL<SimpleCredentials_validity>,
        /**
         * @summary `password`.
         * @public
         * @readonly
         */
        readonly password: OPTIONAL<SimpleCredentials_password>
    ) {}

    /**
     * @summary Restructures an object into a SimpleCredentials
     * @description
     *
     * This takes an `object` and converts it to a `SimpleCredentials`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SimpleCredentials`.
     * @returns {SimpleCredentials}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SimpleCredentials]: SimpleCredentials[_K] }>
    ): SimpleCredentials {
        return new SimpleCredentials(_o.name, _o.validity, _o.password);
    }
}
/* END_OF_SYMBOL_DEFINITION SimpleCredentials */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SimpleCredentials */
/**
 * @summary The Leading Root Component Types of SimpleCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SimpleCredentials: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "name",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "validity",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "password",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SimpleCredentials */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SimpleCredentials */
/**
 * @summary The Trailing Root Component Types of SimpleCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SimpleCredentials: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SimpleCredentials */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SimpleCredentials */
/**
 * @summary The Extension Addition Component Types of SimpleCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SimpleCredentials: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SimpleCredentials */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SimpleCredentials */
let _cached_decoder_for_SimpleCredentials: $.ASN1Decoder<
    SimpleCredentials
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SimpleCredentials */

/* START_OF_SYMBOL_DEFINITION _decode_SimpleCredentials */
/**
 * @summary Decodes an ASN.1 element into a(n) SimpleCredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SimpleCredentials} The decoded data structure.
 */
export function _decode_SimpleCredentials(el: _Element) {
    if (!_cached_decoder_for_SimpleCredentials) {
        _cached_decoder_for_SimpleCredentials = function (
            el: _Element
        ): SimpleCredentials {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let name!: DistinguishedName;
            let validity: OPTIONAL<SimpleCredentials_validity>;
            let password: OPTIONAL<SimpleCredentials_password>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                name: (_el: _Element): void => {
                    name = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                validity: (_el: _Element): void => {
                    validity = $._decode_explicit<SimpleCredentials_validity>(
                        () => _decode_SimpleCredentials_validity
                    )(_el);
                },
                password: (_el: _Element): void => {
                    password = $._decode_explicit<SimpleCredentials_password>(
                        () => _decode_SimpleCredentials_password
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SimpleCredentials,
                _extension_additions_list_spec_for_SimpleCredentials,
                _root_component_type_list_2_spec_for_SimpleCredentials,
                undefined
            );
            return new SimpleCredentials /* SEQUENCE_CONSTRUCTOR_CALL */(
                name,
                validity,
                password
            );
        };
    }
    return _cached_decoder_for_SimpleCredentials(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SimpleCredentials */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SimpleCredentials */
let _cached_encoder_for_SimpleCredentials: $.ASN1Encoder<
    SimpleCredentials
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SimpleCredentials */

/* START_OF_SYMBOL_DEFINITION _encode_SimpleCredentials */
/**
 * @summary Encodes a(n) SimpleCredentials into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SimpleCredentials, encoded as an ASN.1 Element.
 */
export function _encode_SimpleCredentials(
    value: SimpleCredentials,
    elGetter: $.ASN1Encoder<SimpleCredentials>
) {
    if (!_cached_encoder_for_SimpleCredentials) {
        _cached_encoder_for_SimpleCredentials = function (
            value: SimpleCredentials,
            elGetter: $.ASN1Encoder<SimpleCredentials>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_DistinguishedName,
                            $.BER
                        )(value.name, $.BER),
                        /* IF_ABSENT  */ value.validity === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_SimpleCredentials_validity,
                                  $.BER
                              )(value.validity, $.BER),
                        /* IF_ABSENT  */ value.password === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_SimpleCredentials_password,
                                  $.BER
                              )(value.password, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SimpleCredentials(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SimpleCredentials */

/* eslint-enable */
