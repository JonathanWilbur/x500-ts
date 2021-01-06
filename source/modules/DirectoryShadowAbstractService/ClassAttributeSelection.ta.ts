/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ClassAttributes,
    _decode_ClassAttributes,
    _encode_ClassAttributes,
} from "../DirectoryShadowAbstractService/ClassAttributes.ta";
export {
    ClassAttributes,
    _decode_ClassAttributes,
    _encode_ClassAttributes,
} from "../DirectoryShadowAbstractService/ClassAttributes.ta";

/* START_OF_SYMBOL_DEFINITION ClassAttributeSelection */
/**
 * @summary ClassAttributeSelection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClassAttributeSelection ::= SEQUENCE {
 *   class            OBJECT IDENTIFIER OPTIONAL,
 *   classAttributes  ClassAttributes DEFAULT allAttributes:NULL }
 * ```
 *
 * @class
 */
export class ClassAttributeSelection {
    constructor(
        /**
         * @summary `class_`.
         * @public
         * @readonly
         */
        readonly class_: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `classAttributes`.
         * @public
         * @readonly
         */
        readonly classAttributes: OPTIONAL<ClassAttributes>
    ) {}

    /**
     * @summary Restructures an object into a ClassAttributeSelection
     * @description
     *
     * This takes an `object` and converts it to a `ClassAttributeSelection`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClassAttributeSelection`.
     * @returns {ClassAttributeSelection}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ClassAttributeSelection]: ClassAttributeSelection[_K];
            }
        >
    ): ClassAttributeSelection {
        return new ClassAttributeSelection(_o.class_, _o.classAttributes);
    }

    /**
     * @summary Getter that returns the default value for `classAttributes`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_classAttributes() {
        return { allAttributes: null };
    }
}
/* END_OF_SYMBOL_DEFINITION ClassAttributeSelection */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ClassAttributeSelection */
/**
 * @summary The Leading Root Component Types of ClassAttributeSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ClassAttributeSelection: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "class",
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "classAttributes",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ClassAttributeSelection */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ClassAttributeSelection */
/**
 * @summary The Trailing Root Component Types of ClassAttributeSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ClassAttributeSelection: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ClassAttributeSelection */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ClassAttributeSelection */
/**
 * @summary The Extension Addition Component Types of ClassAttributeSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ClassAttributeSelection: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ClassAttributeSelection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ClassAttributeSelection */
let _cached_decoder_for_ClassAttributeSelection: $.ASN1Decoder<ClassAttributeSelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ClassAttributeSelection */

/* START_OF_SYMBOL_DEFINITION _decode_ClassAttributeSelection */
/**
 * @summary Decodes an ASN.1 element into a(n) ClassAttributeSelection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClassAttributeSelection} The decoded data structure.
 */
export function _decode_ClassAttributeSelection(el: _Element) {
    if (!_cached_decoder_for_ClassAttributeSelection) {
        _cached_decoder_for_ClassAttributeSelection = function (
            el: _Element
        ): ClassAttributeSelection {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let class_: OPTIONAL<OBJECT_IDENTIFIER>;
            let classAttributes: OPTIONAL<ClassAttributes> =
                ClassAttributeSelection._default_value_for_classAttributes;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                class: (_el: _Element): void => {
                    class_ = $._decodeObjectIdentifier(_el);
                },
                classAttributes: (_el: _Element): void => {
                    classAttributes = _decode_ClassAttributes(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ClassAttributeSelection,
                _extension_additions_list_spec_for_ClassAttributeSelection,
                _root_component_type_list_2_spec_for_ClassAttributeSelection,
                undefined
            );
            return new ClassAttributeSelection(
                /* SEQUENCE_CONSTRUCTOR_CALL */ class_,
                classAttributes
            );
        };
    }
    return _cached_decoder_for_ClassAttributeSelection(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ClassAttributeSelection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ClassAttributeSelection */
let _cached_encoder_for_ClassAttributeSelection: $.ASN1Encoder<ClassAttributeSelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ClassAttributeSelection */

/* START_OF_SYMBOL_DEFINITION _encode_ClassAttributeSelection */
/**
 * @summary Encodes a(n) ClassAttributeSelection into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClassAttributeSelection, encoded as an ASN.1 Element.
 */
export function _encode_ClassAttributeSelection(
    value: ClassAttributeSelection,
    elGetter: $.ASN1Encoder<ClassAttributeSelection>
) {
    if (!_cached_encoder_for_ClassAttributeSelection) {
        _cached_encoder_for_ClassAttributeSelection = function (
            value: ClassAttributeSelection,
            elGetter: $.ASN1Encoder<ClassAttributeSelection>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.class_ === undefined
                            ? undefined
                            : $._encodeObjectIdentifier(value.class_, $.BER),
                        /* IF_DEFAULT */ value.classAttributes === undefined ||
                        $.deepEq(
                            value.classAttributes,
                            ClassAttributeSelection._default_value_for_classAttributes
                        )
                            ? undefined
                            : _encode_ClassAttributes(
                                  value.classAttributes,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ClassAttributeSelection(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ClassAttributeSelection */

/* eslint-enable */
