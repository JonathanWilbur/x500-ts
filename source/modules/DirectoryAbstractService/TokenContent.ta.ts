/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../DirectoryAbstractService/Time.ta";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";
export {
    Time,
    _decode_Time,
    _encode_Time,
} from "../DirectoryAbstractService/Time.ta";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";

/* START_OF_SYMBOL_DEFINITION TokenContent */
/**
 * @summary TokenContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TokenContent ::= SEQUENCE {
 *   algorithm  [0]  AlgorithmIdentifier{{SupportedAlgorithms}},
 *   name       [1]  DistinguishedName,
 *   time       [2]  Time,
 *   random     [3]  BIT STRING,
 *   response   [4]  BIT STRING OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class TokenContent {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: AlgorithmIdentifier,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: DistinguishedName,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: Time,
        /**
         * @summary `random`.
         * @public
         * @readonly
         */
        readonly random: BIT_STRING,
        /**
         * @summary `response`.
         * @public
         * @readonly
         */
        readonly response: OPTIONAL<BIT_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TokenContent
     * @description
     *
     * This takes an `object` and converts it to a `TokenContent`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TokenContent`.
     * @returns {TokenContent}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TokenContent]: TokenContent[_K] }>
    ): TokenContent {
        return new TokenContent(
            _o.algorithm,
            _o.name,
            _o.time,
            _o.random,
            _o.response,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION TokenContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TokenContent */
/**
 * @summary The Leading Root Component Types of TokenContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TokenContent: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "random",
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "response",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TokenContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TokenContent */
/**
 * @summary The Trailing Root Component Types of TokenContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TokenContent: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TokenContent */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TokenContent */
/**
 * @summary The Extension Addition Component Types of TokenContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TokenContent: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TokenContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TokenContent */
let _cached_decoder_for_TokenContent: $.ASN1Decoder<TokenContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TokenContent */

/* START_OF_SYMBOL_DEFINITION _decode_TokenContent */
/**
 * @summary Decodes an ASN.1 element into a(n) TokenContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TokenContent} The decoded data structure.
 */
export function _decode_TokenContent(el: _Element) {
    if (!_cached_decoder_for_TokenContent) {
        _cached_decoder_for_TokenContent = function (
            el: _Element
        ): TokenContent {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let algorithm!: AlgorithmIdentifier;
            let name!: DistinguishedName;
            let time!: Time;
            let random!: BIT_STRING;
            let response: OPTIONAL<BIT_STRING>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                algorithm: (_el: _Element): void => {
                    algorithm = $._decode_explicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                time: (_el: _Element): void => {
                    time = $._decode_explicit<Time>(() => _decode_Time)(_el);
                },
                random: (_el: _Element): void => {
                    random = $._decode_explicit<BIT_STRING>(
                        () => $._decodeBitString
                    )(_el);
                },
                response: (_el: _Element): void => {
                    response = $._decode_explicit<BIT_STRING>(
                        () => $._decodeBitString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TokenContent,
                _extension_additions_list_spec_for_TokenContent,
                _root_component_type_list_2_spec_for_TokenContent,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TokenContent /* SEQUENCE_CONSTRUCTOR_CALL */(
                algorithm,
                name,
                time,
                random,
                response,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TokenContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TokenContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TokenContent */
let _cached_encoder_for_TokenContent: $.ASN1Encoder<TokenContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TokenContent */

/* START_OF_SYMBOL_DEFINITION _encode_TokenContent */
/**
 * @summary Encodes a(n) TokenContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TokenContent, encoded as an ASN.1 Element.
 */
export function _encode_TokenContent(
    value: TokenContent,
    elGetter: $.ASN1Encoder<TokenContent>
) {
    if (!_cached_encoder_for_TokenContent) {
        _cached_encoder_for_TokenContent = function (
            value: TokenContent,
            elGetter: $.ASN1Encoder<TokenContent>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_AlgorithmIdentifier,
                                $.BER
                            )(value.algorithm, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_DistinguishedName,
                                $.BER
                            )(value.name, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => _encode_Time,
                                $.BER
                            )(value.time, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                3,
                                () => $._encodeBitString,
                                $.BER
                            )(value.random, $.BER),
                            /* IF_ABSENT  */ value.response === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeBitString,
                                      $.BER
                                  )(value.response, $.BER),
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
    return _cached_encoder_for_TokenContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TokenContent */

/* eslint-enable */
