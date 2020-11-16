/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION rSASSA_PSS_Type */
/**
 * @summary rSASSA_PSS_Type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rSASSA-PSS-Type ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class rSASSA_PSS_Type {
    constructor(
        /**
         * @summary `hashAlgorithm`.
         * @public
         * @readonly
         */
        readonly hashAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `saltLength`.
         * @public
         * @readonly
         */
        readonly saltLength: OPTIONAL<INTEGER>,
        /**
         * @summary `trailerField`.
         * @public
         * @readonly
         */
        readonly trailerField: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a rSASSA_PSS_Type
     * @description
     *
     * This takes an `object` and converts it to a `rSASSA_PSS_Type`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `rSASSA_PSS_Type`.
     * @returns {rSASSA_PSS_Type}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof rSASSA_PSS_Type]: rSASSA_PSS_Type[_K] }>
    ): rSASSA_PSS_Type {
        return new rSASSA_PSS_Type(
            _o.hashAlgorithm,
            _o.saltLength,
            _o.trailerField
        );
    }

    /**
     * @summary Getter that returns the default value for `saltLength`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_saltLength() {
        return 20;
    }
    /**
     * @summary Getter that returns the default value for `trailerField`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_trailerField() {
        return 1;
    }
}
/* END_OF_SYMBOL_DEFINITION rSASSA_PSS_Type */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_rSASSA_PSS_Type */
/**
 * @summary The Leading Root Component Types of rSASSA_PSS_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_rSASSA_PSS_Type: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "hashAlgorithm",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "saltLength",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "trailerField",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_rSASSA_PSS_Type */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_rSASSA_PSS_Type */
/**
 * @summary The Trailing Root Component Types of rSASSA_PSS_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_rSASSA_PSS_Type: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_rSASSA_PSS_Type */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_rSASSA_PSS_Type */
/**
 * @summary The Extension Addition Component Types of rSASSA_PSS_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_rSASSA_PSS_Type: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_rSASSA_PSS_Type */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_rSASSA_PSS_Type */
let _cached_decoder_for_rSASSA_PSS_Type: $.ASN1Decoder<
    rSASSA_PSS_Type
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_rSASSA_PSS_Type */

/* START_OF_SYMBOL_DEFINITION _decode_rSASSA_PSS_Type */
/**
 * @summary Decodes an ASN.1 element into a(n) rSASSA_PSS_Type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {rSASSA_PSS_Type} The decoded data structure.
 */
export function _decode_rSASSA_PSS_Type(el: _Element) {
    if (!_cached_decoder_for_rSASSA_PSS_Type) {
        _cached_decoder_for_rSASSA_PSS_Type = function (
            el: _Element
        ): rSASSA_PSS_Type {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let hashAlgorithm!: AlgorithmIdentifier;
            let saltLength: OPTIONAL<INTEGER> =
                rSASSA_PSS_Type._default_value_for_saltLength;
            let trailerField: OPTIONAL<INTEGER> =
                rSASSA_PSS_Type._default_value_for_trailerField;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                hashAlgorithm: (_el: _Element): void => {
                    hashAlgorithm = $._decode_explicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                saltLength: (_el: _Element): void => {
                    saltLength = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                trailerField: (_el: _Element): void => {
                    trailerField = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_rSASSA_PSS_Type,
                _extension_additions_list_spec_for_rSASSA_PSS_Type,
                _root_component_type_list_2_spec_for_rSASSA_PSS_Type,
                undefined
            );
            return new rSASSA_PSS_Type /* SEQUENCE_CONSTRUCTOR_CALL */(
                hashAlgorithm,
                saltLength,
                trailerField
            );
        };
    }
    return _cached_decoder_for_rSASSA_PSS_Type(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_rSASSA_PSS_Type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_rSASSA_PSS_Type */
let _cached_encoder_for_rSASSA_PSS_Type: $.ASN1Encoder<
    rSASSA_PSS_Type
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_rSASSA_PSS_Type */

/* START_OF_SYMBOL_DEFINITION _encode_rSASSA_PSS_Type */
/**
 * @summary Encodes a(n) rSASSA_PSS_Type into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The rSASSA_PSS_Type, encoded as an ASN.1 Element.
 */
export function _encode_rSASSA_PSS_Type(
    value: rSASSA_PSS_Type,
    elGetter: $.ASN1Encoder<rSASSA_PSS_Type>
) {
    if (!_cached_encoder_for_rSASSA_PSS_Type) {
        _cached_encoder_for_rSASSA_PSS_Type = function (
            value: rSASSA_PSS_Type,
            elGetter: $.ASN1Encoder<rSASSA_PSS_Type>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_AlgorithmIdentifier,
                            $.BER
                        )(value.hashAlgorithm, $.BER),
                        /* IF_DEFAULT */ value.saltLength === undefined ||
                        $.deepEq(
                            value.saltLength,
                            rSASSA_PSS_Type._default_value_for_saltLength
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.saltLength, $.BER),
                        /* IF_DEFAULT */ value.trailerField === undefined ||
                        $.deepEq(
                            value.trailerField,
                            rSASSA_PSS_Type._default_value_for_trailerField
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.trailerField, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_rSASSA_PSS_Type(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_rSASSA_PSS_Type */

/* eslint-enable */
