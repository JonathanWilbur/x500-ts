/**
 * @module PasswordPolicy
 * @summary The ASN.1 module `PasswordPolicy`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.passwordPolicy.9
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
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    UTF8String,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "./AuthenticationFramework";
import * as InformationFramework from "./InformationFramework";
import {
    ATTRIBUTE,
    MATCHING_RULE,
    pwdHistory,
    pwdHistoryMatch,
    pwdRecentlyExpired,
    SYNTAX_NAME,
} from "./InformationFramework";
import {
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
import { id_asx, id_at, id_mr, id_oa } from "./UsefulDefinitions";
export {
    ALGORITHM,
    AlgorithmIdentifier,
    EXTENSION,
    SupportedAlgorithms,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "./AuthenticationFramework";
export { ATTRIBUTE, MATCHING_RULE, SYNTAX_NAME } from "./InformationFramework";
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
export { id_asx, id_at, id_mr, id_oa } from "./UsefulDefinitions";

/**
 * @summary UserPwd_encrypted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserPwd-encrypted ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class UserPwd_encrypted {
    constructor(
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmIdentifier,
        /**
         * @summary `encryptedString`.
         * @public
         * @readonly
         */
        readonly encryptedString: OCTET_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UserPwd_encrypted
     * @description
     *
     * This takes an `object` and converts it to a `UserPwd_encrypted`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserPwd_encrypted`.
     * @returns {UserPwd_encrypted}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof UserPwd_encrypted]: UserPwd_encrypted[_K] }>
    ): UserPwd_encrypted {
        return new UserPwd_encrypted(
            _o.algorithmIdentifier,
            _o.encryptedString,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of UserPwd_encrypted
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UserPwd_encrypted: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithmIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encryptedString",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of UserPwd_encrypted
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UserPwd_encrypted: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of UserPwd_encrypted
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UserPwd_encrypted: $.ComponentSpec[] = [];
let _cached_decoder_for_UserPwd_encrypted: $.ASN1Decoder<
    UserPwd_encrypted
> | null = null;
let _cached_encoder_for_UserPwd_encrypted: $.ASN1Encoder<
    UserPwd_encrypted
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UserPwd_encrypted
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserPwd_encrypted} The decoded data structure.
 */
export function _decode_UserPwd_encrypted(el: _Element) {
    if (!_cached_decoder_for_UserPwd_encrypted) {
        _cached_decoder_for_UserPwd_encrypted = function (
            el: _Element
        ): UserPwd_encrypted {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "UserPwd-encrypted contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "algorithmIdentifier";
            sequence[1].name = "encryptedString";
            let algorithmIdentifier!: AlgorithmIdentifier;
            let encryptedString!: OCTET_STRING;
            algorithmIdentifier = _decode_AlgorithmIdentifier(sequence[0]);
            encryptedString = $._decodeOctetString(sequence[1]);
            return new UserPwd_encrypted(
                algorithmIdentifier,
                encryptedString,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_UserPwd_encrypted(el);
}
/**
 * @summary Encodes a(n) UserPwd_encrypted into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserPwd_encrypted, encoded as an ASN.1 Element.
 */
export function _encode_UserPwd_encrypted(
    value: UserPwd_encrypted,
    elGetter: $.ASN1Encoder<UserPwd_encrypted>
) {
    if (!_cached_encoder_for_UserPwd_encrypted) {
        _cached_encoder_for_UserPwd_encrypted = function (
            value: UserPwd_encrypted,
            elGetter: $.ASN1Encoder<UserPwd_encrypted>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.algorithmIdentifier,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeOctetString(
                                value.encryptedString,
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
    return _cached_encoder_for_UserPwd_encrypted(value, elGetter);
}

/**
 * @summary UserPwd
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserPwd  ::=  CHOICE {
 *   clear                 UTF8String,
 *   encrypted             SEQUENCE {
 *     algorithmIdentifier   AlgorithmIdentifier{{SupportedAlgorithms}},
 *     encryptedString       OCTET STRING,
 *     ...},
 *   ...}
 * ```
 */
export type UserPwd =
    | { clear: UTF8String } /* CHOICE_ALT_ROOT */
    | { encrypted: UserPwd_encrypted } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_UserPwd: $.ASN1Decoder<UserPwd> | null = null;
