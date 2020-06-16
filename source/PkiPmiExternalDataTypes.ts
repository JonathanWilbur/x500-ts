/*
    BEGIN_MODULE PkiPmiExternalDataTypes
    OID: joint-iso-itu-t.ds.module.pkiPmiExternalDataTypes.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
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
import * as __utils from "./__utils";
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
export {
    authenticationFramework,
    certificateExtensions,
    intSecurity,
    selectedAttributeTypes,
} from "./UsefulDefinitions";

export type DisplayText =
    | { visibleString: asn1.VisibleString } /* CHOICE_ALT_ROOT */
    | { bmpString: asn1.BMPString } /* CHOICE_ALT_ROOT */
    | { utf8String: asn1.UTF8String } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_DisplayText: __utils.ASN1Decoder<
    DisplayText
> | null = null;
let _cached_encoder_for_DisplayText: __utils.ASN1Encoder<
    DisplayText
> | null = null;
export function _decode_DisplayText(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DisplayText) {
        _cached_decoder_for_DisplayText = __utils._decode_inextensible_choice<
            DisplayText
        >({
            "UNIVERSAL 26": ["visibleString", __utils._decodeVisibleString],
            "UNIVERSAL 30": ["bmpString", __utils._decodeBMPString],
            "UNIVERSAL 12": ["utf8String", __utils._decodeUTF8String],
        });
    }
    return _cached_decoder_for_DisplayText(el);
}
export function _encode_DisplayText(
    value: DisplayText,
    elGetter: __utils.ASN1Encoder<DisplayText>
) {
    if (!_cached_encoder_for_DisplayText) {
        _cached_encoder_for_DisplayText = __utils._encode_choice<DisplayText>(
            {
                visibleString: __utils._encodeVisibleString,
                bmpString: __utils._encodeBMPString,
                utf8String: __utils._encodeUTF8String,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_DisplayText(value, elGetter);
}

export class NoticeReference {
    constructor(
        readonly organization: DisplayText,
        readonly noticeNumbers: asn1.INTEGER[]
    ) {}
}
export const _root_component_type_list_1_spec_for_NoticeReference: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "organization",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "noticeNumbers",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_NoticeReference: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_NoticeReference: __utils.ComponentSpec[] = [];
let _cached_decoder_for_NoticeReference: __utils.ASN1Decoder<
    NoticeReference
> | null = null;
let _cached_encoder_for_NoticeReference: __utils.ASN1Encoder<
    NoticeReference
> | null = null;
export function _decode_NoticeReference(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NoticeReference) {
        _cached_decoder_for_NoticeReference = function (
            el: asn1.ASN1Element
        ): NoticeReference {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "NoticeReference contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "organization";
            sequence[1].name = "noticeNumbers";
            let organization!: DisplayText;
            let noticeNumbers!: asn1.INTEGER[];
            organization = _decode_DisplayText(sequence[0]);
            noticeNumbers = __utils._decodeSequenceOf<asn1.INTEGER>(
                () => __utils._decodeInteger
            )(sequence[1]);
            // TODO: Validate values.
            return new NoticeReference(organization, noticeNumbers);
        };
    }
    return _cached_decoder_for_NoticeReference(el);
}
export function _encode_NoticeReference(
    value: NoticeReference,
    elGetter: __utils.ASN1Encoder<NoticeReference>
) {
    if (!_cached_encoder_for_NoticeReference) {
        _cached_encoder_for_NoticeReference = function (
            value: NoticeReference,
            elGetter: __utils.ASN1Encoder<NoticeReference>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DisplayText(
                            value.organization,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeSequenceOf<
                            asn1.INTEGER
                        >(() => __utils._encodeInteger, __utils.BER)(
                            value.noticeNumbers,
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
    return _cached_encoder_for_NoticeReference(value, elGetter);
}

export class UserNotice {
    constructor(
        readonly noticeRef: NoticeReference | undefined,
        readonly explicitText: DisplayText | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_UserNotice: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "noticeRef",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "explicitText",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_UserNotice: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_UserNotice: __utils.ComponentSpec[] = [];
let _cached_decoder_for_UserNotice: __utils.ASN1Decoder<
    UserNotice
> | null = null;
let _cached_encoder_for_UserNotice: __utils.ASN1Encoder<
    UserNotice
> | null = null;
export function _decode_UserNotice(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UserNotice) {
        _cached_decoder_for_UserNotice = function (
            el: asn1.ASN1Element
        ): UserNotice {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let noticeRef: asn1.OPTIONAL<NoticeReference>;
            let explicitText: asn1.OPTIONAL<DisplayText>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                noticeRef: (_el: asn1.ASN1Element): void => {
                    noticeRef = _decode_NoticeReference(_el);
                },
                explicitText: (_el: asn1.ASN1Element): void => {
                    explicitText = _decode_DisplayText(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
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
export function _encode_UserNotice(
    value: UserNotice,
    elGetter: __utils.ASN1Encoder<UserNotice>
) {
    if (!_cached_encoder_for_UserNotice) {
        _cached_encoder_for_UserNotice = function (
            value: UserNotice,
            elGetter: __utils.ASN1Encoder<UserNotice>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.noticeRef === undefined
                            ? undefined
                            : _encode_NoticeReference(
                                  value.noticeRef,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.explicitText === undefined
                            ? undefined
                            : _encode_DisplayText(
                                  value.explicitText,
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
    return _cached_encoder_for_UserNotice(value, elGetter);
}

// TODO: ObjectAssignment: authorityInfoAccess

export class AccessDescription {
    constructor(
        readonly accessMethod: asn1.OBJECT_IDENTIFIER,
        readonly accessLocation: GeneralName
    ) {}
}
export const _root_component_type_list_1_spec_for_AccessDescription: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "accessMethod",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "accessLocation",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AccessDescription: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AccessDescription: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AccessDescription: __utils.ASN1Decoder<
    AccessDescription
> | null = null;
let _cached_encoder_for_AccessDescription: __utils.ASN1Encoder<
    AccessDescription
> | null = null;
export function _decode_AccessDescription(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AccessDescription) {
        _cached_decoder_for_AccessDescription = function (
            el: asn1.ASN1Element
        ): AccessDescription {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "AccessDescription contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "accessMethod";
            sequence[1].name = "accessLocation";
            let accessMethod!: asn1.OBJECT_IDENTIFIER;
            let accessLocation!: GeneralName;
            accessMethod = __utils._decodeObjectIdentifier(sequence[0]);
            accessLocation = _decode_GeneralName(sequence[1]);
            // TODO: Validate values.
            return new AccessDescription(accessMethod, accessLocation);
        };
    }
    return _cached_decoder_for_AccessDescription(el);
}
export function _encode_AccessDescription(
    value: AccessDescription,
    elGetter: __utils.ASN1Encoder<AccessDescription>
) {
    if (!_cached_encoder_for_AccessDescription) {
        _cached_encoder_for_AccessDescription = function (
            value: AccessDescription,
            elGetter: __utils.ASN1Encoder<AccessDescription>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.accessMethod,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_GeneralName(
                            value.accessLocation,
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
    return _cached_encoder_for_AccessDescription(value, elGetter);
}

export type AuthorityInfoAccessSyntax = AccessDescription[]; // SequenceOfType
let _cached_decoder_for_AuthorityInfoAccessSyntax: __utils.ASN1Decoder<
    AuthorityInfoAccessSyntax
> | null = null;
let _cached_encoder_for_AuthorityInfoAccessSyntax: __utils.ASN1Encoder<
    AuthorityInfoAccessSyntax
> | null = null;
export function _decode_AuthorityInfoAccessSyntax(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AuthorityInfoAccessSyntax) {
        _cached_decoder_for_AuthorityInfoAccessSyntax = __utils._decodeSequenceOf<
            AccessDescription
        >(() => _decode_AccessDescription);
    }
    return _cached_decoder_for_AuthorityInfoAccessSyntax(el);
}
export function _encode_AuthorityInfoAccessSyntax(
    value: AuthorityInfoAccessSyntax,
    elGetter: __utils.ASN1Encoder<AuthorityInfoAccessSyntax>
) {
    if (!_cached_encoder_for_AuthorityInfoAccessSyntax) {
        _cached_encoder_for_AuthorityInfoAccessSyntax = __utils._encodeSequenceOf<
            AccessDescription
        >(() => _encode_AccessDescription, __utils.BER);
    }
    return _cached_encoder_for_AuthorityInfoAccessSyntax(value, elGetter);
}

// TODO: ObjectAssignment: subjectInfoAccess

export type SubjectInfoAccessSyntax = AccessDescription[]; // SequenceOfType
let _cached_decoder_for_SubjectInfoAccessSyntax: __utils.ASN1Decoder<
    SubjectInfoAccessSyntax
> | null = null;
let _cached_encoder_for_SubjectInfoAccessSyntax: __utils.ASN1Encoder<
    SubjectInfoAccessSyntax
> | null = null;
export function _decode_SubjectInfoAccessSyntax(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SubjectInfoAccessSyntax) {
        _cached_decoder_for_SubjectInfoAccessSyntax = __utils._decodeSequenceOf<
            AccessDescription
        >(() => _decode_AccessDescription);
    }
    return _cached_decoder_for_SubjectInfoAccessSyntax(el);
}
export function _encode_SubjectInfoAccessSyntax(
    value: SubjectInfoAccessSyntax,
    elGetter: __utils.ASN1Encoder<SubjectInfoAccessSyntax>
) {
    if (!_cached_encoder_for_SubjectInfoAccessSyntax) {
        _cached_encoder_for_SubjectInfoAccessSyntax = __utils._encodeSequenceOf<
            AccessDescription
        >(() => _encode_AccessDescription, __utils.BER);
    }
    return _cached_encoder_for_SubjectInfoAccessSyntax(value, elGetter);
}

export const id_pkix: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* mechanisms */ 5, /* pkix */ 7],
    intSecurity
);

export const id_pe: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_pkix
);

export const id_ad: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [48],
    id_pkix
);

export const id_pe_authorityInfoAccess: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_pe
);

export const id_pe_subjectInfoAccess: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [11],
    id_pe
);

export const id_ad_caIssuers: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_ad
);

export const id_ad_ocsp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_ad
);

export type G3FacsimileNonBasicParameters = asn1.BIT_STRING;
export const G3FacsimileNonBasicParameters_two_dimensional: number = 8; /* LONG_NAMED_BIT */
export const two_dimensional: number = G3FacsimileNonBasicParameters_two_dimensional; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_fine_resolution: number = 9; /* LONG_NAMED_BIT */
export const fine_resolution: number = G3FacsimileNonBasicParameters_fine_resolution; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_unlimited_length: number = 20; /* LONG_NAMED_BIT */
export const unlimited_length: number = G3FacsimileNonBasicParameters_unlimited_length; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_b4_length: number = 21; /* LONG_NAMED_BIT */
export const b4_length: number = G3FacsimileNonBasicParameters_b4_length; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_a3_width: number = 22; /* LONG_NAMED_BIT */
export const a3_width: number = G3FacsimileNonBasicParameters_a3_width; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_b4_width: number = 23; /* LONG_NAMED_BIT */
export const b4_width: number = G3FacsimileNonBasicParameters_b4_width; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_t6_coding: number = 25; /* LONG_NAMED_BIT */
export const t6_coding: number = G3FacsimileNonBasicParameters_t6_coding; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_uncompressed: number = 30; /* LONG_NAMED_BIT */
export const uncompressed: number = G3FacsimileNonBasicParameters_uncompressed; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_width_middle_864_of_1728: number = 37; /* LONG_NAMED_BIT */
export const width_middle_864_of_1728: number = G3FacsimileNonBasicParameters_width_middle_864_of_1728; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_width_middle_1216_of_1728: number = 38; /* LONG_NAMED_BIT */
export const width_middle_1216_of_1728: number = G3FacsimileNonBasicParameters_width_middle_1216_of_1728; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_resolution_type: number = 44; /* LONG_NAMED_BIT */
export const resolution_type: number = G3FacsimileNonBasicParameters_resolution_type; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_resolution_400x400: number = 45; /* LONG_NAMED_BIT */
export const resolution_400x400: number = G3FacsimileNonBasicParameters_resolution_400x400; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_resolution_300x300: number = 46; /* LONG_NAMED_BIT */
export const resolution_300x300: number = G3FacsimileNonBasicParameters_resolution_300x300; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_resolution_8x15: number = 47; /* LONG_NAMED_BIT */
export const resolution_8x15: number = G3FacsimileNonBasicParameters_resolution_8x15; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_edi: number = 49; /* LONG_NAMED_BIT */
export const edi: number = G3FacsimileNonBasicParameters_edi; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_dtm: number = 50; /* LONG_NAMED_BIT */
export const dtm: number = G3FacsimileNonBasicParameters_dtm; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_bft: number = 51; /* LONG_NAMED_BIT */
export const bft: number = G3FacsimileNonBasicParameters_bft; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_mixed_mode: number = 58; /* LONG_NAMED_BIT */
export const mixed_mode: number = G3FacsimileNonBasicParameters_mixed_mode; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_character_mode: number = 60; /* LONG_NAMED_BIT */
export const character_mode: number = G3FacsimileNonBasicParameters_character_mode; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_twelve_bits: number = 65; /* LONG_NAMED_BIT */
export const twelve_bits: number = G3FacsimileNonBasicParameters_twelve_bits; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_preferred_huffmann: number = 66; /* LONG_NAMED_BIT */
export const preferred_huffmann: number = G3FacsimileNonBasicParameters_preferred_huffmann; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_full_colour: number = 67; /* LONG_NAMED_BIT */
export const full_colour: number = G3FacsimileNonBasicParameters_full_colour; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_jpeg: number = 68; /* LONG_NAMED_BIT */
export const jpeg: number = G3FacsimileNonBasicParameters_jpeg; /* SHORT_NAMED_BIT */
export const G3FacsimileNonBasicParameters_processable_mode_26: number = 71; /* LONG_NAMED_BIT */
export const processable_mode_26: number = G3FacsimileNonBasicParameters_processable_mode_26; /* SHORT_NAMED_BIT */
let _cached_decoder_for_G3FacsimileNonBasicParameters: __utils.ASN1Decoder<
    G3FacsimileNonBasicParameters
> | null = null;
let _cached_encoder_for_G3FacsimileNonBasicParameters: __utils.ASN1Encoder<
    G3FacsimileNonBasicParameters
> | null = null;
export function _decode_G3FacsimileNonBasicParameters(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_G3FacsimileNonBasicParameters) {
        _cached_decoder_for_G3FacsimileNonBasicParameters =
            __utils._decodeBitString;
    }
    return _cached_decoder_for_G3FacsimileNonBasicParameters(el);
}
export function _encode_G3FacsimileNonBasicParameters(
    value: G3FacsimileNonBasicParameters,
    elGetter: __utils.ASN1Encoder<G3FacsimileNonBasicParameters>
) {
    if (!_cached_encoder_for_G3FacsimileNonBasicParameters) {
        _cached_encoder_for_G3FacsimileNonBasicParameters =
            __utils._encodeBitString;
    }
    return _cached_encoder_for_G3FacsimileNonBasicParameters(value, elGetter);
}

export type CountryName =
    | { x121_dcc_code: asn1.NumericString } /* CHOICE_ALT_ROOT */
    | { iso_3166_alpha2_code: asn1.PrintableString } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_CountryName: __utils.ASN1Decoder<
    CountryName
> | null = null;
let _cached_encoder_for_CountryName: __utils.ASN1Encoder<
    CountryName
> | null = null;
export function _decode_CountryName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CountryName) {
        _cached_decoder_for_CountryName = __utils._decode_explicit<CountryName>(
            () =>
                __utils._decode_inextensible_choice<CountryName>({
                    "UNIVERSAL 18": [
                        "x121_dcc_code",
                        __utils._decodeNumericString,
                    ],
                    "UNIVERSAL 19": [
                        "iso_3166_alpha2_code",
                        __utils._decodePrintableString,
                    ],
                })
        );
    }
    return _cached_decoder_for_CountryName(el);
}
export function _encode_CountryName(
    value: CountryName,
    elGetter: __utils.ASN1Encoder<CountryName>
) {
    if (!_cached_encoder_for_CountryName) {
        _cached_encoder_for_CountryName = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            1,
            () =>
                __utils._encode_choice<CountryName>(
                    {
                        x121_dcc_code: __utils._encodeNumericString,
                        iso_3166_alpha2_code: __utils._encodePrintableString,
                    },
                    __utils.BER
                ),
            __utils.BER
        );
    }
    return _cached_encoder_for_CountryName(value, elGetter);
}

export type AdministrationDomainName =
    | { numeric: asn1.NumericString } /* CHOICE_ALT_ROOT */
    | { printable: asn1.PrintableString } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_AdministrationDomainName: __utils.ASN1Decoder<
    AdministrationDomainName
> | null = null;
let _cached_encoder_for_AdministrationDomainName: __utils.ASN1Encoder<
    AdministrationDomainName
> | null = null;
export function _decode_AdministrationDomainName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AdministrationDomainName) {
        _cached_decoder_for_AdministrationDomainName = __utils._decode_explicit<
            AdministrationDomainName
        >(() =>
            __utils._decode_inextensible_choice<AdministrationDomainName>({
                "UNIVERSAL 18": ["numeric", __utils._decodeNumericString],
                "UNIVERSAL 19": ["printable", __utils._decodePrintableString],
            })
        );
    }
    return _cached_decoder_for_AdministrationDomainName(el);
}
export function _encode_AdministrationDomainName(
    value: AdministrationDomainName,
    elGetter: __utils.ASN1Encoder<AdministrationDomainName>
) {
    if (!_cached_encoder_for_AdministrationDomainName) {
        _cached_encoder_for_AdministrationDomainName = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            2,
            () =>
                __utils._encode_choice<AdministrationDomainName>(
                    {
                        numeric: __utils._encodeNumericString,
                        printable: __utils._encodePrintableString,
                    },
                    __utils.BER
                ),
            __utils.BER
        );
    }
    return _cached_encoder_for_AdministrationDomainName(value, elGetter);
}

export type X121Address = asn1.NumericString; // NumericString
let _cached_decoder_for_X121Address: __utils.ASN1Decoder<
    X121Address
> | null = null;
let _cached_encoder_for_X121Address: __utils.ASN1Encoder<
    X121Address
> | null = null;
export function _decode_X121Address(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_X121Address) {
        _cached_decoder_for_X121Address = __utils._decodeNumericString;
    }
    return _cached_decoder_for_X121Address(el);
}
export function _encode_X121Address(
    value: X121Address,
    elGetter: __utils.ASN1Encoder<X121Address>
) {
    if (!_cached_encoder_for_X121Address) {
        _cached_encoder_for_X121Address = __utils._encodeNumericString;
    }
    return _cached_encoder_for_X121Address(value, elGetter);
}

