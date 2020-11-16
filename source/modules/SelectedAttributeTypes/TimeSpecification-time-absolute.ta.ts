/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION TimeSpecification_time_absolute */
/**
 * @summary TimeSpecification_time_absolute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeSpecification-time-absolute ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class TimeSpecification_time_absolute {
    constructor(
        /**
         * @summary `startTime`.
         * @public
         * @readonly
         */
        readonly startTime: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `endTime`.
         * @public
         * @readonly
         */
        readonly endTime: OPTIONAL<GeneralizedTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TimeSpecification_time_absolute
     * @description
     *
     * This takes an `object` and converts it to a `TimeSpecification_time_absolute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeSpecification_time_absolute`.
     * @returns {TimeSpecification_time_absolute}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof TimeSpecification_time_absolute]: TimeSpecification_time_absolute[_K];
            }
        >
    ): TimeSpecification_time_absolute {
        return new TimeSpecification_time_absolute(
            _o.startTime,
            _o.endTime,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION TimeSpecification_time_absolute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TimeSpecification_time_absolute */
/**
 * @summary The Leading Root Component Types of TimeSpecification_time_absolute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TimeSpecification_time_absolute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "startTime",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "endTime",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TimeSpecification_time_absolute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TimeSpecification_time_absolute */
/**
 * @summary The Trailing Root Component Types of TimeSpecification_time_absolute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TimeSpecification_time_absolute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TimeSpecification_time_absolute */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TimeSpecification_time_absolute */
/**
 * @summary The Extension Addition Component Types of TimeSpecification_time_absolute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TimeSpecification_time_absolute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TimeSpecification_time_absolute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeSpecification_time_absolute */
let _cached_decoder_for_TimeSpecification_time_absolute: $.ASN1Decoder<
    TimeSpecification_time_absolute
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeSpecification_time_absolute */

/* START_OF_SYMBOL_DEFINITION _decode_TimeSpecification_time_absolute */
/**
 * @summary Decodes an ASN.1 element into a(n) TimeSpecification_time_absolute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeSpecification_time_absolute} The decoded data structure.
 */
export function _decode_TimeSpecification_time_absolute(el: _Element) {
    if (!_cached_decoder_for_TimeSpecification_time_absolute) {
        _cached_decoder_for_TimeSpecification_time_absolute = function (
            el: _Element
        ): TimeSpecification_time_absolute {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let startTime: OPTIONAL<GeneralizedTime>;
            let endTime: OPTIONAL<GeneralizedTime>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                startTime: (_el: _Element): void => {
                    startTime = $._decode_explicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                endTime: (_el: _Element): void => {
                    endTime = $._decode_explicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TimeSpecification_time_absolute,
                _extension_additions_list_spec_for_TimeSpecification_time_absolute,
                _root_component_type_list_2_spec_for_TimeSpecification_time_absolute,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TimeSpecification_time_absolute /* SEQUENCE_CONSTRUCTOR_CALL */(
                startTime,
                endTime,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TimeSpecification_time_absolute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TimeSpecification_time_absolute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeSpecification_time_absolute */
let _cached_encoder_for_TimeSpecification_time_absolute: $.ASN1Encoder<
    TimeSpecification_time_absolute
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeSpecification_time_absolute */

/* START_OF_SYMBOL_DEFINITION _encode_TimeSpecification_time_absolute */
/**
 * @summary Encodes a(n) TimeSpecification_time_absolute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeSpecification_time_absolute, encoded as an ASN.1 Element.
 */
export function _encode_TimeSpecification_time_absolute(
    value: TimeSpecification_time_absolute,
    elGetter: $.ASN1Encoder<TimeSpecification_time_absolute>
) {
    if (!_cached_encoder_for_TimeSpecification_time_absolute) {
        _cached_encoder_for_TimeSpecification_time_absolute = function (
            value: TimeSpecification_time_absolute,
            elGetter: $.ASN1Encoder<TimeSpecification_time_absolute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.startTime === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeGeneralizedTime,
                                      $.BER
                                  )(value.startTime, $.BER),
                            /* IF_ABSENT  */ value.endTime === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeGeneralizedTime,
                                      $.BER
                                  )(value.endTime, $.BER),
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
    return _cached_encoder_for_TimeSpecification_time_absolute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TimeSpecification_time_absolute */

/* eslint-enable */
