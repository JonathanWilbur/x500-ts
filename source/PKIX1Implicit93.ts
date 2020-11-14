/**
 * @module PKIX1Implicit93
 * @summary The ASN.1 module `PKIX1Implicit93`.
 * @description
 *
 * OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-pkix1-implicit-93
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
    BMPString,
    INTEGER,
    OPTIONAL,
    UTF8String,
    VisibleString,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

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
 *   utf8String     UTF8String(SIZE (1..200))
 * }
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
 *   noticeNumbers  SEQUENCE OF INTEGER
 * }
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
 *   explicitText  DisplayText OPTIONAL
 * }
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

/* END_MODULE PKIX1Implicit93 */
/* eslint-enable */
