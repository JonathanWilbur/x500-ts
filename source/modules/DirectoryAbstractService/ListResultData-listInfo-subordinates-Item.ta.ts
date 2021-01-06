/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "../InformationFramework/RelativeDistinguishedName.ta";
export {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "../InformationFramework/RelativeDistinguishedName.ta";

/* START_OF_SYMBOL_DEFINITION ListResultData_listInfo_subordinates_Item */
/**
 * @summary ListResultData_listInfo_subordinates_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ListResultData-listInfo-subordinates-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ListResultData_listInfo_subordinates_Item {
    constructor(
        /**
         * @summary `rdn`.
         * @public
         * @readonly
         */
        readonly rdn: RelativeDistinguishedName,
        /**
         * @summary `aliasEntry`.
         * @public
         * @readonly
         */
        readonly aliasEntry: OPTIONAL<BOOLEAN>,
        /**
         * @summary `fromEntry`.
         * @public
         * @readonly
         */
        readonly fromEntry: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ListResultData_listInfo_subordinates_Item
     * @description
     *
     * This takes an `object` and converts it to a `ListResultData_listInfo_subordinates_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ListResultData_listInfo_subordinates_Item`.
     * @returns {ListResultData_listInfo_subordinates_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ListResultData_listInfo_subordinates_Item]: ListResultData_listInfo_subordinates_Item[_K];
            }
        >
    ): ListResultData_listInfo_subordinates_Item {
        return new ListResultData_listInfo_subordinates_Item(
            _o.rdn,
            _o.aliasEntry,
            _o.fromEntry,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `aliasEntry`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasEntry() {
        return false;
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
}
/* END_OF_SYMBOL_DEFINITION ListResultData_listInfo_subordinates_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ListResultData_listInfo_subordinates_Item */
/**
 * @summary The Leading Root Component Types of ListResultData_listInfo_subordinates_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ListResultData_listInfo_subordinates_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "rdn",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasEntry",
        true,
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
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ListResultData_listInfo_subordinates_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ListResultData_listInfo_subordinates_Item */
/**
 * @summary The Trailing Root Component Types of ListResultData_listInfo_subordinates_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ListResultData_listInfo_subordinates_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ListResultData_listInfo_subordinates_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ListResultData_listInfo_subordinates_Item */
/**
 * @summary The Extension Addition Component Types of ListResultData_listInfo_subordinates_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ListResultData_listInfo_subordinates_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ListResultData_listInfo_subordinates_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ListResultData_listInfo_subordinates_Item */
let _cached_decoder_for_ListResultData_listInfo_subordinates_Item: $.ASN1Decoder<ListResultData_listInfo_subordinates_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ListResultData_listInfo_subordinates_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ListResultData_listInfo_subordinates_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) ListResultData_listInfo_subordinates_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ListResultData_listInfo_subordinates_Item} The decoded data structure.
 */
export function _decode_ListResultData_listInfo_subordinates_Item(
    el: _Element
) {
    if (!_cached_decoder_for_ListResultData_listInfo_subordinates_Item) {
        _cached_decoder_for_ListResultData_listInfo_subordinates_Item = function (
            el: _Element
        ): ListResultData_listInfo_subordinates_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let rdn!: RelativeDistinguishedName;
            let aliasEntry: OPTIONAL<BOOLEAN> =
                ListResultData_listInfo_subordinates_Item._default_value_for_aliasEntry;
            let fromEntry: OPTIONAL<BOOLEAN> =
                ListResultData_listInfo_subordinates_Item._default_value_for_fromEntry;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                rdn: (_el: _Element): void => {
                    rdn = _decode_RelativeDistinguishedName(_el);
                },
                aliasEntry: (_el: _Element): void => {
                    aliasEntry = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                fromEntry: (_el: _Element): void => {
                    fromEntry = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ListResultData_listInfo_subordinates_Item,
                _extension_additions_list_spec_for_ListResultData_listInfo_subordinates_Item,
                _root_component_type_list_2_spec_for_ListResultData_listInfo_subordinates_Item,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ListResultData_listInfo_subordinates_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ rdn,
                aliasEntry,
                fromEntry,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ListResultData_listInfo_subordinates_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ListResultData_listInfo_subordinates_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ListResultData_listInfo_subordinates_Item */
let _cached_encoder_for_ListResultData_listInfo_subordinates_Item: $.ASN1Encoder<ListResultData_listInfo_subordinates_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ListResultData_listInfo_subordinates_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ListResultData_listInfo_subordinates_Item */
/**
 * @summary Encodes a(n) ListResultData_listInfo_subordinates_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListResultData_listInfo_subordinates_Item, encoded as an ASN.1 Element.
 */
export function _encode_ListResultData_listInfo_subordinates_Item(
    value: ListResultData_listInfo_subordinates_Item,
    elGetter: $.ASN1Encoder<ListResultData_listInfo_subordinates_Item>
) {
    if (!_cached_encoder_for_ListResultData_listInfo_subordinates_Item) {
        _cached_encoder_for_ListResultData_listInfo_subordinates_Item = function (
            value: ListResultData_listInfo_subordinates_Item,
            elGetter: $.ASN1Encoder<ListResultData_listInfo_subordinates_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_RelativeDistinguishedName(
                                value.rdn,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.aliasEntry === undefined ||
                            $.deepEq(
                                value.aliasEntry,
                                ListResultData_listInfo_subordinates_Item._default_value_for_aliasEntry
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.aliasEntry, $.BER),
                            /* IF_DEFAULT */ value.fromEntry === undefined ||
                            $.deepEq(
                                value.fromEntry,
                                ListResultData_listInfo_subordinates_Item._default_value_for_fromEntry
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.fromEntry, $.BER),
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
    return _cached_encoder_for_ListResultData_listInfo_subordinates_Item(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ListResultData_listInfo_subordinates_Item */

/* eslint-enable */