let _cached_encoder_for_UserPwd: $.ASN1Encoder<UserPwd> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UserPwd
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserPwd} The decoded data structure.
 */
export function _decode_UserPwd(el: _Element) {
    if (!_cached_decoder_for_UserPwd) {
        _cached_decoder_for_UserPwd = $._decode_extensible_choice<UserPwd>({
            "UNIVERSAL 12": ["clear", $._decodeUTF8String],
            "UNIVERSAL 16": ["encrypted", _decode_UserPwd_encrypted],
        });
    }
    return _cached_decoder_for_UserPwd(el);
}
/**
 * @summary Encodes a(n) UserPwd into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserPwd, encoded as an ASN.1 Element.
 */
export function _encode_UserPwd(
    value: UserPwd,
    elGetter: $.ASN1Encoder<UserPwd>
) {
    if (!_cached_encoder_for_UserPwd) {
        _cached_encoder_for_UserPwd = $._encode_choice<UserPwd>(
            {
                clear: $._encodeUTF8String,
                encrypted: _encode_UserPwd_encrypted,
            },
            $.BER
        );
    }
    return _cached_encoder_for_UserPwd(value, elGetter);
}

/**
 * @summary id_asx_userPwdDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-userPwdDescription        OBJECT IDENTIFIER ::= {id-asx 0}
 * ```
 *
 * @constant
 */
export const id_asx_userPwdDescription: OBJECT_IDENTIFIER = new _OID(
    [0],
    id_asx
);

/**
 * @summary userPwdDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwdDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "User Password Description"
 *   DIRECTORY SYNTAX  UserPwd
 *   ID                id-asx-userPwdDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const userPwdDescription: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_UserPwd,
    },
    encoderFor: {
        "&Type": _encode_UserPwd,
    },
    "&ldapDesc": "User Password Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_userPwdDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_userPwdMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-userPwdMatch               OBJECT IDENTIFIER ::= {id-mr 71}
 * ```
 *
 * @constant
 */
export const id_mr_userPwdMatch: OBJECT_IDENTIFIER = new _OID([71], id_mr);

/**
 * @summary userPwdMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwdMatch MATCHING-RULE ::= {
 *   SYNTAX       UserPwd
 *   LDAP-SYNTAX  userPwdDescription.&id
 *   LDAP-NAME    {"userPwdMatch"}
 *   ID           id-mr-userPwdMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const userPwdMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UserPwd,
    },
    encoderFor: {
        "&AssertionType": _encode_UserPwd,
    },
    "&ldapSyntax": userPwdDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_userPwdMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_userPwd
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-userPwd                    OBJECT IDENTIFIER ::= {id-at 85}
 * ```
 *
 * @constant
 */
export const id_at_userPwd: OBJECT_IDENTIFIER = new _OID([85], id_at);

/**
 * @summary userPwd
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwd    ATTRIBUTE ::= {
 *   WITH SYNTAX              UserPwd
 *   EQUALITY MATCHING RULE   userPwdMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              userPwdDescription.&id
 *   LDAP-NAME                {"userPwd"}
 *   ID                       id-at-userPwd }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const userPwd: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UserPwd,
    },
    encoderFor: {
        "&Type": _encode_UserPwd,
    },
    "&equality-match": userPwdMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": userPwdDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_userPwd /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdStartTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdStartTime               OBJECT IDENTIFIER ::= {id-oa 22}
 * ```
 *
 * @constant
 */
export const id_oa_pwdStartTime: OBJECT_IDENTIFIER = new _OID([22], id_oa);

/**
 * @summary pwdStartTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdStartTime ATTRIBUTE ::= {
 *   WITH SYNTAX              GeneralizedTime
 *   EQUALITY MATCHING RULE   generalizedTimeMatch
 *   ORDERING MATCHING RULE   generalizedTimeOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              generalizedTime.&id
 *   LDAP-NAME                {"pwdStartTime"}
 *   ID                       id-oa-pwdStartTime }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdStartTime: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&Type": $._encodeGeneralizedTime,
    },
    "&equality-match": generalizedTimeMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": generalizedTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": generalizedTime["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdStartTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdExpiryTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdExpiryTime              OBJECT IDENTIFIER ::= {id-oa 23}
 * ```
 *
 * @constant
 */
