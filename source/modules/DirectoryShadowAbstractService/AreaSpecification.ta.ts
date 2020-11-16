/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
import {
    SubtreeSpecification,
    _decode_SubtreeSpecification,
    _encode_SubtreeSpecification,
} from "../InformationFramework/SubtreeSpecification.ta";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export {
    SubtreeSpecification,
    _decode_SubtreeSpecification,
    _encode_SubtreeSpecification,
} from "../InformationFramework/SubtreeSpecification.ta";

/* START_OF_SYMBOL_DEFINITION AreaSpecification */
/**
 * @summary AreaSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AreaSpecification ::= SEQUENCE {
 *   contextPrefix    DistinguishedName,
 *   replicationArea  SubtreeSpecification,
 *   ... }
 * ```
 *
 * @class
 */
export class AreaSpecification {
    constructor(
        /**
         * @summary `contextPrefix`.
         * @public
         * @readonly
         */
        readonly contextPrefix: DistinguishedName,
        /**
         * @summary `replicationArea`.
         * @public
         * @readonly
         */
        readonly replicationArea: SubtreeSpecification,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AreaSpecification
     * @description
     *
     * This takes an `object` and converts it to a `AreaSpecification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AreaSpecification`.
     * @returns {AreaSpecification}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AreaSpecification]: AreaSpecification[_K] }>
    ): AreaSpecification {
        return new AreaSpecification(
            _o.contextPrefix,
            _o.replicationArea,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AreaSpecification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AreaSpecification */
/**
 * @summary The Leading Root Component Types of AreaSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AreaSpecification: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "contextPrefix",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "replicationArea",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AreaSpecification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AreaSpecification */
/**
 * @summary The Trailing Root Component Types of AreaSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AreaSpecification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AreaSpecification */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AreaSpecification */
/**
 * @summary The Extension Addition Component Types of AreaSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AreaSpecification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AreaSpecification */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AreaSpecification */
let _cached_decoder_for_AreaSpecification: $.ASN1Decoder<
    AreaSpecification
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AreaSpecification */

/* START_OF_SYMBOL_DEFINITION _decode_AreaSpecification */
/**
 * @summary Decodes an ASN.1 element into a(n) AreaSpecification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AreaSpecification} The decoded data structure.
 */
export function _decode_AreaSpecification(el: _Element) {
    if (!_cached_decoder_for_AreaSpecification) {
        _cached_decoder_for_AreaSpecification = function (
            el: _Element
        ): AreaSpecification {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AreaSpecification contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "contextPrefix";
            sequence[1].name = "replicationArea";
            let contextPrefix!: DistinguishedName;
            let replicationArea!: SubtreeSpecification;
            contextPrefix = _decode_DistinguishedName(sequence[0]);
            replicationArea = _decode_SubtreeSpecification(sequence[1]);
            return new AreaSpecification(
                contextPrefix,
                replicationArea,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_AreaSpecification(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AreaSpecification */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AreaSpecification */
let _cached_encoder_for_AreaSpecification: $.ASN1Encoder<
    AreaSpecification
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AreaSpecification */

/* START_OF_SYMBOL_DEFINITION _encode_AreaSpecification */
/**
 * @summary Encodes a(n) AreaSpecification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AreaSpecification, encoded as an ASN.1 Element.
 */
export function _encode_AreaSpecification(
    value: AreaSpecification,
    elGetter: $.ASN1Encoder<AreaSpecification>
) {
    if (!_cached_encoder_for_AreaSpecification) {
        _cached_encoder_for_AreaSpecification = function (
            value: AreaSpecification,
            elGetter: $.ASN1Encoder<AreaSpecification>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_DistinguishedName(
                                value.contextPrefix,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_SubtreeSpecification(
                                value.replicationArea,
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
    return _cached_encoder_for_AreaSpecification(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AreaSpecification */

/* eslint-enable */
