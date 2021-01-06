/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ItemPermission,
    _decode_ItemPermission,
    _encode_ItemPermission,
} from "../BasicAccessControl/ItemPermission.ta";
import {
    ProtectedItems,
    _decode_ProtectedItems,
    _encode_ProtectedItems,
} from "../BasicAccessControl/ProtectedItems.ta";
export {
    ItemPermission,
    _decode_ItemPermission,
    _encode_ItemPermission,
} from "../BasicAccessControl/ItemPermission.ta";
export {
    ProtectedItems,
    _decode_ProtectedItems,
    _encode_ProtectedItems,
} from "../BasicAccessControl/ProtectedItems.ta";

/* START_OF_SYMBOL_DEFINITION ACIItem_itemOrUserFirst_itemFirst */
/**
 * @summary ACIItem_itemOrUserFirst_itemFirst
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACIItem-itemOrUserFirst-itemFirst ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ACIItem_itemOrUserFirst_itemFirst {
    constructor(
        /**
         * @summary `protectedItems`.
         * @public
         * @readonly
         */
        readonly protectedItems: ProtectedItems,
        /**
         * @summary `itemPermissions`.
         * @public
         * @readonly
         */
        readonly itemPermissions: ItemPermission[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ACIItem_itemOrUserFirst_itemFirst
     * @description
     *
     * This takes an `object` and converts it to a `ACIItem_itemOrUserFirst_itemFirst`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ACIItem_itemOrUserFirst_itemFirst`.
     * @returns {ACIItem_itemOrUserFirst_itemFirst}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ACIItem_itemOrUserFirst_itemFirst]: ACIItem_itemOrUserFirst_itemFirst[_K];
            }
        >
    ): ACIItem_itemOrUserFirst_itemFirst {
        return new ACIItem_itemOrUserFirst_itemFirst(
            _o.protectedItems,
            _o.itemPermissions,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ACIItem_itemOrUserFirst_itemFirst */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ACIItem_itemOrUserFirst_itemFirst */
/**
 * @summary The Leading Root Component Types of ACIItem_itemOrUserFirst_itemFirst
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ACIItem_itemOrUserFirst_itemFirst: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "protectedItems",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "itemPermissions",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ACIItem_itemOrUserFirst_itemFirst */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ACIItem_itemOrUserFirst_itemFirst */
/**
 * @summary The Trailing Root Component Types of ACIItem_itemOrUserFirst_itemFirst
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ACIItem_itemOrUserFirst_itemFirst: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ACIItem_itemOrUserFirst_itemFirst */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ACIItem_itemOrUserFirst_itemFirst */
/**
 * @summary The Extension Addition Component Types of ACIItem_itemOrUserFirst_itemFirst
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ACIItem_itemOrUserFirst_itemFirst: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ACIItem_itemOrUserFirst_itemFirst */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ACIItem_itemOrUserFirst_itemFirst */
let _cached_decoder_for_ACIItem_itemOrUserFirst_itemFirst: $.ASN1Decoder<ACIItem_itemOrUserFirst_itemFirst> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ACIItem_itemOrUserFirst_itemFirst */

/* START_OF_SYMBOL_DEFINITION _decode_ACIItem_itemOrUserFirst_itemFirst */
/**
 * @summary Decodes an ASN.1 element into a(n) ACIItem_itemOrUserFirst_itemFirst
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ACIItem_itemOrUserFirst_itemFirst} The decoded data structure.
 */
export function _decode_ACIItem_itemOrUserFirst_itemFirst(el: _Element) {
    if (!_cached_decoder_for_ACIItem_itemOrUserFirst_itemFirst) {
        _cached_decoder_for_ACIItem_itemOrUserFirst_itemFirst = function (
            el: _Element
        ): ACIItem_itemOrUserFirst_itemFirst {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ACIItem-itemOrUserFirst-itemFirst contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "protectedItems";
            sequence[1].name = "itemPermissions";
            let protectedItems!: ProtectedItems;
            let itemPermissions!: ItemPermission[];
            protectedItems = _decode_ProtectedItems(sequence[0]);
            itemPermissions = $._decodeSetOf<ItemPermission>(
                () => _decode_ItemPermission
            )(sequence[1]);
            return new ACIItem_itemOrUserFirst_itemFirst(
                protectedItems,
                itemPermissions,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_ACIItem_itemOrUserFirst_itemFirst(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ACIItem_itemOrUserFirst_itemFirst */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ACIItem_itemOrUserFirst_itemFirst */
let _cached_encoder_for_ACIItem_itemOrUserFirst_itemFirst: $.ASN1Encoder<ACIItem_itemOrUserFirst_itemFirst> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ACIItem_itemOrUserFirst_itemFirst */

/* START_OF_SYMBOL_DEFINITION _encode_ACIItem_itemOrUserFirst_itemFirst */
/**
 * @summary Encodes a(n) ACIItem_itemOrUserFirst_itemFirst into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACIItem_itemOrUserFirst_itemFirst, encoded as an ASN.1 Element.
 */
export function _encode_ACIItem_itemOrUserFirst_itemFirst(
    value: ACIItem_itemOrUserFirst_itemFirst,
    elGetter: $.ASN1Encoder<ACIItem_itemOrUserFirst_itemFirst>
) {
    if (!_cached_encoder_for_ACIItem_itemOrUserFirst_itemFirst) {
        _cached_encoder_for_ACIItem_itemOrUserFirst_itemFirst = function (
            value: ACIItem_itemOrUserFirst_itemFirst,
            elGetter: $.ASN1Encoder<ACIItem_itemOrUserFirst_itemFirst>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_ProtectedItems(
                                value.protectedItems,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSetOf<ItemPermission>(
                                () => _encode_ItemPermission,
                                $.BER
                            )(value.itemPermissions, $.BER),
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
    return _cached_encoder_for_ACIItem_itemOrUserFirst_itemFirst(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ACIItem_itemOrUserFirst_itemFirst */

/* eslint-enable */
