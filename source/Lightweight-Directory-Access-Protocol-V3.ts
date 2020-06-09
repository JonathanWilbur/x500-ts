
/*
    BEGIN_MODULE Lightweight-Directory-Access-Protocol-V3
    OID: 1.3.6.1.1.18
    IRI: undefined
    EXTENSIBLE: true
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


export type MessageID = asn1.INTEGER;
export const _decode_MessageID = __utils._decodeInteger;
export const _encode_MessageID = __utils._encodeInteger;


export type LDAPString = asn1.OCTET_STRING; // OctetStringType
export const _decode_LDAPString = __utils._decodeOctetString;
export const _encode_LDAPString = __utils._encodeOctetString;


export type LDAPDN = LDAPString; // DefinedType
export const _decode_LDAPDN = _decode_LDAPString;
export const _encode_LDAPDN = _encode_LDAPString;


export class SaslCredentials {
    constructor (
        readonly mechanism: LDAPString,
        readonly credentials: asn1.OCTET_STRING | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_SaslCredentials: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("mechanism", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("credentials", true, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SaslCredentials: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_SaslCredentials: __utils.ComponentSpec[] = [

];

export const _decode_SaslCredentials = function (el: asn1.ASN1Element): SaslCredentials {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let mechanism!: LDAPString;
    let credentials: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "mechanism": (_el: asn1.ASN1Element): void => { mechanism = _decode_LDAPString(_el); },
        "credentials": (_el: asn1.ASN1Element): void => { credentials = __utils._decodeOctetString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SaslCredentials,
        _extension_additions_list_spec_for_SaslCredentials,
        _root_component_type_list_2_spec_for_SaslCredentials,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SaslCredentials( /* SEQUENCE_CONSTRUCTOR_CALL */
        mechanism,
        credentials,
        _unrecognizedExtensionsList
    );
};
export const _encode_SaslCredentials = function (value: SaslCredentials, elGetter: __utils.ASN1Encoder<SaslCredentials>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LDAPString(value.mechanism, __utils.BER),
            /* IF_ABSENT  */ ((value.credentials === undefined) ? undefined : __utils._encodeOctetString(value.credentials, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type AuthenticationChoice =
    { simple: asn1.OCTET_STRING }
    | { sasl: SaslCredentials }
    | asn1.ASN1Element;
export const _decode_AuthenticationChoice = __utils._decode_extensible_choice<AuthenticationChoice>({
    "CONTEXT 0": [ "simple", __utils._decode_implicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString) ],
    "CONTEXT 3": [ "sasl", __utils._decode_implicit<SaslCredentials>(() => _decode_SaslCredentials) ]
});
export const _encode_AuthenticationChoice = __utils._encode_choice<AuthenticationChoice>({
    "simple": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeOctetString, __utils.BER),
    "sasl": __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_SaslCredentials, __utils.BER),
}, __utils.BER);