export const id_oa_pwdExpiryTime: OBJECT_IDENTIFIER = new _OID([23], id_oa);

/**
 * @summary pwdExpiryTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdExpiryTime ATTRIBUTE ::= {
 *   WITH SYNTAX              GeneralizedTime
 *   EQUALITY MATCHING RULE   generalizedTimeMatch
 *   ORDERING MATCHING RULE   generalizedTimeOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              generalizedTime.&id
 *   LDAP-NAME                {"pwdExpiryTime"}
 *   ID                       id-oa-pwdExpiryTime }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdExpiryTime: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&Type": $._encodeGeneralizedTime,
    },
    "&equality-match": generalizedTimeMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": generalizedTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": generalizedTime["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdExpiryTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdEndTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdEndTime                 OBJECT IDENTIFIER ::= {id-oa 24}
 * ```
 *
 * @constant
 */
export const id_oa_pwdEndTime: OBJECT_IDENTIFIER = new _OID([24], id_oa);

/**
 * @summary pwdEndTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdEndTime ATTRIBUTE ::= {
 *   WITH SYNTAX              GeneralizedTime
 *   EQUALITY MATCHING RULE   generalizedTimeMatch
 *   ORDERING MATCHING RULE   generalizedTimeOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              generalizedTime.&id
 *   LDAP-NAME                {"pwdEndTime"}
 *   ID                       id-oa-pwdEndTime }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdEndTime: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&Type": $._encodeGeneralizedTime,
    },
    "&equality-match": generalizedTimeMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": generalizedTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": generalizedTime["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdEndTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdFails
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdFails                   OBJECT IDENTIFIER ::= {id-oa 25}
 * ```
 *
 * @constant
 */
export const id_oa_pwdFails: OBJECT_IDENTIFIER = new _OID([25], id_oa);

/**
 * @summary pwdFails
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdFails ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER (0..MAX)
 *   EQUALITY MATCHING RULE   integerMatch
 *   ORDERING MATCHING RULE   integerOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"pwdFails"}
 *   ID                       id-oa-pwdFails }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdFails: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdFails /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdFailureTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdFailureTime             OBJECT IDENTIFIER ::= {id-oa 26}
 * ```
 *
 * @constant
 */
export const id_oa_pwdFailureTime: OBJECT_IDENTIFIER = new _OID([26], id_oa);

/**
 * @summary pwdFailureTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdFailureTime ATTRIBUTE ::= {
 *   WITH SYNTAX              GeneralizedTime
 *   EQUALITY MATCHING RULE   generalizedTimeMatch
 *   ORDERING MATCHING RULE   generalizedTimeOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              generalizedTime.&id
 *   LDAP-NAME                {"pwdFailureTime"}
 *   ID                       id-oa-pwdFailureTime }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdFailureTime: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&Type": $._encodeGeneralizedTime,
    },
    "&equality-match": generalizedTimeMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": generalizedTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": generalizedTime["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdFailureTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdGracesUsed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdGracesUsed              OBJECT IDENTIFIER ::= {id-oa 27}
 * ```
 *
 * @constant
 */
export const id_oa_pwdGracesUsed: OBJECT_IDENTIFIER = new _OID([27], id_oa);

/**
 * @summary pwdGracesUsed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdGracesUsed ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER (0..MAX)
 *   EQUALITY MATCHING RULE   integerMatch
 *   ORDERING MATCHING RULE   integerOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"pwdGracesUsed"}
 *   ID                       id-oa-pwdGracesUsed }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdGracesUsed: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdGracesUsed /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdModifyEntryAllowed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdModifyEntryAllowed      OBJECT IDENTIFIER ::= {id-oa 30}
 * ```
 *
 * @constant
 */
export const id_oa_pwdModifyEntryAllowed: OBJECT_IDENTIFIER = new _OID(
    [30],
    id_oa
);

