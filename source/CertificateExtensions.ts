/**
 * @module CertificateExtensions
 * @summary The ASN.1 module `CertificateExtensions`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.certificateExtensions.9
 * IRI: undefined
 * EXTENSIBLE: false
 * ENCODINGREF: undefined
 * FILE: undefined
 *
 * This file was compiled by Wildboar Software's ASN.1 Compiler.
 *
 * @see {@link https://wildboarsoftware.com|Wildboar Software's Website}
 * /


/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    BOOLEAN,
    ENUMERATED,
    GeneralizedTime,
    IA5String,
    INSTANCE_OF,
    INTEGER,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    TYPE_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    AvlSerialNumber,
    CertificateSerialNumber,
    EXTENSION,
    Time,
    _decode_AlgorithmIdentifier,
    _decode_AvlSerialNumber,
    _decode_CertificateSerialNumber,
    _decode_PolicyID,
    _decode_Time,
    _encode_AlgorithmIdentifier,
    _encode_AvlSerialNumber,
    _encode_CertificateSerialNumber,
    _encode_PolicyID,
    _encode_Time,
} from "./AuthenticationFramework";
import {
    Attribute,
    MATCHING_RULE,
    Name,
    RelativeDistinguishedName,
    SYNTAX_NAME,
    _decode_Attribute,
    _decode_Name,
    _decode_RelativeDistinguishedName,
    _encode_Attribute,
    _encode_Name,
    _encode_RelativeDistinguishedName,
} from "./InformationFramework";
import {
    ORAddress,
    _decode_ORAddress,
    _encode_ORAddress,
} from "./PkiPmiExternalDataTypes";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
import { id_ce, id_ldx, id_mr } from "./UsefulDefinitions";
export {
    AlgorithmIdentifier,
    AvlSerialNumber,
    CertificateList,
    CertificateSerialNumber,
    EXTENSION,
    PolicyID,
    SupportedAlgorithms,
    Time,
    _decode_AlgorithmIdentifier,
    _decode_AvlSerialNumber,
    _decode_CertificateList,
    _decode_CertificateSerialNumber,
    _decode_PolicyID,
    _decode_Time,
    _encode_AlgorithmIdentifier,
    _encode_AvlSerialNumber,
    _encode_CertificateList,
    _encode_CertificateSerialNumber,
    _encode_PolicyID,
    _encode_Time,
} from "./AuthenticationFramework";
export {
    Attribute,
    MATCHING_RULE,
    Name,
    RelativeDistinguishedName,
    SupportedAttributes,
    SYNTAX_NAME,
    _decode_Attribute,
    _decode_Name,
    _decode_RelativeDistinguishedName,
    _encode_Attribute,
    _encode_Name,
    _encode_RelativeDistinguishedName,
} from "./InformationFramework";
export {
    ORAddress,
    _decode_ORAddress,
    _encode_ORAddress,
} from "./PkiPmiExternalDataTypes";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
export { id_at, id_ce, id_ldx, id_mr } from "./UsefulDefinitions";

export type KeyIdentifier<> = OCTET_STRING; // OctetStringType
let _cached_decoder_for_KeyIdentifier: $.ASN1Decoder<
    KeyIdentifier
> | null = null;
let _cached_encoder_for_KeyIdentifier: $.ASN1Encoder<
    KeyIdentifier
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) KeyIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyIdentifier} The decoded data structure.
 */
export function _decode_KeyIdentifier(el: _Element) {
    if (!_cached_decoder_for_KeyIdentifier) {
        _cached_decoder_for_KeyIdentifier = $._decodeOctetString;
    }
    return _cached_decoder_for_KeyIdentifier(el);
}
/**
 * @summary Encodes a(n) KeyIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_KeyIdentifier(
    value: KeyIdentifier,
    elGetter: $.ASN1Encoder<KeyIdentifier>
) {
    if (!_cached_encoder_for_KeyIdentifier) {
        _cached_encoder_for_KeyIdentifier = $._encodeOctetString;
    }
    return _cached_encoder_for_KeyIdentifier(value, elGetter);
}

/**
 * @summary OTHER_NAME
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OTHER-NAME ::= TYPE-IDENTIFIER
 * ```
 *
 * @interface
 */
export type OTHER_NAME = TYPE_IDENTIFIER;

/**
 * @summary EDIPartyName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIPartyName ::= SEQUENCE {
 *   nameAssigner  [0]  UnboundedDirectoryString OPTIONAL,
 *   partyName     [1]  UnboundedDirectoryString,
 *   ... }
 * ```
 *
 * @class
 */
export class EDIPartyName {
    constructor(
        /**
         * @summary `nameAssigner`.
         * @public
         * @readonly
         */
        readonly nameAssigner: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary `partyName`.
         * @public
         * @readonly
         */
        readonly partyName: UnboundedDirectoryString,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EDIPartyName
     * @description
     *
     * This takes an `object` and converts it to a `EDIPartyName`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDIPartyName`.
     * @returns {EDIPartyName}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof EDIPartyName]: EDIPartyName[_K] }>
    ): EDIPartyName {
        return new EDIPartyName(
            _o.nameAssigner,
            _o.partyName,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of EDIPartyName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EDIPartyName: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "nameAssigner",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "partyName",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of EDIPartyName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EDIPartyName: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of EDIPartyName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EDIPartyName: $.ComponentSpec[] = [];
let _cached_decoder_for_EDIPartyName: $.ASN1Decoder<EDIPartyName> | null = null;
let _cached_encoder_for_EDIPartyName: $.ASN1Encoder<EDIPartyName> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EDIPartyName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIPartyName} The decoded data structure.
 */
export function _decode_EDIPartyName(el: _Element) {
    if (!_cached_decoder_for_EDIPartyName) {
        _cached_decoder_for_EDIPartyName = function (
            el: _Element
        ): EDIPartyName {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let nameAssigner: OPTIONAL<UnboundedDirectoryString>;
            let partyName!: UnboundedDirectoryString;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                nameAssigner: (_el: _Element): void => {
                    nameAssigner = $._decode_implicit<UnboundedDirectoryString>(
                        () => _decode_UnboundedDirectoryString
                    )(_el);
                },
                partyName: (_el: _Element): void => {
                    partyName = $._decode_implicit<UnboundedDirectoryString>(
                        () => _decode_UnboundedDirectoryString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EDIPartyName,
                _extension_additions_list_spec_for_EDIPartyName,
                _root_component_type_list_2_spec_for_EDIPartyName,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EDIPartyName(
                /* SEQUENCE_CONSTRUCTOR_CALL */ nameAssigner,
                partyName,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_EDIPartyName(el);
}
/**
 * @summary Encodes a(n) EDIPartyName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIPartyName, encoded as an ASN.1 Element.
 */
export function _encode_EDIPartyName(
    value: EDIPartyName,
    elGetter: $.ASN1Encoder<EDIPartyName>
) {
    if (!_cached_encoder_for_EDIPartyName) {
        _cached_encoder_for_EDIPartyName = function (
            value: EDIPartyName,
            elGetter: $.ASN1Encoder<EDIPartyName>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.nameAssigner === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_UnboundedDirectoryString,
                                      $.BER
                                  )(value.nameAssigner, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () => _encode_UnboundedDirectoryString,
                                $.BER
                            )(value.partyName, $.BER),
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
    return _cached_encoder_for_EDIPartyName(value, elGetter);
}

/**
 * @summary GeneralName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralName  ::=  CHOICE {
 *   otherName                  [0]  INSTANCE OF OTHER-NAME,
 *   rfc822Name                 [1]  IA5String,
 *   dNSName                    [2]  IA5String,
 *   x400Address                [3]  ORAddress,
 *   directoryName              [4]  Name,
 *   ediPartyName               [5]  EDIPartyName,
 *   uniformResourceIdentifier  [6]  IA5String,
 *   iPAddress                  [7]  OCTET STRING,
 *   registeredID               [8]  OBJECT IDENTIFIER,
 *   ... }
 * ```
 */
export type GeneralName =
    | { otherName: INSTANCE_OF } /* CHOICE_ALT_ROOT */
    | { rfc822Name: IA5String } /* CHOICE_ALT_ROOT */
    | { dNSName: IA5String } /* CHOICE_ALT_ROOT */
    | { x400Address: ORAddress } /* CHOICE_ALT_ROOT */
    | { directoryName: Name } /* CHOICE_ALT_ROOT */
    | { ediPartyName: EDIPartyName } /* CHOICE_ALT_ROOT */
    | { uniformResourceIdentifier: IA5String } /* CHOICE_ALT_ROOT */
    | { iPAddress: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { registeredID: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_GeneralName: $.ASN1Decoder<GeneralName> | null = null;
let _cached_encoder_for_GeneralName: $.ASN1Encoder<GeneralName> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralName} The decoded data structure.
 */
export function _decode_GeneralName(el: _Element) {
    if (!_cached_decoder_for_GeneralName) {
        _cached_decoder_for_GeneralName = $._decode_extensible_choice<
            GeneralName
        >({
            "CONTEXT 0": [
                "otherName",
                $._decode_implicit<INSTANCE_OF>(() => $._decodeInstanceOf),
            ],
            "CONTEXT 1": [
                "rfc822Name",
                $._decode_implicit<IA5String>(() => $._decodeIA5String),
            ],
            "CONTEXT 2": [
                "dNSName",
                $._decode_implicit<IA5String>(() => $._decodeIA5String),
            ],
            "CONTEXT 3": [
                "x400Address",
                $._decode_implicit<ORAddress>(() => _decode_ORAddress),
            ],
            "CONTEXT 4": [
                "directoryName",
                $._decode_implicit<Name>(() => _decode_Name),
            ],
            "CONTEXT 5": [
                "ediPartyName",
                $._decode_implicit<EDIPartyName>(() => _decode_EDIPartyName),
            ],
            "CONTEXT 6": [
                "uniformResourceIdentifier",
                $._decode_implicit<IA5String>(() => $._decodeIA5String),
            ],
            "CONTEXT 7": [
                "iPAddress",
                $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString),
            ],
            "CONTEXT 8": [
                "registeredID",
                $._decode_implicit<OBJECT_IDENTIFIER>(
                    () => $._decodeObjectIdentifier
                ),
            ],
        });
    }
    return _cached_decoder_for_GeneralName(el);
}
/**
 * @summary Encodes a(n) GeneralName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralName, encoded as an ASN.1 Element.
 */
export function _encode_GeneralName(
    value: GeneralName,
    elGetter: $.ASN1Encoder<GeneralName>
) {
    if (!_cached_encoder_for_GeneralName) {
        _cached_encoder_for_GeneralName = $._encode_choice<GeneralName>(
            {
                otherName: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInstanceOf,
                    $.BER
                ),
                rfc822Name: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeIA5String,
                    $.BER
                ),
                dNSName: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => $._encodeIA5String,
                    $.BER
                ),
                x400Address: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_ORAddress,
                    $.BER
                ),
                directoryName: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_Name,
                    $.BER
                ),
                ediPartyName: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_EDIPartyName,
                    $.BER
                ),
                uniformResourceIdentifier: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => $._encodeIA5String,
                    $.BER
                ),
                iPAddress: $._encode_implicit(
                    _TagClass.context,
                    7,
                    () => $._encodeOctetString,
                    $.BER
                ),
                registeredID: $._encode_implicit(
                    _TagClass.context,
                    8,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_GeneralName(value, elGetter);
}

export type GeneralNames<> = GeneralName[]; // SequenceOfType
let _cached_decoder_for_GeneralNames: $.ASN1Decoder<GeneralNames> | null = null;
let _cached_encoder_for_GeneralNames: $.ASN1Encoder<GeneralNames> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralNames} The decoded data structure.
 */
export function _decode_GeneralNames(el: _Element) {
    if (!_cached_decoder_for_GeneralNames) {
        _cached_decoder_for_GeneralNames = $._decodeSequenceOf<GeneralName>(
            () => _decode_GeneralName
        );
    }
    return _cached_decoder_for_GeneralNames(el);
}
/**
 * @summary Encodes a(n) GeneralNames into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralNames, encoded as an ASN.1 Element.
 */
export function _encode_GeneralNames(
    value: GeneralNames,
    elGetter: $.ASN1Encoder<GeneralNames>
) {
    if (!_cached_encoder_for_GeneralNames) {
        _cached_encoder_for_GeneralNames = $._encodeSequenceOf<GeneralName>(
            () => _encode_GeneralName,
            $.BER
        );
    }
    return _cached_encoder_for_GeneralNames(value, elGetter);
}

/**
 * @summary AuthorityKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorityKeyIdentifier ::= SEQUENCE {
 *   keyIdentifier              [0]  KeyIdentifier OPTIONAL,
 *   authorityCertIssuer        [1]  GeneralNames OPTIONAL,
 *   authorityCertSerialNumber  [2]  CertificateSerialNumber OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS {..., authorityCertIssuer        PRESENT,
 *                          authorityCertSerialNumber  PRESENT } |
 *    WITH COMPONENTS {..., authorityCertIssuer        ABSENT,
 *                          authorityCertSerialNumber  ABSENT } )
 * ```
 *
 * @class
 */
export class AuthorityKeyIdentifier {
    constructor(
        /**
         * @summary `keyIdentifier`.
         * @public
         * @readonly
         */
        readonly keyIdentifier: OPTIONAL<KeyIdentifier>,
        /**
         * @summary `authorityCertIssuer`.
         * @public
         * @readonly
         */
        readonly authorityCertIssuer: OPTIONAL<GeneralNames>,
        /**
         * @summary `authorityCertSerialNumber`.
         * @public
         * @readonly
         */
        readonly authorityCertSerialNumber: OPTIONAL<CertificateSerialNumber>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AuthorityKeyIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `AuthorityKeyIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthorityKeyIdentifier`.
     * @returns {AuthorityKeyIdentifier}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof AuthorityKeyIdentifier]: AuthorityKeyIdentifier[_K] }
        >
    ): AuthorityKeyIdentifier {
        return new AuthorityKeyIdentifier(
            _o.keyIdentifier,
            _o.authorityCertIssuer,
            _o.authorityCertSerialNumber,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AuthorityKeyIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AuthorityKeyIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "keyIdentifier",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "authorityCertIssuer",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "authorityCertSerialNumber",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AuthorityKeyIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AuthorityKeyIdentifier: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AuthorityKeyIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AuthorityKeyIdentifier: $.ComponentSpec[] = [];
let _cached_decoder_for_AuthorityKeyIdentifier: $.ASN1Decoder<
    AuthorityKeyIdentifier
> | null = null;
let _cached_encoder_for_AuthorityKeyIdentifier: $.ASN1Encoder<
    AuthorityKeyIdentifier
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AuthorityKeyIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorityKeyIdentifier} The decoded data structure.
 */
export function _decode_AuthorityKeyIdentifier(el: _Element) {
    if (!_cached_decoder_for_AuthorityKeyIdentifier) {
        _cached_decoder_for_AuthorityKeyIdentifier = function (
            el: _Element
        ): AuthorityKeyIdentifier {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let keyIdentifier: OPTIONAL<KeyIdentifier>;
            let authorityCertIssuer: OPTIONAL<GeneralNames>;
            let authorityCertSerialNumber: OPTIONAL<CertificateSerialNumber>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                keyIdentifier: (_el: _Element): void => {
                    keyIdentifier = $._decode_implicit<KeyIdentifier>(
                        () => _decode_KeyIdentifier
                    )(_el);
                },
                authorityCertIssuer: (_el: _Element): void => {
                    authorityCertIssuer = $._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    )(_el);
                },
                authorityCertSerialNumber: (_el: _Element): void => {
                    authorityCertSerialNumber = $._decode_implicit<
                        CertificateSerialNumber
                    >(() => _decode_CertificateSerialNumber)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AuthorityKeyIdentifier,
                _extension_additions_list_spec_for_AuthorityKeyIdentifier,
                _root_component_type_list_2_spec_for_AuthorityKeyIdentifier,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AuthorityKeyIdentifier(
                /* SEQUENCE_CONSTRUCTOR_CALL */ keyIdentifier,
                authorityCertIssuer,
                authorityCertSerialNumber,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AuthorityKeyIdentifier(el);
}
/**
 * @summary Encodes a(n) AuthorityKeyIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorityKeyIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_AuthorityKeyIdentifier(
    value: AuthorityKeyIdentifier,
    elGetter: $.ASN1Encoder<AuthorityKeyIdentifier>
) {
    if (!_cached_encoder_for_AuthorityKeyIdentifier) {
        _cached_encoder_for_AuthorityKeyIdentifier = function (
            value: AuthorityKeyIdentifier,
            elGetter: $.ASN1Encoder<AuthorityKeyIdentifier>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.keyIdentifier === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_KeyIdentifier,
                                      $.BER
                                  )(value.keyIdentifier, $.BER),
                            /* IF_ABSENT  */ value.authorityCertIssuer ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_GeneralNames,
                                      $.BER
                                  )(value.authorityCertIssuer, $.BER),
                            /* IF_ABSENT  */ value.authorityCertSerialNumber ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_CertificateSerialNumber,
                                      $.BER
                                  )(value.authorityCertSerialNumber, $.BER),
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
    return _cached_encoder_for_AuthorityKeyIdentifier(value, elGetter);
}

/**
 * @summary id_ce_authorityKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-authorityKeyIdentifier             OBJECT IDENTIFIER ::= {id-ce 35}
 * ```
 *
 * @constant
 */
export const id_ce_authorityKeyIdentifier: OBJECT_IDENTIFIER = new _OID(
    [35],
    id_ce
);

/**
 * @summary authorityKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authorityKeyIdentifier EXTENSION ::= {
 *   SYNTAX         AuthorityKeyIdentifier
 *   IDENTIFIED BY  id-ce-authorityKeyIdentifier }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const authorityKeyIdentifier: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AuthorityKeyIdentifier,
    },
    encoderFor: {
        "&ExtnType": _encode_AuthorityKeyIdentifier,
    },
    "&id": id_ce_authorityKeyIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type SubjectKeyIdentifier<> = KeyIdentifier; // DefinedType
let _cached_decoder_for_SubjectKeyIdentifier: $.ASN1Decoder<
    SubjectKeyIdentifier
> | null = null;
let _cached_encoder_for_SubjectKeyIdentifier: $.ASN1Encoder<
    SubjectKeyIdentifier
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SubjectKeyIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectKeyIdentifier} The decoded data structure.
 */
export function _decode_SubjectKeyIdentifier(el: _Element) {
    if (!_cached_decoder_for_SubjectKeyIdentifier) {
        _cached_decoder_for_SubjectKeyIdentifier = _decode_KeyIdentifier;
    }
    return _cached_decoder_for_SubjectKeyIdentifier(el);
}
/**
 * @summary Encodes a(n) SubjectKeyIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectKeyIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_SubjectKeyIdentifier(
    value: SubjectKeyIdentifier,
    elGetter: $.ASN1Encoder<SubjectKeyIdentifier>
) {
    if (!_cached_encoder_for_SubjectKeyIdentifier) {
        _cached_encoder_for_SubjectKeyIdentifier = _encode_KeyIdentifier;
    }
    return _cached_encoder_for_SubjectKeyIdentifier(value, elGetter);
}

/**
 * @summary id_ce_subjectKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-subjectKeyIdentifier               OBJECT IDENTIFIER ::= {id-ce 14}
 * ```
 *
 * @constant
 */
export const id_ce_subjectKeyIdentifier: OBJECT_IDENTIFIER = new _OID(
    [14],
    id_ce
);

/**
 * @summary subjectKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subjectKeyIdentifier EXTENSION ::= {
 *   SYNTAX         SubjectKeyIdentifier
 *   IDENTIFIED BY  id-ce-subjectKeyIdentifier }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const subjectKeyIdentifier: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_SubjectKeyIdentifier,
    },
    encoderFor: {
        "&ExtnType": _encode_SubjectKeyIdentifier,
    },
    "&id": id_ce_subjectKeyIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary KeyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyUsage  ::=  BIT STRING {
 *   digitalSignature  (0),
 *   contentCommitment (1),
 *   keyEncipherment   (2),
 *   dataEncipherment  (3),
 *   keyAgreement      (4),
 *   keyCertSign       (5),
 *   cRLSign           (6),
 *   encipherOnly      (7),
 *   decipherOnly      (8) }
 * ```
 */
export type KeyUsage = BIT_STRING;
/**
 * @summary KeyUsage_digitalSignature
 * @constant
 */
export const KeyUsage_digitalSignature: number = 0; /* LONG_NAMED_BIT */
/**
 * @summary KeyUsage_contentCommitment
 * @constant
 */
export const KeyUsage_contentCommitment: number = 1; /* LONG_NAMED_BIT */
/**
 * @summary KeyUsage_keyEncipherment
 * @constant
 */
export const KeyUsage_keyEncipherment: number = 2; /* LONG_NAMED_BIT */
/**
 * @summary KeyUsage_dataEncipherment
 * @constant
 */
export const KeyUsage_dataEncipherment: number = 3; /* LONG_NAMED_BIT */
/**
 * @summary KeyUsage_keyAgreement
 * @constant
 */
export const KeyUsage_keyAgreement: number = 4; /* LONG_NAMED_BIT */
/**
 * @summary KeyUsage_keyCertSign
 * @constant
 */
export const KeyUsage_keyCertSign: number = 5; /* LONG_NAMED_BIT */
/**
 * @summary KeyUsage_cRLSign
 * @constant
 */
export const KeyUsage_cRLSign: number = 6; /* LONG_NAMED_BIT */
/**
 * @summary KeyUsage_encipherOnly
 * @constant
 */
export const KeyUsage_encipherOnly: number = 7; /* LONG_NAMED_BIT */
/**
 * @summary KeyUsage_decipherOnly
 * @constant
 */
export const KeyUsage_decipherOnly: number = 8; /* LONG_NAMED_BIT */
let _cached_decoder_for_KeyUsage: $.ASN1Decoder<KeyUsage> | null = null;
let _cached_encoder_for_KeyUsage: $.ASN1Encoder<KeyUsage> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) KeyUsage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyUsage} The decoded data structure.
 */
export function _decode_KeyUsage(el: _Element) {
    if (!_cached_decoder_for_KeyUsage) {
        _cached_decoder_for_KeyUsage = $._decodeBitString;
    }
    return _cached_decoder_for_KeyUsage(el);
}
/**
 * @summary Encodes a(n) KeyUsage into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyUsage, encoded as an ASN.1 Element.
 */
export function _encode_KeyUsage(
    value: KeyUsage,
    elGetter: $.ASN1Encoder<KeyUsage>
) {
    if (!_cached_encoder_for_KeyUsage) {
        _cached_encoder_for_KeyUsage = $._encodeBitString;
    }
    return _cached_encoder_for_KeyUsage(value, elGetter);
}

/**
 * @summary id_ce_keyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-keyUsage                           OBJECT IDENTIFIER ::= {id-ce 15}
 * ```
 *
 * @constant
 */
export const id_ce_keyUsage: OBJECT_IDENTIFIER = new _OID([15], id_ce);

/**
 * @summary keyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * keyUsage EXTENSION ::= {
 *   SYNTAX         KeyUsage
 *   IDENTIFIED BY  id-ce-keyUsage }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const keyUsage: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_KeyUsage,
    },
    encoderFor: {
        "&ExtnType": _encode_KeyUsage,
    },
    "&id": id_ce_keyUsage /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type KeyPurposeId<> = OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_KeyPurposeId: $.ASN1Decoder<KeyPurposeId> | null = null;
let _cached_encoder_for_KeyPurposeId: $.ASN1Encoder<KeyPurposeId> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) KeyPurposeId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyPurposeId} The decoded data structure.
 */
