/* eslint-disable */
import { ASN1Element as _Element, OPTIONAL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION ContextInformation */
/**
 * @summary ContextInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContextInformation ::= SEQUENCE {
 *   syntax           UnboundedDirectoryString,
 *   assertionSyntax  UnboundedDirectoryString OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ContextInformation {
    constructor(
        /**
         * @summary `syntax`.
         * @public
         * @readonly
         */
        readonly syntax: UnboundedDirectoryString,
        /**
         * @summary `assertionSyntax`.
         * @public
         * @readonly
         */
        readonly assertionSyntax: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ContextInformation
     * @description
     *
     * This takes an `object` and converts it to a `ContextInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContextInformation`.
     * @returns {ContextInformation}
     */
    public static _from_object(
        _o: { [_K in keyof ContextInformation]: ContextInformation[_K] }
    ): ContextInformation {
        return new ContextInformation(
            _o.syntax,
            _o.assertionSyntax,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ContextInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ContextInformation */
/**
 * @summary The Leading Root Component Types of ContextInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ContextInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("syntax", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "assertionSyntax",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ContextInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ContextInformation */
/**
 * @summary The Trailing Root Component Types of ContextInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ContextInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ContextInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ContextInformation */
/**
 * @summary The Extension Addition Component Types of ContextInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ContextInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ContextInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContextInformation */
let _cached_decoder_for_ContextInformation: $.ASN1Decoder<ContextInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContextInformation */

/* START_OF_SYMBOL_DEFINITION _decode_ContextInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) ContextInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContextInformation} The decoded data structure.
 */
export function _decode_ContextInformation(el: _Element) {
    if (!_cached_decoder_for_ContextInformation) {
        _cached_decoder_for_ContextInformation = function (
            el: _Element
        ): ContextInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let syntax!: UnboundedDirectoryString;
            let assertionSyntax: OPTIONAL<UnboundedDirectoryString>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                syntax: (_el: _Element): void => {
                    syntax = _decode_UnboundedDirectoryString(_el);
                },
                assertionSyntax: (_el: _Element): void => {
                    assertionSyntax = _decode_UnboundedDirectoryString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ContextInformation,
                _extension_additions_list_spec_for_ContextInformation,
                _root_component_type_list_2_spec_for_ContextInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ContextInformation(
                /* SEQUENCE_CONSTRUCTOR_CALL */ syntax,
                assertionSyntax,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ContextInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContextInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContextInformation */
let _cached_encoder_for_ContextInformation: $.ASN1Encoder<ContextInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContextInformation */

/* START_OF_SYMBOL_DEFINITION _encode_ContextInformation */
/**
 * @summary Encodes a(n) ContextInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextInformation, encoded as an ASN.1 Element.
 */
export function _encode_ContextInformation(
    value: ContextInformation,
    elGetter: $.ASN1Encoder<ContextInformation>
) {
    if (!_cached_encoder_for_ContextInformation) {
        _cached_encoder_for_ContextInformation = function (
            value: ContextInformation,
            elGetter: $.ASN1Encoder<ContextInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_UnboundedDirectoryString(
                                value.syntax,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.assertionSyntax === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.assertionSyntax,
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
    return _cached_encoder_for_ContextInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContextInformation */

/* eslint-enable */
