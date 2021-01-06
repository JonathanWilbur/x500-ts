/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    MasterOrShadowAccessPoint_category,
    MasterOrShadowAccessPoint_category_master /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_MasterOrShadowAccessPoint_category,
    _encode_MasterOrShadowAccessPoint_category,
    _enum_for_MasterOrShadowAccessPoint_category,
} from "../DistributedOperations/MasterOrShadowAccessPoint-category.ta";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
import {
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from "../SelectedAttributeTypes/PresentationAddress.ta";
import {
    ProtocolInformation,
    _decode_ProtocolInformation,
    _encode_ProtocolInformation,
} from "../SelectedAttributeTypes/ProtocolInformation.ta";
export {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "../DistributedOperations/AccessPoint.ta";
export {
    master /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    MasterOrShadowAccessPoint_category,
    MasterOrShadowAccessPoint_category_master /* IMPORTED_LONG_ENUMERATION_ITEM */,
    MasterOrShadowAccessPoint_category_shadow /* IMPORTED_LONG_ENUMERATION_ITEM */,
    MasterOrShadowAccessPoint_category_writeableCopy /* IMPORTED_LONG_ENUMERATION_ITEM */,
    shadow /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    writeableCopy /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_MasterOrShadowAccessPoint_category,
    _encode_MasterOrShadowAccessPoint_category,
    _enum_for_MasterOrShadowAccessPoint_category,
} from "../DistributedOperations/MasterOrShadowAccessPoint-category.ta";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
export {
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from "../SelectedAttributeTypes/PresentationAddress.ta";
export {
    ProtocolInformation,
    _decode_ProtocolInformation,
    _encode_ProtocolInformation,
} from "../SelectedAttributeTypes/ProtocolInformation.ta";

/* START_OF_SYMBOL_DEFINITION MasterOrShadowAccessPoint */
/**
 * @summary MasterOrShadowAccessPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MasterOrShadowAccessPoint ::= SET {
 *   COMPONENTS OF          AccessPoint,
 *   category          [3]  ENUMERATED {
 *     master            (0),
 *     shadow            (1),
 *     writeableCopy     (2),
 *     ... } DEFAULT master,
 *   chainingRequired  [5]  BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 * @class
 */
export class MasterOrShadowAccessPoint {
    constructor(
        /**
         * @summary `ae_title`.
         * @public
         * @readonly
         */
        readonly ae_title: Name /* REPLICATED_COMPONENT */,
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: PresentationAddress /* REPLICATED_COMPONENT */,
        /**
         * @summary `protocolInformation`.
         * @public
         * @readonly
         */
        readonly protocolInformation: OPTIONAL<
            ProtocolInformation[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `category`.
         * @public
         * @readonly
         */
        readonly category: OPTIONAL<MasterOrShadowAccessPoint_category>,
        /**
         * @summary `chainingRequired`.
         * @public
         * @readonly
         */
        readonly chainingRequired: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MasterOrShadowAccessPoint
     * @description
     *
     * This takes an `object` and converts it to a `MasterOrShadowAccessPoint`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MasterOrShadowAccessPoint`.
     * @returns {MasterOrShadowAccessPoint}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof MasterOrShadowAccessPoint]: MasterOrShadowAccessPoint[_K];
            }
        >
    ): MasterOrShadowAccessPoint {
        return new MasterOrShadowAccessPoint(
            _o.ae_title,
            _o.address,
            _o.protocolInformation,
            _o.category,
            _o.chainingRequired,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `category`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_category() {
        return MasterOrShadowAccessPoint_category_master;
    }
    /**
     * @summary Getter that returns the default value for `chainingRequired`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_chainingRequired() {
        return false;
    }
    /**
     * @summary The enum used as the type of the component `category`
     * @public
     * @static
     */

    public static _enum_for_category = _enum_for_MasterOrShadowAccessPoint_category;
}
/* END_OF_SYMBOL_DEFINITION MasterOrShadowAccessPoint */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MasterOrShadowAccessPoint */
/**
 * @summary The Leading Root Component Types of MasterOrShadowAccessPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MasterOrShadowAccessPoint: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ae-title",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "address",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "protocolInformation",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "category",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "chainingRequired",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MasterOrShadowAccessPoint */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MasterOrShadowAccessPoint */
/**
 * @summary The Trailing Root Component Types of MasterOrShadowAccessPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MasterOrShadowAccessPoint: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MasterOrShadowAccessPoint */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MasterOrShadowAccessPoint */
/**
 * @summary The Extension Addition Component Types of MasterOrShadowAccessPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MasterOrShadowAccessPoint: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MasterOrShadowAccessPoint */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MasterOrShadowAccessPoint */
let _cached_decoder_for_MasterOrShadowAccessPoint: $.ASN1Decoder<MasterOrShadowAccessPoint> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MasterOrShadowAccessPoint */

/* START_OF_SYMBOL_DEFINITION _decode_MasterOrShadowAccessPoint */
/**
 * @summary Decodes an ASN.1 element into a(n) MasterOrShadowAccessPoint
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MasterOrShadowAccessPoint} The decoded data structure.
 */
export function _decode_MasterOrShadowAccessPoint(el: _Element) {
    if (!_cached_decoder_for_MasterOrShadowAccessPoint) {
        _cached_decoder_for_MasterOrShadowAccessPoint = function (
            el: _Element
        ): MasterOrShadowAccessPoint {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let ae_title!: Name;
            let address!: PresentationAddress;
            let protocolInformation: OPTIONAL<ProtocolInformation[]>;
            let category: OPTIONAL<MasterOrShadowAccessPoint_category> =
                MasterOrShadowAccessPoint._default_value_for_category;
            let chainingRequired: OPTIONAL<BOOLEAN> =
                MasterOrShadowAccessPoint._default_value_for_chainingRequired;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "ae-title": (_el: _Element): void => {
                    ae_title = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                address: (_el: _Element): void => {
                    address = $._decode_explicit<PresentationAddress>(
                        () => _decode_PresentationAddress
                    )(_el);
                },
                protocolInformation: (_el: _Element): void => {
                    protocolInformation = $._decode_explicit<
                        ProtocolInformation[]
                    >(() =>
                        $._decodeSetOf<ProtocolInformation>(
                            () => _decode_ProtocolInformation
                        )
                    )(_el);
                },
                category: (_el: _Element): void => {
                    category = $._decode_explicit<MasterOrShadowAccessPoint_category>(
                        () => _decode_MasterOrShadowAccessPoint_category
                    )(_el);
                },
                chainingRequired: (_el: _Element): void => {
                    chainingRequired = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MasterOrShadowAccessPoint,
                _extension_additions_list_spec_for_MasterOrShadowAccessPoint,
                _root_component_type_list_2_spec_for_MasterOrShadowAccessPoint,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new MasterOrShadowAccessPoint(
                /* SET_CONSTRUCTOR_CALL */ ae_title,
                address,
                protocolInformation,
                category,
                chainingRequired,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_MasterOrShadowAccessPoint(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MasterOrShadowAccessPoint */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MasterOrShadowAccessPoint */
let _cached_encoder_for_MasterOrShadowAccessPoint: $.ASN1Encoder<MasterOrShadowAccessPoint> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MasterOrShadowAccessPoint */

/* START_OF_SYMBOL_DEFINITION _encode_MasterOrShadowAccessPoint */
/**
 * @summary Encodes a(n) MasterOrShadowAccessPoint into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MasterOrShadowAccessPoint, encoded as an ASN.1 Element.
 */
export function _encode_MasterOrShadowAccessPoint(
    value: MasterOrShadowAccessPoint,
    elGetter: $.ASN1Encoder<MasterOrShadowAccessPoint>
) {
    if (!_cached_encoder_for_MasterOrShadowAccessPoint) {
        _cached_encoder_for_MasterOrShadowAccessPoint = function (
            value: MasterOrShadowAccessPoint,
            elGetter: $.ASN1Encoder<MasterOrShadowAccessPoint>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_Name,
                                $.BER
                            )(value.ae_title, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_PresentationAddress,
                                $.BER
                            )(value.address, $.BER),
                            /* IF_ABSENT  */ value.protocolInformation ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<ProtocolInformation>(
                                              () => _encode_ProtocolInformation,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.protocolInformation, $.BER),
                            /* IF_DEFAULT */ value.category === undefined ||
                            $.deepEq(
                                value.category,
                                MasterOrShadowAccessPoint._default_value_for_category
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          _encode_MasterOrShadowAccessPoint_category,
                                      $.BER
                                  )(value.category, $.BER),
                            /* IF_DEFAULT */ value.chainingRequired ===
                                undefined ||
                            $.deepEq(
                                value.chainingRequired,
                                MasterOrShadowAccessPoint._default_value_for_chainingRequired
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.chainingRequired, $.BER),
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
    return _cached_encoder_for_MasterOrShadowAccessPoint(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MasterOrShadowAccessPoint */

/* eslint-enable */
