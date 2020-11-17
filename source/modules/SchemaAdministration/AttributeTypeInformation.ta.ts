/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeUsage,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION AttributeTypeInformation */
/**
 * @summary AttributeTypeInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeTypeInformation ::= SEQUENCE {
 *   derivation       [0]  ATTRIBUTE.&id             OPTIONAL,
 *   equalityMatch    [1]  MATCHING-RULE.&id         OPTIONAL,
 *   orderingMatch    [2]  MATCHING-RULE.&id         OPTIONAL,
 *   substringsMatch  [3]  MATCHING-RULE.&id         OPTIONAL,
 *   attributeSyntax  [4]  UnboundedDirectoryString  OPTIONAL,
 *   multi-valued     [5]  BOOLEAN                   DEFAULT TRUE,
 *   collective       [6]  BOOLEAN                   DEFAULT FALSE,
 *   userModifiable   [7]  BOOLEAN                   DEFAULT TRUE,
 *   application           AttributeUsage            DEFAULT userApplications,
 *   ... }
 * ```
 *
 * @class
 */
export class AttributeTypeInformation {
    constructor(
        /**
         * @summary `derivation`.
         * @public
         * @readonly
         */
        readonly derivation: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `equalityMatch`.
         * @public
         * @readonly
         */
        readonly equalityMatch: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `orderingMatch`.
         * @public
         * @readonly
         */
        readonly orderingMatch: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `substringsMatch`.
         * @public
         * @readonly
         */
        readonly substringsMatch: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `attributeSyntax`.
         * @public
         * @readonly
         */
        readonly attributeSyntax: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary `multi_valued`.
         * @public
         * @readonly
         */
        readonly multi_valued: OPTIONAL<BOOLEAN>,
        /**
         * @summary `collective`.
         * @public
         * @readonly
         */
        readonly collective: OPTIONAL<BOOLEAN>,
        /**
         * @summary `userModifiable`.
         * @public
         * @readonly
         */
        readonly userModifiable: OPTIONAL<BOOLEAN>,
        /**
         * @summary `application`.
         * @public
         * @readonly
         */
        readonly application: OPTIONAL<AttributeUsage>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeTypeInformation
     * @description
     *
     * This takes an `object` and converts it to a `AttributeTypeInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeTypeInformation`.
     * @returns {AttributeTypeInformation}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeTypeInformation]: AttributeTypeInformation[_K];
            }
        >
    ): AttributeTypeInformation {
        return new AttributeTypeInformation(
            _o.derivation,
            _o.equalityMatch,
            _o.orderingMatch,
            _o.substringsMatch,
            _o.attributeSyntax,
            _o.multi_valued,
            _o.collective,
            _o.userModifiable,
            _o.application,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `multi_valued`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_multi_valued() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `collective`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_collective() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `userModifiable`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_userModifiable() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `application`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_application() {
        return AttributeUsage_userApplications;
    }
    /**
     * @summary The enum used as the type of the component `application`
     * @public
     * @static
     */

    public static _enum_for_application = _enum_for_AttributeUsage;
}
/* END_OF_SYMBOL_DEFINITION AttributeTypeInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeTypeInformation */
/**
 * @summary The Leading Root Component Types of AttributeTypeInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeTypeInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "derivation",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "equalityMatch",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "orderingMatch",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "substringsMatch",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributeSyntax",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "multi-valued",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "collective",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "userModifiable",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "application",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeTypeInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeTypeInformation */
/**
 * @summary The Trailing Root Component Types of AttributeTypeInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeTypeInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeTypeInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeTypeInformation */
/**
 * @summary The Extension Addition Component Types of AttributeTypeInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeTypeInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeTypeInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeTypeInformation */
let _cached_decoder_for_AttributeTypeInformation: $.ASN1Decoder<
    AttributeTypeInformation
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeTypeInformation */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeTypeInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypeInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeTypeInformation} The decoded data structure.
 */
