/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    LDAPDN,
    _decode_LDAPDN,
    _encode_LDAPDN,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPDN.ta";
import {
    LDAPResult_resultCode,
    _decode_LDAPResult_resultCode,
    _encode_LDAPResult_resultCode,
    _enum_for_LDAPResult_resultCode,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPResult-resultCode.ta";
import {
    LDAPString,
    _decode_LDAPString,
    _encode_LDAPString,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPString.ta";
import {
    Referral,
    _decode_Referral,
    _encode_Referral,
} from "../Lightweight-Directory-Access-Protocol-V3/Referral.ta";
export {
    LDAPDN,
    _decode_LDAPDN,
    _encode_LDAPDN,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPDN.ta";
export {
    adminLimitExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    affectsMultipleDSAs /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    aliasDereferencingProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    aliasProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    attributeOrValueExists /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    authMethodNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    busy /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    compareFalse /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    compareTrue /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    confidentialityRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    constraintViolation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    entryAlreadyExists /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    inappropriateAuthentication /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    inappropriateMatching /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    insufficientAccessRights /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalidAttributeSyntax /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalidCredentials /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalidDNSyntax /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    LDAPResult_resultCode,
    LDAPResult_resultCode_adminLimitExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_affectsMultipleDSAs /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_aliasDereferencingProblem /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_aliasProblem /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_attributeOrValueExists /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_authMethodNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_busy /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_compareFalse /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_compareTrue /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_confidentialityRequired /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_constraintViolation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_entryAlreadyExists /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_inappropriateAuthentication /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_inappropriateMatching /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_insufficientAccessRights /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_invalidAttributeSyntax /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_invalidCredentials /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_invalidDNSyntax /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_loopDetect /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_namingViolation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_noSuchAttribute /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_noSuchObject /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_notAllowedOnNonLeaf /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_notAllowedOnRDN /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_objectClassModsProhibited /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_objectClassViolation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_operationsError /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_other /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_protocolError /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_referral /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_saslBindInProgress /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_sizeLimitExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_strongerAuthRequired /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_success /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_timeLimitExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_unavailable /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_unavailableCriticalExtension /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_undefinedAttributeType /* IMPORTED_LONG_ENUMERATION_ITEM */,
    LDAPResult_resultCode_unwillingToPerform /* IMPORTED_LONG_ENUMERATION_ITEM */,
    loopDetect /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    namingViolation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    noSuchAttribute /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    noSuchObject /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    notAllowedOnNonLeaf /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    notAllowedOnRDN /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    objectClassModsProhibited /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    objectClassViolation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    operationsError /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    other /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    protocolError /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    referral /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    saslBindInProgress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    sizeLimitExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    strongerAuthRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    success /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    timeLimitExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unavailable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unavailableCriticalExtension /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    undefinedAttributeType /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unwillingToPerform /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_LDAPResult_resultCode,
    _encode_LDAPResult_resultCode,
    _enum_for_LDAPResult_resultCode,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPResult-resultCode.ta";
export {
    LDAPResult,
    _decode_LDAPResult,
    _encode_LDAPResult,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPResult.ta";
export {
    LDAPString,
    _decode_LDAPString,
    _encode_LDAPString,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPString.ta";
export {
    Referral,
    _decode_Referral,
    _encode_Referral,
} from "../Lightweight-Directory-Access-Protocol-V3/Referral.ta";

/* START_OF_SYMBOL_DEFINITION BindResponse */
/**
 * @summary BindResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindResponse ::= [APPLICATION 1]  SEQUENCE {
 *   COMPONENTS OF LDAPResult,
 *   serverSaslCreds  [7]  OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class BindResponse {
    constructor(
        /**
         * @summary `resultCode`.
         * @public
         * @readonly
         */
        readonly resultCode: LDAPResult_resultCode /* REPLICATED_COMPONENT */,
        /**
         * @summary `matchedDN`.
         * @public
         * @readonly
         */
        readonly matchedDN: LDAPDN /* REPLICATED_COMPONENT */,
        /**
         * @summary `diagnosticMessage`.
         * @public
         * @readonly
         */
        readonly diagnosticMessage: LDAPString /* REPLICATED_COMPONENT */,
        /**
         * @summary `referral`.
         * @public
         * @readonly
         */
        readonly referral: OPTIONAL<Referral> /* REPLICATED_COMPONENT */,
        /**
         * @summary `serverSaslCreds`.
         * @public
         * @readonly
         */
        readonly serverSaslCreds: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a BindResponse
     * @description
     *
     * This takes an `object` and converts it to a `BindResponse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BindResponse`.
     * @returns {BindResponse}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof BindResponse]: BindResponse[_K] }>
    ): BindResponse {
        return new BindResponse(
            _o.resultCode,
            _o.matchedDN,
            _o.diagnosticMessage,
            _o.referral,
            _o.serverSaslCreds,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `resultCode`
     * @public
     * @static
     */

    public static _enum_for_resultCode = _enum_for_LDAPResult_resultCode;
}
/* END_OF_SYMBOL_DEFINITION BindResponse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BindResponse */
/**
 * @summary The Leading Root Component Types of BindResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BindResponse: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "resultCode",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "matchedDN",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "diagnosticMessage",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "referral",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "serverSaslCreds",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BindResponse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BindResponse */
/**
 * @summary The Trailing Root Component Types of BindResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BindResponse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BindResponse */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BindResponse */
/**
 * @summary The Extension Addition Component Types of BindResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BindResponse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BindResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BindResponse */
let _cached_decoder_for_BindResponse: $.ASN1Decoder<BindResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BindResponse */

/* START_OF_SYMBOL_DEFINITION _decode_BindResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) BindResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BindResponse} The decoded data structure.
 */
export function _decode_BindResponse(el: _Element) {
    if (!_cached_decoder_for_BindResponse) {
        _cached_decoder_for_BindResponse = $._decode_implicit<BindResponse>(
            () =>
                function (el: _Element): BindResponse {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let resultCode!: LDAPResult_resultCode;
                    let matchedDN!: LDAPDN;
                    let diagnosticMessage!: LDAPString;
                    let referral: OPTIONAL<Referral>;
                    let serverSaslCreds: OPTIONAL<OCTET_STRING>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        resultCode: (_el: _Element): void => {
                            resultCode = _decode_LDAPResult_resultCode(_el);
                        },
                        matchedDN: (_el: _Element): void => {
                            matchedDN = _decode_LDAPDN(_el);
                        },
                        diagnosticMessage: (_el: _Element): void => {
                            diagnosticMessage = _decode_LDAPString(_el);
                        },
                        referral: (_el: _Element): void => {
                            referral = $._decode_implicit<Referral>(
                                () => _decode_Referral
                            )(_el);
                        },
                        serverSaslCreds: (_el: _Element): void => {
                            serverSaslCreds = $._decode_implicit<OCTET_STRING>(
                                () => $._decodeOctetString
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_BindResponse,
                        _extension_additions_list_spec_for_BindResponse,
                        _root_component_type_list_2_spec_for_BindResponse,
                        (ext: _Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new BindResponse /* SEQUENCE_CONSTRUCTOR_CALL */(
                        resultCode,
                        matchedDN,
                        diagnosticMessage,
                        referral,
                        serverSaslCreds,
                        _unrecognizedExtensionsList
                    );
                }
        );
    }
    return _cached_decoder_for_BindResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BindResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BindResponse */
let _cached_encoder_for_BindResponse: $.ASN1Encoder<BindResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BindResponse */

/* START_OF_SYMBOL_DEFINITION _encode_BindResponse */
/**
 * @summary Encodes a(n) BindResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BindResponse, encoded as an ASN.1 Element.
 */
export function _encode_BindResponse(
    value: BindResponse,
    elGetter: $.ASN1Encoder<BindResponse>
) {
    if (!_cached_encoder_for_BindResponse) {
        _cached_encoder_for_BindResponse = $._encode_implicit(
            _TagClass.application,
            1,
            () =>
                function (
                    value: BindResponse,
                    elGetter: $.ASN1Encoder<BindResponse>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_LDAPResult_resultCode(
                                        value.resultCode,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_LDAPDN(
                                        value.matchedDN,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_LDAPString(
                                        value.diagnosticMessage,
                                        $.BER
                                    ),
                                    /* IF_ABSENT  */ value.referral ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              3,
                                              () => _encode_Referral,
                                              $.BER
                                          )(value.referral, $.BER),
                                    /* IF_ABSENT  */ value.serverSaslCreds ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              7,
                                              () => $._encodeOctetString,
                                              $.BER
                                          )(value.serverSaslCreds, $.BER),
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
    return _cached_encoder_for_BindResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BindResponse */

/* eslint-enable */
