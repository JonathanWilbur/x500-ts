/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
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
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
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
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
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

/* START_OF_SYMBOL_DEFINITION CompareResultData */
/**
 * @summary CompareResultData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CompareResultData ::= SET {
 *   name                 Name OPTIONAL,
 *   matched         [0]  BOOLEAN,
 *   fromEntry       [1]  BOOLEAN DEFAULT TRUE,
 *   matchedSubtype  [2]  AttributeType OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF        CommonResults }
 * ```
 *
 * @class
 */
export class CompareResultData {
    constructor(
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<Name>,
        /**
         * @summary `matched`.
         * @public
         * @readonly
         */
        readonly matched: BOOLEAN,
        /**
         * @summary `fromEntry`.
         * @public
         * @readonly
         */
        readonly fromEntry: OPTIONAL<BOOLEAN>,
        /**
         * @summary `matchedSubtype`.
         * @public
         * @readonly
         */
        readonly matchedSubtype: OPTIONAL<AttributeType>,
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
     * @summary Restructures an object into a CompareResultData
     * @description
     *
     * This takes an `object` and converts it to a `CompareResultData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompareResultData`.
     * @returns {CompareResultData}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CompareResultData]: CompareResultData[_K] }>
    ): CompareResultData {
        return new CompareResultData(
            _o.name,
            _o.matched,
            _o.fromEntry,
            _o.matchedSubtype,
            _o._unrecognizedExtensionsList,
            _o.securityParameters,
            _o.performer,
            _o.aliasDereferenced,
            _o.notification
        );
    }

    /**
     * @summary Getter that returns the default value for `fromEntry`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_fromEntry() {
        return false;
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
/* END_OF_SYMBOL_DEFINITION CompareResultData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CompareResultData */
/**
 * @summary The Leading Root Component Types of CompareResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CompareResultData: $.ComponentSpec[] = [
    new $.ComponentSpec("name", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "matched",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "fromEntry",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "matchedSubtype",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CompareResultData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CompareResultData */
/**
 * @summary The Trailing Root Component Types of CompareResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CompareResultData: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CompareResultData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CompareResultData */
/**
 * @summary The Extension Addition Component Types of CompareResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CompareResultData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CompareResultData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CompareResultData */
let _cached_decoder_for_CompareResultData: $.ASN1Decoder<CompareResultData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CompareResultData */

/* START_OF_SYMBOL_DEFINITION _decode_CompareResultData */
/**
 * @summary Decodes an ASN.1 element into a(n) CompareResultData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CompareResultData} The decoded data structure.
 */
export function _decode_CompareResultData(el: _Element) {
    if (!_cached_decoder_for_CompareResultData) {
        _cached_decoder_for_CompareResultData = function (
            el: _Element
        ): CompareResultData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let name: OPTIONAL<Name>;
            let matched!: BOOLEAN;
            let fromEntry: OPTIONAL<BOOLEAN> =
                CompareResultData._default_value_for_fromEntry;
            let matchedSubtype: OPTIONAL<AttributeType>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                CompareResultData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                name: (_el: _Element): void => {
                    name = _decode_Name(_el);
                },
                matched: (_el: _Element): void => {
                    matched = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                fromEntry: (_el: _Element): void => {
                    fromEntry = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                matchedSubtype: (_el: _Element): void => {
                    matchedSubtype = $._decode_explicit<AttributeType>(
                        () => _decode_AttributeType
                    )(_el);
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
                _root_component_type_list_1_spec_for_CompareResultData,
                _extension_additions_list_spec_for_CompareResultData,
                _root_component_type_list_2_spec_for_CompareResultData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CompareResultData(
                /* SET_CONSTRUCTOR_CALL */ name,
                matched,
                fromEntry,
                matchedSubtype,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_CompareResultData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CompareResultData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CompareResultData */
let _cached_encoder_for_CompareResultData: $.ASN1Encoder<CompareResultData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CompareResultData */

/* START_OF_SYMBOL_DEFINITION _encode_CompareResultData */
/**
 * @summary Encodes a(n) CompareResultData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompareResultData, encoded as an ASN.1 Element.
 */
export function _encode_CompareResultData(
    value: CompareResultData,
    elGetter: $.ASN1Encoder<CompareResultData>
) {
    if (!_cached_encoder_for_CompareResultData) {
        _cached_encoder_for_CompareResultData = function (
            value: CompareResultData,
            elGetter: $.ASN1Encoder<CompareResultData>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : _encode_Name(value.name, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => $._encodeBoolean,
                                $.BER
                            )(value.matched, $.BER),
                            /* IF_DEFAULT */ value.fromEntry === undefined ||
                            $.deepEq(
                                value.fromEntry,
                                CompareResultData._default_value_for_fromEntry
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.fromEntry, $.BER),
                            /* IF_ABSENT  */ value.matchedSubtype === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_AttributeType,
                                      $.BER
                                  )(value.matchedSubtype, $.BER),
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
                                CompareResultData._default_value_for_aliasDereferenced
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
    return _cached_encoder_for_CompareResultData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CompareResultData */

/* eslint-enable */
