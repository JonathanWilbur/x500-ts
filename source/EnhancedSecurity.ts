
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
import * as __utils from "./__utils";
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
} from "./__utils";
import * as UsefulDefinitions from "./UsefulDefinitions";
import {
    authenticationFramework,
    basicAccessControl,
    certificateExtensions,
    id_at,
    id_avc,
    id_mr,
    id_oc,
    informationFramework
} from "./UsefulDefinitions";
export {
    authenticationFramework,
    basicAccessControl,
    certificateExtensions,
    id_at,
    id_avc,
    id_mr,
    id_oc,
    informationFramework
} from "./UsefulDefinitions";

import * as InformationFramework from "./InformationFramework";
import {
    ATTRIBUTE,
    AttributeType,
    AttributeTypeAndValue,
    Context,
    CONTEXT,
    Name,
    OBJECT_CLASS,
    objectIdentifierMatch,
    SupportedAttributes,
    top,
    Attribute,
    _decode_AttributeType,
    _encode_AttributeType,
    _decode_AttributeTypeAndValue,
    _encode_AttributeTypeAndValue,
    _decode_Context,
    _encode_Context,
    _decode_Name,
    _encode_Name,
    _decode_Attribute,
    _encode_Attribute
} from "./InformationFramework";
export {
    ATTRIBUTE,
    AttributeType,
    AttributeTypeAndValue,
    Context,
    CONTEXT,
    Name,
    OBJECT_CLASS,
    objectIdentifierMatch,
    SupportedAttributes,
    top,
    Attribute,
    _decode_AttributeType,
    _encode_AttributeType,
    _decode_AttributeTypeAndValue,
    _encode_AttributeTypeAndValue,
    _decode_Context,
    _encode_Context,
    _decode_Name,
    _encode_Name,
    _decode_Attribute,
    _encode_Attribute
} from "./InformationFramework";

import * as AuthenticationFramework from "./AuthenticationFramework";
import {
    CertificateSerialNumber,
    HASH,
    SIGNED,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _get_decoder_for_HASH,
    _get_encoder_for_HASH,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED
} from "./AuthenticationFramework";
export {
    CertificateSerialNumber,
    HASH,
    SIGNED,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _get_decoder_for_HASH,
    _get_encoder_for_HASH,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED
} from "./AuthenticationFramework";

import * as CertificateExtensions from "./CertificateExtensions";
import {
    GeneralName,
    KeyIdentifier,
    _decode_GeneralName,
    _encode_GeneralName,
    _decode_KeyIdentifier,
    _encode_KeyIdentifier
} from "./CertificateExtensions";
export {
    GeneralName,
    KeyIdentifier,
    _decode_GeneralName,
    _encode_GeneralName,
    _decode_KeyIdentifier,
    _encode_KeyIdentifier
} from "./CertificateExtensions";


export type OPTIONALLY_PROTECTED<Type> =
    { unsigned: Type }
    | { signed: SIGNED<Type> };
export const _get_decoder_for_OPTIONALLY_PROTECTED = function <Type>(_decode_Type: __utils.ASN1Decoder<Type>) {
return __utils._decode_inextensible_choice<OPTIONALLY_PROTECTED<Type>>({
    /* NO_TAG_OR_TAG_CLASS */: [ "unsigned", _decode_Type ],
    "UNIVERSAL 16": [ "signed", _get_decoder_for_SIGNED<Type>(_decode_Type) ]
})
}
export const _get_encoder_for_OPTIONALLY_PROTECTED = function <Type>(_encode_Type: __utils.ASN1Encoder<Type>) {
return __utils._encode_choice<OPTIONALLY_PROTECTED<Type>>({
    "unsigned": _encode_Type,
    "signed": _get_encoder_for_SIGNED<Type>(_encode_Type),
}, __utils.BER)
}


export type OPTIONALLY_PROTECTED_SEQ<Type> =
    { unsigned: Type }
    | { signed: SIGNED<Type> };
