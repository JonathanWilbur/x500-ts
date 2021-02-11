/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DayTime,
    _decode_DayTime,
    _encode_DayTime,
} from "../SelectedAttributeTypes/DayTime.ta";
export {
    DayTime,
    _decode_DayTime,
    _encode_DayTime,
} from "../SelectedAttributeTypes/DayTime.ta";

/* START_OF_SYMBOL_DEFINITION DayTimeBand */
/**
 * @summary DayTimeBand
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DayTimeBand ::= SEQUENCE {
 *   startDayTime  [0]  DayTime DEFAULT {hour 0},
 *   endDayTime    [1]  DayTime DEFAULT {hour 23, minute 59, second 59},
 *   ... }
 * ```
 *
 * @class
 */
export class DayTimeBand {
    constructor(
        /**
         * @summary `startDayTime`.
         * @public
         * @readonly
         */
        readonly startDayTime: OPTIONAL<DayTime>,
        /**
         * @summary `endDayTime`.
         * @public
         * @readonly
         */
        readonly endDayTime: OPTIONAL<DayTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DayTimeBand
     * @description
     *
     * This takes an `object` and converts it to a `DayTimeBand`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DayTimeBand`.
     * @returns {DayTimeBand}
     */
    public static _from_object(
        _o: { [_K in keyof DayTimeBand]: DayTimeBand[_K] }
    ): DayTimeBand {
        return new DayTimeBand(
            _o.startDayTime,
            _o.endDayTime,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `startDayTime`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_startDayTime() {
        return DayTime._from_object({ hour: 0 });
    }
    /**
     * @summary Getter that returns the default value for `endDayTime`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_endDayTime() {
        return DayTime._from_object({ hour: 23, minute: 59, second: 59 });
    }
}
/* END_OF_SYMBOL_DEFINITION DayTimeBand */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DayTimeBand */
/**
 * @summary The Leading Root Component Types of DayTimeBand
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DayTimeBand: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "startDayTime",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "endDayTime",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DayTimeBand */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DayTimeBand */
/**
 * @summary The Trailing Root Component Types of DayTimeBand
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DayTimeBand: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DayTimeBand */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DayTimeBand */
/**
 * @summary The Extension Addition Component Types of DayTimeBand
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DayTimeBand: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DayTimeBand */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DayTimeBand */
let _cached_decoder_for_DayTimeBand: $.ASN1Decoder<DayTimeBand> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DayTimeBand */

/* START_OF_SYMBOL_DEFINITION _decode_DayTimeBand */
/**
 * @summary Decodes an ASN.1 element into a(n) DayTimeBand
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DayTimeBand} The decoded data structure.
 */
export function _decode_DayTimeBand(el: _Element) {
    if (!_cached_decoder_for_DayTimeBand) {
        _cached_decoder_for_DayTimeBand = function (el: _Element): DayTimeBand {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let startDayTime: OPTIONAL<DayTime> =
                DayTimeBand._default_value_for_startDayTime;
            let endDayTime: OPTIONAL<DayTime> =
                DayTimeBand._default_value_for_endDayTime;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                startDayTime: (_el: _Element): void => {
                    startDayTime = $._decode_explicit<DayTime>(
                        () => _decode_DayTime
                    )(_el);
                },
                endDayTime: (_el: _Element): void => {
                    endDayTime = $._decode_explicit<DayTime>(
                        () => _decode_DayTime
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DayTimeBand,
                _extension_additions_list_spec_for_DayTimeBand,
                _root_component_type_list_2_spec_for_DayTimeBand,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DayTimeBand(
                /* SEQUENCE_CONSTRUCTOR_CALL */ startDayTime,
                endDayTime,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DayTimeBand(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DayTimeBand */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DayTimeBand */
let _cached_encoder_for_DayTimeBand: $.ASN1Encoder<DayTimeBand> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DayTimeBand */

/* START_OF_SYMBOL_DEFINITION _encode_DayTimeBand */
/**
 * @summary Encodes a(n) DayTimeBand into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DayTimeBand, encoded as an ASN.1 Element.
 */
export function _encode_DayTimeBand(
    value: DayTimeBand,
    elGetter: $.ASN1Encoder<DayTimeBand>
) {
    if (!_cached_encoder_for_DayTimeBand) {
        _cached_encoder_for_DayTimeBand = function (
            value: DayTimeBand,
            elGetter: $.ASN1Encoder<DayTimeBand>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.startDayTime === undefined ||
                            $.deepEq(
                                value.startDayTime,
                                DayTimeBand._default_value_for_startDayTime
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_DayTime,
                                      $.BER
                                  )(value.startDayTime, $.BER),
                            /* IF_DEFAULT */ value.endDayTime === undefined ||
                            $.deepEq(
                                value.endDayTime,
                                DayTimeBand._default_value_for_endDayTime
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_DayTime,
                                      $.BER
                                  )(value.endDayTime, $.BER),
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
    return _cached_encoder_for_DayTimeBand(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DayTimeBand */

/* eslint-enable */
