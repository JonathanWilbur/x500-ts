/**
 * @module PkiPmiExternalDataTypes
 * @summary The ASN.1 module `PkiPmiExternalDataTypes`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.pkiPmiExternalDataTypes.9
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
    BMPString,
    INTEGER,
    NumericString,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    PrintableString,
    TeletexString,
    UniversalString,
    UTF8String,
    VisibleString,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { EXTENSION } from "./AuthenticationFramework";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "./CertificateExtensions";
import {
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from "./SelectedAttributeTypes";
import { intSecurity } from "./UsefulDefinitions";
export { EXTENSION } from "./AuthenticationFramework";
export {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "./CertificateExtensions";
export {
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from "./SelectedAttributeTypes";
export { intSecurity } from "./UsefulDefinitions";

/**
 * @summary DisplayText
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DisplayText  ::=  CHOICE {
 *   visibleString  VisibleString(SIZE (1..200)),
 *   bmpString      BMPString(SIZE (1..200)),
 *   utf8String     UTF8String(SIZE (1..200)) }
 * ```
 */
export type DisplayText =
    | { visibleString: VisibleString } /* CHOICE_ALT_ROOT */
    | { bmpString: BMPString } /* CHOICE_ALT_ROOT */
    | { utf8String: UTF8String } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_DisplayText: $.ASN1Decoder<DisplayText> | null = null;
let _cached_encoder_for_DisplayText: $.ASN1Encoder<DisplayText> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DisplayText
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DisplayText} The decoded data structure.
 */
export function _decode_DisplayText(el: _Element) {
    if (!_cached_decoder_for_DisplayText) {
        _cached_decoder_for_DisplayText = $._decode_inextensible_choice<
            DisplayText
        >({
            "UNIVERSAL 26": ["visibleString", $._decodeVisibleString],
            "UNIVERSAL 30": ["bmpString", $._decodeBMPString],
            "UNIVERSAL 12": ["utf8String", $._decodeUTF8String],
        });
    }
    return _cached_decoder_for_DisplayText(el);
}
/**
 * @summary Encodes a(n) DisplayText into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisplayText, encoded as an ASN.1 Element.
 */