export type NetworkAddress = X121Address; // DefinedType
let _cached_decoder_for_NetworkAddress: __utils.ASN1Decoder<
    NetworkAddress
> | null = null;
let _cached_encoder_for_NetworkAddress: __utils.ASN1Encoder<
    NetworkAddress
> | null = null;
export function _decode_NetworkAddress(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NetworkAddress) {
        _cached_decoder_for_NetworkAddress = _decode_X121Address;
    }
    return _cached_decoder_for_NetworkAddress(el);
}
export function _encode_NetworkAddress(
    value: NetworkAddress,
    elGetter: __utils.ASN1Encoder<NetworkAddress>
) {
    if (!_cached_encoder_for_NetworkAddress) {
        _cached_encoder_for_NetworkAddress = _encode_X121Address;
    }
    return _cached_encoder_for_NetworkAddress(value, elGetter);
}

export type TerminalIdentifier = asn1.PrintableString; // PrintableString
let _cached_decoder_for_TerminalIdentifier: __utils.ASN1Decoder<
    TerminalIdentifier
> | null = null;
let _cached_encoder_for_TerminalIdentifier: __utils.ASN1Encoder<
    TerminalIdentifier
> | null = null;
export function _decode_TerminalIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TerminalIdentifier) {
        _cached_decoder_for_TerminalIdentifier = __utils._decodePrintableString;
    }
    return _cached_decoder_for_TerminalIdentifier(el);
}
export function _encode_TerminalIdentifier(
    value: TerminalIdentifier,
    elGetter: __utils.ASN1Encoder<TerminalIdentifier>
) {
    if (!_cached_encoder_for_TerminalIdentifier) {
        _cached_encoder_for_TerminalIdentifier = __utils._encodePrintableString;
    }
    return _cached_encoder_for_TerminalIdentifier(value, elGetter);
}

export type PrivateDomainName =
    | { numeric: asn1.NumericString } /* CHOICE_ALT_ROOT */
    | { printable: asn1.PrintableString } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_PrivateDomainName: __utils.ASN1Decoder<
    PrivateDomainName
> | null = null;
let _cached_encoder_for_PrivateDomainName: __utils.ASN1Encoder<
    PrivateDomainName
> | null = null;
export function _decode_PrivateDomainName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PrivateDomainName) {
        _cached_decoder_for_PrivateDomainName = __utils._decode_inextensible_choice<
            PrivateDomainName
        >({
            "UNIVERSAL 18": ["numeric", __utils._decodeNumericString],
            "UNIVERSAL 19": ["printable", __utils._decodePrintableString],
        });
    }
    return _cached_decoder_for_PrivateDomainName(el);
}
export function _encode_PrivateDomainName(
    value: PrivateDomainName,
    elGetter: __utils.ASN1Encoder<PrivateDomainName>
) {
    if (!_cached_encoder_for_PrivateDomainName) {
        _cached_encoder_for_PrivateDomainName = __utils._encode_choice<
            PrivateDomainName
        >(
            {
                numeric: __utils._encodeNumericString,
                printable: __utils._encodePrintableString,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_PrivateDomainName(value, elGetter);
}

export type OrganizationName = asn1.PrintableString; // PrintableString
let _cached_decoder_for_OrganizationName: __utils.ASN1Decoder<
    OrganizationName
> | null = null;
let _cached_encoder_for_OrganizationName: __utils.ASN1Encoder<
    OrganizationName
> | null = null;
export function _decode_OrganizationName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OrganizationName) {
        _cached_decoder_for_OrganizationName = __utils._decodePrintableString;
    }
    return _cached_decoder_for_OrganizationName(el);
}
export function _encode_OrganizationName(
    value: OrganizationName,
    elGetter: __utils.ASN1Encoder<OrganizationName>
) {
    if (!_cached_encoder_for_OrganizationName) {
        _cached_encoder_for_OrganizationName = __utils._encodePrintableString;
    }
    return _cached_encoder_for_OrganizationName(value, elGetter);
}

export type NumericUserIdentifier = asn1.NumericString; // NumericString
let _cached_decoder_for_NumericUserIdentifier: __utils.ASN1Decoder<
    NumericUserIdentifier
> | null = null;
let _cached_encoder_for_NumericUserIdentifier: __utils.ASN1Encoder<
    NumericUserIdentifier
> | null = null;
export function _decode_NumericUserIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NumericUserIdentifier) {
        _cached_decoder_for_NumericUserIdentifier =
            __utils._decodeNumericString;
    }
    return _cached_decoder_for_NumericUserIdentifier(el);
}
export function _encode_NumericUserIdentifier(
    value: NumericUserIdentifier,
    elGetter: __utils.ASN1Encoder<NumericUserIdentifier>
) {
    if (!_cached_encoder_for_NumericUserIdentifier) {
        _cached_encoder_for_NumericUserIdentifier =
            __utils._encodeNumericString;
    }
    return _cached_encoder_for_NumericUserIdentifier(value, elGetter);
}

export class PersonalName {
    constructor(
        readonly surname: asn1.PrintableString,
        readonly given_name: asn1.PrintableString | undefined,
        readonly initials: asn1.PrintableString | undefined,
        readonly generation_qualifier: asn1.PrintableString | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_PersonalName: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "surname",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "given-name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "initials",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "generation-qualifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PersonalName: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PersonalName: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PersonalName: __utils.ASN1Decoder<
    PersonalName
> | null = null;
let _cached_encoder_for_PersonalName: __utils.ASN1Encoder<
    PersonalName
> | null = null;
export function _decode_PersonalName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PersonalName) {
        _cached_decoder_for_PersonalName = function (
            el: asn1.ASN1Element
        ): PersonalName {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let surname!: asn1.PrintableString;
            let given_name: asn1.OPTIONAL<asn1.PrintableString>;
            let initials: asn1.OPTIONAL<asn1.PrintableString>;
            let generation_qualifier: asn1.OPTIONAL<asn1.PrintableString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                surname: (_el: asn1.ASN1Element): void => {
                    surname = __utils._decode_explicit<asn1.PrintableString>(
                        () => __utils._decodePrintableString
                    )(_el);
                },
                "given-name": (_el: asn1.ASN1Element): void => {
                    given_name = __utils._decode_explicit<asn1.PrintableString>(
                        () => __utils._decodePrintableString
                    )(_el);
                },
                initials: (_el: asn1.ASN1Element): void => {
                    initials = __utils._decode_explicit<asn1.PrintableString>(
                        () => __utils._decodePrintableString
                    )(_el);
                },
                "generation-qualifier": (_el: asn1.ASN1Element): void => {
                    generation_qualifier = __utils._decode_explicit<
                        asn1.PrintableString
                    >(() => __utils._decodePrintableString)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
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
export function _encode_PersonalName(
    value: PersonalName,
    elGetter: __utils.ASN1Encoder<PersonalName>
) {
    if (!_cached_encoder_for_PersonalName) {
        _cached_encoder_for_PersonalName = function (
            value: PersonalName,
            elGetter: __utils.ASN1Encoder<PersonalName>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodePrintableString,
                            __utils.BER
                        )(value.surname, __utils.BER),
                        /* IF_ABSENT  */ value.given_name === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => __utils._encodePrintableString,
                                  __utils.BER
                              )(value.given_name, __utils.BER),
                        /* IF_ABSENT  */ value.initials === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => __utils._encodePrintableString,
                                  __utils.BER
                              )(value.initials, __utils.BER),
                        /* IF_ABSENT  */ value.generation_qualifier ===
                        undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () => __utils._encodePrintableString,
                                  __utils.BER
                              )(value.generation_qualifier, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_PersonalName(value, elGetter);
}

export type OrganizationalUnitName = asn1.PrintableString; // PrintableString
let _cached_decoder_for_OrganizationalUnitName: __utils.ASN1Decoder<
    OrganizationalUnitName
> | null = null;
let _cached_encoder_for_OrganizationalUnitName: __utils.ASN1Encoder<
    OrganizationalUnitName
> | null = null;
export function _decode_OrganizationalUnitName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OrganizationalUnitName) {
        _cached_decoder_for_OrganizationalUnitName =
            __utils._decodePrintableString;
    }
    return _cached_decoder_for_OrganizationalUnitName(el);
}
export function _encode_OrganizationalUnitName(
    value: OrganizationalUnitName,
    elGetter: __utils.ASN1Encoder<OrganizationalUnitName>
) {
    if (!_cached_encoder_for_OrganizationalUnitName) {
        _cached_encoder_for_OrganizationalUnitName =
            __utils._encodePrintableString;
    }
    return _cached_encoder_for_OrganizationalUnitName(value, elGetter);
}

export type OrganizationalUnitNames = OrganizationalUnitName[]; // SequenceOfType
let _cached_decoder_for_OrganizationalUnitNames: __utils.ASN1Decoder<
    OrganizationalUnitNames
> | null = null;
let _cached_encoder_for_OrganizationalUnitNames: __utils.ASN1Encoder<
    OrganizationalUnitNames
> | null = null;
export function _decode_OrganizationalUnitNames(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OrganizationalUnitNames) {
        _cached_decoder_for_OrganizationalUnitNames = __utils._decodeSequenceOf<
            OrganizationalUnitName
        >(() => _decode_OrganizationalUnitName);
    }
    return _cached_decoder_for_OrganizationalUnitNames(el);
}
export function _encode_OrganizationalUnitNames(
    value: OrganizationalUnitNames,
    elGetter: __utils.ASN1Encoder<OrganizationalUnitNames>
) {
    if (!_cached_encoder_for_OrganizationalUnitNames) {
        _cached_encoder_for_OrganizationalUnitNames = __utils._encodeSequenceOf<
            OrganizationalUnitName
        >(() => _encode_OrganizationalUnitName, __utils.BER);
    }
    return _cached_encoder_for_OrganizationalUnitNames(value, elGetter);
}

