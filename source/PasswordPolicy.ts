/*
    BEGIN_MODULE PasswordPolicy
    OID: joint-iso-itu-t.ds.module.passwordPolicy.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "./AuthenticationFramework";
import { id_asx, id_at, id_mr, id_oa } from "./UsefulDefinitions";
import * as __utils from "./__utils";
export {
    ALGORITHM,
    AlgorithmIdentifier,
    EXTENSION,
    SupportedAlgorithms,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "./AuthenticationFramework";
export {
    ATTRIBUTE,
    MATCHING_RULE,
    pwdHistory,
    pwdHistoryMatch,
    pwdRecentlyExpired,
    SYNTAX_NAME,
} from "./InformationFramework";
export {
    bitStringMatch,
    booleanMatch,
    boolean_,
    directoryString,
    generalizedTime,
    generalizedTimeMatch,
    generalizedTimeOrderingMatch,
    integer,
    integerMatch,
    integerOrderingMatch,
    uri,
} from "./SelectedAttributeTypes";
export {
    authenticationFramework,
    id_asx,
    id_at,
    id_mr,
    id_oa,
    informationFramework,
    selectedAttributeTypes,
} from "./UsefulDefinitions";

export class UserPwd_encrypted {
    constructor(
        readonly algorithmIdentifier: AlgorithmIdentifier,
        readonly encryptedString: asn1.OCTET_STRING,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_UserPwd_encrypted: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithmIdentifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedString",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_UserPwd_encrypted: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_UserPwd_encrypted: __utils.ComponentSpec[] = [];
export const _decode_UserPwd_encrypted = function (
    el: asn1.ASN1Element
): UserPwd_encrypted {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "UserPwd-encrypted contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "algorithmIdentifier";
    sequence[1].name = "encryptedString";
    let algorithmIdentifier!: AlgorithmIdentifier;
    let encryptedString!: asn1.OCTET_STRING;
    algorithmIdentifier = _decode_AlgorithmIdentifier(sequence[0]);
    encryptedString = __utils._decodeOctetString(sequence[1]);
    // TODO: Validate values.
    return new UserPwd_encrypted(
        algorithmIdentifier,
        encryptedString,
        sequence.slice(2)
    );
};
export const _encode_UserPwd_encrypted = function (
    value: UserPwd_encrypted,
    elGetter: __utils.ASN1Encoder<UserPwd_encrypted>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    _encode_AlgorithmIdentifier(
                        value.algorithmIdentifier,
                        __utils.BER
                    ),
                    __utils._encodeOctetString(
                        value.encryptedString,
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

export type UserPwd =
    | { clear: asn1.UTF8String }
    | { encrypted: UserPwd_encrypted }
    | asn1.ASN1Element;
export const _decode_UserPwd = __utils._decode_extensible_choice<UserPwd>({
    "UNIVERSAL 12": ["clear", __utils._decodeUTF8String],
    "UNIVERSAL 16": ["encrypted", _decode_UserPwd_encrypted],
});
export const _encode_UserPwd = __utils._encode_choice<UserPwd>(
    {
        clear: __utils._encodeUTF8String,
        encrypted: _encode_UserPwd_encrypted,
    },
    __utils.BER
);

// TODO: ObjectAssignment: pwdStartTime

// TODO: ObjectAssignment: pwdExpiryTime

// TODO: ObjectAssignment: pwdEndTime

// TODO: ObjectAssignment: pwdFails

// TODO: ObjectAssignment: pwdFailureTime

// TODO: ObjectAssignment: pwdGracesUsed

// TODO: ObjectAssignment: userPwd

export const id_mr_userPwdHistoryMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [72],
    id_mr
);

// TODO: ObjectAssignment: userPwdHistoryMatch

export const id_oa_userPwdHistory: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [28],
    id_oa
);

// TODO: ObjectAssignment: userPwdHistory

export const id_oa_userPwdRecentlyExpired: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [29],
    id_oa
);

// TODO: ObjectAssignment: userPwdRecentlyExpired

// TODO: ObjectAssignment: pwdModifyEntryAllowed

// TODO: ObjectAssignment: pwdChangeAllowed

// TODO: ObjectAssignment: pwdMaxAge

// TODO: ObjectAssignment: pwdExpiryAge

// TODO: ObjectAssignment: pwdMinLength

// TODO: ObjectAssignment: pwdVocabulary

export type PwdVocabulary = asn1.BIT_STRING;
export const PwdVocabulary_noDictionaryWords: number = 0; /* LONG_NAMED_BIT */
export const noDictionaryWords: number = PwdVocabulary_noDictionaryWords; /* SHORT_NAMED_BIT */
export const PwdVocabulary_noPersonNames: number = 1; /* LONG_NAMED_BIT */
export const noPersonNames: number = PwdVocabulary_noPersonNames; /* SHORT_NAMED_BIT */
export const PwdVocabulary_noGeographicalNames: number = 2; /* LONG_NAMED_BIT */
export const noGeographicalNames: number = PwdVocabulary_noGeographicalNames; /* SHORT_NAMED_BIT */
export const _decode_PwdVocabulary = __utils._decodeBitString;
export const _encode_PwdVocabulary = __utils._encodeBitString;

