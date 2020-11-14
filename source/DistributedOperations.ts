/**
 * @module DistributedOperations
 * @summary The ASN.1 module `DistributedOperations`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.distributedOperations.9
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
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    ENUMERATED,
    EXTERNAL,
    GeneralizedTime,
    INTEGER,
    OPTIONAL,
    TRUE_BIT,
    UTCTime,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AuthenticationLevel,
    _decode_AuthenticationLevel,
    _encode_AuthenticationLevel,
} from "./BasicAccessControl";
import {
    ERROR,
    id_errcode_dsaReferral,
    OPERATION,
} from "./CommonProtocolSpecification";
import {
    abandon,
    addEntry,
    administerPassword,
    changePassword,
    compare,
    ldapTransport,
    linkedLDAP,
    list,
    modifyDN,
    modifyEntry,
    read,
    removeEntry,
    search,
    SecurityParameters,
    SimpleCredentials,
    SpkmCredentials,
    StrongCredentials,
    Versions,
    Versions_v1 /* IMPORTED_BIT */,
    _decode_SecurityParameters,
    _decode_SimpleCredentials,
    _decode_SpkmCredentials,
    _decode_StrongCredentials,
    _decode_Versions,
    _encode_SecurityParameters,
    _encode_SimpleCredentials,
    _encode_SpkmCredentials,
    _encode_StrongCredentials,
    _encode_Versions,
} from "./DirectoryAbstractService";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "./EnhancedSecurity";
import {
    Attribute,
    DistinguishedName,
    Name,
    RDNSequence,
    _decode_Attribute,
    _decode_DistinguishedName,
    _decode_Name,
    _decode_RDNSequence,
    _encode_Attribute,
    _encode_DistinguishedName,
    _encode_Name,
    _encode_RDNSequence,
} from "./InformationFramework";
import {
    PresentationAddress,
    ProtocolInformation,
    UnboundedDirectoryString,
    UniqueIdentifier,
    _decode_PresentationAddress,
    _decode_ProtocolInformation,
    _decode_UnboundedDirectoryString,
    _decode_UniqueIdentifier,
    _encode_PresentationAddress,
    _encode_ProtocolInformation,
    _encode_UnboundedDirectoryString,
    _encode_UniqueIdentifier,
} from "./SelectedAttributeTypes";
import {
    MRMapping,
    SearchRuleId,
    _decode_MRMapping,
    _decode_SearchRuleId,
    _encode_MRMapping,
    _encode_SearchRuleId,
} from "./ServiceAdministration";
export {
    AuthenticationLevel,
    _decode_AuthenticationLevel,
    _encode_AuthenticationLevel,
} from "./BasicAccessControl";
export {
    ERROR,
    id_errcode_dsaReferral,
    OPERATION,
} from "./CommonProtocolSpecification";
export {
    abandon,
    addEntry,
    administerPassword,
    changePassword,
    CommonResults,
    compare,
    directoryBindError,
    ldapTransport,
    linkedLDAP,
    list,
    modifyDN,
    modifyEntry,
    read,
    referral,
    removeEntry,
    search,
    SecurityParameters,
    SimpleCredentials,
    SpkmCredentials,
    StrongCredentials,
    Versions,
    Versions_v1 /* IMPORTED_BIT */,
    Versions_v2 /* IMPORTED_BIT */,
    _decode_CommonResults,
    _decode_SecurityParameters,
    _decode_SimpleCredentials,
    _decode_SpkmCredentials,
    _decode_StrongCredentials,
    _decode_Versions,
    _encode_CommonResults,
    _encode_SecurityParameters,
    _encode_SimpleCredentials,
    _encode_SpkmCredentials,
    _encode_StrongCredentials,
    _encode_Versions,
} from "./DirectoryAbstractService";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "./EnhancedSecurity";
export {
    Attribute,
    DistinguishedName,
    Name,
    RDNSequence,
    _decode_Attribute,
    _decode_DistinguishedName,
    _decode_Name,
    _decode_RDNSequence,
    _encode_Attribute,
    _encode_DistinguishedName,
    _encode_Name,
    _encode_RDNSequence,
} from "./InformationFramework";
export {
    PresentationAddress,
    ProtocolInformation,
    UnboundedDirectoryString,
    UniqueIdentifier,
    _decode_PresentationAddress,
    _decode_ProtocolInformation,
    _decode_UnboundedDirectoryString,
    _decode_UniqueIdentifier,
    _encode_PresentationAddress,
    _encode_ProtocolInformation,
    _encode_UnboundedDirectoryString,
    _encode_UniqueIdentifier,
} from "./SelectedAttributeTypes";
export {
    MRMapping,
    SearchRuleId,
    _decode_MRMapping,
    _decode_SearchRuleId,
    _encode_MRMapping,
    _encode_SearchRuleId,
} from "./ServiceAdministration";

/**
 * @summary AccessPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessPoint ::= SET {
 *   ae-title             [0]  Name,
 *   address              [1]  PresentationAddress,
 *   protocolInformation  [2]  SET SIZE (1..MAX) OF ProtocolInformation OPTIONAL,
 *   --                   [6]  Not to be used
 *   ... }
 * ```
 *
 * @class
 */
