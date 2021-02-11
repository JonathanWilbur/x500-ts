/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ModifiedValidity_validFrom,
    _decode_ModifiedValidity_validFrom,
    _encode_ModifiedValidity_validFrom,
} from "../OperationalBindingManagement/ModifiedValidity-validFrom.ta";
import {
    ModifiedValidity_validUntil,
    _decode_ModifiedValidity_validUntil,
    _encode_ModifiedValidity_validUntil,
} from "../OperationalBindingManagement/ModifiedValidity-validUntil.ta";
export {
    ModifiedValidity_validFrom,
    _decode_ModifiedValidity_validFrom,
    _encode_ModifiedValidity_validFrom,
} from "../OperationalBindingManagement/ModifiedValidity-validFrom.ta";
export {
    ModifiedValidity_validUntil,
    _decode_ModifiedValidity_validUntil,
    _encode_ModifiedValidity_validUntil,
} from "../OperationalBindingManagement/ModifiedValidity-validUntil.ta";

/* START_OF_SYMBOL_DEFINITION ModifiedValidity */
/**
 * @summary ModifiedValidity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifiedValidity ::= SEQUENCE {
 *   validFrom            [0]  CHOICE {
 *     now                  [0]  NULL,
 *     time                 [1]  Time,
 *     ...} DEFAULT now:NULL,
 *   validUntil           [1]  CHOICE {
 *     explicitTermination  [0]  NULL,
 *     time                 [1]  Time,
 *     unchanged            [2]  NULL,
 *     ... } DEFAULT unchanged:NULL,
 *   ... }
 * ```
 *
 * @class
 */
export class ModifiedValidity {
    constructor(
        /**
         * @summary `validFrom`.
         * @public
         * @readonly
         */
        readonly validFrom: OPTIONAL<ModifiedValidity_validFrom>,
        /**
         * @summary `validUntil`.
         * @public
         * @readonly
         */
        readonly validUntil: OPTIONAL<ModifiedValidity_validUntil>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModifiedValidity
     * @description
     *
     * This takes an `object` and converts it to a `ModifiedValidity`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifiedValidity`.
     * @returns {ModifiedValidity}
     */
    public static _from_object(
        _o: { [_K in keyof ModifiedValidity]: ModifiedValidity[_K] }
    ): ModifiedValidity {
        return new ModifiedValidity(
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
        return { unchanged: null };
    }
}
/* END_OF_SYMBOL_DEFINITION ModifiedValidity */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModifiedValidity */
/**
 * @summary The Leading Root Component Types of ModifiedValidity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifiedValidity: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModifiedValidity */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModifiedValidity */
/**
 * @summary The Trailing Root Component Types of ModifiedValidity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifiedValidity: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModifiedValidity */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModifiedValidity */
/**
 * @summary The Extension Addition Component Types of ModifiedValidity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifiedValidity: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModifiedValidity */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifiedValidity */
let _cached_decoder_for_ModifiedValidity: $.ASN1Decoder<ModifiedValidity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifiedValidity */

/* START_OF_SYMBOL_DEFINITION _decode_ModifiedValidity */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifiedValidity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifiedValidity} The decoded data structure.
 */
export function _decode_ModifiedValidity(el: _Element) {
    if (!_cached_decoder_for_ModifiedValidity) {
        _cached_decoder_for_ModifiedValidity = function (
            el: _Element
        ): ModifiedValidity {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let validFrom: OPTIONAL<ModifiedValidity_validFrom> =
                ModifiedValidity._default_value_for_validFrom;
            let validUntil: OPTIONAL<ModifiedValidity_validUntil> =
                ModifiedValidity._default_value_for_validUntil;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                validFrom: (_el: _Element): void => {
                    validFrom = $._decode_explicit<ModifiedValidity_validFrom>(
                        () => _decode_ModifiedValidity_validFrom
                    )(_el);
                },
                validUntil: (_el: _Element): void => {
                    validUntil = $._decode_explicit<ModifiedValidity_validUntil>(
                        () => _decode_ModifiedValidity_validUntil
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ModifiedValidity,
                _extension_additions_list_spec_for_ModifiedValidity,
                _root_component_type_list_2_spec_for_ModifiedValidity,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ModifiedValidity(
                /* SEQUENCE_CONSTRUCTOR_CALL */ validFrom,
                validUntil,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ModifiedValidity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifiedValidity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifiedValidity */
let _cached_encoder_for_ModifiedValidity: $.ASN1Encoder<ModifiedValidity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifiedValidity */

/* START_OF_SYMBOL_DEFINITION _encode_ModifiedValidity */
/**
 * @summary Encodes a(n) ModifiedValidity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifiedValidity, encoded as an ASN.1 Element.
 */
export function _encode_ModifiedValidity(
    value: ModifiedValidity,
    elGetter: $.ASN1Encoder<ModifiedValidity>
) {
    if (!_cached_encoder_for_ModifiedValidity) {
        _cached_encoder_for_ModifiedValidity = function (
            value: ModifiedValidity,
            elGetter: $.ASN1Encoder<ModifiedValidity>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.validFrom === undefined ||
                            $.deepEq(
                                value.validFrom,
                                ModifiedValidity._default_value_for_validFrom
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_ModifiedValidity_validFrom,
                                      $.BER
                                  )(value.validFrom, $.BER),
                            /* IF_DEFAULT */ value.validUntil === undefined ||
                            $.deepEq(
                                value.validUntil,
                                ModifiedValidity._default_value_for_validUntil
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_ModifiedValidity_validUntil,
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
    return _cached_encoder_for_ModifiedValidity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifiedValidity */

/* eslint-enable */
