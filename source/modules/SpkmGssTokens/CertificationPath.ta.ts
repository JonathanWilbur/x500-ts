/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { Certificate } from "../AuthenticationFramework/Certificate.ta";
import {
    CertificatePair,
    _decode_CertificatePair,
    _encode_CertificatePair,
} from "../AuthenticationFramework/CertificatePair.ta";
export {
    Certificate,
    _get_decoder_for_Certificate,
    _get_encoder_for_Certificate,
} from "../AuthenticationFramework/Certificate.ta";
export {
    CertificatePair,
    _decode_CertificatePair,
    _encode_CertificatePair,
} from "../AuthenticationFramework/CertificatePair.ta";

/* START_OF_SYMBOL_DEFINITION CertificationPath */
/**
 * @summary CertificationPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificationPath ::= SEQUENCE {
 *   userKeyId          [0]  OCTET STRING OPTIONAL,
 *   userCertif         [1]  Certificate OPTIONAL,
 *   verifKeyId         [2]  OCTET STRING OPTIONAL,
 *   userVerifCertif    [3]  Certificate OPTIONAL,
 *   theCACertificates  [4]  SEQUENCE OF CertificatePair OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class CertificationPath {
    constructor(
        /**
         * @summary `userKeyId`.
         * @public
         * @readonly
         */
        readonly userKeyId: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `userCertif`.
         * @public
         * @readonly
         */
        readonly userCertif: OPTIONAL<Certificate>,
        /**
         * @summary `verifKeyId`.
         * @public
         * @readonly
         */
        readonly verifKeyId: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `userVerifCertif`.
         * @public
         * @readonly
         */
        readonly userVerifCertif: OPTIONAL<Certificate>,
        /**
         * @summary `theCACertificates`.
         * @public
         * @readonly
         */
        readonly theCACertificates: OPTIONAL<CertificatePair[]>
    ) {}

    /**
     * @summary Restructures an object into a CertificationPath
     * @description
     *
     * This takes an `object` and converts it to a `CertificationPath`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificationPath`.
     * @returns {CertificationPath}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertificationPath]: CertificationPath[_K] }>
    ): CertificationPath {
        return new CertificationPath(
            _o.userKeyId,
            _o.userCertif,
            _o.verifKeyId,
            _o.userVerifCertif,
            _o.theCACertificates
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CertificationPath */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificationPath */
/**
 * @summary The Leading Root Component Types of CertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificationPath: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "userKeyId",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "userCertif",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "verifKeyId",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "userVerifCertif",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "theCACertificates",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificationPath */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificationPath */
/**
 * @summary The Trailing Root Component Types of CertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificationPath: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificationPath */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificationPath */
/**
 * @summary The Extension Addition Component Types of CertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificationPath: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificationPath */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificationPath */
let _cached_decoder_for_CertificationPath: $.ASN1Decoder<
    CertificationPath
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificationPath */

/* START_OF_SYMBOL_DEFINITION _decode_CertificationPath */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificationPath
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificationPath} The decoded data structure.
 */
export function _decode_CertificationPath(el: _Element) {
    if (!_cached_decoder_for_CertificationPath) {
        _cached_decoder_for_CertificationPath = function (
            el: _Element
        ): CertificationPath {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let userKeyId: OPTIONAL<OCTET_STRING>;
            let userCertif: OPTIONAL<Certificate>;
            let verifKeyId: OPTIONAL<OCTET_STRING>;
            let userVerifCertif: OPTIONAL<Certificate>;
            let theCACertificates: OPTIONAL<CertificatePair[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                userKeyId: (_el: _Element): void => {
                    userKeyId = $._decode_implicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                userCertif: (_el: _Element): void => {
                    userCertif = $._decode_implicit<Certificate>(
                        () => _decode_Certificate
                    )(_el);
                },
                verifKeyId: (_el: _Element): void => {
                    verifKeyId = $._decode_implicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                userVerifCertif: (_el: _Element): void => {
                    userVerifCertif = $._decode_implicit<Certificate>(
                        () => _decode_Certificate
                    )(_el);
                },
                theCACertificates: (_el: _Element): void => {
                    theCACertificates = $._decode_implicit<CertificatePair[]>(
                        () =>
                            $._decodeSequenceOf<CertificatePair>(
                                () => _decode_CertificatePair
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificationPath,
                _extension_additions_list_spec_for_CertificationPath,
                _root_component_type_list_2_spec_for_CertificationPath,
                undefined
            );
            return new CertificationPath /* SEQUENCE_CONSTRUCTOR_CALL */(
                userKeyId,
                userCertif,
                verifKeyId,
                userVerifCertif,
                theCACertificates
            );
        };
    }
    return _cached_decoder_for_CertificationPath(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificationPath */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificationPath */
let _cached_encoder_for_CertificationPath: $.ASN1Encoder<
    CertificationPath
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificationPath */

/* START_OF_SYMBOL_DEFINITION _encode_CertificationPath */
/**
 * @summary Encodes a(n) CertificationPath into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificationPath, encoded as an ASN.1 Element.
 */
export function _encode_CertificationPath(
    value: CertificationPath,
    elGetter: $.ASN1Encoder<CertificationPath>
) {
    if (!_cached_encoder_for_CertificationPath) {
        _cached_encoder_for_CertificationPath = function (
            value: CertificationPath,
            elGetter: $.ASN1Encoder<CertificationPath>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.userKeyId === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeOctetString,
                                  $.BER
                              )(value.userKeyId, $.BER),
                        /* IF_ABSENT  */ value.userCertif === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Certificate,
                                  $.BER
                              )(value.userCertif, $.BER),
                        /* IF_ABSENT  */ value.verifKeyId === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeOctetString,
                                  $.BER
                              )(value.verifKeyId, $.BER),
                        /* IF_ABSENT  */ value.userVerifCertif === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_Certificate,
                                  $.BER
                              )(value.userVerifCertif, $.BER),
                        /* IF_ABSENT  */ value.theCACertificates === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () =>
                                      $._encodeSequenceOf<CertificatePair>(
                                          () => _encode_CertificatePair,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.theCACertificates, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CertificationPath(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificationPath */

/* eslint-enable */
