/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    NameProblem,
    _decode_NameProblem,
    _encode_NameProblem,
} from "../DirectoryAbstractService/NameProblem.ta";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
export {
    CommonResults,
    _decode_CommonResults,
    _encode_CommonResults,
} from "../DirectoryAbstractService/CommonResults.ta";
export {
    aliasDereferencingProblem /* IMPORTED_SHORT_NAMED_INTEGER */,
    aliasProblem /* IMPORTED_SHORT_NAMED_INTEGER */,
    invalidAttributeSyntax /* IMPORTED_SHORT_NAMED_INTEGER */,
    NameProblem,
    NameProblem_aliasDereferencingProblem /* IMPORTED_LONG_NAMED_INTEGER */,
    NameProblem_aliasProblem /* IMPORTED_LONG_NAMED_INTEGER */,
    NameProblem_invalidAttributeSyntax /* IMPORTED_LONG_NAMED_INTEGER */,
    NameProblem_noSuchObject /* IMPORTED_LONG_NAMED_INTEGER */,
    noSuchObject /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_NameProblem,
    _encode_NameProblem,
} from "../DirectoryAbstractService/NameProblem.ta";
export {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";

/* START_OF_SYMBOL_DEFINITION NameErrorData */
/**
 * @summary NameErrorData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameErrorData ::= SET {
 *   problem  [0]  NameProblem,
 *   matched  [1]  Name,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResults }
 * ```
 *
 * @class
 */
export class NameErrorData {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: NameProblem,
        /**
         * @summary `matched`.
         * @public
         * @readonly
         */
        readonly matched: Name,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<SecurityParameters> /* REPLICATED_COMPONENT */,
        /**
         * @summary `performer`.
         * @public
         * @readonly
         */
        readonly performer: OPTIONAL<DistinguishedName> /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a NameErrorData
     * @description
     *
     * This takes an `object` and converts it to a `NameErrorData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NameErrorData`.
     * @returns {NameErrorData}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof NameErrorData]: NameErrorData[_K] }>
    ): NameErrorData {
        return new NameErrorData(
            _o.problem,
            _o.matched,
            _o._unrecognizedExtensionsList,
            _o.securityParameters,
            _o.performer,
            _o.aliasDereferenced,
            _o.notification
        );
    }

    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION NameErrorData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NameErrorData */
/**
 * @summary The Leading Root Component Types of NameErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NameErrorData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "problem",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "matched",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NameErrorData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NameErrorData */
/**
 * @summary The Trailing Root Component Types of NameErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NameErrorData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "performer",
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasDereferenced",
        true,
        $.hasTag(_TagClass.context, 28),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "notification",
        true,
        $.hasTag(_TagClass.context, 27),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NameErrorData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NameErrorData */
/**
 * @summary The Extension Addition Component Types of NameErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NameErrorData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NameErrorData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NameErrorData */
let _cached_decoder_for_NameErrorData: $.ASN1Decoder<NameErrorData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NameErrorData */

/* START_OF_SYMBOL_DEFINITION _decode_NameErrorData */
/**
 * @summary Decodes an ASN.1 element into a(n) NameErrorData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameErrorData} The decoded data structure.
 */
export function _decode_NameErrorData(el: _Element) {
    if (!_cached_decoder_for_NameErrorData) {
        _cached_decoder_for_NameErrorData = function (
            el: _Element
        ): NameErrorData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: NameProblem;
            let matched!: Name;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                NameErrorData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<NameProblem>(
                        () => _decode_NameProblem
                    )(_el);
                },
                matched: (_el: _Element): void => {
                    matched = $._decode_explicit<Name>(() => _decode_Name)(_el);
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
                performer: (_el: _Element): void => {
                    performer = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: _Element): void => {
                    aliasDereferenced = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                notification: (_el: _Element): void => {
                    notification = $._decode_explicit<Attribute[]>(() =>
                        $._decodeSequenceOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NameErrorData,
                _extension_additions_list_spec_for_NameErrorData,
                _root_component_type_list_2_spec_for_NameErrorData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new NameErrorData(
                /* SET_CONSTRUCTOR_CALL */ problem,
                matched,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_NameErrorData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NameErrorData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NameErrorData */
let _cached_encoder_for_NameErrorData: $.ASN1Encoder<NameErrorData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NameErrorData */

/* START_OF_SYMBOL_DEFINITION _encode_NameErrorData */
/**
 * @summary Encodes a(n) NameErrorData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameErrorData, encoded as an ASN.1 Element.
 */
export function _encode_NameErrorData(
    value: NameErrorData,
    elGetter: $.ASN1Encoder<NameErrorData>
) {
    if (!_cached_encoder_for_NameErrorData) {
        _cached_encoder_for_NameErrorData = function (
            value: NameErrorData,
            elGetter: $.ASN1Encoder<NameErrorData>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_NameProblem,
                                $.BER
                            )(value.problem, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_Name,
                                $.BER
                            )(value.matched, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      $.BER
                                  )(value.securityParameters, $.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.performer, $.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            $.deepEq(
                                value.aliasDereferenced,
                                NameErrorData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      28,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.aliasDereferenced, $.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      27,
                                      () =>
                                          $._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.notification, $.BER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NameErrorData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NameErrorData */

/* eslint-enable */