export class BuiltInStandardAttributes {
    constructor(
        readonly country_name: CountryName | undefined,
        readonly administration_domain_name:
            | AdministrationDomainName
            | undefined,
        readonly network_address: NetworkAddress | undefined,
        readonly terminal_identifier: TerminalIdentifier | undefined,
        readonly private_domain_name: PrivateDomainName | undefined,
        readonly organization_name: OrganizationName | undefined,
        readonly numeric_user_identifier: NumericUserIdentifier | undefined,
        readonly personal_name: PersonalName | undefined,
        readonly organizational_unit_names: OrganizationalUnitNames | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_BuiltInStandardAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "country-name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.application, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "administration-domain-name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.application, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "network-address",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "terminal-identifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "private-domain-name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "organization-name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "numeric-user-identifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "personal-name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "organizational-unit-names",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_BuiltInStandardAttributes: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_BuiltInStandardAttributes: __utils.ComponentSpec[] = [];
let _cached_decoder_for_BuiltInStandardAttributes: __utils.ASN1Decoder<
    BuiltInStandardAttributes
> | null = null;
let _cached_encoder_for_BuiltInStandardAttributes: __utils.ASN1Encoder<
    BuiltInStandardAttributes
> | null = null;
export function _decode_BuiltInStandardAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_BuiltInStandardAttributes) {
        _cached_decoder_for_BuiltInStandardAttributes = function (
            el: asn1.ASN1Element
        ): BuiltInStandardAttributes {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let country_name: asn1.OPTIONAL<CountryName>;
            let administration_domain_name: asn1.OPTIONAL<AdministrationDomainName>;
            let network_address: asn1.OPTIONAL<NetworkAddress>;
            let terminal_identifier: asn1.OPTIONAL<TerminalIdentifier>;
            let private_domain_name: asn1.OPTIONAL<PrivateDomainName>;
            let organization_name: asn1.OPTIONAL<OrganizationName>;
            let numeric_user_identifier: asn1.OPTIONAL<NumericUserIdentifier>;
            let personal_name: asn1.OPTIONAL<PersonalName>;
            let organizational_unit_names: asn1.OPTIONAL<OrganizationalUnitNames>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "country-name": (_el: asn1.ASN1Element): void => {
                    country_name = _decode_CountryName(_el);
                },
                "administration-domain-name": (_el: asn1.ASN1Element): void => {
                    administration_domain_name = _decode_AdministrationDomainName(
                        _el
                    );
                },
                "network-address": (_el: asn1.ASN1Element): void => {
                    network_address = __utils._decode_explicit<NetworkAddress>(
                        () => _decode_NetworkAddress
                    )(_el);
                },
                "terminal-identifier": (_el: asn1.ASN1Element): void => {
                    terminal_identifier = __utils._decode_explicit<
                        TerminalIdentifier
                    >(() => _decode_TerminalIdentifier)(_el);
                },
                "private-domain-name": (_el: asn1.ASN1Element): void => {
                    private_domain_name = __utils._decode_explicit<
                        PrivateDomainName
                    >(() => _decode_PrivateDomainName)(_el);
                },
                "organization-name": (_el: asn1.ASN1Element): void => {
                    organization_name = __utils._decode_explicit<
                        OrganizationName
                    >(() => _decode_OrganizationName)(_el);
                },
                "numeric-user-identifier": (_el: asn1.ASN1Element): void => {
                    numeric_user_identifier = __utils._decode_explicit<
                        NumericUserIdentifier
                    >(() => _decode_NumericUserIdentifier)(_el);
                },
                "personal-name": (_el: asn1.ASN1Element): void => {
                    personal_name = __utils._decode_explicit<PersonalName>(
                        () => _decode_PersonalName
                    )(_el);
                },
                "organizational-unit-names": (_el: asn1.ASN1Element): void => {
                    organizational_unit_names = __utils._decode_explicit<
                        OrganizationalUnitNames
                    >(() => _decode_OrganizationalUnitNames)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
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
export function _encode_BuiltInStandardAttributes(
    value: BuiltInStandardAttributes,
    elGetter: __utils.ASN1Encoder<BuiltInStandardAttributes>
) {
    if (!_cached_encoder_for_BuiltInStandardAttributes) {
        _cached_encoder_for_BuiltInStandardAttributes = function (
            value: BuiltInStandardAttributes,
            elGetter: __utils.ASN1Encoder<BuiltInStandardAttributes>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.country_name === undefined
                            ? undefined
                            : _encode_CountryName(
                                  value.country_name,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.administration_domain_name ===
                        undefined
                            ? undefined
                            : _encode_AdministrationDomainName(
                                  value.administration_domain_name,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.network_address === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_NetworkAddress,
                                  __utils.BER
                              )(value.network_address, __utils.BER),
                        /* IF_ABSENT  */ value.terminal_identifier === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_TerminalIdentifier,
                                  __utils.BER
                              )(value.terminal_identifier, __utils.BER),
                        /* IF_ABSENT  */ value.private_domain_name === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => _encode_PrivateDomainName,
                                  __utils.BER
                              )(value.private_domain_name, __utils.BER),
                        /* IF_ABSENT  */ value.organization_name === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () => _encode_OrganizationName,
                                  __utils.BER
                              )(value.organization_name, __utils.BER),
                        /* IF_ABSENT  */ value.numeric_user_identifier ===
                        undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  4,
                                  () => _encode_NumericUserIdentifier,
                                  __utils.BER
                              )(value.numeric_user_identifier, __utils.BER),
                        /* IF_ABSENT  */ value.personal_name === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  5,
                                  () => _encode_PersonalName,
                                  __utils.BER
                              )(value.personal_name, __utils.BER),
                        /* IF_ABSENT  */ value.organizational_unit_names ===
                        undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  6,
                                  () => _encode_OrganizationalUnitNames,
                                  __utils.BER
                              )(value.organizational_unit_names, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_BuiltInStandardAttributes(value, elGetter);
}

export class BuiltInDomainDefinedAttribute {
    constructor(
        readonly type_: asn1.PrintableString,
        readonly value: asn1.PrintableString
    ) {}
}
export const _root_component_type_list_1_spec_for_BuiltInDomainDefinedAttribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 19),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "value",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 19),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_BuiltInDomainDefinedAttribute: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_BuiltInDomainDefinedAttribute: __utils.ComponentSpec[] = [];
let _cached_decoder_for_BuiltInDomainDefinedAttribute: __utils.ASN1Decoder<
    BuiltInDomainDefinedAttribute
> | null = null;
let _cached_encoder_for_BuiltInDomainDefinedAttribute: __utils.ASN1Encoder<
    BuiltInDomainDefinedAttribute
