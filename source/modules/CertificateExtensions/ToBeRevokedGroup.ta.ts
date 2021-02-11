/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertificateGroup,
    _decode_CertificateGroup,
    _encode_CertificateGroup,
} from "../CertificateExtensions/CertificateGroup.ta";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";
import {
    ReasonInfo,
    _decode_ReasonInfo,
    _encode_ReasonInfo,
} from "../CertificateExtensions/ReasonInfo.ta";
export {
    CertificateGroup,
    _decode_CertificateGroup,
    _encode_CertificateGroup,
} from "../CertificateExtensions/CertificateGroup.ta";
export {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";
export {
    ReasonInfo,
    _decode_ReasonInfo,
    _encode_ReasonInfo,
} from "../CertificateExtensions/ReasonInfo.ta";

/* START_OF_SYMBOL_DEFINITION ToBeRevokedGroup */
/**
 * @summary ToBeRevokedGroup
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ToBeRevokedGroup ::= SEQUENCE {
 *   certificateIssuer  [0]  GeneralName OPTIONAL,
 *   reasonInfo         [1]  ReasonInfo OPTIONAL,
 *   revocationTime          GeneralizedTime,
 *   certificateGroup        CertificateGroup,
 *   ... }
 * ```
 *
 * @class
 */
export class ToBeRevokedGroup {
    constructor(
        /**
         * @summary `certificateIssuer`.
         * @public
         * @readonly
         */
        readonly certificateIssuer: OPTIONAL<GeneralName>,
        /**
         * @summary `reasonInfo`.
         * @public
         * @readonly
         */
        readonly reasonInfo: OPTIONAL<ReasonInfo>,
        /**
         * @summary `revocationTime`.
         * @public
         * @readonly
         */
        readonly revocationTime: GeneralizedTime,
        /**
         * @summary `certificateGroup`.
         * @public
         * @readonly
         */
        readonly certificateGroup: CertificateGroup,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ToBeRevokedGroup
     * @description
     *
     * This takes an `object` and converts it to a `ToBeRevokedGroup`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ToBeRevokedGroup`.
     * @returns {ToBeRevokedGroup}
     */
    public static _from_object(
        _o: { [_K in keyof ToBeRevokedGroup]: ToBeRevokedGroup[_K] }
    ): ToBeRevokedGroup {
        return new ToBeRevokedGroup(
            _o.certificateIssuer,
            _o.reasonInfo,
            _o.revocationTime,
            _o.certificateGroup,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ToBeRevokedGroup */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ToBeRevokedGroup */
/**
 * @summary The Leading Root Component Types of ToBeRevokedGroup
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ToBeRevokedGroup: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certificateIssuer",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "reasonInfo",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "revocationTime",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certificateGroup",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ToBeRevokedGroup */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ToBeRevokedGroup */
/**
 * @summary The Trailing Root Component Types of ToBeRevokedGroup
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ToBeRevokedGroup: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ToBeRevokedGroup */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ToBeRevokedGroup */
/**
 * @summary The Extension Addition Component Types of ToBeRevokedGroup
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ToBeRevokedGroup: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ToBeRevokedGroup */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ToBeRevokedGroup */
let _cached_decoder_for_ToBeRevokedGroup: $.ASN1Decoder<ToBeRevokedGroup> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ToBeRevokedGroup */

/* START_OF_SYMBOL_DEFINITION _decode_ToBeRevokedGroup */
/**
 * @summary Decodes an ASN.1 element into a(n) ToBeRevokedGroup
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ToBeRevokedGroup} The decoded data structure.
 */
export function _decode_ToBeRevokedGroup(el: _Element) {
    if (!_cached_decoder_for_ToBeRevokedGroup) {
        _cached_decoder_for_ToBeRevokedGroup = function (
            el: _Element
        ): ToBeRevokedGroup {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certificateIssuer: OPTIONAL<GeneralName>;
            let reasonInfo: OPTIONAL<ReasonInfo>;
            let revocationTime!: GeneralizedTime;
            let certificateGroup!: CertificateGroup;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                certificateIssuer: (_el: _Element): void => {
                    certificateIssuer = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                reasonInfo: (_el: _Element): void => {
                    reasonInfo = $._decode_implicit<ReasonInfo>(
                        () => _decode_ReasonInfo
                    )(_el);
                },
                revocationTime: (_el: _Element): void => {
                    revocationTime = $._decodeGeneralizedTime(_el);
                },
                certificateGroup: (_el: _Element): void => {
                    certificateGroup = _decode_CertificateGroup(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ToBeRevokedGroup,
                _extension_additions_list_spec_for_ToBeRevokedGroup,
                _root_component_type_list_2_spec_for_ToBeRevokedGroup,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ToBeRevokedGroup(
                /* SEQUENCE_CONSTRUCTOR_CALL */ certificateIssuer,
                reasonInfo,
                revocationTime,
                certificateGroup,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ToBeRevokedGroup(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ToBeRevokedGroup */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ToBeRevokedGroup */
let _cached_encoder_for_ToBeRevokedGroup: $.ASN1Encoder<ToBeRevokedGroup> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ToBeRevokedGroup */

/* START_OF_SYMBOL_DEFINITION _encode_ToBeRevokedGroup */
/**
 * @summary Encodes a(n) ToBeRevokedGroup into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ToBeRevokedGroup, encoded as an ASN.1 Element.
 */
export function _encode_ToBeRevokedGroup(
    value: ToBeRevokedGroup,
    elGetter: $.ASN1Encoder<ToBeRevokedGroup>
) {
    if (!_cached_encoder_for_ToBeRevokedGroup) {
        _cached_encoder_for_ToBeRevokedGroup = function (
            value: ToBeRevokedGroup,
            elGetter: $.ASN1Encoder<ToBeRevokedGroup>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.certificateIssuer ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      $.BER
                                  )(value.certificateIssuer, $.BER),
                            /* IF_ABSENT  */ value.reasonInfo === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_ReasonInfo,
                                      $.BER
                                  )(value.reasonInfo, $.BER),
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.revocationTime,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertificateGroup(
                                value.certificateGroup,
                                $.BER
                            ),
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
    return _cached_encoder_for_ToBeRevokedGroup(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ToBeRevokedGroup */

/* eslint-enable */
