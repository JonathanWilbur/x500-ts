/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeCertificationPath,
    _decode_AttributeCertificationPath,
    _encode_AttributeCertificationPath,
} from "../AttributeCertificateDefinitions/AttributeCertificationPath.ta";
import {
    CertificationPath,
    _decode_CertificationPath,
    _encode_CertificationPath,
} from "../AuthenticationFramework/CertificationPath.ta";
import {
    Token,
    _decode_Token,
    _encode_Token,
} from "../DirectoryAbstractService/Token.ta";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export {
    AttributeCertificationPath,
    _decode_AttributeCertificationPath,
    _encode_AttributeCertificationPath,
} from "../AttributeCertificateDefinitions/AttributeCertificationPath.ta";
export {
    CertificationPath,
    _decode_CertificationPath,
    _encode_CertificationPath,
} from "../AuthenticationFramework/CertificationPath.ta";
export {
    Token,
    _decode_Token,
    _encode_Token,
} from "../DirectoryAbstractService/Token.ta";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";

/* START_OF_SYMBOL_DEFINITION StrongCredentials */
/**
 * @summary StrongCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StrongCredentials ::= SET {
 *   certification-path          [0]  CertificationPath OPTIONAL,
 *   bind-token                  [1]  Token,
 *   name                        [2]  DistinguishedName OPTIONAL,
 *   attributeCertificationPath  [3]  AttributeCertificationPath OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class StrongCredentials {
    constructor(
        /**
         * @summary `certification_path`.
         * @public
         * @readonly
         */
        readonly certification_path: OPTIONAL<CertificationPath>,
        /**
         * @summary `bind_token`.
         * @public
         * @readonly
         */
        readonly bind_token: Token,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<DistinguishedName>,
        /**
         * @summary `attributeCertificationPath`.
         * @public
         * @readonly
         */
        readonly attributeCertificationPath: OPTIONAL<
            AttributeCertificationPath
        >,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a StrongCredentials
     * @description
     *
     * This takes an `object` and converts it to a `StrongCredentials`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StrongCredentials`.
     * @returns {StrongCredentials}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof StrongCredentials]: StrongCredentials[_K] }>
    ): StrongCredentials {
        return new StrongCredentials(
            _o.certification_path,
            _o.bind_token,
            _o.name,
            _o.attributeCertificationPath,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION StrongCredentials */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_StrongCredentials */
/**
 * @summary The Leading Root Component Types of StrongCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_StrongCredentials: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certification-path",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "bind-token",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributeCertificationPath",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_StrongCredentials */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_StrongCredentials */
/**
 * @summary The Trailing Root Component Types of StrongCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_StrongCredentials: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_StrongCredentials */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_StrongCredentials */
/**
 * @summary The Extension Addition Component Types of StrongCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_StrongCredentials: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_StrongCredentials */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StrongCredentials */
let _cached_decoder_for_StrongCredentials: $.ASN1Decoder<
    StrongCredentials
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StrongCredentials */

/* START_OF_SYMBOL_DEFINITION _decode_StrongCredentials */
/**
 * @summary Decodes an ASN.1 element into a(n) StrongCredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StrongCredentials} The decoded data structure.
 */
export function _decode_StrongCredentials(el: _Element) {
    if (!_cached_decoder_for_StrongCredentials) {
        _cached_decoder_for_StrongCredentials = function (
            el: _Element
        ): StrongCredentials {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let certification_path: OPTIONAL<CertificationPath>;
            let bind_token!: Token;
            let name: OPTIONAL<DistinguishedName>;
            let attributeCertificationPath: OPTIONAL<AttributeCertificationPath>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "certification-path": (_el: _Element): void => {
                    certification_path = $._decode_explicit<CertificationPath>(
                        () => _decode_CertificationPath
                    )(_el);
                },
                "bind-token": (_el: _Element): void => {
                    bind_token = $._decode_explicit<Token>(() => _decode_Token)(
                        _el
                    );
                },
                name: (_el: _Element): void => {
                    name = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                attributeCertificationPath: (_el: _Element): void => {
                    attributeCertificationPath = $._decode_explicit<
                        AttributeCertificationPath
                    >(() => _decode_AttributeCertificationPath)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_StrongCredentials,
                _extension_additions_list_spec_for_StrongCredentials,
                _root_component_type_list_2_spec_for_StrongCredentials,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new StrongCredentials /* SET_CONSTRUCTOR_CALL */(
                certification_path,
                bind_token,
                name,
                attributeCertificationPath,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_StrongCredentials(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_StrongCredentials */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StrongCredentials */
let _cached_encoder_for_StrongCredentials: $.ASN1Encoder<
    StrongCredentials
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StrongCredentials */

/* START_OF_SYMBOL_DEFINITION _encode_StrongCredentials */
/**
 * @summary Encodes a(n) StrongCredentials into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StrongCredentials, encoded as an ASN.1 Element.
 */
export function _encode_StrongCredentials(
    value: StrongCredentials,
    elGetter: $.ASN1Encoder<StrongCredentials>
) {
    if (!_cached_encoder_for_StrongCredentials) {
        _cached_encoder_for_StrongCredentials = function (
            value: StrongCredentials,
            elGetter: $.ASN1Encoder<StrongCredentials>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.certification_path ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_CertificationPath,
                                      $.BER
                                  )(value.certification_path, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_Token,
                                $.BER
                            )(value.bind_token, $.BER),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.name, $.BER),
                            /* IF_ABSENT  */ value.attributeCertificationPath ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_AttributeCertificationPath,
                                      $.BER
                                  )(value.attributeCertificationPath, $.BER),
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
    return _cached_encoder_for_StrongCredentials(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_StrongCredentials */

/* eslint-enable */
