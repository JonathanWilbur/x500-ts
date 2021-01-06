/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
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

/* START_OF_SYMBOL_DEFINITION AccessPoint */
/**
 * @summary AccessPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessPoint ::= SET {
 *   ae-title             [0]  Name,
 *   address              [1]  PresentationAddress,
 *   protocolInformation  [2]  SET SIZE (1..MAX) OF ProtocolInformation OPTIONAL,
 *   --                   [6]  Not to be used
 *   ... }
 * ```
 *
 * @class
 */
export class AccessPoint {
    constructor(
        /**
         * @summary `ae_title`.
         * @public
         * @readonly
         */
        readonly ae_title: Name,
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: PresentationAddress,
        /**
         * @summary `protocolInformation`.
         * @public
         * @readonly
         */
        readonly protocolInformation: OPTIONAL<ProtocolInformation[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AccessPoint
     * @description
     *
     * This takes an `object` and converts it to a `AccessPoint`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessPoint`.
     * @returns {AccessPoint}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AccessPoint]: AccessPoint[_K] }>
    ): AccessPoint {
        return new AccessPoint(
            _o.ae_title,
            _o.address,
            _o.protocolInformation,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AccessPoint */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AccessPoint */
/**
 * @summary The Leading Root Component Types of AccessPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AccessPoint: $.ComponentSpec[] = [
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
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AccessPoint */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AccessPoint */
/**
 * @summary The Trailing Root Component Types of AccessPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AccessPoint: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AccessPoint */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AccessPoint */
/**
 * @summary The Extension Addition Component Types of AccessPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AccessPoint: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AccessPoint */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AccessPoint */
let _cached_decoder_for_AccessPoint: $.ASN1Decoder<AccessPoint> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AccessPoint */

/* START_OF_SYMBOL_DEFINITION _decode_AccessPoint */
/**
 * @summary Decodes an ASN.1 element into a(n) AccessPoint
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccessPoint} The decoded data structure.
 */
export function _decode_AccessPoint(el: _Element) {
    if (!_cached_decoder_for_AccessPoint) {
        _cached_decoder_for_AccessPoint = function (el: _Element): AccessPoint {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let ae_title!: Name;
            let address!: PresentationAddress;
            let protocolInformation: OPTIONAL<ProtocolInformation[]>;
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
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AccessPoint,
                _extension_additions_list_spec_for_AccessPoint,
                _root_component_type_list_2_spec_for_AccessPoint,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AccessPoint(
                /* SET_CONSTRUCTOR_CALL */ ae_title,
                address,
                protocolInformation,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AccessPoint(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AccessPoint */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AccessPoint */
let _cached_encoder_for_AccessPoint: $.ASN1Encoder<AccessPoint> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AccessPoint */

/* START_OF_SYMBOL_DEFINITION _encode_AccessPoint */
/**
 * @summary Encodes a(n) AccessPoint into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessPoint, encoded as an ASN.1 Element.
 */
export function _encode_AccessPoint(
    value: AccessPoint,
    elGetter: $.ASN1Encoder<AccessPoint>
) {
    if (!_cached_encoder_for_AccessPoint) {
        _cached_encoder_for_AccessPoint = function (
            value: AccessPoint,
            elGetter: $.ASN1Encoder<AccessPoint>
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
    return _cached_encoder_for_AccessPoint(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AccessPoint */

/* eslint-enable */