/**
 * @summary pwdModifyEntryAllowed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdModifyEntryAllowed ATTRIBUTE ::= {
 *   WITH SYNTAX              BOOLEAN
 *   EQUALITY MATCHING RULE   booleanMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              boolean.&id
 *   LDAP-NAME                {"pwdModifyEntryAllowed"}
 *   ID                       id-oa-pwdModifyEntryAllowed }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdModifyEntryAllowed: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBoolean,
    },
    encoderFor: {
        "&Type": $._encodeBoolean,
    },
    "&equality-match": booleanMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": boolean_["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdModifyEntryAllowed /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdChangeAllowed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdChangeAllowed           OBJECT IDENTIFIER ::= {id-oa 31}
 * ```
 *
 * @constant
 */
export const id_oa_pwdChangeAllowed: OBJECT_IDENTIFIER = new _OID([31], id_oa);

/**
 * @summary pwdChangeAllowed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdChangeAllowed ATTRIBUTE ::= {
 *   WITH SYNTAX              BOOLEAN
 *   EQUALITY MATCHING RULE   booleanMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              boolean.&id
 *   LDAP-NAME                {"pwdChangeAllowed"}
 *   ID                       id-oa-pwdChangeAllowed }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdChangeAllowed: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBoolean,
    },
    encoderFor: {
        "&Type": $._encodeBoolean,
    },
    "&equality-match": booleanMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": boolean_["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdChangeAllowed /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdMaxAge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdMaxAge                  OBJECT IDENTIFIER ::= {id-oa 32}
 * ```
 *
 * @constant
 */
export const id_oa_pwdMaxAge: OBJECT_IDENTIFIER = new _OID([32], id_oa);

/**
 * @summary pwdMaxAge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdMaxAge ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER (1 .. MAX)
 *   EQUALITY MATCHING RULE   integerMatch
 *   ORDERING MATCHING RULE   integerOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"pwdMaxAge"}
 *   ID                       id-oa-pwdMaxAge }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdMaxAge: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdMaxAge /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdExpiryAge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdExpiryAge               OBJECT IDENTIFIER ::= {id-oa 33}
 * ```
 *
 * @constant
 */
export const id_oa_pwdExpiryAge: OBJECT_IDENTIFIER = new _OID([33], id_oa);

/**
 * @summary pwdExpiryAge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdExpiryAge ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER (1 .. MAX)
 *   EQUALITY MATCHING RULE   integerMatch
 *   ORDERING MATCHING RULE   integerOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"pwdExpiryAge"}
 *   ID                       id-oa-pwdExpiryAge }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdExpiryAge: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdExpiryAge /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdMinLength
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdMinLength               OBJECT IDENTIFIER ::= {id-oa 34}
 * ```
 *
 * @constant
 */
export const id_oa_pwdMinLength: OBJECT_IDENTIFIER = new _OID([34], id_oa);

/**
 * @summary pwdMinLength
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdMinLength ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER (0..MAX)
 *   EQUALITY MATCHING RULE   integerMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"pwdMinLength"}
 *   ID                       id-oa-pwdMinLength }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdMinLength: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdMinLength /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary PwdVocabulary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdVocabulary  ::=   BIT STRING {
 *     noDictionaryWords   (0),
 *     noPersonNames       (1),
 *     noGeographicalNames (2) }
 * ```
 */
export type PwdVocabulary = BIT_STRING;
/**
 * @summary PwdVocabulary_noDictionaryWords
 * @constant
 */
export const PwdVocabulary_noDictionaryWords: number = 0; /* LONG_NAMED_BIT */
/**
 * @summary PwdVocabulary_noPersonNames
 * @constant
 */
export const PwdVocabulary_noPersonNames: number = 1; /* LONG_NAMED_BIT */
/**
 * @summary PwdVocabulary_noGeographicalNames
 * @constant
 */
export const PwdVocabulary_noGeographicalNames: number = 2; /* LONG_NAMED_BIT */
let _cached_decoder_for_PwdVocabulary: $.ASN1Decoder<
    PwdVocabulary
> | null = null;
let _cached_encoder_for_PwdVocabulary: $.ASN1Encoder<
    PwdVocabulary
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PwdVocabulary
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdVocabulary} The decoded data structure.
 */
