/*
    BEGIN_MODULE EnhancedSecurity
    OID: joint-iso-itu-t.ds.modules.enhancedSecurity.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    CertificateSerialNumber,
    HASH,
    SIGNED,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _get_decoder_for_HASH,
    _get_decoder_for_SIGNED,
    _get_encoder_for_HASH,
    _get_encoder_for_SIGNED,
} from "./AuthenticationFramework";
import {
    GeneralName,
    KeyIdentifier,
    _decode_GeneralName,
    _decode_KeyIdentifier,
    _encode_GeneralName,
    _encode_KeyIdentifier,
} from "./CertificateExtensions";
import {
    Attribute,
    AttributeType,
    AttributeTypeAndValue,
    Context,
    Name,
    _decode_Attribute,
    _decode_AttributeType,
    _decode_AttributeTypeAndValue,
    _decode_Context,
    _decode_Name,
    _encode_Attribute,
    _encode_AttributeType,
    _encode_AttributeTypeAndValue,
    _encode_Context,
    _encode_Name,
} from "./InformationFramework";
import { id_at, id_avc, id_oc } from "./UsefulDefinitions";
import * as __utils from "./__utils";
export {
    CertificateSerialNumber,
    HASH,
    SIGNED,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _get_decoder_for_HASH,
    _get_decoder_for_SIGNED,
    _get_encoder_for_HASH,
    _get_encoder_for_SIGNED,
} from "./AuthenticationFramework";
export {
    GeneralName,
    KeyIdentifier,
    _decode_GeneralName,
    _decode_KeyIdentifier,
    _encode_GeneralName,
    _encode_KeyIdentifier,
} from "./CertificateExtensions";
export {
    Attribute,
    AttributeType,
    AttributeTypeAndValue,
    Context,
    Name,
    _decode_Attribute,
    _decode_AttributeType,
    _decode_AttributeTypeAndValue,
    _decode_Context,
    _decode_Name,
    _encode_Attribute,
    _encode_AttributeType,
    _encode_AttributeTypeAndValue,
    _encode_Context,
    _encode_Name,
} from "./InformationFramework";
export {
    authenticationFramework,
    basicAccessControl,
    certificateExtensions,
    id_at,
    id_avc,
    id_mr,
    id_oc,
    informationFramework,
} from "./UsefulDefinitions";

export type OPTIONALLY_PROTECTED<Type> =
    | { unsigned: Type } /* CHOICE_ALT_ROOT */
    | { signed: SIGNED<Type> } /* CHOICE_ALT_ROOT */;
export function _get_decoder_for_OPTIONALLY_PROTECTED<Type>(
    _decode_Type: __utils.ASN1Decoder<Type>
) {
    return __utils._decode_inextensible_choice<OPTIONALLY_PROTECTED<Type>>(
        {
            "UNIVERSAL 16": [
                "signed",
                _get_decoder_for_SIGNED<Type>(_decode_Type),
            ],
        },
        ["unsigned", _decode_Type]
    );
}
export function _get_encoder_for_OPTIONALLY_PROTECTED<Type>(
    _encode_Type: __utils.ASN1Encoder<Type>
) {
    return __utils._encode_choice<OPTIONALLY_PROTECTED<Type>>(
        {
            unsigned: _encode_Type,
            signed: _get_encoder_for_SIGNED<Type>(_encode_Type),
        },
        __utils.BER
    );
}

export type OPTIONALLY_PROTECTED_SEQ<Type> =
    | { unsigned: Type } /* CHOICE_ALT_ROOT */
    | { signed: SIGNED<Type> } /* CHOICE_ALT_ROOT */;
export function _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<Type>(
    _decode_Type: __utils.ASN1Decoder<Type>
) {
    return __utils._decode_inextensible_choice<OPTIONALLY_PROTECTED_SEQ<Type>>({
        "UNIVERSAL 16": ["unsigned", _decode_Type],
        "CONTEXT 0": [
            "signed",
            __utils._decode_implicit<SIGNED<Type>>(() =>
                _get_decoder_for_SIGNED<Type>(_decode_Type)
            ),
        ],
    });
}
export function _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<Type>(
    _encode_Type: __utils.ASN1Encoder<Type>
) {
    return __utils._encode_choice<OPTIONALLY_PROTECTED_SEQ<Type>>(
        {
            unsigned: _encode_Type,
            signed: __utils._encode_implicit(
                asn1.ASN1TagClass.context,
                0,
                () => _get_encoder_for_SIGNED<Type>(_encode_Type),
                __utils.BER
            ),
        },
        __utils.BER
    );
}

// TODO: ObjectAssignment: attributeValueSecurityLabelContext

export type SecurityPolicyIdentifier = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_SecurityPolicyIdentifier: __utils.ASN1Decoder<
    SecurityPolicyIdentifier
> | null = null;
let _cached_encoder_for_SecurityPolicyIdentifier: __utils.ASN1Encoder<
    SecurityPolicyIdentifier
> | null = null;
export function _decode_SecurityPolicyIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityPolicyIdentifier) {
        _cached_decoder_for_SecurityPolicyIdentifier =
            __utils._decodeObjectIdentifier;
    }
    return _cached_decoder_for_SecurityPolicyIdentifier(el);
}
export function _encode_SecurityPolicyIdentifier(
    value: SecurityPolicyIdentifier,
    elGetter: __utils.ASN1Encoder<SecurityPolicyIdentifier>
) {
    if (!_cached_encoder_for_SecurityPolicyIdentifier) {
        _cached_encoder_for_SecurityPolicyIdentifier =
            __utils._encodeObjectIdentifier;
    }
    return _cached_encoder_for_SecurityPolicyIdentifier(value, elGetter);
}

