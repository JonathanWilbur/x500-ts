/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DisplayText,
    _decode_DisplayText,
    _encode_DisplayText,
} from "../PkiPmiExternalDataTypes/DisplayText.ta";
import {
    NoticeReference,
    _decode_NoticeReference,
    _encode_NoticeReference,
} from "../PkiPmiExternalDataTypes/NoticeReference.ta";
export {
    DisplayText,
    _decode_DisplayText,
    _encode_DisplayText,
} from "../PkiPmiExternalDataTypes/DisplayText.ta";
export {
    NoticeReference,
    _decode_NoticeReference,
    _encode_NoticeReference,
} from "../PkiPmiExternalDataTypes/NoticeReference.ta";

/* START_OF_SYMBOL_DEFINITION UserNotice */
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
/* END_OF_SYMBOL_DEFINITION UserNotice */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UserNotice */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UserNotice */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UserNotice */
/**
 * @summary The Trailing Root Component Types of UserNotice
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UserNotice: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UserNotice */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UserNotice */
/**
 * @summary The Extension Addition Component Types of UserNotice
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UserNotice: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UserNotice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UserNotice */
let _cached_decoder_for_UserNotice: $.ASN1Decoder<UserNotice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UserNotice */

/* START_OF_SYMBOL_DEFINITION _decode_UserNotice */
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
            return new UserNotice /* SEQUENCE_CONSTRUCTOR_CALL */(
                noticeRef,
                explicitText
            );
        };
    }
    return _cached_decoder_for_UserNotice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UserNotice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UserNotice */
let _cached_encoder_for_UserNotice: $.ASN1Encoder<UserNotice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UserNotice */

/* START_OF_SYMBOL_DEFINITION _encode_UserNotice */
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

/* END_OF_SYMBOL_DEFINITION _encode_UserNotice */

/* eslint-enable */
