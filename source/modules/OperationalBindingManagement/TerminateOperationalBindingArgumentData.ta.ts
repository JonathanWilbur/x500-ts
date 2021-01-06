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
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "../OperationalBindingManagement/OperationalBindingID.ta";
import {
    TerminateOperationalBindingArgumentData_initiator,
    _decode_TerminateOperationalBindingArgumentData_initiator,
    _encode_TerminateOperationalBindingArgumentData_initiator,
} from "../OperationalBindingManagement/TerminateOperationalBindingArgumentData-initiator.ta";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../OperationalBindingManagement/Time.ta";
export {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
export { OpBindingSet } from "../OperationalBindingManagement/OpBindingSet.osa";
export { OPERATIONAL_BINDING } from "../OperationalBindingManagement/OPERATIONAL-BINDING.oca";
export {
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "../OperationalBindingManagement/OperationalBindingID.ta";
export {
    TerminateOperationalBindingArgumentData_initiator,
    _decode_TerminateOperationalBindingArgumentData_initiator,
    _encode_TerminateOperationalBindingArgumentData_initiator,
} from "../OperationalBindingManagement/TerminateOperationalBindingArgumentData-initiator.ta";
export {
    Time,
    _decode_Time,
    _encode_Time,
} from "../OperationalBindingManagement/Time.ta";

/* START_OF_SYMBOL_DEFINITION TerminateOperationalBindingArgumentData */
/**
 * @summary TerminateOperationalBindingArgumentData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateOperationalBindingArgumentData ::= SEQUENCE {
 *   bindingType         [0]  OPERATIONAL-BINDING.&id({OpBindingSet}),
 *   bindingID           [1]  OperationalBindingID,
 *   -- symmetric, Role A initiates, or Role B initiates
 *   initiator                CHOICE {
 *     symmetric           [2]  OPERATIONAL-BINDING.&both.&TerminateParam
 *                             ({OpBindingSet}{@bindingType}),
 *     roleA-initiates     [3]  OPERATIONAL-BINDING.&roleA.&TerminateParam
 *                             ({OpBindingSet}{@bindingType}),
 *     roleB-initiates     [4]  OPERATIONAL-BINDING.&roleB.&TerminateParam
 *                             ({OpBindingSet}{@bindingType})} OPTIONAL,
 *   terminateAt         [5]  Time OPTIONAL,
 *   securityParameters  [6]  SecurityParameters OPTIONAL,
 *   ...}
 * ```
 *
 * @class
 */
export class TerminateOperationalBindingArgumentData {
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
        readonly bindingID: OperationalBindingID,
        /**
         * @summary `initiator`.
         * @public
         * @readonly
         */
        readonly initiator: OPTIONAL<TerminateOperationalBindingArgumentData_initiator>,
        /**
         * @summary `terminateAt`.
         * @public
         * @readonly
         */
        readonly terminateAt: OPTIONAL<Time>,
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
     * @summary Restructures an object into a TerminateOperationalBindingArgumentData
     * @description
     *
     * This takes an `object` and converts it to a `TerminateOperationalBindingArgumentData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TerminateOperationalBindingArgumentData`.
     * @returns {TerminateOperationalBindingArgumentData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof TerminateOperationalBindingArgumentData]: TerminateOperationalBindingArgumentData[_K];
            }
        >
    ): TerminateOperationalBindingArgumentData {
        return new TerminateOperationalBindingArgumentData(
            _o.bindingType,
            _o.bindingID,
            _o.initiator,
            _o.terminateAt,
            _o.securityParameters,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION TerminateOperationalBindingArgumentData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TerminateOperationalBindingArgumentData */
/**
 * @summary The Leading Root Component Types of TerminateOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TerminateOperationalBindingArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "bindingType",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "bindingID",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec("initiator", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "terminateAt",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TerminateOperationalBindingArgumentData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TerminateOperationalBindingArgumentData */
/**
 * @summary The Trailing Root Component Types of TerminateOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TerminateOperationalBindingArgumentData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TerminateOperationalBindingArgumentData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TerminateOperationalBindingArgumentData */
/**
 * @summary The Extension Addition Component Types of TerminateOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TerminateOperationalBindingArgumentData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TerminateOperationalBindingArgumentData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminateOperationalBindingArgumentData */
let _cached_decoder_for_TerminateOperationalBindingArgumentData: $.ASN1Decoder<TerminateOperationalBindingArgumentData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminateOperationalBindingArgumentData */

/* START_OF_SYMBOL_DEFINITION _decode_TerminateOperationalBindingArgumentData */
/**
 * @summary Decodes an ASN.1 element into a(n) TerminateOperationalBindingArgumentData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminateOperationalBindingArgumentData} The decoded data structure.
 */
export function _decode_TerminateOperationalBindingArgumentData(el: _Element) {
    if (!_cached_decoder_for_TerminateOperationalBindingArgumentData) {
        _cached_decoder_for_TerminateOperationalBindingArgumentData = function (
            el: _Element
        ): TerminateOperationalBindingArgumentData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let bindingType!: OBJECT_IDENTIFIER;
            let bindingID!: OperationalBindingID;
            let initiator: OPTIONAL<TerminateOperationalBindingArgumentData_initiator>;
            let terminateAt: OPTIONAL<Time>;
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
                initiator: (_el: _Element): void => {
                    initiator = _decode_TerminateOperationalBindingArgumentData_initiator(
                        _el
                    );
                },
                terminateAt: (_el: _Element): void => {
                    terminateAt = $._decode_explicit<Time>(() => _decode_Time)(
                        _el
                    );
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
                _root_component_type_list_1_spec_for_TerminateOperationalBindingArgumentData,
                _extension_additions_list_spec_for_TerminateOperationalBindingArgumentData,
                _root_component_type_list_2_spec_for_TerminateOperationalBindingArgumentData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TerminateOperationalBindingArgumentData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ bindingType,
                bindingID,
                initiator,
                terminateAt,
                securityParameters,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TerminateOperationalBindingArgumentData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TerminateOperationalBindingArgumentData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminateOperationalBindingArgumentData */
let _cached_encoder_for_TerminateOperationalBindingArgumentData: $.ASN1Encoder<TerminateOperationalBindingArgumentData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminateOperationalBindingArgumentData */

/* START_OF_SYMBOL_DEFINITION _encode_TerminateOperationalBindingArgumentData */
/**
 * @summary Encodes a(n) TerminateOperationalBindingArgumentData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminateOperationalBindingArgumentData, encoded as an ASN.1 Element.
 */
export function _encode_TerminateOperationalBindingArgumentData(
    value: TerminateOperationalBindingArgumentData,
    elGetter: $.ASN1Encoder<TerminateOperationalBindingArgumentData>
) {
    if (!_cached_encoder_for_TerminateOperationalBindingArgumentData) {
        _cached_encoder_for_TerminateOperationalBindingArgumentData = function (
            value: TerminateOperationalBindingArgumentData,
            elGetter: $.ASN1Encoder<TerminateOperationalBindingArgumentData>
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
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_OperationalBindingID,
                                $.BER
                            )(value.bindingID, $.BER),
                            /* IF_ABSENT  */ value.initiator === undefined
                                ? undefined
                                : _encode_TerminateOperationalBindingArgumentData_initiator(
                                      value.initiator,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.terminateAt === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () => _encode_Time,
                                      $.BER
                                  )(value.terminateAt, $.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      6,
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
    return _cached_encoder_for_TerminateOperationalBindingArgumentData(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_TerminateOperationalBindingArgumentData */

/* eslint-enable */
