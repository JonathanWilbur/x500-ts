/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ContextProfile,
    _decode_ContextProfile,
    _encode_ContextProfile,
} from "../ServiceAdministration/ContextProfile.ta";
import {
    ResultAttribute_outputValues,
    _decode_ResultAttribute_outputValues,
    _encode_ResultAttribute_outputValues,
} from "../ServiceAdministration/ResultAttribute-outputValues.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { SupportedAttributes } from "../InformationFramework/SupportedAttributes.osa";
export {
    ContextProfile,
    _decode_ContextProfile,
    _encode_ContextProfile,
} from "../ServiceAdministration/ContextProfile.ta";
export {
    ResultAttribute_outputValues,
    _decode_ResultAttribute_outputValues,
    _encode_ResultAttribute_outputValues,
} from "../ServiceAdministration/ResultAttribute-outputValues.ta";

/* START_OF_SYMBOL_DEFINITION ResultAttribute */
/**
 * @summary ResultAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultAttribute ::= SEQUENCE {
 *   attributeType      ATTRIBUTE.&id({SupportedAttributes}),
 *   outputValues       CHOICE {
 *     selectedValues     SEQUENCE OF ATTRIBUTE.&Type
 *                        ({SupportedAttributes}{@attributeType}),
 *     matchedValuesOnly  NULL } OPTIONAL,
 *   contexts      [0]  SEQUENCE SIZE (1..MAX) OF ContextProfile OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ResultAttribute {
    constructor(
        /**
         * @summary `attributeType`.
         * @public
         * @readonly
         */
        readonly attributeType: OBJECT_IDENTIFIER,
        /**
         * @summary `outputValues`.
         * @public
         * @readonly
         */
        readonly outputValues: OPTIONAL<ResultAttribute_outputValues>,
        /**
         * @summary `contexts`.
         * @public
         * @readonly
         */
        readonly contexts: OPTIONAL<ContextProfile[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ResultAttribute
     * @description
     *
     * This takes an `object` and converts it to a `ResultAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResultAttribute`.
     * @returns {ResultAttribute}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ResultAttribute]: ResultAttribute[_K] }>
    ): ResultAttribute {
        return new ResultAttribute(
            _o.attributeType,
            _o.outputValues,
            _o.contexts,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ResultAttribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ResultAttribute */
/**
 * @summary The Leading Root Component Types of ResultAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ResultAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "attributeType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "outputValues",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contexts",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ResultAttribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ResultAttribute */
/**
 * @summary The Trailing Root Component Types of ResultAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResultAttribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ResultAttribute */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ResultAttribute */
/**
 * @summary The Extension Addition Component Types of ResultAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResultAttribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ResultAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResultAttribute */
let _cached_decoder_for_ResultAttribute: $.ASN1Decoder<ResultAttribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResultAttribute */

/* START_OF_SYMBOL_DEFINITION _decode_ResultAttribute */
/**
 * @summary Decodes an ASN.1 element into a(n) ResultAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResultAttribute} The decoded data structure.
 */
export function _decode_ResultAttribute(el: _Element) {
    if (!_cached_decoder_for_ResultAttribute) {
        _cached_decoder_for_ResultAttribute = function (
            el: _Element
        ): ResultAttribute {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attributeType!: OBJECT_IDENTIFIER;
            let outputValues: OPTIONAL<ResultAttribute_outputValues>;
            let contexts: OPTIONAL<ContextProfile[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                attributeType: (_el: _Element): void => {
                    attributeType = $._decodeObjectIdentifier(_el);
                },
                outputValues: (_el: _Element): void => {
                    outputValues = _decode_ResultAttribute_outputValues(_el);
                },
                contexts: (_el: _Element): void => {
                    contexts = $._decode_explicit<ContextProfile[]>(() =>
                        $._decodeSequenceOf<ContextProfile>(
                            () => _decode_ContextProfile
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ResultAttribute,
                _extension_additions_list_spec_for_ResultAttribute,
                _root_component_type_list_2_spec_for_ResultAttribute,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ResultAttribute(
                /* SEQUENCE_CONSTRUCTOR_CALL */ attributeType,
                outputValues,
                contexts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ResultAttribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResultAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResultAttribute */
let _cached_encoder_for_ResultAttribute: $.ASN1Encoder<ResultAttribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResultAttribute */

/* START_OF_SYMBOL_DEFINITION _encode_ResultAttribute */
/**
 * @summary Encodes a(n) ResultAttribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultAttribute, encoded as an ASN.1 Element.
 */
export function _encode_ResultAttribute(
    value: ResultAttribute,
    elGetter: $.ASN1Encoder<ResultAttribute>
) {
    if (!_cached_encoder_for_ResultAttribute) {
        _cached_encoder_for_ResultAttribute = function (
            value: ResultAttribute,
            elGetter: $.ASN1Encoder<ResultAttribute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.attributeType,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.outputValues === undefined
                                ? undefined
                                : _encode_ResultAttribute_outputValues(
                                      value.outputValues,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.contexts === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () =>
                                          $._encodeSequenceOf<ContextProfile>(
                                              () => _encode_ContextProfile,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.contexts, $.BER),
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
    return _cached_encoder_for_ResultAttribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResultAttribute */

/* eslint-enable */