export const _get_decoder_for_OPTIONALLY_PROTECTED_SEQ = function <Type>(_decode_Type: __utils.ASN1Decoder<Type>) {
return __utils._decode_inextensible_choice<OPTIONALLY_PROTECTED_SEQ<Type>>({
    /* NO_TAG_OR_TAG_CLASS */: [ "unsigned", _decode_Type ],
    "CONTEXT 0": [ "signed", __utils._decode_implicit<SIGNED<Type>>(() => _get_decoder_for_SIGNED<Type>(_decode_Type)) ]
})
}
export const _get_encoder_for_OPTIONALLY_PROTECTED_SEQ = function <Type>(_encode_Type: __utils.ASN1Encoder<Type>) {
return __utils._encode_choice<OPTIONALLY_PROTECTED_SEQ<Type>>({
    "unsigned": _encode_Type,
    "signed": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _get_encoder_for_SIGNED<Type>(_encode_Type), __utils.BER),
}, __utils.BER)
}


// TODO: ObjectAssignment: attributeValueSecurityLabelContext

export type SecurityPolicyIdentifier = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_SecurityPolicyIdentifier = __utils._decodeObjectIdentifier;
export const _encode_SecurityPolicyIdentifier = __utils._encodeObjectIdentifier;


export type SecurityClassification = asn1.INTEGER;
export const SecurityClassification_unmarked: SecurityClassification = 0; /* LONG_NAMED_INTEGER_VALUE */
export const unmarked: SecurityClassification = SecurityClassification_unmarked; /* SHORT_NAMED_INTEGER_VALUE */
export const SecurityClassification_unclassified: SecurityClassification = 1; /* LONG_NAMED_INTEGER_VALUE */
export const unclassified: SecurityClassification = SecurityClassification_unclassified; /* SHORT_NAMED_INTEGER_VALUE */
export const SecurityClassification_restricted: SecurityClassification = 2; /* LONG_NAMED_INTEGER_VALUE */
export const restricted: SecurityClassification = SecurityClassification_restricted; /* SHORT_NAMED_INTEGER_VALUE */
export const SecurityClassification_confidential: SecurityClassification = 3; /* LONG_NAMED_INTEGER_VALUE */
export const confidential: SecurityClassification = SecurityClassification_confidential; /* SHORT_NAMED_INTEGER_VALUE */
export const SecurityClassification_secret: SecurityClassification = 4; /* LONG_NAMED_INTEGER_VALUE */
export const secret: SecurityClassification = SecurityClassification_secret; /* SHORT_NAMED_INTEGER_VALUE */
export const SecurityClassification_top_secret: SecurityClassification = 5; /* LONG_NAMED_INTEGER_VALUE */
export const top_secret: SecurityClassification = SecurityClassification_top_secret; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SecurityClassification = __utils._decodeInteger;
export const _encode_SecurityClassification = __utils._encodeInteger;


export type PrivacyMark = asn1.PrintableString; // PrintableString
export const _decode_PrivacyMark = __utils._decodePrintableString;
export const _encode_PrivacyMark = __utils._encodePrintableString;


