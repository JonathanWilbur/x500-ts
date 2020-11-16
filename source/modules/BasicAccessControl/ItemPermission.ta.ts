/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    GrantsAndDenials,
    _decode_GrantsAndDenials,
    _encode_GrantsAndDenials,
} from "../BasicAccessControl/GrantsAndDenials.ta";
import {
    Precedence,
    _decode_Precedence,
    _encode_Precedence,
} from "../BasicAccessControl/Precedence.ta";
import {
    UserClasses,
    _decode_UserClasses,
    _encode_UserClasses,
} from "../BasicAccessControl/UserClasses.ta";
export {
    GrantsAndDenials,
    GrantsAndDenials_denyAdd /* IMPORTED_BIT */,
    GrantsAndDenials_denyBrowse /* IMPORTED_BIT */,
    GrantsAndDenials_denyCompare /* IMPORTED_BIT */,
    GrantsAndDenials_denyDiscloseOnError /* IMPORTED_BIT */,
    GrantsAndDenials_denyExport /* IMPORTED_BIT */,
    GrantsAndDenials_denyFilterMatch /* IMPORTED_BIT */,
    GrantsAndDenials_denyImport /* IMPORTED_BIT */,
    GrantsAndDenials_denyInvoke /* IMPORTED_BIT */,
    GrantsAndDenials_denyModify /* IMPORTED_BIT */,
    GrantsAndDenials_denyRead /* IMPORTED_BIT */,
    GrantsAndDenials_denyRemove /* IMPORTED_BIT */,
    GrantsAndDenials_denyRename /* IMPORTED_BIT */,
    GrantsAndDenials_denyReturnDN /* IMPORTED_BIT */,
    GrantsAndDenials_grantAdd /* IMPORTED_BIT */,
    GrantsAndDenials_grantBrowse /* IMPORTED_BIT */,
    GrantsAndDenials_grantCompare /* IMPORTED_BIT */,
    GrantsAndDenials_grantDiscloseOnError /* IMPORTED_BIT */,
    GrantsAndDenials_grantExport /* IMPORTED_BIT */,
    GrantsAndDenials_grantFilterMatch /* IMPORTED_BIT */,
    GrantsAndDenials_grantImport /* IMPORTED_BIT */,
    GrantsAndDenials_grantInvoke /* IMPORTED_BIT */,
    GrantsAndDenials_grantModify /* IMPORTED_BIT */,
    GrantsAndDenials_grantRead /* IMPORTED_BIT */,
    GrantsAndDenials_grantRemove /* IMPORTED_BIT */,
    GrantsAndDenials_grantRename /* IMPORTED_BIT */,
    GrantsAndDenials_grantReturnDN /* IMPORTED_BIT */,
    _decode_GrantsAndDenials,
    _encode_GrantsAndDenials,
} from "../BasicAccessControl/GrantsAndDenials.ta";
export {
    Precedence,
    _decode_Precedence,
    _encode_Precedence,
} from "../BasicAccessControl/Precedence.ta";
export {
    UserClasses,
    _decode_UserClasses,
    _encode_UserClasses,
} from "../BasicAccessControl/UserClasses.ta";

/* START_OF_SYMBOL_DEFINITION ItemPermission */
/**
 * @summary ItemPermission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ItemPermission ::= SEQUENCE {
 *   precedence        Precedence OPTIONAL,
 *              -- defaults to precedence in ACIItem
 *   userClasses       UserClasses,
 *   grantsAndDenials  GrantsAndDenials,
 *   ... }
 * ```
 *
 * @class
 */
export class ItemPermission {
    constructor(
        /**
         * @summary `precedence`.
         * @public
         * @readonly
         */
        readonly precedence: OPTIONAL<Precedence>,
        /**
         * @summary `userClasses`.
         * @public
         * @readonly
         */
        readonly userClasses: UserClasses,
        /**
         * @summary `grantsAndDenials`.
         * @public
         * @readonly
         */
        readonly grantsAndDenials: GrantsAndDenials,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ItemPermission
     * @description
     *
     * This takes an `object` and converts it to a `ItemPermission`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ItemPermission`.
     * @returns {ItemPermission}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ItemPermission]: ItemPermission[_K] }>
    ): ItemPermission {
        return new ItemPermission(
            _o.precedence,
            _o.userClasses,
            _o.grantsAndDenials,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ItemPermission */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ItemPermission */
/**
 * @summary The Leading Root Component Types of ItemPermission
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ItemPermission: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "precedence",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "userClasses",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "grantsAndDenials",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ItemPermission */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ItemPermission */
/**
 * @summary The Trailing Root Component Types of ItemPermission
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ItemPermission: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ItemPermission */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ItemPermission */
/**
 * @summary The Extension Addition Component Types of ItemPermission
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ItemPermission: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ItemPermission */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ItemPermission */
let _cached_decoder_for_ItemPermission: $.ASN1Decoder<
    ItemPermission
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ItemPermission */

/* START_OF_SYMBOL_DEFINITION _decode_ItemPermission */
/**
 * @summary Decodes an ASN.1 element into a(n) ItemPermission
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ItemPermission} The decoded data structure.
 */
export function _decode_ItemPermission(el: _Element) {
    if (!_cached_decoder_for_ItemPermission) {
        _cached_decoder_for_ItemPermission = function (
            el: _Element
        ): ItemPermission {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let precedence: OPTIONAL<Precedence>;
            let userClasses!: UserClasses;
            let grantsAndDenials!: GrantsAndDenials;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                precedence: (_el: _Element): void => {
                    precedence = _decode_Precedence(_el);
                },
                userClasses: (_el: _Element): void => {
                    userClasses = _decode_UserClasses(_el);
                },
                grantsAndDenials: (_el: _Element): void => {
                    grantsAndDenials = _decode_GrantsAndDenials(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ItemPermission,
                _extension_additions_list_spec_for_ItemPermission,
                _root_component_type_list_2_spec_for_ItemPermission,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ItemPermission /* SEQUENCE_CONSTRUCTOR_CALL */(
                precedence,
                userClasses,
                grantsAndDenials,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ItemPermission(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ItemPermission */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ItemPermission */
let _cached_encoder_for_ItemPermission: $.ASN1Encoder<
    ItemPermission
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ItemPermission */

/* START_OF_SYMBOL_DEFINITION _encode_ItemPermission */
/**
 * @summary Encodes a(n) ItemPermission into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ItemPermission, encoded as an ASN.1 Element.
 */
export function _encode_ItemPermission(
    value: ItemPermission,
    elGetter: $.ASN1Encoder<ItemPermission>
) {
    if (!_cached_encoder_for_ItemPermission) {
        _cached_encoder_for_ItemPermission = function (
            value: ItemPermission,
            elGetter: $.ASN1Encoder<ItemPermission>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.precedence === undefined
                                ? undefined
                                : _encode_Precedence(value.precedence, $.BER),
                            /* REQUIRED   */ _encode_UserClasses(
                                value.userClasses,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_GrantsAndDenials(
                                value.grantsAndDenials,
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
    return _cached_encoder_for_ItemPermission(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ItemPermission */

/* eslint-enable */
