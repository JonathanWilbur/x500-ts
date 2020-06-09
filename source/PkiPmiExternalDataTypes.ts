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
export {
    authenticationFramework,
    certificateExtensions,
    intSecurity,
    selectedAttributeTypes,
} from "./UsefulDefinitions";

export type DisplayText =
    | { visibleString: asn1.VisibleString }
    | { bmpString: asn1.BMPString }
    | { utf8String: asn1.UTF8String };
export const _decode_DisplayText = __utils._decode_inextensible_choice<
    DisplayText
>({
    "UNIVERSAL 26": ["visibleString", __utils._decodeVisibleString],
    "UNIVERSAL 30": ["bmpString", __utils._decodeBMPString],
    "UNIVERSAL 12": ["utf8String", __utils._decodeUTF8String],
});
export const _encode_DisplayText = __utils._encode_choice<DisplayText>(
    {
        visibleString: __utils._encodeVisibleString,
        bmpString: __utils._encodeBMPString,
        utf8String: __utils._encodeUTF8String,
    },
    __utils.BER
);

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
export const _decode_NoticeReference = function (
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
export const _encode_NoticeReference = function (
    value: NoticeReference,
    elGetter: __utils.ASN1Encoder<NoticeReference>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                _encode_DisplayText(value.organization, __utils.BER),
                __utils._encodeSequenceOf<asn1.INTEGER>(
                    () => __utils._encodeInteger,
                    __utils.BER
                )(value.noticeNumbers, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

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
export const _decode_UserNotice = function (el: asn1.ASN1Element): UserNotice {
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
export const _encode_UserNotice = function (
    value: UserNotice,
    elGetter: __utils.ASN1Encoder<UserNotice>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                value.noticeRef
                    ? _encode_NoticeReference(value.noticeRef, __utils.BER)
                    : undefined,
                value.explicitText
                    ? _encode_DisplayText(value.explicitText, __utils.BER)
                    : undefined,
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

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
export const _decode_AccessDescription = function (
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
export const _encode_AccessDescription = function (
    value: AccessDescription,
    elGetter: __utils.ASN1Encoder<AccessDescription>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                __utils._encodeObjectIdentifier(
                    value.accessMethod,
                    __utils.BER
                ),
                _encode_GeneralName(value.accessLocation, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type AuthorityInfoAccessSyntax = AccessDescription[]; // SequenceOfType
export const _decode_AuthorityInfoAccessSyntax = __utils._decodeSequenceOf<
    AccessDescription
>(() => _decode_AccessDescription);
export const _encode_AuthorityInfoAccessSyntax = __utils._encodeSequenceOf<
    AccessDescription
>(() => _encode_AccessDescription, __utils.BER);

// TODO: ObjectAssignment: subjectInfoAccess

export type SubjectInfoAccessSyntax = AccessDescription[]; // SequenceOfType
export const _decode_SubjectInfoAccessSyntax = __utils._decodeSequenceOf<
    AccessDescription
>(() => _decode_AccessDescription);
export const _encode_SubjectInfoAccessSyntax = __utils._encodeSequenceOf<
    AccessDescription
>(() => _encode_AccessDescription, __utils.BER);

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
export const _decode_G3FacsimileNonBasicParameters = __utils._decodeBitString;
export const _encode_G3FacsimileNonBasicParameters = __utils._encodeBitString;

export type CountryName =
    | { x121_dcc_code: asn1.NumericString }
    | { iso_3166_alpha2_code: asn1.PrintableString };
export const _decode_CountryName = __utils._decode_explicit<CountryName>(() =>
    __utils._decode_inextensible_choice<CountryName>({
        "UNIVERSAL 18": ["x121_dcc_code", __utils._decodeNumericString],
        "UNIVERSAL 19": [
            "iso_3166_alpha2_code",
            __utils._decodePrintableString,
        ],
    })
);
export const _encode_CountryName = __utils._encode_explicit(
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

export type AdministrationDomainName =
    | { numeric: asn1.NumericString }
    | { printable: asn1.PrintableString };
export const _decode_AdministrationDomainName = __utils._decode_explicit<
    AdministrationDomainName
>(() =>
    __utils._decode_inextensible_choice<AdministrationDomainName>({
        "UNIVERSAL 18": ["numeric", __utils._decodeNumericString],
        "UNIVERSAL 19": ["printable", __utils._decodePrintableString],
    })
);
export const _encode_AdministrationDomainName = __utils._encode_explicit(
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

export type X121Address = asn1.NumericString; // NumericString
export const _decode_X121Address = __utils._decodeNumericString;
export const _encode_X121Address = __utils._encodeNumericString;

export type NetworkAddress = X121Address; // DefinedType
export const _decode_NetworkAddress = _decode_X121Address;
export const _encode_NetworkAddress = _encode_X121Address;

export type TerminalIdentifier = asn1.PrintableString; // PrintableString
export const _decode_TerminalIdentifier = __utils._decodePrintableString;
export const _encode_TerminalIdentifier = __utils._encodePrintableString;

export type PrivateDomainName =
    | { numeric: asn1.NumericString }
    | { printable: asn1.PrintableString };
export const _decode_PrivateDomainName = __utils._decode_inextensible_choice<
    PrivateDomainName
>({
    "UNIVERSAL 18": ["numeric", __utils._decodeNumericString],
    "UNIVERSAL 19": ["printable", __utils._decodePrintableString],
});
export const _encode_PrivateDomainName = __utils._encode_choice<
    PrivateDomainName
>(
    {
        numeric: __utils._encodeNumericString,
        printable: __utils._encodePrintableString,
    },
    __utils.BER
);

export type OrganizationName = asn1.PrintableString; // PrintableString
export const _decode_OrganizationName = __utils._decodePrintableString;
export const _encode_OrganizationName = __utils._encodePrintableString;

export type NumericUserIdentifier = asn1.NumericString; // NumericString
export const _decode_NumericUserIdentifier = __utils._decodeNumericString;
export const _encode_NumericUserIdentifier = __utils._encodeNumericString;

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
export const _decode_PersonalName = function (
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
export const _encode_PersonalName = function (
    value: PersonalName,
    elGetter: __utils.ASN1Encoder<PersonalName>
): asn1.ASN1Element {
    return __utils._encodeSet(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodePrintableString,
                    __utils.BER
                )(value.surname, __utils.BER),
                value.given_name
                    ? __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => __utils._encodePrintableString,
                          __utils.BER
                      )(value.given_name, __utils.BER)
                    : undefined,
                value.initials
                    ? __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          2,
                          () => __utils._encodePrintableString,
                          __utils.BER
                      )(value.initials, __utils.BER)
                    : undefined,
                value.generation_qualifier
                    ? __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          3,
                          () => __utils._encodePrintableString,
                          __utils.BER
                      )(value.generation_qualifier, __utils.BER)
                    : undefined,
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type OrganizationalUnitName = asn1.PrintableString; // PrintableString
export const _decode_OrganizationalUnitName = __utils._decodePrintableString;
export const _encode_OrganizationalUnitName = __utils._encodePrintableString;

export type OrganizationalUnitNames = OrganizationalUnitName[]; // SequenceOfType
export const _decode_OrganizationalUnitNames = __utils._decodeSequenceOf<
    OrganizationalUnitName
>(() => _decode_OrganizationalUnitName);
export const _encode_OrganizationalUnitNames = __utils._encodeSequenceOf<
    OrganizationalUnitName
>(() => _encode_OrganizationalUnitName, __utils.BER);

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
export const _decode_BuiltInStandardAttributes = function (
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
            administration_domain_name = _decode_AdministrationDomainName(_el);
        },
        "network-address": (_el: asn1.ASN1Element): void => {
            network_address = __utils._decode_explicit<NetworkAddress>(
                () => _decode_NetworkAddress
            )(_el);
        },
        "terminal-identifier": (_el: asn1.ASN1Element): void => {
            terminal_identifier = __utils._decode_explicit<TerminalIdentifier>(
                () => _decode_TerminalIdentifier
            )(_el);
        },
        "private-domain-name": (_el: asn1.ASN1Element): void => {
            private_domain_name = __utils._decode_explicit<PrivateDomainName>(
                () => _decode_PrivateDomainName
            )(_el);
        },
        "organization-name": (_el: asn1.ASN1Element): void => {
            organization_name = __utils._decode_explicit<OrganizationName>(
                () => _decode_OrganizationName
            )(_el);
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
export const _encode_BuiltInStandardAttributes = function (
    value: BuiltInStandardAttributes,
    elGetter: __utils.ASN1Encoder<BuiltInStandardAttributes>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                value.country_name
                    ? _encode_CountryName(value.country_name, __utils.BER)
                    : undefined,
                value.administration_domain_name
                    ? _encode_AdministrationDomainName(
                          value.administration_domain_name,
                          __utils.BER
                      )
                    : undefined,
                value.network_address
                    ? __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          0,
                          () => _encode_NetworkAddress,
                          __utils.BER
                      )(value.network_address, __utils.BER)
                    : undefined,
                value.terminal_identifier
                    ? __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => _encode_TerminalIdentifier,
                          __utils.BER
                      )(value.terminal_identifier, __utils.BER)
                    : undefined,
                value.private_domain_name
                    ? __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          2,
                          () => _encode_PrivateDomainName,
                          __utils.BER
                      )(value.private_domain_name, __utils.BER)
                    : undefined,
                value.organization_name
                    ? __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          3,
                          () => _encode_OrganizationName,
                          __utils.BER
                      )(value.organization_name, __utils.BER)
                    : undefined,
                value.numeric_user_identifier
                    ? __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          4,
                          () => _encode_NumericUserIdentifier,
                          __utils.BER
                      )(value.numeric_user_identifier, __utils.BER)
                    : undefined,
                value.personal_name
                    ? __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          5,
                          () => _encode_PersonalName,
                          __utils.BER
                      )(value.personal_name, __utils.BER)
                    : undefined,
                value.organizational_unit_names
                    ? __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          6,
                          () => _encode_OrganizationalUnitNames,
                          __utils.BER
                      )(value.organizational_unit_names, __utils.BER)
                    : undefined,
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

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
export const _decode_BuiltInDomainDefinedAttribute = function (
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
export const _encode_BuiltInDomainDefinedAttribute = function (
    value: BuiltInDomainDefinedAttribute,
    elGetter: __utils.ASN1Encoder<BuiltInDomainDefinedAttribute>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                __utils._encodePrintableString(value.type_, __utils.BER),
                __utils._encodePrintableString(value.value, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type BuiltInDomainDefinedAttributes = BuiltInDomainDefinedAttribute[]; // SequenceOfType
export const _decode_BuiltInDomainDefinedAttributes = __utils._decodeSequenceOf<
    BuiltInDomainDefinedAttribute
>(() => _decode_BuiltInDomainDefinedAttribute);
export const _encode_BuiltInDomainDefinedAttributes = __utils._encodeSequenceOf<
    BuiltInDomainDefinedAttribute
>(() => _encode_BuiltInDomainDefinedAttribute, __utils.BER);

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
export const _decode_ExtensionAttribute = function (
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
    extension_attribute_value = __utils._decode_explicit<asn1.ASN1Element>(
        () => __utils._decodeAny
    )(sequence[1]);
    // TODO: Validate values.
    return new ExtensionAttribute(
        extension_attribute_type,
        extension_attribute_value
    );
};
export const _encode_ExtensionAttribute = function (
    value: ExtensionAttribute,
    elGetter: __utils.ASN1Encoder<ExtensionAttribute>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeInteger,
                    __utils.BER
                )(value.extension_attribute_type, __utils.BER),
                __utils._encode_explicit(
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

export type ExtensionAttributes = ExtensionAttribute[]; // SetOfType
export const _decode_ExtensionAttributes = __utils._decodeSetOf<
    ExtensionAttribute
>(() => _decode_ExtensionAttribute);
export const _encode_ExtensionAttributes = __utils._encodeSetOf<
    ExtensionAttribute
>(() => _encode_ExtensionAttribute, __utils.BER);

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
export const _decode_ORAddress = function (el: asn1.ASN1Element): ORAddress {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let built_in_standard_attributes!: BuiltInStandardAttributes;
    let built_in_domain_defined_attributes: asn1.OPTIONAL<BuiltInDomainDefinedAttributes>;
    let extension_attributes: asn1.OPTIONAL<ExtensionAttributes>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "built-in-standard-attributes": (_el: asn1.ASN1Element): void => {
            built_in_standard_attributes = _decode_BuiltInStandardAttributes(
                _el
            );
        },
        "built-in-domain-defined-attributes": (_el: asn1.ASN1Element): void => {
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
export const _encode_ORAddress = function (
    value: ORAddress,
    elGetter: __utils.ASN1Encoder<ORAddress>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                _encode_BuiltInStandardAttributes(
                    value.built_in_standard_attributes,
                    __utils.BER
                ),
                value.built_in_domain_defined_attributes
                    ? _encode_BuiltInDomainDefinedAttributes(
                          value.built_in_domain_defined_attributes,
                          __utils.BER
                      )
                    : undefined,
                value.extension_attributes
                    ? _encode_ExtensionAttributes(
                          value.extension_attributes,
                          __utils.BER
                      )
                    : undefined,
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectSetAssignment: ExtensionAttributeTable

// TODO: ObjectClassAssignment: EXTENSION-ATTRIBUTE

// TODO: ObjectAssignment: common-name

export type CommonName = asn1.PrintableString; // PrintableString
export const _decode_CommonName = __utils._decodePrintableString;
export const _encode_CommonName = __utils._encodePrintableString;

// TODO: ObjectAssignment: teletex-common-name

export type TeletexCommonName = asn1.TeletexString; // TeletexString
export const _decode_TeletexCommonName = __utils._decodeTeletexString;
export const _encode_TeletexCommonName = __utils._encodeTeletexString;

// TODO: ObjectAssignment: universal-common-name

export type UniversalOrBMPString_character_encoding =
    | { two_octets: asn1.BMPString }
    | { four_octets: asn1.UniversalString };
export const _decode_UniversalOrBMPString_character_encoding = __utils._decode_inextensible_choice<
    UniversalOrBMPString_character_encoding
>({
    "UNIVERSAL 30": ["two_octets", __utils._decodeBMPString],
    "UNIVERSAL 28": ["four_octets", __utils._decodeUniversalString],
});
export const _encode_UniversalOrBMPString_character_encoding = __utils._encode_choice<
    UniversalOrBMPString_character_encoding
>(
    {
        two_octets: __utils._encodeBMPString,
        four_octets: __utils._encodeUniversalString,
    },
    __utils.BER
);

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
export const _decode_UniversalOrBMPString = function (
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
export const _encode_UniversalOrBMPString = function (
    value: UniversalOrBMPString,
    elGetter: __utils.ASN1Encoder<UniversalOrBMPString>
): asn1.ASN1Element {
    return __utils._encodeSet(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                _encode_UniversalOrBMPString_character_encoding(
                    value.character_encoding,
                    __utils.BER
                ),
                value.iso_639_language_code
                    ? __utils._encodePrintableString(
                          value.iso_639_language_code,
                          __utils.BER
                      )
                    : undefined,
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export const ub_common_name_length: asn1.INTEGER = 64;

export type UniversalCommonName = UniversalOrBMPString; // DefinedType
export const _decode_UniversalCommonName = _decode_UniversalOrBMPString;
export const _encode_UniversalCommonName = _encode_UniversalOrBMPString;

// TODO: ObjectAssignment: teletex-organization-name

export type TeletexOrganizationName = asn1.TeletexString; // TeletexString
export const _decode_TeletexOrganizationName = __utils._decodeTeletexString;
export const _encode_TeletexOrganizationName = __utils._encodeTeletexString;

// TODO: ObjectAssignment: universal-organization-name

export const ub_organization_name_length: asn1.INTEGER = 64;

export type UniversalOrganizationName = UniversalOrBMPString; // DefinedType
export const _decode_UniversalOrganizationName = _decode_UniversalOrBMPString;
export const _encode_UniversalOrganizationName = _encode_UniversalOrBMPString;

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
export const _decode_TeletexPersonalName = function (
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
            generation_qualifier = __utils._decode_explicit<asn1.TeletexString>(
                () => __utils._decodeTeletexString
            )(_el);
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
export const _encode_TeletexPersonalName = function (
    value: TeletexPersonalName,
    elGetter: __utils.ASN1Encoder<TeletexPersonalName>
): asn1.ASN1Element {
    return __utils._encodeSet(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeTeletexString,
                    __utils.BER
                )(value.surname, __utils.BER),
                value.given_name
                    ? __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => __utils._encodeTeletexString,
                          __utils.BER
                      )(value.given_name, __utils.BER)
                    : undefined,
                value.initials
                    ? __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          2,
                          () => __utils._encodeTeletexString,
                          __utils.BER
                      )(value.initials, __utils.BER)
                    : undefined,
                value.generation_qualifier
                    ? __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          3,
                          () => __utils._encodeTeletexString,
                          __utils.BER
                      )(value.generation_qualifier, __utils.BER)
                    : undefined,
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

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
export const _decode_UniversalPersonalName = function (
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
export const _encode_UniversalPersonalName = function (
    value: UniversalPersonalName,
    elGetter: __utils.ASN1Encoder<UniversalPersonalName>
): asn1.ASN1Element {
    return __utils._encodeSet(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_UniversalOrBMPString,
                    __utils.BER
                )(value.surname, __utils.BER),
                value.given_name
                    ? __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => _encode_UniversalOrBMPString,
                          __utils.BER
                      )(value.given_name, __utils.BER)
                    : undefined,
                value.initials
                    ? __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          2,
                          () => _encode_UniversalOrBMPString,
                          __utils.BER
                      )(value.initials, __utils.BER)
                    : undefined,
                value.generation_qualifier
                    ? __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          3,
                          () => _encode_UniversalOrBMPString,
                          __utils.BER
                      )(value.generation_qualifier, __utils.BER)
                    : undefined,
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectAssignment: teletex-organizational-unit-names

export type TeletexOrganizationalUnitName = asn1.TeletexString; // TeletexString
export const _decode_TeletexOrganizationalUnitName =
    __utils._decodeTeletexString;
export const _encode_TeletexOrganizationalUnitName =
    __utils._encodeTeletexString;

export type TeletexOrganizationalUnitNames = TeletexOrganizationalUnitName[]; // SequenceOfType
export const _decode_TeletexOrganizationalUnitNames = __utils._decodeSequenceOf<
    TeletexOrganizationalUnitName
>(() => _decode_TeletexOrganizationalUnitName);
export const _encode_TeletexOrganizationalUnitNames = __utils._encodeSequenceOf<
    TeletexOrganizationalUnitName
>(() => _encode_TeletexOrganizationalUnitName, __utils.BER);

// TODO: ObjectAssignment: universal-organizational-unit-names

export const ub_organizational_unit_name_length: asn1.INTEGER = 32;

export type UniversalOrganizationalUnitName = UniversalOrBMPString; // DefinedType
export const _decode_UniversalOrganizationalUnitName = _decode_UniversalOrBMPString;
export const _encode_UniversalOrganizationalUnitName = _encode_UniversalOrBMPString;

export type UniversalOrganizationalUnitNames = UniversalOrganizationalUnitName[]; // SequenceOfType
export const _decode_UniversalOrganizationalUnitNames = __utils._decodeSequenceOf<
    UniversalOrganizationalUnitName
>(() => _decode_UniversalOrganizationalUnitName);
export const _encode_UniversalOrganizationalUnitNames = __utils._encodeSequenceOf<
    UniversalOrganizationalUnitName
>(() => _encode_UniversalOrganizationalUnitName, __utils.BER);

// TODO: ObjectAssignment: pds-name

export type PDSName = asn1.PrintableString; // PrintableString
export const _decode_PDSName = __utils._decodePrintableString;
export const _encode_PDSName = __utils._encodePrintableString;

// TODO: ObjectAssignment: physical-delivery-country-name

export type PhysicalDeliveryCountryName =
    | { x121_dcc_code: asn1.NumericString }
    | { iso_3166_alpha2_code: asn1.PrintableString };
export const _decode_PhysicalDeliveryCountryName = __utils._decode_inextensible_choice<
    PhysicalDeliveryCountryName
>({
    "UNIVERSAL 18": ["x121_dcc_code", __utils._decodeNumericString],
    "UNIVERSAL 19": ["iso_3166_alpha2_code", __utils._decodePrintableString],
});
export const _encode_PhysicalDeliveryCountryName = __utils._encode_choice<
    PhysicalDeliveryCountryName
>(
    {
        x121_dcc_code: __utils._encodeNumericString,
        iso_3166_alpha2_code: __utils._encodePrintableString,
    },
    __utils.BER
);

// TODO: ObjectAssignment: postal-code

export type PostalCode =
    | { numeric_code: asn1.NumericString }
    | { printable_code: asn1.PrintableString };
export const _decode_PostalCode = __utils._decode_inextensible_choice<
    PostalCode
>({
    "UNIVERSAL 18": ["numeric_code", __utils._decodeNumericString],
    "UNIVERSAL 19": ["printable_code", __utils._decodePrintableString],
});
export const _encode_PostalCode = __utils._encode_choice<PostalCode>(
    {
        numeric_code: __utils._encodeNumericString,
        printable_code: __utils._encodePrintableString,
    },
    __utils.BER
);

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
export const _decode_PDSParameter = function (
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
export const _encode_PDSParameter = function (
    value: PDSParameter,
    elGetter: __utils.ASN1Encoder<PDSParameter>
): asn1.ASN1Element {
    return __utils._encodeSet(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                value.printable_string
                    ? __utils._encodePrintableString(
                          value.printable_string,
                          __utils.BER
                      )
                    : undefined,
                value.teletex_string
                    ? __utils._encodeTeletexString(
                          value.teletex_string,
                          __utils.BER
                      )
                    : undefined,
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type PhysicalDeliveryOfficeName = PDSParameter; // DefinedType
export const _decode_PhysicalDeliveryOfficeName = _decode_PDSParameter;
export const _encode_PhysicalDeliveryOfficeName = _encode_PDSParameter;

// TODO: ObjectAssignment: universal-physical-delivery-office-name

export const ub_pds_parameter_length: asn1.INTEGER = 30;

export type UniversalPDSParameter = UniversalOrBMPString; // DefinedType
export const _decode_UniversalPDSParameter = _decode_UniversalOrBMPString;
export const _encode_UniversalPDSParameter = _encode_UniversalOrBMPString;

export type UniversalPhysicalDeliveryOfficeName = UniversalPDSParameter; // DefinedType
export const _decode_UniversalPhysicalDeliveryOfficeName = _decode_UniversalPDSParameter;
export const _encode_UniversalPhysicalDeliveryOfficeName = _encode_UniversalPDSParameter;

// TODO: ObjectAssignment: physical-delivery-office-number

export type PhysicalDeliveryOfficeNumber = PDSParameter; // DefinedType
export const _decode_PhysicalDeliveryOfficeNumber = _decode_PDSParameter;
export const _encode_PhysicalDeliveryOfficeNumber = _encode_PDSParameter;

// TODO: ObjectAssignment: universal-physical-delivery-office-number

export type UniversalPhysicalDeliveryOfficeNumber = UniversalPDSParameter; // DefinedType
export const _decode_UniversalPhysicalDeliveryOfficeNumber = _decode_UniversalPDSParameter;
export const _encode_UniversalPhysicalDeliveryOfficeNumber = _encode_UniversalPDSParameter;

// TODO: ObjectAssignment: extension-OR-address-components

export type ExtensionORAddressComponents = PDSParameter; // DefinedType
export const _decode_ExtensionORAddressComponents = _decode_PDSParameter;
export const _encode_ExtensionORAddressComponents = _encode_PDSParameter;

// TODO: ObjectAssignment: universal-extension-OR-address-components

export type UniversalExtensionORAddressComponents = UniversalPDSParameter; // DefinedType
export const _decode_UniversalExtensionORAddressComponents = _decode_UniversalPDSParameter;
export const _encode_UniversalExtensionORAddressComponents = _encode_UniversalPDSParameter;

// TODO: ObjectAssignment: physical-delivery-personal-name

export type PhysicalDeliveryPersonalName = PDSParameter; // DefinedType
export const _decode_PhysicalDeliveryPersonalName = _decode_PDSParameter;
export const _encode_PhysicalDeliveryPersonalName = _encode_PDSParameter;

// TODO: ObjectAssignment: universal-physical-delivery-personal-name

export type UniversalPhysicalDeliveryPersonalName = UniversalPDSParameter; // DefinedType
export const _decode_UniversalPhysicalDeliveryPersonalName = _decode_UniversalPDSParameter;
export const _encode_UniversalPhysicalDeliveryPersonalName = _encode_UniversalPDSParameter;

// TODO: ObjectAssignment: physical-delivery-organization-name

export type PhysicalDeliveryOrganizationName = PDSParameter; // DefinedType
export const _decode_PhysicalDeliveryOrganizationName = _decode_PDSParameter;
export const _encode_PhysicalDeliveryOrganizationName = _encode_PDSParameter;

// TODO: ObjectAssignment: universal-physical-delivery-organization-name

export type UniversalPhysicalDeliveryOrganizationName = UniversalPDSParameter; // DefinedType
export const _decode_UniversalPhysicalDeliveryOrganizationName = _decode_UniversalPDSParameter;
export const _encode_UniversalPhysicalDeliveryOrganizationName = _encode_UniversalPDSParameter;

// TODO: ObjectAssignment: extension-physical-delivery-address-components

export type ExtensionPhysicalDeliveryAddressComponents = PDSParameter; // DefinedType
export const _decode_ExtensionPhysicalDeliveryAddressComponents = _decode_PDSParameter;
export const _encode_ExtensionPhysicalDeliveryAddressComponents = _encode_PDSParameter;

// TODO: ObjectAssignment: universal-extension-physical-delivery-address-components

export type UniversalExtensionPhysicalDeliveryAddressComponents = UniversalPDSParameter; // DefinedType
export const _decode_UniversalExtensionPhysicalDeliveryAddressComponents = _decode_UniversalPDSParameter;
export const _encode_UniversalExtensionPhysicalDeliveryAddressComponents = _encode_UniversalPDSParameter;

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
export const _decode_UnformattedPostalAddress = function (
    el: asn1.ASN1Element
): UnformattedPostalAddress {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let printable_address: asn1.OPTIONAL<asn1.PrintableString[]>;
    let teletex_string: asn1.OPTIONAL<asn1.TeletexString>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "printable-address": (_el: asn1.ASN1Element): void => {
            printable_address = __utils._decodeSequenceOf<asn1.PrintableString>(
                () => __utils._decodePrintableString
            )(_el);
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
export const _encode_UnformattedPostalAddress = function (
    value: UnformattedPostalAddress,
    elGetter: __utils.ASN1Encoder<UnformattedPostalAddress>
): asn1.ASN1Element {
    return __utils._encodeSet(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                value.printable_address
                    ? __utils._encodeSequenceOf<asn1.PrintableString>(
                          () => __utils._encodePrintableString,
                          __utils.BER
                      )(value.printable_address, __utils.BER)
                    : undefined,
                value.teletex_string
                    ? __utils._encodeTeletexString(
                          value.teletex_string,
                          __utils.BER
                      )
                    : undefined,
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectAssignment: universal-unformatted-postal-address

export const ub_unformatted_address_length: asn1.INTEGER = 180;

export type UniversalUnformattedPostalAddress = UniversalOrBMPString; // DefinedType
export const _decode_UniversalUnformattedPostalAddress = _decode_UniversalOrBMPString;
export const _encode_UniversalUnformattedPostalAddress = _encode_UniversalOrBMPString;

// TODO: ObjectAssignment: street-address

export type StreetAddress = PDSParameter; // DefinedType
export const _decode_StreetAddress = _decode_PDSParameter;
export const _encode_StreetAddress = _encode_PDSParameter;

// TODO: ObjectAssignment: universal-street-address

export type UniversalStreetAddress = UniversalPDSParameter; // DefinedType
export const _decode_UniversalStreetAddress = _decode_UniversalPDSParameter;
export const _encode_UniversalStreetAddress = _encode_UniversalPDSParameter;

// TODO: ObjectAssignment: post-office-box-address

export type PostOfficeBoxAddress = PDSParameter; // DefinedType
export const _decode_PostOfficeBoxAddress = _decode_PDSParameter;
export const _encode_PostOfficeBoxAddress = _encode_PDSParameter;

// TODO: ObjectAssignment: universal-post-office-box-address

export type UniversalPostOfficeBoxAddress = UniversalPDSParameter; // DefinedType
export const _decode_UniversalPostOfficeBoxAddress = _decode_UniversalPDSParameter;
export const _encode_UniversalPostOfficeBoxAddress = _encode_UniversalPDSParameter;

// TODO: ObjectAssignment: poste-restante-address

export type PosteRestanteAddress = PDSParameter; // DefinedType
export const _decode_PosteRestanteAddress = _decode_PDSParameter;
export const _encode_PosteRestanteAddress = _encode_PDSParameter;

// TODO: ObjectAssignment: universal-poste-restante-address

export type UniversalPosteRestanteAddress = UniversalPDSParameter; // DefinedType
export const _decode_UniversalPosteRestanteAddress = _decode_UniversalPDSParameter;
export const _encode_UniversalPosteRestanteAddress = _encode_UniversalPDSParameter;

// TODO: ObjectAssignment: unique-postal-name

export type UniquePostalName = PDSParameter; // DefinedType
export const _decode_UniquePostalName = _decode_PDSParameter;
export const _encode_UniquePostalName = _encode_PDSParameter;

// TODO: ObjectAssignment: universal-unique-postal-name

export type UniversalUniquePostalName = UniversalPDSParameter; // DefinedType
export const _decode_UniversalUniquePostalName = _decode_UniversalPDSParameter;
export const _encode_UniversalUniquePostalName = _encode_UniversalPDSParameter;

// TODO: ObjectAssignment: local-postal-attributes

export type LocalPostalAttributes = PDSParameter; // DefinedType
export const _decode_LocalPostalAttributes = _decode_PDSParameter;
export const _encode_LocalPostalAttributes = _encode_PDSParameter;

// TODO: ObjectAssignment: universal-local-postal-attributes

export type UniversalLocalPostalAttributes = UniversalPDSParameter; // DefinedType
export const _decode_UniversalLocalPostalAttributes = _decode_UniversalPDSParameter;
export const _encode_UniversalLocalPostalAttributes = _encode_UniversalPDSParameter;

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
export const _decode_ExtendedNetworkAddress_e163_4_address = function (
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
export const _encode_ExtendedNetworkAddress_e163_4_address = function (
    value: ExtendedNetworkAddress_e163_4_address,
    elGetter: __utils.ASN1Encoder<ExtendedNetworkAddress_e163_4_address>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeNumericString,
                    __utils.BER
                )(value.number_, __utils.BER),
                value.sub_address
                    ? __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => __utils._encodeNumericString,
                          __utils.BER
                      )(value.sub_address, __utils.BER)
                    : undefined,
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type ExtendedNetworkAddress =
    | { e163_4_address: ExtendedNetworkAddress_e163_4_address }
    | { psap_address: PresentationAddress };
export const _decode_ExtendedNetworkAddress = __utils._decode_inextensible_choice<
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
export const _encode_ExtendedNetworkAddress = __utils._encode_choice<
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
export const _decode_TerminalType = __utils._decodeInteger;
export const _encode_TerminalType = __utils._encodeInteger;

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
export const _decode_TeletexDomainDefinedAttribute = function (
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
export const _encode_TeletexDomainDefinedAttribute = function (
    value: TeletexDomainDefinedAttribute,
    elGetter: __utils.ASN1Encoder<TeletexDomainDefinedAttribute>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                __utils._encodeTeletexString(value.type_, __utils.BER),
                __utils._encodeTeletexString(value.value, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type TeletexDomainDefinedAttributes = TeletexDomainDefinedAttribute[]; // SequenceOfType
export const _decode_TeletexDomainDefinedAttributes = __utils._decodeSequenceOf<
    TeletexDomainDefinedAttribute
>(() => _decode_TeletexDomainDefinedAttribute);
export const _encode_TeletexDomainDefinedAttributes = __utils._encodeSequenceOf<
    TeletexDomainDefinedAttribute
>(() => _encode_TeletexDomainDefinedAttribute, __utils.BER);

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
export const _decode_UniversalDomainDefinedAttribute = function (
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
export const _encode_UniversalDomainDefinedAttribute = function (
    value: UniversalDomainDefinedAttribute,
    elGetter: __utils.ASN1Encoder<UniversalDomainDefinedAttribute>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                _encode_UniversalOrBMPString(value.type_, __utils.BER),
                _encode_UniversalOrBMPString(value.value, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export type UniversalDomainDefinedAttributes = UniversalDomainDefinedAttribute[]; // SequenceOfType
export const _decode_UniversalDomainDefinedAttributes = __utils._decodeSequenceOf<
    UniversalDomainDefinedAttribute
>(() => _decode_UniversalDomainDefinedAttribute);
export const _encode_UniversalDomainDefinedAttributes = __utils._encodeSequenceOf<
    UniversalDomainDefinedAttribute
>(() => _encode_UniversalDomainDefinedAttribute, __utils.BER);

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
