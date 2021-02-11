/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
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
import {
    ReplaceAvlRsp_result,
    _decode_ReplaceAvlRsp_result,
    _encode_ReplaceAvlRsp_result,
} from "../PkiPMIProtocolSpecifications/ReplaceAvlRsp-result.ta";
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
export {
    ReplaceAvlRsp_result,
    _decode_ReplaceAvlRsp_result,
    _encode_ReplaceAvlRsp_result,
} from "../PkiPMIProtocolSpecifications/ReplaceAvlRsp-result.ta";

/* START_OF_SYMBOL_DEFINITION ReplaceAvlRsp */
/**
 * @summary ReplaceAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplaceAvlRsp ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   result        CHOICE {
 *     success       [0]  RepAvlOK,
 *     failure       [1]  RepAvlErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class ReplaceAvlRsp {
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
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: ReplaceAvlRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ReplaceAvlRsp
     * @description
     *
     * This takes an `object` and converts it to a `ReplaceAvlRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReplaceAvlRsp`.
     * @returns {ReplaceAvlRsp}
     */
    public static _from_object(
        _o: { [_K in keyof ReplaceAvlRsp]: ReplaceAvlRsp[_K] }
    ): ReplaceAvlRsp {
        return new ReplaceAvlRsp(
            _o.version,
            _o.timeStamp,
            _o.sequence,
            _o.result,
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
}
/* END_OF_SYMBOL_DEFINITION ReplaceAvlRsp */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReplaceAvlRsp */
/**
 * @summary The Leading Root Component Types of ReplaceAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReplaceAvlRsp: $.ComponentSpec[] = [
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
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReplaceAvlRsp */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReplaceAvlRsp */
/**
 * @summary The Trailing Root Component Types of ReplaceAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReplaceAvlRsp: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReplaceAvlRsp */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReplaceAvlRsp */
/**
 * @summary The Extension Addition Component Types of ReplaceAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReplaceAvlRsp: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReplaceAvlRsp */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplaceAvlRsp */
let _cached_decoder_for_ReplaceAvlRsp: $.ASN1Decoder<ReplaceAvlRsp> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplaceAvlRsp */

/* START_OF_SYMBOL_DEFINITION _decode_ReplaceAvlRsp */
/**
 * @summary Decodes an ASN.1 element into a(n) ReplaceAvlRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplaceAvlRsp} The decoded data structure.
 */
export function _decode_ReplaceAvlRsp(el: _Element) {
    if (!_cached_decoder_for_ReplaceAvlRsp) {
        _cached_decoder_for_ReplaceAvlRsp = function (
            el: _Element
        ): ReplaceAvlRsp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<AVMPversion> =
                ReplaceAvlRsp._default_value_for_version;
            let timeStamp!: GeneralizedTime;
            let sequence!: AVMPsequence;
            let result!: ReplaceAvlRsp_result;
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
                result: (_el: _Element): void => {
                    result = _decode_ReplaceAvlRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReplaceAvlRsp,
                _extension_additions_list_spec_for_ReplaceAvlRsp,
                _root_component_type_list_2_spec_for_ReplaceAvlRsp,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ReplaceAvlRsp(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                timeStamp,
                sequence,
                result,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ReplaceAvlRsp(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReplaceAvlRsp */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplaceAvlRsp */
let _cached_encoder_for_ReplaceAvlRsp: $.ASN1Encoder<ReplaceAvlRsp> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplaceAvlRsp */

/* START_OF_SYMBOL_DEFINITION _encode_ReplaceAvlRsp */
/**
 * @summary Encodes a(n) ReplaceAvlRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplaceAvlRsp, encoded as an ASN.1 Element.
 */
export function _encode_ReplaceAvlRsp(
    value: ReplaceAvlRsp,
    elGetter: $.ASN1Encoder<ReplaceAvlRsp>
) {
    if (!_cached_encoder_for_ReplaceAvlRsp) {
        _cached_encoder_for_ReplaceAvlRsp = function (
            value: ReplaceAvlRsp,
            elGetter: $.ASN1Encoder<ReplaceAvlRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                ReplaceAvlRsp._default_value_for_version
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
                            /* REQUIRED   */ _encode_ReplaceAvlRsp_result(
                                value.result,
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
    return _cached_encoder_for_ReplaceAvlRsp(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReplaceAvlRsp */

/* eslint-enable */