export function _decode_AttributeTypeInformation(el: _Element) {
    if (!_cached_decoder_for_AttributeTypeInformation) {
        _cached_decoder_for_AttributeTypeInformation = function (
            el: _Element
        ): AttributeTypeInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let derivation: OPTIONAL<OBJECT_IDENTIFIER>;
            let equalityMatch: OPTIONAL<OBJECT_IDENTIFIER>;
            let orderingMatch: OPTIONAL<OBJECT_IDENTIFIER>;
            let substringsMatch: OPTIONAL<OBJECT_IDENTIFIER>;
            let attributeSyntax: OPTIONAL<UnboundedDirectoryString>;
            let multi_valued: OPTIONAL<BOOLEAN> =
                AttributeTypeInformation._default_value_for_multi_valued;
            let collective: OPTIONAL<BOOLEAN> =
                AttributeTypeInformation._default_value_for_collective;
            let userModifiable: OPTIONAL<BOOLEAN> =
                AttributeTypeInformation._default_value_for_userModifiable;
            let application: OPTIONAL<AttributeUsage> =
                AttributeTypeInformation._default_value_for_application;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                derivation: (_el: _Element): void => {
                    derivation = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                equalityMatch: (_el: _Element): void => {
                    equalityMatch = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                orderingMatch: (_el: _Element): void => {
                    orderingMatch = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                substringsMatch: (_el: _Element): void => {
                    substringsMatch = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                attributeSyntax: (_el: _Element): void => {
                    attributeSyntax = $._decode_explicit<
                        UnboundedDirectoryString
                    >(() => _decode_UnboundedDirectoryString)(_el);
                },
                "multi-valued": (_el: _Element): void => {
                    multi_valued = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                collective: (_el: _Element): void => {
                    collective = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                userModifiable: (_el: _Element): void => {
                    userModifiable = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                application: (_el: _Element): void => {
                    application = _decode_AttributeUsage(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeTypeInformation,
                _extension_additions_list_spec_for_AttributeTypeInformation,
                _root_component_type_list_2_spec_for_AttributeTypeInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeTypeInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                derivation,
                equalityMatch,
                orderingMatch,
                substringsMatch,
                attributeSyntax,
                multi_valued,
                collective,
                userModifiable,
                application,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeTypeInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeTypeInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeTypeInformation */
let _cached_encoder_for_AttributeTypeInformation: $.ASN1Encoder<
    AttributeTypeInformation
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeTypeInformation */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeTypeInformation */
/**
 * @summary Encodes a(n) AttributeTypeInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypeInformation, encoded as an ASN.1 Element.
 */
export function _encode_AttributeTypeInformation(
    value: AttributeTypeInformation,
    elGetter: $.ASN1Encoder<AttributeTypeInformation>
) {
    if (!_cached_encoder_for_AttributeTypeInformation) {
        _cached_encoder_for_AttributeTypeInformation = function (
            value: AttributeTypeInformation,
            elGetter: $.ASN1Encoder<AttributeTypeInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.derivation === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.derivation, $.BER),
                            /* IF_ABSENT  */ value.equalityMatch === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.equalityMatch, $.BER),
                            /* IF_ABSENT  */ value.orderingMatch === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.orderingMatch, $.BER),
                            /* IF_ABSENT  */ value.substringsMatch === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.substringsMatch, $.BER),
                            /* IF_ABSENT  */ value.attributeSyntax === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_UnboundedDirectoryString,
                                      $.BER
                                  )(value.attributeSyntax, $.BER),
                            /* IF_DEFAULT */ value.multi_valued === undefined ||
                            $.deepEq(
                                value.multi_valued,
                                AttributeTypeInformation._default_value_for_multi_valued
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.multi_valued, $.BER),
                            /* IF_DEFAULT */ value.collective === undefined ||
                            $.deepEq(
                                value.collective,
                                AttributeTypeInformation._default_value_for_collective
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      6,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.collective, $.BER),
                            /* IF_DEFAULT */ value.userModifiable ===
                                undefined ||
                            $.deepEq(
                                value.userModifiable,
                                AttributeTypeInformation._default_value_for_userModifiable
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.userModifiable, $.BER),
                            /* IF_DEFAULT */ value.application === undefined ||
                            $.deepEq(
                                value.application,
                                AttributeTypeInformation._default_value_for_application
                            )
                                ? undefined
                                : _encode_AttributeUsage(
                                      value.application,
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
    return _cached_encoder_for_AttributeTypeInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeTypeInformation */

/* eslint-enable */
