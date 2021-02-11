/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
import {
    ShadowProblem,
    _decode_ShadowProblem,
    _encode_ShadowProblem,
} from "../DirectoryShadowAbstractService/ShadowProblem.ta";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../DirectoryShadowAbstractService/Time.ta";
import {
    UpdateWindow,
    _decode_UpdateWindow,
    _encode_UpdateWindow,
} from "../DirectoryShadowAbstractService/UpdateWindow.ta";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export {
    CommonResultsSeq,
    _decode_CommonResultsSeq,
    _encode_CommonResultsSeq,
} from "../DirectoryAbstractService/CommonResultsSeq.ta";
export {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
export {
    fullUpdateRequired /* IMPORTED_SHORT_NAMED_INTEGER */,
    inactiveAgreement /* IMPORTED_SHORT_NAMED_INTEGER */,
    insufficientResources /* IMPORTED_SHORT_NAMED_INTEGER */,
    invalidAgreementID /* IMPORTED_SHORT_NAMED_INTEGER */,
    invalidInformationReceived /* IMPORTED_SHORT_NAMED_INTEGER */,
    invalidSequencing /* IMPORTED_SHORT_NAMED_INTEGER */,
    missedPrevious /* IMPORTED_SHORT_NAMED_INTEGER */,
    ShadowProblem,
    ShadowProblem_fullUpdateRequired /* IMPORTED_LONG_NAMED_INTEGER */,
    ShadowProblem_inactiveAgreement /* IMPORTED_LONG_NAMED_INTEGER */,
    ShadowProblem_insufficientResources /* IMPORTED_LONG_NAMED_INTEGER */,
    ShadowProblem_invalidAgreementID /* IMPORTED_LONG_NAMED_INTEGER */,
    ShadowProblem_invalidInformationReceived /* IMPORTED_LONG_NAMED_INTEGER */,
    ShadowProblem_invalidSequencing /* IMPORTED_LONG_NAMED_INTEGER */,
    ShadowProblem_missedPrevious /* IMPORTED_LONG_NAMED_INTEGER */,
    ShadowProblem_unsuitableTiming /* IMPORTED_LONG_NAMED_INTEGER */,
    ShadowProblem_unsupportedStrategy /* IMPORTED_LONG_NAMED_INTEGER */,
    ShadowProblem_unwillingToPerform /* IMPORTED_LONG_NAMED_INTEGER */,
    ShadowProblem_updateAlreadyReceived /* IMPORTED_LONG_NAMED_INTEGER */,
    unsuitableTiming /* IMPORTED_SHORT_NAMED_INTEGER */,
    unsupportedStrategy /* IMPORTED_SHORT_NAMED_INTEGER */,
    unwillingToPerform /* IMPORTED_SHORT_NAMED_INTEGER */,
    updateAlreadyReceived /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ShadowProblem,
    _encode_ShadowProblem,
} from "../DirectoryShadowAbstractService/ShadowProblem.ta";
export {
    Time,
    _decode_Time,
    _encode_Time,
} from "../DirectoryShadowAbstractService/Time.ta";
export {
    UpdateWindow,
    _decode_UpdateWindow,
    _encode_UpdateWindow,
} from "../DirectoryShadowAbstractService/UpdateWindow.ta";
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";

/* START_OF_SYMBOL_DEFINITION ShadowErrorData */
/**
 * @summary ShadowErrorData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ShadowErrorData ::= SEQUENCE {
 *   problem       ShadowProblem,
 *   lastUpdate    Time OPTIONAL,
 *   updateWindow  UpdateWindow OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }
 * ```
 *
 * @class
 */
export class ShadowErrorData {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: ShadowProblem,
        /**
         * @summary `lastUpdate`.
         * @public
         * @readonly
         */
        readonly lastUpdate: OPTIONAL<Time>,
        /**
         * @summary `updateWindow`.
         * @public
         * @readonly
         */
        readonly updateWindow: OPTIONAL<UpdateWindow>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<SecurityParameters> /* REPLICATED_COMPONENT */,
        /**
         * @summary `performer`.
         * @public
         * @readonly
         */
        readonly performer: OPTIONAL<DistinguishedName> /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a ShadowErrorData
     * @description
     *
     * This takes an `object` and converts it to a `ShadowErrorData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ShadowErrorData`.
     * @returns {ShadowErrorData}
     */
    public static _from_object(
        _o: { [_K in keyof ShadowErrorData]: ShadowErrorData[_K] }
    ): ShadowErrorData {
        return new ShadowErrorData(
            _o.problem,
            _o.lastUpdate,
            _o.updateWindow,
            _o._unrecognizedExtensionsList,
            _o.securityParameters,
            _o.performer,
            _o.aliasDereferenced,
            _o.notification
        );
    }

    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION ShadowErrorData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ShadowErrorData */
/**
 * @summary The Leading Root Component Types of ShadowErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ShadowErrorData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "problem",
        false,
        $.hasTag(_TagClass.universal, 2),
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
        "updateWindow",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ShadowErrorData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ShadowErrorData */
/**
 * @summary The Trailing Root Component Types of ShadowErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ShadowErrorData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "performer",
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasDereferenced",
        true,
        $.hasTag(_TagClass.context, 28),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "notification",
        true,
        $.hasTag(_TagClass.context, 27),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ShadowErrorData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ShadowErrorData */
/**
 * @summary The Extension Addition Component Types of ShadowErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ShadowErrorData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ShadowErrorData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ShadowErrorData */
let _cached_decoder_for_ShadowErrorData: $.ASN1Decoder<ShadowErrorData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ShadowErrorData */

/* START_OF_SYMBOL_DEFINITION _decode_ShadowErrorData */
/**
 * @summary Decodes an ASN.1 element into a(n) ShadowErrorData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ShadowErrorData} The decoded data structure.
 */
export function _decode_ShadowErrorData(el: _Element) {
    if (!_cached_decoder_for_ShadowErrorData) {
        _cached_decoder_for_ShadowErrorData = function (
            el: _Element
        ): ShadowErrorData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let problem!: ShadowProblem;
            let lastUpdate: OPTIONAL<Time>;
            let updateWindow: OPTIONAL<UpdateWindow>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                ShadowErrorData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = _decode_ShadowProblem(_el);
                },
                lastUpdate: (_el: _Element): void => {
                    lastUpdate = _decode_Time(_el);
                },
                updateWindow: (_el: _Element): void => {
                    updateWindow = _decode_UpdateWindow(_el);
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
                performer: (_el: _Element): void => {
                    performer = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: _Element): void => {
                    aliasDereferenced = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                notification: (_el: _Element): void => {
                    notification = $._decode_explicit<Attribute[]>(() =>
                        $._decodeSequenceOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ShadowErrorData,
                _extension_additions_list_spec_for_ShadowErrorData,
                _root_component_type_list_2_spec_for_ShadowErrorData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ShadowErrorData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ problem,
                lastUpdate,
                updateWindow,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_ShadowErrorData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ShadowErrorData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ShadowErrorData */
let _cached_encoder_for_ShadowErrorData: $.ASN1Encoder<ShadowErrorData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ShadowErrorData */

/* START_OF_SYMBOL_DEFINITION _encode_ShadowErrorData */
/**
 * @summary Encodes a(n) ShadowErrorData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShadowErrorData, encoded as an ASN.1 Element.
 */
export function _encode_ShadowErrorData(
    value: ShadowErrorData,
    elGetter: $.ASN1Encoder<ShadowErrorData>
) {
    if (!_cached_encoder_for_ShadowErrorData) {
        _cached_encoder_for_ShadowErrorData = function (
            value: ShadowErrorData,
            elGetter: $.ASN1Encoder<ShadowErrorData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_ShadowProblem(
                                value.problem,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.lastUpdate === undefined
                                ? undefined
                                : _encode_Time(value.lastUpdate, $.BER),
                            /* IF_ABSENT  */ value.updateWindow === undefined
                                ? undefined
                                : _encode_UpdateWindow(
                                      value.updateWindow,
                                      $.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      $.BER
                                  )(value.securityParameters, $.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.performer, $.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            $.deepEq(
                                value.aliasDereferenced,
                                ShadowErrorData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      28,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.aliasDereferenced, $.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      27,
                                      () =>
                                          $._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.notification, $.BER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ShadowErrorData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ShadowErrorData */

/* eslint-enable */