export function _encode_DisplayText(
    value: DisplayText,
    elGetter: $.ASN1Encoder<DisplayText>
) {
    if (!_cached_encoder_for_DisplayText) {
        _cached_encoder_for_DisplayText = $._encode_choice<DisplayText>(
            {
                visibleString: $._encodeVisibleString,
                bmpString: $._encodeBMPString,
                utf8String: $._encodeUTF8String,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DisplayText(value, elGetter);
}

/**
 * @summary NoticeReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoticeReference ::= SEQUENCE {
 *   organization   DisplayText,
 *   noticeNumbers  SEQUENCE OF INTEGER }
 * ```
 *
 * @class
 */
export class NoticeReference {
    constructor(
        /**
         * @summary `organization`.
         * @public
         * @readonly
         */
        readonly organization: DisplayText,
        /**
         * @summary `noticeNumbers`.
         * @public
         * @readonly
         */
        readonly noticeNumbers: INTEGER[]
    ) {}

    /**
     * @summary Restructures an object into a NoticeReference
     * @description
     *
     * This takes an `object` and converts it to a `NoticeReference`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NoticeReference`.
     * @returns {NoticeReference}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof NoticeReference]: NoticeReference[_K] }>
    ): NoticeReference {
        return new NoticeReference(_o.organization, _o.noticeNumbers);
    }
}
/**
 * @summary The Leading Root Component Types of NoticeReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NoticeReference: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "organization",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "noticeNumbers",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of NoticeReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NoticeReference: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of NoticeReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NoticeReference: $.ComponentSpec[] = [];
let _cached_decoder_for_NoticeReference: $.ASN1Decoder<
    NoticeReference
> | null = null;
let _cached_encoder_for_NoticeReference: $.ASN1Encoder<
    NoticeReference
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) NoticeReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NoticeReference} The decoded data structure.
 */
export function _decode_NoticeReference(el: _Element) {
    if (!_cached_decoder_for_NoticeReference) {
        _cached_decoder_for_NoticeReference = function (
            el: _Element
        ): NoticeReference {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "NoticeReference contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "organization";
            sequence[1].name = "noticeNumbers";
            let organization!: DisplayText;
            let noticeNumbers!: INTEGER[];
            organization = _decode_DisplayText(sequence[0]);
            noticeNumbers = $._decodeSequenceOf<INTEGER>(
                () => $._decodeInteger
            )(sequence[1]);
            return new NoticeReference(organization, noticeNumbers);
        };
    }
    return _cached_decoder_for_NoticeReference(el);
}
/**
 * @summary Encodes a(n) NoticeReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoticeReference, encoded as an ASN.1 Element.
 */
export function _encode_NoticeReference(
    value: NoticeReference,
    elGetter: $.ASN1Encoder<NoticeReference>
) {
    if (!_cached_encoder_for_NoticeReference) {
        _cached_encoder_for_NoticeReference = function (
            value: NoticeReference,
            elGetter: $.ASN1Encoder<NoticeReference>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DisplayText(
                            value.organization,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSequenceOf<INTEGER>(
                            () => $._encodeInteger,
                            $.BER
                        )(value.noticeNumbers, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NoticeReference(value, elGetter);
}

/**
 * @summary UserNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserNotice ::= SEQUENCE {
 *   noticeRef     NoticeReference OPTIONAL,
 *   explicitText  DisplayText OPTIONAL }
 * ```
 *
 * @class
 */
export class UserNotice {
    constructor(
        /**
         * @summary `noticeRef`.
         * @public
         * @readonly
         */
        readonly noticeRef: OPTIONAL<NoticeReference>,
        /**
         * @summary `explicitText`.
         * @public
         * @readonly
         */
        readonly explicitText: OPTIONAL<DisplayText>
    ) {}

    /**
     * @summary Restructures an object into a UserNotice
     * @description
     *
     * This takes an `object` and converts it to a `UserNotice`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserNotice`.
     * @returns {UserNotice}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof UserNotice]: UserNotice[_K] }>
    ): UserNotice {
        return new UserNotice(_o.noticeRef, _o.explicitText);
    }
}
/**
 * @summary The Leading Root Component Types of UserNotice
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UserNotice: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "noticeRef",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "explicitText",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of UserNotice
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UserNotice: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of UserNotice
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UserNotice: $.ComponentSpec[] = [];
let _cached_decoder_for_UserNotice: $.ASN1Decoder<UserNotice> | null = null;
let _cached_encoder_for_UserNotice: $.ASN1Encoder<UserNotice> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UserNotice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserNotice} The decoded data structure.
 */
export function _decode_UserNotice(el: _Element) {
    if (!_cached_decoder_for_UserNotice) {
        _cached_decoder_for_UserNotice = function (el: _Element): UserNotice {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let noticeRef: OPTIONAL<NoticeReference>;
            let explicitText: OPTIONAL<DisplayText>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                noticeRef: (_el: _Element): void => {
                    noticeRef = _decode_NoticeReference(_el);
                },
                explicitText: (_el: _Element): void => {
                    explicitText = _decode_DisplayText(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UserNotice,
                _extension_additions_list_spec_for_UserNotice,
                _root_component_type_list_2_spec_for_UserNotice,
                undefined
            );
            return new UserNotice(
                /* SEQUENCE_CONSTRUCTOR_CALL */ noticeRef,
                explicitText
            );
        };
    }
    return _cached_decoder_for_UserNotice(el);
}
/**
 * @summary Encodes a(n) UserNotice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserNotice, encoded as an ASN.1 Element.
 */
export function _encode_UserNotice(
    value: UserNotice,
    elGetter: $.ASN1Encoder<UserNotice>
) {
    if (!_cached_encoder_for_UserNotice) {
        _cached_encoder_for_UserNotice = function (
            value: UserNotice,
            elGetter: $.ASN1Encoder<UserNotice>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.noticeRef === undefined
                            ? undefined
                            : _encode_NoticeReference(value.noticeRef, $.BER),
                        /* IF_ABSENT  */ value.explicitText === undefined
                            ? undefined
                            : _encode_DisplayText(value.explicitText, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UserNotice(value, elGetter);
}

/**
 * @summary AccessDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessDescription ::= SEQUENCE {
 *   accessMethod    OBJECT IDENTIFIER,
 *   accessLocation  GeneralName }
 * ```
 *
 * @class
 */
export class AccessDescription {
    constructor(
        /**
         * @summary `accessMethod`.
         * @public
         * @readonly
         */
        readonly accessMethod: OBJECT_IDENTIFIER,
        /**
         * @summary `accessLocation`.
         * @public
         * @readonly
         */
        readonly accessLocation: GeneralName
    ) {}

    /**
     * @summary Restructures an object into a AccessDescription
     * @description
     *
     * This takes an `object` and converts it to a `AccessDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessDescription`.
     * @returns {AccessDescription}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AccessDescription]: AccessDescription[_K] }>
    ): AccessDescription {
        return new AccessDescription(_o.accessMethod, _o.accessLocation);
    }
}
/**
 * @summary The Leading Root Component Types of AccessDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AccessDescription: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "accessMethod",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "accessLocation",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AccessDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AccessDescription: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AccessDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AccessDescription: $.ComponentSpec[] = [];
let _cached_decoder_for_AccessDescription: $.ASN1Decoder<
    AccessDescription
> | null = null;
let _cached_encoder_for_AccessDescription: $.ASN1Encoder<
    AccessDescription
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AccessDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccessDescription} The decoded data structure.
 */
export function _decode_AccessDescription(el: _Element) {
    if (!_cached_decoder_for_AccessDescription) {
        _cached_decoder_for_AccessDescription = function (
            el: _Element
        ): AccessDescription {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AccessDescription contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "accessMethod";
            sequence[1].name = "accessLocation";
            let accessMethod!: OBJECT_IDENTIFIER;
            let accessLocation!: GeneralName;
            accessMethod = $._decodeObjectIdentifier(sequence[0]);
            accessLocation = _decode_GeneralName(sequence[1]);
            return new AccessDescription(accessMethod, accessLocation);
        };
    }
    return _cached_decoder_for_AccessDescription(el);
}
/**
 * @summary Encodes a(n) AccessDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessDescription, encoded as an ASN.1 Element.
 */
export function _encode_AccessDescription(
    value: AccessDescription,
    elGetter: $.ASN1Encoder<AccessDescription>
) {
    if (!_cached_encoder_for_AccessDescription) {
        _cached_encoder_for_AccessDescription = function (
            value: AccessDescription,
            elGetter: $.ASN1Encoder<AccessDescription>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.accessMethod,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_GeneralName(
                            value.accessLocation,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AccessDescription(value, elGetter);
}

export type AuthorityInfoAccessSyntax<> = AccessDescription[]; // SequenceOfType
let _cached_decoder_for_AuthorityInfoAccessSyntax: $.ASN1Decoder<
    AuthorityInfoAccessSyntax
> | null = null;
let _cached_encoder_for_AuthorityInfoAccessSyntax: $.ASN1Encoder<
    AuthorityInfoAccessSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AuthorityInfoAccessSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorityInfoAccessSyntax} The decoded data structure.
 */
export function _decode_AuthorityInfoAccessSyntax(el: _Element) {
    if (!_cached_decoder_for_AuthorityInfoAccessSyntax) {
        _cached_decoder_for_AuthorityInfoAccessSyntax = $._decodeSequenceOf<
            AccessDescription
        >(() => _decode_AccessDescription);
    }
    return _cached_decoder_for_AuthorityInfoAccessSyntax(el);
}
/**
 * @summary Encodes a(n) AuthorityInfoAccessSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorityInfoAccessSyntax, encoded as an ASN.1 Element.
 */
export function _encode_AuthorityInfoAccessSyntax(
    value: AuthorityInfoAccessSyntax,
    elGetter: $.ASN1Encoder<AuthorityInfoAccessSyntax>
) {
    if (!_cached_encoder_for_AuthorityInfoAccessSyntax) {
        _cached_encoder_for_AuthorityInfoAccessSyntax = $._encodeSequenceOf<
            AccessDescription
        >(() => _encode_AccessDescription, $.BER);
    }
    return _cached_encoder_for_AuthorityInfoAccessSyntax(value, elGetter);
}

/**
 * @summary id_pkix
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkix                   OBJECT IDENTIFIER ::= { intSecurity mechanisms(5) pkix(7) }
 * ```
 *
 * @constant
 */
export const id_pkix: OBJECT_IDENTIFIER = new _OID(
    [/* mechanisms */ 5, /* pkix */ 7],
    intSecurity
);

/**
 * @summary id_pe
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pe                     OBJECT IDENTIFIER ::= { id-pkix 1 }
 * ```
 *
 * @constant
 */
export const id_pe: OBJECT_IDENTIFIER = new _OID([1], id_pkix);

/**
 * @summary id_pe_authorityInfoAccess
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pe-authorityInfoAccess OBJECT IDENTIFIER ::= { id-pe 1 }
 * ```
 *
 * @constant
 */
export const id_pe_authorityInfoAccess: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_pe
);

/**
 * @summary authorityInfoAccess
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authorityInfoAccess EXTENSION ::= {
 *   SYNTAX         AuthorityInfoAccessSyntax
 *   IDENTIFIED BY  id-pe-authorityInfoAccess }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const authorityInfoAccess: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AuthorityInfoAccessSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AuthorityInfoAccessSyntax,
    },
    "&id": id_pe_authorityInfoAccess /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type SubjectInfoAccessSyntax<> = AccessDescription[]; // SequenceOfType
let _cached_decoder_for_SubjectInfoAccessSyntax: $.ASN1Decoder<
    SubjectInfoAccessSyntax
> | null = null;
let _cached_encoder_for_SubjectInfoAccessSyntax: $.ASN1Encoder<
    SubjectInfoAccessSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SubjectInfoAccessSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectInfoAccessSyntax} The decoded data structure.
 */
export function _decode_SubjectInfoAccessSyntax(el: _Element) {
    if (!_cached_decoder_for_SubjectInfoAccessSyntax) {
        _cached_decoder_for_SubjectInfoAccessSyntax = $._decodeSequenceOf<
            AccessDescription
        >(() => _decode_AccessDescription);
    }
    return _cached_decoder_for_SubjectInfoAccessSyntax(el);
}
/**
 * @summary Encodes a(n) SubjectInfoAccessSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectInfoAccessSyntax, encoded as an ASN.1 Element.
 */
export function _encode_SubjectInfoAccessSyntax(
    value: SubjectInfoAccessSyntax,
    elGetter: $.ASN1Encoder<SubjectInfoAccessSyntax>
) {
    if (!_cached_encoder_for_SubjectInfoAccessSyntax) {
        _cached_encoder_for_SubjectInfoAccessSyntax = $._encodeSequenceOf<
            AccessDescription
        >(() => _encode_AccessDescription, $.BER);
    }
    return _cached_encoder_for_SubjectInfoAccessSyntax(value, elGetter);
}

/**
 * @summary id_pe_subjectInfoAccess
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pe-subjectInfoAccess   OBJECT IDENTIFIER ::= { id-pe 11 }
 * ```
 *
 * @constant
 */
export const id_pe_subjectInfoAccess: OBJECT_IDENTIFIER = new _OID([11], id_pe);

/**
 * @summary subjectInfoAccess
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subjectInfoAccess EXTENSION ::= {
 *   SYNTAX         SubjectInfoAccessSyntax
 *   IDENTIFIED BY  id-pe-subjectInfoAccess }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const subjectInfoAccess: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_SubjectInfoAccessSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_SubjectInfoAccessSyntax,
    },
    "&id": id_pe_subjectInfoAccess /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ad
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ad                     OBJECT IDENTIFIER ::= { id-pkix 48 }
 * ```
 *
 * @constant
 */
export const id_ad: OBJECT_IDENTIFIER = new _OID([48], id_pkix);

/**
 * @summary id_ad_caIssuers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ad-caIssuers           OBJECT IDENTIFIER ::= { id-ad 2 }
 * ```
 *
 * @constant
 */
export const id_ad_caIssuers: OBJECT_IDENTIFIER = new _OID([2], id_ad);

/**
 * @summary id_ad_ocsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ad-ocsp                OBJECT IDENTIFIER ::= { id-ad 1 }
 * ```
 *
 * @constant
 */
export const id_ad_ocsp: OBJECT_IDENTIFIER = new _OID([1], id_ad);

/**
 * @summary G3FacsimileNonBasicParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * G3FacsimileNonBasicParameters  ::=  BIT STRING {
 *   two-dimensional(8), -- As defined in ITU-T Recommendation T.30
 *   fine-resolution(9),
 *   unlimited-length(20), -- These bit values are chosen such that when
 *   b4-length(21), -- encoded using ASN.1 Basic Encoding Rules
 *   a3-width(22), -- the resulting octets have the same values
 *   b4-width(23), -- as for T.30 encoding
 *   t6-coding(25),
 *   uncompressed(30), -- Trailing zero bits are not significant
 *   width-middle-864-of-1728(37), -- It is recommended that implementations
 *   width-middle-1216-of-1728(38), -- should not encode more than 32 bits unless
 *   resolution-type(44), -- higher numbered bits are non-zero
 *   resolution-400x400(45), resolution-300x300(46), resolution-8x15(47),
 *   edi(49), dtm(50), bft(51), mixed-mode(58), character-mode(60),
 *   twelve-bits(65), preferred-huffmann(66), full-colour(67), jpeg(68),
 *   processable-mode-26(71)}
 * ```
 */
export type G3FacsimileNonBasicParameters = BIT_STRING;
/**
 * @summary G3FacsimileNonBasicParameters_two_dimensional
 * @constant
 */
export const G3FacsimileNonBasicParameters_two_dimensional: number = 8; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_fine_resolution
 * @constant
 */
export const G3FacsimileNonBasicParameters_fine_resolution: number = 9; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_unlimited_length
 * @constant
 */
export const G3FacsimileNonBasicParameters_unlimited_length: number = 20; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_b4_length
 * @constant
 */
export const G3FacsimileNonBasicParameters_b4_length: number = 21; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_a3_width
 * @constant
 */
export const G3FacsimileNonBasicParameters_a3_width: number = 22; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_b4_width
 * @constant
 */
export const G3FacsimileNonBasicParameters_b4_width: number = 23; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_t6_coding
 * @constant
 */
export const G3FacsimileNonBasicParameters_t6_coding: number = 25; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_uncompressed
 * @constant
 */
export const G3FacsimileNonBasicParameters_uncompressed: number = 30; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_width_middle_864_of_1728
 * @constant
 */
export const G3FacsimileNonBasicParameters_width_middle_864_of_1728: number = 37; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_width_middle_1216_of_1728
 * @constant
 */
export const G3FacsimileNonBasicParameters_width_middle_1216_of_1728: number = 38; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_resolution_type
 * @constant
 */
export const G3FacsimileNonBasicParameters_resolution_type: number = 44; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_resolution_400x400
 * @constant
 */
export const G3FacsimileNonBasicParameters_resolution_400x400: number = 45; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_resolution_300x300
 * @constant
 */
export const G3FacsimileNonBasicParameters_resolution_300x300: number = 46; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_resolution_8x15
 * @constant
 */
export const G3FacsimileNonBasicParameters_resolution_8x15: number = 47; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_edi
 * @constant
 */
export const G3FacsimileNonBasicParameters_edi: number = 49; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_dtm
 * @constant
 */
export const G3FacsimileNonBasicParameters_dtm: number = 50; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_bft
 * @constant
 */
export const G3FacsimileNonBasicParameters_bft: number = 51; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_mixed_mode
 * @constant
 */
export const G3FacsimileNonBasicParameters_mixed_mode: number = 58; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_character_mode
 * @constant
 */
export const G3FacsimileNonBasicParameters_character_mode: number = 60; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_twelve_bits
 * @constant
 */
export const G3FacsimileNonBasicParameters_twelve_bits: number = 65; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_preferred_huffmann
 * @constant
 */
export const G3FacsimileNonBasicParameters_preferred_huffmann: number = 66; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_full_colour
 * @constant
 */
export const G3FacsimileNonBasicParameters_full_colour: number = 67; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_jpeg
 * @constant
 */
export const G3FacsimileNonBasicParameters_jpeg: number = 68; /* LONG_NAMED_BIT */
/**
 * @summary G3FacsimileNonBasicParameters_processable_mode_26
 * @constant
 */
export const G3FacsimileNonBasicParameters_processable_mode_26: number = 71; /* LONG_NAMED_BIT */
let _cached_decoder_for_G3FacsimileNonBasicParameters: $.ASN1Decoder<
    G3FacsimileNonBasicParameters
> | null = null;
let _cached_encoder_for_G3FacsimileNonBasicParameters: $.ASN1Encoder<
    G3FacsimileNonBasicParameters
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) G3FacsimileNonBasicParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {G3FacsimileNonBasicParameters} The decoded data structure.
 */
export function _decode_G3FacsimileNonBasicParameters(el: _Element) {
    if (!_cached_decoder_for_G3FacsimileNonBasicParameters) {
        _cached_decoder_for_G3FacsimileNonBasicParameters = $._decodeBitString;
    }
    return _cached_decoder_for_G3FacsimileNonBasicParameters(el);
}
/**
 * @summary Encodes a(n) G3FacsimileNonBasicParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The G3FacsimileNonBasicParameters, encoded as an ASN.1 Element.
 */
export function _encode_G3FacsimileNonBasicParameters(
    value: G3FacsimileNonBasicParameters,
    elGetter: $.ASN1Encoder<G3FacsimileNonBasicParameters>
) {
    if (!_cached_encoder_for_G3FacsimileNonBasicParameters) {
        _cached_encoder_for_G3FacsimileNonBasicParameters = $._encodeBitString;
    }
    return _cached_encoder_for_G3FacsimileNonBasicParameters(value, elGetter);
}

/**
 * @summary CountryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CountryName  ::=  [APPLICATION 1]  CHOICE {
 *   x121-dcc-code         NumericString(SIZE (ub-country-name-numeric-length)),
 *   iso-3166-alpha2-code  PrintableString(SIZE (ub-country-name-alpha-length)) }
 * ```
 */
export type CountryName =
    | { x121_dcc_code: NumericString } /* CHOICE_ALT_ROOT */
    | { iso_3166_alpha2_code: PrintableString } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_CountryName: $.ASN1Decoder<CountryName> | null = null;
let _cached_encoder_for_CountryName: $.ASN1Encoder<CountryName> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CountryName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CountryName} The decoded data structure.
 */
export function _decode_CountryName(el: _Element) {
    if (!_cached_decoder_for_CountryName) {
        _cached_decoder_for_CountryName = $._decode_explicit<CountryName>(() =>
            $._decode_inextensible_choice<CountryName>({
                "UNIVERSAL 18": ["x121_dcc_code", $._decodeNumericString],
                "UNIVERSAL 19": [
                    "iso_3166_alpha2_code",
                    $._decodePrintableString,
                ],
            })
        );
    }
    return _cached_decoder_for_CountryName(el);
}
/**
 * @summary Encodes a(n) CountryName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CountryName, encoded as an ASN.1 Element.
 */
export function _encode_CountryName(
    value: CountryName,
    elGetter: $.ASN1Encoder<CountryName>
) {
    if (!_cached_encoder_for_CountryName) {
        _cached_encoder_for_CountryName = $._encode_explicit(
            _TagClass.application,
            1,
            () =>
                $._encode_choice<CountryName>(
                    {
                        x121_dcc_code: $._encodeNumericString,
                        iso_3166_alpha2_code: $._encodePrintableString,
                    },
                    $.BER
                ),
            $.BER
        );
    }
    return _cached_encoder_for_CountryName(value, elGetter);
}

/**
 * @summary AdministrationDomainName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdministrationDomainName  ::=  [APPLICATION 2]  CHOICE {
 *   numeric    NumericString(SIZE (0..ub-domain-name-length)),
 *   printable  PrintableString(SIZE (0..ub-domain-name-length)) }
 * ```
 */
export type AdministrationDomainName =
    | { numeric: NumericString } /* CHOICE_ALT_ROOT */
    | { printable: PrintableString } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_AdministrationDomainName: $.ASN1Decoder<
    AdministrationDomainName
> | null = null;
let _cached_encoder_for_AdministrationDomainName: $.ASN1Encoder<
    AdministrationDomainName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AdministrationDomainName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdministrationDomainName} The decoded data structure.
 */
export function _decode_AdministrationDomainName(el: _Element) {
    if (!_cached_decoder_for_AdministrationDomainName) {
        _cached_decoder_for_AdministrationDomainName = $._decode_explicit<
            AdministrationDomainName
        >(() =>
            $._decode_inextensible_choice<AdministrationDomainName>({
                "UNIVERSAL 18": ["numeric", $._decodeNumericString],
                "UNIVERSAL 19": ["printable", $._decodePrintableString],
            })
        );
    }
    return _cached_decoder_for_AdministrationDomainName(el);
}
/**
 * @summary Encodes a(n) AdministrationDomainName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdministrationDomainName, encoded as an ASN.1 Element.
 */
export function _encode_AdministrationDomainName(
    value: AdministrationDomainName,
    elGetter: $.ASN1Encoder<AdministrationDomainName>
) {
    if (!_cached_encoder_for_AdministrationDomainName) {
        _cached_encoder_for_AdministrationDomainName = $._encode_explicit(
            _TagClass.application,
            2,
            () =>
                $._encode_choice<AdministrationDomainName>(
                    {
                        numeric: $._encodeNumericString,
                        printable: $._encodePrintableString,
                    },
                    $.BER
                ),
            $.BER
        );
    }
    return _cached_encoder_for_AdministrationDomainName(value, elGetter);
}

export type X121Address<> = NumericString; // NumericString
let _cached_decoder_for_X121Address: $.ASN1Decoder<X121Address> | null = null;
let _cached_encoder_for_X121Address: $.ASN1Encoder<X121Address> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) X121Address
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X121Address} The decoded data structure.
 */
export function _decode_X121Address(el: _Element) {
    if (!_cached_decoder_for_X121Address) {
        _cached_decoder_for_X121Address = $._decodeNumericString;
    }
    return _cached_decoder_for_X121Address(el);
}
/**
 * @summary Encodes a(n) X121Address into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X121Address, encoded as an ASN.1 Element.
 */
export function _encode_X121Address(
    value: X121Address,
    elGetter: $.ASN1Encoder<X121Address>
) {
    if (!_cached_encoder_for_X121Address) {
        _cached_encoder_for_X121Address = $._encodeNumericString;
    }
    return _cached_encoder_for_X121Address(value, elGetter);
}

export type NetworkAddress<> = X121Address; // DefinedType
let _cached_decoder_for_NetworkAddress: $.ASN1Decoder<
    NetworkAddress
> | null = null;
let _cached_encoder_for_NetworkAddress: $.ASN1Encoder<
    NetworkAddress
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) NetworkAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NetworkAddress} The decoded data structure.
 */
export function _decode_NetworkAddress(el: _Element) {
    if (!_cached_decoder_for_NetworkAddress) {
        _cached_decoder_for_NetworkAddress = _decode_X121Address;
    }
    return _cached_decoder_for_NetworkAddress(el);
}
/**
 * @summary Encodes a(n) NetworkAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkAddress, encoded as an ASN.1 Element.
 */
export function _encode_NetworkAddress(
    value: NetworkAddress,
    elGetter: $.ASN1Encoder<NetworkAddress>
) {
    if (!_cached_encoder_for_NetworkAddress) {
        _cached_encoder_for_NetworkAddress = _encode_X121Address;
    }
    return _cached_encoder_for_NetworkAddress(value, elGetter);
}

export type TerminalIdentifier<> = PrintableString; // PrintableString
let _cached_decoder_for_TerminalIdentifier: $.ASN1Decoder<
    TerminalIdentifier
> | null = null;
let _cached_encoder_for_TerminalIdentifier: $.ASN1Encoder<
    TerminalIdentifier
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TerminalIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminalIdentifier} The decoded data structure.
 */
export function _decode_TerminalIdentifier(el: _Element) {
    if (!_cached_decoder_for_TerminalIdentifier) {
        _cached_decoder_for_TerminalIdentifier = $._decodePrintableString;
    }
    return _cached_decoder_for_TerminalIdentifier(el);
}
/**
 * @summary Encodes a(n) TerminalIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminalIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_TerminalIdentifier(
    value: TerminalIdentifier,
    elGetter: $.ASN1Encoder<TerminalIdentifier>
) {
    if (!_cached_encoder_for_TerminalIdentifier) {
        _cached_encoder_for_TerminalIdentifier = $._encodePrintableString;
    }
    return _cached_encoder_for_TerminalIdentifier(value, elGetter);
}

/**
 * @summary PrivateDomainName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateDomainName  ::=  CHOICE {
 *   numeric    NumericString(SIZE (1..ub-domain-name-length)),
 *   printable  PrintableString(SIZE (1..ub-domain-name-length)) }
 * ```
 */
export type PrivateDomainName =
    | { numeric: NumericString } /* CHOICE_ALT_ROOT */
    | { printable: PrintableString } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_PrivateDomainName: $.ASN1Decoder<
    PrivateDomainName
> | null = null;
let _cached_encoder_for_PrivateDomainName: $.ASN1Encoder<
    PrivateDomainName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PrivateDomainName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateDomainName} The decoded data structure.
 */
export function _decode_PrivateDomainName(el: _Element) {
    if (!_cached_decoder_for_PrivateDomainName) {
        _cached_decoder_for_PrivateDomainName = $._decode_inextensible_choice<
            PrivateDomainName
        >({
            "UNIVERSAL 18": ["numeric", $._decodeNumericString],
            "UNIVERSAL 19": ["printable", $._decodePrintableString],
        });
    }
    return _cached_decoder_for_PrivateDomainName(el);
}
/**
 * @summary Encodes a(n) PrivateDomainName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateDomainName, encoded as an ASN.1 Element.
 */
export function _encode_PrivateDomainName(
    value: PrivateDomainName,
    elGetter: $.ASN1Encoder<PrivateDomainName>
) {
    if (!_cached_encoder_for_PrivateDomainName) {
        _cached_encoder_for_PrivateDomainName = $._encode_choice<
            PrivateDomainName
        >(
            {
                numeric: $._encodeNumericString,
                printable: $._encodePrintableString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_PrivateDomainName(value, elGetter);
}

export type OrganizationName<> = PrintableString; // PrintableString
let _cached_decoder_for_OrganizationName: $.ASN1Decoder<
    OrganizationName
> | null = null;
let _cached_encoder_for_OrganizationName: $.ASN1Encoder<
    OrganizationName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OrganizationName} The decoded data structure.
 */
export function _decode_OrganizationName(el: _Element) {
    if (!_cached_decoder_for_OrganizationName) {
        _cached_decoder_for_OrganizationName = $._decodePrintableString;
    }
    return _cached_decoder_for_OrganizationName(el);
}
/**
 * @summary Encodes a(n) OrganizationName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrganizationName, encoded as an ASN.1 Element.
 */
export function _encode_OrganizationName(
    value: OrganizationName,
    elGetter: $.ASN1Encoder<OrganizationName>
) {
    if (!_cached_encoder_for_OrganizationName) {
        _cached_encoder_for_OrganizationName = $._encodePrintableString;
    }
    return _cached_encoder_for_OrganizationName(value, elGetter);
}

export type NumericUserIdentifier<> = NumericString; // NumericString
let _cached_decoder_for_NumericUserIdentifier: $.ASN1Decoder<
    NumericUserIdentifier
> | null = null;
let _cached_encoder_for_NumericUserIdentifier: $.ASN1Encoder<
    NumericUserIdentifier
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) NumericUserIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumericUserIdentifier} The decoded data structure.
 */
export function _decode_NumericUserIdentifier(el: _Element) {
    if (!_cached_decoder_for_NumericUserIdentifier) {
        _cached_decoder_for_NumericUserIdentifier = $._decodeNumericString;
    }
    return _cached_decoder_for_NumericUserIdentifier(el);
}
/**
 * @summary Encodes a(n) NumericUserIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumericUserIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_NumericUserIdentifier(
    value: NumericUserIdentifier,
    elGetter: $.ASN1Encoder<NumericUserIdentifier>
) {
    if (!_cached_encoder_for_NumericUserIdentifier) {
        _cached_encoder_for_NumericUserIdentifier = $._encodeNumericString;
    }
    return _cached_encoder_for_NumericUserIdentifier(value, elGetter);
}

/**
 * @summary PersonalName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PersonalName ::= SET {
 *   surname               [0]  PrintableString(SIZE (1..ub-surname-length)),
 *   given-name
 *     [1]  PrintableString(SIZE (1..ub-given-name-length)) OPTIONAL,
 *   initials
 *     [2]  PrintableString(SIZE (1..ub-initials-length)) OPTIONAL,
 *   generation-qualifier
 *     [3]  PrintableString(SIZE (1..ub-generation-qualifier-length)) OPTIONAL }
 * ```
 *
 * @class
 */
export class PersonalName {
    constructor(
        /**
         * @summary `surname`.
         * @public
         * @readonly
         */
        readonly surname: PrintableString,
        /**
         * @summary `given_name`.
         * @public
         * @readonly
         */
        readonly given_name: OPTIONAL<PrintableString>,
        /**
         * @summary `initials`.
         * @public
         * @readonly
         */
        readonly initials: OPTIONAL<PrintableString>,
        /**
         * @summary `generation_qualifier`.
         * @public
         * @readonly
         */
        readonly generation_qualifier: OPTIONAL<PrintableString>
    ) {}

    /**
     * @summary Restructures an object into a PersonalName
     * @description
     *
     * This takes an `object` and converts it to a `PersonalName`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PersonalName`.
     * @returns {PersonalName}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof PersonalName]: PersonalName[_K] }>
    ): PersonalName {
        return new PersonalName(
            _o.surname,
            _o.given_name,
            _o.initials,
            _o.generation_qualifier
        );
    }
}
/**
 * @summary The Leading Root Component Types of PersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PersonalName: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "surname",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "given-name",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "initials",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "generation-qualifier",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of PersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PersonalName: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of PersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PersonalName: $.ComponentSpec[] = [];
let _cached_decoder_for_PersonalName: $.ASN1Decoder<PersonalName> | null = null;
let _cached_encoder_for_PersonalName: $.ASN1Encoder<PersonalName> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PersonalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PersonalName} The decoded data structure.
 */
export function _decode_PersonalName(el: _Element) {
    if (!_cached_decoder_for_PersonalName) {
        _cached_decoder_for_PersonalName = function (
            el: _Element
        ): PersonalName {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let surname!: PrintableString;
            let given_name: OPTIONAL<PrintableString>;
            let initials: OPTIONAL<PrintableString>;
            let generation_qualifier: OPTIONAL<PrintableString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                surname: (_el: _Element): void => {
                    surname = $._decode_explicit<PrintableString>(
                        () => $._decodePrintableString
                    )(_el);
                },
                "given-name": (_el: _Element): void => {
                    given_name = $._decode_explicit<PrintableString>(
                        () => $._decodePrintableString
                    )(_el);
                },
                initials: (_el: _Element): void => {
                    initials = $._decode_explicit<PrintableString>(
                        () => $._decodePrintableString
                    )(_el);
                },
                "generation-qualifier": (_el: _Element): void => {
                    generation_qualifier = $._decode_explicit<PrintableString>(
                        () => $._decodePrintableString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PersonalName,
                _extension_additions_list_spec_for_PersonalName,
                _root_component_type_list_2_spec_for_PersonalName,
                undefined
            );
            return new PersonalName(
                /* SET_CONSTRUCTOR_CALL */ surname,
                given_name,
                initials,
                generation_qualifier
            );
        };
    }
    return _cached_decoder_for_PersonalName(el);
}
/**
 * @summary Encodes a(n) PersonalName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PersonalName, encoded as an ASN.1 Element.
 */
export function _encode_PersonalName(
    value: PersonalName,
    elGetter: $.ASN1Encoder<PersonalName>
) {
    if (!_cached_encoder_for_PersonalName) {
        _cached_encoder_for_PersonalName = function (
            value: PersonalName,
            elGetter: $.ASN1Encoder<PersonalName>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodePrintableString,
                            $.BER
                        )(value.surname, $.BER),
                        /* IF_ABSENT  */ value.given_name === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodePrintableString,
                                  $.BER
                              )(value.given_name, $.BER),
                        /* IF_ABSENT  */ value.initials === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodePrintableString,
                                  $.BER
                              )(value.initials, $.BER),
                        /* IF_ABSENT  */ value.generation_qualifier ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodePrintableString,
                                  $.BER
                              )(value.generation_qualifier, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PersonalName(value, elGetter);
}

export type OrganizationalUnitName<> = PrintableString; // PrintableString
let _cached_decoder_for_OrganizationalUnitName: $.ASN1Decoder<
    OrganizationalUnitName
> | null = null;
let _cached_encoder_for_OrganizationalUnitName: $.ASN1Encoder<
    OrganizationalUnitName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OrganizationalUnitName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OrganizationalUnitName} The decoded data structure.
 */
export function _decode_OrganizationalUnitName(el: _Element) {
    if (!_cached_decoder_for_OrganizationalUnitName) {
        _cached_decoder_for_OrganizationalUnitName = $._decodePrintableString;
    }
    return _cached_decoder_for_OrganizationalUnitName(el);
}
/**
 * @summary Encodes a(n) OrganizationalUnitName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrganizationalUnitName, encoded as an ASN.1 Element.
 */
export function _encode_OrganizationalUnitName(
    value: OrganizationalUnitName,
    elGetter: $.ASN1Encoder<OrganizationalUnitName>
) {
    if (!_cached_encoder_for_OrganizationalUnitName) {
        _cached_encoder_for_OrganizationalUnitName = $._encodePrintableString;
    }
    return _cached_encoder_for_OrganizationalUnitName(value, elGetter);
}

export type OrganizationalUnitNames<> = OrganizationalUnitName[]; // SequenceOfType
let _cached_decoder_for_OrganizationalUnitNames: $.ASN1Decoder<
    OrganizationalUnitNames
> | null = null;
let _cached_encoder_for_OrganizationalUnitNames: $.ASN1Encoder<
    OrganizationalUnitNames
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OrganizationalUnitNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OrganizationalUnitNames} The decoded data structure.
 */
export function _decode_OrganizationalUnitNames(el: _Element) {
    if (!_cached_decoder_for_OrganizationalUnitNames) {
        _cached_decoder_for_OrganizationalUnitNames = $._decodeSequenceOf<
            OrganizationalUnitName
        >(() => _decode_OrganizationalUnitName);
    }
    return _cached_decoder_for_OrganizationalUnitNames(el);
}
/**
 * @summary Encodes a(n) OrganizationalUnitNames into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrganizationalUnitNames, encoded as an ASN.1 Element.
 */
export function _encode_OrganizationalUnitNames(
    value: OrganizationalUnitNames,
    elGetter: $.ASN1Encoder<OrganizationalUnitNames>
) {
    if (!_cached_encoder_for_OrganizationalUnitNames) {
        _cached_encoder_for_OrganizationalUnitNames = $._encodeSequenceOf<
            OrganizationalUnitName
        >(() => _encode_OrganizationalUnitName, $.BER);
    }
    return _cached_encoder_for_OrganizationalUnitNames(value, elGetter);
}

/**
 * @summary BuiltInStandardAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BuiltInStandardAttributes ::= SEQUENCE {
 *   country-name                CountryName OPTIONAL,
 *   administration-domain-name  AdministrationDomainName OPTIONAL,
 *   network-address             [0]  NetworkAddress OPTIONAL,
 *   -- see also extended-network-address
 *   terminal-identifier         [1]  TerminalIdentifier OPTIONAL,
 *   private-domain-name         [2]  PrivateDomainName OPTIONAL,
 *   organization-name           [3]  OrganizationName OPTIONAL,
 *   -- see also teletex-organization-name
 *   numeric-user-identifier     [4]  NumericUserIdentifier OPTIONAL,
 *   personal-name               [5]  PersonalName OPTIONAL,
 *   -- see also teletex-personal-name
 *   organizational-unit-names   [6]  OrganizationalUnitNames OPTIONAL
 *   -- see also teletex-organizational-unit-names --}
 * ```
 *
 * @class
 */
export class BuiltInStandardAttributes {
    constructor(
        /**
         * @summary `country_name`.
         * @public
         * @readonly
         */
        readonly country_name: OPTIONAL<CountryName>,
        /**
         * @summary `administration_domain_name`.
         * @public
         * @readonly
         */
        readonly administration_domain_name: OPTIONAL<AdministrationDomainName>,
        /**
         * @summary `network_address`.
         * @public
         * @readonly
         */
        readonly network_address: OPTIONAL<NetworkAddress>,
        /**
         * @summary `terminal_identifier`.
         * @public
         * @readonly
         */
        readonly terminal_identifier: OPTIONAL<TerminalIdentifier>,
        /**
         * @summary `private_domain_name`.
         * @public
         * @readonly
         */
        readonly private_domain_name: OPTIONAL<PrivateDomainName>,
        /**
         * @summary `organization_name`.
         * @public
         * @readonly
         */
        readonly organization_name: OPTIONAL<OrganizationName>,
        /**
         * @summary `numeric_user_identifier`.
         * @public
         * @readonly
         */
        readonly numeric_user_identifier: OPTIONAL<NumericUserIdentifier>,
        /**
         * @summary `personal_name`.
         * @public
         * @readonly
         */
        readonly personal_name: OPTIONAL<PersonalName>,
        /**
         * @summary `organizational_unit_names`.
         * @public
         * @readonly
         */
        readonly organizational_unit_names: OPTIONAL<OrganizationalUnitNames>
    ) {}

    /**
     * @summary Restructures an object into a BuiltInStandardAttributes
     * @description
     *
     * This takes an `object` and converts it to a `BuiltInStandardAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BuiltInStandardAttributes`.
     * @returns {BuiltInStandardAttributes}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof BuiltInStandardAttributes]: BuiltInStandardAttributes[_K];
            }
        >
    ): BuiltInStandardAttributes {
        return new BuiltInStandardAttributes(
            _o.country_name,
            _o.administration_domain_name,
            _o.network_address,
            _o.terminal_identifier,
            _o.private_domain_name,
            _o.organization_name,
            _o.numeric_user_identifier,
            _o.personal_name,
            _o.organizational_unit_names
        );
    }
}
/**
 * @summary The Leading Root Component Types of BuiltInStandardAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BuiltInStandardAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "country-name",
        true,
        $.hasTag(_TagClass.application, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "administration-domain-name",
        true,
        $.hasTag(_TagClass.application, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "network-address",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "terminal-identifier",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "private-domain-name",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "organization-name",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "numeric-user-identifier",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "personal-name",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "organizational-unit-names",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of BuiltInStandardAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BuiltInStandardAttributes: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of BuiltInStandardAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BuiltInStandardAttributes: $.ComponentSpec[] = [];
let _cached_decoder_for_BuiltInStandardAttributes: $.ASN1Decoder<
    BuiltInStandardAttributes
> | null = null;
let _cached_encoder_for_BuiltInStandardAttributes: $.ASN1Encoder<
    BuiltInStandardAttributes
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) BuiltInStandardAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BuiltInStandardAttributes} The decoded data structure.
 */
export function _decode_BuiltInStandardAttributes(el: _Element) {
    if (!_cached_decoder_for_BuiltInStandardAttributes) {
        _cached_decoder_for_BuiltInStandardAttributes = function (
            el: _Element
        ): BuiltInStandardAttributes {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let country_name: OPTIONAL<CountryName>;
            let administration_domain_name: OPTIONAL<AdministrationDomainName>;
            let network_address: OPTIONAL<NetworkAddress>;
            let terminal_identifier: OPTIONAL<TerminalIdentifier>;
            let private_domain_name: OPTIONAL<PrivateDomainName>;
            let organization_name: OPTIONAL<OrganizationName>;
            let numeric_user_identifier: OPTIONAL<NumericUserIdentifier>;
            let personal_name: OPTIONAL<PersonalName>;
            let organizational_unit_names: OPTIONAL<OrganizationalUnitNames>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "country-name": (_el: _Element): void => {
                    country_name = _decode_CountryName(_el);
                },
                "administration-domain-name": (_el: _Element): void => {
                    administration_domain_name = _decode_AdministrationDomainName(
                        _el
                    );
                },
                "network-address": (_el: _Element): void => {
                    network_address = $._decode_explicit<NetworkAddress>(
                        () => _decode_NetworkAddress
                    )(_el);
                },
                "terminal-identifier": (_el: _Element): void => {
                    terminal_identifier = $._decode_explicit<
                        TerminalIdentifier
                    >(() => _decode_TerminalIdentifier)(_el);
                },
                "private-domain-name": (_el: _Element): void => {
                    private_domain_name = $._decode_explicit<PrivateDomainName>(
                        () => _decode_PrivateDomainName
                    )(_el);
                },
                "organization-name": (_el: _Element): void => {
                    organization_name = $._decode_explicit<OrganizationName>(
                        () => _decode_OrganizationName
                    )(_el);
                },
                "numeric-user-identifier": (_el: _Element): void => {
                    numeric_user_identifier = $._decode_explicit<
                        NumericUserIdentifier
                    >(() => _decode_NumericUserIdentifier)(_el);
                },
                "personal-name": (_el: _Element): void => {
                    personal_name = $._decode_explicit<PersonalName>(
                        () => _decode_PersonalName
                    )(_el);
                },
                "organizational-unit-names": (_el: _Element): void => {
                    organizational_unit_names = $._decode_explicit<
                        OrganizationalUnitNames
                    >(() => _decode_OrganizationalUnitNames)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BuiltInStandardAttributes,
                _extension_additions_list_spec_for_BuiltInStandardAttributes,
                _root_component_type_list_2_spec_for_BuiltInStandardAttributes,
                undefined
            );
            return new BuiltInStandardAttributes(
                /* SEQUENCE_CONSTRUCTOR_CALL */ country_name,
                administration_domain_name,
                network_address,
                terminal_identifier,
                private_domain_name,
                organization_name,
                numeric_user_identifier,
                personal_name,
                organizational_unit_names
            );
        };
    }
    return _cached_decoder_for_BuiltInStandardAttributes(el);
}
/**
 * @summary Encodes a(n) BuiltInStandardAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BuiltInStandardAttributes, encoded as an ASN.1 Element.
 */
export function _encode_BuiltInStandardAttributes(
    value: BuiltInStandardAttributes,
    elGetter: $.ASN1Encoder<BuiltInStandardAttributes>
) {
    if (!_cached_encoder_for_BuiltInStandardAttributes) {
        _cached_encoder_for_BuiltInStandardAttributes = function (
            value: BuiltInStandardAttributes,
            elGetter: $.ASN1Encoder<BuiltInStandardAttributes>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.country_name === undefined
                            ? undefined
                            : _encode_CountryName(value.country_name, $.BER),
                        /* IF_ABSENT  */ value.administration_domain_name ===
                        undefined
                            ? undefined
                            : _encode_AdministrationDomainName(
                                  value.administration_domain_name,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.network_address === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_NetworkAddress,
                                  $.BER
                              )(value.network_address, $.BER),
                        /* IF_ABSENT  */ value.terminal_identifier === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_TerminalIdentifier,
                                  $.BER
                              )(value.terminal_identifier, $.BER),
                        /* IF_ABSENT  */ value.private_domain_name === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_PrivateDomainName,
                                  $.BER
                              )(value.private_domain_name, $.BER),
                        /* IF_ABSENT  */ value.organization_name === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_OrganizationName,
                                  $.BER
                              )(value.organization_name, $.BER),
                        /* IF_ABSENT  */ value.numeric_user_identifier ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_NumericUserIdentifier,
                                  $.BER
                              )(value.numeric_user_identifier, $.BER),
                        /* IF_ABSENT  */ value.personal_name === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_PersonalName,
                                  $.BER
                              )(value.personal_name, $.BER),
                        /* IF_ABSENT  */ value.organizational_unit_names ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_OrganizationalUnitNames,
                                  $.BER
                              )(value.organizational_unit_names, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BuiltInStandardAttributes(value, elGetter);
}

/**
 * @summary BuiltInDomainDefinedAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BuiltInDomainDefinedAttribute ::= SEQUENCE {
 *   type   PrintableString(SIZE (1..ub-domain-defined-attribute-type-length)),
 *   value  PrintableString(SIZE (1..ub-domain-defined-attribute-value-length)) }
 * ```
 *
 * @class
 */
export class BuiltInDomainDefinedAttribute {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: PrintableString,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: PrintableString
    ) {}

    /**
     * @summary Restructures an object into a BuiltInDomainDefinedAttribute
     * @description
     *
     * This takes an `object` and converts it to a `BuiltInDomainDefinedAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BuiltInDomainDefinedAttribute`.
     * @returns {BuiltInDomainDefinedAttribute}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof BuiltInDomainDefinedAttribute]: BuiltInDomainDefinedAttribute[_K];
            }
        >
    ): BuiltInDomainDefinedAttribute {
        return new BuiltInDomainDefinedAttribute(_o.type_, _o.value);
    }
}
/**
 * @summary The Leading Root Component Types of BuiltInDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BuiltInDomainDefinedAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "value",
        false,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of BuiltInDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BuiltInDomainDefinedAttribute: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of BuiltInDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BuiltInDomainDefinedAttribute: $.ComponentSpec[] = [];
let _cached_decoder_for_BuiltInDomainDefinedAttribute: $.ASN1Decoder<
    BuiltInDomainDefinedAttribute
> | null = null;
let _cached_encoder_for_BuiltInDomainDefinedAttribute: $.ASN1Encoder<
    BuiltInDomainDefinedAttribute
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) BuiltInDomainDefinedAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BuiltInDomainDefinedAttribute} The decoded data structure.
 */
export function _decode_BuiltInDomainDefinedAttribute(el: _Element) {
    if (!_cached_decoder_for_BuiltInDomainDefinedAttribute) {
        _cached_decoder_for_BuiltInDomainDefinedAttribute = function (
            el: _Element
        ): BuiltInDomainDefinedAttribute {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "BuiltInDomainDefinedAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: PrintableString;
            let value!: PrintableString;
            type_ = $._decodePrintableString(sequence[0]);
            value = $._decodePrintableString(sequence[1]);
            return new BuiltInDomainDefinedAttribute(type_, value);
        };
    }
    return _cached_decoder_for_BuiltInDomainDefinedAttribute(el);
}
/**
 * @summary Encodes a(n) BuiltInDomainDefinedAttribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BuiltInDomainDefinedAttribute, encoded as an ASN.1 Element.
 */
export function _encode_BuiltInDomainDefinedAttribute(
    value: BuiltInDomainDefinedAttribute,
    elGetter: $.ASN1Encoder<BuiltInDomainDefinedAttribute>
) {
    if (!_cached_encoder_for_BuiltInDomainDefinedAttribute) {
        _cached_encoder_for_BuiltInDomainDefinedAttribute = function (
            value: BuiltInDomainDefinedAttribute,
            elGetter: $.ASN1Encoder<BuiltInDomainDefinedAttribute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodePrintableString(
                            value.type_,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodePrintableString(
                            value.value,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BuiltInDomainDefinedAttribute(value, elGetter);
}

export type BuiltInDomainDefinedAttributes<> = BuiltInDomainDefinedAttribute[]; // SequenceOfType
let _cached_decoder_for_BuiltInDomainDefinedAttributes: $.ASN1Decoder<
    BuiltInDomainDefinedAttributes
> | null = null;
let _cached_encoder_for_BuiltInDomainDefinedAttributes: $.ASN1Encoder<
    BuiltInDomainDefinedAttributes
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) BuiltInDomainDefinedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BuiltInDomainDefinedAttributes} The decoded data structure.
 */
export function _decode_BuiltInDomainDefinedAttributes(el: _Element) {
    if (!_cached_decoder_for_BuiltInDomainDefinedAttributes) {
        _cached_decoder_for_BuiltInDomainDefinedAttributes = $._decodeSequenceOf<
            BuiltInDomainDefinedAttribute
        >(() => _decode_BuiltInDomainDefinedAttribute);
    }
    return _cached_decoder_for_BuiltInDomainDefinedAttributes(el);
}
/**
 * @summary Encodes a(n) BuiltInDomainDefinedAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BuiltInDomainDefinedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_BuiltInDomainDefinedAttributes(
    value: BuiltInDomainDefinedAttributes,
    elGetter: $.ASN1Encoder<BuiltInDomainDefinedAttributes>
) {
    if (!_cached_encoder_for_BuiltInDomainDefinedAttributes) {
        _cached_encoder_for_BuiltInDomainDefinedAttributes = $._encodeSequenceOf<
            BuiltInDomainDefinedAttribute
        >(() => _encode_BuiltInDomainDefinedAttribute, $.BER);
    }
    return _cached_encoder_for_BuiltInDomainDefinedAttributes(value, elGetter);
}

/**
 * @summary EXTENSION_ATTRIBUTE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EXTENSION-ATTRIBUTE ::= CLASS {
 *   &id           INTEGER(0..ub-extension-attributes) UNIQUE,
 *   &Type }
 * WITH SYNTAX {
 *                 &Type
 *   IDENTIFIED BY &id }
 * ```
 *
 * @interface
 */
export interface EXTENSION_ATTRIBUTE<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "EXTENSION-ATTRIBUTE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof EXTENSION_ATTRIBUTE<Type>]: $.ASN1Decoder<
                EXTENSION_ATTRIBUTE<Type>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof EXTENSION_ATTRIBUTE<Type>]: $.ASN1Encoder<
                EXTENSION_ATTRIBUTE<Type>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    "&id"?: INTEGER;
    /**
     * @summary &Type
     */
    "&Type": Type;
}

export type CommonName<> = PrintableString; // PrintableString
let _cached_decoder_for_CommonName: $.ASN1Decoder<CommonName> | null = null;
let _cached_encoder_for_CommonName: $.ASN1Encoder<CommonName> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CommonName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommonName} The decoded data structure.
 */
export function _decode_CommonName(el: _Element) {
    if (!_cached_decoder_for_CommonName) {
        _cached_decoder_for_CommonName = $._decodePrintableString;
    }
    return _cached_decoder_for_CommonName(el);
}
/**
 * @summary Encodes a(n) CommonName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonName, encoded as an ASN.1 Element.
 */
export function _encode_CommonName(
    value: CommonName,
    elGetter: $.ASN1Encoder<CommonName>
) {
    if (!_cached_encoder_for_CommonName) {
        _cached_encoder_for_CommonName = $._encodePrintableString;
    }
    return _cached_encoder_for_CommonName(value, elGetter);
}

/**
 * @summary common_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * common-name EXTENSION-ATTRIBUTE ::= {
 *                  CommonName
 *   IDENTIFIED BY  1 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const common_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CommonName,
    },
    encoderFor: {
        "&Type": _encode_CommonName,
    },
    "&id": 1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type TeletexCommonName<> = TeletexString; // TeletexString
let _cached_decoder_for_TeletexCommonName: $.ASN1Decoder<
    TeletexCommonName
> | null = null;
let _cached_encoder_for_TeletexCommonName: $.ASN1Encoder<
    TeletexCommonName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TeletexCommonName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexCommonName} The decoded data structure.
 */
export function _decode_TeletexCommonName(el: _Element) {
    if (!_cached_decoder_for_TeletexCommonName) {
        _cached_decoder_for_TeletexCommonName = $._decodeTeletexString;
    }
    return _cached_decoder_for_TeletexCommonName(el);
}
/**
 * @summary Encodes a(n) TeletexCommonName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexCommonName, encoded as an ASN.1 Element.
 */
export function _encode_TeletexCommonName(
    value: TeletexCommonName,
    elGetter: $.ASN1Encoder<TeletexCommonName>
) {
    if (!_cached_encoder_for_TeletexCommonName) {
        _cached_encoder_for_TeletexCommonName = $._encodeTeletexString;
    }
    return _cached_encoder_for_TeletexCommonName(value, elGetter);
}

/**
 * @summary teletex_common_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-common-name EXTENSION-ATTRIBUTE ::= {
 *                  TeletexCommonName
 *   IDENTIFIED BY  2 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const teletex_common_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TeletexCommonName,
    },
    encoderFor: {
        "&Type": _encode_TeletexCommonName,
    },
    "&id": 2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary UniversalOrBMPString_character_encoding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalOrBMPString-character-encoding ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type UniversalOrBMPString_character_encoding =
    | { two_octets: BMPString } /* CHOICE_ALT_ROOT */
    | { four_octets: UniversalString } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_UniversalOrBMPString_character_encoding: $.ASN1Decoder<
    UniversalOrBMPString_character_encoding
> | null = null;
let _cached_encoder_for_UniversalOrBMPString_character_encoding: $.ASN1Encoder<
    UniversalOrBMPString_character_encoding
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalOrBMPString_character_encoding
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalOrBMPString_character_encoding} The decoded data structure.
 */
export function _decode_UniversalOrBMPString_character_encoding(el: _Element) {
    if (!_cached_decoder_for_UniversalOrBMPString_character_encoding) {
        _cached_decoder_for_UniversalOrBMPString_character_encoding = $._decode_inextensible_choice<
            UniversalOrBMPString_character_encoding
        >({
            "UNIVERSAL 30": ["two_octets", $._decodeBMPString],
            "UNIVERSAL 28": ["four_octets", $._decodeUniversalString],
        });
    }
    return _cached_decoder_for_UniversalOrBMPString_character_encoding(el);
}
/**
 * @summary Encodes a(n) UniversalOrBMPString_character_encoding into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalOrBMPString_character_encoding, encoded as an ASN.1 Element.
 */
export function _encode_UniversalOrBMPString_character_encoding(
    value: UniversalOrBMPString_character_encoding,
    elGetter: $.ASN1Encoder<UniversalOrBMPString_character_encoding>
) {
    if (!_cached_encoder_for_UniversalOrBMPString_character_encoding) {
        _cached_encoder_for_UniversalOrBMPString_character_encoding = $._encode_choice<
            UniversalOrBMPString_character_encoding
        >(
            {
                two_octets: $._encodeBMPString,
                four_octets: $._encodeUniversalString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_UniversalOrBMPString_character_encoding(
        value,
        elGetter
    );
}

/**
 * @summary UniversalOrBMPString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalOrBMPString{INTEGER:ub-string-length} ::= SET {
 *   character-encoding     CHOICE {
 *     two-octets             BMPString(SIZE (1..ub-string-length)),
 *     four-octets            UniversalString(SIZE (1..ub-string-length))},
 *   iso-639-language-code  PrintableString(SIZE (2 | 5)) OPTIONAL }
 * ```
 *
 * @class
 */
export class UniversalOrBMPString {
    constructor(
        /**
         * @summary `character_encoding`.
         * @public
         * @readonly
         */
        readonly character_encoding: UniversalOrBMPString_character_encoding,
        /**
         * @summary `iso_639_language_code`.
         * @public
         * @readonly
         */
        readonly iso_639_language_code: OPTIONAL<PrintableString>
    ) {}

    /**
     * @summary Restructures an object into a UniversalOrBMPString
     * @description
     *
     * This takes an `object` and converts it to a `UniversalOrBMPString`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UniversalOrBMPString`.
     * @returns {UniversalOrBMPString}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof UniversalOrBMPString]: UniversalOrBMPString[_K] }
        >
    ): UniversalOrBMPString {
        return new UniversalOrBMPString(
            _o.character_encoding,
            _o.iso_639_language_code
        );
    }
}
/**
 * @summary The Leading Root Component Types of UniversalOrBMPString
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UniversalOrBMPString: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "character-encoding",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "iso-639-language-code",
        true,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of UniversalOrBMPString
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UniversalOrBMPString: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of UniversalOrBMPString
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UniversalOrBMPString: $.ComponentSpec[] = [];
let _cached_decoder_for_UniversalOrBMPString: $.ASN1Decoder<
    UniversalOrBMPString
> | null = null;
let _cached_encoder_for_UniversalOrBMPString: $.ASN1Encoder<
    UniversalOrBMPString
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalOrBMPString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalOrBMPString} The decoded data structure.
 */
export function _decode_UniversalOrBMPString(el: _Element) {
    if (!_cached_decoder_for_UniversalOrBMPString) {
        _cached_decoder_for_UniversalOrBMPString = function (
            el: _Element
        ): UniversalOrBMPString {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let character_encoding!: UniversalOrBMPString_character_encoding;
            let iso_639_language_code: OPTIONAL<PrintableString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "character-encoding": (_el: _Element): void => {
                    character_encoding = _decode_UniversalOrBMPString_character_encoding(
                        _el
                    );
                },
                "iso-639-language-code": (_el: _Element): void => {
                    iso_639_language_code = $._decodePrintableString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UniversalOrBMPString,
                _extension_additions_list_spec_for_UniversalOrBMPString,
                _root_component_type_list_2_spec_for_UniversalOrBMPString,
                undefined
            );
            return new UniversalOrBMPString(
                /* SET_CONSTRUCTOR_CALL */ character_encoding,
                iso_639_language_code
            );
        };
    }
    return _cached_decoder_for_UniversalOrBMPString(el);
}
/**
 * @summary Encodes a(n) UniversalOrBMPString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalOrBMPString, encoded as an ASN.1 Element.
 */
export function _encode_UniversalOrBMPString(
    value: UniversalOrBMPString,
    elGetter: $.ASN1Encoder<UniversalOrBMPString>
) {
    if (!_cached_encoder_for_UniversalOrBMPString) {
        _cached_encoder_for_UniversalOrBMPString = function (
            value: UniversalOrBMPString,
            elGetter: $.ASN1Encoder<UniversalOrBMPString>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_UniversalOrBMPString_character_encoding(
                            value.character_encoding,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.iso_639_language_code ===
                        undefined
                            ? undefined
                            : $._encodePrintableString(
                                  value.iso_639_language_code,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UniversalOrBMPString(value, elGetter);
}

/**
 * @summary ub_common_name_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-common-name-length                     INTEGER ::= 64
 * ```
 *
 * @constant
 */
export const ub_common_name_length: INTEGER = 64;

export type UniversalCommonName<> = UniversalOrBMPString; // DefinedType
let _cached_decoder_for_UniversalCommonName: $.ASN1Decoder<
    UniversalCommonName
> | null = null;
let _cached_encoder_for_UniversalCommonName: $.ASN1Encoder<
    UniversalCommonName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalCommonName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalCommonName} The decoded data structure.
 */
export function _decode_UniversalCommonName(el: _Element) {
    if (!_cached_decoder_for_UniversalCommonName) {
        _cached_decoder_for_UniversalCommonName = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalCommonName(el);
}
/**
 * @summary Encodes a(n) UniversalCommonName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalCommonName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalCommonName(
    value: UniversalCommonName,
    elGetter: $.ASN1Encoder<UniversalCommonName>
) {
    if (!_cached_encoder_for_UniversalCommonName) {
        _cached_encoder_for_UniversalCommonName = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalCommonName(value, elGetter);
}

/**
 * @summary universal_common_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-common-name EXTENSION-ATTRIBUTE ::= {
 *                  UniversalCommonName
 *   IDENTIFIED BY  24 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_common_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalCommonName,
    },
    encoderFor: {
        "&Type": _encode_UniversalCommonName,
    },
    "&id": 24 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type TeletexOrganizationName<> = TeletexString; // TeletexString
let _cached_decoder_for_TeletexOrganizationName: $.ASN1Decoder<
    TeletexOrganizationName
> | null = null;
let _cached_encoder_for_TeletexOrganizationName: $.ASN1Encoder<
    TeletexOrganizationName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TeletexOrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexOrganizationName} The decoded data structure.
 */
export function _decode_TeletexOrganizationName(el: _Element) {
    if (!_cached_decoder_for_TeletexOrganizationName) {
        _cached_decoder_for_TeletexOrganizationName = $._decodeTeletexString;
    }
    return _cached_decoder_for_TeletexOrganizationName(el);
}
/**
 * @summary Encodes a(n) TeletexOrganizationName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexOrganizationName, encoded as an ASN.1 Element.
 */
export function _encode_TeletexOrganizationName(
    value: TeletexOrganizationName,
    elGetter: $.ASN1Encoder<TeletexOrganizationName>
) {
    if (!_cached_encoder_for_TeletexOrganizationName) {
        _cached_encoder_for_TeletexOrganizationName = $._encodeTeletexString;
    }
    return _cached_encoder_for_TeletexOrganizationName(value, elGetter);
}

/**
 * @summary teletex_organization_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-organization-name EXTENSION-ATTRIBUTE ::= {
 *                  TeletexOrganizationName
 *   IDENTIFIED BY  3 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const teletex_organization_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TeletexOrganizationName,
    },
    encoderFor: {
        "&Type": _encode_TeletexOrganizationName,
    },
    "&id": 3 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary ub_organization_name_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-organization-name-length               INTEGER ::= 64
 * ```
 *
 * @constant
 */
export const ub_organization_name_length: INTEGER = 64;

export type UniversalOrganizationName<> = UniversalOrBMPString; // DefinedType
let _cached_decoder_for_UniversalOrganizationName: $.ASN1Decoder<
    UniversalOrganizationName
> | null = null;
let _cached_encoder_for_UniversalOrganizationName: $.ASN1Encoder<
    UniversalOrganizationName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalOrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalOrganizationName} The decoded data structure.
 */
export function _decode_UniversalOrganizationName(el: _Element) {
    if (!_cached_decoder_for_UniversalOrganizationName) {
        _cached_decoder_for_UniversalOrganizationName = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalOrganizationName(el);
}
/**
 * @summary Encodes a(n) UniversalOrganizationName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalOrganizationName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalOrganizationName(
    value: UniversalOrganizationName,
    elGetter: $.ASN1Encoder<UniversalOrganizationName>
) {
    if (!_cached_encoder_for_UniversalOrganizationName) {
        _cached_encoder_for_UniversalOrganizationName = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalOrganizationName(value, elGetter);
}

/**
 * @summary universal_organization_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-organization-name EXTENSION-ATTRIBUTE ::= {
 *                  UniversalOrganizationName
 *   IDENTIFIED BY  25 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_organization_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalOrganizationName,
    },
    encoderFor: {
        "&Type": _encode_UniversalOrganizationName,
    },
    "&id": 25 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary TeletexPersonalName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexPersonalName ::= SET {
 *   surname               [0]  TeletexString(SIZE (1..ub-surname-length)),
 *   given-name
 *     [1]  TeletexString(SIZE (1..ub-given-name-length)) OPTIONAL,
 *   initials
 *     [2]  TeletexString(SIZE (1..ub-initials-length)) OPTIONAL,
 *   generation-qualifier
 *     [3]  TeletexString(SIZE (1..ub-generation-qualifier-length)) OPTIONAL }
 * ```
 *
 * @class
 */
export class TeletexPersonalName {
    constructor(
        /**
         * @summary `surname`.
         * @public
         * @readonly
         */
        readonly surname: TeletexString,
        /**
         * @summary `given_name`.
         * @public
         * @readonly
         */
        readonly given_name: OPTIONAL<TeletexString>,
        /**
         * @summary `initials`.
         * @public
         * @readonly
         */
        readonly initials: OPTIONAL<TeletexString>,
        /**
         * @summary `generation_qualifier`.
         * @public
         * @readonly
         */
        readonly generation_qualifier: OPTIONAL<TeletexString>
    ) {}

    /**
     * @summary Restructures an object into a TeletexPersonalName
     * @description
     *
     * This takes an `object` and converts it to a `TeletexPersonalName`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TeletexPersonalName`.
     * @returns {TeletexPersonalName}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof TeletexPersonalName]: TeletexPersonalName[_K] }
        >
    ): TeletexPersonalName {
        return new TeletexPersonalName(
            _o.surname,
            _o.given_name,
            _o.initials,
            _o.generation_qualifier
        );
    }
}
/**
 * @summary The Leading Root Component Types of TeletexPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TeletexPersonalName: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "surname",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "given-name",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "initials",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "generation-qualifier",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TeletexPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TeletexPersonalName: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TeletexPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TeletexPersonalName: $.ComponentSpec[] = [];
let _cached_decoder_for_TeletexPersonalName: $.ASN1Decoder<
    TeletexPersonalName
> | null = null;
let _cached_encoder_for_TeletexPersonalName: $.ASN1Encoder<
    TeletexPersonalName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TeletexPersonalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexPersonalName} The decoded data structure.
 */
export function _decode_TeletexPersonalName(el: _Element) {
    if (!_cached_decoder_for_TeletexPersonalName) {
        _cached_decoder_for_TeletexPersonalName = function (
            el: _Element
        ): TeletexPersonalName {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let surname!: TeletexString;
            let given_name: OPTIONAL<TeletexString>;
            let initials: OPTIONAL<TeletexString>;
            let generation_qualifier: OPTIONAL<TeletexString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                surname: (_el: _Element): void => {
                    surname = $._decode_explicit<TeletexString>(
                        () => $._decodeTeletexString
                    )(_el);
                },
                "given-name": (_el: _Element): void => {
                    given_name = $._decode_explicit<TeletexString>(
                        () => $._decodeTeletexString
                    )(_el);
                },
                initials: (_el: _Element): void => {
                    initials = $._decode_explicit<TeletexString>(
                        () => $._decodeTeletexString
                    )(_el);
                },
                "generation-qualifier": (_el: _Element): void => {
                    generation_qualifier = $._decode_explicit<TeletexString>(
                        () => $._decodeTeletexString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TeletexPersonalName,
                _extension_additions_list_spec_for_TeletexPersonalName,
                _root_component_type_list_2_spec_for_TeletexPersonalName,
                undefined
            );
            return new TeletexPersonalName(
                /* SET_CONSTRUCTOR_CALL */ surname,
                given_name,
                initials,
                generation_qualifier
            );
        };
    }
    return _cached_decoder_for_TeletexPersonalName(el);
}
/**
 * @summary Encodes a(n) TeletexPersonalName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexPersonalName, encoded as an ASN.1 Element.
 */
export function _encode_TeletexPersonalName(
    value: TeletexPersonalName,
    elGetter: $.ASN1Encoder<TeletexPersonalName>
) {
    if (!_cached_encoder_for_TeletexPersonalName) {
        _cached_encoder_for_TeletexPersonalName = function (
            value: TeletexPersonalName,
            elGetter: $.ASN1Encoder<TeletexPersonalName>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeTeletexString,
                            $.BER
                        )(value.surname, $.BER),
                        /* IF_ABSENT  */ value.given_name === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeTeletexString,
                                  $.BER
                              )(value.given_name, $.BER),
                        /* IF_ABSENT  */ value.initials === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeTeletexString,
                                  $.BER
                              )(value.initials, $.BER),
                        /* IF_ABSENT  */ value.generation_qualifier ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeTeletexString,
                                  $.BER
                              )(value.generation_qualifier, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TeletexPersonalName(value, elGetter);
}

/**
 * @summary teletex_personal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-personal-name EXTENSION-ATTRIBUTE ::= {
 *                  TeletexPersonalName
 *   IDENTIFIED BY  4 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const teletex_personal_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TeletexPersonalName,
    },
    encoderFor: {
        "&Type": _encode_TeletexPersonalName,
    },
    "&id": 4 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary ub_universal_surname_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-universal-surname-length               INTEGER ::= 64
 * ```
 *
 * @constant
 */
export const ub_universal_surname_length: INTEGER = 64;

/**
 * @summary ub_universal_given_name_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-universal-given-name-length            INTEGER ::= 40
 * ```
 *
 * @constant
 */
export const ub_universal_given_name_length: INTEGER = 40;

/**
 * @summary ub_universal_initials_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-universal-initials-length              INTEGER ::= 16
 * ```
 *
 * @constant
 */
export const ub_universal_initials_length: INTEGER = 16;

/**
 * @summary ub_universal_generation_qualifier_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-universal-generation-qualifier-length  INTEGER ::= 16
 * ```
 *
 * @constant
 */
export const ub_universal_generation_qualifier_length: INTEGER = 16;

/**
 * @summary UniversalPersonalName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPersonalName ::= SET {
 *   surname
 *     [0]  UniversalOrBMPString{ub-universal-surname-length},
 *   -- If a language is specified within surname, then that language applies to each of the
 *   -- following optional components unless the component specifies another language.
 *   given-name
 *     [1]  UniversalOrBMPString{ub-universal-given-name-length} OPTIONAL,
 *   initials
 *     [2]  UniversalOrBMPString{ub-universal-initials-length} OPTIONAL,
 *   generation-qualifier
 *     [3]  UniversalOrBMPString{ub-universal-generation-qualifier-length} OPTIONAL }
 * ```
 *
 * @class
 */
export class UniversalPersonalName {
    constructor(
        /**
         * @summary `surname`.
         * @public
         * @readonly
         */
        readonly surname: UniversalOrBMPString,
        /**
         * @summary `given_name`.
         * @public
         * @readonly
         */
        readonly given_name: OPTIONAL<UniversalOrBMPString>,
        /**
         * @summary `initials`.
         * @public
         * @readonly
         */
        readonly initials: OPTIONAL<UniversalOrBMPString>,
        /**
         * @summary `generation_qualifier`.
         * @public
         * @readonly
         */
        readonly generation_qualifier: OPTIONAL<UniversalOrBMPString>
    ) {}

    /**
     * @summary Restructures an object into a UniversalPersonalName
     * @description
     *
     * This takes an `object` and converts it to a `UniversalPersonalName`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UniversalPersonalName`.
     * @returns {UniversalPersonalName}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof UniversalPersonalName]: UniversalPersonalName[_K] }
        >
    ): UniversalPersonalName {
        return new UniversalPersonalName(
            _o.surname,
            _o.given_name,
            _o.initials,
            _o.generation_qualifier
        );
    }
}
/**
 * @summary The Leading Root Component Types of UniversalPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UniversalPersonalName: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "surname",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "given-name",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "initials",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "generation-qualifier",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of UniversalPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UniversalPersonalName: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of UniversalPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UniversalPersonalName: $.ComponentSpec[] = [];
let _cached_decoder_for_UniversalPersonalName: $.ASN1Decoder<
    UniversalPersonalName
> | null = null;
let _cached_encoder_for_UniversalPersonalName: $.ASN1Encoder<
    UniversalPersonalName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPersonalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPersonalName} The decoded data structure.
 */
export function _decode_UniversalPersonalName(el: _Element) {
    if (!_cached_decoder_for_UniversalPersonalName) {
        _cached_decoder_for_UniversalPersonalName = function (
            el: _Element
        ): UniversalPersonalName {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let surname!: UniversalOrBMPString;
            let given_name: OPTIONAL<UniversalOrBMPString>;
            let initials: OPTIONAL<UniversalOrBMPString>;
            let generation_qualifier: OPTIONAL<UniversalOrBMPString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                surname: (_el: _Element): void => {
                    surname = $._decode_explicit<UniversalOrBMPString>(
                        () => _decode_UniversalOrBMPString
                    )(_el);
                },
                "given-name": (_el: _Element): void => {
                    given_name = $._decode_explicit<UniversalOrBMPString>(
                        () => _decode_UniversalOrBMPString
                    )(_el);
                },
                initials: (_el: _Element): void => {
                    initials = $._decode_explicit<UniversalOrBMPString>(
                        () => _decode_UniversalOrBMPString
                    )(_el);
                },
                "generation-qualifier": (_el: _Element): void => {
                    generation_qualifier = $._decode_explicit<
                        UniversalOrBMPString
                    >(() => _decode_UniversalOrBMPString)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UniversalPersonalName,
                _extension_additions_list_spec_for_UniversalPersonalName,
                _root_component_type_list_2_spec_for_UniversalPersonalName,
                undefined
            );
            return new UniversalPersonalName(
                /* SET_CONSTRUCTOR_CALL */ surname,
                given_name,
                initials,
                generation_qualifier
            );
        };
    }
    return _cached_decoder_for_UniversalPersonalName(el);
}
/**
 * @summary Encodes a(n) UniversalPersonalName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPersonalName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPersonalName(
    value: UniversalPersonalName,
    elGetter: $.ASN1Encoder<UniversalPersonalName>
) {
    if (!_cached_encoder_for_UniversalPersonalName) {
        _cached_encoder_for_UniversalPersonalName = function (
            value: UniversalPersonalName,
            elGetter: $.ASN1Encoder<UniversalPersonalName>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_UniversalOrBMPString,
                            $.BER
                        )(value.surname, $.BER),
                        /* IF_ABSENT  */ value.given_name === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_UniversalOrBMPString,
                                  $.BER
                              )(value.given_name, $.BER),
                        /* IF_ABSENT  */ value.initials === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_UniversalOrBMPString,
                                  $.BER
                              )(value.initials, $.BER),
                        /* IF_ABSENT  */ value.generation_qualifier ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_UniversalOrBMPString,
                                  $.BER
                              )(value.generation_qualifier, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UniversalPersonalName(value, elGetter);
}

/**
 * @summary universal_personal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-personal-name EXTENSION-ATTRIBUTE ::= {
 *                  UniversalPersonalName
 *   IDENTIFIED BY  26 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_personal_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalPersonalName,
    },
    encoderFor: {
        "&Type": _encode_UniversalPersonalName,
    },
    "&id": 26 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type TeletexOrganizationalUnitName<> = TeletexString; // TeletexString
let _cached_decoder_for_TeletexOrganizationalUnitName: $.ASN1Decoder<
    TeletexOrganizationalUnitName
> | null = null;
let _cached_encoder_for_TeletexOrganizationalUnitName: $.ASN1Encoder<
    TeletexOrganizationalUnitName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TeletexOrganizationalUnitName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexOrganizationalUnitName} The decoded data structure.
 */
export function _decode_TeletexOrganizationalUnitName(el: _Element) {
    if (!_cached_decoder_for_TeletexOrganizationalUnitName) {
        _cached_decoder_for_TeletexOrganizationalUnitName =
            $._decodeTeletexString;
    }
    return _cached_decoder_for_TeletexOrganizationalUnitName(el);
}
/**
 * @summary Encodes a(n) TeletexOrganizationalUnitName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexOrganizationalUnitName, encoded as an ASN.1 Element.
 */
export function _encode_TeletexOrganizationalUnitName(
    value: TeletexOrganizationalUnitName,
    elGetter: $.ASN1Encoder<TeletexOrganizationalUnitName>
) {
    if (!_cached_encoder_for_TeletexOrganizationalUnitName) {
        _cached_encoder_for_TeletexOrganizationalUnitName =
            $._encodeTeletexString;
    }
    return _cached_encoder_for_TeletexOrganizationalUnitName(value, elGetter);
}

export type TeletexOrganizationalUnitNames<> = TeletexOrganizationalUnitName[]; // SequenceOfType
let _cached_decoder_for_TeletexOrganizationalUnitNames: $.ASN1Decoder<
    TeletexOrganizationalUnitNames
> | null = null;
let _cached_encoder_for_TeletexOrganizationalUnitNames: $.ASN1Encoder<
    TeletexOrganizationalUnitNames
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TeletexOrganizationalUnitNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexOrganizationalUnitNames} The decoded data structure.
 */
export function _decode_TeletexOrganizationalUnitNames(el: _Element) {
    if (!_cached_decoder_for_TeletexOrganizationalUnitNames) {
        _cached_decoder_for_TeletexOrganizationalUnitNames = $._decodeSequenceOf<
            TeletexOrganizationalUnitName
        >(() => _decode_TeletexOrganizationalUnitName);
    }
    return _cached_decoder_for_TeletexOrganizationalUnitNames(el);
}
/**
 * @summary Encodes a(n) TeletexOrganizationalUnitNames into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexOrganizationalUnitNames, encoded as an ASN.1 Element.
 */
export function _encode_TeletexOrganizationalUnitNames(
    value: TeletexOrganizationalUnitNames,
    elGetter: $.ASN1Encoder<TeletexOrganizationalUnitNames>
) {
    if (!_cached_encoder_for_TeletexOrganizationalUnitNames) {
        _cached_encoder_for_TeletexOrganizationalUnitNames = $._encodeSequenceOf<
            TeletexOrganizationalUnitName
        >(() => _encode_TeletexOrganizationalUnitName, $.BER);
    }
    return _cached_encoder_for_TeletexOrganizationalUnitNames(value, elGetter);
}

/**
 * @summary teletex_organizational_unit_names
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-organizational-unit-names EXTENSION-ATTRIBUTE ::= {
 *                  TeletexOrganizationalUnitNames
 *   IDENTIFIED BY  5 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const teletex_organizational_unit_names: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TeletexOrganizationalUnitNames,
    },
    encoderFor: {
        "&Type": _encode_TeletexOrganizationalUnitNames,
    },
    "&id": 5 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary ub_organizational_unit_name_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-organizational-unit-name-length        INTEGER ::= 32
 * ```
 *
 * @constant
 */
export const ub_organizational_unit_name_length: INTEGER = 32;

export type UniversalOrganizationalUnitName<> = UniversalOrBMPString; // DefinedType
let _cached_decoder_for_UniversalOrganizationalUnitName: $.ASN1Decoder<
    UniversalOrganizationalUnitName
> | null = null;
let _cached_encoder_for_UniversalOrganizationalUnitName: $.ASN1Encoder<
    UniversalOrganizationalUnitName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalOrganizationalUnitName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalOrganizationalUnitName} The decoded data structure.
 */
export function _decode_UniversalOrganizationalUnitName(el: _Element) {
    if (!_cached_decoder_for_UniversalOrganizationalUnitName) {
        _cached_decoder_for_UniversalOrganizationalUnitName = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalOrganizationalUnitName(el);
}
/**
 * @summary Encodes a(n) UniversalOrganizationalUnitName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalOrganizationalUnitName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalOrganizationalUnitName(
    value: UniversalOrganizationalUnitName,
    elGetter: $.ASN1Encoder<UniversalOrganizationalUnitName>
) {
    if (!_cached_encoder_for_UniversalOrganizationalUnitName) {
        _cached_encoder_for_UniversalOrganizationalUnitName = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalOrganizationalUnitName(value, elGetter);
}

export type UniversalOrganizationalUnitNames<> = UniversalOrganizationalUnitName[]; // SequenceOfType
let _cached_decoder_for_UniversalOrganizationalUnitNames: $.ASN1Decoder<
    UniversalOrganizationalUnitNames
> | null = null;
let _cached_encoder_for_UniversalOrganizationalUnitNames: $.ASN1Encoder<
    UniversalOrganizationalUnitNames
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalOrganizationalUnitNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalOrganizationalUnitNames} The decoded data structure.
 */
export function _decode_UniversalOrganizationalUnitNames(el: _Element) {
    if (!_cached_decoder_for_UniversalOrganizationalUnitNames) {
        _cached_decoder_for_UniversalOrganizationalUnitNames = $._decodeSequenceOf<
            UniversalOrganizationalUnitName
        >(() => _decode_UniversalOrganizationalUnitName);
    }
    return _cached_decoder_for_UniversalOrganizationalUnitNames(el);
}
/**
 * @summary Encodes a(n) UniversalOrganizationalUnitNames into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalOrganizationalUnitNames, encoded as an ASN.1 Element.
 */
export function _encode_UniversalOrganizationalUnitNames(
    value: UniversalOrganizationalUnitNames,
    elGetter: $.ASN1Encoder<UniversalOrganizationalUnitNames>
) {
    if (!_cached_encoder_for_UniversalOrganizationalUnitNames) {
        _cached_encoder_for_UniversalOrganizationalUnitNames = $._encodeSequenceOf<
            UniversalOrganizationalUnitName
        >(() => _encode_UniversalOrganizationalUnitName, $.BER);
    }
    return _cached_encoder_for_UniversalOrganizationalUnitNames(
        value,
        elGetter
    );
}

/**
 * @summary universal_organizational_unit_names
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-organizational-unit-names EXTENSION-ATTRIBUTE ::= {
 *                  UniversalOrganizationalUnitNames
 *   IDENTIFIED BY  27 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_organizational_unit_names: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalOrganizationalUnitNames,
    },
    encoderFor: {
        "&Type": _encode_UniversalOrganizationalUnitNames,
    },
    "&id": 27 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary TeletexDomainDefinedAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexDomainDefinedAttribute ::= SEQUENCE {
 *   type   TeletexString(SIZE (1..ub-domain-defined-attribute-type-length)),
 *   value  TeletexString(SIZE (1..ub-domain-defined-attribute-value-length)) }
 * ```
 *
 * @class
 */
export class TeletexDomainDefinedAttribute {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: TeletexString,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: TeletexString
    ) {}

    /**
     * @summary Restructures an object into a TeletexDomainDefinedAttribute
     * @description
     *
     * This takes an `object` and converts it to a `TeletexDomainDefinedAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TeletexDomainDefinedAttribute`.
     * @returns {TeletexDomainDefinedAttribute}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof TeletexDomainDefinedAttribute]: TeletexDomainDefinedAttribute[_K];
            }
        >
    ): TeletexDomainDefinedAttribute {
        return new TeletexDomainDefinedAttribute(_o.type_, _o.value);
    }
}
/**
 * @summary The Leading Root Component Types of TeletexDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TeletexDomainDefinedAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 20),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "value",
        false,
        $.hasTag(_TagClass.universal, 20),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TeletexDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TeletexDomainDefinedAttribute: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TeletexDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TeletexDomainDefinedAttribute: $.ComponentSpec[] = [];
let _cached_decoder_for_TeletexDomainDefinedAttribute: $.ASN1Decoder<
    TeletexDomainDefinedAttribute
> | null = null;
let _cached_encoder_for_TeletexDomainDefinedAttribute: $.ASN1Encoder<
    TeletexDomainDefinedAttribute
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TeletexDomainDefinedAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexDomainDefinedAttribute} The decoded data structure.
 */
export function _decode_TeletexDomainDefinedAttribute(el: _Element) {
    if (!_cached_decoder_for_TeletexDomainDefinedAttribute) {
        _cached_decoder_for_TeletexDomainDefinedAttribute = function (
            el: _Element
        ): TeletexDomainDefinedAttribute {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "TeletexDomainDefinedAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: TeletexString;
            let value!: TeletexString;
            type_ = $._decodeTeletexString(sequence[0]);
            value = $._decodeTeletexString(sequence[1]);
            return new TeletexDomainDefinedAttribute(type_, value);
        };
    }
    return _cached_decoder_for_TeletexDomainDefinedAttribute(el);
}
/**
 * @summary Encodes a(n) TeletexDomainDefinedAttribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexDomainDefinedAttribute, encoded as an ASN.1 Element.
 */
export function _encode_TeletexDomainDefinedAttribute(
    value: TeletexDomainDefinedAttribute,
    elGetter: $.ASN1Encoder<TeletexDomainDefinedAttribute>
) {
    if (!_cached_encoder_for_TeletexDomainDefinedAttribute) {
        _cached_encoder_for_TeletexDomainDefinedAttribute = function (
            value: TeletexDomainDefinedAttribute,
            elGetter: $.ASN1Encoder<TeletexDomainDefinedAttribute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeTeletexString(
                            value.type_,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeTeletexString(
                            value.value,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TeletexDomainDefinedAttribute(value, elGetter);
}

export type TeletexDomainDefinedAttributes<> = TeletexDomainDefinedAttribute[]; // SequenceOfType
let _cached_decoder_for_TeletexDomainDefinedAttributes: $.ASN1Decoder<
    TeletexDomainDefinedAttributes
> | null = null;
let _cached_encoder_for_TeletexDomainDefinedAttributes: $.ASN1Encoder<
    TeletexDomainDefinedAttributes
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TeletexDomainDefinedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexDomainDefinedAttributes} The decoded data structure.
 */
export function _decode_TeletexDomainDefinedAttributes(el: _Element) {
    if (!_cached_decoder_for_TeletexDomainDefinedAttributes) {
        _cached_decoder_for_TeletexDomainDefinedAttributes = $._decodeSequenceOf<
            TeletexDomainDefinedAttribute
        >(() => _decode_TeletexDomainDefinedAttribute);
    }
    return _cached_decoder_for_TeletexDomainDefinedAttributes(el);
}
/**
 * @summary Encodes a(n) TeletexDomainDefinedAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexDomainDefinedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_TeletexDomainDefinedAttributes(
    value: TeletexDomainDefinedAttributes,
    elGetter: $.ASN1Encoder<TeletexDomainDefinedAttributes>
) {
    if (!_cached_encoder_for_TeletexDomainDefinedAttributes) {
        _cached_encoder_for_TeletexDomainDefinedAttributes = $._encodeSequenceOf<
            TeletexDomainDefinedAttribute
        >(() => _encode_TeletexDomainDefinedAttribute, $.BER);
    }
    return _cached_encoder_for_TeletexDomainDefinedAttributes(value, elGetter);
}

/**
 * @summary teletex_domain_defined_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-domain-defined-attributes EXTENSION-ATTRIBUTE ::= {
 *                  TeletexDomainDefinedAttributes
 *   IDENTIFIED BY  6 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const teletex_domain_defined_attributes: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TeletexDomainDefinedAttributes,
    },
    encoderFor: {
        "&Type": _encode_TeletexDomainDefinedAttributes,
    },
    "&id": 6 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary ub_domain_defined_attribute_type_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-domain-defined-attribute-type-length   INTEGER ::= 8
 * ```
 *
 * @constant
 */
export const ub_domain_defined_attribute_type_length: INTEGER = 8;

/**
 * @summary ub_domain_defined_attribute_value_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-domain-defined-attribute-value-length  INTEGER ::= 128
 * ```
 *
 * @constant
 */
export const ub_domain_defined_attribute_value_length: INTEGER = 128;

/**
 * @summary UniversalDomainDefinedAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalDomainDefinedAttribute ::= SEQUENCE {
 *   type   UniversalOrBMPString{ub-domain-defined-attribute-type-length},
 *   value  UniversalOrBMPString{ub-domain-defined-attribute-value-length} }
 * ```
 *
 * @class
 */
export class UniversalDomainDefinedAttribute {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: UniversalOrBMPString,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: UniversalOrBMPString
    ) {}

    /**
     * @summary Restructures an object into a UniversalDomainDefinedAttribute
     * @description
     *
     * This takes an `object` and converts it to a `UniversalDomainDefinedAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UniversalDomainDefinedAttribute`.
     * @returns {UniversalDomainDefinedAttribute}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof UniversalDomainDefinedAttribute]: UniversalDomainDefinedAttribute[_K];
            }
        >
    ): UniversalDomainDefinedAttribute {
        return new UniversalDomainDefinedAttribute(_o.type_, _o.value);
    }
}
/**
 * @summary The Leading Root Component Types of UniversalDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UniversalDomainDefinedAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "value",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of UniversalDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UniversalDomainDefinedAttribute: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of UniversalDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UniversalDomainDefinedAttribute: $.ComponentSpec[] = [];
let _cached_decoder_for_UniversalDomainDefinedAttribute: $.ASN1Decoder<
    UniversalDomainDefinedAttribute
> | null = null;
let _cached_encoder_for_UniversalDomainDefinedAttribute: $.ASN1Encoder<
    UniversalDomainDefinedAttribute
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalDomainDefinedAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalDomainDefinedAttribute} The decoded data structure.
 */
export function _decode_UniversalDomainDefinedAttribute(el: _Element) {
    if (!_cached_decoder_for_UniversalDomainDefinedAttribute) {
        _cached_decoder_for_UniversalDomainDefinedAttribute = function (
            el: _Element
        ): UniversalDomainDefinedAttribute {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "UniversalDomainDefinedAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: UniversalOrBMPString;
            let value!: UniversalOrBMPString;
            type_ = _decode_UniversalOrBMPString(sequence[0]);
            value = _decode_UniversalOrBMPString(sequence[1]);
            return new UniversalDomainDefinedAttribute(type_, value);
        };
    }
    return _cached_decoder_for_UniversalDomainDefinedAttribute(el);
}
/**
 * @summary Encodes a(n) UniversalDomainDefinedAttribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalDomainDefinedAttribute, encoded as an ASN.1 Element.
 */
export function _encode_UniversalDomainDefinedAttribute(
    value: UniversalDomainDefinedAttribute,
    elGetter: $.ASN1Encoder<UniversalDomainDefinedAttribute>
) {
    if (!_cached_encoder_for_UniversalDomainDefinedAttribute) {
        _cached_encoder_for_UniversalDomainDefinedAttribute = function (
            value: UniversalDomainDefinedAttribute,
            elGetter: $.ASN1Encoder<UniversalDomainDefinedAttribute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_UniversalOrBMPString(
                            value.type_,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_UniversalOrBMPString(
                            value.value,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UniversalDomainDefinedAttribute(value, elGetter);
}

export type UniversalDomainDefinedAttributes<> = UniversalDomainDefinedAttribute[]; // SequenceOfType
let _cached_decoder_for_UniversalDomainDefinedAttributes: $.ASN1Decoder<
    UniversalDomainDefinedAttributes
> | null = null;
let _cached_encoder_for_UniversalDomainDefinedAttributes: $.ASN1Encoder<
    UniversalDomainDefinedAttributes
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalDomainDefinedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalDomainDefinedAttributes} The decoded data structure.
 */
export function _decode_UniversalDomainDefinedAttributes(el: _Element) {
    if (!_cached_decoder_for_UniversalDomainDefinedAttributes) {
        _cached_decoder_for_UniversalDomainDefinedAttributes = $._decodeSequenceOf<
            UniversalDomainDefinedAttribute
        >(() => _decode_UniversalDomainDefinedAttribute);
    }
    return _cached_decoder_for_UniversalDomainDefinedAttributes(el);
}
/**
 * @summary Encodes a(n) UniversalDomainDefinedAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalDomainDefinedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_UniversalDomainDefinedAttributes(
    value: UniversalDomainDefinedAttributes,
    elGetter: $.ASN1Encoder<UniversalDomainDefinedAttributes>
) {
    if (!_cached_encoder_for_UniversalDomainDefinedAttributes) {
        _cached_encoder_for_UniversalDomainDefinedAttributes = $._encodeSequenceOf<
            UniversalDomainDefinedAttribute
        >(() => _encode_UniversalDomainDefinedAttribute, $.BER);
    }
    return _cached_encoder_for_UniversalDomainDefinedAttributes(
        value,
        elGetter
    );
}

/**
 * @summary universal_domain_defined_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-domain-defined-attributes EXTENSION-ATTRIBUTE ::= {
 *                  UniversalDomainDefinedAttributes
 *   IDENTIFIED BY  28 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_domain_defined_attributes: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalDomainDefinedAttributes,
    },
    encoderFor: {
        "&Type": _encode_UniversalDomainDefinedAttributes,
    },
    "&id": 28 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type PDSName<> = PrintableString; // PrintableString
let _cached_decoder_for_PDSName: $.ASN1Decoder<PDSName> | null = null;
let _cached_encoder_for_PDSName: $.ASN1Encoder<PDSName> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PDSName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDSName} The decoded data structure.
 */
export function _decode_PDSName(el: _Element) {
    if (!_cached_decoder_for_PDSName) {
        _cached_decoder_for_PDSName = $._decodePrintableString;
    }
    return _cached_decoder_for_PDSName(el);
}
/**
 * @summary Encodes a(n) PDSName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDSName, encoded as an ASN.1 Element.
 */
export function _encode_PDSName(
    value: PDSName,
    elGetter: $.ASN1Encoder<PDSName>
) {
    if (!_cached_encoder_for_PDSName) {
        _cached_encoder_for_PDSName = $._encodePrintableString;
    }
    return _cached_encoder_for_PDSName(value, elGetter);
}

/**
 * @summary pds_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pds-name EXTENSION-ATTRIBUTE ::= {
 *                  PDSName
 *   IDENTIFIED BY  7 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const pds_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PDSName,
    },
    encoderFor: {
        "&Type": _encode_PDSName,
    },
    "&id": 7 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary PhysicalDeliveryCountryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalDeliveryCountryName  ::=  CHOICE {
 *   x121-dcc-code         NumericString(SIZE (ub-country-name-numeric-length)),
 *   iso-3166-alpha2-code  PrintableString(SIZE (ub-country-name-alpha-length)) }
 * ```
 */
export type PhysicalDeliveryCountryName =
    | { x121_dcc_code: NumericString } /* CHOICE_ALT_ROOT */
    | { iso_3166_alpha2_code: PrintableString } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_PhysicalDeliveryCountryName: $.ASN1Decoder<
    PhysicalDeliveryCountryName
> | null = null;
let _cached_encoder_for_PhysicalDeliveryCountryName: $.ASN1Encoder<
    PhysicalDeliveryCountryName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryCountryName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryCountryName} The decoded data structure.
 */
export function _decode_PhysicalDeliveryCountryName(el: _Element) {
    if (!_cached_decoder_for_PhysicalDeliveryCountryName) {
        _cached_decoder_for_PhysicalDeliveryCountryName = $._decode_inextensible_choice<
            PhysicalDeliveryCountryName
        >({
            "UNIVERSAL 18": ["x121_dcc_code", $._decodeNumericString],
            "UNIVERSAL 19": ["iso_3166_alpha2_code", $._decodePrintableString],
        });
    }
    return _cached_decoder_for_PhysicalDeliveryCountryName(el);
}
/**
 * @summary Encodes a(n) PhysicalDeliveryCountryName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryCountryName, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalDeliveryCountryName(
    value: PhysicalDeliveryCountryName,
    elGetter: $.ASN1Encoder<PhysicalDeliveryCountryName>
) {
    if (!_cached_encoder_for_PhysicalDeliveryCountryName) {
        _cached_encoder_for_PhysicalDeliveryCountryName = $._encode_choice<
            PhysicalDeliveryCountryName
        >(
            {
                x121_dcc_code: $._encodeNumericString,
                iso_3166_alpha2_code: $._encodePrintableString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_PhysicalDeliveryCountryName(value, elGetter);
}

/**
 * @summary physical_delivery_country_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-delivery-country-name EXTENSION-ATTRIBUTE ::= {
 *                  PhysicalDeliveryCountryName
 *   IDENTIFIED BY  8 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const physical_delivery_country_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PhysicalDeliveryCountryName,
    },
    encoderFor: {
        "&Type": _encode_PhysicalDeliveryCountryName,
    },
    "&id": 8 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary PostalCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PostalCode  ::=  CHOICE {
 *   numeric-code    NumericString(SIZE (1..ub-postal-code-length)),
 *   printable-code  PrintableString(SIZE (1..ub-postal-code-length))
 * }
 * ```
 */
export type PostalCode =
    | { numeric_code: NumericString } /* CHOICE_ALT_ROOT */
    | { printable_code: PrintableString } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_PostalCode: $.ASN1Decoder<PostalCode> | null = null;
let _cached_encoder_for_PostalCode: $.ASN1Encoder<PostalCode> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PostalCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PostalCode} The decoded data structure.
 */
export function _decode_PostalCode(el: _Element) {
    if (!_cached_decoder_for_PostalCode) {
        _cached_decoder_for_PostalCode = $._decode_inextensible_choice<
            PostalCode
        >({
            "UNIVERSAL 18": ["numeric_code", $._decodeNumericString],
            "UNIVERSAL 19": ["printable_code", $._decodePrintableString],
        });
    }
    return _cached_decoder_for_PostalCode(el);
}
/**
 * @summary Encodes a(n) PostalCode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PostalCode, encoded as an ASN.1 Element.
 */
export function _encode_PostalCode(
    value: PostalCode,
    elGetter: $.ASN1Encoder<PostalCode>
) {
    if (!_cached_encoder_for_PostalCode) {
        _cached_encoder_for_PostalCode = $._encode_choice<PostalCode>(
            {
                numeric_code: $._encodeNumericString,
                printable_code: $._encodePrintableString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_PostalCode(value, elGetter);
}

/**
 * @summary postal_code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * postal-code EXTENSION-ATTRIBUTE ::= {
 *                  PostalCode
 *   IDENTIFIED BY  9 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const postal_code: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PostalCode,
    },
    encoderFor: {
        "&Type": _encode_PostalCode,
    },
    "&id": 9 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary PDSParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDSParameter ::= SET {
 *   printable-string  PrintableString(SIZE (1..ub-pds-parameter-length)) OPTIONAL,
 *   teletex-string    TeletexString(SIZE (1..ub-pds-parameter-length)) OPTIONAL }
 * ```
 *
 * @class
 */
export class PDSParameter {
    constructor(
        /**
         * @summary `printable_string`.
         * @public
         * @readonly
         */
        readonly printable_string: OPTIONAL<PrintableString>,
        /**
         * @summary `teletex_string`.
         * @public
         * @readonly
         */
        readonly teletex_string: OPTIONAL<TeletexString>
    ) {}

    /**
     * @summary Restructures an object into a PDSParameter
     * @description
     *
     * This takes an `object` and converts it to a `PDSParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDSParameter`.
     * @returns {PDSParameter}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof PDSParameter]: PDSParameter[_K] }>
    ): PDSParameter {
        return new PDSParameter(_o.printable_string, _o.teletex_string);
    }
}
/**
 * @summary The Leading Root Component Types of PDSParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PDSParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "printable-string",
        true,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "teletex-string",
        true,
        $.hasTag(_TagClass.universal, 20),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of PDSParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PDSParameter: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of PDSParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PDSParameter: $.ComponentSpec[] = [];
let _cached_decoder_for_PDSParameter: $.ASN1Decoder<PDSParameter> | null = null;
let _cached_encoder_for_PDSParameter: $.ASN1Encoder<PDSParameter> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PDSParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDSParameter} The decoded data structure.
 */
export function _decode_PDSParameter(el: _Element) {
    if (!_cached_decoder_for_PDSParameter) {
        _cached_decoder_for_PDSParameter = function (
            el: _Element
        ): PDSParameter {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let printable_string: OPTIONAL<PrintableString>;
            let teletex_string: OPTIONAL<TeletexString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "printable-string": (_el: _Element): void => {
                    printable_string = $._decodePrintableString(_el);
                },
                "teletex-string": (_el: _Element): void => {
                    teletex_string = $._decodeTeletexString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PDSParameter,
                _extension_additions_list_spec_for_PDSParameter,
                _root_component_type_list_2_spec_for_PDSParameter,
                undefined
            );
            return new PDSParameter(
                /* SET_CONSTRUCTOR_CALL */ printable_string,
                teletex_string
            );
        };
    }
    return _cached_decoder_for_PDSParameter(el);
}
/**
 * @summary Encodes a(n) PDSParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDSParameter, encoded as an ASN.1 Element.
 */
export function _encode_PDSParameter(
    value: PDSParameter,
    elGetter: $.ASN1Encoder<PDSParameter>
) {
    if (!_cached_encoder_for_PDSParameter) {
        _cached_encoder_for_PDSParameter = function (
            value: PDSParameter,
            elGetter: $.ASN1Encoder<PDSParameter>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.printable_string === undefined
                            ? undefined
                            : $._encodePrintableString(
                                  value.printable_string,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.teletex_string === undefined
                            ? undefined
                            : $._encodeTeletexString(
                                  value.teletex_string,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PDSParameter(value, elGetter);
}

export type PhysicalDeliveryOfficeName<> = PDSParameter; // DefinedType
let _cached_decoder_for_PhysicalDeliveryOfficeName: $.ASN1Decoder<
    PhysicalDeliveryOfficeName
> | null = null;
let _cached_encoder_for_PhysicalDeliveryOfficeName: $.ASN1Encoder<
    PhysicalDeliveryOfficeName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryOfficeName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryOfficeName} The decoded data structure.
 */
export function _decode_PhysicalDeliveryOfficeName(el: _Element) {
    if (!_cached_decoder_for_PhysicalDeliveryOfficeName) {
        _cached_decoder_for_PhysicalDeliveryOfficeName = _decode_PDSParameter;
    }
    return _cached_decoder_for_PhysicalDeliveryOfficeName(el);
}
/**
 * @summary Encodes a(n) PhysicalDeliveryOfficeName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryOfficeName, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalDeliveryOfficeName(
    value: PhysicalDeliveryOfficeName,
    elGetter: $.ASN1Encoder<PhysicalDeliveryOfficeName>
) {
    if (!_cached_encoder_for_PhysicalDeliveryOfficeName) {
        _cached_encoder_for_PhysicalDeliveryOfficeName = _encode_PDSParameter;
    }
    return _cached_encoder_for_PhysicalDeliveryOfficeName(value, elGetter);
}

/**
 * @summary physical_delivery_office_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-delivery-office-name EXTENSION-ATTRIBUTE ::= {
 *                  PhysicalDeliveryOfficeName
 *   IDENTIFIED BY  10 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const physical_delivery_office_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PhysicalDeliveryOfficeName,
    },
    encoderFor: {
        "&Type": _encode_PhysicalDeliveryOfficeName,
    },
    "&id": 10 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary ub_pds_parameter_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-pds-parameter-length                   INTEGER ::= 30
 * ```
 *
 * @constant
 */
export const ub_pds_parameter_length: INTEGER = 30;

export type UniversalPDSParameter<> = UniversalOrBMPString; // DefinedType
let _cached_decoder_for_UniversalPDSParameter: $.ASN1Decoder<
    UniversalPDSParameter
> | null = null;
let _cached_encoder_for_UniversalPDSParameter: $.ASN1Encoder<
    UniversalPDSParameter
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPDSParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPDSParameter} The decoded data structure.
 */
export function _decode_UniversalPDSParameter(el: _Element) {
    if (!_cached_decoder_for_UniversalPDSParameter) {
        _cached_decoder_for_UniversalPDSParameter = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalPDSParameter(el);
}
/**
 * @summary Encodes a(n) UniversalPDSParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPDSParameter, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPDSParameter(
    value: UniversalPDSParameter,
    elGetter: $.ASN1Encoder<UniversalPDSParameter>
) {
    if (!_cached_encoder_for_UniversalPDSParameter) {
        _cached_encoder_for_UniversalPDSParameter = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalPDSParameter(value, elGetter);
}

export type UniversalPhysicalDeliveryOfficeName<> = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalPhysicalDeliveryOfficeName: $.ASN1Decoder<
    UniversalPhysicalDeliveryOfficeName
> | null = null;
let _cached_encoder_for_UniversalPhysicalDeliveryOfficeName: $.ASN1Encoder<
    UniversalPhysicalDeliveryOfficeName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPhysicalDeliveryOfficeName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPhysicalDeliveryOfficeName} The decoded data structure.
 */
export function _decode_UniversalPhysicalDeliveryOfficeName(el: _Element) {
    if (!_cached_decoder_for_UniversalPhysicalDeliveryOfficeName) {
        _cached_decoder_for_UniversalPhysicalDeliveryOfficeName = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPhysicalDeliveryOfficeName(el);
}
/**
 * @summary Encodes a(n) UniversalPhysicalDeliveryOfficeName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPhysicalDeliveryOfficeName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPhysicalDeliveryOfficeName(
    value: UniversalPhysicalDeliveryOfficeName,
    elGetter: $.ASN1Encoder<UniversalPhysicalDeliveryOfficeName>
) {
    if (!_cached_encoder_for_UniversalPhysicalDeliveryOfficeName) {
        _cached_encoder_for_UniversalPhysicalDeliveryOfficeName = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPhysicalDeliveryOfficeName(
        value,
        elGetter
    );
}

/**
 * @summary universal_physical_delivery_office_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-physical-delivery-office-name EXTENSION-ATTRIBUTE ::= {
 *                  UniversalPhysicalDeliveryOfficeName
 *   IDENTIFIED BY  29 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_physical_delivery_office_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalPhysicalDeliveryOfficeName,
    },
    encoderFor: {
        "&Type": _encode_UniversalPhysicalDeliveryOfficeName,
    },
    "&id": 29 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type PhysicalDeliveryOfficeNumber<> = PDSParameter; // DefinedType
let _cached_decoder_for_PhysicalDeliveryOfficeNumber: $.ASN1Decoder<
    PhysicalDeliveryOfficeNumber
> | null = null;
let _cached_encoder_for_PhysicalDeliveryOfficeNumber: $.ASN1Encoder<
    PhysicalDeliveryOfficeNumber
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryOfficeNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryOfficeNumber} The decoded data structure.
 */
export function _decode_PhysicalDeliveryOfficeNumber(el: _Element) {
    if (!_cached_decoder_for_PhysicalDeliveryOfficeNumber) {
        _cached_decoder_for_PhysicalDeliveryOfficeNumber = _decode_PDSParameter;
    }
    return _cached_decoder_for_PhysicalDeliveryOfficeNumber(el);
}
/**
 * @summary Encodes a(n) PhysicalDeliveryOfficeNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryOfficeNumber, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalDeliveryOfficeNumber(
    value: PhysicalDeliveryOfficeNumber,
    elGetter: $.ASN1Encoder<PhysicalDeliveryOfficeNumber>
) {
    if (!_cached_encoder_for_PhysicalDeliveryOfficeNumber) {
        _cached_encoder_for_PhysicalDeliveryOfficeNumber = _encode_PDSParameter;
    }
    return _cached_encoder_for_PhysicalDeliveryOfficeNumber(value, elGetter);
}

/**
 * @summary physical_delivery_office_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-delivery-office-number EXTENSION-ATTRIBUTE ::= {
 *                  PhysicalDeliveryOfficeNumber
 *   IDENTIFIED BY  11 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const physical_delivery_office_number: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PhysicalDeliveryOfficeNumber,
    },
    encoderFor: {
        "&Type": _encode_PhysicalDeliveryOfficeNumber,
    },
    "&id": 11 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type UniversalPhysicalDeliveryOfficeNumber<> = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalPhysicalDeliveryOfficeNumber: $.ASN1Decoder<
    UniversalPhysicalDeliveryOfficeNumber
> | null = null;
let _cached_encoder_for_UniversalPhysicalDeliveryOfficeNumber: $.ASN1Encoder<
    UniversalPhysicalDeliveryOfficeNumber
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPhysicalDeliveryOfficeNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPhysicalDeliveryOfficeNumber} The decoded data structure.
 */
export function _decode_UniversalPhysicalDeliveryOfficeNumber(el: _Element) {
    if (!_cached_decoder_for_UniversalPhysicalDeliveryOfficeNumber) {
        _cached_decoder_for_UniversalPhysicalDeliveryOfficeNumber = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPhysicalDeliveryOfficeNumber(el);
}
/**
 * @summary Encodes a(n) UniversalPhysicalDeliveryOfficeNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPhysicalDeliveryOfficeNumber, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPhysicalDeliveryOfficeNumber(
    value: UniversalPhysicalDeliveryOfficeNumber,
    elGetter: $.ASN1Encoder<UniversalPhysicalDeliveryOfficeNumber>
) {
    if (!_cached_encoder_for_UniversalPhysicalDeliveryOfficeNumber) {
        _cached_encoder_for_UniversalPhysicalDeliveryOfficeNumber = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPhysicalDeliveryOfficeNumber(
        value,
        elGetter
    );
}

/**
 * @summary universal_physical_delivery_office_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-physical-delivery-office-number EXTENSION-ATTRIBUTE ::= {
 *                  UniversalPhysicalDeliveryOfficeNumber
 *   IDENTIFIED BY  30 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_physical_delivery_office_number: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalPhysicalDeliveryOfficeNumber,
    },
    encoderFor: {
        "&Type": _encode_UniversalPhysicalDeliveryOfficeNumber,
    },
    "&id": 30 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type ExtensionORAddressComponents<> = PDSParameter; // DefinedType
let _cached_decoder_for_ExtensionORAddressComponents: $.ASN1Decoder<
    ExtensionORAddressComponents
> | null = null;
let _cached_encoder_for_ExtensionORAddressComponents: $.ASN1Encoder<
    ExtensionORAddressComponents
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionORAddressComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionORAddressComponents} The decoded data structure.
 */
export function _decode_ExtensionORAddressComponents(el: _Element) {
    if (!_cached_decoder_for_ExtensionORAddressComponents) {
        _cached_decoder_for_ExtensionORAddressComponents = _decode_PDSParameter;
    }
    return _cached_decoder_for_ExtensionORAddressComponents(el);
}
/**
 * @summary Encodes a(n) ExtensionORAddressComponents into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionORAddressComponents, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionORAddressComponents(
    value: ExtensionORAddressComponents,
    elGetter: $.ASN1Encoder<ExtensionORAddressComponents>
) {
    if (!_cached_encoder_for_ExtensionORAddressComponents) {
        _cached_encoder_for_ExtensionORAddressComponents = _encode_PDSParameter;
    }
    return _cached_encoder_for_ExtensionORAddressComponents(value, elGetter);
}

/**
 * @summary extension_OR_address_components
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extension-OR-address-components EXTENSION-ATTRIBUTE ::= {
 *                  ExtensionORAddressComponents
 *   IDENTIFIED BY  12 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const extension_OR_address_components: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ExtensionORAddressComponents,
    },
    encoderFor: {
        "&Type": _encode_ExtensionORAddressComponents,
    },
    "&id": 12 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type UniversalExtensionORAddressComponents<> = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalExtensionORAddressComponents: $.ASN1Decoder<
    UniversalExtensionORAddressComponents
> | null = null;
let _cached_encoder_for_UniversalExtensionORAddressComponents: $.ASN1Encoder<
    UniversalExtensionORAddressComponents
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalExtensionORAddressComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalExtensionORAddressComponents} The decoded data structure.
 */
export function _decode_UniversalExtensionORAddressComponents(el: _Element) {
    if (!_cached_decoder_for_UniversalExtensionORAddressComponents) {
        _cached_decoder_for_UniversalExtensionORAddressComponents = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalExtensionORAddressComponents(el);
}
/**
 * @summary Encodes a(n) UniversalExtensionORAddressComponents into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalExtensionORAddressComponents, encoded as an ASN.1 Element.
 */
export function _encode_UniversalExtensionORAddressComponents(
    value: UniversalExtensionORAddressComponents,
    elGetter: $.ASN1Encoder<UniversalExtensionORAddressComponents>
) {
    if (!_cached_encoder_for_UniversalExtensionORAddressComponents) {
        _cached_encoder_for_UniversalExtensionORAddressComponents = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalExtensionORAddressComponents(
        value,
        elGetter
    );
}

/**
 * @summary universal_extension_OR_address_components
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-extension-OR-address-components EXTENSION-ATTRIBUTE ::= {
 *                  UniversalExtensionORAddressComponents
 *   IDENTIFIED BY  31 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_extension_OR_address_components: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalExtensionORAddressComponents,
    },
    encoderFor: {
        "&Type": _encode_UniversalExtensionORAddressComponents,
    },
    "&id": 31 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type PhysicalDeliveryPersonalName<> = PDSParameter; // DefinedType
let _cached_decoder_for_PhysicalDeliveryPersonalName: $.ASN1Decoder<
    PhysicalDeliveryPersonalName
> | null = null;
let _cached_encoder_for_PhysicalDeliveryPersonalName: $.ASN1Encoder<
    PhysicalDeliveryPersonalName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryPersonalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryPersonalName} The decoded data structure.
 */
export function _decode_PhysicalDeliveryPersonalName(el: _Element) {
    if (!_cached_decoder_for_PhysicalDeliveryPersonalName) {
        _cached_decoder_for_PhysicalDeliveryPersonalName = _decode_PDSParameter;
    }
    return _cached_decoder_for_PhysicalDeliveryPersonalName(el);
}
/**
 * @summary Encodes a(n) PhysicalDeliveryPersonalName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryPersonalName, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalDeliveryPersonalName(
    value: PhysicalDeliveryPersonalName,
    elGetter: $.ASN1Encoder<PhysicalDeliveryPersonalName>
) {
    if (!_cached_encoder_for_PhysicalDeliveryPersonalName) {
        _cached_encoder_for_PhysicalDeliveryPersonalName = _encode_PDSParameter;
    }
    return _cached_encoder_for_PhysicalDeliveryPersonalName(value, elGetter);
}

/**
 * @summary physical_delivery_personal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-delivery-personal-name EXTENSION-ATTRIBUTE ::= {
 *                  PhysicalDeliveryPersonalName
 *   IDENTIFIED BY  13 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const physical_delivery_personal_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PhysicalDeliveryPersonalName,
    },
    encoderFor: {
        "&Type": _encode_PhysicalDeliveryPersonalName,
    },
    "&id": 13 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type UniversalPhysicalDeliveryPersonalName<> = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalPhysicalDeliveryPersonalName: $.ASN1Decoder<
    UniversalPhysicalDeliveryPersonalName
> | null = null;
let _cached_encoder_for_UniversalPhysicalDeliveryPersonalName: $.ASN1Encoder<
    UniversalPhysicalDeliveryPersonalName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPhysicalDeliveryPersonalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPhysicalDeliveryPersonalName} The decoded data structure.
 */
export function _decode_UniversalPhysicalDeliveryPersonalName(el: _Element) {
    if (!_cached_decoder_for_UniversalPhysicalDeliveryPersonalName) {
        _cached_decoder_for_UniversalPhysicalDeliveryPersonalName = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPhysicalDeliveryPersonalName(el);
}
/**
 * @summary Encodes a(n) UniversalPhysicalDeliveryPersonalName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPhysicalDeliveryPersonalName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPhysicalDeliveryPersonalName(
    value: UniversalPhysicalDeliveryPersonalName,
    elGetter: $.ASN1Encoder<UniversalPhysicalDeliveryPersonalName>
) {
    if (!_cached_encoder_for_UniversalPhysicalDeliveryPersonalName) {
        _cached_encoder_for_UniversalPhysicalDeliveryPersonalName = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPhysicalDeliveryPersonalName(
        value,
        elGetter
    );
}

/**
 * @summary universal_physical_delivery_personal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-physical-delivery-personal-name EXTENSION-ATTRIBUTE ::= {
 *                  UniversalPhysicalDeliveryPersonalName
 *   IDENTIFIED BY  32 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_physical_delivery_personal_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalPhysicalDeliveryPersonalName,
    },
    encoderFor: {
        "&Type": _encode_UniversalPhysicalDeliveryPersonalName,
    },
    "&id": 32 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type PhysicalDeliveryOrganizationName<> = PDSParameter; // DefinedType
let _cached_decoder_for_PhysicalDeliveryOrganizationName: $.ASN1Decoder<
    PhysicalDeliveryOrganizationName
> | null = null;
let _cached_encoder_for_PhysicalDeliveryOrganizationName: $.ASN1Encoder<
    PhysicalDeliveryOrganizationName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryOrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryOrganizationName} The decoded data structure.
 */
export function _decode_PhysicalDeliveryOrganizationName(el: _Element) {
    if (!_cached_decoder_for_PhysicalDeliveryOrganizationName) {
        _cached_decoder_for_PhysicalDeliveryOrganizationName = _decode_PDSParameter;
    }
    return _cached_decoder_for_PhysicalDeliveryOrganizationName(el);
}
/**
 * @summary Encodes a(n) PhysicalDeliveryOrganizationName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryOrganizationName, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalDeliveryOrganizationName(
    value: PhysicalDeliveryOrganizationName,
    elGetter: $.ASN1Encoder<PhysicalDeliveryOrganizationName>
) {
    if (!_cached_encoder_for_PhysicalDeliveryOrganizationName) {
        _cached_encoder_for_PhysicalDeliveryOrganizationName = _encode_PDSParameter;
    }
    return _cached_encoder_for_PhysicalDeliveryOrganizationName(
        value,
        elGetter
    );
}

/**
 * @summary physical_delivery_organization_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-delivery-organization-name EXTENSION-ATTRIBUTE ::= {
 *                  PhysicalDeliveryOrganizationName
 *   IDENTIFIED BY  14 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const physical_delivery_organization_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PhysicalDeliveryOrganizationName,
    },
    encoderFor: {
        "&Type": _encode_PhysicalDeliveryOrganizationName,
    },
    "&id": 14 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type UniversalPhysicalDeliveryOrganizationName<> = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalPhysicalDeliveryOrganizationName: $.ASN1Decoder<
    UniversalPhysicalDeliveryOrganizationName
> | null = null;
let _cached_encoder_for_UniversalPhysicalDeliveryOrganizationName: $.ASN1Encoder<
    UniversalPhysicalDeliveryOrganizationName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPhysicalDeliveryOrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPhysicalDeliveryOrganizationName} The decoded data structure.
 */
export function _decode_UniversalPhysicalDeliveryOrganizationName(
    el: _Element
) {
    if (!_cached_decoder_for_UniversalPhysicalDeliveryOrganizationName) {
        _cached_decoder_for_UniversalPhysicalDeliveryOrganizationName = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPhysicalDeliveryOrganizationName(el);
}
/**
 * @summary Encodes a(n) UniversalPhysicalDeliveryOrganizationName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPhysicalDeliveryOrganizationName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPhysicalDeliveryOrganizationName(
    value: UniversalPhysicalDeliveryOrganizationName,
    elGetter: $.ASN1Encoder<UniversalPhysicalDeliveryOrganizationName>
) {
    if (!_cached_encoder_for_UniversalPhysicalDeliveryOrganizationName) {
        _cached_encoder_for_UniversalPhysicalDeliveryOrganizationName = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPhysicalDeliveryOrganizationName(
        value,
        elGetter
    );
}

/**
 * @summary universal_physical_delivery_organization_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-physical-delivery-organization-name EXTENSION-ATTRIBUTE ::= {
 *                  UniversalPhysicalDeliveryOrganizationName
 *   IDENTIFIED BY  33 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_physical_delivery_organization_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalPhysicalDeliveryOrganizationName,
    },
    encoderFor: {
        "&Type": _encode_UniversalPhysicalDeliveryOrganizationName,
    },
    "&id": 33 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type ExtensionPhysicalDeliveryAddressComponents<> = PDSParameter; // DefinedType
let _cached_decoder_for_ExtensionPhysicalDeliveryAddressComponents: $.ASN1Decoder<
    ExtensionPhysicalDeliveryAddressComponents
> | null = null;
let _cached_encoder_for_ExtensionPhysicalDeliveryAddressComponents: $.ASN1Encoder<
    ExtensionPhysicalDeliveryAddressComponents
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionPhysicalDeliveryAddressComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionPhysicalDeliveryAddressComponents} The decoded data structure.
 */
export function _decode_ExtensionPhysicalDeliveryAddressComponents(
    el: _Element
) {
    if (!_cached_decoder_for_ExtensionPhysicalDeliveryAddressComponents) {
        _cached_decoder_for_ExtensionPhysicalDeliveryAddressComponents = _decode_PDSParameter;
    }
    return _cached_decoder_for_ExtensionPhysicalDeliveryAddressComponents(el);
}
/**
 * @summary Encodes a(n) ExtensionPhysicalDeliveryAddressComponents into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionPhysicalDeliveryAddressComponents, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionPhysicalDeliveryAddressComponents(
    value: ExtensionPhysicalDeliveryAddressComponents,
    elGetter: $.ASN1Encoder<ExtensionPhysicalDeliveryAddressComponents>
) {
    if (!_cached_encoder_for_ExtensionPhysicalDeliveryAddressComponents) {
        _cached_encoder_for_ExtensionPhysicalDeliveryAddressComponents = _encode_PDSParameter;
    }
    return _cached_encoder_for_ExtensionPhysicalDeliveryAddressComponents(
        value,
        elGetter
    );
}

/**
 * @summary extension_physical_delivery_address_components
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extension-physical-delivery-address-components EXTENSION-ATTRIBUTE ::= {
 *                  ExtensionPhysicalDeliveryAddressComponents
 *   IDENTIFIED BY  15 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const extension_physical_delivery_address_components: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ExtensionPhysicalDeliveryAddressComponents,
    },
    encoderFor: {
        "&Type": _encode_ExtensionPhysicalDeliveryAddressComponents,
    },
    "&id": 15 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type UniversalExtensionPhysicalDeliveryAddressComponents<> = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalExtensionPhysicalDeliveryAddressComponents: $.ASN1Decoder<
    UniversalExtensionPhysicalDeliveryAddressComponents
> | null = null;
let _cached_encoder_for_UniversalExtensionPhysicalDeliveryAddressComponents: $.ASN1Encoder<
    UniversalExtensionPhysicalDeliveryAddressComponents
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalExtensionPhysicalDeliveryAddressComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalExtensionPhysicalDeliveryAddressComponents} The decoded data structure.
 */
export function _decode_UniversalExtensionPhysicalDeliveryAddressComponents(
    el: _Element
) {
    if (
        !_cached_decoder_for_UniversalExtensionPhysicalDeliveryAddressComponents
    ) {
        _cached_decoder_for_UniversalExtensionPhysicalDeliveryAddressComponents = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalExtensionPhysicalDeliveryAddressComponents(
        el
    );
}
/**
 * @summary Encodes a(n) UniversalExtensionPhysicalDeliveryAddressComponents into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalExtensionPhysicalDeliveryAddressComponents, encoded as an ASN.1 Element.
 */
export function _encode_UniversalExtensionPhysicalDeliveryAddressComponents(
    value: UniversalExtensionPhysicalDeliveryAddressComponents,
    elGetter: $.ASN1Encoder<UniversalExtensionPhysicalDeliveryAddressComponents>
) {
    if (
        !_cached_encoder_for_UniversalExtensionPhysicalDeliveryAddressComponents
    ) {
        _cached_encoder_for_UniversalExtensionPhysicalDeliveryAddressComponents = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalExtensionPhysicalDeliveryAddressComponents(
        value,
        elGetter
    );
}

/**
 * @summary universal_extension_physical_delivery_address_components
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-extension-physical-delivery-address-components EXTENSION-ATTRIBUTE ::= {
 *                  UniversalExtensionPhysicalDeliveryAddressComponents
 *   IDENTIFIED BY  34 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_extension_physical_delivery_address_components: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalExtensionPhysicalDeliveryAddressComponents,
    },
    encoderFor: {
        "&Type": _encode_UniversalExtensionPhysicalDeliveryAddressComponents,
    },
    "&id": 34 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary UnformattedPostalAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnformattedPostalAddress ::= SET {
 *   printable-address SEQUENCE SIZE (1..ub-pds-physical-address-lines) OF
 *     PrintableString (SIZE (1..ub-pds-parameter-length)) OPTIONAL,
 *   teletex-string    TeletexString(SIZE (1..ub-unformatted-address-length)) OPTIONAL }
 * ```
 *
 * @class
 */
export class UnformattedPostalAddress {
    constructor(
        /**
         * @summary `printable_address`.
         * @public
         * @readonly
         */
        readonly printable_address: OPTIONAL<PrintableString[]>,
        /**
         * @summary `teletex_string`.
         * @public
         * @readonly
         */
        readonly teletex_string: OPTIONAL<TeletexString>
    ) {}

    /**
     * @summary Restructures an object into a UnformattedPostalAddress
     * @description
     *
     * This takes an `object` and converts it to a `UnformattedPostalAddress`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UnformattedPostalAddress`.
     * @returns {UnformattedPostalAddress}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof UnformattedPostalAddress]: UnformattedPostalAddress[_K];
            }
        >
    ): UnformattedPostalAddress {
        return new UnformattedPostalAddress(
            _o.printable_address,
            _o.teletex_string
        );
    }
}
/**
 * @summary The Leading Root Component Types of UnformattedPostalAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UnformattedPostalAddress: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "printable-address",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "teletex-string",
        true,
        $.hasTag(_TagClass.universal, 20),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of UnformattedPostalAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnformattedPostalAddress: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of UnformattedPostalAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnformattedPostalAddress: $.ComponentSpec[] = [];
let _cached_decoder_for_UnformattedPostalAddress: $.ASN1Decoder<
    UnformattedPostalAddress
> | null = null;
let _cached_encoder_for_UnformattedPostalAddress: $.ASN1Encoder<
    UnformattedPostalAddress
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UnformattedPostalAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnformattedPostalAddress} The decoded data structure.
 */
export function _decode_UnformattedPostalAddress(el: _Element) {
    if (!_cached_decoder_for_UnformattedPostalAddress) {
        _cached_decoder_for_UnformattedPostalAddress = function (
            el: _Element
        ): UnformattedPostalAddress {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let printable_address: OPTIONAL<PrintableString[]>;
            let teletex_string: OPTIONAL<TeletexString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "printable-address": (_el: _Element): void => {
                    printable_address = $._decodeSequenceOf<PrintableString>(
                        () => $._decodePrintableString
                    )(_el);
                },
                "teletex-string": (_el: _Element): void => {
                    teletex_string = $._decodeTeletexString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UnformattedPostalAddress,
                _extension_additions_list_spec_for_UnformattedPostalAddress,
                _root_component_type_list_2_spec_for_UnformattedPostalAddress,
                undefined
            );
            return new UnformattedPostalAddress(
                /* SET_CONSTRUCTOR_CALL */ printable_address,
                teletex_string
            );
        };
    }
    return _cached_decoder_for_UnformattedPostalAddress(el);
}
/**
 * @summary Encodes a(n) UnformattedPostalAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnformattedPostalAddress, encoded as an ASN.1 Element.
 */
export function _encode_UnformattedPostalAddress(
    value: UnformattedPostalAddress,
    elGetter: $.ASN1Encoder<UnformattedPostalAddress>
) {
    if (!_cached_encoder_for_UnformattedPostalAddress) {
        _cached_encoder_for_UnformattedPostalAddress = function (
            value: UnformattedPostalAddress,
            elGetter: $.ASN1Encoder<UnformattedPostalAddress>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.printable_address === undefined
                            ? undefined
                            : $._encodeSequenceOf<PrintableString>(
                                  () => $._encodePrintableString,
                                  $.BER
                              )(value.printable_address, $.BER),
                        /* IF_ABSENT  */ value.teletex_string === undefined
                            ? undefined
                            : $._encodeTeletexString(
                                  value.teletex_string,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UnformattedPostalAddress(value, elGetter);
}

/**
 * @summary unformatted_postal_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * unformatted-postal-address EXTENSION-ATTRIBUTE ::= {
 *                  UnformattedPostalAddress
 *   IDENTIFIED BY  16 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const unformatted_postal_address: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnformattedPostalAddress,
    },
    encoderFor: {
        "&Type": _encode_UnformattedPostalAddress,
    },
    "&id": 16 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary ub_unformatted_address_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-unformatted-address-length             INTEGER ::= 180
 * ```
 *
 * @constant
 */
export const ub_unformatted_address_length: INTEGER = 180;

export type UniversalUnformattedPostalAddress<> = UniversalOrBMPString; // DefinedType
let _cached_decoder_for_UniversalUnformattedPostalAddress: $.ASN1Decoder<
    UniversalUnformattedPostalAddress
> | null = null;
let _cached_encoder_for_UniversalUnformattedPostalAddress: $.ASN1Encoder<
    UniversalUnformattedPostalAddress
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalUnformattedPostalAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalUnformattedPostalAddress} The decoded data structure.
 */
export function _decode_UniversalUnformattedPostalAddress(el: _Element) {
    if (!_cached_decoder_for_UniversalUnformattedPostalAddress) {
        _cached_decoder_for_UniversalUnformattedPostalAddress = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalUnformattedPostalAddress(el);
}
/**
 * @summary Encodes a(n) UniversalUnformattedPostalAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalUnformattedPostalAddress, encoded as an ASN.1 Element.
 */
export function _encode_UniversalUnformattedPostalAddress(
    value: UniversalUnformattedPostalAddress,
    elGetter: $.ASN1Encoder<UniversalUnformattedPostalAddress>
) {
    if (!_cached_encoder_for_UniversalUnformattedPostalAddress) {
        _cached_encoder_for_UniversalUnformattedPostalAddress = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalUnformattedPostalAddress(
        value,
        elGetter
    );
}

/**
 * @summary universal_unformatted_postal_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-unformatted-postal-address EXTENSION-ATTRIBUTE ::= {
 *                  UniversalUnformattedPostalAddress
 *   IDENTIFIED BY  35 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_unformatted_postal_address: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalUnformattedPostalAddress,
    },
    encoderFor: {
        "&Type": _encode_UniversalUnformattedPostalAddress,
    },
    "&id": 35 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type StreetAddress<> = PDSParameter; // DefinedType
let _cached_decoder_for_StreetAddress: $.ASN1Decoder<
    StreetAddress
> | null = null;
let _cached_encoder_for_StreetAddress: $.ASN1Encoder<
    StreetAddress
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) StreetAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StreetAddress} The decoded data structure.
 */
export function _decode_StreetAddress(el: _Element) {
    if (!_cached_decoder_for_StreetAddress) {
        _cached_decoder_for_StreetAddress = _decode_PDSParameter;
    }
    return _cached_decoder_for_StreetAddress(el);
}
/**
 * @summary Encodes a(n) StreetAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StreetAddress, encoded as an ASN.1 Element.
 */
export function _encode_StreetAddress(
    value: StreetAddress,
    elGetter: $.ASN1Encoder<StreetAddress>
) {
    if (!_cached_encoder_for_StreetAddress) {
        _cached_encoder_for_StreetAddress = _encode_PDSParameter;
    }
    return _cached_encoder_for_StreetAddress(value, elGetter);
}

/**
 * @summary street_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * street-address EXTENSION-ATTRIBUTE ::= {
 *                  StreetAddress
 *   IDENTIFIED BY  17 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const street_address: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_StreetAddress,
    },
    encoderFor: {
        "&Type": _encode_StreetAddress,
    },
    "&id": 17 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type UniversalStreetAddress<> = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalStreetAddress: $.ASN1Decoder<
    UniversalStreetAddress
> | null = null;
let _cached_encoder_for_UniversalStreetAddress: $.ASN1Encoder<
    UniversalStreetAddress
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalStreetAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalStreetAddress} The decoded data structure.
 */
export function _decode_UniversalStreetAddress(el: _Element) {
    if (!_cached_decoder_for_UniversalStreetAddress) {
        _cached_decoder_for_UniversalStreetAddress = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalStreetAddress(el);
}
/**
 * @summary Encodes a(n) UniversalStreetAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalStreetAddress, encoded as an ASN.1 Element.
 */
export function _encode_UniversalStreetAddress(
    value: UniversalStreetAddress,
    elGetter: $.ASN1Encoder<UniversalStreetAddress>
) {
    if (!_cached_encoder_for_UniversalStreetAddress) {
        _cached_encoder_for_UniversalStreetAddress = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalStreetAddress(value, elGetter);
}

/**
 * @summary universal_street_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-street-address EXTENSION-ATTRIBUTE ::= {
 *                  UniversalStreetAddress
 *   IDENTIFIED BY  36 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_street_address: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalStreetAddress,
    },
    encoderFor: {
        "&Type": _encode_UniversalStreetAddress,
    },
    "&id": 36 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type PostOfficeBoxAddress<> = PDSParameter; // DefinedType
let _cached_decoder_for_PostOfficeBoxAddress: $.ASN1Decoder<
    PostOfficeBoxAddress
> | null = null;
let _cached_encoder_for_PostOfficeBoxAddress: $.ASN1Encoder<
    PostOfficeBoxAddress
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PostOfficeBoxAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PostOfficeBoxAddress} The decoded data structure.
 */
export function _decode_PostOfficeBoxAddress(el: _Element) {
    if (!_cached_decoder_for_PostOfficeBoxAddress) {
        _cached_decoder_for_PostOfficeBoxAddress = _decode_PDSParameter;
    }
    return _cached_decoder_for_PostOfficeBoxAddress(el);
}
/**
 * @summary Encodes a(n) PostOfficeBoxAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PostOfficeBoxAddress, encoded as an ASN.1 Element.
 */
export function _encode_PostOfficeBoxAddress(
    value: PostOfficeBoxAddress,
    elGetter: $.ASN1Encoder<PostOfficeBoxAddress>
) {
    if (!_cached_encoder_for_PostOfficeBoxAddress) {
        _cached_encoder_for_PostOfficeBoxAddress = _encode_PDSParameter;
    }
    return _cached_encoder_for_PostOfficeBoxAddress(value, elGetter);
}

/**
 * @summary post_office_box_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * post-office-box-address EXTENSION-ATTRIBUTE ::= {
 *                  PostOfficeBoxAddress
 *   IDENTIFIED BY  18 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const post_office_box_address: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PostOfficeBoxAddress,
    },
    encoderFor: {
        "&Type": _encode_PostOfficeBoxAddress,
    },
    "&id": 18 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type UniversalPostOfficeBoxAddress<> = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalPostOfficeBoxAddress: $.ASN1Decoder<
    UniversalPostOfficeBoxAddress
> | null = null;
let _cached_encoder_for_UniversalPostOfficeBoxAddress: $.ASN1Encoder<
    UniversalPostOfficeBoxAddress
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPostOfficeBoxAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPostOfficeBoxAddress} The decoded data structure.
 */
export function _decode_UniversalPostOfficeBoxAddress(el: _Element) {
    if (!_cached_decoder_for_UniversalPostOfficeBoxAddress) {
        _cached_decoder_for_UniversalPostOfficeBoxAddress = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPostOfficeBoxAddress(el);
}
/**
 * @summary Encodes a(n) UniversalPostOfficeBoxAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPostOfficeBoxAddress, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPostOfficeBoxAddress(
    value: UniversalPostOfficeBoxAddress,
    elGetter: $.ASN1Encoder<UniversalPostOfficeBoxAddress>
) {
    if (!_cached_encoder_for_UniversalPostOfficeBoxAddress) {
        _cached_encoder_for_UniversalPostOfficeBoxAddress = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPostOfficeBoxAddress(value, elGetter);
}

/**
 * @summary universal_post_office_box_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-post-office-box-address EXTENSION-ATTRIBUTE ::= {
 *                  UniversalPostOfficeBoxAddress
 *   IDENTIFIED BY  37 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_post_office_box_address: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalPostOfficeBoxAddress,
    },
    encoderFor: {
        "&Type": _encode_UniversalPostOfficeBoxAddress,
    },
    "&id": 37 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type PosteRestanteAddress<> = PDSParameter; // DefinedType
let _cached_decoder_for_PosteRestanteAddress: $.ASN1Decoder<
    PosteRestanteAddress
> | null = null;
let _cached_encoder_for_PosteRestanteAddress: $.ASN1Encoder<
    PosteRestanteAddress
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PosteRestanteAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PosteRestanteAddress} The decoded data structure.
 */
export function _decode_PosteRestanteAddress(el: _Element) {
    if (!_cached_decoder_for_PosteRestanteAddress) {
        _cached_decoder_for_PosteRestanteAddress = _decode_PDSParameter;
    }
    return _cached_decoder_for_PosteRestanteAddress(el);
}
/**
 * @summary Encodes a(n) PosteRestanteAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PosteRestanteAddress, encoded as an ASN.1 Element.
 */
export function _encode_PosteRestanteAddress(
    value: PosteRestanteAddress,
    elGetter: $.ASN1Encoder<PosteRestanteAddress>
) {
    if (!_cached_encoder_for_PosteRestanteAddress) {
        _cached_encoder_for_PosteRestanteAddress = _encode_PDSParameter;
    }
    return _cached_encoder_for_PosteRestanteAddress(value, elGetter);
}

/**
 * @summary poste_restante_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * poste-restante-address EXTENSION-ATTRIBUTE ::= {
 *                  PosteRestanteAddress
 *   IDENTIFIED BY  19 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const poste_restante_address: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PosteRestanteAddress,
    },
    encoderFor: {
        "&Type": _encode_PosteRestanteAddress,
    },
    "&id": 19 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type UniversalPosteRestanteAddress<> = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalPosteRestanteAddress: $.ASN1Decoder<
    UniversalPosteRestanteAddress
> | null = null;
let _cached_encoder_for_UniversalPosteRestanteAddress: $.ASN1Encoder<
    UniversalPosteRestanteAddress
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPosteRestanteAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPosteRestanteAddress} The decoded data structure.
 */
export function _decode_UniversalPosteRestanteAddress(el: _Element) {
    if (!_cached_decoder_for_UniversalPosteRestanteAddress) {
        _cached_decoder_for_UniversalPosteRestanteAddress = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPosteRestanteAddress(el);
}
/**
 * @summary Encodes a(n) UniversalPosteRestanteAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPosteRestanteAddress, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPosteRestanteAddress(
    value: UniversalPosteRestanteAddress,
    elGetter: $.ASN1Encoder<UniversalPosteRestanteAddress>
) {
    if (!_cached_encoder_for_UniversalPosteRestanteAddress) {
        _cached_encoder_for_UniversalPosteRestanteAddress = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPosteRestanteAddress(value, elGetter);
}

/**
 * @summary universal_poste_restante_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-poste-restante-address EXTENSION-ATTRIBUTE ::= {
 *                  UniversalPosteRestanteAddress
 *   IDENTIFIED BY  38 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_poste_restante_address: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalPosteRestanteAddress,
    },
    encoderFor: {
        "&Type": _encode_UniversalPosteRestanteAddress,
    },
    "&id": 38 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type UniquePostalName<> = PDSParameter; // DefinedType
let _cached_decoder_for_UniquePostalName: $.ASN1Decoder<
    UniquePostalName
> | null = null;
let _cached_encoder_for_UniquePostalName: $.ASN1Encoder<
    UniquePostalName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniquePostalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniquePostalName} The decoded data structure.
 */
export function _decode_UniquePostalName(el: _Element) {
    if (!_cached_decoder_for_UniquePostalName) {
        _cached_decoder_for_UniquePostalName = _decode_PDSParameter;
    }
    return _cached_decoder_for_UniquePostalName(el);
}
/**
 * @summary Encodes a(n) UniquePostalName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniquePostalName, encoded as an ASN.1 Element.
 */
export function _encode_UniquePostalName(
    value: UniquePostalName,
    elGetter: $.ASN1Encoder<UniquePostalName>
) {
    if (!_cached_encoder_for_UniquePostalName) {
        _cached_encoder_for_UniquePostalName = _encode_PDSParameter;
    }
    return _cached_encoder_for_UniquePostalName(value, elGetter);
}

/**
 * @summary unique_postal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * unique-postal-name EXTENSION-ATTRIBUTE ::= {
 *                  UniquePostalName
 *   IDENTIFIED BY  20 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const unique_postal_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniquePostalName,
    },
    encoderFor: {
        "&Type": _encode_UniquePostalName,
    },
    "&id": 20 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type UniversalUniquePostalName<> = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalUniquePostalName: $.ASN1Decoder<
    UniversalUniquePostalName
> | null = null;
let _cached_encoder_for_UniversalUniquePostalName: $.ASN1Encoder<
    UniversalUniquePostalName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalUniquePostalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalUniquePostalName} The decoded data structure.
 */
export function _decode_UniversalUniquePostalName(el: _Element) {
    if (!_cached_decoder_for_UniversalUniquePostalName) {
        _cached_decoder_for_UniversalUniquePostalName = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalUniquePostalName(el);
}
/**
 * @summary Encodes a(n) UniversalUniquePostalName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalUniquePostalName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalUniquePostalName(
    value: UniversalUniquePostalName,
    elGetter: $.ASN1Encoder<UniversalUniquePostalName>
) {
    if (!_cached_encoder_for_UniversalUniquePostalName) {
        _cached_encoder_for_UniversalUniquePostalName = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalUniquePostalName(value, elGetter);
}

/**
 * @summary universal_unique_postal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-unique-postal-name EXTENSION-ATTRIBUTE ::= {
 *                  UniversalUniquePostalName
 *   IDENTIFIED BY  39 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_unique_postal_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalUniquePostalName,
    },
    encoderFor: {
        "&Type": _encode_UniversalUniquePostalName,
    },
    "&id": 39 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type LocalPostalAttributes<> = PDSParameter; // DefinedType
let _cached_decoder_for_LocalPostalAttributes: $.ASN1Decoder<
    LocalPostalAttributes
> | null = null;
let _cached_encoder_for_LocalPostalAttributes: $.ASN1Encoder<
    LocalPostalAttributes
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) LocalPostalAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocalPostalAttributes} The decoded data structure.
 */
export function _decode_LocalPostalAttributes(el: _Element) {
    if (!_cached_decoder_for_LocalPostalAttributes) {
        _cached_decoder_for_LocalPostalAttributes = _decode_PDSParameter;
    }
    return _cached_decoder_for_LocalPostalAttributes(el);
}
/**
 * @summary Encodes a(n) LocalPostalAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalPostalAttributes, encoded as an ASN.1 Element.
 */
export function _encode_LocalPostalAttributes(
    value: LocalPostalAttributes,
    elGetter: $.ASN1Encoder<LocalPostalAttributes>
) {
    if (!_cached_encoder_for_LocalPostalAttributes) {
        _cached_encoder_for_LocalPostalAttributes = _encode_PDSParameter;
    }
    return _cached_encoder_for_LocalPostalAttributes(value, elGetter);
}

/**
 * @summary local_postal_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * local-postal-attributes EXTENSION-ATTRIBUTE ::= {
 *                  LocalPostalAttributes
 *   IDENTIFIED BY  21 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const local_postal_attributes: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_LocalPostalAttributes,
    },
    encoderFor: {
        "&Type": _encode_LocalPostalAttributes,
    },
    "&id": 21 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type UniversalLocalPostalAttributes<> = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalLocalPostalAttributes: $.ASN1Decoder<
    UniversalLocalPostalAttributes
> | null = null;
let _cached_encoder_for_UniversalLocalPostalAttributes: $.ASN1Encoder<
    UniversalLocalPostalAttributes
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalLocalPostalAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalLocalPostalAttributes} The decoded data structure.
 */
export function _decode_UniversalLocalPostalAttributes(el: _Element) {
    if (!_cached_decoder_for_UniversalLocalPostalAttributes) {
        _cached_decoder_for_UniversalLocalPostalAttributes = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalLocalPostalAttributes(el);
}
/**
 * @summary Encodes a(n) UniversalLocalPostalAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalLocalPostalAttributes, encoded as an ASN.1 Element.
 */
export function _encode_UniversalLocalPostalAttributes(
    value: UniversalLocalPostalAttributes,
    elGetter: $.ASN1Encoder<UniversalLocalPostalAttributes>
) {
    if (!_cached_encoder_for_UniversalLocalPostalAttributes) {
        _cached_encoder_for_UniversalLocalPostalAttributes = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalLocalPostalAttributes(value, elGetter);
}

/**
 * @summary universal_local_postal_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-local-postal-attributes EXTENSION-ATTRIBUTE ::= {
 *                  UniversalLocalPostalAttributes
 *   IDENTIFIED BY  40 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_local_postal_attributes: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalLocalPostalAttributes,
    },
    encoderFor: {
        "&Type": _encode_UniversalLocalPostalAttributes,
    },
    "&id": 40 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary ExtendedNetworkAddress_e163_4_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedNetworkAddress-e163-4-address ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ExtendedNetworkAddress_e163_4_address {
    constructor(
        /**
         * @summary `number_`.
         * @public
         * @readonly
         */
        readonly number_: NumericString,
        /**
         * @summary `sub_address`.
         * @public
         * @readonly
         */
        readonly sub_address: OPTIONAL<NumericString>
    ) {}

    /**
     * @summary Restructures an object into a ExtendedNetworkAddress_e163_4_address
     * @description
     *
     * This takes an `object` and converts it to a `ExtendedNetworkAddress_e163_4_address`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtendedNetworkAddress_e163_4_address`.
     * @returns {ExtendedNetworkAddress_e163_4_address}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ExtendedNetworkAddress_e163_4_address]: ExtendedNetworkAddress_e163_4_address[_K];
            }
        >
    ): ExtendedNetworkAddress_e163_4_address {
        return new ExtendedNetworkAddress_e163_4_address(
            _o.number_,
            _o.sub_address
        );
    }
}
/**
 * @summary The Leading Root Component Types of ExtendedNetworkAddress_e163_4_address
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExtendedNetworkAddress_e163_4_address: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "number",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sub-address",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ExtendedNetworkAddress_e163_4_address
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExtendedNetworkAddress_e163_4_address: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ExtendedNetworkAddress_e163_4_address
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExtendedNetworkAddress_e163_4_address: $.ComponentSpec[] = [];
let _cached_decoder_for_ExtendedNetworkAddress_e163_4_address: $.ASN1Decoder<
    ExtendedNetworkAddress_e163_4_address
> | null = null;
let _cached_encoder_for_ExtendedNetworkAddress_e163_4_address: $.ASN1Encoder<
    ExtendedNetworkAddress_e163_4_address
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedNetworkAddress_e163_4_address
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedNetworkAddress_e163_4_address} The decoded data structure.
 */
export function _decode_ExtendedNetworkAddress_e163_4_address(el: _Element) {
    if (!_cached_decoder_for_ExtendedNetworkAddress_e163_4_address) {
        _cached_decoder_for_ExtendedNetworkAddress_e163_4_address = function (
            el: _Element
        ): ExtendedNetworkAddress_e163_4_address {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let number_!: NumericString;
            let sub_address: OPTIONAL<NumericString>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                number: (_el: _Element): void => {
                    number_ = $._decode_explicit<NumericString>(
                        () => $._decodeNumericString
                    )(_el);
                },
                "sub-address": (_el: _Element): void => {
                    sub_address = $._decode_explicit<NumericString>(
                        () => $._decodeNumericString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ExtendedNetworkAddress_e163_4_address,
                _extension_additions_list_spec_for_ExtendedNetworkAddress_e163_4_address,
                _root_component_type_list_2_spec_for_ExtendedNetworkAddress_e163_4_address,
                undefined
            );
            return new ExtendedNetworkAddress_e163_4_address(
                /* SEQUENCE_CONSTRUCTOR_CALL */ number_,
                sub_address
            );
        };
    }
    return _cached_decoder_for_ExtendedNetworkAddress_e163_4_address(el);
}
/**
 * @summary Encodes a(n) ExtendedNetworkAddress_e163_4_address into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedNetworkAddress_e163_4_address, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedNetworkAddress_e163_4_address(
    value: ExtendedNetworkAddress_e163_4_address,
    elGetter: $.ASN1Encoder<ExtendedNetworkAddress_e163_4_address>
) {
    if (!_cached_encoder_for_ExtendedNetworkAddress_e163_4_address) {
        _cached_encoder_for_ExtendedNetworkAddress_e163_4_address = function (
            value: ExtendedNetworkAddress_e163_4_address,
            elGetter: $.ASN1Encoder<ExtendedNetworkAddress_e163_4_address>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeNumericString,
                            $.BER
                        )(value.number_, $.BER),
                        /* IF_ABSENT  */ value.sub_address === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeNumericString,
                                  $.BER
                              )(value.sub_address, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ExtendedNetworkAddress_e163_4_address(
        value,
        elGetter
    );
}

/**
 * @summary ExtendedNetworkAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedNetworkAddress  ::=  CHOICE {
 *   e163-4-address    SEQUENCE {
 *     number       [0]  NumericString(SIZE (1..ub-e163-4-number-length)),
 *     sub-address  [1]  NumericString(SIZE (1..ub-e163-4-sub-address-length))
 *                   OPTIONAL},
 *   psap-address [0]  PresentationAddress }
 * ```
 */
export type ExtendedNetworkAddress =
    | {
          e163_4_address: ExtendedNetworkAddress_e163_4_address;
      } /* CHOICE_ALT_ROOT */
    | { psap_address: PresentationAddress } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ExtendedNetworkAddress: $.ASN1Decoder<
    ExtendedNetworkAddress
> | null = null;
let _cached_encoder_for_ExtendedNetworkAddress: $.ASN1Encoder<
    ExtendedNetworkAddress
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedNetworkAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedNetworkAddress} The decoded data structure.
 */
export function _decode_ExtendedNetworkAddress(el: _Element) {
    if (!_cached_decoder_for_ExtendedNetworkAddress) {
        _cached_decoder_for_ExtendedNetworkAddress = $._decode_inextensible_choice<
            ExtendedNetworkAddress
        >({
            "UNIVERSAL 16": [
                "e163_4_address",
                _decode_ExtendedNetworkAddress_e163_4_address,
            ],
            "CONTEXT 0": [
                "psap_address",
                $._decode_explicit<PresentationAddress>(
                    () => _decode_PresentationAddress
                ),
            ],
        });
    }
    return _cached_decoder_for_ExtendedNetworkAddress(el);
}
/**
 * @summary Encodes a(n) ExtendedNetworkAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedNetworkAddress, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedNetworkAddress(
    value: ExtendedNetworkAddress,
    elGetter: $.ASN1Encoder<ExtendedNetworkAddress>
) {
    if (!_cached_encoder_for_ExtendedNetworkAddress) {
        _cached_encoder_for_ExtendedNetworkAddress = $._encode_choice<
            ExtendedNetworkAddress
        >(
            {
                e163_4_address: _encode_ExtendedNetworkAddress_e163_4_address,
                psap_address: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_PresentationAddress,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ExtendedNetworkAddress(value, elGetter);
}

/**
 * @summary extended_network_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extended-network-address EXTENSION-ATTRIBUTE ::= {
 *                  ExtendedNetworkAddress
 *   IDENTIFIED BY  22 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const extended_network_address: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ExtendedNetworkAddress,
    },
    encoderFor: {
        "&Type": _encode_ExtendedNetworkAddress,
    },
    "&id": 22 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary TerminalType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminalType  ::=  INTEGER {
 *   telex(3), teletex(4), g3-facsimile(5), g4-facsimile(6), ia5-terminal(7),
 *   videotex(8)}(0..ub-integer-options)
 * ```
 */
export type TerminalType = INTEGER;
/**
 * @summary TerminalType_telex
 * @constant
 * @type {number}
 */
export const TerminalType_telex: TerminalType = 3; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary TerminalType_teletex
 * @constant
 * @type {number}
 */
export const TerminalType_teletex: TerminalType = 4; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary TerminalType_g3_facsimile
 * @constant
 * @type {number}
 */
export const TerminalType_g3_facsimile: TerminalType = 5; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary TerminalType_g4_facsimile
 * @constant
 * @type {number}
 */
export const TerminalType_g4_facsimile: TerminalType = 6; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary TerminalType_ia5_terminal
 * @constant
 * @type {number}
 */
export const TerminalType_ia5_terminal: TerminalType = 7; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary TerminalType_videotex
 * @constant
 * @type {number}
 */
export const TerminalType_videotex: TerminalType = 8; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_TerminalType: $.ASN1Decoder<TerminalType> | null = null;
let _cached_encoder_for_TerminalType: $.ASN1Encoder<TerminalType> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TerminalType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminalType} The decoded data structure.
 */
export function _decode_TerminalType(el: _Element) {
    if (!_cached_decoder_for_TerminalType) {
        _cached_decoder_for_TerminalType = $._decodeInteger;
    }
    return _cached_decoder_for_TerminalType(el);
}
/**
 * @summary Encodes a(n) TerminalType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminalType, encoded as an ASN.1 Element.
 */
export function _encode_TerminalType(
    value: TerminalType,
    elGetter: $.ASN1Encoder<TerminalType>
) {
    if (!_cached_encoder_for_TerminalType) {
        _cached_encoder_for_TerminalType = $._encodeInteger;
    }
    return _cached_encoder_for_TerminalType(value, elGetter);
}

/**
 * @summary terminal_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * terminal-type EXTENSION-ATTRIBUTE ::= {
 *                  TerminalType
 *   IDENTIFIED BY  23 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const terminal_type: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TerminalType,
    },
    encoderFor: {
        "&Type": _encode_TerminalType,
    },
    "&id": 23 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary ExtensionAttributeTable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionAttributeTable EXTENSION-ATTRIBUTE ::= {common-name | teletex-common-name | universal-common-name |
 *    teletex-organization-name | universal-organization-name |
 *    teletex-personal-name | universal-personal-name |
 *    teletex-organizational-unit-names | universal-organizational-unit-names |
 *    teletex-domain-defined-attributes | universal-domain-defined-attributes |
 *    pds-name | physical-delivery-country-name | postal-code |
 *    physical-delivery-office-name | universal-physical-delivery-office-name |
 *    physical-delivery-office-number | universal-physical-delivery-office-number
 *    | extension-OR-address-components |
 *    universal-extension-OR-address-components | physical-delivery-personal-name
 *    | universal-physical-delivery-personal-name |
 *    physical-delivery-organization-name |
 *    universal-physical-delivery-organization-name |
 *    extension-physical-delivery-address-components |
 *    universal-extension-physical-delivery-address-components |
 *    unformatted-postal-address | universal-unformatted-postal-address |
 *    street-address | universal-street-address | post-office-box-address |
 *    universal-post-office-box-address | poste-restante-address |
 *    universal-poste-restante-address | unique-postal-name |
 *    universal-unique-postal-name | local-postal-attributes |
 *    universal-local-postal-attributes | extended-network-address | terminal-type }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE[]}
 *
 */
export const ExtensionAttributeTable: EXTENSION_ATTRIBUTE[] = [
    common_name,
    teletex_common_name,
    universal_common_name,
    teletex_organization_name,
    universal_organization_name,
    teletex_personal_name,
    universal_personal_name,
    teletex_organizational_unit_names,
    universal_organizational_unit_names,
    teletex_domain_defined_attributes,
    universal_domain_defined_attributes,
    pds_name,
    physical_delivery_country_name,
    postal_code,
    physical_delivery_office_name,
    universal_physical_delivery_office_name,
    physical_delivery_office_number,
    universal_physical_delivery_office_number,
    extension_OR_address_components,
    universal_extension_OR_address_components,
    physical_delivery_personal_name,
    universal_physical_delivery_personal_name,
    physical_delivery_organization_name,
    universal_physical_delivery_organization_name,
    extension_physical_delivery_address_components,
    universal_extension_physical_delivery_address_components,
    unformatted_postal_address,
    universal_unformatted_postal_address,
    street_address,
    universal_street_address,
    post_office_box_address,
    universal_post_office_box_address,
    poste_restante_address,
    universal_poste_restante_address,
    unique_postal_name,
    universal_unique_postal_name,
    local_postal_attributes,
    universal_local_postal_attributes,
    extended_network_address,
    terminal_type,
];

/**
 * @summary ExtensionAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionAttribute ::= SEQUENCE {
 *   extension-attribute-type
 *     [0]  EXTENSION-ATTRIBUTE.&id({ExtensionAttributeTable}),
 *   extension-attribute-value
 *     [1]  EXTENSION-ATTRIBUTE.&Type
 *            ({ExtensionAttributeTable}{@extension-attribute-type}) }
 * ```
 *
 * @class
 */
export class ExtensionAttribute {
    constructor(
        /**
         * @summary `extension_attribute_type`.
         * @public
         * @readonly
         */
        readonly extension_attribute_type: INTEGER,
        /**
         * @summary `extension_attribute_value`.
         * @public
         * @readonly
         */
        readonly extension_attribute_value: _Element
    ) {}

    /**
     * @summary Restructures an object into a ExtensionAttribute
     * @description
     *
     * This takes an `object` and converts it to a `ExtensionAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtensionAttribute`.
     * @returns {ExtensionAttribute}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof ExtensionAttribute]: ExtensionAttribute[_K] }
        >
    ): ExtensionAttribute {
        return new ExtensionAttribute(
            _o.extension_attribute_type,
            _o.extension_attribute_value
        );
    }
}
/**
 * @summary The Leading Root Component Types of ExtensionAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExtensionAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "extension-attribute-type",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "extension-attribute-value",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ExtensionAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExtensionAttribute: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ExtensionAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExtensionAttribute: $.ComponentSpec[] = [];
let _cached_decoder_for_ExtensionAttribute: $.ASN1Decoder<
    ExtensionAttribute
> | null = null;
let _cached_encoder_for_ExtensionAttribute: $.ASN1Encoder<
    ExtensionAttribute
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionAttribute} The decoded data structure.
 */
export function _decode_ExtensionAttribute(el: _Element) {
    if (!_cached_decoder_for_ExtensionAttribute) {
        _cached_decoder_for_ExtensionAttribute = function (
            el: _Element
        ): ExtensionAttribute {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ExtensionAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "extension-attribute-type";
            sequence[1].name = "extension-attribute-value";
            let extension_attribute_type!: INTEGER;
            let extension_attribute_value!: _Element;
            extension_attribute_type = $._decode_explicit<INTEGER>(
                () => $._decodeInteger
            )(sequence[0]);
            extension_attribute_value = $._decode_explicit<_Element>(
                () => $._decodeAny
            )(sequence[1]);
            return new ExtensionAttribute(
                extension_attribute_type,
                extension_attribute_value
            );
        };
    }
    return _cached_decoder_for_ExtensionAttribute(el);
}
/**
 * @summary Encodes a(n) ExtensionAttribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionAttribute, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionAttribute(
    value: ExtensionAttribute,
    elGetter: $.ASN1Encoder<ExtensionAttribute>
) {
    if (!_cached_encoder_for_ExtensionAttribute) {
        _cached_encoder_for_ExtensionAttribute = function (
            value: ExtensionAttribute,
            elGetter: $.ASN1Encoder<ExtensionAttribute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeInteger,
                            $.BER
                        )(value.extension_attribute_type, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => $._encodeAny,
                            $.BER
                        )(value.extension_attribute_value, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ExtensionAttribute(value, elGetter);
}

export type ExtensionAttributes<> = ExtensionAttribute[]; // SetOfType
let _cached_decoder_for_ExtensionAttributes: $.ASN1Decoder<
    ExtensionAttributes
> | null = null;
let _cached_encoder_for_ExtensionAttributes: $.ASN1Encoder<
    ExtensionAttributes
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionAttributes} The decoded data structure.
 */
export function _decode_ExtensionAttributes(el: _Element) {
    if (!_cached_decoder_for_ExtensionAttributes) {
        _cached_decoder_for_ExtensionAttributes = $._decodeSetOf<
            ExtensionAttribute
        >(() => _decode_ExtensionAttribute);
    }
    return _cached_decoder_for_ExtensionAttributes(el);
}
/**
 * @summary Encodes a(n) ExtensionAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionAttributes, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionAttributes(
    value: ExtensionAttributes,
    elGetter: $.ASN1Encoder<ExtensionAttributes>
) {
    if (!_cached_encoder_for_ExtensionAttributes) {
        _cached_encoder_for_ExtensionAttributes = $._encodeSetOf<
            ExtensionAttribute
        >(() => _encode_ExtensionAttribute, $.BER);
    }
    return _cached_encoder_for_ExtensionAttributes(value, elGetter);
}

/**
 * @summary ORAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORAddress ::= SEQUENCE {
 *   built-in-standard-attributes        BuiltInStandardAttributes,
 *   built-in-domain-defined-attributes  BuiltInDomainDefinedAttributes OPTIONAL,
 *   -- see also teletex-domain-defined-attributes
 *   extension-attributes                ExtensionAttributes OPTIONAL }
 * ```
 *
 * @class
 */
export class ORAddress {
    constructor(
        /**
         * @summary `built_in_standard_attributes`.
         * @public
         * @readonly
         */
        readonly built_in_standard_attributes: BuiltInStandardAttributes,
        /**
         * @summary `built_in_domain_defined_attributes`.
         * @public
         * @readonly
         */
        readonly built_in_domain_defined_attributes: OPTIONAL<
            BuiltInDomainDefinedAttributes
        >,
        /**
         * @summary `extension_attributes`.
         * @public
         * @readonly
         */
        readonly extension_attributes: OPTIONAL<ExtensionAttributes>
    ) {}

    /**
     * @summary Restructures an object into a ORAddress
     * @description
     *
     * This takes an `object` and converts it to a `ORAddress`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ORAddress`.
     * @returns {ORAddress}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ORAddress]: ORAddress[_K] }>
    ): ORAddress {
        return new ORAddress(
            _o.built_in_standard_attributes,
            _o.built_in_domain_defined_attributes,
            _o.extension_attributes
        );
    }
}
/**
 * @summary The Leading Root Component Types of ORAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ORAddress: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "built-in-standard-attributes",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "built-in-domain-defined-attributes",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "extension-attributes",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ORAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ORAddress: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ORAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ORAddress: $.ComponentSpec[] = [];
let _cached_decoder_for_ORAddress: $.ASN1Decoder<ORAddress> | null = null;
let _cached_encoder_for_ORAddress: $.ASN1Encoder<ORAddress> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ORAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORAddress} The decoded data structure.
 */
export function _decode_ORAddress(el: _Element) {
    if (!_cached_decoder_for_ORAddress) {
        _cached_decoder_for_ORAddress = function (el: _Element): ORAddress {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let built_in_standard_attributes!: BuiltInStandardAttributes;
            let built_in_domain_defined_attributes: OPTIONAL<BuiltInDomainDefinedAttributes>;
            let extension_attributes: OPTIONAL<ExtensionAttributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "built-in-standard-attributes": (_el: _Element): void => {
                    built_in_standard_attributes = _decode_BuiltInStandardAttributes(
                        _el
                    );
                },
                "built-in-domain-defined-attributes": (_el: _Element): void => {
                    built_in_domain_defined_attributes = _decode_BuiltInDomainDefinedAttributes(
                        _el
                    );
                },
                "extension-attributes": (_el: _Element): void => {
                    extension_attributes = _decode_ExtensionAttributes(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ORAddress,
                _extension_additions_list_spec_for_ORAddress,
                _root_component_type_list_2_spec_for_ORAddress,
                undefined
            );
            return new ORAddress(
                /* SEQUENCE_CONSTRUCTOR_CALL */ built_in_standard_attributes,
                built_in_domain_defined_attributes,
                extension_attributes
            );
        };
    }
    return _cached_decoder_for_ORAddress(el);
}
/**
 * @summary Encodes a(n) ORAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORAddress, encoded as an ASN.1 Element.
 */
export function _encode_ORAddress(
    value: ORAddress,
    elGetter: $.ASN1Encoder<ORAddress>
) {
    if (!_cached_encoder_for_ORAddress) {
        _cached_encoder_for_ORAddress = function (
            value: ORAddress,
            elGetter: $.ASN1Encoder<ORAddress>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_BuiltInStandardAttributes(
                            value.built_in_standard_attributes,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.built_in_domain_defined_attributes ===
                        undefined
                            ? undefined
                            : _encode_BuiltInDomainDefinedAttributes(
                                  value.built_in_domain_defined_attributes,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.extension_attributes ===
                        undefined
                            ? undefined
                            : _encode_ExtensionAttributes(
                                  value.extension_attributes,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ORAddress(value, elGetter);
}

/**
 * @summary ub_integer_options
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-integer-options                        INTEGER ::= 256
 * ```
 *
 * @constant
 */
export const ub_integer_options: INTEGER = 256;

/**
 * @summary ub_e163_4_number_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-e163-4-number-length                   INTEGER ::= 15
 * ```
 *
 * @constant
 */
export const ub_e163_4_number_length: INTEGER = 15;

/**
 * @summary ub_e163_4_sub_address_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-e163-4-sub-address-length              INTEGER ::= 40
 * ```
 *
 * @constant
 */
export const ub_e163_4_sub_address_length: INTEGER = 40;

/**
 * @summary ub_pds_physical_address_lines
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-pds-physical-address-lines             INTEGER ::= 6
 * ```
 *
 * @constant
 */
export const ub_pds_physical_address_lines: INTEGER = 6;

/**
 * @summary ub_postal_code_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-postal-code-length                     INTEGER ::= 16
 * ```
 *
 * @constant
 */
export const ub_postal_code_length: INTEGER = 16;

/**
 * @summary ub_pds_name_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-pds-name-length                        INTEGER ::= 16
 * ```
 *
 * @constant
 */
export const ub_pds_name_length: INTEGER = 16;

/**
 * @summary ub_extension_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-extension-attributes                   INTEGER ::= 256
 * ```
 *
 * @constant
 */
export const ub_extension_attributes: INTEGER = 256;

/**
 * @summary ub_domain_defined_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-domain-defined-attributes              INTEGER ::= 4
 * ```
 *
 * @constant
 */
export const ub_domain_defined_attributes: INTEGER = 4;

/**
 * @summary ub_organizational_units
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-organizational-units                   INTEGER ::= 4
 * ```
 *
 * @constant
 */
export const ub_organizational_units: INTEGER = 4;

/**
 * @summary ub_generation_qualifier_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-generation-qualifier-length            INTEGER ::= 3
 * ```
 *
 * @constant
 */
export const ub_generation_qualifier_length: INTEGER = 3;

/**
 * @summary ub_initials_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-initials-length                        INTEGER ::= 5
 * ```
 *
 * @constant
 */
export const ub_initials_length: INTEGER = 5;

/**
 * @summary ub_given_name_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-given-name-length                      INTEGER ::= 16
 * ```
 *
 * @constant
 */
export const ub_given_name_length: INTEGER = 16;

/**
 * @summary ub_surname_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-surname-length                         INTEGER ::= 40
 * ```
 *
 * @constant
 */
export const ub_surname_length: INTEGER = 40;

/**
 * @summary ub_numeric_user_id_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-numeric-user-id-length                 INTEGER ::= 32
 * ```
 *
 * @constant
 */
export const ub_numeric_user_id_length: INTEGER = 32;

/**
 * @summary ub_terminal_id_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-terminal-id-length                     INTEGER ::= 24
 * ```
 *
 * @constant
 */
export const ub_terminal_id_length: INTEGER = 24;

/**
 * @summary ub_x121_address_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-x121-address-length                    INTEGER ::= 16
 * ```
 *
 * @constant
 */
export const ub_x121_address_length: INTEGER = 16;

/**
 * @summary ub_domain_name_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-domain-name-length                     INTEGER ::= 16
 * ```
 *
 * @constant
 */
export const ub_domain_name_length: INTEGER = 16;

/**
 * @summary ub_country_name_alpha_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-country-name-alpha-length              INTEGER ::= 2
 * ```
 *
 * @constant
 */
export const ub_country_name_alpha_length: INTEGER = 2;

/**
 * @summary ub_country_name_numeric_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-country-name-numeric-length            INTEGER ::= 3
 * ```
 *
 * @constant
 */
export const ub_country_name_numeric_length: INTEGER = 3;

/* END_MODULE PkiPmiExternalDataTypes */
/* eslint-enable */
