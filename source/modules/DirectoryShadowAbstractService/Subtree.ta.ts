/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SDSEContent,
    _decode_SDSEContent,
    _encode_SDSEContent,
} from "../DirectoryShadowAbstractService/SDSEContent.ta";
import {
    Subtree,
    _decode_Subtree,
    _encode_Subtree,
} from "../DirectoryShadowAbstractService/Subtree.ta";
import {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "../InformationFramework/RelativeDistinguishedName.ta";
export {
    SDSEContent,
    _decode_SDSEContent,
    _encode_SDSEContent,
} from "../DirectoryShadowAbstractService/SDSEContent.ta";
export {
    Subtree,
    _decode_Subtree,
    _encode_Subtree,
} from "../DirectoryShadowAbstractService/Subtree.ta";
export {
    TotalRefresh,
    _decode_TotalRefresh,
    _encode_TotalRefresh,
} from "../DirectoryShadowAbstractService/TotalRefresh.ta";
export {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "../InformationFramework/RelativeDistinguishedName.ta";

/* START_OF_SYMBOL_DEFINITION Subtree */
// TODO: CHECK_RECURSIVE_DEFINITION
/**
 * @summary Subtree
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Subtree ::= SEQUENCE {
 *   rdn  RelativeDistinguishedName,
 *   COMPONENTS OF TotalRefresh,
 *   ...}
 * ```
 *
 * @class
 */
export class Subtree {
    constructor(
        /**
         * @summary `rdn`.
         * @public
         * @readonly
         */
        readonly rdn: RelativeDistinguishedName,
        /**
         * @summary `sDSE`.
         * @public
         * @readonly
         */
        readonly sDSE: OPTIONAL<SDSEContent> /* REPLICATED_COMPONENT */,
        /**
         * @summary `subtree`.
         * @public
         * @readonly
         */
        readonly subtree: OPTIONAL<Subtree[]> /* REPLICATED_COMPONENT */,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Subtree
     * @description
     *
     * This takes an `object` and converts it to a `Subtree`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Subtree`.
     * @returns {Subtree}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Subtree]: Subtree[_K] }>
    ): Subtree {
        return new Subtree(
            _o.rdn,
            _o.sDSE,
            _o.subtree,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION Subtree */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Subtree */
/**
 * @summary The Leading Root Component Types of Subtree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Subtree: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "rdn",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sDSE",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subtree",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Subtree */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Subtree */
/**
 * @summary The Trailing Root Component Types of Subtree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Subtree: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Subtree */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Subtree */
/**
 * @summary The Extension Addition Component Types of Subtree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Subtree: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Subtree */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Subtree */
let _cached_decoder_for_Subtree: $.ASN1Decoder<Subtree> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Subtree */

/* START_OF_SYMBOL_DEFINITION _decode_Subtree */
/**
 * @summary Decodes an ASN.1 element into a(n) Subtree
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Subtree} The decoded data structure.
 */
export function _decode_Subtree(el: _Element) {
    if (!_cached_decoder_for_Subtree) {
        _cached_decoder_for_Subtree = function (el: _Element): Subtree {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let rdn!: RelativeDistinguishedName;
            let sDSE: OPTIONAL<SDSEContent>;
            let subtree: OPTIONAL<Subtree[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                rdn: (_el: _Element): void => {
                    rdn = _decode_RelativeDistinguishedName(_el);
                },
                sDSE: (_el: _Element): void => {
                    sDSE = _decode_SDSEContent(_el);
                },
                subtree: (_el: _Element): void => {
                    subtree = $._decodeSetOf<Subtree>(() => _decode_Subtree)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Subtree,
                _extension_additions_list_spec_for_Subtree,
                _root_component_type_list_2_spec_for_Subtree,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Subtree /* SEQUENCE_CONSTRUCTOR_CALL */(
                rdn,
                sDSE,
                subtree,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Subtree(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Subtree */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Subtree */
let _cached_encoder_for_Subtree: $.ASN1Encoder<Subtree> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Subtree */

/* START_OF_SYMBOL_DEFINITION _encode_Subtree */
/**
 * @summary Encodes a(n) Subtree into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Subtree, encoded as an ASN.1 Element.
 */
export function _encode_Subtree(
    value: Subtree,
    elGetter: $.ASN1Encoder<Subtree>
) {
    if (!_cached_encoder_for_Subtree) {
        _cached_encoder_for_Subtree = function (
            value: Subtree,
            elGetter: $.ASN1Encoder<Subtree>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_RelativeDistinguishedName(
                                value.rdn,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.sDSE === undefined
                                ? undefined
                                : _encode_SDSEContent(value.sDSE, $.BER),
                            /* IF_ABSENT  */ value.subtree === undefined
                                ? undefined
                                : $._encodeSetOf<Subtree>(
                                      () => _encode_Subtree,
                                      $.BER
                                  )(value.subtree, $.BER),
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
    return _cached_encoder_for_Subtree(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Subtree */

/* eslint-enable */
