/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    BaseDistance,
    _decode_BaseDistance,
    _encode_BaseDistance,
} from "../AttributeCertificateDefinitions/BaseDistance.ta";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";
export {
    BaseDistance,
    _decode_BaseDistance,
    _encode_BaseDistance,
} from "../AttributeCertificateDefinitions/BaseDistance.ta";
export {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";

/* START_OF_SYMBOL_DEFINITION GeneralSubtree */
/**
 * @summary GeneralSubtree
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralSubtree ::= SEQUENCE {
 *   base          GeneralName,
 *   minimum  [0]  BaseDistance DEFAULT 0,
 *   maximum  [1]  BaseDistance OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class GeneralSubtree {
    constructor(
        /**
         * @summary `base`.
         * @public
         * @readonly
         */
        readonly base: GeneralName,
        /**
         * @summary `minimum`.
         * @public
         * @readonly
         */
        readonly minimum: OPTIONAL<BaseDistance>,
        /**
         * @summary `maximum`.
         * @public
         * @readonly
         */
        readonly maximum: OPTIONAL<BaseDistance>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a GeneralSubtree
     * @description
     *
     * This takes an `object` and converts it to a `GeneralSubtree`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GeneralSubtree`.
     * @returns {GeneralSubtree}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof GeneralSubtree]: GeneralSubtree[_K] }>
    ): GeneralSubtree {
        return new GeneralSubtree(
            _o.base,
            _o.minimum,
            _o.maximum,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `minimum`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_minimum() {
        return 0;
    }
}
/* END_OF_SYMBOL_DEFINITION GeneralSubtree */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GeneralSubtree */
/**
 * @summary The Leading Root Component Types of GeneralSubtree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GeneralSubtree: $.ComponentSpec[] = [
    new $.ComponentSpec("base", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "minimum",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "maximum",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GeneralSubtree */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GeneralSubtree */
/**
 * @summary The Trailing Root Component Types of GeneralSubtree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GeneralSubtree: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GeneralSubtree */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GeneralSubtree */
/**
 * @summary The Extension Addition Component Types of GeneralSubtree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GeneralSubtree: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GeneralSubtree */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralSubtree */
let _cached_decoder_for_GeneralSubtree: $.ASN1Decoder<
    GeneralSubtree
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralSubtree */

/* START_OF_SYMBOL_DEFINITION _decode_GeneralSubtree */
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralSubtree
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralSubtree} The decoded data structure.
 */
export function _decode_GeneralSubtree(el: _Element) {
    if (!_cached_decoder_for_GeneralSubtree) {
        _cached_decoder_for_GeneralSubtree = function (
            el: _Element
        ): GeneralSubtree {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let base!: GeneralName;
            let minimum: OPTIONAL<BaseDistance> =
                GeneralSubtree._default_value_for_minimum;
            let maximum: OPTIONAL<BaseDistance>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                base: (_el: _Element): void => {
                    base = _decode_GeneralName(_el);
                },
                minimum: (_el: _Element): void => {
                    minimum = $._decode_implicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
                maximum: (_el: _Element): void => {
                    maximum = $._decode_implicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_GeneralSubtree,
                _extension_additions_list_spec_for_GeneralSubtree,
                _root_component_type_list_2_spec_for_GeneralSubtree,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new GeneralSubtree /* SEQUENCE_CONSTRUCTOR_CALL */(
                base,
                minimum,
                maximum,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_GeneralSubtree(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GeneralSubtree */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralSubtree */
let _cached_encoder_for_GeneralSubtree: $.ASN1Encoder<
    GeneralSubtree
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralSubtree */

/* START_OF_SYMBOL_DEFINITION _encode_GeneralSubtree */
/**
 * @summary Encodes a(n) GeneralSubtree into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralSubtree, encoded as an ASN.1 Element.
 */
export function _encode_GeneralSubtree(
    value: GeneralSubtree,
    elGetter: $.ASN1Encoder<GeneralSubtree>
) {
    if (!_cached_encoder_for_GeneralSubtree) {
        _cached_encoder_for_GeneralSubtree = function (
            value: GeneralSubtree,
            elGetter: $.ASN1Encoder<GeneralSubtree>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_GeneralName(
                                value.base,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.minimum === undefined ||
                            $.deepEq(
                                value.minimum,
                                GeneralSubtree._default_value_for_minimum
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_BaseDistance,
                                      $.BER
                                  )(value.minimum, $.BER),
                            /* IF_ABSENT  */ value.maximum === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_BaseDistance,
                                      $.BER
                                  )(value.maximum, $.BER),
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
    return _cached_encoder_for_GeneralSubtree(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GeneralSubtree */

/* eslint-enable */
