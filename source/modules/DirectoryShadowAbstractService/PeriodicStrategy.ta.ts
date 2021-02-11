/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../DirectoryShadowAbstractService/Time.ta";
export {
    Time,
    _decode_Time,
    _encode_Time,
} from "../DirectoryShadowAbstractService/Time.ta";

/* START_OF_SYMBOL_DEFINITION PeriodicStrategy */
/**
 * @summary PeriodicStrategy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PeriodicStrategy ::= SEQUENCE {
 *   beginTime       Time OPTIONAL,
 *   windowSize      INTEGER,
 *   updateInterval  INTEGER,
 *   ... }
 * ```
 *
 * @class
 */
export class PeriodicStrategy {
    constructor(
        /**
         * @summary `beginTime`.
         * @public
         * @readonly
         */
        readonly beginTime: OPTIONAL<Time>,
        /**
         * @summary `windowSize`.
         * @public
         * @readonly
         */
        readonly windowSize: INTEGER,
        /**
         * @summary `updateInterval`.
         * @public
         * @readonly
         */
        readonly updateInterval: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PeriodicStrategy
     * @description
     *
     * This takes an `object` and converts it to a `PeriodicStrategy`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PeriodicStrategy`.
     * @returns {PeriodicStrategy}
     */
    public static _from_object(
        _o: { [_K in keyof PeriodicStrategy]: PeriodicStrategy[_K] }
    ): PeriodicStrategy {
        return new PeriodicStrategy(
            _o.beginTime,
            _o.windowSize,
            _o.updateInterval,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PeriodicStrategy */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PeriodicStrategy */
/**
 * @summary The Leading Root Component Types of PeriodicStrategy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PeriodicStrategy: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "beginTime",
        true,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "windowSize",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "updateInterval",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PeriodicStrategy */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PeriodicStrategy */
/**
 * @summary The Trailing Root Component Types of PeriodicStrategy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PeriodicStrategy: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PeriodicStrategy */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PeriodicStrategy */
/**
 * @summary The Extension Addition Component Types of PeriodicStrategy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PeriodicStrategy: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PeriodicStrategy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PeriodicStrategy */
let _cached_decoder_for_PeriodicStrategy: $.ASN1Decoder<PeriodicStrategy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PeriodicStrategy */

/* START_OF_SYMBOL_DEFINITION _decode_PeriodicStrategy */
/**
 * @summary Decodes an ASN.1 element into a(n) PeriodicStrategy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PeriodicStrategy} The decoded data structure.
 */
export function _decode_PeriodicStrategy(el: _Element) {
    if (!_cached_decoder_for_PeriodicStrategy) {
        _cached_decoder_for_PeriodicStrategy = function (
            el: _Element
        ): PeriodicStrategy {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let beginTime: OPTIONAL<Time>;
            let windowSize!: INTEGER;
            let updateInterval!: INTEGER;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                beginTime: (_el: _Element): void => {
                    beginTime = _decode_Time(_el);
                },
                windowSize: (_el: _Element): void => {
                    windowSize = $._decodeInteger(_el);
                },
                updateInterval: (_el: _Element): void => {
                    updateInterval = $._decodeInteger(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PeriodicStrategy,
                _extension_additions_list_spec_for_PeriodicStrategy,
                _root_component_type_list_2_spec_for_PeriodicStrategy,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PeriodicStrategy(
                /* SEQUENCE_CONSTRUCTOR_CALL */ beginTime,
                windowSize,
                updateInterval,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PeriodicStrategy(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PeriodicStrategy */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PeriodicStrategy */
let _cached_encoder_for_PeriodicStrategy: $.ASN1Encoder<PeriodicStrategy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PeriodicStrategy */

/* START_OF_SYMBOL_DEFINITION _encode_PeriodicStrategy */
/**
 * @summary Encodes a(n) PeriodicStrategy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeriodicStrategy, encoded as an ASN.1 Element.
 */
export function _encode_PeriodicStrategy(
    value: PeriodicStrategy,
    elGetter: $.ASN1Encoder<PeriodicStrategy>
) {
    if (!_cached_encoder_for_PeriodicStrategy) {
        _cached_encoder_for_PeriodicStrategy = function (
            value: PeriodicStrategy,
            elGetter: $.ASN1Encoder<PeriodicStrategy>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.beginTime === undefined
                                ? undefined
                                : _encode_Time(value.beginTime, $.BER),
                            /* REQUIRED   */ $._encodeInteger(
                                value.windowSize,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeInteger(
                                value.updateInterval,
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
    return _cached_encoder_for_PeriodicStrategy(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PeriodicStrategy */

/* eslint-enable */
