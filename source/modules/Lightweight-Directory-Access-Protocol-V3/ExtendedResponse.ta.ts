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
} from "../Lightweight_Directory_Access_Protocol_V3/LDAPDN.ta";
import {
    LDAPOID,
    _decode_LDAPOID,
    _encode_LDAPOID,
} from "../Lightweight_Directory_Access_Protocol_V3/LDAPOID.ta";
import {
    LDAPResult_resultCode,
    _decode_LDAPResult_resultCode,
    _encode_LDAPResult_resultCode,
    _enum_for_LDAPResult_resultCode,
} from "../Lightweight_Directory_Access_Protocol_V3/LDAPResult-resultCode.ta";
import {
    LDAPString,
    _decode_LDAPString,
    _encode_LDAPString,
} from "../Lightweight_Directory_Access_Protocol_V3/LDAPString.ta";
import {
    Referral,
    _decode_Referral,
    _encode_Referral,
} from "../Lightweight_Directory_Access_Protocol_V3/Referral.ta";
export {
    LDAPDN,
    _decode_LDAPDN,
    _encode_LDAPDN,
} from "../Lightweight_Directory_Access_Protocol_V3/LDAPDN.ta";
export {
    LDAPOID,
    _decode_LDAPOID,
    _encode_LDAPOID,
} from "../Lightweight_Directory_Access_Protocol_V3/LDAPOID.ta";
export {
    LDAPResult_resultCode,
    LDAPResult_resultCode_adminLimitExceeded /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_affectsMultipleDSAs /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_aliasDereferencingProblem /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_aliasProblem /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_attributeOrValueExists /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_authMethodNotSupported /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_busy /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_compareFalse /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_compareTrue /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_confidentialityRequired /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_constraintViolation /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_entryAlreadyExists /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_inappropriateAuthentication /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_inappropriateMatching /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_insufficientAccessRights /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_invalidAttributeSyntax /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_invalidCredentials /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_invalidDNSyntax /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_loopDetect /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_namingViolation /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_noSuchAttribute /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_noSuchObject /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_notAllowedOnNonLeaf /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_notAllowedOnRDN /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_objectClassModsProhibited /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_objectClassViolation /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_operationsError /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_other /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_protocolError /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_referral /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_saslBindInProgress /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_sizeLimitExceeded /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_strongerAuthRequired /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_success /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_timeLimitExceeded /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_unavailable /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_unavailableCriticalExtension /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_undefinedAttributeType /* IMPORTED_ENUMERATION_ITEM */,
    LDAPResult_resultCode_unwillingToPerform /* IMPORTED_ENUMERATION_ITEM */,
    _decode_LDAPResult_resultCode,
    _encode_LDAPResult_resultCode,
    _enum_for_LDAPResult_resultCode,
} from "../Lightweight_Directory_Access_Protocol_V3/LDAPResult-resultCode.ta";
export {
    LDAPResult,
    _decode_LDAPResult,
    _encode_LDAPResult,
} from "../Lightweight_Directory_Access_Protocol_V3/LDAPResult.ta";
export {
    LDAPString,
    _decode_LDAPString,
    _encode_LDAPString,
} from "../Lightweight_Directory_Access_Protocol_V3/LDAPString.ta";
export {
    Referral,
    _decode_Referral,
    _encode_Referral,
} from "../Lightweight_Directory_Access_Protocol_V3/Referral.ta";

