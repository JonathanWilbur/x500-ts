/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "../DistributedOperations/AccessPoint.ta";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
import {
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "../OperationalBindingManagement/OperationalBindingID.ta";
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
    SupplierOrConsumer,
    _decode_SupplierOrConsumer,
    _encode_SupplierOrConsumer,
} from "../DSAOperationalAttributeTypes/SupplierOrConsumer.ta";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
export {
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "../OperationalBindingManagement/OperationalBindingID.ta";
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

/* START_OF_SYMBOL_DEFINITION SupplierInformation */
/**
 * @summary SupplierInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupplierInformation ::= SET {
 *   COMPONENTS OF              SupplierOrConsumer, -- supplier
 *   supplier-is-master    [4]  BOOLEAN DEFAULT TRUE,
 *   non-supplying-master  [5]  AccessPoint OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class SupplierInformation {
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
         * @summary `agreementID`.
         * @public
         * @readonly
         */
        readonly agreementID: OperationalBindingID /* REPLICATED_COMPONENT */,
        /**
         * @summary `supplier_is_master`.
         * @public
         * @readonly
         */
        readonly supplier_is_master: OPTIONAL<BOOLEAN>,
        /**
         * @summary `non_supplying_master`.
         * @public
         * @readonly
         */
        readonly non_supplying_master: OPTIONAL<AccessPoint>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SupplierInformation
     * @description
     *
     * This takes an `object` and converts it to a `SupplierInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SupplierInformation`.
     * @returns {SupplierInformation}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SupplierInformation]: SupplierInformation[_K] }
        >
    ): SupplierInformation {
        return new SupplierInformation(
            _o.ae_title,
            _o.address,
            _o.protocolInformation,
            _o.agreementID,
            _o.supplier_is_master,
            _o.non_supplying_master,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `supplier_is_master`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_supplier_is_master() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION SupplierInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SupplierInformation */
/**
 * @summary The Leading Root Component Types of SupplierInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SupplierInformation: $.ComponentSpec[] = [
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
        "agreementID",
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "supplier-is-master",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "non-supplying-master",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SupplierInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SupplierInformation */
/**
 * @summary The Trailing Root Component Types of SupplierInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SupplierInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SupplierInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SupplierInformation */
/**
 * @summary The Extension Addition Component Types of SupplierInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SupplierInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SupplierInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SupplierInformation */
let _cached_decoder_for_SupplierInformation: $.ASN1Decoder<SupplierInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SupplierInformation */

/* START_OF_SYMBOL_DEFINITION _decode_SupplierInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) SupplierInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupplierInformation} The decoded data structure.
 */
export function _decode_SupplierInformation(el: _Element) {
    if (!_cached_decoder_for_SupplierInformation) {
        _cached_decoder_for_SupplierInformation = function (
            el: _Element
        ): SupplierInformation {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let ae_title!: Name;
            let address!: PresentationAddress;
            let protocolInformation: OPTIONAL<ProtocolInformation[]>;
            let agreementID!: OperationalBindingID;
            let supplier_is_master: OPTIONAL<BOOLEAN> =
                SupplierInformation._default_value_for_supplier_is_master;
            let non_supplying_master: OPTIONAL<AccessPoint>;
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
                agreementID: (_el: _Element): void => {
                    agreementID = $._decode_explicit<OperationalBindingID>(
                        () => _decode_OperationalBindingID
                    )(_el);
                },
                "supplier-is-master": (_el: _Element): void => {
                    supplier_is_master = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                "non-supplying-master": (_el: _Element): void => {
                    non_supplying_master = $._decode_explicit<AccessPoint>(
                        () => _decode_AccessPoint
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SupplierInformation,
                _extension_additions_list_spec_for_SupplierInformation,
                _root_component_type_list_2_spec_for_SupplierInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SupplierInformation(
                /* SET_CONSTRUCTOR_CALL */ ae_title,
                address,
                protocolInformation,
                agreementID,
                supplier_is_master,
                non_supplying_master,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SupplierInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SupplierInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SupplierInformation */
let _cached_encoder_for_SupplierInformation: $.ASN1Encoder<SupplierInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SupplierInformation */

/* START_OF_SYMBOL_DEFINITION _encode_SupplierInformation */
/**
 * @summary Encodes a(n) SupplierInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupplierInformation, encoded as an ASN.1 Element.
 */
export function _encode_SupplierInformation(
    value: SupplierInformation,
    elGetter: $.ASN1Encoder<SupplierInformation>
) {
    if (!_cached_encoder_for_SupplierInformation) {
        _cached_encoder_for_SupplierInformation = function (
            value: SupplierInformation,
            elGetter: $.ASN1Encoder<SupplierInformation>
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
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                3,
                                () => _encode_OperationalBindingID,
                                $.BER
                            )(value.agreementID, $.BER),
                            /* IF_DEFAULT */ value.supplier_is_master ===
                                undefined ||
                            $.deepEq(
                                value.supplier_is_master,
                                SupplierInformation._default_value_for_supplier_is_master
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.supplier_is_master, $.BER),
                            /* IF_ABSENT  */ value.non_supplying_master ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () => _encode_AccessPoint,
                                      $.BER
                                  )(value.non_supplying_master, $.BER),
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
    return _cached_encoder_for_SupplierInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SupplierInformation */

/* eslint-enable */
