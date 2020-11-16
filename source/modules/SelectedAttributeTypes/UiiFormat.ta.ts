/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UiiFormat_next,
    _decode_UiiFormat_next,
    _encode_UiiFormat_next,
} from "../SelectedAttributeTypes/UiiFormat-next.ta";
import {
    UiiFormat_subset,
    UiiFormat_subset_baseObject /* IMPORTED_ENUMERATION_ITEM */,
    _decode_UiiFormat_subset,
    _encode_UiiFormat_subset,
    _enum_for_UiiFormat_subset,
} from "../SelectedAttributeTypes/UiiFormat-subset.ta";
import {
    URI,
    _decode_URI,
    _encode_URI,
} from "../SelectedAttributeTypes/URI.ta";
export {
    UiiFormat_next,
    _decode_UiiFormat_next,
    _encode_UiiFormat_next,
} from "../SelectedAttributeTypes/UiiFormat-next.ta";
export {
    UiiFormat_subset,
    UiiFormat_subset_baseObject /* IMPORTED_ENUMERATION_ITEM */,
    UiiFormat_subset_oneLevel /* IMPORTED_ENUMERATION_ITEM */,
    UiiFormat_subset_wholeSubtree /* IMPORTED_ENUMERATION_ITEM */,
    _decode_UiiFormat_subset,
    _encode_UiiFormat_subset,
    _enum_for_UiiFormat_subset,
} from "../SelectedAttributeTypes/UiiFormat-subset.ta";
export {
    URI,
    _decode_URI,
    _encode_URI,
} from "../SelectedAttributeTypes/URI.ta";

/* START_OF_SYMBOL_DEFINITION UiiFormat */
/**
 * @summary UiiFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiFormat ::= SEQUENCE {
 *   baseObject  URI  OPTIONAL,
 *   subset      ENUMERATED {
 *     baseObject   (0),
 *     oneLevel     (1),
 *     wholeSubtree (2) } DEFAULT baseObject,
 *   next        CHOICE {
 *     length      INTEGER,
 *     filter      UiiFilter } }
 * ```
 *
 * @class
 */
export class UiiFormat {
    constructor(
        /**
         * @summary `baseObject`.
         * @public
         * @readonly
         */
        readonly baseObject: OPTIONAL<URI>,
        /**
         * @summary `subset`.
         * @public
         * @readonly
         */
        readonly subset: OPTIONAL<UiiFormat_subset>,
        /**
         * @summary `next`.
         * @public
         * @readonly
         */
        readonly next: UiiFormat_next
    ) {}

    /**
     * @summary Restructures an object into a UiiFormat
     * @description
     *
     * This takes an `object` and converts it to a `UiiFormat`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UiiFormat`.
     * @returns {UiiFormat}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof UiiFormat]: UiiFormat[_K] }>
    ): UiiFormat {
        return new UiiFormat(_o.baseObject, _o.subset, _o.next);
    }

    /**
     * @summary Getter that returns the default value for `subset`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_subset() {
        return UiiFormat_subset_baseObject;
    }
    /**
     * @summary The enum used as the type of the component `subset`
     * @public
     * @static
     */

    public static _enum_for_subset = _enum_for_UiiFormat_subset;
}
/* END_OF_SYMBOL_DEFINITION UiiFormat */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UiiFormat */
/**
 * @summary The Leading Root Component Types of UiiFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UiiFormat: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "baseObject",
        true,
        $.hasTag(_TagClass.universal, 12),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subset",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec("next", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UiiFormat */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UiiFormat */
/**
 * @summary The Trailing Root Component Types of UiiFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UiiFormat: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UiiFormat */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UiiFormat */
/**
 * @summary The Extension Addition Component Types of UiiFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UiiFormat: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UiiFormat */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UiiFormat */
let _cached_decoder_for_UiiFormat: $.ASN1Decoder<UiiFormat> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UiiFormat */

/* START_OF_SYMBOL_DEFINITION _decode_UiiFormat */
/**
 * @summary Decodes an ASN.1 element into a(n) UiiFormat
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UiiFormat} The decoded data structure.
 */
export function _decode_UiiFormat(el: _Element) {
    if (!_cached_decoder_for_UiiFormat) {
        _cached_decoder_for_UiiFormat = function (el: _Element): UiiFormat {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let baseObject: OPTIONAL<URI>;
            let subset: OPTIONAL<UiiFormat_subset> =
                UiiFormat._default_value_for_subset;
            let next!: UiiFormat_next;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                baseObject: (_el: _Element): void => {
                    baseObject = _decode_URI(_el);
                },
                subset: (_el: _Element): void => {
                    subset = _decode_UiiFormat_subset(_el);
                },
                next: (_el: _Element): void => {
                    next = _decode_UiiFormat_next(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UiiFormat,
                _extension_additions_list_spec_for_UiiFormat,
                _root_component_type_list_2_spec_for_UiiFormat,
                undefined
            );
            return new UiiFormat /* SEQUENCE_CONSTRUCTOR_CALL */(
                baseObject,
                subset,
                next
            );
        };
    }
    return _cached_decoder_for_UiiFormat(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UiiFormat */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UiiFormat */
let _cached_encoder_for_UiiFormat: $.ASN1Encoder<UiiFormat> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UiiFormat */

/* START_OF_SYMBOL_DEFINITION _encode_UiiFormat */
/**
 * @summary Encodes a(n) UiiFormat into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UiiFormat, encoded as an ASN.1 Element.
 */
export function _encode_UiiFormat(
    value: UiiFormat,
    elGetter: $.ASN1Encoder<UiiFormat>
) {
    if (!_cached_encoder_for_UiiFormat) {
        _cached_encoder_for_UiiFormat = function (
            value: UiiFormat,
            elGetter: $.ASN1Encoder<UiiFormat>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.baseObject === undefined
                            ? undefined
                            : _encode_URI(value.baseObject, $.BER),
                        /* IF_DEFAULT */ value.subset === undefined ||
                        $.deepEq(
                            value.subset,
                            UiiFormat._default_value_for_subset
                        )
                            ? undefined
                            : _encode_UiiFormat_subset(value.subset, $.BER),
                        /* REQUIRED   */ _encode_UiiFormat_next(
                            value.next,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UiiFormat(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UiiFormat */

/* eslint-enable */
