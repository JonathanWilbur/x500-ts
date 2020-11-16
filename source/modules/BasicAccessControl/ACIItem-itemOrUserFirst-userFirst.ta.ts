/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UserClasses,
    _decode_UserClasses,
    _encode_UserClasses,
} from "../BasicAccessControl/UserClasses.ta";
import {
    UserPermission,
    _decode_UserPermission,
    _encode_UserPermission,
} from "../BasicAccessControl/UserPermission.ta";
export {
    UserClasses,
    _decode_UserClasses,
    _encode_UserClasses,
} from "../BasicAccessControl/UserClasses.ta";
export {
    UserPermission,
    _decode_UserPermission,
    _encode_UserPermission,
} from "../BasicAccessControl/UserPermission.ta";

/* START_OF_SYMBOL_DEFINITION ACIItem_itemOrUserFirst_userFirst */
/**
 * @summary ACIItem_itemOrUserFirst_userFirst
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACIItem-itemOrUserFirst-userFirst ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ACIItem_itemOrUserFirst_userFirst {
    constructor(
        /**
         * @summary `userClasses`.
         * @public
         * @readonly
         */
        readonly userClasses: UserClasses,
        /**
         * @summary `userPermissions`.
         * @public
         * @readonly
         */
        readonly userPermissions: UserPermission[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ACIItem_itemOrUserFirst_userFirst
     * @description
     *
     * This takes an `object` and converts it to a `ACIItem_itemOrUserFirst_userFirst`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ACIItem_itemOrUserFirst_userFirst`.
     * @returns {ACIItem_itemOrUserFirst_userFirst}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ACIItem_itemOrUserFirst_userFirst]: ACIItem_itemOrUserFirst_userFirst[_K];
            }
        >
    ): ACIItem_itemOrUserFirst_userFirst {
        return new ACIItem_itemOrUserFirst_userFirst(
            _o.userClasses,
            _o.userPermissions,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ACIItem_itemOrUserFirst_userFirst */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ACIItem_itemOrUserFirst_userFirst */
/**
 * @summary The Leading Root Component Types of ACIItem_itemOrUserFirst_userFirst
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ACIItem_itemOrUserFirst_userFirst: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "userClasses",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "userPermissions",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ACIItem_itemOrUserFirst_userFirst */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ACIItem_itemOrUserFirst_userFirst */
/**
 * @summary The Trailing Root Component Types of ACIItem_itemOrUserFirst_userFirst
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ACIItem_itemOrUserFirst_userFirst: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ACIItem_itemOrUserFirst_userFirst */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ACIItem_itemOrUserFirst_userFirst */
/**
 * @summary The Extension Addition Component Types of ACIItem_itemOrUserFirst_userFirst
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ACIItem_itemOrUserFirst_userFirst: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ACIItem_itemOrUserFirst_userFirst */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ACIItem_itemOrUserFirst_userFirst */
let _cached_decoder_for_ACIItem_itemOrUserFirst_userFirst: $.ASN1Decoder<
    ACIItem_itemOrUserFirst_userFirst
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ACIItem_itemOrUserFirst_userFirst */

/* START_OF_SYMBOL_DEFINITION _decode_ACIItem_itemOrUserFirst_userFirst */
/**
 * @summary Decodes an ASN.1 element into a(n) ACIItem_itemOrUserFirst_userFirst
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ACIItem_itemOrUserFirst_userFirst} The decoded data structure.
 */
export function _decode_ACIItem_itemOrUserFirst_userFirst(el: _Element) {
    if (!_cached_decoder_for_ACIItem_itemOrUserFirst_userFirst) {
        _cached_decoder_for_ACIItem_itemOrUserFirst_userFirst = function (
            el: _Element
        ): ACIItem_itemOrUserFirst_userFirst {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ACIItem-itemOrUserFirst-userFirst contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "userClasses";
            sequence[1].name = "userPermissions";
            let userClasses!: UserClasses;
            let userPermissions!: UserPermission[];
            userClasses = _decode_UserClasses(sequence[0]);
            userPermissions = $._decodeSetOf<UserPermission>(
                () => _decode_UserPermission
            )(sequence[1]);
            return new ACIItem_itemOrUserFirst_userFirst(
                userClasses,
                userPermissions,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_ACIItem_itemOrUserFirst_userFirst(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ACIItem_itemOrUserFirst_userFirst */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ACIItem_itemOrUserFirst_userFirst */
let _cached_encoder_for_ACIItem_itemOrUserFirst_userFirst: $.ASN1Encoder<
    ACIItem_itemOrUserFirst_userFirst
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ACIItem_itemOrUserFirst_userFirst */

/* START_OF_SYMBOL_DEFINITION _encode_ACIItem_itemOrUserFirst_userFirst */
/**
 * @summary Encodes a(n) ACIItem_itemOrUserFirst_userFirst into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACIItem_itemOrUserFirst_userFirst, encoded as an ASN.1 Element.
 */
export function _encode_ACIItem_itemOrUserFirst_userFirst(
    value: ACIItem_itemOrUserFirst_userFirst,
    elGetter: $.ASN1Encoder<ACIItem_itemOrUserFirst_userFirst>
) {
    if (!_cached_encoder_for_ACIItem_itemOrUserFirst_userFirst) {
        _cached_encoder_for_ACIItem_itemOrUserFirst_userFirst = function (
            value: ACIItem_itemOrUserFirst_userFirst,
            elGetter: $.ASN1Encoder<ACIItem_itemOrUserFirst_userFirst>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_UserClasses(
                                value.userClasses,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSetOf<UserPermission>(
                                () => _encode_UserPermission,
                                $.BER
                            )(value.userPermissions, $.BER),
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
    return _cached_encoder_for_ACIItem_itemOrUserFirst_userFirst(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ACIItem_itemOrUserFirst_userFirst */

/* eslint-enable */
