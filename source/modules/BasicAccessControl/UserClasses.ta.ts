/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SubtreeSpecification,
    _decode_SubtreeSpecification,
    _encode_SubtreeSpecification,
} from "../InformationFramework/SubtreeSpecification.ta";
import {
    NameAndOptionalUID,
    _decode_NameAndOptionalUID,
    _encode_NameAndOptionalUID,
} from "../SelectedAttributeTypes/NameAndOptionalUID.ta";
export {
    SubtreeSpecification,
    _decode_SubtreeSpecification,
    _encode_SubtreeSpecification,
} from "../InformationFramework/SubtreeSpecification.ta";
export {
    NameAndOptionalUID,
    _decode_NameAndOptionalUID,
    _encode_NameAndOptionalUID,
} from "../SelectedAttributeTypes/NameAndOptionalUID.ta";

/* START_OF_SYMBOL_DEFINITION UserClasses */
/**
 * @summary UserClasses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserClasses ::= SEQUENCE {
 *   allUsers   [0]  NULL                                      OPTIONAL,
 *   thisEntry  [1]  NULL                                      OPTIONAL,
 *   name       [2]  SET SIZE (1..MAX) OF NameAndOptionalUID   OPTIONAL,
 *   userGroup  [3]  SET SIZE (1..MAX) OF NameAndOptionalUID   OPTIONAL,
 *                   -- dn component shall be the name of an
 *                   -- entry of GroupOfUniqueNames
 *   subtree    [4]  SET SIZE (1..MAX) OF SubtreeSpecification OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class UserClasses {
    constructor(
        /**
         * @summary `allUsers`.
         * @public
         * @readonly
         */
        readonly allUsers: OPTIONAL<NULL>,
        /**
         * @summary `thisEntry`.
         * @public
         * @readonly
         */
        readonly thisEntry: OPTIONAL<NULL>,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<NameAndOptionalUID[]>,
        /**
         * @summary `userGroup`.
         * @public
         * @readonly
         */
        readonly userGroup: OPTIONAL<NameAndOptionalUID[]>,
        /**
         * @summary `subtree`.
         * @public
         * @readonly
         */
        readonly subtree: OPTIONAL<SubtreeSpecification[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UserClasses
     * @description
     *
     * This takes an `object` and converts it to a `UserClasses`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserClasses`.
     * @returns {UserClasses}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof UserClasses]: UserClasses[_K] }>
    ): UserClasses {
        return new UserClasses(
            _o.allUsers,
            _o.thisEntry,
            _o.name,
            _o.userGroup,
            _o.subtree,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION UserClasses */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UserClasses */
/**
 * @summary The Leading Root Component Types of UserClasses
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UserClasses: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "allUsers",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "thisEntry",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "userGroup",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subtree",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UserClasses */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UserClasses */
/**
 * @summary The Trailing Root Component Types of UserClasses
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UserClasses: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UserClasses */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UserClasses */
/**
 * @summary The Extension Addition Component Types of UserClasses
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UserClasses: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UserClasses */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UserClasses */
let _cached_decoder_for_UserClasses: $.ASN1Decoder<UserClasses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UserClasses */

/* START_OF_SYMBOL_DEFINITION _decode_UserClasses */
/**
 * @summary Decodes an ASN.1 element into a(n) UserClasses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserClasses} The decoded data structure.
 */
export function _decode_UserClasses(el: _Element) {
    if (!_cached_decoder_for_UserClasses) {
        _cached_decoder_for_UserClasses = function (el: _Element): UserClasses {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let allUsers: OPTIONAL<NULL>;
            let thisEntry: OPTIONAL<NULL>;
            let name: OPTIONAL<NameAndOptionalUID[]>;
            let userGroup: OPTIONAL<NameAndOptionalUID[]>;
            let subtree: OPTIONAL<SubtreeSpecification[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                allUsers: (_el: _Element): void => {
                    allUsers = $._decode_explicit<NULL>(() => $._decodeNull)(
                        _el
                    );
                },
                thisEntry: (_el: _Element): void => {
                    thisEntry = $._decode_explicit<NULL>(() => $._decodeNull)(
                        _el
                    );
                },
                name: (_el: _Element): void => {
                    name = $._decode_explicit<NameAndOptionalUID[]>(() =>
                        $._decodeSetOf<NameAndOptionalUID>(
                            () => _decode_NameAndOptionalUID
                        )
                    )(_el);
                },
                userGroup: (_el: _Element): void => {
                    userGroup = $._decode_explicit<NameAndOptionalUID[]>(() =>
                        $._decodeSetOf<NameAndOptionalUID>(
                            () => _decode_NameAndOptionalUID
                        )
                    )(_el);
                },
                subtree: (_el: _Element): void => {
                    subtree = $._decode_explicit<SubtreeSpecification[]>(() =>
                        $._decodeSetOf<SubtreeSpecification>(
                            () => _decode_SubtreeSpecification
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UserClasses,
                _extension_additions_list_spec_for_UserClasses,
                _root_component_type_list_2_spec_for_UserClasses,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new UserClasses(
                /* SEQUENCE_CONSTRUCTOR_CALL */ allUsers,
                thisEntry,
                name,
                userGroup,
                subtree,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_UserClasses(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UserClasses */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UserClasses */
let _cached_encoder_for_UserClasses: $.ASN1Encoder<UserClasses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UserClasses */

/* START_OF_SYMBOL_DEFINITION _encode_UserClasses */
/**
 * @summary Encodes a(n) UserClasses into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserClasses, encoded as an ASN.1 Element.
 */
export function _encode_UserClasses(
    value: UserClasses,
    elGetter: $.ASN1Encoder<UserClasses>
) {
    if (!_cached_encoder_for_UserClasses) {
        _cached_encoder_for_UserClasses = function (
            value: UserClasses,
            elGetter: $.ASN1Encoder<UserClasses>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.allUsers === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeNull,
                                      $.BER
                                  )(value.allUsers, $.BER),
                            /* IF_ABSENT  */ value.thisEntry === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeNull,
                                      $.BER
                                  )(value.thisEntry, $.BER),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<NameAndOptionalUID>(
                                              () => _encode_NameAndOptionalUID,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.name, $.BER),
                            /* IF_ABSENT  */ value.userGroup === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSetOf<NameAndOptionalUID>(
                                              () => _encode_NameAndOptionalUID,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.userGroup, $.BER),
                            /* IF_ABSENT  */ value.subtree === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () =>
                                          $._encodeSetOf<SubtreeSpecification>(
                                              () =>
                                                  _encode_SubtreeSpecification,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.subtree, $.BER),
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
    return _cached_encoder_for_UserClasses(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UserClasses */

/* eslint-enable */
