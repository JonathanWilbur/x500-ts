/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertificationPath,
    _decode_CertificationPath,
    _encode_CertificationPath,
} from "../AuthenticationFramework/CertificationPath.ta";
import {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
import {
    ErrorProtectionRequest,
    _decode_ErrorProtectionRequest,
    _encode_ErrorProtectionRequest,
} from "../DirectoryAbstractService/ErrorProtectionRequest.ta";
import {
    ProtectionRequest,
    _decode_ProtectionRequest,
    _encode_ProtectionRequest,
} from "../DirectoryAbstractService/ProtectionRequest.ta";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../DirectoryAbstractService/Time.ta";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export {
    CertificationPath,
    _decode_CertificationPath,
    _encode_CertificationPath,
} from "../AuthenticationFramework/CertificationPath.ta";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export {
    ErrorProtectionRequest,
    ErrorProtectionRequest_none /* IMPORTED_LONG_NAMED_INTEGER */,
    ErrorProtectionRequest_signed /* IMPORTED_LONG_NAMED_INTEGER */,
    _decode_ErrorProtectionRequest,
    _encode_ErrorProtectionRequest,
} from "../DirectoryAbstractService/ErrorProtectionRequest.ta";
export {
    ProtectionRequest,
    ProtectionRequest_none /* IMPORTED_LONG_NAMED_INTEGER */,
    ProtectionRequest_signed /* IMPORTED_LONG_NAMED_INTEGER */,
    _decode_ProtectionRequest,
    _encode_ProtectionRequest,
} from "../DirectoryAbstractService/ProtectionRequest.ta";
export {
    Time,
    _decode_Time,
    _encode_Time,
} from "../DirectoryAbstractService/Time.ta";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";