> | null = null;
export function _decode_BuiltInDomainDefinedAttribute(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_BuiltInDomainDefinedAttribute) {
        _cached_decoder_for_BuiltInDomainDefinedAttribute = function (
            el: asn1.ASN1Element
        ): BuiltInDomainDefinedAttribute {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "BuiltInDomainDefinedAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: asn1.PrintableString;
            let value!: asn1.PrintableString;
            type_ = __utils._decodePrintableString(sequence[0]);
            value = __utils._decodePrintableString(sequence[1]);
            // TODO: Validate values.
            return new BuiltInDomainDefinedAttribute(type_, value);
        };
    }
    return _cached_decoder_for_BuiltInDomainDefinedAttribute(el);
}
export function _encode_BuiltInDomainDefinedAttribute(
    value: BuiltInDomainDefinedAttribute,
    elGetter: __utils.ASN1Encoder<BuiltInDomainDefinedAttribute>
) {
    if (!_cached_encoder_for_BuiltInDomainDefinedAttribute) {
        _cached_encoder_for_BuiltInDomainDefinedAttribute = function (
            value: BuiltInDomainDefinedAttribute,
            elGetter: __utils.ASN1Encoder<BuiltInDomainDefinedAttribute>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodePrintableString(
                            value.type_,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodePrintableString(
                            value.value,
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
    return _cached_encoder_for_BuiltInDomainDefinedAttribute(value, elGetter);
}

export type BuiltInDomainDefinedAttributes = BuiltInDomainDefinedAttribute[]; // SequenceOfType
let _cached_decoder_for_BuiltInDomainDefinedAttributes: __utils.ASN1Decoder<
    BuiltInDomainDefinedAttributes
> | null = null;
let _cached_encoder_for_BuiltInDomainDefinedAttributes: __utils.ASN1Encoder<
    BuiltInDomainDefinedAttributes
> | null = null;
export function _decode_BuiltInDomainDefinedAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_BuiltInDomainDefinedAttributes) {
        _cached_decoder_for_BuiltInDomainDefinedAttributes = __utils._decodeSequenceOf<
            BuiltInDomainDefinedAttribute
        >(() => _decode_BuiltInDomainDefinedAttribute);
    }
    return _cached_decoder_for_BuiltInDomainDefinedAttributes(el);
}
export function _encode_BuiltInDomainDefinedAttributes(
    value: BuiltInDomainDefinedAttributes,
    elGetter: __utils.ASN1Encoder<BuiltInDomainDefinedAttributes>
) {
    if (!_cached_encoder_for_BuiltInDomainDefinedAttributes) {
        _cached_encoder_for_BuiltInDomainDefinedAttributes = __utils._encodeSequenceOf<
            BuiltInDomainDefinedAttribute
        >(() => _encode_BuiltInDomainDefinedAttribute, __utils.BER);
    }
    return _cached_encoder_for_BuiltInDomainDefinedAttributes(value, elGetter);
}

export class ExtensionAttribute {
    constructor(
        readonly extension_attribute_type: asn1.INTEGER,
        readonly extension_attribute_value: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_ExtensionAttribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "extension-attribute-type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "extension-attribute-value",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ExtensionAttribute: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ExtensionAttribute: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ExtensionAttribute: __utils.ASN1Decoder<
    ExtensionAttribute
> | null = null;
let _cached_encoder_for_ExtensionAttribute: __utils.ASN1Encoder<
    ExtensionAttribute
> | null = null;
export function _decode_ExtensionAttribute(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ExtensionAttribute) {
        _cached_decoder_for_ExtensionAttribute = function (
            el: asn1.ASN1Element
        ): ExtensionAttribute {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "ExtensionAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "extension-attribute-type";
            sequence[1].name = "extension-attribute-value";
            let extension_attribute_type!: asn1.INTEGER;
            let extension_attribute_value!: asn1.ASN1Element;
            extension_attribute_type = __utils._decode_explicit<asn1.INTEGER>(
                () => __utils._decodeInteger
            )(sequence[0]);
            extension_attribute_value = __utils._decode_explicit<
                asn1.ASN1Element
            >(() => __utils._decodeAny)(sequence[1]);
            // TODO: Validate values.
            return new ExtensionAttribute(
                extension_attribute_type,
                extension_attribute_value
            );
        };
    }
    return _cached_decoder_for_ExtensionAttribute(el);
}
export function _encode_ExtensionAttribute(
    value: ExtensionAttribute,
    elGetter: __utils.ASN1Encoder<ExtensionAttribute>
) {
    if (!_cached_encoder_for_ExtensionAttribute) {
        _cached_encoder_for_ExtensionAttribute = function (
            value: ExtensionAttribute,
            elGetter: __utils.ASN1Encoder<ExtensionAttribute>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodeInteger,
                            __utils.BER
                        )(value.extension_attribute_type, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            1,
                            () => __utils._encodeAny,
                            __utils.BER
                        )(value.extension_attribute_value, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ExtensionAttribute(value, elGetter);
}

export type ExtensionAttributes = ExtensionAttribute[]; // SetOfType
let _cached_decoder_for_ExtensionAttributes: __utils.ASN1Decoder<
    ExtensionAttributes
> | null = null;
let _cached_encoder_for_ExtensionAttributes: __utils.ASN1Encoder<
    ExtensionAttributes
> | null = null;
export function _decode_ExtensionAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ExtensionAttributes) {
        _cached_decoder_for_ExtensionAttributes = __utils._decodeSetOf<
            ExtensionAttribute
        >(() => _decode_ExtensionAttribute);
    }
    return _cached_decoder_for_ExtensionAttributes(el);
}
export function _encode_ExtensionAttributes(
    value: ExtensionAttributes,
    elGetter: __utils.ASN1Encoder<ExtensionAttributes>
) {
    if (!_cached_encoder_for_ExtensionAttributes) {
        _cached_encoder_for_ExtensionAttributes = __utils._encodeSetOf<
            ExtensionAttribute
        >(() => _encode_ExtensionAttribute, __utils.BER);
    }
    return _cached_encoder_for_ExtensionAttributes(value, elGetter);
}

export class ORAddress {
    constructor(
        readonly built_in_standard_attributes: BuiltInStandardAttributes,
        readonly built_in_domain_defined_attributes:
            | BuiltInDomainDefinedAttributes
            | undefined,
        readonly extension_attributes: ExtensionAttributes | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_ORAddress: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "built-in-standard-attributes",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "built-in-domain-defined-attributes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "extension-attributes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ORAddress: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ORAddress: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ORAddress: __utils.ASN1Decoder<ORAddress> | null = null;
let _cached_encoder_for_ORAddress: __utils.ASN1Encoder<ORAddress> | null = null;
export function _decode_ORAddress(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ORAddress) {
        _cached_decoder_for_ORAddress = function (
            el: asn1.ASN1Element
        ): ORAddress {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let built_in_standard_attributes!: BuiltInStandardAttributes;
            let built_in_domain_defined_attributes: asn1.OPTIONAL<BuiltInDomainDefinedAttributes>;
            let extension_attributes: asn1.OPTIONAL<ExtensionAttributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "built-in-standard-attributes": (
                    _el: asn1.ASN1Element
                ): void => {
                    built_in_standard_attributes = _decode_BuiltInStandardAttributes(
                        _el
                    );
                },
                "built-in-domain-defined-attributes": (
                    _el: asn1.ASN1Element
                ): void => {
                    built_in_domain_defined_attributes = _decode_BuiltInDomainDefinedAttributes(
                        _el
                    );
                },
                "extension-attributes": (_el: asn1.ASN1Element): void => {
                    extension_attributes = _decode_ExtensionAttributes(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
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
export function _encode_ORAddress(
    value: ORAddress,
    elGetter: __utils.ASN1Encoder<ORAddress>
) {
    if (!_cached_encoder_for_ORAddress) {
        _cached_encoder_for_ORAddress = function (
            value: ORAddress,
            elGetter: __utils.ASN1Encoder<ORAddress>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_BuiltInStandardAttributes(
                            value.built_in_standard_attributes,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.built_in_domain_defined_attributes ===
                        undefined
                            ? undefined
                            : _encode_BuiltInDomainDefinedAttributes(
                                  value.built_in_domain_defined_attributes,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.extension_attributes ===
                        undefined
                            ? undefined
                            : _encode_ExtensionAttributes(
                                  value.extension_attributes,
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
    return _cached_encoder_for_ORAddress(value, elGetter);
}

// TODO: ObjectSetAssignment: ExtensionAttributeTable

// TODO: ObjectClassAssignment: EXTENSION-ATTRIBUTE

// TODO: ObjectAssignment: common-name

export type CommonName = asn1.PrintableString; // PrintableString
let _cached_decoder_for_CommonName: __utils.ASN1Decoder<
    CommonName
> | null = null;
let _cached_encoder_for_CommonName: __utils.ASN1Encoder<
    CommonName
> | null = null;
export function _decode_CommonName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CommonName) {
        _cached_decoder_for_CommonName = __utils._decodePrintableString;
    }
    return _cached_decoder_for_CommonName(el);
}
export function _encode_CommonName(
    value: CommonName,
    elGetter: __utils.ASN1Encoder<CommonName>
) {
    if (!_cached_encoder_for_CommonName) {
        _cached_encoder_for_CommonName = __utils._encodePrintableString;
    }
    return _cached_encoder_for_CommonName(value, elGetter);
}

// TODO: ObjectAssignment: teletex-common-name

export type TeletexCommonName = asn1.TeletexString; // TeletexString
let _cached_decoder_for_TeletexCommonName: __utils.ASN1Decoder<
    TeletexCommonName
> | null = null;
let _cached_encoder_for_TeletexCommonName: __utils.ASN1Encoder<
    TeletexCommonName
> | null = null;
export function _decode_TeletexCommonName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TeletexCommonName) {
        _cached_decoder_for_TeletexCommonName = __utils._decodeTeletexString;
    }
    return _cached_decoder_for_TeletexCommonName(el);
}
export function _encode_TeletexCommonName(
    value: TeletexCommonName,
    elGetter: __utils.ASN1Encoder<TeletexCommonName>
) {
    if (!_cached_encoder_for_TeletexCommonName) {
        _cached_encoder_for_TeletexCommonName = __utils._encodeTeletexString;
    }
    return _cached_encoder_for_TeletexCommonName(value, elGetter);
}

// TODO: ObjectAssignment: universal-common-name

export type UniversalOrBMPString_character_encoding =
    | { two_octets: asn1.BMPString } /* CHOICE_ALT_ROOT */
    | { four_octets: asn1.UniversalString } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_UniversalOrBMPString_character_encoding: __utils.ASN1Decoder<
    UniversalOrBMPString_character_encoding
> | null = null;
let _cached_encoder_for_UniversalOrBMPString_character_encoding: __utils.ASN1Encoder<
    UniversalOrBMPString_character_encoding
> | null = null;
export function _decode_UniversalOrBMPString_character_encoding(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_UniversalOrBMPString_character_encoding) {
        _cached_decoder_for_UniversalOrBMPString_character_encoding = __utils._decode_inextensible_choice<
            UniversalOrBMPString_character_encoding
        >({
            "UNIVERSAL 30": ["two_octets", __utils._decodeBMPString],
            "UNIVERSAL 28": ["four_octets", __utils._decodeUniversalString],
        });
    }
    return _cached_decoder_for_UniversalOrBMPString_character_encoding(el);
}
export function _encode_UniversalOrBMPString_character_encoding(
    value: UniversalOrBMPString_character_encoding,
    elGetter: __utils.ASN1Encoder<UniversalOrBMPString_character_encoding>
) {
    if (!_cached_encoder_for_UniversalOrBMPString_character_encoding) {
        _cached_encoder_for_UniversalOrBMPString_character_encoding = __utils._encode_choice<
            UniversalOrBMPString_character_encoding
        >(
            {
                two_octets: __utils._encodeBMPString,
                four_octets: __utils._encodeUniversalString,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_UniversalOrBMPString_character_encoding(
        value,
        elGetter
    );
}

export class UniversalOrBMPString {
    constructor(
        readonly character_encoding: UniversalOrBMPString_character_encoding,
        readonly iso_639_language_code: asn1.PrintableString | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_UniversalOrBMPString: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "character-encoding",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "iso-639-language-code",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 19),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_UniversalOrBMPString: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_UniversalOrBMPString: __utils.ComponentSpec[] = [];
let _cached_decoder_for_UniversalOrBMPString: __utils.ASN1Decoder<
    UniversalOrBMPString
> | null = null;
let _cached_encoder_for_UniversalOrBMPString: __utils.ASN1Encoder<
    UniversalOrBMPString
> | null = null;
export function _decode_UniversalOrBMPString(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UniversalOrBMPString) {
        _cached_decoder_for_UniversalOrBMPString = function (
            el: asn1.ASN1Element
        ): UniversalOrBMPString {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let character_encoding!: UniversalOrBMPString_character_encoding;
            let iso_639_language_code: asn1.OPTIONAL<asn1.PrintableString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "character-encoding": (_el: asn1.ASN1Element): void => {
                    character_encoding = _decode_UniversalOrBMPString_character_encoding(
                        _el
                    );
                },
                "iso-639-language-code": (_el: asn1.ASN1Element): void => {
                    iso_639_language_code = __utils._decodePrintableString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
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
export function _encode_UniversalOrBMPString(
    value: UniversalOrBMPString,
    elGetter: __utils.ASN1Encoder<UniversalOrBMPString>
) {
    if (!_cached_encoder_for_UniversalOrBMPString) {
        _cached_encoder_for_UniversalOrBMPString = function (
            value: UniversalOrBMPString,
            elGetter: __utils.ASN1Encoder<UniversalOrBMPString>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_UniversalOrBMPString_character_encoding(
                            value.character_encoding,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.iso_639_language_code ===
                        undefined
                            ? undefined
                            : __utils._encodePrintableString(
                                  value.iso_639_language_code,
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
    return _cached_encoder_for_UniversalOrBMPString(value, elGetter);
}

export const ub_common_name_length: asn1.INTEGER = 64;

export type UniversalCommonName = UniversalOrBMPString; // DefinedType
let _cached_decoder_for_UniversalCommonName: __utils.ASN1Decoder<
    UniversalCommonName
> | null = null;
let _cached_encoder_for_UniversalCommonName: __utils.ASN1Encoder<
    UniversalCommonName
> | null = null;
export function _decode_UniversalCommonName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UniversalCommonName) {
        _cached_decoder_for_UniversalCommonName = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalCommonName(el);
}
export function _encode_UniversalCommonName(
    value: UniversalCommonName,
    elGetter: __utils.ASN1Encoder<UniversalCommonName>
) {
    if (!_cached_encoder_for_UniversalCommonName) {
        _cached_encoder_for_UniversalCommonName = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalCommonName(value, elGetter);
}

// TODO: ObjectAssignment: teletex-organization-name

export type TeletexOrganizationName = asn1.TeletexString; // TeletexString
let _cached_decoder_for_TeletexOrganizationName: __utils.ASN1Decoder<
    TeletexOrganizationName
> | null = null;
let _cached_encoder_for_TeletexOrganizationName: __utils.ASN1Encoder<
    TeletexOrganizationName
> | null = null;
export function _decode_TeletexOrganizationName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TeletexOrganizationName) {
        _cached_decoder_for_TeletexOrganizationName =
            __utils._decodeTeletexString;
    }
    return _cached_decoder_for_TeletexOrganizationName(el);
}
export function _encode_TeletexOrganizationName(
    value: TeletexOrganizationName,
    elGetter: __utils.ASN1Encoder<TeletexOrganizationName>
) {
    if (!_cached_encoder_for_TeletexOrganizationName) {
        _cached_encoder_for_TeletexOrganizationName =
            __utils._encodeTeletexString;
    }
    return _cached_encoder_for_TeletexOrganizationName(value, elGetter);
}

// TODO: ObjectAssignment: universal-organization-name

export const ub_organization_name_length: asn1.INTEGER = 64;

export type UniversalOrganizationName = UniversalOrBMPString; // DefinedType
let _cached_decoder_for_UniversalOrganizationName: __utils.ASN1Decoder<
    UniversalOrganizationName
> | null = null;
let _cached_encoder_for_UniversalOrganizationName: __utils.ASN1Encoder<
    UniversalOrganizationName
> | null = null;
export function _decode_UniversalOrganizationName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UniversalOrganizationName) {
        _cached_decoder_for_UniversalOrganizationName = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalOrganizationName(el);
}
export function _encode_UniversalOrganizationName(
    value: UniversalOrganizationName,
    elGetter: __utils.ASN1Encoder<UniversalOrganizationName>
) {
    if (!_cached_encoder_for_UniversalOrganizationName) {
        _cached_encoder_for_UniversalOrganizationName = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalOrganizationName(value, elGetter);
}

// TODO: ObjectAssignment: teletex-personal-name

export class TeletexPersonalName {
    constructor(
        readonly surname: asn1.TeletexString,
        readonly given_name: asn1.TeletexString | undefined,
        readonly initials: asn1.TeletexString | undefined,
        readonly generation_qualifier: asn1.TeletexString | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_TeletexPersonalName: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "surname",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "given-name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "initials",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "generation-qualifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TeletexPersonalName: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TeletexPersonalName: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TeletexPersonalName: __utils.ASN1Decoder<
    TeletexPersonalName
> | null = null;
let _cached_encoder_for_TeletexPersonalName: __utils.ASN1Encoder<
    TeletexPersonalName
> | null = null;
export function _decode_TeletexPersonalName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TeletexPersonalName) {
        _cached_decoder_for_TeletexPersonalName = function (
            el: asn1.ASN1Element
        ): TeletexPersonalName {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let surname!: asn1.TeletexString;
            let given_name: asn1.OPTIONAL<asn1.TeletexString>;
            let initials: asn1.OPTIONAL<asn1.TeletexString>;
            let generation_qualifier: asn1.OPTIONAL<asn1.TeletexString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                surname: (_el: asn1.ASN1Element): void => {
                    surname = __utils._decode_explicit<asn1.TeletexString>(
                        () => __utils._decodeTeletexString
                    )(_el);
                },
                "given-name": (_el: asn1.ASN1Element): void => {
                    given_name = __utils._decode_explicit<asn1.TeletexString>(
                        () => __utils._decodeTeletexString
                    )(_el);
                },
                initials: (_el: asn1.ASN1Element): void => {
                    initials = __utils._decode_explicit<asn1.TeletexString>(
                        () => __utils._decodeTeletexString
                    )(_el);
                },
                "generation-qualifier": (_el: asn1.ASN1Element): void => {
                    generation_qualifier = __utils._decode_explicit<
                        asn1.TeletexString
                    >(() => __utils._decodeTeletexString)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
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
export function _encode_TeletexPersonalName(
    value: TeletexPersonalName,
    elGetter: __utils.ASN1Encoder<TeletexPersonalName>
) {
    if (!_cached_encoder_for_TeletexPersonalName) {
        _cached_encoder_for_TeletexPersonalName = function (
            value: TeletexPersonalName,
            elGetter: __utils.ASN1Encoder<TeletexPersonalName>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodeTeletexString,
                            __utils.BER
                        )(value.surname, __utils.BER),
                        /* IF_ABSENT  */ value.given_name === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => __utils._encodeTeletexString,
                                  __utils.BER
                              )(value.given_name, __utils.BER),
                        /* IF_ABSENT  */ value.initials === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => __utils._encodeTeletexString,
                                  __utils.BER
                              )(value.initials, __utils.BER),
                        /* IF_ABSENT  */ value.generation_qualifier ===
                        undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () => __utils._encodeTeletexString,
                                  __utils.BER
                              )(value.generation_qualifier, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_TeletexPersonalName(value, elGetter);
}

// TODO: ObjectAssignment: universal-personal-name

export const ub_universal_surname_length: asn1.INTEGER = 64;

export const ub_universal_given_name_length: asn1.INTEGER = 40;

export const ub_universal_initials_length: asn1.INTEGER = 16;

export const ub_universal_generation_qualifier_length: asn1.INTEGER = 16;

export class UniversalPersonalName {
    constructor(
        readonly surname: UniversalOrBMPString,
        readonly given_name: UniversalOrBMPString | undefined,
        readonly initials: UniversalOrBMPString | undefined,
        readonly generation_qualifier: UniversalOrBMPString | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_UniversalPersonalName: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "surname",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "given-name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "initials",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "generation-qualifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_UniversalPersonalName: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_UniversalPersonalName: __utils.ComponentSpec[] = [];
let _cached_decoder_for_UniversalPersonalName: __utils.ASN1Decoder<
    UniversalPersonalName
> | null = null;
let _cached_encoder_for_UniversalPersonalName: __utils.ASN1Encoder<
    UniversalPersonalName
> | null = null;
export function _decode_UniversalPersonalName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UniversalPersonalName) {
        _cached_decoder_for_UniversalPersonalName = function (
            el: asn1.ASN1Element
        ): UniversalPersonalName {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let surname!: UniversalOrBMPString;
            let given_name: asn1.OPTIONAL<UniversalOrBMPString>;
            let initials: asn1.OPTIONAL<UniversalOrBMPString>;
            let generation_qualifier: asn1.OPTIONAL<UniversalOrBMPString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                surname: (_el: asn1.ASN1Element): void => {
                    surname = __utils._decode_explicit<UniversalOrBMPString>(
                        () => _decode_UniversalOrBMPString
                    )(_el);
                },
                "given-name": (_el: asn1.ASN1Element): void => {
                    given_name = __utils._decode_explicit<UniversalOrBMPString>(
                        () => _decode_UniversalOrBMPString
                    )(_el);
                },
                initials: (_el: asn1.ASN1Element): void => {
                    initials = __utils._decode_explicit<UniversalOrBMPString>(
                        () => _decode_UniversalOrBMPString
                    )(_el);
                },
                "generation-qualifier": (_el: asn1.ASN1Element): void => {
                    generation_qualifier = __utils._decode_explicit<
                        UniversalOrBMPString
                    >(() => _decode_UniversalOrBMPString)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
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
export function _encode_UniversalPersonalName(
    value: UniversalPersonalName,
    elGetter: __utils.ASN1Encoder<UniversalPersonalName>
) {
    if (!_cached_encoder_for_UniversalPersonalName) {
        _cached_encoder_for_UniversalPersonalName = function (
            value: UniversalPersonalName,
            elGetter: __utils.ASN1Encoder<UniversalPersonalName>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_UniversalOrBMPString,
                            __utils.BER
                        )(value.surname, __utils.BER),
                        /* IF_ABSENT  */ value.given_name === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_UniversalOrBMPString,
                                  __utils.BER
                              )(value.given_name, __utils.BER),
                        /* IF_ABSENT  */ value.initials === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => _encode_UniversalOrBMPString,
                                  __utils.BER
                              )(value.initials, __utils.BER),
                        /* IF_ABSENT  */ value.generation_qualifier ===
                        undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () => _encode_UniversalOrBMPString,
                                  __utils.BER
                              )(value.generation_qualifier, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_UniversalPersonalName(value, elGetter);
}

// TODO: ObjectAssignment: teletex-organizational-unit-names

export type TeletexOrganizationalUnitName = asn1.TeletexString; // TeletexString
let _cached_decoder_for_TeletexOrganizationalUnitName: __utils.ASN1Decoder<
    TeletexOrganizationalUnitName
> | null = null;
let _cached_encoder_for_TeletexOrganizationalUnitName: __utils.ASN1Encoder<
    TeletexOrganizationalUnitName
> | null = null;
export function _decode_TeletexOrganizationalUnitName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TeletexOrganizationalUnitName) {
        _cached_decoder_for_TeletexOrganizationalUnitName =
            __utils._decodeTeletexString;
    }
    return _cached_decoder_for_TeletexOrganizationalUnitName(el);
}
export function _encode_TeletexOrganizationalUnitName(
    value: TeletexOrganizationalUnitName,
    elGetter: __utils.ASN1Encoder<TeletexOrganizationalUnitName>
) {
    if (!_cached_encoder_for_TeletexOrganizationalUnitName) {
        _cached_encoder_for_TeletexOrganizationalUnitName =
            __utils._encodeTeletexString;
    }
    return _cached_encoder_for_TeletexOrganizationalUnitName(value, elGetter);
}

export type TeletexOrganizationalUnitNames = TeletexOrganizationalUnitName[]; // SequenceOfType
let _cached_decoder_for_TeletexOrganizationalUnitNames: __utils.ASN1Decoder<
    TeletexOrganizationalUnitNames
> | null = null;
let _cached_encoder_for_TeletexOrganizationalUnitNames: __utils.ASN1Encoder<
    TeletexOrganizationalUnitNames
> | null = null;
export function _decode_TeletexOrganizationalUnitNames(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TeletexOrganizationalUnitNames) {
        _cached_decoder_for_TeletexOrganizationalUnitNames = __utils._decodeSequenceOf<
            TeletexOrganizationalUnitName
        >(() => _decode_TeletexOrganizationalUnitName);
    }
    return _cached_decoder_for_TeletexOrganizationalUnitNames(el);
}
export function _encode_TeletexOrganizationalUnitNames(
    value: TeletexOrganizationalUnitNames,
    elGetter: __utils.ASN1Encoder<TeletexOrganizationalUnitNames>
) {
    if (!_cached_encoder_for_TeletexOrganizationalUnitNames) {
        _cached_encoder_for_TeletexOrganizationalUnitNames = __utils._encodeSequenceOf<
            TeletexOrganizationalUnitName
        >(() => _encode_TeletexOrganizationalUnitName, __utils.BER);
    }
    return _cached_encoder_for_TeletexOrganizationalUnitNames(value, elGetter);
}

// TODO: ObjectAssignment: universal-organizational-unit-names

export const ub_organizational_unit_name_length: asn1.INTEGER = 32;

export type UniversalOrganizationalUnitName = UniversalOrBMPString; // DefinedType
let _cached_decoder_for_UniversalOrganizationalUnitName: __utils.ASN1Decoder<
    UniversalOrganizationalUnitName
> | null = null;
let _cached_encoder_for_UniversalOrganizationalUnitName: __utils.ASN1Encoder<
    UniversalOrganizationalUnitName
> | null = null;
export function _decode_UniversalOrganizationalUnitName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UniversalOrganizationalUnitName) {
        _cached_decoder_for_UniversalOrganizationalUnitName = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalOrganizationalUnitName(el);
}
export function _encode_UniversalOrganizationalUnitName(
    value: UniversalOrganizationalUnitName,
    elGetter: __utils.ASN1Encoder<UniversalOrganizationalUnitName>
) {
    if (!_cached_encoder_for_UniversalOrganizationalUnitName) {
        _cached_encoder_for_UniversalOrganizationalUnitName = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalOrganizationalUnitName(value, elGetter);
}

export type UniversalOrganizationalUnitNames = UniversalOrganizationalUnitName[]; // SequenceOfType
let _cached_decoder_for_UniversalOrganizationalUnitNames: __utils.ASN1Decoder<
    UniversalOrganizationalUnitNames
> | null = null;
let _cached_encoder_for_UniversalOrganizationalUnitNames: __utils.ASN1Encoder<
    UniversalOrganizationalUnitNames
> | null = null;
export function _decode_UniversalOrganizationalUnitNames(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UniversalOrganizationalUnitNames) {
        _cached_decoder_for_UniversalOrganizationalUnitNames = __utils._decodeSequenceOf<
            UniversalOrganizationalUnitName
        >(() => _decode_UniversalOrganizationalUnitName);
    }
    return _cached_decoder_for_UniversalOrganizationalUnitNames(el);
}
export function _encode_UniversalOrganizationalUnitNames(
    value: UniversalOrganizationalUnitNames,
    elGetter: __utils.ASN1Encoder<UniversalOrganizationalUnitNames>
) {
    if (!_cached_encoder_for_UniversalOrganizationalUnitNames) {
        _cached_encoder_for_UniversalOrganizationalUnitNames = __utils._encodeSequenceOf<
            UniversalOrganizationalUnitName
        >(() => _encode_UniversalOrganizationalUnitName, __utils.BER);
    }
    return _cached_encoder_for_UniversalOrganizationalUnitNames(
        value,
        elGetter
    );
}

// TODO: ObjectAssignment: pds-name

export type PDSName = asn1.PrintableString; // PrintableString
let _cached_decoder_for_PDSName: __utils.ASN1Decoder<PDSName> | null = null;
let _cached_encoder_for_PDSName: __utils.ASN1Encoder<PDSName> | null = null;
export function _decode_PDSName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PDSName) {
        _cached_decoder_for_PDSName = __utils._decodePrintableString;
    }
    return _cached_decoder_for_PDSName(el);
}
export function _encode_PDSName(
    value: PDSName,
    elGetter: __utils.ASN1Encoder<PDSName>
) {
    if (!_cached_encoder_for_PDSName) {
        _cached_encoder_for_PDSName = __utils._encodePrintableString;
    }
    return _cached_encoder_for_PDSName(value, elGetter);
}

// TODO: ObjectAssignment: physical-delivery-country-name

export type PhysicalDeliveryCountryName =
    | { x121_dcc_code: asn1.NumericString } /* CHOICE_ALT_ROOT */
    | { iso_3166_alpha2_code: asn1.PrintableString } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_PhysicalDeliveryCountryName: __utils.ASN1Decoder<
    PhysicalDeliveryCountryName
> | null = null;
let _cached_encoder_for_PhysicalDeliveryCountryName: __utils.ASN1Encoder<
    PhysicalDeliveryCountryName
> | null = null;
export function _decode_PhysicalDeliveryCountryName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PhysicalDeliveryCountryName) {
        _cached_decoder_for_PhysicalDeliveryCountryName = __utils._decode_inextensible_choice<
            PhysicalDeliveryCountryName
        >({
            "UNIVERSAL 18": ["x121_dcc_code", __utils._decodeNumericString],
            "UNIVERSAL 19": [
                "iso_3166_alpha2_code",
                __utils._decodePrintableString,
            ],
        });
    }
    return _cached_decoder_for_PhysicalDeliveryCountryName(el);
}
export function _encode_PhysicalDeliveryCountryName(
    value: PhysicalDeliveryCountryName,
    elGetter: __utils.ASN1Encoder<PhysicalDeliveryCountryName>
) {
    if (!_cached_encoder_for_PhysicalDeliveryCountryName) {
        _cached_encoder_for_PhysicalDeliveryCountryName = __utils._encode_choice<
            PhysicalDeliveryCountryName
        >(
            {
                x121_dcc_code: __utils._encodeNumericString,
                iso_3166_alpha2_code: __utils._encodePrintableString,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_PhysicalDeliveryCountryName(value, elGetter);
}

// TODO: ObjectAssignment: postal-code

export type PostalCode =
    | { numeric_code: asn1.NumericString } /* CHOICE_ALT_ROOT */
    | { printable_code: asn1.PrintableString } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_PostalCode: __utils.ASN1Decoder<
    PostalCode
> | null = null;
let _cached_encoder_for_PostalCode: __utils.ASN1Encoder<
    PostalCode
> | null = null;
export function _decode_PostalCode(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PostalCode) {
        _cached_decoder_for_PostalCode = __utils._decode_inextensible_choice<
            PostalCode
        >({
            "UNIVERSAL 18": ["numeric_code", __utils._decodeNumericString],
            "UNIVERSAL 19": ["printable_code", __utils._decodePrintableString],
        });
    }
    return _cached_decoder_for_PostalCode(el);
}
export function _encode_PostalCode(
    value: PostalCode,
    elGetter: __utils.ASN1Encoder<PostalCode>
) {
    if (!_cached_encoder_for_PostalCode) {
        _cached_encoder_for_PostalCode = __utils._encode_choice<PostalCode>(
            {
                numeric_code: __utils._encodeNumericString,
                printable_code: __utils._encodePrintableString,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_PostalCode(value, elGetter);
}

// TODO: ObjectAssignment: physical-delivery-office-name

export class PDSParameter {
    constructor(
        readonly printable_string: asn1.PrintableString | undefined,
        readonly teletex_string: asn1.TeletexString | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_PDSParameter: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "printable-string",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 19),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "teletex-string",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 20),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PDSParameter: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PDSParameter: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PDSParameter: __utils.ASN1Decoder<
    PDSParameter
> | null = null;
let _cached_encoder_for_PDSParameter: __utils.ASN1Encoder<
    PDSParameter
> | null = null;
export function _decode_PDSParameter(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PDSParameter) {
        _cached_decoder_for_PDSParameter = function (
            el: asn1.ASN1Element
        ): PDSParameter {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let printable_string: asn1.OPTIONAL<asn1.PrintableString>;
            let teletex_string: asn1.OPTIONAL<asn1.TeletexString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "printable-string": (_el: asn1.ASN1Element): void => {
                    printable_string = __utils._decodePrintableString(_el);
                },
                "teletex-string": (_el: asn1.ASN1Element): void => {
                    teletex_string = __utils._decodeTeletexString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
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
export function _encode_PDSParameter(
    value: PDSParameter,
    elGetter: __utils.ASN1Encoder<PDSParameter>
) {
    if (!_cached_encoder_for_PDSParameter) {
        _cached_encoder_for_PDSParameter = function (
            value: PDSParameter,
            elGetter: __utils.ASN1Encoder<PDSParameter>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.printable_string === undefined
                            ? undefined
                            : __utils._encodePrintableString(
                                  value.printable_string,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.teletex_string === undefined
                            ? undefined
                            : __utils._encodeTeletexString(
                                  value.teletex_string,
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
    return _cached_encoder_for_PDSParameter(value, elGetter);
}

export type PhysicalDeliveryOfficeName = PDSParameter; // DefinedType
let _cached_decoder_for_PhysicalDeliveryOfficeName: __utils.ASN1Decoder<
    PhysicalDeliveryOfficeName
> | null = null;
let _cached_encoder_for_PhysicalDeliveryOfficeName: __utils.ASN1Encoder<
    PhysicalDeliveryOfficeName
> | null = null;
export function _decode_PhysicalDeliveryOfficeName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PhysicalDeliveryOfficeName) {
        _cached_decoder_for_PhysicalDeliveryOfficeName = _decode_PDSParameter;
    }
    return _cached_decoder_for_PhysicalDeliveryOfficeName(el);
}
export function _encode_PhysicalDeliveryOfficeName(
    value: PhysicalDeliveryOfficeName,
    elGetter: __utils.ASN1Encoder<PhysicalDeliveryOfficeName>
) {
    if (!_cached_encoder_for_PhysicalDeliveryOfficeName) {
        _cached_encoder_for_PhysicalDeliveryOfficeName = _encode_PDSParameter;
    }
    return _cached_encoder_for_PhysicalDeliveryOfficeName(value, elGetter);
}

// TODO: ObjectAssignment: universal-physical-delivery-office-name

export const ub_pds_parameter_length: asn1.INTEGER = 30;

export type UniversalPDSParameter = UniversalOrBMPString; // DefinedType
let _cached_decoder_for_UniversalPDSParameter: __utils.ASN1Decoder<
    UniversalPDSParameter
> | null = null;
let _cached_encoder_for_UniversalPDSParameter: __utils.ASN1Encoder<
    UniversalPDSParameter
> | null = null;
export function _decode_UniversalPDSParameter(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UniversalPDSParameter) {
        _cached_decoder_for_UniversalPDSParameter = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalPDSParameter(el);
}
export function _encode_UniversalPDSParameter(
    value: UniversalPDSParameter,
    elGetter: __utils.ASN1Encoder<UniversalPDSParameter>
) {
    if (!_cached_encoder_for_UniversalPDSParameter) {
        _cached_encoder_for_UniversalPDSParameter = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalPDSParameter(value, elGetter);
}

export type UniversalPhysicalDeliveryOfficeName = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalPhysicalDeliveryOfficeName: __utils.ASN1Decoder<
    UniversalPhysicalDeliveryOfficeName
> | null = null;
let _cached_encoder_for_UniversalPhysicalDeliveryOfficeName: __utils.ASN1Encoder<
    UniversalPhysicalDeliveryOfficeName
> | null = null;
export function _decode_UniversalPhysicalDeliveryOfficeName(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_UniversalPhysicalDeliveryOfficeName) {
        _cached_decoder_for_UniversalPhysicalDeliveryOfficeName = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPhysicalDeliveryOfficeName(el);
}
export function _encode_UniversalPhysicalDeliveryOfficeName(
    value: UniversalPhysicalDeliveryOfficeName,
    elGetter: __utils.ASN1Encoder<UniversalPhysicalDeliveryOfficeName>
) {
    if (!_cached_encoder_for_UniversalPhysicalDeliveryOfficeName) {
        _cached_encoder_for_UniversalPhysicalDeliveryOfficeName = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPhysicalDeliveryOfficeName(
        value,
        elGetter
    );
}

// TODO: ObjectAssignment: physical-delivery-office-number

export type PhysicalDeliveryOfficeNumber = PDSParameter; // DefinedType
let _cached_decoder_for_PhysicalDeliveryOfficeNumber: __utils.ASN1Decoder<
    PhysicalDeliveryOfficeNumber
> | null = null;
let _cached_encoder_for_PhysicalDeliveryOfficeNumber: __utils.ASN1Encoder<
    PhysicalDeliveryOfficeNumber
> | null = null;
export function _decode_PhysicalDeliveryOfficeNumber(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PhysicalDeliveryOfficeNumber) {
        _cached_decoder_for_PhysicalDeliveryOfficeNumber = _decode_PDSParameter;
    }
    return _cached_decoder_for_PhysicalDeliveryOfficeNumber(el);
}
export function _encode_PhysicalDeliveryOfficeNumber(
    value: PhysicalDeliveryOfficeNumber,
    elGetter: __utils.ASN1Encoder<PhysicalDeliveryOfficeNumber>
) {
    if (!_cached_encoder_for_PhysicalDeliveryOfficeNumber) {
        _cached_encoder_for_PhysicalDeliveryOfficeNumber = _encode_PDSParameter;
    }
    return _cached_encoder_for_PhysicalDeliveryOfficeNumber(value, elGetter);
}

// TODO: ObjectAssignment: universal-physical-delivery-office-number

export type UniversalPhysicalDeliveryOfficeNumber = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalPhysicalDeliveryOfficeNumber: __utils.ASN1Decoder<
    UniversalPhysicalDeliveryOfficeNumber
> | null = null;
let _cached_encoder_for_UniversalPhysicalDeliveryOfficeNumber: __utils.ASN1Encoder<
    UniversalPhysicalDeliveryOfficeNumber
> | null = null;
export function _decode_UniversalPhysicalDeliveryOfficeNumber(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_UniversalPhysicalDeliveryOfficeNumber) {
        _cached_decoder_for_UniversalPhysicalDeliveryOfficeNumber = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPhysicalDeliveryOfficeNumber(el);
}
export function _encode_UniversalPhysicalDeliveryOfficeNumber(
    value: UniversalPhysicalDeliveryOfficeNumber,
    elGetter: __utils.ASN1Encoder<UniversalPhysicalDeliveryOfficeNumber>
) {
    if (!_cached_encoder_for_UniversalPhysicalDeliveryOfficeNumber) {
        _cached_encoder_for_UniversalPhysicalDeliveryOfficeNumber = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPhysicalDeliveryOfficeNumber(
        value,
        elGetter
    );
}

// TODO: ObjectAssignment: extension-OR-address-components

export type ExtensionORAddressComponents = PDSParameter; // DefinedType
let _cached_decoder_for_ExtensionORAddressComponents: __utils.ASN1Decoder<
    ExtensionORAddressComponents
> | null = null;
let _cached_encoder_for_ExtensionORAddressComponents: __utils.ASN1Encoder<
    ExtensionORAddressComponents
> | null = null;
export function _decode_ExtensionORAddressComponents(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ExtensionORAddressComponents) {
        _cached_decoder_for_ExtensionORAddressComponents = _decode_PDSParameter;
    }
    return _cached_decoder_for_ExtensionORAddressComponents(el);
}
export function _encode_ExtensionORAddressComponents(
    value: ExtensionORAddressComponents,
    elGetter: __utils.ASN1Encoder<ExtensionORAddressComponents>
) {
    if (!_cached_encoder_for_ExtensionORAddressComponents) {
        _cached_encoder_for_ExtensionORAddressComponents = _encode_PDSParameter;
    }
    return _cached_encoder_for_ExtensionORAddressComponents(value, elGetter);
}

// TODO: ObjectAssignment: universal-extension-OR-address-components

export type UniversalExtensionORAddressComponents = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalExtensionORAddressComponents: __utils.ASN1Decoder<
    UniversalExtensionORAddressComponents
> | null = null;
let _cached_encoder_for_UniversalExtensionORAddressComponents: __utils.ASN1Encoder<
    UniversalExtensionORAddressComponents
> | null = null;
export function _decode_UniversalExtensionORAddressComponents(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_UniversalExtensionORAddressComponents) {
        _cached_decoder_for_UniversalExtensionORAddressComponents = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalExtensionORAddressComponents(el);
}
export function _encode_UniversalExtensionORAddressComponents(
    value: UniversalExtensionORAddressComponents,
    elGetter: __utils.ASN1Encoder<UniversalExtensionORAddressComponents>
) {
    if (!_cached_encoder_for_UniversalExtensionORAddressComponents) {
        _cached_encoder_for_UniversalExtensionORAddressComponents = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalExtensionORAddressComponents(
        value,
        elGetter
    );
}

// TODO: ObjectAssignment: physical-delivery-personal-name

export type PhysicalDeliveryPersonalName = PDSParameter; // DefinedType
let _cached_decoder_for_PhysicalDeliveryPersonalName: __utils.ASN1Decoder<
    PhysicalDeliveryPersonalName
> | null = null;
let _cached_encoder_for_PhysicalDeliveryPersonalName: __utils.ASN1Encoder<
    PhysicalDeliveryPersonalName
> | null = null;
export function _decode_PhysicalDeliveryPersonalName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PhysicalDeliveryPersonalName) {
        _cached_decoder_for_PhysicalDeliveryPersonalName = _decode_PDSParameter;
    }
    return _cached_decoder_for_PhysicalDeliveryPersonalName(el);
}
export function _encode_PhysicalDeliveryPersonalName(
    value: PhysicalDeliveryPersonalName,
    elGetter: __utils.ASN1Encoder<PhysicalDeliveryPersonalName>
) {
    if (!_cached_encoder_for_PhysicalDeliveryPersonalName) {
        _cached_encoder_for_PhysicalDeliveryPersonalName = _encode_PDSParameter;
    }
    return _cached_encoder_for_PhysicalDeliveryPersonalName(value, elGetter);
}

// TODO: ObjectAssignment: universal-physical-delivery-personal-name

export type UniversalPhysicalDeliveryPersonalName = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalPhysicalDeliveryPersonalName: __utils.ASN1Decoder<
    UniversalPhysicalDeliveryPersonalName
> | null = null;
let _cached_encoder_for_UniversalPhysicalDeliveryPersonalName: __utils.ASN1Encoder<
    UniversalPhysicalDeliveryPersonalName
> | null = null;
export function _decode_UniversalPhysicalDeliveryPersonalName(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_UniversalPhysicalDeliveryPersonalName) {
        _cached_decoder_for_UniversalPhysicalDeliveryPersonalName = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPhysicalDeliveryPersonalName(el);
}
export function _encode_UniversalPhysicalDeliveryPersonalName(
    value: UniversalPhysicalDeliveryPersonalName,
    elGetter: __utils.ASN1Encoder<UniversalPhysicalDeliveryPersonalName>
) {
    if (!_cached_encoder_for_UniversalPhysicalDeliveryPersonalName) {
        _cached_encoder_for_UniversalPhysicalDeliveryPersonalName = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPhysicalDeliveryPersonalName(
        value,
        elGetter
    );
}

// TODO: ObjectAssignment: physical-delivery-organization-name

export type PhysicalDeliveryOrganizationName = PDSParameter; // DefinedType
let _cached_decoder_for_PhysicalDeliveryOrganizationName: __utils.ASN1Decoder<
    PhysicalDeliveryOrganizationName
> | null = null;
let _cached_encoder_for_PhysicalDeliveryOrganizationName: __utils.ASN1Encoder<
    PhysicalDeliveryOrganizationName
> | null = null;
export function _decode_PhysicalDeliveryOrganizationName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PhysicalDeliveryOrganizationName) {
        _cached_decoder_for_PhysicalDeliveryOrganizationName = _decode_PDSParameter;
    }
    return _cached_decoder_for_PhysicalDeliveryOrganizationName(el);
}
export function _encode_PhysicalDeliveryOrganizationName(
    value: PhysicalDeliveryOrganizationName,
    elGetter: __utils.ASN1Encoder<PhysicalDeliveryOrganizationName>
) {
    if (!_cached_encoder_for_PhysicalDeliveryOrganizationName) {
        _cached_encoder_for_PhysicalDeliveryOrganizationName = _encode_PDSParameter;
    }
    return _cached_encoder_for_PhysicalDeliveryOrganizationName(
        value,
        elGetter
    );
}

// TODO: ObjectAssignment: universal-physical-delivery-organization-name

export type UniversalPhysicalDeliveryOrganizationName = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalPhysicalDeliveryOrganizationName: __utils.ASN1Decoder<
    UniversalPhysicalDeliveryOrganizationName
> | null = null;
let _cached_encoder_for_UniversalPhysicalDeliveryOrganizationName: __utils.ASN1Encoder<
    UniversalPhysicalDeliveryOrganizationName
> | null = null;
export function _decode_UniversalPhysicalDeliveryOrganizationName(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_UniversalPhysicalDeliveryOrganizationName) {
        _cached_decoder_for_UniversalPhysicalDeliveryOrganizationName = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPhysicalDeliveryOrganizationName(el);
}
export function _encode_UniversalPhysicalDeliveryOrganizationName(
    value: UniversalPhysicalDeliveryOrganizationName,
    elGetter: __utils.ASN1Encoder<UniversalPhysicalDeliveryOrganizationName>
) {
    if (!_cached_encoder_for_UniversalPhysicalDeliveryOrganizationName) {
        _cached_encoder_for_UniversalPhysicalDeliveryOrganizationName = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPhysicalDeliveryOrganizationName(
        value,
        elGetter
    );
}

// TODO: ObjectAssignment: extension-physical-delivery-address-components

export type ExtensionPhysicalDeliveryAddressComponents = PDSParameter; // DefinedType
let _cached_decoder_for_ExtensionPhysicalDeliveryAddressComponents: __utils.ASN1Decoder<
    ExtensionPhysicalDeliveryAddressComponents
> | null = null;
let _cached_encoder_for_ExtensionPhysicalDeliveryAddressComponents: __utils.ASN1Encoder<
    ExtensionPhysicalDeliveryAddressComponents
> | null = null;
export function _decode_ExtensionPhysicalDeliveryAddressComponents(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_ExtensionPhysicalDeliveryAddressComponents) {
        _cached_decoder_for_ExtensionPhysicalDeliveryAddressComponents = _decode_PDSParameter;
    }
    return _cached_decoder_for_ExtensionPhysicalDeliveryAddressComponents(el);
}
export function _encode_ExtensionPhysicalDeliveryAddressComponents(
    value: ExtensionPhysicalDeliveryAddressComponents,
    elGetter: __utils.ASN1Encoder<ExtensionPhysicalDeliveryAddressComponents>
) {
    if (!_cached_encoder_for_ExtensionPhysicalDeliveryAddressComponents) {
        _cached_encoder_for_ExtensionPhysicalDeliveryAddressComponents = _encode_PDSParameter;
    }
    return _cached_encoder_for_ExtensionPhysicalDeliveryAddressComponents(
        value,
        elGetter
    );
}

// TODO: ObjectAssignment: universal-extension-physical-delivery-address-components

export type UniversalExtensionPhysicalDeliveryAddressComponents = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalExtensionPhysicalDeliveryAddressComponents: __utils.ASN1Decoder<
    UniversalExtensionPhysicalDeliveryAddressComponents
> | null = null;
let _cached_encoder_for_UniversalExtensionPhysicalDeliveryAddressComponents: __utils.ASN1Encoder<
    UniversalExtensionPhysicalDeliveryAddressComponents
> | null = null;
export function _decode_UniversalExtensionPhysicalDeliveryAddressComponents(
    el: asn1.ASN1Element
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
export function _encode_UniversalExtensionPhysicalDeliveryAddressComponents(
    value: UniversalExtensionPhysicalDeliveryAddressComponents,
    elGetter: __utils.ASN1Encoder<
        UniversalExtensionPhysicalDeliveryAddressComponents
    >
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

// TODO: ObjectAssignment: unformatted-postal-address

export class UnformattedPostalAddress {
    constructor(
        readonly printable_address: asn1.PrintableString[] | undefined,
        readonly teletex_string: asn1.TeletexString | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_UnformattedPostalAddress: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "printable-address",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "teletex-string",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 20),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_UnformattedPostalAddress: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_UnformattedPostalAddress: __utils.ComponentSpec[] = [];
let _cached_decoder_for_UnformattedPostalAddress: __utils.ASN1Decoder<
    UnformattedPostalAddress
> | null = null;
let _cached_encoder_for_UnformattedPostalAddress: __utils.ASN1Encoder<
    UnformattedPostalAddress
> | null = null;
export function _decode_UnformattedPostalAddress(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UnformattedPostalAddress) {
        _cached_decoder_for_UnformattedPostalAddress = function (
            el: asn1.ASN1Element
        ): UnformattedPostalAddress {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let printable_address: asn1.OPTIONAL<asn1.PrintableString[]>;
            let teletex_string: asn1.OPTIONAL<asn1.TeletexString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "printable-address": (_el: asn1.ASN1Element): void => {
                    printable_address = __utils._decodeSequenceOf<
                        asn1.PrintableString
                    >(() => __utils._decodePrintableString)(_el);
                },
                "teletex-string": (_el: asn1.ASN1Element): void => {
                    teletex_string = __utils._decodeTeletexString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
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
export function _encode_UnformattedPostalAddress(
    value: UnformattedPostalAddress,
    elGetter: __utils.ASN1Encoder<UnformattedPostalAddress>
) {
    if (!_cached_encoder_for_UnformattedPostalAddress) {
        _cached_encoder_for_UnformattedPostalAddress = function (
            value: UnformattedPostalAddress,
            elGetter: __utils.ASN1Encoder<UnformattedPostalAddress>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.printable_address === undefined
                            ? undefined
                            : __utils._encodeSequenceOf<asn1.PrintableString>(
                                  () => __utils._encodePrintableString,
                                  __utils.BER
                              )(value.printable_address, __utils.BER),
                        /* IF_ABSENT  */ value.teletex_string === undefined
                            ? undefined
                            : __utils._encodeTeletexString(
                                  value.teletex_string,
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
    return _cached_encoder_for_UnformattedPostalAddress(value, elGetter);
}

// TODO: ObjectAssignment: universal-unformatted-postal-address

export const ub_unformatted_address_length: asn1.INTEGER = 180;

export type UniversalUnformattedPostalAddress = UniversalOrBMPString; // DefinedType
let _cached_decoder_for_UniversalUnformattedPostalAddress: __utils.ASN1Decoder<
    UniversalUnformattedPostalAddress
> | null = null;
let _cached_encoder_for_UniversalUnformattedPostalAddress: __utils.ASN1Encoder<
    UniversalUnformattedPostalAddress
> | null = null;
export function _decode_UniversalUnformattedPostalAddress(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_UniversalUnformattedPostalAddress) {
        _cached_decoder_for_UniversalUnformattedPostalAddress = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_UniversalUnformattedPostalAddress(el);
}
export function _encode_UniversalUnformattedPostalAddress(
    value: UniversalUnformattedPostalAddress,
    elGetter: __utils.ASN1Encoder<UniversalUnformattedPostalAddress>
) {
    if (!_cached_encoder_for_UniversalUnformattedPostalAddress) {
        _cached_encoder_for_UniversalUnformattedPostalAddress = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_UniversalUnformattedPostalAddress(
        value,
        elGetter
    );
}

// TODO: ObjectAssignment: street-address

export type StreetAddress = PDSParameter; // DefinedType
let _cached_decoder_for_StreetAddress: __utils.ASN1Decoder<
    StreetAddress
> | null = null;
let _cached_encoder_for_StreetAddress: __utils.ASN1Encoder<
    StreetAddress
> | null = null;
export function _decode_StreetAddress(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_StreetAddress) {
        _cached_decoder_for_StreetAddress = _decode_PDSParameter;
    }
    return _cached_decoder_for_StreetAddress(el);
}
export function _encode_StreetAddress(
    value: StreetAddress,
    elGetter: __utils.ASN1Encoder<StreetAddress>
) {
    if (!_cached_encoder_for_StreetAddress) {
        _cached_encoder_for_StreetAddress = _encode_PDSParameter;
    }
    return _cached_encoder_for_StreetAddress(value, elGetter);
}

// TODO: ObjectAssignment: universal-street-address

export type UniversalStreetAddress = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalStreetAddress: __utils.ASN1Decoder<
    UniversalStreetAddress
> | null = null;
let _cached_encoder_for_UniversalStreetAddress: __utils.ASN1Encoder<
    UniversalStreetAddress
> | null = null;
export function _decode_UniversalStreetAddress(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UniversalStreetAddress) {
        _cached_decoder_for_UniversalStreetAddress = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalStreetAddress(el);
}
export function _encode_UniversalStreetAddress(
    value: UniversalStreetAddress,
    elGetter: __utils.ASN1Encoder<UniversalStreetAddress>
) {
    if (!_cached_encoder_for_UniversalStreetAddress) {
        _cached_encoder_for_UniversalStreetAddress = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalStreetAddress(value, elGetter);
}

// TODO: ObjectAssignment: post-office-box-address

export type PostOfficeBoxAddress = PDSParameter; // DefinedType
let _cached_decoder_for_PostOfficeBoxAddress: __utils.ASN1Decoder<
    PostOfficeBoxAddress
> | null = null;
let _cached_encoder_for_PostOfficeBoxAddress: __utils.ASN1Encoder<
    PostOfficeBoxAddress
> | null = null;
export function _decode_PostOfficeBoxAddress(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PostOfficeBoxAddress) {
        _cached_decoder_for_PostOfficeBoxAddress = _decode_PDSParameter;
    }
    return _cached_decoder_for_PostOfficeBoxAddress(el);
}
export function _encode_PostOfficeBoxAddress(
    value: PostOfficeBoxAddress,
    elGetter: __utils.ASN1Encoder<PostOfficeBoxAddress>
) {
    if (!_cached_encoder_for_PostOfficeBoxAddress) {
        _cached_encoder_for_PostOfficeBoxAddress = _encode_PDSParameter;
    }
    return _cached_encoder_for_PostOfficeBoxAddress(value, elGetter);
}

// TODO: ObjectAssignment: universal-post-office-box-address

export type UniversalPostOfficeBoxAddress = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalPostOfficeBoxAddress: __utils.ASN1Decoder<
    UniversalPostOfficeBoxAddress
> | null = null;
let _cached_encoder_for_UniversalPostOfficeBoxAddress: __utils.ASN1Encoder<
    UniversalPostOfficeBoxAddress
> | null = null;
export function _decode_UniversalPostOfficeBoxAddress(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UniversalPostOfficeBoxAddress) {
        _cached_decoder_for_UniversalPostOfficeBoxAddress = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPostOfficeBoxAddress(el);
}
export function _encode_UniversalPostOfficeBoxAddress(
    value: UniversalPostOfficeBoxAddress,
    elGetter: __utils.ASN1Encoder<UniversalPostOfficeBoxAddress>
) {
    if (!_cached_encoder_for_UniversalPostOfficeBoxAddress) {
        _cached_encoder_for_UniversalPostOfficeBoxAddress = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPostOfficeBoxAddress(value, elGetter);
}

// TODO: ObjectAssignment: poste-restante-address

export type PosteRestanteAddress = PDSParameter; // DefinedType
let _cached_decoder_for_PosteRestanteAddress: __utils.ASN1Decoder<
    PosteRestanteAddress
> | null = null;
let _cached_encoder_for_PosteRestanteAddress: __utils.ASN1Encoder<
    PosteRestanteAddress
> | null = null;
export function _decode_PosteRestanteAddress(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PosteRestanteAddress) {
        _cached_decoder_for_PosteRestanteAddress = _decode_PDSParameter;
    }
    return _cached_decoder_for_PosteRestanteAddress(el);
}
export function _encode_PosteRestanteAddress(
    value: PosteRestanteAddress,
    elGetter: __utils.ASN1Encoder<PosteRestanteAddress>
) {
    if (!_cached_encoder_for_PosteRestanteAddress) {
        _cached_encoder_for_PosteRestanteAddress = _encode_PDSParameter;
    }
    return _cached_encoder_for_PosteRestanteAddress(value, elGetter);
}

// TODO: ObjectAssignment: universal-poste-restante-address

export type UniversalPosteRestanteAddress = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalPosteRestanteAddress: __utils.ASN1Decoder<
    UniversalPosteRestanteAddress
> | null = null;
let _cached_encoder_for_UniversalPosteRestanteAddress: __utils.ASN1Encoder<
    UniversalPosteRestanteAddress
> | null = null;
export function _decode_UniversalPosteRestanteAddress(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UniversalPosteRestanteAddress) {
        _cached_decoder_for_UniversalPosteRestanteAddress = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPosteRestanteAddress(el);
}
export function _encode_UniversalPosteRestanteAddress(
    value: UniversalPosteRestanteAddress,
    elGetter: __utils.ASN1Encoder<UniversalPosteRestanteAddress>
) {
    if (!_cached_encoder_for_UniversalPosteRestanteAddress) {
        _cached_encoder_for_UniversalPosteRestanteAddress = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPosteRestanteAddress(value, elGetter);
}

// TODO: ObjectAssignment: unique-postal-name

export type UniquePostalName = PDSParameter; // DefinedType
let _cached_decoder_for_UniquePostalName: __utils.ASN1Decoder<
    UniquePostalName
> | null = null;
let _cached_encoder_for_UniquePostalName: __utils.ASN1Encoder<
    UniquePostalName
> | null = null;
export function _decode_UniquePostalName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UniquePostalName) {
        _cached_decoder_for_UniquePostalName = _decode_PDSParameter;
    }
    return _cached_decoder_for_UniquePostalName(el);
}
export function _encode_UniquePostalName(
    value: UniquePostalName,
    elGetter: __utils.ASN1Encoder<UniquePostalName>
) {
    if (!_cached_encoder_for_UniquePostalName) {
        _cached_encoder_for_UniquePostalName = _encode_PDSParameter;
    }
    return _cached_encoder_for_UniquePostalName(value, elGetter);
}

// TODO: ObjectAssignment: universal-unique-postal-name

export type UniversalUniquePostalName = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalUniquePostalName: __utils.ASN1Decoder<
    UniversalUniquePostalName
> | null = null;
let _cached_encoder_for_UniversalUniquePostalName: __utils.ASN1Encoder<
    UniversalUniquePostalName
> | null = null;
export function _decode_UniversalUniquePostalName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UniversalUniquePostalName) {
        _cached_decoder_for_UniversalUniquePostalName = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalUniquePostalName(el);
}
export function _encode_UniversalUniquePostalName(
    value: UniversalUniquePostalName,
    elGetter: __utils.ASN1Encoder<UniversalUniquePostalName>
) {
    if (!_cached_encoder_for_UniversalUniquePostalName) {
        _cached_encoder_for_UniversalUniquePostalName = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalUniquePostalName(value, elGetter);
}

// TODO: ObjectAssignment: local-postal-attributes

export type LocalPostalAttributes = PDSParameter; // DefinedType
let _cached_decoder_for_LocalPostalAttributes: __utils.ASN1Decoder<
    LocalPostalAttributes
> | null = null;
let _cached_encoder_for_LocalPostalAttributes: __utils.ASN1Encoder<
    LocalPostalAttributes
> | null = null;
export function _decode_LocalPostalAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_LocalPostalAttributes) {
        _cached_decoder_for_LocalPostalAttributes = _decode_PDSParameter;
    }
    return _cached_decoder_for_LocalPostalAttributes(el);
}
export function _encode_LocalPostalAttributes(
    value: LocalPostalAttributes,
    elGetter: __utils.ASN1Encoder<LocalPostalAttributes>
) {
    if (!_cached_encoder_for_LocalPostalAttributes) {
        _cached_encoder_for_LocalPostalAttributes = _encode_PDSParameter;
    }
    return _cached_encoder_for_LocalPostalAttributes(value, elGetter);
}

// TODO: ObjectAssignment: universal-local-postal-attributes

export type UniversalLocalPostalAttributes = UniversalPDSParameter; // DefinedType
let _cached_decoder_for_UniversalLocalPostalAttributes: __utils.ASN1Decoder<
    UniversalLocalPostalAttributes
> | null = null;
let _cached_encoder_for_UniversalLocalPostalAttributes: __utils.ASN1Encoder<
    UniversalLocalPostalAttributes
> | null = null;
export function _decode_UniversalLocalPostalAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UniversalLocalPostalAttributes) {
        _cached_decoder_for_UniversalLocalPostalAttributes = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalLocalPostalAttributes(el);
}
export function _encode_UniversalLocalPostalAttributes(
    value: UniversalLocalPostalAttributes,
    elGetter: __utils.ASN1Encoder<UniversalLocalPostalAttributes>
) {
    if (!_cached_encoder_for_UniversalLocalPostalAttributes) {
        _cached_encoder_for_UniversalLocalPostalAttributes = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalLocalPostalAttributes(value, elGetter);
}

// TODO: ObjectAssignment: extended-network-address

export class ExtendedNetworkAddress_e163_4_address {
    constructor(
        readonly number_: asn1.NumericString,
        readonly sub_address: asn1.NumericString | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_ExtendedNetworkAddress_e163_4_address: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "number",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sub-address",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ExtendedNetworkAddress_e163_4_address: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ExtendedNetworkAddress_e163_4_address: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ExtendedNetworkAddress_e163_4_address: __utils.ASN1Decoder<
    ExtendedNetworkAddress_e163_4_address
> | null = null;
let _cached_encoder_for_ExtendedNetworkAddress_e163_4_address: __utils.ASN1Encoder<
    ExtendedNetworkAddress_e163_4_address
> | null = null;
export function _decode_ExtendedNetworkAddress_e163_4_address(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_ExtendedNetworkAddress_e163_4_address) {
        _cached_decoder_for_ExtendedNetworkAddress_e163_4_address = function (
            el: asn1.ASN1Element
        ): ExtendedNetworkAddress_e163_4_address {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let number_!: asn1.NumericString;
            let sub_address: asn1.OPTIONAL<asn1.NumericString>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                number: (_el: asn1.ASN1Element): void => {
                    number_ = __utils._decode_explicit<asn1.NumericString>(
                        () => __utils._decodeNumericString
                    )(_el);
                },
                "sub-address": (_el: asn1.ASN1Element): void => {
                    sub_address = __utils._decode_explicit<asn1.NumericString>(
                        () => __utils._decodeNumericString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
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
export function _encode_ExtendedNetworkAddress_e163_4_address(
    value: ExtendedNetworkAddress_e163_4_address,
    elGetter: __utils.ASN1Encoder<ExtendedNetworkAddress_e163_4_address>
) {
    if (!_cached_encoder_for_ExtendedNetworkAddress_e163_4_address) {
        _cached_encoder_for_ExtendedNetworkAddress_e163_4_address = function (
            value: ExtendedNetworkAddress_e163_4_address,
            elGetter: __utils.ASN1Encoder<ExtendedNetworkAddress_e163_4_address>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodeNumericString,
                            __utils.BER
                        )(value.number_, __utils.BER),
                        /* IF_ABSENT  */ value.sub_address === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => __utils._encodeNumericString,
                                  __utils.BER
                              )(value.sub_address, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ExtendedNetworkAddress_e163_4_address(
        value,
        elGetter
    );
}

export type ExtendedNetworkAddress =
    | {
          e163_4_address: ExtendedNetworkAddress_e163_4_address;
      } /* CHOICE_ALT_ROOT */
    | { psap_address: PresentationAddress } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ExtendedNetworkAddress: __utils.ASN1Decoder<
    ExtendedNetworkAddress
> | null = null;
let _cached_encoder_for_ExtendedNetworkAddress: __utils.ASN1Encoder<
    ExtendedNetworkAddress
> | null = null;
export function _decode_ExtendedNetworkAddress(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ExtendedNetworkAddress) {
        _cached_decoder_for_ExtendedNetworkAddress = __utils._decode_inextensible_choice<
            ExtendedNetworkAddress
        >({
            "UNIVERSAL 16": [
                "e163_4_address",
                _decode_ExtendedNetworkAddress_e163_4_address,
            ],
            "CONTEXT 0": [
                "psap_address",
                __utils._decode_explicit<PresentationAddress>(
                    () => _decode_PresentationAddress
                ),
            ],
        });
    }
    return _cached_decoder_for_ExtendedNetworkAddress(el);
}
export function _encode_ExtendedNetworkAddress(
    value: ExtendedNetworkAddress,
    elGetter: __utils.ASN1Encoder<ExtendedNetworkAddress>
) {
    if (!_cached_encoder_for_ExtendedNetworkAddress) {
        _cached_encoder_for_ExtendedNetworkAddress = __utils._encode_choice<
            ExtendedNetworkAddress
        >(
            {
                e163_4_address: _encode_ExtendedNetworkAddress_e163_4_address,
                psap_address: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_PresentationAddress,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ExtendedNetworkAddress(value, elGetter);
}

// TODO: ObjectAssignment: terminal-type

export type TerminalType = asn1.INTEGER;
export const TerminalType_telex: TerminalType = 3; /* LONG_NAMED_INTEGER_VALUE */
export const telex: TerminalType = TerminalType_telex; /* SHORT_NAMED_INTEGER_VALUE */
export const TerminalType_teletex: TerminalType = 4; /* LONG_NAMED_INTEGER_VALUE */
export const teletex: TerminalType = TerminalType_teletex; /* SHORT_NAMED_INTEGER_VALUE */
export const TerminalType_g3_facsimile: TerminalType = 5; /* LONG_NAMED_INTEGER_VALUE */
export const g3_facsimile: TerminalType = TerminalType_g3_facsimile; /* SHORT_NAMED_INTEGER_VALUE */
export const TerminalType_g4_facsimile: TerminalType = 6; /* LONG_NAMED_INTEGER_VALUE */
export const g4_facsimile: TerminalType = TerminalType_g4_facsimile; /* SHORT_NAMED_INTEGER_VALUE */
export const TerminalType_ia5_terminal: TerminalType = 7; /* LONG_NAMED_INTEGER_VALUE */
export const ia5_terminal: TerminalType = TerminalType_ia5_terminal; /* SHORT_NAMED_INTEGER_VALUE */
export const TerminalType_videotex: TerminalType = 8; /* LONG_NAMED_INTEGER_VALUE */
export const videotex: TerminalType = TerminalType_videotex; /* SHORT_NAMED_INTEGER_VALUE */
let _cached_decoder_for_TerminalType: __utils.ASN1Decoder<
    TerminalType
> | null = null;
let _cached_encoder_for_TerminalType: __utils.ASN1Encoder<
    TerminalType
> | null = null;
export function _decode_TerminalType(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TerminalType) {
        _cached_decoder_for_TerminalType = __utils._decodeInteger;
    }
    return _cached_decoder_for_TerminalType(el);
}
export function _encode_TerminalType(
    value: TerminalType,
    elGetter: __utils.ASN1Encoder<TerminalType>
) {
    if (!_cached_encoder_for_TerminalType) {
        _cached_encoder_for_TerminalType = __utils._encodeInteger;
    }
    return _cached_encoder_for_TerminalType(value, elGetter);
}

// TODO: ObjectAssignment: teletex-domain-defined-attributes

export class TeletexDomainDefinedAttribute {
    constructor(
        readonly type_: asn1.TeletexString,
        readonly value: asn1.TeletexString
    ) {}
}
export const _root_component_type_list_1_spec_for_TeletexDomainDefinedAttribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 20),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "value",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 20),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TeletexDomainDefinedAttribute: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TeletexDomainDefinedAttribute: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TeletexDomainDefinedAttribute: __utils.ASN1Decoder<
    TeletexDomainDefinedAttribute
> | null = null;
let _cached_encoder_for_TeletexDomainDefinedAttribute: __utils.ASN1Encoder<
    TeletexDomainDefinedAttribute
> | null = null;
export function _decode_TeletexDomainDefinedAttribute(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TeletexDomainDefinedAttribute) {
        _cached_decoder_for_TeletexDomainDefinedAttribute = function (
            el: asn1.ASN1Element
        ): TeletexDomainDefinedAttribute {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "TeletexDomainDefinedAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: asn1.TeletexString;
            let value!: asn1.TeletexString;
            type_ = __utils._decodeTeletexString(sequence[0]);
            value = __utils._decodeTeletexString(sequence[1]);
            // TODO: Validate values.
            return new TeletexDomainDefinedAttribute(type_, value);
        };
    }
    return _cached_decoder_for_TeletexDomainDefinedAttribute(el);
}
export function _encode_TeletexDomainDefinedAttribute(
    value: TeletexDomainDefinedAttribute,
    elGetter: __utils.ASN1Encoder<TeletexDomainDefinedAttribute>
) {
    if (!_cached_encoder_for_TeletexDomainDefinedAttribute) {
        _cached_encoder_for_TeletexDomainDefinedAttribute = function (
            value: TeletexDomainDefinedAttribute,
            elGetter: __utils.ASN1Encoder<TeletexDomainDefinedAttribute>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeTeletexString(
                            value.type_,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeTeletexString(
                            value.value,
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
    return _cached_encoder_for_TeletexDomainDefinedAttribute(value, elGetter);
}

export type TeletexDomainDefinedAttributes = TeletexDomainDefinedAttribute[]; // SequenceOfType
let _cached_decoder_for_TeletexDomainDefinedAttributes: __utils.ASN1Decoder<
    TeletexDomainDefinedAttributes
> | null = null;
let _cached_encoder_for_TeletexDomainDefinedAttributes: __utils.ASN1Encoder<
    TeletexDomainDefinedAttributes
> | null = null;
export function _decode_TeletexDomainDefinedAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TeletexDomainDefinedAttributes) {
        _cached_decoder_for_TeletexDomainDefinedAttributes = __utils._decodeSequenceOf<
            TeletexDomainDefinedAttribute
        >(() => _decode_TeletexDomainDefinedAttribute);
    }
    return _cached_decoder_for_TeletexDomainDefinedAttributes(el);
}
export function _encode_TeletexDomainDefinedAttributes(
    value: TeletexDomainDefinedAttributes,
    elGetter: __utils.ASN1Encoder<TeletexDomainDefinedAttributes>
) {
    if (!_cached_encoder_for_TeletexDomainDefinedAttributes) {
        _cached_encoder_for_TeletexDomainDefinedAttributes = __utils._encodeSequenceOf<
            TeletexDomainDefinedAttribute
        >(() => _encode_TeletexDomainDefinedAttribute, __utils.BER);
    }
    return _cached_encoder_for_TeletexDomainDefinedAttributes(value, elGetter);
}

// TODO: ObjectAssignment: universal-domain-defined-attributes

export const ub_domain_defined_attribute_type_length: asn1.INTEGER = 8;

export const ub_domain_defined_attribute_value_length: asn1.INTEGER = 128;

export class UniversalDomainDefinedAttribute {
    constructor(
        readonly type_: UniversalOrBMPString,
        readonly value: UniversalOrBMPString
    ) {}
}
export const _root_component_type_list_1_spec_for_UniversalDomainDefinedAttribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "value",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_UniversalDomainDefinedAttribute: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_UniversalDomainDefinedAttribute: __utils.ComponentSpec[] = [];
let _cached_decoder_for_UniversalDomainDefinedAttribute: __utils.ASN1Decoder<
    UniversalDomainDefinedAttribute
> | null = null;
let _cached_encoder_for_UniversalDomainDefinedAttribute: __utils.ASN1Encoder<
    UniversalDomainDefinedAttribute
> | null = null;
export function _decode_UniversalDomainDefinedAttribute(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UniversalDomainDefinedAttribute) {
        _cached_decoder_for_UniversalDomainDefinedAttribute = function (
            el: asn1.ASN1Element
        ): UniversalDomainDefinedAttribute {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "UniversalDomainDefinedAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: UniversalOrBMPString;
            let value!: UniversalOrBMPString;
            type_ = _decode_UniversalOrBMPString(sequence[0]);
            value = _decode_UniversalOrBMPString(sequence[1]);
            // TODO: Validate values.
            return new UniversalDomainDefinedAttribute(type_, value);
        };
    }
    return _cached_decoder_for_UniversalDomainDefinedAttribute(el);
}
export function _encode_UniversalDomainDefinedAttribute(
    value: UniversalDomainDefinedAttribute,
    elGetter: __utils.ASN1Encoder<UniversalDomainDefinedAttribute>
) {
    if (!_cached_encoder_for_UniversalDomainDefinedAttribute) {
        _cached_encoder_for_UniversalDomainDefinedAttribute = function (
            value: UniversalDomainDefinedAttribute,
            elGetter: __utils.ASN1Encoder<UniversalDomainDefinedAttribute>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_UniversalOrBMPString(
                            value.type_,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_UniversalOrBMPString(
                            value.value,
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
    return _cached_encoder_for_UniversalDomainDefinedAttribute(value, elGetter);
}

export type UniversalDomainDefinedAttributes = UniversalDomainDefinedAttribute[]; // SequenceOfType
let _cached_decoder_for_UniversalDomainDefinedAttributes: __utils.ASN1Decoder<
    UniversalDomainDefinedAttributes
> | null = null;
let _cached_encoder_for_UniversalDomainDefinedAttributes: __utils.ASN1Encoder<
    UniversalDomainDefinedAttributes
> | null = null;
export function _decode_UniversalDomainDefinedAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UniversalDomainDefinedAttributes) {
        _cached_decoder_for_UniversalDomainDefinedAttributes = __utils._decodeSequenceOf<
            UniversalDomainDefinedAttribute
        >(() => _decode_UniversalDomainDefinedAttribute);
    }
    return _cached_decoder_for_UniversalDomainDefinedAttributes(el);
}
export function _encode_UniversalDomainDefinedAttributes(
    value: UniversalDomainDefinedAttributes,
    elGetter: __utils.ASN1Encoder<UniversalDomainDefinedAttributes>
) {
    if (!_cached_encoder_for_UniversalDomainDefinedAttributes) {
        _cached_encoder_for_UniversalDomainDefinedAttributes = __utils._encodeSequenceOf<
            UniversalDomainDefinedAttribute
        >(() => _encode_UniversalDomainDefinedAttribute, __utils.BER);
    }
    return _cached_encoder_for_UniversalDomainDefinedAttributes(
        value,
        elGetter
    );
}

export const ub_integer_options: asn1.INTEGER = 256;

export const ub_e163_4_number_length: asn1.INTEGER = 15;

export const ub_e163_4_sub_address_length: asn1.INTEGER = 40;

export const ub_pds_physical_address_lines: asn1.INTEGER = 6;

export const ub_postal_code_length: asn1.INTEGER = 16;

export const ub_pds_name_length: asn1.INTEGER = 16;

export const ub_extension_attributes: asn1.INTEGER = 256;

export const ub_domain_defined_attributes: asn1.INTEGER = 4;

export const ub_organizational_units: asn1.INTEGER = 4;

export const ub_generation_qualifier_length: asn1.INTEGER = 3;

export const ub_initials_length: asn1.INTEGER = 5;

export const ub_given_name_length: asn1.INTEGER = 16;

export const ub_surname_length: asn1.INTEGER = 40;

export const ub_numeric_user_id_length: asn1.INTEGER = 32;

export const ub_terminal_id_length: asn1.INTEGER = 24;

export const ub_x121_address_length: asn1.INTEGER = 16;

export const ub_domain_name_length: asn1.INTEGER = 16;

export const ub_country_name_alpha_length: asn1.INTEGER = 2;

export const ub_country_name_numeric_length: asn1.INTEGER = 3;

/* END_MODULE PkiPmiExternalDataTypes */
