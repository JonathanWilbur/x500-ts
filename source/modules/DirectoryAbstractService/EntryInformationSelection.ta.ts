/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ContextSelection,
    _decode_ContextSelection,
    _encode_ContextSelection,
} from "../DirectoryAbstractService/ContextSelection.ta";
import {
    EntryInformationSelection_attributes,
    _decode_EntryInformationSelection_attributes,
    _encode_EntryInformationSelection_attributes,
} from "../DirectoryAbstractService/EntryInformationSelection-attributes.ta";
import {
    EntryInformationSelection_extraAttributes,
    _decode_EntryInformationSelection_extraAttributes,
    _encode_EntryInformationSelection_extraAttributes,
} from "../DirectoryAbstractService/EntryInformationSelection-extraAttributes.ta";
import {
    attributeTypesAndValues /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryInformationSelection_infoTypes,
    _decode_EntryInformationSelection_infoTypes,
    _encode_EntryInformationSelection_infoTypes,
} from "../DirectoryAbstractService/EntryInformationSelection-infoTypes.ta";
import {
    FamilyReturn,
    _decode_FamilyReturn,
    _encode_FamilyReturn,
} from "../DirectoryAbstractService/FamilyReturn.ta";
export {
    ContextSelection,
    _decode_ContextSelection,
    _encode_ContextSelection,
} from "../DirectoryAbstractService/ContextSelection.ta";
export {
    EntryInformationSelection_attributes,
    _decode_EntryInformationSelection_attributes,
    _encode_EntryInformationSelection_attributes,
} from "../DirectoryAbstractService/EntryInformationSelection-attributes.ta";
export {
    EntryInformationSelection_extraAttributes,
    _decode_EntryInformationSelection_extraAttributes,
    _encode_EntryInformationSelection_extraAttributes,
} from "../DirectoryAbstractService/EntryInformationSelection-extraAttributes.ta";
export {
    attributeTypesAndValues /* IMPORTED_SHORT_NAMED_INTEGER */,
    attributeTypesOnly /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryInformationSelection_infoTypes,
    EntryInformationSelection_infoTypes_attributeTypesAndValues /* IMPORTED_LONG_NAMED_INTEGER */,
    EntryInformationSelection_infoTypes_attributeTypesOnly /* IMPORTED_LONG_NAMED_INTEGER */,
    _decode_EntryInformationSelection_infoTypes,
    _encode_EntryInformationSelection_infoTypes,
} from "../DirectoryAbstractService/EntryInformationSelection-infoTypes.ta";
export {
    FamilyReturn,
    _decode_FamilyReturn,
    _encode_FamilyReturn,
} from "../DirectoryAbstractService/FamilyReturn.ta";

/* START_OF_SYMBOL_DEFINITION EntryInformationSelection */
/**
 * @summary EntryInformationSelection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryInformationSelection ::= SET {
 *   attributes                     CHOICE {
 *     allUserAttributes         [0]  NULL,
 *     select                    [1]  SET OF AttributeType
 *     -- empty set implies no attributes are requested -- } DEFAULT allUserAttributes:NULL,
 *     infoTypes               [2]  INTEGER {
 *       attributeTypesOnly        (0),
 *       attributeTypesAndValues   (1)} DEFAULT attributeTypesAndValues,
 *   extraAttributes                CHOICE {
 *     allOperationalAttributes  [3]  NULL,
 *     select                    [4]  SET SIZE (1..MAX) OF AttributeType } OPTIONAL,
 *   contextSelection               ContextSelection OPTIONAL,
 *   returnContexts                 BOOLEAN DEFAULT FALSE,
 *   familyReturn                   FamilyReturn DEFAULT
 *                                    {memberSelect contributingEntriesOnly} }
 * ```
 *
 * @class
 */
export class EntryInformationSelection {
    constructor(
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: OPTIONAL<EntryInformationSelection_attributes>,
        /**
         * @summary `infoTypes`.
         * @public
         * @readonly
         */
        readonly infoTypes: OPTIONAL<EntryInformationSelection_infoTypes>,
        /**
         * @summary `extraAttributes`.
         * @public
         * @readonly
         */
        readonly extraAttributes: OPTIONAL<EntryInformationSelection_extraAttributes>,
        /**
         * @summary `contextSelection`.
         * @public
         * @readonly
         */
        readonly contextSelection: OPTIONAL<ContextSelection>,
        /**
         * @summary `returnContexts`.
         * @public
         * @readonly
         */
        readonly returnContexts: OPTIONAL<BOOLEAN>,
        /**
         * @summary `familyReturn`.
         * @public
         * @readonly
         */
        readonly familyReturn: OPTIONAL<FamilyReturn>
    ) {}

