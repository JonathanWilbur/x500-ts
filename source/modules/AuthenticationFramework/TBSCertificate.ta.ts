/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "../AuthenticationFramework/Extensions.ta";
import {
    SubjectPublicKeyInfo,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
} from "../AuthenticationFramework/SubjectPublicKeyInfo.ta";
import {
    Validity,
    _decode_Validity,
    _encode_Validity,
} from "../AuthenticationFramework/Validity.ta";
import {
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    Version,
    _decode_Version,
    _encode_Version,
} from "../AuthenticationFramework/Version.ta";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
import {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "../SelectedAttributeTypes/UniqueIdentifier.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";
export {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta";
export {
    SubjectPublicKeyInfo,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
} from "../AuthenticationFramework/SubjectPublicKeyInfo.ta";
export {
    Validity,
    _decode_Validity,
    _encode_Validity,
} from "../AuthenticationFramework/Validity.ta";
export {
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    v2 /* IMPORTED_SHORT_NAMED_INTEGER */,
    v3 /* IMPORTED_SHORT_NAMED_INTEGER */,
    Version,
    Version_v1 /* IMPORTED_LONG_NAMED_INTEGER */,
    Version_v2 /* IMPORTED_LONG_NAMED_INTEGER */,
    Version_v3 /* IMPORTED_LONG_NAMED_INTEGER */,
    _decode_Version,
    _encode_Version,
} from "../AuthenticationFramework/Version.ta";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
export {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "../SelectedAttributeTypes/UniqueIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION TBSCertificate */
/**
 * @summary TBSCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSCertificate ::= SEQUENCE {
 *   version                  [0]  Version DEFAULT v1,
 *   serialNumber                  CertificateSerialNumber,
 *   signature                     AlgorithmIdentifier{{SupportedAlgorithms}},
 *   issuer                        Name,
 *   validity                      Validity,
 *   subject                       Name,
 *   subjectPublicKeyInfo          SubjectPublicKeyInfo,
 *   issuerUniqueIdentifier   [1] IMPLICIT UniqueIdentifier OPTIONAL,
 *   ...,
 *   [[2:  -- if present, version shall be v2 or v3
 *   subjectUniqueIdentifier  [2] IMPLICIT UniqueIdentifier OPTIONAL]],
 *   [[3:  -- if present, version shall be v2 or v3
 *   extensions               [3]  Extensions OPTIONAL ]]
 *   -- If present, version shall be v3]]
 *  } (CONSTRAINED BY { -- shall be DER encoded -- } )
 * ```
 *
 * @class
 */
export class TBSCertificate {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: AlgorithmIdentifier,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `validity`.
         * @public
         * @readonly
         */
        readonly validity: Validity,
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: Name,
        /**
         * @summary `subjectPublicKeyInfo`.
         * @public
         * @readonly
         */
        readonly subjectPublicKeyInfo: SubjectPublicKeyInfo,
        /**
         * @summary `issuerUniqueIdentifier`.
         * @public
         * @readonly
         */
        readonly issuerUniqueIdentifier: OPTIONAL<UniqueIdentifier>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `subjectUniqueIdentifier`
         * @public
         * @readonly
         */
        readonly subjectUniqueIdentifier: OPTIONAL<UniqueIdentifier>,
        /**
         * @summary `extensions`
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a TBSCertificate
     * @description
     *
     * This takes an `object` and converts it to a `TBSCertificate`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSCertificate`.
     * @returns {TBSCertificate}
     */
    public static _from_object(
        _o: { [_K in keyof TBSCertificate]: TBSCertificate[_K] }
    ): TBSCertificate {
        return new TBSCertificate(
            _o.version,
            _o.serialNumber,
            _o.signature,
            _o.issuer,
            _o.validity,
            _o.subject,
            _o.subjectPublicKeyInfo,
            _o.issuerUniqueIdentifier,
            _o._unrecognizedExtensionsList,
            _o.subjectUniqueIdentifier,
            _o.extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return v1;
    }
}
/* END_OF_SYMBOL_DEFINITION TBSCertificate */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TBSCertificate */
/**
 * @summary The Leading Root Component Types of TBSCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBSCertificate: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec("issuer", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "validity",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec("subject", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "subjectPublicKeyInfo",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "issuerUniqueIdentifier",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TBSCertificate */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TBSCertificate */
/**
 * @summary The Trailing Root Component Types of TBSCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBSCertificate: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TBSCertificate */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TBSCertificate */
/**
 * @summary The Extension Addition Component Types of TBSCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBSCertificate: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "subjectUniqueIdentifier",
        true,
        $.hasTag(_TagClass.context, 2),
        0,
        2
    ),
    new $.ComponentSpec(
        "extensions",
        true,
        $.hasTag(_TagClass.context, 3),
        1,
        3
    ),
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TBSCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TBSCertificate */
let _cached_decoder_for_TBSCertificate: $.ASN1Decoder<TBSCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TBSCertificate */

/* START_OF_SYMBOL_DEFINITION _decode_TBSCertificate */
/**
 * @summary Decodes an ASN.1 element into a(n) TBSCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSCertificate} The decoded data structure.
 */
export function _decode_TBSCertificate(el: _Element) {
    if (!_cached_decoder_for_TBSCertificate) {
        _cached_decoder_for_TBSCertificate = function (
            el: _Element
        ): TBSCertificate {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<Version> =
                TBSCertificate._default_value_for_version;
            let serialNumber!: CertificateSerialNumber;
            let signature!: AlgorithmIdentifier;
            let issuer!: Name;
            let validity!: Validity;
            let subject!: Name;
            let subjectPublicKeyInfo!: SubjectPublicKeyInfo;
            let issuerUniqueIdentifier: OPTIONAL<UniqueIdentifier>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let subjectUniqueIdentifier: OPTIONAL<UniqueIdentifier>;
            let extensions: OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = $._decode_explicit<Version>(
                        () => _decode_Version
                    )(_el);
                },
                serialNumber: (_el: _Element): void => {
                    serialNumber = _decode_CertificateSerialNumber(_el);
                },
                signature: (_el: _Element): void => {
                    signature = _decode_AlgorithmIdentifier(_el);
                },
                issuer: (_el: _Element): void => {
                    issuer = _decode_Name(_el);
                },
                validity: (_el: _Element): void => {
                    validity = _decode_Validity(_el);
                },
                subject: (_el: _Element): void => {
                    subject = _decode_Name(_el);
                },
                subjectPublicKeyInfo: (_el: _Element): void => {
                    subjectPublicKeyInfo = _decode_SubjectPublicKeyInfo(_el);
                },
                issuerUniqueIdentifier: (_el: _Element): void => {
                    issuerUniqueIdentifier = $._decode_implicit<UniqueIdentifier>(
                        () => _decode_UniqueIdentifier
                    )(_el);
                },
                subjectUniqueIdentifier: (_el: _Element): void => {
                    subjectUniqueIdentifier = $._decode_implicit<UniqueIdentifier>(
                        () => _decode_UniqueIdentifier
                    )(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_explicit<Extensions>(
                        () => _decode_Extensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBSCertificate,
                _extension_additions_list_spec_for_TBSCertificate,
                _root_component_type_list_2_spec_for_TBSCertificate,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TBSCertificate(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                serialNumber,
                signature,
                issuer,
                validity,
                subject,
                subjectPublicKeyInfo,
                issuerUniqueIdentifier,
                _unrecognizedExtensionsList,
                subjectUniqueIdentifier,
                extensions
            );
        };
    }
    return _cached_decoder_for_TBSCertificate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TBSCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TBSCertificate */
let _cached_encoder_for_TBSCertificate: $.ASN1Encoder<TBSCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TBSCertificate */

/* START_OF_SYMBOL_DEFINITION _encode_TBSCertificate */
/**
 * @summary Encodes a(n) TBSCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSCertificate, encoded as an ASN.1 Element.
 */
export function _encode_TBSCertificate(
    value: TBSCertificate,
    elGetter: $.ASN1Encoder<TBSCertificate>
) {
    if (!_cached_encoder_for_TBSCertificate) {
        _cached_encoder_for_TBSCertificate = function (
            value: TBSCertificate,
            elGetter: $.ASN1Encoder<TBSCertificate>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                TBSCertificate._default_value_for_version
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Version,
                                      $.DER
                                  )(value.version, $.DER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.signature,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_Name(value.issuer, $.DER),
                            /* REQUIRED   */ _encode_Validity(
                                value.validity,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_Name(value.subject, $.DER),
                            /* REQUIRED   */ _encode_SubjectPublicKeyInfo(
                                value.subjectPublicKeyInfo,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.issuerUniqueIdentifier ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_UniqueIdentifier,
                                      $.DER
                                  )(value.issuerUniqueIdentifier, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.subjectUniqueIdentifier ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_UniqueIdentifier,
                                      $.DER
                                  )(value.subjectUniqueIdentifier, $.DER),
                            /* IF_ABSENT  */ value.extensions === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_Extensions,
                                      $.DER
                                  )(value.extensions, $.DER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_TBSCertificate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TBSCertificate */

/* eslint-enable */
