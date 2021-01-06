/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    GeneralSubtrees,
    _decode_GeneralSubtrees,
    _encode_GeneralSubtrees,
} from "../CertificateExtensions/GeneralSubtrees.ta";
export {
    GeneralSubtrees,
    _decode_GeneralSubtrees,
    _encode_GeneralSubtrees,
} from "../CertificateExtensions/GeneralSubtrees.ta";

/* START_OF_SYMBOL_DEFINITION NameConstraintsSyntax */
/**
 * @summary NameConstraintsSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameConstraintsSyntax ::= SEQUENCE {
 *   permittedSubtrees  [0]  GeneralSubtrees OPTIONAL,
 *   excludedSubtrees   [1]  GeneralSubtrees OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS {..., permittedSubtrees  PRESENT } |
 *    WITH COMPONENTS {..., excludedSubtrees   PRESENT } )
 * ```
 *
 * @class
 */
export class NameConstraintsSyntax {
    constructor(
        /**
         * @summary `permittedSubtrees`.
         * @public
         * @readonly
         */
        readonly permittedSubtrees: OPTIONAL<GeneralSubtrees>,
        /**
         * @summary `excludedSubtrees`.
         * @public
         * @readonly
         */
        readonly excludedSubtrees: OPTIONAL<GeneralSubtrees>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NameConstraintsSyntax
     * @description
     *
     * This takes an `object` and converts it to a `NameConstraintsSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NameConstraintsSyntax`.
     * @returns {NameConstraintsSyntax}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof NameConstraintsSyntax]: NameConstraintsSyntax[_K] }
        >
    ): NameConstraintsSyntax {
        return new NameConstraintsSyntax(
            _o.permittedSubtrees,
            _o.excludedSubtrees,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION NameConstraintsSyntax */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NameConstraintsSyntax */
/**
 * @summary The Leading Root Component Types of NameConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NameConstraintsSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "permittedSubtrees",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "excludedSubtrees",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NameConstraintsSyntax */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NameConstraintsSyntax */
/**
 * @summary The Trailing Root Component Types of NameConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NameConstraintsSyntax: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NameConstraintsSyntax */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NameConstraintsSyntax */
/**
 * @summary The Extension Addition Component Types of NameConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NameConstraintsSyntax: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NameConstraintsSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NameConstraintsSyntax */
let _cached_decoder_for_NameConstraintsSyntax: $.ASN1Decoder<NameConstraintsSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NameConstraintsSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_NameConstraintsSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) NameConstraintsSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameConstraintsSyntax} The decoded data structure.
 */
export function _decode_NameConstraintsSyntax(el: _Element) {
    if (!_cached_decoder_for_NameConstraintsSyntax) {
        _cached_decoder_for_NameConstraintsSyntax = function (
            el: _Element
        ): NameConstraintsSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let permittedSubtrees: OPTIONAL<GeneralSubtrees>;
            let excludedSubtrees: OPTIONAL<GeneralSubtrees>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                permittedSubtrees: (_el: _Element): void => {
                    permittedSubtrees = $._decode_implicit<GeneralSubtrees>(
                        () => _decode_GeneralSubtrees
                    )(_el);
                },
                excludedSubtrees: (_el: _Element): void => {
                    excludedSubtrees = $._decode_implicit<GeneralSubtrees>(
                        () => _decode_GeneralSubtrees
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NameConstraintsSyntax,
                _extension_additions_list_spec_for_NameConstraintsSyntax,
                _root_component_type_list_2_spec_for_NameConstraintsSyntax,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new NameConstraintsSyntax(
                /* SEQUENCE_CONSTRUCTOR_CALL */ permittedSubtrees,
                excludedSubtrees,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_NameConstraintsSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NameConstraintsSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NameConstraintsSyntax */
let _cached_encoder_for_NameConstraintsSyntax: $.ASN1Encoder<NameConstraintsSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NameConstraintsSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_NameConstraintsSyntax */
/**
 * @summary Encodes a(n) NameConstraintsSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameConstraintsSyntax, encoded as an ASN.1 Element.
 */
export function _encode_NameConstraintsSyntax(
    value: NameConstraintsSyntax,
    elGetter: $.ASN1Encoder<NameConstraintsSyntax>
) {
    if (!_cached_encoder_for_NameConstraintsSyntax) {
        _cached_encoder_for_NameConstraintsSyntax = function (
            value: NameConstraintsSyntax,
            elGetter: $.ASN1Encoder<NameConstraintsSyntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.permittedSubtrees ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_GeneralSubtrees,
                                      $.BER
                                  )(value.permittedSubtrees, $.BER),
                            /* IF_ABSENT  */ value.excludedSubtrees ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_GeneralSubtrees,
                                      $.BER
                                  )(value.excludedSubtrees, $.BER),
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
    return _cached_encoder_for_NameConstraintsSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NameConstraintsSyntax */

/* eslint-enable */
