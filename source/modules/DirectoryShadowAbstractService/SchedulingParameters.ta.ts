/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PeriodicStrategy,
    _decode_PeriodicStrategy,
    _encode_PeriodicStrategy,
} from "../DirectoryShadowAbstractService/PeriodicStrategy.ta";
export {
    PeriodicStrategy,
    _decode_PeriodicStrategy,
    _encode_PeriodicStrategy,
} from "../DirectoryShadowAbstractService/PeriodicStrategy.ta";

/* START_OF_SYMBOL_DEFINITION SchedulingParameters */
/**
 * @summary SchedulingParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchedulingParameters ::= SEQUENCE {
 *   periodic    PeriodicStrategy OPTIONAL, -- shall be present if othertimes
 *   --                                        is set to FALSE
 *   othertimes  BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 * @class
 */
export class SchedulingParameters {
    constructor(
        /**
         * @summary `periodic`.
         * @public
         * @readonly
         */
        readonly periodic: OPTIONAL<PeriodicStrategy>,
        /**
         * @summary `othertimes`.
         * @public
         * @readonly
         */
        readonly othertimes: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SchedulingParameters
     * @description
     *
     * This takes an `object` and converts it to a `SchedulingParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SchedulingParameters`.
     * @returns {SchedulingParameters}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SchedulingParameters]: SchedulingParameters[_K] }
        >
    ): SchedulingParameters {
        return new SchedulingParameters(
            _o.periodic,
            _o.othertimes,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `othertimes`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_othertimes() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION SchedulingParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SchedulingParameters */
/**
 * @summary The Leading Root Component Types of SchedulingParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SchedulingParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "periodic",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "othertimes",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SchedulingParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SchedulingParameters */
/**
 * @summary The Trailing Root Component Types of SchedulingParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SchedulingParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SchedulingParameters */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SchedulingParameters */
/**
 * @summary The Extension Addition Component Types of SchedulingParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SchedulingParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SchedulingParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SchedulingParameters */
let _cached_decoder_for_SchedulingParameters: $.ASN1Decoder<
    SchedulingParameters
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SchedulingParameters */

/* START_OF_SYMBOL_DEFINITION _decode_SchedulingParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) SchedulingParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SchedulingParameters} The decoded data structure.
 */
export function _decode_SchedulingParameters(el: _Element) {
    if (!_cached_decoder_for_SchedulingParameters) {
        _cached_decoder_for_SchedulingParameters = function (
            el: _Element
        ): SchedulingParameters {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let periodic: OPTIONAL<PeriodicStrategy>;
            let othertimes: OPTIONAL<BOOLEAN> =
                SchedulingParameters._default_value_for_othertimes;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                periodic: (_el: _Element): void => {
                    periodic = _decode_PeriodicStrategy(_el);
                },
                othertimes: (_el: _Element): void => {
                    othertimes = $._decodeBoolean(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SchedulingParameters,
                _extension_additions_list_spec_for_SchedulingParameters,
                _root_component_type_list_2_spec_for_SchedulingParameters,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SchedulingParameters /* SEQUENCE_CONSTRUCTOR_CALL */(
                periodic,
                othertimes,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SchedulingParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SchedulingParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SchedulingParameters */
let _cached_encoder_for_SchedulingParameters: $.ASN1Encoder<
    SchedulingParameters
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SchedulingParameters */

/* START_OF_SYMBOL_DEFINITION _encode_SchedulingParameters */
/**
 * @summary Encodes a(n) SchedulingParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchedulingParameters, encoded as an ASN.1 Element.
 */
export function _encode_SchedulingParameters(
    value: SchedulingParameters,
    elGetter: $.ASN1Encoder<SchedulingParameters>
) {
    if (!_cached_encoder_for_SchedulingParameters) {
        _cached_encoder_for_SchedulingParameters = function (
            value: SchedulingParameters,
            elGetter: $.ASN1Encoder<SchedulingParameters>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.periodic === undefined
                                ? undefined
                                : _encode_PeriodicStrategy(
                                      value.periodic,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.othertimes === undefined ||
                            $.deepEq(
                                value.othertimes,
                                SchedulingParameters._default_value_for_othertimes
                            )
                                ? undefined
                                : $._encodeBoolean(value.othertimes, $.BER),
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
    return _cached_encoder_for_SchedulingParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SchedulingParameters */

/* eslint-enable */
