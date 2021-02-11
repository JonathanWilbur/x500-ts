/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DisplayText,
    _decode_DisplayText,
    _encode_DisplayText,
} from "../AttributeCertificateDefinitions/DisplayText.ta";
export {
    DisplayText,
    _decode_DisplayText,
    _encode_DisplayText,
} from "../AttributeCertificateDefinitions/DisplayText.ta";

/* START_OF_SYMBOL_DEFINITION NoticeReference */
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
        _o: { [_K in keyof NoticeReference]: NoticeReference[_K] }
    ): NoticeReference {
        return new NoticeReference(_o.organization, _o.noticeNumbers);
    }
}
/* END_OF_SYMBOL_DEFINITION NoticeReference */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NoticeReference */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NoticeReference */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NoticeReference */
/**
 * @summary The Trailing Root Component Types of NoticeReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NoticeReference: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NoticeReference */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NoticeReference */
/**
 * @summary The Extension Addition Component Types of NoticeReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NoticeReference: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NoticeReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NoticeReference */
let _cached_decoder_for_NoticeReference: $.ASN1Decoder<NoticeReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NoticeReference */

/* START_OF_SYMBOL_DEFINITION _decode_NoticeReference */
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
/* END_OF_SYMBOL_DEFINITION _decode_NoticeReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NoticeReference */
let _cached_encoder_for_NoticeReference: $.ASN1Encoder<NoticeReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NoticeReference */

/* START_OF_SYMBOL_DEFINITION _encode_NoticeReference */
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

/* END_OF_SYMBOL_DEFINITION _encode_NoticeReference */

/* eslint-enable */