export type SecurityClassification = asn1.INTEGER;
export const SecurityClassification_unmarked: SecurityClassification = 0; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityClassification_unclassified: SecurityClassification = 1; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityClassification_restricted: SecurityClassification = 2; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityClassification_confidential: SecurityClassification = 3; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityClassification_secret: SecurityClassification = 4; /* LONG_NAMED_INTEGER_VALUE */
export const SecurityClassification_top_secret: SecurityClassification = 5; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_SecurityClassification: __utils.ASN1Decoder<
    SecurityClassification
> | null = null;
let _cached_encoder_for_SecurityClassification: __utils.ASN1Encoder<
    SecurityClassification
> | null = null;
export function _decode_SecurityClassification(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityClassification) {
        _cached_decoder_for_SecurityClassification = __utils._decodeInteger;
    }
    return _cached_decoder_for_SecurityClassification(el);
}
export function _encode_SecurityClassification(
    value: SecurityClassification,
    elGetter: __utils.ASN1Encoder<SecurityClassification>
) {
    if (!_cached_encoder_for_SecurityClassification) {
        _cached_encoder_for_SecurityClassification = __utils._encodeInteger;
    }
    return _cached_encoder_for_SecurityClassification(value, elGetter);
}

export type PrivacyMark = asn1.PrintableString; // PrintableString
let _cached_decoder_for_PrivacyMark: __utils.ASN1Decoder<
    PrivacyMark
> | null = null;
let _cached_encoder_for_PrivacyMark: __utils.ASN1Encoder<
    PrivacyMark
> | null = null;
export function _decode_PrivacyMark(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PrivacyMark) {
        _cached_decoder_for_PrivacyMark = __utils._decodePrintableString;
    }
    return _cached_decoder_for_PrivacyMark(el);
}
export function _encode_PrivacyMark(
    value: PrivacyMark,
    elGetter: __utils.ASN1Encoder<PrivacyMark>
) {
    if (!_cached_encoder_for_PrivacyMark) {
        _cached_encoder_for_PrivacyMark = __utils._encodePrintableString;
    }
    return _cached_encoder_for_PrivacyMark(value, elGetter);
}

