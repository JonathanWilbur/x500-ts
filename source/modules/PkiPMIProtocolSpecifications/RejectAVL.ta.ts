/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AVMP_error,
    _decode_AVMP_error,
    _encode_AVMP_error,
    _enum_for_AVMP_error,
} from "../PkiPMIProtocolSpecifications/AVMP-error.ta";
import {
    AVMPsequence,
    _decode_AVMPsequence,
    _encode_AVMPsequence,
} from "../PkiPMIProtocolSpecifications/AVMPsequence.ta";
import {
    AVMPversion,
    AVMPversion_v1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_AVMPversion,
    _encode_AVMPversion,
    _enum_for_AVMPversion,
} from "../PkiPMIProtocolSpecifications/AVMPversion.ta";
export {
    AVMP_error,
    AVMP_error_constrainedRequired /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_duplicateAVL /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_invalidAvlSignature /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_invalidAvlVersion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_invalidContentComponent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_maxAVLsExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_missingAvlComponent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_missingContent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_missingContentComponent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_nonConstrainedRequired /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_noReason /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_notAllowedForConstrainedAVLEntity /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_protocolError /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_sequenceError /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_unknownAVL /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_unknownAvlEntity /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_unknownCert /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_unknownContentType /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_unsupportedAVMPversion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_unsupportedCriticalEntryExtension /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_unsupportedCriticalExtension /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_unsupportedScopeRestriction /* IMPORTED_LONG_ENUMERATION_ITEM */,
    constrainedRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    duplicateAVL /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalidAvlSignature /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalidAvlVersion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalidContentComponent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    maxAVLsExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    missingAvlComponent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    missingContent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    missingContentComponent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    nonConstrainedRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    noReason /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    notAllowedForConstrainedAVLEntity /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    protocolError /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    sequenceError /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unknownAVL /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unknownAvlEntity /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unknownCert /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unknownContentType /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unsupportedAVMPversion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unsupportedCriticalEntryExtension /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unsupportedCriticalExtension /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unsupportedScopeRestriction /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AVMP_error,
    _encode_AVMP_error,
    _enum_for_AVMP_error,
} from "../PkiPMIProtocolSpecifications/AVMP-error.ta";
export {
    AVMPcommonComponents,
    _decode_AVMPcommonComponents,
    _encode_AVMPcommonComponents,
} from "../PkiPMIProtocolSpecifications/AVMPcommonComponents.ta";
export {
    AVMPsequence,
    _decode_AVMPsequence,
    _encode_AVMPsequence,
} from "../PkiPMIProtocolSpecifications/AVMPsequence.ta";
export {
    AVMPversion,
    AVMPversion_v1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMPversion_v2 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMPversion_v3 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    v1 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    v2 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    v3 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AVMPversion,
    _encode_AVMPversion,
    _enum_for_AVMPversion,
} from "../PkiPMIProtocolSpecifications/AVMPversion.ta";

/* START_OF_SYMBOL_DEFINITION RejectAVL */
/**
 * @summary RejectAVL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RejectAVL ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   reason        AVMP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class RejectAVL {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<AVMPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: GeneralizedTime /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: AVMP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RejectAVL
     * @description
     *
     * This takes an `object` and converts it to a `RejectAVL`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RejectAVL`.
     * @returns {RejectAVL}
     */
    public static _from_object(
        _o: { [_K in keyof RejectAVL]: RejectAVL[_K] }
    ): RejectAVL {
        return new RejectAVL(
            _o.version,
            _o.timeStamp,
            _o.sequence,
            _o.reason,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return AVMPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_AVMPversion;
    /**
     * @summary The enum used as the type of the component `reason`
     * @public
     * @static
     */

    public static _enum_for_reason = _enum_for_AVMP_error;
}
/* END_OF_SYMBOL_DEFINITION RejectAVL */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RejectAVL */
/**
 * @summary The Leading Root Component Types of RejectAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RejectAVL: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "timeStamp",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "reason",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RejectAVL */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RejectAVL */
/**
 * @summary The Trailing Root Component Types of RejectAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RejectAVL: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RejectAVL */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RejectAVL */
/**
 * @summary The Extension Addition Component Types of RejectAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RejectAVL: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RejectAVL */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RejectAVL */
let _cached_decoder_for_RejectAVL: $.ASN1Decoder<RejectAVL> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RejectAVL */

/* START_OF_SYMBOL_DEFINITION _decode_RejectAVL */
/**
 * @summary Decodes an ASN.1 element into a(n) RejectAVL
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RejectAVL} The decoded data structure.
 */
export function _decode_RejectAVL(el: _Element) {
    if (!_cached_decoder_for_RejectAVL) {
        _cached_decoder_for_RejectAVL = function (el: _Element): RejectAVL {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<AVMPversion> =
                RejectAVL._default_value_for_version;
            let timeStamp!: GeneralizedTime;
            let sequence!: AVMPsequence;
            let reason!: AVMP_error;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: _Element): void => {
                    timeStamp = $._decodeGeneralizedTime(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                reason: (_el: _Element): void => {
                    reason = _decode_AVMP_error(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RejectAVL,
                _extension_additions_list_spec_for_RejectAVL,
                _root_component_type_list_2_spec_for_RejectAVL,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RejectAVL(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                timeStamp,
                sequence,
                reason,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RejectAVL(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RejectAVL */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RejectAVL */
let _cached_encoder_for_RejectAVL: $.ASN1Encoder<RejectAVL> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RejectAVL */

/* START_OF_SYMBOL_DEFINITION _encode_RejectAVL */
/**
 * @summary Encodes a(n) RejectAVL into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RejectAVL, encoded as an ASN.1 Element.
 */
export function _encode_RejectAVL(
    value: RejectAVL,
    elGetter: $.ASN1Encoder<RejectAVL>
) {
    if (!_cached_encoder_for_RejectAVL) {
        _cached_encoder_for_RejectAVL = function (
            value: RejectAVL,
            elGetter: $.ASN1Encoder<RejectAVL>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                RejectAVL._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(value.version, $.BER),
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.timeStamp,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AVMP_error(
                                value.reason,
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
    return _cached_encoder_for_RejectAVL(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RejectAVL */

/* eslint-enable */
