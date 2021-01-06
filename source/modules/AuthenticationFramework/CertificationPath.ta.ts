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
    CertificatePair,
    _decode_CertificatePair,
    _encode_CertificatePair,
} from "../AuthenticationFramework/CertificatePair.ta";
export {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
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
 *   userCertificate    Certificate,
 *   theCACertificates  SEQUENCE SIZE (1..MAX) OF CertificatePair OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class CertificationPath {
    constructor(
        /**
         * @summary `userCertificate`.
         * @public
         * @readonly
         */
        readonly userCertificate: Certificate,
        /**
         * @summary `theCACertificates`.
         * @public
         * @readonly
         */
        readonly theCACertificates: OPTIONAL<CertificatePair[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
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
            _o.userCertificate,
            _o.theCACertificates,
            _o._unrecognizedExtensionsList
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
        "userCertificate",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "theCACertificates",
        true,
        $.hasTag(_TagClass.universal, 16),
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
let _cached_decoder_for_CertificationPath: $.ASN1Decoder<CertificationPath> | null = null;
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
            let userCertificate!: Certificate;
            let theCACertificates: OPTIONAL<CertificatePair[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                userCertificate: (_el: _Element): void => {
                    userCertificate = _decode_Certificate(_el);
                },
                theCACertificates: (_el: _Element): void => {
                    theCACertificates = $._decodeSequenceOf<CertificatePair>(
                        () => _decode_CertificatePair
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
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificationPath(
                /* SEQUENCE_CONSTRUCTOR_CALL */ userCertificate,
                theCACertificates,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertificationPath(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificationPath */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificationPath */
let _cached_encoder_for_CertificationPath: $.ASN1Encoder<CertificationPath> | null = null;
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
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Certificate(
                                value.userCertificate,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.theCACertificates ===
                            undefined
                                ? undefined
                                : $._encodeSequenceOf<CertificatePair>(
                                      () => _encode_CertificatePair,
                                      $.BER
                                  )(value.theCACertificates, $.BER),
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
    return _cached_encoder_for_CertificationPath(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificationPath */

/* eslint-enable */