export function _decode_PwdVocabulary(el: _Element) {
    if (!_cached_decoder_for_PwdVocabulary) {
        _cached_decoder_for_PwdVocabulary = $._decodeBitString;
    }
    return _cached_decoder_for_PwdVocabulary(el);
}
/**
 * @summary Encodes a(n) PwdVocabulary into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdVocabulary, encoded as an ASN.1 Element.
 */
export function _encode_PwdVocabulary(
    value: PwdVocabulary,
    elGetter: $.ASN1Encoder<PwdVocabulary>
) {
    if (!_cached_encoder_for_PwdVocabulary) {
        _cached_encoder_for_PwdVocabulary = $._encodeBitString;
    }
    return _cached_encoder_for_PwdVocabulary(value, elGetter);
}

/**
 * @summary id_asx_pwdVocabularyDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-pwdVocabularyDescription  OBJECT IDENTIFIER ::= {id-asx 1}
 * ```
 *
 * @constant
 */
export const id_asx_pwdVocabularyDescription: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_asx
);

/**
 * @summary pwdVocabularyDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdVocabularyDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "Password Vocabulary Description"
 *   DIRECTORY SYNTAX  PwdVocabulary
 *   ID                id-asx-pwdVocabularyDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const pwdVocabularyDescription: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_PwdVocabulary,
    },
    encoderFor: {
        "&Type": _encode_PwdVocabulary,
    },
    "&ldapDesc": "Password Vocabulary Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_pwdVocabularyDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdVocabulary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdVocabulary              OBJECT IDENTIFIER ::= {id-oa 35}
 * ```
 *
 * @constant
 */
export const id_oa_pwdVocabulary: OBJECT_IDENTIFIER = new _OID([35], id_oa);

/**
 * @summary pwdVocabulary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdVocabulary ATTRIBUTE ::= {
 *   WITH SYNTAX              PwdVocabulary
 *   EQUALITY MATCHING RULE   bitStringMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              pwdVocabularyDescription.&id
 *   LDAP-NAME                {"pwdVocabulary"}
 *   ID                       id-oa-pwdVocabulary }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdVocabulary: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PwdVocabulary,
    },
    encoderFor: {
        "&Type": _encode_PwdVocabulary,
    },
    "&equality-match": bitStringMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": pwdVocabularyDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdVocabulary /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type PwdAlphabet<> = UTF8String[]; // SequenceOfType
let _cached_decoder_for_PwdAlphabet: $.ASN1Decoder<PwdAlphabet> | null = null;
let _cached_encoder_for_PwdAlphabet: $.ASN1Encoder<PwdAlphabet> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PwdAlphabet
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdAlphabet} The decoded data structure.
 */
export function _decode_PwdAlphabet(el: _Element) {
    if (!_cached_decoder_for_PwdAlphabet) {
        _cached_decoder_for_PwdAlphabet = $._decodeSequenceOf<UTF8String>(
            () => $._decodeUTF8String
        );
    }
    return _cached_decoder_for_PwdAlphabet(el);
}
/**
 * @summary Encodes a(n) PwdAlphabet into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdAlphabet, encoded as an ASN.1 Element.
 */
export function _encode_PwdAlphabet(
    value: PwdAlphabet,
    elGetter: $.ASN1Encoder<PwdAlphabet>
) {
    if (!_cached_encoder_for_PwdAlphabet) {
        _cached_encoder_for_PwdAlphabet = $._encodeSequenceOf<UTF8String>(
            () => $._encodeUTF8String,
            $.BER
        );
    }
    return _cached_encoder_for_PwdAlphabet(value, elGetter);
}

/**
 * @summary id_asx_pwdAlphabetDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-pwdAlphabetDescription    OBJECT IDENTIFIER ::= {id-asx 2}
 * ```
 *
 * @constant
 */
export const id_asx_pwdAlphabetDescription: OBJECT_IDENTIFIER = new _OID(
    [2],
    id_asx
);

/**
 * @summary pwdAlphabetDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdAlphabetDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "Password Alphabet Description"
 *   DIRECTORY SYNTAX  PwdAlphabet
 *   ID                id-asx-pwdAlphabetDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const pwdAlphabetDescription: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_PwdAlphabet,
    },
    encoderFor: {
        "&Type": _encode_PwdAlphabet,
    },
    "&ldapDesc": "Password Alphabet Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_pwdAlphabetDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdAlphabet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdAlphabet                OBJECT IDENTIFIER ::= {id-oa 36}
 * ```
 *
 * @constant
 */
