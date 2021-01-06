/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { CONTEXT } from "../InformationFramework/CONTEXT.oca";

/* START_OF_SYMBOL_DEFINITION DITContextUseInformation */
/**
 * @summary DITContextUseInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DITContextUseInformation ::= SEQUENCE {
 *   mandatoryContexts  [1]  SET SIZE (1..MAX) OF CONTEXT.&id OPTIONAL,
 *   optionalContexts   [2]  SET SIZE (1..MAX) OF CONTEXT.&id OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class DITContextUseInformation {
    constructor(
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
     * @summary Restructures an object into a DITContextUseInformation
     * @description
     *
     * This takes an `object` and converts it to a `DITContextUseInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DITContextUseInformation`.
     * @returns {DITContextUseInformation}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof DITContextUseInformation]: DITContextUseInformation[_K];
            }
        >
    ): DITContextUseInformation {
        return new DITContextUseInformation(
            _o.mandatoryContexts,
            _o.optionalContexts,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION DITContextUseInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DITContextUseInformation */
/**
 * @summary The Leading Root Component Types of DITContextUseInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DITContextUseInformation: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DITContextUseInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DITContextUseInformation */
/**
 * @summary The Trailing Root Component Types of DITContextUseInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DITContextUseInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DITContextUseInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DITContextUseInformation */
/**
 * @summary The Extension Addition Component Types of DITContextUseInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DITContextUseInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DITContextUseInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DITContextUseInformation */
let _cached_decoder_for_DITContextUseInformation: $.ASN1Decoder<DITContextUseInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DITContextUseInformation */

/* START_OF_SYMBOL_DEFINITION _decode_DITContextUseInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) DITContextUseInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DITContextUseInformation} The decoded data structure.
 */
export function _decode_DITContextUseInformation(el: _Element) {
    if (!_cached_decoder_for_DITContextUseInformation) {
        _cached_decoder_for_DITContextUseInformation = function (
            el: _Element
        ): DITContextUseInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let mandatoryContexts: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let optionalContexts: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
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
                _root_component_type_list_1_spec_for_DITContextUseInformation,
                _extension_additions_list_spec_for_DITContextUseInformation,
                _root_component_type_list_2_spec_for_DITContextUseInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DITContextUseInformation(
                /* SEQUENCE_CONSTRUCTOR_CALL */ mandatoryContexts,
                optionalContexts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DITContextUseInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DITContextUseInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DITContextUseInformation */
let _cached_encoder_for_DITContextUseInformation: $.ASN1Encoder<DITContextUseInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DITContextUseInformation */

/* START_OF_SYMBOL_DEFINITION _encode_DITContextUseInformation */
/**
 * @summary Encodes a(n) DITContextUseInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITContextUseInformation, encoded as an ASN.1 Element.
 */
export function _encode_DITContextUseInformation(
    value: DITContextUseInformation,
    elGetter: $.ASN1Encoder<DITContextUseInformation>
) {
    if (!_cached_encoder_for_DITContextUseInformation) {
        _cached_encoder_for_DITContextUseInformation = function (
            value: DITContextUseInformation,
            elGetter: $.ASN1Encoder<DITContextUseInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
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
    return _cached_encoder_for_DITContextUseInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DITContextUseInformation */

/* eslint-enable */
