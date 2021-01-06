/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";

/* START_OF_SYMBOL_DEFINITION SortKey */
/**
 * @summary SortKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SortKey ::= SEQUENCE {
 *   type          AttributeType,
 *   orderingRule  MATCHING-RULE.&id OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class SortKey {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AttributeType,
        /**
         * @summary `orderingRule`.
         * @public
         * @readonly
         */
        readonly orderingRule: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SortKey
     * @description
     *
     * This takes an `object` and converts it to a `SortKey`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SortKey`.
     * @returns {SortKey}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SortKey]: SortKey[_K] }>
    ): SortKey {
        return new SortKey(
            _o.type_,
            _o.orderingRule,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SortKey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SortKey */
/**
 * @summary The Leading Root Component Types of SortKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SortKey: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "orderingRule",
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SortKey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SortKey */
/**
 * @summary The Trailing Root Component Types of SortKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SortKey: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SortKey */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SortKey */
/**
 * @summary The Extension Addition Component Types of SortKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SortKey: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SortKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SortKey */
let _cached_decoder_for_SortKey: $.ASN1Decoder<SortKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SortKey */

/* START_OF_SYMBOL_DEFINITION _decode_SortKey */
/**
 * @summary Decodes an ASN.1 element into a(n) SortKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SortKey} The decoded data structure.
 */
export function _decode_SortKey(el: _Element) {
    if (!_cached_decoder_for_SortKey) {
        _cached_decoder_for_SortKey = function (el: _Element): SortKey {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let type_!: AttributeType;
            let orderingRule: OPTIONAL<OBJECT_IDENTIFIER>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                type: (_el: _Element): void => {
                    type_ = _decode_AttributeType(_el);
                },
                orderingRule: (_el: _Element): void => {
                    orderingRule = $._decodeObjectIdentifier(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SortKey,
                _extension_additions_list_spec_for_SortKey,
                _root_component_type_list_2_spec_for_SortKey,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SortKey(
                /* SEQUENCE_CONSTRUCTOR_CALL */ type_,
                orderingRule,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SortKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SortKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SortKey */
let _cached_encoder_for_SortKey: $.ASN1Encoder<SortKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SortKey */

/* START_OF_SYMBOL_DEFINITION _encode_SortKey */
/**
 * @summary Encodes a(n) SortKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortKey, encoded as an ASN.1 Element.
 */
export function _encode_SortKey(
    value: SortKey,
    elGetter: $.ASN1Encoder<SortKey>
) {
    if (!_cached_encoder_for_SortKey) {
        _cached_encoder_for_SortKey = function (
            value: SortKey,
            elGetter: $.ASN1Encoder<SortKey>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeType(
                                value.type_,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.orderingRule === undefined
                                ? undefined
                                : $._encodeObjectIdentifier(
                                      value.orderingRule,
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
    return _cached_encoder_for_SortKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SortKey */

/* eslint-enable */
