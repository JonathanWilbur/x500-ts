/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
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
    LDAPString,
    _decode_LDAPString,
    _encode_LDAPString,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPString.ta";
export {
    Referral,
    _decode_Referral,
    _encode_Referral,
} from "../Lightweight-Directory-Access-Protocol-V3/Referral.ta";

/* START_OF_SYMBOL_DEFINITION LDAPResult */
/**
 * @summary LDAPResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LDAPResult ::= SEQUENCE {
 *   resultCode
 *     ENUMERATED {success(0), operationsError(1), protocolError(2),
 *                 timeLimitExceeded(3), sizeLimitExceeded(4), compareFalse(5),
 *                 compareTrue(6), authMethodNotSupported(7),
 *                 strongerAuthRequired(8),
 *                 -- 9 reserved
 *                 referral(10), adminLimitExceeded(11),
 *                 unavailableCriticalExtension(12), confidentialityRequired(13),
 *                 saslBindInProgress(14), noSuchAttribute(16),
 *                 undefinedAttributeType(17), inappropriateMatching(18),
 *                 constraintViolation(19), attributeOrValueExists(20),
 *                 invalidAttributeSyntax(21),
 *                 -- 22-31 unused
 *                 noSuchObject(32), aliasProblem(33),
 *                 invalidDNSyntax(34),
 *                 -- 35 reserved for undefined isLeaf
 *                 aliasDereferencingProblem(36),
 *                 -- 37-47 unused
 *                 inappropriateAuthentication(48), invalidCredentials(49),
 *                 insufficientAccessRights(50), busy(51), unavailable(52),
 *                 unwillingToPerform(53),
 *                 loopDetect(54),
 *                 -- 55-63 unused
 *                 namingViolation(64), objectClassViolation(65),
 *                 notAllowedOnNonLeaf(66), notAllowedOnRDN(67),
 *                 entryAlreadyExists(68),
 *                 objectClassModsProhibited(69),
 *                 -- 70 reserved for CLDAP
 *                 affectsMultipleDSAs(71),
 *                 -- 72-79 unused
 *                 other(80), ...
 *                 },
 *   matchedDN          LDAPDN,
 *   diagnosticMessage  LDAPString,
 *   referral           [3]  Referral OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class LDAPResult {
    constructor(
        /**
         * @summary `resultCode`.
         * @public
         * @readonly
         */
        readonly resultCode: LDAPResult_resultCode,
        /**
         * @summary `matchedDN`.
         * @public
         * @readonly
         */
        readonly matchedDN: LDAPDN,
        /**
         * @summary `diagnosticMessage`.
         * @public
         * @readonly
         */
        readonly diagnosticMessage: LDAPString,
        /**
         * @summary `referral`.
         * @public
         * @readonly
         */
        readonly referral: OPTIONAL<Referral>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LDAPResult
     * @description
     *
     * This takes an `object` and converts it to a `LDAPResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LDAPResult`.
     * @returns {LDAPResult}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof LDAPResult]: LDAPResult[_K] }>
    ): LDAPResult {
        return new LDAPResult(
            _o.resultCode,
            _o.matchedDN,
            _o.diagnosticMessage,
            _o.referral,
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
/* END_OF_SYMBOL_DEFINITION LDAPResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LDAPResult */
/**
 * @summary The Leading Root Component Types of LDAPResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LDAPResult: $.ComponentSpec[] = [
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
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LDAPResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LDAPResult */
/**
 * @summary The Trailing Root Component Types of LDAPResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LDAPResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LDAPResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LDAPResult */
/**
 * @summary The Extension Addition Component Types of LDAPResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LDAPResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LDAPResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LDAPResult */
let _cached_decoder_for_LDAPResult: $.ASN1Decoder<LDAPResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LDAPResult */

/* START_OF_SYMBOL_DEFINITION _decode_LDAPResult */
/**
 * @summary Decodes an ASN.1 element into a(n) LDAPResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPResult} The decoded data structure.
 */
export function _decode_LDAPResult(el: _Element) {
    if (!_cached_decoder_for_LDAPResult) {
        _cached_decoder_for_LDAPResult = function (el: _Element): LDAPResult {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let resultCode!: LDAPResult_resultCode;
            let matchedDN!: LDAPDN;
            let diagnosticMessage!: LDAPString;
            let referral: OPTIONAL<Referral>;
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
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_LDAPResult,
                _extension_additions_list_spec_for_LDAPResult,
                _root_component_type_list_2_spec_for_LDAPResult,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new LDAPResult /* SEQUENCE_CONSTRUCTOR_CALL */(
                resultCode,
                matchedDN,
                diagnosticMessage,
                referral,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_LDAPResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LDAPResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LDAPResult */
let _cached_encoder_for_LDAPResult: $.ASN1Encoder<LDAPResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LDAPResult */

/* START_OF_SYMBOL_DEFINITION _encode_LDAPResult */
/**
 * @summary Encodes a(n) LDAPResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPResult, encoded as an ASN.1 Element.
 */
export function _encode_LDAPResult(
    value: LDAPResult,
    elGetter: $.ASN1Encoder<LDAPResult>
) {
    if (!_cached_encoder_for_LDAPResult) {
        _cached_encoder_for_LDAPResult = function (
            value: LDAPResult,
            elGetter: $.ASN1Encoder<LDAPResult>
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
                            /* IF_ABSENT  */ value.referral === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_Referral,
                                      $.BER
                                  )(value.referral, $.BER),
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
    return _cached_encoder_for_LDAPResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LDAPResult */

/* eslint-enable */
