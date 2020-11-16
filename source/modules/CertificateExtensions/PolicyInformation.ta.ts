/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertPolicyId,
    _decode_CertPolicyId,
    _encode_CertPolicyId,
} from "../CertificateExtensions/CertPolicyId.ta";
import {
    PolicyQualifierInfo,
    _decode_PolicyQualifierInfo,
    _encode_PolicyQualifierInfo,
} from "../CertificateExtensions/PolicyQualifierInfo.ta";
export {
    CertPolicyId,
    _decode_CertPolicyId,
    _encode_CertPolicyId,
} from "../CertificateExtensions/CertPolicyId.ta";
export {
    PolicyQualifierInfo,
    _decode_PolicyQualifierInfo,
    _encode_PolicyQualifierInfo,
} from "../CertificateExtensions/PolicyQualifierInfo.ta";

/* START_OF_SYMBOL_DEFINITION PolicyInformation */
/**
 * @summary PolicyInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PolicyInformation ::= SEQUENCE {
 *   policyIdentifier  CertPolicyId,
 *   policyQualifiers  SEQUENCE SIZE (1..MAX) OF PolicyQualifierInfo OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class PolicyInformation {
    constructor(
        /**
         * @summary `policyIdentifier`.
         * @public
         * @readonly
         */
        readonly policyIdentifier: CertPolicyId,
        /**
         * @summary `policyQualifiers`.
         * @public
         * @readonly
         */
        readonly policyQualifiers: OPTIONAL<PolicyQualifierInfo[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PolicyInformation
     * @description
     *
     * This takes an `object` and converts it to a `PolicyInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PolicyInformation`.
     * @returns {PolicyInformation}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof PolicyInformation]: PolicyInformation[_K] }>
    ): PolicyInformation {
        return new PolicyInformation(
            _o.policyIdentifier,
            _o.policyQualifiers,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PolicyInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PolicyInformation */
/**
 * @summary The Leading Root Component Types of PolicyInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PolicyInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "policyIdentifier",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "policyQualifiers",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PolicyInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PolicyInformation */
/**
 * @summary The Trailing Root Component Types of PolicyInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PolicyInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PolicyInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PolicyInformation */
/**
 * @summary The Extension Addition Component Types of PolicyInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PolicyInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PolicyInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PolicyInformation */
let _cached_decoder_for_PolicyInformation: $.ASN1Decoder<
    PolicyInformation
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PolicyInformation */

/* START_OF_SYMBOL_DEFINITION _decode_PolicyInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) PolicyInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PolicyInformation} The decoded data structure.
 */
export function _decode_PolicyInformation(el: _Element) {
    if (!_cached_decoder_for_PolicyInformation) {
        _cached_decoder_for_PolicyInformation = function (
            el: _Element
        ): PolicyInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let policyIdentifier!: CertPolicyId;
            let policyQualifiers: OPTIONAL<PolicyQualifierInfo[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                policyIdentifier: (_el: _Element): void => {
                    policyIdentifier = _decode_CertPolicyId(_el);
                },
                policyQualifiers: (_el: _Element): void => {
                    policyQualifiers = $._decodeSequenceOf<PolicyQualifierInfo>(
                        () => _decode_PolicyQualifierInfo
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PolicyInformation,
                _extension_additions_list_spec_for_PolicyInformation,
                _root_component_type_list_2_spec_for_PolicyInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PolicyInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                policyIdentifier,
                policyQualifiers,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PolicyInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PolicyInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PolicyInformation */
let _cached_encoder_for_PolicyInformation: $.ASN1Encoder<
    PolicyInformation
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PolicyInformation */

/* START_OF_SYMBOL_DEFINITION _encode_PolicyInformation */
/**
 * @summary Encodes a(n) PolicyInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyInformation, encoded as an ASN.1 Element.
 */
export function _encode_PolicyInformation(
    value: PolicyInformation,
    elGetter: $.ASN1Encoder<PolicyInformation>
) {
    if (!_cached_encoder_for_PolicyInformation) {
        _cached_encoder_for_PolicyInformation = function (
            value: PolicyInformation,
            elGetter: $.ASN1Encoder<PolicyInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertPolicyId(
                                value.policyIdentifier,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.policyQualifiers ===
                            undefined
                                ? undefined
                                : $._encodeSequenceOf<PolicyQualifierInfo>(
                                      () => _encode_PolicyQualifierInfo,
                                      $.BER
                                  )(value.policyQualifiers, $.BER),
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
    return _cached_encoder_for_PolicyInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PolicyInformation */

/* eslint-enable */
