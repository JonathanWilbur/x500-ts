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
    CoordinateShadowUpdateArgumentData_updateStrategy,
    _decode_CoordinateShadowUpdateArgumentData_updateStrategy,
    _encode_CoordinateShadowUpdateArgumentData_updateStrategy,
} from "../DirectoryShadowAbstractService/CoordinateShadowUpdateArgumentData-updateStrategy.ta";
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
    CoordinateShadowUpdateArgumentData_updateStrategy,
    _decode_CoordinateShadowUpdateArgumentData_updateStrategy,
    _encode_CoordinateShadowUpdateArgumentData_updateStrategy,
} from "../DirectoryShadowAbstractService/CoordinateShadowUpdateArgumentData-updateStrategy.ta";
export {
    Time,
    _decode_Time,
    _encode_Time,
} from "../DirectoryShadowAbstractService/Time.ta";

/* START_OF_SYMBOL_DEFINITION CoordinateShadowUpdateArgumentData */
/**
 * @summary CoordinateShadowUpdateArgumentData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CoordinateShadowUpdateArgumentData ::= [0]  SEQUENCE {
 *   agreementID         AgreementID,
 *   lastUpdate          Time OPTIONAL,
 *   updateStrategy      CHOICE {
 *     standard            ENUMERATED {
 *       noChanges   (0),
 *       incremental (1),
 *       total       (2),
 *       ...},
 *     other               EXTERNAL,
 *     ...},
 *   securityParameters  SecurityParameters OPTIONAL,
 *   ...}
 * ```
 *
 * @class
 */
export class CoordinateShadowUpdateArgumentData {
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
         * @summary `updateStrategy`.
         * @public
         * @readonly
         */
        readonly updateStrategy: CoordinateShadowUpdateArgumentData_updateStrategy,
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
     * @summary Restructures an object into a CoordinateShadowUpdateArgumentData
     * @description
     *
     * This takes an `object` and converts it to a `CoordinateShadowUpdateArgumentData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CoordinateShadowUpdateArgumentData`.
     * @returns {CoordinateShadowUpdateArgumentData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CoordinateShadowUpdateArgumentData]: CoordinateShadowUpdateArgumentData[_K];
            }
        >
    ): CoordinateShadowUpdateArgumentData {
        return new CoordinateShadowUpdateArgumentData(
            _o.agreementID,
            _o.lastUpdate,
            _o.updateStrategy,
            _o.securityParameters,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CoordinateShadowUpdateArgumentData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CoordinateShadowUpdateArgumentData */
/**
 * @summary The Leading Root Component Types of CoordinateShadowUpdateArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CoordinateShadowUpdateArgumentData: $.ComponentSpec[] = [
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
        "updateStrategy",
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CoordinateShadowUpdateArgumentData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CoordinateShadowUpdateArgumentData */
/**
 * @summary The Trailing Root Component Types of CoordinateShadowUpdateArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CoordinateShadowUpdateArgumentData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CoordinateShadowUpdateArgumentData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CoordinateShadowUpdateArgumentData */
/**
 * @summary The Extension Addition Component Types of CoordinateShadowUpdateArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CoordinateShadowUpdateArgumentData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CoordinateShadowUpdateArgumentData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CoordinateShadowUpdateArgumentData */
let _cached_decoder_for_CoordinateShadowUpdateArgumentData: $.ASN1Decoder<
    CoordinateShadowUpdateArgumentData
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CoordinateShadowUpdateArgumentData */

/* START_OF_SYMBOL_DEFINITION _decode_CoordinateShadowUpdateArgumentData */
/**
 * @summary Decodes an ASN.1 element into a(n) CoordinateShadowUpdateArgumentData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CoordinateShadowUpdateArgumentData} The decoded data structure.
 */
export function _decode_CoordinateShadowUpdateArgumentData(el: _Element) {
    if (!_cached_decoder_for_CoordinateShadowUpdateArgumentData) {
        _cached_decoder_for_CoordinateShadowUpdateArgumentData = $._decode_implicit<
            CoordinateShadowUpdateArgumentData
        >(
            () =>
                function (el: _Element): CoordinateShadowUpdateArgumentData {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let agreementID!: AgreementID;
                    let lastUpdate: OPTIONAL<Time>;
                    let updateStrategy!: CoordinateShadowUpdateArgumentData_updateStrategy;
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
                        updateStrategy: (_el: _Element): void => {
                            updateStrategy = _decode_CoordinateShadowUpdateArgumentData_updateStrategy(
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
                        _root_component_type_list_1_spec_for_CoordinateShadowUpdateArgumentData,
                        _extension_additions_list_spec_for_CoordinateShadowUpdateArgumentData,
                        _root_component_type_list_2_spec_for_CoordinateShadowUpdateArgumentData,
                        (ext: _Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new CoordinateShadowUpdateArgumentData /* SEQUENCE_CONSTRUCTOR_CALL */(
                        agreementID,
                        lastUpdate,
                        updateStrategy,
                        securityParameters,
                        _unrecognizedExtensionsList
                    );
                }
        );
    }
    return _cached_decoder_for_CoordinateShadowUpdateArgumentData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CoordinateShadowUpdateArgumentData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CoordinateShadowUpdateArgumentData */
let _cached_encoder_for_CoordinateShadowUpdateArgumentData: $.ASN1Encoder<
    CoordinateShadowUpdateArgumentData
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CoordinateShadowUpdateArgumentData */

/* START_OF_SYMBOL_DEFINITION _encode_CoordinateShadowUpdateArgumentData */
/**
 * @summary Encodes a(n) CoordinateShadowUpdateArgumentData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CoordinateShadowUpdateArgumentData, encoded as an ASN.1 Element.
 */
export function _encode_CoordinateShadowUpdateArgumentData(
    value: CoordinateShadowUpdateArgumentData,
    elGetter: $.ASN1Encoder<CoordinateShadowUpdateArgumentData>
) {
    if (!_cached_encoder_for_CoordinateShadowUpdateArgumentData) {
        _cached_encoder_for_CoordinateShadowUpdateArgumentData = $._encode_implicit(
            _TagClass.context,
            0,
            () =>
                function (
                    value: CoordinateShadowUpdateArgumentData,
                    elGetter: $.ASN1Encoder<CoordinateShadowUpdateArgumentData>
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
                                    /* REQUIRED   */ _encode_CoordinateShadowUpdateArgumentData_updateStrategy(
                                        value.updateStrategy,
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
    return _cached_encoder_for_CoordinateShadowUpdateArgumentData(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_CoordinateShadowUpdateArgumentData */

/* eslint-enable */