export class AccessPoint {
    constructor(
        /**
         * @summary `ae_title`.
         * @public
         * @readonly
         */
        readonly ae_title: Name,
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: PresentationAddress,
        /**
         * @summary `protocolInformation`.
         * @public
         * @readonly
         */
        readonly protocolInformation: OPTIONAL<ProtocolInformation[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AccessPoint
     * @description
     *
     * This takes an `object` and converts it to a `AccessPoint`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessPoint`.
     * @returns {AccessPoint}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AccessPoint]: AccessPoint[_K] }>
    ): AccessPoint {
        return new AccessPoint(
            _o.ae_title,
            _o.address,
            _o.protocolInformation,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AccessPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AccessPoint: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ae-title",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "address",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "protocolInformation",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AccessPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AccessPoint: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AccessPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AccessPoint: $.ComponentSpec[] = [];
let _cached_decoder_for_AccessPoint: $.ASN1Decoder<AccessPoint> | null = null;
let _cached_encoder_for_AccessPoint: $.ASN1Encoder<AccessPoint> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AccessPoint
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccessPoint} The decoded data structure.
 */
export function _decode_AccessPoint(el: _Element) {
    if (!_cached_decoder_for_AccessPoint) {
        _cached_decoder_for_AccessPoint = function (el: _Element): AccessPoint {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let ae_title!: Name;
            let address!: PresentationAddress;
            let protocolInformation: OPTIONAL<ProtocolInformation[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "ae-title": (_el: _Element): void => {
                    ae_title = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                address: (_el: _Element): void => {
                    address = $._decode_explicit<PresentationAddress>(
                        () => _decode_PresentationAddress
                    )(_el);
                },
                protocolInformation: (_el: _Element): void => {
                    protocolInformation = $._decode_explicit<
                        ProtocolInformation[]
                    >(() =>
                        $._decodeSetOf<ProtocolInformation>(
                            () => _decode_ProtocolInformation
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AccessPoint,
                _extension_additions_list_spec_for_AccessPoint,
                _root_component_type_list_2_spec_for_AccessPoint,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AccessPoint(
                /* SET_CONSTRUCTOR_CALL */ ae_title,
                address,
                protocolInformation,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AccessPoint(el);
}
/**
 * @summary Encodes a(n) AccessPoint into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessPoint, encoded as an ASN.1 Element.
 */
export function _encode_AccessPoint(
    value: AccessPoint,
    elGetter: $.ASN1Encoder<AccessPoint>
) {
    if (!_cached_encoder_for_AccessPoint) {
        _cached_encoder_for_AccessPoint = function (
            value: AccessPoint,
            elGetter: $.ASN1Encoder<AccessPoint>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_Name,
                                $.BER
                            )(value.ae_title, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_PresentationAddress,
                                $.BER
                            )(value.address, $.BER),
                            /* IF_ABSENT  */ value.protocolInformation ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<ProtocolInformation>(
                                              () => _encode_ProtocolInformation,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.protocolInformation, $.BER),
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
    return _cached_encoder_for_AccessPoint(value, elGetter);
}

/**
 * @summary MasterOrShadowAccessPoint_category
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MasterOrShadowAccessPoint-category ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_MasterOrShadowAccessPoint_category {
    master = 0,
    shadow = 1,
    writeableCopy = 2,
}
/**
 * @summary MasterOrShadowAccessPoint_category
 */
export type MasterOrShadowAccessPoint_category =
    | _enum_for_MasterOrShadowAccessPoint_category
    | ENUMERATED;
/**
 * @summary MasterOrShadowAccessPoint_category_master
 * @constant
 * @type {number}
 */
export const MasterOrShadowAccessPoint_category_master: MasterOrShadowAccessPoint_category = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary MasterOrShadowAccessPoint_category_shadow
 * @constant
 * @type {number}
 */
export const MasterOrShadowAccessPoint_category_shadow: MasterOrShadowAccessPoint_category = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary MasterOrShadowAccessPoint_category_writeableCopy
 * @constant
 * @type {number}
 */
export const MasterOrShadowAccessPoint_category_writeableCopy: MasterOrShadowAccessPoint_category = 2; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_MasterOrShadowAccessPoint_category: $.ASN1Decoder<
    MasterOrShadowAccessPoint_category
> | null = null;
let _cached_encoder_for_MasterOrShadowAccessPoint_category: $.ASN1Encoder<
    MasterOrShadowAccessPoint_category
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MasterOrShadowAccessPoint_category
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MasterOrShadowAccessPoint_category} The decoded data structure.
 */
export function _decode_MasterOrShadowAccessPoint_category(el: _Element) {
    if (!_cached_decoder_for_MasterOrShadowAccessPoint_category) {
        _cached_decoder_for_MasterOrShadowAccessPoint_category =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_MasterOrShadowAccessPoint_category(el);
}
/**
 * @summary Encodes a(n) MasterOrShadowAccessPoint_category into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MasterOrShadowAccessPoint_category, encoded as an ASN.1 Element.
 */
export function _encode_MasterOrShadowAccessPoint_category(
    value: MasterOrShadowAccessPoint_category,
    elGetter: $.ASN1Encoder<MasterOrShadowAccessPoint_category>
) {
    if (!_cached_encoder_for_MasterOrShadowAccessPoint_category) {
        _cached_encoder_for_MasterOrShadowAccessPoint_category =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_MasterOrShadowAccessPoint_category(
        value,
        elGetter
    );
}

/**
 * @summary MasterOrShadowAccessPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MasterOrShadowAccessPoint ::= SET {
 *   COMPONENTS OF          AccessPoint,
 *   category          [3]  ENUMERATED {
 *     master            (0),
 *     shadow            (1),
 *     writeableCopy     (2),
 *     ... } DEFAULT master,
 *   chainingRequired  [5]  BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 * @class
 */
export class MasterOrShadowAccessPoint {
    constructor(
        /**
         * @summary `ae_title`.
         * @public
         * @readonly
         */
        readonly ae_title: Name /* REPLICATED_COMPONENT */,
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: PresentationAddress /* REPLICATED_COMPONENT */,
        /**
         * @summary `protocolInformation`.
         * @public
         * @readonly
         */
        readonly protocolInformation: OPTIONAL<
            ProtocolInformation[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `category`.
         * @public
         * @readonly
         */
        readonly category: OPTIONAL<MasterOrShadowAccessPoint_category>,
        /**
         * @summary `chainingRequired`.
         * @public
         * @readonly
         */
        readonly chainingRequired: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MasterOrShadowAccessPoint
     * @description
     *
     * This takes an `object` and converts it to a `MasterOrShadowAccessPoint`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MasterOrShadowAccessPoint`.
     * @returns {MasterOrShadowAccessPoint}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof MasterOrShadowAccessPoint]: MasterOrShadowAccessPoint[_K];
            }
        >
    ): MasterOrShadowAccessPoint {
        return new MasterOrShadowAccessPoint(
            _o.ae_title,
            _o.address,
            _o.protocolInformation,
            _o.category,
            _o.chainingRequired,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `category`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_category() {
        return MasterOrShadowAccessPoint_category_master;
    }
    /**
     * @summary Getter that returns the default value for `chainingRequired`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_chainingRequired() {
        return false;
    }
    /**
     * @summary The enum used as the type of the component `category`
     * @public
     * @static
     */

    public static _enum_for_category = _enum_for_MasterOrShadowAccessPoint_category;
}
/**
 * @summary The Leading Root Component Types of MasterOrShadowAccessPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MasterOrShadowAccessPoint: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ae-title",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "address",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "protocolInformation",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "category",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "chainingRequired",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of MasterOrShadowAccessPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MasterOrShadowAccessPoint: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of MasterOrShadowAccessPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MasterOrShadowAccessPoint: $.ComponentSpec[] = [];
let _cached_decoder_for_MasterOrShadowAccessPoint: $.ASN1Decoder<
    MasterOrShadowAccessPoint
> | null = null;
let _cached_encoder_for_MasterOrShadowAccessPoint: $.ASN1Encoder<
    MasterOrShadowAccessPoint
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MasterOrShadowAccessPoint
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MasterOrShadowAccessPoint} The decoded data structure.
 */
export function _decode_MasterOrShadowAccessPoint(el: _Element) {
    if (!_cached_decoder_for_MasterOrShadowAccessPoint) {
        _cached_decoder_for_MasterOrShadowAccessPoint = function (
            el: _Element
        ): MasterOrShadowAccessPoint {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let ae_title!: Name;
            let address!: PresentationAddress;
            let protocolInformation: OPTIONAL<ProtocolInformation[]>;
            let category: OPTIONAL<MasterOrShadowAccessPoint_category> =
                MasterOrShadowAccessPoint._default_value_for_category;
            let chainingRequired: OPTIONAL<BOOLEAN> =
                MasterOrShadowAccessPoint._default_value_for_chainingRequired;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "ae-title": (_el: _Element): void => {
                    ae_title = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                address: (_el: _Element): void => {
                    address = $._decode_explicit<PresentationAddress>(
                        () => _decode_PresentationAddress
                    )(_el);
                },
                protocolInformation: (_el: _Element): void => {
                    protocolInformation = $._decode_explicit<
                        ProtocolInformation[]
                    >(() =>
                        $._decodeSetOf<ProtocolInformation>(
                            () => _decode_ProtocolInformation
                        )
                    )(_el);
                },
                category: (_el: _Element): void => {
                    category = $._decode_explicit<
                        MasterOrShadowAccessPoint_category
                    >(() => _decode_MasterOrShadowAccessPoint_category)(_el);
                },
                chainingRequired: (_el: _Element): void => {
                    chainingRequired = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MasterOrShadowAccessPoint,
                _extension_additions_list_spec_for_MasterOrShadowAccessPoint,
                _root_component_type_list_2_spec_for_MasterOrShadowAccessPoint,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new MasterOrShadowAccessPoint(
                /* SET_CONSTRUCTOR_CALL */ ae_title,
                address,
                protocolInformation,
                category,
                chainingRequired,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_MasterOrShadowAccessPoint(el);
}
/**
 * @summary Encodes a(n) MasterOrShadowAccessPoint into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MasterOrShadowAccessPoint, encoded as an ASN.1 Element.
 */
export function _encode_MasterOrShadowAccessPoint(
    value: MasterOrShadowAccessPoint,
    elGetter: $.ASN1Encoder<MasterOrShadowAccessPoint>
) {
    if (!_cached_encoder_for_MasterOrShadowAccessPoint) {
        _cached_encoder_for_MasterOrShadowAccessPoint = function (
            value: MasterOrShadowAccessPoint,
            elGetter: $.ASN1Encoder<MasterOrShadowAccessPoint>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_Name,
                                $.BER
                            )(value.ae_title, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_PresentationAddress,
                                $.BER
                            )(value.address, $.BER),
                            /* IF_ABSENT  */ value.protocolInformation ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<ProtocolInformation>(
                                              () => _encode_ProtocolInformation,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.protocolInformation, $.BER),
                            /* IF_DEFAULT */ value.category === undefined ||
                            $.deepEq(
                                value.category,
                                MasterOrShadowAccessPoint._default_value_for_category
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          _encode_MasterOrShadowAccessPoint_category,
                                      $.BER
                                  )(value.category, $.BER),
                            /* IF_DEFAULT */ value.chainingRequired ===
                                undefined ||
                            $.deepEq(
                                value.chainingRequired,
                                MasterOrShadowAccessPoint._default_value_for_chainingRequired
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.chainingRequired, $.BER),
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
    return _cached_encoder_for_MasterOrShadowAccessPoint(value, elGetter);
}

export type MasterAndShadowAccessPoints<> = MasterOrShadowAccessPoint[]; // SetOfType
let _cached_decoder_for_MasterAndShadowAccessPoints: $.ASN1Decoder<
    MasterAndShadowAccessPoints
> | null = null;
let _cached_encoder_for_MasterAndShadowAccessPoints: $.ASN1Encoder<
    MasterAndShadowAccessPoints
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MasterAndShadowAccessPoints
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MasterAndShadowAccessPoints} The decoded data structure.
 */
export function _decode_MasterAndShadowAccessPoints(el: _Element) {
    if (!_cached_decoder_for_MasterAndShadowAccessPoints) {
        _cached_decoder_for_MasterAndShadowAccessPoints = $._decodeSetOf<
            MasterOrShadowAccessPoint
        >(() => _decode_MasterOrShadowAccessPoint);
    }
    return _cached_decoder_for_MasterAndShadowAccessPoints(el);
}
/**
 * @summary Encodes a(n) MasterAndShadowAccessPoints into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MasterAndShadowAccessPoints, encoded as an ASN.1 Element.
 */
export function _encode_MasterAndShadowAccessPoints(
    value: MasterAndShadowAccessPoints,
    elGetter: $.ASN1Encoder<MasterAndShadowAccessPoints>
) {
    if (!_cached_encoder_for_MasterAndShadowAccessPoints) {
        _cached_encoder_for_MasterAndShadowAccessPoints = $._encodeSetOf<
            MasterOrShadowAccessPoint
        >(() => _encode_MasterOrShadowAccessPoint, $.BER);
    }
    return _cached_encoder_for_MasterAndShadowAccessPoints(value, elGetter);
}

/**
 * @summary DitBridgeKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DitBridgeKnowledge ::= SEQUENCE {
 *   domainLocalID  UnboundedDirectoryString OPTIONAL,
 *   accessPoints   MasterAndShadowAccessPoints,
 *   ... }
 * ```
 *
 * @class
 */
export class DitBridgeKnowledge {
    constructor(
        /**
         * @summary `domainLocalID`.
         * @public
         * @readonly
         */
        readonly domainLocalID: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary `accessPoints`.
         * @public
         * @readonly
         */
        readonly accessPoints: MasterAndShadowAccessPoints,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DitBridgeKnowledge
     * @description
     *
     * This takes an `object` and converts it to a `DitBridgeKnowledge`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DitBridgeKnowledge`.
     * @returns {DitBridgeKnowledge}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof DitBridgeKnowledge]: DitBridgeKnowledge[_K] }
        >
    ): DitBridgeKnowledge {
        return new DitBridgeKnowledge(
            _o.domainLocalID,
            _o.accessPoints,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of DitBridgeKnowledge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DitBridgeKnowledge: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "domainLocalID",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "accessPoints",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DitBridgeKnowledge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DitBridgeKnowledge: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DitBridgeKnowledge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DitBridgeKnowledge: $.ComponentSpec[] = [];
let _cached_decoder_for_DitBridgeKnowledge: $.ASN1Decoder<
    DitBridgeKnowledge
> | null = null;
let _cached_encoder_for_DitBridgeKnowledge: $.ASN1Encoder<
    DitBridgeKnowledge
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DitBridgeKnowledge
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DitBridgeKnowledge} The decoded data structure.
 */
export function _decode_DitBridgeKnowledge(el: _Element) {
    if (!_cached_decoder_for_DitBridgeKnowledge) {
        _cached_decoder_for_DitBridgeKnowledge = function (
            el: _Element
        ): DitBridgeKnowledge {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let domainLocalID: OPTIONAL<UnboundedDirectoryString>;
            let accessPoints!: MasterAndShadowAccessPoints;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                domainLocalID: (_el: _Element): void => {
                    domainLocalID = _decode_UnboundedDirectoryString(_el);
                },
                accessPoints: (_el: _Element): void => {
                    accessPoints = _decode_MasterAndShadowAccessPoints(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DitBridgeKnowledge,
                _extension_additions_list_spec_for_DitBridgeKnowledge,
                _root_component_type_list_2_spec_for_DitBridgeKnowledge,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DitBridgeKnowledge(
                /* SEQUENCE_CONSTRUCTOR_CALL */ domainLocalID,
                accessPoints,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DitBridgeKnowledge(el);
}
/**
 * @summary Encodes a(n) DitBridgeKnowledge into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DitBridgeKnowledge, encoded as an ASN.1 Element.
 */
export function _encode_DitBridgeKnowledge(
    value: DitBridgeKnowledge,
    elGetter: $.ASN1Encoder<DitBridgeKnowledge>
) {
    if (!_cached_encoder_for_DitBridgeKnowledge) {
        _cached_encoder_for_DitBridgeKnowledge = function (
            value: DitBridgeKnowledge,
            elGetter: $.ASN1Encoder<DitBridgeKnowledge>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.domainLocalID === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.domainLocalID,
                                      $.BER
                                  ),
                            /* REQUIRED   */ _encode_MasterAndShadowAccessPoints(
                                value.accessPoints,
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
    return _cached_encoder_for_DitBridgeKnowledge(value, elGetter);
}

/**
 * @summary DSACredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSACredentials   ::=   CHOICE  {
 *   simple             [0]  SimpleCredentials,
 *   strong             [1]  StrongCredentials,
 *   externalProcedure  [2]  EXTERNAL,
 *   spkm               [3]  SpkmCredentials,
 *   ... }
 * ```
 */
export type DSACredentials =
    | { simple: SimpleCredentials } /* CHOICE_ALT_ROOT */
    | { strong: StrongCredentials } /* CHOICE_ALT_ROOT */
    | { externalProcedure: EXTERNAL } /* CHOICE_ALT_ROOT */
    | { spkm: SpkmCredentials } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_DSACredentials: $.ASN1Decoder<
    DSACredentials
> | null = null;
let _cached_encoder_for_DSACredentials: $.ASN1Encoder<
    DSACredentials
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DSACredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSACredentials} The decoded data structure.
 */
export function _decode_DSACredentials(el: _Element) {
    if (!_cached_decoder_for_DSACredentials) {
        _cached_decoder_for_DSACredentials = $._decode_extensible_choice<
            DSACredentials
        >({
            "CONTEXT 0": [
                "simple",
                $._decode_explicit<SimpleCredentials>(
                    () => _decode_SimpleCredentials
                ),
            ],
            "CONTEXT 1": [
                "strong",
                $._decode_explicit<StrongCredentials>(
                    () => _decode_StrongCredentials
                ),
            ],
            "CONTEXT 2": [
                "externalProcedure",
                $._decode_explicit<EXTERNAL>(() => $._decodeExternal),
            ],
            "CONTEXT 3": [
                "spkm",
                $._decode_explicit<SpkmCredentials>(
                    () => _decode_SpkmCredentials
                ),
            ],
        });
    }
    return _cached_decoder_for_DSACredentials(el);
}
/**
 * @summary Encodes a(n) DSACredentials into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSACredentials, encoded as an ASN.1 Element.
 */
export function _encode_DSACredentials(
    value: DSACredentials,
    elGetter: $.ASN1Encoder<DSACredentials>
) {
    if (!_cached_encoder_for_DSACredentials) {
        _cached_encoder_for_DSACredentials = $._encode_choice<DSACredentials>(
            {
                simple: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_SimpleCredentials,
                    $.BER
                ),
                strong: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_StrongCredentials,
                    $.BER
                ),
                externalProcedure: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => $._encodeExternal,
                    $.BER
                ),
                spkm: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_SpkmCredentials,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DSACredentials(value, elGetter);
}

/**
 * @summary DSABindArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSABindArgument ::= SET  {
 *   credentials  [0]  DSACredentials OPTIONAL,
 *   versions     [1]  Versions DEFAULT {v1},
 *   ... }
 * ```
 *
 * @class
 */
export class DSABindArgument {
    constructor(
        /**
         * @summary `credentials`.
         * @public
         * @readonly
         */
        readonly credentials: OPTIONAL<DSACredentials>,
        /**
         * @summary `versions`.
         * @public
         * @readonly
         */
        readonly versions: OPTIONAL<Versions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DSABindArgument
     * @description
     *
     * This takes an `object` and converts it to a `DSABindArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DSABindArgument`.
     * @returns {DSABindArgument}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DSABindArgument]: DSABindArgument[_K] }>
    ): DSABindArgument {
        return new DSABindArgument(
            _o.credentials,
            _o.versions,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `versions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_versions() {
        return (() => {
            const _ret = new Uint8ClampedArray(Math.max(0, 1));
            _ret[Versions_v1] = TRUE_BIT;
            return _ret;
        })();
    }
}
/**
 * @summary The Leading Root Component Types of DSABindArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DSABindArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "credentials",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "versions",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DSABindArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DSABindArgument: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DSABindArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DSABindArgument: $.ComponentSpec[] = [];
let _cached_decoder_for_DSABindArgument: $.ASN1Decoder<
    DSABindArgument
> | null = null;
let _cached_encoder_for_DSABindArgument: $.ASN1Encoder<
    DSABindArgument
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DSABindArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSABindArgument} The decoded data structure.
 */
export function _decode_DSABindArgument(el: _Element) {
    if (!_cached_decoder_for_DSABindArgument) {
        _cached_decoder_for_DSABindArgument = function (
            el: _Element
        ): DSABindArgument {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let credentials: OPTIONAL<DSACredentials>;
            let versions: OPTIONAL<Versions> =
                DSABindArgument._default_value_for_versions;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                credentials: (_el: _Element): void => {
                    credentials = $._decode_explicit<DSACredentials>(
                        () => _decode_DSACredentials
                    )(_el);
                },
                versions: (_el: _Element): void => {
                    versions = $._decode_explicit<Versions>(
                        () => _decode_Versions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DSABindArgument,
                _extension_additions_list_spec_for_DSABindArgument,
                _root_component_type_list_2_spec_for_DSABindArgument,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DSABindArgument(
                /* SET_CONSTRUCTOR_CALL */ credentials,
                versions,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DSABindArgument(el);
}
/**
 * @summary Encodes a(n) DSABindArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSABindArgument, encoded as an ASN.1 Element.
 */
export function _encode_DSABindArgument(
    value: DSABindArgument,
    elGetter: $.ASN1Encoder<DSABindArgument>
) {
    if (!_cached_encoder_for_DSABindArgument) {
        _cached_encoder_for_DSABindArgument = function (
            value: DSABindArgument,
            elGetter: $.ASN1Encoder<DSABindArgument>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.credentials === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_DSACredentials,
                                      $.BER
                                  )(value.credentials, $.BER),
                            /* IF_DEFAULT */ value.versions === undefined ||
                            $.deepEq(
                                value.versions,
                                DSABindArgument._default_value_for_versions
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Versions,
                                      $.BER
                                  )(value.versions, $.BER),
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
    return _cached_encoder_for_DSABindArgument(value, elGetter);
}

export type DSABindResult<> = DSABindArgument; // DefinedType
let _cached_decoder_for_DSABindResult: $.ASN1Decoder<
    DSABindResult
> | null = null;
let _cached_encoder_for_DSABindResult: $.ASN1Encoder<
    DSABindResult
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DSABindResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSABindResult} The decoded data structure.
 */
export function _decode_DSABindResult(el: _Element) {
    if (!_cached_decoder_for_DSABindResult) {
        _cached_decoder_for_DSABindResult = _decode_DSABindArgument;
    }
    return _cached_decoder_for_DSABindResult(el);
}
/**
 * @summary Encodes a(n) DSABindResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSABindResult, encoded as an ASN.1 Element.
 */
export function _encode_DSABindResult(
    value: DSABindResult,
    elGetter: $.ASN1Encoder<DSABindResult>
) {
    if (!_cached_encoder_for_DSABindResult) {
        _cached_encoder_for_DSABindResult = _encode_DSABindArgument;
    }
    return _cached_encoder_for_DSABindResult(value, elGetter);
}

/**
 * @summary dSABind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dSABind OPERATION ::= {
 *   ARGUMENT     DSABindArgument
 *   RESULT       DSABindResult
 *   ERRORS       { directoryBindError } }
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const dSABind: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DSABindArgument,
        "&ResultType": _decode_DSABindResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_DSABindArgument,
        "&ResultType": _encode_DSABindResult,
    },
    "&Errors": undefined,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary OperationProgress_nameResolutionPhase
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationProgress-nameResolutionPhase ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_OperationProgress_nameResolutionPhase {
    notStarted = 1,
    proceeding = 2,
    completed = 3,
}
/**
 * @summary OperationProgress_nameResolutionPhase
 */
export type OperationProgress_nameResolutionPhase =
    | _enum_for_OperationProgress_nameResolutionPhase
    | ENUMERATED;
/**
 * @summary OperationProgress_nameResolutionPhase_notStarted
 * @constant
 * @type {number}
 */
export const OperationProgress_nameResolutionPhase_notStarted: OperationProgress_nameResolutionPhase = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary OperationProgress_nameResolutionPhase_proceeding
 * @constant
 * @type {number}
 */
export const OperationProgress_nameResolutionPhase_proceeding: OperationProgress_nameResolutionPhase = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary OperationProgress_nameResolutionPhase_completed
 * @constant
 * @type {number}
 */
export const OperationProgress_nameResolutionPhase_completed: OperationProgress_nameResolutionPhase = 3; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_OperationProgress_nameResolutionPhase: $.ASN1Decoder<
    OperationProgress_nameResolutionPhase
> | null = null;
let _cached_encoder_for_OperationProgress_nameResolutionPhase: $.ASN1Encoder<
    OperationProgress_nameResolutionPhase
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OperationProgress_nameResolutionPhase
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationProgress_nameResolutionPhase} The decoded data structure.
 */
export function _decode_OperationProgress_nameResolutionPhase(el: _Element) {
    if (!_cached_decoder_for_OperationProgress_nameResolutionPhase) {
        _cached_decoder_for_OperationProgress_nameResolutionPhase =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_OperationProgress_nameResolutionPhase(el);
}
/**
 * @summary Encodes a(n) OperationProgress_nameResolutionPhase into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationProgress_nameResolutionPhase, encoded as an ASN.1 Element.
 */
export function _encode_OperationProgress_nameResolutionPhase(
    value: OperationProgress_nameResolutionPhase,
    elGetter: $.ASN1Encoder<OperationProgress_nameResolutionPhase>
) {
    if (!_cached_encoder_for_OperationProgress_nameResolutionPhase) {
        _cached_encoder_for_OperationProgress_nameResolutionPhase =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_OperationProgress_nameResolutionPhase(
        value,
        elGetter
    );
}

/**
 * @summary OperationProgress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationProgress ::= SET {
 *   nameResolutionPhase  [0]  ENUMERATED {
 *     notStarted  (1),
 *     proceeding  (2),
 *     completed   (3),
 *     ... },
 *   nextRDNToBeResolved  [1]  INTEGER OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class OperationProgress {
    constructor(
        /**
         * @summary `nameResolutionPhase`.
         * @public
         * @readonly
         */
        readonly nameResolutionPhase: OperationProgress_nameResolutionPhase,
        /**
         * @summary `nextRDNToBeResolved`.
         * @public
         * @readonly
         */
        readonly nextRDNToBeResolved: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a OperationProgress
     * @description
     *
     * This takes an `object` and converts it to a `OperationProgress`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OperationProgress`.
     * @returns {OperationProgress}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof OperationProgress]: OperationProgress[_K] }>
    ): OperationProgress {
        return new OperationProgress(
            _o.nameResolutionPhase,
            _o.nextRDNToBeResolved,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `nameResolutionPhase`
     * @public
     * @static
     */

    public static _enum_for_nameResolutionPhase = _enum_for_OperationProgress_nameResolutionPhase;
}
/**
 * @summary The Leading Root Component Types of OperationProgress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OperationProgress: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "nameResolutionPhase",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nextRDNToBeResolved",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of OperationProgress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OperationProgress: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OperationProgress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OperationProgress: $.ComponentSpec[] = [];
let _cached_decoder_for_OperationProgress: $.ASN1Decoder<
    OperationProgress
> | null = null;
let _cached_encoder_for_OperationProgress: $.ASN1Encoder<
    OperationProgress
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OperationProgress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationProgress} The decoded data structure.
 */
export function _decode_OperationProgress(el: _Element) {
    if (!_cached_decoder_for_OperationProgress) {
        _cached_decoder_for_OperationProgress = function (
            el: _Element
        ): OperationProgress {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let nameResolutionPhase!: OperationProgress_nameResolutionPhase;
            let nextRDNToBeResolved: OPTIONAL<INTEGER>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                nameResolutionPhase: (_el: _Element): void => {
                    nameResolutionPhase = $._decode_explicit<
                        OperationProgress_nameResolutionPhase
                    >(() => _decode_OperationProgress_nameResolutionPhase)(_el);
                },
                nextRDNToBeResolved: (_el: _Element): void => {
                    nextRDNToBeResolved = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OperationProgress,
                _extension_additions_list_spec_for_OperationProgress,
                _root_component_type_list_2_spec_for_OperationProgress,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new OperationProgress(
                /* SET_CONSTRUCTOR_CALL */ nameResolutionPhase,
                nextRDNToBeResolved,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_OperationProgress(el);
}
/**
 * @summary Encodes a(n) OperationProgress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationProgress, encoded as an ASN.1 Element.
 */
export function _encode_OperationProgress(
    value: OperationProgress,
    elGetter: $.ASN1Encoder<OperationProgress>
) {
    if (!_cached_encoder_for_OperationProgress) {
        _cached_encoder_for_OperationProgress = function (
            value: OperationProgress,
            elGetter: $.ASN1Encoder<OperationProgress>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () =>
                                    _encode_OperationProgress_nameResolutionPhase,
                                $.BER
                            )(value.nameResolutionPhase, $.BER),
                            /* IF_ABSENT  */ value.nextRDNToBeResolved ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.nextRDNToBeResolved, $.BER),
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
    return _cached_encoder_for_OperationProgress(value, elGetter);
}

/**
 * @summary TraceItem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TraceItem ::= SET {
 *   dsa                [0]  Name,
 *   targetObject       [1]  Name OPTIONAL,
 *   operationProgress  [2]  OperationProgress,
 *   ... }
 * ```
 *
 * @class
 */
export class TraceItem {
    constructor(
        /**
         * @summary `dsa`.
         * @public
         * @readonly
         */
        readonly dsa: Name,
        /**
         * @summary `targetObject`.
         * @public
         * @readonly
         */
        readonly targetObject: OPTIONAL<Name>,
        /**
         * @summary `operationProgress`.
         * @public
         * @readonly
         */
        readonly operationProgress: OperationProgress,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TraceItem
     * @description
     *
     * This takes an `object` and converts it to a `TraceItem`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TraceItem`.
     * @returns {TraceItem}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TraceItem]: TraceItem[_K] }>
    ): TraceItem {
        return new TraceItem(
            _o.dsa,
            _o.targetObject,
            _o.operationProgress,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of TraceItem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TraceItem: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "dsa",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "targetObject",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "operationProgress",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TraceItem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TraceItem: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TraceItem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TraceItem: $.ComponentSpec[] = [];
let _cached_decoder_for_TraceItem: $.ASN1Decoder<TraceItem> | null = null;
let _cached_encoder_for_TraceItem: $.ASN1Encoder<TraceItem> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TraceItem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TraceItem} The decoded data structure.
 */
export function _decode_TraceItem(el: _Element) {
    if (!_cached_decoder_for_TraceItem) {
        _cached_decoder_for_TraceItem = function (el: _Element): TraceItem {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let dsa!: Name;
            let targetObject: OPTIONAL<Name>;
            let operationProgress!: OperationProgress;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                dsa: (_el: _Element): void => {
                    dsa = $._decode_explicit<Name>(() => _decode_Name)(_el);
                },
                targetObject: (_el: _Element): void => {
                    targetObject = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                operationProgress: (_el: _Element): void => {
                    operationProgress = $._decode_explicit<OperationProgress>(
                        () => _decode_OperationProgress
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TraceItem,
                _extension_additions_list_spec_for_TraceItem,
                _root_component_type_list_2_spec_for_TraceItem,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TraceItem(
                /* SET_CONSTRUCTOR_CALL */ dsa,
                targetObject,
                operationProgress,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TraceItem(el);
}
/**
 * @summary Encodes a(n) TraceItem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceItem, encoded as an ASN.1 Element.
 */
export function _encode_TraceItem(
    value: TraceItem,
    elGetter: $.ASN1Encoder<TraceItem>
) {
    if (!_cached_encoder_for_TraceItem) {
        _cached_encoder_for_TraceItem = function (
            value: TraceItem,
            elGetter: $.ASN1Encoder<TraceItem>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_Name,
                                $.BER
                            )(value.dsa, $.BER),
                            /* IF_ABSENT  */ value.targetObject === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Name,
                                      $.BER
                                  )(value.targetObject, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => _encode_OperationProgress,
                                $.BER
                            )(value.operationProgress, $.BER),
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
    return _cached_encoder_for_TraceItem(value, elGetter);
}

export type TraceInformation<> = TraceItem[]; // SequenceOfType
let _cached_decoder_for_TraceInformation: $.ASN1Decoder<
    TraceInformation
> | null = null;
let _cached_encoder_for_TraceInformation: $.ASN1Encoder<
    TraceInformation
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TraceInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TraceInformation} The decoded data structure.
 */
export function _decode_TraceInformation(el: _Element) {
    if (!_cached_decoder_for_TraceInformation) {
        _cached_decoder_for_TraceInformation = $._decodeSequenceOf<TraceItem>(
            () => _decode_TraceItem
        );
    }
    return _cached_decoder_for_TraceInformation(el);
}
/**
 * @summary Encodes a(n) TraceInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceInformation, encoded as an ASN.1 Element.
 */
export function _encode_TraceInformation(
    value: TraceInformation,
    elGetter: $.ASN1Encoder<TraceInformation>
) {
    if (!_cached_encoder_for_TraceInformation) {
        _cached_encoder_for_TraceInformation = $._encodeSequenceOf<TraceItem>(
            () => _encode_TraceItem,
            $.BER
        );
    }
    return _cached_encoder_for_TraceInformation(value, elGetter);
}

/**
 * @summary ReferenceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReferenceType ::= ENUMERATED {
 *   superior               (1),
 *   subordinate            (2),
 *   cross                  (3),
 *   nonSpecificSubordinate (4),
 *   supplier               (5),
 *   master                 (6),
 *   immediateSuperior      (7),
 *   self                   (8),
 *   ditBridge              (9),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ReferenceType {
    superior = 1,
    subordinate = 2,
    cross = 3,
    nonSpecificSubordinate = 4,
    supplier = 5,
    master = 6,
    immediateSuperior = 7,
    self = 8,
    ditBridge = 9,
}
/**
 * @summary ReferenceType
 */
export type ReferenceType = _enum_for_ReferenceType | ENUMERATED;
/**
 * @summary ReferenceType_superior
 * @constant
 * @type {number}
 */
export const ReferenceType_superior: ReferenceType = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ReferenceType_subordinate
 * @constant
 * @type {number}
 */
export const ReferenceType_subordinate: ReferenceType = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ReferenceType_cross
 * @constant
 * @type {number}
 */
export const ReferenceType_cross: ReferenceType = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ReferenceType_nonSpecificSubordinate
 * @constant
 * @type {number}
 */
export const ReferenceType_nonSpecificSubordinate: ReferenceType = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ReferenceType_supplier
 * @constant
 * @type {number}
 */
export const ReferenceType_supplier: ReferenceType = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ReferenceType_master
 * @constant
 * @type {number}
 */
export const ReferenceType_master: ReferenceType = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ReferenceType_immediateSuperior
 * @constant
 * @type {number}
 */
export const ReferenceType_immediateSuperior: ReferenceType = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ReferenceType_self
 * @constant
 * @type {number}
 */
export const ReferenceType_self: ReferenceType = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ReferenceType_ditBridge
 * @constant
 * @type {number}
 */
export const ReferenceType_ditBridge: ReferenceType = 9; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_ReferenceType: $.ASN1Decoder<
    ReferenceType
> | null = null;
let _cached_encoder_for_ReferenceType: $.ASN1Encoder<
    ReferenceType
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ReferenceType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReferenceType} The decoded data structure.
 */
export function _decode_ReferenceType(el: _Element) {
    if (!_cached_decoder_for_ReferenceType) {
        _cached_decoder_for_ReferenceType = $._decodeEnumerated;
    }
    return _cached_decoder_for_ReferenceType(el);
}
/**
 * @summary Encodes a(n) ReferenceType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReferenceType, encoded as an ASN.1 Element.
 */
export function _encode_ReferenceType(
    value: ReferenceType,
    elGetter: $.ASN1Encoder<ReferenceType>
) {
    if (!_cached_encoder_for_ReferenceType) {
        _cached_encoder_for_ReferenceType = $._encodeEnumerated;
    }
    return _cached_encoder_for_ReferenceType(value, elGetter);
}

export type DomainInfo<> = _Element; // ObjectClassFieldType
let _cached_decoder_for_DomainInfo: $.ASN1Decoder<DomainInfo> | null = null;
let _cached_encoder_for_DomainInfo: $.ASN1Encoder<DomainInfo> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DomainInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DomainInfo} The decoded data structure.
 */
export function _decode_DomainInfo(el: _Element) {
    if (!_cached_decoder_for_DomainInfo) {
        _cached_decoder_for_DomainInfo = $._decodeAny;
    }
    return _cached_decoder_for_DomainInfo(el);
}
/**
 * @summary Encodes a(n) DomainInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainInfo, encoded as an ASN.1 Element.
 */
export function _encode_DomainInfo(
    value: DomainInfo,
    elGetter: $.ASN1Encoder<DomainInfo>
) {
    if (!_cached_encoder_for_DomainInfo) {
        _cached_encoder_for_DomainInfo = $._encodeAny;
    }
    return _cached_encoder_for_DomainInfo(value, elGetter);
}

/**
 * @summary Time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Time  ::=  CHOICE {
 *   utcTime          UTCTime,
 *   generalizedTime  GeneralizedTime,
 *   ... }
 * ```
 */
export type Time =
    | { utcTime: UTCTime } /* CHOICE_ALT_ROOT */
    | { generalizedTime: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Time: $.ASN1Decoder<Time> | null = null;
let _cached_encoder_for_Time: $.ASN1Encoder<Time> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Time
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Time} The decoded data structure.
 */
export function _decode_Time(el: _Element) {
    if (!_cached_decoder_for_Time) {
        _cached_decoder_for_Time = $._decode_extensible_choice<Time>({
            "UNIVERSAL 23": ["utcTime", $._decodeUTCTime],
            "UNIVERSAL 24": ["generalizedTime", $._decodeGeneralizedTime],
        });
    }
    return _cached_decoder_for_Time(el);
}
/**
 * @summary Encodes a(n) Time into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Time, encoded as an ASN.1 Element.
 */
export function _encode_Time(value: Time, elGetter: $.ASN1Encoder<Time>) {
    if (!_cached_encoder_for_Time) {
        _cached_encoder_for_Time = $._encode_choice<Time>(
            {
                utcTime: $._encodeUTCTime,
                generalizedTime: $._encodeGeneralizedTime,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Time(value, elGetter);
}

export type Exclusions<> = RDNSequence[]; // SetOfType
let _cached_decoder_for_Exclusions: $.ASN1Decoder<Exclusions> | null = null;
let _cached_encoder_for_Exclusions: $.ASN1Encoder<Exclusions> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Exclusions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Exclusions} The decoded data structure.
 */
export function _decode_Exclusions(el: _Element) {
    if (!_cached_decoder_for_Exclusions) {
        _cached_decoder_for_Exclusions = $._decodeSetOf<RDNSequence>(
            () => _decode_RDNSequence
        );
    }
    return _cached_decoder_for_Exclusions(el);
}
/**
 * @summary Encodes a(n) Exclusions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Exclusions, encoded as an ASN.1 Element.
 */
export function _encode_Exclusions(
    value: Exclusions,
    elGetter: $.ASN1Encoder<Exclusions>
) {
    if (!_cached_encoder_for_Exclusions) {
        _cached_encoder_for_Exclusions = $._encodeSetOf<RDNSequence>(
            () => _encode_RDNSequence,
            $.BER
        );
    }
    return _cached_encoder_for_Exclusions(value, elGetter);
}

/**
 * @summary ChainingArguments
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChainingArguments ::= SET {
 *   originator                 [0]  DistinguishedName OPTIONAL,
 *   targetObject               [1]  DistinguishedName OPTIONAL,
 *   operationProgress          [2]  OperationProgress
 *                                DEFAULT {nameResolutionPhase notStarted},
 *   traceInformation           [3]  TraceInformation,
 *   aliasDereferenced          [4]  BOOLEAN DEFAULT FALSE,
 *   aliasedRDNs                [5]  INTEGER OPTIONAL,
 *   returnCrossRefs            [6]  BOOLEAN DEFAULT FALSE,
 *   referenceType              [7]  ReferenceType DEFAULT superior,
 *   info                       [8]  DomainInfo OPTIONAL,
 *   timeLimit                  [9]  Time OPTIONAL,
 *   securityParameters         [10] SecurityParameters DEFAULT {},
 *   entryOnly                  [11] BOOLEAN DEFAULT FALSE,
 *   uniqueIdentifier           [12] UniqueIdentifier OPTIONAL,
 *   authenticationLevel        [13] AuthenticationLevel OPTIONAL,
 *   exclusions                 [14] Exclusions OPTIONAL,
 *   excludeShadows             [15] BOOLEAN DEFAULT FALSE,
 *   nameResolveOnMaster        [16] BOOLEAN DEFAULT FALSE,
 *   operationIdentifier        [17] INTEGER OPTIONAL,
 *   searchRuleId               [18] SearchRuleId OPTIONAL,
 *   chainedRelaxation          [19] MRMapping OPTIONAL,
 *   relatedEntry               [20] INTEGER OPTIONAL,
 *   dspPaging                  [21] BOOLEAN DEFAULT FALSE,
 *   --                         [22] Not to be used
 *   --                         [23] Not to be used
 *   excludeWriteableCopies     [24] BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 * @class
 */
export class ChainingArguments {
    constructor(
        /**
         * @summary `originator`.
         * @public
         * @readonly
         */
        readonly originator: OPTIONAL<DistinguishedName>,
        /**
         * @summary `targetObject`.
         * @public
         * @readonly
         */
        readonly targetObject: OPTIONAL<DistinguishedName>,
        /**
         * @summary `operationProgress`.
         * @public
         * @readonly
         */
        readonly operationProgress: OPTIONAL<OperationProgress>,
        /**
         * @summary `traceInformation`.
         * @public
         * @readonly
         */
        readonly traceInformation: TraceInformation,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced: OPTIONAL<BOOLEAN>,
        /**
         * @summary `aliasedRDNs`.
         * @public
         * @readonly
         */
        readonly aliasedRDNs: OPTIONAL<INTEGER>,
        /**
         * @summary `returnCrossRefs`.
         * @public
         * @readonly
         */
        readonly returnCrossRefs: OPTIONAL<BOOLEAN>,
        /**
         * @summary `referenceType`.
         * @public
         * @readonly
         */
        readonly referenceType: OPTIONAL<ReferenceType>,
        /**
         * @summary `info`.
         * @public
         * @readonly
         */
        readonly info: OPTIONAL<DomainInfo>,
        /**
         * @summary `timeLimit`.
         * @public
         * @readonly
         */
        readonly timeLimit: OPTIONAL<Time>,
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<SecurityParameters>,
        /**
         * @summary `entryOnly`.
         * @public
         * @readonly
         */
        readonly entryOnly: OPTIONAL<BOOLEAN>,
        /**
         * @summary `uniqueIdentifier`.
         * @public
         * @readonly
         */
        readonly uniqueIdentifier: OPTIONAL<UniqueIdentifier>,
        /**
         * @summary `authenticationLevel`.
         * @public
         * @readonly
         */
        readonly authenticationLevel: OPTIONAL<AuthenticationLevel>,
        /**
         * @summary `exclusions`.
         * @public
         * @readonly
         */
        readonly exclusions: OPTIONAL<Exclusions>,
        /**
         * @summary `excludeShadows`.
         * @public
         * @readonly
         */
        readonly excludeShadows: OPTIONAL<BOOLEAN>,
        /**
         * @summary `nameResolveOnMaster`.
         * @public
         * @readonly
         */
        readonly nameResolveOnMaster: OPTIONAL<BOOLEAN>,
        /**
         * @summary `operationIdentifier`.
         * @public
         * @readonly
         */
        readonly operationIdentifier: OPTIONAL<INTEGER>,
        /**
         * @summary `searchRuleId`.
         * @public
         * @readonly
         */
        readonly searchRuleId: OPTIONAL<SearchRuleId>,
        /**
         * @summary `chainedRelaxation`.
         * @public
         * @readonly
         */
        readonly chainedRelaxation: OPTIONAL<MRMapping>,
        /**
         * @summary `relatedEntry`.
         * @public
         * @readonly
         */
        readonly relatedEntry: OPTIONAL<INTEGER>,
        /**
         * @summary `dspPaging`.
         * @public
         * @readonly
         */
        readonly dspPaging: OPTIONAL<BOOLEAN>,
        /**
         * @summary `excludeWriteableCopies`.
         * @public
         * @readonly
         */
        readonly excludeWriteableCopies: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ChainingArguments
     * @description
     *
     * This takes an `object` and converts it to a `ChainingArguments`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChainingArguments`.
     * @returns {ChainingArguments}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ChainingArguments]: ChainingArguments[_K] }>
    ): ChainingArguments {
        return new ChainingArguments(
            _o.originator,
            _o.targetObject,
            _o.operationProgress,
            _o.traceInformation,
            _o.aliasDereferenced,
            _o.aliasedRDNs,
            _o.returnCrossRefs,
            _o.referenceType,
            _o.info,
            _o.timeLimit,
            _o.securityParameters,
            _o.entryOnly,
            _o.uniqueIdentifier,
            _o.authenticationLevel,
            _o.exclusions,
            _o.excludeShadows,
            _o.nameResolveOnMaster,
            _o.operationIdentifier,
            _o.searchRuleId,
            _o.chainedRelaxation,
            _o.relatedEntry,
            _o.dspPaging,
            _o.excludeWriteableCopies,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `operationProgress`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_operationProgress() {
        return OperationProgress._from_object({
            nameResolutionPhase:
                OperationProgress._enum_for_nameResolutionPhase.notStarted,
        });
    }
    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `returnCrossRefs`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_returnCrossRefs() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `referenceType`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_referenceType() {
        return ReferenceType_superior;
    }
    /**
     * @summary Getter that returns the default value for `securityParameters`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_securityParameters() {
        return SecurityParameters._from_object({});
    }
    /**
     * @summary Getter that returns the default value for `entryOnly`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_entryOnly() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `excludeShadows`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_excludeShadows() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `nameResolveOnMaster`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_nameResolveOnMaster() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `dspPaging`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_dspPaging() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `excludeWriteableCopies`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_excludeWriteableCopies() {
        return false;
    }
    /**
     * @summary The enum used as the type of the component `referenceType`
     * @public
     * @static
     */

    public static _enum_for_referenceType = _enum_for_ReferenceType;
}
/**
 * @summary The Leading Root Component Types of ChainingArguments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ChainingArguments: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "originator",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "targetObject",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "operationProgress",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "traceInformation",
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasDereferenced",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasedRDNs",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "returnCrossRefs",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "referenceType",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "info",
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "timeLimit",
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "entryOnly",
        true,
        $.hasTag(_TagClass.context, 11),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "uniqueIdentifier",
        true,
        $.hasTag(_TagClass.context, 12),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "authenticationLevel",
        true,
        $.hasTag(_TagClass.context, 13),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "exclusions",
        true,
        $.hasTag(_TagClass.context, 14),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "excludeShadows",
        true,
        $.hasTag(_TagClass.context, 15),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nameResolveOnMaster",
        true,
        $.hasTag(_TagClass.context, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "operationIdentifier",
        true,
        $.hasTag(_TagClass.context, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "searchRuleId",
        true,
        $.hasTag(_TagClass.context, 18),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "chainedRelaxation",
        true,
        $.hasTag(_TagClass.context, 19),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "relatedEntry",
        true,
        $.hasTag(_TagClass.context, 20),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "dspPaging",
        true,
        $.hasTag(_TagClass.context, 21),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "excludeWriteableCopies",
        true,
        $.hasTag(_TagClass.context, 24),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ChainingArguments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ChainingArguments: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ChainingArguments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ChainingArguments: $.ComponentSpec[] = [];
let _cached_decoder_for_ChainingArguments: $.ASN1Decoder<
    ChainingArguments
> | null = null;
let _cached_encoder_for_ChainingArguments: $.ASN1Encoder<
    ChainingArguments
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ChainingArguments
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChainingArguments} The decoded data structure.
 */
export function _decode_ChainingArguments(el: _Element) {
    if (!_cached_decoder_for_ChainingArguments) {
        _cached_decoder_for_ChainingArguments = function (
            el: _Element
        ): ChainingArguments {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let originator: OPTIONAL<DistinguishedName>;
            let targetObject: OPTIONAL<DistinguishedName>;
            let operationProgress: OPTIONAL<OperationProgress> =
                ChainingArguments._default_value_for_operationProgress;
            let traceInformation!: TraceInformation;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                ChainingArguments._default_value_for_aliasDereferenced;
            let aliasedRDNs: OPTIONAL<INTEGER>;
            let returnCrossRefs: OPTIONAL<BOOLEAN> =
                ChainingArguments._default_value_for_returnCrossRefs;
            let referenceType: OPTIONAL<ReferenceType> =
                ChainingArguments._default_value_for_referenceType;
            let info: OPTIONAL<DomainInfo>;
            let timeLimit: OPTIONAL<Time>;
            let securityParameters: OPTIONAL<SecurityParameters> =
                ChainingArguments._default_value_for_securityParameters;
            let entryOnly: OPTIONAL<BOOLEAN> =
                ChainingArguments._default_value_for_entryOnly;
            let uniqueIdentifier: OPTIONAL<UniqueIdentifier>;
            let authenticationLevel: OPTIONAL<AuthenticationLevel>;
            let exclusions: OPTIONAL<Exclusions>;
            let excludeShadows: OPTIONAL<BOOLEAN> =
                ChainingArguments._default_value_for_excludeShadows;
            let nameResolveOnMaster: OPTIONAL<BOOLEAN> =
                ChainingArguments._default_value_for_nameResolveOnMaster;
            let operationIdentifier: OPTIONAL<INTEGER>;
            let searchRuleId: OPTIONAL<SearchRuleId>;
            let chainedRelaxation: OPTIONAL<MRMapping>;
            let relatedEntry: OPTIONAL<INTEGER>;
            let dspPaging: OPTIONAL<BOOLEAN> =
                ChainingArguments._default_value_for_dspPaging;
            let excludeWriteableCopies: OPTIONAL<BOOLEAN> =
                ChainingArguments._default_value_for_excludeWriteableCopies;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                originator: (_el: _Element): void => {
                    originator = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                targetObject: (_el: _Element): void => {
                    targetObject = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                operationProgress: (_el: _Element): void => {
                    operationProgress = $._decode_explicit<OperationProgress>(
                        () => _decode_OperationProgress
                    )(_el);
                },
                traceInformation: (_el: _Element): void => {
                    traceInformation = $._decode_explicit<TraceInformation>(
                        () => _decode_TraceInformation
                    )(_el);
                },
                aliasDereferenced: (_el: _Element): void => {
                    aliasDereferenced = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                aliasedRDNs: (_el: _Element): void => {
                    aliasedRDNs = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                returnCrossRefs: (_el: _Element): void => {
                    returnCrossRefs = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                referenceType: (_el: _Element): void => {
                    referenceType = $._decode_explicit<ReferenceType>(
                        () => _decode_ReferenceType
                    )(_el);
                },
                info: (_el: _Element): void => {
                    info = $._decode_explicit<DomainInfo>(
                        () => _decode_DomainInfo
                    )(_el);
                },
                timeLimit: (_el: _Element): void => {
                    timeLimit = $._decode_explicit<Time>(() => _decode_Time)(
                        _el
                    );
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
                entryOnly: (_el: _Element): void => {
                    entryOnly = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                uniqueIdentifier: (_el: _Element): void => {
                    uniqueIdentifier = $._decode_explicit<UniqueIdentifier>(
                        () => _decode_UniqueIdentifier
                    )(_el);
                },
                authenticationLevel: (_el: _Element): void => {
                    authenticationLevel = $._decode_explicit<
                        AuthenticationLevel
                    >(() => _decode_AuthenticationLevel)(_el);
                },
                exclusions: (_el: _Element): void => {
                    exclusions = $._decode_explicit<Exclusions>(
                        () => _decode_Exclusions
                    )(_el);
                },
                excludeShadows: (_el: _Element): void => {
                    excludeShadows = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                nameResolveOnMaster: (_el: _Element): void => {
                    nameResolveOnMaster = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                operationIdentifier: (_el: _Element): void => {
                    operationIdentifier = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                searchRuleId: (_el: _Element): void => {
                    searchRuleId = $._decode_explicit<SearchRuleId>(
                        () => _decode_SearchRuleId
                    )(_el);
                },
                chainedRelaxation: (_el: _Element): void => {
                    chainedRelaxation = $._decode_explicit<MRMapping>(
                        () => _decode_MRMapping
                    )(_el);
                },
                relatedEntry: (_el: _Element): void => {
                    relatedEntry = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                dspPaging: (_el: _Element): void => {
                    dspPaging = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                excludeWriteableCopies: (_el: _Element): void => {
                    excludeWriteableCopies = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ChainingArguments,
                _extension_additions_list_spec_for_ChainingArguments,
                _root_component_type_list_2_spec_for_ChainingArguments,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ChainingArguments(
                /* SET_CONSTRUCTOR_CALL */ originator,
                targetObject,
                operationProgress,
                traceInformation,
                aliasDereferenced,
                aliasedRDNs,
                returnCrossRefs,
                referenceType,
                info,
                timeLimit,
                securityParameters,
                entryOnly,
                uniqueIdentifier,
                authenticationLevel,
                exclusions,
                excludeShadows,
                nameResolveOnMaster,
                operationIdentifier,
                searchRuleId,
                chainedRelaxation,
                relatedEntry,
                dspPaging,
                excludeWriteableCopies,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ChainingArguments(el);
}
/**
 * @summary Encodes a(n) ChainingArguments into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChainingArguments, encoded as an ASN.1 Element.
 */
export function _encode_ChainingArguments(
    value: ChainingArguments,
    elGetter: $.ASN1Encoder<ChainingArguments>
) {
    if (!_cached_encoder_for_ChainingArguments) {
        _cached_encoder_for_ChainingArguments = function (
            value: ChainingArguments,
            elGetter: $.ASN1Encoder<ChainingArguments>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.originator === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.originator, $.BER),
                            /* IF_ABSENT  */ value.targetObject === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.targetObject, $.BER),
                            /* IF_DEFAULT */ value.operationProgress ===
                                undefined ||
                            $.deepEq(
                                value.operationProgress,
                                ChainingArguments._default_value_for_operationProgress
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_OperationProgress,
                                      $.BER
                                  )(value.operationProgress, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                3,
                                () => _encode_TraceInformation,
                                $.BER
                            )(value.traceInformation, $.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            $.deepEq(
                                value.aliasDereferenced,
                                ChainingArguments._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.aliasDereferenced, $.BER),
                            /* IF_ABSENT  */ value.aliasedRDNs === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.aliasedRDNs, $.BER),
                            /* IF_DEFAULT */ value.returnCrossRefs ===
                                undefined ||
                            $.deepEq(
                                value.returnCrossRefs,
                                ChainingArguments._default_value_for_returnCrossRefs
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      6,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.returnCrossRefs, $.BER),
                            /* IF_DEFAULT */ value.referenceType ===
                                undefined ||
                            $.deepEq(
                                value.referenceType,
                                ChainingArguments._default_value_for_referenceType
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_ReferenceType,
                                      $.BER
                                  )(value.referenceType, $.BER),
                            /* IF_ABSENT  */ value.info === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () => _encode_DomainInfo,
                                      $.BER
                                  )(value.info, $.BER),
                            /* IF_ABSENT  */ value.timeLimit === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      9,
                                      () => _encode_Time,
                                      $.BER
                                  )(value.timeLimit, $.BER),
                            /* IF_DEFAULT */ value.securityParameters ===
                                undefined ||
                            $.deepEq(
                                value.securityParameters,
                                ChainingArguments._default_value_for_securityParameters
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      10,
                                      () => _encode_SecurityParameters,
                                      $.BER
                                  )(value.securityParameters, $.BER),
                            /* IF_DEFAULT */ value.entryOnly === undefined ||
                            $.deepEq(
                                value.entryOnly,
                                ChainingArguments._default_value_for_entryOnly
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      11,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.entryOnly, $.BER),
                            /* IF_ABSENT  */ value.uniqueIdentifier ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      12,
                                      () => _encode_UniqueIdentifier,
                                      $.BER
                                  )(value.uniqueIdentifier, $.BER),
                            /* IF_ABSENT  */ value.authenticationLevel ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      13,
                                      () => _encode_AuthenticationLevel,
                                      $.BER
                                  )(value.authenticationLevel, $.BER),
                            /* IF_ABSENT  */ value.exclusions === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      14,
                                      () => _encode_Exclusions,
                                      $.BER
                                  )(value.exclusions, $.BER),
                            /* IF_DEFAULT */ value.excludeShadows ===
                                undefined ||
                            $.deepEq(
                                value.excludeShadows,
                                ChainingArguments._default_value_for_excludeShadows
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      15,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.excludeShadows, $.BER),
                            /* IF_DEFAULT */ value.nameResolveOnMaster ===
                                undefined ||
                            $.deepEq(
                                value.nameResolveOnMaster,
                                ChainingArguments._default_value_for_nameResolveOnMaster
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      16,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.nameResolveOnMaster, $.BER),
                            /* IF_ABSENT  */ value.operationIdentifier ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      17,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.operationIdentifier, $.BER),
                            /* IF_ABSENT  */ value.searchRuleId === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      18,
                                      () => _encode_SearchRuleId,
                                      $.BER
                                  )(value.searchRuleId, $.BER),
                            /* IF_ABSENT  */ value.chainedRelaxation ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      19,
                                      () => _encode_MRMapping,
                                      $.BER
                                  )(value.chainedRelaxation, $.BER),
                            /* IF_ABSENT  */ value.relatedEntry === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      20,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.relatedEntry, $.BER),
                            /* IF_DEFAULT */ value.dspPaging === undefined ||
                            $.deepEq(
                                value.dspPaging,
                                ChainingArguments._default_value_for_dspPaging
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      21,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.dspPaging, $.BER),
                            /* IF_DEFAULT */ value.excludeWriteableCopies ===
                                undefined ||
                            $.deepEq(
                                value.excludeWriteableCopies,
                                ChainingArguments._default_value_for_excludeWriteableCopies
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      24,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.excludeWriteableCopies, $.BER),
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
    return _cached_encoder_for_ChainingArguments(value, elGetter);
}

/**
 * @summary AccessPointInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessPointInformation ::= SET {
 *   COMPONENTS OF          MasterOrShadowAccessPoint,
 *   additionalPoints  [4]  MasterAndShadowAccessPoints OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class AccessPointInformation {
    constructor(
        /**
         * @summary `ae_title`.
         * @public
         * @readonly
         */
        readonly ae_title: Name /* REPLICATED_COMPONENT */,
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: PresentationAddress /* REPLICATED_COMPONENT */,
        /**
         * @summary `protocolInformation`.
         * @public
         * @readonly
         */
        readonly protocolInformation: OPTIONAL<
            ProtocolInformation[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `category`.
         * @public
         * @readonly
         */
        readonly category: OPTIONAL<
            MasterOrShadowAccessPoint_category
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `chainingRequired`.
         * @public
         * @readonly
         */
        readonly chainingRequired: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `additionalPoints`.
         * @public
         * @readonly
         */
        readonly additionalPoints: OPTIONAL<MasterAndShadowAccessPoints>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AccessPointInformation
     * @description
     *
     * This takes an `object` and converts it to a `AccessPointInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessPointInformation`.
     * @returns {AccessPointInformation}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof AccessPointInformation]: AccessPointInformation[_K] }
        >
    ): AccessPointInformation {
        return new AccessPointInformation(
            _o.ae_title,
            _o.address,
            _o.protocolInformation,
            _o.category,
            _o.chainingRequired,
            _o.additionalPoints,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `category`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_category() {
        return MasterOrShadowAccessPoint_category_master;
    }
    /**
     * @summary Getter that returns the default value for `chainingRequired`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_chainingRequired() {
        return false;
    }
    /**
     * @summary The enum used as the type of the component `category`
     * @public
     * @static
     */

    public static _enum_for_category = _enum_for_MasterOrShadowAccessPoint_category;
}
/**
 * @summary The Leading Root Component Types of AccessPointInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AccessPointInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ae-title",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "address",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "protocolInformation",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "category",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "chainingRequired",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "additionalPoints",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AccessPointInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AccessPointInformation: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AccessPointInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AccessPointInformation: $.ComponentSpec[] = [];
let _cached_decoder_for_AccessPointInformation: $.ASN1Decoder<
    AccessPointInformation
> | null = null;
let _cached_encoder_for_AccessPointInformation: $.ASN1Encoder<
    AccessPointInformation
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AccessPointInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccessPointInformation} The decoded data structure.
 */
export function _decode_AccessPointInformation(el: _Element) {
    if (!_cached_decoder_for_AccessPointInformation) {
        _cached_decoder_for_AccessPointInformation = function (
            el: _Element
        ): AccessPointInformation {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let ae_title!: Name;
            let address!: PresentationAddress;
            let protocolInformation: OPTIONAL<ProtocolInformation[]>;
            let category: OPTIONAL<MasterOrShadowAccessPoint_category> =
                AccessPointInformation._default_value_for_category;
            let chainingRequired: OPTIONAL<BOOLEAN> =
                AccessPointInformation._default_value_for_chainingRequired;
            let additionalPoints: OPTIONAL<MasterAndShadowAccessPoints>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "ae-title": (_el: _Element): void => {
                    ae_title = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                address: (_el: _Element): void => {
                    address = $._decode_explicit<PresentationAddress>(
                        () => _decode_PresentationAddress
                    )(_el);
                },
                protocolInformation: (_el: _Element): void => {
                    protocolInformation = $._decode_explicit<
                        ProtocolInformation[]
                    >(() =>
                        $._decodeSetOf<ProtocolInformation>(
                            () => _decode_ProtocolInformation
                        )
                    )(_el);
                },
                category: (_el: _Element): void => {
                    category = $._decode_explicit<
                        MasterOrShadowAccessPoint_category
                    >(() => _decode_MasterOrShadowAccessPoint_category)(_el);
                },
                chainingRequired: (_el: _Element): void => {
                    chainingRequired = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                additionalPoints: (_el: _Element): void => {
                    additionalPoints = $._decode_explicit<
                        MasterAndShadowAccessPoints
                    >(() => _decode_MasterAndShadowAccessPoints)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AccessPointInformation,
                _extension_additions_list_spec_for_AccessPointInformation,
                _root_component_type_list_2_spec_for_AccessPointInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AccessPointInformation(
                /* SET_CONSTRUCTOR_CALL */ ae_title,
                address,
                protocolInformation,
                category,
                chainingRequired,
                additionalPoints,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AccessPointInformation(el);
}
/**
 * @summary Encodes a(n) AccessPointInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessPointInformation, encoded as an ASN.1 Element.
 */
export function _encode_AccessPointInformation(
    value: AccessPointInformation,
    elGetter: $.ASN1Encoder<AccessPointInformation>
) {
    if (!_cached_encoder_for_AccessPointInformation) {
        _cached_encoder_for_AccessPointInformation = function (
            value: AccessPointInformation,
            elGetter: $.ASN1Encoder<AccessPointInformation>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_Name,
                                $.BER
                            )(value.ae_title, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_PresentationAddress,
                                $.BER
                            )(value.address, $.BER),
                            /* IF_ABSENT  */ value.protocolInformation ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<ProtocolInformation>(
                                              () => _encode_ProtocolInformation,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.protocolInformation, $.BER),
                            /* IF_DEFAULT */ value.category === undefined ||
                            $.deepEq(
                                value.category,
                                AccessPointInformation._default_value_for_category
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          _encode_MasterOrShadowAccessPoint_category,
                                      $.BER
                                  )(value.category, $.BER),
                            /* IF_DEFAULT */ value.chainingRequired ===
                                undefined ||
                            $.deepEq(
                                value.chainingRequired,
                                AccessPointInformation._default_value_for_chainingRequired
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.chainingRequired, $.BER),
                            /* IF_ABSENT  */ value.additionalPoints ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_MasterAndShadowAccessPoints,
                                      $.BER
                                  )(value.additionalPoints, $.BER),
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
    return _cached_encoder_for_AccessPointInformation(value, elGetter);
}

/**
 * @summary CrossReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CrossReference ::= SET {
 *   contextPrefix  [0]  DistinguishedName,
 *   accessPoint    [1]  AccessPointInformation,
 *   ... }
 * ```
 *
 * @class
 */
export class CrossReference {
    constructor(
        /**
         * @summary `contextPrefix`.
         * @public
         * @readonly
         */
        readonly contextPrefix: DistinguishedName,
        /**
         * @summary `accessPoint`.
         * @public
         * @readonly
         */
        readonly accessPoint: AccessPointInformation,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CrossReference
     * @description
     *
     * This takes an `object` and converts it to a `CrossReference`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CrossReference`.
     * @returns {CrossReference}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CrossReference]: CrossReference[_K] }>
    ): CrossReference {
        return new CrossReference(
            _o.contextPrefix,
            _o.accessPoint,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CrossReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CrossReference: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "contextPrefix",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "accessPoint",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CrossReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CrossReference: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CrossReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CrossReference: $.ComponentSpec[] = [];
let _cached_decoder_for_CrossReference: $.ASN1Decoder<
    CrossReference
> | null = null;
let _cached_encoder_for_CrossReference: $.ASN1Encoder<
    CrossReference
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CrossReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CrossReference} The decoded data structure.
 */
export function _decode_CrossReference(el: _Element) {
    if (!_cached_decoder_for_CrossReference) {
        _cached_decoder_for_CrossReference = function (
            el: _Element
        ): CrossReference {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let contextPrefix!: DistinguishedName;
            let accessPoint!: AccessPointInformation;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                contextPrefix: (_el: _Element): void => {
                    contextPrefix = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                accessPoint: (_el: _Element): void => {
                    accessPoint = $._decode_explicit<AccessPointInformation>(
                        () => _decode_AccessPointInformation
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CrossReference,
                _extension_additions_list_spec_for_CrossReference,
                _root_component_type_list_2_spec_for_CrossReference,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CrossReference(
                /* SET_CONSTRUCTOR_CALL */ contextPrefix,
                accessPoint,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CrossReference(el);
}
/**
 * @summary Encodes a(n) CrossReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CrossReference, encoded as an ASN.1 Element.
 */
export function _encode_CrossReference(
    value: CrossReference,
    elGetter: $.ASN1Encoder<CrossReference>
) {
    if (!_cached_encoder_for_CrossReference) {
        _cached_encoder_for_CrossReference = function (
            value: CrossReference,
            elGetter: $.ASN1Encoder<CrossReference>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_DistinguishedName,
                                $.BER
                            )(value.contextPrefix, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_AccessPointInformation,
                                $.BER
                            )(value.accessPoint, $.BER),
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
    return _cached_encoder_for_CrossReference(value, elGetter);
}

/**
 * @summary ChainingResults
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChainingResults ::= SET {
 *   info                [0]  DomainInfo OPTIONAL,
 *   crossReferences     [1]  SEQUENCE SIZE (1..MAX) OF CrossReference OPTIONAL,
 *   securityParameters  [2]  SecurityParameters DEFAULT {},
 *   alreadySearched     [3]  Exclusions OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ChainingResults {
    constructor(
        /**
         * @summary `info`.
         * @public
         * @readonly
         */
        readonly info: OPTIONAL<DomainInfo>,
        /**
         * @summary `crossReferences`.
         * @public
         * @readonly
         */
        readonly crossReferences: OPTIONAL<CrossReference[]>,
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<SecurityParameters>,
        /**
         * @summary `alreadySearched`.
         * @public
         * @readonly
         */
        readonly alreadySearched: OPTIONAL<Exclusions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ChainingResults
     * @description
     *
     * This takes an `object` and converts it to a `ChainingResults`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChainingResults`.
     * @returns {ChainingResults}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ChainingResults]: ChainingResults[_K] }>
    ): ChainingResults {
        return new ChainingResults(
            _o.info,
            _o.crossReferences,
            _o.securityParameters,
            _o.alreadySearched,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `securityParameters`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_securityParameters() {
        return SecurityParameters._from_object({});
    }
}
/**
 * @summary The Leading Root Component Types of ChainingResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ChainingResults: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "info",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "crossReferences",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "alreadySearched",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ChainingResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ChainingResults: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ChainingResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ChainingResults: $.ComponentSpec[] = [];
let _cached_decoder_for_ChainingResults: $.ASN1Decoder<
    ChainingResults
> | null = null;
let _cached_encoder_for_ChainingResults: $.ASN1Encoder<
    ChainingResults
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ChainingResults
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChainingResults} The decoded data structure.
 */
export function _decode_ChainingResults(el: _Element) {
    if (!_cached_decoder_for_ChainingResults) {
        _cached_decoder_for_ChainingResults = function (
            el: _Element
        ): ChainingResults {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let info: OPTIONAL<DomainInfo>;
            let crossReferences: OPTIONAL<CrossReference[]>;
            let securityParameters: OPTIONAL<SecurityParameters> =
                ChainingResults._default_value_for_securityParameters;
            let alreadySearched: OPTIONAL<Exclusions>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                info: (_el: _Element): void => {
                    info = $._decode_explicit<DomainInfo>(
                        () => _decode_DomainInfo
                    )(_el);
                },
                crossReferences: (_el: _Element): void => {
                    crossReferences = $._decode_explicit<CrossReference[]>(() =>
                        $._decodeSequenceOf<CrossReference>(
                            () => _decode_CrossReference
                        )
                    )(_el);
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
                alreadySearched: (_el: _Element): void => {
                    alreadySearched = $._decode_explicit<Exclusions>(
                        () => _decode_Exclusions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ChainingResults,
                _extension_additions_list_spec_for_ChainingResults,
                _root_component_type_list_2_spec_for_ChainingResults,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ChainingResults(
                /* SET_CONSTRUCTOR_CALL */ info,
                crossReferences,
                securityParameters,
                alreadySearched,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ChainingResults(el);
}
/**
 * @summary Encodes a(n) ChainingResults into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChainingResults, encoded as an ASN.1 Element.
 */
export function _encode_ChainingResults(
    value: ChainingResults,
    elGetter: $.ASN1Encoder<ChainingResults>
) {
    if (!_cached_encoder_for_ChainingResults) {
        _cached_encoder_for_ChainingResults = function (
            value: ChainingResults,
            elGetter: $.ASN1Encoder<ChainingResults>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.info === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_DomainInfo,
                                      $.BER
                                  )(value.info, $.BER),
                            /* IF_ABSENT  */ value.crossReferences === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSequenceOf<CrossReference>(
                                              () => _encode_CrossReference,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.crossReferences, $.BER),
                            /* IF_DEFAULT */ value.securityParameters ===
                                undefined ||
                            $.deepEq(
                                value.securityParameters,
                                ChainingResults._default_value_for_securityParameters
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_SecurityParameters,
                                      $.BER
                                  )(value.securityParameters, $.BER),
                            /* IF_ABSENT  */ value.alreadySearched === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_Exclusions,
                                      $.BER
                                  )(value.alreadySearched, $.BER),
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
    return _cached_encoder_for_ChainingResults(value, elGetter);
}

/**
 * @summary ContinuationReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContinuationReference ::= SET {
 *   targetObject         [0]  Name,
 *   aliasedRDNs          [1]  INTEGER OPTIONAL, -- only present in first edition systems
 *   operationProgress    [2]  OperationProgress,
 *   rdnsResolved         [3]  INTEGER OPTIONAL,
 *   referenceType        [4]  ReferenceType,
 *   accessPoints         [5]  SET OF AccessPointInformation,
 *   entryOnly            [6]  BOOLEAN DEFAULT FALSE,
 *   exclusions           [7]  Exclusions OPTIONAL,
 *   returnToDUA          [8]  BOOLEAN DEFAULT FALSE,
 *   nameResolveOnMaster  [9]  BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 * @class
 */
export class ContinuationReference {
    constructor(
        /**
         * @summary `targetObject`.
         * @public
         * @readonly
         */
        readonly targetObject: Name,
        /**
         * @summary `aliasedRDNs`.
         * @public
         * @readonly
         */
        readonly aliasedRDNs: OPTIONAL<INTEGER>,
        /**
         * @summary `operationProgress`.
         * @public
         * @readonly
         */
        readonly operationProgress: OperationProgress,
        /**
         * @summary `rdnsResolved`.
         * @public
         * @readonly
         */
        readonly rdnsResolved: OPTIONAL<INTEGER>,
        /**
         * @summary `referenceType`.
         * @public
         * @readonly
         */
        readonly referenceType: ReferenceType,
        /**
         * @summary `accessPoints`.
         * @public
         * @readonly
         */
        readonly accessPoints: AccessPointInformation[],
        /**
         * @summary `entryOnly`.
         * @public
         * @readonly
         */
        readonly entryOnly: OPTIONAL<BOOLEAN>,
        /**
         * @summary `exclusions`.
         * @public
         * @readonly
         */
        readonly exclusions: OPTIONAL<Exclusions>,
        /**
         * @summary `returnToDUA`.
         * @public
         * @readonly
         */
        readonly returnToDUA: OPTIONAL<BOOLEAN>,
        /**
         * @summary `nameResolveOnMaster`.
         * @public
         * @readonly
         */
        readonly nameResolveOnMaster: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ContinuationReference
     * @description
     *
     * This takes an `object` and converts it to a `ContinuationReference`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContinuationReference`.
     * @returns {ContinuationReference}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof ContinuationReference]: ContinuationReference[_K] }
        >
    ): ContinuationReference {
        return new ContinuationReference(
            _o.targetObject,
            _o.aliasedRDNs,
            _o.operationProgress,
            _o.rdnsResolved,
            _o.referenceType,
            _o.accessPoints,
            _o.entryOnly,
            _o.exclusions,
            _o.returnToDUA,
            _o.nameResolveOnMaster,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `entryOnly`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_entryOnly() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `returnToDUA`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_returnToDUA() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `nameResolveOnMaster`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_nameResolveOnMaster() {
        return false;
    }
    /**
     * @summary The enum used as the type of the component `referenceType`
     * @public
     * @static
     */

    public static _enum_for_referenceType = _enum_for_ReferenceType;
}
/**
 * @summary The Leading Root Component Types of ContinuationReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ContinuationReference: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "targetObject",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasedRDNs",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "operationProgress",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "rdnsResolved",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "referenceType",
        false,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "accessPoints",
        false,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "entryOnly",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "exclusions",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "returnToDUA",
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nameResolveOnMaster",
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ContinuationReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ContinuationReference: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ContinuationReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ContinuationReference: $.ComponentSpec[] = [];
let _cached_decoder_for_ContinuationReference: $.ASN1Decoder<
    ContinuationReference
> | null = null;
let _cached_encoder_for_ContinuationReference: $.ASN1Encoder<
    ContinuationReference
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ContinuationReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContinuationReference} The decoded data structure.
 */
export function _decode_ContinuationReference(el: _Element) {
    if (!_cached_decoder_for_ContinuationReference) {
        _cached_decoder_for_ContinuationReference = function (
            el: _Element
        ): ContinuationReference {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let targetObject!: Name;
            let aliasedRDNs: OPTIONAL<INTEGER>;
            let operationProgress!: OperationProgress;
            let rdnsResolved: OPTIONAL<INTEGER>;
            let referenceType!: ReferenceType;
            let accessPoints!: AccessPointInformation[];
            let entryOnly: OPTIONAL<BOOLEAN> =
                ContinuationReference._default_value_for_entryOnly;
            let exclusions: OPTIONAL<Exclusions>;
            let returnToDUA: OPTIONAL<BOOLEAN> =
                ContinuationReference._default_value_for_returnToDUA;
            let nameResolveOnMaster: OPTIONAL<BOOLEAN> =
                ContinuationReference._default_value_for_nameResolveOnMaster;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                targetObject: (_el: _Element): void => {
                    targetObject = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                aliasedRDNs: (_el: _Element): void => {
                    aliasedRDNs = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                operationProgress: (_el: _Element): void => {
                    operationProgress = $._decode_explicit<OperationProgress>(
                        () => _decode_OperationProgress
                    )(_el);
                },
                rdnsResolved: (_el: _Element): void => {
                    rdnsResolved = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                referenceType: (_el: _Element): void => {
                    referenceType = $._decode_explicit<ReferenceType>(
                        () => _decode_ReferenceType
                    )(_el);
                },
                accessPoints: (_el: _Element): void => {
                    accessPoints = $._decode_explicit<AccessPointInformation[]>(
                        () =>
                            $._decodeSetOf<AccessPointInformation>(
                                () => _decode_AccessPointInformation
                            )
                    )(_el);
                },
                entryOnly: (_el: _Element): void => {
                    entryOnly = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                exclusions: (_el: _Element): void => {
                    exclusions = $._decode_explicit<Exclusions>(
                        () => _decode_Exclusions
                    )(_el);
                },
                returnToDUA: (_el: _Element): void => {
                    returnToDUA = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                nameResolveOnMaster: (_el: _Element): void => {
                    nameResolveOnMaster = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ContinuationReference,
                _extension_additions_list_spec_for_ContinuationReference,
                _root_component_type_list_2_spec_for_ContinuationReference,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ContinuationReference(
                /* SET_CONSTRUCTOR_CALL */ targetObject,
                aliasedRDNs,
                operationProgress,
                rdnsResolved,
                referenceType,
                accessPoints,
                entryOnly,
                exclusions,
                returnToDUA,
                nameResolveOnMaster,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ContinuationReference(el);
}
/**
 * @summary Encodes a(n) ContinuationReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContinuationReference, encoded as an ASN.1 Element.
 */
export function _encode_ContinuationReference(
    value: ContinuationReference,
    elGetter: $.ASN1Encoder<ContinuationReference>
) {
    if (!_cached_encoder_for_ContinuationReference) {
        _cached_encoder_for_ContinuationReference = function (
            value: ContinuationReference,
            elGetter: $.ASN1Encoder<ContinuationReference>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_Name,
                                $.BER
                            )(value.targetObject, $.BER),
                            /* IF_ABSENT  */ value.aliasedRDNs === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.aliasedRDNs, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => _encode_OperationProgress,
                                $.BER
                            )(value.operationProgress, $.BER),
                            /* IF_ABSENT  */ value.rdnsResolved === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.rdnsResolved, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                4,
                                () => _encode_ReferenceType,
                                $.BER
                            )(value.referenceType, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                5,
                                () =>
                                    $._encodeSetOf<AccessPointInformation>(
                                        () => _encode_AccessPointInformation,
                                        $.BER
                                    ),
                                $.BER
                            )(value.accessPoints, $.BER),
                            /* IF_DEFAULT */ value.entryOnly === undefined ||
                            $.deepEq(
                                value.entryOnly,
                                ContinuationReference._default_value_for_entryOnly
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      6,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.entryOnly, $.BER),
                            /* IF_ABSENT  */ value.exclusions === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_Exclusions,
                                      $.BER
                                  )(value.exclusions, $.BER),
                            /* IF_DEFAULT */ value.returnToDUA === undefined ||
                            $.deepEq(
                                value.returnToDUA,
                                ContinuationReference._default_value_for_returnToDUA
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.returnToDUA, $.BER),
                            /* IF_DEFAULT */ value.nameResolveOnMaster ===
                                undefined ||
                            $.deepEq(
                                value.nameResolveOnMaster,
                                ContinuationReference._default_value_for_nameResolveOnMaster
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      9,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.nameResolveOnMaster, $.BER),
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
    return _cached_encoder_for_ContinuationReference(value, elGetter);
}

/**
 * @summary DsaReferralData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DsaReferralData ::= SET {
 *   reference      [0]  ContinuationReference,
 *   contextPrefix  [1]  DistinguishedName OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF       CommonResults }
 * ```
 *
 * @class
 */
export class DsaReferralData {
    constructor(
        /**
         * @summary `reference`.
         * @public
         * @readonly
         */
        readonly reference: ContinuationReference,
        /**
         * @summary `contextPrefix`.
         * @public
         * @readonly
         */
        readonly contextPrefix: OPTIONAL<DistinguishedName>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<
            SecurityParameters
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `performer`.
         * @public
         * @readonly
         */
        readonly performer: OPTIONAL<
            DistinguishedName
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced: OPTIONAL<
            BOOLEAN
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a DsaReferralData
     * @description
     *
     * This takes an `object` and converts it to a `DsaReferralData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DsaReferralData`.
     * @returns {DsaReferralData}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DsaReferralData]: DsaReferralData[_K] }>
    ): DsaReferralData {
        return new DsaReferralData(
            _o.reference,
            _o.contextPrefix,
            _o._unrecognizedExtensionsList,
            _o.securityParameters,
            _o.performer,
            _o.aliasDereferenced,
            _o.notification
        );
    }

    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of DsaReferralData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DsaReferralData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "reference",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contextPrefix",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DsaReferralData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DsaReferralData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "performer",
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasDereferenced",
        true,
        $.hasTag(_TagClass.context, 28),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "notification",
        true,
        $.hasTag(_TagClass.context, 27),
        undefined,
        undefined
    ),
];
/**
 * @summary The Extension Addition Component Types of DsaReferralData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DsaReferralData: $.ComponentSpec[] = [];
let _cached_decoder_for_DsaReferralData: $.ASN1Decoder<
    DsaReferralData
> | null = null;
let _cached_encoder_for_DsaReferralData: $.ASN1Encoder<
    DsaReferralData
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DsaReferralData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DsaReferralData} The decoded data structure.
 */
export function _decode_DsaReferralData(el: _Element) {
    if (!_cached_decoder_for_DsaReferralData) {
        _cached_decoder_for_DsaReferralData = function (
            el: _Element
        ): DsaReferralData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let reference!: ContinuationReference;
            let contextPrefix: OPTIONAL<DistinguishedName>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                DsaReferralData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                reference: (_el: _Element): void => {
                    reference = $._decode_explicit<ContinuationReference>(
                        () => _decode_ContinuationReference
                    )(_el);
                },
                contextPrefix: (_el: _Element): void => {
                    contextPrefix = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
                performer: (_el: _Element): void => {
                    performer = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: _Element): void => {
                    aliasDereferenced = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                notification: (_el: _Element): void => {
                    notification = $._decode_explicit<Attribute[]>(() =>
                        $._decodeSequenceOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DsaReferralData,
                _extension_additions_list_spec_for_DsaReferralData,
                _root_component_type_list_2_spec_for_DsaReferralData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DsaReferralData(
                /* SET_CONSTRUCTOR_CALL */ reference,
                contextPrefix,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_DsaReferralData(el);
}
/**
 * @summary Encodes a(n) DsaReferralData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DsaReferralData, encoded as an ASN.1 Element.
 */
export function _encode_DsaReferralData(
    value: DsaReferralData,
    elGetter: $.ASN1Encoder<DsaReferralData>
) {
    if (!_cached_encoder_for_DsaReferralData) {
        _cached_encoder_for_DsaReferralData = function (
            value: DsaReferralData,
            elGetter: $.ASN1Encoder<DsaReferralData>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_ContinuationReference,
                                $.BER
                            )(value.reference, $.BER),
                            /* IF_ABSENT  */ value.contextPrefix === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.contextPrefix, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      $.BER
                                  )(value.securityParameters, $.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.performer, $.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            $.deepEq(
                                value.aliasDereferenced,
                                DsaReferralData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      28,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.aliasDereferenced, $.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      27,
                                      () =>
                                          $._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.notification, $.BER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DsaReferralData(value, elGetter);
}

/**
 * @summary dsaReferral
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dsaReferral ERROR ::= {
 *   PARAMETER           OPTIONALLY-PROTECTED { DsaReferralData }
 *   CODE                id-errcode-dsaReferral }
 * ```
 *
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export const dsaReferral: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<
            DsaReferralData
        >(_decode_DsaReferralData),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<
            DsaReferralData
        >(_encode_DsaReferralData),
    },
    "&errorCode": id_errcode_dsaReferral /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Chained-ArgumentType-OPTIONALLY-PROTECTED-Parameter1 {OPERATION:operation} ::= SET {
 *     chainedArgument      ChainingArguments,
 *     argument        [0]  operation.&ArgumentType }
 * ```
 *
 * @class
 */
export class Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 {
    constructor(
        /**
         * @summary `chainedArgument`.
         * @public
         * @readonly
         */
        readonly chainedArgument: ChainingArguments,
        /**
         * @summary `argument`.
         * @public
         * @readonly
         */
        readonly argument: _Element
    ) {}

    /**
     * @summary Restructures an object into a Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
     * @description
     *
     * This takes an `object` and converts it to a `Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1`.
     * @returns {Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1]: Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1[_K];
            }
        >
    ): Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 {
        return new Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1(
            _o.chainedArgument,
            _o.argument
        );
    }
}
/**
 * @summary The Leading Root Component Types of Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "chainedArgument",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "argument",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1: $.ComponentSpec[] = [];
let _cached_decoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1: $.ASN1Decoder<
    Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
> | null = null;
let _cached_encoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1: $.ASN1Encoder<
    Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1} The decoded data structure.
 */
export function _decode_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1(
    el: _Element
) {
    if (
        !_cached_decoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
    ) {
        _cached_decoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 = function (
            el: _Element
        ): Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let chainedArgument!: ChainingArguments;
            let argument!: _Element;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                chainedArgument: (_el: _Element): void => {
                    chainedArgument = _decode_ChainingArguments(_el);
                },
                argument: (_el: _Element): void => {
                    argument = $._decode_explicit<_Element>(() => $._decodeAny)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1,
                _extension_additions_list_spec_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1,
                _root_component_type_list_2_spec_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1,
                undefined
            );
            return new Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 /* SET_CONSTRUCTOR_CALL */(
                chainedArgument,
                argument
            );
        };
    }
    return _cached_decoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1(
        el
    );
}
/**
 * @summary Encodes a(n) Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1, encoded as an ASN.1 Element.
 */
export function _encode_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1(
    value: Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1,
    elGetter: $.ASN1Encoder<
        Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
    >
) {
    if (
        !_cached_encoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
    ) {
        _cached_encoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 = function (
            value: Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1,
            elGetter: $.ASN1Encoder<
                Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
            >
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ChainingArguments(
                            value.chainedArgument,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeAny,
                            $.BER
                        )(value.argument, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1(
        value,
        elGetter
    );
}

/**
 * @summary Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Chained-ResultType-OPTIONALLY-PROTECTED-Parameter1 {OPERATION:operation} ::= SET {
 *     chainedResult        ChainingResults,
 *     result          [0]  operation.&ResultType }
 * ```
 *
 * @class
 */
export class Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1 {
    constructor(
        /**
         * @summary `chainedResult`.
         * @public
         * @readonly
         */
        readonly chainedResult: ChainingResults,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: _Element
    ) {}

    /**
     * @summary Restructures an object into a Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
     * @description
     *
     * This takes an `object` and converts it to a `Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1`.
     * @returns {Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1]: Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1[_K];
            }
        >
    ): Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1 {
        return new Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1(
            _o.chainedResult,
            _o.result
        );
    }
}
/**
 * @summary The Leading Root Component Types of Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "chainedResult",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "result",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1: $.ComponentSpec[] = [];
let _cached_decoder_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1: $.ASN1Decoder<
    Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
> | null = null;
let _cached_encoder_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1: $.ASN1Encoder<
    Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1} The decoded data structure.
 */
export function _decode_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1(
    el: _Element
) {
    if (
        !_cached_decoder_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
    ) {
        _cached_decoder_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1 = function (
            el: _Element
        ): Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1 {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let chainedResult!: ChainingResults;
            let result!: _Element;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                chainedResult: (_el: _Element): void => {
                    chainedResult = _decode_ChainingResults(_el);
                },
                result: (_el: _Element): void => {
                    result = $._decode_explicit<_Element>(() => $._decodeAny)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1,
                _extension_additions_list_spec_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1,
                _root_component_type_list_2_spec_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1,
                undefined
            );
            return new Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1 /* SET_CONSTRUCTOR_CALL */(
                chainedResult,
                result
            );
        };
    }
    return _cached_decoder_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1(
        el
    );
}
/**
 * @summary Encodes a(n) Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1, encoded as an ASN.1 Element.
 */
export function _encode_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1(
    value: Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1,
    elGetter: $.ASN1Encoder<Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1>
) {
    if (
        !_cached_encoder_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
    ) {
        _cached_encoder_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1 = function (
            value: Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1,
            elGetter: $.ASN1Encoder<
                Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
            >
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ChainingResults(
                            value.chainedResult,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeAny,
                            $.BER
                        )(value.result, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1(
        value,
        elGetter
    );
}



/**
 * @summary chained
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chained{OPERATION:operation} OPERATION ::= {
 *     ARGUMENT             OPTIONALLY-PROTECTED {SET {
 *       chainedArgument      ChainingArguments,
 *       argument        [0]  operation.&ArgumentType } }
 *     RESULT OPTIONALLY-PROTECTED {SET {
 *       chainedResult        ChainingResults,
 *       result          [0]  operation.&ResultType}}
 *     ERRORS
 *       {operation.&Errors EXCEPT referral | dsaReferral}
 *     CODE                 operation.&operationCode }
 * ```
 *
 * @function
 */
const chained = (
    operation: OPERATION
): OPERATION<
    OPTIONALLY_PROTECTED<typeof operation["&ArgumentType"]>,
    OPTIONALLY_PROTECTED<typeof operation["&ResultType"]>
> => {
    return {
        class: "OPERATION",
        decoderFor: {
            "&ArgumentType": _get_decoder_for_OPTIONALLY_PROTECTED<
                Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
            >(_decode_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1),
            "&ResultType": _get_decoder_for_OPTIONALLY_PROTECTED<
                Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
            >(_decode_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1),
        },
        encoderFor: {
            "&ArgumentType": _get_encoder_for_OPTIONALLY_PROTECTED<
                Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
            >(_encode_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1),
            "&ResultType": _get_encoder_for_OPTIONALLY_PROTECTED<
                Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
            >(_encode_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1),
        },
        "&operationCode": operation["&operationCode"],
        "&ArgumentType": 0 as never,
        "&ResultType": 0 as never,
    };
};

/**
 * @summary chainedRead
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedRead               OPERATION ::= chained{read}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedRead: OPERATION = chained(read);

/**
 * @summary chainedCompare
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedCompare            OPERATION ::= chained{compare}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedCompare: OPERATION = chained(compare);

/**
 * @summary chainedAbandon
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedAbandon            OPERATION ::= abandon
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedAbandon: OPERATION = abandon;

/**
 * @summary chainedList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedList               OPERATION ::= chained{list}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedList: OPERATION = chained(list);

/**
 * @summary chainedSearch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedSearch             OPERATION ::= chained{search}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedSearch: OPERATION = chained(search);

/**
 * @summary chainedAddEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedAddEntry           OPERATION ::= chained{addEntry}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedAddEntry: OPERATION = chained(addEntry);

/**
 * @summary chainedRemoveEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedRemoveEntry        OPERATION ::= chained{removeEntry}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedRemoveEntry: OPERATION = chained(removeEntry);

/**
 * @summary chainedModifyEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedModifyEntry        OPERATION ::= chained{modifyEntry}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedModifyEntry: OPERATION = chained(modifyEntry);

/**
 * @summary chainedModifyDN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedModifyDN           OPERATION ::= chained{modifyDN}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedModifyDN: OPERATION = chained(modifyDN);

/**
 * @summary chainedChangePassword
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedChangePassword     OPERATION ::= chained{changePassword}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedChangePassword: OPERATION = chained(changePassword);

/**
 * @summary chainedAdministerPassword
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedAdministerPassword OPERATION ::= chained{administerPassword}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedAdministerPassword: OPERATION = chained(administerPassword);

/**
 * @summary chainedLdapTransport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedLdapTransport      OPERATION ::= chained{ldapTransport}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedLdapTransport: OPERATION = chained(ldapTransport);

/**
 * @summary chainedLinkedLDAP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedLinkedLDAP         OPERATION ::= chained{linkedLDAP}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedLinkedLDAP: OPERATION = chained(linkedLDAP);

/* END_MODULE DistributedOperations */
/* eslint-enable */