export const id_oa_pwdAlphabet: OBJECT_IDENTIFIER = new _OID([36], id_oa);

/**
 * @summary pwdAlphabet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdAlphabet ATTRIBUTE ::= {
 *   WITH SYNTAX              PwdAlphabet
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              pwdAlphabetDescription.&id
 *   LDAP-NAME                {"pwdAlphabet"}
 *   ID                       id-oa-pwdAlphabet }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdAlphabet: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PwdAlphabet,
    },
    encoderFor: {
        "&Type": _encode_PwdAlphabet,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": pwdAlphabetDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdAlphabet /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdDictionaries
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdDictionaries            OBJECT IDENTIFIER ::= {id-oa 37}
 * ```
 *
 * @constant
 */
export const id_oa_pwdDictionaries: OBJECT_IDENTIFIER = new _OID([37], id_oa);

/**
 * @summary pwdDictionaries
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdDictionaries ATTRIBUTE ::= {
 *   SUBTYPE OF               uri
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"pwdDictionaries"}
 *   ID                       id-oa-pwdDictionaries }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdDictionaries: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": uri /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdDictionaries /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdExpiryWarning
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdExpiryWarning           OBJECT IDENTIFIER ::= {id-oa 38}
 * ```
 *
 * @constant
 */
export const id_oa_pwdExpiryWarning: OBJECT_IDENTIFIER = new _OID([38], id_oa);

/**
 * @summary pwdExpiryWarning
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdExpiryWarning ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER (1..MAX)
 *   EQUALITY MATCHING RULE   integerMatch
 *   ORDERING MATCHING RULE   integerOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"pwdExpiryWarning"}
 *   ID                       id-oa-pwdExpiryWarning }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdExpiryWarning: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdExpiryWarning /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdGraces
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdGraces                  OBJECT IDENTIFIER ::= {id-oa 39}
 * ```
 *
 * @constant
 */
export const id_oa_pwdGraces: OBJECT_IDENTIFIER = new _OID([39], id_oa);

/**
 * @summary pwdGraces
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdGraces ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER (0..MAX)
 *   EQUALITY MATCHING RULE   integerMatch
 *   ORDERING MATCHING RULE   integerOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"pwdGraces"}
 *   ID                       id-oa-pwdGraces }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdGraces: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdGraces /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdFailureDuration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdFailureDuration         OBJECT IDENTIFIER ::= {id-oa 40}
 * ```
 *
 * @constant
 */
export const id_oa_pwdFailureDuration: OBJECT_IDENTIFIER = new _OID(
    [40],
    id_oa
);

/**
 * @summary pwdFailureDuration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdFailureDuration ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER (0..MAX)
 *   EQUALITY MATCHING RULE   integerMatch
 *   ORDERING MATCHING RULE   integerOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"pwdFailureDuration"}
 *   ID                       id-oa-pwdFailureDuration }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdFailureDuration: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdFailureDuration /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdLockoutDuration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdLockoutDuration         OBJECT IDENTIFIER ::= {id-oa 41}
 * ```
 *
 * @constant
 */
export const id_oa_pwdLockoutDuration: OBJECT_IDENTIFIER = new _OID(
    [41],
    id_oa
);

/**
 * @summary pwdLockoutDuration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdLockoutDuration ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER (0..MAX)
 *   EQUALITY MATCHING RULE   integerMatch
 *   ORDERING MATCHING RULE   integerOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"pwdLockoutDuration"}
 *   ID                       id-oa-pwdLockoutDuration }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdLockoutDuration: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdLockoutDuration /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdMaxFailures
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdMaxFailures             OBJECT IDENTIFIER ::= {id-oa 42}
 * ```
 *
 * @constant
 */
export const id_oa_pwdMaxFailures: OBJECT_IDENTIFIER = new _OID([42], id_oa);

