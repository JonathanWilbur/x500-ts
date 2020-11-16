/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    MasterAndShadowAccessPoints,
    _decode_MasterAndShadowAccessPoints,
    _encode_MasterAndShadowAccessPoints,
} from "../DistributedOperations/MasterAndShadowAccessPoints.ta";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export {
    MasterAndShadowAccessPoints,
    _decode_MasterAndShadowAccessPoints,
    _encode_MasterAndShadowAccessPoints,
} from "../DistributedOperations/MasterAndShadowAccessPoints.ta";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION DitBridgeKnowledge */
/**
 * @summary DitBridgeKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DitBridgeKnowledge ::= SEQUENCE {
 *   domainLocalID  UnboundedDirectoryString OPTIONAL,
 *   accessPoints   MasterAndShadowAccessPoints,
 *   ... }
 * ```
 *
 * @class
 */
export class DitBridgeKnowledge {
    constructor(
        /**
         * @summary `domainLocalID`.
         * @public
         * @readonly
         */
        readonly domainLocalID: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary `accessPoints`.
         * @public
         * @readonly
         */
        readonly accessPoints: MasterAndShadowAccessPoints,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DitBridgeKnowledge
     * @description
     *
     * This takes an `object` and converts it to a `DitBridgeKnowledge`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DitBridgeKnowledge`.
     * @returns {DitBridgeKnowledge}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof DitBridgeKnowledge]: DitBridgeKnowledge[_K] }
        >
    ): DitBridgeKnowledge {
        return new DitBridgeKnowledge(
            _o.domainLocalID,
            _o.accessPoints,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION DitBridgeKnowledge */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DitBridgeKnowledge */
/**
 * @summary The Leading Root Component Types of DitBridgeKnowledge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DitBridgeKnowledge: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "domainLocalID",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "accessPoints",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DitBridgeKnowledge */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DitBridgeKnowledge */
/**
 * @summary The Trailing Root Component Types of DitBridgeKnowledge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DitBridgeKnowledge: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DitBridgeKnowledge */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DitBridgeKnowledge */
/**
 * @summary The Extension Addition Component Types of DitBridgeKnowledge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DitBridgeKnowledge: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DitBridgeKnowledge */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DitBridgeKnowledge */
let _cached_decoder_for_DitBridgeKnowledge: $.ASN1Decoder<
    DitBridgeKnowledge
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DitBridgeKnowledge */

/* START_OF_SYMBOL_DEFINITION _decode_DitBridgeKnowledge */
/**
 * @summary Decodes an ASN.1 element into a(n) DitBridgeKnowledge
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DitBridgeKnowledge} The decoded data structure.
 */
export function _decode_DitBridgeKnowledge(el: _Element) {
    if (!_cached_decoder_for_DitBridgeKnowledge) {
        _cached_decoder_for_DitBridgeKnowledge = function (
            el: _Element
        ): DitBridgeKnowledge {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let domainLocalID: OPTIONAL<UnboundedDirectoryString>;
            let accessPoints!: MasterAndShadowAccessPoints;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                domainLocalID: (_el: _Element): void => {
                    domainLocalID = _decode_UnboundedDirectoryString(_el);
                },
                accessPoints: (_el: _Element): void => {
                    accessPoints = _decode_MasterAndShadowAccessPoints(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DitBridgeKnowledge,
                _extension_additions_list_spec_for_DitBridgeKnowledge,
                _root_component_type_list_2_spec_for_DitBridgeKnowledge,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DitBridgeKnowledge /* SEQUENCE_CONSTRUCTOR_CALL */(
                domainLocalID,
                accessPoints,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DitBridgeKnowledge(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DitBridgeKnowledge */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DitBridgeKnowledge */
let _cached_encoder_for_DitBridgeKnowledge: $.ASN1Encoder<
    DitBridgeKnowledge
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DitBridgeKnowledge */

/* START_OF_SYMBOL_DEFINITION _encode_DitBridgeKnowledge */
/**
 * @summary Encodes a(n) DitBridgeKnowledge into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DitBridgeKnowledge, encoded as an ASN.1 Element.
 */
export function _encode_DitBridgeKnowledge(
    value: DitBridgeKnowledge,
    elGetter: $.ASN1Encoder<DitBridgeKnowledge>
) {
    if (!_cached_encoder_for_DitBridgeKnowledge) {
        _cached_encoder_for_DitBridgeKnowledge = function (
            value: DitBridgeKnowledge,
            elGetter: $.ASN1Encoder<DitBridgeKnowledge>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.domainLocalID === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.domainLocalID,
                                      $.BER
                                  ),
                            /* REQUIRED   */ _encode_MasterAndShadowAccessPoints(
                                value.accessPoints,
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
    return _cached_encoder_for_DitBridgeKnowledge(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DitBridgeKnowledge */

/* eslint-enable */
