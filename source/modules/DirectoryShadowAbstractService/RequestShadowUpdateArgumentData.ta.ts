/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
import {
    AgreementID,
    _decode_AgreementID,
    _encode_AgreementID,
} from "../DirectoryShadowAbstractService/AgreementID.ta";
import {
    RequestShadowUpdateArgumentData_requestedStrategy,
    _decode_RequestShadowUpdateArgumentData_requestedStrategy,
    _encode_RequestShadowUpdateArgumentData_requestedStrategy,
} from "../DirectoryShadowAbstractService/RequestShadowUpdateArgumentData-requestedStrategy.ta";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../DirectoryShadowAbstractService/Time.ta";
export {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
export {
    AgreementID,
    _decode_AgreementID,
    _encode_AgreementID,
} from "../DirectoryShadowAbstractService/AgreementID.ta";
export {
    RequestShadowUpdateArgumentData_requestedStrategy,
    _decode_RequestShadowUpdateArgumentData_requestedStrategy,
    _encode_RequestShadowUpdateArgumentData_requestedStrategy,
} from "../DirectoryShadowAbstractService/RequestShadowUpdateArgumentData-requestedStrategy.ta";
export {
    Time,
    _decode_Time,
    _encode_Time,
} from "../DirectoryShadowAbstractService/Time.ta";

/* START_OF_SYMBOL_DEFINITION RequestShadowUpdateArgumentData */
/**
 * @summary RequestShadowUpdateArgumentData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestShadowUpdateArgumentData ::= [0]  SEQUENCE {
 *   agreementID         AgreementID,
 *   lastUpdate          Time OPTIONAL,
 *   requestedStrategy   CHOICE {
 *     standard  ENUMERATED {
 *       incremental (1),
 *       total       (2),
 *       ...},
 *     other     EXTERNAL,
 *     ...},
 *   securityParameters  SecurityParameters OPTIONAL,
 *   ...}
 * ```
 *
 * @class
 */
export class RequestShadowUpdateArgumentData {
    constructor(
        /**
         * @summary `agreementID`.
         * @public
         * @readonly
         */
        readonly agreementID: AgreementID,
        /**
         * @summary `lastUpdate`.
         * @public
         * @readonly
         */
        readonly lastUpdate: OPTIONAL<Time>,
        /**
         * @summary `requestedStrategy`.
         * @public
         * @readonly
         */
        readonly requestedStrategy: RequestShadowUpdateArgumentData_requestedStrategy,
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<SecurityParameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RequestShadowUpdateArgumentData
     * @description
     *
     * This takes an `object` and converts it to a `RequestShadowUpdateArgumentData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestShadowUpdateArgumentData`.
     * @returns {RequestShadowUpdateArgumentData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof RequestShadowUpdateArgumentData]: RequestShadowUpdateArgumentData[_K];
            }
        >
    ): RequestShadowUpdateArgumentData {
        return new RequestShadowUpdateArgumentData(
            _o.agreementID,
            _o.lastUpdate,
            _o.requestedStrategy,
            _o.securityParameters,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION RequestShadowUpdateArgumentData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RequestShadowUpdateArgumentData */
/**
 * @summary The Leading Root Component Types of RequestShadowUpdateArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RequestShadowUpdateArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "agreementID",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "lastUpdate",
        true,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "requestedStrategy",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RequestShadowUpdateArgumentData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RequestShadowUpdateArgumentData */
/**
 * @summary The Trailing Root Component Types of RequestShadowUpdateArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RequestShadowUpdateArgumentData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RequestShadowUpdateArgumentData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RequestShadowUpdateArgumentData */
/**
 * @summary The Extension Addition Component Types of RequestShadowUpdateArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RequestShadowUpdateArgumentData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RequestShadowUpdateArgumentData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestShadowUpdateArgumentData */
let _cached_decoder_for_RequestShadowUpdateArgumentData: $.ASN1Decoder<
    RequestShadowUpdateArgumentData
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestShadowUpdateArgumentData */

/* START_OF_SYMBOL_DEFINITION _decode_RequestShadowUpdateArgumentData */
/**
 * @summary Decodes an ASN.1 element into a(n) RequestShadowUpdateArgumentData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestShadowUpdateArgumentData} The decoded data structure.
 */
export function _decode_RequestShadowUpdateArgumentData(el: _Element) {
    if (!_cached_decoder_for_RequestShadowUpdateArgumentData) {
        _cached_decoder_for_RequestShadowUpdateArgumentData = $._decode_implicit<
            RequestShadowUpdateArgumentData
        >(
            () =>
                function (el: _Element): RequestShadowUpdateArgumentData {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let agreementID!: AgreementID;
                    let lastUpdate: OPTIONAL<Time>;
                    let requestedStrategy!: RequestShadowUpdateArgumentData_requestedStrategy;
                    let securityParameters: OPTIONAL<SecurityParameters>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        agreementID: (_el: _Element): void => {
                            agreementID = _decode_AgreementID(_el);
                        },
                        lastUpdate: (_el: _Element): void => {
                            lastUpdate = _decode_Time(_el);
                        },
                        requestedStrategy: (_el: _Element): void => {
                            requestedStrategy = _decode_RequestShadowUpdateArgumentData_requestedStrategy(
                                _el
                            );
                        },
                        securityParameters: (_el: _Element): void => {
                            securityParameters = _decode_SecurityParameters(
                                _el
                            );
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_RequestShadowUpdateArgumentData,
                        _extension_additions_list_spec_for_RequestShadowUpdateArgumentData,
                        _root_component_type_list_2_spec_for_RequestShadowUpdateArgumentData,
                        (ext: _Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new RequestShadowUpdateArgumentData /* SEQUENCE_CONSTRUCTOR_CALL */(
                        agreementID,
                        lastUpdate,
                        requestedStrategy,
                        securityParameters,
                        _unrecognizedExtensionsList
                    );
                }
        );
    }
    return _cached_decoder_for_RequestShadowUpdateArgumentData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RequestShadowUpdateArgumentData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestShadowUpdateArgumentData */
let _cached_encoder_for_RequestShadowUpdateArgumentData: $.ASN1Encoder<
    RequestShadowUpdateArgumentData
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestShadowUpdateArgumentData */

/* START_OF_SYMBOL_DEFINITION _encode_RequestShadowUpdateArgumentData */
/**
 * @summary Encodes a(n) RequestShadowUpdateArgumentData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestShadowUpdateArgumentData, encoded as an ASN.1 Element.
 */
export function _encode_RequestShadowUpdateArgumentData(
    value: RequestShadowUpdateArgumentData,
    elGetter: $.ASN1Encoder<RequestShadowUpdateArgumentData>
) {
    if (!_cached_encoder_for_RequestShadowUpdateArgumentData) {
        _cached_encoder_for_RequestShadowUpdateArgumentData = $._encode_implicit(
            _TagClass.context,
            0,
            () =>
                function (
                    value: RequestShadowUpdateArgumentData,
                    elGetter: $.ASN1Encoder<RequestShadowUpdateArgumentData>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_AgreementID(
                                        value.agreementID,
                                        $.BER
                                    ),
                                    /* IF_ABSENT  */ value.lastUpdate ===
                                    undefined
                                        ? undefined
                                        : _encode_Time(value.lastUpdate, $.BER),
                                    /* REQUIRED   */ _encode_RequestShadowUpdateArgumentData_requestedStrategy(
                                        value.requestedStrategy,
                                        $.BER
                                    ),
                                    /* IF_ABSENT  */ value.securityParameters ===
                                    undefined
                                        ? undefined
                                        : _encode_SecurityParameters(
                                              value.securityParameters,
                                              $.BER
                                          ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_RequestShadowUpdateArgumentData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RequestShadowUpdateArgumentData */

/* eslint-enable */