/* START_OF_SYMBOL_DEFINITION ExtendedResponse */
/**
 * @summary ExtendedResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedResponse ::= [APPLICATION 24]  SEQUENCE {
 *   COMPONENTS OF LDAPResult,
 *   responseName   [10]  LDAPOID OPTIONAL,
 *   responseValue  [11]  OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ExtendedResponse {
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
         * @summary `responseName`.
         * @public
         * @readonly
         */
        readonly responseName: OPTIONAL<LDAPOID>,
        /**
         * @summary `responseValue`.
         * @public
         * @readonly
         */
        readonly responseValue: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ExtendedResponse
     * @description
     *
     * This takes an `object` and converts it to a `ExtendedResponse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtendedResponse`.
     * @returns {ExtendedResponse}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ExtendedResponse]: ExtendedResponse[_K] }>
    ): ExtendedResponse {
        return new ExtendedResponse(
            _o.resultCode,
            _o.matchedDN,
            _o.diagnosticMessage,
            _o.referral,
            _o.responseName,
            _o.responseValue,
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
/* END_OF_SYMBOL_DEFINITION ExtendedResponse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExtendedResponse */
/**
 * @summary The Leading Root Component Types of ExtendedResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExtendedResponse: $.ComponentSpec[] = [
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
        "responseName",
        true,
        $.hasTag(_TagClass.context, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "responseValue",
        true,
        $.hasTag(_TagClass.context, 11),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExtendedResponse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExtendedResponse */
/**
 * @summary The Trailing Root Component Types of ExtendedResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExtendedResponse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExtendedResponse */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExtendedResponse */
/**
 * @summary The Extension Addition Component Types of ExtendedResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExtendedResponse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExtendedResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedResponse */
let _cached_decoder_for_ExtendedResponse: $.ASN1Decoder<
    ExtendedResponse
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedResponse */

/* START_OF_SYMBOL_DEFINITION _decode_ExtendedResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedResponse} The decoded data structure.
 */
export function _decode_ExtendedResponse(el: _Element) {
    if (!_cached_decoder_for_ExtendedResponse) {
        _cached_decoder_for_ExtendedResponse = $._decode_implicit<
            ExtendedResponse
        >(
            () =>
                function (el: _Element): ExtendedResponse {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let resultCode!: LDAPResult_resultCode;
                    let matchedDN!: LDAPDN;
                    let diagnosticMessage!: LDAPString;
                    let referral: OPTIONAL<Referral>;
                    let responseName: OPTIONAL<LDAPOID>;
                    let responseValue: OPTIONAL<OCTET_STRING>;
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
                        responseName: (_el: _Element): void => {
                            responseName = $._decode_implicit<LDAPOID>(
                                () => _decode_LDAPOID
                            )(_el);
                        },
                        responseValue: (_el: _Element): void => {
                            responseValue = $._decode_implicit<OCTET_STRING>(
                                () => $._decodeOctetString
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_ExtendedResponse,
                        _extension_additions_list_spec_for_ExtendedResponse,
                        _root_component_type_list_2_spec_for_ExtendedResponse,
                        (ext: _Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new ExtendedResponse /* SEQUENCE_CONSTRUCTOR_CALL */(
                        resultCode,
                        matchedDN,
                        diagnosticMessage,
                        referral,
                        responseName,
                        responseValue,
                        _unrecognizedExtensionsList
                    );
                }
        );
    }
    return _cached_decoder_for_ExtendedResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtendedResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedResponse */
let _cached_encoder_for_ExtendedResponse: $.ASN1Encoder<
    ExtendedResponse
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedResponse */

/* START_OF_SYMBOL_DEFINITION _encode_ExtendedResponse */
/**
 * @summary Encodes a(n) ExtendedResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedResponse, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedResponse(
    value: ExtendedResponse,
    elGetter: $.ASN1Encoder<ExtendedResponse>
) {
    if (!_cached_encoder_for_ExtendedResponse) {
        _cached_encoder_for_ExtendedResponse = $._encode_implicit(
            _TagClass.application,
            24,
            () =>
                function (
                    value: ExtendedResponse,
                    elGetter: $.ASN1Encoder<ExtendedResponse>
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
                                    /* IF_ABSENT  */ value.responseName ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              10,
                                              () => _encode_LDAPOID,
                                              $.BER
                                          )(value.responseName, $.BER),
                                    /* IF_ABSENT  */ value.responseValue ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              11,
                                              () => $._encodeOctetString,
                                              $.BER
                                          )(value.responseValue, $.BER),
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
    return _cached_encoder_for_ExtendedResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtendedResponse */

/* eslint-enable */
