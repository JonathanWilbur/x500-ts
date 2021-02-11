/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../AuthenticationFramework/Time.ta";
import {
    AltNameType,
    _decode_AltNameType,
    _encode_AltNameType,
} from "../CertificateExtensions/AltNameType.ta";
import {
    AuthorityKeyIdentifier,
    _decode_AuthorityKeyIdentifier,
    _encode_AuthorityKeyIdentifier,
} from "../CertificateExtensions/AuthorityKeyIdentifier.ta";
import {
    CertPolicySet,
    _decode_CertPolicySet,
    _encode_CertPolicySet,
} from "../CertificateExtensions/CertPolicySet.ta";
import {
    KeyUsage,
    _decode_KeyUsage,
    _encode_KeyUsage,
} from "../CertificateExtensions/KeyUsage.ta";
import {
    NameConstraintsSyntax,
    _decode_NameConstraintsSyntax,
    _encode_NameConstraintsSyntax,
} from "../CertificateExtensions/NameConstraintsSyntax.ta";
import {
    SubjectKeyIdentifier,
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier,
} from "../CertificateExtensions/SubjectKeyIdentifier.ta";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
export {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta";
export {
    Time,
    _decode_Time,
    _encode_Time,
} from "../AuthenticationFramework/Time.ta";
export {
    AltNameType,
    _decode_AltNameType,
    _encode_AltNameType,
} from "../CertificateExtensions/AltNameType.ta";
export {
    AuthorityKeyIdentifier,
    _decode_AuthorityKeyIdentifier,
    _encode_AuthorityKeyIdentifier,
} from "../CertificateExtensions/AuthorityKeyIdentifier.ta";
export {
    CertPolicySet,
    _decode_CertPolicySet,
    _encode_CertPolicySet,
} from "../CertificateExtensions/CertPolicySet.ta";
export {
    contentCommitment /* IMPORTED_SHORT_NAMED_BIT */,
    cRLSign /* IMPORTED_SHORT_NAMED_BIT */,
    dataEncipherment /* IMPORTED_SHORT_NAMED_BIT */,
    decipherOnly /* IMPORTED_SHORT_NAMED_BIT */,
    digitalSignature /* IMPORTED_SHORT_NAMED_BIT */,
    encipherOnly /* IMPORTED_SHORT_NAMED_BIT */,
    keyAgreement /* IMPORTED_SHORT_NAMED_BIT */,
    keyCertSign /* IMPORTED_SHORT_NAMED_BIT */,
    keyEncipherment /* IMPORTED_SHORT_NAMED_BIT */,
    KeyUsage,
    KeyUsage_contentCommitment /* IMPORTED_LONG_NAMED_BIT */,
    KeyUsage_cRLSign /* IMPORTED_LONG_NAMED_BIT */,
    KeyUsage_dataEncipherment /* IMPORTED_LONG_NAMED_BIT */,
    KeyUsage_decipherOnly /* IMPORTED_LONG_NAMED_BIT */,
    KeyUsage_digitalSignature /* IMPORTED_LONG_NAMED_BIT */,
    KeyUsage_encipherOnly /* IMPORTED_LONG_NAMED_BIT */,
    KeyUsage_keyAgreement /* IMPORTED_LONG_NAMED_BIT */,
    KeyUsage_keyCertSign /* IMPORTED_LONG_NAMED_BIT */,
    KeyUsage_keyEncipherment /* IMPORTED_LONG_NAMED_BIT */,
    _decode_KeyUsage,
    _encode_KeyUsage,
} from "../CertificateExtensions/KeyUsage.ta";
export {
    NameConstraintsSyntax,
    _decode_NameConstraintsSyntax,
    _encode_NameConstraintsSyntax,
} from "../CertificateExtensions/NameConstraintsSyntax.ta";
export {
    SubjectKeyIdentifier,
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier,
} from "../CertificateExtensions/SubjectKeyIdentifier.ta";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";

/* START_OF_SYMBOL_DEFINITION CertificateAssertion */
/**
 * @summary CertificateAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateAssertion ::= SEQUENCE {
 *   serialNumber            [0]  CertificateSerialNumber OPTIONAL,
 *   issuer                  [1]  Name OPTIONAL,
 *   subjectKeyIdentifier    [2]  SubjectKeyIdentifier OPTIONAL,
 *   authorityKeyIdentifier  [3]  AuthorityKeyIdentifier OPTIONAL,
 *   certificateValid        [4]  Time OPTIONAL,
 *   privateKeyValid         [5]  GeneralizedTime OPTIONAL,
 *   subjectPublicKeyAlgID   [6]  OBJECT IDENTIFIER OPTIONAL,
 *   keyUsage                [7]  KeyUsage OPTIONAL,
 *   subjectAltName          [8]  AltNameType OPTIONAL,
 *   policy                  [9]  CertPolicySet OPTIONAL,
 *   pathToName              [10] Name OPTIONAL,
 *   subject                 [11] Name OPTIONAL,
 *   nameConstraints         [12] NameConstraintsSyntax OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class CertificateAssertion {
    constructor(
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: OPTIONAL<CertificateSerialNumber>,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: OPTIONAL<Name>,
        /**
         * @summary `subjectKeyIdentifier`.
         * @public
         * @readonly
         */
        readonly subjectKeyIdentifier: OPTIONAL<SubjectKeyIdentifier>,
        /**
         * @summary `authorityKeyIdentifier`.
         * @public
         * @readonly
         */
        readonly authorityKeyIdentifier: OPTIONAL<AuthorityKeyIdentifier>,
        /**
         * @summary `certificateValid`.
         * @public
         * @readonly
         */
        readonly certificateValid: OPTIONAL<Time>,
        /**
         * @summary `privateKeyValid`.
         * @public
         * @readonly
         */
        readonly privateKeyValid: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `subjectPublicKeyAlgID`.
         * @public
         * @readonly
         */
        readonly subjectPublicKeyAlgID: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `keyUsage`.
         * @public
         * @readonly
         */
        readonly keyUsage: OPTIONAL<KeyUsage>,
        /**
         * @summary `subjectAltName`.
         * @public
         * @readonly
         */
        readonly subjectAltName: OPTIONAL<AltNameType>,
        /**
         * @summary `policy`.
         * @public
         * @readonly
         */
        readonly policy: OPTIONAL<CertPolicySet>,
        /**
         * @summary `pathToName`.
         * @public
         * @readonly
         */
        readonly pathToName: OPTIONAL<Name>,
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: OPTIONAL<Name>,
        /**
         * @summary `nameConstraints`.
         * @public
         * @readonly
         */
        readonly nameConstraints: OPTIONAL<NameConstraintsSyntax>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificateAssertion
     * @description
     *
     * This takes an `object` and converts it to a `CertificateAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateAssertion`.
     * @returns {CertificateAssertion}
     */
    public static _from_object(
        _o: { [_K in keyof CertificateAssertion]: CertificateAssertion[_K] }
    ): CertificateAssertion {
        return new CertificateAssertion(
            _o.serialNumber,
            _o.issuer,
            _o.subjectKeyIdentifier,
            _o.authorityKeyIdentifier,
            _o.certificateValid,
            _o.privateKeyValid,
            _o.subjectPublicKeyAlgID,
            _o.keyUsage,
            _o.subjectAltName,
            _o.policy,
            _o.pathToName,
            _o.subject,
            _o.nameConstraints,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CertificateAssertion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificateAssertion */
/**
 * @summary The Leading Root Component Types of CertificateAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "serialNumber",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "issuer",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subjectKeyIdentifier",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "authorityKeyIdentifier",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certificateValid",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "privateKeyValid",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subjectPublicKeyAlgID",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "keyUsage",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subjectAltName",
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "policy",
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pathToName",
        true,
        $.hasTag(_TagClass.context, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subject",
        true,
        $.hasTag(_TagClass.context, 11),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nameConstraints",
        true,
        $.hasTag(_TagClass.context, 12),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificateAssertion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificateAssertion */
/**
 * @summary The Trailing Root Component Types of CertificateAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateAssertion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificateAssertion */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificateAssertion */
/**
 * @summary The Extension Addition Component Types of CertificateAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateAssertion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificateAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateAssertion */
let _cached_decoder_for_CertificateAssertion: $.ASN1Decoder<CertificateAssertion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateAssertion */

/* START_OF_SYMBOL_DEFINITION _decode_CertificateAssertion */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateAssertion} The decoded data structure.
 */
export function _decode_CertificateAssertion(el: _Element) {
    if (!_cached_decoder_for_CertificateAssertion) {
        _cached_decoder_for_CertificateAssertion = function (
            el: _Element
        ): CertificateAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let serialNumber: OPTIONAL<CertificateSerialNumber>;
            let issuer: OPTIONAL<Name>;
            let subjectKeyIdentifier: OPTIONAL<SubjectKeyIdentifier>;
            let authorityKeyIdentifier: OPTIONAL<AuthorityKeyIdentifier>;
            let certificateValid: OPTIONAL<Time>;
            let privateKeyValid: OPTIONAL<GeneralizedTime>;
            let subjectPublicKeyAlgID: OPTIONAL<OBJECT_IDENTIFIER>;
            let keyUsage: OPTIONAL<KeyUsage>;
            let subjectAltName: OPTIONAL<AltNameType>;
            let policy: OPTIONAL<CertPolicySet>;
            let pathToName: OPTIONAL<Name>;
            let subject: OPTIONAL<Name>;
            let nameConstraints: OPTIONAL<NameConstraintsSyntax>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                serialNumber: (_el: _Element): void => {
                    serialNumber = $._decode_implicit<CertificateSerialNumber>(
                        () => _decode_CertificateSerialNumber
                    )(_el);
                },
                issuer: (_el: _Element): void => {
                    issuer = $._decode_explicit<Name>(() => _decode_Name)(_el);
                },
                subjectKeyIdentifier: (_el: _Element): void => {
                    subjectKeyIdentifier = $._decode_implicit<SubjectKeyIdentifier>(
                        () => _decode_SubjectKeyIdentifier
                    )(_el);
                },
                authorityKeyIdentifier: (_el: _Element): void => {
                    authorityKeyIdentifier = $._decode_implicit<AuthorityKeyIdentifier>(
                        () => _decode_AuthorityKeyIdentifier
                    )(_el);
                },
                certificateValid: (_el: _Element): void => {
                    certificateValid = $._decode_explicit<Time>(
                        () => _decode_Time
                    )(_el);
                },
                privateKeyValid: (_el: _Element): void => {
                    privateKeyValid = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                subjectPublicKeyAlgID: (_el: _Element): void => {
                    subjectPublicKeyAlgID = $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                keyUsage: (_el: _Element): void => {
                    keyUsage = $._decode_implicit<KeyUsage>(
                        () => _decode_KeyUsage
                    )(_el);
                },
                subjectAltName: (_el: _Element): void => {
                    subjectAltName = $._decode_explicit<AltNameType>(
                        () => _decode_AltNameType
                    )(_el);
                },
                policy: (_el: _Element): void => {
                    policy = $._decode_implicit<CertPolicySet>(
                        () => _decode_CertPolicySet
                    )(_el);
                },
                pathToName: (_el: _Element): void => {
                    pathToName = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                subject: (_el: _Element): void => {
                    subject = $._decode_explicit<Name>(() => _decode_Name)(_el);
                },
                nameConstraints: (_el: _Element): void => {
                    nameConstraints = $._decode_implicit<NameConstraintsSyntax>(
                        () => _decode_NameConstraintsSyntax
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificateAssertion,
                _extension_additions_list_spec_for_CertificateAssertion,
                _root_component_type_list_2_spec_for_CertificateAssertion,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificateAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ serialNumber,
                issuer,
                subjectKeyIdentifier,
                authorityKeyIdentifier,
                certificateValid,
                privateKeyValid,
                subjectPublicKeyAlgID,
                keyUsage,
                subjectAltName,
                policy,
                pathToName,
                subject,
                nameConstraints,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertificateAssertion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificateAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateAssertion */
let _cached_encoder_for_CertificateAssertion: $.ASN1Encoder<CertificateAssertion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateAssertion */

/* START_OF_SYMBOL_DEFINITION _encode_CertificateAssertion */
/**
 * @summary Encodes a(n) CertificateAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateAssertion, encoded as an ASN.1 Element.
 */
export function _encode_CertificateAssertion(
    value: CertificateAssertion,
    elGetter: $.ASN1Encoder<CertificateAssertion>
) {
    if (!_cached_encoder_for_CertificateAssertion) {
        _cached_encoder_for_CertificateAssertion = function (
            value: CertificateAssertion,
            elGetter: $.ASN1Encoder<CertificateAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.serialNumber === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_CertificateSerialNumber,
                                      $.BER
                                  )(value.serialNumber, $.BER),
                            /* IF_ABSENT  */ value.issuer === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Name,
                                      $.BER
                                  )(value.issuer, $.BER),
                            /* IF_ABSENT  */ value.subjectKeyIdentifier ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_SubjectKeyIdentifier,
                                      $.BER
                                  )(value.subjectKeyIdentifier, $.BER),
                            /* IF_ABSENT  */ value.authorityKeyIdentifier ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_AuthorityKeyIdentifier,
                                      $.BER
                                  )(value.authorityKeyIdentifier, $.BER),
                            /* IF_ABSENT  */ value.certificateValid ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_Time,
                                      $.BER
                                  )(value.certificateValid, $.BER),
                            /* IF_ABSENT  */ value.privateKeyValid === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      5,
                                      () => $._encodeGeneralizedTime,
                                      $.BER
                                  )(value.privateKeyValid, $.BER),
                            /* IF_ABSENT  */ value.subjectPublicKeyAlgID ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      6,
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.subjectPublicKeyAlgID, $.BER),
                            /* IF_ABSENT  */ value.keyUsage === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_KeyUsage,
                                      $.BER
                                  )(value.keyUsage, $.BER),
                            /* IF_ABSENT  */ value.subjectAltName === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () => _encode_AltNameType,
                                      $.BER
                                  )(value.subjectAltName, $.BER),
                            /* IF_ABSENT  */ value.policy === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      9,
                                      () => _encode_CertPolicySet,
                                      $.BER
                                  )(value.policy, $.BER),
                            /* IF_ABSENT  */ value.pathToName === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      10,
                                      () => _encode_Name,
                                      $.BER
                                  )(value.pathToName, $.BER),
                            /* IF_ABSENT  */ value.subject === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      11,
                                      () => _encode_Name,
                                      $.BER
                                  )(value.subject, $.BER),
                            /* IF_ABSENT  */ value.nameConstraints === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      12,
                                      () => _encode_NameConstraintsSyntax,
                                      $.BER
                                  )(value.nameConstraints, $.BER),
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
    return _cached_encoder_for_CertificateAssertion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificateAssertion */

/* eslint-enable */