    /**
     * @summary Restructures an object into a EntryInformationSelection
     * @description
     *
     * This takes an `object` and converts it to a `EntryInformationSelection`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntryInformationSelection`.
     * @returns {EntryInformationSelection}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof EntryInformationSelection]: EntryInformationSelection[_K];
            }
        >
    ): EntryInformationSelection {
        return new EntryInformationSelection(
            _o.attributes,
            _o.infoTypes,
            _o.extraAttributes,
            _o.contextSelection,
            _o.returnContexts,
            _o.familyReturn
        );
    }

    /**
     * @summary Getter that returns the default value for `attributes`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_attributes() {
        return { allUserAttributes: null };
    }
    /**
     * @summary Getter that returns the default value for `infoTypes`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_infoTypes() {
        return attributeTypesAndValues;
    }
    /**
     * @summary Getter that returns the default value for `returnContexts`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_returnContexts() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `familyReturn`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_familyReturn() {
        return FamilyReturn._from_object({
            memberSelect:
                FamilyReturn._enum_for_memberSelect.contributingEntriesOnly,
        });
    }
}
/* END_OF_SYMBOL_DEFINITION EntryInformationSelection */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EntryInformationSelection */
/**
 * @summary The Leading Root Component Types of EntryInformationSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EntryInformationSelection: $.ComponentSpec[] = [
    new $.ComponentSpec("attributes", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "infoTypes",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "extraAttributes",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contextSelection",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "returnContexts",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "familyReturn",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EntryInformationSelection */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EntryInformationSelection */
/**
 * @summary The Trailing Root Component Types of EntryInformationSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EntryInformationSelection: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EntryInformationSelection */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EntryInformationSelection */
/**
 * @summary The Extension Addition Component Types of EntryInformationSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EntryInformationSelection: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EntryInformationSelection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryInformationSelection */
let _cached_decoder_for_EntryInformationSelection: $.ASN1Decoder<EntryInformationSelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryInformationSelection */

/* START_OF_SYMBOL_DEFINITION _decode_EntryInformationSelection */
/**
 * @summary Decodes an ASN.1 element into a(n) EntryInformationSelection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryInformationSelection} The decoded data structure.
 */
export function _decode_EntryInformationSelection(el: _Element) {
    if (!_cached_decoder_for_EntryInformationSelection) {
        _cached_decoder_for_EntryInformationSelection = function (
            el: _Element
        ): EntryInformationSelection {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let attributes: OPTIONAL<EntryInformationSelection_attributes> =
                EntryInformationSelection._default_value_for_attributes;
            let infoTypes: OPTIONAL<EntryInformationSelection_infoTypes> =
                EntryInformationSelection._default_value_for_infoTypes;
            let extraAttributes: OPTIONAL<EntryInformationSelection_extraAttributes>;
            let contextSelection: OPTIONAL<ContextSelection>;
            let returnContexts: OPTIONAL<BOOLEAN> =
                EntryInformationSelection._default_value_for_returnContexts;
            let familyReturn: OPTIONAL<FamilyReturn> =
                EntryInformationSelection._default_value_for_familyReturn;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                attributes: (_el: _Element): void => {
                    attributes = _decode_EntryInformationSelection_attributes(
                        _el
                    );
                },
                infoTypes: (_el: _Element): void => {
                    infoTypes = $._decode_explicit<EntryInformationSelection_infoTypes>(
                        () => _decode_EntryInformationSelection_infoTypes
                    )(_el);
                },
                extraAttributes: (_el: _Element): void => {
                    extraAttributes = _decode_EntryInformationSelection_extraAttributes(
                        _el
                    );
                },
                contextSelection: (_el: _Element): void => {
                    contextSelection = _decode_ContextSelection(_el);
                },
                returnContexts: (_el: _Element): void => {
                    returnContexts = $._decodeBoolean(_el);
                },
                familyReturn: (_el: _Element): void => {
                    familyReturn = _decode_FamilyReturn(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EntryInformationSelection,
                _extension_additions_list_spec_for_EntryInformationSelection,
                _root_component_type_list_2_spec_for_EntryInformationSelection,
                undefined
            );
            return new EntryInformationSelection(
                /* SET_CONSTRUCTOR_CALL */ attributes,
                infoTypes,
                extraAttributes,
                contextSelection,
                returnContexts,
                familyReturn
            );
        };
    }
    return _cached_decoder_for_EntryInformationSelection(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EntryInformationSelection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryInformationSelection */
let _cached_encoder_for_EntryInformationSelection: $.ASN1Encoder<EntryInformationSelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryInformationSelection */

/* START_OF_SYMBOL_DEFINITION _encode_EntryInformationSelection */
/**
 * @summary Encodes a(n) EntryInformationSelection into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryInformationSelection, encoded as an ASN.1 Element.
 */
export function _encode_EntryInformationSelection(
    value: EntryInformationSelection,
    elGetter: $.ASN1Encoder<EntryInformationSelection>
) {
    if (!_cached_encoder_for_EntryInformationSelection) {
        _cached_encoder_for_EntryInformationSelection = function (
            value: EntryInformationSelection,
            elGetter: $.ASN1Encoder<EntryInformationSelection>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.attributes === undefined ||
                        $.deepEq(
                            value.attributes,
                            EntryInformationSelection._default_value_for_attributes
                        )
                            ? undefined
                            : _encode_EntryInformationSelection_attributes(
                                  value.attributes,
                                  $.BER
                              ),
                        /* IF_DEFAULT */ value.infoTypes === undefined ||
                        $.deepEq(
                            value.infoTypes,
                            EntryInformationSelection._default_value_for_infoTypes
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      _encode_EntryInformationSelection_infoTypes,
                                  $.BER
                              )(value.infoTypes, $.BER),
                        /* IF_ABSENT  */ value.extraAttributes === undefined
                            ? undefined
                            : _encode_EntryInformationSelection_extraAttributes(
                                  value.extraAttributes,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.contextSelection === undefined
                            ? undefined
                            : _encode_ContextSelection(
                                  value.contextSelection,
                                  $.BER
                              ),
                        /* IF_DEFAULT */ value.returnContexts === undefined ||
                        $.deepEq(
                            value.returnContexts,
                            EntryInformationSelection._default_value_for_returnContexts
                        )
                            ? undefined
                            : $._encodeBoolean(value.returnContexts, $.BER),
                        /* IF_DEFAULT */ value.familyReturn === undefined ||
                        $.deepEq(
                            value.familyReturn,
                            EntryInformationSelection._default_value_for_familyReturn
                        )
                            ? undefined
                            : _encode_FamilyReturn(value.familyReturn, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EntryInformationSelection(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EntryInformationSelection */

/* eslint-enable */