export class SecurityCategory {
    constructor(
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly value: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_SecurityCategory: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "value",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SecurityCategory: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SecurityCategory: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SecurityCategory: __utils.ASN1Decoder<
    SecurityCategory
> | null = null;
let _cached_encoder_for_SecurityCategory: __utils.ASN1Encoder<
    SecurityCategory
> | null = null;
export function _decode_SecurityCategory(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityCategory) {
        _cached_decoder_for_SecurityCategory = function (
            el: asn1.ASN1Element
        ): SecurityCategory {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "SecurityCategory contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: asn1.OBJECT_IDENTIFIER;
            let value!: asn1.ASN1Element;
            type_ = __utils._decode_implicit<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(sequence[0]);
            value = __utils._decode_explicit<asn1.ASN1Element>(
                () => __utils._decodeAny
            )(sequence[1]);
            // TODO: Validate values.
            return new SecurityCategory(type_, value, sequence.slice(2));
        };
    }
    return _cached_decoder_for_SecurityCategory(el);
}
export function _encode_SecurityCategory(
    value: SecurityCategory,
    elGetter: __utils.ASN1Encoder<SecurityCategory>
) {
    if (!_cached_encoder_for_SecurityCategory) {
        _cached_encoder_for_SecurityCategory = function (
            value: SecurityCategory,
            elGetter: __utils.ASN1Encoder<SecurityCategory>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_implicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => __utils._encodeObjectIdentifier,
                                __utils.BER
                            )(value.type_, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () => __utils._encodeAny,
                                __utils.BER
                            )(value.value, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SecurityCategory(value, elGetter);
}

export type SecurityCategories = SecurityCategory[]; // SetOfType
let _cached_decoder_for_SecurityCategories: __utils.ASN1Decoder<
    SecurityCategories
> | null = null;
let _cached_encoder_for_SecurityCategories: __utils.ASN1Encoder<
    SecurityCategories
> | null = null;
export function _decode_SecurityCategories(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityCategories) {
        _cached_decoder_for_SecurityCategories = __utils._decodeSetOf<
            SecurityCategory
        >(() => _decode_SecurityCategory);
    }
    return _cached_decoder_for_SecurityCategories(el);
}
export function _encode_SecurityCategories(
    value: SecurityCategories,
    elGetter: __utils.ASN1Encoder<SecurityCategories>
) {
    if (!_cached_encoder_for_SecurityCategories) {
        _cached_encoder_for_SecurityCategories = __utils._encodeSetOf<
            SecurityCategory
        >(() => _encode_SecurityCategory, __utils.BER);
    }
    return _cached_encoder_for_SecurityCategories(value, elGetter);
}

export class SecurityLabel {
    constructor(
        readonly security_policy_identifier:
            | SecurityPolicyIdentifier
            | undefined,
        readonly security_classification: SecurityClassification | undefined,
        readonly privacy_mark: PrivacyMark | undefined,
        readonly security_categories: SecurityCategories | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_SecurityLabel: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "security-policy-identifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "security-classification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "privacy-mark",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 19),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "security-categories",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SecurityLabel: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SecurityLabel: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SecurityLabel: __utils.ASN1Decoder<
    SecurityLabel
> | null = null;
let _cached_encoder_for_SecurityLabel: __utils.ASN1Encoder<
    SecurityLabel
> | null = null;
export function _decode_SecurityLabel(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityLabel) {
        _cached_decoder_for_SecurityLabel = function (
            el: asn1.ASN1Element
        ): SecurityLabel {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let security_policy_identifier: asn1.OPTIONAL<SecurityPolicyIdentifier>;
            let security_classification: asn1.OPTIONAL<SecurityClassification>;
            let privacy_mark: asn1.OPTIONAL<PrivacyMark>;
            let security_categories: asn1.OPTIONAL<SecurityCategories>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "security-policy-identifier": (_el: asn1.ASN1Element): void => {
                    security_policy_identifier = _decode_SecurityPolicyIdentifier(
                        _el
                    );
                },
                "security-classification": (_el: asn1.ASN1Element): void => {
                    security_classification = _decode_SecurityClassification(
                        _el
                    );
                },
                "privacy-mark": (_el: asn1.ASN1Element): void => {
                    privacy_mark = _decode_PrivacyMark(_el);
                },
                "security-categories": (_el: asn1.ASN1Element): void => {
                    security_categories = _decode_SecurityCategories(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SecurityLabel,
                _extension_additions_list_spec_for_SecurityLabel,
                _root_component_type_list_2_spec_for_SecurityLabel,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SecurityLabel /* SET_CONSTRUCTOR_CALL */(
                security_policy_identifier,
                security_classification,
                privacy_mark,
                security_categories,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SecurityLabel(el);
}
export function _encode_SecurityLabel(
    value: SecurityLabel,
    elGetter: __utils.ASN1Encoder<SecurityLabel>
) {
    if (!_cached_encoder_for_SecurityLabel) {
        _cached_encoder_for_SecurityLabel = function (
            value: SecurityLabel,
            elGetter: __utils.ASN1Encoder<SecurityLabel>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.security_policy_identifier ===
                            undefined
                                ? undefined
                                : _encode_SecurityPolicyIdentifier(
                                      value.security_policy_identifier,
                                      __utils.BER
                                  ),
                            /* IF_ABSENT  */ value.security_classification ===
                            undefined
                                ? undefined
                                : _encode_SecurityClassification(
                                      value.security_classification,
                                      __utils.BER
                                  ),
                            /* IF_ABSENT  */ value.privacy_mark === undefined
                                ? undefined
                                : _encode_PrivacyMark(
                                      value.privacy_mark,
                                      __utils.BER
                                  ),
                            /* IF_ABSENT  */ value.security_categories ===
                            undefined
                                ? undefined
                                : _encode_SecurityCategories(
                                      value.security_categories,
                                      __utils.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SecurityLabel(value, elGetter);
}

export class SignedSecurityLabelContent {
    constructor(
        readonly attHash: HASH<AttributeTypeAndValue>,
        readonly issuer: Name | undefined,
        readonly keyIdentifier: KeyIdentifier | undefined,
        readonly securityLabel: SecurityLabel,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_SignedSecurityLabelContent: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "attHash",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "issuer",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyIdentifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityLabel",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SignedSecurityLabelContent: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SignedSecurityLabelContent: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SignedSecurityLabelContent: __utils.ASN1Decoder<
    SignedSecurityLabelContent
> | null = null;
let _cached_encoder_for_SignedSecurityLabelContent: __utils.ASN1Encoder<
    SignedSecurityLabelContent
> | null = null;
export function _decode_SignedSecurityLabelContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SignedSecurityLabelContent) {
        _cached_decoder_for_SignedSecurityLabelContent = function (
            el: asn1.ASN1Element
        ): SignedSecurityLabelContent {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attHash!: HASH<AttributeTypeAndValue>;
            let issuer: asn1.OPTIONAL<Name>;
            let keyIdentifier: asn1.OPTIONAL<KeyIdentifier>;
            let securityLabel!: SecurityLabel;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                attHash: (_el: asn1.ASN1Element): void => {
                    attHash = _get_decoder_for_HASH<AttributeTypeAndValue>(
                        _decode_AttributeTypeAndValue
                    )(_el);
                },
                issuer: (_el: asn1.ASN1Element): void => {
                    issuer = _decode_Name(_el);
                },
                keyIdentifier: (_el: asn1.ASN1Element): void => {
                    keyIdentifier = _decode_KeyIdentifier(_el);
                },
                securityLabel: (_el: asn1.ASN1Element): void => {
                    securityLabel = _decode_SecurityLabel(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SignedSecurityLabelContent,
                _extension_additions_list_spec_for_SignedSecurityLabelContent,
                _root_component_type_list_2_spec_for_SignedSecurityLabelContent,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SignedSecurityLabelContent /* SEQUENCE_CONSTRUCTOR_CALL */(
                attHash,
                issuer,
                keyIdentifier,
                securityLabel,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SignedSecurityLabelContent(el);
}
export function _encode_SignedSecurityLabelContent(
    value: SignedSecurityLabelContent,
    elGetter: __utils.ASN1Encoder<SignedSecurityLabelContent>
) {
    if (!_cached_encoder_for_SignedSecurityLabelContent) {
        _cached_encoder_for_SignedSecurityLabelContent = function (
            value: SignedSecurityLabelContent,
            elGetter: __utils.ASN1Encoder<SignedSecurityLabelContent>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _get_encoder_for_HASH<
                                AttributeTypeAndValue
                            >(_encode_AttributeTypeAndValue)(
                                value.attHash,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.issuer === undefined
                                ? undefined
                                : _encode_Name(value.issuer, __utils.BER),
                            /* IF_ABSENT  */ value.keyIdentifier === undefined
                                ? undefined
                                : _encode_KeyIdentifier(
                                      value.keyIdentifier,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ _encode_SecurityLabel(
                                value.securityLabel,
                                __utils.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SignedSecurityLabelContent(value, elGetter);
}

export type SignedSecurityLabel = SIGNED<SignedSecurityLabelContent>; // DefinedType
let _cached_decoder_for_SignedSecurityLabel: __utils.ASN1Decoder<
    SignedSecurityLabel
> | null = null;
let _cached_encoder_for_SignedSecurityLabel: __utils.ASN1Encoder<
    SignedSecurityLabel
> | null = null;
export function _decode_SignedSecurityLabel(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SignedSecurityLabel) {
        _cached_decoder_for_SignedSecurityLabel = _get_decoder_for_SIGNED<
            SignedSecurityLabelContent
        >(_decode_SignedSecurityLabelContent);
    }
    return _cached_decoder_for_SignedSecurityLabel(el);
}
export function _encode_SignedSecurityLabel(
    value: SignedSecurityLabel,
    elGetter: __utils.ASN1Encoder<SignedSecurityLabel>
) {
    if (!_cached_encoder_for_SignedSecurityLabel) {
        _cached_encoder_for_SignedSecurityLabel = _get_encoder_for_SIGNED<
            SignedSecurityLabelContent
        >(_encode_SignedSecurityLabelContent);
    }
    return _cached_encoder_for_SignedSecurityLabel(value, elGetter);
}

// TODO: ObjectAssignment: clearance

export type ClassList = asn1.BIT_STRING;
export const ClassList_unmarked: number = 0; /* LONG_NAMED_BIT */
export const ClassList_unclassified: number = 1; /* LONG_NAMED_BIT */
export const ClassList_restricted: number = 2; /* LONG_NAMED_BIT */
export const ClassList_confidential: number = 3; /* LONG_NAMED_BIT */
export const ClassList_secret: number = 4; /* LONG_NAMED_BIT */
export const ClassList_topSecret: number = 5; /* LONG_NAMED_BIT */
let _cached_decoder_for_ClassList: __utils.ASN1Decoder<ClassList> | null = null;
let _cached_encoder_for_ClassList: __utils.ASN1Encoder<ClassList> | null = null;
export function _decode_ClassList(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ClassList) {
        _cached_decoder_for_ClassList = __utils._decodeBitString;
    }
    return _cached_decoder_for_ClassList(el);
}
export function _encode_ClassList(
    value: ClassList,
    elGetter: __utils.ASN1Encoder<ClassList>
) {
    if (!_cached_encoder_for_ClassList) {
        _cached_encoder_for_ClassList = __utils._encodeBitString;
    }
    return _cached_encoder_for_ClassList(value, elGetter);
}

export class Clearance {
    constructor(
        readonly policyId: asn1.OBJECT_IDENTIFIER,
        readonly classList: ClassList | undefined,
        readonly securityCategories: SecurityCategory[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_classList() {
        return new Uint8ClampedArray([asn1.FALSE_BIT, asn1.TRUE_BIT]);
    }
}
export const _root_component_type_list_1_spec_for_Clearance: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "policyId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "classList",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityCategories",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Clearance: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Clearance: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Clearance: __utils.ASN1Decoder<Clearance> | null = null;
let _cached_encoder_for_Clearance: __utils.ASN1Encoder<Clearance> | null = null;
export function _decode_Clearance(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Clearance) {
        _cached_decoder_for_Clearance = function (
            el: asn1.ASN1Element
        ): Clearance {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let policyId!: asn1.OBJECT_IDENTIFIER;
            let classList: asn1.OPTIONAL<ClassList> =
                Clearance._default_value_for_classList;
            let securityCategories: asn1.OPTIONAL<SecurityCategory[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                policyId: (_el: asn1.ASN1Element): void => {
                    policyId = __utils._decodeObjectIdentifier(_el);
                },
                classList: (_el: asn1.ASN1Element): void => {
                    classList = _decode_ClassList(_el);
                },
                securityCategories: (_el: asn1.ASN1Element): void => {
                    securityCategories = __utils._decodeSetOf<SecurityCategory>(
                        () => _decode_SecurityCategory
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Clearance,
                _extension_additions_list_spec_for_Clearance,
                _root_component_type_list_2_spec_for_Clearance,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Clearance /* SEQUENCE_CONSTRUCTOR_CALL */(
                policyId,
                classList,
                securityCategories,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Clearance(el);
}
export function _encode_Clearance(
    value: Clearance,
    elGetter: __utils.ASN1Encoder<Clearance>
) {
    if (!_cached_encoder_for_Clearance) {
        _cached_encoder_for_Clearance = function (
            value: Clearance,
            elGetter: __utils.ASN1Encoder<Clearance>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.policyId,
                                __utils.BER
                            ),
                            /* IF_DEFAULT */ value.classList === undefined ||
                            __utils.deepEq(
                                value.classList,
                                Clearance._default_value_for_classList
                            )
                                ? undefined
                                : _encode_ClassList(
                                      value.classList,
                                      __utils.BER
                                  ),
                            /* IF_ABSENT  */ value.securityCategories ===
                            undefined
                                ? undefined
                                : __utils._encodeSetOf<SecurityCategory>(
                                      () => _encode_SecurityCategory,
                                      __utils.BER
                                  )(value.securityCategories, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Clearance(value, elGetter);
}

// TODO: ObjectClassAssignment: SECURITY-CATEGORY

// TODO: ObjectSetAssignment: SecurityCategoriesTable

// TODO: ObjectAssignment: attributeIntegrityInfo

export type SelectedTypes = AttributeType[]; // SequenceOfType
let _cached_decoder_for_SelectedTypes: __utils.ASN1Decoder<
    SelectedTypes
> | null = null;
let _cached_encoder_for_SelectedTypes: __utils.ASN1Encoder<
    SelectedTypes
> | null = null;
export function _decode_SelectedTypes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SelectedTypes) {
        _cached_decoder_for_SelectedTypes = __utils._decodeSequenceOf<
            AttributeType
        >(() => _decode_AttributeType);
    }
    return _cached_decoder_for_SelectedTypes(el);
}
export function _encode_SelectedTypes(
    value: SelectedTypes,
    elGetter: __utils.ASN1Encoder<SelectedTypes>
) {
    if (!_cached_encoder_for_SelectedTypes) {
        _cached_encoder_for_SelectedTypes = __utils._encodeSequenceOf<
            AttributeType
        >(() => _encode_AttributeType, __utils.BER);
    }
    return _cached_encoder_for_SelectedTypes(value, elGetter);
}

export type Scope =
    | { wholeEntry: asn1.NULL } /* CHOICE_ALT_ROOT */
    | { selectedTypes: SelectedTypes } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Scope: __utils.ASN1Decoder<Scope> | null = null;
let _cached_encoder_for_Scope: __utils.ASN1Encoder<Scope> | null = null;
export function _decode_Scope(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Scope) {
        _cached_decoder_for_Scope = __utils._decode_extensible_choice<Scope>({
            "CONTEXT 0": [
                "wholeEntry",
                __utils._decode_implicit<asn1.NULL>(() => __utils._decodeNull),
            ],
            "CONTEXT 1": [
                "selectedTypes",
                __utils._decode_implicit<SelectedTypes>(
                    () => _decode_SelectedTypes
                ),
            ],
        });
    }
    return _cached_decoder_for_Scope(el);
}
export function _encode_Scope(
    value: Scope,
    elGetter: __utils.ASN1Encoder<Scope>
) {
    if (!_cached_encoder_for_Scope) {
        _cached_encoder_for_Scope = __utils._encode_choice<Scope>(
            {
                wholeEntry: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeNull,
                    __utils.BER
                ),
                selectedTypes: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_SelectedTypes,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_Scope(value, elGetter);
}

export class IssuerAndSerialNumber {
    constructor(
        readonly issuer: Name,
        readonly serial: CertificateSerialNumber,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_IssuerAndSerialNumber: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "issuer",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serial",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_IssuerAndSerialNumber: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_IssuerAndSerialNumber: __utils.ComponentSpec[] = [];
let _cached_decoder_for_IssuerAndSerialNumber: __utils.ASN1Decoder<
    IssuerAndSerialNumber
> | null = null;
let _cached_encoder_for_IssuerAndSerialNumber: __utils.ASN1Encoder<
    IssuerAndSerialNumber
> | null = null;
export function _decode_IssuerAndSerialNumber(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IssuerAndSerialNumber) {
        _cached_decoder_for_IssuerAndSerialNumber = function (
            el: asn1.ASN1Element
        ): IssuerAndSerialNumber {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "IssuerAndSerialNumber contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "issuer";
            sequence[1].name = "serial";
            let issuer!: Name;
            let serial!: CertificateSerialNumber;
            issuer = _decode_Name(sequence[0]);
            serial = _decode_CertificateSerialNumber(sequence[1]);
            // TODO: Validate values.
            return new IssuerAndSerialNumber(issuer, serial, sequence.slice(2));
        };
    }
    return _cached_decoder_for_IssuerAndSerialNumber(el);
}
export function _encode_IssuerAndSerialNumber(
    value: IssuerAndSerialNumber,
    elGetter: __utils.ASN1Encoder<IssuerAndSerialNumber>
) {
    if (!_cached_encoder_for_IssuerAndSerialNumber) {
        _cached_encoder_for_IssuerAndSerialNumber = function (
            value: IssuerAndSerialNumber,
            elGetter: __utils.ASN1Encoder<IssuerAndSerialNumber>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(
                                value.issuer,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serial,
                                __utils.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_IssuerAndSerialNumber(value, elGetter);
}

export type ThisEntry =
    | { onlyOne: asn1.NULL } /* CHOICE_ALT_ROOT */
    | { specific: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ThisEntry: __utils.ASN1Decoder<ThisEntry> | null = null;
let _cached_encoder_for_ThisEntry: __utils.ASN1Encoder<ThisEntry> | null = null;
export function _decode_ThisEntry(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ThisEntry) {
        _cached_decoder_for_ThisEntry = __utils._decode_extensible_choice<
            ThisEntry
        >({
            "UNIVERSAL 5": ["onlyOne", __utils._decodeNull],
            "UNIVERSAL 16": ["specific", _decode_IssuerAndSerialNumber],
        });
    }
    return _cached_decoder_for_ThisEntry(el);
}
export function _encode_ThisEntry(
    value: ThisEntry,
    elGetter: __utils.ASN1Encoder<ThisEntry>
) {
    if (!_cached_encoder_for_ThisEntry) {
        _cached_encoder_for_ThisEntry = __utils._encode_choice<ThisEntry>(
            {
                onlyOne: __utils._encodeNull,
                specific: _encode_IssuerAndSerialNumber,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ThisEntry(value, elGetter);
}

export class SpecificallyIdentified {
    constructor(
        readonly name: GeneralName,
        readonly issuer: GeneralName | undefined,
        readonly serial: CertificateSerialNumber | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_SpecificallyIdentified: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "name",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "issuer",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serial",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SpecificallyIdentified: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SpecificallyIdentified: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SpecificallyIdentified: __utils.ASN1Decoder<
    SpecificallyIdentified
> | null = null;
let _cached_encoder_for_SpecificallyIdentified: __utils.ASN1Encoder<
    SpecificallyIdentified
> | null = null;
export function _decode_SpecificallyIdentified(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SpecificallyIdentified) {
        _cached_decoder_for_SpecificallyIdentified = function (
            el: asn1.ASN1Element
        ): SpecificallyIdentified {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let name!: GeneralName;
            let issuer: asn1.OPTIONAL<GeneralName>;
            let serial: asn1.OPTIONAL<CertificateSerialNumber>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                name: (_el: asn1.ASN1Element): void => {
                    name = _decode_GeneralName(_el);
                },
                issuer: (_el: asn1.ASN1Element): void => {
                    issuer = _decode_GeneralName(_el);
                },
                serial: (_el: asn1.ASN1Element): void => {
                    serial = _decode_CertificateSerialNumber(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SpecificallyIdentified,
                _extension_additions_list_spec_for_SpecificallyIdentified,
                _root_component_type_list_2_spec_for_SpecificallyIdentified,
                undefined
            );
            return new SpecificallyIdentified /* SEQUENCE_CONSTRUCTOR_CALL */(
                name,
                issuer,
                serial
            );
        };
    }
    return _cached_decoder_for_SpecificallyIdentified(el);
}
export function _encode_SpecificallyIdentified(
    value: SpecificallyIdentified,
    elGetter: __utils.ASN1Encoder<SpecificallyIdentified>
) {
    if (!_cached_encoder_for_SpecificallyIdentified) {
        _cached_encoder_for_SpecificallyIdentified = function (
            value: SpecificallyIdentified,
            elGetter: __utils.ASN1Encoder<SpecificallyIdentified>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_GeneralName(
                            value.name,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.issuer === undefined
                            ? undefined
                            : _encode_GeneralName(value.issuer, __utils.BER),
                        /* IF_ABSENT  */ value.serial === undefined
                            ? undefined
                            : _encode_CertificateSerialNumber(
                                  value.serial,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SpecificallyIdentified(value, elGetter);
}

export type Signer =
    | { thisEntry: ThisEntry } /* CHOICE_ALT_ROOT */
    | { thirdParty: SpecificallyIdentified } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Signer: __utils.ASN1Decoder<Signer> | null = null;
let _cached_encoder_for_Signer: __utils.ASN1Encoder<Signer> | null = null;
export function _decode_Signer(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Signer) {
        _cached_decoder_for_Signer = __utils._decode_extensible_choice<Signer>({
            "CONTEXT 0": [
                "thisEntry",
                __utils._decode_explicit<ThisEntry>(() => _decode_ThisEntry),
            ],
            "CONTEXT 1": [
                "thirdParty",
                __utils._decode_implicit<SpecificallyIdentified>(
                    () => _decode_SpecificallyIdentified
                ),
            ],
        });
    }
    return _cached_decoder_for_Signer(el);
}
export function _encode_Signer(
    value: Signer,
    elGetter: __utils.ASN1Encoder<Signer>
) {
    if (!_cached_encoder_for_Signer) {
        _cached_encoder_for_Signer = __utils._encode_choice<Signer>(
            {
                thisEntry: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_ThisEntry,
                    __utils.BER
                ),
                thirdParty: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_SpecificallyIdentified,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_Signer(value, elGetter);
}

export type HashedAttributes = Attribute[]; // SequenceOfType
let _cached_decoder_for_HashedAttributes: __utils.ASN1Decoder<
    HashedAttributes
> | null = null;
let _cached_encoder_for_HashedAttributes: __utils.ASN1Encoder<
    HashedAttributes
> | null = null;
export function _decode_HashedAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_HashedAttributes) {
        _cached_decoder_for_HashedAttributes = __utils._decodeSequenceOf<
            Attribute
        >(() => _decode_Attribute);
    }
    return _cached_decoder_for_HashedAttributes(el);
}
export function _encode_HashedAttributes(
    value: HashedAttributes,
    elGetter: __utils.ASN1Encoder<HashedAttributes>
) {
    if (!_cached_encoder_for_HashedAttributes) {
        _cached_encoder_for_HashedAttributes = __utils._encodeSequenceOf<
            Attribute
        >(() => _encode_Attribute, __utils.BER);
    }
    return _cached_encoder_for_HashedAttributes(value, elGetter);
}

export type AttribsHash = HASH<HashedAttributes>; // DefinedType
let _cached_decoder_for_AttribsHash: __utils.ASN1Decoder<
    AttribsHash
> | null = null;
let _cached_encoder_for_AttribsHash: __utils.ASN1Encoder<
    AttribsHash
> | null = null;
export function _decode_AttribsHash(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttribsHash) {
        _cached_decoder_for_AttribsHash = _get_decoder_for_HASH<
            HashedAttributes
        >(_decode_HashedAttributes);
    }
    return _cached_decoder_for_AttribsHash(el);
}
export function _encode_AttribsHash(
    value: AttribsHash,
    elGetter: __utils.ASN1Encoder<AttribsHash>
) {
    if (!_cached_encoder_for_AttribsHash) {
        _cached_encoder_for_AttribsHash = _get_encoder_for_HASH<
            HashedAttributes
        >(_encode_HashedAttributes);
    }
    return _cached_encoder_for_AttribsHash(value, elGetter);
}

export class AttributeIntegrityInfoContent {
    constructor(
        readonly scope: Scope,
        readonly signer: Signer | undefined,
        readonly attribsHash: AttribsHash,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeIntegrityInfoContent: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "scope",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signer",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attribsHash",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AttributeIntegrityInfoContent: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AttributeIntegrityInfoContent: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AttributeIntegrityInfoContent: __utils.ASN1Decoder<
    AttributeIntegrityInfoContent
> | null = null;
let _cached_encoder_for_AttributeIntegrityInfoContent: __utils.ASN1Encoder<
    AttributeIntegrityInfoContent
> | null = null;
export function _decode_AttributeIntegrityInfoContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeIntegrityInfoContent) {
        _cached_decoder_for_AttributeIntegrityInfoContent = function (
            el: asn1.ASN1Element
        ): AttributeIntegrityInfoContent {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let scope!: Scope;
            let signer: asn1.OPTIONAL<Signer>;
            let attribsHash!: AttribsHash;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                scope: (_el: asn1.ASN1Element): void => {
                    scope = _decode_Scope(_el);
                },
                signer: (_el: asn1.ASN1Element): void => {
                    signer = _decode_Signer(_el);
                },
                attribsHash: (_el: asn1.ASN1Element): void => {
                    attribsHash = _decode_AttribsHash(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeIntegrityInfoContent,
                _extension_additions_list_spec_for_AttributeIntegrityInfoContent,
                _root_component_type_list_2_spec_for_AttributeIntegrityInfoContent,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeIntegrityInfoContent /* SEQUENCE_CONSTRUCTOR_CALL */(
                scope,
                signer,
                attribsHash,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeIntegrityInfoContent(el);
}
export function _encode_AttributeIntegrityInfoContent(
    value: AttributeIntegrityInfoContent,
    elGetter: __utils.ASN1Encoder<AttributeIntegrityInfoContent>
) {
    if (!_cached_encoder_for_AttributeIntegrityInfoContent) {
        _cached_encoder_for_AttributeIntegrityInfoContent = function (
            value: AttributeIntegrityInfoContent,
            elGetter: __utils.ASN1Encoder<AttributeIntegrityInfoContent>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Scope(
                                value.scope,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.signer === undefined
                                ? undefined
                                : _encode_Signer(value.signer, __utils.BER),
                            /* REQUIRED   */ _encode_AttribsHash(
                                value.attribsHash,
                                __utils.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AttributeIntegrityInfoContent(value, elGetter);
}

export type AttributeIntegrityInfo = SIGNED<AttributeIntegrityInfoContent>; // DefinedType
let _cached_decoder_for_AttributeIntegrityInfo: __utils.ASN1Decoder<
    AttributeIntegrityInfo
> | null = null;
let _cached_encoder_for_AttributeIntegrityInfo: __utils.ASN1Encoder<
    AttributeIntegrityInfo
> | null = null;
export function _decode_AttributeIntegrityInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeIntegrityInfo) {
        _cached_decoder_for_AttributeIntegrityInfo = _get_decoder_for_SIGNED<
            AttributeIntegrityInfoContent
        >(_decode_AttributeIntegrityInfoContent);
    }
    return _cached_decoder_for_AttributeIntegrityInfo(el);
}
export function _encode_AttributeIntegrityInfo(
    value: AttributeIntegrityInfo,
    elGetter: __utils.ASN1Encoder<AttributeIntegrityInfo>
) {
    if (!_cached_encoder_for_AttributeIntegrityInfo) {
        _cached_encoder_for_AttributeIntegrityInfo = _get_encoder_for_SIGNED<
            AttributeIntegrityInfoContent
        >(_encode_AttributeIntegrityInfoContent);
    }
    return _cached_encoder_for_AttributeIntegrityInfo(value, elGetter);
}

// TODO: ObjectAssignment: integrityInfo

// TODO: ObjectAssignment: attributeValueIntegrityInfoContext

export class AttributeTypeValueContexts {
    constructor(
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly value: asn1.ASN1Element,
        readonly contextList: Context[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeTypeValueContexts: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "value",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contextList",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AttributeTypeValueContexts: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AttributeTypeValueContexts: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AttributeTypeValueContexts: __utils.ASN1Decoder<
    AttributeTypeValueContexts
> | null = null;
let _cached_encoder_for_AttributeTypeValueContexts: __utils.ASN1Encoder<
    AttributeTypeValueContexts
> | null = null;
export function _decode_AttributeTypeValueContexts(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeTypeValueContexts) {
        _cached_decoder_for_AttributeTypeValueContexts = function (
            el: asn1.ASN1Element
        ): AttributeTypeValueContexts {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let type_!: asn1.OBJECT_IDENTIFIER;
            let value!: asn1.ASN1Element;
            let contextList: asn1.OPTIONAL<Context[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                type: (_el: asn1.ASN1Element): void => {
                    type_ = __utils._decodeObjectIdentifier(_el);
                },
                value: (_el: asn1.ASN1Element): void => {
                    value = __utils._decodeAny(_el);
                },
                contextList: (_el: asn1.ASN1Element): void => {
                    contextList = __utils._decodeSetOf<Context>(
                        () => _decode_Context
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeTypeValueContexts,
                _extension_additions_list_spec_for_AttributeTypeValueContexts,
                _root_component_type_list_2_spec_for_AttributeTypeValueContexts,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeTypeValueContexts /* SEQUENCE_CONSTRUCTOR_CALL */(
                type_,
                value,
                contextList,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeTypeValueContexts(el);
}
export function _encode_AttributeTypeValueContexts(
    value: AttributeTypeValueContexts,
    elGetter: __utils.ASN1Encoder<AttributeTypeValueContexts>
) {
    if (!_cached_encoder_for_AttributeTypeValueContexts) {
        _cached_encoder_for_AttributeTypeValueContexts = function (
            value: AttributeTypeValueContexts,
            elGetter: __utils.ASN1Encoder<AttributeTypeValueContexts>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.type_,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeAny(
                                value.value,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.contextList === undefined
                                ? undefined
                                : __utils._encodeSetOf<Context>(
                                      () => _encode_Context,
                                      __utils.BER
                                  )(value.contextList, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AttributeTypeValueContexts(value, elGetter);
}

export type AVIHash = HASH<AttributeTypeValueContexts>; // DefinedType
let _cached_decoder_for_AVIHash: __utils.ASN1Decoder<AVIHash> | null = null;
let _cached_encoder_for_AVIHash: __utils.ASN1Encoder<AVIHash> | null = null;
export function _decode_AVIHash(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AVIHash) {
        _cached_decoder_for_AVIHash = _get_decoder_for_HASH<
            AttributeTypeValueContexts
        >(_decode_AttributeTypeValueContexts);
    }
    return _cached_decoder_for_AVIHash(el);
}
export function _encode_AVIHash(
    value: AVIHash,
    elGetter: __utils.ASN1Encoder<AVIHash>
) {
    if (!_cached_encoder_for_AVIHash) {
        _cached_encoder_for_AVIHash = _get_encoder_for_HASH<
            AttributeTypeValueContexts
        >(_encode_AttributeTypeValueContexts);
    }
    return _cached_encoder_for_AVIHash(value, elGetter);
}

export class AttributeValueIntegrityInfoContent {
    constructor(
        readonly signer: Signer | undefined,
        readonly aVIHash: AVIHash,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeValueIntegrityInfoContent: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "signer",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aVIHash",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AttributeValueIntegrityInfoContent: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AttributeValueIntegrityInfoContent: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AttributeValueIntegrityInfoContent: __utils.ASN1Decoder<
    AttributeValueIntegrityInfoContent
> | null = null;
let _cached_encoder_for_AttributeValueIntegrityInfoContent: __utils.ASN1Encoder<
    AttributeValueIntegrityInfoContent
> | null = null;
export function _decode_AttributeValueIntegrityInfoContent(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_AttributeValueIntegrityInfoContent) {
        _cached_decoder_for_AttributeValueIntegrityInfoContent = function (
            el: asn1.ASN1Element
        ): AttributeValueIntegrityInfoContent {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let signer: asn1.OPTIONAL<Signer>;
            let aVIHash!: AVIHash;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                signer: (_el: asn1.ASN1Element): void => {
                    signer = _decode_Signer(_el);
                },
                aVIHash: (_el: asn1.ASN1Element): void => {
                    aVIHash = _decode_AVIHash(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeValueIntegrityInfoContent,
                _extension_additions_list_spec_for_AttributeValueIntegrityInfoContent,
                _root_component_type_list_2_spec_for_AttributeValueIntegrityInfoContent,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeValueIntegrityInfoContent /* SEQUENCE_CONSTRUCTOR_CALL */(
                signer,
                aVIHash,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeValueIntegrityInfoContent(el);
}
export function _encode_AttributeValueIntegrityInfoContent(
    value: AttributeValueIntegrityInfoContent,
    elGetter: __utils.ASN1Encoder<AttributeValueIntegrityInfoContent>
) {
    if (!_cached_encoder_for_AttributeValueIntegrityInfoContent) {
        _cached_encoder_for_AttributeValueIntegrityInfoContent = function (
            value: AttributeValueIntegrityInfoContent,
            elGetter: __utils.ASN1Encoder<AttributeValueIntegrityInfoContent>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.signer === undefined
                                ? undefined
                                : _encode_Signer(value.signer, __utils.BER),
                            /* REQUIRED   */ _encode_AVIHash(
                                value.aVIHash,
                                __utils.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AttributeValueIntegrityInfoContent(
        value,
        elGetter
    );
}

export type AttributeValueIntegrityInfo = SIGNED<
    AttributeValueIntegrityInfoContent
>; // DefinedType
let _cached_decoder_for_AttributeValueIntegrityInfo: __utils.ASN1Decoder<
    AttributeValueIntegrityInfo
> | null = null;
let _cached_encoder_for_AttributeValueIntegrityInfo: __utils.ASN1Encoder<
    AttributeValueIntegrityInfo
> | null = null;
export function _decode_AttributeValueIntegrityInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeValueIntegrityInfo) {
        _cached_decoder_for_AttributeValueIntegrityInfo = _get_decoder_for_SIGNED<
            AttributeValueIntegrityInfoContent
        >(_decode_AttributeValueIntegrityInfoContent);
    }
    return _cached_decoder_for_AttributeValueIntegrityInfo(el);
}
export function _encode_AttributeValueIntegrityInfo(
    value: AttributeValueIntegrityInfo,
    elGetter: __utils.ASN1Encoder<AttributeValueIntegrityInfo>
) {
    if (!_cached_encoder_for_AttributeValueIntegrityInfo) {
        _cached_encoder_for_AttributeValueIntegrityInfo = _get_encoder_for_SIGNED<
            AttributeValueIntegrityInfoContent
        >(_encode_AttributeValueIntegrityInfoContent);
    }
    return _cached_encoder_for_AttributeValueIntegrityInfo(value, elGetter);
}

export const id_oc_integrityInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [40],
    id_oc
);

export const id_at_clearance: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [55],
    id_at
);

export const id_at_attributeIntegrityInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [57],
    id_at
);

export const id_avc_attributeValueSecurityLabelContext: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_avc
);

export const id_avc_attributeValueIntegrityInfoContext: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_avc
);

/* END_MODULE EnhancedSecurity */
