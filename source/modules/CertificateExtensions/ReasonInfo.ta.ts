/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CRLReason,
    _decode_CRLReason,
    _encode_CRLReason,
    _enum_for_CRLReason,
} from "../CertificateExtensions/CRLReason.ta";
import {
    HoldInstruction,
    _decode_HoldInstruction,
    _encode_HoldInstruction,
} from "../CertificateExtensions/HoldInstruction.ta";
export {
    aACompromise /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    affiliationChanged /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    cACompromise /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    certificateHold /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    cessationOfOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CRLReason,
    CRLReason_aACompromise /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_affiliationChanged /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_cACompromise /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_certificateHold /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_cessationOfOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_keyCompromise /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_privilegeWithdrawn /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_removeFromCRL /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_superseded /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_unspecified /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_weakAlgorithmOrKey /* IMPORTED_LONG_ENUMERATION_ITEM */,
    keyCompromise /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    privilegeWithdrawn /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    removeFromCRL /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    superseded /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unspecified /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    weakAlgorithmOrKey /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_CRLReason,
    _encode_CRLReason,
    _enum_for_CRLReason,
} from "../CertificateExtensions/CRLReason.ta";
export {
    HoldInstruction,
    _decode_HoldInstruction,
    _encode_HoldInstruction,
} from "../CertificateExtensions/HoldInstruction.ta";

/* START_OF_SYMBOL_DEFINITION ReasonInfo */
/**
 * @summary ReasonInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReasonInfo ::= SEQUENCE {
 *   reasonCode           CRLReason,
 *   holdInstructionCode  HoldInstruction OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ReasonInfo {
    constructor(
        /**
         * @summary `reasonCode`.
         * @public
         * @readonly
         */
        readonly reasonCode: CRLReason,
        /**
         * @summary `holdInstructionCode`.
         * @public
         * @readonly
         */
        readonly holdInstructionCode: OPTIONAL<HoldInstruction>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ReasonInfo
     * @description
     *
     * This takes an `object` and converts it to a `ReasonInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReasonInfo`.
     * @returns {ReasonInfo}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ReasonInfo]: ReasonInfo[_K] }>
    ): ReasonInfo {
        return new ReasonInfo(
            _o.reasonCode,
            _o.holdInstructionCode,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `reasonCode`
     * @public
     * @static
     */

    public static _enum_for_reasonCode = _enum_for_CRLReason;
}
/* END_OF_SYMBOL_DEFINITION ReasonInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReasonInfo */
/**
 * @summary The Leading Root Component Types of ReasonInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReasonInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "reasonCode",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "holdInstructionCode",
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReasonInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReasonInfo */
/**
 * @summary The Trailing Root Component Types of ReasonInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReasonInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReasonInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReasonInfo */
/**
 * @summary The Extension Addition Component Types of ReasonInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReasonInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReasonInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReasonInfo */
let _cached_decoder_for_ReasonInfo: $.ASN1Decoder<ReasonInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReasonInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ReasonInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) ReasonInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReasonInfo} The decoded data structure.
 */
export function _decode_ReasonInfo(el: _Element) {
    if (!_cached_decoder_for_ReasonInfo) {
        _cached_decoder_for_ReasonInfo = function (el: _Element): ReasonInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let reasonCode!: CRLReason;
            let holdInstructionCode: OPTIONAL<HoldInstruction>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                reasonCode: (_el: _Element): void => {
                    reasonCode = _decode_CRLReason(_el);
                },
                holdInstructionCode: (_el: _Element): void => {
                    holdInstructionCode = _decode_HoldInstruction(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReasonInfo,
                _extension_additions_list_spec_for_ReasonInfo,
                _root_component_type_list_2_spec_for_ReasonInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ReasonInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ reasonCode,
                holdInstructionCode,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ReasonInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReasonInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReasonInfo */
let _cached_encoder_for_ReasonInfo: $.ASN1Encoder<ReasonInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReasonInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ReasonInfo */
/**
 * @summary Encodes a(n) ReasonInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReasonInfo, encoded as an ASN.1 Element.
 */
export function _encode_ReasonInfo(
    value: ReasonInfo,
    elGetter: $.ASN1Encoder<ReasonInfo>
) {
    if (!_cached_encoder_for_ReasonInfo) {
        _cached_encoder_for_ReasonInfo = function (
            value: ReasonInfo,
            elGetter: $.ASN1Encoder<ReasonInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CRLReason(
                                value.reasonCode,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.holdInstructionCode ===
                            undefined
                                ? undefined
                                : _encode_HoldInstruction(
                                      value.holdInstructionCode,
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
    return _cached_encoder_for_ReasonInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReasonInfo */

/* eslint-enable */
