/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "../PKI-Stub/Extensions.ta";
import {
    TBSCertAVL_entries_Item_idType,
    _decode_TBSCertAVL_entries_Item_idType,
    _encode_TBSCertAVL_entries_Item_idType,
} from "../PKI-Stub/TBSCertAVL-entries-Item-idType.ta";
export {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "../PKI-Stub/Extensions.ta";
export {
    TBSCertAVL_entries_Item_idType,
    _decode_TBSCertAVL_entries_Item_idType,
    _encode_TBSCertAVL_entries_Item_idType,
} from "../PKI-Stub/TBSCertAVL-entries-Item-idType.ta";

/* START_OF_SYMBOL_DEFINITION TBSCertAVL_entries_Item */
/**
 * @summary TBSCertAVL_entries_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSCertAVL-entries-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class TBSCertAVL_entries_Item {
    constructor(
        /**
         * @summary `idType`.
         * @public
         * @readonly
         */
        readonly idType: TBSCertAVL_entries_Item_idType,
        /**
         * @summary `entryExtensions`.
         * @public
         * @readonly
         */
        readonly entryExtensions: OPTIONAL<Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TBSCertAVL_entries_Item
     * @description
     *
     * This takes an `object` and converts it to a `TBSCertAVL_entries_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSCertAVL_entries_Item`.
     * @returns {TBSCertAVL_entries_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof TBSCertAVL_entries_Item]: TBSCertAVL_entries_Item[_K];
            }
        >
    ): TBSCertAVL_entries_Item {
        return new TBSCertAVL_entries_Item(
            _o.idType,
            _o.entryExtensions,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION TBSCertAVL_entries_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TBSCertAVL_entries_Item */
/**
 * @summary The Leading Root Component Types of TBSCertAVL_entries_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBSCertAVL_entries_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("idType", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "entryExtensions",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TBSCertAVL_entries_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TBSCertAVL_entries_Item */
/**
 * @summary The Trailing Root Component Types of TBSCertAVL_entries_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBSCertAVL_entries_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TBSCertAVL_entries_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TBSCertAVL_entries_Item */
/**
 * @summary The Extension Addition Component Types of TBSCertAVL_entries_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBSCertAVL_entries_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TBSCertAVL_entries_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TBSCertAVL_entries_Item */
let _cached_decoder_for_TBSCertAVL_entries_Item: $.ASN1Decoder<
    TBSCertAVL_entries_Item
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TBSCertAVL_entries_Item */

/* START_OF_SYMBOL_DEFINITION _decode_TBSCertAVL_entries_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) TBSCertAVL_entries_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSCertAVL_entries_Item} The decoded data structure.
 */
export function _decode_TBSCertAVL_entries_Item(el: _Element) {
    if (!_cached_decoder_for_TBSCertAVL_entries_Item) {
        _cached_decoder_for_TBSCertAVL_entries_Item = function (
            el: _Element
        ): TBSCertAVL_entries_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let idType!: TBSCertAVL_entries_Item_idType;
            let entryExtensions: OPTIONAL<Extensions>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                idType: (_el: _Element): void => {
                    idType = _decode_TBSCertAVL_entries_Item_idType(_el);
                },
                entryExtensions: (_el: _Element): void => {
                    entryExtensions = $._decode_explicit<Extensions>(
                        () => _decode_Extensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBSCertAVL_entries_Item,
                _extension_additions_list_spec_for_TBSCertAVL_entries_Item,
                _root_component_type_list_2_spec_for_TBSCertAVL_entries_Item,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TBSCertAVL_entries_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
                idType,
                entryExtensions,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TBSCertAVL_entries_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TBSCertAVL_entries_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TBSCertAVL_entries_Item */
let _cached_encoder_for_TBSCertAVL_entries_Item: $.ASN1Encoder<
    TBSCertAVL_entries_Item
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TBSCertAVL_entries_Item */

/* START_OF_SYMBOL_DEFINITION _encode_TBSCertAVL_entries_Item */
/**
 * @summary Encodes a(n) TBSCertAVL_entries_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSCertAVL_entries_Item, encoded as an ASN.1 Element.
 */
export function _encode_TBSCertAVL_entries_Item(
    value: TBSCertAVL_entries_Item,
    elGetter: $.ASN1Encoder<TBSCertAVL_entries_Item>
) {
    if (!_cached_encoder_for_TBSCertAVL_entries_Item) {
        _cached_encoder_for_TBSCertAVL_entries_Item = function (
            value: TBSCertAVL_entries_Item,
            elGetter: $.ASN1Encoder<TBSCertAVL_entries_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_TBSCertAVL_entries_Item_idType(
                                value.idType,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.entryExtensions === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Extensions,
                                      $.BER
                                  )(value.entryExtensions, $.BER),
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
    return _cached_encoder_for_TBSCertAVL_entries_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TBSCertAVL_entries_Item */

/* eslint-enable */