/**
 * @summary pwdMaxFailures
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdMaxFailures ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER (1..MAX)
 *   EQUALITY MATCHING RULE   integerMatch
 *   ORDERING MATCHING RULE   integerOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"pwdMaxFailures"}
 *   ID                       id-oa-pwdMaxFailures }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdMaxFailures: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdMaxFailures /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdMaxTimeInHistory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdMaxTimeInHistory        OBJECT IDENTIFIER ::= {id-oa 43}
 * ```
 *
 * @constant
 */
export const id_oa_pwdMaxTimeInHistory: OBJECT_IDENTIFIER = new _OID(
    [43],
    id_oa
);

/**
 * @summary pwdMaxTimeInHistory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdMaxTimeInHistory ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER (1..MAX)
 *   EQUALITY MATCHING RULE   integerMatch
 *   ORDERING MATCHING RULE   integerOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"pwdMaxTimeInHistory"}
 *   ID                       id-oa-pwdMaxTimeInHistory }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdMaxTimeInHistory: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdMaxTimeInHistory /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdMinTimeInHistory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdMinTimeInHistory        OBJECT IDENTIFIER ::= {id-oa 44}
 * ```
 *
 * @constant
 */
export const id_oa_pwdMinTimeInHistory: OBJECT_IDENTIFIER = new _OID(
    [44],
    id_oa
);

/**
 * @summary pwdMinTimeInHistory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdMinTimeInHistory ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER (0..MAX)
 *   EQUALITY MATCHING RULE   integerMatch
 *   ORDERING MATCHING RULE   integerOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"pwdMinTimeInHistory"}
 *   ID                       id-oa-pwdMinTimeInHistory }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdMinTimeInHistory: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdMinTimeInHistory /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdHistorySlots
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdHistorySlots            OBJECT IDENTIFIER ::= {id-oa 45}
 * ```
 *
 * @constant
 */
export const id_oa_pwdHistorySlots: OBJECT_IDENTIFIER = new _OID([45], id_oa);

/**
 * @summary pwdHistorySlots
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdHistorySlots ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER (2..MAX)
 *   EQUALITY MATCHING RULE   integerMatch
 *   ORDERING MATCHING RULE   integerOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"pwdHistorySlots"}
 *   ID                       id-oa-pwdHistorySlots }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdHistorySlots: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdHistorySlots /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdRecentlyExpiredDuration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdRecentlyExpiredDuration OBJECT IDENTIFIER ::= {id-oa 46}
 * ```
 *
 * @constant
 */
export const id_oa_pwdRecentlyExpiredDuration: OBJECT_IDENTIFIER = new _OID(
    [46],
    id_oa
);

/**
 * @summary pwdRecentlyExpiredDuration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdRecentlyExpiredDuration ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER (0..MAX)
 *   EQUALITY MATCHING RULE   integerMatch
 *   ORDERING MATCHING RULE   integerOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"pwdRecentlyExpiredDuration"}
 *   ID                       id-oa-pwdRecentlyExpiredDuration }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdRecentlyExpiredDuration: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdRecentlyExpiredDuration /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type PwdEncAlg<> = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_PwdEncAlg: $.ASN1Decoder<PwdEncAlg> | null = null;
let _cached_encoder_for_PwdEncAlg: $.ASN1Encoder<PwdEncAlg> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PwdEncAlg
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdEncAlg} The decoded data structure.
 */