export class BindRequest {
    constructor (
        readonly version: asn1.INTEGER,
        readonly name: LDAPDN,
        readonly authentication: AuthenticationChoice,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_BindRequest: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("name", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("authentication", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_BindRequest: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_BindRequest: __utils.ComponentSpec[] = [

];

export const _decode_BindRequest = __utils._decode_implicit<BindRequest>(() => function (el: asn1.ASN1Element): BindRequest {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError("BindRequest contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "version";
    sequence[1].name = "name";
    sequence[2].name = "authentication";
    let version!: asn1.INTEGER;
    let name!: LDAPDN;
    let authentication!: AuthenticationChoice;
    version = __utils._decodeInteger(sequence[0]);
    name = _decode_LDAPDN(sequence[1]);
    authentication = _decode_AuthenticationChoice(sequence[2]);
    // TODO: Validate values.
    return new BindRequest(
        version,
        name,
        authentication,
        sequence.slice(3),
    );
});
export const _encode_BindRequest = __utils._encode_implicit(asn1.ASN1TagClass.application, 0, () => function (value: BindRequest, elGetter: __utils.ASN1Encoder<BindRequest>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeInteger(value.version, __utils.BER),
            /* REQUIRED   */ _encode_LDAPDN(value.name, __utils.BER),
            /* REQUIRED   */ _encode_AuthenticationChoice(value.authentication, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type LDAPResult_resultCode = asn1.ENUMERATED;
export const LDAPResult_resultCode_success: LDAPResult_resultCode = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const success: LDAPResult_resultCode = LDAPResult_resultCode_success; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_operationsError: LDAPResult_resultCode = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const operationsError: LDAPResult_resultCode = LDAPResult_resultCode_operationsError; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_protocolError: LDAPResult_resultCode = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const protocolError: LDAPResult_resultCode = LDAPResult_resultCode_protocolError; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_timeLimitExceeded: LDAPResult_resultCode = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const timeLimitExceeded: LDAPResult_resultCode = LDAPResult_resultCode_timeLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_sizeLimitExceeded: LDAPResult_resultCode = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const sizeLimitExceeded: LDAPResult_resultCode = LDAPResult_resultCode_sizeLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_compareFalse: LDAPResult_resultCode = 5; /* LONG_NAMED_ENUMERATED_VALUE */
export const compareFalse: LDAPResult_resultCode = LDAPResult_resultCode_compareFalse; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_compareTrue: LDAPResult_resultCode = 6; /* LONG_NAMED_ENUMERATED_VALUE */
export const compareTrue: LDAPResult_resultCode = LDAPResult_resultCode_compareTrue; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_authMethodNotSupported: LDAPResult_resultCode = 7; /* LONG_NAMED_ENUMERATED_VALUE */
export const authMethodNotSupported: LDAPResult_resultCode = LDAPResult_resultCode_authMethodNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_strongerAuthRequired: LDAPResult_resultCode = 8; /* LONG_NAMED_ENUMERATED_VALUE */
export const strongerAuthRequired: LDAPResult_resultCode = LDAPResult_resultCode_strongerAuthRequired; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_referral: LDAPResult_resultCode = 10; /* LONG_NAMED_ENUMERATED_VALUE */
export const referral: LDAPResult_resultCode = LDAPResult_resultCode_referral; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_adminLimitExceeded: LDAPResult_resultCode = 11; /* LONG_NAMED_ENUMERATED_VALUE */
export const adminLimitExceeded: LDAPResult_resultCode = LDAPResult_resultCode_adminLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_unavailableCriticalExtension: LDAPResult_resultCode = 12; /* LONG_NAMED_ENUMERATED_VALUE */
export const unavailableCriticalExtension: LDAPResult_resultCode = LDAPResult_resultCode_unavailableCriticalExtension; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_confidentialityRequired: LDAPResult_resultCode = 13; /* LONG_NAMED_ENUMERATED_VALUE */
export const confidentialityRequired: LDAPResult_resultCode = LDAPResult_resultCode_confidentialityRequired; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_saslBindInProgress: LDAPResult_resultCode = 14; /* LONG_NAMED_ENUMERATED_VALUE */
export const saslBindInProgress: LDAPResult_resultCode = LDAPResult_resultCode_saslBindInProgress; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_noSuchAttribute: LDAPResult_resultCode = 16; /* LONG_NAMED_ENUMERATED_VALUE */
export const noSuchAttribute: LDAPResult_resultCode = LDAPResult_resultCode_noSuchAttribute; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_undefinedAttributeType: LDAPResult_resultCode = 17; /* LONG_NAMED_ENUMERATED_VALUE */
export const undefinedAttributeType: LDAPResult_resultCode = LDAPResult_resultCode_undefinedAttributeType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_inappropriateMatching: LDAPResult_resultCode = 18; /* LONG_NAMED_ENUMERATED_VALUE */
export const inappropriateMatching: LDAPResult_resultCode = LDAPResult_resultCode_inappropriateMatching; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_constraintViolation: LDAPResult_resultCode = 19; /* LONG_NAMED_ENUMERATED_VALUE */
export const constraintViolation: LDAPResult_resultCode = LDAPResult_resultCode_constraintViolation; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_attributeOrValueExists: LDAPResult_resultCode = 20; /* LONG_NAMED_ENUMERATED_VALUE */
export const attributeOrValueExists: LDAPResult_resultCode = LDAPResult_resultCode_attributeOrValueExists; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_invalidAttributeSyntax: LDAPResult_resultCode = 21; /* LONG_NAMED_ENUMERATED_VALUE */
export const invalidAttributeSyntax: LDAPResult_resultCode = LDAPResult_resultCode_invalidAttributeSyntax; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_noSuchObject: LDAPResult_resultCode = 32; /* LONG_NAMED_ENUMERATED_VALUE */
export const noSuchObject: LDAPResult_resultCode = LDAPResult_resultCode_noSuchObject; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_aliasProblem: LDAPResult_resultCode = 33; /* LONG_NAMED_ENUMERATED_VALUE */
export const aliasProblem: LDAPResult_resultCode = LDAPResult_resultCode_aliasProblem; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_invalidDNSyntax: LDAPResult_resultCode = 34; /* LONG_NAMED_ENUMERATED_VALUE */
export const invalidDNSyntax: LDAPResult_resultCode = LDAPResult_resultCode_invalidDNSyntax; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_aliasDereferencingProblem: LDAPResult_resultCode = 36; /* LONG_NAMED_ENUMERATED_VALUE */
export const aliasDereferencingProblem: LDAPResult_resultCode = LDAPResult_resultCode_aliasDereferencingProblem; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_inappropriateAuthentication: LDAPResult_resultCode = 48; /* LONG_NAMED_ENUMERATED_VALUE */
export const inappropriateAuthentication: LDAPResult_resultCode = LDAPResult_resultCode_inappropriateAuthentication; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_invalidCredentials: LDAPResult_resultCode = 49; /* LONG_NAMED_ENUMERATED_VALUE */
export const invalidCredentials: LDAPResult_resultCode = LDAPResult_resultCode_invalidCredentials; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_insufficientAccessRights: LDAPResult_resultCode = 50; /* LONG_NAMED_ENUMERATED_VALUE */
export const insufficientAccessRights: LDAPResult_resultCode = LDAPResult_resultCode_insufficientAccessRights; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_busy: LDAPResult_resultCode = 51; /* LONG_NAMED_ENUMERATED_VALUE */
export const busy: LDAPResult_resultCode = LDAPResult_resultCode_busy; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_unavailable: LDAPResult_resultCode = 52; /* LONG_NAMED_ENUMERATED_VALUE */
export const unavailable: LDAPResult_resultCode = LDAPResult_resultCode_unavailable; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_unwillingToPerform: LDAPResult_resultCode = 53; /* LONG_NAMED_ENUMERATED_VALUE */
export const unwillingToPerform: LDAPResult_resultCode = LDAPResult_resultCode_unwillingToPerform; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_loopDetect: LDAPResult_resultCode = 54; /* LONG_NAMED_ENUMERATED_VALUE */
export const loopDetect: LDAPResult_resultCode = LDAPResult_resultCode_loopDetect; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_namingViolation: LDAPResult_resultCode = 64; /* LONG_NAMED_ENUMERATED_VALUE */
export const namingViolation: LDAPResult_resultCode = LDAPResult_resultCode_namingViolation; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_objectClassViolation: LDAPResult_resultCode = 65; /* LONG_NAMED_ENUMERATED_VALUE */
export const objectClassViolation: LDAPResult_resultCode = LDAPResult_resultCode_objectClassViolation; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_notAllowedOnNonLeaf: LDAPResult_resultCode = 66; /* LONG_NAMED_ENUMERATED_VALUE */
export const notAllowedOnNonLeaf: LDAPResult_resultCode = LDAPResult_resultCode_notAllowedOnNonLeaf; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_notAllowedOnRDN: LDAPResult_resultCode = 67; /* LONG_NAMED_ENUMERATED_VALUE */
export const notAllowedOnRDN: LDAPResult_resultCode = LDAPResult_resultCode_notAllowedOnRDN; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_entryAlreadyExists: LDAPResult_resultCode = 68; /* LONG_NAMED_ENUMERATED_VALUE */
export const entryAlreadyExists: LDAPResult_resultCode = LDAPResult_resultCode_entryAlreadyExists; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_objectClassModsProhibited: LDAPResult_resultCode = 69; /* LONG_NAMED_ENUMERATED_VALUE */
export const objectClassModsProhibited: LDAPResult_resultCode = LDAPResult_resultCode_objectClassModsProhibited; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_affectsMultipleDSAs: LDAPResult_resultCode = 71; /* LONG_NAMED_ENUMERATED_VALUE */
export const affectsMultipleDSAs: LDAPResult_resultCode = LDAPResult_resultCode_affectsMultipleDSAs; /* SHORT_NAMED_ENUMERATED_VALUE */
export const LDAPResult_resultCode_other: LDAPResult_resultCode = 80; /* LONG_NAMED_ENUMERATED_VALUE */
export const other: LDAPResult_resultCode = LDAPResult_resultCode_other; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_LDAPResult_resultCode = __utils._decodeEnumerated;
export const _encode_LDAPResult_resultCode = __utils._encodeEnumerated;


export type URI = LDAPString; // DefinedType
export const _decode_URI = _decode_LDAPString;
export const _encode_URI = _encode_LDAPString;


export type Referral = URI[]; // SequenceOfType
export const _decode_Referral = __utils._decodeSequenceOf<URI>(() => _decode_URI);
export const _encode_Referral = __utils._encodeSequenceOf<URI>(() => _encode_URI, __utils.BER);


export class LDAPResult {
    constructor (
        readonly resultCode: LDAPResult_resultCode,
        readonly matchedDN: LDAPDN,
        readonly diagnosticMessage: LDAPString,
        readonly referral: Referral | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_LDAPResult: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("resultCode", false, __utils.hasTag(asn1.ASN1TagClass.universal, 10), undefined, undefined),
    new __utils.ComponentSpec("matchedDN", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("diagnosticMessage", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("referral", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_LDAPResult: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_LDAPResult: __utils.ComponentSpec[] = [

];

export const _decode_LDAPResult = function (el: asn1.ASN1Element): LDAPResult {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let resultCode!: LDAPResult_resultCode;
    let matchedDN!: LDAPDN;
    let diagnosticMessage!: LDAPString;
    let referral: asn1.OPTIONAL<Referral>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "resultCode": (_el: asn1.ASN1Element): void => { resultCode = _decode_LDAPResult_resultCode(_el); },
        "matchedDN": (_el: asn1.ASN1Element): void => { matchedDN = _decode_LDAPDN(_el); },
        "diagnosticMessage": (_el: asn1.ASN1Element): void => { diagnosticMessage = _decode_LDAPString(_el); },
        "referral": (_el: asn1.ASN1Element): void => { referral = __utils._decode_implicit<Referral>(() => _decode_Referral)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LDAPResult,
        _extension_additions_list_spec_for_LDAPResult,
        _root_component_type_list_2_spec_for_LDAPResult,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LDAPResult( /* SEQUENCE_CONSTRUCTOR_CALL */
        resultCode,
        matchedDN,
        diagnosticMessage,
        referral,
        _unrecognizedExtensionsList
    );
};
export const _encode_LDAPResult = function (value: LDAPResult, elGetter: __utils.ASN1Encoder<LDAPResult>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LDAPResult_resultCode(value.resultCode, __utils.BER),
            /* REQUIRED   */ _encode_LDAPDN(value.matchedDN, __utils.BER),
            /* REQUIRED   */ _encode_LDAPString(value.diagnosticMessage, __utils.BER),
            /* IF_ABSENT  */ ((value.referral === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_Referral, __utils.BER)(value.referral, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class BindResponse {
    constructor (
        // readonly _componentsOf_LDAPResult: LDAPResult,
        readonly resultCode: LDAPResult_resultCode,
        readonly matchedDN: LDAPDN,
        readonly diagnosticMessage: LDAPString,
        readonly referral: Referral | undefined,
        readonly serverSaslCreds: asn1.OCTET_STRING | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_BindResponse: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("resultCode", false, __utils.hasTag(asn1.ASN1TagClass.universal, 10), undefined, undefined),
    new __utils.ComponentSpec("matchedDN", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("diagnosticMessage", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("referral", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("serverSaslCreds", true, __utils.hasTag(asn1.ASN1TagClass.context, 7), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_BindResponse: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_BindResponse: __utils.ComponentSpec[] = [

];

export const _decode_BindResponse = __utils._decode_implicit<BindResponse>(() => function (el: asn1.ASN1Element): BindResponse {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let resultCode!: LDAPResult_resultCode;
    let matchedDN!: LDAPDN;
    let diagnosticMessage!: LDAPString;
    let referral: Referral | undefined;
    let serverSaslCreds: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "resultCode": (_el: asn1.ASN1Element): void => { resultCode = _decode_LDAPResult_resultCode(_el); },
        "matchedDN": (_el: asn1.ASN1Element): void => { matchedDN = _decode_LDAPDN(_el); },
        "diagnosticMessage": (_el: asn1.ASN1Element): void => { diagnosticMessage = _decode_LDAPString(_el); },
        "referral": (_el: asn1.ASN1Element): void => { referral = _decode_Referral(_el); },
        "serverSaslCreds": (_el: asn1.ASN1Element): void => { serverSaslCreds = __utils._decode_implicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BindResponse,
        _extension_additions_list_spec_for_BindResponse,
        _root_component_type_list_2_spec_for_BindResponse,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new BindResponse( /* SEQUENCE_CONSTRUCTOR_CALL */
        resultCode,
        matchedDN,
        diagnosticMessage,
        referral,
        serverSaslCreds,
        _unrecognizedExtensionsList
    );
});
export const _encode_BindResponse = __utils._encode_implicit(asn1.ASN1TagClass.application, 1, () => function (value: BindResponse, elGetter: __utils.ASN1Encoder<BindResponse>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */,
            /* IF_ABSENT  */ ((value.serverSaslCreds === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 7, () => __utils._encodeOctetString, __utils.BER)(value.serverSaslCreds, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type UnbindRequest = asn1.NULL; // NullType
export const _decode_UnbindRequest = __utils._decode_implicit<UnbindRequest>(() => __utils._decodeNull);
export const _encode_UnbindRequest = __utils._encode_implicit(asn1.ASN1TagClass.application, 2, () => __utils._encodeNull, __utils.BER);


export type SearchRequest_scope = asn1.ENUMERATED;
export const SearchRequest_scope_baseObject: SearchRequest_scope = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const baseObject: SearchRequest_scope = SearchRequest_scope_baseObject; /* SHORT_NAMED_ENUMERATED_VALUE */
export const SearchRequest_scope_singleLevel: SearchRequest_scope = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const singleLevel: SearchRequest_scope = SearchRequest_scope_singleLevel; /* SHORT_NAMED_ENUMERATED_VALUE */
export const SearchRequest_scope_wholeSubtree: SearchRequest_scope = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const wholeSubtree: SearchRequest_scope = SearchRequest_scope_wholeSubtree; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SearchRequest_scope = __utils._decodeEnumerated;
export const _encode_SearchRequest_scope = __utils._encodeEnumerated;


export type SearchRequest_derefAliases = asn1.ENUMERATED;
export const SearchRequest_derefAliases_neverDerefAliases: SearchRequest_derefAliases = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const neverDerefAliases: SearchRequest_derefAliases = SearchRequest_derefAliases_neverDerefAliases; /* SHORT_NAMED_ENUMERATED_VALUE */
export const SearchRequest_derefAliases_derefInSearching: SearchRequest_derefAliases = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const derefInSearching: SearchRequest_derefAliases = SearchRequest_derefAliases_derefInSearching; /* SHORT_NAMED_ENUMERATED_VALUE */
export const SearchRequest_derefAliases_derefFindingBaseObj: SearchRequest_derefAliases = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const derefFindingBaseObj: SearchRequest_derefAliases = SearchRequest_derefAliases_derefFindingBaseObj; /* SHORT_NAMED_ENUMERATED_VALUE */
export const SearchRequest_derefAliases_derefAlways: SearchRequest_derefAliases = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const derefAlways: SearchRequest_derefAliases = SearchRequest_derefAliases_derefAlways; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SearchRequest_derefAliases = __utils._decodeEnumerated;
export const _encode_SearchRequest_derefAliases = __utils._encodeEnumerated;


export type AttributeDescription = LDAPString; // DefinedType
export const _decode_AttributeDescription = _decode_LDAPString;
export const _encode_AttributeDescription = _encode_LDAPString;


export type AssertionValue = asn1.OCTET_STRING; // OctetStringType
export const _decode_AssertionValue = __utils._decodeOctetString;
export const _encode_AssertionValue = __utils._encodeOctetString;


export class AttributeValueAssertion {
    constructor (
        readonly attributeDesc: AttributeDescription,
        readonly assertionValue: AssertionValue,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeValueAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("attributeDesc", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("assertionValue", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AttributeValueAssertion: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_AttributeValueAssertion: __utils.ComponentSpec[] = [

];

export const _decode_AttributeValueAssertion = function (el: asn1.ASN1Element): AttributeValueAssertion {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("AttributeValueAssertion contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "attributeDesc";
    sequence[1].name = "assertionValue";
    let attributeDesc!: AttributeDescription;
    let assertionValue!: AssertionValue;
    attributeDesc = _decode_AttributeDescription(sequence[0]);
    assertionValue = _decode_AssertionValue(sequence[1]);
    // TODO: Validate values.
    return new AttributeValueAssertion(
        attributeDesc,
        assertionValue,
        sequence.slice(2),
    );
};
export const _encode_AttributeValueAssertion = function (value: AttributeValueAssertion, elGetter: __utils.ASN1Encoder<AttributeValueAssertion>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AttributeDescription(value.attributeDesc, __utils.BER),
            /* REQUIRED   */ _encode_AssertionValue(value.assertionValue, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type SubstringFilter_substrings_substring =
    { initial: AssertionValue }
    | { any_: AssertionValue }
    | { final: AssertionValue }
    | asn1.ASN1Element;
export const _decode_SubstringFilter_substrings_substring = __utils._decode_extensible_choice<SubstringFilter_substrings_substring>({
    "CONTEXT 0": [ "initial", __utils._decode_implicit<AssertionValue>(() => _decode_AssertionValue) ],
    "CONTEXT 1": [ "any_", __utils._decode_implicit<AssertionValue>(() => _decode_AssertionValue) ],
    "CONTEXT 2": [ "final", __utils._decode_implicit<AssertionValue>(() => _decode_AssertionValue) ]
});
export const _encode_SubstringFilter_substrings_substring = __utils._encode_choice<SubstringFilter_substrings_substring>({
    "initial": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_AssertionValue, __utils.BER),
    "any_": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_AssertionValue, __utils.BER),
    "final": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_AssertionValue, __utils.BER),
}, __utils.BER);


export class SubstringFilter {
    constructor (
        readonly type_: AttributeDescription,
        readonly substrings: SubstringFilter_substrings_substring[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_SubstringFilter: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("type", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("substrings", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SubstringFilter: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_SubstringFilter: __utils.ComponentSpec[] = [

];

export const _decode_SubstringFilter = function (el: asn1.ASN1Element): SubstringFilter {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("SubstringFilter contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "type";
    sequence[1].name = "substrings";
    let type_!: AttributeDescription;
    let substrings!: SubstringFilter_substrings_substring[];
    type_ = _decode_AttributeDescription(sequence[0]);
    substrings = __utils._decodeSequenceOf<SubstringFilter_substrings_substring>(() => _decode_SubstringFilter_substrings_substring)(sequence[1]);
    // TODO: Validate values.
    return new SubstringFilter(
        type_,
        substrings,
        sequence.slice(2),
    );
};
export const _encode_SubstringFilter = function (value: SubstringFilter, elGetter: __utils.ASN1Encoder<SubstringFilter>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AttributeDescription(value.type_, __utils.BER),
            /* REQUIRED   */ __utils._encodeSequenceOf<SubstringFilter_substrings_substring>(() => _encode_SubstringFilter_substrings_substring, __utils.BER)(value.substrings, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type MatchingRuleId = LDAPString; // DefinedType
export const _decode_MatchingRuleId = _decode_LDAPString;
export const _encode_MatchingRuleId = _encode_LDAPString;


export class MatchingRuleAssertion {
    constructor (
        readonly matchingRule: MatchingRuleId | undefined,
        readonly type_: AttributeDescription | undefined,
        readonly matchValue: AssertionValue,
        readonly dnAttributes: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_MatchingRuleAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("matchingRule", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("type", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("matchValue", false, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("dnAttributes", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_MatchingRuleAssertion: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_MatchingRuleAssertion: __utils.ComponentSpec[] = [

];
export const _default_value_for_MatchingRuleAssertion__dnAttributes = false;
export const _decode_MatchingRuleAssertion = function (el: asn1.ASN1Element): MatchingRuleAssertion {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let matchingRule: asn1.OPTIONAL<MatchingRuleId>;
    let type_: asn1.OPTIONAL<AttributeDescription>;
    let matchValue!: AssertionValue;
    let dnAttributes: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_MatchingRuleAssertion__dnAttributes;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "matchingRule": (_el: asn1.ASN1Element): void => { matchingRule = __utils._decode_implicit<MatchingRuleId>(() => _decode_MatchingRuleId)(_el); },
        "type": (_el: asn1.ASN1Element): void => { type_ = __utils._decode_implicit<AttributeDescription>(() => _decode_AttributeDescription)(_el); },
        "matchValue": (_el: asn1.ASN1Element): void => { matchValue = __utils._decode_implicit<AssertionValue>(() => _decode_AssertionValue)(_el); },
        "dnAttributes": (_el: asn1.ASN1Element): void => { dnAttributes = __utils._decode_implicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MatchingRuleAssertion,
        _extension_additions_list_spec_for_MatchingRuleAssertion,
        _root_component_type_list_2_spec_for_MatchingRuleAssertion,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MatchingRuleAssertion( /* SEQUENCE_CONSTRUCTOR_CALL */
        matchingRule,
        type_,
        matchValue,
        dnAttributes,
        _unrecognizedExtensionsList
    );
};
export const _encode_MatchingRuleAssertion = function (value: MatchingRuleAssertion, elGetter: __utils.ASN1Encoder<MatchingRuleAssertion>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.matchingRule === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_MatchingRuleId, __utils.BER)(value.matchingRule, __utils.BER)),
            /* IF_ABSENT  */ ((value.type_ === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_AttributeDescription, __utils.BER)(value.type_, __utils.BER)),
            /* REQUIRED   */ __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_AssertionValue, __utils.BER)(value.matchValue, __utils.BER),
            /* IF_DEFAULT */ (value.dnAttributes === undefined || __utils.deepEq(value.dnAttributes, _default_value_for_MatchingRuleAssertion__dnAttributes) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => __utils._encodeBoolean, __utils.BER)(value.dnAttributes, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


/* TODO: CHECK_RECURSIVE_DEFINITION */
export type Filter =
    { and: Filter[] }
    | { or: Filter[] }
    | { not: Filter }
    | { equalityMatch: AttributeValueAssertion }
    | { substrings: SubstringFilter }
    | { greaterOrEqual: AttributeValueAssertion }
    | { lessOrEqual: AttributeValueAssertion }
    | { present: AttributeDescription }
    | { approxMatch: AttributeValueAssertion }
    | { extensibleMatch: MatchingRuleAssertion }
    | asn1.ASN1Element;
export const _decode_Filter = __utils._decode_extensible_choice<Filter>({
    "CONTEXT 0": [ "and", __utils._decode_implicit<Filter[]>(() => __utils._decodeSetOf<Filter>(() => _decode_Filter)) ],
    "CONTEXT 1": [ "or", __utils._decode_implicit<Filter[]>(() => __utils._decodeSetOf<Filter>(() => _decode_Filter)) ],
    "CONTEXT 2": [ "not", __utils._decode_implicit<Filter>(() => _decode_Filter) ],
    "CONTEXT 3": [ "equalityMatch", __utils._decode_implicit<AttributeValueAssertion>(() => _decode_AttributeValueAssertion) ],
    "CONTEXT 4": [ "substrings", __utils._decode_implicit<SubstringFilter>(() => _decode_SubstringFilter) ],
    "CONTEXT 5": [ "greaterOrEqual", __utils._decode_implicit<AttributeValueAssertion>(() => _decode_AttributeValueAssertion) ],
    "CONTEXT 6": [ "lessOrEqual", __utils._decode_implicit<AttributeValueAssertion>(() => _decode_AttributeValueAssertion) ],
    "CONTEXT 7": [ "present", __utils._decode_implicit<AttributeDescription>(() => _decode_AttributeDescription) ],
    "CONTEXT 8": [ "approxMatch", __utils._decode_implicit<AttributeValueAssertion>(() => _decode_AttributeValueAssertion) ],
    "CONTEXT 9": [ "extensibleMatch", __utils._decode_implicit<MatchingRuleAssertion>(() => _decode_MatchingRuleAssertion) ]
});
export const _encode_Filter = __utils._encode_choice<Filter>({
    "and": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeSetOf<Filter>(() => _encode_Filter, __utils.BER), __utils.BER),
    "or": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeSetOf<Filter>(() => _encode_Filter, __utils.BER), __utils.BER),
    "not": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_Filter, __utils.BER),
    "equalityMatch": __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_AttributeValueAssertion, __utils.BER),
    "substrings": __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => _encode_SubstringFilter, __utils.BER),
    "greaterOrEqual": __utils._encode_implicit(asn1.ASN1TagClass.context, 5, () => _encode_AttributeValueAssertion, __utils.BER),
    "lessOrEqual": __utils._encode_implicit(asn1.ASN1TagClass.context, 6, () => _encode_AttributeValueAssertion, __utils.BER),
    "present": __utils._encode_implicit(asn1.ASN1TagClass.context, 7, () => _encode_AttributeDescription, __utils.BER),
    "approxMatch": __utils._encode_implicit(asn1.ASN1TagClass.context, 8, () => _encode_AttributeValueAssertion, __utils.BER),
    "extensibleMatch": __utils._encode_implicit(asn1.ASN1TagClass.context, 9, () => _encode_MatchingRuleAssertion, __utils.BER),
}, __utils.BER);


export type AttributeSelection = LDAPString[]; // SequenceOfType
export const _decode_AttributeSelection = __utils._decodeSequenceOf<LDAPString>(() => _decode_LDAPString);
export const _encode_AttributeSelection = __utils._encodeSequenceOf<LDAPString>(() => _encode_LDAPString, __utils.BER);


export class SearchRequest {
    constructor (
        readonly baseObject: LDAPDN,
        readonly scope: SearchRequest_scope,
        readonly derefAliases: SearchRequest_derefAliases,
        readonly sizeLimit: asn1.INTEGER,
        readonly timeLimit: asn1.INTEGER,
        readonly typesOnly: asn1.BOOLEAN,
        readonly filter: Filter,
        readonly attributes: AttributeSelection,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_SearchRequest: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("baseObject", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("scope", false, __utils.hasTag(asn1.ASN1TagClass.universal, 10), undefined, undefined),
    new __utils.ComponentSpec("derefAliases", false, __utils.hasTag(asn1.ASN1TagClass.universal, 10), undefined, undefined),
    new __utils.ComponentSpec("sizeLimit", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("timeLimit", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("typesOnly", false, __utils.hasTag(asn1.ASN1TagClass.universal, 1), undefined, undefined),
    new __utils.ComponentSpec("filter", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("attributes", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SearchRequest: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_SearchRequest: __utils.ComponentSpec[] = [

];

export const _decode_SearchRequest = __utils._decode_implicit<SearchRequest>(() => function (el: asn1.ASN1Element): SearchRequest {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 8) {
        throw new asn1.ASN1ConstructionError("SearchRequest contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "baseObject";
    sequence[1].name = "scope";
    sequence[2].name = "derefAliases";
    sequence[3].name = "sizeLimit";
    sequence[4].name = "timeLimit";
    sequence[5].name = "typesOnly";
    sequence[6].name = "filter";
    sequence[7].name = "attributes";
    let baseObject!: LDAPDN;
    let scope!: SearchRequest_scope;
    let derefAliases!: SearchRequest_derefAliases;
    let sizeLimit!: asn1.INTEGER;
    let timeLimit!: asn1.INTEGER;
    let typesOnly!: asn1.BOOLEAN;
    let filter!: Filter;
    let attributes!: AttributeSelection;
    baseObject = _decode_LDAPDN(sequence[0]);
    scope = _decode_SearchRequest_scope(sequence[1]);
    derefAliases = _decode_SearchRequest_derefAliases(sequence[2]);
    sizeLimit = __utils._decodeInteger(sequence[3]);
    timeLimit = __utils._decodeInteger(sequence[4]);
    typesOnly = __utils._decodeBoolean(sequence[5]);
    filter = _decode_Filter(sequence[6]);
    attributes = _decode_AttributeSelection(sequence[7]);
    // TODO: Validate values.
    return new SearchRequest(
        baseObject,
        scope,
        derefAliases,
        sizeLimit,
        timeLimit,
        typesOnly,
        filter,
        attributes,
        sequence.slice(8),
    );
});
export const _encode_SearchRequest = __utils._encode_implicit(asn1.ASN1TagClass.application, 3, () => function (value: SearchRequest, elGetter: __utils.ASN1Encoder<SearchRequest>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LDAPDN(value.baseObject, __utils.BER),
            /* REQUIRED   */ _encode_SearchRequest_scope(value.scope, __utils.BER),
            /* REQUIRED   */ _encode_SearchRequest_derefAliases(value.derefAliases, __utils.BER),
            /* REQUIRED   */ __utils._encodeInteger(value.sizeLimit, __utils.BER),
            /* REQUIRED   */ __utils._encodeInteger(value.timeLimit, __utils.BER),
            /* REQUIRED   */ __utils._encodeBoolean(value.typesOnly, __utils.BER),
            /* REQUIRED   */ _encode_Filter(value.filter, __utils.BER),
            /* REQUIRED   */ _encode_AttributeSelection(value.attributes, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type AttributeValue = asn1.OCTET_STRING; // OctetStringType
export const _decode_AttributeValue = __utils._decodeOctetString;
export const _encode_AttributeValue = __utils._encodeOctetString;


export class PartialAttribute {
    constructor (
        readonly type_: AttributeDescription,
        readonly vals: AttributeValue[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PartialAttribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("type", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("vals", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PartialAttribute: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_PartialAttribute: __utils.ComponentSpec[] = [

];

export const _decode_PartialAttribute = function (el: asn1.ASN1Element): PartialAttribute {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("PartialAttribute contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "type";
    sequence[1].name = "vals";
    let type_!: AttributeDescription;
    let vals!: AttributeValue[];
    type_ = _decode_AttributeDescription(sequence[0]);
    vals = __utils._decodeSetOf<AttributeValue>(() => _decode_AttributeValue)(sequence[1]);
    // TODO: Validate values.
    return new PartialAttribute(
        type_,
        vals,
        sequence.slice(2),
    );
};
export const _encode_PartialAttribute = function (value: PartialAttribute, elGetter: __utils.ASN1Encoder<PartialAttribute>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AttributeDescription(value.type_, __utils.BER),
            /* REQUIRED   */ __utils._encodeSetOf<AttributeValue>(() => _encode_AttributeValue, __utils.BER)(value.vals, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type PartialAttributeList = PartialAttribute[]; // SequenceOfType
export const _decode_PartialAttributeList = __utils._decodeSequenceOf<PartialAttribute>(() => _decode_PartialAttribute);
export const _encode_PartialAttributeList = __utils._encodeSequenceOf<PartialAttribute>(() => _encode_PartialAttribute, __utils.BER);


export class SearchResultEntry {
    constructor (
        readonly objectName: LDAPDN,
        readonly attributes: PartialAttributeList,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_SearchResultEntry: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("objectName", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("attributes", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SearchResultEntry: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_SearchResultEntry: __utils.ComponentSpec[] = [

];

export const _decode_SearchResultEntry = __utils._decode_implicit<SearchResultEntry>(() => function (el: asn1.ASN1Element): SearchResultEntry {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("SearchResultEntry contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "objectName";
    sequence[1].name = "attributes";
    let objectName!: LDAPDN;
    let attributes!: PartialAttributeList;
    objectName = _decode_LDAPDN(sequence[0]);
    attributes = _decode_PartialAttributeList(sequence[1]);
    // TODO: Validate values.
    return new SearchResultEntry(
        objectName,
        attributes,
        sequence.slice(2),
    );
});
export const _encode_SearchResultEntry = __utils._encode_implicit(asn1.ASN1TagClass.application, 4, () => function (value: SearchResultEntry, elGetter: __utils.ASN1Encoder<SearchResultEntry>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LDAPDN(value.objectName, __utils.BER),
            /* REQUIRED   */ _encode_PartialAttributeList(value.attributes, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type SearchResultDone = LDAPResult; // DefinedType
export const _decode_SearchResultDone = __utils._decode_implicit<SearchResultDone>(() => _decode_LDAPResult);
export const _encode_SearchResultDone = __utils._encode_implicit(asn1.ASN1TagClass.application, 5, () => _encode_LDAPResult, __utils.BER);


export type SearchResultReference = URI[]; // SequenceOfType
export const _decode_SearchResultReference = __utils._decode_implicit<SearchResultReference>(() => __utils._decodeSequenceOf<URI>(() => _decode_URI));
export const _encode_SearchResultReference = __utils._encode_implicit(asn1.ASN1TagClass.application, 19, () => __utils._encodeSequenceOf<URI>(() => _encode_URI, __utils.BER), __utils.BER);


export type ModifyRequest_changes_change_operation = asn1.ENUMERATED;
export const ModifyRequest_changes_change_operation_add: ModifyRequest_changes_change_operation = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const add: ModifyRequest_changes_change_operation = ModifyRequest_changes_change_operation_add; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ModifyRequest_changes_change_operation_delete_: ModifyRequest_changes_change_operation = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const delete_: ModifyRequest_changes_change_operation = ModifyRequest_changes_change_operation_delete_; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ModifyRequest_changes_change_operation_replace: ModifyRequest_changes_change_operation = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const replace: ModifyRequest_changes_change_operation = ModifyRequest_changes_change_operation_replace; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ModifyRequest_changes_change_operation = __utils._decodeEnumerated;
export const _encode_ModifyRequest_changes_change_operation = __utils._encodeEnumerated;


export class ModifyRequest_changes_change {
    constructor (
        readonly operation: ModifyRequest_changes_change_operation,
        readonly modification: PartialAttribute,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ModifyRequest_changes_change: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("operation", false, __utils.hasTag(asn1.ASN1TagClass.universal, 10), undefined, undefined),
    new __utils.ComponentSpec("modification", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ModifyRequest_changes_change: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_ModifyRequest_changes_change: __utils.ComponentSpec[] = [

];

export const _decode_ModifyRequest_changes_change = function (el: asn1.ASN1Element): ModifyRequest_changes_change {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("ModifyRequest-changes-change contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "operation";
    sequence[1].name = "modification";
    let operation!: ModifyRequest_changes_change_operation;
    let modification!: PartialAttribute;
    operation = _decode_ModifyRequest_changes_change_operation(sequence[0]);
    modification = _decode_PartialAttribute(sequence[1]);
    // TODO: Validate values.
    return new ModifyRequest_changes_change(
        operation,
        modification,
        sequence.slice(2),
    );
};
export const _encode_ModifyRequest_changes_change = function (value: ModifyRequest_changes_change, elGetter: __utils.ASN1Encoder<ModifyRequest_changes_change>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ModifyRequest_changes_change_operation(value.operation, __utils.BER),
            /* REQUIRED   */ _encode_PartialAttribute(value.modification, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class ModifyRequest {
    constructor (
        readonly object: LDAPDN,
        readonly changes: ModifyRequest_changes_change[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ModifyRequest: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("object", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("changes", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ModifyRequest: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_ModifyRequest: __utils.ComponentSpec[] = [

];

export const _decode_ModifyRequest = __utils._decode_implicit<ModifyRequest>(() => function (el: asn1.ASN1Element): ModifyRequest {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("ModifyRequest contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "object";
    sequence[1].name = "changes";
    let object!: LDAPDN;
    let changes!: ModifyRequest_changes_change[];
    object = _decode_LDAPDN(sequence[0]);
    changes = __utils._decodeSequenceOf<ModifyRequest_changes_change>(() => _decode_ModifyRequest_changes_change)(sequence[1]);
    // TODO: Validate values.
    return new ModifyRequest(
        object,
        changes,
        sequence.slice(2),
    );
});
export const _encode_ModifyRequest = __utils._encode_implicit(asn1.ASN1TagClass.application, 6, () => function (value: ModifyRequest, elGetter: __utils.ASN1Encoder<ModifyRequest>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LDAPDN(value.object, __utils.BER),
            /* REQUIRED   */ __utils._encodeSequenceOf<ModifyRequest_changes_change>(() => _encode_ModifyRequest_changes_change, __utils.BER)(value.changes, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type ModifyResponse = LDAPResult; // DefinedType
export const _decode_ModifyResponse = __utils._decode_implicit<ModifyResponse>(() => _decode_LDAPResult);
export const _encode_ModifyResponse = __utils._encode_implicit(asn1.ASN1TagClass.application, 7, () => _encode_LDAPResult, __utils.BER);


export type Attribute = PartialAttribute; // DefinedType
export const _decode_Attribute = _decode_PartialAttribute;
export const _encode_Attribute = _encode_PartialAttribute;


export type AttributeList = Attribute[]; // SequenceOfType
export const _decode_AttributeList = __utils._decodeSequenceOf<Attribute>(() => _decode_Attribute);
export const _encode_AttributeList = __utils._encodeSequenceOf<Attribute>(() => _encode_Attribute, __utils.BER);


export class AddRequest {
    constructor (
        readonly entry: LDAPDN,
        readonly attributes: AttributeList,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AddRequest: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("entry", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("attributes", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AddRequest: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_AddRequest: __utils.ComponentSpec[] = [

];

export const _decode_AddRequest = __utils._decode_implicit<AddRequest>(() => function (el: asn1.ASN1Element): AddRequest {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("AddRequest contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "entry";
    sequence[1].name = "attributes";
    let entry!: LDAPDN;
    let attributes!: AttributeList;
    entry = _decode_LDAPDN(sequence[0]);
    attributes = _decode_AttributeList(sequence[1]);
    // TODO: Validate values.
    return new AddRequest(
        entry,
        attributes,
        sequence.slice(2),
    );
});
export const _encode_AddRequest = __utils._encode_implicit(asn1.ASN1TagClass.application, 8, () => function (value: AddRequest, elGetter: __utils.ASN1Encoder<AddRequest>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LDAPDN(value.entry, __utils.BER),
            /* REQUIRED   */ _encode_AttributeList(value.attributes, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type AddResponse = LDAPResult; // DefinedType
export const _decode_AddResponse = __utils._decode_implicit<AddResponse>(() => _decode_LDAPResult);
export const _encode_AddResponse = __utils._encode_implicit(asn1.ASN1TagClass.application, 9, () => _encode_LDAPResult, __utils.BER);


export type DelRequest = LDAPDN; // DefinedType
export const _decode_DelRequest = __utils._decode_implicit<DelRequest>(() => _decode_LDAPDN);
export const _encode_DelRequest = __utils._encode_implicit(asn1.ASN1TagClass.application, 10, () => _encode_LDAPDN, __utils.BER);


export type DelResponse = LDAPResult; // DefinedType
export const _decode_DelResponse = __utils._decode_implicit<DelResponse>(() => _decode_LDAPResult);
export const _encode_DelResponse = __utils._encode_implicit(asn1.ASN1TagClass.application, 11, () => _encode_LDAPResult, __utils.BER);


export type RelativeLDAPDN = LDAPString; // DefinedType
export const _decode_RelativeLDAPDN = _decode_LDAPString;
export const _encode_RelativeLDAPDN = _encode_LDAPString;


export class ModifyDNRequest {
    constructor (
        readonly entry: LDAPDN,
        readonly newrdn: RelativeLDAPDN,
        readonly deleteoldrdn: asn1.BOOLEAN,
        readonly newSuperior: LDAPDN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ModifyDNRequest: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("entry", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("newrdn", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("deleteoldrdn", false, __utils.hasTag(asn1.ASN1TagClass.universal, 1), undefined, undefined),
    new __utils.ComponentSpec("newSuperior", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ModifyDNRequest: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_ModifyDNRequest: __utils.ComponentSpec[] = [

];

export const _decode_ModifyDNRequest = __utils._decode_implicit<ModifyDNRequest>(() => function (el: asn1.ASN1Element): ModifyDNRequest {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let entry!: LDAPDN;
    let newrdn!: RelativeLDAPDN;
    let deleteoldrdn!: asn1.BOOLEAN;
    let newSuperior: asn1.OPTIONAL<LDAPDN>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "entry": (_el: asn1.ASN1Element): void => { entry = _decode_LDAPDN(_el); },
        "newrdn": (_el: asn1.ASN1Element): void => { newrdn = _decode_RelativeLDAPDN(_el); },
        "deleteoldrdn": (_el: asn1.ASN1Element): void => { deleteoldrdn = __utils._decodeBoolean(_el); },
        "newSuperior": (_el: asn1.ASN1Element): void => { newSuperior = __utils._decode_implicit<LDAPDN>(() => _decode_LDAPDN)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ModifyDNRequest,
        _extension_additions_list_spec_for_ModifyDNRequest,
        _root_component_type_list_2_spec_for_ModifyDNRequest,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ModifyDNRequest( /* SEQUENCE_CONSTRUCTOR_CALL */
        entry,
        newrdn,
        deleteoldrdn,
        newSuperior,
        _unrecognizedExtensionsList
    );
});
export const _encode_ModifyDNRequest = __utils._encode_implicit(asn1.ASN1TagClass.application, 12, () => function (value: ModifyDNRequest, elGetter: __utils.ASN1Encoder<ModifyDNRequest>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LDAPDN(value.entry, __utils.BER),
            /* REQUIRED   */ _encode_RelativeLDAPDN(value.newrdn, __utils.BER),
            /* REQUIRED   */ __utils._encodeBoolean(value.deleteoldrdn, __utils.BER),
            /* IF_ABSENT  */ ((value.newSuperior === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_LDAPDN, __utils.BER)(value.newSuperior, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type ModifyDNResponse = LDAPResult; // DefinedType
export const _decode_ModifyDNResponse = __utils._decode_implicit<ModifyDNResponse>(() => _decode_LDAPResult);
export const _encode_ModifyDNResponse = __utils._encode_implicit(asn1.ASN1TagClass.application, 13, () => _encode_LDAPResult, __utils.BER);


export class CompareRequest {
    constructor (
        readonly entry: LDAPDN,
        readonly ava: AttributeValueAssertion,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CompareRequest: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("entry", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("ava", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CompareRequest: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_CompareRequest: __utils.ComponentSpec[] = [

];

export const _decode_CompareRequest = __utils._decode_implicit<CompareRequest>(() => function (el: asn1.ASN1Element): CompareRequest {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("CompareRequest contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "entry";
    sequence[1].name = "ava";
    let entry!: LDAPDN;
    let ava!: AttributeValueAssertion;
    entry = _decode_LDAPDN(sequence[0]);
    ava = _decode_AttributeValueAssertion(sequence[1]);
    // TODO: Validate values.
    return new CompareRequest(
        entry,
        ava,
        sequence.slice(2),
    );
});
export const _encode_CompareRequest = __utils._encode_implicit(asn1.ASN1TagClass.application, 14, () => function (value: CompareRequest, elGetter: __utils.ASN1Encoder<CompareRequest>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LDAPDN(value.entry, __utils.BER),
            /* REQUIRED   */ _encode_AttributeValueAssertion(value.ava, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type CompareResponse = LDAPResult; // DefinedType
export const _decode_CompareResponse = __utils._decode_implicit<CompareResponse>(() => _decode_LDAPResult);
export const _encode_CompareResponse = __utils._encode_implicit(asn1.ASN1TagClass.application, 15, () => _encode_LDAPResult, __utils.BER);


export type AbandonRequest = MessageID; // DefinedType
export const _decode_AbandonRequest = __utils._decode_implicit<AbandonRequest>(() => _decode_MessageID);
export const _encode_AbandonRequest = __utils._encode_implicit(asn1.ASN1TagClass.application, 16, () => _encode_MessageID, __utils.BER);


export type LDAPOID = asn1.OCTET_STRING; // OctetStringType
export const _decode_LDAPOID = __utils._decodeOctetString;
export const _encode_LDAPOID = __utils._encodeOctetString;


export class ExtendedRequest {
    constructor (
        readonly requestName: LDAPOID,
        readonly requestValue: asn1.OCTET_STRING | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ExtendedRequest: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("requestName", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("requestValue", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ExtendedRequest: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_ExtendedRequest: __utils.ComponentSpec[] = [

];

export const _decode_ExtendedRequest = __utils._decode_implicit<ExtendedRequest>(() => function (el: asn1.ASN1Element): ExtendedRequest {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let requestName!: LDAPOID;
    let requestValue: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "requestName": (_el: asn1.ASN1Element): void => { requestName = __utils._decode_implicit<LDAPOID>(() => _decode_LDAPOID)(_el); },
        "requestValue": (_el: asn1.ASN1Element): void => { requestValue = __utils._decode_implicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtendedRequest,
        _extension_additions_list_spec_for_ExtendedRequest,
        _root_component_type_list_2_spec_for_ExtendedRequest,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ExtendedRequest( /* SEQUENCE_CONSTRUCTOR_CALL */
        requestName,
        requestValue,
        _unrecognizedExtensionsList
    );
});
export const _encode_ExtendedRequest = __utils._encode_implicit(asn1.ASN1TagClass.application, 23, () => function (value: ExtendedRequest, elGetter: __utils.ASN1Encoder<ExtendedRequest>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_LDAPOID, __utils.BER)(value.requestName, __utils.BER),
            /* IF_ABSENT  */ ((value.requestValue === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeOctetString, __utils.BER)(value.requestValue, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export class ExtendedResponse {
    constructor (
        readonly resultCode: LDAPResult_resultCode,
        readonly matchedDN: LDAPDN,
        readonly diagnosticMessage: LDAPString,
        readonly referral: Referral | undefined,
        readonly responseName: LDAPOID | undefined,
        readonly responseValue: asn1.OCTET_STRING | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ExtendedResponse: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("resultCode", false, __utils.hasTag(asn1.ASN1TagClass.universal, 10), undefined, undefined),
    new __utils.ComponentSpec("matchedDN", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("diagnosticMessage", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("referral", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("responseName", true, __utils.hasTag(asn1.ASN1TagClass.context, 10), undefined, undefined),
    new __utils.ComponentSpec("responseValue", true, __utils.hasTag(asn1.ASN1TagClass.context, 11), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ExtendedResponse: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_ExtendedResponse: __utils.ComponentSpec[] = [

];

export const _decode_ExtendedResponse = __utils._decode_implicit<ExtendedResponse>(() => function (el: asn1.ASN1Element): ExtendedResponse {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    // let _componentsOf!: LDAPResult;
    let resultCode!: LDAPResult_resultCode;
    let matchedDN!: LDAPDN;
    let diagnosticMessage!: LDAPString;
    let referral: Referral | undefined;
    let responseName: asn1.OPTIONAL<LDAPOID>;
    let responseValue: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "resultCode": (_el: asn1.ASN1Element): void => { resultCode = _decode_LDAPResult_resultCode(_el); },
        "matchedDN": (_el: asn1.ASN1Element): void => { matchedDN = _decode_LDAPDN(_el); },
        "diagnosticMessage": (_el: asn1.ASN1Element): void => { diagnosticMessage = _decode_LDAPString(_el); },
        "referral": (_el: asn1.ASN1Element): void => { referral = _decode_Referral(_el); },
        "responseName": (_el: asn1.ASN1Element): void => { responseName = __utils._decode_implicit<LDAPOID>(() => _decode_LDAPOID)(_el); },
        "responseValue": (_el: asn1.ASN1Element): void => { responseValue = __utils._decode_implicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtendedResponse,
        _extension_additions_list_spec_for_ExtendedResponse,
        _root_component_type_list_2_spec_for_ExtendedResponse,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ExtendedResponse( /* SEQUENCE_CONSTRUCTOR_CALL */
        resultCode,
        matchedDN,
        diagnosticMessage,
        referral,
        responseName,
        responseValue,
        _unrecognizedExtensionsList
    );
});
export const _encode_ExtendedResponse = __utils._encode_implicit(asn1.ASN1TagClass.application, 24, () => function (value: ExtendedResponse, elGetter: __utils.ASN1Encoder<ExtendedResponse>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */,
            /* IF_ABSENT  */ ((value.responseName === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 10, () => _encode_LDAPOID, __utils.BER)(value.responseName, __utils.BER)),
            /* IF_ABSENT  */ ((value.responseValue === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 11, () => __utils._encodeOctetString, __utils.BER)(value.responseValue, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export class IntermediateResponse {
    constructor (
        readonly responseName: LDAPOID | undefined,
        readonly responseValue: asn1.OCTET_STRING | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_IntermediateResponse: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("responseName", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("responseValue", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_IntermediateResponse: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_IntermediateResponse: __utils.ComponentSpec[] = [

];

export const _decode_IntermediateResponse = __utils._decode_implicit<IntermediateResponse>(() => function (el: asn1.ASN1Element): IntermediateResponse {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let responseName: asn1.OPTIONAL<LDAPOID>;
    let responseValue: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "responseName": (_el: asn1.ASN1Element): void => { responseName = __utils._decode_implicit<LDAPOID>(() => _decode_LDAPOID)(_el); },
        "responseValue": (_el: asn1.ASN1Element): void => { responseValue = __utils._decode_implicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IntermediateResponse,
        _extension_additions_list_spec_for_IntermediateResponse,
        _root_component_type_list_2_spec_for_IntermediateResponse,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IntermediateResponse( /* SEQUENCE_CONSTRUCTOR_CALL */
        responseName,
        responseValue,
        _unrecognizedExtensionsList
    );
});
export const _encode_IntermediateResponse = __utils._encode_implicit(asn1.ASN1TagClass.application, 25, () => function (value: IntermediateResponse, elGetter: __utils.ASN1Encoder<IntermediateResponse>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.responseName === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_LDAPOID, __utils.BER)(value.responseName, __utils.BER)),
            /* IF_ABSENT  */ ((value.responseValue === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeOctetString, __utils.BER)(value.responseValue, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type LDAPMessage_protocolOp =
    { bindRequest: BindRequest }
    | { bindResponse: BindResponse }
    | { unbindRequest: UnbindRequest }
    | { searchRequest: SearchRequest }
    | { searchResEntry: SearchResultEntry }
    | { searchResDone: SearchResultDone }
    | { searchResRef: SearchResultReference }
    | { modifyRequest: ModifyRequest }
    | { modifyResponse: ModifyResponse }
    | { addRequest: AddRequest }
    | { addResponse: AddResponse }
    | { delRequest: DelRequest }
    | { delResponse: DelResponse }
    | { modDNRequest: ModifyDNRequest }
    | { modDNResponse: ModifyDNResponse }
    | { compareRequest: CompareRequest }
    | { compareResponse: CompareResponse }
    | { abandonRequest: AbandonRequest }
    | { extendedReq: ExtendedRequest }
    | { extendedResp: ExtendedResponse }
    | { intermediateResponse: IntermediateResponse }
    | asn1.ASN1Element;
export const _decode_LDAPMessage_protocolOp = __utils._decode_extensible_choice<LDAPMessage_protocolOp>({
    "APPLICATION 0": [ "bindRequest", _decode_BindRequest ],
    "APPLICATION 1": [ "bindResponse", _decode_BindResponse ],
    "APPLICATION 2": [ "unbindRequest", _decode_UnbindRequest ],
    "APPLICATION 3": [ "searchRequest", _decode_SearchRequest ],
    "APPLICATION 4": [ "searchResEntry", _decode_SearchResultEntry ],
    "APPLICATION 5": [ "searchResDone", _decode_SearchResultDone ],
    "APPLICATION 19": [ "searchResRef", _decode_SearchResultReference ],
    "APPLICATION 6": [ "modifyRequest", _decode_ModifyRequest ],
    "APPLICATION 7": [ "modifyResponse", _decode_ModifyResponse ],
    "APPLICATION 8": [ "addRequest", _decode_AddRequest ],
    "APPLICATION 9": [ "addResponse", _decode_AddResponse ],
    "APPLICATION 10": [ "delRequest", _decode_DelRequest ],
    "APPLICATION 11": [ "delResponse", _decode_DelResponse ],
    "APPLICATION 12": [ "modDNRequest", _decode_ModifyDNRequest ],
    "APPLICATION 13": [ "modDNResponse", _decode_ModifyDNResponse ],
    "APPLICATION 14": [ "compareRequest", _decode_CompareRequest ],
    "APPLICATION 15": [ "compareResponse", _decode_CompareResponse ],
    "APPLICATION 16": [ "abandonRequest", _decode_AbandonRequest ],
    "APPLICATION 23": [ "extendedReq", _decode_ExtendedRequest ],
    "APPLICATION 24": [ "extendedResp", _decode_ExtendedResponse ],
    "APPLICATION 25": [ "intermediateResponse", _decode_IntermediateResponse ],
});
export const _encode_LDAPMessage_protocolOp = __utils._encode_choice<LDAPMessage_protocolOp>({
    "bindRequest": _encode_BindRequest,
    "bindResponse": _encode_BindResponse,
    "unbindRequest": _encode_UnbindRequest,
    "searchRequest": _encode_SearchRequest,
    "searchResEntry": _encode_SearchResultEntry,
    "searchResDone": _encode_SearchResultDone,
    "searchResRef": _encode_SearchResultReference,
    "modifyRequest": _encode_ModifyRequest,
    "modifyResponse": _encode_ModifyResponse,
    "addRequest": _encode_AddRequest,
    "addResponse": _encode_AddResponse,
    "delRequest": _encode_DelRequest,
    "delResponse": _encode_DelResponse,
    "modDNRequest": _encode_ModifyDNRequest,
    "modDNResponse": _encode_ModifyDNResponse,
    "compareRequest": _encode_CompareRequest,
    "compareResponse": _encode_CompareResponse,
    "abandonRequest": _encode_AbandonRequest,
    "extendedReq": _encode_ExtendedRequest,
    "extendedResp": _encode_ExtendedResponse,
    "intermediateResponse": _encode_IntermediateResponse,
}, __utils.BER);


export class Control {
    constructor (
        readonly controlType: LDAPOID,
        readonly criticality: asn1.BOOLEAN | undefined,
        readonly controlValue: asn1.OCTET_STRING | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_Control: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("controlType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("criticality", true, __utils.hasTag(asn1.ASN1TagClass.universal, 1), undefined, undefined),
    new __utils.ComponentSpec("controlValue", true, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Control: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_Control: __utils.ComponentSpec[] = [

];
export const _default_value_for_Control__criticality = false;
export const _decode_Control = function (el: asn1.ASN1Element): Control {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let controlType!: LDAPOID;
    let criticality: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_Control__criticality;
    let controlValue: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "controlType": (_el: asn1.ASN1Element): void => { controlType = _decode_LDAPOID(_el); },
        "criticality": (_el: asn1.ASN1Element): void => { criticality = __utils._decodeBoolean(_el); },
        "controlValue": (_el: asn1.ASN1Element): void => { controlValue = __utils._decodeOctetString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Control,
        _extension_additions_list_spec_for_Control,
        _root_component_type_list_2_spec_for_Control,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Control( /* SEQUENCE_CONSTRUCTOR_CALL */
        controlType,
        criticality,
        controlValue,
        _unrecognizedExtensionsList
    );
};
export const _encode_Control = function (value: Control, elGetter: __utils.ASN1Encoder<Control>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LDAPOID(value.controlType, __utils.BER),
            /* IF_DEFAULT */ (value.criticality === undefined || __utils.deepEq(value.criticality, _default_value_for_Control__criticality) ? undefined : __utils._encodeBoolean(value.criticality, __utils.BER)),
            /* IF_ABSENT  */ ((value.controlValue === undefined) ? undefined : __utils._encodeOctetString(value.controlValue, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type Controls = Control[]; // SequenceOfType
export const _decode_Controls = __utils._decodeSequenceOf<Control>(() => _decode_Control);
export const _encode_Controls = __utils._encodeSequenceOf<Control>(() => _encode_Control, __utils.BER);


export class LDAPMessage {
    constructor (
        readonly messageID: MessageID,
        readonly protocolOp: LDAPMessage_protocolOp,
        readonly controls: Controls | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_LDAPMessage: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("messageID", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("protocolOp", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("controls", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_LDAPMessage: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_LDAPMessage: __utils.ComponentSpec[] = [

];

export const _decode_LDAPMessage = function (el: asn1.ASN1Element): LDAPMessage {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let messageID!: MessageID;
    let protocolOp!: LDAPMessage_protocolOp;
    let controls: asn1.OPTIONAL<Controls>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "messageID": (_el: asn1.ASN1Element): void => { messageID = _decode_MessageID(_el); },
        "protocolOp": (_el: asn1.ASN1Element): void => { protocolOp = _decode_LDAPMessage_protocolOp(_el); },
        "controls": (_el: asn1.ASN1Element): void => { controls = __utils._decode_implicit<Controls>(() => _decode_Controls)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LDAPMessage,
        _extension_additions_list_spec_for_LDAPMessage,
        _root_component_type_list_2_spec_for_LDAPMessage,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LDAPMessage( /* SEQUENCE_CONSTRUCTOR_CALL */
        messageID,
        protocolOp,
        controls,
        _unrecognizedExtensionsList
    );
};
export const _encode_LDAPMessage = function (value: LDAPMessage, elGetter: __utils.ASN1Encoder<LDAPMessage>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MessageID(value.messageID, __utils.BER),
            /* REQUIRED   */ _encode_LDAPMessage_protocolOp(value.protocolOp, __utils.BER),
            /* IF_ABSENT  */ ((value.controls === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_Controls, __utils.BER)(value.controls, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export const maxInt: asn1.INTEGER = 2147483647;

/* END_MODULE Lightweight-Directory-Access-Protocol-V3 */
