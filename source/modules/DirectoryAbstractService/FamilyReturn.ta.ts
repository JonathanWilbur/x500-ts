/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    FamilyReturn_memberSelect,
    _decode_FamilyReturn_memberSelect,
    _encode_FamilyReturn_memberSelect,
    _enum_for_FamilyReturn_memberSelect,
} from "../DirectoryAbstractService/FamilyReturn-memberSelect.ta";
export {
    compoundEntry /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    contributingEntriesOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    FamilyReturn_memberSelect,
    FamilyReturn_memberSelect_compoundEntry /* IMPORTED_LONG_ENUMERATION_ITEM */,
    FamilyReturn_memberSelect_contributingEntriesOnly /* IMPORTED_LONG_ENUMERATION_ITEM */,
    FamilyReturn_memberSelect_participatingEntriesOnly /* IMPORTED_LONG_ENUMERATION_ITEM */,
    participatingEntriesOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_FamilyReturn_memberSelect,
    _encode_FamilyReturn_memberSelect,
    _enum_for_FamilyReturn_memberSelect,
} from "../DirectoryAbstractService/FamilyReturn-memberSelect.ta";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION FamilyReturn */
/**
 * @summary FamilyReturn
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FamilyReturn ::= SEQUENCE {
 *   memberSelect   ENUMERATED {
 *     contributingEntriesOnly   (1),
 *     participatingEntriesOnly  (2),
 *     compoundEntry             (3),
 *     ...},
 *   familySelect   SEQUENCE SIZE (1..MAX) OF OBJECT-CLASS.&id OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class FamilyReturn {
    constructor(
        /**
         * @summary `memberSelect`.
         * @public
         * @readonly
         */
        readonly memberSelect: FamilyReturn_memberSelect,
        /**
         * @summary `familySelect`.
         * @public
         * @readonly
         */
        readonly familySelect: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a FamilyReturn
     * @description
     *
     * This takes an `object` and converts it to a `FamilyReturn`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FamilyReturn`.
     * @returns {FamilyReturn}
     */
    public static _from_object(
        _o: { [_K in keyof FamilyReturn]: FamilyReturn[_K] }
    ): FamilyReturn {
        return new FamilyReturn(
            _o.memberSelect,
            _o.familySelect,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `memberSelect`
     * @public
     * @static
     */

    public static _enum_for_memberSelect = _enum_for_FamilyReturn_memberSelect;
}
/* END_OF_SYMBOL_DEFINITION FamilyReturn */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FamilyReturn */
/**
 * @summary The Leading Root Component Types of FamilyReturn
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FamilyReturn: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "memberSelect",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "familySelect",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FamilyReturn */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FamilyReturn */
/**
 * @summary The Trailing Root Component Types of FamilyReturn
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FamilyReturn: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FamilyReturn */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FamilyReturn */
/**
 * @summary The Extension Addition Component Types of FamilyReturn
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FamilyReturn: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FamilyReturn */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FamilyReturn */
let _cached_decoder_for_FamilyReturn: $.ASN1Decoder<FamilyReturn> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FamilyReturn */

/* START_OF_SYMBOL_DEFINITION _decode_FamilyReturn */
/**
 * @summary Decodes an ASN.1 element into a(n) FamilyReturn
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FamilyReturn} The decoded data structure.
 */
export function _decode_FamilyReturn(el: _Element) {
    if (!_cached_decoder_for_FamilyReturn) {
        _cached_decoder_for_FamilyReturn = function (
            el: _Element
        ): FamilyReturn {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let memberSelect!: FamilyReturn_memberSelect;
            let familySelect: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                memberSelect: (_el: _Element): void => {
                    memberSelect = _decode_FamilyReturn_memberSelect(_el);
                },
                familySelect: (_el: _Element): void => {
                    familySelect = $._decodeSequenceOf<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FamilyReturn,
                _extension_additions_list_spec_for_FamilyReturn,
                _root_component_type_list_2_spec_for_FamilyReturn,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new FamilyReturn(
                /* SEQUENCE_CONSTRUCTOR_CALL */ memberSelect,
                familySelect,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_FamilyReturn(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FamilyReturn */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FamilyReturn */
let _cached_encoder_for_FamilyReturn: $.ASN1Encoder<FamilyReturn> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FamilyReturn */

/* START_OF_SYMBOL_DEFINITION _encode_FamilyReturn */
/**
 * @summary Encodes a(n) FamilyReturn into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FamilyReturn, encoded as an ASN.1 Element.
 */
export function _encode_FamilyReturn(
    value: FamilyReturn,
    elGetter: $.ASN1Encoder<FamilyReturn>
) {
    if (!_cached_encoder_for_FamilyReturn) {
        _cached_encoder_for_FamilyReturn = function (
            value: FamilyReturn,
            elGetter: $.ASN1Encoder<FamilyReturn>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_FamilyReturn_memberSelect(
                                value.memberSelect,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.familySelect === undefined
                                ? undefined
                                : $._encodeSequenceOf<OBJECT_IDENTIFIER>(
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.familySelect, $.BER),
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
    return _cached_encoder_for_FamilyReturn(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FamilyReturn */

/* eslint-enable */