// TODO: ObjectAssignment: pwdAlphabet

export type PwdAlphabet = asn1.UTF8String[]; // SequenceOfType
export const _decode_PwdAlphabet = __utils._decodeSequenceOf<asn1.UTF8String>(
    () => __utils._decodeUTF8String
);
export const _encode_PwdAlphabet = __utils._encodeSequenceOf<asn1.UTF8String>(
    () => __utils._encodeUTF8String,
    __utils.BER
);

// TODO: ObjectAssignment: pwdDictionaries

// TODO: ObjectAssignment: pwdExpiryWarning

// TODO: ObjectAssignment: pwdGraces

// TODO: ObjectAssignment: pwdFailureDuration

// TODO: ObjectAssignment: pwdLockoutDuration

// TODO: ObjectAssignment: pwdMaxFailures

// TODO: ObjectAssignment: pwdMaxTimeInHistory

// TODO: ObjectAssignment: pwdMinTimeInHistory

// TODO: ObjectAssignment: pwdHistorySlots

// TODO: ObjectAssignment: pwdRecentlyExpiredDuration

// TODO: ObjectAssignment: pwdEncAlg

export type PwdEncAlg = AlgorithmIdentifier; // DefinedType
export const _decode_PwdEncAlg = _decode_AlgorithmIdentifier;
export const _encode_PwdEncAlg = _encode_AlgorithmIdentifier;

// TODO: ObjectAssignment: userPwdMatch

// TODO: ObjectAssignment: pwdEncAlgMatch

// TODO: ObjectAssignment: userPwdDescription

// TODO: ObjectAssignment: pwdVocabularyDescription

// TODO: ObjectAssignment: pwdAlphabetDescription

// TODO: ObjectAssignment: pwdEncAlgDescription

export const id_at_userPwd: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [85],
    id_at
);

export const id_oa_pwdStartTime: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [22],
    id_oa
);

export const id_oa_pwdExpiryTime: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [23],
    id_oa
);

export const id_oa_pwdEndTime: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [24],
    id_oa
);

export const id_oa_pwdFails: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [25],
    id_oa
);

export const id_oa_pwdFailureTime: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [26],
    id_oa
);

export const id_oa_pwdGracesUsed: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [27],
    id_oa
);

export const id_oa_pwdModifyEntryAllowed: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [30],
    id_oa
);

export const id_oa_pwdChangeAllowed: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [31],
    id_oa
);

export const id_oa_pwdMaxAge: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [32],
    id_oa
);

export const id_oa_pwdExpiryAge: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [33],
    id_oa
);

export const id_oa_pwdMinLength: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [34],
    id_oa
);

export const id_oa_pwdVocabulary: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [35],
    id_oa
);

export const id_oa_pwdAlphabet: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [36],
    id_oa
);

export const id_oa_pwdDictionaries: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [37],
    id_oa
);

export const id_oa_pwdExpiryWarning: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [38],
    id_oa
);

export const id_oa_pwdGraces: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [39],
    id_oa
);

export const id_oa_pwdFailureDuration: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [40],
    id_oa
);

export const id_oa_pwdLockoutDuration: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [41],
    id_oa
);

export const id_oa_pwdMaxFailures: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [42],
    id_oa
);

export const id_oa_pwdMaxTimeInHistory: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [43],
    id_oa
);

export const id_oa_pwdMinTimeInHistory: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [44],
    id_oa
);

export const id_oa_pwdHistorySlots: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [45],
    id_oa
);

export const id_oa_pwdRecentlyExpiredDuration: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [46],
    id_oa
);

export const id_oa_pwdEncAlg: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [47],
    id_oa
);

export const id_mr_userPwdMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [71],
    id_mr
);

export const id_mr_pwdEncAlgMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [73],
    id_mr
);

export const id_asx_userPwdDescription: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [0],
    id_asx
);

export const id_asx_pwdVocabularyDescription: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_asx
);

export const id_asx_pwdAlphabetDescription: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_asx
);

export const id_asx_pwdEncAlgDescription: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_asx
);

/* END_MODULE PasswordPolicy */
