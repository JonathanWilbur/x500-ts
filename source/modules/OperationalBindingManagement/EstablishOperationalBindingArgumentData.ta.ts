/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
import {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "../DistributedOperations/AccessPoint.ta";
import {
    EstablishOperationalBindingArgumentData_initiator,
    _decode_EstablishOperationalBindingArgumentData_initiator,
    _encode_EstablishOperationalBindingArgumentData_initiator,
} from "../OperationalBindingManagement/EstablishOperationalBindingArgumentData-initiator.ta";
import {
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "../OperationalBindingManagement/OperationalBindingID.ta";
import {
    Validity,
    _decode_Validity,
    _encode_Validity,
} from "../OperationalBindingManagement/Validity.ta";
export {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
export {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "../DistributedOperations/AccessPoint.ta";
export {
    EstablishOperationalBindingArgumentData_initiator,
    _decode_EstablishOperationalBindingArgumentData_initiator,
    _encode_EstablishOperationalBindingArgumentData_initiator,
} from "../OperationalBindingManagement/EstablishOperationalBindingArgumentData-initiator.ta";
export { OpBindingSet } from "../OperationalBindingManagement/OpBindingSet.osa";
export { OPERATIONAL_BINDING } from "../OperationalBindingManagement/OPERATIONAL-BINDING.oca";
export {
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "../OperationalBindingManagement/OperationalBindingID.ta";
export {
    Validity,
    _decode_Validity,
    _encode_Validity,
} from "../OperationalBindingManagement/Validity.ta";

/* START_OF_SYMBOL_DEFINITION EstablishOperationalBindingArgumentData */
/**
 * @summary EstablishOperationalBindingArgumentData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EstablishOperationalBindingArgumentData ::= SEQUENCE {
 *   bindingType        [0]  OPERATIONAL-BINDING.&id({OpBindingSet}),
 *   bindingID          [1]  OperationalBindingID OPTIONAL,
 *   accessPoint        [2]  AccessPoint,
 *                -- symmetric, Role A initiates, or Role B initiates
 *   initiator               CHOICE {
 *     symmetric          [3]  OPERATIONAL-BINDING.&both.&EstablishParam
 *                             ({OpBindingSet}{@bindingType}),
 *     roleA-initiates    [4]  OPERATIONAL-BINDING.&roleA.&EstablishParam
 *                             ({OpBindingSet}{@bindingType}),
 *     roleB-initiates    [5]  OPERATIONAL-BINDING.&roleB.&EstablishParam
 *                               ({OpBindingSet}{@bindingType})},
 *   agreement          [6]  OPERATIONAL-BINDING.&Agreement
 *                             ({OpBindingSet}{@bindingType}),
 *   valid              [7]  Validity DEFAULT {},
 *   securityParameters [8]  SecurityParameters OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class EstablishOperationalBindingArgumentData {
    constructor(
        /**
         * @summary `bindingType`.
         * @public
         * @readonly
         */
        readonly bindingType: OBJECT_IDENTIFIER,
        /**
         * @summary `bindingID`.
         * @public
         * @readonly
         */
        readonly bindingID: OPTIONAL<OperationalBindingID>,
        /**
         * @summary `accessPoint`.
         * @public
         * @readonly
         */
        readonly accessPoint: AccessPoint,
        /**
         * @summary `initiator`.
         * @public
         * @readonly
         */
        readonly initiator: EstablishOperationalBindingArgumentData_initiator,
        /**
         * @summary `agreement`.
         * @public
         * @readonly
         */
        readonly agreement: _Element,
        /**
         * @summary `valid`.
         * @public
         * @readonly
         */
        readonly valid: OPTIONAL<Validity>,
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
     * @summary Restructures an object into a EstablishOperationalBindingArgumentData
     * @description
     *
     * This takes an `object` and converts it to a `EstablishOperationalBindingArgumentData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EstablishOperationalBindingArgumentData`.
     * @returns {EstablishOperationalBindingArgumentData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof EstablishOperationalBindingArgumentData]: EstablishOperationalBindingArgumentData[_K];
            }
        >
    ): EstablishOperationalBindingArgumentData {
        return new EstablishOperationalBindingArgumentData(
            _o.bindingType,
            _o.bindingID,
            _o.accessPoint,
            _o.initiator,
            _o.agreement,
            _o.valid,
            _o.securityParameters,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `valid`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_valid() {
        return Validity._from_object({});
    }
}
/* END_OF_SYMBOL_DEFINITION EstablishOperationalBindingArgumentData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EstablishOperationalBindingArgumentData */
/**
 * @summary The Leading Root Component Types of EstablishOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EstablishOperationalBindingArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "bindingType",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "bindingID",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "accessPoint",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("initiator", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "agreement",
        false,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "valid",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EstablishOperationalBindingArgumentData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EstablishOperationalBindingArgumentData */
/**
 * @summary The Trailing Root Component Types of EstablishOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EstablishOperationalBindingArgumentData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EstablishOperationalBindingArgumentData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EstablishOperationalBindingArgumentData */
/**
 * @summary The Extension Addition Component Types of EstablishOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EstablishOperationalBindingArgumentData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EstablishOperationalBindingArgumentData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EstablishOperationalBindingArgumentData */
let _cached_decoder_for_EstablishOperationalBindingArgumentData: $.ASN1Decoder<EstablishOperationalBindingArgumentData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EstablishOperationalBindingArgumentData */

/* START_OF_SYMBOL_DEFINITION _decode_EstablishOperationalBindingArgumentData */
/**
 * @summary Decodes an ASN.1 element into a(n) EstablishOperationalBindingArgumentData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EstablishOperationalBindingArgumentData} The decoded data structure.
 */
export function _decode_EstablishOperationalBindingArgumentData(el: _Element) {
    if (!_cached_decoder_for_EstablishOperationalBindingArgumentData) {
        _cached_decoder_for_EstablishOperationalBindingArgumentData = function (
            el: _Element
        ): EstablishOperationalBindingArgumentData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let bindingType!: OBJECT_IDENTIFIER;
            let bindingID: OPTIONAL<OperationalBindingID>;
            let accessPoint!: AccessPoint;
            let initiator!: EstablishOperationalBindingArgumentData_initiator;
            let agreement!: _Element;
            let valid: OPTIONAL<Validity> =
                EstablishOperationalBindingArgumentData._default_value_for_valid;
            let securityParameters: OPTIONAL<SecurityParameters>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                bindingType: (_el: _Element): void => {
                    bindingType = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                bindingID: (_el: _Element): void => {
                    bindingID = $._decode_explicit<OperationalBindingID>(
                        () => _decode_OperationalBindingID
                    )(_el);
                },
                accessPoint: (_el: _Element): void => {
                    accessPoint = $._decode_explicit<AccessPoint>(
                        () => _decode_AccessPoint
                    )(_el);
                },
                initiator: (_el: _Element): void => {
                    initiator = _decode_EstablishOperationalBindingArgumentData_initiator(
                        _el
                    );
                },
                agreement: (_el: _Element): void => {
                    agreement = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
                valid: (_el: _Element): void => {
                    valid = $._decode_explicit<Validity>(
                        () => _decode_Validity
                    )(_el);
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EstablishOperationalBindingArgumentData,
                _extension_additions_list_spec_for_EstablishOperationalBindingArgumentData,
                _root_component_type_list_2_spec_for_EstablishOperationalBindingArgumentData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EstablishOperationalBindingArgumentData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ bindingType,
                bindingID,
                accessPoint,
                initiator,
                agreement,
                valid,
                securityParameters,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_EstablishOperationalBindingArgumentData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EstablishOperationalBindingArgumentData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EstablishOperationalBindingArgumentData */
let _cached_encoder_for_EstablishOperationalBindingArgumentData: $.ASN1Encoder<EstablishOperationalBindingArgumentData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EstablishOperationalBindingArgumentData */

/* START_OF_SYMBOL_DEFINITION _encode_EstablishOperationalBindingArgumentData */
/**
 * @summary Encodes a(n) EstablishOperationalBindingArgumentData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishOperationalBindingArgumentData, encoded as an ASN.1 Element.
 */
export function _encode_EstablishOperationalBindingArgumentData(
    value: EstablishOperationalBindingArgumentData,
    elGetter: $.ASN1Encoder<EstablishOperationalBindingArgumentData>
) {
    if (!_cached_encoder_for_EstablishOperationalBindingArgumentData) {
        _cached_encoder_for_EstablishOperationalBindingArgumentData = function (
            value: EstablishOperationalBindingArgumentData,
            elGetter: $.ASN1Encoder<EstablishOperationalBindingArgumentData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => $._encodeObjectIdentifier,
                                $.BER
                            )(value.bindingType, $.BER),
                            /* IF_ABSENT  */ value.bindingID === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_OperationalBindingID,
                                      $.BER
                                  )(value.bindingID, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => _encode_AccessPoint,
                                $.BER
                            )(value.accessPoint, $.BER),
                            /* REQUIRED   */ _encode_EstablishOperationalBindingArgumentData_initiator(
                                value.initiator,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                6,
                                () => $._encodeAny,
                                $.BER
                            )(value.agreement, $.BER),
                            /* IF_DEFAULT */ value.valid === undefined ||
                            $.deepEq(
                                value.valid,
                                EstablishOperationalBindingArgumentData._default_value_for_valid
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_Validity,
                                      $.BER
                                  )(value.valid, $.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () => _encode_SecurityParameters,
                                      $.BER
                                  )(value.securityParameters, $.BER),
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
    return _cached_encoder_for_EstablishOperationalBindingArgumentData(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_EstablishOperationalBindingArgumentData */

/* eslint-enable */