export function _decode_KeyPurposeId(el: _Element) {
    if (!_cached_decoder_for_KeyPurposeId) {
        _cached_decoder_for_KeyPurposeId = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_KeyPurposeId(el);
}
/**
 * @summary Encodes a(n) KeyPurposeId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyPurposeId, encoded as an ASN.1 Element.
 */
export function _encode_KeyPurposeId(
    value: KeyPurposeId,
    elGetter: $.ASN1Encoder<KeyPurposeId>
) {
    if (!_cached_encoder_for_KeyPurposeId) {
        _cached_encoder_for_KeyPurposeId = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_KeyPurposeId(value, elGetter);
}

/**
 * @summary id_ce_extKeyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-extKeyUsage                        OBJECT IDENTIFIER ::= {id-ce 37}
 * ```
 *
 * @constant
 */
export const id_ce_extKeyUsage: OBJECT_IDENTIFIER = new _OID([37], id_ce);

/**
 * @summary extKeyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extKeyUsage EXTENSION ::= {
 *   SYNTAX         SEQUENCE SIZE (1..MAX) OF KeyPurposeId
 *   IDENTIFIED BY  id-ce-extKeyUsage }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const extKeyUsage: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeSequenceOf<KeyPurposeId>(
            () => _decode_KeyPurposeId
        ),
    },
    encoderFor: {
        "&ExtnType": $._encodeSequenceOf<KeyPurposeId>(
            () => _encode_KeyPurposeId,
            $.BER
        ),
    },
    "&id": id_ce_extKeyUsage /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary PrivateKeyUsagePeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateKeyUsagePeriod ::= SEQUENCE {
 *   notBefore  [0]  GeneralizedTime OPTIONAL,
 *   notAfter   [1]  GeneralizedTime OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS {..., notBefore  PRESENT } |
 *    WITH COMPONENTS {..., notAfter   PRESENT } )
 * ```
 *
 * @class
 */
export class PrivateKeyUsagePeriod {
    constructor(
        /**
         * @summary `notBefore`.
         * @public
         * @readonly
         */
        readonly notBefore: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `notAfter`.
         * @public
         * @readonly
         */
        readonly notAfter: OPTIONAL<GeneralizedTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PrivateKeyUsagePeriod
     * @description
     *
     * This takes an `object` and converts it to a `PrivateKeyUsagePeriod`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivateKeyUsagePeriod`.
     * @returns {PrivateKeyUsagePeriod}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof PrivateKeyUsagePeriod]: PrivateKeyUsagePeriod[_K] }
        >
    ): PrivateKeyUsagePeriod {
        return new PrivateKeyUsagePeriod(
            _o.notBefore,
            _o.notAfter,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of PrivateKeyUsagePeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PrivateKeyUsagePeriod: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "notBefore",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "notAfter",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of PrivateKeyUsagePeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PrivateKeyUsagePeriod: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of PrivateKeyUsagePeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PrivateKeyUsagePeriod: $.ComponentSpec[] = [];
let _cached_decoder_for_PrivateKeyUsagePeriod: $.ASN1Decoder<
    PrivateKeyUsagePeriod
> | null = null;
let _cached_encoder_for_PrivateKeyUsagePeriod: $.ASN1Encoder<
    PrivateKeyUsagePeriod
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PrivateKeyUsagePeriod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateKeyUsagePeriod} The decoded data structure.
 */
export function _decode_PrivateKeyUsagePeriod(el: _Element) {
    if (!_cached_decoder_for_PrivateKeyUsagePeriod) {
        _cached_decoder_for_PrivateKeyUsagePeriod = function (
            el: _Element
        ): PrivateKeyUsagePeriod {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let notBefore: OPTIONAL<GeneralizedTime>;
            let notAfter: OPTIONAL<GeneralizedTime>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                notBefore: (_el: _Element): void => {
                    notBefore = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                notAfter: (_el: _Element): void => {
                    notAfter = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PrivateKeyUsagePeriod,
                _extension_additions_list_spec_for_PrivateKeyUsagePeriod,
                _root_component_type_list_2_spec_for_PrivateKeyUsagePeriod,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PrivateKeyUsagePeriod(
                /* SEQUENCE_CONSTRUCTOR_CALL */ notBefore,
                notAfter,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PrivateKeyUsagePeriod(el);
}
/**
 * @summary Encodes a(n) PrivateKeyUsagePeriod into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateKeyUsagePeriod, encoded as an ASN.1 Element.
 */
export function _encode_PrivateKeyUsagePeriod(
    value: PrivateKeyUsagePeriod,
    elGetter: $.ASN1Encoder<PrivateKeyUsagePeriod>
) {
    if (!_cached_encoder_for_PrivateKeyUsagePeriod) {
        _cached_encoder_for_PrivateKeyUsagePeriod = function (
            value: PrivateKeyUsagePeriod,
            elGetter: $.ASN1Encoder<PrivateKeyUsagePeriod>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.notBefore === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeGeneralizedTime,
                                      $.BER
                                  )(value.notBefore, $.BER),
                            /* IF_ABSENT  */ value.notAfter === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeGeneralizedTime,
                                      $.BER
                                  )(value.notAfter, $.BER),
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
    return _cached_encoder_for_PrivateKeyUsagePeriod(value, elGetter);
}

/**
 * @summary id_ce_privateKeyUsagePeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-privateKeyUsagePeriod              OBJECT IDENTIFIER ::= {id-ce 16}
 * ```
 *
 * @constant
 */
export const id_ce_privateKeyUsagePeriod: OBJECT_IDENTIFIER = new _OID(
    [16],
    id_ce
);

/**
 * @summary privateKeyUsagePeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * privateKeyUsagePeriod EXTENSION ::= {
 *   SYNTAX         PrivateKeyUsagePeriod
 *   IDENTIFIED BY  id-ce-privateKeyUsagePeriod }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const privateKeyUsagePeriod: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_PrivateKeyUsagePeriod,
    },
    encoderFor: {
        "&ExtnType": _encode_PrivateKeyUsagePeriod,
    },
    "&id": id_ce_privateKeyUsagePeriod /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type CertPolicyId<> = OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_CertPolicyId: $.ASN1Decoder<CertPolicyId> | null = null;
let _cached_encoder_for_CertPolicyId: $.ASN1Encoder<CertPolicyId> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertPolicyId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertPolicyId} The decoded data structure.
 */
export function _decode_CertPolicyId(el: _Element) {
    if (!_cached_decoder_for_CertPolicyId) {
        _cached_decoder_for_CertPolicyId = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_CertPolicyId(el);
}
/**
 * @summary Encodes a(n) CertPolicyId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertPolicyId, encoded as an ASN.1 Element.
 */
export function _encode_CertPolicyId(
    value: CertPolicyId,
    elGetter: $.ASN1Encoder<CertPolicyId>
) {
    if (!_cached_encoder_for_CertPolicyId) {
        _cached_encoder_for_CertPolicyId = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_CertPolicyId(value, elGetter);
}

/**
 * @summary CERT_POLICY_QUALIFIER
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CERT-POLICY-QUALIFIER ::= CLASS {
 *   &id                  OBJECT IDENTIFIER UNIQUE,
 *   &Qualifier           OPTIONAL }
 * WITH SYNTAX {
 *   POLICY-QUALIFIER-ID &id
 *   [QUALIFIER-TYPE     &Qualifier] }
 * ```
 *
 * @interface
 */
export interface CERT_POLICY_QUALIFIER<
    Qualifier = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "CERT-POLICY-QUALIFIER";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof CERT_POLICY_QUALIFIER<Qualifier>]: $.ASN1Decoder<
                CERT_POLICY_QUALIFIER<Qualifier>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof CERT_POLICY_QUALIFIER<Qualifier>]: $.ASN1Encoder<
                CERT_POLICY_QUALIFIER<Qualifier>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Qualifier
     */
    "&Qualifier": Qualifier;
}

/**
 * @summary SupportedPolicyQualifiers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedPolicyQualifiers CERT-POLICY-QUALIFIER ::= {...}
 * ```
 *
 * @constant
 * @type {CERT_POLICY_QUALIFIER[]}
 *
 */
export const SupportedPolicyQualifiers: CERT_POLICY_QUALIFIER[] = [];

/**
 * @summary PolicyQualifierInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PolicyQualifierInfo ::= SEQUENCE {
 *   policyQualifierId  CERT-POLICY-QUALIFIER.&id({SupportedPolicyQualifiers}),
 *   qualifier          CERT-POLICY-QUALIFIER.&Qualifier
 *               ({SupportedPolicyQualifiers}{@policyQualifierId}) OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class PolicyQualifierInfo {
    constructor(
        /**
         * @summary `policyQualifierId`.
         * @public
         * @readonly
         */
        readonly policyQualifierId: OBJECT_IDENTIFIER,
        /**
         * @summary `qualifier`.
         * @public
         * @readonly
         */
        readonly qualifier: OPTIONAL<_Element>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PolicyQualifierInfo
     * @description
     *
     * This takes an `object` and converts it to a `PolicyQualifierInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PolicyQualifierInfo`.
     * @returns {PolicyQualifierInfo}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof PolicyQualifierInfo]: PolicyQualifierInfo[_K] }
        >
    ): PolicyQualifierInfo {
        return new PolicyQualifierInfo(
            _o.policyQualifierId,
            _o.qualifier,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of PolicyQualifierInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PolicyQualifierInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "policyQualifierId",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("qualifier", true, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of PolicyQualifierInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PolicyQualifierInfo: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of PolicyQualifierInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PolicyQualifierInfo: $.ComponentSpec[] = [];
let _cached_decoder_for_PolicyQualifierInfo: $.ASN1Decoder<
    PolicyQualifierInfo
> | null = null;
let _cached_encoder_for_PolicyQualifierInfo: $.ASN1Encoder<
    PolicyQualifierInfo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PolicyQualifierInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PolicyQualifierInfo} The decoded data structure.
 */
export function _decode_PolicyQualifierInfo(el: _Element) {
    if (!_cached_decoder_for_PolicyQualifierInfo) {
        _cached_decoder_for_PolicyQualifierInfo = function (
            el: _Element
        ): PolicyQualifierInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let policyQualifierId!: OBJECT_IDENTIFIER;
            let qualifier: OPTIONAL<_Element>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                policyQualifierId: (_el: _Element): void => {
                    policyQualifierId = $._decodeObjectIdentifier(_el);
                },
                qualifier: (_el: _Element): void => {
                    qualifier = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PolicyQualifierInfo,
                _extension_additions_list_spec_for_PolicyQualifierInfo,
                _root_component_type_list_2_spec_for_PolicyQualifierInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PolicyQualifierInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ policyQualifierId,
                qualifier,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PolicyQualifierInfo(el);
}
/**
 * @summary Encodes a(n) PolicyQualifierInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyQualifierInfo, encoded as an ASN.1 Element.
 */
export function _encode_PolicyQualifierInfo(
    value: PolicyQualifierInfo,
    elGetter: $.ASN1Encoder<PolicyQualifierInfo>
) {
    if (!_cached_encoder_for_PolicyQualifierInfo) {
        _cached_encoder_for_PolicyQualifierInfo = function (
            value: PolicyQualifierInfo,
            elGetter: $.ASN1Encoder<PolicyQualifierInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.policyQualifierId,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.qualifier === undefined
                                ? undefined
                                : $._encodeAny(value.qualifier, $.BER),
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
    return _cached_encoder_for_PolicyQualifierInfo(value, elGetter);
}

/**
 * @summary PolicyInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PolicyInformation ::= SEQUENCE {
 *   policyIdentifier  CertPolicyId,
 *   policyQualifiers  SEQUENCE SIZE (1..MAX) OF PolicyQualifierInfo OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class PolicyInformation {
    constructor(
        /**
         * @summary `policyIdentifier`.
         * @public
         * @readonly
         */
        readonly policyIdentifier: CertPolicyId,
        /**
         * @summary `policyQualifiers`.
         * @public
         * @readonly
         */
        readonly policyQualifiers: OPTIONAL<PolicyQualifierInfo[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PolicyInformation
     * @description
     *
     * This takes an `object` and converts it to a `PolicyInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PolicyInformation`.
     * @returns {PolicyInformation}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof PolicyInformation]: PolicyInformation[_K] }>
    ): PolicyInformation {
        return new PolicyInformation(
            _o.policyIdentifier,
            _o.policyQualifiers,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of PolicyInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PolicyInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "policyIdentifier",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "policyQualifiers",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of PolicyInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PolicyInformation: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of PolicyInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PolicyInformation: $.ComponentSpec[] = [];
let _cached_decoder_for_PolicyInformation: $.ASN1Decoder<
    PolicyInformation
> | null = null;
let _cached_encoder_for_PolicyInformation: $.ASN1Encoder<
    PolicyInformation
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PolicyInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PolicyInformation} The decoded data structure.
 */
export function _decode_PolicyInformation(el: _Element) {
    if (!_cached_decoder_for_PolicyInformation) {
        _cached_decoder_for_PolicyInformation = function (
            el: _Element
        ): PolicyInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let policyIdentifier!: CertPolicyId;
            let policyQualifiers: OPTIONAL<PolicyQualifierInfo[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                policyIdentifier: (_el: _Element): void => {
                    policyIdentifier = _decode_CertPolicyId(_el);
                },
                policyQualifiers: (_el: _Element): void => {
                    policyQualifiers = $._decodeSequenceOf<PolicyQualifierInfo>(
                        () => _decode_PolicyQualifierInfo
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PolicyInformation,
                _extension_additions_list_spec_for_PolicyInformation,
                _root_component_type_list_2_spec_for_PolicyInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PolicyInformation(
                /* SEQUENCE_CONSTRUCTOR_CALL */ policyIdentifier,
                policyQualifiers,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PolicyInformation(el);
}
/**
 * @summary Encodes a(n) PolicyInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyInformation, encoded as an ASN.1 Element.
 */
export function _encode_PolicyInformation(
    value: PolicyInformation,
    elGetter: $.ASN1Encoder<PolicyInformation>
) {
    if (!_cached_encoder_for_PolicyInformation) {
        _cached_encoder_for_PolicyInformation = function (
            value: PolicyInformation,
            elGetter: $.ASN1Encoder<PolicyInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertPolicyId(
                                value.policyIdentifier,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.policyQualifiers ===
                            undefined
                                ? undefined
                                : $._encodeSequenceOf<PolicyQualifierInfo>(
                                      () => _encode_PolicyQualifierInfo,
                                      $.BER
                                  )(value.policyQualifiers, $.BER),
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
    return _cached_encoder_for_PolicyInformation(value, elGetter);
}

export type CertificatePoliciesSyntax<> = PolicyInformation[]; // SequenceOfType
let _cached_decoder_for_CertificatePoliciesSyntax: $.ASN1Decoder<
    CertificatePoliciesSyntax
> | null = null;
let _cached_encoder_for_CertificatePoliciesSyntax: $.ASN1Encoder<
    CertificatePoliciesSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertificatePoliciesSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificatePoliciesSyntax} The decoded data structure.
 */
export function _decode_CertificatePoliciesSyntax(el: _Element) {
    if (!_cached_decoder_for_CertificatePoliciesSyntax) {
        _cached_decoder_for_CertificatePoliciesSyntax = $._decodeSequenceOf<
            PolicyInformation
        >(() => _decode_PolicyInformation);
    }
    return _cached_decoder_for_CertificatePoliciesSyntax(el);
}
/**
 * @summary Encodes a(n) CertificatePoliciesSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificatePoliciesSyntax, encoded as an ASN.1 Element.
 */
export function _encode_CertificatePoliciesSyntax(
    value: CertificatePoliciesSyntax,
    elGetter: $.ASN1Encoder<CertificatePoliciesSyntax>
) {
    if (!_cached_encoder_for_CertificatePoliciesSyntax) {
        _cached_encoder_for_CertificatePoliciesSyntax = $._encodeSequenceOf<
            PolicyInformation
        >(() => _encode_PolicyInformation, $.BER);
    }
    return _cached_encoder_for_CertificatePoliciesSyntax(value, elGetter);
}

/**
 * @summary id_ce_certificatePolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-certificatePolicies                OBJECT IDENTIFIER ::= {id-ce 32}
 * ```
 *
 * @constant
 */
export const id_ce_certificatePolicies: OBJECT_IDENTIFIER = new _OID(
    [32],
    id_ce
);

/**
 * @summary certificatePolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificatePolicies EXTENSION ::= {
 *   SYNTAX         CertificatePoliciesSyntax
 *   IDENTIFIED BY  id-ce-certificatePolicies }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const certificatePolicies: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CertificatePoliciesSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_CertificatePoliciesSyntax,
    },
    "&id": id_ce_certificatePolicies /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary anyPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * anyPolicy OBJECT IDENTIFIER ::= {id-ce-certificatePolicies 0}
 * ```
 *
 * @constant
 */
export const anyPolicy: OBJECT_IDENTIFIER = new _OID(
    [0],
    id_ce_certificatePolicies
);

/**
 * @summary PolicyMappingsSyntax_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PolicyMappingsSyntax-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class PolicyMappingsSyntax_Item {
    constructor(
        /**
         * @summary `issuerDomainPolicy`.
         * @public
         * @readonly
         */
        readonly issuerDomainPolicy: CertPolicyId,
        /**
         * @summary `subjectDomainPolicy`.
         * @public
         * @readonly
         */
        readonly subjectDomainPolicy: CertPolicyId,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PolicyMappingsSyntax_Item
     * @description
     *
     * This takes an `object` and converts it to a `PolicyMappingsSyntax_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PolicyMappingsSyntax_Item`.
     * @returns {PolicyMappingsSyntax_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof PolicyMappingsSyntax_Item]: PolicyMappingsSyntax_Item[_K];
            }
        >
    ): PolicyMappingsSyntax_Item {
        return new PolicyMappingsSyntax_Item(
            _o.issuerDomainPolicy,
            _o.subjectDomainPolicy,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of PolicyMappingsSyntax_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PolicyMappingsSyntax_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "issuerDomainPolicy",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subjectDomainPolicy",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of PolicyMappingsSyntax_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PolicyMappingsSyntax_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of PolicyMappingsSyntax_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PolicyMappingsSyntax_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_PolicyMappingsSyntax_Item: $.ASN1Decoder<
    PolicyMappingsSyntax_Item
> | null = null;
let _cached_encoder_for_PolicyMappingsSyntax_Item: $.ASN1Encoder<
    PolicyMappingsSyntax_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PolicyMappingsSyntax_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PolicyMappingsSyntax_Item} The decoded data structure.
 */
export function _decode_PolicyMappingsSyntax_Item(el: _Element) {
    if (!_cached_decoder_for_PolicyMappingsSyntax_Item) {
        _cached_decoder_for_PolicyMappingsSyntax_Item = function (
            el: _Element
        ): PolicyMappingsSyntax_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PolicyMappingsSyntax-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "issuerDomainPolicy";
            sequence[1].name = "subjectDomainPolicy";
            let issuerDomainPolicy!: CertPolicyId;
            let subjectDomainPolicy!: CertPolicyId;
            issuerDomainPolicy = _decode_CertPolicyId(sequence[0]);
            subjectDomainPolicy = _decode_CertPolicyId(sequence[1]);
            return new PolicyMappingsSyntax_Item(
                issuerDomainPolicy,
                subjectDomainPolicy,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_PolicyMappingsSyntax_Item(el);
}
/**
 * @summary Encodes a(n) PolicyMappingsSyntax_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyMappingsSyntax_Item, encoded as an ASN.1 Element.
 */
export function _encode_PolicyMappingsSyntax_Item(
    value: PolicyMappingsSyntax_Item,
    elGetter: $.ASN1Encoder<PolicyMappingsSyntax_Item>
) {
    if (!_cached_encoder_for_PolicyMappingsSyntax_Item) {
        _cached_encoder_for_PolicyMappingsSyntax_Item = function (
            value: PolicyMappingsSyntax_Item,
            elGetter: $.ASN1Encoder<PolicyMappingsSyntax_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertPolicyId(
                                value.issuerDomainPolicy,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertPolicyId(
                                value.subjectDomainPolicy,
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
    return _cached_encoder_for_PolicyMappingsSyntax_Item(value, elGetter);
}

export type PolicyMappingsSyntax<> = PolicyMappingsSyntax_Item[]; // SequenceOfType
let _cached_decoder_for_PolicyMappingsSyntax: $.ASN1Decoder<
    PolicyMappingsSyntax
> | null = null;
let _cached_encoder_for_PolicyMappingsSyntax: $.ASN1Encoder<
    PolicyMappingsSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PolicyMappingsSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PolicyMappingsSyntax} The decoded data structure.
 */
export function _decode_PolicyMappingsSyntax(el: _Element) {
    if (!_cached_decoder_for_PolicyMappingsSyntax) {
        _cached_decoder_for_PolicyMappingsSyntax = $._decodeSequenceOf<
            PolicyMappingsSyntax_Item
        >(() => _decode_PolicyMappingsSyntax_Item);
    }
    return _cached_decoder_for_PolicyMappingsSyntax(el);
}
/**
 * @summary Encodes a(n) PolicyMappingsSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyMappingsSyntax, encoded as an ASN.1 Element.
 */
export function _encode_PolicyMappingsSyntax(
    value: PolicyMappingsSyntax,
    elGetter: $.ASN1Encoder<PolicyMappingsSyntax>
) {
    if (!_cached_encoder_for_PolicyMappingsSyntax) {
        _cached_encoder_for_PolicyMappingsSyntax = $._encodeSequenceOf<
            PolicyMappingsSyntax_Item
        >(() => _encode_PolicyMappingsSyntax_Item, $.BER);
    }
    return _cached_encoder_for_PolicyMappingsSyntax(value, elGetter);
}

/**
 * @summary id_ce_policyMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-policyMappings                     OBJECT IDENTIFIER ::= {id-ce 33}
 * ```
 *
 * @constant
 */
export const id_ce_policyMappings: OBJECT_IDENTIFIER = new _OID([33], id_ce);

/**
 * @summary policyMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * policyMappings EXTENSION ::= {
 *   SYNTAX         PolicyMappingsSyntax
 *   IDENTIFIED BY  id-ce-policyMappings }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const policyMappings: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_PolicyMappingsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_PolicyMappingsSyntax,
    },
    "&id": id_ce_policyMappings /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary AvlId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AvlId ::= SEQUENCE {
 *   issuer        Name,
 *   serialNumber  AvlSerialNumber OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class AvlId {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: OPTIONAL<AvlSerialNumber>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AvlId
     * @description
     *
     * This takes an `object` and converts it to a `AvlId`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AvlId`.
     * @returns {AvlId}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AvlId]: AvlId[_K] }>
    ): AvlId {
        return new AvlId(
            _o.issuer,
            _o.serialNumber,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AvlId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AvlId: $.ComponentSpec[] = [
    new $.ComponentSpec("issuer", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "serialNumber",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AvlId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AvlId: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AvlId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AvlId: $.ComponentSpec[] = [];
let _cached_decoder_for_AvlId: $.ASN1Decoder<AvlId> | null = null;
let _cached_encoder_for_AvlId: $.ASN1Encoder<AvlId> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AvlId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AvlId} The decoded data structure.
 */
export function _decode_AvlId(el: _Element) {
    if (!_cached_decoder_for_AvlId) {
        _cached_decoder_for_AvlId = function (el: _Element): AvlId {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuer!: Name;
            let serialNumber: OPTIONAL<AvlSerialNumber>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                issuer: (_el: _Element): void => {
                    issuer = _decode_Name(_el);
                },
                serialNumber: (_el: _Element): void => {
                    serialNumber = _decode_AvlSerialNumber(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AvlId,
                _extension_additions_list_spec_for_AvlId,
                _root_component_type_list_2_spec_for_AvlId,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AvlId(
                /* SEQUENCE_CONSTRUCTOR_CALL */ issuer,
                serialNumber,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AvlId(el);
}
/**
 * @summary Encodes a(n) AvlId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AvlId, encoded as an ASN.1 Element.
 */
export function _encode_AvlId(value: AvlId, elGetter: $.ASN1Encoder<AvlId>) {
    if (!_cached_encoder_for_AvlId) {
        _cached_encoder_for_AvlId = function (
            value: AvlId,
            elGetter: $.ASN1Encoder<AvlId>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.issuer, $.BER),
                            /* IF_ABSENT  */ value.serialNumber === undefined
                                ? undefined
                                : _encode_AvlSerialNumber(
                                      value.serialNumber,
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
    return _cached_encoder_for_AvlId(value, elGetter);
}

/**
 * @summary id_ce_authorizationValidation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-authorizationValidation            OBJECT IDENTIFIER ::= {id-ce 70}
 * ```
 *
 * @constant
 */
export const id_ce_authorizationValidation: OBJECT_IDENTIFIER = new _OID(
    [70],
    id_ce
);

/**
 * @summary authorizationValidation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authorizationValidation EXTENSION ::= {
 *   SYNTAX         AvlId
 *   IDENTIFIED BY  id-ce-authorizationValidation }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const authorizationValidation: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AvlId,
    },
    encoderFor: {
        "&ExtnType": _encode_AvlId,
    },
    "&id": id_ce_authorizationValidation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_subjectAltName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-subjectAltName                     OBJECT IDENTIFIER ::= {id-ce 17}
 * ```
 *
 * @constant
 */
export const id_ce_subjectAltName: OBJECT_IDENTIFIER = new _OID([17], id_ce);

/**
 * @summary subjectAltName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subjectAltName EXTENSION ::= {
 *   SYNTAX         GeneralNames
 *   IDENTIFIED BY  id-ce-subjectAltName }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const subjectAltName: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_GeneralNames,
    },
    encoderFor: {
        "&ExtnType": _encode_GeneralNames,
    },
    "&id": id_ce_subjectAltName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_issuerAltName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-issuerAltName                      OBJECT IDENTIFIER ::= {id-ce 18}
 * ```
 *
 * @constant
 */
export const id_ce_issuerAltName: OBJECT_IDENTIFIER = new _OID([18], id_ce);

/**
 * @summary issuerAltName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * issuerAltName EXTENSION ::= {
 *   SYNTAX         GeneralNames
 *   IDENTIFIED BY  id-ce-issuerAltName }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const issuerAltName: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_GeneralNames,
    },
    encoderFor: {
        "&ExtnType": _encode_GeneralNames,
    },
    "&id": id_ce_issuerAltName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type AttributesSyntax<> = Attribute[]; // SequenceOfType
let _cached_decoder_for_AttributesSyntax: $.ASN1Decoder<
    AttributesSyntax
> | null = null;
let _cached_encoder_for_AttributesSyntax: $.ASN1Encoder<
    AttributesSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributesSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributesSyntax} The decoded data structure.
 */
export function _decode_AttributesSyntax(el: _Element) {
    if (!_cached_decoder_for_AttributesSyntax) {
        _cached_decoder_for_AttributesSyntax = $._decodeSequenceOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_AttributesSyntax(el);
}
/**
 * @summary Encodes a(n) AttributesSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributesSyntax, encoded as an ASN.1 Element.
 */
export function _encode_AttributesSyntax(
    value: AttributesSyntax,
    elGetter: $.ASN1Encoder<AttributesSyntax>
) {
    if (!_cached_encoder_for_AttributesSyntax) {
        _cached_encoder_for_AttributesSyntax = $._encodeSequenceOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_AttributesSyntax(value, elGetter);
}

/**
 * @summary id_ce_subjectDirectoryAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-subjectDirectoryAttributes         OBJECT IDENTIFIER ::= {id-ce 9}
 * ```
 *
 * @constant
 */
export const id_ce_subjectDirectoryAttributes: OBJECT_IDENTIFIER = new _OID(
    [9],
    id_ce
);

/**
 * @summary subjectDirectoryAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subjectDirectoryAttributes EXTENSION ::= {
 *   SYNTAX         AttributesSyntax
 *   IDENTIFIED BY  id-ce-subjectDirectoryAttributes }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const subjectDirectoryAttributes: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AttributesSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AttributesSyntax,
    },
    "&id": id_ce_subjectDirectoryAttributes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_associatedInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-associatedInformation              OBJECT IDENTIFIER ::= {id-ce 75}
 * ```
 *
 * @constant
 */
export const id_ce_associatedInformation: OBJECT_IDENTIFIER = new _OID(
    [75],
    id_ce
);

/**
 * @summary associatedInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * associatedInformation EXTENSION ::= {
 *   SYNTAX         AttributesSyntax
 *   IDENTIFIED BY  id-ce-associatedInformation }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const associatedInformation: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AttributesSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AttributesSyntax,
    },
    "&id": id_ce_associatedInformation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary BasicConstraintsSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasicConstraintsSyntax ::= SEQUENCE {
 *   cA                 BOOLEAN DEFAULT FALSE,
 *   pathLenConstraint  INTEGER(0..MAX) OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class BasicConstraintsSyntax {
    constructor(
        /**
         * @summary `cA`.
         * @public
         * @readonly
         */
        readonly cA: OPTIONAL<BOOLEAN>,
        /**
         * @summary `pathLenConstraint`.
         * @public
         * @readonly
         */
        readonly pathLenConstraint: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a BasicConstraintsSyntax
     * @description
     *
     * This takes an `object` and converts it to a `BasicConstraintsSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BasicConstraintsSyntax`.
     * @returns {BasicConstraintsSyntax}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof BasicConstraintsSyntax]: BasicConstraintsSyntax[_K] }
        >
    ): BasicConstraintsSyntax {
        return new BasicConstraintsSyntax(
            _o.cA,
            _o.pathLenConstraint,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `cA`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_cA() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of BasicConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BasicConstraintsSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "cA",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pathLenConstraint",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of BasicConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BasicConstraintsSyntax: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of BasicConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BasicConstraintsSyntax: $.ComponentSpec[] = [];
let _cached_decoder_for_BasicConstraintsSyntax: $.ASN1Decoder<
    BasicConstraintsSyntax
> | null = null;
let _cached_encoder_for_BasicConstraintsSyntax: $.ASN1Encoder<
    BasicConstraintsSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) BasicConstraintsSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BasicConstraintsSyntax} The decoded data structure.
 */
export function _decode_BasicConstraintsSyntax(el: _Element) {
    if (!_cached_decoder_for_BasicConstraintsSyntax) {
        _cached_decoder_for_BasicConstraintsSyntax = function (
            el: _Element
        ): BasicConstraintsSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let cA: OPTIONAL<BOOLEAN> =
                BasicConstraintsSyntax._default_value_for_cA;
            let pathLenConstraint: OPTIONAL<INTEGER>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                cA: (_el: _Element): void => {
                    cA = $._decodeBoolean(_el);
                },
                pathLenConstraint: (_el: _Element): void => {
                    pathLenConstraint = $._decodeInteger(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BasicConstraintsSyntax,
                _extension_additions_list_spec_for_BasicConstraintsSyntax,
                _root_component_type_list_2_spec_for_BasicConstraintsSyntax,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new BasicConstraintsSyntax(
                /* SEQUENCE_CONSTRUCTOR_CALL */ cA,
                pathLenConstraint,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_BasicConstraintsSyntax(el);
}
/**
 * @summary Encodes a(n) BasicConstraintsSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicConstraintsSyntax, encoded as an ASN.1 Element.
 */
export function _encode_BasicConstraintsSyntax(
    value: BasicConstraintsSyntax,
    elGetter: $.ASN1Encoder<BasicConstraintsSyntax>
) {
    if (!_cached_encoder_for_BasicConstraintsSyntax) {
        _cached_encoder_for_BasicConstraintsSyntax = function (
            value: BasicConstraintsSyntax,
            elGetter: $.ASN1Encoder<BasicConstraintsSyntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.cA === undefined ||
                            $.deepEq(
                                value.cA,
                                BasicConstraintsSyntax._default_value_for_cA
                            )
                                ? undefined
                                : $._encodeBoolean(value.cA, $.BER),
                            /* IF_ABSENT  */ value.pathLenConstraint ===
                            undefined
                                ? undefined
                                : $._encodeInteger(
                                      value.pathLenConstraint,
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
    return _cached_encoder_for_BasicConstraintsSyntax(value, elGetter);
}

/**
 * @summary id_ce_basicConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-basicConstraints                   OBJECT IDENTIFIER ::= {id-ce 19}
 * ```
 *
 * @constant
 */
export const id_ce_basicConstraints: OBJECT_IDENTIFIER = new _OID([19], id_ce);

/**
 * @summary basicConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * basicConstraints EXTENSION ::= {
 *   SYNTAX         BasicConstraintsSyntax
 *   IDENTIFIED BY  id-ce-basicConstraints }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const basicConstraints: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_BasicConstraintsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_BasicConstraintsSyntax,
    },
    "&id": id_ce_basicConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary BaseDistance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BaseDistance  ::=  INTEGER(0..MAX)
 * ```
 */
export type BaseDistance = INTEGER;
let _cached_decoder_for_BaseDistance: $.ASN1Decoder<BaseDistance> | null = null;
let _cached_encoder_for_BaseDistance: $.ASN1Encoder<BaseDistance> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) BaseDistance
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BaseDistance} The decoded data structure.
 */
export function _decode_BaseDistance(el: _Element) {
    if (!_cached_decoder_for_BaseDistance) {
        _cached_decoder_for_BaseDistance = $._decodeInteger;
    }
    return _cached_decoder_for_BaseDistance(el);
}
/**
 * @summary Encodes a(n) BaseDistance into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BaseDistance, encoded as an ASN.1 Element.
 */
export function _encode_BaseDistance(
    value: BaseDistance,
    elGetter: $.ASN1Encoder<BaseDistance>
) {
    if (!_cached_encoder_for_BaseDistance) {
        _cached_encoder_for_BaseDistance = $._encodeInteger;
    }
    return _cached_encoder_for_BaseDistance(value, elGetter);
}

/**
 * @summary GeneralSubtree
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralSubtree ::= SEQUENCE {
 *   base          GeneralName,
 *   minimum  [0]  BaseDistance DEFAULT 0,
 *   maximum  [1]  BaseDistance OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class GeneralSubtree {
    constructor(
        /**
         * @summary `base`.
         * @public
         * @readonly
         */
        readonly base: GeneralName,
        /**
         * @summary `minimum`.
         * @public
         * @readonly
         */
        readonly minimum: OPTIONAL<BaseDistance>,
        /**
         * @summary `maximum`.
         * @public
         * @readonly
         */
        readonly maximum: OPTIONAL<BaseDistance>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a GeneralSubtree
     * @description
     *
     * This takes an `object` and converts it to a `GeneralSubtree`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GeneralSubtree`.
     * @returns {GeneralSubtree}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof GeneralSubtree]: GeneralSubtree[_K] }>
    ): GeneralSubtree {
        return new GeneralSubtree(
            _o.base,
            _o.minimum,
            _o.maximum,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `minimum`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_minimum() {
        return 0;
    }
}
/**
 * @summary The Leading Root Component Types of GeneralSubtree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GeneralSubtree: $.ComponentSpec[] = [
    new $.ComponentSpec("base", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "minimum",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "maximum",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of GeneralSubtree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GeneralSubtree: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of GeneralSubtree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GeneralSubtree: $.ComponentSpec[] = [];
let _cached_decoder_for_GeneralSubtree: $.ASN1Decoder<
    GeneralSubtree
> | null = null;
let _cached_encoder_for_GeneralSubtree: $.ASN1Encoder<
    GeneralSubtree
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralSubtree
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralSubtree} The decoded data structure.
 */
export function _decode_GeneralSubtree(el: _Element) {
    if (!_cached_decoder_for_GeneralSubtree) {
        _cached_decoder_for_GeneralSubtree = function (
            el: _Element
        ): GeneralSubtree {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let base!: GeneralName;
            let minimum: OPTIONAL<BaseDistance> =
                GeneralSubtree._default_value_for_minimum;
            let maximum: OPTIONAL<BaseDistance>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                base: (_el: _Element): void => {
                    base = _decode_GeneralName(_el);
                },
                minimum: (_el: _Element): void => {
                    minimum = $._decode_implicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
                maximum: (_el: _Element): void => {
                    maximum = $._decode_implicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_GeneralSubtree,
                _extension_additions_list_spec_for_GeneralSubtree,
                _root_component_type_list_2_spec_for_GeneralSubtree,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new GeneralSubtree(
                /* SEQUENCE_CONSTRUCTOR_CALL */ base,
                minimum,
                maximum,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_GeneralSubtree(el);
}
/**
 * @summary Encodes a(n) GeneralSubtree into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralSubtree, encoded as an ASN.1 Element.
 */
export function _encode_GeneralSubtree(
    value: GeneralSubtree,
    elGetter: $.ASN1Encoder<GeneralSubtree>
) {
    if (!_cached_encoder_for_GeneralSubtree) {
        _cached_encoder_for_GeneralSubtree = function (
            value: GeneralSubtree,
            elGetter: $.ASN1Encoder<GeneralSubtree>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_GeneralName(
                                value.base,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.minimum === undefined ||
                            $.deepEq(
                                value.minimum,
                                GeneralSubtree._default_value_for_minimum
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_BaseDistance,
                                      $.BER
                                  )(value.minimum, $.BER),
                            /* IF_ABSENT  */ value.maximum === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_BaseDistance,
                                      $.BER
                                  )(value.maximum, $.BER),
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
    return _cached_encoder_for_GeneralSubtree(value, elGetter);
}

export type GeneralSubtrees<> = GeneralSubtree[]; // SequenceOfType
let _cached_decoder_for_GeneralSubtrees: $.ASN1Decoder<
    GeneralSubtrees
> | null = null;
let _cached_encoder_for_GeneralSubtrees: $.ASN1Encoder<
    GeneralSubtrees
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralSubtrees
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralSubtrees} The decoded data structure.
 */
export function _decode_GeneralSubtrees(el: _Element) {
    if (!_cached_decoder_for_GeneralSubtrees) {
        _cached_decoder_for_GeneralSubtrees = $._decodeSequenceOf<
            GeneralSubtree
        >(() => _decode_GeneralSubtree);
    }
    return _cached_decoder_for_GeneralSubtrees(el);
}
/**
 * @summary Encodes a(n) GeneralSubtrees into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralSubtrees, encoded as an ASN.1 Element.
 */
export function _encode_GeneralSubtrees(
    value: GeneralSubtrees,
    elGetter: $.ASN1Encoder<GeneralSubtrees>
) {
    if (!_cached_encoder_for_GeneralSubtrees) {
        _cached_encoder_for_GeneralSubtrees = $._encodeSequenceOf<
            GeneralSubtree
        >(() => _encode_GeneralSubtree, $.BER);
    }
    return _cached_encoder_for_GeneralSubtrees(value, elGetter);
}

/**
 * @summary NameConstraintsSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameConstraintsSyntax ::= SEQUENCE {
 *   permittedSubtrees  [0]  GeneralSubtrees OPTIONAL,
 *   excludedSubtrees   [1]  GeneralSubtrees OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS {..., permittedSubtrees  PRESENT } |
 *    WITH COMPONENTS {..., excludedSubtrees   PRESENT } )
 * ```
 *
 * @class
 */
export class NameConstraintsSyntax {
    constructor(
        /**
         * @summary `permittedSubtrees`.
         * @public
         * @readonly
         */
        readonly permittedSubtrees: OPTIONAL<GeneralSubtrees>,
        /**
         * @summary `excludedSubtrees`.
         * @public
         * @readonly
         */
        readonly excludedSubtrees: OPTIONAL<GeneralSubtrees>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NameConstraintsSyntax
     * @description
     *
     * This takes an `object` and converts it to a `NameConstraintsSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NameConstraintsSyntax`.
     * @returns {NameConstraintsSyntax}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof NameConstraintsSyntax]: NameConstraintsSyntax[_K] }
        >
    ): NameConstraintsSyntax {
        return new NameConstraintsSyntax(
            _o.permittedSubtrees,
            _o.excludedSubtrees,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of NameConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NameConstraintsSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "permittedSubtrees",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "excludedSubtrees",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of NameConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NameConstraintsSyntax: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of NameConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NameConstraintsSyntax: $.ComponentSpec[] = [];
let _cached_decoder_for_NameConstraintsSyntax: $.ASN1Decoder<
    NameConstraintsSyntax
> | null = null;
let _cached_encoder_for_NameConstraintsSyntax: $.ASN1Encoder<
    NameConstraintsSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) NameConstraintsSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameConstraintsSyntax} The decoded data structure.
 */
export function _decode_NameConstraintsSyntax(el: _Element) {
    if (!_cached_decoder_for_NameConstraintsSyntax) {
        _cached_decoder_for_NameConstraintsSyntax = function (
            el: _Element
        ): NameConstraintsSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let permittedSubtrees: OPTIONAL<GeneralSubtrees>;
            let excludedSubtrees: OPTIONAL<GeneralSubtrees>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                permittedSubtrees: (_el: _Element): void => {
                    permittedSubtrees = $._decode_implicit<GeneralSubtrees>(
                        () => _decode_GeneralSubtrees
                    )(_el);
                },
                excludedSubtrees: (_el: _Element): void => {
                    excludedSubtrees = $._decode_implicit<GeneralSubtrees>(
                        () => _decode_GeneralSubtrees
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NameConstraintsSyntax,
                _extension_additions_list_spec_for_NameConstraintsSyntax,
                _root_component_type_list_2_spec_for_NameConstraintsSyntax,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new NameConstraintsSyntax(
                /* SEQUENCE_CONSTRUCTOR_CALL */ permittedSubtrees,
                excludedSubtrees,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_NameConstraintsSyntax(el);
}
/**
 * @summary Encodes a(n) NameConstraintsSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameConstraintsSyntax, encoded as an ASN.1 Element.
 */
export function _encode_NameConstraintsSyntax(
    value: NameConstraintsSyntax,
    elGetter: $.ASN1Encoder<NameConstraintsSyntax>
) {
    if (!_cached_encoder_for_NameConstraintsSyntax) {
        _cached_encoder_for_NameConstraintsSyntax = function (
            value: NameConstraintsSyntax,
            elGetter: $.ASN1Encoder<NameConstraintsSyntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.permittedSubtrees ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_GeneralSubtrees,
                                      $.BER
                                  )(value.permittedSubtrees, $.BER),
                            /* IF_ABSENT  */ value.excludedSubtrees ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_GeneralSubtrees,
                                      $.BER
                                  )(value.excludedSubtrees, $.BER),
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
    return _cached_encoder_for_NameConstraintsSyntax(value, elGetter);
}

/**
 * @summary id_ce_nameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-nameConstraints                    OBJECT IDENTIFIER ::= {id-ce 30}
 * ```
 *
 * @constant
 */
export const id_ce_nameConstraints: OBJECT_IDENTIFIER = new _OID([30], id_ce);

/**
 * @summary nameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nameConstraints EXTENSION ::= {
 *   SYNTAX         NameConstraintsSyntax
 *   IDENTIFIED BY  id-ce-nameConstraints }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const nameConstraints: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_NameConstraintsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_NameConstraintsSyntax,
    },
    "&id": id_ce_nameConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary SkipCerts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SkipCerts  ::=  INTEGER(0..MAX)
 * ```
 */
export type SkipCerts = INTEGER;
let _cached_decoder_for_SkipCerts: $.ASN1Decoder<SkipCerts> | null = null;
let _cached_encoder_for_SkipCerts: $.ASN1Encoder<SkipCerts> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SkipCerts
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SkipCerts} The decoded data structure.
 */
export function _decode_SkipCerts(el: _Element) {
    if (!_cached_decoder_for_SkipCerts) {
        _cached_decoder_for_SkipCerts = $._decodeInteger;
    }
    return _cached_decoder_for_SkipCerts(el);
}
/**
 * @summary Encodes a(n) SkipCerts into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SkipCerts, encoded as an ASN.1 Element.
 */
export function _encode_SkipCerts(
    value: SkipCerts,
    elGetter: $.ASN1Encoder<SkipCerts>
) {
    if (!_cached_encoder_for_SkipCerts) {
        _cached_encoder_for_SkipCerts = $._encodeInteger;
    }
    return _cached_encoder_for_SkipCerts(value, elGetter);
}

/**
 * @summary PolicyConstraintsSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PolicyConstraintsSyntax ::= SEQUENCE {
 *   requireExplicitPolicy  [0]  SkipCerts OPTIONAL,
 *   inhibitPolicyMapping   [1]  SkipCerts OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS {..., requireExplicitPolicy PRESENT } |
 *    WITH COMPONENTS {..., inhibitPolicyMapping  PRESENT } )
 * ```
 *
 * @class
 */
export class PolicyConstraintsSyntax {
    constructor(
        /**
         * @summary `requireExplicitPolicy`.
         * @public
         * @readonly
         */
        readonly requireExplicitPolicy: OPTIONAL<SkipCerts>,
        /**
         * @summary `inhibitPolicyMapping`.
         * @public
         * @readonly
         */
        readonly inhibitPolicyMapping: OPTIONAL<SkipCerts>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PolicyConstraintsSyntax
     * @description
     *
     * This takes an `object` and converts it to a `PolicyConstraintsSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PolicyConstraintsSyntax`.
     * @returns {PolicyConstraintsSyntax}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof PolicyConstraintsSyntax]: PolicyConstraintsSyntax[_K];
            }
        >
    ): PolicyConstraintsSyntax {
        return new PolicyConstraintsSyntax(
            _o.requireExplicitPolicy,
            _o.inhibitPolicyMapping,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of PolicyConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PolicyConstraintsSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "requireExplicitPolicy",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "inhibitPolicyMapping",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of PolicyConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PolicyConstraintsSyntax: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of PolicyConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PolicyConstraintsSyntax: $.ComponentSpec[] = [];
let _cached_decoder_for_PolicyConstraintsSyntax: $.ASN1Decoder<
    PolicyConstraintsSyntax
> | null = null;
let _cached_encoder_for_PolicyConstraintsSyntax: $.ASN1Encoder<
    PolicyConstraintsSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PolicyConstraintsSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PolicyConstraintsSyntax} The decoded data structure.
 */
export function _decode_PolicyConstraintsSyntax(el: _Element) {
    if (!_cached_decoder_for_PolicyConstraintsSyntax) {
        _cached_decoder_for_PolicyConstraintsSyntax = function (
            el: _Element
        ): PolicyConstraintsSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let requireExplicitPolicy: OPTIONAL<SkipCerts>;
            let inhibitPolicyMapping: OPTIONAL<SkipCerts>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                requireExplicitPolicy: (_el: _Element): void => {
                    requireExplicitPolicy = $._decode_implicit<SkipCerts>(
                        () => _decode_SkipCerts
                    )(_el);
                },
                inhibitPolicyMapping: (_el: _Element): void => {
                    inhibitPolicyMapping = $._decode_implicit<SkipCerts>(
                        () => _decode_SkipCerts
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PolicyConstraintsSyntax,
                _extension_additions_list_spec_for_PolicyConstraintsSyntax,
                _root_component_type_list_2_spec_for_PolicyConstraintsSyntax,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PolicyConstraintsSyntax(
                /* SEQUENCE_CONSTRUCTOR_CALL */ requireExplicitPolicy,
                inhibitPolicyMapping,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PolicyConstraintsSyntax(el);
}
/**
 * @summary Encodes a(n) PolicyConstraintsSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyConstraintsSyntax, encoded as an ASN.1 Element.
 */
export function _encode_PolicyConstraintsSyntax(
    value: PolicyConstraintsSyntax,
    elGetter: $.ASN1Encoder<PolicyConstraintsSyntax>
) {
    if (!_cached_encoder_for_PolicyConstraintsSyntax) {
        _cached_encoder_for_PolicyConstraintsSyntax = function (
            value: PolicyConstraintsSyntax,
            elGetter: $.ASN1Encoder<PolicyConstraintsSyntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.requireExplicitPolicy ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_SkipCerts,
                                      $.BER
                                  )(value.requireExplicitPolicy, $.BER),
                            /* IF_ABSENT  */ value.inhibitPolicyMapping ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_SkipCerts,
                                      $.BER
                                  )(value.inhibitPolicyMapping, $.BER),
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
    return _cached_encoder_for_PolicyConstraintsSyntax(value, elGetter);
}

/**
 * @summary id_ce_policyConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-policyConstraints                  OBJECT IDENTIFIER ::= {id-ce 36}
 * ```
 *
 * @constant
 */
export const id_ce_policyConstraints: OBJECT_IDENTIFIER = new _OID([36], id_ce);

/**
 * @summary policyConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * policyConstraints EXTENSION ::= {
 *   SYNTAX         PolicyConstraintsSyntax
 *   IDENTIFIED BY  id-ce-policyConstraints }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const policyConstraints: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_PolicyConstraintsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_PolicyConstraintsSyntax,
    },
    "&id": id_ce_policyConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_inhibitAnyPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-inhibitAnyPolicy                   OBJECT IDENTIFIER ::= {id-ce 54}
 * ```
 *
 * @constant
 */
export const id_ce_inhibitAnyPolicy: OBJECT_IDENTIFIER = new _OID([54], id_ce);

/**
 * @summary inhibitAnyPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * inhibitAnyPolicy EXTENSION ::= {
 *   SYNTAX         SkipCerts
 *   IDENTIFIED BY  id-ce-inhibitAnyPolicy }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const inhibitAnyPolicy: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_SkipCerts,
    },
    encoderFor: {
        "&ExtnType": _encode_SkipCerts,
    },
    "&id": id_ce_inhibitAnyPolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary CRLNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLNumber  ::=  INTEGER(0..MAX)
 * ```
 */
export type CRLNumber = INTEGER;
let _cached_decoder_for_CRLNumber: $.ASN1Decoder<CRLNumber> | null = null;
let _cached_encoder_for_CRLNumber: $.ASN1Encoder<CRLNumber> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CRLNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CRLNumber} The decoded data structure.
 */
export function _decode_CRLNumber(el: _Element) {
    if (!_cached_decoder_for_CRLNumber) {
        _cached_decoder_for_CRLNumber = $._decodeInteger;
    }
    return _cached_decoder_for_CRLNumber(el);
}
/**
 * @summary Encodes a(n) CRLNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLNumber, encoded as an ASN.1 Element.
 */
export function _encode_CRLNumber(
    value: CRLNumber,
    elGetter: $.ASN1Encoder<CRLNumber>
) {
    if (!_cached_encoder_for_CRLNumber) {
        _cached_encoder_for_CRLNumber = $._encodeInteger;
    }
    return _cached_encoder_for_CRLNumber(value, elGetter);
}

/**
 * @summary id_ce_cRLNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-cRLNumber                          OBJECT IDENTIFIER ::= {id-ce 20}
 * ```
 *
 * @constant
 */
export const id_ce_cRLNumber: OBJECT_IDENTIFIER = new _OID([20], id_ce);

/**
 * @summary cRLNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cRLNumber EXTENSION ::= {
 *   SYNTAX         CRLNumber
 *   IDENTIFIED BY  id-ce-cRLNumber }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const cRLNumber: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CRLNumber,
    },
    encoderFor: {
        "&ExtnType": _encode_CRLNumber,
    },
    "&id": id_ce_cRLNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary DistributionPointName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DistributionPointName  ::=  CHOICE {
 *   fullName                 [0]  GeneralNames,
 *   nameRelativeToCRLIssuer  [1]  RelativeDistinguishedName,
 *   ... }
 * ```
 */
export type DistributionPointName =
    | { fullName: GeneralNames } /* CHOICE_ALT_ROOT */
    | {
          nameRelativeToCRLIssuer: RelativeDistinguishedName;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_DistributionPointName: $.ASN1Decoder<
    DistributionPointName
> | null = null;
let _cached_encoder_for_DistributionPointName: $.ASN1Encoder<
    DistributionPointName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DistributionPointName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DistributionPointName} The decoded data structure.
 */
export function _decode_DistributionPointName(el: _Element) {
    if (!_cached_decoder_for_DistributionPointName) {
        _cached_decoder_for_DistributionPointName = $._decode_extensible_choice<
            DistributionPointName
        >({
            "CONTEXT 0": [
                "fullName",
                $._decode_implicit<GeneralNames>(() => _decode_GeneralNames),
            ],
            "CONTEXT 1": [
                "nameRelativeToCRLIssuer",
                $._decode_implicit<RelativeDistinguishedName>(
                    () => _decode_RelativeDistinguishedName
                ),
            ],
        });
    }
    return _cached_decoder_for_DistributionPointName(el);
}
/**
 * @summary Encodes a(n) DistributionPointName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistributionPointName, encoded as an ASN.1 Element.
 */
export function _encode_DistributionPointName(
    value: DistributionPointName,
    elGetter: $.ASN1Encoder<DistributionPointName>
) {
    if (!_cached_encoder_for_DistributionPointName) {
        _cached_encoder_for_DistributionPointName = $._encode_choice<
            DistributionPointName
        >(
            {
                fullName: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_GeneralNames,
                    $.BER
                ),
                nameRelativeToCRLIssuer: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_RelativeDistinguishedName,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DistributionPointName(value, elGetter);
}

/**
 * @summary OnlyCertificateTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OnlyCertificateTypes  ::=  BIT STRING {
 *   user      (0),
 *   authority (1),
 *   attribute (2)}
 * ```
 */
export type OnlyCertificateTypes = BIT_STRING;
/**
 * @summary OnlyCertificateTypes_user
 * @constant
 */
export const OnlyCertificateTypes_user: number = 0; /* LONG_NAMED_BIT */
/**
 * @summary OnlyCertificateTypes_authority
 * @constant
 */
export const OnlyCertificateTypes_authority: number = 1; /* LONG_NAMED_BIT */
/**
 * @summary OnlyCertificateTypes_attribute
 * @constant
 */
export const OnlyCertificateTypes_attribute: number = 2; /* LONG_NAMED_BIT */
let _cached_decoder_for_OnlyCertificateTypes: $.ASN1Decoder<
    OnlyCertificateTypes
> | null = null;
let _cached_encoder_for_OnlyCertificateTypes: $.ASN1Encoder<
    OnlyCertificateTypes
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OnlyCertificateTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OnlyCertificateTypes} The decoded data structure.
 */
export function _decode_OnlyCertificateTypes(el: _Element) {
    if (!_cached_decoder_for_OnlyCertificateTypes) {
        _cached_decoder_for_OnlyCertificateTypes = $._decodeBitString;
    }
    return _cached_decoder_for_OnlyCertificateTypes(el);
}
/**
 * @summary Encodes a(n) OnlyCertificateTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OnlyCertificateTypes, encoded as an ASN.1 Element.
 */
export function _encode_OnlyCertificateTypes(
    value: OnlyCertificateTypes,
    elGetter: $.ASN1Encoder<OnlyCertificateTypes>
) {
    if (!_cached_encoder_for_OnlyCertificateTypes) {
        _cached_encoder_for_OnlyCertificateTypes = $._encodeBitString;
    }
    return _cached_encoder_for_OnlyCertificateTypes(value, elGetter);
}

/**
 * @summary ReasonFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReasonFlags  ::=  BIT STRING {
 *   unused                (0),
 *   keyCompromise         (1),
 *   cACompromise          (2),
 *   affiliationChanged    (3),
 *   superseded            (4),
 *   cessationOfOperation  (5),
 *   certificateHold       (6),
 *   privilegeWithdrawn    (7),
 *   aACompromise          (8),
 *   weakAlgorithmOrKey    (9) }
 * ```
 */
export type ReasonFlags = BIT_STRING;
/**
 * @summary ReasonFlags_unused
 * @constant
 */
export const ReasonFlags_unused: number = 0; /* LONG_NAMED_BIT */
/**
 * @summary ReasonFlags_keyCompromise
 * @constant
 */
export const ReasonFlags_keyCompromise: number = 1; /* LONG_NAMED_BIT */
/**
 * @summary ReasonFlags_cACompromise
 * @constant
 */
export const ReasonFlags_cACompromise: number = 2; /* LONG_NAMED_BIT */
/**
 * @summary ReasonFlags_affiliationChanged
 * @constant
 */
export const ReasonFlags_affiliationChanged: number = 3; /* LONG_NAMED_BIT */
/**
 * @summary ReasonFlags_superseded
 * @constant
 */
export const ReasonFlags_superseded: number = 4; /* LONG_NAMED_BIT */
/**
 * @summary ReasonFlags_cessationOfOperation
 * @constant
 */
export const ReasonFlags_cessationOfOperation: number = 5; /* LONG_NAMED_BIT */
/**
 * @summary ReasonFlags_certificateHold
 * @constant
 */
export const ReasonFlags_certificateHold: number = 6; /* LONG_NAMED_BIT */
/**
 * @summary ReasonFlags_privilegeWithdrawn
 * @constant
 */
export const ReasonFlags_privilegeWithdrawn: number = 7; /* LONG_NAMED_BIT */
/**
 * @summary ReasonFlags_aACompromise
 * @constant
 */
export const ReasonFlags_aACompromise: number = 8; /* LONG_NAMED_BIT */
/**
 * @summary ReasonFlags_weakAlgorithmOrKey
 * @constant
 */
export const ReasonFlags_weakAlgorithmOrKey: number = 9; /* LONG_NAMED_BIT */
let _cached_decoder_for_ReasonFlags: $.ASN1Decoder<ReasonFlags> | null = null;
let _cached_encoder_for_ReasonFlags: $.ASN1Encoder<ReasonFlags> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ReasonFlags
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReasonFlags} The decoded data structure.
 */
export function _decode_ReasonFlags(el: _Element) {
    if (!_cached_decoder_for_ReasonFlags) {
        _cached_decoder_for_ReasonFlags = $._decodeBitString;
    }
    return _cached_decoder_for_ReasonFlags(el);
}
/**
 * @summary Encodes a(n) ReasonFlags into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReasonFlags, encoded as an ASN.1 Element.
 */
export function _encode_ReasonFlags(
    value: ReasonFlags,
    elGetter: $.ASN1Encoder<ReasonFlags>
) {
    if (!_cached_encoder_for_ReasonFlags) {
        _cached_encoder_for_ReasonFlags = $._encodeBitString;
    }
    return _cached_encoder_for_ReasonFlags(value, elGetter);
}

/**
 * @summary NumberRange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NumberRange ::= SEQUENCE {
 *   startingNumber  [0]  INTEGER OPTIONAL,
 *   endingNumber    [1]  INTEGER OPTIONAL,
 *   modulus              INTEGER OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class NumberRange {
    constructor(
        /**
         * @summary `startingNumber`.
         * @public
         * @readonly
         */
        readonly startingNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `endingNumber`.
         * @public
         * @readonly
         */
        readonly endingNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `modulus`.
         * @public
         * @readonly
         */
        readonly modulus: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NumberRange
     * @description
     *
     * This takes an `object` and converts it to a `NumberRange`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NumberRange`.
     * @returns {NumberRange}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof NumberRange]: NumberRange[_K] }>
    ): NumberRange {
        return new NumberRange(
            _o.startingNumber,
            _o.endingNumber,
            _o.modulus,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of NumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NumberRange: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "startingNumber",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "endingNumber",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "modulus",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of NumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NumberRange: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of NumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NumberRange: $.ComponentSpec[] = [];
let _cached_decoder_for_NumberRange: $.ASN1Decoder<NumberRange> | null = null;
let _cached_encoder_for_NumberRange: $.ASN1Encoder<NumberRange> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) NumberRange
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumberRange} The decoded data structure.
 */
export function _decode_NumberRange(el: _Element) {
    if (!_cached_decoder_for_NumberRange) {
        _cached_decoder_for_NumberRange = function (el: _Element): NumberRange {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let startingNumber: OPTIONAL<INTEGER>;
            let endingNumber: OPTIONAL<INTEGER>;
            let modulus: OPTIONAL<INTEGER>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                startingNumber: (_el: _Element): void => {
                    startingNumber = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                endingNumber: (_el: _Element): void => {
                    endingNumber = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                modulus: (_el: _Element): void => {
                    modulus = $._decodeInteger(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NumberRange,
                _extension_additions_list_spec_for_NumberRange,
                _root_component_type_list_2_spec_for_NumberRange,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new NumberRange(
                /* SEQUENCE_CONSTRUCTOR_CALL */ startingNumber,
                endingNumber,
                modulus,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_NumberRange(el);
}
/**
 * @summary Encodes a(n) NumberRange into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberRange, encoded as an ASN.1 Element.
 */
export function _encode_NumberRange(
    value: NumberRange,
    elGetter: $.ASN1Encoder<NumberRange>
) {
    if (!_cached_encoder_for_NumberRange) {
        _cached_encoder_for_NumberRange = function (
            value: NumberRange,
            elGetter: $.ASN1Encoder<NumberRange>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.startingNumber === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.startingNumber, $.BER),
                            /* IF_ABSENT  */ value.endingNumber === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.endingNumber, $.BER),
                            /* IF_ABSENT  */ value.modulus === undefined
                                ? undefined
                                : $._encodeInteger(value.modulus, $.BER),
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
    return _cached_encoder_for_NumberRange(value, elGetter);
}

/**
 * @summary CRLStreamIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLStreamIdentifier  ::=  INTEGER (0..MAX)
 * ```
 */
export type CRLStreamIdentifier = INTEGER;
let _cached_decoder_for_CRLStreamIdentifier: $.ASN1Decoder<
    CRLStreamIdentifier
> | null = null;
let _cached_encoder_for_CRLStreamIdentifier: $.ASN1Encoder<
    CRLStreamIdentifier
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CRLStreamIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CRLStreamIdentifier} The decoded data structure.
 */
export function _decode_CRLStreamIdentifier(el: _Element) {
    if (!_cached_decoder_for_CRLStreamIdentifier) {
        _cached_decoder_for_CRLStreamIdentifier = $._decodeInteger;
    }
    return _cached_decoder_for_CRLStreamIdentifier(el);
}
/**
 * @summary Encodes a(n) CRLStreamIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLStreamIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_CRLStreamIdentifier(
    value: CRLStreamIdentifier,
    elGetter: $.ASN1Encoder<CRLStreamIdentifier>
) {
    if (!_cached_encoder_for_CRLStreamIdentifier) {
        _cached_encoder_for_CRLStreamIdentifier = $._encodeInteger;
    }
    return _cached_encoder_for_CRLStreamIdentifier(value, elGetter);
}

/**
 * @summary BaseRevocationInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BaseRevocationInfo ::= SEQUENCE {
 *   cRLStreamIdentifier  [0]  CRLStreamIdentifier OPTIONAL,
 *   cRLNumber            [1]  CRLNumber,
 *   baseThisUpdate       [2]  GeneralizedTime,
 *   ... }
 * ```
 *
 * @class
 */
export class BaseRevocationInfo {
    constructor(
        /**
         * @summary `cRLStreamIdentifier`.
         * @public
         * @readonly
         */
        readonly cRLStreamIdentifier: OPTIONAL<CRLStreamIdentifier>,
        /**
         * @summary `cRLNumber`.
         * @public
         * @readonly
         */
        readonly cRLNumber: CRLNumber,
        /**
         * @summary `baseThisUpdate`.
         * @public
         * @readonly
         */
        readonly baseThisUpdate: GeneralizedTime,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a BaseRevocationInfo
     * @description
     *
     * This takes an `object` and converts it to a `BaseRevocationInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BaseRevocationInfo`.
     * @returns {BaseRevocationInfo}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof BaseRevocationInfo]: BaseRevocationInfo[_K] }
        >
    ): BaseRevocationInfo {
        return new BaseRevocationInfo(
            _o.cRLStreamIdentifier,
            _o.cRLNumber,
            _o.baseThisUpdate,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of BaseRevocationInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BaseRevocationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "cRLStreamIdentifier",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "cRLNumber",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "baseThisUpdate",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of BaseRevocationInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BaseRevocationInfo: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of BaseRevocationInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BaseRevocationInfo: $.ComponentSpec[] = [];
let _cached_decoder_for_BaseRevocationInfo: $.ASN1Decoder<
    BaseRevocationInfo
> | null = null;
let _cached_encoder_for_BaseRevocationInfo: $.ASN1Encoder<
    BaseRevocationInfo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) BaseRevocationInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BaseRevocationInfo} The decoded data structure.
 */
export function _decode_BaseRevocationInfo(el: _Element) {
    if (!_cached_decoder_for_BaseRevocationInfo) {
        _cached_decoder_for_BaseRevocationInfo = function (
            el: _Element
        ): BaseRevocationInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let cRLStreamIdentifier: OPTIONAL<CRLStreamIdentifier>;
            let cRLNumber!: CRLNumber;
            let baseThisUpdate!: GeneralizedTime;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                cRLStreamIdentifier: (_el: _Element): void => {
                    cRLStreamIdentifier = $._decode_implicit<
                        CRLStreamIdentifier
                    >(() => _decode_CRLStreamIdentifier)(_el);
                },
                cRLNumber: (_el: _Element): void => {
                    cRLNumber = $._decode_implicit<CRLNumber>(
                        () => _decode_CRLNumber
                    )(_el);
                },
                baseThisUpdate: (_el: _Element): void => {
                    baseThisUpdate = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BaseRevocationInfo,
                _extension_additions_list_spec_for_BaseRevocationInfo,
                _root_component_type_list_2_spec_for_BaseRevocationInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new BaseRevocationInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ cRLStreamIdentifier,
                cRLNumber,
                baseThisUpdate,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_BaseRevocationInfo(el);
}
/**
 * @summary Encodes a(n) BaseRevocationInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BaseRevocationInfo, encoded as an ASN.1 Element.
 */
export function _encode_BaseRevocationInfo(
    value: BaseRevocationInfo,
    elGetter: $.ASN1Encoder<BaseRevocationInfo>
) {
    if (!_cached_encoder_for_BaseRevocationInfo) {
        _cached_encoder_for_BaseRevocationInfo = function (
            value: BaseRevocationInfo,
            elGetter: $.ASN1Encoder<BaseRevocationInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.cRLStreamIdentifier ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_CRLStreamIdentifier,
                                      $.BER
                                  )(value.cRLStreamIdentifier, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () => _encode_CRLNumber,
                                $.BER
                            )(value.cRLNumber, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                2,
                                () => $._encodeGeneralizedTime,
                                $.BER
                            )(value.baseThisUpdate, $.BER),
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
    return _cached_encoder_for_BaseRevocationInfo(value, elGetter);
}

/**
 * @summary PerAuthorityScope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerAuthorityScope ::= SEQUENCE {
 *   authorityName       [0]  GeneralName OPTIONAL,
 *   distributionPoint   [1]  DistributionPointName OPTIONAL,
 *   onlyContains        [2]  OnlyCertificateTypes OPTIONAL,
 *   onlySomeReasons     [4]  ReasonFlags OPTIONAL,
 *   serialNumberRange   [5]  NumberRange OPTIONAL,
 *   subjectKeyIdRange   [6]  NumberRange OPTIONAL,
 *   nameSubtrees        [7]  GeneralNames OPTIONAL,
 *   baseRevocationInfo  [9]  BaseRevocationInfo OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class PerAuthorityScope {
    constructor(
        /**
         * @summary `authorityName`.
         * @public
         * @readonly
         */
        readonly authorityName: OPTIONAL<GeneralName>,
        /**
         * @summary `distributionPoint`.
         * @public
         * @readonly
         */
        readonly distributionPoint: OPTIONAL<DistributionPointName>,
        /**
         * @summary `onlyContains`.
         * @public
         * @readonly
         */
        readonly onlyContains: OPTIONAL<OnlyCertificateTypes>,
        /**
         * @summary `onlySomeReasons`.
         * @public
         * @readonly
         */
        readonly onlySomeReasons: OPTIONAL<ReasonFlags>,
        /**
         * @summary `serialNumberRange`.
         * @public
         * @readonly
         */
        readonly serialNumberRange: OPTIONAL<NumberRange>,
        /**
         * @summary `subjectKeyIdRange`.
         * @public
         * @readonly
         */
        readonly subjectKeyIdRange: OPTIONAL<NumberRange>,
        /**
         * @summary `nameSubtrees`.
         * @public
         * @readonly
         */
        readonly nameSubtrees: OPTIONAL<GeneralNames>,
        /**
         * @summary `baseRevocationInfo`.
         * @public
         * @readonly
         */
        readonly baseRevocationInfo: OPTIONAL<BaseRevocationInfo>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PerAuthorityScope
     * @description
     *
     * This takes an `object` and converts it to a `PerAuthorityScope`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerAuthorityScope`.
     * @returns {PerAuthorityScope}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof PerAuthorityScope]: PerAuthorityScope[_K] }>
    ): PerAuthorityScope {
        return new PerAuthorityScope(
            _o.authorityName,
            _o.distributionPoint,
            _o.onlyContains,
            _o.onlySomeReasons,
            _o.serialNumberRange,
            _o.subjectKeyIdRange,
            _o.nameSubtrees,
            _o.baseRevocationInfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of PerAuthorityScope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PerAuthorityScope: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "authorityName",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "distributionPoint",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "onlyContains",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "onlySomeReasons",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "serialNumberRange",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subjectKeyIdRange",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nameSubtrees",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "baseRevocationInfo",
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of PerAuthorityScope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerAuthorityScope: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of PerAuthorityScope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerAuthorityScope: $.ComponentSpec[] = [];
let _cached_decoder_for_PerAuthorityScope: $.ASN1Decoder<
    PerAuthorityScope
> | null = null;
let _cached_encoder_for_PerAuthorityScope: $.ASN1Encoder<
    PerAuthorityScope
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PerAuthorityScope
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerAuthorityScope} The decoded data structure.
 */
export function _decode_PerAuthorityScope(el: _Element) {
    if (!_cached_decoder_for_PerAuthorityScope) {
        _cached_decoder_for_PerAuthorityScope = function (
            el: _Element
        ): PerAuthorityScope {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let authorityName: OPTIONAL<GeneralName>;
            let distributionPoint: OPTIONAL<DistributionPointName>;
            let onlyContains: OPTIONAL<OnlyCertificateTypes>;
            let onlySomeReasons: OPTIONAL<ReasonFlags>;
            let serialNumberRange: OPTIONAL<NumberRange>;
            let subjectKeyIdRange: OPTIONAL<NumberRange>;
            let nameSubtrees: OPTIONAL<GeneralNames>;
            let baseRevocationInfo: OPTIONAL<BaseRevocationInfo>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                authorityName: (_el: _Element): void => {
                    authorityName = $._decode_implicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                distributionPoint: (_el: _Element): void => {
                    distributionPoint = $._decode_implicit<
                        DistributionPointName
                    >(() => _decode_DistributionPointName)(_el);
                },
                onlyContains: (_el: _Element): void => {
                    onlyContains = $._decode_implicit<OnlyCertificateTypes>(
                        () => _decode_OnlyCertificateTypes
                    )(_el);
                },
                onlySomeReasons: (_el: _Element): void => {
                    onlySomeReasons = $._decode_implicit<ReasonFlags>(
                        () => _decode_ReasonFlags
                    )(_el);
                },
                serialNumberRange: (_el: _Element): void => {
                    serialNumberRange = $._decode_implicit<NumberRange>(
                        () => _decode_NumberRange
                    )(_el);
                },
                subjectKeyIdRange: (_el: _Element): void => {
                    subjectKeyIdRange = $._decode_implicit<NumberRange>(
                        () => _decode_NumberRange
                    )(_el);
                },
                nameSubtrees: (_el: _Element): void => {
                    nameSubtrees = $._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    )(_el);
                },
                baseRevocationInfo: (_el: _Element): void => {
                    baseRevocationInfo = $._decode_implicit<BaseRevocationInfo>(
                        () => _decode_BaseRevocationInfo
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PerAuthorityScope,
                _extension_additions_list_spec_for_PerAuthorityScope,
                _root_component_type_list_2_spec_for_PerAuthorityScope,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PerAuthorityScope(
                /* SEQUENCE_CONSTRUCTOR_CALL */ authorityName,
                distributionPoint,
                onlyContains,
                onlySomeReasons,
                serialNumberRange,
                subjectKeyIdRange,
                nameSubtrees,
                baseRevocationInfo,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PerAuthorityScope(el);
}
/**
 * @summary Encodes a(n) PerAuthorityScope into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerAuthorityScope, encoded as an ASN.1 Element.
 */
export function _encode_PerAuthorityScope(
    value: PerAuthorityScope,
    elGetter: $.ASN1Encoder<PerAuthorityScope>
) {
    if (!_cached_encoder_for_PerAuthorityScope) {
        _cached_encoder_for_PerAuthorityScope = function (
            value: PerAuthorityScope,
            elGetter: $.ASN1Encoder<PerAuthorityScope>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.authorityName === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      $.BER
                                  )(value.authorityName, $.BER),
                            /* IF_ABSENT  */ value.distributionPoint ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_DistributionPointName,
                                      $.BER
                                  )(value.distributionPoint, $.BER),
                            /* IF_ABSENT  */ value.onlyContains === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_OnlyCertificateTypes,
                                      $.BER
                                  )(value.onlyContains, $.BER),
                            /* IF_ABSENT  */ value.onlySomeReasons === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_ReasonFlags,
                                      $.BER
                                  )(value.onlySomeReasons, $.BER),
                            /* IF_ABSENT  */ value.serialNumberRange ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      5,
                                      () => _encode_NumberRange,
                                      $.BER
                                  )(value.serialNumberRange, $.BER),
                            /* IF_ABSENT  */ value.subjectKeyIdRange ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      6,
                                      () => _encode_NumberRange,
                                      $.BER
                                  )(value.subjectKeyIdRange, $.BER),
                            /* IF_ABSENT  */ value.nameSubtrees === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_GeneralNames,
                                      $.BER
                                  )(value.nameSubtrees, $.BER),
                            /* IF_ABSENT  */ value.baseRevocationInfo ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      9,
                                      () => _encode_BaseRevocationInfo,
                                      $.BER
                                  )(value.baseRevocationInfo, $.BER),
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
    return _cached_encoder_for_PerAuthorityScope(value, elGetter);
}

export type CRLScopeSyntax<> = PerAuthorityScope[]; // SequenceOfType
let _cached_decoder_for_CRLScopeSyntax: $.ASN1Decoder<
    CRLScopeSyntax
> | null = null;
let _cached_encoder_for_CRLScopeSyntax: $.ASN1Encoder<
    CRLScopeSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CRLScopeSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CRLScopeSyntax} The decoded data structure.
 */
export function _decode_CRLScopeSyntax(el: _Element) {
    if (!_cached_decoder_for_CRLScopeSyntax) {
        _cached_decoder_for_CRLScopeSyntax = $._decodeSequenceOf<
            PerAuthorityScope
        >(() => _decode_PerAuthorityScope);
    }
    return _cached_decoder_for_CRLScopeSyntax(el);
}
/**
 * @summary Encodes a(n) CRLScopeSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLScopeSyntax, encoded as an ASN.1 Element.
 */
export function _encode_CRLScopeSyntax(
    value: CRLScopeSyntax,
    elGetter: $.ASN1Encoder<CRLScopeSyntax>
) {
    if (!_cached_encoder_for_CRLScopeSyntax) {
        _cached_encoder_for_CRLScopeSyntax = $._encodeSequenceOf<
            PerAuthorityScope
        >(() => _encode_PerAuthorityScope, $.BER);
    }
    return _cached_encoder_for_CRLScopeSyntax(value, elGetter);
}

/**
 * @summary id_ce_cRLScope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-cRLScope                           OBJECT IDENTIFIER ::= {id-ce 44}
 * ```
 *
 * @constant
 */
export const id_ce_cRLScope: OBJECT_IDENTIFIER = new _OID([44], id_ce);

/**
 * @summary crlScope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * crlScope EXTENSION ::= {
 *   SYNTAX         CRLScopeSyntax
 *   IDENTIFIED BY  id-ce-cRLScope }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const crlScope: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CRLScopeSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_CRLScopeSyntax,
    },
    "&id": id_ce_cRLScope /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary DeltaRefInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeltaRefInfo ::= SEQUENCE {
 *   deltaLocation  GeneralName,
 *   lastDelta      GeneralizedTime OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class DeltaRefInfo {
    constructor(
        /**
         * @summary `deltaLocation`.
         * @public
         * @readonly
         */
        readonly deltaLocation: GeneralName,
        /**
         * @summary `lastDelta`.
         * @public
         * @readonly
         */
        readonly lastDelta: OPTIONAL<GeneralizedTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DeltaRefInfo
     * @description
     *
     * This takes an `object` and converts it to a `DeltaRefInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeltaRefInfo`.
     * @returns {DeltaRefInfo}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DeltaRefInfo]: DeltaRefInfo[_K] }>
    ): DeltaRefInfo {
        return new DeltaRefInfo(
            _o.deltaLocation,
            _o.lastDelta,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of DeltaRefInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeltaRefInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "deltaLocation",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "lastDelta",
        true,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DeltaRefInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeltaRefInfo: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DeltaRefInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeltaRefInfo: $.ComponentSpec[] = [];
let _cached_decoder_for_DeltaRefInfo: $.ASN1Decoder<DeltaRefInfo> | null = null;
let _cached_encoder_for_DeltaRefInfo: $.ASN1Encoder<DeltaRefInfo> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DeltaRefInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeltaRefInfo} The decoded data structure.
 */
export function _decode_DeltaRefInfo(el: _Element) {
    if (!_cached_decoder_for_DeltaRefInfo) {
        _cached_decoder_for_DeltaRefInfo = function (
            el: _Element
        ): DeltaRefInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let deltaLocation!: GeneralName;
            let lastDelta: OPTIONAL<GeneralizedTime>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                deltaLocation: (_el: _Element): void => {
                    deltaLocation = _decode_GeneralName(_el);
                },
                lastDelta: (_el: _Element): void => {
                    lastDelta = $._decodeGeneralizedTime(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeltaRefInfo,
                _extension_additions_list_spec_for_DeltaRefInfo,
                _root_component_type_list_2_spec_for_DeltaRefInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DeltaRefInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ deltaLocation,
                lastDelta,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DeltaRefInfo(el);
}
/**
 * @summary Encodes a(n) DeltaRefInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeltaRefInfo, encoded as an ASN.1 Element.
 */
export function _encode_DeltaRefInfo(
    value: DeltaRefInfo,
    elGetter: $.ASN1Encoder<DeltaRefInfo>
) {
    if (!_cached_encoder_for_DeltaRefInfo) {
        _cached_encoder_for_DeltaRefInfo = function (
            value: DeltaRefInfo,
            elGetter: $.ASN1Encoder<DeltaRefInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_GeneralName(
                                value.deltaLocation,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.lastDelta === undefined
                                ? undefined
                                : $._encodeGeneralizedTime(
                                      value.lastDelta,
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
    return _cached_encoder_for_DeltaRefInfo(value, elGetter);
}

/**
 * @summary CRLReferral
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLReferral ::= SEQUENCE {
 *   issuer          [0]  GeneralName OPTIONAL,
 *   location        [1]  GeneralName OPTIONAL,
 *   deltaRefInfo    [2]  DeltaRefInfo OPTIONAL,
 *   cRLScope             CRLScopeSyntax,
 *   lastUpdate      [3]  GeneralizedTime OPTIONAL,
 *   lastChangedCRL  [4]  GeneralizedTime OPTIONAL,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class CRLReferral {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: OPTIONAL<GeneralName>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<GeneralName>,
        /**
         * @summary `deltaRefInfo`.
         * @public
         * @readonly
         */
        readonly deltaRefInfo: OPTIONAL<DeltaRefInfo>,
        /**
         * @summary `cRLScope`.
         * @public
         * @readonly
         */
        readonly cRLScope: CRLScopeSyntax,
        /**
         * @summary `lastUpdate`.
         * @public
         * @readonly
         */
        readonly lastUpdate: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `lastChangedCRL`.
         * @public
         * @readonly
         */
        readonly lastChangedCRL: OPTIONAL<GeneralizedTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CRLReferral
     * @description
     *
     * This takes an `object` and converts it to a `CRLReferral`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CRLReferral`.
     * @returns {CRLReferral}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CRLReferral]: CRLReferral[_K] }>
    ): CRLReferral {
        return new CRLReferral(
            _o.issuer,
            _o.location,
            _o.deltaRefInfo,
            _o.cRLScope,
            _o.lastUpdate,
            _o.lastChangedCRL,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CRLReferral
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CRLReferral: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "issuer",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "location",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "deltaRefInfo",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "cRLScope",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "lastUpdate",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "lastChangedCRL",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CRLReferral
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CRLReferral: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CRLReferral
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CRLReferral: $.ComponentSpec[] = [];
let _cached_decoder_for_CRLReferral: $.ASN1Decoder<CRLReferral> | null = null;
let _cached_encoder_for_CRLReferral: $.ASN1Encoder<CRLReferral> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CRLReferral
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CRLReferral} The decoded data structure.
 */
export function _decode_CRLReferral(el: _Element) {
    if (!_cached_decoder_for_CRLReferral) {
        _cached_decoder_for_CRLReferral = function (el: _Element): CRLReferral {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuer: OPTIONAL<GeneralName>;
            let location: OPTIONAL<GeneralName>;
            let deltaRefInfo: OPTIONAL<DeltaRefInfo>;
            let cRLScope!: CRLScopeSyntax;
            let lastUpdate: OPTIONAL<GeneralizedTime>;
            let lastChangedCRL: OPTIONAL<GeneralizedTime>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                issuer: (_el: _Element): void => {
                    issuer = $._decode_implicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                location: (_el: _Element): void => {
                    location = $._decode_implicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                deltaRefInfo: (_el: _Element): void => {
                    deltaRefInfo = $._decode_implicit<DeltaRefInfo>(
                        () => _decode_DeltaRefInfo
                    )(_el);
                },
                cRLScope: (_el: _Element): void => {
                    cRLScope = _decode_CRLScopeSyntax(_el);
                },
                lastUpdate: (_el: _Element): void => {
                    lastUpdate = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                lastChangedCRL: (_el: _Element): void => {
                    lastChangedCRL = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CRLReferral,
                _extension_additions_list_spec_for_CRLReferral,
                _root_component_type_list_2_spec_for_CRLReferral,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CRLReferral(
                /* SEQUENCE_CONSTRUCTOR_CALL */ issuer,
                location,
                deltaRefInfo,
                cRLScope,
                lastUpdate,
                lastChangedCRL,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CRLReferral(el);
}
/**
 * @summary Encodes a(n) CRLReferral into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLReferral, encoded as an ASN.1 Element.
 */
export function _encode_CRLReferral(
    value: CRLReferral,
    elGetter: $.ASN1Encoder<CRLReferral>
) {
    if (!_cached_encoder_for_CRLReferral) {
        _cached_encoder_for_CRLReferral = function (
            value: CRLReferral,
            elGetter: $.ASN1Encoder<CRLReferral>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.issuer === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      $.BER
                                  )(value.issuer, $.BER),
                            /* IF_ABSENT  */ value.location === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_GeneralName,
                                      $.BER
                                  )(value.location, $.BER),
                            /* IF_ABSENT  */ value.deltaRefInfo === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_DeltaRefInfo,
                                      $.BER
                                  )(value.deltaRefInfo, $.BER),
                            /* REQUIRED   */ _encode_CRLScopeSyntax(
                                value.cRLScope,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.lastUpdate === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeGeneralizedTime,
                                      $.BER
                                  )(value.lastUpdate, $.BER),
                            /* IF_ABSENT  */ value.lastChangedCRL === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeGeneralizedTime,
                                      $.BER
                                  )(value.lastChangedCRL, $.BER),
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
    return _cached_encoder_for_CRLReferral(value, elGetter);
}

/**
 * @summary OTHER_REFERRAL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OTHER-REFERRAL ::= TYPE-IDENTIFIER
 * ```
 *
 * @interface
 */
export type OTHER_REFERRAL = TYPE_IDENTIFIER;

/**
 * @summary StatusReferral
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StatusReferral  ::=  CHOICE {
 *   cRLReferral    [0]  CRLReferral,
 *   otherReferral  [1]  INSTANCE OF OTHER-REFERRAL,
 *   ... }
 * ```
 */
export type StatusReferral =
    | { cRLReferral: CRLReferral } /* CHOICE_ALT_ROOT */
    | { otherReferral: INSTANCE_OF } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_StatusReferral: $.ASN1Decoder<
    StatusReferral
> | null = null;
let _cached_encoder_for_StatusReferral: $.ASN1Encoder<
    StatusReferral
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) StatusReferral
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StatusReferral} The decoded data structure.
 */
export function _decode_StatusReferral(el: _Element) {
    if (!_cached_decoder_for_StatusReferral) {
        _cached_decoder_for_StatusReferral = $._decode_extensible_choice<
            StatusReferral
        >({
            "CONTEXT 0": [
                "cRLReferral",
                $._decode_implicit<CRLReferral>(() => _decode_CRLReferral),
            ],
            "CONTEXT 1": [
                "otherReferral",
                $._decode_implicit<INSTANCE_OF>(() => $._decodeInstanceOf),
            ],
        });
    }
    return _cached_decoder_for_StatusReferral(el);
}
/**
 * @summary Encodes a(n) StatusReferral into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatusReferral, encoded as an ASN.1 Element.
 */
export function _encode_StatusReferral(
    value: StatusReferral,
    elGetter: $.ASN1Encoder<StatusReferral>
) {
    if (!_cached_encoder_for_StatusReferral) {
        _cached_encoder_for_StatusReferral = $._encode_choice<StatusReferral>(
            {
                cRLReferral: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CRLReferral,
                    $.BER
                ),
                otherReferral: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeInstanceOf,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_StatusReferral(value, elGetter);
}

export type StatusReferrals<> = StatusReferral[]; // SequenceOfType
let _cached_decoder_for_StatusReferrals: $.ASN1Decoder<
    StatusReferrals
> | null = null;
let _cached_encoder_for_StatusReferrals: $.ASN1Encoder<
    StatusReferrals
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) StatusReferrals
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StatusReferrals} The decoded data structure.
 */
export function _decode_StatusReferrals(el: _Element) {
    if (!_cached_decoder_for_StatusReferrals) {
        _cached_decoder_for_StatusReferrals = $._decodeSequenceOf<
            StatusReferral
        >(() => _decode_StatusReferral);
    }
    return _cached_decoder_for_StatusReferrals(el);
}
/**
 * @summary Encodes a(n) StatusReferrals into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatusReferrals, encoded as an ASN.1 Element.
 */
export function _encode_StatusReferrals(
    value: StatusReferrals,
    elGetter: $.ASN1Encoder<StatusReferrals>
) {
    if (!_cached_encoder_for_StatusReferrals) {
        _cached_encoder_for_StatusReferrals = $._encodeSequenceOf<
            StatusReferral
        >(() => _encode_StatusReferral, $.BER);
    }
    return _cached_encoder_for_StatusReferrals(value, elGetter);
}

/**
 * @summary id_ce_statusReferrals
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-statusReferrals                    OBJECT IDENTIFIER ::= {id-ce 45}
 * ```
 *
 * @constant
 */
export const id_ce_statusReferrals: OBJECT_IDENTIFIER = new _OID([45], id_ce);

/**
 * @summary statusReferrals
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * statusReferrals EXTENSION ::= {
 *   SYNTAX         StatusReferrals
 *   IDENTIFIED BY  id-ce-statusReferrals }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const statusReferrals: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_StatusReferrals,
    },
    encoderFor: {
        "&ExtnType": _encode_StatusReferrals,
    },
    "&id": id_ce_statusReferrals /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_cRLStreamIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-cRLStreamIdentifier                OBJECT IDENTIFIER ::= {id-ce 40}
 * ```
 *
 * @constant
 */
export const id_ce_cRLStreamIdentifier: OBJECT_IDENTIFIER = new _OID(
    [40],
    id_ce
);

/**
 * @summary cRLStreamIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cRLStreamIdentifier EXTENSION ::= {
 *   SYNTAX         CRLStreamIdentifier
 *   IDENTIFIED BY  id-ce-cRLStreamIdentifier }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const cRLStreamIdentifier: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CRLStreamIdentifier,
    },
    encoderFor: {
        "&ExtnType": _encode_CRLStreamIdentifier,
    },
    "&id": id_ce_cRLStreamIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary OrderedListSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrderedListSyntax ::= ENUMERATED {
 *   ascSerialNum (0),
 *   ascRevDate   (1),
 *   ...}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_OrderedListSyntax {
    ascSerialNum = 0,
    ascRevDate = 1,
}
/**
 * @summary OrderedListSyntax
 */
export type OrderedListSyntax = _enum_for_OrderedListSyntax | ENUMERATED;
/**
 * @summary OrderedListSyntax_ascSerialNum
 * @constant
 * @type {number}
 */
export const OrderedListSyntax_ascSerialNum: OrderedListSyntax = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary OrderedListSyntax_ascRevDate
 * @constant
 * @type {number}
 */
export const OrderedListSyntax_ascRevDate: OrderedListSyntax = 1; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_OrderedListSyntax: $.ASN1Decoder<
    OrderedListSyntax
> | null = null;
let _cached_encoder_for_OrderedListSyntax: $.ASN1Encoder<
    OrderedListSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OrderedListSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OrderedListSyntax} The decoded data structure.
 */
export function _decode_OrderedListSyntax(el: _Element) {
    if (!_cached_decoder_for_OrderedListSyntax) {
        _cached_decoder_for_OrderedListSyntax = $._decodeEnumerated;
    }
    return _cached_decoder_for_OrderedListSyntax(el);
}
/**
 * @summary Encodes a(n) OrderedListSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrderedListSyntax, encoded as an ASN.1 Element.
 */
export function _encode_OrderedListSyntax(
    value: OrderedListSyntax,
    elGetter: $.ASN1Encoder<OrderedListSyntax>
) {
    if (!_cached_encoder_for_OrderedListSyntax) {
        _cached_encoder_for_OrderedListSyntax = $._encodeEnumerated;
    }
    return _cached_encoder_for_OrderedListSyntax(value, elGetter);
}

/**
 * @summary id_ce_orderedList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-orderedList                        OBJECT IDENTIFIER ::= {id-ce 47}
 * ```
 *
 * @constant
 */
export const id_ce_orderedList: OBJECT_IDENTIFIER = new _OID([47], id_ce);

/**
 * @summary orderedList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * orderedList EXTENSION ::= {
 *   SYNTAX         OrderedListSyntax
 *   IDENTIFIED BY  id-ce-orderedList }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const orderedList: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_OrderedListSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_OrderedListSyntax,
    },
    "&id": id_ce_orderedList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary DeltaInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeltaInformation ::= SEQUENCE {
 *   deltaLocation  GeneralName,
 *   nextDelta      GeneralizedTime OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class DeltaInformation {
    constructor(
        /**
         * @summary `deltaLocation`.
         * @public
         * @readonly
         */
        readonly deltaLocation: GeneralName,
        /**
         * @summary `nextDelta`.
         * @public
         * @readonly
         */
        readonly nextDelta: OPTIONAL<GeneralizedTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DeltaInformation
     * @description
     *
     * This takes an `object` and converts it to a `DeltaInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeltaInformation`.
     * @returns {DeltaInformation}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DeltaInformation]: DeltaInformation[_K] }>
    ): DeltaInformation {
        return new DeltaInformation(
            _o.deltaLocation,
            _o.nextDelta,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of DeltaInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeltaInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "deltaLocation",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nextDelta",
        true,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DeltaInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeltaInformation: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DeltaInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeltaInformation: $.ComponentSpec[] = [];
let _cached_decoder_for_DeltaInformation: $.ASN1Decoder<
    DeltaInformation
> | null = null;
let _cached_encoder_for_DeltaInformation: $.ASN1Encoder<
    DeltaInformation
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DeltaInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeltaInformation} The decoded data structure.
 */
export function _decode_DeltaInformation(el: _Element) {
    if (!_cached_decoder_for_DeltaInformation) {
        _cached_decoder_for_DeltaInformation = function (
            el: _Element
        ): DeltaInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let deltaLocation!: GeneralName;
            let nextDelta: OPTIONAL<GeneralizedTime>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                deltaLocation: (_el: _Element): void => {
                    deltaLocation = _decode_GeneralName(_el);
                },
                nextDelta: (_el: _Element): void => {
                    nextDelta = $._decodeGeneralizedTime(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeltaInformation,
                _extension_additions_list_spec_for_DeltaInformation,
                _root_component_type_list_2_spec_for_DeltaInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DeltaInformation(
                /* SEQUENCE_CONSTRUCTOR_CALL */ deltaLocation,
                nextDelta,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DeltaInformation(el);
}
/**
 * @summary Encodes a(n) DeltaInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeltaInformation, encoded as an ASN.1 Element.
 */
export function _encode_DeltaInformation(
    value: DeltaInformation,
    elGetter: $.ASN1Encoder<DeltaInformation>
) {
    if (!_cached_encoder_for_DeltaInformation) {
        _cached_encoder_for_DeltaInformation = function (
            value: DeltaInformation,
            elGetter: $.ASN1Encoder<DeltaInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_GeneralName(
                                value.deltaLocation,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.nextDelta === undefined
                                ? undefined
                                : $._encodeGeneralizedTime(
                                      value.nextDelta,
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
    return _cached_encoder_for_DeltaInformation(value, elGetter);
}

/**
 * @summary id_ce_deltaInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-deltaInfo                          OBJECT IDENTIFIER ::= {id-ce 53}
 * ```
 *
 * @constant
 */
export const id_ce_deltaInfo: OBJECT_IDENTIFIER = new _OID([53], id_ce);

/**
 * @summary deltaInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deltaInfo EXTENSION ::= {
 *   SYNTAX         DeltaInformation
 *   IDENTIFIED BY  id-ce-deltaInfo }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const deltaInfo: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_DeltaInformation,
    },
    encoderFor: {
        "&ExtnType": _encode_DeltaInformation,
    },
    "&id": id_ce_deltaInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary CRLReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLReason ::= ENUMERATED {
 *   unspecified          (0),
 *   keyCompromise        (1),
 *   cACompromise         (2),
 *   affiliationChanged   (3),
 *   superseded           (4),
 *   cessationOfOperation (5),
 *   certificateHold      (6),
 *   removeFromCRL        (8),
 *   privilegeWithdrawn   (9),
 *   aACompromise         (10),
 *   ...,
 *   weakAlgorithmOrKey   (11) }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_CRLReason {
    unspecified = 0,
    keyCompromise = 1,
    cACompromise = 2,
    affiliationChanged = 3,
    superseded = 4,
    cessationOfOperation = 5,
    certificateHold = 6,
    removeFromCRL = 8,
    privilegeWithdrawn = 9,
    aACompromise = 10,
    weakAlgorithmOrKey = 11,
}
/**
 * @summary CRLReason
 */
export type CRLReason = _enum_for_CRLReason | ENUMERATED;
/**
 * @summary CRLReason_unspecified
 * @constant
 * @type {number}
 */
export const CRLReason_unspecified: CRLReason = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_keyCompromise
 * @constant
 * @type {number}
 */
export const CRLReason_keyCompromise: CRLReason = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_cACompromise
 * @constant
 * @type {number}
 */
export const CRLReason_cACompromise: CRLReason = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_affiliationChanged
 * @constant
 * @type {number}
 */
export const CRLReason_affiliationChanged: CRLReason = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_superseded
 * @constant
 * @type {number}
 */
export const CRLReason_superseded: CRLReason = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_cessationOfOperation
 * @constant
 * @type {number}
 */
export const CRLReason_cessationOfOperation: CRLReason = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_certificateHold
 * @constant
 * @type {number}
 */
export const CRLReason_certificateHold: CRLReason = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_removeFromCRL
 * @constant
 * @type {number}
 */
export const CRLReason_removeFromCRL: CRLReason = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_privilegeWithdrawn
 * @constant
 * @type {number}
 */
export const CRLReason_privilegeWithdrawn: CRLReason = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_aACompromise
 * @constant
 * @type {number}
 */
export const CRLReason_aACompromise: CRLReason = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CRLReason_weakAlgorithmOrKey
 * @constant
 * @type {number}
 */
export const CRLReason_weakAlgorithmOrKey: CRLReason = 11; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_CRLReason: $.ASN1Decoder<CRLReason> | null = null;
let _cached_encoder_for_CRLReason: $.ASN1Encoder<CRLReason> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CRLReason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CRLReason} The decoded data structure.
 */
export function _decode_CRLReason(el: _Element) {
    if (!_cached_decoder_for_CRLReason) {
        _cached_decoder_for_CRLReason = $._decodeEnumerated;
    }
    return _cached_decoder_for_CRLReason(el);
}
/**
 * @summary Encodes a(n) CRLReason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLReason, encoded as an ASN.1 Element.
 */
export function _encode_CRLReason(
    value: CRLReason,
    elGetter: $.ASN1Encoder<CRLReason>
) {
    if (!_cached_encoder_for_CRLReason) {
        _cached_encoder_for_CRLReason = $._encodeEnumerated;
    }
    return _cached_encoder_for_CRLReason(value, elGetter);
}

export type HoldInstruction<> = OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_HoldInstruction: $.ASN1Decoder<
    HoldInstruction
> | null = null;
let _cached_encoder_for_HoldInstruction: $.ASN1Encoder<
    HoldInstruction
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) HoldInstruction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HoldInstruction} The decoded data structure.
 */
export function _decode_HoldInstruction(el: _Element) {
    if (!_cached_decoder_for_HoldInstruction) {
        _cached_decoder_for_HoldInstruction = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_HoldInstruction(el);
}
/**
 * @summary Encodes a(n) HoldInstruction into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HoldInstruction, encoded as an ASN.1 Element.
 */
export function _encode_HoldInstruction(
    value: HoldInstruction,
    elGetter: $.ASN1Encoder<HoldInstruction>
) {
    if (!_cached_encoder_for_HoldInstruction) {
        _cached_encoder_for_HoldInstruction = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_HoldInstruction(value, elGetter);
}

/**
 * @summary ReasonInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReasonInfo ::= SEQUENCE {
 *   reasonCode           CRLReason,
 *   holdInstructionCode  HoldInstruction OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ReasonInfo {
    constructor(
        /**
         * @summary `reasonCode`.
         * @public
         * @readonly
         */
        readonly reasonCode: CRLReason,
        /**
         * @summary `holdInstructionCode`.
         * @public
         * @readonly
         */
        readonly holdInstructionCode: OPTIONAL<HoldInstruction>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ReasonInfo
     * @description
     *
     * This takes an `object` and converts it to a `ReasonInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReasonInfo`.
     * @returns {ReasonInfo}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ReasonInfo]: ReasonInfo[_K] }>
    ): ReasonInfo {
        return new ReasonInfo(
            _o.reasonCode,
            _o.holdInstructionCode,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `reasonCode`
     * @public
     * @static
     */

    public static _enum_for_reasonCode = _enum_for_CRLReason;
}
/**
 * @summary The Leading Root Component Types of ReasonInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReasonInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "reasonCode",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "holdInstructionCode",
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ReasonInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReasonInfo: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ReasonInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReasonInfo: $.ComponentSpec[] = [];
let _cached_decoder_for_ReasonInfo: $.ASN1Decoder<ReasonInfo> | null = null;
let _cached_encoder_for_ReasonInfo: $.ASN1Encoder<ReasonInfo> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ReasonInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReasonInfo} The decoded data structure.
 */
export function _decode_ReasonInfo(el: _Element) {
    if (!_cached_decoder_for_ReasonInfo) {
        _cached_decoder_for_ReasonInfo = function (el: _Element): ReasonInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let reasonCode!: CRLReason;
            let holdInstructionCode: OPTIONAL<HoldInstruction>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                reasonCode: (_el: _Element): void => {
                    reasonCode = _decode_CRLReason(_el);
                },
                holdInstructionCode: (_el: _Element): void => {
                    holdInstructionCode = _decode_HoldInstruction(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReasonInfo,
                _extension_additions_list_spec_for_ReasonInfo,
                _root_component_type_list_2_spec_for_ReasonInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ReasonInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ reasonCode,
                holdInstructionCode,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ReasonInfo(el);
}
/**
 * @summary Encodes a(n) ReasonInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReasonInfo, encoded as an ASN.1 Element.
 */
export function _encode_ReasonInfo(
    value: ReasonInfo,
    elGetter: $.ASN1Encoder<ReasonInfo>
) {
    if (!_cached_encoder_for_ReasonInfo) {
        _cached_encoder_for_ReasonInfo = function (
            value: ReasonInfo,
            elGetter: $.ASN1Encoder<ReasonInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CRLReason(
                                value.reasonCode,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.holdInstructionCode ===
                            undefined
                                ? undefined
                                : _encode_HoldInstruction(
                                      value.holdInstructionCode,
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
    return _cached_encoder_for_ReasonInfo(value, elGetter);
}

export type CertificateSerialNumbers<> = CertificateSerialNumber[]; // SequenceOfType
let _cached_decoder_for_CertificateSerialNumbers: $.ASN1Decoder<
    CertificateSerialNumbers
> | null = null;
let _cached_encoder_for_CertificateSerialNumbers: $.ASN1Encoder<
    CertificateSerialNumbers
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateSerialNumbers
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateSerialNumbers} The decoded data structure.
 */
export function _decode_CertificateSerialNumbers(el: _Element) {
    if (!_cached_decoder_for_CertificateSerialNumbers) {
        _cached_decoder_for_CertificateSerialNumbers = $._decodeSequenceOf<
            CertificateSerialNumber
        >(() => _decode_CertificateSerialNumber);
    }
    return _cached_decoder_for_CertificateSerialNumbers(el);
}
/**
 * @summary Encodes a(n) CertificateSerialNumbers into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateSerialNumbers, encoded as an ASN.1 Element.
 */
export function _encode_CertificateSerialNumbers(
    value: CertificateSerialNumbers,
    elGetter: $.ASN1Encoder<CertificateSerialNumbers>
) {
    if (!_cached_encoder_for_CertificateSerialNumbers) {
        _cached_encoder_for_CertificateSerialNumbers = $._encodeSequenceOf<
            CertificateSerialNumber
        >(() => _encode_CertificateSerialNumber, $.BER);
    }
    return _cached_encoder_for_CertificateSerialNumbers(value, elGetter);
}

/**
 * @summary CertificateGroupNumberRange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateGroupNumberRange ::= SEQUENCE {
 *   startingNumber  [0]  INTEGER,
 *   endingNumber    [1]  INTEGER,
 *   ... }
 * ```
 *
 * @class
 */
export class CertificateGroupNumberRange {
    constructor(
        /**
         * @summary `startingNumber`.
         * @public
         * @readonly
         */
        readonly startingNumber: INTEGER,
        /**
         * @summary `endingNumber`.
         * @public
         * @readonly
         */
        readonly endingNumber: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificateGroupNumberRange
     * @description
     *
     * This takes an `object` and converts it to a `CertificateGroupNumberRange`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateGroupNumberRange`.
     * @returns {CertificateGroupNumberRange}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertificateGroupNumberRange]: CertificateGroupNumberRange[_K];
            }
        >
    ): CertificateGroupNumberRange {
        return new CertificateGroupNumberRange(
            _o.startingNumber,
            _o.endingNumber,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertificateGroupNumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateGroupNumberRange: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "startingNumber",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "endingNumber",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertificateGroupNumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateGroupNumberRange: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertificateGroupNumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateGroupNumberRange: $.ComponentSpec[] = [];
let _cached_decoder_for_CertificateGroupNumberRange: $.ASN1Decoder<
    CertificateGroupNumberRange
> | null = null;
let _cached_encoder_for_CertificateGroupNumberRange: $.ASN1Encoder<
    CertificateGroupNumberRange
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateGroupNumberRange
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateGroupNumberRange} The decoded data structure.
 */
export function _decode_CertificateGroupNumberRange(el: _Element) {
    if (!_cached_decoder_for_CertificateGroupNumberRange) {
        _cached_decoder_for_CertificateGroupNumberRange = function (
            el: _Element
        ): CertificateGroupNumberRange {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertificateGroupNumberRange contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "startingNumber";
            sequence[1].name = "endingNumber";
            let startingNumber!: INTEGER;
            let endingNumber!: INTEGER;
            startingNumber = $._decode_implicit<INTEGER>(
                () => $._decodeInteger
            )(sequence[0]);
            endingNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
                sequence[1]
            );
            return new CertificateGroupNumberRange(
                startingNumber,
                endingNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertificateGroupNumberRange(el);
}
/**
 * @summary Encodes a(n) CertificateGroupNumberRange into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateGroupNumberRange, encoded as an ASN.1 Element.
 */
export function _encode_CertificateGroupNumberRange(
    value: CertificateGroupNumberRange,
    elGetter: $.ASN1Encoder<CertificateGroupNumberRange>
) {
    if (!_cached_encoder_for_CertificateGroupNumberRange) {
        _cached_encoder_for_CertificateGroupNumberRange = function (
            value: CertificateGroupNumberRange,
            elGetter: $.ASN1Encoder<CertificateGroupNumberRange>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => $._encodeInteger,
                                $.BER
                            )(value.startingNumber, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () => $._encodeInteger,
                                $.BER
                            )(value.endingNumber, $.BER),
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
    return _cached_encoder_for_CertificateGroupNumberRange(value, elGetter);
}

/**
 * @summary CertificateGroup
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateGroup  ::=  CHOICE {
 *   serialNumbers      [0]  CertificateSerialNumbers,
 *   serialNumberRange  [1]  CertificateGroupNumberRange,
 *   nameSubtree        [2]  GeneralName,
 *   ... }
 * ```
 */
export type CertificateGroup =
    | { serialNumbers: CertificateSerialNumbers } /* CHOICE_ALT_ROOT */
    | { serialNumberRange: CertificateGroupNumberRange } /* CHOICE_ALT_ROOT */
    | { nameSubtree: GeneralName } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertificateGroup: $.ASN1Decoder<
    CertificateGroup
> | null = null;
let _cached_encoder_for_CertificateGroup: $.ASN1Encoder<
    CertificateGroup
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateGroup
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateGroup} The decoded data structure.
 */
export function _decode_CertificateGroup(el: _Element) {
    if (!_cached_decoder_for_CertificateGroup) {
        _cached_decoder_for_CertificateGroup = $._decode_extensible_choice<
            CertificateGroup
        >({
            "CONTEXT 0": [
                "serialNumbers",
                $._decode_implicit<CertificateSerialNumbers>(
                    () => _decode_CertificateSerialNumbers
                ),
            ],
            "CONTEXT 1": [
                "serialNumberRange",
                $._decode_implicit<CertificateGroupNumberRange>(
                    () => _decode_CertificateGroupNumberRange
                ),
            ],
            "CONTEXT 2": [
                "nameSubtree",
                $._decode_implicit<GeneralName>(() => _decode_GeneralName),
            ],
        });
    }
    return _cached_decoder_for_CertificateGroup(el);
}
/**
 * @summary Encodes a(n) CertificateGroup into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateGroup, encoded as an ASN.1 Element.
 */
export function _encode_CertificateGroup(
    value: CertificateGroup,
    elGetter: $.ASN1Encoder<CertificateGroup>
) {
    if (!_cached_encoder_for_CertificateGroup) {
        _cached_encoder_for_CertificateGroup = $._encode_choice<
            CertificateGroup
        >(
            {
                serialNumbers: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertificateSerialNumbers,
                    $.BER
                ),
                serialNumberRange: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertificateGroupNumberRange,
                    $.BER
                ),
                nameSubtree: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_GeneralName,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertificateGroup(value, elGetter);
}

/**
 * @summary ToBeRevokedGroup
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ToBeRevokedGroup ::= SEQUENCE {
 *   certificateIssuer  [0]  GeneralName OPTIONAL,
 *   reasonInfo         [1]  ReasonInfo OPTIONAL,
 *   revocationTime          GeneralizedTime,
 *   certificateGroup        CertificateGroup,
 *   ... }
 * ```
 *
 * @class
 */
export class ToBeRevokedGroup {
    constructor(
        /**
         * @summary `certificateIssuer`.
         * @public
         * @readonly
         */
        readonly certificateIssuer: OPTIONAL<GeneralName>,
        /**
         * @summary `reasonInfo`.
         * @public
         * @readonly
         */
        readonly reasonInfo: OPTIONAL<ReasonInfo>,
        /**
         * @summary `revocationTime`.
         * @public
         * @readonly
         */
        readonly revocationTime: GeneralizedTime,
        /**
         * @summary `certificateGroup`.
         * @public
         * @readonly
         */
        readonly certificateGroup: CertificateGroup,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ToBeRevokedGroup
     * @description
     *
     * This takes an `object` and converts it to a `ToBeRevokedGroup`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ToBeRevokedGroup`.
     * @returns {ToBeRevokedGroup}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ToBeRevokedGroup]: ToBeRevokedGroup[_K] }>
    ): ToBeRevokedGroup {
        return new ToBeRevokedGroup(
            _o.certificateIssuer,
            _o.reasonInfo,
            _o.revocationTime,
            _o.certificateGroup,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ToBeRevokedGroup
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ToBeRevokedGroup: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certificateIssuer",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "reasonInfo",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "revocationTime",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certificateGroup",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ToBeRevokedGroup
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ToBeRevokedGroup: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ToBeRevokedGroup
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ToBeRevokedGroup: $.ComponentSpec[] = [];
let _cached_decoder_for_ToBeRevokedGroup: $.ASN1Decoder<
    ToBeRevokedGroup
> | null = null;
let _cached_encoder_for_ToBeRevokedGroup: $.ASN1Encoder<
    ToBeRevokedGroup
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ToBeRevokedGroup
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ToBeRevokedGroup} The decoded data structure.
 */
export function _decode_ToBeRevokedGroup(el: _Element) {
    if (!_cached_decoder_for_ToBeRevokedGroup) {
        _cached_decoder_for_ToBeRevokedGroup = function (
            el: _Element
        ): ToBeRevokedGroup {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certificateIssuer: OPTIONAL<GeneralName>;
            let reasonInfo: OPTIONAL<ReasonInfo>;
            let revocationTime!: GeneralizedTime;
            let certificateGroup!: CertificateGroup;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                certificateIssuer: (_el: _Element): void => {
                    certificateIssuer = $._decode_implicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                reasonInfo: (_el: _Element): void => {
                    reasonInfo = $._decode_implicit<ReasonInfo>(
                        () => _decode_ReasonInfo
                    )(_el);
                },
                revocationTime: (_el: _Element): void => {
                    revocationTime = $._decodeGeneralizedTime(_el);
                },
                certificateGroup: (_el: _Element): void => {
                    certificateGroup = _decode_CertificateGroup(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ToBeRevokedGroup,
                _extension_additions_list_spec_for_ToBeRevokedGroup,
                _root_component_type_list_2_spec_for_ToBeRevokedGroup,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ToBeRevokedGroup(
                /* SEQUENCE_CONSTRUCTOR_CALL */ certificateIssuer,
                reasonInfo,
                revocationTime,
                certificateGroup,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ToBeRevokedGroup(el);
}
/**
 * @summary Encodes a(n) ToBeRevokedGroup into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ToBeRevokedGroup, encoded as an ASN.1 Element.
 */
export function _encode_ToBeRevokedGroup(
    value: ToBeRevokedGroup,
    elGetter: $.ASN1Encoder<ToBeRevokedGroup>
) {
    if (!_cached_encoder_for_ToBeRevokedGroup) {
        _cached_encoder_for_ToBeRevokedGroup = function (
            value: ToBeRevokedGroup,
            elGetter: $.ASN1Encoder<ToBeRevokedGroup>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.certificateIssuer ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      $.BER
                                  )(value.certificateIssuer, $.BER),
                            /* IF_ABSENT  */ value.reasonInfo === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_ReasonInfo,
                                      $.BER
                                  )(value.reasonInfo, $.BER),
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.revocationTime,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertificateGroup(
                                value.certificateGroup,
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
    return _cached_encoder_for_ToBeRevokedGroup(value, elGetter);
}

export type ToBeRevokedSyntax<> = ToBeRevokedGroup[]; // SequenceOfType
let _cached_decoder_for_ToBeRevokedSyntax: $.ASN1Decoder<
    ToBeRevokedSyntax
> | null = null;
let _cached_encoder_for_ToBeRevokedSyntax: $.ASN1Encoder<
    ToBeRevokedSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ToBeRevokedSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ToBeRevokedSyntax} The decoded data structure.
 */
export function _decode_ToBeRevokedSyntax(el: _Element) {
    if (!_cached_decoder_for_ToBeRevokedSyntax) {
        _cached_decoder_for_ToBeRevokedSyntax = $._decodeSequenceOf<
            ToBeRevokedGroup
        >(() => _decode_ToBeRevokedGroup);
    }
    return _cached_decoder_for_ToBeRevokedSyntax(el);
}
/**
 * @summary Encodes a(n) ToBeRevokedSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ToBeRevokedSyntax, encoded as an ASN.1 Element.
 */
export function _encode_ToBeRevokedSyntax(
    value: ToBeRevokedSyntax,
    elGetter: $.ASN1Encoder<ToBeRevokedSyntax>
) {
    if (!_cached_encoder_for_ToBeRevokedSyntax) {
        _cached_encoder_for_ToBeRevokedSyntax = $._encodeSequenceOf<
            ToBeRevokedGroup
        >(() => _encode_ToBeRevokedGroup, $.BER);
    }
    return _cached_encoder_for_ToBeRevokedSyntax(value, elGetter);
}

/**
 * @summary id_ce_toBeRevoked
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-toBeRevoked                        OBJECT IDENTIFIER ::= {id-ce 58}
 * ```
 *
 * @constant
 */
export const id_ce_toBeRevoked: OBJECT_IDENTIFIER = new _OID([58], id_ce);

/**
 * @summary toBeRevoked
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * toBeRevoked EXTENSION ::= {
 *   SYNTAX         ToBeRevokedSyntax
 *   IDENTIFIED BY  id-ce-toBeRevoked }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const toBeRevoked: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_ToBeRevokedSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_ToBeRevokedSyntax,
    },
    "&id": id_ce_toBeRevoked /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary RevokedCertificateGroup
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevokedCertificateGroup  ::=  CHOICE {
 *   serialNumberRange  NumberRange,
 *   nameSubtree        GeneralName }
 * ```
 */
export type RevokedCertificateGroup =
    | { serialNumberRange: NumberRange } /* CHOICE_ALT_ROOT */
    | { nameSubtree: GeneralName } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_RevokedCertificateGroup: $.ASN1Decoder<
    RevokedCertificateGroup
> | null = null;
let _cached_encoder_for_RevokedCertificateGroup: $.ASN1Encoder<
    RevokedCertificateGroup
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RevokedCertificateGroup
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevokedCertificateGroup} The decoded data structure.
 */
export function _decode_RevokedCertificateGroup(el: _Element) {
    if (!_cached_decoder_for_RevokedCertificateGroup) {
        _cached_decoder_for_RevokedCertificateGroup = $._decode_inextensible_choice<
            RevokedCertificateGroup
        >({
            "UNIVERSAL 16": ["serialNumberRange", _decode_NumberRange],
            "CONTEXT 0": ["nameSubtree", _decode_GeneralName],
            "CONTEXT 1": ["nameSubtree", _decode_GeneralName],
            "CONTEXT 2": ["nameSubtree", _decode_GeneralName],
            "CONTEXT 3": ["nameSubtree", _decode_GeneralName],
            "CONTEXT 4": ["nameSubtree", _decode_GeneralName],
            "CONTEXT 5": ["nameSubtree", _decode_GeneralName],
            "CONTEXT 6": ["nameSubtree", _decode_GeneralName],
            "CONTEXT 7": ["nameSubtree", _decode_GeneralName],
            "CONTEXT 8": ["nameSubtree", _decode_GeneralName],
        });
    }
    return _cached_decoder_for_RevokedCertificateGroup(el);
}
/**
 * @summary Encodes a(n) RevokedCertificateGroup into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevokedCertificateGroup, encoded as an ASN.1 Element.
 */
export function _encode_RevokedCertificateGroup(
    value: RevokedCertificateGroup,
    elGetter: $.ASN1Encoder<RevokedCertificateGroup>
) {
    if (!_cached_encoder_for_RevokedCertificateGroup) {
        _cached_encoder_for_RevokedCertificateGroup = $._encode_choice<
            RevokedCertificateGroup
        >(
            {
                serialNumberRange: _encode_NumberRange,
                nameSubtree: _encode_GeneralName,
            },
            $.BER
        );
    }
    return _cached_encoder_for_RevokedCertificateGroup(value, elGetter);
}

/**
 * @summary RevokedGroup
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevokedGroup ::= SEQUENCE {
 *   certificateIssuer        [0]  GeneralName OPTIONAL,
 *   reasonInfo               [1]  ReasonInfo OPTIONAL,
 *   invalidityDate           [2]  GeneralizedTime OPTIONAL,
 *   revokedcertificateGroup  [3]  RevokedCertificateGroup,
 *   ... }
 * ```
 *
 * @class
 */
export class RevokedGroup {
    constructor(
        /**
         * @summary `certificateIssuer`.
         * @public
         * @readonly
         */
        readonly certificateIssuer: OPTIONAL<GeneralName>,
        /**
         * @summary `reasonInfo`.
         * @public
         * @readonly
         */
        readonly reasonInfo: OPTIONAL<ReasonInfo>,
        /**
         * @summary `invalidityDate`.
         * @public
         * @readonly
         */
        readonly invalidityDate: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `revokedcertificateGroup`.
         * @public
         * @readonly
         */
        readonly revokedcertificateGroup: RevokedCertificateGroup,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RevokedGroup
     * @description
     *
     * This takes an `object` and converts it to a `RevokedGroup`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RevokedGroup`.
     * @returns {RevokedGroup}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof RevokedGroup]: RevokedGroup[_K] }>
    ): RevokedGroup {
        return new RevokedGroup(
            _o.certificateIssuer,
            _o.reasonInfo,
            _o.invalidityDate,
            _o.revokedcertificateGroup,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of RevokedGroup
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RevokedGroup: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certificateIssuer",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "reasonInfo",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "invalidityDate",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "revokedcertificateGroup",
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of RevokedGroup
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RevokedGroup: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of RevokedGroup
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RevokedGroup: $.ComponentSpec[] = [];
let _cached_decoder_for_RevokedGroup: $.ASN1Decoder<RevokedGroup> | null = null;
let _cached_encoder_for_RevokedGroup: $.ASN1Encoder<RevokedGroup> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RevokedGroup
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevokedGroup} The decoded data structure.
 */
export function _decode_RevokedGroup(el: _Element) {
    if (!_cached_decoder_for_RevokedGroup) {
        _cached_decoder_for_RevokedGroup = function (
            el: _Element
        ): RevokedGroup {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certificateIssuer: OPTIONAL<GeneralName>;
            let reasonInfo: OPTIONAL<ReasonInfo>;
            let invalidityDate: OPTIONAL<GeneralizedTime>;
            let revokedcertificateGroup!: RevokedCertificateGroup;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                certificateIssuer: (_el: _Element): void => {
                    certificateIssuer = $._decode_implicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                reasonInfo: (_el: _Element): void => {
                    reasonInfo = $._decode_implicit<ReasonInfo>(
                        () => _decode_ReasonInfo
                    )(_el);
                },
                invalidityDate: (_el: _Element): void => {
                    invalidityDate = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                revokedcertificateGroup: (_el: _Element): void => {
                    revokedcertificateGroup = $._decode_implicit<
                        RevokedCertificateGroup
                    >(() => _decode_RevokedCertificateGroup)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RevokedGroup,
                _extension_additions_list_spec_for_RevokedGroup,
                _root_component_type_list_2_spec_for_RevokedGroup,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RevokedGroup(
                /* SEQUENCE_CONSTRUCTOR_CALL */ certificateIssuer,
                reasonInfo,
                invalidityDate,
                revokedcertificateGroup,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RevokedGroup(el);
}
/**
 * @summary Encodes a(n) RevokedGroup into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevokedGroup, encoded as an ASN.1 Element.
 */
export function _encode_RevokedGroup(
    value: RevokedGroup,
    elGetter: $.ASN1Encoder<RevokedGroup>
) {
    if (!_cached_encoder_for_RevokedGroup) {
        _cached_encoder_for_RevokedGroup = function (
            value: RevokedGroup,
            elGetter: $.ASN1Encoder<RevokedGroup>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.certificateIssuer ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      $.BER
                                  )(value.certificateIssuer, $.BER),
                            /* IF_ABSENT  */ value.reasonInfo === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_ReasonInfo,
                                      $.BER
                                  )(value.reasonInfo, $.BER),
                            /* IF_ABSENT  */ value.invalidityDate === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeGeneralizedTime,
                                      $.BER
                                  )(value.invalidityDate, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                3,
                                () => _encode_RevokedCertificateGroup,
                                $.BER
                            )(value.revokedcertificateGroup, $.BER),
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
    return _cached_encoder_for_RevokedGroup(value, elGetter);
}

export type RevokedGroupsSyntax<> = RevokedGroup[]; // SequenceOfType
let _cached_decoder_for_RevokedGroupsSyntax: $.ASN1Decoder<
    RevokedGroupsSyntax
> | null = null;
let _cached_encoder_for_RevokedGroupsSyntax: $.ASN1Encoder<
    RevokedGroupsSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RevokedGroupsSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevokedGroupsSyntax} The decoded data structure.
 */
export function _decode_RevokedGroupsSyntax(el: _Element) {
    if (!_cached_decoder_for_RevokedGroupsSyntax) {
        _cached_decoder_for_RevokedGroupsSyntax = $._decodeSequenceOf<
            RevokedGroup
        >(() => _decode_RevokedGroup);
    }
    return _cached_decoder_for_RevokedGroupsSyntax(el);
}
/**
 * @summary Encodes a(n) RevokedGroupsSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevokedGroupsSyntax, encoded as an ASN.1 Element.
 */
export function _encode_RevokedGroupsSyntax(
    value: RevokedGroupsSyntax,
    elGetter: $.ASN1Encoder<RevokedGroupsSyntax>
) {
    if (!_cached_encoder_for_RevokedGroupsSyntax) {
        _cached_encoder_for_RevokedGroupsSyntax = $._encodeSequenceOf<
            RevokedGroup
        >(() => _encode_RevokedGroup, $.BER);
    }
    return _cached_encoder_for_RevokedGroupsSyntax(value, elGetter);
}

/**
 * @summary id_ce_revokedGroups
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-revokedGroups                      OBJECT IDENTIFIER ::= {id-ce 59}
 * ```
 *
 * @constant
 */
export const id_ce_revokedGroups: OBJECT_IDENTIFIER = new _OID([59], id_ce);

/**
 * @summary revokedGroups
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * revokedGroups EXTENSION ::= {
 *   SYNTAX         RevokedGroupsSyntax
 *   IDENTIFIED BY  id-ce-revokedGroups }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const revokedGroups: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_RevokedGroupsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_RevokedGroupsSyntax,
    },
    "&id": id_ce_revokedGroups /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type ExpiredCertsOnCRL<> = GeneralizedTime; // GeneralizedTime
let _cached_decoder_for_ExpiredCertsOnCRL: $.ASN1Decoder<
    ExpiredCertsOnCRL
> | null = null;
let _cached_encoder_for_ExpiredCertsOnCRL: $.ASN1Encoder<
    ExpiredCertsOnCRL
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ExpiredCertsOnCRL
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExpiredCertsOnCRL} The decoded data structure.
 */
export function _decode_ExpiredCertsOnCRL(el: _Element) {
    if (!_cached_decoder_for_ExpiredCertsOnCRL) {
        _cached_decoder_for_ExpiredCertsOnCRL = $._decodeGeneralizedTime;
    }
    return _cached_decoder_for_ExpiredCertsOnCRL(el);
}
/**
 * @summary Encodes a(n) ExpiredCertsOnCRL into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExpiredCertsOnCRL, encoded as an ASN.1 Element.
 */
export function _encode_ExpiredCertsOnCRL(
    value: ExpiredCertsOnCRL,
    elGetter: $.ASN1Encoder<ExpiredCertsOnCRL>
) {
    if (!_cached_encoder_for_ExpiredCertsOnCRL) {
        _cached_encoder_for_ExpiredCertsOnCRL = $._encodeGeneralizedTime;
    }
    return _cached_encoder_for_ExpiredCertsOnCRL(value, elGetter);
}

/**
 * @summary id_ce_expiredCertsOnCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-expiredCertsOnCRL                  OBJECT IDENTIFIER ::= {id-ce 60}
 * ```
 *
 * @constant
 */
export const id_ce_expiredCertsOnCRL: OBJECT_IDENTIFIER = new _OID([60], id_ce);

/**
 * @summary expiredCertsOnCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * expiredCertsOnCRL EXTENSION ::= {
 *   SYNTAX         ExpiredCertsOnCRL
 *   IDENTIFIED BY  id-ce-expiredCertsOnCRL }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const expiredCertsOnCRL: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_ExpiredCertsOnCRL,
    },
    encoderFor: {
        "&ExtnType": _encode_ExpiredCertsOnCRL,
    },
    "&id": id_ce_expiredCertsOnCRL /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_reasonCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-reasonCode                         OBJECT IDENTIFIER ::= {id-ce 21}
 * ```
 *
 * @constant
 */
export const id_ce_reasonCode: OBJECT_IDENTIFIER = new _OID([21], id_ce);

/**
 * @summary reasonCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * reasonCode EXTENSION ::= {
 *   SYNTAX         CRLReason
 *   IDENTIFIED BY  id-ce-reasonCode }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const reasonCode: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CRLReason,
    },
    encoderFor: {
        "&ExtnType": _encode_CRLReason,
    },
    "&id": id_ce_reasonCode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_holdInstructionCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-holdInstructionCode                OBJECT IDENTIFIER ::= {id-ce 23}
 * ```
 *
 * @constant
 */
export const id_ce_holdInstructionCode: OBJECT_IDENTIFIER = new _OID(
    [23],
    id_ce
);

/**
 * @summary holdInstructionCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * holdInstructionCode EXTENSION ::= {
 *   SYNTAX         HoldInstruction
 *   IDENTIFIED BY  id-ce-holdInstructionCode }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const holdInstructionCode: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_HoldInstruction,
    },
    encoderFor: {
        "&ExtnType": _encode_HoldInstruction,
    },
    "&id": id_ce_holdInstructionCode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_invalidityDate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-invalidityDate                     OBJECT IDENTIFIER ::= {id-ce 24}
 * ```
 *
 * @constant
 */
export const id_ce_invalidityDate: OBJECT_IDENTIFIER = new _OID([24], id_ce);

/**
 * @summary invalidityDate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * invalidityDate EXTENSION ::= {
 *   SYNTAX         GeneralizedTime
 *   IDENTIFIED BY  id-ce-invalidityDate }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const invalidityDate: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&ExtnType": $._encodeGeneralizedTime,
    },
    "&id": id_ce_invalidityDate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary DistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DistributionPoint ::= SEQUENCE {
 *   distributionPoint  [0]  DistributionPointName OPTIONAL,
 *   reasons            [1]  ReasonFlags OPTIONAL,
 *   cRLIssuer          [2]  GeneralNames OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class DistributionPoint {
    constructor(
        /**
         * @summary `distributionPoint`.
         * @public
         * @readonly
         */
        readonly distributionPoint: OPTIONAL<DistributionPointName>,
        /**
         * @summary `reasons`.
         * @public
         * @readonly
         */
        readonly reasons: OPTIONAL<ReasonFlags>,
        /**
         * @summary `cRLIssuer`.
         * @public
         * @readonly
         */
        readonly cRLIssuer: OPTIONAL<GeneralNames>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DistributionPoint
     * @description
     *
     * This takes an `object` and converts it to a `DistributionPoint`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DistributionPoint`.
     * @returns {DistributionPoint}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DistributionPoint]: DistributionPoint[_K] }>
    ): DistributionPoint {
        return new DistributionPoint(
            _o.distributionPoint,
            _o.reasons,
            _o.cRLIssuer,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of DistributionPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DistributionPoint: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "distributionPoint",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "reasons",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "cRLIssuer",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DistributionPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DistributionPoint: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DistributionPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DistributionPoint: $.ComponentSpec[] = [];
let _cached_decoder_for_DistributionPoint: $.ASN1Decoder<
    DistributionPoint
> | null = null;
let _cached_encoder_for_DistributionPoint: $.ASN1Encoder<
    DistributionPoint
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DistributionPoint
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DistributionPoint} The decoded data structure.
 */
export function _decode_DistributionPoint(el: _Element) {
    if (!_cached_decoder_for_DistributionPoint) {
        _cached_decoder_for_DistributionPoint = function (
            el: _Element
        ): DistributionPoint {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let distributionPoint: OPTIONAL<DistributionPointName>;
            let reasons: OPTIONAL<ReasonFlags>;
            let cRLIssuer: OPTIONAL<GeneralNames>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                distributionPoint: (_el: _Element): void => {
                    distributionPoint = $._decode_implicit<
                        DistributionPointName
                    >(() => _decode_DistributionPointName)(_el);
                },
                reasons: (_el: _Element): void => {
                    reasons = $._decode_implicit<ReasonFlags>(
                        () => _decode_ReasonFlags
                    )(_el);
                },
                cRLIssuer: (_el: _Element): void => {
                    cRLIssuer = $._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DistributionPoint,
                _extension_additions_list_spec_for_DistributionPoint,
                _root_component_type_list_2_spec_for_DistributionPoint,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DistributionPoint(
                /* SEQUENCE_CONSTRUCTOR_CALL */ distributionPoint,
                reasons,
                cRLIssuer,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DistributionPoint(el);
}
/**
 * @summary Encodes a(n) DistributionPoint into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistributionPoint, encoded as an ASN.1 Element.
 */
export function _encode_DistributionPoint(
    value: DistributionPoint,
    elGetter: $.ASN1Encoder<DistributionPoint>
) {
    if (!_cached_encoder_for_DistributionPoint) {
        _cached_encoder_for_DistributionPoint = function (
            value: DistributionPoint,
            elGetter: $.ASN1Encoder<DistributionPoint>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.distributionPoint ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_DistributionPointName,
                                      $.BER
                                  )(value.distributionPoint, $.BER),
                            /* IF_ABSENT  */ value.reasons === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_ReasonFlags,
                                      $.BER
                                  )(value.reasons, $.BER),
                            /* IF_ABSENT  */ value.cRLIssuer === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_GeneralNames,
                                      $.BER
                                  )(value.cRLIssuer, $.BER),
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
    return _cached_encoder_for_DistributionPoint(value, elGetter);
}

export type CRLDistPointsSyntax<> = DistributionPoint[]; // SequenceOfType
let _cached_decoder_for_CRLDistPointsSyntax: $.ASN1Decoder<
    CRLDistPointsSyntax
> | null = null;
let _cached_encoder_for_CRLDistPointsSyntax: $.ASN1Encoder<
    CRLDistPointsSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CRLDistPointsSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CRLDistPointsSyntax} The decoded data structure.
 */
export function _decode_CRLDistPointsSyntax(el: _Element) {
    if (!_cached_decoder_for_CRLDistPointsSyntax) {
        _cached_decoder_for_CRLDistPointsSyntax = $._decodeSequenceOf<
            DistributionPoint
        >(() => _decode_DistributionPoint);
    }
    return _cached_decoder_for_CRLDistPointsSyntax(el);
}
/**
 * @summary Encodes a(n) CRLDistPointsSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLDistPointsSyntax, encoded as an ASN.1 Element.
 */
export function _encode_CRLDistPointsSyntax(
    value: CRLDistPointsSyntax,
    elGetter: $.ASN1Encoder<CRLDistPointsSyntax>
) {
    if (!_cached_encoder_for_CRLDistPointsSyntax) {
        _cached_encoder_for_CRLDistPointsSyntax = $._encodeSequenceOf<
            DistributionPoint
        >(() => _encode_DistributionPoint, $.BER);
    }
    return _cached_encoder_for_CRLDistPointsSyntax(value, elGetter);
}

/**
 * @summary id_ce_cRLDistributionPoints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-cRLDistributionPoints              OBJECT IDENTIFIER ::= {id-ce 31}
 * ```
 *
 * @constant
 */
export const id_ce_cRLDistributionPoints: OBJECT_IDENTIFIER = new _OID(
    [31],
    id_ce
);

/**
 * @summary cRLDistributionPoints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cRLDistributionPoints EXTENSION ::= {
 *   SYNTAX         CRLDistPointsSyntax
 *   IDENTIFIED BY  id-ce-cRLDistributionPoints }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const cRLDistributionPoints: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CRLDistPointsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_CRLDistPointsSyntax,
    },
    "&id": id_ce_cRLDistributionPoints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary IssuingDistPointSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IssuingDistPointSyntax ::= SEQUENCE {
 *   -- If onlyContainsUserPublicKeyCerts and onlyContainsCACerts are both FALSE,
 *   -- the CRL covers both public-key certificate types
 *   distributionPoint               [0]  DistributionPointName OPTIONAL,
 *   onlyContainsUserPublicKeyCerts  [1]  BOOLEAN DEFAULT FALSE,
 *   onlyContainsCACerts             [2]  BOOLEAN DEFAULT FALSE,
 *   onlySomeReasons                 [3]  ReasonFlags OPTIONAL,
 *   indirectCRL                     [4]  BOOLEAN DEFAULT FALSE,
 *   onlyContainsAttributeCerts      [5]  BOOLEAN OPTIONAL, -- Use is strongly deprecated
 *   ... }
 * ```
 *
 * @class
 */
export class IssuingDistPointSyntax {
    constructor(
        /**
         * @summary `distributionPoint`.
         * @public
         * @readonly
         */
        readonly distributionPoint: OPTIONAL<DistributionPointName>,
        /**
         * @summary `onlyContainsUserPublicKeyCerts`.
         * @public
         * @readonly
         */
        readonly onlyContainsUserPublicKeyCerts: OPTIONAL<BOOLEAN>,
        /**
         * @summary `onlyContainsCACerts`.
         * @public
         * @readonly
         */
        readonly onlyContainsCACerts: OPTIONAL<BOOLEAN>,
        /**
         * @summary `onlySomeReasons`.
         * @public
         * @readonly
         */
        readonly onlySomeReasons: OPTIONAL<ReasonFlags>,
        /**
         * @summary `indirectCRL`.
         * @public
         * @readonly
         */
        readonly indirectCRL: OPTIONAL<BOOLEAN>,
        /**
         * @summary `onlyContainsAttributeCerts`.
         * @public
         * @readonly
         */
        readonly onlyContainsAttributeCerts: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IssuingDistPointSyntax
     * @description
     *
     * This takes an `object` and converts it to a `IssuingDistPointSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IssuingDistPointSyntax`.
     * @returns {IssuingDistPointSyntax}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof IssuingDistPointSyntax]: IssuingDistPointSyntax[_K] }
        >
    ): IssuingDistPointSyntax {
        return new IssuingDistPointSyntax(
            _o.distributionPoint,
            _o.onlyContainsUserPublicKeyCerts,
            _o.onlyContainsCACerts,
            _o.onlySomeReasons,
            _o.indirectCRL,
            _o.onlyContainsAttributeCerts,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `onlyContainsUserPublicKeyCerts`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_onlyContainsUserPublicKeyCerts() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `onlyContainsCACerts`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_onlyContainsCACerts() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `indirectCRL`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_indirectCRL() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of IssuingDistPointSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IssuingDistPointSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "distributionPoint",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "onlyContainsUserPublicKeyCerts",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "onlyContainsCACerts",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "onlySomeReasons",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "indirectCRL",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "onlyContainsAttributeCerts",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of IssuingDistPointSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IssuingDistPointSyntax: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of IssuingDistPointSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IssuingDistPointSyntax: $.ComponentSpec[] = [];
let _cached_decoder_for_IssuingDistPointSyntax: $.ASN1Decoder<
    IssuingDistPointSyntax
> | null = null;
let _cached_encoder_for_IssuingDistPointSyntax: $.ASN1Encoder<
    IssuingDistPointSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) IssuingDistPointSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IssuingDistPointSyntax} The decoded data structure.
 */
export function _decode_IssuingDistPointSyntax(el: _Element) {
    if (!_cached_decoder_for_IssuingDistPointSyntax) {
        _cached_decoder_for_IssuingDistPointSyntax = function (
            el: _Element
        ): IssuingDistPointSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let distributionPoint: OPTIONAL<DistributionPointName>;
            let onlyContainsUserPublicKeyCerts: OPTIONAL<BOOLEAN> =
                IssuingDistPointSyntax._default_value_for_onlyContainsUserPublicKeyCerts;
            let onlyContainsCACerts: OPTIONAL<BOOLEAN> =
                IssuingDistPointSyntax._default_value_for_onlyContainsCACerts;
            let onlySomeReasons: OPTIONAL<ReasonFlags>;
            let indirectCRL: OPTIONAL<BOOLEAN> =
                IssuingDistPointSyntax._default_value_for_indirectCRL;
            let onlyContainsAttributeCerts: OPTIONAL<BOOLEAN>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                distributionPoint: (_el: _Element): void => {
                    distributionPoint = $._decode_implicit<
                        DistributionPointName
                    >(() => _decode_DistributionPointName)(_el);
                },
                onlyContainsUserPublicKeyCerts: (_el: _Element): void => {
                    onlyContainsUserPublicKeyCerts = $._decode_implicit<
                        BOOLEAN
                    >(() => $._decodeBoolean)(_el);
                },
                onlyContainsCACerts: (_el: _Element): void => {
                    onlyContainsCACerts = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                onlySomeReasons: (_el: _Element): void => {
                    onlySomeReasons = $._decode_implicit<ReasonFlags>(
                        () => _decode_ReasonFlags
                    )(_el);
                },
                indirectCRL: (_el: _Element): void => {
                    indirectCRL = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                onlyContainsAttributeCerts: (_el: _Element): void => {
                    onlyContainsAttributeCerts = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IssuingDistPointSyntax,
                _extension_additions_list_spec_for_IssuingDistPointSyntax,
                _root_component_type_list_2_spec_for_IssuingDistPointSyntax,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new IssuingDistPointSyntax(
                /* SEQUENCE_CONSTRUCTOR_CALL */ distributionPoint,
                onlyContainsUserPublicKeyCerts,
                onlyContainsCACerts,
                onlySomeReasons,
                indirectCRL,
                onlyContainsAttributeCerts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_IssuingDistPointSyntax(el);
}
/**
 * @summary Encodes a(n) IssuingDistPointSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IssuingDistPointSyntax, encoded as an ASN.1 Element.
 */
export function _encode_IssuingDistPointSyntax(
    value: IssuingDistPointSyntax,
    elGetter: $.ASN1Encoder<IssuingDistPointSyntax>
) {
    if (!_cached_encoder_for_IssuingDistPointSyntax) {
        _cached_encoder_for_IssuingDistPointSyntax = function (
            value: IssuingDistPointSyntax,
            elGetter: $.ASN1Encoder<IssuingDistPointSyntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.distributionPoint ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_DistributionPointName,
                                      $.BER
                                  )(value.distributionPoint, $.BER),
                            /* IF_DEFAULT */ value.onlyContainsUserPublicKeyCerts ===
                                undefined ||
                            $.deepEq(
                                value.onlyContainsUserPublicKeyCerts,
                                IssuingDistPointSyntax._default_value_for_onlyContainsUserPublicKeyCerts
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(
                                      value.onlyContainsUserPublicKeyCerts,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.onlyContainsCACerts ===
                                undefined ||
                            $.deepEq(
                                value.onlyContainsCACerts,
                                IssuingDistPointSyntax._default_value_for_onlyContainsCACerts
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.onlyContainsCACerts, $.BER),
                            /* IF_ABSENT  */ value.onlySomeReasons === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_ReasonFlags,
                                      $.BER
                                  )(value.onlySomeReasons, $.BER),
                            /* IF_DEFAULT */ value.indirectCRL === undefined ||
                            $.deepEq(
                                value.indirectCRL,
                                IssuingDistPointSyntax._default_value_for_indirectCRL
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.indirectCRL, $.BER),
                            /* IF_ABSENT  */ value.onlyContainsAttributeCerts ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      5,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.onlyContainsAttributeCerts, $.BER),
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
    return _cached_encoder_for_IssuingDistPointSyntax(value, elGetter);
}

/**
 * @summary id_ce_issuingDistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-issuingDistributionPoint           OBJECT IDENTIFIER ::= {id-ce 28}
 * ```
 *
 * @constant
 */
export const id_ce_issuingDistributionPoint: OBJECT_IDENTIFIER = new _OID(
    [28],
    id_ce
);

/**
 * @summary issuingDistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * issuingDistributionPoint EXTENSION ::= {
 *   SYNTAX         IssuingDistPointSyntax
 *   IDENTIFIED BY  id-ce-issuingDistributionPoint }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const issuingDistributionPoint: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_IssuingDistPointSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_IssuingDistPointSyntax,
    },
    "&id": id_ce_issuingDistributionPoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_certificateIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-certificateIssuer                  OBJECT IDENTIFIER ::= {id-ce 29}
 * ```
 *
 * @constant
 */
export const id_ce_certificateIssuer: OBJECT_IDENTIFIER = new _OID([29], id_ce);

/**
 * @summary certificateIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateIssuer EXTENSION ::= {
 *   SYNTAX         GeneralNames
 *   IDENTIFIED BY  id-ce-certificateIssuer }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const certificateIssuer: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_GeneralNames,
    },
    encoderFor: {
        "&ExtnType": _encode_GeneralNames,
    },
    "&id": id_ce_certificateIssuer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type BaseCRLNumber<> = CRLNumber; // DefinedType
let _cached_decoder_for_BaseCRLNumber: $.ASN1Decoder<
    BaseCRLNumber
> | null = null;
let _cached_encoder_for_BaseCRLNumber: $.ASN1Encoder<
    BaseCRLNumber
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) BaseCRLNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BaseCRLNumber} The decoded data structure.
 */
export function _decode_BaseCRLNumber(el: _Element) {
    if (!_cached_decoder_for_BaseCRLNumber) {
        _cached_decoder_for_BaseCRLNumber = _decode_CRLNumber;
    }
    return _cached_decoder_for_BaseCRLNumber(el);
}
/**
 * @summary Encodes a(n) BaseCRLNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BaseCRLNumber, encoded as an ASN.1 Element.
 */
export function _encode_BaseCRLNumber(
    value: BaseCRLNumber,
    elGetter: $.ASN1Encoder<BaseCRLNumber>
) {
    if (!_cached_encoder_for_BaseCRLNumber) {
        _cached_encoder_for_BaseCRLNumber = _encode_CRLNumber;
    }
    return _cached_encoder_for_BaseCRLNumber(value, elGetter);
}

/**
 * @summary id_ce_deltaCRLIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-deltaCRLIndicator                  OBJECT IDENTIFIER ::= {id-ce 27}
 * ```
 *
 * @constant
 */
export const id_ce_deltaCRLIndicator: OBJECT_IDENTIFIER = new _OID([27], id_ce);

/**
 * @summary deltaCRLIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deltaCRLIndicator EXTENSION ::= {
 *   SYNTAX         BaseCRLNumber
 *   IDENTIFIED BY  id-ce-deltaCRLIndicator }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const deltaCRLIndicator: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_BaseCRLNumber,
    },
    encoderFor: {
        "&ExtnType": _encode_BaseCRLNumber,
    },
    "&id": id_ce_deltaCRLIndicator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_baseUpdateTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-baseUpdateTime                     OBJECT IDENTIFIER ::= {id-ce 51}
 * ```
 *
 * @constant
 */
export const id_ce_baseUpdateTime: OBJECT_IDENTIFIER = new _OID([51], id_ce);

/**
 * @summary baseUpdateTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * baseUpdateTime EXTENSION ::= {
 *   SYNTAX         GeneralizedTime
 *   IDENTIFIED BY  id-ce-baseUpdateTime }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const baseUpdateTime: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&ExtnType": $._encodeGeneralizedTime,
    },
    "&id": id_ce_baseUpdateTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_freshestCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-freshestCRL                        OBJECT IDENTIFIER ::= {id-ce 46}
 * ```
 *
 * @constant
 */
export const id_ce_freshestCRL: OBJECT_IDENTIFIER = new _OID([46], id_ce);

/**
 * @summary freshestCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * freshestCRL EXTENSION ::= {
 *   SYNTAX         CRLDistPointsSyntax
 *   IDENTIFIED BY  id-ce-freshestCRL }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const freshestCRL: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CRLDistPointsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_CRLDistPointsSyntax,
    },
    "&id": id_ce_freshestCRL /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type ProtRestriction<> = OBJECT_IDENTIFIER[]; // SequenceOfType
let _cached_decoder_for_ProtRestriction: $.ASN1Decoder<
    ProtRestriction
> | null = null;
let _cached_encoder_for_ProtRestriction: $.ASN1Encoder<
    ProtRestriction
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ProtRestriction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtRestriction} The decoded data structure.
 */
export function _decode_ProtRestriction(el: _Element) {
    if (!_cached_decoder_for_ProtRestriction) {
        _cached_decoder_for_ProtRestriction = $._decodeSequenceOf<
            OBJECT_IDENTIFIER
        >(() => $._decodeObjectIdentifier);
    }
    return _cached_decoder_for_ProtRestriction(el);
}
/**
 * @summary Encodes a(n) ProtRestriction into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtRestriction, encoded as an ASN.1 Element.
 */
export function _encode_ProtRestriction(
    value: ProtRestriction,
    elGetter: $.ASN1Encoder<ProtRestriction>
) {
    if (!_cached_encoder_for_ProtRestriction) {
        _cached_encoder_for_ProtRestriction = $._encodeSequenceOf<
            OBJECT_IDENTIFIER
        >(() => $._encodeObjectIdentifier, $.BER);
    }
    return _cached_encoder_for_ProtRestriction(value, elGetter);
}

/**
 * @summary id_ce_protRestrict
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-protRestrict                       OBJECT IDENTIFIER ::= {id-ce 71}
 * ```
 *
 * @constant
 */
export const id_ce_protRestrict: OBJECT_IDENTIFIER = new _OID([71], id_ce);

/**
 * @summary protRestrict
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protRestrict EXTENSION ::= {
 *   SYNTAX        ProtRestriction
 *   IDENTIFIED BY id-ce-protRestrict }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const protRestrict: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_ProtRestriction,
    },
    encoderFor: {
        "&ExtnType": _encode_ProtRestriction,
    },
    "&id": id_ce_protRestrict /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary SubjectAltPublicKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectAltPublicKeyInfo ::= SEQUENCE {
 *   algorithm              AlgorithmIdentifier{{SupportedAlgorithms}},
 *   subjectAltPublicKey    BIT STRING }
 * ```
 *
 * @class
 */
export class SubjectAltPublicKeyInfo {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: AlgorithmIdentifier,
        /**
         * @summary `subjectAltPublicKey`.
         * @public
         * @readonly
         */
        readonly subjectAltPublicKey: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a SubjectAltPublicKeyInfo
     * @description
     *
     * This takes an `object` and converts it to a `SubjectAltPublicKeyInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubjectAltPublicKeyInfo`.
     * @returns {SubjectAltPublicKeyInfo}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof SubjectAltPublicKeyInfo]: SubjectAltPublicKeyInfo[_K];
            }
        >
    ): SubjectAltPublicKeyInfo {
        return new SubjectAltPublicKeyInfo(
            _o.algorithm,
            _o.subjectAltPublicKey
        );
    }
}
/**
 * @summary The Leading Root Component Types of SubjectAltPublicKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubjectAltPublicKeyInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subjectAltPublicKey",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SubjectAltPublicKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubjectAltPublicKeyInfo: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SubjectAltPublicKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubjectAltPublicKeyInfo: $.ComponentSpec[] = [];
let _cached_decoder_for_SubjectAltPublicKeyInfo: $.ASN1Decoder<
    SubjectAltPublicKeyInfo
> | null = null;
let _cached_encoder_for_SubjectAltPublicKeyInfo: $.ASN1Encoder<
    SubjectAltPublicKeyInfo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SubjectAltPublicKeyInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectAltPublicKeyInfo} The decoded data structure.
 */
export function _decode_SubjectAltPublicKeyInfo(el: _Element) {
    if (!_cached_decoder_for_SubjectAltPublicKeyInfo) {
        _cached_decoder_for_SubjectAltPublicKeyInfo = function (
            el: _Element
        ): SubjectAltPublicKeyInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SubjectAltPublicKeyInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "algorithm";
            sequence[1].name = "subjectAltPublicKey";
            let algorithm!: AlgorithmIdentifier;
            let subjectAltPublicKey!: BIT_STRING;
            algorithm = _decode_AlgorithmIdentifier(sequence[0]);
            subjectAltPublicKey = $._decodeBitString(sequence[1]);
            return new SubjectAltPublicKeyInfo(algorithm, subjectAltPublicKey);
        };
    }
    return _cached_decoder_for_SubjectAltPublicKeyInfo(el);
}
/**
 * @summary Encodes a(n) SubjectAltPublicKeyInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectAltPublicKeyInfo, encoded as an ASN.1 Element.
 */
export function _encode_SubjectAltPublicKeyInfo(
    value: SubjectAltPublicKeyInfo,
    elGetter: $.ASN1Encoder<SubjectAltPublicKeyInfo>
) {
    if (!_cached_encoder_for_SubjectAltPublicKeyInfo) {
        _cached_encoder_for_SubjectAltPublicKeyInfo = function (
            value: SubjectAltPublicKeyInfo,
            elGetter: $.ASN1Encoder<SubjectAltPublicKeyInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.subjectAltPublicKey,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SubjectAltPublicKeyInfo(value, elGetter);
}

/**
 * @summary id_ce_subjectAltPublicKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-subjectAltPublicKeyInfo            OBJECT IDENTIFIER ::= {id-ce 72}
 * ```
 *
 * @constant
 */
export const id_ce_subjectAltPublicKeyInfo: OBJECT_IDENTIFIER = new _OID(
    [72],
    id_ce
);

/**
 * @summary subjectAltPublicKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subjectAltPublicKeyInfo EXTENSION ::= {
 *   SYNTAX           SubjectAltPublicKeyInfo
 *   IDENTIFIED BY    id-ce-subjectAltPublicKeyInfo }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const subjectAltPublicKeyInfo: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_SubjectAltPublicKeyInfo,
    },
    encoderFor: {
        "&ExtnType": _encode_SubjectAltPublicKeyInfo,
    },
    "&id": id_ce_subjectAltPublicKeyInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type AltSignatureAlgorithm<> = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_AltSignatureAlgorithm: $.ASN1Decoder<
    AltSignatureAlgorithm
> | null = null;
let _cached_encoder_for_AltSignatureAlgorithm: $.ASN1Encoder<
    AltSignatureAlgorithm
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AltSignatureAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AltSignatureAlgorithm} The decoded data structure.
 */
export function _decode_AltSignatureAlgorithm(el: _Element) {
    if (!_cached_decoder_for_AltSignatureAlgorithm) {
        _cached_decoder_for_AltSignatureAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_AltSignatureAlgorithm(el);
}
/**
 * @summary Encodes a(n) AltSignatureAlgorithm into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AltSignatureAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_AltSignatureAlgorithm(
    value: AltSignatureAlgorithm,
    elGetter: $.ASN1Encoder<AltSignatureAlgorithm>
) {
    if (!_cached_encoder_for_AltSignatureAlgorithm) {
        _cached_encoder_for_AltSignatureAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_AltSignatureAlgorithm(value, elGetter);
}

/**
 * @summary id_ce_altSignatureAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-altSignatureAlgorithm              OBJECT IDENTIFIER ::= {id-ce 73}
 * ```
 *
 * @constant
 */
export const id_ce_altSignatureAlgorithm: OBJECT_IDENTIFIER = new _OID(
    [73],
    id_ce
);

/**
 * @summary altSignatureAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * altSignatureAlgorithm EXTENSION ::= {
 *  SYNTAX           AltSignatureAlgorithm
 *  IDENTIFIED BY    id-ce-altSignatureAlgorithm }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const altSignatureAlgorithm: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AltSignatureAlgorithm,
    },
    encoderFor: {
        "&ExtnType": _encode_AltSignatureAlgorithm,
    },
    "&id": id_ce_altSignatureAlgorithm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary AltSignatureValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AltSignatureValue  ::=  BIT STRING
 * ```
 */
export type AltSignatureValue = BIT_STRING;
let _cached_decoder_for_AltSignatureValue: $.ASN1Decoder<
    AltSignatureValue
> | null = null;
let _cached_encoder_for_AltSignatureValue: $.ASN1Encoder<
    AltSignatureValue
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AltSignatureValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AltSignatureValue} The decoded data structure.
 */
export function _decode_AltSignatureValue(el: _Element) {
    if (!_cached_decoder_for_AltSignatureValue) {
        _cached_decoder_for_AltSignatureValue = $._decodeBitString;
    }
    return _cached_decoder_for_AltSignatureValue(el);
}
/**
 * @summary Encodes a(n) AltSignatureValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AltSignatureValue, encoded as an ASN.1 Element.
 */
export function _encode_AltSignatureValue(
    value: AltSignatureValue,
    elGetter: $.ASN1Encoder<AltSignatureValue>
) {
    if (!_cached_encoder_for_AltSignatureValue) {
        _cached_encoder_for_AltSignatureValue = $._encodeBitString;
    }
    return _cached_encoder_for_AltSignatureValue(value, elGetter);
}

/**
 * @summary id_ce_altSignatureValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-altSignatureValue                  OBJECT IDENTIFIER ::= {id-ce 74}
 * ```
 *
 * @constant
 */
export const id_ce_altSignatureValue: OBJECT_IDENTIFIER = new _OID([74], id_ce);

/**
 * @summary altSignatureValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * altSignatureValue EXTENSION ::= {
 *   SYNTAX           AltSignatureValue
 *   IDENTIFIED BY    id-ce-altSignatureValue }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const altSignatureValue: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AltSignatureValue,
    },
    encoderFor: {
        "&ExtnType": _encode_AltSignatureValue,
    },
    "&id": id_ce_altSignatureValue /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary AAIssuingDistPointSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AAIssuingDistPointSyntax ::= SEQUENCE {
 *   distributionPoint           [0]  DistributionPointName OPTIONAL,
 *   onlySomeReasons             [1]  ReasonFlags OPTIONAL,
 *   indirectCRL                 [2]  BOOLEAN DEFAULT FALSE,
 *   containsUserAttributeCerts  [3]  BOOLEAN DEFAULT TRUE,
 *   containsAACerts             [4]  BOOLEAN DEFAULT TRUE,
 *   containsSOAPublicKeyCerts   [5]  BOOLEAN DEFAULT TRUE,
 *   ... }
 * ```
 *
 * @class
 */
export class AAIssuingDistPointSyntax {
    constructor(
        /**
         * @summary `distributionPoint`.
         * @public
         * @readonly
         */
        readonly distributionPoint: OPTIONAL<DistributionPointName>,
        /**
         * @summary `onlySomeReasons`.
         * @public
         * @readonly
         */
        readonly onlySomeReasons: OPTIONAL<ReasonFlags>,
        /**
         * @summary `indirectCRL`.
         * @public
         * @readonly
         */
        readonly indirectCRL: OPTIONAL<BOOLEAN>,
        /**
         * @summary `containsUserAttributeCerts`.
         * @public
         * @readonly
         */
        readonly containsUserAttributeCerts: OPTIONAL<BOOLEAN>,
        /**
         * @summary `containsAACerts`.
         * @public
         * @readonly
         */
        readonly containsAACerts: OPTIONAL<BOOLEAN>,
        /**
         * @summary `containsSOAPublicKeyCerts`.
         * @public
         * @readonly
         */
        readonly containsSOAPublicKeyCerts: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AAIssuingDistPointSyntax
     * @description
     *
     * This takes an `object` and converts it to a `AAIssuingDistPointSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AAIssuingDistPointSyntax`.
     * @returns {AAIssuingDistPointSyntax}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AAIssuingDistPointSyntax]: AAIssuingDistPointSyntax[_K];
            }
        >
    ): AAIssuingDistPointSyntax {
        return new AAIssuingDistPointSyntax(
            _o.distributionPoint,
            _o.onlySomeReasons,
            _o.indirectCRL,
            _o.containsUserAttributeCerts,
            _o.containsAACerts,
            _o.containsSOAPublicKeyCerts,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `indirectCRL`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_indirectCRL() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `containsUserAttributeCerts`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_containsUserAttributeCerts() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `containsAACerts`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_containsAACerts() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `containsSOAPublicKeyCerts`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_containsSOAPublicKeyCerts() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of AAIssuingDistPointSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AAIssuingDistPointSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "distributionPoint",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "onlySomeReasons",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "indirectCRL",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "containsUserAttributeCerts",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "containsAACerts",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "containsSOAPublicKeyCerts",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AAIssuingDistPointSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AAIssuingDistPointSyntax: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AAIssuingDistPointSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AAIssuingDistPointSyntax: $.ComponentSpec[] = [];
let _cached_decoder_for_AAIssuingDistPointSyntax: $.ASN1Decoder<
    AAIssuingDistPointSyntax
> | null = null;
let _cached_encoder_for_AAIssuingDistPointSyntax: $.ASN1Encoder<
    AAIssuingDistPointSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AAIssuingDistPointSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AAIssuingDistPointSyntax} The decoded data structure.
 */
export function _decode_AAIssuingDistPointSyntax(el: _Element) {
    if (!_cached_decoder_for_AAIssuingDistPointSyntax) {
        _cached_decoder_for_AAIssuingDistPointSyntax = function (
            el: _Element
        ): AAIssuingDistPointSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let distributionPoint: OPTIONAL<DistributionPointName>;
            let onlySomeReasons: OPTIONAL<ReasonFlags>;
            let indirectCRL: OPTIONAL<BOOLEAN> =
                AAIssuingDistPointSyntax._default_value_for_indirectCRL;
            let containsUserAttributeCerts: OPTIONAL<BOOLEAN> =
                AAIssuingDistPointSyntax._default_value_for_containsUserAttributeCerts;
            let containsAACerts: OPTIONAL<BOOLEAN> =
                AAIssuingDistPointSyntax._default_value_for_containsAACerts;
            let containsSOAPublicKeyCerts: OPTIONAL<BOOLEAN> =
                AAIssuingDistPointSyntax._default_value_for_containsSOAPublicKeyCerts;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                distributionPoint: (_el: _Element): void => {
                    distributionPoint = $._decode_implicit<
                        DistributionPointName
                    >(() => _decode_DistributionPointName)(_el);
                },
                onlySomeReasons: (_el: _Element): void => {
                    onlySomeReasons = $._decode_implicit<ReasonFlags>(
                        () => _decode_ReasonFlags
                    )(_el);
                },
                indirectCRL: (_el: _Element): void => {
                    indirectCRL = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                containsUserAttributeCerts: (_el: _Element): void => {
                    containsUserAttributeCerts = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                containsAACerts: (_el: _Element): void => {
                    containsAACerts = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                containsSOAPublicKeyCerts: (_el: _Element): void => {
                    containsSOAPublicKeyCerts = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AAIssuingDistPointSyntax,
                _extension_additions_list_spec_for_AAIssuingDistPointSyntax,
                _root_component_type_list_2_spec_for_AAIssuingDistPointSyntax,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AAIssuingDistPointSyntax(
                /* SEQUENCE_CONSTRUCTOR_CALL */ distributionPoint,
                onlySomeReasons,
                indirectCRL,
                containsUserAttributeCerts,
                containsAACerts,
                containsSOAPublicKeyCerts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AAIssuingDistPointSyntax(el);
}
/**
 * @summary Encodes a(n) AAIssuingDistPointSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AAIssuingDistPointSyntax, encoded as an ASN.1 Element.
 */
export function _encode_AAIssuingDistPointSyntax(
    value: AAIssuingDistPointSyntax,
    elGetter: $.ASN1Encoder<AAIssuingDistPointSyntax>
) {
    if (!_cached_encoder_for_AAIssuingDistPointSyntax) {
        _cached_encoder_for_AAIssuingDistPointSyntax = function (
            value: AAIssuingDistPointSyntax,
            elGetter: $.ASN1Encoder<AAIssuingDistPointSyntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.distributionPoint ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_DistributionPointName,
                                      $.BER
                                  )(value.distributionPoint, $.BER),
                            /* IF_ABSENT  */ value.onlySomeReasons === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_ReasonFlags,
                                      $.BER
                                  )(value.onlySomeReasons, $.BER),
                            /* IF_DEFAULT */ value.indirectCRL === undefined ||
                            $.deepEq(
                                value.indirectCRL,
                                AAIssuingDistPointSyntax._default_value_for_indirectCRL
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.indirectCRL, $.BER),
                            /* IF_DEFAULT */ value.containsUserAttributeCerts ===
                                undefined ||
                            $.deepEq(
                                value.containsUserAttributeCerts,
                                AAIssuingDistPointSyntax._default_value_for_containsUserAttributeCerts
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.containsUserAttributeCerts, $.BER),
                            /* IF_DEFAULT */ value.containsAACerts ===
                                undefined ||
                            $.deepEq(
                                value.containsAACerts,
                                AAIssuingDistPointSyntax._default_value_for_containsAACerts
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.containsAACerts, $.BER),
                            /* IF_DEFAULT */ value.containsSOAPublicKeyCerts ===
                                undefined ||
                            $.deepEq(
                                value.containsSOAPublicKeyCerts,
                                AAIssuingDistPointSyntax._default_value_for_containsSOAPublicKeyCerts
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      5,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.containsSOAPublicKeyCerts, $.BER),
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
    return _cached_encoder_for_AAIssuingDistPointSyntax(value, elGetter);
}

/**
 * @summary id_ce_aAissuingDistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-aAissuingDistributionPoint         OBJECT IDENTIFIER ::= {id-ce 63}
 * ```
 *
 * @constant
 */
export const id_ce_aAissuingDistributionPoint: OBJECT_IDENTIFIER = new _OID(
    [63],
    id_ce
);

/**
 * @summary aAissuingDistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aAissuingDistributionPoint EXTENSION ::= {
 *   SYNTAX         AAIssuingDistPointSyntax
 *   IDENTIFIED BY  id-ce-aAissuingDistributionPoint }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const aAissuingDistributionPoint: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AAIssuingDistPointSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AAIssuingDistPointSyntax,
    },
    "&id": id_ce_aAissuingDistributionPoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary CertificateExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateExactAssertion ::= SEQUENCE {
 *   serialNumber  CertificateSerialNumber,
 *   issuer        Name,
 *   ... }
 * ```
 *
 * @class
 */
export class CertificateExactAssertion {
    constructor(
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificateExactAssertion
     * @description
     *
     * This takes an `object` and converts it to a `CertificateExactAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateExactAssertion`.
     * @returns {CertificateExactAssertion}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertificateExactAssertion]: CertificateExactAssertion[_K];
            }
        >
    ): CertificateExactAssertion {
        return new CertificateExactAssertion(
            _o.serialNumber,
            _o.issuer,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertificateExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateExactAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("issuer", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of CertificateExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateExactAssertion: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertificateExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateExactAssertion: $.ComponentSpec[] = [];
let _cached_decoder_for_CertificateExactAssertion: $.ASN1Decoder<
    CertificateExactAssertion
> | null = null;
let _cached_encoder_for_CertificateExactAssertion: $.ASN1Encoder<
    CertificateExactAssertion
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateExactAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateExactAssertion} The decoded data structure.
 */
export function _decode_CertificateExactAssertion(el: _Element) {
    if (!_cached_decoder_for_CertificateExactAssertion) {
        _cached_decoder_for_CertificateExactAssertion = function (
            el: _Element
        ): CertificateExactAssertion {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertificateExactAssertion contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "serialNumber";
            sequence[1].name = "issuer";
            let serialNumber!: CertificateSerialNumber;
            let issuer!: Name;
            serialNumber = _decode_CertificateSerialNumber(sequence[0]);
            issuer = _decode_Name(sequence[1]);
            return new CertificateExactAssertion(
                serialNumber,
                issuer,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertificateExactAssertion(el);
}
/**
 * @summary Encodes a(n) CertificateExactAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateExactAssertion, encoded as an ASN.1 Element.
 */
export function _encode_CertificateExactAssertion(
    value: CertificateExactAssertion,
    elGetter: $.ASN1Encoder<CertificateExactAssertion>
) {
    if (!_cached_encoder_for_CertificateExactAssertion) {
        _cached_encoder_for_CertificateExactAssertion = function (
            value: CertificateExactAssertion,
            elGetter: $.ASN1Encoder<CertificateExactAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Name(value.issuer, $.BER),
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
    return _cached_encoder_for_CertificateExactAssertion(value, elGetter);
}

/**
 * @summary id_ldx_certExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ldx-certExactAssertion         OBJECT IDENTIFIER ::= {id-ldx 1}
 * ```
 *
 * @constant
 */
export const id_ldx_certExactAssertion: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_ldx
);

/**
 * @summary certExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certExactAssertion SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate Exact Assertion"
 *   DIRECTORY SYNTAX  CertificateExactAssertion
 *   ID                id-ldx-certExactAssertion }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const certExactAssertion: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificateExactAssertion,
    },
    encoderFor: {
        "&Type": _encode_CertificateExactAssertion,
    },
    "&ldapDesc": "X.509 Certificate Exact Assertion" /* OBJECT_FIELD_SETTING */,
    "&id": id_ldx_certExactAssertion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_certificateExactMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-certificateExactMatch       OBJECT IDENTIFIER ::= {id-mr 34}
 * ```
 *
 * @constant
 */
export const id_mr_certificateExactMatch: OBJECT_IDENTIFIER = new _OID(
    [34],
    id_mr
);

/**
 * @summary certificateExactMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateExactMatch MATCHING-RULE ::= {
 *   SYNTAX       CertificateExactAssertion
 *   LDAP-SYNTAX  certExactAssertion.&id
 *   LDAP-NAME    {"certificateExactMatch"}
 *   LDAP-DESC    "X.509 Certificate Exact Match"
 *   ID           id-mr-certificateExactMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const certificateExactMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CertificateExactAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_CertificateExactAssertion,
    },
    "&ldapSyntax": certExactAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 Certificate Exact Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_certificateExactMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary AltNameType_builtinNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AltNameType-builtinNameForm ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_AltNameType_builtinNameForm {
    rfc822Name = 1,
    dNSName = 2,
    x400Address = 3,
    directoryName = 4,
    ediPartyName = 5,
    uniformResourceIdentifier = 6,
    iPAddress = 7,
    registeredId = 8,
}
/**
 * @summary AltNameType_builtinNameForm
 */
export type AltNameType_builtinNameForm =
    | _enum_for_AltNameType_builtinNameForm
    | ENUMERATED;
/**
 * @summary AltNameType_builtinNameForm_rfc822Name
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_rfc822Name: AltNameType_builtinNameForm = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AltNameType_builtinNameForm_dNSName
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_dNSName: AltNameType_builtinNameForm = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AltNameType_builtinNameForm_x400Address
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_x400Address: AltNameType_builtinNameForm = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AltNameType_builtinNameForm_directoryName
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_directoryName: AltNameType_builtinNameForm = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AltNameType_builtinNameForm_ediPartyName
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_ediPartyName: AltNameType_builtinNameForm = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AltNameType_builtinNameForm_uniformResourceIdentifier
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_uniformResourceIdentifier: AltNameType_builtinNameForm = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AltNameType_builtinNameForm_iPAddress
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_iPAddress: AltNameType_builtinNameForm = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AltNameType_builtinNameForm_registeredId
 * @constant
 * @type {number}
 */
export const AltNameType_builtinNameForm_registeredId: AltNameType_builtinNameForm = 8; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_AltNameType_builtinNameForm: $.ASN1Decoder<
    AltNameType_builtinNameForm
> | null = null;
let _cached_encoder_for_AltNameType_builtinNameForm: $.ASN1Encoder<
    AltNameType_builtinNameForm
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AltNameType_builtinNameForm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AltNameType_builtinNameForm} The decoded data structure.
 */
export function _decode_AltNameType_builtinNameForm(el: _Element) {
    if (!_cached_decoder_for_AltNameType_builtinNameForm) {
        _cached_decoder_for_AltNameType_builtinNameForm = $._decodeEnumerated;
    }
    return _cached_decoder_for_AltNameType_builtinNameForm(el);
}
/**
 * @summary Encodes a(n) AltNameType_builtinNameForm into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AltNameType_builtinNameForm, encoded as an ASN.1 Element.
 */
export function _encode_AltNameType_builtinNameForm(
    value: AltNameType_builtinNameForm,
    elGetter: $.ASN1Encoder<AltNameType_builtinNameForm>
) {
    if (!_cached_encoder_for_AltNameType_builtinNameForm) {
        _cached_encoder_for_AltNameType_builtinNameForm = $._encodeEnumerated;
    }
    return _cached_encoder_for_AltNameType_builtinNameForm(value, elGetter);
}

/**
 * @summary AltNameType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AltNameType  ::=  CHOICE {
 *   builtinNameForm  ENUMERATED {
 *     rfc822Name                (1),
 *     dNSName                   (2),
 *     x400Address               (3),
 *     directoryName             (4),
 *     ediPartyName              (5),
 *     uniformResourceIdentifier (6),
 *     iPAddress                 (7),
 *     registeredId              (8),
 *     ...},
 *   otherNameForm    OBJECT IDENTIFIER,
 *   ... }
 * ```
 */
export type AltNameType =
    | { builtinNameForm: AltNameType_builtinNameForm } /* CHOICE_ALT_ROOT */
    | { otherNameForm: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_AltNameType: $.ASN1Decoder<AltNameType> | null = null;
let _cached_encoder_for_AltNameType: $.ASN1Encoder<AltNameType> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AltNameType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AltNameType} The decoded data structure.
 */
export function _decode_AltNameType(el: _Element) {
    if (!_cached_decoder_for_AltNameType) {
        _cached_decoder_for_AltNameType = $._decode_extensible_choice<
            AltNameType
        >({
            "UNIVERSAL 10": [
                "builtinNameForm",
                _decode_AltNameType_builtinNameForm,
            ],
            "UNIVERSAL 6": ["otherNameForm", $._decodeObjectIdentifier],
        });
    }
    return _cached_decoder_for_AltNameType(el);
}
/**
 * @summary Encodes a(n) AltNameType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AltNameType, encoded as an ASN.1 Element.
 */
export function _encode_AltNameType(
    value: AltNameType,
    elGetter: $.ASN1Encoder<AltNameType>
) {
    if (!_cached_encoder_for_AltNameType) {
        _cached_encoder_for_AltNameType = $._encode_choice<AltNameType>(
            {
                builtinNameForm: _encode_AltNameType_builtinNameForm,
                otherNameForm: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_AltNameType(value, elGetter);
}

export type CertPolicySet<> = CertPolicyId[]; // SequenceOfType
let _cached_decoder_for_CertPolicySet: $.ASN1Decoder<
    CertPolicySet
> | null = null;
let _cached_encoder_for_CertPolicySet: $.ASN1Encoder<
    CertPolicySet
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertPolicySet
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertPolicySet} The decoded data structure.
 */
export function _decode_CertPolicySet(el: _Element) {
    if (!_cached_decoder_for_CertPolicySet) {
        _cached_decoder_for_CertPolicySet = $._decodeSequenceOf<CertPolicyId>(
            () => _decode_CertPolicyId
        );
    }
    return _cached_decoder_for_CertPolicySet(el);
}
/**
 * @summary Encodes a(n) CertPolicySet into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertPolicySet, encoded as an ASN.1 Element.
 */
export function _encode_CertPolicySet(
    value: CertPolicySet,
    elGetter: $.ASN1Encoder<CertPolicySet>
) {
    if (!_cached_encoder_for_CertPolicySet) {
        _cached_encoder_for_CertPolicySet = $._encodeSequenceOf<CertPolicyId>(
            () => _encode_CertPolicyId,
            $.BER
        );
    }
    return _cached_encoder_for_CertPolicySet(value, elGetter);
}

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
        _o: Partial<
            { [_K in keyof CertificateAssertion]: CertificateAssertion[_K] }
        >
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
/**
 * @summary The Trailing Root Component Types of CertificateAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateAssertion: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertificateAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateAssertion: $.ComponentSpec[] = [];
let _cached_decoder_for_CertificateAssertion: $.ASN1Decoder<
    CertificateAssertion
> | null = null;
let _cached_encoder_for_CertificateAssertion: $.ASN1Encoder<
    CertificateAssertion
> | null = null;
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
                    issuer = $._decode_implicit<Name>(() => _decode_Name)(_el);
                },
                subjectKeyIdentifier: (_el: _Element): void => {
                    subjectKeyIdentifier = $._decode_implicit<
                        SubjectKeyIdentifier
                    >(() => _decode_SubjectKeyIdentifier)(_el);
                },
                authorityKeyIdentifier: (_el: _Element): void => {
                    authorityKeyIdentifier = $._decode_implicit<
                        AuthorityKeyIdentifier
                    >(() => _decode_AuthorityKeyIdentifier)(_el);
                },
                certificateValid: (_el: _Element): void => {
                    certificateValid = $._decode_implicit<Time>(
                        () => _decode_Time
                    )(_el);
                },
                privateKeyValid: (_el: _Element): void => {
                    privateKeyValid = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                subjectPublicKeyAlgID: (_el: _Element): void => {
                    subjectPublicKeyAlgID = $._decode_implicit<
                        OBJECT_IDENTIFIER
                    >(() => $._decodeObjectIdentifier)(_el);
                },
                keyUsage: (_el: _Element): void => {
                    keyUsage = $._decode_implicit<KeyUsage>(
                        () => _decode_KeyUsage
                    )(_el);
                },
                subjectAltName: (_el: _Element): void => {
                    subjectAltName = $._decode_implicit<AltNameType>(
                        () => _decode_AltNameType
                    )(_el);
                },
                policy: (_el: _Element): void => {
                    policy = $._decode_implicit<CertPolicySet>(
                        () => _decode_CertPolicySet
                    )(_el);
                },
                pathToName: (_el: _Element): void => {
                    pathToName = $._decode_implicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                subject: (_el: _Element): void => {
                    subject = $._decode_implicit<Name>(() => _decode_Name)(_el);
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
                                : $._encode_implicit(
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
                                : $._encode_implicit(
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
                                : $._encode_implicit(
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
                                : $._encode_implicit(
                                      _TagClass.context,
                                      10,
                                      () => _encode_Name,
                                      $.BER
                                  )(value.pathToName, $.BER),
                            /* IF_ABSENT  */ value.subject === undefined
                                ? undefined
                                : $._encode_implicit(
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

/**
 * @summary id_ldx_certAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ldx-certAssertion              OBJECT IDENTIFIER ::= {id-ldx 2}
 * ```
 *
 * @constant
 */
export const id_ldx_certAssertion: OBJECT_IDENTIFIER = new _OID([2], id_ldx);

/**
 * @summary certAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certAssertion SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate Assertion"
 *   DIRECTORY SYNTAX  CertificateAssertion
 *   ID                id-ldx-certAssertion }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const certAssertion: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificateAssertion,
    },
    encoderFor: {
        "&Type": _encode_CertificateAssertion,
    },
    "&ldapDesc": "X.509 Certificate Assertion" /* OBJECT_FIELD_SETTING */,
    "&id": id_ldx_certAssertion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_certificateMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-certificateMatch            OBJECT IDENTIFIER ::= {id-mr 35}
 * ```
 *
 * @constant
 */
export const id_mr_certificateMatch: OBJECT_IDENTIFIER = new _OID([35], id_mr);

/**
 * @summary certificateMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateMatch MATCHING-RULE ::= {
 *   SYNTAX       CertificateAssertion
 *   LDAP-SYNTAX  certAssertion.&id
 *   LDAP-NAME    {"certificateMatch"}
 *   LDAP-DESC    "X.509 Certificate Match"
 *   ID           id-mr-certificateMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const certificateMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CertificateAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_CertificateAssertion,
    },
    "&ldapSyntax": certAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 Certificate Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_certificateMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary CertificatePairExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificatePairExactAssertion ::= SEQUENCE {
 *   issuedToThisCAAssertion  [0]  CertificateExactAssertion OPTIONAL,
 *   issuedByThisCAAssertion  [1]  CertificateExactAssertion OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS { ..., issuedToThisCAAssertion  PRESENT } |
 *    WITH COMPONENTS { ..., issuedByThisCAAssertion  PRESENT } )
 * ```
 *
 * @class
 */
export class CertificatePairExactAssertion {
    constructor(
        /**
         * @summary `issuedToThisCAAssertion`.
         * @public
         * @readonly
         */
        readonly issuedToThisCAAssertion: OPTIONAL<CertificateExactAssertion>,
        /**
         * @summary `issuedByThisCAAssertion`.
         * @public
         * @readonly
         */
        readonly issuedByThisCAAssertion: OPTIONAL<CertificateExactAssertion>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificatePairExactAssertion
     * @description
     *
     * This takes an `object` and converts it to a `CertificatePairExactAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificatePairExactAssertion`.
     * @returns {CertificatePairExactAssertion}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertificatePairExactAssertion]: CertificatePairExactAssertion[_K];
            }
        >
    ): CertificatePairExactAssertion {
        return new CertificatePairExactAssertion(
            _o.issuedToThisCAAssertion,
            _o.issuedByThisCAAssertion,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertificatePairExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificatePairExactAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "issuedToThisCAAssertion",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "issuedByThisCAAssertion",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertificatePairExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificatePairExactAssertion: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertificatePairExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificatePairExactAssertion: $.ComponentSpec[] = [];
let _cached_decoder_for_CertificatePairExactAssertion: $.ASN1Decoder<
    CertificatePairExactAssertion
> | null = null;
let _cached_encoder_for_CertificatePairExactAssertion: $.ASN1Encoder<
    CertificatePairExactAssertion
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertificatePairExactAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificatePairExactAssertion} The decoded data structure.
 */
export function _decode_CertificatePairExactAssertion(el: _Element) {
    if (!_cached_decoder_for_CertificatePairExactAssertion) {
        _cached_decoder_for_CertificatePairExactAssertion = function (
            el: _Element
        ): CertificatePairExactAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuedToThisCAAssertion: OPTIONAL<CertificateExactAssertion>;
            let issuedByThisCAAssertion: OPTIONAL<CertificateExactAssertion>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                issuedToThisCAAssertion: (_el: _Element): void => {
                    issuedToThisCAAssertion = $._decode_implicit<
                        CertificateExactAssertion
                    >(() => _decode_CertificateExactAssertion)(_el);
                },
                issuedByThisCAAssertion: (_el: _Element): void => {
                    issuedByThisCAAssertion = $._decode_implicit<
                        CertificateExactAssertion
                    >(() => _decode_CertificateExactAssertion)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificatePairExactAssertion,
                _extension_additions_list_spec_for_CertificatePairExactAssertion,
                _root_component_type_list_2_spec_for_CertificatePairExactAssertion,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificatePairExactAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ issuedToThisCAAssertion,
                issuedByThisCAAssertion,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertificatePairExactAssertion(el);
}
/**
 * @summary Encodes a(n) CertificatePairExactAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificatePairExactAssertion, encoded as an ASN.1 Element.
 */
export function _encode_CertificatePairExactAssertion(
    value: CertificatePairExactAssertion,
    elGetter: $.ASN1Encoder<CertificatePairExactAssertion>
) {
    if (!_cached_encoder_for_CertificatePairExactAssertion) {
        _cached_encoder_for_CertificatePairExactAssertion = function (
            value: CertificatePairExactAssertion,
            elGetter: $.ASN1Encoder<CertificatePairExactAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.issuedToThisCAAssertion ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_CertificateExactAssertion,
                                      $.BER
                                  )(value.issuedToThisCAAssertion, $.BER),
                            /* IF_ABSENT  */ value.issuedByThisCAAssertion ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_CertificateExactAssertion,
                                      $.BER
                                  )(value.issuedByThisCAAssertion, $.BER),
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
    return _cached_encoder_for_CertificatePairExactAssertion(value, elGetter);
}

/**
 * @summary id_ldx_certPairExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ldx-certPairExactAssertion     OBJECT IDENTIFIER ::= {id-ldx 3}
 * ```
 *
 * @constant
 */
export const id_ldx_certPairExactAssertion: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_ldx
);

/**
 * @summary certPairExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certPairExactAssertion SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate Pair Exact Assertion"
 *   DIRECTORY SYNTAX  CertificatePairExactAssertion
 *   ID                id-ldx-certPairExactAssertion }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const certPairExactAssertion: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificatePairExactAssertion,
    },
    encoderFor: {
        "&Type": _encode_CertificatePairExactAssertion,
    },
    "&ldapDesc":
        "X.509 Certificate Pair Exact Assertion" /* OBJECT_FIELD_SETTING */,
    "&id": id_ldx_certPairExactAssertion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_certificatePairExactMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-certificatePairExactMatch   OBJECT IDENTIFIER ::= {id-mr 36}
 * ```
 *
 * @constant
 */
export const id_mr_certificatePairExactMatch: OBJECT_IDENTIFIER = new _OID(
    [36],
    id_mr
);

/**
 * @summary certificatePairExactMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificatePairExactMatch MATCHING-RULE ::= {
 *   SYNTAX       CertificatePairExactAssertion
 *   LDAP-SYNTAX  certPairExactAssertion.&id
 *   LDAP-NAME    {"certificatePairExactMatch"}
 *   LDAP-DESC    "X.509 Certificate Pair Exact Match"
 *   ID           id-mr-certificatePairExactMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const certificatePairExactMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CertificatePairExactAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_CertificatePairExactAssertion,
    },
    "&ldapSyntax": certPairExactAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc":
        "X.509 Certificate Pair Exact Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_certificatePairExactMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary CertificatePairAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificatePairAssertion ::= SEQUENCE {
 *   issuedToThisCAAssertion  [0]  CertificateAssertion OPTIONAL,
 *   issuedByThisCAAssertion  [1]  CertificateAssertion OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS {..., issuedToThisCAAssertion  PRESENT } |
 *    WITH COMPONENTS {..., issuedByThisCAAssertion  PRESENT } )
 * ```
 *
 * @class
 */
export class CertificatePairAssertion {
    constructor(
        /**
         * @summary `issuedToThisCAAssertion`.
         * @public
         * @readonly
         */
        readonly issuedToThisCAAssertion: OPTIONAL<CertificateAssertion>,
        /**
         * @summary `issuedByThisCAAssertion`.
         * @public
         * @readonly
         */
        readonly issuedByThisCAAssertion: OPTIONAL<CertificateAssertion>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificatePairAssertion
     * @description
     *
     * This takes an `object` and converts it to a `CertificatePairAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificatePairAssertion`.
     * @returns {CertificatePairAssertion}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertificatePairAssertion]: CertificatePairAssertion[_K];
            }
        >
    ): CertificatePairAssertion {
        return new CertificatePairAssertion(
            _o.issuedToThisCAAssertion,
            _o.issuedByThisCAAssertion,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertificatePairAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificatePairAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "issuedToThisCAAssertion",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "issuedByThisCAAssertion",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertificatePairAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificatePairAssertion: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertificatePairAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificatePairAssertion: $.ComponentSpec[] = [];
let _cached_decoder_for_CertificatePairAssertion: $.ASN1Decoder<
    CertificatePairAssertion
> | null = null;
let _cached_encoder_for_CertificatePairAssertion: $.ASN1Encoder<
    CertificatePairAssertion
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertificatePairAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificatePairAssertion} The decoded data structure.
 */
export function _decode_CertificatePairAssertion(el: _Element) {
    if (!_cached_decoder_for_CertificatePairAssertion) {
        _cached_decoder_for_CertificatePairAssertion = function (
            el: _Element
        ): CertificatePairAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuedToThisCAAssertion: OPTIONAL<CertificateAssertion>;
            let issuedByThisCAAssertion: OPTIONAL<CertificateAssertion>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                issuedToThisCAAssertion: (_el: _Element): void => {
                    issuedToThisCAAssertion = $._decode_implicit<
                        CertificateAssertion
                    >(() => _decode_CertificateAssertion)(_el);
                },
                issuedByThisCAAssertion: (_el: _Element): void => {
                    issuedByThisCAAssertion = $._decode_implicit<
                        CertificateAssertion
                    >(() => _decode_CertificateAssertion)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificatePairAssertion,
                _extension_additions_list_spec_for_CertificatePairAssertion,
                _root_component_type_list_2_spec_for_CertificatePairAssertion,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificatePairAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ issuedToThisCAAssertion,
                issuedByThisCAAssertion,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertificatePairAssertion(el);
}
/**
 * @summary Encodes a(n) CertificatePairAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificatePairAssertion, encoded as an ASN.1 Element.
 */
export function _encode_CertificatePairAssertion(
    value: CertificatePairAssertion,
    elGetter: $.ASN1Encoder<CertificatePairAssertion>
) {
    if (!_cached_encoder_for_CertificatePairAssertion) {
        _cached_encoder_for_CertificatePairAssertion = function (
            value: CertificatePairAssertion,
            elGetter: $.ASN1Encoder<CertificatePairAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.issuedToThisCAAssertion ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_CertificateAssertion,
                                      $.BER
                                  )(value.issuedToThisCAAssertion, $.BER),
                            /* IF_ABSENT  */ value.issuedByThisCAAssertion ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_CertificateAssertion,
                                      $.BER
                                  )(value.issuedByThisCAAssertion, $.BER),
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
    return _cached_encoder_for_CertificatePairAssertion(value, elGetter);
}

/**
 * @summary id_ldx_certPairAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ldx-certPairAssertion          OBJECT IDENTIFIER ::= {id-ldx 4}
 * ```
 *
 * @constant
 */
export const id_ldx_certPairAssertion: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_ldx
);

/**
 * @summary certPairAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certPairAssertion SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate Pair Assertion"
 *   DIRECTORY SYNTAX  CertificatePairAssertion
 *   ID                id-ldx-certPairAssertion }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const certPairAssertion: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificatePairAssertion,
    },
    encoderFor: {
        "&Type": _encode_CertificatePairAssertion,
    },
    "&ldapDesc": "X.509 Certificate Pair Assertion" /* OBJECT_FIELD_SETTING */,
    "&id": id_ldx_certPairAssertion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_certificatePairMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-certificatePairMatch        OBJECT IDENTIFIER ::= {id-mr 37}
 * ```
 *
 * @constant
 */
export const id_mr_certificatePairMatch: OBJECT_IDENTIFIER = new _OID(
    [37],
    id_mr
);

/**
 * @summary certificatePairMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificatePairMatch MATCHING-RULE ::= {
 *   SYNTAX       CertificatePairAssertion
 *   LDAP-SYNTAX  certPairAssertion.&id
 *   LDAP-NAME    {"certificatePairMatch"}
 *   LDAP-DESC    "X.509 Certificate Pair Match"
 *   ID           id-mr-certificatePairMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const certificatePairMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CertificatePairAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_CertificatePairAssertion,
    },
    "&ldapSyntax": certPairAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 Certificate Pair Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_certificatePairMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary CertificateListExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateListExactAssertion ::= SEQUENCE {
 *   issuer             Name,
 *   thisUpdate         Time,
 *   distributionPoint  DistributionPointName OPTIONAL }
 * ```
 *
 * @class
 */
export class CertificateListExactAssertion {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `thisUpdate`.
         * @public
         * @readonly
         */
        readonly thisUpdate: Time,
        /**
         * @summary `distributionPoint`.
         * @public
         * @readonly
         */
        readonly distributionPoint: OPTIONAL<DistributionPointName>
    ) {}

    /**
     * @summary Restructures an object into a CertificateListExactAssertion
     * @description
     *
     * This takes an `object` and converts it to a `CertificateListExactAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateListExactAssertion`.
     * @returns {CertificateListExactAssertion}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertificateListExactAssertion]: CertificateListExactAssertion[_K];
            }
        >
    ): CertificateListExactAssertion {
        return new CertificateListExactAssertion(
            _o.issuer,
            _o.thisUpdate,
            _o.distributionPoint
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertificateListExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateListExactAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec("issuer", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("thisUpdate", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "distributionPoint",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertificateListExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateListExactAssertion: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertificateListExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateListExactAssertion: $.ComponentSpec[] = [];
let _cached_decoder_for_CertificateListExactAssertion: $.ASN1Decoder<
    CertificateListExactAssertion
> | null = null;
let _cached_encoder_for_CertificateListExactAssertion: $.ASN1Encoder<
    CertificateListExactAssertion
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateListExactAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateListExactAssertion} The decoded data structure.
 */
export function _decode_CertificateListExactAssertion(el: _Element) {
    if (!_cached_decoder_for_CertificateListExactAssertion) {
        _cached_decoder_for_CertificateListExactAssertion = function (
            el: _Element
        ): CertificateListExactAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuer!: Name;
            let thisUpdate!: Time;
            let distributionPoint: OPTIONAL<DistributionPointName>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                issuer: (_el: _Element): void => {
                    issuer = _decode_Name(_el);
                },
                thisUpdate: (_el: _Element): void => {
                    thisUpdate = _decode_Time(_el);
                },
                distributionPoint: (_el: _Element): void => {
                    distributionPoint = _decode_DistributionPointName(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificateListExactAssertion,
                _extension_additions_list_spec_for_CertificateListExactAssertion,
                _root_component_type_list_2_spec_for_CertificateListExactAssertion,
                undefined
            );
            return new CertificateListExactAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ issuer,
                thisUpdate,
                distributionPoint
            );
        };
    }
    return _cached_decoder_for_CertificateListExactAssertion(el);
}
/**
 * @summary Encodes a(n) CertificateListExactAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateListExactAssertion, encoded as an ASN.1 Element.
 */
export function _encode_CertificateListExactAssertion(
    value: CertificateListExactAssertion,
    elGetter: $.ASN1Encoder<CertificateListExactAssertion>
) {
    if (!_cached_encoder_for_CertificateListExactAssertion) {
        _cached_encoder_for_CertificateListExactAssertion = function (
            value: CertificateListExactAssertion,
            elGetter: $.ASN1Encoder<CertificateListExactAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Name(value.issuer, $.BER),
                        /* REQUIRED   */ _encode_Time(value.thisUpdate, $.BER),
                        /* IF_ABSENT  */ value.distributionPoint === undefined
                            ? undefined
                            : _encode_DistributionPointName(
                                  value.distributionPoint,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CertificateListExactAssertion(value, elGetter);
}

/**
 * @summary id_ldx_certListExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ldx-certListExactAssertion     OBJECT IDENTIFIER ::= {id-ldx 5}
 * ```
 *
 * @constant
 */
export const id_ldx_certListExactAssertion: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_ldx
);

/**
 * @summary certListExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certListExactAssertion SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate List Exact Assertion"
 *   DIRECTORY SYNTAX  CertificateListExactAssertion
 *   ID                id-ldx-certListExactAssertion }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const certListExactAssertion: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificateListExactAssertion,
    },
    encoderFor: {
        "&Type": _encode_CertificateListExactAssertion,
    },
    "&ldapDesc":
        "X.509 Certificate List Exact Assertion" /* OBJECT_FIELD_SETTING */,
    "&id": id_ldx_certListExactAssertion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_certificateListExactMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-certificateListExactMatch   OBJECT IDENTIFIER ::= {id-mr 38}
 * ```
 *
 * @constant
 */
export const id_mr_certificateListExactMatch: OBJECT_IDENTIFIER = new _OID(
    [38],
    id_mr
);

/**
 * @summary certificateListExactMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateListExactMatch MATCHING-RULE ::= {
 *   SYNTAX       CertificateListExactAssertion
 *   LDAP-SYNTAX  certListExactAssertion.&id
 *   LDAP-NAME    {"certificateListExactMatch"}
 *   LDAP-DESC    "X.509 Certificate List Exact Match"
 *   ID           id-mr-certificateListExactMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const certificateListExactMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CertificateListExactAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_CertificateListExactAssertion,
    },
    "&ldapSyntax": certListExactAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc":
        "X.509 Certificate List Exact Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_certificateListExactMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary CertificateListAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateListAssertion ::= SEQUENCE {
 *   issuer                       Name                   OPTIONAL,
 *   minCRLNumber            [0]  CRLNumber              OPTIONAL,
 *   maxCRLNumber            [1]  CRLNumber              OPTIONAL,
 *   reasonFlags                  ReasonFlags            OPTIONAL,
 *   dateAndTime                  Time                   OPTIONAL,
 *   distributionPoint       [2]  DistributionPointName  OPTIONAL,
 *   authorityKeyIdentifier  [3]  AuthorityKeyIdentifier OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class CertificateListAssertion {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: OPTIONAL<Name>,
        /**
         * @summary `minCRLNumber`.
         * @public
         * @readonly
         */
        readonly minCRLNumber: OPTIONAL<CRLNumber>,
        /**
         * @summary `maxCRLNumber`.
         * @public
         * @readonly
         */
        readonly maxCRLNumber: OPTIONAL<CRLNumber>,
        /**
         * @summary `reasonFlags`.
         * @public
         * @readonly
         */
        readonly reasonFlags: OPTIONAL<ReasonFlags>,
        /**
         * @summary `dateAndTime`.
         * @public
         * @readonly
         */
        readonly dateAndTime: OPTIONAL<Time>,
        /**
         * @summary `distributionPoint`.
         * @public
         * @readonly
         */
        readonly distributionPoint: OPTIONAL<DistributionPointName>,
        /**
         * @summary `authorityKeyIdentifier`.
         * @public
         * @readonly
         */
        readonly authorityKeyIdentifier: OPTIONAL<AuthorityKeyIdentifier>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificateListAssertion
     * @description
     *
     * This takes an `object` and converts it to a `CertificateListAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateListAssertion`.
     * @returns {CertificateListAssertion}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertificateListAssertion]: CertificateListAssertion[_K];
            }
        >
    ): CertificateListAssertion {
        return new CertificateListAssertion(
            _o.issuer,
            _o.minCRLNumber,
            _o.maxCRLNumber,
            _o.reasonFlags,
            _o.dateAndTime,
            _o.distributionPoint,
            _o.authorityKeyIdentifier,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertificateListAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateListAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec("issuer", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "minCRLNumber",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "maxCRLNumber",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "reasonFlags",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec("dateAndTime", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "distributionPoint",
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
];
/**
 * @summary The Trailing Root Component Types of CertificateListAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateListAssertion: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertificateListAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateListAssertion: $.ComponentSpec[] = [];
let _cached_decoder_for_CertificateListAssertion: $.ASN1Decoder<
    CertificateListAssertion
> | null = null;
let _cached_encoder_for_CertificateListAssertion: $.ASN1Encoder<
    CertificateListAssertion
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateListAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateListAssertion} The decoded data structure.
 */
export function _decode_CertificateListAssertion(el: _Element) {
    if (!_cached_decoder_for_CertificateListAssertion) {
        _cached_decoder_for_CertificateListAssertion = function (
            el: _Element
        ): CertificateListAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuer: OPTIONAL<Name>;
            let minCRLNumber: OPTIONAL<CRLNumber>;
            let maxCRLNumber: OPTIONAL<CRLNumber>;
            let reasonFlags: OPTIONAL<ReasonFlags>;
            let dateAndTime: OPTIONAL<Time>;
            let distributionPoint: OPTIONAL<DistributionPointName>;
            let authorityKeyIdentifier: OPTIONAL<AuthorityKeyIdentifier>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                issuer: (_el: _Element): void => {
                    issuer = _decode_Name(_el);
                },
                minCRLNumber: (_el: _Element): void => {
                    minCRLNumber = $._decode_implicit<CRLNumber>(
                        () => _decode_CRLNumber
                    )(_el);
                },
                maxCRLNumber: (_el: _Element): void => {
                    maxCRLNumber = $._decode_implicit<CRLNumber>(
                        () => _decode_CRLNumber
                    )(_el);
                },
                reasonFlags: (_el: _Element): void => {
                    reasonFlags = _decode_ReasonFlags(_el);
                },
                dateAndTime: (_el: _Element): void => {
                    dateAndTime = _decode_Time(_el);
                },
                distributionPoint: (_el: _Element): void => {
                    distributionPoint = $._decode_implicit<
                        DistributionPointName
                    >(() => _decode_DistributionPointName)(_el);
                },
                authorityKeyIdentifier: (_el: _Element): void => {
                    authorityKeyIdentifier = $._decode_implicit<
                        AuthorityKeyIdentifier
                    >(() => _decode_AuthorityKeyIdentifier)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificateListAssertion,
                _extension_additions_list_spec_for_CertificateListAssertion,
                _root_component_type_list_2_spec_for_CertificateListAssertion,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificateListAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ issuer,
                minCRLNumber,
                maxCRLNumber,
                reasonFlags,
                dateAndTime,
                distributionPoint,
                authorityKeyIdentifier,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertificateListAssertion(el);
}
/**
 * @summary Encodes a(n) CertificateListAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateListAssertion, encoded as an ASN.1 Element.
 */
export function _encode_CertificateListAssertion(
    value: CertificateListAssertion,
    elGetter: $.ASN1Encoder<CertificateListAssertion>
) {
    if (!_cached_encoder_for_CertificateListAssertion) {
        _cached_encoder_for_CertificateListAssertion = function (
            value: CertificateListAssertion,
            elGetter: $.ASN1Encoder<CertificateListAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.issuer === undefined
                                ? undefined
                                : _encode_Name(value.issuer, $.BER),
                            /* IF_ABSENT  */ value.minCRLNumber === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_CRLNumber,
                                      $.BER
                                  )(value.minCRLNumber, $.BER),
                            /* IF_ABSENT  */ value.maxCRLNumber === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_CRLNumber,
                                      $.BER
                                  )(value.maxCRLNumber, $.BER),
                            /* IF_ABSENT  */ value.reasonFlags === undefined
                                ? undefined
                                : _encode_ReasonFlags(value.reasonFlags, $.BER),
                            /* IF_ABSENT  */ value.dateAndTime === undefined
                                ? undefined
                                : _encode_Time(value.dateAndTime, $.BER),
                            /* IF_ABSENT  */ value.distributionPoint ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_DistributionPointName,
                                      $.BER
                                  )(value.distributionPoint, $.BER),
                            /* IF_ABSENT  */ value.authorityKeyIdentifier ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_AuthorityKeyIdentifier,
                                      $.BER
                                  )(value.authorityKeyIdentifier, $.BER),
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
    return _cached_encoder_for_CertificateListAssertion(value, elGetter);
}

/**
 * @summary id_ldx_certListAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ldx-certListAssertion          OBJECT IDENTIFIER ::= {id-ldx 6}
 * ```
 *
 * @constant
 */
export const id_ldx_certListAssertion: OBJECT_IDENTIFIER = new _OID(
    [6],
    id_ldx
);

/**
 * @summary certListAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certListAssertion SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate List Assertion"
 *   DIRECTORY SYNTAX  CertificateListAssertion
 *   ID                id-ldx-certListAssertion }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const certListAssertion: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificateListAssertion,
    },
    encoderFor: {
        "&Type": _encode_CertificateListAssertion,
    },
    "&ldapDesc": "X.509 Certificate List Assertion" /* OBJECT_FIELD_SETTING */,
    "&id": id_ldx_certListAssertion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_certificateListMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-certificateListMatch        OBJECT IDENTIFIER ::= {id-mr 39}
 * ```
 *
 * @constant
 */
export const id_mr_certificateListMatch: OBJECT_IDENTIFIER = new _OID(
    [39],
    id_mr
);

/**
 * @summary certificateListMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateListMatch MATCHING-RULE ::= {
 *   SYNTAX  CertificateListAssertion
 *   LDAP-SYNTAX  certListAssertion.&id
 *   LDAP-NAME    {"certificateListMatch"}
 *   LDAP-DESC    "X.509 Certificate List Match"
 *   ID      id-mr-certificateListMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const certificateListMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CertificateListAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_CertificateListAssertion,
    },
    "&ldapSyntax": certListAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 Certificate List Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_certificateListMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ldx_algorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ldx-algorithmIdentifier        OBJECT IDENTIFIER ::= {id-ldx 7}
 * ```
 *
 * @constant
 */
export const id_ldx_algorithmIdentifier: OBJECT_IDENTIFIER = new _OID(
    [7],
    id_ldx
);

/**
 * @summary algorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * algorithmIdentifier SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Algorithm Identifier"
 *   DIRECTORY SYNTAX  AlgorithmIdentifier{{SupportedAlgorithms}}
 *   ID                id-ldx-algorithmIdentifier }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const algorithmIdentifier: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_AlgorithmIdentifier,
    },
    encoderFor: {
        "&Type": _encode_AlgorithmIdentifier,
    },
    "&ldapDesc": "X.509 Algorithm Identifier" /* OBJECT_FIELD_SETTING */,
    "&id": id_ldx_algorithmIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_algorithmIdentifierMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-algorithmIdentifierMatch    OBJECT IDENTIFIER ::= {id-mr 40}
 * ```
 *
 * @constant
 */
export const id_mr_algorithmIdentifierMatch: OBJECT_IDENTIFIER = new _OID(
    [40],
    id_mr
);

/**
 * @summary algorithmIdentifierMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * algorithmIdentifierMatch MATCHING-RULE ::= {
 *   SYNTAX       AlgorithmIdentifier {{SupportedAlgorithms}}
 *   LDAP-SYNTAX  algorithmIdentifier.&id
 *   LDAP-NAME    {"algorithmIdentifierMatch"}
 *   LDAP-DESC    "X.509 Algorithm Identifier Match"
 *   ID           id-mr-algorithmIdentifierMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const algorithmIdentifierMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_AlgorithmIdentifier,
    },
    encoderFor: {
        "&AssertionType": _encode_AlgorithmIdentifier,
    },
    "&ldapSyntax": algorithmIdentifier["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 Algorithm Identifier Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_algorithmIdentifierMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_policyMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-policyMatch                 OBJECT IDENTIFIER ::= {id-mr 60}
 * ```
 *
 * @constant
 */
export const id_mr_policyMatch: OBJECT_IDENTIFIER = new _OID([60], id_mr);

/**
 * @summary policyMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * policyMatch MATCHING-RULE ::= {
 *   SYNTAX  PolicyID
 *   ID      id-mr-policyMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const policyMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_PolicyID,
    },
    encoderFor: {
        "&AssertionType": _encode_PolicyID,
    },
    "&id": id_mr_policyMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary PkiPathMatchSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PkiPathMatchSyntax ::= SEQUENCE {
 *   firstIssuer  Name,
 *   lastSubject  Name,
 *   ... }
 * ```
 *
 * @class
 */
export class PkiPathMatchSyntax {
    constructor(
        /**
         * @summary `firstIssuer`.
         * @public
         * @readonly
         */
        readonly firstIssuer: Name,
        /**
         * @summary `lastSubject`.
         * @public
         * @readonly
         */
        readonly lastSubject: Name,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PkiPathMatchSyntax
     * @description
     *
     * This takes an `object` and converts it to a `PkiPathMatchSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PkiPathMatchSyntax`.
     * @returns {PkiPathMatchSyntax}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof PkiPathMatchSyntax]: PkiPathMatchSyntax[_K] }
        >
    ): PkiPathMatchSyntax {
        return new PkiPathMatchSyntax(
            _o.firstIssuer,
            _o.lastSubject,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of PkiPathMatchSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PkiPathMatchSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "firstIssuer",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "lastSubject",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of PkiPathMatchSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PkiPathMatchSyntax: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of PkiPathMatchSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PkiPathMatchSyntax: $.ComponentSpec[] = [];
let _cached_decoder_for_PkiPathMatchSyntax: $.ASN1Decoder<
    PkiPathMatchSyntax
> | null = null;
let _cached_encoder_for_PkiPathMatchSyntax: $.ASN1Encoder<
    PkiPathMatchSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PkiPathMatchSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PkiPathMatchSyntax} The decoded data structure.
 */
export function _decode_PkiPathMatchSyntax(el: _Element) {
    if (!_cached_decoder_for_PkiPathMatchSyntax) {
        _cached_decoder_for_PkiPathMatchSyntax = function (
            el: _Element
        ): PkiPathMatchSyntax {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PkiPathMatchSyntax contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "firstIssuer";
            sequence[1].name = "lastSubject";
            let firstIssuer!: Name;
            let lastSubject!: Name;
            firstIssuer = _decode_Name(sequence[0]);
            lastSubject = _decode_Name(sequence[1]);
            return new PkiPathMatchSyntax(
                firstIssuer,
                lastSubject,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_PkiPathMatchSyntax(el);
}
/**
 * @summary Encodes a(n) PkiPathMatchSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PkiPathMatchSyntax, encoded as an ASN.1 Element.
 */
export function _encode_PkiPathMatchSyntax(
    value: PkiPathMatchSyntax,
    elGetter: $.ASN1Encoder<PkiPathMatchSyntax>
) {
    if (!_cached_encoder_for_PkiPathMatchSyntax) {
        _cached_encoder_for_PkiPathMatchSyntax = function (
            value: PkiPathMatchSyntax,
            elGetter: $.ASN1Encoder<PkiPathMatchSyntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(
                                value.firstIssuer,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Name(
                                value.lastSubject,
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
    return _cached_encoder_for_PkiPathMatchSyntax(value, elGetter);
}

/**
 * @summary id_mr_pkiPathMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-pkiPathMatch                OBJECT IDENTIFIER ::= {id-mr 62}
 * ```
 *
 * @constant
 */
export const id_mr_pkiPathMatch: OBJECT_IDENTIFIER = new _OID([62], id_mr);

/**
 * @summary pkiPathMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkiPathMatch MATCHING-RULE ::= {
 *   SYNTAX  PkiPathMatchSyntax
 *   ID      id-mr-pkiPathMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const pkiPathMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_PkiPathMatchSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_PkiPathMatchSyntax,
    },
    "&id": id_mr_pkiPathMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary AltName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AltName ::= SEQUENCE {
 *   altnameType   AltNameType,
 *   altNameValue  GeneralName OPTIONAL }
 * ```
 *
 * @class
 */
export class AltName {
    constructor(
        /**
         * @summary `altnameType`.
         * @public
         * @readonly
         */
        readonly altnameType: AltNameType,
        /**
         * @summary `altNameValue`.
         * @public
         * @readonly
         */
        readonly altNameValue: OPTIONAL<GeneralName>
    ) {}

    /**
     * @summary Restructures an object into a AltName
     * @description
     *
     * This takes an `object` and converts it to a `AltName`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AltName`.
     * @returns {AltName}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AltName]: AltName[_K] }>
    ): AltName {
        return new AltName(_o.altnameType, _o.altNameValue);
    }
}
/**
 * @summary The Leading Root Component Types of AltName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AltName: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "altnameType",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "altNameValue",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AltName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AltName: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AltName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AltName: $.ComponentSpec[] = [];
let _cached_decoder_for_AltName: $.ASN1Decoder<AltName> | null = null;
let _cached_encoder_for_AltName: $.ASN1Encoder<AltName> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AltName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AltName} The decoded data structure.
 */
export function _decode_AltName(el: _Element) {
    if (!_cached_decoder_for_AltName) {
        _cached_decoder_for_AltName = function (el: _Element): AltName {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let altnameType!: AltNameType;
            let altNameValue: OPTIONAL<GeneralName>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                altnameType: (_el: _Element): void => {
                    altnameType = _decode_AltNameType(_el);
                },
                altNameValue: (_el: _Element): void => {
                    altNameValue = _decode_GeneralName(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AltName,
                _extension_additions_list_spec_for_AltName,
                _root_component_type_list_2_spec_for_AltName,
                undefined
            );
            return new AltName(
                /* SEQUENCE_CONSTRUCTOR_CALL */ altnameType,
                altNameValue
            );
        };
    }
    return _cached_decoder_for_AltName(el);
}
/**
 * @summary Encodes a(n) AltName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AltName, encoded as an ASN.1 Element.
 */
export function _encode_AltName(
    value: AltName,
    elGetter: $.ASN1Encoder<AltName>
) {
    if (!_cached_encoder_for_AltName) {
        _cached_encoder_for_AltName = function (
            value: AltName,
            elGetter: $.ASN1Encoder<AltName>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AltNameType(
                            value.altnameType,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.altNameValue === undefined
                            ? undefined
                            : _encode_GeneralName(value.altNameValue, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AltName(value, elGetter);
}

/**
 * @summary EnhancedCertificateAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnhancedCertificateAssertion ::= SEQUENCE {
 *   serialNumber            [0]  CertificateSerialNumber OPTIONAL,
 *   issuer                  [1]  Name OPTIONAL,
 *   subjectKeyIdentifier    [2]  SubjectKeyIdentifier OPTIONAL,
 *   authorityKeyIdentifier  [3]  AuthorityKeyIdentifier OPTIONAL,
 *   certificateValid        [4]  Time OPTIONAL,
 *   privateKeyValid         [5]  GeneralizedTime OPTIONAL,
 *   subjectPublicKeyAlgID   [6]  OBJECT IDENTIFIER OPTIONAL,
 *   keyUsage                [7]  KeyUsage OPTIONAL,
 *   subjectAltName          [8]  AltName OPTIONAL,
 *   policy                  [9]  CertPolicySet OPTIONAL,
 *   pathToName              [10] GeneralNames OPTIONAL,
 *   subject                 [11] Name OPTIONAL,
 *   nameConstraints         [12] NameConstraintsSyntax OPTIONAL,
 *   ... }
 *   (ALL EXCEPT ({ -- none; at least one component shall be present --}))
 * ```
 *
 * @class
 */
export class EnhancedCertificateAssertion {
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
        readonly subjectAltName: OPTIONAL<AltName>,
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
        readonly pathToName: OPTIONAL<GeneralNames>,
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
     * @summary Restructures an object into a EnhancedCertificateAssertion
     * @description
     *
     * This takes an `object` and converts it to a `EnhancedCertificateAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EnhancedCertificateAssertion`.
     * @returns {EnhancedCertificateAssertion}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof EnhancedCertificateAssertion]: EnhancedCertificateAssertion[_K];
            }
        >
    ): EnhancedCertificateAssertion {
        return new EnhancedCertificateAssertion(
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
/**
 * @summary The Leading Root Component Types of EnhancedCertificateAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EnhancedCertificateAssertion: $.ComponentSpec[] = [
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
/**
 * @summary The Trailing Root Component Types of EnhancedCertificateAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EnhancedCertificateAssertion: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of EnhancedCertificateAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EnhancedCertificateAssertion: $.ComponentSpec[] = [];
let _cached_decoder_for_EnhancedCertificateAssertion: $.ASN1Decoder<
    EnhancedCertificateAssertion
> | null = null;
let _cached_encoder_for_EnhancedCertificateAssertion: $.ASN1Encoder<
    EnhancedCertificateAssertion
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EnhancedCertificateAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnhancedCertificateAssertion} The decoded data structure.
 */
export function _decode_EnhancedCertificateAssertion(el: _Element) {
    if (!_cached_decoder_for_EnhancedCertificateAssertion) {
        _cached_decoder_for_EnhancedCertificateAssertion = function (
            el: _Element
        ): EnhancedCertificateAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let serialNumber: OPTIONAL<CertificateSerialNumber>;
            let issuer: OPTIONAL<Name>;
            let subjectKeyIdentifier: OPTIONAL<SubjectKeyIdentifier>;
            let authorityKeyIdentifier: OPTIONAL<AuthorityKeyIdentifier>;
            let certificateValid: OPTIONAL<Time>;
            let privateKeyValid: OPTIONAL<GeneralizedTime>;
            let subjectPublicKeyAlgID: OPTIONAL<OBJECT_IDENTIFIER>;
            let keyUsage: OPTIONAL<KeyUsage>;
            let subjectAltName: OPTIONAL<AltName>;
            let policy: OPTIONAL<CertPolicySet>;
            let pathToName: OPTIONAL<GeneralNames>;
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
                    issuer = $._decode_implicit<Name>(() => _decode_Name)(_el);
                },
                subjectKeyIdentifier: (_el: _Element): void => {
                    subjectKeyIdentifier = $._decode_implicit<
                        SubjectKeyIdentifier
                    >(() => _decode_SubjectKeyIdentifier)(_el);
                },
                authorityKeyIdentifier: (_el: _Element): void => {
                    authorityKeyIdentifier = $._decode_implicit<
                        AuthorityKeyIdentifier
                    >(() => _decode_AuthorityKeyIdentifier)(_el);
                },
                certificateValid: (_el: _Element): void => {
                    certificateValid = $._decode_implicit<Time>(
                        () => _decode_Time
                    )(_el);
                },
                privateKeyValid: (_el: _Element): void => {
                    privateKeyValid = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                subjectPublicKeyAlgID: (_el: _Element): void => {
                    subjectPublicKeyAlgID = $._decode_implicit<
                        OBJECT_IDENTIFIER
                    >(() => $._decodeObjectIdentifier)(_el);
                },
                keyUsage: (_el: _Element): void => {
                    keyUsage = $._decode_implicit<KeyUsage>(
                        () => _decode_KeyUsage
                    )(_el);
                },
                subjectAltName: (_el: _Element): void => {
                    subjectAltName = $._decode_implicit<AltName>(
                        () => _decode_AltName
                    )(_el);
                },
                policy: (_el: _Element): void => {
                    policy = $._decode_implicit<CertPolicySet>(
                        () => _decode_CertPolicySet
                    )(_el);
                },
                pathToName: (_el: _Element): void => {
                    pathToName = $._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    )(_el);
                },
                subject: (_el: _Element): void => {
                    subject = $._decode_implicit<Name>(() => _decode_Name)(_el);
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
                _root_component_type_list_1_spec_for_EnhancedCertificateAssertion,
                _extension_additions_list_spec_for_EnhancedCertificateAssertion,
                _root_component_type_list_2_spec_for_EnhancedCertificateAssertion,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EnhancedCertificateAssertion(
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
    return _cached_decoder_for_EnhancedCertificateAssertion(el);
}
/**
 * @summary Encodes a(n) EnhancedCertificateAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnhancedCertificateAssertion, encoded as an ASN.1 Element.
 */
export function _encode_EnhancedCertificateAssertion(
    value: EnhancedCertificateAssertion,
    elGetter: $.ASN1Encoder<EnhancedCertificateAssertion>
) {
    if (!_cached_encoder_for_EnhancedCertificateAssertion) {
        _cached_encoder_for_EnhancedCertificateAssertion = function (
            value: EnhancedCertificateAssertion,
            elGetter: $.ASN1Encoder<EnhancedCertificateAssertion>
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
                                : $._encode_implicit(
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
                                : $._encode_implicit(
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
                                : $._encode_implicit(
                                      _TagClass.context,
                                      8,
                                      () => _encode_AltName,
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
                                : $._encode_implicit(
                                      _TagClass.context,
                                      10,
                                      () => _encode_GeneralNames,
                                      $.BER
                                  )(value.pathToName, $.BER),
                            /* IF_ABSENT  */ value.subject === undefined
                                ? undefined
                                : $._encode_implicit(
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
    return _cached_encoder_for_EnhancedCertificateAssertion(value, elGetter);
}

/**
 * @summary id_mr_enhancedCertificateMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-enhancedCertificateMatch    OBJECT IDENTIFIER ::= {id-mr 65}
 * ```
 *
 * @constant
 */
export const id_mr_enhancedCertificateMatch: OBJECT_IDENTIFIER = new _OID(
    [65],
    id_mr
);

/**
 * @summary enhancedCertificateMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * enhancedCertificateMatch MATCHING-RULE ::= {
 *   SYNTAX  EnhancedCertificateAssertion
 *   ID      id-mr-enhancedCertificateMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const enhancedCertificateMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_EnhancedCertificateAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_EnhancedCertificateAssertion,
    },
    "&id": id_mr_enhancedCertificateMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* END_MODULE CertificateExtensions */
/* eslint-enable */
