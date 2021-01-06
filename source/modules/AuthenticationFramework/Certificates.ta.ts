/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta";
import {
    ForwardCertificationPath,
    _decode_ForwardCertificationPath,
    _encode_ForwardCertificationPath,
} from "../AuthenticationFramework/ForwardCertificationPath.ta";
export {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta";
export {
    ForwardCertificationPath,
    _decode_ForwardCertificationPath,
    _encode_ForwardCertificationPath,
} from "../AuthenticationFramework/ForwardCertificationPath.ta";

/* START_OF_SYMBOL_DEFINITION Certificates */
/**
 * @summary Certificates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Certificates ::= SEQUENCE {
 *   userCertificate    Certificate,
 *   certificationPath  ForwardCertificationPath OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class Certificates {
    constructor(
        /**
         * @summary `userCertificate`.
         * @public
         * @readonly
         */
        readonly userCertificate: Certificate,
        /**
         * @summary `certificationPath`.
         * @public
         * @readonly
         */
        readonly certificationPath: OPTIONAL<ForwardCertificationPath>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Certificates
     * @description
     *
     * This takes an `object` and converts it to a `Certificates`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Certificates`.
     * @returns {Certificates}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Certificates]: Certificates[_K] }>
    ): Certificates {
        return new Certificates(
            _o.userCertificate,
            _o.certificationPath,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION Certificates */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Certificates */
/**
 * @summary The Leading Root Component Types of Certificates
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Certificates: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "userCertificate",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certificationPath",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Certificates */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Certificates */
/**
 * @summary The Trailing Root Component Types of Certificates
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Certificates: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Certificates */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Certificates */
/**
 * @summary The Extension Addition Component Types of Certificates
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Certificates: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Certificates */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Certificates */
let _cached_decoder_for_Certificates: $.ASN1Decoder<Certificates> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Certificates */

/* START_OF_SYMBOL_DEFINITION _decode_Certificates */
/**
 * @summary Decodes an ASN.1 element into a(n) Certificates
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Certificates} The decoded data structure.
 */
export function _decode_Certificates(el: _Element) {
    if (!_cached_decoder_for_Certificates) {
        _cached_decoder_for_Certificates = function (
            el: _Element
        ): Certificates {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let userCertificate!: Certificate;
            let certificationPath: OPTIONAL<ForwardCertificationPath>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                userCertificate: (_el: _Element): void => {
                    userCertificate = _decode_Certificate(_el);
                },
                certificationPath: (_el: _Element): void => {
                    certificationPath = _decode_ForwardCertificationPath(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Certificates,
                _extension_additions_list_spec_for_Certificates,
                _root_component_type_list_2_spec_for_Certificates,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Certificates(
                /* SEQUENCE_CONSTRUCTOR_CALL */ userCertificate,
                certificationPath,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Certificates(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Certificates */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Certificates */
let _cached_encoder_for_Certificates: $.ASN1Encoder<Certificates> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Certificates */

/* START_OF_SYMBOL_DEFINITION _encode_Certificates */
/**
 * @summary Encodes a(n) Certificates into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Certificates, encoded as an ASN.1 Element.
 */
export function _encode_Certificates(
    value: Certificates,
    elGetter: $.ASN1Encoder<Certificates>
) {
    if (!_cached_encoder_for_Certificates) {
        _cached_encoder_for_Certificates = function (
            value: Certificates,
            elGetter: $.ASN1Encoder<Certificates>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Certificate(
                                value.userCertificate,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.certificationPath ===
                            undefined
                                ? undefined
                                : _encode_ForwardCertificationPath(
                                      value.certificationPath,
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
    return _cached_encoder_for_Certificates(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Certificates */

/* eslint-enable */
