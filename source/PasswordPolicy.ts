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
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "./AuthenticationFramework";
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
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
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
let _cached_decoder_for_UserPwd_encrypted: __utils.ASN1Decoder<
    UserPwd_encrypted
> | null = null;
let _cached_encoder_for_UserPwd_encrypted: __utils.ASN1Encoder<
    UserPwd_encrypted
> | null = null;
export function _decode_UserPwd_encrypted(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UserPwd_encrypted) {
        _cached_decoder_for_UserPwd_encrypted = function (
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
    }
    return _cached_decoder_for_UserPwd_encrypted(el);
}
export function _encode_UserPwd_encrypted(
    value: UserPwd_encrypted,
    elGetter: __utils.ASN1Encoder<UserPwd_encrypted>
) {
    if (!_cached_encoder_for_UserPwd_encrypted) {
        _cached_encoder_for_UserPwd_encrypted = function (
            value: UserPwd_encrypted,
            elGetter: __utils.ASN1Encoder<UserPwd_encrypted>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.algorithmIdentifier,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeOctetString(
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
    }
    return _cached_encoder_for_UserPwd_encrypted(value, elGetter);
}

export type UserPwd =
    | { clear: asn1.UTF8String } /* CHOICE_ALT_ROOT */
    | { encrypted: UserPwd_encrypted } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_UserPwd: __utils.ASN1Decoder<UserPwd> | null = null;
let _cached_encoder_for_UserPwd: __utils.ASN1Encoder<UserPwd> | null = null;
export function _decode_UserPwd(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UserPwd) {
        _cached_decoder_for_UserPwd = __utils._decode_extensible_choice<
            UserPwd
        >({
            "UNIVERSAL 12": ["clear", __utils._decodeUTF8String],
            "UNIVERSAL 16": ["encrypted", _decode_UserPwd_encrypted],
        });
    }
    return _cached_decoder_for_UserPwd(el);
}
export function _encode_UserPwd(
    value: UserPwd,
    elGetter: __utils.ASN1Encoder<UserPwd>
) {
    if (!_cached_encoder_for_UserPwd) {
        _cached_encoder_for_UserPwd = __utils._encode_choice<UserPwd>(
            {
                clear: __utils._encodeUTF8String,
                encrypted: _encode_UserPwd_encrypted,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_UserPwd(value, elGetter);
}

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
let _cached_decoder_for_PwdVocabulary: __utils.ASN1Decoder<
    PwdVocabulary
> | null = null;
let _cached_encoder_for_PwdVocabulary: __utils.ASN1Encoder<
    PwdVocabulary
> | null = null;
export function _decode_PwdVocabulary(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PwdVocabulary) {
        _cached_decoder_for_PwdVocabulary = __utils._decodeBitString;
    }
    return _cached_decoder_for_PwdVocabulary(el);
}
export function _encode_PwdVocabulary(
    value: PwdVocabulary,
    elGetter: __utils.ASN1Encoder<PwdVocabulary>
) {
    if (!_cached_encoder_for_PwdVocabulary) {
        _cached_encoder_for_PwdVocabulary = __utils._encodeBitString;
    }
    return _cached_encoder_for_PwdVocabulary(value, elGetter);
}

// TODO: ObjectAssignment: pwdAlphabet

export type PwdAlphabet = asn1.UTF8String[]; // SequenceOfType
let _cached_decoder_for_PwdAlphabet: __utils.ASN1Decoder<
    PwdAlphabet
> | null = null;
let _cached_encoder_for_PwdAlphabet: __utils.ASN1Encoder<
    PwdAlphabet
> | null = null;
export function _decode_PwdAlphabet(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PwdAlphabet) {
        _cached_decoder_for_PwdAlphabet = __utils._decodeSequenceOf<
            asn1.UTF8String
        >(() => __utils._decodeUTF8String);
    }
    return _cached_decoder_for_PwdAlphabet(el);
}
export function _encode_PwdAlphabet(
    value: PwdAlphabet,
    elGetter: __utils.ASN1Encoder<PwdAlphabet>
) {
    if (!_cached_encoder_for_PwdAlphabet) {
        _cached_encoder_for_PwdAlphabet = __utils._encodeSequenceOf<
            asn1.UTF8String
        >(() => __utils._encodeUTF8String, __utils.BER);
    }
    return _cached_encoder_for_PwdAlphabet(value, elGetter);
}

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
let _cached_decoder_for_PwdEncAlg: __utils.ASN1Decoder<PwdEncAlg> | null = null;
let _cached_encoder_for_PwdEncAlg: __utils.ASN1Encoder<PwdEncAlg> | null = null;
export function _decode_PwdEncAlg(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PwdEncAlg) {
        _cached_decoder_for_PwdEncAlg = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_PwdEncAlg(el);
}
export function _encode_PwdEncAlg(
    value: PwdEncAlg,
    elGetter: __utils.ASN1Encoder<PwdEncAlg>
) {
    if (!_cached_encoder_for_PwdEncAlg) {
        _cached_encoder_for_PwdEncAlg = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_PwdEncAlg(value, elGetter);
}

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