export function _decode_PwdEncAlg(el: _Element) {
    if (!_cached_decoder_for_PwdEncAlg) {
        _cached_decoder_for_PwdEncAlg = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_PwdEncAlg(el);
}
/**
 * @summary Encodes a(n) PwdEncAlg into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdEncAlg, encoded as an ASN.1 Element.
 */
export function _encode_PwdEncAlg(
    value: PwdEncAlg,
    elGetter: $.ASN1Encoder<PwdEncAlg>
) {
    if (!_cached_encoder_for_PwdEncAlg) {
        _cached_encoder_for_PwdEncAlg = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_PwdEncAlg(value, elGetter);
}

/**
 * @summary id_asx_pwdEncAlgDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-pwdEncAlgDescription      OBJECT IDENTIFIER ::= {id-asx 3}
 * ```
 *
 * @constant
 */
export const id_asx_pwdEncAlgDescription: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_asx
);

/**
 * @summary pwdEncAlgDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdEncAlgDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "Password Alphabet Description"
 *   DIRECTORY SYNTAX  PwdEncAlg
 *   ID                id-asx-pwdEncAlgDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const pwdEncAlgDescription: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_PwdEncAlg,
    },
    encoderFor: {
        "&Type": _encode_PwdEncAlg,
    },
    "&ldapDesc": "Password Alphabet Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_pwdEncAlgDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_pwdEncAlgMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-pwdEncAlgMatch             OBJECT IDENTIFIER ::= {id-mr 73}
 * ```
 *
 * @constant
 */
export const id_mr_pwdEncAlgMatch: OBJECT_IDENTIFIER = new _OID([73], id_mr);

/**
 * @summary pwdEncAlgMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdEncAlgMatch MATCHING-RULE ::= {
 *   SYNTAX       PwdEncAlg
 *   LDAP-SYNTAX  pwdEncAlgDescription.&id
 *   LDAP-NAME    {"pwdEncAlgMatch"}
 *   ID           id-mr-pwdEncAlgMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const pwdEncAlgMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_PwdEncAlg,
    },
    encoderFor: {
        "&AssertionType": _encode_PwdEncAlg,
    },
    "&ldapSyntax": pwdEncAlgDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_pwdEncAlgMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_oa_pwdEncAlg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdEncAlg                  OBJECT IDENTIFIER ::= {id-oa 47}
 * ```
 *
 * @constant
 */
export const id_oa_pwdEncAlg: OBJECT_IDENTIFIER = new _OID([47], id_oa);

/**
 * @summary pwdEncAlg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdEncAlg ATTRIBUTE ::= {
 *   WITH SYNTAX              PwdEncAlg
 *   EQUALITY MATCHING RULE   pwdEncAlgMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              pwdEncAlgDescription.&id
 *   LDAP-NAME                {"pwdEncAlg"}
 *   ID                       id-oa-pwdEncAlg }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const pwdEncAlg: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PwdEncAlg,
    },
    encoderFor: {
        "&Type": _encode_PwdEncAlg,
    },
    "&equality-match": pwdEncAlgMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": pwdEncAlgDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_pwdEncAlg /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oa_userPwdHistory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-userPwdHistory             OBJECT IDENTIFIER ::= {id-oa 28}
 * ```
 *
 * @constant
 */
export const id_oa_userPwdHistory: OBJECT_IDENTIFIER = new _OID([28], id_oa);

/**
 * @summary id_oa_userPwdRecentlyExpired
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-userPwdRecentlyExpired     OBJECT IDENTIFIER ::= {id-oa 29}
 * ```
 *
 * @constant
 */
export const id_oa_userPwdRecentlyExpired: OBJECT_IDENTIFIER = new _OID(
    [29],
    id_oa
);

/**
 * @summary userPwdRecentlyExpired
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwdRecentlyExpired ATTRIBUTE ::= pwdRecentlyExpired{userPwd,id-oa-userPwdRecentlyExpired}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const userPwdRecentlyExpired: ATTRIBUTE = pwdRecentlyExpired(
    userPwd,
    id_oa_userPwdRecentlyExpired
);

/**
 * @summary id_mr_userPwdHistoryMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-userPwdHistoryMatch        OBJECT IDENTIFIER ::= {id-mr 72}
 * ```
 *
 * @constant
 */
export const id_mr_userPwdHistoryMatch: OBJECT_IDENTIFIER = new _OID(
    [72],
    id_mr
);

/**
 * @summary userPwdHistoryMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwdHistoryMatch MATCHING-RULE ::= pwdHistoryMatch{userPwd,id-mr-userPwdHistoryMatch}
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const userPwdHistoryMatch: MATCHING_RULE = pwdHistoryMatch(
    userPwd,
    id_mr_userPwdHistoryMatch
);

/**
 * @summary userPwdHistory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwdHistory ATTRIBUTE ::= pwdHistory{userPwd,userPwdHistoryMatch,id-oa-userPwdHistory}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const userPwdHistory: ATTRIBUTE = pwdHistory(
    userPwd,
    userPwdHistoryMatch,
    id_oa_userPwdHistory
);

/* END_MODULE PasswordPolicy */
/* eslint-enable */
