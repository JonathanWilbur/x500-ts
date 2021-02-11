/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    TRUE_BIT,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
import {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "../InformationFramework/RelativeDistinguishedName.ta";
import {
    AARE_apdu_protocol_version,
    AARE_apdu_protocol_version_version1 /* IMPORTED_LONG_NAMED_BIT */,
    _decode_AARE_apdu_protocol_version,
    _encode_AARE_apdu_protocol_version,
} from "../OSIProtocolSpecification/AARE-apdu-protocol-version.ta";
import {
    AE_invocation_identifier,
    _decode_AE_invocation_identifier,
    _encode_AE_invocation_identifier,
} from "../OSIProtocolSpecification/AE-invocation-identifier.ta";
import {
    AP_invocation_identifier,
    _decode_AP_invocation_identifier,
    _encode_AP_invocation_identifier,
} from "../OSIProtocolSpecification/AP-invocation-identifier.ta";
import {
    Application_context_name,
    _decode_Application_context_name,
    _encode_Application_context_name,
} from "../OSIProtocolSpecification/Application-context-name.ta";
import {
    Associate_result,
    _decode_Associate_result,
    _encode_Associate_result,
} from "../OSIProtocolSpecification/Associate-result.ta";
import {
    Associate_source_diagnostic,
    _decode_Associate_source_diagnostic,
    _encode_Associate_source_diagnostic,
} from "../OSIProtocolSpecification/Associate-source-diagnostic.ta";
import {
    Association_informationBindRes,
    _decode_Association_informationBindRes,
    _encode_Association_informationBindRes,
} from "../OSIProtocolSpecification/Association-informationBindRes.ta";
import {
    Implementation_data,
    _decode_Implementation_data,
    _encode_Implementation_data,
} from "../OSIProtocolSpecification/Implementation-data.ta";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
export {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "../InformationFramework/RelativeDistinguishedName.ta";
export {
    AARE_apdu_protocol_version,
    AARE_apdu_protocol_version_version1 /* IMPORTED_LONG_NAMED_BIT */,
    version1 /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_AARE_apdu_protocol_version,
    _encode_AARE_apdu_protocol_version,
} from "../OSIProtocolSpecification/AARE-apdu-protocol-version.ta";
export {
    AE_invocation_identifier,
    _decode_AE_invocation_identifier,
    _encode_AE_invocation_identifier,
} from "../OSIProtocolSpecification/AE-invocation-identifier.ta";
export {
    AP_invocation_identifier,
    _decode_AP_invocation_identifier,
    _encode_AP_invocation_identifier,
} from "../OSIProtocolSpecification/AP-invocation-identifier.ta";
export {
    Application_context_name,
    _decode_Application_context_name,
    _encode_Application_context_name,
} from "../OSIProtocolSpecification/Application-context-name.ta";
export {
    accepted /* IMPORTED_SHORT_NAMED_INTEGER */,
    Associate_result,
    Associate_result_accepted /* IMPORTED_LONG_NAMED_INTEGER */,
    Associate_result_rejected_permanent /* IMPORTED_LONG_NAMED_INTEGER */,
    Associate_result_rejected_transient /* IMPORTED_LONG_NAMED_INTEGER */,
    rejected_permanent /* IMPORTED_SHORT_NAMED_INTEGER */,
    rejected_transient /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_Associate_result,
    _encode_Associate_result,
} from "../OSIProtocolSpecification/Associate-result.ta";
export {
    Associate_source_diagnostic,
    _decode_Associate_source_diagnostic,
    _encode_Associate_source_diagnostic,
} from "../OSIProtocolSpecification/Associate-source-diagnostic.ta";
export {
    Association_informationBindRes,
    _decode_Association_informationBindRes,
    _encode_Association_informationBindRes,
} from "../OSIProtocolSpecification/Association-informationBindRes.ta";
export {
    Implementation_data,
    _decode_Implementation_data,
    _encode_Implementation_data,
} from "../OSIProtocolSpecification/Implementation-data.ta";

/* START_OF_SYMBOL_DEFINITION AARE_apdu */
/**
 * @summary AARE_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AARE-apdu{APPLICATION-CONTEXT:Protocols} ::= [APPLICATION 1] IMPLICIT SEQUENCE {
 *   protocol-version                     [0] IMPLICIT BIT STRING {version1(0)}
 *                                              DEFAULT {version1},
 *   application-context-name             [1]  Application-context-name,
 *   result                               [2]  Associate-result(accepted),
 *   result-source-diagnostic             [3]  Associate-source-diagnostic,
 *   responding-AP-title                  [4]  Name                          OPTIONAL,
 *   responding-AE-qualifier              [5]  RelativeDistinguishedName     OPTIONAL,
 *   responding-AP-invocation-identifier  [6]  AP-invocation-identifier      OPTIONAL,
 *   responding-AE-invocation-identifier  [7]  AE-invocation-identifier      OPTIONAL,
 *   implementation-information           [29] IMPLICIT Implementation-data  OPTIONAL,
 *   user-information                     [30] IMPLICIT
 *                                         Association-informationBindRes{{Protocols}}}
 * ```
 *
 * @class
 */
export class AARE_apdu {
    constructor(
        /**
         * @summary `protocol_version`.
         * @public
         * @readonly
         */
        readonly protocol_version: OPTIONAL<AARE_apdu_protocol_version>,
        /**
         * @summary `application_context_name`.
         * @public
         * @readonly
         */
        readonly application_context_name: Application_context_name,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: Associate_result,
        /**
         * @summary `result_source_diagnostic`.
         * @public
         * @readonly
         */
        readonly result_source_diagnostic: Associate_source_diagnostic,
        /**
         * @summary `responding_AP_title`.
         * @public
         * @readonly
         */
        readonly responding_AP_title: OPTIONAL<Name>,
        /**
         * @summary `responding_AE_qualifier`.
         * @public
         * @readonly
         */
        readonly responding_AE_qualifier: OPTIONAL<RelativeDistinguishedName>,
        /**
         * @summary `responding_AP_invocation_identifier`.
         * @public
         * @readonly
         */
        readonly responding_AP_invocation_identifier: OPTIONAL<AP_invocation_identifier>,
        /**
         * @summary `responding_AE_invocation_identifier`.
         * @public
         * @readonly
         */
        readonly responding_AE_invocation_identifier: OPTIONAL<AE_invocation_identifier>,
        /**
         * @summary `implementation_information`.
         * @public
         * @readonly
         */
        readonly implementation_information: OPTIONAL<Implementation_data>,
        /**
         * @summary `user_information`.
         * @public
         * @readonly
         */
        readonly user_information: Association_informationBindRes
    ) {}

    /**
     * @summary Restructures an object into a AARE_apdu
     * @description
     *
     * This takes an `object` and converts it to a `AARE_apdu`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AARE_apdu`.
     * @returns {AARE_apdu}
     */
    public static _from_object(
        _o: { [_K in keyof AARE_apdu]: AARE_apdu[_K] }
    ): AARE_apdu {
        return new AARE_apdu(
            _o.protocol_version,
            _o.application_context_name,
            _o.result,
            _o.result_source_diagnostic,
            _o.responding_AP_title,
            _o.responding_AE_qualifier,
            _o.responding_AP_invocation_identifier,
            _o.responding_AE_invocation_identifier,
            _o.implementation_information,
            _o.user_information
        );
    }

    /**
     * @summary Getter that returns the default value for `protocol_version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_protocol_version() {
        return (() => {
            const _ret = new Uint8ClampedArray(Math.max(0));
            _ret[AARE_apdu_protocol_version_version1] = TRUE_BIT;
            return _ret;
        })();
    }
}
/* END_OF_SYMBOL_DEFINITION AARE_apdu */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AARE_apdu */
/**
 * @summary The Leading Root Component Types of AARE_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AARE_apdu: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "protocol-version",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "application-context-name",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "result",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "result-source-diagnostic",
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "responding-AP-title",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "responding-AE-qualifier",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "responding-AP-invocation-identifier",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "responding-AE-invocation-identifier",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "implementation-information",
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "user-information",
        false,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AARE_apdu */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AARE_apdu */
/**
 * @summary The Trailing Root Component Types of AARE_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AARE_apdu: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AARE_apdu */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AARE_apdu */
/**
 * @summary The Extension Addition Component Types of AARE_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AARE_apdu: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AARE_apdu */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AARE_apdu */
let _cached_decoder_for_AARE_apdu: $.ASN1Decoder<AARE_apdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AARE_apdu */

/* START_OF_SYMBOL_DEFINITION _decode_AARE_apdu */
/**
 * @summary Decodes an ASN.1 element into a(n) AARE_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AARE_apdu} The decoded data structure.
 */
export function _decode_AARE_apdu(el: _Element) {
    if (!_cached_decoder_for_AARE_apdu) {
        _cached_decoder_for_AARE_apdu = $._decode_implicit<AARE_apdu>(
            () =>
                function (el: _Element): AARE_apdu {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let protocol_version: OPTIONAL<AARE_apdu_protocol_version> =
                        AARE_apdu._default_value_for_protocol_version;
                    let application_context_name!: Application_context_name;
                    let result!: Associate_result;
                    let result_source_diagnostic!: Associate_source_diagnostic;
                    let responding_AP_title: OPTIONAL<Name>;
                    let responding_AE_qualifier: OPTIONAL<RelativeDistinguishedName>;
                    let responding_AP_invocation_identifier: OPTIONAL<AP_invocation_identifier>;
                    let responding_AE_invocation_identifier: OPTIONAL<AE_invocation_identifier>;
                    let implementation_information: OPTIONAL<Implementation_data>;
                    let user_information!: Association_informationBindRes;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        "protocol-version": (_el: _Element): void => {
                            protocol_version = $._decode_implicit<AARE_apdu_protocol_version>(
                                () => _decode_AARE_apdu_protocol_version
                            )(_el);
                        },
                        "application-context-name": (_el: _Element): void => {
                            application_context_name = $._decode_explicit<Application_context_name>(
                                () => _decode_Application_context_name
                            )(_el);
                        },
                        result: (_el: _Element): void => {
                            result = $._decode_explicit<Associate_result>(
                                () => _decode_Associate_result
                            )(_el);
                        },
                        "result-source-diagnostic": (_el: _Element): void => {
                            result_source_diagnostic = $._decode_explicit<Associate_source_diagnostic>(
                                () => _decode_Associate_source_diagnostic
                            )(_el);
                        },
                        "responding-AP-title": (_el: _Element): void => {
                            responding_AP_title = $._decode_explicit<Name>(
                                () => _decode_Name
                            )(_el);
                        },
                        "responding-AE-qualifier": (_el: _Element): void => {
                            responding_AE_qualifier = $._decode_explicit<RelativeDistinguishedName>(
                                () => _decode_RelativeDistinguishedName
                            )(_el);
                        },
                        "responding-AP-invocation-identifier": (
                            _el: _Element
                        ): void => {
                            responding_AP_invocation_identifier = $._decode_explicit<AP_invocation_identifier>(
                                () => _decode_AP_invocation_identifier
                            )(_el);
                        },
                        "responding-AE-invocation-identifier": (
                            _el: _Element
                        ): void => {
                            responding_AE_invocation_identifier = $._decode_explicit<AE_invocation_identifier>(
                                () => _decode_AE_invocation_identifier
                            )(_el);
                        },
                        "implementation-information": (_el: _Element): void => {
                            implementation_information = $._decode_implicit<Implementation_data>(
                                () => _decode_Implementation_data
                            )(_el);
                        },
                        "user-information": (_el: _Element): void => {
                            user_information = $._decode_implicit<Association_informationBindRes>(
                                () => _decode_Association_informationBindRes
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_AARE_apdu,
                        _extension_additions_list_spec_for_AARE_apdu,
                        _root_component_type_list_2_spec_for_AARE_apdu,
                        undefined
                    );
                    return new AARE_apdu(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ protocol_version,
                        application_context_name,
                        result,
                        result_source_diagnostic,
                        responding_AP_title,
                        responding_AE_qualifier,
                        responding_AP_invocation_identifier,
                        responding_AE_invocation_identifier,
                        implementation_information,
                        user_information
                    );
                }
        );
    }
    return _cached_decoder_for_AARE_apdu(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AARE_apdu */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AARE_apdu */
let _cached_encoder_for_AARE_apdu: $.ASN1Encoder<AARE_apdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AARE_apdu */

/* START_OF_SYMBOL_DEFINITION _encode_AARE_apdu */
/**
 * @summary Encodes a(n) AARE_apdu into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AARE_apdu, encoded as an ASN.1 Element.
 */
export function _encode_AARE_apdu(
    value: AARE_apdu,
    elGetter: $.ASN1Encoder<AARE_apdu>
) {
    if (!_cached_encoder_for_AARE_apdu) {
        _cached_encoder_for_AARE_apdu = $._encode_implicit(
            _TagClass.application,
            1,
            () =>
                function (
                    value: AARE_apdu,
                    elGetter: $.ASN1Encoder<AARE_apdu>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* IF_DEFAULT */ value.protocol_version ===
                                    undefined ||
                                $.deepEq(
                                    value.protocol_version,
                                    AARE_apdu._default_value_for_protocol_version
                                )
                                    ? undefined
                                    : $._encode_implicit(
                                          _TagClass.context,
                                          0,
                                          () =>
                                              _encode_AARE_apdu_protocol_version,
                                          $.BER
                                      )(value.protocol_version, $.BER),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    1,
                                    () => _encode_Application_context_name,
                                    $.BER
                                )(value.application_context_name, $.BER),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    2,
                                    () => _encode_Associate_result,
                                    $.BER
                                )(value.result, $.BER),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    3,
                                    () => _encode_Associate_source_diagnostic,
                                    $.BER
                                )(value.result_source_diagnostic, $.BER),
                                /* IF_ABSENT  */ value.responding_AP_title ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          4,
                                          () => _encode_Name,
                                          $.BER
                                      )(value.responding_AP_title, $.BER),
                                /* IF_ABSENT  */ value.responding_AE_qualifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          5,
                                          () =>
                                              _encode_RelativeDistinguishedName,
                                          $.BER
                                      )(value.responding_AE_qualifier, $.BER),
                                /* IF_ABSENT  */ value.responding_AP_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          6,
                                          () =>
                                              _encode_AP_invocation_identifier,
                                          $.BER
                                      )(
                                          value.responding_AP_invocation_identifier,
                                          $.BER
                                      ),
                                /* IF_ABSENT  */ value.responding_AE_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          7,
                                          () =>
                                              _encode_AE_invocation_identifier,
                                          $.BER
                                      )(
                                          value.responding_AE_invocation_identifier,
                                          $.BER
                                      ),
                                /* IF_ABSENT  */ value.implementation_information ===
                                undefined
                                    ? undefined
                                    : $._encode_implicit(
                                          _TagClass.context,
                                          29,
                                          () => _encode_Implementation_data,
                                          $.BER
                                      )(
                                          value.implementation_information,
                                          $.BER
                                      ),
                                /* REQUIRED   */ $._encode_implicit(
                                    _TagClass.context,
                                    30,
                                    () =>
                                        _encode_Association_informationBindRes,
                                    $.BER
                                )(value.user_information, $.BER),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_AARE_apdu(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AARE_apdu */

/* eslint-enable */
