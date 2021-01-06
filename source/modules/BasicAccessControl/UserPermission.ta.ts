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
    ProtectedItems,
    _decode_ProtectedItems,
    _encode_ProtectedItems,
} from "../BasicAccessControl/ProtectedItems.ta";
export {
    denyAdd /* IMPORTED_SHORT_NAMED_BIT */,
    denyBrowse /* IMPORTED_SHORT_NAMED_BIT */,
    denyCompare /* IMPORTED_SHORT_NAMED_BIT */,
    denyDiscloseOnError /* IMPORTED_SHORT_NAMED_BIT */,
    denyExport /* IMPORTED_SHORT_NAMED_BIT */,
    denyFilterMatch /* IMPORTED_SHORT_NAMED_BIT */,
    denyImport /* IMPORTED_SHORT_NAMED_BIT */,
    denyInvoke /* IMPORTED_SHORT_NAMED_BIT */,
    denyModify /* IMPORTED_SHORT_NAMED_BIT */,
    denyRead /* IMPORTED_SHORT_NAMED_BIT */,
    denyRemove /* IMPORTED_SHORT_NAMED_BIT */,
    denyRename /* IMPORTED_SHORT_NAMED_BIT */,
    denyReturnDN /* IMPORTED_SHORT_NAMED_BIT */,
    grantAdd /* IMPORTED_SHORT_NAMED_BIT */,
    grantBrowse /* IMPORTED_SHORT_NAMED_BIT */,
    grantCompare /* IMPORTED_SHORT_NAMED_BIT */,
    grantDiscloseOnError /* IMPORTED_SHORT_NAMED_BIT */,
    grantExport /* IMPORTED_SHORT_NAMED_BIT */,
    grantFilterMatch /* IMPORTED_SHORT_NAMED_BIT */,
    grantImport /* IMPORTED_SHORT_NAMED_BIT */,
    grantInvoke /* IMPORTED_SHORT_NAMED_BIT */,
    grantModify /* IMPORTED_SHORT_NAMED_BIT */,
    grantRead /* IMPORTED_SHORT_NAMED_BIT */,
    grantRemove /* IMPORTED_SHORT_NAMED_BIT */,
    grantRename /* IMPORTED_SHORT_NAMED_BIT */,
    grantReturnDN /* IMPORTED_SHORT_NAMED_BIT */,
    GrantsAndDenials,
    GrantsAndDenials_denyAdd /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_denyBrowse /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_denyCompare /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_denyDiscloseOnError /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_denyExport /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_denyFilterMatch /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_denyImport /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_denyInvoke /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_denyModify /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_denyRead /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_denyRemove /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_denyRename /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_denyReturnDN /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_grantAdd /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_grantBrowse /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_grantCompare /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_grantDiscloseOnError /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_grantExport /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_grantFilterMatch /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_grantImport /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_grantInvoke /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_grantModify /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_grantRead /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_grantRemove /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_grantRename /* IMPORTED_LONG_NAMED_BIT */,
    GrantsAndDenials_grantReturnDN /* IMPORTED_LONG_NAMED_BIT */,
    _decode_GrantsAndDenials,
    _encode_GrantsAndDenials,
} from "../BasicAccessControl/GrantsAndDenials.ta";
export {
    Precedence,
    _decode_Precedence,
    _encode_Precedence,
} from "../BasicAccessControl/Precedence.ta";
export {
    ProtectedItems,
    _decode_ProtectedItems,
    _encode_ProtectedItems,
} from "../BasicAccessControl/ProtectedItems.ta";

/* START_OF_SYMBOL_DEFINITION UserPermission */
/**
 * @summary UserPermission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserPermission ::= SEQUENCE {
 *   precedence        Precedence OPTIONAL,
 *              -- defaults to precedence in ACIItem
 *   protectedItems    ProtectedItems,
 *   grantsAndDenials  GrantsAndDenials,
 *   ... }
 * ```
 *
 * @class
 */
export class UserPermission {
    constructor(
        /**
         * @summary `precedence`.
         * @public
         * @readonly
         */
        readonly precedence: OPTIONAL<Precedence>,
        /**
         * @summary `protectedItems`.
         * @public
         * @readonly
         */
        readonly protectedItems: ProtectedItems,
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
     * @summary Restructures an object into a UserPermission
     * @description
     *
     * This takes an `object` and converts it to a `UserPermission`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserPermission`.
     * @returns {UserPermission}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof UserPermission]: UserPermission[_K] }>
    ): UserPermission {
        return new UserPermission(
            _o.precedence,
            _o.protectedItems,
            _o.grantsAndDenials,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION UserPermission */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UserPermission */
/**
 * @summary The Leading Root Component Types of UserPermission
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UserPermission: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "precedence",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "protectedItems",
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UserPermission */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UserPermission */
/**
 * @summary The Trailing Root Component Types of UserPermission
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UserPermission: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UserPermission */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UserPermission */
/**
 * @summary The Extension Addition Component Types of UserPermission
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UserPermission: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UserPermission */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UserPermission */
let _cached_decoder_for_UserPermission: $.ASN1Decoder<UserPermission> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UserPermission */

/* START_OF_SYMBOL_DEFINITION _decode_UserPermission */
/**
 * @summary Decodes an ASN.1 element into a(n) UserPermission
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserPermission} The decoded data structure.
 */
export function _decode_UserPermission(el: _Element) {
    if (!_cached_decoder_for_UserPermission) {
        _cached_decoder_for_UserPermission = function (
            el: _Element
        ): UserPermission {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let precedence: OPTIONAL<Precedence>;
            let protectedItems!: ProtectedItems;
            let grantsAndDenials!: GrantsAndDenials;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                precedence: (_el: _Element): void => {
                    precedence = _decode_Precedence(_el);
                },
                protectedItems: (_el: _Element): void => {
                    protectedItems = _decode_ProtectedItems(_el);
                },
                grantsAndDenials: (_el: _Element): void => {
                    grantsAndDenials = _decode_GrantsAndDenials(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UserPermission,
                _extension_additions_list_spec_for_UserPermission,
                _root_component_type_list_2_spec_for_UserPermission,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new UserPermission(
                /* SEQUENCE_CONSTRUCTOR_CALL */ precedence,
                protectedItems,
                grantsAndDenials,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_UserPermission(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UserPermission */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UserPermission */
let _cached_encoder_for_UserPermission: $.ASN1Encoder<UserPermission> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UserPermission */

/* START_OF_SYMBOL_DEFINITION _encode_UserPermission */
/**
 * @summary Encodes a(n) UserPermission into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserPermission, encoded as an ASN.1 Element.
 */
export function _encode_UserPermission(
    value: UserPermission,
    elGetter: $.ASN1Encoder<UserPermission>
) {
    if (!_cached_encoder_for_UserPermission) {
        _cached_encoder_for_UserPermission = function (
            value: UserPermission,
            elGetter: $.ASN1Encoder<UserPermission>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.precedence === undefined
                                ? undefined
                                : _encode_Precedence(value.precedence, $.BER),
                            /* REQUIRED   */ _encode_ProtectedItems(
                                value.protectedItems,
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
    return _cached_encoder_for_UserPermission(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UserPermission */

/* eslint-enable */
