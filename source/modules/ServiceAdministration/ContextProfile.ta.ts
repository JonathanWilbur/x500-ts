/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { CONTEXT } from "../InformationFramework/CONTEXT.oca";
export { SupportedContexts } from "../InformationFramework/SupportedContexts.osa";

/* START_OF_SYMBOL_DEFINITION ContextProfile */
/**
 * @summary ContextProfile
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContextProfile ::= SEQUENCE {
 *   contextType   CONTEXT.&id({SupportedContexts}),
 *   contextValue  SEQUENCE SIZE (1..MAX) OF CONTEXT.&Assertion
 *                  ({SupportedContexts}{@contextType}) OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ContextProfile {
    constructor(
        /**
         * @summary `contextType`.
         * @public
         * @readonly
         */
        readonly contextType: OBJECT_IDENTIFIER,
        /**
         * @summary `contextValue`.
         * @public
         * @readonly
         */
        readonly contextValue: OPTIONAL<_Element[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ContextProfile
     * @description
     *
     * This takes an `object` and converts it to a `ContextProfile`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContextProfile`.
     * @returns {ContextProfile}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ContextProfile]: ContextProfile[_K] }>
    ): ContextProfile {
        return new ContextProfile(
            _o.contextType,
            _o.contextValue,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ContextProfile */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ContextProfile */
/**
 * @summary The Leading Root Component Types of ContextProfile
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ContextProfile: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "contextType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contextValue",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ContextProfile */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ContextProfile */
/**
 * @summary The Trailing Root Component Types of ContextProfile
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ContextProfile: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ContextProfile */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ContextProfile */
/**
 * @summary The Extension Addition Component Types of ContextProfile
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ContextProfile: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ContextProfile */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContextProfile */
let _cached_decoder_for_ContextProfile: $.ASN1Decoder<
    ContextProfile
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContextProfile */

/* START_OF_SYMBOL_DEFINITION _decode_ContextProfile */
/**
 * @summary Decodes an ASN.1 element into a(n) ContextProfile
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContextProfile} The decoded data structure.
 */
export function _decode_ContextProfile(el: _Element) {
    if (!_cached_decoder_for_ContextProfile) {
        _cached_decoder_for_ContextProfile = function (
            el: _Element
        ): ContextProfile {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let contextType!: OBJECT_IDENTIFIER;
            let contextValue: OPTIONAL<_Element[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                contextType: (_el: _Element): void => {
                    contextType = $._decodeObjectIdentifier(_el);
                },
                contextValue: (_el: _Element): void => {
                    contextValue = $._decodeSequenceOf<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ContextProfile,
                _extension_additions_list_spec_for_ContextProfile,
                _root_component_type_list_2_spec_for_ContextProfile,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ContextProfile /* SEQUENCE_CONSTRUCTOR_CALL */(
                contextType,
                contextValue,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ContextProfile(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContextProfile */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContextProfile */
let _cached_encoder_for_ContextProfile: $.ASN1Encoder<
    ContextProfile
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContextProfile */

/* START_OF_SYMBOL_DEFINITION _encode_ContextProfile */
/**
 * @summary Encodes a(n) ContextProfile into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextProfile, encoded as an ASN.1 Element.
 */
export function _encode_ContextProfile(
    value: ContextProfile,
    elGetter: $.ASN1Encoder<ContextProfile>
) {
    if (!_cached_encoder_for_ContextProfile) {
        _cached_encoder_for_ContextProfile = function (
            value: ContextProfile,
            elGetter: $.ASN1Encoder<ContextProfile>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.contextType,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.contextValue === undefined
                                ? undefined
                                : $._encodeSequenceOf<_Element>(
                                      () => $._encodeAny,
                                      $.BER
                                  )(value.contextValue, $.BER),
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
    return _cached_encoder_for_ContextProfile(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContextProfile */

/* eslint-enable */