export class SecurityCategory {
    constructor (
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly value: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_SecurityCategory: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("type", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("value", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SecurityCategory: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SecurityCategory: __utils.ComponentSpec[] = [
    
];
export const _decode_SecurityCategory = function (el: asn1.ASN1Element): SecurityCategory {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("SecurityCategory contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "type";
    sequence[1].name = "value";
    let type_!: asn1.OBJECT_IDENTIFIER;
    let value!: asn1.ASN1Element;
    type_ = __utils._decode_implicit<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier)(sequence[0]);
    value = __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny)(sequence[1]);
    // TODO: Validate values.
    return new SecurityCategory(
        type_,
        value,
        sequence.slice(2),
    );
};
export const _encode_SecurityCategory = function (value: SecurityCategory, elGetter: __utils.ASN1Encoder<SecurityCategory>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeObjectIdentifier, __utils.BER)(value.type_, __utils.BER),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeAny, __utils.BER)(value.value, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type SecurityCategories = SecurityCategory[]; // SetOfType
export const _decode_SecurityCategories = __utils._decodeSetOf<SecurityCategory>(() => _decode_SecurityCategory);
export const _encode_SecurityCategories = __utils._encodeSetOf<SecurityCategory>(() => _encode_SecurityCategory, __utils.BER);


export class SecurityLabel {
    constructor (
        readonly security_policy_identifier: SecurityPolicyIdentifier | undefined,
        readonly security_classification: SecurityClassification | undefined,
        readonly privacy_mark: PrivacyMark | undefined,
        readonly security_categories: SecurityCategories | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_SecurityLabel: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("security-policy-identifier", true, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("security-classification", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("privacy-mark", true, __utils.hasTag(asn1.ASN1TagClass.universal, 19), undefined, undefined),
    new __utils.ComponentSpec("security-categories", true, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SecurityLabel: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SecurityLabel: __utils.ComponentSpec[] = [
    
];
export const _decode_SecurityLabel = function (el: asn1.ASN1Element): SecurityLabel {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let security_policy_identifier: asn1.OPTIONAL<SecurityPolicyIdentifier>;
    let security_classification: asn1.OPTIONAL<SecurityClassification>;
    let privacy_mark: asn1.OPTIONAL<PrivacyMark>;
    let security_categories: asn1.OPTIONAL<SecurityCategories>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "security-policy-identifier": (_el: asn1.ASN1Element): void => { security_policy_identifier = _decode_SecurityPolicyIdentifier(_el); },
        "security-classification": (_el: asn1.ASN1Element): void => { security_classification = _decode_SecurityClassification(_el); },
        "privacy-mark": (_el: asn1.ASN1Element): void => { privacy_mark = _decode_PrivacyMark(_el); },
        "security-categories": (_el: asn1.ASN1Element): void => { security_categories = _decode_SecurityCategories(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SecurityLabel,
        _extension_additions_list_spec_for_SecurityLabel,
        _root_component_type_list_2_spec_for_SecurityLabel,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); } ,
    );
    return new SecurityLabel( /* SET_CONSTRUCTOR_CALL */
        security_policy_identifier,
        security_classification,
        privacy_mark,
        security_categories,
        _unrecognizedExtensionsList
    );
};
export const _encode_SecurityLabel = function (value: SecurityLabel, elGetter: __utils.ASN1Encoder<SecurityLabel>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.security_policy_identifier ? _encode_SecurityPolicyIdentifier(value.security_policy_identifier, __utils.BER) : undefined),
            (value.security_classification ? _encode_SecurityClassification(value.security_classification, __utils.BER) : undefined),
            (value.privacy_mark ? _encode_PrivacyMark(value.privacy_mark, __utils.BER) : undefined),
            (value.security_categories ? _encode_SecurityCategories(value.security_categories, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class SignedSecurityLabelContent {
    constructor (
        readonly attHash: HASH<AttributeTypeAndValue>,
        readonly issuer: Name | undefined,
        readonly keyIdentifier: KeyIdentifier | undefined,
        readonly securityLabel: SecurityLabel,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_SignedSecurityLabelContent: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("attHash", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("issuer", true, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("keyIdentifier", true, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("securityLabel", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SignedSecurityLabelContent: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SignedSecurityLabelContent: __utils.ComponentSpec[] = [
    
];
export const _decode_SignedSecurityLabelContent = function (el: asn1.ASN1Element): SignedSecurityLabelContent {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let attHash!: HASH<AttributeTypeAndValue>;
    let issuer: asn1.OPTIONAL<Name>;
    let keyIdentifier: asn1.OPTIONAL<KeyIdentifier>;
    let securityLabel!: SecurityLabel;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "attHash": (_el: asn1.ASN1Element): void => { attHash = _get_decoder_for_HASH<AttributeTypeAndValue>(_decode_AttributeTypeAndValue)(_el); },
        "issuer": (_el: asn1.ASN1Element): void => { issuer = _decode_Name(_el); },
        "keyIdentifier": (_el: asn1.ASN1Element): void => { keyIdentifier = _decode_KeyIdentifier(_el); },
        "securityLabel": (_el: asn1.ASN1Element): void => { securityLabel = _decode_SecurityLabel(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SignedSecurityLabelContent,
        _extension_additions_list_spec_for_SignedSecurityLabelContent,
        _root_component_type_list_2_spec_for_SignedSecurityLabelContent,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SignedSecurityLabelContent( /* SEQUENCE_CONSTRUCTOR_CALL */
        attHash,
        issuer,
        keyIdentifier,
        securityLabel,
        _unrecognizedExtensionsList
    );
};
export const _encode_SignedSecurityLabelContent = function (value: SignedSecurityLabelContent, elGetter: __utils.ASN1Encoder<SignedSecurityLabelContent>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _get_encoder_for_HASH<AttributeTypeAndValue>(_encode_AttributeTypeAndValue)(value.attHash, __utils.BER),
            (value.issuer ? _encode_Name(value.issuer, __utils.BER) : undefined),
            (value.keyIdentifier ? _encode_KeyIdentifier(value.keyIdentifier, __utils.BER) : undefined),
            _encode_SecurityLabel(value.securityLabel, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type SignedSecurityLabel = SIGNED<SignedSecurityLabelContent>; // DefinedType
export const _decode_SignedSecurityLabel = _get_decoder_for_SIGNED<SignedSecurityLabelContent>(_decode_SignedSecurityLabelContent);
export const _encode_SignedSecurityLabel = _get_encoder_for_SIGNED<SignedSecurityLabelContent>(_encode_SignedSecurityLabelContent);


// TODO: ObjectAssignment: clearance

export type ClassList = asn1.BIT_STRING;
export const ClassList_unmarked: number = 0; /* LONG_NAMED_BIT */
export const unmarked: number = ClassList_unmarked; /* SHORT_NAMED_BIT */
export const ClassList_unclassified: number = 1; /* LONG_NAMED_BIT */
export const unclassified: number = ClassList_unclassified; /* SHORT_NAMED_BIT */
export const ClassList_restricted: number = 2; /* LONG_NAMED_BIT */
export const restricted: number = ClassList_restricted; /* SHORT_NAMED_BIT */
export const ClassList_confidential: number = 3; /* LONG_NAMED_BIT */
export const confidential: number = ClassList_confidential; /* SHORT_NAMED_BIT */
export const ClassList_secret: number = 4; /* LONG_NAMED_BIT */
export const secret: number = ClassList_secret; /* SHORT_NAMED_BIT */
export const ClassList_topSecret: number = 5; /* LONG_NAMED_BIT */
export const topSecret: number = ClassList_topSecret; /* SHORT_NAMED_BIT */
export const _decode_ClassList = __utils._decodeBitString;
export const _encode_ClassList = __utils._encodeBitString;


export class Clearance {
    constructor (
        readonly policyId: asn1.OBJECT_IDENTIFIER,
        readonly classList: ClassList | undefined,
        readonly securityCategories: SecurityCategory[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_Clearance: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("policyId", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("classList", true, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("securityCategories", true, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Clearance: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_Clearance: __utils.ComponentSpec[] = [
    
];
export const _decode_Clearance = function (el: asn1.ASN1Element): Clearance {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let policyId!: asn1.OBJECT_IDENTIFIER;
    let classList: asn1.OPTIONAL<ClassList> = /* FIXME: classList COULD_NOT_COMPILE_DEFAULT_VALUE */;
    let securityCategories: asn1.OPTIONAL<SecurityCategory[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "policyId": (_el: asn1.ASN1Element): void => { policyId = __utils._decodeObjectIdentifier(_el); },
        "classList": (_el: asn1.ASN1Element): void => { classList = _decode_ClassList(_el); },
        "securityCategories": (_el: asn1.ASN1Element): void => { securityCategories = __utils._decodeSetOf<SecurityCategory>(() => _decode_SecurityCategory)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Clearance,
        _extension_additions_list_spec_for_Clearance,
        _root_component_type_list_2_spec_for_Clearance,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Clearance( /* SEQUENCE_CONSTRUCTOR_CALL */
        policyId,
        classList,
        securityCategories,
        _unrecognizedExtensionsList
    );
};
export const _encode_Clearance = function (value: Clearance, elGetter: __utils.ASN1Encoder<Clearance>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeObjectIdentifier(value.policyId, __utils.BER),
            (value.classList /* FIXME: COULD_NOT_COMPILE_DEFAULT_VALUE */? _encode_ClassList(value.classList, __utils.BER) : undefined),
            (value.securityCategories ? __utils._encodeSetOf<SecurityCategory>(() => _encode_SecurityCategory, __utils.BER)(value.securityCategories, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectClassAssignment: SECURITY-CATEGORY

// TODO: ObjectSetAssignment: SecurityCategoriesTable

// TODO: ObjectAssignment: attributeIntegrityInfo

export type SelectedTypes = AttributeType[]; // SequenceOfType
export const _decode_SelectedTypes = __utils._decodeSequenceOf<AttributeType>(() => _decode_AttributeType);
export const _encode_SelectedTypes = __utils._encodeSequenceOf<AttributeType>(() => _encode_AttributeType, __utils.BER);


export type Scope =
    { wholeEntry: asn1.NULL }
    | { selectedTypes: SelectedTypes }
    | asn1.ASN1Element;
export const _decode_Scope = __utils._decode_extensible_choice<Scope>({
    "CONTEXT 0": [ "wholeEntry", __utils._decode_implicit<asn1.NULL>(() => __utils._decodeNull) ],
    "CONTEXT 1": [ "selectedTypes", __utils._decode_implicit<SelectedTypes>(() => _decode_SelectedTypes) ]
});
export const _encode_Scope = __utils._encode_choice<Scope>({
    "wholeEntry": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeNull, __utils.BER),
    "selectedTypes": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_SelectedTypes, __utils.BER),
}, __utils.BER);


export class IssuerAndSerialNumber {
    constructor (
        readonly issuer: Name,
        readonly serial: CertificateSerialNumber,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_IssuerAndSerialNumber: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("issuer", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("serial", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_IssuerAndSerialNumber: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_IssuerAndSerialNumber: __utils.ComponentSpec[] = [
    
];
export const _decode_IssuerAndSerialNumber = function (el: asn1.ASN1Element): IssuerAndSerialNumber {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("IssuerAndSerialNumber contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "issuer";
    sequence[1].name = "serial";
    let issuer!: Name;
    let serial!: CertificateSerialNumber;
    issuer = _decode_Name(sequence[0]);
    serial = _decode_CertificateSerialNumber(sequence[1]);
    // TODO: Validate values.
    return new IssuerAndSerialNumber(
        issuer,
        serial,
        sequence.slice(2),
    );
};
export const _encode_IssuerAndSerialNumber = function (value: IssuerAndSerialNumber, elGetter: __utils.ASN1Encoder<IssuerAndSerialNumber>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Name(value.issuer, __utils.BER),
            _encode_CertificateSerialNumber(value.serial, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type ThisEntry =
    { onlyOne: asn1.NULL }
    | { specific: IssuerAndSerialNumber }
    | asn1.ASN1Element;
export const _decode_ThisEntry = __utils._decode_extensible_choice<ThisEntry>({
    "UNIVERSAL 5": [ "onlyOne", __utils._decodeNull ],
    "UNIVERSAL 16": [ "specific", _decode_IssuerAndSerialNumber ]
});
export const _encode_ThisEntry = __utils._encode_choice<ThisEntry>({
    "onlyOne": __utils._encodeNull,
    "specific": _encode_IssuerAndSerialNumber,
}, __utils.BER);


export class SpecificallyIdentified {
    constructor (
        readonly name: GeneralName,
        readonly issuer: GeneralName | undefined,
        readonly serial: CertificateSerialNumber | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_SpecificallyIdentified: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("name", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("issuer", true, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("serial", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SpecificallyIdentified: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SpecificallyIdentified: __utils.ComponentSpec[] = [
    
];
export const _decode_SpecificallyIdentified = function (el: asn1.ASN1Element): SpecificallyIdentified {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let name!: GeneralName;
    let issuer: asn1.OPTIONAL<GeneralName>;
    let serial: asn1.OPTIONAL<CertificateSerialNumber>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "name": (_el: asn1.ASN1Element): void => { name = _decode_GeneralName(_el); },
        "issuer": (_el: asn1.ASN1Element): void => { issuer = _decode_GeneralName(_el); },
        "serial": (_el: asn1.ASN1Element): void => { serial = _decode_CertificateSerialNumber(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SpecificallyIdentified,
        _extension_additions_list_spec_for_SpecificallyIdentified,
        _root_component_type_list_2_spec_for_SpecificallyIdentified,
        undefined,
    );
    return new SpecificallyIdentified( /* SEQUENCE_CONSTRUCTOR_CALL */
        name,
        issuer,
        serial
    );
};
export const _encode_SpecificallyIdentified = function (value: SpecificallyIdentified, elGetter: __utils.ASN1Encoder<SpecificallyIdentified>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_GeneralName(value.name, __utils.BER),
            (value.issuer ? _encode_GeneralName(value.issuer, __utils.BER) : undefined),
            (value.serial ? _encode_CertificateSerialNumber(value.serial, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type Signer =
    { thisEntry: ThisEntry }
    | { thirdParty: SpecificallyIdentified }
    | asn1.ASN1Element;
export const _decode_Signer = __utils._decode_extensible_choice<Signer>({
    "CONTEXT 0": [ "thisEntry", __utils._decode_explicit<ThisEntry>(() => _decode_ThisEntry) ],
    "CONTEXT 1": [ "thirdParty", __utils._decode_implicit<SpecificallyIdentified>(() => _decode_SpecificallyIdentified) ]
});
export const _encode_Signer = __utils._encode_choice<Signer>({
    "thisEntry": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_ThisEntry, __utils.BER),
    "thirdParty": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_SpecificallyIdentified, __utils.BER),
}, __utils.BER);


export type HashedAttributes = Attribute[]; // SequenceOfType
export const _decode_HashedAttributes = __utils._decodeSequenceOf<Attribute>(() => _decode_Attribute);
export const _encode_HashedAttributes = __utils._encodeSequenceOf<Attribute>(() => _encode_Attribute, __utils.BER);


export type AttribsHash = HASH<HashedAttributes>; // DefinedType
export const _decode_AttribsHash = _get_decoder_for_HASH<HashedAttributes>(_decode_HashedAttributes);
export const _encode_AttribsHash = _get_encoder_for_HASH<HashedAttributes>(_encode_HashedAttributes);


export class AttributeIntegrityInfoContent {
    constructor (
        readonly scope: Scope,
        readonly signer: Signer | undefined,
        readonly attribsHash: AttribsHash,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeIntegrityInfoContent: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("scope", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("signer", true, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("attribsHash", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AttributeIntegrityInfoContent: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_AttributeIntegrityInfoContent: __utils.ComponentSpec[] = [
    
];
export const _decode_AttributeIntegrityInfoContent = function (el: asn1.ASN1Element): AttributeIntegrityInfoContent {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let scope!: Scope;
    let signer: asn1.OPTIONAL<Signer>;
    let attribsHash!: AttribsHash;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "scope": (_el: asn1.ASN1Element): void => { scope = _decode_Scope(_el); },
        "signer": (_el: asn1.ASN1Element): void => { signer = _decode_Signer(_el); },
        "attribsHash": (_el: asn1.ASN1Element): void => { attribsHash = _decode_AttribsHash(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeIntegrityInfoContent,
        _extension_additions_list_spec_for_AttributeIntegrityInfoContent,
        _root_component_type_list_2_spec_for_AttributeIntegrityInfoContent,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AttributeIntegrityInfoContent( /* SEQUENCE_CONSTRUCTOR_CALL */
        scope,
        signer,
        attribsHash,
        _unrecognizedExtensionsList
    );
};
export const _encode_AttributeIntegrityInfoContent = function (value: AttributeIntegrityInfoContent, elGetter: __utils.ASN1Encoder<AttributeIntegrityInfoContent>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Scope(value.scope, __utils.BER),
            (value.signer ? _encode_Signer(value.signer, __utils.BER) : undefined),
            _encode_AttribsHash(value.attribsHash, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type AttributeIntegrityInfo = SIGNED<AttributeIntegrityInfoContent>; // DefinedType
export const _decode_AttributeIntegrityInfo = _get_decoder_for_SIGNED<AttributeIntegrityInfoContent>(_decode_AttributeIntegrityInfoContent);
export const _encode_AttributeIntegrityInfo = _get_encoder_for_SIGNED<AttributeIntegrityInfoContent>(_encode_AttributeIntegrityInfoContent);


// TODO: ObjectAssignment: integrityInfo

// TODO: ObjectAssignment: attributeValueIntegrityInfoContext

export class AttributeTypeValueContexts {
    constructor (
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly value: asn1.ASN1Element,
        readonly contextList: Context[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeTypeValueContexts: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("type", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("value", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("contextList", true, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AttributeTypeValueContexts: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_AttributeTypeValueContexts: __utils.ComponentSpec[] = [
    
];
export const _decode_AttributeTypeValueContexts = function (el: asn1.ASN1Element): AttributeTypeValueContexts {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let type_!: asn1.OBJECT_IDENTIFIER;
    let value!: asn1.ASN1Element;
    let contextList: asn1.OPTIONAL<Context[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "type": (_el: asn1.ASN1Element): void => { type_ = __utils._decodeObjectIdentifier(_el); },
        "value": (_el: asn1.ASN1Element): void => { value = __utils._decodeAny(_el); },
        "contextList": (_el: asn1.ASN1Element): void => { contextList = __utils._decodeSetOf<Context>(() => _decode_Context)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeTypeValueContexts,
        _extension_additions_list_spec_for_AttributeTypeValueContexts,
        _root_component_type_list_2_spec_for_AttributeTypeValueContexts,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AttributeTypeValueContexts( /* SEQUENCE_CONSTRUCTOR_CALL */
        type_,
        value,
        contextList,
        _unrecognizedExtensionsList
    );
};
export const _encode_AttributeTypeValueContexts = function (value: AttributeTypeValueContexts, elGetter: __utils.ASN1Encoder<AttributeTypeValueContexts>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeObjectIdentifier(value.type_, __utils.BER),
            __utils._encodeAny(value.value, __utils.BER),
            (value.contextList ? __utils._encodeSetOf<Context>(() => _encode_Context, __utils.BER)(value.contextList, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type AVIHash = HASH<AttributeTypeValueContexts>; // DefinedType
export const _decode_AVIHash = _get_decoder_for_HASH<AttributeTypeValueContexts>(_decode_AttributeTypeValueContexts);
export const _encode_AVIHash = _get_encoder_for_HASH<AttributeTypeValueContexts>(_encode_AttributeTypeValueContexts);


export class AttributeValueIntegrityInfoContent {
    constructor (
        readonly signer: Signer | undefined,
        readonly aVIHash: AVIHash,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeValueIntegrityInfoContent: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("signer", true, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("aVIHash", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AttributeValueIntegrityInfoContent: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_AttributeValueIntegrityInfoContent: __utils.ComponentSpec[] = [
    
];
export const _decode_AttributeValueIntegrityInfoContent = function (el: asn1.ASN1Element): AttributeValueIntegrityInfoContent {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let signer: asn1.OPTIONAL<Signer>;
    let aVIHash!: AVIHash;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "signer": (_el: asn1.ASN1Element): void => { signer = _decode_Signer(_el); },
        "aVIHash": (_el: asn1.ASN1Element): void => { aVIHash = _decode_AVIHash(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeValueIntegrityInfoContent,
        _extension_additions_list_spec_for_AttributeValueIntegrityInfoContent,
        _root_component_type_list_2_spec_for_AttributeValueIntegrityInfoContent,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AttributeValueIntegrityInfoContent( /* SEQUENCE_CONSTRUCTOR_CALL */
        signer,
        aVIHash,
        _unrecognizedExtensionsList
    );
};
export const _encode_AttributeValueIntegrityInfoContent = function (value: AttributeValueIntegrityInfoContent, elGetter: __utils.ASN1Encoder<AttributeValueIntegrityInfoContent>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.signer ? _encode_Signer(value.signer, __utils.BER) : undefined),
            _encode_AVIHash(value.aVIHash, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type AttributeValueIntegrityInfo = SIGNED<AttributeValueIntegrityInfoContent>; // DefinedType
export const _decode_AttributeValueIntegrityInfo = _get_decoder_for_SIGNED<AttributeValueIntegrityInfoContent>(_decode_AttributeValueIntegrityInfoContent);
export const _encode_AttributeValueIntegrityInfo = _get_encoder_for_SIGNED<AttributeValueIntegrityInfoContent>(_encode_AttributeValueIntegrityInfoContent);


export const id_oc_integrityInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    40,
], id_oc);

export const id_at_clearance: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    55,
], id_at);

export const id_at_attributeIntegrityInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    57,
], id_at);

export const id_avc_attributeValueSecurityLabelContext: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_avc);

export const id_avc_attributeValueIntegrityInfoContext: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_avc);

/* END_MODULE EnhancedSecurity */
