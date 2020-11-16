/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Validity_validFrom,
    _decode_Validity_validFrom,
    _encode_Validity_validFrom,
} from "../OperationalBindingManagement/Validity-validFrom.ta";
import {
    Validity_validUntil,
    _decode_Validity_validUntil,
    _encode_Validity_validUntil,
} from "../OperationalBindingManagement/Validity-validUntil.ta";
export {
    Validity_validFrom,
    _decode_Validity_validFrom,
    _encode_Validity_validFrom,
} from "../OperationalBindingManagement/Validity-validFrom.ta";
export {
    Validity_validUntil,
    _decode_Validity_validUntil,
    _encode_Validity_validUntil,
} from "../OperationalBindingManagement/Validity-validUntil.ta";

/* START_OF_SYMBOL_DEFINITION Validity */
/**
 * @summary Validity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Validity ::= SEQUENCE {
 *   validFrom            [0]  CHOICE {
 *     now                  [0]  NULL,
 *     time                 [1]  Time,
 *     ...} DEFAULT now:NULL,
 *   validUntil           [1]  CHOICE {
 *     explicitTermination  [0]  NULL,
 *     time                 [1]  Time,
 *     ... } DEFAULT explicitTermination:NULL,
 *   ... }
 * ```
 *
 * @class
 */
export class Validity {
    constructor(
        /**
         * @summary `validFrom`.
         * @public
         * @readonly
         */
        readonly validFrom: OPTIONAL<Validity_validFrom>,
        /**
         * @summary `validUntil`.
         * @public
         * @readonly
         */
        readonly validUntil: OPTIONAL<Validity_validUntil>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Validity
     * @description
     *
     * This takes an `object` and converts it to a `Validity`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Validity`.
     * @returns {Validity}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Validity]: Validity[_K] }>
    ): Validity {
        return new Validity(
            _o.validFrom,
            _o.validUntil,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `validFrom`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_validFrom() {
        return { now: null };
    }
    /**
     * @summary Getter that returns the default value for `validUntil`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_validUntil() {
        return { explicitTermination: null };
    }
}
/* END_OF_SYMBOL_DEFINITION Validity */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Validity */
/**
 * @summary The Leading Root Component Types of Validity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Validity: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "validFrom",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "validUntil",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Validity */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Validity */
/**
 * @summary The Trailing Root Component Types of Validity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Validity: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Validity */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Validity */
/**
 * @summary The Extension Addition Component Types of Validity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Validity: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Validity */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Validity */
let _cached_decoder_for_Validity: $.ASN1Decoder<Validity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Validity */

/* START_OF_SYMBOL_DEFINITION _decode_Validity */
/**
 * @summary Decodes an ASN.1 element into a(n) Validity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Validity} The decoded data structure.
 */
export function _decode_Validity(el: _Element) {
    if (!_cached_decoder_for_Validity) {
        _cached_decoder_for_Validity = function (el: _Element): Validity {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let validFrom: OPTIONAL<Validity_validFrom> =
                Validity._default_value_for_validFrom;
            let validUntil: OPTIONAL<Validity_validUntil> =
                Validity._default_value_for_validUntil;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                validFrom: (_el: _Element): void => {
                    validFrom = $._decode_explicit<Validity_validFrom>(
                        () => _decode_Validity_validFrom
                    )(_el);
                },
                validUntil: (_el: _Element): void => {
                    validUntil = $._decode_explicit<Validity_validUntil>(
                        () => _decode_Validity_validUntil
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Validity,
                _extension_additions_list_spec_for_Validity,
                _root_component_type_list_2_spec_for_Validity,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Validity /* SEQUENCE_CONSTRUCTOR_CALL */(
                validFrom,
                validUntil,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Validity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Validity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Validity */
let _cached_encoder_for_Validity: $.ASN1Encoder<Validity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Validity */

/* START_OF_SYMBOL_DEFINITION _encode_Validity */
/**
 * @summary Encodes a(n) Validity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Validity, encoded as an ASN.1 Element.
 */
export function _encode_Validity(
    value: Validity,
    elGetter: $.ASN1Encoder<Validity>
) {
    if (!_cached_encoder_for_Validity) {
        _cached_encoder_for_Validity = function (
            value: Validity,
            elGetter: $.ASN1Encoder<Validity>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.validFrom === undefined ||
                            $.deepEq(
                                value.validFrom,
                                Validity._default_value_for_validFrom
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Validity_validFrom,
                                      $.BER
                                  )(value.validFrom, $.BER),
                            /* IF_DEFAULT */ value.validUntil === undefined ||
                            $.deepEq(
                                value.validUntil,
                                Validity._default_value_for_validUntil
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Validity_validUntil,
                                      $.BER
                                  )(value.validUntil, $.BER),
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
    return _cached_encoder_for_Validity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Validity */

/* eslint-enable */
