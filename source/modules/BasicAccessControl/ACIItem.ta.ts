/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ACIItem_itemOrUserFirst,
    _decode_ACIItem_itemOrUserFirst,
    _encode_ACIItem_itemOrUserFirst,
} from "../BasicAccessControl/ACIItem-itemOrUserFirst.ta";
import {
    AuthenticationLevel,
    _decode_AuthenticationLevel,
    _encode_AuthenticationLevel,
} from "../BasicAccessControl/AuthenticationLevel.ta";
import {
    Precedence,
    _decode_Precedence,
    _encode_Precedence,
} from "../BasicAccessControl/Precedence.ta";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export {
    ACIItem_itemOrUserFirst,
    _decode_ACIItem_itemOrUserFirst,
    _encode_ACIItem_itemOrUserFirst,
} from "../BasicAccessControl/ACIItem-itemOrUserFirst.ta";
export {
    AuthenticationLevel,
    _decode_AuthenticationLevel,
    _encode_AuthenticationLevel,
} from "../BasicAccessControl/AuthenticationLevel.ta";
export {
    Precedence,
    _decode_Precedence,
    _encode_Precedence,
} from "../BasicAccessControl/Precedence.ta";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION ACIItem */
/**
 * @summary ACIItem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACIItem ::= SEQUENCE {
 *   identificationTag    UnboundedDirectoryString,
 *   precedence           Precedence,
 *   authenticationLevel  AuthenticationLevel,
 *   itemOrUserFirst      CHOICE {
 *     itemFirst       [0]  SEQUENCE {
 *       protectedItems       ProtectedItems,
 *       itemPermissions      SET OF ItemPermission,
 *       ...},
 *     userFirst       [1]  SEQUENCE {
 *       userClasses          UserClasses,
 *       userPermissions      SET OF UserPermission,
 *       ...},
 *     ...},
 *   ... }
 * ```
 *
 * @class
 */
export class ACIItem {
    constructor(
        /**
         * @summary `identificationTag`.
         * @public
         * @readonly
         */
        readonly identificationTag: UnboundedDirectoryString,
        /**
         * @summary `precedence`.
         * @public
         * @readonly
         */
        readonly precedence: Precedence,
        /**
         * @summary `authenticationLevel`.
         * @public
         * @readonly
         */
        readonly authenticationLevel: AuthenticationLevel,
        /**
         * @summary `itemOrUserFirst`.
         * @public
         * @readonly
         */
        readonly itemOrUserFirst: ACIItem_itemOrUserFirst,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ACIItem
     * @description
     *
     * This takes an `object` and converts it to a `ACIItem`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ACIItem`.
     * @returns {ACIItem}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ACIItem]: ACIItem[_K] }>
    ): ACIItem {
        return new ACIItem(
            _o.identificationTag,
            _o.precedence,
            _o.authenticationLevel,
            _o.itemOrUserFirst,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ACIItem */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ACIItem */
/**
 * @summary The Leading Root Component Types of ACIItem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ACIItem: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "identificationTag",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "precedence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "authenticationLevel",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "itemOrUserFirst",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ACIItem */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ACIItem */
/**
 * @summary The Trailing Root Component Types of ACIItem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ACIItem: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ACIItem */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ACIItem */
/**
 * @summary The Extension Addition Component Types of ACIItem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ACIItem: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ACIItem */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ACIItem */
let _cached_decoder_for_ACIItem: $.ASN1Decoder<ACIItem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ACIItem */

/* START_OF_SYMBOL_DEFINITION _decode_ACIItem */
/**
 * @summary Decodes an ASN.1 element into a(n) ACIItem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ACIItem} The decoded data structure.
 */
export function _decode_ACIItem(el: _Element) {
    if (!_cached_decoder_for_ACIItem) {
        _cached_decoder_for_ACIItem = function (el: _Element): ACIItem {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new _ConstructionError(
                    "ACIItem contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "identificationTag";
            sequence[1].name = "precedence";
            sequence[2].name = "authenticationLevel";
            sequence[3].name = "itemOrUserFirst";
            let identificationTag!: UnboundedDirectoryString;
            let precedence!: Precedence;
            let authenticationLevel!: AuthenticationLevel;
            let itemOrUserFirst!: ACIItem_itemOrUserFirst;
            identificationTag = _decode_UnboundedDirectoryString(sequence[0]);
            precedence = _decode_Precedence(sequence[1]);
            authenticationLevel = _decode_AuthenticationLevel(sequence[2]);
            itemOrUserFirst = _decode_ACIItem_itemOrUserFirst(sequence[3]);
            return new ACIItem(
                identificationTag,
                precedence,
                authenticationLevel,
                itemOrUserFirst,
                sequence.slice(4)
            );
        };
    }
    return _cached_decoder_for_ACIItem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ACIItem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ACIItem */
let _cached_encoder_for_ACIItem: $.ASN1Encoder<ACIItem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ACIItem */

/* START_OF_SYMBOL_DEFINITION _encode_ACIItem */
/**
 * @summary Encodes a(n) ACIItem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACIItem, encoded as an ASN.1 Element.
 */
export function _encode_ACIItem(
    value: ACIItem,
    elGetter: $.ASN1Encoder<ACIItem>
) {
    if (!_cached_encoder_for_ACIItem) {
        _cached_encoder_for_ACIItem = function (
            value: ACIItem,
            elGetter: $.ASN1Encoder<ACIItem>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_UnboundedDirectoryString(
                                value.identificationTag,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Precedence(
                                value.precedence,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AuthenticationLevel(
                                value.authenticationLevel,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_ACIItem_itemOrUserFirst(
                                value.itemOrUserFirst,
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
    return _cached_encoder_for_ACIItem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ACIItem */

/* eslint-enable */