/* START_OF_SYMBOL_DEFINITION SecurityParameters */
/**
 * @summary SecurityParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityParameters ::= SET {
 *   certification-path          [0]  CertificationPath OPTIONAL,
 *   name                        [1]  DistinguishedName OPTIONAL,
 *   time                        [2]  Time OPTIONAL,
 *   random                      [3]  BIT STRING OPTIONAL,
 *   target                      [4]  ProtectionRequest OPTIONAL,
 *   --                          [5]  Not to be used
 *   operationCode               [6]  Code OPTIONAL,
 *   --                          [7]  Not to be used
 *   errorProtection             [8]  ErrorProtectionRequest OPTIONAL,
 *   errorCode                   [9]  Code OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class SecurityParameters {
    constructor(
        /**
         * @summary `certification_path`.
         * @public
         * @readonly
         */
        readonly certification_path: OPTIONAL<CertificationPath>,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<DistinguishedName>,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: OPTIONAL<Time>,
        /**
         * @summary `random`.
         * @public
         * @readonly
         */
        readonly random: OPTIONAL<BIT_STRING>,
        /**
         * @summary `target`.
         * @public
         * @readonly
         */
        readonly target: OPTIONAL<ProtectionRequest>,
        /**
         * @summary `operationCode`.
         * @public
         * @readonly
         */
        readonly operationCode: OPTIONAL<Code>,
        /**
         * @summary `errorProtection`.
         * @public
         * @readonly
         */
        readonly errorProtection: OPTIONAL<ErrorProtectionRequest>,
        /**
         * @summary `errorCode`.
         * @public
         * @readonly
         */
        readonly errorCode: OPTIONAL<Code>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SecurityParameters
     * @description
     *
     * This takes an `object` and converts it to a `SecurityParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityParameters`.
     * @returns {SecurityParameters}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SecurityParameters]: SecurityParameters[_K] }
        >
    ): SecurityParameters {
        return new SecurityParameters(
            _o.certification_path,
            _o.name,
            _o.time,
            _o.random,
            _o.target,
            _o.operationCode,
            _o.errorProtection,
            _o.errorCode,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SecurityParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SecurityParameters */
/**
 * @summary The Leading Root Component Types of SecurityParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SecurityParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certification-path",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "time",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "random",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "target",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "operationCode",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "errorProtection",
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "errorCode",
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SecurityParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SecurityParameters */
/**
 * @summary The Trailing Root Component Types of SecurityParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SecurityParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SecurityParameters */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SecurityParameters */
/**
 * @summary The Extension Addition Component Types of SecurityParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SecurityParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SecurityParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityParameters */
let _cached_decoder_for_SecurityParameters: $.ASN1Decoder<
    SecurityParameters
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityParameters */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityParameters} The decoded data structure.
 */
export function _decode_SecurityParameters(el: _Element) {
    if (!_cached_decoder_for_SecurityParameters) {
        _cached_decoder_for_SecurityParameters = function (
            el: _Element
        ): SecurityParameters {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let certification_path: OPTIONAL<CertificationPath>;
            let name: OPTIONAL<DistinguishedName>;
            let time: OPTIONAL<Time>;
            let random: OPTIONAL<BIT_STRING>;
            let target: OPTIONAL<ProtectionRequest>;
            let operationCode: OPTIONAL<Code>;
            let errorProtection: OPTIONAL<ErrorProtectionRequest>;
            let errorCode: OPTIONAL<Code>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "certification-path": (_el: _Element): void => {
                    certification_path = $._decode_explicit<CertificationPath>(
                        () => _decode_CertificationPath
                    )(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                time: (_el: _Element): void => {
                    time = $._decode_explicit<Time>(() => _decode_Time)(_el);
                },
                random: (_el: _Element): void => {
                    random = $._decode_explicit<BIT_STRING>(
                        () => $._decodeBitString
                    )(_el);
                },
                target: (_el: _Element): void => {
                    target = $._decode_explicit<ProtectionRequest>(
                        () => _decode_ProtectionRequest
                    )(_el);
                },
                operationCode: (_el: _Element): void => {
                    operationCode = $._decode_explicit<Code>(
                        () => _decode_Code
                    )(_el);
                },
                errorProtection: (_el: _Element): void => {
                    errorProtection = $._decode_explicit<
                        ErrorProtectionRequest
                    >(() => _decode_ErrorProtectionRequest)(_el);
                },
                errorCode: (_el: _Element): void => {
                    errorCode = $._decode_explicit<Code>(() => _decode_Code)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SecurityParameters,
                _extension_additions_list_spec_for_SecurityParameters,
                _root_component_type_list_2_spec_for_SecurityParameters,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SecurityParameters /* SET_CONSTRUCTOR_CALL */(
                certification_path,
                name,
                time,
                random,
                target,
                operationCode,
                errorProtection,
                errorCode,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SecurityParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityParameters */
let _cached_encoder_for_SecurityParameters: $.ASN1Encoder<
    SecurityParameters
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityParameters */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityParameters */
/**
 * @summary Encodes a(n) SecurityParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityParameters, encoded as an ASN.1 Element.
 */
export function _encode_SecurityParameters(
    value: SecurityParameters,
    elGetter: $.ASN1Encoder<SecurityParameters>
) {
    if (!_cached_encoder_for_SecurityParameters) {
        _cached_encoder_for_SecurityParameters = function (
            value: SecurityParameters,
            elGetter: $.ASN1Encoder<SecurityParameters>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.certification_path ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_CertificationPath,
                                      $.BER
                                  )(value.certification_path, $.BER),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.name, $.BER),
                            /* IF_ABSENT  */ value.time === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_Time,
                                      $.BER
                                  )(value.time, $.BER),
                            /* IF_ABSENT  */ value.random === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeBitString,
                                      $.BER
                                  )(value.random, $.BER),
                            /* IF_ABSENT  */ value.target === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_ProtectionRequest,
                                      $.BER
                                  )(value.target, $.BER),
                            /* IF_ABSENT  */ value.operationCode === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      6,
                                      () => _encode_Code,
                                      $.BER
                                  )(value.operationCode, $.BER),
                            /* IF_ABSENT  */ value.errorProtection === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () => _encode_ErrorProtectionRequest,
                                      $.BER
                                  )(value.errorProtection, $.BER),
                            /* IF_ABSENT  */ value.errorCode === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      9,
                                      () => _encode_Code,
                                      $.BER
                                  )(value.errorCode, $.BER),
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
    return _cached_encoder_for_SecurityParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityParameters */

/* eslint-enable */
