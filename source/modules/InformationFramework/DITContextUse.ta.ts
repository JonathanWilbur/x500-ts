/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { CONTEXT } from "../InformationFramework/CONTEXT.oca";

/* START_OF_SYMBOL_DEFINITION DITContextUse */
/**
 * @summary DITContextUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DITContextUse ::= SEQUENCE {
 *   attributeType           ATTRIBUTE.&id,
 *   mandatoryContexts  [1]  SET SIZE (1..MAX) OF CONTEXT.&id OPTIONAL,
 *   optionalContexts   [2]  SET SIZE (1..MAX) OF CONTEXT.&id OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class DITContextUse {
    constructor(
        /**
         * @summary `attributeType`.
         * @public
         * @readonly
         */
        readonly attributeType: OBJECT_IDENTIFIER,
        /**
         * @summary `mandatoryContexts`.
         * @public
         * @readonly
         */
        readonly mandatoryContexts: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `optionalContexts`.
         * @public
         * @readonly
         */
        readonly optionalContexts: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DITContextUse
     * @description
     *
     * This takes an `object` and converts it to a `DITContextUse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DITContextUse`.
     * @returns {DITContextUse}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DITContextUse]: DITContextUse[_K] }>
    ): DITContextUse {
        return new DITContextUse(
            _o.attributeType,
            _o.mandatoryContexts,
            _o.optionalContexts,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION DITContextUse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DITContextUse */
/**
 * @summary The Leading Root Component Types of DITContextUse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DITContextUse: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "attributeType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "mandatoryContexts",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "optionalContexts",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DITContextUse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DITContextUse */
/**
 * @summary The Trailing Root Component Types of DITContextUse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DITContextUse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DITContextUse */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DITContextUse */
/**
 * @summary The Extension Addition Component Types of DITContextUse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DITContextUse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DITContextUse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DITContextUse */
let _cached_decoder_for_DITContextUse: $.ASN1Decoder<
    DITContextUse
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DITContextUse */

/* START_OF_SYMBOL_DEFINITION _decode_DITContextUse */
/**
 * @summary Decodes an ASN.1 element into a(n) DITContextUse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DITContextUse} The decoded data structure.
 */
export function _decode_DITContextUse(el: _Element) {
    if (!_cached_decoder_for_DITContextUse) {
        _cached_decoder_for_DITContextUse = function (
            el: _Element
        ): DITContextUse {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attributeType!: OBJECT_IDENTIFIER;
            let mandatoryContexts: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let optionalContexts: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                attributeType: (_el: _Element): void => {
                    attributeType = $._decodeObjectIdentifier(_el);
                },
                mandatoryContexts: (_el: _Element): void => {
                    mandatoryContexts = $._decode_explicit<OBJECT_IDENTIFIER[]>(
                        () =>
                            $._decodeSetOf<OBJECT_IDENTIFIER>(
                                () => $._decodeObjectIdentifier
                            )
                    )(_el);
                },
                optionalContexts: (_el: _Element): void => {
                    optionalContexts = $._decode_explicit<OBJECT_IDENTIFIER[]>(
                        () =>
                            $._decodeSetOf<OBJECT_IDENTIFIER>(
                                () => $._decodeObjectIdentifier
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DITContextUse,
                _extension_additions_list_spec_for_DITContextUse,
                _root_component_type_list_2_spec_for_DITContextUse,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DITContextUse /* SEQUENCE_CONSTRUCTOR_CALL */(
                attributeType,
                mandatoryContexts,
                optionalContexts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DITContextUse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DITContextUse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DITContextUse */
let _cached_encoder_for_DITContextUse: $.ASN1Encoder<
    DITContextUse
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DITContextUse */

/* START_OF_SYMBOL_DEFINITION _encode_DITContextUse */
/**
 * @summary Encodes a(n) DITContextUse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITContextUse, encoded as an ASN.1 Element.
 */
export function _encode_DITContextUse(
    value: DITContextUse,
    elGetter: $.ASN1Encoder<DITContextUse>
) {
    if (!_cached_encoder_for_DITContextUse) {
        _cached_encoder_for_DITContextUse = function (
            value: DITContextUse,
            elGetter: $.ASN1Encoder<DITContextUse>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.attributeType,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.mandatoryContexts ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.mandatoryContexts, $.BER),
                            /* IF_ABSENT  */ value.optionalContexts ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.optionalContexts, $.BER),
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
    return _cached_encoder_for_DITContextUse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DITContextUse */

/* eslint-enable */
