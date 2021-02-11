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
    ServiceProblem,
    _decode_ServiceProblem,
    _encode_ServiceProblem,
} from "../DirectoryAbstractService/ServiceProblem.ta";
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
    CommonResults,
    _decode_CommonResults,
    _encode_CommonResults,
} from "../DirectoryAbstractService/CommonResults.ta";
export {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
export {
    administrativeLimitExceeded /* IMPORTED_SHORT_NAMED_INTEGER */,
    ambiguousKeyAttributes /* IMPORTED_SHORT_NAMED_INTEGER */,
    busy /* IMPORTED_SHORT_NAMED_INTEGER */,
    chainingRequired /* IMPORTED_SHORT_NAMED_INTEGER */,
    ditError /* IMPORTED_SHORT_NAMED_INTEGER */,
    invalidQueryReference /* IMPORTED_SHORT_NAMED_INTEGER */,
    invalidReference /* IMPORTED_SHORT_NAMED_INTEGER */,
    loopDetected /* IMPORTED_SHORT_NAMED_INTEGER */,
    notSupportedByLDAP /* IMPORTED_SHORT_NAMED_INTEGER */,
    outOfScope /* IMPORTED_SHORT_NAMED_INTEGER */,
    requestedServiceNotAvailable /* IMPORTED_SHORT_NAMED_INTEGER */,
    saslBindInProgress /* IMPORTED_SHORT_NAMED_INTEGER */,
    ServiceProblem,
    ServiceProblem_administrativeLimitExceeded /* IMPORTED_LONG_NAMED_INTEGER */,
    ServiceProblem_ambiguousKeyAttributes /* IMPORTED_LONG_NAMED_INTEGER */,
    ServiceProblem_busy /* IMPORTED_LONG_NAMED_INTEGER */,
    ServiceProblem_chainingRequired /* IMPORTED_LONG_NAMED_INTEGER */,
    ServiceProblem_ditError /* IMPORTED_LONG_NAMED_INTEGER */,
    ServiceProblem_invalidQueryReference /* IMPORTED_LONG_NAMED_INTEGER */,
    ServiceProblem_invalidReference /* IMPORTED_LONG_NAMED_INTEGER */,
    ServiceProblem_loopDetected /* IMPORTED_LONG_NAMED_INTEGER */,
    ServiceProblem_notSupportedByLDAP /* IMPORTED_LONG_NAMED_INTEGER */,
    ServiceProblem_outOfScope /* IMPORTED_LONG_NAMED_INTEGER */,
    ServiceProblem_requestedServiceNotAvailable /* IMPORTED_LONG_NAMED_INTEGER */,
    ServiceProblem_saslBindInProgress /* IMPORTED_LONG_NAMED_INTEGER */,
    ServiceProblem_timeLimitExceeded /* IMPORTED_LONG_NAMED_INTEGER */,
    ServiceProblem_unableToProceed /* IMPORTED_LONG_NAMED_INTEGER */,
    ServiceProblem_unavailable /* IMPORTED_LONG_NAMED_INTEGER */,
    ServiceProblem_unavailableCriticalExtension /* IMPORTED_LONG_NAMED_INTEGER */,
    ServiceProblem_unsupportedMatchingUse /* IMPORTED_LONG_NAMED_INTEGER */,
    ServiceProblem_unwillingToPerform /* IMPORTED_LONG_NAMED_INTEGER */,
    timeLimitExceeded /* IMPORTED_SHORT_NAMED_INTEGER */,
    unableToProceed /* IMPORTED_SHORT_NAMED_INTEGER */,
    unavailable /* IMPORTED_SHORT_NAMED_INTEGER */,
    unavailableCriticalExtension /* IMPORTED_SHORT_NAMED_INTEGER */,
    unsupportedMatchingUse /* IMPORTED_SHORT_NAMED_INTEGER */,
    unwillingToPerform /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ServiceProblem,
    _encode_ServiceProblem,
} from "../DirectoryAbstractService/ServiceProblem.ta";
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

/* START_OF_SYMBOL_DEFINITION ServiceErrorData */
/**
 * @summary ServiceErrorData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceErrorData ::= SET {
 *   problem   [0]  ServiceProblem,
 *   ...,
 *   ...,
 *   COMPONENTS OF  CommonResults }
 * ```
 *
 * @class
 */
export class ServiceErrorData {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: ServiceProblem,
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
     * @summary Restructures an object into a ServiceErrorData
     * @description
     *
     * This takes an `object` and converts it to a `ServiceErrorData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceErrorData`.
     * @returns {ServiceErrorData}
     */
    public static _from_object(
        _o: { [_K in keyof ServiceErrorData]: ServiceErrorData[_K] }
    ): ServiceErrorData {
        return new ServiceErrorData(
            _o.problem,
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
/* END_OF_SYMBOL_DEFINITION ServiceErrorData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ServiceErrorData */
/**
 * @summary The Leading Root Component Types of ServiceErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ServiceErrorData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "problem",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ServiceErrorData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ServiceErrorData */
/**
 * @summary The Trailing Root Component Types of ServiceErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ServiceErrorData: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ServiceErrorData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ServiceErrorData */
/**
 * @summary The Extension Addition Component Types of ServiceErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ServiceErrorData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ServiceErrorData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceErrorData */
let _cached_decoder_for_ServiceErrorData: $.ASN1Decoder<ServiceErrorData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceErrorData */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceErrorData */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceErrorData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceErrorData} The decoded data structure.
 */
export function _decode_ServiceErrorData(el: _Element) {
    if (!_cached_decoder_for_ServiceErrorData) {
        _cached_decoder_for_ServiceErrorData = function (
            el: _Element
        ): ServiceErrorData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: ServiceProblem;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                ServiceErrorData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<ServiceProblem>(
                        () => _decode_ServiceProblem
                    )(_el);
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
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ServiceErrorData,
                _extension_additions_list_spec_for_ServiceErrorData,
                _root_component_type_list_2_spec_for_ServiceErrorData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ServiceErrorData(
                /* SET_CONSTRUCTOR_CALL */ problem,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_ServiceErrorData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceErrorData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceErrorData */
let _cached_encoder_for_ServiceErrorData: $.ASN1Encoder<ServiceErrorData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceErrorData */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceErrorData */
/**
 * @summary Encodes a(n) ServiceErrorData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceErrorData, encoded as an ASN.1 Element.
 */
export function _encode_ServiceErrorData(
    value: ServiceErrorData,
    elGetter: $.ASN1Encoder<ServiceErrorData>
) {
    if (!_cached_encoder_for_ServiceErrorData) {
        _cached_encoder_for_ServiceErrorData = function (
            value: ServiceErrorData,
            elGetter: $.ASN1Encoder<ServiceErrorData>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_ServiceProblem,
                                $.BER
                            )(value.problem, $.BER),
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
                                ServiceErrorData._default_value_for_aliasDereferenced
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
    return _cached_encoder_for_ServiceErrorData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceErrorData */

/* eslint-enable */
