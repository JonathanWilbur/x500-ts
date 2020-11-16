/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { ALGORITHM } from "../PKI_Stub/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION AlgorithmWithInvoke */
/**
 * @summary AlgorithmWithInvoke
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgorithmWithInvoke{ALGORITHM:SupportedAlgorithms} ::= SEQUENCE {
 *   algorithm       ALGORITHM.&id({SupportedAlgorithms}),
 *   parameters  [0] ALGORITHM.&Type({SupportedAlgorithms}{@algorithm}) OPTIONAL,
 *   dynamParms  [1] ALGORITHM.&DynParms({SupportedAlgorithms}{@algorithm}) OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class AlgorithmWithInvoke {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: OBJECT_IDENTIFIER,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<_Element>,
        /**
         * @summary `dynamParms`.
         * @public
         * @readonly
         */
        readonly dynamParms: OPTIONAL<_Element>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AlgorithmWithInvoke
     * @description
     *
     * This takes an `object` and converts it to a `AlgorithmWithInvoke`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlgorithmWithInvoke`.
     * @returns {AlgorithmWithInvoke}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof AlgorithmWithInvoke]: AlgorithmWithInvoke[_K] }
        >
    ): AlgorithmWithInvoke {
        return new AlgorithmWithInvoke(
            _o.algorithm,
            _o.parameters,
            _o.dynamParms,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AlgorithmWithInvoke */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AlgorithmWithInvoke */
/**
 * @summary The Leading Root Component Types of AlgorithmWithInvoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AlgorithmWithInvoke: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "parameters",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "dynamParms",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AlgorithmWithInvoke */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AlgorithmWithInvoke */
/**
 * @summary The Trailing Root Component Types of AlgorithmWithInvoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AlgorithmWithInvoke: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AlgorithmWithInvoke */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AlgorithmWithInvoke */
/**
 * @summary The Extension Addition Component Types of AlgorithmWithInvoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AlgorithmWithInvoke: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AlgorithmWithInvoke */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlgorithmWithInvoke */
let _cached_decoder_for_AlgorithmWithInvoke: $.ASN1Decoder<
    AlgorithmWithInvoke
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlgorithmWithInvoke */

/* START_OF_SYMBOL_DEFINITION _decode_AlgorithmWithInvoke */
/**
 * @summary Decodes an ASN.1 element into a(n) AlgorithmWithInvoke
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlgorithmWithInvoke} The decoded data structure.
 */
export function _decode_AlgorithmWithInvoke(el: _Element) {
    if (!_cached_decoder_for_AlgorithmWithInvoke) {
        _cached_decoder_for_AlgorithmWithInvoke = function (
            el: _Element
        ): AlgorithmWithInvoke {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let algorithm!: OBJECT_IDENTIFIER;
            let parameters: OPTIONAL<_Element>;
            let dynamParms: OPTIONAL<_Element>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                algorithm: (_el: _Element): void => {
                    algorithm = $._decodeObjectIdentifier(_el);
                },
                parameters: (_el: _Element): void => {
                    parameters = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
                dynamParms: (_el: _Element): void => {
                    dynamParms = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AlgorithmWithInvoke,
                _extension_additions_list_spec_for_AlgorithmWithInvoke,
                _root_component_type_list_2_spec_for_AlgorithmWithInvoke,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AlgorithmWithInvoke /* SEQUENCE_CONSTRUCTOR_CALL */(
                algorithm,
                parameters,
                dynamParms,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AlgorithmWithInvoke(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlgorithmWithInvoke */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlgorithmWithInvoke */
let _cached_encoder_for_AlgorithmWithInvoke: $.ASN1Encoder<
    AlgorithmWithInvoke
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlgorithmWithInvoke */

/* START_OF_SYMBOL_DEFINITION _encode_AlgorithmWithInvoke */
/**
 * @summary Encodes a(n) AlgorithmWithInvoke into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlgorithmWithInvoke, encoded as an ASN.1 Element.
 */
export function _encode_AlgorithmWithInvoke(
    value: AlgorithmWithInvoke,
    elGetter: $.ASN1Encoder<AlgorithmWithInvoke>
) {
    if (!_cached_encoder_for_AlgorithmWithInvoke) {
        _cached_encoder_for_AlgorithmWithInvoke = function (
            value: AlgorithmWithInvoke,
            elGetter: $.ASN1Encoder<AlgorithmWithInvoke>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.algorithm,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.parameters === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeAny,
                                      $.BER
                                  )(value.parameters, $.BER),
                            /* IF_ABSENT  */ value.dynamParms === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeAny,
                                      $.BER
                                  )(value.dynamParms, $.BER),
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
    return _cached_encoder_for_AlgorithmWithInvoke(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlgorithmWithInvoke */

/* eslint-enable */
